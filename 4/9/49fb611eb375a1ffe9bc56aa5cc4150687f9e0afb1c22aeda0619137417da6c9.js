const vapidPublicKey = 'BN7L8kVwIH2bDV2FaSZvlc7_waazzi8UXuTvFKgNrbvnnWPfr8OAaqsRgM4A5TL0uqA-fa2O0-VLwxS6PsuBG7Y', licenseCode = '8261785d';
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js','https://ssl.widgets.webengage.com/js/merged-worker.js');

//Configuration for google analytics
workbox.googleAnalytics.initialize({
    parameterOverrides: {
        cd13: 'offline',
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
        params.set('cm3', queueTimeInSeconds);
    },
});

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

workbox.routing.registerRoute('/', pageHandler);
workbox.routing.registerRoute('/india-news', pageHandler);
workbox.routing.registerRoute('/world-news', pageHandler);
workbox.routing.registerRoute('/cities', pageHandler);
workbox.routing.registerRoute('/opinion', pageHandler);
workbox.routing.registerRoute('/entertainment', pageHandler);
workbox.routing.registerRoute('/cricket', pageHandler);
workbox.routing.registerRoute('/education', pageHandler);
workbox.routing.registerRoute('/sports', pageHandler);
workbox.routing.registerRoute('/lifestyle', pageHandler);
workbox.routing.registerRoute('/videos', pageHandler);
workbox.routing.registerRoute('/photos', pageHandler);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|JPG|JPEG|svg|gif|ico)/,
    //new RegExp('^https://images.hindustantimes.com/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'www-image-cache',
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

workbox.routing.registerRoute(
    // Cache image files
    new RegExp('^https://images.hindustantimes.com/(.*)\.(?:png|jpg|JPG|JPEG|jpeg|svg|gif|ico)'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'cdn-image-cache',
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
    {url: '/favicon.ico', revision: '1' },
    {url: 'https://images.hindustantimes.com/fonts/opensans-regular-webfont.woff2', revision: '1' },
    {url: 'https://images.hindustantimes.com/fonts/opensans-bold-webfont.woff2', revision: '1' },
    {url: 'https://images.hindustantimes.com/fonts/ptserif-regular-webfont.woff2', revision: '1' },
    {url: 'https://images.hindustantimes.com/fonts/blacker_pro_display-heavy-webfont.woff2', revision: '1' },
    {url: 'https://images.hindustantimes.com/fonts/ptserif-bold-webfont.woff2', revision: '1' },
    {url: '/res/images/sprite.svg', revision: '1' },
]);