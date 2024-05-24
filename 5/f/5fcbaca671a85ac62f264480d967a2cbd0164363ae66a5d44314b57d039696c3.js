/**
 * Service Worker For Push Notifications
 */

var _aimtellDB;
var _aimtellVersion = 2.70;
var _aimtellWL = false;
var _aimtellSource = null;
var _aimtellPayload = [];


//auto update service workers
self.addEventListener('install', function(event) {
    _aimtellConsoleOutput("Installing v"+_aimtellVersion);
    event.waitUntil(self.skipWaiting());
});

//auto update service workers
self.addEventListener('activate', function(event) {
    _aimtellConsoleOutput("Activating v"+_aimtellVersion);
    event.waitUntil(self.clients.claim());
    _aimtellDBInit(null);
});

self.addEventListener('pushsubscriptionchange', function(event) {
    fetch('https://analytics.aimtell.com/validate/subscription-change').then(function(response) {});
});



//forgiving console ouput  
function _aimtellConsoleOutput(message) {

    try {

        if (self.location.pathname == "/aimtell-worker.js") {
            console.log("[Aimtell] " + message)
        }

    } catch (err) {
        console.log("[Push]" + err);
    }



}


function _aimtellDBInit(callback) {

    //if we failed to open or did not support indexDB 
    //we will fire a callback and ensure we don't continue
    if (!indexedDB) { 
        if (callback !== null) { callback(false); }
        return false;
    }

    
    var _aimtellDBOpenRequest = indexedDB.open('_aimtellDatabase', 1);

    _aimtellDBOpenRequest.onupgradeneeded = function(e) {
        _aimtellDB = e.target.result;
        if (!_aimtellDB.objectStoreNames.contains('store')) {
            var storeOS = _aimtellDB.createObjectStore('store', {
                keyPath: 'name'
            });

            //when done hit callback
            storeOS.onsuccess = function(e)  {
                if (callback !== null) { callback(true);}
            }
        }
        
    };
    _aimtellDBOpenRequest.onsuccess = function(e) {
        _aimtellDB = e.target.result;
        if (callback !== null) {
            callback(true);
        }
    };
    _aimtellDBOpenRequest.onerror = function(e) {

        if (callback !== null) {
            callback(false);
        }
    };


}




function _aimtellHashString(str, asString, seed) {
    
    var i, l, hval = (seed === undefined) ? 0x811c9dc5 : seed;
    
    if(!str) str = "";

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if( asString ){
        // Convert to 8 digit hex string
        return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
    }
    return hval >>> 0;
}



function _aimtellDBGet(key, callback) {

    _aimtellDBInit(function(result) {

        //if we failed to open or did not support indexDB 
        //we will fire a callback and ensure we don't continue
        if (result === false) { 
            if (callback !== null) { callback(false); }
            return false; 
        }

        //open teh db
        var transaction = _aimtellDB.transaction(['store'], 'readwrite');
        var store = transaction.objectStore('store');

        request = store.get(key);

        request.onerror = function(e) {
            if (callback !== null) {
                callback(e.target.result);
            }
        };
        request.onsuccess = function(e) {
            if (callback !== null) {
                callback(e.target.result);
            }
        };


    });



}


