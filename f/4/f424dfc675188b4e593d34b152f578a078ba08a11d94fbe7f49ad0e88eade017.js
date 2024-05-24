importScripts("/v8.49.0/df950bd/bundles/precache-manifest.e235c886e5834c7d0d15bd5d608a22c9.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

// Placeholder array which is populated automatically by workboxBuild.injectManifest()
workbox.precaching.precacheAndRoute(self.__precacheManifest);

const imageCache = workbox.strategies.cacheFirst({
  cacheName: 'images',
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 7 * 24 * 60 * 60,
    }),
    new workbox.cacheableResponse.Plugin({
      statuses: [0, 200],
    }),
  ],
});

workbox.routing.registerRoute(/.png$/, imageCache);
workbox.routing.registerRoute(/.jpg$/, imageCache);
workbox.routing.registerRoute(/.jpeg$/, imageCache);
workbox.routing.registerRoute(new RegExp('^https://i.iheart.com'), imageCache);

workbox.routing.registerRoute(
  new RegExp('^https://web-static.pages.iheart.com/jw-player'),
  workbox.strategies.staleWhileRevalidate({
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('^https://static.xx.fbcdn.net/'),
  workbox.strategies.cacheFirst(),
);

self.importScripts('https://js.appboycdn.com/web-sdk/3.1/service-worker.js');

