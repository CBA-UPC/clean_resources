// default sw

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  const CACHE_PREFIX = 'multicontent';

  workbox.setConfig({
    debug: false,
  });

  workbox.precaching.precacheAndRoute([
    {
      url: 'https://s3.glbimg.com/cdn/fonts/opensans/bold.woff2',
      revision: 'bb121c',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/opensans/semibold.woff2',
      revision: 'a32caa',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/opensans/regular.woff2',
      revision: 'acd123',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/opensans/light.woff2',
      revision: 'acd123',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/proximanova/regular.woff2',
      revision: 'a32caa',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/proximanova/bold.woff2',
      revision: 'a32cab',
    }, {
      url: 'https://s3.glbimg.com/cdn/fonts/proximanova/light.woff2',
      revision: 'a32cad',
    }, {
      url: 'https://s.glbimg.com/gl/ba/fonts/proximanova-semibold-limited-webfont.woff',
      revision: 'a32cac',
    }
  ]);
  
  workbox.precaching.cleanupOutdatedCaches();

  workbox.routing.registerRoute(
    new RegExp('.ghtml$'),
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_PREFIX}-html`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 10
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/s2\.glbimg\.(qa\.globoi\.)?com.*(png|jpg|jpeg|ico|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: `${CACHE_PREFIX}-images`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 10
        })
      ]
    })
  );

  // Semantic versioned libs served by Globo's CDN
  workbox.routing.registerRoute(
    /^https?:\/\/s3\.glbimg\.(qa\.globoi\.)?com\/cdn\/libs\/(\w|-|\.)+\/\d+\.\d+\.\d+\/(\w|-|\.)+\.(js|css)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'glb-cdn-libs',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
          maxEntries: 20
        })
      ]
    })
  );

  // Show Service's bundled assets
  workbox.routing.registerRoute(
    /^https?:\/\/s3\.glbimg\.(qa\.globoi\.)?com\/v1\/AUTH_[a-f\d]{32}\/assets\/dist\/.*(js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: `${CACHE_PREFIX}-show-assets`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/s\.glbimg\.(qa\.globoi\.)?com.*(js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: `${CACHE_PREFIX}-assets`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [200]
        })
      ]
    })
  );

  // Codex's fontfaces
  workbox.routing.registerRoute(
    /^https:\/\/s3\.glbimg\.com\/v1\/AUTH_b922f1376f6c452e9bb337cc7d996a6e\/codex\/foundation\/typefaces\//,
    new workbox.strategies.CacheFirst({
      cacheName: 'codex-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
          maxEntries: 20
        })
      ]
    })
  )


  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
}