!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=545)}({545:function(e,t){!function(e){"use strict";e(document).ready((function(){const t=e(".wp-block-coblocks-events[data-per-page]");t&&t.each((function(){e(this).slick({infinite:!1,rows:this.dataset.perPage,waitForAnimate:!1})}))}))}(jQuery)}});}const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",g=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:50,error_sampling_rate:50,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},h="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(h);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function m(e,t){if(!e)throw new Error(h);p[e]=(0,i.D)(t,g());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(h);var r=v(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},w={};function A(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!w[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return w[e]}function _(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");w[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=w[e])}const x=(0,n.mF)().o;var E=r(385),D=r(6818);const k={buildEnv:D.Re,customTransaction:void 0,disabled:!1,distMethod:D.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(E._A?.performance?.timeOrigin||E._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+E._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof E._A.XMLHttpRequest?.prototype?.addEventListener,version:D.q4,denyList:void 0},j={};function S(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!j[e])throw new Error("Runtime for ".concat(e," was never set"));return j[e]}function R(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");j[e]=(0,i.D)(t,k);const r=(0,n.ek)(e);r&&(r.runtime=j[e])}function T(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),a=0===Object.keys(r).length?e:r;for(let o in a)if(void 0!==e[o])try{Array.isArray(e[o])&&Array.isArray(t[o])?r[o]=Array.from(new Set([...e[o],...t[o]])):"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=i(e[o],t[o]):r[o]=e[o]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>a,q4:()=>n});const n="1.250.0",i="PROD",a="CDN"},385:(e,t,r)=>{"use strict";r.d(t,{Nk:()=>d,Tt:()=>s,_A:()=>a,cv:()=>l,iS:()=>o,il:()=>n,ux:()=>c,v6:()=>i,w1:()=>u});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),o=(a?.document?.readyState,Boolean("hidden"===a?.document?.visibilityState)),s=(a?.location,/iPad|iPhone|iPod/.test(a.navigator?.userAgent)),c=s&&"undefined"==typeof SharedWorker,u=((()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);Array.isArray(e)&&e.length>=2&&e[1]})(),Boolean(n&&window.document.documentMode)),d=!!a.navigator?.sendBeacon,l=Math.floor(a?.performance?.timeOrigin||a?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var n=r(50);const i={agentIdentifier:"",ee:void 0};class a{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),a=r(4322),o=r(3325);const s={};function c(e,t){const r={staged:!1,priority:o.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(u(e),!e||!s[e].get(t))return o(t);s[e].get(t).staged=!0;const r=[...s[e]];function o(t){const r=e?n.ee.get(e):n.ee,o=a.X.handlers;if(r.backlog&&o){var s=r.backlog[t],c=o[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete o[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),o(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],a=e[3],o=e[2];i.apply(a,o)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),a=r(234);class o{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,a.OP)(r).isolatedBacklog}catch(e){}var g={on:h,addEventListener:h,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,a){!1!==a&&(a=!0);if(u.aborted&&!i)return;t&&a&&t.emit(e,r,n);for(var o=p(n),c=v(e),d=c.length,l=0;l<d;l++)c[l].apply(o,r);var f=b()[s[e]];f&&f.push([g,e,r,o]);return o},get:m,listeners:v,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",g.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return g;function p(e){return e&&e instanceof o?e:e?(0,i.X)(e,c,(()=>new o(c))):new o(c)}function h(e,t){n[e]=v(e).concat(t)}function v(e){return n[e]||[]}function m(t){return d[t]=d[t]||e(g,t)}function b(){return g.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,u.backlog={}}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,a){a?(a.buffer([e],i),a.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>a});var n=r(5546);a.on=o;var i=a.handlers={};function a(e,t,r,a){o(a||n.E,i,e,t,r)}function o(e,t,r,i,a){a||(a="feature"),e||(e=n.E);var o=t[a]=t[a]||{};(o[r]=o[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>o});var n=r(385);let i=!1,a=!1;try{const e={get passive(){return i=!0,!1},get signal(){return a=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function o(e,t){return i||a?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,o(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,o(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Rl:()=>o,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function a(e,t){return e?15&e[t]:16*Math.random()|0}function o(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?a(t,r++).toString(16):"y"===e?(3&a()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const o=[];for(var s=0;s<e;s++)o.push(a(r,i++).toString(16));return o.join("")}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>a,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>o});const n="NRBA",i=144e5,a=18e5,o={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),a=r(3325),o=r(385);const s="newrelic";const c={stn:[a.D.sessionTrace],err:[a.D.jserrors,a.D.metrics],ins:[a.D.pageAction],spa:[a.D.spa],sr:[a.D.sessionReplay,a.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{o._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>a});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function a(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>o,b2:()=>a});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function a(e,t){if(i())return e();(0,n.bP)("load",e,t)}function o(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>a,ek:()=>u,fP:()=>o,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const a={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function o(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=o();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=o();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=o();return t.initializedAgents?.[e]}function d(e,t){o()[e]=t}function l(){return function(){let e=o();const t=e.info||{};e.info={beacon:a.beacon,errorBeacon:a.errorBeacon,...t}}(),function(){let e=o();const t=e.init||{};e.init={...t}}(),s(),function(){let e=o();const t=e.loader_config||{};e.loader_config={...t}}(),o()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>a,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>o});const n=r(3325).D.metrics,i="sm",a="cm",o="storeSupportabilityMetrics",s="storeEventMetrics"},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),a=r(5546),o=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),g=r(8632);function p(){const e=(0,g.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let a=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&a.push(e.api[t](...n))})),a.length>1?a:a[0]}(t,...n)}}))}var h=r(2825);const v=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let m=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:w,info:A,loader_config:_,runtime:x={loaderType:b},exposed:E=!0}=t;const D=(0,g.gG)();A||(w=D.init,A=D.info,_=D.loader_config),(0,i.Dg)(e.agentIdentifier,w||{}),(0,i.GE)(e.agentIdentifier,_||{}),A.jsAttributes??={},d.v6&&(A.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,A);const k=(0,i.P_)(e.agentIdentifier),j=[A.beacon,A.errorBeacon];m||(k.proxy.assets&&(v(k.proxy.assets),j.push(k.proxy.assets)),k.proxy.beacon&&j.push(k.proxy.beacon),p(),(0,g.EZ)("activatedFeatures",h.T)),x.denyList=[...k.ajax.deny_list||[],...k.ajax.block_internal?j:[]],(0,i.sU)(e.agentIdentifier,x),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const g={};var p=o.ee.get(e),h=p.get("tracer"),v="api-",m=v+"ixn-";function b(t,r,n,a){const o=(0,i.C5)(e);return null===r?delete o.jsAttributes[t]:(0,i.CX)(e,{...o,jsAttributes:{...o.jsAttributes,[t]:r}}),A(v,n,!0,a||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{g[e]=A(v,e,!0,"api")})),g.addPageAction=A(v,"addPageAction",!0,n.D.pageAction),g.setCurrentRouteName=A(v,"routeName",!0,n.D.spa),g.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,A(v,"setPageViewName",!0)()},g.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},g.start=e=>{try{const t=e?"defined":"undefined";(0,a.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},g.recordReplay=function(){(0,a.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,a.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},g.pauseReplay=function(){(0,a.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,a.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},g.interaction=function(){return(new y).get()};var w=y.prototype={createTracer:function(e,t){var r={},i=this,o="function"==typeof t;return(0,a.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,a.p)(m+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(h.emit((o?"":"no-")+"fn-start",[(0,s.z)(),i,o],r),o)try{return t.apply(this,arguments)}catch(e){throw h.emit("fn-err",[arguments,this,e],r),e}finally{h.emit("fn-end",[(0,s.z)()],r)}}}};function A(e,t,r,i){return function(){return(0,a.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,a.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function _(){r.e(75).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{w[e]=A(m,e,void 0,n.D.spa)})),g.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,a.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,a.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>_()),!0):_(),g}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=E),m=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"nr-rum-1.250.0.min.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.250.0.PROD:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}if(!s){c=!0;var f={75:"sha512-2/f4ks7UUkz/V5qC88wpBuGtLglDVUbydMJpZeUMyA/1ChnpO/Q00ZY/7dABphVkZ8zpnV6zFxxikFwJCMiQRg=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[o]&&(s.integrity=f[o])}e[r]=[n];var g=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={50:0,832:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,s,c]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self["webpackChunk:NRBA-1.250.0.PROD"]=self["webpackChunk:NRBA-1.250.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(e){return"Call to agent api ".concat(e," failed. The agent is not currently initialized.")}addPageAction(t,r){(0,e.Z)(this.#e("addPageAction"))}setPageViewName(t,r){(0,e.Z)(this.#e("setPageViewName"))}setCustomAttribute(t,r,n){(0,e.Z)(this.#e("setCustomAttribute"))}noticeError(t,r){(0,e.Z)(this.#e("noticeError"))}setUserId(t){(0,e.Z)(this.#e("setUserId"))}setApplicationVersion(t){(0,e.Z)(this.#e("setApplicationVersion"))}setErrorHandler(t){(0,e.Z)(this.#e("setErrorHandler"))}finished(t){(0,e.Z)(this.#e("finished"))}addRelease(t,r){(0,e.Z)(this.#e("addRelease"))}start(t){(0,e.Z)(this.#e("start"))}recordReplay(){(0,e.Z)(this.#e("recordReplay"))}pauseReplay(){(0,e.Z)(this.#e("pauseReplay"))}}var r=i(3325),n=i(234);const a=Object.values(r.D);function o(e){const t={};return a.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let a;this.onAggregateImported=new Promise((e=>{a=e}));const o=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(75).then(i.bind(i,957));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void a(!1);const{lazyFeatureLoader:e}=await i.e(75).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),a(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),a(!1)}};l.il?(0,d.b2)((()=>o()),!0):o()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var g=i(7633);class p extends f{static featureName=g.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,g.t,r),this.importAggregator()}}var h=i(1117),v=i(1284);class m extends h.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var a=this.getBucket(e,t,r,i);return a.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,v.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,a.metrics),a}merge(e,t,r,n,i){var a=this.getBucket(e,t,n,i);if(a.metrics){var o=a.metrics;o.count+=r.count,(0,v.D)(r,(function(e,t){if("count"!==e){var n=o[e],i=r[e];i&&!i.c?o[e]=b(i.t,n):o[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,o[e])}}))}else a.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=w(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function w(e){return"object"!=typeof e?[]:(0,v.D)(e,A)}function A(e,t){return t}var _=i(8632),x=i(4402),E=i(4351);var D=i(5546),k=i(7956),j=i(3239),S=i(7894),R=i(9251);class T extends f{static featureName=R.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,R.t,r),l.il&&((0,k.N)((()=>(0,D.p)("docHidden",[(0,S.z)()],void 0,R.t,this.ee)),!0),(0,j.bP)("pagehide",(()=>(0,D.p)("winPagehide",[(0,S.z)()],void 0,R.t,this.ee))),this.importAggregator())}}var I=i(3081);class P extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,x.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new m({agentIdentifier:this.agentIdentifier}),this.features={},(0,_.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=o(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,_.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[p,T,P],loaderType:"lite"})})()})();</script>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
				
		<script type="text/javascript" id="cmp-inserter">

			(function() {
				window.performance.mark('cmpstub start');
				const cmpUrl         = 'https://cdn.cookielaw.org/consent/cmp.stub.js';
				const cmpScript      = document.createElement('script');

				cmpScript.async = true;
				cmpScript.type = 'text/javascript';
				cmpScript.src  = cmpUrl;
				cmpScript.setAttribute( 'charset', 'UTF-8' );
				cmpScript.setAttribute('id', 'cmp-stub');

				const cmpNode = document.getElementById('cmp-inserter');
				cmpNode.parentNode.insertBefore(cmpScript, cmpNode.nextSibling);
				window.performance.mark('cmpstub end');
			})();

		</script>

		
		<script type="text/javascript">

			/**
	 		 * OptanonWrapper callback function. We use the OptanonWrapper function to listen for a user event and determine script behavior based on the user event.
	 		 *
	 		 * @return void
	 		*/
			function OptanonWrapper() {

				const otherRegionApplies   = ( localStorage.getItem( 'otherRegion' ) !== null ) ? localStorage.getItem( 'otherRegion' ) : false;
				const ccpaApplies          = ( localStorage.getItem( 'ccpaApplies' ) !== null ) ? localStorage.getItem( 'ccpaApplies' ) : false;
				const OTgeolocation        = OneTrust.getGeolocationData();

				// We use a block to be able to break from this in order to gain performance.
				regionFunctionBlock: {
					if ( otherRegionApplies === 'true' ) {
						// Performance. No need to execute other Javascript if the user is not GDPR/CCPA on subsequent visits.
						break regionFunctionBlock;
					} else if ( ( ccpaApplies === 'true' ) || ( ( OTgeolocation.country === 'US' ) && ( OTgeolocation.state === 'CA' ) ) ) {
						// User is within CCPA region.
						ccpaHelper();
					} else {
						/* User may be visiting for the first time and we now 
						* need to know if this user is from GDPR or other region.
						*/
						gdprHelper();
					}
				}

				let OTConsentCookieInit = OneTrustGetCookie( 'OptanonConsent' );
				let OTConsentGroups     = OneTrustGetGroups ( OTConsentCookieInit );
				OneTrustGetInitialGroups();
				OneTrustSetConsentValues( OTConsentGroups );

				/**
				 * Sets a localStorageItem based on its updated value.
				 *
				*/
				function setLocalStorageItem( key, value ) {
					localStorage.setItem( key, value);
				}

				/**
				 * Checks presence of query parameter within the URL
				 * Returns true/false depending if it has the word 'regionLog'
				 * and if it's equal to 1.
				*/
				function regionLogger() {
					const queryString  = window.location.search;
					const searchParams = new URLSearchParams( queryString );
					return ( ( searchParams.has( 'regionLog' ) ) && ( ( searchParams.get('regionLog') === '1' ) ) );
				}

				/**
				 * Inserts the GDPR stub script.
				 * Then it checks if the user is from a GDPR specific region
				 * using the __tcfapi function which in turn, uses the
				 * getTCData command, which is to retrieve end-user consent 
				 * data for IAB purposes, vendors, legitimate interest, publisher 
				 * restrictions and more. Calls the gdprUpdateStorage function which is
				 * what sets the localStorage item.
				*/
				function gdprHelper() {
					const tcfApplies  = ( localStorage.getItem( 'gdprApplies' ) !== null ) ? localStorage.getItem( 'gdprApplies' ) : false;
					const gdprLogger = regionLogger();

					if ( gdprLogger ) {
						console.log('gdprHelper helper running');
					}

					// User is a GDPR visitor.
					if (  ( tcfApplies === true ) || ( typeof __tcfapi === 'function' ) ) {

						// This will give us a response that the user is within GDPR.
						__tcfapi('ping', 2, (pingReturn) => {

							const tcfScriptID = 'tfc-stub';

							// We run this only once.
							if( ( document.getElementById( tcfScriptID ) === null ) && ( true === pingReturn.gdprApplies ) ) {
								const tcfURL         = 'https://cdn.cookielaw.org/consent/tcf.stub.js';
								const tcfScript      = document.createElement('script');

								tcfScript.async = true;
								tcfScript.type  = 'text/javascript';
								tcfScript.src   = tcfURL;
								tcfScript.setAttribute( 'charset', 'UTF-8' );
								tcfScript.setAttribute('id', tcfScriptID);

								const tfcNode = document.getElementById('cmp-stub');
								tfcNode.parentNode.insertBefore(tcfScript, tfcNode.nextSibling);
							}

						});

						gdprUpdateStorage();

					} else {
						// User is not GDPR and not CCPA. So it is from outside. We set a localStorage item for performance.
						const otherRegionApplies   = ( localStorage.getItem( 'otherRegion' ) !== null ) ? localStorage.getItem( 'otherRegion' ) : false;
						if ( otherRegionApplies === false ) {
							setLocalStorageItem('otherRegion', true);
						}
					}
				}

				/**
				 * Updates the storage for GDPR only. It checks that the string has changed and if so, it updates the localStorage
				 * for GDPR.
				*/
				function gdprUpdateStorage() {
					const gdprLogger = regionLogger();

					__tcfapi( 'getTCData' , 2, ( tcData, success ) => {

						if ( success ) {
							const gdprString = tcData.tcString; 
							const gdprCurrentString = localStorage.getItem( 'gdprString' );

							if( gdprLogger ) {
								console.log('GDPR applies and is set to:' + gdprString);
								console.log('GDPRData:');
								console.log(tcData);
							}

							if ( gdprString !== gdprCurrentString ) {
								
								if( gdprLogger ) {
									console.log('GDPR Consent will change on refresh' );
									console.log('Old Value: ' + gdprCurrentString );
									console.log('New Value: ' + gdprString );
								}
								setLocalStorageItem('gdprApplies', true);
								setLocalStorageItem('gdprString', gdprString);

							}

						}

					});
				}

				/**
				 * Inserts the CCPA stub script.
				 * Then on page load, it checks if the user is from a CCPA specific region
				 * using the __uspapi function which in turn, uses the
				 * getUSPData command, which is to retrieve end-user consent 
				 * data for IAB purposes, vendors, legitimate interest, publisher 
				 * restrictions and more. Calls the ccpaUpdateStorage function which is
				 * what sets the localStorage item.
				*/
				function ccpaHelper() {
					console.log('Please run here');
					const ccpaLogger = regionLogger();

					if ( ccpaLogger ) {
						console.log('ccpaHelper helper running');
					}

					const ccpaScriptID = 'ccpa-stub';

					// We set once only
					if( ( document.getElementById( ccpaScriptID ) === null ) ) {
						const ccpaURL         = 'https://cdn.cookielaw.org/opt-out/otCCPAiab.js';
						const ccpaScript      = document.createElement('script');

						ccpaScript.async = true;
						ccpaScript.type = 'text/javascript';
						ccpaScript.src  = ccpaURL;
						ccpaScript.setAttribute('id', ccpaScriptID);
						ccpaScript.setAttribute('ccpa-opt-out-ids', 'C0001,C0002,C0003,C0004');
						ccpaScript.setAttribute( 'charset', 'UTF-8' );
						ccpaScript.setAttribute('ccpa-opt-out-geo', 'ca');
						ccpaScript.setAttribute('ccpa-opt-out-lspa', 'true');

						const ccpaNode = document.getElementById('cmp-stub');
						ccpaNode.parentNode.insertBefore(ccpaScript, ccpaNode.nextSibling);

					}

					// We update the local Storage Item for CCPA.
					window.addEventListener("load", function () {
						if ( typeof __uspapi === "function" ) {
							ccpaUpdateStorage();
						}
					});
				}

				/**
				 * Updates the storage for CCPA only. It checks that the string has changed and if so, it updates the localStorage
				 * for CCPA.
				*/
				function ccpaUpdateStorage() {

					const ccpaLogger = regionLogger();

					__uspapi( 'getUSPData' , 1, ( uspData, success ) => {

						if ( (success) && ( uspData.uspString !== '1---' ) ) {
							const ccpaString        = uspData.uspString;
							const ccpaCurrentString = localStorage.getItem( 'ccpaString' );

							if( ccpaLogger ) {
								console.log('USPA applies and is set to:' + ccpaString);
								console.log('USPA Data: ');
								console.log(uspData);
							}

							if ( ccpaString !== ccpaCurrentString ) {

								if( ccpaLogger ) {
									console.log('CCPA Consent will change on refresh' );
									console.log('Old Value: ' + ccpaCurrentString );
									console.log('New Value: ' + ccpaString );
								}

								setLocalStorageItem('ccpaApplies', true);
								setLocalStorageItem('ccpaString', ccpaString);

							}

						} 

					});

				}

				// Assign OnetrustActiveGroups to a custom initial variable so we can compare any changes to this data layer.
				function OneTrustGetInitialGroups() {
					OptanonWrapperCount = '';
					OTinitGroups =  OnetrustActiveGroups;  // See https://community.cookiepro.com/s/article/UUID-66bcaaf1-c7ca-5f32-6760-c75a1337c226?language=en_US
    			}

				// Returns the OptanonConsent cookie using its name as a parameter. Not parsed.
				function OneTrustGetCookie( name ) {
					const value = `; ${document.cookie}`;
  					const parts = value.split(`; ${name}=`);
					  
  					if (parts.length === 2) {
						return decodeURIComponent( parts.pop().split(';').shift() );
					}

					return;

				}

				// Parses the OptanonConsent Cookie values only. We are interested in the groups (which carry the consent). Returns an object with all the values of said cookie.
				function OneTrustGetConsentObject( OTcookie ) {
					let OTConsentObj = {};
					
					OTcookie.split('&').forEach( ( pair ) => {
  						if( pair !== '' ) {
    						let splitpair = pair.split('=');
    						let key = splitpair[0].charAt(0).toLowerCase() + splitpair[0].slice(1).split(' ').join('');
    						OTConsentObj[key] = splitpair[1];
  						}
					});
					
					return OTConsentObj;
					
				}

				// Grabs the OptanonConsent cookie, turns this into an object (using OneTrustGetConsentObject), targets the 'groups' value, turns it into an array, removes the first element of the array.
				function OneTrustGetGroups ( cookie ) {
					let OTConsentArr = [];
					let OTConsentGroupsStr = OneTrustGetConsentObject(cookie).groups;
					
					OTConsentArr = OTConsentGroupsStr.split(",");
					OTConsentArr.shift();

					return OTConsentArr;
					
				}

				// Sets the consent values based on the groups paramater, which is an array of consent categories that has been parsed from the OptanonConsent cookie.
				function OneTrustSetConsentValues( groups ){
					// Create a json list with the values ​​of each consent. These values ​​will be updated if the user starts to toggle consent.
					// We then create a local storage item to read these values in other parts of the theme that require it. Converted to json in case we need to keep adding items.
					let json_consent = {};
					json_consent[ "C0002" ] = groups[0].includes('2:1') ? true : false;
					json_consent[ "C0003" ] = groups[1].includes('3:1') ? true : false;
					json_consent[ "C0004" ] = groups[2].includes('4:1') ? true : false;
					let consent = JSON.stringify( json_consent );
					localStorage.setItem( 'consent_one_trust_bdc', consent );
    			}

				// OneTrust event listener that fires whenever someone confirms cosent preferences (banner).
				Optanon.OnConsentChanged( function() {
					OTinitGroups = OnetrustActiveGroups;
					let OTConsentCookieChanged = OneTrustGetCookie( 'OptanonConsent' );
					let OTConsentGroups        = OneTrustGetGroups ( OTConsentCookieChanged );
					OneTrustSetConsentValues( OTConsentGroups );
				});

			}

		</script>
		
		<script type="text/javascript" id="ot-inserter">

			(function() {
				const otUrl         = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
				const otScript      = document.createElement('script');

				otScript.async = true;
				otScript.type = 'text/javascript';
				otScript.src  = otUrl;
				otScript.setAttribute('id', 'onetrustSDK');
				otScript.setAttribute('charset', 'UTF-8');
				otScript.setAttribute('data-domain-script', '1744ffcc-f9fb-436a-97fd-6530afa75829');

				const otNode = document.getElementById('ot-inserter');
				otNode.parentNode.insertBefore(otScript, otNode.nextSibling);
			})();

		</script>

		<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>
	<style id="typekit-font-loading">
		@import url("https://p.typekit.net/p.css?s=1&k=ewj0jxz&ht=tk&f=12784.12094.12095&a=43290994&app=typekit&e=css");

		@font-face {
			font-family:"franklin-gothic-urw-cond";
			src:url("https://use.typekit.net/af/f4a030/000000000000000077359dfc/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/f4a030/000000000000000077359dfc/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/f4a030/000000000000000077359dfc/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3") format("opentype");
			font-display:swap;font-style:normal;font-weight:500;font-stretch:normal;
		}

		@font-face {
			font-family:"franklin-gothic-urw-cond";
			src:url("https://use.typekit.net/af/a2031c/0000000000000000000118b9/27/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/a2031c/0000000000000000000118b9/27/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/a2031c/0000000000000000000118b9/27/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3") format("opentype");
			font-display:swap;font-style:normal;font-weight:700;font-stretch:normal;
		}
	</style>
		<style id="cls-ad-css">
		[id="ad_lead1"] {
			min-height: 50px;
		}

		@media only screen and (min-width: 768px) {
			[id="ad_lead1"] {
				min-height: 90px;
			}
		}

		[id="ad_sectionfront1"],
		[id="ad_sectionfront2"],
		[id="ad_articlerail1"],
		[id="ad_articlerail2"] {
			position: relative;
		}

		[id="ad_sectionfront1"]::before,
		[id="ad_sectionfront2"]::before,
		[id="ad_articlerail1"]::before,
		[id="ad_articlerail2"]::before {
			content: "Advertisement";
			color: #68686d;
			display: block;
			font-family:"franklin-gothic-urw-cond";
			font-size: .875rem;
			font-weight: 700;
			padding-bottom: 0.25rem;
			text-align: center;
			text-transform: uppercase;
		}

		.m-real-estate-listing__content [id="ad_sectionfront1"]::before,
		.m-real-estate-listing__content [id="ad_sectionfront2"]::before,
		.m-real-estate-listing__content [id="ad_articlerail1"]::before,
		.m-real-estate-listing__content [id="ad_articlerail2"]::before {
			display: none;
		}

		@media only screen and (min-width: 768px) {

			.m-real-estate-listing__content [id="ad_sectionfront1"]::before,
			.m-real-estate-listing__content [id="ad_sectionfront2"]::before,
			.m-real-estate-listing__content [id="ad_articlerail1"]::before,
			.m-real-estate-listing__content [id="ad_articlerail2"]::before {
				display: block;
			}
		}

		.m-advert--600 {
			height: 600px;
		}

		.m-sports-bar {
			min-height: 59px;
		}

	</style>
	<link rel="preconnect" href="https://cdn.cookielaw.org" crossorigin /><link rel="preconnect" href="//c.amazon-adsystem.com" crossorigin /><link rel="preconnect" href="//ads.pubmatic.com" crossorigin /><link rel="preconnect" href="//securepubads.g.doubleclick.net" crossorigin /><link rel="preconnect" href="https://use.typekit.net" crossorigin /><link rel="preconnect" href="https://p.typekit.net" crossorigin /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" as="style" /><link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"><link rel="preload" as="font" href="https://use.typekit.net/af/f4a030/000000000000000077359dfa/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" /><link rel="preload" as="font" href="https://use.typekit.net/af/f4a030/000000000000000077359dfa/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" /><link rel="preload" as="font" href="https://use.typekit.net/af/a2031c/0000000000000000000118b9/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3" /><link rel="preload" as="font" href="https://use.typekit.net/af/a2031c/0000000000000000000118b9/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3" /><meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
		<script type="text/javascript" id="pwt-inserter">
		(function() {
			window.performance.mark('pwt start');
			var setProfile  = window.matchMedia('(min-width: 1024px)').matches;
			var reportingId = setProfile ? '2890' : '2891';
			var url         = '//ads.pubmatic.com/AdServer/js/pwt/159928/' + reportingId;
			var profileVersionId = '';
			var wtads = document.createElement('script');

			wtads.async = true;
			wtads.type = 'text/javascript';
			wtads.src = url + profileVersionId + '/pwt.js';

			var node = document.getElementById('pwt-inserter');
			node.parentNode.insertBefore(wtads, node.nextSibling);
			window.performance.mark('pwt end');
		})();
		</script>

	
	<script src="https://www.boston.com/wp-content/themes/bdc-2020/includes/gam/lazy-load-ad.min.js" type="text/javascript"></script>
	<script src="//securepubads.g.doubleclick.net/tag/js/gpt.js" type="text/javascript" id="securepubads.g" async></script>
	<script type="text/javascript">

		const script_pub    = document.getElementById( 'securepubads.g' );
		const apstag_script = document.createElement( "script" );
		apstag_script.setAttribute( "type", "text/javascript" );
		apstag_script.setAttribute( "src", "//c.amazon-adsystem.com/aax2/apstag.js" );
		apstag_script.setAttribute( "async", "" );
		script_pub.after( apstag_script );
	</script>
	
	<script id="boston-ads" type="text/javascript">
		var PWT = {};
		var adLazyLoading = false;
		var googletag = googletag || {};
		var gptRan = false;
		var FAILSAFE_TIMEOUT = 600;
		const DYNAMIC_NAME = '/mega-millions/homepage';
		var adSlots = [];

		googletag.cmd = googletag.cmd || [];

	</script>

	<script id="boston-init-adserver" type="text/javascript">
		// this function will act as a lock and will call the GPT API
		function initAdserver(forced) {
			if((forced === true && window.initAdserverFlag !== true) || (PWT.a9_BidsReceived && PWT.ow_BidsReceived)){
				window.initAdserverFlag = true;
				PWT.a9_BidsReceived = PWT.ow_BidsReceived = false;

				if( 'undefined' !== typeof AdLazyLoader ) {
					adLazyLoading = true;
					var slotsToLazyLoad = [];
					for ( var prop in window.adSlots ) {
						if ( window.adSlots.hasOwnProperty( prop ) ) {
							slotsToLazyLoad.push( window.adSlots[ prop ] );
						}
					}
					AdLazyLoader.registerSlots( slotsToLazyLoad );
				} else {
					googletag.pubads().refresh();
				}
			}
		}
	</script>

	<script id="boston-init-tam" type="text/javascript">
		!function(a9,a,p,s,t,A,g) {
			if( a[a9] )return;
			function q( c, r ) {
				a[a9]._Q.push( [c,r] )
			}
			a[a9]={
				init:function() {
					q("i",arguments)
				},
				fetchBids:function() {
					q("f",arguments)
				},
				setDisplayBids:function(){},
				_Q:[]
			};
		}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js" );

		var initParams = {
			pubID: '3453',
			adServer: 'googletag',
			videoAdServer: 'DFP'
		};
		
				
			/* 
			 * If we have CCPA user, pass the consent along.
			*/
			const ccpaApplies = localStorage.getItem( 'ccpaApplies' );
		
			if( null !== ccpaApplies ) {  //This is a CCPA user, pass the consent.
				let storageCCPA = localStorage.getItem( 'ccpaString' );
				initParams.params = { us_privacy: storageCCPA  };
			}
		
		
		apstag.init(initParams);
		
		let slots = [];

					slots = [
				{
					slotID: 'ad_lead1',
					sizes: [[728, 90], [970, 90], [320, 50]]
				},
			];

							slots.push(
					{
						slotID: 'ad_sectionfront1',
						sizes: [[300,250], [300,600], [160,600]]
					},
					{
						slotID: 'ad_sectionfront2',
						sizes: [[300,250], [300,600], [160,600]]
					}
				);
			
							slots.push({ slotID: 'ad_stream1', sizes: [[ 728, 90 ], [ 970, 90 ], [ 970, 250 ], [ 300, 250 ], [ 320, 100 ], [ 320, 50 ]] });
							slots.push({ slotID: 'ad_stream2', sizes: [[ 728, 90 ], [ 970, 90 ], [ 970, 250 ], [ 300, 250 ], [ 320, 100 ], [ 320, 50 ]] });
			
				
		apstag.fetchBids({
			slots: slots,
			timeout: 2e3 // Make Sure this timeout is less than or equal to OpenWrap TimeOut.
		}, function(bids) {
			googletag.cmd.push(function(){
				apstag.setDisplayBids();
				PWT.a9_BidsReceived = true;
				initAdserver(false);
			});
		});
		
	</script>

	<script id="boston-gam" type="text/javascript">
		googletag.cmd.push(function() {

			var leaderMapping = googletag
				.sizeMapping()
				.addSize([0, 0], [[300, 250], [320, 50], [320, 100], [ 325, 508 ], [ 325, 204 ]])
				.addSize([768, 200], [[728, 90], [300,250]])
				.addSize([960, 200], [[728, 90], [620, 366], [300, 250]])
				.addSize([1280, 200], [[970, 250], [970, 90], [728, 90], [620, 366], [300, 250]])
				.build();

			var leader1Mapping = googletag
				.sizeMapping()
				.addSize([0, 0], [320, 50])
				.addSize([768, 200], [[768, 90], [728, 90]])
				.addSize([1050, 200], [[970, 90], [728, 90]])
				.build();

			var leader2Mapping = googletag
				.sizeMapping()
				.addSize([0, 0], [[300, 250], [320, 100], [320, 50], [ 325, 508 ], [ 325, 204 ]])
				.addSize([768, 200], [[728, 90], [300, 250]])
				.addSize([1050, 200], [[728, 90], [620, 366], [300, 250]])
				.build();

			var railMapping = googletag
				.sizeMapping()
				.addSize([0, 0], [])
				.addSize([768, 200], [])
				.addSize([1050, 200], [[300, 250], [300, 600], [160,600]])
				.build();

			
				adSlots['ad_lead1'] = googletag
					.defineSlot('/61381659/boston.com' + DYNAMIC_NAME, [[768, 90], [728, 90], [970, 90], [320, 50]], 'ad_lead1' )
					.setTargeting('pos', [['lead1'], ['atf']])
					.defineSizeMapping( leader1Mapping )
					.addService( googletag.pubads() );

									adSlots['ad_sectionfront1'] = googletag
						.defineSlot('/61381659/boston.com' + DYNAMIC_NAME, [[300,250], [300,600], [160,600]], 'ad_sectionfront1')
						.setTargeting('pos', [['sectfront1'], ['atf']])
						.defineSizeMapping(railMapping)
						.addService( googletag.pubads() );

					adSlots['ad_sectionfront2'] = googletag
						.defineSlot('/61381659/boston.com' + DYNAMIC_NAME, [[300,250], [300,600], [160,600]], 'ad_sectionfront2')
						.setTargeting('pos', [['sectfront2'], ['atf']])
						.defineSizeMapping(railMapping)
						.addService( googletag.pubads() );
				
				// Define Real Estate GAM Slots (Special Section).
				
					
					
				
				// Dynamically build the in-article ad definitoins and add to the config definition based off of the number of in-article ads
				
					adSlots['ad_stream1'] = googletag
						.defineSlot('/61381659/boston.com'+ DYNAMIC_NAME, [[ 728, 90 ], [ 970, 90 ], [ 970, 250 ], [ 300, 250 ], [ 320, 100 ], [ 320, 50 ]], 'ad_stream1' )
						.setTargeting('pos', [['stream1'], ['btf']])
						.defineSizeMapping( leaderMapping )
						.addService( googletag.pubads() );

				
					adSlots['ad_stream2'] = googletag
						.defineSlot('/61381659/boston.com'+ DYNAMIC_NAME, [[ 728, 90 ], [ 970, 90 ], [ 970, 250 ], [ 300, 250 ], [ 320, 100 ], [ 320, 50 ]], 'ad_stream2' )
						.setTargeting('pos', [['stream2'], ['btf']])
						.defineSizeMapping( leaderMapping )
						.addService( googletag.pubads() );

				
			
			
			// common targetings
			googletag.pubads()
														.setTargeting( 'pgtype', 'tag' )
				
														.setTargeting( 'ptag', 'mega-millions' )
				
														.setTargeting( 's1', 'boston.com' )
				
														.setTargeting( 'pageurl', '_tag_mega-millions_' )
				
				
				.setTargeting( 'environment', ['production'])

				
				.setTargeting( 'adunblock', ['undefined' !== typeof( window._bcm_il ) ? 'true' : 'false']
			);

			/*
			*
			* BlueConic Reference
			* https://support.blueconic.com/hc/en-us/articles/115004519689-doubleclick-for-publishers--targeting-only-#adjust-your-google-ad-manager-implementation-code-0-1
			*
			*/
			if ( typeof Storage !== "undefined" ) {
				const targetingParamStr = localStorage.getItem("bcDFPTargetingParams");
				if ( targetingParamStr ) {
					const targetingParameters = JSON.parse( targetingParamStr );

					targetingParameters.forEach( function( param, index ) {
						googletag.pubads().setTargeting( param.key, param.value );
					});
				}
			}

			// Register event handlers to observe lazy loading behavior. (this for the QA instructions)
			googletag.pubads().addEventListener( 'slotRequested', function( event ) {
				updateSlotStatus( event.slot.getSlotElementId(), 'fetched' );
			});

			googletag.pubads().addEventListener( 'slotOnload', function( event ) {
				updateSlotStatus( event.slot.getSlotElementId(), 'rendered' );
			});
			
			googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				var size = event.size;
				if(size === null) return;
				var slot = event.slot;
				var slotDiv = document.getElementById(slot.getSlotElementId());

				if (size[0] > slotDiv.clientWidth) {
					slotDiv.style.width = size[0] + 'px';
				}

				if (size[1] > slotDiv.clientHeight) {
					slotDiv.style.height = size[1] + 'px';
				}
			});

			googletag.pubads().enableSingleRequest();
			googletag.pubads().disableInitialLoad();
			googletag.enableServices();

			/* The above code is a snippet of code that is used to call the Prebid.js library. */
			if( typeof PWT.requestBids === 'function' ) {
				PWT.requestBids(
					PWT.generateConfForGPT(googletag.pubads().getSlots()),
					function(adUnitsArray) {
						PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
						PWT.ow_BidsReceived = true;
						initAdserver(false);
					}
				);
			}

			// No need to handle "else" part as we have A9 wrapper on page
			// OpenWrap code END here

			setTimeout(function() {
				initAdserver(true); // calling this function with forced mode set to true so that GPT API is always executed
			}, FAILSAFE_TIMEOUT);

			if ( (PWT.a9_BidsReceived && PWT.ow_BidsReceived) && ! adLazyLoading && 'undefined' !== typeof AdLazyLoader ) {
				// This is a fallback for if prebid has already returned and
				// attempted to register ads to lazy load before the ads have
				// all been defined.
				adLazyLoading = true;
				var slotsToLazyLoad = [];
				for ( var prop in window.adSlots ) {
					if ( window.adSlots.hasOwnProperty( prop ) ) {
						slotsToLazyLoad.push( window.adSlots[ prop ] );
					}
				}
				AdLazyLoader.registerSlots( slotsToLazyLoad );
			}

			// Checks that there is a video with ads available in the markup.
			const hasArcVideo = document.getElementsByClassName( 'a-video' ).length > 0 || ( typeof hasArcVideoPlayerAd !== 'undefined' && hasArcVideoPlayerAd );

			/**
			 * ===================
			 * Arc Video
			 * ===================
			 */
			if ( hasArcVideo ) {
				const params = [
					'sz=640x480',
					`iu=/61381659/boston.com${DYNAMIC_NAME}`,
					'gdfp_req=1',
					'env=vp',
					'output=xml_vast3',
					'unviewed_position_start=1',
					'description_url=https%3A%2F%2Fboston.com',
					'ciu_szs=300x250',
					`cust_params=${buildCustomParams()}`,
				].join('&')

				window.PoWaSettings = window.PoWaSettings || {};
				window.PoWaSettings.advertising = window.PoWaSettings.advertising || {};

				if ( typeof hasArcVideoPlayerAd !== 'undefined' && hasArcVideoPlayerAd ) {
					/**
					 * Calculates the formatted duration of a video in hours, minutes, and seconds.
					 *
					 * @param {Object} videoData - An object containing video data such as duration.
					 * @param {number} videoData.duration - The duration of the video in milliseconds.
					 *
					 * @return {string} - The formatted duration of the video in the format hh:mm:ss.
					 */
					const getTime = (videoData) => {
						if ( !videoData.duration ) return '';

						const duration = videoData.duration / 1000;

						const hours = Math.floor(duration / 3600);
						const minutes = Math.floor(duration / 60) % 60;
						const seconds = Math.floor(duration % 60);

						const hourDisplay = hours ? `${hours}:` : '';
						const minuteDisplay = hours && minutes < 10 ? `0${minutes}:` : `${minutes}:`;
						const secondDisplay = seconds < 10 ? `0${seconds}` : seconds;

						return `${hourDisplay}${minuteDisplay}${secondDisplay}`;
					};

					// Saves the listener interval ID.
					let intervalPoWaId;

					/**
					 * In order to create the promo markup, the script needs to override values of a variable stored in the window object.
					 * That is the reason to create an interval that listens to PoWaSettings as early in the execution as possible.
					 */
					function setWindowPoWaSettingsPromo() {
						if ( window.PoWaSettings ) {
							const playButtonSVG = `<svg class="bdc-arc-promo__play" height="20px" viewBox="0 0 24 40" width="12px"><title>Play</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Play" transform="translate(0.916016, 0.000000)" fill="#FFFFFF" fill-rule="nonzero"><path d="M22.150346,18.47837 L19.03045,15.69057 L19.032738,15.68853 L2.182097,0.62952 C1.708623,0.20849 1.091049,-0.00203 0.473474,9.99999998e-06 C0.372832,9.99999998e-06 0.274478,0.00615 0.171549,0.01841 L0.002287,0.0368 L0.002287,25.268 L0,25.268 L0,39.9673 L0.176123,39.98365 C0.276765,39.99591 0.375119,40 0.473474,40 L0.480336,40 C1.093336,40 1.708623,39.79153 2.17981,39.37663 L22.150346,21.52778 C22.62382,21.10879 22.859414,20.55491 22.857126,20.00103 C22.859414,19.45124 22.62382,18.8994 22.150346,18.47837"></path></g></g></svg>
`; // Play button SVG.
							const logoSVG 		= `<svg class="bdc-arc-promo__logo" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg47" version="1.1" viewBox="0 0 104 40" height="40" width="104"><title id="title2">BDC Logo</title><defs id="defs9"><path id="path-1" d="M 0.99414923,0.99002979 V 330.92546 H 79.979206 c 43.720834,0 66.151404,-22.04811 66.151404,-62.086 v 0 -62.09308 c 0,-20.20663 -10.56015,-37.62272 -30.3914,-45.42773 v 0 c 18.90343,-6.84179 28.54284,-23.34423 28.54284,-43.55086 v 0 -54.677601 c 0,-40.052053 -22.96884,-62.10015921 -66.165566,-62.10015921 v 0 z M 58.101082,49.739505 h 13.704814 c 10.014783,0 15.574618,6.863031 15.574618,18.733453 v 0 49.103602 c 0,12.06166 -5.38277,18.91052 -15.574618,18.91052 v 0 H 58.101082 Z m -0.19123,134.569235 h 12.401617 c 13.364849,0 18.917601,7.42963 18.733453,21.50983 v 0 57.45397 c 0,12.06166 -5.368604,18.90344 -15.567535,18.90344 v 0 H 57.909852 Z" /><path id="path-3" d="M 0.30715319,65.691033 V 271.43322 c 0,39.83958 29.27943181,65.61313 73.02151481,65.61313 v 0 c 43.749162,0 72.681552,-25.58232 72.681552,-65.61313 v 0 -205.742187 c 0,-39.867906 -28.74116,-65.62020709 -72.476157,-65.62020709 v 0 C 29.79198,0.07082591 0.49838315,25.823127 0.30715319,65.691033 Z M 57.768215,267.90609 V 69.388145 c 0,-12.422864 5.552752,-20.178302 15.560453,-20.178302 v 0 c 10.206014,0 15.213406,7.755438 15.213406,20.178302 v 0 198.517945 c 0,12.43703 -5.007392,20.21372 -15.213406,20.21372 v 0 c -10.007701,0 -15.560453,-7.77669 -15.560453,-20.21372 z" /><path id="path-5" d="m 0.74508222,65.322738 v 45.597722 c 0,26.50306 8.72575228,40.77448 25.77354878,54.11808 v 0 l 47.998721,39.83957 c 7.797933,7.43672 10.942603,12.99656 10.942603,26.70846 v 0 H 85.09166 v 36.31952 c 0,12.43703 -4.10082,20.21372 -14.278503,20.21372 v 0 c -10.007702,0 -14.646799,-7.77669 -14.646799,-20.21372 v 0 -59.67791 H 0.19264011 v 63.94163 c 0,40.04497 26.70136889,65.26608 70.25930389,65.26608 v 0 c 43.182556,0 72.100776,-25.22111 72.100776,-65.26608 v 0 -53.38857 c 0,-26.50306 -9.08696,-40.76031 -26.12768,-54.111 v 0 L 68.617553,124.63236 C 60.805455,117.22397 57.660785,111.64997 57.660785,97.93807 v 0 -28.549925 c 0,-12.422864 4.447867,-20.178302 14.632633,-20.178302 v 0 c 10.206014,0 14.271421,7.755438 14.271421,20.178302 v 0 53.756865 H 142.17026 V 65.322738 c 0,-40.052053 -26.68012,-65.25191209 -70.238054,-65.25191209 v 0 c -43.565018,0 -71.18712378,25.19985909 -71.18712378,65.25191209 z" /><path id="path-7" d="M 0.18414737,65.691033 V 271.43322 c 0,39.83958 29.28651463,65.61313 73.02859763,65.61313 v 0 c 43.734995,0 72.646135,-25.58232 72.646135,-65.61313 v 0 -205.742187 c 0,-39.867906 -29.08112,-65.62020709 -72.646135,-65.62020709 v 0 C 29.647727,0.07082591 0.18414737,25.823127 0.18414737,65.691033 Z M 57.638127,267.90609 V 69.388145 c 0,-12.422864 5.566917,-20.178302 15.574618,-20.178302 v 0 c 10.191848,0 15.192158,7.755438 15.192158,20.178302 v 0 198.517945 c 0,12.43703 -5.00031,20.21372 -15.192158,20.21372 v 0 c -10.007701,0 -15.574618,-7.77669 -15.574618,-20.21372 z" /><path id="path-9" d="m 1106.8983,130.37634 v 76.47073 c 0,14.81678 10.8788,24.38537 27.1475,24.38537 v 0 c 16.2546,0 26.9989,-9.49776 26.9989,-24.38537 v 0 -76.47073 c 0,-14.8097 -10.7443,-24.38536 -26.9989,-24.38536 v 0 c -16.2687,0 -27.1475,9.57566 -27.1475,24.38536 z m 21.354,75.16754 v -73.77935 c 0,-4.62494 2.0044,-7.51463 5.7935,-7.51463 v 0 c 3.7892,0 5.6449,2.88969 5.6449,7.51463 v 0 73.77935 c 0,4.62493 -1.8557,7.50046 -5.6449,7.50046 v 0 c -3.7183,0 -5.7935,-2.87553 -5.7935,-7.50046 z" /></defs><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(0.06987876,0,0,0.06987876,7.3493524,8.3563326)" id="BDC_Logo_2020_Full_White"><g transform="translate(27,22.137254)" id="COM"><g transform="translate(0,2.784991)" id="Group-3"><mask fill="white" id="mask-2"><use height="100%" width="100%" y="0" x="0" id="use11" xlink:href="#path-1" /></mask><g id="Clip-2" /><polygon style="fill:#ffffff" points="239.40125,424.18902 239.40125,-92.273531 -92.262328,-92.273531 -92.262328,424.18902 " mask="url(#mask-2)" id="Fill-1" /></g><g transform="translate(162.32589)" id="Group-6"><mask fill="white" id="mask-4"><use height="100%" width="100%" y="0" x="0" id="use17" xlink:href="#path-3" /></mask><g id="Clip-5" /><polygon style="fill:#ffffff" points="239.2667,430.30991 239.2667,-93.192734 -92.956407,-93.192734 -92.956407,430.30991 " mask="url(#mask-4)" id="Fill-4" /></g><g transform="translate(325.0142)" id="Group-9"><mask fill="white" id="mask-6"><use height="100%" width="100%" y="0" x="0" id="use23" xlink:href="#path-5" /></mask><g id="Clip-8" /><polygon style="fill:#ffffff" points="235.81628,430.69945 235.81628,-93.192734 -93.056755,-93.192734 -93.056755,430.69945 " mask="url(#mask-6)" id="Fill-7" /></g><polygon style="fill:#ffffff" points="616.20077,55.310787 616.20077,3.7778541 475.14388,3.7778541 475.14388,55.112475 517.05157,55.112475 517.05157,333.69912 574.4843,333.69912 574.4843,55.112475 574.4843,55.310787 " id="Fill-10" /><polygon style="fill:#ffffff" points="892.02236,333.69912 941.16138,333.69912 941.16138,3.7778541 889.24599,3.7778541 889.24599,108.49396 890.16672,177.82545 889.24599,177.82545 851.99156,3.7778541 793.2273,3.7778541 793.2273,333.69912 845.13561,333.69912 845.13561,196.37475 844.21487,132.42604 845.13561,132.42604 " id="Fill-14" /><g transform="translate(625.65744)" id="Group-13"><mask fill="white" id="mask-8"><use height="100%" width="100%" y="0" x="0" id="use31" xlink:href="#path-7" /></mask><g id="Clip-12" /><polygon style="fill:#ffffff" points="239.12244,430.30991 239.12244,-93.192734 -93.086495,-93.192734 -93.086495,430.30991 " mask="url(#mask-8)" id="Fill-11" /></g><polygon style="fill:#ffffff" points="1280.7886,333.59429 1356.1191,333.59429 1356.1191,3.6659492 973.64498,3.6659492 973.64498,56.119619 1304.9898,56.119619 1304.9898,281.13354 1241.9831,281.13354 1241.9831,324.98186 1142.8977,281.13354 973.64498,281.13354 973.64498,333.59429 1144.895,333.59429 1280.7886,393.72549 " id="Fill-15" /><polygon style="fill:#ffffff" points="1026.8791,231.25368 1026.8791,202.2009 997.84761,202.2009 997.84761,231.25368 " id="Fill-16" /><polygon style="fill:#ffffff" points="1188.5549,176.95146 1188.4203,152.70066 1188.7603,152.70066 1197.1036,231.23244 1213.2873,231.23244 1221.7651,152.70066 1222.1051,152.70066 1221.7651,176.95146 1221.7651,231.23244 1241.2706,231.23244 1241.2706,108.60445 1212.9473,108.60445 1205.4327,184.11904 1205.0927,184.11904 1197.5852,108.60445 1169.0565,108.60445 1169.0565,231.23244 1188.5549,231.23244 " id="Fill-23" /><mask fill="white" id="mask-10"><use height="100%" width="100%" y="0" x="0" id="use40" xlink:href="#path-9" /></mask><use height="100%" width="100%" y="0" x="0" style="fill:#ffffff" xlink:href="#path-9" id="Clip-21" /><path style="fill:#ffffff" id="Clip-18" d="m 1046.8804,130.37634 v 76.47073 c 0,14.81678 10.7514,24.38537 26.8005,24.38537 v 0 c 16.1979,0 26.1135,-9.49776 26.1135,-24.38537 v 0 -24.7324 h -20.8086 v 23.42921 c 0,4.62493 -1.5157,7.51463 -5.3049,7.51463 v 0 c -3.7254,0 -5.4394,-2.8897 -5.4394,-7.51463 v 0 -73.79352 c 0,-4.61077 1.6573,-7.50046 5.4394,-7.50046 v 0 c 3.7892,0 5.3049,2.88969 5.3049,7.50046 v 0 21.70106 h 20.8086 v -23.07508 c 0,-14.8097 -9.9156,-24.39953 -26.1135,-24.39953 v 0 c -16.0491,0 -26.8005,9.58983 -26.8005,24.39953 z" /></g></g></svg>
`; // Play button SVG.

							window.PoWaSettings.promo =
								window.PoWaSettings.promo ||
									{
										template: (settings) => {
											return `
												<div class="bdc-arc-promo powa-click-promo-play" ${settings.image ? ` style="background-image: url('${settings.image}')"` : ''}>
													<div class="bdc-arc-promo__bar">
														<div class="bdc-arc-promo__controls">
															${playButtonSVG}
															<span class="bdc-arc-promo__duration">${getTime(settings.videoData)}</span>
														</div>
														${logoSVG}
													</div>
												</div>
											`;
										},
										style: () => `
											.powa-shot {
												background-position: center;
												background-size: cover;
												height: 100%;
												position: absolute;
												width: 100%;
											}
											.bdc-arc-promo {
												background-position: center;
												background-size: cover;
												display: flex;
												height: 100%;
											}
											.bdc-arc-promo__bar {
												display: flex;
												margin-top: auto;
												padding: 10px;
												width: 100%;
											}
											.bdc-arc-promo__controls {
												align-items: center;
												background: #0000007d;
												display: inline-flex;
												margin-bottom: -10px;
												margin-left: -10px;
												margin-top: auto;
												max-height: 40px;
												padding: 10px;
											}
											.bdc-arc-promo__controls .bdc-arc-promo__play {
												margin-right: 10px;
											}
											.bdc-arc-promo__logo {
												margin-left: auto;
												opacity: .5;
											}
											.bdc-arc-promo__duration {
												color: #FFFFFF;
												font-family: "franklin-gothic-urw-cond", arial;
											}
											.bdc-arc-promo,
											.bdc-arc-promo__controls svg {
												cursor: pointer;
											}
										`,
									};

							stopWindowPoWaListening();
						}
					}

					// Starts the listener interval.
					function startWindowPoWaListening() {
						intervalPoWaId = setInterval(setWindowPoWaSettingsPromo, 100);
					}

					// Stops the listener interval.
					function stopWindowPoWaListening() {
						clearInterval(intervalPoWaId);
					}

					// Loads the listener interval as soon as the site has started.
					window.addEventListener('DOMContentLoaded', startWindowPoWaListening);

					window.PoWaSettings.advertising.adBar = true;

					window.addEventListener('powaError', function () {
						document.getElementsByClassName('a-arc-video-advert')[0].remove();
					});
				}

				// Define the ad tag to be used by the player.
				window.PoWaSettings.advertising.adTag = function () {
					return `//pubads.g.doubleclick.net/gampad/ads?${params}`;
				};

				/**
				 * Builds the custom parameters needed for the ARC video preroll
				 *
				 * @return string - URL encoded string of parameters
				 */
				function buildCustomParams() {

					const getCurrentBreakPoint = function() {
						if ( window.outerWidth < 768 ) { return 'mobile'; }
						if ( window.outerWidth < 960 ) { return 'tablet'; }
						return 'desktop';
					};

					const getTestQueryString = function() {
						var queryString = window.location.search;
						var regex = /[\?\&]test=([^&]*)/;
						return queryString.match( regex ) ? queryString.match( regex )[1] : '';
					};

					const customParams = [
						'pos=preroll',
						'breakpoint=' + getCurrentBreakPoint(),
						'test=' + getTestQueryString(),
					];

					googletag
						.pubads()
						.getTargetingKeys()
						.forEach((key) => customParams.push(`${key}=${googletag.pubads().getTargeting(key)}`));

					return encodeURIComponent(
						customParams.join('&')
						.replace('pgtype=post', 'pgtype=article') // Match legacy ad call format
					);
				};
			}
		});  //googletag.cmd.push
		/*
		 * Updating the status of the slot. 
		 * This is only to check behaivor on branch env
		 */
		function updateSlotStatus( slotId, state ) {
			var elem       = document.getElementById( slotId );
			elem.className = 'activated';
			console.log( slotId + ' status: ' + state );
		}
	</script>

	
	<!-- This site is optimized with the Yoast SEO Premium plugin v21.7 (Yoast SEO v21.7) - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Mega Millions | Boston.com</title>
	<meta name="description" content="Check back every Tuesday and Friday for drawings of the latest numbers. Stay up to date on the Mega Millions jackpot and related news at Boston.com." />
	<link rel="canonical" href="https://www.boston.com/tag/mega-millions/" />
	<link rel="next" href="https://www.boston.com/tag/mega-millions/page/2/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Mega Millions Archives" />
	<meta property="og:description" content="Check back every Tuesday and Friday for drawings of the latest numbers. Stay up to date on the Mega Millions jackpot and related news at Boston.com." />
	<meta property="og:url" content="https://www.boston.com/tag/mega-millions/" />
	<meta property="og:site_name" content="Boston.com" />
	<meta property="og:image" content="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg" />
	<meta property="og:image:width" content="256" />
	<meta property="og:image:height" content="256" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content="The winning numbers drawn Tuesday night were: 13, 19, 20, 32, 33 and the yellow ball 14." />
	<meta name="twitter:image" content="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg" />
	<meta name="twitter:site" content="@BostonDotCom" />
	<script type="application/ld+json" class="yoast-schema-graph">{
	    "@context": "https://schema.org",
	    "@graph": [
	        {
	            "@type": "CollectionPage",
	            "@id": "https://www.boston.com/tag/mega-millions/",
	            "url": "https://www.boston.com/tag/mega-millions/",
	            "name": "Mega Millions | Boston.com",
	            "isPartOf": {
	                "@id": "https://www.boston.com/#website"
	            },
	            "primaryImageOfPage": {
	                "@id": "https://www.boston.com/tag/mega-millions/#primaryimage"
	            },
	            "image": {
	                "@id": "https://www.boston.com/tag/mega-millions/#primaryimage"
	            },
	            "thumbnailUrl": "https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-scaled.jpg",
	            "description": "Check back every Tuesday and Friday for drawings of the latest numbers. Stay up to date on the Mega Millions jackpot and related news at Boston.com.",
	            "breadcrumb": {
	                "@id": "https://www.boston.com/tag/mega-millions/#breadcrumb"
	            },
	            "inLanguage": "en-US"
	        },
	        {
	            "@type": "ImageObject",
	            "inLanguage": "en-US",
	            "@id": "https://www.boston.com/tag/mega-millions/#primaryimage",
	            "url": "https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-scaled.jpg",
	            "contentUrl": "https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-scaled.jpg",
	            "width": 2560,
	            "height": 1707,
	            "caption": "Lottery forms are shown, Monday, Aug. 7, 2023, at the Presidente Supermarket in the Little Havana neighborhood of Miami."
	        },
	        {
	            "@type": "BreadcrumbList",
	            "@id": "https://www.boston.com/tag/mega-millions/#breadcrumb",
	            "itemListElement": [
	                {
	                    "@type": "ListItem",
	                    "position": 1,
	                    "name": "Home",
	                    "item": "https://www.boston.com/"
	                },
	                {
	                    "@type": "ListItem",
	                    "position": 2,
	                    "name": "Mega Millions"
	                }
	            ]
	        },
	        {
	            "@type": "WebSite",
	            "@id": "https://www.boston.com/#website",
	            "url": "https://www.boston.com/",
	            "name": "Boston.com",
	            "description": "Boston.com",
	            "publisher": {
	                "@id": "https://www.boston.com/#organization"
	            },
	            "potentialAction": [
	                {
	                    "@type": "SearchAction",
	                    "target": {
	                        "@type": "EntryPoint",
	                        "urlTemplate": "https://www.boston.com/?s={search_term_string}"
	                    },
	                    "query-input": "required name=search_term_string"
	                }
	            ],
	            "inLanguage": "en-US"
	        },
	        {
	            "@type": "NewsMediaOrganization",
	            "@id": "https://www.boston.com/#organization",
	            "name": "Boston.com",
	            "url": "https://www.boston.com",
	            "logo": "https://bdc2020.o0bc.com/wp-content/uploads/2021/05/Boston.com-Logo-609cb231cf4d6.png",
	            "image": {
	                "@id": "https://www.boston.com/#/schema/logo/image/"
	            },
	            "sameAs": [
	                "https://www.facebook.com/boston",
	                "https://twitter.com/BostonDotCom",
	                "https://instagram.com/boston/",
	                "https://www.youtube.com/channel/UC8IkdxFyPXgw11n4Ew0osHQ"
	            ],
	            "address": "1 Exchange Place, Boston, MA 02109",
	            "areaServed": [
	                "Boston",
	                "Massachusetts",
	                "New England"
	            ],
	            "description": "Boston.com is the region’s leading digital destination for information on all things Boston. Millions of visitors turn to our site for the best coverage of breaking news, things to do, sports, and entertainment in Greater Boston and beyond.",
	            "email": "tips@boston.com",
	            "foundingDate": "1995-10-30",
	            "legalName": "Boston Globe Media Partners",
	            "location": "Boston",
	            "masthead": "https://www.boston.com/contact-us/"
	        }
	    ]
	}</script>
	<!-- / Yoast SEO Premium plugin. -->


