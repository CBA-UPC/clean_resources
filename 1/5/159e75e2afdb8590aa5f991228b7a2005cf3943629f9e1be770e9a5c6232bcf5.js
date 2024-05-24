!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(ft){"use strict";try{(function(){ft=ft&&ft.hasOwnProperty("default")?ft.default:ft;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||functionction(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(o,s,a,u){return new(a=a||Promise)(function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function r(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new a(function(e){e(t.value)}).then(n,r)}i((u=u.apply(o,s||[])).next())})}function p(n,r){var i,o,s,e,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;fus[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function c(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function i(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}var e,t,o,d=(o=Error,n(e=a,t=o),void(e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)),a);function s(){this.constructor=e}function a(e,t){var n=o.call(this,t)||this;return n.code=e,n.name="FirebaseError",Object.setPrototypeOf(n,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,f.prototype.create),n}var f=(h.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?function(e,r){return e.replace(v,function(e,t){var n=r[t];return null!=n?n.toString():"<"+t+"?>"})}(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",u=new d(i,a),c=0,f=Object.keys(r);c<f.length;c++){var l=f[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=r[l])}return u},h);function h(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var v=/\{\$([^}]+)}/g,g=(b.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},b.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},b.prototype.setServiceProps=function(e){return this.serviceProps=e,this},b);function b(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function y(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function w(n,r,i){var o,e=new Promise(function(e,t){y(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function m(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function k(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return w(this[n],e,arguments)})})}function S(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function I(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return function(e,t,n){var r=w(e,t,n);return r.then(function(e){if(e)return new C(e,r.request)})}(this[n],e,arguments)})})}function T(e){this._index=e}function C(e,t){this._cursor=e,this._request=t}function _(e){this._store=e}function P(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function j(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new P(n)}function D(e){this._db=e}function E(e,t,n){var r=w(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new j(i.result,e.oldVersion,i.transaction))}),r.then(function(e){return new D(e)})}function x(e){return w(indexedDB,"deleteDatabase",[e])}m(T,"_index",["name","keyPath","multiEntry","unique"]),k(T,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),I(T,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(C,"_cursor",["direction","key","primaryKey","value"]),k(C,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(C.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),y(t._request).then(function(e){if(e)return new C(e,t._request)})})})}),_.prototype.createIndex=function(){return new T(this._store(){return new T(this._store.index.apply(this._store,arguments))},m(_,"_store",["name","keyPath","indexNames","autoIncrement"]),k(_,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),I(_,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),S(_,"_store",IDBObjectStore,["deleteIndex"]),P.prototype.objectStore=function(){return new _(this._tx.objectStore.apply(this._tx,arguments))},m(P,"_tx",["objectStoreNames","mode"]),S(P,"_tx",IDBTransaction,["abort"]),j.prototype.createObjectStore=function(){return new _(this._db.createObjectStore.apply(this._db,arguments))},m(j,"_db",["name","version","objectStoreNames"]),S(j,"_db",IDBDatabase,["deleteObjectStore","close"]),D.prototype.transaction=function(){return new P(this._db.transaction.apply(this._db,arguments))},m(D,"_db",["name","version","objectStoreNames"]),S(D,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[_,T].forEach(function(e){i in e.prototype&&(e.prototype[i.replace("open","iterate")]=function(){var e=function(e){return Array.prototype.slice.call(e)}(arguments),t=e[e.length-1],n=this._store||this._index,r=n[i].apply(n,e.slice(0,-1));r.onsuccess=function(){t(r.result)}})})}),[T,_].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var K,O="0.4.1",N=1e4,M="w:"+O,A="FIS_v2",q="https://firebaseinstallations.googleapis.com/v1",B=36e5,L=((K={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',K["not-registered"]="Firebase Installation is not registered.",K["installation-not-found"]="Firebase Installation not found.",K["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',K["app-offline"]="Could not process request. Application offline.",K["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",K),R=new f("installations","Installations",L);function V(e){return e instanceof d&&e.code.includes("request-failed")}function W(e){var t=e.projectId;return q+"/projects/"+t+"/installations"}function F(e){return{token:e.token,requestStatus:2,expiresIn:function(e){return Number(e.replace("s","000"))}(e.expiresIn),creationTime:Date.now()}}function H(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,R.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function U(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $(e,t){var n=t.refreshToken,r=U(e);return r.append("Authorization",function(e){return A+" "+e}(n)),r}function G(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function z(t){return new Promise(function(e){setTimeout(e,t)})}var J=/^[cdef][\w-]{21}$/,Y="";function Z(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return function(e){return btoa(String.fromCharCode.apply(String,i(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22)}(e);return J.test(t)?t:Y}catch(e){return Y}}function Q(e){return e.appName+"!"+e.appId}var X=new Map;function ee(e,t){var n=Q(e);te(n,t),function(e,t){var n=re();n&&n.postMessage({key:e,fid:t});ie()}(n,t)}function te(e,t){var n,r,i=X.get(e);if(i)try{for(var o=c(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var ne=null;function re(){return!ne&&"BroadcastChannel"in self&&((ne=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){te(e.data.key,e.data.fid)}),ne}function ie(){0===X.size&&ne&&(ne.close(),ne=null)}var oe,se,ae="firebase-installations-database",ue=1,ce="firebase-installations-store",fe=null;function le(){return fe=fe||E(ae,ue,function(e){switch(e.oldVersion){case 0:e.createObjectStore(ce)}})}function pe(s,a){return l(this,void 0,void 0,function(){var t,n,r,i,o;return p(this,function(e){switch(e.label){case 0:return t=Q(s),[4,le()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),[4,i.put(a,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===a.fid||ee(s,a.fid),[2,a]}})})}function de(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Q(i),[4,le()];case 1:return n=e.sent(),[4,(r=n.transaction(ce,"readwrite")).objectStore(ce).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function he(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return t=Q(a),[4,le()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),void 0!==(s=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(s,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!s||o&&o.fid===s.fid||ee(a,s.fid),[2,s]}})})}function ve(i){return l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(i,function(e){var t=function(e){return be(e||{fid:Z(),registrationStatus:0})}(e),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return[4,ge(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,ge(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,ve(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(R.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(a,e){var u=e.fid;return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return t=W(a),n=U(a),r={fid:u,authVersion:A,appId:a.appId,sdkVersion:M},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,G(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return s=e.sent(),[2,{fid:s.fid||u,registrationStatus:2,refreshToken:s.refreshToken,authToken:F(s.authToken)}];case 3:return[4,H("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,pe(r,t)];case 2:return V(n=e.sent())&&409===n.serverCode?[4,de(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,pe(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==Y?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function ge(e){return he(e,function(e){if(!e)throw R.create("installation-not-found");return be(e)})}function be(e){return function(e){return 1===e.registrationStatus&&e.registrationTime+N<Date.now()}(e)?{fid:e.fid,registrationStatus:0}:e}function ye(e,u){var c=e.appConfig,f=e.platformLoggerProvider;return l(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return W(e)+"/"+n+"/authTokens:generate"}(c,u),n=$(c,u),(r=f.getImmediate({optional:!0}))&&n.append("x-firebase-client",r.getPlatformInfoString()),i={installation:{sdkVersion:M}},o={method:"POST",headers:n,body:JSON.stringify(i)},[4,G(function(){return fetch(t,o)})];case 1:return(s=e.sent()).ok?[4,s.json()]:[3,3];case 2:return a=e.sent(),[2,F(a)];case 3:return[4,H("Generate Auth Token",s)];case 4:throw e.sent()}})})}function we(i,o){return void 0===o&&(o=!1),l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(i.appConfig,function(e){if(!ke(e))throw R.create("not-registered");var t=e.authToken;if(!o&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+B}(e)}(t))return e;if(1===t.requestStatus)return r=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,me(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,me(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,we(r,i)]:[2,n]}})})}(i,o),e;if(!navigator.onLine)throw R.create("app-offline");var n=function(e){var t={requestStatus:1,requestTime:Date.now()};return u(u({},e),{authToken:t})}(e);return r=function(i,o){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,ye(i,o)];case 1:return t=e.sent(),r=u(u({},o),{authToken:t}),[4,pe(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!V(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,de(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=u(u({},o),{authToken:{requestStatus:0}}),[4,pe(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(i,n),n})];case 1:return t=e.sent(),r?[4,r]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function me(e){return he(e,function(e){if(!ke(e))throw R.create("not-registered");return function(e){return 1===e.requestStatus&&e.requestTime+N<Date.now()}(e.authToken)?u(u({},e),{authToken:{requestStatus:0}}):e})}function ke(e){return void 0!==e&&2===e.registrationStatus}function Se(t,n){return void 0===n&&(n=!1),l(this,void 0,void 0,function(){return p(this,function(e){switch(e.label){case 0:return[4,function(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,ve(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,we(t,n)];case 2:return[2,e.sent().token]}})})}function Ie(o,s){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return W(e)+"/"+n}(o,s),n=$(o,s),r={method:"DELETE",headers:n},[4,G(function(){return fetch(t,r)})];case 1:return(i=e.sent()).ok?[3,3]:[4,H("Delete Installation",i)];case 2:throw e.sent();case 3:return[2]}})})}function Te(e,t){var n=e.appConfig;return function(e,t){re();var n=Q(e),r=X.get(n);r||(r=new Set,X.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=Q(e),r=X.get(n);r&&(r.delete(t),0===r.size&&X.delete(n),ie())}(n,t)}}function Ce(e){return R.create("missing-app-config-values",{valueName:e})}(oe=ft).INTERNAL.registerComponent(new g("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Ce("App Configuration");if(!e.name)throw Ce("App Name");try{for(var r=c(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Ce(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return[4,ve(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):we(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return Se(n,e)},delete:function(){return function(r){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw R.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw R.create("app-offline");case 3:return[4,Ie(t,n)];case 4:return e.sent(),[4,de(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return Te(n,e)}}},"PUBLIC")),oe.registerVersion("@firebase/installations",O);var _e=((se={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',se["only-available-in-window"]="This method is available in a Window context.",se["only-available-in-sw"]="This method is available in a service worker context.",se["permission-default"]="The notification permission was not granted and dismissed instead.",se["permission-blocked"]="The notification permission was not granted and blocked instead.",se["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",se["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",se["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",se["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",se["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",se["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",se["token-update-no-token"]="FCM returned no token when updating the user to push.",se["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",se["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",se["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",se["invalid-vapid-key"]="The public VAPID key must be a string.",se["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",se),Pe=new f("messaging","Messaging",_e);function je(e){return Pe.create("missing-app-config-values",{valueName:e})}function De(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,i(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}var Ee="fcm_token_details_db",xe=5,Ke="fcm_token_object_Store";function Oe(a){return l(this,void 0,void 0,function(){var t,s,n=this;return p(this,function(e){switch(e.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=e.sent(),!t.map(function(e){return e.name}).includes(Ee))return[2,null];e.label=2;case 2:return s=null,[4,E(Ee,xe,function(o){return l(n,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return o.oldVersion<2?[2]:o.objectStoreNames.contains(Ke)?[4,(t=o.transaction.objectStore(Ke)).index("fcmSenderId").get(a)]:[2];case 1:return n=e.sent(),[4,t.clear()];case 2:if(e.sent(),!n)return[2];if(2===o.oldVersion){if(!(r=n).auth||!r.p256dh||!r.endpoint)return[2];s={token:r.fcmToken,createTime:(i=r.createTime,null!=i?i:Date.now()),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:De(r.vapidKey)}}}else 3===o.oldVersion?s={token:(r=n).fcmToken,createTime:r.createTime,subscriptionOptions:{auth:De(r.auth),p256dh:De(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:De(r.vapidKey)}}:4===o.oldVersion&&(s={token:(r=n).fcmToken,createTime:r.createTime,subscriptionOptions:{auth:De(r.auth),p256dh:De(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:De(r.vapidKey)}});return[2]}})})})];case 3:return e.sent().close(),[4,x(Ee)];case 4:return e.sent(),[4,x("fcm_vapid_details_db")];case 5:return e.sent(),[4,x("undefined")];case 6:return e.sent(),[2,function(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(s)?s:null]}})})}var Ne="firebase-messaging-database",Me=1,Ae="firebase-messaging-store",qe=null;function Be(){return qe=qe||E(Ne,Me,function(e){switch(e.oldVersion){case 0:e.createObjectStore(Ae)}})}function Le(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return[4,e.sent().transaction(Ae).objectStore(Ae).get(t)];case 2:return(n=e.sent())?[2,n]:[3,3];case 3:return[4,Oe(i.appConfig.senderId)];case 4:return(r=e.sent())?[4,Re(i,r)]:[3,6];case 5:return e.sent(),[2,r];case 6:return[2]}})})}function Re(i,o){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).put(o,t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2,o]}})})}function Ve(e){return e.appConfig.appId}var We="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Fe="https://fcmregistrations.googleapis.com/v1",He="FCM_MSG",Ue="google.c.a.c_id";function $e(s,a){return l(this,void 0,void 0,function(){var t,n,r,i,o;return p(this,function(e){switch(e.label){case 0:return[4,ze(s)];case 1:t=e.sent(),n={method:"DELETE",headers:t},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(s.appConfig)+"/"+a,n)];case 3:return[4,e.sent().json()];case 4:if((r=e.sent()).error)throw i=r.error.message,Pe.create("token-unsubscribe-failed",{errorInfo:i});return[3,6];case 5:throw o=e.sent(),Pe.create("token-unsubscribe-failed",{errorInfo:o});case 6:return[2]}})})}function Ge(e){var t=e.projectId;return Fe+"/projects/"+t+"/registrations"}function ze(e){var n=e.appConfig,r=e.installations;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,r.getToken()];case 1:return t=e.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})]}})})}function Je(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==We&&(o.web.applicationPubKey=i),o}var Ye,Ze;function Qe(o,s,a){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[4,function(n,r){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,n.pushManager.getSubscription()];case 1:return(t=e.sent())?[2,t]:[2,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:r})]}})})}(s,a)];case 1:return t=e.sent(),[4,Le(o)];case 2:return n=e.sent(),r={vapidKey:a,swScope:s.scope,endpoint:t.endpoint,auth:De(t.getKey("auth")),p256dh:De(t.getKey("p256dh"))},n?[3,3]:[2,et(o,r)];case 3:if(function(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}(n.subscriptionOptions,r))return[3,8];e.label=4;case 4:return e.trys.push([4,6,,7]),[4,$e(o,n.token)];case 5:return e.sent(),[3,7];case 6:return i=e.sent(),console.warn(i),[3,7];case 7:return[2,et(o,r)];case 8:return Date.now()>=n.createTime+6048e5?[2,function(i,o,s){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,5]),[4,function(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u.subscriptionOptions),r={method:"PATCH",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig)+"/"+u.token,r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-update-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-update-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-update-no-token");return[2,i.token]}})})}(o,i)];case 1:return t=e.sent(),n=u({token:t,createTime:Date.now()},i),[4,Re(o,n)];case 2:return e.sent(),[2,t];case 3:return r=e.sent(),[4,Xe(o,s)];case 4:throw e.sent(),r;case 5:return[2]}})})}({token:n.token,createTime:Date.now(),subscriptionOptions:r},o,s)]:[2,n.token];case 9:return[2]}})})}function Xe(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,Le(r)];case 1:return(t=e.sent())?[4,$e(r,t.token)]:[3,4];case 2:return e.sent(),[4,function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}(r)];case 3:e.sent(),e.label=4;case 4:return[4,i.pushManager.getSubscription()];case 5:return(n=e.sent())?[2,n.unsubscribe()]:[2,!0]}})})}function et(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,function(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u),r={method:"POST",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig),r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-subscribe-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-subscribe-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-subscribe-no-token");return[2,i.token]}})})}(r,i)];case 1:return t=e.sent(),n={token:t,createTime:Date.now(),subscriptionOptions:i},[4,Re(r,n)];case 2:return e.sent(),[2,n.token]}})})}function tt(e){return"object"==typeof e&&!!e&&Ue in e}(Ze=Ye=Ye||{}).PUSH_RECEIVED="push-received",Ze.NOTIFICATION_CLICKED="notification-clicked";var nt=(Object.defineProperty(rt.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),rt.prototype.getToken=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return this.vapidKey||(this.vapidKey=We),[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:e.sent(),e.label=3;case 3:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[2,Qe(this.firebaseDependencies,t,this.vapidKey)]}})})},rt.prototype.deleteToken=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),[2,Xe(this.firebaseDependencies,t)]}})})},rt.prototype.requestPermission=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(t=e.sent()))return[2];throw"denied"===t?Pe.create("permission-blocked"):Pe.create("permission-default")}})})},rt.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},rt.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw Pe.create("invalid-sw-registration");if(this.swRegistration)throw Pe.create("use-sw-after-get-token");this.swRegistration=e},rt.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},rt.prototype.setBackgroundMessageHandler=function(){throw Pe.create("only-available-in-sw")},rt.prototype.onTokenRefresh=function(){return function(){}},rt.prototype.getServiceWorkerRegistration=function(){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:if(this.swRegistration)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),t=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return t.swRegistration=e.sent(),[3,4];case 3:throw n=e.sent(),Pe.create("failed-service-worker-registration",{browserErrorMessage:n.message});case 4:return[2,this.swRegistration]}})})},rt.prototype.messageEventListener=function(o){var s;return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return(null===(s=o.data)||void 0===s?void 0:s.firebaseMessaging)?(t=o.data.firebaseMessaging,n=t.type,r=t.payload,this.onMessageCallback&&n===Ye.PUSH_RECEIVED&&this.onMessageCallback(r),tt(i=r.data)&&"1"===i["google.c.a.e"]?[4,this.logEvent(n,i)]:[3,2]):[2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},rt.prototype.logEvent=function(n,r){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return t=function(e){switch(e){case Ye.NOTIFICATION_CLICKED:return"notification_open";case Ye.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(n),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return e.sent().logEvent(t,{message_id:r[Ue],message_name:r["google.c.a.c_l"],message_time:r["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})},rt);function rt(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",function(e){return t.messageEventListener(e)})}var it=(Object.defineProperty(ot.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),ot.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw Pe.create("invalid-bg-handler");this.bgMessageHandler=e},ot.prototype.getToken=function(){var n,r,i;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return this.vapidKey?[3,2]:[4,Le(this.firebaseDependencies)];case 1:t=e.sent(),this.vapidKey=null!=(i=null===(r=null===(n=t)||void 0===n?void 0:n.subscriptionOptions)||void 0===r?void 0:r.vapidKey)?i:We,e.label=2;case 2:return[2,Qe(this.firebaseDependencies,self.registration,this.vapidKey)]}})})},ot.prototype.deleteToken=function(){return Xe(this.firebaseDependencies,self.registration)},ot.prototype.requestPermission=function(){throw Pe.create("only-available-in-window")},ot.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},ot.prototype.useServiceWorker=function(){throw Pe.create("only-available-in-window")},ot.prototype.onMessage=function(){throw Pe.create("only-available-in-window")},ot.prototype.onTokenRefresh=function(){throw Pe.create("only-available-in-window")},ot.prototype.onPush=function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(i))?[4,st()]:[2];case 1:return function(e){return e.some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})}(n=e.sent())?[2,function(e,t){var n,r,i=at(Ye.PUSH_RECEIVED,t);try{for(var o=c(e),s=o.next();!s.done;s=o.next())s.value.postMessage(i)}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}(n,t)]:(r=function(e){var t;if(e&&"object"==typeof e.notification){var n=u({},e.notification);return n.data=u(u({},e.notification.data),((t={})[He]=e,t)),n}}(t))?[4,function(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}(r)]:[3,3];case 2:return e.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:e.sent(),e.label=5;case 5:return[2]}})})},ot.prototype.onSubChange=function(n){var r,i,o;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return n.newSubscription?[3,2]:[4,Xe(this.firebaseDependencies,self.registration)];case 1:return e.sent(),[2];case 2:return[4,Le(this.firebaseDependencies)];case 3:return t=e.sent(),[4,Xe(this.firebaseDependencies,self.registration)];case 4:return e.sent(),[4,Qe(this.firebaseDependencies,self.registration,(o=null===(i=null===(r=t)||void 0===r?void 0:r.subscriptionOptions)||void 0===i?void 0:i.vapidKey,null!=o?o:We))];case 5:return e.sent(),[2]}})})},ot.prototype.onNotificationClick=function(o){var s,a;return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return(t=null===(a=null===(s=o.notification)||void 0===s?void 0:s.data)||void 0===a?void 0:a[He])?o.action?[2]:(o.stopImmediatePropagation(),o.notification.close(),(n=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(tt(e.data)?self.location.origin:null)}(t))?[4,function(u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return p(this,function(e){switch(e.label){case 0:return t=new URL(u,self.location.href).href,[4,st()];case 1:n=e.sent();try{for(r=c(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).href===t)return[2,o]}catch(e){s={error:e}}finally{try{i&&!i.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}})})}(n)]:[2]):[2];case 1:return(r=e.sent())?[3,4]:[4,self.clients.openWindow(n)];case 2:return r=e.sent(),[4,function(t){return new Promise(function(e){setTimeout(e,t)})}(3e3)];case 3:return e.sent(),[3,6];case 4:return[4,r.focus()];case 5:r=e.sent(),e.label=6;case 6:return r?(i=at(Ye.NOTIFICATION_CLICKED,t),[2,r.postMessage(i)]):[2]}})})},ot);function ot(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",function(e){e.waitUntil(t.onPush(e))}),self.addEventListener("pushsubscriptionchange",function(e){e.waitUntil(t.onSubChange(e))}),self.addEventListener("notificationclick",function(e){e.waitUntil(t.onNotificationClick(e))})}function st(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function at(e,t){return{firebaseMessaging:{type:e,payload:t}}}var ut={isSupported:ct};function ct(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}ft.INTERNAL.registerComponent(new g("messaging",function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw je("App Configuration Object");if(!e.name)throw je("App Name");var r=e.options;try{for(var i=c(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var s=o.value;if(!r[s])throw je(s)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!ct())throw Pe.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new it(n):new nt(n)},"PUBLIC").setServiceProps(ut))}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging.js.map
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   .widget-compact.widget-dynamic-title.sb-sc {padding: 0 24px 10px 24px;}
</style>
-->
<div class="view-more ta-r mb2">
<a class="view-more-link" href="/collections/5697/hypertension?fl_Categories=Hypertension&amp;fl_ContentType=Article&amp;f_SiteID=3">View more &gt;</a>
</div>


</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="4">
    <div class="widget-DynamicWidgetLayout widget-instance-Home_MainContentB1B0B0B4">
        

<div class="dynamic-widget-module flex-container" data-count="1">

        <div class="dynamic-widget-inner-wrap" data-display-order="0">
    <div class="widget-SelectableContentListCompact widget-instance-Home_MainContentB1B0B0B4Home_MainUberContent3">
        


        <div class="mobile-version widget-dynamic-wrap">
                <div class="widget-compact widget-dynamic-title   sb-sc">
                    MORE FROM THE JAMA NETWORK
                </div>
                            <div class="widget-hairline-above  "></div>
                            <div class="heading-wrapper">
                        <div class="compact widget-dynamic-title  sb-pc">
                            Research and Review
                        </div>
                </div>

                <div class="widget-dynamic-entry-wrap  single-result-set">


                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814056">Early Home Visits and Health in Low-Income Mothers and Offspring</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 18, 2024</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814058">Racial Disparities in Nocturnal Hypertension and Blood Pressure Decreases</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Research Letter |</span>
            <span class="widget-dynamic-article-info">January 18, 2024</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2813853">Evaluation of a Best-Practice Advisory for Primary Aldosteronism Screening</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 8, 2024</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  remove-border">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2813067">Genetic Associations of Circulating Cardiovascular Proteins With Gestational Hypertension and Preeclampsia</a>
                <span class="widget-dynamic-journal-info">JAMA Cardiology |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 3, 2024</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                </div>
                <!-- /.widget-dynamic-entry-wrap -->
                    <div class="widget-hairline-below "></div>
        </div>

        <div class="mobile-version widget-dynamic-wrap">
                <div class="widget-compact widget-dynamic-title  element-mobile-version sb-sc">
                    MORE FROM THE JAMA NETWORK
                </div>
                            <div class="widget-hairline-above  element-mobile-version"></div>
                            <div class="heading-wrapper">
                        <div class="compact widget-dynamic-title  sb-pc">
                            Opinion
                        </div>
                </div>

                <div class="widget-dynamic-entry-wrap  single-result-set">


                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2813069">Precision Medicine for Hypertensive Disorders of Pregnancy—Are We There Yet?</a>
                <span class="widget-dynamic-journal-info">JAMA Cardiology |</span>
                <span class="widget-dynamic-article-info">Editor's Note |</span>
            <span class="widget-dynamic-article-info">January 3, 2024</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2812983">Food for Thought—Include Controls in Policy Evaluations</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Editor's Note |</span>
            <span class="widget-dynamic-article-info">December 26, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2812267">Hypertension Among Black Women—College-Educated But More at Risk?</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Invited Commentary |</span>
            <span class="widget-dynamic-article-info">November 22, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  remove-border">

                                
                                    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2807857">There Is No 1-Size-Fits-All to Blood Pressure Measurement—Cuff Size Matters</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Invited Commentary |</span>
            <span class="widget-dynamic-article-info">October 1, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                </div>
                <!-- /.widget-dynamic-entry-wrap -->
                    <div class="widget-hairline-below "></div>
        </div>
        <div class="desktop-version widget-dynamic-wrap">
                <div class="widget-compact widget-dynamic-title  sb-sc thm-col">
                    MORE FROM THE JAMA NETWORK
                </div>
                            <div class="widget-hairline-above "></div>
                            <div class="heading-wrapper">
                    <div class="compact widget-dynamic-title  sb-pc">
                        Research and Review
                    </div>
                    
                        <div class="compact widget-dynamic-title  sb-pc">
                            Opinion
                        </div>
                </div>

                <div class="compact widget-dynamic-entry-wrap  multi-result-set">


                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814056">Early Home Visits and Health in Low-Income Mothers and Offspring</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 18, 2024</span>
    </div>
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2813069">Precision Medicine for Hypertensive Disorders of Pregnancy—Are We There Yet?</a>
                <span class="widget-dynamic-journal-info">JAMA Cardiology |</span>
                <span class="widget-dynamic-article-info">Editor's Note |</span>
            <span class="widget-dynamic-article-info">January 3, 2024</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814058">Racial Disparities in Nocturnal Hypertension and Blood Pressure Decreases</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Research Letter |</span>
            <span class="widget-dynamic-article-info">January 18, 2024</span>
    </div>
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2812983">Food for Thought—Include Controls in Policy Evaluations</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Editor's Note |</span>
            <span class="widget-dynamic-article-info">December 26, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2813853">Evaluation of a Best-Practice Advisory for Primary Aldosteronism Screening</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 8, 2024</span>
    </div>
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2812267">Hypertension Among Black Women—College-Educated But More at Risk?</a>
                <span class="widget-dynamic-journal-info">JAMA Network Open |</span>
                <span class="widget-dynamic-article-info">Invited Commentary |</span>
            <span class="widget-dynamic-article-info">November 22, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  remove-border">
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2813067">Genetic Associations of Circulating Cardiovascular Proteins With Gestational Hypertension and Preeclampsia</a>
                <span class="widget-dynamic-journal-info">JAMA Cardiology |</span>
                <span class="widget-dynamic-article-info">Original Investigation |</span>
            <span class="widget-dynamic-article-info">January 3, 2024</span>
    </div>
    <div class="resource-info-wrapper sb-border-sc">
        
                <a class="widget-dynamic-journal-title" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2807857">There Is No 1-Size-Fits-All to Blood Pressure Measurement—Cuff Size Matters</a>
                <span class="widget-dynamic-journal-info">JAMA Internal Medicine |</span>
                <span class="widget-dynamic-article-info">Invited Commentary |</span>
            <span class="widget-dynamic-article-info">October 1, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>

                </div>
                <!-- /.widget-dynamic-entry-wrap -->
                    <div class="widget-hairline-below "></div>
        </div>




 
    </div>

        </div>
</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="5">
    <div class="widget-DynamicWidgetLayout widget-instance-Home_MainContentB1B0B0B5">
        

<div class="dynamic-widget-module " data-count="1">

        <div class="dynamic-widget-inner-wrap" data-display-order="0">
    <div class="widget-SelfServeContent widget-instance-hypertension_Network_More_Link">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="Network_More_Link" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<div class="ta-r mb2">
<a class="view-more-link" href="/collections/5697/hypertension?fl_Categories=Hypertension&amp;fl_ContentType=Article&amp;f_SiteID=15AND16AND214AND192AND17AND12AND20AND19AND223AND18AND14AND159AND193AND261">View more &gt;</a>
</div>


</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="6">
    <div class="widget-DynamicWidgetLayout widget-instance-Home_MainContentB1B0B0B6">
        

<div class="dynamic-widget-module flex-container" data-count="1">

        <div class="dynamic-widget-inner-wrap" data-display-order="0">
    <div class="widget-DynamicWidgetLayout widget-instance-Home_MainContentB1B0B0B6B0">
        

<div class="dynamic-widget-module " data-count="1">

        <div class="dynamic-widget-inner-wrap" data-display-order="0">
    <div class="widget-SelfServeContent widget-instance-hypertension_More_Articles">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="_More_Articles" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<h4>Landmark JAMA Hypertension Articles</h4>
<div class="channel-archive-items">
<!--
			<div class="channel-archive-item">
                <div class="row">
                    <div class="col-12">
                            <div class="sb-sc article-type">journalName</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7 col-archive-content">
                        <div>
                            <a class="sb-anchor-dark article-title" href="/journals/">articleTitle</a>
                        </div>
                        
                            <div class="sb-pc authors">
                                <span>
                                    articleAuthors
                                </span>
                            </div>
                        <div class="sb-tc date">
                            articleDate
                        </div>
                    </div>
                </div>
            </div>
                -->
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1905</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/464565">Chronic Arterial Hypertension</a>
</div>
<div class="sb-pc authors">
<span>
Henry Wireman Cook
</span>
</div>
<div class="sb-tc date">
January 28, 1905
</div>
</div>
<!--
                    <div class="col-5 col-archive-img">
                            <img class="archive-item-img" src="" alt="articleTitle">
                    </div>
                    -->
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1908</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/426957">Portable Blood-Pressure Apparatus</a>
</div>
<div class="sb-pc authors">
<span>
KH Beall and EM Mason
</span>
</div>
<div class="sb-tc date">
April 4, 1908
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1912</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/426957">A Study of the Causes of Death in 100 Patients With High Blood Pressure</a>
</div>
<div class="sb-pc authors">
<span>
Theodore C. Janeway
</span>
</div>
<div class="sb-tc date">
December 14, 1912
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1953</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/287368">Splanchnicectomy for Essential Hypertension: Results in 1,266 Cases</a>
</div>
<div class="sb-pc authors">
<span>
RH Smithwick and JE Thompson
</span>
</div>
<div class="sb-tc date">
August 15, 1953
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1967</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/336799">Effects of Treatment on Morbidity in Hypertension: Results in Patients With Diastolic Blood Pressures Averaging 115 Through 129 mm Hg</a>
</div>
<div class="sb-pc authors">
<span>
Cooperative Study
</span>
</div>
<div class="sb-tc date">
December 11, 1967
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1970</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/356138">Effects Morbidity of Treatment on in Hypertension II: Results in Patients With Diastolic Blood Pressure Averaging 90 Through 114 mm Hg</a>
</div>
<div class="sb-pc authors">
<span>
Veterans Administration Cooperative Study Group on Antihypertensive Agents
</span>
</div>
<div class="sb-tc date">
August 17, 1970
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1979</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/367742">Five-Year Findings of the Hypertension Detection and Follow-up Program I: Reduction in Mortality of Persons With High Blood Pressure, Including Mild Hypertension</a>
</div>
<div class="sb-pc authors">
<span>
Hypertension Detection and Follow-up Program Cooperative Group
</span>
</div>
<div class="sb-tc date">
December 7, 1979
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1991</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/386293">Prevention of Stroke by Antihypertensive Drug Treatment in Older Persons With Isolated Systolic Hypertension: Final Results of the Systolic Hypertension in the Elderly Program (SHEP)</a>
</div>
<div class="sb-pc authors">
<span>
SHEP Cooperative Research Group
</span>
</div>
<div class="sb-tc date">
June 26, 1991
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">1993</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/407848">Treatment of Mild Hypertension Study: Final Results</a>
</div>
<div class="sb-pc authors">
<span>
JD Neaton and Coauthors
</span>
</div>
<div class="sb-tc date">
August 11, 1993
</div>
</div>
</div>
</div>
<div class="channel-archive-item">
<div class="row">
<div class="col-12">
<div class="sb-sc article-type">2002</div>
</div>
</div>
<div class="row">
<div class="col-7 col-archive-content">
<div>
<a class="sb-anchor-dark article-title" href="/journals/jama/fullarticle/195626">Major Outcomes in High-Risk Hypertensive Patients Randomized to Angiotensin-Converting Enzyme Inhibitor or Calcium Channel Blocker vs Diuretic: The Antihypertensive and Lipid-Lowering Treatment to Prevent Heart Attack Trial (ALLHAT)</a>
</div>
<div class="sb-pc authors">
<span>
The ALLHAT Officers and Coordinators for the ALLHAT Collaborative Research Group
</span>
</div>
<div class="sb-tc date">
December 18, 2002
</div>
</div>
</div>
</div>
</div>


</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="1">
    <div class="widget-DynamicWidgetLayout widget-instance-Home_MainContentB1B0B1">
        

<div class="dynamic-widget-module home-short-col sidebar journal-sidebar" data-count="7">

        <div class="dynamic-widget-inner-wrap" data-display-order="0">
    <div class="widget-WidgetLoader widget-instance-Home_MainContentB1B0B1Right_ConfigurableAd_Singlebox">
        
    <div class="SCM-SharedWidgets-AsyncAdLoader" data-url="/AMA/AdTag/Home_MainContentB1B0B1Right_ConfigurableAd_Singlebox" data-params="{&quot;parameters&quot;:{&quot;siteName&quot;:&quot;hypertension&quot;,&quot;siteId&quot;:307,&quot;journalId&quot;:217,&quot;adDisplay&quot;:14,&quot;adSection&quot;:&quot;home&quot;,&quot;adPosition&quot;:&quot;mid&quot;,&quot;fromGoogle&quot;:false},&quot;dynamicParameters&quot;:{&quot;localParams&quot;:&quot;[REPLACE_WITH_LOCAL]&quot;}}"></div>
 
    </div>
    <div class="widget-ConfigurableAd widget-instance-Home_MainContentB1B0B1Right_ConfigurableAd_Singlebox">
         
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="1">
    <div class="widget-SelfServeContent widget-instance-hypertension_MainRightRail_RRAd1">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="MainRightRail_RRAd1" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<!-- <div class="adlabel">
Advertisement
</div>
<div class="adplaceholdeSS2right">
<img alt="" src="https://cdn.jamanetwork.com/ImageLibrary/hypertension/300x250.jpg?versionId=69184" class="filter-image" />
</div>
<style>
    .adlabel {
    font-size:11px;
    text-align: center;
    }
    img.filter-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    .adplaceholdeSS2right {
    padding-bottom: 20px;
    }
</style> -->


</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="2">
    <div class="widget-SelfServeContent widget-instance-hypertension_Home_SS3">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="Home_SS3" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<div class="id-offset channel-jumps" id="multimedia"> </div>
<!-- hypertension_Home_SS3 -->


</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="3">
    <div class="widget-SelectableContentListCompact widget-instance-Home_MainContentB1B0B1Home_MainUberContentRR2">
        


        <div class="mobile-version widget-dynamic-wrap">
                <div class="widget-compact widget-dynamic-title   sb-sc">
                    MULTIMEDIA
                </div>
                            <div class="widget-hairline-above  "></div>
            
                <div class="widget-dynamic-entry-wrap  single-result-set">


                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18841045">Effect of Dietary Sodium on Blood Pressure</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">December 19, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18815557">USPSTF Recommendation: Screening for Hypertensive Disorders of Pregnancy</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">September 19, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18776858">Ultrasound Renal Denervation in the Sham-Controlled RADIANCE II, RADIANCE-HTN SOLO, and RADIANCE-HTN TRIO Trials</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">April 26, 2023</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  remove-border">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18740426">Cardiovascular Complications During Delivery Among Patients With Systemic Lupus Erythematosus</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">November 29, 2022</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry item-Hidden ">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18736072">Treatment of Hypertension in 2022</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">November 8, 2022</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry item-Hidden remove-border">

                                
                                    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18729332">Longer-Term All-Cause and Cardiovascular Mortality With Intensive Blood Pressure Control</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio Author Interview</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">October 12, 2022</span>
    </div>

                              
                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                </div>
                <!-- /.widget-dynamic-entry-wrap -->
                    <div class="widget-hairline-below "></div>
                    <a class="see-more-link sb-anchor  " href="#" rel="nofollow">
                        <div class="compact widget-dynamic-browse sb-tc ">

                            <span class="browse-all-label">Expand</span>
                            <span class="icon-carrot_down"></span>

                        </div>
                    </a>
        </div>

        <div class="desktop-version widget-dynamic-wrap">
                <div class="widget-compact widget-dynamic-title  sb-sc thm-col">
                    MULTIMEDIA
                </div>
                            <div class="widget-hairline-above "></div>
            
                <div class="compact widget-dynamic-entry-wrap  ">


                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18841045">Effect of Dietary Sodium on Blood Pressure</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">December 19, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18815557">USPSTF Recommendation: Screening for Hypertensive Disorders of Pregnancy</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">September 19, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  ">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18776858">Ultrasound Renal Denervation in the Sham-Controlled RADIANCE II, RADIANCE-HTN SOLO, and RADIANCE-HTN TRIO Trials</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">April 26, 2023</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry  remove-border">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18740426">Cardiovascular Complications During Delivery Among Patients With Systemic Lupus Erythematosus</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">November 29, 2022</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry item-Hidden ">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18736072">Treatment of Hypertension in 2022</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">November 8, 2022</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>
                        <div class="row">
                            <div class="widget-dynamic-entry item-Hidden remove-border">
    <div class="resource-info-wrapper ">
        
            <a class="widget-dynamic-media-title" target="_blank" href="https://jamanetwork.com/learning/audio-player/18729332">Longer-Term All-Cause and Cardiovascular Mortality With Intensive Blood Pressure Control</a>
                <span class="widget-dynamic-article-info multimedia-label sb-sc thm-col">Audio Author Interview</span><span class="multimedia-label-pipe"> |</span>
            <span class="widget-dynamic-article-info">October 12, 2022</span>
    </div>

                            </div><!-- /.widget-dynamic-entry -->
                        </div>

                </div>
                <!-- /.widget-dynamic-entry-wrap -->
                    <div class="widget-hairline-below "></div>
                    <a class="see-more-link sb-anchor " href="#" rel="nofollow">
                        <div class="compact widget-dynamic-browse sb-tc ">

                            <span class="browse-all-label">Expand</span>
                            <span class="icon-carrot_down"></span>

                        </div>
                    </a>
        </div>




 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="4">
    <div class="widget-SelfServeContent widget-instance-hypertension_MainRightRail_SS2">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="MainRightRail_SS2" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<!--
<style type="text/css">
    .widget-SelfServeContent.widget-instance-hypertension_MainRightRail_SS2 {
    margin-bottom: 2em;
    }
</style>
<a href="#">
<img alt="" class="content-img lazy" data-original="https://cdn.jamanetwork.com/ImageLibrary/channels/hypertension/hypertension-placeholder-02.png?versionId=71884" />
</a>
<div class="jn-self-serve-label">
hypertension_MainRightRail_SS2
</div>
-->


</div>

 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="5">
    <div class="widget-EmailListSignUp widget-instance-Home_MainContentB1B0B1Channel_EmailListSignUp">
        <div class="email-signup">
    
    <div class="email-signup--text sb-pc">Get the latest from JAMA Network</div>
    <div class="email-signup--input-wrap is-b">
        <input type="text" name="email" class="email-signup--input" placeholder="Email address" title="Email address" />
        <a rel="nofollow" href="javascript:;" class="email-signup--submit sb-sc btn">Sign Up</a>
    </div>
    <div class="email-signup--link"> <a class="email-signup--privacy" href="/pages/privacy-policy">Privacy Policy</a> | <a class="email-signup--terms" href="/pages/terms-of-use">Terms of Use</a></div>
    <div class="email-signup--user-message"></div>
</div> 
    </div>

        </div>
        <div class="dynamic-widget-inner-wrap" data-display-order="6">
    <div class="widget-SelfServeContent widget-instance-hypertension_RightRail_Socials">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="RightRail_Socials" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<link rel="stylesheet" href="https://cdn.jamanetwork.com/data/CSSUploads/jamanetwork-selfserve-maintenance.css?versionId=73976">
<style type="text/css">
    #load-instagram-image { background: url(https://cdn.jamanetwork.com/ImageLibrary/JamaNetwork/social/instagram-icon-fill.png) no-repeat -9999px -9999px; }
</style>
<div class="hp-rightRail-socials">
<span>Follow us</span>
<a target="_blank" href="https://www.facebook.com/JAMAJournal/" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b facebook"></a>
<a target="_blank" href="https://twitter.com/JAMA_current" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b twitter"></a>
<a target="_blank" href="https://www.instagram.com/jamanetwork/?hl=en" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="iconsocial instagram"></a>
<a target="_blank" href="https://www.linkedin.com/company/jamanetwork/" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b linked-in" style="margin-left: 2px;"></a>
<a target="_blank" href="https://www.youtube.com/jamanetwork" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b you-tube"></a>
<a target="_blank" href="https://www.pinterest.com/jamanetwork/" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b pinterest"></a>
<a target="_blank" href="/rss/site_3/67.xml" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" class="social-link is-b rss"></a>
</div>
<div id="load-instagram-image">&nbsp;</div>
<!--
<h6>hypertension_RightRail_Socials</h6>
-->


</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
</div>

 
    </div>

        </div>
</div>

 
    </div>

        
    </div>
    
    </section>


    <section id="secFooterControl" class="master-footer">
        

        <script>
            var App = App || {};

            function scmByClass(className) {
                return document.getElementsByClassName(className);
            }

            function scmById(id) {
                return document.getElementById(id);
            }

            function scmquery(selector) {
                return document.querySelector(selector);
            }

            function queryAll(selector) {
                return document.querySelectorAll(selector);
            }

            function isTrueString(string) {
                if (typeof string === 'string') {
                    return string.toLowerCase() === 'true';
                }

                return undefined;
            }

            function updateViewportDimensions() {
                var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
                return { width: x, height: y };
            }

            var viewport = updateViewportDimensions();

            var debounce = function (func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this, args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            };

            (function (App) {
                App.mobileUpperBreakpoint = 767;
                App.mobileAltBreakpoint = 640;
                App.mobileMinBreakpoint = 547;
                App.tabletUpperBreakpoint = 1023;

                function setVariables() {
                    viewport = updateViewportDimensions();
                    App.isMobile = (viewport.width <= App.mobileUpperBreakpoint);
                    App.isMobileAlt = (viewport.width <= App.mobileAltBreakpoint);
                    App.isTablet = (viewport.width > App.mobileUpperBreakpoint && viewport.width <= App.tabletUpperBreakpoint);
                    App.isTabletDown = (viewport.width <= App.tabletUpperBreakpoint);
                    App.isDesktop = (viewport.width > App.tabletUpperBreakpoint);
                    App.activeViewport = App.isMobile ? 'small' : App.isTablet ? 'med' : 'large';
                }

                setVariables();

                App.cachedViewport = App.isMobile ? 'small' : App.isTablet ? 'med' : 'large';
                App.isAnyArticle = !!(scmByClass('widget-ArticleFullView').length || scmByClass('pg_abstract').length
                    || scmByClass('widget-MagazineView').length || scmByClass('widget-ChannelsMagazineView').length);
                App.isSplitScreen = !!scmByClass('widget-ArticleFullView').length;
                App.isAbstract = !!scmByClass('pg_abstract').length;
                App.isMag = !!(scmByClass('widget-MagazineView').length);
                App.isChannel = !!(scmByClass('channel-site').length);
                App.isChannelMag = !!(scmByClass('widget-ChannelsMagazineView').length);
                App.isFreeArticle = !!(scmquery('.widget-ArticleTopInfo .free-access') ||
                                        scmquery('.widget-ArticleTopInfo .open-access') ||
                                        scmquery('.widget-ArticleTopInfo .icon-free') || 
                                        scmquery('.widget-ChannelsMagazineView .free-access'));
                App.isTollFreeAccess = false;
                App.isIssue = !!scmByClass('pg_issue').length || !!scmByClass('pg_newonline').length || !!scmByClass('pg_currentissue').length || !!scmByClass('pg_pastissues').length;
                App.isNewOnline = !!scmByClass('pg_newonline').length;
                App.isCurrentIssue = !!scmByClass('pg_currentissue').length;
                App.isPastIssues = !!scmByClass('pg_pastissues').length;
                App.isJournal = !!scmByClass('pg_journal').length;
                App.isNetworkHome = !!scmByClass('pg_index').length;
                App.isSearch = !!scmByClass('pg_searchresults').length;
                App.isAdvancedSearch = !!scmByClass('pg_advancedsearch').length;
                App.isPlayer= !!scmByClass('pg_multimediaplayer').length;
                App.isSelfServe = !!scmByClass('pg_sspage').length;
                App.isCmsPage = !!scmByClass('pg_cmspage').length; 
                App.isMyAccount = !!scmByClass('pg_myaccount').length;
                App.supportsFlexbox = !!scmByClass('flexbox').length;
                App.isCollection = !!scmByClass('pg_collection').length;
                App.isPaidUser = isTrueString(scmById('hfAppIsPaidUser').getAttribute('value'));
                App.isMember = isTrueString(scmById('hfAppIsMember').getAttribute('value'));
                App.isIndividual = isTrueString(scmById('hfAppIsIndividual').getAttribute('value'));
                App.hasAccess = isTrueString(scmById('hfAppHasAccess').getAttribute('value'));
                App.isReferredFromGoogle = isTrueString(scmById('hfAppIsReferredFromGoogle').getAttribute('value'));
                var subscribedTo = scmById('hfAppSubscribedTo').getAttribute('value');
                App.userSubscribedTo = subscribedTo ? subscribedTo.split(',') : undefined;
                App.isLucy = isTrueString(scmById('hfAppIsLucy').getAttribute('value'));
                App.currentJournalCount = 25;
                App.isChannelPage = !!(scmByClass('channels-page'));
                App.updateAppVariables = debounce(function () {
                    setVariables();
                }, 50, false);
            })(App);
        </script>
        

        
<div class="footer-ad-wrapper">
    <div id="BodyContent_Footer_divAds" class="footer-ad desktop-only">
        
            <div class="widget-WidgetLoader widget-instance-AMA_AdTag_AnchorboardAd_btf">
        
    <div class="SCM-SharedWidgets-AsyncAdLoader" data-url="/AMA/AdTag/AMA_AdTag_AnchorboardAd_btf" data-params="{&quot;parameters&quot;:{&quot;siteName&quot;:&quot;hypertension&quot;,&quot;siteId&quot;:307,&quot;journalId&quot;:217,&quot;adDisplay&quot;:11,&quot;adSection&quot;:&quot;home&quot;,&quot;adPosition&quot;:&quot;btf&quot;,&quot;fromGoogle&quot;:false},&quot;dynamicParameters&quot;:{&quot;localParams&quot;:&quot;[REPLACE_WITH_LOCAL]&quot;}}"></div>
 
    </div>
</div>
</div>

 
 <div class="ad-riser-wrap desktop-only">
     <div class="ad-riser--dismiss t-c">X</div>
         <div class="widget-WidgetLoader widget-instance-AMA_AdTag_Riser">
        
    <div class="SCM-SharedWidgets-AsyncAdLoader" data-url="/AMA/AdTag/AMA_AdTag_Riser" data-params="{&quot;parameters&quot;:{&quot;siteName&quot;:&quot;hypertension&quot;,&quot;siteId&quot;:307,&quot;journalId&quot;:217,&quot;adDisplay&quot;:12,&quot;adSection&quot;:&quot;home&quot;,&quot;adPosition&quot;:&quot;Riser&quot;,&quot;fromGoogle&quot;:false},&quot;dynamicParameters&quot;:{&quot;localParams&quot;:&quot;[REPLACE_WITH_LOCAL]&quot;}}"></div>
 
    </div>

 </div>


<div class="footer-wrap">
     <!-- channels set up -->
    <div class="btnTop">
        <a href="#top" class="icon-top">
            <span class="visually-hidden">Button To Top</span>
        </a>
    </div>
      
    <footer class="footer" id="footer">
        
        <div id="footer-microsite" class="footer-microsite">
            



    <input type="hidden" class="SelfServeContentId" value="Channel_Footer_Left" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<div class="footer-heading-wrap">
<h3 id="BodyContent_Footer_h3SiteName" class="footer-heading is-b footer-microsite-heading" data-mobile-tog-target=".footer-microsite-links-wrap">JAMA Network</h3>
</div>
<div class="footer-microsite-links-wrap">
<div class="footer-microsite-contents">
<h4 id="BodyContent_Footer_ContentHeader" class="footer-subheading">Content</h4>
<a href="/">Home</a>
<a href="https://sites.jamanetwork.com/audio/" target="_blank">Podcasts</a>
<a href="https://sites.jamanetwork.com/" target="_blank">Featured Content</a>
</div>
<div class="footer-network-other jn-ss-footer-border-top jn-ss-footer-border-bottom">
<a href="https://edhub.ama-assn.org/jn-learning" class="link-network-other is-b link-learning">JN Learning / CME</a>
<a href="https://store.jamanetwork.com" class="link-network-other is-b link-store" target="_blank">Store</a>
<a href="/pages/apps" class="link-network-other is-b link-mobile" target="_blank">Apps</a>
<a href="https://careers.jamanetwork.com/" class="link-network-other is-b link-jobs" target="_blank">Jobs</a>
<a href="/pages/resources-for-librarians" class="link-network-other is-b link-institutions-librarians" target="_blank">Institutions</a>
<a href="/pages/reprints-and-permissions" class="link-network-other is-b link-reprints-permissions" target="_blank">Reprints &amp; Permissions</a>
</div>
<div id="BodyContent_Footer_divSubscribe" class="footer-microsite-subscribe">
<div class="subscribe-meta">
<h4 class="subscribe-heading footer-subheading">Subscribe</h4>
<a href="https://store.jamanetwork.com/" class="subscribe-submit btn jn-ss-footer-button-gray">Go</a>
</div>
</div>
</div>
<link rel="stylesheet" href="https://cdn.jamanetwork.com/data/CSSUploads/jamanetwork-channels-unified.css?versionId=76124">
<!-- remove defaults link and inline CSS below to revert to previous version if necessary -->
<link rel="stylesheet" href="https://cdn.jamanetwork.com/data/CSSUploads/jamanetwork-channels-defaults.css?versionId=76124">
<style type="text/css">
    .widget-SelfServeContent.widget-instance-ai_Channel_Subheading {display:block;margin-bottom:34px;margin-top:-32px;}
    .channel-links .collapsible-list-header:after {content:"+";font-weight: 700;margin-left: -1px;padding: 0;}
    .channel-links .collapsible-list-header[aria-selected=true]:after {content: ":";font-size: 18px;font-weight: 700;margin-left:-0;padding: 0;top: -5px;}
    .channel-links  a.collapsible-list-header {color: #D71635;}
    .channel-links .collapsible-list .collapsible-list-target {margin-left:0;}
    .channel-links {}
    .channel-links ul {color:#D71635;display:flex;flex-direction:column;font-size:16px;font-weight:600;letter-spacing: -0.2px; list-style-type:none;margin:0 0 20px 0;text-transform: uppercase;}
    .channel-links ul li {margin-bottom:10px;}
    .channel-links ul li:last-of-type {margin-bottom:0;}
    .channel-links ul a {color:#5c5c5c;.3}
    .channel-links ul a.active-page {color:#D71635;}
    .channel-links p {font-weight:500;line-height:1.7;margin-bottom:0;}
    .channel-links .horizontal-list {display:none;}
    .channel-links .collapsible-list {display:block;}
    @media only screen and (min-width:600px) {
    }
    @media only screen and (min-width:768px) {
    .channel-links ul {flex-direction:row;flex-wrap:wrap;letter-spacing: -0.3px;}
    .channel-links ul.horizontal-list {font-size:14px;}
    .channel-links ul.horizontal-list a {font-size:14px;}
    .channel-links ul li {margin:0 10px 0 0;}
    .channel-links ul li:last-of-type {margin-right:0;}
    .channel-links .collapsible-list {display:none;}
    .channel-links .horizontal-list {display:flex;}
    }
    @media only screen and (min-width: 1024px) {
    .channel-links ul.horizontal-list {font-size:16px;}
    .channel-links ul.horizontal-list a {font-size:16px;}
    }
    @media only screen and (min-width:1025px) {
    }
    @media only screen and (min-width:1440px) {
    .channel-links ul li {margin-right:25px;}
    }
    .site-links-wrap a.site-link-channel {
    width: unset;
    padding: 5px 25px;
    }
    @media (min-width:768px) {
    .site-links-wrap a.site-link-channel {
    padding: 5px 35px;
    }
    }
    @media (min-width:900px) {
    .site-links-wrap a.site-link-channel {
    padding: 5px 50px;
    }
    }
    @media (min-width:1024px) {
    .site-links-wrap a.site-link-channel {
    padding: 5px 60px;
    }
    }
    @media (min-width:1301px) {
    .site-links-wrap a.site-link-channel {
    padding: 5px 75px;
    }
    }
</style>





        </div>

        
        <div id="footer-network" class="footer-network">
            



    <input type="hidden" class="SelfServeContentId" value="v2_Footer_Middle" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<style type="text/css">
    .footer-network-sites {width: 62.85542%;}
    .footer-network-info {width: 35.93976%}
    .jn-ss-subheading-mt {margin-top: 1.5em;}
    .jn-registered:after {content: "\00AE";font-size: 50%;vertical-align: top;}
    .jn-trademark:after {content: "\2122";font-size: 50%;vertical-align: top;}
</style>
<div class="footer-heading-wrap">
<h3 class="footer-heading is-b jn-registered" data-mobile-tog-target=".footer-network-links-wrap"><strong>JAMA</strong> Network</h3>
</div>
<div class="footer-network-links-wrap">
<div class="footer-network-sites">
<div class="internal">
<h4 id="BodyContent_Footer_JournalHeader" class="footer-subheading">Publications</h4>
<a href="/journals/jama">JAMA</a>
<a href="/journals/jamanetworkopen" target="_blank">JAMA Network Open</a>
<a href="/journals/jamacardiology">JAMA Cardiology</a>
<a href="/journals/jamadermatology">JAMA Dermatology</a>
<a href="/journals/jama-health-forum">JAMA Health Forum</a>
<a href="/journals/jamainternalmedicine">JAMA Internal Medicine</a>
<a href="/journals/jamaneurology">JAMA Neurology</a>
<a href="/journals/jamaoncology">JAMA Oncology</a>
<a href="/journals/jamaophthalmology">JAMA Ophthalmology</a>
<a href="/journals/jamaotolaryngology">JAMA Otolaryngology–Head &amp; Neck Surgery</a>
<a href="/journals/jamapediatrics">JAMA Pediatrics</a>
<a href="/journals/jamapsychiatry">JAMA Psychiatry</a>
<a href="/journals/jamasurgery">JAMA Surgery</a>
<a href="/journals/archneurpsyc">Archives of Neurology &amp; Psychiatry (1919-1959)</a>
</div>
<div class="external">
<h4 class="footer-subheading">Sites</h4>
<div id="BodyContent_Footer_ssFooterSiteMenu">
<div class="selfServe">
<a target="_blank" href="https://sites.jamanetwork.com/art-and-images-in-psychiatry/">Art and Images in Psychiatry</a>
<a target="_blank" href="/channels/ai">Artificial Intelligence (AI) Resource Center</a>
<a target="_blank" href="/journals/jama/pages/2023-most-viewed-jama">Best of the JAMA Network</a>
<a target="_blank" href="/channels/caring-for-the-critically-ill-patient">Caring for the Critically Ill Patient</a>
<a target="_blank" href="/journals/jama/pages/crosswords">Clinical Crosswords from JAMA</a>
<a target="_blank" href="/journals/jama/pages/coronavirus-alert">Coronavirus Resource Center</a>
<a target="_blank" href="https://ebm.jamanetwork.com/index.html">Evidence-Based Medicine: An Oral History</a>
<a target="_blank" href="/pages/fishbein-fellowship">Fishbein Fellowship</a>
<a target="_blank" href="/channels/genomics/">Genomics and Precision Health</a>
<a target="_blank" href="/channels/hypertension">Hypertension</a>
<a target="_blank" href="/channels/health-forum/archive">JAMA Forum Archive</a>
<a target="_blank" href="https://sites.jamanetwork.com/audio">JAMA Network Audio</a>
<a target="_blank" href="/pages/video">JAMA Network Video</a>
<a target="_blank" href="/pages/conferences">JAMA Network Conferences </a>
<a target="_blank" href="/journals/jamasurgery/pages/statistics-and-methods">JAMA Surgery Guide to Statistics and Methods</a>
<a target="_blank" href="/channels/medical-news">Medical News</a>
<a target="_blank" href="/channels/monkeypox">Mpox (Monkeypox)</a>
<a target="_blank" href="https://sites.jamanetwork.com/research-ethics/">Research Ethics</a>
<a target="_blank" href="/pages/collections">Topics and Collections</a>
<a target="_blank" href="/pages/visual-abstracts">Visual Abstracts</a>
<a target="_blank" href="/channels/war">War and Health</a>
<h4 class="footer-subheading jn-ss-subheading-mt">Featured Articles</h4>
<a href="/journals/jama/fullarticle/2799240">Antiretroviral Drugs for HIV Treatment and Prevention in Adults - 2022 IAS-USA Recommendations</a>
<a href="/journals/jama/fullarticle/2781397">CONSERVE 2021 Guidelines for Reporting Trials Modified for the COVID-19 Pandemic</a>
<a href="/journals/jama/fullarticle/2808296">Creation and Adoption of Large Language Models in&nbsp;Medicine</a>
<a href="/journals/jamaoncology/fullarticle/2787350">Global Burden of Cancer, 2010-2019</a>
<a href="/journals/jama/fullarticle/2797443">Global Burden of Long COVID</a>
<a href="/journals/jamadermatology/fullarticle/2790344">Global Burden of Melanoma</a>
<a href="/journals/jamadermatology/fullarticle/2787350">Global Burden of Skin Diseases, 1990-2017</a>
<a href="/journals/jamaneurology/fullarticle/2793874">Global Disparities in Parkinson Disease</a>
<a href="/journals/jama/fullarticle/2799547">Guidelines for Reporting Outcomes in Trial Protocols: The SPIRIT-Outcomes 2022 Extension</a>
<a href="/journals/jamapsychiatry/fullarticle/2799486">Mass Violence and the Complex Spectrum of Mental Illness and Mental Functioning</a>
<a href="/journals/jamapsychiatry/fullarticle/2793903">Neuropsychiatry Sequelae of COVID-19</a>
<a href="/journals/jamaneurology/fullarticle/2810313">A New Framework for Dementia Nomenclature</a>
<a href="/journals/jama/fullarticle/2800656">Organization and Performance of US Health Systems</a>
<a href="/journals/jama-health-forum/fullarticle/2791195">Pharmacy Benefit Managers: History, Business Practices, Economics, and Policy</a>
<a href="/journals/jama-health-forum/fullarticle/2791195">Promoting EDI in Genetics Research</a>
<a href="/journals/jamacardiology/fullarticle/2781972">PTSD and Cardiovascular Disease</a>
<a href="/journals/jama/fullarticle/2810754">Red Blood Cell Transfusion: 2023 AABB International Guidelines</a>
<a href="/journals/jamapediatrics/fullarticle/2797600">Reimagining Children’s Rights in the US</a>
<a href="/journals/jama/fullarticle/2794049">Spirituality in Serious Illness and Health</a>
<a href="/journals/jama/fullarticle/2796374">The US Medicaid Program: Coverage, Financing, Reforms, and Implications for Health Equity</a>
<h4 class="footer-subheading jn-ss-subheading-mt">USPSTF Recommendation Statements</h4>
<a href="/journals/jama/fullarticle/2779985">Screening for Colorectal Cancer</a>
<a href="/journals/jama/fullarticle/2779190">Screening for Hypertension</a>
<a href="/journals/jama/fullarticle/2777244">Screening for Lung Cancer</a>
<a href="/journals/jama/fullarticle/2796244">Screening for Prediabetes and Type 2 Diabetes In Children</a>
<a href="/journals/jama/fullarticle/2783414">Screening for Prediabetes and Type 2 Diabetes In Adults</a>
<a href="/journals/jama/fullarticle/2795521">Statins for Primary Prevention of Cardiovascular Disease</a>
<a href="/journals/jama/fullarticle/2793446">Vitamin and Mineral Supplements for Primary Prevention of of Cardiovascular Disease and Cancer</a>
<h4 class="footer-subheading jn-ss-subheading-mt">Blogs</h4>
<a target="_blank" href="https://amastyleinsider.com/">AMA Style Insider</a>
</div>
</div>
</div>
</div>
<div id="footer-network-info" class="footer-network-info">
<div class="information-for-links">
<h4 id="BodyContent_Footer_InfoHeader" class="footer-subheading">Information</h4>
<a href="/pages/for-authors">For Authors</a>
<a href="/pages/resources-for-librarians">For Institutions &amp; Librarians</a>
<a href="/pages/advertisers">For Advertisers</a>
<a href="/pages/subscription-agents">For Subscription Agents</a>
<a href="https://careers.jamanetwork.com/" target="_blank">For Employers &amp; Job Seekers</a>
<a href="https://media.jamanetwork.com" rel="nofollow" target="_blank">For the Media</a>
<a href="/pages/equity-diversity-inclusion">Equity, Diversity, Inclusion</a>
<a href="/pages/commenting-policy">Online Commenting Policy</a>
<a href="/pages/access-at-jama-network">Public Access and Open Access Policy</a>
<a href="/pages/offensive-content-statement">Statement on Potentially Offensive Content</a>
</div>
<div class="services-links">
<h4 id="BodyContent_Footer_JAMANetworkProductsHeader" class="footer-subheading">JAMA Network Products</h4>
<a href="http://www.amamanualofstyle.com/" class="footer-service-link" target="_blank">AMA Manual of Style</a>
<a href="https://jamaevidence.mhmedical.com/" class="footer-service-link" target="_blank"><span class="jn-registered">JAMAevidence</span></a>
<a href="http://www.peerreviewcongress.org/" class="footer-service-link" target="_blank">Peer Review Congress</a>
</div>
<div class="learning-links">
<h4 id="BodyContent_Footer_LearningHeader" class="footer-subheading">JN Learning</h4>
<a href="https://edhub.ama-assn.org/jn-learning">Home</a>
<a href="https://edhub.ama-assn.org/jn-learning/state-cme">State CME</a>
<a href="https://edhub.ama-assn.org/jn-learning/pages/clinical-challenge-courses">Clinical Challenge CME</a>
<a href="https://edhub.ama-assn.org/jn-learning/course/288 ">Atrial Fibrillation Course</a>
<a href="https://edhub.ama-assn.org/jn-learning/course/294 ">Women's Health Course</a>
<a target="_blank" href="https://edhub.ama-assn.org/pages/auto-credit-reporting">CME / MOC Reporting Preferences</a>
<a href="https://edhub.ama-assn.org/jn-learning/pages/about-cme">About CME &amp; MOC</a>
</div>
</div>
</div>





        </div>
        
        <div id="footer-resources-wrap" class="footer-resources-wrap">
            



    <input type="hidden" class="SelfServeContentId" value="v2_Footer_Right" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<style type="text/css">
    .footer-resources-wrap .footer-subheading {color: grey;display:block !important;font-size: 1.17647em;font-weight: 400;text-transform: uppercase;}
</style>
<div class="footer-heading-wrap">
<h3 class="footer-heading is-b footer-resources-heading" data-mobile-tog-target=".footer-resources">Help</h3>
</div>
<div class="footer-resources">
<a href="https://store.jamanetwork.com" class="footer-service-link" target="_blank">Subscriptions &amp; Renewals</a>
<a href="https://jamanetwork.com/oauthsignin?return_url=http%3A%2F%2Fjamanetwork.com%2Fmyaccount%23my-alerts" class="footer-service-link" rel="nofollow">Manage Emails</a>
<a href="https://jamanetwork.com/oauthsignin?return_url=http%3A%2F%2Fjamanetwork.com%2Fmyaccount%23my-profile" class="footer-service-link" rel="nofollow">Update My Address</a>
<a href="https://support.jamanetwork.com/hc/en-us" class="footer-service-link">Support Center</a>
<a href="/myaccount " class="footer-service-link">My Account</a>
<h4 class="footer-subheading jn-ss-subheading-mt">JAMA Career Center</h4>
<a href="https://careers.jamanetwork.com/" class="footer-service-link" target="_blank">Physician Job Listings</a>
</div>








    <input type="hidden" class="SelfServeContentId" value="Channel_Footer_LowerRight" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<style type="text/css">
    .footer-resources-wrap .iconsocial {display: inline-block !important;width: 32px;height: 32px;min-width: unset !important;margin: 0 2px 0 3px !important;background-color: #fff;border-radius: 20px;border: 1px solid #191919;vertical-align: middle;}
    .footer-resources-wrap .iconsocial.instagram {background-image: url(https://cdn.jamanetwork.com/ImageLibrary/JamaNetwork/social/instagram-icon-black.svg);background-position: 6px 6px;background-repeat: no-repeat;background-size: 18px;}
    .footer-resources-wrap .iconsocial.instagram:hover, .footer-resources-wrap .iconsocial.instagram:focus {background-color: #C13584;border-color: #191919;}
    #load-instagram-image { background: url(https://cdn.jamanetwork.com/ImageLibrary/JamaNetwork/social/instagram-icon-fill.png) no-repeat -9999px -9999px; }
</style>
<div id="BodyContent_Footer_divSocial" class="social-links footer-social-links">
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://www.facebook.com/JAMAJournal/" class="social-link is-b facebook"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://twitter.com/JAMA_current" class="social-link is-b twitter"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://www.instagram.com/jamanetwork/?hl=en" class="iconsocial instagram"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://www.linkedin.com/company/jamanetwork/" class="social-link is-b linked-in"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://www.youtube.com/jamanetwork" class="social-link is-b you-tube"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="https://www.pinterest.com/jamanetwork/" class="social-link is-b pinterest"></a>
<a target="_blank" rel="nofollow" data-emailid="1571f771-9fbd-4765-8cd4-6f2a47ef9495" href="/rss/site_3/67.xml" class="social-link is-b rss"></a>
</div>
<!--
<h6>hypertension_Channel_Footer_LowerRight</h6>
-->




<div id="BodyContent_Footer_divEmailUpdate" class="footer-email-updates">
                
                    <div class="widget-EmailListSignUp widget-instance-Home_MainContentB2Channel_EmailListSignUp">
        <div class="email-signup">
    
    <div class="email-signup--text sb-pc">Get the latest from JAMA Network</div>
    <div class="email-signup--input-wrap is-b">
        <input type="text" name="email" class="email-signup--input" placeholder="Email address" title="Email address" />
        <a rel="nofollow" href="javascript:;" class="email-signup--submit sb-sc btn">Sign Up</a>
    </div>
    <div class="email-signup--link"> <a class="email-signup--privacy" href="/pages/privacy-policy">Privacy Policy</a> | <a class="email-signup--terms" href="/pages/terms-of-use">Terms of Use</a></div>
    <div class="email-signup--user-message"></div>
</div> 
    </div>
</div>
        </div>

        
        <div class="footer-bar" itemscope itemtype="https://schema.org/Organization">
            



    <input type="hidden" class="SelfServeContentId" value="v2_Footer_Bottom_Bar" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

<style type="text/css">
    .nav-journals a.theme-jama-health-forum:before {background: #133763;}
    .jn-bottom-bar {color: #fff; float: left;font-size: 10px;padding: 13px 20px;width: 33.33%;}
    .jn-bottom-bar p {line-height: 2;}
    @media (max-width: 900px) {.jn-bottom-bar {float: none;width: 100%;}}
    .jn-footer-copyright {font-size:12px;}
    .jn-footer-pipe {margin:0 10px;}
    .footer-bar-jn-logo img {width: 230px;}
    @media (max-width: 900px) {.footer-bar-jn-logo img {width: 200px;}}
    [data-thm=umb] .jobs-ad--text h6 {color: #d71635 !important;}
    [data-thm=jama] .jobs-ad--text h6 {color: #d71635 !important;}
    [data-thm=jaman] .jobs-ad--text h6 {color: #ed0973 !important;}
    [data-thm=cardi] .jobs-ad--text h6 {color: #be1e32 !important;}
    [data-thm=derm] .jobs-ad--text h6 {color: #006f3b !important;}
    [data-thm=faci] .jobs-ad--text h6 {color: #ed1c24 !important;}
    [data-thm=jama-] .jobs-ad--text h6 {color: #fb5252 !important;}
    [data-thm=intem] .jobs-ad--text h6 {color: #006e96 !important;}
    [data-thm=neur] .jobs-ad--text h6 {color: #981b1e !important;}
    [data-thm=oncol] .jobs-ad--text h6 {color: #3b923f !important;}
    [data-thm=ophth] .jobs-ad--text h6 {color: #66bc29 !important;}
    [data-thm=otol] .jobs-ad--text h6 {color: #34b6e4 !important;}
    [data-thm=peds] .jobs-ad--text h6 {color: #0084c0 !important;}
    [data-thm=psych] .jobs-ad--text h6 {color: #005276 !important;}
    [data-thm=surg] .jobs-ad--text h6 {color: #f47920 !important;}
    .blockquote .para {margin: 0 0 1em 1em;}
</style>
<!-- This version of the code includes CSS changes to size the new logo -->
<a class="footer-bar-jn-logo d-b no-mw mb1" href="/" title="JAMA Network Home"><img class="mw-100" src="https://cdn.jamanetwork.com/ImageLibrary/global/jn-signature-reversed-r.svg?versionId=80408" alt="Jama Network Logo"></a>
<div class="jn-bottom-bar">
<p>
<span class="jn-footer-copyright">© 2024 American Medical Association. All Rights Reserved.</span><br>
<a href="https://www.ama-assn.org/about/terms-use" rel="nofollow" class="p0">Terms of Use</a><span class="jn-footer-pipe">|</span>
<a href="https://www.ama-assn.org/about/privacy-policy" rel="nofollow" class="p0">Privacy Policy</a><span class="jn-footer-pipe">|</span>
<a href="https://www.ama-assn.org/about/accessibility-statement" rel="nofollow" class="p0">Accessibility Statement</a><span class="jn-footer-pipe">|</span>
<a onclick="OneTrust.ToggleInfoDisplay()" rel="nofollow" class="p0" id="CookieFooter">Cookie Settings</a>
</p>
</div>
<!-- 
	#selfserve-maintenance {display:block;margin:20px 0;max-height:none !important;min-height:200px;visibility:visible;}
	-->





            <a class="footer-bar-sis no-mw relative nudge-down" href="https://www.silverchair.com" target="_blank"><img class="footer-bar-sis-img mt05 mw-100" width="600" height="70" src="//cdn.jamanetwork.com/UI/app/img/powered.png" alt="Silverchair Logo" /></a>
        </div>
    </footer>

</div>
<div class="ss-ui-only">
        <div class="widget-SelfServeContent widget-instance-AMA_SS_UI_Only">
        


<div class="self-serve">
    <input type="hidden" class="SelfServeContentId" value="SsUiOnly" />
    <input type="hidden" class="SelfServeVersionId" value="0" />

.


</div>

 
    </div>

</div>

    </section>


            <div class="widget-UserContentAccessWrite widget-instance-AMA_UserContentAccessWrite_Site">
        <div class="SCM-SharedWidgets-LocalStorage-UserContentAccessWrite" data-values='{"id":"0","type":"Site","date":"1/23/2024 12:05:16 PM"}'></div>
 
    </div>


        
        
        <div id="revealModal" class="reveal-modal" data-reveal>
            <div id="revealContent"></div>
            <a class="close-reveal-modal icon-close"></a>
        </div>

        
        <div class="artmet-modal" id="MetricsModal">
            <div class="artmet-modal-contents">
                <a class="artmet-close-modal">&#215;</a>
            </div>
        </div>

        
        
    


            <div class="widget-SigninModals widget-instance-AMA_SigninModals">
        <div class="js-modal-no-access-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Access your subscriptions</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

            <div class="widget-AmaAdvancedSeamlessAccess widget-instance-AMA_NoAccess_AdvancedSeamlessAccessButton">
        <div class="seamless-access-button--wrap">
    <button class="d-flex sa-button align-items-center" role="button" type="button">
        <div class="sa-button-logo-wrap">
            <img src="//cdn.jamanetwork.com/UI/app/svg/seamless-access.svg" class="sa-button-logo" alt="Seamless Access Logo" />
        </div>
        <div class="d-flex justify-content-center align-items-center sa-button-text text-truncate">
            <div class="sa-button-text-primary text-truncate">Access through your institution</div>
        </div>
    </button>
    <div class="sa-access-text text-truncate hide">
        <div class="sa-cta-access"><span>Add or change institution</span></div>
    </div>
</div>
 
    </div>

        
        
    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="js-modal-paid-pdf-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Access your subscriptions</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

            <div class="widget-AmaAdvancedSeamlessAccess widget-instance-AMA_PaidPdf_AdvancedSeamlessAccessButton">
        <div class="seamless-access-button--wrap">
    <button class="d-flex sa-button align-items-center" role="button" type="button">
        <div class="sa-button-logo-wrap">
            <img src="//cdn.jamanetwork.com/UI/app/svg/seamless-access.svg" class="sa-button-logo" alt="Seamless Access Logo" />
        </div>
        <div class="d-flex justify-content-center align-items-center sa-button-text text-truncate">
            <div class="sa-button-text-primary text-truncate">Access through your institution</div>
        </div>
    </button>
    <div class="sa-access-text text-truncate hide">
        <div class="sa-cta-access"><span>Add or change institution</span></div>
    </div>
</div>
 
    </div>

        
        
    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="js-modal-free-pdf-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Sign in to access free PDF</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

            <div class="widget-AmaAdvancedSeamlessAccess widget-instance-AMA_FreePdf_AdvancedSeamlessAccessButton">
        <div class="seamless-access-button--wrap">
    <button class="d-flex sa-button align-items-center" role="button" type="button">
        <div class="sa-button-logo-wrap">
            <img src="//cdn.jamanetwork.com/UI/app/svg/seamless-access.svg" class="sa-button-logo" alt="Seamless Access Logo" />
        </div>
        <div class="d-flex justify-content-center align-items-center sa-button-text text-truncate">
            <div class="sa-button-text-primary text-truncate">Access through your institution</div>
        </div>
    </button>
    <div class="sa-access-text text-truncate hide">
        <div class="sa-cta-access"><span>Add or change institution</span></div>
    </div>
</div>
 
    </div>

    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="js-modal-save-search-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Save your search</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

        
    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="js-modal-follow-collection-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Customize your interests</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

        
            <div class="modal--link-wrap">
        <a class="modal--link" href="/pages/privacy-policy" rel="nofollow">Privacy Policy</a>
    </div>

    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="js-modal-user-comment-reveal no-access reveal-modal modal tiny" data-reveal>
    <div class="modal--box">
        <div class="modal--title">Make a comment</div>
        <hr />
                <button type="button" role="button" class="modal--btn js-btn-signin-personal" data-oauth-signin-url="https://jamanetwork.com/oauthsignin?return_url=https%3a%2f%2fjamanetwork.com%2fchannels%2fhypertension">
            Sign in<span class="fw-normal"> | personal account</span>
        </button>

        
            <div class="modal--link-wrap">
        <a class="modal--link" href="/pages/privacy-policy" rel="nofollow">Privacy Policy</a>
    </div>

    </div>
        <a class="close-reveal-modal icon-close"></a>

</div>

<div class="hidden-true js-modal-page-data"
     data-store-url="https://store.jamanetwork.com"
     data-store-purchase-url="https://jamanetwork.com/oauthsignin?return_url=https://store.jamanetwork.com"
     data-store-subscribe-url="https://store.jamanetwork.com">
</div>






 
    </div>

        

        
        <script src="//cdn.jamanetwork.com/UI/app/vendor/jquery-2.2.4.min.js?v=638397092390661193"></script>
        <script>window.jQuery || document.write('<script src="/UI/app/vendor/jquery-2.2.4.min.js">\x3C/script>')</script>

        <script src="//cdn.jamanetwork.com/UI/app/dist/app.min.js?v=638409397769849327"></script>
        
    
    
    
<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=643701de45aa460012e1032e&amp;product=sop' async='async'></script>


    </form>
    

    
    
    <link rel="stylesheet" href="//cdn.jamanetwork.com/UI/app/scss/modules/_trendMD.css">
</body>
</html>

