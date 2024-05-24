"use strict";(self.webpackChunkNRBA=self.webpackChunkNRBA||[]).push([[775],{3775:function(t,r,e){e.r(r),e.d(r,{Aggregate:function(){return c}});var n=e(1476),o=e(3350),s=e(6290);function i(t,r){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},i(t,r)}var c=function(t){var r,e;function c(r,e){var i;i=t.call(this,r,e)||this,(0,o.X)("storeMetric",(function(){var t;return(t=i).storeMetric.apply(t,arguments)}),void 0,i.ee),(0,o.X)("storeEventMetrics",(function(){var t;return(t=i).storeEventMetrics.apply(t,arguments)}),void 0,i.ee);var c=(0,n.Mt)(i.agentIdentifier,"jserrors.harvestTimeSeconds")||10,a=new s.o("jserrors",{},function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i));return a.startTimer(c),a.harvest.on("jserrors",(function(){return{body:i.aggregator.take(["cm","sm"])}})),i}e=t,(r=c).prototype=Object.create(e.prototype),r.prototype.constructor=r,i(r,e);var a=c.prototype;return a.storeMetric=function(t,r,e,n){this.aggregator.storeMetric(t,r,e,n)},a.storeEventMetrics=function(t,r,e,n){this.aggregator.store(t,r,e,n)},c}(e(5023).W)}}]);
//# sourceMappingURL=https://js-agent.newrelic.com/775.2d6a2503.maping"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",g=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:50,error_sampling_rate:50,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},h="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(h);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function m(e,t){if(!e)throw new Error(h);p[e]=(0,i.D)(t,g());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(h);var r=v(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},A={};function w(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!A[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return A[e]}function _(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");A[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=A[e])}const x=(0,n.mF)().o;var E=r(385),D=r(6818);const k={buildEnv:D.Re,customTransaction:void 0,disabled:!1,distMethod:D.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(E._A?.performance?.timeOrigin||E._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+E._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof E._A.XMLHttpRequest?.prototype?.addEventListener,version:D.q4,denyList:void 0},j={};function S(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!j[e])throw new Error("Runtime for ".concat(e," was never set"));return j[e]}function R(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");j[e]=(0,i.D)(t,k);const r=(0,n.ek)(e);r&&(r.runtime=j[e])}function T(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>o,q4:()=>n});const n="1.251.1",i="PROD",o="CDN"},385:(e,t,r)=>{"use strict";r.d(t,{Nk:()=>d,Tt:()=>s,_A:()=>o,cv:()=>l,iS:()=>a,il:()=>n,ux:()=>c,v6:()=>i,w1:()=>u});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a=Boolean("hidden"===o?.document?.visibilityState),s=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),c=s&&"undefined"==typeof SharedWorker,u=((()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);Array.isArray(e)&&e.length>=2&&e[1]})(),Boolean(n&&window.document.documentMode)),d=!!o.navigator?.sendBeacon,l=Math.floor(o?.performance?.timeOrigin||o?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(50);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),o=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(u(e),!e||!s[e].get(t))return a(t);s[e].get(t).staged=!0;const r=[...s[e]];function a(t){const r=e?n.ee.get(e):n.ee,a=o.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),a(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),o=r(234);class a{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,o.OP)(r).isolatedBacklog}catch(e){}var g={on:h,addEventListener:h,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=p(n),c=v(e),d=c.length,l=0;l<d;l++)c[l].apply(a,r);var f=b()[s[e]];f&&f.push([g,e,r,a]);return a},get:m,listeners:v,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",g.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return g;function p(e){return e&&e instanceof a?e:e?(0,i.X)(e,c,(()=>new a(c))):new a(c)}function h(e,t){n[e]=v(e).concat(t)}function v(e){return n[e]||[]}function m(t){return d[t]=d[t]||e(g,t)}function b(){return g.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,u.backlog={}}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(5546);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Rl:()=>a,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>o,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>a});const n="NRBA",i=144e5,o=18e5,a={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),o=r(3325),a=r(385);const s="newrelic";const c={stn:[o.D.sessionTrace],err:[o.D.jserrors,o.D.metrics],ins:[o.D.pageAction],spa:[o.D.spa],sr:[o.D.sessionReplay,o.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{a._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>o});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>o});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.bP)("load",e,t)}function a(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>o,ek:()=>u,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>o,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),o=r(5546),a=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),g=r(8632);function p(){const e=(0,g.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&o.push(e.api[t](...n))})),o.length>1?o:o[0]}(t,...n)}}))}var h=r(2825);const v=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let m=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:A,info:w,loader_config:_,runtime:x={loaderType:b},exposed:E=!0}=t;const D=(0,g.gG)();w||(A=D.init,w=D.info,_=D.loader_config),(0,i.Dg)(e.agentIdentifier,A||{}),(0,i.GE)(e.agentIdentifier,_||{}),w.jsAttributes??={},d.v6&&(w.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,w);const k=(0,i.P_)(e.agentIdentifier),j=[w.beacon,w.errorBeacon];m||(k.proxy.assets&&(v(k.proxy.assets),j.push(k.proxy.assets)),k.proxy.beacon&&j.push(k.proxy.beacon),p(),(0,g.EZ)("activatedFeatures",h.T)),x.denyList=[...k.ajax.deny_list||[],...k.ajax.block_internal?j:[]],(0,i.sU)(e.agentIdentifier,x),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const g={};var p=a.ee.get(e),h=p.get("tracer"),v="api-",m=v+"ixn-";function b(t,r,n,o){const a=(0,i.C5)(e);return null===r?delete a.jsAttributes[t]:(0,i.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),w(v,n,!0,o||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{g[e]=w(v,e,!0,"api")})),g.addPageAction=w(v,"addPageAction",!0,n.D.pageAction),g.setCurrentRouteName=w(v,"routeName",!0,n.D.spa),g.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,w(v,"setPageViewName",!0)()},g.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},g.start=e=>{try{const t=e?"defined":"undefined";(0,o.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},g.recordReplay=function(){(0,o.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,o.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},g.pauseReplay=function(){(0,o.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,o.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},g.interaction=function(){return(new y).get()};var A=y.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,o.p)(m+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(h.emit((a?"":"no-")+"fn-start",[(0,s.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){throw h.emit("fn-err",[arguments,this,e],r),e}finally{h.emit("fn-end",[(0,s.z)()],r)}}}};function w(e,t,r,i){return function(){return(0,o.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,o.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function _(){r.e(75).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{A[e]=w(m,e,void 0,n.D.spa)})),g.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,o.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,o.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>_()),!0):_(),g}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=E),m=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"nr-rum-1.251.1.min.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.251.1.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={75:"sha512-se+MgwtmnbdP/MASClg+GOgpTkSpcEndd09loplWI8jtivCRtbuBQGqwgSDauFr6FUmrBsb2ccq/Hk5NZDAKMQ=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var g=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={50:0,832:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.251.1.PROD"]=self["webpackChunk:NRBA-1.251.1.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e("recordReplay")}pauseReplay(){return this.#e("pauseReplay")}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}}var r=i(3325),n=i(234);const o=Object.values(r.D);function a(e){const t={};return o.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let o;this.onAggregateImported=new Promise((e=>{o=e}));const a=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(75).then(i.bind(i,957));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void o(!1);const{lazyFeatureLoader:e}=await i.e(75).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),o(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),o(!1)}};l.il?(0,d.b2)((()=>a()),!0):a()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var g=i(7633);class p extends f{static featureName=g.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,g.t,r),this.importAggregator()}}var h=i(1117),v=i(1284);class m extends h.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,v.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,v.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=b(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=A(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function A(e){return"object"!=typeof e?[]:(0,v.D)(e,w)}function w(e,t){return t}var _=i(8632),x=i(4402),E=i(4351);var D=i(5546),k=i(7956),j=i(3239),S=i(7894),R=i(9251);class T extends f{static featureName=R.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,R.t,r),l.il&&((0,k.N)((()=>(0,D.p)("docHidden",[(0,S.z)()],void 0,R.t,this.ee)),!0),(0,j.bP)("pagehide",(()=>(0,D.p)("winPagehide",[(0,S.z)()],void 0,R.t,this.ee))),this.importAggregator())}}var I=i(3081);class P extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,x.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new m({agentIdentifier:this.agentIdentifier}),this.features={},(0,_.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=a(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,_.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}}({features:[p,T,P],loaderType:"lite"})})()})();</script>
<script src="">  window.dataLayer = window.dataLayer || [];
  dataLayer.push({"event": "DS_optimizely_event_hold"});
  window.optimizely = window.optimizely || [];
  window.optimizely.push({type: "holdEvents"});</script>
