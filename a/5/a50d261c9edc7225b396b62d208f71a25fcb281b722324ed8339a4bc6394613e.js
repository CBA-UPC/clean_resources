/*! @license Firebase v3.5.2
    Build: 3.5.2-rc.1
    Terms: https://developers.google.com/terms */
(function() {var f=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},h="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&
null!=global?global:this,l=function(a,b){if(b){var c=k;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&h(c,a,{configurable:!0,writable:!0,value:b})}},n=function(){n=function(){};k.Symbol||(k.Symbol=q)},t=0,q=function(a){return"jscomp_symbol_"+(a||"")+t++},v=function(){n();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&h(Array.prototype,a,{configurable:!0,writable:!0,
value:function(){return u(this)}});v=function(){}},u=function(a){var b=0;return w(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},w=function(a){v();a={next:a};a[k.Symbol.iterator]=function(){return this};return a},x=function(a){v();var b=a[Symbol.iterator];return b?b.call(a):u(a)};
l("Promise",function(a){function b(){this.a=null}if(a)return a;b.prototype.b=function(a){null==this.a&&(this.a=[],this.f());this.a.push(a)};b.prototype.f=function(){var a=this;this.c(function(){a.h()})};var c=k.setTimeout;b.prototype.c=function(a){c(a,0)};b.prototype.h=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(r){this.g(r)}}}this.a=null};b.prototype.g=function(a){this.c(function(){throw a;})};var d=function(a){this.b=
0;this.h=void 0;this.a=[];var b=this.f();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}};d.prototype.f=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.ca),reject:a(this.g)}};d.prototype.ca=function(a){if(a===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof d)this.da(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.w(a):this.j(a)}};d.prototype.w=
function(a){var b=void 0;try{b=a.then}catch(p){this.g(p);return}"function"==typeof b?this.ea(b,a):this.j(a)};d.prototype.g=function(a){this.o(2,a)};d.prototype.j=function(a){this.o(1,a)};d.prototype.o=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.b);this.b=a;this.h=b;this.v()};d.prototype.v=function(){if(null!=this.a){for(var a=this.a,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.a=null}};var e=new b;d.prototype.da=function(a){var b=this.f();
a.c(b.resolve,b.reject)};d.prototype.ea=function(a,b){var c=this.f();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};d.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(W){g(W)}}:b}var e,g,m=new d(function(a,b){e=a;g=b});this.c(c(a,e),c(b,g));return m};d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.c=function(a,b){function c(){switch(d.b){case 1:a(d.h);break;case 2:b(d.h);break;default:throw Error("Unexpected state: "+
d.b);}}var d=this;null==this.a?e.b(c):this.a.push(function(){e.b(c)})};d.resolve=function(a){return a instanceof d?a:new d(function(b){b(a)})};d.reject=function(a){return new d(function(b,c){c(a)})};d.b=function(a){return new d(function(b,c){for(var e=x(a),g=e.next();!g.done;g=e.next())d.resolve(g.value).c(b,c)})};d.a=function(a){var b=x(a),c=b.next();return c.done?d.resolve([]):new d(function(a,e){function g(b){return function(c){m[b]=c;p--;0==p&&a(m)}}var m=[],p=0;do m.push(void 0),p++,d.resolve(c.value).c(g(m.length-
1),e),c=b.next();while(!c.done)})};d.$jscomp$new$AsyncExecutor=function(){return new b};return d});l("Array.prototype.findIndex",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,g=0;g<e;g++)if(a.call(c,b[g],g,b)){a=g;break a}a=-1}return a}});l("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(a[g]=e[g])}return a}});
var y=this,z=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},A=function(a,b){function c(){}c.prototype=b.prototype;a.ja=b.prototype;a.prototype=new c;a.fa=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var B={i:"only-available-in-window",A:"only-available-in-sw",U:"should-be-overriden",l:"bad-sender-id",I:"incorrect-gcm-sender-id",S:"permission-default",R:"permission-blocked",Z:"unsupported-browser",L:"notifications-blocked",F:"failed-serviceworker-registration",m:"sw-registration-expected",H:"get-subscription-failed",K:"invalid-saved-token",s:"sw-reg-redundant",V:"token-subscribe-failed",X:"token-subscribe-no-token",W:"token-subscribe-no-push-set",$:"use-sw-before-get-token",J:"invalid-delete-token",
D:"delete-token-not-found",B:"bg-handler-function-expected",P:"no-window-client-to-msg",Y:"unable-to-resubscribe",N:"no-fcm-token-for-resubscribe",G:"failed-to-delete-token",O:"no-sw-in-reg"},C={},D=(C[B.i]="This method is available in a Window context.",C[B.A]="This method is available in a service worker context.",C[B.U]="This method should be overriden by extended classes.",C[B.l]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",C[B.S]=
"The required permissions were not granted and dismissed instead.",C[B.R]="The required permissions were not granted and blocked instead.",C[B.Z]="This browser doesn't support the API's required to use the firebase SDK.",C[B.L]="Notifications have been blocked.",C[B.F]="We are unable to register the default service worker. {$browserErrorMessage}",C[B.m]="A service worker registration was the expected input.",C[B.H]="There was an error when trying to get any existing Push Subscriptions.",C[B.K]="Unable to access details of the saved token.",
C[B.s]="The service worker being used for push was made redundant.",C[B.V]="A problem occured while subscribing the user to FCM: {$message}",C[B.X]="FCM returned no token when subscribing the user to push.",C[B.W]="FCM returned an invalid response when getting an FCM token.",C[B.$]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",C[B.J]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",C[B.D]="The deletion attempt for token could not be performed as the token was not found.",
C[B.B]="The input to setBackgroundMessageHandler() must be a function.",C[B.P]="An attempt was made to message a non-existant window client.",C[B.Y]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",C[B.N]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",C[B.G]="Unable to delete the currently saved token.",C[B.O]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
C[B.I]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",C);var E={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var F={u:"firebase-messaging-msg-type",C:"firebase-messaging-msg-data"},G={T:"push-msg-received",M:"notification-clicked"},H=function(a,b){var c={};return c[F.u]=a,c[F.C]=b,c};var I=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,I);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};A(I,Error);var J=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var K=function(a,b){b.unshift(a);I.call(this,J.apply(null,b));b.shift()};A(K,I);var aa=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new K(""+d,e||[]);}};var L=null;var M=function(a){a=new Uint8Array(a);var b=z(a);aa("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!L)for(L={},b=0;65>b;b++)L[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=L,c=[],d=0;d<a.length;d+=3){var e=a[d],g=d+1<a.length,m=g?a[d+1]:0,p=d+2<a.length,r=p?a[d+2]:0,V=e>>2,e=(e&3)<<4|m>>4,m=(m&15)<<2|r>>6,r=r&63;p||(r=64,g||(m=64));c.push(b[V],b[e],b[m],b[r])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var N=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D),O=function(){this.a=null},P=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=y.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},ba=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},Q=function(a,b){return P(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},ca=function(a,b){return P(a).then(function(a){return new Promise(function(c,e){var d=[],m=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
m.onerror=function(a){e(a.target.error)};m.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},R=function(a,b,c){var d=M(b.getKey("p256dh")),e=M(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw N.create(B.V,{message:a.error.message});if(!a.token)throw N.create(B.X);if(!a.pushSet)throw N.create(B.W);return{token:a.token,pushSet:a.pushSet}})},da=function(a,b,c,d,e,g){var m={swScope:c.scope,endpoint:d.endpoint,auth:M(d.getKey("auth")),p256dh:M(d.getKey("p256dh")),fcmToken:e,fcmPushSet:g,fcmSenderId:b};return P(a).then(function(a){return new Promise(function(b,c){var d=a.transaction(["fcm_token_object_Store"],
"readwrite").objectStore("fcm_token_object_Store").put(m);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
O.prototype.ba=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(N.create(B.l)):ca(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw N.create(B.H);}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&M(b.getKey("auth"))===a.auth&&M(b.getKey("p256dh"))===a.p256dh;
if(c)return a.fcmToken})}):Promise.reject(N.create(B.m))};O.prototype.getSavedToken=O.prototype.ba;O.prototype.aa=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(N.create(B.l)):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(E)}).then(function(d){return R(a,d).then(function(e){return da(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(N.create(B.m))};
O.prototype.createToken=O.prototype.aa;O.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(N.create(B.J)):Q(this,a).then(function(a){if(!a)throw N.create(B.D);return P(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(N.create(B.G)):c(a)}})})})};var S=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create(B.l);this.j=a.options.messagingSenderId;this.c=new O;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
S.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create(B.L)):Promise.resolve(null):this.f().then(function(b){return a.c.ba(a.j,b).then(function(c){return c?c:a.c.aa(a.j,b)})})};S.prototype.getToken=S.prototype.getToken;S.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
S.prototype.deleteToken=S.prototype.deleteToken;S.prototype.f=function(){throw this.a.create(B.U);};S.prototype.requestPermission=function(){throw this.a.create(B.i);};S.prototype.useServiceWorker=function(){throw this.a.create(B.i);};S.prototype.useServiceWorker=S.prototype.useServiceWorker;S.prototype.onMessage=function(){throw this.a.create(B.i);};S.prototype.onMessage=S.prototype.onMessage;S.prototype.onTokenRefresh=function(){throw this.a.create(B.i);};S.prototype.onTokenRefresh=S.prototype.onTokenRefresh;
S.prototype.setBackgroundMessageHandler=function(){throw this.a.create(B.A);};S.prototype.setBackgroundMessageHandler=S.prototype.setBackgroundMessageHandler;S.prototype.delete=function(){ba(this.c)};var T=self,U=function(a){var b=this;S.call(this,a);this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D);T.addEventListener("push",function(a){return ea(b,a)},!1);T.addEventListener("pushsubscriptionchange",function(a){return fa(b,a)},!1);T.addEventListener("notificationclick",function(a){return ga(b,a)},!1);this.b=null};f(U,S);
var ea=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=ha().then(function(b){if(b){if(c.notification||a.b)return ia(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return T.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},fa=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create(B.N);var c=a.c;return Q(c,b).then(function(b){if(!b)throw a.a.create(B.K);
return T.registration.pushManager.subscribe(E).then(function(a){return R(b.ha,a,b.ga)}).catch(function(d){return c.deleteToken(b.ia).then(function(){throw a.a.create(B.Y,{message:d});})})})});b.waitUntil(c)},ga=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=ja(d).then(function(a){return a?a:T.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
X(a,b,H(G.M,c))});b.waitUntil(e)}}};U.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create(B.B);this.b=a};U.prototype.setBackgroundMessageHandler=U.prototype.setBackgroundMessageHandler;
var ja=function(a){var b=(new URL(a)).href;return T.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},X=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create(B.P));b.postMessage(c);d()})},ha=function(){return T.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===a.visibilityState})})},
ia=function(a,b){return T.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=H(G.T,b);return Promise.all(c.map(function(b){return X(a,b,d)}))})};U.prototype.f=function(){return Promise.resolve(T.registration)};var Y=function(a){var b=this;S.call(this,a);this.h=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.h=a});this.w=null;this.v=firebase.INTERNAL.createSubscribe(function(a){b.w=a});ka(this)};f(Y,S);
Y.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?la(this).then(function(){return S.prototype.getToken.call(a)}):Promise.reject(this.a.create(B.Z))};Y.prototype.getToken=Y.prototype.getToken;
var la=function(a){if(a.g)return a.g;var b=document.querySelector('link[rel="manifest"]');b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create(B.I);}):a.g=Promise.resolve();return a.g};
Y.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create(B.R)):c(a.a.create(B.S))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};Y.prototype.requestPermission=Y.prototype.requestPermission;
Y.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create(B.m);if("undefined"!==typeof this.b)throw this.a.create(B.$);this.b=a};Y.prototype.useServiceWorker=Y.prototype.useServiceWorker;Y.prototype.onMessage=function(a,b,c){return this.o(a,b,c)};Y.prototype.onMessage=Y.prototype.onMessage;Y.prototype.onTokenRefresh=function(a,b,c){return this.v(a,b,c)};Y.prototype.onTokenRefresh=Y.prototype.onTokenRefresh;
var Z=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create(B.s));else{var g=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create(B.s));else return;c.removeEventListener("statechange",g)};c.addEventListener("statechange",g)}else e(a.a.create(B.O))})};
Y.prototype.f=function(){var a=this;if(this.b)return Z(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(b){throw a.a.create(B.F,{browserErrorMessage:b.message});}).then(function(b){return Z(a,b).then(function(){a.b=b;b.update();return b})})};
var ka=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data[F.u])switch(b=b.data,b[F.u]){case G.T:case G.M:a.h.next(b[F.C])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new U(a):new Y(a)},{Messaging:Y});})();
           label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-assinante",
            action: "https://www.uol.com.br/vivabem/dietas-para-emagrecer/",
            label: "botao-conheca",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-assinante",
            action: "clique",
            label: "fechar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-enquetes") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-meu-time-agora") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-colunas") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-investimentos") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-generica") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
  };
  const checkSkuLists = (listSku, dataSku) => {
    if (listSku.indexOf(dataSku) === -1) {
      listSku.push(dataSku);
    }
    return listSku.toString();
  };
  window.tickerAdManager = {
    model: model,
    cancelRequest: false,
    getCookie: getCookie,
    setCookie: setCookie,
    gaEvents: gaEvents,
    isDebug: isDebug,
    isMobile: isMobile,
    initBreakingNews: initBreakingNews,
    breakingNewsTestPage: breakingNewsTestPage,
    checkSkuLists: checkSkuLists,
    capitalize: capitalize,
  };
  // Main ---------------------------------------------------------------------
  let page = window.location.href;
  // const checkTeamPage = () => {
  //   // teste
  //   // page = "https://www.uol.com.br/esporte/ao-vivo/futebol/corinthians-agora/";
  //   if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/palmeiras-agora/"
  //   ) {
  //     return "palmeiras";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/sao-paulo-agora/"
  //   ) {
  //     return "saopaulo";
  //   } else if (
  //     page ==
  //     "https://www.uol.com.br/esporte/ao-vivo/futebol/corinthians-agora/"
  //   ) {
  //     return "corinthians";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/santos-agora/"
  //   ) {
  //     return "santos";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/flamengo-agora/"
  //   ) {
  //     return "flamengo";
  //   } else {
  //     return false;
  //   }
  // };
  const checkSubscriber = (datalake) => {
    var arrayAssinantes = ["Assinante", "Assinante em período trial"];
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      arrayAssinantes.includes(
        datalake.data["base-assinantes"].status_assinante
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromMeuTimeAgora = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      (datalake.data["base-assinantes"].produto == "COMBO NORDESTE" ||
        datalake.data["base-assinantes"].produto == "MTA")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromEconomia = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "INVESTIMENTOS" ||
        datalake.data["base-assinantes"].estacao == "UOL ECONOMIA")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromColunas = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "BLOGS" ||
        datalake.data["base-assinantes"].estacao == "BLOGS")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromEnquetes = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "ENQUETES" ||
        datalake.data["base-assinantes"].estacao == "ENQUETES")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkCountAccess = (counterAccessDataLake) => {
    if (
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake] &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais.totais &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais.totais.total_hits > 0
    ) {
      return window.tickerAdManager.model.data.datalake.data[
        counterAccessDataLake
      ].contagem_centrais.totais.total_hits;
    } else {
      return false;
    }
  };
  const frequency30Days = (acessoAtual) => {
    var contador = localStorage.getItem("30DaysFrequencyDay");
    var numeroContador = localStorage.getItem("numeroContador");
    if (Number(contador) == 3 && acessoAtual == numeroContador) {
      // mesmo dia de acesso, acesso maximo alcançado
      return false;
    }
    if (contador == null && numeroContador == null) {
      localStorage.setItem("numeroContador", String(acessoAtual));
      return true;
    }
    if (Number(contador) < 3 && acessoAtual == numeroContador) {
      return true;
    }
    if (acessoAtual != numeroContador) {
      localStorage.removeItem("numeroContador");
      // talker ja vai setar pra 1 a frequencia de acesso no dia
      localStorage.removeItem("30DaysFrequencyDay");
      localStorage.setItem("numeroContador", String(acessoAtual));
      return true;
    }
  };
  const counterDays = (userDataAccess) => {
    if (
      userDataAccess["base-assinantes"] &&
      userDataAccess["base-assinantes"].dt_venda
    ) {
      productContent = userDataAccess["base-assinantes"].produto;
      const dateSellSubscription = new Date(
        userDataAccess["base-assinantes"].dt_venda
      );
      var counter30DaysDataLake;
      if (dateSellSubscription < startedDate30Days) {
        //oneshot
        userCounterMethod = "oneshot";
        counter30DaysDataLake = checkCountAccess(
          "daily-access-counter-oneshot"
        );
        if (!frequency30Days(counter30DaysDataLake)) {
          return false;
        }
        if (!counter30DaysDataLake) {
          return false;
        }
        counter30DaysDataLake = counter30DaysDataLake + 1;
        if (
          (actuallyTalker30Days == "economia" ||
            actuallyTalker30Days == "generico") &&
          counter30DaysDataLake >= 36
        ) {
          return false;
        } else if (counter30DaysDataLake >= 31) {
          return false;
        }
        localStorage.setItem("acessoRegua30Dias", counter30DaysDataLake);
        return true;
      } else {
        //deslizante
        userCounterMethod = "deslizante";
        counter30DaysDataLake = checkCountAccess("daily-access-counter");
        if (!frequency30Days(counter30DaysDataLake)) {
          return false;
        }
        if (!counter30DaysDataLake) {
          return false;
        }
        var aux30Dias = localStorage.getItem("aux30Dias");
        var counter30Days = localStorage.getItem("acessoRegua30Dias");
        localStorage.setItem("acessoRegua30Dias", counter30DaysDataLake);
        if (aux30Dias && counter30Days && aux30Dias != counter30DaysDataLake) {
          localStorage.setItem("aux30Dias", String(counter30DaysDataLake));
          var local30Days = parseInt(counter30Days);
          local30Days++;
          localStorage.setItem("acessoRegua30Dias", String(local30Days));
        }
        if (!aux30Dias) {
          localStorage.setItem("aux30Dias", String(counter30DaysDataLake));
        }
        if (!counter30Days) {
          localStorage.setItem("acessoRegua30Dias", "1");
        }
        if (
          (actuallyTalker30Days == "economia" ||
            actuallyTalker30Days == "generico") &&
          parseInt(counter30Days) >= 36
        ) {
          return false;
        }
        if (counter30DaysDataLake >= 31) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  };
  const checkTag = (tag, counter) => {
    if (
      window.tickerAdManager.model.data.datalake.data &&
      window.tickerAdManager.model.data.datalake.data.tags &&
      window.tickerAdManager.model.data.datalake.data.tags.tags
    ) {
      var tags = window.tickerAdManager.model.data.datalake.data.tags.tags;
      var thisTag = Object.entries(tags).filter((x) => x[0] == tag);
      if (thisTag.length > 0 && thisTag[0][1] >= counter) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const checkTagHR = (tag, counter) => {
    if (
      counter != 0 &&
      window.tickerAdManager.model.data.datalakeHR &&
      window.tickerAdManager.model.data.datalakeHR.tags &&
      window.tickerAdManager.model.data.datalakeHR.tags.length > 0
    ) {
      var tags = window.tickerAdManager.model.data.datalakeHR.tags;
      var thisTag = tags.filter((x) => x.key == tag && x.count >= counter);
      if (thisTag.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const isNotHome = () => !page.match(/http(s):\/\/\www\.uol\.com\.br(\/)$/);
  const referrerIsNotHome = () =>
    !window.document.referrer.match(/http(s):\/\/\www\.uol\.com\.br(\/)$/);
  const isNotEconomia = () => !page.match(/economia.uol.com.br/);
  const viewedThisTicker = () => {
    const currentSkuList =
      tickerAdManager.getCookie(tickerAdManager.model.cookie.breakingNews) ||
      "";
    return currentSkuList.match(model.data.ticker.breakingNews[0].sku)
      ? true
      : false;
  };
  const samePage = (data) => {
    if (data && data.length > 0) {
      return page.match(data[0].link) ? true : false;
    }
  };
  const segment = {
    carros: "carros",
    noticias: "noticias",
    economia: "economia",
    esporte: "esporte",
    splash: "splash",
    tvefamosos: "tvefamosos",
    universa: "universa",
    vivabem: "vivabem",
    tilt: "tilt",
    ecoa: "ecoa",
    nossa: "nossa",
    tab: "tab",
    start: "start",
    play: "play",
    educacao: "educacao",
    entretenimento: "entrete",
    home: "home",
    mov: "mov",
  };
  const getCategory = (url) => {
    const category = url.filter((x) => {
      return ["uol", "com", "br", "videos"].every((y) => x !== y);
    });
    return category.length > 0 ? category[0] : "home";
  };
  const getPage = (pageUrl) => {
    const url = pageUrl.replace(/http(s)?:\/\/(www.)?/, "");
    const treatedUrl = url.split(/(\.|\/)/).filter((x) => x.length > 1);
    return segment[getCategory(treatedUrl)];
  };
  let pageName = getPage(window.location.href);
  const submitStage = async (ns) => {
    var keyword = null;
    switch (ns) {
      case "breaking-news":
        keyword = "ticker-breaking-news";
        if (window.changeAnchorAds) {
          window.activeBreakingNews = true;
          window.changeAnchorAds();
        }
        break;
      case "talkerMTA":
        keyword = "talker-mta-teste";
        break;
      case "talkerEnqueteAssinantes":
        keyword = "talker-enquete-assinantes";
        break;
      case "talker-cardapio-sem-cadastro-nao-assinante":
        keyword = "talker_nao_logado_nao_assinante";
        break;
      case "talker-cardapio-com-cadastro-nao-assinante":
        keyword = "talker_logado_nao_assinante";
        break;
      case "talker-cardapio-assinante":
        keyword = "talker_assinante";
        break;
      case "talker-30-dias-meu-time-agora":
        keyword = "talker-mta-30-dias";
        break;
      case "talker-30-dias-enquetes":
        keyword = "talker-enquete-30-dias";
        break;
      case "talker-30-dias-investimento":
        keyword = "talker-investimentos-30-dias";
        break;
      case "talker-30-dias-colunas":
        keyword = "talker-colunas-30-dias";
        break;
      case "talker-30-dias-generica":
        keyword = "talker-generica-30-dias";
        break;
      // case "economiaLevante":
      //   keyword = "ticker-levante";
      //   break;
      // case "olharApurado":
      //   keyword = "ticker-olhar-apurado";
      //   break;
      // case "talkerBBB":
      //   keyword = "talker-bbb";
      //   break;
    }
    if (keyword != null) {
      if (page && page.match(/testeTalker/)) {
        console.log(
          "testing",
          "criativo a ser chamado",
          keyword,
          "acesso a ser mostrado",
          localStorage.getItem("acessoRegua30Dias")
        );
        console.log("talker", keyword);
      }
      verifyAnchorAdsInPage();
      window.uolads &&
        window.uolads.push({
          id: "ticker",
          keyword: keyword,
          pos: "ticker",
        });
    }
  };
  Date.prototype.expirationDate = function () {
    // hora atual - 30 min
    this.setMinutes(this.getMinutes() - model.minutesExpireBN);
    const yyyy = this.getFullYear();
    const mm =
      this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : this.getMonth() + 1; // getMonth() is zero-based
    const dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    const hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    const min =
      this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    const ss =
      this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
    return ""
      .concat(yyyy)
      .concat(mm)
      .concat(dd)
      .concat(hh)
      .concat(min)
      .concat(ss);
  };
  const date = new Date();
  const expireBreakingNews = date.expirationDate();
  const timeEscolhido = () => {
    if (getCookie("meuTime")) {
      return true;
    } else if (
      model.data.datalake.data &&
      model.data.datalake.data["user-preferences"] &&
      model.data.datalake.data["user-preferences"].preferencias[
        "bloco-customizado-esporte"
      ] != null
    ) {
      return true;
    } else if (localStorage.getItem("conversacionalTime") != null) {
      return true;
    } else {
      return false;
    }
  };
  const hasBreakingNews = () => {
    if (
      window.location.href.match(/testeAnchorBreaking/) &&
      model.data.ticker.breakingNews.length > 0 &&
      model.data.ticker.breakingNews[0].active &&
      !samePage(model.data.ticker.breakingNews) &&
      isNotHome()
    ) {
      return true;
    } else if (
      model.breakingNewsEnabled &&
      // breakingNewsTestPage(model.breakingNewsTestPage) &&
      model.data.ticker.breakingNews.length > 0 &&
      model.data.ticker.breakingNews[0].active &&
      model.data.ticker.breakingNews[0].sku > expireBreakingNews &&
      !samePage(model.data.ticker.breakingNews) &&
      isNotHome() &&
      !viewedThisTicker()
    ) {
      return true;
    }
  };
  // const hasEconomiaLevante = () => {
  //   if (
  //     checkSubscriberEconomia(window.tickerAdManager.model.data.datalake) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.economiaLevante
  //     ) &&
  //     model.data.ticker.economiaLevante.length > 0 &&
  //     !samePage(model.data.ticker.economiaLevante)
  //   ) {
  //     return true;
  //   }
  // };
  const hasConversacionalMTA = () => {
    // condições para mostrar alert no teste
    if (window.location.href.match(/teste_ticker_2022/)) {
      var hasDatalakeTeam;
      var showTalkerMta;
      var isSportPage = pageName == "esporte" ? "Sim" : "Não";
      var hasCookieMeuTime = getCookie("meuTime") ? "Sim" : "Não";
      var hasFootballTag =
        universal_variable.aud.tags.match(/15308/) || checkTagHR(15308, 1)
          ? "Sim"
          : "Não";
      var hasLocalStorageteam =
        localStorage.getItem("conversacionalTime") != null ? "Sim" : "Não";
      if (
        model.data.datalake.data &&
        model.data.datalake.data["user-preferences"] &&
        model.data.datalake.data["user-preferences"].preferencias[
          "bloco-customizado-esporte"
        ] != null
      ) {
        hasDatalakeTeam = "Sim";
      } else {
        hasDatalakeTeam = "Não";
      }
      var timeoutCookieMta = window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.conversacionalTimes
      )
        ? "Sim"
        : "Não";
      if (
        isSportPage == "Sim" &&
        hasFootballTag == "Sim" &&
        hasCookieMeuTime == "Não" &&
        hasLocalStorageteam == "Não" &&
        hasDatalakeTeam == "Não" &&
        timeoutCookieMta == "Não"
      ) {
        showTalkerMta = "O talker MTA deve ser exibido";
      } else {
        showTalkerMta = "O talker MTA não deverá ser exibido";
      }
window.alert(`${showTalkerMta} \n
Seu usuário:
1. Está numa página de esporte: ${isSportPage}
2. Tem a tag de Futebol nº 15308: ${hasFootballTag}
3. Tem o cookie de meu time: ${hasCookieMeuTime}
4. Tem o time salvo no Local Storage: ${hasLocalStorageteam}
5. Tem o time salvo no Datalake: ${hasDatalakeTeam}
6. Está com o talker suspenso por 3 dias por ter sido fechado: ${timeoutCookieMta} \n
Se o item 1 ou 2 retornar *Não*, o Talker não será mostrado
Se algum item a partir do 3 retornar *Sim*, o Talker não será mostrado`);
    }
    // condições normais
    if (
      window.location.href.match(/teste_ticker_2022/) &&
      pageName == "esporte" &&
      !timeEscolhido() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.conversacionalTimes
      ) &&
      (universal_variable.aud.tags.match(/15308/) || checkTagHR(15308, 1))
    ) {
      return true;
    }
  };
  // const hasTalkerBBB = () => {
  //   if (
  //     pageName == "splash" &&
  //     checkTagHR(80557, 1) &&
  //     verifyUsername() &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.talkerBBB
  //     ) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.talkerBBBVote
  //     )
  //   ) {
  //     return true;
  //   }
  // };
  // const hasOlharApurado = () => {
  //   if (
  //     isNotEconomia() &&
  //     checkSubscriberBlogs(window.tickerAdManager.model.data.datalake) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.olharApurado
  //     ) &&
  //     model.data.ticker.olharApurado.length > 0 &&
  //     !samePage(model.data.ticker.olharApurado)
  //   ) {
  //     return true;
  //   }
  // };
  const hasTalkerEnqueteAssinantes = () => {
    if (
      isNotHome() &&
      referrerIsNotHome() &&
      verifyUsername() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.hasTalkerEnqueteAssinantes
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerSemCadastroNaoAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      !verifyUsername() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioSemCadastroNaoAssinante
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerComCadastroNaoAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      verifyUsername() &&
      !checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioComCadastroNaoAssinante
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      verifyUsername() &&
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioAssinante
      )
    ) {
      return true;
    }
  };
  const has30diasMeuTimeAgora = () => {
    actuallyTalker30Days = "mta";
    if (
      //verifica se é assinante E se é assinante pelo meu time agora
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromMeuTimeAgora(
        window.tickerAdManager.model.data.datalake
      ) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasEconomia = () => {
    actuallyTalker30Days = "economia";
    if (
      //verifica se é assinante E se é assinante pelo meu time agora
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromEconomia(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasEnquetes = () => {
    actuallyTalker30Days = "enquetes";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromEnquetes(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasColunas = () => {
    actuallyTalker30Days = "colunas";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromColunas(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasGenerico = () => {
    actuallyTalker30Days = "generico";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const checkTickersData = () => {
    if (model.data.ticker) {
      var intervalTalker = setInterval(() => {
        if (document.readyState === "complete") {
          // Breaking News
          if (hasBreakingNews()) {
            submitStage("breaking-news");
          }
          //   else if (has30diasMeuTimeAgora()) {
          //     submitStage("talker-30-dias-meu-time-agora");
          //   }
          //   else if (has30diasEnquetes()) {
          //     submitStage("talker-30-dias-enquetes");
          //   }
          //   else if (has30diasEconomia()) {
          //     submitStage("talker-30-dias-investimento");
          //   }
          //   else if (has30diasColunas()) {
          //     submitStage("talker-30-dias-colunas");
          //   }
          //   else if (has30diasGenerico()) {
          //     submitStage("talker-30-dias-generica");
          //   }
          // // Conversacional Times
          else if (hasConversacionalMTA()) {
            submitStage("talkerMTA");
          }
          // // Cardapios Sem Cadastro Nao Assinante
          // else if (hasCardapiosParaEmagrecerSemCadastroNaoAssinante()) {
          //   submitStage("talker-cardapio-sem-cadastro-nao-assinante");
          // }
          // // // Cardapios Com Cadastro Nao Assinante
          // else if (hasCardapiosParaEmagrecerComCadastroNaoAssinante()) {
          //   submitStage("talker-cardapio-com-cadastro-nao-assinante");
          // }
          // // // Cardapios Assinante
          // else if (hasCardapiosParaEmagrecerAssinante()) {
          //   submitStage("talker-cardapio-assinante");
          // }
          // Talker Enquete Assinantes
          // else if (hasTalkerEnqueteAssinantes()) {
          //   submitStage("talkerEnqueteAssinantes");
          // }
          // Economia - Levante
          // else if (hasEconomiaLevante()) {
          //   submitStage("economiaLevante");
          // }
          // // Talker BBB
          // else if (hasTalkerBBB()) {
          //   submitStage("talkerBBB");
          // }
          // Olhar Apurado
          // else if (hasOlharApurado()) {
          //   submitStage("olharApurado");
          // }
          clearInterval(intervalTalker);
        }
      }, 1000);
    }
  };
  const hasCacheBuster = async (url) =>
    (url +=
      url.indexOf("?") != -1
        ? "&cachebuster=" + Date.now()
        : "?cachebuster=" + Date.now());
  const checkBreakingNews = async () => {
    var urlBreakingNews =
      "https://c.jsuol.com.br/service/?loadComponent=latest-news-dynad&data=%7b%22format%22:%22json%22,%22slug%22:%22breaking-news%22%7d";
    var breakingData = await fetch(urlBreakingNews);
    breakingData = await breakingData.json();
    return breakingData;
  };
  const makeJson = async () => {
    // xyz
    // var urlUserData =
    // "https://udr.uol.com.br?ui=e91094aa-0136-4781-9bb5-be86963cf64c&scopes=user-preferences,tags,base-assinantes,daily-access-counter-oneshot,daily-access-counter";
    //   // "https://udr.uol.com.br?ui=2d116097-3e4f-4d21-909e-eefed271f836&scopes=user-preferences,tags,base-assinantes";
    // model.data.datalake = await fetch(urlUserData);
    var urlUserData =
      "https://udr.uol.com.br?scopes=user-preferences,tags,base-assinantes,daily-access-counter-oneshot,daily-access-counter";
    model.data.datalake = await fetch(urlUserData, {
      credentials: "include",
    });
    model.data.datalake = await model.data.datalake.json();
    let userId = tickerAdManager.isDebug()
      ? "951510644.1623094097"
      : tickerAdManager.getCookie("_ga");
    userId = userId ? userId.replace(/^([^.]+\.){2}/, "") : "";
    if (userId) {
      var urlDatalake =
        "https://history.recommendation.uol.com.br/get_tags_info?user_id=" +
        userId;
      model.data.datalakeHR = await fetch(urlDatalake);
      model.data.datalakeHR = await model.data.datalakeHR.json();
      // teste - force blog subscriber
      // model.data.datalakeHR.assinaturas = [
      //   {
      //     servico: "BLOG",
      //     produto: "PAYWALL",
      //     data_atualizacao: "20210330",
      //     data_inscricao: "20200423",
      //   },
      // ];
    }
    // var urlBR = "https://sna.dynad.net/eval/1000109";
    // var brData = await fetch(urlBR);
    // brData = await brData.json();
    // if (brData != null) {
    //   model.data.ticker.economiaLevante = brData.economiaLevante;
    //   model.data.ticker.olharApurado = brData.olharApurado;
    // }
    model.data.ticker.breakingNews = await checkBreakingNews();
    if (tickerAdManager.isDebug()) {
      model.data.ticker.breakingNews.active = true;
      model.data.ticker.breakingNews.id = "20220307163300";
    }
    if (
      model.data.ticker.breakingNews &&
      !model.data.ticker.breakingNews.active
    ) {
      model.data.ticker.breakingNews = [];
    } else {
      model.data.ticker.breakingNews = [
        {
          sku: model.data.ticker.breakingNews.id,
          name: model.data.ticker.breakingNews.title,
          link: model.data.ticker.breakingNews.url,
          description: model.data.ticker.breakingNews.kicker,
          active: model.data.ticker.breakingNews.active,
        },
      ];
    }
    checkTickersData();
  };
  makeJson();
})();
