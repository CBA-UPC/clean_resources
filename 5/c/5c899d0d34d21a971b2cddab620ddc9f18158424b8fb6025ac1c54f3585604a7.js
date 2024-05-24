const searchParams = new URL(location).searchParams;
const appId = searchParams.get("appId");
const version = searchParams.get("v");
const programId = searchParams.get("pid");
const programThumbnail = searchParams.get("pimg");

console.log(
  `service-worker: appId=${appId}, programId=${programId}, version=${version}, programThumbnail=${programThumbnail}`,
  registration
);

const contentToCache = [
  // ico for fun
  "/favicon.ico",
  // main route for this program
  "/",
  // offline route
  "/offline",
  // main podcasts img
];

// Listen for install event, set callback
self.addEventListener("install", function (e) {
  console.log(">>>> service-worker - install ");

  e.waitUntil(
    // (async () => {
    //     const cache = await caches.open(version);
    //     // Setting {cache: 'reload'} in the new request will ensure that the
    //     // response isn't fulfilled from the HTTP cache; i.e., it will be from
    //     // the network.
    //     await cache.add(new Request('/offline', { cache: "reload" }));
    // })()

    caches
      .open(version)
      .then((cache) => {
        console.log(
          "[Service Worker] Mise en cache globale: app shell et contenu"
        );
        return cache.addAll(contentToCache);
      })
      .then(() => {
        console.log(
          "[Service Worker] Force the waiting service worker to become the active service worker : skipWaiting"
        );
        return self.skipWaiting();
      })
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log(">>>> service-worker - activate");

  // e.waitUntil(
  //     (async () => {
  //         // Enable navigation preload if it's supported.
  //         // See https://developers.google.com/web/updates/2017/02/navigation-preload
  //         if ("navigationPreload" in self.registration) {
  //             await self.registration.navigationPreload.enable();
  //         }
  //     })()
  // );

  // // Tell the active service worker to take control of the page immediately.
  // self.clients.claim();

  e.waitUntil(
    caches.open(version).then((cache) => {
      return cache
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames
              .filter((cacheName) => {
                return contentToCache.indexOf(cacheName) === -1;
              })
              .map(
          );
        })
        .then(() => {
          return self.clients.claim();
        });
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`>>>> service-worker - fetch=${e.request.URL}`, e.request);
});