<script type="text/javascript" src="https://www.docusign.com/optimizelyjs/275532918.js"></script>
<script type="text/javascript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&amp;l='+l:'';
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;j.type='text/javascript';j.async=true;
f.parentNode.insertAdjacentElement("beforeend",j,f);})(window,document,'script','dataLayer','GTM-646L');</script>
<link rel="canonical" href="https://www.docusign.com/customer-stories" />
<link rel="alternate" hreflang="de-DE" href="https://www.docusign.com/de-de/fallstudien" />
<link rel="alternate" hreflang="en-AU" href="https://www.docusign.com/en-au/customer-stories" />
<link rel="alternate" hreflang="en-CA" href="https://www.docusign.com/en-ca/customer-stories" />
<link rel="alternate" hreflang="en-GB" href="https://www.docusign.com/en-gb/customer-stories" />
<link rel="alternate" hreflang="en" href="https://www.docusign.com/customer-stories" />
<link rel="alternate" hreflang="es-ES" href="https://www.docusign.com/es-es/casos-de-clientes" />
<link rel="alternate" hreflang="es-MX" href="https://www.docusign.com/es-mx/casos-de-clientes" />
<link rel="alternate" hreflang="fr-FR" href="https://www.docusign.com/fr-fr/temoignages-client" />
<link rel="alternate" hreflang="ja-JP" href="https://www.docusign.com/ja-jp/customer-stories" />
<link rel="alternate" hreflang="nl-NL" href="https://www.docusign.com/nl-nl/klantverhalen" />
<link rel="alternate" hreflang="pt-BR" href="https://www.docusign.com/pt-br/casos-de-clientes" />
<link rel="alternate" hreflang="x-default" href="https://www.docusign.com/customer-stories" />
<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript" src="https://www.docusign.com/navigation.js"></script>
<script type="application/ld+json">{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "DocuSign",
            "url": "https://www.docusign.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.docusign.com/themes/custom/cubic/assets/images/logos/docusign_square_logo_white_on_black_rgb.png"
            }
        }
    ]
}</script>
<link rel="dns-prefetch" href="//cdn.sstatic.net" />
<link rel="dns-prefetch" href="//github.com" />
<link rel="dns-prefetch" href="//cdn.optimizely.com" />
<link rel="apple-touch-icon" sizes="57x57" href="/themes/custom/cubic/favicon/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/themes/custom/cubic/favicon/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/themes/custom/cubic/favicon/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/themes/custom/cubic/favicon/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/themes/custom/cubic/favicon/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/themes/custom/cubic/favicon/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/themes/custom/cubic/favicon/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/themes/custom/cubic/favicon/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/themes/custom/cubic/favicon/apple-touch-icon-180x180.png" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-36x36.png" sizes="36x36" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-48x48.png" sizes="48x48" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-72x72.png" sizes="72x72" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-144x144.png" sizes="144x144" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/android-chrome-192x192.png" sizes="192x192" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/themes/custom/cubic/favicon/favicon-96x96.png" sizes="96x96" />
<link rel="manifest" href="/themes/custom/cubic/manifest.webmanifest" />
<meta name="msapplication-square310x310logo" content="/themes/custom/cubic/favicon/mstile-310x310.png" />
<meta name="msapplication-wide310x150logo" content="/themes/custom/cubic/favicon/mstile-310x150.png" />
<meta name="msapplication-square150x150logo" content="/themes/custom/cubic/favicon/mstile-150x150.png" />
<meta name="msapplication-square144x144logo" content="/themes/custom/cubic/favicon/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="/themes/custom/cubic/favicon/mstile-70x70.png" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="msapplication-TileImage" content="/themes/custom/cubic/favicon/mstile-144x144.png" />
<meta name="apple-itunes-app" content="app-id=474990205" />
<meta name="theme-color" content="#ffffff" />
<link rel="icon" href="/themes/custom/cubic/favicon.ico" type="image/vnd.microsoft.icon" />

    <title>Customer Stories | DocuSign</title>
    <link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/ajax-progress.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/align.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/autocomplete-loading.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/fieldgroup.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/container-inline.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/clearfix.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/details.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/hidden.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/item-list.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/js.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/nowrap.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/position-container.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/progress.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/reset-appearance.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/resize.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/sticky-header.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/system-status-counter.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/system-status-report-counters.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/system-status-report-general-info.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/tabledrag.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/tablesort.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/system/components/tree-child.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/views/views.module.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/core/themes/stable/css/filter/filter.caption.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/modules/contrib/entity_embed/css/entity_embed.filter.caption.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/libraries/codesnippet/lib/highlight/styles/googlecode.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/themes/custom/cubic/patternLibraryAssets/style.css?s6fuqy" />
<link rel="stylesheet" media="all" href="/themes/custom/cubic/build/style.css?s6fuqy" />

    <script src="/themes/custom/cubic/patternLibraryAssets/js/modernizr.js?s6fuqy"></script>

  </head>
  <body>
    <!-- Google Tag Manager -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-646L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager -->
        <a href="#main-content" class="visually-hidden focusable">
      Skip to main content
    </a>
    
      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
      <div class="sticky-target">
    <div class="main-nav"></div>
  </div>
  <script>Nav.renderStaticNav('.main-nav');</script>

<main role="main">
  <a id="main-content" tabindex="-1"></a>

  <div class="layout-content">
            <div>
    <div data-drupal-messages-fallback class="hidden"></div>  
  <div class="content-type content-type--customer-stories-landing-page content-type--customer-stories-landing-page--default">
    <h1 class="title title--long">Customer Stories</h1>

          <ul class="content-strip">
      <li class="content-strip__item">
      
<a href="https://www.docusign.com/customer-stories/flowserve-boosts-speed-and-profit-margins-with-docusign-clm-and-salesforce" class="teaser teaser--dark teaser--compact teaser--image  teaser--logo teaser--color-underlay teaser--color-underlay--gray teaser--text-color-invert">
  <div class="teaser__image">                <img srcset="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2023-10/Hero-US_Flowserve.jpg?h=6e754b88&amp;itok=ELsV4_yX 325w, /sites/d8/files/styles/hero_m_469x652_/public/customer_story_hero_image/2023-10/Hero-US_Flowserve.jpg?h=6e754b88&amp;itok=d47wKfac 469w, /sites/d8/files/styles/hero_xs_556x772_/public/customer_story_hero_image/2023-10/Hero-US_Flowserve.jpg?h=6e754b88&amp;itok=g1822jJo 556w, /sites/d8/files/styles/hero_l_652x900_/public/customer_story_hero_image/2023-10/Hero-US_Flowserve.jpg?h=6e754b88&amp;itok=j3v0pzsj 652w" sizes="(min-width: 103rem) 810px, (min-width: 48rem) 49vw, 99vw" src="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2023-10/Hero-US_Flowserve.jpg?h=6e754b88&amp;itok=ELsV4_yX" alt="" />



  

  </div>      <div class="teaser__logo">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 144 144" style="enable-background:new 0 0 144 144;" xml:space="preserve"><title>Flowserve Logo</title>
<style type="text/css">
	.st0{fill:none;}
