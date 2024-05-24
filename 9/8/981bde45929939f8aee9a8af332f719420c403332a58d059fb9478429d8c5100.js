(window.webpackJsonp=window.webpackJsonp||[]).push([[42,575],{"/6Yf":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a}));var r=n("mrSG"),i=n("qOnz"),o=),a=function(){eturn t.prototype.get=t.prototype.getImmediate=function(t){var e=Object(r.a)({identifier:"[DEFAULT]",optional:!1},t),n=e.identifier,i=e.optional,o=this.normalizeInstanceIdentifier(n);try{var a=this.getOrInitializeService(o);if(!a){if(i)return null;throw Error("Service "+this.name+" is not available")}return a}catch(t){if(i)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,/**
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
 */(t))try{this.getOrInitializeService("[DEFAULT]")}catch(t){}try{for(var i=Object(r.h)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r.e)(o.value,2),s=a[0],u=a[1],c=this.normalizeInstanceIdentifier(s);try{var h=this.getOrInitializeService(c);u.resolve(h)}catch(t){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},t.prototype.clearInstance=t.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r.f)(t.filter((function(t){return"INTERNAL"in t})).map((),t.filter(().map((function(t){return t._delete()}))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.getOrInitializeService=t.prototype.normalizeInstanceIdentifier=t}();var s=)},"/9aa":"/Ol2":"44Ds":"4RFg":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),s=new N(r||[]);return o(a,"_invoke",{value:_(t,n,s)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var m={};h(m,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==e&&n.call(b,s)&&(m=b);var w=y.prototype=d.prototype=Object.create(m);function I(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var i;o(this,"_invoke",{value:function(o,a){function s(){return new e((function(i,s){!function i(o,a,s,u){var c=l(t[o],t,a);if("throw"!==c.type){var h=c.arg,f=h.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,u)}),(function(t){i("throw",t,s,u)})):e.resolve(f).then((function(t){h.value=t,s(h)}),(function(t){return i("throw",t,s,u)}))}u(c.arg)}(o,a,i,s)}))}return i=i?i.then(s,s):s()}})}function _(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return k()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function T(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=l(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,o(w,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},I(E.prototype),h(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(w),h(w,c,"Generator"),h(w,s,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function o(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,u,"next",t)}function u(t){o(a,r,i,s,u,"throw",t)}s(void 0)}))}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}unction c(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}var h=u((function t(){var e,n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="checkUserStatus",r=a(i().mark((function t(){var e,n,r,s,u,c,h,f,l,p=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=p.length>0&&void 0!==p[0]?p[0]:{},n=e.fbUid,r=void 0===n?"":n,s=e.refetch,u=void 0!==s&&s,!o.fetchCall||o.fetchHadError||u){t.next=3;break}return t.abrupt("return",o.fetchCall);case 3:return c=window.location,h=c.host,f=c.pathname,l=c.search,o.fetchCall=a(i().mark((function t(){var e,n,a,s,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/client",{headers:{"x-original-host":h,"x-original-url":"".concat(f).concat(l),"x-original-referrer":document.referrer,"x-lc-uid":r},credentials:"include"});case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,a=n.abuuid,s=n.lcHash,u=n.paywall,o.user={abuuid:a,hash:s},window.utag_data.cx_shield=u,window.__clientEntitlements=!0,o.fetchHadError=!1,t.abrupt("return",o.user);case 15:return t.prev=15,t.t0=t.catch(0),console.error("Failed to check user status: ".concat(t.t0)),o.fetchHadError=!0,window.__clientEntitlements=!1,t.abrupt("return",o.user);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})))(),t.abrupt("return",o.fetchCall);case 6:case"end":return t.stop()}}),t)}))),(n=c(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.user={abuuid:null,hash:null},this.fetchCall=null,this.fetchHadError=!1}));t.exports={userInfo:new h}},"4uTw":"9+ID":function(t,e,n){"use strict";(function(t){var e=n("zIRd");(function(){var n,r="function"==typeof Object.defineProperties?Object.defineProperty:var i=this);Promise",();var s=s||{},u=this||self,c=/^[\w+/_-]+[=]{0,2}$/,h=null;unction l(){}ction y(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}ar g="closure_uid_"+(1e9*Math.random()>>>0),b=0;function w(t,e,n){return t.call.apply(t.bind,arguments)}function I(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:I).apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}var T=Date.now;Error),N.prototype.w=N.prototype.toJSON=function(){return this.w()};var k,j="auth/",x={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."},C={kd:{Sa:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},rd:{Sa:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://securetoken.googleapis.com/v1/token",Va:"https://identitytoolkit.googleapis.com/v2/",id:"p"},td:{Sa:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},ud:{Sa:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Ya:"https://test-securetoken.sandbox.googleapis.com/v1/token",Va:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};ion V(t,e){this.c=t,this.f=e,this.b=0,this.a=null}unction F(){this.b=this.a=null}k=P("__EID__")?"__EID__":void 0,O(L,Error),L.prototype.name="CustomError",O(R,L),R.prototype.name="AssertionError",V.prototype.get=var q=new V((function(){return new G}),(function(t){t.reset()}));function B(){var t=Ie,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function G(){this.next=this.b=this.a=null}F.prototype.add=function(t,e){var n=q.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},G.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},G.prototype.reset=function(){this.next=this.b=this.a=null};var H=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},z=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};var K=Array.prototype.filter?function(t,e){return Array.prototype.filter.call(t,e,void 0)}:W=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:J=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:ction Q(t){return Array.prototype.concat.apply([],arguments)}function Z(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}var tt,et=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},nt=/&/g,rt=/</g,it=/>/g,ot=/"/g,at=/'/g,st=/\x00/g,ut=/[\x00&<>"']/;function ct(t,e){return-1!=t.indexOf(e)}function ht(t,e){return t<e?-1:t>e?1:0}t:{var ft=u.navigator;if(ft){var lt=ft.userAgent;if(lt){tt=lt;break t}}tt=""}mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gt(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var o=0;o<mt.length;o++)n=mt[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}prototype.sa=!0,wt.prototype.ra=function(){return this.a},wt.prototype.toString=function(){return"Const{"+this.a+"}"};var Et,_t={},Tt={};unction St(t,e){this.a=e===xt?t:""}function Nt(t){return t instanceof St&&t.constructor===St?t.a:(M("expected object of type TrustedResourceUrl, got '"+t+"' of type "+p(t)),"type_error:TrustedResourceUrl")}t.prototype.sa=!0,St.prototype.ra=function(){return this.a.toString()},St.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var kt=/%{(\w+)}/g,jt=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xt={};.prototype.sa=!0,Ct.prototype.ra=function(){return this.a.toString()},Ct.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Dt=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Lt=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Rt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;r Ut={},Ft=new Ct("about:invalid#zClosurez",Ut);t.prototype.sa=!0,qt.prototype.ra=function(){return this.a.toString()},qt.prototype.toString=var Bt={};ction Kt(t){return Kt[" "](t),t}Kt[" "]=l;var Wt,Jt,Xt=pt("Opera"),Yt=pt("Trident")||pt("MSIE"),$t=pt("Edge"),Qt=$t||Yt,Zt=pt("Gecko")&&!(ct(tt.toLowerCase(),"webkit")&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),te=ct(tt.toLowerCase(),"webkit")&&!pt("Edge");function ee(){var t=u.document;return t?t.documentMode:void 0}t:{var ne="",re=(Jt=tt,Zt?/rv:([^\);]+)(\)|;)/.exec(Jt):$t?/Edge\/([\d\.]+)/.exec(Jt):Yt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Jt):te?/WebKit\/(\S+)/.exec(Jt):Xt?/(?:Version)[ \/]?(\S+)/.exec(Jt):void 0);if(re&&(ne=re?re[1]:""),Yt){var ie=ee();if(null!=ie&&ie>parseFloat(ne)){Wt=String(ie);break t}}Wt=ne}var oe,ae={};function se(t){return function(t,e){var n=ae;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(){for(var e=0,n=et(String(Wt)).split("."),r=et(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break;e=ht(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||ht(0==a[2].length,0==s[2].length)||ht(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e}))}if(u.document&&Yt){var ue=ee();oe=ue||(parseInt(Wt,10)||void 0)}else oe=void 0;var ce=oe;try{new self.OffscreenCanvas(0,0).getContext("2d")}catch(Jt){}var he=!Yt||9<=Number(ce);r pe,de,ve={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};nction ge(t){u.setTimeout((function(){throw t}),0)}ar we=!1,Ie=new F;r Te=0,Oe=2,Se=3;e.prototype.reset=var Ae=new V((function(){return new Ne}),(function(t){t.reset()}));then=_e.prototype.$goog_Thenable=!0,(n=_e.prototype).na=n.o=n.cancel=n.Zc=function(t){this.a=Te,Re(this,Oe,t)},n.$c=n.fc=var Be=ge;Ge,L),Ge.prototype.name="cancel";var ze=0,Ke={};e.prototype.xa=!1,He.prototype.Da=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};var Je=Object.freeze||function(t){return t},Xe=!Yt||9<=Number(ce),Ye=Yt&&!se("9"),$e=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",l,e),u.removeEventListener("test",l,e)}catch(t){}return t}();function Qe(t,e){this.type=t,this.b=this.target=e,this.defaultPrevented=!1}function Ze(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Zt){t:{try{Kt(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:tn[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}Qe.prototype.preventDefault=function(){this.defaultPrevented=!0},O(Ze,Qe);var tn=Je({2:"touch",3:"pen",4:"mouse"});Ze.prototype.preventDefault=function(){Ze.$a.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Ye)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},Ze.prototype.g=function(){return this.a};var en="closure_listenable_"+(1e6*Math.random()|0),nn=0;function rn(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.Ua=i,this.key=++nn,this.va=this.Oa=!1}function on(t){t.va=!0,t.listener=null,t.proxy=null,t.src=null,t.Ua=null}function an(t){this.src=t,this.a={},this.b=0}unction un(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.va&&o.listener==e&&o.capture==!!n&&o.Ua==r)return i}return-1}an.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var a=un(t,e,r,i);return-1<a?(e=t[a],n||(e.Oa=!1)):((e=new rn(e,this.src,o,!!r,i)).Oa=n,t.push(e)),e};var cn="closure_lm_"+(1e6*Math.random()|0),hn={};tion vn(t){if("number"!=typeof t&&t&&!t.va){var e=t.src;if(e&&e[en])sn(e.v,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yn(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wn(e))?(sn(n,t),0==n.b&&(n.src=null,e[cn]=null)):on(t)}}}function yn(t){return t in hn?hn[t]:hn[t]="on"+t}unction gn(t,e){var n=t.listener,r=t.Ua||t.src;return t.Oa&&vn(t),n.call(r,e)}unction wn(t){return(t=t[cn])instanceof an?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);unction _n(){He.call(this),this.v=new an(this),this.$b=this,this.fb=null}function Tn(t,e,n,r,i){t.v.add(String(e),n,!1,r,i)}unction Sn(t,e,n,r){if(!(e=t.v.a[String(e)]))return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var a=e[o];if(a&&!a.va&&a.capture==n){var s=a.listener,u=a.Ua||a.src;a.Oa&&sn(t.v,a),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}tion xn(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof xn)for(n=t.Y(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Cn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];Pn(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)Pn(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}O(_n,He),_n.prototype[en]=!0,_n.prototype.addEventListener=function(t,e,n,r){fn(this,t,e,n,r)},_n.prototype.removeEventListener=function(t,e,n,r){dn(this,t,e,n,r)},_n.prototype.dispatchEvent=_n.prototype.Da=function(){if(_n.$a.Da.call(this),this.v){var t,e=this.v;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)on(n[r]);delete e.a[t],e.b--}}this.fb=null},(n=xn.prototype).V=function(){Cn(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},n.Y=function(){return Cn(this),this.a.concat()},n.clear=n.get=function(t,e){return Pn(this.b,t)?this.b[t]:e},n.set=function(t,e){Pn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},n.forEach=function(t,e){for(var n=this.Y(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var Dn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;unction Rn(t,e,n){t.f=n?Gn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Mn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.g=e}else t.g=null}function Vn(t,e,n){e instanceof $n?(t.b=e,function(t,e){e&&!t.f&&(Qn(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(tr(this,e),nr(this,n,t))}),t)),t.f=e}(t.b,t.h)):(n||(e=Hn(e,Xn)),t.b=new $n(e,t.h))}function Un(t,e,n){t.b.set(e,n)}ction Gn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,zn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ln.prototype.toString=function(){var t=[],e=this.f;e&&t.push(Hn(e,Kn,!0),":");var n=this.a;return(n||"file"==e)&&(t.push("//"),(e=this.l)&&t.push(Hn(e,Kn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.g)&&t.push(":",String(n))),(n=this.c)&&(this.a&&"/"!=n.charAt(0)&&t.push("/"),t.push(Hn(n,"/"==n.charAt(0)?Jn:Wn,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",Hn(n,Yn)),t.join("")},Ln.prototype.resolve=var Kn=/[#\/\?@]/g,Wn=/[#\?:]/g,Jn=/[#\?]/g,Xn=/[#\?@]/g,Yn=/#/g;function $n(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Qn(t){t.a||(t.a=new xn,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}unction tr(t,e){Qn(t),e=ir(t,e),Pn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Pn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Cn(t)))}function er(t,e){return Qn(t),e=ir(t,e),Pn(t.a.b,e)}function nr(t,e,n){tr(t,e),0<n.length&&(t.c=null,t.a.set(ir(t,e),Z(n)),t.b+=n.length)}unction ir(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}unction ar(){}(n=$n.prototype).add=function(t,e){Qn(this),this.c=null,t=ir(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},n.clear=n.forEach=function(t,e){Qn(this),this.a.forEach((function(n,r){z(n,(function(n){t.call(e,n,r,this)}),this)}),this)},n.Y=function(){Qn(this);for(var t=this.a.V(),e=this.a.Y(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},n.V=function(t){Qn(this);var e=[];if("string"==typeof t)er(this,t)&&(e=Q(e,this.a.get(ir(this,t))));else{t=this.a.V();for(var n=0;n<t.length;n++)e=Q(e,t[n])}return e},n.set=function(t,e){return Qn(this),this.c=null,er(this,t=ir(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},n.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},n.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.Y(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.V(r);for(var o=0;o<r.length;o++){var a=i;""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")};var sr={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ur=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/r=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mr=/^[^@]+@[^@]+$Tr="Firefox",Or="Chrome}var Nr={ld:"FirebaseCore-web",nd:"FirebaseUI-web"}function kr(){return u.navigator&&u.navigator.userAgent||"e};var Kr,Wr={}try{var Xr={};Object.defineProperty(Xr,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Xr,"abcd",{configurable:!0,enumerable:!0,value:2}),Kr=2==Xr.abcd}catch(Jt){Kr=!rototype.};var ni="displayName",ri="enrolledAt",ii="mfaEnrollmentId",oi="phoneInfoO(ai,ti),ai.prototype.};var ui="REVERT_SECOND_FACTOR_ADDITION",ci="EMAIL_SIGNIN",hi="VERIFY_AND_CHANGE_EMAIL",fi="email",li="mfaInfo",pi="newEmail",di="requestType",vi="email",yi="fromEmail",mi="multiFactorInfo",gi="previousEmail",bi="data",wi="operation}var Ei="apiKey",_i="oobCode",Ti="continueUrl",Oi="languageCode",Si="mode",Ni="tenantId",Ai={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:ui,signIn:ci,verifyAndChangeEmail:hi,verifyEmail:"VERIFY_EMAIL"};function ki(t){try{return new Ii(t)}catch(t){return null}var xi="android",Ci="dynamicLinkDomain",Pi="handleCodeInApp",Di="iOS",Li="url",Ri="installApp",Mi="minimumVersion",Vi="packageName",Ui="bundleId}var qi=nul.prototype.S=function(){return this.f},Gi.prototype.l=function(){return this.c},Gi.prototype.toString=function(){return this.i};var Ki="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Wi=["client_id","response_type","scope","redirect_uri","state"],Ji={md:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Wa:Wi},od:{Ja:null,ua:500,ta:750,fa:"github.com",Wa:Wi},pd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Wa:Wi},vd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Wa:Ki},jd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Wa:[]}var $i="idToken",Qi="providerIdfunction eo(t){if(to.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!"o,Zi),O(eo,to),O(no,to),O(ro,to),O(io,to);var so="enroll",uo="signin";function co() Io(){wo.call(this,"facebook.com")}function Eo(t){if(!t)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return y(t)&&(e=t.accessToken),(new Io).credential({accessToken:e})}function _o(){wo.call(this,"github.com"unction No(){go.call(this,"twitter.com",Kio(t){if(!t.isOAuthProvider)throw new N("invalid-oauth-provider"o.prototype.H},ao.prototype.},co.prototype.ja=function(){},co.prototype.b=function(){},co.prototype.c=function(){},co.prototype.w=function(){},fo.prototype.ja=function(t){return ws(t,lo(this))},fo.prototype.b=function(t,e){var n=lo(this);return n.idToken=e,Is(t,n)},fo.prototype.c=function(t,e){return ho(Es(t,lo(this)),e)},fo.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},vo.prototype.j},vo.prototype.},vo.prototype.},vo.prototype.},go.prototype.K},O(bo,go),O(wo,go),wo.prototype.C},wo.prototype.Pb=function(){return Z(this.a)},wo.prototype.credentia},O(Io,wo),Yr(Io,"PROVIDER_ID","facebook.com"),Yr(Io,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),O(_o,wo),Yr(_o,"PROVIDER_ID","github.com"),Yr(_o,"GITHUB_SIGN_IN_METHOD","github.com"),O(Oo,wo),Yr(Oo,"PROVIDER_ID","google.com"),Yr(Oo,"GOOGLE_SIGN_IN_METHOD","google.com"),O(No,go),Yr(No,"PROVIDER_ID","twitter.com"),Yr(No,"TWITTER_SIGN_IN_METHOD","twitter.com"),ko.prototype.j},ko.prototype.},ko.prototype.},ko.prototype.},$r(xo,{PROVIDER_ID:"password"}),$r(xo,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),$r(xo,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),Do.prototype.j},Do.prototype.},Do.prototype.},Do.prototype.},Mo.prototype.e},$r(Mo,{PROVIDER_ID:"phone"}),$r(Mo,{PHONE_SIGN_IN_METHOD:"phone"}),qo.prototype.getUi},qo.prototype.S=function(){return this.i},qo.prototype.};var Ho,zo=nulunction Xo()}function $o()}function Zo()(Ko,N),O(Wo,N),Wo.prototype.},Wo.prototype.toJSON=function(){return this.w()},Xo.prototype.c=null,O($o,Xo),$o.prototype.},$o.prototype.},Ho=new $o,O(Zo,Xo),Zo.prototype.},Zo.prototype.b=function(){return{}},(n=ta.prototype).ope},n.sen},n.abor},n.setRequestHeader=function(){},n.getResponseHeade},n.p},n.R},n.u},n.q},n.getAllResponseHeader},na.prototype.a=nul}function ia(t,e){this.name=t,this.value=e}na.prototype.rese},ia.prototype.toString=function(){return this.name};var oa=new ia("SEVERE",1e3),aa=new ia("WARNING",900),sa=new ia("CONFIG",700),ua=new ia("FINE",500);ra.prototype.lo};var ca={},ha=nulfunction pa(t){this.f=}O(pa,Xo),pa.prototype.},pa.prototype.}({}),O(da,_n);var va==da.prototype).ope},n.sen},n.abor},n.t},n.o},n.s},n.r},n.T},n.setRequestHeader=function(t,e){this.l.append(t,e)},n.getResponseHeade},n.getAllResponseHeader},Object.defineProperty(da.prototype,"withCredentials",{get:function(){return"include"===this.i},se}}),O(ba,_n);var wa="";ba.prototype.b=fa("goog.net.XhrIo");var Ia=/^https?$/i,Ea=["POST","PUT"}function Ta(t){return"content-type"==t.toLowerCase(nction ka(t){t.a&&t.u&&(t.a.ontimeout=null),t.s&&(u.clearTimeout(t.s),t.s=null)}function ja(t){return t.a?t.a.readyState:on Ua(){L.call(this(n=ba.prototype).M},n.abor},n.D},n.U},n.I},n.getRespons},Pa.prototype.cance},Pa.prototype.},Pa.prototype.the},Pa.prototype.$goog_Thenable=!0,O(Ua,L),Ua.prototype.message="Deferred has already fired",Ua.prototype.name="AlreadyCalledError",O(Fa,L),Fa.prototype.message="Deferred was canceled",Fa.prototype.name="CanceledError",qa.prototype.};var Ba={ar Ka=0,Wa=}function Xa(t){this.f=}O(Ja,L),O(Xa,Xo),Xa.prototype.},Xa.prototype.};var $a,Qa="idToken",Za=new Br(3e4,6e4),ts={"Content-Type":"application/x-www-form-urlencoded"},es=new Br(3e4,6e4),ns={"Content-Type":"application/json"prototype.S=function(){return this.b},Ya.prototype.};var us=new wt(Tt,"https://apis.google.com/js/client.js?onload=%{onload}"),cs="__fcb"+Math.floor(1e6*Math.random()).toString(prototype.},Ya.prototype.y},Ya.prototype.Ab=function(t,e){return ru(this,Gs,{idToken:t,email:e})},Ya.prototype.Bb=function(t,e){return ru(this,Hs,{idToken:t,password:e})};var vs={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"nction ws(t,e){return e.returnIdpCredential=!0,ru(t,Js,en=Ya.prototype).C},n.ub=function(t,e){return gt(t={requestType:"PASSWORD_RESET",email:t},e),ru(this,Vs,t)},n.vb=function(t,e){return gt(t={requestType:"EMAIL_SIGNIN",email:t},e),ru(this,Ls,t)},n.t},n.D},n.e},n.m},n.Qa=function(t){return ru(this,Os,{oobCode:t})},n.i};var Ts={endpoint:"setAccountInfo",B:_s,Z:"email",C:!0},Os={endpoint:"resetPassword",B:_s,},C:!0},Ss={endpoint:"signupNewUser",B:function(t){if(fs(t),!t.password)throw new N("weak-password")},F:ps,U:!0,C:!0},Ns={endpoint:"createAuthUri",C:!0},As={endpoint:"deleteAccount",M:["idToken"]},ks={endpoint:"setAccountInfo",M:["idToken","deleteProvider"],}},js={endpoint:"emailLinkSignin",M:["email","oobCode"],B:fs,F:ps,U:!0,C:!0},xs={endpoint:"emailLinkSignin",M:["idToken","email","oobCode"],B:fs,F:ps,U:!0},Cs={endpoint:"accounts/mfaEnrollment:finalize",M:["idToken","phoneVerificationInfo"],B:ys,F:ps,C:!0,Na:!0},Ps={endpoint:"accounts/mfaSignIn:finalize",M:["mfaPendingCredential","phoneVerificationInfo"],B:ys,F:ps,C:!0,Na:!0},Ds={endpoint:"getAccountInfo"},Ls={endpoint:"getOobConfirmationCode",M:["requestType"],B:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new N("internal-error");fs(t)},Z:"email",C:!0},Rs={endpoint:"getOobConfirmationCode",M:["idToken","requestType"],B:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new N("internal-error")},Z:"email",C:!0},Ms={endpoint:"getOobConfirmationCode",M:["idToken","newEmail","requestType"],},Z:"email",C:!0},Vs={endpoint:"getOobConfirmationCode",M:["requestType"],},Z:"email",C:!0},Us={kb:!0,endpoint:"getProjectConfig",Tb:"GET"},Fs={kb:!0,endpoint:"getRecaptchaParam",Tb:"GET",F:function(t){if(!t.recaptchaSiteKey)throw new N("internal-error")}},qs={endpoint:"resetPassword",B:_s,Z:"email",C:!0},Bs={endpoint:"sendVerificationCode",M:["phoneNumber","recaptchaToken"],Z:"sessionInfo",C:!0},Gs={endpoint:"setAccountInfo",M:["idToken"],B:ls,U:!0},Hs={endpoint:"setAccountInfo",M:["idToken"],B:function(t){if(ls(t),!t.password)throw new N("weak-password")},F:ps,U:!0},zs={endpoint:"signupNewUser",F:ps,U:!0,C:!0},Ks={endpoint:"accounts/mfaEnrollment:start",M:["idToken","phoneEnrollmentInfo"],},F:function(t){if(!t.phoneSessionInfo||!t.phoneSessionInfo.sessionInfo)throw new N("internal-error")},C:!0,Na:!0},Ws={endpoint:"accounts/mfaSignIn:start",M:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],B:function(t){if(!t.phoneSignInInfo||!t.phoneSignInInfo.recaptchaToken)throw new N("missing-app-credential")},},C:!0,Na:!0},Js={endpoint:"verifyAssertion",B:ms,Xa:gs,F:bs,U:!0,C:!0},Xs={endpoint:"verifyAssertion",B:ms,Xa:gs,},U:!0,C:!0},Ys={endpoint:"verifyAssertion",B:function(t){if(ms(t),!t.idToken)throw new N("internal-error")},Xa:gs,F:bs,U:!0},$s={endpoint:"verifyCustomToken",},F:ps,U:!0,C:!0},Qs={endpoint:"verifyPassword",},F:ps,U:!0,C:!0},Zs={endpoint:"verifyPhoneNumber",B:ds,F:ps,C:!0},tu={endpoint:"verifyPhoneNumber",},}},eu={Gb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",B:ds,F:ps,C:!0},nu={endpoint:"accounts/mfaEnrollment:withdraw",M:["idToken","mfaEnrollmentId"],},C:!0,Na:!0r su=new wt(Tt,"https://apis.google.com/js/api.js?onload=%{onload}"),uu=new Br(3e4,6e4),cu=new Br(5e3,15e3),hu=nultype.toStrin},lu.prototype.x},lu.prototype.toStrin},(n=du.prototype).N},n.W},n.Sb=function(){return!1},n.L},n.M},n.l},n.Zb=function(){return!0},n.Ea=function(t){this.i.push(t)},n.Ra=function(t){$(this.i,(function(e){return e==t}))},(n=bu.prototype).ge},n.se},n.},n.ca=function(){},n.ia=function(){};var Iu,Eu=[}function Tu(t){this.a=if(!function(){var t="Node"==Er();if(!(t=Bu()||t&&e.a.INTERNAL.node&&e.a.INTERNAL.node.localStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==Er())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported")}this.a=Bu()||e.a.INTERNAL.node.localStorage,this.type="localStorage"}function Bu(){try{var t=u.localStorage,e=Ur();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null.prototype.},Tu.prototype.postMessag},Ou.prototype.clos},(n=Au.prototype).se},n.ge},n.},n.c},n.i},(n=Uu.prototype).get=function(t){return this.b.then((function(e){return e.get(t)}))},n.se},n.},n.c},n.i},(n=Fu.prototype).ge},n.se},n.},n.ca=function(){},n.ia=function(){},(n=qu.prototype).get=function(t){var e=this;return je().then((function(){return Vr(e.a.getItem(t))}))},n.set=function(t,e){var n=this;return je().then((function(){var r=Rr(e);null===r?n.T(t):n.a.setItem(t,r)}))},n.T=function(t){var e=this;return je().then((function(){e.a.removeItem(t)}))},n.ca=function(t){u.window&&fn(u.window,"storage",t)},n.i},(n=Gu.prototype).ge},n.set=function(){return je()},n.},n.ca=function(){},n.ia=function(){},(n=Hu.prototype).ge},n.se},n.},n.ca=function(){},n.ia=function(){};var Wu,Ju,Xu={D:qu,ab:Hu},Yu={D:qu,ab:Hu},$u={D:bu,ab:Gu},Qu={D:qu,ab:Gu},Zu={qd:"local",NONE:"none",sd:"session"tion ac(t){this.a=t,this.b=ec()}(n=tc.prototype).ge},n.se},n.addListene},n.removeListene},n.X},n.l};var sc,uc={name:"authEvent",D:"local"O(hc}));for(var fc=64,lc=fc-1,pc=[],dc=0;dc<lc;dc++)pc[dc]=0;var vc=Q(128,pchc.prototype.rese};var gc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298}O(bc,hc);var wc=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225.prototype).l},n.N},n.L},n.Zb=function(){return!1},n.Wb=function(){return!0},n.Sb=function(){return!0},n.M},n.E},n.Ra=function(t){$(this.b,(function(e){return e==t}))};var Ac={name:"pendingRedirect",D:"session"};function kc(t){return ic(t.b,Ac,t.arototype.rese},jc.prototype.};var Rc=new Br(2e3,1e4),Mc=new Br(3e4,6e4.prototype.qa=function(){return this.b.qa()};var Bc={ion Yc()prototype.rese},zc.prototype.},zc.prototype.q},Yc.prototype.},Qc.prototype.confir};var nh="mfaInfo",rh="mfaPendingCredentialfunction ah()nction fh(t,e){t.b=e,Yr(t,"enrolledFactors",eion bh(t,n,r){this.G=[],this.l=t.apiKey,this.m=t.appName,this.s=t.authDomain||null;var i=e.a.SDK_VERSION?Ar(e.a.SDK_VERSION):null;this.a=new Ya(this.l,P(k),i),t.emulatorConfig&&is(this.a,t.emulatorConfig),this.b=new ph(this.a),Nh(this,n[Qa]),vh(this.b,n),Yr(this,"refreshToken",this.b.a),jh(this,r||{}),_n.call(this),this.P=!1,this.s&&Cr()&&(this.h=Hc(this.s,this.l,this.m)),this.R=[],this.f=null,this.}(this),this.$=E(this.gb,this);var o=this;this.pa=null,this.Ba=function(t){o.wa(t.i)},this.ba=null,this.z},this.W=null,this.X=[],this.A},this.aa=null,this.N=new hh(this,r),Yr(this,"multiFactor",this.N)}function wh(t,e){t.ba&&dn(t.ba,"languageCodeChanged",t.Ba),(t.ba=e)&&fn(e,"languageCodeChanged",t.Ba)}function Ih(t,e){t.W&&dn(t.W,"emulatorConfigChanged",t.za),(t.W=e)&&fn(e,"emulatorConfigChanged",t.zan xh(){this.a=t,this.b=ec()}eh.prototype.Q},O(ih,N),ah.prototype.r},O(sh,ah),O(uh,sh),O(ch,Qe),(n=hh.prototype).x},n.Q},n.e},n.a},n.},lh.prototype.star},lh.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},ph.prototype.},ph.prototype.getToke},mh.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},O(bh,_n),bh.prototype.w},bh.prototype.ka=function(){return this.pa},bh.prototype.Ga=function(){return Z(this.X)},bh.prototype.g},Yr(bh.prototype,"providerId","firebase"),(n=bh.prototype).reloa},n.n},n.},n.J},n.Kc=function(t){return Jr("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.sb(t)},n.s},n.B},n.p},n.C},n.L},n.Ab=function(t){var e=this;return Kh(this,this.I().then((function(n){return e.a.Ab(n,t)})).then((function(t){return Uh(e,t),e.reload()})))},n.d},n.B},n.C},n.b},n.delet},n.E},n.m},n.F},n.D},n.Mc=function(t){return Gh(this,"reauthViaPopup",t,(function(){return je()}),!0)},n.E},n.N},n.J},n.K},n.t},n.D},n.i},n.toJSON=function(){return this.w()},n.};var Xh={name:"redirectUser",D:"session"h.prototype.};var Zh={name:"persistence",D:"session"tion sf(t){Qe.call(this,"languageCodeChanged"),this.i=t}function uf(t){Qe.call(this,"emulatorConfigChanged"),this.c=tion vf(t){return t.app}function yf(t){return t.currentUsefunction bf(t,e){return t.R.push(e),e.na((function(){Y(t.R,e)})),e}function wf(){}function If(){this.a={},this.b=1e12}$h.prototype.w},O(af,_n),O(sf,Qe),O(uf,Qe),O(cf,Qe),(n=af.prototype).w},n.w},n.ka=function(){return this.aa},n.e},n.fd=function(t,e){if(!this.f){if(!/^https?:\/\//.test(t))throw new N("argument-error","Emulator URL must start with a valid scheme (http:// or https://).")}(!!e&&!!e.disableWarnings),this.f={url:t},this.settings.hb=!0,is(this.a,this.f),this.dispatchEvent(new uf(this.f))}},n.F},n.Ga=function(){return Z(this.N)},n.x},n.S=function(){return this.W},n.toJSO},n.E},n.m},n.F},n.h},n.W},n.X},n.q},n.c},n.z},n.Y},n.da=function(t){return ef(this.l,t)},n.k},n.vc=function(){this.zb()},n.wc=function(){this.zb()},n.j},n.y},n.z},n.H},n.G},n.m},n.S},n.Tc=function(t,e){var n=this;return this.h.then((function(){return df(n,ru(n.a,Qs,{email:t,password:e}))}))},n.d},n.Z},n.Rc=function(t){return Jr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Za(t)},n.y},n.getUi},n.c},n.O},n.addAuthTokenListene},n.removeAuthTokenListener=function(t){$(this.u,(function(e){return e==t}))},n.delet},n.g},n.A},n.v},n.h},n.m},n.Q},n.i},n.u},n.V},n.U},wf.prototype.render=function(){},wf.prototype.reset=function(){},wf.prototype.getResponse=function(){},wf.prototype.execute=function(){};var Ef=nulnction Nf(){}function Af(){}If.prototype.rende},If.prototype.rese},If.prototype.getRespons},If.prototype.execut},Of.prototype.getRespons},Of.prototype.execut},Of.prototype.delet},Yr(Nf,"FACTOR_ID","phone"),Af.prototype.},Af.prototype.c=function(){};var kf=nul}var xf=new wt(Tt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Cf=new Br(3e4,6e4);jf.prototype.},jf.prototype.};var Pf=nul}var Lf="callback",Rf="expired-callback",Mf="sitekey",Vf="size";function Uf(t,e){for(var n=0;n<t.l.length;n++)try{t.l[n](e)}catch(t){=Df.prototype).I},n.rende},n.verif},n.rese},n.clea},O(Bf,Df);var Hf="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function zf(t,e){return{name:t||"",J:"a valid string",optional:!!e,K:function(t){return"string"==typeof t}}}function Kf(t,e){return{name:t||"",J:"a boolean",optional:!!e,K:function(t){return"boolean"==typeof t}totype,{ib:{name:"applyActionCode",j:[zf("code")]},Qa:{name:"checkActionCode",j:[zf("code")]},mb:{name:"confirmPasswordReset",j:[zf("code"),zf("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[zf("email"),zf("password")]},gc:{name:"fetchSignInMethodsForEmail",j:[zf("email")]},qa:{name:"getRedirectResult",j:[]},Ac:{name:"isSignInWithEmailLink",j:[zf("emailLink")]},Gc:{name:"onAuthStateChanged",j:[Zf(Wf(),Jf(),"nextOrObserver"),Jf("opt_error",!0),Jf("opt_completed",!0)]},Hc:{name:"onIdTokenChanged",j:[Zf(Wf(),Jf(),"nextOrObserver"),Jf("opt_error",!0),Jf("opt_completed",!0)]},ub:{name:"sendPasswordResetEmail",j:[zf("email"),Zf(Wf("opt_actionCodeSettings",!0),Xf(null,!0),"opt_actionCodeSettings",!0)]},vb:{name:"sendSignInLinkToEmail",j:[zf("email"),Wf("actionCodeSettings")]},wb:{name:"setPersistence",j:[zf("persistence")]},Rc:{name:"signInAndRetrieveDataWithCredential",j:[Yf()]},yb:{name:"signInAnonymously",j:[]},Za:{name:"signInWithCredential",j:[Yf()]},Sc:{name:"signInWithCustomToken",j:[zf("token")]},Tc:{name:"signInWithEmailAndPassword",j:[zf("email"),zf("password")]},Uc:{name:"signInWithEmailLink",j:[zf("email"),zf("emailLink",!0)]},Vc:{name:"signInWithPhoneNumber",j:[zf("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Wc:{name:"signInWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Xc:{name:"signInWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},cd:{name:"updateCurrentUser",j:[Zf({name:"user",J:"an instance of Firebase User",optional:!1,K:function(t){return!!(t&&t instanceof bh)}},Xf(),"user")]},zb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[zf(null,!0)]},ed:{name:"useDeviceLanguage",j:[]},fd:{name:"useEmulator",j:[zf("url"),Wf("options",!0)]},hd:{name:"verifyPasswordResetCode",j:[zf("code")]}}),el(af.prototype,{lc:{name:"languageCode",jb:Zf(zf(),Xf(),"languageCode")},ti:{name:"tenantId",jb:Zf(zf(),Xf(),"tenantId")}}),af.Persistence=Zu,af.Persistence.LOCAL="local",af.Persistence.SESSION="session",af.Persistence.NONE="none",tl(bh.prototype,{delete:{name:"delete",j:[]},nc:{name:"getIdTokenResult",j:[Kf("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[Kf("opt_forceRefresh",!0)]},Bc:{name:"linkAndRetrieveDataWithCredential",j:[Yf()]},pb:{name:"linkWithCredential",j:[Yf()]},Cc:{name:"linkWithPhoneNumber",j:[zf("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Dc:{name:"linkWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ec:{name:"linkWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Kc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Yf()]},sb:{name:"reauthenticateWithCredential",j:[Yf()]},Lc:{name:"reauthenticateWithPhoneNumber",j:[zf("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Mc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Nc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,}}]},reload:{name:"reload",j:[]},tb:{name:"sendEmailVerification",j:[Zf(Wf("opt_actionCodeSettings",!0),Xf(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[zf(null,!0)]},bd:{name:"unlink",j:[zf("provider")]},Ab:{name:"updateEmail",j:[zf("email")]},Bb:{name:"updatePassword",j:[zf("password")]},dd:{name:"updatePhoneNumber",j:[Yf("phone")]},Cb:{name:"updateProfile",j:[Wf("profile")]},Db:{name:"verifyBeforeUpdateEmail",j:[zf("email"),Zf(Wf("opt_actionCodeSettings",!0),Xf(null,!0),"opt_actionCodeSettings",!0)]}}),tl(If.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),tl(wf.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),tl(_e.prototype,{na:{name:"finally"},o:{name:"catch"},then:{name:"then"}}),el($c.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",jb:Kf("appVerificationDisabledForTesting")}}),tl(Qc.prototype,{confirm:{name:"confirm",j:[zf("verificationCode")]}}),nl(co,"fromJSON"}),[Zf(zf(),Wf(),"json")]),nl(xo,"credential",(function(t,e){return new ko(t,e)}),[zf("email"),zf("password")]),tl(ko.prototype,{w:{name:"toJSON",j:[zf(null,!0)]}}),tl(Io.prototype,{Ca:{name:"addScope",j:[zf("scope")]},Ka:{name:"setCustomParameters",j:[Wf("customOAuthParameters")]}}),nl(Io,"credential",Eo,[Zf(zf(),Wf(),"token")]),nl(xo,"credentialWithLink",Co,[zf("email"),zf("emailLink")]),tl(_o.prototype,{Ca:{name:"addScope",j:[zf("scope")]},Ka:{name:"setCustomParameters",j:[Wf("customOAuthParameters")]}}),nl(_o,"credential",To,[Zf(zf(),Wf(),"token")]),tl(Oo.prototype,{Ca:{name:"addScope",j:[zf("scope")]},Ka:{name:"setCustomParameters",j:[Wf("customOAuthParameters")]}}),nl(Oo,"credential",So,[Zf(zf(),Zf(Wf(),Xf()),"idToken"),Zf(zf(),Xf(),"accessToken",!0)]),tl(No.prototype,{Ka:{name:"setCustomParameters",j:[Wf("customOAuthParameters")]}}),nl(No,"credential",Ao,[Zf(zf(),Wf(),"token"),zf("secret",!0)]),tl(wo.prototype,{Ca:{name:"addScope",j:[zf("scope")]},credential:{name:"credential",j:[Zf(zf(),Zf(Wf(),Xf()),"optionsOrIdToken"),Zf(zf(),Xf(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[Wf("customOAuthParameters")]}}),tl(vo.prototype,{w:{name:"toJSON",j:[zf(null,!0)]}}),tl(fo.prototype,{w:{name:"toJSON",j:[zf(null,!0)]}}),nl(Mo,"credential",Vo,[zf("verificationId"),zf("verificationCode")]),tl(Mo.prototype,{eb:{name:"verifyPhoneNumber",j:[Zf(zf(),{name:"phoneInfoOptions",J:"valid phone info options",optional:!1,}},"phoneInfoOptions"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,}}]}}),tl(Do.prototype,{w:{name:"toJSON",j:[zf(null,!0)]}}),tl(N.prototype,{toJSON:{name:"toJSON",j:[zf(null,!0)]}}),tl(Wo.prototype,{toJSON:{name:"toJSON",j:[zf(null,!0)]}}),tl(Ko.prototype,{toJSON:{name:"toJSON",j:[zf(null,!0)]}}),tl(ih.prototype,{toJSON:{name:"toJSON",j:[zf(null,!0)]}}),tl(eh.prototype,{Qc:{name:"resolveSignIn",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(t){return!!t&&!!t.rb}}]}}),tl(hh.prototype,{Qb:{name:"getSession",j:[]},ec:{name:"enroll",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,}},zf("displayName",!0)]},ad:{name:"unenroll",j:[Zf({name:"multiFactorInfo",J:"a valid multiFactorInfo",optional:!1,K:Qf},zf(),"multiFactorInfoIdentifier")]}}),tl(Bf.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),nl(Ii,"parseLink",ki,[zf("link")]),nl(Nf,"assertion",(function(t){return new uh(t)}),[Yf("phone")]}()}).apply(void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}).call(this,n("yLpj"))},"9EPD":function(t,e,n){"use strict";var r="/home/jenkins/workspace/NPM-web-ui/lib/components/plain-react/Strapline/index.js";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(tfunction s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}var m=n("q1tI"),g=n("Bfam"),b=n("/Ol2"),w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(d,t);var e,n,s,l=f(d);function d(){var t;u(this,d);for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return v(p(t=l.call.apply(l,[this].concat(n))),"renderIcon",(function(){var e=t.props,n=e.content,i=e.options,o=t.props.css||function(){return""},a=i.ignoreUrl,s=n&&n.data,u=s&&s.LINK||s&&s.url,c=!a&&u?"link":i.icon;return m.createElement("span",{className:o("icon",i.icon?"icon-".concat(c):"","icon-relative-".concat(i.iconPositionRelative),"icon-position-".concat(i.iconPosition)),__self:p(t),__source:{fileName:r,lineNumber:19,columnNumber:7}})})),v(p(t),"generateTraits",(function(){function e(t,e){return e.map}))}var n=t.props.options,r=Array.isArray(n.className)?n.className:[n.className],i=["label","size-".concat(n.size),"icon-position-".concat(n.iconPosition),"icon-relative-".concat(n.iconPositionRelative)].concat(a(r));return n.margin&&i.push.apply(i,a(e("margin",n.margin))),n.border&&i.push.apply(i,a(e("border",n.border))),n.padding&&i.push.apply(i,a(e("padding",n.padding))),i})),v(p(t),"renderChildren",(function(){var e=t.props.css||function(){return""},n=t.props,i=n.content,o=n.children,a=n.options,s=a.description,u=a.iconLabel,c=a.iconPosition,h=a.label,f=a.labelSuffix,l=a.descriptionClass,d=a.iconLink,v=a.iconLinkClass,y=a.textColor,g=t.generateTraits(),b=i&&i.data,w=f?"".concat(h," ").concat(f):h,I=(null==b?void 0:b.TITLE)||(null==b?void 0:b.title)||w,E={};return y&&(E.color=y),m.createElement(m.Fragment,{__self:p(t),__source:{fileName:r,lineNumber:79,columnNumber:7}},m.createElement(a.tag,{className:e(g),style:E,__self:p(t),__source:{fileName:r,lineNumber:80,columnNumber:9}},"left"===c&&t.renderIcon(),m.createElement("span",{dangerouslySetInnerHTML:{__html:I},className:e("label-text"),__self:p(t),__source:{fileName:r,lineNumber:82,columnNumber:11}}),u?d?m.createElement("a",{className:e(["iconLabel",v]),href:d,__self:p(t),__source:{fileName:r,lineNumber:85,columnNumber:18}},u):m.createElement("span",{className:e("iconLabel"),__self:p(t),__source:{fileName:r,lineNumber:86,columnNumber:18}},u):"","right"===c&&t.renderIcon()),s&&m.createElement("h2",{className:e("label","labelDescription",l||""),style:E,__self:p(t),__source:{fileName:r,lineNumber:91,columnNumber:11}},s),o)})),v(p(t),"renderDefault",(function(){var e=t.props.css||function(){return""},n=t.props,i=n.content,a=n.options,s=a.align,u=a.icon,c=a.ignoreUrl,h=a.linkAttrs,f=a.strapClass,l=(a.textColor,a.urlParams),d=i&&i.data,v=i&&i.collection;if(v&&0===v.length)return null;var y=(null==d?void 0:d.LINK)||(null==d?void 0:d.url)||(null==d?void 0:d.URL)||a.url||"",g=y&&l?b(y,l):y,w=g&&!c?g:"",I=w?{}:{display:"block"};return w?m.createElement("a",o({className:e("strap",f,"align-".concat(s),"none"!==u?"link":""),href:w,style:I},h,{__self:p(t),__source:{fileName:r,lineNumber:148,columnNumber:7}}),t.renderChildren()):m.createElement("span",o({className:e("strap",f,"align-".concat(s),"none"!==u?"link":""),style:I},h,{__self:p(t),__source:{fileName:r,lineNumber:132,columnNumber:9}}),t.renderChildren())})),v(p(t),"shouldRenderSubheader",(function(t){if("object"!==i(t))return!1;if(!t.text||!t.type)return!1;return!!["text","link","info","sponsored","caption"].find}))&&!("link"===t.type&&!t.url)})),t}return e=d,(n=[{key:"render",value:function(){var t=this.props.options,e=t.subheader,n=t.className,i=t.renderWrapper,a=void 0!==i&&i,s=["strapline-wrapper"];n&&s.push(n);var u=this.props.css||function(){return""},c=this.renderDefault();return this.shouldRenderSubheader(e)||a?m.createElement("div",{className:u(s),__self:this,__source:{fileName:r,lineNumber:189,columnNumber:9}},c,m.createElement(g,o({css:u},e,{__self:this,__source:{fileName:r,lineNumber:191,columnNumber:11}}))):c}}])&&c(e.prototype,n),s&&c(e,s),Object.defineProperty(e,"prototype",{writable:!1}),d}(m.Component);v(w,"displayName","Strapline"),t.exports=w},"9Nap},"9ggG},Adnd:function(t,e,n){"use strict";n.r(e);var r,i=n("mrSG"),o=n("zIRd"),a=n("/6Yf"),s=n("qOnz"),u=n("nbvr"),c=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),h=new s.b("installations","Installations",c}
/**
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
 }
/**
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
 */
/**
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
 */
var w=/^[cdef][\w-]{21}$
/**
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
 */var _=new Mavar S=nul
/**
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
 */var k,j="firebase-installations-store",x=nul**
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
 */function R(t){return Object(i.b)(this,void 0,void 0,(function(){var e,n,r;return Object(i.d)(this,(function(o){switch(o.label){case 0:return[4,L(t,(function(n){var }(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){var n=Promise.reject(h.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},}(t,r);return{installationEntry:r,registrationPromise:o}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:M(t)}:{installationEntry:e}}(t,r);return e=o.registrationPromise,o.installationEntry}))];case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))})* @license
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
 }
/**
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
 *}
/**
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
 }
/**
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
 */(k=o.a).INTERNAL.registerComponent(new a.a("installations"}),"PUBLIC")),k.registerVersion("@firebase/installations","0.4.19");var J,X,Y=n("q/0M"),$="https://www.googletagmanager.com/gtag/js";
/**
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
 *}(J||(J={})}(X||(X={}));
/**
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
 */
var Q,Z=new Y.b("@firebase/analytics");
/**
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
 function nt(t,e,n,r,o){var };return window[o]&&"function"==typeof window[o]&&(a=window[o]),window[o}(a,t,e,n),{gtagCore:a,wrappedGtag:window[o]}}var rt=((Q={})["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",Q["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",Q["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",Q["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",Q["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",Q["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",Q["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",Q["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',Q["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',Q),it=new s.b("analytics","Analytics",rt),ot=ne}()function ut(t,e,n,r){var o=e.throttleEndTimeMillis,a=e.backoffCount;return void 0===r&&(r=ot),Object(i.b)(this,void 0,void 0,(function(){var e,u,c,h,f,l,p;return Object(i.d)(this,(function(i){switch(i.label){case 0:e=t.appId,u=t.measurementId,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,ct(n,o)];case 2:return i.sent(),[3,4];case 3:if(c=i.sent(),u)return Z.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+' provided in the "measurementId" field in the local Firebase config. ['+c.message+"]"),[2,{appId:e,measurementId:u}];throw c;case 4:return i.trys.push([4,6,,7]),[4,st(t)];case 5:return h=i.sent(),r.deleteThrottleMetadata(e),[2,h];case 6:if}(f=i.sent())){if(r.deleteThrottleMetadata(e),u)return Z.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+' provided in the "measurementId" field in the local Firebase config. ['+f.message+"]"),[2,{appId:e,measurementId:u}];throw f}return l=503===Number(f.customData.httpStatus)?Object(s.j)(a,r.intervalMillis,30):Object(s.j)(a,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+l,backoffCount:a+1},r.setThrottleMetadata(e,p),Z.debug("Calling attemptFetch again in "+l+" millis"),[2,ut(t,p,n,r)];case 7:return[2]}}))})}var ht=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}();
/**
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
 */function ft(t,e,n,r,o){return Object(i.b)(this,void 0,void 0,(function(){var a,u,c,h,f,l,p;return Object(i.d)(this,(function(d){switch(d.label){case 0:return(}(t)).then})).catch((function(t){return Z.error(t)})),e.push(a),}().then})),[4,Promise.all([a,u])];case 1:return c=d.sent(),h=c[0],f=c[1],o("js",new Date),(p={}).origin="firebase",p.update=!0,l=p,null!=f&&(l.firebase_id=f),o(J.CONFIG,h.measurementId,l),[2,h.measurementId]}}))}))}
