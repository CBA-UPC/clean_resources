/*! For license information please see 59.bbd3cbd191917c4c09d9.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[59],{"+vVg":function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n("QjXU"),i=n("mgFK"),o=n("W7wX");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,Object(o.a)()];case 1:return[2,!e.sent().isMsa]}}))}))}function c(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,Object(o.a)()];case 1:return[2,e.sent().isMsa]}}))}))}var u=n("/Oio"),s=n("MJsD");function f(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(s.a)()];case 1:return[2,t.sent().workload===e]}}))}))}function l(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,f(u.a.Hwa)];case 1:return[2,e.sent()]}}))}))}function d(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,f(u.a.Embed)];case 1:return[2,e.sent()]}}))}))}var h=n("vb0f"),v=n("yQST"),b=n("CRHC"),m=n("m32Q"),O=n("lkvL"),w=n("a3FV"),j=n("0TX8"),p=n("Wa5Y");function _(e,t,n,i,o,a,c){return Object(r.__awaiter)(this,void 0,void 0,(function(){var u,s;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:u={method:"GET",responseType:"json",url:"".concat(i,"/api/userEntitlements")},r.label=1;case 1:return r.trys.push([1,4,,5]),[4,Object(j.a)(u,n,o,t)];case 2:return r.sent(),[4,Object(p.a)(w.a.UserEntitlementsRequest,"UserEntitlements",u.url,u,c,a,i,e,"OfficeHome",{})];case 3:return(s=r.sent().data)?[2,s]:[3,5];case 4:return r.sent(),[3,5];case 5:return[2,null]}}))}))}var g=n("bIL4");function y(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)(g.a,e)];case 1:return[2,t.sent()]}}))}))}function P(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){return[2,Object(b.a)((function(){return function(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i,o,u,s,f;return Object(r.__generator)(this,(function(b){switch(b.label){case 0:return i={isCommercialUserPromise:a(),isConsumerUserPromise:c(),isPwaPromise:l(),isEmbedPromise:d()},[4,y(t)];case 1:return void 0!==(n=b.sent())?[3,3]:[4,_(t.correlationId,(function(){return Promise.resolve(e)}),t.inMockMode,t.officeHomeApiRoot,t.workload,t.getAccessToken,t.jwtAuthEnabled)];case 2:n=b.sent(),b.label=3;case 3:return null===n?[3,8]:[4,i.isCommercialUserPromise];case 4:return o=b.sent(),[4,i.isConsumerUserPromise];case 5:return u=b.sent(),[4,i.isPwaPromise];case 6:return s=b.sent(),[4,i.isEmbedPromise];case 7:return f=b.sent(),[2,Object(r.__assign)(Object(r.__assign)({},n),{isCommercialUser:o,isConsumerUser:u,isEmbed:f,isPwa:s,isPwaInUwp:s&&Object(h.a)(),isPwaInWebView2:s&&Object(v.a)()})];case 8:return[2,null]}}))}))}(e,t)}),(function(){return Object(m.a)({userId:e.puid,collectionName:g.c,collectionVersion:g.d,key:g.c})}),(function(t){return Object(O.a)({userId:e.puid,collectionName:g.c,collectionVersion:g.d,key:g.c,data:t})}))]}))}))}},"/Oio":"0TX8":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("QjXU"),i=n("JYsJ");function o(e,t,n,o){return Object(r.__awaiter)(this,void 0,void 0,(function(){var a,c;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:e.params||(e.params={}),e.params.workload=n,(a=Object(i.a)("flight"))&&(e.params.flight=a),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,o()];case 2:return(c=r.sent())&&(e.headers||(e.headers={}),e.headers["X-OfficeHome-UserId"]=c.puid,e.headers["X-OfficeHome-TenantId"]=c.tenantId,c.authVersion&&(e.headers["X-OfficeHome-AuthVersion"]=c.authVersion),e.params[t?"mockauth":"auth"]=c.isMsa?"1":"2"),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,e]}}))}))}},"9Yx+":CRHC:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("QjXU");function i(e,t,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,o,a,c;return Object(r.__generator)(this,(function(r){return i=e(),o=t(),a=o.then((function(e){return e?{result:e,fromPersistence:!0}:null}),(),c=i.then((function(e){return n(e),{result:e,fromPersistence:!1}})),[2,Promise.race([a,c]).then((function(e){return e||c}),(function(){return a.then(()}))]}))}))}},E7ar:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("tjsK");function i(e){try{return function(e){var t=document.getElementById(e),n=t&&t.textContent;return n?JSON.parse(n):void 0}(e)}catch(t){throw new r.a("Failure to parse "+e+" from response",t)}}},JYsJ:function(e,t,n){"use strict";.d(t,"a",(function(){return r}))},MJsD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("B5kz"),o=n("zPZ9");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,i.a.fetchQuery(["OfficeComponentContext"],(function(){return o.a}),{cacheTime:1/0,staleTime:1/0})]}))}))}},W7wX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("MJsD"),o=n("B5kz");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)()];case 1:return e=t.sent(),[2,o.a.fetchQuery(["Identity"],(,{cacheTime:1/0,staleTime:1/0})]}}))}))}},Wa5Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("kb6k"),o=n("lAHu");function a(e,t,n,a,c,u,s,f,l,d,h,v){void 0===d&&(d={});var b="cache-only"===h;b&&(l="None");var m=Object(r.__assign)(Object(r.__assign)({},a),{url:n,method:"GET"});return Object(i.a)((function(n){return Object(o.a)(e,t,n,s,f,h,d.populateRequestEvent,d.onUploadProgress,d.onDownloadProgress,d.cancellationToken,d.timeoutInMs)}),e,t,m,c,u,l,d.mockParam,d.resourceUrl,d.rpsHeaderPrefix,d.additionalAuthErrors,d.isRetriableError,d.updateRequestWithAuth,b,d.silent,d.capDialogData,v)}},X1Kt:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("Dn7E"),i=n("f3rM"),o=a=function(e){return i.a.getState().initialize(e).then((function(e){Object(r.a)({featureName:"Other",eventName:"MfsFoldersInitialization",params:{Success:!0,info:e}})})).catch((function(e){Object(r.a)({featureName:"Other",eventName:"MfsFoldersInitialization",params:{Success:!1,DebugInfo:e}})}))}},amPu:function(e,t,n){"use strict";function r(e,t,n){return e&&e.success?(t||(t={}),t.Authorization="".concat("RPSCompact"===e.format?n||"":"Bearer ").concat(e.token).trim(),t):null!=t?t:{}}n.d(t,"a",(function(){return r}))},bIL4:elnK:function(e,t,n){"use strict";var r=n("niq1"),i=n("mXGw"),o=n("sYGy").useSyncExternalStoreWithSelector;ar c=function(e){var t="function"==typeof e?r.createStore(e):e,n=return Object.assign(n,t),n},u=function(e){return e?c(e):c};t.create=u,t.default=function(e){return u(e)},t.useStore=a,Object.keys(r).forEach((),e.exports=t&&t.default||{},Object.assign(e.exports,t)},f3rM:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("QjXU"),i=n("MJsD"),o=n("W7wX"),a=n("+1lv"),c=n("Dn7E"),u=n("s1V1"),s=n("elnK"),f=n.n(s)()((function(e,t){return{foldersData:void 0,initializePromise:void 0,initialize:function(s){var f=t().initializePromise;return f&&!s||((f=new Promise((function(c,f){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var l,d,h,v,b,m,O,w,j,p;return Object(r.__generator)(this,(function(_){switch(_.label){case 0:return t().foldersData&&!s?[2,c("Existing Folders client being consumed")]:[4,Promise.all([Object(i.a)(),Object(o.a)()])];case 1:return l=r.__read.apply(void 0,[_.sent(),2]),d=l[0],h=l[1],[4,Object(u.a)()];case 2:return(v=_.sent().result)?d?!v.hasOwnProperty("OneDriveResourceId")||v.OneDriveResourceId||d.inMockMode?h?(b=function(){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Promise.race([a.a,new Promise((function(e,t){d.inMockMode?e():setTimeout((,5e3)}))])]}))}))},[4,Promise.all([n.e(44),n.e(71),n.e(99),n.e(684)]).then(n.bind(null,"cqV8"))]):[2,f("OfficeIdentity not set.")]:[2,f("No valid ODSP URL present.")]:[2,f("OfficeComponentContext not set.")]:[2,f("UserEntitlements not set.")];case 3:return(m=_.sent())||f("Unable to load Folders module."),O=m,d.inMockMode?[4,Promise.all([n.e(44),n.e(71),n.e(99),n.e(131),n.e(130),n.e(680)]).then(n.bind(null,"OQvf"))]:[3,5];case 4:return w=_.sent().FoldersLocalClientBuilder,[3,6];case 5:w=O.FoldersProdClientBuilder,_.label=6;case 6:return[4,new w({appId:"office-hub",appName:"officehub",podLocation:"Personal",mfsAccessTokenCallback:function(){return d.getAccessToken("MfsService").then((function(e){return e.token}))},odspAccessTokenCallback:function(){return d.getAccessToken("OneDrive",!1,v.OneDriveResourceId).then((function(e){return e.token}))},pushChannelTokenCallback:sessionId:d.sessionId,waitForUpdates:!1,sinkCallback:b,completedCallback:oneDriveDomain:null===(p=v.OneDriveResourceId)||void 0===p?void 0:p.replace("https://",""),userCacheKey:h.puid}).build()];case 7:return(j=_.sent())||f("Unable to build Folders Client."),e({foldersData:{foldersClient:j,foldersModule:O}}),[2,c("Folders client created")]}}))}))}))).then((function(e){Object(c.a)({featureName:"Other",eventName:"MfsFoldersInitialization",params:{Success:!0,info:e}})})).catch((function(e){Object(c.a)({featureName:"Other",eventName:"MfsFoldersInitialization",params:{Success:!1,DebugInfo:e}})})),e({initializePromise:f})),f}}}))},huqQ:function(e,t,n){"use strict";e.exports=n("y8H0")},kb6k:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("QjXU"),i=n("yOLj"),o=n("tyUq"),a=n("GMuP"),c=n("JYsJ"),u=n("amPu"),s=[0,11,22,33];function f(e,t,n,r){e&&(e.headers=Object(u.a)(t,e.headers,n),r&&r(e,t))}function l(e,t,n,u,l,d,h,v,b,m,O,w,j,p,_,g,y){return void 0===p&&(p=!1),new Promise((function(P,k){var S=h||"None",E="None"===S||"OfficeHome"===S&&!l,C=O||new Set;C.add(401);var M=function(e){var r=e.status,a=Number.NaN;!E&&C.has(r)?a=701:w&&w(r)&&(a=703),a!==Number.NaN&&(Object(i.a)(t,a,-1,"",p),Object(o.a)({eventName:n,fromCache:p,httpCode:a,latency:-1,error:""})),k({httpResponse:e})};if(v){var I=Object(c.a)(v);I&&(u.headers||(u.headers={}),u.headers["ohp-mock"]=I)}(E?Promise.resolve(void 0):d(S,!1,b,y,void 0,void 0,_,g)).then((function(c){if(!E){if(!c||!c.success){var l=c?c.error:"";return Object(i.a)(t,702,-1,"string"==typeof l?l:"",p),Object(o.a)({eventName:n,fromCache:p,httpCode:702,latency:-1,error:"string"==typeof l?l:""}),void k({httpResponse:{data:"CAP_Error"===l?l:null,status:702,headers:{},ok:!1,statusText:"Failed to fetch access token",fromCache:!1}})}f(u,c,m,j)}e(u).then(P,(function(t){if(!E&&C.has(t.status)){var n=function(e){var t,n,i=null===(n=Object.entries(e).find((function(e){return"www-authenticate"===Object(r.__read)(e,1)[0].toLowerCase()})))||void 0===n?void 0:n[1];if(null==i?void 0:i.includes("insufficient_claims")){var o=i.match(/claims=\"(\S+)\"/);if(o)return o[1];Object(a.a)({eventName:"Extract_ClaimsChallenge_Error",params:(t={},t.Error="Failed to extract insufficient claims value",t)})}return""}(t.headers);d(S,!0,b,void 0,!1,void 0,void 0,void 0,n).then((function(n){n.success?(f(u,n,m,j),e(u).then(P,M)):M(t)}))}else w&&w(t.status)?function(t,n){var r=n.headers),i=function(){var e=Math.floor(1e3*Math.random())%s.length;return s[e]}();r&&(i=Math.ceil(1e3*parseFloat(r||"0"))),setTimeout((,i)}(u,t):k({httpResponse:t})}))}))}))}},lAHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("c/bn"),i=n("JYsJ");function o(e,t,n,o,a,c,u,s,f,l,d){var h="".concat(o,"/");return n.url.startsWith("http")&&!h.startsWith("http")&&(h="".concat(window.location.origin,"/").concat(h)),0===n.url.lastIndexOf(h,0)&&function(e,t){e.headers||(e.headers={}),e.headers["X-OfficeHome-CorrelationId"]=t;var n=Object(i.a)("testtraffic");n&&(e.headers["X-OfficeHome-TestTraffic"]=n)}(n,a),Object(r.a)(e,t,n,c,u,s,f,l,d)}},mgFK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("QjXU"),i=n("E7ar"),o=n("8wW2"),a=n("a3FV"),c=n("0TX8"),u=n("Wa5Y"),s=new Map;function f(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i,s,f;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t.disableLegacyNetworkConfigs?[2,void 0]:(n=new URL("".concat(t.officeHomeApiRoot,"/api/config/").concat(e),window.location.origin),i={},[4,Object(c.a)(i,t.inMockMode,t.workload,t.getIdentity)]);case 1:return r.sent(),window.location.search&&(s=new URLSearchParams(window.location.search),i.params||(i.params={}),t.inMockMode?s.forEach(():s.has("scenarioid")&&(f=s.get("scenarioid"),i.params.scenarioid=null!=f?f:"")),[2,Object(u.a)(a.a.ConfigRequest,"Config",n.toString(),i,t.jwtAuthEnabled,t.getAccessToken,t.officeHomeApiRoot,t.correlationId,"OfficeHome",{populateRequestEvent:).then(().catch((function(e){Object(o.a)().handleError(e)}))]}}))}))}function l(e,t){var n=this;if(s.has(e))return s.get(e);var o=new Promise((function(o){return Object(r.__awaiter)(n,void 0,void 0,(function(){var n,a,c;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:n=void 0,r.label=1;case 1:return r.trys.push([1,5,,6]),(a=window.shellAndConfigResponse)?[4,a]:[3,3];case 2:if((c=r.sent())&&c[e]){try{o(JSON.parse(c[e]))}catch(t){o(c[e])}return[2]}return[3,4];case 3:if(n=Object(i.a)(e))return o(n),[2];r.label=4;case 4:return[3,6];case 5:return r.sent(),[3,6];case 6:return[4,f(e,t)];case 7:return n=r.sent(),o(n),[2]}}))}))}));return s.set(e,o),o}},niq1:function(e,t,n){"use strict";var r=function(e){var t,n=new Set,r=i=function(){return t},o={setState:r,getState:i,subscribe:destroy:;return t=e(r,i,o),o},i=t.createStore=i,t.default=e.exports=t&&t.default||{},Object.assign(e.exports,t)},s1V1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("QjXU"),i=n("MJsD"),o=n("B5kz"),a=n("W7wX"),c=n("+vVg"),u=n("bIL4");function s(){var e=this;return o.a.fetchQuery(u.b,(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(o){switch(o.label){case 0:return[4,Promise.all([Object(i.a)(),Object(a.a)()])];case 1:return e=r.__read.apply(void 0,[o.sent(),2]),t=e[0],n=e[1],[2,Object(c.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},sYGy:vb0f:function(e,t,n){"use strict";function r(){return window.navigator.userAgent.toLowerCase().indexOf("msapphost/")>-1&&!!window.Windows}n.d(t,"a",(function(){return r}))},y8H0:yOLj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8/lW"),i=n("ntFm");function o(e,t,n,o,a,c,u,s){void 0===a&&(a=!1),void 0===c&&(c={}),void 0===u&&(u=[]),void 0===s&&(s=r.a.Security),Object(i.a)(e,t,n,o,a,c,u,s).record()}},yQST:function(e,t,n){"use strict";n.d(t,"a",();var r=n("vb0f");function i(){var e=window.chrome;return e&&e.webview&&Object(r.a)()}}}]);
//# sourceMappingURL=59.bbd3cbd191917c4c09d9.chunk.v7.js.map