</style>
<g>
	<g>
		<g>
			<path class="st0" d="M69.7122726,59.2419014c-5.4097061-6.5886955-16.0097542-11.8644028-27.8428192-11.8644028     c-7.4348412,0-14.3833904,2.0834846-20.295599,5.6982422l2.5081787,3.4731941     c5.2022247-3.1122589,11.2840977-4.9039688,17.7863369-4.9039688c9.1509018,0,17.4729576,3.5455971,21.9360161,7.5958519     h5.9078865V59.2419014z"></path>
		</g>
		<path class="st0" d="M86.7367554,84.3517761c4.5711365,4.3214951,13.036911,8.0032578,22.3639526,8.0032578    c6.7453842,0,13.0358276-1.9300308,18.3634033-5.2594986l2.3374329,3.5693665    c-5.9986572,3.7682114-13.0930939,5.9576035-20.7008362,5.9576035c-11.9908371,0-22.7119141-5.4172745-28.1972733-12.2718124    h5.8333206V84.3517761z"></path>
		<path class="st0" d="M9.5635643,66.8420792v2.932869h5.0055485v3.8654709H9.5635643v6.8923492H5V62.9776917h10.0813389v3.8654709    H9.5635643V66.8420792z"></path>
		<path class="st0" d="M21.4074345,76.667305h5.4713078v3.8654633H16.8438702V62.9776917h4.5635662    C21.4074364,62.9776917,21.4074364,76.667305,21.4074345,76.667305z"></path>
		<path class="st0" d="M45.5133896,71.4283371c0,5.680954-4.0751152,9.6858215-9.708519,9.6858215    c-5.6344833,0-9.7095966-4.0048676-9.7095966-9.6858215c0-5.3092117,4.6575794-9.0341911,9.7095966-9.0341911    C40.8568878,62.3952255,45.5133896,66.1202087,45.5133896,71.4283371z M30.8447094,71.4510345    c0,3.0279617,2.235857,5.2389603,4.9590816,5.2389603c2.724308,0,4.9590836-2.2109985,4.9590836-5.2389603    c0-2.4206467-2.2347755-4.6327286-4.9590836-4.6327286C33.0805664,66.818306,30.8447094,69.0303879,30.8447094,71.4510345z"></path>
		<path class="st0" d="M52.453289,74.3158188h0.0464668l3.6785164-11.3381271h3.6320457l3.4461784,11.3381271h0.0464668    l3.306778-11.3381271h4.7494354l-5.6117935,17.5550766h-4.656498l-3.0733566-10.1742706h-0.0464668l-3.4461746,10.1742706    h-4.6338043l-5.2389679-17.5550766h4.7494354L52.453289,74.3158188z"></path>
		<path class="st0" d="M80.9996185,67.4937057c-0.8396606-0.699173-1.9095001-1.1638565-3.0268936-1.1638565    c-0.8385773,0-1.9559631,0.4884567-1.9559631,1.4664383c0,1.0244522,1.2340927,1.4199677,2.026207,1.6760864l1.1638641,0.3501282    c2.4444199,0.7218704,4.3312225,1.9548874,4.3312225,4.7958984c0,1.747406-0.4192886,3.5391159-1.8165588,4.7267456    c-1.3735046,1.1649323-3.2127609,1.653389-4.9828568,1.653389c-2.2120743,0-4.3776932-0.7456512-6.1704865-2.0024414    l1.9559708-3.6785126c1.1411591,1.000679,2.4919739,1.8165665,4.0513382,1.8165665    c1.0709152,0,2.2120743-0.5360031,2.2120743-1.7701035c0-1.27948-1.7927856-1.7236252-2.7707748-2.0024338    c-2.8637085-0.8148041-4.7494354-1.5593719-4.7494354-4.9590836c0-3.5618057,2.5384369-5.8905945,6.053772-5.8905945    c1.7701035,0,3.9346313,0.5586929,5.4940033,1.4437408L80.9996185,67.4937057z"></path>
		<path class="st0" d="M89.7528381,66.8420792v2.932869h5.1449585v3.8654709h-5.1449585v3.026886h5.4259262v3.8654633h-9.9894867    V62.9776917h9.9894867v3.8654709h-5.4259262V66.8420792z"></path>
		<path class="st0" d="M112.147049,80.5327682h-5.680954l-4.3074493-6.7518692h-0.0464706v6.7518692h-4.5635605V62.9776917h6.822113    c3.4688721,0,6.0991592,1.653389,6.0991592,5.401062c0,2.4206467-1.3486481,4.5170975-3.8416977,4.9580002L112.147049,80.5327682z     M102.112175,70.8469467h0.4419785c1.4902115,0,3.1662903-0.2798843,3.1662903-2.1893845    c0-1.9084167-1.6760788-2.1883011-3.1662903-2.1883011h-0.4419785V70.8469467z"></path>
		<path class="st0" d="M119.0901871,73.640419l4.2599106-10.6627274h4.9590759l-7.4975204,17.5550766h-3.5391159    l-7.3797302-17.5550766h4.9580002L119.0901871,73.640419z"></path>
		<path class="st0" d="M133.5740814,66.8420792v2.932869h5.1449432v3.8654709h-5.1449432v3.026886H139v3.8654633h-9.9894867    V62.9776917H139v3.8654709h-5.4259186V66.8420792z"></path>
	</g>
	<path class="st0" d="M131.9704132,85.6009979c0-0.8007584,0.6029968-1.399437,1.3756561-1.399437   c0.7629395,0,1.3691711,0.5986786,1.3691711,1.399437c0,0.8104858-0.6062317,1.4091644-1.3691711,1.4091644   C132.5723267,87.009079,131.9704132,86.4114838,131.9704132,85.6009979z M133.3460693,87.2900467   c0.9207001,0,1.7084961-0.7132263,1.7084961-1.6890488c0-0.9704208-0.7877808-1.6804047-1.7084961-1.6804047   c-0.9293671,0-1.7149963,0.7099838-1.7149963,1.6804047C131.631073,86.5768204,132.4167023,87.2900467,133.3460693,87.2900467z    M132.9872894,85.7339172h0.3404083l0.5133057,0.8429031h0.3306732l-0.553299-0.8547897   c0.286377-0.0356674,0.5046692-0.1880341,0.5046692-0.5370865c0-0.3847046-0.2269287-0.5543671-0.6883698-0.5543671h-0.7402344   v1.9462357h0.2939301v-0.8428955H132.9872894z M132.9872894,85.4853668v-0.6062393h0.4030762   c0.2053223,0,0.4246979,0.0453873,0.4246979,0.2874527c0,0.300415-0.2236938,0.3187866-0.4733276,0.3187866   C133.3417358,85.4853668,132.9872894,85.4853668,132.9872894,85.4853668z"></path>
</g>
</svg>
  

  
                </div>
      <h2 class="teaser__title">Flowserve Boosts Speed and Profit Margins with DocuSign CLM and Salesforce</h2>
    <div class="teaser__meta">
            <div class="teaser__readmore">Read the story</div>  </div>
    <div class="teaser__arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none" >
      <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#arrow"></use>
    </svg>
  </div>
</a>
    </li>
      <li class="content-strip__item">
      
<a href="https://www.docusign.com/customer-stories/united-airlines-fuels-seamless-hr-workflows-with-docusign-esignature-for-servicenow" class="teaser teaser--dark teaser--compact teaser--image  teaser--logo teaser--color-underlay teaser--color-underlay--magenta teaser--text-color-invert">
  <div class="teaser__image">                <img srcset="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2022-10/CustomerStories-Hero-UnitedAirlines.jpeg?h=6e754b88&amp;itok=Xica1cOy 325w, /sites/d8/files/styles/hero_m_469x652_/public/customer_story_hero_image/2022-10/CustomerStories-Hero-UnitedAirlines.jpeg?h=6e754b88&amp;itok=OruM5ZCw 469w, /sites/d8/files/styles/hero_xs_556x772_/public/customer_story_hero_image/2022-10/CustomerStories-Hero-UnitedAirlines.jpeg?h=6e754b88&amp;itok=GcY02rd0 556w, /sites/d8/files/styles/hero_l_652x900_/public/customer_story_hero_image/2022-10/CustomerStories-Hero-UnitedAirlines.jpeg?h=6e754b88&amp;itok=bSHDeAVq 652w" sizes="(min-width: 103rem) 810px, (min-width: 48rem) 49vw, 99vw" src="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2022-10/CustomerStories-Hero-UnitedAirlines.jpeg?h=6e754b88&amp;itok=Xica1cOy" alt="" />



  

  </div>      <div class="teaser__logo">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 144 144" style="enable-background:new 0 0 144 144;" xml:space="preserve"><title>United-Airlines logo</title>