/**
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
 */var lt,pt,dt={},vt=[],yt={},mt="dataLayer",gt="gtag",bt=!}function It(t,e)}();var n=t.options.appId;if(!n)throw it.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw it.create("no-api-key");Z.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+t.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=dt[n])throw it.create("already-exists",{id:n});if(!bt)}
/**
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
 */)()}(mt}(mt);var r=nt(dt,vt,yt,mt,gt),o=r.wrappedGtag,a=r.gtagCore;pt=o,lt=a,bt=!0}return dt[n]=ft(t,vt,yt,e,lt),{app:t,logEven},setCurrentScreen:function(t,e){(function(t,e,n,r){return Object(i.b)(this,void 0,void 0,(function(){var o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return r&&r.global?(t(J.SET,{screen_name:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,e];case 2:o=i.sent(),t(J.CONFIG,o,{update:!0,screen_name:n}),i.label=3;case 3:return[2]}}))}))})(pt,dt[n],t,e).catch((function(t){return Z.error(t)}))},setUserI},setUserPropertie},setAnalyticsCollectionEnable},INTERNAL:{delet}}}!function(t){t.INTERNAL.registerComponent(new a.a("analytics"}),"PUBLIC").setServiceProps({settings:wt,EventName:X,isSupported:Et})),t.INTERNAL.registerComponent(new a.a("analytics-internal"}),"PRIVATE")),t.registerVersion("@firebase/analytics","0.6.2")}(o.a)},Bfam:function(t,e,n){"use strict";var r="/home/jenkins/workspace/NPM-web-ui/lib/components/plain-react/Strapline/Subheader.js";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function s(t,e){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}var d=n("q1tI"),v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(f,t);var e,n,i,c=u(f);function f(){var t;o(this,f);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return l(h(t=c.call.apply(c,[this].concat(n))),"renderLink",(function(e,n,i){return d.createElement("a",{href:e,className:t.props.css("subheader-link-tag"),__self:h(t),__source:{fileName:r,lineNumber:5,columnNumber:5}},t.renderSubheaderText(i,n))})),l(h(t),"renderSubheaderText",(function(e,n){return e?d.createElement("div",{dangerouslySetInnerHTML:{__html:n},__self:h(t),__source:{fileName:r,lineNumber:11,columnNumber:30}}):n})),t}return e=f,(n=[{key:"render",value:function(){var t=this.props,e=t.css,n=t.text,i=t.type,o=t.url,a=t.displaySubheader,s=void 0===a||a,u=t.decodeSubheader,c=void 0!==u&&u;return s&&d.createElement("span",{className:e("subheader","subheader-".concat(i)),__self:this,__source:{fileName:r,lineNumber:18,columnNumber:7}},"link"===i?this.renderLink(o,n,c):this.renderSubheaderText(c,n))}}])&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),f}(d.PureComponent);t.exports=v},Chi},GNi},Gnqm:function(t,e,n){"use strict";var r="/home/jenkins/workspace/NPM-web-ui/lib/components/wsj/LiveHighlights/index.js"q1tI"),v=n("ChiG"),y=n("fFtP"),m=n("XhxB"),g=n("9EPD"),b=n("x7Ii");n("ls82");var w=n("4RFg").userInfo,I=n("tc67"),E=n("gEtn"),_=n("mwIZ"),T=function(t)}(p,t);var e,n,i,h,f,l=c(p}return e=p,(n=[{key:"_limitCards",valu}},{key:"_getTimeSince",value:function(t){var e=Math.floor((Date.now()-t)/1e3),n=Math.floor(e/31536e3);return n>=1?n+"y":(n=Math.floor(e/2592e3))>=1?n+"mo":(n=Math.floor(e/86400))>=1?n+"d":(n=Math.floor(e/3600))>=1?n+"h":(n=Math.floor(e/60))>=1?n+"m":"now"}},{key:"componentDidMount",value:(h=o().mark((function t(){var e,n,r,i,a,s,u,c,h,f,l,p,d,v,y,m,g,b,E,T,O,S,N,A=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.props,i=r.content,a=r.options,u=(s=void 0===a?{}:a).config,c=s.limit,null!=i&&i.data||null!=s&&s.data){t.next=4;break}return t.abrupt("return");case 4:if(h=(null==i?void 0:i.data)||(null==s?void 0:s.data),f=h.status,l=h.id,p=h.createdAt,d=h.slug,v=h.meta,y=void 0===v?{}:v,m=h.config,g=void 0===m?{}:m,b=(null===(e=this.props.context)||void 0===e?void 0:e.stackData)||(null===(n=this.props.content)||void 0===n?void 0:n.data),E=_(b,"meta.options.disablePaywall",!0),T=null,O=null,E){t.next=15;break}return t.next=12,w.checkUserStatus({env:u.appEnv});case 12:S=t.sent,T=S.abuuid,O=S.hash;case 15:N=function(t){if(t){var e=t.cards;A.setContext({data:{cards:e,createdAt:p,id:l,meta:y,slug:d,status:f,config:g}})}},d&&(this.firestoreInstance=I(u,d,{disablePaywall:E,highlightsOnly:!0,limit:c,abuuid:T,hash:O}),this.firestoreInstance.subscribe(N));case 17:case"end":return t.stop()}}),t,this)})),})},{key:"render",value:function(){var t,e=this,n=this.props,i=n.css,o=void 0===i?function(){return""}:i,a=n.content,s=n.context,u=n.options,c=u.className,h=u.limit,f=u.maxHeight,l=u.strapOptions;o.namespace=o.namespace||function(){};var p=null==s||null===(t=s.data)||void 0===t?void 0:t.cards,v=(null==a?void 0:a.data)||(null==u?void 0:u.data),y=p?s.data:v;if(!y||!y.cards||y.cards.length<1)return null;var m=this._limitCards(y.cards,h),b="/livecoverage/".concat(y.slug),w=y.config,I=(void 0===w?{}:w).displayTimeField;l.label=y.meta.hed,l.url=b,y.meta.dek&&(l.subheader={type:"link",text:y.meta.dek,url:b,decodeSubheader:!0});var E=["list"];return f&&E.push("overflow"),d.createElement("div",{className:o("wrapper",c||""),__self:this,__source:{fileName:r,lineNumber:196,columnNumber:7}},d.createElement(g,{css:o.namespace("strapline_"),options:l,__self:this,__source:{fileName:r,lineNumber:197,columnNumber:9}}),d.createElement("ul",{className:o(E),style:{maxHeight:f},__self:this,__source:{fileName:r,lineNumber:198,columnNumber:9}},m.map((function(t,n){var i,a=(t.meta||{}).display;return d.createElement("li",{className:o("entry"),key:n,__self:e,__source:{fileName:r,lineNumber:202,columnNumber:15}},d.createElement("span",{className:o("timestamp"),__self:e,__source:{fileName:r,lineNumber:203,columnNumber:17}},e._getTimeSince(null!==(i=t[I])&&void 0!==i?i:t.createdAt)),d.createElement("a",{className:o("content"),href:"".concat(b,"/card/").concat(a.cardSlug||t.id),__self:e,__source:{fileName:r,lineNumber:206,columnNumber:17}},a.shortTitle||a.hed))}))))}}])&&s(e.prototype,n),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),p}(y);l(T,"options",{type:"object",properties:{config:{type:"object"},data:{type:"object"},moreLabel:{type:"string"},limit:{type:"integer"},strapOptions:{type:"object"},maxHeight:{type:"string"}}}),l(T,"decorators",{WSJTheme:v("WSJTheme",E,{namespace:"strapline_",styles:b})}),l(T,"content",["collection_livehighlights"]),l(T,"defaultOptions",{moreLabel:"More",limit:10,strapOptions:{className:"nested",tag:"h3",icon:"link",iconPosition:"right",iconPositionRelative:"container",padding:["bottom","top"]},maxHeight:"350px"}),t.exports=m(T,n("sVPq"))},HoIX:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return uc})),n.d(e,"b",(function(){return oc})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return rc})),n.d(e,"e",(function(){return ac})),n.d(e,"f",(function(){return pc})),n.d(e,"g",(function(){return lc})),n.d(e,"h",(function(){return gu})),n.d(e,"i",(function(){return dc})),n.d(e,"j",(function(){return mc})),n.d(e,"k",(function(){return mu})),n.d(e,"l",(function(){return yc})),n.d(e,"m",(function(){return bc})),n.d(e,"n",(function(){return sc})),n.d(e,"o",(function(){return ks})),n.d(e,"p",(function(){return nc})),n.d(e,"q",(function(){return wc})),n.d(e,"r",(function(){return V}));var r=n("q/0M"),i=n("qOnz"),o=n("QkSL"),a=n("mrSG"),s=new r.b("@firebase/firestore"}function c(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(s.logLevel<=r.a.DEBUG){var i=e.map(l);s.debug.apply(s,Object(a.g)(["Firestore (8.2.1): "+t],i))}}function h(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(s.logLevel<=r.a.ERROR){var i=e.map(l);s.error.apply(s,Object(a.g)(["Firestore (8.2.1): "+t],i))
/**
 * @license
 * Copyright 2017 Google LLC
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
 /**
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
 }
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var }(/**
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
 */var }();I.h=new I("");var E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},}(Error),}(),};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function S(){if("undefined"==typeof Uint8Array)throw new _(E.UNIMPLEMENTED,"Uint8Arrays are not available in this environment."}var A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.c)(e,t),e.fromBase64String=function(t){return N(),new e(T.fromBase64String(t))},e.fromUint8Arra},e.prototype.toBase64=function(){return N(),this._.toBase64()},e.prototype.toUint8Arra},e.prototype.isEqual=function(t){return this._.isEqual(t._)},e.prototype.toStrin},e}(O),},}(),}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */x.UNAUTHENTICATED=new x(null),x.P=new x("google-credentials-uid"),x.g=new x("first-party-uid");
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var },}(),}(),}(),}(),}();M.U=-1;var }(),}(),}(),}(F),B=/^[_a-zA-Z][_a-zA-Z0-9]*$/,}(F),}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 /**
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
 */var }(),X=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
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
 /**
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
 
/**
 * @license
 * Copyright 2017 Google LLC
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
 /**
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
 ion ft(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function pt(t){return!!t&&"nullValue"in 
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var y}(),m}(}var bt=function(t,e){this.key=t,this.version=e},wt=function(t}return Object(a.c)(e,t),e.prototype.fiel},e.prototype.data=function(){return this.Vt},e.prototype.v},e.prototype.isEqua},e.prototype.toStrin},Object.defineProperty(e.prototype,"hasPendingWrites",{ge},enumerable:!1,configurable:!0}),e}(bt),It=function(t}return Object(a.c)(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{ge},enumerable:!1,configurable:!0}),e.prototype.isEqua},e}(bt),Et=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.c)(e,t),e.prototype.toStrin},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.isEqua},e}(bt),_r At=function(t}return Object(a.c)(e,t),e.creat},e.D},e.prototype.matche},e.prototype.C},e.prototype.x},e}})),k}(At),j}(At),x}(At}var Pt=function(t){function e(e,n){return t.call(this,e,"array-contains",n)||this}return Object(a.c)(e,t),e.prototype.matche},e}(At),Dt=function(t){function e(e,n){return t.call(this,e,"in",n)||this}return Object(a.c)(e,t),e.prototype.matche},e}(At),Lt=function(t){function e(e,n){return t.call(this,e,"not-in",n)||this}return Object(a.c)(e,t),e.prototype.matche},e}(At),Rt=function(t}return Object(a.c)(e,t),e.prototype.matche},e}(At),M}var U/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Gfunction Kt(t){return!et(t.limit)&&"F"===t.limitTypcense
 * Copyright 2017 Google LLC
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
 */var a}();
