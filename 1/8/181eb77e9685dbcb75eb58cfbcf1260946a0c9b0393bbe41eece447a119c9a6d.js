/* prebid.js v8.28.0 (aditude.io)
Modules: userId, 33acrossBidAdapter, adagioBidAdapter, aditude, adkernelBidAdapter, amxBidAdapter, appnexusBidAdapter, consentManagement, consentManagementUsp, enrichmentFpdModule, fabrickIdSystem, gdprEnforcement, gptPreAuction, gumgumBidAdapter, id5IdSystem, insticatorBidAdapter, kueezRtbBidAdapter, medianetBidAdapter, minutemediaBidAdapter, onetagBidAdapter, priceFloors, pubmaticBidAdapter, pulsepointBidAdapter, riseBidAdapter, rubiconBidAdapter, schain, sharethroughBidAdapter, smilewantedBidAdapter, sovrnBidAdapter, unifiedIdSystem, vidazooBidAdapter, yieldmoBidAdapter */
if (window.pbjs && window.pbjs.libLoaded) {
  console.error("PBJS: Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.");
} else {
  (function(){
    /* prebid-core.js  */
!);
/* creativeRender.js (dependency for prebid-core.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[38409],{17007:29819:]);
/* userId.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{82547:7563:26372:function(e,n,r){r.d(n,{DZ:function(){return a},Px:function(){return u},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return t},md:function(){return f}});var t=["request","imp","bidResponse","response"],o=["default","pbs"],i=t[0],a=t[1],u=t[2],c=t[3],s=o[0],f=o[1],l=new Set(t);var d,g=(d={},{registerOrtbProcessor:function(e){var n=e.type,r=e.name,o=e.fn,i=e.priority,a=void 0===i?0:i,u=e.dialects,c=void 0===u?[s]:u;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(t.join(", ")));c.forEach((function(e){d.hasOwnProperty(e)||(d[e]={}),d[e].hasOwnProperty(n)||(d[e][n]={}),d[e][n][r]={priority:a,fn:o}}))},getProcessors:function(e){return d[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){e.O(0,[38409],(function(){return n=82547,e(e.s=n);var n}));e.O()}]);
/* gptUtils.js (dependency for 33acrossBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[29703],{10075:]);
/* 33acrossBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[90373],{87157:,function(t){t.O(0,[29703,38409],(function(){return e=87157,t(t.s=e);var e}));t.O()}]);
/* adagioBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[68514],{53934:44611:94950:1582:,function(t){t.O(0,[29703,38409],(function(){return e=53934,t(t.s=e);var e}));t.O()}]);
/* aditude.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[46947],{81959:function(e,n,t){var u=t(78640),r=t(78653),i=t(18621),s=t(52021),c=(0,u.R)();s.clearEvents=s.clearEvents||function(){},c.getAuctionManager=function(){return r.K},c.getEventsManager=function(){return s},c.getTargetingManager=function(){return i.q0},c.getAllBidResponses=function(){return r.K.getBidsReceived()},c.getAllBidderRequests=function(){return r.K.getBidsRequested()},c.getAllBidRequests=function(){return r.K.getBidsRequested().map(().reduce((function(e,n){return e.concat(n)}),[])},(0,u.z)("aditude")}},function(e){e.O(0,[38409],(function(){return n=81959,e(e.s=n);var n}));e.O()}]);
/* sizeUtils.js (dependency for adkernelBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[14108],{56896:]);
/* adkernelBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[3601],{75559:,function(e){e.O(0,[14108,38409],(function(){return t=75559,e(e.s=t);var t}));e.O()}]);
/* amxBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[55301],{24041:,function(e){e.O(0,[38409],(function(){return n=24041,e(e.s=n);var n}));e.O()}]);
/* transformParamsUtils.js (dependency for appnexusBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[33402],{85370:]);
/* keywords.js (dependency for appnexusBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[93157],{20676:]);
/* appnexusUtils.js (dependency for appnexusBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[42277],{19050:27374:]);
/* chunk.js (dependency for appnexusBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[2284],{26296:]);
/* categoryTranslationMapping.js (dependency for appnexusBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[86190],{34292:]);
/* appnexusBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[83864],{46319:17673:,);
/* cmp.js (dependency for consentManagement.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[17968],{52712:]);
/* consentManagement.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:26372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return l}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],l=r[1],f=new Set(o);var d,p=(d={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!f.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(e)||(d[n][e]={}),d[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return d[n]||{}}}),g=p.registerOrtbProcessor,m=p.getProcessors}},function(n){n.O(0,[17968,38409],(function(){return e=55630,n(n.s=e);var e}));n.O()}]);
/* consentManagementUsp.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:,function(n){n.O(0,[17968,38409],(function(){return t=9099,n(n.s=t);var t}));n.O()}]);
/* enrichmentFpdModule.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[88806],{19749:,function(n){n.O(0,[38409],(function(){return u=19749,n(n.s=u);var u}));n.O()}]);
/* fabrickIdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[36294],{22980:,function(r){r.O(0,[38409],(function(){return n=22980,r(r.s=n);var n}));r.O()}]);
/* gdprEnforcement.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[87083],{31498:,function(n){n.O(0,[38409],(function(){return e=31498,n(n.s=e);var e}));n.O()}]);
/* gptPreAuction.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:,function(t){t.O(0,[38409],(function(){return o=96787,t(t.s=o);var o}));t.O()}]);
/* gumgumBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[30625],{85374:,function(e){e.O(0,[38409],(function(){return n=85374,e(e.s=n);var n}));e.O()}]);
/* id5IdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[61618],{10272:,function(e){e.O(0,[38409],(function(){return t=10272,e(e.s=t);var t}));e.O()}]);
/* insticatorBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[98353],{70057:function(e,r,t){var n=t(89062),i=t(4942),o=t(71002),a=t(78640),d=t(3193),s=t(24679),c=t(14699),u=t(20265),p=t(64358),f=t(15164),l=t(34614);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){d=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(d)throw o}}}}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var g="insticator",h="https://ex.ingage.tech/v1/openrtb",I="hb_insticator_uid",T=(0,f.df)({bidderCode:g});ction Z(e,r){var t,n,i,a,s,c,u={id:r.bidderRequestId,tmax:r.timeout,source:{fd:1,tid:null===(t=r.ortb2)||void 0===t||null===(n=t.source)||void 0===n?void 0:n.tid},site:{domain:r.refererInfo.domain,page:r.refererInfo.page,ref:r.refererInfo.ref},device:(i=r,a=(null==i?void 0:i.ortb2)||{},s=(null==a?void 0:a.device)||{},c={w:window.innerWidth,h:window.innerHeight,js:!0,ext:{localStorage:T.localStorageIsEnabled(),cookies:T.cookiesAreEnabled()}},"object"===(0,o.Z)(s)&&Object.assign(c,s),c),regs:O(r),user:j(e[0]),imp:e.map((function(e){return w(e)})),ext:{insticator:{adapter:{vendor:"prebid",prebid:"8.28.0"}}}},f=d.vc.getConfig("insticator.params");f&&(u.ext={insticator:b(b({},u.ext.insticator),f)});var l=e,r.bidderRequestId);l&&(u.source.ext={schain:l});var m=e);return m&&(u.user.ext={eids:m}),u}c.setDefaults({insticator:{endpointUrl:h,bidTTL:300}});var S={code:g,gvlid:910,supportedMediaTypes:[s.Mk,s.pX],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:;(0,c.dX)(S),(0,a.z)("insticatorBidAdapter")}},function(e){e.O(0,[38409],(function(){return r=70057,e(e.s=r);var r}));e.O()}]);
/* kueezRtbBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[25307],{24283:,function(e){e.O(0,[38409],(function(){return n=24283,e(e.s=n);var n}));e.O()}]);
/* medianetBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[93769],{896:,function(t){t.O(0,[29703,38409],(function(){return e=896,t(t.s=e);var e}));t.O()}]);
/* minutemediaBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[52037],{52506:,function(e){e.O(0,[38409],(function(){return r=52506,e(e.s=r);var r}));e.O()}]);
/* onetagBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[71532],{34851:,function(e){e.O(0,[38409],(function(){return t=34851,e(e.s=t);var t}));e.O()}]);
/* currencyUtils.js (dependency for priceFloors.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[77635],{99957:]);
/* priceFloors.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[29060],{9171:26372:function(e,o,r){r.d(o,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return l},Z:function(){return i},f8:function(){return p},fP:function(){return v},gm:function(){return n},md:function(){return d}});var n=["request","imp","bidResponse","response"],t=["default","pbs"],i=n[0],a=n[1],c=n[2],l=n[3],u=t[0],d=t[1],s=new Set(n);var f,m=(f={},{registerOrtbProcessor:function(e){var o=e.type,r=e.name,t=e.fn,i=e.priority,a=void 0===i?0:i,c=e.dialects,l=void 0===c?[u]:c;if(!s.has(o))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));l.forEach((function(e){f.hasOwnProperty(e)||(f[e]={}),f[e].hasOwnProperty(o)||(f[e][o]={}),f[e][o][r]={priority:a,fn:t}}))},getProcessors:function(e){return f[e]||{}}}),p=m.registerOrtbProcessor,v=m.getProcessors},44925:,function(e){e.O(0,[29703,77635,38409],(function(){return o=9171,e(e.s=o);var o}));e.O()}]);
/* pubmaticBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[55126],{15817:,function(e){e.O(0,[33402,38409],(function(){return r=15817,e(e.s=r);var r}));e.O()}]);
/* ortbConverter.js (dependency for pulsepointBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:61283:15840:]);
/* pulsepointBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[84979],{67211:26372:function(e,t,r){r.d(t,{DZ:function(){return a},Px:function(){return o},TP:function(){return c},YC:function(){return u},Z:function(){return i},f8:function(){return m},fP:function(){return l},gm:function(){return n},md:function(){return p}});var n=["request","imp","bidResponse","response"],s=["default","pbs"],i=n[0],a=n[1],o=n[2],u=n[3],c=s[0],p=s[1],d=new Set(n);var f,b=(f={},{registerOrtbProcessor:function(e){var t=e.type,r=e.name,s=e.fn,i=e.priority,a=void 0===i?0:i,o=e.dialects,u=void 0===o?[c]:o;if(!d.has(t))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));u.forEach((function(e){f.hasOwnProperty(e)||(f[e]={}),f[e].hasOwnProperty(t)||(f[e][t]={}),f[e][t][r]={priority:a,fn:s}}))},getProcessors:function(e){return f[e]||{}}}),m=b.registerOrtbProcessor,l=b.getProcessors}},);
/* riseBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[5901],{47602:,function(e){e.O(0,[38409],(function(){return r=47602,e(e.s=r);var r}));e.O()}]);
/* pbsExtensions.js (dependency for rubiconBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:11021:39702:]);
/* rubiconBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return v},fP:function(){return m},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),v=f.registerOrtbProcessor,m=f.getProcessors}},);
/* schain.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[39225],{28689:26372:,function(n){n.O(0,[38409],(function(){return i=28689,n(n.s=i);var i}));n.O()}]);
/* sharethroughBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[76312],{76349:,function(e){e.O(0,[38409],(function(){return r=76349,e(e.s=r);var r}));e.O()}]);
/* smilewantedBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[85889],{19518:,function(e){e.O(0,[38409],(function(){return r=19518,e(e.s=r);var r}));e.O()}]);
/* sovrnBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[37771],{30272:,function(r){r.O(0,[38409],(function(){return e=30272,r(r.s=e);var e}));r.O()}]);
/* unifiedIdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[34579],{98709:,function(r){r.O(0,[38409],(function(){return t=98709,r(r.s=t);var t}));r.O()}]);
/* vidazooBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[66635],{63273:,);
/* yieldmoBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[15337],{55511:,);

  })(); 
  (function(){
    try{
      if(!window.console) {return;}
      let style = "display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;";
      console.log("%cPrebid", style, "aditude.io build", {"includedModules":["prebid-core.js","creativeRender.js (dependency for prebid-core.js)","userId.js","gptUtils.js (dependency for 33acrossBidAdapter.js)","33acrossBidAdapter.js","adagioBidAdapter.js","aditude.js","sizeUtils.js (dependency for adkernelBidAdapter.js)","adkernelBidAdapter.js","amxBidAdapter.js","transformParamsUtils.js (dependency for appnexusBidAdapter.js)","keywords.js (dependency for appnexusBidAdapter.js)","appnexusUtils.js (dependency for appnexusBidAdapter.js)","chunk.js (dependency for appnexusBidAdapter.js)","categoryTranslationMapping.js (dependency for appnexusBidAdapter.js)","appnexusBidAdapter.js","cmp.js (dependency for consentManagement.js)","consentManagement.js","consentManagementUsp.js","enrichmentFpdModule.js","fabrickIdSystem.js","gdprEnforcement.js","gptPreAuction.js","gumgumBidAdapter.js","id5IdSystem.js","insticatorBidAdapter.js","kueezRtbBidAdapter.js","medianetBidAdapter.js","minutemediaBidAdapter.js","onetagBidAdapter.js","currencyUtils.js (dependency for priceFloors.js)","priceFloors.js","pubmaticBidAdapter.js","ortbConverter.js (dependency for pulsepointBidAdapter.js)","pulsepointBidAdapter.js","riseBidAdapter.js","pbsExtensions.js (dependency for rubiconBidAdapter.js)","rubiconBidAdapter.js","schain.js","sharethroughBidAdapter.js","smilewantedBidAdapter.js","sovrnBidAdapter.js","unifiedIdSystem.js","vidazooBidAdapter.js","yieldmoBidAdapter.js"]});
    }catch(e){/* ignore */}
  })();
  pbjs.processQueue();
}