<link rel='dns-prefetch' href='//static.chartbeat.com' />
<link rel='dns-prefetch' href='//cdn.blueconic.net' />
<link rel="alternate" type="application/rss+xml" title="Boston.com &raquo; Feed" href="https://www.boston.com/feed/" />
<link rel="alternate" type="text/calendar" title="Boston.com &raquo; iCal Feed" href="https://www.boston.com/things-to-do/?ical=1" />
<link rel="alternate" type="application/rss+xml" title="Boston.com &raquo; Mega Millions Tag Feed" href="https://www.boston.com/tag/mega-millions/feed/" />
<link rel='stylesheet' id='tribe-events-pro-mini-calendar-block-styles-css' href='https://bdc2020.o0bc.com/wp-content/plugins/events-calendar-pro/src/resources/css/tribe-events-pro-mini-calendar-block.min.css?ver=5.13.0' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='https://bdc2020.o0bc.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.3' type='text/css' media='all' />
<link rel='stylesheet' id='wp_blocks_embed_weather_podcast-cgb-style-css-css' href='https://bdc2020.o0bc.com/wp-content/plugins/wp-block-embed-weather-podcast/dist/blocks.style.build.css' type='text/css' media='all' />
<link rel='stylesheet' id='elasticpress-related-posts-block-css' href='https://bdc2020.o0bc.com/wp-content/plugins/elasticpress/dist/css/related-posts-block-styles.min.css?ver=3.5.6' type='text/css' media='all' />
<style id='classic-theme-styles-inline-css' type='text/css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--red: #bb2525;--wp--preset--color--background-black: #1a1a1a;--wp--preset--color--line-gray: #e1e1e1;--wp--preset--color--blue: #2c74de;--wp--preset--color--light-gray: #f1f1f1;--wp--preset--color--off-white: #fbf1e7;--wp--preset--color--mid-gray: #b6b6b6;--wp--preset--color--dark-gray: #68686d;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='tenup-block-library-frontend-accordion-styles-css' href='https://bdc2020.o0bc.com/wp-content/plugins/block-library/dist/css/frontend-accordion-styles.css?ver=d899f5cabdebab30a4d631759350a871' type='text/css' media='all' />
<link rel='stylesheet' id='flickity-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/flickity.css?ver=de1733671f83d980eba7159a06bc24b5' type='text/css' media='all' />
<link rel='stylesheet' id='global-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/global.css?ver=b691fcec68f9bdd07bab804d8fc77885' type='text/css' media='all' />
<link rel='stylesheet' id='base-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/base.css?ver=cbc8a759cc5d3c4eb5f162cd931c97bc' type='text/css' media='all' />
<link rel='stylesheet' id='blocks-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/blocks.css?ver=9f151923f9df19ffb10b71dcd09497f2' type='text/css' media='all' />
<link rel='stylesheet' id='molecules-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/molecules.css?ver=55324a06d93d3e86ce0e64044fa9a6c6' type='text/css' media='all' />
<link rel='stylesheet' id='organisms-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/organisms.css?ver=bb7d535a37674989c5d1086411b2f515' type='text/css' media='all' />
<link rel='stylesheet' id='styles-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/style.css?ver=b3b2117ad7f7c6fbd562bae299896550' type='text/css' media='all' />
<link rel='stylesheet' id='bdc-real-estate-css' href='https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/css/real-estate.css?ver=6e87b72c5ec0d5aebeb6e14d65a0f25c' type='text/css' media='all' />
<script type="text/javascript" id="chartbeat_head_js-js-extra">
/* <![CDATA[ */
var chartbeat_config = {"domain":"boston.com","uid":"8544","useCanonical":"1","oneTrusActive":"1","useAB":"","authors":"","sections":"tag page","title":"Mega Millions | homepage"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/bdc-chartbeat/js/bdc.chartbeat-head.js?ver=1706720563" id="chartbeat_head_js-js"></script>
<script type="text/javascript" src="//static.chartbeat.com/js/chartbeat_mab.js?ver=6.4.3" id="chartbeat_mab-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" id="ua-wn-js-extra">
/* <![CDATA[ */
var uaWnSettings = {"prompt":{"enabled":true,"prompt_views":2,"prompt_again_views":8}};
/* ]]> */
</script>
<script type="text/plain" src="https://bdc2020.o0bc.com/wp-content/plugins/urban-airship-web-push-notifications/assets/js/notification.js?ver=1.3.4"  id="ua-wn" class="optanon-category-C0003"></script><script type="text/plain" src="//cdn.blueconic.net/bostonglobemedia.js"  id="blueconic_js" class="optanon-category-C0004"></script>	<script type="text/plain" class="optanon-category-C0003">
		!(function(o,n,t){t=o.createElement(n),o=o.getElementsByTagName(n)[0],t.async=1,t.src="https://fallaciousfifth.com/v2ojfJQXItusfVrUEda5saSZ5uxEMzujCipb6jl01lNcP_fOujjlpKPeM-wc-_90A",o.parentNode.insertBefore(t,o)})(document,"script"),(function(o,n){o[n]=o[n]||function(){(o[n].q=o[n].q||[]).push(arguments)}})(window,"admiral");!(function(c,e,o,t,n){function r(o,t){(function n(){try{return 0<(localStorage.getItem("v4ac1eiZr0")||"").split(",")[4]}catch(o){}return!1})()&&(t=c[e].pubads())&&t.setTargeting("admiral-engaged","true")}(n=c[e]=c[e]||{}).cmd=n.cmd||[],typeof n.pubads===o?r():typeof n.cmd.unshift===o?n.cmd.unshift(r):n.cmd.push(r)})(window,"googletag","function");
	</script>
			<script type="text/javascript">
			/* 
			* This is checking if the user has opted out of analytics.
			* OptanonWrapper plugins/bdc-functionality/includes/BDC/Theme/OneTrustCMP.php:220
			*/
			var ConsentOnetrust = localStorage.getItem( 'consent_one_trust_bdc' );
			var CleanCreative   = document.createElement( 'script' );
			CleanCreative.setAttribute( 'src','//cadmus.script.ac/dz9qn8fh4jznm/script.js' );
			CleanCreative.setAttribute( 'type','text/javascript' );
			
			/* 
			* The above code is checking if the user has given consent for the category "Marketing" 
			* and if the user has given consent, then the script is appended to the head tag.
			 */
			if (
				typeof OptanonWrapper === 'function' &&
				ConsentOnetrust &&
				JSON.parse( ConsentOnetrust ).C0003 === true
			) {
				document.getElementsByTagName( 'head' )[0].appendChild( CleanCreative );
			} 
			if ( typeof OptanonWrapper !== 'function' ) {
				document.getElementsByTagName( 'head' )[0].appendChild( CleanCreative );
			}
		</script>
		<!-- REGI ENV = PRD--><script type="text/javascript">
//Registration base URL
regiBaseUrl = 'http://tomcat.boston.com/profiles/outside/REST/';
</script><meta name="tec-api-version" content="v1"><meta name="tec-api-origin" content="https://www.boston.com"><link rel="alternate" href="https://www.boston.com/wp-json/tribe/events/v1/events/?tags=mega-millions" /><link rel='manifest' href='https://www.boston.com/wp-content/themes/bdc-2020/manifest.json' /><!-- There is no amphtml version available for this URL. -->	<!-- The following line must be placed in the head tag -->
	<script type="text/javascript" src="https://p.teads.tv/teads-fellow.js" async="true"></script>
	<script>
	if (typeof(window.bgmpGdpr) !== 'undefined' && !window.bgmpGdpr.isOptedOut()) {
	window.teads_e = window.teads_e || [];
	window.teads_adv_id = 39960;}
	</script>
	<!--
		Start of global snippet: Please do not remove
		Place this snippet between the <head> and </head> tags on every page of your site.
	-->
	<!-- Global site tag (gtag.js) - Google Marketing Platform -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=DC-11164343"></script>
	<script>
		const onetrustLibrary = 1;
		const onetrustConsent = localStorage.getItem('consent_one_trust_bdc');
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push( arguments );
		}
		gtag( 'js', new Date() );
		/*
		* Setting the default consent for the user.
		* By default we granted
		*/
		gtag( 'consent', 'default', {
			'analytics_storage': 'granted'
		} );
		gtag( 'consent', 'default', {
			'ad_storage': 'granted'
		} );
		if ( 1 === onetrustLibrary && onetrustConsent && JSON.parse(onetrustConsent).C0002 === false ) {
			gtag( 'consent', 'update', { 'analytics_storage': 'denied' } );
		}
		if ( 1 === onetrustLibrary && onetrustConsent && JSON.parse(onetrustConsent).C0004 === false ) {
			gtag( 'consent', 'update', { 'ads_storage': 'denied' } );
		}
		gtag( 'config', 'DC-11164343' );

	</script>
	<!-- End of global snippet: Please do not remove -->