/**
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
 /**
 * @license
 * Copyright 2018 Google LLC
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
 */var har d}(he),ve=function(t){function e(e){var n=this;return(n=t.call(this)||this).elements=e,n}return Object(a.c)(e,t),e}(he}var m}(he}var b}(he
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ee=function(t,e){this.field=t,this.transform=e},_e=function(t,e){this.version=t,this.transformResults=e},T}(}var Se=function(){};function Ne(t,e,n){return t instanceof Ce?function(t,e,n){var r=t.value;if(n.transformResults){var i=Le(t.fieldTransforms,e,n.transformResults);r=Me(t.fieldTransforms,r,i)}return new wt(t.key,n.version,r,{hasCommittedMutations:!0})}(t,e,n):t instanceof Pe?function(t,e,n){if(!Oe(t.Gt,e))return new Et(t.key,n.version);var r=De(t,e,n.transformResults?Le(t.fieldTransforms,e,n.transformResults):[]);return new wt(t.key,n.version,r,{hasCommittedMutations:!0})}(t,e,n}(t,0,n)}function Ae(t,e,n,r){return t instanceof Ce?function(t,e,n,r){if(!Oe(t.Gt,e))return e;var i=t.value;if(t.fieldTransforms){var o=Re(t.fieldTransforms,n,e,r);i=Me(t.fieldTransforms,i,o)}var a=xe(e);return new wt(t.key,a,i,{bt:!0})}(t,e,r,n):t instanceof Pe?function(t,e,n,r){if(!Oe(t.Gt,e))return e;var i=xe(e),o=De(t,e,Re(t.fieldTransforms,n,e,r));return new wt(t.key,i,o,{bt:!0})}(t,e,r,n}(t,e)}function ke(t,e){return void 0!==t.fieldTransform}(t.fieldTransforms,e):nulvar C}(Se),P}(Se);function De(t,e,n){var r;return }(t,r=e instanceof wt?e.data():yt.empty()),Me(t.fieldTransforms,r,n}function Re(t,e,n,r){for(var i=[],o=0,a=t;o<a.length;o++){var s=a[o],u=s.transform,c=null;n instanceof wt&&(c=n.field(s.field)),null===c&&r instanceof wt&&(c=r.field(s.field)),i.push(fe(u,c,e))}return }var Ve,Ue,Fe=function(t){function e(e,n){var r=this;return(r=t.call(this)||this).key=e,r.Gt=n,r.type=2,r.fieldTransforms=[],r}return Object(a.c)(e,t),e}(Se),q}(Se),Be=function(t){this.count=t(Ue=Ve||(Ve={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var z}(),K}(),W}();We.EMPTY=null,We.RED=!0,We.Jt=!1,We.EMPTY=ne}());
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var J}(),X}(),Ye=new ze(H.J);function $e(){return Y}var Ze=new ze(H.J);function tn(){return Ze}var en=new ze(H.J);function nn(){return en}var rn=new Je(H.J}var an=new Je(g}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var u}(),c}(),h}(),f}(),l}(),pn=function(t,e,n,r){this.We=t,this.removedTargetIds=e,this.key=n,this.je=r},dn=function(t,e){this.targetId=t,this.Ge=e},v},y}(),m}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function gn(){return new ze(H.J}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var wn={asc:"ASCENDING",desc:"DESCENDING"},In={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},En=function(t,e){this.T=t,this.qt=ear e=Cn(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){d(1===r);var o=n.from[0];o.allDescendants?i=o.collectionId:e=e.child(o.collectionId)}var a=[];n.where&&(}(n.where));var s=[];n.orderBy&&(s=n.orderBy.map})));var u=null;n.limit&&(}(n.limit));var c=null;n.startAt&&(c=Gn(n.startAt));var h=null;return n.endAt&&(h=Gn(n.endAt)),Ht(e,i,s,a,u,"F",c,hfunction Hn(t){return wn[t * @license
 * Copyright 2017 Google LLC
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
 */var Q},Z}(),t}(),e}(),n}(),r}(_);
