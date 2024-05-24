
///////////////////////////////////////////////////////////////////////////////
// INIT.JS
///////////////////////////////////////////////////////////////////////////////
window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(;

var hby = hby || {};
hby.que = hby.que || [];
hby.addUnitsAdded = false;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];



hby.que.push = 

for (var i = 0; i < hby.que.length; i++) {
    var que = hby.que[i];
    pbjs.que.push(que);
}

hby.addAdUnits = function (adUnits) {
    hby.log("hby.addAdUnits init.");
    pbjs.addAdUnits(adUnits);
    hby.addUnitsAdded = true;
    hby.log("hby.addAdUnits done.");
};

///////////////////////////////////////////////////////////////////////////////
// CONFIG.JS
///////////////////////////////////////////////////////////////////////////////
hby.config = hby.config || {};

hby.config.debug = false;

hby.config.timeout = /webOS|Mobile|iP(hone|od)|iPad|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? 1000 : 1000;
hby.config.failsafeTimeout = 1000;

hby.config.currency = {
    "adServerCurrency": "TRY",
    "conversionRateFile": "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",
    "defaultRates": { "TRY": { "USD": 0.0536457, "EUR": 0.0509292 } },
    "bidderCurrencyDefault": {
        "criteo": "TRY",
        "rtbhouse": "USD",
        "yandex" : "EUR",
        "smartytech" : "USD",
        "pixad" : "USD"
    },
};

hby.config.priceGranularity = {
    "buckets": [{
        "precision": 2,
        "min": 0,
        "max": 10,
        "increment": 0.01
    },
    {
        "precision": 2,
        "min": 10,
        "max": 50,
        "increment": 0.50
    },
    {
        "precision": 2,
        "min": 50,
        "max": 200,
        "increment": 1
    }]
};

hby.config.bidderSequenceType = "fixed";
hby.config.bidderSequence = "random";

hby.config.enableSendAllBids = true;

hby.config.criteo = {
    "fastBidVersion": "latest",
};



hby.config.userSync = {
	"filterSettings": {
      "iframe": {
        "bidders": ["criteo", "rtbhouse", "yandex", "smartytech", "pixad"],      // '*' represents all bidders
        "filter": "include"
      }
    },
    "userIds": [{
        "name": "sharedId",
        "storage": {
            "type": "cookie",
            "name": "_sharedid",
            "expires": 365
        }
    }]
};
///////////////////////////////////////////////////////////////////////////////
// CURRENCY.JS
///////////////////////////////////////////////////////////////////////////////
/*if (typeof _hbCurrencyRates != "undefined") {
    hby.config.currency.rates = _hbCurrencyRates;
    // var _hbCurrencyRates = { "TRY": { "USD": 0.063, "EUR": 0.059 } };
}
else {
    hby.config.currency.rates = { "TRY": { "USD": 0.0536457, "EUR": 0.0509292 } };
}*/

///////////////////////////////////////////////////////////////////////////////
// PREBID_FUNCTIONS.JS
///////////////////////////////////////////////////////////////////////////////
pbjs.que.push(function () {
	pbjs.bidderSettings = {
		"criteo" : {
			bidCpmAdjustment : function(bidCpm, bid){
			  // adjust the bid in real time before the auction takes place
			  console.log('Bidder is: ' + bid.bidderCode + " CPM:" + bidCpm + " KDV CPM:" + bidCpm * 1.18);
			  return bidCpm * 1.18;
			  }
			}
		};
    pbjs.setConfig(hby.config);
    hby.log("pbjs.setConfig set");
});

pbjs.que.push(function () {
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: hby.config.timeout
    });
    hby.log("pbjs.requestBids");
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
     googletag.cmd.push(function () {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh();
    });
    hby.log("initAdserver");
}

setTimeout(function() {
                initAdserver();
            }, hby.config.failsafeTimeout);

///////////////////////////////////////////////////////////////////////////////
// hby.JS
///////////////////////////////////////////////////////////////////////////////
hby.log = function (message) {
    if (hby.config.debug == true) {
        console.log('%carc.js', 'background:#222;color:#bada55;border-radius:4px;padding:3px;padding-left:4px;padding-right:4px;', message);
    }
}

hby.lazyLoad = function (adSlot) {
    hby.log("hby.lazyLoad init.");

    hby.que.push(function () {
        pbjs.requestBids({
            timeout: 1000,
            adUnitCodes: [adSlot.getAdUnitPath()],
            bidsBackHandler: function () {
                hby.setTargetingForGPTAsync([adSlot.getAdUnitPath()]);
                window.googletag.pubads().refresh([adSlot]);
            }
        });
    });

    hby.log("hby.lazyLoad done.");
}

hby.setTargetingForGPTAsync = function (adUnit) {
    hby.log("hby.setTargetingForGPTAsync init.");
    pbjs.setTargetingForGPTAsync(adUnit);
    hby.log("hby.setTargetingForGPTAsync done.");
};


