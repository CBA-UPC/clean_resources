//const vapidPublicKey = 'BJIyodHhnFCvt104moXjmNg8hpg38v9qZgUJ3tVthoF04B1NUqOCXFKn-N4ITwsa0g4ASXYboKUqK6TD9hmiPww', licenseCode = '~c2ab3023';
const vapidPublicKey = 'BN7L8kVwIH2bDV2FaSZvlc7_waazzi8UXuTvFKgNrbvnnWPfr8OAaqsRgM4A5TL0uqA-fa2O0-VLwxS6PsuBG7Y', licenseCode = '~134105974';

//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js', 'https://ssl.widgets.webengage.com/js/merged-worker.js'); 

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js', 'https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js'); 


//Configuration for google analytics
workbox.googleAnalytics.initialize({
    parameterOverrides: {
        cd7: 'offline',
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
        params.set('cm1', queueTimeInSeconds);
    },
});

/*workbox.routing.registerRoute(
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
    workbox.strategies.cacheFirst({
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    }),
);

workbox.routing.registerRoute(
    'https://cdn.vuukle.com/platform.js',
    workbox.strategies.cacheFirst({
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    }),
);*/

var pageHandler = workbox.strategies.networkFirst({
    cacheName: 'pages',
    plugins: [
        new workbox.expiration.Plugin({
            // Cache only 50 pages
            maxEntries: 50,
            // Cache for a maximum of 1 day
            maxAgeSeconds: 1 * 24 * 60 * 60,
        })
    ]
});

/*workbox.routing.registerRoute('/', pageHandler);
workbox.routing.registerRoute('/national/', pageHandler);
workbox.routing.registerRoute('/state/', pageHandler);
workbox.routing.registerRoute('/international/', pageHandler);
workbox.routing.registerRoute('/cricket/', pageHandler);
workbox.routing.registerRoute('/sports/', pageHandler);
workbox.routing.registerRoute('/astrology/', pageHandler);
workbox.routing.registerRoute('/business/', pageHandler);
workbox.routing.registerRoute('/gallery/', pageHandler);
workbox.routing.registerRoute('/career/', pageHandler);
workbox.routing.registerRoute('/health/', pageHandler);
workbox.routing.registerRoute('/lifestyle/', pageHandler);
workbox.routing.registerRoute('/blog/', pageHandler);
workbox.routing.registerRoute('/gadgets/', pageHandler);
workbox.routing.registerRoute('/auto/', pageHandler);
workbox.routing.registerRoute('/crime/', pageHandler);*/

workbox.routing.registerRoute(
	    // Cache image files
	    ///.*\.(?:png|jpg|jpeg|svg|gif)/,
	    new RegExp('^https://www.livemint.com/(.*)\.(?:png|jpg|JPG|JPEG|jpeg|svg|gif)'),
	    // Use the cache if it's available
	    workbox.strategies.cacheFirst({
	        // Use a custom cache name
	        cacheName: 'image-cache',
	        plugins: [
	            new workbox.expiration.Plugin({
	                // Cache only 200 images
	                maxEntries: 200,
	                // Cache for a maximum of a week
	                maxAgeSeconds: 1 * 1 * 60 * 60,
	            })
	        ],
	        plugins: [
	            new workbox.cacheableResponse.Plugin({
	                statuses: [0, 200],
	            })
	        ],
	    })
	);

//Configuration for precaching route and files
// workbox.precaching.precacheAndRoute([
// 	{"url": "fonts/PT_Serif-Web-Regular.woff2","revision": "bc0bacf6549575cfb30d94138017af2e"},{"url": "fonts/PT_Serif-Web-Bold.woff2","revision": "3b6c8ba984b20a6e49def1f3032e6e81"},{"url": "fonts/Lato-Regular.woff2","revision": "1b17c54ac66824d1c80f4192d2eb5839"},{"url": "fonts/Lato-Bold.woff2","revision": "bc6c5df347bdd99766a7f8b8f8ddbffa"},{"url": "fonts/Lato-Black.woff2","revision": "662c2387b7d2a703215ebc306ce67a22"},{"url": "images/icon-sprite.svg","revision": "eb24454205f7d42311b17941c33b187f"},{"url": "images/static/delete_v2.svg","revision": "a31ee858a745004f461d5618401dafff"}
// ]);