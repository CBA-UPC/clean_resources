/* jshint ignore:start */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js");

const { googleAnalytics, strategies, routing, expiration } = workbox;
const { NetworkFirst, CacheFirst } = strategies;
const { ExpirationPlugin } = expiration;

googleAnalytics.initialize();

routing.registerRoute(
    /(https:\/\/static.rbl.ms\/static\/).*/,
    new NetworkFirst({
        cacheName: "assets",
        cacheExpiration: {
            maxEntries: 200,
            maxAgeSeconds: 10 * 24 * 60 * 60,
        },
        cacheableResponse: {
            statuses: [0, 200],
        },
    })
);

routing.registerRoute(
    /^https:\/\/(www\.)?spectrum\.ieee\.org\/static\/dist\/social-ux\/(?:[a-z.0-9]*)\.(?:mjs|js)$/,
    new CacheFirst({
        cacheName: "jsApp",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 120,
                maxAgeSeconds: 3 * 24 * 60 * 60,
            }),
        ],
    })
);

routing.registerRoute(
    /\/media-library\//,
    new CacheFirst({
        cacheName: "assetsPictures",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            }),
        ],
    })
);

routing.registerRoute(
    /^https:\/\/(www\.)?spectrum\.ieee\.org\/*/,
    new NetworkFirst({
        cacheName: "mainPage",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 6 * 60 * 60,
            }),
        ],
    })
);

self.addEventListener("install", ;
self.addEventListener("activate", ;/* jshint ignore:end */