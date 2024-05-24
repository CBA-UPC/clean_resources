!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(ft){"use strict";try{(function(){ft=ft&&ft.hasOwnProperty("default")?ft.default:ft;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(o,s,a,u){return new(a=a||Promise)(function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function r(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new a(function(e){e(t.value)}).then(n,r)}i((u=u.apply(o,s||[])).next())})}function p(n,r){var i,o,s,e,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function c(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function i(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}var e,t,o,d=(o=Error,n(e=a,t=o),void(e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)),a);function s(){this.constructor=e}function a(e,t){var n=o.call(this,t)||this;return n.code=e,n.name="FirebaseError",Object.setPrototypeOf(n,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,f.prototype.create),n}var f=(h.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?function(e,r){return e.replace(v,function(e,t){var n=r[t];return null!=n?n.toString():"<"+t+"?>"})}(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",u=new d(i,a),c=0,f=Object.keys(r);c<f.length;c++){var l=f[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=r[l])}return u},h);function h(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var v=/\{\$([^}]+)}/g,g=(b.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},b.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},b.prototype.setServiceProps=function(e){return this.serviceProps=e,this},b);function b(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function y(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function w(n,r,i){var o,e=new Promise(function(e,t){y(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function m(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function k(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return w(this[n],e,arguments)})})}function S(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function I(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return function(e,t,n){var r=w(e,t,n);return r.then(function(e){if(e)return new C(e,r.request)})}(this[n],e,arguments)})})}function T(e){this._index=e}function C(e,t){this._cursor=e,this._request=t}function _(e){this._store=e}function P(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function j(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new P(n)}function D(e){this._db=e}function E(e,t,n){var r=w(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new j(i.result,e.oldVersion,i.transaction))}),r.then(function(e){return new D(e)})}function x(e){return w(indexedDB,"deleteDatabase",[e])}m(T,"_index",["name","keyPath","multiEntry","unique"]),k(T,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),I(T,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(C,"_cursor",["direction","key","primaryKey","value"]),k(C,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(C.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),y(t._request).then(function(e){if(e)return new C(e,t._request)})})})}),_.prototype.createIndex=function(){return new T(this._store.createIndex.apply(this._store,arguments))},_.prototype.index=function(){return new T(this._store.index.apply(this._store,arguments))},m(_,"_store",["name","keyPath","indexNames","autoIncrement"]),k(_,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),I(_,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),S(_,"_store",IDBObjectStore,["deleteIndex"]),P.prototype.objectStore=function(){return new _(this._tx.objectStore.apply(this._tx,arguments))},m(P,"_tx",["objectStoreNames","mode"]),S(P,"_tx",IDBTransaction,["abort"]),j.prototype.createObjectStore=function(){return new _(this._db.createObjectStore.apply(this._db,arguments))},m(j,"_db",["name","version","objectStoreNames"]),S(j,"_db",IDBDatabase,["deleteObjectStore","close"]),D.prototype.transaction=function(){return new P(this._db.transaction.apply(this._db,arguments))},m(D,"_db",["name","version","objectStoreNames"]),S(D,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[_,T].forEach(function(e){i in e.prototype&&(e.prototype[i.replace("open","iterate")]=function(){var e=function(e){return Array.prototype.slice.call(e)}(arguments),t=e[e.length-1],n=this._store||this._index,r=n[i].apply(n,e.slice(0,-1));r.onsuccess=function(){t(r.result)}})})}),[T,_].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var K,O="0.4.2",N=1e4,M="w:"+O,A="FIS_v2",q="https://firebaseinstallations.googleapis.com/v1",B=36e5,L=((K={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',K["not-registered"]="Firebase Installation is not registered.",K["installation-not-found"]="Firebase Installation not found.",K["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',K["app-offline"]="Could not process request. Application offline.",K["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",K),R=new f("installations","Installations",L);function V(e){return e instanceof d&&e.code.includes("request-failed")}function W(e){var t=e.projectId;return q+"/projects/"+t+"/installations"}function F(e){return{token:e.token,requestStatus:2,expiresIn:function(e){return Number(e.replace("s","000"))}(e.expiresIn),creationTime:Date.now()}}function H(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,R.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function U(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $(e,t){var n=t.refreshToken,r=U(e);return r.append("Authorization",function(e){return A+" "+e}(n)),r}function G(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function z(t){return new Promise(function(e){setTimeout(e,t)})}var J=/^[cdef][\w-]{21}$/,Y="";function Z(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return function(e){return btoa(String.fromCharCode.apply(String,i(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22)}(e);return J.test(t)?t:Y}catch(e){return Y}}function Q(e){return e.appName+"!"+e.appId}var X=new Map;function ee(e,t){var n=Q(e);te(n,t),function(e,t){var n=re();n&&n.postMessage({key:e,fid:t});ie()}(n,t)}function te(e,t){var n,r,i=X.get(e);if(i)try{for(var o=c(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var ne=null;function re(){return!ne&&"BroadcastChannel"in self&&((ne=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){te(e.data.key,e.data.fid)}),ne}function ie(){0===X.size&&ne&&(ne.close(),ne=null)}var oe,se,ae="firebase-installations-database",ue=1,ce="firebase-installations-store",fe=null;function le(){return fe=fe||E(ae,ue,function(e){switch(e.oldVersion){case 0:e.createObjectStore(ce)}})}function pe(s,a){return l(this,void 0,void 0,function(){var t,n,r,i,o;return p(this,function(e){switch(e.label){case 0:return t=Q(s),[4,le()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),[4,i.put(a,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===a.fid||ee(s,a.fid),[2,a]}})})}function de(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Q(i),[4,le()];case 1:return n=e.sent(),[4,(r=n.transaction(ce,"readwrite")).objectStore(ce).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function he(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return t=Q(a),[4,le()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),void 0!==(s=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(s,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!s||o&&o.fid===s.fid||ee(a,s.fid),[2,s]}})})}function ve(i){return l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(i,function(e){var t=function(e){return be(e||{fid:Z(),registrationStatus:0})}(e),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return[4,ge(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,ge(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,ve(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(R.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(a,e){var u=e.fid;return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return t=W(a),n=U(a),r={fid:u,authVersion:A,appId:a.appId,sdkVersion:M},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,G(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return s=e.sent(),[2,{fid:s.fid||u,registrationStatus:2,refreshToken:s.refreshToken,authToken:F(s.authToken)}];case 3:return[4,H("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,pe(r,t)];case 2:return V(n=e.sent())&&409===n.serverCode?[4,de(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,pe(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==Y?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function ge(e){return he(e,function(e){if(!e)throw R.create("installation-not-found");return be(e)})}function be(e){return function(e){return 1===e.registrationStatus&&e.registrationTime+N<Date.now()}(e)?{fid:e.fid,registrationStatus:0}:e}function ye(e,u){var c=e.appConfig,f=e.platformLoggerProvider;return l(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return W(e)+"/"+n+"/authTokens:generate"}(c,u),n=$(c,u),(r=f.getImmediate({optional:!0}))&&n.append("x-firebase-client",r.getPlatformInfoString()),i={installation:{sdkVersion:M}},o={method:"POST",headers:n,body:JSON.stringify(i)},[4,G(function(){return fetch(t,o)})];case 1:return(s=e.sent()).ok?[4,s.json()]:[3,3];case 2:return a=e.sent(),[2,F(a)];case 3:return[4,H("Generate Auth Token",s)];case 4:throw e.sent()}})})}function we(i,o){return void 0===o&&(o=!1),l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(i.appConfig,function(e){if(!ke(e))throw R.create("not-registered");var t=e.authToken;if(!o&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+B}(e)}(t))return e;if(1===t.requestStatus)return r=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,me(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,me(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,we(r,i)]:[2,n]}})})}(i,o),e;if(!navigator.onLine)throw R.create("app-offline");var n=function(e){var t={requestStatus:1,requestTime:Date.now()};return u(u({},e),{authToken:t})}(e);return r=function(i,o){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,ye(i,o)];case 1:return t=e.sent(),r=u(u({},o),{authToken:t}),[4,pe(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!V(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,de(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=u(u({},o),{authToken:{requestStatus:0}}),[4,pe(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(i,n),n})];case 1:return t=e.sent(),r?[4,r]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function me(e){return he(e,function(e){if(!ke(e))throw R.create("not-registered");return function(e){return 1===e.requestStatus&&e.requestTime+N<Date.now()}(e.authToken)?u(u({},e),{authToken:{requestStatus:0}}):e})}function ke(e){return void 0!==e&&2===e.registrationStatus}function Se(t,n){return void 0===n&&(n=!1),l(this,void 0,void 0,function(){return p(this,function(e){switch(e.label){case 0:return[4,function(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,ve(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,we(t,n)];case 2:return[2,e.sent().token]}})})}function Ie(o,s){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return W(e)+"/"+n}(o,s),n=$(o,s),r={method:"DELETE",headers:n},[4,G(function(){return fetch(t,r)})];case 1:return(i=e.sent()).ok?[3,3]:[4,H("Delete Installation",i)];case 2:throw e.sent();case 3:return[2]}})})}function Te(e,t){var n=e.appConfig;return function(e,t){re();var n=Q(e),r=X.get(n);r||(r=new Set,X.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=Q(e),r=X.get(n);r&&(r.delete(t),0===r.size&&X.delete(n),ie())}(n,t)}}function Ce(e){return R.create("missing-app-config-values",{valueName:e})}(oe=ft).INTERNAL.registerComponent(new g("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Ce("App Configuration");if(!e.name)throw Ce("App Name");try{for(var r=c(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Ce(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return[4,ve(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):we(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return Se(n,e)},delete:function(){return function(r){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,he(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw R.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw R.create("app-offline");case 3:return[4,Ie(t,n)];case 4:return e.sent(),[4,de(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return Te(n,e)}}},"PUBLIC")),oe.registerVersion("@firebase/installations",O);var _e=((se={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',se["only-available-in-window"]="This method is available in a Window context.",se["only-available-in-sw"]="This method is available in a service worker context.",se["permission-default"]="The notification permission was not granted and dismissed instead.",se["permission-blocked"]="The notification permission was not granted and blocked instead.",se["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",se["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",se["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",se["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",se["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",se["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",se["token-update-no-token"]="FCM returned no token when updating the user to push.",se["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",se["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",se["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",se["invalid-vapid-key"]="The public VAPID key must be a string.",se["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",se),Pe=new f("messaging","Messaging",_e);function je(e){return Pe.create("missing-app-config-values",{valueName:e})}function De(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,i(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}var Ee="fcm_token_details_db",xe=5,Ke="fcm_token_object_Store";function Oe(a){return l(this,void 0,void 0,function(){var t,s,n=this;return p(this,function(e){switch(e.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=e.sent(),!t.map(function(e){return e.name}).includes(Ee))return[2,null];e.label=2;case 2:return s=null,[4,E(Ee,xe,function(o){return l(n,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return o.oldVersion<2?[2]:o.objectStoreNames.contains(Ke)?[4,(t=o.transaction.objectStore(Ke)).index("fcmSenderId").get(a)]:[2];case 1:return n=e.sent(),[4,t.clear()];case 2:if(e.sent(),!n)return[2];if(2===o.oldVersion){if(!(r=n).auth||!r.p256dh||!r.endpoint)return[2];s={token:r.fcmToken,createTime:(i=r.createTime,null!=i?i:Date.now()),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:De(r.vapidKey)}}}else 3===o.oldVersion?s={token:(r=n).fcmToken,createTime:r.createTime,subscriptionOptions:{auth:De(r.auth),p256dh:De(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:De(r.vapidKey)}}:4===o.oldVersion&&(s={token:(r=n).fcmToken,createTime:r.createTime,subscriptionOptions:{auth:De(r.auth),p256dh:De(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:De(r.vapidKey)}});return[2]}})})})];case 3:return e.sent().close(),[4,x(Ee)];case 4:return e.sent(),[4,x("fcm_vapid_details_db")];case 5:return e.sent(),[4,x("undefined")];case 6:return e.sent(),[2,function(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(s)?s:null]}})})}var Ne="firebase-messaging-database",Me=1,Ae="firebase-messaging-store",qe=null;function Be(){return qe=qe||E(Ne,Me,function(e){switch(e.oldVersion){case 0:e.createObjectStore(Ae)}})}function Le(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return[4,e.sent().transaction(Ae).objectStore(Ae).get(t)];case 2:return(n=e.sent())?[2,n]:[3,3];case 3:return[4,Oe(i.appConfig.senderId)];case 4:return(r=e.sent())?[4,Re(i,r)]:[3,6];case 5:return e.sent(),[2,r];case 6:return[2]}})})}function Re(i,o){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).put(o,t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2,o]}})})}function Ve(e){return e.appConfig.appId}var We="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Fe="https://fcmregistrations.googleapis.com/v1",He="FCM_MSG",Ue="google.c.a.c_id";function $e(s,a){return l(this,void 0,void 0,function(){var t,n,r,i,o;return p(this,function(e){switch(e.label){case 0:return[4,ze(s)];case 1:t=e.sent(),n={method:"DELETE",headers:t},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(s.appConfig)+"/"+a,n)];case 3:return[4,e.sent().json()];case 4:if((r=e.sent()).error)throw i=r.error.message,Pe.create("token-unsubscribe-failed",{errorInfo:i});return[3,6];case 5:throw o=e.sent(),Pe.create("token-unsubscribe-failed",{errorInfo:o});case 6:return[2]}})})}function Ge(e){var t=e.projectId;return Fe+"/projects/"+t+"/registrations"}function ze(e){var n=e.appConfig,r=e.installations;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,r.getToken()];case 1:return t=e.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})]}})})}function Je(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==We&&(o.web.applicationPubKey=i),o}var Ye,Ze;function Qe(o,s,a){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[4,function(n,r){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,n.pushManager.getSubscription()];case 1:return(t=e.sent())?[2,t]:[2,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:r})]}})})}(s,a)];case 1:return t=e.sent(),[4,Le(o)];case 2:return n=e.sent(),r={vapidKey:a,swScope:s.scope,endpoint:t.endpoint,auth:De(t.getKey("auth")),p256dh:De(t.getKey("p256dh"))},n?[3,3]:[2,et(o,r)];case 3:if(function(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}(n.subscriptionOptions,r))return[3,8];e.label=4;case 4:return e.trys.push([4,6,,7]),[4,$e(o,n.token)];case 5:return e.sent(),[3,7];case 6:return i=e.sent(),console.warn(i),[3,7];case 7:return[2,et(o,r)];case 8:return Date.now()>=n.createTime+6048e5?[2,function(i,o,s){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,5]),[4,function(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u.subscriptionOptions),r={method:"PATCH",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig)+"/"+u.token,r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-update-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-update-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-update-no-token");return[2,i.token]}})})}(o,i)];case 1:return t=e.sent(),n=u({token:t,createTime:Date.now()},i),[4,Re(o,n)];case 2:return e.sent(),[2,t];case 3:return r=e.sent(),[4,Xe(o,s)];case 4:throw e.sent(),r;case 5:return[2]}})})}({token:n.token,createTime:Date.now(),subscriptionOptions:r},o,s)]:[2,n.token];case 9:return[2]}})})}function Xe(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,Le(r)];case 1:return(t=e.sent())?[4,$e(r,t.token)]:[3,4];case 2:return e.sent(),[4,function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}(r)];case 3:e.sent(),e.label=4;case 4:return[4,i.pushManager.getSubscription()];case 5:return(n=e.sent())?[2,n.unsubscribe()]:[2,!0]}})})}function et(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,function(a,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s;return p(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u),r={method:"POST",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig),r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-subscribe-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-subscribe-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-subscribe-no-token");return[2,i.token]}})})}(r,i)];case 1:return t=e.sent(),n={token:t,createTime:Date.now(),subscriptionOptions:i},[4,Re(r,n)];case 2:return e.sent(),[2,n.token]}})})}function tt(e){return"object"==typeof e&&!!e&&Ue in e}(Ze=Ye=Ye||{}).PUSH_RECEIVED="push-received",Ze.NOTIFICATION_CLICKED="notification-clicked";var nt=(Object.defineProperty(rt.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),rt.prototype.getToken=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return this.vapidKey||(this.vapidKey=We),[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:e.sent(),e.label=3;case 3:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[2,Qe(this.firebaseDependencies,t,this.vapidKey)]}})})},rt.prototype.deleteToken=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),[2,Xe(this.firebaseDependencies,t)]}})})},rt.prototype.requestPermission=function(){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(t=e.sent()))return[2];throw"denied"===t?Pe.create("permission-blocked"):Pe.create("permission-default")}})})},rt.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},rt.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw Pe.create("invalid-sw-registration");if(this.swRegistration)throw Pe.create("use-sw-after-get-token");this.swRegistration=e},rt.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},rt.prototype.setBackgroundMessageHandler=function(){throw Pe.create("only-available-in-sw")},rt.prototype.onTokenRefresh=function(){return function(){}},rt.prototype.getServiceWorkerRegistration=function(){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:if(this.swRegistration)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),t=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return t.swRegistration=e.sent(),[3,4];case 3:throw n=e.sent(),Pe.create("failed-service-worker-registration",{browserErrorMessage:n.message});case 4:return[2,this.swRegistration]}})})},rt.prototype.messageEventListener=function(o){var s;return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return(null===(s=o.data)||void 0===s?void 0:s.firebaseMessaging)?(t=o.data.firebaseMessaging,n=t.type,r=t.payload,this.onMessageCallback&&n===Ye.PUSH_RECEIVED&&this.onMessageCallback(r),tt(i=r.data)&&"1"===i["google.c.a.e"]?[4,this.logEvent(n,i)]:[3,2]):[2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},rt.prototype.logEvent=function(n,r){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return t=function(e){switch(e){case Ye.NOTIFICATION_CLICKED:return"notification_open";case Ye.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(n),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return e.sent().logEvent(t,{message_id:r[Ue],message_name:r["google.c.a.c_l"],message_time:r["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})},rt);function rt(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",function(e){return t.messageEventListener(e)})}var it=(Object.defineProperty(ot.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),ot.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw Pe.create("invalid-bg-handler");this.bgMessageHandler=e},ot.prototype.getToken=function(){var n,r,i;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return this.vapidKey?[3,2]:[4,Le(this.firebaseDependencies)];case 1:t=e.sent(),this.vapidKey=null!=(i=null===(r=null===(n=t)||void 0===n?void 0:n.subscriptionOptions)||void 0===r?void 0:r.vapidKey)?i:We,e.label=2;case 2:return[2,Qe(this.firebaseDependencies,self.registration,this.vapidKey)]}})})},ot.prototype.deleteToken=function(){return Xe(this.firebaseDependencies,self.registration)},ot.prototype.requestPermission=function(){throw Pe.create("only-available-in-window")},ot.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},ot.prototype.useServiceWorker=function(){throw Pe.create("only-available-in-window")},ot.prototype.onMessage=function(){throw Pe.create("only-available-in-window")},ot.prototype.onTokenRefresh=function(){throw Pe.create("only-available-in-window")},ot.prototype.onPush=function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(i))?[4,st()]:[2];case 1:return function(e){return e.some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})}(n=e.sent())?[2,function(e,t){var n,r,i=at(Ye.PUSH_RECEIVED,t);try{for(var o=c(e),s=o.next();!s.done;s=o.next())s.value.postMessage(i)}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}(n,t)]:(r=function(e){var t;if(e&&"object"==typeof e.notification){var n=u({},e.notification);return n.data=u(u({},e.notification.data),((t={})[He]=e,t)),n}}(t))?[4,function(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}(r)]:[3,3];case 2:return e.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:e.sent(),e.label=5;case 5:return[2]}})})},ot.prototype.onSubChange=function(n){var r,i,o;return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return n.newSubscription?[3,2]:[4,Xe(this.firebaseDependencies,self.registration)];case 1:return e.sent(),[2];case 2:return[4,Le(this.firebaseDependencies)];case 3:return t=e.sent(),[4,Xe(this.firebaseDependencies,self.registration)];case 4:return e.sent(),[4,Qe(this.firebaseDependencies,self.registration,(o=null===(i=null===(r=t)||void 0===r?void 0:r.subscriptionOptions)||void 0===i?void 0:i.vapidKey,null!=o?o:We))];case 5:return e.sent(),[2]}})})},ot.prototype.onNotificationClick=function(o){var s,a;return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return(t=null===(a=null===(s=o.notification)||void 0===s?void 0:s.data)||void 0===a?void 0:a[He])?o.action?[2]:(o.stopImmediatePropagation(),o.notification.close(),(n=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(tt(e.data)?self.location.origin:null)}(t))?[4,function(u){return l(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return p(this,function(e){switch(e.label){case 0:return t=new URL(u,self.location.href).href,[4,st()];case 1:n=e.sent();try{for(r=c(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).href===t)return[2,o]}catch(e){s={error:e}}finally{try{i&&!i.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}})})}(n)]:[2]):[2];case 1:return(r=e.sent())?[3,4]:[4,self.clients.openWindow(n)];case 2:return r=e.sent(),[4,function(t){return new Promise(function(e){setTimeout(e,t)})}(3e3)];case 3:return e.sent(),[3,6];case 4:return[4,r.focus()];case 5:r=e.sent(),e.label=6;case 6:return r?(i=at(Ye.NOTIFICATION_CLICKED,t),[2,r.postMessage(i)]):[2]}})})},ot);function ot(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",function(e){e.waitUntil(t.onPush(e))}),self.addEventListener("pushsubscriptionchange",function(e){e.waitUntil(t.onSubChange(e))}),self.addEventListener("notificationclick",function(e){e.waitUntil(t.onNotificationClick(e))})}function st(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function at(e,t){return{firebaseMessaging:{type:e,payload:t}}}var ut={isSupported:ct};function ct(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}ft.INTERNAL.registerComponent(new g("messaging",function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw je("App Configuration Object");if(!e.name)throw je("App Name");var r=e.options;try{for(var i=c(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var s=o.value;if(!r[s])throw je(s)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!ct())throw Pe.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new it(n):new nt(n)},"PUBLIC").setServiceProps(ut))}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging.js.map
8333 16.2066667,11.3511667 20.2193333,13.8179167 C20.696,14.1104167 20.8455,14.7355 20.553,15.2110833 Z M18.9615833,18.7503333 C18.7286667,19.1338333 18.22925,19.2540833 17.8479167,19.0200833 C14.7950833,17.1545833 10.9525,16.7331667 6.42741667,17.7666667 C5.99191667,17.8663333 5.5575,17.5933333 5.45783333,17.1578333 C5.35816667,16.72125 5.63008333,16.2868333 6.06666667,16.1871667 C11.0185833,15.0550833 15.2663333,15.5425833 18.6929167,17.6366667 C19.0753333,17.8695833 19.1955833,18.369 18.9615833,18.7503333 L18.9615833,18.7503333 Z M13,0 C5.82075,0 0,5.82075 0,13 C0,20.1803333 5.82075,26 13,26 C20.1803333,26 26,20.1803333 26,13 C26,5.82075 20.1803333,0 13,0 Z" id="Shape"></path></g></g></g></symbol><symbol id="apple" width="28px" height="28px" viewbox="0 0 28 28"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-283.000000, -217.000000)"><image id="apple-podcast-logo-0CF661058F-seeklogo.com" x="283" y="217" width="24" height="26" xlink:href="data:image/png;base64,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"></image></g></g></symbol><symbol id="google" width="28px" height="28px" viewbox="0 0 28 28"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-395.000000, -300.000000)"><image x="395" y="300" width="21" height="21" xlink:href="data:image/png;base64,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"></image></g></g></symbol><symbol id="stitcher" width="28px" height="14px" viewbox="0 0 28 14"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-471.000000, -304.000000)"><image x="471" y="304" width="25" height="12" xlink:href="data:image/png;base64,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"></image></g></g></symbol></svg>                <svg class="svg-symbol"><symbol id="logo" viewbox="0 0 1042 682"><g><path d="M359.25 358V430V483.54V555.54V610V682H431.25H683.25V610H431.25V555.54H629.17V483.54H431.25V430H683.25V358H431.25H359.25Z"></path><path d="M916 358H844H718V430H844V682H916V430H1042V358H916Z"></path><path d="M324 252H11.87L324 143.91V72V67.72V0H0V72H311.64L0 179.91V252V256.11V324H324V252Z"></path><path d="M252.5 670.13L144.41 358H72.5H68.22H0.5V682H72.5V370.36L180.41 682H252.5H256.61H324.5V358H252.5V670.13Z"></path><path d="M682.75 162.2V161.83C682.75 72.6 610.16 -1.52588e-05 520.92 -1.52588e-05H358.75V324H520.96C610.17 324 682.75 251.42 682.75 162.2ZM430.75 72H520.92C544.736 72.0265 567.57 81.4991 584.41 98.3398C601.251 115.18 610.724 138.014 610.75 161.83V162.2C610.726 186.007 601.259 208.833 584.425 225.668C567.592 242.504 544.767 251.974 520.96 252H430.75V72Z"></path></g></symbol><symbol id="logo-horizontal" viewbox="0 0 1759 324" preserveaspectratio="xMinYMid slice"><g><path d="M1076.25 0V72V125.54V197.54V252V324H1148.25H1400.25V252H1148.25V197.54H1346.17V125.54H1148.25V72H1400.25V0H1148.25H1076.25Z"></path><path d="M1633 0H1561H1435V72H1561V324H1633V72H1759V0H1633Z"></path><path d="M0 72H311.64L0 179.91V252V256.11V324H324V252H11.87L324 143.91V72V67.72V0H0V72Z"></path><path d="M969.5 312.13L861.41 0H789.5H785.22H717.5V324H789.5V12.36L897.41 324H969.5H973.61H1041.5V0H969.5V312.13Z"></path><path d="M520.92 0H358.75V324H520.96C610.17 324 682.75 251.42 682.75 162.2V161.83C682.75 72.6 610.17 0 520.92 0ZM610.75 162.2C610.726 186.007 601.259 208.833 584.425 225.668C567.592 242.504 544.767 251.974 520.96 252H430.75V72H520.92C544.736 72.0265 567.57 81.4992 584.41 98.3398C601.251 115.181 610.724 138.014 610.75 161.83V162.2Z"></path></g></symbol><symbol id="stars-full" viewbox="0 0 14 14"><polygon points="7,0 8.8,5.1 14,5.3 9.9,8.7 11.3,14 7,11 2.7,14 4.1,8.7 0,5.3 5.2,5.1"></polygon></symbol><symbol id="stars-half" viewbox="0 0 14 14"><polygon points="7.1,0 7.1,11 2.7,14 4.1,8.7 0,5.3 5.2,5.1"></polygon></symbol><symbol id="play" viewbox="0 0 24 24"><path d="M21 12l-18 12v-24z"></path></symbol><symbol id="play-small"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewbox="0 0 9 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.0002 10.7947L7.36084 5.89826L1.0002 1.00184L1.0002 10.7947ZM7.97083 6.69067C8.49084 6.29037 8.49084 5.50616 7.97083 5.10586L1.61019 0.209436C0.952624 -0.296761 0.00019931 0.172002 0.000199274 1.00184L0.000198846 10.7947C0.00019881 11.6245 0.952624 12.0933 1.61019 11.5871L7.97083 6.69067Z" fill="white"></path></svg></symbol><symbol id="circle" viewbox="0 0 24 24"><circle cx="12" cy="12" r="12"></circle></symbol><symbol id="playOverlay" viewbox="-99 101 100 100"><g><circle cx="-50" cy="151" r="33"></circle></g><path class="playOverlayBorder" d="M-50,118c18.2,0,33,14.8,33,33s-14.8,33-33,33s-33-14.8-33-33S-68.2,118-50,118 M-50,116c-19.3,0-35,15.7-35,35  s15.7,35,35,35s35-15.7,35-35S-30.7,116-50,116L-50,116z"></path><g><path class="playOverlayArrow" d="M-60.3,138.6c0-2.2,1.5-3.1,3.4-1.9l19.8,12.2c1.9,1.2,1.9,3,0,4.2l-19.8,12.2c-1.9,1.2-3.4,0.3-3.4-1.9C-60.3,163.4-60.3,138.6-60.3,138.6z"></path></g></symbol><symbol id="play_alt" viewbox="0 0 24 24"><g><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 7v10l7-5-7-5z"></path></g></symbol><symbol id="undo" viewbox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"></path></symbol><symbol id="sitemap" viewbox="0 0 24 24"><path d="M20 18c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-16 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm8-14c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm3.873 15.655l-2.873-2.404v-3.341c-.326.055-.658.09-1 .09s-.674-.035-1-.09v3.341l-2.873 2.404c.484.46.892 1 1.201 1.598l2.672-2.253 2.672 2.253c.309-.598.717-1.137 1.201-1.598z"></path></symbol><symbol id="chat" viewbox="0 0 24 24"><path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z"></path></symbol><symbol id="envelope-open-outline"><svg viewbox="0 0 24 24"><path d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z"></path></svg></symbol><symbol id="video-camera" viewbox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"></path></symbol><symbol id="book-open" viewbox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"></path></symbol><symbol id="video" viewbox="0 0 32 22"><g><path d="M29,2.2c-0.7,0.2-4.6,3-7.9,5.3V2.1C21.1,1,20.1,0,19,0H2.1C1,0,0,1,0,2.1v17.7C0,21,1,22,2.1,22H19c1.2,0,2.1-1,2.1-2.1
        v-5.9c3.3,2.4,7.4,5.4,8.2,5.6c1.4,0.4,2.7-0.1,2.7-0.1V2.2C32,2.2,30.1,1.8,29,2.2z"></path></g></symbol><symbol id="video-alt" viewbox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></symbol><symbol id="photo" viewbox="0 0 32 24"><path d="M30,4h-6c-0.5,0-2.9-4-4-4h-8c-1.1,0-3.6,4-4,4H2C0.9,4,0,4.9,0,6v16c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V6
            C32,4.9,31.1,4,30,4z M16,20.3c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C23,17.2,19.9,20.3,16,20.3z M16,19
            c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6C21.6,16.5,19.1,19,16,19z"></path></symbol><symbol id="arrow-down" viewbox="0 0 24 24"><path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z"></path></symbol><symbol id="arrow-round" viewbox="0 0 16 28"><g><path d="M0.6,27.4c0.8,0.8,2,0.8,2.8,0l12-12c0.8-0.8,0.8-2,0-2.8l-12-12C3,0.2,2.5,0,2,0C1.5,0,1,0.2,0.6,0.6
        c-0.8,0.8-0.8,2,0,2.8L11.2,14L0.6,24.6C-0.2,25.4-0.2,26.6,0.6,27.4z"></path></g></symbol><symbol id="arrow-left-filled-circle" viewbox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"></path></symbol><symbol id="arrow-right-filled-circle" viewbox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"></path></symbol><symbol id="arrow-up-filled-circle" viewbox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z"></path></symbol><symbol id="arrow-down-filled-circle" viewbox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"></path></symbol><symbol id="arrow-right-circle" width="24" height="24" viewbox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"></path></symbol><symbol id="arrow-next" viewbox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></symbol><symbol id="arrow-previous" viewbox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></symbol><symbol id="arrow-dropdown" width="13" height="7" viewbox="0 0 13 7"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.854.146a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 .854.146L6.5 5.793 12.146.146a.5.5 0 0 1 .708 0z"></path></symbol><symbol id="arrow-thin" viewbox="0 0 14 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447L13.3536 6.14645C13.5488 6.34171 13.5488 6.65829 13.3536 6.85355L7.35355 12.8536C7.15829 13.0488 6.84171 13.0488 6.64645 12.8536C6.45118 12.6583 6.45118 12.3417 6.64645 12.1464L12.2929 6.5L6.64645 0.853553C6.45118 0.658291 6.45118 0.341709 6.64645 0.146447Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6.5C0.5 6.22386 0.723858 6 1 6H13C13.2761 6 13.5 6.22386 13.5 6.5C13.5 6.77614 13.2761 7 13 7H1C0.723858 7 0.5 6.77614 0.5 6.5Z"></path></symbol><symbol id="arrow40" viewbox="0 0 41 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.6464 0.146447C33.8417 -0.0488155 34.1583 -0.0488155 34.3536 0.146447L40.3536 6.14645C40.5488 6.34171 40.5488 6.65829 40.3536 6.85355L34.3536 12.8536C34.1583 13.0488 33.8417 13.0488 33.6464 12.8536C33.4512 12.6583 33.4512 12.3417 33.6464 12.1464L39.2929 6.5L33.6464 0.853553C33.4512 0.658291 33.4512 0.341709 33.6464 0.146447Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6.5C0.5 6.22386 0.723858 6 1 6H40C40.2761 6 40.5 6.22386 40.5 6.5C40.5 6.77614 40.2761 7 40 7H1C0.723858 7 0.5 6.77614 0.5 6.5Z"></path></symbol><symbol id="plus-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"></path></svg></symbol><symbol id="envelope" viewbox="0 0 24 24"><g><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"></path></g></symbol><symbol id="envelope-open-solid"><svg viewbox="0 0 24 24"><path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z"></path></svg></symbol><symbol id="envelope-open-outline"><svg viewbox="0 0 24 24"><path d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z"></path></svg></symbol><symbol id="share" viewbox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"></path></symbol><symbol id="padlock"><svg viewbox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"></path></svg></symbol><symbol id="settings"><svg viewbox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path></svg></symbol><symbol id="bell" viewbox="0 0 24 24"><g><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"></path></g></symbol><symbol id="user-icon" viewbox="0 0 18 19"><svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM4.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM3.395 12.793C4.723 12.023 6.535 11.5 9 11.5c2.465 0 4.277.522 5.605 1.293a6.902 6.902 0 0 1 2.646 2.692c.418.767.28 1.555-.189 2.127-.453.553-1.196.888-2 .888H2.938c-.805 0-1.548-.335-2.001-.888-.469-.572-.606-1.36-.19-2.127l.44.239-.44-.239a6.902 6.902 0 0 1 2.647-2.692zm.501.865c-1.149.666-1.845 1.525-2.269 2.305-.21.386-.144.737.084 1.015.243.296.69.522 1.228.522H15.06c.54 0 .985-.226 1.228-.522.228-.278.294-.629.084-1.015-.424-.78-1.12-1.639-2.27-2.305C12.954 12.99 11.322 12.5 9 12.5c-2.32 0-3.953.49-5.104 1.158z"></path></svg></symbol><symbol id="user-icon-filled" viewbox="0 0 18 19"><svg xmlns="http://www.w3.org/2000/svg"><path d="M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2.939 18H15.06c1.344 0 2.378-1.122 1.751-2.276C15.89 14.026 13.785 12 9 12c-4.786 0-6.89 2.026-7.812 3.724C.56 16.878 1.595 18 2.938 18z" stroke-linecap="round" stroke-linejoin="round"></path></svg></symbol><symbol id="broadband_speed_test" viewbox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"></path></symbol><symbol id="paperclip" viewbox="0 0 24 24"><g><path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244s3.071 1.171 4.242 0l8.507-8.464c.977-.977 1.464-2.256 1.464-3.536 0-2.769-2.246-4.999-5-4.999-1.28 0-2.559.488-3.536 1.465l-10.627 10.583c-1.366 1.368-2.05 3.159-2.05 4.951 0 3.863 3.13 7 7 7 1.792 0 3.583-.684 4.95-2.05l10.05-10.075-1.414-1.414z"></path></g></symbol><symbol id="book" viewbox="0 0 24 24"><g><path d="M5.495 4c-1.375 0-1.375-2 0-2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505z"></path></g></symbol><symbol id="caret" viewbox="0 0 16 28"><g><path d="M0.6,27.4c0.8,0.8,2,0.8,2.8,0l12-12c0.8-0.8,0.8-2,0-2.8l-12-12C3,0.2,2.5,0,2,0C1.5,0,1,0.2,0.6,0.6
        c-0.8,0.8-0.8,2,0,2.8L11.2,14L0.6,24.6C-0.2,25.4-0.2,26.6,0.6,27.4z"></path></g></symbol><symbol id="info" viewbox="0 0 24 24"><g><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"></path></g></symbol><symbol id="mag" viewbox="0 0 18 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.73242 1.23218C4.86643 1.23218 1.73242 4.36618 1.73242 8.23218C1.73242 12.0982 4.86643 15.2322 8.73242 15.2322C12.5984 15.2322 15.7324 12.0982 15.7324 8.23218C15.7324 4.36618 12.5984 1.23218 8.73242 1.23218ZM0.732422 8.23218C0.732422 3.8139 4.31414 0.232178 8.73242 0.232178C13.1507 0.232178 16.7324 3.8139 16.7324 8.23218C16.7324 12.6505 13.1507 16.2322 8.73242 16.2322C4.31414 16.2322 0.732422 12.6505 0.732422 8.23218Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0356 13.5356C14.2309 13.3403 14.5475 13.3403 14.7427 13.5356L17.5711 16.364C17.7664 16.5592 17.7664 16.8758 17.5711 17.0711C17.3759 17.2664 17.0593 17.2664 16.864 17.0711L14.0356 14.2427C13.8403 14.0474 13.8403 13.7308 14.0356 13.5356Z"></path></symbol><symbol id="close-gray" viewbox="0 0 26 26"><g><line stroke-miterlimit="10" x1="1.426" y1="1.426" x2="24.688" y2="24.688"></line><line stroke-miterlimit="10" x1="24.689" y1="1.426" x2="1.427" y2="24.688"></line></g></symbol><symbol id="info" viewbox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"></path></symbol><symbol id="close" viewbox="0 0 28 28"><g><polygon points="28,1.9 26.1,0 14,12.1 1.9,0 0,1.9 12.1,14 0,26.1 1.9,28 14,15.9 26.1,28 28,26.1 15.9,14    "></polygon></g></symbol><symbol id="rss" viewbox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"></path></symbol><symbol id="rss-icon-alt" viewbox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"></path></symbol><symbol id="download" viewbox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"></path></symbol><symbol id="thumb" viewbox="0 0 24 24"><path d="M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35 1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718 4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z"></path></symbol><symbol id="zd" viewbox="0 0 78 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57.8892 0H39.9503V31.0879H18.4322L39.2807 0H7.63166L1.78808 8.78051H20.9537L0 39.8667H42.7195L50.2424 28.6918V8.78051H56.0009C62.6177 8.78051 67.2885 12.792 67.2885 19.9321C67.2885 27.7076 62.0382 31.0879 55.8939 31.0879H51.3471V39.8667H57.8892C68.8625 39.8667 78 31.1402 78 19.9321C78 8.72234 68.9169 0 57.8892 0Z" fill="white"></path></symbol></svg>                <svg class="svg-symbol"><symbol id="all" width="24" height="24" viewbox="0 0 24 24"><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z"></path></symbol><symbol id="free" width="24" height="24" viewbox="0 0 24 24"><path d="M4 15h5v1h-5v-1zm8-1h-8v-1h8v1zm1.502 4h-11.002c-.276 0-.5-.224-.5-.5v-6.5h12.82c1.184-1.23 2.842-2 4.68-2 .886 0 1.729.179 2.5.501v-3.501c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h12.82c-.553-.576-1.006-1.251-1.318-2zm-11.502-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5zm22 9c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"></path></symbol><symbol id="freetotry" width="24" height="24" viewbox="0 0 24 24"><path d="M19.5 11c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.696-.697.991.94 2.116-2.169.696.696-2.811 2.867zm-15.031-2.484h5v1h-5v-1zm8-1h-8v-1h8v1zm1.502 4h-11.002c-.276 0-.5-.224-.5-.5v-6.5h12.82c1.184-1.23 2.842-2 4.68-2 .886 0 1.729.179 2.5.501v-3.501c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h12.82c-.553-.576-1.006-1.251-1.318-2zm-11.502-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5z"></path></symbol><symbol id="update" width="24" height="24" viewbox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"></path></symbol></svg>                <svg class="svg-symbol"><symbol id="2137" width="24" height="24" viewbox="0 0 24 24"><path d="M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843zm-15-6.212c-1.19-.693-2-1.969-2-3.443 0-2.206 1.794-4 4-4 2.235 0 4.164 1.875 3.969 4.309l.928.703c.637-3.087-1.715-6.012-4.897-6.012-2.761 0-5 2.239-5 5 0 2.049 1.236 3.806 3 4.578v-1.135z"></path></symbol><symbol id="2010" width="24" height="24" viewbox="0 0 24 24"><path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z"></path></symbol><symbol id="2152" width="24" height="24" viewbox="0 0 24 24"><path d="M10.252 23h-3.21c-.612 0-1.157-.427-1.354-1.007l-1.591-4.993h4.615l.918 3.171c.178.552.512 1.041.962 1.408.758.618.271 1.421-.34 1.421zm9.286-21.902c-1.522.617-4.525 3.739-8.252 4.639-.802 1.099-1.285 2.882-1.285 4.846 0 1.861.438 3.553 1.165 4.662 3.941.942 6.303 3.996 8.309 4.671 2.201.742 4.529-3.468 4.525-9.422-.003-5.959-2.471-10.202-4.462-9.396zm1.704 15.472c-.719 1.656-1.987 1.685-2.72.001-.436-1.002-.731-2.772-.892-3.961h.38c1.174 0 2.125-.954 2.125-2.131s-.951-2.132-2.125-2.132h-.39c.16-1.21.538-2.947.974-3.89.764-1.652 1.941-1.68 2.72-.001 1.315 2.838 1.368 8.794-.072 12.114zm-12.435-1.57h-4.371c-2.452 0-4.436-2.047-4.436-4.5s1.984-4.5 4.436-4.5h4.444c-.561 1.3-.876 2.887-.876 4.594 0 1.627.29 3.141.803 4.406z"></path></symbol><symbol id="18486" width="24" height="24" viewbox="0 0 24 24"><path d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802z"></path></symbol><symbol id="2026" width="24" height="24" viewbox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"></path></symbol><symbol id="2204" width="24" height="24" viewbox="0 0 24 24"><path d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm5.8-7v-2h-21v15h2v-13h19zm3 2v14h-20v-14h20zm-2 2h-16v10h16v-10z"></path></symbol><symbol id="2007" width="24" height="24" viewbox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2-14h4v1h-4v-1zm0-1v-1h4v1h-4zm4 6h4l-6 6-6-6h4v-3h4v3z"></path></symbol><symbol id="2014" width="24" height="24" viewbox="0 0 24 24"><path d="M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z"></path></symbol><symbol id="13572" width="24" height="24" viewbox="0 0 24 24"><path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z"></path></symbol><symbol id="31709" width="24" height="24" viewbox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"></path></symbol><symbol id="35348" width="24" height="24" viewbox="0 0 24 24"><path d="M11.383 15.941l-3.758 8.059-.967-2.658-2.658.968 3.517-7.541c.678.216 1.137.162 1.849.162.744.513 1.072.844 2.017 1.01zm3.252-1.009c-.738.506-1.049.831-1.994 1.004l3.759 8.064.967-2.658 2.633.968-3.495-7.549c-.686.222-1.146.171-1.87.171zm-2.635-11.932c-2.205 0-4 1.795-4 4s1.795 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zm6.926 5.278c.051.146.074.296.074.445 0 .449-.222.883-.615 1.156-1.256.87-1.09.651-1.562 2.067-.198.591-.77.99-1.414.99h-.004c-1.549-.005-1.279-.088-2.528.789-.262.183-.569.275-.877.275s-.615-.092-.876-.275c-1.249-.878-.98-.794-2.528-.789h-.004c-.645 0-1.216-.399-1.413-.99-.473-1.417-.311-1.198-1.562-2.067-.395-.274-.617-.708-.617-1.157 0-.148.024-.298.074-.444.483-1.411.484-1.139 0-2.555-.05-.147-.074-.297-.074-.445 0-.45.222-.883.616-1.157 1.251-.868 1.089-.648 1.562-2.067.197-.591.769-.99 1.413-.99h.004c1.545.005 1.271.095 2.528-.79.262-.182.569-.274.877-.274s.615.091.876.274c1.249.878.98.795 2.528.79h.004c.645 0 1.216.399 1.414.99.473 1.416.307 1.197 1.562 2.067.394.274.616.707.616 1.156 0 .148-.023.299-.074.445-.483 1.411-.485 1.139 0 2.556zm-1.926-1.278c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5s2.239 5 5 5c2.762 0 5-2.238 5-5z"></path></symbol><symbol id="2012" width="24" height="24" viewbox="0 0 24 24"><path d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-9 9h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm7-4c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm0 4c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm-2-2c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm4 0c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm-10 8c-1.104 0-2 .895-2 2s.896 2 2 2 2-.895 2-2-.896-2-2-2zm6 0c-1.104 0-2 .895-2 2s.896 2 2 2 2-.895 2-2-.896-2-2-2z"></path></symbol><symbol id="2016" width="24" height="24" viewbox="0 0 24 24"><path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z"></path></symbol><symbol id="2015" width="24" height="24" viewbox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"></path></symbol><symbol id="2184" x="0px" y="0px" width="24px" height="24px" viewbox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M12,0C7.029,0,3,4.03,3,9s4.029,9,9,9c4.971,0,9-4.03,9-9S16.971,0,12,0z M16.298,15.137
            c-0.079-0.395-0.177-0.783-0.299-1.166c0.673-0.607,0.646-1.647-0.054-2.162c0.436-1.739,0.457-3.636-0.002-5.465
            c0.139-0.083,0.261-0.191,0.354-0.319c1.101,0.309,2.124,0.8,3.04,1.434C19.443,7.956,19.5,8.471,19.5,9
            C19.5,11.537,18.23,13.779,16.298,15.137z M4.5,9c0-0.642,0.09-1.261,0.242-1.856c0.523-0.033,1.044-0.03,1.61,0.024l0.03,0.169
            C5.691,7.918,5.07,8.583,4.518,9.342L4.5,9z M6.887,8.107c0.636,0.482,1.562,0.327,1.997-0.368c2.174,0.795,4.005,2.308,5.205,4.25
            c-0.575,0.581-0.567,1.497,0.015,2.021c-0.512,0.924-1.162,1.758-1.919,2.48c-3.678,0.087-6.693-2.446-7.477-5.773
            C5.285,9.731,6.022,8.848,6.887,8.107z M9.052,6.682c1.493-0.73,3.116-1.074,4.743-1.033c0.229,0.458,0.697,0.807,1.249,0.875h0.005
            c0.417,1.618,0.438,3.354,0.021,5.025l-0.168,0.017C13.609,9.447,11.578,7.717,9.08,6.84L9.052,6.682z M13.598,16.325
            c0.527-0.613,0.983-1.271,1.36-1.972l0.203-0.006c0.129,0.422,0.229,0.854,0.306,1.297C14.885,15.95,14.258,16.182,13.598,16.325z
             M18.926,6.126c-0.758-0.42-1.557-0.752-2.393-0.983c-0.081-0.746-0.78-1.368-1.59-1.362C14.529,3.017,14.02,2.3,13.427,1.64
            C15.917,2.122,17.973,3.837,18.926,6.126z M14.07,4.095c-0.191,0.165-0.332,0.386-0.393,0.645c-1.842-0.022-3.585,0.395-5.137,1.174
            C7.904,5.434,6.99,5.597,6.559,6.274C6.012,6.218,5.523,6.206,5.041,6.221C6.147,3.458,8.847,1.5,12,1.5h0.001
            C12.823,2.245,13.525,3.12,14.07,4.095z"></path></symbol><symbol id="18544" width="24" height="24" viewbox="0 0 24 24"><path d="M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z"></path></symbol><symbol id="2025" width="24" height="24" viewbox="0 0 24 24"><path d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z"></path></symbol><symbol id="2027" width="24" height="24" viewbox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.894 14.992c.485-.514 1.154-.832 1.894-.832s1.408.318 1.894.832l-1.894 2.008-1.894-2.008zm-.874-.927c.709-.751 1.688-1.215 2.768-1.215s2.059.465 2.768 1.216l1.164-1.236c-1.006-1.067-2.396-1.727-3.932-1.727s-2.926.66-3.932 1.727l1.164 1.235zm-2.038-2.163c1.23-1.304 2.929-2.11 4.806-2.11s3.576.807 4.806 2.111l1.194-1.267c-1.535-1.629-3.656-2.636-6-2.636s-4.465 1.007-6 2.636l1.194 1.266z"></path></symbol><symbol id="2164" width="24" height="24" viewbox="0 0 24 24"><path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z"></path></symbol><symbol id="13571" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 21h-9v-2h9v2zm6.695-2.88l-3.314-3.13-1.381 1.47 4.699 4.54 8.301-8.441-1.384-1.439-6.921 7zm-6.695-1.144h-9v-2h9v2zm8-3.976h-17v-2h17v2zm7-4h-24v-2h24v2zm0-4h-24v-2h24v2z"></path></symbol><symbol id="2019" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"></path></symbol><symbol id="2023" width="24" height="24" viewbox="0 0 24 24"><path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z"></path></symbol><symbol id="32471" width="24" height="24" viewbox="0 0 24 24"><path d="M10.452 2l8.271 8.265-5.431 5.279-8.292-8.314v-5.23h5.452zm.828-2h-8.28v8.058l10.271 10.296 8.302-8.07-10.293-10.284zm-1.72 6.559c-.585.585-1.535.585-2.12 0-.586-.584-.586-1.533 0-2.118.585-.585 1.535-.585 2.12 0 .586.584.586 1.533 0 2.118zm11.01 7.407l1.43 1.409-8.688 8.625-10.312-10.317v-2.833l10.349 10.291 7.221-7.175z"></path></symbol><symbol id="20419" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.405 14.899c1.974 2.021 4.28 3.15 7.095 3.15 5.243 0 9.5-4.256 9.5-9.5 0-3.04-1.25-5.209-3.198-7.14l1.409-1.409c2.306 2.098 3.779 5.119 3.789 8.48.016 5.844-4.357 10.689-10 11.44v.08c0 1.875 1.526 3 3 3h1v1h-11v-1h1c1.499 0 3-1.151 3-3v-.071c-2.755-.351-5.208-1.679-7-3.626l1.405-1.404zm-1.405-6.299c0-4.695 3.805-8.5 8.5-8.5 4.688 0 8.5 3.799 8.5 8.5 0 4.695-3.806 8.499-8.5 8.499-4.695 0-8.5-3.806-8.5-8.499m8.883-7.064c-.163.005-.278.187-.404.291-.252.209-.897.619-1.257.494-.368-.126-1.155.468-1.281.473-.047.001.002-.45.253-.483-.109.016.883-.501.856-.609-.032-.128-1.982.582-1.895.725.041.065.211.065-.012.208-.127.077-.264.567-.384.567-.357.156-.38-.307-.777.29l-.634.256c-.94.998-1.591 2.264-1.827 3.67-.009.057.237.16.268.199.08.095.08.505.119.638.098.339.339.527.524.835.109.184.29.648.233.84.077-.126.759.578.883.724.293.346.52.763.043 1.104-.154.111.233.8.034.97l-.257.065c-.252.155-.138.536.016.696 1.288 1.347 3.103 2.186 5.114 2.186 3.907 0 7.075-3.168 7.075-7.075 0-.734-.125-1.474-.253-1.864-.04-.123-.134-.222-.254-.268-.182-.07-.948.422-1.063.18l-.405.005c-.085-.046-.321-.364-.429-.326-.219.08.336.683.487.763.142-.108.603-.329.703-.027.19.569-.522 1.193-.886 1.523-.544.491-.443-.319-.813-.604-.195-.149-.193-.468-.389-.578-.084-.047-.452-.468-.486-.564l-.002-.012.002.012-.013.105c-.067.052-.208-.189-.224-.227 0 .209.341.542.453.709.191.287.294.705.529.94.126.126.609.647.734.636l.645-.307c.456.108-1.073 2.271-1.218 2.538-.12.226.096.78.08 1.046-.021.306-.262.406-.491.572-.246.18-.188.528-.394.655-.366.226-.63.959-1.149.955-.154 0-.808.255-.894.005-.066-.181-.156-.319-.25-.498-.091-.175-.01-.357-.122-.512-.078-.108-.336-.352-.359-.48-.002-.109.083-.443.198-.502.163-.082.031-.324.011-.464-.034-.251-.189-.458-.376-.603-.275-.212-.132-.38-.068-.683 0-.144-.088-.333-.283-.277-.399.117-.277-.312-.568-.292-.21.014-.382.148-.577.206-.245.074-.496-.057-.738-.088-.997-.126-1.322-1.265-1.062-2.087l-.034-.488c.112-.25.341-.529.54-.718.112-.107.255-.08.387-.162.204-.128.207-.392.405-.553.284-.231.67-.226 1.041-.275.196-.027.946-.189 1.064-.043 0 .027.128.408-.002.407l-.012-.001.012.001c.306.027.736.528 1.023.409.15-.062.095-.522.403-.299.184.133 1.016.192 1.189.049.107-.088.167-.659.036-.723.082.082-.431.088-.48.069-.081-.03-.156.071-.282.026l-.013-.005c.039.015-.452-.262-.16-.475l-.382.076-.09.193c-.214.11-.376-.371-.456-.425-.082-.054-.718-.5-.545-.209l.559.556c-.028.018-.147-.202-.147-.041.037-.095.013.41-.074.245l.004-.189c0-.061-.161-.119-.193-.16-.088-.11-.324-.352-.451-.41-.035-.017-.541.061-.584.078l-.127.22c-.105.039-.203.089-.296.151l-.111.25c-.049.043-.542.206-.545.212.021-.053-.345-.121-.321-.227.027-.117.151-.482.119-.615-.034-.14.761.201.813-.167.02-.159.031-.345-.223-.372.048.006.492-.174.566-.255.103-.119.341-.314.513-.314.201 0 .157-.292.25-.436.093.038-.05.267.062.36-.008-.073.315.039.346.023.075-.04.485-.016.421-.21-.071-.196.036-.138.129-.179-.016.006.24-.438.284-.292-.03-.15-.298.052-.391.045-.216-.018-.125-.368-.043-.472.063-.081-.172-.18-.175-.025-.004.233-.221.444-.171.754.077.467-.521-.112-.573-.081-.198.12-.36-.151-.258-.315l.462-.337c.074-.126.159-.272.273-.368.379-.318.483-.063.861-.029.369.034.124.088.074.23-.049.135.203.183.29.07.049-.065.163-.229.211-.35.063-.157.638-.139.237-.38-.265-.157-1.42-.476-2.194-.476l-.007.001zm.427 4.351c-.025-.047.242-.071.289-.071.053.006-.137.319-.289.071m1.803-1.092c-.003-.104-.134-.201-.27-.022-.095.124-.078.312-.129.395-.075.124.401.24.401.123.018-.197.519-.045.617-.018.175.048.455-.16.149-.27-.253-.092-.385-.189-.407-.37 0 0 .134-.124.075-.117-.155.018-.436.556-.436.279m-3.327-1.084l.077-.021-.037.096c.061.11.016.175.006.235l-.105.065c-.038.047.182.054.185.06.008.024-.266.063-.215.121.067.097.583-.138.501-.124.159-.08.021-.089-.068-.135-.031-.152-.056-.387-.151-.482l.062-.071c-.146-.212-.255.256-.255.256m-.365.386c-.06.025-.12-.013-.061-.073l.062-.075-.006-.034.049-.062.051-.013.105-.073c.031.006.104.066.079.104l-.057.07c-.012.118-.132.117-.22.156h-.004.002"></path></symbol><symbol id="2018" width="24" height="24" viewbox="0 0 24 24"><path d="M10.187 9.125l1.831 1.832c.199.918-1.131 2.264-2.061 2.061l-1.832-1.832c-.083.284-.125.577-.125.871 0 .779.295 1.556.889 2.15.656.656 1.537.951 2.396.884.453-.034.899.131 1.222.452l2.033 2.034c.28.282.649.423 1.018.423.809 0 1.459-.663 1.442-1.472-.009-.358-.149-.714-.422-.988l-2.034-2.034c-.321-.322-.487-.769-.452-1.222.066-.858-.229-1.739-.885-2.395-.595-.595-1.372-.889-2.15-.889-.293 0-.586.042-.87.125zm5.841 7.417c0 .269-.219.486-.486.486-.269 0-.486-.218-.486-.486s.218-.485.486-.485.486.217.486.485zm-9.944-12.542c1.379 1.612 2.576 3 4.916 3h11v13h-20v-16h4.084zm.916-2h-7v20h24v-17h-13c-1.629 0-2.305-1.058-4-3z"></path></symbol><symbol id="13570" width="24" height="24" viewbox="0 0 24 24"><path d="M10 20v-6l5 3-5 3zm14-15.625l-.008-.042-1.008-4.333-21.169 4.196c-1.054.209-1.815 1.134-1.815 2.207v14.597c0 1.657 1.343 3 3 3h18c1.656 0 3-1.343 3-3v-14h-12.734l12.734-2.625zm-3.89-2.618l2.396 1.604-2.994.595-2.398-1.605 2.996-.594zm-5.897 1.169l2.399 1.606-2.993.595-2.402-1.607 2.996-.594zm-5.905 1.171l2.403 1.608-2.993.595-2.406-1.61 2.996-.593zm2.538 3.903l-2.039 2h-3.054l2.039-2h3.054zm8.978 0h3.054l-2.038 2h-3.055l2.039-2zm-6.012 0h3.053l-2.039 2h-3.053l2.039-2zm8.188 4v8.75c0 .69-.56 1.25-1.25 1.25h-17.5c-.69 0-1.25-.56-1.25-1.25v-8.75h20z"></path></symbol></svg>            
                            
	
						<div class="nav-ad-plus-leader placeholder">
				


        <div data-ad="nav-ad-plus-leader" data-ad-container="65a9752357eda" class="ad-nav-ad-plus-leader ad-slot skybox-closeBtn skybox-collapseBtn ">
    </div>

			</div>
			
            
                            


																		



                                                




<nav id="header-nav" data-component="headerNav">
	<div class="container">
		<div class="zd-logo header-link-tracking-taggy">
			<a href="https://www.zdnet.com/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "Header-Logo", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-logo" data-cohesion-location="" aria-label="Go to the home page">
            <svg class=" logo">
        <use xlink:href="#logo"></use>
    </svg>

				    <svg class=" logo-horizontal">
        <use xlink:href="#logo-horizontal"></use>
    </svg>

			</a>
		</div>
		<div class="nav-shelves">
			<div class="topic-shelf">
				<ul class="nav-bar-items">

					

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Trending</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column large">
					<li>
				
																	

									<a href="/article/ces-2024-3-trends-to-watch/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|ces-2024:-3-trends-to-watch-as-we-learn-whats-next-in-tech", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|ces-2024:-3-trends-to-watch-as-we-learn-whats-next-in-tech" data-cohesion-location="">
						CES 2024: 3 trends to watch as we learn what's next in tech
											</a>
							</li>
					<li>
				
																	

									<a href="/article/zdnet-2023-product-of-the-year-meta-quest-3/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|zdnets-product-of-the-year:-meta-quest-3-is-the-quiet-shocker-of-2023", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|zdnets-product-of-the-year:-meta-quest-3-is-the-quiet-shocker-of-2023" data-cohesion-location="">
						ZDNET's product of the year: Meta Quest 3 is the quiet shocker of 2023
											</a>
							</li>
					<li>
				
																	

									<a href="/article/have-10-hours-ibm-will-train-you-in-ai-fundamentals-for-free/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|have-10-hours?-ibm-will-train-you-in-ai-fundamentals---for-free", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|have-10-hours?-ibm-will-train-you-in-ai-fundamentals---for-free" data-cohesion-location="">
						Have 10 hours? IBM will train you in AI fundamentals - for free
											</a>
							</li>
					<li>
				
																	

									<a href="/article/two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade" data-cohesion-location="">
						Two breakthroughs made 2023 tech's most innovative year in over a decade
											</a>
							</li>
					<li>
				
																	

									<a href="/article/these-are-the-windows-11-apps-i-use-and-the-ones-i-dump/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|which-windows-apps-to-keep-(and-which-to-dump)", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|which-windows-apps-to-keep-(and-which-to-dump)" data-cohesion-location="">
						Which Windows apps to keep (and which to dump)
											</a>
							</li>
					<li>
				
																	

									<a href="/article/7-cool-and-useful-things-to-do-with-your-flipper-zero/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|7-useful-things-to-do-with-your-flipper-zero", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|7-useful-things-to-do-with-your-flipper-zero" data-cohesion-location="">
						7 useful things to do with your Flipper Zero
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="/article/apple-watch-series-9-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|the-apple-watch-to-buy-this-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|the-apple-watch-to-buy-this-year" data-cohesion-location="">
						The Apple Watch to buy this year
											</a>
							</li>
					<li>
				
																	

									<a href="/article/meta-ray-ban-smart-glasses-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|metas-$299-ray-ban-smart-glasses-may-be-the-most-useful-gadget-ive-tested-all-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|metas-$299-ray-ban-smart-glasses-may-be-the-most-useful-gadget-ive-tested-all-year" data-cohesion-location="">
						Meta's $299 Ray-Ban smart glasses may be the most useful gadget I've tested all year
											</a>
							</li>
					<li>
				
																	

									<a href="/article/iphone-15-pro-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|iphone-15-pro-review:-who-this-upgrade-will-wow", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|iphone-15-pro-review:-who-this-upgrade-will-wow" data-cohesion-location="">
						iPhone 15 Pro review: Who this upgrade will wow
											</a>
							</li>
					<li>
				
																	

									<a href="/article/samsung-galaxy-s23-ultra-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|samsung-galaxy-s23-ultra-review:-one-of-the-best-smartphones-of-the-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|samsung-galaxy-s23-ultra-review:-one-of-the-best-smartphones-of-the-year" data-cohesion-location="">
						Samsung Galaxy S23 Ultra review: One of the best smartphones of the year
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/sonos-era-300-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|sonos-era-300-review:-close-to-a-perfect-smart-speaker", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|sonos-era-300-review:-close-to-a-perfect-smart-speaker" data-cohesion-location="">
						Sonos Era 300 review: Close to a perfect smart speaker
											</a>
							</li>
					<li>
				
																	

									<a href="/article/i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected" data-cohesion-location="">
						I tried Apple Vision Pro and it's far ahead of where I expected
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="/article/best-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-laptops" data-cohesion-location="">
						Best laptops
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-vpns" data-cohesion-location="">
						Best VPNs
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-tvs" data-cohesion-location="">
						Best TVs
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-headphones" data-cohesion-location="">
						Best Headphones
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/kitchen-household/best-robot-vacuum/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-robot-vacuums", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-robot-vacuums" data-cohesion-location="">
						Best robot vacuums
											</a>
							</li>
					<li>
				
																	

									<a href="/zdnet-recommends/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|zdnet-recommends", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|zdnet-recommends" data-cohesion-location="">
						ZDNET Recommends
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>
											

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Tech</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/gaming/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|gaming", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|gaming" data-cohesion-location="">
						Gaming
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|headphones" data-cohesion-location="">
						Headphones
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/laptops/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|laptops" data-cohesion-location="">
						Laptops
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/mobile-accessories/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|mobile-accessories", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|mobile-accessories" data-cohesion-location="">
						Mobile Accessories
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/networking/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|networking", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|networking" data-cohesion-location="">
						Networking
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/pcs/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|pcs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|pcs" data-cohesion-location="">
						PCs
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/printers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|printers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|printers" data-cohesion-location="">
						Printers
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/smartphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smartphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smartphones" data-cohesion-location="">
						Smartphones
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/smart-watches/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-watches", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-watches" data-cohesion-location="">
						Smart Watches
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/speakers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|speakers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|speakers" data-cohesion-location="">
						Speakers
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/streaming-devices/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|streaming-devices", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|streaming-devices" data-cohesion-location="">
						Streaming Devices
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/video-streaming-services/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|video-streaming-services", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|video-streaming-services" data-cohesion-location="">
						Streaming Services
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/tablets/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|tablets" data-cohesion-location="">
						Tablets
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/tvs/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|tvs" data-cohesion-location="">
						TVs
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/wearables/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|wearables", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|wearables" data-cohesion-location="">
						Wearables
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
													
																	

									<a href="/topic/kitchen-household/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|kitchen-household", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|kitchen-household" data-cohesion-location="">
						Kitchen &amp; Household
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/office-furniture/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|office-furniture", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|office-furniture" data-cohesion-location="">
						Office Furniture
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/office-hardware-appliances/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|office-hardware-appliances", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|office-hardware-appliances" data-cohesion-location="">
						Office Hardware &amp; Appliances
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/smart-home/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-home", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-home" data-cohesion-location="">
						Smart Home
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/smart-lighting/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-lighting", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-lighting" data-cohesion-location="">
						Smart Lighting
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/yard-outdoors/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|yard-outdoors", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|yard-outdoors" data-cohesion-location="">
						Yard &amp; Outdoors
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>											

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Innovation</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/artificial-intelligence/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|artificial-intelligence", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|artificial-intelligence" data-cohesion-location="">
						Artificial Intelligence
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/ar-vr/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|ar-vr", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|ar-vr" data-cohesion-location="">
						AR + VR
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/cloud/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|cloud", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|cloud" data-cohesion-location="">
						Cloud
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/digital-transformation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|digital-transformation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|digital-transformation" data-cohesion-location="">
						Digital Transformation
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/energy/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|energy", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|energy" data-cohesion-location="">
						Energy
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/robotics/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|robotics", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|robotics" data-cohesion-location="">
						Robotics
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/sustainability/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|sustainability", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|sustainability" data-cohesion-location="">
						Sustainability
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/transportation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|transportation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|transportation" data-cohesion-location="">
						Transportation
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/work-life/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|work-life", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|work-life" data-cohesion-location="">
						Work Life
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="https://www.zdnet.com/accelerate-your-tech-game/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|accelerate-your-tech-game", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|accelerate-your-tech-game" data-cohesion-location="">
						Accelerate your tech game <small>Paid Content</small>
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/how-the-new-space-race-will-drive-innovation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|how-the-new-space-race-will-drive-innovation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|how-the-new-space-race-will-drive-innovation" data-cohesion-location="">
						How the New Space Race Will Drive Innovation
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/how-the-metaverse-will-change-the-future-of-work-and-society/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|how-the-metaverse-will-change-the-future-of-work-and-society", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|how-the-metaverse-will-change-the-future-of-work-and-society" data-cohesion-location="">
						How the metaverse will change the future of work and society
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/managing-the-multicloud/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|managing-the-multicloud", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|managing-the-multicloud" data-cohesion-location="">
						Managing the Multicloud
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/the-future-of-the-internet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-future-of-the-internet", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-future-of-the-internet" data-cohesion-location="">
						The Future of the Internet
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/the-new-rules-of-work/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-new-rules-of-work", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-new-rules-of-work" data-cohesion-location="">
						The New Rules of Work
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/the-tech-trends-to-watch-in-2023/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-tech-trends-to-watch-in-2023", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-tech-trends-to-watch-in-2023" data-cohesion-location="">
						The Tech Trends to Watch in 2023
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>											

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Business</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/business/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|business", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|business" data-cohesion-location="">
						See all Business
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/amazon/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|amazon", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|amazon" data-cohesion-location="">
						Amazon
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/apple/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|apple", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|apple" data-cohesion-location="">
						Apple
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/developer/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|developer", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|developer" data-cohesion-location="">
						Developer
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/e-commerce/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|e-commerce", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|e-commerce" data-cohesion-location="">
						E-Commerce
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/edge-computing/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|edge-computing", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|edge-computing" data-cohesion-location="">
						Edge Computing
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/enterprise-software/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|enterprise-software", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|enterprise-software" data-cohesion-location="">
						Enterprise Software
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/executive/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|executive", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|executive" data-cohesion-location="">
						Executive
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/google/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|google", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|google" data-cohesion-location="">
						Google
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/microsoft/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|microsoft", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|microsoft" data-cohesion-location="">
						Microsoft
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/professional-development/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|professional-development", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|professional-development" data-cohesion-location="">
						Professional Development
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/social-media/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|social-media", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|social-media" data-cohesion-location="">
						Social Media
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/smb/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|smb", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|smb" data-cohesion-location="">
						SMB
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/windows/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|windows", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|windows" data-cohesion-location="">
						Windows
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/digital-transformation-trends-and-insights-for-success/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|digital-transformation-trends-and-insights-for-success", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|digital-transformation-trends-and-insights-for-success" data-cohesion-location="">
						Digital transformation: Trends and insights for success
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/software-development-emerging-trends-and-changing-roles/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|software-development-emerging-trends-and-changing-roles", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|software-development-emerging-trends-and-changing-roles" data-cohesion-location="">
						Software development: Emerging trends and changing roles
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>											

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Security</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column ">
			</ul>
		<ul class="panel-column ">
			</ul>
		<ul class="panel-column ">
					<li>
													
																	

									<a href="/topic/security/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|security", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|security" data-cohesion-location="">
						See all Security
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/cyber-threats/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cyber-threats", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cyber-threats" data-cohesion-location="">
						Cyber Threats
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/password-manager/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|password-manager", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|password-manager" data-cohesion-location="">
						Password Manager
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/ransomware/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|ransomware", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|ransomware" data-cohesion-location="">
						Ransomware
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|vpn", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|vpn" data-cohesion-location="">
						VPN
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/cybersecurity-lets-get-tactical/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cybersecurity-lets-get-tactical", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cybersecurity-lets-get-tactical" data-cohesion-location="">
						Cybersecurity: Let's get tactical
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/cybersecurity-lets-get-tactical/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cybersecurity-lets-get-tactical", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cybersecurity-lets-get-tactical" data-cohesion-location="">
						Securing the Cloud
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>											

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Advice</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column large">
			</ul>
		<ul class="panel-column large">
			</ul>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="https://www.zdnet.com/deals/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|deals", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|deals" data-cohesion-location="">
						Deals
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/how-to/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|how-to", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|how-to" data-cohesion-location="">
						How-to
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/product-comparisons/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|product-comparisons", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|product-comparisons" data-cohesion-location="">
						Product Comparisons
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/product-spotlights/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|product-spotlights", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|product-spotlights" data-cohesion-location="">
						Product Spotlights
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/reviews/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|reviews", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|reviews" data-cohesion-location="">
						Reviews
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>					
          

<li class="topic-menu header-link-tracking-taggy">
			<a data-item="trigger">
			<span>Buying Guides</span>
		</a>
		<div class="dropdown-content">
		<div class="container">
			
	<ul class="panel-column ">
					<li>
				
																	

									<a href="/best-products/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|see-all-buying-guides", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|see-all-buying-guides" data-cohesion-location="">
						See all Buying Guides
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-all-in-one-computer/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-all-in-one-computers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-all-in-one-computers" data-cohesion-location="">
						Best all-in-one computers
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-budget-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-budget-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-budget-tvs" data-cohesion-location="">
						Best budget TVs
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-gaming-cpu/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-cpus", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-cpus" data-cohesion-location="">
						Best gaming CPUs
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-gaming-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-laptops" data-cohesion-location="">
						Best gaming laptops
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-gaming-pc/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-pcs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-pcs" data-cohesion-location="">
						Best gaming PCs
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="/article/best-headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-headphones" data-cohesion-location="">
						Best headphones
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-ipad/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-ipads", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-ipads" data-cohesion-location="">
						Best iPads
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-iphone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-iphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-iphones" data-cohesion-location="">
						Best iPhones
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-laptops" data-cohesion-location="">
						Best laptops
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-large-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-large-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-large-tablets" data-cohesion-location="">
						Best large tablets
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-oled-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-oled-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-oled-tvs" data-cohesion-location="">
						Best OLED TVs
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="/home-and-office/kitchen-household/best-robot-vacuum-mop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-robot-vacuum-mops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-robot-vacuum-mops" data-cohesion-location="">
						Best robot vacuum mops
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-rugged-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-rugged-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-rugged-tablets" data-cohesion-location="">
						Best rugged tablets
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-samsung-phone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-samsung-phones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-samsung-phones" data-cohesion-location="">
						Best Samsung phones
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-smart-ring/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smart-rings", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smart-rings" data-cohesion-location="">
						Best smart rings
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-phone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smartphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smartphones" data-cohesion-location="">
						Best smartphones
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-smartwatch/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smartwatches", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smartwatches" data-cohesion-location="">
						Best smartwatches
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column large">
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-speakers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-speakers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-speakers" data-cohesion-location="">
						Best speakers
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-tablets" data-cohesion-location="">
						Best tablets
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-travel-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-travel-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-travel-vpns" data-cohesion-location="">
						Best travel VPNs
											</a>
							</li>
					<li>
				
																	

									<a href="/home-and-office/home-entertainment/best-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-tvs" data-cohesion-location="">
						Best TVs
											</a>
							</li>
					<li>
				
																	

									<a href="/article/best-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-vpns" data-cohesion-location="">
						Best VPNs
											</a>
							</li>
					<li>
				
																	

									<a href="https://coupons.cnet.com/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-coupons", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-coupons" data-cohesion-location="" rel="noopener noreferrer" target="_blank" data-component="externalLink">
						Best Coupons
											</a>
							</li>
			</ul>
			</div>
	</div>
</li>
				</ul>
			</div>
			<div class="icon-shelf">
				<ul class="nav-bar-items">
          <li class="spacer">
					<li class="slogan">
						<a href="/about/" data-cohesion-track="elementClicked" data-cohesion-element-type="header-about" data-cohesion-location="" data-vanity-rewritten="true">
							<span>tomorrow</span> <span>belongs to those who embrace it</span> <span>today</span>
						</a>
					</li>
					<li class="editions header-link-tracking-taggy" data-component="dropdown">
						<a data-item="trigger" class="icon" data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu" data-cohesion-location="">
							<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1166 22.4959C10.2925 22.6549 10.4742 22.7975 10.6597 22.9192C5.21675 22.258 1 17.6214 1 12C1 12.2761 1.22386 12.5 1.5 12.5H6.63043C6.70062 15.7182 7.44359 18.3424 8.42097 20.2014C8.93405 21.1773 9.51853 21.9552 10.1166 22.4959ZM6.63043 11.5H1.5C1.22386 11.5 1 11.7239 1 12C1 6.37856 5.21675 1.742 10.6597 1.08083C10.4742 1.20254 10.2925 1.34509 10.1166 1.50411C9.51853 2.04484 8.93405 2.82266 8.42097 3.79858C7.44359 5.65764 6.70062 8.28181 6.63043 11.5ZM7.63068 11.5C7.7007 8.43016 8.41024 5.96793 9.3061 4.26392C9.77879 3.36484 10.2966 2.68953 10.7873 2.24589C11.2882 1.79305 11.7105 1.625 12 1.625C12.2895 1.625 12.7118 1.79305 13.2127 2.24589C13.7034 2.68953 14.2212 3.36484 14.6939 4.26392C15.5898 5.96793 16.2993 8.43016 16.3693 11.5H12H7.63068ZM7.63068 12.5H12H16.3693C16.2993 15.5698 15.5898 18.0321 14.6939 19.7361C14.2212 20.6352 13.7034 21.3105 13.2127 21.7541C12.7118 22.207 12.2895 22.375 12 22.375C11.7105 22.375 11.2882 22.207 10.7873 21.7541C10.2966 21.3105 9.77879 20.6352 9.3061 19.7361C8.41024 18.0321 7.7007 15.5698 7.63068 12.5ZM17.3696 12.5C17.2994 15.7182 16.5564 18.3424 15.579 20.2014C15.0659 21.1773 14.4815 21.9552 13.8834 22.4959C13.7075 22.6549 13.5258 22.7975 13.3403 22.9192C18.7832 22.258 23 17.6214 23 12C23 6.37856 18.7832 1.742 13.3403 1.08083C13.5258 1.20254 13.7075 1.34509 13.8834 1.50411C14.4815 2.04484 15.0659 2.82266 15.579 3.79858C16.5564 5.65764 17.2994 8.28181 17.3696 11.5H22.5C22.7761 11.5 23 11.7239 23 12C23 12.2761 22.7761 12.5 22.5 12.5H17.3696ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"></path>
</svg>
						</a>
						<div class="dropdown-content" data-component="editionToggler">

														
							
							                															                															                															                															                															                															
							
							                															                															                															                															
							
							<div class="container">
								
	<ul class="panel-column large">
			</ul>
		<ul class="panel-column small">
			</ul>
		<ul class="panel-column ">
					<li>
				
								

									<span data-edition="as" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|asia", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|asia" data-cohesion-location="">
						Asia
					</span>
							</li>
					<li>
				
								

									<span data-edition="au" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|australia", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|australia" data-cohesion-location="">
						Australia
					</span>
							</li>
					<li>
				
								

									<span data-edition="eu" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|europe", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|europe" data-cohesion-location="">
						Europe
					</span>
							</li>
					<li>
				
								

									<span data-edition="in" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|india", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|india" data-cohesion-location="">
						India
					</span>
							</li>
					<li>
				
								

									<span data-edition="uk" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|united-kingdom", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|united-kingdom" data-cohesion-location="">
						United Kingdom
					</span>
							</li>
					<li>
				
								

									<span data-edition="us" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|united-states", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|united-states" data-cohesion-location="">
						United States
					</span>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
								

									<a href="https://www.zdnet.fr/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|zdnet-france", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|zdnet-france" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-component="externalLink">
						ZDNET France
											</a>
							</li>
					<li>
				
								

									<a href="https://www.zdnet.de/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|zdnet-germany", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|zdnet-germany" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-component="externalLink">
						ZDNET Germany
											</a>
							</li>
					<li>
				
								

									<a href="https://www.zdnet.co.kr/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|zdnet-korea", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|zdnet-korea" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-component="externalLink">
						ZDNET Korea
											</a>
							</li>
					<li>
				
								

									<a href="https://japan.zdnet.com/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-editionsmenu|zdnet-japan", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-editionsmenu|zdnet-japan" data-cohesion-location="">
						ZDNET Japan
											</a>
							</li>
			</ul>
								</div>
						</div>
					</li>
					<li class="header-link-tracking-taggy" data-smart-search-options='{"smartSearchXhr":"\/search\/xhr\/smart-search\/","trendingContentXhr":"\/search\/xhr\/smart-search-trending-content\/"}' data-component='["dropdown","smartSearch"]'>
						<a data-item="trigger" class="icon" data-cohesion-track="elementClicked" data-cohesion-element-type="header-search" data-cohesion-location="">
							    <svg class=" mag">
        <use xlink:href="#mag"></use>
    </svg>

						</a>
						<div class="dropdown-content search">
			                
<div class="search-overlay-container">
    <form class="header-search" method="get" action="https://www.zdnet.com/search/">
        <label for="header-search-field" class="hidden">What are you looking for?</label>
        <input type="search" id="header-search-field" title="query" autocomplete="off" placeholder="What are you looking for?" tabindex="1" name="q" value="" class="smart-search-input">
        <button type="submit" class="search-button" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "Header-Search", "pageType": "meet_the_team"}'>
            Go
                <svg class=" arrow-thin">
        <use xlink:href="#arrow-thin"></use>
    </svg>

        </button>
    </form>

    <div class="smart-search-results">
        <div class="smart-search-results-list hidden"></div>
        <div class="smart-search-trending-content hidden"></div>
    </div>
</div>						</div>
					</li>

					<li class="desktop-only header-link-tracking-taggy" data-component="dropdown">
						<a data-item="trigger" class="icon" data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu" data-cohesion-location="">
							<svg viewbox="0 0 25 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7368 1H15.7368V9H23.7368V1ZM15.7368 0C15.1845 0 14.7368 0.447716 14.7368 1V9C14.7368 9.55229 15.1845 10 15.7368 10H23.7368C24.2891 10 24.7368 9.55228 24.7368 9V1C24.7368 0.447715 24.2891 0 23.7368 0H15.7368Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.73682 1H1.73682V9H9.73682V1ZM1.73682 0C1.18453 0 0.736816 0.447716 0.736816 1V9C0.736816 9.55229 1.18453 10 1.73682 10H9.73682C10.2891 10 10.7368 9.55228 10.7368 9V1C10.7368 0.447715 10.2891 0 9.73682 0H1.73682Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7368 15H15.7368V23H23.7368V15ZM15.7368 14C15.1845 14 14.7368 14.4477 14.7368 15V23C14.7368 23.5523 15.1845 24 15.7368 24H23.7368C24.2891 24 24.7368 23.5523 24.7368 23V15C24.7368 14.4477 24.2891 14 23.7368 14H15.7368Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.73682 15H1.73682V23H9.73682V15ZM1.73682 14C1.18453 14 0.736816 14.4477 0.736816 15V23C0.736816 23.5523 1.18453 24 1.73682 24H9.73682C10.2891 24 10.7368 23.5523 10.7368 23V15C10.7368 14.4477 10.2891 14 9.73682 14H1.73682Z"></path></svg>						</a>

						<div class="dropdown-content">
							<div class="container">
								
	<ul class="panel-column large">
			</ul>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="/topic/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|topics", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|topics" data-cohesion-location="">
						See all topics
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/finance/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|finance", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|finance" data-cohesion-location="">
						Finance
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/education/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|education", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|education" data-cohesion-location="">
						Education
											</a>
							</li>
					<li>
													
																	

									<a href="/topic/health/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|health", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|health" data-cohesion-location="">
						Health
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="https://www.zdnet.com/topic/?filter=special-features" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|special-features", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|special-features" data-cohesion-location="">
						Special Features
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/in-depth/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|zdnet-in-depth", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|zdnet-in-depth" data-cohesion-location="">
						ZDNET In Depth
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/zdnet-recommends/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|zdnet-recommends", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|zdnet-recommends" data-cohesion-location="">
						ZDNET Recommends
											</a>
							</li>
			</ul>
			<div class="divider"></div>
		<ul class="panel-column ">
					<li>
				
																	

									<a href="/newsletters/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|newsletters", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|newsletters" data-cohesion-location="" data-vanity-rewritten="true">
						Newsletters
											</a>
							</li>
					<li>
				
																	

									<a href="/video/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|videos", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|videos" data-cohesion-location="">
						Videos
											</a>
							</li>
					<li>
				
																	

									<a href="https://www.zdnet.com/editorial-guidelines/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|editorial-guidelines", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|editorial-guidelines" data-cohesion-location="">
						Editorial Guidelines
											</a>
							</li>
			</ul>
								</div>
						</div>

					</li>
					<li class="mobile-menu header-link-tracking-taggy">
						<a class="icon menu menu-toggle" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-topicnav", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-topicnav" data-cohesion-location="">
							<svg viewbox="0 0 25 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7368 1H15.7368V9H23.7368V1ZM15.7368 0C15.1845 0 14.7368 0.447716 14.7368 1V9C14.7368 9.55229 15.1845 10 15.7368 10H23.7368C24.2891 10 24.7368 9.55228 24.7368 9V1C24.7368 0.447715 24.2891 0 23.7368 0H15.7368Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.73682 1H1.73682V9H9.73682V1ZM1.73682 0C1.18453 0 0.736816 0.447716 0.736816 1V9C0.736816 9.55229 1.18453 10 1.73682 10H9.73682C10.2891 10 10.7368 9.55228 10.7368 9V1C10.7368 0.447715 10.2891 0 9.73682 0H1.73682Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7368 15H15.7368V23H23.7368V15ZM15.7368 14C15.1845 14 14.7368 14.4477 14.7368 15V23C14.7368 23.5523 15.1845 24 15.7368 24H23.7368C24.2891 24 24.7368 23.5523 24.7368 23V15C24.7368 14.4477 24.2891 14 23.7368 14H15.7368Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.73682 15H1.73682V23H9.73682V15ZM1.73682 14C1.18453 14 0.736816 14.4477 0.736816 15V23C0.736816 23.5523 1.18453 24 1.73682 24H9.73682C10.2891 24 10.7368 23.5523 10.7368 23V15C10.7368 14.4477 10.2891 14 9.73682 14H1.73682Z"></path></svg>						</a>
						
<div class="dropdown-content side-panel">
	<ul class="menu">
		<li>
			<a class="menu-toggle">
				<svg viewbox="0 0 224.512 224.512">
	<g>
		<polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  "></polygon>
	</g>
</svg>
			</a>
		</li>
											<li>
				<a class="subnav-toggle">
					Trending
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																									<li class="">
										<a href="/article/ces-2024-3-trends-to-watch/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|ces-2024:-3-trends-to-watch-as-we-learn-whats-next-in-tech", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|ces-2024:-3-trends-to-watch-as-we-learn-whats-next-in-tech" data-cohesion-location="">
											CES 2024: 3 trends to watch as we learn what's next in tech
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/zdnet-2023-product-of-the-year-meta-quest-3/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|zdnets-product-of-the-year:-meta-quest-3-is-the-quiet-shocker-of-2023", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|zdnets-product-of-the-year:-meta-quest-3-is-the-quiet-shocker-of-2023" data-cohesion-location="">
											ZDNET's product of the year: Meta Quest 3 is the quiet shocker of 2023
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/have-10-hours-ibm-will-train-you-in-ai-fundamentals-for-free/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|have-10-hours?-ibm-will-train-you-in-ai-fundamentals---for-free", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|have-10-hours?-ibm-will-train-you-in-ai-fundamentals---for-free" data-cohesion-location="">
											Have 10 hours? IBM will train you in AI fundamentals - for free
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|two-breakthroughs-made-2023-techs-most-innovative-year-in-over-a-decade" data-cohesion-location="">
											Two breakthroughs made 2023 tech's most innovative year in over a decade
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/these-are-the-windows-11-apps-i-use-and-the-ones-i-dump/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|which-windows-apps-to-keep-(and-which-to-dump)", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|which-windows-apps-to-keep-(and-which-to-dump)" data-cohesion-location="">
											Which Windows apps to keep (and which to dump)
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/7-cool-and-useful-things-to-do-with-your-flipper-zero/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|7-useful-things-to-do-with-your-flipper-zero", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|7-useful-things-to-do-with-your-flipper-zero" data-cohesion-location="">
											7 useful things to do with your Flipper Zero
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/article/apple-watch-series-9-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|the-apple-watch-to-buy-this-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|the-apple-watch-to-buy-this-year" data-cohesion-location="">
											The Apple Watch to buy this year
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/meta-ray-ban-smart-glasses-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|metas-$299-ray-ban-smart-glasses-may-be-the-most-useful-gadget-ive-tested-all-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|metas-$299-ray-ban-smart-glasses-may-be-the-most-useful-gadget-ive-tested-all-year" data-cohesion-location="">
											Meta's $299 Ray-Ban smart glasses may be the most useful gadget I've tested all year
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/iphone-15-pro-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|iphone-15-pro-review:-who-this-upgrade-will-wow", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|iphone-15-pro-review:-who-this-upgrade-will-wow" data-cohesion-location="">
											iPhone 15 Pro review: Who this upgrade will wow
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/samsung-galaxy-s23-ultra-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|samsung-galaxy-s23-ultra-review:-one-of-the-best-smartphones-of-the-year", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|samsung-galaxy-s23-ultra-review:-one-of-the-best-smartphones-of-the-year" data-cohesion-location="">
											Samsung Galaxy S23 Ultra review: One of the best smartphones of the year
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/sonos-era-300-review/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|sonos-era-300-review:-close-to-a-perfect-smart-speaker", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|sonos-era-300-review:-close-to-a-perfect-smart-speaker" data-cohesion-location="">
											Sonos Era 300 review: Close to a perfect smart speaker
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|i-tried-apple-vision-pro-and-its-far-ahead-of-where-i-expected" data-cohesion-location="">
											I tried Apple Vision Pro and it's far ahead of where I expected
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/article/best-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-laptops" data-cohesion-location="">
											Best laptops
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-vpns" data-cohesion-location="">
											Best VPNs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/best-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-tvs" data-cohesion-location="">
											Best TVs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-headphones" data-cohesion-location="">
											Best Headphones
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/kitchen-household/best-robot-vacuum/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|best-robot-vacuums", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|best-robot-vacuums" data-cohesion-location="">
											Best robot vacuums
																					</a>
									</li>
																																																																												<li class="">
										<a href="/zdnet-recommends/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-trendingmenu|zdnet-recommends", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-trendingmenu|zdnet-recommends" data-cohesion-location="">
											ZDNET Recommends
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Tech
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																										<li class="">
										<a href="https://www.zdnet.com/topic/gaming/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|gaming", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|gaming" data-cohesion-location="">
											Gaming
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|headphones" data-cohesion-location="">
											Headphones
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/laptops/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|laptops" data-cohesion-location="">
											Laptops
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/mobile-accessories/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|mobile-accessories", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|mobile-accessories" data-cohesion-location="">
											Mobile Accessories
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/networking/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|networking", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|networking" data-cohesion-location="">
											Networking
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/pcs/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|pcs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|pcs" data-cohesion-location="">
											PCs
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/printers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|printers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|printers" data-cohesion-location="">
											Printers
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/smartphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smartphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smartphones" data-cohesion-location="">
											Smartphones
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/smart-watches/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-watches", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-watches" data-cohesion-location="">
											Smart Watches
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/speakers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|speakers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|speakers" data-cohesion-location="">
											Speakers
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/streaming-devices/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|streaming-devices", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|streaming-devices" data-cohesion-location="">
											Streaming Devices
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/video-streaming-services/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|video-streaming-services", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|video-streaming-services" data-cohesion-location="">
											Streaming Services
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/tablets/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|tablets" data-cohesion-location="">
											Tablets
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/tvs/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|tvs" data-cohesion-location="">
											TVs
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/wearables/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|wearables", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|wearables" data-cohesion-location="">
											Wearables
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/kitchen-household/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|kitchen-household", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|kitchen-household" data-cohesion-location="">
											Kitchen &amp; Household
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/office-furniture/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|office-furniture", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|office-furniture" data-cohesion-location="">
											Office Furniture
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/office-hardware-appliances/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|office-hardware-appliances", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|office-hardware-appliances" data-cohesion-location="">
											Office Hardware &amp; Appliances
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/smart-home/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-home", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-home" data-cohesion-location="">
											Smart Home
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/smart-lighting/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|smart-lighting", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|smart-lighting" data-cohesion-location="">
											Smart Lighting
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/yard-outdoors/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-techmenu|yard-outdoors", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-techmenu|yard-outdoors" data-cohesion-location="">
											Yard &amp; Outdoors
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Innovation
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																										<li class="">
										<a href="https://www.zdnet.com/topic/artificial-intelligence/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|artificial-intelligence", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|artificial-intelligence" data-cohesion-location="">
											Artificial Intelligence
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/ar-vr/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|ar-vr", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|ar-vr" data-cohesion-location="">
											AR + VR
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/cloud/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|cloud", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|cloud" data-cohesion-location="">
											Cloud
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/digital-transformation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|digital-transformation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|digital-transformation" data-cohesion-location="">
											Digital Transformation
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/energy/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|energy", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|energy" data-cohesion-location="">
											Energy
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/robotics/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|robotics", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|robotics" data-cohesion-location="">
											Robotics
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/sustainability/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|sustainability", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|sustainability" data-cohesion-location="">
											Sustainability
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/transportation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|transportation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|transportation" data-cohesion-location="">
											Transportation
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/work-life/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|work-life", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|work-life" data-cohesion-location="">
											Work Life
																					</a>
									</li>
																																																																																							<li class="">
										<a href="https://www.zdnet.com/accelerate-your-tech-game/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|accelerate-your-tech-game", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|accelerate-your-tech-game" data-cohesion-location="">
											Accelerate your tech game <small>Paid Content</small>
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/how-the-new-space-race-will-drive-innovation/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|how-the-new-space-race-will-drive-innovation", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|how-the-new-space-race-will-drive-innovation" data-cohesion-location="">
											How the New Space Race Will Drive Innovation
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/how-the-metaverse-will-change-the-future-of-work-and-society/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|how-the-metaverse-will-change-the-future-of-work-and-society", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|how-the-metaverse-will-change-the-future-of-work-and-society" data-cohesion-location="">
											How the metaverse will change the future of work and society
																					</a>
									</li>
																																																																																							<li class="">
										<a href="https://www.zdnet.com/topic/managing-the-multicloud/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|managing-the-multicloud", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|managing-the-multicloud" data-cohesion-location="">
											Managing the Multicloud
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/the-future-of-the-internet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-future-of-the-internet", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-future-of-the-internet" data-cohesion-location="">
											The Future of the Internet
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/the-new-rules-of-work/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-new-rules-of-work", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-new-rules-of-work" data-cohesion-location="">
											The New Rules of Work
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/the-tech-trends-to-watch-in-2023/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-innovationmenu|the-tech-trends-to-watch-in-2023", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-innovationmenu|the-tech-trends-to-watch-in-2023" data-cohesion-location="">
											The Tech Trends to Watch in 2023
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Business
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																										<li class="">
										<a href="https://www.zdnet.com/topic/business/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|business", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|business" data-cohesion-location="">
											See all Business
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/amazon/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|amazon", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|amazon" data-cohesion-location="">
											Amazon
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/apple/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|apple", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|apple" data-cohesion-location="">
											Apple
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/developer/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|developer", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|developer" data-cohesion-location="">
											Developer
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/e-commerce/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|e-commerce", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|e-commerce" data-cohesion-location="">
											E-Commerce
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/edge-computing/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|edge-computing", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|edge-computing" data-cohesion-location="">
											Edge Computing
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/enterprise-software/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|enterprise-software", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|enterprise-software" data-cohesion-location="">
											Enterprise Software
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/executive/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|executive", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|executive" data-cohesion-location="">
											Executive
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/google/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|google", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|google" data-cohesion-location="">
											Google
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/microsoft/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|microsoft", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|microsoft" data-cohesion-location="">
											Microsoft
																					</a>
									</li>
																																																																																																								<li class="">
										<a href="https://www.zdnet.com/topic/professional-development/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|professional-development", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|professional-development" data-cohesion-location="">
											Professional Development
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/social-media/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|social-media", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|social-media" data-cohesion-location="">
											Social Media
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/smb/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|smb", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|smb" data-cohesion-location="">
											SMB
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/windows/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|windows", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|windows" data-cohesion-location="">
											Windows
																					</a>
									</li>
																																																																																							<li class="">
										<a href="https://www.zdnet.com/topic/digital-transformation-trends-and-insights-for-success/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|digital-transformation-trends-and-insights-for-success", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|digital-transformation-trends-and-insights-for-success" data-cohesion-location="">
											Digital transformation: Trends and insights for success
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/software-development-emerging-trends-and-changing-roles/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-businessmenu|software-development-emerging-trends-and-changing-roles", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-businessmenu|software-development-emerging-trends-and-changing-roles" data-cohesion-location="">
											Software development: Emerging trends and changing roles
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Security
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																																																<li class="">
										<a href="https://www.zdnet.com/topic/security/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|security", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|security" data-cohesion-location="">
											See all Security
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/cyber-threats/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cyber-threats", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cyber-threats" data-cohesion-location="">
											Cyber Threats
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/password-manager/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|password-manager", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|password-manager" data-cohesion-location="">
											Password Manager
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/ransomware/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|ransomware", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|ransomware" data-cohesion-location="">
											Ransomware
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|vpn", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|vpn" data-cohesion-location="">
											VPN
																					</a>
									</li>
																																																																																							<li class="">
										<a href="https://www.zdnet.com/topic/cybersecurity-lets-get-tactical/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cybersecurity-lets-get-tactical", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cybersecurity-lets-get-tactical" data-cohesion-location="">
											Cybersecurity: Let's get tactical
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/topic/cybersecurity-lets-get-tactical/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-securitymenu|cybersecurity-lets-get-tactical", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-securitymenu|cybersecurity-lets-get-tactical" data-cohesion-location="">
											Securing the Cloud
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Advice
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																															<li class="">
										<a href="https://www.zdnet.com/deals/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|deals", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|deals" data-cohesion-location="">
											Deals
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/how-to/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|how-to", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|how-to" data-cohesion-location="">
											How-to
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/product-comparisons/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|product-comparisons", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|product-comparisons" data-cohesion-location="">
											Product Comparisons
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/product-spotlights/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|product-spotlights", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|product-spotlights" data-cohesion-location="">
											Product Spotlights
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/reviews/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-advicemenu|reviews", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-advicemenu|reviews" data-cohesion-location="">
											Reviews
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					Buying Guides
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																									<li class="">
										<a href="/best-products/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|see-all-buying-guides", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|see-all-buying-guides" data-cohesion-location="">
											See all Buying Guides
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-all-in-one-computer/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-all-in-one-computers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-all-in-one-computers" data-cohesion-location="">
											Best all-in-one computers
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/best-budget-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-budget-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-budget-tvs" data-cohesion-location="">
											Best budget TVs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-gaming-cpu/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-cpus", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-cpus" data-cohesion-location="">
											Best gaming CPUs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-gaming-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-laptops" data-cohesion-location="">
											Best gaming laptops
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/best-gaming-pc/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-gaming-pcs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-gaming-pcs" data-cohesion-location="">
											Best gaming PCs
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/article/best-headphones/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-headphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-headphones" data-cohesion-location="">
											Best headphones
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-ipad/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-ipads", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-ipads" data-cohesion-location="">
											Best iPads
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-iphone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-iphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-iphones" data-cohesion-location="">
											Best iPhones
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-laptop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-laptops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-laptops" data-cohesion-location="">
											Best laptops
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-large-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-large-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-large-tablets" data-cohesion-location="">
											Best large tablets
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/best-oled-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-oled-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-oled-tvs" data-cohesion-location="">
											Best OLED TVs
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/home-and-office/kitchen-household/best-robot-vacuum-mop/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-robot-vacuum-mops", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-robot-vacuum-mops" data-cohesion-location="">
											Best robot vacuum mops
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-rugged-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-rugged-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-rugged-tablets" data-cohesion-location="">
											Best rugged tablets
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-samsung-phone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-samsung-phones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-samsung-phones" data-cohesion-location="">
											Best Samsung phones
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-smart-ring/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smart-rings", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smart-rings" data-cohesion-location="">
											Best smart rings
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-phone/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smartphones", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smartphones" data-cohesion-location="">
											Best smartphones
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-smartwatch/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-smartwatches", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-smartwatches" data-cohesion-location="">
											Best smartwatches
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/home-and-office/home-entertainment/best-speakers/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-speakers", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-speakers" data-cohesion-location="">
											Best speakers
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-tablet/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-tablets", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-tablets" data-cohesion-location="">
											Best tablets
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-travel-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-travel-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-travel-vpns" data-cohesion-location="">
											Best travel VPNs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/home-and-office/home-entertainment/best-tv/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-tvs", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-tvs" data-cohesion-location="">
											Best TVs
																					</a>
									</li>
																																																																												<li class="">
										<a href="/article/best-vpn/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-vpns", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-vpns" data-cohesion-location="">
											Best VPNs
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://coupons.cnet.com/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-buying-guidesmenu|best-coupons", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-buying-guidesmenu|best-coupons" data-cohesion-location="" rel="noopener noreferrer" target="_blank" data-component="externalLink">
											Best Coupons
																					</a>
									</li>
																							</ul>
			</li>
											<li>
				<a class="subnav-toggle">
					More
					    <svg class=" arrow-dropdown">
        <use xlink:href="#arrow-dropdown"></use>
    </svg>

				</a>
				<ul class="subnav">
																																																																																				<li class="">
										<a href="/topic/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|topics", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|topics" data-cohesion-location="">
											See all topics
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/finance/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|finance", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|finance" data-cohesion-location="">
											Finance
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/education/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|education", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|education" data-cohesion-location="">
											Education
																					</a>
									</li>
																																																																																													<li class="">
										<a href="https://www.zdnet.com/topic/health/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|health", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|health" data-cohesion-location="">
											Health
																					</a>
									</li>
																																																																																							<li class="">
										<a href="https://www.zdnet.com/topic/?filter=special-features" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|special-features", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|special-features" data-cohesion-location="">
											Special Features
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/in-depth/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|zdnet-in-depth", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|zdnet-in-depth" data-cohesion-location="">
											ZDNET In Depth
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/zdnet-recommends/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|zdnet-recommends", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|zdnet-recommends" data-cohesion-location="">
											ZDNET Recommends
																					</a>
									</li>
																																																																																							<li class="">
										<a href="/newsletters/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|newsletters", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|newsletters" data-cohesion-location="" data-vanity-rewritten="true">
											Newsletters
																					</a>
									</li>
																																																																												<li class="">
										<a href="/video/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|videos", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|videos" data-cohesion-location="">
											Videos
																					</a>
									</li>
																																																																												<li class="">
										<a href="https://www.zdnet.com/editorial-guidelines/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "header-moremenu|editorial-guidelines", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="header-moremenu|editorial-guidelines" data-cohesion-location="">
											Editorial Guidelines
																					</a>
									</li>
																							</ul>
			</li>
			</ul>
</div>					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

            
            
                        <div class="topContent container profile-page">
            <div class="row">
                            <div class="row">
                <div class="col-12">
                                
            
                    




    
                    
                                                                                            
                    
                        
            <script type="application/ld+json">{
    "@context": "https:\/\/schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Meet The Team",
            "item": "https:\/\/www.zdnet.com\/feature\/meet-the-team\/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Jason Perlow"
        }
    ]
}</script>
    

<section id="author-bio-header">
        <div class="col-5">
                            
        
                                                        <span class="img "><img src="https://www.zdnet.com/a/img/resize/a4efa0d6abb93df3fee6e8b2e388e36b761cf4f3/2022/08/05/8ee616a1-94ee-439e-9574-58f014ae5ef0/jason-perlow.jpg?width=270&amp;height=270&amp;fit=crop&amp;auto=webp" class="" alt="" height="270" width="270"></span>
                        
    </div>

        <div class="col-7">
        <h1 class="author-name">Jason Perlow</h1>
        <p class="author-title">Senior Contributing Writer</p>

                            <ul class="socialFollow">
                                    <li>
                            <a href="https://twitter.com/jperlow" data-button="twitter" data-social="twitter" target="_blank" rel="noopener noreferrer" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "bio-twitter-follow", "pageType": "meet_the_team"}' aria-label="Go to this team member's Twitter account" data-component="externalLink">
            <svg class=" twitter">
        <use xlink:href="#twitter"></use>
    </svg>

    </a>

            </li>
            </ul>


        


	
<script type="application/ld+json">{
    "@context": "http:\/\/schema.org",
    "@type": "Person",
    "name": "Jason Perlow",
    "url": "https:\/\/www.zdnet.com\/",
    "sameAs": [
        "http:\/\/www.twitter.com\/jperlow"
    ]
}</script>

                                        
                                                    <ul class="tabs nav nav-tabs" data-component="tabs">
                        <li>
                            <a href="#bio" data-item="trigger" data-target="#bio" class="selected" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-bio", "pageType": "meet_the_team"}'>Bio</a>
                        </li>
                        <li>
                            <a href="#disclosure" data-item="trigger" data-target="#disclosure" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-disclosure", "pageType": "meet_the_team"}'>Disclosure</a>
                        </li>
                    </ul>
                
                                <div id="bio" class="tab module selected">
                    <section class="expose expose-closed" data-component="expose" data-expose-options='{"animation":"none","initState":"closed","classBase":"expose","cssTransition":false,"selectors":{"content":"[data-expose-el=\u0022content\u0022]","eventToggle":"[data-expose-toggle]","eventOpen":"[data-expose-show]","eventClose":"[data-expose-close]"}}'>
                                                                            <p>Jason Perlow is a technologist with over two decades of experience integrating large heterogeneous multi-vendor computing environments in Fortune 500 companies.</p>
                                            </section>
                </div>

                                                    <div id="disclosure" class="tab module">
                        <section>Jason Perlow's full-time employer is The Linux Foundation, a 501(c)3 not for profit organization. He writes as a freelancer for ZDNET.</section>
                    </div>
                                        </div>
</section>
                                            </div>
                    </div>
            </div>

        </div>
    
        <div id="main">
        
    <section class="leader leader-top placeholder">
                    


        <div data-ad="leader-plus-top" data-ad-container="65a9752357eda" class="ad-leader-plus-top ad-slot  ">
    </div>

            </section>

            
                                                        
            <div class="contentWrapper ">
                                <div class="container ">
                                                    <div class="row">
                            <div class="row">
                <div class="col-12">
                                                            <div class="row">
                                                        <div class="col-8">
                                
            
                    <section id="articleRiver" class="module moduleRiver">
        <h2 class="heading">Latest from Jason Perlow</h2>

    <div class="author-bio-filter-wrap" data-component="searchFilter">
        



    
    
        
    



    <div class="search-filter">
                <div class="search-filter-small-screens" data-component="showHide" data-show-hide-options='{"triggerExpandText":"Show search filters","triggerCollapseText":"Hide search filters"}'>
    <form action="">
        <span class="show-hide-filters">
            <a href="#filters" data-item="trigger" class="trigger-expand">Show search filters</a>
        </span>
        <div id="filters" class="collapsed">
            <ul>
                                <li>
                    <label>Sort by:</label>
                    <select onchange="document.location = this.value" value="GO">
                        
                        <option value="/meet-the-team/jason-perlow/?o=1" selected data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|all", "pageType": "meet_the_team"}'>DATE</option>

                                                                            <option value="/meet-the-team/jason-perlow/?o=2" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "popularity|all|all|all", "pageType": "meet_the_team"}'>POPULARITY</option>
                                            </select>
                </li>

                                                    <li>
                        <label>Content Type:</label>
                        <select onchange="document.location = this.value" value="GO">
                                                            <option value="" disabled selected>ALL</option>
                            
                                                                                                                                        <option value="/meet-the-team/jason-perlow/?o=1&amp;t=16" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|article|all|all", "pageType": "meet_the_team"}'>ARTICLES</option>
                                                                                                                                                <option value="/meet-the-team/jason-perlow/?o=1&amp;t=6" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|gallery|all|all", "pageType": "meet_the_team"}'>GALLERIES</option>
                                                                                                                                                <option value="/meet-the-team/jason-perlow/?o=1&amp;t=19" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|video|all|all", "pageType": "meet_the_team"}'>VIDEOS</option>
                                                                                                                                                <option value="/meet-the-team/jason-perlow/?o=1&amp;t=4" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|review|all|all", "pageType": "meet_the_team"}'>REVIEWS</option>
                                                                                                                        </select>
                    </li>
                
                                                    <li>
                        <label>Topic:</label>
                        <select onchange="document.location = this.value" value="GO">
                                                            <option value="" disabled selected>ALL</option>
                            
                                                                                                <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=mobility" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobility|all", "pageType": "meet_the_team"}'>MOBILITY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=enterprise%20software" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|enterprise software|all", "pageType": "meet_the_team"}'>ENTERPRISE SOFTWARE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=hardware" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|hardware|all", "pageType": "meet_the_team"}'>HARDWARE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=apple" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|apple|all", "pageType": "meet_the_team"}'>APPLE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=cloud" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cloud|all", "pageType": "meet_the_team"}'>CLOUD</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=innovation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|innovation|all", "pageType": "meet_the_team"}'>INNOVATION</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=smartphones" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smartphones|all", "pageType": "meet_the_team"}'>SMARTPHONES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=security" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|security|all", "pageType": "meet_the_team"}'>SECURITY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=ipad" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ipad|all", "pageType": "meet_the_team"}'>IPAD</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=networking" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|networking|all", "pageType": "meet_the_team"}'>NETWORKING</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=after%20hours" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|after hours|all", "pageType": "meet_the_team"}'>AFTER HOURS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=microsoft" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|microsoft|all", "pageType": "meet_the_team"}'>MICROSOFT</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=cxo" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cxo|all", "pageType": "meet_the_team"}'>CXO</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=amazon" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|amazon|all", "pageType": "meet_the_team"}'>AMAZON</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=windows" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows|all", "pageType": "meet_the_team"}'>WINDOWS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=open%20source" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|open source|all", "pageType": "meet_the_team"}'>OPEN SOURCE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=tablets" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tablets|all", "pageType": "meet_the_team"}'>TABLETS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=tech%20industry" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tech industry|all", "pageType": "meet_the_team"}'>TECH INDUSTRY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=laptops" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|laptops|all", "pageType": "meet_the_team"}'>LAPTOPS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=linux" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|linux|all", "pageType": "meet_the_team"}'>LINUX</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=google" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|google|all", "pageType": "meet_the_team"}'>GOOGLE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=social%20media" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|social media|all", "pageType": "meet_the_team"}'>SOCIAL MEDIA</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=iphone" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|iphone|all", "pageType": "meet_the_team"}'>IPHONE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=blackberry" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|blackberry|all", "pageType": "meet_the_team"}'>BLACKBERRY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=internet%20of%20things" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|internet of things|all", "pageType": "meet_the_team"}'>INTERNET OF THINGS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20os" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile os|all", "pageType": "meet_the_team"}'>MOBILE OS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=developer" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|developer|all", "pageType": "meet_the_team"}'>DEVELOPER</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=virtualization" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|virtualization|all", "pageType": "meet_the_team"}'>VIRTUALIZATION</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=storage" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|storage|all", "pageType": "meet_the_team"}'>STORAGE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=tech%20%26%20work" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tech &amp; work|all", "pageType": "meet_the_team"}'>TECH &amp; WORK</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=pcs" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|pcs|all", "pageType": "meet_the_team"}'>PCS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=collaboration" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|collaboration|all", "pageType": "meet_the_team"}'>COLLABORATION</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20carriers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile carriers|all", "pageType": "meet_the_team"}'>MOBILE CARRIERS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=5g" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|5g|all", "pageType": "meet_the_team"}'>5G</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=servers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|servers|all", "pageType": "meet_the_team"}'>SERVERS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=data%20centers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|data centers|all", "pageType": "meet_the_team"}'>DATA CENTERS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=finance" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|finance|all", "pageType": "meet_the_team"}'>FINANCE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=health" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|health|all", "pageType": "meet_the_team"}'>HEALTH</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=hewlett%20packard%20enterprise" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|hewlett packard enterprise|all", "pageType": "meet_the_team"}'>HEWLETT PACKARD ENTERPRISE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=processors" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|processors|all", "pageType": "meet_the_team"}'>PROCESSORS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=windows%2011" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows 11|all", "pageType": "meet_the_team"}'>WINDOWS 11</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=artificial%20intelligence" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|artificial intelligence|all", "pageType": "meet_the_team"}'>ARTIFICIAL INTELLIGENCE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=china" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|china|all", "pageType": "meet_the_team"}'>CHINA</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=samsung" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|samsung|all", "pageType": "meet_the_team"}'>SAMSUNG</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=electric%20vehicles" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|electric vehicles|all", "pageType": "meet_the_team"}'>ELECTRIC VEHICLES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=government" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|government|all", "pageType": "meet_the_team"}'>GOVERNMENT</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=legal" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|legal|all", "pageType": "meet_the_team"}'>LEGAL</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=blockchain" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|blockchain|all", "pageType": "meet_the_team"}'>BLOCKCHAIN</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=government%3A%20us" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|government: us|all", "pageType": "meet_the_team"}'>GOVERNMENT: US</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=ai%20%26%20robotics" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ai &amp; robotics|all", "pageType": "meet_the_team"}'>AI &amp; ROBOTICS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=ar%20%2B%20vr" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ar + vr|all", "pageType": "meet_the_team"}'>AR + VR</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=ces" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ces|all", "pageType": "meet_the_team"}'>CES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=cisco" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cisco|all", "pageType": "meet_the_team"}'>CISCO</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=digital%20transformation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|digital transformation|all", "pageType": "meet_the_team"}'>DIGITAL TRANSFORMATION</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=e-commerce" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|e-commerce|all", "pageType": "meet_the_team"}'>E-COMMERCE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20%26%20office" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home &amp; office|all", "pageType": "meet_the_team"}'>HOME &amp; OFFICE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20networking" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home networking|all", "pageType": "meet_the_team"}'>HOME NETWORKING</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=ibm" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ibm|all", "pageType": "meet_the_team"}'>IBM</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=kitchen%20%26%20household" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|kitchen &amp; household|all", "pageType": "meet_the_team"}'>KITCHEN &amp; HOUSEHOLD</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=mac%20os" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mac os|all", "pageType": "meet_the_team"}'>MAC OS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=oracle" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|oracle|all", "pageType": "meet_the_team"}'>ORACLE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=smart%20lighting" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smart lighting|all", "pageType": "meet_the_team"}'>SMART LIGHTING</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=arm" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|arm|all", "pageType": "meet_the_team"}'>ARM</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=big%20data" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|big data|all", "pageType": "meet_the_team"}'>BIG DATA</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=broadband" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|broadband|all", "pageType": "meet_the_team"}'>BROADBAND</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=data%20management" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|data management|all", "pageType": "meet_the_team"}'>DATA MANAGEMENT</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=energy" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|energy|all", "pageType": "meet_the_team"}'>ENERGY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=headphones" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|headphones|all", "pageType": "meet_the_team"}'>HEADPHONES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20entertainment" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home entertainment|all", "pageType": "meet_the_team"}'>HOME ENTERTAINMENT</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20accessories" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile accessories|all", "pageType": "meet_the_team"}'>MOBILE ACCESSORIES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=office%20hardware%20%26%20appliances" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|office hardware &amp; appliances|all", "pageType": "meet_the_team"}'>OFFICE HARDWARE &amp; APPLIANCES</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=productivity" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|productivity|all", "pageType": "meet_the_team"}'>PRODUCTIVITY</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=robotics" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|robotics|all", "pageType": "meet_the_team"}'>ROBOTICS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=smb" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smb|all", "pageType": "meet_the_team"}'>SMB</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=services%20%26%20software" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|services &amp; software|all", "pageType": "meet_the_team"}'>SERVICES &amp; SOFTWARE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=smart%20office" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smart office|all", "pageType": "meet_the_team"}'>SMART OFFICE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=social%20enterprise" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|social enterprise|all", "pageType": "meet_the_team"}'>SOCIAL ENTERPRISE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=tvs" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tvs|all", "pageType": "meet_the_team"}'>TVS</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=transportation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|transportation|all", "pageType": "meet_the_team"}'>TRANSPORTATION</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=vmware" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|vmware|all", "pageType": "meet_the_team"}'>VMWARE</option>
                                                                    <option value="/meet-the-team/jason-perlow/?o=1&amp;topic=windows%2010" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows 10|all", "pageType": "meet_the_team"}'>WINDOWS 10</option>
                                                                                    </select>
                    </li>
                
                                                    <li>
                        <label>Publish date:</label>
                        <select onchange="document.location = this.value" value="GO">
                                                            <option value="" disabled selected>ALL</option>
                            
                            <option value="/meet-the-team/jason-perlow/?o=1&amp;d=1" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 7 days", "pageType": "meet_the_team"}'>LAST WEEK</option>

                            <option value="/meet-the-team/jason-perlow/?o=1&amp;d=2" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 30 days", "pageType": "meet_the_team"}'>LAST MONTH</option>

                            <option value="/meet-the-team/jason-perlow/?o=1&amp;d=3" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 3 months", "pageType": "meet_the_team"}'>LAST 3 MO.</option>

                            <option value="/meet-the-team/jason-perlow/?o=1&amp;d=4" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 12 months", "pageType": "meet_the_team"}'>LAST 12 MO.</option>

                            <option value="/meet-the-team/jason-perlow/?o=1&amp;d=5" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|older content", "pageType": "meet_the_team"}'>OLDER</option>
                        </select>
                    </li>
                            </ul>

                                        <div class="clear-filters">
                                            <a class="clear-action-link" href="/meet-the-team/jason-perlow/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "search-clear-all-filters", "pageType": "meet_the_team"}' aria-label="Clear filters">
                                                                    <div class="clear-filters-close">
                            <svg viewbox="0 0 28 28">
    <polygon points="28,1.9 26.1,0 14,12.1 1.9,0 0,1.9 12.1,14 0,26.1 1.9,28 14,15.9 26.1,28 28,26.1 15.9,14 	"></polygon>
