!function(e,t){"use stricbject.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};function o(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var a="FirebaseError",c=Error.captureStackTrace,u=function(){return function(e,t){if(this.code=e,this.message=t,c)c(this,h.prototype.create);else try{throw Error.apply(this,arguments)}catch(e){this.name=a,Object.defineProperty(this,"stack",{get:function(){return e.stack}})}}}();u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u.prototype.name=a;var h=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n,this.pattern=/\{\$([^}]+)}/g}return e.prototype.create=function(e,t){void 0===t&&(t={});var n,r=this.errors[e],i=this.service+"/"+e;n=void 0===r?"Error":r.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?r.toString():"<"+n+"?>"}),n=this.serviceName+": "+n+" ("+i+").";var o=new u(i,n);for(var s in t)t.hasOwnProperty(s)&&"_"!==s.slice(-1)&&(o[s]=t[s]);return o},e}();(function(e){function t(){var t=e.call(this)||this;t.chain_=[],t.buf_=[],t.W_=[],t.pad_=[],t.inbuf_=0,t.total_=0,t.blockSize=64,t.pad_[0]=128;for(var n=1;n<t.blockSize;++n)t.pad_[n]=0;return t.reset(),t}r(t,e),t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],h=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=h^c&(u^h),s=1518500249):(o=c^u^h,s=1859775393):r<60?(o=c&u|h&(c|u),s=2400959708):(o=c^u^h,s=3395469782);i=(a<<5|a>>>27)+o+f+s+n[r]&4294967295;f=h,h=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},t.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0==o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o==this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o==this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},t.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}})(function(){return function(){this.blockSize=-1}}());function f(e,t){var n=new d(e,t);return n.subscribe.bind(n)}var d=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=p),void 0===r.error&&(r.error=p),void 0===r.complete&&(r.complete=p);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}}),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}();function p(){}var l,_,E,b={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",TOKEN_UNSUBSCRIBE_FAILED:"token-unsubscribe-failed",TOKEN_UPDATE_FAILED:"token-update-failed",TOKEN_UPDATE_NO_TOKEN:"token-update-no-token",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key",INVALID_PUBLIC_VAPID_KEY:"invalid-public-vapid-key",USE_PUBLIC_KEY_BEFORE_GET_TOKEN:"use-public-key-before-get-token",PUBLIC_KEY_DECRYPTION_FAILED:"public-vapid-key-decryption-failed"},v=((l={})[b.AVAILABLE_IN_WINDOW]="This method is available in a Window context.",l[b.AVAILABLE_IN_SW]="This method is available in a service worker context.",l[b.SHOULD_BE_INHERITED]="This method should be overriden by extended classes.",l[b.BAD_SENDER_ID]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",l[b.PERMISSION_DEFAULT]="The required permissions were not granted and dismissed instead.",l[b.PERMISSION_BLOCKED]="The required permissions were not granted and blocked instead.",l[b.UNSUPPORTED_BROWSER]="This browser doesn't support the API's required to use the firebase SDK.",l[b.NOTIFICATIONS_BLOCKED]="Notifications have been blocked.",l[b.FAILED_DEFAULT_REGISTRATION]="We are unable to register the default service worker. {$browserErrorMessage}",l[b.SW_REGISTRATION_EXPECTED]="A service worker registration was the expected input.",l[b.GET_SUBSCRIPTION_FAILED]="There was an error when trying to get any existing Push Subscriptions.",l[b.INVALID_SAVED_TOKEN]="Unable to access details of the saved token.",l[b.SW_REG_REDUNDANT]="The service worker being used for push was made redundant.",l[b.TOKEN_SUBSCRIBE_FAILED]="A problem occured while subscribing the user to FCM: {$message}",l[b.TOKEN_SUBSCRIBE_NO_TOKEN]="FCM returned no token when subscribing the user to push.",l[b.TOKEN_SUBSCRIBE_NO_PUSH_SET]="FCM returned an invalid response when getting an FCM token.",l[b.TOKEN_UNSUBSCRIBE_FAILED]="A problem occured while unsubscribing the user from FCM: {$message}",l[b.TOKEN_UPDATE_FAILED]="A problem occured while updating the user from FCM: {$message}",l[b.TOKEN_UPDATE_NO_TOKEN]="FCM returned no token when updating the user to push.",l[b.USE_SW_BEFORE_GET_TOKEN]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",l[b.INVALID_DELETE_TOKEN]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",l[b.DELETE_TOKEN_NOT_FOUND]="The deletion attempt for token could not be performed as the token was not found.",l[b.DELETE_SCOPE_NOT_FOUND]="The deletion attempt for service worker scope could not be performed as the scope was not found.",l[b.BG_HANDLER_FUNCTION_EXPECTED]="The input to setBackgroundMessageHandler() must be a function.",l[b.NO_WINDOW_CLIENT_TO_MSG]="An attempt was made to message a non-existant window client.",l[b.UNABLE_TO_RESUBSCRIBE]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",l[b.NO_FCM_TOKEN_FOR_RESUBSCRIBE]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",l[b.FAILED_TO_DELETE_TOKEN]="Unable to delete the currently saved token.",l[b.NO_SW_IN_REG]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",l[b.INCORRECT_GCM_SENDER_ID]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",l[b.BAD_SCOPE]="The service worker scope must be a string with at least one character.",l[b.BAD_VAPID_KEY]="The public VAPID key is not a Uint8Array with 65 bytes.",l[b.BAD_SUBSCRIPTION]="The subscription must be a valid PushSubscription.",l[b.BAD_TOKEN]="The FCM Token used for storage / lookup was not a valid token string.",l[b.BAD_PUSH_SET]="The FCM push set used for storage / lookup was not not a valid push set string.",l[b.FAILED_DELETE_VAPID_KEY]="The VAPID key could not be deleted.",l[b.INVALID_PUBLIC_VAPID_KEY]="The public VAPID key must be a string.",l[b.PUBLIC_KEY_DECRYPTION_FAILED]="The public VAPID key did not equal 65 bytes when decrypted.",l),g=new h("messaging","Messaging",v),T=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),S="https://fcm.googleapis.com";function y(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),i=0;i<e.byteLength;i++)if(n.getUint8(i)!==r.getUint8(i))return!1;return!0}function w(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(null,t))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(_||(_={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(E||(E={}));var I=function(){function e(){}return e.prototype.getToken=function(e,t,n){return o(this,void 0,void 0,function(){var r,i,o,a,c,u,h,f;return s(this,function(s){switch(s.label){case 0:r=w(t.getKey("p256dh")),i=w(t.getKey("auth")),o="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+i,y(n.buffer,T.buffer)||(a=w(n),o+="&application_pub_key="+a),(c=new Headers).append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:c,body:o},s.label=1;case 1:return s.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/subscribe",u)];case 2:return[4,s.sent().json()];case 3:return h=s.sent(),[3,5];case 4:throw s.sent(),g.create(b.TOKEN_SUBSCRIBE_FAILED);case 5:if(h.error)throw f=h.error.message,g.create(b.TOKEN_SUBSCRIBE_FAILED,{message:f});if(!h.token)throw g.create(b.TOKEN_SUBSCRIBE_NO_TOKEN);if(!h.pushSet)throw g.create(b.TOKEN_SUBSCRIBE_NO_PUSH_SET);return[2,{token:h.token,pushSet:h.pushSet}]}})})},e.prototype.updateToken=function(e,t,n,r,i){return o(this,void 0,void 0,function(){var o,a,c,u,h,f,d,p;return s(this,function(s){switch(s.label){case 0:o=w(r.getKey("p256dh")),a=w(r.getKey("auth")),c="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+o+"&encryption_auth="+a,y(i.buffer,T.buffer)||(u=w(i),c+="&application_pub_key="+u),(h=new Headers).append("Content-Type","application/x-www-form-urlencoded"),f={method:"POST",headers:h,body:c},s.label=1;case 1:return s.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/subscribe",f)];case 2:return[4,s.sent().json()];case 3:return d=s.sent(),[3,5];case 4:throw s.sent(),g.create(b.TOKEN_UPDATE_FAILED);case 5:if(d.error)throw p=d.error.message,g.create(b.TOKEN_UPDATE_FAILED,{message:p});if(!d.token)throw g.create(b.TOKEN_UPDATE_NO_TOKEN);return[2,d.token]}})})},e.prototype.deleteToken=function(e,t,n){return o(this,void 0,void 0,function(){var r,i,o,a,c;return s(this,function(s){switch(s.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,(i=new Headers).append("Content-Type","application/x-www-form-urlencoded"),o={method:"POST",headers:i,body:r},s.label=1;case 1:return s.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/unsubscribe",o)];case 2:return[4,s.sent().json()];case 3:if((a=s.sent()).error)throw c=a.error.message,g.create(b.TOKEN_UNSUBSCRIBE_FAILED,{message:c});return[3,5];case 4:throw s.sent(),g.create(b.TOKEN_UNSUBSCRIBE_FAILED);case 5:return[2]}})})},e}();function D(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}var N="undefined",m="fcm_token_object_Store";function O(){var e=indexedDB.open(N);e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains(m)){var t=e.transaction(m).objectStore(m),n=new I,r=t.openCursor();r.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},r.onsuccess=function(){var t=r.result;if(t){var i=t.value;n.deleteToken(i.fcmSenderId,i.fcmToken,i.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(N)}}}(e.result)}}var k=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){return this.createTransaction(function(n){return n.index(e).get(t)})},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return o(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),o(this,void 0,void 0,function(){var n,r,i,o;return s(this,function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),i=r.objectStore(this.objectStoreName),[4,function(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}(e(i))];case 2:return o=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(o)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}();var A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return r(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:O();case 2:var r,o=(r=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,n=i({},t);t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=D(t.vapidKey)),"string"==typeof t.auth&&(n.auth=D(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=D(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return o(this,void 0,void 0,function(){return s(this,function(t){if(!e)throw g.create(b.BAD_TOKEN);return P({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return o(this,void 0,void 0,function(){return s(this,function(t){if(!e)throw g.create(b.BAD_SCOPE);return P({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return o(this,void 0,void 0,function(){return s(this,function(t){if(!e.swScope)throw g.create(b.BAD_SCOPE);if(!e.vapidKey)throw g.create(b.BAD_VAPID_KEY);if(!e.endpoint||!e.auth||!e.p256dh)throw g.create(b.BAD_SUBSCRIPTION);if(!e.fcmSenderId)throw g.create(b.BAD_SENDER_ID);if(!e.fcmToken)throw g.create(b.BAD_TOKEN);if(!e.fcmPushSet)throw g.create(b.BAD_PUSH_SET);return P(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(g.create(b.INVALID_DELETE_TOKEN))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=n.sent()))throw g.create(b.DELETE_TOKEN_NOT_FOUND);return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}})})},t}(k);function P(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw g.create(b.BAD_TOKEN);if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw g.create(b.BAD_SCOPE);if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw g.create(b.BAD_VAPID_KEY);if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw g.create(b.BAD_SUBSCRIPTION);if(e.auth&&!(e.auth instanceof ArrayBuffer))throw g.create(b.BAD_SUBSCRIPTION);if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw g.create(b.BAD_SUBSCRIPTION);if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw g.create(b.BAD_SENDER_ID);if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw g.create(b.BAD_PUSH_SET)}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return r(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw g.create(b.BAD_SCOPE);return[4,this.get(e)];case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return o(this,void 0,void 0,function(){var n;return s(this,function(r){if("string"!=typeof e||0===e.length)throw g.create(b.BAD_SCOPE);if(null===t||65!==t.length)throw g.create(b.BAD_VAPID_KEY);return n={swScope:e,vapidKey:t},[2,this.put(n)]})})},t.prototype.deleteVapidDetails=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=n.sent()))throw g.create(b.DELETE_SCOPE_NOT_FOUND);return[4,this.delete(e)];case 2:return n.sent(),[2,t]}})})},t}(k),B="messagingSenderId",R=function(){function e(e){var t=this;if(!e.options[B]||"string"!=typeof e.options[B])throw g.create(b.BAD_SENDER_ID);this.messagingSenderId=e.options[B],this.tokenDetailsModel=new A,this.vapidDetailsModel=new C,this.iidModel=new I,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return o(this,void 0,void 0,function(){var e,t,n,r,i;return s(this,function(o){switch(o.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw g.create(b.NOTIFICATIONS_BLOCKED);return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=o.sent(),[4,this.getPublicVapidKey_()];case 2:return n=o.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=o.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(i=o.sent())?[2,this.manageExistingToken(t,r,n,i)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return o(this,void 0,void 0,function(){return s(this,function(i){switch(i.label){case 0:return function(e,t,n){if(!n.vapidKey||!y(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,i=y(e.getKey("auth"),n.auth),o=y(e.getKey("p256dh"),n.p256dh);return r&&i&&o}(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return i.sent(),[2,this.getNewToken(e,t,n)]}})})},e.prototype.updateToken=function(e,t,n,r){return o(this,void 0,void 0,function(){var i,o,a;return s(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return i=s.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:i,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return s.sent(),[2,i];case 4:return a=s.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw s.sent(),a;case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return o(this,void 0,void 0,function(){var r,i;return s(this,function(o){switch(o.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=o.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return o.sent(),[2,r.token]}})})},e.prototype.deleteToken=function(e){return o(this,void 0,void 0,function(){var t,n;return s(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent())return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then(function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},e.prototype.requestPermission=function(){throw g.create(b.AVAILABLE_IN_WINDOW)},e.prototype.useServiceWorker=function(e){throw g.create(b.AVAILABLE_IN_WINDOW)},e.prototype.usePublicVapidKey=function(e){throw g.create(b.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,n){throw g.create(b.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefresh=function(e,t,n){throw g.create(b.AVAILABLE_IN_WINDOW)},e.prototype.setBackgroundMessageHandler=function(e){throw g.create(b.AVAILABLE_IN_SW)},e.prototype.delete=function(){return o(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}();var U=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return r(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return o(this,void 0,void 0,function(){var t,n,r,i,o,a;return s(this,function(s){switch(s.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return s.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return i=s.sent(),o=n.actions,a=Notification.maxActions,o&&a&&o.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,i.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return s.sent(),[2];case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return o(this,void 0,void 0,function(){var e,t,n,r;return s(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=i.sent(),[3,3];case 2:throw t=i.sent(),g.create(b.UNABLE_TO_RESUBSCRIBE,{message:t});case 3:return i.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return i.sent(),[3,8];case 5:return n=i.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(r=i.sent()))throw n;return[4,this.deleteToken(r.fcmToken)];case 7:throw i.sent(),n;case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return o(this,void 0,void 0,function(){var t,n,r,i;return s(this,function(o){switch(o.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(n=t.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2];case 1:return(r=o.sent())?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=o.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=o.sent(),o.label=5;case 5:return r?(delete t.notification,i=K(E.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,i)]):[2]}})})},t.prototype.getNotificationData_=function(e){if(e&&"object"==typeof e.notification){var t,n=i({},e.notification);return n.data=i({},e.notification.data,((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw g.create(b.BG_HANDLER_FUNCTION_EXPECTED);this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return o(this,void 0,void 0,function(){var t,n,r,i;return s(this,function(o){switch(o.label){case 0:return t=new URL(e,self.location.href).href,[4,L()];case 1:for(n=o.sent(),r=null,i=0;i<n.length;i++)if(new URL(n[i].url,self.location.href).href===t){r=n[i];break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return o(this,void 0,void 0,function(){return s(this,function(n){if(!e)throw g.create(b.NO_WINDOW_CLIENT_TO_MSG);return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return o(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,L()];case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return o(this,void 0,void 0,function(){var t,n,r=this;return s(this,function(i){switch(i.label){case 0:return[4,L()];case 1:return t=i.sent(),n=K(E.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))];case 2:return i.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return o(this,void 0,void 0,function(){return s(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return o(this,void 0,void 0,function(){var e,t;return s(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=n.sent()))throw g.create(b.SW_REGISTRATION_EXPECTED);return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=n.sent())?[2,T]:[2,t]}})})},t}(R);function L(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function K(e,t){return(n={})[_.TYPE_OF_MSG]=e,n[_.DATA]=t,n;var n}var M=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=f(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=f(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return r(t,e),t.prototype.getToken=function(){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=function(){return o(this,void 0,void 0,function(){var e,t;return s(this,function(n){switch(n.label){case 0:if(!(e=document.querySelector('link[rel="manifest"]')))return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(e.href)];case 2:return[4,n.sent().json()];case 3:return t=n.sent(),[3,5];case 4:return n.sent(),[2];case 5:if(!t||!t.gcm_sender_id)return[2];if("103953800507"!==t.gcm_sender_id)throw g.create(b.INCORRECT_GCM_SENDER_ID);return[2]}})})}()),[4,this.manifestCheckPromise];case 1:return t.sent(),[2,e.prototype.getToken.call(this)]}})})},t.prototype.requestPermission=function(){return o(this,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?g.create(b.PERMISSION_BLOCKED):g.create(b.PERMISSION_DEFAULT)}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw g.create(b.SW_REGISTRATION_EXPECTED);if(null!=this.registrationToUse)throw g.create(b.USE_SW_BEFORE_GET_TOKEN);this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw g.create(b.INVALID_PUBLIC_VAPID_KEY);if(null!=this.publicVapidKeyToUse)throw g.create(b.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);var t=D(e);if(65!==t.length)throw g.create(b.PUBLIC_KEY_DECRYPTION_FAILED);this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise(function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var i=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(g.create(b.SW_REG_REDUNDANT))}t.removeEventListener("statechange",i)};t.addEventListener("statechange",i)}else r(g.create(b.SW_REG_REDUNDANT));else n(e);else r(g.create(b.NO_SW_IN_REG))})},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw g.create(b.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return o(this,void 0,void 0,function(){return s(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,T]})})},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[_.TYPE_OF_MSG]){var n=t.data;switch(n[_.TYPE_OF_MSG]){case E.PUSH_MSG_RECEIVED:case E.NOTIFICATION_CLICKED:var r=n[_.DATA];e.messageObserver&&e.messageObserver.next(r)}}},!1)},t}(R);function F(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}W={isSupported:F},t.INTERNAL.registerService("messaging",function(e){if(!F())throw g.create(b.UNSUPPORTED_BROWSER);return self&&"ServiceWorkerGlobalScope"in self?new U(e):new M(e)},W)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging - be sure to load firebase-app.js first.")}var W}(this.firebase=this.firebase||{},firebase);
//# sourceMappingURL=firebase-messaging.js.map
(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-6bcec72b]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-6bcec72b]{display:block}a[data-v-6bcec72b]{cursor:pointer}button[data-v-6bcec72b]:focus{outline:none}a[data-v-6bcec72b],button[data-v-6bcec72b],input[data-v-6bcec72b],optgroup[data-v-6bcec72b],select[data-v-6bcec72b],textarea[data-v-6bcec72b]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-6bcec72b],h2[data-v-6bcec72b],h3[data-v-6bcec72b],h4[data-v-6bcec72b],h5[data-v-6bcec72b],h6[data-v-6bcec72b],p[data-v-6bcec72b]{word-wrap:break-word}[data-v-6bcec72b]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.promote-stories[data-v-6bcec72b]{width:100%;padding:32px 40px 28px;background:#f5f4f3;margin:0 auto}@media(min-width:768px){.promote-stories[data-v-6bcec72b]{padding:0 40px 40px}}@media(min-width:1200px){.promote-stories[data-v-6bcec72b]{padding:0 48px 60px}}.promote-stories__title[data-v-6bcec72b]{display:flex;justify-content:space-between;width:100%}.promote-stories__cards[data-v-6bcec72b],.promote-stories__title[data-v-6bcec72b]{margin:0 auto;max-width:1120px}@media(min-width:768px){.promote-stories__cards[data-v-6bcec72b]{display:flex;flex-wrap:wrap}}",""]),t.exports=n},1753:function(t,e,r){"use strict";r(1078)},1754:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-b746641a]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-b746641a]{display:block}a[data-v-b746641a]{cursor:pointer}button[data-v-b746641a]:focus{outline:none}a[data-v-b746641a],button[data-v-b746641a],input[data-v-b746641a],optgroup[data-v-b746641a],select[data-v-b746641a],textarea[data-v-b746641a]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-b746641a],h2[data-v-b746641a],h3[data-v-b746641a],h4[data-v-b746641a],h5[data-v-b746641a],h6[data-v-b746641a],p[data-v-b746641a]{word-wrap:break-word}[data-v-b746641a]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.promote-stories[data-v-b746641a]{width:100%;padding:32px 40px 28px;margin:0 auto;background:#f5f4f3}@media(min-width:768px){.promote-stories[data-v-b746641a]{padding:40px}}@media(min-width:1200px){.promote-stories[data-v-b746641a]{padding:60px 48px}}.promote-stories__title[data-v-b746641a]{display:flex;justify-content:space-between;width:100%}.promote-stories__cards[data-v-b746641a],.promote-stories__title[data-v-b746641a]{margin:0 auto;max-width:1120px}@media(min-width:768px){.promote-stories__cards[data-v-b746641a]{display:flex;flex-wrap:wrap}}",""]),t.exports=n},1755:function(t,e,r){"use strict";r(1079)},1756:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-11647b55]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-11647b55]{display:block}a[data-v-11647b55]{cursor:pointer}button[data-v-11647b55]:focus{outline:none}a[data-v-11647b55],button[data-v-11647b55],input[data-v-11647b55],optgroup[data-v-11647b55],select[data-v-11647b55],textarea[data-v-11647b55]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-11647b55],h2[data-v-11647b55],h3[data-v-11647b55],h4[data-v-11647b55],h5[data-v-11647b55],h6[data-v-11647b55],p[data-v-11647b55]{word-wrap:break-word}[data-v-11647b55]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.video-card[data-v-11647b55]{width:100%;border:1px solid rgba(0,0,0,.05);display:inline-block}.video-card+.video-card[data-v-11647b55]{margin-top:20px}@media(min-width:768px){.video-card+.video-card[data-v-11647b55]{margin:0 0 0 20px}}@media(min-width:768px){.video-card[data-v-11647b55]{width:calc(100vw - 120px)}}.video-card picture[data-v-11647b55]{width:100%;background:grey}.video-card picture img[data-v-11647b55]{-o-object-fit:cover;object-fit:cover;width:100%}.video-card__text[data-v-11647b55]{background:#fff;border-radius:2px;font-weight:500;font-size:18px;line-height:140%;letter-spacing:.01em;color:rgba(0,0,0,.87);padding:12px 16px 16px}@media(min-width:768px){.video-card__text[data-v-11647b55]{height:78px}}@media(min-width:1200px){.video-card__text[data-v-11647b55]{font-size:20px;line-height:140%;height:80px}}.video-card__text span[data-v-11647b55]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}@media(min-width:768px){.video-card__text span[data-v-11647b55]{-webkit-line-clamp:2}}",""]),t.exports=n},1757:function(t,e,r){"use strict";r(1080)},1758:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-45e4a632]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-45e4a632]{display:block}a[data-v-45e4a632]{cursor:pointer}button[data-v-45e4a632]:focus{outline:none}a[data-v-45e4a632],button[data-v-45e4a632],input[data-v-45e4a632],optgroup[data-v-45e4a632],select[data-v-45e4a632],textarea[data-v-45e4a632]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-45e4a632],h2[data-v-45e4a632],h3[data-v-45e4a632],h4[data-v-45e4a632],h5[data-v-45e4a632],h6[data-v-45e4a632],p[data-v-45e4a632]{word-wrap:break-word}[data-v-45e4a632]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.video-list[data-v-45e4a632]{background:#75787b;padding:34px 40px}@media(min-width:768px){.video-list[data-v-45e4a632]{padding:40px}}@media(min-width:1200px){.video-list[data-v-45e4a632]{padding:60px}}.video-list__title[data-v-45e4a632]{display:flex;justify-content:space-between}.video-list__cards[data-v-45e4a632],.video-list__title[data-v-45e4a632]{margin:0 auto;max-width:1120px}@media(min-width:768px){.video-list__cards[data-v-45e4a632]{display:flex}}",""]),t.exports=n},1759:function(t,e,r){r(32),r(22),r(25),r(15),r(38),r(26),r(27),r(39);var n=r(173),o=r(174),d=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(64),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,v=void 0===c?[]:c,h=data.class,f=data.staticClass,style=data.style,w=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,d);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,w],attrs:Object.assign({width:"15",height:"26",viewBox:"0 0 15 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x)},y),v.concat([r("path",{attrs:{d:"M0.254883 12.9238C0.254883 13.0703 0.279297 13.207 0.328125 13.334C0.386719 13.4512 0.469727 13.5635 0.577148 13.6709L12.2959 24.8037C12.4912 25.0088 12.7305 25.1113 13.0137 25.1113C13.1992 25.1113 13.3652 25.0674 13.5117 24.9795C13.668 24.8916 13.79 24.7695 13.8779 24.6133C13.9756 24.4668 14.0244 24.2959 14.0244 24.1006C14.0244 23.8369 13.9268 23.6025 13.7314 23.3975L2.71582 12.9238L13.7314 2.4502C13.9268 2.24512 14.0244 2.01074 14.0244 1.74707C14.0244 1.55176 13.9756 1.38086 13.8779 1.23438C13.79 1.07812 13.668 0.956055 13.5117 0.868164C13.3652 0.780273 13.1992 0.736328 13.0137 0.736328C12.7305 0.736328 12.4912 0.833984 12.2959 1.0293L0.577148 12.1768C0.469727 12.2842 0.386719 12.4014 0.328125 12.5283C0.279297 12.6455 0.254883 12.7773 0.254883 12.9238Z",fill:"white"}})]))}}},1760:function(t,e,r){r(32),r(22),r(25),r(15),r(38),r(26),r(27),r(39);var n=r(173),o=r(174),d=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(64),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,v=void 0===c?[]:c,h=data.class,f=data.staticClass,style=data.style,w=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,d);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,w],attrs:Object.assign({width:"15",height:"26",viewBox:"0 0 15 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x)},y),v.concat([r("path",{attrs:{d:"M14.7598 12.9238C14.7598 12.7773 14.7305 12.6455 14.6719 12.5283C14.6133 12.4014 14.5303 12.2842 14.4229 12.1768L2.71875 1.0293C2.52344 0.833984 2.2793 0.736328 1.98633 0.736328C1.81055 0.736328 1.64453 0.780273 1.48828 0.868164C1.33203 0.956055 1.20996 1.07812 1.12207 1.23438C1.03418 1.38086 0.990234 1.55176 0.990234 1.74707C0.990234 2.01074 1.08301 2.24512 1.26855 2.4502L12.2842 12.9238L1.26855 23.3975C1.08301 23.6025 0.990234 23.8369 0.990234 24.1006C0.990234 24.2959 1.03418 24.4668 1.12207 24.6133C1.20996 24.7695 1.33203 24.8916 1.48828 24.9795C1.64453 25.0674 1.81055 25.1113 1.98633 25.1113C2.2793 25.1113 2.52344 25.0088 2.71875 24.8037L14.4229 13.6709C14.5303 13.5635 14.6133 13.4512 14.6719 13.334C14.7305 13.207 14.7598 13.0703 14.7598 12.9238Z",fill:"white"}})]))}}},1761:function(t,e,r){"use strict";r(1081)},1762:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-56cec896]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-56cec896]{display:block}a[data-v-56cec896]{cursor:pointer}button[data-v-56cec896]:focus{outline:none}a[data-v-56cec896],button[data-v-56cec896],input[data-v-56cec896],optgroup[data-v-56cec896],select[data-v-56cec896],textarea[data-v-56cec896]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-56cec896],h2[data-v-56cec896],h3[data-v-56cec896],h4[data-v-56cec896],h5[data-v-56cec896],h6[data-v-56cec896],p[data-v-56cec896]{word-wrap:break-word}[data-v-56cec896]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.card[data-v-56cec896]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card__image[data-v-56cec896]{width:100%;height:0;padding-bottom:50%;overflow:hidden;margin-bottom:44px}@media(min-width:768px){.card__image[data-v-56cec896]{margin-bottom:48px}}.card__name[data-v-56cec896]{font-size:18px;line-height:140%;letter-spacing:.01em;color:rgba(0,0,0,.66)}@media(min-width:768px){.card__name[data-v-56cec896]{font-size:20px}}.card__link[data-v-56cec896]{margin-top:4px;letter-spacing:.01em;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:rgba(0,0,0,.5);font-size:16px;line-height:150%}",""]),t.exports=n},1763:function(t,e,r){"use strict";r(1082)},1764:function(t,e,r){var n=r(36)(!1);n.push([t.i,'@font-face{font-family:"swiper-icons";src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}[data-v-8e4de3ba]:root{--swiper-theme-color:#007aff}.swiper-container[data-v-8e4de3ba]{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper[data-v-8e4de3ba]{flex-direction:column}.swiper-wrapper[data-v-8e4de3ba]{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide[data-v-8e4de3ba],.swiper-wrapper[data-v-8e4de3ba]{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper[data-v-8e4de3ba]{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper[data-v-8e4de3ba]{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper[data-v-8e4de3ba]{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events[data-v-8e4de3ba]{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical[data-v-8e4de3ba]{touch-action:pan-x}.swiper-slide[data-v-8e4de3ba]{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank[data-v-8e4de3ba]{visibility:hidden}.swiper-container-autoheight[data-v-8e4de3ba],.swiper-container-autoheight .swiper-slide[data-v-8e4de3ba]{height:auto}.swiper-container-autoheight .swiper-wrapper[data-v-8e4de3ba]{align-items:flex-start;transition-property:transform,height}.swiper-container-3d[data-v-8e4de3ba]{perspective:1200px}.swiper-container-3d .swiper-cube-shadow[data-v-8e4de3ba],.swiper-container-3d .swiper-slide[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-bottom[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-left[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-right[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-top[data-v-8e4de3ba],.swiper-container-3d .swiper-wrapper[data-v-8e4de3ba]{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-left[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-right[data-v-8e4de3ba],.swiper-container-3d .swiper-slide-shadow-top[data-v-8e4de3ba]{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left[data-v-8e4de3ba]{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right[data-v-8e4de3ba]{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top[data-v-8e4de3ba]{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom[data-v-8e4de3ba]{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper[data-v-8e4de3ba]{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper[data-v-8e4de3ba]::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide[data-v-8e4de3ba]{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper[data-v-8e4de3ba]{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper[data-v-8e4de3ba]{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}[data-v-8e4de3ba]:root{--swiper-navigation-size:44px}.swiper-button-next[data-v-8e4de3ba],.swiper-button-prev[data-v-8e4de3ba]{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled[data-v-8e4de3ba],.swiper-button-prev.swiper-button-disabled[data-v-8e4de3ba]{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next[data-v-8e4de3ba]:after,.swiper-button-prev[data-v-8e4de3ba]:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev[data-v-8e4de3ba],.swiper-container-rtl .swiper-button-next[data-v-8e4de3ba]{left:10px;right:auto}.swiper-button-prev[data-v-8e4de3ba]:after,.swiper-container-rtl .swiper-button-next[data-v-8e4de3ba]:after{content:"prev"}.swiper-button-next[data-v-8e4de3ba],.swiper-container-rtl .swiper-button-prev[data-v-8e4de3ba]{right:10px;left:auto}.swiper-button-next[data-v-8e4de3ba]:after,.swiper-container-rtl .swiper-button-prev[data-v-8e4de3ba]:after{content:"next"}.swiper-button-next.swiper-button-white[data-v-8e4de3ba],.swiper-button-prev.swiper-button-white[data-v-8e4de3ba]{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black[data-v-8e4de3ba],.swiper-button-prev.swiper-button-black[data-v-8e4de3ba]{--swiper-navigation-color:#000}.swiper-button-lock[data-v-8e4de3ba]{display:none}.swiper-pagination[data-v-8e4de3ba]{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden[data-v-8e4de3ba]{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets[data-v-8e4de3ba],.swiper-pagination-custom[data-v-8e4de3ba],.swiper-pagination-fraction[data-v-8e4de3ba]{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic[data-v-8e4de3ba]{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet[data-v-8e4de3ba]{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active[data-v-8e4de3ba],.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main[data-v-8e4de3ba]{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev[data-v-8e4de3ba]{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev[data-v-8e4de3ba]{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next[data-v-8e4de3ba]{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next[data-v-8e4de3ba]{transform:scale(.33)}.swiper-pagination-bullet[data-v-8e4de3ba]{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet[data-v-8e4de3ba]{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet[data-v-8e4de3ba]{cursor:pointer}.swiper-pagination-bullet-active[data-v-8e4de3ba]{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets[data-v-8e4de3ba]{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet[data-v-8e4de3ba]{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[data-v-8e4de3ba]{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet[data-v-8e4de3ba]{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet[data-v-8e4de3ba]{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[data-v-8e4de3ba]{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet[data-v-8e4de3ba]{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet[data-v-8e4de3ba]{transition:transform .2s,right .2s}.swiper-pagination-progressbar[data-v-8e4de3ba]{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill[data-v-8e4de3ba]{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill[data-v-8e4de3ba]{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar[data-v-8e4de3ba],.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[data-v-8e4de3ba]{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[data-v-8e4de3ba],.swiper-container-vertical>.swiper-pagination-progressbar[data-v-8e4de3ba]{width:4px;height:100%;left:0;top:0}.swiper-pagination-white[data-v-8e4de3ba]{--swiper-pagination-color:#fff}.swiper-pagination-black[data-v-8e4de3ba]{--swiper-pagination-color:#000}.swiper-pagination-lock[data-v-8e4de3ba]{display:none}.swiper-scrollbar[data-v-8e4de3ba]{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar[data-v-8e4de3ba]{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar[data-v-8e4de3ba]{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag[data-v-8e4de3ba]{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag[data-v-8e4de3ba]{cursor:move}.swiper-scrollbar-lock[data-v-8e4de3ba]{display:none}.swiper-zoom-container[data-v-8e4de3ba]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas[data-v-8e4de3ba],.swiper-zoom-container>img[data-v-8e4de3ba],.swiper-zoom-container>svg[data-v-8e4de3ba]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed[data-v-8e4de3ba]{cursor:move}.swiper-lazy-preloader[data-v-8e4de3ba]{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin-data-v-8e4de3ba 1s linear infinite;animation:swiper-preloader-spin-data-v-8e4de3ba 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white[data-v-8e4de3ba]{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black[data-v-8e4de3ba]{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin-data-v-8e4de3ba{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin-data-v-8e4de3ba{to{transform:rotate(1turn)}}.swiper-container .swiper-notification[data-v-8e4de3ba]{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide[data-v-8e4de3ba]{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide[data-v-8e4de3ba]{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide[data-v-8e4de3ba]{pointer-events:none}.swiper-container-fade .swiper-slide-active[data-v-8e4de3ba],.swiper-container-fade .swiper-slide-active .swiper-slide-active[data-v-8e4de3ba]{pointer-events:auto}.swiper-container-cube[data-v-8e4de3ba]{overflow:visible}.swiper-container-cube .swiper-slide[data-v-8e4de3ba]{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide[data-v-8e4de3ba]{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide[data-v-8e4de3ba]{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-active .swiper-slide-active[data-v-8e4de3ba]{pointer-events:auto}.swiper-container-cube .swiper-slide-active[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-next[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-next+.swiper-slide[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-prev[data-v-8e4de3ba]{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-shadow-left[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-shadow-right[data-v-8e4de3ba],.swiper-container-cube .swiper-slide-shadow-top[data-v-8e4de3ba]{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow[data-v-8e4de3ba]{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow[data-v-8e4de3ba]:before{content:"";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-container-flip[data-v-8e4de3ba]{overflow:visible}.swiper-container-flip .swiper-slide[data-v-8e4de3ba]{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide[data-v-8e4de3ba]{pointer-events:none}.swiper-container-flip .swiper-slide-active[data-v-8e4de3ba],.swiper-container-flip .swiper-slide-active .swiper-slide-active[data-v-8e4de3ba]{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom[data-v-8e4de3ba],.swiper-container-flip .swiper-slide-shadow-left[data-v-8e4de3ba],.swiper-container-flip .swiper-slide-shadow-right[data-v-8e4de3ba],.swiper-container-flip .swiper-slide-shadow-top[data-v-8e4de3ba]{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}html[data-v-8e4de3ba]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-8e4de3ba]{display:block}a[data-v-8e4de3ba]{cursor:pointer}button[data-v-8e4de3ba]:focus{outline:none}a[data-v-8e4de3ba],button[data-v-8e4de3ba],input[data-v-8e4de3ba],optgroup[data-v-8e4de3ba],select[data-v-8e4de3ba],textarea[data-v-8e4de3ba]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-8e4de3ba],h2[data-v-8e4de3ba],h3[data-v-8e4de3ba],h4[data-v-8e4de3ba],h5[data-v-8e4de3ba],h6[data-v-8e4de3ba],p[data-v-8e4de3ba]{word-wrap:break-word}[data-v-8e4de3ba]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.info-graph[data-v-8e4de3ba]{padding:40px 0;max-width:1200px;margin:0 auto}@media(min-width:768px){.info-graph[data-v-8e4de3ba]{padding:60px 0}}.info-graph__title[data-v-8e4de3ba]{padding:0 40px;margin-bottom:40px;display:flex;justify-content:space-between}@media(min-width:768px){.info-graph__swiper[data-v-8e4de3ba]{margin:0 40px}}.swiper-button-nav[data-v-8e4de3ba]{width:36px;height:36px;background:rgba(0,0,0,.1);border-radius:50%;display:flex;justify-content:center;align-items:center;position:absolute;top:25vw;z-index:20;transform:translateY(-50%);font-weight:274;font-size:30px;line-height:16px}@media(min-width:768px){.swiper-button-nav[data-v-8e4de3ba]{width:60px;height:60px;top:calc(25vw - 20px)}}@media(min-width:1200px){.swiper-button-nav[data-v-8e4de3ba]{top:280px}}.swiper-button-nav svg[data-v-8e4de3ba]{height:12px}@media(min-width:768px){.swiper-button-nav svg[data-v-8e4de3ba]{height:40px}}.swiper-button-nav--prev[data-v-8e4de3ba]{left:4px}@media(min-width:768px){.swiper-button-nav--prev[data-v-8e4de3ba]{left:12px}}.swiper-button-nav--next[data-v-8e4de3ba]{right:4px}@media(min-width:768px){.swiper-button-nav--next[data-v-8e4de3ba]{right:12px}}.swiper-pagination[data-v-8e4de3ba]{position:absolute;top:calc(50vw + 20px);width:100%;display:flex;justify-content:center;margin-bottom:8px}@media(min-width:768px){.swiper-pagination[data-v-8e4de3ba]{top:calc(50vw - 20px)}}@media(min-width:1200px){.swiper-pagination[data-v-8e4de3ba]{top:580px}}.swiper-pagination[data-v-8e4de3ba] .swiper-pagination-bullet{width:16px;height:4px;background:rgba(0,0,0,.1);border-radius:100px}@media(min-width:768px){.swiper-pagination[data-v-8e4de3ba] .swiper-pagination-bullet{width:40px;height:8px}}.swiper-pagination[data-v-8e4de3ba] .swiper-pagination-bullet+.swiper-pagination-bullet{margin-left:8px}.swiper-pagination[data-v-8e4de3ba] .swiper-pagination-bullet-active{background:#ed8b00}',""]),t.exports=n},1765:function(t,e,r){"use strict";r(1083)},1766:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-12784c46]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-12784c46]{display:block}a[data-v-12784c46]{cursor:pointer}button[data-v-12784c46]:focus{outline:none}a[data-v-12784c46],button[data-v-12784c46],input[data-v-12784c46],optgroup[data-v-12784c46],select[data-v-12784c46],textarea[data-v-12784c46]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-12784c46],h2[data-v-12784c46],h3[data-v-12784c46],h4[data-v-12784c46],h5[data-v-12784c46],h6[data-v-12784c46],p[data-v-12784c46]{word-wrap:break-word}[data-v-12784c46]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.home-poll[data-v-12784c46]{padding:40px 0;max-width:1200px;margin:0 auto}@media(min-width:768px){.home-poll[data-v-12784c46]{padding:60px 0}}.home-poll__title[data-v-12784c46]{padding:0 40px;display:flex;justify-content:space-between}.home-poll__content[data-v-12784c46]{padding:0 40px;max-width:1200px;margin:0 auto}@media(min-width:768px){.home-poll__content[data-v-12784c46]{padding:0 40px}}@media(min-width:1200px){.home-poll__content[data-v-12784c46]{padding:0 40px}}",""]),t.exports=n},1767:function(t,e,r){"use strict";r(1084)},1768:function(t,e,r){var n=r(36)(!1);n.push([t.i,"html[data-v-5d7496d0]{font-family:source-han-sans-traditional,sans-serif}picture[data-v-5d7496d0]{display:block}a[data-v-5d7496d0]{cursor:pointer}button[data-v-5d7496d0]:focus{outline:none}a[data-v-5d7496d0],button[data-v-5d7496d0],input[data-v-5d7496d0],optgroup[data-v-5d7496d0],select[data-v-5d7496d0],textarea[data-v-5d7496d0]{-webkit-tap-highlight-color:rgba(0,0,0,0)}h1[data-v-5d7496d0],h2[data-v-5d7496d0],h3[data-v-5d7496d0],h4[data-v-5d7496d0],h5[data-v-5d7496d0],h6[data-v-5d7496d0],p[data-v-5d7496d0]{word-wrap:break-word}[data-v-5d7496d0]:export{breakpoint-xs:0;breakpoint-sm:576px;breakpoint-md:768px;breakpoint-lg:960px;breakpoint-xl:1200px;breakpoint-xxl:1440px}.g-page-wrapper[data-v-5d7496d0]{min-height:100vh;overflow:hidden;background:#f5f4f3}",""]),t.exports=n},1775:function(t,e,r){"use strict";r.r(e);r(32),r(22),r(38),r(26),r(27),r(39);var n=r(175),o=r(16),d=r(14),l=(r(60),r(25),r(15),r(58),r(64),r(496),r(50),r(51),r(59),r(179)),c=r.n(l),v=r(888),h=r.n(v),f=r(1776),w=r(1769),m=r(1770),x=r(1071),y=r.n(x),A=r(34),k=r(1739),_=r.n(k),j=r(1740),O=r.n(j),C=r(178),z={name:"EditorChoiceFeaturedCard",components:{HeroImageInList:C.a},props:{postId:{type:String,default:""},title:{type:String,default:""},video:{type:String,default:""},img:{type:Object,default:function(){}},ogImg:{type:Object,default:function(){}},group:{type:Object,default:function(){}},content:{type:Object,default:function(){}}},computed:{briefContent:function(){if(!this.content)return"";for(var t=this.content.blocks,e="",r=0;r<(null==t?void 0:t.length)&&e.length<150;)e+=t[r].text,r++;return e.slice(0,150)},image:function(){var t,e;return null===(t=this.img)||void 0===t||null===(e=t.resized)||void 0===e?void 0:e.original}}},P=(r(1741),r(12)),B=Object(P.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"mask"}),t._v(" "),r("a",{staticClass:"image",attrs:{href:"/story/"+t.postId,rel:"noopener noreferrer"}},[r("picture",[r("HeroImageInList",{attrs:{alt:t.title,heroImage:t.img,ogImage:t.ogImg,heroVideo:t.video,isLazyLoad:!1}})],1)]),t._v(" "),[t.group?r("a",{staticClass:"group",attrs:{href:"/group/"+t.group.slug}},[t._v(t._s(t.group.name))]):t._e(),t._v(" "),r("div",{staticClass:"text"},[r("a",{attrs:{href:"/story/"+t.postId}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),r("p",[t._v(t._s(t.briefContent))])])]],2)}),[],!1,null,"f82209b0",null).exports;function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}f.a.use([w.a,m.a]);var S=y()(f.a).directive,M={name:"EditorChoiceSwiper",components:{EditorChoiceFeaturedCard:B,preSvg:_.a,nextSvg:O.a},directives:{swiper:S},props:{posts:{type:Array,default:function(){return[]}}},computed:E(E({},Object(A.b)("viewport",["viewportWidth"])),{},{isMobile:function(){return this.viewportWidth<768},swiperOption:function(){return{loop:this.isMultipleSlides,spaceBetween:0,centeredSlides:!0,autoplay:this.swiperOptionAutoplay,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return"<li class=\"' + ".concat(e," + '\" key=").concat(t,"></li>")}}}},isMultipleSlides:function(){var t;return(null===(t=this.posts)||void 0===t?void 0:t.length)>1},swiperOptionAutoplay:function(){return!!this.isMultipleSlides&&{delay:5e3,disableOnInteraction:!1}}})},Y=(r(1743),Object(P.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"container swiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.posts,(function(t){return r("div",{key:t.id,staticClass:"swiper-slide"},[r("EditorChoiceFeaturedCard",{attrs:{postId:t.id,img:t.heroImage,ogImg:t.ogImage,video:t.heroVideo,title:t.name,group:t.group,content:t.content}})],1)})),0),t._v(" "),t.isMultipleSlides&&!t.isMobile?r("button",{staticClass:"swiper-button-nav swiper-button-nav--prev swiper-nav swiper-nav--left",on:{click:function(e){return t.mySwiper.slidePrev()}}},[r("preSvg")],1):t._e(),t._v(" "),t.isMultipleSlides&&!t.isMobile?r("button",{staticClass:"swiper-button-nav swiper-button-nav--next swiper-nav swiper-nav--right",on:{click:function(e){return t.mySwiper.slideNext()}}},[r("nextSvg")],1):t._e(),t._v(" "),r("div",{staticClass:"swiper-pagination",class:[{hidden:!t.isMultipleSlides}]})])}),[],!1,null,"06c18809",null).exports),D={name:"EditorChoiceCard",components:{HeroImageInList:C.a},props:{postId:{type:String,default:""},title:{type:String,default:""},img:{type:Object,default:function(){}},ogImg:{type:Object,default:function(){}},group:{type:Object,default:function(){}},color:{type:String,default:""},video:{type:String,default:""}},computed:{cssProps:function(){return{"--text-background":this.color}}}};r(1745);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={name:"RdEditorChoice",components:{EditorChoiceCard:Object(P.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",style:t.cssProps},[r("a",{staticClass:"image",attrs:{href:"/story/"+t.postId,rel:"noopener noreferrer"}},[r("picture",[r("HeroImageInList",{attrs:{alt:t.title,heroImage:t.img,ogImage:t.ogImg,heroVideo:t.video,isLazyLoad:!0}})],1)]),t._v(" "),r("div",{staticClass:"text"},[t.group?r("a",{staticClass:"text__group",attrs:{href:"/group/"+t.group.slug}},[t._v(t._s(t.group.name))]):t._e(),t._v(" "),r("a",{staticClass:"text__title",attrs:{href:"/story/"+t.postId}},[t._v(t._s(t.title))])])])}),[],!1,null,"b37ea6b2",null).exports,EditorChoiceSwiper:Y},props:{posts:{type:Array,default:function(){return[]}}},computed:{featuredPosts:function(){var t,e,r=this.posts.length;return r>3?null===(e=this.posts)||void 0===e?void 0:e.slice(0,r-2):[(null===(t=this.posts)||void 0===t?void 0:t[0])||{}]},postItems:function(){var t,e,r,n,o,d,l=["#ED8B00","#00A9E0"],c=this.posts.length;return c>3?null!==(n=null===(o=this.posts)||void 0===o||null===(d=o.slice(c-2))||void 0===d?void 0:d.map((function(t,i){return L(L({},t),{},{color:l[i]})})))&&void 0!==n?n:[]:null!==(t=null===(e=this.posts)||void 0===e||null===(r=e.slice(1,3))||void 0===r?void 0:r.map((function(t,i){return L(L({},t),{},{color:l[i]})})))&&void 0!==t?t:[]}}},H=(r(1747),Object(P.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"editoru--button__holder">
              <span data-href="#" data-id="1"
                class="btn btn-border btn-border--blue custom-menu--button custom-menu--button-disabled disabled">即時</span>
              <span data-href="#" data-id="2"
                class="btn btn-border btn-border--blue custom-menu--button custom-menu--button-disabled disabled">要聞</span>
            </div>
          </section>
  
  
        </section>
      </div>
  
  
    </section>
    
      
  </header>

    <section class="navigation-submenu">
      <div class="container">

        <navigation class="navigation-submenu__selector">

        </navigation>
        <div class="navigation-submenu__wrapper">

          <!-- insert from here -->

        </div>

        <div class="navigation-submenu__controls">
          <div class="arrow-area left">
            <span class="arrow left-arrow i-arrow7-left"></span>
          </div>
          <div class="arrow-area right">
            <span class="arrow right-arrow i-arrow7-right"></span>
          </div>
        </div>
      </div>
      <footer class="navigation-submenu__footer">
        <div class="container">
        </div>
      </footer>
    </section>
  <section class="udn-idle"></section>
  <main class="main-content two-column main-cate main-cate--focus">
<div class="container">
	<!-- breaking-news : add "breaking-news-\-single" classes if only 1 news  -->
		<style>
#ads-index-top--mobile { min-height: inherit; }
#ads-index-top--mobile iframe { margin:auto; }
#ads-index-top--mobile > div { margin: auto; display: block !important; text-align: center; }
</style>

<!-- /129853887/udn.com/2_News/3_News-Mobile/4_News-Mobile-a01 ※Mobile_頭版大佈告_3000x250※-->
<div class='udn-ads udn-ads--mobile' id='ads-index-top--mobile' style='min-height: 280px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('ads-index-top--mobile'); });
  </script>
</div><!-- #Location: /inc/ads/index_top_ads -->
	<!-- normal index ads -->
	<section class="wrapper-left main-cate__basic">
				<!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a06  ※PC巨無霸_970x250※ -->
<div class='udn-ads' id='ads-superBanner' style="min-width: 970px; min-height: 250px;">
<script>
googletag.cmd.push(function() { googletag.display('ads-superBanner'); });
</script>
</div><!-- #Location: /inc/ads/menu_bottom_left -->
		        <script>
          var __UDN__ = __UDN__ || {};
          __UDN__.newsLists = [
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600',
              title: '聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能',
              titleLink: '/news/story/7338/7719710?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28766264.jpg&s=Y&x=0&y=4&sw=1280&sh=853&exp=3600',
              title: '【重磅快評】特拉斯助中共攻台 吳釗燮又讓台灣當盤子',
              titleLink: '/news/story/11091/7718630?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28765961.jpg&s=Y&x=0&y=17&sw=2364&sh=1576&exp=3600',
              title: '【重磅快評】蔣萬安造謠？ 王必勝把審計部踩在腳下',
              titleLink: '/news/story/11091/7718534?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764440.jpg&s=Y&x=0&y=32&sw=4606&sh=3070&exp=3600',
              title: '【即時短評】拉綠打藍，柯文哲故技重施能騙過藍綠嗎？',
              titleLink: '/news/story/11091/7718132?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600',
              title: '聯合報黑白集／科目三「舞統」台灣？',
              titleLink: '/news/story/7338/7719713?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
            {
              type: 'picture',
              url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600',
              title: '經濟日報社論／對新政府財經內閣的期待',
              titleLink: '/news/story/7338/7719560?from=udn_ch2_menu_v2_main_cate',
              content_level: '開放閱讀',
              story_list: 'list_評論_slider',
            },
          ];
        </script>
        <div v-cloak class="udn-slider " data-options="{'autoplay': true, 'autoPlayTimer': 10000}" ref="slider"
          @mouseover="clearInterval" @mouseleave="intervalFunction" :class="{'udn-slider--sliding': dragging}" style="background-image: url('https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&q=20')">
        
          <section class="slide-holder" :style="styleObject" ref="sliderWrapper">
            <section class="slide" v-for="(item, index) in lists" :key="index" :class="{'active': index === currentIndex}"
              :style="{'width': slideWidth + 'px'}">
   
              <div class="slide-section slide-picture" v-if="item.type === 'picture'">
                <a class="slide-image" :href="item.titleLink" :title="item.title" :data-story_list="item.story_list" :data-content_level="item.content_level">
                  <picture>
                    <source media="(min-width: 1024px)" :data-srcset="item.url + '&w=970&nt=1, ' + item.url + '&w=1140&nt=1 2x'" type="image/webp">
                    <source media="(min-width: 1024px)" :data-srcset="item.url + '&w=970, ' + item.url + '&w=1140 2x'" type="image/jpeg">

                    <source :data-srcset="item.url + '&w=485&nt=1, ' + item.url + '&w=730&nt=1 2x'" type="image/webp">
                    <source :data-srcset="item.url + '&w=485, ' + item.url + '&w=730 2x'" type="image/jpeg">
                    <img class="lazyload" :data-src="item.url + '&w=970'" loading="lazy" alt="">
                  </picture>
                </a>
                <div class="slide-links">
                  <h2>
                    <a :href="item.titleLink" :title="item.title" :data-story_list="item.story_list" :data-content_level="item.content_level">
                      {{item.title}}
                    </a>
                  </h2>
                  <div class="slide-divider">
                    <h3 v-for="(subItem, index2) in item.subItems" v-if="subItem.title !== ''" :key="index2">
                      <a :href="subItem.titleLink" :title="subItem.title" :data-story_list="item.story_list">
                        {{subItem.title}}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>           
<!--
              <div class="slide-section slide-picture" v-if="item.type === 'picture'">
                <a class="slide-image" :href="item.titleLink" :title="item.title">
                  <picture>
                    <source media="(min-width: 1024px)" :data-srcset="item.url + '&w=970&nt=1, ' + item.url + '&w=1140&nt=1 2x'" type="image/webp">
                    <source media="(min-width: 1024px)" :data-srcset="item.url + '&w=970, ' + item.url + '&w=1140 2x'" type="image/jpeg">

                    <source :data-srcset="item.url + '&w=485&nt=1, ' + item.url + '&w=730&nt=1 2x'" type="image/webp">
                    <source :data-srcset="item.url + '&w=485, ' + item.url + '&w=730 2x'" type="image/jpeg">
                    <img class="lazyload" :data-src="item.url + '&w=970'" loading="lazy" alt="">
                  </picture>
                </a>
                <div class="slide-links">
                  <h2>
                    <a :href="item.titleLink" :title="item.title">
                      {{item.title}}
                    </a>
                  </h2>
                  <div class="slide-divider">
                    <h3 v-for="(subItem, index2) in item.subItems" v-if="subItem.title !== ''" :key="index2">
                      <a :href="subItem.titleLink" :title="subItem.title">
                        {{subItem.title}}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
-->        
              <div class="slide-section slide-iframe" v-if="item.type === 'iframe'">
                <iframe :src="item.url" frameborder="0"></iframe>
              </div>
        
              <div class="slide-section slide-dfp" v-if="item.type === 'dfp'">
                <div :id="item.id"></div>
              </div>
        
        
            </section>
          </section>
        
          <section class="slider-controls">
        
            <span class="left-arrow i-arrow7-left" @click="goTo((currentIndex === 0) ? lists.length - 1 : currentIndex - 1)"></span>
            <span class="right-arrow i-arrow7-right" @click="goTo((currentIndex === lists.length - 1) ? 0 : currentIndex + 1)"></span>
        
        
            <section class="slider-dot">
              <span role="button" :title="item.title" v-for="(item, index) in lists" :class="{active: index === currentIndex}"
                :key="index" @click="goTo(index)"></span>
            </section>
          </section>
        
        </div>
		        <div class="focus">
            <a href="https://global.udn.com/global_vision/story/8664/7532862?form=udn_ch2_common3_cate" data-story_list="list_評論_三小" data-content_level="開放閱讀" class="focus-list">
              <div class="focus-list__image">
              <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/26/0/28766295.jpg&s=Y&x=0&y=0&sw=1277&sh=852&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/26/0/28766295.jpg&s=Y&x=0&y=0&sw=1277&sh=852&exp=3600&w=300" type="image/jpeg"><img class="lazyload" src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/26/0/28766295.jpg&s=Y&x=0&y=0&sw=1277&sh=852&exp=3600&w=300&q=20" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/26/0/28766295.jpg&s=Y&x=0&y=0&sw=1277&sh=852&exp=3600&w=300" alt=""></picture>              </div>
              <h4 class="focus-list__title">音樂的民族主義與世界的音樂人？試論「台灣樂派」發展可能</h4>
            </a>
            <a href="https://global.udn.com/global_vision/story/8662/7718266?form=udn_ch2_common3_cate" data-story_list="list_評論_三小" data-content_level="開放閱讀" class="focus-list">
              <div class="focus-list__image">
              <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28764729.jpg&s=Y&x=0&y=0&sw=1218&sh=812&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28764729.jpg&s=Y&x=0&y=0&sw=1218&sh=812&exp=3600&w=300" type="image/jpeg"><img class="lazyload" src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28764729.jpg&s=Y&x=0&y=0&sw=1218&sh=812&exp=3600&w=300&q=20" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28764729.jpg&s=Y&x=0&y=0&sw=1218&sh=812&exp=3600&w=300" alt=""></picture>              </div>
              <h4 class="focus-list__title">龍寶寶救中國？2023中國人口減少208萬、連2年負成長的搶救生育難題</h4>
            </a>
            <a href="https://global.udn.com/global_vision/story/8662/7717661?form=udn_ch2_common3_cate" data-story_list="list_評論_三小" data-content_level="開放閱讀" class="focus-list">
              <div class="focus-list__image">
              <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28765070.jpg&s=Y&x=0&y=0&sw=1024&sh=683&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28765070.jpg&s=Y&x=0&y=0&sw=1024&sh=683&exp=3600&w=300" type="image/jpeg"><img class="lazyload" src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28765070.jpg&s=Y&x=0&y=0&sw=1024&sh=683&exp=3600&w=300&q=20" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28765070.jpg&s=Y&x=0&y=0&sw=1024&sh=683&exp=3600&w=300" alt=""></picture>              </div>
              <h4 class="focus-list__title">【Daily Podcast】美國將胡塞軍重新列為特別指定全球恐怖分子／印尼亞齊羅興亞難民數量日益增加，錯假資訊蔓延</h4>
            </a>
        </div>
		        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">最新文章</h3>
          </header>

            <div class="context-box__content story-list__holder">
              
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719579?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="拚淨零 協和電廠燒什麼" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/7339/7719579?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="拚淨零 協和電廠燒什麼">拚淨零 協和電廠燒什麼</a>
                    </h3>
                
                    <p>
                      大選落幕，新總統產生，一直存在嚴重爭議的能源政策，面對國際能源與對抗氣候變遷新趨勢，蔡政府能源轉型政策必將跟著再轉型。                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:17</time>
                    </div>
                  </div>
                </div>
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719583?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="科目三「舞統危機」？台需文化自信" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/7339/7719583?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="科目三「舞統危機」？台需文化自信">科目三「舞統危機」？台需文化自信</a>
                    </h3>
                
                    <p>
                      廣西不大創造神話，萬萬沒想到一首廣西科目三，這種土味文化能在全球範圍出現「人傳人」現象。                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:14</time>
                    </div>
                  </div>
                </div>
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719669?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="校園安全補破網 強化親師權責" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/7339/7719669?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="校園安全補破網 強化親師權責">校園安全補破網 強化親師權責</a>
                    </h3>
                
                    <p>
                      新北校園攻擊事件引起社會震驚，一個體貼懂事的孩子就這樣離我們而去更讓人不捨，如何防止悲劇再次發生，應是新政府與新國會共同...                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:12</time>
                    </div>
                  </div>
                </div>
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719668?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="高端問題 在合約不平等" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/7339/7719668?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="高端問題 在合約不平等">高端問題 在合約不平等</a>
                    </h3>
                
                    <p>
                      高端合約公布了，似乎無關貪腐圖利。但仔細探究，卻是一個對納稅義務人的不平等且資料不公開透明的合約。合約的根本問題在於沒有...                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:10</time>
                    </div>
                  </div>
                </div>
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719670?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="警察進入校園掃黑 恐成「大業障」" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/7339/7719670?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="警察進入校園掃黑 恐成「大業障」">警察進入校園掃黑 恐成「大業障」</a>
                    </h3>
                
                    <p>
                      新北國中生割頸命案引發社會關注與討論，連帶也關注到教官陸續退出校園後，幫派吸收少年犯罪問題日益嚴重，警政署日前通令全國各...                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:10</time>
                    </div>
                  </div>
                </div>
                <div  class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7719677?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" title="劉大年／大選後全力推動經濟發展" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h3>
                      <a href="/news/story/123296/7719677?from=udn-catebreaknews_ch2" data-story_list="list_評論_最新文章" data-content_level="開放閱讀" 
                        title="劉大年／大選後全力推動經濟發展">劉大年／大選後全力推動經濟發展</a>
                    </h3>
                
                    <p>
                      總統大選已落幕，新政府必須要立即面對一些攸關台灣經濟發展的問題，沒有等待的本錢。                    </p>
                    <div class="story-list__info">
                                            <time class="story-list__time">2024-01-19 03:06</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
        
            </div>
          <div style="margin-bottom:var(--news-gap);" class="btn-holder btn-holder--center thumb-news__button">
            <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-news" data-page="0" data-type="cate_latest_news" data-query="{'cate_id': '6643','totalRecNo': '626'}">More <i class="i-arrow5-down"></i></button>
          </div>

<!-- /129853887/udn.com/2_News/3_News-Mobile/4_News-Mobile-a02 ※Mobile文中大佈告_3000x250※ -->
<div class='udn-ads udn-ads-300x250 udn-ads--mobile udn-ads--full' >
<div id='ads-inline'>
  <script>
    googletag.cmd.push(function() { googletag.display('ads-inline'); });
  </script>
</div>
</div>
        </section>
		
        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">社論</h3>
            <a name="sub_7338"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7338/7719710?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7338/7719710?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能">聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7338/7719710?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">距正式上任還有四個月，總統當選人賴清德須面對的事已如雪片般落下。他承諾公開的高端採購合約，拖到選後才進行，立即引來外界諸...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 01:17</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7338/7719713?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報黑白集／科目三「舞統」台灣？" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7338/7719713?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報黑白集／科目三「舞統」台灣？">聯合報黑白集／科目三「舞統」台灣？</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7338/7719713?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">台北寧夏夜市舉辦「科目三流行舞競賽」遭到質疑，認為「科目三」從對岸走紅，此舉等於配合宣傳「舞統台灣」。更有人警告，抖音與...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 01:18</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7338/7719560?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="經濟日報社論／對新政府財經內閣的期待" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7338/7719560?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="經濟日報社論／對新政府財經內閣的期待">經濟日報社論／對新政府財經內閣的期待</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7338/7719560?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">陳內閣提出總辭，新政府即將組成；恭喜勝選的民進黨延續執政，本報社論除了之前發表五個面向的改革建言之外，也要對新內閣提出我...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:00</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7338/7717026?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="經濟日報社論／破除盲點 迎向另一個經濟高峰" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28760558.jpg&s=Y&x=4&y=0&sw=1277&sh=852&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28760558.jpg&s=Y&x=4&y=0&sw=1277&sh=852&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28760558.jpg&s=Y&x=4&y=0&sw=1277&sh=852&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7338/7717026?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="經濟日報社論／破除盲點 迎向另一個經濟高峰">經濟日報社論／破除盲點 迎向另一個經濟高峰</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7338/7717026?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">民進黨候選人賴清德以40％得票率當選台灣總統，520正式上任成為中華民國第16任總統。新總統上任後所面對議題很多，但事有...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 03:00</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7338/7717038?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報社論／國民黨必須耕耘全民，重新思考藍營定位" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28758355.jpg&s=Y&x=0&y=8&sw=1279&sh=852&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28758355.jpg&s=Y&x=0&y=8&sw=1279&sh=852&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28758355.jpg&s=Y&x=0&y=8&sw=1279&sh=852&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7338/7717038?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="聯合報社論／國民黨必須耕耘全民，重新思考藍營定位">聯合報社論／國民黨必須耕耘全民，重新思考藍營定位</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7338/7717038?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">國民黨這次未能贏回執政權，政黨輪替的八年魔咒被「賴蕭配」打破，讓藍營支持者備感愴然。若非立委選舉戰果豐碩，奪回十五席並躍...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 00:12</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="margin-bottom:var(--news-gap);" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '7338','totalRecNo': '6','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>

<!-- /129853887/udn.com/2_News/3_News-Mobile/4_News-Mobile-a03 ※Mobile文末大佈告_3000x250※-->
<div class='udn-ads udn-ads--mobile udn-ads--full' id='ads-Mobile_300x250--article'>
  <script>
    googletag.cmd.push(function() { googletag.display('ads-Mobile_300x250--article'); });
  </script>
</div>
        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">重磅快評</h3>
            <a name="sub_11091"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/11091/7718630?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】特拉斯助中共攻台 吳釗燮又讓台灣當盤子" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28766264.jpg&s=Y&x=0&y=4&sw=1280&sh=853&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28766264.jpg&s=Y&x=0&y=4&sw=1280&sh=853&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28766264.jpg&s=Y&x=0&y=4&sw=1280&sh=853&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/11091/7718630?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】特拉斯助中共攻台 吳釗燮又讓台灣當盤子">【重磅快評】特拉斯助中共攻台 吳釗燮又讓台灣當盤子</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/11091/7718630?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">英國前首相特拉斯去年5月應邀訪台，並敦促英國政府將北京列為威脅；8月就祕密遊說英國政府軍售中國。外國媒體看到的是特拉斯假...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 16:04</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/11091/7718534?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】蔣萬安造謠？ 王必勝把審計部踩在腳下" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28765961.jpg&s=Y&x=0&y=17&sw=2364&sh=1576&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28765961.jpg&s=Y&x=0&y=17&sw=2364&sh=1576&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28765961.jpg&s=Y&x=0&y=17&sw=2364&sh=1576&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/11091/7718534?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】蔣萬安造謠？ 王必勝把審計部踩在腳下">【重磅快評】蔣萬安造謠？ 王必勝把審計部踩在腳下</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/11091/7718534?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">高端合約終於在大選後公開，在立委任內嚴格監督高端疫苗的台北市長蔣萬安提出質疑，並直言「並沒拆彈完成，反而是打開另外一個潘...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 15:13</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/11091/7718132?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【即時短評】拉綠打藍，柯文哲故技重施能騙過藍綠嗎？" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764440.jpg&s=Y&x=0&y=32&sw=4606&sh=3070&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764440.jpg&s=Y&x=0&y=32&sw=4606&sh=3070&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764440.jpg&s=Y&x=0&y=32&sw=4606&sh=3070&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/11091/7718132?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【即時短評】拉綠打藍，柯文哲故技重施能騙過藍綠嗎？">【即時短評】拉綠打藍，柯文哲故技重施能騙過藍綠嗎？</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/11091/7718132?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">選後立法院成為三黨不過半之局，民眾黨到底會和誰合作，立法院院長、副院長選舉將成為第一個指標。不過這兩天，民眾黨主席柯文哲...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 12:48</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/11091/7717703?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】六百萬觀光客來台值得這麼嗨嗎？" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28763392.jpg&s=Y&x=0&y=0&sw=5254&sh=3503&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28763392.jpg&s=Y&x=0&y=0&sw=5254&sh=3503&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28763392.jpg&s=Y&x=0&y=0&sw=5254&sh=3503&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/11091/7717703?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】六百萬觀光客來台值得這麼嗨嗎？">【重磅快評】六百萬觀光客來台值得這麼嗨嗎？</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/11091/7717703?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">2023結束，2024伊始已完成一項巨大政治工程，各單位都在盤點去年「業績」，希望能獲得長官嘉許。率先出檯的是來台觀光客...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 10:42</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/11091/7716131?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】諾魯斷交 拆穿民進黨外交大內宣的國王新衣" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28749887.jpg&s=Y&x=455&y=0&sw=2832&sh=1889&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28749887.jpg&s=Y&x=455&y=0&sw=2832&sh=1889&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28749887.jpg&s=Y&x=455&y=0&sw=2832&sh=1889&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/11091/7716131?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【重磅快評】諾魯斷交 拆穿民進黨外交大內宣的國王新衣">【重磅快評】諾魯斷交 拆穿民進黨外交大內宣的國王新衣</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/11091/7716131?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">不過幾個月前，總統府發言人還告訴全國民眾，諾魯堅定支持台灣參與國際組織；如今，在我國大選後，諾魯選擇與中共建交、與我斷交，蔡政府態度一百八十度大改變，重話批受中共利誘、突襲等，戳破過去政府多次宣稱兩國</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 15:43</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="margin-bottom:var(--news-gap);" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '11091','totalRecNo': '17','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>

<!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a09 ※PC贊助廣告L_3000x250※-->
<div class='udn-ads udn-ads--mobile udn-ads--full' id='ads-SP300x259_L'>
    <script>
          googletag.cmd.push(function() {
            var ads_SP_300x250 = googletag.sizeMapping().
                addSize([768, 200], []).
                addSize([0, 0], [300, 250]).
                build();
            googletag.defineSlot('/129853887/udn.com/2_News/3_News-PC/4_News-PC-a09', [300, 250], 'ads-SP300x259_L').defineSizeMapping(ads_SP_300x250).addService(googletag.pubads());
            googletag.display('ads-SP300x259_L'); 
        });
    </script>
</div>
        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">專家之眼</h3>
            <a name="sub_121823"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/121823/7714952?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】中華民國派的大陸政策何去何從" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753683.jpg&s=Y&x=0&y=0&sw=4000&sh=2667&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753683.jpg&s=Y&x=0&y=0&sw=4000&sh=2667&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753683.jpg&s=Y&x=0&y=0&sw=4000&sh=2667&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/121823/7714952?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】中華民國派的大陸政策何去何從">【專家之眼】中華民國派的大陸政策何去何從</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/121823/7714952?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">這次大選結果，反映出台灣政治長期問題。競選過程中部分政客對憲法的蔑視，與人民對貪腐的寬容，是言論市場長期忽略反體制政黨與...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 07:47</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/121823/7714940?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】美方抑台友中的結果" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753661.jpg&s=Y&x=0&y=0&sw=5472&sh=3648&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753661.jpg&s=Y&x=0&y=0&sw=5472&sh=3648&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28753661.jpg&s=Y&x=0&y=0&sw=5472&sh=3648&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/121823/7714940?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】美方抑台友中的結果">【專家之眼】美方抑台友中的結果</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/121823/7714940?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">大選甫落幕，美中雙方就積極表態，美方派團訪台，大陸奪我邦交國，再度上演大國博弈戲碼，台灣只能承擔。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 07:31</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/121823/7712557?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】日本已淪為廢材國家？—唯女子為難養" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28745566.jpg&s=Y&x=0&y=48&sw=6951&sh=4634&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28745566.jpg&s=Y&x=0&y=48&sw=6951&sh=4634&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/16/realtime/28745566.jpg&s=Y&x=0&y=48&sw=6951&sh=4634&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/121823/7712557?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】日本已淪為廢材國家？—唯女子為難養">【專家之眼】日本已淪為廢材國家？—唯女子為難養</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/121823/7712557?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">《日經中文網》分別在1月5日、8日、11日連載「日本診斷」（1）、（2）、（3）長文，內文寫著：「《日本經濟新聞》嘗試為...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-16 08:01</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/121823/7710098?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】國民黨先天不足 後天失調" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737325.jpeg&s=Y&x=0&y=0&sw=5027&sh=3351&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737325.jpeg&s=Y&x=0&y=0&sw=5027&sh=3351&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737325.jpeg&s=Y&x=0&y=0&sw=5027&sh=3351&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/121823/7710098?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】國民黨先天不足 後天失調">【專家之眼】國民黨先天不足 後天失調</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/121823/7710098?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">賴蕭配贏得大選但未過半，綠營也未能獲得立法院多數，因而必須結盟才能過半，導致民眾黨炙手可熱，形成扶龍王的角色，勢必會牽制...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-15 08:02</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/121823/7710071?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】2024新政府新財政" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737220.jpg&s=Y&x=0&y=3&sw=416&sh=276&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737220.jpg&s=Y&x=0&y=3&sw=416&sh=276&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28737220.jpg&s=Y&x=0&y=3&sw=416&sh=276&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/121823/7710071?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="【專家之眼】2024新政府新財政">【專家之眼】2024新政府新財政</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/121823/7710071?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">恭喜賴清德先生當選第十六任總統，即將成為第十位的中華民國最高領導人。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-15 07:30</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="margin-bottom:var(--news-gap);" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '121823','totalRecNo': '428','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>

<!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a10 ※PC贊助廣告R_3000x250※-->
<div class='udn-ads udn-ads--mobile udn-ads--full' id='ads-SP300x259_R'>
    <script>
          googletag.cmd.push(function() {
            var ads_SP_300x250 = googletag.sizeMapping().
                addSize([768, 200], []).
                addSize([0, 0], [300, 250]).
                build();
            googletag.defineSlot('/129853887/udn.com/2_News/3_News-PC/4_News-PC-a10', [300, 250], 'ads-SP300x259_R').defineSizeMapping(ads_SP_300x250).addService(googletag.pubads());
            googletag.display('ads-SP300x259_R'); 
        });
    </script>
</div>
        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">民意論壇</h3>
            <a name="sub_7339"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719668?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="高端問題 在合約不平等" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28769187.jpg&s=Y&x=0&y=0&sw=1890&sh=1263&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7339/7719668?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="高端問題 在合約不平等">高端問題 在合約不平等</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7339/7719668?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">高端合約公布了，似乎無關貪腐圖利。但仔細探究，卻是一個對納稅義務人的不平等且資料不公開透明的合約。合約的根本問題在於沒有...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:10</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719579?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="拚淨零 協和電廠燒什麼" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_3.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7339/7719579?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="拚淨零 協和電廠燒什麼">拚淨零 協和電廠燒什麼</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7339/7719579?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">大選落幕，新總統產生，一直存在嚴重爭議的能源政策，面對國際能源與對抗氣候變遷新趨勢，蔡政府能源轉型政策必將跟著再轉型。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:17</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719583?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="科目三「舞統危機」？台需文化自信" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28767805.jpg&s=Y&x=235&y=0&sw=1908&sh=1272&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7339/7719583?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="科目三「舞統危機」？台需文化自信">科目三「舞統危機」？台需文化自信</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7339/7719583?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">廣西不大創造神話，萬萬沒想到一首廣西科目三，這種土味文化能在全球範圍出現「人傳人」現象。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:14</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719669?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="校園安全補破網 強化親師權責" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_1.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7339/7719669?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="校園安全補破網 強化親師權責">校園安全補破網 強化親師權責</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7339/7719669?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">新北校園攻擊事件引起社會震驚，一個體貼懂事的孩子就這樣離我們而去更讓人不捨，如何防止悲劇再次發生，應是新政府與新國會共同...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:12</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7339/7719670?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="警察進入校園掃黑 恐成「大業障」" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764727.jpg&s=Y&x=0&y=11&sw=1478&sh=984&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7339/7719670?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="警察進入校園掃黑 恐成「大業障」">警察進入校園掃黑 恐成「大業障」</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7339/7719670?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">新北國中生割頸命案引發社會關注與討論，連帶也關注到教官陸續退出校園後，幫派吸收少年犯罪問題日益嚴重，警政署日前通令全國各...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:10</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '7339','totalRecNo': '10','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>


        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">聯合報名人堂</h3>
            <a name="sub_7340"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7340/7717483?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之435：沉浸在詩歌中" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7340/7717483?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之435：沉浸在詩歌中">王建煊／王老先生講故事之435：沉浸在詩歌中</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7340/7717483?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">古今中外，許多名留千古的曲作，都是讚美上帝的詩歌。曲調美、歌詞佳。讓孩子喜歡唱詩歌，享受詩歌，神的話藉著美妙的旋律，很自然的進入孩子的心裡，成為孩子路上的光。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 09:07</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7340/7717199?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="薛承泰／給新總統的一封限時信" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/10/realtime/28702099.jpg&s=Y&x=0&y=0&sw=2048&sh=1365&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/10/realtime/28702099.jpg&s=Y&x=0&y=0&sw=2048&sh=1365&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/10/realtime/28702099.jpg&s=Y&x=0&y=0&sw=2048&sh=1365&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7340/7717199?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="薛承泰／給新總統的一封限時信">薛承泰／給新總統的一封限時信</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7340/7717199?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">大選落幕了，激情將逐漸退去，即將上任的賴總統在就職前應好好思考，在您堅持走的「民主路上」，要將二三四二萬百姓帶往何處？</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 00:23</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7340/7715081?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之434：不要懼怕 我與你同在" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754198.jpg&s=Y&x=0&y=0&sw=957&sh=638&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754198.jpg&s=Y&x=0&y=0&sw=957&sh=638&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754198.jpg&s=Y&x=0&y=0&sw=957&sh=638&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7340/7715081?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之434：不要懼怕 我與你同在">王建煊／王老先生講故事之434：不要懼怕 我與你同在</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7340/7715081?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">多年前，到美國洛衫磯教會講道，住在一個朋友家裡。有天朋友夫妻要出去參加一場宴會，將一個兩歲多的小男孩託給我照顧。小男孩要上大號，要我在廁所外面陪他。廁所門剛關上，小男孩就問「叔叔，你還在外面嗎？」我説：「在。」並敲敲廁所門，證明我在外頭。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 09:47</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7340/7715074?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之433：全家來到上帝面前" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754173.jpg&s=Y&x=0&y=0&sw=1253&sh=836&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754173.jpg&s=Y&x=0&y=0&sw=1253&sh=836&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/0/28754173.jpg&s=Y&x=0&y=0&sw=1253&sh=836&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7340/7715074?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="王建煊／王老先生講故事之433：全家來到上帝面前">王建煊／王老先生講故事之433：全家來到上帝面前</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7340/7715074?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">台灣面積三萬六千平方公里，可耕地面積只有四分之一，天然資源貧瘠，但經濟發展傲視全球，被稱為「經濟奇蹟」。因此外國友人來台訪問，都會安排拜會經濟部，當年我在經濟部擔任次長時，每天要接見好幾批外賓。全程用英語交談，久之，很明顯的感覺到，自己蹩腳的英語進步不少。因為環境逼得你硬著頭皮也要開口，英文進步是環境使然。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 09:43</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7340/7714599?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="葉匡時／找對的人 做對的事 把事做對" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28744143.jpg&s=Y&x=0&y=34&sw=4738&sh=3158&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28744143.jpg&s=Y&x=0&y=34&sw=4738&sh=3158&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/15/realtime/28744143.jpg&s=Y&x=0&y=34&sw=4738&sh=3158&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7340/7714599?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="葉匡時／找對的人 做對的事 把事做對">葉匡時／找對的人 做對的事 把事做對</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7340/7714599?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">賴副總統以未過半的四成得票率當選中華民國第十六任總統，其領導的民進黨也沒有取得立法院的過半席次，將是所謂的雙少數總統。做...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-17 04:19</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '7340','totalRecNo': '10','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>


        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">聯合好評</h3>
            <a name="sub_7341"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7341/7717225?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="姚謙／瑪麗．羅蘭珊的每一幅畫" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28760882.jpg&s=Y&x=0&y=696&sw=1536&sh=1024&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28760882.jpg&s=Y&x=0&y=696&sw=1536&sh=1024&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/17/realtime/28760882.jpg&s=Y&x=0&y=696&sw=1536&sh=1024&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7341/7717225?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="姚謙／瑪麗．羅蘭珊的每一幅畫">姚謙／瑪麗．羅蘭珊的每一幅畫</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7341/7717225?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">十月費城行，對喜愛許久的瑪麗．羅蘭珊有了另一感受。這回在費城「Barnes Foundation」因為收藏多年的瑪麗．羅...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 00:22</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7341/7709391?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="塗翔文／「日安，我的母親」：談笑瑣事中的人情世故" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/14/realtime/28735216.jpg&s=Y&x=67&y=0&sw=1416&sh=944&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/14/realtime/28735216.jpg&s=Y&x=67&y=0&sw=1416&sh=944&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/14/realtime/28735216.jpg&s=Y&x=67&y=0&sw=1416&sh=944&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7341/7709391?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="塗翔文／「日安，我的母親」：談笑瑣事中的人情世故">塗翔文／「日安，我的母親」：談笑瑣事中的人情世故</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7341/7709391?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">很難抗拒來自這位92歲高齡導演的任何作品，山田洋次一生幾乎都拍各式各樣的家庭通俗劇，同樣的主題翻來覆去，看了這麼多部也不...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-15 00:00</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7341/7704382?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="雀雀／700 億韓幣打造「京城怪物」是批判也是療傷" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/12/1/28719186.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/12/1/28719186.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/12/1/28719186.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7341/7704382?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="雀雀／700 億韓幣打造「京城怪物」是批判也是療傷">雀雀／700 億韓幣打造「京城怪物」是批判也是療傷</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7341/7704382?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">朴敘俊、韓韶禧所主演、共十集的韓劇「京城怪物」令人想起「寄生上流」導演奉俊昊的首部大賣座電影「駭人怪物」，前者是日本殖民韓國時期日軍做了不人道的人體實驗，後者是美軍科學家在漢江放毒造成污染，兩者都產生出了可怕的怪物，危害著更多韓國人民生命。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-13 10:00</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7341/7705408?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="葉怡蘭／料理檯餐廳正當道" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/13/realtime/28721709.jpg&s=Y&x=0&y=0&sw=4813&sh=3185&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/13/realtime/28721709.jpg&s=Y&x=0&y=0&sw=4813&sh=3185&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/13/realtime/28721709.jpg&s=Y&x=0&y=0&sw=4813&sh=3185&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7341/7705408?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="葉怡蘭／料理檯餐廳正當道">葉怡蘭／料理檯餐廳正當道</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7341/7705408?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">若問此刻什麼樣的餐廳正當道？法菜？日菜？義菜？麵館？咖哩店？甜點鋪？……在我看來，最是紅火勢不可擋者，當非橫跨這些料理類...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-13 02:04</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/7341/7700160?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="曾士昕／2023年夢幻之選" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/11/realtime/28704784.jpg&s=Y&x=0&y=28&sw=2512&sh=1674&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/11/realtime/28704784.jpg&s=Y&x=0&y=28&sw=2512&sh=1674&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/11/realtime/28704784.jpg&s=Y&x=0&y=28&sw=2512&sh=1674&exp=3600&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/7341/7700160?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="曾士昕／2023年夢幻之選">曾士昕／2023年夢幻之選</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/7341/7700160?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">雖然已經邁入2024年之始，但2023年最難入手的熱門表款依然值得追逐，到底這幾款有何特別而令表迷爭相擁有？在工藝技術上...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-11 00:24</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>


        </section>

        <section class="thumb-news more-news thumb-news--big context-box">
          <header class="context-box__header">
            <h3 class="context-box__title context-box__title--big">名人TALKS</h3>
            <a name="sub_123296"></a>
          </header>
              <div class="context-box__content story-list__holder story-list__holder--full">

                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7719677?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="劉大年／大選後全力推動經濟發展" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_7.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_7.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_7.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/123296/7719677?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="劉大年／大選後全力推動經濟發展">劉大年／大選後全力推動經濟發展</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/123296/7719677?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">總統大選已落幕，新政府必須要立即面對一些攸關台灣經濟發展的問題，沒有等待的本錢。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-19 03:06</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7717170?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="黃齊元／加強兩岸溝通，維持台海和平" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_5.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_5.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_5.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/123296/7717170?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="黃齊元／加強兩岸溝通，維持台海和平">黃齊元／加強兩岸溝通，維持台海和平</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/123296/7717170?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">台灣總統大選結束，引起全世界關注，這是危機的開始，美中都在背後運作。</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-18 00:08</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7705214?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="彭金隆／保險「損害填補原則」是什麼？" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/123296/7705214?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="彭金隆／保險「損害填補原則」是什麼？">彭金隆／保險「損害填補原則」是什麼？</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/123296/7705214?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">健保醫療自費項目愈來愈多，讓實支實付健康險受到市場的青睞。但社會隨之而來的批評如誘發醫療、損率上升、不當獲利等，導致政府...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-13 05:12</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7702648?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="詹文男／孤寂經濟的崛起與挑戰" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_2.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/123296/7702648?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="詹文男／孤寂經濟的崛起與挑戰">詹文男／孤寂經濟的崛起與挑戰</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/123296/7702648?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">前陣子參加一場如何應對超高齡社會的研討會，對於保全事業有深入研究的老林就分享其服務的經驗。他說，為了照顧社區的獨居老人，...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-12 00:45</time>
                    </div>
                  </div>
                </div>
                <div class="story-list__news ">
                  <div class="story-list__image ">
                    <a href="/news/story/123296/7700177?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="陳國樑／候選人的租稅資訊透明" class="story-list__image--holder"><picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_0.jpg&w=300" alt=""></picture></a>
                  </div>
                  <div class="story-list__text">
                    <h2>
                      <a href="/news/story/123296/7700177?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀" title="陳國樑／候選人的租稅資訊透明">陳國樑／候選人的租稅資訊透明</a>
                    </h2>
                
                    <p>
                      <a href="/news/story/123296/7700177?from=udn-catelistnews_ch2" data-story_list="list_評論" data-content_level="開放閱讀">三位總統候選人的「稅事」，都成為選舉戰場，各方交互攻訐指謫。民進黨總統候選人賴清德的萬里故居，涉及房屋稅逃漏：國民黨總統...</a>
                    </p>
                    <div class="story-list__info">
                      <time class="story-list__time">2024-01-11 00:43</time>
                    </div>
                  </div>
                </div>

                <section class="story-list__holder--append"></section>
              </div>
          <div style="" class="btn-holder btn-holder--center thumb-news__button">
              <button class="btn btn-ripple btn-more btn-more--news" aria-label="more-other" data-page="0" data-type="subcate_articles" data-query="{'cate_id': '6643','sub_id': '123296','totalRecNo': '150','is_paywall': 0,'is_bauban':0,'is_vision':0}">More <i class="i-arrow5-down"></i></button>
          </div>


        </section>
			</section>
	<aside class="wrapper-aside">
		<div class="wrapper-aside__container">
						<!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a07  ※PC大佈告_3000x250※ -->
<div class='udn-ads udn-ads-300x600' id='ads-billboard' style='width: 300px; min-height: 250px; overflow: hidden;'>
<script>
googletag.cmd.push(function() { googletag.display('ads-billboard'); });
</script>
</div><!-- #Location: /inc/ads/menu_bottom_right -->
			        <div class="hottest-news context-box">
          <header class="context-box__header">
            <h3 class="context-box__title">熱門新聞</h3>
            <a href="/rank/pv/2/6643" class="btn context-box__more"></a>
          </header>
        
          <div class="context-box__content">

              <div class="rounded-thumb__list">
                <div class="rounded-thumb__image">
                <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/0/28762365.jpg&s=Y&x=0&y=8&sw=1033&sh=689&exp=3600&w=300" alt=""></picture>                </div>
                <h3 class="rounded-thumb__title">
                  <a href="/news/story/7340/7717483?from=udn-catehotnews_ch2" title="王建煊／王老先生講故事之435：沉浸在詩歌中" data-story_list="list_評論_熱門新聞" data-content_level="開放閱讀">王建煊／王老先生講故事之435：沉浸在詩歌中</a>
                </h3>
              </div>
              <div class="rounded-thumb__list">
                <div class="rounded-thumb__image">
                <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/1/28767811.jpg&s=Y&x=0&y=72&sw=1277&sh=852&exp=3600&w=300" alt=""></picture>                </div>
                <h3 class="rounded-thumb__title">
                  <a href="/news/story/7338/7719713?from=udn-catehotnews_ch2" title="聯合報黑白集／科目三「舞統」台灣？" data-story_list="list_評論_熱門新聞" data-content_level="開放閱讀">聯合報黑白集／科目三「舞統」台灣？</a>
                </h3>
              </div>
              <div class="rounded-thumb__list">
                <div class="rounded-thumb__image">
                <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/realtime/28764544.jpg&s=Y&x=108&y=124&sw=3524&sh=2349&exp=3600&w=300" alt=""></picture>                </div>
                <h3 class="rounded-thumb__title">
                  <a href="/news/story/7338/7719710?from=udn-catehotnews_ch2" title="聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能" data-story_list="list_評論_熱門新聞" data-content_level="開放閱讀">聯合報社論／賴清德退新潮流，仍得清理蔡政府的貪腐無能</a>
                </h3>
              </div>
              <div class="rounded-thumb__list">
                <div class="rounded-thumb__image">
                <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/01/18/98/28764755.jpg&s=Y&x=0&y=0&sw=1280&sh=853&exp=3600&w=300" alt=""></picture>                </div>
                <h3 class="rounded-thumb__title">
                  <a href="/news/story/7338/7719560?from=udn-catehotnews_ch2" title="經濟日報社論／對新政府財經內閣的期待" data-story_list="list_評論_熱門新聞" data-content_level="開放閱讀">經濟日報社論／對新政府財經內閣的期待</a>
                </h3>
              </div>
              <div class="rounded-thumb__list">
                <div class="rounded-thumb__image">
                <picture><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_8.jpg&w=300&nt=1" type="image/webp"><source data-srcset="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_8.jpg&w=300" type="image/jpeg"><img class="lazyload" data-src="https://pgw.udn.com.tw/gw/photo.php?u=https://p.udn.com.tw/upf/2017_news/noimg_cid6643_8.jpg&w=300" alt=""></picture>                </div>
                <h3 class="rounded-thumb__title">
                  <a href="/news/story/123296/7719677?from=udn-catehotnews_ch2" title="劉大年／大選後全力推動經濟發展" data-story_list="list_評論_熱門新聞" data-content_level="開放閱讀">劉大年／大選後全力推動經濟發展</a>
                </h3>
              </div>
<!-- /4576170/free-1_News-PC-a13 ※PC熱門新聞第六則※ -->
<div id='div-gpt-ad-1602729579465-0'>
  <script>
    googletag.cmd.push(function() {
      var ads_news_hottest = googletag.sizeMapping().
          addSize([1024, 200], [[1, 1], [300, 50], 'fluid']).
          addSize([0, 0], []).
          build();
      googletag.defineSlot('/4576170/free-1_News-PC-a13', [[1, 1], [300, 50], 'fluid'], 'div-gpt-ad-1602729579465-0').defineSizeMapping(ads_news_hottest).setCollapseEmptyDiv(true).addService(googletag.pubads());
      googletag.display('div-gpt-ad-1602729579465-0');
    });
  </script>
</div>
          </div>
        </div>
			<!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a03  ※多媒體大佈告CPM_300x250※ -->
<div class='udn-ads' id='ads-recommendation-300x250' style='min-height: 250px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('ads-recommendation-300x250'); });
  </script>
</div><div class="feature-guess context-box">
    <header class="context-box__header">
        <h3 class="context-box__title">
            <span>猜你喜歡</span>
            <span id="featureRefresh" role="button" aria-label="feature-refresh" class="btn feature-refresh" title="刷新"></span>
        </h3>
        <a href="https://udn.com/mypage/mynewsFeature" title="猜你喜歡" class="btn context-box__more"></a>
    </header>
    
    <div class="context-box__content">
        <!--猜你喜歡第1則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!--猜你喜歡第2則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a04 ※PC精準1_300x250※ -->
        <div class='udn-ads' id='ads-300x250-1' style='min-height: 250px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('ads-300x250-1'); });
            </script>
        </div>
    
        <!--猜你喜歡第3則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!--猜你喜歡第4則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!-- /129853887/udn.com/2_News/3_News-PC/4_News-PC-a05 ※PC精準2_300x250※ -->
        <div class='udn-ads' id='ads-300x250-2' style='min-height: 250px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('ads-300x250-2'); });
            </script>
        </div>
    
        <!--猜你喜歡第5則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!--猜你喜歡第6則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!-- ※廣告版位給BD※ -->
    
        <!--猜你喜歡第7則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
    
        <!--猜你喜歡第8則-->
        <div class="feature-guess__list story-list__news" >
        <div class="story-list__image"><a class="story-list__image--holder" href="#"></a></div>
        <div class="story-list__text"><h3><a href="#"></a></h3></div>
        <div class="feature-guess__tools">
            <span class="btn btn-icon btn-like" data-id="1" role="button" aria-label="喜愛此內容"></span>
            <span class="btn btn-icon btn-setting" data-settings="" role="button" aria-label="最愛設定"></span>
        </div>
        </div>
  
        <!-- /4576170/free-1_News-PC-a03 ※PC內頁大佈告_A_300x250※ -->
        <div class='udn-ads' id='ads-300x250-side-3' style='min-height: 250px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('ads-300x250-side-3'); });
            </script>
        </div>
  
        <!-- /4576170/free-1_News-PC-a04 ※PC內頁大佈告_B_300x250※ -->
        <div class='udn-ads' id='ads-300x250-sponsor-list-2' style='min-height: 250px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('ads-300x250-sponsor-list-2'); });
            </script>
        </div>

    </div>
</div><script language=javascript>
		var i, i_s, i_su;
		var sars = new Array("https://p.udn.com.tw/upf/2014_banners/hype/240117_event_jane.png","https://p.udn.com.tw/upf/2014_banners/hype/240117_member_jane.png","https://p.udn.com.tw/upf/2014_banners/hype/200316_a+_app_300x250_cindy.gif");
		var sars_url = new 
Array("https://event.udn.com/index/?utm_source=udnbd&utm_medium=banner&utm_campaign=news","https://event.udn.com/index/?utm_source=udnbd&utm_medium=banner&utm_campaign=news","https://mobile.udn.com/");
		i = Math.random() * 3; i = Math.ceil(i); i = i - 1;
		i_s = sars[i]; i_su = sars_url[i];
		document.write("<a href='"+i_su+"' target='_blank'><img src='"+i_s+"' width='300' height='250' border='0'></a>");
	</script><!-- #Location: /inc/ads/look_right -->
		</div>
	</aside>
</div>
</main>
<!-- #Location: /inc/content/c_cate_53 -->
    <!-- #Location: /inc/ads/upstairs_of_no_more_down-->
  <footer class="footer">
    <div class="container">
    <!-- /129853887/udn.com/2_News/3_News-Mobile/4_News-Mobile-a07 ※Mobile置底廣告※-->
<style>
iframe[id="19039_frame"] {z-index: 33 !important;} /* 當有聯播酷比廣告修正z-index層級 */
.sticky-ads.double-decker {max-width: 100vw;}
#ppstudio-mobile-bottom-pull-up-interstitial {z-index: 35 !important;}
</style>
<div class='udn-ads udn-ads--mobile sticky-ads' id='stickyAds'>
<script>
googletag.cmd.push(function() { googletag.display('stickyAds'); });
</script>
</div>
<!-- kangw3n -->
<!-- <iframe src="https://udn.com/room.html" width="300" height="40" style="border: 0; overflow: hidden;"></iframe> -->

<!-- <script src="https://p.udn.com.tw/upf/static/common/scroll-lock.js"></script> --><style>#desktopSticky iframe {margin-inline: auto;}</style>
<!-- /4576170/news_WelcomeVideo_MEDICAL  Stick_EBar_IMG&Video廣告 -->
<div class='udn-ads' id='desktopSticky'>
<script>
googletag.cmd.push(function() { googletag.display('desktopSticky'); });
</script>
</div>
      <section class="footer-social">
        <a href="https://www.facebook.com/myudn" class="btn btn-social"><i class="i-fb-round"></i></a>
        <a href="https://www.instagram.com/myudn/" class="btn btn-social"><i class="i-instagram-1"></i></a>
        <a href="https://www.youtube.com/channel/UC2M61YK4ntt9iK-23XhDwcw" class="btn btn-social"><i class="i-youtube3"></i></a>
        <a href="https://play.google.com/store/apps/details?id=com.udn.news" class="btn btn-social"><i class="i-playstore"></i></a>
        <a href="https://apps.apple.com/tw/app/id370132213?l=zh" class="btn btn-social"><i class="i-applestore"></i></a>
        <form class="newsletter" action="https://paper.udn.com/ZOPE/UDN/Subscribe/Pkg_Add" method="GET" target="_blank">
        <input type="email" required placeholder="訂閱udn論壇報" name="p_email" aria-label="subscription-email">
        <input checked hidden value="H" name="p_PID0004" type="checkbox">
        <button aria-label="subscription" class="btn btn-ripple btn-dark-grey" type="submit">訂閱</button>
        </form>
      </section>      <section class="footer-note">
        <nav class="footer-note__wrapper">
          <a href="https://event.udn.com/AD/" class="footer-note__link">刊登廣告</a>
          <span class="footer-note__link"><a href="https://udn.com/page/topic/184" title="FAQ">FAQ</a>·<a href="https://co.udn.com/co/contactus" title="客服">客服</a></span>
          <a href="https://udndata.com/faq/authority.html" class="footer-note__link">新聞授權</a>
          <span class="footer-note__link"><a href="https://member.udn.com/member/rule.jsp" title="服務條款">服務條款</a>·<a href="https://udn.com/page/topic/495" title="著作權">著作權</a>·<a href="https://www.udngroup.com/members/udn_privacy" title="隱私權聲明">隱私權聲明</a></span>
          <a href="https://www.udngroup.com/" class="footer-note__link">聯合報系</a>
          <a href="http://bit.ly/3JPyOQA" class="footer-note__link">訂報紙</a>
          <a href="https://co.udn.com/" class="footer-note__link">關於我們</a>
          <a href="https://udn.com/page/topic/496" class="footer-note__link">網站總覽</a>
        </nav>
        <div class="footer-word">
          聯合線上公司 著作權所有 ©2023
        </div>
      </section>
    <script>

    function dC(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.udn.com";  // 將到期時間設定為1970年1月1日
    }

    // 刪除 cookie
       dC("jaq_t");
       dC("FCCDCF");
       dC("mp_990a03b701d8bc2e0702dea10c94b9ef_mixpanel");
      
    </script><!-- /4576170/free-1_News-PC-a12 ※PC&Mobile Andbeyond※ -->
<div class='udn-ads' id='ads-Andbeyond'>
  <script>
    googletag.cmd.push(function() { googletag.display('ads-Andbeyond'); });
  </script>
</div><!-- taboola body end -->
<script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({flush: true});
</script><script>
// fixed safari bug : css invalidation on position upon iPhone XS;
window.addEventListener('message', function (e) {
  if (e.data.type === 'overlayIframeReady') {
    setTimeout(function() {
      document.querySelector('#ads-Mobile_cover > div').style.position = 'relative';
    }, 0);
  }
});
</script>

<style>
.article-content__cover figcaption a, .article-content__image figcaption a {color: var(--udn-blue);}
</style>
<script src="https://tracking-client.91app.com/1.0.0/nineyi.tracking.client.iife.js"></script>
<script>
console.log("91AppStarted");
(async function() {

await window.nineyiTracking.initialize({
  tid: '1',
  uid: user_id,
  cid: google_id,
  idStoredType: 'LOCAL_STORAGE',
});

function getMetaData() {
  let url = document.querySelector('meta[property="og:url"]').getAttribute('content');
  let isIndex = url.endsWith('udn.com/news/index');
  let isCate = url.indexOf('/news/cate/') > -1;
  let isStory = url.indexOf('/news/story/') > -1;
  let keywords = document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').getAttribute('content') : document.querySelector('meta[name="news_keywords"]') ? document.querySelector('meta[name="news_keywords"]').getAttribute('content') : '';
  let artID = document.querySelector('meta[name="art_id"]').getAttribute('content');
  let cateID = document.querySelector('meta[name="cate_id"]').getAttribute('content');
  let subID = document.querySelector('meta[name="sub_id"]').getAttribute('content');
  let cateLevelTwo = isStory ? document.querySelector('meta[name="section"]').getAttribute('content') : undefined;
  let cateLevelThree = isStory ? document.querySelector('meta[name="subsection"]').getAttribute('content') : undefined;
  let type;
  
  if (isStory) {
    type = '内文';
  } else if (isCate) {
    type  = '類別';
  } else if (isIndex){
    type = '首頁';
  } else {
    type = '其他';
  }

  return {
    type: type,
    keywords: keywords,
    levelTwo: cateLevelTwo,
    levelThree: cateLevelThree
  }
}

let nineyiPVData = {
  viewTitle: document.querySelector('meta[property="og:title"]').getAttribute('content'),
  description: document.querySelector('meta[property="og:description"]').getAttribute('content'),
  viewFrom: document.referrer,
  viewCategoryLevel1: 'udn',
}

let additionalData = getMetaData();
nineyiPVData.keywords = additionalData.keywords;
nineyiPVData.viewType = additionalData.type;

if (additionalData.levelTwo) nineyiPVData.viewCategoryLevel2 = additionalData.levelTwo;
if (additionalData.levelThree) nineyiPVData.viewCategoryLevel3 = additionalData.levelThree;

console.log('91App Data', nineyiPVData);
window.nineyiTracking.pageView({});

})();
</script>
<!-- #Location: /inc/ads/no_more_down-->
    </div>
  </footer>
  <div id="gotop" role="button" aria-label="go-top" class="btn btn-blue">
    <i class="i-arrow5-up"></i>
  </div>

    
<script src="/static/js/vendor.bundle.js?202401181353"></script>
<!--<link rel="preload" href="/static/js/vendor.bundle.js?202401181353" as="script">-->
<script src="/static/js/cate.bundle.js?202401181353"></script>
<!--<link rel="preload" href="/static/js/cate.bundle.js?202401181353" as="script">-->
<!--udn.com--><script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js?2020041701"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js?2020041701"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-performance.js?2020041701"></script>
<script src="/static/fcm/fcm_init.js?2020041701"></script>
<script>var perf = firebase.performance();</script>
<!-- #Location: /inc/meta/cssjs_footer -->
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500&display=swap&subset=chinese-traditional" rel="stylesheet" type="text/css">
</body>
</html>