<link rel="icon" href="https://bdc2020.o0bc.com/wp-content/uploads/2021/05/BDC_Logo_2020_Social_WhiteBG-609c79a967eee-150x150.png" sizes="32x32" />
<link rel="icon" href="https://bdc2020.o0bc.com/wp-content/uploads/2021/05/BDC_Logo_2020_Social_WhiteBG-609c79a967eee-200x200.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://bdc2020.o0bc.com/wp-content/uploads/2021/05/BDC_Logo_2020_Social_WhiteBG-609c79a967eee-200x200.png" />
<meta name="msapplication-TileImage" content="https://bdc2020.o0bc.com/wp-content/uploads/2021/05/BDC_Logo_2020_Social_WhiteBG-609c79a967eee.png" />
		<style type="text/css" id="wp-custom-css">
			.m-gforms-poll-block .gpoll_button { display: none }		</style>
					<meta property="og:type" content="article"/> 
			<meta property="article:opinion" content="false"/> 
			<meta property="article:content_tier" content="free"/>
				</head>

	<body class="archive tag tag-mega-millions tag-13381 wp-embed-responsive site-body is-special-section tribe-no-js">

					<script src="https://www.boston.com/wp-content/plugins/bdc-chartbeat/js/bdc.chartbeat-body.js"></script>
			<!-- Facebook Pixel Code -->
	<script>
		var consent = 'grant';
		/* The above code is parsing the JSON data from the local storage and storing it in a variable. */
					const onetrustStorageConsent = JSON.parse(localStorage.getItem( 'consent_one_trust_bdc' ) );
			if ( ( onetrustStorageConsent !== null ) ) {
				/* Checking to see if the user has consented to the use of cookies.
				* If they have not, it is deleting the cookie.
				* This will comment for now, until further notice.
				*/
				//if ( onetrustStorageConsent.C0002 === false ) {
				//	document.cookie = '_fbp=;expires=Thu, 01 Jan 2010 00:00:00 UTC; path=/; domain=.boston.com';
				//}
				/* Checking if the user has given consent for the cookie C0002.
				* If the user has given consent, the variable consent will be set to 'grant'.
				* If the user has not given consent,the variable consent will be set to 'revoke'.
				* Documentation https://developers.facebook.com/docs/meta-pixel/implementation/gdpr
				*/
				if ( onetrustStorageConsent.C0002 !== true ) {
					consent = 'revoke';
				}
			}
				!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('consent', consent);
		fbq('init', '989222871864976');
		fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none"
	src="https://www.facebook.com/tr?id=989222871864976&ev=PageView&noscript=1"
	/></noscript>
	<!-- End Facebook Pixel Code -->

		<header class="o-site-header" id="site-header" aria-label="Site Header">
			<section class="o-site-header__advert" aria-label="Leaderboard Advert">
				<div id="js-advert--lead1" class="m-advert m-advert--lead1 m-advert--with-gray m-advert--header "><div class="m-advert__container"><div id="ad_lead1"><script type="type/javascript">googletag.cmd.push(function() { googletag.display("ad_lead1") })</script></div></div></div>			</section>

			<a class="screen-reader-text" href="#site-content">
				Skip to Main Content			</a>

			<div class="o-site-header__masthead">
				<div class="m-grid m-grid-container">

					<div class="m-panel-menu">
						