/**
 * @license
 * Copyright 2017 Google LLC
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
 }var o}(}var sr=!}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var c}(}
/**
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
 */var fr=function(t,e){this.progress=t,this.gs=e},lr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",p}();
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 function yr(t){return t+"}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var gr=function(t,e){this.seconds=t,this.nanoseconds=e},br=function(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n};br.store="owner",br.key="owner";var wr=function(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n};wr.store="mutationQueues",wr.keyPath="userId";var I};Ir.store="mutations",Ir.keyPath="batchId",Ir.userMutationsIndex="userMutationsIndex",Ir.userMutationsKeyPath=["userId","batchId"];var E}();Er.store="documentMutations",Er.PLACEHOLDER=new Er;var _r=function(t,e){this.path=t,this.readTime=e},Tr=function(t,e){this.path=t,this.version=e},Or=function(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o};Or.store="remoteDocuments",Or.readTimeIndex="readTimeIndex",Or.readTimeIndexPath="readTime",Or.collectionReadTimeIndex="collectionReadTimeIndex",Or.collectionReadTimeIndexPath=["parentPath","readTime"];var Sr=function(t){this.byteSize=t};Sr.store="remoteDocumentGlobal",Sr.key="remoteDocumentGlobalKey";var N};Nr.store="targets",Nr.keyPath="targetId",Nr.queryTargetsIndexName="queryTargetsIndex",Nr.queryTargetsKeyPath=["canonicalId","targetId"];var Ar=function(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n};Ar.store="targetDocuments",Ar.keyPath=["targetId","path"],Ar.documentTargetsIndex="documentTargetsIndex",Ar.documentTargetsKeyPath=["path","targetId"];var kr=function(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r};kr.key="targetGlobalKey",kr.store="targetGlobal";var jr=function(t,e){this.collectionId=t,this.parent=e};jr.store="collectionParents",jr.keyPath=["collectionId","parent"];var x};xr.store="clientMetadata",xr.keyPath="clientId";var Cr=function(t,e,n){this.bundleId=t,this.createTime=e,this.version=n};Cr.store="bundles",Cr.keyPath="bundleId";var P};Pr.store="namedQueries",Pr.keyPath="name";var Dr=Object(a.g)(Object(a.g)(Object(a.g)(Object(a.g)([wr.store,Ir.store,Er.store,Or.store,Nr.store,br.store,kr.store,Ar.store],[xr.store]),[Sr.store]),[jr.store]),[Cr.store,Pr.store]),Lr=function(t){function e(e,n){var r=this;return(r=t.call(this)||this).vs=e,r.Ss=n,r}return Object(a.c)(e,t),e}(pr);
/**
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
 }
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var M}(),V}(),Ur=function(t){this.Ms=ttion Kr(t,e){for(var n=(e.baseMutations||[]).map((function(e){return Vn(t.Ms,e)})),r=e.mutations.length-1;r>=0;--r){var i=e.mutations[r];void 0!==(null==i?void 0:i.transform)&&(e.mutations[r-1].updateTransforms=i.transform.fieldTransforms,e.mutations.splice(r,1),--r)}var o=e.mutations.map((function(e){return Vn(t.Ms,e)})),a=V.fromMillis(e.localWriteTimeMs);return new Mr(e.batchId,a,n,o/**
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
 */var Y}();function $r(t){return Rr(t,Cr.store)}function Qr(t){return Rr(t,Pr.store)}