/* prebid.js v8.23.0
Updated: 2023-11-13
Modules: fpdModule, userId, criteoBidAdapter, admaticBidAdapter, rtbhouseBidAdapter, smartytechBidAdapter, yandexBidAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, gdprEnforcement, gppControl_usnat, gppControl_usstates, gptPreAuction, currency, validationFpdModule, sharedIdSystem */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
    !);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[17968],{52712:]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[35051],{77337:]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[2355],{95590:]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[57748],{81694:]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[96204],{56047:function(e,a,r){var i=r(78640),t=r(64358),n=r(20265),d=r(14699),s=r(3193),o=r(24679),p={IMAGE_TYPE:{ICON:1,MAIN:3},ASSET_ID:{TITLE:1,IMAGE:2,ICON:3,BODY:4,SPONSORED:5,CTA:6},DATA_ASSET_TYPE:{SPONSORED:1,DESC:2,CTA_TEXT:12}},u="",c={code:"admatic",aliases:[{code:"pixad"}],supportedMediaTypes:[o.Mk,o.pX,o.B5],isBidRequestValid:buildRequests:function(e,a){var r=e.map(y),i=a.ortb2,n=(0,t.getValue)(e[0].params,"networkId"),d=(0,t.getValue)(e[0].params,"host"),o=s.vc.getConfig("currency.adServerCurrency")||"TRY",p=e[0].bidder,c={user:{ua:navigator.userAgent},blacklist:[],site:{page:a.refererInfo.page,ref:a.refererInfo.page,publisher:{name:a.refererInfo.domain,publisherId:n}},imp:r,ext:{cur:o,bidder:p}};if((0,t.isEmpty)(i.badv)||(c.blacklist=i.badv),c){if("pixad"===p)u="https://static.pixad.com.tr/sync.html";else u="https://cdn.serve.admatic.com.tr/showad/sync.html";return{method:"POST",url:"https://".concat(d,"/pb"),data:c,options:{contentType:"application/json"}}}},getUserSyncs:interpretResponse:function(e,a){var r=e.body,i=[];return r&&null!=r&&r.data&&(0,t.isArray)(r.data)&&r.data.forEach((function(e){var a,t,n,d={requestId:e.id,cpm:e.price,width:e.width,height:e.height,currency:r.cur||"TRY",netRevenue:!0,creativeId:e.creative_id,meta:{model:e.mime_type,advertiserDomains:e&&e.adomain?e.adomain:[]},bidder:e.bidder,mediaType:e.type,ttl:60};"video"===d.mediaType&&e.party_tag)?(d.vastUrl=e.party_tag,d.vastImpUrl=e.iurl):"video"===d.mediaType?(d.vastXml=e.party_tag,d.vastImpUrl=e.iurl):"banner"===d.mediaType?d.ad=e.party_tag:"native"===d.mediaType&&(d.native=(a=e.party_tag,t=JSON.parse(a).native,n={clickUrl:encodeURI(t.link.url),impressionTrackers:t.imptrackers},t.assets.forEach((),n)),i.push(d)})),i}};function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return null==e?[]:Array.isArray(e[0])?e.map((function(e){return a(e)})):[a(e)]}function m(e){return e[0]+"x"+e[1]}function y(e){var a,r,i,d={};return d.size=function(e){return function(e){var a=(0,n.Z)(e,"mediaTypes.video.playerSize"),r=(0,n.Z)(e,"mediaTypes.video.sizes"),i=(0,n.Z)(e,"mediaTypes.native.sizes"),d=(0,n.Z)(e,"mediaTypes.banner.sizes");if((0,t.isArray)(d)||(0,t.isArray)(a)||(0,t.isArray)(r)){return[d,r,i,a].reduce((,[])}}(e)}(e),null!==(a=e.mediaTypes)&&void 0!==a&&a.banner&&(d.type="banner",d.mediatype={}),null!==(r=e.mediaTypes)&&void 0!==r&&r.video&&(d.type="video",d.mediatype=e.mediaTypes.video),null!==(i=e.mediaTypes)&&void 0!==i&&i.native&&(d.type="native",d.size=[{w:1,h:1}],d.mediatype=e.mediaTypes.native),(0,n.Z)(e,"ortb2Imp.ext")&&(d.ext=e.ortb2Imp.ext),d.id=(0,t.getBidIdParameter)("bidId",e),function(e,a){try{var r,i,d,s={};if(a.getFloor)null!==(r=a.mediaTypes)&&void 0!==r&&r.banner&&(s.banner={},l((0,n.Z)(a,"mediaTypes.banner.sizes")).forEach((function(e){return s.banner[m(e).toString()]=a.getFloor({size:e,mediaType:o.Mk})}))),null!==(i=a.mediaTypes)&&void 0!==i&&i.video&&(s.video={},l((0,n.Z)(a,"mediaTypes.video.playerSize")).forEach(()),null!==(d=a.mediaTypes)&&void 0!==d&&d.native&&(s.native={},s.native["*"]=a.getFloor({size:"*",mediaType:o.B5})),Object.keys(s).length>0&&(e||(e={}),Object.assign(e,{floors:s}))}catch(e){(0,t.logError)("Could not parse floors from Prebid: "+e)}}(d,e),d}(0,d.dX)(c),(0,i.z)("admaticBidAdapter")}},);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:26372:,function(n){n.O(0,[17968],(function(){return e=55630,n(n.s=e);var e}));n.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[69168],{30277:,function(n){n.O(0,[17968],(function(){return t=30277,n(n.s=t);var t}));n.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:,);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[6406],{60241:17673:44611:94950:1582:,function(e){var t;t=60241,e(e.s=t)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[99226],{72663:26372:function(r,e,n){n.d(e,{DZ:function(){return i},Px:function(){return s},TP:function(){return a},YC:function(){return u},Z:function(){return t},f8:function(){return y},fP:function(){return g},gm:function(){return o},md:function(){return f}});var o=["request","imp","bidResponse","response"],c=["default","pbs"],t=o[0],i=o[1],s=o[2],u=o[3],a=c[0],f=c[1],l=new Set(o);var d,v=(d={},{registerOrtbProcessor:function(r){var e=r.type,n=r.name,c=r.fn,t=r.priority,i=void 0===t?0:t,s=r.dialects,u=void 0===s?[a]:s;if(!l.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));u.forEach((function(r){d.hasOwnProperty(r)||(d[r]={}),d[r].hasOwnProperty(e)||(d[r][e]={}),d[r][e][n]={priority:i,fn:c}}))},getProcessors:function(r){return d[r]||{}}}),y=v.registerOrtbProcessor,g=v.getProcessors}},function(r){var e;e=72663,r(r.s=e)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[88806],{19749:,function(n){var s;s=19749,n(n.s=s)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[7910],{63410:,function(r){var n;n=63410,r(r.s=n)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[87083],{31498:,function(n){var e;e=31498,n(n.s=e)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[48958],{12670:,function(n){n.O(0,[35051],(function(){return t=12670,n(n.s=t);var t}));n.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[35093],{76875:,function(n){n.O(0,[35051],(function(){return t=76875,n(n.s=t);var t}));n.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:,function(t){var o;o=96787,t(t.s=o)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[98773],{10067:,function(e){e.O(0,[2355],(function(){return r=10067,e(e.s=r);var r}));e.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[92972],{54834:,function(o){o.O(0,[57748],(function(){return e=54834,o(o.s=e);var e}));o.O()}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[85016],{48171:function(e,n,r){var d=r(78640),i=r(20265),t=r(64358),a=r(24679),o=r(14699),s={supportedMediaTypes:[a.Mk,a.pX],code:"smartytech",isBidRequestValid:_validateBanner:_validateVideo:buildRequests:function(e,n){var r,d=(null==n||null===(r=n.refererInfo)||void 0===r?void 0:r.page)||window.location.href,a=e.map((function(e){var n=(0,i.Z)(e,"mediaTypes.video",!1),r=(0,i.Z)(e,"mediaTypes.banner",!1),t=e.params.sizes,a={endpointId:e.params.endpointId,adUnitCode:e.adUnitCode,referer:d,bidId:e.bidId};return n?(a.video=n,t&&(a.video.sizes=t)):r&&(a.banner=r,t&&(a.banner.sizes=t)),a}));return{method:"POST",url:(0,t.buildUrl)({protocol:"https",hostname:"server.smartytech.io",pathname:"/hb/v2/bidder"}),data:a}},interpretResponse:_adResponse:function(e,n){var r={requestId:e.bidId,adUnitCode:e.adUnitCode,ad:n.ad,cpm:n.cpm,width:n.width,height:n.height,ttl:60,creativeId:n.creativeId,netRevenue:!0,currency:n.currency,mediaType:a.Mk};return n.mediaType===a.pX&&(r.vastXml=n.ad,r.mediaType=a.pX),r}};(0,o.dX)(s),(0,d.z)("smartytechBidAdapter")}},function(e){var n;n=48171,e(e.s=n)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{82547:7563:26372:function(e,n,r){r.d(n,{DZ:function(){return a},Px:function(){return u},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return t},md:function(){return f}});var t=["request","imp","bidResponse","response"],o=["default","pbs"],i=t[0],a=t[1],u=t[2],c=t[3],s=o[0],f=o[1],l=new Set(t);var d,g=(d={},{registerOrtbProcessor:function(e){var n=e.type,r=e.name,o=e.fn,i=e.priority,a=void 0===i?0:i,u=e.dialects,c=void 0===u?[s]:u;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(t.join(", ")));c.forEach((function(e){d.hasOwnProperty(e)||(d[e]={}),d[e].hasOwnProperty(n)||(d[e][n]={}),d[e][n][r]={priority:a,fn:o}}))},getProcessors:function(e){return d[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){var n;n=82547,e(e.s=n)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[19162],{20741:,function(e){var r;r=20741,e(e.s=r)}]);
    (self.pbjsChunk=self.pbjsChunk||[]).push([[92238],{71374:,function(e){var r;r=71374,e(e.s=r)}]);
    })(),pbjs.processQueue();