<g transform="translate(0.000000,447.000000) scale(0.100000,-0.100000)">
	<path d="M1156,3850.8c0-8.9,0.2-16.2,0.3-16.2c0.2,0,2.6,0.6,5.3,1.3c12.5,3.1,23.3,4.2,39.3,3.9   c18.3-0.4,33-3.1,49.6-9.1c63.1-22.8,105.3-86.9,100.9-153.4c-1-14.8-3-26.2-6.9-38l-2-6.2h23.8h23.8v117v117h-117h-117V3850.8z"></path>
	<path d="M1181.7,3836.1c-1.3-0.2-2.3-0.4-2.1-0.5c0.2-0.1,4.9-0.2,10.5-0.3c5.6-0.1,10.9-0.4,11.8-0.7   c1.5-0.5,1.5-0.5-2.2-1.7c-2.1-0.7-3.8-1.4-3.8-1.5c0.1-0.5,4.1-2.3,4.7-1.9c0.3,0.2,2.6,0.9,5.3,1.6l4.8,1.3l2.7-1   c1.5-0.6,4.4-2,6.5-3.2c4.5-2.6,4.8-2.3-4.8-3.8c-7.6-1.2-7.4-1-5.9-3.1l1.3-1.7l4.5,0.6c2.5,0.4,6.6,0.8,9.3,1l4.9,0.3l2.6-2.9   c1.5-1.6,3.1-3.7,3.8-4.7l1-1.8l-10.4-0.2c-5.7-0.1-10.5-0.4-10.7-0.5c-0.2-0.2,0-1.2,0.4-2.4l0.7-2l8.3-0.4   c4.6-0.2,9.7-0.5,11.6-0.7c2.9-0.3,3.3-0.5,3.8-1.7c0.9-2.3,2.1-7.5,2.1-9.2c0-1.5-0.1-1.5-1.9-1.3c-7.8,1.2-17.1,2.4-19.6,2.6   l-3,0.3v-3.3v-3.3l2.5-0.3c4.1-0.5,17-2.9,19.7-3.6c2.5-0.7,2.6-0.8,2.8-2.6c0.2-1.9-1.2-10.7-1.7-11.3c-0.2-0.2-3.1,0.6-6.4,1.6   c-7.1,2.2-18.6,5.1-18.9,4.9c-0.1-0.1-0.9-2.5-1.9-5.2l-1.7-5l4.5-1.7c6-2.3,19.9-8.4,20.2-8.9s-3.7-10.3-4.7-11.4   c-0.1-0.1-3.5,1.6-7.4,3.7c-4,2.2-9.5,5-12.3,6.3l-5.1,2.3l-2.5-4c-1.4-2.2-3.3-5.2-4.3-6.5c-1-1.4-1.6-2.7-1.4-2.9   c0.3-0.3,4.1-2.9,8.7-6c11.2-7.5,14.1-9.8,13.6-10.5c-0.3-0.3-1.9-2.5-3.8-4.9c-2.9-3.8-3.5-4.2-4.2-3.7c-0.5,0.4-5.5,4.3-11.1,9   l-10.3,8.3l-2.7-3c-3.2-3.6-6.8-7.1-9.2-8.9l-1.7-1.4l6.5-7.1c3.6-4,7.9-8.8,9.5-10.7l2.9-3.6l-1.5-1.6c-0.8-0.9-2.7-2.5-4.1-3.6   l-2.5-2l-5.4,6.9c-3,3.8-6.9,8.8-8.7,11.3c-1.8,2.4-3.4,4.4-3.7,4.4c-0.2,0-2-1.2-3.9-2.7c-1.9-1.5-5.4-3.8-7.6-5l-4.1-2.4v-4.1   v-4.1l5-9.9l5-9.9l-3.1-1.6c-1.7-0.8-3.3-1.6-3.7-1.6c-0.3,0-1.1,1.1-1.8,2.5l-1.3,2.5l-0.1-4.9v-4.8l5.4,2.7   c40.3,20.2,73,57.4,81.7,93.1c2.5,10.2,3,18.8,1.6,27.7c-3.3,21.8-19.7,37-43.4,40.3C1197,3836.7,1185.5,3836.7,1181.7,3836.1z"></path>
	<path d="M1218,3835c0.6-0.3,1.6-0.6,2.3-0.7c5.4-0.6,14.4-3.4,19.6-6.1l3.3-1.7l-5.4-0.3l-5.4-0.3l2-1.9l2-1.9l7.3-0.3   c5.4-0.2,7.6-0.5,8.6-1.2c2-1.3,9.1-8.6,10.2-10.6l1-1.8l-1.5,0.4c-2.3,0.6-14.9,2.4-16.5,2.4c-1.7,0-1.8-0.3-0.4-3.4   c1.1-2.6,0.8-2.5,8.4-3.7c2.7-0.5,7.2-1.4,9.9-2l4.9-1.1l1.6-3.5c1.6-3.5,3.9-11.8,3.4-12.3c-0.2-0.2-1.8,0.3-3.8,1   c-3,1.2-14.8,4.6-19.2,5.7l-1.5,0.3v-4v-4.1l8.5-2.8c4.7-1.5,10.5-3.6,12.9-4.7l4.4-1.9l-0.3-5c-0.3-4.2-1.2-10.4-1.7-10.9   c-0.1-0.1-3.1,1.4-6.9,3.1c-8.1,3.9-18.1,7.9-18.4,7.5c-0.4-0.4-3.9-11.9-4-13.1c-0.1-0.8,1.5-1.8,7.3-5c4.1-2.1,9.6-5.2,12.2-6.8   c5.4-3.3,5.3-2.6,1.9-9.7c-3.5-7.4-2.7-7.2-9.7-2.5c-3.3,2.2-8.6,5.6-11.8,7.5l-5.8,3.5l-2.5-4.6c-1.4-2.5-3.7-6.2-5.1-8.4   c-1.5-2.1-2.6-4-2.5-4.2c0.1-0.2,2.8-2.5,5.9-5c10.2-8.2,15.4-12.9,15.1-13.6c-0.7-1.2-5.2-6.9-6.9-8.8l-1.8-2l-6,5.8   c-3.3,3.1-8,7.4-10.5,9.5l-4.4,3.8l-2.4-2.8c-1.3-1.6-5.1-5.7-8.4-9.1l-6-6.1l2.1-2.3c2.9-3,15.9-18.3,15.9-18.8   c0-0.5-8.8-7.7-9.4-7.7c-0.3,0-4.3,4.9-9,10.9l-8.5,10.9l-5-3.8c-5.4-4.1-10.3-7.3-15.8-10.4l-3.5-1.9l6.5-11.8   c3.6-6.5,6.5-12,6.5-12.2c0-0.5-5.9-3.7-6.9-3.7c-0.8,0-3.8,5.1-9.3,16l-4,7.9l-2.7-1.3l-2.7-1.2v-15.9v-15.9l4.6,1.6   c17.9,6.3,38.5,17.8,53.8,30.1c3.1,2.6,8.9,7.7,12.8,11.5c26.1,25.4,42.6,52.3,48.3,79c1,4.9,1.3,7.2,1.2,15.2   c-0.1,8.4-0.2,9.9-1.4,14.6c-4.1,15.6-13.2,28.1-26.7,36.9c-6.4,4.2-15.4,7.4-26.1,9.3C1217.3,3835.7,1216.7,3835.7,1218,3835z"></path>
	<path d="M1162.6,3831.7c-5.1-0.8-6.5-1.3-6.5-2c0-0.4,0.7-0.4,2-0.2c2.9,0.5,10.1,1,10.1,0.7c0-0.1-1.2-1-2.6-1.9   c-1.4-0.9-2.9-2.1-3.5-2.7c-0.9-0.9-0.8-1,0.4-1.3c1-0.3,2,0.1,4.4,1.7c7.3,5,7.5,5,12.4,4.4c4.9-0.7,8-1.6,7.3-2.1   c-0.2-0.2-2-1-4.1-1.9c-3.6-1.4-9.8-4.6-11.1-5.7c-0.5-0.4-0.4-0.7,0.4-1.2c0.9-0.6,1.5-0.5,5.1,1.2c5.6,2.6,14.3,6,15.3,6   c0.9,0,6.5-3.2,7.7-4.4c0.6-0.6,0.1-0.8-3.1-1.6c-5.8-1.4-19.8-6-19.8-6.5c0-0.3,0.4-0.9,0.9-1.6l0.9-1.1l5,1.6   c2.7,0.9,8.3,2.4,12.5,3.5c6.3,1.6,7.6,1.8,8.3,1.2c1.1-0.9,3.8-5.1,3.8-5.9c0-0.4-2.6-0.9-6.9-1.5c-7.6-1-19.8-3.3-20.4-3.9   c-0.6-0.6,0.2-3.2,0.9-3.2c0.4,0,2.9,0.4,5.6,0.8c6,0.9,18.3,2.4,20.9,2.4c2.3,0,2.7-0.7,3.3-5.7l0.4-3.2h-9.4   c-11.8-0.1-20.1-0.7-20.7-1.7c-0.3-0.4-0.5-1.5-0.5-2.4v-1.7l10.6-0.1c10.4,0,18.4-0.5,19.1-1.2c0.4-0.3-1.2-9.1-1.6-9.6   c-0.2-0.1-2.9,0.3-6.2,0.9c-6.3,1.2-18.3,2.7-21.4,2.7c-1.8,0-2-0.2-2.7-2.2c-0.4-1.3-0.9-2.7-1.2-3.1c-0.3-0.7-0.1-0.9,0.6-0.9   c1.6,0,13.7-3,20.7-5.2c6.5-2.1,6.6-2.1,6.2-3.4c-0.5-1.4-2.8-5.9-3.6-7c-0.4-0.5-2,0-7.5,2.2c-6.8,2.8-19.8,7.3-20,7   c-0.1-0.1-0.8-1.3-1.6-2.8c-0.8-1.4-2-3.4-2.7-4.2l-1.3-1.7l6.4-3.5c6.6-3.7,16.5-9.5,17.4-10.3c0.5-0.4-4.7-7.3-5.5-7.3   c-0.3,0-3.3,2.1-6.9,4.8c-3.6,2.7-8.5,6.2-11.1,8l-4.7,3.1l-4.4-4.4l-4.4-4.4l3.1-3.4c1.7-1.9,5.9-6.4,9.3-10l6.2-6.5l-1.9-1.7   c-1-0.9-2.5-2.1-3.2-2.7l-1.3-1l-4,5.1c-2.3,2.8-5,6.3-6.1,7.7l-2,2.6v-13.5c0-10.6,0.2-13.4,0.7-13.1c7.5,4.5,17.9,12.6,25.4,19.8   c18.5,17.9,29.9,38.6,32,57.9c1.4,13-2.5,24.8-10.7,32.1c-3.9,3.5-11.1,7.2-16.9,8.7C1181.3,3832.3,1168.7,3832.8,1162.6,3831.7z"></path>
	<path d="M1257.8,3822.8c1.8-1.6,3.1-2.4,4.2-2.4c3.8-0.1,9.4-3.5,15.8-9.6c3.9-3.7,7.3-7.6,6.9-7.9   c-0.1-0.1-2.5,0.5-5.2,1.3c-2.7,0.8-5.6,1.6-6.3,1.8l-1.4,0.3l1.8-3.6l1.8-3.6l7.7-2.7l7.7-2.6l2-4.7c1.8-4.2,4.8-14.2,4.3-14.7   c-0.1-0.1-3.1,1.2-6.7,2.9c-3.6,1.7-7.4,3.5-8.4,3.9l-2,0.8v-4.9v-4.9l4.9-2.5c2.6-1.3,6.8-3.5,9.1-4.9l4.3-2.5v-5.2   c0-4.7-0.6-10.5-1.4-13c-0.3-0.8-0.7-0.6-3.5,1.4c-3.5,2.5-14.5,9.2-15.1,9.2c-0.2,0-0.7-1.5-1.2-3.4c-0.5-1.8-1.6-5.6-2.6-8.4   l-1.8-5l4.2-2.9c2.4-1.7,6.6-4.8,9.4-6.9l5-3.9l-0.9-2.5c-0.5-1.4-2.1-4.7-3.5-7.5l-2.5-5l-5.8,4.8c-6.5,5.3-12.1,9.7-12.5,9.7   c-0.2,0-1.5-2.2-3-4.8c-2.3-4.1-4.5-7.4-9.3-14c-0.6-0.8,0.2-1.8,8-9.5c4.8-4.7,8.7-8.6,8.7-8.8c0-0.6-5.5-7.7-7.7-10.1l-1.9-1.9   l-8.4,8.7l-8.4,8.7l-10-10.1l-9.9-10.1l3.1-3.5c3.9-4.4,11.9-14.7,11.9-15.3c0-0.3-2.3-2.4-5.1-4.7c-4-3.4-5.2-4.1-5.7-3.6   c-0.3,0.4-3.7,4.8-7.5,9.7l-7,9l-2.9-2.1c-4.8-3.5-14.1-9.5-19.7-12.7c-2.9-1.7-5.4-3.2-5.7-3.4c-0.3-0.3,1.2-3.1,3.2-6.4l3.6-6   l12.8-0.2l12.9-0.1l4.1,2.9c39.9,28.6,69.1,68.2,76.8,104.1c2.8,13.1,2.5,27.6-1,39.6c-5.4,18.9-18.3,35.2-33.1,41.9   c-3.4,1.6-8.8,3.6-9.5,3.6C1255.4,3825.1,1256.4,3824,1257.8,3822.8z"></path>
	<path d="M1156,3820.4v-2l1.5,0.8c1.3,0.8,1.6,0.7,4.2-0.4c1.5-0.6,2.7-1.3,2.7-1.5c0-0.2-1.9-1.5-4.2-2.8   c-3.5-2.1-4.2-2.7-4.2-3.8c0-0.7,0.2-1.2,0.4-1.1c0.2,0.1,2.7,1.6,5.4,3.2c5.4,3.1,5.9,3.2,8,0.9c0.9-1,0.8-2.2-0.3-2.2   c-0.3,0-3.4-1.4-7-3.1c-5.9-2.8-6.5-3.2-6.5-4.4c0-1.2,0.1-1.3,1.3-0.8c0.7,0.3,2.1,0.9,3.2,1.5c2.4,1.2,11.5,4.8,12.1,4.8   c0.4,0,2.4-4.2,2-4.4c-0.1-0.1-1.8-0.5-3.8-1c-2-0.5-6.1-1.8-9.2-2.9c-4.6-1.6-5.5-2.1-5.7-3.1c-0.2-1.4,0-1.4,4.1-0.1   c5.7,1.7,14.6,3.7,15.1,3.4c0.3-0.2,0.5-1.5,0.5-2.8v-2.5l-8.3-1.2c-11-1.6-11.3-1.7-11.5-3.5c-0.2-1.4-0.1-1.5,1.8-1.2   c1.7,0.3,15,1.4,16.8,1.4c0.4,0,0.6-0.6,0.6-1.4c0-1.9-1.2-5.1-1.8-5.1c-0.3,0.1-4.3,0.3-9,0.5l-8.5,0.4v-2.1c0-2,0.1-2.1,1.4-2.1   c1.5,0,13.9-2.1,14.2-2.4c0.1-0.1-0.5-1.4-1.2-2.9c-1-2-1.6-2.7-2.3-2.5c-3.9,1.2-10.9,3-11.5,3c-0.5,0-0.7-1.1-0.7-3.8v-3.8   l3.7-1.8c2-1,3.7-2,3.7-2.2c0-0.3-0.8-1.3-1.8-2.4l-1.7-1.9l-1.9,1.2l-1.9,1.2v-4.9v-4.9l2.9,2.8c15,14.7,22.2,33.3,18.5,47.9   c-1.6,6.1-5,10.7-10.3,14.1c-2,1.3-9.3,4-10.6,4C1156.3,3822.5,1156,3821.6,1156,3820.4z"></path>
	<path d="M50,3767.8c0-21.5,0.2-37.9,0.5-41c2.6-23.4,15.1-38.1,38.3-44.8c13.8-4,35.6-4.5,51.5-1.3   c27.3,5.5,41.7,21.8,43.7,49.1c0.3,3.9,0.5,22.1,0.5,40.5v33.3H167h-17.5v-37.5c0-32.5-0.1-37.9-0.8-40.7   c-2.5-9.6-9.1-15.6-19.8-17.8c-5.5-1.2-17.4-1.2-22.8-0.1c-8.4,1.8-15,6.4-18,12.4c-3,6.2-3,5.8-3,46.4v37.3H67.5H50V3767.8z"></path>
	<path d="M251.5,3742.2v-61.5h16.2H284l0.1,38.6l0.2,38.5l37.8-38.5l37.9-38.6h13h13v61.5v61.5h-16.2h-16.2V3767   c0-23.5-0.2-36.6-0.5-36.5c-0.3,0.1-16.4,16.6-35.9,36.7l-35.4,36.5h-15.1h-15.2V3742.2z"></path>
	<path d="M463.5,3742.2v-61.5h17.8h17.8v61.5v61.5h-17.8h-17.8V3742.2z"></path>
	<path d="M561.4,3789.8v-13.9h22.5h22.5v-47.6v-47.6h17.3H641v47.6v47.6h22.8h22.8v13.9v13.9h-62.6h-62.6V3789.8z"></path>
	<path d="M747.7,3742.2v-61.5h57.6h57.6v13.3v13.3h-40.3h-40.3v11.3v11.3h33.8h33.8v12.6v12.6h-33.8h-33.8v11v11h40h40   v13.3v13.3h-57.3h-57.3V3742.2z"></path>
	<path d="M930.4,3742.1v-61.6l37.1,0.3c37.8,0.2,39.8,0.3,50.8,2.5c25.6,5.1,42.3,19.8,47.7,41.9   c1.7,7.1,2.4,16.2,1.7,23.7c-3,32-23.1,50.1-60.2,54c-5.4,0.6-15.3,0.8-42,0.8h-35V3742.1z M999.5,3775.9c6.9-0.7,11-1.8,16.2-4.3   c7.9-3.8,12.8-10.1,15-19.1c1.2-4.9,1.2-16,0-20.8c-2.7-11.4-10.2-18.6-22.8-21.8c-4.1-1-6-1.2-23.7-1.4l-19.3-0.3v34.1v34.1h14.8   C987.9,3776.4,996.8,3776.2,999.5,3775.9z"></path>
	<path d="M1293.7,3799.2c0.1-0.3,1.1-2.1,2.1-4.2c1.8-3.5,2.1-3.8,5.1-5.2c2.9-1.3,3.4-1.7,5.3-5.1   c3.5-5.9,9-19.7,8.2-20.5c-0.1-0.1-2.4,1.2-5.1,2.9c-2.7,1.7-5.1,3.1-5.2,3.1c-0.2,0-0.1-2.5,0.2-5.7l0.4-5.6l4.6-3.3   c2.5-1.8,5.3-4,6.2-4.8c1.6-1.6,1.7-1.8,1.7-5.4c0-3.9-0.8-13.7-1.3-15.9c-0.3-1.2-0.5-1-3.6,1.8c-1.8,1.7-4.8,4.2-6.6,5.5   l-3.3,2.5l-1.2-4.6c-0.6-2.5-2-6.9-2.9-9.6l-1.8-5l3.5-3c1.9-1.6,5.1-4.6,7-6.5l3.6-3.6l-1.3-3.3c-0.7-1.8-2.3-5.4-3.5-8l-2.3-4.7   l-6.9,6.9c-3.8,3.8-7.1,6.9-7.2,6.9c-0.2,0-1-1.1-1.7-2.5c-0.7-1.4-3.8-6.3-6.8-10.9c-3.5-5.1-5.4-8.6-5.2-9   c0.2-0.4,3.2-3.8,6.6-7.6c3.4-3.8,6.1-7.2,6.1-7.5c-0.1-1-9.5-12.4-10.3-12.3c-0.3,0-2.7,2.7-5.4,6c-2.7,3.3-5.7,6.6-6.4,7.4   l-1.5,1.4l-4.6-5c-5.4-6-8.6-9.2-13.2-13.3l-3.5-3.1l6-7.7l6-7.7h2.6c2.5,0,2.8,0.2,6.9,3.9c2.4,2.1,7.3,7.2,11,11.2   c20.3,22,33.9,45.3,39.8,67.7c2.5,9.5,3.4,16.4,3.4,26.2c0,14-2.8,26-9,38.1c-3.3,6.6-10.9,17.2-13,18.1   C1295.3,3799.2,1293.5,3799.6,1293.7,3799.2z"></path>
	<path d="M1312.1,3783.8c2.8-3.6,8.2-11.9,10.1-15.7c2.3-4.5,5.2-12.5,4.8-12.9c-0.2-0.2-1.2,0.4-2.3,1.2   c-3.2,2.5-3.5,2.6-3.1,1.2c0.2-0.7,0.6-3.7,0.9-6.6l0.6-5.4l4.2-4l4.2-4l-0.3-10.7c-0.2-5.9-0.4-11.3-0.6-11.9   c-0.4-1-0.7-0.8-4.8,3.6c-2.5,2.6-4.6,4.7-4.7,4.6c-0.1-0.2-0.8-2.9-1.6-6.2c-0.7-3.2-1.9-7.7-2.7-9.9l-1.4-4l2-2.3   c1.1-1.3,3.3-4.1,4.9-6.4l2.9-4.1l-1.4-4c-1.4-3.9-5.3-12.1-5.7-12.1c-0.2,0-6.3,7.7-9.5,12c-0.5,0.6-1.2-0.3-3.6-4.4   c-3-5.1-9.4-15-11.3-17.4c-1-1.3-1-1.3,0.9-3.6c1-1.3,3.5-4.4,5.4-7.1l3.6-4.8l-1.4-1.8c-3.3-4.6-8.7-11-9.2-11   c-0.2,0-2.8,3.2-5.7,7.1l-5.3,7.1l-1.9-2.2c-4-4.7-11.6-12.9-12.8-13.7c-1-0.8,0-0.8,13.1-0.8l14.3-0.1l3.2,4   c31,37.6,43.1,82.9,31.5,118.3c-3.2,10.1-11.2,23.4-17.3,29l-2,1.8L1312.1,3783.8z"></path>
	<path d="M1335.2,3746.9c0.2-0.8,0.6-4.4,1.1-8c0.8-6.3,0.9-6.5,3.2-9.7l2.4-3.2l-0.3-7.6c-0.3-7.7-1.3-16.2-1.9-16.2   c-0.2,0-1.1,1-2.1,2.4c-0.9,1.3-1.8,2.3-2,2.1c-0.1-0.1-0.6-2.3-1.2-4.9c-0.5-2.5-1.8-7.3-2.9-10.7l-1.9-6.1l2.4-4.1l2.4-4.2   l-1.3-3.6c-1.5-4.3-5-12.9-5.5-13.5c-0.2-0.2-1.5,1.5-2.9,3.8c-1.4,2.3-2.6,4.1-2.7,4s-1.6-2.7-3.4-5.9c-1.8-3.1-5.1-8.5-7.4-11.9   c-2.3-3.4-4.1-6.3-4.1-6.5c0-0.2,1.4-2.5,3-5.2c4-6.5,4.3-6.5,8.8,0.6c4.3,6.9,11.5,20.9,14.4,28.5c6,15.2,9.1,29.9,9.6,45   c0.3,10.1-0.4,15.4-3.2,23.8C1338,3742,1334.9,3749.2,1335.2,3746.9z"></path>
	<path d="M1347.4,3701.2c-0.1-0.5-0.4-2.4-0.6-4.1c-0.4-3.6-0.7-4.3-1.4-3.4c-0.5,0.9-0.6,0.7-2-6.2   c-0.6-2.9-1.9-7.9-2.9-11.1l-1.8-5.8l1-2.7l1-2.7l-2.3-6.6c-1.3-3.7-2.7-7.7-3.3-9l-1-2.4l-1.2,2.8c-0.6,1.5-1.4,2.7-1.5,2.7   c-0.2,0-1.4-1.9-2.7-4.3c-1.3-2.4-3.7-6.7-5.4-9.6c-1.7-2.9-3.2-5.4-3.4-5.6c-0.1-0.3,2.1-0.4,5-0.4h5.2l2.4,5.1   c8.9,19,14.4,39.5,15.3,57.1C1348.2,3701.5,1348.1,3703.6,1347.4,3701.2z"></path>
	<path d="M1346.3,3665.8c-1.2-5.2-4-15.6-6.1-22.6c-1.5-4.7-1.7-5.1-2.3-4c-0.6,1.1-0.7,0.9-2.3-2.3   c-0.9-1.9-1.7-3.6-1.7-3.7c0-0.2,1.2-0.3,2.6-0.3c2.9,0,2.6-0.6,5.3,8.2c2.5,8,6.4,28,5.7,28.7   C1347.4,3670,1346.9,3668.2,1346.3,3665.8z"></path>
	<path d="M1174.9,3640.7c-0.7-0.4-4.8-2-9.2-3.7c-4.3-1.6-8.3-3.2-8.9-3.5c-0.6-0.3,3.8-0.5,11.7-0.5l12.7-0.1l-1.9,3.6   C1176.6,3641.3,1176.5,3641.5,1174.9,3640.7z"></path>
	<path d="M1228.1,3636.2l-4.1-3.1h6.6h6.6l-2.1,3.1c-1.2,1.7-2.3,3.1-2.5,3.1   C1232.3,3639.2,1230.4,3637.8,1228.1,3636.2z"></path>
