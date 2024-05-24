var CS_CONF={"projectId":2052,"status":1,"hostnames":["discover.com","discovercard.com","creditscorecard.com","dev-wcm.discover.com","dfsstaging.cognizant.com","discoverbank.com","discoverfinancial.com","mmafighting.com","opinionlab.com","otp-ui-acceptance.cf-bdc-z2-dev.discoverfinancial.com","s-cdn.innovid.com","secure.opinionlab.com"],"crossDomainTracking":1,"crossDomainSingleIframeTracking":1,"consentRequired":0,"allowSubdomains":1,"visitorCookieTimeout":34164000000,"sampleRate":100,"replayRecordingRate":100,"validationRate":10,"lastTrackingDraw":1627927880,"trackerDomain":"c.clicktale.net","recordingDomain":"r.clicktale.net","useMalkaPipeline":1,"ed":"l.clicktale.net/log/web","eMerchandisingEnabled":0,"mouseMoveHeatmapEnabled":1,"autoInsightsEnabled":0,"jsErrorsEnabled":1,"customErrorsEnabled":0,"jsCustomErrorsEnabled":0,"apiErrorsEnabled":1,"customHashIdEnabled":1,"recordingEncryptionEnabled":0,"recordingEncryptionPublicKey":null,"recordingEncryptionPublicKeyId":0,"secureCookiesEnabled":0,"triggerSessionReplayEnabled":0,"triggerSessionReplayRegex":null,"dynamicIdRegex":null,"whitelistedAttributes":[],"replayRecordingUnmaskedUrlRegex":null,"replayRecordingUnmaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegex":null,"anonymisationMethod":null,"tagDeploymentMode":"DUAL_COLLECTION","experimental":null,"iframesTracking":0,"textVisibilityEnabled":1,"cookielessTrackingEnabled":0,"malkaUrlEnabled":0,"malkaEtrEnabled":0,"pathComputationRules":{"reliableSelectors":[],"uniqueAttributes":[],"uniqueCssSelectors":[]},"asyncSerializerEnabled":1,"pendingInactivityTimeout":5000,"accessibilityEnabled":0,"uxaDomain":"app.contentsquare.com","webviewsTrackingEnabled":0,"useStaticResourceManager":1,"performanceTimingOptions":{"withResource":false,"withNavigation":false},"replayConsentRequiredForSession":0,"apiErrors":{"validCustomHeaders":[],"plainCustomHeaders":[],"validUrls":[],"configurableApiErrorRules":[],"collectStandardHeaders":0,"collectQueryParam":0,"collectRequestBody":0,"collectResponseBody":0,"collectionRules":[]},"displayAdOptions":null,"taskSchedulerOptions":{"enabled":1},"malkaQuotaServiceDomain":"q-aus1.clicktale.net","malkaRecordingDomain":"k-aus1.clicktale.net","staticResourceManagerDomain":"srm.bf.contentsquare.net","dualCollectionTagDomain":"clicktale.net","ptcDomain":"cdnssl.clicktale.net","ptcPartition":"www15","ptcGuid":"fd145cf2-4109-439c-97f8-e0bc3c3e290d"};
var CS_INTEGRATIONS_CONF = {"adobe-target":{},"app-dynamics":{},"opinion-lab":{},"optimizely":{},"liveperson":{"settings":["sendArtificialPageviews"]}};
/* integration-adobe-target 3.6.5 */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-adobe-target-cap","version":"3.6.5","scripts":{"build:snippet":"webpack"}}')},);/* integration-app-dynamics 2.11.1 */
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-app-dynamics-cap","version":"2.11.1","scripts":{"build:snippet":"webpack"}}')},function(e,n,t){"use strict";function o(e,n){try{e()}catch(e){window._uxa=window._uxa||[],_uxa.push(["logSnippetError",n,e.message])}}function i(e){return"object"==typeof e&&null!==e}function r(e,n){if(i(window.CS_INTEGRATIONS_CONF)&&i(window.CS_INTEGRATIONS_CONF[e]))return window.CS_INTEGRATIONS_CONF[e][n]}t.r(n);var a="";function u(e,n,t,o){var i,s=1e3,c=10;a||(a=r(e,"timingSettings"),"object"==typeof(i=a)&&null!==i&&Object.keys(i).length&&(s=a.doOnlyWhenInterval,c=a.doOnlyWhenTimes)),n&&t&&(--c<0?"function"==typeof o&&o():t()?n():setTimeout((,s))}const s=t(0);let c,f=s.name,p=s.version;const d=function(e){var n,t,i,r;if(o((function(){var o=e.name;i=e.version;var a=o.replace("@contentsquare/integration-","");n=a+"-"+i;var u="-contentsquare";r=new RegExp(u+"$").test(a),t=a.replace(/-contentsquare([^-contentsquare]*)$/,"$1"),r||(u="-cap",r=new RegExp(u+"$").test(a),t=a.replace(/-cap([^-cap]*)$/,"$1"))}),"Shared-Function-readPackageJSON"),r)return{snippetBuildName:n,parameterName:t,snippetVersion:i}}(s);d&&(c=d.parameterName,f=d.snippetBuildName,p=d.snippetVersion),o((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("AppDyamics - v"+p);const e=r(c,"settings");let n="";function t(e){u(c,(function(){setTimeout(()=>{o((function(){const t=e.sessionKey;var o,i;i=t,o="APM_AD_"+(o="SessionID"),_uxa.push(["trackDynamicVariable",{key:o,value:i}]);let r={},a=!1;if(window["adrum-config"].userEventInfo&&window["adrum-config"].userEventInfo.VPageView){const e=window["adrum-config"].userEventInfo.VPageView;"function"==typeof e?(a=!0,r=e()):r=window["adrum-config"].userEventInfo.VPageView;0===Object.keys(r)&&(r.userData={})}else window["adrum-config"].userEventInfo={},window["adrum-config"].userEventInfo.VPageView={},window["adrum-config"].userEventInfo.VPageView.userData={},r=window["adrum-config"].userEventInfo.VPageView;if("object"==typeof r.userData){if(_uxa.push(["isRecording"])){const t=function(e,n,t){e||(e="missingFromDynamicSnippet");var o=n;if(isNaN(o)&&(n=0),t){var i=t.sessionKey.split("."),r=t.projectId,a=i[0],u=i[1],s=t.pageNumber,c=s-n;return n>=s&&(c=s),0===o&&(c=1),"https://app.contentsquare.com/quick-playback/index.html?pid="+r+"&uu="+a+"&sn="+u+"&pvid="+c+"&recordingType=cs&vd="+e}}("ad",n,e);t&&(r.userData.ContentsquareReplay=t)}r.userData.ContentsquareSID=t,window["adrum-config"].userEventInfo.VPageView=r,a&&(window["adrum-config"].userEventInfo.VPageView=function(e){return r})}!function(e){if(e.spa&&e.spa.spa2)ADRUM.markVirtualPageBegin("contentsquare-session-replay",!1);else{const e=new ADRUM.events.VPageView({url:"contentsquare-session-replay"});"function"==typeof e.start&&"function"==typeof e.markViewChangeStart&&"function"==typeof e.markViewChangeEnd&&"function"==typeof e.markViewDOMLoaded&&"function"==typeof e.markXhrRequestsCompleted&&"function"==typeof e.end&&"function"==typeof ADRUM.report&&(e.start(),e.markViewChangeStart(),e.markViewChangeEnd(),e.markViewDOMLoaded(),e.markXhrRequestsCompleted(),e.end(),ADRUM.report(e))}}(window["adrum-config"]||(window["adrum-config"]={}))}),f)},1e3)}),(function(){return!!(window.ADRUM&&"function"==typeof ADRUM.markVirtualPageBegin&&ADRUM.events&&"function"==typeof ADRUM.events.VPageView&&window["adrum-config"])}))}e&&e.indexOf("setReplayLinkToFirstPV")>-1&&(n=0);let i=!1;_uxa.push(["afterPageView",)}),f)}]);/* integration-opinion-lab 2.13.3 */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-opinion-lab-cap","version":"2.13.3","scripts":{"build:snippet":"webpack"}}')},function(e,t,n){"use strict";function o(e,t){try{e()}catch(e){window._uxa=window._uxa||[],_uxa.push(["logSnippetError",t,e.message])}}function i(e){return"object"==typeof e&&null!==e}.r(t);var r,s=n(0),c=s.name,u=s.version,p=function(e){var t,n,i,a;if(o((function(){var o=e.name;i=e.version;var r=o.replace("@contentsquare/integration-","");t=r+"-"+i;var s="-contentsquare";a=new RegExp(s+"$").test(r),n=r.replace(/-contentsquare([^-contentsquare]*)$/,"$1"),a||(s="-cap",a=new RegExp(s+"$").test(r),n=r.replace(/-cap([^-cap]*)$/,"$1"))}),"Shared-Function-readPackageJSON"),a)return{snippetBuildName:t,parameterName:n,snippetVersion:i}}(s);p&&(r=p.parameterName,c=p.snippetBuildName,u=p.snippetVersion),o((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("Verint (OpinionLab) - v"+u);var e=!1;window.self!=window.top&&(e=CS_CONF.iframesTracking);var t="";"DUAL_COLLECTION"===CS_CONF.tagDeploymentMode&&CS_CONF.ptcPartition?t="M2PCT":"DUAL_COLLECTION"!==CS_CONF.tagDeploymentMode||CS_CONF.ptcPartition?"LOAD_CLICKTALE_PTC"===CS_CONF.tagDeploymentMode?t="M2":"CONTENTSQUARE"===CS_CONF.tagDeploymentMode&&(t="CS"):t="M2PCS";var n=a(r,"settings"),i=!1,s="";n&&(n.indexOf("sendArtificialPageviews")>-1&&(i=!0),n.indexOf("setReplayLinkToFirstPV")>-1&&(s=0));var p=!1;function d(e,t,n,o){e="FB_OL_"+e,_uxa.push(["trackDynamicVariable",{key:e,value:t}]),p&&"etr"===n&&_uxa.push(["trackEventTriggerRecording","@ETS@"+e]),o&&i&&_uxa.push(["trackPageview",window.location.pathname+"?"+o])}ocument.location.host.indexOf("opinionlab.com")>-1){if(!e&&window.olData&&(olData.clickTaleUID||olData.contentsquareIDs)){var f="";if((f="M2PCT"===t?olData.clickTaleUID:olData.contentsquareIDs)&&"null"!=f){var _=f.split("~"),C=_[0],v=_[1],O=_[2],N=_[3],T=l();C&&v&&O&&(N?document.cookie="_cs_optout="+N+";domain="+T+";path=/;SameSite=None;Secure":(document.cookie="_cs_optout=;domain="+T+";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure",document.cookie="_cs_optout=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure",document.cookie="_cs_optout=;domain=."+document.location.host+";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure"),document.cookie="_cs_id="+C+";domain="+T+";path=/;SameSite=None;Secure",document.cookie="_cs_s="+v+";domain="+T+";path=/;SameSite=None;Secure",document.cookie="_cs_c="+O+";domain="+T+";path=/;SameSite=None;Secure")}}function w(){if(!e){var t=g("_cs_s");if(t&&t.indexOf(".T.")>-1)var n=setInterval((function(){(t=g("_cs_s"))&&-1===t.indexOf(".T.")&&(clearInterval(n),m())}),500);else m()}setTimeout((function(){p=_uxa.push(["isRecording"])}),500)}d("Feedback Displayed (All Surveys)","true"),_uxa.push(["afterPageView",function(e){o((function(){w(e)}),c)}]),window.addEventListener("message",(function(e){"https://secure.opinionlab.com"==e.origin&&o((function(){var t=e.data,n=JSON.parse(t);if("ClicktaleOpinionLab_Submitted"===n.message||"ContentsquareOpinionLab_Submitted"===n.message){var o=n.ccid||"";d("Feedback Submitted","Survey ID : "+o,"etr","cs_opinionlab=feedback_submitted_"+o);var i=n.responseId;i&&d("Response ID ("+o+")",i);var a=n.overallRating;a&&d("Overall Rating ("+o+")",parseInt(a));var r=n.usabilityRating;r&&d("Usability Rating ("+o+")",parseInt(r));var s=n.designRating;s&&d("Design Rating ("+o+")",parseInt(s));var c=n.contentRating;c&&d("Content Rating ("+o+")",parseInt(c));for(var u=Object.keys(n),p=1;p<u.length;p++)if(u[p].indexOf("answer")>-1){var l=n[u[p]],g="";l&&"0"!=l&&(isNaN(l)||(g=" Rating"),d("Custom Answer "+[p]+g+" ("+o+")",l))}}}),c)}))}else{function I(n){if(!e){function i(e){var t=e.data;t&&t.contentsquare_integration&&"opinion-lab"===t.vendor&&o((function(){var e=t.contentsquare_integration;if(window.CS_CONF&&CS_CONF.allowSubdomains){var o=l();document.cookie="_cs_s="+S(e)+";domain="+S(o)+";path=/"}else document.cookie="_cs_s="+S(e)+";path=/";I(n)}),c)}window.removeEventListener("message",i),window.addEventListener("message",i)}function u(){var e=g("_cs_id"),o=g("_cs_c"),i=g("_cs_optout"),c=e+"~"+d+"~"+o+"~"+i;if("M2PCT"===t){var u=CS_CONF.ptcPartition,l=CS_CONF.ptcGuid;localStorage.setItem("CTuserID",c),localStorage.setItem("CTpartition",u),localStorage.setItem("CTguid",l),sessionStorage.setItem("CTuserID",c),sessionStorage.setItem("CTpartition",u),sessionStorage.setItem("CTguid",l)}else{var m="";"M2PCS"===t?m=CS_CONF.ptcGuid:(m=a(r,"tagid"))&&(m=m.trim()),localStorage.setItem("CSid",c),localStorage.setItem("CStagID",m),sessionStorage.setItem("CSid",c),sessionStorage.setItem("CStagID",m)}if(p=_uxa.push(["isRecording"])){var S="ol",s,n);S&&("M2PCT"===t?(localStorage.setItem("CTrecordingLink",S),sessionStorage.setItem("CTrecordingLink",S)):(localStorage.setItem("CSreplayLink",S),sessionStorage.setItem("CSreplayLink",S)))}else"M2PCT"===t?(localStorage.setItem("CTrecordingLink","Contensquare Not Recording"),sessionStorage.setItem("CTrecordingLink","Contensquare Not Recording")):(localStorage.setItem("CSreplayLink","Contensquare Not Recording"),sessionStorage.setItem("CSreplayLink","Contensquare Not Recording"))}var d=g("_cs_s");if(d&&d.indexOf(".T.")>-1)var m=setInterval((,500);else u()}uxa.push(["afterPageView",)}}),c)}]);/* integration-optimizely 2.6.3 */
!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-optimizely-cap","version":"2.6.3","scripts":{"build:snippet":"webpack"}}')},);/* integration-liveperson 2.7.0 */
![);!function(){"use strict";var t={d:o:r:,n={};t.r(n),t.d(n,{getRequestParameters:function(){return po}});var i="cs-native-frame",r={navigatorProperties:[{propertyName:"sendBeacon",binding:navigator}],nodeProperties:["childNodes","parentNode","nextSibling","firstChild"],elementProperties:["shadowRoot"],elementPropertiesValues:["matches","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],eventProperties:["target"],imageProperties:["src"],constructors:{Date:"csDate",JSON:"csJSON",Array:"csArray",String:"csString",URL:"csURL",MutationObserver:"csMutationObserver",screen:"csScreen"}};))try{e(window)}catch(eu){o("Critical","failed to copy references from window: ".concat(eu.message))}nction a(t){return 1===t.nodeType}function f(t){return 3===t.nodeType}function v(t){return a(t)&&"source"===t.localName}unction d(t){return a(t)&&"a"===t.localName}unction y(t){return a(t)&&"img"===t.localName}function p(t){return a(t)&&"style"===t.localName}function m(t){return a(t)&&"input"===t.localName}function g(t){return a(t)&&"textarea"===t.localName}function A(t){return a(t)&&"script"===t.localName}["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"];var I="detached";unction k(t){return B.isValidElement(t)}var _=window.csElementmatches||window.csElementmatchesSelector||window.csElementmozMatchesSelector||window.csElementmsMatchesSelector||window.csElementoMatchesSelector||window.csElementwebkitMatchesSelector,x=9;ar M=[/\d{4}/,/^ember\d+$/],L="@",D="data-cs-override-id",U="data-cs-dynamic-id";B,V=11;||(B={})),window.CSPathComputation=window.CSPathComputation||B;var W=function(t,n){return W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},W(t,n)};function J(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}W(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var Y=function(){return Y=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},Y.apply(this,arguments)};function X(t,n,i,r){var s,e=arguments.length,u=e<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(u=(e<3?s(u):e>3?s(n,i,u):s(n,i))||u);return e>3&&u&&Object.defineProperty(n,i,u),u}ject.create;function Z(t,n,i){if(i||2===arguments.length)for(var r,s=0,e=n.length;s<e;s++)!r&&s in n||(r||(r=Array.prototype.slice.call(n,0,s)),r[s]=n[s]);return t.concat(r||Array.prototype.slice.call(n))}Object.create;var Q=Number.MAX_SAFE_INTEGER||9007199254740991;function tt(){}function nt(t,n){return 0===csString.prototype.lastIndexOf.call(t,n,0)}function it(t,n){return-1!==csString.prototype.indexOf.call(t,n,t.length-n.length)}var rt=34164e6,st={percentage:boolean:integer:,et="function"==typeof Symbol?Symbol("json"):null;var ut,ot,ht=et?csJSON.stringify,ct=),at=);!function(t){t.debug="debug",t.warn="warn",t.error="error",t.critical="critical"}(ut||(ut={})),ot||(ot={}));var ft=),vt=ft),lt=),dt=/[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,wt=/[a-zA-Z0-9+_-](?:@|%40|%2540)/,yt="([-A-Za-z0-9+/=_]|=[^=]|={3,})+",pt=new RegExp("(ey".concat(yt,"\\.ey").concat(yt,"\\.").concat(yt,")"),"g"),mt=/[0-9]{4}/,gt=/(^|[^a-zA-Z0-9*.,-])([45*][0-9*]{3}([ -]?)[0-9*]{4}\3[0-9*]{4}\3[0-9*]{4})($|[^a-zA-Z0-9*.,-])/g,At=),St="13.83.0";ar bt=function(){return void 0!==window.performance&&window.performance.now?window.performance.timing.navigationStart+Math.round(window.performance.now()):csDate.now()}; Ot=);ction _t(t){return"object"==typeof t}ction Lt(t){return t instanceof Element}r jt,Ht,qt="snippet-",zt="implementation-snippet-";!function(t){t.IMPLEMENTATION="implementation",t.DYNAMIC="dynamic"}(jt||(jt={})),function(t){t[t.debug=0]="debug",t[t.warn=1]="warn",t[t.error=2]="error",t[t.critical=3]="critical"}(Ht||(Ht={}));var Bt=),Vt="undefined"==typeof window,Ft="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:process;ar Wt=!Vt&&document.createElement("a"),Jt=/(:443|:80)$/;t,tn,nn,rn,sn="CS_IFRAME_MESSAGE";!function(t){t.AfterPageView="afterPageView",t.GetSessionKey="getSessionKey"}(Qt||(Qt={})),function(t){t.Parent="parent",t.Child="child"}(tn||(tn={})),nn||(nn={})),rn||(rn={}));var en=),un=),on=["t.contentsquare.net","clicktale"];window.addEventListener("error",();var hn=),cn={debug:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},warn:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},error:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},critical:;var an,fn,vn,ln,dn=!an||(an={})),fn||(fn={})),function(t){t.None="None",t.Lax="Lax",t.NotSet="X"}(vn||(vn={})),function(t){t[t.Yes=1]="Yes",t[t.No=0]="No"}(ln||(ln={}));var wn=),yn="_cs_t",pn=);var mn,gn=),An=),Sn=);!function(t){t.UNCOMPRESSED="0",t.GZIP="2"}(mn||(mn={}));var En,bn,Rn,Nn=function(t){this.onError=t},Tn=),On=),In=),Cn="_cs_id",kn=/^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?(\.[0-1])?$/,_n=);!En||(En={})),function(t){t.ETR_OFF="0",t.ETR_ON="1"}(bn||(bn={})),function(t){t.ETR_LEGACY="0",t.ETR_SESSION="1",t.ETR_PAGE="2"}(Rn||(Rn={}));var xn,Pn="_cs_s",Mn=18e5,Ln=/^(\d+\.[013567TBW](\.[01])?)(\.\d+)?$/,Dn=".";!function(t){t[t.NOT_FOUND=0]="NOT_FOUND",t[t.EXPIRED=1]="EXPIRED",t[t.FOUND=2]="FOUND"}(xn||(xn={}));var Un,jn=);!Un||(Un={}));var Hn,qn="_cs_ex",zn=2592e6,Bn=/^[0-9]+$/,Vn=),Fn="_cs_cvars",Gn=);!Hn||(Hn={}));var Wn,Jn,Yn,Xn,$n=),Kn=);!Wn||(Wn={})),Jn||(Jn={})),Yn||(Yn={})),Xn||(Xn={}));function Zn(t,n){void 0===n&&(n=true),t.boundElement.addEventListener(t.type,t.listener,n)}r ni=ar ri=bject.create;bject.create;"function"==typeof SuppressedError&&SuppressedError;ar oi,hi,ci=!oi||(oi={})),function(t){t[t.COPY=0]="COPY",t[t.CUT=1]="CUT",t[t.PASTE=2]="PASTE"}(hi||(hi={}));var ai=),fi=50,vi=.1;var li=!1;var di=[],wi=[];var yi=pi=.enabled=!0;var Ai,Si=!!window.chrome,Ei="data-cs-scroll-container";!Ai||(Ai={}));var bi=);i=Gt("queueMicrotask",setTimeout),ki=[];r Pi,Mi=),Li=),Di=),Ui=),ji=),Hi=),qi=),zi=),Bi=),Vi=),Fi=),Gi=),Wi=Gi);!Pi||(Pi={}));var Ji=),Yi=0;i.asyncIterator="$$asyncIterator";var $i,Ki=Gt("Symbol",Xi),Zi=Qi=null!==($i=window.queueMicrotask)&&void 0!==$i?$i:setTimeout;Zi.isScheduled=var tr=);r rr,sr,er,ur=function(t){return t};||(rr={})),sr||(sr={}));var ar,fr=null!==(er=Ft.Node)&&void 0!==er?er:Object;!ar||(ar={}));var vr=),lr=tr);var dr,wr,yr,pr=Ft.ShadowRoot?lr:Ft.csMutationObserver;r Ar=null!==(wr=Ft.Node)&&void 0!==wr?wr:{},Sr=null!==(yr=Ft.NodeFilter)&&void 0!==yr?yr:{},Er=((dr={})[2]=Sr.SHOW_ATTRIBUTE,dr[4]=Sr.SHOW_CDATA_SECTION,dr[8]=Sr.SHOW_COMMENT,dr[11]=Sr.SHOW_DOCUMENT_FRAGMENT,dr[9]=Sr.SHOW_ALL,dr[10]=Sr.SHOW_DOCUMENT_TYPE,dr[1]=Sr.SHOW_ELEMENT,dr[Ar.ENTITY_NODE]=Sr.SHOW_ENTITY,dr[Ar.ENTITY_REFERENCE_NODE]=Sr.SHOW_ENTITY_REFERENCE,dr[Ar.NOTATION_NODE]=Sr.SHOW_NOTATION,dr[7]=Sr.SHOW_PROCESSING_INSTRUCTION,dr[3]=Sr.SHOW_TEXT,dr),br=),Rr=Gi),Nr=Hi),Tr=Hi),Or=/[^\s]/g;function Ir(t){return csString.prototype.replace.call(t,Or,"a")}var Cr,kr,_r,xr,Pr=),Mr=),Lr="data-cs-mask",Dr=),Ur=null!==(Cr=Ft.Element)&&void 0!==Cr?Cr:{prototype:{}},jr=null!==(kr=Ft.Node)&&void 0!==kr?kr:{prototype:{}},Hr=qr=null!==(_r=Hr(Ur))&&void 0!==_r?_r:Hr(jr);!function(t){t[t.WebElement=0]="WebElement",t[t.MobileView=1]="MobileView",t[t.WebViewContainer=2]="WebViewContainer"}(xr||(xr={}));var zr=var Br=zr),Vr=["id","class","style","src","srcset","sizes","href","rel","type","width","height","media","align","dir","bgcolor","color","border","colspan","rowspan","cols","rows","size","start","slot",D],Fr=),Gr=);r Yr=),Xr=),$r=Hi);var Kr=/(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\))/g;function ts(t){return Nt(t,"data:"ar ss,e}();!function(t){t.REQUEST_START="requestStart",t.DOM_INTERACTIVE="domInteractive",t.TIME_ORIGIN="timeOrigin"}(ss||(ss={}));var u}(),o}(Hi),h}(os),c}(}var fs,v}(),l}();!function(t){t.VisibleInViewPort="VisibleInViewPort",t.VisibleOutsideViewPort="VisibleOutsideViewPort",t.HiddenByAnother="HiddenByAnother",t.Hidden="Hidden"}(fs||(fs={}));var ds,ws={delay:1e3,trackOnce:!0}}(ds||(ds={}));var y}();ys.init();var p}(),m}(),g}(ar bs,Rs,N}();!function(t){t[t.TAP=0]="TAP",t[t.LONG_PRESS=1]="LONG_PRESS",t[t.DRAG=2]="DRAG",t[t.FLICK=3]="FLICK",t[t.PINCH_IN=4]="PINCH_IN",t[t.PINCH_OUT=5]="PINCH_OUT"}(bs||(bs={})),function(t){t[t.UP=1]="UP",t[t.DOWN=2]="DOWN",t[t.LEFT=3]="LEFT",t[t.RIGHT=4]="RIGHT"}(Rs||(Rs={}));var T}(),O}(zr),I},Cs=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=3,i}return J(n,t),n}(zr),ks=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=4,i}return J(n,t),n}(zr),_}(zr),x}(zr),P}(zr),M}(),L}(}var U}();function js(t){return"artificial"in }var qs,zs,Bs={taskTime:25},V}(Ls),F}(Ls),G}(),W}();!function(t){t.replayRecordingUnmaskedUrlRegex="replayRecordingUnmaskedUrlRegex",t.replayRecordingMaskedUrlRegex="replayRecordingMaskedUrlRegex",t.replayRecordingUnmaskedUrlRegexRules="replayRecordingUnmaskedUrlRegexRules",t.replayRecordingMaskedUrlRegexRules="replayRecordingMaskedUrlRegexRules"}(qs||(qs={})}(zs||(zs={}));var Js,Y}(),X}(),$}(),K}();!function(t){t[t.NOT_STARTED=0]="NOT_STARTED",t[t.OPEN_IN_PROGRESS=1]="OPEN_IN_PROGRESS",t[t.OPEN_FAILED=2]="OPEN_FAILED",t[t.READY=3]="READY"}(Js||(Js={}));var Zs,Qs,te,ne,i}(),r}();!function(t){t.PORTRAIT="Portrait",t.LANDSCAPE="Landscape"}(Zs||(Zs={})}(Qs||(Qs={})}(te||(te={})}(ne||(ne={}));var se,e}(),u}()}(se||(se={}));var o}(Hi),h}(),c};var ae,fe,ve,l}(),d}(),w}(),ye=(ae=Ft.Element,window.csElementmatches||window.csElementmatchesSelector||window.csElementmozMatchesSelector||window.csElementmsMatchesSelector||window.csElementoMatchesSelector||window.csElementwebkitMatchesSelector),p,t}(),me="v2/recording",ge=["setCapturedElementsSelector"],Ae=["setPIISelectors"],Se=["isRecording"],Ee=["replay:resourceManager:enableForOnlineResource:nextPageviewOnly","cssrm:onlineAssets:activateForNextPageview"],be=["replay:resourceManager:getStatus","cssrm:getStatus"],t}();!function(t){t[t.NOT_NEEDED=1]="NOT_NEEDED",t[t.NOT_EXPRESSED=2]="NOT_EXPRESSED",t[t.WITHDRAWN=3]="WITHDRAWN",t[t.GRANTED=4]="GRANTED"}(fe||(fe={N}}(ve||(ve={}));var,t}(),t}(),t}(),t}();var Ce,ke,t}(),t}(),Pe=["afterPageView"],Me=["getSessionKey"],Le=["onRecordingStateChange"],De=["replay:link:generate"],t}(),t}(),n}(Hi),t}(),ze=["trackDynamicVariable"],t}(),t}(),t}(),t}(),t}(),Je=["ecommerce:addToCart","ec:cart:add"],Ye=["ecommerce:addTransaction","ec:transaction:create"],Xe=["ecommerce:addItem","ec:transaction:items:add"],$e=["ecommerce:send","ec:transaction:send"],t}(),tE"}(Ce||(Ce={t"}(ke||(ke={}));var tu,t}(),t}(),n}(iu),t}}}}(tu||(tu={}));var eu,uu,ou,hu,cu,au,n}(iu),n}(iu),t}(),t}(),t}(),t}(),t}(),t}(),gu=-10)}0]}|0}r}}{}})}}))}0)})}},Cu=-1:0}))},xu=function(){addEventListener("visibilitychange",_u,!0),addEventListener("prerenderingchange",_u,!0)}0)}}}}()},Du=[1800,3e3]))},ju=[.1,.25],Hu={passive:!0,capture:!0},qu=new Date))}]}})}}))},Gu=[100,300],Wu=0,Ju=1/0,Yu=0))}|0}))},Zu=[200,500],Qu=0Qu},no=[],io={})}},so=[2500,4e3],eo={},uo=[800,1800]0)}))},t}(),t}(),fo="v2/events",vo=["submit"],t}();!function(t){t.Artificial="a",t.Renewal="r",t.Natural="n"}(au||(au={}));var,n}(Hi),yo=window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage||window.navigator.systemLanguage||"unknown";function po(){return{la:yo}}var mo,t}(),t}(),So=["trackPageview"],Eo=["setPath"],bo=["setQuery"],Ro=["referrer:maskUrl"],No=["referrer:removeQueryString"],To=["referrer:keepQueryString"],t}(),t}(),t}(),t}(),_o=["clearSession"],xo=["extendSession"],Po=["getSessionData"],Mo=["session:start:newVisitor"],Lo=["session:clear:visitor"],t}(),tS"}(mo||(mo={}));var Ho,t})}}(Ho||(Ho={}));var zo,t}(),Vo="@user-identifier@",n}(Hi),Go=["trackPageEvent"],Wo=["trackEventTriggerRecording"],t}(),t}sis}}(zo||(zo={}));vull),n}(Yo),$o=document.createElement)),!1}}var Zo,Qo=["#c1_card_info_id"];!function(t){t[t.Sensitive=1]="Sensitive",t[t.SensitiveChild=2]="SensitiveChild"}(Zo||(Zo={}));va}))},ror",())},me)},n}="…",d 0})"'"))Rs.UPength.DRAG},n.zd=5,top()_OFF},nullull:n))}))},,nuller(t)},.bw=20,n}(Hi),Ah=["api-errors:maskUrl"];!function(t){t.CONTENTSQUARE="contentsquare.net",t.CLICKTALE="clicktale.net",t.FAKE_TRACKER="fake-tracker.content-square.fr"}(th||(th={}));top()=i}))rvice",n}(Hi),Nh=["trackEtop()s.Lw}},t}(),Ih=function(){function t(t){this.Nr=t}return t.prototype.onAfterVisitorRenewal=function(){this.Nr.startNewSession()},t}(),Ch=fstart()}}return t.prototype.start=function(){var t,n,i,r,s,e,u,o,h,c,a,f,v,l,d,w,y=this;(this.Uw.init(),this.jw.init(),this.jw.isActive())||(this.Le.w=new Co})),this.L.apiErrors.enabled&&this.Le.tener(u)})),this.L.jsErrorsEnabled&&this.Le.tener(t)})),this.Le.schedule((function(){y.Hw.init()})),this.Le.schedule((function(){i.init()})),this.Le.schedule((function(){n.init()})),this.Le.schedule((function(){r.init()})),this.Le.schedule((function(){y.zw.init()})),this.Le.schedule((function(){y.Fw.init()})),this.Le.schedule((function(){s.init()})),this.Le.schedule((function(){e.init()})),this.Le.schedule((function(){u.init()})),this.Le.schedule((function(){y.qw.init()})),this.Le.schedule((function(){o.init()})),this.Le.schedule((function(){h.init()})),this.Le.schedule((function(){y.Bw.init()})),this.Le.tener(w)})),Xs.isRecordingSupported()&&this.Le.Service)})),this.Le.schedule((function(){t.init()})),this.Le.),y.Ww()})))},t.prois.Vw(t)()&hhh",n)}}(Sh||(Sh={}));torGRANTED"}(_h||(_h={}));s.yy)s.ky)ge())rs,t),null),n}(Uh),HhTHDRAWN"}(Ph||(Ph={}));n()))rt()}},t}(),Vh=["replay:consent:unanonymized:granted","trackConsentGranted"],Fh=["replay:consent:unanonymized:withdrawn","trackConsentWithdrawn"],Gh=["replay:consent:startForSession:granted"],Wh=["replay:consent:startForSession:withdent()t())}art()qn)>0ion()},t}();!function(t){t.SessionReplay="SR",t.None=""}(qh||(qh={}));Hy()}},t}(),tc=["excludeURLforRen)}))},t}(),ic="_cic)>0},t}(),sc="_cs_ot,rt)sc)>0},t}(),oc=["op()rn i||r}}(Zh||(Zh={}()}))top()},t}();var vc;!function(t){t.UXA="_uxa",t.WVT="cs_wvt"}(vc||(vc={}));,i)}}},n}(Hi),wc="contentsqu"remove"}(lc||(lc={},nullat(n)))),nn)oncat(rl()}t(t)}},,null),t}(),Rc="|ifr(t)&i(r),ing(i(t)}))}}varing()},_c(t)},t}(),Pc=function(){function t(){}return t.prototype.setItem=function(t,n){window.sessionStorage.setItem(t,n)},t.prototype.getItem=function(t){return window.sessionStorage.getItem(t)},t.prototype.removeItem=function(t){window.sessionStorage.removeItem(t)em(t)},t}(),Lc=["visit",2],Dc=["page",3],Uc=["nextPageOnfy(c)},t}(),Hc=["setCustomVariage()tm=":,"#")k)),nands}s:r})type)rn(n),nulltop()))}stener=a}(Cc|ge(t,n)}}(kc||(kc={}));var Kc,Zc=window.CSFrameCommunicati,null,nuify(t))}}(Kc||(Kc={}));varog(r)},t}();try{var sa=new ct(window.CS_CONF);window._uxa=window._uxa||[],sa.processOptionOverrides(window._uxa);var ea=new at(window,sa);ea.init();var ua=new un;if(cn=hn,hn.computeIsActive(sa.validationRate),ea.isTopWindowTracker()){var oa=new Bt(sa,ua);hn.setStrategy(oa)}else if(ea.isInIframeContext()){var ha=new en(sa);hn.setStrategy(ha)}else if(ea.isInWebViewContext()){var ca=new ra;hn.setStrategy(ca)}void 0===na&&(na=50),void 0===ia&&(ia=.1),li=hn.isPerfLoggingure(n,i)}(),li&&(fi=na,vi=ia),new ta(sa,ea,ua).start()}catch($i){}}();