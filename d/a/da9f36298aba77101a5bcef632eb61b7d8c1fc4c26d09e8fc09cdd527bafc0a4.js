(function(){'use strict';/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */class NamedCacheStorage{constructor(original,cacheNamePrefix){this.original=original;this.cacheNamePrefix=cacheNamePrefix;}
delete(cacheName){return this.original.delete(`${this.cacheNamePrefix}:${cacheName}`);}
keys(){return __awaiter(this,void 0,void 0,function*(){const prefix=`${this.cacheNamePrefix}:`;const allCacheNames=yield this.original.keys();const ownCacheNames=allCacheNames.filter(name=>name.startsWith(prefix));return ownCacheNames.map(name=>name.slice(prefix.length));});}
open(cacheName){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.original.open(`${this.cacheNamePrefix}:${cacheName}`);return Object.assign(cache,{name:cacheName});});}}
class Adapter{constructor(scopeUrl,caches){this.scopeUrl=scopeUrl;const parsedScopeUrl=this.parseUrl(this.scopeUrl);this.origin=parsedScopeUrl.origin;this.caches=new NamedCacheStorage(caches,`ngsw:${parsedScopeUrl.path}`);}
newRequest(input,init){return new Request(input,init);}

class CacheDatabase{constructor'delete'(name){if(this.tables.has(name)){this.tables.delete(name);}
return this.adapter.caches.delete(`${this.cacheNamePrefix}:${name}`);}
list(){return __awaiter(this,void 0,void 0,function*(){const prefix=`${this.cacheNamePrefix}:`;const allCacheNames=yield this.adapter.caches.keys();const dbCacheNames=allCacheNames.filter(name=>name.startsWith(prefix));return dbCacheNames.map(name=>name.slice(prefix.length));});}
open(name,cacheQueryOptions){return __awaiter(this,void 0,void 0,function*(){if(!this.tables.has(name)){const cache=yield this.adapter.caches.open(`${this.cacheNamePrefix}:${name}`);const table=new CacheTable(name,cache,this.adapter,cacheQueryOptions);this.tables.set(name,table);}
return this.tables.get(name);});}}
class CacheTable{constructor(name,cache,adapter,cacheQueryOptions){this.name=name;this.cache=cache;this.adapter=adapter;this.cacheQueryOptions=cacheQueryOptions;this.cacheName=this.cache.name;}
read(key){return this.cache.match(this.request(key),this.cacheQueryOptions).then(res=>{if(res===undefined){return Promise.reject(new NotFound(this.name,key));}
return res.json();});}

var UpdateCacheStatus=(({});class SwCriticalError extends Error{constructor(){super(...arguments);this.isCritical=true;}}
var Endian=(({});class AssetGroup{constructor(scope,adapter,idle,config,hashes,db,cacheNamePrefix){this.scope=scope;this.adapter=adapter;this.idle=idle;this.config=config;this.hashes=hashes;this.db=db;this.inFlightRequests=new Map();this.urls=[];this.patterns=[];this.name=config.name;this.urls=config.urls.map(url=>adapter.normalizeUrl(url));this.patterns=config.patterns.map(pattern=>new RegExp(pattern));this.cache=adapter.caches.open(`${cacheNamePrefix}:${config.name}:cache`);this.metadata=this.db.open(`${cacheNamePrefix}:${config.name}:meta`,config.cacheQueryOptions);}
cacheStatus(url){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.cache;const meta=yield this.metadata;const req=this.adapter.newRequest(url);const res=yield cache.match(req,this.config.cacheQueryOptions);if(res===undefined){return UpdateCacheStatus.NOT_CACHED;}
try{const data=yield meta.read(req.url);if(!data.used){return UpdateCacheStatus.CACHED_BUT_UNUSED;}}
catch(_){}
return UpdateCacheStatus.CACHED;});}
getCacheNames(){return __awaiter(this,void 0,void 0,function*(){const[cache,metadata]=yield Promise.all([this.cache,this.metadata,]);return[cache.name,metadata.cacheName];});}
handleFetch(req,ctx){return __awaiter(this,void 0,void 0,function*(){const url=this.adapter.normalizeUrl(req.url);if(this.urls.indexOf(url)!==-1||this.patterns.some(pattern=>pattern.test(url))){const cache=yield this.cache;const cachedResponse=yield cache.match(req,this.config.cacheQueryOptions);if(cachedResponse!==undefined){if(this.hashes.has(url)){return cachedResponse;}
else{if(yield this.needToRevalidate(req,cachedResponse)){this.idle.schedule(`revalidate(${cache.name}): ${req.url}`,()=>__awaiter(this,void 0,void 0,);}
return cachedResponse;}}
const res=yield this.fetchAndCacheOnce(this.adapter.newRequest(req.url));return res.clone();}
else{return null;}});}
needToRevalidate(req,res){return __awaiter(this,void 0,void 0,function*(){if(res.headers.has('Cache-Control')){const cacheControl=res.headers.get('Cache-Control');const cacheDirectives=cacheControl.split(',').map(v=>v.trim()).map(;cacheDirectives.forEach(;const maxAgeDirective=cacheDirectives.find(;const cacheAge=maxAgeDirective?maxAgeDirective[1]:undefined;if(!cacheAge){return true;}
try{const maxAge=1000*parseInt(cacheAge);let ts;try{const metaTable=yield this.metadata;ts=(yield metaTable.read(req.url)).ts;}
catch(_a){const date=res.headers.get('Date');if(date===null){return true;}
ts=Date.parse(date);}
const age=this.adapter.time-ts;return age<0||age>maxAge;}
catch(_b){return true;}}
else if(res.headers.has('Expires')){const expiresStr=res.headers.get('Expires');try{return this.adapter.time>Date.parse(expiresStr);}
catch(_c){return true;}}
else{return true;}});}
fetchFromCacheOnly(url){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.cache;const metaTable=yield this.metadata;const request=this.adapter.newRequest(url);const response=yield cache.match(request,this.config.cacheQueryOptions);if(response===undefined){return null;}
let metadata=undefined;try{metadata=yield metaTable.read(request.url);}
catch(_a){}
return{response,metadata};});}
unhashedResources(){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.cache;return(yield cache.keys()).map(request=>this.adapter.normalizeUrl(request.url)).filter(;});}
fetchAndCacheOnce(req,used=true){return __awaiter(this,void 0,void 0,function*(){if(this.inFlightRequests.has(req.url)){return this.inFlightRequests.get(req.url);}
const fetchOp=this.fetchFromNetwork(req);this.inFlightRequests.set(req.url,fetchOp);try{const res=yield fetchOp;if(!res.ok){throw new Error(`Response not Ok (fetchAndCacheOnce): request for ${req.url} returned response ${res.status} ${res.statusText}`);}
try{const cache=yield this.cache;yield cache.put(req,res.clone());if(!this.hashes.has(this.adapter.normalizeUrl(req.url))){const meta={ts:this.adapter.time,used};const metaTable=yield this.metadata;yield metaTable.write(req.url,meta);}
return res;}
catch(err){throw new SwCriticalError(`Failed to update the caches for request to '${req.url}' (fetchAndCacheOnce): ${errorToString(err)}`);}}
finally{this.inFlightRequests.delete(req.url);}});}
fetchFromNetwork(req,redirectLimit=3){return __awaiter(this,void 0,void 0,function*(){const res=yield this.cacheBustedFetchFromNetwork(req);if(res['redirected']&&!!res.url){if(redirectLimit===0){throw new SwCriticalError(`Response hit redirect limit (fetchFromNetwork): request redirected too many times, next is ${res.url}`);}
return this.fetchFromNetwork(this.adapter.newRequest(res.url),redirectLimit-1);}
return res;});}
cacheBustedFetchFromNetwork(req){return __awaiter(this,void 0,void 0,function*(){const url=this.adapter.normalizeUrl(req.url);if(this.hashes.has(url)){const canonicalHash=this.hashes.get(url);let response=yield this.safeFetch(req);let makeCacheBustedRequest=response.ok;if(makeCacheBustedRequest){const fetchedHash=sha1Binary(yield response.clone().arrayBuffer());makeCacheBustedRequest=(fetchedHash!==canonicalHash);}
if(makeCacheBustedRequest){const cacheBustReq=this.adapter.newRequest(this.cacheBust(req.url));response=yield this.safeFetch(cacheBustReq);if(response.ok){const cacheBustedHash=sha1Binary(yield response.clone().arrayBuffer());if(canonicalHash!==cacheBustedHash){throw new SwCriticalError(`Hash mismatch (cacheBustedFetchFromNetwork): ${req.url}: expected ${canonicalHash}, got ${cacheBustedHash} (after cache busting)`);}}}
if(!response.ok&&(response.status===404)){throw new SwUnrecoverableStateError(`Failed to retrieve hashed resource from the server. (AssetGroup: ${this.config.name} | URL: ${url})`);}
return response;}
else{return this.safeFetch(req);}});}
maybeUpdate(updateFrom,req,cache){return __awaiter(this,void 0,void 0,function*(){const url=this.adapter.normalizeUrl(req.url);const meta=yield this.metadata;if(this.hashes.has(url)){const hash=this.hashes.get(url);const res=yield updateFrom.lookupResourceWithHash(url,hash);if(res!==null){yield cache.put(req,res);yield meta.write(req.url,{ts:this.adapter.time,used:false});return true;}}
return false;});}
safeFetch(req){return __awaiter(this,void 0,void 0,function*(){try{return yield this.scope.fetch(req);}
catch(_a){return this.adapter.newResponse('',{status:504,statusText:'Gateway Timeout',});}});}}
class PrefetchAssetGroup extends AssetGroup{initializeFully(updateFrom){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.cache;yield this.urls.reduce((previous,url)=>__awaiter(this,void 0,void 0,function*(){yield previous;const req=this.adapter.newRequest(url);const alreadyCached=(yield cache.match(req,this.config.cacheQueryOptions))!==undefined;if(alreadyCached){return;}
if(updateFrom!==undefined&&(yield this.maybeUpdate(updateFrom,req,cache))){return;}
yield this.fetchAndCacheOnce(req,false);}),Promise.resolve());if(updateFrom!==undefined){const metaTable=yield this.metadata;yield(yield updateFrom.previouslyCachedResources()).filter(.reduce((previous,url)=>__awaiter(this,void 0,void 0,function*(){yield previous;const req=this.adapter.newRequest(url);const alreadyCached=((yield cache.match(req,this.config.cacheQueryOptions))!==undefined);if(alreadyCached){return;}
const res=yield updateFrom.lookupResourceWithoutHash(url);if(res===null||res.metadata===undefined){return;}
yield cache.put(req,res.response);yield metaTable.write(req.url,Object.assign(Object.assign({},res.metadata),{used:false}));}),Promise.resolve());}});}}
class LazyAssetGroup extends AssetGroup{initializeFully(updateFrom){return __awaiter(this,void 0,void 0,function*(){if(updateFrom===undefined){return;}
const cache=yield this.cache;yield this.urls.reduce((previous,url)=>__awaiter(this,void 0,void 0,function*(){yield previous;const req=this.adapter.newRequest(url);const alreadyCached=(yield cache.match(req,this.config.cacheQueryOptions))!==undefined;if(alreadyCached){return;}
const updated=yield this.maybeUpdate(updateFrom,req,cache);if(this.config.updateMode==='prefetch'&&!updated){const cacheStatus=yield updateFrom.recentCacheStatus(url);if(cacheStatus!==UpdateCacheStatus.CACHED){return;}
yield this.fetchAndCacheOnce(req,false);}}),Promise.resolve());});}}
class LruList{constructor(state){if(state===undefined){state={head:null,tail:null,map:{},count:0,};}
this.state=state;}
remove(url){const node=this.state.map[url];if(node===undefined){return false;}
if(this.state.head===url){if(node.next===null){this.state.head=null;this.state.tail=null;this.state.map={};this.state.count=0;return true;}
const next=this.state.map[node.next];next.previous=null;this.state.head=next.url;node.next=null;delete this.state.map[url];this.state.count--;return true;}
const previous=this.state.map[node.previous];previous.next=node.next;if(node.next!==null){this.state.map[node.next].previous=node.previous;}
else{this.state.tail=node.previous;}
node.next=null;node.previous=null;delete this.state.map[url];this.state.count--;return true;}
accessed(url){if(this.state.head===url){return;}
const node=this.state.map[url]||{url,next:null,previous:null};if(this.state.map[url]!==undefined){this.remove(url);}
if(this.state.head!==null){this.state.map[this.state.head].previous=url;}
node.next=this.state.head;this.state.head=url;if(this.state.tail===null){this.state.tail=url;}
this.state.map[url]=node;this.state.count++;}}
class DataGroup{constructor(scope,adapter,config,db,debugHandler,cacheNamePrefix){this.scope=scope;this.adapter=adapter;this.config=config;this.db=db;this.debugHandler=debugHandler;this._lru=null;this.patterns=config.patterns.map(;this.cache=adapter.caches.open(`${cacheNamePrefix}:${config.name}:cache`);this.lruTable=this.db.open(`${cacheNamePrefix}:${config.name}:lru`,config.cacheQueryOptions);this.ageTable=this.db.open(`${cacheNamePrefix}:${config.name}:age`,config.cacheQueryOptions);}
lru(){return __awaiter(this,void 0,void 0,function*(){if(this._lru===null){const table=yield this.lruTable;try{this._lru=new LruList(yield table.read('lru'));}
catch(_a){this._lru=new LruList();}}
return this._lru;});}
syncLru(){return __awaiter(this,void 0,void 0,function*(){if(this._lru===null){return;}
const table=yield this.lruTable;try{return table.write('lru',this._lru.state);}
catch(err){this.debugHandler.log(err,`DataGroup(${this.config.name}@${this.config.version}).syncLru()`);}});}
handleFetch(req,ctx){return __awaiter(this,void 0,void 0,function*(){if(!this.patterns.some(){return null;}
const lru=yield this.lru();switch(req.method){case 'OPTIONS':return null;case 'GET':case 'HEAD':switch(this.config.strategy){case 'freshness':return this.handleFetchWithFreshness(req,ctx,lru);case 'performance':return this.handleFetchWithPerformance(req,ctx,lru);default:throw new Error(`Unknown strategy: ${this.config.strategy}`);}
default:const wasCached=lru.remove(req.url);if(wasCached){yield this.clearCacheForUrl(req.url);}
yield this.syncLru();return this.safeFetch(req);}});}
handleFetchWithPerformance(req,ctx,lru){return __awaiter(this,void 0,void 0,function*(){let res=null;const fromCache=yield this.loadFromCache(req,lru);if(fromCache!==null){res=fromCache.res;if(this.config.refreshAheadMs!==undefined&&fromCache.age>=this.config.refreshAheadMs){ctx.waitUntil(this.safeCacheResponse(req,this.safeFetch(req),lru));}}
if(res!==null){return res;}
const[timeoutFetch,networkFetch]=this.networkFetchWithTimeout(req);res=yield timeoutFetch;if(res===undefined){res=this.adapter.newResponse(null,{status:504,statusText:'Gateway Timeout'});ctx.waitUntil(this.safeCacheResponse(req,networkFetch,lru));}
else{yield this.safeCacheResponse(req,res,lru);}
return res;});}
handleFetchWithFreshness(req,ctx,lru){return __awaiter(this,void 0,void 0,function*(){const[timeoutFetch,networkFetch]=this.networkFetchWithTimeout(req);let res;try{res=yield timeoutFetch;}
catch(_a){res=undefined;}
if(res===undefined){ctx.waitUntil(this.safeCacheResponse(req,networkFetch,lru,true));const fromCache=yield this.loadFromCache(req,lru);res=(fromCache!==null)?fromCache.res:null;}
else{yield this.safeCacheResponse(req,res,lru,true);}
if(res!==null){return res;}
return networkFetch;});}
networkFetchWithTimeout(req){if(this.config.timeoutMs!==undefined){const networkFetch=this.scope.fetch(req);const safeNetworkFetch=(()=>__awaiter(this,void 0,void 0,function*(){try{return yield networkFetch;}
catch(_a){return this.adapter.newResponse(null,{status:504,statusText:'Gateway Timeout',});}}))();const networkFetchUndefinedError=(()=>__awaiter(this,void 0,void 0,function*(){try{return yield networkFetch;}
catch(_b){return undefined;}}))();const timeout=this.adapter.timeout(this.config.timeoutMs);return[Promise.race([networkFetchUndefinedError,timeout]),safeNetworkFetch];}
else{const networkFetch=this.safeFetch(req);return[networkFetch,networkFetch];}}
safeCacheResponse(req,resOrPromise,lru,okToCacheOpaque){return __awaiter(this,void 0,void 0,function*(){try{const res=yield resOrPromise;try{yield this.cacheResponse(req,res,lru,okToCacheOpaque);}
catch(err){this.debugHandler.log(err,`DataGroup(${this.config.name}@${this.config.version}).safeCacheResponse(${req.url}, status: ${res.status})`);}}
catch(_a){}});}
loadFromCache(req,lru){return __awaiter(this,void 0,void 0,function*(){const cache=yield this.cache;let res=yield cache.match(req,this.config.cacheQueryOptions);if(res!==undefined){try{const ageTable=yield this.ageTable;const age=this.adapter.time-(yield ageTable.read(req.url)).age;if(age<=this.config.maxAge){lru.accessed(req.url);return{res,age};}}
catch(_a){}
lru.remove(req.url);yield this.clearCacheForUrl(req.url);yield this.syncLru();}
return null;});}
cacheResponse(req,res,lru,okToCacheOpaque=false){return __awaiter(this,void 0,void 0,function*(){if(!(res.ok||(okToCacheOpaque&&res.type==='opaque'))){return;}
if(lru.size>=this.config.maxSize){const evictedUrl=lru.pop();if(evictedUrl!==null){yield this.clearCacheForUrl(evictedUrl);}}
lru.accessed(req.url);yield(yield this.cache).put(req,res.clone());const ageTable=yield this.ageTable;yield ageTable.write(req.url,{age:this.adapter.time});yield this.syncLru();});}
cleanup(){return __awaiter(this,void 0,void 0,function*(){yield Promise.all([this.cache.then(,this.ageTable.then(table=>this.db.delete(table.name)),this.lruTable.then(,]);});}
getCacheNames(){return __awaiter(this,void 0,void 0,function*(){const[cache,ageTable,lruTable]=yield Promise.all([this.cache,this.ageTable,this.lruTable,]);return[cache.name,ageTable.cacheName,lruTable.cacheName];});}
clearCacheForUrl(url){return __awaiter(this,void 0,void 0,function*(){const[cache,ageTable]=yield Promise.all([this.cache,this.ageTable]);yield Promise.all([cache.delete(this.adapter.newRequest(url,{method:'GET'}),this.config.cacheQueryOptions),cache.delete(this.adapter.newRequest(url,{method:'HEAD'}),this.config.cacheQueryOptions),ageTable.delete(url),]);});}
safeFetch(req){return __awaiter(this,void 0,void 0,function*(){try{return this.scope.fetch(req);}
catch(_a){return this.adapter.newResponse(null,{status:504,statusText:'Gateway Timeout',});}});}}
const BACKWARDS_COMPATIBILITY_NAVIGATION_URLS=[{positive:true,regex:'^/.*$'},{positive:false,regex:'^/.*\\.[^/]*$'},{positive:false,regex:'^/.*__'},];class AppVersion{constructor(scope,adapter,database,idle,debugHandler,manifest,manifestHash){this.scope=scope;this.adapter=adapter;this.database=database;this.debugHandler=debugHandler;this.manifest=manifest;this.manifestHash=manifestHash;this.hashTable=new Map();this.indexUrl=this.adapter.normalizeUrl(this.manifest.index);this._okay=true;Object.keys(manifest.hashTable).forEach(url=>{this.hashTable.set(adapter.normalizeUrl(url),manifest.hashTable[url]);});const assetCacheNamePrefix=`${manifestHash}:assets`;this.assetGroups=(manifest.assetGroups||[]).map(config=>{switch(config.installMode){case 'prefetch':return new PrefetchAssetGroup(scope,adapter,idle,config,this.hashTable,database,assetCacheNamePrefix);case 'lazy':return new LazyAssetGroup(scope,adapter,idle,config,this.hashTable,database,assetCacheNamePrefix);}});this.dataGroups=(manifest.dataGroups||[]).map(config=>new DataGroup(scope,adapter,config,database,debugHandler,`${config.version}:data`));manifest.navigationUrls=manifest.navigationUrls||BACKWARDS_COMPATIBILITY_NAVIGATION_URLS;const includeUrls=manifest.navigationUrls.filter(;const excludeUrls=manifest.navigationUrls.filter(;this.navigationUrls={include:includeUrls.map(spec=>new RegExp(spec.regex)),exclude:excludeUrls.map(,};}
initializeFully(updateFrom){return __awaiter(this,void 0,void 0,function*(){try{yield this.assetGroups.reduce((previous,group)=>__awaiter(this,void 0,void 0,function*(){yield previous;return group.initializeFully(updateFrom);}),Promise.resolve());}
catch(err){this._okay=false;throw err;}});}
handleFetch(req,context){return __awaiter(this,void 0,void 0,function*(){const asset=yield this.assetGroups.reduce((potentialResponse,group)=>__awaiter(this,void 0,void 0,function*(){const resp=yield potentialResponse;if(resp!==null){return resp;}
return group.handleFetch(req,context);}),Promise.resolve(null));if(asset!==null){return asset;}
const data=yield this.dataGroups.reduce((potentialResponse,group)=>__awaiter(this,void 0,void 0,function*(){const resp=yield potentialResponse;if(resp!==null){return resp;}
return group.handleFetch(req,context);}),Promise.resolve(null));if(data!==null){return data;}
if(this.adapter.normalizeUrl(req.url)!==this.indexUrl&&this.isNavigationRequest(req)){if(this.manifest.navigationRequestStrategy==='freshness'){try{return yield this.scope.fetch(req);}
catch(_a){}}
return this.handleFetch(this.adapter.newRequest(this.indexUrl),context);}
return null;});}
isNavigationRequest(req){if(req.mode!=='navigate'){return false;}
if(!this.acceptsTextHtml(req)){return false;}
const urlPrefix=this.scope.registration.scope.replace(/\/$/,'');const url=req.url.startsWith(urlPrefix)?req.url.substr(urlPrefix.length):req.url;const urlWithoutQueryOrHash=url.replace(/[?#].*$/,'');return this.navigationUrls.include.some(regex=>regex.test(urlWithoutQueryOrHash))&&!this.navigationUrls.exclude.some(;}
lookupResourceWithHash(url,hash){return __awaiter(this,void 0,void 0,function*(){if(!this.hashTable.has(url)){return null;}
if(this.hashTable.get(url)!==hash){return null;}
const cacheState=yield this.lookupResourceWithoutHash(url);return cacheState&&cacheState.response;});}
lookupResourceWithoutHash(url){return this.assetGroups.reduce((potentialResponse,group)=>__awaiter(this,void 0,void 0,function*(){const resp=yield potentialResponse;if(resp!==null){return resp;}
return group.fetchFromCacheOnly(url);}),Promise.resolve(null));}
previouslyCachedResources(){return this.assetGroups.reduce((resources,group)=>__awaiter(this,void 0,void 0,function*(){return(yield resources).concat(yield group.unhashedResources());}),Promise.resolve([]));}
recentCacheStatus(url){return __awaiter(this,void 0,void 0,function*(){return this.assetGroups.reduce((current,group)=>__awaiter(this,void 0,void 0,function*(){const status=yield current;if(status===UpdateCacheStatus.CACHED){return status;}
const groupStatus=yield group.cacheStatus(url);if(groupStatus===UpdateCacheStatus.NOT_CACHED){return status;}
return groupStatus;}),Promise.resolve(UpdateCacheStatus.NOT_CACHED));});}
getCacheNames(){return __awaiter(this,void 0,void 0,function*(){const allGroupCacheNames=yield Promise.all([...this.assetGroups.map(group=>group.getCacheNames()),...this.dataGroups.map(,]);return[].concat(...allGroupCacheNames);});}

const SW_VERSION='12.1.1';const DEBUG_LOG_BUFFER_SIZE=100;class DebugHandler{handleFetch(req){return __awaiter(this,void 0,void 0,function*(){const[state,versions,idle]=yield Promise.all([this.driver.debugState(),this.driver.debugVersions(),this.driver.debugIdleState(),]);const msgState=`NGSW Debug Info:

Driver version: ${SW_VERSION}
Driver state: ${state.state} (${state.why})
Latest manifest hash: ${state.latestHash||'none'}
Last update check: ${this.since(state.lastUpdateCheck)}`;const msgVersions=versions.map(.join('\n\n');const msgIdle=`=== Idle Task Queue ===
Last update tick: ${this.since(idle.lastTrigger)}
Last update run: ${this.since(idle.lastRun)}
Task queue:
${idle.queue.map(.join('\n')}

Debug log:
${this.formatDebugLog(this.debugLogB)}
${this.formatDebugLog(this.debugLogA)}
`;return this.adapter.newResponse(`${msgState}

${msgVersions}

${msgIdle}`,{headers:this.adapter.newHeaders({'Content-Type':'text/plain'})});});}
since(time){if(time===null){return 'never';}
let age=this.adapter.time-time;const days=Math.floor(age/86400000);age=age%86400000;const hours=Math.floor(age/3600000);age=age%3600000;const minutes=Math.floor(age/60000);age=age%60000;const seconds=Math.floor(age/1000);const millis=age%1000;return ''+(days>0?`${days}d`:'')+(hours>0?`${hours}h`:'')+
(minutes>0?`${minutes}m`:'')+(seconds>0?`${seconds}s`:'')+
(millis>0?`${millis}u`:'');}

class IdleScheduler{trigger(){var _a;return __awaiter(this,void 0,void 0,function*(){this.lastTrigger=this.adapter.time;if(this.queue.length===0){return;}
if(this.scheduled!==null){this.scheduled.cancel=true;}
const scheduled={cancel:false,};this.scheduled=scheduled;const now=this.adapter.time;const maxDelay=Math.max(0,((_a=this.oldestScheduledAt)!==null&&_a!==void 0?_a:now)+this.maxDelay-now);const delay=Math.min(maxDelay,this.delay);yield this.adapter.timeout(delay);if(scheduled.cancel){return;}
this.scheduled=null;yield this.execute();});}
execute(){return __awaiter(this,void 0,void 0,function*(){this.lastRun=this.adapter.time;while(this.queue.length>0){const queue=this.queue;this.queue=[];yield queue.reduce((previous,task)=>__awaiter(this,void 0,void 0,function*(){yield previous;try{yield task.run();}
catch(err){this.debug.log(err,`while running idle task ${task.desc}`);}}),Promise.resolve());}
if(this.emptyResolve!==null){this.emptyResolve();this.emptyResolve=null;}
this.empty=Promise.resolve();this.oldestScheduledAt=null;});}
get size(){return this.queue.length;}

function isMsgCheckForUpdates(msg){return msg.action==='CHECK_FOR_UPDATES';}
const IDLE_DELAY=5000;const MAX_IDLE_DELAY=30000;const SUPPORTED_CONFIG_VERSION=1;const NOTIFICATION_OPTION_NAMES=['actions','badge','body','data','dir','icon','image','lang','renotify','requireInteraction','silent','tag','timestamp','title','vibrate'];var DriverReadyState=(function(DriverReadyState){DriverReadyState[DriverReadyState["NORMAL"]=0]="NORMAL";DriverReadyState[DriverReadyState["EXISTING_CLIENTS_ONLY"]=1]="EXISTING_CLIENTS_ONLY";DriverReadyState[DriverReadyState["SAFE_MODE"]=2]="SAFE_MODE";return DriverReadyState;})({});class Driver{constructor(scope,adapter,db){this.scope=scope;this.adapter=adapter;this.db=db;this.state=DriverReadyState.NORMAL;this.stateMessage='(nominal)';this.initialized=null;this.clientVersionMap=new Map();this.versions=new Map();this.latestHash=null;this.lastUpdateCheck=null;this.scheduledNavUpdateCheck=false;this.loggedInvalidOnlyIfCachedRequest=false;this.ngswStatePath=this.adapter.parseUrl('ngsw/state',this.scope.registration.scope).path;this.controlTable=this.db.open('control');this.scope.addEventListener('install',;this.scope.addEventListener('activate',(event)=>{event.waitUntil((()=>__awaiter(this,void 0,void 0,function*(){yield this.scope.clients.claim();this.idle.schedule('activate: cleanup-old-sw-caches',()=>__awaiter(this,void 0,void 0,function*(){try{yield this.cleanupOldSwCaches();}
catch(err){this.debugger.log(err,'cleanupOldSwCaches @ activate: cleanup-old-sw-caches');}}));}))());if(this.scope.registration.active!==null){this.scope.registration.active.postMessage({action:'INITIALIZE'});}});this.scope.addEventListener('fetch',(event)=>this.onFetch(event));this.scope.addEventListener('message',(event)=>this.onMessage(event));this.scope.addEventListener('push',(event)=>this.onPush(event));this.scope.addEventListener('notificationclick',;this.debugger=new DebugHandler(this,this.adapter);this.idle=new IdleScheduler(this.adapter,IDLE_DELAY,MAX_IDLE_DELAY,this.debugger);}
onMessage(event){if(this.state===DriverReadyState.SAFE_MODE){return;}
const data=event.data;if(!data||!data.action){return;}
event.waitUntil((()=>__awaiter(this,void 0,void 0,function*(){if(data.action==='INITIALIZE'){return this.ensureInitialized(event);}
if(!this.adapter.isClient(event.source)){return;}
yield this.ensureInitialized(event);yield this.handleMessage(data,event.source);}))());}
ensureInitialized(event){return __awaiter(this,void 0,void 0,function*(){if(this.initialized!==null){return this.initialized;}
try{this.initialized=this.initialize();yield this.initialized;}
catch(error){this.state=DriverReadyState.SAFE_MODE;this.stateMessage=`Initialization failed due to error: ${errorToString(error)}`;throw error;}
finally{event.waitUntil(this.idle.trigger());}});}
handleMessage(msg,from){return __awaiter(this,void 0,void 0,function*(){if(isMsgCheckForUpdates(msg)){const action=(()=>__awaiter(this,void 0,void 0,function*(){yield this.checkForUpdate();}))();yield this.reportStatus(from,action,msg.statusNonce);}
else if(isMsgActivateUpdate(msg)){yield this.reportStatus(from,this.updateClient(from),msg.statusNonce);}});}
handlePush(data){return __awaiter(this,void 0,void 0,function*(){yield this.broadcast({type:'PUSH',data,});if(!data.notification||!data.notification.title){return;}
const desc=data.notification;let options={};NOTIFICATION_OPTION_NAMES.filter(name=>desc.hasOwnProperty(name)).forEach(name=>options[name]=desc[name]);yield this.scope.registration.showNotification(desc['title'],options);});}
handleClick(notification,action){var _a,_b;return __awaiter(this,void 0,void 0,function*(){notification.close();const options={};NOTIFICATION_OPTION_NAMES.filter(.forEach(;const notificationAction=action===''||action===undefined?'default':action;const onActionClick=(_a=notification===null||notification===void 0?void 0:notification.data)===null||_a===void 0?void 0:_a.onActionClick[notificationAction];const urlToOpen=new URL((_b=onActionClick===null||onActionClick===void 0?void 0:onActionClick.url)!==null&&_b!==void 0?_b:'',this.scope.registration.scope).href;switch(onActionClick===null||onActionClick===void 0?void 0:onActionClick.operation){case 'openWindow':yield this.scope.clients.openWindow(urlToOpen);break;case 'focusLastFocusedOrOpen':{let matchingClient=yield this.getLastFocusedMatchingClient(this.scope);if(matchingClient){yield(matchingClient===null||matchingClient===void 0?void 0:matchingClient.focus());}
else{yield this.scope.clients.openWindow(urlToOpen);}
break;}
case 'navigateLastFocusedOrOpen':{let matchingClient=yield this.getLastFocusedMatchingClient(this.scope);if(matchingClient){matchingClient=yield matchingClient.navigate(urlToOpen);yield(matchingClient===null||matchingClient===void 0?void 0:matchingClient.focus());}
else{yield this.scope.clients.openWindow(urlToOpen);}
break;}}
yield this.broadcast({type:'NOTIFICATION_CLICK',data:{action,notification:options},});});}
getLastFocusedMatchingClient(scope){return __awaiter(this,void 0,void 0,function*(){const windowClients=yield scope.clients.matchAll({type:'window'});return windowClients[0];});}
reportStatus(client,promise,nonce){return __awaiter(this,void 0,void 0,function*(){const response={type:'STATUS',nonce,status:true};try{yield promise;client.postMessage(response);}
catch(e){client.postMessage(Object.assign(Object.assign({},response),{status:false,error:e.toString()}));}});}
updateClient(client){return __awaiter(this,void 0,void 0,function*(){const existing=this.clientVersionMap.get(client.id);if(existing===this.latestHash){return;}
let previous=undefined;if(existing!==undefined){const existingVersion=this.versions.get(existing);previous=this.mergeHashWithAppData(existingVersion.manifest,existing);}
this.clientVersionMap.set(client.id,this.latestHash);yield this.sync();const current=this.versions.get(this.latestHash);const notice={type:'UPDATE_ACTIVATED',previous,current:this.mergeHashWithAppData(current.manifest,this.latestHash),};client.postMessage(notice);});}
handleFetch(event){return __awaiter(this,void 0,void 0,function*(){try{yield this.ensureInitialized(event);}
catch(_a){return this.safeFetch(event.request);}
if(event.request.mode==='navigate'&&!this.scheduledNavUpdateCheck){this.scheduledNavUpdateCheck=true;this.idle.schedule('check-updates-on-navigation',()=>__awaiter(this,void 0,void 0,function*(){this.scheduledNavUpdateCheck=false;yield this.checkForUpdate();}));}
const appVersion=yield this.assignVersion(event);let res=null;try{if(appVersion!==null){try{res=yield appVersion.handleFetch(event.request,event);}
catch(err){if(err.isUnrecoverableState){yield this.notifyClientsAboutUnrecoverableState(appVersion,err.message);}
if(err.isCritical){yield this.versionFailed(appVersion,err);return this.safeFetch(event.request);}
throw err;}}
if(res===null){return this.safeFetch(event.request);}
return res;}
finally{event.waitUntil(this.idle.trigger());}});}
initialize(){return __awaiter(this,void 0,void 0,function*(){const table=yield this.controlTable;let manifests,assignments,latest;try{[manifests,assignments,latest]=yield Promise.all([table.read('manifests'),table.read('assignments'),table.read('latest'),]);if(!this.versions.has(latest.latest)&&!manifests.hasOwnProperty(latest.latest)){this.debugger.log(`Missing manifest for latest version hash ${latest.latest}`,'initialize: read from DB');throw new Error(`Missing manifest for latest hash ${latest.latest}`);}
this.idle.schedule('init post-load (update)',()=>__awaiter(this,void 0,void 0,function*(){yield this.checkForUpdate();}));}
catch(_){const manifest=yield this.fetchLatestManifest();const hash=hashManifest(manifest);manifests={[hash]:manifest};assignments={};latest={latest:hash};yield Promise.all([table.write('manifests',manifests),table.write('assignments',assignments),table.write('latest',latest),]);}
this.idle.schedule('init post-load (cleanup)',()=>__awaiter(this,void 0,void 0,);Object.keys(manifests).forEach(;Object.keys(assignments).forEach(;this.latestHash=latest.latest;if(!this.versions.has(latest.latest)){throw new Error(`Invariant violated (initialize): latest hash ${latest.latest} has no known manifest`);}
yield Promise.all(Object.keys(manifests).map((hash)=>__awaiter(this,void 0,void 0,function*(){try{yield this.scheduleInitialization(this.versions.get(hash));}
catch(err){this.debugger.log(err,`initialize: schedule init of ${hash}`);return false;}})));});}
assignVersion(event){return __awaiter(this,void 0,void 0,function*(){const clientId=event.resultingClientId||event.clientId;if(clientId){if(this.clientVersionMap.has(clientId)){const hash=this.clientVersionMap.get(clientId);let appVersion=this.lookupVersionByHash(hash,'assignVersion');if(this.state===DriverReadyState.NORMAL&&hash!==this.latestHash&&appVersion.isNavigationRequest(event.request)){if(this.latestHash===null){throw new Error(`Invariant violated (assignVersion): latestHash was null`);}
const client=yield this.scope.clients.get(clientId);yield this.updateClient(client);appVersion=this.lookupVersionByHash(this.latestHash,'assignVersion');}
return appVersion;}
else{if(this.state!==DriverReadyState.NORMAL){return null;}
if(this.latestHash===null){throw new Error(`Invariant violated (assignVersion): latestHash was null`);}
this.clientVersionMap.set(clientId,this.latestHash);yield this.sync();return this.lookupVersionByHash(this.latestHash,'assignVersion');}}
else{if(this.state!==DriverReadyState.NORMAL){return null;}
if(this.latestHash===null){throw new Error(`Invariant violated (assignVersion): latestHash was null`);}
return this.lookupVersionByHash(this.latestHash,'assignVersion');}});}
fetchLatestManifest(ignoreOfflineError=false){return __awaiter(this,void 0,void 0,function*(){const res=yield this.safeFetch(this.adapter.newRequest('ngsw.json?ngsw-cache-bust='+Math.random()));if(!res.ok){if(res.status===404){yield this.deleteAllCaches();yield this.scope.registration.unregister();}
else if((res.status===503||res.status===504)&&ignoreOfflineError){return null;}
throw new Error(`Manifest fetch failed! (status: ${res.status})`);}
this.lastUpdateCheck=this.adapter.time;return res.json();});}
deleteAllCaches(){return __awaiter(this,void 0,void 0,function*(){const cacheNames=yield this.adapter.caches.keys();yield Promise.all(cacheNames.map(name=>this.adapter.caches.delete(name)));});}
scheduleInitialization(appVersion){return __awaiter(this,void 0,void 0,function*(){const initialize=()=>__awaiter(this,void 0,void 0,function*(){try{yield appVersion.initializeFully();}
catch(err){this.debugger.log(err,`initializeFully for ${appVersion.manifestHash}`);yield this.versionFailed(appVersion,err);}});if(this.scope.registration.scope.indexOf('://localhost')>-1){return initialize();}
this.idle.schedule(`initialization(${appVersion.manifestHash})`,initialize);});}
versionFailed(appVersion,err){return __awaiter(this,void 0,void 0,function*(){const broken=Array.from(this.versions.entries()).find(([hash,version])=>version===appVersion);if(broken===undefined){return;}
const brokenHash=broken[0];const affectedClients=Array.from(this.clientVersionMap.entries()).filter(([clientId,hash])=>hash===brokenHash).map(([clientId])=>clientId);if(this.latestHash===brokenHash){this.state=DriverReadyState.EXISTING_CLIENTS_ONLY;this.stateMessage=`Degraded due to: ${errorToString(err)}`;affectedClients.forEach(clientId=>this.clientVersionMap.delete(clientId));}
else{affectedClients.forEach(;}
try{yield this.sync();}
catch(err2){this.debugger.log(err2,`Driver.versionFailed(${err.message||err})`);}});}
setupUpdate(manifest,hash){return __awaiter(this,void 0,void 0,function*(){const newVersion=new AppVersion(this.scope,this.adapter,this.db,this.idle,this.debugger,manifest,hash);if(manifest.configVersion!==SUPPORTED_CONFIG_VERSION){yield this.deleteAllCaches();yield this.scope.registration.unregister();throw new Error(`Invalid config version: expected ${SUPPORTED_CONFIG_VERSION}, got ${manifest.configVersion}.`);}
yield newVersion.initializeFully(this);this.versions.set(hash,newVersion);this.latestHash=hash;if(this.state===DriverReadyState.EXISTING_CLIENTS_ONLY){this.state=DriverReadyState.NORMAL;this.stateMessage='(nominal)';}
yield this.sync();yield this.notifyClientsAboutUpdate(newVersion);});}
checkForUpdate(){return __awaiter(this,void 0,void 0,function*(){let hash='(unknown)';try{const manifest=yield this.fetchLatestManifest(true);if(manifest===null){this.debugger.log('Check for update aborted. (Client or server offline.)');return false;}
hash=hashManifest(manifest);if(this.versions.has(hash)){return false;}
yield this.setupUpdate(manifest,hash);return true;}
catch(err){this.debugger.log(err,`Error occurred while updating to manifest ${hash}`);this.state=DriverReadyState.EXISTING_CLIENTS_ONLY;this.stateMessage=`Degraded due to failed initialization: ${errorToString(err)}`;return false;}});}
sync(){return __awaiter(this,void 0,void 0,function*(){const table=yield this.controlTable;const manifests={};this.versions.forEach(;const assignments={};this.clientVersionMap.forEach(;const latest={latest:this.latestHash,};yield Promise.all([table.write('manifests',manifests),table.write('assignments',assignments),table.write('latest',latest),]);});}
cleanupCaches(){return __awaiter(this,void 0,void 0,function*(){try{const activeClients=new Set((yield this.scope.clients.matchAll()).map(client=>client.id));const knownClients=Array.from(this.clientVersionMap.keys());const obsoleteClients=knownClients.filter(id=>!activeClients.has(id));obsoleteClients.forEach(id=>this.clientVersionMap.delete(id));const usedVersions=new Set(this.clientVersionMap.values());const obsoleteVersions=Array.from(this.versions.keys()).filter(;obsoleteVersions.forEach(;yield this.sync();const allCaches=yield this.adapter.caches.keys();const usedCaches=new Set(yield this.getCacheNames());const cachesToDelete=allCaches.filter(;yield Promise.all(cachesToDelete.map();}
catch(err){this.debugger.log(err,'cleanupCaches');}});}
cleanupOldSwCaches(){return __awaiter(this,void 0,void 0,function*(){const caches=this.adapter.caches.original;const cacheNames=yield caches.keys();const oldSwCacheNames=cacheNames.filter(;yield Promise.all(oldSwCacheNames.map(name=>caches.delete(name)));});}
lookupResourceWithHash(url,hash){return Array.from(this.versions.values()).reduce((prev,version)=>__awaiter(this,void 0,void 0,function*(){if((yield prev)!==null){return prev;}
return version.lookupResourceWithHash(url,hash);}),Promise.resolve(null));}
lookupResourceWithoutHash(url){return __awaiter(this,void 0,void 0,function*(){yield this.initialized;const version=this.versions.get(this.latestHash);return version?version.lookupResourceWithoutHash(url):null;});}
previouslyCachedResources(){return __awaiter(this,void 0,void 0,function*(){yield this.initialized;const version=this.versions.get(this.latestHash);return version?version.previouslyCachedResources():[];});}
recentCacheStatus(url){return __awaiter(this,void 0,void 0,function*(){const version=this.versions.get(this.latestHash);return version?version.recentCacheStatus(url):UpdateCacheStatus.NOT_CACHED;});}
notifyClientsAboutUnrecoverableState(appVersion,reason){return __awaiter(this,void 0,void 0,function*(){const broken=Array.from(this.versions.entries()).find(([hash,version])=>version===appVersion);if(broken===undefined){return;}
const brokenHash=broken[0];const affectedClients=Array.from(this.clientVersionMap.entries()).filter(([clientId,hash])=>hash===brokenHash).map(;yield Promise.all(affectedClients.map((clientId)=>__awaiter(this,void 0,void 0,function*(){const client=yield this.scope.clients.get(clientId);client.postMessage({type:'UNRECOVERABLE_STATE',reason});})));});}
notifyClientsAboutUpdate(next){return __awaiter(this,void 0,void 0,function*(){yield this.initialized;const clients=yield this.scope.clients.matchAll();yield Promise.all(clients.map((client)=>__awaiter(this,void 0,void 0,function*(){const version=this.clientVersionMap.get(client.id);if(version===undefined){return;}
if(version===this.latestHash){return;}
const current=this.versions.get(version);const notice={type:'UPDATE_AVAILABLE',current:this.mergeHashWithAppData(current.manifest,version),available:this.mergeHashWithAppData(next.manifest,this.latestHash),};client.postMessage(notice);})));});}
broadcast(msg){return __awaiter(this,void 0,void 0,function*(){const clients=yield this.scope.clients.matchAll();clients.forEach(;});}
debugState(){return __awaiter(this,void 0,void 0,;}
debugVersions(){return __awaiter(this,void 0,void 0,;}
debugIdleState(){return __awaiter(this,void 0,void 0,;}
safeFetch(req){return __awaiter(this,void 0,void 0,function*(){try{return yield this.scope.fetch(req);}
catch(err){this.debugger.log(err,`Driver.fetch(${req.url})`);return this.adapter.newResponse(null,{status:504,statusText:'Gateway Timeout',});}});}
getCacheNames(){return __awaiter(this,void 0,void 0,function*(){const controlTable=yield this.controlTable;const appVersions=Array.from(this.versions.values());const appVersionCacheNames=yield Promise.all(appVersions.map(version=>version.getCacheNames()));return[controlTable.cacheName].concat(...appVersionCacheNames);});}}
const scope=self;const adapter=new Adapter(scope.registration.scope,self.caches);new Driver(scope,adapter,new CacheDatabase(adapter));}());