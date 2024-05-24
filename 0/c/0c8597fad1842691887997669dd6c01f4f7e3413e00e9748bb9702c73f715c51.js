
	var CreationTime = "2024-01-19 04:10:40.301";


    // commented due to IZOTO Integration, This is to initiate sw from Izoto
'use strict';
let izCacheVer = '1';
importScripts('https://static.growthrx.in/js/v2/push-sw.js');    
    
// ******** Fetch Week no. START ******
var currentDate = new Date();
var startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
     
var weekNumber = Math.ceil(days / 7);
// ******** Fetch Week no. END ******    
    
var HIGH_CACHE_NAME = 'high-v0-'+new Date().getMonth();
var LOW_CACHE_NAME = 'low-v2-'+new Date().getHours();
var CHUNK_CACHE_NAME = 'chunk-v0-'+weekNumber;
var IMG_CACHE_NAME = 'img-v0-'+new Date().getDay();
var STALE_WHILE_REVALIDATE = 'STALE_WHILE_REVALIDATE-'+weekNumber;

const HIGH_CACHE_FILES = [
'https://ads.pubmatic.com/AdServer/js/pwt/23105/2338/pwt.js',
'https://js-sec.indexww.com/ht/p/193119-87363260256000.js',
'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
'https://s0.2mdn.net/ads/studio/Enabler.js',
'https://static.clmbtech.com/ase/2658/621/aa.js',
'https://toiassets.indiatimes.com/affiliates/sdk/v2.js',
'https://toiassets.indiatimes.com/affiliates/sdk/v1.js',
'https://static.toiimg.com/photo/88204186.cms',
'https://www.gadgetsnow.com/photo/97121463.cms',
'https://static.toiimg.com/photo/81526830.cms',
'https://www.gadgetsnow.com/photo/97364922.cms',
'https://www.gadgetsnow.com/photo/91369744.cms',
'https://www.gadgetsnow.com/photo/93901925.cms',
'https://www.gadgetsnow.com/photo/96881213.cms',
'https://static.toiimg.com/photo/79837759.cms',
'https://static.toiimg.com/photo/81245133.cms',
'https://static.toiimg.com/photo/76150242.cms',
'https://static.toiimg.com/photo/90971913.cms',
'https://static.toiimg.com/photo/94201564.cms',
'https://static.toiimg.com/photo/25581306.cms',
'https://static.toiimg.com/photo/94201651.cms',
'https://static.toiimg.com/photo/71149155.cms',
'https://static.toiimg.com/photo/83712786.cms',
'https://static.toiimg.com/photo/90224868.cms',
'https://static.toiimg.com/photo/87739784.cms',
'https://static.toiimg.com/photo/90197030.cms',
'https://static.toiimg.com/photo/75847952.cms',
'https://www.gadgetsnow.com/gnassets/images/icons/android-icon-144x144.png',
'https://www.gadgetsnow.com/gnassets/images/startconver.svg',
'https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.js',
'https://static.clmbtech.com/ad/commons/colombiaonline/newlogo/Colombia_Sponsored.png',
'https://mobileads.indiatimes.com/Web_Ads/ROADBLOCK/2023/havells/18apr23/expand_btn.png',
'https://www.gadgetsnow.com/gnassets/bootstrap.341c931a.js',
'https://static.clmbtech.com/ad/commons/js/2658/colombia_v11.js',
'https://image.timespoints.iimg.in/static/tpsdk/tp-sdk.js',
'https://static.growthrx.in/js/v2/web-sdk.js',
'https://agi-static.indiatimes.com/cms-common/ibeat.min.js',
'https://static.clmbtech.com/ad/commons/colombiaonline/newlogo/Colombia_favicon_12x12.png',
'https://static.clmbtech.com/timeslocal/font/montserrat-semibold.woff2',
'https://static.clmbtech.com/timeslocal/font/montserrat-regular.woff2',
'https://static.clmbtech.com/timeslocal/font/montserrat-semibold.woff2',
'https://static.clmbtech.com/ad/commons/colombiaonline/newlogo/Colombia_favicon_12x12.png',
'https://sb.scorecardresearch.com/beacon.js',
'https://static.criteo.net/js/ld/publishertag.js',
'https://www.google-analytics.com/plugins/ua/ec.js',
'https://c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-regular.woff',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-700.woff',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-600.woff',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-700.woff2',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-500.woff',
'https://toiassets.indiatimes.com/fonts/montserrat-v14-latin-600.woff2',
'https://www.googletagmanager.com/gtm.js?id=GTM-MVSZ4H5',
'https://c.amazon-adsystem.com/aax2/apstag.js',
'https://cdn.ampproject.org/v0.js',
'https://cdn.ampproject.org/v0/amp-audio-0.1.js',
'https://cdn.ampproject.org/v0/amp-video-0.1.js',
'https://cdn.ampproject.org/v0/amp-story-1.0.js',
'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
'https://cdn.ampproject.org/v0/amp-cache-url-0.1.js',
'https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js',
'https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2',
'https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2',
'https://cdn.ampproject.org/rtv/012304062309000/v0/amp-animation-0.1.js',
'https://cdn.ampproject.org/rtv/012304062309000/v0/amp-ad-0.1.js',
'https://cdn.ampproject.org/rtv/012304062309000/v0/amp-loader-0.1.js',
'https://cdn.ampproject.org/rtv/012304062309000/v0/amp-animation-polyfill-0.1.js',
];

