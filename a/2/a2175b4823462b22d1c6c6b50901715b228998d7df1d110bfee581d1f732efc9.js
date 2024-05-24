importScripts('https://s-eu-1.pushpushgo.com/60c0a82cd1fc3a4aedfab705/worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

try {
    run();
} catch (e) {
    console.warn('Workbox not supported');
}

function run() {

    var CacheableResponsePlugin = workbox.cacheableResponse.CacheableResponsePlugin;
    var CacheFirst = workbox.strategies.CacheFirst;
    var ExpirationPlugin = workbox.expiration.ExpirationPlugin;
    var registerRoute = workbox.routing.registerRoute;

// Cache CSS, JS, and Web Worker requests with a Cache First strategy
    registerRoute(
        // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
        function(p) {
            return (p.request.destination === 'style' ||
                p.request.destination === 'script') && /^https:\/\/static.onet.pl\//.test(p.request.url);
        },
        // Use a Cache First caching strategy
        new CacheFirst({
            // Put all cached files in a cache named 'assets'
            cacheName: 'assets',
            plugins: [
                // Ensure that only requests that result in a 200 status are cached
                new CacheableResponsePlugin({
                    statuses: [200]
                }),
                // Don't cache more than 50 items, and expire them after 5 days
                new ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 5 // 5 Days
                })
            ]
        })
    );

    // Cache images with a Cache First strategy
    registerRoute(
        // Check to see if the request's destination is style for an image
        function(p) {
            return p.request.destination === 'image' && /^https:\/\/ocdn.eu\/(omp3|omp3-images-transforms|onetmobilemainpage|phx|pulscms-transforms)\//.test(p.request.url);
        },
        // Use a Cache First caching strategy
        new CacheFirst({
            // Put all cached files in a cache named 'images'
            cacheName: 'images',
            plugins: [
                // Ensure that only requests that result in a 200 status are cached
                new CacheableResponsePlugin({
                    statuses: [200]
                }),
                // Don't cache more than 50 items, and expire them after 30 days
                new ExpirationPlugin({
                    maxEntries: 240,
                    maxAgeSeconds: 60 * 60 * 24 * 5 // 5 Days
                })
            ]
        })
    );

    // Cache fonts with a Cache First strategy
    registerRoute(
        // Check to see if the request's destination is style for an image
        function(p) {
            return p.request.destination === 'font' && /^https:\/\/ocdn.eu\/onetmobilemainpage\//.test(p.request.url);
        },
        // Use a Cache First caching strategy
        new CacheFirst({
            // Put all cached files in a cache named 'fonts'
            cacheName: 'fonts',
            plugins: [
                // Ensure that only requests that result in a 200 status are cached
                new CacheableResponsePlugin({
                    statuses: [200]
                }),
                // Don't cache more than 30 items, and expire them after 360 days
                new ExpirationPlugin({
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 30 * 12 // 360 Days
                })
            ]
        })
    );
}

self.addEventListener('install', ;
self.addEventListener('activate', ;
