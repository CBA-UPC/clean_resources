/* eslint-disable no-console */
/* eslint quotes:0 */
/* global */
// Important notes:
// - This file is not processed by gulp/webpack/babel
// - Make sure you know what you're doing.
// - Test recklessly.

/**/ // Comment this to run prettier
const localesList = [
  "en", "fr", "es", "zh-Hant", "zh-Hans", "ja", "en-AU", "en-CA", "en-HK", "en-IN", "en-NZ", "en-SG", "en-US", "en-GB", "fr-CA", "fr-CH", "fr-BE", "zh-Hans-SG", "zh-Hant-HK"
];
/**/

const PREFERENCES_STORE = 'preferences';

const getStore = 

const getItem = (store, key) =>
  new Promise((resolve) => {
    const request = store.get(key);
    request.onsuccess = (evt) =>
      resolve(evt.target.result && evt.target.result.value);
    request.onerror = 
  });

const initIndexedDB = () =>
  new Promise((resolve) => {
    // Open the `gandi.net` database, version 1. Returns a IDBOpenDBRequest
    const openRequest = self.indexedDB.open('gandi.net', 1);

    openRequest.onsuccess = 

    // Handle first creation of stores within database, or version update
    openRequest.onupgradeneeded = (evt) => {
      // Delete previous version of object-store if any.
      try {
        evt.target.result.deleteObjectStore(PREFERENCES_STORE);
      } catch (err) {
        /* pass */
      }
      // Note: `key` value **must** be unique
      evt.target.result.createObjectStore(PREFERENCES_STORE, {
        keyPath: 'key',
      });
    };
  });

const redirect = (location) =>
  new Response(null, {
    status: 302,
    headers: {
      'Cache-Control': 'no-cache',
      'Location': location,
    },
  });

// handler --------------------------------------------------------------

const params = ['c', 'currency', 'grid', 'taxes'];

// Modify the locale and queryparams of the url
// according to the user preferences stored in indexedDB.
async function applyUserParams(db, url, isReload, referrer) {
  let shouldRedirect = false;
  const redirectParams = [];

  const store = getStore(db);

  const currentUrl = url.href;
  const searchParams = new URLSearchParams(url.search);

  // Check if a locale is correct; else, return `null`.
  const pathLocale = url.pathname.split('/')[1];
  const locale = localesList.includes(pathLocale) ? pathLocale : null;
  const pathLocaleReferrer = referrer && referrer.pathname.split('/')[1];
  const localeReferrer =
    pathLocaleReferrer && localesList.includes(pathLocaleReferrer)
      ? pathLocaleReferrer
      : null;

  const localePref = await getItem(store, 'locale');

  await Promise.all(
    params
      .map(async (key) => {
        if (!searchParams.get(key)) {
          const val = await getItem(store, key);
          if (val) {
            shouldRedirect = true;
            url.searchParams.append(key, val);
            redirectParams.push(key);
          }
        }

        if (
          (isReload && searchParams.get(key)) ||
          (searchParams.get(key) &&
            referrer &&
            url.search === referrer.search) ||
          (searchParams.get(key) &&
            referrer &&
            url.pathname !== referrer.pathname &&
            locale === localeReferrer)
        ) {
          redirectParams.push(key);
          shouldRedirect = true;
        }
      })
      .filter(Boolean),
  );

  if (localePref && localePref !== locale) {
    if (locale !== null && localePref.includes(locale.slice(0, 2))) {
      url.pathname = url.pathname.replace(locale, localePref);
      shouldRedirect = true;
    } else if (url.pathname === '/') {
      url.pathname = `/${localePref}`;
      shouldRedirect = true;
    }
  }

  if (shouldRedirect) {
    if (redirectParams.length > 0) {
      url.searchParams.append('sw', redirectParams.join());
    }

    url.pathname = url.pathname.replace(/\/$/, '');
    const decodedURL = decodeURIComponent(url.href);

    if (decodedURL !== currentUrl) {
      console.info('Redirecting ...');
      return redirect(decodedURL);
    }
  }

  throw new Error('No user params redirect necessary.');
}

// Fetch handler --------------------------------------------------------------

const staticExtensions = [
  '.css',
  '.eot',
  '.gif',
  '.ico',
  '.jpg',
  '.js',
  '.map',
  '.png',
  '.svg',
  '.ttf',
  '.txt',
  '.woff',
  '.woff2',
  '.xml',
];

// Check if incoming request is a page, not an asset.
function isPage(evt, url) {
  return (
    url &&
    !url.pathname.includes('/admin/') &&
    !url.pathname.includes('/.well-known/') &&
    
    staticExtensions.every( &&
    !url.search.includes('sw=') &&
    (!evt.clientId || evt.request.mode === 'navigate')
  );
}

// Intercept and filter requests to recover the url used.
self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);
  const referrer = evt.request.referrer ? new URL(evt.request.referrer) : '';

  if (isPage(evt, url)) {
    evt.respondWith(
      (async () => {
        try {
          console.info('Retrieving IndexedDB ...');
          const indexedDB = await initIndexedDB();
          console.info('Applying user params ...');
          const redirectResponse = await applyUserParams(
            indexedDB,
            url,
            evt.isReload,
            referrer,
          );
          return redirectResponse;
        } catch (err) {
          if (err.message !== 'No user params redirect necessary.') {
            console.error("Couldn't apply user params redirect.", err);
          }
          return fetch(evt.request);
        }
      })(),
    );

    return;
  }

  evt.respondWith(fetch(evt.request));
});
