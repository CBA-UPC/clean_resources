importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1635253800.4765272
importScripts("https://aswpsdkus.com/notify/v1/ua-sdk.min.js");

const setupAirship = () => {
  uaSetup.worker(self, {
    defaultIcon: "https://c00119\u002Ddl.urbanairship.com/binary/public/Pbsb85WySDSQTzN\u002DLXqHEQ/1647a2cf\u002D98e2\u002D4544\u002D943f\u002D0156bd3fa70d",
    defaultTitle: "globo.com",
    defaultActionURL: "https://www.globo.com/",
    appKey: "Pbsb85WySDSQTzN-LXqHEQ",
    token: "MTpQYnNiODVXeVNEU1FUek4tTFhxSEVROnB2VGNsT2V6NTFaZm5STDRzcFM1dUVKR3NrTWU5MG1zX043RUhhYXBGaWc",
    vapidPublicKey: "BB-Q3i0lGcvT0VC2vFJChQZ9FsqHfgNF4wAdldqi9r5ChXgSAfoygHGgac3tsy616lzfFqxZaJTMMOOD7ylFVcY=",
    workerUrl: "/sw.js",
  });
};

const DEBUG = false;

if (workbox) {
  const CACHE_PREFIX = "home";
  const ONE_WEEK_IN_SECONDS = 604800;
  const THREE_DAYS_IN_SECONDS = 259200;
  const IMAGE_MAX_ENTRIES = 100;
  const STATIC_MAX_ENTRIES = 10;

  workbox.setConfig({
    debug: DEBUG,
  });

  workbox.precaching.precacheAndRoute([
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-bold.woff2",
      revision: "f679e6",
    },
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-bold.woff",
      revision: "f83bee",
    },
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-semibold.woff2",
      revision: "2e12ef",
    },
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-semibold.woff",
      revision: "322ce1",
    },
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-regular.woff2",
      revision: "20c845",
    },
    {
      url: "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/globotipo-ui-regular.woff",
      revision: "bad131",
    }
  ]);

  workbox.precaching.cleanupOutdatedCaches();

  const expirationImages = new workbox.expiration.ExpirationPlugin({
    maxAgeSeconds: THREE_DAYS_IN_SECONDS,
    maxEntries: IMAGE_MAX_ENTRIES,
  });

  const oneWeekExpiration = new workbox.expiration.ExpirationPlugin({
    maxAgeSeconds: ONE_WEEK_IN_SECONDS,
    maxEntries: STATIC_MAX_ENTRIES,
  });

  const cacheableResponsePlugin = new workbox.cacheableResponse.CacheableResponsePlugin({
    statuses: [200]
  });

  workbox.routing.registerRoute(
    /^https?:\/\/(i\.)?s[1-3]-?home-globo\.glbimg\.(qa\.globoi\.)?com.*\.(png|jpg|jpeg|ico|svg)$/,
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_PREFIX}-images`,
      plugins: [expirationImages],
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/s3\.glbimg\.(qa\.globoi\.)?com\/cdn\/libs\/(\w|-|\.)+\/\d+\.\d+\.\d+\/(\w|-|\.)+\.(js|css)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "glb-cdn-libs",
      plugins: [oneWeekExpiration],
    })
  );

  // Show Service's bundled assets
  workbox.routing.registerRoute(
    /^https?:\/\/(i\.)?s3\.glbimg\.(qa\.globoi\.)?com\/v1\/AUTH_[a-f\d]{32}\/show-components\/.*(css|js)$/,
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_PREFIX}-show-assets`,
      plugins: [
        oneWeekExpiration,
        cacheableResponsePlugin
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/(i\.)?s\d*\.glbimg\.(qa\.globoi\.)?com.*(js|css)$/,
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_PREFIX}-assets`,
      plugins: [
        oneWeekExpiration,
        cacheableResponsePlugin
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/(i\.)?s\d*\.glbimg\.(qa\.globoi\.)?com.*(js|css)\?loading\-agent=global\-webdeps$/,
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_PREFIX}-globalwebdeps`,
      plugins: [
        oneWeekExpiration,
        cacheableResponsePlugin
      ],
    })
  );

  self.skipWaiting();
  workbox.core.clientsClaim();

  self.addEventListener("activate", (event) => {
    event.waitUntil(
      (async function () {
        const imageCache = `${CACHE_PREFIX}-images`;
        await caches.delete(imageCache);
        await expirationImages.deleteCacheAndMetadata();
        await oneWeekExpiration.deleteCacheAndMetadata();

        if (DEBUG) {
          console.log("[SW.js::workbox] - delete all images from cache");
        }
      })()
    );
  });
}

if (Notification.permission === "granted") {
  if (DEBUG) {
    console.log("[SW.js::airship] - permission not granted");
  }
  setupAirship();
} else {
  navigator.permissions
    .query({ name: "notifications" })
    .then(function (notificationPermission) {
      notificationPermission.onchange = (status) => {
        if (DEBUG) {
          console.log(
            "[SW.js::airship] - User decided to change his seettings. New permission: " +
              notificationPermission.state
          );
        }

        if (notificationPermission.state === "granted") {
          setupAirship();
          if (DEBUG) {
            console.log(
              "[SW.js::airship] - changed to granted and made the UA setup.worker"
            );
          }
        }
      };
    });
}
