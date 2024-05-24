/* global workbox importScripts */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

/* VERSION 1.1.0 */

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60;
const ONE_MONTH_IN_SECONDS = 30 * 24 * 60 * 60;
const ASSET_CACHE = 'helios-asset-cache';
const FONT_CACHE = 'helios-font-cache';

if (workbox) {
  workbox.setConfig({
    debug: false,
  });

  /* HASHED JS & CSS */
  workbox.routing.registerRoute(
    /\/assets\/.+[a-zA-Z0-9]{14,}\.(css|js)$/,
    workbox.strategies.cacheFirst({
      cacheName: ASSET_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of a week
          maxAgeSeconds: ONE_WEEK_IN_SECONDS,
        }),
      ],
    })
  );

  /* SUN MASTHEAD */
  workbox.routing.registerRoute(
    /\/images\/sunmasthead(_mobile)?\.svg$/,
    workbox.strategies.cacheFirst({
      cacheName: ASSET_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of a week
          maxAgeSeconds: ONE_WEEK_IN_SECONDS,
        }),
      ],
    })
  );

  /* FONTS */
  workbox.routing.registerRoute(
    /\/fonts\/roboto(-slab)?\/Roboto(Slab)?-Regular-webfont\.woff$/,
    workbox.strategies.cacheFirst({
      cacheName: FONT_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of a month
          maxAgeSeconds: ONE_MONTH_IN_SECONDS,
        }),
      ],
    })
  );
}
