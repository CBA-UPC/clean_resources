(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[582],{"+vVg":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("QjXU"),i=n("mgFK"),c=n("W7wX");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,Object(c.a)()];case 1:return[2,!e.sent().isMsa]}}))}))}function s(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,Object(c.a)()];case 1:return[2,e.sent().isMsa]}}))}))}var o=n("/Oio"),u=n("MJsD");function f(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(u.a)()];case 1:return[2,t.sent().workload===e]}}))}))}function l(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,f(o.a.Hwa)];case 1:return[2,e.sent()]}}))}))}function b(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,f(o.a.Embed)];case 1:return[2,e.sent()]}}))}))}var d=n("vb0f"),h=n("yQST"),_=n("CRHC"),j=n("m32Q"),v=n("lkvL"),m=n("a3FV"),O=n("0TX8"),w=n("Wa5Y");function p(e,t,n,i,c,a,s){return Object(r.__awaiter)(this,void 0,void 0,(function(){var o,u;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:o={method:"GET",responseType:"json",url:"".concat(i,"/api/userEntitlements")},r.label=1;case 1:return r.trys.push([1,4,,5]),[4,Object(O.a)(o,n,c,t)];case 2:return r.sent(),[4,Object(w.a)(m.a.UserEntitlementsRequest,"UserEntitlements",o.url,o,s,a,i,e,"OfficeHome",{})];case 3:return(u=r.sent().data)?[2,u]:[3,5];case 4:return r.sent(),[3,5];case 5:return[2,null]}}))}))}var g=n("bIL4");function P(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)(g.a,e)];case 1:return[2,t.sent()]}}))}))}function y(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){return[2,Object(_.a)((function(){return function(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i,c,o,u,f;return Object(r.__generator)(this,(function(_){switch(_.label){case 0:return i={isCommercialUserPromise:a(),isConsumerUserPromise:s(),isPwaPromise:l(),isEmbedPromise:b()},[4,P(t)];case 1:return void 0!==(n=_.sent())?[3,3]:[4,p(t.correlationId,(function(){return Promise.resolve(e)}),t.inMockMode,t.officeHomeApiRoot,t.workload,t.getAccessToken,t.jwtAuthEnabled)];case 2:n=_.sent(),_.label=3;case 3:return null===n?[3,8]:[4,i.isCommercialUserPromise];case 4:return c=_.sent(),[4,i.isConsumerUserPromise];case 5:return o=_.sent(),[4,i.isPwaPromise];case 6:return u=_.sent(),[4,i.isEmbedPromise];case 7:return f=_.sent(),[2,Object(r.__assign)(Object(r.__assign)({},n),{isCommercialUser:c,isConsumerUser:o,isEmbed:f,isPwa:u,isPwaInUwp:u&&Object(d.a)(),isPwaInWebView2:u&&Object(h.a)()})];case 8:return[2,null]}}))}))}(e,t)}),(function(){return Object(j.a)({userId:e.puid,collectionName:g.c,collectionVersion:g.d,key:g.c})}),(function(t){return Object(v.a)({userId:e.puid,collectionName:g.c,collectionVersion:g.d,key:g.c,data:t})}))]}))}))}},"/Oio":MJsD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("B5kz"),c=n("zPZ9");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,i.a.fetchQuery(["OfficeComponentContext"],(,{cacheTime:1/0,staleTime:1/0})]}))}))}},W7wX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("MJsD"),c=n("B5kz");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)()];case 1:return e=t.sent(),[2,c.a.fetchQuery(["Identity"],(,{cacheTime:1/0,staleTime:1/0})]}}))}))}},bIL4:gCKw:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("QjXU"),i=n("MJsD"),c=n("B5kz"),a=n("W7wX"),s=n("XcEc");function o(){var e=this;return c.a.fetchQuery(["FeatureGates"],(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(c){switch(c.label){case 0:return[4,Promise.all([Object(i.a)(),Object(a.a)()])];case 1:return e=r.__read.apply(void 0,[c.sent(),2]),t=e[0],n=e[1],[2,Object(s.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},hfNz:function(e,t,n){"use strict";n.r(t),n.d(t,"prefetchNorthStar",(function(){return l}));var r=n("QjXU"),i=n("MJsD"),c=n("gCKw"),a=n("mJgL"),s=n("a3FV"),o=n("iPRk"),u=n("CMIS"),f=n("s1V1");function l(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);try{Object(o.a)("PrefetchNorthStar_Started")}catch(e){t="Invoked markPerformance in prefetchNorthStar function, but encountered an error : ".concat(e),Object(u.a)({eventName:s.a.PrefetchNorthStarMarkPerformanceError,errorType:"NorthStarConfig_Error",message:t})}return[4,b({featureGatesPromise:Object(c.a)(),featureSettingsPromise:Object(a.a)(),userEntitlementsPromise:Object(f.a)(),contextPromise:Object(i.a)()})];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),t="Invoked prefetchNorthStar function, but encountered an error: ".concat(e),Object(u.a)({eventName:s.a.PrefetchNorthStarError,errorType:"NorthStarConfig_Error",message:t}),[3,3];case 3:return[2]}}))}))}function b(e){var t;return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,c,a,s,o,u,f,l,b,d,h;return Object(r.__generator)(this,(function(_){switch(_.label){case 0:return[4,n.e(701).then(n.bind(null,"YOYd"))];case 1:return i=_.sent().prefetchAppGalleryConfig,[4,Promise.all([n.e(3),n.e(718)]).then(n.bind(null,"9YWD"))];case 2:return c=_.sent().prefetchCapabilities,[4,Promise.all([n.e(112),n.e(729)]).then(n.bind(null,"rRZh"))];case 3:return a=_.sent().prefetchEdgeworthConfig,[4,n.e(703).then(n.bind(null,"xusa"))];case 4:return s=_.sent().prefetchInstallConfig,[4,n.e(704).then(n.bind(null,"dz9y"))];case 5:return o=_.sent().prefetchMruConfig,[4,n.e(702).then(n.bind(null,"Y3rd"))];case 6:return u=_.sent().prefetchSharedContext,[4,n.e(711).then(n.bind(null,"BHaL"))];case 7:return f=_.sent().prefetchShellConfig,[4,n.e(705).then(n.bind(null,"iWxw"))];case 8:return l=_.sent().prefetchTemplatesConfig,b=[i,c,a,s,o,u,f,l],[4,e.userEntitlementsPromise];case 9:return(null===(t=_.sent().result)||void 0===t?void 0:t.isCommercialUser)?[4,n.e(710).then(n.bind(null,"snb6"))]:[3,12];case 10:return d=_.sent().prefetchPeopleCardConfig,[4,n.e(715).then(n.bind(null,"P5ym"))];case 11:h=_.sent().prefetchSearchConfig,b=Object(r.__spreadArray)(Object(r.__spreadArray)([],Object(r.__read)(b),!1),[d,h],!1),_.label=12;case 12:return[4,Promise.all(b.map(())];case 13:return _.sent(),[2]}}))}))}},mJgL:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("QjXU"),i=n("MJsD"),c=n("B5kz"),a=n("W7wX"),s=n("yNE0");function o(){var e=this;return c.a.fetchQuery(["FeatureSettings"],(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(c){switch(c.label){case 0:return[4,Promise.all([Object(i.a)(),Object(a.a)()])];case 1:return e=r.__read.apply(void 0,[c.sent(),2]),t=e[0],n=e[1],[2,Object(s.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},s1V1:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("QjXU"),i=n("MJsD"),c=n("B5kz"),a=n("W7wX"),s=n("+vVg"),o=n("bIL4");function u(){var e=this;return c.a.fetchQuery(o.b,(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(c){switch(c.label){case 0:return[4,Promise.all([Object(i.a)(),Object(a.a)()])];case 1:return e=r.__read.apply(void 0,[c.sent(),2]),t=e[0],n=e[1],[2,Object(s.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},vb0f:function(e,t,n){"use strict";function r(){return window.navigator.userAgent.toLowerCase().indexOf("msapphost/")>-1&&!!window.Windows}n.d(t,"a",(function(){return r}))},yNE0:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("QjXU"),i=n("mgFK"),c=n("CRHC"),a=n("m32Q"),s=n("lkvL"),o=n("a3FV"),u=n("0TX8"),f=n("Wa5Y");function l(e,t,n,i,c,a,s){return Object(r.__awaiter)(this,void 0,void 0,(function(){var l,b,d;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:l={},b={method:"GET",responseType:"json",url:"".concat(i,"/api/featureSettings")},r.label=1;case 1:return r.trys.push([1,4,,5]),[4,Object(u.a)(b,n,c,t)];case 2:return r.sent(),[4,Object(f.a)(o.a.FeatureSettingsRequest,"FeatureSettings",b.url,b,s,a,i,e,"OfficeHome",{})];case 3:return(d=r.sent().data)?[2,d]:[3,5];case 4:return r.sent(),[3,5];case 5:return[2,l]}}))}))}var b="featureSettings";function d(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)(b,e)];case 1:return[2,t.sent()]}}))}))}function h(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){return[2,Object(c.a)((function(){return function(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,d(t)];case 1:return void 0!==(n=r.sent())?[3,3]:[4,l(t.correlationId,(,t.inMockMode,t.officeHomeApiRoot,t.workload,t.getAccessToken,t.jwtAuthEnabled)];case 2:n=r.sent(),r.label=3;case 3:return[2,n]}}))}))}(e,t)}),(function(){return Object(a.a)({userId:e.puid,collectionName:b,collectionVersion:1,key:b})}),(function(t){return Object(s.a)({userId:e.puid,collectionName:b,collectionVersion:1,key:b,data:0===Object.keys(t).length?null:t})}))]}))}))}},yQST:function(e,t,n){"use strict";n.d(t,"a",();var r=n("vb0f");function i(){var e=window.chrome;return e&&e.webview&&Object(r.a)()}}}]);
//# sourceMappingURL=northstar-prefetch-service.852b631ad1c3363201c9.chunk.v7.js.map