var currentLocation = new URL(self.location);
var CURRENT_CACHE = currentLocation.searchParams.get('version') || 'v1';
var OFFLINE_CACHE = CURRENT_CACHE + '_OFFLINE';
var OFFLINE_URL = '/offline.html';
var INDEX_URL = '/?source=pwa';

var blacklistedPaths = [
  'api',
  'admin'
];

function isAllowedToIntercept(url) {
  if (url) {
    return blacklistedPaths.every(;
  }

  return false;
}

function getOfflinePage () {
  return cache = caches.open(OFFLINE_CACHE)
    .then(;
}

function addToCache (url, response) {
  if (response.status !== 200) {
    return Promise.resolve();
  }

  return caches && caches.open(CURRENT_CACHE)
    .then(;
}


function handleFetch(event) {
  var request = event.request;
  var isSupportedDomain = request.url.indexOf(self.location.origin) === 0;
  var isGet = request.method === 'GET';

  if (isSupportedDomain && isGet && isAllowedToIntercept(request.url)) {
    event.respondWith(
      fetch(request)
        .then(
        .catch(function () {
          return event.request.mode === 'navigate'
            ? getOfflinePage()
            // : getFromCache(request);
            : Promise.reject(request);
        })
    );
  }
}

self.addEventListener('activate', (event) => {
  var cacheKeeplist = [CURRENT_CACHE, OFFLINE_CACHE];

  event.waitUntil(
    caches && caches.keys()
      .then(
  );
});

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(OFFLINE_CACHE)
      .then(function (cache) {
        return cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
      })
  );
  console.debug('Service worker has been installed');
});

self.addEventListener('fetch', handleFetch);
