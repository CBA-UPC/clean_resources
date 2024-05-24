// UA Web Push: 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1531400253.06
try {
    importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js');
    uaSetup.worker(self, {
        // This  has a default of `/push-worker.js`. It should live at the root of
        // your domain. It only needs to be specified if your worker lives at a
        // different path. (NOTE: It doesn't actually work at the root level)
        workerUrl: '/bundles/zdnetjs/js/libs/ua-push-worker.js',

        defaultIcon: 'https://www.zdnet.com/a/hub/i/2018/07/06/d3724d10\u002D0a54\u002D4569\u002D9d93\u002Dbee832506d95/zd\u002Dstandard\u002D350x350.png',
        defaultTitle: 'ZDNET',
        defaultActionURL: 'https://www.zdnet.com/',

        // Dev configs
        // appKey: '0PdIKxK8QzCTjkNXOmL5bw',
        // token: 'MTowUGRJS3hLOFF6Q1Rqa05YT21MNWJ3Oi1FVEVJN2MtWkdaWTU0c2dLSlZheUZVS2N6dmE0QXVEZmlnSl9TajRIVWc',
        // vapidPublicKey: 'BED3UyGRehkGzG1_xKny-HiM9cEz4SYOUKqeD761wPeFNyS3DUfGkNpW6xIbU59wfy5qMLh0hlMMwVk5FvTw4ws='

        // Production configs
        appKey: 'i-Fs9YbqSGm4AjyjFGN7Vw',
        token: 'MTppLUZzOVlicVNHbTRBanlqRkdON1Z3OllGMnVJNUZ4SDh2V1ZqTHBiMmZka2xTeS14b1ZTaXpiMnZyUzU4aExIVDA',
        vapidPublicKey: 'BDkfm6-4K3wtLqhIxW_5ZjWkZNMc9Hy1wA7b8rRmFiX0ykA9DfH6S2NCsbIp9_rPbVpSy58ijPwd1zY1mHbmWVw='
    });
} catch (error) {
    Utils.log("error", "Could not create UA worker", error);
}

const worker = this;

/**
 * Generic utilities
 *
 * @class Utils
 */
class Utils {
    /**
     * Wrapper for the standard console methods with added formatting.
     *
     * @method log
     */
    static log() {
        const method = arguments[0];
        const args =  [].slice.call(arguments, 1);
        args.unshift('%c ServiceWorker ', 'color:#FFF;border-radius:3px;background-color:#B80000;');
        console[method].apply(console, args);
    }

    /**
     * Creates an indexedDB database to temporarily store push notification payload data.
     *
     * @method createDB
     */
    static createDB(payload) {
        if("indexedDB" in self) {

            let openRequest = indexedDB.open("notifications", 1);

            // create notifications database without version checks
            openRequest.onupgradeneeded = function() {
                let db = openRequest.result;
                if (!db.objectStoreNames.contains('items')) {
                    let notificationItems = db.createObjectStore('items', {autoIncrement:true});
                    let request = notificationItems.add(payload);
                }
            };

            //notifications database already exists
            openRequest.onsuccess = function() {
                let db = openRequest.result;
                if (db.objectStoreNames.contains('items')) {
                    db.transaction(["items"], 'readwrite').objectStore("items").add(payload).onsuccess = 
                }
            };

        } else {
            Utils.log("info", "IndexedDB not supported");
        }
    }
}

/**
 * Map of all service worker events that are to be registered.
 *
 * @type {Map} events
 */
const events = new Map([

    /**
     * @method notificationclick
     */
    ['notificationclick', function(event) {
        const payload = event.notification.data;
        const sendId = payload.send_id;
        Utils.log("info", payload);
        Utils.createDB(sendId);
    }]
]);

/**
 *  Add all event listeners
 */
events.forEach(;