</g>
</svg>
  

  
                </div>
      <h2 class="teaser__title">United Airlines Fuels Seamless HR Workflows With DocuSign eSignature for ServiceNow</h2>
    <div class="teaser__meta">
            <div class="teaser__readmore">Read the story</div>  </div>
    <div class="teaser__arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none" >
      <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#arrow"></use>
    </svg>
  </div>
</a>
    </li>
      <li class="content-strip__item">
      
<a href="https://www.docusign.com/customer-stories/primerica-partners-with-docusign-to-deliver-high-tech-high-touch-financial-services" class="teaser teaser--dark teaser--compact teaser--image  teaser--logo teaser--color-underlay teaser--color-underlay--blue teaser--text-color-invert">
  <div class="teaser__image">                <img srcset="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2023-09/Primerica-CustomerStories-Hero.png?h=6e754b88&amp;itok=KDVOPelm 325w, /sites/d8/files/styles/hero_m_469x652_/public/customer_story_hero_image/2023-09/Primerica-CustomerStories-Hero.png?h=6e754b88&amp;itok=EzgXKfjk 469w, /sites/d8/files/styles/hero_xs_556x772_/public/customer_story_hero_image/2023-09/Primerica-CustomerStories-Hero.png?h=6e754b88&amp;itok=NO0keQNV 556w, /sites/d8/files/styles/hero_l_652x900_/public/customer_story_hero_image/2023-09/Primerica-CustomerStories-Hero.png?h=6e754b88&amp;itok=RmXA58VL 652w" sizes="(min-width: 103rem) 810px, (min-width: 48rem) 49vw, 99vw" src="/sites/d8/files/styles/hero_s_325x452_/public/customer_story_hero_image/2023-09/Primerica-CustomerStories-Hero.png?h=6e754b88&amp;itok=KDVOPelm" alt="" />



  

  </div>      <div class="teaser__logo">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 144 144" style="enable-background:new 0 0 144 144;" xml:space="preserve"><title>Primerica Logo</title>
