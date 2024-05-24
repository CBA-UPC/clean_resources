importScripts("/dist/precache-manifest.187f1a83c3384dae784f59d73cbc1802.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', e => {
    if (!e.data) {
        return;
    }

    switch (e.data) {
    case 'skipWaiting':
        self.skipWaiting();
        break;
    default:
        // NOOP
        break;
    }
});

// workbox.clientsClaim(); // Vue CLI 3 and Workbox v3, else
workbox.core.clientsClaim(); // Vue CLI 4 and Workbox v4.

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings(); // Remove for Vue CLI 4 and Workbox v4.
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