</svg>                        </div>
                        Clear Filters
                    </a>
                </div>
                    </div>
    </form>
</div>
                
<div class="search-filter-large-screens">
    <ul>
                <li data-component="dropdown">
            <a data-item="trigger">
                Sort by:
                <span class="option">
                                            DATE
                                    </span>
            </a>
            <ul class="dropDown">
                
                <li class="selected">
                    <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|all", "pageType": "meet_the_team"}'>Date</a>
                </li>

                                                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=2" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "popularity|all|all|all", "pageType": "meet_the_team"}'>Popularity</a>
                    </li>
                            </ul>
        </li>

                            <li data-component="dropdown">
                <a data-item="trigger">
                                            Type:
                                        <span class="option">
                                                    ALL
                                            </span>
                </a>
                <ul class="dropDown">
                                                                                                        <li>
                                    <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;t=16" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|article|all|all", "pageType": "meet_the_team"}'>Articles</a>
                                </li>
                                                                                                                <li>
                                    <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;t=6" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|gallery|all|all", "pageType": "meet_the_team"}'>Galleries</a>
                                </li>
                                                                                                                <li>
                                    <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;t=19" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|video|all|all", "pageType": "meet_the_team"}'>Videos</a>
                                </li>
                                                                                                                <li>
                                    <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;t=4" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|review|all|all", "pageType": "meet_the_team"}'>Reviews</a>
                                </li>
                                                                                        </ul>
            </li>
        
                            <li data-component="dropdown">
                <a data-item="trigger">
                    Topic:
                    <span class="option">
                                                    ALL
                                            </span>
                </a>
                <ul class="dropDown" data-component="viewMore">
                    <li>
                        <ul data-item="group">
                                                                                                <li class="">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=mobility" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobility|all", "pageType": "meet_the_team"}'>MOBILITY</a>
                                    </li>
                                                                    <li class="">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=enterprise%20software" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|enterprise software|all", "pageType": "meet_the_team"}'>ENTERPRISE SOFTWARE</a>
                                    </li>
                                                                    <li class="">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=hardware" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|hardware|all", "pageType": "meet_the_team"}'>HARDWARE</a>
                                    </li>
                                                                    <li class="">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=apple" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|apple|all", "pageType": "meet_the_team"}'>APPLE</a>
                                    </li>
                                                                    <li class="">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=cloud" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cloud|all", "pageType": "meet_the_team"}'>CLOUD</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=innovation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|innovation|all", "pageType": "meet_the_team"}'>INNOVATION</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=smartphones" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smartphones|all", "pageType": "meet_the_team"}'>SMARTPHONES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=security" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|security|all", "pageType": "meet_the_team"}'>SECURITY</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=ipad" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ipad|all", "pageType": "meet_the_team"}'>IPAD</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=networking" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|networking|all", "pageType": "meet_the_team"}'>NETWORKING</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=after%20hours" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|after hours|all", "pageType": "meet_the_team"}'>AFTER HOURS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=microsoft" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|microsoft|all", "pageType": "meet_the_team"}'>MICROSOFT</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=cxo" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cxo|all", "pageType": "meet_the_team"}'>CXO</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=amazon" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|amazon|all", "pageType": "meet_the_team"}'>AMAZON</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=windows" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows|all", "pageType": "meet_the_team"}'>WINDOWS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=open%20source" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|open source|all", "pageType": "meet_the_team"}'>OPEN SOURCE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=tablets" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tablets|all", "pageType": "meet_the_team"}'>TABLETS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=tech%20industry" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tech industry|all", "pageType": "meet_the_team"}'>TECH INDUSTRY</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=laptops" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|laptops|all", "pageType": "meet_the_team"}'>LAPTOPS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=linux" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|linux|all", "pageType": "meet_the_team"}'>LINUX</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=google" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|google|all", "pageType": "meet_the_team"}'>GOOGLE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=social%20media" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|social media|all", "pageType": "meet_the_team"}'>SOCIAL MEDIA</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=iphone" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|iphone|all", "pageType": "meet_the_team"}'>IPHONE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=blackberry" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|blackberry|all", "pageType": "meet_the_team"}'>BLACKBERRY</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=internet%20of%20things" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|internet of things|all", "pageType": "meet_the_team"}'>INTERNET OF THINGS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20os" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile os|all", "pageType": "meet_the_team"}'>MOBILE OS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=developer" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|developer|all", "pageType": "meet_the_team"}'>DEVELOPER</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=virtualization" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|virtualization|all", "pageType": "meet_the_team"}'>VIRTUALIZATION</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=storage" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|storage|all", "pageType": "meet_the_team"}'>STORAGE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=tech%20%26%20work" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tech &amp; work|all", "pageType": "meet_the_team"}'>TECH &amp; WORK</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=pcs" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|pcs|all", "pageType": "meet_the_team"}'>PCS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=collaboration" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|collaboration|all", "pageType": "meet_the_team"}'>COLLABORATION</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20carriers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile carriers|all", "pageType": "meet_the_team"}'>MOBILE CARRIERS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=5g" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|5g|all", "pageType": "meet_the_team"}'>5G</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=servers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|servers|all", "pageType": "meet_the_team"}'>SERVERS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=data%20centers" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|data centers|all", "pageType": "meet_the_team"}'>DATA CENTERS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=finance" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|finance|all", "pageType": "meet_the_team"}'>FINANCE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=health" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|health|all", "pageType": "meet_the_team"}'>HEALTH</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=hewlett%20packard%20enterprise" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|hewlett packard enterprise|all", "pageType": "meet_the_team"}'>HEWLETT PACKARD ENTERPRISE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=processors" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|processors|all", "pageType": "meet_the_team"}'>PROCESSORS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=windows%2011" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows 11|all", "pageType": "meet_the_team"}'>WINDOWS 11</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=artificial%20intelligence" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|artificial intelligence|all", "pageType": "meet_the_team"}'>ARTIFICIAL INTELLIGENCE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=china" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|china|all", "pageType": "meet_the_team"}'>CHINA</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=samsung" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|samsung|all", "pageType": "meet_the_team"}'>SAMSUNG</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=electric%20vehicles" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|electric vehicles|all", "pageType": "meet_the_team"}'>ELECTRIC VEHICLES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=government" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|government|all", "pageType": "meet_the_team"}'>GOVERNMENT</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=legal" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|legal|all", "pageType": "meet_the_team"}'>LEGAL</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=blockchain" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|blockchain|all", "pageType": "meet_the_team"}'>BLOCKCHAIN</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=government%3A%20us" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|government: us|all", "pageType": "meet_the_team"}'>GOVERNMENT: US</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=ai%20%26%20robotics" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ai &amp; robotics|all", "pageType": "meet_the_team"}'>AI &amp; ROBOTICS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=ar%20%2B%20vr" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ar + vr|all", "pageType": "meet_the_team"}'>AR + VR</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=ces" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ces|all", "pageType": "meet_the_team"}'>CES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=cisco" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|cisco|all", "pageType": "meet_the_team"}'>CISCO</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=digital%20transformation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|digital transformation|all", "pageType": "meet_the_team"}'>DIGITAL TRANSFORMATION</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=e-commerce" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|e-commerce|all", "pageType": "meet_the_team"}'>E-COMMERCE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20%26%20office" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home &amp; office|all", "pageType": "meet_the_team"}'>HOME &amp; OFFICE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20networking" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home networking|all", "pageType": "meet_the_team"}'>HOME NETWORKING</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=ibm" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|ibm|all", "pageType": "meet_the_team"}'>IBM</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=kitchen%20%26%20household" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|kitchen &amp; household|all", "pageType": "meet_the_team"}'>KITCHEN &amp; HOUSEHOLD</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=mac%20os" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mac os|all", "pageType": "meet_the_team"}'>MAC OS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=oracle" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|oracle|all", "pageType": "meet_the_team"}'>ORACLE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=smart%20lighting" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smart lighting|all", "pageType": "meet_the_team"}'>SMART LIGHTING</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=arm" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|arm|all", "pageType": "meet_the_team"}'>ARM</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=big%20data" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|big data|all", "pageType": "meet_the_team"}'>BIG DATA</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=broadband" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|broadband|all", "pageType": "meet_the_team"}'>BROADBAND</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=data%20management" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|data management|all", "pageType": "meet_the_team"}'>DATA MANAGEMENT</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=energy" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|energy|all", "pageType": "meet_the_team"}'>ENERGY</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=headphones" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|headphones|all", "pageType": "meet_the_team"}'>HEADPHONES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=home%20entertainment" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|home entertainment|all", "pageType": "meet_the_team"}'>HOME ENTERTAINMENT</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=mobile%20accessories" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|mobile accessories|all", "pageType": "meet_the_team"}'>MOBILE ACCESSORIES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=office%20hardware%20%26%20appliances" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|office hardware &amp; appliances|all", "pageType": "meet_the_team"}'>OFFICE HARDWARE &amp; APPLIANCES</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=productivity" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|productivity|all", "pageType": "meet_the_team"}'>PRODUCTIVITY</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=robotics" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|robotics|all", "pageType": "meet_the_team"}'>ROBOTICS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=smb" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smb|all", "pageType": "meet_the_team"}'>SMB</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=services%20%26%20software" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|services &amp; software|all", "pageType": "meet_the_team"}'>SERVICES &amp; SOFTWARE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=smart%20office" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|smart office|all", "pageType": "meet_the_team"}'>SMART OFFICE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=social%20enterprise" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|social enterprise|all", "pageType": "meet_the_team"}'>SOCIAL ENTERPRISE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=tvs" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|tvs|all", "pageType": "meet_the_team"}'>TVS</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=transportation" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|transportation|all", "pageType": "meet_the_team"}'>TRANSPORTATION</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=vmware" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|vmware|all", "pageType": "meet_the_team"}'>VMWARE</a>
                                    </li>
                                                                    <li class="hide">
                                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;topic=windows%2010" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|windows 10|all", "pageType": "meet_the_team"}'>WINDOWS 10</a>
                                    </li>
                                                                                    </ul>
                    </li>
                                            <li class="more"><a data-item="show" href="#">Load more</a></li>
                                    </ul>
            </li>
        
                            <li data-component="dropdown">
                <a data-item="trigger">
                                            Date:
                                        <span class="option">
                                                    ALL
                                            </span>
                </a>
                <ul class="dropDown">
                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;d=1" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 7 days", "pageType": "meet_the_team"}'>Last Week</a>
                    </li>

                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;d=2" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 30 days", "pageType": "meet_the_team"}'>Last month</a>
                    </li>

                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;d=3" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 3 months", "pageType": "meet_the_team"}'>Last 3 Mo.</a>
                    </li>

                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;d=4" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|last 12 months", "pageType": "meet_the_team"}'>Last 12 Mo.</a>
                    </li>

                    <li>
                        <a rel="nofollow" href="/meet-the-team/jason-perlow/?o=1&amp;d=5" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "date|all|all|older content", "pageType": "meet_the_team"}'>Older</a>
                    </li>
                </ul>
            </li>
            </ul>

                <div class="clear-filters">
                            <a class="clear-action-link" href="/meet-the-team/jason-perlow/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "search-clear-all-filters", "pageType": "meet_the_team"}' aria-label="Clear filters">
                                           <div class="clear-filters-close">
                    <svg viewbox="0 0 28 28">
    <polygon points="28,1.9 26.1,0 14,12.1 1.9,0 0,1.9 12.1,14 0,26.1 1.9,28 14,15.9 26.1,28 28,26.1 15.9,14 	"></polygon>