<button aria-label="Toggle Panel menu" class="a-button a-button--with-icon m-panel-navigation__toggle" id="js-panel-navigation-trigger" aria-haspopup="true" aria-controls="js-panel-navigation" aria-expanded="false">
	<svg class="a-icon m-panel-navigation__open" aria-hidden="true" width="19" height="15"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#menu"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#menu"></use></svg><span class="screen-reader-text">Open</span>	<svg class="a-icon m-panel-navigation__close" aria-hidden="true" width="19" height="15"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close-symbol"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close-symbol"></use></svg><span class="screen-reader-text">Close</span>	<span class="a-hide-mobile">Menu</span>
</button>

<nav id="js-panel-navigation" class="m-panel-navigation" aria-label="Mobile Navigation"  aria-hidden="true">
	<div class="m-panel-navigation__wrap" tabindex="-1">
		<div class="m-panel-navigation_expose">
			<ul class="a-list a-list--no-style m-panel-navigation__list">
				<li class="m-panel-navigation__list-item menu-item">
					<a href="https://www.boston.com">
						Home					</a>
				</li>
			</ul>

			<div class="menu-bdc-main-container"><ul id="panel-primary-nav" class="a-list a-list--no-style m-panel-navigation__menu"><li id="menu-item-22274386" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274386"><a href="https://www.boston.com/category/news/">News</a>