/**
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
 */var Z}(),t}(),e}();function ni(t){return Rr(t,jr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */var ri={js:!1,Gs:0,zs:0,Hs:0},i}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 }
/**
 * @license
 * Copyright 2017 Google LLC
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
 */ii.ti=10,ii.ei=1e3,ii.ni=new ii(41943040,ii.ti,ii.ei),ii.si=new ii(-1,0,0);var a}(),s}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
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
 
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var h}(}function li(t){return Rr(t,Ir.store)}function pi(t){return Rr(t,Er.store)}function di(t){return Rr(t,wr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var v}(),y}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mi(t){return Rr(t,Nr.store)}function gi(t){return Rr(t,kr.store)}function bi(t){return Rr(t,Ar.store)}
/**
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
 }var I}(),E}(),_}(),T}(}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var S}(),Ni=function(t}return Object(a.c)(e,t),e.prototype.T},e.prototype.w},e.prototype.E},e}(si);function Ai(t){return Rr(t,Sr.store
/**
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
 */var x}(}var Pi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Di=function(}return t.prototype.star},t.prototype.y},t.prototype.V},t.prototype.p},t.prototype.m},t.prototype.b},t.prototype.N},t.prototype.F},t.prototype.P},t.prototype.x},t.prototype.S},t.prototype.$},t.prototype.k},t.prototype.K},Object.defineProperty(t.prototype,"Ir",{get:function(){return this.oo},enumerable:!1,configurable:!0}),t.prototype.W},t.prototype.Cr=function(){return this.wo},t.prototype.kr=function(){return this.Eo},t.prototype.jo=function(){return this.Ii},t.prototype.Go=function(){return this.To},t.prototype.runTransactio},t.prototype.z},t.prototype.C},t.Wn=function(){return er.Wn()},t.prototype.D},t.prototype.O},t.prototype.A},t.prototype.qo=function(){this.ao&&(this.document.removeEventListener("visibilitychange",this.ao),this.ao=null)},t.prototype.R},t.prototype.U},t.prototype.L},t.prototype.B},t.prototype.Q},t.prototype.M},t}();function Li(t){return Rr(t,br.store)}function Ri(t){return Rr(t,xr.store}var V}(),U}(),F}(),q}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 (t,e,n,r){return Object(a.b)(this,void 0,void 0,(function(){var i,o,s,u,c,h,f,l,p,d;return Object(a.d)(this}))})}var r}(),i}(),o}(),a}(),s}(),uo=function(t){function e(e){var n=this;return(n=t.call(this)||this).zr=e,n}return Object(a.c)(e,t),e.prototype.T},e.prototype.wi=function(t,e){return this.zr.di(t,e)},e.prototype.Ei=function(t,e){return this.zr.getEntries(t,e)},e}(si),c}(),h}(),fo=function(t){function e(e){var n=this;return(n=t.call(this)||this).Ss=e,n}return Object(a.c)(e,t),e}(pr),l}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
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
 */function po(t,e){return"firestore_clients_"+t+"_"+var m}(),g}(),b}(),w}(),I}(),E}(),_}(),T}(),O}(),So={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},N}(),Ao=function(t}return Object(a.c)(e,t),e.prototype.D},e.prototype.xu=function(t,e){var n=[this.Vu,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(o.g)(),a=Object(o.h)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.T.projectId+"/databases/"+this.T.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.I};this.Su(s.initMessageHeaders,e),Object(i.x)()||Object(i.A)()||Object(i.t)()||Object(i.v)()||Object(i.B)()||Object(i.s)()||(s.httpHeadersOverwriteParam="$httpHeaders");var u=n.join("");c("Connection","Creating WebChannel: "+u,s);var h=r.createWebChannel(u,s),l=!1,p=!1,v=new No({d},wu:function(){return h.close()}}),};return y(h,o.e.EventType.OPEN})),y(h,o.e.EventType.CLOSE})),y(h,o.e.EventType.ERROR})),y(h,o.e.EventType.MESSAGE})),y(a,o.b.STAT_EVENT})),setTimeout}),0),v},e}());