<style type="text/css">
	.st0{fill:none;}
</style>
<g>
	<g>
		<path class="st0" d="M38.8,65.6h6.3c2.8,0,4.2,1.5,4.2,3.6c0,2.2-1.4,3.6-4.2,3.6h-3.9v5.4h-2.3V65.6z M41.2,70.7h4.1    c1.2,0,1.6-0.8,1.6-1.4c0-0.6-0.4-1.4-1.6-1.4h-4.1V70.7z"></path>
		<path class="st0" d="M51.5,65.6h6.3c2.8,0,4.2,1.5,4.2,3.6c0,1.7-0.8,3.2-3.2,3.6l3.4,5.4h-2.8l-3.2-5.4h-2.3v5.4h-2.3V65.6z     M53.8,70.7H58c1.2,0,1.6-0.8,1.6-1.4c0-0.6-0.4-1.4-1.6-1.4h-4.1V70.7z"></path>
		<path class="st0" d="M64.4,65.6h2.3v12.6h-2.3V65.6z"></path>
		<path class="st0" d="M84.3,65.6h9.6l0,2.2h-7.3v2.8h5.1v2.2h-5.1v3.2h7.3l0,2.2h-9.6V65.6z"></path>
		<path class="st0" d="M96.6,65.6h6.3c2.8,0,4.2,1.5,4.2,3.6c0,1.7-0.8,3.2-3.2,3.6l3.4,5.4h-2.8l-3.2-5.4h-2.3v5.4h-2.3V65.6z     M98.9,70.7h4.1c1.2,0,1.6-0.8,1.6-1.4c0-0.6-0.4-1.4-1.6-1.4h-4.1V70.7z"></path>
		<path class="st0" d="M109.5,65.6h2.3v12.6h-2.3V65.6z"></path>
		<path class="st0" d="M126.3,75.9c-1.4,1.8-3.4,2.6-5.4,2.6c-3.8,0-6.8-2.9-6.8-6.6c0-3.7,3-6.6,6.8-6.6c2,0,4,0.8,5.4,2.6    l-1.9,1.5c-0.8-1.2-2-1.8-3.5-1.8c-2.3,0-4.3,1.9-4.3,4.4c0,2.5,2.1,4.4,4.3,4.4c1.4,0,2.7-0.7,3.5-1.7L126.3,75.9L126.3,75.9z"></path>
		<path class="st0" d="M132.4,65.6h1.4l5.4,12.6h-2.5l-1-2.4h-5.3l-1,2.4h-2.5L132.4,65.6L132.4,65.6z M134.8,73.8l-1.8-4.5    l-1.9,4.5H134.8z"></path>
		<path class="st0" d="M69.9,65.6h1.6l4,6.5l4.2-6.5h1.4l0,12.6h-2.3v-7.7l-3.3,5.3l-3.3-5.4l0,7.9h-2.3L69.9,65.6L69.9,65.6z"></path>
		<path class="st0" d="M21.7,57.7c6,0,10.8,4.8,10.8,10.8c0,3.3-1.5,6.3-3.9,8.3l0,0l0,0V77c-0.7,5.3-5.2,9.4-10.7,9.4h-0.1    c-5.4,0-9.9-4-10.6-9.2v-0.1l0,0l-0.1,0c-2.6-2-4.3-5.1-4.3-8.6c0-6,4.8-10.8,10.8-10.8c1.5,0,2.8,0.3,4.1,0.8l0,0h0l0.1,0    C19,57.9,20.3,57.7,21.7,57.7 M17.8,84.6L17.8,84.6H18c3.8-0.1,7.1-2.6,8.3-6l0.1-0.4l-0.4,0.2c-1.1,0.5-2.2,0.8-3.4,0.9h-0.1h0    l0,0.1c-1.1,1.4-2.8,2.3-4.7,2.3c-3.3,0-6.1-2.7-6.1-6.1c0-0.7,0.1-1.3,0.3-2l0-0.1v0l0-0.1c-0.5-1-0.9-2.2-1.1-3.4l-0.1-0.4    L10.6,70c-1.2,1.5-1.9,3.5-1.9,5.6c0,4.9,3.9,8.9,8.8,9.1L17.8,84.6L17.8,84.6L17.8,84.6z M17.6,78.5L17.6,78.5L17.6,78.5h-0.1    c-0.5,0.2-1.2,0.4-1.7,0.5l-0.4,0.1c0.7,0.5,1.6,0.8,2.5,0.8c0.8,0,1.6-0.2,2.2-0.6l-0.7-0.2l-0.1,0    C18.5,78.9,18.2,78.8,17.6,78.5 M21.8,77.6h0.1c4.9-0.1,8.8-4.1,8.8-9.1c0-5-4.1-9.1-9.1-9.1c-0.5,0-0.9,0-1.4,0.1l-0.4,0.1    l0.3,0.3c0.9,0.7,1.7,1.6,2.4,2.6l0,0l0,0l0.1,0c2.8,0.5,5,3,5,6v0c0,3-2.2,5.6-5.1,6h-0.1l0,0l0,0.1c-0.7,1-1.5,1.8-2.5,2.5    l-0.3,0.3l0.4,0.1c0.4,0.1,0.9,0.1,1.4,0.1h0.1H21.8z M13.6,74.6c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.7,0.1,1.3,0.4,1.8l0,0.1l0,0H14    c3.1-0.2,5.7-1.8,7.2-4.3l0-0.1l0,0L21.3,73c-0.6-0.8-1.3-1.3-2.3-1.6l-0.1,0l0,0l-0.1,0.1c-1,1.7-2.9,2.9-5.1,3h-0.1h0L13.6,74.6    L13.6,74.6z M4.5,68.4c0,2.3,0.9,4.4,2.2,6L7,74.7l0-0.4C7.2,73.1,7.5,72,8,71l0,0l0,0l0-0.1c-0.3-0.7-0.5-1.5-0.5-2.4    c0-3.3,2.7-6.1,6.1-6.1c1.9,0,3.7,0.9,4.8,2.3l0,0l0,0h0.1c1.2,0.1,2.3,0.3,3.4,0.8l0.4,0.2l-0.1-0.4c-1.3-3.5-4.6-5.9-8.5-5.9    C8.5,59.4,4.5,63.4,4.5,68.4L4.5,68.4z M16.4,71.5c-0.5-0.9-0.8-1.9-0.8-3c0-1.1,0.3-2.2,0.9-3.1l0.1-0.1l0,0l-0.1-0.1    c-0.7-0.6-1.6-1-2.6-1.1h-0.1l0,0l-0.1,0.1c-0.7,1.3-1.1,2.7-1.1,4.3c0,1.5,0.4,2.9,1,4.1l0,0l0,0.1l0,0h0.1c1-0.1,1.9-0.4,2.6-1    l0.1-0.1l0,0L16.4,71.5L16.4,71.5 M23,72.5l0.1,0.1l0,0l0.1-0.1c0.9-0.3,1.6-1,2.1-1.8l0-0.1l0,0l-0.1-0.1c0,0,0,0,0,0l0,0l0,0    l-0.1-0.1c-1.6-2.3-4.3-3.8-7.3-3.9h-0.1h0l-0.1,0.1c-0.3,0.6-0.5,1.2-0.5,1.9c0,0.3,0,0.6,0.1,0.8l0,0.1v0h0.2h0.2    C20,69.5,22,70.7,23,72.5L23,72.5z M9.2,68.4c0,0.1,0,0.3,0,0.4l0.4-0.5c0.4-0.5,0.7-0.8,1.2-1.2l0,0l0,0v-0.1    c0.1-0.7,0.2-1.1,0.4-1.8l0.2-0.7C10.2,65.4,9.2,66.8,9.2,68.4L9.2,68.4z M24.3,66.9c0.5,0.3,0.9,0.8,1.3,1.2l0,0.1l0.3,0.3v0    c0-1.6-0.9-3.1-2.3-3.8l0.1,0.3l0,0.1l0,0.1c0.2,0.5,0.3,1.1,0.4,1.6L24.3,66.9L24.3,66.9L24.3,66.9z"></path>
	</g>
	<path class="st0" d="M13.6,74.6c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.7,0.1,1.3,0.4,1.8l0,0.1l0,0H14c3.1-0.2,5.7-1.8,7.2-4.3l0-0.1l0,0   L21.3,73c-0.6-0.8-1.3-1.3-2.3-1.6l-0.1,0l0,0l-0.1,0.1c-1,1.7-2.9,2.9-5.1,3h-0.1h0L13.6,74.6L13.6,74.6z M4.5,68.4   c0,2.3,0.9,4.4,2.2,6L7,74.7l0-0.4C7.2,73.1,7.5,72,8,71l0,0l0,0l0-0.1c-0.3-0.7-0.5-1.5-0.5-2.4c0-3.3,2.7-6.1,6.1-6.1   c1.9,0,3.7,0.9,4.8,2.3l0,0l0,0h0.1c1.2,0.1,2.3,0.3,3.4,0.8l0.4,0.2l-0.1-0.4c-1.3-3.5-4.6-5.9-8.5-5.9   C8.5,59.4,4.5,63.4,4.5,68.4L4.5,68.4z"></path>
	<path class="st0" d="M21.8,77.6h0.1c4.9-0.1,8.8-4.1,8.8-9.1c0-5-4.1-9.1-9.1-9.1c-0.5,0-0.9,0-1.4,0.1l-0.4,0.1l0.3,0.3   c0.9,0.7,1.7,1.6,2.4,2.6l0,0l0,0l0.1,0c2.8,0.5,5,3,5,6v0c0,3-2.2,5.6-5.1,6h-0.1l0,0l0,0.1c-0.7,1-1.5,1.8-2.5,2.5l-0.3,0.3   l0.4,0.1c0.4,0.1,0.9,0.1,1.4,0.1h0.1H21.8z M16.4,71.5c-0.5-0.9-0.8-1.9-0.8-3c0-1.1,0.3-2.2,0.9-3.1l0.1-0.1l0,0l-0.1-0.1   c-0.7-0.6-1.6-1-2.6-1.1h-0.1l0,0l-0.1,0.1c-0.7,1.3-1.1,2.7-1.1,4.3c0,1.5,0.4,2.9,1,4.1l0,0l0,0.1l0,0h0.1c1-0.1,1.9-0.4,2.6-1   l0.1-0.1l0,0L16.4,71.5L16.4,71.5"></path>
	<path class="st0" d="M17.8,84.6L17.8,84.6H18c3.8-0.1,7.1-2.6,8.3-6l0.1-0.4l-0.4,0.2c-1.1,0.5-2.2,0.8-3.4,0.9h-0.1h0l0,0.1   c-1.1,1.4-2.8,2.3-4.7,2.3c-3.3,0-6.1-2.7-6.1-6.1c0-0.7,0.1-1.3,0.3-2l0-0.1v0l0-0.1c-0.5-1-0.9-2.2-1.1-3.4l-0.1-0.4L10.6,70   c-1.2,1.5-1.9,3.5-1.9,5.6c0,4.9,3.9,8.9,8.8,9.1L17.8,84.6L17.8,84.6L17.8,84.6z M23,72.5l0.1,0.1l0,0l0.1-0.1   c0.9-0.3,1.6-1,2.1-1.8l0-0.1l0,0l-0.1-0.1c0,0,0,0,0,0l0,0l0,0l-0.1-0.1c-1.6-2.3-4.3-3.8-7.3-3.9h-0.1h0l-0.1,0.1   c-0.3,0.6-0.5,1.2-0.5,1.9c0,0.3,0,0.6,0.1,0.8l0,0.1v0h0.2h0.2C20,69.5,22,70.7,23,72.5L23,72.5z"></path>
	<path class="st0" d="M139.6,65.5c0.9,0,1.6,0.7,1.6,1.6s-0.7,1.6-1.7,1.6c-0.9,0-1.7-0.7-1.7-1.6C137.9,66.2,138.7,65.5,139.6,65.5   L139.6,65.5z M139.6,65.8c-0.7,0-1.2,0.6-1.2,1.3c0,0.7,0.5,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3S140.3,65.8,139.6,65.8L139.6,65.8   L139.6,65.8z M139.3,67.9H139v-1.6c0.1,0,0.4-0.1,0.6-0.1c0.3,0,0.4,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0,0.2-0.1,0.3-0.3,0.4v0   c0.2,0.1,0.3,0.2,0.3,0.4c0,0.2,0.1,0.3,0.1,0.4H140c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2-0.1-0.3-0.3-0.3h-0.2L139.3,67.9L139.3,67.9z    M139.3,67h0.2c0.2,0,0.4-0.1,0.4-0.2c0-0.2-0.1-0.3-0.3-0.3c-0.1,0-0.2,0-0.2,0L139.3,67L139.3,67z"></path>