<ul class="sub-menu">
	<li id="menu-item-22667248" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667248"><a href="https://www.boston.com/tag/local-news/">Local News</a></li>
	<li id="menu-item-22667254" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667254"><a href="https://www.boston.com/tag/national-news/">National News</a></li>
	<li id="menu-item-22667253" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667253"><a href="https://www.boston.com/tag/politics/">Politics</a></li>
	<li id="menu-item-22667276" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667276"><a href="https://www.boston.com/tag/coronavirus/">COVID</a></li>
	<li id="menu-item-22667264" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667264"><a href="https://www.boston.com/tag/crime/">Crime</a></li>
	<li id="menu-item-28992764" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28992764"><a href="https://www.boston.com/tag/traffic/">Traffic</a></li>
	<li id="menu-item-22667271" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667271"><a href="https://www.boston.com/tag/jobs/">Jobs</a></li>
</ul>
</li>
<li id="menu-item-22274480" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274480"><a href="https://www.boston.com/category/sports/">Sports</a>
<ul class="sub-menu">
	<li id="menu-item-22497515" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497515"><a href="https://www.boston.com/tag/new-england-patriots/">Patriots</a></li>
	<li id="menu-item-22497530" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497530"><a href="https://www.boston.com/tag/boston-bruins/">Bruins</a></li>
	<li id="menu-item-22497525" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497525"><a href="https://www.boston.com/tag/boston-celtics/">Celtics</a></li>
	<li id="menu-item-22497520" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497520"><a href="https://www.boston.com/tag/boston-red-sox/">Red Sox</a></li>
	<li id="menu-item-22672278" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672278"><a href="https://www.boston.com/tag/new-england-revolution/">Revs</a></li>
	<li id="menu-item-22360533" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360533"><a href="https://www.boston.com/author/chad-finn/">Chad Finn</a></li>
</ul>
</li>
<li id="menu-item-22359876" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22359876"><a href="https://www.boston.com/category/weather/">Weather</a>
<ul class="sub-menu">
	<li id="menu-item-23008219" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008219"><a href="https://www.boston.com/tag/weather-maps/">Maps</a></li>
	<li id="menu-item-23008224" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008224"><a href="https://www.boston.com/tag/storms/">Storms</a></li>
	<li id="menu-item-23008199" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008199"><a href="https://www.boston.com/tag/climate-change/">Climate Change</a></li>
	<li id="menu-item-23008255" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008255"><a href="https://www.boston.com/tag/snow/">Snow</a></li>
	<li id="menu-item-22360741" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360741"><a href="https://www.boston.com/author/david-epstein/">David Epstein</a></li>
</ul>
</li>
<li id="menu-item-28296783" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-28296783"><a href="https://www.boston.com/category/love-letters/">Love Letters</a>
<ul class="sub-menu">
	<li id="menu-item-28296788" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28296788"><a href="https://www.boston.com/latest-love-letter">Latest Post</a></li>
	<li id="menu-item-28297436" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297436"><a href="https://www.boston.com/question-for-meredith/">Send Letter</a></li>
	<li id="menu-item-28297426" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297426"><a href="https://www.boston.com/meredith-goldstein/">About</a></li>
	<li id="menu-item-28297421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297421"><a href="https://www.boston.com/love-letters-podcast/">Podcast</a></li>
	<li id="menu-item-28297431" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297431"><a href="https://www.boston.com/cant-help-myself/">Book</a></li>
</ul>
</li>
<li id="menu-item-25890194" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-25890194"><a href="https://www.boston.com/category/real-estate/">Real Estate</a>
<ul class="sub-menu">
	<li id="menu-item-25890218" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890218"><a href="https://www.boston.com/tag/home-improvement/">Reno</a></li>
	<li id="menu-item-25890221" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890221"><a href="https://www.boston.com/tag/new-developments/">Developments</a></li>
	<li id="menu-item-25890196" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890196"><a href="https://www.boston.com/tag/real-estate-news/">News</a></li>
	<li id="menu-item-25890197" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890197"><a href="https://www.boston.com/tag/home-buying/">Buying</a></li>
	<li id="menu-item-25890200" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890200"><a href="https://www.boston.com/tag/open-houses/">Open Houses</a></li>
	<li id="menu-item-25890207" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890207"><a href="https://www.boston.com/tag/renting/">Renting</a></li>
	<li id="menu-item-25890215" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890215"><a href="https://www.boston.com/tag/luxury-homes/">Luxury</a></li>
</ul>
</li>
<li id="menu-item-22274495" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274495"><a href="https://www.boston.com/category/food/">Food</a>
<ul class="sub-menu">
	<li id="menu-item-22672249" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672249"><a href="https://www.boston.com/tag/restaurants/">Restaurants</a></li>
	<li id="menu-item-22672303" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672303"><a href="https://www.boston.com/tag/food-news/">News</a></li>
	<li id="menu-item-22672295" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672295"><a href="https://www.boston.com/tag/restaurant-reviews/">Reviews</a></li>
	<li id="menu-item-22672298" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672298"><a href="https://www.boston.com/tag/food-events/">Events</a></li>
	<li id="menu-item-22672251" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672251"><a href="https://www.boston.com/tag/breweries-bars/">Breweries &amp; Bars</a></li>
	<li id="menu-item-22672285" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672285"><a href="https://www.boston.com/tag/restaurant-closings/">Closings</a></li>
	<li id="menu-item-22672290" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672290"><a href="https://www.boston.com/tag/restaurant-openings/">Openings</a></li>
</ul>
</li>
<li id="menu-item-22274485" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274485"><a href="https://www.boston.com/category/culture/">Culture</a>
<ul class="sub-menu">
	<li id="menu-item-22672218" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672218"><a href="https://www.boston.com/tag/arts/">Arts</a></li>
	<li id="menu-item-22672229" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672229"><a href="https://www.boston.com/tag/entertainment/">Entertainment</a></li>
	<li id="menu-item-22672234" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672234"><a href="https://www.boston.com/tag/movies/">Movies</a></li>
	<li id="menu-item-22672235" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672235"><a href="https://www.boston.com/tag/tv/">TV</a></li>
	<li id="menu-item-24669784" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24669784"><a href="https://www.boston.com/tag/streaming/">Streaming</a></li>
	<li id="menu-item-22672238" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672238"><a href="https://www.boston.com/tag/celebs/">Celebs</a></li>
	<li id="menu-item-22672241" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672241"><a href="https://www.boston.com/tag/music/">Music</a></li>
</ul>
</li>
<li id="menu-item-23474810" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-23474810"><a href="https://www.boston.com/things-to-do/">Things To Do</a>
<ul class="sub-menu">
	<li id="menu-item-23527961" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23527961"><a href="https://www.boston.com/calendar-submission/">Submit a Listing</a></li>
</ul>
</li>
<li id="menu-item-22360356" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22360356"><a href="https://www.boston.com/category/travel/">Travel</a>
<ul class="sub-menu">
	<li id="menu-item-22993850" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22993850"><a href="https://www.boston.com/tag/visiting-boston/">Visiting Boston</a></li>
	<li id="menu-item-24976055" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24976055"><a href="https://www.boston.com/tag/cape-cod-travel/">Cape Cod</a></li>
	<li id="menu-item-22672269" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672269"><a href="https://www.boston.com/tag/new-england-travel/">New England</a></li>
	<li id="menu-item-24976054" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24976054"><a href="https://www.boston.com/tag/flights/">Flights</a></li>
	<li id="menu-item-24676057" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24676057"><a href="https://www.boston.com/tag/outdoors/">Outdoors</a></li>
	<li id="menu-item-28323763" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28323763"><a href="https://www.boston.com/tag/skiing/">Skiing</a></li>
</ul>
</li>
<li id="menu-item-24270121" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-24270121"><a href="https://www.boston.com/category/community/">Community</a>
<ul class="sub-menu">
	<li id="menu-item-28204065" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28204065"><a href="https://www.boston.com/tag/neighborhoods/">Neighborhoods</a></li>
	<li id="menu-item-24063234" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063234"><a href="https://www.boston.com/tag/tell-us/">Tell Us</a></li>
	<li id="menu-item-24063232" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063232"><a href="https://www.boston.com/tag/readers-say/">Readers Say</a></li>
	<li id="menu-item-24063239" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063239"><a href="https://www.boston.com/tag/book-club/">Book Club</a></li>
	<li id="menu-item-28991660" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28991660"><a href="https://www.boston.com/tag/wickedpedia/">Wickedpedia</a></li>
	<li id="menu-item-26377957" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-26377957"><a href="https://www.boston.com/tag/the-b-side/">The B-Side</a></li>
	<li id="menu-item-24063244" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063244"><a href="https://www.boston.com/tag/cocktail-club/">Cocktail Club</a></li>
</ul>
</li>
<li id="menu-item-22360995" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-22360995 menu-item-hamburger-only"><a href="https://www.boston.com/">Extra</a>
<ul class="sub-menu">
	<li id="menu-item-22361025" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361025 menu-item-hamburger-only"><a href="https://www.boston.com/customer-support/">Customer Support</a></li>
	<li id="menu-item-22360999" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360999 menu-item-hamburger-only"><a href="https://www.bostonglobemedia.com/">Advertise</a></li>
	<li id="menu-item-22361010" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361010 menu-item-hamburger-only"><a href="https://advertising.bostonglobemedia.com/">Classified Ads</a></li>
	<li id="menu-item-22361055" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361055 menu-item-hamburger-only"><a href="https://bostonglobemediapartners.applytojob.com/apply">Careers</a></li>
	<li id="menu-item-22361026" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361026 menu-item-hamburger-only"><a href="https://www.boston.com/contact-us/">Contact Us</a></li>
	<li id="menu-item-22361019" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361019 menu-item-hamburger-only"><a href="https://www.legacy.com/obituaries/bostonglobe/">Obituaries</a></li>
	<li id="menu-item-28173757" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28173757"><a href="https://www.boston.com/newsletter-signup/">Newsletters</a></li>
	<li id="menu-item-25927243" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25927243"><a href="/tag/massachusetts-lottery/">Mass. Lottery</a></li>
	<li id="menu-item-25927251" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25927251"><a href="https://www.boston.com/tag/powerball/">Powerball</a></li>
	<li id="menu-item-25927254" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-25927254"><a href="https://www.boston.com/tag/mega-millions/" aria-current="page">Mega Millions</a></li>
	<li id="menu-item-22361035" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361035 menu-item-hamburger-only"><a href="https://www.boston.com/horoscope/">Horoscopes</a></li>
	<li id="menu-item-22361043" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361043 menu-item-hamburger-only"><a href="https://www.boston.com/comics/">Comics</a></li>
	<li id="menu-item-22361045" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361045 menu-item-hamburger-only"><a href="https://www.boston.com/today-in-history/">Today in History</a></li>
	<li id="menu-item-26545208" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26545208"><a href="https://businesses.boston.com/">Businesses</a></li>
	<li id="menu-item-23262418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23262418 menu-item-hamburger-only"><a href="https://www.boston.com/partner-landing/partners/">Partners</a></li>
	<li id="menu-item-22360996" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360996 menu-item-hamburger-only"><a href="https://www.boston.com/fresh-start-submit-your-appeal/">Fresh Start</a></li>
</ul>
</li>
<li id="menu-item-25195153" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-25195153"><a href="https://www.boston.com/category/cars/">Cars</a>
<ul class="sub-menu">
	<li id="menu-item-25195157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25195157"><a href="https://www.boston.com/new-car-specials/">New Car Specials</a></li>
</ul>
</li>
<li id="menu-item-27955261" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27955261"><a href="https://store.boston.com">Boston.com Store</a></li>
<li id="menu-item-24512309" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24512309 menu-item-hamburger-only"><a href="https://games.boston.com/">Games</a></li>
<li id="menu-item-27617269" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27617269 menu-item-hamburger-only"><a href="https://www.boston.com/coupons">Coupons</a></li>
</ul></div>		</div>
	</div>
</nav>
						<div class="m-panel-overlay"></div>
					</div>

					<div id="site-logo" class="m-site-logo">
						
	<a class="m-site-logo__link"  href="https://www.boston.com">
		<span class="screen-reader-text">Boston.com</span>
		<img width="133" height="39" src="https://www.boston.com/wp-content/themes/bdc-2020/dist/images/boston-com-logo.png" aria-hidden="true" alt="" />
	</a>
						</div>

					<nav class="m-secondary-menu" aria-label="Utility Navigation" id="utility-navigation">
						
<ul class="m-secondary-menu__list a-list--no-style">
	<li class="m-header-search">
		<button id="js-search-button" aria-controls="header-search-form" aria-expanded="false" aria-haspopup="true" class="a-button a-button--icon a-button--icon-svg" type="button">
			<svg class="a-icon" aria-hidden="true" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#search"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#search"></use></svg>			<svg class="a-icon a-icon--close" aria-hidden="true" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close"></use></svg>			<span class="screen-reader-text">Search</span>
		</button>
		<div id="js-search-form" class="m-header-search__form" aria-hidden="true">
			