/**
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
 */
/**
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
 */function ko(){return"undefined"!=typeof window?window:nul}
/**
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
 }var C}(),P}(),Do=function(t}return Object(a.c)(e,t),e.prototype.ah=function(t){return this.Ku.xu("Listen",t)},e.prototype.onMessag},e.prototype.h},e.prototype.l},e}(Po),Lo=function(t}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"fh",{get:function(){return this._h},enumerable:!1,configurable:!0}),e.prototype.star},e.prototype.s},e.prototype.a},e.prototype.onMessag},e.prototype.T},e.prototype.d},e}(Po),Ro=function(t}return Object(a.c)(e,t),e.prototype.m},e.prototype.bu=function(t,e,n){var r=this;return this.mh(),this.credentials.getToken().then((function(i){return r.Ku.bu(t,e,n,i)})).catch((function(t){throw t.code===E.UNAUTHENTICATED&&r.credentials.v(),t}))},e.prototype.C},e.prototype.terminate=function(){this.Ih=!1},e}((function(){})),M}(),V};
/**
 * @license
 * Copyright 2017 Google LLC
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
 ion Ko(t){return Wo(t)&&!ua(t).Hu()&&t.Nh.size>}(),b}();
/**
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
 *}(}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ia=function(t){this.key=t},Ea=function(t){this.key=t},_}(),Ta=function(t,e,n){this.query=t,this.targetId=e,this.view=n},O},S}(unction ja(t,e,n){return Object(a.b)(this,void 0,void 0,(function(){var r,i,o,s;return Object(a.d)(this}))})function Pa(t,e,n){return Object(a.b)(this,void 0,void 0,(function(){var r,i,o,s,u,c;return Object(a.d)(this}))}),s}();
/**
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
 */
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var u}(),cs}(}()),hs=function(t){this._methodName=t};
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var b}(),ws=new Map,Is=function(}return Object.defineProperty(t.prototype,"app",{ge},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"R_",{get:function(){return this.T_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"P_",{ge},enumerable:!1,configurable:!0}),t.prototype.g},t.prototype.V_=function(){return this.E_},t.prototype.p},t.prototype._delet},t.prototype.b},t}(),E}(),_}(),Ts=function(t}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this.C_.path.et()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this.C_.path.ot()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{ge},enumerable:!1,configurable:!0}),e.prototype.withConverte},e}(_s);
/**
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
 */function Os(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t instanceof O&&(t=t._),fs("collection","path",e),t instanceof Is)return vs(n=q.ct.apply(q,Object(a.g)([e],r))),new Ts(t,null,n);if(!(t instanceof Es||t instanceof Ts))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return vs(n=q.ct.apply(q,Object(a.g)([t.path],r)).child(q.ct(e))),new Ts(t.firestore,null,n)}function Ss(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t instanceof O&&(t=t._),1===arguments.length&&(e=m.t()),fs("doc","path",e),t instanceof Is)return ds(n=q.ct.apply(q,Object(a.g)([e],r))),new Es(t,null,new H(n));if(!(t instanceof Es||t instanceof Ts))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return ds(n=t.D_.child(q.ct.apply(q,Object(a.g)([e],r)))),new Es(t.firestore,t instanceof Ts?t.v_:null,new H(n)var k}(),js=/^__.*__$/,x}(),C}();
/**
 * @license
 * Copyright 2017 Google LLC
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
 }var D}(),L}(var V}(hs}var F}(hs),qs=function(t){function e(e,n){var r=this;return(r=t.call(this,e)||this).H_=n,r}return Object(a.c)(e,t),e.prototype.z_=function(t){var e=Us(this,t,!0),n=this.H_.map((function(t){return Ws(t,e)})),r=new ve(n);return new Ee(t.path,r)},e.prototype.isEqual=function(t){return this===t},e}(hs),B}(hs),G}(hsunction Ws(t,e){if(t instanceof O&&(t=t._),Xs(t))return Ys("Unsupported field value:",e,t),Js(t,e);if(t instanceof hs)retur}(t,e),null;if(e.path&&e.zt.push(e.path),t instanceof Array){if(e.settings.B_&&4!==e.k_)throw e.K_("Nested arrays are not supported");retur}(t,e)}retur}(t,er Qs=new RegExp("[~\\*/\\[\\]]"/**
 * @license
 * Copyright 2017 Google LLC
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
 */var nu=function(}return t.prototype.ef=function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n=this;return Object(a.d)(this,(function(r){switch(r.label){case 0:if(this.nf(),this.mutations.length>0)throw new _(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");return[4,function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o,s,u;return Object(a.d)(this}))}))}(this.Dh,t)];case 1:return[2,((e=r.sent()).forEach})),e)]}}))}))},t.prototype.se},t.prototype.updat},t.prototype.delet},t.prototype.commi},t.prototype.s},t.prototype.G},t.prototype.r},t.prototype.write=function(t){this.nf(),this.mutations.push(t)},t.prototype.nf=function(){},t}(),ru=function(}return t.prototype.run=function(){this.af()},t.prototype.a},t.prototype.u},t.prototype.h},t.prototype.l},t}(),iu=function(}return t.prototype.getConfiguration=function(){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this}))}))},t.prototype.f},t.prototype.d},t.prototype.terminat},t}();
/**
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
 */function ou(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i=this;return Object(a.d)(this,(function(o){switch(o.label){case 0:return t.fs.Af(),c("FirestoreClient","Initializing OfflineComponentProvider"),[4,t.getConfiguration()];case 1:return n=o.sent(),[4,e.initialize(n)];case 2:return o.sent(),r=n.Yl,t.ff((function(n){r.isEqual(n)||(r=n,t.fs.vo((function(){return Object(a.b)(i,void 0,void 0,(function(){return Object(a.d)(this}))}))})))})),e.persistence.Vo((function(){return t.terminate()})),t.mf=e,[2]}}))}))}function au(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return t.fs.Af(),[4,su(t)];case 1:return n=i.sent(),c("FirestoreClient","Initializing OnlineComponentProvider"),[4,t.getConfiguration()];case 2:return r=i.sent(),[4,e.initialize(n,r)];case 3:return i.sent(),t.ff((function(n){return t.fs.vo((function(){retur}(e.gl,n)}))})),t.If=e,[2]}}))}))}function su(t){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(e){switch(e.label){case 0:return t.mf?[3,2]:(c("FirestoreClient","Using default OfflineComponentProvider"),[4,ou(t,new is)]);case 1:e.sent(),e.label=2;case 2:return[2,t.mf]}}))})}function cu(t){return su(t).then((function(t){return t.persistence}))}function hu(t){return su(t).then((function(t){return t.Sh}))}function fu(t){return uu(t).then((function(t){return t.gl})r yu=function(}return Object.defineProperty(t.prototype,"wf",{get:function(){return this.yf},enumerable:!1,configurable:!0}),t.prototype.y},t.prototype.T},t.prototype.E},t.prototype.enqueu},t.prototype.v},t.prototype.C},t.prototype.D},t.prototype.m},t.prototype.S},t.prototype.Af=function(){},t.prototype.N},t.prototype.F},t.prototype.O},t.prototype.kf=function(t){this.bf.push(t)},t.prototype.x},t}(),mu=-1,gu=function(t}return Object(a.c)(e,t),e.prototype.b},e}(Is**
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
 */var _u=function(){function t(){}return t.prototype.$},t.prototype.j},t.prototype.K},t.prototype.W},t.prototype.q},t.prototype.B},t.prototype.G},t}(),T}(),O}(Tu);
/**
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
 }
/**
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
 }var Au=function(){}var j}(Au),x}(Au),C}(Au),P}(Au),D}(Au**
 * @license
 * Copyright 2017 Google LLC
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
 var qu=function(t){function e(e){var n=this;return(n=t.call(this)||this).firestore=e,n}return Object(a.c)(e,t),e.prototype.Uf=function(t){return new T(t)},e.prototype.Qf=function(t){var e=this.Gf(t,this.firestore.I_);return new Es(this.firestore,null,e)},e}(_u),B}(),Gu=function(t}return Object(a.c)(e,t),e.prototype.exists=function(){return t.prototype.exists.call(this)},e.prototype.dat},e.prototype.ge},e}(Tu),H}(Gu),z}();
/**
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
 
/**
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
 */var J}(_u}function Yu(t){for(var e,n,r,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];t instanceof O&&(t=t._);var s={includeMetadataChanges:!1},u=0;"object"!=typeof i[u]||Uu(i[u])||(s=i[u],u++);var c,h,f,l={includeMetadataChanges:s.includeMetadataChanges};if(Uu(i[u])){var p=i[u];i[u]=null===(e=p.next)||void 0===e?void 0:e.bind(p),i[u+1]=null===(n=p.error)||void 0===n?void 0:n.bind(p),i[u+2]=null===(r=p.complete)||void 0===r?void 0:r.bind(p)}if(t instanceof Es)h=ms(t.firestore,gu),f=zt(t.S_.path),c={nex},error:i[u+1],complete:i[u+2]};else{var d=ms(t,_s);h=ms(d.firestore,gu),f=d.C_;var v=new Ju(h);c={nex},error:i[u+1],complete:i[u+2]},Nu(t.C_)}retur}(bu(h),f,l,c
/**
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
 */var Z}(}
/**
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
 */