</svg>                </div>
            </a>
        </div>
    </div>    </div>
    </div>

            
                    <div class="river" id="articles-loadMore" data-component="loadMore" data-load-more-options='{"url":"\/meet-the-team\/jason-perlow\/xhr\/?o=1&amp;t=&amp;topic=&amp;d=","data":{"offset":10},"loader":{"classes":{"base":"btn btn-primary btn-block load-more"},"text":{"idle":"View More Articles"}},"pushState":{"route":"\/meet-the-team\/jason-perlow\/{page}\/","enabled":true,"currentPage":1},"trackClickContentLinks":"author-profile-river"}'>
                
        <article class="item"><div><a href="/article/unveiling-the-future-of-generative-ai-insights-from-the-linux-foundations-2023-survey/" title="Unveiling the future of open-source generative AI: Insights from the Linux Foundation's 2023 survey" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/23b180d0c4dd64d78a281cc7a870dd10c9f8fb83/2024/01/17/4ce9dd51-b750-4cf7-ab17-6da068cbc1a4/gettyimages-1906025809.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="Unveiling the future of open-source generative AI: Insights from the Linux Foundation's 2023 survey" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>Unveiling the future of open-source generative AI: Insights from the Linux Foundation's 2023 survey</h3><p class="summary">The Linux Foundation's report serves as a roadmap for a future where open-source generative AI drives innovation and fosters an ethical, secure, and collaborative environment.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2024-01-17 15:19:00">1 day ago</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/artificial-intelligence/"> Artificial Intelligence</a></span></p></div></div></article>
        <article class="item"><div><a href="/home-and-office/this-is-why-it-pros-over-50-should-switch-their-glasses-to-technology-lenses/" title="This is why IT pros over 50 should switch their glasses to technology lenses" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/388fbd9c5d92aad69d367f70a85a99959053467e/2024/01/12/0dc1b7e7-d40e-45e0-be2c-d9c1f6c0525d/gettyimages-520886368.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="This is why IT pros over 50 should switch their glasses to technology lenses" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>This is why IT pros over 50 should switch their glasses to technology lenses</h3><p class="summary">Progressive-based technology lenses can help aging eyes maintain clarity and comfort in the digital world.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2024-01-12 19:01:55">January 12, 2024</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/home-and-office/"> Home &amp; Office</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/from-indoor-solar-to-light-based-internet-photonics-offers-a-brighter-future/" title="From indoor solar to light-based internet, photonics offers a brighter future" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/0013ef0616b8b07754a2f850850bdbcfa3b259fb/2024/01/08/8333b00a-8a37-4f4b-93a6-b79e60b90d8b/gettyimages-1042124558.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="From indoor solar to light-based internet, photonics offers a brighter future" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>From indoor solar to light-based internet, photonics offers a brighter future</h3><p class="summary">Soon, our devices will get power from the light around us and send information at incredible speeds while being safer and more efficient. Here's a look at what's new in photonics at CES 2024.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2024-01-08 13:17:00">January 8, 2024</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/innovation/"> Innovation</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/my-favorite-macos-sonoma-feature-makes-connecting-to-another-mac-a-breeze/" title="My favorite MacOS Sonoma feature makes connecting to another Mac a breeze" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/bd4e7b17210cfa9f98cc8bfce9f85a512b6fc1b5/2024/01/05/f413ba01-74e1-4edb-8d1e-41b8aa539d45/fullscreen-1-4-24-7-23pm.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="My favorite MacOS Sonoma feature makes connecting to another Mac a breeze" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>My favorite MacOS Sonoma feature makes connecting to another Mac a breeze</h3><p class="summary">MacOS Sonoma Screen Sharing offers high-speed, seamless remote connectivity. Here's how to get started using it.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2024-01-05 21:13:48">January 5, 2024</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/mac-os/"> Mac OS</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/calm-app-new-sleep-story-is-narrated-by-jimmy-stewart-and-its-spookily-effective/" title="Calm's new sleep story is 'narrated' by Jimmy Stewart, and it's spookily effective" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/7eebe7ffebbf7c14721c90bb3104f46c024dcd7e/2023/12/11/78dfb4f4-5e40-44b4-997f-8e481a74dd76/wonderful-sleep-story.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="Calm's new sleep story is 'narrated' by Jimmy Stewart, and it's spookily effective" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>Calm's new sleep story is 'narrated' by Jimmy Stewart, and it's spookily effective</h3><p class="summary">Is it creepy or heartwarming? Listen for yourself to find out.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-12-11 21:49:19">December 11, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/artificial-intelligence/"> Artificial Intelligence</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/ai-in-2023-a-year-of-breakthroughs-that-left-no-human-thing-unchanged/" title="AI in 2023: A year of breakthroughs that left no human thing unchanged" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/38f9fe546948718a01bc66231eea239fef8e38c0/2023/12/07/5ef29591-5210-4d05-8659-7c1ac7d1a9d1/gettyimages-1598010420.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="AI in 2023: A year of breakthroughs that left no human thing unchanged" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>AI in 2023: A year of breakthroughs that left no human thing unchanged</h3><p class="summary">We recap the breathtaking AI advances of these past 12 months, exploring everything you'll need to know before hurtling into 2024.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-12-07 23:24:47">December 7, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/artificial-intelligence/"> Artificial Intelligence</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/who-will-partner-with-apple-card-now-and-what-does-this-shakeup-mean-for-its-users/" title="Who will partner with Apple Card now and what does this shakeup mean for its users?" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/b0439a18e6571dd6b3d34b00a819ccf2397b73e1/2023/07/26/b7746839-233d-43a6-ab88-ad3b19ed0e28/apple-card.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="Who will partner with Apple Card now and what does this shakeup mean for its users?" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>Who will partner with Apple Card now and what does this shakeup mean for its users?</h3><p class="summary">Apple Card's transition to a new partner won't be easy. Here's a look at the technology, which banks may step up, and the different acquisition scenarios.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-11-30 16:01:27">November 30, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/apple/"> Apple</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/m3-apple-silicon-is-here-and-theres-more-to-it-than-new-laptops-and-all-in-ones/" title="M3 Apple silicon is here, and there's more to it than new laptops and all-in-ones" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/d2b9fba25ac2561bb8d62876c6b68d225eb44a41/2023/10/31/d360c6d8-8f3e-4777-9db1-8626be65a526/screenshot-2023-10-31-at-4-06-21-pm.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="M3 Apple silicon is here, and there's more to it than new laptops and all-in-ones" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>M3 Apple silicon is here, and there's more to it than new laptops and all-in-ones</h3><p class="summary">The M3 chips aren't merely a product release. They are Apple's bold statement of intent, opening a new chapter in the chip rivalry that could redraw market boundaries and fuel a fresh wave of innovation.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-10-31 19:54:00">October 31, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/laptops/"> Laptops</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/generative-ai-and-machine-learning-are-engineering-the-future-in-these-9-disciplines/" title="Generative AI and machine learning are engineering the future in these 9 disciplines" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/e289a20cd11b34521fd46a6990bd02dcc6e26db1/2023/10/16/547003b1-a501-4dff-b489-bb957583060f/gettyimages-1314656208.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="Generative AI and machine learning are engineering the future in these 9 disciplines" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>Generative AI and machine learning are engineering the future in these 9 disciplines</h3><p class="summary">All vertical industries continue to adopt emerging tools and methodologies, but the impact of generative AI in engineering disciplines stands out from the rest.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-10-19 14:15:00">October 19, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/artificial-intelligence/"> Artificial Intelligence</a></span></p></div></div></article>
        <article class="item"><div><a href="/article/best-usb-c-cables-for-the-iphone-15/" title="The best USB-C cables for the iPhone 15: What the experts recommend" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "author-profile-river", "pageType": "meet_the_team"}'><div class="thumbWrap"><span class="thumb" data-item="riverThumb"><span class="img "><img src="https://www.zdnet.com/a/img/resize/833a6c4691eeab0942ca87b55ca9777fa33d5087/2023/09/06/2672f42e-1305-4ca3-93ff-04ff1fe5932d/img-5496.jpg?width=170&amp;height=128&amp;fit=crop&amp;auto=webp" class="" alt="The best USB-C cables for the iPhone 15: What the experts recommend" height="128" width="170"></span></span></div><div class="content content-thumb"><h3>The best USB-C cables for the iPhone 15: What the experts recommend</h3><p class="summary">The new iPhone 15 series supports USB-C charging, but not all cables are created equal. This definitive (and technical) guide breaks down the top options for every iPhone 15 model.</p></div></a><div class="content content-thumb"><p class="meta"><span data-date="2023-09-22 18:23:00">September 22, 2023</span>
                        
                                                                                                                                    by 
                            <a rel="author" href="/meet-the-team/jason-perlow/">Jason Perlow</a><span class="topic-link"> in <a href="/topic/mobile-accessories/"> Mobile Accessories</a></span></p></div></div></article>

                                        <div data-no-js data-load="articles-loadMore">
        <a class="btn btn-primary btn-block load-more" href="/meet-the-team/jason-perlow/2/"><span class="text">View More Articles</span></a>
    </div>
                            </div>
            </section>                                            </div>
                                <div class="col-4">
                                
            
                    

                        <section class="mpu placeholder">
        


        <div data-ad="mpu-plus-top" data-ad-container="65a9752357eda" class="ad-mpu-plus-top ad-slot  ">
    </div>

    </section>
                    
            
                                    
            
                    

                    
                    
            <!-- Component template not found: familyName: medusa typeName: right_rail - view: null -->
        
            
                    

                    
    <section class="mpu">
        


        <div data-ad="mpu-bottom" data-ad-container="65a9752357eda" class="ad-mpu-bottom ad-slot  ">
    </div>

    </section>
                                                </div>
                                                </div>
                                    </div>
                    </div>
            </div>


                                                                        <section class="leader leader-bottom">
        


        <div data-ad="leader-plus-bottom" data-ad-container="65a9752357eda" class="ad-leader-plus-bottom ad-slot  ">
    </div>

    </section>
                    
                                                                                                        </div>
                            </div>

            
            </div>

                            