<form role="search" id="searchform--header" class="m-search-form m-search-form--header" method="get" action="https://www.boston.com/">
		<label for="search-field-search-form-1" class="screen-reader-text m-search-form__label">
		Search for:	</label>
	<input class="m-search-form__input" type="text" id="search-field-search-form-1" value="" placeholder="Search Boston.com" name="s" />
	<button class="m-search-form__button" tabindex="-1" type="submit" aria-label="Submit">
		<svg class="a-icon a-icon--no-action" aria-hidden="true" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#search"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#search"></use></svg><span class="screen-reader-text">Search Boston.com</span>	</button>
		</form>
		</div>
	</li>
			<li id="events-calender-icon" class="m-header-events">
			<a href="https://www.boston.com/things-to-do/">
				<svg class="a-icon" aria-hidden="true" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#events"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#events"></use></svg><span class="screen-reader-text">View Boston Events</span>			</a>
		</li>
	</ul>
					</nav>

				</div>
			</div>

			<div class="o-site-header__menu">

				<div class="m-grid-container m-grid-container-inline">
					
	<nav aria-label="Main Site Navigation" class="m-site-navigation m-site-navigation--left" id="site-navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
		<div class="menu-bdc-main-container"><ul id="menu-bdc-main" class="m-primary-menu a-list--no-style"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274386"><a href="https://www.boston.com/category/news/">News</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667248"><a href="https://www.boston.com/tag/local-news/">Local News</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667254"><a href="https://www.boston.com/tag/national-news/">National News</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667253"><a href="https://www.boston.com/tag/politics/">Politics</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667276"><a href="https://www.boston.com/tag/coronavirus/">COVID</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667264"><a href="https://www.boston.com/tag/crime/">Crime</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28992764"><a href="https://www.boston.com/tag/traffic/">Traffic</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22667271"><a href="https://www.boston.com/tag/jobs/">Jobs</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274480"><a href="https://www.boston.com/category/sports/">Sports</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497515"><a href="https://www.boston.com/tag/new-england-patriots/">Patriots</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497530"><a href="https://www.boston.com/tag/boston-bruins/">Bruins</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497525"><a href="https://www.boston.com/tag/boston-celtics/">Celtics</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22497520"><a href="https://www.boston.com/tag/boston-red-sox/">Red Sox</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672278"><a href="https://www.boston.com/tag/new-england-revolution/">Revs</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360533"><a href="https://www.boston.com/author/chad-finn/">Chad Finn</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22359876"><a href="https://www.boston.com/category/weather/">Weather</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008219"><a href="https://www.boston.com/tag/weather-maps/">Maps</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008224"><a href="https://www.boston.com/tag/storms/">Storms</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008199"><a href="https://www.boston.com/tag/climate-change/">Climate Change</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-23008255"><a href="https://www.boston.com/tag/snow/">Snow</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360741"><a href="https://www.boston.com/author/david-epstein/">David Epstein</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-28296783"><a href="https://www.boston.com/category/love-letters/">Love Letters</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28296788"><a href="https://www.boston.com/latest-love-letter">Latest Post</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297436"><a href="https://www.boston.com/question-for-meredith/">Send Letter</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297426"><a href="https://www.boston.com/meredith-goldstein/">About</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297421"><a href="https://www.boston.com/love-letters-podcast/">Podcast</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28297431"><a href="https://www.boston.com/cant-help-myself/">Book</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-25890194"><a href="https://www.boston.com/category/real-estate/">Real Estate</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890218"><a href="https://www.boston.com/tag/home-improvement/">Reno</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890221"><a href="https://www.boston.com/tag/new-developments/">Developments</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890196"><a href="https://www.boston.com/tag/real-estate-news/">News</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890197"><a href="https://www.boston.com/tag/home-buying/">Buying</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890200"><a href="https://www.boston.com/tag/open-houses/">Open Houses</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890207"><a href="https://www.boston.com/tag/renting/">Renting</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-25890215"><a href="https://www.boston.com/tag/luxury-homes/">Luxury</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274495"><a href="https://www.boston.com/category/food/">Food</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672249"><a href="https://www.boston.com/tag/restaurants/">Restaurants</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672303"><a href="https://www.boston.com/tag/food-news/">News</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672295"><a href="https://www.boston.com/tag/restaurant-reviews/">Reviews</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672298"><a href="https://www.boston.com/tag/food-events/">Events</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672251"><a href="https://www.boston.com/tag/breweries-bars/">Breweries &amp; Bars</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672285"><a href="https://www.boston.com/tag/restaurant-closings/">Closings</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672290"><a href="https://www.boston.com/tag/restaurant-openings/">Openings</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22274485"><a href="https://www.boston.com/category/culture/">Culture</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672218"><a href="https://www.boston.com/tag/arts/">Arts</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672229"><a href="https://www.boston.com/tag/entertainment/">Entertainment</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672234"><a href="https://www.boston.com/tag/movies/">Movies</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672235"><a href="https://www.boston.com/tag/tv/">TV</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24669784"><a href="https://www.boston.com/tag/streaming/">Streaming</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672238"><a href="https://www.boston.com/tag/celebs/">Celebs</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672241"><a href="https://www.boston.com/tag/music/">Music</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-23474810"><a href="https://www.boston.com/things-to-do/">Things To Do</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23527961"><a href="https://www.boston.com/calendar-submission/">Submit a Listing</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-22360356"><a href="https://www.boston.com/category/travel/">Travel</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22993850"><a href="https://www.boston.com/tag/visiting-boston/">Visiting Boston</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24976055"><a href="https://www.boston.com/tag/cape-cod-travel/">Cape Cod</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-22672269"><a href="https://www.boston.com/tag/new-england-travel/">New England</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24976054"><a href="https://www.boston.com/tag/flights/">Flights</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24676057"><a href="https://www.boston.com/tag/outdoors/">Outdoors</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28323763"><a href="https://www.boston.com/tag/skiing/">Skiing</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-24270121"><a href="https://www.boston.com/category/community/">Community</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28204065"><a href="https://www.boston.com/tag/neighborhoods/">Neighborhoods</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063234"><a href="https://www.boston.com/tag/tell-us/">Tell Us</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063232"><a href="https://www.boston.com/tag/readers-say/">Readers Say</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063239"><a href="https://www.boston.com/tag/book-club/">Book Club</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-28991660"><a href="https://www.boston.com/tag/wickedpedia/">Wickedpedia</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-26377957"><a href="https://www.boston.com/tag/the-b-side/">The B-Side</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-24063244"><a href="https://www.boston.com/tag/cocktail-club/">Cocktail Club</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-22360995 menu-item-hamburger-only"><a href="https://www.boston.com/">Extra</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361025 menu-item-hamburger-only"><a href="https://www.boston.com/customer-support/">Customer Support</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360999 menu-item-hamburger-only"><a href="https://www.bostonglobemedia.com/">Advertise</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361010 menu-item-hamburger-only"><a href="https://advertising.bostonglobemedia.com/">Classified Ads</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361055 menu-item-hamburger-only"><a href="https://bostonglobemediapartners.applytojob.com/apply">Careers</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361026 menu-item-hamburger-only"><a href="https://www.boston.com/contact-us/">Contact Us</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361019 menu-item-hamburger-only"><a href="https://www.legacy.com/obituaries/bostonglobe/">Obituaries</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28173757"><a href="https://www.boston.com/newsletter-signup/">Newsletters</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25927243"><a href="/tag/massachusetts-lottery/">Mass. Lottery</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25927251"><a href="https://www.boston.com/tag/powerball/">Powerball</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-25927254"><a href="https://www.boston.com/tag/mega-millions/" aria-current="page">Mega Millions</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361035 menu-item-hamburger-only"><a href="https://www.boston.com/horoscope/">Horoscopes</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361043 menu-item-hamburger-only"><a href="https://www.boston.com/comics/">Comics</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361045 menu-item-hamburger-only"><a href="https://www.boston.com/today-in-history/">Today in History</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26545208"><a href="https://businesses.boston.com/">Businesses</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23262418 menu-item-hamburger-only"><a href="https://www.boston.com/partner-landing/partners/">Partners</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360996 menu-item-hamburger-only"><a href="https://www.boston.com/fresh-start-submit-your-appeal/">Fresh Start</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-25195153"><a href="https://www.boston.com/category/cars/">Cars</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25195157"><a href="https://www.boston.com/new-car-specials/">New Car Specials</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27955261"><a href="https://store.boston.com">Boston.com Store</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24512309 menu-item-hamburger-only"><a href="https://games.boston.com/">Games</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27617269 menu-item-hamburger-only"><a href="https://www.boston.com/coupons">Coupons</a></li>
</ul></div>	</nav>

	<nav aria-label="Trending Navigation" class="m-site-navigation m-site-navigation--right m-site-navigation--trending" id="trending-navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
		<div class="menu-bdc-trending-container"><ul id="menu-bdc-trending" class="m-primary-menu m-primary-menu--trending a-list--no-style"><li id="menu-item-27400553" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27400553"><a href="https://www.boston.com/travel/travel/2024/01/31/new-englands-first-margaritaville-resort-will-open-on-cape-cod-this-summer/">Margaritaville</a></li>
<li id="menu-item-28390628" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28390628"><a href="https://www.boston.com/news/local-news/2024/01/30/diaper-spa-raising-eyebrows-atkinson-new-hampshire/">Diaper Spa</a></li>
<li id="menu-item-28458897" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28458897"><a href="https://www.boston.com/news/local-news/2024/01/31/rats-boston-in-toilets/">Rats</a></li>
<li id="menu-item-27591903" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27591903"><a href="https://www.bostonglobe.com/globe-today/?p1=BDC_Trending">Watch: Globe Today</a></li>
</ul></div>	</nav>
				</div>
			</div>

		</header>

		
		
		<main class="t-main" id="site-content" aria-label="Main Site Content">

					<div class="m-grid-container t-layout">
			<section class="t-layout__main o-special-section">
				

	<header style="background-image: url(&quot;https://bdc2020.o0bc.com/wp-content/uploads/2018/01/c810e6d106cb4568b01cedcb6271cc64-c810e6d106cb4568b01cedcb6271cc64-0-scaled-1024x576.jpg&quot;);" class="m-special-sections-header m-special-sections-header--alt m-special-sections-header__image--background">
		<div class="m-special-sections-header-container">
			<div class="m-special-sections-header-content">
									<h1 class="m-special-sections-header__title"><span class="m-special-sections-header__title--border">Mega Millions </span></h1>				
									<p class="m-special-sections-header__lead">
						Check back every Tuesday and Friday for drawings of the latest numbers. Stay up to date on the Mega Millions jackpot and related news.					</p>
							</div>

					</div>
	</header>



<div class="wp-block-columns has-2-columns is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<!-- TINBU LOTTERY CONTENT START -->
<center><table style="width:100%; max-width:600px;padding:0; margin:0;border:none"><tbody><tr><td style="width:100%; padding:0; margin:0;" align="center">
<script language="javascript">
var tb_state="MA"; // one default lottery state, for example MA. If it is set to empty: var def_state="";, the landing page will be US lottery map
var tb_links="CT;ME;NH;RI;VT"; // enter multiple neighboring states separate with semi-colon. For exmple: var links="NC;SC;VA;WV";
var tb_country="US";
var module_height="1550";
var tb_lang=0; // 0-english, 1-spanish, 2-french
var tb_ads_url='https://www.lotteryinformation.us/js/clients/bostonglobe.js';
</script>
<script language="javascript" src="https://www.lotteryinformation.us/js/setup.js"></script>
</td></tr></tbody></table></center>
<!-- TINBU LOTTERY CONTENT END -->
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h3 class="wp-block-heading" id="h-what-to-know-about-the-lottery">What to know about the lottery</h3>


<div class="accordion ">
	
<button class="accordion-header" type="button">Mega Millions</button>
<div class="accordion-content">Mega Millions drawings occur every Tuesday and Friday at 11:00 p.m.</div>


<button class="accordion-header" type="button">Powerball</button>
<div class="accordion-content"><a rel="noreferrer noopener" href="https://www.boston.com/tag/powerball/" target="_blank">Powerball</a> drawings occur every Monday, Wednesday, and Saturday at 10:59 p.m.</div>


<button class="accordion-header" type="button">Massachusetts Lottery</button>
<div class="accordion-content">The Lucky for Life drawings occur daily at 10:38 p.m.; Megabucks Doubler drawings occur every Wednesday and Saturday at 9 p.m.; Mass Cash drawings occur daily at 9 p.m.; and the Numbers Game drawings occur daily at 2 p.m and 9 p.m. Stay up to date on the <a rel="noreferrer noopener" href="https://www.boston.com/tag/massachusetts-lottery/" target="_blank">Massachusetts Lottery</a>.</div>

</div> <!-- /.accordion -->



<article aria-label="How the modern lottery was born, and fine-tuned, in New England" class="js-article-card m-single-article">
	
	
	
	<figure class="m-single-article__image">
		<a href="https://www.boston.com/news/off-beat/2023/06/08/lottery-history-new-england-massachusetts-new-hampshire/">
			<img loading="lazy" decoding="async" width="1024" height="576" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg" class="single_card_well-feature-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/06/Mass-lottery-1972-647d44a9413f1-1024x576.jpg?width=900 900w" sizes="(max-width: 1024px) 100vw, 1024px" />		</a>
	</figure>

	<div class="m-single-article__content">
					<p class="m-single-article__topic">
				<a class="a-link a-link--tag a-link--tag-transparent" href="https://www.boston.com/news/off-beat/2023/06/08/lottery-history-new-england-massachusetts-new-hampshire/">
					<span class="screen-reader-text">Topic:</span>
					LOTTO HISTORY				</a>
			</p>
		
					<h3 class="m-single-article__headline">
				<a class="js-article-card-link m-single-article__link" href="https://www.boston.com/news/off-beat/2023/06/08/lottery-history-new-england-massachusetts-new-hampshire/">
					How the modern lottery was born, and fine-tuned, in New England				</a>
			</h3>
		
	</div>

</article>



<section  aria-label="Lottery news " class="o-featured-content o-featured-content--a m-grid ">
	
			<h3 class="o-featured-content__title m-grid-span-full">
							<a href="https://www.boston.com/tag/massachusetts-lottery/">
					Lottery news 				</a>
					</h3>
	
		<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/community/readers-say/is-the-new-50-scratch-ticket-worth-it-readers-say-yes/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2024/01/s3___bgmp-arc_arc-feeds_generic-photos_to-arc_wiggs-_Lottery_05-65a009d0ed4aa-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2024/01/s3___bgmp-arc_arc-feeds_generic-photos_to-arc_wiggs-_Lottery_05-65a009d0ed4aa-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2024/01/s3___bgmp-arc_arc-feeds_generic-photos_to-arc_wiggs-_Lottery_05-65a009d0ed4aa-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2024/01/s3___bgmp-arc_arc-feeds_generic-photos_to-arc_wiggs-_Lottery_05-65a009d0ed4aa-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						&#039;LIFETIME MILLIONS&#039;					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/community/readers-say/is-the-new-50-scratch-ticket-worth-it-readers-say-yes/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						Is the new $50 scratch ticket worth it? Readers say yes.					</a>
				</h2>
							</div>
		</div>
	</div>
			<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/community/tell-us/mass-state-lottery-to-release-lifetime-millions-scratch-ticket/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2024/01/lotto-web-no-coin-659d6feae429f-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2024/01/lotto-web-no-coin-659d6feae429f-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2024/01/lotto-web-no-coin-659d6feae429f-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2024/01/lotto-web-no-coin-659d6feae429f-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						🤑🤑🤑					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/community/tell-us/mass-state-lottery-to-release-lifetime-millions-scratch-ticket/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						Mass. State Lottery to release &#039;Lifetime Millions&#039; scratch ticket					</a>
				</h2>
							</div>
		</div>
	</div>
			<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/news/local-news/2023/12/04/25-million-scratch-ticket-grand-prize-west-roxbury-hyde-park-boston/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/12/12-01-2023-Desiree-Fortini-Craft-25M-on-Billion-Dollar-Extravaganza-656df864a1f29-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/12/12-01-2023-Desiree-Fortini-Craft-25M-on-Billion-Dollar-Extravaganza-656df864a1f29-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2023/12/12-01-2023-Desiree-Fortini-Craft-25M-on-Billion-Dollar-Extravaganza-656df864a1f29-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2023/12/12-01-2023-Desiree-Fortini-Craft-25M-on-Billion-Dollar-Extravaganza-656df864a1f29-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						LOTTERY					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/news/local-news/2023/12/04/25-million-scratch-ticket-grand-prize-west-roxbury-hyde-park-boston/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						Final $25 million scratch ticket grand prize sold in West Roxbury					</a>
				</h2>
							</div>
		</div>
	</div>
			<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/news/local-news/2023/12/01/anonymous-person-cashes-in-on-25-million-scratch-ticket-sold-in-fall-river/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/12/11-29-2023-Percy-Law-Group-2023-Lottery-Trust-19-25M-on-Billion-Dollar-Extravaganza-656a47357c8f8-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/12/11-29-2023-Percy-Law-Group-2023-Lottery-Trust-19-25M-on-Billion-Dollar-Extravaganza-656a47357c8f8-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2023/12/11-29-2023-Percy-Law-Group-2023-Lottery-Trust-19-25M-on-Billion-Dollar-Extravaganza-656a47357c8f8-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2023/12/11-29-2023-Percy-Law-Group-2023-Lottery-Trust-19-25M-on-Billion-Dollar-Extravaganza-656a47357c8f8-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						$$$					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/news/local-news/2023/12/01/anonymous-person-cashes-in-on-25-million-scratch-ticket-sold-in-fall-river/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						Anonymous person cashes in on $25 million scratch ticket sold in Fall River					</a>
				</h2>
							</div>
		</div>
	</div>
			<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/news/local-news/2023/11/22/lottery-winner-sues-mother-of-child-prize-money-identity/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2022/09/https___assets.bwbx_.io_images_users_iqjWHBFdfxIU_ixQC31MULKjA_v0_piFq5T3pJF0qzS8rF9LjsWaQ_-1x-1-633587945e93b-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="alt = money stock photo" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2022/09/https___assets.bwbx_.io_images_users_iqjWHBFdfxIU_ixQC31MULKjA_v0_piFq5T3pJF0qzS8rF9LjsWaQ_-1x-1-633587945e93b-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2022/09/https___assets.bwbx_.io_images_users_iqjWHBFdfxIU_ixQC31MULKjA_v0_piFq5T3pJF0qzS8rF9LjsWaQ_-1x-1-633587945e93b-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2022/09/https___assets.bwbx_.io_images_users_iqjWHBFdfxIU_ixQC31MULKjA_v0_piFq5T3pJF0qzS8rF9LjsWaQ_-1x-1-633587945e93b-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						Local News					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/news/local-news/2023/11/22/lottery-winner-sues-mother-of-child-prize-money-identity/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						$1.35 billion Mega Millions jackpot winner sues mother of his child, saying she told his relatives about his prize money					</a>
				</h2>
							</div>
		</div>
	</div>
			<div class="m-grid-span-4 js-article-list-feature-well " aria-hidden="false">
		<div
			class="js-article-card o-featured-content__item m-article-list-feature    ">
			<div class="m-article-list-feature__image-container">
												<a href="https://www.boston.com/news/health/2023/11/09/buy-tickets-massachusetts-lottery-app-jackpocket-online-gambling-public-health/">
				<img decoding="async" width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/11/Screenshot_20231109_195756_Jackpocket-654d80b5720ac-150x150.jpg" class="o-featured-content__main-image m-article-list-feature__image wp-post-image wp-post-image" alt="" srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/11/Screenshot_20231109_195756_Jackpocket-654d80b5720ac-150x150.jpg 150w,https://bdc2020.o0bc.com/wp-content/uploads/2023/11/Screenshot_20231109_195756_Jackpocket-654d80b5720ac-150x150.jpg 300w,https://bdc2020.o0bc.com/wp-content/uploads/2023/11/Screenshot_20231109_195756_Jackpocket-654d80b5720ac-768x432.jpg 768w" sizes="(min-width: 768px) 768px, 150px" loading="eager" />				</a>
			</div>
			<div class="o-featured-content__item-content m-article-list-feature__content">
													<span class="o-featured-content__topic m-article-list-feature__topic">
						Online Gambling					</span>
												<h2 class="o-featured-content__headline m-article-list-feature__headline">
					<a href="https://www.boston.com/news/health/2023/11/09/buy-tickets-massachusetts-lottery-app-jackpocket-online-gambling-public-health/" class="js-article-card-link a-article__link o-featured-content__link m-article-list-feature__link">
						You can now buy Mass. Lottery tickets through a 3rd-party app. Here’s what to know.					</a>
				</h2>
							</div>
		</div>
	</div>
		
	
</section>
</div>
</div>



<hr class="wp-block-separator has-alpha-channel-opacity is-style-grey-pattern"/>



<h2 class="wp-block-heading" id="h-more-in-mega-millions">More in Mega Millions</h2>
			</section>
		</div>
	
	<div class="m-grid-container t-layout t-layout--with-sidebar">
		<section class="t-layout__main">

			
			<ul aria-atomic="false" aria-relevant="additions text" aria-busy="false" aria-live="polite" class="a-list--no-style m-article-list m-article-list--has-images m-article-list--is-archive js-load-more-container">
			