</g>
</svg>
  

  
                </div>
      <h2 class="teaser__title">Primerica Partners with DocuSign to Deliver High-Tech, High-Touch Financial Services</h2>
    <div class="teaser__meta">
            <div class="teaser__readmore">Read the story</div>  </div>
    <div class="teaser__arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none" >
      <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#arrow"></use>
    </svg>
  </div>
</a>
    </li>
  </ul>
    
      <nav class="secondary-navigation secondary-navigation--with-fancy-scroll">
    <span class="secondary-navigation__arrow secondary-navigation__arrow--left" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13">
        <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#arrow"></use>
      </svg>
    </span>
    <ul class="secondary-navigation__top-level">
              <li class="secondary-navigation__link">
                    <a href="https://www.docusign.com/customer-stories" hreflang="en">All</a>
                  </li>
              <li class="secondary-navigation__link secondary-navigation__link--dropdown">
                    <a href="javascript:;" class="secondary-navigation__dropdown-text" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <svg class="secondary-navigation__down-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 7 11" title="Arrow icon" aria-hidden="true">
              <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#pointer"></use>
            </svg>
            
<div class="link-list link-list--navigation-large-text">
      <h4  class="link-list__heading">Browse By</h4>
      <ul class="link-list__list">
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/electronic-signature">Electronic Signature</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/clm">Contract Lifecycle Management</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/identify">ID Verification</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/gen">Document Generation</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/click">Clickwrap</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/guided-forms">Guided Forms</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/products/notary">Electronic Notarization</a>
              </li>
      </ul>
