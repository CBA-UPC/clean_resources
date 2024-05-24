'use strict';
importScripts('https://s-eu-1.pushpushgo.com/60bf48a6ec7c9df811b2204c/worker.js');
importScripts('https://ocdn.eu/kobieta/pwa/workbox-google-analytics.prod.v1.0.0.js');
importScripts('https://ocdn.eu/kobieta/pwa/workbox-sw.prod.v1.1.0.js');

const workboxSW = new WorkboxSW();

workbox.googleAnalytics.initialize();

workboxSW.router.registerRoute(
    /(.*\/)?.*\.(jpeg|jpg|gif|png)$/,
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



self.addEventListener('install', ;
self.addEventListener('activate', ;
