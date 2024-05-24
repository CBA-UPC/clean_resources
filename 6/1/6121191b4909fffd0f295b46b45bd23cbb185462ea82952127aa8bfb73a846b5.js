/* prebid.js v8.28.0 (aditude.io)
Modules: fpdModule, userId, aditude, appnexusBidAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, fabrickIdSystem, gdprEnforcement, id5IdSystem, ixBidAdapter, priceFloors, pubmaticBidAdapter, rubiconBidAdapter, sharedIdSystem, sovrnBidAdapter, undertoneBidAdapter, unrulyBidAdapter, validationFpdModule, vidazooBidAdapter */
if (window.pbjs && window.pbjs.libLoaded) {
  console.error("PBJS: Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.");
} else {
  (function(){
    /* prebid-core.js  */
!);
/* creativeRender.js (dependency for prebid-core.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[38409],{17007:29819:]);
/* fpdModule.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[7910],{63410:,function(r){r.O(0,[38409],(function(){return n=63410,r(r.s=n);var n}));r.O()}]);
/* userId.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{82547:7563:26372:function(e,n,r){r.d(n,{DZ:function(){return a},Px:function(){return u},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return t},md:function(){return f}});var t=["request","imp","bidResponse","response"],o=["default","pbs"],i=t[0],a=t[1],u=t[2],c=t[3],s=o[0],f=o[1],l=new Set(t);var d,g=(d={},{registerOrtbProcessor:function(e){var n=e.type,r=e.name,o=e.fn,i=e.priority,a=void 0===i?0:i,u=e.dialects,c=void 0===u?[s]:u;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(t.join(", ")));c.forEach((function(e){d.hasOwnProperty(e)||(d[e]={}),d[e].hasOwnProperty(n)||(d[e][n]={}),d[e][n][r]={priority:a,fn:o}}))},getProcessors:function(e){return d[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){e.O(0,[38409],(function(){return n=82547,e(e.s=n);var n}));e.O()}]);
/* aditude.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[46947],{81959:function(e,n,t){var u=t(78640),r=t(78653),i=t(18621),s=t(52021),c=(0,u.R)();s.clearEvents=s.clearEvents||function(){},c.getAuctionManager=function(){return r.K},c.getEventsManager=function(){return s},c.getTargetingManager=c.getAllBidResponses=function(){return r.K.getBidsReceived()},c.getAllBidderRequests=function(){return r.K.getBidsRequested()},c.getAllBidRequests=function(){return r.K.getBidsRequested().map(().reduce((,[])},(0,u.z)("aditude")}},function(e){e.O(0,[38409],(function(){return n=81959,e(e.s=n);var n}));e.O()}]);
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
/* consentManagementGpp.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[69168],{30277:,function(n){n.O(0,[17968,38409],(function(){return t=30277,n(n.s=t);var t}));n.O()}]);
/* consentManagementUsp.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:,function(n){n.O(0,[17968,38409],(function(){return t=9099,n(n.s=t);var t}));n.O()}]);
/* enrichmentFpdModule.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[88806],{19749:,function(n){n.O(0,[38409],(function(){return u=19749,n(n.s=u);var u}));n.O()}]);
/* fabrickIdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[36294],{22980:,function(r){r.O(0,[38409],(function(){return n=22980,r(r.s=n);var n}));r.O()}]);
/* gdprEnforcement.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[87083],{31498:,function(n){n.O(0,[38409],(function(){return e=31498,n(n.s=e);var e}));n.O()}]);
/* id5IdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[61618],{10272:,);
/* gptUtils.js (dependency for ixBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[29703],{10075:]);
/* ixBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[40155],{33390:,function(e){e.O(0,[33402,29703,38409],(function(){return t=33390,e(e.s=t);var t}));e.O()}]);
/* currencyUtils.js (dependency for priceFloors.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[77635],{99957:]);
/* priceFloors.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[29060],{9171:26372:44925:,);
/* pubmaticBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[55126],{15817:,);
/* ortbConverter.js (dependency for rubiconBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:61283:15840:]);
/* pbsExtensions.js (dependency for rubiconBidAdapter.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:11021:39702:]);
/* rubiconBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return v},fP:function(){return m},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),v=f.registerOrtbProcessor,m=f.getProcessors}},);
/* domainOverrideToRootDomain.js (dependency for sharedIdSystem.js) */
(self.pbjsChunk=self.pbjsChunk||[]).push([[57748],{81694:]);
/* sharedIdSystem.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[92972],{54834:,function(o){o.O(0,[57748,38409],(function(){return e=54834,o(o.s=e);var e}));o.O()}]);
/* sovrnBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[37771],{30272:,function(r){r.O(0,[38409],(function(){return e=30272,r(r.s=e);var e}));r.O()}]);
/* undertoneBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[58694],{88903:,function(e){e.O(0,[38409],(function(){return n=88903,e(e.s=n);var n}));e.O()}]);
/* unrulyBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[69039],{83806:44925:function(e,r,n){function t(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(r,{Z:function(){return t}})}},function(e){e.O(0,[38409],(function(){return r=83806,e(e.s=r);var r}));e.O()}]);
/* validationFpdModule.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[19162],{20741:,function(e){e.O(0,[38409],(function(){return r=20741,e(e.s=r);var r}));e.O()}]);
/* vidazooBidAdapter.js  */
(self.pbjsChunk=self.pbjsChunk||[]).push([[66635],{63273:,function(e){e.O(0,[2284,38409],(function(){return t=63273,e(e.s=t);var t}));e.O()}]);

  })(); 
  (function(){
    try{
      if(!window.console) {return;}
      let style = "display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;";
      console.log("%cPrebid", style, "aditude.io build", {"includedModules":["prebid-core.js","creativeRender.js (dependency for prebid-core.js)","fpdModule.js","userId.js","aditude.js","transformParamsUtils.js (dependency for appnexusBidAdapter.js)","keywords.js (dependency for appnexusBidAdapter.js)","appnexusUtils.js (dependency for appnexusBidAdapter.js)","chunk.js (dependency for appnexusBidAdapter.js)","categoryTranslationMapping.js (dependency for appnexusBidAdapter.js)","appnexusBidAdapter.js","cmp.js (dependency for consentManagement.js)","consentManagement.js","consentManagementGpp.js","consentManagementUsp.js","enrichmentFpdModule.js","fabrickIdSystem.js","gdprEnforcement.js","id5IdSystem.js","gptUtils.js (dependency for ixBidAdapter.js)","ixBidAdapter.js","currencyUtils.js (dependency for priceFloors.js)","priceFloors.js","pubmaticBidAdapter.js","ortbConverter.js (dependency for rubiconBidAdapter.js)","pbsExtensions.js (dependency for rubiconBidAdapter.js)","rubiconBidAdapter.js","domainOverrideToRootDomain.js (dependency for sharedIdSystem.js)","sharedIdSystem.js","sovrnBidAdapter.js","undertoneBidAdapter.js","unrulyBidAdapter.js","validationFpdModule.js","vidazooBidAdapter.js"]});
    }catch(e){/* ignore */}
  })();
  pbjs.processQueue();
}
