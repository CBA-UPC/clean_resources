'use strict';

var cacheName = 'novel-reader';
var urlsToCache = [''];

self.addEventListener('fetch', function (event) {

});

self.addEventListener('install', ;

self.addEventListener('activate', function (ev) {
    ev.waitUntil(caches.keys().then(function (keyList) {
        keyList.forEach(function (key) {
            if (key !== cacheName) 
            caches.delete(key);
        });
    }));
    return self.clients.claim();
});
