const cdnHost = 'https://static-assets-prod.epicgames.com/static/';
const precacheManifest = ["https://cdn.marketing.on.epicgames.com/dev-epicgames-site-prod/webpack/./main.dev-epic-games.9d9a73b5.js","https://cdn.marketing.on.epicgames.com/dev-epicgames-site-prod/webpack/undefined","https://cdn.marketing.on.epicgames.com/dev-epicgames-site-prod/webpack/./thirdParty.dev-epic-games.3dd05ca7.css","https://cdn.marketing.on.epicgames.com/dev-epicgames-site-prod/webpack/./polyfill.dev-epic-games.0bd66582.js"];
const navigationFallback = '';

// EPIC EDITED
importScripts(cdnHost + "workbox-v3.1.0/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: cdnHost + "workbox-v3.1.0"
});
// EPIC EDITED
workbox.core.setCacheNameDetails({prefix: "epic-service-worker"});

self.__precacheManifest = precacheManifest.concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// EPIC EDITED
if (navigationFallback) {
    workbox.routing.registerNavigationRoute(navigationFallback);
}
match(t.r))})()}a(){var e=this;return babelHelpers.asyncToGenerator(function*(){return yield e.c.getAllMatching(l,{includeKeys:!0})})()}u(e){var t=this;return babelHelpers.asyncToGenerator(function*(){const n=yield t.c.get(l,e);return n?n[c]:null})()}d(e){var t=this;return babelHelpers.asyncToGenerator(function*(){yield t.c.put(l,{[c]:e.n,[o]:e.r.url},e.t)})()}h(e){var t=this;return babelHelpers.asyncToGenerator(function*(){yield t.c.delete(l,e)})()}}const a=(()=>{var e=babelHelpers.asyncToGenerator(function*(e){const t=e.clone(),n=yield"body"in t?Promise.resolve(t.body):t.blob();return new Response(n,["headers","status","statusText"].map(function(e){return t[e]}))});return function(t){return e.apply(this,arguments)}})();class d{constructor(e){this.f=t.cacheNames.getPrecacheName(e),this.y=new Map,this.b=new u(this.f)}addToCacheList(e){e.map(e=>{this.p(this.w(e))})}w(e){switch(typeof e){case"string":return new i(e,e,e);case"object":return new i(e,e.url,e.revision||e.url,!!e.revision);default:throw new n.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})}}p(e){const t=this.y.get(e.t);if(t){if(t.n!==e.n)throw new n.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:t.e,secondEntry:e.e})}else this.y.set(e.t,e)}install(e={}){var t=this;return babelHelpers.asyncToGenerator(function*(){const n=yield caches.open(t.m()),r=yield n.keys();yield Promise.all(r.map(function(e){return n.delete(e)}));const s=[],i=[];for(const e of t.y.values())(yield t.b.l(t.f,e))?i.push(e):s.push(e);return yield Promise.all(s.map(function(n){return t.g(n,e.plugins)})),{updatedEntries:s,notUpdatedEntries:i}})()}activate(e={}){var t=this;return babelHelpers.asyncToGenerator(function*(){const n=yield caches.open(t.m()),r=yield n.keys();return yield Promise.all(r.map((()=>{var r=babelHelpers.asyncToGenerator(function*(r){const i=yield n.match(r);yield s.cacheWrapper.put(t.f,r,i,e.plugins),yield n.delete(r)});return function(e){return r.apply(this,arguments)}})())),t.R()})()}m(){return`${this.f}-temp`}g(e,t){var n=this;return babelHelpers.asyncToGenerator(function*(){let i=yield r.fetchWrapper.fetch(e.s,null,t);return i.redirected&&(i=yield a(i)),yield s.cacheWrapper.put(n.m(),e.r,i,t),yield n.b.d(e),!0})()}R(){var e=this;return babelHelpers.asyncToGenerator(function*(){const t=[];e.y.forEach(function(e){const n=new URL(e.r.url,location).toString();t.push(n)});const[n,r]=yield Promise.all([e._(t),e.U(t)]);return{deletedCacheRequests:n,deletedRevisionDetails:r}})()}_(e){var t=this;return babelHelpers.asyncToGenerator(function*(){if(!(yield caches.has(t.f)))return[];const n=yield caches.open(t.f),r=(yield n.keys()).filter(function(t){return!e.includes(new URL(t.url,location).toString())});return yield Promise.all(r.map(function(e){return n.delete(e)})),r.map(function(e){return e.url})})()}U(e){var t=this;return babelHelpers.asyncToGenerator(function*(){const n=(yield t.b.a()).filter(function(t){const n=new URL(t.value.url,location).toString();return!e.includes(n)});return yield Promise.all(n.map(function(e){return t.b.h(e.primaryKey)})),n.map(function(e){return e.value.url})})()}getCachedUrls(){return Array.from(this.y.keys()).map(e=>new URL(e,location).href)}}var h=Object.freeze({PrecacheController:d});let f=!1,y=!1,b=!1,p=[];const w=t.cacheNames.getPrecacheName(),m=new d(w),v=(e,{ignoreUrlParametersMatching:t=[/^utm_/],directoryIndex:n="index.html",cleanUrls:r=!0,urlManipulation:s=null}={})=>{const i=new URL(e,location);i.hash="";const c=((e,t)=>{const n=e.search.slice(1).split("&").map(e=>e.split("=")).filter(e=>t.every(t=>!t.test(e[0]))).map(e=>e.join("=")),r=new URL(e);return r.search=n.join("&"),r})(i,t);let o=[i,c];if(n&&c.pathname.endsWith("/")){const e=new URL(c);e.pathname+=n,o.push(e)}if(r){const e=new URL(c);e.pathname+=".html",o.push(e)}if(s){const e=s({url:i});o=o.concat(e)}const l=m.getCachedUrls();for(const e of o)if(-1!==l.indexOf(e.href))return e.href;return null},g={};g.precache=(e=>{m.addToCacheList(e),f||e.length<=0||(f=!0,self.addEventListener("install",e=>{e.waitUntil(m.install({suppressWarnings:b,plugins:p}))}),self.addEventListener("activate",e=>{e.waitUntil(m.activate({plugins:p}))}))}),g.addRoute=(e=>{y||(y=!0,self.addEventListener("fetch",t=>{const n=v(t.request.url,e);if(!n)return;let r=caches.open(w).then(e=>e.match(n)).then(e=>e||fetch(n));t.respondWith(r)}))}),g.precacheAndRoute=((e,t)=>{g.precache(e),g.addRoute(t)}),g.suppressWarnings=(e=>{b=e}),g.addPlugins=(e=>{p=p.concat(e)});return Object.assign(g,h)}(workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);

//# sourceMappingURL=workbox-precaching.prod.js.map