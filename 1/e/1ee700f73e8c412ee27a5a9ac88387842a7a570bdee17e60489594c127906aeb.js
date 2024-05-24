/* prebid.js v8.30.0
Updated: 2024-01-05
Modules: fpdModule, adpod, userId, appnexusBidAdapter, criteoBidAdapter, ixBidAdapter, minutemediaBidAdapter, openxBidAdapter, pubmaticBidAdapter, rubiconBidAdapter, sovrnBidAdapter, tripleliftBidAdapter, consentManagement, consentManagementUsp, enrichmentFpdModule, gptPreAuction, schain, topicsFpdModule, dfpAdServerVideo, criteoIdSystem, id5IdSystem, liveIntentIdSystem, quantcastIdSystem, identityLinkIdSystem */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!);
(self.pbjsChunk=self.pbjsChunk||[]).push([[38409],{17007:29819:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[33402],{85370:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[93157],{20676:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[42277],{19050:27374:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[2284],{26296:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[86190],{34292:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[17968],{52712:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[29703],{10075:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[67292],{21138:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:61283:15840:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:11021:39702:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[54213],{29865:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[4871],{28979:,function(e){e.O(0,[38409],(function(){return i=28979,e(e.s=i);var i}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[83864],{46319:17673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(20265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},);
(self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:26372:,function(n){n.O(0,[17968,38409],(function(){return e=55630,n(n.s=e);var e}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[6406],{60241:17673:44611:94950:1582:,function(e){e.O(0,[38409],(function(){return t=60241,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[79073],{7713:,function(e){e.O(0,[38409],(function(){return o=7713,e(e.s=o);var o}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[36656],{43642:54284:7563:,function(e){e.O(0,[38409],(function(){return r=43642,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[88806],{19749:,function(n){n.O(0,[38409],(function(){return u=19749,n(n.s=u);var u}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7910],{63410:,function(r){r.O(0,[38409],(function(){return n=63410,r(r.s=n);var n}));r.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:,function(t){t.O(0,[38409],(function(){return o=96787,t(t.s=o);var o}));t.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[61618],{10272:,function(e){e.O(0,[38409],(function(){return t=10272,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[79114],{45407:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[40155],{33390:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[93390],{88360:76886:}},831f},516o},650e}},function(e){e.O(0,[67292,38409],(function(){return t=88360,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[52037],{525)}},function(e){e.O(0,[38409],(function(){return r=52506,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[8534],{478)},26372:function(e,t,r){r.d(t,{DZ:function(){return i},Px:function(){return s},TP:function(){return u},YC:function(){return p},Z:function(){return a},f8:function(){return b},fP:function(){return l},gm:function(){return n},md:function(){return c}});var n=["request","imp","bidResponse","response"],o=["default","pbs"],a=n[0],i=n[1],s=n[2],p=n[3],u=o[0],c=o[1],d=new Set(n);var f,m=(f={},{registerOrtbProcessor:function(e){var t=e.type,r=e.name,o=e.fn,a=e.priority,i=void 0===a?0:a,s=e.dialects,p=void 0===s?[u]:s;if(!d.has(t))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));p.forEach((function(e){f.hasOwnProperty(e)||(f[e]={}),f[e].hasOwnProperty(t)||(f[e][t]={}),f[e][t][r]={priority:i,fn:o}}))},getProcessors:function(e){return f[e]||{}}}),b=m.registerOrtbProcessor,l=m.getProcessors}},function(e){e.O(0,[85279,33402,38409],(function(){return t=47851,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[55126],{158)}},function(e){e.O(0,[33402,38409],(function(){return r=15817,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[44967],{297)}},function(e){e.O(0,[38409],(function(){return t=29747,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{400)},26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return v},fP:function(){return m},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),v=f.registerOrtbProcessor,m=f.getProcessors)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[39225],{286)},26372:function(n,i,e){e.d(i,{DZ:function(){return c},Px:function(){return s},TP:function(){return f},YC:function(){return a},Z:function(){return t},f8:function(){return l},fP:function(){return p},gm:function(){return o},md:function(){return u}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],t=o[0],c=o[1],s=o[2],a=o[3],f=r[0],u=r[1],h=new Set(o);var d,g=(d={},{registerOrtbProcessor:function(n){var i=n.type,e=n.name,r=n.fn,t=n.priority,c=void 0===t?0:t,s=n.dialects,a=void 0===s?[f]:s;if(!h.has(i))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));a.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(i)||(d[n][i]={}),d[n][i][e]={priority:c,fn:r}}))},getProcessors:function(n){return d[n]||{}}}),l=g.registerOrtbProcessor,p=g.getProcessors}},function(n){n.O(0,[38409],(function(){return i=28689,n(n.s=i);var i}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[37771],{302)}},function(r){r.O(0,[38409],(function(){return e=30272,r(r.s=e);var e}));r.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[3161],{386)}},function(e){e.O(0,[38409],(function(){return t=38622,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[82599],{707)}},function(e){e.O(0,[54213,38409],(function(){return t=70789,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{825)},7563:function(e,n,r){r.d(n,{G:function(){return t}});var t=(0,r(92797).z3)("sync",(function(){}))},26372:function(e,n,r){r.d(n,{DZ:function(){return a},Px:function(){return u},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return t},md:function(){return f}});var t=["request","imp","bidResponse","response"],o=["default","pbs"],i=t[0],a=t[1],u=t[2],c=t[3],s=o[0],f=o[1],l=new Set(t);var d,g=(d={},{registerOrtbProcessor:function(e){var n=e.type,r=e.name,o=e.fn,i=e.priority,a=void 0===i?0:i,u=e.dialects,c=void 0===u?[s]:u;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(t.join(", ")));c.forEach((function(e){d.hasOwnProperty(e)||(d[e]={}),d[e].hasOwnProperty(n)||(d[e][n]={}),d[e][n][r]={priority:a,fn:o}}))},getProcessors:function(e){return d[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){e.O(0,[38409],(function(){return n=82547,e(e.s=n);var n}));e.O()}]);
})(),pbjs.processQueue();

if(!window.__iasPET){window.__iasPET={}; } if (typeof window.__iasPET.queue === 'undefined') { window.__iasPET.queue=[]; } window.__iasPET.pubId='7529';)}([function(e,t))}]);

/*! @amzn/apswebapstaglibrary - web-client-bundle - v23.1211.1645 - 2023-12-11 16:45:49 *ror(t)}}();
/*! @amzn/apswebapstaglibrary - apstag-legacy_eu - 23.1211.ns=n(16)}]);

