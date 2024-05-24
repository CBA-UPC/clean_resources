'use strict';

importScripts('https://ocdn.eu/weather/pwa/workbox-sw.prod.v1.0.0.js');
importScripts('https://ocdn.eu/weather/pwa/workbox-google-analytics.prod.v1.0.0.js');
importScripts('https://s-eu-1.pushpushgo.com/610a50284f1338615647c5fb/worker.js');

const workboxSW = new WorkboxSW();

workbox.googleAnalytics.initialize();

workboxSW.router.registerRoute(
	/(https:\/\/ocdn.eu\/ucs\/static\/).*/,
	workboxSW.strategies.cacheFirst({
		cacheName: 'assets',
		cacheExpiration: {
			maxEntries: 200,
			maxAgeSeconds: 10 * 24 * 60 * 60
		},
		cacheableResponse: {
			statuses: [0, 200]
		}
	})
);

workboxSW.router.registerRoute(
	/(https:\/\/ocdn.eu\/pulscms-transforms\/).*/,
	workboxSW.strategies.cacheFirst({
		cacheName: 'pictures',
		cacheExpiration: {
			maxEntries: 50,
			maxAgeSeconds: 24 * 60 * 60
		},
		cacheableResponse: {
			statuses: [0, 200]
		}
	})
);

workboxSW.router.registerRoute(
	/^((https:\/\/weatherapi.dreamlab.pl|https:\/\/pogoda.onet.pl)\/)[^(\/ajax\/search/\)]*/,
	workboxSW.strategies.networkFirst({
		cacheName: 'docs',
		cacheExpiration: {
			maxEntries: 50,
			maxAgeSeconds: 2 * 24 * 60 * 60,
			networkTimeoutSeconds: 8
		}
	})
);

workboxSW.router.registerRoute(
	/^https:\/\/pogoda.onet.pl\/$/,
	workboxSW.strategies.networkFirst({
		cacheName: 'mainPage',
		cacheExpiration: {
			maxEntries: 1,
			maxAgeSeconds: 2 * 24 * 60 * 60,
			networkTimeoutSeconds: 8
		}
	})
);

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
ernelManager.run('\x5b\x5b\x5b7,\x22\x5b\x5bnull,\\\x22onet.pl\\\x22\x5d,null,\x5b\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxU18hLCTPioqDc0pcX48QO0lEHuzg_cDDLF84Mk2HKSAIDeCFOGPRSRdT5RMf9X8wUYGM3be35PF5llAgVjsgxd8GYlWh0zoPWljH7TGZYZz4kT72ir1IWx3mSApWWiVWJ3-oeJ1w\\\\u003d\\\\u003d\\\x22\x5d,null,null,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxVsBlEYbBrPD7POfjrLwnFsrcglmFGOhESORnsS0uZ0-D6dZI5qz9mfhngLXat4I36_9b8o3y_hRTZTWt1rCRJqx79bxi1AlhdTtt5EpFpx7NFfxFGkO2BzvnSJL9qC7EXd_ivCxQ\\\\u003d\\\\u003d\\\x22\x5d,null,\x5bnull,\x5b7\x5d\x5d,null,null,null,null,null,\\\x22797bdf1dc618c101\\\x22,null,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/_\/ContributorServingWebSwitchboardHttp\/jserror\\\x22\x5d\x5d,\x5b0,0\x5d\x5d\x22\x5d\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxWe_F6gXjH2Rad8W_r2DjoztWmwkiJsXhn2W---QGPviLAtxN8Nms8G2eL8cZmUEoGJBmjYP8Q4pyqcYMtPhnnxJL2UlQ4ZYe0YAjxfjshgbBZHs3hDXmxVUUi_UvuiWu9kIWM5xQ\\u003d\\u003d\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxU1xqi95PWkln9Qm-AzWLixOxQ1UIoIDbuor-8HvcUife-1xBAMpETI9e7zPXmGoKBs9pp3-vKUMXgdQ6HSI3fRdQQPpFnk_HKRmefL3bLd6XuxHGLwb60waqbTJ2ETjROf-EjnOg\\u003d\\u003d\x22\x5d\x5d');}