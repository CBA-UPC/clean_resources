'use strict';const cacheName='www.antarvasna3.com-superpwa-2.2.23.1';const startPage='https://www.antarvasna3.com';const offlinePage='https://www.antarvasna3.com';const filesToCache=[startPage,offlinePage];const neverCacheUrls=[/\/wp-admin/,/\/wp-login/,/preview=true/];self.addEventListener('install',;self.addEventListener('activate',;var fetchRangeData=function(event){var pos=Number(/^bytes\=(\d+)\-$/g.exec(event.request.headers.get('range'))[1]);console.log('Range request for',event.request.url,', starting position:',pos);event.respondWith(caches.open(cacheName).then(.then(function(res){if(!res){return fetch(event.request).then(;}
return res.arrayBuffer();}).then(function(ab){return new Response(ab.slice(pos),{status:206,statusText:'Partial Content',headers:[['Content-Range','bytes '+pos+'-'+
(ab.byteLength-1)+'/'+ab.byteLength]]});}));}
self.addEventListener('fetch',function(e){if(!neverCacheUrls.every(checkNeverCacheList,e.request.url)){console.log('SuperPWA: Current request is excluded from cache.');return;}
if(!e.request.url.match(/^(http|https):\/\//i))
return;if(new URL(e.request.url).origin!==location.origin)
return;if(e.request.method!=='GET'){e.respondWith(fetch(e.request).catch(function(){return caches.match(offlinePage);}));return;}
if(e.request.headers.has('range')){return;}
if((e.request.mode==='navigate'||e.request.mode==='cors')&&navigator.onLine){e.respondWith(fetch(e.request).then(function(response){return caches.open(cacheName).then(function(cache){cache.put(e.request,response.clone());return response;});}).catch();return;}
e.respondWith(caches.match(e.request).then(.catch();});