/**
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
 */var e}()),n}(),rc=function(t}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"I_",{get:function(){return this._.I_},enumerable:!1,configurable:!0}),e.prototype.setting},e.prototype.useEmulator=function(t,e){"firestore.googleapis.com"!==this._.V_().host&&f("Host has been set in both settings() and useEmulator(), emulator host will be used"),this.settings({host:t+":"+e,ssl:!1,merge:!0})},e.prototype.enableNetwor},e.prototype.disableNetwor},e.prototype.enablePersistenc},e.prototype.clearPersistenc},e.prototype.terminat},e.prototype.waitForPendingWrite},e.prototype.onSnapshotsInSyn},Object.defineProperty(e.prototype,"app",{get:function(){if(!this.md)throw new _(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this.md},enumerable:!1,configurable:!0}),e.prototype.collection=function(t){try{return new mc(this,Os(this._,t))}catch(t){throw cc(t,"collection()","Firestore.collection()")}},e.prototype.do},e.prototype.collectionGrou},e.prototype.runTransactio},e.prototype.batc},e.prototype.loadBundle=function(t){throw new _(E.FAILED_PRECONDITION,'"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')},e.prototype.namedQuer},e}(O),i}(_u}var ac=function(t){function e(e,n){var r=this;return(r=t.call(this,n)||this).zf=e,r}return Object(a.c)(e,t),e.prototype.get=function(t){var e=this,n=gc(t);return this._.get(n).then((function(t){return new lc(e.zf,t)}))},e.prototype.set=function(t,e,n){var r=gc(t);return n?(ls("Transaction.set",n),this._.set(r,e,n)):this._.set(r,e),this},e.prototype.update=function(t,e,n){for(var r,i=[],o=3;o<arguments.length;o++)i[o-3]=arguments[o];var s=gc(t);return 2===arguments.length?this._.update(s,e):(r=this._).update.apply(r,Object(a.g)([s,e,n],i)),this},e.prototype.delete=function(t){var e=gc(t);return this._.delete(e),this},e}(O),sc=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.c)(e,t),e.prototype.se},e.prototype.updat},e.prototype.delet},e.prototype.commit=function(){return this._.commit()},e}(O),uc=function(t){function e(e,n){var r=this;return(r=t.call(this,n)||this).firestore=e,r.Hf=new ic(e),r}return Object(a.c)(e,t),e.R},e.A},Object.defineProperty(e.prototype,"id",{get:function(){return this._.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return new mc(this.firestore,this._.parent)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._.path},enumerable:!1,configurable:!0}),e.prototype.collectio},e.prototype.isEqua},e.prototype.se},e.prototype.updat},e.prototype.delet},e.prototype.onSnapsho},e.prototype.get=function(t){var e=this;return("cache"===(null==t?void 0:t.source)?function(t){t=ms(t,Es);var e=ms(t.firestore,gu),n=bu(e),r=new Ju(e);return function(t,e){var n=this,r=new Qn;return t.fs.ys((function(){return Object(a.b)(n,void 0,void 0,(function(){var n;return Object(a.d)(this,(function(i){switch(i.label){case 0:return n=function(t,e,n){return Object(a.b)(this,void 0,void 0,(function(){var r,i;return Object(a.d)(this}))}))},[4,hu(t)];case 1:return[2,n.apply(void 0,[i.sent(),e,r])]}}))}))})),r.promise}(n,t.S_).then}))}(this._):"server"===(null==t?void 0:t.source}(this._}(this._)).then}))},e.prototype.withConverter=function(t){return new e(this.firestore,this._.withConverter(t))},e}(Oar lc=function(t){function e(e,n){var r=this;return(r=t.call(this,n)||this).zf=e,r}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"ref",{get:function(){return new uc(this.zf,this._.ref)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"exists",{get:function(){return this._.exists()},enumerable:!1,configurable:!0}),e.prototype.data=function(t){return this._.data(t)},e.prototype.get=function(t,e){return this._.get(t,e)},e.prototype.isEqual=function(t){return Wu(this._,t._)},e}(O),p}(lc),dc=function(t}return Object(a.c)(e,t),e.prototype.wher},e.prototype.orderB},e.prototype.limit=function(t){try{return new e(this.firestore,ku(this._,function(t){return gs("limit",t),new Cu("limit",t,"F")}(t)))}catch(t){throw cc(t,"limit()","Query.limit()")}},e.prototype.limitToLas},e.prototype.startAt=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return new e(this.firestore,ku(this._,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Pu("startAt",t,!0)}.apply(void 0,t)))}catch(t){throw cc(t,"startAt()","Query.startAt()")}},e.prototype.startAfter=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return new e(this.firestore,ku(this._,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Pu("startAfter",t,!1)}.apply(void 0,t)))}catch(t){throw cc(t,"startAfter()","Query.startAfter()")}},e.prototype.endBefore=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return new e(this.firestore,ku(this._,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Du("endBefore",t,!0)}.apply(void 0,t)))}catch(t){throw cc(t,"endBefore()","Query.endBefore()")}},e.prototype.endA},e.prototype.isEqual=function(t){return As(this._,t._)},e.prototype.ge},e.prototype.onSnapsho},e.prototype.withConverter=function(t){return new e(this.firestore,this._.withConverter(t))},e}(O),vc=function(t){function e(e,n){var r=this;return(r=t.call(this,n)||this).zf=e,r}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return this._.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"doc",{get:function(){return new pc(this.zf,this._.doc)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"oldIndex",{get:function(){return this._.oldIndex},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newIndex",{get:function(){return this._.newIndex},enumerable:!1,configurable:!0}),e}(O),yc=function(t){function e(e,n){var r=this;return(r=t.call(this,n)||this).zf=e,r}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"query",{ge},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"empty",{get:function(){return this._.empty},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"docs",{ge},enumerable:!1,configurable:!0}),e.prototype.docChange},e.prototype.forEac},e.prototype.isEqual=function(t){return Wu(this._,t._)},e}(O),mc=function(t}return Object(a.c)(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{ge},enumerable:!1,configurable:!0}),e.prototype.do},e.prototype.ad},e.prototype.isEqual=function(t){return Ns(this._,t._)},e.prototype.withConverte},e}(dc}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var bc=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.call(this,new(cs.bind.apply(cs,Object(a.g)([void 0],e))))||this}return Object(a.c)(e,t),e.documentI},e.prototype.isEqua},e}(O),wc=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.c)(e,t),e.serverTimestamp=function(){var t=new Fs("serverTimestamp");return t._methodName="FieldValue.serverTimestamp",new e(t)},e.delet},e.arrayUnion=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new qs("arrayUnion",t)}.apply(void 0,t);return r._methodName="FieldValue.arrayUnion",new e(r)},e.arrayRemov},e.incremen},e.prototype.isEqual=function(t){return this._.isEqual(t._)},e}(O);
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 *}()}).call(this,n("8oxB"))},I01},QkSL:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return rr})),n.d(e,"b",(function(){return or})),n.d(e,"c",(function(){return ir})),n.d(e,"d",(function(){return ar})),n.d(e,"e",(function(){return sr})),n.d(e,"f",(function(){return ur})),n.d(e,"g",(function(){return er})),n.d(e,"h",(function(){return nr}));
/*! *****************************************************************************
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
***************************************************************************** */
var }var o,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s=s||{},u=a||self;function c()var l="closure_uid_"+(1e9*Math.random()>>>0),p=totype.j=!1,w.prototype.j},w.prototype.};var I=Array.prototype.indexO},E=Array.prototype.forEacar S,N=String.prototype.trim?function(t){return t.trim()}function k(t,e){return t<e?-1:t>e?1:0}t:{var j=u.navigator;if(j){var x=j.userAgent;if(x){S=x;break t}}S="var D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "R[" "]=c;var M,V,U=A(S,"Opera"),F=A(S,"Trident")||A(S,"MSIE"),q=A(S,"Edge"),B=q||F,G=A(S,"Gecko")&&!(A(S.toLowerCase(),"webkit")&&!A(S,"Edge"))&&!(A(S,"Trident")||A(S,"MSIE"))&&!A(S,"Edge"),H=A(S.toLowerCase(),"webkit")&&!A(S,"Edge"}t:{var K="",W=(V=S,G?/rv:([^\);]+)(\)|;)/.exec(V):q?/Edge\/([\d\.]+)/.exec(V):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(V):H?/WebKit\/(\S+)/.exec(V):U?/(?:Version)[ \/]?(\S+)/.exec(V):void 0);if(W&&(K=W?W[1]:""),F){var J=z();if(null!=J&&J>parseFloat(K)){M=String(J);break t}}M=K}var X,Y={}if(u.document&&F){var Q=z();X=Q||(parseInt(M,10)||void 0)}else X=void 0;var Z=X,tt=!F||9<=Number(Z),et=F&&!$("9"),n}(rt.prototype.b=function(){this.defaultPrevented=!0},b(it,rt);var ot={2:"touch",3:"pen",4:"mouse"};it.prototype.};var at="closure_listenable_"+(1e6*Math.random()|0),st=prototype.ad};var pt="closure_lm_"+(1e6*Math.random()|0),dt={t="__closure_events_fn_"+(1e9*Math.random()>>>0Tt,w),Tt.prototype[at]=!0,(o=Tt.prototype).addEventListene},o.removeEventListene},o.},o.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},o.w};var Nt=u.JSON.stringif}var kt,jt=ne}())}),(function(t){t.reset()}).prototype.ad},Ct.prototype.se},Ct.prototype.rese};var Lt=!1,Rt=new At,Tt),(o=Vt.prototype).aa=!1,o.M=null,o.Z},o.star},o.};var Bt=function(t}retur}(e,t),e.prototype.},e.prototype.},e}(w}b(Gt,w);var Ht=[.prototype.},Gt.prototype.handleEven},Wt.prototype.info=function(){};var Xt={},Yt=nul}function Qt(t){rt.call(this,Xt.Fa,t)}function Zt(t){var e=$t();Ot(e,new Qt(e,t).Fa="serverreachability",b(Qt,rt),Xt.STAT_EVENT="statevent",b(te,rt),Xt.Ga="timingevent",b(ne,rt);var ie={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},oe={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function ae()}function ue(){}ae.prototype.a=null;var ce,he={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function fe(){rt.call(this,"d"}function pe()}b(fe,rt),b(le,rt),b(pe,ae),ce=new pe;var ve=45e3,ye={},me={ype).setTimeout=function(t){this.P=t},o.X},o.C},o.W},o.cance},o.V},(o=ke.prototype).},o.},o.ge},o.se},o.forEac};var Ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$}function De(t){return new Pe(totype.toStrin};var He=/[#\/\?@]/g,ze=/[#\?:]/g,Ke=/[#\?]/g,We=/[#\?@]/g,Je=/#/e.prototype).ad},o.forEac},o.},o.},o.se},o.ge},o.toStrin};var en=function(t,e){this.b=t,this.a=e}var rn=1tion fn()n.prototype.cance},fn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},fn.prototype.pars};var vn=u.JSON.pars}b(yn,Tt);var mn="",gn=/^https?$/i,bn=["POST","PUT"l!=t.s&&(u.clearTimeout(t.s),t.s=nullfunction Gn(t,e){var n=null;if(t.a==e){Bn(t),Fn(t),t.a=null;var r=2}else{if(!sn(t.b,e))return;n=e.s,cn(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=g()-e.u;var i=t.u;Ot(r=$t(),new ne(r,n,e,i)),Dn(t)}else Vn(t);else if(3==(i=e.h)||0==i&&0<t.I||!(1==r}(t,e)||2==r&&Un(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)ction Xn()nction tr(t){this.a=t}(o=yn.prototype).b},o.x},o.abor},o.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),Tn(this,!0)),yn.X.G.call(this)},o.za=function(){this.j||(this.A||this.l||this.g?_n(this):this.Ua())},o.Ua=function(){_n(this)},o.},o.},o.P},o.ua=function(){return this.h},o.Q},(o=kn.prototype).ha=8,o.v=1,o.B},o.A},o.T},o.S},o.Y},(o=Xn.prototype).ta=function(){},o.sa=function(){},o.ra=function(){},o.qa=function(){},o.Ja=function(){},Yn.prototype.a=function(t,e){return new $n(t,e)},b($n,Tt),$n.prototype.},$n.prototype.clos},$n.prototype.},$n.prototype.},b(Qn,fe),b(Zn,le),b(tr,Xn),tr.prototype.ta=function(){Ot(this.a,"a")},tr.prototype.sa=function(t){Ot(this.a,new Qn(t))},tr.prototype.r},tr.prototype.q},Yn.prototype.createWebChannel=Yn.prototype.a,$n.prototype.send=$n.prototype.h,$n.prototype.open=$n.prototype.g,$n.prototype.close=$n.prototype.close,ie.NO_ERROR=0,ie.TIMEOUT=8,ie.HTTP_ERROR=6,oe.COMPLETE="complete",ue.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",Tt.prototype.listen=Tt.prototype.va,yn.prototype.listenOnce=yn.prototype.wa,yn.prototype.getLastError=yn.prototype.Qa,yn.prototype.getLastErrorCode=yn.prototype.ua,yn.prototype.getStatus=yn.prototype.W,yn.prototype.getResponseJson=yn.prototype.Pa,yn.prototype.getResponseText=yn.prototype.$,yn.prototype.send=yn.prototype.ba;var er=function(){return new Yn},nr=function(){return $t()},rr=ie,ir=oe,or=Xt,ar={gb:0,jb:1,kb:2,Db:3,Ib:4,Fb:5,Gb:6,Eb:7,Cb:8,Hb:9,PROXY:10,NOPROXY:11,Ab:12,wb:13,xb:14,vb:15,yb:16,zb:17,bb:18,ab:19,cb:20},sr=ue,ur=yn}).call(this,n("yLpj"))},Vt0U:function(t,e,n){"use strict";t.exports=function(t,e){if(t-e>=0){var n=t-e;if(1===n)return"cxense-tile";if(5===n)return"cxense-second";if(n%4==1)return"ad"}else{if((e+2-t)%4==1)return"ad"}return!1}},XW3},Xhx},ZWt},dt0},eUg},fFt},gEtn:function(t,e,n){t.exports={"color-blue":"#0274B6","color-silver-gray":"#CCCCCC","color-charcoal-gray":"#222222",wrapper:"style--wrapper--l3ydNV6k",whatsnews:"style--whatsnews--1MTUegbJ",list:"style--list--33cafXcy",overflow:"style--overflow--33w9dP-6",entry:"style--entry--2-vZEkeQ",timestamp:"style--timestamp--2FCohwRG",content:"style--content--KEmzBbDK","in-depth":"style--in-depth--940rUfPl","float-right":"style--float-right--13-myTnW"}},jMzp:function(t,e,n){"use strict";n.r(e);var r,i=n("zIRd"),o=(n("q/0M"),n("qOnz"),n("QkSL"),n("HoIX")),a=n("/6Yf"),s={Firestore:o.d,GeoPoint:o.o,Timestamp:o.r,Blob:o.c,Transaction:o.e,WriteBatch:o.n,DocumentReference:o.a,DocumentSnapshot:o.g,Query:o.i,QueryDocumentSnapshot:o.f,QuerySnapshot:o.l,CollectionReference:o.j,FieldPath:o.m,FieldValue:o.q,setLogLevel:o.b,CACHE_SIZE_UNLIMITED:o.k}})(r=i.a),r.registerVersion("@firebase/firestore","2.1.1")},ktb},ls8},mrSG:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return f}));
/*! *****************************************************************************
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
***************************************************************************** */
var }var function u(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined."function f(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}},mwI},nbv},"q/0M},qOnz:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return G})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return Z})),n.d(e,"k",(function(){return V})),n.d(e,"l",(function(){return H})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return J})),n.d(e,"p",(function(){return y})),n.d(e,"q",(function(){return M})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return w})),n.d(e,"t",(function(){return E})),n.d(e,"u",(function(){return F})),n.d(e,"v",(function(){return _})),n.d(e,"w",(function(){return S})),n.d(e,"x",(function(){return m})),n.d(e,"y",(function(){return g})),n.d(e,"z",(function(){return O})),n.d(e,"A",(function(){return I})),n.d(e,"B",(function(){return T})),n.d(e,"C",(function(){return R})),n.d(e,"D",(function(){return P})),n.d(e,"E",(function(){return q})),n.d(e,"F",(function(){return B})),n.d(e,"G",(function(){return U})),n.d(e,"H",(function(){return Q})),n.d(e,"I",(function(){return $})),n.d(e,"J",(function(){return D})),n.d(e,"K",(function(){return W})),n.d(e,"L",(function(){return X})),n.d(e,"M",(function(){return Y})),n.d(e,"N",(function(){return N}));var r=n("mrSG"),i=!1,o=!1,a="${JSCORE_VERSION}",},},},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSA},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArra},encodeStrin},decodeStrin},decodeStringToByteArra},init}},},};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 *
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var }();
/**
 * @license
 * Copyright 2017 Google LLC
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
 tion E(){return y().indexOf("Electron/")>=
 * @license
 * Copyright 2017 Google LLC
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
 */var }(Error),}(}var C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function P(t){return JSON.parse(t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var },},};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
function V(t,e){return Object.prototype.hasOwnProperty.call(t,e}function F(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!}
/**
 * @license
 * Copyright 2017 Google LLC
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
 }
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var }(}var }();function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var /**
 * @license
 * Copyright 2017 Google LLC
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
 */var },}
