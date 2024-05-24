var CS_CONF={"projectId":3150,"status":1,"hostnames":["nvidia.com","rainfocus.com","docs.nvidia.com"],"crossDomainTracking":0,"crossDomainSingleIframeTracking":0,"consentRequired":0,"allowSubdomains":1,"visitorCookieTimeout":34164000000,"sampleRate":100,"replayRecordingRate":20,"validationRate":10,"lastTrackingDraw":null,"trackerDomain":"c.contentsquare.net","recordingDomain":"r.contentsquare.net","useMalkaPipeline":1,"ed":"l.contentsquare.net/log/web","eMerchandisingEnabled":0,"mouseMoveHeatmapEnabled":0,"autoInsightsEnabled":1,"jsErrorsEnabled":1,"customErrorsEnabled":1,"jsCustomErrorsEnabled":0,"apiErrorsEnabled":1,"customHashIdEnabled":0,"recordingEncryptionEnabled":0,"recordingEncryptionPublicKey":null,"recordingEncryptionPublicKeyId":0,"secureCookiesEnabled":0,"triggerSessionReplayEnabled":0,"triggerSessionReplayRegex":null,"dynamicIdRegex":null,"whitelistedAttributes":[],"replayRecordingUnmaskedUrlRegex":"","replayRecordingUnmaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegexRules":[],"replayRecordingMaskedUrlRegex":"","anonymisationMethod":null,"tagDeploymentMode":"CONTENTSQUARE","experimental":null,"iframesTracking":1,"textVisibilityEnabled":0,"cookielessTrackingEnabled":0,"malkaUrlEnabled":0,"malkaEtrEnabled":0,"pathComputationRules":{},"asyncSerializerEnabled":1,"pendingInactivityTimeout":5000,"accessibilityEnabled":0,"uxaDomain":"app.contentsquare.com","webviewsTrackingEnabled":0,"useStaticResourceManager":1,"performanceTimingOptions":{"withResource":false,"withNavigation":false},"replayConsentRequiredForSession":0,"apiErrors":{"validCustomHeaders":[],"plainCustomHeaders":[],"validUrls":[],"configurableApiErrorRules":[],"collectStandardHeaders":0,"collectQueryParam":0,"collectRequestBody":0,"collectResponseBody":0,"collectionRules":[]},"customErrors":{"consoleMessageLogLevels":[]},"displayAdOptions":null,"taskSchedulerOptions":{"enabled":1},"malkaQuotaServiceDomain":"q-aeu1.contentsquare.net","malkaRecordingDomain":"k-aeu1.contentsquare.net","staticResourceManagerDomain":"srm.ba.contentsquare.net"};
var CS_INTEGRATIONS_CONF = {"adobe-target":{},"foresee":{},"usertesting":{}};
/* integration-adobe-target 3.5.5 */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-adobe-target-contentsquare","version":"3.5.5","scripts":{"build:snippet":"webpack"}}')},);/* integration-foresee 2.8.0 */
!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('{"name":"@contentsquare/integration-foresee-contentsquare","version":"2.8.0","scripts":{"build:snippet":"webpack"}}')},function(e,n,t){"use strict";function i(e,n){try{e()}catch(e){window._uxa=window._uxa||[],_uxa.push(["logSnippetError",n,e.message])}}function r(e){return"object"==typeof e&&null!==e}.r(n);var o,u=t(0),c=u.name,s=u.version,d=function(e){var n,t,r,a;if(i((function(){var i=e.name;r=e.version;var o=i.replace("@contentsquare/integration-","");n=o+"-"+r;var u="-contentsquare";a=new RegExp(u+"$").test(o),t=o.replace(/-contentsquare([^-contentsquare]*)$/,"$1"),a||(u="-cap",a=new RegExp(u+"$").test(o),t=o.replace(/-cap([^-cap]*)$/,"$1"))}),"Shared-Function-readPackageJSON"),a)return{snippetBuildName:n,parameterName:t,snippetVersion:r}}(u);d&&(o=d.parameterName,c=d.snippetBuildName,s=d.snippetVersion),i((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("Verint (ForeSee) - v"+s);var e=function(e,n){if(r(window.CS_INTEGRATIONS_CONF)&&r(window.CS_INTEGRATIONS_CONF[e]))return window.CS_INTEGRATIONS_CONF[e][n]}(o,"settings"),n=!1,t="";e&&(e.indexOf("sendArtificialPageviews")>-1&&(n=!0),e.indexOf("setReplayLinkToFirstPV")>-1&&(t=0));var u=!1;unction f(e){!"FSR",(function(){setTimeout((function(){i((function(){window.fsReady&&fsReady((function(){i((function(){if((u=_uxa.push(["isRecording"]))&&FSR.CPPS&&FSR.CPPS.set){var e="fs",t);e&&FSR.CPPS.set("ContentsquareReplay",e)}FSR.onInviteShown&&FSR.onInviteShown.subscribe((function(e){i((function(){e&&(e.uid?d("Feedback Invite Displayed","Survey ID : "+e.uid,0,"cs_foresee=feedback_invite_displayed"):d("Feedback Invite Displayed","true",0,"cs_foresee=feedback_invite_displayed"))}),c)}),!0,!0),FSR.onInviteAccepted&&FSR.onInviteAccepted.subscribe((function(e){i((function(){e&&(e.uid?d("Feedback Invite Submitted","Survey ID : "+e.uid,"etr","cs_foresee=feedback_invite_submitted"):d("Feedback Invite Submitted","true","etr","cs_foresee=feedback_invite_submitted"))}),c)}),!0,!0),FSR.onFeedbackShown&&FSR.onFeedbackShown.subscribe((function(e){i((,c)}),!0,!0),FSR.onFeedbackSubmitted&&FSR.onFeedbackSubmitted.subscribe((function(e){i((function(){e&&(e.mid?d("Feedback Submitted","Survey ID : "+e.mid,"etr","cs_foresee=feedback_submitted"):d("Feedback Submitted","true","etr","cs_foresee=feedback_submitted"),e.rating&&d("Feedback Rating",parseInt(e.rating)))}),c)}),!0,!0)}),c)}))}),c)}),500)}))}var p=!1;_uxa.push(["afterPageView",)}),c)}]);/* integration-usertesting 2.1.5 */
![function(e,n,t){"use strict";(n);const o=t(0);let u,s=o.name,c=o.version;const p=o);p&&(u=p.parameterName,s=p.snippetBuildName,c=p.snippetVersion),r((function(){window._uxa=window._uxa||[],CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push("UserTesting - v"+c);const e=u,"settings");let n=!1,t="";e&&(e.indexOf("sendArtificialPageviews")>-1&&(n=!0),e.indexOf("setReplayLinkToFirstPV")>-1&&(t=0));let o=!1;function p(e){const r=document.location.search;if(r.indexOf("utm_source=UserTesting")>-1&&r.indexOf("utm_campaign=")>-1&&r.indexOf("utm_content=")>-1){const r=a("utm_campaign"),p=a("utm_content");p&&setTimeout((function(){if(o=_uxa.push(["isRecording"]),o){var n="ut",t,e);if(n){var r=new XMLHttpRequest;r.open("POST","https://cloudhub-prod.usertesting.com/usertesting/api/v1/partner-analytics"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify({usertesting_eid:p,external_link:n,partner_name:"Contentsquare"}))}}}),500),r&&(u=r,s="etr",c="cs_usertesting=study_id_"+r,i="UGC_UT_"+(i="Study ID"),_uxa.push(["trackDynamicVariable",{key:i,value:u}]),o&&"etr"===s&&_uxa.push(["trackEventTriggerRecording","@ETS@"+i]),c&&n&&_uxa.push(["trackPageview",window.location.pathname+"?"+c]))}var i,u,s,c}let l=!1;_uxa.push(["afterPageView",)}),s)}]);!function(){"use strict";var t={d:o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r:,n={};t.r(n),t.d(n,{get:function(){return gt},getRequestParameters:function(){return At}});var i={};t.r(i),t.d(i,{getRequestParameters:function(){return Mu}});var r="cs-native-frame",s={navigatorProperties:[{propertyName:"sendBeacon",binding:navigator}],nodeProperties:["childNodes","parentNode","nextSibling","firstChild"],elementProperties:["shadowRoot"],elementPropertiesValues:["matches","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],eventProperties:["target"],imageProperties:["src"],constructors:{Date:"csDate",JSON:"csJSON",Array:"csArray",String:"csString",URL:"csURL",MutationObserver:"csMutationObserver",screen:"csScreen"}};))try{u(window)}catch(Se){h("Critical","failed to copy references from window: ".concat(Se.message))}nction f(t){return 1===t.nodeType}function v(t){return 3===t.nodeType}function l(t){return f(t)&&"source"===t.localName}unction w(t){return f(t)&&"a"===t.localName}unction p(t){return f(t)&&"img"===t.localName}function m(t){return f(t)&&"style"===t.localName}function g(t){return f(t)&&"input"===t.localName}["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"];var O="detached";unction C(t){return z.isValidElement(t)}var I=window.csElementmatches||window.csElementmatchesSelector||window.csElementmozMatchesSelector||window.csElementmsMatchesSelector||window.csElementoMatchesSelector||window.csElementwebkitMatchesSelector,_=9;ar x=[/\d{4}/,/^ember\d+$/],L="@",M="data-cs-override-id",D="data-cs-dynamic-id";z,B=11;||(z={})),window.CSPathComputation=window.CSPathComputation||z;var V=function(t,n){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},V(t,n)};function W(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}V(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var J=function(){return J=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},J.apply(this,arguments)};function Y(t,n,i,r){var s,e=arguments.length,u=e<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(u=(e<3?s(u):e>3?s(n,i,u):s(n,i))||u);return e>3&&u&&Object.defineProperty(n,i,u),u}ject.create;function $(t,n,i){if(i||2===arguments.length)for(var r,s=0,e=n.length;s<e;s++)!r&&s in n||(r||(r=Array.prototype.slice.call(n,0,s)),r[s]=n[s]);return t.concat(r||Array.prototype.slice.call(n))}Object.create;var Z=Number.MAX_SAFE_INTEGER||9007199254740991;function Q(){}function tt(t,n){return 0===csString.prototype.lastIndexOf.call(t,n,0)}var nt=34164e6,it={percentage:boolean:integer:,rt="function"==typeof Symbol?Symbol("json"):null;var st,et,ut=rt?csJSON.stringify,ot=),ht=);!function(t){t.debug="debug",t.warn="warn",t.error="error",t.critical="critical"}(st||(st={})),et||(et={}));var ct=),at=ct),ft=),vt=/[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,lt=/[a-zA-Z0-9+_-](?:@|%40|%2540)/,dt="([-A-Za-z0-9+/=_]|=[^=]|={3,})+",wt=new RegExp("(ey".concat(dt,"\\.ey").concat(dt,"\\.").concat(dt,")"),"g"),yt=/[45*][0-9*]{3}[ -]?[0-9*]{4}[ -]?[0-9*]{4}[ -]?[0-9*]{4}/g,pt=),mt="13.77.3";unction At(){return{v:mt}}var St=function(){return void 0!==window.performance&&window.performance.now?window.performance.timing.navigationStart+Math.round(window.performance.now()):csDate.now()}; Nt=);ction Ct(t){return"object"==typeof t}ction xt(t){return t instanceof Element}ar Mt,Dt,Ut="snippet-",jt="implementation-snippet-";!function(t){t.IMPLEMENTATION="implementation",t.DYNAMIC="dynamic"}(Mt||(Mt={})),function(t){t[t.debug=0]="debug",t[t.warn=1]="warn",t[t.error=2]="error",t[t.critical=3]="critical"}(Dt||(Dt={}));var Ht=),qt="undefined"==typeof window,zt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:process;ar Ft=!qt&&document.createElement("a"),Gt=/(:443|:80)$/;tion Xt(t){return csString.prototype.replace.call(t,Gt,"")}ar $t,Zt,Qt,tn,nn="CS_IFRAME_MESSAGE";!function(t){t.AfterPageView="afterPageView",t.GetSessionKey="getSessionKey"}($t||($t={})),function(t){t.Parent="parent",t.Child="child"}(Zt||(Zt={})),Qt||(Qt={})),tn||(tn={}));var rn=),sn=),en=["t.contentsquare.net","clicktale"];window.addEventListener("error",();var un=),on={debug:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},warn:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},error:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},critical:;var hn,cn,an,fn,vn=!hn||(hn={})),cn||(cn={})),function(t){t.None="None",t.Lax="Lax",t.NotSet="X"}(an||(an={})),function(t){t[t.Yes=1]="Yes",t[t.No=0]="No"}(fn||(fn={}));var ln=),dn="_cs_t",wn=);var yn,pn=),mn=),gn=);!function(t){t.UNCOMPRESSED="0",t.GZIP="2"}(yn||(yn={}));var An,Sn,En,bn,Rn=function(t){this.onError=t},Nn=),Tn=),On=);!An||(An={})),Sn||(Sn={})),En||(En={})),bn||(bn={}));function kn(t,n){void 0===n&&(n=true),t.boundElement.addEventListener(t.type,t.listener,n)}r _n=ar xn=bject.create;bject.create;"function"==typeof SuppressedError&&SuppressedError;ar Un,jn;!Un||(Un={})),function(t){t[t.COPY=0]="COPY",t[t.CUT=1]="CUT",t[t.PASTE=2]="PASTE"}(jn||(jn={}));var Hn=),qn=50,zn=.1;var Bn=!1;var Fn=[],Gn=[];var Vn=Wn=.enabled=!0;var Xn,Kn=!!window.chrome,$n="data-cs-scroll-container";!Xn||(Xn={}));var Zn=}(ei,ui,oi,h}(),c}(),a}(),f}(),v}(),l}()}(ei||(ei={})}(ui||(ui={})),function(t){t.ETR_LEGACY="0",t.ETR_SESSION="1",t.ETR_PAGE="2"}(oi||(oi={}));var di,w}(),y}(),p}(),m}(),g}(),A}(),S}(Ai)}(di||(di={}));var E}(),bi=}Ri.asyncIterator="$$asyncIterator";var Ni=Bt("Symbol",Ri),Ti=Bt("queueMicrotask",setTimeout),O};Oi.isSchedule};var k}(var _i,Pi,xi,Li=function(t){return t_i||(_i={})}(Pi||(Pi={}));var ji,Hi=null!==(xi=zt.Node)&&void 0!==xi?xi:Object}(ji||(ji={}));var qi,zi,Bi,F}(),G}(ki),Vi=zt.ShadowRoot?Gi:zt.csMutationObservevar Yi=null!==(zi=zt.Node)&&void 0!==zi?zi:{},Xi=null!==(Bi=zt.NodeFilter)&&void 0!==Bi?Bi:{},Ki=((qi={})[2]=Xi.SHOW_ATTRIBUTE,qi[4]=Xi.SHOW_CDATA_SECTION,qi[8]=Xi.SHOW_COMMENT,qi[11]=Xi.SHOW_DOCUMENT_FRAGMENT,qi[9]=Xi.SHOW_ALL,qi[10]=Xi.SHOW_DOCUMENT_TYPE,qi[1]=Xi.SHOW_ELEMENT,qi[Yi.ENTITY_NODE]=Xi.SHOW_ENTITY,qi[Yi.ENTITY_REFERENCE_NODE]=Xi.SHOW_ENTITY_REFERENCE,qi[Yi.NOTATION_NODE]=Xi.SHOW_NOTATION,qi[7]=Xi.SHOW_PROCESSING_INSTRUCTION,qi[3]=Xi.SHOW_TEXT,qi),$}(),Zi=[],Qi=!var i}(Ai),r}(li),s}(li),er=/[^\s]/}var or,hr,cr,ar,f}(),v}(),lr="data-cs-mask",d}(),wr=null!==(or=zt.Element)&&void 0!==or?or:{prototype:{}},yr=null!==(hr=zt.Node)&&void 0!==hr?hr:{prototype:{}},p},mr=null!==(cr=pr(wr))&&void 0!==cr?cr:pr(yr)}(ar||(ar={}));var g};var A}(gr),Sr=["id","class","style","src","srcset","sizes","href","rel","type","width","height","media","align","dir","bgcolor","color","border","colspan","rowspan","cols","rows","size","start","slot",M],E}(),b}(var T}(),O}(),k}(li);var Cr=/(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\))/n}function Pr(t){return bt(t,"datavar Ur,t}();!function(t){t.REQUEST_START="requestStart",t.DOM_INTERACTIVE="domInteractive",t.TIME_ORIGIN="timeOrigin"}(Ur||(Ur={}));var,t}(),n}(li),n}(qr),t}var Wr,Jr,t}();!function(t){t[t.TAP=0]="TAP",t[t.LONG_PRESS=1]="LONG_PRESS",t[t.DRAG=2]="DRAG",t[t.FLICK=3]="FLICK",t[t.PINCH_IN=4]="PINCH_IN",t[t.PINCH_OUT=5]="PINCH_OUT"}(Wr||(Wr={})),function(t){t[t.UP=1]="UP",t[t.DOWN=2]="DOWN",t[t.LEFT=3]="LEFT",t[t.RIGHT=4]="RIGHT"}(Jr||(Jr={}));var,t}(),n}(gr)""},Zr=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=3,i}return W(n,t),n}(gr),Qr=function(t){function n(n){var i=t.call(this,n)||this;return i.data=n.data,i.nodeType=4,i}return W(n,t),n}(gr),n}(gr),n}(gr),n}(gr),t}(),t))}var,t}();function os(t){return"artificial"i t}var cs,as,fs={taskTime:25},n}(ss),n}(ss),t}(),t}();!function(t){t.replayRecordingUnmaskedUrlRegex="replayRecordingUnmaskedUrlRegex",t.replayRecordingMaskedUrlRegex="replayRecordingMaskedUrlRegex",t.replayRecordingUnmaskedUrlRegexRules="replayRecordingUnmaskedUrlRegexRules",t.replayRecordingMaskedUrlRegexRules="replayRecordingMaskedUrlRegexRules"}(cs||(cs={t"}(as||(as={}));var ys,t}(),t}(),t}(),t}();!function(t){t[t.NOT_STARTED=0]="NOT_STARTED",t[t.OPEN_IN_PROGRESS=1]="OPEN_IN_PROGRESS",t[t.OPEN_FAILED=2]="OPEN_FAILED",t[t.READY=3]="READY"}(ys||(ys={}));var Ss,Es,bs,Rs,t}(),t}();!function(t){t.PORTRAIT="Portrait",t.LANDSCAPE="Landscape"}(Ss||(Ss={y"}(Es||(Es={E"}(bs||(bs={)}}(Rs||(Rs={}));var Os,t}(),t}T"}(Os||(Os={}));var,n}(li),t}()()};var xs,Ls,t}(),t}(),t}(),js="v2/recording",Hs=["setCapturedElementsSelector"],qs=["setPIISelectors"],zs=["isRecording"],Bs=["replay:resourceManager:enableForOnlineResource:nextPageviewOnly","cssrm:onlineAssets:activateForNextPageview"],Fs=["replay:resourceManager:getStatus","cssrm:getStatus"],t}();!function(t){t[t.NOT_NEEDED=1]="NOT_NEEDED",t[t.NOT_EXPRESSED=2]="NOT_EXPRESSED",t[t.WITHDRAWN=3]="WITHDRAWN",t[t.GRANTED=4]="GRANTED"}(xs||(xs={N}}(Ls||(Ls={}));var,t}(),t}(),t}(),tr}}var Ks,$s,t}(),t}(),te=["afterPageView"],ne=["getSessionKey"],ie=["onRecordingStateChange"],re=["replay:link:generate"],t}(),t}(),n}(li),t}(),he=["trackDynamicVariable"],t}(),t}(),t}(),t}(),t}(),de=["ecommerce:addToCart","ec:cart:add"],we=["ecommerce:addTransaction","ec:transaction:create"],ye=["ecommerce:addItem","ec:transaction:items:add"],pe=["ecommerce:send","ec:transaction:send"],t}(),tE"}(Ks||(Ks={})),function(t){t.SUCCESS="success",t.FAILURE="failure",t.ATTEMPT="attempt"}($s||($s={}));var Se,Ee,be,Re,Ne,Te,t}(),t}(),n}(ke),t}(),n}(ke),t}(),t}(),t}(),t}(),t}(),t}(),je=-10)}0]}|0}r}}{}})}}))}0)})}},Ye=-1:0}))},$e=function(){addEventListener("visibilitychange",Ke,!0),addEventListener("prerenderingchange",Ke,!0)}0)}}}}()},nu=[1800,3e3]))},ru=[.1,.25],su={passive:!0,capture:!0},eu=new Date))}]}})}}))},au=[100,300],fu=0,vu=1/0,lu=0))}|0}))},pu=[200,500],mu=0mu},Au=[],Su={})}},bu=[2500,4e3],Ru={},Nu=[800,1800]0)}))},t}(),t}(),Iu="v2/events",_u=["submit"],t}n"}(Te||(Te={}));var,n}(li),Lu=window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage||window.navigator.systemLanguage||"unknou}}var Du,Uu,t}(),t}(),qu=["trackPageview"],zu=["setPath"],Bu=["setQuery"],Fu=["referrer:maskUrl"],Gu=["referrer:removeQueryString"],Vu=["referrer:keepQueryString"],t}(),t}(),t}(),t}(),Ku=["clearSession"],$u=["extendSession"],Zu=["getSessionData"],Qu=["session:start:newVisitor"],to=["session:clear:visitor"],t}(),tS"}(Du||(Du={)}}(Uu||(Uu={}));var so,eo="@user-identifier@",n}(li),oo=["trackPageEvent"],ho=["trackEventTriggerRecording"],t}(),t}sis}}(so||(so={}));vull),n}(ao),vo=document.createElement)),!1}}var wo,yo=["#c1_card_info_id"];!function(t){t[t.Sensitive=1]="Sensitive",t[t.SensitiveChild=2]="SensitiveChild"}(wo||(wo={}));va}))},ror",())},me)},n}="…",d 0})"'"))Jr.UPength.DRAG},n.pl=5,top()_OFF},nullull:n))}))},,nuller(t)},.Xl=20,n}(li),Uo=["api-errors:maskUrl"];!function(t){t.CONTENTSQUARE="contentsquare.net",t.CLICKTALE="clicktale.net",t.FAKE_TRACKER="fake-tracker.content-square.fr"}(po||(po={}));top()=i}))rvice",n}(li),Bo=["trackEtopes=s),u}}(jo||(jo={}));mr+=1},top()s.md}},t}(),Yo=function(){function t(t){this.rr=t}return t.prototype.onAfterVisitorRenewal=function(){this.rr.startNewSession()},t}(),Xo=fstart()}}return t.prototype.start=function(){var t,n,i,r,s,e,u,o,h,c,a,f,v,l,d,w=this;(this.Ad.init(),this.Sd.init(),this.Sd.isActive())||(this.ye.d=new Yu})),this.L.apiErrors.enabled&&this.ye.tener(u)})),this.L.customErrors.enabled&&this.ye.tener(t)})),this.L.jsErrorsEnabled&&this.ye.tener(t)})),this.ye.schedule((function(){w.Ed.init()})),this.ye.schedule((function(){i.init()})),this.ye.schedule((function(){n.init()})),this.ye.schedule((function(){r.init()})),this.ye.schedule((function(){w.Rd.init()})),this.ye.schedule((function(){w.Od.init()})),this.ye.schedule((function(){s.init()})),this.ye.schedule((function(){e.init()})),this.ye.schedule((function(){w.bd.init()})),this.ye.schedule((function(){u.init()})),this.ye.schedule((function(){o.init()})),this.ye.schedule((function(){w.Nd.init()})),this.ye.tener(d)})),ms.isRecordingSupported()&&this.ye.Service)})),this.ye.schedule((function(){t.init()})),this.ye.),w.Cd()})))},t.prois.Td(t)()&hhh",n)}}(Go||(Go={}));tor()},t}(),Qo="_cs_s",th=18e5,nh=/^(\d+\.[013567TBW](\.[01])?)(\.\d+)?$/,ih=".";!function(t){t[t.NOT_FOUND=0]="NOT_FOUND",t[t.EXPIRED=1]="EXPIRED",t[t.FOUND=2]="FOUND"}($o||($o={}));st(t)},t}();!function(t){t[t.NO=0]="NO",t[t.WITHDRAWN=1]="WITHDRAWN",t[t.GRANTED=2]="GRANTED"}(rh||(rh={}));s.hw)s.Nw)ge())rs,t),null),n}(ch),fhTHDRAWN"}(eh||(eh={}));n()))rt()}},t}(),wh=["replay:consent:unanonymized:granted","trackConsentGranted"],yh=["replay:consent:unanonymized:withdrawn","trackConsentWithdrawn"],ph=["replay:consent:startForSession:granted"],mh=["replay:consent:startForSession:withdent()t())}art()},t}(),Eh="_cs_ex",bh=2592e6,Rh=/^[0st(t)Eh)>0ion()},t}();!function(t){t.SessionReplay="SR",t.None=""}(vh||(vh={}Lw()}},t}(),Ch=["excludeURLforRen)}))},t}(),_h="_c_h)>0},t}(),xh="_cs_ot,nt)xh)>0},t}(),Dh=["optout"],Uh=["o()}))top()},t}();var qh;!function(t){t.UXA="_uxa",t.WVT="cs_wvt"}(qh||(qh={},i)}}},d)),tn)oncat(s)}rl()}t(t)}},,null),t}(),Xh="|ifr(t)}isabled"}(Vh||(Vh={}t)&i(r),r}}$h.initing(i(t)}))}}varing()},rc(t)},t}(),ec=function(){function t(){}return t.prototype.setItem=function(t,n){window.sessionStorage.setItem(t,n)},t.prototype.getItem=function(t){return window.sessionStorage.getItem(t)},t.prototype.removeItem=function(t){window.sessionStorage.removeItem(t)em(t)},t}(),oc="_cs_eof t},t}(),cc=["visit",2],ac=["page",3],fc=["nextPageOnfy(c)},t}(),lc=["setCustomVariage()},t}(),wc="_cs_id",yc=/^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?(\.[0-st(t)Py=":,"#")k)),nands}s:r})type)rn(n),nulltop()))}stener=a}(nc|ge(t,n)}}(ic||(ic={}));var kc,Cc=window.CSFrameCommunicating()}},n}(ch),_c=["trackTransactop(),null),warn}W(n,t),ep,t)},top()us,t)nt,t)},n}(li),qc=["webview:analytics:start"],zc=["webview:analytics::!0}).pp()},uiredindow},t}(),Wc=["webview:replay:start"],Jc=["webview:replay:s:t})n}}))))},in)}))},n}(li),Zc=fhis.ye=l}return t.prototype.init=function(){var t=this,n=[],i=new dr(this.cn);this.Fh=new Er(this.M,this.L),this.Fh.init();var r=new jr;csArray.prototype.push.call(n,r);var s=new zr(this.ye,this.hn),e=[new ds,i,this.Fh,r],u=null;if(!this.lt.isInWebViewContext()&&this.L.useStaticResourceManager){var o=new Yr(window.crypto);o.init(),this.lr=new Ms(o),this.lr.init(),csArray.prototype.push.call(n,this.lr),this.lr.isStaticResourceManagerSupported()&&(u=new Cs(this.lr,this.cn),csArray.prototype.push.call(e,u),this.kp=new $c(this.lr,this.Qy),this.kp.init())}var h,c=new Us,a=new gs,f=new ws(this.hn,a);if(f.init(),csArray.prototype.push.call(n,f),f.isAdoptedStyleSheetsSupported()&&csArray.prototype.push.call(e,f),csArray.prototype.push.call(e,c),csArray.prototype.push.call(n,c),this.Gh()){var v=new us(this.hn);h=new vs(e,this.hn,v)}else h=new ls(e);if(this.Fn=new fr(h,this.hn,this.Fh,this.an),this.nr=new Zn(this.un,this.hn,this.cn,this.an),this.nr.init(),this.tr=new hi(this.Fn,s,r,this.Wn,this.hn,this.cn),csArray.prototype.push.call(n,new vr(this.hn,this.cn,r,a)),csArray.prototype.push.call(n,new Hr(window)),csArray.prototype.push.call(n,new Or(window.location,this.M)),this.Cp=new Fc(this.L,a,this.tr,this.nr,new Xr(this.qe,this.hn,this.cn),this.an,this.Qy,this.lr,n),this.Mh.regecording})),this.Mh.register(Hs,(function(n){t.Fh.setWhitelistedElementsSelector(n)})),this.Mh.register(qs,(function(n){t.cn.setPIISelectors(n)})),this.Mh.register(Fs,(function(){return t.Cp.getStaticResourceManagerStatus()})),s.init(),this.Cp.init(),this.lt.isInWebViewContext()){var l=new Xc(new Kc);this.Ip=new Yc(this.L,this.M,this.cn,this.Fh,this.sp,r,this.Qy,l,this.Mh),this.sp.addListener(this.Ip),this.Ip.init()}},t.prototype.onParentRecordingStar.stop()},t.prototype.onArtificialPageViewEnd=function(){this.lt.isInWebViewContext()&&this.Cp.stop()},t.prototype.onAfterArtificia.start()},t.prototype.onInitialDomStart=function(){this.Cp.blockSendingEventsFromSerialization()},t.prototype.onInitialDom(t)},t.prototype.Gh=function(){return ms.isAsyncSerializationSupported()&&this.L.asyncSerializerEnabled},t.prototype.Xh=function(){return!!this.L.encryptionPublicKey&&this.L.encryptionPublicKeyId>0&&this.Kh.isSupported()&&this.$h.isSupported()},t.prototype.onOptout=function(){this.Cp.stop()topRROR_AN"}(kc||(kc={}));null}nulify(t))}}(ta||(ta={}));var)))}}},t}(),ua="LOCAL_ASSET",oa="NONE",ha="ONLY_LOCAL_ASSETS",caat(n)()}))d:n})es:n}omainn)}))k,t)),null),t}(),ma=["serializeWebView","webview:serializeWebView"],ga=["setAssetTransformerMode","webview:setAssetTransformerMode"],Aa=["webview:onAfterScreent)}))},n)}))n)}))r)}))i)}))},n}(pa),Ta=fstart()}}return t.prototype.start=function(){var t,n,i,r,s,e,u,o,h,c,a,f,v,l=this;this.ye.tener(s)})),this.ye.ener(h)}})),this.ye. mo(l.L)})),ms.isRecordingSupported()&&this.ye.t.init()})),this.ye.Qy,l.rp)})),this.ye.tener(s)})),this.ye.t.init()})),this.ye.s.init()})),this.kd=new Yu,this.ye.),l.Td()}))ics()},._m=t},t}(),Ca=function(t){function n(n,i){var r=t.call(this)||this;return r.hr=n,r.Qy=i,r}return W(n,t),n.prototype.onStart=function(){var t=this;this.hr.subscribe(n.Wr,(function(n){return t.Gr(n)}))},n.prototype.onStop=function(){this.hr.unsubscribe(n.Wr)},n.prototype.Gr=function(t){this.isStarted&&this.Qy.sendToParent(Qt.ApiError,t)},n.Wr="ChildApiErrorsService",rvice",top()rvice",r(Bo)r(Bo)()})),null,nullog(r)},t}();try{var Ha=new ot(window.CS_CONF);window._uxa=window._uxa||[],Ha.processOptionOverrides(window._uxa);var qa=new ht(window,Ha);qa.init();var za=new sn;if(on=un,un.computeIsActive(Ha.validationRate),qa.isTopWindowTracker()){var Ba=new Ht(Ha,za);un.setStrategy(Ba)}else if(qa.isInIframeContext()){var Fa=new rn(Ha);un.setStrategy(Fa)}else if(qa.isInWebViewContext()){var Ga=new ja;un.setStrategy(Ga)}void 0===ra&&(ra=50),void 0===sa&&(sa=.1),Bn=un.isPerfLoggingure(n,i)}(),Bn&&(qn=ra,zn=sa),new Ua(Ha,qa,za).start()}catch(xi){}}();