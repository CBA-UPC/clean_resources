importScripts('https://s-eu-1.pushpushgo.com/625009bca324e7fae705ea1c/worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');
importScripts('https://img.przegladsportowy.pl/v1/image-worker.js');

try {
    run();
} catch (e) {
    console.warn('Workbox not supported');
}

function run() {
    const { CacheableResponsePlugin } = workbox.cacheableResponse;
    const { CacheFirst } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;
    const { registerRoute } = workbox.routing;

    registerRoute(
        (p) => {
            return (
                (p.request.destination === 'style' || p.request.destination === 'script') &&
                /^https:\/\/ocdn.eu\/sport-statics\//.test(p.request.url)
            );
        },
        new CacheFirst({
            cacheName: 'assets',
            plugins: [
                new CacheableResponsePlugin({
                    statuses: [200],
                }),
                new ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 5, // 5 Days
                }),
            ],
        })
    );

    registerRoute(
        (p) => {
            const isOcdnImage =
                /^https:\/\/ocdn.eu\/(sport-images-transforms|pulscms-transforms)\//.test(
                    p.request.url
                );

            const isEnetImage = /^https:\/\/es-img.raspcs.pl\/(logos|flags)\//.test(p.request.url);

            const isWorkerImage = /^https:\/\/img.przegladsportowy.pl\/v\d\/(.*)\/(.*)/.test(
                p.request.url
            );

            return (
                p.request.destination === 'image' && (isWorkerImage || isOcdnImage || isEnetImage)
            );
        },
        new CacheFirst({
            cacheName: 'images',
            plugins: [
                new CacheableResponsePlugin({
                    statuses: [200],
                }),
                new ExpirationPlugin({
                    maxEntries: 240,
                    maxAgeSeconds: 60 * 60 * 24 * 5, // 5 Days
                }),
            ],
        })
    );

    registerRoute(
        function (p) {
            return (
                p.request.destination === 'font' &&
                /^https:\/\/ocdn.eu\/sport-statics\//.test(p.request.url)
            );
        },
        new CacheFirst({
            cacheName: 'fonts',
            plugins: [
                new CacheableResponsePlugin({
                    statuses: [200],
                }),
                new ExpirationPlugin({
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 30 * 12,
                }),
            ],
        })
    );
}

self.addEventListener('install', ;
self.addEventListener('activate', ;
