self.webpackChunk([1],{18:function(e,t,n){n.d(t,"a",function(){return a});const a="AMP-ASSET-CACHE"},19:function(e,t,n){n.d(t,"a",function(){return a});const a="AMP-PREFETCHED-LINKS"},20:function(e,t,n){n.r(t),n.d(t,"AssetCachingAmpModule",function(){return o});var a=n(10),r=n(11),s=n(12),c=n(18);class i extends s.a{constructor(e,t){super(e),this.denyList=t||[]}async cacheWillUpdate(e){let t=e.request,n=e.response;if(this.denyList.some()return null;const a=super.cacheWillUpdate?await super.cacheWillUpdate({response:n}):n;if(!a)return null;const r=a.clone(),s=r.headers.get("content-type");return s&&s.includes("text/html")?null:r}}class o{init(e){e.forEach(e=>{let t=null,n=!0;void 0!==e.purgeOnQuotaError&&(n=e.purgeOnQuotaError);const s={cacheName:c.a,plugins:[new i({maxEntries:e.maxEntries||25,denyList:e.denyList,purgeOnQuotaError:n})]};switch(e.cachingStrategy){case"NETWORK_FIRST":t=new r.b(s);break;case"STALE_WHILE_REVALIDATE":t=new r.c(s);break;default:t=new r.a(s)}a.b.registerRoute(e.regexp,t)})}}},21:function(e,t,n){n.r(t),n.d(t,"OfflinePageAmpSwModule",function(){return c});var a=n(14),r=n(18);lass c{async init(e,t){const n=s(await Promise.all([caches.open(a.a),caches.open(r.a)]),2),c=n[0],i=n[1],o=await fetch(e);o.ok&&(await c.put(new Request(e),o),await i.addAll(t))}}},23:function(e,t,n){n.r(t);var a=n(10),r=n(11),s=n(12);class c extends s.a{sync cacheWillUpdatesync cachedResponseWillBeUsed(e){let t=e.cacheName,n=e.request,a=e.cachedResponse;const r=await super.cachedResponseWillBeUsed({cacheName:t,cachedResponse:a}),s=await caches.open(t),c=n.url;return s.delete(n).then(,r}}var i=n(19);let o,l;unction h(e){return e.replace(/https?:\/\//,"").replace(self.location.host,"")}n.d(t,"LinkPrefetchAmpModule",;class d{async init(e,t){this.listenForLinkPrefetches(),await this.registerPrefetchLinks(t,e)}listenForLinkPrefetches(){self.addEventListener("message",e=>{const t=JSON.parse(e.data);"AMP__LINK-PREFETCH"===t.type&&t.payload&&e.waitUntil(this.cachePrefetchLinks_(t.payload))})}async registerPrefetchLinks(e,t){l=t,o=e;const n=await caches.open(i.a),a=[];(await n.keys()).forEach(e=>{let t=e.url;a.push(u(h(t)))}),this.addRouteHandler_(a)}addRouteHandler_(e){let t=l?l.maxAgeSecondsInCache:300;t>300&&(t=300),e.forEach(e=>{o.addDeniedUrls(e),a.b.registerRoute(e,new r.a({cacheName:i.a,plugins:[new c({maxEntries:10,maxAgeSeconds:t,postDelete:e=>{const t=u(h(e));o.removeDeniedUrls(t)}})],networkTimeoutSeconds:.5}))})}async cachePrefetchLinks_(e){const t=e.filter(e=>{const t=e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i),n=t&&t[1];return null===n||n===self.location.host});if(t&&t.length>0){const e=await caches.open(i.a);await e.addAll(t);const n=t.map(;this.addRouteHandler_(n)}}}}});