var STALE_WHILE_REVALIDATE_FILES = [
    'https://timesofindia.indiatimes.com/gnads/minify-1.cms',
    'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
];

addEventListener("fetch", function(event,type) {
    // Took help from https://developer.chrome.com/docs/workbox/caching-strategies-overview/
    async function cachedFetch(e, cacheName) {
        event.respondWith(caches.open(cacheName).then((cache) => {
          // Go to the cache first
          return cache.match(event.request.url).then((cachedResponse) => {
            // Return a cached response if we have one
            if (cachedResponse) {
              return cachedResponse;
            }
    
            // Otherwise, hit the network
            return fetch(event.request).then((fetchedResponse) => {
              // Add the network response to the cache for later visits
              cache.put(event.request, fetchedResponse.clone());
    
              // Return the network response
              return fetchedResponse;
            });
          });
        }));
    }
  if(event.request.method === "POST"){
      return;
  } else if(STALE_WHILE_REVALIDATE_FILES.indexOf(event.request.url) > -1 || event.request.url.indexOf('pubads_impl') > 1){
      //event.respondWith(fetchWithCache(event, STALE_WHILE_REVALIDATE));
      event.respondWith(caches.open(STALE_WHILE_REVALIDATE).then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
            const fetchedResponse = fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
    
              return networkResponse;
            });
    
            return cachedResponse || fetchedResponse;
          });
        }));
  } else if(HIGH_CACHE_FILES.indexOf(event.request.url) > -1){
    cachedFetch(event, HIGH_CACHE_NAME)
  } else if(event.request.url.indexOf('mobileads.indiatimes.com') > 1){
    cachedFetch(event, LOW_CACHE_NAME)
  } else if (event.request.url.indexOf('assets.toiimg.com/assets') > 1 && (event.request.url.indexOf('.js') > 1 || event.request.url.indexOf('.css') > 1)) {
    cachedFetch(event, CHUNK_CACHE_NAME)
  } else if (event.request.url.indexOf('static.toiimg.com/thumb') > 1 || event.request.url.indexOf('static.toiimg.com/photo') > 1) {
    cachedFetch(event, IMG_CACHE_NAME)
  } else{
      return;
  }
});

self.addEventListener('activate', function(e) {
    var cacheArr = [HIGH_CACHE_NAME,LOW_CACHE_NAME,CHUNK_CACHE_NAME,IMG_CACHE_NAME]
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheArr.length > 0 && cacheArr.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

	    
	    
	