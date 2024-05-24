importScripts("https://s3.glbimg.com/v1/AUTH_c7def7ff66fe4b13beac0810ffbf780f/secure/precache-manifest.141fef5b6ceb83f4ebf4eea2ed92857f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

const CACHE_PREFIX = 'globoplay'

workbox.routing.registerRoute(
  '/',
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-root`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* CDN Fonts */
// Cache custom fonts files with a cache first strategy for 1 year
// Ex: https://s.glbimg.com/gl/ba/fonts/globofutura-bold-webfont.woff
workbox.routing.registerRoute(
  /^https?:\/\/s.?\.glbimg\.com.*(eot|woff|woff2|ttf)$/,
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-fonts`,
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 365 * 24 * 60 * 60 // 365 Days
      })
    ]
  })
)

// Cache google fonts files with a cache first strategy for 1 year
// Ex: https://fonts.googleapis.com/css?family=Roboto
workbox.routing.registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/,
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-google-fonts`,
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 365 * 24 * 60 * 60 // 365 Days
      })
    ]
  })
)

/* CDN Images */
// Cache CDN images, making sure it is not cached indefinitely, consuming users' storage
// Ex: https://s2.glbimg.com/.../poster.jpg
workbox.routing.registerRoute(
  /^https?:\/\/s.*\.(video\.)?glbimg\.com.*(?:png|gif|jpg|jpeg|svg|ico|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-cdn-images`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 300,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* CDN JS and CSS */
// Read Globoplay JS and CSS from the cache while update them the background for the next use
// Ex: https://s3.glbimg.com/v1/AUTH_.../secure/app-client-bundle-[hash].js
workbox.routing.registerRoute(
  /^https?:\/\/s3\.glbimg\.(qa\.globoi\.)?com\/.*\/secure\/app-.*(?:css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${CACHE_PREFIX}-assets`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

// Read globo.com JS and CSS from the cache while update them the background for the next use
// Ex: https://p.glbimg.com/stable/player.min.js
workbox.routing.registerRoute(
  /^https?:\/\/(?:s|p).*\.glbimg\.com.*\/(?!secure\/app-).*(?:css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${CACHE_PREFIX}-external-assets`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 300,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* Globoplay pages */
// Read html from network, but cache the results for offline scenario
// Ex http://globoplay.globo.com
workbox.routing.registerRoute(
  // eslint-disable-next-line max-len
  /^https?:\/\/(?:\s*(?:\S\s*){1,32}\.quicksilver)?(?:beta-)?(?:globoplay)?\.(?:qa\.|dev\.)?globoi?\.com(?!\/subscription-api\/)/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-html`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* CDN tag / event managers */
// Read tag managers from the cache while update them the background for the next use
// Ex: https://cdn.krxd.net/controltag/J2lZajxx.js
// Ex: https://tags.globo.com/utag/globo/globoplay/prod/utag.js //TODO revisar pós migração para GTM
// Ex: https://radar.cedexis.com/1560296207/radar.js
// Ex: https://connect.facebook.net/en_US/fbevents.js
workbox.routing.registerRoute(
  // eslint-disable-next-line max-len
  /^https?:\/\/(?:cdn\.krxd\.net|tags\.globo\.com|radar\.cedexis\.com|connect\.facebook\.net)\/.*js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${CACHE_PREFIX}-tags-assets`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

// Read versioned tags from cache first
// Ex: https://cdn.krxd.net/ctjs/controltag.js.05f9d0dad02f8a1b0b028b868bc3a3e2
// Ex: https://tags.tiqcdn.com/utag/globo/globoplay/prod/utag.43.js?utv=[version]
workbox.routing.registerRoute(
  /^https?:\/\/(?:cdn\.krxd\.net|tags\.tiqcdn\.com)\/.*(?:\.js\?utv|ctjs\/controltag\.js\.\w+)/,
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_PREFIX}-tags-assets`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* Globo.com APIs */
// Read calls to affiliates (using geolocation) from cache first, while revalidating for next use
// Ex: https://security.video.globo.com/affiliates/info?lat=-34.333&long=22.321
workbox.routing.registerRoute(
  /^https?:\/\/security\.video\.globo\.com\/affiliates\/info\/?\?lat=.+&long=.+$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${CACHE_PREFIX}-wmapi-affiliates`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* Globo.com APIs */
// Get affiliates by ip info from network first, but cache it for offline experince
// Ex: https://security.video.globo.com/affiliates/info
workbox.routing.registerRoute(
  /^https?:\/\/security\.video\.globo\.com\/affiliates\/info\/?$/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-wmapi-affiliates-by-ip`,
    networkTimeoutSeconds: 2.5,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

// Get live info from network first, but cache it for offline experince
// Ex: https://security.video.globo.com/videos/4452349/info
workbox.routing.registerRoute(
  /^https?:\/\/security\.video\.globo\.com\/videos\/(?:\d+)\/info\/?$/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-wmapi-live-videos`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 Days
      })
    ]
  })
)

// Read upa data from network first, but cache it for offline experince
// EX: https://api.user.video.globo.com/programs/favorites/11607/
workbox.routing.registerRoute(
  /^https?:\/\/api\.user\.video\.globo\.com\/?/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-upa`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 15 * 24 * 60 * 60, // 15 Days
        purgeOnQuotaError: true
      })
    ]
  })
)

/* Globoplay APIs */
// Read api calls from network first, but cache it for offline experince
// Ex: https://globoplay.globo.com/subscription-api/family/members/?token=[hash]
workbox.routing.registerRoute(
  /(?:\/subscription-api\/)/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-apis`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 15 * 24 * 60 * 60 // 15 Days
      })
    ]
  })
)

// Read graphql calls from network first, but cache it for offline experince
// Ex: https://jarvis.globo.com/graphql?...
workbox.routing.registerRoute(
  /^https?:\/\/.*?jarvis.*?\.globoi?\.com\/graphql\?/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${CACHE_PREFIX}-graphql`,
    networkTimeoutSeconds: 6,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 15 * 24 * 60 * 60 // 15 Days
      })
    ]
  })
)

