this.workbox=this.workbox||{},this.workbox.precaching=function(t,e,s,n,i,c,r,o){"use strict";ry{self["workbox:precaching:6.1.2"]&&_()}catch(t){}lass l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}lass f extends c.Strategy{ync it(t,e){let n;if(!this.st)throw new s.WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:,f.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:;class w{et strategy(){return this.ht}ndlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s.WorkboxError("non-precached-url",{url:t});return }let d;const y=class p extends o.Route{turn t.PrecacheController=w,t.PrecacheFallbackPlugin=t.PrecacheRoute=p,t.PrecacheStrategy=f,t.addPlugins=t.addRoute=R,t.cleanupOutdatedCaches=t.createHandlerBoundToURL=function(t){return y().createHandlerBoundToURL(t)},t.getCacheKeyForURL=function(t){return y().getCacheKeyForURL(t)},t.matchPrecache=t.precache=U,t.precacheAndRoute=t}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core,workbox.strategies,workbox.routing,workbox.routing);
//# sourceMappingURL=workbox-precaching.prod.js.map