/**
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
 */}).call(this,n("yLpj"))},sVP},tc67:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),s=new N(r||[]);return i(a,"_invoke",{value:_(t,n,s)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var m={};h(m,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==e&&n.call(b,s)&&(m=b);var w=y.prototype=d.prototype=Object.create(m);function I(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;i(this,"_invoke",{value:function(i,a){function s(){return new e((function(o,s){!function i(o,a,s,u){var c=l(t[o],t,a);if("throw"!==c.type){var h=c.arg,f=h.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,u)}),(function(t){i("throw",t,s,u)})):e.resolve(f).then((function(t){h.value=t,s(h)}),(function(t){return i("throw",t,s,u)}))}u(c.arg)}(i,a,o,s)}))}return o=o?o.then(s,s):s()}})}function _(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return k()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function T(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=l(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},I(E.prototype),h(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(w),h(w,c,"Generator"),h(w,s,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function h(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}var l=n("z8gk").default,p=n("mwIZ");n("jMzp"),n("Adnd"),n("ktbM");var d=n("4RFg").userInfo,v=n("Vt0U"),y=function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"initializeFirestore",function(){var t=u(a().mark((function t(e,n,r){var i,s,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=r.highlightsOnly,s=r.limit,c=void 0===s?25:s,l.apps.length<1&&(l.initializeApp(e),l.auth().setPersistence(l.auth.Auth.Persistence.LOCAL),l.analytics(),l.auth().signInAnonymously().then(function(){var t=u(a().mark((function t(r){var s,u,h,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=r.user,window._fb_user={uid:s.uid},o.disablePaywall){t.next=20;break}return t.prev=3,t.next=6,d.checkUserStatus({fbUid:s.uid,refetch:!0});case 6:return u=t.sent,h=u.hash,t.next=10,s.getIdToken(!0);case 10:if(h){t.next=12;break}throw new Error("No hash was returned");case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(3),o.permissionDenied=!0,console.error(t.t0),o.subscriptionCallbacks.forEach})),t.abrupt("return");case 20:o.instance=l.firestore(),o.stacksQuery=o.instance.doc("".concat(e.app,"/").concat(e.appEnv,"/stacks/").concat(n)),o.cardsQuery=o.instance.collection("".concat(e.app,"/").concat(e.appEnv,"/stacks/").concat(n,"/cards")).where("status","==","published"),f=o.defaultOrderByQueries,o.stacksQuery.get().then((function(t){o.stackData=t.data();var e=(o.stackData||{}).config;e&&((f=p(e,"cardsQuery.orderBy",[])).length||(f=o.defaultOrderByQueries))})).catch})).finally((function(){f.forEach((function(t){var e=t.field,n=t.direction;o.cardsQuery=o.cardsQuery.orderBy(e,n)})),o.cardsQuery=o.cardsQuery.limit(c),i?o.subscribeHighlights():(o.subscribeCards(),o.subscribeStackData())}));case 25:case"end":return t.stop()}}),t,null,[[3,14]])})));retur}}()).catch((function(t){console.error("Live Coverage Initialization:",t.message)})));case 2:case"end":return t.stop()}}),t)})));retur}}()),h(this,"getSortedCards",(function(){var t=o.stackData.config,e=(void 0===t?{}:t).cardsQuery,n=(void 0===e?{}:e).orderBy,r=void 0===n?[]:n;return r.length||(r=o.defaultOrderByQueries),Object.values(o.cards).sort((function(t,e){for(var n=0;n<r.length;n++){var i=r[n].field;if(t[i]&&e[i]&&t[i]!==e[i]){var o=r[n].direction,a=t[i]<e[i]?1:-1;return"desc"===o?a:-a}}return 0}))})),h(this,"handleNewCards",(function(t){if(t.forEach((function(t){var e=t.data(),n=e.id;o.cards[n]=e})),!o.firstViewedCard){var e=i(o.getSortedCards(),1)[0];o.firstViewedCard=e}})),h(this,"getSortedCardsWithAds",(function(){var t=o.stackData.config,e=(void 0===t?{}:t).displayTimeField,n=void 0===e?"createdAt":e,r=o.getSortedCards(),i=o.disableAds?r:function(t,e){var n=t.findIndex})),r=[];return t.forEach((function(t,e){r.push(t);var i=v(e,n);i&&r.push({ad:!0,type:i,id:"after-".concat(t.id)})})),r}(r,o.firstViewedCard),a=r[r.length-1][n];return o.lastCardDate=parseInt(a,10),i})),h(this,"handleDeletedCards",(function(t){t.forEach((function(t){var e=t.data().id,n=o.getSortedCards();if(delete o.cards[e],e===o.firstViewedCard.id){var r=i(n,2)[1];r&&(o.firstViewedCard=r)}}))})),h(this,"handleNewSnapshot",(function(t){var e=t.cards,n=t.deletedCards,r=t.stackData;r&&(o.stackData=r.data()),e&&e.length&&(o.handleNewCards(e),o.formattedCards=o.getSortedCardsWithAds()),n&&n.length&&(o.handleDeletedCards(n),o.formattedCards=o.getSortedCardsWithAds());var i=o.prepData();o.subscriptionCallbacks.forEach((function(t){return t(i)}))})),this.cards={},this.formattedCards=[],this.firstViewedCard="",this.disableAds=r.highlightsOnly,this.disablePaywall=r.disablePaywall,this.stackData={},this.subscriptionCallbacks=[],this.defaultOrderByQueries=[{field:"createdAt",direction:"desc"}],this.permissionDenied=!1,this.initializeFirestore(e,n,r)}var e,n,r;return e=t,(n=[{key:"subscribe",value:function(t){this.subscriptionCallbacks.push(t),t(this.prepData())}},{key:"prepData",value:function(){var t={};return this.formattedCards.length&&(t.cards=this.formattedCards),Object.keys(this.stackData).length&&(t.stackData=this.stackData),t}},{key:"subscribeCards",value:function(){var t=this;this.cardsQuery.onSnapshot((function(e){var n=[],r=[];e.docChanges().forEach})),t.handleNewSnapshot({cards:r,deletedCards:n})}),(function(e){t.subscriptionCallbacks.forEach((function(t){return t(null,e)}))}))}},{key:"subscribeStackData",value:function(){var t=this;this.stacksQuery.onSnapshot}),(function(e){t.subscriptionCallbacks.forEach((function(t){return t(null,e)}))}))}},{key:"subscribeHighlights",value:function(){var t=this;return this.cardsQuery.where("meta.display.highlight","==",!0).onSnapshot((function(e){var n=[];e.docChanges().forEach((function(t){n.push(t.doc)})),t.handleNewSnapshot({cards:n})}),(function(e){t.subscriptionCallbacks.forEach}))}))}},{key:"loadMoreCards",value:function(t){var e=this;this.cardsQuery&&this.cardsQuery.startAfter(this.lastCardDate).get().then((function(n){var r=!1;0==n.docs.length&&(r=!0),e.handleNewCards(n),t(null,{paginationComplete:r,cards:e.getSortedCardsWithAds()})})).catch}))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return void 0===window.lcFirestore&&(n=new y(t,e,r),window.lcFirestore=n),window.lcFirestore}},x7Ii:function(t,e,n){t.exports={"color-mercury-gray":"#EAEAEA","color-silver-gray":"#CCCCCC",label:"style--label--13MlcFOP typography--sans-serif-narrow--tQEgavy2","csuite-newsletters":"style--csuite-newsletters--2maWmRpC","logistics-newsletter":"style--logistics-newsletter--30zu6Agi","csuite-newsletter-label":"style--csuite-newsletter-label--bYxliZn0 typography--sans-serif-narrow--tQEgavy2",buyside:"style--buyside--2CI63HV0",opinion:"style--opinion--331Kkovj",popular:"style--popular--1tPwo3ys","news-letter":"style--news-letter--NgAiVTXT","button-strap":"style--button-strap--3znXKEgf","how-to-bucket":"style--how-to-bucket--2zy6fAU6",rss:"style--rss--1wA1KS67","how-to-bucket-first":"style--how-to-bucket-first--4qrPkwBY",labelDescription:"style--labelDescription--3reLxnKF","sub-strap":"style--sub-strap--27-kV-fI",strap:"style--strap--ND8Cuaip",link:"style--link--1JBnCaZi","icon-shoppingcart":"style--icon-shoppingcart--3QQPzO3g","icon-twitter":"style--icon-twitter--2Oxf03Tu","icon-instagram":"style--icon-instagram--1NrP1RrY","icon-email":"style--icon-email--1XdddUi2","icon-star":"style--icon-star--2-kkiYZo","icon-rss":"style--icon-rss--3KWQ_55C","icon-latestnews":"style--icon-latestnews--1fhxQk4P","icon-search":"style--icon-search--2JRkFfm3","icon-relative-container":"style--icon-relative-container--1Oq2H3iT","icon-position-left":"style--icon-position-left--3YDb2cNd","icon-position-right":"style--icon-position-right--Sm9pTJ3p",icon:"style--icon--1WxxxS-r",reset:"style--reset--3OrX4ujJ","size-small":"style--size-small--1mrJTuBn","size-large":"style--size-large--2TuzGTEU","size-flat":"style--size-flat--3nIsqXCj","align-left":"style--align-left--3iZ8c-pm","align-center":"style--align-center--Hru1_kCY","align-right":"style--align-right--23KkLuye","icon-link":"style--icon-link--3nS95BKp","padding-top":"style--padding-top--2IaMnkRi styles--padding-top--2WzISCk5","padding-top-large":"style--padding-top-large--3KE-fK8w styles--padding-top-large--3rrHKJPO","padding-bottom":"style--padding-bottom--1wuuBfkb styles--padding-bottom--DQ6elYpe","padding-bottom-large":"style--padding-bottom-large--26vh1Nwh styles--padding-bottom-large--2vWCTk2s","margin-top":"style--margin-top--2whH1lNC styles--margin-top--JunLLtez","margin-top-large":"style--margin-top-large--3OA5f-wP styles--margin-top-large--2EMcMHz9","margin-top-xlarge":"style--margin-top-xlarge--3oXkjN1U styles--margin-top-xlarge--1miw3AqE","margin-bottom":"style--margin-bottom--32Bdxfk2 styles--margin-bottom--1qLtxtgQ","margin-bottom-large":"style--margin-bottom-large--3TopVe3Z styles--margin-bottom-large--wa4U95NA","border-display":"style--border-display--1k7q_3G1 styles--border-bottom--2gLRRJBY","border-none":"style--border-none--2JInL-ey","border-top":"style--border-top--CjTxXiza","border-top-black":"style--border-top-black--1gdj_PtD","border-top-thick":"style--border-top-thick--tqGkEhNE","border-bottom":"style--border-bottom--1SgTjdMm","padding-top-12":"style--padding-top-12--3XU8PlhY","padding-top-16":"style--padding-top-16--3Gw2ivfw","padding-bottom-12":"style--padding-bottom-12--393Wqqzy","padding-bottom-16":"style--padding-bottom-16--3xTaZq4N",nested:"style--nested--3s9BNhaO","no-border":"style--no-border--1_sXga6M","no-bold":"style--no-bold--2u0_OASh","subheader-caption":"style--subheader-caption--3PGjRzxA","in-depth":"style--in-depth--1IVDNnhA","subheader-link":"style--subheader-link--eThgKniF","chro-newsletter":"style--chro-newsletter--2sPS6y5-","chro-recent-newsletter":"style--chro-recent-newsletter--1lPMHNJH","error-page":"style--error-page--2226rJbI",iconLabel:"style--iconLabel--2OxJqv6M","opinion-section":"style--opinion-section--DwBH39w0","latest-headlines":"style--latest-headlines--5ATjsZ72"}},z8g},zIRd:function(t,e,n){"use strict";var r,i,o=n("mrSG"),a=n("qOnz"),s=n("/6Yf"),u=n("q/0M"),c=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r["invalid-log-argument"]="First argument to `onLog` must be null or a function.",r),h=new a.b("app","Firebase",c),f=((i={})["@firebase/app"]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),l=new u.b("@firebase/app"),p=function(){function t(t,e,n){var r,i,u=this;this.firebase_=n,this.isDeleted_=!1,this.name_=e.name,this.automaticDataCollectionEnabled_=e.automaticDataCollectionEnabled||!1,this.options_=Object(a.m)(t),this.container=new s.b(e.name),this._addComponent(new s.a("app",(function(){return u}),"PUBLIC"));try{for(var c=Object(o.h)(this.firebase_.INTERNAL.components.values()),h=c.next();!h.done;h=c.next()){var f=h.value;this._addComponent(f)}}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},se},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{ge},enumerable:!1,configurable:!0}),t.prototype.delet},t.prototype._getServic},t.prototype._removeServiceInstanc},t.prototype._addComponen},t.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},t.prototype.checkDestroyed},t}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var d=
/**
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
 */
function t(){var e=
/**
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
 */
function(t){var e={},n=new Map,r={__esModule:!0,initializeAp},app:i,registerVersio},setLogLevel:u.c,onLo},apps:null,SDK_VERSION:"8.0.1",INTERNAL:{registerComponent:c,removeAp},components:n,useAsServic}}}function c(s){var u,c,f=s.name;if(n.has(f))return l.debug("There were multiple attempts to register component "+f+"."),"PUBLIC"===s.type?r[f]:null;if(n.set(f,s),"PUBLIC"===s.type){var };void 0!==s.serviceProps&&Object(a.n)(p,s.serviceProps),r[f]=p,t.prototype[f}}try{for(var d=Object(o.h)(Object.keys(e)),v=d.next();!v.done;v=d.next()){var y=v.value;e[y]._addComponent(s)}}catch(t){u={error:t}}finally{try{v&&!v.done&&(c=d.return)&&c.call(d)}finally{if(u)throw u.error}}return"PUBLIC"===s.type?r[f]:null}return r.default=r,Object.defineProperty(r,"apps",{ge}}),i.App=t,r}(p);return e.INTERNAL=Object(o.a)(Object(o.a)({},e.INTERNAL),{createFirebaseNamespace:t,extendNamespac},createSubscribe:a.l,ErrorFactory:a.b,deepExtend:a.n}),e}(),}();
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
if(Object(a.r)()&&void 0!==self.firebase){l.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var y=self.firebase.SDK_VERSION;y&&y.indexOf("LITE")>=0&&l.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var m=d.initializeApp;d.initializeAp};var g=d}(g),e.a=g},zoY}}]);