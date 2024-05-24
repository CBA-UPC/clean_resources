'use strict';
self.importScripts('https://s-eu-1.pushpushgo.com/60bf4d6e18d29e2f9b87238d/worker.js');
self.importScripts('https://ocdn.eu/podrozeucs/static/pwa/workbox-sw.prod.v2.0.1.js');
self.importScripts('https://ocdn.eu/podrozeucs/static/pwa/workbox-google-analytics.prod.v1.0.0.js');

const workboxSW = new WorkboxSW();

workbox.googleAnalytics.initialize();

workboxSW.precache([
    {
        url: '/?pwa=1',
        revision: '1'
    }
]);

workboxSW.router.registerRoute(
    /^https:\/\/securepubads\.g\.doubleclick\.net\/tag\/js\/gpt\.js$/,
    workboxSW.strategies.networkOnly()
);

workboxSW.router.registerRoute(
    /(.*\/)?.*\.(js|css|jpeg|jpg|gif|png)$/,
    workboxSW.strategies.cacheFirst({
        cacheName: 'assets',
        cacheExpiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);

workboxSW.router.registerRoute(
    /^https:\/\/podroze\.onet\.pl(.*\/)[^\.]*(.html|.php)?$/,
    workboxSW.strategies.networkFirst({
        cacheName: 'docs',
        cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60,
            networkTimeoutSeconds: 2
        }
    })
);

self.addEventListener('install', ;
self.addEventListener('activate', ;