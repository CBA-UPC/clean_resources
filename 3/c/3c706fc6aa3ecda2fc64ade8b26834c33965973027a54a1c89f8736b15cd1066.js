"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7922],{7922:function(e,t,i){i.r(t),i.d(t,{activate:function(){return d},ensureInitialized:function(){return p},fetchAndActivate:function(){return P},fetchConfig:function(){return w},getAll:function(){return _},getBoolean:function(){return v},getNumber:function(){return C},getRemoteConfig:function(){return m},getString:function(){return S},getValue:function(){return T},isSupported:function(){return N},setLogLevel:);var s=i(96327),a=i(83395),r=i(46387),n=i(68207);i(65612);let o="@firebase/remote-config",c="0.4.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="remote-config",g=new a.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"}),h=["1","true","t","yes","y","on"];**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e=(0,s.Mq)()){e=(0,a.m9)(e);let t=(0,s.qX)(e,u);return t.getImmediate()}async function d(e){let t=(0,a.m9)(e),[i,s]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!!i&&!!i.config&&!!i.eTag&&i.eTag!==s&&(await Promise.all([t._storageCache.setActiveConfig(i.config),t._storage.setActiveConfigEtag(i.eTag)]),!0)}function p(e){let t=(0,a.m9)(e);return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(),t._initializePromise}async function w(e){let t=(0,a.m9)(e),i=new l;setTimeout(t.settings.fetchTimeoutMillis);try{await t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:i}),await t._storageCache.setLastFetchStatus("success")}catch(i){let e=i instanceof a.ZR&&-1!==i.code.indexOf("fetch-throttle")?"throttle":"failure";throw await t._storageCache.setLastFetchStatus(e),i}}function _(e){let t=(0,a.m9)(e);return(function(e={},t={}){return Object.keys(Object.assign(Object.assign({},e),t))})(t._storageCache.getActiveConfig(),t.defaultConfig).reduce({})}function v(e,t){return T((0,a.m9)(e),t).asBoolean()}function C(e,t){return T((0,a.m9)(e),t).asNumber()}function S(e,t){return T((0,a.m9)(e),t).asString()}function T(e,t){let i=(0,a.m9)(e);i._isInitializationComplete||i._logger.debug(`A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);let s=i._storageCache.getActiveConfig();return s&&void 0!==s[t]?new f("remote",s[t]):i.defaultConfig&&void 0!==i.defaultConfig[t]?new f("default",String(i.defaultConfig[t])):(i._logger.debug(`Returning static value for key "${t}". Define a default or remote value if this is unintentional.`),new f("static"))}function M(e,t){let i=(0,a.m9)(e);switch(t){case"debug":i._logger.logLevel=n.in.DEBUG;break;case"silent":i._logger.logLevel=n.in.SILENT;break;default:i._logger.logLevel=n.in.ERROR}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{sync fetch(e){let t,i,s;let[a,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=`${n}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,c={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},l={sdk_version:this.sdkVersion,app_instance_id:a,app_instance_id_token:r,app_id:this.appId,language_code:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=navigator){return e.languages&&e.languages[0]||e.language}()},u={method:"POST",headers:c,body:JSON.stringify(l)},h=fetch(o,u),f=new Promise((t,i)=>{e.signal.addEventListener(()=>{let e=Error("The operation was aborted.");e.name="AbortError",i(e)})});try{await Promise.race([h,f]),t=await h}catch(t){let e="fetch-client-network";throw(null==t?void 0:t.name)==="AbortError"&&(e="fetch-timeout"),g.create(e,{originalErrorMessage:null==t?void 0:t.message})}let m=t.status,d=t.headers.get("ETag")||void 0;if(200===t.status){let e;try{e=await t.json()}catch(e){throw g.create("fetch-client-parse",{originalErrorMessage:null==e?void 0:e.message})}i=e.entries,s=e.state}if("INSTANCE_STATE_UNSPECIFIED"===s?m=500:"NO_CHANGE"===s?m=304:("NO_TEMPLATE"===s||"EMPTY_CONFIG"===s)&&(i={}),304!==m&&200!==m)throw g.create("fetch-status",{httpStatus:m});return{status:m,eTag:d,config:i}}}class F{ync attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:i}){var s;await (s=e.signal,new Promise();try{let t=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),t}catch(s){if(!s))throw s;let t={throttleEndTimeMillis:Date.now()+(0,a.$s)(i),backoffCount:i+1};return await this.storage.setThrottleMetadata(t),this.attemptFetch(e,t)}}}**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){let i=e.target.error||void 0;return g.create(t,{originalErrorMessage:i&&(null==i?void 0:i.message)})}let I="app_namespace_store";class k{constructor(e,t,i,s=new Promise((e,t)=>{try{let i=indexedDB.open("firebase_remote_config",1);i.onerror=e=>{t(L(e,"storage-open"))},i.onsuccess=i.onupgradeneeded=e=>{let t=e.target.result;0===e.oldVersion&&t.createObjectStore(I,{keyPath:"compositeKey"})}}catch(e){t(g.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}})){this.appId=e,this.appName=t,this.namespace=i,this.openDbPromise=s}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}ync get(e){let t=await this.openDbPromise;return new Promise((i,s)=>{let a=t.transaction([I],"readonly"),r=a.objectStore(I),n=this.createCompositeKey(e);try{let e=r.get(n);e.onerror=e=>{s(L(e,"storage-get"))},e.onsuccess=e=>{let t=e.target.result;t?i(t.value):i(void 0)}}catch(e){s(g.create("storage-get",{originalErrorMessage:null==e?void 0:e.message}))}})}async set(e,t){let i=await this.openDbPromise;return new Promise((s,a)=>{let r=i.transaction([I],"readwrite"),n=r.objectStore(I),o=this.createCompositeKey(e);try{let e=n.put({compositeKey:o,value:t});e.onerror=e=>{a(L(e,"storage-set"))},e.onsuccess=()=>{s()}}catch(e){a(g.create("storage-set",{originalErrorMessage:null==e?void 0:e.message}))}})}async delete(e){let t=await this.openDbPromise;return new Promise((i,s)=>{let a=t.transaction([I],"readwrite"),r=a.objectStore(I),n=this.createCompositeKey(e);try{let e=r.delete(n);e.onerror=e.onsuccess=catch(e){s(g.create("storage-delete",{originalErrorMessage:null==e?void 0:e.message}))}})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(e){return await w(e=(0,a.m9)(e)),d(e)}async function N(){if(!(0,a.hl)())return!1;try{let e=await (0,a.eu)();return e}catch(e){return!1}}(0,s.Xd)(new r.wA(u,function(e,{instanceIdentifier:t}){let i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw g.create("registration-window");if(!(0,a.hl)())throw g.create("indexed-db-unavailable");let{projectId:c,apiKey:l,appId:u}=i.options;if(!c)throw g.create("registration-project-id");if(!l)throw g.create("registration-api-key");if(!u)throw g.create("registration-app-id");t=t||"firebase";let h=new k(u,i.name,t),f=new A(h),m=new n.Yd(o);m.logLevel=n.in.ERROR;let d=new E(r,s.Jn,t,c,l,u),w=new F(d,h),_=new b(w,h,f,m),v=new y(i,_,f,h,m);return p(v),v},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(o,c),(0,s.KN)(o,c,"esm2017")}}]);