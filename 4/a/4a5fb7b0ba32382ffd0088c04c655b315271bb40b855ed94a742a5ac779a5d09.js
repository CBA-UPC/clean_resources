var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.idleLoader=function(){ASCDP.adS.moduleList.length&&(window.requestIdleCallback?window.requestIdleCallback(function(){var d=ASCDP.adS.moduleList.shift();d&&(d=d.split("^"),ASCDP.adS.loadModules([d[0]],null,d[1]),ASCDP.adS.idleLoader())}):setTimeout(function(){var d=ASCDP.adS.moduleList.shift();d&&(d=d.split("^"),ASCDP.adS.loadModules([d[0]],ASCDP.adS.idleLoader,d[1]))},20))};FLINE_URL, {cache: 'reload',}));
    })());

    self.skipWaiting();
});

self.addEventListener('activate', event => {
    

    event.waitUntil((async () => {
        /*
         * Enable navigation preload if it's supported.
         * See https://developers.google.com/web/updates/2017/02/navigation-preload
         */
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());

    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    

    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse;

                if (preloadResponse) {
                    return preloadResponse;
                }

                return await fetch(event.request);
            } catch (error) {
                console.error('[Service Worker] Fetch failed; returning offline page instead.', error);

                const cache = await caches.open(CACHE_NAME);

                return await cache.match(OFFLINE_URL);
            }
        })());
    }
});