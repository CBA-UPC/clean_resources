var CS_CONF={"projectId":2376,"status":1,"hostnames":["shaw.ca","shawdirect.ca","shawbusiness.ca","postclickmarketing.com","force.com","qualtrics.com","www.shaw.ca","my.shaw.ca","my.shawdirect.ca","www.shawdirect.ca","signin.shaw.ca","register.shaw.ca","register.sahwdirect.ca","shawmobile.ca","business.shaw.ca"],"crossDomainTracking":0,"crossDomainSingleIframeTracking":0,"consentRequired":0,"allowSubdomains":1,"visitorCookieTimeout":34164000000,"sampleRate":100,"replayRecordingRate":100,"validationRate":10,"lastTrackingDraw":1585076183,"trackerDomain":"c.contentsquare.net","recordingDomain":"r.contentsquare.net","useMalkaPipeline":1,"ed":"l.contentsquare.net/log/web","eMerchandisingEnabled":0,"mouseMoveHeatmapEnabled":1,"autoInsightsEnabled":1,"jsErrorsEnabled":1,"customErrorsEnabled":1,"jsCustomErrorsEnabled":0,"apiErrorsEnabled":1,"customHashIdEnabled":1,"recordingEncryptionEnabled":0,"recordingEncryptionPublicKey":null,"recordingEncryptionPublicKeyId":0,"secureCookiesEnabled":0,"triggerSessionReplayEnabled":0,"triggerSessionReplayRegex":null,"dynamicIdRegex":null,"whitelistedAttributes":[],"replayRecordingUnmaskedUrlRegex":null,"replayRecordingUnmaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegex":null,"anonymisationMethod":null,"tagDeploymentMode":"DUAL_COLLECTION","experimental":null,"iframesTracking":0,"textVisibilityEnabled":1,"cookielessTrackingEnabled":0,"malkaUrlEnabled":0,"malkaEtrEnabled":1,"pathComputationRules":{"reliableSelectors":[],"uniqueAttributes":[],"uniqueCssSelectors":[]},"asyncSerializerEnabled":1,"pendingInactivityTimeout":5000,"accessibilityEnabled":0,"uxaDomain":"app.contentsquare.com","webviewsTrackingEnabled":0,"useStaticResourceManager":1,"performanceTimingOptions":{"withResource":false,"withNavigation":false},"replayConsentRequiredForSession":0,"apiErrors":{"validCustomHeaders":[],"plainCustomHeaders":[],"validUrls":[],"configurableApiErrorRules":[],"collectStandardHeaders":0,"collectQueryParam":0,"collectRequestBody":0,"collectResponseBody":0,"collectionRules":[]},"customErrors":{"consoleMessageLogLevels":[]},"displayAdOptions":null,"taskSchedulerOptions":{"enabled":1},"malkaQuotaServiceDomain":"q-aus1.contentsquare.net","malkaRecordingDomain":"k-aus1.contentsquare.net","staticResourceManagerDomain":"srm.bf.contentsquare.net","dualCollectionTagDomain":"contentsquare.net","ptcDomain":"ct.contentsquare.net","ptcPartition":null,"ptcGuid":"b829dc86-7600-47e9-8cf6-4eb0c3528c7a"};
var CS_INTEGRATIONS_CONF = {"livechat":{},"optimizely":{},"qualtrics":{}};
/* integration-livechat 3.5.0 */
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-livechat-cap","version":"3.5.0","scripts":{"build:snippet":"webpack"}}')},function(e,t,n){"use strict";function i(e,t){try{e()}catch(e){window._uxa=window._uxa||[],_uxa.push(["logSnippetError",t,e.message])}}function a(e){return"object"==typeof e&&null!==e}function r(e,t,n){if((n=n||window)&&t&&e){var i=!1,a=n[e];a?t():Object.defineProperty(n,e,{configurable:!0,enumerable:!0,get:function(){return a},set:function(e){a=e,i||(i=!0,t())}})}}.r(t);var u,c=n(0),s=c.name,d=c.version,f=function(e){var t,n,a,r;if(i((function(){var i=e.name;a=e.version;var o=i.replace("@contentsquare/integration-","");t=o+"-"+a;var u="-contentsquare";r=new RegExp(u+"$").test(o),n=o.replace(/-contentsquare([^-contentsquare]*)$/,"$1"),r||(u="-cap",r=new RegExp(u+"$").test(o),n=o.replace(/-cap([^-cap]*)$/,"$1"))}),"Shared-Function-readPackageJSON"),r)return{snippetBuildName:t,parameterName:n,snippetVersion:a}}(c);f&&(u=f.parameterName,s=f.snippetBuildName,d=f.snippetVersion),i((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("LiveChat - v"+d);var e=function(e,t){if(a(window.CS_INTEGRATIONS_CONF)&&a(window.CS_INTEGRATIONS_CONF[e]))return window.CS_INTEGRATIONS_CONF[e][t]}(u,"settings"),t=!1,n="";e&&(e.indexOf("sendArtificialPageviews")>-1&&(t=!0),e.indexOf("setReplayLinkToFirstPV")>-1&&(n=0));var r=!1;function c(e,n,i,a){e="CH_LC_"+e,_uxa.push(["trackDynamicVariable",{key:e,value:n}]),r&&"etr"===i&&_uxa.push(["trackEventTriggerRecording","@ETS@"+e]),a&&t&&_uxa.push(["trackPageview",window.location.pathname+"?"+a])}function f(e){function t(){setTimeout((function(){i((function(){LiveChatWidget.on("ready",(function(e){i((function(){if(LiveChatWidget.call&&(r=_uxa.push(["isRecording"]))){var e="lc",n);e&&LiveChatWidget.call("update_session_variables",{"Contentsquare Replay":e})}LiveChatWidget.on("customer_status_changed",(function(e){i((function(){var t=e.status;if(t)if("invited"===t)c("Invited To Chat (All Chats)","true",0,"cs_livechat=invited_to_chat");else if("chatting"===t){if(LiveChatWidget.get){var n=LiveChatWidget.get("customer_data").id,i=LiveChatWidget.get("chat_data").chatId;c("Chat Visitor ID",n),c("Chat ID",i)}c("Chat Started (All Chats)","true","etr","cs_livechat=chat_started")}else"browsing"===t&&c("Chat Ended (All Chats)","true",0,"cs_livechat=chat_ended")}),s)})),LiveChatWidget.on("rating_submitted",(function(e){i((,s)}))}),s)}))}),s)}),500)}o("LiveChatWidget",()}var p=!1;_uxa.push(["afterPageView",)}),s)}]);/* integration-optimizely 2.6.3 */
!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-optimizely-cap","version":"2.6.3","scripts":{"build:snippet":"webpack"}}')},);/* integration-qualtrics 2.19.0 */
![function(e,t,n){"use strict";(t);var r,s=n(0),c=s.name,u=s.version,d=s);d&&(r=d.parameterName,c=d.snippetBuildName,u=d.snippetVersion),i((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("Qualtrics - v"+u);var e=!1;window.self!=window.top&&(e=CS_CONF.iframesTracking);var t=r,"settings"),n=!1,s=1;t&&(t.indexOf("sendArtificialPageviews")>-1&&(n=!0),t.indexOf("setReplayLinkToFirstPV")>-1&&(s=0));var d=!1;ndow.Qualtrics&&Qualtrics.SurveyEngine&&"function"==typeof Qualtrics.SurveyEngine.addOnPageSubmit){if(!e){var g="";if(window._cs_integration_qualtrics_postmessage_csid||window.ClickTaleSettings&&ClickTaleSettings.PTC&&ClickTaleSettings.PTC.IntegrationHandler&&ClickTaleSettings.PTC.IntegrationHandler.UserValues)window._cs_integration_qualtrics_postmessage_csid?g=_cs_integration_qualtrics_postmessage_csid:ClickTaleSettings.PTC.IntegrationHandler.UserValues&&(g=ClickTaleSettings.PTC.IntegrationHandler.UserValues);else{var m=document.location.search;m.indexOf("CSID=")>-1?g=o("CSID"):CS_CONF.ptcDomain&&m.indexOf("CT_UID=")>-1?g=o("CT_UID"):window._cs_integration_qualtrics_csid&&(g=decodeURIComponent(_cs_integration_qualtrics_csid))}if(g&&"null"!=g){var v=g.split("~"),y=v[0],I=v[1],b=v[2],C=v[3],D=p();y&&I&&b&&(C?document.cookie="_cs_optout="+C+";domain="+D+";path=/;SameSite=None;Secure":(document.cookie="_cs_optout=;domain="+D+";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure",document.cookie="_cs_optout=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure",document.cookie="_cs_optout=;domain=."+document.location.host+";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure"),document.cookie="_cs_id="+y+";domain="+D+";path=/;SameSite=None;Secure",document.cookie="_cs_s="+I+";domain="+D+";path=/;SameSite=None;Secure",document.cookie="_cs_c="+b+";domain="+D+";path=/;SameSite=None;Secure")}}var w="";f(window.Page?w=!1:window.q&&(w=!0),_uxa.push(["afterPageView",),window.addEventListener("Contentsquare_QT_Integration_Dispatcher",(),!1===w&&"function"==typeof Page.getSessionId&&Page.runtime&&Page.runtime.ED&&Page.runtime.ED.SurveyID&&Page._questionRenderers&&Qualtrics.SurveyEngine.QuestionInfo){var k=Page.runtime.ED.SurveyID,T=Page.getSessionId().replace("FS_","R_");l("Feedback Displayed","Survey ID : "+k);var O=!1,x=!1,N=!1,E=[];),Qualtrics.SurveyEngine.addOnPageSubmit(F)}else if(!0===w&&q.appData&&q.appData.setup&&q.appData.setup.survey&&q.appData.setup.survey.id&&q.appData.session&&q.appData.session.id){k=q.appData.setup.survey.id,T=q.appData.session.id.replace("FS_","R_");l("Feedback Displayed","Survey ID : "+k);N=!1;ualtrics.SurveyEngine.addOnPageSubmit(F)}}else if(!e){ar Q;ndow.addEventListener("message",(function(e){var t=e.data;t&&(t.contentsquare_integration&&"qualtrics"===t.vendor&&i((function(){var e=t.contentsquare_integration;if(window.CS_CONF&&CS_CONF.allowSubdomains){var n=p();document.cookie="_cs_s="+S(e)+";domain="+S(n)+";path=/"}else document.cookie="_cs_s="+S(e)+";path=/";A()}),c),t.message&&"Contentsquare_QT_Integration_Ready"===t.message&&i((,c))})),_uxa.push(["afterPageView",)}}),c)}]);!function(){"use strict";var t={d:o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r:,n={};t.r(n),t.d(n,{getRequestParameters:function(){return $u}});var i="cs-native-frame",r={navigatorProperties:[{propertyName:"sendBeacon",binding:navigator}],nodeProperties:["childNodes","parentNode","nextSibling","firstChild"],elementProperties:["shadowRoot"],elementPropertiesValues:["matches","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],eventProperties:["target"],imageProperties:["src"],constructors:{Date:"csDate",JSON:"csJSON",Array:"csArray",String:"csString",URL:"csURL",MutationObserver:"csMutationObserver",screen:"csScreen"}};))try{s(window)}catch(Hs){o("Critical","failed to copy references from window: ".concat(Hs.message))}nction a(t){return 1===t.nodeType}function f(t){return 3===t.nodeType}function v(t){return a(t)&&"source"===t.localName}unction d(t){return a(t)&&"a"===t.localName}unction y(t){return a(t)&&"img"===t.localName}function p(t){return a(t)&&"style"===t.localName}function m(t){return a(t)&&"input"===t.localName}function g(t){return a(t)&&"textarea"===t.localName}function S(t){return a(t)&&"script"===t.localName}["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"];var I="detached";unction k(t){return B.isValidElement(t)}var _=window.csElementmatches||window.csElementmatchesSelector||window.csElementmozMatchesSelector||window.csElementmsMatchesSelector||window.csElementoMatchesSelector||window.csElementwebkitMatchesSelector,x=9;ar M=[/\d{4}/,/^ember\d+$/],L="@",D="data-cs-override-id",U="data-cs-dynamic-id";B,V=11;||(B={})),window.CSPathComputation=window.CSPathComputation||B;var W=function(t,n){return W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},W(t,n)};function Y(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}W(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var J=function(){return J=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t},J.apply(this,arguments)};function X(t,n,i,r){var e,s=arguments.length,u=s<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,i,r);else for(var o=t.length-1;o>=0;o--)(e=t[o])&&(u=(s<3?e(u):s>3?e(n,i,u):e(n,i))||u);return s>3&&u&&Object.defineProperty(n,i,u),u}ject.create;function Z(t,n,i){if(i||2===arguments.length)for(var r,e=0,s=n.length;e<s;e++)!r&&e in n||(r||(r=Array.prototype.slice.call(n,0,e)),r[e]=n[e]);return t.concat(r||Array.prototype.slice.call(n))}Object.create;var Q=Number.MAX_SAFE_INTEGER||9007199254740991;function tt(){}function nt(t,n){return 0===csString.prototype.lastIndexOf.call(t,n,0)}var it=34164e6,rt={percentage:boolean:integer:,et="function"==typeof Symbol?Symbol("json"):null;var st,ut,ot=et?csJSON.stringify,ht=),ct=);!function(t){t.debug="debug",t.warn="warn",t.error="error",t.critical="critical"}(st||(st={})),ut||(ut={}));var at=),ft=at),vt=),lt=/[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,dt=/[a-zA-Z0-9+_-](?:@|%40|%2540)/,wt="([-A-Za-z0-9+/=_]|=[^=]|={3,})+",yt=new RegExp("(ey".concat(wt,"\\.ey").concat(wt,"\\.").concat(wt,")"),"g"),pt=/[0-9]{4}/,mt=/(^|[^a-zA-Z0-9*.,-])([45*][0-9*]{3}([ -]?)[0-9*]{4}\3[0-9*]{4}\3[0-9*]{4})($|[^a-zA-Z0-9*.,-])/g,gt=),St="13.83.0";function At(){return{v:St}}var Et=function(){return void 0!==window.performance&&window.performance.now?window.performance.timing.navigationStart+Math.round(window.performance.now()):csDate.now()}; Tt=);ction kt(t){return"object"==typeof t}ction Mt(t){return t instanceof Element}r Ut,jt,Ht="snippet-",qt="implementation-snippet-";!function(t){t.IMPLEMENTATION="implementation",t.DYNAMIC="dynamic"}(Ut||(Ut={})),function(t){t[t.debug=0]="debug",t[t.warn=1]="warn",t[t.error=2]="error",t[t.critical=3]="critical"}(jt||(jt={}));var zt=),Bt="undefined"==typeof window,Vt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:process;ar Gt=!Bt&&document.createElement("a"),Wt=/(:443|:80)$/;t,Qt,tn,nn,rn="CS_IFRAME_MESSAGE";!function(t){t.AfterPageView="afterPageView",t.GetSessionKey="getSessionKey"}(Zt||(Zt={})),function(t){t.Parent="parent",t.Child="child"}(Qt||(Qt={})),tn||(tn={})),nn||(nn={}));var en=),sn=),un=["t.contentsquare.net","clicktale"];window.addEventListener("error",();var on=),hn={debug:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},warn:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},error:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},critical:;var cn,an,fn,vn,ln=!cn||(cn={})),an||(an={})),function(t){t.None="None",t.Lax="Lax",t.NotSet="X"}(fn||(fn={})),function(t){t[t.Yes=1]="Yes",t[t.No=0]="No"}(vn||(vn={}));var dn=),wn="_cs_t",yn=);var pn,mn=),gn=),Sn=);!function(t){t.UNCOMPRESSED="0",t.GZIP="2"}(pn||(pn={}));var An,En,bn,Rn,Nn=function(t){this.onError=t},Tn=),On=),In=);!An||(An={})),function(t){t[t.RECORDING_CONSENT_FOR_SESSION_GRANTED=1]="RECORDING_CONSENT_FOR_SESSION_GRANTED",t[t.RECORDING_CONSENT_FOR_SESSION_WITHDRAWN=2]="RECORDING_CONSENT_FOR_SESSION_WITHDRAWN"}(En||(En={})),bn||(bn={})),function(t){t[t.SWIPE=0]="SWIPE",t[t.PINCH_IN=1]="PINCH_IN",t[t.PINCH_OUT=2]="PINCH_OUT",t[t.LONG_PRESS=3]="LONG_PRESS",t[t.TAP=4]="TAP",t[t.DOUBLE_TAP=5]="DOUBLE_TAP"}(Rn||(Rn={}));function Cn(t,n){void 0===n&&(n=true),t.boundElement.addEventListener(t.type,t.listener,n)}r xn=ar Mn=bject.create;bject.create;"function"==typeof SuppressedError&&SuppressedError;ar jn,Hn,qn=!jn||(jn={})),function(t){t[t.COPY=0]="COPY",t[t.CUT=1]="CUT",t[t.PASTE=2]="PASTE"}(Hn||(Hn={}));var zn=),Bn=50,Vn=.1;var Fn=!1;var Gn=[],Wn=[];var Yn=Jn=.enabled=!0;var Kn,Zn=!!window.chrome,Qn="data-cs-scroll-container";!Kn||(Kn={}));var ti=);i=Ft("queueMicrotask",setTimeout),oi=[];r ai,fi,vi,li=),di=),wi=),yi=),pi=),mi=);!ai||(ai={})),function(t){t.ETR_OFF="0",t.ETR_ON="1"}(fi||(fi={})),function(t){t.ETR_LEGACY="0",t.ETR_SESSION="1",t.ETR_PAGE="2"}(vi||(vi={}));var gi,Si=),Ai=),Ei=),bi=),Ri=),Ni=),Ti=Ni);!gi||(gi={}));var Oi=),Ii=0;i.asyncIterator="$$asyncIterator";var ki,_i=Ft("Symbol",Ci),xi=Pi=null!==(ki=window.queueMicrotask)&&void 0!==ki?ki:setTimeout;xi.isScheduled=var Mi=);r Ui,ji,Hi,qi=function(t){return t};||(Ui={})),ji||(ji={}));var Fi,Gi=null!==(Hi=Vt.Node)&&void 0!==Hi?Hi:Object;!Fi||(Fi={}));var Wi=),Yi=Mi);var Ji,Xi,$i,Ki=Vt.ShadowRoot?Yi:Vt.csMutationObserver;r tr=null!==(Xi=Vt.Node)&&void 0!==Xi?Xi:{},nr=null!==($i=Vt.NodeFilter)&&void 0!==$i?$i:{},ir=((Ji={})[2]=nr.SHOW_ATTRIBUTE,Ji[4]=nr.SHOW_CDATA_SECTION,Ji[8]=nr.SHOW_COMMENT,Ji[11]=nr.SHOW_DOCUMENT_FRAGMENT,Ji[9]=nr.SHOW_ALL,Ji[10]=nr.SHOW_DOCUMENT_TYPE,Ji[1]=nr.SHOW_ELEMENT,Ji[tr.ENTITY_NODE]=nr.SHOW_ENTITY,Ji[tr.ENTITY_REFERENCE_NODE]=nr.SHOW_ENTITY_REFERENCE,Ji[tr.NOTATION_NODE]=nr.SHOW_NOTATION,Ji[7]=nr.SHOW_PROCESSING_INSTRUCTION,Ji[3]=nr.SHOW_TEXT,Ji),rr=),er=Ni),sr=mi),ur=mi),or=/[^\s]/g;function hr(t){return csString.prototype.replace.call(t,or,"a")}var cr,ar,fr,vr,lr=),dr=),wr="data-cs-mask",yr=),pr=null!==(cr=Vt.Element)&&void 0!==cr?cr:{prototype:{}},mr=null!==(ar=Vt.Node)&&void 0!==ar?ar:{prototype:{}},gr=Sr=null!==(fr=gr(pr))&&void 0!==fr?fr:gr(mr);!function(t){t[t.WebElement=0]="WebElement",t[t.MobileView=1]="MobileView",t[t.WebViewContainer=2]="WebViewContainer"}(vr||(vr={}));var Ar=var Er=Ar),br=["id","class","style","src","srcset","sizes","href","rel","type","width","height","media","align","dir","bgcolor","color","border","colspan","rowspan","cols","rows","size","start","slot",D],Rr=),Nr=);r Ir=),Cr=),kr=mi);var _r=/(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\))/g;function Mr(t){return Rt(t,"data:"ar jr,H}();!function(t){t.REQUEST_START="requestStart",t.DOM_INTERACTIVE="domInteractive",t.TIME_ORIGIN="timeOrigin"}(jr||(jr={}));var q}(),z}(mi),B}(zr),V}(}var Gr,W}(),Y}();!function(t){t.VisibleInViewPort="VisibleInViewPort",t.VisibleOutsideViewPort="VisibleOutsideViewPort",t.HiddenByAnother="HiddenByAnother",t.Hidden="Hidden"}(Gr||(Gr={}));var Jr,Xr={delay:1e3,trackOnce:!0}}(Jr||(Jr={}));var $}();$r.init();var K}(),Z}(),Q}(ar re,ee,s}()}(re||(re={})),function(t){t[t.UP=1]="UP",t[t.DOWN=2]="DOWN",t[t.LEFT=3]="LEFT",t[t.RIGHT=4]="RIGHT"}(ee||(ee={}));var u}(),o}(Ar),h},ce=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=3,i}return Y(n,t),n}(Ar),ae=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=4,i}return Y(n,t),n}(Ar),f}(Ar),v}(Ar),l}(Ar),d}(),w}(}var p}();function me(t){return"artificial"in }var Se,Ae,Ee={taskTime:25},b}(we),R}(we),N}(),T}();!function(t){t.replayRecordingUnmaskedUrlRegex="replayRecordingUnmaskedUrlRegex",t.replayRecordingMaskedUrlRegex="replayRecordingMaskedUrlRegex",t.replayRecordingUnmaskedUrlRegexRules="replayRecordingUnmaskedUrlRegexRules",t.replayRecordingMaskedUrlRegexRules="replayRecordingMaskedUrlRegexRules"}(Se||(Se={})}(Ae||(Ae={}));var Oe,I}(),C}(),k}(),_}();!function(t){t[t.NOT_STARTED=0]="NOT_STARTED",t[t.OPEN_IN_PROGRESS=1]="OPEN_IN_PROGRESS",t[t.OPEN_FAILED=2]="OPEN_FAILED",t[t.READY=3]="READY"}(Oe||(Oe={}));var xe,Pe,Me,Le,D}(),U}();!function(t){t.PORTRAIT="Portrait",t.LANDSCAPE="Landscape"}(xe||(xe={})}(Pe||(Pe={})}(Me||(Me={})}(Le||(Le={}));var je,H}(),q}()}(je||(je={}));var z}(mi),B}(),V};var Fe,Ge,We,Y}(),J}(),X}(),$e=(Fe=Vt.Element,window.csElementmatches||window.csElementmatchesSelector||window.csElementmozMatchesSelector||window.csElementmsMatchesSelector||window.csElementoMatchesSelector||window.csElementwebkitMatchesSelector),K,t}(),Ze="v2/recording",Qe=["setCapturedElementsSelector"],ts=["setPIISelectors"],ns=["isRecording"],is=["replay:resourceManager:enableForOnlineResource:nextPageviewOnly","cssrm:onlineAssets:activateForNextPageview"],rs=["replay:resourceManager:getStatus","cssrm:getStatus"],t}D"}(Ge||(Ge={N}}(We||(We={}));var,t}(),t}(),t}(),t}();var cs,as,t}(),t}(),ls=["afterPageView"],ds=["getSessionKey"],ws=["onRecordingStateChange"],ys=["replay:link:generate"],t}(),t}(),n}(mi),t}(),As=["trackDynamicVariable"],t}(),t}(),t}(),t}(),t}(),Os=["ecommerce:addToCart","ec:cart:add"],Is=["ecommerce:addTransaction","ec:transaction:create"],Cs=["ecommerce:addItem","ec:transaction:items:add"],ks=["ecommerce:send","ec:transaction:send"],t}(),tE"}(cs||(cs={})),function(t){t.SUCCESS="success",t.FAILURE="failure",t.ATTEMPT="attempt"}(as||(as={}));var Ms,t}(),t}(),n}(Ds),t}}}}(Ms||(Ms={}));var Hs,qs,zs,Bs,Vs,Fs,n}(Ds),n}(Ds),t}(),t}(),t}(),t}(),t}(),t}(),Qs=-10)}0]}|0}r}}{}})}}))}0)})}},cu=-1:0}))},vu=function(){addEventListener("visibilitychange",fu,!0),addEventListener("prerenderingchange",fu,!0)}0)}}}}()},yu=[1800,3e3]))},mu=[.1,.25],gu={passive:!0,capture:!0},Su=new Date))}]}})}}))},Nu=[100,300],Tu=0,Ou=1/0,Iu=0))}|0}))},xu=[200,500],Pu=0Pu},Lu=[],Du={})}},ju=[2500,4e3],Hu={},qu=[800,1800]0)}))},t}(),t}(),Gu="v2/events",Wu=["submit"],t}();!function(t){t.Artificial="a",t.Renewal="r",t.Natural="n"}(Fs||(Fs={}));var,n}(mi),Xu=window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage||window.navigator.systemLanguage||"unknou}}var Ku,t}(),t}(),to=["trackPageview"],no=["setPath"],io=["setQuery"],ro=["referrer:maskUrl"],eo=["referrer:removeQueryString"],so=["referrer:keepQueryString"],t}(),t}(),t}(),t}(),ao=["clearSession"],fo=["extendSession"],vo=["getSessionData"],lo=["session:start:newVisitor"],wo=["session:clear:visitor"],t}(),tS"}(Ku||(Ku={}));var go,t})}}(go||(go={}));var Ao,t}(),bo="@user-identifier@",n}(mi),No=["trackPageEvent"],To=["trackEventTriggerRecording"],t}(),t}sis}}(Ao||(Ao={}));vull),n}(Io),ko=document.createElement)),!1}}var xo,Po=["#c1_card_infChild"}(xo||(xo={}));va}))},ror",())},me)},n}="…",d 0})"'"))ee.UPength.DRAG},n.pd=5,top()_OFF},nullull:n))}))},,nuller(t)},.Xd=20,n}(mi),th=["api-errors:muare.fr"}(Mo||(Mo={}));top()=i}))rvice",n}(mi),sh=["trackEtopes=e),u}}(nh||(nh={}));cr+=1},top()s.pw}ion()},t}(),vh=fstart()}}return t.prototype.start=function(){var t,n,i,r,e,s,u,o,h,c,a,f,v,l,d,w,y=this;(this.gw.init(),this.Sw.init(),this.Sw.isActive())||(this.hs.w=new ho})),this.L.apiErrors.enabled&&this.hs.tener(u)})),this.L.customErrors.enabled&&this.hs.tener(t)})),this.L.jsErrorsEnabled&&this.hs.tener(t)})),this.hs.schedule((function(){y.Aw.init()})),this.hs.schedule((function(){i.init()})),this.hs.schedule((function(){n.init()})),this.hs.schedule((function(){r.init()})),this.hs.schedule((function(){y.bw.init()})),this.hs.schedule((function(){y.Tw.init()})),this.hs.schedule((function(){e.init()})),this.hs.schedule((function(){s.init()})),this.hs.schedule((function(){u.init()})),this.hs.schedule((function(){y.Ew.init()})),this.hs.schedule((function(){o.init()})),this.hs.schedule((function(){h.init()})),this.hs.w.init()})),this.hs.tener(w)})),Ce.isRecordingSupported()&&this.hs.Service)})),this.hs.t.init()})),this.hs.),y.Iw()})))},t.prois.Nw(t)()&hhh",n)}}(oh||(oh={}));tor()},t}(),yh="_cs_s",ph=18e5,mh=/^(\d+\.[013567TBW](\.[01])?)(\.\d+)?$/,gh=".";!function(t){t[t.NOT_FOUND=0]="NOT_FOUND",t[t.EXPIRED=1]="EXPIRED",t[t.FOUND=2]="FOUND"}(dh||(dh={}));st(GRANTED"}(Sh||(Sh={}));s.oy)s.Ny)ge())rs,t),null),n}(Th),Ih="_cs_c";!function(t){t[t.NOT_REQUIRED=0]="NOT_REQUIRED",t[t.NOT_EXPRESSED=1]="NOT_EXPRESSED",t[t.GRANTED=2]="GRANTED",t[t.WITHDRAWN=3]="WITHDRAWN"}(Eh||(Eh={}));n()))rt()}},t}(),xh=["replay:consent:unanonymized:granted","trackConsentGranted"],Ph=["replay:consent:unanonymized:withdrawn","trackConsentWithdrawn"],Mh=["replay:consent:startForSession:granted"],Lh=["replay:consent:startForSession:withdent()t())}art()},t}(),Hh="_cs_ex",qh=2592e6,zh=/^[0st(t)Hh)>0},t}(),Fh=function(){function t(t){this.va=t}return t.prototype.onOptout=function(){this.va.removeExclusion()},t}();!function(t){t.SessionReplay="SR",t.None=""}(Ch||(Ch={}My()}},t}(),Wh=["excludeURLforRen)}))},t}(),Jh="_cJh)>0},t}(),$h="_cs_ot,it)$h)>0},t}(),Qh=["op()}))top()},t}("cs_wvt"}(ic||(ic={},i)}}},))),nn)oncat(rl()}t(t)}},,null),t}(),ac="|ifr(t)&i(r),ing(i(t)}))}}varing()},pc(t)},t}(),gc=function(){function t(){}return t.prototype.setItem=function(t,n){window.sessionStorage.setItem(t,n)},t.prototype.getItem=function(t){return window.sessionStorage.getItem(t)},t.prototype.removeItem=function(t){window.sessionStorage.removeItem(t)em(t)},t}(),Ac="_cs_eof t},t}(),bc=["visit",2],Rc=["page",3],Nc=["nextPageOnfy(c)},t}(),Oc=["setCustomVariage()},t}(),Cc="_cs_id",kc=/^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?(\.[0-st(t)Op=":,"#")k)),nands}s:r})type)rn(n),nulltop()))}stener=a}(wc|ge(t,n)}}(yc||(yc={}));var Bc,Vc=window.CSFrameCommunicati,null,nuify(t))}}(Bc||(Bc={}));varog(r)},t}();try{var Xc=new ht(window.CS_CONF);window._uxa=window._uxa||[],Xc.processOptionOverrides(window._uxa);var $c=new ct(window,Xc);$c.init();var Kc=new sn;if(hn=on,on.computeIsActive(Xc.validationRate),$c.isTopWindowTracker()){var Zc=new zt(Xc,Kc);on.setStrategy(Zc)}else if($c.isInIframeContext()){var Qc=new en(Xc);on.setStrategy(Qc)}else if($c.isInWebViewContext()){var ta=new Jc;on.setStrategy(ta)}void 0===Wc&&(Wc=50),void 0===Yc&&(Yc=.1),Fn=on.isPerfLoggingure(n,i)}(),Fn&&(Bn=Wc,Vn=Yc),new Gc(Xc,$c,Kc).start()}catch(ki){}}();