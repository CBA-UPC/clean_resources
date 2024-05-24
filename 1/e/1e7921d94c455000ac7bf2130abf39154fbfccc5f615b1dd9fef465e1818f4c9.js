/* eslint-disable */
// epic-sw.txt
// built January 27 at 7:13pm HQ time
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes

const cdnHost = 'https://cdn2.epicgames.com/static/';
const precacheManifest = [{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/main.egstore-site.1ae0860e6a312dd95922.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/webAppStyles.egstore-site.20a3202f90cd69924aab.css","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/webAppStyles.egstore-site.00680ce16ffd26388da5.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/3055c832e06d4423d110734ab7526880.eot","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/834e3616d9e57f3f027e96394f43efa0.woff","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/a503b79af3e35504c7b322dbc84cac2d.ttf","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/c43c1d3403802612b856948b91b9e8f1.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/launcherAppStyles.egstore-site.8eaac5ad20429cdc7960.css","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/launcherAppStyles.egstore-site.5910ff9e61b63e78f151.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/3055c832e06d4423d110734ab7526880.eot","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/834e3616d9e57f3f027e96394f43efa0.woff","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/a503b79af3e35504c7b322dbc84cac2d.ttf","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/c43c1d3403802612b856948b91b9e8f1.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/fonts.egstore-site.1b2944c5f90b61e1b175.css","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/fonts.egstore-site.145f6d283a9238242e7f.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ClientIndex.egstore-site.2de76dcdbad5aa27628a.css","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ClientIndex.egstore-site.b4eccca7ab5f37a5598c.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/bf386a55a31f86ef97c23ebc718192b4.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/0f70ca2871644a7088a012669e07299c.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/c0498fad714f0f1f049e67a59b11fe57.jpg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/b69918774f8e3764be9a41a111fcfd33.webm","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ManageProductsPage.egstore-site.8b3a064e107baa75e809.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/d71da1c195d3183df5799e7892e9b1a1.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ProductAddonsPage.egstore-site.78a6e91f4d30b2e9b6e2.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ManageProductModsPage.egstore-site.94cde599712875abeacb.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/NewsView.egstore-site.648bcfe5c99f930f7db3.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/CMSMarketingView.egstore-site.793f9b345ecf0c9384c7.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ArticleView.egstore-site.7968ad5d8cfeac5bd469.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/CartView.egstore-site.735efa4201ab9bc25761.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/CartSuccessView.egstore-site.4acc8c145cdc55b95e08.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/cc5589238c45cc8f5c27ff5f1434b596.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/WishlistView.egstore-site.305de19c277b55356ba8.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/Vendor.egstore-site.74b6b7cb3e58fe1bca11.js","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/0f70ca2871644a7088a012669e07299c.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/c43c1d3403802612b856948b91b9e8f1.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/bf386a55a31f86ef97c23ebc718192b4.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/dabe44acadaefe22357acd28244b1933.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/cc5589238c45cc8f5c27ff5f1434b596.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/c0498fad714f0f1f049e67a59b11fe57.jpg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/b69918774f8e3764be9a41a111fcfd33.webm","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/6352ecbafe2a2915defae00c6e0dd9af.ttf","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/8b3aca0333a39d6f90494956b599f3fd.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/53cde6471efceb998c670795d64748d9.woff","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/9400c1ac4c6a063c24670cc5c73e6ce1.eot","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/4553982d7272dd810fcae949cd09e912.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/ecc83371a7a66cdb0a552bd9d1c8b78c.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/d71da1c195d3183df5799e7892e9b1a1.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/25c285e020572b4f76b770d6cca272ec.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/loadable-stats.json","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/8a124e07162305cd8c3e29e108a38022.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/548edd23fcf5d157ca443ae24f6b2e1a.svg","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/7ccde556bbb16876d199091c7c103157.png","revision":null},{"url":"https://static-assets-prod.epicgames.com/epic-store/static/webpack/11a89fd458893320d6621e23c415744e.svg","revision":null}];
const navigationFallback = '/offline-cache';
const debug = false;
const shouldSkipWaiting = true;
const networkTimeoutSeconds = 10000;
const purchaseUrl = '/purchase';

// EPIC EDITED
importScripts(`${cdnHost}workbox-v6.5.4/workbox-sw.js`);

workbox.setConfig({
    modulePathPrefix: `${cdnHost}workbox-v6.5.4`,
    // ,
    // debug, // boolean that enables debug logging in the console
});

// This will trigger the importScripts() for workbox plugins.
workbox.loadModule('workbox-core');
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-precaching');
workbox.loadModule('workbox-navigation-preload');

workbox.navigationPreload.enable();

// if there is no revision property, we just want the url, because the url should have a hash in it's filename
workbox.precaching.precacheAndRoute(precacheManifest);

const runtimeCacheName = workbox.core.cacheNames.runtime;
const precacheCacheName = workbox.core.cacheNames.precache;
const offlineCacheName = 'offline-page';

const isNavigationRequest = ({event}) => {
    return event.request.mode === 'navigate';
};

// only writes to console if this is running on a non-prod environment
const debugLog = (msg) => {
    if (debug) console.log(msg);
};

const offlineCacheFallback = async (url) => {
    if (url.pathname === purchaseUrl) {
        // When the web or launcher makes a request to the purchase route, they are expecting the
        // purchase flow website and not the EGS React website. If the user is offline or is unable
        // to reach this route, both the web and launcher have code to resolve this load error.
        debugLog('SW', 'purchase url requested, return failed response instead of offline cache');
        return Response.error();
    }
    const offlineCacheResponse = await caches.match(navigationFallback, {
        cacheName: offlineCacheName,
    });
    debugLog('offline cache response loaded from cache\nreturning offline cache response');
    if (offlineCacheResponse && offlineCacheResponse.ok) {
        debugLog(`offline cache response is .ok\n returning it`);
        return offlineCacheResponse.clone();
    }
    return new Response(null, {
        status: 500,
        statusText: 'Failed to load offline page from service worker.',
    });
};

const timeout = (ms) => {
    return new Promise(;
};

self.addEventListener('install', (event) => {
    console.log('service worker installed');

    event.waitUntil(
        caches.open(offlineCacheName).then((cache) => {
            return fetch(navigationFallback, {credentials: 'omit', redirect: 'follow'}).then(
                (resp) => {
                    // cache offline-page but hit 4xx/5xx error, not cache error page and finish install
                    if (resp.status > 399 && resp.status < 600) {
                        return Promise.resolve('not caching 4xx/5xx');
                    }
                    // we should create a new response here since the offline-cache page would be redirected,
                    // otherwise it will cause site to be unreachable when we use offline cache response.
                    return cache.put(navigationFallback, new Response(resp.body));
                }
            );
        })
    );
    if (shouldSkipWaiting) {
        debugLog('activating service worker now');
        self.skipWaiting();
    }
});

self.addEventListener('activate', ;

workbox.routing.registerRoute(isNavigationRequest, ({event, url}) => {
    event.respondWith(
        (async function getNavigateResponse() {
            const networkOnly = new workbox.strategies.NetworkOnly();

            try {
                // On a cold boot, the SW is configured to allow the browser to fire its navigation request
                // in parallel with this interceptor. If that preloadResponse exists, return that promise
                // for a faster initial experience.
                const preload = await event.preloadResponse;
                if (preload) {
                    return preload;
                }
                const promises = [networkOnly.handle({event}), timeout(networkTimeoutSeconds)];
                const response = await Promise.race(promises);
                if (!response) {
                    throw new Error(
                        `Timed out the network response after ${networkTimeoutSeconds} seconds.`
                    );
                }
                if (response.status > 499) {
                    return await offlineCacheFallback(url);
                }
                return response.clone();
            } catch (networkFirstError) {
                return await offlineCacheFallback(url);
            }
        })()
    );
});
