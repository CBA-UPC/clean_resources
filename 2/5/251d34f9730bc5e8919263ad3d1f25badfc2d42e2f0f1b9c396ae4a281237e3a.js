importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

//Configuration for google analytics
/*workbox.googleAnalytics.initialize({
    parameterOverrides: {
        cd13: 'offline',
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
        params.set('cm3', queueTimeInSeconds);
    },
});*/

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
workbox.routing.registerRoute('/india-news/', pageHandler);
workbox.routing.registerRoute('/world-news/', pageHandler);
workbox.routing.registerRoute('/cities/', pageHandler);
workbox.routing.registerRoute('/lok-sabha-elections/', pageHandler);
workbox.routing.registerRoute('/opinion/', pageHandler);
workbox.routing.registerRoute('/entertainment/', pageHandler);
workbox.routing.registerRoute('/cricket/', pageHandler);
workbox.routing.registerRoute('/education/', pageHandler);
workbox.routing.registerRoute('/sports/', pageHandler);
workbox.routing.registerRoute('/lifestyle/', pageHandler);
workbox.routing.registerRoute('/videos/', pageHandler);
workbox.routing.registerRoute('/photos/', pageHandler);
workbox.routing.registerRoute('/tech/', pageHandler);*/

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    //new RegExp('^https://www.hindustantimes.com/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 200 images
                maxEntries: 200,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
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
workbox.precaching.precacheAndRoute([  
]);