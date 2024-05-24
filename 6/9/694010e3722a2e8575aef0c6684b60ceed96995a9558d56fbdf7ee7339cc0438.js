/**
 * @file
 * Visual styles for exposed filters.
 */

.exposed-filters .filters {
  float: left; /* LTR */
  margin-right: 1em; /* LTR */
}
[dir="rtl"] .exposed-filters .filters {
  float: right;
  margin-right: 0;
  margin-left: 1em;
}
.exposed-filters .form-item {
  margin: 0 0 0.1em 0;
  padding: 0;
}
.exposed-filters .form-item label {
  float: left; /* LTR */
  width: 10em;
  font-weight: normal;
}
[dir="rtl"] .exposed-filters .form-item label {
  float: right;
}
.exposed-filters .form-select {
  width: 14em;
}
/* Current filters */
.exposed-filters .current-filters {
  margin-bottom: 1em;
}
.exposed-filters .current-filters .placeholder {
  font-weight: bold;
  font-style: normal;
}
.exposed-filters .additional-filters {
  float: left; /* LTR */
  margin-right: 1em; /* LTR */
}
[dir="rtl"] .exposed-filters .additional-filters {
  float: right;
  margin-right: 0;
  margin-left: 1em;
}
(8632),i=r(9567);const a={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},o={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!o[e])throw new Error("Info for ".concat(e," was never set"));return o[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");o[e]=(0,i.D)(t,a);const r=(0,n.ek)(e);r&&(r.info=o[e])}const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",g=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:50,error_sampling_rate:50,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},h="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(h);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function m(e,t){if(!e)throw new Error(h);p[e]=(0,i.D)(t,g());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(h);var r=v(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},w={};function A(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!w[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return w[e]}function _(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");w[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=w[e])}const x=(0,n.mF)().o;var E=r(385),D=r(6818);const k={buildEnv:D.Re,customTransaction:void 0,disabled:!1,distMethod:D.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(E._A?.performance?.timeOrigin||E._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+E._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof E._A.XMLHttpRequest?.prototype?.addEventListener,version:D.q4,denyList:void 0},j={};function S(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!j[e])throw new Error("Runtime for ".concat(e," was never set"));return j[e]}function R(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");j[e]=(0,i.D)(t,k);const r=(0,n.ek)(e);r&&(r.runtime=j[e])}function T(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),a=0===Object.keys(r).length?e:r;for(let o in a)if(void 0!==e[o])try{Array.isArray(e[o])&&Array.isArray(t[o])?r[o]=Array.from(new Set([...e[o],...t[o]])):"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=i(e[o],t[o]):r[o]=e[o]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>a,q4:()=>n});const n="1.250.0",i="PROD",a="CDN"},385:(e,t,r)=>{"use strict";r.d(t,{Nk:()=>d,Tt:()=>s,_A:()=>a,cv:()=>l,iS:()=>o,il:()=>n,ux:()=>c,v6:()=>i,w1:()=>u});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),o=(a?.document?.readyState,Boolean("hidden"===a?.document?.visibilityState)),s=(a?.location,/iPad|iPhone|iPod/.test(a.navigator?.userAgent)),c=s&&"undefined"==typeof SharedWorker,u=((()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);Array.isArray(e)&&e.length>=2&&e[1]})(),Boolean(n&&window.document.documentMode)),d=!!a.navigator?.sendBeacon,l=Math.floor(a?.performance?.timeOrigin||a?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var n=r(50);const i={agentIdentifier:"",ee:void 0};class a{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),a=r(4322),o=r(3325);const s={};function c(e,t){const r={staged:!1,priority:o.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(u(e),!e||!s[e].get(t))return o(t);s[e].get(t).staged=!0;const r=[...s[e]];function o(t){const r=e?n.ee.get(e):n.ee,o=a.X.handlers;if(r.backlog&&o){var s=r.backlog[t],c=o[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete o[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),o(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],a=e[3],o=e[2];i.apply(a,o)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),a=r(234);class o{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,a.OP)(r).isolatedBacklog}catch(e){}var g={on:h,addEventListener:h,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,a){!1!==a&&(a=!0);if(u.aborted&&!i)return;t&&a&&t.emit(e,r,n);for(var o=p(n),c=v(e),d=c.length,l=0;l<d;l++)c[l].apply(o,r);var f=b()[s[e]];f&&f.push([g,e,r,o]);return o},get:m,listeners:v,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",g.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return g;function p(e){return e&&e instanceof o?e:e?(0,i.X)(e,c,(()=>new o(c))):new o(c)}function h(e,t){n[e]=v(e).concat(t)}function v(e){return n[e]||[]}function m(t){return d[t]=d[t]||e(g,t)}function b(){return g.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,u.backlog={}}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,a){a?(a.buffer([e],i),a.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>a});var n=r(5546);a.on=o;var i=a.handlers={};function a(e,t,r,a){o(a||n.E,i,e,t,r)}function o(e,t,r,i,a){a||(a="feature"),e||(e=n.E);var o=t[a]=t[a]||{};(o[r]=o[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>o});var n=r(385);let i=!1,a=!1;try{const e={get passive(){return i=!0,!1},get signal(){return a=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function o(e,t){return i||a?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,o(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,o(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Rl:()=>o,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function a(e,t){return e?15&e[t]:16*Math.random()|0}function o(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?a(t,r++).toString(16):"y"===e?(3&a()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const o=[];for(var s=0;s<e;s++)o.push(a(r,i++).toString(16));return o.join("")}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>a,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>o});const n="NRBA",i=144e5,a=18e5,o={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),a=r(3325),o=r(385);const s="newrelic";const c={stn:[a.D.sessionTrace],err:[a.D.jserrors,a.D.metrics],ins:[a.D.pageAction],spa:[a.D.spa],sr:[a.D.sessionReplay,a.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{o._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>a});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function a(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>o,b2:()=>a});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function a(e,t){if(i())return e();(0,n.bP)("load",e,t)}function o(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>a,ek:()=>u,fP:()=>o,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const a={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function o(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=o();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=o();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=o();return t.initializedAgents?.[e]}function d(e,t){o()[e]=t}function l(){return function(){let e=o();const t=e.info||{};e.info={beacon:a.beacon,errorBeacon:a.errorBeacon,...t}}(),function(){let e=o();const t=e.init||{};e.init={...t}}(),s(),function(){let e=o();const t=e.loader_config||{};e.loader_config={...t}}(),o()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>a,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>o});const n=r(3325).D.metrics,i="sm",a="cm",o="storeSupportabilityMetrics",s="storeEventMetrics"},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),a=r(5546),o=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),g=r(8632);function p(){const e=(0,g.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let a=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&a.push(e.api[t](...n))})),a.length>1?a:a[0]}(t,...n)}}))}var h=r(2825);const v=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let m=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:w,info:A,loader_config:_,runtime:x={loaderType:b},exposed:E=!0}=t;const D=(0,g.gG)();A||(w=D.init,A=D.info,_=D.loader_config),(0,i.Dg)(e.agentIdentifier,w||{}),(0,i.GE)(e.agentIdentifier,_||{}),A.jsAttributes??={},d.v6&&(A.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,A);const k=(0,i.P_)(e.agentIdentifier),j=[A.beacon,A.errorBeacon];m||(k.proxy.assets&&(v(k.proxy.assets),j.push(k.proxy.assets)),k.proxy.beacon&&j.push(k.proxy.beacon),p(),(0,g.EZ)("activatedFeatures",h.T)),x.denyList=[...k.ajax.deny_list||[],...k.ajax.block_internal?j:[]],(0,i.sU)(e.agentIdentifier,x),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const g={};var p=o.ee.get(e),h=p.get("tracer"),v="api-",m=v+"ixn-";function b(t,r,n,a){const o=(0,i.C5)(e);return null===r?delete o.jsAttributes[t]:(0,i.CX)(e,{...o,jsAttributes:{...o.jsAttributes,[t]:r}}),A(v,n,!0,a||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{g[e]=A(v,e,!0,"api")})),g.addPageAction=A(v,"addPageAction",!0,n.D.pageAction),g.setCurrentRouteName=A(v,"routeName",!0,n.D.spa),g.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,A(v,"setPageViewName",!0)()},g.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},g.start=e=>{try{const t=e?"defined":"undefined";(0,a.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},g.recordReplay=function(){(0,a.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,a.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},g.pauseReplay=function(){(0,a.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,a.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},g.interaction=function(){return(new y).get()};var w=y.prototype={createTracer:function(e,t){var r={},i=this,o="function"==typeof t;return(0,a.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,a.p)(m+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(h.emit((o?"":"no-")+"fn-start",[(0,s.z)(),i,o],r),o)try{return t.apply(this,arguments)}catch(e){throw h.emit("fn-err",[arguments,this,e],r),e}finally{h.emit("fn-end",[(0,s.z)()],r)}}}};function A(e,t,r,i){return function(){return(0,a.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,a.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function _(){r.e(75).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{w[e]=A(m,e,void 0,n.D.spa)})),g.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,a.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,a.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>_()),!0):_(),g}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=E),m=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"nr-rum-1.250.0.min.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.250.0.PROD:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}if(!s){c=!0;var f={75:"sha512-2/f4ks7UUkz/V5qC88wpBuGtLglDVUbydMJpZeUMyA/1ChnpO/Q00ZY/7dABphVkZ8zpnV6zFxxikFwJCMiQRg=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[o]&&(s.integrity=f[o])}e[r]=[n];var g=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={50:0,832:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,s,c]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self["webpackChunk:NRBA-1.250.0.PROD"]=self["webpackChunk:NRBA-1.250.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(e){return"Call to agent api ".concat(e," failed. The agent is not currently initialized.")}addPageAction(t,r){(0,e.Z)(this.#e("addPageAction"))}setPageViewName(t,r){(0,e.Z)(this.#e("setPageViewName"))}setCustomAttribute(t,r,n){(0,e.Z)(this.#e("setCustomAttribute"))}noticeError(t,r){(0,e.Z)(this.#e("noticeError"))}setUserId(t){(0,e.Z)(this.#e("setUserId"))}setApplicationVersion(t){(0,e.Z)(this.#e("setApplicationVersion"))}setErrorHandler(t){(0,e.Z)(this.#e("setErrorHandler"))}finished(t){(0,e.Z)(this.#e("finished"))}addRelease(t,r){(0,e.Z)(this.#e("addRelease"))}start(t){(0,e.Z)(this.#e("start"))}recordReplay(){(0,e.Z)(this.#e("recordReplay"))}pauseReplay(){(0,e.Z)(this.#e("pauseReplay"))}}var r=i(3325),n=i(234);const a=Object.values(r.D);function o(e){const t={};return a.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let a;this.onAggregateImported=new Promise((e=>{a=e}));const o=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(75).then(i.bind(i,957));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void a(!1);const{lazyFeatureLoader:e}=await i.e(75).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),a(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),a(!1)}};l.il?(0,d.b2)((()=>o()),!0):o()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var g=i(7633);class p extends f{static featureName=g.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,g.t,r),this.importAggregator()}}var h=i(1117),v=i(1284);class m extends h.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var a=this.getBucket(e,t,r,i);return a.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,v.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,a.metrics),a}merge(e,t,r,n,i){var a=this.getBucket(e,t,n,i);if(a.metrics){var o=a.metrics;o.count+=r.count,(0,v.D)(r,(function(e,t){if("count"!==e){var n=o[e],i=r[e];i&&!i.c?o[e]=b(i.t,n):o[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,o[e])}}))}else a.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=w(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function w(e){return"object"!=typeof e?[]:(0,v.D)(e,A)}function A(e,t){return t}var _=i(8632),x=i(4402),E=i(4351);var D=i(5546),k=i(7956),j=i(3239),S=i(7894),R=i(9251);class T extends f{static featureName=R.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,R.t,r),l.il&&((0,k.N)((()=>(0,D.p)("docHidden",[(0,S.z)()],void 0,R.t,this.ee)),!0),(0,j.bP)("pagehide",(()=>(0,D.p)("winPagehide",[(0,S.z)()],void 0,R.t,this.ee))),this.importAggregator())}}var I=i(3081);class P extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,x.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new m({agentIdentifier:this.agentIdentifier}),this.features={},(0,_.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=o(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,_.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[p,T,P],loaderType:"lite"})})()})();</script>
<script async src="/sites/default/files/google_analytics/gtag.js?s7d111"></script>
<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag("js", new Date());gtag("set", "developer_id.dMDhkMT", true);gtag("config", "UA-1706522-1", {"groups":"default","anonymize_ip":true,"page_placeholder":"PLACEHOLDER_page_path","link_attribution":true,"allow_ad_personalization_signals":false,"custom_map":{"dimension1":"Audience","dimension2":"Page Level","dimension3":"Content Type"}});gtag("config", "G-92L6B9PQCG", {"groups":"default","page_placeholder":"PLACEHOLDER_page_location","link_attribution":true,"allow_ad_personalization_signals":false});gtag("event", "custom", {"Audience":"n\/a","Page Level":"2","Content Type":"chaptered"});</script>
<meta property="og:site_name" content="Princeton University" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.princeton.edu/academics/advising" />
<meta property="og:title" content="Advising" />
<meta property="og:description" content="Through teaching and research, we educate people who will contribute to society and develop knowledge that will make a difference in the world." />
<meta property="og:image" content="https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg" />
<meta property="fb:app_id" content="238312316239555" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Through teaching and research, we educate people who will contribute to society and develop knowledge that will make a difference in the world." />
<meta name="twitter:site" content="@Princeton" />
<meta name="twitter:title" content="Advising" />
<meta name="twitter:image" content="https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg" />
<meta name="twitter:image:alt" content="Nassau Hall" />
<meta name="google-site-verification" content="B6i7aTvWeIZCk1-Ntnn_Lkyf37sREVxxkY6p3gdHucY" />
<meta name="Generator" content="Drupal 10 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="apple-touch-icon" href="/themes/custom/hobbes/icons/apple-touch-icon.png" />
<link rel="icon" type="image/png" href="/themes/custom/hobbes/icons/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="/themes/custom/hobbes/icons/favicon-32x32.png" sizes="32x32" />
<link rel="manifest" href="/themes/custom/hobbes/icons/manifest.json" />
<link rel="mask-icon" href="/themes/custom/hobbes/icons/safari-pinned-tab.svg" color="#e77500" />
<meta name="msapplication-config" content="/themes/custom/hobbes/icons/browserconfig.xml" />
<meta name="theme-color" content="#ffffff" />
<link rel="icon" href="/profiles/contrib/lightning/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="canonical" href="https://www.princeton.edu/academics/advising" />
<link rel="shortlink" href="https://www.princeton.edu/node/20381" />

    <title>Advising | Princeton University</title>
    <link rel="stylesheet" media="all" href="/sites/default/files/css/css_YJaz52eisB6Tqi7ZEPDzNLhowZx9_1KAosB9dglRsYM.css?delta=0&amp;language=en&amp;theme=hobbes&amp;include=eJxdjFsOwjAMBC8UmiNVTrNNDW4c8qgIpweVFiR-LO3seCfNsNd7Q-4mqAbBSJGkV56K_Qem9FKxWkcFZlHn8HZEHcmZnNCzGzyqcLxZn1siGY54OrO26KmyxpOsFCBC0STKFDKlpZy_PzK0mJoTLgu8mVkqsp0o7TuIlWsfsTr4LzzGN_ZQs9-PMM4M8TajJI2FN1z28gU72Gf2" />
<link rel="stylesheet" media="all" href="https://use.typekit.net/stk8lop.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_vCDEPGqiTOo8bSJUe8Ar2pyiDGEfbfrOqI_Jt30qens.css?delta=2&amp;language=en&amp;theme=hobbes&amp;include=eJxdjFsOwjAMBC8UmiNVTrNNDW4c8qgIpweVFiR-LO3seCfNsNd7Q-4mqAbBSJGkV56K_Qem9FKxWkcFZlHn8HZEHcmZnNCzGzyqcLxZn1siGY54OrO26KmyxpOsFCBC0STKFDKlpZy_PzK0mJoTLgu8mVkqsp0o7TuIlWsfsTr4LzzGN_ZQs9-PMM4M8TajJI2FN1z28gU72Gf2" />

    <script src="/sites/default/files/js/js_en1LT0OqbcuFdyfqZv0W-Ljy3rLSx_bW-WeAC0Q3N_0.js?scope=header&amp;delta=0&amp;language=en&amp;theme=hobbes&amp;include=eJxdjFsOwjAMBC8UmiNVTrNNDW4c8qgIpweVFiR-LO3seCfNsNd7Q-4mqAbBSJGkV56K_Qem9FKxWkcFZlHn8HZEHcmZnNCzGzyqcLxZn1siGY54OrO26KmyxpOsFCBC0STKFDKlpZy_PzK0mJoTLgu8mVkqsp0o7TuIlWsfsTr4LzzGN_ZQs9-PMM4M8TajJI2FN1z28gU72Gf2"></script>

    <meta name="google-site-verification" content="HCFMWeXbGYFnJTWfcWQmuHWebYmZPzueLOKf8RM09I4" />
      <link rel="alternate" type="application/rss+xml" title="Princeton University News" href="/feed/" />
      <link rel="alternate" type="application/rss+xml" title="Princeton Research News" href="/feed/research/" />
      <link rel="alternate" type="application/rss+xml" title="Princeton Public Events" href="/feed/events/" />
  </head>
  <body class="node-20381 path-node page-node-type-chaptered nojs" data-scroll='body' data-resize='body'>
    <a href="#main-content" id="skip-link" class="visually-hidden focusable button skip-link">
      Skip to main content
    </a>
    
      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
    <div data-sticky-container class="header-sticky-container">
  <header data-sticky data-options="marginTop:0;" data-sticky-on="small" class="clearfix page-header" style="width:100%" data-top-anchor="main:top">
    <div class="contents">
      <div class="block-hobbes-branding">
                      <a href="/" title="Home" rel="home" class="site-logo">
              <span class="show-for-sr">Princeton University</span>
            </a>
                  </div>
        <nav aria-label="Main">
          <button id="menutoggle" aria-haspopup="dialog" class="toggle-main-menu menutoggle">
            <span></span><span></span><span></span><span></span>
            <span class="show-for-sr">Menu</span>
          </button>
        </nav>
                          <nav  id="block-mainnavigation" data-block-plugin-id="menu_block:main" class="menu--main block--a-href-academicsacademics-a crumby-section" aria-label="section">
        <div class="parent-link"><a href="/academics">Academics</a></div>
    <button id="crumby-toggle" aria-expanded="false">
      <span class='chevron-wrapper'><span class='transparent'>Academics</span><span class='visually-hidden'>Submenu</span></span><span class='toggle-chevron'></span>
    </button>
      
        
      <ul id="crumby-list">
              <li>
                      <a href="/academics/studying-princeton" data-drupal-link-system-path="node/76">Studying at Princeton</a>
                            </li>
              <li>
                      <a href="/academics/library" data-drupal-link-system-path="node/20166">Library</a>
                            </li>
              <li>
                      <a href="/academics/areas-of-study" data-drupal-link-system-path="academics/areas-of-study">Areas of Study</a>
                            </li>
              <li>
                      <a href="/academics/areas-of-study/humanities" data-drupal-link-system-path="academics/areas-of-study/humanities">Humanities</a>
                            </li>
              <li>
                      <a href="/academics/areas-of-study/social-sciences" data-drupal-link-system-path="academics/areas-of-study/social-sciences">Social Sciences</a>
                            </li>
              <li>
                      <a href="/academics/areas-of-study/engineering" data-drupal-link-system-path="academics/areas-of-study/engineering">Engineering</a>
                            </li>
              <li>
                      <a href="/academics/areas-of-study/natural-sciences" data-drupal-link-system-path="academics/areas-of-study/natural-sciences">Natural Sciences</a>
                            </li>
              <li>
                      <a href="/academics/advising" aria-current="page" data-drupal-link-system-path="node/20381" class="is-active">Advising</a>
                            </li>
              <li>
                      <a href="https://registrar.princeton.edu/academic-calendar/">Academic Calendar</a>
                            </li>
              <li>
                      <a href="/academics/course-tools" data-drupal-link-system-path="node/54066">Course Tools</a>
                            </li>
              <li>
                      <a href="/academics/learning-abroad" data-drupal-link-system-path="node/20161">Learning Abroad</a>
                            </li>
              <li>
                      <a href="/academics/career-development" data-drupal-link-system-path="node/20391">Career Development</a>
                            </li>
              <li>
                      <a href="/academics/continuing-education" data-drupal-link-system-path="node/20376">Continuing Education</a>
                            </li>
              <li>
                      <a href="/academics/innovative-learning" data-drupal-link-system-path="node/20366">Innovative Learning</a>
                            </li>
            </ul>
  


    </nav>

          
                        <div id="search-bar">
          <button aria-expanded="false" id="search-toggle"><span class="search-icon"><span class="show-for-sr">Search</span></span></button>
          <form action="/search" method="GET" id="pu-header-search" accept-charset="UTF-8" hidden>
              <div class="js-form-item form-item js-form-type-search form-item-search js-form-item-search form-no-label">
                  <input data-drupal-selector="edit-search" autocomplete="off" placeholder="Search Princeton" type="text" id="header-search" name="search" value="" size="15" maxlength="128" class="form-search">
                  <label for="header-search" class="show-for-sr">Search Sites &amp; People</label>
                  <button class="close-button" aria-label="Close search" type="button">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="header-edit-actions">
                  <input data-drupal-selector="header-edit-submit" type="submit" id="header-edit-submit" value="Submit search" class="button js-form-submit form-submit">
              </div>
          </form>
        </div>

              </div>
  </header>
</div>


<main id="main" class="main node-advising">
  <a name="main-content" id="main-content"></a>
    <section class="clearfix">
        <div data-drupal-messages-fallback class="hidden"></div>
<div id="block-hobbes-content" data-block-plugin-id="system_main_block" class="block__wrapper">
  
    
      

<article about="/academics/advising" class="node node--type-chaptered node--view-mode-full">

  <div class="image-cover-container hero">
    
            <div class="field field--name-field-chaptered-cover-image field--type-image field--label-hidden field__item">    <img loading="eager" srcset="/sites/default/files/styles/third_1x_crop/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=7tXKkK97 640w, /sites/default/files/styles/half_1x_crop/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=6m93p7zX 960w, /sites/default/files/styles/half_16_9_1440/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=e05TUh4o 1440w, /sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=3RgpIth2 1920w, /sites/default/files/styles/crop_2048_ipad/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=aXyMtcPA 2048w, /sites/default/files/styles/full_2x_crop/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=w0owWYtj 2880w" sizes="100vw" width="640" height="360" src="/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/10/20220511_TreadwayE_DJA_415.jpg?itok=3RgpIth2" alt="Treadway and her senior thesis adviser, Dan-el Padilla Peralta, an associate professor of classics and a 2006 Princeton graduate, share a light moment on campus." typeof="foaf:Image" />


</div>
      
    <div class="image-caption-overlay image-caption-overlay-left gradient">
      <div class="image-cover-text chaptered">
        <h1>
          <span>Advising</span>

        </h1>
      </div>
    </div>
  </div>

  <div class="row chaptered-content magellan-container content-container">
    <div class="columns small-12 medium-3 magellan" data-sticky-container>
      <nav class="sticky" data-sticky data-anchor="chaptered-content" aria-label="On this page" data-check-every="5" data-sticky-on="medium" data-margin-top="7">
        <ul class="vertical menu" data-magellan data-offset="200" data-bar-offset="200">
                                    <li><a href="#overview">Overview</a></li>
                                                <li><a href="#supporting-undergraduates-success">Supporting Undergraduates&#039; Success</a></li>
                                                <li><a href="#graduate-student-resources">Graduate Student Resources</a></li>
                                                <li><a href="#academic-strategies">Academic Strategies</a></li>
                              </ul>
      </nav>


    </div>
    <div class="columns small-12 medium-9" id="chaptered-content">
        
      <div>
              

<div class="paragraph clearfix constrain row paragraph--type--chapter paragraph--view-mode--default">
    
    <h2 id="overview" class="columns small-12 large-4 xlarge-3 xxlarge-4 xxxlarge-3" data-magellan-target="overview">Overview</h2>

    <div class='columns small-12 large-8 xlarge-9 xxlarge-8 xxxlarge-9 float-right'><p>We want you to succeed in your life at Princeton. You will have the academic resources and personal attention to help you discover your intellectual passions and to grow as a scholar. There is no limit to the ideas you might explore — and the people, opportunities and support networks are here to help you flourish.</p>

<p>Princeton is distinguished by its close student-faculty engagement, where faculty members often serve as mentors to students as they progress in their studies. The University is committed to fostering intellectual growth every step along the path, from admission to Commencement, with a far-reaching support structure.</p>

<p>The <a href="https://odoc.princeton.edu/">Office of the Dean of the College</a> (ODOC) is home base for all aspects of the undergraduate academic experience. The <a href="https://gradschool.princeton.edu/">Graduate School</a> supports its students' success and collaborates closely with academic departments. All students are encouraged to take advantage of the many advising and tutoring options throughout their time at Princeton.</p></div>

</div>

              

<div class="paragraph clearfix constrain row paragraph--type--chapter paragraph--view-mode--default">
    
    <h2 id="supporting-undergraduates-success" class="columns small-12 large-4 xlarge-3 xxlarge-4 xxxlarge-3" data-magellan-target="supporting-undergraduates-success">Supporting Undergraduates&#039; Success</h2>

    <div class='columns small-12 large-8 xlarge-9 xxlarge-8 xxxlarge-9 float-right'>
<article class="view-mode-right-half media media-image"><div class="field field--name-image field--type-image field--label-hidden field__item" data-mid="421"><img loading="lazy" srcset="/sites/default/files/styles/third_1x/public/images/2017/03/20140401_KalvariaM_017-2880.jpg?itok=rduFMoMd 640w, /sites/default/files/styles/half_1x/public/images/2017/03/20140401_KalvariaM_017-2880.jpg?itok=kXxPc8n- 960w, /sites/default/files/styles/scale_1440/public/images/2017/03/20140401_KalvariaM_017-2880.jpg?itok=0cwPgLKP 1440w, /sites/default/files/styles/half_2x/public/images/2017/03/20140401_KalvariaM_017-2880.jpg?itok=zoxgtw8t 1920w" sizes="(min-width:1440px) 50em, (min-width:40em) 39vw, 100vw" width="640" height="409" src="/sites/default/files/styles/scale_1440/public/images/2017/03/20140401_KalvariaM_017-2880.jpg?itok=0cwPgLKP" alt="Student and professor discuss a book" typeof="foaf:Image" /></div><div class="image-caption"><div class="image-byline"><div class="field field--name-field-byline-prefix field--type-string field--label-hidden field__item">Photo by</div><div class="field field--name-field-byline field--type-entity-reference field--label-hidden field__items"><div class="field__item"><div about="/taxonomy/term/1031"><div class="field field--name-name field--type-string field--label-hidden field__item">Denise Applewhite, Office of Communications</div></div></div></div></div></div></article><p>The <a href="https://odoc.princeton.edu/">Office of the Dean of the College</a> oversees the undergraduate curriculum and has a simple message: Study what you love, take advantage of the opportunities around you and find help when you need it. Students are assigned to faculty advisers who assist with course selection and other academic matters.</p>

<h3>Residential Colleges and Advising</h3>

<p>It's home — and a place of learning: Academic advising for first-years and sophomores is centered in the residential colleges. Each college has a faculty head supported by deans and directors of studies. Undergraduates are encouraged to explore their academic interests and goals with staff in the residential colleges. Fellow students also are extremely important for academic questions — the residential colleges have undergraduate peer advisers who offer perspectives on the academic experience, while residential college advisers, who are juniors and seniors, serve as mentors. The colleges also have study areas, even libraries, where students can pursue their work. Study breaks at especially busy times can be a fun way to blow off steam with peers.</p>

<h3>Meeting Students' Needs</h3>

<p>Princeton is committed to the academic success of all its students. Programs and resources are continually being enhanced to meet the specific needs of our students, who come from a wide range of backgrounds.</p>

<p>For example, the <a href="http://sifp.princeton.edu/">Scholars Institute Fellows Program</a> (SIFP) empowers students from first-generation and low-income backgrounds through mentorship, academic enrichment and a support network of faculty, staff and students. Students form an engaged community and build on each others' strengths throughout their time at Princeton.</p>

<p>The <a href="http://fsi.princeton.edu/">Freshman Scholars Institute</a> is a seven-week academic program for select incoming students that immerses them in campus life through academic, co-curricular and extracurricular programming.</p>


<figure class="view-mode-full-width media media-video overlay-or-caption video-preroll video-caption-under"><div class="video-button-wrapper"><button class="video-cover-container play-this-video invert"><div class="button-image" aria-hidden=""><div class="field field--name-field-media-video-cover-image field--type-image field--label-hidden field__item"><img loading="lazy" srcset="/sites/default/files/styles/half_1x_crop/public/images/2017/03/Screen-Shot-2017-03-21-at-3.14.19-PM.jpg?itok=LHp1n0pf 960w, /sites/default/files/styles/half_16_9_1440/public/images/2017/03/Screen-Shot-2017-03-21-at-3.14.19-PM.jpg?itok=hnQA43-B 1440w, /sites/default/files/styles/half_2x/public/images/2017/03/Screen-Shot-2017-03-21-at-3.14.19-PM.jpg?itok=waNSVD_D 1920w" sizes="(min-width:1440px) 1000px, 100vw" width="1920" height="1115" src="/sites/default/files/styles/half_16_9_1440/public/images/2017/03/Screen-Shot-2017-03-21-at-3.14.19-PM.jpg?itok=hnQA43-B" alt="" typeof="foaf:Image" /></div></div><div class="play-this-video-content"><div class="field field--name-name field--type-string field--label-hidden field__item">Freshman Scholars Institute Bottle Rocket Launch</div></div></button><div class="video-wrapper"><div class="field field--name-field-media-video-embed-field field--type-video-embed-field field--label-hidden field__item"><div class="video-embed-field-provider-vimeo video-embed-field-responsive-video"><div class="vimeo-async video-async" id="httpsplayervimeocomvideo136638293" data-vimeo-url="https://player.vimeo.com/video/136638293" data-vimeo-color="ed6d0b" data-vimeo-byline="0" data-vimeo-portrait="0"></div><a class="if-no-js" href="https://player.vimeo.com/video/136638293">Play video: </a></div></div></div><figcaption class="image-caption"><div class="field field--name-field-media-caption field--type-text-long field--label-hidden field__item"><p>In this video, students in "Foundations of Engineering," taught by Andrew Houck, associate professor of electrical engineering, launch the bottle rockets they created in the lab over four weeks — a hands-on design and engineering experience that included integrating physics and math skills to build individual circuit boards to track the flight and measure the acceleration of their rocket.</p></div><div class="image-byline"><div class="field field--name-field-byline-prefix field--type-string field--label-hidden field__item">Video by</div><div class="field field--name-field-byline field--type-entity-reference field--label-hidden field__items"><div class="field__item"><div about="/taxonomy/term/1021"><div class="field field--name-name field--type-string field--label-hidden field__item">Danielle Capparella, Office of Communications</div></div></div></div></div></figcaption></div></figure><p><span></span></p></div>

</div>

              

<div class="paragraph clearfix constrain row paragraph--type--chapter paragraph--view-mode--default">
    
    <h2 id="graduate-student-resources" class="columns small-12 large-4 xlarge-3 xxlarge-4 xxxlarge-3" data-magellan-target="graduate-student-resources">Graduate Student Resources</h2>

    <div class='columns small-12 large-8 xlarge-9 xxlarge-8 xxxlarge-9 float-right'>
<article class="view-mode-right-third media media-image"><div class="field field--name-image field--type-image field--label-hidden field__item" data-mid="167136"><img loading="lazy" srcset="/sites/default/files/styles/third_1x/public/images/2022/10/20220523_Hooding_NG_353_MP_0620%281%29_0.jpg?itok=cWXhOVZZ 640w, /sites/default/files/styles/half_1x/public/images/2022/10/20220523_Hooding_NG_353_MP_0620%281%29_0.jpg?itok=00AXI42H 960w, /sites/default/files/styles/scale_1440/public/images/2022/10/20220523_Hooding_NG_353_MP_0620%281%29_0.jpg?itok=_Af3G93P 1000w" sizes="(min-width:1440px) 33em, (min-width:40em) 22vw, 100vw" width="640" height="640" src="/sites/default/files/styles/third_1x/public/images/2022/10/20220523_Hooding_NG_353_MP_0620%281%29_0.jpg?itok=cWXhOVZZ" alt="Woman with two daughters poses with adviser at graduate hooding ceremony" typeof="foaf:Image" /></div><div class="image-caption"><div class="field field--name-field-media-caption field--type-text-long field--label-hidden field__item"><p>Nayana Prasad Nagendra (second from right), celebrates her hooding with her adviser, David August (far right), professor of computer science, and her daughters, Isha, 10, and Darsha, 3.</p></div><div class="image-byline"></div></div></article><p>Princeton's graduate students are a community of scholars who enjoy a high level of engagement with faculty members. Your academic department and faculty adviser are your first point of contact for information and support. Further support is available through the Graduate School's <a href="https://gradschool.princeton.edu/staff">Student Life team</a>, as well as various campus programs for advising and skills development.</p></div>

</div>

              

<div class="paragraph clearfix constrain row paragraph--type--chapter paragraph--view-mode--default">
    
    <h2 id="academic-strategies" class="columns small-12 large-4 xlarge-3 xxlarge-4 xxxlarge-3" data-magellan-target="academic-strategies">Academic Strategies</h2>

    <div class='columns small-12 large-8 xlarge-9 xxlarge-8 xxxlarge-9 float-right'>
<article class="view-mode-left-half media media-image"><div class="field field--name-image field--type-image field--label-hidden field__item" data-mid="1041"><img loading="lazy" srcset="/sites/default/files/styles/third_1x/public/images/2017/03/20160108_McGrawStudySession_ReadingPeriod_DLA_71_3840.jpg?itok=zDWlVUQP 640w, /sites/default/files/styles/half_1x/public/images/2017/03/20160108_McGrawStudySession_ReadingPeriod_DLA_71_3840.jpg?itok=J7AlmvgS 960w, /sites/default/files/styles/scale_1440/public/images/2017/03/20160108_McGrawStudySession_ReadingPeriod_DLA_71_3840.jpg?itok=Bgx8JOR3 1440w, /sites/default/files/styles/half_2x/public/images/2017/03/20160108_McGrawStudySession_ReadingPeriod_DLA_71_3840.jpg?itok=s98_-__V 1920w" sizes="(min-width:1440px) 50em, (min-width:40em) 39vw, 100vw" width="640" height="427" src="/sites/default/files/styles/scale_1440/public/images/2017/03/20160108_McGrawStudySession_ReadingPeriod_DLA_71_3840.jpg?itok=Bgx8JOR3" alt="A professor stands and teaches a class at the McGraw Center" typeof="foaf:Image" /></div><div class="image-caption"><div class="image-byline"><div class="field field--name-field-byline-prefix field--type-string field--label-hidden field__item">Photo by</div><div class="field field--name-field-byline field--type-entity-reference field--label-hidden field__items"><div class="field__item"><div about="/taxonomy/term/1031"><div class="field field--name-name field--type-string field--label-hidden field__item">Denise Applewhite, Office of Communications</div></div></div></div></div></div></article><h3>Support From the McGraw Center</h3>

<p>Get some tips and learn something new: At the <a href="https://mcgraw.princeton.edu/">McGraw Center for Teaching and Learning</a>, students can learn strategies to master large reading assignments, take effective notes, study efficiently, prepare for exams and use digital media. You can also get support for specific courses, including individual tutoring and technology training.</p>

<h3>Help From the Writing Center</h3>

<p>The <a href="https://writing.princeton.edu/center">Writing Center</a> offers Princeton writers free, one-on-one conferences with experienced fellow writers trained to respond to assignments in any discipline.  Fellows at the center offer help to undergraduates and graduate students on writing for various projects and even oral presentations, and to international students adjusting to American academic writing.</p></div>

</div>

          </div>
  
    </div>
  </div>

</article>


  </div>
<nav aria-labelledby="block-hobbes-sectionmenu-academics-menu" id="block-hobbes-sectionmenu-academics" data-block-plugin-id="menu_block:main" class="menu--main block--more-in-academics section-nav-container content-tile-simple">
      
  <h2 id="block-hobbes-sectionmenu-academics-menu">More in Academics</h2>
  

        
              <ul class="menu--section linklist">
                                  <li class=''>
        <a href="/academics/studying-princeton" data-drupal-link-system-path="node/76">Studying at Princeton</a>
              </li>
                              <li class=''>
        <a href="/academics/library" data-drupal-link-system-path="node/20166">Library</a>
              </li>
                              <li class=''>
        <a href="/academics/areas-of-study" data-drupal-link-system-path="academics/areas-of-study">Areas of Study</a>
              </li>
                              <li class=''>
        <a href="/academics/areas-of-study/humanities" data-drupal-link-system-path="academics/areas-of-study/humanities">Humanities</a>
              </li>
                              <li class=''>
        <a href="/academics/areas-of-study/social-sciences" data-drupal-link-system-path="academics/areas-of-study/social-sciences">Social Sciences</a>
              </li>
                              <li class=''>
        <a href="/academics/areas-of-study/engineering" data-drupal-link-system-path="academics/areas-of-study/engineering">Engineering</a>
              </li>
                              <li class=''>
        <a href="/academics/areas-of-study/natural-sciences" data-drupal-link-system-path="academics/areas-of-study/natural-sciences">Natural Sciences</a>
              </li>
                                <li class='invert'>
        <a href="/academics/advising" data-drupal-link-system-path="node/20381" class="is-active">Advising</a>
              </li>
                              <li class=''>
        <a href="https://registrar.princeton.edu/academic-calendar/">Academic Calendar</a>
              </li>
                              <li class=''>
        <a href="/academics/course-tools" data-drupal-link-system-path="node/54066">Course Tools</a>
              </li>
                              <li class=''>
        <a href="/academics/learning-abroad" data-drupal-link-system-path="node/20161">Learning Abroad</a>
              </li>
                              <li class=''>
        <a href="/academics/career-development" data-drupal-link-system-path="node/20391">Career Development</a>
              </li>
                              <li class=''>
        <a href="/academics/continuing-education" data-drupal-link-system-path="node/20376">Continuing Education</a>
              </li>
                              <li class=''>
        <a href="/academics/innovative-learning" data-drupal-link-system-path="node/20366">Innovative Learning</a>
              </li>
        </ul>
  


  </nav>


  </section>
</main>

<dialog id="navmodal" class="invert hobbes-modal">
  <button id="navmodal-close" class="modal-close menutoggle" aria-label="close menu"><span></span><span></span><span></span><span></span></button>
  <div class="block-hobbes-branding">
      <a href="/" title="Home" rel="home" class="site-logo">
      <span class="show-for-sr">Princeton University</span>
    </a>
  </div>
              <nav aria-labelledby="block-hobbes-main-menu-menu" id="block-hobbes-main-menu" data-block-plugin-id="system_menu_block:main" class="menu--main block--main-navigation">
            
  <h2 class="visually-hidden" id="block-hobbes-main-menu-menu" aria-hidden="true">Main navigation</h2>
  

        

                              <div class='menu-parent menu-parent-1'>
          <a href="/meet-princeton" data-drupal-link-system-path="node/126">Meet Princeton</a>
          <button class='toggle-submenu' aria-expanded='false'><span class='toggle-chevron'></span><span class='show-for-sr'>Submenu for Meet Princeton</span></button>
        </div>
        <section class='modal-submenu extra-rows items-13' aria-label='Meet Princeton submenu'>
                                <div class="menu-item"><a href="/meet-princeton/service-humanity" data-drupal-link-system-path="node/20346">In Service of Humanity</a></div>
                        <div class="menu-item"><a href="/meet-princeton/facts-figures" data-drupal-link-system-path="node/54486">Facts &amp; Figures</a></div>
                        <div class="menu-item"><a href="/meet-princeton/history" data-drupal-link-system-path="node/20176">History</a></div>
                        <div class="menu-item"><a href="/meet-princeton/honors-awards" data-drupal-link-system-path="node/93986">Honors &amp; Awards</a></div>
                        <div class="menu-item"><a href="/meet-princeton/contact-us" data-drupal-link-system-path="node/20181">Contact Us</a></div>
                        <div class="menu-item"><a href="/meet-princeton/visit-us" data-drupal-link-system-path="node/20531">Visit Us</a></div>
                        <div class="menu-item"><a href="/meet-princeton/our-faculty" data-drupal-link-system-path="node/20351">Our Faculty</a></div>
                        <div class="menu-item"><a href="/meet-princeton/our-students" data-drupal-link-system-path="node/20356">Our Students</a></div>
                        <div class="menu-item"><a href="/meet-princeton/our-alumni" data-drupal-link-system-path="node/20361">Our Alumni</a></div>
                        <div class="menu-item"><a href="/meet-princeton/our-staff" data-drupal-link-system-path="node/20256">Our Staff</a></div>
                        <div class="menu-item"><a href="/meet-princeton/our-leadership" data-drupal-link-system-path="node/172146">Our Leadership</a></div>
                        <div class="menu-item"><a href="/meet-princeton/academic-freedom-and-free-expression" data-drupal-link-system-path="node/252886">Academic Freedom and Free Expression</a></div>
                        <div class="menu-item"><a href="/meet-princeton/princetons-strategic-planning-framework" data-drupal-link-system-path="node/269851">Strategic Planning Framework</a></div>
            
        </section>
                                <div class='menu-parent menu-parent-2'>
          <a href="/academics" data-drupal-link-system-path="node/46">Academics</a>
          <button class='toggle-submenu' aria-expanded='false'><span class='toggle-chevron'></span><span class='show-for-sr'>Submenu for Academics</span></button>
        </div>
        <section class='modal-submenu extra-rows items-14' aria-label='Academics submenu'>
                                <div class="menu-item"><a href="/academics/studying-princeton" data-drupal-link-system-path="node/76">Studying at Princeton</a></div>
                        <div class="menu-item"><a href="/academics/library" data-drupal-link-system-path="node/20166">Library</a></div>
                        <div class="menu-item"><a href="/academics/areas-of-study" data-drupal-link-system-path="academics/areas-of-study">Areas of Study</a></div>
                        <div class="menu-item"><a href="/academics/areas-of-study/humanities" data-drupal-link-system-path="academics/areas-of-study/humanities">Humanities</a></div>
                        <div class="menu-item"><a href="/academics/areas-of-study/social-sciences" data-drupal-link-system-path="academics/areas-of-study/social-sciences">Social Sciences</a></div>
                        <div class="menu-item"><a href="/academics/areas-of-study/engineering" data-drupal-link-system-path="academics/areas-of-study/engineering">Engineering</a></div>
                        <div class="menu-item"><a href="/academics/areas-of-study/natural-sciences" data-drupal-link-system-path="academics/areas-of-study/natural-sciences">Natural Sciences</a></div>
                        <div class="menu-item"><a href="/academics/advising" data-drupal-link-system-path="node/20381" class="is-active">Advising</a></div>
                        <div class="menu-item"><a href="https://registrar.princeton.edu/academic-calendar/">Academic Calendar</a></div>
                        <div class="menu-item"><a href="/academics/course-tools" data-drupal-link-system-path="node/54066">Course Tools</a></div>
                        <div class="menu-item"><a href="/academics/learning-abroad" data-drupal-link-system-path="node/20161">Learning Abroad</a></div>
                        <div class="menu-item"><a href="/academics/career-development" data-drupal-link-system-path="node/20391">Career Development</a></div>
                        <div class="menu-item"><a href="/academics/continuing-education" data-drupal-link-system-path="node/20376">Continuing Education</a></div>
                        <div class="menu-item"><a href="/academics/innovative-learning" data-drupal-link-system-path="node/20366">Innovative Learning</a></div>
            
        </section>
                                <div class='menu-parent menu-parent-3'>
          <a href="/research" data-drupal-link-system-path="node/51">Research</a>
          <button class='toggle-submenu' aria-expanded='false'><span class='toggle-chevron'></span><span class='show-for-sr'>Submenu for Research</span></button>
        </div>
        <section class='modal-submenu  items-8' aria-label='Research submenu'>
                                <div class="menu-item"><a href="/research/engineering-and-applied-science" data-drupal-link-system-path="node/20396">Engineering &amp; Applied Science</a></div>
                        <div class="menu-item"><a href="/research/humanities" data-drupal-link-system-path="node/20401">Humanities</a></div>
                        <div class="menu-item"><a href="/research/natural-sciences" data-drupal-link-system-path="node/20406">Natural Sciences</a></div>
                        <div class="menu-item"><a href="/research/social-sciences" data-drupal-link-system-path="node/20411">Social Sciences</a></div>
                        <div class="menu-item"><a href="/research/office-dean-research" data-drupal-link-system-path="node/94976">Dean for Research Office</a></div>
                        <div class="menu-item"><a href="/research/interdisciplinary-approach" data-drupal-link-system-path="node/20421">Interdisciplinary Approach</a></div>
                        <div class="menu-item"><a href="/research/external-partnerships" data-drupal-link-system-path="node/20416">External Partnerships</a></div>
                        <div class="menu-item"><a href="/research/facilities-labs" data-drupal-link-system-path="node/21111">Facilities &amp; Labs</a></div>
            
        </section>
                                <div class='menu-parent menu-parent-4'>
          <a href="/one-community" data-drupal-link-system-path="node/56">One Community</a>
          <button class='toggle-submenu' aria-expanded='false'><span class='toggle-chevron'></span><span class='show-for-sr'>Submenu for One Community</span></button>
        </div>
        <section class='modal-submenu  items-12' aria-label='One Community submenu'>
                                <div class="menu-item"><a href="/one-community/lifelong-connections" data-drupal-link-system-path="node/20436">Lifelong Connections</a></div>
                        <div class="menu-item"><a href="/one-community/student-life" data-drupal-link-system-path="node/20441">Student Life</a></div>
                        <div class="menu-item"><a href="/one-community/arts-culture" data-drupal-link-system-path="node/20446">Arts &amp; Culture</a></div>
                        <div class="menu-item"><a href="/one-community/athletics" data-drupal-link-system-path="node/20451">Athletics</a></div>
                        <div class="menu-item"><a href="/one-community/living-princeton-nj" data-drupal-link-system-path="node/20456">Living in Princeton, N.J.</a></div>
                        <div class="menu-item"><a href="/one-community/housing-dining" data-drupal-link-system-path="node/20461">Housing &amp; Dining</a></div>
                        <div class="menu-item"><a href="/one-community/activities-organizations" data-drupal-link-system-path="node/20466">Activities &amp; Organizations</a></div>
                        <div class="menu-item"><a href="/one-community/cultural-affinity-groups" data-drupal-link-system-path="node/20471">Cultural &amp; Affinity Groups</a></div>
                        <div class="menu-item"><a href="/one-community/health-wellness" data-drupal-link-system-path="node/20476">Health &amp; Wellness</a></div>
                        <div class="menu-item"><a href="/one-community/religious-life" data-drupal-link-system-path="node/20481">Religious Life</a></div>
                        <div class="menu-item"><a href="/one-community/serving-public-good" data-drupal-link-system-path="node/20486">Serving the Public Good</a></div>
                        <div class="menu-item"><a href="/one-community/families" data-drupal-link-system-path="node/20491">Families</a></div>
            
        </section>
                                <div class='menu-parent menu-parent-5'>
          <a href="/admission-aid" data-drupal-link-system-path="node/61">Admission &amp; Aid</a>
          <button class='toggle-submenu' aria-expanded='false'><span class='toggle-chevron'></span><span class='show-for-sr'>Submenu for Admission &amp; Aid</span></button>
        </div>
        <section class='modal-submenu  items-6' aria-label='Admission &amp; Aid submenu'>
                                <div class="menu-item"><a href="/admission-aid/affordable-all" data-drupal-link-system-path="node/20496">Affordable for All</a></div>
                        <div class="menu-item"><a href="https://admission.princeton.edu/cost-aid">About Financial Aid</a></div>
                        <div class="menu-item"><a href="https://finaid.princeton.edu">Current Undergraduate Financial Aid</a></div>
                        <div class="menu-item"><a href="https://admission.princeton.edu">Undergraduate Admission</a></div>
                        <div class="menu-item"><a href="/admission-aid/graduate-admission" data-drupal-link-system-path="node/20501">Graduate Admission</a></div>
                        <div class="menu-item"><a href="/admission-aid/international-students" data-drupal-link-system-path="node/20506">For International Students</a></div>
            
        </section>
            
<section class="spotlights">
  
    <div class="content-tile content-tile-flashcard flashcard menu-spotlight">
      <a href="https://alumni.princeton.edu/venture-forward">                      <h3>
            <div class="field field--name-name field--type-string field--label-hidden field__item">Dare to Venture</div>
      <span class="show-for-sr">.</span></h3>
            <div class='image' aria-hidden="true">


  <article class="view-mode-tile-small media media-image"><div class="field field--name-image field--type-image field--label-hidden field__item" data-mid="177266"><img loading="lazy" srcset="/sites/default/files/styles/third_1x_crop/public/images/2023/08/venture_forward_3.png?itok=lD_w5HU2 640w, /sites/default/files/styles/half_1x_crop/public/images/2023/08/venture_forward_3.png?itok=qADUpTd5 960w" sizes="(min-width:22.5em) 33.333vw, (min-width:120em) 25vw, 100vw" width="640" height="360" src="/sites/default/files/styles/half_1x_crop/public/images/2023/08/venture_forward_3.png?itok=qADUpTd5" alt="" typeof="foaf:Image" /></div></article>

</div>
            <div class='content'>
              <span>
                
                                  From the Present to the Possible
                              </span>
            </div>
                    </a>    </div>

    <div class="content-tile content-tile-flashcard flashcard menu-spotlight">
      <a href="https://goprincetontigers.com/">                      <h3>
            <div class="field field--name-name field--type-string field--label-hidden field__item">Athletics</div>
      <span class="show-for-sr">.</span></h3>
            <div class='image' aria-hidden="true">


  <article class="view-mode-tile-small media media-image"><div class="field field--name-image field--type-image field--label-hidden field__item" data-mid="177261"><img loading="lazy" srcset="/sites/default/files/styles/third_1x_crop/public/images/2023/08/logo_main_0.png?itok=a1d5Vmrk 640w, /sites/default/files/styles/half_1x_crop/public/images/2023/08/logo_main_0.png?itok=Ue2ocWki 960w" sizes="(min-width:22.5em) 33.333vw, (min-width:120em) 25vw, 100vw" width="640" height="360" src="/sites/default/files/styles/half_1x_crop/public/images/2023/08/logo_main_0.png?itok=Ue2ocWki" alt="" typeof="foaf:Image" /></div></article>

</div>
            <div class='content'>
              <span>
                
                                  Go Princeton Tigers
                              </span>
            </div>
                    </a>    </div>

</section>

  </nav>
<nav aria-labelledby="block-hobbes-utilitymenu-menu" id="block-hobbes-utilitymenu" data-block-plugin-id="system_menu_block:menu-toolbar" class="menu--menu-toolbar">
            
  <h2 class="visually-hidden" id="block-hobbes-utilitymenu-menu">Utility menu</h2>
  

        
  
  <ul class="utility-menu menu">
    <li class="menu-item">
        <a href="/news" data-drupal-link-system-path="news">News</a>
    </li>
    <li class="menu-item">
        <a href="/events" data-drupal-link-system-path="node/20286">Events</a>
    </li>
    <li class="menu-item">
        <a href="/work/work-princeton" data-drupal-link-system-path="node/21131">Work at Princeton</a>
    </li>
    <li class="menu-item">
        <a href="/links/students" data-drupal-link-system-path="node/20266">Student Links</a>
    </li>
    <li class="menu-item">
        <a href="https://alumni.princeton.edu">Alumni</a>
    </li>
    <li class="menu-item">
        <a href="https://alumni.princeton.edu/give">Giving</a>
    </li>
    <li class="menu-item">
      <a href="https://inside.princeton.edu/university-links">Inside Princeton</a>
    </li>
  </ul>


  </nav>


  </dialog>

  <footer class="page-footer">
    <div class="row">
              <div class="small-6 xmedium-3 columns">
              <nav aria-labelledby="block-hobbes-footergroup1-menu" id="block-hobbes-footergroup1" data-block-plugin-id="system_menu_block:footer" class="menu--footer block--contact-links">
            
  <h2 class="visually-hidden" id="block-hobbes-footergroup1-menu" aria-hidden="true">Contact links</h2>
  

        
              <ul class="menu vertical">
                    <li class="menu-item">
        <a href="/meet-princeton/contact-us" data-drupal-link-system-path="node/20181">Contact Us</a>
              </li>
                <li class="menu-item">
        <a href="https://accessibility.princeton.edu/resources/accessibility-help">Accessibility Help</a>
              </li>
                <li class="menu-item">
        <a href="/search/people-advanced" data-drupal-link-system-path="search/people-advanced">Directory</a>
              </li>
        </ul>
  


  </nav>


        </div>
                    <div class="small-6 xmedium-3 columns">
              <nav aria-labelledby="block-hobbes-footergroup2-menu" id="block-hobbes-footergroup2" data-block-plugin-id="system_menu_block:footer-2" class="menu--footer-2 block--visiting-links">
            
  <h2 class="visually-hidden" id="block-hobbes-footergroup2-menu" aria-hidden="true">Visiting links</h2>
  

        
              <ul class="menu vertical">
                    <li class="menu-item">
        <a href="/meet-princeton/visit-us" data-drupal-link-system-path="node/20531">Plan a Visit</a>
              </li>
                <li class="menu-item">
        <a href="/meet-princeton/visit-us#campus-maps" data-drupal-link-system-path="node/20531">Maps &amp; Shuttles</a>
              </li>
                <li class="menu-item">
        <a href="http://www.goprincetontigers.com">Varsity Athletics</a>
              </li>
                <li class="menu-item">
        <a href="http://giving.princeton.edu">Giving to Princeton</a>
              </li>
        </ul>
  


  </nav>


        </div>
                    <div class="small-6 xmedium-3 columns">
              <nav aria-labelledby="block-hobbes-footergroup3-menu" id="block-hobbes-footergroup3" data-block-plugin-id="system_menu_block:footer-3" class="menu--footer-3 block--academic-links">
            
  <h2 class="visually-hidden" id="block-hobbes-footergroup3-menu" aria-hidden="true">Academic links</h2>
  

        
            <ul class="menu vertical">
                            <li class="menu-item">
            <a href="http://library.princeton.edu">Library</a>
                    </li>
                        <li class="menu-item">
            <a href="https://registrar.princeton.edu/academic-calendar/">Academic Calendar</a>
                    </li>
                        <li class="menu-item">
            <a href="/links/students" data-drupal-link-system-path="node/20266">Student Links</a>
                    </li>
                        <li class="menu-item">
            <a href="https://inside.princeton.edu/university-links">Faculty &amp; Staff Links</a>
                    </li>
        </ul>



  </nav>


        </div>
                    <div class="small-6 xmedium-3 columns">
              <nav aria-labelledby="block-hobbes-footersocialmedia-menu" id="block-hobbes-footersocialmedia" data-block-plugin-id="system_menu_block:footer-sm" class="menu--footer-sm block--footer-social-media">
            
  <h2 class="visually-hidden" id="block-hobbes-footersocialmedia-menu" aria-hidden="true">Footer social media</h2>
  

        
              <ul class="menu vertical">
                    <li class="menu-item sprite-before facebook">
        <a href="https://www.facebook.com/princetonu">Facebook</a>
              </li>
                <li class="menu-item sprite-before twitter">
        <a href="https://twitter.com/princeton">Twitter</a>
              </li>
                <li class="menu-item sprite-before instagram">
        <a href="https://www.instagram.com/princeton/">Instagram</a>
              </li>
                <li class="menu-item sprite-before snapchat">
        <a href="https://www.snapchat.com/add/princetonu">Snapchat</a>
              </li>
                <li class="menu-item sprite-before linkedin">
        <a href="https://www.linkedin.com/school/157313/">LinkedIn</a>
              </li>
                <li class="menu-item sprite-before youtube">
        <a href="https://www.youtube.com/princeton">YouTube</a>
              </li>
                <li class="menu-item sprite-before social-media-directory">
        <a href="http://socialmedia.princeton.edu/accounts">Social Media Directory</a>
              </li>
        </ul>
  


  </nav>


        </div>
          </div>
    <div class="midfooter row">
      <div class="columns">
        <strong>Equal Opportunity and Nondiscrimination at Princeton University:</strong> Princeton University believes that commitment to principles of fairness and respect for all is favorable to the free and open exchange of ideas, and the University seeks to reach out as widely as possible in order to attract the ablest individuals as students, faculty, and staff. In applying this policy, the University is committed to nondiscrimination on the basis of personal beliefs or characteristics such as political views, religion, national origin, ancestry, race, color, sex, sexual orientation, gender identity or expression, pregnancy/childbirth, age, marital or domestic partnership status, veteran status, disability, genetic information and/or other characteristics protected by applicable law in any phase of its education or employment programs or activities. In addition, pursuant to Title IX of the Education Amendments of 1972 and supporting regulations, Princeton does not discriminate on the basis of sex in the education programs or activities that it operates; this extends to admission and employment. Inquiries about the application of Title IX and its supporting regulations may be directed to the Assistant Secretary for Civil Rights, Office for Civil Rights, U.S. Department of Education or to the University’s Sexual Misconduct/Title IX Coordinator. See Princeton’s full <a href="https://rrr.princeton.edu/eop">Equal Opportunity Policy and Nondiscrimination Statement</a>.
      </div>
    </div>
      <div class="subfooter row" typeof="schema: Organization">
          <div class="subfooter-first small-6 medium-4 large-5 columns">
            <a href="http://www.princeton.edu"><img alt="" src="/themes/custom/hobbes/images/logo-white.svg"><span property="schema:name" class="show-for-sr">Princeton University</span></a>
          </div>
          <div class="subfooter-second small-6 medium-8 large-7 columns">
            <div class="row">
              <div class="small-12 medium-5 large-4 columns address">
                <div property="schema: address" typeof="PostalAddress">
                  <span property="addressLocality">Princeton, NJ</span>
                  <span property="schema: postalCode">08544</span>
                </div>
                <div>Operator: <span property="telephone">(609) 258-3000</span></div>
              </div>
              <div class="small-12 medium-7 large-8 columns text-right">
                <div class="copyright">
                  &copy; 2024 The Trustees of Princeton&nbsp;University
                </div>
                                      <nav aria-labelledby="block-hobbes-subfooterlinks-menu" id="block-hobbes-subfooterlinks" data-block-plugin-id="system_menu_block:subfooter-links" class="menu--subfooter-links block--subfooter-links">
            
  <h2 class="visually-hidden" id="block-hobbes-subfooterlinks-menu" aria-hidden="true">Subfooter links</h2>
  

        
        <ul class="menu float-right">
          <li class="menu-item">
        <a href="/content/copyright-infringement" data-drupal-link-system-path="node/20201">Copyright Infringement</a>
      </li>
          <li class="menu-item">
        <a href="/privacy-notice" data-drupal-link-system-path="node/174186">Privacy Notice</a>
      </li>
        </ul>
  


  </nav>


                              </div>

              </div>
          </div>
                      </div>
      </div>
  </footer>


  </div>

    
    <!-- DO NOT REMOVE this comment. The UltraDNS service tests for the following string to confirm that the site is available: ultradns-test-string -->
    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/20381","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"google_analytics":{"account":"UA-1706522-1","trackOutbound":true,"trackMailto":true,"trackTel":true,"trackDownload":true,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"data":{"extlink":{"extTarget":false,"extTargetNoOverride":false,"extNofollow":false,"extNoreferrer":false,"extFollowNoOverride":false,"extClass":"ext","extLabel":"(link is external)","extImgClass":false,"extSubdomains":false,"extExclude":"","extInclude":"","extCssExclude":".share-icons, .flashcard","extCssExplicit":"main, #block-hobbes-main-menu, #crumby-list","extAlert":false,"extAlertText":"This link will take you to an external web site. We are not responsible for their content.","mailtoClass":"mailto","mailtoLabel":"(link sends email)","extUseFontAwesome":false,"extIconPlacement":"append","extFaLinkClasses":"fa fa-external-link","extFaMailtoClasses":"fa fa-envelope-o","whitelistedDomains":[]}},"ajax":[],"user":{"uid":0,"permissionsHash":"58a79a70cecf5a50420d5489cc7910fc77d5a5bbbbabad6a316560fae9fcc8ed"}}</script>
<script src="/sites/default/files/js/js_4YLQhy1emZmEUxL2ZFVRckc0OlttF_u2XcHSh9U2c0Y.js?scope=footer&amp;delta=0&amp;language=en&amp;theme=hobbes&amp;include=eJxdjFsOwjAMBC8UmiNVTrNNDW4c8qgIpweVFiR-LO3seCfNsNd7Q-4mqAbBSJGkV56K_Qem9FKxWkcFZlHn8HZEHcmZnNCzGzyqcLxZn1siGY54OrO26KmyxpOsFCBC0STKFDKlpZy_PzK0mJoTLgu8mVkqsp0o7TuIlWsfsTr4LzzGN_ZQs9-PMM4M8TajJI2FN1z28gU72Gf2"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"NRJS-67e8b5519821728e13e","applicationID":"465817224","transactionName":"M1UGYktQVkAAV01YWwofJVVNWFddTkRYVlE7UwVVUVQ=","queueTime":6,"applicationTime":42,"atts":"HxIFFANKRU4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
//# sourceMappingURL=explainer-4b3f9c519e27fd5ece60.js.map