</div>
                  </li>
              <li class="secondary-navigation__link secondary-navigation__link--dropdown">
                    <a href="javascript:;" class="secondary-navigation__dropdown-text" aria-haspopup="true" aria-expanded="false">
              Department
            </a>
            <svg class="secondary-navigation__down-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 7 11" title="Arrow icon" aria-hidden="true">
              <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#pointer"></use>
            </svg>
            
<div class="link-list link-list--navigation-large-text">
      <h4  class="link-list__heading">Browse By</h4>
      <ul class="link-list__list">
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/finance">Finance</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/hr">HR</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/it">IT</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/legal">Legal</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/marketing">Marketing</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/procurement">Procurement</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/department/sales">Sales</a>
              </li>
      </ul>
</div>
                  </li>
              <li class="secondary-navigation__link secondary-navigation__link--dropdown">
                    <a href="javascript:;" class="secondary-navigation__dropdown-text" aria-haspopup="true" aria-expanded="false">
              Industry
            </a>
            <svg class="secondary-navigation__down-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 7 11" title="Arrow icon" aria-hidden="true">
              <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#pointer"></use>
            </svg>
            
<div class="link-list link-list--navigation-large-text">
      <h4  class="link-list__heading">Browse By</h4>
      <ul class="link-list__list">
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/education">Education</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/financial-services">Financial Services</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/life-sciences">Life Sciences</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/real-estate">Real Estate</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/healthcare">Healthcare</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/technology">Technology</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/retail">Retail</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/government">Government</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/communications">Communications</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/higher-education">Higher Education</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/insurance">Insurance</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/other">Other</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/legal-services">Legal Services</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/manufacturing">Manufacturing</a>
              </li>
          <li class="link-list__list-item">
                  <a href="https://www.docusign.com/customer-stories/industry/business-services">Business Services</a>
              </li>
      </ul>
</div>
                  </li>
          </ul>
    <span class="secondary-navigation__arrow secondary-navigation__arrow--right" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13">
        <use xlink:href="/themes/custom/cubic/build/asset/sprite.svg#arrow"></use>
      </svg>
    </span>
  </nav>

          
<div class="featured-video">
  <div class="featured-video__element">
    <iframe src="https://players.brightcove.net/6118377982001/default_default/index.html?videoId=6329354846112" loading="lazy"></iframe>
  </div>

  <div class="featured-video__content">
    <p class="featured-video__eyebrow">Customer Video</p>
  