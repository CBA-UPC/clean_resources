const cdnHost = 'https://static-assets-prod.epicgames.com/static/';
const precacheManifest = ["https://cdn1.unrealengine.com/static/js/parallax/parallax-2.1.3.min.js","https://static-assets-prod.epicgames.com/roborecall/static/webpack/../vendor/jquery-3.1.0.min.js","https://static-assets-prod.epicgames.com/roborecall/static/webpack/../vendor/jquery.fullpage.2.8.6.js","https://static-assets-prod.epicgames.com/roborecall/static/webpack/../vendor/TweenMax-1.19.0.min.js","https://static-assets-prod.epicgames.com/roborecall/static/webpack/./main.epic-roborecall.7cbc7b85c8e3fbcc09de.js","https://static-assets-prod.epicgames.com/roborecall/static/webpack/./main.epic-roborecall.7cbc7b85c8e3fbcc09de.css","https://static-assets-prod.epicgames.com/roborecall/static/webpack/./polyfill.epic-roborecall.7cbc7b85c8e3fbcc09de.js"];
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