<footer role="contentinfo" class="footer-main">
    <script type="application/ld+json">{
    "@context": "http:\/\/schema.org",
    "@type": "Organization",
    "url": "https:\/\/www.zdnet.com\/",
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+1-415-344-2000",
            "contactType": "customer service"
        }
    ],
    "sameAs": [
        "https:\/\/www.facebook.com\/ZDNET.official",
        "https:\/\/twitter.com\/zdnet",
        "https:\/\/www.linkedin.com\/company\/zdnet-com",
        "https:\/\/www.youtube.com\/channel\/UCr9QWb5RKLfaunjKHJZAdQQ"
    ]
}</script>
            <a href="https://www.zdnet.com/" title="ZDNET" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_zdlogo", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">
                <svg class=" logo-horizontal">
        <use xlink:href="#logo-horizontal"></use>
    </svg>

            <span class="site-name">ZDNET</span>
        </a>
    
    <div class="container">
        <div class="row">
            <div class="col-6">
                <span class="slogan">we equip you to harness the power of disruptive innovation, at work and at home.</span>
            </div>

                        <div class="col-2 alpha">
                <ul>
                    <li><a href="https://www.zdnet.com/topic/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_topic", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Topics</a></li>
                    <li><a href="https://www.zdnet.com/pictures/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_galleries", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Galleries</a></li>
                    <li><a href="https://www.zdnet.com/video/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_videos", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Videos</a></li>
                    <li><a href="https://www.zdnet.com/do-not-sell-or-share-my-personal-information/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_ca", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Do Not Sell or Share My Personal Information</a></li>
                </ul>
            </div>

                        <div class="col-2 beta">
                <ul>
                    <li><a href="/about/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer-links", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-vanity-rewritten="true">about ZDNET</a></li>
                    <li><a href="https://www.zdnet.com/meet-the-team/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer-links", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Meet The Team</a></li>

                    <li><a href="/sitemap/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer-links", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-vanity-rewritten="true">Sitemap</a></li>
                    <li><a href="/reprints/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer-links", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-vanity-rewritten="true">Reprint Policy</a></li>
                </ul>
            </div>

                        <div class="col-2 gamma">
                <ul>
                                            <li class="loggedIn">
                            <a href="https://www.zdnet.com/members/preferences/" rel="nofollow" data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Manage</a> | <a href="https://www.zdnet.com/user/logout/" rel="nofollow" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "trackLogout", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Log Out</a>

                            <span class="zduser">
                                    <svg class=" user-icon">
        <use xlink:href="#user-icon"></use>
    </svg>

                            </span>
                        </li>

                        <li class="loggedOut">
                            <a data-authentication='{"appId":1101,"position":"footer","redirect":"https:\/\/www.zdnet.com\/members\/preferences\/"}' rel="nofollow" data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Join</a>
                            |
                            <a data-authentication='{"appId":1101,"position":"footer"}' rel="nofollow" data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Log In</a>
                        </li>
                                        <li><a href="/newsletters/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_newsletter", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-vanity-rewritten="true">Newsletters</a></li>
                    <li><a href="https://support.zdnet.com" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_assistance", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="">Site Assistance</a></li>
                    <li><a href="https://info.wrightsmedia.com/zdnet-licensing" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_licensing", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-component="externalLink">Licensing</a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="social-links-wrapper">
                    <a class="icon" target="_blank" title="facebook_icon" rel="noopener noreferrer" href="https://www.facebook.com/ZDNET.official" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_fb", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg viewbox="0 0 12 24"><path d="M3 8H0V12H3V24H8V12H11.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8Z"></path></svg>                    </a>
                    <a class="icon" target="_blank" title="twitter_icon" rel="noopener noreferrer" href="https://twitter.com/zdnet" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_twitter", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg viewbox="0 0 32.5 28.4">
