const CACHE_NAME = 'v1';
const CACHE_URLS = [];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(
                .map(
            );
        })
    );
});

self.addEventListener('fetch', ;
