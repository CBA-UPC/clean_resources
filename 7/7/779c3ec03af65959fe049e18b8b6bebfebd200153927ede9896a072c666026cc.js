
    
        importScripts('https://static.growthrx.in/js/v2/push-sw.js');
          
var HIGH_CACHE_NAME = 'et-v11-'+new Date().getMonth()+1;
var LOW_CACHE_NAME = 'et-v11-'+new Date().getHours();
var version_sw = {
    css_main:104,
    css_common_new:300,
    css_default_new2:59,
    css_articleshow_new:152,
    css_stocks_new:82,
    css_ifsccode_new: 14,
    js_jquery351:8,
    js_common_new:705,
    js_monetize:192,
    jshome_topnew:59,
    js_default_new2:82,
    js_etidentifierv:23,
    js_socialdatacapture_min:133,
    js_slikeplayernew:31,
    js_typed:1,
    js_athena_distribution:37,
    js_push:62,
    js_onboarding_popup_sh:13,
    js_devtool:1,
    js_ashead:29,
    js_adoverride:17,
    js_ettechpoll:5,
    js_comments:113,
    js_wealthcommon:21,
    js_stocks_new: 124,
    js_marketstats: 264,
    js_ifsccode: 45
};

const HIGH_CACHE_FILES = [
    'https://img.etimg.com/photo/msid-85874768,quality-100/stocks-research.jpg',
    'https://img.etimg.com/photo/msid-93912504,quality-100/company-sprite.jpg',
    'https://img.etimg.com/photo/msid-98203283,quality-100/subscriber-sprite.jpg',
    'https://img.etimg.com/photo/msid-92409413,quality-100/subscriber-sprite.jpg',
    'https://img.etimg.com/photo/msid-76931895,quality-100/et-logo.jpg',
    'https://img.etimg.com/photo/msid-100067830,quality-100/et-logo.jpg',
    'https://img.etimg.com/photo/65289395.cms',
    'https://img.etimg.com/photo/msid-76931947,quality-100/et-markets-logo.jpg',
    'https://economictimes.indiatimes.com/fonts/faustina-v6-latin-500.woff2',
    'https://economictimes.indiatimes.com/fonts/montserrat-v14-latin-regular.woff2',
    'https://economictimes.indiatimes.com/fonts/montserrat-v14-latin-500.woff2',
    'https://economictimes.indiatimes.com/fonts/montserrat-v14-latin-600.woff2',
    'https://economictimes.indiatimes.com/fonts/montserrat-v14-latin-700.woff2',
    'https://economictimes.indiatimes.com/fonts/faustina-v6-latin-700.woff2',
    'https://economictimes.indiatimes.com/fonts/faustina-v6-latin-600.woff2',
    'https://economictimes.indiatimes.com/fonts/faustina-v6-latin-regular.woff2',
    'https://economictimes.indiatimes.com/fonts/faustina-v6-latin-700.woff2',
    'https://economictimes.indiatimes.com/fonts/montserrat-v14-latin-800.woff2',
    'https://static.clmbtech.com/timeslocal/font/montserrat-medium.woff2',
    'https://player.avplayer.com/script/8.3/v/assets/e38937dbf8202c144802.woff',
    'https://economictimes.indiatimes.com/css_ifsccode_new/v-'+version_sw.css_ifsccode_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/css_main/v-'+version_sw.css_main+',minify-1.cms',
    'htps://economictimes.indiatimes.com/css_common_new/v-'+version_sw.css_common_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/css_default_new2/v-'+version_sw.css_default_new2+',minify-1.cms',
    'https://economictimes.indiatimes.com/css_articleshow_new/v-'+version_sw.css_articleshow_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/css_stocks_new/v-'+version_sw.css_stocks_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_jquery351/v-'+version_sw.js_jquery351+'.cms',
    'https://economictimes.indiatimes.com/jshome_topnew/v-'+version_sw.jshome_topnew+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_default_new2/v-'+version_sw.js_default_new2+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_etidentifierv/v-'+version_sw.js_etidentifierv+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_socialdatacapture_min/v-'+version_sw.js_socialdatacapture_min+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_slikeplayernew/v-'+version_sw.js_slikeplayernew+'.cms',
    'https://economictimes.indiatimes.com/js_typed/v-'+version_sw.js_typed+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_athena_distribution/v-'+version_sw.js_athena_distribution+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_push/v-'+version_sw.js_push+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_onboarding_popup_sh/v-'+version_sw.js_onboarding_popup_sh+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_devtool/v-'+version_sw.js_devtool+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_ashead/v-'+version_sw.js_ashead+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_adoverride/v-'+version_sw.js_adoverride+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_ettechpoll/v-'+version_sw.js_ettechpoll+',minify-3.cms',
    'https://economictimes.indiatimes.com/js_comments/v-'+version_sw.js_comments+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_wealthcommon/v-'+version_sw.js_wealthcommon+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_stocks_new/v-'+version_sw.js_stocks_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_marketstats/v-'+version_sw.js_marketstats+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_ifsccode/v-'+version_sw.js_ifsccode+',minify-1.cms',
    'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
    'https://www.googletagmanager.com/gtag/js?id=AW-1012951608',
    'https://www.googletagmanager.com/gtm.js?id=GTM-566NCXC',
    'https://www.google-analytics.com/analytics.js',
    'https://static.growthrx.in/js/v2/web-sdk.js',
    'https://sb.scorecardresearch.com/beacon.js',
    'https://tvid.in/sdk/etweb75sb26l69w5cyc21zpi8hbp6t.hls.spl.js',
    'https://www.google-analytics.com/gtm/js?id=GTM-WV452H7',
    'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
    'https://tvid.in/sdk/loader.js',
    'https://js-sec.indexww.com/ht/p/192622-140185687878244.js',
    'https://static.clmbtech.com/ad/commons/js/2308/colombia_v2.js',
    'https://static.growthrx.in/js/v2/web-sdk.js',
    'https://static.clmbtech.com/ase/2308/4/aa.js',
    'https://agi-static.indiatimes.com/cms-common/ibeat-habt.min.js',
    'https://adservice.google.com/adsid/integrator.js?domain=economictimes.indiatimes.com',
    'https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js',
    'https://player.avplayer.com/script/8.3/v/avcplayer.js',
    'https://cdn.mouseflow.com/projects/81baae85-f91c-464e-ac38-15a987752b7a.js',
    'https://platform.twitter.com/widgets.js',
    'https://connect.facebook.net/en_US/all.js',
    'https://s0.2mdn.net/instream/video/client.js',
    'https://api.growthrx.in/v2/user/project-gf999c70d/popup?type=desktop',
    'https://static.growthrx.in/js/v2/web-sdk.js',
    'https://static.criteo.net/js/ld/publishertag.js',
    'https://economictimes.indiatimes.com/js_feed/jsso_crosswalk_legacy_min.cms',
    'https://static.clmbtech.com/ad/commons/js/unified_colombia_video.js',
    'https://platform.instagram.com/en_US/embeds.js',
    'https://tpc.googlesyndication.com/sodar/sodar2.js',
    'https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.js',
    'https://static.clmbtech.com/ad/commons/js/ctndefault.js',
    'https://img.etimg.com/photo/msid-74451948,quality-100/et-logo.jpg',
    'https://economictimes.indiatimes.com/photo/90287383.cms',
    'https://img.etimg.com/photo/42031747.cms',
    'https://img.etimg.com/photo/msid-76930353,quality-100/et-prime-logo.jpg',
    'https://img.etimg.com/photo/89824128.cms',
    'https://img.etimg.com/photo/msid-97569360,quality-100/common-sprite.jpg',
    'https://img.etimg.com/photo/msid-76070229,quality-100/common-sprite.jpg',
    'https://img.etimg.com/photo/msid-73079160,quality-100/currency-converter.jpg',
    'https://img.etimg.com/photo/msid-76340129,quality-100/poll.jpg',
    'https://economictimes.indiatimes.com/photo/99580140.cms',
    'https://static.clmbtech.com/ad/commons/colombiaonline/newlogo/Colombia_Sponsored.png',
    'https://static.clmbtech.com/ad/commons/colombiaonline/newlogo/Colombia_favicon_12x12.png',
    'https://micro.rubiconproject.com/prebid/dynamic/4642.js',
    'https://c.go-mpulse.net/boomerang/KY9J6-H7E3C-JE2Z4-GP844-RCBW6',
    'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202304120101/pubads_impl.js',
    'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202307180101/pubads_impl.js',
    'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202307270101/pubads_impl.js',
    'https://static.growthrx.in/js/v2/web-sdk-main.js?v=3',
    'https://rtbcdn.andbeyond.media/prod-global-34387.js',
    'https://cdn.taboola.com/libtrc/timesinternetlimited-economictimes/loader.js'
];
const LOW_CACHE_FILES = [
    'https://economictimes.indiatimes.com/js_common_new/v-'+version_sw.js_common_new+',minify-1.cms',
    'https://economictimes.indiatimes.com/js_monetize/v-'+version_sw.js_monetize+',minify-1.cms'
   
];

