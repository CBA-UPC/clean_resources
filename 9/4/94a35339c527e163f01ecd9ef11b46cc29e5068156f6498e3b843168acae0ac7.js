const cdnHost = 'https://static-assets-prod.epicgames.com/static/';
const precacheManifest = ["https://static-assets-prod.epicgames.com/epicgames/static/webpack/./main.epic-games.7cbcd100.js","https://static-assets-prod.epicgames.com/epicgames/static/webpack/./main.epic-games.a0017fef.css","https://static-assets-prod.epicgames.com/epicgames/static/webpack/./thirdParty.epic-games.a7ee76f7.css","https://static-assets-prod.epicgames.com/epicgames/static/webpack/./polyfill.epic-games.2c12fd8f.js"];
const navigationFallback = '';

// EPIC EDITED
importScripts(cdnHost + "workbox-v3.1.0/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: cdnHost + "workbox-v3.1.0"
});
// EPIC EDITED
workbox.core.setCacheNameDetails({prefix: "epic-service-worker"});

self.__precacheManifest = precacheManifest.concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// EPIC EDITED
if (navigationFallback) {
    workbox.routing.registerNavigationRoute(navigationFallback);
}