<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/08/09/a-mega-millions-player-in-florida-wins-1-58-billion-jackpot-the-third-largest-prize-in-us-history/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_84055-64d1c3790aea0-150x150.jpg" class="m-article-list__image" alt="Lottery forms on display at a store in Miami." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Lottery </p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/08/09/a-mega-millions-player-in-florida-wins-1-58-billion-jackpot-the-third-largest-prize-in-us-history/" class="m-article-list__link" >
				A Mega Millions player in Florida wins $1.58 billion jackpot, the third largest prize in US history			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">August 9, 2023 | 8:07 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/08/07/1-55-billion-mega-millions-prize-balloons-lottery-drawings/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Lottery_Jackpot_98958-64d1356fb33c9-150x150.jpg" class="m-article-list__image" alt="An electronic sign on a scratch off dispenser." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Lottery </p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/08/07/1-55-billion-mega-millions-prize-balloons-lottery-drawings/" class="m-article-list__link" >
				$1.55 billion Mega Millions prize balloons as 31 drawings pass without a winner			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">August 7, 2023 | 2:43 pm</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/08/02/mega-millions-jackpot-climbs-to-1-25-billion-after-no-one-hits-the-top-prize/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-768x432.png"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/Mega-millions-64ca48692619c-150x150.png" class="m-article-list__image" alt="Several orange Mega Millions lottery tickets are pictured." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Lottery</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/08/02/mega-millions-jackpot-climbs-to-1-25-billion-after-no-one-hits-the-top-prize/" class="m-article-list__link" >
				Mega Millions jackpot climbs to $1.25 billion after no one hits the top prize			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">August 2, 2023 | 8:07 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/08/01/1-billion-mega-millions-jackpot-what-to-know/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/08/CORRECTION_Mega_Millions_Jackpot_30567-64c926bf08002-150x150.jpg" class="m-article-list__image" alt="" loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">💰💰💰</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/08/01/1-billion-mega-millions-jackpot-what-to-know/" class="m-article-list__link" >
				$1.05 billion Mega Millions jackpot drawing offers shot at 7th-largest prize ever			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">August 1, 2023 | 12:26 pm</time>
	</div>
</li>
							<div class="m-advert">
								<div class="m-content-advert-wrap">
									<span class="m-content-advert-title">
										Advertisement									</span>
									<div id="js-advert--stream1" class="m-advert m-advert--stream1  "><div class="m-advert__container"><div id="ad_stream1"><script type="type/javascript">googletag.cmd.push(function() { googletag.display("ad_stream1") })</script></div></div></div>								</div>
							</div>
							
<li class="m-article-list__item">
			<a href="https://www.boston.com/news/local-news/2023/07/27/massachusetts-lottery-revenues-all-time-high/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-768x432.png"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery-64c25ed41da1c-150x150.png" class="m-article-list__image" alt="Lottery sign reading $1 billion in red lights." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Massachusetts lottery</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/local-news/2023/07/27/massachusetts-lottery-revenues-all-time-high/" class="m-article-list__link" >
				Lottery revenues are at an all-time high. Here&#039;s where the money&#039;s going.			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">July 27, 2023 | 10:05 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/07/26/mega-millions-lottery-jackpot-rises-910-million/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Lottery_Jackpot_56330-64bfc79d0754a-150x150.jpg" class="m-article-list__image" alt="A Mega Millions wagering slip in someone&#039;s hand." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Lottery </p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/07/26/mega-millions-lottery-jackpot-rises-910-million/" class="m-article-list__link" >
				Mega Millions jackpot rises to $910 million after no one wins top prize			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">July 26, 2023 | 8:05 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/national-news/2023/07/21/attention-turns-to-mega-millions-after-california-store-sells-winning-powerball-ticket/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/07/Powerball_Jackpot_16851-64ba279a4b4b3-150x150.jpg" class="m-article-list__image" alt="" loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">$$$</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/national-news/2023/07/21/attention-turns-to-mega-millions-after-california-store-sells-winning-powerball-ticket/" class="m-article-list__link" >
				Attention turns to Mega Millions after California store sells winning Powerball ticket			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">July 21, 2023 | 9:42 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/local-news/2023/03/03/winner-of-33-million-mega-millions-jackpot-ticket-sold-in-belchertown-claims-prize/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/03/Q7K3N52VZBGDHN2GWSMLB46NLU-1-640210fe15d0d-150x150.jpg" class="m-article-list__image" alt="David M. Lipshutz, representing the Skylark Group Trust of Wellesley, stands with a Mega Millions check for $17 million" loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">💰 💰 💰</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/local-news/2023/03/03/winner-of-33-million-mega-millions-jackpot-ticket-sold-in-belchertown-claims-prize/" class="m-article-list__link" >
				Winner of $33 million Mega Millions jackpot ticket sold in Belchertown claims prize			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">March 3, 2023 | 11:06 am</time>
	</div>
</li>
							<div class="m-advert">
								<div class="m-content-advert-wrap">
									<span class="m-content-advert-title">
										Advertisement									</span>
									<div id="js-advert--stream2" class="m-advert m-advert--stream2  "><div class="m-advert__container"><div id="ad_stream2"><script type="type/javascript">googletag.cmd.push(function() { googletag.display("ad_stream2") })</script></div></div></div>								</div>
							</div>
							
<li class="m-article-list__item">
			<a href="https://www.boston.com/news/local-news/2023/02/01/31-million-winning-mega-millions-ticket-sold-woburn/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/02/Mega_Millions_Jackpot_58471-63da84b71abcd-150x150.jpg" class="m-article-list__image" alt="Mega Millions." loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">💰💰💰</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/local-news/2023/02/01/31-million-winning-mega-millions-ticket-sold-woburn/" class="m-article-list__link" >
				Someone who bought a Mega Millions ticket in Woburn won the $31 million jackpot			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">February 1, 2023 | 10:34 am</time>
	</div>
</li>

<li class="m-article-list__item">
			<a href="https://www.boston.com/news/business/2023/01/26/a-western-mass-town-just-saw-the-states-first-mega-millions-jackpot-since-2012/">
		
			<picture>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg"
						sizes="(max-width: 768px), 200px"
						media="(max-width: 768px)"
					>
									<source
						srcset="https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=200 200w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=300 300w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=400 400w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=500 500w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=600 600w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=700 700w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=800 800w, https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg?width=900 900w"
						src="https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-768x432.jpg"
						sizes="(min-width: 768px), 33.3vw"
						media="(min-width: 768px)"
					>
								<img width="150" height="150" src="https://bdc2020.o0bc.com/wp-content/uploads/2023/01/Mega_Millions_Jackpot_58471-63d28eeb80d54-150x150.jpg" class="m-article-list__image" alt="" loading="lazy" />			</picture>
					</a>
	
	<!-- Should be the topic/tag of related article -->
	<div class="m-article-list__content">
					<p class="m-article-list__topic m-article-list__topic--no-hover">Jackpot</p>
		
		<h2  class="m-article-list__headline">
			<a href="https://www.boston.com/news/business/2023/01/26/a-western-mass-town-just-saw-the-states-first-mega-millions-jackpot-since-2012/" class="m-article-list__link" >
				A Western Mass. town just saw the state&#8217;s first Mega Millions jackpot since 2012			</a>
		</h2>

		<time datetime="" class="m-article-list__date a-hide-mobile">January 26, 2023 | 9:51 am</time>
	</div>
</li>
				</ul>
						<div class="m-pagination-links">
			<div class="m-pagination-links__older">
				<a href="https://www.boston.com/tag/mega-millions/page/2/" >Older entries</a>			</div>

			<div class="m-pagination-links__newer">
							</div>
		</div>
		
		<div class="load-more">
			<button id="load-more"
				class="a-button a-button--primary"
				data-taxonomy="post_tag"
				data-term="13381"
				data-search-query=""
				data-author=""
				data-orderby=""
				data-next-page="2"
				data-redudant-ids="27659758,29000476,28982421,28696140,28671028,28599511,28517555,27984192,27981025,27952759,27945503,27920603,27906666,27888384,27092046,26829678,26791471"
				data-ad-count="2"
				data-ad-term="mega-millions"
			>
			Load More			</button>
		</div>

		<input type="hidden" id="_wpnonce" name="_wpnonce" value="920196c4d0" /><input type="hidden" name="_wp_http_referer" value="/tag/mega-millions/" />
		
		</section>

					<div class="t-layout__sidebar" id="sidebar-archive">
				
<div class="m-widget">
	<div class="m-advert m-advert--sidebar m-advert--600">
		<div class="m-content-advert-wrap">
			<div id="js-advert--sectionfront1" class="m-advert m-advert--sectionfront1  "><div class="m-advert__container"><div id="ad_sectionfront1"><script type="type/javascript">googletag.cmd.push(function() { googletag.display("ad_sectionfront1") })</script></div></div></div>		</div>
	</div>
</div>

<div class="m-widget">
	
<div id="most-popular-posts" class="m-widget m-numbered-post-list">
	<header class="m-numbered-post-list__header">
		<h3 class="m-numbered-post-list__header-title">
			Most Popular		</h3>
	</header>
	<div class="m-numbered-post-list__posts">
		
<article aria-label="A new ‘Diaper Spa’ is raising eyebrows in New Hampshire" id="m-numbered-post-list-1" class="m-numbered-post-list__post">
	<div class="m-numbered-post-list__image" data-count="1">
		<a class="m-numbered-post-list__image-link" href="https://boston.com/news/local-news/2024/01/30/diaper-spa-raising-eyebrows-atkinson-new-hampshire/">
			<img src="//bdc2020.o0bc.com/wp-content/uploads/2024/01/Screenshot-2024-01-30-at-12.22.13 PM-65b93e80f20f2-768x432.jpg?width=190" loading="lazy" width="95" height="95" alt="A new ‘Diaper Spa’ is raising eyebrows in New Hampshire" />
		</a>
	</div>

	<h4 class="m-numbered-post-list__title" >
		<a class="m-numbered-post-list__link" href="https://boston.com/news/local-news/2024/01/30/diaper-spa-raising-eyebrows-atkinson-new-hampshire/">
			<span class="screen-reader-text">
				Visit 			</span>
			A new ‘Diaper Spa’ is raising eyebrows in New Hampshire		</a>
	</h4>
</article>

<article aria-label="Court doc: Karen Read had ‘close communication’ with Turtleboy" id="m-numbered-post-list-2" class="m-numbered-post-list__post">
	<div class="m-numbered-post-list__image" data-count="2">
		<a class="m-numbered-post-list__image-link" href="https://boston.com/news/crime/2024/01/31/court-doc-karen-read-had-close-communication-with-turtleboy-blogger/">
			<img src="//bdc2020.o0bc.com/wp-content/uploads/2024/01/Y3CG4WS4WZPPACRGZCSKU7INB4-65ba9806ed9a4-768x432.jpg?width=190" loading="lazy" width="95" height="95" alt="Court doc: Karen Read had ‘close communication’ with Turtleboy" />
		</a>
	</div>

	<h4 class="m-numbered-post-list__title" >
		<a class="m-numbered-post-list__link" href="https://boston.com/news/crime/2024/01/31/court-doc-karen-read-had-close-communication-with-turtleboy-blogger/">
			<span class="screen-reader-text">
				Visit 			</span>
			Court doc: Karen Read had ‘close communication’ with Turtleboy		</a>
	</h4>
</article>

<article aria-label="Boston doctor found not guilty on charge of lewd acts near a 14-year-old girl on an airplane" id="m-numbered-post-list-3" class="m-numbered-post-list__post">
	<div class="m-numbered-post-list__image" data-count="3">
		<a class="m-numbered-post-list__image-link" href="https://boston.com/news/local-news/2024/01/31/boston-doctor-found-not-guilty-on-charge-of-lewd-acts-near-a-14-year-old-girl-on-an-airplane/">
			<img src="//bdc2020.o0bc.com/wp-content/uploads/2024/01/Screenshot-2024-01-31-at-2.32.51 PM-65baae88f33c8-768x432.jpg?width=190" loading="lazy" width="95" height="95" alt="Boston doctor found not guilty on charge of lewd acts near a 14-year-old girl on an airplane" />
		</a>
	</div>

	<h4 class="m-numbered-post-list__title" >
		<a class="m-numbered-post-list__link" href="https://boston.com/news/local-news/2024/01/31/boston-doctor-found-not-guilty-on-charge-of-lewd-acts-near-a-14-year-old-girl-on-an-airplane/">
			<span class="screen-reader-text">
				Visit 			</span>
			Boston doctor found not guilty on charge of lewd acts near a 14-year-old girl on an airplane		</a>
	</h4>
</article>

<article aria-label="Tom Brady Sr. said Bill Belichick has &#039;horrible&#039; interpersonal skills" id="m-numbered-post-list-4" class="m-numbered-post-list__post">
	<div class="m-numbered-post-list__image" data-count="4">
		<a class="m-numbered-post-list__image-link" href="https://boston.com/sports/new-england-patriots/2024/01/31/tom-brady-sr-bill-belichick-still-an-elite-coach-horrible-interpersonal-skills/">
			<img src="//bdc2020.o0bc.com/wp-content/uploads/2024/01/S5KHJ2AO7UI6VIHLEBRHFUSS7U-65babb7dec3d9-768x432.jpeg?width=190" loading="lazy" width="95" height="95" alt="Tom Brady Sr. said Bill Belichick has &#039;horrible&#039; interpersonal skills" />
		</a>
	</div>

	<h4 class="m-numbered-post-list__title" >
		<a class="m-numbered-post-list__link" href="https://boston.com/sports/new-england-patriots/2024/01/31/tom-brady-sr-bill-belichick-still-an-elite-coach-horrible-interpersonal-skills/">
			<span class="screen-reader-text">
				Visit 			</span>
			Tom Brady Sr. said Bill Belichick has &#039;horrible&#039; interpersonal skills		</a>
	</h4>
</article>

<article aria-label="Super Bowl 2024 commercials list: Watch every big game ad" id="m-numbered-post-list-5" class="m-numbered-post-list__post">
	<div class="m-numbered-post-list__image" data-count="5">
		<a class="m-numbered-post-list__image-link" href="https://boston.com/sports/tv/2024/01/31/super-bowl-2024-commercials-list/">
			<img src="//bdc2020.o0bc.com/wp-content/uploads/2024/01/Super-Bowl-2024-commercials-list-65ba9849e3e31-768x432.jpg?width=190" loading="lazy" width="95" height="95" alt="Super Bowl 2024 commercials list: Watch every big game ad" />
		</a>
	</div>

	<h4 class="m-numbered-post-list__title" >
		<a class="m-numbered-post-list__link" href="https://boston.com/sports/tv/2024/01/31/super-bowl-2024-commercials-list/">
			<span class="screen-reader-text">
				Visit 			</span>
			Super Bowl 2024 commercials list: Watch every big game ad		</a>
	</h4>
</article>
	</div>
</div>


</div>



<div class="m-widget">
	<div class="m-advert m-advert--sidebar">
		<div class="m-content-advert-wrap">
			<div id="js-advert--sectionfront2" class="m-advert m-advert--sectionfront2  m-advert--sticky"><div class="m-advert__container"><div id="ad_sectionfront2"><script type="type/javascript">googletag.cmd.push(function() { googletag.display("ad_sectionfront2") })</script></div></div></div>		</div>
	</div>
</div>
			</div>
			</div>

	<!-- Page Content -->
	</main>
	<footer id="site-footer" class="o-site-footer" aria-label="Site Footer">
		<div class="m-grid-container">
			<section class="o-site-footer__meta m-grid">
				<div class="o-site-footer__social m-grid-span-4">
					
<ul class="a-list--no-style m-social-share m-social-share--block m-social-share--footer">
	<li class="m-social-share__item">
		<a  href="https://www.instagram.com/boston/" class="m-social-share__link" rel="nopenner noreferrer" target="_blank">
			<svg class="a-icon a-icon--social" aria-hidden="true" width="21" height="17"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#instagram-white"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#instagram-white"></use></svg><span class="screen-reader-text">Follow Boston.com on Instagram (Opens in a New Tab)</span>		</a>
	</li>
	<li class="m-social-share__item">
		<a href="https://twitter.com/intent/user?screen_name=BostonDotCom" class="m-social-share__link" rel="nopenner noreferrer" target="_blank">
			<svg class="a-icon a-icon--social" aria-hidden="true" width="21" height="17"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#twitter-white"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#twitter-white"></use></svg><span class="screen-reader-text">Follow Boston.com on Twitter (Opens in a New Tab)</span>		</a>
	</li>
	<li class="m-social-share__item">
		<a href="https://www.facebook.com/boston" class="m-social-share__link" rel="nopenner noreferrer" target="_blank">
			<svg class="a-icon a-icon--social" aria-hidden="true" width="11" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#facebook-white"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#facebook-white"></use></svg><span class="screen-reader-text">Like Boston.com on Facebook (Opens in a New Tab)</span>		</a>
	</li>
</ul>
				</div>

				<div class="o-site-footer__colophon m-site-colophon m-grid-span-4">
					<p class="m-site-colophon__text">&copy;2024 Boston Globe Media Partners, LLC</p>
				</div>

				<div class="o-site-footer__signup m-grid-span-4">
					<div class="o-site-footer__signup-divider a-pattern-divider a-pattern-divider--full-width a-pattern-divider--red a-hide-desktop"></div>
					
<form
	id="newsletter-form-2"
	class="m-form-newsletter m-form-newsletter--horizontal"
	action=""
	method=""
	data-mailchimp-list-ids=""
>
			<h4 class="m-form-newsletter__heading">
			Sign up for our daily newsletter 		</h4>
		<fieldset form="newsletter-form">
		<legend class="screen-reader-text">
			Submit your email		</legend>

		<label class="m-form-newsletter__label" for="email-form-2">
			<span class="screen-reader-text">Enter your email address</span>
							<input class="a-input m-form-newsletter__input" type="email" id="email-form-2" name="email" placeholder="Email Address" aria-required="true" required>
						<p class="m-form-newsletter-error"></p>
		</label>

				<div id="email_hp_wrap" style="display: none" aria-hidden="true">
			<input
				id="name_3"
				name="name_3"
				type="text"
				value=""
				autocomplete="nope"
				tabindex="-1"
			>
		</div>

		<button type="submit" name="submit" class="a-button a-button--primary m-form-newsletter__button">
			Subscribe		</button>
	</fieldset>
</form>
				</div>

									<div class="o-site-footer__menu m-grid-span-12">
						<nav class="o-site-footer__nav m-secondary-menu m-secondary-menu--footer a-list--no-style" aria-label="Footer Navigation">
							<div class="menu-footer-container"><ul id="footer-menu" class="o-site-footer__menu-list m-secondary-menu__list a-list--no-style"><li id="menu-item-22362950" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22362950"><a href="https://www.boston.com/privacy-policy">Do not sell my data</a></li>
