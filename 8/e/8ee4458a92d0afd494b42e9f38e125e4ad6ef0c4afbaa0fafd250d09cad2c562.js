/*! For license information please see init.13153e68bfa52917e0a5.js.LICENSE.txt */
(()=>{"use strict";var e,t,o={836:(e,t,o)=>{var r;o.d(t,{ZP:()=>n,in:()=>r,jj:()=>i}),function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR"}(r||(r={}));const i={[r.DEBUG]:"debug",[r.ERROR]:"error",[r.INFO]:"info",[r.WARN]:"warn"},n=new class{constructor(){this.loggingLevel=null,this.middlewares=[],this.debug=(e,...t)=>{this.processMiddlewares("console",r.DEBUG,e,...t),null!==this.loggingLevel&&r.DEBUG>=this.loggingLevel&&console.debug(e,...t)},this.debugNoConsole=(e,...t)=>{this.processMiddlewares("internal",r.DEBUG,e,...t)},this.error=(e,...t)=>{this.processMiddlewares("console",r.ERROR,e,...t),null!==this.loggingLevel&&r.ERROR>=this.loggingLevel&&console.error(e,...t)},this.errorNoConsole=(e,...t)=>{this.processMiddlewares("internal",r.ERROR,e,...t)},this.info=(e,...t)=>{this.processMiddlewares("console",r.INFO,e,...t),null!==this.loggingLevel&&r.INFO>=this.loggingLevel&&console.log(e,...t)},this.infoNoConsole=(e,...t)=>{this.processMiddlewares("internal",r.INFO,e,...t)},this.setLoggingLevel=e=>{this.loggingLevel=e},this.setMiddleware=e=>{this.middlewares.push(e)},this.warn=(e,...t)=>{this.processMiddlewares("console",r.WARN,e,...t),null!==this.loggingLevel&&r.WARN>=this.loggingLevel&&console.warn(e,...t)},this.warnNoConsole=(e,...t)=>{this.processMiddlewares("internal",r.WARN,e,...t)},this.processMiddlewares=(e,t,o,...r)=>{this.middlewares.forEach((i=>i(e,t,o,...r)))}}}},342:(e,t,o)=>{o.d(t,{VZ:()=>r,c_:()=>n,vq:()=>i});const r=e=>{var t,o;return null!==e&&"object"==typeof e&&(e instanceof Error||(null===(t=e.constructor.name)||void 0===t?void 0:t.endsWith("Error"))||(null===(o=e.constructor.name)||void 0===o?void 0:o.endsWith("Exception")))},i=e=>r(e)&&(e instanceof SyntaxError||"SyntaxError"===e.constructor.name),n=e=>{return r(t=e)&&(t instanceof DOMException||"DOMException"===t.constructor.name)&&"SecurityError"===e.name;var t}},621:(e,t,o)=>{o.d(t,{Lj:()=>i,gJ:()=>n,hp:()=>r});const r=e=>null!==e&&"object"==typeof e&&"FormData"===e.constructor.name,i=e=>null!==e&&"object"==typeof e&&"Blob"===e.constructor.name,n=e=>null!==e&&"object"==typeof e&&"Request"===e.constructor.name},807:(e,t,o)=>{o.d(t,{Lq:()=>i,ey:()=>n,oF:()=>r});const r=e=>{var t,o;let r=null;try{r=null!==(o=null===(t=e.defaultView)||void 0===t?void 0:t.frameElement)&&void 0!==o?o:null}catch(e){}return r},i=e=>{try{return e.contentDocument}catch(e){}return null},n=e=>{var t;let o=null;try{o=null!==(t=e.frameElement)&&void 0!==t?t:null}catch(e){}return o}},181:(e,t,o)=>{o.d(t,{R:()=>n,u:()=>r});const r=(e,t)=>{const o=new URL(/^https?:\/\//.test(r=e)?r:`https://${r}`);var r;if(!t)return o;let i=o.pathname;return i.endsWith("/")&&t.startsWith("/")&&(i=i.slice(0,-1)),new URL(`${i}${t}`,o.origin)},i=[/:\/\/10(\.\w+){3}(:\w+)?\//,/:\/\/172\.(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31).\w+\.\w+(:\w+)?\//,/:\/\/192\.168(\.\w+){2}(:\w+)?\//,/:\/\/localhost(:\w+)?\//,/:\/\/127\.0\.0\.1(:\w+)?\//,/^file:\/{3}/],n=e=>i.some((t=>t.test(e)))},188:(e,t,o)=>{o.d(t,{MN:()=>r,PA:()=>i,Yp:()=>n});const r=()=>window.top===window,i=e=>{try{return Boolean(e.location.href)}catch(e){return!1}},n=()=>{if(r())return!1;try{return Boolean(window.frameElement)}catch(e){return!1}}},48:(e,t,o)=>{o.d(t,{t$:()=>v,E0:()=>w,BH:()=>m,jq:()=>O,x2:()=>R,O5:()=>f,iY:()=>y,R2:()=>S});var r=o(181),i=o(836),n=o(561);const s=()=>{return t=function*(){navigator.onLine||(yield new Promise((e=>{const t=()=>{window.removeEventListener("online",t),e()};window.addEventListener("online",t),navigator.onLine&&(e(),window.removeEventListener("online",t))})))},new((e=void 0)||(e=Promise))((function(o,r){function i(e){try{s(t.next(e))}catch(e){r(e)}}function n(e){try{s(t.throw(e))}catch(e){r(e)}}function s(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(e){e(r)}))).then(i,n)}s((t=t.apply(void 0,[])).next())}));var e,t};var a=o(718),d=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{d(r.next(e))}catch(e){n(e)}}function a(e){try{d(r.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};const l={headers:{}},c={"Content-Type":"text/plain;charset=UTF-8"},u=new Map,g=(e,t)=>d(void 0,void 0,void 0,(function*(){var{abortPreviousRequest:o,baseUrl:d,body:g,doNotRetryOnDocumentHidden:h=!1,headers:p,logPayloadOnError:f=!1,retryCount:m=3,retryInterval:v=1e3,throwOnConvert:w=!1,waitForOnlineStatus:y=!1}=t,S=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(t,["abortPreviousRequest","baseUrl","body","doNotRetryOnDocumentHidden","headers","logPayloadOnError","retryCount","retryInterval","throwOnConvert","waitForOnlineStatus"]);const O=r.u(d,e);let R=u.get(O.href);R&&o&&(i.ZP.debug("Aborting previous request",O),R.abort("Aborted previous request.")),R=new AbortController,u.set(O.href,R);const k=Object.assign(Object.assign(Object.assign(Object.assign({},l),{body:g}),S),{signal:R.signal});let b;k.headers=void 0===p?c:p;let E,A=null,I=performance.now(),L=0,_=-1;for(let e=1;e<=m;e++){y&&(yield s()),_=e;try{if(1===e)I=performance.now(),b=yield fetch(O.href,k);else{const t=[],o=new Promise((t=>{setTimeout((()=>{t()}),v*Math.pow(2,e-1))}));if(t.push(o),h){const e=new Promise((e=>{const t=()=>{"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",t),e())};document.addEventListener("visibilitychange",t),"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",t),e())}));t.push(e)}if(yield Promise.race(t),h&&"hidden"===document.visibilityState)throw new Error("Document is hidden and flag `doNotRetryOnDocumentHidden` is set to true.");y&&(yield s()),I=performance.now(),b=yield fetch(O.href,k)}E=void 0}catch(t){if(E=t,t instanceof Error&&"AbortError"===t.name)throw u.delete(O.href),new a.M("Request was aborted.",-1,{fetchTotalMs:L,finalRetries:_},R.signal,f?JSON.stringify(g):"Payload not logged.",void 0,t);if(e<m&&(!h||"hidden"!==document.visibilityState))continue}finally{L=performance.now()-I}if(u.delete(O.href),!b)throw new a.M(`API request to ${O.href} failed due to connection error.`,-1,{fetchTotalMs:L,finalRetries:_},R.signal,f?JSON.stringify(g):"Payload not logged.",void 0,E);if(b.status>399){try{A=yield b.json()}catch(e){if(e instanceof Error&&("AbortError"===e.name||"TypeError"===e.name))throw new a.M(`API request to ${O.href} failed with status code ${b.status}.`,b.status,{fetchTotalMs:L,finalRetries:_},R.signal,"Payload not logged.",b,e)}try{A||(A=yield b.text())}catch(e){if(e instanceof Error&&("AbortError"===e.name||"TypeError"===e.name))throw new a.M(`API request to ${O.href} failed with status code ${b.status}.`,b.status,{fetchTotalMs:L,finalRetries:_},R.signal,"Payload not logged.",b,e)}throw new a.M(`API request to ${O.href} failed with status code ${b.status}`,b.status,{fetchTotalMs:L,finalRetries:_},R.signal,f?JSON.stringify(g):"Payload not logged.",b,void 0,{responseData:A})}if(204===b.status)break;try{A=yield b.json();break}catch(t){if(t instanceof Error&&("AbortError"===t.name||"TypeError"===t.name)&&e<m)continue;if(w&&t instanceof Error)throw"AbortError"===t.name||"TypeError"===t.name?new a.M(`API request to ${O.href} failed due to connection error.`,-1,{fetchTotalMs:L,finalRetries:_},R.signal,f?JSON.stringify(g):"Payload not logged.",void 0,E):new n.iF(`Could not convert data to JSON in ${O.href} request`,{additionalData:{type:b.type,bodyUsed:b.bodyUsed,fetchTotalMs:L,finalRetries:_,headers:b.headers?Array.from(b.headers):void 0,ok:b.ok,online:navigator.onLine,originalErrorMessage:t.message,originalErrorName:t.name,redirected:b.redirected,status:b.status,url:b.url,visibility:document.visibilityState},originalError:t});if(w)throw new n.iF(`Unknown error happened during API call. ${JSON.stringify(t)}`);break}}if(void 0===b)throw new n.iF("Response object is undefined.",{shouldReport:!0});return{data:A,response:b}})),h=(e,{baseUrl:t,body:o,retryCount:i=1,waitForOnlineStatus:n})=>d(void 0,void 0,void 0,(function*(){const a=r.u(t,e),d=navigator.sendBeacon.bind(navigator);for(;i>0;){n&&(yield s());try{if(d(a.href,o))return!0;continue}catch(e){if(e instanceof TypeError&&"Illegal invocation"===e.message)try{return yield fetch(a.href,{method:"POST",body:o,keepalive:!0}),!0}catch(e){return!1}throw e}finally{i-=1}}return!1}));var p=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{d(r.next(e))}catch(e){n(e)}}function a(e){try{d(r.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};const f=({config:e,sessionId:t,visitorId:o})=>p(void 0,void 0,void 0,(function*(){const i={key:e.projectKey,sessionId:t,visitorId:o};e.userId&&(i.userId=e.userId);const{data:n,response:s}=yield g("/rec/setup-recording/website",{method:"POST",abortPreviousRequest:!1,baseUrl:e.managerHost,body:JSON.stringify(i),credentials:"include",logPayloadOnError:!0,throwOnConvert:!0});return n.ok&&n.recordingAllowed?(e.isRelayProxy&&(n.recording.assetsHost=r.u(e.host,"/assets").toString(),n.recording.writerHost=r.u(e.host,"/web-writer").toString()),{response:s,setupData:n}):{response:s,setupData:n}})),m=({managerHost:e,projectKey:t,sessionId:o})=>p(void 0,void 0,void 0,(function*(){const{data:r}=yield g(`/rec/sessions/${o}/active?projectKey=${t}`,{method:"GET",abortPreviousRequest:!0,baseUrl:e,throwOnConvert:!0});return r})),v=({assetsHost:e,urls:t})=>p(void 0,void 0,void 0,(function*(){yield g("/cache",{method:"POST",abortPreviousRequest:!1,baseUrl:e,body:JSON.stringify(t),waitForOnlineStatus:!0})})),w=({assetsHost:e,urls:t})=>h("/cache",{baseUrl:e,body:JSON.stringify(t)}),y=({formData:e,isFromPreviousRecord:t,recordId:o,sessionId:r,visitorId:i,writerHost:n})=>p(void 0,void 0,void 0,(function*(){let s="/rec/v3/write";if(window.URLSearchParams){const e=new URLSearchParams([["rid",o],["sid",r],["vid",i]]);t&&e.append("isFromPreviousRecord","true"),s+=`?${e.toString()}`}const{data:a}=yield g(s,{method:"POST",abortPreviousRequest:!1,baseUrl:n,body:e,doNotRetryOnDocumentHidden:!0,headers:{},waitForOnlineStatus:!0});return a})),S=({formData:e,isPartialChunk:t,recordId:o,retryCount:r,sessionId:i,visitorId:n,writerHost:s})=>{let a="/rec/v3/write";if(window.URLSearchParams){const e=new URLSearchParams([["rid",o],["sid",i],["vid",n],["isPartialChunk",String(t)]]);t||e.delete("isPartialChunk"),a+=`?${e.toString()}`}return h(a,{baseUrl:s,body:e,retryCount:r,waitForOnlineStatus:!0})},O=({datadogHost:e,payload:t,projectKey:o})=>p(void 0,void 0,void 0,(function*(){yield g(`/rec/log/${o}`,{method:"POST",abortPreviousRequest:!1,baseUrl:e,body:JSON.stringify(t),throwOnConvert:!1})})),R=({datadogHost:e,payload:t,projectKey:o})=>h(`/rec/log/${o}`,{baseUrl:e,body:JSON.stringify(t)})},718:(e,t,o)=>{o.d(t,{M:()=>r});class r extends Error{get isConnectionError(){return this.status<0&&!this.isAbortedByRecorder&&!this.isAbortedByUserAgent}get isAbortedByRecorder(){return this.isSignalAborted}get isAbortedByUserAgent(){var e;return this.originalError instanceof Error&&"AbortError"===(null===(e=this.originalError)||void 0===e?void 0:e.name)&&!this.isSignalAborted}constructor(e,t,o,i,n,s,a,d,l){super(e),this.status=t,this.responseTimingData=o,this.requestPayload=n,this.originalError=a,this.responseData=d,this.additionalData=l,this.name="ApiError",Object.setPrototypeOf(this,r.prototype),this.responseDebugData=s?(e=>({type:e.type,bodyUsed:e.bodyUsed,headers:e.headers?Array.from(e.headers):void 0,ok:e.ok,redirected:e.redirected,url:e.url}))(s):void 0,this.isSignalAborted=null==i?void 0:i.aborted,this.visibilityState=document.visibilityState,this.isOffline=!1===navigator.onLine,this.wasBeaconFallbackUsed=!1}}},835:(e,t,o)=>{var r;o.d(t,{LT:()=>n,hd:()=>s,lL:()=>r,ot:()=>i}),function(e){e.ACKNOWLEDGED="SL__ACKNOWLEDGED",e.DISCOVERY="SL__DISCOVERY",e.DISCOVERED="SL__DISCOVERED",e.USER_ACTIVITY="SL__USER_ACTIVITY",e.STOP_RECORDING="SL__STOP_RECORD",e.START_RECORDING="SL__START_RECORDING"}(r||(r={}));const i=e=>{if(e&&"object"==typeof e&&Object.hasOwn(e,"name")){const t=e.name;if("string"==typeof t&&t.startsWith("SL__"))return!0}return!1},n=e=>e.name===r.DISCOVERY,s=e=>e.name===r.DISCOVERED},669:(e,t,o)=>{o.d(t,{N:()=>r});const r=(e,...t)=>{window.smartlook.silent||console.warn(`[Smartlook] ${e}`,...t)}},561:(e,t,o)=>{o.d(t,{Fx:()=>i,iF:()=>r,zT:()=>n});class r extends Error{constructor(e,{additionalData:t={},originalError:o,shouldReport:i=!0}={}){super(e),Object.setPrototypeOf(this,r.prototype),this.name="RecorderError",this.additionalData=t,this.shouldReport=i,o&&(this.originalName=o.name,this.originalStack=o.stack,this.originalMessage=o.message,this.originalError=o),o instanceof r&&(this.originalAdditionalData=o.additionalData)}toJSON(){return{name:this.name,additionalData:this.additionalData,message:this.message,originalAdditionalData:this.originalAdditionalData,originalError:this.originalError,originalMessage:this.originalMessage,originalName:this.originalName,originalStack:this.originalStack,shouldReport:this.shouldReport,stack:this.stack}}}class i extends r{constructor(...e){super(...e),Object.setPrototypeOf(this,i.prototype)}}class n extends r{constructor(...e){super(...e),Object.setPrototypeOf(this,n.prototype)}}},127:(e,t,o)=>{o.d(t,{$:()=>r});const r=e=>void 0===e.isTrusted||e.isTrusted},443:(e,t,o)=>{o.d(t,{O:()=>r});const r=()=>((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),""))()},397:(e,t,o)=>{o.d(t,{WV:()=>r,xZ:()=>s,y8:()=>n});const r=["card","credit","expiry","cvv","cvc"],i=["cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type"],n=(e,t=r)=>{var o;const n=(null!==(o=e.getAttribute("autocomplete"))&&void 0!==o?o:"").toLowerCase();return!(!n||!i.some((e=>n.includes(e))))||Array.from(e.attributes).filter((e=>"value"!==e.name)).flatMap((e=>[e.name,e.value])).some((e=>t.some((t=>e.toLowerCase().includes(t)))))},s=new Set(["file","password"])},136:(e,t,o)=>{o.d(t,{KB:()=>c,dD:()=>u});var r=o(836),i=o(48),n=o(718),s=o(561),a=o(443),d=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{d(r.next(e))}catch(e){n(e)}}function a(e){try{d(r.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};const l=(e,t,o)=>d(void 0,void 0,void 0,(function*(){try{return r.ZP.debug("Calling active endpoint in init."),yield(0,i.BH)({managerHost:t.managerHost,projectKey:t.projectKey,sessionId:e})}catch(e){e instanceof n.M?(e.isConnectionError||r.ZP.warn("/active call failed on network error.",e),404===e.status&&o.clearStorage()):e instanceof s.iF?e.shouldReport&&r.ZP.warn("/active call failed on recorder error.",e):r.ZP.warn("/active call failed on unknown error.",e)}return null})),c=(e,t)=>{var o,r,i,n;const s=[],a=t.getCookieMetadataForProjectKey(e.projectKey);s.push({sessionId:null!==(o=null==a?void 0:a.sessionId)&&void 0!==o?o:null,visitorId:null!==(r=null==a?void 0:a.visitorId)&&void 0!==r?r:null});const d=t.getLocalStorageMetadataForProjectKey(e.projectKey),l=null!==(i=null==d?void 0:d.sessionId)&&void 0!==i?i:null,c=null!==(n=null==d?void 0:d.visitorId)&&void 0!==n?n:null;return s[0].sessionId===l&&s[0].visitorId===c||s.push({sessionId:l,visitorId:c}),s},u=(e,t,o,r=[])=>d(void 0,void 0,void 0,(function*(){var i,n,s;for(const n of e)if(n.sessionId){if(r.includes(n.sessionId))continue;const e=yield l(n.sessionId,t,o);if(null==e?void 0:e.isActive)return{sessionId:n.sessionId,sessionTimeRemaining:e.sessionTimeRemaining,visitorId:null!==(i=n.visitorId)&&void 0!==i?i:(0,a.O)()}}return{sessionId:(0,a.O)(),visitorId:null!==(s=null===(n=e.find((e=>null!==e.visitorId)))||void 0===n?void 0:n.visitorId)&&void 0!==s?s:(0,a.O)()}}))},103:(e,t,o)=>{o.d(t,{P:()=>s,v:()=>a});var r=o(621),i=o(342),n=o(925);const s=(e,t)=>{try{return(0,n.K)(a(e),t).stringified}catch(e){return JSON.stringify("[non-serializable object]")}},a=(e,t=new WeakMap)=>{let o;return Array.isArray(e)?e.map((e=>a(e,t))):(o="object"==typeof e&&null!==e?d(e,t):["function","symbol","bigint","undefined"].includes(typeof e)?typeof e:null===e||"number"==typeof e||"string"==typeof e||"boolean"==typeof e?e:JSON.stringify(e),o)},d=(e,t)=>{let o;const n=Object.keys(e);if(r.hp(e)){const t={};e.forEach(((e,o)=>{t[o]="string"==typeof e?e:`[file:${e.type}][${e.name}]`})),o=t}else if(i.VZ(e)&&!Object.hasOwn(e,"toJSON"))o=c(e);else if(1===n.length&&"isTrusted"===n[0]){const t=Object.keys(Object.getPrototypeOf(e));o=JSON.parse(JSON.stringify(e,[...n,...t]))}else o=l(t,e);return o},l=(e,t)=>{if(e.has(t))return"[circular]";e.set(t,!0);const o=[];for(const[r,i]of Object.entries(t))o.push([r,a(i,e)]);return Object.fromEntries(o)},c=e=>{const t=JSON.parse(JSON.stringify(e));return t.name||(t.name=e.name),t.stack||(t.stack=e.stack),t.message||(t.message=e.message),t}},925:(e,t,o)=>{o.d(t,{K:()=>n});var r=o(103);const i="[smartlook-truncated]",n=(e,t=16384)=>{let o=JSON.stringify(e);return o.length<=t?{isTruncated:!1,stringified:o}:(Array.isArray(e)?o=((e,t)=>{let o="";for(const n of e){if(t<=0){o+=JSON.stringify(i)+",";break}const e=(0,r.P)(n,t)+",";o+=e,t-=e.length}return"["+o.slice(0,Math.max(0,o.length-1))+"]"})(e,t):"object"==typeof e&&null!==e?o=((e,t)=>{let o="";for(const[n,s]of Object.entries(e)){if(t<=0){o+=JSON.stringify(i)+":true,";break}const e=`"${n}":${(0,r.P)(s,t)},`;o+=e,t-=e.length}return"{"+o.slice(0,Math.max(0,o.length-1))+"}"})(e,t):"string"==typeof e?o=JSON.stringify(i+"[string] "+e.slice(0,Math.max(0,t))):"number"==typeof e&&(o=JSON.stringify(i+"[number] "+String(e).slice(0,Math.max(0,t)))),{isTruncated:!0,stringified:o})}},40:(e,t,o)=>{o.d(t,{X:()=>d});var r=o(807),i=o(836),n=o(835),s=o(127);const a=["mousemove","click","keypress","touchmove","drag","wheel","mouseover"],d=e=>{return o=function*(){const t=Array.from(document.querySelectorAll("iframe")),o=[document];for(const e of t){const t=r.Lq(e);t&&o.push(t)}const d=[],l=a.map((e=>new Promise((t=>{const r=e=>{(0,s.$)(e)&&t()};for(const t of o)d.push((()=>t.removeEventListener(e,r,!0))),t.addEventListener(e,r,!0)}))));e&&l.push(e.waitForEventFromAnySource(n.lL.USER_ACTIVITY)),yield Promise.any(l);for(const e of d)try{e()}catch(e){i.ZP.debug("Listener could not be removed",e)}},new((t=void 0)||(t=Promise))((function(e,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function n(e){try{s(o.throw(e))}catch(e){r(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,n)}s((o=o.apply(void 0,[])).next())}));var t,o}}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.m=o,i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>"bundle.3de6cfc2c17057c701aa.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@smartlook/recorder:",i.l=(o,r,n,s)=>{if(e[o])e[o].push(r);else{var a,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){a=u;break}}a||(d=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+n),a.src=o),e[o]=[r];var g=(t,r)=>{a.onerror=a.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),t)return t(r)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=g.bind(null,a.onerror),a.onload=g.bind(null,a.onload),d&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="",(()=>{if(void 0!==i){var e=i.u,t=i.e,o={},r={};i.u=function(t){return e(t)+(o.hasOwnProperty(t)?"?"+o[t]:"")},i.e=function(n){return t(n).catch((function(t){var s=r.hasOwnProperty(n)?r[n]:3;if(s<1){var a=e(n);throw t.message="Loading chunk "+n+" failed after 3 retries.\n("+a+")",t.request=a,t}return new Promise((function(e){setTimeout((function(){var t=Date.now();o[n]=t,r[n]=s-1,e(i.e(n))}),100)}))}))}}})(),(()=>{var e={410:0};i.f.j=(t,o)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,i)=>r=e[t]=[o,i]));o.push(r[2]=n);var s=i.p+i.u(t),a=new Error;i.l(s,(o=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,r[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[s,a,d]=o,l=0;if(s.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);d&&d(i)}for(t&&t(o);l<s.length;l++)n=s[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=self.webpackChunk_smartlook_recorder=self.webpackChunk_smartlook_recorder||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{var e=i(836),t=i(188),o=i(48),r=i(718),n=i(181),s=i(397);const a={eu:"manager.eu.smartlook.cloud",us:"manager.us.smartlook.cloud"},d={additionalCreditCardsIdentifiers:s.WV,advancedNetwork:!1,banTime:3e5,cookies:!0,enableCompression:!0,enableRecordingOfAutomationFrameworks:!1,externalLogging:!0,fallbackToAlternativeIds:!1,forceSetupData:null,host:a.eu,interceptors:{},isCrossOriginIframeMode:!1,isRelayProxy:!1,isSmartsupp:!1,loggingLevel:e.in.ERROR,managerHost:a.eu,packAssets:!1,packAssetsToRecording:!1,proxyAllImages:!1,record:{},region:"eu",standalone:!1,startRecordingAfterUserActivity:!0,storageKeys:{SMARTLOOK_BAN_EXPIRE:"smartlook_ban_expire",SMARTLOOK_BAN_REASON:"smartlook_ban_reason",SMARTLOOK_COOKIE:"SL_C_23361dd035530_SID",SMARTLOOK_COOKIE_DOMAIN:"SL_C_23361dd035530_DOMAIN",SMARTLOOK_DEBUG:"smartlook_debug",SMARTLOOK_LEGACY_COOKIE_KEY:"SL_C_23361dd035530_KEY",SMARTLOOK_LEGACY_COOKIE_SID:"SL_C_23361dd035530_SID",SMARTLOOK_LEGACY_COOKIE_VID:"SL_C_23361dd035530_VID",SMARTLOOK_LEGACY_LS_KEY:"SL_L_23361dd035530_KEY",SMARTLOOK_LEGACY_LS_SID:"SL_L_23361dd035530_SID",SMARTLOOK_LEGACY_LS_VID:"SL_L_23361dd035530_VID",SMARTLOOK_LEGACY_SETUP_RETRY_AFTER:"smartlook_setup_retry_after",SMARTLOOK_LEGACY_SETUP_RETRY_AFTER_REASON:"smartlook_setup_retry_after_reason",SMARTLOOK_LS:"SL_L_23361dd035530_SID",SMARTLOOK_LS_QUEUED_CHUNKS:"smartlook_queued_chunks"},upload:()=>null,uploadInterval:7500,userId:null};var l=i(835),c=i(669),u=i(561),g=i(443),h=i(136);const p=()=>!!t.Yp()&&window.parent&&void 0!==window.parent.smartlook,f=e=>!(!window.parent||!window.parent.smartlook||"string"!=typeof window.parent.smartlook.key||window.parent.smartlook.key!==e);var m=i(40);const v=(e,t)=>{let o=e.domain;const r=o.split(".");let i=0;for(;i<r.length-1&&!e.cookie.includes(`${t}=true`);)i+=1,o=r.slice(-1-i).join("."),e.cookie=`${t}=true;domain=${o};path=/;sameSite=strict;secure`;return e.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${o};path=/;sameSite=strict;secure`,o};class w{constructor(e,t){this.storageKeys=e,this.useCookies=t,this.getCookieData=()=>{this.convertDeprecatedCookieDataIfNeeded();const e=w.getCookie(this.storageKeys.SMARTLOOK_COOKIE);try{return JSON.parse(null!=e?e:"{}")}catch(e){return{}}},this.convertDeprecatedCookieData()}clearCookies(){this.useCookies&&this.removeCookie(this.storageKeys.SMARTLOOK_COOKIE)}getCookieMetadataForProjectKey(e){var t;return this.useCookies&&(null!==(t=this.getCookieData()[e])&&void 0!==t?t:null)||null}setCookieProjectMetadata(e,t){if(!this.useCookies)return;const o=this.getCookieData();o[e]=t,this.setCookie(this.storageKeys.SMARTLOOK_COOKIE,JSON.stringify(o))}static getAllCookies(e){const t=document.cookie.split(";"),o=[];try{for(let r=0;r<t.length;r+=1){const i=t[r].trim().split("=");i[0]===e&&o.push(i[1])}}catch(e){}return o}static getAllValuesOfCookieAndRemoveIt(t){let o=window.document.domain;const r=w.getAllCookies(t);try{const e=o.split(".");let r=0;for(;r<e.length-1&&window.document.cookie.includes(`${t}`);)r+=1,o=e.slice(-1-r).join("."),window.document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${o};path=/;sameSite=strict;secure`}catch(t){e.ZP.errorNoConsole("Removing cookies failed.",t)}return r.reverse()}static getCookie(e){const t=document.cookie.split(";");try{for(let o=0;o<t.length;o+=1){const r=t[o].trim().split("=");if(r[0]===e)return r[1]}}catch(e){}return null}static getCookieExpirationDate(){const e=new Date;return e.setMonth(e.getMonth()+13),e.toUTCString()}convertDeprecatedCookieData(){const e=w.getCookie(this.storageKeys.SMARTLOOK_COOKIE),t=e&&e.startsWith("{")&&e.endsWith("}"),o=w.getCookie(this.storageKeys.SMARTLOOK_LEGACY_COOKIE_KEY),r=w.getCookie(this.storageKeys.SMARTLOOK_LEGACY_COOKIE_VID);let i=!1;if(!t&&e&&o&&r){const t={[o]:{sessionId:e,visitorId:r}};this.setCookie(this.storageKeys.SMARTLOOK_COOKIE,JSON.stringify(t)),i=!0}t||i||this.removeCookie(this.storageKeys.SMARTLOOK_COOKIE),this.removeCookie(this.storageKeys.SMARTLOOK_LEGACY_COOKIE_KEY),this.removeCookie(this.storageKeys.SMARTLOOK_LEGACY_COOKIE_VID)}convertDeprecatedCookieDataIfNeeded(){w.getCookie(this.storageKeys.SMARTLOOK_COOKIE)||this.convertDeprecatedCookieData()}removeCookie(e){window.document.cookie=`${e}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${v(document,this.storageKeys.SMARTLOOK_COOKIE_DOMAIN)};path=/`}setCookie(e,t){t&&(window.document.cookie=`${e}=${t};expires=${w.getCookieExpirationDate()};domain=${v(document,this.storageKeys.SMARTLOOK_COOKIE_DOMAIN)};path=/;sameSite=strict;secure`)}}const y=e=>{let t=null;try{t=window.localStorage.getItem(e)}catch(e){}return t},S=(e,t)=>{try{return window.localStorage.setItem(e,t),!0}catch(e){return!1}},O=e=>{try{window.localStorage.removeItem(e)}catch(e){}};class R{constructor(e,t){this.projectKey=e,this.storageKeys=t,this.getLocalStorageData=()=>{this.convertDeprecatedLocalStorageDataIfNeeded();const e=y(this.storageKeys.SMARTLOOK_LS);try{return JSON.parse(null!=e?e:"{}")}catch(e){return{}}},this.getLocalStorageProjectMetadata=e=>{var t;return null!==(t=this.getLocalStorageData()[e])&&void 0!==t?t:null},this.removeFromLocalStorageProjectMetadata=(e,t)=>{const o=this.getLocalStorageData();o[e]&&(delete o[e][t],S(this.storageKeys.SMARTLOOK_LS,JSON.stringify(o)))},this.updateLocalStorageProjectMetadata=(e,t)=>{const o=this.getLocalStorageData();o[e]=Object.assign(Object.assign({},o[e]),t),S(this.storageKeys.SMARTLOOK_LS,JSON.stringify(o))},this.convertDeprecatedLocalStorageData()}clearLocalStorage(){O(this.storageKeys.SMARTLOOK_LS),O(this.storageKeys.SMARTLOOK_BAN_REASON),O(this.storageKeys.SMARTLOOK_BAN_EXPIRE),O(this.storageKeys.SMARTLOOK_DEBUG)}getBanExpire(){return y(this.storageKeys.SMARTLOOK_BAN_EXPIRE)}getBanReason(){return y(this.storageKeys.SMARTLOOK_BAN_REASON)}getLocalStorageMetadataForProjectKey(e){const t=this.getLocalStorageProjectMetadata(e);if(!t)return null;const{sessionId:o,visitorId:r}=t;return{sessionId:o,visitorId:r}}getQueuedChunks(){const t=y(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS);if(t)try{const e=JSON.parse(t);if(Array.isArray(e))return e}catch(t){e.ZP.warnNoConsole("Cannot get queued chunk from local storage.",t)}return null}getSetupRetryAfterExpire(){var e;const t=this.getLocalStorageProjectMetadata(this.projectKey);return null!==(e=null==t?void 0:t.setupRetryAfter)&&void 0!==e?e:null}getSetupRetryAfterExpireReason(){var e;const t=this.getLocalStorageProjectMetadata(this.projectKey);return null!==(e=null==t?void 0:t.setupRetryAfterReason)&&void 0!==e?e:null}isRecorderInDebugMode(){return Boolean(y(this.storageKeys.SMARTLOOK_DEBUG))}queueChunkToSend(t){const o=y(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS),r=[];if(o)try{const e=JSON.parse(o);Array.isArray(e)&&r.push(...e)}catch(t){e.ZP.warnNoConsole("Cannot parse queued chunk from local storage.",t)}return r.push(t),S(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS,JSON.stringify(r))}removeBanExpire(){O(this.storageKeys.SMARTLOOK_BAN_EXPIRE)}removeBanReason(){O(this.storageKeys.SMARTLOOK_BAN_REASON)}removeQueuedChunks(){O(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS)}removeSetupAfterExpire(){this.removeFromLocalStorageProjectMetadata(this.projectKey,"setupRetryAfter")}removeSetupAfterExpireReason(){this.removeFromLocalStorageProjectMetadata(this.projectKey,"setupRetryAfterReason")}setBanExpire(e){S(this.storageKeys.SMARTLOOK_BAN_EXPIRE,e)}setBanReason(e){S(this.storageKeys.SMARTLOOK_BAN_REASON,e)}setLocalStorageProjectMetadata(e,t){this.updateLocalStorageProjectMetadata(e,t)}setSetupRetryAfter(e){this.updateLocalStorageProjectMetadata(this.projectKey,{setupRetryAfter:e})}setSetupRetryAfterReason(e){this.updateLocalStorageProjectMetadata(this.projectKey,{setupRetryAfterReason:e})}convertDeprecatedLocalStorageData(){const e=y(this.storageKeys.SMARTLOOK_LS),t=e&&e.startsWith("{")&&e.endsWith("}"),o=y(this.storageKeys.SMARTLOOK_LEGACY_LS_KEY),r=y(this.storageKeys.SMARTLOOK_LEGACY_LS_VID),i=y(this.storageKeys.SMARTLOOK_LEGACY_SETUP_RETRY_AFTER),n=y(this.storageKeys.SMARTLOOK_LEGACY_SETUP_RETRY_AFTER_REASON);let s=!1;if(!t&&e&&o&&r){const t={[o]:Object.assign(Object.assign({sessionId:e,visitorId:r},i&&{setupRetryAfter:i}),n&&{setupRetryAfterReason:n})};S(this.storageKeys.SMARTLOOK_LS,JSON.stringify(t)),s=!0}t||s||O(this.storageKeys.SMARTLOOK_LS),O(this.storageKeys.SMARTLOOK_LEGACY_LS_KEY),O(this.storageKeys.SMARTLOOK_LEGACY_LS_VID),O(this.storageKeys.SMARTLOOK_LEGACY_SETUP_RETRY_AFTER),O(this.storageKeys.SMARTLOOK_LEGACY_SETUP_RETRY_AFTER_REASON)}convertDeprecatedLocalStorageDataIfNeeded(){y(this.storageKeys.SMARTLOOK_LS)||this.convertDeprecatedLocalStorageData()}}class k{constructor({projectKey:e,storageKeys:t,useCookies:o}){this.cookieManager=new w(t,o),this.localStorageManager=new R(e,t)}clearStorage(){this.localStorageManager.clearLocalStorage(),this.cookieManager.clearCookies()}getBanExpire(){return this.localStorageManager.getBanExpire()}getBanReason(){return this.localStorageManager.getBanReason()}getCookieMetadataForProjectKey(e){return this.cookieManager.getCookieMetadataForProjectKey(e)}getLocalStorageMetadataForProjectKey(e){return this.localStorageManager.getLocalStorageMetadataForProjectKey(e)}getQueuedChunks(){return this.localStorageManager.getQueuedChunks()}getSetupRetryAfterExpire(){return this.localStorageManager.getSetupRetryAfterExpire()}getSetupRetryAfterExpireReason(){return this.localStorageManager.getSetupRetryAfterExpireReason()}isRecorderInDebugMode(){return this.localStorageManager.isRecorderInDebugMode()}queueChunkToSend(e){return this.localStorageManager.queueChunkToSend(e)}removeBanExpire(){this.localStorageManager.removeBanExpire()}removeBanReason(){this.localStorageManager.removeBanReason()}removeQueuedChunks(){this.localStorageManager.removeQueuedChunks()}removeSetupAfterExpire(){this.localStorageManager.removeSetupAfterExpire()}removeSetupAfterExpireReason(){this.localStorageManager.removeSetupAfterExpireReason()}setBanExpire(e){this.localStorageManager.setBanExpire(e)}setBanReason(e){this.localStorageManager.setBanReason(e)}setMetadata(e,t){this.cookieManager.setCookieProjectMetadata(e,t),this.localStorageManager.setLocalStorageProjectMetadata(e,t)}setSetupRetryAfter(e){this.localStorageManager.setSetupRetryAfter(e)}setSetupRetryAfterReason(e){this.localStorageManager.setSetupRetryAfterReason(e)}}class b{getServerTime(){if(void 0===this.lastServerTime||void 0===this.relativeTimeSinceLastServerTimeSet)throw new u.iF("Server time is undefined",{additionalData:{lastServerTime:this.lastServerTime,relativeTimeSinceLastServerTimeSet:this.relativeTimeSinceLastServerTimeSet},shouldReport:!0});return new Date(this.lastServerTime.getTime()+performance.now()-this.relativeTimeSinceLastServerTimeSet)}getServerTimestamp(){return this.getServerTime().getTime()}setServerTime(e){this.lastServerTime=new Date(e),this.relativeTimeSinceLastServerTimeSet=performance.now()}}class E{constructor(){this.scrollPositionsByElement=new WeakMap,this.getPosition=e=>this.scrollPositionsByElement.get(e),this.setPosition=(e,t)=>{this.scrollPositionsByElement.set(e,t)}}}class A{constructor(t,o,r,i){if(this.persistentStorageManager=t,this.startRecording=o,this.stopRecording=r,this.config=i,this.isRecordingStopped=!1,this.isAppliedBan(!0)){const t=this.persistentStorageManager.getBanExpire();if(t){const o=Number.parseInt(t,10)-Date.now();o>0&&(e.ZP.debug(`BAN is applied. Waiting ${o}ms.`),this.banTimeoutId=setTimeout((()=>{this.banTimeoutId=void 0,this.startRecording()}),o))}}}applyBan(t){if("hidden"===document.visibilityState)return;if(this.config.isCrossOriginIframeMode){if(e.ZP.debug("Ban is not applied. Cross-origin mode detected."),!this.isRecordingStopped)try{this.stopRecording()}catch(e){}finally{this.isRecordingStopped=!0}return}t.shouldReport&&(e.ZP.warnNoConsole(`Applying ban. Reason: "${t.message}".`,t),e.ZP.warn(`Applying ban. Reason: "${t.message}".`,t));const o=Date.now()+this.config.banTime;if(this.persistentStorageManager.setBanExpire(o.toString()),this.persistentStorageManager.setBanReason(t.message),void 0===this.banTimeoutId){if(!this.isRecordingStopped)try{this.stopRecording()}catch(e){}finally{this.isRecordingStopped=!0}}else clearTimeout(this.banTimeoutId);this.banTimeoutId=setTimeout((()=>{this.banTimeoutId=void 0;try{this.startRecording()}catch(o){e.ZP.error("Cannot start recording after BAN expired",o,{banReason:t.message})}}),this.config.banTime)}clearBanIfApplied(){this.persistentStorageManager.removeBanExpire(),this.persistentStorageManager.removeBanReason(),this.banTimeoutId&&clearTimeout(this.banTimeoutId)}getBanReason(){var e;return null!==(e=this.persistentStorageManager.getBanReason())&&void 0!==e?e:""}isAppliedBan(e=!1){if(!e)return void 0!==this.banTimeoutId;const t=this.persistentStorageManager.getBanExpire();return!!(t&&Number.parseInt(t,10)>Date.now())||(this.persistentStorageManager.removeBanExpire(),this.persistentStorageManager.removeBanReason(),!1)}}var I=i(127),L=i(103);class _{constructor(t){this.config=t,this.isSendingLogsDisabled=!1,this.logMessagesCache=new Map,this.logsToSend=[],this.uuid=(0,g.O)(),this.sendLog=(t,o,r,...i)=>{if(o===e.in.ERROR||"internal"===t){const e=this.logMessagesCache.get(r),t=performance.now();if(this.logMessagesCache.set(r,t),void 0!==e&&t-e<1e3)return;this.logsToSend.push(this.createLog(r,o,...i)),"hidden"===document.visibilityState&&this.processLogs()}},this.createLog=(t,o,...r)=>{var i,n,s,a,d,l,c,u,g;const h=Object.fromEntries(r.map(((e,t)=>[t,JSON.parse((0,L.P)(e))]))),p=this.config,{userId:f}=p,m=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(p,["userId"]);return{context:Object.assign({apiCallHistory:window.smartlook._apiCallsHistory,config:m,datadogHost:this.config.managerHost,isIframe:window.top!==window,isWindowOpened:null!==window.opener,origin:null!==(i=window.location.origin)&&void 0!==i?i:"unknown",playUrl:null!==(n=window.smartlook.playUrl)&&void 0!==n?n:"unknown",recordId:null!==(s=window.smartlook.recordId)&&void 0!==s?s:"unknown",referrer:document.referrer,sessionId:null!==(a=window.smartlook.sessionId)&&void 0!==a?a:"unknown",url:null!==(l=null===(d=window.location)||void 0===d?void 0:d.href)&&void 0!==l?l:"unknown",userAgent:null!==(u=null===(c=window.navigator)||void 0===c?void 0:c.userAgent)&&void 0!==u?u:"unknown",uuid:this.uuid,visibilityState:document.visibilityState,visitorId:null!==(g=window.smartlook.visitorId)&&void 0!==g?g:"unknown"},h),message:t,severity:e.jj[o],tags:{},timestamp:Date.now()}},this.handleError=t=>{t.error instanceof u.iF&&t.error.shouldReport&&(this.logsToSend.push(this.createLog(`Uncaught error: ${t.error}`,e.in.ERROR,t.error)),"hidden"===document.visibilityState&&this.processLogs())},this.handlePromiseRejection=t=>{var o;if(t.reason instanceof u.iF&&t.reason.shouldReport){if("string"==typeof(null===(o=t.reason.additionalData)||void 0===o?void 0:o.message)&&(t.reason.additionalData.message.includes("Cannot set properties of undefined (setting 'sessionManager')")||t.reason.additionalData.message.includes("undefined is not an object (evaluating 'this.sessionManager=e')")||t.reason.additionalData.message.includes("this is undefined")||t.reason.additionalData.message.includes("Unable to set property 'sessionManager' of undefined or null reference")))return;this.logsToSend.push(this.createLog(`Unhandled promise rejection: ${t.reason}`,e.in.ERROR,t.reason)),"hidden"===document.visibilityState&&this.processLogs()}},this.processLogIntervalId=setInterval((()=>{this.processLogs()}),this.config.uploadInterval),window.addEventListener("error",this.handleError,!0),window.addEventListener("unhandledrejection",this.handlePromiseRejection,!0),document.addEventListener("visibilitychange",(e=>{(0,I.$)(e)&&"hidden"===document.visibilityState&&(this.processLogs(),setTimeout((()=>{this.processLogs()}),500))}),!0)}processLogs(){return e=this,i=function*(){if(!this.isSendingLogsDisabled&&this.logsToSend.length>0){const e=this.logsToSend;this.logsToSend=[];const t={logs:e,tags:{platform:"web",sdkVersion:this.config.recorderVersion,userAgent:navigator.userAgent}};try{"visible"===document.visibilityState?yield(0,o.jq)({datadogHost:this.config.managerHost,payload:t,projectKey:this.config.projectKey}):yield(0,o.x2)({datadogHost:this.config.managerHost,payload:t,projectKey:this.config.projectKey})}catch(t){t instanceof r.M&&(422===t.status||404===t.status)?this.isSendingLogsDisabled=!0:this.logsToSend.push(...e)}}},new((t=void 0)||(t=Promise))((function(o,r){function n(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(n,s)}a((i=i.apply(e,[])).next())}));var e,t,i}}var M=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{d(r.next(e))}catch(e){n(e)}}function a(e){try{d(r.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};const T=window.parent===window.top?1e4:11e3;class C{constructor(t){this.projectKey=t,this.discoveredIframeWindows=new Set,this.eventListenersByEventType=new Map,this.isClosed=!1,this.pendingEventsByMessageEventSource=new Map,this.waitingListenersByEventType=new Map,this.waitingListenersByEventTypeByMessageEventSource=new Map,this.addPostMessageEventListener=(e,t)=>{const o=this.eventListenersByEventType.get(e);o?o.push(t):this.eventListenersByEventType.set(e,[t])},this.broadcastEventToAllDiscoveredIframes=e=>{this.discoveredIframeWindows.forEach((t=>{t.postMessage(e,"*")}))},this.clearDiscoveredIframeWindows=()=>{this.discoveredIframeWindows.clear()},this.close=()=>{this.isClosed=!0},this.isTherePendingEvent=(t,o)=>{var r;const i=this.pendingEventsByMessageEventSource.get(o);if(i){const o=(null!==(r=i.get(t))&&void 0!==r?r:[]).filter((e=>e.name===t));if(o.length>0)return o.length>1&&e.ZP.warn("Received multiple events. Taking first received."),!0}return!1},this.sendEventToSource=(t,o)=>{e.ZP.debug(`Sending ${t.name} event to different source.`,t),o.postMessage(t,"*")},this.waitForEventFromAnySource=t=>M(this,void 0,void 0,(function*(){var o;for(const r of this.pendingEventsByMessageEventSource.values()){const i=null!==(o=r.get(t))&&void 0!==o?o:[],n=i.filter((e=>e.name===t));if(n.length>0)return n.length>1&&e.ZP.warn("Received multiple events. Taking first received."),r.set(t,i.filter((e=>e.name!==t))),n[0]}let r,i=this.waitingListenersByEventType.get(t);void 0===i&&(i=[],this.waitingListenersByEventType.set(t,i));const n=yield new Promise((e=>{i&&(r=e,i.push(e))}));return r&&(e.ZP.debug(`Removing event listener for "${t}".`),this.waitingListenersByEventType.set(t,i.filter((e=>e!==r)))),n})),this.waitForEventFromSource=(t,o)=>M(this,void 0,void 0,(function*(){var r;const i=this.pendingEventsByMessageEventSource.get(o);if(i){const o=null!==(r=i.get(t))&&void 0!==r?r:[],n=o.filter((e=>e.name===t));if(n.length>0)return n.length>1&&e.ZP.warn("Received multiple events. Taking first received."),i.set(t,o.filter((e=>e.name!==t))),n[0]}let n=this.waitingListenersByEventTypeByMessageEventSource.get(o);void 0===n&&(n=new Map,this.waitingListenersByEventTypeByMessageEventSource.set(o,n));const s=yield new Promise((e=>{if(void 0===n)throw new u.iF("listenersByWindow is undefined");n.set(t,e)}));return n.delete(t),s})),this.waitForEventFromSourceOrThrowAfterGivenTime=(e,t,o=T)=>{const r=this.waitForEventFromSource(e,t),i=new Promise(((t,r)=>{setTimeout((()=>{r(new u.Fx(`Could not retrieve event ${e} in given time (${o}ms).`,{shouldReport:!1}))}),o)}));return Promise.race([r,i])},this.postMessageEventListener=t=>{if(!(0,I.$)(t))return;const o=t.data;if((0,l.ot)(o)&&t.source){const r=t.source;if(o.key!==this.projectKey)return void e.ZP.debug("Received event with different key.",t);(0,l.LT)(o)&&!this.isClosed&&(e.ZP.debug("Received discovery. Sending discovered response",t),this.sendEventToSource({name:l.lL.DISCOVERED,key:this.projectKey,sessionId:window.smartlook.sessionId},r)),(0,l.hd)(o)&&!this.isClosed&&(e.ZP.debug("Received discovered. Sending acknowledged response",t),this.sendEventToSource({name:l.lL.ACKNOWLEDGED,key:this.projectKey},r),this.discoveredIframeWindows.add(t.source));const i=this.eventListenersByEventType.get(o.name);if(i){e.ZP.debug(`Found listeners for event - ${t.data.name}.`,t);for(const e of i)e(t.data)}const n=this.waitingListenersByEventTypeByMessageEventSource.get(t.source);if(n){const t=n.get(o.name);t&&(e.ZP.debug(`Found waiting listener for event - ${o.name}.`),t(o))}const s=this.waitingListenersByEventType.get(o.name);if(s&&s.length>0&&(e.ZP.debug(`Found waiting listener from any source for event - ${o.name}.`),s.forEach((e=>e(o)))),n||i||s&&s.length>0)return;e.ZP.debug(`No pending listener found for ${o.name}.`);const a=this.pendingEventsByMessageEventSource.get(t.source);if(a){const e=a.get(o.name);e?(e.push(o),a.set(o.name,e)):a.set(o.name,[o])}else{const e=new Map;e.set(o.name,[o]),this.pendingEventsByMessageEventSource.set(t.source,e)}}},window.addEventListener("message",this.postMessageEventListener)}}class P{constructor(t){this.persistentStorageManager=t,this.applyRetryAfter=e=>{const t=Date.now()+1e3*e;this.persistentStorageManager.setSetupRetryAfter(t.toString())},this.getAppliedRetryAfterReason=()=>this.persistentStorageManager.getSetupRetryAfterExpireReason(),this.isAppliedRetryAfter=()=>{const t=this.persistentStorageManager.getSetupRetryAfterExpire();return t&&Number.parseInt(t,10)>Date.now()?!(Number.parseInt(t,10)-Date.now()>6048e5&&(e.ZP.errorNoConsole("Value of `setupRetryAfterExpire` is greater than one week. Ignoring it.",{currentTime:Date.now(),currentTimeISO:(new Date).toISOString(),setupRetryAfterExpire:t}),this.removeRetryAfterValues(),1)):(this.removeRetryAfterValues(),!1)},this.removeRetryAfterValues=()=>{this.persistentStorageManager.removeSetupAfterExpireReason(),this.persistentStorageManager.removeSetupAfterExpire()},this.setAppliedRetryAfterReason=e=>{this.persistentStorageManager.setSetupRetryAfterReason(e)}}}var K,D,N,j=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{d(r.next(e))}catch(e){n(e)}}function a(e){try{d(r.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};let B;i.p=null===document.currentScript?window.smartlook.scriptSource+"es6/":window.smartlook.scriptSource+"es5/";let x,$,U=!1,F=!1,Z=!0;const G=[];let Y,J,H,W,q,V,z,Q,X,ee=[],te=!1,oe=!1,re=0,ie=!1,ne=!1,se=!1;const ae=performance.now(),de=(s,...v)=>j(void 0,void 0,void 0,(function*(){var w,y,S,O,R,I,L,M;if(window.smartlook._loadInfo=window.smartlook._loadInfo||[],(e=>{void 0===window.smartlook._apiCallsHistory&&(window.smartlook._apiCallsHistory=[]),window.smartlook._apiCallsHistory.push(["function"==typeof e?"function":e,performance.now()-ae]),window.smartlook._apiCallsHistory.length>15&&window.smartlook._apiCallsHistory.shift()})(s),window.navigator.userAgent.includes("BingPreview")||window.navigator.userAgent.includes("adidxbot")||window.navigator.userAgent.includes("Bingbot"))(0,c.N)("Smartlook is disabled. Bot detected.");else{if("init"===s&&re<1||"reinit"===s){if(X=v[0],Q=null!==(w=v[1])&&void 0!==w?w:{},"string"==typeof X&&(X=X.trim()),void 0===X||"string"==typeof X&&0===X.length)return window.smartlook._loadInfo.push("Initialization unsuccessful. Project key is empty."),(0,c.N)("Smartlook could not be initialized. Provided project key is empty."),void("reinit"===s&&(ie=!1));if(z=((e,t,o)=>{const r=Object.assign(d,Object.assign(Object.assign({},o),{projectKey:e,recorderVersion:"b6a4f7d"}));if(o.host){r.managerHost=r.host;const e=n.u(o.host);(!e.host.endsWith("smartlook.cloud")&&!e.host.endsWith("smartlook.com")||e.host.endsWith("smartlook.cloud")&&e.host.includes("relay-proxy"))&&(r.managerHost=n.u(e.toString(),"/manager").toString(),r.isRelayProxy=!0)}else if(o.region){const e=a[o.region];if(void 0===e)throw new Error("Unknown region");r.host=e,r.managerHost=e}return"f2353f89c956e0b7a93a0ab1b5cfbf01725acab2"===e&&(r.host=a.us,r.managerHost=a.us),r.packAssetsToRecording&&(r.packAssets={fonts:!0,images:!0,styles:!0}),["b0375d591e85b0affec1d581bfed3c760cb8c56d","ff68798c802965f6c79ab4a4f317fe02e778c847","263616316fc439f9ca1bfc939d7841ab0b310a19","57cac5996e97c209eb339793b7a1977c2ee9177d","2a5a223d674a1920334b75bb26b7a13ad2662dc3","f90c858c4670dc0d26743247a5a842e45f625f2d"].includes(e)&&(r.fallbackToAlternativeIds=!0),"051840f3c6e4c1a4fa02caacfbb89b05dc201643"===e&&(r.standalone=!0),r})(X,0,null!=Q?Q:{}),!z.enableRecordingOfAutomationFrameworks&&navigator.webdriver)return window.smartlook._loadInfo.push("Initialization unsuccessful. Automation framework is detected."),void(0,c.N)("Smartlook is stopped. Automation framework is detected.");if(!se){if((t=>{Object.defineProperties(window.smartlook,{_debugData:{get(){var o;try{return void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)&&window.parent&&window.parent.smartlook?window.parent.smartlook._debugData:null===(o=window.smartlook.recorder)||void 0===o?void 0:o.debugData}catch(t){e.ZP.debug(`Cannot get _debugData: ${t}`)}}},isIframeModeEnabled:{get:()=>t.isCrossOriginIframeMode||void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)},key:{get(){try{return t.projectKey}catch(t){e.ZP.debug(`Cannot get key: ${t}`)}}},playUrl:{get(){var o;try{return void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)&&window.parent&&window.parent.smartlook?window.parent.smartlook.playUrl:null===(o=window.smartlook.recorder)||void 0===o?void 0:o.playUrl}catch(t){e.ZP.debug(`Cannot get playUrl: ${t}`)}}},recordId:{get(){var o;try{return void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)&&window.parent&&window.parent.smartlook?window.parent.smartlook.recordId:null===(o=window.smartlook.recorder)||void 0===o?void 0:o.recordId}catch(t){e.ZP.debug(`Cannot get recordId: ${t}`)}}},sessionId:{get(){var o;try{return void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)&&window.parent&&window.parent.smartlook?window.parent.smartlook.sessionId:null===(o=window.smartlook.recorder)||void 0===o?void 0:o.sessionId}catch(t){e.ZP.debug(`Cannot get sessionId: ${t}`)}}},version:{get:()=>t.recorderVersion},visitorId:{get(){var o;try{return void 0===window.smartlook.recorderClass&&p()&&f(t.projectKey)&&window.parent&&window.parent.smartlook?window.parent.smartlook.visitorId:null===(o=window.smartlook.recorder)||void 0===o?void 0:o.visitorId}catch(t){e.ZP.debug(`Cannot get visitorId: ${t}`)}}}})})(z),!te){const t=((t,o)=>{const r=new k({projectKey:t.projectKey,storageKeys:t.storageKeys,useCookies:t.cookies}),i=new b,n=new E,s=new A(r,(()=>window.smartlook("reinit",t.projectKey,o)),(()=>window.smartlook("stop")),t);let a;t.externalLogging&&(a=new _(t)),!0!==window.smartlook.silent&&e.ZP.setLoggingLevel(r.isRecorderInDebugMode()?e.in.DEBUG:t.loggingLevel);const d=new C(t.projectKey);return a&&e.ZP.setMiddleware(a.sendLog),{banService:s,persistentStorageManager:r,postMessageService:d,scrollManager:n,setupRetryAfterService:new P(r),timeManager:i}})(z,Q);W=t.persistentStorageManager,J=t.banService,q=t.timeManager,V=t.scrollManager,Y=t.postMessageService,H=t.setupRetryAfterService,te=!0}se=!0;const t=W.getQueuedChunks();try{t&&(t=>{0!==t.length&&requestIdleCallback((()=>{for(const r of t){const t=new FormData;for(const[e,o]of Object.entries(r.apiData)){const r=JSON.stringify(o);t.append(e,r)}e.ZP.debug("Writing queued chunk.",{chunk:r}),(0,o.iY)({formData:t,isFromPreviousRecord:!0,recordId:r.apiData.recordData.id,sessionId:r.apiData.sessionData.id,visitorId:r.apiData.visitorData.id,writerHost:r.writerHost}).catch((t=>{e.ZP.debug("Writing queued chunk failed.",{chunk:r,error:t})}))}}))})(t)}catch(t){e.ZP.errorNoConsole("Sending queued chunks failed.")}finally{W.removeQueuedChunks()}}}if(X&&p())if(e.ZP.debug("Smartlook loaded in parent window."),U)e.ZP.debug("Smartlook is already initialized in iframe. No API calls will be proxied.");else{if(f(X)){if(e.ZP.debug("Detected smartlook in parent window. API calls 'navigate', 'track', 'properties', 'navigation' and 'error' will be proxied there. All the other will be silently ignored."),"string"==typeof s&&["track","properties","navigation","error"].includes(s))return e.ZP.debug(`Sending API call ${s} to parent window.`),null===(y=window.parent)||void 0===y?void 0:y.smartlook(s,...v);if("init"===s){e.ZP.debug("Smartlook in parent window is initialized and records to same project.");const t=[...ee];return ee=[],void queueMicrotask((()=>{t.forEach((([e,t,o])=>{de(e,...o).finally(t)}))}))}return void console.debug(`Smartlook is loaded in same-origin iframe. Calling '${s}' API in iframe is disabled. Please call it in parent page.`)}if("init"===s){if(e.ZP.debug("Waiting for smartlook in parent window to initialize."),yield(L=void 0,M=function*(){let e;yield new Promise((t=>{e=setInterval((()=>{var o,r;void 0!==(null===(r=null===(o=window.parent)||void 0===o?void 0:o.smartlook)||void 0===r?void 0:r.key)&&(void 0!==e&&(clearInterval(e),e=void 0),t())}),100)}))},new(L||(L=Promise))((function(e,t){function o(e){try{i(M.next(e))}catch(e){t(e)}}function r(e){try{i(M.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof L?i:new L((function(e){e(i)}))).then(o,r)}i((M=M.apply(void 0,[])).next())}))),f(X)){e.ZP.debug("Smartlook in parent window is initialized and records to same project.");const t=[...ee];return ee=[],void queueMicrotask((()=>{t.forEach((([e,t,o])=>{de(e,...o).finally(t)}))}))}e.ZP.debug("Smartlook in parent window is initialized but records to different project.")}}if("visitor_blocked"===$&&z&&"identify"===s&&!ne){ne=!0;const[t]=v;if("string"!=typeof t&&"number"!=typeof t||"string"==typeof t&&!t)return(0,c.N)(`Invalid user id passed to smartlook('identify', ...). Received: ${t}`),void(ne=!1);const o=new Promise((e=>{ee.unshift([s,e,v]),ee.unshift(...G)})).finally((()=>{ne=!1}));return void 0===X||void 0===Q?void e.ZP.error("Cannot run reinit. Project key or init options are not defined.",{initOptions:Q,projectKey:X}):(yield de("reinit",X,Object.assign(Object.assign({},Q),{userId:String(t)})),o)}if(!["init","finish","reinit"].includes(s)&&(!U||ie))return new Promise((e=>{ee.push([s,e,v])}));if("init"===s||"reinit"===s){if(void 0===z)return void e.ZP.warn("Config is undefined.");if("reinit"===s&&(ie=!0),"init"===s&&(re+=1),re>1){const t=v[0];return"string"==typeof t&&t.trim()!==z.projectKey?(window.smartlook._loadInfo.push("Initialization unsuccessful. Init API called twice with different project keys."),(0,c.N)(`Smartlook init method called twice with different project keys (${z.projectKey}, ${t.trim()}).`)):(window.smartlook._loadInfo.push("Initialization unsuccessful. Init called twice."),e.ZP.debug(`Init called ${re}x times. Skipping initialization.`)),void("reinit"===s&&(ie=!1))}e.ZP.debug("Init called.");const n=v[2];if(J.isAppliedBan())return window.smartlook._loadInfo.push(`Initialization unsuccessful. BAN applied - ${J.getBanReason()}`),e.ZP.debug("BAN is applied. Initialization is postponed."),n&&n(),void("reinit"===s&&(ie=!1));(t.MN()||z.standalone)&&z.startRecordingAfterUserActivity&&(window.smartlook._loadInfo.push(`Initialization waiting for user activity. Start: ${Date.now()}`),yield(0,m.X)(Y),window.smartlook._loadInfo.push(`Initialization continues. User activity detected. Start: ${Date.now()}`)),ee.length>0&&"anonymize"===ee[0][0]&&(window.smartlook._loadInfo.push("Anonymize called straight after init. Clearing storage."),e.ZP.debug("Anonymize called straight after init. Clearing storage."),W.clearStorage(),ee.shift()),t.MN()||t.Yp()||null===window.parent||z.standalone||(J.clearBanIfApplied(),B=yield(T=z,K=window.parent,j(void 0,void 0,void 0,(function*(){e.ZP.debug("Sending discovered event to parent window event.",window.location.href),Y.sendEventToSource({name:l.lL.DISCOVERED,key:T.projectKey,sessionId:void 0},window.parent);try{return e.ZP.debug("Waiting for acknowledged event from parent.",window.location.href),yield Y.waitForEventFromSourceOrThrowAfterGivenTime(l.lL.ACKNOWLEDGED,window.parent),(0,m.X)().then((()=>{void 0!==z&&(e.ZP.debug("Sending user activity event to parent.",window.location.href),Y.sendEventToSource({name:l.lL.USER_ACTIVITY,key:z.projectKey},window.parent))})),e.ZP.debug("Waiting for start recording event from parent.",window.location.href),yield Y.waitForEventFromSource(l.lL.START_RECORDING,K)}catch(t){t instanceof u.Fx&&(e.ZP.debug("Could not receive post message in `init`. Timeout exceeded.",window.location.href),Y.close()),e.ZP.warn("Error happened during receiving post message from parent in `init`. Continuing normal recording.",t,window.location.href,document.visibilityState)}}))),B?(z.isCrossOriginIframeMode=!0,e.ZP.debug("Received start recording event",B,window.location.href),e.ZP.debug("Attaching START_RECORDING event listener.",window.location.href),Y.addPostMessageEventListener(l.lL.START_RECORDING,(t=>{var o;if(!z)throw new u.iF("Config is undefined",{shouldReport:!0});z.isCrossOriginIframeMode=!0;try{null===(o=window.smartlook.recorder)||void 0===o||o.startRecording(t.sessionId,t.visitorId,t.recordId,t.setupData,void 0,{frameElementId:t.frameElementId,frameMetadata:t.frameMetadata,parentFrameElementId:t.parentFrameElementId,relativeParentTimeStart:t.relativeTime})}catch(t){e.ZP.errorNoConsole("Coudl not startRecording in cross-origin iframe",t)}})),e.ZP.debug("Attaching STOP_RECORDING event listener."),Y.addPostMessageEventListener(l.lL.STOP_RECORDING,(()=>{var e;try{null===(e=window.smartlook.recorder)||void 0===e||e.stopRecording()}catch(e){if(e instanceof u.zT)return;throw e}}))):yield(0,m.X)()),window.smartlook._loadInfo.push("Initialization - retrieving active sessions/creating new one.");const a=(0,h.KB)(z,W);let d,p,f,w,y,k;if(void 0===B){const e=yield(0,h.dD)(a,z,W);d=e.sessionId,p=e.visitorId,f=(0,g.O)(),w=e.sessionTimeRemaining}else d=B.sessionId,p=B.visitorId,f=B.recordId,y={frameElementId:B.frameElementId,frameMetadata:B.frameMetadata,parentFrameElementId:B.parentFrameElementId,relativeParentTimeStart:B.relativeTime};try{if(H.isAppliedRetryAfter()&&!ne){const e=H.getAppliedRetryAfterReason();if(Z=!1,x="setup call is throttled",$="spamming_visitor",window.smartlook._loadInfo.push("Initialization - spamming visitor."),e)try{const t=JSON.parse(e);t.code&&($=t.code),t.message&&(x=t.message)}catch(e){}(0,c.N)(`Smartlook not recording. Reason: ${x}.`)}else{window.smartlook._loadInfo.push(`Initialization - setup call. Timestamp - ${Date.now()}`);const e=B?{response:void 0,setupData:B.setupData}:yield(0,o.O5)({config:z,sessionId:d,visitorId:p});if(k=e.setupData,window.smartlook._loadInfo.push(`Initialization - setup call finished. Timestamp - ${Date.now()}`),k.recordingAllowed){if(window.smartlook._loadInfo.push("Initialization - recording allowed"),H.removeRetryAfterValues(),W.setMetadata(z.projectKey,{sessionId:d,visitorId:p}),q.setServerTime(k.serverTime),Z=!0,$=void 0,x=void 0,!F){try{yield i.e(296).then(i.bind(i,0))}catch(e){window.smartlook._loadInfo.push("Initialization - bundle failed to load."),e instanceof Error&&e.message.includes("is not a function")?(0,c.N)("Smartlook could not be initialized. This site uses unsupported version of Prototype.JS library which contains some bugs. We advise you to upgrade to latest version in order to make smartlook recording. For more information do not hesitate to contact our customer support."):(0,c.N)("Could not load smartlook bundle. Smartlook will not record this page.",{error:e}),oe=!0}oe||(window.smartlook._loadInfo.push("Initialization - initializing recorder."),((e,t,o,r,i,n,s)=>{if(void 0===window.smartlook.recorderClass)throw new u.iF("Cannot initialize Smartlook. Smartlook class is not present.");window.smartlook.recorder=new window.smartlook.recorderClass(e,t,o,r,i,n,s)})(z,W,H,J,q,Y,V),F=!0)}oe||(void 0!==w&&w<k.recording.maxRecordDuration/3&&(d=(0,g.O)()),null===(S=window.smartlook.recorder)||void 0===S||S.startRecording(d,p,f,k,w,y))}else{const t=e.response,o=null==t?void 0:t.headers.get("Retry-After");o&&(H.applyRetryAfter(Number.parseInt(o,10)),H.setAppliedRetryAfterReason(JSON.stringify(k.error))),Z=!1,x=null===(O=k.error)||void 0===O?void 0:O.message,$=null===(R=k.error)||void 0===R?void 0:R.code,(null===(I=k.error)||void 0===I?void 0:I.message)?(0,c.N)(`Smartlook not recording. Reason: ${k.error.message}.`):(0,c.N)("Smartlook not recording.")}}}catch(t){window.smartlook._loadInfo.push("Initialization - error happened.");const o=t instanceof Error?t.message:"Unknown reason /setup";if(t instanceof r.M){const r=t.isAbortedByUserAgent&&"hidden"===t.visibilityState;[404,422].includes(t.status)?(Z=!1,t.responseData&&"string"!=typeof t.responseData?(x="string"==typeof t.responseData.message?t.responseData.message:"Unknown reason",$="string"==typeof t.responseData.code?t.responseData.code:"unknown_code"):(x="Unknown reason",$="unknown_code"),(0,c.N)(`Smartlook not recording. Reason: ${x}`,t.responseData),e.ZP.warnNoConsole(`Setup failed. Reason: ${o}.`,t,fetch.toString())):r||J.applyBan(new u.iF(`Setup in init failed. Reason: ${o}.`,{originalError:t,shouldReport:!t.isConnectionError}))}else t instanceof Error&&(t.message.includes("Cannot set properties of undefined (setting 'sessionManager')")||t.message.includes("undefined is not an object (evaluating 'this.sessionManager=e')")||t.message.includes("this is undefined")||t.message.includes("Unable to set property 'sessionManager' of undefined or null reference"))?(oe=!0,(0,c.N)("Smartlook could not be initialized. This site uses unsupported version of Prototype.JS library which contains some bugs. We advise you to upgrade to latest version in order to make smartlook recording. For more information do not hesitate to contact our customer support.")):J.applyBan(new u.iF(`Setup in init failed. Reason: "${o}".`,{originalError:t instanceof Error?t:void 0}))}finally{U=!0}"reinit"===s&&(ie=!1);const b=[...ee];return ee=[],queueMicrotask((()=>{b.forEach((([e,t,o])=>{de(e,...o).finally(t)}))})),void(n&&n())}var T,K;if(!Z&&"finish"!==s)return e.ZP.warn(`Cannot call ${s}. Recording is disabled. Reason ${null!=x?x:"unknown"}.`),void("visitor_blocked"===$&&G.push([s,()=>null,v]));oe?e.ZP.debug(`Cannot call ${s}. Bundle failed to load.`):yield((t,o,r,...i)=>function(e,t,o,r){return new(o||(o=Promise))((function(e,t){function i(e){try{s(r.next(e))}catch(e){t(e)}}function n(e){try{s(r.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,n)}s((r=r.apply(void 0,[])).next())}))}(0,0,void 0,(function*(){try{if(r&&r.isCrossOriginIframeMode&&("string"!=typeof t||["track","properties","navigation","error"].includes(t)||console.debug(`Smartlook is loaded in iframe. Calling '${t}' API in iframe is disabled. Please call it in parent page.`)),"finish"===t){const e=i;return void(window.smartlook.recorder?window.smartlook.recorder.finishAllQueuedTasks(...i):e[0]())}if("stop"===t)return void(window.smartlook.recorder&&window.smartlook.recorder.stopRecording(...i));if(o.isAppliedBan())return void e.ZP.warn(`Cannot call smartlook API. Session is banned. Reason: ${o.getBanReason()}.`);if(!window.smartlook.recorder)return void e.ZP.warn("Smartlook is not initialized. Cannot call public api.");switch(t){case"record":yield window.smartlook.recorder.setRecording(...i);break;case"resume":yield window.smartlook.recorder.resumeRecording(...i);break;case"pause":window.smartlook.recorder.pauseRecording(...i);break;case"error":yield window.smartlook.recorder.logCustomError(...i);break;case"track":yield window.smartlook.recorder.logCustomEvent(...i);break;case"navigation":yield window.smartlook.recorder.changeUrl(...i);break;case"disable":!0===i[0]?window.smartlook.recorder.pauseRecording():!1===i[0]&&(yield window.smartlook.recorder.resumeRecording());break;case"properties":yield window.smartlook.recorder.setCustomEventProperties(...i);break;case"identify":yield window.smartlook.recorder.identifyVisitor(...i);break;case"anonymize":yield window.smartlook.recorder.anonymize(...i);break;default:"function"==typeof t?t():(0,c.N)(`"${t}" is not recognised by Smartlook. See available APIs at https://web.developer.smartlook.com/docs`)}}catch(t){t instanceof u.iF&&!t.shouldReport?e.ZP.warn(t.message):t instanceof Error?console.warn(t.message,t):console.error(JSON.stringify(t))}})))(s,J,z,...v)}}));window.smartlook._loadInfo=window.smartlook._loadInfo||[],window.smartlook._loadInfo.push(`Init script loaded. Script source: ${window.smartlook.scriptSource}`);const le=null!==(D=null===(K=window.smartlook)||void 0===K?void 0:K.api)&&void 0!==D?D:[],ce=null===(N=window.smartlook)||void 0===N?void 0:N.isRecorderScriptLoaded,ue=window.smartlook.scriptSource,ge=window.smartlook._loadInfo,he=window.smartlook.silent;window.smartlook=de,window.smartlook.isRecorderScriptLoaded=ce,window.smartlook.scriptSource=ue,window.smartlook._loadInfo=ge,window.smartlook.silent=he,le.forEach((e=>{const[t,...o]=[...e];window.smartlook(t,...o)}))})()})();               $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = _.toStr(o.name || nameGenerator());
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).attr("role", "presentation").addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    dataset: $el.data(keys.dataset) || "",
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", suggestions, false, this.name);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", suggestions, true, this.name);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.dataset, that.name).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query, that.name);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query, that.name);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        var idx = Math.abs(rendered - that.limit);
                        rendered += idx;
                        that._append(query, suggestions.slice(0, idx));
                        that.async && that.trigger("asyncReceived", query, that.name);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $('<div role="option">').attr("id", _.guid()).text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, _.bind(function isDatasetEmpty(dataset) {
                    var isEmpty = dataset.isEmpty();
                    this.$node.attr("aria-expanded", !isEmpty);
                    return isEmpty;
                }, this));
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                this.$node.on("mouseover", this.selectors.selectable, function() {
                    that.setCursor($(this));
                });
                this.$node.on("mouseleave", function() {
                    that._removeCursor();
                });
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.scrollTop(0);
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.attr("aria-expanded", false);
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var Status = function() {
        "use strict";
        function Status(options) {
            this.$el = $("<span></span>", {
                role: "status",
                "aria-live": "polite"
            }).css({
                position: "absolute",
                padding: "0",
                border: "0",
                height: "1px",
                width: "1px",
                "margin-bottom": "-1px",
                "margin-right": "-1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                "white-space": "nowrap"
            });
            options.$input.after(this.$el);
            _.each(options.menu.datasets, _.bind(function(dataset) {
                if (dataset.onSync) {
                    dataset.onSync("rendered", _.bind(this.update, this));
                    dataset.onSync("cleared", _.bind(this.cleared, this));
                }
            }, this));
        }
        _.mixin(Status.prototype, {
            update: function update(event, suggestions) {
                var length = suggestions.length;
                var words;
                if (length === 1) {
                    words = {
                        result: "result",
                        is: "is"
                    };
                } else {
                    words = {
                        result: "results",
                        is: "are"
                    };
                }
                this.$el.text(length + " " + words.result + " " + words.is + " available, use up and down arrow keys to navigate.");
            },
            cleared: function() {
                this.$el.text("");
            }
        });
        return Status;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.autoselect = !!o.autoselect;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, suggestions, async, dataset) {
                this._updateHint();
                if (this.autoselect) {
                    var cursorClass = this.selectors.cursor.substr(1);
                    this.menu.$node.find(this.selectors.suggestion).first().addClass(cursorClass);
                }
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    if (this.select($selectable)) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                } else if (this.autoselect) {
                    if (this.select(this.menu.getTopSelectable())) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj, data.dataset)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj, data.dataset);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj, data.dataset)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj, data.dataset);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, suggestion, datasetName, cancelMove, id;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                suggestion = data ? data.obj : null;
                datasetName = data ? data.dataset : null;
                id = $candidate ? $candidate.attr("id") : null;
                this.input.trigger("cursorchange", id);
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", suggestion, datasetName)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", suggestion, datasetName);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, status, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    status = new Status({
                        $input: $input,
                        menu: menu
                    });
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength,
                        autoselect: o.autoselect
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(_.toStr(newVal));
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop({
                readonly: true,
                required: false
            }).removeAttr("id name placeholder").removeClass("required").attr({
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});