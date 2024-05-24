/* prebid.js v8.25.0
Updated: 2023-11-28
Modules: userId, appnexusBidAdapter, rubiconBidAdapter, smartadserverBidAdapter, consentManagement, criteoBidAdapter, richaudienceBidAdapter, zeotapIdPlusIdSystem, priceFloors, teadsBidAdapter, pubmaticBidAdapter */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!function(){var n,e={5706:4947:286:9633:function(n,e,t){t.d(e,{UL:function(){return i},_U:function(){return a},wu:function(){return r},y2:function(){return o}});var r="prebid",i="bidder",o="userId",a="analytics"},6310:571:3667:875:8177:5339:5730:8928:5383:function(n,e,t){t.d(e,{K:function(){return sn}});var r=t(3324),i=t(9062),o=t(4358),a=t(1002),u=t(265),c=t(6463),s=t(59),d=t(8928),f=t(3193); p=t(5706),h=t(1974),y=t(2797),m=t(4614),b=t(154),w=t(4679),A=t(5975),C=t(2021),T=t(8177),k=t(5644),O=t(8792),E=t(9128),j=t(6066),I=t(8640),B=h.k_.syncUsers,S="completed";C.on(k.FP.BID_ADJUSTMENT,();var U={},R={},P=[],q=(0,I.R)();ar Z=(0,y.z3)("sync",(,"addBidResponse"),N=(0,y.z3)("sync",(function(n){return n}),"responsesReady"),D=(0,y.z3)("sync",(,"addBidderRequests"),_=(0,y.z3)("async",(,"bidsBackCallback");r F,W,z=L=f.vc.getConfig("cache",();var K=),G=(0,y.z3)("async",(,"callPrebidCache"); Y=n=t(613),on=t(8833);function an(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return un(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return un(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function un(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var cn="minBidCacheTTL";var sn=)},8833:5975:9626:3193:2513:6463:2021:4078:3790:8196:2797:4679:59:4614:9243:8640:5102:5164:1974:4358:function(n,e,t){t.d(e,{$8:function(){return sn},AB:function(){return kn},An:function(){return U},D9:function(){return Jn},DO:function(){return S},EE:function(){return E},Ee:function(){return Ln},FS:H:function(){return W},HC:function(){return _n},HP:function(){return Gn},I8:function(){return wn},IG:function(){return jn},LQ:function(){return V},NA:function(){return pn},No:function(){return Tn},Ob:function(){return P},PN:function(){return M},PO:function(){return X},Q2:function(){return Wn},R_:function(){return cn},Re:function(){return R},S0:function(){return Rn},SG:function(){return fn},T9:function(){return yn},TV:function(){return bn},U:function(){return Nn},Uv:function(){return qn},Vs:function(){return dn},X4:function(){return mn},Yp:function(){return Mn},Zy:function(){return N},_R:function(){return Kn},_d:function(){return B},ak:function(){return G},bd:function(){return On},d8:function(){return Q},e7:function(){return D},eB:function(){return K},ei:function(){return Dn},en:function(){return Fn},fr:function(){return Cn},hj:function(){return $},hq:function(){return un},iG:function(){return Sn},jC:function(){return on},jH:function(){return tn},ji:function(){return H},jn:function(){return nn},kJ:function(){return Y},oV:function(){return Pn},or:function(){return Zn},pP:function(){return hn},qp:function(){return z},ry:function(){return Vn},s:function(){return x},sF:function(){return q},tT:function(){return ln},u2:function(){return C},vM:function(){return Bn},vZ:function(){return zn},wn:function(){return En},xH:function(){return gn},xb:function(){return en},yL:function(){return An},yN:function(){return F},yi:function(){return rn},yx:function(){return In},zE:function(){return vn},zV:function(){return xn}});var r,i=t(9062),o=t(4942),a=t(3324),u=t(1002),c=t(3193),s=t(7079),d=t.n(s),f=t(4614),l=t(5644),g=t(8792),v=t(8640),p=Object.prototype.toString,h=Boolean(window.console),y=Boolean(h&&window.console.log),m=Boolean(h&&window.console.info),b=Boolean(h&&window.console.warn),w=Boolean(h&&window.console.error),A=(0,v.R)();r k={checkCookieSupport:jn,createTrackPixelIframeHtml:getWindowSelf:D,getWindowTop:N,getWindowLocation:_,insertUserSyncIframe:dn,insertElement:on,isFn:V,triggerPixel:un,logError:W,logWarn:F,logMessage:H,logInfo:M,parseQS:Hn,formatQS:Mn,deepEqual:zn},O={};function E(){return O}var j,I=(j=0,; N(){return window.top}function D(){return window.self}unction H(){K()&&y&&console.log.apply(console,L(arguments,"MESSAGE:"))}unction F(){K()&&b&&console.warn.apply(console,L(arguments,"WARNING:")),T(l.FP.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}ction K(){return!!c.vc.getConfig("debug")}nction V(n){return J(n,"Function")}function Q(n){return J(n,"String")}var Y=Array.isArray.bind(Array);function $(n){return J(n,"Number")}function X(n){return J(n,"Object")}(Number);8792:613:154:265:1432:7079:907:3878:5057:6983:6011:5671:1519:8916:2793:3144:4942:9199:1902:5267:function(n,e,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(e,{Z:function(){return r}})},2786:3324:9062:1002:181:6475:5644:,t={};.m=e,n=[],r.O=r.n=r.d=r.o=);var i=r.O(void 0,[409],();i=r.O(i)}();
(self.pbjsChunk=self.pbjsChunk||[]).push([[409],{7007:9819:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[157],{676:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[402],{5370:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[277],{9050:7374:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[284],{6296:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[190],{4292:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[968],{2712:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[703],{75:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[635],{9957:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[279],{4980:1283:5840:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[951],{8214:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[864],{6319:7673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},);
(self.pbjsChunk=self.pbjsChunk||[]).push([[266],{5630:6372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return d}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],d=r[1],l=new Set(o);var p,f=(p={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!l.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){p.hasOwnProperty(n)||(p[n]={}),p[n].hasOwnProperty(e)||(p[n][e]={}),p[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return p[n]||{}}}),g=f.registerOrtbProcessor,m=f.getProcessors}},function(n){n.O(0,[968,409],(function(){return e=5630,n(n.s=e);var e}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[406],{241:7673:4611:4950:1582:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[60],{6823:6372:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[126],{5817:,function(e){e.O(0,[402,409],(function(){return t=5817,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[618],{9917:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[187],{60:6372:function(e,t,r){r.d(t,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return v},fP:function(){return m},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var t=e.type,r=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(t))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(t)||(l[e][t]={}),l[e][t][r]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),v=f.registerOrtbProcessor,m=f.getProcessors}},);
(self.pbjsChunk=self.pbjsChunk||[]).push([[215],{3522:,function(e){e.O(0,[409],(function(){return r=3522,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[29],{6401:,function(e){e.O(0,[409],(function(){return t=6401,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[690],{2722:6372:function(e,n,t){t.d(n,{DZ:function(){return u},Px:function(){return a},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return r},md:function(){return f}});var r=["request","imp","bidResponse","response"],o=["default","pbs"],i=r[0],u=r[1],a=r[2],c=r[3],s=o[0],f=o[1],d=new Set(r);var l,g=(l={},{registerOrtbProcessor:function(e){var n=e.type,t=e.name,o=e.fn,i=e.priority,u=void 0===i?0:i,a=e.dialects,c=void 0===a?[s]:a;if(!d.has(n))throw new Error("ORTB processor type must be one of: ".concat(r.join(", ")));c.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(n)||(l[e][n]={}),l[e][n][t]={priority:u,fn:o}}))},getProcessors:function(e){return l[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){e.O(0,[409],(function(){return n=2722,e(e.s=n);var n}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[931],{5540:function(e,o,a){var d=a(8640),n=a(4358),t=a(2797),u=a(5164),r=a(9633),l="zeotapIdPlus";var i=(0,u.df)({moduleType:r.y2,moduleName:l}),s={name:l,gvlid:301,decode:getId:eids:{IDP:{source:"zeotap.com",atype:1}}};(0,t.Bx)("userId",s),(0,d.z)("zeotapIdPlusIdSystem")}},function(e){e.O(0,[409],(function(){return o=5540,e(e.s=o);var o}));e.O()}]);
})(),pbjs.processQueue();