<g>
    <path d="M32.5,3.4c-0.5,0.3-2.2,1-3.7,1.1c1-0.6,2.4-2.4,2.8-3.9c-0.9,0.6-3.1,1.6-4.2,1.6c0,0,0,0,0,0
        C26.1,0.9,24.4,0,22.5,0c-3.7,0-6.7,3.2-6.7,7.2c0,0.6,0.1,1.1,0.2,1.6h0C11,8.7,5.1,6,1.8,1.3c-2,3.8-0.3,8,2,9.5
        c-0.8,0.1-2.2-0.1-2.9-0.8c0,2.5,1.1,5.8,5.2,7c-0.8,0.5-2.2,0.3-2.8,0.2c0.2,2.1,3,4.9,6,4.9c-1.1,1.3-4.7,3.8-9.3,3
        c3.1,2,6.7,3.2,10.5,3.2c10.8,0,19.2-9.4,18.7-21.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1C30.2,6.4,31.5,5.1,32.5,3.4z"></path>
</g>
</svg>
                    </a>
                    <a class="icon" target="_blank" title="linkedin_icon" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/company/zdnet-com" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_linkedin", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg viewbox="0 0 31.9 32">
<g>
    <path d="M24,8c-5.1,0.1-7.7,3.8-8,4V8h-6v24h6V18c0-0.5,1.3-4.6,6-4c2.5,0.2,3.9,3.5,4,4v14l6,0V15.4
        C31.7,13,30.5,8.1,24,8z M0,32h6V8H0V32z M3,0C1.3,0,0,1.3,0,3s1.3,3,3,3c1.7,0,3-1.3,3-3S4.7,0,3,0z"></path>
