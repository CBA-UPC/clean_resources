{
  const waitUntil = ExtendableEvent.prototype.waitUntil;
  const respondWith = FetchEvent.prototype.respondWith;
  const promisesMap = new WeakMap();

  ExtendableEvent.prototype.waitUntil = function(promise) {
    const extendableEvent = this;
    let promises = promisesMap.get(extendableEvent);

    if (promises) {
      promises.push(Promise.resolve(promise));
      return;
    }

    promises = [Promise.resolve(promise)];
    promisesMap.set(extendableEvent, promises);

    // call original method
    return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {
      const len = promises.length;

      // wait for all to settle
      return Promise.all(promises.map().then(() => {
        // have new items been added? If so, wait again
        if (promises.length != len) return processPromises();
        // we're done!
        promisesMap.delete(extendableEvent);
        // reject if one of the promises rejected
        return Promise.all(promises);
      });
    }));
  };

  FetchEvent.prototype.respondWith = function(promise) {
    this.waitUntil(promise);
    return respondWith.call(this, promise);
  };
}

var idbKeyval={});

const CBSNEWS = {
	assetsVersion: "50926e3bde2e7c9caafa13eb3f9693b5",
	features: {},
	pushNotificationsStore: new idbKeyval.Store('CBSNEWS', 'pushNotifications'),
};

const LOG_PREFIX = `%c[CBSNEWS SW ${CBSNEWS.assetsVersion}]`;
const LOG_STYLE = `font-weight: bold;`;

const PRELOAD_CACHE = 'precache-v1';
// A list of local resources we always want to be cached.
const PRELOAD_CACHE_URLS = [
	'/fly/bundles/cbsnewscore/js-build/main.js',
	'/fly/bundles/cbsnewscore/js-build/main.responsive.js',
	'/fly/bundles/cbsnewscore/js-build/main.video.js',
	'/fly/bundles/cbsnewscore/js-build/main.video-embed.js',
	'/fly/bundles/cbsnewscore/js-build/push-notifications.js',
	'/fly/bundles/cbsnewscore/js-build/polyfills/hls.min.js',
];

const OFFLINE_CACHE = 'offline-v1';

self.addEventListener('install', event => {
	console.log(LOG_PREFIX, LOG_STYLE, 'installing');

	self.skipWaiting();

	event.waitUntil(async _ => {
		if (self.registration.navigationPreload) {
			// Enable navigation preloads
			await self.registration.navigationPreload.enable();
		}
	});

	fetchPreloadResources();
	fetchOfflinePage();
});

self.addEventListener('activate', async event => {
	console.log(LOG_PREFIX, LOG_STYLE, 'now ready to handle fetches');

	try {
		await event.waitUntil(clients.claim());

		console.log(LOG_PREFIX, LOG_STYLE, 'all clients claimed', clients);
	} catch (error) {
		console.error(LOG_PREFIX, LOG_STYLE, 'failed to claim clients with error', error.message);
	}
});

self.addEventListener('fetch', async event => {
	const request = event.request;

	const LOG_FETCH_STYLE = LOG_STYLE + 'color: hsl('+getInt(0, 360)+','+getInt(35, 80)+'%,'+getInt(20, 45)+'%)';

	// Let the browser do its default thing
	// for non-GET requests.
	if (request.method != 'GET') {
		console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'not a GET request', request.url, event);
		return;
	}


	const preloadResponse = await event.preloadResponse;
	if (preloadResponse) {
		console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'returning preload response', request.url, event);
		return event.respondWith(preloadResponse);
	}

	// request.mode = navigate isn't supported in all browsers
	// so include a check for Accept: text/html header.
	if (
		request.mode === 'navigate' ||
		(request.method === 'GET' && request.headers.get('accept').includes('text/html'))
	) {
		console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'fetching navigation request', request.url, event);

		return event.respondWith(fetch(request).catch(error => {
			console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'navigation request failed, responding with offline page', error.message);
			return caches.match('/offline.html');
		}));
	}
	else if (
		request.destination === "script" &&
		new RegExp(PRELOAD_CACHE_URLS.join('|')).test(request.url)
	) {
		return event.respondWith(caches.match(request).then(response => {
			if (response) {
				console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'HIT - returning cached script', request.url);
				return response;
			}

			console.log(LOG_PREFIX, LOG_FETCH_STYLE, 'MISS - fetching script', request.url);
			return fetch(request);
		}));
	}
});

// async function fetchFeatures () {
// 	const featuresRequest = new Request('/feedfiles/features.json');
// 	const fearuresResponse = await fetch(featuresRequest);
// 	CBSNEWS.features = await fearuresResponse.json();
// 	console.log(LOG_PREFIX, LOG_STYLE, 'fetched features', CBSNEWS.features);
// }


self.addEventListener('notificationclick', event => {
	let notification = event.notification;
	let action = notification.action;
	let data   = notification.data;

	// Fail fast
	if (!data) {
		return
	}

	let url;
    if (action) {
    	url = notification.data.actionTargets[notification.action];
    } else if (data.url) {
    	url = data.url;
    } else {
    	url = "/";
    }

	console.log(LOG_PREFIX, LOG_STYLE, 'Push Notification Click', url, data);

	idbKeyval.set(url, {
		body: notification.body,
		data: data,
		time: new Date,
	}, CBSNEWS.pushNotificationsStore);
	updateNotificationCount(-1);
});

