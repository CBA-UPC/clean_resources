importScripts("/tnnassets/wb-manifest.f28058eb9a73731134b6ad47ae761b52.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

const DOMAIN_NAME = self.location.origin;

var cacheVersion = `tnn-01`;

const hostname =
  self.location &&
  self.location.host &&
  self.location.host.split('.').length > 0 &&
  self.location.host.split('.')[0];

const lang = {
  telugu: 'tnnte-01',
  www: 'tnn-01',
};
const izootoScripts = {
  telugu:
    'https://cdn.izooto.com/scripts/53a5dc63bf20ae1355687e874d60267fafe7391c.js',
  www: 'https://cdn.izooto.com/scripts/workers/3d276e090487a2efcd98ee2a6127d068ecb86418.js',
};

cacheVersion = lang[hostname] || lang['www'];
const izootoScript = izootoScripts[hostname] || izootoScripts['www'];
const HOME_HTML_CACHE = `homepage-html-cache-${cacheVersion}`;
const STATIC_CACHE = `static-resources-${cacheVersion}`;
const DYNAMIC_IMAGES_CACHE = `dynamic-images-${cacheVersion}`;
const SHOW_API_CACHE = `show-api-cache-${cacheVersion}`;
const LISTING_API_CACHE = `listing-api-cache-${cacheVersion}`;
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉 at`, DOMAIN_NAME);

  workbox.clientsClaim();
  workbox.precaching.suppressWarnings();

  workbox.precaching.precacheAndRoute(self.__precacheManifest || [], {
    directoryIndex: null,
    cleanUrls: false,
  });

  workbox.routing.registerRoute(
    '/',
    workbox.strategies.staleWhileRevalidate({
      cacheName: HOME_HTML_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1,
          maxAgeSeconds: 120, // 7d : 7 * 24 * 60 * 60
        }),
      ],
    }),
  );

  // Show API handler
  const showApiHandler = workbox.strategies.cacheFirst({
    cacheName: SHOW_API_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 120, // 1d : 24 * 60 * 60 - Default :2m
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
    ],
  });

  workbox.routing.registerRoute(
    /(.*)\/request\/(articleshow|videoshow)(.*)/,
    (args) => {
      console.log('SW Article Show: ' + args);
      return showApiHandler
        .handle(args)
        .then((response) => {
          if (response.status === 404) {
            return caches.match('404.html');
          } else {
            return response;
          }
        })
        .catch((ex) => {
          return caches.match('500.html');
        });
    },
  );
  // Listing API handler
  const listingApiHandler = workbox.strategies.cacheFirst({
    cacheName: LISTING_API_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 120, // 1d : 24 * 60 * 60
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
    ],
  });

  workbox.routing.registerRoute(
    /(.*)\/api\/(latest|getlisting|trending)(.*)/,
    (args) => {
      console.log('SW Article List: ' + args);
      return listingApiHandler
        .handle(args)
        .then((response) => {
          if (response.status === 404) {
            return caches.match('404.html');
          } else {
            return response;
          }
        })
        .catch((ex) => {
          return caches.match('500.html');
        });
    },
  );

  // self.importScripts('https://static.growthrx.in/js/v2/push-sw.js');

  self.importScripts(izootoScript);

  // Install Service Worker & Cache Homepage HTML- Working
  self.addEventListener('install', function (event) {
    const urls = ['/'];
    const cacheName = HOME_HTML_CACHE; //workbox.core.cacheNames.runtime

    event.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache
          .addAll(urls)
          .then(function (data) {})
          .catch(function (error) {
            self.skipWaiting();
          });
      }),
    );
    return event.waitUntil(self.skipWaiting());
  });

  //Delete existing or old cache from "Cache Storage", if service worker activated.  - Working
  self.addEventListener('activate', (event) => {
    var cacheKeeplist = [
      SHOW_API_CACHE,
      LISTING_API_CACHE,
      HOME_HTML_CACHE,
      DYNAMIC_IMAGES_CACHE,
      STATIC_CACHE,
    ];

    event.waitUntil(
      caches
        .keys()
        .then((keyList) => {
          return Promise.all(
            keyList.map((key) => {
              if (cacheKeeplist.indexOf(key) === -1) {
                return caches.delete(key);
              }
            }),
          );
        })
        .then(self.clients.claim()),
    ); //this line is important in some contexts
  });

  //If cache exists, fetch from cache, otherwise request to server.  - Working
  self.addEventListener('fetch', (event) => {
    if (
      event?.request?.url?.indexOf('https://www.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://stg.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://preprod.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://telugu.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://telugustg.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://nmp1.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://test.timesnownews.com') > -1 ||
      event?.request?.url?.indexOf('https://sanity.timesnownews.com') > -1
    ) {
      event.respondWith(
        caches.match(event.request).then((cacheRes) => {
          return cacheRes || fetch(event.request);
        }),
      );
    }
  });

  //NOT TESTED
  self.addEventListener('message', function (event) {
    console.log('SW Received Message: ' + event.data);
    if (event.data && event.data.length && Array.isArray(event.data)) {
      var jsArray = event.data.map((js) => fetch(js));
      Promise.all(jsArray).then(
        (data) => event.ports[0].postMessage("SW Says 'Hello back!'"),
        (error) => event.ports[0].postMessage("SW Says 'Hello back Error!'"),
      );
    }
  });

  //Cache Images from 3rd party.
  const articleImagesHandler = workbox.strategies.cacheFirst({
    cacheName: DYNAMIC_IMAGES_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 250,
        maxAgeSeconds: 300, // 30d : 30 * 24 * 60 * 60; Default : 5m
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  });

  workbox.routing.registerRoute(
    /^(https|http):\/\/(static\.tnn\.in)\/.*/i,
    (args) => {
      return articleImagesHandler
        .handle(args)
        .then((response) => {
          if (response.status === 404) {
            return caches.match('404.html');
          } else {
            return response;
          }
        })
        .catch((ex) => {
          return caches.match('500.html');
        });
    },
  );

  // Cache static data, only font, icons & images. - Working https://stg.timesnownews.com/
  workbox.routing.registerRoute(
    /^(https|http):\/\/((stg|nmp1|www|telugu|test|sanity)\.timesnownews\.com|localhost:8031)\/.*\.(woff|woff2|png|jpg|jpeg|svg|gif|ico).*/,
    workbox.strategies.cacheFirst({
      cacheName: STATIC_CACHE,
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 120, // 30d : 30 * 24 * 60 * 60; Default : 2m
        }),
      ],
    }),
    'GET',
  );

  // Cache static data, only js and css. - Working
  workbox.routing.registerRoute(
    /^(https|http):\/\/((stg|nmp1|www|telugu|test|sanity)\.timesnownews\.com|localhost:8031)\/.*\.(js|css).*/,
    workbox.strategies.cacheFirst({
      cacheName: STATIC_CACHE,
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 120, // 30d : 30 * 24 * 60 * 60; Default : 2m
        }),
      ],
    }),
    'GET',
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