addEventListener("fetch", function(event) {
    async function cachedFetch(e, CACHE_NAME) {
        var cachedResponse = await caches.match(e.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        var networkResponse = await fetch(e.request);
    
        // This clone() happens before `return networkResponse` 
        var clonedResponse = networkResponse.clone();
        
        e.waitUntil((async function() {
            const cache = await caches.open(CACHE_NAME);
            // This will be called after `return networkResponse`
            // so make sure you already have the clone!
            await cache.put(e.request, clonedResponse);
        })());
        return networkResponse;
    }
  
  if(LOW_CACHE_FILES.indexOf(event.request.url) > -1){
      event.respondWith(cachedFetch(event, LOW_CACHE_NAME));
  } else if(HIGH_CACHE_FILES.indexOf(event.request.url) > -1){
      event.respondWith(cachedFetch(event, HIGH_CACHE_NAME));
  }else{
      return;
  }
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        HIGH_CACHE_FILES.map(function(url,i) {
                            if (cacheName !== HIGH_CACHE_NAME) {
                                return caches.delete(cacheName);
                            }
                        });
                        LOW_CACHE_FILES.map(function(url,i) {
                            if (cacheName !== LOW_CACHE_NAME) {
                                return caches.delete(cacheName);
                            }
                        });
                    })
                );
            })
        ])
    );
});

    
    