self.addEventListener('push', event => {
	// Fail fast
	if (!event.data) {
		return;
	}

	console.log(LOG_PREFIX, LOG_STYLE, 'Push Notification Received', event.data.json());
	updateNotificationCount(1);
});

async function fetchPreloadResources () {
	console.log(LOG_PREFIX, LOG_STYLE, 'delete old cache');
	await caches.delete(PRELOAD_CACHE);

	const preloadCache = await caches.open(PRELOAD_CACHE);
	await PRELOAD_CACHE_URLS.map(url => {
		const request = new Request(url + '?v=' + CBSNEWS.assetsVersion);
		return fetch(request).then(;
	});

	console.log(LOG_PREFIX, LOG_STYLE, 'fetched preload resources', PRELOAD_CACHE_URLS);
}

async function fetchOfflinePage () {
	const offlinePageRequest = new Request('/offline.html');
	const offlinePageResponse = await fetch(offlinePageRequest);
	const offlineCache = await caches.open(OFFLINE_CACHE);
	await offlineCache.put(offlinePageRequest, offlinePageResponse)

	console.log(LOG_PREFIX, LOG_STYLE, 'fetched offline page');
}


async function updateNotificationCount (number) {
	let count = await idbKeyval.get('notificationCount', CBSNEWS.pushNotificationsStore);
		count = Math.max(0, (count || 0) + (number || 0));

	await idbKeyval.set('notificationCount', count, CBSNEWS.pushNotificationsStore);

	if ('setAppBadge' in navigator) {
		await navigator.setAppBadge(count);
	}

	return count;
}

/*
* Braze Web SDK v3.5.1
* (c) Braze, Inc. 2022 - http://braze.com
* License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
* Compiled on 2022-03-24
*/
'use strict';const k={M:;const l={D:;onst y={s:oa:qa:ra:info:warn:function(a){y.j&&(a="Appboy SDK Warning: "+a+" (v3.5.1)",null!=
y.f?y.f(a):console.warn(a))},error:;var z={CustomEvent:"ce",da:"p",J:"pc",I:"ca",fa:"i",ea:"ie",T:"cci",U:"ccic",R:"ccc",S:"ccd",ka:"ss",ja:"se",ca:"si",aa:"sc",$:"sbc",ba:"sfe",V:"iec",ia:"lr",N:"uae",P:"ci",O:"cc",ga:"lcaa",ha:"lcar",X:"inc",W:"add",Y:"rem",Z:"set",la:"sgu"},A=x,B={h:{g:"AppboyServiceWorkerAsyncStorage",VERSION:6,b:{l:"data",H:"pushClicks",A:"pushSubscribed",o:"fallbackDevice",F:"cardUpdates",v:"optOut",G:"pendingData",K:"sdkAuthenticationSignature"},m:1}},E=y;unction I(a,b,d){return new Promise(function(f,e){const c={};c.time=Math.floor((new Date).valueOf()/1E3);c.device_id=d;c.api_key=a;c.sdk_version="3.5.1";c.sdk_flavor="amp";c.respond_with={config:{config_time:0}};fetch(b+"/data/",{method:"POST",headers:{"Content-type":"application/json","X-Braze-Api-Key":a},body:JSON.stringify(c)}).then(.then(.catch(})}
function J(a,b,d,f,e,c,g,h,m){return G().then(n=>new Promise(function(C,D){const u={};u.device_id=d;u.api_key=a;u.sdk_version="3.5.1";null!=c&&(u.sdk_flavor=c);var v=null;let K=null,L=null;e&&(L=e.endpoint,e.getKey&&(v=btoa(String.fromCharCode.apply(null,new Uint8Array(e.getKey("p256dh")))),K=btoa(String.fromCharCode.apply(null,new Uint8Array(e.getKey("auth"))))));u.time=Math.floor((new Date).valueOf()/1E3);u.attributes=[{user_id:f,push_token:L,custom_push_public_key:v,custom_push_user_auth:K}];
v={"Content-type":"application/json","X-Braze-Api-Key":u.api_key};n&&m&&(v["X-Braze-Auth-Signature"]=n);fetch(b+"/data/",{method:"POST",headers:v,body:JSON.stringify(u)}).then(.then(.catch(}))}
function M(a,b){return F().then(.then(function(d){const f=B.h;w(new A(f,E),f.b.l,function(e,c){e=Math.floor((new Date).valueOf()/1E3);const g=c.data;g.time=e;a.time=e;a.user_id=c.userId;g.events=[a];g.sdk_version="3.5.1";e={"Content-Type":"application/json","X-Braze-Api-Key":g.api_key};d&&c.sdkAuthEnabled&&(e["X-Braze-Auth-Signature"]=d);fetch(c.baseUrl+"/data/",{method:"POST",headers:e,body:JSON.stringify(g)}).then(.then(.catch(})}).catch(function(){return Promise.reject("Not sending data to Braze backend due to opt-out.")})};function N(){const a=self.location.search.match(/apiKey=([^&]+)/i);if(a)return a[1];E.error("Missing API key in query params.");return null}E.s(!0);
elf.addEventListener("install",;self.addEventListener("activate",;
self.addEventListener("push",;
self.addEventListener("notificationclick",;self.addEventListener("pushsubscriptionchange",;
self.addEventListener("message",;
