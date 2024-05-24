// Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-var */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-globals */
/* global self indexedDB XMLHttpRequest onconnect */

self.datarouterEndpoint = 'undefined/datarouter/api/v1/public/data';
self.clientInfo = {
    AppID: 'epic-unreal-engine',
    AppVersion: '3.34.0',
    AppEnvironment: 'prod',
    UploadType: 'eteventstream',
    SessionID: '{xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx}'.replace(new RegExp('[x]', 'g'), function() {
        // random hex value
        return (Math.random() * 16 | 0).toString(16); //eslint-disable-line no-bitwise
    }).replace('y', function() {
        // reserved character bit
        return ['8', '9', 'a', 'b'][(Math.random() * 4 | 0)]; //eslint-disable-line no-bitwise
    })
};

/**
 * Starts a transaction, retrieves the StatsObjectStore, and runs the specified success and error callbacks.
 *
 * Creates StatsObjectStore if it doesn't exist as an autoincremented object store.
 * Events get an auto-incremented id as primary key, and don't need to be accessed by any specific identifier
 *
 * @param runOnSuccess callback to run on successful start of indexedDB transaction with StatsObjectStore
 * @param runOnError callback to run on failed start of indexedDB transaction. Runs in onblocked and onfailure
 */
self.runOnStatsDb = function(runOnSuccess, runOnError) {
    if(!indexedDB) {
        return;
    }
    var open = indexedDB.open('StatsDatabase', 1);
    // Create the schema
    open.onblocked = function() {
        if (runOnError) {
            runOnError();
        }
        if(console && console.debug) { console.debug('blocked'); }
    };
    open.onupgradeneeded = function() {
        var db = open.result;
        if (!db.objectStoreNames.contains('StatsObjectStore')) {
            db.createObjectStore('StatsObjectStore', {autoIncrement: true});
        }
    };
    open.onerror = function() {
        if (runOnError) {
            runOnError();
        }
        if(console && console.debug) { console.debug('error', open.error); }
    };
    open.onsuccess = function() {
        var db = open.result;
        var tx = db.transaction('StatsObjectStore', 'readwrite');
        var store = tx.objectStore('StatsObjectStore');

        runOnSuccess(store);

        // Close the db when the transaction is done
        tx.oncomplete = 
    };
};

/**
 * Accepts an eteventstream Event object to push to the pending events store. Calls to the runOnStatsDb
 * wrapper to add the event to StatsObjectStore. Does nothing with it on failure.
 *
 * @param event eteventstream event to be sent to DataRouter
 */
self.pushEvent = function(event) {
    var onSuccess = 
    self.runOnStatsDb(onSuccess);
};

/**
 * Called in the runOnStatsDb wrapper. Gets a cursor to StatsObjectStore, pops the next <batchSize>
 * objects, removes them from the store, and sends them to DataRouter.
 *
 * NOTE: We have the potential to lose data here. There is a gap between popping objects and sending them
 * where we aren't persisting them.
 *
 * @param batchSizeKbMax the upper bound in kb of objects to include in the next batch to DataRouter
 * @param shouldDropBatch If set, we drop part of the backlogged data and send a metric that we dropped information
 * @returns {*}
 */
