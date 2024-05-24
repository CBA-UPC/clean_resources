/* jshint ignore:start */
/* prebid.js v7.54.5
Updated: 2023-11-21
Modules: userId, appnexusBidAdapter, criteoBidAdapter, medianetBidAdapter, rubiconBidAdapter, seedtagBidAdapter, smartadserverBidAdapter, yandexBidAdapter, atsAnalyticsAdapter, googleAnalyticsAdapter, gptPreAuction, adpod, schain, dfpAdServerVideo, criteoIdSystem, pairIdSystem, identityLinkIdSystem */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!);
(self.pbjsChunk=self.pbjsChunk||[]).push([[14861],{64563:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:61283:15840:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:11021:39702:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[4871],{28979:,function(e){var i;i=28979,e(e.s=i)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[83864],{46319:17673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(20265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},);
(self.pbjsChunk=self.pbjsChunk||[]).push([[62944],{45813:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[6406],{60241:17673:44611:94950:1582:,function(t){var e;e=60241,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[79073],{7713:,function(e){var n;n=7713,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[36656],{43642:54284:7563:function(e,r,n){n.d(r,{G:function(){return a}});var a=(0,n(92797).z3)("sync",(function(){}))}},function(e){var r;r=43642,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[27690],{4311:,function(e){var o;o=4311,e(e.s=o)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:,function(t){var e;e=96787,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[79114],{45407:,function(e){var t;t=45407,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[93769],{896:,function(t){var e;e=896,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[31249],{4972:function(r,a,e){var o=e(78640),n=e(92797),t=e(15164),i=e(64358),l=e(9633),d="pairId",u="pairId",c=(0,t.df)({moduleType:l.y2,moduleName:d});function f(r){return c.localStorageIsEnabled()?c.getDataFromLocalStorage(r):null}ar s={name:d,gvlid:755,decode:getId:;(0,n.Bx)("userId",s),(0,o.z)("pairIdSystem")}},function(r){var a;a=4972,r(r.s=a)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return m},fP:function(){return g},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),m=f.registerOrtbProcessor,g=f.getProcessors}},);
(self.pbjsChunk=self.pbjsChunk||[]).push([[39225],{28689:26372:function(n,i,e){e.d(i,{DZ:function(){return c},Px:function(){return s},TP:function(){return f},YC:function(){return a},Z:function(){return r},f8:function(){return l},fP:function(){return b},gm:function(){return o},md:function(){return u}});var o=["request","imp","bidResponse","response"],t=["default","pbs"],r=o[0],c=o[1],s=o[2],a=o[3],f=t[0],u=t[1],h=new Set(o);var d,g=(d={},{registerOrtbProcessor:function(n){var i=n.type,e=n.name,t=n.fn,r=n.priority,c=void 0===r?0:r,s=n.dialects,a=void 0===s?[f]:s;if(!h.has(i))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));a.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(i)||(d[n][i]={}),d[n][i][e]={priority:c,fn:t}}))},getProcessors:function(n){return d[n]||{}}}),l=g.registerOrtbProcessor,b=g.getProcessors}},function(n){var i;i=28689,n(n.s=i)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[33238],{93444:,function(e){var n;n=93444,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[31215],{13522:,function(e){var r;r=13522,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{82547:7563:26372:17673:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(20265);function o(e){return null==e||!e.gdprApplies||!0===(0,r.Z)(e,"vendorData.purpose.consents.1")}}},function(e){var n;n=82547,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[92238],{71374:,function(e){var r;r=71374,e(e.s=r)}]);
})(),pbjs.processQueue();
/* jshint ignore:end */
/* build date: 2023-11-23T20:46:36.790Z */