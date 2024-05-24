// UA Web Push: dae0735b9e:1487888582647
try {
    importScripts('https://aswpsdkus.com/notify/v1/ua-sdk.min.js')
    uaSetup.worker(self, {
        // This  has a default of `/push-worker.js`. It should live at the root of
        // your domain. It only needs to be specified if your worker lives at a
        // different path. (NOTE: It doesn't actually work at the root level)
        workerUrl: '/bundles/cnetjs/js/libs/ua-push-worker.js',

        // Dev configs.
        //defaultIcon: 'https://www.cnet.com/a/img/2022/04/27/f8805df5-e35f-41fe-8610-0a7453263ab2/cnet-chicklet-v2.png',
        //defaultTitle: 'CNET',
        //defaultActionURL: 'https://www.cnet.com/',
        //appKey: '0TfSFKI7Q4a4Y3uz5twZoQ',
        //token: 'MTowVGZTRktJN1E0YTRZM3V6NXR3Wm9ROnVaV01UZVFCd3A3TmlRSFd4TkNNei14OGtMalBvclZmZWhzeFF4VjhENE0',
        //vapidPublicKey: 'BJbQ0xLtQTjwG2DhybD/JEKo6eLyHrvfxJDKwDCZKHv8F1ZFWAgHO6I48LxE6g1lp47Ukwgp0PYCKzYgZjR5kA4='

        // Production configs.
        defaultIcon: 'https://www.cnet.com/a/img/2022/04/27/f8805df5-e35f-41fe-8610-0a7453263ab2/cnet-chicklet-v2.png',
        defaultTitle: 'CNET',
        defaultActionURL: 'https://www.cnet.com/',
        appKey: 'vfB_rNe6QmqG3FM6u3fQ_w',
        token: 'MTp2ZkJfck5lNlFtcUczRk02dTNmUV93OjF4amNnZWVGZFpKeHd3R1hSSzF6N2xaZkw5clQ1ME4tQWpHUFpDRGU2Ujg',
        vapidPublicKey: 'BLjW5aAAExzAsGPWMgbTHPM+L7ShRKV5kbcp7aCqB0VCql/4QhAKiEHVZaTMX1wDmp5OdFcnFVAJrR5rK1x173g='
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
        args.unshift('%c ServiceWorker ', 'color:#FFF;border-radius:4px;background-color:#E71D1D;');
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
        const notification = event.notification;
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