self.popNextBatch = function(batchSizeKbMax, shouldDropBatch) {
    var onSuccess = function(store) {
        var results = [];
        // If we're far enough behind that we need to drop some events, set the limit
        // to drop several batches since we're not keeping up just doing one batch at a time
        var maxByteCount = !shouldDropBatch ?
            batchSizeKbMax * 1024 :
            batchSizeKbMax * 1024 * 10;
        var approxByteCount = 0;

        var request = store.openCursor();
        request.onsuccess = function(event) {
            // Iterate through the cursor up to the batch size limit and pop events out of the queue
            var cursor = event.target.result;
            var approxAdditionalBytes;
            var queryParams;
            var xhr;

            if (cursor && (approxByteCount < maxByteCount)) {
                approxAdditionalBytes = cursor.value ? JSON.stringify(cursor.value).length : 0;
                if (approxByteCount + approxAdditionalBytes < maxByteCount) {
                    if (cursor.value && !shouldDropBatch) {
                        results.push(cursor.value);
                    }
                    approxByteCount += approxAdditionalBytes;
                    cursor.delete();
                    cursor.continue();
                }
            } else {
                if (shouldDropBatch) {
                    results.push({
                        EventName: 'Portal.Web.DroppedData',
                        DateOffset: '00:00:00.000',
                        DroppedReason: 'OverBacklogLimit',
                        DroppedDataKb: approxByteCount
                    });
                }

                if (results && results.length > 0) { //eslint-disable-line no-lonely-if
                    queryParams = '?' +
                        'AppID=' + encodeURIComponent(self.clientInfo.AppID) +
                        '&AppVersion=' + encodeURIComponent(self.clientInfo.AppVersion) +
                        '&AppEnvironment=' + encodeURIComponent(self.clientInfo.AppEnvironment) +
                        '&UploadType=' + encodeURIComponent(self.clientInfo.UploadType) +

                        // if nothing present, datarouter interprets a blank string differently than a pipe separating empty strings
                        '&UserID=' + encodeURIComponent(self.clientInfo.UserID || '||') +
                        '&SessionID=' + encodeURIComponent(self.clientInfo.SessionID);

                        // console is undefined in some cases and is causing a sentry error
                        if(console && console.debug) { console.debug('sending batch: ' + approxByteCount + ", ", self.datarouterEndpoint + queryParams); }

                    xhr = new XMLHttpRequest();
                    xhr.open('POST', self.datarouterEndpoint + queryParams, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({Events: results}));
                } else {
                    if(console && console.debug) { console.debug('No pending requests, not sending any data. Dropped data: ', approxByteCount); }
                }
            }
        };
    };
    return self.runOnStatsDb(onSuccess);
};

/**
 * Cron to check for queued events that need sent to DataRouter. Sends a max number of events in
 * a single batch, then schedules the next job a variable time in ms from now depending on how many
 * events are left queued.
 *
 * 0-99: Wait 5000ms for next batch
 * >100: Wait 2500ms for next batch
 * >1000: We are getting backed up, clear some data and send a dropped data analytic event
 */
self.batchCron = function(batchSizeKbMax) {
    var calculateTimeoutInterval;
    var setNextTimeout;
    var onError;

    // Via Analytics team, ideal batch size is ~64k payload
    self.popNextBatch(batchSizeKbMax || 64);

    calculateTimeoutInterval = function(eventCount) {
        if (eventCount > 100) {
            return 2500;
        }
        return 5000;
    };
    setNextTimeout = function(store) {
        var countRequest = store.count();
        countRequest.onsuccess = function(event) {
            var remainingCount = event.target.result;
            setTimeout(
                function() {
                    var nextBatchSize = remainingCount > 500 ? 64 : 128;
                    self.batchCron(nextBatchSize);
                },
                calculateTimeoutInterval(remainingCount)
            );
        };
    };
    onError = 

    self.runOnStatsDb(setNextTimeout, onError);
};

/**
 * When an instance of the page loads, it calls onconnect to connect to the
 * SharedWorker. Add a listener so we are aware of when the process sends us
 * an event to queue for processing.
 *
 * @param connectData Information about the connection between the app tab and this worker
 */
onconnect = function(connectData) {
    var port = connectData.ports[0];

    // Listen for event messages from the connecting app instance
    port.addEventListener('message', function(e) {
        if (e && e.data) {
            self.pushEvent(e.data);
        }
    });

    // If the batch cron job isn't running globally in the worker, kick it off
    if (!self.runningBatchCron) {
        self.runningBatchCron = setTimeout(self.batchCron, 5000);
    }

    port.start();
};

// Support onmessage for Worker if SharedWorker isn't available in the browser
onmessage = 
// If the batch cron job isn't running globally in the worker, kick it off
if (!self.runningBatchCron) {
    self.runningBatchCron = setTimeout(self.batchCron, 5000);
}
