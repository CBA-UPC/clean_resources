(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[2],{"0TX8":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("QjXU"),a=n("JYsJ");function o(e,t,n,o){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,c;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:e.params||(e.params={}),e.params.workload=n,(i=Object(a.a)("flight"))&&(e.params.flight=i),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,o()];case 2:return(c=r.sent())&&(e.headers||(e.headers={}),e.headers["X-OfficeHome-UserId"]=c.puid,e.headers["X-OfficeHome-TenantId"]=c.tenantId,c.authVersion&&(e.headers["X-OfficeHome-AuthVersion"]=c.authVersion),e.params[t?"mockauth":"auth"]=c.isMsa?"1":"2"),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,e]}}))}))}},CRHC:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU");function a(e,t,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var a,o,i,c;return Object(r.__generator)(this,(function(r){return a=e(),o=t(),i=o.then((function(e){return e?{result:e,fromPersistence:!0}:null}),(),c=a.then((function(e){return n(e),{result:e,fromPersistence:!1}})),[2,Promise.race([i,c]).then((function(e){return e||c}),(function(){return i.then(()}))]}))}))}},E7ar:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("tjsK");function a(e){try{return function(e){var t=document.getElementById(e),n=t&&t.textContent;return n?JSON.parse(n):void 0}(e)}catch(t){throw new r.a("Failure to parse "+e+" from response",t)}}},JYsJ:function(e,t,n){"use strict";.d(t,"a",(function(){return r}))},Wa5Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("QjXU"),a=n("kb6k"),o=n("lAHu");function i(e,t,n,i,c,s,u,f,d,l,h,v){void 0===l&&(l={});var m="cache-only"===h;m&&(d="None");var b=Object(r.__assign)(Object(r.__assign)({},i),{url:n,method:"GET"});return Object(a.a)((function(n){return Object(o.a)(e,t,n,u,f,h,l.populateRequestEvent,l.onUploadProgress,l.onDownloadProgress,l.cancellationToken,l.timeoutInMs)}),e,t,b,c,s,d,l.mockParam,l.resourceUrl,l.rpsHeaderPrefix,l.additionalAuthErrors,l.isRetriableError,l.updateRequestWithAuth,m,l.silent,l.capDialogData,v)}},XcEc:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("QjXU"),a=n("mgFK"),o=n("CRHC"),i=n("m32Q"),c=n("lkvL"),s=n("a3FV"),u=n("0TX8"),f=n("Wa5Y");function d(e,t,n,a,o,i,c){return Object(r.__awaiter)(this,void 0,void 0,(function(){var d,l,h;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:d={},l={method:"GET",responseType:"json",url:"".concat(a,"/api/featureGates")},r.label=1;case 1:return r.trys.push([1,4,,5]),[4,Object(u.a)(l,n,o,t)];case 2:return r.sent(),[4,Object(f.a)(s.a.FeatureGatesRequest,"FeatureGates",l.url,l,c,i,a,e,"OfficeHome",{})];case 3:return(h=r.sent().data)?[2,h]:[3,5];case 4:return r.sent(),[3,5];case 5:return[2,d]}}))}))}var l="featureGates";function h(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(a.a)(l,e)];case 1:return[2,t.sent()]}}))}))}function v(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){return[2,Object(o.a)((function(){return function(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,h(t)];case 1:return void 0!==(n=r.sent())?[3,3]:[4,d(t.correlationId,(,t.inMockMode,t.officeHomeApiRoot,t.workload,t.getAccessToken,t.jwtAuthEnabled)];case 2:n=r.sent(),r.label=3;case 3:return[2,n]}}))}))}(e,t)}),(function(){return Object(i.a)({userId:e.puid,collectionName:l,collectionVersion:1,key:l})}),(function(t){return Object(c.a)({userId:e.puid,collectionName:l,collectionVersion:1,key:l,data:0===Object.keys(t).length?null:t})}))]}))}))}},amPu:function(e,t,n){"use strict";function r(e,t,n){return e&&e.success?(t||(t={}),t.Authorization="".concat("RPSCompact"===e.format?n||"":"Bearer ").concat(e.token).trim(),t):null!=t?t:{}}n.d(t,"a",(function(){return r}))},kb6k:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("QjXU"),a=n("yOLj"),o=n("tyUq"),i=n("GMuP"),c=n("JYsJ"),s=n("amPu"),u=[0,11,22,33];function f(e,t,n,r){e&&(e.headers=Object(s.a)(t,e.headers,n),r&&r(e,t))}function d(e,t,n,s,d,l,h,v,m,b,p,O,j,w,_,g,k){return void 0===w&&(w=!1),new Promise((function(y,C){var E=h||"None",R="None"===E||"OfficeHome"===E&&!d,P=p||new Set;P.add(401);var N=function(e){var r=e.status,i=Number.NaN;!R&&P.has(r)?i=701:O&&O(r)&&(i=703),i!==Number.NaN&&(Object(a.a)(t,i,-1,"",w),Object(o.a)({eventName:n,fromCache:w,httpCode:i,latency:-1,error:""})),C({httpResponse:e})};if(v){var H=Object(c.a)(v);H&&(s.headers||(s.headers={}),s.headers["ohp-mock"]=H)}(R?Promise.resolve(void 0):l(E,!1,m,k,void 0,void 0,_,g)).then((function(c){if(!R){if(!c||!c.success){var d=c?c.error:"";return Object(a.a)(t,702,-1,"string"==typeof d?d:"",w),Object(o.a)({eventName:n,fromCache:w,httpCode:702,latency:-1,error:"string"==typeof d?d:""}),void C({httpResponse:{data:"CAP_Error"===d?d:null,status:702,headers:{},ok:!1,statusText:"Failed to fetch access token",fromCache:!1}})}f(s,c,b,j)}e(s).then(y,(function(t){if(!R&&P.has(t.status)){var n=function(e){var t,n,a=null===(n=Object.entries(e).find((function(e){return"www-authenticate"===Object(r.__read)(e,1)[0].toLowerCase()})))||void 0===n?void 0:n[1];if(null==a?void 0:a.includes("insufficient_claims")){var o=a.match(/claims=\"(\S+)\"/);if(o)return o[1];Object(i.a)({eventName:"Extract_ClaimsChallenge_Error",params:(t={},t.Error="Failed to extract insufficient claims value",t)})}return""}(t.headers);l(E,!0,m,void 0,!1,void 0,void 0,void 0,n).then((function(n){n.success?(f(s,n,b,j),e(s).then(y,N)):N(t)}))}else O&&O(t.status)?function(t,n){var r=n.headers),a=function(){var e=Math.floor(1e3*Math.random())%u.length;return u[e]}();r&&(a=Math.ceil(1e3*parseFloat(r||"0"))),setTimeout((,a)}(s,t):C({httpResponse:t})}))}))}))}},lAHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("c/bn"),a=n("JYsJ");function o(e,t,n,o,i,c,s,u,f,d,l){var h="".concat(o,"/");return n.url.startsWith("http")&&!h.startsWith("http")&&(h="".concat(window.location.origin,"/").concat(h)),0===n.url.lastIndexOf(h,0)&&function(e,t){e.headers||(e.headers={}),e.headers["X-OfficeHome-CorrelationId"]=t;var n=Object(a.a)("testtraffic");n&&(e.headers["X-OfficeHome-TestTraffic"]=n)}(n,i),Object(r.a)(e,t,n,c,s,u,f,d,l)}},mgFK:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("QjXU"),a=n("E7ar"),o=n("8wW2"),i=n("a3FV"),c=n("0TX8"),s=n("Wa5Y"),u=new Map;function f(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,a,u,f;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t.disableLegacyNetworkConfigs?[2,void 0]:(n=new URL("".concat(t.officeHomeApiRoot,"/api/config/").concat(e),window.location.origin),a={},[4,Object(c.a)(a,t.inMockMode,t.workload,t.getIdentity)]);case 1:return r.sent(),window.location.search&&(u=new URLSearchParams(window.location.search),a.params||(a.params={}),t.inMockMode?u.forEach(():u.has("scenarioid")&&(f=u.get("scenarioid"),a.params.scenarioid=null!=f?f:"")),[2,Object(s.a)(i.a.ConfigRequest,"Config",n.toString(),a,t.jwtAuthEnabled,t.getAccessToken,t.officeHomeApiRoot,t.correlationId,"OfficeHome",{populateRequestEvent:).then(().catch((function(e){Object(o.a)().handleError(e)}))]}}))}))}function d(e,t){var n=this;if(u.has(e))return u.get(e);var o=new Promise((function(o){return Object(r.__awaiter)(n,void 0,void 0,(function(){var n,i,c;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:n=void 0,r.label=1;case 1:return r.trys.push([1,5,,6]),(i=window.shellAndConfigResponse)?[4,i]:[3,3];case 2:if((c=r.sent())&&c[e]){try{o(JSON.parse(c[e]))}catch(t){o(c[e])}return[2]}return[3,4];case 3:if(n=Object(a.a)(e))return o(n),[2];r.label=4;case 4:return[3,6];case 5:return r.sent(),[3,6];case 6:return[4,f(e,t)];case 7:return n=r.sent(),o(n),[2]}}))}))}));return u.set(e,o),o}},yOLj:function(e,t,n){"use strict";n.d(t,"a",();var r=n("8/lW"),a=n("ntFm");function o(e,t,n,o,i,c,s,u){void 0===i&&(i=!1),void 0===c&&(c={}),void 0===s&&(s=[]),void 0===u&&(u=r.a.Security),Object(a.a)(e,t,n,o,i,c,s,u).record()}}}]);
//# sourceMappingURL=2.11452b39a1d39088d111.chunk.v7.js.map