</g>
</svg>
                    </a>
                    <a class="icon" target="_blank" title="youtube_icon" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCr9QWb5RKLfaunjKHJZAdQQ" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_yt", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>                    </a>
                    <a class="icon" target="_blank" title="instagram_icon" rel="noopener noreferrer nofollow" href="https://instagram.com/zdnet_official" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_instagram", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg viewbox="0 0 24 24">
    <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"></path>
</svg>                    </a>
                     <a class="icon" target="_blank" title="tiktok_icon" rel="noopener noreferrer nofollow" href="https://www.tiktok.com/@zdnet_official" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_instagram", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" data-component="externalLink">
                        <svg viewbox="0 0 22 24">
    <path d="M7.31932 24C6.78669 23.9219 6.24529 23.8788 5.72206 23.7594C2.75814 23.0844 0.444028 20.5163 0.0743215 17.5163C-0.41883 13.5163 2.2982 9.90625 6.30607 9.24375C7.10188 9.1125 8.14458 9.11875 8.65215 9.25438V13.1806C8.45225 13.1425 8.26489 13.0981 8.07503 13.0713C5.83611 12.7544 3.91301 14.4688 3.98632 16.7144C4.0446 18.4875 5.4758 19.95 7.30052 20.0994C9.04065 20.2419 10.7062 18.9806 11.0252 17.2631C11.0765 16.9632 11.1006 16.6593 11.0972 16.355C11.1039 11.0217 11.1079 5.68667 11.1091 0.35C11.1091 0.233125 11.1204 0.116875 11.126 0H15.0268C15.112 3.32312 17.5922 5.86438 20.8963 6.00438C21.0987 6.01313 21.1207 6.09313 21.12 6.25875C21.1157 7.39125 21.12 8.52375 21.12 9.65625V9.90625C18.8567 9.89688 16.859 9.20375 15.0337 7.85625C15.0337 7.98125 15.0337 8.06375 15.0337 8.14625C15.0416 10.8883 15.0485 13.6302 15.0543 16.3719C15.0548 16.7544 15.032 17.1365 14.986 17.5163C14.617 20.5881 12.1844 23.2037 9.13527 23.8081C8.69225 23.8956 8.23983 23.9369 7.79179 23.9994L7.31932 24Z" fill="white"></path>
