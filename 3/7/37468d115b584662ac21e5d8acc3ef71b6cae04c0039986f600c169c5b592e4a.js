self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cache-pwa').then(
 );
});

self.addEventListener('fetch', function(e) {
  //console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          console.log(cacheName);
        }).map(
      );
    })
  );
});