/**
 * store some values in indexdb
 * @param  {[type]} key   [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function _aimtellDBSet(key, value) {

   
    _aimtellDBInit(function(result) {
        
        //if we failed to open or did not support indexDB 
        //we will fail silently without needing for callback support
        if (result === false) {return false;}

        var transaction = _aimtellDB.transaction(['store'], 'readwrite');
        var store = transaction.objectStore('store');
        var request = store.get("aimtell");

        request.onsuccess = function(e) {
            var data = request.result;

            //if this doesn't exist yet, make it
            if(typeof data == "undefined"){
                data = {name: "aimtell"};
            }

            data[key] = value;
            store.put(data);
        };


    });



}





function _aimtellGrabDB(){
    
    return new Promise((resolve,reject) => {
        _aimtellDBGet("aimtell", function(data){
            var result = (typeof data != "undefined") ? data : null;
            resolve(result);
        })
       
    });
}

function _aimtellLogNetwork(type, message, status_code){

    //additional data
    var postPayload = {};
    postPayload.version = _aimtellVersion;
    postPayload.type = type; 
    postPayload.message = message; 

    //fire off the request
    //we can query URL params in realtime, so lets add the important ones here
    fetch('https://log.aimtell.com/network?v='+_aimtellVersion+'&status_code='+status_code, {
        method: 'post',
        mode: 'no-cors',
        body: JSON.stringify(postPayload),
        headers: {
            'content-type': 'application/json'
        }
    }).then(function(response) {
        //
    });
}



function _aimtellLogError(id_site, name, params) {

    //prepare the url
    var url_params = "?v="+_aimtellVersion
    url_params += "&type=worker";
    url_params += "&website_id=" + id_site;
    url_params += "&body=" + name;

    var postPayload = params || {};
    postPayload.version = _aimtellVersion;

    //fire off the request
    fetch('https://log.aimtell.com/error' + url_params, {
        method: 'post',
        mode: 'no-cors',
        body: JSON.stringify(postPayload),
        headers: {
            'content-type': 'application/json'
        }
    }).then(function(response) {
        //
    });




}



function fetchParseContents(event) {

    //assume legacy remote
    var source = "Aimtell";

    //extract the source
    if (event.data !== null && typeof event.data.json().source !== "undefined") {
        source = event.data.json().source;
    }

    //log this for quick access later
    _aimtellSource = source;

    _aimtellConsoleOutput("Source is " + source);

    return new Promise(function(resolve, reject) {

        var payload = {};

        switch (source) {

            //the data was passed with it
            case "Aimtell":
                var content = event.data.json().content;
                payload.title = content.title || null;
                payload.message = content.message || null;
                payload.icon = content.icon || null;
                payload.image = content.image || null;
                payload.actions = content.actions || [];
                payload.data = content.data || {};
                payload.actions_data = null;
                resolve(payload);
                break;
             case "Aimtell-Network":

                //optional additional headers
                var options = {};
                options.headers = {};
                //TODO: pass the version, but we need to make sure this header is whitelisted
                //options.headers['aimtell-version'] = _aimtellVersion;

                var json = event.data.json();
                var src = json.source_vars.src;
                var url = json.source_vars.url;
                

                //query the network directly
                fetch(url, options).then(function(response) {

                    //if the file is not found then just error out
                    if(response == "undefined" || response.status != 200) { 
                        _aimtellLogNetwork("error", "Bad Status Code", response.status) 
                        reject("Bad status code: " + response.status);
                        return false;
                    }

                    //parse json
                    response.json().then(function(result) {
                        
                        //format for what we expct
                        if(!result.success){ reject("No success flag"); }

                        //grab all data passed for proper tracking
                        var content = event.data.json().content;

                        //grab push content
                        payload.title  = result.result.title;
                        payload.message  = result.result.body;
                        payload.icon  = result.result.customIcon;
                        payload.service = result.result.service;

                        //start with the inbound data param, so we can note things like webhooks set server side
                        payload.data = content.data || {};
                        payload.data.link = result.result.link;

                        //merge any impression tracking webhooks
                        if(!typeof result.result.webhooks != "undefined"  && result.result.webhooks != null  && result.result.webhooks.notification_impression != null  && result.result.webhooks.notification_impression.length > 0){
                            payload.data.webhooks.notification_impression = [].concat(payload.data.webhooks.notification_impression, result.result.webhooks.notification_impression);
                        }

                        //merge any click tracking webhooks
                        if(!typeof result.result.webhooks != "undefined"  && result.result.webhooks != null  && result.result.webhooks.notification_click != null  && result.result.webhooks.notification_click.length > 0){
                            payload.data.webhooks.notification_click = [].concat(payload.data.webhooks.notification_click, result.result.webhooks.notification_click);
                        }

                        
                        resolve(payload);
                    })
                    
                })

                break;
                //the data is remote
            default:

                break;
        }


    });




}


function _aimtellTrackClick(id_site, campaign_id, subscriber_uid, type, title, body, service){
    var url = "https://click.aimtell.com/push?source=at";
    url += "&id_site=" + id_site;
    url += "&campaign_id=" + campaign_id;
    url += "&subscriber_uid=" + subscriber_uid;
    url += "&push_type=" + type;
    url += "&v=" + _aimtellVersion;
    url += "&service=" + service;
    url += "&worker=" + encodeURIComponent(self.location.pathname);
    url += "&mhash=" + _aimtellHashString(title) + "_" + _aimtellHashString(body);
    url += "&title=" + encodeURIComponent(title);
    url += "&body=" + encodeURIComponent(body);
    fetch(url, {method: 'GET', mode: 'no-cors', credentials: 'include', redirect: 'follow'});       
}


function _aimtellTrackImpression(id_site, campaign_id, subscriber_uid, type, title, body, service){
    var url = "https://imp.aimtell.com/push?source=at";
    url += "&id_site=" + id_site;
    url += "&campaign_id=" + campaign_id;
    url += "&subscriber_uid=" + subscriber_uid;
    url += "&push_type=" + type;
    url += "&v=" + _aimtellVersion;
    url += "&service=" + service;
    url += "&worker=" + encodeURIComponent(self.location.pathname);
    url += "&mhash=" + _aimtellHashString(title) + "_" + _aimtellHashString(body);
    url += "&title=" + encodeURIComponent(title);
    url += "&body=" + encodeURIComponent(body);
    fetch(url, {method: 'GET', mode: 'no-cors', credentials: 'include', redirect: 'follow'});       
}


function _aimtellSendWebhook(url, id_site, campaign_id, subscriber_uid){
    var first_type = (url.includes("?")) ? "&" : "?";
    url += first_type + "id_site=" + id_site;
    url += "&campaign_id=" + campaign_id;
    url += "&subscriber_uid=" + subscriber_uid;

    //if whitelabel, don't put aimtell information
    if(!_aimtellWL){
        url += "&push_source=aimtell.com";    
    }

    //note the send
    _aimtellConsoleOutput("Webhook sent " + url);

    //default to POST requests
    var method = "POST";

    //custom override for enhanced reporting
    if(url.includes("click.aimtell.com/network")){ method = "GET";}

    //fire off the webhook
    fetch(url, {method: method, mode: 'no-cors', credentials: 'include', redirect: 'follow'});    


}



function _aimtellSendSignal(event, payload, id_site, subscriber_uid){
    //path 
    var url = "https://signals.aimtell.com/pn?ea="+event;
    url += "&id_site="+id_site;
    url += "&subscriber_uid="+subscriber_uid;
    
    //optionally additional data coming from server side
    if(payload){ url += "&payload=" + payload};

     //see if we can get some additional information on who this 
    _aimtellDBGet("aimtell", function(response) {

        //append md5e
        if(response && response["md5e"]) url += "&md5e="+response["md5e"];    
        fetch(url, {method: 'POST', mode: 'no-cors', credentials: 'include', redirect: 'follow'});    

    });

  
}



function autoHideNotifications() {

    self.registration.getNotifications().then(function(notifications) {

        _aimtellConsoleOutput("Checking Notifications");

        var shown = [];
        var shown_title = [];
        var shown_body = [];

        notifications.forEach(function(element) {

            if (shown_title.includes(element.title) && shown_body.includes(element.body)) {
                _aimtellConsoleOutput("Already Showing Notification, Discarding");
                element.close();
                return false;
            }


            //add to the array
            shown_title.push(element.title);
            shown_body.push(element.body);

            //if this has a custom timeout
            if (element.data != null && element.data.auto_hide != null) {
                setTimeout( element.data.auto_hide * 1000);
            }

        });

    });
}

//push received
self.addEventListener('push', function(event) {


    //if aimtell flag is found or there was no data payload assume aimtell
    if (typeof event.data.json().isAimtell != "undefined") {
        isAimtellPush = true;
    } else {
        isAimtellPush = false;
    }

    
    //grab the user subscription/registration information 
    event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {

        _aimtellConsoleOutput("Receiving Push.");

        if (isAimtellPush === false) {
            _aimtellConsoleOutput("Discarding External Sourced Push.")
            return null;
        }


        //check to see if the push contents was passed
        return fetchParseContents(event).then(function(payload) {

            //grab data from campaign
            var id_site = payload.data.id_site || null;
            var campaign_id = payload.data.campaign_id || null;
            var subscriber_uid = payload.data.subscriber_uid || null;
            var storage = payload.data.storage || null;
            var imp = payload.data.imp || null;
            var type = payload.data.type || null;
            var sig = payload.data.sig || null;
            var fm = payload.data.fm || 0;
            var service = payload.service || 0;

            //store the payload so we can access elsewhere if need be
            //this is particularly recommend to avoid any issues from passing into the data param
            _aimtellPayload["sub"] = subscriber_uid;
            _aimtellPayload["id_site"] = id_site;
            _aimtellPayload["type"] = type;
            _aimtellPayload["fm"] = fm;
            _aimtellPayload["service"] = service;

            //these may or may not exist
            if(typeof payload.data.storage != "undefined" && typeof payload.data.storage.ip != "undefined") _aimtellPayload["ip"] = payload.data.storage.ip;
            if(typeof payload.data.storage != "undefined" && typeof payload.data.storage.geo != "undefined") _aimtellPayload["geo"] = payload.data.storage.geo;
            

            //impression tracking
            //if they requested a webhook
            if(!typeof payload.data.webhooks != "undefined" && payload.data.webhooks != null && payload.data.webhooks.notification_impression != null && payload.data.webhooks.notification_impression.length > 0){
                var i;
                for (i = 0; i <  payload.data.webhooks.notification_impression.length; i++) {
                    _aimtellSendWebhook(payload.data.webhooks.notification_impression[i], id_site, campaign_id, subscriber_uid);
                }

            }


            //show notification
            let notifOptions = {
                body: payload.message,
                requireInteraction: true,
                actions: payload.actions,
                data: {
                    link: payload.data.link,
                    logid: payload.data.logid,
                    subscriber_uid: subscriber_uid,
                    auto_hide: payload.data.auto_hide,
                    actions: payload.data.actions,
                    id_site: id_site,
                    campaign_id: campaign_id,
                    aimtell: true,
                    webhooks: payload.data.webhooks || [],
                    sig: sig
                }
            }
            if (!!payload.icon && payload.icon != 'null' && payload.icon != 'undefined') notifOptions.icon = payload.icon;
            if (!!payload.image && payload.image != 'null' && payload.image != 'undefined') notifOptions.image = payload.image;
            return self.registration.showNotification(payload.title, notifOptions)
            .then(function() {
                autoHideNotifications();

                //store client data for later
                for (const property in storage) { _aimtellDBSet(property, storage[property])}

                //fire off impression
                if(imp == 1){ _aimtellTrackImpression(id_site, campaign_id, subscriber_uid, type, payload.title, payload.message, service); }

                //if we have signals
                if(sig) _aimtellSendSignal("imp", sig, id_site, subscriber_uid);
                


            });
        }).catch(function(err){

            //we may not know the site, depending on when it failed
            var id_site = id_site || 0;

            //all unexpected errors, log
            _aimtellLogError(id_site, err, {"type": "push"} );
            
            //output to console for easy debugging
            _aimtellConsoleOutput(err);

        });

    }));
    //end waitUntil
});


//notification click
self.addEventListener('notificationclick', function(event) {


    //ignore clicks on other notifications 
    if(typeof event.notification.data === "undefined" || typeof event.notification.data.aimtell === "undefined"){ return false;}

    // Force close - android doesn't close the notification when you click on it  
    event.notification.close();

    _aimtellConsoleOutput("Notification clicked.");

    //grab details
    var atlink = event.notification.data.link;
    var logid = event.notification.data.logid;
    var id_site = event.notification.data.id_site;
    var campaign_id = event.notification.data.campaign_id;
    var webhooks = event.notification.data.webhooks;
    var sig = event.notification.data.sig;
    var subscriber_uid = event.notification.data.subscriber_uid || null;
    var title = event.notification.title;
    var body = event.notification.body;

    //grab from payload
    var service  =  _aimtellPayload["service"] || 0;
    var type  =  _aimtellPayload["type"] || 0;

    //add additional information in payload
    var postPayload = {};
    postPayload.subscriber_uid = event.notification.data.subscriber_uid || null;
    postPayload.logid = logid;

    //if an action exists, add to analytics payload and update link
    if (event.action === 'a01') {
        postPayload.action = 'a01';
        atlink = event.notification.data.actions.a01.link;
    } else if (event.action === 'a02') {
        postPayload.action = 'a02';
        atlink = event.notification.data.actions.a02.link;
    }


    //primary analytics
    fetch('https://analytics.aimtell.com/push-click', {
        method: 'post',
        body: JSON.stringify(postPayload)
    });

    //secondary track clicking with enhanced features
    _aimtellTrackClick(id_site, campaign_id, subscriber_uid, type, title, body, service);


    //if they requested a webhook for click
    if(!typeof webhooks != "undefined" && webhooks != null && webhooks.notification_click != null && webhooks.notification_click.length > 0){
        var i;
        for (i = 0; i <  webhooks.notification_click.length; i++) {
            _aimtellSendWebhook(webhooks.notification_click[i], id_site, campaign_id,  postPayload.subscriber_uid);
        }

    }

    //post signal
    if(sig) _aimtellSendSignal("click", sig, id_site, postPayload.subscriber_uid);

    //make sure its proper link format (sometimes http missing)
    if (!/^https?:\/\//i.test(atlink)) {
        atlink = 'http://' + atlink;
    }

    const promise = clients.openWindow(atlink).catch(function(err){
        //catches errors like  "Unable to open window "
        _aimtellLogError(id_site, err.message, {"type": "click"});
    });

    return promise;
    


});

//postMessage
self.addEventListener('message', function(event) {

    switch (event.data.command) {
        //service worker receiving registration call
        case 'register':

            //store the subscriberID
            subscriber_uid = event.data.uid;

            // event.ports[0] corresponds to the MessagePort that was transferred as part of the controlled page's
            // call to controller.postMessage(). Therefore, event.ports[0].postMessage() will trigger the onmessage
            // handler from the controlled page.
            event.ports[0].postMessage({
                error: null,
                type: "register",
                subscriber_uid: subscriber_uid
            });

            break;
        case 'retrieve':

            //see if we can get some additional information on who this 
            _aimtellDBGet("aimtell", function(response) {

                var keyvalue = null;
                if(response && response[event.data.key]){
                    keyvalue  = response[event.data.key];
                }

                event.ports[0].postMessage({ value: keyvalue });

            });


            break;
        case 'store':

            //add and callback
            _aimtellDBSet(event.data.key, event.data.value);

            break;
            //lets revalidate and make sure our database has some accurate information
        case 'validate':

            //grab the full endpoint for push token
            self.registration.pushManager.getSubscription().then(function(subscription) {
                endpoint = subscription.endpoint;

                //grab some additional information we want to process
                subscriber_uid = event.data.subscriber_uid;
                id_site = event.data.id_site;

                var validatePayload = {};
                validatePayload.subscriber_uid = subscriber_uid;
                validatePayload.id_site = id_site;
                validatePayload.endpoint = endpoint;
                validatePayload.worker_version = _aimtellVersion;

                //send a call to our db to verify we are using these same credentials
                fetch('https://analytics.aimtell.com/validate', {
                    method: 'POST',
                    body: JSON.stringify(validatePayload)
                }).then(;


            });

            break;
        default:
            // This will be handled by the outer .catch().
            //throw '[Aimtell] Unknown command: ' + event.data.command;
    }

});