</svg>
                    </a>
                </div>
            </div>
            <div class="col-8">
                <p class="copyright">© 2024 ZDNET, A Red Ventures company. All rights reserved.
                    <a href="https://redventures.com/privacy-policy.html" data-omitnoreferrer data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_TOS", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" rel="noopener noreferrer" target="_blank" data-component="externalLink">Privacy Policy</a> |
                    <a class="ot-sdk-show-settings" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_TOS", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" rel="nofollow noopener" target="_blank">Cookie Settings</a> |
                    <a href="/advertise/" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_TOS", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-vanity-rewritten="true">Advertise</a> |
                    <a href="https://redventures.com/CMG-terms-of-use.html" data-omniture-track="moduleClick" data-omniture-track-data='{"moduleInfo": "footer_TOS", "pageType": "meet_the_team"}' data-cohesion-track="elementClicked" data-cohesion-element-type="footer_links" data-cohesion-location="" rel="noopener noreferrer nofollow" target="_blank" data-component="externalLink">Terms of Use</a>
                </p>
            </div>
        </div>
    </div>
</footer>                    
        
<script>
	// Source: https://gist.github.com/jcxplorer/823878/
	// Licence: Public Domain
	function UUIDv4 (){var b="",a,c;for(a=0;32>a;a++){c=16*Math.random()|0;if(8==a||12==a||16==a||20==a)b+="-";b+=(12==a?4:16==a?c&3|8:c).toString(16)}return b};

	var __tealium_data_guid = UUIDv4(),
		utag_data = {"isEnabled":true,"articlePubDate":"2016-09-21 13:39:50","collectionId":[],"collectionName":[],"deviceType":"desktop","isDev":"0","pageType":"meet_the_team","siteHier":["aapt"],"siteSection":"aapt","siteType":"responsive web","topicId":["0fa8beef-ec91-11e3-95d2-02911863765e"],"topicName":["aapt"],"siteId":2,"bkSiteId":3330,"limit":4,"collectionSlug":[],"rsid":"cnetzdnetglobalsite","siteName":"zdnet","tealium":{"profile":"zdnet","env":"prod"}};
    	utag_data.pageViewGuid = __tealium_data_guid;
</script>

        <script type="application/javascript">
            for (var key in window.ZdnetPageVars.services){
                utag_data['services.' + key + '.enabled'] = window.ZdnetPageVars.services[key].enabled;
            }
            window.ZdnetFunctions.log(utag_data);
        </script>

                
                                        
        <script async data-main="https://www.zdnet.com/a/fly/8c5fb9-fly/js/main.default.js" src="https://www.zdnet.com/a/fly/js/libs/require-2.1.2.js"></script>

                    
            </body>
</html>
