var cacheName	= 'insertlive';
var filesToCache = [
	'/js/detik-vertical.js',
    '/mobile/js/detik-vertical.js'
];

self.addEventListener('install', ;

self.addEventListener('activate', ;

self.addEventListener('fetch', function(e) {
	var bUrl	= `www.insertlive.com`,
		dataUrl = `${bUrl}/api`;

	if (
		e.request.url.indexOf(bUrl) > -1 &&
		e.request.url.indexOf(dataUrl) < 0 &&
		e.request.url.indexOf(`${bUrl}/css/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/fonts/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/images/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/js/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/mobile/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/scss/`) < 0
	) {
		return false
	}

	if (e.request.url.indexOf(dataUrl) > -1) {
		/*
		 * When the request URL contains dataUrl, the app is asking for fresh
		 * weather data. In this case, the service worker always goes to the
		 * network and then caches the response. This is called the "Cache then
		 * network" strategy:
		 * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
		 */
		e.respondWith(
			caches.open(cacheName).then(function(cache) {
				return fetch(e.request)
					.then(function(response){
						return new Promise(resolve => {
							response.clone().json()
								.then(
								.catch(
						})
					})
					.then(result => {
						const {response, body} = result
						if (!body) {
							return response
						}
						cache.put(body.payload||e.request.url, response.clone());
						return response;
					})
			})
		);
	} else {
		e.respondWith(
			caches.match(e.request)
				.then(
		)
	}
});
