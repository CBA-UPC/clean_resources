!function(){function q(b){var c=[],a=[],f=function(d){for(var e={},h=0;h<x.length;h++){var g=x[h];if(g.Tag===d){e=g;break}var k=(y=g.Tag,r=v=l=void 0,l=-1!==(r=y).indexOf("http:")?r.replace("http:",""):r.replace("https:",""),-1!==(v=l.indexOf("?"))?l.replace(l.substring(v),""):l);if(d&&(-1!==d.indexOf(k)||-1!==g.Tag.indexOf(d))){e=g;break}}var y,l,v,r;return e}(b);return f.CategoryId&&(c=f.CategoryId),f.Vendor&&(a=f.Vendor.split(":")),!f.Tag&&F&&(a=c=function(d){var e=[],h=function(g){var k=document.createElement("a");
k.href=g;g=k.hostname.split(".");return-1!==g.indexOf("www")||2<g.length?g.slice(1).join("."):k.hostname}(d);w.some(function(g){return g===h})&&(e=["C0004"]);return e}(b)),{categoryIds:c,vsCatIds:a}}function z(b){return!b||!b.length||(b&&window.OptanonActiveGroups?b.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(b,c){void 0===c&&(c=null);var a=window,f=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=f&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===
t||"All"===t&&f&&!a?z(b):("Vendors"===t||"All"===t&&f&&a)&&z(c)}function n(b){b=b.getAttribute("class")||"";return-1!==b.indexOf("optanon-category")||-1!==b.indexOf("ot-vscat")}function p(b){return b.hasAttribute("data-ot-ignore")}function A(b,c,a){void 0===a&&(a=null);var f=b.join("-"),d=a&&a.join("-"),e=c.getAttribute("class")||"",h="",g=!1;b&&b.length&&-1===e.indexOf("optanon-category-"+f)&&(h=("optanon-category-"+f).trim(),g=!0);a&&a.length&&-1===e.indexOf("ot-vscat-"+d)&&(h+=" "+("ot-vscat-"+
d).trim(),g=!0);g&&c.setAttribute("class",h+" "+e)}function B(b,c,a){void 0===a&&(a=null);var f;b=b.join("-");a=a&&a.join("-");return-1===c.indexOf("optanon-category-"+b)&&(f=("optanon-category-"+b).trim()),-1===c.indexOf("ot-vscat-"+a)&&(f+=" "+("ot-vscat-"+a).trim()),f+" "+c}function C(b){var c=q(b.src||"");if(c.categoryIds.length||c.vsCatIds.length){A(c.categoryIds,b,c.vsCatIds);m(c.categoryIds,c.vsCatIds)||(b.type="text/plain");var a=function(f){"text/plain"===b.getAttribute("type")&&f.preventDefault();
b.removeEventListener("beforescriptexecute",a)};b.addEventListener("beforescriptexecute",a)}}function D(b){var c=b.src||"",a=q(c);(a.categoryIds.length||a.vsCatIds.length)&&(A(a.categoryIds,b,a.vsCatIds),m(a.categoryIds,a.vsCatIds)||(b.removeAttribute("src"),b.setAttribute("data-src",c)))}var x=JSON.parse('[{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022092001.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/AppMeasurement.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://hermes.redlink.com/api/config","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4lBQAAAEnh-wN-","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s7.addthis.com/js/300/addthis_widget.js#pubid\x3dxa-4faab26f2cff13a7","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4zgwAAALPTBwOY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/pcs/view","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4oCQAAALRqggNx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4ydAAAADnlNgNe","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4ogwAAAFvF-wN6","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/A2epiTRxkvQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://static.heart.org/ahaecc/coveo/js/CoveoJsSearch.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://assets.adobedtm.com/a357ca7c6780/6540413ece9b/launch-4f9f22e74f05.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://az416426.vo.msecnd.net/scripts/a/ai.0.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022092101.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYy4yOwAAAFkIfQN-","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cm.everesttech.net/cm/dd","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://remarqable.com/groveMain.bundle.js","CategoryId":["C0002"],"Vendor":null}]'),
F=JSON.parse("true"),t=JSON.parse('"Categories"'),w="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" ");w=w.filter(function(b){if("null"!==b&&b.trim().length)return b});var u=
["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(c){Array.prototype.forEach.call(c.addedNodes,function(f){1===f.nodeType&&(-1===u.indexOf(f.tagName.toLowerCase())||n(f)||p(f)||("script"===f.tagName.toLowerCase()?C:D)(f))});var a=c.target;c.attributeName&&(n(a)&&p(a)||("script"===a.nodeName.toLowerCase()?C(a):-1!==u.indexOf(c.target.nodeName.toLowerCase())&&D(a)))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,
attributeFilter:["src"]});var E=document.createElement;document.createElement=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if("script"!==b[0].toLowerCase()&&-1===u.indexOf(b[0].toLowerCase()))return E.bind(document).apply(void 0,b);var a=E.bind(document).apply(void 0,b),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return d="src",a.getAttribute(d)||"";var d},set:function(d){var e="";"string"==typeof d?e=d:d instanceof Object&&(e=d.toString());
e=q(e);!e.categoryIds.length&&!e.vsCatIds.length||"script"!==b[0].toLowerCase()||n(a)||m(e.categoryIds,e.vsCatIds)||p(a)?!e.categoryIds.length||-1===u.indexOf(b[0].toLowerCase())||n(a)||m(e.categoryIds,e.vsCatIds)||p(a)?f("src",d):(a.removeAttribute("src"),f("data-src",d),d=a.getAttribute("class"),d||(d=B(e.categoryIds,d||"",e.vsCatIds),f("class",d))):(f("type","text/plain"),f("src",d));return!0}},type:{set:function(d){return e=d,g=f,k=q((h=a).src||""),g("type",!k.categoryIds.length&&!k.vsCatIds.length||
n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?e:"text/plain"),!0;var e,h,g,k}},class:{set:function(d){return e=d,g=f,!(k=q((h=a).src)).categoryIds.length&&!k.vsCatIds.length||n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?g("class",e):g("class",B(k.categoryIds,e,k.vsCatIds)),!0;var e,h,g,k}}}),a.setAttribute=function(d,e,h){"type"!==d&&"src"!==d||h?f(d,e):a[d]=e},a}}();isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(_._A?.performance?.timeOrigin||_._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+_._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof _._A.XMLHttpRequest?.prototype?.addEventListener,version:T.q4,denyList:void 0},R={};function D(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!R[e])throw new Error("Runtime for ".concat(e," was never set"));return R[e]}function N(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");R[e]=(0,i.D)(t,S);const r=(0,n.ek)(e);r&&(r.runtime=R[e])}function O(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>o,lF:()=>a,q4:()=>n});const n="1.250.0",i="PROD",o="CDN",a="2.0.0-alpha.11"},385:(e,t,r)=>{"use strict";r.d(t,{FN:()=>c,IF:()=>l,LW:()=>a,Nk:()=>h,Tt:()=>u,_A:()=>o,cv:()=>p,iS:()=>s,il:()=>n,ux:()=>d,v6:()=>i,w1:()=>f});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a="complete"===o?.document?.readyState,s=Boolean("hidden"===o?.document?.visibilityState),c=""+o?.location,u=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),d=u&&"undefined"==typeof SharedWorker,l=(()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Boolean(n&&window.document.documentMode),h=!!o.navigator?.sendBeacon,p=Math.floor(o?.performance?.timeOrigin||o?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(50);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),o=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(u(e),!e||!s[e].get(t))return a(t);s[e].get(t).staged=!0;const r=[...s[e]];function a(t){const r=e?n.ee.get(e):n.ee,a=o.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),a(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),o=r(234);class a{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,o.OP)(r).isolatedBacklog}catch(e){}var h={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=p(n),c=m(e),d=c.length,l=0;l<d;l++)c[l].apply(a,r);var f=b()[s[e]];f&&f.push([h,e,r,a]);return a},get:v,listeners:m,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",h.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return h;function p(e){return e&&e instanceof a?e:e?(0,i.X)(e,c,(()=>new a(c))):new a(c)}function g(e,t){n[e]=m(e).concat(t)}function m(e){return n[e]||[]}function v(t){return d[t]=d[t]||e(h,t)}function b(){return h.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,u.backlog={}}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(5546);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>u,M:()=>c,Rl:()=>a,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}function u(){return s(32)}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>o,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>a});const n="NRBA",i=144e5,o=18e5,a={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{"use strict";r.d(t,{e:()=>i});var n=r(385);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n._A?.location?.protocol&&t.host===n._A?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),o=r(3325),a=r(385);const s="newrelic";const c={stn:[o.D.sessionTrace],err:[o.D.jserrors,o.D.metrics],ins:[o.D.pageAction],spa:[o.D.spa],sr:[o.D.sessionReplay,o.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{a._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>o});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>o});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.bP)("load",e,t)}function a(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>o,ek:()=>u,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},1214:(e,t,r)=>{"use strict";r.d(t,{em:()=>b,u5:()=>R,QU:()=>O,_L:()=>P,Gm:()=>H,Lg:()=>L,BV:()=>G,Kf:()=>Y});var n=r(8325),i=r(3117);const o="nr@original:".concat(i.a);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];d(u)||(e[c]=r(u,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return d(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){u([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,d,l;try{a=this,o=[...arguments],d="function"==typeof n?n(o,a):n||{}}catch(t){u([t,"",[o,a,s],d],e)}i(r+"start",[o,a,s],d,c);try{return l=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],d,c),e}finally{i(r+"end",[o,a,l],d,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){u([t,r,n,i],e)}s=a}}}function u(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function d(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}var l=r(2210),f=r(385);const h={},p=f._A.XMLHttpRequest,g="addEventListener",m="removeEventListener",v="nr@wrapped:".concat(n.A);function b(e){var t=function(e){return(e||n.ee).get("events")}(e);if(h[t.debugId]++)return t;h[t.debugId]=1;var r=c(t,!0);function i(e){r.inPlace(e,[g,m],"-",o)}function o(e,t){return e[1]}return"getPrototypeOf"in Object&&(f.il&&y(document,i),y(f._A,i),y(p.prototype,i)),t.on(g+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,l.X)(n,v,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(m+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function y(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,g);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}var w="fetch-",A=w+"body-",x=["arrayBuffer","blob","json","text","formData"],E=f._A.Request,_=f._A.Response,T="prototype";const S={};function R(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(E&&_&&f._A.fetch))return t;if(S[t.debugId]++)return t;function r(e,r,i){var o=e[r];"function"==typeof o&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(i+"before-start",[r],a),a[n.A]&&a[n.A].dt&&(e=a[n.A].dt);var s=o.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return S[t.debugId]=1,x.forEach((e=>{r(E[T],e,A),r(_[T],e,A)})),r(f._A,"fetch",w),t.on(w+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(w+"done",[null,r],n)}else t.emit(w+"done",[e],n)})),t}const D={},N=["pushState","replaceState"];function O(e){const t=function(e){return(e||n.ee).get("history")}(e);return!f.il||D[t.debugId]++||(D[t.debugId]=1,c(t).inPlace(window.history,N,"-")),t}var I=r(3239);const C={},j=["appendChild","insertBefore","replaceChild"];function P(e){const t=function(e){return(e||n.ee).get("jsonp")}(e);if(!f.il||C[t.debugId])return t;C[t.debugId]=!0;var r=c(t),i=/[?&](?:callback|cb)=([^&#]+)/,o=/(.*)\.([^.]+)/,a=/^(\w+)(\.|$)(.*)$/;function s(e,t){if(!e)return t;const r=e.match(a),n=r[1];return s(r[3],t[n])}return r.inPlace(Node.prototype,j,"dom-"),t.on("dom-start",(function(e){!function(e){if(!e||"string"!=typeof e.nodeName||"script"!==e.nodeName.toLowerCase())return;if("function"!=typeof e.addEventListener)return;var n=(a=e.src,c=a.match(i),c?c[1]:null);var a,c;if(!n)return;var u=function(e){var t=e.match(o);if(t&&t.length>=3)return{key:t[2],parent:s(t[1],window)};return{key:e,parent:window}}(n);if("function"!=typeof u.parent[u.key])return;var d={};function l(){t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}function f(){t.emit("jsonp-error",[],d),t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}r.inPlace(u.parent,[u.key],"cb-",d),e.addEventListener("load",l,(0,I.m$)(!1)),e.addEventListener("error",f,(0,I.m$)(!1)),t.emit("new-jsonp",[e.src],d)}(e[0])})),t}const k={};function H(e){const t=function(e){return(e||n.ee).get("mutation")}(e);if(!f.il||k[t.debugId])return t;k[t.debugId]=!0;var r=c(t),i=f._A.MutationObserver;return i&&(window.MutationObserver=function(e){return this instanceof i?new i(r(e,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype),t}const M={};function L(e){const t=function(e){return(e||n.ee).get("promise")}(e);if(M[t.debugId])return t;M[t.debugId]=!0;var r=t.context,i=c(t),a=f._A.Promise;return a&&function(){function e(r){var n=t.context(),o=i(r,"executor-",n,null,!1);const s=Reflect.construct(a,[o],e);return t.context(s).getCtx=function(){return n},s}f._A.Promise=e,Object.defineProperty(e,"name",{value:"Promise"}),e.toString=function(){return a.toString()},Object.setPrototypeOf(e,a),["all","race"].forEach((function(r){const n=a[r];e[r]=function(e){let i=!1;[...e||[]].forEach((e=>{this.resolve(e).then(a("all"===r),a(!1))}));const o=n.apply(this,arguments);return o;function a(e){return function(){t.emit("propagate",[null,!i],o,!1,!1),i=i||!e}}}})),["resolve","reject"].forEach((function(r){const n=a[r];e[r]=function(e){const r=n.apply(this,arguments);return e!==r&&t.emit("propagate",[e,!0],r,!1,!1),r}})),e.prototype=a.prototype;const n=a.prototype.then;a.prototype.then=function(){var e=this,o=r(e);o.promise=e;for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];s[0]=i(s[0],"cb-",o,null,!1),s[1]=i(s[1],"cb-",o,null,!1);const u=n.apply(this,s);return o.nextPromise=u,t.emit("propagate",[e,!0],u,!1,!1),u},a.prototype.then[o]=n,t.on("executor-start",(function(e){e[0]=i(e[0],"resolve-",this,null,!1),e[1]=i(e[1],"resolve-",this,null,!1)})),t.on("executor-err",(function(e,t,r){e[1](r)})),t.on("cb-end",(function(e,r,n){t.emit("propagate",[n,!0],this.nextPromise,!1,!1)})),t.on("propagate",(function(e,r,n){this.getCtx&&!r||(this.getCtx=function(){if(e instanceof Promise)var r=t.context(e);return r&&r.getCtx?r.getCtx():this})}))}(),t}const z={},F="setTimeout",B="setInterval",U="clearTimeout",Z="-start",V="-",q=[F,"setImmediate",B,U,"clearImmediate"];function G(e){const t=function(e){return(e||n.ee).get("timer")}(e);if(z[t.debugId]++)return t;z[t.debugId]=1;var r=c(t);return r.inPlace(f._A,q.slice(0,2),F+V),r.inPlace(f._A,q.slice(2,3),B+V),r.inPlace(f._A,q.slice(3),U+V),t.on(B+Z,(function(e,t,n){e[0]=r(e[0],"fn-",null,n)})),t.on(F+Z,(function(e,t,n){this.method=n,this.timerDuration=isNaN(e[1])?0:+e[1],e[0]=r(e[0],"fn-",this,n)})),t}var W=r(50);const X={},K=["open","send"];function Y(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(X[r.debugId]++)return r;X[r.debugId]=1,b(t);var i=c(r),o=f._A.XMLHttpRequest,a=f._A.MutationObserver,s=f._A.Promise,u=f._A.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=f._A.XMLHttpRequest=function(e){const t=new o(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(d,(a=n,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,r.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",A)}),(0,I.m$)(!1))}catch(e){(0,W.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var a;return t};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",A)}if(function(e,t){for(var r in e)t[r]=e[r]}(o,p),p.prototype=o.prototype,i.inPlace(p.prototype,K,"-xhr-",A),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),a&&(m?m.then(w):u?u(w):(v=-v,y.data=v))}(t)})),r.on("open-xhr-start",g),a){var m=s&&s.resolve();if(!u&&!s){var v=1,y=document.createTextNode(v);new a(w).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===d||w()}));function w(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function A(e,t){return t}return r}},7825:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>o,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{J0:()=>l,Mi:()=>d,Vb:()=>o,Ye:()=>s,fm:()=>c,i9:()=>a,t9:()=>i,u0:()=>u});var n=r(7056);const i=r(3325).D.sessionReplay,o=.12,a={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},s=1e6,c=64e3,u={[n.IK.ERROR]:15e3,[n.IK.FULL]:3e5,[n.IK.OFF]:0},d={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},l=5e3},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>u,FN_START:()=>c,PUSH_STATE:()=>d,RESOURCE:()=>o,START:()=>a});const n=r(3325).D.sessionTrace,i="bstResource",o="resource",a="-start",s="-end",c="fn"+a,u="fn"+s,d="pushState"},7836:(e,t,r)=>{"use strict";r.d(t,{BODY:()=>x,CB_END:()=>E,CB_START:()=>u,END:()=>A,FEATURE_NAME:()=>i,FETCH:()=>T,FETCH_BODY:()=>v,FETCH_DONE:()=>m,FETCH_START:()=>g,FN_END:()=>c,FN_START:()=>s,INTERACTION:()=>f,INTERACTION_API:()=>d,INTERACTION_EVENTS:()=>o,JSONP_END:()=>b,JSONP_NODE:()=>p,JS_TIME:()=>_,MAX_TIMER_BUDGET:()=>a,REMAINING:()=>l,SPA_NODE:()=>h,START:()=>w,originalSetTimeout:()=>y});var n=r(234);const i=r(3325).D.spa,o=["click","submit","keypress","keydown","keyup","change"],a=999,s="fn-start",c="fn-end",u="cb-start",d="api-ixn-",l="remaining",f="interaction",h="spaNode",p="jsonpNode",g="fetch-start",m="fetch-done",v="fetch-body-",b="jsonp-end",y=n.Yu.ST,w="-start",A="-end",x="-body",E="cb"+A,_="jsTime",T="fetch"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),o=r(5546),a=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),h=r(8632);function p(){const e=(0,h.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&o.push(e.api[t](...n))})),o.length>1?o:o[0]}(t,...n)}}))}var g=r(2825);const m=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let v=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:w,info:A,loader_config:x,runtime:E={loaderType:b},exposed:_=!0}=t;const T=(0,h.gG)();A||(w=T.init,A=T.info,x=T.loader_config),(0,i.Dg)(e.agentIdentifier,w||{}),(0,i.GE)(e.agentIdentifier,x||{}),A.jsAttributes??={},d.v6&&(A.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,A);const S=(0,i.P_)(e.agentIdentifier),R=[A.beacon,A.errorBeacon];v||(S.proxy.assets&&(m(S.proxy.assets),R.push(S.proxy.assets)),S.proxy.beacon&&R.push(S.proxy.beacon),p(),(0,h.EZ)("activatedFeatures",g.T)),E.denyList=[...S.ajax.deny_list||[],...S.ajax.block_internal?R:[]],(0,i.sU)(e.agentIdentifier,E),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const h={};var p=a.ee.get(e),g=p.get("tracer"),m="api-",v=m+"ixn-";function b(t,r,n,o){const a=(0,i.C5)(e);return null===r?delete a.jsAttributes[t]:(0,i.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),A(m,n,!0,o||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{h[e]=A(m,e,!0,"api")})),h.addPageAction=A(m,"addPageAction",!0,n.D.pageAction),h.setCurrentRouteName=A(m,"routeName",!0,n.D.spa),h.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,A(m,"setPageViewName",!0)()},h.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},h.start=e=>{try{const t=e?"defined":"undefined";(0,o.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.recordReplay=function(){(0,o.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,o.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},h.pauseReplay=function(){(0,o.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,o.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},h.interaction=function(){return(new y).get()};var w=y.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,o.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((a?"":"no-")+"fn-start",[(0,s.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function A(e,t,r,i){return function(){return(0,o.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,o.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function x(){r.e(111).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{w[e]=A(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,o.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,o.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>x()),!0):x(),h}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=_),v=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({111:"nr-spa",164:"nr-spa-compressor",433:"nr-spa-recorder"}[e]+"-1.250.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.250.0.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={111:"sha512-VzAAF1LCxsuK2besFoBGhujeJumhOrBrIjFLbkx79lpNPBgfRM8NQ+zxV3oVtbIpclKSEEjI6LWGBzLivoqDqw==",433:"sha512-6vufZOcF6JBu12rByPpOGR7WV+Teena/OA0N+oEmjbl6Du9C1s7Zc8XPaDY9WqZ7EgtUtDyeRLd8FEukA4mphQ==",164:"sha512-TACjgebgisQKqnowbjt0Zs1hS1HnCJnGEdI68dZ39nHU9g1LAb6er7eSNibSGDFBPBwhgKsBkEcteWtHRKc3Cw=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={801:0,92:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.250.0.PROD"]=self["webpackChunk:NRBA-1.250.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(e){return"Call to agent api ".concat(e," failed. The agent is not currently initialized.")}addPageAction(t,r){(0,e.Z)(this.#e("addPageAction"))}setPageViewName(t,r){(0,e.Z)(this.#e("setPageViewName"))}setCustomAttribute(t,r,n){(0,e.Z)(this.#e("setCustomAttribute"))}noticeError(t,r){(0,e.Z)(this.#e("noticeError"))}setUserId(t){(0,e.Z)(this.#e("setUserId"))}setApplicationVersion(t){(0,e.Z)(this.#e("setApplicationVersion"))}setErrorHandler(t){(0,e.Z)(this.#e("setErrorHandler"))}finished(t){(0,e.Z)(this.#e("finished"))}addRelease(t,r){(0,e.Z)(this.#e("addRelease"))}start(t){(0,e.Z)(this.#e("start"))}recordReplay(){(0,e.Z)(this.#e("recordReplay"))}pauseReplay(){(0,e.Z)(this.#e("pauseReplay"))}}var r=i(3325),n=i(234);const o=Object.values(r.D);function a(e){const t={};return o.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let o;this.onAggregateImported=new Promise((e=>{o=e}));const a=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(111).then(i.bind(i,1656));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void o(!1);const{lazyFeatureLoader:e}=await i.e(111).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),o(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),o(!1)}};l.il?(0,d.b2)((()=>a()),!0):a()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=b(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=w(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function w(e){return"object"!=typeof e?[]:(0,m.D)(e,A)}function A(e,t){return t}var x=i(8632),E=i(4402),_=i(4351);var T=i(5546),S=i(7956),R=i(3239),D=i(7894),N=i(9251);class O extends f{static featureName=N.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,N.t,r),l.il&&((0,S.N)((()=>(0,T.p)("docHidden",[(0,D.z)()],void 0,N.t,this.ee)),!0),(0,R.bP)("pagehide",(()=>(0,T.p)("winPagehide",[(0,D.z)()],void 0,N.t,this.ee))),this.importAggregator())}}var I=i(3081);class C extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}var j=i(6660);class P{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class k extends f{static featureName=j.t;#t=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,j.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#t.has(n)&&(this.#t.add(n),(0,T.p)("err",[this.#r(n),(0,D.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,T.p)("ierr",[this.#r(e),(0,D.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,T.p)("err",[this.#n(e),(0,D.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,R.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#t.has(e.error)?this.#t.delete(e.error):(0,T.p)("err",[this.#i(e),(0,D.z)()],void 0,r.D.jserrors,this.ee))}),(0,R.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.#t.clear(),this.abortHandler=void 0}#r(e){return e instanceof Error?e:void 0!==e?.message?new P(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new P("string"==typeof e?e:(0,_.P)(e))}#n(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new P(t);const r=this.#r(e.reason);return r.message=t+r.message,r}#i(e){return e.error instanceof Error?e.error:new P(e.message,e.filename,e.lineno,e.colno)}}var H=i(2210);let M=1;const L="nr@id";function z(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,H.X)(e,L,(function(){return M++}))}function F(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,_.P)(e).length}catch(e){return}}}var B=i(1214),U=i(7243);class Z{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!r||!i)return null;var a=(0,E.M)(),s=(0,E.Ht)(),c=Date.now(),u={spanId:a,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,s),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,c,r,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,s,c,r,i,o)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof l._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,_.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var o=(0,U.e)(r.allowed_origins[i]);if(e.hostname===o.hostname&&e.protocol===o.protocol&&e.port===o.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var V=i(7825),q=["load","error","abort","timeout"],G=q.length,W=n.Yu.REQ,X=n.Yu.XHR;class K extends f{static featureName=V.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,V.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new Z(e),this.handler=(e,t,r,n)=>(0,T.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};Y(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,B.u5)(this.ee),(0,B.Kf)(this.ee),function(e,t,i,o){function a(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=x,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){E(t,e)}),(0,R.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,R.m$)(!1))}function s(e){this.params={method:e[0]},Y(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var a=o.generateTracePayload(this.parsedOrigin);if(a){var s=!1;a.newrelicHeader&&(r.setRequestHeader("newrelic",a.newrelicHeader),s=!0),a.traceContextParentHeader&&(r.setRequestHeader("traceparent",a.traceContextParentHeader),a.traceContextStateHeader&&r.setRequestHeader("tracestate",a.traceContextStateHeader),s=!0),s&&(this.dt=a)}}function u(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=F(i);a&&(n.txSize=a)}this.startTime=(0,D.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<G;s++)r.addEventListener(q[s],this.listener,(0,R.m$)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+z(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+z(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,D.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,D.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,D.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,U.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=o.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function w(e,t){this.params={},this.metrics={},this.startTime=(0,D.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),Y(this,r);var o=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=F(n.body)||0}function A(e,t){var n;this.endTime=(0,D.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var o={txSize:this.txSize,rxSize:n,duration:(0,D.z)()-this.startTime};i("xhr",[this.params,o,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function x(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o=0;o<G;o++)e.removeEventListener(q[o],this.listener,!1);t.aborted||(n.duration=(0,D.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):E(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function E(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?F(e.response):"text"===r||""===r||void 0===r?F(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",a),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",u),t.on("xhr-cb-time",d),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",w),t.on("fn-start",v),t.on("fetch-done",A)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function Y(e,t){var r=(0,U.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var J=i(3614);const{BST_RESOURCE:Q,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:oe,PUSH_STATE:ae}=J;var se=i(7056),ce=i(7144);class ue extends f{static featureName=ce.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ce.t9,r);try{const e=JSON.parse(localStorage.getItem("NRBA_SESSION"));e.sessionReplayMode!==se.IK.OFF?this.#a(e.sessionReplayMode):this.importAggregator({})}catch(e){this.importAggregator({})}}async#a(e){const{Recorder:t}=await i.e(433).then(i.bind(i,4136));this.recorder=new t({mode:e,agentIdentifier:this.agentIdentifier}),this.recorder.startRecording(),this.importAggregator({recorder:this.recorder})}}var de=i(7836);const{FEATURE_NAME:le,START:fe,END:he,BODY:pe,CB_END:ge,JS_TIME:me,FETCH:ve,FN_START:be,CB_START:ye,FN_END:we}=de;var Ae=i(4649);class xe extends f{static featureName=Ae.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,Ae.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,E.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},(0,x.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=a(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,_.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,x.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[K,p,O,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,B.QU)(n),this.eventsEE=(0,B.em)(n),this.eventsEE.on(oe,(function(e,t){this.bstStart=(0,D.z)()})),this.eventsEE.on(ie,(function(e,t){(0,T.p)("bst",[e[0],t,this.bstStart,(0,D.z)()],void 0,r.D.sessionTrace,n)})),n.on(ae+te,(function(e){this.time=(0,D.z)(),this.startPath=location.pathname+location.hash})),n.on(ae+re,(function(e){(0,T.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,T.p)(Q,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ue,C,xe,k,class extends f{static featureName=le;constructor(e,t){if(super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;if(!(0,n.OP)(e).xhrWrappable)return;try{this.removeOnAbort=new AbortController}catch(e){}let r,i=0;const o=this.ee.get("tracer"),a=(0,B._L)(this.ee),s=(0,B.Lg)(this.ee),c=(0,B.BV)(this.ee),u=(0,B.Kf)(this.ee),d=this.ee.get("events"),f=(0,B.u5)(this.ee),h=(0,B.QU)(this.ee),p=(0,B.Gm)(this.ee);function g(e,t){h.emit("newURL",[""+window.location,t])}function m(){i++,r=window.location.hash,this[be]=(0,D.z)()}function v(){i--,window.location.hash!==r&&g(0,!0);var e=(0,D.z)();this[me]=~~this[me]+e-this[be],this[we]=e}function b(e,t){e.on(t,(function(){this[t]=(0,D.z)()}))}this.ee.on(be,m),s.on(ye,m),a.on(ye,m),this.ee.on(we,v),s.on(ge,v),a.on(ge,v),this.ee.buffer([be,we,"xhr-resolved"],this.featureName),d.buffer([be],this.featureName),c.buffer(["setTimeout"+he,"clearTimeout"+fe,be],this.featureName),u.buffer([be,"new-xhr","send-xhr"+fe],this.featureName),f.buffer([ve+fe,ve+"-done",ve+pe+fe,ve+pe+he],this.featureName),h.buffer(["newURL"],this.featureName),p.buffer([be],this.featureName),s.buffer(["propagate",ye,ge,"executor-err","resolve"+fe],this.featureName),o.buffer([be,"no-"+be],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),b(f,ve+fe),b(f,ve+"-done"),b(a,"new-jsonp"),b(a,"jsonp-end"),b(a,"cb-start"),h.on("pushState-end",g),h.on("replaceState-end",g),window.addEventListener("hashchange",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){g(0,i>1)}),(0,R.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})()})();</script><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta http-equiv="Expires" content="0" /><meta property="og:site_name" content="LWW" /><meta property="og:type" content="article" /><meta property="og:title" content="Leveraging Artificial Intelligence, Survey Tools, and Unfolding Case Studies to Enhance Student Learning" /><meta property="og:description" content="With the shift to Next Generation NCLEX (NGN) and competency-based education, we implemented unfolding case studies using artificial intelligence and Qualtrics to mimic NGN questions. We verified case accuracy, added detail, integrated the patient&#39;s story and records into Qualtrics, and constructed questions. Questions assessed priority-setting skill and included hot spot, cloze, and matrix-style questions. Students reviewed the cases and answered questions independently and then faculty facilitated group discussion where students debated and further analyzed their responses. Learn how to use Qualtrics to mimic NGN-style questions in this video and teaching tip." /><meta property="og:image" content="https://cdnapisec.kaltura.com/p/1315631/thumbnail/entry_id/1_tbuvo5hn/width/1200/height/627" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="627" /><meta property="og:url" content="https://journals.lww.com/nurseeducatoronline/pages/video.aspx?autoPlay=false&amp;v=346" /><meta property="twitter:card" content="summary" /><meta name="WT.cg_n" content="nurseeducatoronline" /><meta name="robots" content="index, follow, noarchive" /><meta name="WT.sv" content="ZUSE1PEJPWEB06" /><meta name="Title" content="Nurse Educator" /><style id="SPThemeHideForms" type="text/css">body {opacity:0 !important}</style>
        
        <!-- Head container delegate control -->
        <link href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700|Fira+Sans:300,300i,400,400i,500,500i,600,600i,700,700i&amp;display=swap" rel="stylesheet" />


		<script>
			// temporary workaround for Bug 316328:[Stage][Registration][Regression 05.04] - Omniture events are not displayed for article viewer page
			// prevents JS exception in Adobe launch.js caused by situation when wkhealth_institution_type meta tag is present while wkhealth_institution_name tag is not in the page head
			// see this check in Adobe launch.js: null != document.querySelector("meta[name='wkhealth_institution_name']") ...
			// TODO: implement proper code fix after release 05.04.00 deployment

			var wkhealth_institution_type = document.querySelector("meta[name='wkhealth_institution_type']");
			var wkhealth_institution_name = document.querySelector("meta[name='wkhealth_institution_name']");
			
			console.warn(wkhealth_institution_type);
			console.warn(wkhealth_institution_name);
			if (wkhealth_institution_type && !wkhealth_institution_name) {
				console.warn('Workaround in release 05.04.00 - removing wkhealth_institution_type meta tag if wkhealth_institution_name is not present');
				wkhealth_institution_type.remove();
			}
		</script>
        <link rel="shortcut icon" href="https://cdn.wolterskluwer.io/wk-logos/1.0.x/favicon.png" type="image/vnd.microsoft.icon" id="favicon" />
        <link id="ctl00_ctl14_wkfavicon_linkFavIcon" rel="shortcut icon" href="/nurseeducatoronline/PublishingImages/WKfavicon.ico" type="image/x-icon"></link>

        <meta name="msapplication-TileImage" content="/_layouts/15/images/SharePointMetroAppTile.png" /><meta name="msapplication-TileColor" content="#0072C6" />

        
        <link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/1033/styles/Themable/corev15.css?v=05.18.00.45-2" media="screen" />
        
        
        <link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/oaks.journals/core/bootstrap.min.css?v=05.18.00.45-2" media="screen" />
        <link id="ctl00_ctl14_FontAwesomeStylesheet" rel="stylesheet" type="text/css" href="https://unpkg.com/font-awesome@4.4.0/css/font-awesome.min.css"></link>
        
        <link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/1033/styles/oaks.journals/bootstrap-overwrites.css?v=05.18.00.45-2" media="screen" /><link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/1033/styles/oaks.journals/tachyons.css?v=05.18.00.45-2" media="screen" /><link rel="stylesheet" type="text/css" href="/nurseeducatoronline/_layouts/15/1033/styles/oaks.journals/base-main-header.css?v=05.18.00.45-2" media="screen" /><link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/oaks.journals/core/lww-core.css?v=05.18.00.45-2" media="screen" /><link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/oaks.journals/core/ejp.css?v=05.18.00.45-2" media="screen" /><link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/oaks.journals/core/ejp-print.css?v=05.18.00.45-2" media="print" /><link rel="stylesheet" type="text/css" href="https://lww.com/_layouts/15/oaks.journals/core/jqueryui.css?v=05.18.00.45-2" media="screen" />

        <link rel="stylesheet" type="text/css" href="/nurseeducatoronline/Style%20Library/journal.css?v=05.18.00.45-2" media="screen" />
        <link rel="stylesheet" type="text/css" href="/nurseeducatoronline/Style%20Library/custom.journal.css?v=05.18.00.45-2" media="screen" />

        <script>var WebContext = {"EndPoints":{"ArticleMetricsEndpoint":"//services.journals.lww.com/IntegrationServices/ArticleMetricsService.svc","ThirdPartyRSSFeedServiceEndPoint":"https://services.journals.lww.com/IntegrationServices/ThirdPartyRSSFeedService.svc","JwtTokenServiceEndpoint":"https://journals.lww.com/nurseeducatoronline/_layouts/15/OAKS.Journals/JsonWebToken.svc"}}</script>
        
        
        <script type="text/javascript">// <![CDATA[ 

var g_SPOffSwitches={};
// ]]>
</script>
<script type="text/javascript" src="/_layouts/15/1033/initstrings.js?rev=EIwgcAIn5eSIF0jZ5w1WhQ%3D%3DTAG0"></script>
<script type="text/javascript" src="/_layouts/15/init.js?rev=zTJw1vV9i5CJeZ52lkKJSQ%3D%3DTAG0"></script>
<script type="text/javascript" src="/_layouts/15/1033/strings.js?rev=50XNF7CGsZt5Ek1YPXlC1A%3D%3DTAG0"></script>
<script type="text/javascript" src="/_layouts/15/theming.js?rev=SuLUbbwTXcxFWOWLFUsOkw%3D%3DTAG0"></script>
<script type="text/javascript" src="/_layouts/15/ie55up.js?rev=WNq9rt3%2F6kUumHFiQZo6Jw%3D%3DTAG0"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=F7rjznvAP1ZvjwmSYaDR9a3zqrnKFnNGXs7A_cRIg2rplizpOOjwg9eBfW_KxBMLRVN3lzATjzWkisQusj_Iaw7I7xHhM2EsA2p1WTk5lIh-1_uEIMq1sktVYKM3D6Gp5VSqOtDTEnrScqHWTHOzdCPnKDjm2mtJH72pNbP0u4uI_zDnfi9spPAqI_kz3qnF0&amp;t=ffffffffaa493ab8"></script>
<script type="text/javascript" src="/_layouts/15/blank.js?rev=6Epdi%2BEh0XOHrFNRcf4Cwg%3D%3DTAG0"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=yatK8ruofouVZAe4qMCnoohEpb3HRGGjDeZZjZ7kMmC722OeAMhxqxkQCI5Rxx8YROZ4ohEXEd-BY-UzqqqylduXIs6jc38C73kN3lT2QdlwTljpny1fYEjcvvbYSMHNq1-TT-bDa0cFUDuAr5ywhChhEELpPbB_In_xfOO6OlgjpjP86LmsgZzKkXo8aCS90&amp;t=ffffffffaa493ab8"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=Fr5k7XDliwj7SPEiKSqb-V3uT_yv_Vc0LBq3yd_m1_Ea8vkvI41fPqtWB8rH7kW9D2--SObxiXOCEDDg2Tv5yxNEAylK5ZpV5j9rD03yPUcCPh8w-y9A8MWLSg0jrQ-0kisGzu4Hba8Ct3e6oiiAj5nLa8lUDGLzNSKFrT8wEzRvrGDuqa6AKloxdLDyhLNb6sYlIjtGIn7oUTXlG_HGsg2&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=LXNyktQiaIpbp533FW-c46OHB30ylIqDlrzk7r3HlWeMLy05SwQ7ZZDsPGq7NzzDRSU0tvewepiuVrszZuoio7QLmOYibhCj6dQNfSL2hGpxpyP-E7et27fbWMHpoIuHecopwN8d_b-WR8rimwUGdbN6akitIdX32lXMez7LH7qkG1jVMDvXf2M0_6gdMpGjpPKlEhmMrNGzYuo05_KLRO4TeTkKykcR_5pPB2fyzgk1&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=UozfgYfgcP8g118ZMoKEWz_x5V51ZaIWOeFUe49mdZ8Yy8frQahBfRlFRNNeizXxYfmbtpE1uZMOMW2QeF7QCWjREvRvpNDSCGO5YICh1GalcUtEGJaGvVObluwmGza6-lV8S-wgb9vDF6UYZlWbyLOo-d94ckB8BN1hUlnIdqL9auDE1qR-ddFC7rw_89VZWQ6uTxR6vOlq2jE0iTr3J_6_Q3a7SLOduMua_ZXDgk7k01lBMUodCwi6dm-oTxLE0&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=ZWgxL8bxzPcm3sf7nBtjnXIE2wsAF-izuHnFdkP9YIwhY40NTQZWAMXXd5_I4JNrdCjHASB5kHO0Yp663zuk5AhL_jRl1k_SY5vnpUrSCkFxyolVdXM4FQlXIKn4Vvw31N76GuK5LU06Z_W9PLwfY2Syw-289UtPxVzBx9gVTRruCab2sQxw8wsPzWwQuzodrorJnIINUBwKL_vl4JpUyg2&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=EBaCwkyF6v0hRUf3ae-93ssVmxQ7oIMqv_PPxkqrb9oreHGbb2-nfpYVrHcdp3m-zVM-7IejfExLCflpv83MelmvDxCP_bfWTqE6qeqNKtnJrC6U7f-VSqzDeiqxeFeQcr2gdWPsj6xuQIL9yofEjL-H9aGyCIOqWIpEBJ7whIjP5cINMF1LSl9sjJQ7m8EzvCkRy97Lv87xdtMaOwsPZQua3oe2eRAfQMy5DfH1rBU1&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=wD8VqdUYdbEDwBKpnhKPdzJbzZckynHSZAFSwtw0pb9xBjjkE5QcyWugHeKYmmlr5VSa3nfGB1Xz7jafz_E7BWSKiwSgokhW7jiO928L_QrPFxF6EUuMyF_R_k74O2ZH3Z2j_4YTihok5YYe4jIHNbXew2ICIYicdQ6t5hTNp6rgynp1DalRocxe5znBs87HZLCu8p1QfDK38eKJRZE968HV31IWzfYmG-OLm0YY--COCDBd2W06gq-Q4GGHyVyR0&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=-7EYqBUD5SBnN9GXen_j6q1vUCHCiGsBm9LG-6jUM7Rd46ySBRRKNEzamKwU97Ev4GNWdvuZGqjKPpTco_vaUnZotagIyWjSOr8Y_YpPpCBN41u1qvqUa_Z3KhaMpFpLnBCVAOGXsZBX0gnLdrWl7SPrwgrfSJovgJOyKQNohnCagrVGRS7D0SajjiwZiBwbRFFXzQUODi-UXS4-R3OUE9NEoYmrfX_DvTq3geTEsrQ1&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=1Bz5XD8diaSe1jTYew43lskkqvoOQ7xUk9zYBR9yPfNI5dG64NIPCYkFSKOHNDL_QVi-dGp62xDY0jGHiOTaybK9bApxYHqJLIbzEwEQB4irPiQPiKBzzY5p7N4f-D0FpCNtiMYBBQwavF6nxBbyIVOMdRyTBQ10Hm9Zmj9z2NOmhfNxDVkOcXNQDwO54qpnA74wIl4P7kqB5Ngz9hx4kY3xEadtMKXSX7uqRVTMzso1&amp;t=596f116c"></script>
<script type="text/javascript" src="/ScriptResource.axd?d=2jUlVNSVbehJJ-Lt4PSuX3imkArDDoAUwrw500StXDnRKdoHS2np91egmJiBUG7feIOax9x-3d3eG4JYvatg-8X9LQmJU49eWww19gWY7vSdphyQrCWf_QI352TwlgZkOjBO9SLzCdnP0Rkx2chN2q3GkIbDzjCD2z0q_V19F4FLoBgT9FcKUizcWUqIzBoXhgYN9ZOMKI0YCb0cjcqnIG9l7yUe6eYzolUqVyyoo5k1&amp;t=596f116c"></script>
<script type="text/javascript">RegisterSod("require.js", "\u002f_layouts\u002f15\u002frequire.js?rev=bv3fWJhk0uFGpVwBxnZKNQ\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("core.js", "\u002f_layouts\u002f15\u002fcore.js?rev=j9a0d\u00252BPy1yQxnd9MnbVzHQ\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("menu.js", "\u002f_layouts\u002f15\u002fmenu.js?rev=wrJq19VhLDExyMJ5\u00252B8yU0Q\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("mQuery.js", "\u002f_layouts\u002f15\u002fmquery.js?rev=NDgkLecAIkz\u00252BweeQGHsFzg\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("callout.js", "\u002f_layouts\u002f15\u002fcallout.js?rev=TL9KyIcEAc\u00252BtRfD5o03AZw\u00253D\u00253DTAG0");RegisterSodDep("callout.js", "mQuery.js");RegisterSodDep("callout.js", "core.js");</script>
<script type="text/javascript">RegisterSod("clienttemplates.js", "\u002f_layouts\u002f15\u002fclienttemplates.js?rev=Mfj8gPH7gaoqpkHow8ptUQ\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("sharing.js", "\u002f_layouts\u002f15\u002fsharing.js?rev=l8H6ygZ\u00252BG2\u00252BDpz6C6Y8\u00252BUg\u00253D\u00253DTAG0");RegisterSodDep("sharing.js", "mQuery.js");RegisterSodDep("sharing.js", "clienttemplates.js");RegisterSodDep("sharing.js", "core.js");</script>
<script type="text/javascript">RegisterSod("suitelinks.js", "\u002f_layouts\u002f15\u002fsuitelinks.js?rev=ShSwDRp3T8g1UhgsRv9KUg\u00253D\u00253DTAG0");RegisterSodDep("suitelinks.js", "core.js");</script>
<script type="text/javascript">RegisterSod("followingcommon.js", "\u002f_layouts\u002f15\u002ffollowingcommon.js?rev=QR2wCguxRV0mhBMJO0Vskw\u00253D\u00253DTAG0");RegisterSodDep("followingcommon.js", "sp.js");RegisterSodDep("followingcommon.js", "userprofile");RegisterSodDep("followingcommon.js", "core.js");RegisterSodDep("followingcommon.js", "mQuery.js");</script>
<script type="text/javascript">RegisterSod("profilebrowserscriptres.resx", "\u002f_layouts\u002f15\u002f1033\u002fprofilebrowserscriptres.js?rev=qwf69WaVc1mYlJLXqmZmVA\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("inplview", "\u002f_layouts\u002f15\u002finplview.js?rev=tpT9cAwdUg7z15xrMhetGA\u00253D\u00253DTAG0");RegisterSodDep("inplview", "core.js");RegisterSodDep("inplview", "clienttemplates.js");RegisterSodDep("inplview", "sp.js");</script>
<script type="text/javascript">RegisterSod("dragdrop.js", "\u002f_layouts\u002f15\u002fdragdrop.js?rev=EBYmSndveb1Mkb91tDqsDA\u00253D\u00253DTAG0");</script>
<script type="text/javascript">RegisterSod("quicklaunch.js", "\u002f_layouts\u002f15\u002fquicklaunch.js?rev=py6pvqNpjt2nepYELtlKNQ\u00253D\u00253DTAG0");RegisterSodDep("quicklaunch.js", "dragdrop.js");</script>
<script type="text/javascript">RegisterSod("WPAdderClass", "\u002f_layouts\u002f15\u002fwpadder.js?rev=529JQZgm\u00252BveAvynFOnp2OA\u00253D\u00253DTAG0");</script>

        
        
        
        
        
        
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/jquery.js?v=05.18.00.45-2">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/bootstrap.bundle.min.js?v=05.18.00.45-2" defer="true">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/jqueryui.js?v=05.18.00.45-2">

</script>

        
        <link type="text/xml" rel="alternate" href="/nurseeducatoronline/_vti_bin/spsdisco.aspx" />

        <link rel="canonical" href="https://journals.lww.com/nurseeducatoronline/pages/video.aspx?autoPlay=false&amp;v=346" />
        
        
        <noscript>
            <meta http-equiv="Refresh" content="3;url=/_layouts/1033/OAKS.Journals/Error/JavaScript.html" />
        </noscript>

        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/lww-core.js?v=05.18.00.45-2">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/1033/Scripts/wk/journal-navigation.min.js?v=05.18.00.45-2" defer="true">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/1033/Scripts/wk/journals_master.min.js?v=05.18.00.45-2">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/manifest.js?v=05.18.00.45-2" defer="true">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/ejp.js?v=05.18.00.45-2" defer="true">

</script>
        <script type="text/javascript" src="https://lww.com/_layouts/15/oaks.journals/core/react-redux-vendors.js?v=05.18.00.45-2" defer="true">

</script>

            
            
            
        
        <script type="text/javascript">
            var scpl_time = new Date();
            scpl_time = scpl_time.getTime();

            window.A8AJQ = jQuery.noConflict();
            window.$ = jQuery.noConflict();

        </script>
        

<script async type="text/plain" src="https://aim-tag.hcn.health/js/client.js?dl=aimDataLayer&target=ie11" class="optanon-category-C0004"></script>
<script>
    window.aimDataLayer = window.aimDataLayer || [];
    function aimTag() { aimDataLayer.push(arguments); }
    aimTag('2429bf11-c05b-409f-b998-8acef505546e', 'pageview');
    aimTag('2429bf11-c05b-409f-b998-8acef505546e', 'signal', function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log(success);
            if (success.identity_type === "AUT") {
            }
        }
    });
</script>
<script src='https://z.moatads.com/wolterskluwerprebidheader64359239460/moatheader.js?v=05.18.00.45-2' type='text/plain'  class='optanon-category-C0004'></script></head>


    <body id="ctl00_BodyTag" class="ej-video-page">
        
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLR6H6W&gtm_auth=KDsBauO9BfS2PwvcY1n5yg&gtm_preview=env-2&gtm_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <div id="imgPrefetch" style="display:none">
<img src="https://cdn.wolterskluwer.io/wk-logos/1.0.x/favicon.png?rev=43" />
<img src="/_layouts/15/images/spcommon.png?rev=43" />
</div>

        <noscript><div class='noindex'>You may be trying to access this site from a secured browser on the server. Please enable scripts and reload this page.</div></noscript>
        
        <form method="post" action="/nurseeducatoronline/pages/video.aspx?autoPlay=false&amp;v=346" onsubmit="javascript:return WebForm_OnSubmit();" id="aspnetForm">
<div class="aspNetHidden">
<input type="hidden" name="_wpcmWpid" id="_wpcmWpid" value="" />
<input type="hidden" name="wpcmVal" id="wpcmVal" value="" />
<input type="hidden" name="MSOWebPartPage_PostbackSource" id="MSOWebPartPage_PostbackSource" value="" />
<input type="hidden" name="MSOTlPn_SelectedWpId" id="MSOTlPn_SelectedWpId" value="" />
<input type="hidden" name="MSOTlPn_View" id="MSOTlPn_View" value="0" />
<input type="hidden" name="MSOTlPn_ShowSettings" id="MSOTlPn_ShowSettings" value="False" />
<input type="hidden" name="MSOGallery_SelectedLibrary" id="MSOGallery_SelectedLibrary" value="" />
<input type="hidden" name="MSOGallery_FilterString" id="MSOGallery_FilterString" value="" />
<input type="hidden" name="MSOTlPn_Button" id="MSOTlPn_Button" value="none" />
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__REQUESTDIGEST" id="__REQUESTDIGEST" value="noDigest" />
<input type="hidden" name="MSOSPWebPartManager_DisplayModeName" id="MSOSPWebPartManager_DisplayModeName" value="Browse" />
<input type="hidden" name="MSOSPWebPartManager_ExitingDesignMode" id="MSOSPWebPartManager_ExitingDesignMode" value="false" />
<input type="hidden" name="MSOWebPartPage_Shared" id="MSOWebPartPage_Shared" value="" />
<input type="hidden" name="MSOLayout_LayoutChanges" id="MSOLayout_LayoutChanges" value="" />
<input type="hidden" name="MSOLayout_InDesignMode" id="MSOLayout_InDesignMode" value="" />
<input type="hidden" name="_wpSelected" id="_wpSelected" value="" />
<input type="hidden" name="_wzSelected" id="_wzSelected" value="" />
<input type="hidden" name="MSOSPWebPartManager_OldDisplayModeName" id="MSOSPWebPartManager_OldDisplayModeName" value="Browse" />
<input type="hidden" name="MSOSPWebPartManager_StartWebPartEditingName" id="MSOSPWebPartManager_StartWebPartEditingName" value="false" />
<input type="hidden" name="MSOSPWebPartManager_EndWebPartEditing" id="MSOSPWebPartManager_EndWebPartEditing" value="false" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTA4ODM0MTgxMw9kFgJmD2QWBGYPDxYCHgdWaXNpYmxlaGRkAgIPZBYEAgEPZBYGZg8WAh4EVGV4dAWOATxzY3JpcHQgaWQ9J0RUTVNjcmlwdCcgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBzcmM9J2h0dHBzOi8vYXNzZXRzLmFkb2JlZHRtLmNvbS9hMzU3Y2E3YzY3ODAvMjU1NThiN2YzYjE0L2xhdW5jaC0zMWI1NGYwZGVjMWMubWluLmpzJz48L3NjcmlwdD5kAg8PZBYCZg9kFgYCAw9kFgJmDxYCHgRocmVmBTMvbnVyc2VlZHVjYXRvcm9ubGluZS9QdWJsaXNoaW5nSW1hZ2VzL1dLZmF2aWNvbi5pY29kAgsPFgIfAgU9aHR0cHM6Ly91bnBrZy5jb20vZm9udC1hd2Vzb21lQDQuNC4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc2QCEw8WAh8BBYIDPHNjcmlwdD52YXIgV2ViQ29udGV4dCA9IHsiRW5kUG9pbnRzIjp7IkFydGljbGVNZXRyaWNzRW5kcG9pbnQiOiIvL3NlcnZpY2VzLmpvdXJuYWxzLmx3dy5jb20vSW50ZWdyYXRpb25TZXJ2aWNlcy9BcnRpY2xlTWV0cmljc1NlcnZpY2Uuc3ZjIiwiVGhpcmRQYXJ0eVJTU0ZlZWRTZXJ2aWNlRW5kUG9pbnQiOiJodHRwczovL3NlcnZpY2VzLmpvdXJuYWxzLmx3dy5jb20vSW50ZWdyYXRpb25TZXJ2aWNlcy9UaGlyZFBhcnR5UlNTRmVlZFNlcnZpY2Uuc3ZjIiwiSnd0VG9rZW5TZXJ2aWNlRW5kcG9pbnQiOiJodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xNS9PQUtTLkpvdXJuYWxzL0pzb25XZWJUb2tlbi5zdmMifX08L3NjcmlwdD5kAhAPZBYCAgMPZBYCZg9kFgJmDzwrAAYAZAIDDxYCHgVjbGFzcwUNZWotdmlkZW8tcGFnZRYIAgEPFgIfAGhkAgMPFgIfAQXjATxub3NjcmlwdD48aWZyYW1lIHNyYz0iaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1HVE0tTkxSNkg2VyZndG1fYXV0aD1LRHNCYXVPOUJmUzJQd3ZjWTFuNXlnJmd0bV9wcmV2aWV3PWVudi0yJmd0bV9jb29raWVzX3dpbj14ImhlaWdodD0iMCIgd2lkdGg9IjAiIHN0eWxlPSJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW4iPjwvaWZyYW1lPjwvbm9zY3JpcHQ+ZAILDxYCHgZhY3Rpb24FOi9udXJzZWVkdWNhdG9yb25saW5lL3BhZ2VzL3ZpZGVvLmFzcHg/YXV0b1BsYXk9ZmFsc2Umdj0zNDYWFAIBD2QWAgIBD2QWBgUmZ19iNDI1MzBjMF83OGRhXzQxYzNfYjk5Nl8yYTU4YzljMjEzYjIPZBYCZg9kFgYCAQ8PFgIfAWQWAh4Fc3R5bGUFDWRpc3BsYXk6bm9uZTtkAgIPFgIeCkJlaGF2aW9ySUQFKGVtYWlsVG9Db2xsZWFndWVQb3B1cEV4dGVuZGVyX183OTU3MTg4MzhkAgMPZBYEAgEPZBYIZg8PFgIfAQUSRW1haWwgdG8gQ29sbGVhZ3VlZGQCAQ9kFgICAQ8PFgIfAQUdQ29sbGVhZ3VlJ3MgRS1tYWlsIGlzIEludmFsaWRkZAIEDw8WAh8BBRJDb2xsZWFndWUncyBFbWFpbDpkZAIIDw8WBB4IQ3NzQ2xhc3MFWWpzLXNlbmQtYnV0dG9uIHByaW1hcnktYnV0dG9uIGdyZWNhcHRjaGEtZW1haWwtY29sbGVhZ3VlLWI5ZTE5YTMyYWU2YzRiNDZiZmNlMzVhZjZlOTcxNWUwHgRfIVNCAgJkZAIDD2QWAgIBD2QWAgIBDw8WAh8BBTpZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnQgdG8geW91ciBjb2xsZWFndWUuZGQFJmdfNGQ4ZGQzNDJfZmFhMF80OGM1X2EzMTlfMzdjMWQxNzNlMDk3D2QWAmYPZBYCAgIPFgQfAwUoZWotYWR2ZXJ0aXNlbWVudCBlai1hZHZlcnRpc2VtZW50LW1pZGRsZR8AZxYCAgEPFgQfAQWHAzxkaXYgaWQ9ImdhXzViZTA1YjJhLTk4MmQtNDhlMy1hMDFlLWZjMGNiMDA5ZDU2YiIgY2xhc3M9ImFkLXNsb3QtY29udGFpbmVyIGFkLXNsb3QtY29udGFpbmVyLWdhXzViZTA1YjJhLTk4MmQtNDhlMy1hMDFlLWZjMGNiMDA5ZDU2YiIgZGF0YS1zaXplbWFwPSJbW1swLCAwXSwgW1szMDAsIDI1MF1dXV0iIGRhdGEtYWRwYXRoPSIvMTU3MjY3MDI3NjEvRGVza3RvcC9udXJzZWVkdWNhdG9yb25saW5lL090aGVyL1JpZ2h0IiBkYXRhLWF1dG9sb2FkPSJubyIgZGF0YS1vdXRvZnBhZ2U9Im5vIiBkYXRhLXN0aWNreT0ibm8iIGRhdGEtc2xvdHRhcmdldGluZz0nJyBkYXRhLWRpc3BsYXlzbHVnPSJ5ZXMiIGRhdGEtc3RpY2t5LWR1cmF0aW9uPSIwIiBkYXRhLW5hbWU9IlJpZ2h0Ij48L2Rpdj4fAGdkBSZnXzNjZDQ4MWE5X2Q3NzZfNDNjNV9iYTQ4X2ZiMjc4NDBkYzRhYg9kFgJmD2QWAgICDxYEHwMFLWVqLWFkdmVydGlzZW1lbnQgZWotYWR2ZXJ0aXNlbWVudC1ib2R5YmFubmVyMR8AZxYCAgEPFgQfAQWtAzxkaXYgaWQ9ImdhX2YxOGE1Njc3LTM0ZjUtNGVjMS1iYzg3LWIzMTBlODE0NGMwYSIgY2xhc3M9ImFkLXNsb3QtY29udGFpbmVyIGFkLXNsb3QtY29udGFpbmVyLWdhX2YxOGE1Njc3LTM0ZjUtNGVjMS1iYzg3LWIzMTBlODE0NGMwYSIgZGF0YS1zaXplbWFwPSJbW1s3MzAsIDUwMF0sIFtbNzI4LCA5MF1dXSwgW1swLCAwXSwgW1szMDAsIDUwXV1dXSIgZGF0YS1hZHBhdGg9Ii8xNTcyNjcwMjc2MS9EZXNrdG9wL251cnNlZWR1Y2F0b3JvbmxpbmUvT3RoZXIvQm9keUJhbm5lcjEiIGRhdGEtYXV0b2xvYWQ9Im5vIiBkYXRhLW91dG9mcGFnZT0ibm8iIGRhdGEtc3RpY2t5PSJubyIgZGF0YS1zbG90dGFyZ2V0aW5nPScnIGRhdGEtZGlzcGxheXNsdWc9InllcyIgZGF0YS1zdGlja3ktZHVyYXRpb249IjAiIGRhdGEtbmFtZT0iQm9keUJhbm5lcjEiPjwvZGl2Ph8AZ2QCCQ8WAh8AaBYCAgUPZBYCAgMPFgIfAGgWAmYPZBYEAgIPZBYGAgEPFgIfAGhkAgMPFgIfAGhkAgUPFgIfAGhkAgMPDxYCHglBY2Nlc3NLZXkFAS9kZAITD2QWAgIBD2QWAmYPZBYCAgIPFgQfAwUqZWotYWR2ZXJ0aXNlbWVudCBlai1hZHZlcnRpc2VtZW50LXRvcGNvbWJvHwBnFgICAQ8WBB8BBZ8DPGRpdiBpZD0iZ2FfNzk1MzJkZTAtZWQ5ZS00NzhiLWJiNzctNTZlMTM3OGZjNjMyIiBjbGFzcz0iYWQtc2xvdC1jb250YWluZXIgYWQtc2xvdC1jb250YWluZXItZ2FfNzk1MzJkZTAtZWQ5ZS00NzhiLWJiNzctNTZlMTM3OGZjNjMyIiBkYXRhLXNpemVtYXA9IltbWzczMCwgNTAwXSwgW1s3MjgsIDkwXV1dLCBbWzAsIDBdLCBbWzMwMCwgNTBdXV1dIiBkYXRhLWFkcGF0aD0iLzE1NzI2NzAyNzYxL0Rlc2t0b3AvbnVyc2VlZHVjYXRvcm9ubGluZS9PdGhlci9Ub3AiIGRhdGEtYXV0b2xvYWQ9InllcyIgZGF0YS1vdXRvZnBhZ2U9Im5vIiBkYXRhLXN0aWNreT0ieWVzIiBkYXRhLXNsb3R0YXJnZXRpbmc9JycgZGF0YS1kaXNwbGF5c2x1Zz0ieWVzIiBkYXRhLXN0aWNreS1kdXJhdGlvbj0iNSIgZGF0YS1uYW1lPSJUb3AiPjwvZGl2Ph8AZ2QCFQ9kFgJmD2QWEGYPZBYEZg9kFgoCAQ8WAh8AaBYEAgMPZBYQAgEPFgIfAGgWAgIBDw8WAh4LTmF2aWdhdGVVcmwFnAFodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9zZWN1cmUvcGFnZXMvbXlhY2NvdW50LmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDZkZAIDDxYCHwBoFgICAQ8PFgIfCgW9AWh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL3NlY3VyZS9wYWdlcy9teWFjY291bnQuYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NiZlZGl0V2ViUGFydD1lZGl0Q2hhbmdlUGFzc3dvcmRXUGRkAgUPFgIfAGgWAgIBDw8WAh8KBZ4BaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvc2VjdXJlL3BhZ2VzL215ZmF2b3JpdGVzLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDZkZAIHD2QWAgIBDw8WAh8KBbcBaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvc2VjdXJlL3BhZ2VzL215ZmF2b3JpdGVzLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDYmY29sbGVjdGlvbj1TYXZlZFNlYXJjaGVzZGQCCw9kFgICAQ8PFgIfCgWUAWh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL3BhZ2VzL3JlZ2lzdGVyLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDZkZAIND2QWAgIBDxYCHwIFGWh0dHA6Ly9oZWFsdGhqb2JzcGx1cy5jb21kAg8PFgIfAGcWAgIBDw8WBh8KBbEBaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvbG9naW4uYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NiZSZXF1ZXN0Rm9yPUFjdGl2YXRlU3Vic2NyaXB0aW9uHgdFbmFibGVkZx8AZ2RkAhMPFgIfAGgWAgIBDw8WAh8KBakBaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvX2xheW91dHMvMTUvb2Frcy5qb3VybmFscy9sb2dvdXQuYXNweD9Db250ZXh0VXJsPWh0dHBzJTNhJTJmJTJmam91cm5hbHMubHd3LmNvbSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZmRlZmF1bHQuYXNweGRkAgUPFgIfAGgWAgIBDxQrAAJkZGQCAw8WAh8AZ2QCBA9kFgICAQ8PFggfBwUgdXNlci1tZW51X19saW5rIGpzLXJlZ2lzdGVyLWxpbmsfCgWUAWh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL3BhZ2VzL3JlZ2lzdGVyLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDYfCAICHwBnFgIeC2RhdGEtY29uZmlnBVR7ImV2ZW50TmFtZSI6IlJlZ2lzdGVyIiwiZXZlbnREZXRhaWwiOnsic291cmNlIjoiTWFzdGhlYWQgRHJvcGRvd24ifSwiaXNOdWxsIjpmYWxzZX1kAgUPFgIfAGcWAgIBDw8WAh8KBSBodHRwczovL3Nob3AubHd3LmNvbS9wLzAzNjMtMzYyNGRkAggPFgIfAGhkAgEPZBYGZg8QDxYGHg1EYXRhVGV4dEZpZWxkBQRUZXh0Hg5EYXRhVmFsdWVGaWVsZAUEVGV4dB4LXyFEYXRhQm91bmRnZBAVBgNBbGwIQXJ0aWNsZXMGSW1hZ2VzBlZpZGVvcwhQb2RjYXN0cwVCbG9ncxUGA0FsbAhBcnRpY2xlcwZJbWFnZXMGVmlkZW9zCFBvZGNhc3RzBUJsb2dzFCsDBmdnZ2dnZ2RkAgUPDxYCHwoFRmh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL3BhZ2VzL2FkdmFuY2Vkc2VhcmNoLmFzcHhkZAIGDw8WAh8LaGRkAgEPDxYCHwoFIGh0dHBzOi8vc2hvcC5sd3cuY29tL3AvMDM2My0zNjI0ZGQCAg8PFgIfCgWUAWh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL3BhZ2VzL3JlZ2lzdGVyLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDZkZAIDDw8WBB8KBZwBaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvc2VjdXJlL3BhZ2VzL215YWNjb3VudC5hc3B4P0NvbnRleHRVcmw9JTJmbnVyc2VlZHVjYXRvcm9ubGluZSUyZnBhZ2VzJTJmdmlkZW8uYXNweCUzZmF1dG9QbGF5JTNkZmFsc2UlMjZ2JTNkMzQ2HwBoZGQCBA8PFgIfAGgWAh8FBSJib3JkZXItcmlnaHQ6MXB4IHNvbGlkICFpbXBvcnRhbnQ7ZAIGDw8WAh8KBakBaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvX2xheW91dHMvMTUvb2Frcy5qb3VybmFscy9sb2dvdXQuYXNweD9Db250ZXh0VXJsPWh0dHBzJTNhJTJmJTJmam91cm5hbHMubHd3LmNvbSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZmRlZmF1bHQuYXNweBYCHwUFImJvcmRlci1yaWdodDoxcHggc29saWQgIWltcG9ydGFudDtkAgcPFgIfDAW5AXsiYnJvd3NpbmdIaXN0b3J5Ijp7ImlzRW5hYmxlZCI6dHJ1ZSwic2VydmljZVVybCI6Imh0dHBzOi8vYXBpbS1obHJwLWVqcC1wcm9kLmF6dXJlLWFwaS5uZXQvZWUiLCJwZGZEb3dubG9hZFVybCI6Ii9fbGF5b3V0cy8xNS9vYWtzLmpvdXJuYWxzL2Rvd25sb2FkcGRmLmFzcHg/dHJja25nX3NyY19wZz1IaXN0b3J5VGFiIn19ZAIKD2QWBmYPEA8WBh8NBQRUZXh0Hw4FBFRleHQfD2dkEBUGA0FsbAhBcnRpY2xlcwZJbWFnZXMGVmlkZW9zCFBvZGNhc3RzBUJsb2dzFQYDQWxsCEFydGljbGVzBkltYWdlcwZWaWRlb3MIUG9kY2FzdHMFQmxvZ3MUKwMGZ2dnZ2dnZGQCBQ8PFgIfCgVGaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvYWR2YW5jZWRzZWFyY2guYXNweGRkAgYPDxYCHwtoZGQCFw9kFgJmD2QWAgIBDw8WAh8AaGRkAiEPZBYCZg9kFhwCAQ9kFgJmD2QWAmYPZBYIAgEPFgIeA3NyYwVgaHR0cHM6Ly9pbWFnZXMuam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL1hMYXJnZVRodW1iLjAwMDA2MjIzLTIwMjQwMTAwMC0wMDAwMC5DVi5qcGVnZAIDDxYCHglpbm5lcmh0bWwFE05ldmVyIE1pc3MgYW4gSXNzdWVkAgUPFgIfEQVBR2V0IG5ldyBqb3VybmFsIFRhYmxlcyBvZiBDb250ZW50cyBzZW50IHJpZ2h0IHRvIHlvdXIgZW1haWwgaW5ib3hkAgkPFgYeD2RhdGEtYWxlcnQtdHlwZQUERXRvYx4TZGF0YS1zdWJzY3JpYmVkLW1zZwVPWW91IGFyZSBub3cgc3Vic2NyaWJlZCB0byByZWNlaXZlIGVUT0MgYWxlcnRzIHdoZW5ldmVyIG5ldyBpc3N1ZXMgYXJlIHB1Ymxpc2hlZB8RBRRHZXQgTmV3IElzc3VlIEFsZXJ0c2QCAw9kFggCAQ8UKwACDxYEHw9nHgtfIUl0ZW1Db3VudAIFZGQWCmYPZBYCZg8VAzovbnVyc2VlZHVjYXRvcm9ubGluZS9wYWdlcy92aWV3YWxsbW9zdHBvcHVsYXJhcnRpY2xlcy5hc3B4AAxNb3N0IFBvcHVsYXJkAgEPZBYCZg8VA0svbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xMDMzL29ha3Muam91cm5hbHMvaW5mb3JtYXRpb25mb3JhdXRob3JzLmFzcHgAC0ZvciBBdXRob3JzZAICD2QWAmYPFQMvL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvYWJvdXR0aGVqb3VybmFsLmFzcHgAEUFib3V0IHRoZSBKb3VybmFsZAIDD2QWAmYPFQMpL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvaXNzdWVsaXN0LmFzcHgAC1Bhc3QgSXNzdWVzZAIED2QWAmYPFQMqL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvY3VycmVudHRvYy5hc3B4AA1DdXJyZW50IElzc3VlZAIDD2QWAmYPDxYCHwoFlAFodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9wYWdlcy9yZWdpc3Rlci5hc3B4P0NvbnRleHRVcmw9JTJmbnVyc2VlZHVjYXRvcm9ubGluZSUyZnBhZ2VzJTJmdmlkZW8uYXNweCUzZmF1dG9QbGF5JTNkZmFsc2UlMjZ2JTNkMzQ2ZGQCBQ8WAh8AZxYCZg8PFgIfCgUgaHR0cHM6Ly9zaG9wLmx3dy5jb20vcC8wMzYzLTM2MjRkZAIJDxYCHwBoFgICAQ8UKwACZGRkAgUPZBYMAgEPZBYCAgEPFCsAAg8WBB8PZx8UAgJkZBYEZg9kFgJmDxUEAE4vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xNS8xMDMzL29ha3Muam91cm5hbHMvaW5mb3JtYXRpb25mb3JhdXRob3JzLmFzcHgAEVN1Ym1pdCBhbiBhcnRpY2xlZAIBD2QWAmYPFQQAJWh0dHBzOi8vd2thdXRob3JzZXJ2aWNlcy5lZGl0YWdlLmNvbS8GX2JsYW5rFkhvdyB0byBwdWJsaXNoIHdpdGggdXNkAgUPFgIfFAIEFghmD2QWAmYPFQQaZWpwLWZvb3Rlci0tc2hvdy1vbi1tb2JpbGWKAWh0dHBzOi8vbHd3LmNvbS9zZWN1cmUvcGFnZXMvYWN0aXZhdGVzdWJzY3JpcHRpb24uYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NgAiQWN0aXZhdGUgeW91ciBqb3VybmFsIHN1YnNjcmlwdGlvbmQCAQ9kFgJmDxUEGmVqcC1mb290ZXItLWhpZGUtb24tbW9iaWxligFodHRwczovL2x3dy5jb20vc2VjdXJlL3BhZ2VzL2FjdGl2YXRlc3Vic2NyaXB0aW9uLmFzcHg/Q29udGV4dFVybD0lMmZudXJzZWVkdWNhdG9yb25saW5lJTJmcGFnZXMlMmZ2aWRlby5hc3B4JTNmYXV0b1BsYXklM2RmYWxzZSUyNnYlM2QzNDYAHUFjdGl2YXRlIEpvdXJuYWwgU3Vic2NyaXB0aW9uZAICD2QWAmYPFQQaZWpwLWZvb3Rlci0taGlkZS1vbi1tb2JpbGU4aHR0cHM6Ly93a2hscnAubXkuc2l0ZS5jb20vTGlwcGluY290dE9ubGluZUhlbHBDZW50ZXIvcy8AFkJyb3dzZSB0aGUgaGVscCBjZW50ZXJkAgMPZBYCZg8VBBplanAtZm9vdGVyLS1zaG93LW9uLW1vYmlsZVlodHRwczovL3draGVhbHRoLmZvcmNlLmNvbS9sd3dvbmxpbmUvcy90b3BpYy8wVE8wVjAwMDAwMVlnTFpXQTAvbHd3LW9ubGluZT90YWJzZXQtZGRiZmU9MgAESGVscGQCBw8WBh8CBSBodHRwczovL3d3dy50ZmFmb3Jtcy5jb20vNDk2NjU3MB4GdGFyZ2V0BQZfYmxhbmsfEQUYU3VibWl0IGEgU2VydmljZSBSZXF1ZXN0ZAINDxYCHwBoZAIPDxQrAAIPFgQfD2cfFGZkZGQCEQ8WAh8AZ2QCBw8WAh8MBc0PeyJsb2dpbkNvbmZpZ3VyYXRpb24iOnsic2VydmljZVVybCI6Imh0dHBzOi8vc2VydmljZXMuam91cm5hbHMubHd3LmNvbS9JbnRlZ3JhdGlvblNlcnZpY2VzL0FjY291bnRTZXJ2aWNlLnN2Yy9Mb2dpbiIsInJlZ2lzdGVyVXJsIjoiaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvcmVnaXN0ZXIuYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NiIsImZvcmdvdFBhc3N3b3JkVXJsIjoiaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvZm9yZ290cGFzc3dvcmQuYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NiIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvcGFnZXMvbG9naW4uYXNweD9Db250ZXh0VXJsPSUyZm51cnNlZWR1Y2F0b3JvbmxpbmUlMmZwYWdlcyUyZnZpZGVvLmFzcHglM2ZhdXRvUGxheSUzZGZhbHNlJTI2diUzZDM0NiIsInRva2VuS2V5IjoiQXBwU3NvVG9rZW4iLCJzc29Mb2dpbk9wdGlvbnMiOltdLCJjdXN0b21lclNlcnZpY2UiOnsiY3VzdG9tZXJTZXJ2aWNlVVNQaG9uZSI6Iig4MDApIDYzOC0zMDMwIiwiY3VzdG9tZXJTZXJ2aWNlSW50ZXJuYXRpb25hbFBob25lIjoiMzAxLTIyMy0yMzAwIiwiY3VzdG9tZXJTZXJ2aWNlRW1haWwiOiJjdXN0b21lcnNlcnZpY2VAbHd3LmNvbSJ9LCJ1c2VBbHRlcm5hdGl2ZUFjY291bnRMaW5rcyI6ZmFsc2V9LCJjb21tb25Db25maWd1cmF0aW9uIjp7ImNvbW1vbkVuZHBvaW50cyI6eyJhZGRUb0Zhdm9yaXRlc1NlcnZpY2VVcmwiOiJodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xNS9PQUtTLkpvdXJuYWxzL1VzZXJDb2xsZWN0aW9uc1NlcnZpY2Uuc3ZjL0FkZFRvRmF2b3JpdGVzIiwic2F2ZVNlYXJjaFNlcnZpY2VVcmwiOiJodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xNS9PQUtTLkpvdXJuYWxzL1VzZXJDb2xsZWN0aW9uc1NlcnZpY2Uuc3ZjL1NhdmVTZWFyY2giLCJjb3VudGVyRGF0YVNlcnZpY2VVcmwiOiJodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy8xNS9PQUtTLkpvdXJuYWxzL0R1YWxBY2Nlc3NTZXJ2aWNlLnN2Yy9TZW5kQ291bnRlckRhdGFSZXF1ZXN0QnlBTiJ9LCJrYWx0dXJhIjp7InBhcnRuZXJJZCI6IjEzMTU2MzEiLCJwbGF5ZXJJZCI6IjUyMjUzODcyIiwia2FsdHVyYVdpZGdldFVybCI6Imh0dHBzOi8vY2RuYXBpc2VjLmthbHR1cmEuY29tL3AvMTMxNTYzMS9lbWJlZFBsYXlraXRKcy91aWNvbmZfaWQvNTIyNTM4NzIifSwiYnJpZ2h0Q292ZSI6eyJicmlnaHRDb3ZlU2NyaXB0VXJsIjoiaHR0cHM6Ly9wbGF5ZXJzLmJyaWdodGNvdmUubmV0LzIzMjQ5ODI2ODcwMDEvSHlQMEpTQVJ4X2RlZmF1bHQvaW5kZXgubWluLmpzIiwiZGF0YUFjY291bnQiOiIyMzI0OTgyNjg3MDAxIiwiZGF0YVBsYXllciI6Ikh5UDBKU0FSeCJ9LCJtYXRoIjp7ImxpYlVybCI6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbWF0aGpheEAzL2VzNS90ZXgtbW1sLWNodG1sLmpzIn0sInJlY29XaWRnZXQiOnsiam91cm5hbHMiOlt7IklkIjoibnVyc2VlZHVjYXRvcm9ubGluZSIsIlZlcnNpb24iOiIwNC4wMyIsIlByb2R1Y3RDb2RlIjoibmVkdSJ9XSwicHViRmlsdGVyIjp7fSwiY2xpZW50SWQiOiJlanBfdjMiLCJsaWJVcmwiOiJodHRwczovL2Fzc2V0cy5vdmlkLmNvbS93aWRnZXQvdjMvd2lkZ2V0LmpzIn0sInNjaXRlQmFkZ2UiOnsibGliVXJsIjoiaHR0cHM6Ly9jZG4uc2NpdGUuYWkvYmFkZ2Uvc2NpdGUtYmFkZ2UtbGF0ZXN0Lm1pbi5qcyJ9fX1kAgkPZBYCAgEPZBYCAgEPFCsAAg8WBB8PZx8UAgJkZBYEZg9kFgJmDxUIADhodHRwczovL3d3dy5mYWNlYm9vay5jb20vTnVyc2UtRWR1Y2F0b3ItMTM3MDA0NjM5NzExNzcxLwZfYmxhbmsIRmFjZWJvb2sIRmFjZWJvb2sMZGlzcGxheTpub25lABd3ay1pY29uLWZpbGxlZC1mYWNlYm9va2QCAQ9kFgJmDxUIACNodHRwczovL3R3aXR0ZXIuY29tL05Fam91cm5hbG9ubGluZQZfYmxhbmsHVHdpdHRlcgdUd2l0dGVyDGRpc3BsYXk6bm9uZQAWd2staWNvbi1maWxsZWQtdHdpdHRlcmQCCw8PFgQfCgVQaHR0cHM6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvX2xheW91dHMvb2Frcy5qb3VybmFscy9wcml2YWN5LmFzcHgfAQUOUHJpdmFjeSBQb2xpY3lkZAINDw8WAh8KBVNodHRwczovL2pvdXJuYWxzLmx3dy5jb20vbnVyc2VlZHVjYXRvcm9ubGluZS9fbGF5b3V0cy9vYWtzLmpvdXJuYWxzL2Rpc2NsYWltZXIuYXNweGRkAg8PDxYCHwoFTmh0dHBzOi8vam91cm5hbHMubHd3LmNvbS9udXJzZWVkdWNhdG9yb25saW5lL19sYXlvdXRzL29ha3Muam91cm5hbHMvdGVybXMuYXNweGRkAhEPDxYCHwoFVWh0dHBzOi8vd3d3LndvbHRlcnNrbHV3ZXIuY29tL2VuL3NvbHV0aW9ucy9saXBwaW5jb3R0LWpvdXJuYWxzL2xpcHBpbmNvdHQtb3Blbi1hY2Nlc3NkZAITDxQrAAIPFgQfD2cfFAIEZGQWCGYPZBYCZg8VBwAvL251cnNlZWR1Y2F0b3JvbmxpbmUvU2VjdXJlL1BhZ2VzL2ZlZWRiYWNrLmFzcHgADGRpc3BsYXk6bm9uZQAACEZlZWRiYWNrZAIBD2QWAmYPFQcAVGh0dHA6Ly9qb3VybmFscy5sd3cuY29tL251cnNlZWR1Y2F0b3JvbmxpbmUvX2xheW91dHMvMTAzMy9vYWtzLmpvdXJuYWxzL3NpdGVtYXAuYXNweAVibGFuawxkaXNwbGF5Om5vbmUAAAdTaXRlbWFwZAICD2QWAmYPFQcANi9udXJzZWVkdWNhdG9yb25saW5lL19sYXlvdXRzL09BS1MuSm91cm5hbHMvZmVlZHMuYXNweAAMZGlzcGxheTpub25lAAAJUlNTIEZlZWRzZAIDD2QWAmYPFQcAEGh0dHBzOi8vbHd3LmNvbS8ADGRpc3BsYXk6bm9uZQAADExXVyBKb3VybmFsc2QCFQ8PFgQfAQUfWW91ciBDYWxpZm9ybmlhIFByaXZhY3kgQ2hvaWNlcx8KBXdodHRwczovL3ByaXZhY3lwb3J0YWwtZGUub25ldHJ1c3QuY29tL3dlYmZvcm0vMjIxN2UxMTctNTI2Yi00Njk2LThhOTgtOGM0MDJmOGYyYjgxLzViMDQ5YmEzLTAxMDYtNGI3Ny1hN2RhLTVkMTIyMzhjOTBhNGRkAhcPFgIfEAU3L19sYXlvdXRzLzEwMzMvSU1BR0VTL09BS1MuSm91cm5hbHMvQ0FQcml2YWN5UG9saWN5LnBuZ2QCGQ8WAh8BBSw8c3Bhbj5Db3B5cmlnaHQmbmJzcDsmY29weTsmbmJzcDsyMDI0PC9zcGFuPmQCGw8WAh8BBZABPGEgaHJlZj0iaHR0cHM6Ly93d3cud29sdGVyc2tsdXdlci5jb20vZW4vaGVhbHRoIiB0YXJnZXQ9Il9ibGFuayI+V29sdGVycyBLbHV3ZXIgSGVhbHRoLCBJbmMuIGFuZC9vciBpdHMgc3Vic2lkaWFyaWVzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC48L2E+ZAIjD2QWAmYPZBYIZg8PFgIfAGhkZAICDw8WAh8AaGRkAgQPZBYCZg8WAh8AaGQCBg9kFgJmDxYCHwBoZAIlD2QWAmYPZBYCAgIPFgQfAwVJZWotYWR2ZXJ0aXNlbWVudCBlanAtYWR2ZXJ0aXNlbWVudC1oaWdoaW1wYWN0IGpzLWFkdmVydGlzZW1lbnQtaGlnaGltcGFjdB8AZxYCAgEPFgQfAQXEAzxkaXYgaWQ9ImdhX2RmMjdhNDEzLWUxZTYtNDJlMC05MTczLTg0NjQzYTVmZjg2NCIgY2xhc3M9ImFkLXNsb3QtY29udGFpbmVyIGFkLXNsb3QtY29udGFpbmVyLWdhX2RmMjdhNDEzLWUxZTYtNDJlMC05MTczLTg0NjQzYTVmZjg2NCIgZGF0YS1zaXplbWFwPSJbW1s5OTIsIDUwMF0sIFtbMzAwLCAyNTBdXV0sIFtbNzY4LCAxODBdLCBbWzcyOCwgOTBdXV0sIFtbMCwgMF0sIFtbMzAwLCA1MF1dXV0iIGRhdGEtYWRwYXRoPSIvMTU3MjY3MDI3NjEvRGVza3RvcC9udXJzZWVkdWNhdG9yb25saW5lL0hpZ2hJbXBhY3QiIGRhdGEtYXV0b2xvYWQ9InllcyIgZGF0YS1vdXRvZnBhZ2U9Im5vIiBkYXRhLXN0aWNreT0ieWVzIiBkYXRhLXNsb3R0YXJnZXRpbmc9JycgZGF0YS1kaXNwbGF5c2x1Zz0ieWVzIiBkYXRhLXN0aWNreS1kdXJhdGlvbj0iMTAiIGRhdGEtbmFtZT0iSGlnaEltcGFjdCI+PC9kaXY+HwBnZAInD2QWAmYPZBYCAgIPFgQfAwVPZWotYWR2ZXJ0aXNlbWVudCBlanAtYWR2ZXJ0aXNlbWVudC1wYWdldmlld3BpeGVsIGpzLWFkdmVydGlzZW1lbnQtcGFnZXZpZXdwaXhlbB8AZxYCAgEPFgQfAQWTAzxkaXYgaWQ9ImdhXzNmZjNmYWExLTUxNDQtNDhjZi04MjU3LTlmOTZmMGVmMWZhMiIgY2xhc3M9ImFkLXNsb3QtY29udGFpbmVyIGFkLXNsb3QtY29udGFpbmVyLWdhXzNmZjNmYWExLTUxNDQtNDhjZi04MjU3LTlmOTZmMGVmMWZhMiIgZGF0YS1zaXplbWFwPSJbW1swLCAwXSwgW1sxLCAxXV1dXSIgZGF0YS1hZHBhdGg9Ii8xNTcyNjcwMjc2MS9EZXNrdG9wL251cnNlZWR1Y2F0b3JvbmxpbmUvT3RoZXIvUGFnZVZpZXdQaXhlbCIgZGF0YS1hdXRvbG9hZD0ieWVzIiBkYXRhLW91dG9mcGFnZT0ibm8iIGRhdGEtc3RpY2t5PSJubyIgZGF0YS1zbG90dGFyZ2V0aW5nPScnIGRhdGEtZGlzcGxheXNsdWc9Im5vIiBkYXRhLXN0aWNreS1kdXJhdGlvbj0iMCIgZGF0YS1uYW1lPSJQYWdlVmlld1BpeGVsIj48L2Rpdj4fAGdkAisPZBYCZg8WAh8AaGQCEQ9kFgJmD2QWBGYPFggeDWRhdGEtYWRjb25maWcFywF7ImFkVGl0bGUiOiJBZHZlcnRpc2VtZW50Iiwic2xvdENsYXNzIjoiYWQtc2xvdC1jb250YWluZXIiLCJ0b3BCYW5uZXIiOnsic3RpY2t5IjoidHJ1ZSIsInN0aWNreUR1cmF0aW9uIjoiNTAwMCJ9LCJsYXp5TG9hZGluZ0VuYWJsZWQiOmZhbHNlLCJjb250ZXh0VGFyZ2V0aW5nRW5hYmxlZCI6dHJ1ZSwibnBpSGFzaCI6IiIsInBhZ2VUYXJnZXRpbmciOnt9fR4SZGF0YS12aWRlb2FkY29uZmlnBboCeyJzZXJ2ZXJVUkwiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzIiwic2l6ZXMiOiIzMjB4MTgwfDY0MHgzNjAiLCJvdmVybGF5VW5pdFBhdGgiOiIvMTU3MjY3MDI3NjEvRGVza3RvcC9udXJzZWVkdWNhdG9yb25saW5lL1ZpZGVvL292ZXJsYXkiLCJwcmVyb2xsVW5pdFBhdGgiOiIvMTU3MjY3MDI3NjEvRGVza3RvcC9udXJzZWVkdWNhdG9yb25saW5lL1ZpZGVvL3ByZS1yb2xsIiwicG9zdHJvbGxVbml0UGF0aCI6Ii8xNTcyNjcwMjc2MS9EZXNrdG9wL251cnNlZWR1Y2F0b3JvbmxpbmUvVmlkZW8vcG9zdC1yb2xsIn0fAwUManMtYWQtY29uZmlnHwBnZAICDxYCHwBnZBgIBRdjdGwwMCRjdGw1NiRsdlNpdGVMaW5rcw8UKwAOZGRkZGRkZDwrAAUAAgVkZGRmAv////8PZAUaY3RsMDAkY3RsNTYkbHZDb250ZW50TGlua3MPFCsADmRkZGRkZGQ8KwAEAAIEZGRkZgL/////D2QFH2N0bDAwJGN0bDU2JGx2Rm9ySm91cm5hbEF1dGhvcnMPFCsADmRkZGRkZGQUKwACZGQCAmRkZGYC/////w9kBTxjdGwwMCRjdGw1MSRIZWFkZXIkVXNlckFjdGlvblRvb2xzJGx2QWx0ZXJuYXRpdmVBY2NvdW50TGlua3MPZ2QFGGN0bDAwJGN0bDU2JGx2SW5mb1Bob25lcw88KwAOAwhmDGYNAv////8PZAUZY3RsMDAkY3RsNTYkbHZTb2NpYWxMaW5rcw8UKwAOZGRkZGRkZBQrAAJkZAICZGRkZgL/////D2QFGGN0bDAwJGN0bDU2JGx2T3RoZXJMaW5rcw9nZAVMY3RsMDAkY3RsNTEkSGVhZGVyJFVzZXJBY3Rpb25Ub29scyRyZWNlbnRTZWFyY2hlc0NvbnRyb2wkbHZ3UmVjZW50U2VhcmNoTGlzdA88KwAOAwhmDGYNAv////8PZBCKwbliwW8zC+em3iSqVxOHOYS7/eGO8OwHO/wT2hCV" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=dnaDAFNiQGyAS-8AAnEusSAvRcEvxsZnbowJJdr_Pi9Oz7lzs5k45FStkRo1xlEHk9NeovbY1Hwq_CwXR_md87LXDXM1L2hMpaL8ksMyAA01&amp;t=637811513229275428" type="text/javascript"></script>


<script type="text/javascript">
//<![CDATA[
var MSOWebPartPageFormName = 'aspnetForm';
var g_presenceEnabled = true;
var g_wsaEnabled = false;

var g_correlationId = '1a2b07a1-a22b-f0c3-dd35-879ea2e6072a';
var g_wsaQoSEnabled = false;
var g_wsaQoSDataPoints = [];
var g_wsaRUMEnabled = false;
var g_wsaLCID = 1033;
var g_wsaListTemplateId = 850;
var g_wsaSiteTemplateId = 'EJOURNALS#7';
var _spPageContextInfo={"webServerRelativeUrl":"/nurseeducatoronline","webAbsoluteUrl":"https://journals.lww.com/nurseeducatoronline","viewId":"","listId":"{a516edd4-ab82-4c66-9a4d-48035ccf0a58}","listPermsMask":{"High":0,"Low":200769},"listUrl":"/nurseeducatoronline/Pages","listTitle":"Pages","listBaseTemplate":850,"viewOnlyExperienceEnabled":false,"blockDownloadsExperienceEnabled":false,"idleSessionSignOutEnabled":false,"cdnPrefix":"","siteAbsoluteUrl":"https://journals.lww.com/nurseeducatoronline","siteId":"{a554f8af-e53b-4718-bb1c-5b850621c67f}","showNGSCDialogForSyncOnTS":false,"supportPoundStorePath":true,"supportPercentStorePath":true,"siteSubscriptionId":null,"CustomMarkupInCalculatedFieldDisabled":true,"AllowCustomMarkupInCalculatedField":false,"isSPO":false,"farmLabel":null,"serverRequestPath":"/nurseeducatoronline/pages/video.aspx","layoutsUrl":"_layouts/15","webId":"{a5355f70-d3c0-4083-be3c-74c387b2e9db}","webTitle":"Nurse Educator","webTemplate":"20200","webTemplateConfiguration":"EJOURNALS#7","webDescription":"","tenantAppVersion":"0","isAppWeb":false,"webLogoUrl":"/_layouts/images/titlegraphic.gif","webLanguage":1033,"currentLanguage":1033,"currentUICultureName":"en-US","currentCultureName":"en-US","currentCultureLCID":1033,"env":null,"nid":0,"fid":0,"serverTime":"2024-01-31T17:15:31.9610490Z","siteClientTag":"4$$16.0.10404.20003","crossDomainPhotosEnabled":false,"openInClient":false,"Has2019Era":true,"webUIVersion":15,"webPermMasks":{"High":0,"Low":196608},"pageListId":"{a516edd4-ab82-4c66-9a4d-48035ccf0a58}","pageItemId":64,"pagePermsMask":{"High":0,"Low":200769},"pagePersonalizationScope":1,"userEmail":"","userId":0,"userLoginName":null,"userDisplayName":null,"isAnonymousUser":true,"isAnonymousGuestUser":false,"isEmailAuthenticationGuestUser":false,"isExternalGuestUser":false,"systemUserKey":null,"alertsEnabled":true,"siteServerRelativeUrl":"/nurseeducatoronline","allowSilverlightPrompt":"True","themeCacheToken":"/nurseeducatoronline::5:","themedCssFolderUrl":null,"themedImageFileNames":null,"modernThemingEnabled":true,"isSiteAdmin":false,"ExpFeatures":[480216468,1884350801,1158731092,62197791,538521105,335811073,4194306,34614301,268500996,-1946025984,28445328,-2147475455,134291456,65536,288,950272,1282,808326148,134217873,0,0,-1073217536,545285252,18350656,-467402752,6291457,-2147483644,1074794496,-1728053184,1845537108,622628,4102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"killSwitches":{},"InternalValidAuthorities":["journals.na.lww.com","journals.lww.com","journals.na.lww.com","journals.lww.com","cloud-journals.lww.com","cloud-journals.lww.com"],"CorrelationId":"1a2b07a1-a22b-f0c3-dd35-879ea2e6072a","hasManageWebPermissions":false,"isNoScriptEnabled":false,"groupId":null,"groupHasHomepage":true,"groupHasQuickLaunchConversationsLink":false,"departmentId":null,"hubSiteId":null,"hasPendingWebTemplateExtension":false,"isHubSite":false,"isWebWelcomePage":false,"siteClassification":"","hideSyncButtonOnODB":false,"showNGSCDialogForSyncOnODB":false,"sitePagesEnabled":false,"sitePagesFeatureVersion":0,"DesignPackageId":"00000000-0000-0000-0000-000000000000","groupType":null,"groupColor":"#188387","siteColor":"#188387","headerEmphasis":0,"navigationInfo":null,"guestsEnabled":false,"MenuData":{"SignInUrl":"/nurseeducatoronline/_layouts/15/Authenticate.aspx?Source=%2Fnurseeducatoronline%2Fpages%2Fvideo%2Easpx%3FautoPlay%3Dfalse%26v%3D346"},"RecycleBinItemCount":-1,"PublishingFeatureOn":true,"PreviewFeaturesEnabled":false,"disableAppViews":false,"disableFlows":false,"serverRedirectedUrl":null,"formDigestValue":"0xE2DB52324420AF771ABFF105EF4827F4D4ED285D55ECD49283C8C15B886E41CCFB1CFE71358DFC004F26E8BBE4E7784AB32EE7FFAE9967E044D0036AE55E6856,31 Jan 2024 17:15:31 -0000","maximumFileSize":10240,"formDigestTimeoutSeconds":1800,"canUserCreateMicrosoftForm":false,"canUserCreateVisioDrawing":true,"readOnlyState":null,"isTenantDevSite":false,"preferUserTimeZone":false,"userTimeZoneData":null,"userTime24":false,"userFirstDayOfWeek":null,"webTimeZoneData":null,"webTime24":false,"webFirstDayOfWeek":null,"isSelfServiceSiteCreationEnabled":null,"alternateWebAppHost":"","aadTenantId":"","aadUserId":"","aadInstanceUrl":"","msGraphEndpointUrl":"https://","allowInfectedDownload":true};_spPageContextInfo.updateFormDigestPageLoaded=new Date();_spPageContextInfo.clientServerTimeDelta=new Date(_spPageContextInfo.serverTime)-new Date();if(typeof(define)=='function'){define('SPPageContextInfo',[],function(){return _spPageContextInfo;});}var L_Menu_BaseUrl="/nurseeducatoronline";
var L_Menu_LCID="1033";
var L_Menu_SiteTheme="null";
document.onreadystatechange=fnRemoveAllStatus; function fnRemoveAllStatus(){removeAllStatus(true)};//]]>
</script>

<script src="https://lww.com/_layouts/15/1033/Scripts/wk/alerts-subscription.min.js?v=05.18.00.45-2" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
Flighting.ExpFeatures = [480216468,1884350801,1158731092,62197791,538521105,335811073,4194306,34614301,268500996,-1946025984,28445328,-2147475455,134291456,65536,288,950272,1282,808326148,134217873,0,0,-1073217536,545285252,18350656,-467402752,6291457,-2147483644,1074794496,-1728053184,1845537108,622628,4102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; (function()
{
    if(typeof(window.SP) == "undefined") window.SP = {};
    if(typeof(window.SP.YammerSwitch) == "undefined") window.SP.YammerSwitch = {};

    var ysObj = window.SP.YammerSwitch;
    ysObj.IsEnabled = false;
    ysObj.TargetYammerHostName = "www.yammer.com";
} )(); var _spWebPartComponents = new Object();function openEmtcIfAuthenticated(resourceId){logCounterDataEmailToColleagueByAN('', false); window.location.assign('https://journals.lww.com/nurseeducatoronline/pages/login.aspx?ReturnUrl=%2fnurseeducatoronline%2fpages%2fvideo.aspx%3fautoPlay%3dfalse%26v%3d346');}function getEmailRegularExpression() { return /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/; }function getMultipleEmailsRegularExpression() { return /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/; }function getMailMessage() { return 'Thought you might appreciate this item(s) I saw in Nurse Educator.'; }//]]>
</script>

<script src="/ScriptResource.axd?d=11ySqNT2t8wJXf-5ynqkHTYVaR0CZPUQDLhFk5-B61-yY4pHK9T4A-OmNoLERHX1OU2F3io32lKHXeNlvH0kpnJP6-ZQm2Ado5OlvNqUwB9TpwuIgMVQBgIz-DSVpHWqDoVFHrt69C9fSrbhF6t9QBuuAcSpa-p9_2de4EnR0aU1&amp;t=2265eaa7" type="text/javascript"></script>
<script src="/_layouts/15/blank.js?rev=6Epdi%2BEh0XOHrFNRcf4Cwg%3D%3DTAG0" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
window.SPThemeUtils && SPThemeUtils.RegisterCssReferences([]);
(function(){

        if (typeof(_spBodyOnLoadFunctions) === 'undefined' || _spBodyOnLoadFunctions === null) {
            return;
        }
        _spBodyOnLoadFunctions.push(function() {
            SP.SOD.executeFunc('core.js', 'FollowingDocument', function() { FollowingDocument(); });
        });
    })();(function(){

        if (typeof(_spBodyOnLoadFunctions) === 'undefined' || _spBodyOnLoadFunctions === null) {
            return;
        }
        _spBodyOnLoadFunctions.push(function() {
            SP.SOD.executeFunc('core.js', 'FollowingCallout', function() { FollowingCallout(); });
        });
    })();if (typeof(DeferWebFormInitCallback) == 'function') DeferWebFormInitCallback();//]]>
</script>

<script src="/WebResource.axd?d=ujR-dJ4zUHGN6jELxLVetl199sJpE_qZiBmEfUoaRM4DCmEfpBr9GGhTGo9ZJcfF6mQ45yf4Ik1RnQ9yqZG9_5EcA9R0xynU6JEfYiEh3vA1&amp;t=637811513229275428" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
function WebForm_OnSubmit() {
UpdateFormDigest('\u002fnurseeducatoronline', 1440000);if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;if (typeof(_spFormOnSubmitWrapper) != 'undefined') {return _spFormOnSubmitWrapper();} else {return true;};
return true;
}
//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="DFCAD294" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdACvScAPomUEfuXJ6lr8xfTFyQLWtVERrnnBjDi1TrnEeR4WvAxnu63PHPpRuQMmHD73hhCCDEOLJF8tjJaxmMzMg1YNR2eABby/ZmsATgKXmBIgiSF8jQJGeTpsLHGFoaml6MWDr3/8QXodhxVfx8FS0g7H8RoGW3YgcM38Iwm1iMoVcaco2XnSaoUn3/TSh9vw+j4gIpltQ5uW2VbbW1PImpoGMijX+dXo51/j94T3WnxtqL7EjWJewpmSUZzpKg5/Jtl4d8ICFIqbNuETyv88w038zSbCfvYdn0fsL6scwEdfJPc71FC5mBJymu6c9+5C0rDcTIucUcfVcXg24Qcj2Rwj5n+JKj+fmndTJk+d0g1Ns6wXx7DauK8z/WtJTWnj9qTe+W5DS1HpgmEvmovI14iQ+XkCnfxSv0yXht6ieDJtzFzR8syNRhfGfwSq/GQ4A45M1vfNdXzPTwjVcQ+2ia6amFEb/j9tiuMsekvwmwL2vaL5SrnSg5rvAhywk5+rNFhF1b0KSycCN55kmFNw0GZbPrRKe+jfieaxg5tqN/WAd/aM9EmdgjdRUFdYHVnKAfn5bByG8o+6N4Ztj5EyGgnCF/B0ZdZma13DCQsB6ptnw6xPqDbzh5JDWuGvu9OaKLgfqGEThY7c6RN4LyFR8Nc62HezU6mTzNkUWtXGt4UTxEgFUrsnH99f0W4IJ2+0z0rQ5JmJJtHYo3SRqT1HN+DZBJgPNyrrZGaSq41H3D4scNsuEmWRRscvnQ4L27oy1Di7Z4MdpD/H1UOTaPJuLAUKNHZtyYfAz5Wf9NT95V/GODoQp1tpcrvbew+9R3LjY15koXPPvLyGRq6qa5ODx422ubvKVuVTdySpiRuHpI9uuv22FpdEMEQLrtrVupK75pikkn3qpVl32cVuBC5v471S1WF9+1wdpY80UP9eLzfoPx6B33PW1pE+8AyC0QYs=" />
</div>

            <script type="text/javascript">
                var submitHook = function () { return false; }; theForm._spOldSubmit = theForm.submit; theForm.submit = function () { if (!submitHook()) { this._spOldSubmit(); } };
            </script>
            <span id="DeltaSPWebPartManager">
                
            </span>
            <script type="text/javascript">$.getJSON("https://login.journals.lww.com/AuthCheck.aspx?Callback=?", null, function (data) { if(data.IsAuthenticated.toLowerCase() == "true") {window.location.replace("https://login.journals.lww.com/?wa=wsignin1.0&wtrealm=urn%3ajournals&wctx=https%3a%2f%2fjournals.lww.com%2fnurseeducatoronline%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252fnurseeducatoronline%252fpages%252fvideo.aspx%253fautoPlay%253dfalse%2526v%253d346"); } }) </script>

        

        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager.Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
    const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

    let personalizedSectionsString = "";
    let sectionsHaveEverBeenHidden = false;
    let hasBeenHidden = false;
    let shouldReshowNow = false;
    let hiddenSections = {};

    const timeoutOptions = {
        pageMatchTimeout: 1000,
        redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500
    }

    const utils = {
        getGlobalContentZoneSelectors: () => {
            return ((Evergage.getState().config.global || {}).contentZones || [])
                .filter((contentZone) => (contentZone || {}).selector)
                .map((contentZone) => contentZone.selector);
        },
        getPageTypeContentZoneSelectors: () => {
            const { pageTypes } = Evergage.getState().config;
            return pageTypes.length < 1
                ? []
                : pageTypes
                    .map((pageType) => pageType.contentZones || [])
                    .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                    .filter((contentZone) => (contentZone || {}).selector)
                    .map((contentZone) => contentZone.selector);
        },
        buildContentZoneSelectors: () => {
            return [
                ...new Set([
                    ...utils.getGlobalContentZoneSelectors(),
                    ...utils.getPageTypeContentZoneSelectors()
                ])
            ];
        },
        addToPersonalizedSectionsString: (selector) => {
            if (typeof selector === "string") {
                try {
                    document.querySelector(selector);
                    if (personalizedSectionsString !== "") {
                        personalizedSectionsString += ", ";
                    }
                    personalizedSectionsString += selector;
                } catch (exception) {
                    Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                }
            }
        },
        hasBeenReshown: () => {
            return Evergage.cashDom(personalizationSectionsSelector).length === 0;
        }
    };

    const actions = {
        hideSections: () => {
            if (sectionsHaveEverBeenHidden) return;

            const selectors = utils.buildContentZoneSelectors();
            if (selectors.length === 0) {
                Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                return;
            }
            for (const selector of selectors) {
                utils.addToPersonalizedSectionsString(selector);
            }

            if (!personalizedSectionsString) return;

            const head = document.head || document.getElementsByTagName("head")[0];
            const style = document.createElement("style");
            Evergage.cashDom(style)
                .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

            clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
            window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                if (utils.hasBeenReshown()) return;
                shouldReshowNow = true;
                actions.reshowPersonalizedSectionsNow();
            }, timeoutOptions.redisplayTimeout);

            head.appendChild(style);
            sectionsHaveEverBeenHidden = true;
        },
        reshowPersonalizedSections: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (typeof window.requestAnimationFrame === "function") {
                    Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                    window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                } else {
                    actions.reshowPersonalizedSectionsNow();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSections");
            }
        },
        reshowReadyPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
            Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
        },
        reshowAllPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).remove();
            Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
        },
        reshowPersonalizedSectionsNow: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                    actions.reshowAllPersonalizedSections();
                } else if (Object.keys(hiddenSections).length > 0) {
                    personalizedSectionsString = "";
                    for (const contentZone in hiddenSections) {
                        utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                    }
                    actions.reshowReadyPersonalizedSections();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
            }
        }
    };

    const beaconListeners = {
        addOnInit: () => {
            document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                clearTimeout(window.evergagePageMatchTimeout);
                window.evergagePageMatchTimeout = setTimeout(function () {
                    const { pageType } = (Evergage.getCurrentPage().source || {});
                    if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                    shouldReshowNow = true;
                    actions.reshowPersonalizedSectionsNow();
                }, timeoutOptions.pageMatchTimeout);
            });
        },
        addPageMatchStatusUpdated: () => {
            document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                if (!hasBeenHidden) {
                    actions.hideSections();
                    if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                        hasBeenHidden = true;
                    }
                }
            });
        },
        addOnEventResponse: () => {
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                const { campaignResponses } = ((domEvent.detail || {}).response || {});
                if ((campaignResponses || []).length >= 1) {
                    personalizedSectionsString = "";
                    for (const campaign of campaignResponses) {
                        const { contentZone } = ((campaign || {}).payload || {});
                        const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                        if (typeof contentZoneSelector === "string") {
                            hiddenSections[contentZone] = contentZoneSelector;
                            utils.addToPersonalizedSectionsString(contentZoneSelector);
                        }
                    }
                    if (!personalizedSectionsString) {
                        actions.reshowPersonalizedSections();
                        return;
                    }

                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                } else {
                    actions.reshowPersonalizedSections();
                }
            });
        },
        addOnTemplateDisplayEnd: () => {
            document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                if (utils.hasBeenReshown()) return;
                const { contentZone } = ((domEvent.detail || {}).payload || {});
                if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                    delete hiddenSections[contentZone];
                }
                actions.reshowPersonalizedSections();
            });
        },
    };

    return {
        setPageMatchTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.pageMatchTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setPageMatchTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        setRedisplayTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.redisplayTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setRedisplayTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        init: function() {
            for (const key in beaconListeners) {
                beaconListeners[key]();
            }
        }
    };
})();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.restrictContentZone=t.executeControl=t.handleCampaignResponses=t.renderTemplate=t.resetTemplate=t.registerTemplate=t.executeBundles=void 0;var a=n(5),l=n(1),s=i(n(2)),c=new Map,u=new Map,p=new Set,d=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(s.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(s.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(s.VE_INDICATOR_FLAG)||document.location.href.includes(s.TEST_TEMPLATE_PARAMETER)},f=function(e){return c.get(e)},h=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){if(e){var n=!0;e.forEach((function(e){var r,o;try{try{var i=document.createElement("script");o="prepareTemplate"+e.id,i.text="function "+o+"(TemplateService) { "+e.bundle+" }",r=document.head.appendChild(i),window[o]({registerTemplate:t.registerTemplate})}catch(r){n=!1,Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}}catch(e){l.dispatchError(e)}finally{r&&r.parentNode.removeChild(r),o&&window[o]&&(window[o]=void 0)}})),n||console.log("Marketing Cloud Personalization will soon require your Content Security Policy to allow `unsafe-inline`.")}},t.registerTemplate=function(e){var t=new a.Template(e);c.set(e.name,t)},t.resetTemplate=function(e,t){var n=h(e,t),r=u.get(n);if(r)try{r()}catch(e){l.dispatchError(e)}u.delete(n)},t.renderTemplate=function(e,t){if(c.has(e)){var n=f(e).render(t);u.set(h(e,t),n)}},t.handleCampaignResponses=function(e){d()||e.filter((function(e){return"ng"===e.type})).filter((function(e){return!g(e)})).forEach((function(e){switch(e.userGroup){case"Default":m(e);break;case"Control":t.executeControl(e)}}))};var m=function(e){e.templateNames.forEach((function(n){t.renderTemplate(n,e.payload)}))};t.executeControl=function(e){e.templateNames.forEach((function(t){var n=f(t),r=e.payload;if(n.control)try{var o=n.control(r);l.handleTemplateDispatch(o,r)}catch(e){l.dispatchError(e)}}))};var g=function(e){return e.payload.contentZone&&p.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&p.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchError=t.handleTemplateDispatch=t.getQueryParam=void 0,t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var r=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}})),document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.mcis.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))};t.handleTemplateDispatch=function(e,t){window.Promise&&"function"==typeof window.Promise.resolve?window.Promise.resolve(e).then((function(){r(t)})):r(t)},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VE_ACTIVE_ELEMENT_ID=t.VE_INDICATOR_FLAG=t.VE_LOADING_ATTRIBUTE=t.TEST_TEMPLATE_PARAMETER=t.TEST_TEMPLATE_STORAGE_KEY=void 0,t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(4),o=n(6),i=n(0);function a(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",(function(){r.renderTestTemplate(),o.initPreview()}))}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,(function(e){i.executeBundles(e.detail.response.compiledCampaignTemplates),i.handleCampaignResponses(e.detail.response.campaignResponses)})),t.render=a,a()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTestTemplate=void 0;var r=n(0),o=n(1),i=n(2);t.renderTestTemplate=function(){if("true"==o.getQueryParam(i.TEST_TEMPLATE_PARAMETER)){var e=a();addEventListener("storage",(function(t){t.key==i.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=a())}))}};var a=function(){var e=localStorage.getItem(i.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var o=r(n(7)),i=n(1),a=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find((function(t){return t.name===e.contentZone}))||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){i.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return i.handleTemplateDispatch(t,e),this.reset.bind(this,e,this.generateHtml)}catch(e){i.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void i.dispatchError(o)}var a=this.generateHtml(t);if(!a)return;this.replaceContentAtTarget(a,r)}catch(e){i.dispatchError(e)}}},e}();t.Template=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPreview=void 0;var r=n(2),o=n(0);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var i=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,i),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"extend",(function(){return u})),n.d(r,"toString",(function(){return p})),n.d(r,"isFunction",(function(){return d})),n.d(r,"isArray",(function(){return f})),n.d(r,"indexOf",(function(){return h})),n.d(r,"escapeExpression",(function(){return m})),n.d(r,"isEmpty",(function(){return g})),n.d(r,"createFrame",(function(){return v})),n.d(r,"blockParams",(function(){return E})),n.d(r,"appendContextPath",(function(){return T}));var o={};n.r(o),n.d(o,"VERSION",(function(){return k})),n.d(o,"COMPILER_REVISION",(function(){return j})),n.d(o,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return I})),n.d(o,"REVISION_CHANGES",(function(){return L})),n.d(o,"HandlebarsEnvironment",(function(){return R})),n.d(o,"log",(function(){return H})),n.d(o,"createFrame",(function(){return v})),n.d(o,"logger",(function(){return M}));var i={};n.r(i),n.d(i,"checkRevision",(function(){return V})),n.d(i,"template",(function(){return B})),n.d(i,"wrapProgram",(function(){return G})),n.d(i,"resolvePartial",(function(){return Z})),n.d(i,"invokePartial",(function(){return F})),n.d(i,"noop",(function(){return q}));const a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,s=/[&<>"'`=]/;function c(e){return a[e]}function u(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let p=Object.prototype.toString,d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});const f=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===p.call(e)};function h(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function m(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return s.test(e)?e.replace(l,c):e}function g(e){return!e&&0!==e||!(!f(e)||0!==e.length)}function v(e){let t=u({},e);return t._parent=e,t}function E(e,t){return e.path=t,e}function T(e,t){return(e?e+".":"")+t}const y=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function w(e,t){let n,r,o,i,a=t&&t.loc;a&&(n=a.start.line,r=a.end.line,o=a.start.column,i=a.end.column,e+=" - "+n+":"+o);let l=Error.prototype.constructor.call(this,e);for(let e=0;e<y.length;e++)this[y[e]]=l[y[e]];Error.captureStackTrace&&Error.captureStackTrace(this,w);try{a&&(this.lineNumber=n,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:i,enumerable:!0})):(this.column=o,this.endColumn=i))}catch(e){}}w.prototype=new Error;var b=w;function _(e){!function(e){e.registerHelper("blockHelperMissing",(function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=v(n.data);e.contextPath=T(n.data.contextPath,n.name),n={data:e}}return o(t,n)}))}(e),function(e){e.registerHelper("each",(function(e,t){if(!t)throw new b("Must pass iterator to #each");let n,r,o=t.fn,i=t.inverse,a=0,l="";function s(t,i,a){n&&(n.key=t,n.index=i,n.first=0===i,n.last=!!a,r&&(n.contextPath=r+t)),l+=o(e[t],{data:n,blockParams:E([e[t],t],[r+t,null])})}if(t.data&&t.ids&&(r=T(t.data.contextPath,t.ids[0])+"."),d(e)&&(e=e.call(this)),t.data&&(n=v(t.data)),e&&"object"==typeof e)if(f(e))for(let t=e.length;a<t;a++)a in e&&s(a,a,a===e.length-1);else if(global.Symbol&&e[global.Symbol.iterator]){const t=[],n=e[global.Symbol.iterator]();for(let e=n.next();!e.done;e=n.next())t.push(e.value);for(let n=(e=t).length;a<n;a++)s(a,a,a===e.length-1)}else{let t;Object.keys(e).forEach(e=>{void 0!==t&&s(t,a-1),t=e,a++}),void 0!==t&&s(t,a-1,!0)}return 0===a&&(l=i(this)),l}))}(e),function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new b('Missing helper: "'+arguments[arguments.length-1].name+'"')}))}(e),function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new b("#if requires exactly one argument");return d(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||g(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new b("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))}(e),function(e){e.registerHelper("log",(function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)}))}(e),function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}(e),function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new b("#with requires exactly one argument");d(e)&&(e=e.call(this));let n=t.fn;if(g(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&(r=v(t.data),r.contextPath=T(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:E([e],[r&&r.contextPath])})}}))}(e)}function P(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}function O(e){!function(e){e.registerDecorator("inline",(function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=u({},i,t.partials);let a=e(r,o);return n.partials=i,a}),t.partials[r.args[0]]=r.fn,o}))}(e)}let C={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=h(C.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=C.lookupLevel(e),"undefined"!=typeof console&&C.lookupLevel(C.level)<=e){let n=C.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var M=C;function A(...e){return u(Object.create(null),...e)}const x=Object.create(null);function S(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==x[e]&&(x[e]=!0,(void 0)("error",`Handlebars: Access has been denied to resolve the property "${e}" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}(t),!1)}const k="4.7.7",j=8,I=7,L={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function R(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},_(this),O(this)}R.prototype={constructor:R,logger:M,log:M.log,registerHelper:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple helpers");u(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===p.call(e))u(this.partials,e);else{if(void 0===t)throw new b(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple decorators");u(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses(){Object.keys(x).forEach(e=>{delete x[e]})}};let H=M.log;function N(e){this.string=e}N.prototype.toString=N.prototype.toHTML=function(){return""+this.string};var D=N;function V(e){const t=e&&e[0]||1;if(!(t>=I&&t<=j)){if(t<I){const e=L[j],n=L[t];throw new b("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new b("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function B(e,t){if(!t)throw new b("No environment passed to template");if(!e||!e.main)throw new b("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!e||!(t in e))throw new b('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){let n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||function(e,t,n){return S("function"==typeof e?t.methods:t.properties,n)}(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){const n=e.length;for(let o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:m,invokePartial:function(n,r,o){o.hash&&(r=u({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let i=u({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=t.VM.invokePartial.call(this,n,r,i);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](r,i)),null!=a){if(o.indent){let e=a.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];a=e.join("\n")}return a}throw new b("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let i=this.programs[e],a=this.fn(e);return t||o||r||n?i=G(this,e,a,t,n,r,o):i||(i=this.programs[e]=G(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){let n=e||t;return e&&t&&e!==t&&(n=u({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?v(t):{}).root=e);return t}(t,i));let a,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,l,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=U(e.main,s,r,n.depths||[],i,l))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{let i=u({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(n=>{let r=e[n];e[n]=function(e,t){const n=t.lookupProperty;return function(e,t){return"function"!=typeof e?e:function(){const n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}(e,e=>u({lookupProperty:n},e))}(r,t)})}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=u({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=function(e){let t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;let n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:A(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:A(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}(o);let a=o.allowCallsToHelperMissing||n;P(r,"helperMissing",a),P(r,"blockHelperMissing",a)}},o._child=function(t,n,o,i){if(e.useBlockParams&&!o)throw new b("must pass block params");if(e.useDepths&&!i)throw new b("must pass parent depths");return G(r,t,e[t],n,0,o,i)},o}function G(e,t,n,r,o,i,a){function l(t,o={}){let l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),l)}return(l=U(n,l,e,a,r,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function Z(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function F(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==q){n.data=v(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=v(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=u({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new b("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function q(){return""}function U(e,t,n,r,o,i){if(e.decorator){let a={};u(t=e.decorator(t,a,n,r&&r[0],o,i,r),a)}return t}function Y(){let e=new R;return u(e,o),e.SafeString=D,e.Exception=b,e.Utils=r,e.escapeExpression=m,e.VM=i,e.template=function(t){return B(t,e)},e}let K=Y();K.create=Y,function(e){let t="undefined"!=typeof global?global:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}}(K),K.default=K;t.default=K}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

function sendMessageToEvergageLauncher(message) {
    try {
        document.dispatchEvent(
            new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                detail: JSON.stringify(message),
            })
        );
    } catch (e) {
        console.error(e);
    }
}

var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, function (
        domEvent
    ) {
        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnInit,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
        domEvent
    ) {
        eventLinkId = Math.random().toString().slice(2);

        const { actionEvent } = domEvent.detail || {};
        actionEvent._toolsEventLinkId = eventLinkId;
        if (actionEvent.interaction) {
            actionEvent.explain = true;
        } else {
            actionEvent.debug = Object.assign(
                (actionEvent.debug || {}),
                { explanations: true }
            );
        }

        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnEventSend,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
        domEvent
    ) {
        if (domEvent.detail) {
            const currentPage = Evergage.getCurrentPage();
            const sitemapConfig = Evergage.getState().config;
            const matchedPageConfig =
                Evergage.getState().result &&
                Evergage.getState().result.matchedConfig;

            eventLinkId = null;

            sendMessageToEvergageLauncher({
                type: TO_LAUNCHER_MESSAGE_TYPE,
                payload: {
                    type: TO_LAUNCHER_PAYLOAD_TYPE,
                    payload: {
                        name: Evergage.CustomEvents.OnEventResponse,
                        detail: {
                            response: domEvent.detail.response,
                            currentPage: currentPage,
                            sitemapConfig: sitemapConfig,
                            matchedPageConfig: matchedPageConfig,
                        },
                    },
                },
            });
        }
    });
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    (function () {
    var VE_LOCAL_STORAGE_KEY = 'evgVE';
    var SITEMAP_EDITOR_LOCAL_STORAGE_KEY = 'evgVE-cdp-sitemap-editor';

    var SdkNamespace = window.Evergage || window.SalesforceInteractions;

    function injectEditorLaunchScript(isStandaloneSitemapEditor) {
        try {
            // getConfig() is not exposed on the Salesforce/CDP build of the SDK
            var trackerUrl =
                typeof SdkNamespace.getConfig === 'function' &&
                SdkNamespace.getConfig().trackerUrl;

            var baseUrl = !isStandaloneSitemapEditor && trackerUrl ? trackerUrl : 'https://cdn.evergage.com';
            var scriptPath = isStandaloneSitemapEditor
                ? '/evergage-content/sitemap-editor/4.0.0/launch.sitemap-editor.js'
                : '/visual-editor/launch.js';

            var scriptUrl = [baseUrl, scriptPath].join('');

            var scriptTag = document.createElement('script');
            scriptTag.setAttribute('id', 'salesforceInteractionsLauncherScript');
            scriptTag.src = scriptUrl;

            if (
                document.getElementById('salesforceInteractionsLauncherScript') == null
            ) {
                document.head.appendChild(scriptTag);
            } else {
                SdkNamespace.log.info('Launch script is already here.');
            }
        } catch (err) {
            SdkNamespace.log.error(
                'Failed to inject Salesforce Interactions Launcher script: ' + err
            );
        }
    }

    function getUrlBoolean(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : results[1] === 'true';
    }

    var visualEditorParam = getUrlBoolean('evergageEditor');
    var standaloneEditorParam = getUrlBoolean('salesforceInteractionsSitemapEditor');

    var visualEditorEnabledInStorage = function () {
        return window.localStorage[VE_LOCAL_STORAGE_KEY] === 'true';
    };

    var standloneSitemapEditorEnabledInStorage = function () {
        return window.localStorage[SITEMAP_EDITOR_LOCAL_STORAGE_KEY] === 'true';
    };

    // honor and set local storage based off queryParam
    if (visualEditorParam !== null) {
        window.localStorage.setItem(VE_LOCAL_STORAGE_KEY, visualEditorParam);
    }

    if (standaloneEditorParam !== null) {
        window.localStorage.setItem(
            SITEMAP_EDITOR_LOCAL_STORAGE_KEY,
            standaloneEditorParam
        );
    }

    var inSiteEditorFrameContext =
        window.frameElement && window.frameElement.id === 'siteEditorFrame';

    // trigger off of localStorage only
    // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
    if (
        !visualEditorEnabledInStorage() &&
        !standloneSitemapEditorEnabledInStorage() &&
        !inSiteEditorFrameContext
    ) {
        return;
    }

    if (window.top === window.self || inSiteEditorFrameContext) {
        document.addEventListener(
            SdkNamespace.CustomEvents.OnInit,
            (event) => {
                injectEditorLaunchScript(
                    standloneSitemapEditorEnabledInStorage()
                );
                event.preventDefault();
            },
            { once: true }
        );
    }
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
const getCookieDomain = () => {
    let currentDomain = window.location.hostname;
    if (currentDomain === "t29487-s48504.sandbox.mozu.com") {
        return "t29487-s48504.sandbox.mozu.com";
    } else if (currentDomain === "shop.lww.com") {
        return "shop.lww.com";
    }
}
const currentCookieDomain = getCookieDomain();
Evergage.init({
    // Initializes the Interaction Studio Web SDK
    cookieDomain: currentCookieDomain, // Optional tracking cookie domain configuration (overrides default)
}).then(() => {
    //global variable to save remove cart values before popup. 
    const removeItem =
    {
        _id: null,
        price: null,
        quantity: null
    };
    let remveProdId = null;
    let removeProdPrice = null;
    const getProdAttrFromDL = (attr) => {
        if (window.dataLayer) {
            for (let i = 0; i < window.dataLayer.length; i++) {
                // console.log("TEST FOR PRODUCT ATTRIBUTES IN DATA LAYER");
                if (window.dataLayer[i].event == "page.eec.detail") {
                    return window.dataLayer[i]["page.eec.detail"].products[0][attr];
                }
            }
        }
        return "";
    };
    const getSubCatAttrFromDL = (attr) => {
        if (window.dataLayer) {
            for (let i = 0; i < window.dataLayer.length; i++) {
                // console.log("TEST FOR SUBCATEGORY ATTRIBUTES IN DATA LATER");
                if (window.dataLayer[i].event == "page.eec.list") {
                    //   console.log(attr);
                    return window.dataLayer[i]["page.eec.list"][attr];
                }
            }
        }
        return "";
    };
    const getCheckoutLineItems = () => {
        if (window.dataLayer) {
            for (let i = 0; i < window.dataLayer.length; i++) {
                if (window.dataLayer[i].event == "page.eec.checkout") {
                    let lineItems = [];
                    for (let j = 0; j < window.dataLayer[i]["page.eec.checkout"].products.length; j++) {
                        const element = { "_id": window.dataLayer[i]["page.eec.checkout"].products[j].id, "price": window.dataLayer[i]["page.eec.checkout"].products[j].price, "quantity": window.dataLayer[i]["page.eec.checkout"].products[j].quantity };
                        lineItems.push(element);
                    }
                    return lineItems;
                }
            }
        }
        return null;
    };



    const getPageType = () => {
        let pagetypeval = "default";

        if (/\/search/i.test(window.location.href)) {
            pagetypeval = "search";
        }
        console.log(pagetypeval);
        return pagetypeval;
    }

    const sitemapConfig = {
        // Sitemap configuration object
        global: {
            onActionEvent: (actionEvent) => {
                console.log("evg: ", actionEvent);
                return actionEvent;
            },
            contentZones: [
                { name: "global_popup" },
                { name: 'Recs_SoftCart', selector: ".mz-drop-zone-softcart-recommend-products" },
                { name: 'Recs_SoftCart1', selector: ".softcart_recs_product" },
                { name: "infobar", selector: ".mz-pageheader" }
            ],
            listeners: [
                Evergage.listener("click", "#cookieBar_approveLink", () => {
                    const policyaccept = document.querySelector('#policy_accept').checked;
                    if (policyaccept) {
                        const consent = {
                            provider: "OneTrust",
                            purpose: Evergage.ConsentPurpose.Personalization,
                            status: Evergage.ConsentStatus.OptIn
                        };
                        Evergage.updateConsents(consent);

                    }
                    else {
                        const consent = {
                            provider: "OneTrust",
                            purpose: Evergage.ConsentPurpose.Personalization,
                            status: Evergage.ConsentStatus.OptOut
                        };
                        Evergage.updateConsents(consent);
                    }
                }),
                Evergage.listener("click", ".utilitynav-login", (event) => {
                    const loginClick = Evergage.cashDom(event.currentTarget);
                    if (loginClick) {
                        console.log('login click');
                        Evergage.reinit();
                    }
                }),
                Evergage.listener(
                    "click", ".mz-button.mz-button-style.green.login-checkout",
                    (event) => {
                        console.log('login event called');
                        const signin = Evergage.cashDom(event.currentTarget);
                        if (signin) {
                            let emailid = document.querySelector('.login-emailid').value;
                            console.log('sign in event : ' + emailid);
                            Evergage.sendEvent(
                                {
                                    action: "Login with Email",
                                    user: {
                                        attributes: {
                                            emailAddress: emailid,
                                            userName: emailid
                                        }
                                    }
                                }
                            );
                        }
                    }
                ),
                Evergage.listener("click", 'button[data-mz-action="submitsubscribe_id"]', (event) => {
                    const subscribeClick = Evergage.cashDom(event.currentTarget);
                    if (subscribeClick) {
                        //TODO: check subscriber return details and then send event
                        console.log('subscribeClick', subscribeClick);
                        let subId = document.querySelector('.login-subscriberid').value;
                        console.log(subId);
                        console.log('sign in event : ' + subId);
                        Evergage.sendEvent(
                            {
                                action: "Login with Subscriber ID",
                                user: {
                                    attributes: {
                                        customerId: subId
                                    }
                                }
                            }
                        );

                    }
                }),
                Evergage.listener("click", ".utilitynav-signup", (event) => {
                    const sClick = Evergage.cashDom(event.currentTarget);
                    if (sClick) {
                        console.log('Register clicked');
                        Evergage.reinit(); we
                    }
                }),
                Evergage.listener(
                    "click", ".mz-popover-signup-register",
                    (event) => {
                        const signin = Evergage.cashDom(event.currentTarget);
                        if (signin) {
                            console.log('Register user');
                            debugger;
                            const uPrefix = document.querySelector('.mz-popover-signup-prefix').value;
                            const firstName = document.querySelector('.mz-popover-signup-firstname').value;
                            const lastName = document.querySelector('.mz-popover-signup-lastname').value;
                            const emailid = document.querySelector('.mz-popover-signup-email').value;
                            const uCustomerRoles = document.querySelector('#customerRoles').value;
                            const uOrganization = document.querySelector('input[data-mz-login-organization]').value;
                            const uCustomerSpecialty = document.querySelector('#customerSpecialty').value;
                            const uWorkplace = document.querySelector('#worlplace').value;
                            const uSubscribeForUpdates = document.querySelector('#subscribe_for_updates').checked;
                            const uUpdatesFromPartners = document.querySelector('#privacy_policy').checked;

                            console.log(uPrefix, emailid, firstName, lastName, uCustomerRoles, uCustomerSpecialty, uOrganization, uWorkplace, uSubscribeForUpdates, uUpdatesFromPartners);
                            Evergage.sendEvent(
                                {
                                    action: "Register User",
                                    user: {
                                        attributes: {
                                            prefix: uPrefix,
                                            userName: emailid,
                                            emailAddress: emailid,
                                            firstName: firstName,
                                            lastName: lastName,
                                            customerRoles: uCustomerRoles,
                                            customerSpecialty: uCustomerSpecialty,
                                            organization: uOrganization,
                                            workplace: uWorkplace,
                                            subscribeForUpdates: uSubscribeForUpdates,
                                            updatesFromPartners: uUpdatesFromPartners
                                        }
                                    }

                                }

                            );
                        }
                    }
                ),

                Evergage.listener("click", "div.mainHeader select.mz-searchbox-categories.search-category[name='facetValueFilter']",
                    (event) => {
                        const allprods = Evergage.cashDom(event.currentTarget);
                        const option = Evergage.cashDom(event.currentTarget);
                        if (allprods) {
                            Evergage.sendEvent({
                                action: "All Products Dropdown",
                            });
                        }
                    }
                ),
                Evergage.listener("click", ".footer-social-fb", (event) => {
                    const clickfacebook = Evergage.cashDom(event.currentTarget);
                    if (clickfacebook) {
                        Evergage.sendEvent({ action: "Facebook" });
                    }
                }),

                Evergage.listener(
                    "submit",
                    "div.mainHeader span.mz-searchbox-field span.twitter-typeahead",
                    (event) => {
                        const getsearchitems = Evergage.cashDom(event.currentTarget);
                        if (getsearchitems) {
                            Evergage.sendEvent({ action: "Search Bar for Items" });
                        }
                    }
                ),
                Evergage.listener(
                    "click",
                    ".mz-searchbox-button.at-element-click-tracking",
                    (event) => {
                        const searchbttn = Evergage.cashDom(event.currentTarget);
                        if (searchbttn) {
                            Evergage.sendEvent({ action: "Search Button" });
                        }
                    }
                ),



                Evergage.listener("click", ".footer-social-tw", (event) => {
                    const clicktwitter = Evergage.cashDom(event.currentTarget);
                    if (clicktwitter) {
                        Evergage.sendEvent({ action: "Twitter" });
                    }
                }),
                Evergage.listener("click", ".footer-social-yt", (event) => {
                    const clickyoutube = Evergage.cashDom(event.currentTarget);
                    if (clickyoutube) {
                        Evergage.sendEvent({ action: "Youtube" });
                    }
                }),

                //Global - Quick View

                Evergage.listener("click", "#add-to-cart", (event) => {
                    const addtocart = Evergage.cashDom(event.currentTarget);
                    if (addtocart) {
                        Evergage.sendEvent({ action: "Add To Cart" });
                    }
                }),

                Evergage.listener("click", "#add-to-wishlist", (event) => {
                    const addtowish = Evergage.cashDom(event.currentTarget);
                    if (addtowish) {
                        Evergage.sendEvent({ action: "Add to Wishlist" });
                    }
                }),

                Evergage.listener("click", "#buy-now", (event) => {
                    const buynow = Evergage.cashDom(event.currentTarget);
                    if (buynow) {
                        Evergage.sendEvent({ action: "Instant Checkout" });
                    }
                }),

                Evergage.listener(
                    "click",
                    ".mz-fulldesc.right.small-8.medium-8.large-8.columns",
                    (event) => {
                        const moredetails = Evergage.cashDom(event.currentTarget);
                        if (moredetails) {
                            Evergage.sendEvent({ action: "More Details" });
                        }
                    }
                ),

                // Global - QV - Instant Checkout

                Evergage.listener("click", ".mz-button.whiteButton", (event) => {
                    const cancelcart = Evergage.cashDom(event.currentTarget);
                    if (cancelcart) {
                        Evergage.sendEvent({ action: "Cancel Add To Cart" });
                    }
                }),

                Evergage.listener("click", ".mz-button.greenButton.buynow", (event) => {
                    const confirmaddtocart = Evergage.cashDom(event.currentTarget);
                    if (confirmaddtocart) {
                        Evergage.sendEvent({ action: "Confirm and Add To Cart" });
                    }
                }),
            ],
        }, // Object used to contain Global site object configuration
        pageTypeDefault: {
            name: "default",
        },

        pageTypes: [
            {
                name: "home",
                action: "Home",
                isMatch: () =>
                    (window.location.host.toLowerCase() === "shop.lww.com" ||
                        window.location.host.toLowerCase() === "www.shop.lww.com") &&
                    window.location.pathname === "/",
                contentZones: [
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_Home', selector: '#mz-drop-zone-home-recommend-products' },
                    { name: 'Home_Hero', selector: '#mz-drop-zone-home' },
                ],
            }, 
            {
                name: "home_stage",
                action: "home_stage",
                isMatch: () =>
                    (window.location.host.toLowerCase() === "t29487-s48504.sandbox.mozu.com" ||
                        window.location.host.toLowerCase() === "www.t29487-s48504.sandbox.mozu.com") &&
                    window.location.pathname === "/",
                contentZones: [
                    { name: 'Recs_Home', selector: '#mz-drop-zone-home-recommend-products' },
                    { name: 'Home_Hero', selector: '#mz-drop-zone-home' },
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },                    
                ],
            },
            {
                name: "View Category",
                action: "View Category",
                isMatch: () => {
                    if (/.*\/c\//i.test(window.location.href)) {
                        console.log("search=", window.location.search, window.location.search.indexOf("specialty"));

                        if (window.location.search.indexOf("specialty") > 0) {

                            return false;
                        }
                        return true;
                    }
                    else {
                        return false;
                    }

                },
                contentZones: [
                    { name: 'Recs_Category', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_SoftCart', selector: ".mz-drop-zone-softcart-recommend-products" },
                    { name: 'Recs_SoftCart1', selector: ".softcart_recs_product"},
                    { name: 'Recs_Home', selector: '#mz-drop-zone-home-recommend-products' },
                ],
                listeners: [
                    Evergage.listener(
                        "click",
                        ".mz-cat-product__buy-button.add_plp_cart",
                        (event) => {
                            const addprodtocart = Evergage.cashDom(event.currentTarget);
                            if (addprodtocart) {

                                const selector = 'div[data-mz-product="' + addprodtocart[0].dataset.mzProduct + '"] div.product-info-wrap > div.mz-pricestack.notranslate > span.mz-price.mz-price-normal ';
                                let Price = document.querySelector(selector).innerText;
                                if (Price)
                                    Price = Price.replace('USD $', '')

                                const lineItem = {
                                    _id: addprodtocart[0].dataset.mzProduct,
                                    price: Price,
                                    quantity: 1
                                }
                                Evergage.sendEvent({
                                    action: "Add to Cart",
                                    itemAction: Evergage.ItemAction.AddToCart,
                                    cart: {
                                        singleLine: {
                                            Product: lineItem
                                        }
                                    }
                                });
                            }
                        }
                    ),
                    Evergage.listener(
                        "click",
                        "mz-subscribe-product__buy-button",
                        (event) => {
                            const subscribecat = Evergage.cashDom(event.currentTarget);
                            if (subscribecat) {
                                Evergage.sendEvent({ action: "Subscribe" });
                            }
                        }
                    ),
                    Evergage.listener("click", ".mz-wishlist-icon.wishlist", (event) => {
                        const wishlistcat = Evergage.cashDom(event.currentTarget);
                        if (wishlistcat) {
                            Evergage.sendEvent({ action: "Wish List" });
                        }
                    }),
                    Evergage.listener("click", ".quickview", (event) => {
                        const quickview = Evergage.cashDom(event.currentTarget);
                        if (quickview) {
                            Evergage.sendEvent({ action: "Quick View" });
                        }
                    }),
                ],
                catalog: {
                    Category: {
                        _id: () => {
                            if (window.digitalData) {
                                return window.digitalData.pageInfo.productCategory;
                            }
                            else {
                                return null;
                            }
                            //return getSubCatAttrFromDL("name");
                        },
                    },
                },
            },
            {
                name: "View Sub Category",
                action: "View Sub Category",
                // isMatch: () => /\/c\//i.test(window.location.href),
                isMatch: () => {
                    if (/.*\/c\//i.test(window.location.href) && window.location.search.indexOf("specialty") > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                contentZones: [
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_SoftCart', selector: ".mz-drop-zone-softcart-recommend-products" },
                    { name: 'Recs_SoftCart1', selector: ".softcart_recs_product"},
                    { name: 'Recs_Home', selector: '#mz-drop-zone-home-recommend-products' },
                ],                
                catalog: {
                    Brand: {
                        _id: () => {
                            return window.location.search.split(',')[0].split(':')[1];
                        },
                    },
                },
            },
            {
                name: "View Item",
                action: "View Item",
                itemAction: Evergage.ItemAction.ViewItem,
                isMatch: () => {
                    if (/\/p\//i.test(window.location.href)) {
                        console.log('step1');

                        return Evergage.util.resolveWhenTrue.bind(() => {
                            if (window.dataLayer) {
                                const id = getProdAttrFromDL("id");
                                //  console.log('step 2', id);

                                if (id != "") {
                                    return true;
                                }
                            }
                        });

                        return true;
                    } else {
                        return false;
                    }
                },
                contentZones: [
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_SoftCart', selector: ".mz-drop-zone-softcart-recommend-products" },
                    { name: 'Recs_SoftCart1', selector: ".softcart_recs_product"},
                    { name: 'Recs_Home', selector: '#mz-drop-zone-home-recommend-products' },
                ],
                listeners: [
                    Evergage.listener("click", "#add-to-cart", (event) => {
                        const addtocart = Evergage.cashDom(event.currentTarget);
                        console.log(Evergage.resolvers.fromSelector("#product-detail > div.mz-product-shop > div.mz-productshop-right > section > div.mz-productdetail-conversion-controls > input"));
                        if (addtocart) {
                            const lineItem = {
                                _id: getProdAttrFromDL("id"),
                                price: getProdAttrFromDL("price"),
                                quantity: Evergage.resolvers.fromSelector("#product-detail > div.mz-product-shop > div.mz-productshop-right > section > div.mz-productdetail-conversion-controls > input")
                            }
                            Evergage.sendEvent({
                                action: "Add to Cart",
                                itemAction: Evergage.ItemAction.AddToCart,
                                cart: {
                                    singleLine: {
                                        Product: lineItem
                                    }
                                }
                            });
                        }
                    }),
                    Evergage.listener("click", "#buy-now", (event) => {
                        const instantcheckout = Evergage.cashDom(event.currentTarget);
                        if (instantcheckout) {
                            Evergage.sendEvent({ action: "Instant Checkout" });
                        }
                    }),
                    Evergage.listener("click", ".quickview", (event) => {
                        const quickview = Evergage.cashDom(event.currentTarget);
                        if (quickview) {
                            Evergage.sendEvent({ action: "Quick View" });
                        }
                    }),
                ],
                catalog: {
                    Product: {
                        _id: () => {
                            return getProdAttrFromDL("id");
                        },
                        name: () => {
                            return getProdAttrFromDL("name");
                        },
                        url: () => {
                            //var url = getProdAttrFromDL("url");
                            return window.location.href.split( '?' )[0];
                            //return window.location.href;
                            //return getProdAttrFromDL("url");
                        },

                        imageUrl: () => {
                            return getProdAttrFromDL("img");
                        },
                        description: Evergage.resolvers.fromMeta("description") || null,
                        price: () => {
                            return getProdAttrFromDL("price");
                        },
                        listPrice: () => {
                            return getProdAttrFromDL("price");
                        },
                        unitsInStock: 10,
                        numRatings: Evergage.resolvers.fromSelector(
                            "#ratings-summary > div.bv_numReviews_component_container > div "
                        ),
                        // ERROR IN AVERAGE RATING FOR ITEMS WITH 0 REVIEWS(Using document.querySelector)
                        //
                        rating: Evergage.resolvers.fromSelector(
                            "#ratings-summary > div.bv_avgRating_component_container.notranslate"
                        ),
                        published: () => {
                            return getProdAttrFromDL("pubDate");
                        },
                        adoptable: () => {
                            return window.digitalData.productInfo.adoptableFlag;
                        },
                        required: () => {
                            return window.digitalData.productInfo.required;
                        },
                        relatedCatalogObjects: {
                            ItemClass: () => {
                                return [getProdAttrFromDL("variant")];
                            },
                            Category: () => {
                                if (window.digitalData)
                                    return [window.digitalData.pageInfo.pageCategory];
                                else
                                    return null;
                                //return [getProdAttrFromDL("variant")];
                            },
                            Brand: () => {
                                if (window.digitalData)
                                    return window.digitalData.pageInfo.pageSubCategory.split(',');
                                else
                                    return null;
                                //return [getProdAttrFromDL("variant")];
                            },
                            Author: Evergage.resolvers.fromSelectorMultiple(
                                "div.accordion-content> dl > dt"
                            ),
                            Country: Evergage.resolvers.fromSelectorMultiple(
                                ".radioSelectContainer > select[data-mz-product-option='tenant~country'] > option"
                            ),
                        },
                    },
                },
            },
            {
                name: "View Cart",
                action: "View Cart",
                isMatch: () => /\/cart/i.test(window.location.href),
                contentZones: [
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },
                    { name: 'Recs_Cart', selector: '#mz-drop-zone-cart' },
                ],
                listeners: [
                    Evergage.listener("click", "#cart-contShop-1", (event) => {
                        const continueshopping = Evergage.cashDom(event.currentTarget);
                        if (continueshopping) {
                            Evergage.sendEvent({ action: "Continue Shopping" });
                        }
                    }),
                    Evergage.listener("click", "#cart-checkout-1", (event) => {
                        const proceedcheckout = Evergage.cashDom(event.currentTarget);
                        if (proceedcheckout) {
                            Evergage.sendEvent({ action: "Proceed to Checkout" });
                        }
                    }),
                    Evergage.listener("click", ".mz-icon-closed", (event) => {
                        const ele_remove = Evergage.cashDom(event.currentTarget);
                        if (ele_remove) {
                            //console.log(event.currentTarget.parentNode.parentNode);
                            let prodPrice = event.currentTarget.parentNode.parentNode.querySelector('.mz-item-rowtotal').innerText;
                            if (prodPrice)
                                prodPrice = prodPrice.replace('USD $', '')
                            else
                                prodPrice = 0;
                            let qty = 1
                            if (event.currentTarget.parentNode.parentNode.querySelector('#mz-carttable-qty-field'))
                                qty = event.currentTarget.parentNode.parentNode.querySelector('#mz-carttable-qty-field').value;
                            else if (event.currentTarget.parentNode.parentNode.querySelector('.wk-item-qty'))
                                qty = event.currentTarget.parentNode.parentNode.querySelector('.wk-item-qty').innerText;

                            removeItem._id = event.currentTarget.parentNode.parentNode.querySelector('span[data-productid]').getAttribute('data-productid');
                            removeItem.price = prodPrice;
                            removeItem.quantity = qty;
                        }
                    }),
                    Evergage.listener("click", "#removeItem-Popup > div > div > div.mz-modal-body > div > div > button.green.autoRenewSave", (event) => {
                        const ele_yes = Evergage.cashDom(event.currentTarget);
                        if (ele_yes) {
                            Evergage.sendEvent({
                                itemAction: Evergage.ItemAction.RemoveFromCart,
                                cart: {
                                    singleLine: {
                                        Product: removeItem
                                    }
                                }
                            });
                        }
                    }),
                ],
            },
            {
                name: "Checkout page",
                action: "Checkout page",
                isMatch: () => /\/checkout/i.test(window.location.href),
                listeners: [
                    Evergage.listener("click", "#step-shipping-address > div > div.mz-formstep-next > button", (event) => {
                        const btn_next = Evergage.cashDom(event.currentTarget.parentNode.parentNode);
                        console.log(event.currentTarget.parentNode.parentNode);
                        if (btn_next) {
                            console.log(Evergage.cashDom(event.currentTarget));
                            console.log('next')
                        }
                    }),
                    Evergage.listener("click", "#disabledbutton", (event) => {
                        const btn_next = Evergage.cashDom(event.currentTarget);
                        console.log('disable button click');
                        if (btn_next) {
                            console.log(btn_next);
                            Evergage.reinit();
                        }
                    }),
                    Evergage.listener("click", "#mz-terms-and-conditions", (event) => {
                        const btn_next = Evergage.cashDom(event.currentTarget);
                        console.log('#mz-terms-and-conditions button click');
                        if (btn_next) {
                            console.log(btn_next);
                            Evergage.reinit();
                        }
                    }),

                    Evergage.listener("click", "#step-review > div > div.mz-formstep-next > button", (event) => {
                        const btn_purchase = Evergage.cashDom(event.currentTarget);
                        console.log(event.currentTarget);
                        console.log(btn_purchase);
                        if (btn_purchase) {
                            const LineItems = getCheckoutLineItems();
                            Evergage.sendEvent({
                                action: "Checkout: Purchase Completed",
                                itemAction: Evergage.ItemAction.Purchase,
                                order: {
                                    Product: {
                                        lineItems: LineItems,
                                    }
                                }
                            });
                        }
                    })],
            },
            {
                name: "Support",
                action: "Support",
                isMatch: () => /\/support/i.test(window.location.href),
            },
            {
                name: "My Account",
                action: "My Account",
                isMatch: () => /\/myaccount/i.test(window.location.href),
                listeners: [
                    Evergage.listener("click", "#new-address-section > div.mz-contact-actions > button.mz-button.mz-contact-save",
                        (event) => {
                            const btn_save_add = Evergage.cashDom(event.currentTarget);

                            if (btn_save_add) {
                                firstName = document.querySelector('input[name=firstname]').value;
                                lastName = document.querySelector('input[name=lastname]').value;
                                city = document.querySelector('input[name=city]').value;
                                country = document.querySelector('select[data-mz-value="editingContact.address.countryCode"]').options[document.querySelector('select[data-mz-value="editingContact.address.countryCode"]').selectedIndex].text;
                                state = document.querySelector('select[data-mz-value="editingContact.address.stateOrProvince"]').options[document.querySelector('select[data-mz-value="editingContact.address.stateOrProvince"]').selectedIndex].text;
                                postalCode = document.querySelector('input[name=postal-code]').value;
                                addressType = document.querySelector('select[data-mz-value="editingContact.address.addressType"]').options[document.querySelector('select[data-mz-value="editingContact.address.addressType"]').selectedIndex].text;
                                Evergage.sendEvent(
                                    {
                                        action: "Save Personal Information",
                                        user: {
                                            attributes: {
                                                firstName: firstName,
                                                lastName: lastName,
                                                city: city,
                                                country: country,
                                                state: state,
                                                postalCode: postalCode,
                                                addressType: addressType
                                            }
                                        }
                                    }
                                );
                            }
                        }
                    ),
                    Evergage.listener("click", "#account-settings > h3 > a",
                        (event) => {
                            const editinfo = Evergage.cashDom(event.currentTarget);
                            if (editinfo) {
                                Evergage.reinit();
                            }
                        }
                    ),
                    Evergage.listener("click", ".mz-button.mz-button-small.mz-accountsettings-editdone.myacc_save",
                        (event) => {
                            const saveinfo = Evergage.cashDom(event.currentTarget);
                            if (saveinfo) {
                                firstName = document.querySelector('.mz-accountsettings-firstname').value;
                                lastName = document.querySelector('.mz-accountsettings-lastname').value;
                                email = document.querySelector('.myaccount-email-field').value;
                                Evergage.sendEvent(
                                    {
                                        action: "Save Personal Information",
                                        user: {
                                            attributes: {
                                                userName: email,
                                                firstName: firstName,
                                                lastName: lastName,
                                                emailAddress: email,
                                            }
                                        }
                                    }
                                );
                            }
                        }
                    )],
            },
            {
                name: "Signup - Confirmation",
                action: "Signup - Confirmation",
                isMatch: () =>
                    /\/signup-confirmation/i.test(window.location.href),
                listeners: [
                    Evergage.listener("submit", ".mz-popover-action", (event) => {
                        const register = Evergage.cashDom(event.currentTarget);
                        if (register) {
                            Evergage.sendEvent({ action: "Register" });
                        }
                    }),
                ],
            },
            {
                name: "Login Page",
                action: "Login Page",
                isMatch: () =>
                    /\/user\/login/i.test(window.location.href),
                listeners: [
                    Evergage.listener("click", "#subscribe_login", (event) => {
                        const getsubscriberdetails = Evergage.cashDom(event.currentTarget);
                        if (getsubscriberdetails) {
                            Evergage.sendEvent({ action: "Get Subscriber Details" });
                        }
                    }),
                    Evergage.listener(
                        "submit",
                        ".mz-button.mz-button-large.mz-login-button",
                        (event) => {
                            const signin = Evergage.cashDom(event.currentTarget);
                            if (signin) {
                                Evergage.sendEvent({ action: "Sign In" });
                            }
                        })],
            },
            {
                name: "Search Page",
                action: "Search Page",
                isMatch: () => /\/search/i.test(window.location.href),
                contentZones: [
                    { name: 'Recs_Product', selector: '#mz-drop-zone-recommend-products' },                    
                    { name: 'No_search_result', selector: '#mz-drop-zone-recommend-products' },

                ],
            },
        ], // Array used to contain the page type object configurations
    };

    Evergage.initSitemap(sitemapConfig); // Initializes the Sitemap
});
  // Content Zones remaining
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}