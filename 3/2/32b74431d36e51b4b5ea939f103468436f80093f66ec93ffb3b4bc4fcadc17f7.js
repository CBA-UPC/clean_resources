// register service worker if supported
// Service-worker file needs to exist in root folder, because it defines its scope = it can intercept only requests below it in the tree structure

window.addEventListener('load', function () {
    if ('serviceWorker' in navigator &&
        (pwaEnabled ||
            (typeof OneSignal != 'undefined' && typeof OneSignalDeferred === 'undefined') ||
            !swCacheDisabled)) {
        var sw = '/OneSignalSDKWorker.js';
        if (typeof OneSignal != 'undefined' && typeof OneSignalDeferred === 'undefined' && OneSignal.config) {
            sw = sw + '?appId=' + OneSignal.config.appId;
        }
        if (pwaEnabled) {
            sw = sw.indexOf('?') > -1 ? sw + '&pwa=true' : sw + '?pwa=true';
        }
        if (swCacheDisabled) {
            sw = sw.indexOf('?') > -1 ? sw + '&sw-cache-dis=true' : sw + '?sw-cache-dis=true';
        }
        navigator.serviceWorker.register(sw).then( ;
    }
});