<li id="menu-item-22362921" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22362921"><a href="https://www.boston.com/privacy-policy">Privacy Policy</a></li>
<li id="menu-item-26585081" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26585081"><a href="https://www.boston.com/online-gambling-content-disclaimer">GAMBLING DISCLAIMER</a></li>
<li id="menu-item-26304418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26304418"><a href="https://www.bostonglobemedia.com/advertise/">ADVERTISE</a></li>
<li id="menu-item-22362900" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22362900"><a href="https://www.boston.com/terms-of-service">Terms of Service</a></li>
<li id="menu-item-22362926" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22362926"><a href="https://www.boston.com/member-agreement">Member Agreement</a></li>
<li id="menu-item-26304411" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26304411"><a href="https://www.boston.com/contact-us/">CONTACT US</a></li>
<li id="menu-item-23287074" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23287074"><a href="https://bostonglobemediapartners.applytojob.com/apply">CAREERS</a></li>
<li id="menu-item-27836187" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27836187"><a href="https://www.boston.com/coupons">Coupons</a></li>
<li id="menu-item-28837199" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28837199"><a href="https://www.boston.com/html-sitemap/">Site Map</a></li>
</ul></div>						</nav>
					</div>
				
			</section>
		</div>
	</footer>

	<!-- Site Modal -->
	
<div id="site-modal" class="o-site-modal" aria-hidden="true">
	<div class="o-site-modal__overlay" tabindex="-1" data-a11y-dialog-hide></div>

	<div role="dialog" class="o-site-modal__content" aria-labelledby="m-site-modal-logo" aria-describedby="modal-description">

		<button data-a11y-dialog-hide="site-modal" class="a-button o-site-modal__close" aria-label="Close this dialog window">
			<svg class="a-icon" aria-hidden="true" width="17" height="17"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close-symbol"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#close-symbol"></use></svg><span class="screen-reader-text">Close Modal</span>		</button>

		<h3 id="m-site-modal-logo" class="m-site-logo">
			<span class="screen-reader-text">
				Boston.com Newsletter Signup			</span>
			<svg class="a-icon" aria-hidden="true" width="200" height="50"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#logo"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.boston.com/wp-content/themes/bdc-2020/assets/symbol-defs.svg#logo"></use></svg><span class="screen-reader-text">Boston.com Logo</span>		</h3>

		<p id="modal-description" class="o-site-modal__description">
			Stay up to date with everything Boston. Receive the latest news and breaking updates, straight from our newsroom to your inbox.		</p>

		<!-- form id should match fieldset 'form' attribute -->
		
<form
	id="newsletter-form-4"
	class="m-form-newsletter m-form-newsletter--vertical"
	action=""
	method=""
	data-mailchimp-list-ids=""
>
			<h4 class="m-form-newsletter__heading">
			Enter your email address		</h4>
		<fieldset form="newsletter-form">
		<legend class="screen-reader-text">
			Submit your email		</legend>

		<label class="m-form-newsletter__label" for="email-form-4">
			<span class="screen-reader-text">Enter your email address</span>
							<input class="a-input m-form-newsletter__input" type="email" id="email-form-4" name="email" placeholder="Email Address" aria-required="true" required>
						<p class="m-form-newsletter-error"></p>
		</label>

				<div id="email_hp_wrap" style="display: none" aria-hidden="true">
			<input
				id="name_5"
				name="name_5"
				type="text"
				value=""
				autocomplete="nope"
				tabindex="-1"
			>
		</div>

		<button type="submit" name="submit" class="a-button a-button--primary m-form-newsletter__button">
			Subscribe		</button>
	</fieldset>
</form>

		<button type="button" name="cancel" class="a-button a-button--is-link a-c-red a-uppercase" data-a11y-dialog-hide="site-modal" >
			No thanks				<span class="screen-reader-text">
					 - Closes Modal window				</span>
			</button>
	</div>
</div>


	<!-- / Site Modal -->

	
	<script type="text/javascript" id="ad-refresh-callback">

		/**
		 * Refresh the OpenWrap/Amazon ads.
		 *
		 * @param array slotsToRefresh The slots due to be refreshed.
		 */
		function refreshOpenWrapAds( slotsToRefresh ) {
			// Don't refresh "out of page" ads.
			const adsToNotRefresh = ['oosvideo', 'presentedby', 'outofpage'];
			slotsToRefresh = slotsToRefresh.filter((slot) => !adsToNotRefresh.includes(slot.getSlotElementId()))
			if (!slotsToRefresh.length) {
				return
			}
			
			// Remove the previous bids from GPT.
			PWT.removeKeyValuePairsFromGPTSlots( slotsToRefresh );
			
			// Add targeting Refresh=true to ads that are being refreshed.
			slotsToRefresh.forEach((slot) => slot.setTargeting('refresh', 'true'))


			/* 
			* The above code is checking if the Onetrust script is active or not. 
			* If it is active, it checks if the user has given consent for the country code or not. 
			* If the user has given consent, it will display the ads. 
			*/

			apstag.setDisplayBids();
			
			PWT.a9_BidsReceived = PWT.ow_BidsReceived = false;

			const
				amazonSlotsToRefresh    = formatSlotsToAmazon( slotsToRefresh ),
				a9Promise               = fetchAmazonBids( amazonSlotsToRefresh ),
				pubmaticPromise         = fetchPubmaticBids( slotsToRefresh );

			Promise.allSettled([a9Promise, pubmaticPromise]).then(results => {
				const allBiddersPromisesRejected = results.every(result => result.status === 'rejected');

				if (!allBiddersPromisesRejected) {
					refreshAds(slotsToRefresh);
				}
			});
		}

		/**
		 * Converts the slots in the format required by Amazon.
		 *
		 * @param array slots The slots due to be refreshed.
		 */
		function formatSlotsToAmazon( slots ) {
			const amazonSlotsToRefresh = [];

			for (let index = 0; index < slots.length; index++) {
				const slotItem		= slots[index], element = {}, slotSizes = [], size = [];
				element.slotID   	= slots[index].getSlotElementId();
				element.slotName 	= slots[index].getAdUnitPath();

				if ( slots[index].getSizes() ) {
					sizes = slots[index].getSizes();
					for (let indexJ = 0; indexJ < sizes.length; indexJ++) {
						size[indexJ] = [];
						size[indexJ].push(sizes[indexJ].width, sizes[indexJ].height);
						slotSizes.push(size[indexJ]);
					}
				}

				element.sizes = slotSizes;
				amazonSlotsToRefresh.push(element);
			}

			return amazonSlotsToRefresh;
		}

		// Gets bids from Amazon for the provided adSlots.
		fetchAmazonBids = ( slots ) => {
			return new Promise( ((resolve) => {
				try {
					apstag.fetchBids({
						slots: slots
					}, ( bids ) => {
						apstag.setDisplayBids();
						PWT.a9_BidsReceived = true;
						resolve( bids );
					});
				} catch ( e ) {
					resolve( null );
				}
			}) );
		}

		// Gets bids from PubMatic for the provided adSlots.
		fetchPubmaticBids = ( slots ) => {
    		PWT.removeKeyValuePairsFromGPTSlots( slots );
    		return new Promise( ( resolve ) => {
				try {
					PWT.requestBids(
					PWT.generateConfForGPT( slots ),
					( adUnitsArray ) => {
						PWT.addKeyValuePairsToGPTSlots( adUnitsArray );
						PWT.ow_BidsReceived = true;
						resolve( adUnitsArray );
					},
					);
				} catch (e) {
					resolve( null );
				}
    		} );
  		}

		// Displays the adSlot provided using googletag.
		displayAdSlots = ( slots ) => {
			return new Promise( (( resolve ) => {
				try {
					for ( let i = 0; i < slots.length; i++ ) {
						googletag.display( slots[i] );
					}
					resolve( slots );
				} catch ( e ) {
					resolve( null );
				}
			}) );

		}

		// Refreshes the adSlots provided.
		refreshAds = ( slots ) => {
			PWT.initAdserverSet = true;
			displayAdSlots( slots ).then(
				slots => {
					googletag.pubads().refresh( slots );
				}
			)
		}

	</script>
	<script type="text/javascript">
!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
	'UA', {
		appKey: 'XJoCGW0GRDietgEhEXpsJg',
		token: 'MTpYSm9DR1cwR1JEaWV0Z0VoRVhwc0pnOndCZ3RiWnpwQnFXakEtckxkQnlyTkE1NmRDaWxSMm5vNUFQNkRRZHFjN28',
				websitePushId: 'web.boston.com.remix',
						secureIframeUrl: 'https://www.boston.com/secure-bridge.html',		vapidPublicKey: 'BHRLCpgLazdtSrznUKdHmTSjqjEg5PjeRqWDX2g1ezJ40WUFkKMeifMIXqjWC2OQlNoA9KYbl47GloxsgLdbYtE='
	});
</script>
				<script>
		( function ( body ) {
			'use strict';
			body.className = body.className.replace( /\btribe-no-js\b/, 'tribe-js' );
		} )( document.body );
		</script>
			<script type="module">
		var consent = 'grant';
		/* The above code is parsing the JSON data from the local storage and storing it in a variable. */
		
			const onetrustStorageConsent = JSON.parse(localStorage.getItem( 'consent_one_trust_bdc' ) );
			/* Checking to see if the user has consented to the use of cookies.
			* If they have not, it is deleting the cookie.
			* This will comment for now, until further notice.
			*/
			//if ( onetrustStorageConsent.C0002 === false ) {
			//	document.cookie = '_fbp=;expires=Thu, 01 Jan 2010 00:00:00 UTC; path=/; domain=.boston.com';
			//}
			/* Checking if the user has given consent for the cookie C0002.
			* If the user has given consent, the variable consent will be set to 'grant'.
			* If the user has not given consent,the variable consent will be set to 'revoke'.
			* Documentation https://developers.facebook.com/docs/meta-pixel/implementation/gdpr
			*/
			if ( ( onetrustStorageConsent !== null ) && (onetrustStorageConsent.C0002 !== true ) ) {
				consent = 'revoke';
			}

				!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function()
		{n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}
		;if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');
		fbq('consent', consent);
		fbq('init', '813236348753005');
		fbq('track', "PageView");
	</script>
	<noscript><img height="1" width="1" class="hidden"
	src="https://www.facebook.com/tr?id=813236348753005&ev=PageView&noscript=1"
	/></noscript>
<script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activate to sort column ascending","sort_descending":": activate to sort column descending"},"length_menu":"Show _MENU_ entries","empty_table":"No data available in table","info":"Showing _START_ to _END_ of _TOTAL_ entries","info_empty":"Showing 0 to 0 of 0 entries","info_filtered":"(filtered from _MAX_ total entries)","zero_records":"No matching records found","search":"Search:","all_selected_text":"All items on this page were selected. ","select_all_link":"Select all pages","clear_selection":"Clear Selection.","pagination":{"all":"All","next":"Next","previous":"Previous"},"select":{"rows":{"0":"","_":": Selected %d rows","1":": Selected 1 row"}},"datepicker":{"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesMin":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Prev","currentText":"Today","closeText":"Done","today":"Today","clear":"Clear"}};/* ]]> */ </script><style id='core-block-supports-inline-css' type='text/css'>
.wp-container-core-columns-layout-1.wp-container-core-columns-layout-1{flex-wrap:nowrap;}
</style>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script type="text/javascript" id="frontend-js-extra">
/* <![CDATA[ */
var bdcFeatureFlags = {"real-estate":"1","arc-video-ads":"0","feature-narrativ":"0","archive-pagination-schema-removal":"0","love-letters":"1"};
var sportsbarData = {"is_home":"","tags":"lottery,mega-millions,national-news","category":"news"};
var breakingNews = {"post_id":"","category_id":""};
var gformsData = {"ajaxurl":"https:\/\/www.boston.com\/wp-admin\/admin-ajax.php"};
var bdc2020Webpack = {"path":"https:\/\/www.boston.com\/wp-content\/themes\/bdc-2020\/dist\/"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/js/frontend.js?ver=313954654789974c59d22f58683a4f49" id="frontend-js" async></script>
<script type="text/javascript" id="avc_frontend-js-extra">
/* <![CDATA[ */
var AdRefreshControl = {"advertiserIds":[],"lineItemIds":[],"sizesToExclude":"","slotIdsToExclude":{"ad_partnerad1":1,"presentedby":1,"oosvideo":1},"viewabilityThreshold":"70","refreshInterval":"30","maximumRefreshes":"10","refreshCallback":"refreshOpenWrapAds"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/ad-refresh-control/dist/js/frontend.js?ver=1.1.0" id="avc_frontend-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/block-library/dist/js/frontend-accordion-scripts.js?ver=8563120eb740c7cc17ee526901535e7c" id="tenup-block-library-frontend-accordion-scripts-js"></script>
<script type="text/javascript" id="bgmp-regi-bundle-js-js-extra">
/* <![CDATA[ */
var bgmpRegi = {"regi_signup_form_path":"https:\/\/www.boston.com\/wp-content\/plugins\/wp-plugin-regi-spot-im\/markup\/signup-form.php?blog_name=Boston.com","blog_name":"Boston.com"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/wp-plugin-regi-spot-im//bgmp-regi-bundle.js?ver=0.0.3" id="bgmp-regi-bundle-js-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/themes/bdc-2020/dist/js/load-more.js?ver=39a871a753c2430094f7828232f81b02" id="load-more-js"></script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/bdc-functionality/assets/js/tracker/lib/AppMeasurement/AppMeasurement.js?ver=2.22.0" id="app_measurement-js"></script>
<script type="text/javascript" id="bdc_tracker-js-extra">
/* <![CDATA[ */
var bdcfunctionalityWebpack = {"path":"https:\/\/www.boston.com\/wp-content\/plugins\/bdc-functionality\/dist\/"};
var bdcDigitalData = {"settings":{"reportSuite":"nytbglobe,nytbgglobal","customLinksReportSuite":"nytbglobe","trackingServer":"smetrics.boston.com"},"pageInstanceID":"Mega Millions | homepage-www.boston.com","page":{"pageInfo":{"pageID":"Mega Millions | homepage","internalLinks":"javascript:,cars.com,boston.com,bostonglobe.com,globe.com,cityfeet.com,legacy.com,monstermoving.com,movietickets.com,newsbank.com,salary.com,snocountry.com,travidia.com,uclick.com,zap2it.com,bostondirtdogs.com,adperfect.com,bankrate.com,ce.com,flightview.com,gabriels.com,harvestadsdepot.com,interviewmastery.com,localattitude.com,pair.com,resume.com,sportsballot.com,vanlines.com,boston.addresses.com,boston.jiwire.com,boston.stats.com,gadzoo.com,jobview.boston.monster.com,mrboffo.com,mypublicnotices.com,upickem.com,realtraffic.maptuit.com,caspio.com,upickem.net,boston.houzz.com,localhost,www.boston.com","destinationURL":"https:\/\/www.boston.com\/tag\/mega-millions\/","pageURL":"https:\/\/www.boston.com\/tag\/mega-millions\/","channel":"tag page","campaign":"","subsection":"Mega Millions","rssID":"","authors":"","pageLayout":"tag page | special section","pagination":"","p1":"","pageType":"tag page | special section","publishDate":"","videoName":"","cms":"WordPress","environment":"Live","summaryLength":0,"searchKeyword":"","trackingCode":"","keywords":"Mega Millions","sponsorName":"","loginStatus":"logged out","publicationName":"Boston.com","galleryName":null,"codeVersion":"2.22.0","articleID":"","refresh":"","registrationID":"","newsletter":""}}};
/* ]]> */
</script>
<script type="text/javascript" src="https://bdc2020.o0bc.com/wp-content/plugins/bdc-functionality/dist/js/tracker.js?ver=fb27cd3bae55423ee0d92e426c61e690" id="bdc_tracker-js"></script>
		<!-- OneTrust Cookies Settings button start -->
		<button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button>
		<!-- OneTrust Cookies Settings button end -->

		<!-- This can be enabled if you want to show the OneTrust Cookie Consent Table Overview on the frontend -->
		<!-- OneTrust Cookies List start  <div id="ot-sdk-cookie-policy"></div> --><!-- OneTrust Cookies List end -->
				<script>
			const oneTrustEl = document.getElementsByClassName( 'onetrust-revcontent' );

			if ( oneTrustEl.length > 0 ) {  // If less than 1, no RevContent is running.
				// Is this if really needed?
				let ccpaSet = localStorage.getItem( 'ccpaApplies' );
				if ( ( null !==  ccpaSet ) ) {
					let storageCCPA = localStorage.getItem( 'ccpaString' );
					oneTrustEl[0].setAttribute( "data-us-privacy", storageCCPA );
				}

				let gdprSet = localStorage.getItem( 'gdprApplies' );
				if ( ( null !==  gdprSet ) ) {
					let storageGDPR = localStorage.getItem( 'gdprString' );
					oneTrustEl[0].setAttribute( "data-gdpr", 1 );
					oneTrustEl[0].setAttribute( "data-gdpr-consent", storageGDPR );
				}
			}
		
		</script>
				<script type="text/javascript">
			window.addEventListener('DOMContentLoaded', (event) => {
				const airshipExtrajs              = document.getElementById("ua-wn-js-extra");
				const ConsentFromOnetrustStorage  = JSON.parse(localStorage.getItem( 'consent_one_trust_bdc' ) );
				if ( airshipExtrajs ) {
					if ( ( null !==  ConsentFromOnetrustStorage ) && ( ConsentFromOnetrustStorage.C0003 ) ) {
						document.getElementById('ua-wn-js-extra').setAttribute('type', 'text/plain');
						document.getElementById('ua-wn-js-extra').setAttribute('class', 'optanon-category-C0003');
					}
				}
			});
		</script>
			<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"b9d80a2312","applicationID":"467627310","transactionName":"ZFNbMkJTVxVYVRcMDV0ZehNDRlYLFmICAg==","queueTime":0,"applicationTime":835,"atts":"SBRMRApJREobV0FfGU5L","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
<!--
Performance optimized by Redis Object Cache. Learn more: https://wprediscache.com

Retrieved 13553 objects (2 MB) from Redis using Predis (v2.1.2).
-->
