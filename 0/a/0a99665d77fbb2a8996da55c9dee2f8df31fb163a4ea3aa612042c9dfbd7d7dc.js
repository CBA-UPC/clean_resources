!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&def/app"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).]=n.value)};var u=function(t){t=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,t];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}return globalThis}(this);function c(t){var e,n,i="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return i?i.call(t):{next:(e=t,n=0,function(){return n<e.length?{done:!1,value:e[n++]}:{done:!0}})}}!function(t,e){if(e){var n=u;t=t.split(".");for(var i=0;i<t.length-1;i++){var r=t[i];r in n||(n[r]={}),n=n[r]}(e=e(i=n[t=t[t.length-1]]))!=i&&null!=e&&o(n,t,{configurable:!0,writable:!0,value:e})}}("Promise",function(t){function a(t){this.b=0,this.c=void 0,this.a=[];var e=this.f();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function e(){this.a=null}function s(e){return e instanceof a?e:new a(function(t){t(e)})}if(t)return t;e.prototype.b=function(t){var e;null==this.a&&(this.a=[],(e=this).c(function(){e.g()})),this.a.push(t)};var n=u.setTimeout;e.prototype.c=function(t){n(t,0)},e.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a;this.a=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.f(t)}}}this.a=null},e.prototype.f=function(t){this.c(function(){throw t})},a.prototype.f=function(){function t(e){return function(t){i||(i=!0,e.call(n,t))}}var n=this,i=!1;return{resolve:t(this.m),reject:t(this.g)}},a.prototype.m=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof a)this.s(t);else{t:switch(typeof t){case"object":var e=null!=t;break t;case"function":e=!0;break t;default:e=!1}e?this.v(t):this.h(t)}},a.prototype.v=function(t){var e=void 0;try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.u(e,t):this.h(t)},a.prototype.g=function(t){this.i(2,t)},a.prototype.h=function(t){this.i(1,t)},a.prototype.i=function(t,e){if(0!=this.b)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.b);this.b=t,this.c=e,this.l()},a.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)r.b(this.a[t]);this.a=null}};var r=new e;return a.prototype.s=function(t){var e=this.f();t.Ra(e.resolve,e.reject)},a.prototype.u=function(t,e){var n=this.f();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},a.prototype.then=function(t,e){function n(e,t){return"function"==typeof e?function(t){try{i(e(t))}catch(t){r(t)}}:t}var i,r,o=new a(function(t,e){i=t,r=e});return this.Ra(n(t,i),n(e,r)),o},a.prototype.catch=function(t){return this.then(void 0,t)},a.prototype.Ra=function(t,e){function n(){switch(i.b){case 1:t(i.c);break;case 2:e(i.c);break;default:throw Error("Unexpected state: "+i.b)}}var i=this;null==this.a?r.b(n):this.a.push(n)},a.resolve=s,a.reject=function(n){return new a(function(t,e){e(n)})},a.race=function(r){return new a(function(t,e){for(var n=c(r),i=n.next();!i.done;i=n.next())s(i.value).Ra(t,e)})},a.all=function(t){var e=c(t),o=e.next();return o.done?s([]):new a(function(n,t){for(var i=[],r=0;i.push(void 0),r++,s(o.value).Ra(function(e){return function(t){i[e]=t,0==--r&&n(i)}}(i.length-1),t),!(o=e.next()).done;);})},a});var h=h||{},l=this||self,e=/^[\w+/_-]+[=]{0,2}$/,s=null;function f(t){return(t=t.querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&e.test(t)?t:""}function a(){}function d(t){var e=typeof t;return"object"!=e?e:t?Array.isArray(t)?"array":e:"null"}function p(t){var e=d(t);return"array"==e||"object"==e&&"number"==typeof t.length}function v(t){return"function"==d(t)}function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var n="closure_uid_"+(1e9*Math.random()>>>0),i=0;function r(t,e,n){return t.call.apply(t.bind,arguments)}function g(e,n,t){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,i),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:g).apply(null,arguments)}function y(e){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(t,e){function n(){}n.prototype=e.prototype,t.bb=e.prototype,t.prototype=new n,t.prototype.constructor=t}function I(t){return t}function T(t,e,n){this.code=k+t,this.message=e||S[t]||"",this.a=n||null}function E(t){var e=t&&t.code;return e?new T(e.substring(k.length),t.message,t.serverResponse):null}w(T,Error),T.prototype.w=function(){var t={code:this.code,message:this.message};return this.a&&(t.serverResponse=this.a),t},T.prototype.toJSON=function(){return this.w()};var A,k="auth/",S={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."},N={ld:{Ua:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ua:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://securetoken.googleapis.com/v1/token",Xa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ua:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ua:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",$a:"https://test-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};function _(t){for(var e in N)if(N[e].id===t)return t=N[e],{firebaseEndpoint:t.Ua,secureTokenEndpoint:t.$a,identityPlatformEndpoint:t.Xa};return null}function O(t){if(t)try{return t.$goog_Thenable}catch(t){return}}function C(t){var e;Error.captureStackTrace?Error.captureStackTrace(this,C):(e=Error().stack)&&(this.stack=e),t&&(this.message=String(t))}function R(t,e){for(var n="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)n+=t[r]+(r<e.length?e[r]:"%s");C.call(this,n+t[i])}function D(t){throw new R("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function P(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function L(t,e){t.f(e),t.b<100&&(t.b++,e.next=t.a,t.a=e)}function x(){this.b=this.a=null}A=_("__EID__")?"__EID__":void 0,w(C,Error),C.prototype.name="CustomError",w(R,C),R.prototype.name="AssertionError",P.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t};var M=new P(function(){return new j},function(t){t.reset()});function j(){this.next=this.b=this.a=null}x.prototype.add=function(t,e){var n=M.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},j.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},j.prototype.reset=function(){this.next=this.b=this.a=null};var U=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},V=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r="string"==typeof t?t.split(""):t,o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)};var F=Array.prototype.filter?function(t,e){return Array.prototype.filter.call(t,e,void 0)}:function(t,e){for(var n,i=t.length,r=[],o=0,a="string"==typeof t?t.split(""):t,s=0;s<i;s++)s in a&&(n=a[s],e.call(void 0,n,s,t)&&(r[o++]=n));return r},q=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=Array(n),r="string"==typeof t?t.split(""):t,o=0;o<n;o++)o in r&&(i[o]=e.call(void 0,r[o],o,t));return i},H=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,i="string"==typeof t?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t))return!0;return!1};function K(t,e){return 0<=U(t,e)}function G(t,e){var n;return(n=0<=(e=U(t,e)))&&Array.prototype.splice.call(t,e,1),n}function B(n,i){!function(t,e){for(var n="string"==typeof t?t.split(""):t,i=t.length-1;0<=i;--i)i in n&&e.call(void 0,n[i],i,t)}(n,function(t,e){i.call(void 0,t,e,n)&&1==Array.prototype.splice.call(n,e,1).length&&0})}function W(){return Array.prototype.concat.apply([],arguments)}function X(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}var J,Y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},z=/&/g,$=/</g,Z=/>/g,Q=/"/g,tt=/'/g,et=/\x00/g,nt=/[\x00&<>"']/;function it(t,e){return-1!=t.indexOf(e)}function rt(t,e){return t<e?-1:e<t?1:0}t:{var ot=l.navigator;if(ot){ot=ot.userAgent;if(ot){J=ot;break t}}J=""}function at(t){return it(J,t)}function st(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function ut(t){for(var e in t)return;return 1}function ct(t){var e,n={};for(e in t)n[e]=t[e];return n}var ht="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t){for(var e,n,i=1;i<arguments.length;i++){for(e in n=arguments[i])t[e]=n[e];for(var r=0;r<ht.length;r++)e=ht[r],Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}}function ft(t,e){t:{try{var n,i=t&&t.ownerDocument;if((n=(n=i&&(i.defaultView||i.parentWindow))||l).Element&&n.Location){var r=n;break t}}catch(t){}r=null}if(r&&void 0!==r[e]&&(!t||!(t instanceof r[e])&&(t instanceof r.Location||t instanceof r.Element))){if(m(t))try{var o=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){o="<object could not be stringified>"}else o=void 0===t?"undefined":null===t?"null":typeof t;D("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,o)}}function dt(t,e){this.a=t===gt&&e||"",this.b=mt}function pt(t){return t instanceof dt&&t.constructor===dt&&t.b===mt?t.a:(D("expected object of type Const, got '"+t+"'"),"type_error:Const")}dt.prototype.ta=!0,dt.prototype.sa=function(){return this.a},dt.prototype.toString=function(){return"Const{"+this.a+"}"};var vt,mt={},gt={};function bt(){if(void 0===vt){var t=null,e=l.trustedTypes;if(e&&e.createPolicy){try{t=e.createPolicy("goog#html",{createHTML:I,createScript:I,createScriptURL:I})}catch(t){l.console&&l.console.error(t.message)}vt=t}else vt=t}return vt}function yt(t,e){this.a=e===At?t:""}function wt(t){return t instanceof yt&&t.constructor===yt?t.a:(D("expected object of type TrustedResourceUrl, got '"+t+"' of type "+d(t)),"type_error:TrustedResourceUrl")}function It(t,n){var e,i=pt(t);if(!Et.test(i))throw Error("Invalid TrustedResourceUrl format: "+i);return t=i.replace(Tt,function(t,e){if(!Object.prototype.hasOwnProperty.call(n,e))throw Error('Found marker, "'+e+'", in format string, "'+i+'", but no valid label mapping found in args: '+JSON.stringify(n));return(t=n[e])instanceof dt?pt(t):encodeURIComponent(String(t))}),e=t,t=bt(),new yt(e=t?t.createScriptURL(e):e,At)}yt.prototype.ta=!0,yt.prototype.sa=function(){return this.a.toString()},yt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var Tt=/%{(\w+)}/g,Et=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,At={};function kt(t,e){this.a=e===Dt?t:""}function St(t){return t instanceof kt&&t.constructor===kt?t.a:(D("expected object of type SafeUrl, got '"+t+"' of type "+d(t)),"type_error:SafeUrl")}kt.prototype.ta=!0,kt.prototype.sa=function(){return this.a.toString()},kt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Nt=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,_t=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ot=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ct(t){return t instanceof kt?t:(t="object"==typeof t&&t.ta?t.sa():String(t),t=Ot.test(t)||(e=(t=(t=String(t)).replace(/(%0A|%0D)/g,"")).match(_t))&&Nt.test(e[1])?new kt(t,Dt):null);var e}function Rt(t){return t instanceof kt?t:(t="object"==typeof t&&t.ta?t.sa():String(t),new kt(t=!Ot.test(t)?"about:invalid#zClosurez":t,Dt))}var Dt={},Pt=new kt("about:invalid#zClosurez",Dt);function Lt(t,e,n){this.a=n===xt?t:""}Lt.prototype.ta=!0,Lt.prototype.sa=function(){return this.a.toString()},Lt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var xt={};function Mt(t,e,n,i){return t=t instanceof kt?t:Rt(t),e=e||l,n=n instanceof dt?pt(n):n||"",e.open(St(t),n,i,void 0)}function jt(t){for(var e=t.split("%s"),n="",i=Array.prototype.slice.call(arguments,1);i.length&&1<e.length;)n+=e.shift()+i.shift();return n+e.join("%s")}function Ut(t){return nt.test(t)&&(-1!=(t=-1!=(t=-1!=(t=-1!=(t=-1!=(t=-1!=t.indexOf("&")?t.replace(z,"&amp;"):t).indexOf("<")?t.replace($,"&lt;"):t).indexOf(">")?t.replace(Z,"&gt;"):t).indexOf('"')?t.replace(Q,"&quot;"):t).indexOf("'")?t.replace(tt,"&#39;"):t).indexOf("\0")&&(t=t.replace(et,"&#0;"))),t}function Vt(t){return Vt[" "](t),t}Vt[" "]=a;var Ft,qt=at("Opera"),Ht=at("Trident")||at("MSIE"),Kt=at("Edge"),Gt=Kt||Ht,Bt=at("Gecko")&&!(it(J.toLowerCase(),"webkit")&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Wt=it(J.toLowerCase(),"webkit")&&!at("Edge");function Xt(){var t=l.document;return t?t.documentMode:void 0}t:{var Jt="",Yt=(Yt=J,Bt?/rv:([^\);]+)(\)|;)/.exec(Yt):Kt?/Edge\/([\d\.]+)/.exec(Yt):Ht?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yt):Wt?/WebKit\/(\S+)/.exec(Yt):qt?/(?:Version)[ \/]?(\S+)/.exec(Yt):void 0);if(Yt&&(Jt=Yt?Yt[1]:""),Ht){Yt=Xt();if(null!=Yt&&Yt>parseFloat(Jt)){Ft=String(Yt);break t}}Ft=Jt}var zt={};function $t(s){return t=s,e=function(){for(var t=0,e=Y(String(Ft)).split("."),n=Y(String(s)).split("."),i=Math.max(e.length,n.length),r=0;0==t&&r<i;r++)for(var o=e[r]||"",a=n[r]||"";o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],(0!=o[0].length||0!=a[0].length)&&(t=rt(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||rt(0==o[2].length,0==a[2].length)||rt(o[2],a[2]),o=o[3],a=a[3],0==t););return 0<=t},n=zt,Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t);var t,e,n}var Zt=l.document&&Ht&&(Xt()||parseInt(Ft,10))||void 0;try{new self.OffscreenCanvas(0,0).getContext("2d")}catch(t){}var Qt=!Ht||9<=Number(Zt);function te(t){var e=document;return"string"==typeof t?e.getElementById(t):t}function ee(n,t){st(t,function(t,e){t&&"object"==typeof t&&t.ta&&(t=t.sa()),"style"==e?n.style.cssText=t:"class"==e?n.className=t:"for"==e?n.htmlFor=t:re.hasOwnProperty(e)?n.setAttribute(re[e],t):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?n.setAttribute(e,t):n[e]=t})}var ne,ie,re={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function oe(){var t,e=arguments,n=document,i=String(e[0]),r=e[1];return!Qt&&r&&(r.name||r.type)&&(i=["<",i],r.name&&i.push(' name="',Ut(r.name),'"'),r.type&&(i.push(' type="',Ut(r.type),'"'),lt(t={},r),delete t.type,r=t),i.push(">"),i=i.join("")),i=ae(n,i),r&&("string"==typeof r?i.className=r:Array.isArray(r)?i.className=r.join(" "):ee(i,r)),2<e.length&&function(e,n,t){function i(t){t&&n.appendChild("string"==typeof t?e.createTextNode(t):t)}for(var r=2;r<t.length;r++){var o=t[r];if(!p(o)||m(o)&&0<o.nodeType)i(o);else{t:{if(o&&"number"==typeof o.length){if(m(o)){var a="function"==typeof o.item||"string"==typeof o.item;break t}if(v(o)){a="function"==typeof o.item;break t}}a=!1}V(a?X(o):o,i)}}}(n,i,e),i}function ae(t,e){return e=String(e),"application/xhtml+xml"===t.contentType&&(e=e.toLowerCase()),t.createElement(e)}function se(t){l.setTimeout(function(){throw t},0)}function ue(t,e){ie||function(){{var t;ie=l.Promise&&l.Promise.resolve?(t=l.Promise.resolve(void 0),function(){t.then(le)}):function(){var t=le;!v(l.setImmediate)||l.Window&&l.Window.prototype&&!at("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(ne=ne||function(){var t=l.MessageChannel;if(void 0===(t=void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!at("Presto")?function(){var t=ae(document,"IFRAME");t.style.display="none",document.documentElement.appendChild(t);var e=t.contentWindow;(t=e.document).open(),t.close();var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host;t=b(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}:t)||at("Trident")||at("MSIE"))return function(t){l.setTimeout(t,0)};var e=new t,n={},i=n;return e.port1.onmessage=function(){var t;void 0!==n.next&&(t=(n=n.next).Hb,n.Hb=null,t())},function(t){i.next={Hb:t},i=i.next,e.port2.postMessage(0)}}())(t):l.setImmediate(t)}}}(),ce||(ie(),ce=!0),he.add(t,e)}var ce=!1,he=new x;function le(){for(var t,e;e=t=void 0,e=null,(t=he).a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e=e;){try{e.a.call(e.b)}catch(t){se(t)}L(M,e)}ce=!1}function fe(t,e){if(this.a=de,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=a)try{var n=this;t.call(e,function(t){ke(n,pe,t)},function(t){if(!(t instanceof De))try{if(t instanceof Error)throw t;throw Error("Promise rejected.")}catch(t){}ke(n,ve,t)})}catch(t){ke(this,ve,t)}}var de=0,pe=2,ve=3;function me(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}me.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1};var ge=new P(function(){return new me},function(t){t.reset()});function be(t,e,n){var i=ge.get();return i.g=t,i.b=e,i.f=n,i}function ye(t){if(t instanceof fe)return t;var e=new fe(a);return ke(e,pe,t),e}function we(n){return new fe(function(t,e){e(n)})}function Ie(t,e,n){Se(t,e,n,null)||ue(y(e,t))}function Te(n){return new fe(function(i){var r=n.length,o=[];if(r)for(var t=function(t,e,n){r--,o[t]=e?{Qb:!0,value:n}:{Qb:!1,reason:n},0==r&&i(o)},e=0;e<n.length;e++)Ie(n[e],y(t,e,!0),y(t,e,!1));else i(o)})}function Ee(t,e){t.b||t.a!=pe&&t.a!=ve||Ne(t),t.f?t.f.next=e:t.b=e,t.f=e}function Ae(t,r,o,a){var e=be(null,null,null);return e.a=new fe(function(n,i){e.g=r?function(t){try{var e=r.call(a,t);n(e)}catch(t){i(t)}}:n,e.b=o?function(t){try{var e=o.call(a,t);void 0===e&&t instanceof De?i(t):n(e)}catch(t){i(t)}}:i}),Ee(e.a.c=t,e),e.a}function ke(t,e,n){var i,r;t.a==de&&(t===n&&(e=ve,n=new TypeError("Promise cannot resolve to itself")),t.a=1,Se(n,t.$c,t.ad,t)||(t.i=n,t.a=e,t.c=null,Ne(t),e!=ve||n instanceof De||(r=n,(i=t).g=!0,ue(function(){i.g&&Re.call(null,r)}))))}function Se(t,e,n,i){if(t instanceof fe)return Ee(t,be(e||a,n||null,i)),1;if(O(t))return t.then(e,n,i),1;if(m(t))try{var r=t.then;if(v(r))return function(t,e,n,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1;try{e.call(t,function(t){a||(a=!0,n.call(r,t))},o)}catch(t){o(t)}}(t,r,e,n,i),1}catch(t){return n.call(i,t),1}}function Ne(t){t.h||(t.h=!0,ue(t.gc,t))}function _e(t){var e=null;return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function Oe(t,e,n,i){if(n==ve&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1;if(e.a)e.a.c=null,Ce(e,n,i);else try{e.c?e.g.call(e.f):Ce(e,n,i)}catch(t){Re.call(null,t)}L(ge,e)}function Ce(t,e,n){e==pe?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}fe.prototype.then=function(t,e,n){return Ae(this,v(t)?t:null,v(e)?e:null,n)},fe.prototype.$goog_Thenable=!0,(t=fe.prototype).oa=function(t,e){return(t=be(t,t,e)).c=!0,Ee(this,t),this},t.o=function(t,e){return Ae(this,null,t,e)},t.cancel=function(t){var e;this.a==de&&(e=new De(t),ue(function(){!function t(e,n){if(e.a==de)if(e.c){var i=e.c;if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,!((o=s.a==e?s:o)&&1<r)));s=s.next)o||(a=s);o&&(i.a==de&&1==r?t(i,n):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):_e(i),Oe(i,o,ve,n)))}e.c=null}else ke(e,ve,n)}(this,e)},this))},t.$c=function(t){this.a=de,ke(this,pe,t)},t.ad=function(t){this.a=de,ke(this,ve,t)},t.gc=function(){for(var t;t=_e(this);)Oe(this,t,this.a,this.i);this.h=!1};var Re=se;function De(t){C.call(this,t)}function Pe(){this.ya=this.ya,this.pa=this.pa}w(De,C);var Le=0,xe={};function Me(t){t.ya||(t.ya=!0,t.Da(),0==Le)||(t=t,t=Object.prototype.hasOwnProperty.call(t,n)&&t[n]||(t[n]=++i),delete xe[t])}Pe.prototype.ya=!(De.prototype.name="cancel"),Pe.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()()};var je=Object.freeze||function(t){return t},Ue=!Ht||9<=Number(Zt),Ve=Ht&&!$t("9"),Fe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",a,e),l.removeEventListener("test",a,e)}catch(t){}return t}();function qe(t,e){this.type=t,this.b=this.target=e,this.defaultPrevented=!1}function He(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Bt){t:{try{Vt(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ke[t.pointerType]||"",(this.a=t).defaultPrevented&&this.preventDefault()}}qe.prototype.preventDefault=function(){this.defaultPrevented=!0},w(He,qe);var Ke=je({2:"touch",3:"pen",4:"mouse"});He.prototype.preventDefault=function(){He.bb.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Ve)try{(t.ctrlKey||112<=t.keyCode&&t.keyCode<=123)&&(t.keyCode=-1)}catch(t){}},He.prototype.g=function(){return this.a};var Ge="closure_listenable_"+(1e6*Math.random()|0),Be=0;function We(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.Wa=r,this.key=++Be,this.wa=this.Qa=!1}function Xe(t){t.wa=!0,t.listener=null,t.proxy=null,t.src=null,t.Wa=null}function Je(t){this.src=t,this.a={},this.b=0}function Ye(t,e){var n=e.type;n in t.a&&G(t.a[n],e)&&(Xe(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function ze(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.wa&&o.listener==e&&o.capture==!!n&&o.Wa==i)return r}return-1}Je.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var a=ze(t,e,i,r);return-1<a?(e=t[a],n||(e.Qa=!1)):((e=new We(e,this.src,o,!!i,r)).Qa=n,t.push(e)),e};var $e="closure_lm_"+(1e6*Math.random()|0),Ze={};function Qe(t,e,n,i,r){if(i&&i.once)en(t,e,n,i,r);else if(Array.isArray(e))for(var o=0;o<e.length;o++)Qe(t,e[o],n,i,r);else n=ln(n),t&&t[Ge]?dn(t,e,n,m(i)?!!i.capture:!!i,r):tn(t,e,n,!1,i,r)}function tn(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var a,s,u=m(r)?!!r.capture:!!r,c=cn(t);if(c||(t[$e]=c=new Je(t)),!(n=c.add(e,n,i,u,o)).proxy)if(a=un,s=Ue?function(t){return a.call(s.src,s.listener,t)}:function(t){if(!(t=a.call(s.src,s.listener,t)))return t},(n.proxy=i=s).src=t,i.listener=n,t.addEventListener)void 0===(r=!Fe?u:r)&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(on(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}}function en(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)en(t,e[o],n,i,r);else n=ln(n),t&&t[Ge]?pn(t,e,n,m(i)?!!i.capture:!!i,r):tn(t,e,n,!0,i,r)}function nn(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)nn(t,e[o],n,i,r);else i=m(i)?!!i.capture:!!i,n=ln(n),t&&t[Ge]?(t=t.v,(e=String(e).toString())in t.a&&(-1<(n=ze(o=t.a[e],n,i,r))&&(Xe(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--)))):(t=t&&cn(t))&&(e=t.a[e.toString()],(n=(t=-1)<(t=e?ze(e,n,i,r):t)?e[t]:null)&&rn(n))}function rn(t){var e,n,i;"number"!=typeof t&&t&&!t.wa&&((e=t.src)&&e[Ge]?Ye(e.v,t):(n=t.type,i=t.proxy,e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(on(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=cn(e))?(Ye(n,t),0==n.b&&(n.src=null,e[$e]=null)):Xe(t)))}function on(t){return t in Ze?Ze[t]:Ze[t]="on"+t}function an(t,e,n,i){var r=!0;if((t=cn(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t];o&&o.capture==n&&!o.wa&&(o=sn(o,i),r=r&&!1!==o)}return r}function sn(t,e){var n=t.listener,i=t.Wa||t.src;return t.Qa&&rn(t),n.call(i,e)}function un(t,e){if(t.wa)return!0;if(Ue)return sn(t,new He(e,this));if(!e)t:{e=["window","event"];for(var n=l,i=0;i<e.length;i++)if(null==(n=n[e[i]])){e=null;break t}e=n}if(e=new He(i=e,this),n=!0,!(i.keyCode<0||null!=i.returnValue)){t:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break t}catch(t){r=!0}!r&&null!=i.returnValue||(i.returnValue=!0)}for(i=[],r=e.b;r;r=r.parentNode)i.push(r);for(t=t.type,r=i.length-1;0<=r;r--){e.b=i[r];var o=an(i[r],t,!0,e),n=n&&o}for(r=0;r<i.length;r++)e.b=i[r],o=an(i[r],t,!1,e),n=n&&o}return n}function cn(t){return(t=t[$e])instanceof Je?t:null}var hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ln(e){return v(e)?e:(e[hn]||(e[hn]=function(t){return e.handleEvent(t)}),e[hn])}function fn(){Pe.call(this),this.v=new Je(this),(this.bc=this).hb=null}function dn(t,e,n,i,r){t.v.add(String(e),n,!1,i,r)}function pn(t,e,n,i,r){t.v.add(String(e),n,!0,i,r)}function vn(t,e,n,i){if(!(e=t.v.a[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var a,s,u=e[o];u&&!u.wa&&u.capture==n&&(a=u.listener,s=u.Wa||u.src,u.Qa&&Ye(t.v,u),r=!1!==a.call(s,i)&&r)}return r&&!i.defaultPrevented}function mn(t,e,n){if(v(t))n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function gn(n){var i=null;return new fe(function(t,e){-1==(i=mn(function(){t(void 0)},n))&&e(Error("Failed to schedule timer."))}).o(function(t){throw l.clearTimeout(i),t})}function bn(t){if(t.X&&"function"==typeof t.X)return t.X();if("string"==typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function yn(t){if(t.Y&&"function"==typeof t.Y)return t.Y();if(!t.X||"function"!=typeof t.X){if(p(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(var i in e=[],n=0,t)e[n++]=i;return e}}function wn(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof wn)for(n=t.Y(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function In(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var i=t.a[e];Tn(t.b,i)&&(t.a[n++]=i),e++}t.a.length=n}if(t.c!=t.a.length){for(var r={},n=e=0;e<t.a.length;)Tn(r,i=t.a[e])||(r[t.a[n++]=i]=1),e++;t.a.length=n}}function Tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}w(fn,Pe),fn.prototype[Ge]=!0,fn.prototype.addEventListener=function(t,e,n,i){Qe(this,t,e,n,i)},fn.prototype.removeEventListener=function(t,e,n,i){nn(this,t,e,n,i)},fn.prototype.dispatchEvent=function(t){var e;if(n=this.hb)for(e=[];n;n=n.hb)e.push(n);var n=this.bc,i=t.type||t;if("string"==typeof t?t=new qe(t,n):t instanceof qe?t.target=t.target||n:(a=t,lt(t=new qe(i,n),a)),a=!0,e)for(var r=e.length-1;0<=r;r--)var o=t.b=e[r],a=vn(o,i,!0,t)&&a;if(a=vn(o=t.b=n,i,!0,t)&&a,a=vn(o,i,!1,t)&&a,e)for(r=0;r<e.length;r++)a=vn(o=t.b=e[r],i,!1,t)&&a;return a},fn.prototype.Da=function(){if(fn.bb.Da.call(this),this.v){var t,e=this.v;for(t in e.a){for(var n=e.a[t],i=0;i<n.length;i++)Xe(n[i]);delete e.a[t],e.b--}}this.hb=null},(t=wn.prototype).X=function(){In(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},t.Y=function(){return In(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return Tn(this.b,t)?this.b[t]:e},t.set=function(t,e){Tn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.Y(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);t.call(e,o,r,this)}};var En=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function An(t,e){var n;this.a=this.l=this.c="",this.g=null,this.h=this.f="",this.i=!1,t instanceof An?(this.i=void 0!==e?e:t.i,kn(this,t.c),this.l=t.l,this.a=t.a,Sn(this,t.g),this.f=t.f,Nn(this,Wn(t.b)),this.h=t.h):t&&(n=String(t).match(En))?(this.i=!!e,kn(this,n[1]||"",!0),this.l=Dn(n[2]||""),this.a=Dn(n[3]||"",!0),Sn(this,n[4]),this.f=Dn(n[5]||"",!0),Nn(this,n[6]||"",!0),this.h=Dn(n[7]||"")):(this.i=!!e,this.b=new Fn(null,this.i))}function kn(t,e,n){t.c=n?Dn(e,!0):e,t.c&&(t.c=t.c.replace(/:$/,""))}function Sn(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.g=e}else t.g=null}function Nn(t,e,n){var i,r;e instanceof Fn?(t.b=e,i=t.b,(r=t.i)&&!i.f&&(qn(i),i.c=null,i.a.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(Kn(this,e),Bn(this,n,t))},i)),i.f=r):(n||(e=Pn(e,Un)),t.b=new Fn(e,t.i))}function _n(t,e,n){t.b.set(e,n)}function On(t,e){return t.b.get(e)}function Cn(t){return t instanceof An?new An(t):new An(t,void 0)}function Rn(t,e,n,i){var r=new An(null,void 0);return t&&kn(r,t),e&&(r.a=e),n&&Sn(r,n),i&&(r.f=i),r}function Dn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ln),t=n?t.replace(/%25([0-9a-fA-F]{2})/g,"%$1"):t):null}function Ln(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}An.prototype.toString=function(){var t=[],e=this.c;e&&t.push(Pn(e,xn,!0),":");var n=this.a;return!n&&"file"!=e||(t.push("//"),(e=this.l)&&t.push(Pn(e,xn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.g)&&t.push(":",String(n))),(n=this.f)&&(this.a&&"/"!=n.charAt(0)&&t.push("/"),t.push(Pn(n,"/"==n.charAt(0)?jn:Mn,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.h)&&t.push("#",Pn(n,Vn)),t.join("")},An.prototype.resolve=function(t){var e=new An(this),n=!!t.c;n?kn(e,t.c):n=!!t.l,n?e.l=t.l:n=!!t.a,n?e.a=t.a:n=null!=t.g;var i=t.f;if(n)Sn(e,t.g);else if(n=!!t.f)if("/"!=i.charAt(0)&&(this.a&&!this.f?i="/"+i:-1!=(r=e.f.lastIndexOf("/"))&&(i=e.f.substr(0,r+1)+i)),".."==(r=i)||"."==r)i="";else if(it(r,"./")||it(r,"/.")){for(var i=0==r.lastIndexOf("/",0),r=r.split("/"),o=[],a=0;a<r.length;){var s=r[a++];"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r;return n?e.f=i:n=""!==t.b.toString(),n?Nn(e,Wn(t.b)):n=!!t.h,n&&(e.h=t.h),e};var xn=/[#\/\?@]/g,Mn=/[#\?:]/g,jn=/[#\?]/g,Un=/[#\?@]/g,Vn=/#/g;function Fn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function qn(n){n.a||(n.a=new wn,n.b=0,n.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i,r=t[n].indexOf("="),o=null;0<=r?(i=t[n].substring(0,r),o=t[n].substring(r+1)):i=t[n],e(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}(n.c,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}function Hn(t){var e=yn(t);if(void 0===e)throw Error("Keys are undefined");var n=new Fn(null,void 0);t=bn(t);for(var i=0;i<e.length;i++){var r=e[i],o=t[i];Array.isArray(o)?Bn(n,r,o):n.add(r,o)}return n}function Kn(t,e){qn(t),e=Xn(t,e),Tn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Tn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&In(t)))}function Gn(t,e){return qn(t),e=Xn(t,e),Tn(t.a.b,e)}function Bn(t,e,n){Kn(t,e),0<n.length&&(t.c=null,t.a.set(Xn(t,e),X(n)),t.b+=n.length)}function Wn(t){var e=new Fn;return e.c=t.c,t.a&&(e.a=new wn(t.a),e.b=t.b),e}function Xn(t,e){return e=String(e),e=t.f?e.toLowerCase():e}function Jn(t){var e=[];return function t(e,n,i){if(null==n)i.push("null");else{if("object"==typeof n){if(Array.isArray(n)){var r=n;n=r.length,i.push("[");for(var o="",a=0;a<n;a++)i.push(o),t(e,r[a],i),o=",";return void i.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(r in i.push("{"),o="",n)Object.prototype.hasOwnProperty.call(n,r)&&(a=n[r],"function"!=typeof a&&(i.push(o),Zn(r,i),i.push(":"),t(e,a,i),o=","));return void i.push("}")}n=n.valueOf()}switch(typeof n){case"string":Zn(n,i);break;case"number":i.push(isFinite(n)&&!isNaN(n)?String(n):"null");break;case"boolean":i.push(String(n));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof n)}}}(new Yn,t,e),e.join("")}function Yn(){}(t=Fn.prototype).add=function(t,e){qn(this),this.c=null,t=Xn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(n,i){qn(this),this.a.forEach(function(t,e){V(t,function(t){n.call(i,t,e,this)},this)},this)},t.Y=function(){qn(this);for(var t=this.a.X(),e=this.a.Y(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i]);return n},t.X=function(t){qn(this);var e=[];if("string"==typeof t)Gn(this,t)&&(e=W(e,this.a.get(Xn(this,t))));else{t=this.a.X();for(var n=0;n<t.length;n++)e=W(e,t[n])}return e},t.set=function(t,e){return qn(this),this.c=null,Gn(this,t=Xn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.X(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.Y(),n=0;n<e.length;n++)for(var i=e[n],r=encodeURIComponent(String(i)),i=this.X(i),o=0;o<i.length;o++){var a=r;""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}return this.c=t.join("&")};var zn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},$n=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Zn(t,e){e.push('"',t.replace($n,function(t){var e=zn[t];return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),zn[t]=e),e}),'"')}function Qn(){var t=bi();return Ht&&Zt&&11==Zt||/Edge\/\d+/.test(t)}function ti(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function ei(t,e){e=e||l.window;var n="about:blank";t&&(n=St(Ct(t)||Pt)),e.location.href=n}function ni(t){return!!((t=(t||bi()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function ii(t){t=t||l.window;try{t.close()}catch(t){}}function ri(t,e,n){var i=Math.floor(1e9*Math.random()).toString();e=e||500,n=n||600;var r=(window.screen.availHeight-n)/2,o=(window.screen.availWidth-e)/2;for(a in e={width:e,height:n,top:0<r?r:0,left:0<o?o:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=bi().toLowerCase(),i&&(e.target=i,it(n,"crios/")&&(e.target="_blank")),vi(bi())==di&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),i=window,e=n instanceof kt?n:Ct(void 0!==n.href?n.href:String(n))||Pt,n=t.target||n.target,r=[],t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");if((at("iPhone")&&!at("iPod")&&!at("iPad")||at("iPad")||at("iPod"))&&i.navigator&&i.navigator.standalone&&n&&"_self"!=n?(ft(a=ae(document,"A"),"HTMLAnchorElement"),e=e instanceof kt?e:Rt(e),a.href=St(e),a.setAttribute("target",n),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),a={}):t.noreferrer?(a=Mt("",i,n,a),t=St(e),a&&(Gt&&it(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),a.opener=null,t='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ut(t)+'">',t=new Lt(t=(i=bt())?i.createHTML(t):t,0,xt),i=a.document)&&(i.write((o=t)instanceof Lt&&o.constructor===Lt?o.a:(D("expected object of type SafeHtml, got '"+o+"' of type "+d(o)),"type_error:SafeHtml")),i.close())):(a=Mt(e,i,n,a))&&t.noopener&&(a.opener=null),a)try{a.focus()}catch(t){}return a}var oi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ai=/^[^@]+@[^@]+$/;function si(){var e=null;return new fe(function(t){"complete"==l.document.readyState?t():(e=function(){t()},en(window,"load",e))}).o(function(t){throw nn(window,"load",e),t})}function ui(t){return t=t||bi(),!("file:"!==Ei()&&"ionic:"!==Ei()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ci(){var t=l.window;try{return t&&t!=t.top}catch(t){return}}function hi(){return void 0!==l.WorkerGlobalScope&&"function"==typeof l.importScripts}function li(){return Zl.default.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":Zl.default.INTERNAL.hasOwnProperty("node")?"Node":hi()?"Worker":"Browser"}function fi(){var t=li();return"ReactNative"===t||"Node"===t}var di="Firefox",pi="Chrome";function vi(t){var e=t.toLowerCase();return it(e,"opera/")||it(e,"opr/")||it(e,"opios/")?"Opera":it(e,"iemobile")?"IEMobile":it(e,"msie")||it(e,"trident/")?"IE":it(e,"edge/")?"Edge":it(e,"firefox/")?di:it(e,"silk/")?"Silk":it(e,"blackberry")?"Blackberry":it(e,"webos")?"Webos":!it(e,"safari/")||it(e,"chrome/")||it(e,"crios/")||it(e,"android")?!it(e,"chrome/")&&!it(e,"crios/")||it(e,"edge/")?it(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":pi:"Safari"}var mi={md:"FirebaseCore-web",od:"FirebaseUI-web"};function gi(t,e){e=e||[];var n,i=[],r={};for(n in mi)r[mi[n]]=!0;for(n=0;n<e.length;n++)void 0!==r[e[n]]&&(delete r[e[n]],i.push(e[n]));return i.sort(),(e=i).length||(e=["FirebaseCore-web"]),"Browser"===(i=li())?i=vi(r=bi()):"Worker"===i&&(i=vi(r=bi())+"-"+i),i+"/JsCore/"+t+"/"+e.join(",")}function bi(){return l.navigator&&l.navigator.userAgent||""}function yi(t,e){t=t.split("."),e=e||l;for(var n=0;n<t.length&&"object"==typeof e&&null!=e;n++)e=e[t[n]];return e=n!=t.length?void 0:e}function wi(){try{var t=l.localStorage,e=_i();if(t)return t.setItem(e,"1"),t.removeItem(e),!Qn()||!!l.indexedDB}catch(t){return hi()&&!!l.indexedDB}return!1}function Ii(){return(Ti()||"chrome-extension:"===Ei()||ui())&&!fi()&&wi()&&!hi()}function Ti(){return"http:"===Ei()||"https:"===Ei()}function Ei(){return l.location&&l.location.protocol||null}function Ai(t){return!ni(t=t||bi())&&vi(t)!=di}function ki(t){return void 0===t?null:Jn(t)}function Si(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e]);return n}function Ni(t){if(null!==t)return JSON.parse(t)}function _i(t){return t||Math.floor(1e9*Math.random()).toString()}function Oi(t){return"Safari"!=vi(t=t||bi())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Ci(){var t=l.___jsl;if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Ri(t,e){if(e<t)throw Error("Short delay should be less than long delay!");this.a=t,this.c=e,t=bi(),e=li(),this.b=ni(t)||"ReactNative"===e}function Di(){var t=l.document;return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Pi(){var e=l.document,n=null;return Di()||!e?ye():new fe(function(t){n=function(){Di()&&(e.removeEventListener("visibilitychange",n,!1),t())},e.addEventListener("visibilitychange",n,!1)}).o(function(t){throw e.removeEventListener("visibilitychange",n,!1),t})}function Li(t){try{var e=new Date(parseInt(t,10));if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function xi(){return yi("fireauth.oauthhelper",l)||yi("fireauth.iframe",l)}Ri.prototype.get=function(){var t=l.navigator;return!t||"boolean"!=typeof t.onLine||!Ti()&&"chrome-extension:"!==Ei()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)};var Mi,ji={};function Ui(t){ji[t]||(ji[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var Vi={};Object.defineProperty(Vi,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Vi,"abcd",{configurable:!0,enumerable:!0,value:2}),Mi=2==Vi.abcd}catch(t){Mi=!1}function Fi(t,e,n){Mi?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function qi(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&Fi(t,n,e[n])}function Hi(t){var e={};return qi(e,t),e}function Ki(t){var e=t;if("object"==typeof t&&null!=t)for(var n in e="length"in t?[]:{},t)Fi(e,n,Ki(t[n]));return e}function Gi(t){var e=t&&(t[Yi]?"phone":null);if(!(e&&t&&t[Ji]))throw new T("internal-error","Internal assert: invalid MultiFactorInfo object");Fi(this,"uid",t[Ji]),Fi(this,"displayName",t[Wi]||null);var n=null;Fi(this,"enrollmentTime",n=t[Xi]?new Date(t[Xi]).toUTCString():n),Fi(this,"factorId",e)}function Bi(t){try{var e=new zi(t)}catch(t){e=null}return e}Gi.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};var Wi="displayName",Xi="enrolledAt",Ji="mfaEnrollmentId",Yi="phoneInfo";function zi(t){Gi.call(this,t),Fi(this,"phoneNumber",t[Yi])}function $i(t){var e={},n=t[er],i=t[ir],r=t[rr];if(t=Bi(t[nr]),!r||r!=Qi&&r!=tr&&!n||r==tr&&!i||r==Zi&&!t)throw Error("Invalid checkActionCode response!");r==tr?(e[ar]=n||null,e[ur]=n||null,e[or]=i):(e[ar]=i||null,e[ur]=i||null,e[or]=n||null),e[sr]=t||null,Fi(this,hr,r),Fi(this,cr,Ki(e))}w(zi,Gi),zi.prototype.w=function(){var t=zi.bb.w.call(this);return t.phoneNumber=this.phoneNumber,t};var Zi="REVERT_SECOND_FACTOR_ADDITION",Qi="EMAIL_SIGNIN",tr="VERIFY_AND_CHANGE_EMAIL",er="email",nr="mfaInfo",ir="newEmail",rr="requestType",or="email",ar="fromEmail",sr="multiFactorInfo",ur="previousEmail",cr="data",hr="operation";function lr(t){var e=On(t=Cn(t),fr)||null,n=On(t,dr)||null,i=(i=On(t,mr)||null)&&br[i]||null;if(!e||!n||!i)throw new T("argument-error",fr+", "+dr+"and "+mr+" are required in a valid action code URL.");qi(this,{apiKey:e,operation:i,code:n,continueUrl:On(t,pr)||null,languageCode:On(t,vr)||null,tenantId:On(t,gr)||null})}var fr="apiKey",dr="oobCode",pr="continueUrl",vr="languageCode",mr="mode",gr="tenantId",br={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:Zi,signIn:Qi,verifyAndChangeEmail:tr,verifyEmail:"VERIFY_EMAIL"};function yr(t){try{return new lr(t)}catch(t){return null}}function wr(t){if(void 0===(e=t[kr]))throw new T("missing-continue-uri");if("string"!=typeof e||"string"==typeof e&&!e.length)throw new T("invalid-continue-uri");if(this.h=e,this.b=this.a=null,this.g=!1,(i=t[Ir])&&"object"==typeof i){var e=i[_r],n=i[Sr],i=i[Nr];if("string"==typeof e&&e.length){if(this.a=e,void 0!==n&&"boolean"!=typeof n)throw new T("argument-error",Sr+" property must be a boolean when specified.");if(this.g=!!n,void 0!==i&&("string"!=typeof i||"string"==typeof i&&!i.length))throw new T("argument-error",Nr+" property must be a non empty string when specified.");this.b=i||null}else{if(void 0!==e)throw new T("argument-error",_r+" property must be a non empty string when specified.");if(void 0!==n||void 0!==i)throw new T("missing-android-pkg-name")}}else if(void 0!==i)throw new T("argument-error",Ir+" property must be a non null object when specified.");if(this.f=null,(e=t[Ar])&&"object"==typeof e){if("string"==typeof(e=e[Or])&&e.length)this.f=e;else if(void 0!==e)throw new T("argument-error",Or+" property must be a non empty string when specified.")}else if(void 0!==e)throw new T("argument-error",Ar+" property must be a non null object when specified.");if(void 0!==(e=t[Er])&&"boolean"!=typeof e)throw new T("argument-error",Er+" property must be a boolean when specified.");if(this.c=!!e,void 0!==(t=t[Tr])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new T("argument-error",Tr+" property must be a non empty string when specified.");this.i=t||null}var Ir="android",Tr="dynamicLinkDomain",Er="handleCodeInApp",Ar="iOS",kr="url",Sr="installApp",Nr="minimumVersion",_r="packageName",Or="bundleId";function Cr(t){var e,n={};for(e in n.continueUrl=t.h,n.canHandleCodeInApp=t.c,(n.androidPackageName=t.a)&&(n.androidMinimumVersion=t.b,n.androidInstallApp=t.g),n.iOSBundleId=t.f,n.dynamicLinkDomain=t.i,n)null===n[e]&&delete n[e];return n}var Rr=null;function Dr(t){var e=[];return function(i,t){function e(t){for(;r<i.length;){var e=i.charAt(r++),n=Rr[e];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return t}!function(){if(!Rr){Rr={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;n<5;n++)for(var i=t.concat(e[n].split("")),r=0;r<i.length;r++){var o=i[r];void 0===Rr[o]&&(Rr[o]=r)}}}();for(var r=0;;){var n=e(-1),o=e(0),a=e(64),s=e(64);if(64===s&&-1===n)break;t(n<<2|o>>4),64!=a&&(t(o<<4&240|a>>2),64!=s&&t(a<<6&192|s))}}(t,function(t){e.push(t)}),e}function Pr(t){var e=xr(t);if(!(e&&e.sub&&e.iss&&e.aud&&e.exp))throw Error("Invalid JWT");this.h=t,this.a=e.exp,this.i=e.sub,t=Date.now()/1e3,this.g=e.iat||(t>this.a?this.a:t),this.b=e.provider_id||e.firebase&&e.firebase.sign_in_provider||null,this.f=e.firebase&&e.firebase.tenant||null,this.c=!!e.is_anonymous||"anonymous"==this.b}function Lr(t){try{return new Pr(t)}catch(t){return null}}function xr(t){if(!t)return null;if(3!=(t=t.split(".")).length)return null;for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+=".";try{var i=Dr(t);for(t=[],n=e=0;e<i.length;){var r,o,a,s=i[e++];s<128?t[n++]=String.fromCharCode(s):191<s&&s<224?(r=i[e++],t[n++]=String.fromCharCode((31&s)<<6|63&r)):239<s&&s<365?(a=((7&s)<<18|(63&(r=i[e++]))<<12|(63&(o=i[e++]))<<6|63&i[e++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(r=i[e++],o=i[e++],t[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o))}return JSON.parse(t.join(""))}catch(t){}return null}Pr.prototype.T=function(){return this.f},Pr.prototype.l=function(){return this.c},Pr.prototype.toString=function(){return this.h};var Mr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),jr=["client_id","response_type","scope","redirect_uri","state"],Ur={nd:{Ja:"locale",va:700,ua:600,fa:"facebook.com",Ya:jr},pd:{Ja:null,va:500,ua:750,fa:"github.com",Ya:jr},qd:{Ja:"hl",va:515,ua:680,fa:"google.com",Ya:jr},wd:{Ja:"lang",va:485,ua:705,fa:"twitter.com",Ya:Mr},kd:{Ja:"locale",va:640,ua:600,fa:"apple.com",Ya:[]}};function Vr(t){for(var e in Ur)if(Ur[e].fa==t)return Ur[e];return null}function Fr(t){var e={};e["facebook.com"]=Br,e["google.com"]=Xr,e["github.com"]=Wr,e["twitter.com"]=Jr;var n=t&&t[Hr];try{if(n)return new(e[n]||Gr)(t);if(void 0!==t[qr])return new Kr(t)}catch(t){}return null}var qr="idToken",Hr="providerId";function Kr(t){var e,n=t[Hr];if(n||!t[qr]||(e=Lr(t[qr]))&&e.b&&(n=e.b),!n)throw Error("Invalid additional user info!");e=!1,void 0!==t.isNewUser?e=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(e=!0),Fi(this,"providerId",n="anonymous"==n||"custom"==n?null:n),Fi(this,"isNewUser",e)}function Gr(t){Kr.call(this,t),Fi(this,"profile",Ki((t=Ni(t.rawUserInfo||"{}"))||{}))}function Br(t){if(Gr.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Wr(t){if(Gr.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!");Fi(this,"username",this.profile&&this.profile.login||null)}function Xr(t){if(Gr.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Jr(t){if(Gr.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!");Fi(this,"username",t.screenName||null)}function Yr(t){var e=On(i=Cn(t),"link"),n=On(Cn(e),"link"),i=On(i,"deep_link_id");return On(Cn(i),"link")||i||n||e||t}function zr(t,e){if(!t&&!e)throw new T("internal-error","Internal assert: no raw session string available");if(t&&e)throw new T("internal-error","Internal assert: unable to determine the session type");this.a=t||null,this.b=e||null,this.type=this.a?$r:Zr}w(Gr,Kr),w(Br,Gr),w(Wr,Gr),w(Xr,Gr),w(Jr,Gr);var $r="enroll",Zr="signin";function Qr(){}function to(t,n){return t.then(function(t){if(t[Ka]){var e=Lr(t[Ka]);if(!e||n!=e.i)throw new T("user-mismatch");return t}throw new T("user-mismatch")}).o(function(t){throw t&&t.code&&t.code==k+"user-not-found"?new T("user-mismatch"):t})}function eo(t,e){if(!e)throw new T("internal-error","failed to construct a credential");this.a=e,Fi(this,"providerId",t),Fi(this,"signInMethod",t)}function no(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function io(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new eo(t.providerId,t.pendingToken)}catch(t){}return null}function ro(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&Fi(this,"idToken",e.idToken),e.accessToken&&Fi(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&Fi(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken);else{if(!e.oauthToken||!e.oauthTokenSecret)throw new T("internal-error","failed to construct a credential");Fi(this,"accessToken",e.oauthToken),Fi(this,"secret",e.oauthTokenSecret)}Fi(this,"providerId",t),Fi(this,"signInMethod",n)}function oo(t){var e={};return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:Hn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function ao(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken};try{return new ro(t.providerId,e,t.signInMethod)}catch(t){}}return null}function so(t,e){this.Qc=e||[],qi(this,{providerId:t,isOAuthProvider:!0}),this.Jb={},this.qb=(Vr(t)||{}).Ja||null,this.pb=null}function uo(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new T("argument-error",'SAML provider IDs must be prefixed with "saml."');so.call(this,t,[])}function co(t){so.call(this,t,jr),this.a=[]}function ho(){co.call(this,"facebook.com")}function lo(t){if(!t)throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return m(t)&&(e=t.accessToken),(new ho).credential({accessToken:e})}function fo(){co.call(this,"github.com")}function po(t){if(!t)throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return m(t)&&(e=t.accessToken),(new fo).credential({accessToken:e})}function vo(){co.call(this,"google.com"),this.Ca("profile")}function mo(t,e){var n=t;return m(t)&&(n=t.idToken,e=t.accessToken),(new vo).credential({idToken:n,accessToken:e})}function go(){so.call(this,"twitter.com",Mr)}function bo(t,e){var n=t;if(!(n=!m(n)?{oauthToken:t,oauthTokenSecret:e}:n).oauthToken||!n.oauthTokenSecret)throw new T("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new ro("twitter.com",n,"twitter.com")}function yo(t,e,n){this.a=t,this.f=e,Fi(this,"providerId","password"),Fi(this,"signInMethod",n===Io.EMAIL_LINK_SIGN_IN_METHOD?Io.EMAIL_LINK_SIGN_IN_METHOD:Io.EMAIL_PASSWORD_SIGN_IN_METHOD)}function wo(t){return t&&t.email&&t.password?new yo(t.email,t.password,t.signInMethod):null}function Io(){qi(this,{providerId:"password",isOAuthProvider:!1})}function To(t,e){if(!(e=Eo(e)))throw new T("argument-error","Invalid email link!");return new yo(t,e.code,Io.EMAIL_LINK_SIGN_IN_METHOD)}function Eo(t){return(t=yr(t=Yr(t)))&&t.operation===Qi?t:null}function Ao(t){if(!(t.fb&&t.eb||t.La&&t.ea))throw new T("internal-error");this.a=t,Fi(this,"providerId","phone"),this.fa="phone",Fi(this,"signInMethod","phone")}function ko(e){if(e&&"phone"===e.providerId&&(e.verificationId&&e.verificationCode||e.temporaryProof&&e.phoneNumber)){var n={};return V(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(t){e[t]&&(n[t]=e[t])}),new Ao(n)}return null}function So(t){return t.a.La&&t.a.ea?{temporaryProof:t.a.La,phoneNumber:t.a.ea}:{sessionInfo:t.a.fb,code:t.a.eb}}function No(t){try{this.a=t||Zl.default.auth()}catch(t){throw new T("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}qi(this,{providerId:"phone",isOAuthProvider:!1})}function _o(t,e){if(!t)throw new T("missing-verification-id");if(!e)throw new T("missing-verification-code");return new Ao({fb:t,eb:e})}function Oo(t){if(t.temporaryProof&&t.phoneNumber)return new Ao({La:t.temporaryProof,ea:t.phoneNumber});var e=t&&t.providerId;if(!e||"password"===e)return null;var n=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken;try{switch(e){case"google.com":return mo(o,n);case"facebook.com":return lo(n);case"github.com":return po(n);case"twitter.com":return bo(n,i);default:return n||i||o||a?a?0==e.indexOf("saml.")?new eo(e,a):new ro(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new co(e).credential({idToken:o,accessToken:n,rawNonce:r}):null}}catch(t){return null}}function Co(t){if(!t.isOAuthProvider)throw new T("invalid-oauth-provider")}function Ro(t,e,n,i,r,o,a){if(this.c=t,this.b=e||null,this.g=n||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new T("invalid-auth-event");if(this.g&&this.a)throw new T("invalid-auth-event");if(this.g&&!this.f)throw new T("invalid-auth-event")}function Do(t){return(t=t||{}).type?new Ro(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&E(t.error),t.postBody,t.tenantId):null}function Po(){this.b=null,this.a=[]}zr.prototype.Ha=function(){return this.a?ye(this.a):ye(this.b)},zr.prototype.w=function(){return this.type==$r?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}},Qr.prototype.ka=function(){},Qr.prototype.b=function(){},Qr.prototype.c=function(){},Qr.prototype.w=function(){},eo.prototype.ka=function(t){return ls(t,no(this))},eo.prototype.b=function(t,e){var n=no(this);return n.idToken=e,fs(t,n)},eo.prototype.c=function(t,e){return to(ds(t,no(this)),e)},eo.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},ro.prototype.ka=function(t){return ls(t,oo(this))},ro.prototype.b=function(t,e){var n=oo(this);return n.idToken=e,fs(t,n)},ro.prototype.c=function(t,e){return to(ds(t,oo(this)),e)},ro.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod};return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},so.prototype.Ka=function(t){return this.Jb=ct(t),this},w(uo,so),w(co,so),co.prototype.Ca=function(t){return K(this.a,t)||this.a.push(t),this},co.prototype.Rb=function(){return X(this.a)},co.prototype.credential=function(t,e){e=m(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null};if(!e.idToken&&!e.accessToken)throw new T("argument-error","credential failed: must provide the ID token and/or the access token.");return new ro(this.providerId,e,this.providerId)},w(ho,co),Fi(ho,"PROVIDER_ID","facebook.com"),Fi(ho,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),w(fo,co),Fi(fo,"PROVIDER_ID","github.com"),Fi(fo,"GITHUB_SIGN_IN_METHOD","github.com"),w(vo,co),Fi(vo,"PROVIDER_ID","google.com"),Fi(vo,"GOOGLE_SIGN_IN_METHOD","google.com"),w(go,so),Fi(go,"PROVIDER_ID","twitter.com"),Fi(go,"TWITTER_SIGN_IN_METHOD","twitter.com"),yo.prototype.ka=function(t){return this.signInMethod==Io.EMAIL_LINK_SIGN_IN_METHOD?Js(t,Is,{email:this.a,oobCode:this.f}):Js(t,Ks,{email:this.a,password:this.f})},yo.prototype.b=function(t,e){return this.signInMethod==Io.EMAIL_LINK_SIGN_IN_METHOD?Js(t,Ts,{idToken:e,email:this.a,oobCode:this.f}):Js(t,xs,{idToken:e,email:this.a,password:this.f})},yo.prototype.c=function(t,e){return to(this.ka(t),e)},yo.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}},qi(Io,{PROVIDER_ID:"password"}),qi(Io,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),qi(Io,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),Ao.prototype.ka=function(t){return t.gb(So(this))},Ao.prototype.b=function(t,e){var n=So(this);return n.idToken=e,Js(t,Bs,n)},Ao.prototype.c=function(t,e){var n=So(this);return n.operation="REAUTH",to(t=Js(t,Ws,n),e)},Ao.prototype.w=function(){var t={providerId:"phone"};return this.a.fb&&(t.verificationId=this.a.fb),this.a.eb&&(t.verificationCode=this.a.eb),this.a.La&&(t.temporaryProof=this.a.La),this.a.ea&&(t.phoneNumber=this.a.ea),t},No.prototype.gb=function(i,r){var o=this.a.a;return ye(r.verify()).then(function(e){if("string"!=typeof e)throw new T("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");if("recaptcha"!==r.type)throw new T("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');var t=m(i)?i.session:null,n=m(i)?i.phoneNumber:i,t=t&&t.type==$r?t.Ha().then(function(t){return Js(o,js,{idToken:t,phoneEnrollmentInfo:{phoneNumber:n,recaptchaToken:e}}).then(function(t){return t.phoneSessionInfo.sessionInfo})}):t&&t.type==Zr?t.Ha().then(function(t){return t={mfaPendingCredential:t,mfaEnrollmentId:i.multiFactorHint&&i.multiFactorHint.uid||i.multiFactorUid,phoneSignInInfo:{recaptchaToken:e}},Js(o,Us,t).then(function(t){return t.phoneResponseInfo.sessionInfo})}):Js(o,Ps,{phoneNumber:n,recaptchaToken:e});return t.then(function(t){return"function"==typeof r.reset&&r.reset(),t},function(t){throw"function"==typeof r.reset&&r.reset(),t})})},qi(No,{PROVIDER_ID:"phone"}),qi(No,{PHONE_SIGN_IN_METHOD:"phone"}),Ro.prototype.getUid=function(){var t=[];return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},Ro.prototype.T=function(){return this.h},Ro.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};var Lo,xo=null;function Mo(t){var e="unauthorized-domain",n=void 0,i=Cn(t);t=i.a,"chrome-extension"==(i=i.c)?n=jt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?n=jt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",T.call(this,e,n)}function jo(t,e,n){T.call(this,t,n),(t=e||{}).Kb&&Fi(this,"email",t.Kb),t.ea&&Fi(this,"phoneNumber",t.ea),t.credential&&Fi(this,"credential",t.credential),t.$b&&Fi(this,"tenantId",t.$b)}function Uo(t){if(t.code){var e=t.code||"";0==e.indexOf(k)&&(e=e.substring(k.length));var n={credential:Oo(t),$b:t.tenantId};if(t.email)n.Kb=t.email;else if(t.phoneNumber)n.ea=t.phoneNumber;else if(!n.credential)return new T(e,t.message||void 0);return new jo(e,n,t.message)}return null}function Vo(){}function Fo(t){return t.c||(t.c=t.b())}function qo(){}function Ho(t){if(t.f||"undefined"!=typeof XMLHttpRequest||"undefined"==typeof ActiveXObject)return t.f;for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var i=e[n];try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}function Ko(){}function Go(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=b(this.qc,this),this.a.onerror=b(this.Tb,this),this.a.onprogress=b(this.rc,this),this.a.ontimeout=b(this.vc,this)}function Bo(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function Wo(t,e,n){this.reset(t,e,n,void 0,void 0)}function Xo(t){this.f=t,this.b=this.c=this.a=null}function Jo(t,e){this.name=t,this.value=e}w(Mo,T),w(jo,T),jo.prototype.w=function(){var t={code:this.code,message:this.message};this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId);var e=this.credential&&this.credential.w();return e&&lt(t,e),t},jo.prototype.toJSON=function(){return this.w()},Vo.prototype.c=null,w(qo,Vo),qo.prototype.a=function(){var t=Ho(this);return t?new ActiveXObject(t):new XMLHttpRequest},qo.prototype.b=function(){var t={};return Ho(this)&&(t[0]=!0,t[1]=!0),t},Lo=new qo,w(Ko,Vo),Ko.prototype.a=function(){var t=new XMLHttpRequest;if("withCredentials"in t)return t;if("undefined"!=typeof XDomainRequest)return new Go;throw Error("Unsupported browser")},Ko.prototype.b=function(){return{}},(t=Go.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.");this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported");this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.qc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Bo(this,4)},t.Tb=function(){this.status=500,this.response=this.responseText="",Bo(this,4)},t.vc=function(){this.Tb()},t.rc=function(){this.status=200,Bo(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Wo.prototype.a=null,Wo.prototype.reset=function(t,e,n,i,r){delete this.a},Jo.prototype.toString=function(){return this.name};var Yo=new Jo("SEVERE",1e3),zo=new Jo("WARNING",900),$o=new Jo("CONFIG",700),Zo=new Jo("FINE",500);Xo.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c||(e.a?t(e.a):(D("Root logger has no level set."),null))}(this).value)for(v(e)&&(e=e()),t=new Wo(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a};var Qo,ta={},ea=null;function na(t){var e,n,i;return ea||(ea=new Xo(""),(ta[""]=ea).c=$o),(e=ta[t])||(e=new Xo(t),i=t.lastIndexOf("."),n=t.substr(i+1),(i=na(t.substr(0,i))).b||(i.b={}),(i.b[n]=e).a=i,ta[t]=e),e}function ia(t,e){t&&t.log(Zo,e,void 0)}function ra(t){this.f=t}function oa(t){fn.call(this),this.u=t,this.h=void 0,this.readyState=aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.l=new Headers,this.b=null,this.s="GET",this.f="",this.a=!1,this.i=na("goog.net.FetchXmlHttp"),this.m=this.c=this.g=null}w(ra,Vo),ra.prototype.a=function(){return new oa(this.f)},ra.prototype.b=(Qo={},function(){return Qo}),w(oa,fn);var aa=0;function sa(t){t.c.read().then(t.pc.bind(t)).catch(t.Va.bind(t))}function ua(t){t.readyState=4,t.g=null,t.c=null,t.m=null,ca(t)}function ca(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ha(t){fn.call(this),this.headers=new wn,this.D=t||null,this.c=!1,this.C=this.a=null,this.h=this.P=this.l="",this.f=this.N=this.i=this.J=!1,this.g=0,this.s=null,this.m=la,this.u=this.S=!1}(t=oa.prototype).open=function(t,e){if(this.readyState!=aa)throw this.abort(),Error("Error reopening a connection");this.s=t,this.f=e,this.readyState=1,ca(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var e={headers:this.l,method:this.s,credentials:this.h,cache:void 0};t&&(e.body=t),this.u.fetch(new Request(this.f,e)).then(this.uc.bind(this),this.Va.bind(this))},t.abort=function(){this.response=this.responseText="",this.l=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,ua(this)),this.readyState=aa},t.uc=function(t){this.a&&(this.g=t,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=t.headers,this.readyState=2,ca(this)),this.a&&(this.readyState=3,ca(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.sc.bind(this),this.Va.bind(this)):void 0!==l.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.m=new TextDecoder,sa(this)):t.text().then(this.tc.bind(this),this.Va.bind(this)))))},t.pc=function(t){var e;this.a&&((e=this.m.decode(t.value||new Uint8Array(0),{stream:!t.done}))&&(this.response=this.responseText+=e),(t.done?ua:ca)(this),3==this.readyState&&sa(this))},t.tc=function(t){this.a&&(this.response=this.responseText=t,ua(this))},t.sc=function(t){this.a&&(this.response=t,ua(this))},t.Va=function(t){var e=this.i;e&&e.log(zo,"Failed to fetch url "+this.f,t instanceof Error?t:Error(t)),this.a&&ua(this)},t.setRequestHeader=function(t,e){this.l.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.i)&&t.log(zo,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.i;return t&&t.log(zo,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0),""}for(var t=[],e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return"include"===this.h},set:function(t){this.h=t?"include":"same-origin"}}),w(ha,fn);var la="";ha.prototype.b=na("goog.net.XhrIo");var fa=/^https?$/i,da=["POST","PUT"];function pa(e,t,n,i,r){if(e.a)throw Error("[goog.net.XhrIo] Object is active with another request="+e.l+"; newUri="+t);n=n?n.toUpperCase():"GET",e.l=t,e.h="",e.P=n,e.J=!1,e.c=!0,e.a=(e.D||Lo).a(),e.C=e.D?Fo(e.D):Fo(Lo),e.a.onreadystatechange=b(e.Wb,e);try{ia(e.b,Ea(e,"Opening Xhr")),e.N=!0,e.a.open(n,String(t),!0),e.N=!1}catch(t){return ia(e.b,Ea(e,"Error opening Xhr: "+t.message)),void ma(e,t)}t=i||"";var o,a=new wn(e.headers);r&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"==typeof t)V(t,e,void 0);else for(var n=yn(t),i=bn(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(r,function(t,e){a.set(e,t)}),r=function(t){t:{for(var e=va,n=t.length,i="string"==typeof t?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return e<0?null:"string"==typeof t?t.charAt(e):t[e]}(a.Y()),i=l.FormData&&t instanceof l.FormData,!K(da,n)||r||i||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),a.forEach(function(t,e){this.a.setRequestHeader(e,t)},e),e.m&&(e.a.responseType=e.m),"withCredentials"in e.a&&e.a.withCredentials!==e.S&&(e.a.withCredentials=e.S);try{wa(e),0<e.g&&(e.u=(o=e.a,Ht&&$t(9)&&"number"==typeof o.timeout&&void 0!==o.ontimeout),ia(e.b,Ea(e,"Will abort after "+e.g+"ms if incomplete, xhr2 "+e.u)),e.u?(e.a.timeout=e.g,e.a.ontimeout=b(e.Ma,e)):e.s=mn(e.Ma,e.g,e)),ia(e.b,Ea(e,"Sending request")),e.i=!0,e.a.send(t),e.i=!1}catch(t){ia(e.b,Ea(e,"Send error: "+t.message)),ma(e,t)}}function va(t){return"content-type"==t.toLowerCase()}function ma(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,ga(t),ya(t)}function ga(t){t.J||(t.J=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function ba(e){if(e.c&&void 0!==h)if(e.C[1]&&4==Ia(e)&&2==Ta(e))ia(e.b,Ea(e,"Local request error detected and ignored"));else if(e.i&&4==Ia(e))mn(e.Wb,0,e);else if(e.dispatchEvent("readystatechange"),4==Ia(e)){ia(e.b,Ea(e,"Request complete")),e.c=!1;try{var t,n,i,r,o=Ta(e);t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}if((t=a)||((n=0===o)&&(!(r=String(e.l).match(En)[1]||null)&&l.self&&l.self.location&&(r=(i=l.self.location.protocol).substr(0,i.length-1)),n=!fa.test(r?r.toLowerCase():"")),t=n),t)e.dispatchEvent("complete"),e.dispatchEvent("success");else{try{var s=2<Ia(e)?e.a.statusText:""}catch(t){ia(e.b,"Can not get status: "+t.message),s=""}e.h=s+" ["+Ta(e)+"]",ga(e)}}finally{ya(e)}}}function ya(e,t){if(e.a){wa(e);var n=e.a,i=e.C[0]?a:null;e.a=null,e.C=null,t||e.dispatchEvent("ready");try{n.onreadystatechange=i}catch(t){(e=e.b)&&e.log(Yo,"Problem encountered resetting onreadystatechange: "+t.message,void 0)}}}function wa(t){t.a&&t.u&&(t.a.ontimeout=null),t.s&&(l.clearTimeout(t.s),t.s=null)}function Ia(t){return t.a?t.a.readyState:0}function Ta(t){try{return 2<Ia(t)?t.a.status:-1}catch(t){return-1}}function Ea(t,e){return e+" ["+t.P+" "+t.l+" "+Ta(t)+"]"}function Aa(t){var e=xa;this.g=[],this.u=e,this.s=t||null,this.f=this.a=!1,this.c=void 0,this.v=this.C=this.i=!1,this.h=0,this.b=null,this.l=0}function ka(t,e,n){t.a=!0,t.c=n,t.f=!e,Oa(t)}function Sa(t){if(t.a){if(!t.v)throw new Ca;t.v=!1}}function Na(t,e,n,i){t.g.push([e,n,i]),t.a&&Oa(t)}function _a(t){return H(t.g,function(t){return v(t[1])})}function Oa(e){var n;e.h&&e.a&&_a(e)&&(i=e.h,(n=Pa[i])&&(l.clearTimeout(n.a),delete Pa[i]),e.h=0),e.b&&(e.b.l--,delete e.b);for(var i=e.c,t=n=!1;e.g.length&&!e.i;){var r=(a=e.g.shift())[0],o=a[1],a=a[2];if(r=e.f?o:r)try{var s=r.call(a||e.s,i);void 0!==s&&(e.f=e.f&&(s==i||s instanceof Error),e.c=i=s),(O(i)||"function"==typeof l.Promise&&i instanceof l.Promise)&&(t=!0,e.i=!0)}catch(t){i=t,e.f=!0,_a(e)||(n=!0)}}e.c=i,t&&(s=b(e.m,e,!0),t=b(e.m,e,!1),i instanceof Aa?(Na(i,s,t),i.C=!0):i.then(s,t)),n&&(i=new Da(i),Pa[i.a]=i,e.h=i.a)}function Ca(){C.call(this)}function Ra(){C.call(this)}function Da(t){this.a=l.setTimeout(b(this.c,this),0),this.b=t}(t=ha.prototype).Ma=function(){void 0!==h&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",ia(this.b,Ea(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(ia(this.b,Ea(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ya(this))},t.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ya(this,!0)),ha.bb.Da.call(this)},t.Wb=function(){this.ya||(this.N||this.i||this.f?ba(this):this.Jc())},t.Jc=function(){ba(this)},t.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case la:case"text":return this.a.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b;return t&&t.log(Yo,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return ia(this.b,"Can not get response: "+t.message),null}},Aa.prototype.cancel=function(t){var e;this.a?this.c instanceof Aa&&this.c.cancel():(this.b&&(e=this.b,delete this.b,t?e.cancel(t):(e.l--,e.l<=0&&e.cancel())),this.u?this.u.call(this.s,this):this.v=!0,this.a||(t=new Ra,Sa(this),ka(this,!1,t)))},Aa.prototype.m=function(t,e){this.i=!1,ka(this,t,e)},Aa.prototype.then=function(t,e,n){var i,r,o=new fe(function(t,e){i=t,r=e});return Na(this,i,function(t){t instanceof Ra?o.cancel():r(t)}),o.then(t,e,n)},Aa.prototype.$goog_Thenable=!0,w(Ca,C),Ca.prototype.message="Deferred has already fired",Ca.prototype.name="AlreadyCalledError",w(Ra,C),Ra.prototype.message="Deferred was canceled",Ra.prototype.name="CanceledError",Da.prototype.c=function(){throw delete Pa[this.a],this.b};var Pa={};function La(t){var e=document,n=wt(t).toString(),i=ae(document,"SCRIPT"),r={Xb:i,Ma:void 0},o=new Aa(r),a=window.setTimeout(function(){Ma(i,!0);var t=new Va(Ua,"Timeout reached for loading script "+n);Sa(o),ka(o,!1,t)},5e3);return r.Ma=a,i.onload=i.onreadystatechange=function(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(Ma(i,!1,a),Sa(o),ka(o,!0,null))},i.onerror=function(){Ma(i,!0,a);var t=new Va(ja,"Error while loading script "+n);Sa(o),ka(o,!1,t)},lt(r={},{type:"text/javascript",charset:"UTF-8"}),ee(i,r),r=t,ft(t=i,"HTMLScriptElement"),t.src=wt(r),(r=(r=t.ownerDocument&&t.ownerDocument.defaultView)&&r!=l?f(r.document):s=null===s?f(l.document):s)&&t.setAttribute("nonce",r),((e=((r=e)||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:r.documentElement).appendChild(i),o}function xa(){var t;this&&this.Xb&&((t=this.Xb)&&"SCRIPT"==t.tagName&&Ma(t,!0,this.Ma))}function Ma(t,e,n){null!=n&&l.clearTimeout(n),t.onload=a,t.onerror=a,t.onreadystatechange=a,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var ja=0,Ua=1;function Va(t,e){var n="Jsloader error (code #"+t+")";e&&(n+=": "+e),C.call(this,n),this.code=t}function Fa(t){this.f=t}function qa(t,e,n){if(this.c=t,this.l=(t=e||{}).secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.m=t.secureTokenTimeout||Ga,this.g=ct(t.secureTokenHeaders||Ba),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/",this.v=t.firebaseTimeout||Wa,this.a=ct(t.firebaseHeaders||Xa),n&&(this.a["X-Client-Version"]=n,this.g["X-Client-Version"]=n),n="Node"==li(),!(n=l.XMLHttpRequest||n&&Zl.default.INTERNAL.node&&Zl.default.INTERNAL.node.XMLHttpRequest)&&!hi())throw new T("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0,hi()?this.f=new ra(self):fi()?this.f=new Fa(n):this.f=new Ko,this.b=null}w(Va,C),w(Fa,Vo),Fa.prototype.a=function(){return new this.f},Fa.prototype.b=function(){return{}};var Ha,Ka="idToken",Ga=new Ri(3e4,6e4),Ba={"Content-Type":"application/x-www-form-urlencoded"},Wa=new Ri(3e4,6e4),Xa={"Content-Type":"application/json"};function Ja(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Ya(t,e){e&&(t.l=za("https://securetoken.googleapis.com/v1/token",e),t.h=za("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",e),t.i=za("https://identitytoolkit.googleapis.com/v2/",e))}function za(t,e){return t=Cn(t),e=Cn(e.url),t.f=t.a+t.f,kn(t,e.c),t.a=e.a,Sn(t,e.g),t.toString()}function $a(t,e){e?(t.a["X-Client-Version"]=e,t.g["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function Za(t,e,n,i,r,o,a){var s;(t=((s=vi(s=bi())==pi&&(s=s.match(/\sChrome\/(\d+)/i))&&2==s.length?parseInt(s[1],10):null)&&s<30||Ht&&Zt&&!(9<Zt))&&!hi()?(Ha=Ha||new fe(function(t,e){var n,i;n=t,i=e,((window.gapi||{}).client||{}).request?n():(l[ts]=function(){((window.gapi||{}).client||{}).request?n():i(Error("CORS_UNSUPPORTED"))},function(t,e){Na(t,null,e,void 0)}(La(It(Qa,{onload:ts})),function(){i(Error("CORS_UNSUPPORTED"))}))}),b(t.s,t)):b(t.u,t))(e,n,i,r,o,a)}qa.prototype.T=function(){return this.b},qa.prototype.u=function(t,n,e,i,r,o){if(hi()&&(void 0===l.fetch||void 0===l.Headers||void 0===l.Request))throw new T("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var a,s=new ha(this.f);o&&(s.g=Math.max(0,o),a=setTimeout(function(){s.dispatchEvent("timeout")},o)),dn(s,"complete",function(){a&&clearTimeout(a);var e=null;try{e=JSON.parse(function(e){try{return e.a?e.a.responseText:""}catch(t){return ia(e.b,"Can not get responseText: "+t.message),""}}(this))||null}catch(t){e=null}n&&n(e)}),pn(s,"ready",function(){a&&clearTimeout(a),Me(this)}),pn(s,"timeout",function(){a&&clearTimeout(a),Me(this),n&&n(null)}),pa(s,t,e,i,r)};var Qa=new dt(gt,"https://apis.google.com/js/client.js?onload=%{onload}"),ts="__fcb"+Math.floor(1e6*Math.random()).toString();function es(t,e,n,i,r,o,a){var s=Cn(e+n);_n(s,"key",t.c),a&&_n(s,"cb",Date.now().toString());var u="GET"==i;if(u)for(var c in r)r.hasOwnProperty(c)&&_n(s,c,r[c]);return new fe(function(e,n){Za(t,s.toString(),function(t){t?t.error?n(zs(t,o||{})):e(t):n(new T("network-request-failed"))},i,u?void 0:Jn(Si(r)),t.a,t.v.get())})}function ns(t){if("string"!=typeof(t=t.email)||!ai.test(t))throw new T("invalid-email")}function is(t){"email"in t&&ns(t)}function rs(t){if(!t[Ka]){if(t.mfaPendingCredential)throw new T("multi-factor-auth-required",null,ct(t));throw new T("internal-error")}}function os(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new T("internal-error")}else{if(!t.sessionInfo)throw new T("missing-verification-id");if(!t.code)throw new T("missing-verification-code")}}qa.prototype.s=function(t,n,i,r,o){var a=this;Ha.then(function(){window.gapi.client.setApiKey(a.c);var e=window.gapi.auth.getToken();window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:i,body:r,headers:o,authType:"none",callback:function(t){window.gapi.auth.setToken(e),n&&n(t)}})}).o(function(t){n&&n({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},qa.prototype.Ab=function(){return Js(this,Ms,{})},qa.prototype.Cb=function(t,e){return Js(this,Ls,{idToken:t,email:e})},qa.prototype.Db=function(t,e){return Js(this,xs,{idToken:t,password:e})};var as={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};function ss(t){if(!t.phoneVerificationInfo)throw new T("internal-error");if(!t.phoneVerificationInfo.sessionInfo)throw new T("missing-verification-id");if(!t.phoneVerificationInfo.code)throw new T("missing-verification-code")}function us(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new T("internal-error")}function cs(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&(Gn(t=new Fn(t.postBody),"nonce")&&(e.nonce=t.get("nonce")))),e}function hs(t){var e=null;if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=Uo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=Uo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=Uo(t)):t.errorMessage&&(e=Ys(t.errorMessage)),e)throw e;rs(t)}function ls(t,e){return e.returnIdpCredential=!0,Js(t,Vs,e)}function fs(t,e){return e.returnIdpCredential=!0,Js(t,qs,e)}function ds(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,Js(t,Fs,e)}function ps(t){if(!t.oobCode)throw new T("invalid-action-code")}(t=qa.prototype).Eb=function(t,i){var r={idToken:t},o=[];return st(as,function(t,e){var n=i[e];null===n?o.push(t):e in i&&(r[e]=n)}),o.length&&(r.deleteAttribute=o),Js(this,Ls,r)},t.wb=function(t,e){return lt(t={requestType:"PASSWORD_RESET",email:t},e),Js(this,Os,t)},t.xb=function(t,e){return lt(t={requestType:"EMAIL_SIGNIN",email:t},e),Js(this,Ss,t)},t.vb=function(t,e){return lt(t={requestType:"VERIFY_EMAIL",idToken:t},e),Js(this,Ns,t)},t.Fb=function(t,e,n){return lt(t={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:t,newEmail:e},n),Js(this,_s,t)},t.gb=function(t){return Js(this,Gs,t)},t.ob=function(t,e){return Js(this,Ds,{oobCode:t,newPassword:e})},t.Sa=function(t){return Js(this,ms,{oobCode:t})},t.kb=function(t){return Js(this,vs,{oobCode:t})};var vs={endpoint:"setAccountInfo",A:ps,Z:"email",B:!0},ms={endpoint:"resetPassword",A:ps,G:function(t){var e=t.requestType;if(!e||!t.email&&"EMAIL_SIGNIN"!=e&&"VERIFY_AND_CHANGE_EMAIL"!=e)throw new T("internal-error")},B:!0},gs={endpoint:"signupNewUser",A:function(t){if(ns(t),!t.password)throw new T("weak-password")},G:rs,V:!0,B:!0},bs={endpoint:"createAuthUri",B:!0},ys={endpoint:"deleteAccount",O:["idToken"]},ws={endpoint:"setAccountInfo",O:["idToken","deleteProvider"],A:function(t){if(!Array.isArray(t.deleteProvider))throw new T("internal-error")}},Is={endpoint:"emailLinkSignin",O:["email","oobCode"],A:ns,G:rs,V:!0,B:!0},Ts={endpoint:"emailLinkSignin",O:["idToken","email","oobCode"],A:ns,G:rs,V:!0},Es={endpoint:"accounts/mfaEnrollment:finalize",O:["idToken","phoneVerificationInfo"],A:ss,G:rs,B:!0,Na:!0},As={endpoint:"accounts/mfaSignIn:finalize",O:["mfaPendingCredential","phoneVerificationInfo"],A:ss,G:rs,B:!0,Na:!0},ks={endpoint:"getAccountInfo"},Ss={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new T("internal-error");ns(t)},Z:"email",B:!0},Ns={endpoint:"getOobConfirmationCode",O:["idToken","requestType"],A:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new T("internal-error")},Z:"email",B:!0},_s={endpoint:"getOobConfirmationCode",O:["idToken","newEmail","requestType"],A:function(t){if("VERIFY_AND_CHANGE_EMAIL"!=t.requestType)throw new T("internal-error")},Z:"email",B:!0},Os={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(t){if("PASSWORD_RESET"!=t.requestType)throw new T("internal-error");ns(t)},Z:"email",B:!0},Cs={mb:!0,endpoint:"getProjectConfig",Vb:"GET"},Rs={mb:!0,endpoint:"getRecaptchaParam",Vb:"GET",G:function(t){if(!t.recaptchaSiteKey)throw new T("internal-error")}},Ds={endpoint:"resetPassword",A:ps,Z:"email",B:!0},Ps={endpoint:"sendVerificationCode",O:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},Ls={endpoint:"setAccountInfo",O:["idToken"],A:is,V:!0},xs={endpoint:"setAccountInfo",O:["idToken"],A:function(t){if(is(t),!t.password)throw new T("weak-password")},G:rs,V:!0},Ms={endpoint:"signupNewUser",G:rs,V:!0,B:!0},js={endpoint:"accounts/mfaEnrollment:start",O:["idToken","phoneEnrollmentInfo"],A:function(t){if(!t.phoneEnrollmentInfo)throw new T("internal-error");if(!t.phoneEnrollmentInfo.phoneNumber)throw new T("missing-phone-number");if(!t.phoneEnrollmentInfo.recaptchaToken)throw new T("missing-app-credential")},G:function(t){if(!t.phoneSessionInfo||!t.phoneSessionInfo.sessionInfo)throw new T("internal-error")},B:!0,Na:!0},Us={endpoint:"accounts/mfaSignIn:start",O:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(t){if(!t.phoneSignInInfo||!t.phoneSignInInfo.recaptchaToken)throw new T("missing-app-credential")},G:function(t){if(!t.phoneResponseInfo||!t.phoneResponseInfo.sessionInfo)throw new T("internal-error")},B:!0,Na:!0},Vs={endpoint:"verifyAssertion",A:us,Za:cs,G:hs,V:!0,B:!0},Fs={endpoint:"verifyAssertion",A:us,Za:cs,G:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new T("user-not-found");if(t.errorMessage)throw Ys(t.errorMessage);rs(t)},V:!0,B:!0},qs={endpoint:"verifyAssertion",A:function(t){if(us(t),!t.idToken)throw new T("internal-error")},Za:cs,G:hs,V:!0},Hs={endpoint:"verifyCustomToken",A:function(t){if(!t.token)throw new T("invalid-custom-token")},G:rs,V:!0,B:!0},Ks={endpoint:"verifyPassword",A:function(t){if(ns(t),!t.password)throw new T("wrong-password")},G:rs,V:!0,B:!0},Gs={endpoint:"verifyPhoneNumber",A:os,G:rs,B:!0},Bs={endpoint:"verifyPhoneNumber",A:function(t){if(!t.idToken)throw new T("internal-error");os(t)},G:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",Uo(t);rs(t)}},Ws={Ib:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:os,G:rs,B:!0},Xs={endpoint:"accounts/mfaEnrollment:withdraw",O:["idToken","mfaEnrollmentId"],G:function(t){if(!!t[Ka]^!!t.refreshToken)throw new T("internal-error")},B:!0,Na:!0};function Js(t,e,n){if(!function(t,e){if(!e||!e.length)return 1;if(t){for(var n=0;n<e.length;n++){var i=t[e[n]];if(null==i||""===i)return}return 1}}(n,e.O))return we(new T("internal-error"));var i,r=!!e.Na,o=e.Vb||"POST";return ye(n).then(e.A).then(function(){return e.V&&(n.returnSecureToken=!0),e.B&&t.b&&void 0===n.tenantId&&(n.tenantId=t.b),es(t,r?t.i:t.h,e.endpoint,o,n,e.Ib,e.mb||!1)}).then(function(t){return i=t,e.Za?e.Za(n,i):i}).then(e.G).then(function(){if(!e.Z)return i;if(!(e.Z in i))throw new T("internal-error");return i[e.Z]})}function Ys(t){return zs({error:{errors:[{message:t}],code:400,message:t}})}function zs(t,e){var n,i=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",r={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(i=r[i]?new T(r[i]):null)return i;for(n in i=t.error&&t.error.message||"",lt(r={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"},e||{}),e=(e=i.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<e.length?e[1]:void 0,r)if(0===i.indexOf(n))return new T(r[n],e);return new T("internal-error",e=!e&&t?ki(t):e)}function $s(t){var o;this.b=t,this.a=null,this.sb=(o=this,(eu=eu||new fe(function(t,e){function n(){Ci(),yi("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Ci(),e(Error("Network Error"))},timeout:Qs.get()})}var i;yi("gapi.iframes.Iframe")?t():yi("gapi.load")?n():(i="__iframefcb"+Math.floor(1e6*Math.random()).toString(),l[i]=function(){yi("gapi.load")?n():e(Error("Network Error"))},ye(La(i=It(Zs,{onload:i}))).o(function(){e(Error("Network Error"))}))}).o(function(t){throw eu=null,t})).then(function(){return new fe(function(i,r){yi("gapi.iframes.getContext")().open({where:document.body,url:o.b,messageHandlersFilter:yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(t){function e(){clearTimeout(n),i()}o.a=t,o.a.restyle({setHideOnLeave:!1});var n=setTimeout(function(){r(Error("Network Error"))},tu.get());t.ping(e).then(e,function(){r(Error("Network Error"))})})})}))}var Zs=new dt(gt,"https://apis.google.com/js/api.js?onload=%{onload}"),Qs=new Ri(3e4,6e4),tu=new Ri(5e3,15e3),eu=null;function nu(t,e,n,i){this.l=t,this.h=e,this.i=n,this.g=i,this.f=null,t=this.g?Rn((t=Cn(this.g.url)).c,t.a,t.g,"/emulator/auth/iframe"):Rn("https",this.l,null,"/__/auth/iframe"),this.a=t,_n(this.a,"apiKey",this.h),_n(this.a,"appName",this.i),this.b=null,this.c=[]}function iu(t,e,n,i,r,o){this.u=t,this.s=e,this.c=n,this.m=i,this.v=o,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function ru(t){try{return Zl.default.app(t).auth().Ga()}catch(t){return[]}}function ou(t,e,n,i,r,o){this.s=t,this.g=e,this.b=n,this.f=o,this.c=i||null,this.i=r||null,this.l=this.u=this.C=null,this.h=[],this.m=this.a=null}function au(t){var s=ti();return Js(t,Cs,{}).then(function(t){return t.authorizedDomains||[]}).then(function(t){t:{for(var e=(n=Cn(s)).c,n=n.a,i=0;i<t.length;i++){var r=t[i],o=n,a=e;if(o=0==r.indexOf("chrome-extension://")?Cn(r).a==o&&"chrome-extension"==a:("http"==a||"https"==a)&&(oi.test(r)?o==r:(r=r.split(".").join("\\."),new RegExp("^(.+\\."+r+"|"+r+")$","i").test(o)))){t=!0;break t}}t=!1}if(!t)throw new Mo(ti())})}function su(r){return r.m||(r.m=si().then(function(){var t,e,n,i;r.u||(t=r.c,e=r.i,n=ru(r.b),(i=new nu(r.s,r.g,r.b,r.f)).f=t,i.b=e,i.c=X(n||[]),r.u=i.toString()),r.v=new $s(r.u),function(i){if(!i.v)throw Error("IfcHandler must be initialized!");!function(t,e){t.sb.then(function(){t.a.register("authEvent",e,yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(i.v,function(t){var e={};if(t&&t.authEvent){var n=!1;for(t=Do(t.authEvent),e=0;e<i.h.length;e++)n=i.h[e](t)||n;return(e={}).status=n?"ACK":"ERROR",ye(e)}return e.status="ERROR",ye(e)})}(r)}),r.m)}function uu(t){return t.l||(t.C=t.c?gi(t.c,ru(t.b)):null,t.l=new qa(t.g,_(t.i),t.C),t.f&&Ya(t.l,t.f)),t.l}function cu(t,e,n,i,r,o,a,s,u,c,h,l){return(t=new iu(t,e,n,i,r,l)).l=o,t.g=a,t.i=s,t.b=ct(u||null),t.f=c,t.zb(h).toString()}function hu(t){if(this.a=t||Zl.default.INTERNAL.reactNative&&Zl.default.INTERNAL.reactNative.AsyncStorage,!this.a)throw new T("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}function lu(t){this.b=t,this.a={},this.f=b(this.c,this)}nu.prototype.toString=function(){return this.f?_n(this.a,"v",this.f):Kn(this.a.b,"v"),this.b?_n(this.a,"eid",this.b):Kn(this.a.b,"eid"),this.c.length?_n(this.a,"fw",this.c.join(",")):Kn(this.a.b,"fw"),this.a.toString()},iu.prototype.zb=function(t){return this.h=t,this},iu.prototype.toString=function(){var t;if(_n(t=this.v?Rn((t=Cn(this.v.url)).c,t.a,t.g,"/emulator/auth/handler"):Rn("https",this.u,null,"/__/auth/handler"),"apiKey",this.s),_n(t,"appName",this.c),_n(t,"authType",this.m),this.a.isOAuthProvider){var e=this.a;try{var n=Zl.default.app(this.c).auth().la()}catch(t){n=null}for(i in e.pb=n,_n(t,"providerId",this.a.providerId),e=Si((n=this.a).Jb))e[i]=e[i].toString();for(var i=n.Qc,e=ct(e),r=0;r<i.length;r++){var o=i[r];o in e&&delete e[o]}n.qb&&n.pb&&!e[n.qb]&&(e[n.qb]=n.pb),ut(e)||_n(t,"customParameters",ki(e))}if("function"==typeof this.a.Rb&&((n=this.a.Rb()).length&&_n(t,"scopes",n.join(","))),this.l?_n(t,"redirectUrl",this.l):Kn(t.b,"redirectUrl"),this.g?_n(t,"eventId",this.g):Kn(t.b,"eventId"),this.i?_n(t,"v",this.i):Kn(t.b,"v"),this.b)for(var a in this.b)this.b.hasOwnProperty(a)&&!On(t,a)&&_n(t,a,this.b[a]);return this.h?_n(t,"tid",this.h):Kn(t.b,"tid"),this.f?_n(t,"eid",this.f):Kn(t.b,"eid"),(a=ru(this.c)).length&&_n(t,"fw",a.join(",")),t.toString()},(t=ou.prototype).Pb=function(e,n,t){var i=new T("popup-closed-by-user"),r=new T("web-storage-unsupported"),o=this,a=!1;return this.ma().then(function(){var t,i;i={type:"webStorageSupport"},su(t=o).then(function(){return e=t.v,n=i,e.sb.then(function(){return new fe(function(t){e.a.send(n.type,n,t,yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})});var e,n}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport;throw Error()}).then(function(t){t||(e&&ii(e),n(r),a=!0)})}).o(function(){}).then(function(){if(!a)return n=e,new fe(function(e){return function t(){gn(2e3).then(function(){return n&&!n.closed?t():void e()})}()});var n}).then(function(){if(!a)return gn(t).then(function(){n(i)})})},t.Yb=function(){var t=bi();return!Ai(t)&&!Oi(t)},t.Ub=function(){return!1},t.Nb=function(e,t,n,i,r,o,a,s){if(!e)return we(new T("popup-blocked"));if(a&&!Ai())return this.ma().o(function(t){ii(e),r(t)}),i(),ye();this.a||(this.a=au(uu(this)));var u=this;return this.a.then(function(){var t=u.ma().o(function(t){throw ii(e),r(t),t});return i(),t}).then(function(){Co(n),a||ei(cu(u.s,u.g,u.b,t,n,null,o,u.c,void 0,u.i,s,u.f),e)}).o(function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t})},t.Ob=function(t,e,n,i){this.a||(this.a=au(uu(this)));var r=this;return this.a.then(function(){Co(e),ei(cu(r.s,r.g,r.b,t,e,ti(),n,r.c,void 0,r.i,i,r.f))}).o(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.ma=function(){var t=this;return su(this).then(function(){return t.v.sb}).o(function(){throw t.a=null,new T("network-request-failed")})},t.ac=function(){return!0},t.Ea=function(t){this.h.push(t)},t.Ta=function(e){B(this.h,function(t){return t==e})},(t=hu.prototype).get=function(t){return ye(this.a.getItem(t)).then(function(t){return t&&Ni(t)})},t.set=function(t,e){return ye(this.a.setItem(t,ki(e)))},t.U=function(t){return ye(this.a.removeItem(t))},t.ca=function(){},t.ia=function(){};var fu,du=[];function pu(t,e,n){ut(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[e]&&(t.a[e]=[]),t.a[e].push(n)}function vu(t){this.a=t}function mu(t){this.c=t,this.b=!1,this.a=[]}function gu(i,t,e,n){var r,o,a,s,u=e||{},c=null;if(i.b)return we(Error("connection_unavailable"));var h=n?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null;return new fe(function(e,n){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){n(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){n(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?e(t.data.response):n(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),n(Error("invalid_response"))))}},i.a.push(c),l.port1.addEventListener("message",o),i.c.postMessage({eventType:t,eventId:r,data:u},[l.port2])):n(Error("connection_unavailable"))}).then(function(t){return bu(i,c),t}).o(function(t){throw bu(i,c),t})}function bu(t,e){var n,i;e&&(n=e.messageChannel,i=e.onMessage,n&&(n.port1.removeEventListener("message",i),n.port1.close()),B(t.a,function(t){return t==e}))}function yu(){if(!Eu())throw new T("web-storage-unsupported");this.c={},this.a=[],this.b=0,this.m=l.indexedDB,this.type="indexedDB",this.g=this.v=this.f=this.l=null,this.s=!1,this.h=null;var t,e,n,i=this;hi()&&self?(this.v=(n=hi()?self:null,V(du,function(t){t.b==n&&(e=t)}),e||(e=new lu(n),du.push(e)),e),pu(this.v,"keyChanged",function(t,n){return _u(i).then(function(e){return 0<e.length&&V(i.a,function(t){t(e)}),{keyProcessed:K(e,n.key)}})}),pu(this.v,"ping",function(){return ye(["keyChanged"])})):((t=l.navigator)&&t.serviceWorker?ye().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).o(function(){return null}):ye(null)).then(function(t){(i.h=t)&&(i.g=new mu(new vu(t)),gu(i.g,"ping",null,!0).then(function(t){t[0].fulfilled&&K(t[0].value,"keyChanged")&&(i.s=!0)}).o(function(){}))})}function wu(r){return new fe(function(e,n){var t=r.m.open("firebaseLocalStorageDb",1);t.onerror=function(t){try{t.preventDefault()}catch(t){}n(Error(t.target.error))},t.onupgradeneeded=function(t){t=t.target.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}},t.onsuccess=function(t){var i;(t=t.target.result).objectStoreNames.contains("firebaseLocalStorage")?e(t):(i=r,new fe(function(t,e){var n=i.m.deleteDatabase("firebaseLocalStorageDb");n.onsuccess=function(){t()},n.onerror=function(t){e(Error(t.target.error))}}).then(function(){return wu(r)}).then(function(t){e(t)}).o(function(t){n(t)}))}})}function Iu(t){return t.i||(t.i=wu(t)),t.i}function Tu(r,t){var o=0;return new fe(function e(n,i){Iu(r).then(t).then(n).o(function(t){return 3<++o?void i(t):Iu(r).then(function(t){return t.close(),r.i=void 0,e(n,i)}).o(function(t){i(t)})})})}function Eu(){try{return l.indexedDB}catch(t){return}}function Au(t){return t.objectStore("firebaseLocalStorage")}function ku(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function Su(t){return new fe(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function Nu(t,e){return t.g&&t.h&&((n=l.navigator)&&n.serviceWorker&&n.serviceWorker.controller||null)===t.h?gu(t.g,"keyChanged",{key:e},t.s).then(function(){}).o(function(){}):ye();var n}function _u(i){return Iu(i).then(function(t){var r=Au(ku(t,!1));return r.getAll?Su(r.getAll()):new fe(function(e,n){var i=[],t=r.openCursor();t.onsuccess=function(t){(t=t.target.result)?(i.push(t.value),t.continue()):e(i)},t.onerror=function(t){n(t.target.error)}})}).then(function(t){var e={},n=[];if(0==i.b){for(n=0;n<t.length;n++)e[t[n].fbase_key]=t[n].value;n=function t(e,n){var i,r=[];for(i in e)i in n&&typeof e[i]==typeof n[i]?"object"==typeof e[i]&&null!=e[i]&&null!=n[i]?0<t(e[i],n[i]).length&&r.push(i):e[i]!==n[i]&&r.push(i):r.push(i);for(i in n)i in e||r.push(i);return r}(i.c,e),i.c=e}return n})}function Ou(t){t.l&&t.l.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Cu(t){var i=this,r=null;this.a=[],this.type="indexedDB",this.c=t,this.b=ye().then(function(){if(Eu()){var e=_i(),n="__sak"+e;return fu=fu||new yu,(r=fu).set(n,e).then(function(){return r.get(n)}).then(function(t){if(t!==e)throw Error("indexedDB not supported!");return r.U(n)}).then(function(){return r}).o(function(){return i.c})}return i.c}).then(function(t){return i.type=t.type,t.ca(function(e){V(i.a,function(t){t(e)})}),t})}function Ru(){this.a={},this.type="inMemory"}function Du(){if(!function(){var t="Node"==li();if(!(t=Pu()||t&&Zl.default.INTERNAL.node&&Zl.default.INTERNAL.node.localStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==li())throw new T("internal-error","The LocalStorage compatibility library was not found.");throw new T("web-storage-unsupported")}this.a=Pu()||Zl.default.INTERNAL.node.localStorage,this.type="localStorage"}function Pu(){try{var t=l.localStorage,e=_i();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function Lu(){this.type="nullStorage"}function xu(){if(!function(){var t="Node"==li();if(!(t=Mu()||t&&Zl.default.INTERNAL.node&&Zl.default.INTERNAL.node.sessionStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==li())throw new T("internal-error","The SessionStorage compatibility library was not found.");throw new T("web-storage-unsupported")}this.a=Mu()||Zl.default.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function Mu(){try{var t=l.sessionStorage,e=_i();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function ju(){var t={};t.Browser=Fu,t.Node=qu,t.ReactNative=Hu,t.Worker=Ku,this.a=t[li()]}lu.prototype.c=function(n){var e,i=n.data.eventType,r=n.data.eventId,t=this.a[i];t&&0<t.length&&(n.ports[0].postMessage({status:"ack",eventId:r,eventType:i,response:null}),e=[],V(t,function(t){e.push(ye().then(function(){return t(n.origin,n.data.data)}))}),Te(e).then(function(t){var e=[];V(t,function(t){e.push({fulfilled:t.Qb,value:t.value,reason:t.reason?t.reason.message:void 0})}),V(e,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:e})}))},vu.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},mu.prototype.close=function(){for(;0<this.a.length;)bu(this,this.a[0]);this.b=!0},(t=yu.prototype).set=function(i,r){var o=this,a=!1;return Tu(this,function(t){return Su((t=Au(ku(t,!0))).get(i))}).then(function(n){return Tu(o,function(t){if(t=Au(ku(t,!0)),n)return n.value=r,Su(t.put(n));o.b++,a=!0;var e={};return e.fbase_key=i,e.value=r,Su(t.add(e))})}).then(function(){return o.c[i]=r,Nu(o,i)}).oa(function(){a&&o.b--})},t.get=function(e){return Tu(this,function(t){return Su(Au(ku(t,!1)).get(e))}).then(function(t){return t&&t.value})},t.U=function(e){var n=this,i=!1;return Tu(this,function(t){return i=!0,n.b++,Su(Au(ku(t,!0)).delete(e))}).then(function(){return delete n.c[e],Nu(n,e)}).oa(function(){i&&n.b--})},t.ca=function(t){var n;0==this.a.length&&(Ou(n=this),function e(){n.f=setTimeout(function(){n.l=_u(n).then(function(e){0<e.length&&V(n.a,function(t){t(e)})}).then(function(){e()}).o(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()),this.a.push(t)},t.ia=function(e){B(this.a,function(t){return t==e}),0==this.a.length&&Ou(this)},(t=Cu.prototype).get=function(e){return this.b.then(function(t){return t.get(e)})},t.set=function(e,n){return this.b.then(function(t){return t.set(e,n)})},t.U=function(e){return this.b.then(function(t){return t.U(e)})},t.ca=function(t){this.a.push(t)},t.ia=function(e){B(this.a,function(t){return t==e})},(t=Ru.prototype).get=function(t){return ye(this.a[t])},t.set=function(t,e){return this.a[t]=e,ye()},t.U=function(t){return delete this.a[t],ye()},t.ca=function(){},t.ia=function(){},(t=Du.prototype).get=function(t){var e=this;return ye().then(function(){return Ni(e.a.getItem(t))})},t.set=function(e,n){var i=this;return ye().then(function(){var t=ki(n);null===t?i.U(e):i.a.setItem(e,t)})},t.U=function(t){var e=this;return ye().then(function(){e.a.removeItem(t)})},t.ca=function(t){l.window&&Qe(l.window,"storage",t)},t.ia=function(t){l.window&&nn(l.window,"storage",t)},(t=Lu.prototype).get=function(){return ye(null)},t.set=function(){return ye()},t.U=function(){return ye()},t.ca=function(){},t.ia=function(){},(t=xu.prototype).get=function(t){var e=this;return ye().then(function(){return Ni(e.a.getItem(t))})},t.set=function(e,n){var i=this;return ye().then(function(){var t=ki(n);null===t?i.U(e):i.a.setItem(e,t)})},t.U=function(t){var e=this;return ye().then(function(){e.a.removeItem(t)})},t.ca=function(){},t.ia=function(){};var Uu,Vu,Fu={F:Du,cb:xu},qu={F:Du,cb:xu},Hu={F:hu,cb:Lu},Ku={F:Du,cb:Lu},Gu={rd:"local",NONE:"none",td:"session"};function Bu(){var t=!(Oi(bi())||!ci()),e=Ai(),n=wi();this.m=t,this.h=e,this.l=n,this.a={},t=Uu=Uu||new ju;try{this.g=!Qn()&&xi()||!l.indexedDB?new t.a.F:new Cu(new(hi()?Ru:t.a.F))}catch(t){this.g=new Ru,this.h=!0}try{this.i=new t.a.cb}catch(t){this.i=new Ru}this.v=new Ru,this.f=b(this.Zb,this),this.b={}}function Wu(){return Vu=Vu||new Bu}function Xu(t,e){switch(e){case"session":return t.i;case"none":return t.v;default:return t.g}}function Ju(t,e){return"firebase:"+t.name+(e?":"+e:"")}function Yu(t,e,n){return n=Ju(e,n),"local"==e.F&&(t.b[n]=null),Xu(t,e.F).U(n)}function zu(t){t.c&&(clearInterval(t.c),t.c=null)}function $u(t){this.a=t,this.b=Wu()}(t=Bu.prototype).get=function(t,e){return Xu(this,t.F).get(Ju(t,e))},t.set=function(e,t,n){var i=Ju(e,n),r=this,o=Xu(this,e.F);return o.set(i,t).then(function(){return o.get(i)}).then(function(t){"local"==e.F&&(r.b[i]=t)})},t.addListener=function(t,e,n){var i;t=Ju(t,e),this.l&&(this.b[t]=l.localStorage.getItem(t)),ut(this.a)&&(Xu(this,"local").ca(this.f),this.h||(Qn()||!xi())&&l.indexedDB||!this.l||(zu(i=this),i.c=setInterval(function(){for(var t in i.a){var e=l.localStorage.getItem(t),n=i.b[t];e!=n&&(i.b[t]=e,e=new He({type:"storage",key:t,target:window,oldValue:n,newValue:e,a:!0}),i.Zb(e))}},1e3))),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=Ju(t,e),this.a[t]&&(B(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),ut(this.a)&&(Xu(this,"local").ia(this.f),zu(this))},t.Zb=function(t){if(t&&t.g){var e=t.a.key;if(null==e)for(var n in this.a){var i=this.b[n];void 0===i&&(i=null);var r=l.localStorage.getItem(n);r!==i&&(this.b[n]=r,this.nb(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?Xu(this,"local").ia(this.f):zu(this),this.m)if(n=l.localStorage.getItem(e),(i=t.a.newValue)!==n)null!==i?l.localStorage.setItem(e,i):l.localStorage.removeItem(e);else if(this.b[e]===i&&void 0===t.a.a)return;var o=this,n=function(){void 0===t.a.a&&o.b[e]===l.localStorage.getItem(e)||(o.b[e]=l.localStorage.getItem(e),o.nb(e))};Ht&&Zt&&10==Zt&&l.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else V(t,b(this.nb,this))},t.nb=function(t){this.a[t]&&V(this.a[t],function(t){t()})};var Zu,Qu={name:"authEvent",F:"local"};function tc(){this.a=Wu()}function ec(t,e){this.b=nc,this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.l=l.Int32Array?new Int32Array(64):Array(64),void 0===Zu&&(Zu=l.Int32Array?new Int32Array(cc):cc),this.reset()}w(ec,function(){this.b=-1});for(var nc=64,ic=nc-1,rc=[],oc=0;oc<ic;oc++)rc[oc]=0;var ac=W(128,rc);function sc(t){for(var e=t.f,n=t.l,i=0,r=0;r<e.length;)n[i++]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r=4*i;for(e=16;e<64;e++){var r=0|n[e-15],i=0|n[e-2],o=(0|n[e-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|n[e-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0;n[e]=o+a|0}i=0|t.a[0],r=0|t.a[1];var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6];for(o=0|t.a[7],e=0;e<64;e++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0;a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|Zu[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function uc(t,e,n){void 0===n&&(n=e.length);var i=0,r=t.c;if("string"==typeof e)for(;i<n;)t.f[r++]=e.charCodeAt(i++),r==t.b&&(sc(t),r=0);else{if(!p(e))throw Error("message must be string or array");for(;i<n;){var o=e[i++];if(!("number"==typeof o&&0<=o&&o<=255&&o==(0|o)))throw Error("message must be a byte array");t.f[r++]=o,r==t.b&&(sc(t),r=0)}}t.c=r,t.g+=n}ec.prototype.reset=function(){this.g=this.c=0,this.a=l.Int32Array?new Int32Array(this.h):X(this.h)};var cc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function hc(){ec.call(this,8,lc)}w(hc,ec);var lc=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function fc(t,e,n,i,r,o){this.v=t,this.i=e,this.l=n,this.m=i||null,this.u=r||null,this.s=o,this.h=e+":"+n,this.C=new tc,this.g=new $u(this.h),this.f=null,this.b=[],this.a=this.c=null}function dc(t){return new T("invalid-cordova-configuration",t)}function pc(t){var e=new hc;uc(e,t),t=[];var n=8*e.g;e.c<56?uc(e,ac,56-e.c):uc(e,ac,e.b-(e.c-56));for(var i=63;56<=i;i--)e.f[i]=255&n,n/=256;for(sc(e),i=n=0;i<e.i;i++)for(var r=24;0<=r;r-=8)t[n++]=e.a[i]>>r&255;return q(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}function vc(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function mc(s){return s.f||(s.f=s.ma().then(function(){return new fe(function(n){function e(i){t=!0,a&&a.cancel(),gc(r).then(function(t){var e,n=o;t&&i&&i.url&&(e=null,n=(e=-1!=(n=Yr(i.url)).indexOf("/__/auth/callback")?(e="object"==typeof(e=Ni(On(e=Cn(n),"firebaseError")||null))?E(e):null)?new Ro(t.c,t.b,null,null,e,null,t.T()):new Ro(t.c,t.b,n,t.f,null,null,t.T()):e)||o),vc(r,n)})}var r,o,t,a,i;s.Ea(function t(e){return n(e),s.Ta(t),!1}),r=s,o=new Ro("unknown",null,null,null,new T("no-auth-event")),t=!1,a=gn(500).then(function(){return gc(r).then(function(){t||vc(r,o)})}),i=l.handleOpenURL,l.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(yi("BuildInfo.packageName",l).toLowerCase()+"://")&&e({url:t}),"function"==typeof i)try{i(t)}catch(t){console.error(t)}},xo=xo||new Po,function(t){var n=xo;n.a.push(t),n.b||(n.b=function(t){for(var e=0;e<n.a.length;e++)n.a[e](t)},"function"==typeof(t=yi("universalLinks.subscribe",l))&&t(null,n.b))}(e)})})),s.f}function gc(e){var t,n=null;return(t=e.g).b.get(Qu,t.a).then(Do).then(function(t){return n=t,Yu((t=e.g).b,Qu,t.a)}).then(function(){return n})}function bc(t){this.a=t,this.b=Wu()}(t=fc.prototype).ma=function(){return this.Ia||(this.Ia=(ui(void 0)?si().then(function(){return new fe(function(t,e){var n=l.document,i=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3);n.addEventListener("deviceready",function(){clearTimeout(i),t()},!1)})}):we(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof yi("universalLinks.subscribe",l))throw dc("cordova-universal-links-plugin-fix is not installed");if(void 0===yi("BuildInfo.packageName",l))throw dc("cordova-plugin-buildinfo is not installed");if("function"!=typeof yi("cordova.plugins.browsertab.openUrl",l))throw dc("cordova-plugin-browsertab is not installed");if("function"!=typeof yi("cordova.InAppBrowser.open",l))throw dc("cordova-plugin-inappbrowser is not installed")},function(){throw new T("cordova-not-ready")}))},t.Pb=function(t,e){return e(new T("operation-not-supported-in-this-environment")),ye()},t.Nb=function(){return we(new T("operation-not-supported-in-this-environment"))},t.ac=function(){return!1},t.Yb=function(){return!0},t.Ub=function(){return!0},t.Ob=function(t,e,n,i){if(this.c)return we(new T("redirect-operation-pending"));var r=this,o=l.document,a=null,s=null,u=null,c=null;return this.c=ye().then(function(){return Co(e),mc(r)}).then(function(){return function(n,t,e,i,r){var o=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}(),a=new Ro(t,i,null,o,new T("no-auth-event"),null,r),s=yi("BuildInfo.packageName",l);if("string"!=typeof s)throw new T("invalid-cordova-configuration");var u=yi("BuildInfo.displayName",l),c={};if(bi().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=s;else{if(!bi().toLowerCase().match(/android/))return we(new T("operation-not-supported-in-this-environment"));c.apn=s}u&&(c.appDisplayName=u),o=pc(o),c.sessionId=o;var h=cu(n.v,n.i,n.l,t,e,null,i,n.m,c,n.u,r,n.s);return n.ma().then(function(){var t=n.h;return n.C.a.set(Qu,a.w(),t)}).then(function(){var t=yi("cordova.plugins.browsertab.isAvailable",l);if("function"!=typeof t)throw new T("invalid-cordova-configuration");var e=null;t(function(t){if(t){if("function"!=typeof(e=yi("cordova.plugins.browsertab.openUrl",l)))throw new T("invalid-cordova-configuration");e(h)}else{if("function"!=typeof(e=yi("cordova.InAppBrowser.open",l)))throw new T("invalid-cordova-configuration");t=bi(),n.a=e(h,t.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n,i)}).then(function(){return new fe(function(e,t){s=function(){var t=yi("cordova.plugins.browsertab.close",l);return e(),"function"==typeof t&&t(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.Ea(s),u=function(){a=a||gn(2e3).then(function(){t(new T("redirect-cancelled-by-user"))})},c=function(){Di()&&u()},o.addEventListener("resume",u,!1),bi().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",c,!1)}).o(function(t){return gc(r).then(function(){throw t})})}).oa(function(){u&&o.removeEventListener("resume",u,!1),c&&o.removeEventListener("visibilitychange",c,!1),a&&a.cancel(),s&&r.Ta(s),r.c=null})},t.Ea=function(e){this.b.push(e),mc(this).o(function(t){"auth/invalid-cordova-configuration"===t.code&&(t=new Ro("unknown",null,null,null,new T("no-auth-event")),e(t))})},t.Ta=function(e){B(this.b,function(t){return t==e})};var yc={name:"pendingRedirect",F:"session"};function wc(t){return Yu(t.b,yc,t.a)}function Ic(t,e,n,i){this.i={},this.u=0,this.D=t,this.v=e,this.m=n,this.J=i,this.h=[],this.f=!1,this.l=b(this.s,this),this.b=new Mc,this.C=new qc,this.g=new bc(Lc(this.v,this.m)),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.C,this.c.linkViaPopup=this.C,this.c.reauthViaPopup=this.C,this.a=Tc(this.D,this.v,this.m,A,this.J)}function Tc(t,e,n,i,r){var o=Zl.default.SDK_VERSION||null;return new(ui()?fc:ou)(t,e,n,o,i,r)}function Ec(e){e.f||(e.f=!0,e.a.Ea(e.l));var n=e.a;return e.a.ma().o(function(t){throw e.a==n&&e.reset(),t})}function Ac(n){n.a.Yb()&&Ec(n).o(function(t){var e=new Ro("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));Cc(t)&&n.s(e)}),n.a.Ub()||jc(n.b)}function kc(n,t){K(n.h,t)||n.h.push(t),n.f||(t=n.g).b.get(yc,t.a).then(function(t){return"pending"==t}).then(function(t){t?wc(n.g).then(function(){Ec(n).o(function(t){var e=new Ro("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));Cc(t)&&n.s(e)})}):Ac(n)}).o(function(){Ac(n)})}function Sc(t,e){B(t.h,function(t){return t==e})}Ic.prototype.reset=function(){this.f=!1,this.a.Ta(this.l),this.a=Tc(this.D,this.v,this.m,null,this.J),this.i={}},Ic.prototype.s=function(t){if(!t)throw new T("invalid-auth-event");if(6e5<=Date.now()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1;for(var e=!1,n=0;n<this.h.length;n++){var i=this.h[n];if(i.Gb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=Date.now())),e=!0;break}}return jc(this.b),e};var Nc=new Ri(2e3,1e4),_c=new Ri(3e4,6e4);function Oc(t,e,n,i,r,o,a){return t.a.Nb(e,n,i,function(){t.f||(t.f=!0,t.a.Ea(t.l))},function(){t.reset()},r,o,a)}function Cc(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function Rc(e,t,n,i,r){var o,a;return(a=e.g).b.set(yc,"pending",a.a).then(function(){return e.a.Ob(t,n,i,r).o(function(t){if(Cc(t))throw new T("operation-not-supported-in-this-environment");return o=t,wc(e.g).then(function(){throw o})}).then(function(){return e.a.ac()?new fe(function(){}):wc(e.g).then(function(){return e.ra()}).then(function(){}).o(function(){})})})}function Dc(t,e,n,i,r){return t.a.Pb(i,function(t){e.na(n,null,t,r)},Nc.get())}Ic.prototype.ra=function(){return this.b.ra()};var Pc={};function Lc(t,e,n){return t=t+":"+e,t=n?t+":"+n.url:t}function xc(t,e,n,i){var r=Lc(e,n,i);return Pc[r]||(Pc[r]=new Ic(t,e,n,i)),Pc[r]}function Mc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function jc(t){t.g||(t.g=!0,Fc(t,!1,null,null))}function Uc(t){t.g&&!t.i&&Fc(t,!1,null,null)}function Vc(t,e){if(t.b=function(){return ye(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function Fc(t,e,n,i){e?i?function(t,e){if(t.b=function(){return we(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,i):Vc(t,n):Vc(t,{user:null}),t.f=[],t.c=[]}function qc(){}function Hc(){this.jb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.jb},set:function(t){this.jb=t},enumerable:!1})}function Kc(t,e){this.a=e,Fi(this,"verificationId",t)}function Gc(t,e,n,i){return new No(t).gb(e,n).then(function(t){return new Kc(t,i)})}function Bc(t){var e=xr(t);if(!(e&&e.exp&&e.auth_time&&e.iat))throw new T("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");qi(this,{token:t,expirationTime:Li(1e3*e.exp),authTime:Li(1e3*e.auth_time),issuedAtTime:Li(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,signInSecondFactor:e.firebase&&e.firebase.sign_in_second_factor?e.firebase.sign_in_second_factor:null,claims:e})}function Wc(t,e,n){var i=e&&e[Jc];if(!i)throw new T("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=t,this.f=ct(e),this.g=n,this.c=new zr(null,i),this.b=[];var r=this;V(e[Xc]||[],function(t){(t=Bi(t))&&r.b.push(t)}),Fi(this,"auth",this.a),Fi(this,"session",this.c),Fi(this,"hints",this.b)}Mc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},Mc.prototype.h=function(t,e){var n,i,r,o;t?(this.reset(),this.g=!0,n=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code,this.i=!(!r&&!o),"unknown"!=n||r||o?t.a?(Fc(this,!0,null,t.a),ye()):e.Fa(n,i)?function(e,t,n){n=n.Fa(t.c,t.b);var i=t.g,r=t.f,o=t.i,a=t.T(),s=!!t.c.match(/Redirect$/);n(i,r,a,o).then(function(t){Fc(e,s,t,null)}).o(function(t){Fc(e,s,null,t)})}(this,t,e):we(new T("invalid-auth-event")):(Fc(this,!1,null,null),ye())):we(new T("invalid-auth-event"))},Mc.prototype.ra=function(){var r=this;return new fe(function(t,e){var n,i;r.b?r.b().then(t,e):(r.f.push(t),r.c.push(e),n=r,i=new T("timeout"),n.a&&n.a.cancel(),n.a=gn(_c.get()).then(function(){n.b||(n.g=!0,Fc(n,!0,null,i))}))})},qc.prototype.h=function(t,e){var n,i,r,o,a;t?(n=t.c,i=t.b,t.a?(e.na(t.c,null,t.a,t.b),ye()):e.Fa(n,i)?(r=e,o=(t=t).b,a=t.c,r.Fa(a,o)(t.g,t.f,t.T(),t.i).then(function(t){r.na(a,t,null,o)}).o(function(t){r.na(a,null,t,o)})):we(new T("invalid-auth-event"))):we(new T("invalid-auth-event"))},Kc.prototype.confirm=function(t){return t=_o(this.verificationId,t),this.a(t)};var Xc="mfaInfo",Jc="mfaPendingCredential";function Yc(t,e,n,i){T.call(this,"multi-factor-auth-required",i,e),this.b=new Wc(t,e,n),Fi(this,"resolver",this.b)}function zc(t,e,n){if(t&&m(t.serverResponse)&&"auth/multi-factor-auth-required"===t.code)try{return new Yc(e,t.serverResponse,n,t.message)}catch(t){}return null}function $c(){}function Zc(t){Fi(this,"factorId",t.fa),this.a=t}function Qc(t){if(Zc.call(this,t),this.a.fa!=No.PROVIDER_ID)throw new T("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")}function th(t,e){for(var n in qe.call(this,t),e)this[n]=e[n]}function eh(t,e){this.a=t,this.b=[],this.c=b(this.yc,this),Qe(this.a,"userReloaded",this.c);var i=[];e&&e.multiFactor&&e.multiFactor.enrolledFactors&&V(e.multiFactor.enrolledFactors,function(t){var e=null,n={};if(t){t.uid&&(n[Ji]=t.uid),t.displayName&&(n[Wi]=t.displayName),t.enrollmentTime&&(n[Xi]=new Date(t.enrollmentTime).toISOString()),t.phoneNumber&&(n[Yi]=t.phoneNumber);try{e=new zi(n)}catch(t){}t=e}else t=null;t&&i.push(t)}),nh(this,i)}function nh(t,e){t.b=e,Fi(t,"enrolledFactors",e)}function ih(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function rh(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}function oh(t){this.f=t,this.b=this.a=null,this.c=Date.now()}function ah(t,e){void 0===e&&(e=t.b?(e=t.b).a-e.g:0),t.c=Date.now()+1e3*e}function sh(t,e){t.b=Lr(e[Ka]||""),t.a=e.refreshToken,ah(t,void 0!==(e=e.expiresIn)?Number(e):void 0)}function uh(e,t){return i=e.f,r=t,new fe(function(e,n){"refresh_token"==r.grant_type&&r.refresh_token||"authorization_code"==r.grant_type&&r.code?Za(i,i.l+"?key="+encodeURIComponent(i.c),function(t){t?t.error?n(zs(t)):t.access_token&&t.refresh_token?e(t):n(new T("internal-error")):n(new T("network-request-failed"))},"POST",Hn(r).toString(),i.g,i.m.get()):n(new T("internal-error"))}).then(function(t){return e.b=Lr(t.access_token),e.a=t.refresh_token,ah(e,t.expires_in),{accessToken:e.b.toString(),refreshToken:e.a}}).o(function(t){throw"auth/user-token-expired"==t.code&&(e.a=null),t});var i,r}function ch(t,e){this.a=t||null,this.b=e||null,qi(this,{lastSignInTime:Li(e||null),creationTime:Li(t||null)})}function hh(t,e,n,i,r,o){qi(this,{uid:t,displayName:i||null,photoURL:r||null,email:n||null,phoneNumber:o||null,providerId:e})}function lh(t,e,n){this.N=[],this.l=t.apiKey,this.m=t.appName,this.s=t.authDomain||null;var i,r=Zl.default.SDK_VERSION?gi(Zl.default.SDK_VERSION):null;this.a=new qa(this.l,_(A),r),(this.u=t.emulatorConfig||null)&&Ya(this.a,this.u),this.h=new oh(this.a),wh(this,e[Ka]),sh(this.h,e),Fi(this,"refreshToken",this.h.a),Eh(this,n||{}),fn.call(this),this.P=!1,this.s&&Ii()&&(this.b=xc(this.s,this.l,this.m,this.u)),this.W=[],this.i=null,this.D=(i=this,new ih(function(){return i.I(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var t=i.h.c-Date.now()-3e5;return 0<t?t:0})),this.ba=b(this.ib,this);var o=this;this.za=null,this.Pa=function(t){o.xa(t.h)},this.qa=null,this.Ba=function(t){fh(o,t.c)},this.$=null,this.aa=[],this.Oa=function(t){vh(o,t.f)},this.ja=null,this.S=new eh(this,n),Fi(this,"multiFactor",this.S)}function fh(t,e){t.u=e,Ya(t.a,e),t.b&&(e=t.b,t.b=xc(t.s,t.l,t.m,t.u),t.P&&(Sc(e,t),kc(t.b,t)))}function dh(t,e){t.qa&&nn(t.qa,"languageCodeChanged",t.Pa),(t.qa=e)&&Qe(e,"languageCodeChanged",t.Pa)}function ph(t,e){t.$&&nn(t.$,"emulatorConfigChanged",t.Ba),(t.$=e)&&Qe(e,"emulatorConfigChanged",t.Ba)}function vh(t,e){t.aa=e,$a(t.a,Zl.default.SDK_VERSION?gi(Zl.default.SDK_VERSION,t.aa):null)}function mh(t,e){t.ja&&nn(t.ja,"frameworkChanged",t.Oa),(t.ja=e)&&Qe(e,"frameworkChanged",t.Oa)}function gh(e){try{return Zl.default.app(e.m).auth()}catch(t){throw new T("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+e.m+"'!")}}function bh(t){t.J||t.D.b||(t.D.start(),nn(t,"tokenChanged",t.ba),Qe(t,"tokenChanged",t.ba))}function yh(t){nn(t,"tokenChanged",t.ba),t.D.stop()}function wh(t,e){t.Aa=e,Fi(t,"_lat",e)}function Ih(t){for(var e=[],n=0;n<t.W.length;n++)e.push(t.W[n](t));return Te(e).then(function(){return t})}function Th(t){t.b&&!t.P&&(t.P=!0,kc(t.b,t))}function Eh(t,e){qi(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,tenantId:e.tenantId||null,metadata:new ch(e.createdAt,e.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Ah(){}function kh(t){return ye().then(function(){if(t.J)throw new T("app-deleted")})}function Sh(t){return q(t.providerData,function(t){return t.providerId})}function Nh(t,e){e&&(_h(t,e.providerId),t.providerData.push(e))}function _h(t,e){B(t.providerData,function(t){return t.providerId==e})}function Oh(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&Fi(t,e,n)}function Ch(e,t){var n,i;e!=t&&(qi(e,{uid:t.uid,displayName:t.displayName,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified,phoneNumber:t.phoneNumber,isAnonymous:t.isAnonymous,tenantId:t.tenantId,providerData:[]}),t.metadata?Fi(e,"metadata",new ch((i=t.metadata).a,i.b)):Fi(e,"metadata",new ch),V(t.providerData,function(t){Nh(e,t)}),n=e.h,i=t.h,n.b=i.b,n.a=i.a,n.c=i.c,Fi(e,"refreshToken",e.h.a),nh(e.S,t.S.b))}function Rh(i){return i.I().then(function(t){var e,n=i.isAnonymous;return Js((e=i).a,ks,{idToken:t}).then(b(e.Kc,e)).then(function(){return n||Oh(i,"isAnonymous",!1),t})})}function Dh(t,e){e[Ka]&&t.Aa!=e[Ka]&&(sh(t.h,e),t.dispatchEvent(new th("tokenChanged")),wh(t,e[Ka]),Oh(t,"refreshToken",t.h.a))}function Ph(t,e){return Rh(t).then(function(){if(K(Sh(t),e))return Ih(t).then(function(){throw new T("provider-already-linked")})})}function Lh(t,e,n){return Hi({user:t,credential:Oo(e),additionalUserInfo:e=Fr(e),operationType:n})}function xh(t,e){return Dh(t,e),t.reload().then(function(){return t})}function Mh(n,i,t,e,r){if(!Ii())return we(new T("operation-not-supported-in-this-environment"));if(n.i&&!r)return we(n.i);var o=Vr(t.providerId),a=_i(n.uid+":::"),s=null,u=ri(s=(!Ai()||ci())&&n.s&&t.isOAuthProvider?cu(n.s,n.l,n.m,i,t,null,a,Zl.default.SDK_VERSION||null,null,null,n.tenantId,n.u):s,o&&o.va,o&&o.ua);return e=e().then(function(){if(Uh(n),!r)return n.I().then(function(){})}).then(function(){return Oc(n.b,u,i,t,a,!!s,n.tenantId)}).then(function(){return new fe(function(t,e){n.na(i,null,new T("cancelled-popup-request"),n.g||null),n.f=t,n.C=e,n.g=a,n.c=Dc(n.b,n,i,u,a)})}).then(function(t){return u&&ii(u),t?Hi(t):null}).o(function(t){throw u&&ii(u),t}),Vh(n,e,r)}function jh(e,t,n,i,r){if(!Ii())return we(new T("operation-not-supported-in-this-environment"));if(e.i&&!r)return we(e.i);var o=null,a=_i(e.uid+":::");return i=i().then(function(){if(Uh(e),!r)return e.I().then(function(){})}).then(function(){return e.ga=a,Ih(e)}).then(function(t){return t=e.ha?(t=e.ha).b.set(Hh,e.w(),t.a):t}).then(function(){return Rc(e.b,t,n,a,e.tenantId)}).o(function(t){if(o=t,e.ha)return Kh(e.ha);throw o}).then(function(){if(o)throw o}),Vh(e,i,r)}function Uh(t){if(!t.b||!t.P){if(t.b&&!t.P)throw new T("internal-error");throw new T("auth-domain-config-required")}}function Vh(n,t,e){var i,r=(t=t,e=e,(i=n).i&&!e?(t.cancel(),we(i.i)):t.o(function(t){throw!t||"auth/user-disabled"!=t.code&&"auth/user-token-expired"!=t.code||(i.i||i.dispatchEvent(new th("userInvalidated")),i.i=t),t}));return n.N.push(r),r.oa(function(){G(n.N,r)}),r.o(function(t){var e=null;throw(e=t&&"auth/multi-factor-auth-required"===t.code?zc(t.w(),gh(n),b(n.jc,n)):e)||t})}function Fh(t){if(!t.apiKey)return null;var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName,emulatorConfig:t.emulatorConfig},n={};if(!t.stsTokenManager||!t.stsTokenManager.accessToken)return null;n[Ka]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null;var i=t.stsTokenManager.expirationTime;i&&(n.expiresIn=(i-Date.now())/1e3);var r=new lh(e,n,t);return t.providerData&&V(t.providerData,function(t){t&&Nh(r,Hi(t))}),t.redirectEventId&&(r.ga=t.redirectEventId),r}function qh(t){this.a=t,this.b=Wu()}Wc.prototype.Rc=function(t){var n=this;return t.tb(this.a.a,this.c).then(function(t){var e=ct(n.f);return delete e[Xc],delete e[Jc],lt(e,t),n.g(e)})},w(Yc,T),$c.prototype.tb=function(t,e,n){return e.type==$r?(o=this,a=t,s=n,e.Ha().then(function(t){return t={idToken:t},void 0!==s&&(t.displayName=s),lt(t,{phoneVerificationInfo:So(o.a)}),Js(a,Es,t)})):(i=this,r=t,e.Ha().then(function(t){return lt(t={mfaPendingCredential:t},{phoneVerificationInfo:So(i.a)}),Js(r,As,t)}));var i,r,o,a,s},w(Zc,$c),w(Qc,Zc),w(th,qe),(t=eh.prototype).yc=function(t){var e;nh(this,(t=t.hd,e=[],V(t.mfaInfo||[],function(t){(t=Bi(t))&&e.push(t)}),e))},t.Sb=function(){return this.a.I().then(function(t){return new zr(t,null)})},t.fc=function(e,n){var i=this,r=this.a.a;return this.Sb().then(function(t){return e.tb(r,t,n)}).then(function(t){return Dh(i.a,t),i.a.reload()})},t.bd=function(t){var n=this,i="string"==typeof t?t:t.uid,e=this.a.a;return this.a.I().then(function(t){return Js(e,Xs,{idToken:t,mfaEnrollmentId:i})}).then(function(t){var e=F(n.b,function(t){return t.uid!=i});return nh(n,e),Dh(n.a,t),n.a.reload().o(function(t){if("auth/user-token-expired"!=t.code)throw t})})},t.w=function(){return{multiFactor:{enrolledFactors:q(this.b,function(t){return t.w()})}}},ih.prototype.start=function(){this.a=this.c,function e(n,t){n.stop();n.b=gn(rh(n,t)).then(Pi).then(function(){return n.h()}).then(function(){e(n,!0)}).o(function(t){n.i(t)&&e(n,!1)})}(this,!0)},ih.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},oh.prototype.w=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}},oh.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?we(new T("user-token-expired")):t||!this.b||Date.now()>this.c-3e4?this.a?uh(this,{grant_type:"refresh_token",refresh_token:this.a}):ye(null):ye({accessToken:this.b.toString(),refreshToken:this.a})},ch.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},w(lh,fn),lh.prototype.xa=function(t){this.za=t,Ja(this.a,t)},lh.prototype.la=function(){return this.za},lh.prototype.Ga=function(){return X(this.aa)},lh.prototype.ib=function(){this.D.b&&(this.D.stop(),this.D.start())},Fi(lh.prototype,"providerId","firebase"),(t=lh.prototype).reload=function(){var t=this;return Vh(this,kh(this).then(function(){return Rh(t).then(function(){return Ih(t)}).then(Ah)}))},t.oc=function(t){return this.I(t).then(function(t){return new Bc(t)})},t.I=function(t){var e=this;return Vh(this,kh(this).then(function(){return e.h.getToken(t)}).then(function(t){if(!t)throw new T("internal-error");return t.accessToken!=e.Aa&&(wh(e,t.accessToken),e.dispatchEvent(new th("tokenChanged"))),Oh(e,"refreshToken",t.refreshToken),t.accessToken}))},t.Kc=function(t){if(!(t=t.users)||!t.length)throw new T("internal-error");Eh(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId});for(var e,n=(e=(e=t).providerUserInfo)&&e.length?q(e,function(t){return new hh(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[],i=0;i<n.length;i++)Nh(this,n[i]);Oh(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length)),this.dispatchEvent(new th("userReloaded",{hd:t}))},t.Lc=function(t){return Ui("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.ub(t)},t.ub=function(t){var e=this,n=null;return Vh(this,t.c(this.a,this.uid).then(function(t){return Dh(e,t),n=Lh(e,t,"reauthenticate"),e.i=null,e.reload()}).then(function(){return n}),!0)},t.Cc=function(t){return Ui("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.rb(t)},t.rb=function(e){var n=this,i=null;return Vh(this,Ph(this,e.providerId).then(function(){return n.I()}).then(function(t){return e.b(n.a,t)}).then(function(t){return i=Lh(n,t,"link"),xh(n,t)}).then(function(){return i}))},t.Dc=function(t,e){var n=this;return Vh(this,Ph(this,"phone").then(function(){return Gc(gh(n),t,e,b(n.rb,n))}))},t.Mc=function(t,e){var n=this;return Vh(this,ye().then(function(){return Gc(gh(n),t,e,b(n.ub,n))}),!0)},t.Cb=function(e){var n=this;return Vh(this,this.I().then(function(t){return n.a.Cb(t,e)}).then(function(t){return Dh(n,t),n.reload()}))},t.ed=function(e){var n=this;return Vh(this,this.I().then(function(t){return e.b(n.a,t)}).then(function(t){return Dh(n,t),n.reload()}))},t.Db=function(e){var n=this;return Vh(this,this.I().then(function(t){return n.a.Db(t,e)}).then(function(t){return Dh(n,t),n.reload()}))},t.Eb=function(e){if(void 0===e.displayName&&void 0===e.photoURL)return kh(this);var n=this;return Vh(this,this.I().then(function(t){return n.a.Eb(t,{displayName:e.displayName,photoUrl:e.photoURL})}).then(function(t){return Dh(n,t),Oh(n,"displayName",t.displayName||null),Oh(n,"photoURL",t.photoUrl||null),V(n.providerData,function(t){"password"===t.providerId&&(Fi(t,"displayName",n.displayName),Fi(t,"photoURL",n.photoURL))}),Ih(n)}).then(Ah))},t.cd=function(e){var n=this;return Vh(this,Rh(this).then(function(t){return K(Sh(n),e)?Js(n.a,ws,{idToken:t,deleteProvider:[e]}).then(function(t){var e={};return V(t.providerUserInfo||[],function(t){e[t.providerId]=!0}),V(Sh(n),function(t){e[t]||_h(n,t)}),e[No.PROVIDER_ID]||Fi(n,"phoneNumber",null),Ih(n)}):Ih(n).then(function(){throw new T("no-such-provider")})}))},t.delete=function(){var e=this;return Vh(this,this.I().then(function(t){return Js(e.a,ys,{idToken:t})}).then(function(){e.dispatchEvent(new th("userDeleted"))})).then(function(){for(var t=0;t<e.N.length;t++)e.N[t].cancel("app-deleted");dh(e,null),ph(e,null),mh(e,null),e.N=[],e.J=!0,yh(e),Fi(e,"refreshToken",null),e.b&&Sc(e.b,e)})},t.Gb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.ga||null)==e||"reauthViaRedirect"==t&&(this.ga||null)==e)},t.na=function(t,e,n,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.g||null)||(n&&this.C?this.C(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)},t.Fa=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?b(this.Lb,this):"reauthViaPopup"==t&&e==(this.g||null)?b(this.Mb,this):"linkViaRedirect"==t&&(this.ga||null)==e?b(this.Lb,this):"reauthViaRedirect"==t&&(this.ga||null)==e?b(this.Mb,this):null},t.Ec=function(t){var e=this;return Mh(this,"linkViaPopup",t,function(){return Ph(e,t.providerId).then(function(){return Ih(e)})},!1)},t.Nc=function(t){return Mh(this,"reauthViaPopup",t,function(){return ye()},!0)},t.Fc=function(t){var e=this;return jh(this,"linkViaRedirect",t,function(){return Ph(e,t.providerId)},!1)},t.Oc=function(t){return jh(this,"reauthViaRedirect",t,function(){return ye()},!0)},t.Lb=function(e,n,t,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return t=this.I().then(function(t){return fs(r.a,{requestUri:e,postBody:i,sessionId:n,idToken:t})}).then(function(t){return o=Lh(r,t,"link"),xh(r,t)}).then(function(){return o}),Vh(this,t)},t.Mb=function(t,e,n,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return Vh(this,ye().then(function(){return to(ds(r.a,{requestUri:t,sessionId:e,postBody:i,tenantId:n}),r.uid)}).then(function(t){return o=Lh(r,t,"reauthenticate"),Dh(r,t),r.i=null,r.reload()}).then(function(){return o}),!0)},t.vb=function(e){var n=this,i=null;return Vh(this,this.I().then(function(t){return i=t,void 0===e||ut(e)?{}:Cr(new wr(e))}).then(function(t){return n.a.vb(i,t)}).then(function(t){if(n.email!=t)return n.reload()}).then(function(){}))},t.Fb=function(e,n){var i=this,r=null;return Vh(this,this.I().then(function(t){return r=t,void 0===n||ut(n)?{}:Cr(new wr(n))}).then(function(t){return i.a.Fb(r,e,t)}).then(function(t){if(i.email!=t)return i.reload()}).then(function(){}))},t.jc=function(t){var e=null,n=this;return Vh(this,t=to(ye(t),n.uid).then(function(t){return e=Lh(n,t,"reauthenticate"),Dh(n,t),n.i=null,n.reload()}).then(function(){return e}),!0)},t.toJSON=function(){return this.w()},t.w=function(){var e={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.h.w(),redirectEventId:this.ga||null};return this.metadata&&lt(e,this.metadata.w()),V(this.providerData,function(t){e.providerData.push(function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}(t))}),lt(e,this.S.w()),e};var Hh={name:"redirectUser",F:"session"};function Kh(t){return Yu(t.b,Hh,t.a)}function Gh(t){var e,n,i,r;this.a=t,this.b=Wu(),this.c=null,this.f=(n=Xh("local"),i=Xh("session"),r=Xh("none"),function(n,i,r){var o=Ju(i,r),a=Xu(n,i.F);return n.get(i,r).then(function(t){var e=null;try{e=Ni(l.localStorage.getItem(o))}catch(t){}if(e&&!t)return l.localStorage.removeItem(o),n.set(i,e,r);e&&t&&"localStorage"!=a.type&&l.localStorage.removeItem(o)})}((e=this).b,n,e.a).then(function(){return e.b.get(i,e.a)}).then(function(t){return t?i:e.b.get(r,e.a).then(function(t){return t?r:e.b.get(n,e.a).then(function(t){return t?n:e.b.get(Wh,e.a).then(function(t){return t?Xh(t):n})})})}).then(function(t){return e.c=t,Bh(e,t.F)}).o(function(){e.c||(e.c=n)})),this.b.addListener(Xh("local"),this.a,b(this.g,this))}function Bh(t,e){var n,s,i=[];for(n in Gu)Gu[n]!==e&&i.push(Yu(t.b,Xh(Gu[n]),t.a));return i.push(Yu(t.b,Wh,t.a)),s=i,new fe(function(n,e){var i=s.length,r=[];if(i)for(var t=function(t,e){i--,r[t]=e,0==i&&n(r)},o=function(t){e(t)},a=0;a<s.length;a++)Ie(s[a],y(t,a),o);else n(r)})}Gh.prototype.g=function(){var e=this,n=Xh("local");$h(this,function(){return ye().then(function(){return e.c&&"local"!=e.c.F?e.b.get(n,e.a):null}).then(function(t){if(t)return Bh(e,"local").then(function(){e.c=n})})})};var Wh={name:"persistence",F:"session"};function Xh(t){return{name:"authUser",F:t}}function Jh(t,e){return $h(t,function(){return t.b.set(t.c,e.w(),t.a)})}function Yh(t){return $h(t,function(){return Yu(t.b,t.c,t.a)})}function zh(t,e,n){return $h(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),t&&n&&(t.emulatorConfig=n),Fh(t||{})})})}function $h(t,e){return t.f=t.f.then(e,e),t.f}function Zh(t){if(this.l=!1,Fi(this,"settings",new Hc),Fi(this,"app",t),!this.app.options||!this.app.options.apiKey)throw new T("invalid-api-key");var n,e,i,r,o,a;t=Zl.default.SDK_VERSION?gi(Zl.default.SDK_VERSION):null,this.a=new qa(this.app.options&&this.app.options.apiKey,_(A),t),this.P=[],this.s=[],this.N=[],this.Pa=Zl.default.INTERNAL.createSubscribe(b(this.zc,this)),this.W=void 0,this.ib=Zl.default.INTERNAL.createSubscribe(b(this.Ac,this)),ol(this,null),this.i=new Gh(this.app.options.apiKey+":"+this.app.name),this.D=new qh(this.app.options.apiKey+":"+this.app.name),this.$=hl(this,(e=(n=this).app.options.authDomain,t=function(e){var t=function(t,e){return t.b.get(Hh,t.a).then(function(t){return t&&e&&(t.authDomain=e),Fh(t||{})})}(e.D,e.app.options.authDomain).then(function(t){return(e.m=t)&&(t.ha=e.D),Kh(e.D)});return hl(e,t)}(n).then(function(){return zh(n.i,e,n.R)}).then(function(e){return e?(e.ha=n.D,n.m&&(n.m.ga||null)==(e.ga||null)?e:e.reload().then(function(){return Jh(n.i,e).then(function(){return e})}).o(function(t){return"auth/network-request-failed"==t.code?e:Yh(n.i)})):null}).then(function(t){ol(n,t||null)}),hl(n,t))),this.h=hl(this,(i=this).$.then(function(){return il(i)}).o(function(){}).then(function(){if(!i.l)return i.ja()}).o(function(){}).then(function(){var t;i.l||(i.ba=!0,(t=i.i).b.addListener(Xh("local"),t.a,i.ja))})),this.ba=!1,this.ja=b(this.Zc,this),this.Ba=b(this.da,this),this.qa=b(this.mc,this),this.za=b(this.wc,this),this.Aa=b(this.xc,this),this.b=null,o=(r=this).app.options.authDomain,a=r.app.options.apiKey,o&&Ii()&&(r.Oa=r.$.then(function(){var t;if(!r.l)return r.b=xc(o,a,r.app.name,r.R),kc(r.b,r),sl(r)&&Th(sl(r)),r.m&&(Th(r.m),(t=r.m).xa(r.la()),dh(t,r),vh(t=r.m,r.J),mh(t,r),fh(t=r.m,r.R),ph(t,r),r.m=null),r.b})),this.INTERNAL={},this.INTERNAL.delete=b(this.delete,this),this.INTERNAL.logFramework=b(this.Gc,this),this.u=0,fn.call(this),t=this,Object.defineProperty(t,"lc",{get:function(){return this.la()},set:function(t){this.xa(t)},enumerable:!1}),t.aa=null,Object.defineProperty(t,"ti",{get:function(){return this.T()},set:function(t){this.zb(t)},enumerable:!1}),t.S=null,Object.defineProperty(t,"emulatorConfig",{get:function(){var t;return t=this.R?Hi({protocol:(t=Cn(this.R.url)).c,host:t.a,port:t.g,options:Hi({disableWarnings:this.R.ec})}):null},enumerable:!1}),this.J=[],this.R=null}function Qh(t){qe.call(this,"languageCodeChanged"),this.h=t}function tl(t){qe.call(this,"emulatorConfigChanged"),this.c=t}function el(t){qe.call(this,"frameworkChanged"),this.f=t}function nl(t){return t.Oa||we(new T("auth-domain-config-required"))}function il(t){if(!Ii())return we(new T("operation-not-supported-in-this-environment"));var e=nl(t).then(function(){return t.b.ra()}).then(function(t){return t?Hi(t):null});return hl(t,e)}function rl(o,a){var s={};return s.apiKey=o.app.options.apiKey,s.authDomain=o.app.options.authDomain,s.appName=o.app.name,o.R&&(s.emulatorConfig=o.R),o.$.then(function(){return t=s,e=a,n=o.D,i=o.Ga(),r=new lh(t,e),n&&(r.ha=n),i&&vh(r,i),r.reload().then(function(){return r});var t,e,n,i,r}).then(function(t){return sl(o)&&t.uid==sl(o).uid?Ch(sl(o),t):(ol(o,t),Th(t)),o.da(t)}).then(function(){cl(o)})}function ol(t,e){var n,i;sl(t)&&(n=sl(t),i=t.Ba,B(n.W,function(t){return t==i}),nn(sl(t),"tokenChanged",t.qa),nn(sl(t),"userDeleted",t.za),nn(sl(t),"userInvalidated",t.Aa),yh(sl(t))),e&&(e.W.push(t.Ba),Qe(e,"tokenChanged",t.qa),Qe(e,"userDeleted",t.za),Qe(e,"userInvalidated",t.Aa),0<t.u&&bh(e)),Fi(t,"currentUser",e),e&&(e.xa(t.la()),dh(e,t),vh(e,t.J),mh(e,t),fh(e,t.R),ph(e,t))}function al(n,t){var e=null,i=null;return hl(n,t.then(function(t){return e=Oo(t),i=Fr(t),rl(n,t)},function(t){var e=null;throw(e=t&&"auth/multi-factor-auth-required"===t.code?zc(t.w(),n,b(n.kc,n)):e)||t}).then(function(){return Hi({user:sl(n),credential:e,additionalUserInfo:i,operationType:"signIn"})}))}function sl(t){return t.currentUser}function ul(t){return sl(t)&&sl(t)._lat||null}function cl(t){if(t.ba){for(var e=0;e<t.s.length;e++)t.s[e]&&t.s[e](ul(t));if(t.W!==t.getUid()&&t.N.length)for(t.W=t.getUid(),e=0;e<t.N.length;e++)t.N[e]&&t.N[e](ul(t))}}function hl(t,e){return t.P.push(e),e.oa(function(){G(t.P,e)}),e}function ll(){}function fl(){this.a={},this.b=1e12}Gh.prototype.yb=function(e){var n=null,i=this;return function(t){var e=new T("invalid-persistence-type"),n=new T("unsupported-persistence-type");t:{for(i in Gu)if(Gu[i]==t){var i=!0;break t}i=!1}if(!i||"string"!=typeof t)throw e;switch(li()){case"ReactNative":if("session"===t)throw n;break;case"Node":if("none"!==t)throw n;break;case"Worker":if("session"===t||!Eu()&&"none"!==t)throw n;break;default:if(!wi()&&"none"!==t)throw n}}(e),$h(this,function(){return e!=i.c.F?i.b.get(i.c,i.a).then(function(t){return n=t,Bh(i,e)}).then(function(){if(i.c=Xh(e),n)return i.b.set(i.c,n,i.a)}):ye()})},w(Zh,fn),w(Qh,qe),w(tl,qe),w(el,qe),(t=Zh.prototype).yb=function(t){return t=this.i.yb(t),hl(this,t)},t.xa=function(t){this.aa===t||this.l||(this.aa=t,Ja(this.a,this.aa),this.dispatchEvent(new Qh(this.la())))},t.la=function(){return this.aa},t.fd=function(){var t=l.navigator;this.xa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.gd=function(t,e){if(!this.R){if(!/^https?:\/\//.test(t))throw new T("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");e=!!e&&!!e.disableWarnings,n=e,"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),l.document&&!n&&si().then(function(){var t=l.document.createElement("div");t.innerText="Running in emulator mode. Do not use with production credentials.",t.style.position="fixed",t.style.width="100%",t.style.backgroundColor="#ffffff",t.style.border=".1em solid #000000",t.style.color="#b50000",t.style.bottom="0px",t.style.left="0px",t.style.margin="0px",t.style.zIndex=1e4,t.style.textAlign="center",t.classList.add("firebase-emulator-warning"),l.document.body.appendChild(t)}),this.R={url:t,ec:e},this.settings.jb=!0,Ya(this.a,this.R),this.dispatchEvent(new tl(this.R))}var n},t.Gc=function(t){this.J.push(t),$a(this.a,Zl.default.SDK_VERSION?gi(Zl.default.SDK_VERSION,this.J):null),this.dispatchEvent(new el(this.J))},t.Ga=function(){return X(this.J)},t.zb=function(t){this.S===t||this.l||(this.S=t,this.a.b=this.S)},t.T=function(){return this.S},t.toJSON=function(){return{apiKey:this.app.options.apiKey,authDomain:this.app.options.authDomain,appName:this.app.name,currentUser:sl(this)&&sl(this).w()}},t.Gb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0;case"signInViaPopup":return this.g==e&&!!this.f;default:return!1}},t.na=function(t,e,n,i){"signInViaPopup"==t&&this.g==i&&(n&&this.C?this.C(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)},t.Fa=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?b(this.ic,this):null},t.ic=function(t,e,n,i){var r=this,o={requestUri:t,postBody:i,sessionId:e,tenantId:n};return this.c&&(this.c.cancel(),this.c=null),r.$.then(function(){return al(r,ls(r.a,o))})},t.Xc=function(e){if(!Ii())return we(new T("operation-not-supported-in-this-environment"));var n=this,t=Vr(e.providerId),i=_i(),r=null,o=ri(r=(!Ai()||ci())&&this.app.options.authDomain&&e.isOAuthProvider?cu(this.app.options.authDomain,this.app.options.apiKey,this.app.name,"signInViaPopup",e,null,i,Zl.default.SDK_VERSION||null,null,null,this.T(),this.R):r,t&&t.va,t&&t.ua);return hl(this,t=nl(this).then(function(t){return Oc(t,o,"signInViaPopup",e,i,!!r,n.T())}).then(function(){return new fe(function(t,e){n.na("signInViaPopup",null,new T("cancelled-popup-request"),n.g),n.f=t,n.C=e,n.g=i,n.c=Dc(n.b,n,"signInViaPopup",o,i)})}).then(function(t){return o&&ii(o),t?Hi(t):null}).o(function(t){throw o&&ii(o),t}))},t.Yc=function(t){if(!Ii())return we(new T("operation-not-supported-in-this-environment"));var e=this;return hl(this,nl(this).then(function(){return $h(t=e.i,function(){return t.b.set(Wh,t.c.F,t.a)});var t}).then(function(){return Rc(e.b,"signInViaRedirect",t,void 0,e.T())}))},t.ra=function(){var e=this;return il(this).then(function(t){return e.b&&Uc(e.b.b),t}).o(function(t){throw e.b&&Uc(e.b.b),t})},t.dd=function(t){if(!t)return we(new T("null-user"));if(this.S!=t.tenantId)return we(new T("tenant-id-mismatch"));var e=this,n={};n.apiKey=this.app.options.apiKey,n.authDomain=this.app.options.authDomain,n.appName=this.app.name;var i,r,o,a,s,u=(i=t,r=n,o=e.D,a=e.Ga(),s=i.h,(n={})[Ka]=s.b&&s.b.toString(),n.refreshToken=s.a,r=new lh(r||{apiKey:i.l,authDomain:i.s,appName:i.m},n),o&&(r.ha=o),a&&vh(r,a),Ch(r,i),r);return hl(this,this.h.then(function(){if(e.app.options.apiKey!=t.l)return u.reload()}).then(function(){return sl(e)&&t.uid==sl(e).uid?(Ch(sl(e),t),e.da(t)):(ol(e,u),Th(u),e.da(u))}).then(function(){cl(e)}))},t.Bb=function(){var t=this,e=this.h.then(function(){return t.b&&Uc(t.b.b),sl(t)?(ol(t,null),Yh(t.i).then(function(){cl(t)})):ye()});return hl(this,e)},t.Zc=function(){var i=this;return zh(this.i,this.app.options.authDomain).then(function(t){if(!i.l){var e,n;if((e=sl(i)&&t)&&(e=sl(i).uid,n=t.uid,e=null!=e&&""!==e&&null!=n&&""!==n&&e==n),e)return Ch(sl(i),t),sl(i).I();(sl(i)||t)&&(ol(i,t),t&&(Th(t),t.ha=i.D),i.b&&kc(i.b,i),cl(i))}})},t.da=function(t){return Jh(this.i,t)},t.mc=function(){cl(this),this.da(sl(this))},t.wc=function(){this.Bb()},t.xc=function(){this.Bb()},t.kc=function(t){var e=this;return this.h.then(function(){return al(e,ye(t))})},t.zc=function(t){var e=this;this.addAuthTokenListener(function(){t.next(sl(e))})},t.Ac=function(t){var e,n,i=this;n=function(){t.next(sl(i))},(e=this).N.push(n),hl(e,e.h.then(function(){!e.l&&K(e.N,n)&&e.W!==e.getUid()&&(e.W=e.getUid(),n(ul(e)))}))},t.Ic=function(t,e,n){var i=this;return this.ba&&Promise.resolve().then(function(){"function"==typeof t?t(sl(i)):"function"==typeof t.next&&t.next(sl(i))}),this.Pa(t,e,n)},t.Hc=function(t,e,n){var i=this;return this.ba&&Promise.resolve().then(function(){i.W=i.getUid(),"function"==typeof t?t(sl(i)):"function"==typeof t.next&&t.next(sl(i))}),this.ib(t,e,n)},t.nc=function(t){var e=this,n=this.h.then(function(){return sl(e)?sl(e).I(t).then(function(t){return{accessToken:t}}):null});return hl(this,n)},t.Tc=function(t){var n=this;return this.h.then(function(){return al(n,Js(n.a,Hs,{token:t}))}).then(function(t){var e=t.user;return Oh(e,"isAnonymous",!1),n.da(e),t})},t.Uc=function(t,e){var n=this;return this.h.then(function(){return al(n,Js(n.a,Ks,{email:t,password:e}))})},t.dc=function(t,e){var n=this;return this.h.then(function(){return al(n,Js(n.a,gs,{email:t,password:e}))})},t.ab=function(t){var e=this;return this.h.then(function(){return al(e,t.ka(e.a))})},t.Sc=function(t){return Ui("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.ab(t)},t.Ab=function(){var n=this;return this.h.then(function(){var t=sl(n);if(t&&t.isAnonymous){var e=Hi({providerId:null,isNewUser:!1});return Hi({user:t,credential:null,additionalUserInfo:e,operationType:"signIn"})}return al(n,n.a.Ab()).then(function(t){var e=t.user;return Oh(e,"isAnonymous",!0),n.da(e),t})})},t.getUid=function(){return sl(this)&&sl(this).uid||null},t.cc=function(t){this.addAuthTokenListener(t),this.u++,0<this.u&&sl(this)&&bh(sl(this))},t.Pc=function(e){var n=this;V(this.s,function(t){t==e&&n.u--}),this.u<0&&(this.u=0),0==this.u&&sl(this)&&yh(sl(this)),this.removeAuthTokenListener(e)},t.addAuthTokenListener=function(t){var e=this;this.s.push(t),hl(this,this.h.then(function(){e.l||K(e.s,t)&&t(ul(e))}))},t.removeAuthTokenListener=function(e){B(this.s,function(t){return t==e})},t.delete=function(){this.l=!0;for(var t=0;t<this.P.length;t++)this.P[t].cancel("app-deleted");return this.P=[],this.i&&(t=this.i).b.removeListener(Xh("local"),t.a,this.ja),this.b&&(Sc(this.b,this),Uc(this.b.b)),Promise.resolve()},t.hc=function(t){return hl(this,Js(this.a,bs,{identifier:t,continueUri:Ti()?ti():"http://localhost"}).then(function(t){return t.signinMethods||[]}))},t.Bc=function(t){return!!Eo(t)},t.xb=function(e,n){var i=this;return hl(this,ye().then(function(){var t=new wr(n);if(!t.c)throw new T("argument-error",Er+" must be true when sending sign in link to email");return Cr(t)}).then(function(t){return i.a.xb(e,t)}).then(function(){}))},t.jd=function(t){return this.Sa(t).then(function(t){return t.data.email})},t.ob=function(t,e){return hl(this,this.a.ob(t,e).then(function(){}))},t.Sa=function(t){return hl(this,this.a.Sa(t).then(function(t){return new $i(t)}))},t.kb=function(t){return hl(this,this.a.kb(t).then(function(){}))},t.wb=function(e,t){var n=this;return hl(this,ye().then(function(){return void 0===t||ut(t)?{}:Cr(new wr(t))}).then(function(t){return n.a.wb(e,t)}).then(function(){}))},t.Wc=function(t,e){return hl(this,Gc(this,t,e,b(this.ab,this)))},t.Vc=function(n,i){var r=this;return hl(this,ye().then(function(){var t=i||ti(),e=To(n,t);if(!(t=Eo(t)))throw new T("argument-error","Invalid email link!");if(t.tenantId!==r.T())throw new T("tenant-id-mismatch");return r.ab(e)}))},ll.prototype.render=function(){},ll.prototype.reset=function(){},ll.prototype.getResponse=function(){},ll.prototype.execute=function(){};var dl=null;function pl(t,e){return(e=vl(e))&&t.a[e]||null}function vl(t){return(t=void 0===t?1e12:t)?t.toString():null}function ml(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=te(t);var n=this;this.i=function(){n.execute()},this.h?this.execute():Qe(this.f,"click",this.i)}function gl(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function bl(){}function yl(){}fl.prototype.render=function(t,e){return this.a[this.b.toString()]=new ml(t,e),this.b++},fl.prototype.reset=function(t){var e=pl(this,t);t=vl(t),e&&t&&(e.delete(),delete this.a[t])},fl.prototype.getResponse=function(t){return(t=pl(this,t))?t.getResponse():null},fl.prototype.execute=function(t){(t=pl(this,t))&&t.execute()},ml.prototype.getResponse=function(){return gl(this),this.b},ml.prototype.execute=function(){gl(this);var n=this;this.a||(this.a=setTimeout(function(){n.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}();var t=n.c.callback,e=n.c["expired-callback"];if(t)try{t(n.b)}catch(t){}n.a=setTimeout(function(){if(n.a=null,n.b=null,e)try{e()}catch(t){}n.h&&n.execute()},6e4)},500))},ml.prototype.delete=function(){gl(this),this.g=!0,clearTimeout(this.a),this.a=null,nn(this.f,"click",this.i)},Fi(bl,"FACTOR_ID","phone"),yl.prototype.g=function(){return ye(dl=dl||new fl)},yl.prototype.c=function(){};var wl=null;function Il(){this.b=l.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var Tl=new dt(gt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),El=new Ri(3e4,6e4);Il.prototype.g=function(r){var o=this;return new fe(function(t,e){var i=setTimeout(function(){e(new T("network-request-failed"))},El.get());!l.grecaptcha||r!==o.f&&!o.b?(l[o.a]=function(){var n;l.grecaptcha?(o.f=r,n=l.grecaptcha.render,l.grecaptcha.render=function(t,e){return t=n(t,e),o.b++,t},clearTimeout(i),t(l.grecaptcha)):(clearTimeout(i),e(new T("internal-error"))),delete l[o.a]},ye(La(It(Tl,{onload:o.a,hl:r||""}))).o(function(){clearTimeout(i),e(new T("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(i),t(l.grecaptcha))})},Il.prototype.c=function(){this.b--};var Al=null;function kl(t,e,n,i,r,o,a){if(Fi(this,"type","recaptcha"),this.c=this.f=null,this.J=!1,this.v=e,this.g=null,a=a?wl=wl||new yl:Al=Al||new Il,this.m=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[_l])throw new T("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");if(this.i="invisible"===this.a[Ol],!l.document)throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");if(!te(e)||!this.i&&te(e).hasChildNodes())throw new T("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new qa(t,o||null,r||null),this.u=i||function(){return null};var s=this;this.l=[];var u=this.a[Sl];this.a[Sl]=function(t){var e;Cl(s,t),"function"==typeof u?u(t):"string"!=typeof u||"function"==typeof(e=yi(u,l))&&e(t)};var c=this.a[Nl];this.a[Nl]=function(){var t;Cl(s,null),"function"==typeof c?c():"string"!=typeof c||"function"==typeof(t=yi(c,l))&&t()}}var Sl="callback",Nl="expired-callback",_l="sitekey",Ol="size";function Cl(t,e){for(var n=0;n<t.l.length;n++)try{t.l[n](e)}catch(t){}}function Rl(t,e){return t.h.push(e),e.oa(function(){G(t.h,e)}),e}function Dl(t){if(t.J)throw new T("internal-error","RecaptchaVerifier instance has been destroyed.")}function Pl(t,e,n){var i=!1;try{this.b=n||Zl.default.app()}catch(t){throw new T("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new T("invalid-api-key");n=this.b.options.apiKey;var r=this,o=null;try{o=this.b.auth().Ga()}catch(t){}try{i=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}o=Zl.default.SDK_VERSION?gi(Zl.default.SDK_VERSION,o):null,kl.call(this,n,t,e,function(){try{var e=r.b.auth().la()}catch(t){e=null}return e},o,_(A),i)}function Ll(t,e,n,i){t:{n=Array.prototype.slice.call(n);for(var r=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0;else{if(o)throw new T("internal-error","Argument validator encountered a required argument after an optional argument.");r++}if(o=e.length,n.length<r||o<n.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+n.length+".";else{for(r=0;r<n.length;r++)if(o=e[r].optional&&void 0===n[r],!e[r].M(n[r])&&!o){if(e=e[r],r<0||r>=xl.length)throw new T("internal-error","Argument validator received an unsupported number of arguments.");n=xl[r],i=(i?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.K+".";break t}i=null}}if(i)throw new T("argument-error",t+" failed: "+i)}(t=kl.prototype).Ia=function(){var e=this;return this.f||(this.f=Rl(this,ye().then(function(){if(Ti()&&!hi())return si();throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return e.m.g(e.u())}).then(function(t){return e.g=t,Js(e.s,Rs,{})}).then(function(t){e.a[_l]=t.recaptchaSiteKey}).o(function(t){throw e.f=null,t})))},t.render=function(){Dl(this);var n=this;return Rl(this,this.Ia().then(function(){var t,e;return null===n.c&&(e=n.v,n.i||(t=te(e),e=oe("DIV"),t.appendChild(e)),n.c=n.g.render(e,n.a)),n.c}))},t.verify=function(){Dl(this);var r=this;return Rl(this,this.render().then(function(e){return new fe(function(n){var i,t=r.g.getResponse(e);t?n(t):(r.l.push(i=function(t){var e;t&&(e=i,B(r.l,function(t){return t==e}),n(t))}),r.i&&r.g.execute(r.c))})}))},t.reset=function(){Dl(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Dl(this),this.J=!0,this.m.c();for(var t,e=0;e<this.h.length;e++)this.h[e].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){e=te(this.v);for(;t=e.firstChild;)e.removeChild(t)}},w(Pl,kl);var xl="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function Ml(t,e){return{name:t||"",K:"a valid string",optional:!!e,M:function(t){return"string"==typeof t}}}function jl(t,e){return{name:t||"",K:"a boolean",optional:!!e,M:function(t){return"boolean"==typeof t}}}function Ul(t,e){return{name:t||"",K:"a valid object",optional:!!e,M:m}}function Vl(t,e){return{name:t||"",K:"a function",optional:!!e,M:function(t){return"function"==typeof t}}}function Fl(t,e){return{name:t||"",K:"null",optional:!!e,M:function(t){return null===t}}}function ql(n){return{name:n?n+"Credential":"credential",K:n?"a valid "+n+" credential":"a valid credential",optional:!1,M:function(t){if(!t)return!1;var e=!n||t.providerId===n;return!(!t.ka||!e)}}}function Hl(){return{name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(t){return!!t&&!!t.tb}}}function Kl(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}}function Gl(t,e){return m(t)&&"string"==typeof t.type&&t.type===e&&"function"==typeof t.Ha}function Bl(t){return m(t)&&"string"==typeof t.uid}function Wl(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}}function Xl(e,n,t,i){return{name:t||"",K:e.K+" or "+n.K,optional:!!i,M:function(t){return e.M(t)||n.M(t)}}}function Jl(t,e){for(var n in e){var i=e[n].name;t[i]=$l(i,t[n],e[n].j)}}function Yl(t,e){for(var n in e){var i=e[n].name;i!==n&&Object.defineProperty(t,i,{get:y(function(t){return this[t]},n),set:y(function(t,e,n,i){Ll(t,[n],[i],!0),this[e]=i},i,n,e[n].lb),enumerable:!0})}}function zl(t,e,n,i){t[e]=$l(e,n,i)}function $l(t,e,n){function i(){var t=Array.prototype.slice.call(arguments);return Ll(o,n,t),e.apply(this,t)}if(!n)return e;var r,o=(t=(t=t).split("."))[t.length-1];for(r in e)i[r]=e[r];for(r in e.prototype)i.prototype[r]=e.prototype[r];return i}Jl(Zh.prototype,{kb:{name:"applyActionCode",j:[Ml("code")]},Sa:{name:"checkActionCode",j:[Ml("code")]},ob:{name:"confirmPasswordReset",j:[Ml("code"),Ml("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[Ml("email"),Ml("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[Ml("email")]},ra:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[Ml("emailLink")]},Hc:{name:"onAuthStateChanged",j:[Xl(Ul(),Vl(),"nextOrObserver"),Vl("opt_error",!0),Vl("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",j:[Xl(Ul(),Vl(),"nextOrObserver"),Vl("opt_error",!0),Vl("opt_completed",!0)]},wb:{name:"sendPasswordResetEmail",j:[Ml("email"),Xl(Ul("opt_actionCodeSettings",!0),Fl(null,!0),"opt_actionCodeSettings",!0)]},xb:{name:"sendSignInLinkToEmail",j:[Ml("email"),Ul("actionCodeSettings")]},yb:{name:"setPersistence",j:[Ml("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[ql()]},Ab:{name:"signInAnonymously",j:[]},ab:{name:"signInWithCredential",j:[ql()]},Tc:{name:"signInWithCustomToken",j:[Ml("token")]},Uc:{name:"signInWithEmailAndPassword",j:[Ml("email"),Ml("password")]},Vc:{name:"signInWithEmailLink",j:[Ml("email"),Ml("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[Ml("phoneNumber"),Wl()]},Xc:{name:"signInWithPopup",j:[Kl()]},Yc:{name:"signInWithRedirect",j:[Kl()]},dd:{name:"updateCurrentUser",j:[Xl({name:"user",K:"an instance of Firebase User",optional:!1,M:function(t){return!!(t&&t instanceof lh)}},Fl(),"user")]},Bb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[Ml(null,!0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[Ml("url"),Ul("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[Ml("code")]}}),Yl(Zh.prototype,{lc:{name:"languageCode",lb:Xl(Ml(),Fl(),"languageCode")},ti:{name:"tenantId",lb:Xl(Ml(),Fl(),"tenantId")}}),(Zh.Persistence=Gu).LOCAL="local",Zh.Persistence.SESSION="session",Zh.Persistence.NONE="none",Jl(lh.prototype,{delete:{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[jl("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[jl("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[ql()]},rb:{name:"linkWithCredential",j:[ql()]},Dc:{name:"linkWithPhoneNumber",j:[Ml("phoneNumber"),Wl()]},Ec:{name:"linkWithPopup",j:[Kl()]},Fc:{name:"linkWithRedirect",j:[Kl()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[ql()]},ub:{name:"reauthenticateWithCredential",j:[ql()]},Mc:{name:"reauthenticateWithPhoneNumber",j:[Ml("phoneNumber"),Wl()]},Nc:{name:"reauthenticateWithPopup",j:[Kl()]},Oc:{name:"reauthenticateWithRedirect",j:[Kl()]},reload:{name:"reload",j:[]},vb:{name:"sendEmailVerification",j:[Xl(Ul("opt_actionCodeSettings",!0),Fl(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[Ml(null,!0)]},cd:{name:"unlink",j:[Ml("provider")]},Cb:{name:"updateEmail",j:[Ml("email")]},Db:{name:"updatePassword",j:[Ml("password")]},ed:{name:"updatePhoneNumber",j:[ql("phone")]},Eb:{name:"updateProfile",j:[Ul("profile")]},Fb:{name:"verifyBeforeUpdateEmail",j:[Ml("email"),Xl(Ul("opt_actionCodeSettings",!0),Fl(null,!0),"opt_actionCodeSettings",!0)]}}),Jl(fl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Jl(ll.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Jl(fe.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}}),Yl(Hc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",lb:jl("appVerificationDisabledForTesting")}}),Jl(Kc.prototype,{confirm:{name:"confirm",j:[Ml("verificationCode")]}}),zl(Qr,"fromJSON",function(t){t="string"==typeof t?JSON.parse(t):t;for(var e,n=[ao,wo,ko,io],i=0;i<n.length;i++)if(e=n[i](t))return e;return null},[Xl(Ml(),Ul(),"json")]),zl(Io,"credential",function(t,e){return new yo(t,e)},[Ml("email"),Ml("password")]),Jl(yo.prototype,{w:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(ho.prototype,{Ca:{name:"addScope",j:[Ml("scope")]},Ka:{name:"setCustomParameters",j:[Ul("customOAuthParameters")]}}),zl(ho,"credential",lo,[Xl(Ml(),Ul(),"token")]),zl(Io,"credentialWithLink",To,[Ml("email"),Ml("emailLink")]),Jl(fo.prototype,{Ca:{name:"addScope",j:[Ml("scope")]},Ka:{name:"setCustomParameters",j:[Ul("customOAuthParameters")]}}),zl(fo,"credential",po,[Xl(Ml(),Ul(),"token")]),Jl(vo.prototype,{Ca:{name:"addScope",j:[Ml("scope")]},Ka:{name:"setCustomParameters",j:[Ul("customOAuthParameters")]}}),zl(vo,"credential",mo,[Xl(Ml(),Xl(Ul(),Fl()),"idToken"),Xl(Ml(),Fl(),"accessToken",!0)]),Jl(go.prototype,{Ka:{name:"setCustomParameters",j:[Ul("customOAuthParameters")]}}),zl(go,"credential",bo,[Xl(Ml(),Ul(),"token"),Ml("secret",!0)]),Jl(co.prototype,{Ca:{name:"addScope",j:[Ml("scope")]},credential:{name:"credential",j:[Xl(Ml(),Xl(Ul(),Fl()),"optionsOrIdToken"),Xl(Ml(),Fl(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[Ul("customOAuthParameters")]}}),Jl(ro.prototype,{w:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(eo.prototype,{w:{name:"toJSON",j:[Ml(null,!0)]}}),zl(No,"credential",_o,[Ml("verificationId"),Ml("verificationCode")]),Jl(No.prototype,{gb:{name:"verifyPhoneNumber",j:[Xl(Ml(),{name:"phoneInfoOptions",K:"valid phone info options",optional:!1,M:function(t){return!!t&&(t.session&&t.phoneNumber?Gl(t.session,$r)&&"string"==typeof t.phoneNumber:t.session&&t.multiFactorHint?Gl(t.session,Zr)&&Bl(t.multiFactorHint):t.session&&t.multiFactorUid?Gl(t.session,Zr)&&"string"==typeof t.multiFactorUid:!!t.phoneNumber&&"string"==typeof t.phoneNumber)}},"phoneInfoOptions"),Wl()]}}),Jl(Ao.prototype,{w:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(T.prototype,{toJSON:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(jo.prototype,{toJSON:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(Mo.prototype,{toJSON:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(Yc.prototype,{toJSON:{name:"toJSON",j:[Ml(null,!0)]}}),Jl(Wc.prototype,{Rc:{name:"resolveSignIn",j:[Hl()]}}),Jl(eh.prototype,{Sb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Hl(),Ml("displayName",!0)]},bd:{name:"unenroll",j:[Xl({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Bl},Ml(),"multiFactorInfoIdentifier")]}}),Jl(Pl.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),zl(lr,"parseLink",yr,[Ml("link")]),zl(bl,"assertion",function(t){return new Qc(t)},[ql("phone")]),function(){if(void 0===Zl.default||!Zl.default.INTERNAL||!Zl.default.INTERNAL.registerComponent)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Qi,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:Zi,VERIFY_AND_CHANGE_EMAIL:tr,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:Zh,AuthCredential:Qr,Error:T};zl(t,"EmailAuthProvider",Io,[]),zl(t,"FacebookAuthProvider",ho,[]),zl(t,"GithubAuthProvider",fo,[]),zl(t,"GoogleAuthProvider",vo,[]),zl(t,"TwitterAuthProvider",go,[]),zl(t,"OAuthProvider",co,[Ml("providerId")]),zl(t,"SAMLAuthProvider",uo,[Ml("providerId")]),zl(t,"PhoneAuthProvider",No,[{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(t){return!!(t&&t instanceof Zh)}}]),zl(t,"RecaptchaVerifier",Pl,[Xl(Ml(),{name:"",K:"an HTML element",optional:!1,M:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Ul("recaptchaParameters",!0),{name:"app",K:"an instance of Firebase App",optional:!0,M:function(t){return!!(t&&t instanceof Zl.default.app.App)}}]),zl(t,"ActionCodeURL",lr,[]),zl(t,"PhoneMultiFactorGenerator",bl,[]),Zl.default.INTERNAL.registerComponent({name:"auth",instanceFactory:function(t){return new Zh(t=t.getProvider("app").getImmediate())},multipleInstances:!1,serviceProps:t,instantiationMode:"LAZY",type:"PUBLIC",onInstanceCreated:function(t){t.getProvider("auth-internal").initialize()}}),Zl.default.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(t){return{getUid:b((t=t.getProvider("auth").getImmediate()).getUid,t),getToken:b(t.nc,t),addAuthTokenListener:b(t.cc,t),removeAuthTokenListener:b(t.Pc,t)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"}),Zl.default.registerVersion("@firebase/auth","0.16.8"),Zl.default.INTERNAL.extendNamespace({User:lh})}()}.apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}.apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-auth.js.map
duction/track-users-live-bundle_4c80cc.js"></script>

<script>
var gtmFired = false;
document.addEventListener("mousemove", function() { loadGTM(); });
document.addEventListener("scroll", function() { loadGTM(); });
function loadGTM() {
if(gtmFired) {
return;
}
gtmFired = true;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZMZ8RP');
}
</script>

<script>
var trackPageViewEvent = (function() {
var LANG = "en".toUpperCase();
var sportSlug = "wwe";
var eventDelegates = [];
window.addEventListener("custom:addPageViewEventDelegate", function(e) {
var callback = e.detail && e.detail.callback;
if (typeof callback == "function") {
eventDelegates.push(callback);
}
});
function trackEvent(params) {
params = Object.assign({}, {
lang: LANG,
}, params || {});
if (sportSlug) {
params["sport_slug"] = sportSlug;
}
eventDelegates.forEach(function(delegate) {
params = Object.assign({}, params, delegate(params));
});
console.info("GTAG PAGE_VIEW EVENT --> ", params);
gtag("event", "page_view", params);
if (sportSlug == "wwe" && LANG == "EN") {
gtag("event", "page_view", Object.assign({}, params, { 
"send_to": "G-0KDN0YL2PF" 
}));
}
}
return trackEvent;
})();
</script>
<script>
function loadScriptAsync(scriptSrc, callback) {
if (typeof callback !== 'function') {
throw new Error('Not a valid callback for async script load');
}
var script = document.createElement('script');
script.onload = callback;
script.src = scriptSrc;
document.head.appendChild(script);
}
function getFeatureFromPageType(pageType) {
if (pageType === "wikipage" || pageType === "wiki_tagpage" || pageType === "WikiHomepage") {
return "wiki";
} else if (pageType === "Homepage") {
return "homepage";
} else if (pageType === "Tagpage") {
return "tagpage";
} else if (pageType === "playerpage") {
return "playerpage";
} else if (pageType === "teampage") {
return "teampage";
} else if (pageType === "Eventpage") {
return "eventpage";
} else if ("") {
return "sportsBetting";
} else if ("") {
return "fortniteShop";
} else if (pageType === "LiveCricket" || pageType === "CricketmatchPreview" ) {
return "cmcPage";
}
return "";
}
function calculateUserAdoptionType(feature) {
var now = Date.now();
var userAdoptionObject = {
"userAdoptionType": "N/A",
"lastAdopted": now
};
if (!feature) {
return userAdoptionObject;
}
var featureAccessedKey = "feature_accessed_" + feature;
var featureAccessedTime = getLocalStorageWithExpiry(featureAccessedKey);
if (featureAccessedTime) {
userAdoptionObject["userAdoptionType"] = "existing";
userAdoptionObject["lastAdopted"] = featureAccessedTime;
} else {
userAdoptionObject["userAdoptionType"] = "new";
}
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 90);
setLocalStorageWithExpiry(featureAccessedKey, now, expiryDate.getTime());
return userAdoptionObject;
}
function calculateUserAdoptionTypeLast30Days(feature) {
var now = Date.now();
var userAdoptionObject = {
"userAdoptionTypeLast30Days": "N/A",
"lastAdopted": now
};
if (!feature) {
return userAdoptionObject;
}
var featureAccessedKey = "feature_accessed_Last30Days_" + feature;
var featureAccessedTime = getLocalStorageWithExpiry(featureAccessedKey);
if (featureAccessedTime) {
userAdoptionObject["userAdoptionTypeLast30Days"] = "existing";
userAdoptionObject["lastAdopted"] = featureAccessedTime;
} else {
userAdoptionObject["userAdoptionTypeLast30Days"] = "new";
}
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 30);
setLocalStorageWithExpiry(featureAccessedKey, now, expiryDate.getTime());
return userAdoptionObject;
}
function getUserAdoptionType(pageType) {
var feature = getFeatureFromPageType(pageType);
if (!feature) {
return;
}
try {
var cookieKey = "ufa__v2__" + feature;
var userAdoptionTypeFromCookie = getCookie(cookieKey);
var userAdoptionType = getLocalStorageWithExpiry(cookieKey);
if (!userAdoptionType && !userAdoptionTypeFromCookie) {
var calculatedUserAdoptionType = calculateUserAdoptionType(feature);
userAdoptionType = calculatedUserAdoptionType["userAdoptionType"];
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 1); 
setLocalStorageWithExpiry(cookieKey, userAdoptionType, expiryDate.getTime());
}
return userAdoptionType;
} catch (e) {
console.error("failed to parse user adoption type from cookie", e);
}    
}
function getUserAdoptionTypeLast30Days(pageType) {
var feature = getFeatureFromPageType(pageType);
if (!feature) {
return;
}
try {
var key = "ufa__v2_Last30Days__" + feature;
var userAdoptionTypeLast30Days = getLocalStorageWithExpiry(key);
if (!userAdoptionTypeLast30Days) {
var calculatedUserAdoptionTypeLast30Days = calculateUserAdoptionTypeLast30Days(feature);
userAdoptionTypeLast30Days = calculatedUserAdoptionTypeLast30Days["userAdoptionTypeLast30Days"];
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 1); 
setLocalStorageWithExpiry(key, userAdoptionTypeLast30Days, expiryDate.getTime());
}
return userAdoptionTypeLast30Days;
} catch (e) {
console.error("failed to parse user adoption type Last30Days from local storage", e);
}    
}
var ga4Fired = false;
var gaSubSet;
var GA4_ID = 'G-T41EZF14QW';
var sessionKey1CookieVal = getCookie("sessionKey1");
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
function loadGA(gaID) {
if (ga4Fired) {
return;
}
ga4Fired = true;
var GAScript = "https://www.googletagmanager.com/gtag/js?id="+gaID;
loadScriptAsync(GAScript, function() {});
var isVideoPage = false;
var sessionCookie = getCookie("keeda-session-uuid");
var expiryTime = new Date();
expiryTime.setMinutes(expiryTime.getMinutes() + 30); // Expiry after 30 mins
if (sessionCookie == "") {
var newValue = generateRandomString();
setCookie('keeda-session-uuid', newValue, expiryTime);
} else {
setCookie('keeda-session-uuid', sessionCookie, expiryTime);
}
gtag( 'set' , { 'dimension1' : "WWE" } );
var loggedInUserID = Number(getCookie("fw_ID"));
if(!isNaN(loggedInUserID) && loggedInUserID > 0) {
gtag( 'set' , { 'dimension10' : loggedInUserID } );
}
gtag( 'set' , { 'dimension11' : "Vidazoodesktop" } );
var uniqueBrowserIdCookie = getCookie('unique_browser_id');
if (uniqueBrowserIdCookie) {
gtag( 'set' , 'user_properties', { 'browser_id' : uniqueBrowserIdCookie } );
}
gaSubSet = {
'send_to': gaID
};
var sessionCookieValue = getCookie("keeda-session-uuid");
if (sessionCookieValue) {
gaSubSet['keeda-session-uuid'] = sessionCookieValue;
}
var userID = getCookie("fw_ID");
try {
var commonGASubSetKeys = JSON.parse('{"common_tags":{"page_type":"","sport":"","loggedIn_user_id":""},"article_page_tags":{"author_slug":"","published_date":"","tax-list":""},"non_amp_tags":{"SEO_article":"","Adaptive_Tag":""},"cmc_page_tags":{"match_id":"","commentary":"","match_status":"","start_time":"","end_time":""}}' || '{}');
if (Object.keys(commonGASubSetKeys).length > 0) {
var commonTags = commonGASubSetKeys["common_tags"];
gaSubSet["page_type"] = 'Eventpage';
if (("WWE").length > 0) {
gaSubSet["sport"] = 'WWE';
}
if (("Vidazoo").length > 0) {
gaSubSet["sk_version"] = "Vidazoo";
}
if (userID > 0) {
gaSubSet["loggedIn_user_id"] = userID;
}
var nonAMPTags = commonGASubSetKeys["non_amp_tags"];
for (var tagKey in nonAMPTags) {
if (tagKey == "SEO_article" && (("").length > 0)) {
gtag( 'set' , { 'dimension4' : "true" } );
gaSubSet[tagKey] = "https://www.sportskeeda.com/go/wwe-crown-jewel";
} else if (tagKey == "Adaptive_Tag" && ("").length > 0 && "" == 'adaptive_page') {
gaSubSet[tagKey] = '';
} else {
gtag( 'set' , { 'dimension4' : "false" } );
}
}
}
} catch(e) {
console.log(e);
}
var userAdoptionType = getUserAdoptionType(gaSubSet["page_type"]);
if (userAdoptionType) {
gaSubSet["userAdoptionType"] = userAdoptionType;
}
var userAdoptionTypeLast30Days = getUserAdoptionTypeLast30Days(gaSubSet["page_type"]);
if (userAdoptionTypeLast30Days) {
gaSubSet["userAdoptionTypeLast30Days"] = userAdoptionTypeLast30Days;
}
gaSubSet["source_url"] = window.location.pathname + window.location.search;
gaSubSet["source_title"] = document.title;
var pageType = "Eventpage";
var authWallRejectKey = getLocalStorageData("Auth_wall_reject") || false;
if (!loggedInUserID && authWallRejectKey) {
gaSubSet["auth_wall_reject"] = true;
}
var nonLoggedInEmail = getLocalStorageData("newsletter_email") || false;
if (!loggedInUserID && nonLoggedInEmail) {
gaSubSet["email_src"] = "Y";
}
if (!isVideoPage && "1") {
trackPageViewEvent(gaSubSet);
}
if (!isVideoPage && "") {
if(location.search.indexOf("key1=opera") > -1) {
trackPageViewEvent(gaSubSet, {
'send_to': gaID,
'page_path': location.pathname + location.search
});
} else {
if(sessionKey1CookieVal && sessionKey1CookieVal.indexOf("opera") > -1) {
trackPageViewEvent(gaSubSet, {
'send_to': gaID,
'page_path': location.pathname + location.search + (location.search ? "&" : "?") + "key1=" + sessionKey1CookieVal
});
} else {
trackPageViewEvent(gaSubSet);
}
}
}
}
window.addEventListener("custom:sk:analytics:triggerPageViewEvent", function(e) {
var eventParams = (e.detail && e.detail.params) || {};
gaSubSet = gaSubSet || {};
eventParams = Object.assign({}, gaSubSet, eventParams);
trackPageViewEvent(eventParams);
});
gtag('js', new Date());
gtag('config', GA4_ID, { send_page_view: false });
window.addEventListener("scroll", loadGA.bind(this, GA4_ID));
window.addEventListener("click", loadGA.bind(this, GA4_ID));
window.addEventListener("mousemove", loadGA.bind(this, GA4_ID));
if (getCookie("gdpr") == 'true') {
window['gtag_enable_tcf_support'] = true;
}
if(location.search.indexOf("opera") > -1 || sessionKey1CookieVal.indexOf("opera") > -1 || location.pathname.indexOf("third-party/") > -1 || location.hostname.includes("opera")) {
loadGA(GA4_ID);
}
function sendToGoogleAnalytics(metric) {
var eventParams = {
metric_value: metric.value,
metric_delta: metric.delta,
metric_rating: metric.rating,
sk_version: "Vidazoo",
pageType: pageType,
}
switch (metric.name) {
case 'CLS':
eventParams.debug_target = metric.attribution.largestShiftTarget;
break;
case 'FID':
case 'INP':
eventParams.debug_target = metric.attribution.eventTarget;
eventParams.debug_event_type = metric.attribution.eventType;
break;
case 'LCP':
eventParams.debug_target = metric.attribution.element;
eventParams.debug_url = metric.attribution.url;
break;
}
trackGAEvent(metric.name, eventParams);
}
// Code is executed only on .1% of the pages
if(Math.floor(Math.random() * 100) <= 1 || window.location.search.indexOf('webvitals') >= 0) {
(function loadWebVitals() {
if(!true) {
return;
}
loadScriptAsync("https://unpkg.com/web-vitals/dist/web-vitals.attribution.iife.js", function() {
webVitals.onCLS(sendToGoogleAnalytics);
webVitals.onFID(sendToGoogleAnalytics);
webVitals.onLCP(sendToGoogleAnalytics);
webVitals.onINP(sendToGoogleAnalytics);
webVitals.onFCP(sendToGoogleAnalytics);
webVitals.onTTFB(sendToGoogleAnalytics);
});
})();
}
</script>
<script>
var trackGAEvent = (function() {
var GA4_ID = "G-T41EZF14QW";
var LANG = "en".toUpperCase();
var RELEASE_VERSION = "Vidazoo";
var device = "1" ? "Desktop" : "Mobile";
var pageNumber = "";
var pageType = "Eventpage";
var sportSlug = "wwe";
var eventSlug = "wwe-crown-jewel";
var keedaUserID = getCookie("fw_ID");
var keedaSessionUUID = getCookie("keeda-session-uuid");
function eventTracker(eventName, eventParams) {
var pageUrl = window.location.pathname + window.location.search;
var pageTitle = document.title;
eventParams = eventParams || {};
var params = Object.assign({}, {
lang: LANG,
send_to: GA4_ID,
sk_version: RELEASE_VERSION,
device: device,
source_url: pageUrl,
source_title: pageTitle,
page_type: pageType,
}, eventParams);
if (pageNumber) {
params["page_number"] = pageNumber;
}
if (sportSlug) {
params["sport_slug"] = sportSlug;
}
if (eventSlug) {
params["event_slug"] = eventSlug;
}
if (keedaUserID) {
params["loggedIn_user_id"] = keedaUserID;
}
if (keedaSessionUUID) {
params["keeda_session_uuid"] = keedaSessionUUID;
}
console.info("GTAG EVENT --> ", eventName, params);
gtag("event", eventName, params);
}
return eventTracker;
})();
var trackNonInteractiveGAEvent = function(eventName, eventParams) {
return trackGAEvent(eventName, Object.assign({ "non-interaction": true }, eventParams));
}
var notifyWhenInViewport = (function() {
var trackedElement = {};
var registeredCallbacks = {};
var firedTimers = {};
var SECONDS_TO_REMAIN_IN_VP = 1;
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (!entry.target) return;
var identifier = entry.target.dataset["impId"];
if (!identifier) return;
if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
var timer = firedTimers[identifier];
if (timer) {
clearTimeout(timer);
trackedElement[identifier] = false;
}
return;
}
if (trackedElement[identifier]) return;
trackedElement[identifier] = true;
var callback = registeredCallbacks[identifier];
if (typeof callback == "function") {
firedTimers[identifier] = setTimeout(function() {
observer.unobserve(entry.target);
callback(entry.target);
}, SECONDS_TO_REMAIN_IN_VP * 1000);
}
});
}, {
threshold: 0.5
});
return function(element, identifier, callback) {
if (!element) return;
if (!identifier) return;
if (!callback) return;
if (trackedElement[identifier]) return;
element.setAttribute("data-imp-id", identifier);
registeredCallbacks[identifier] = callback;
observer.observe(element);
}
})();
var trackImpressionGAEventWhenInViewport = function(input) {
var element = input.element;
var identifier = input.identifier;
var eventName = input.eventName;
var eventParams = input.eventParams;
var callback = input.callback;
return notifyWhenInViewport(element, identifier, function() {
trackNonInteractiveGAEvent(eventName, eventParams);
if (typeof callback == "function") {
callback(element);
}
});
}
</script>
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "WebPage",
"name": "WWE Crown Jewel 2023 Match-Card, News, Results &amp; More",
"description": "Get all the latest Update of WWE Crown Jewel 2023- photos, results, grades, recaps and more Exclusively on @Sportskeeda",
"url": "https://www.sportskeeda.com",
"dateModified": "2023-11-05T01:49:32+5:30",
"mainEntityOfPage":"https://www.sportskeeda.com/go/wwe-crown-jewel",
"headline":"WWE Crown Jewel 2023 Match-Card, News, Results &amp; More",
"publisher": {
"@context": "http://schema.org",
"@type": "Organization",
"name": "Sportskeeda",
"logo": {
"@context": "http://schema.org",
"@type": "ImageObject",
"url": "//staticg.sportskeeda.com/logo/brand_logos/sportskeeda_logo.png",
"width": 600,
"height": 60
},
"url": "https://www.sportskeeda.com"
},
"mainEntity": {
"@type": "Thing",
"name":"WWE Crown Jewel 2023 Match-Card, News, Results &amp; More"
}
}
</script>
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "Organization",
"name": "Sportskeeda",
"url": "https://www.sportskeeda.com",
"ethicsPolicy": "https://www.sportskeeda.com/ethics",
"correctionsPolicy": "https://www.sportskeeda.com/corrections",
"founder": "Porush Jain",
"foundingDate": "2009",
"sameAs": [
"sports keeda",
"sportkeeda",
"https://m.facebook.com/Sportskeeda",
"https://twitter.com/Sportskeeda",
"https://www.instagram.com/sportskeeda",
"https://www.youtube.com/c/SportskeedaIndia",
"https://www.linkedin.com/company/sportskeeda-com",
"https://en.wikipedia.org/wiki/Sportskeeda"
],
"logo": {
"@type": "ImageObject",
"url": "//staticg.sportskeeda.com/logo/brand_logos/sportskeeda_logo__schema.png",
"width": 600,
"height": 60
},
"brand": "Sportskeeda"
}
</script>
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [{
"@type": "ListItem",
"position": 1,
"item": {
"@id": "https://www.sportskeeda.com",
"name": "Home"
}
}
, {
"@type": "ListItem",
"position": 2,
"item": {
"@id": "https://www.sportskeeda.com/wwe",
"name": "WWE"
}
}
, {
"@type": "ListItem",
"position": 3,
"item": {
"@id": "https://www.sportskeeda.com/go/wwe-crown-jewel",
"name": "WWE Crown Jewel 2023"
}
}
]
}
</script>
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "FAQPage",
"headline": "WWE Crown Jewel 2023 Match-Card, News, Results &amp; More",
"mainEntity": [
{
"@type": "Question",
"name": "When is Crown Jewel 2023?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Crown Jewel will take place on Saturday, November 4, 2023."
}
}
,									{
"@type": "Question",
"name": "Where is Crown Jewel 2023?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Crown Jewel 2023 will take place live from Mohammad Abdu Arena in Riyadh, Saudi Arabia."
}
}
,									{
"@type": "Question",
"name": "Will Roman Reigns compete at Crown Jewel?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Roman Reigns defended his Undisputed WWE Universal Championship against LA Knight at Crown Jewel."
}
}
,									{
"@type": "Question",
"name": "Will John Cena compete at Crown Jewel?",
"acceptedAnswer": {
"@type": "Answer",
"text": "John Cena lost to Solo Sikoa at Crown Jewel 2023."
}
}
,									{
"@type": "Question",
"name": "How many WWE Crown Jewels are there?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The 2023 edition of Crown Jewel will be the fifth in Event&#039;s history after 2018, 2019, 2021 and 2022."
}
}
]
}
</script>
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "Article",
"headline": "WWE Crown Jewel 2023 Match-Card, News, Results &amp; More",
"image": {
"@type": "ImageObject",
"url": "https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg"
},
"datePublished" : "2019-10-09T12:09:59+05:30",
"dateModified": "2023-11-05T01:49:32+05:30",
"author": {
"@type": "Person",
"name": "SK Desk",
"url": "https://www.sportskeeda.com/profile/sportskeeda"
}
}
</script>
<script defer="true">
asyncScriptLoader({
src: "https://applets.ebxcdn.com/ebx.js",
onUserInteraction: true,
attributes: [{
key: "id",
value: "ebx",
}],
});
</script>
<script defer="true">
window.ExitBeeObject = "xtb";
window.xtb = window.xtb || function() {
(window.xtb.args = window.xtb.args || []).push(arguments);
};
(function() {
function loadExitBeeScript() {
asyncScriptLoader({
src: "https://cdn.exitbee.com/xtb.min.js",
onUserInteraction: true,
});
window.xtb("loadSite", "8106");
}
var countryCode = getCookie("country_code");
if (["UK", "GB"].includes(countryCode)) {
loadExitBeeScript();
}
})();
</script>

<script defer="defer">
(function() {
var comScoreFired = false;
function lazyLoadComscoreScript() {
if (comScoreFired) {
return;
}
comScoreFired = true;
var _comscore = _comscore || [];
_comscore.push({ c1: "2", c2: "13438550" });
(function() {
var s = document.createElement("script"),
el = document.getElementsByTagName("script")[0];
s.async = true;
s.src =
(document.location.protocol == "https:"
? "https://sb"
: "http://b") + ".scorecardresearch.com/beacon.js";
el.parentNode.insertBefore(s, el);
})();
}
document.addEventListener("scroll", lazyLoadComscoreScript, { passive: true, once: true });
document.addEventListener("mousemove", lazyLoadComscoreScript, { passive: true, once: true });
document.addEventListener("touchmove", lazyLoadComscoreScript, { passive: true, once: true });
})();
</script>
<noscript>
<img src="//b.scorecardresearch.com/p?c1=2&c2=13438550&cv=2.0&cj=1" />
</noscript>

<script defer src="/js/production/ads/gpt_script-bundle-cb767f832f.js"></script>
<script defer src="/js/production/ad-message-handler-bundle_0f61c2.js"></script>
<script>
if (admiralLoaded == undefined) {
var admiralLoaded = false;
}
function loadAdmiral() {
if (admiralLoaded) return;
admiralLoaded = true;
!(function(o,_name){function n(){(n.q=n.q||[]).push(arguments)}n.v=1,o[_name]=o[_name]||n;!(function(o,t,n,c){function e(n){(function(){try{return(localStorage.getItem("v4ac1eiZr0")||"").split(",")[4]>0}catch(o){}return!1})()&&(n=o[t].pubads())&&n.setTargeting("admiral-engaged","true")}(c=o[t]=o[t]||{}).cmd=c.cmd||[],typeof c.pubads===n?e():typeof c.cmd.unshift===n?c.cmd.unshift(e):c.cmd.push(e)})(window,"googletag","function");})(window,String.fromCharCode(97,100,109,105,114,97,108));!(function(t,c,i){i=t.createElement(c),t=t.getElementsByTagName(c)[0],i.async=1,i.src="https://quillkick.com/v2ldofPBf-ZkhaDwYsjjJoANJra67QwZmzMyGqNycD1ljkUCRgpz7QMA",t.parentNode.insertBefore(i,t)})(document,"script");
}
document.addEventListener("scroll", loadAdmiral, { passive: true, once: true });
document.addEventListener("mousemove", loadAdmiral, { passive: true, once: true });
document.addEventListener("touchmove", loadAdmiral, { passive: true, once: true });
</script>
<script type="text/javascript">
window.addEventListener("SK__GPT_SCRIPT_LOADED", function() {
asyncScriptLoader({
src: INTERSTITIAL_DEFINITION_SCRIPT_LOCATION,
loadWithAsync: true,
attributes: [{
key: "id",
value: "INTERSTITIAL_DEFINITION_SCRIPT_LOCATION",
}]
});
googletag.cmd.push(function() {
var uniqueBrowserIdCookie = getCookie("unique_browser_id");
uniqueBrowserIdCookie && googletag.pubads().setPublisherProvidedId(uniqueBrowserIdCookie);
googletag.pubads().setTargeting("lang", "en");
googletag.pubads().setTargeting("url", window.location.href.substr(0, 40));
googletag.pubads().setTargeting("device-cost", String(getUserDeviceCost(getCookie("device-cost"))));
googletag.pubads().setTargeting("version", "Vidazoodesktop");
googletag.pubads().setTargeting("pubstack_tag_version", "HeaderBiddingImprovements01");
googletag.pubads().setTargeting("Floor", KeedaPrebidUtilsInstance.getFloorPricingForGAM());
googletag.pubads().setTargeting("pagetype", "Eventpage");
googletag.pubads().setTargeting("slug", "wwe-crown-jewel".substring(0, 40));
googletag.pubads().setTargeting("sport", "WWE");
googletag.pubads().setTargeting("sport_slug", "wwe");
googletag.pubads().setTargeting("event", "wwe-crown-jewel");
googletag.pubads().setTargeting("event_slug", "wwe-crown-jewel");
var queryParams = document.location.search.replace('?', "").split('&');
for (var i = 0; i < queryParams.length; i += 1) {
var keyValuePair = queryParams[i].split('=');
var key = keyValuePair[0];
if(key === "key1" && keyValuePair[1]) {
var value = keyValuePair[1];
if(value == "micricket" 
&& !isInWebview()) {
googletag.pubads().setTargeting("key1", "micricketchrome");
} else {
googletag.pubads().setTargeting(key, value);
}
} else if(key === "key2" && keyValuePair[1]) {
var value = keyValuePair[1];
googletag.pubads().setTargeting(key, value);
} else if(key === "key4" && keyValuePair[1]) {
var value = keyValuePair[1];
googletag.pubads().setTargeting(key, value);
} else if(key === "utm_source" && keyValuePair[1]) {
var value = keyValuePair[1];
googletag.pubads().setTargeting(key, value);
} else if(key === "utm_medium" && keyValuePair[1]) {
var value = keyValuePair[1];
googletag.pubads().setTargeting(key, value);
} else {
var sessionKey1CookieVal = getCookie("sessionKey1");
if(sessionKey1CookieVal) {
if(sessionKey1CookieVal == "micricket" 
&& !isInWebview()) {
googletag.pubads().setTargeting("key1", "micricketchrome");
} else {
googletag.pubads().setTargeting("key1", sessionKey1CookieVal);
}
}
}
}
function isInWebview() {
if(window.navigator) {
var rulesForWebview =  [
'WebView',
'(iPhone|iPod|iPad)(?!.*Safari)',
'Android.*(wv|.0.0.0)',
'Linux; U; Android'
];
var webviewRegExp = new RegExp('(' + rulesForWebview.join('|') + ')', 'ig');
return !!window.navigator.userAgent.match(webviewRegExp)
}
}
var intoWowCookie = getCookie("intowow");
if (intoWowCookie) {
googletag.pubads().setTargeting("intowow_enabled", intoWowCookie);
}
var philipsCookie = getCookie("philipsInteraction");
if (philipsCookie) {
googletag.pubads().setTargeting("campaign", "philips");
}
if (isFacebookApp()) {
googletag.pubads().setTargeting("knownBrowserType", "facebook");
}
googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs();
googletag.enableServices();
requestBidsForRegisteredAdUnits();
});
});
</script>
</head>
<body class="wwe-crown-jewel">
<div class="page-container">
<section class="top-header masthead">
<style>
:root {
--topHeaderHeight: 49px;
}
.header--top-head {
width: 100%;
height: var(--topHeaderHeight);
background: #FFFFFF;
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.07);
}
.header--top-head .v-gap {
padding-top: 16px;
padding-bottom: 16px;
}
.header--top-head .top-head-container {
padding: 0 24px;
display: flex;
gap: 10px;
align-items: center;
}
@media screen and (max-width: 768px) {
.header--top-head .top-head-container {
padding-left: 16px;
padding-right: 16px;
}
}
.header--top-head .left {
display: flex;
align-items: center;
justify-content: flex-start;
flex: 1;
}
.header--top-head .center {
position: relative;
display: flex;
align-items: center;
}
.header--top-head .right {
display: flex;
align-items: center;
justify-content: flex-end;
flex: 1;
}
.header--top-head .brand-and-nav {
display: flex;
gap: 20px;
align-items: center;
flex: 1;
}
.header--top-head .top-nav {
display: flex;
flex: 1;
justify-content: center;
}
.header--top-head .sidebar-toggle {
display: flex;
}
.header--top-head .sidebar-toggle button {
background-color: transparent;
border: none;
padding: 0;
margin: 0;
cursor: pointer;
display: flex;
align-items: center;
width: 18px;
height: 14px;
background-image: url("//staticg.sportskeeda.com/skm/assets/header/btn-menu.svg");
background-repeat: no-repeat;
}
.header--top-head .sidebar-toggle button img {
width: 18px;
height: 14px;
}
.header--top-head .primary-nav {
display: flex;
}
.header--top-head .cta-island {
display: flex;
gap: 15px;
align-items: center;
}
.header--top-head .cta-island .cta-button {
width: 24px;
height: 24px;
background: #FFFFFF;
border: 1px solid #D1D1D1;
border-radius: 14px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}
.header--top-head .cta-island .cta-button .icon {
display: flex;
width: 12px;
height: 12px;
background-repeat: no-repeat;
background-size: cover;
}
.header--top-head .cta-island .cta-button .icon.keeda-search-icon {
background-image: url("//staticg.sportskeeda.com/skm/assets/header/btn-search-white.svg");
filter: brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1088%) hue-rotate(178deg) brightness(93%) contrast(76%);
}
.header--top-head .cta-island .cta-button .icon.keeda-notification-icon {
background-image: url("//staticg.sportskeeda.com/skm/assets/header/btn-notifications-speaker-white.svg");
filter: brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1088%) hue-rotate(178deg) brightness(93%) contrast(76%);
}
.header--top-head .cta-island .cta-button .icon.keeda-pencil-icon {
background-image: url("//staticg.sportskeeda.com/skm/assets/header/btn-pencil-white.svg");
filter: brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1088%) hue-rotate(178deg) brightness(93%) contrast(76%);
}
</style>
<header class="header--top-head">
<div class="top-head-container">
<div class="left v-gap">
<div class="sidebar-toggle">
<button id="main-menu" role="button" aria-label="sidebar menu toggle"></button>
</div>
</div>
<div class="wrapper-container">
<div class="center">
<div class="brand-and-nav">
<div class="brand">
<a href="/" class="brand-cta">
<style>
.header--top-head .brand {
display: flex;
}
.header--top-head .brand a {
display: flex;
align-items: center;
text-decoration: none;
color: #34495e;
font-size: 16px;
line-height: 21px;
gap: 10px;
}
.header--top-head .brand img {
display: block;
}
.header--top-head .brand .lang-text {
display: block;
border-left: 1px solid #34495e;
margin: 0;
padding-left: 5px;
padding-left: 10px;
}
.header--top-head .brand img.brand-logo {
width: 200px;
height: 24px;
}
</style>
<img class="brand-logo" width="200" height="24" alt="Sportskeeda logo" title="Sportskeeda" src="//staticg.sportskeeda.com/logo/brand_logos/full-vector.svg" />
</a>
</div>
<div class="top-nav">
<style>
.top-navigation {
display: flex;
}
.top-navigation nav ul.top-nav-items-list {
display: flex;
gap: 20px;
padding: 0;
margin: 0;
}
.top-navigation ul.top-nav-items-list>li {
display: flex;
position: relative;
}
.top-navigation ul.top-nav-items-list>li.active::after {
content: "";
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%);
width: 0;
height: 0;
border-style: solid;
border-width: 0 7.5px 7px 7.5px;
border-color: transparent transparent #d32f2f transparent;
}
.top-navigation ul.top-nav-items-list li a {
cursor: pointer;
display: flex;
padding: 16px 2px;
text-decoration: none;
color: #474747;
font-weight: 600;
font-size: 14px;
line-height: 17px;
white-space: nowrap;
}
.top-navigation ul.top-nav-items-list li a:hover,
.top-navigation ul.top-nav-items-list>li.active a {
color: #D32F2F;
}
.top-navigation ul.top-nav-items-list li.more-items div.anchor {
display: flex;
align-items: center;
cursor: pointer;
}
.top-navigation ul.top-nav-items-list li.more-items .more-items-container {
z-index: 1;
position: absolute;
right: 0px;
top: 40px;
overflow-y: auto;
display: flex;
background: #FFFFFF;
border: 1px solid #E9E9E9;
box-shadow: -1px 6px 12px rgb(0 0 0 / 10%);
border-radius: 6px;
transition: all ease 200ms;
transform: translateY(20px);
opacity: 0;
visibility: hidden;
}
.top-navigation ul.top-nav-items-list li.more-items:hover .more-items-container {
transform: translateY(0px);
opacity: 1;
visibility: visible;
}
.top-navigation ul.top-nav-items-list li.more-items ul.more-items-list {
width: 100%;
margin: 0;
padding: 12px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-auto-flow: row;
grid-row-gap: 10px;
}
.top-navigation ul.top-nav-items-list li.more-items ul.more-items-list>li {
position: relative;
width: 100%;
display: flex;
}
.top-navigation ul.top-nav-items-list li.more-items ul.more-items-list>li>a {
text-decoration: none;
white-space: nowrap;
display: flex;
width: 100%;
align-items: center;
padding: 7px 15px;
color: #474747;
font-weight: 600;
font-size: 13px;
line-height: 18px;
}
.top-navigation ul.top-nav-items-list li.more-items ul.more-items-list>li>a:hover {
color: #d32f2f;
background-color: #f5f5f5;
}
</style>
<div class="top-navigation">
<nav>
<ul class="top-nav-items-list hidden">
<li class="active">
<a href="/wwe" data-sequence="1">WWE</a>
</li>
<li>
<a href="/basketball" data-sequence="2">NBA</a>
</li>
<li>
<a href="/nfl" data-sequence="3">NFL</a>
</li>
<li>
<a href="/mma" data-sequence="4">MMA</a>
</li>
<li>
<a href="/tennis" data-sequence="5">Tennis</a>
</li>
<li>
<a href="/pop-culture" data-sequence="6">POP Culture</a>
</li>
<li>
<a href="/golf" data-sequence="7">Golf</a>
</li>
<li class="more-items">
<div class="anchor">
<img width="19" height="24" alt="list-icon" src="//staticg.sportskeeda.com/web-onboarding/show-more-list.svg" />
</div>
<div class="more-items-container">
<ul class="more-items-list">
<li>
<a href="/baseball" data-sequence="7">MLB</a>
</li>
<li>
<a href="/fortnite" data-sequence="8">Fortnite</a>
</li>
<li>
<a href="/cricket" data-sequence="9">Cricket</a>
</li>
<li>
<a href="/football" data-sequence="10">Football</a>
</li>
<li>
<a href="/health-and-fitness" data-sequence="11">Health & Fitness</a>
</li>
<li>
<a href="/esports" data-sequence="12">Gaming</a>
</li>
<li>
<a href="/minecraft" data-sequence="13">Minecraft</a>
</li>
<li>
<a href="/f1" data-sequence="14">F1</a>
</li>
<li>
<a href="/motorsports" data-sequence="15">Motorsports</a>
</li>
<li>
<a href="/nfl/fantasy-football-trade-analyzer" data-sequence="16">Fantasy Football Trade Analyzer</a>
</li>
<li>
<a href="/fantasy-cricket-mantra" data-sequence="17">Fantasy Cricket</a>
</li>
</ul>
</div>
</li>
</ul>
</nav>
</div>
<script>
(function() {
var topNavContainer = $(".top-navigation");
if (!topNavContainer) return;
var topLevelItemsList = topNavContainer.querySelector("ul.top-nav-items-list");
var moreItemsContainer = topNavContainer.querySelector(".more-items");
var moreItemsList = topNavContainer.querySelector("ul.more-items-list");
var userCountry = getCookie("country_code") || "US";
var menuJson = [{"group_id":1,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":1,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":1,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":1,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":1,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":1,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"US","image_url":""},{"group_id":1,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":1,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"US","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":1,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":1,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":1,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":12,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":1,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":1,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":1,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":15,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":1,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":16,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":1,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"US","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":1,"term_taxonomy_id":84468,"type":"post_tag","sport_slug":"nfl","order_id":18,"href":null,"slug":"fantasy-football-trade-analyzer","name":"Fantasy Football Trade Analyzer","menu_name":"Fantasy Football Trade Analyzer","parent_location":"US","image_url":""},{"group_id":1,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"US","image_url":""},{"group_id":2,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":2,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":2,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":3,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":2,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":2,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":2,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"IN","image_url":""},{"group_id":2,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":7,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":2,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":2,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":9,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":2,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":2,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":11,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"IN","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":2,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":12,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":2,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":2,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":15,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":2,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":16,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":2,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"IN","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":2,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"IN","image_url":""},{"group_id":2,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"IN","image_url":""},{"group_id":3,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":3,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":3,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":3,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":3,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":3,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":5,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":3,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"UK","image_url":""},{"group_id":3,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":3,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":3,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":9,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":3,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"UK","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":3,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":11,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":3,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":12,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":3,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":3,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":15,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":3,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":16,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":3,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"UK","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":3,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"UK","image_url":""},{"group_id":3,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"UK","image_url":""},{"group_id":4,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":4,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":4,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":4,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":4,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":4,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"CA","image_url":""},{"group_id":4,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":4,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"CA","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":4,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":4,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":4,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":4,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":4,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":4,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":4,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":4,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":4,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"CA","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":4,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"CA","image_url":""},{"group_id":4,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"CA","image_url":""},{"group_id":5,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":5,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":5,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":5,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":5,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":5,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"SG","image_url":""},{"group_id":5,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":5,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"SG","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":5,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":5,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":5,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":5,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":5,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":5,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":5,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":5,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":5,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"SG","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":5,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"SG","image_url":""},{"group_id":5,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"SG","image_url":""},{"group_id":6,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":6,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":6,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":6,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":6,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":6,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"AU","image_url":""},{"group_id":6,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":6,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"AU","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":6,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":6,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":6,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":6,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":6,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":6,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":6,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":6,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":6,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"AU","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":6,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"AU","image_url":""},{"group_id":6,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"AU","image_url":""},{"group_id":7,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":7,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":7,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":7,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":7,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":7,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"ZA","image_url":""},{"group_id":7,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":7,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"ZA","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":7,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":7,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":7,"term_taxonomy_id":63761,"type":"post_tag","sport_slug":"fortnite","order_id":11,"href":null,"slug":"fortnite-item-shop","name":"Fortnite Item Shop","menu_name":"Fortnite Item Shop","parent_location":"ZA","image_url":""},{"group_id":7,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":7,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":7,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":7,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":7,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":7,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":7,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"ZA","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":7,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"ZA","image_url":""},{"group_id":7,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"ZA","image_url":""},{"group_id":8,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":8,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":8,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":8,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":8,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":8,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"AE","image_url":""},{"group_id":8,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":8,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"AE","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":8,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":8,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":8,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":8,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":8,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":8,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":8,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":8,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":8,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"AE","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":8,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"AE","image_url":""},{"group_id":8,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"AE","image_url":""},{"group_id":9,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":9,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":9,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":9,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":9,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":9,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"NZ","image_url":""},{"group_id":9,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":9,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"NZ","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":9,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":9,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":9,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":9,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":9,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health and Fitness","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":9,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":9,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":9,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":9,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"NZ","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":9,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"NZ","image_url":""},{"group_id":9,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"NZ","image_url":""},{"group_id":10,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":10,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":10,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":10,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":10,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":10,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"MY","image_url":""},{"group_id":10,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":10,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"MY","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":10,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":10,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":10,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":10,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":10,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health and Fitness","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":10,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":10,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":10,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":10,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"MY","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":10,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"MY","image_url":""},{"group_id":10,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"MY","image_url":""},{"group_id":11,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":11,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":11,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":11,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":11,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":11,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"NG","image_url":""},{"group_id":11,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":11,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"NG","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":11,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":11,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":11,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":11,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":11,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health and Fitness","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":11,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":11,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":11,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":11,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"NG","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":11,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"NG","image_url":""},{"group_id":11,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"NG","image_url":""},{"group_id":12,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":12,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":12,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":12,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":12,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":12,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"IE","image_url":""},{"group_id":12,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":12,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"IE","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":12,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":12,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":12,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":12,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":12,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health and Fitness","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":12,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":12,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":12,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":12,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"IE","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":12,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"IE","image_url":""},{"group_id":12,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"IE","image_url":""},{"group_id":13,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":13,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":13,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":13,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":13,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":13,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"BE","image_url":""},{"group_id":13,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":13,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"BE","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":13,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":13,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":13,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":13,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":13,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health and Fitness","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":13,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":13,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":13,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":13,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"BE","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":13,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"BE","image_url":""},{"group_id":13,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"BE","image_url":""},{"group_id":14,"term_taxonomy_id":29040,"type":"category","sport_slug":"sports","order_id":1,"href":null,"slug":"wwe","name":"WWE","menu_name":"WWE","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/37c59-16375598461300-1920.jpg"},{"group_id":14,"term_taxonomy_id":15,"type":"category","sport_slug":"sports","order_id":2,"href":null,"slug":"basketball","name":"Basketball","menu_name":"NBA","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/db774-16375659551967-1920.jpg"},{"group_id":14,"term_taxonomy_id":30718,"type":"category","sport_slug":"gridiron","order_id":3,"href":null,"slug":"nfl","name":"NFL","menu_name":"NFL","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f340b-16375654445375-1920.jpg"},{"group_id":14,"term_taxonomy_id":16837,"type":"category","sport_slug":"sports","order_id":4,"href":null,"slug":"mma","name":"MMA","menu_name":"MMA","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/f2aaf-16375659994284-1920.jpg"},{"group_id":14,"term_taxonomy_id":6,"type":"category","sport_slug":"sports","order_id":5,"href":null,"slug":"tennis","name":"Tennis","menu_name":"Tennis","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a1109-16375616265618-1920.jpg"},{"group_id":14,"term_taxonomy_id":55355,"type":"category","sport_slug":"esports","order_id":6,"href":null,"slug":"pop-culture","name":"SK POP","menu_name":"POP Culture","parent_location":"OTHERS","image_url":""},{"group_id":14,"term_taxonomy_id":9,"type":"category","sport_slug":"sports","order_id":7,"href":null,"slug":"golf","name":"Golf","menu_name":"Golf","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2022\/08\/27f85-16615430707763-1920.jpg"},{"group_id":14,"term_taxonomy_id":13914,"type":"category","sport_slug":"sports","order_id":8,"href":null,"slug":"baseball","name":"Baseball","menu_name":"MLB","parent_location":"OTHERS","image_url":"http:\/\/static.sportskeeda.com\/logo\/baseball.png"},{"group_id":14,"term_taxonomy_id":44080,"type":"category","sport_slug":"esports","order_id":9,"href":null,"slug":"fortnite","name":"Fortnite Battle Royale","menu_name":"Fortnite","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/16bb7-16375657948529-1920.jpg"},{"group_id":14,"term_taxonomy_id":4,"type":"category","sport_slug":"sports","order_id":10,"href":null,"slug":"cricket","name":"Cricket","menu_name":"Cricket","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/195f0-16375586405983-1920.jpg"},{"group_id":14,"term_taxonomy_id":36951,"type":"event","sport_slug":"cricket","order_id":12,"href":null,"slug":"icc-world-test-championship","name":"ICC World Test Championship Final","menu_name":"WTC Final","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2019\/08\/6c28b-15669030291370-800.jpg"},{"group_id":14,"term_taxonomy_id":3,"type":"category","sport_slug":"sports","order_id":13,"href":null,"slug":"football","name":"Football","menu_name":"Football","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/7f9e0-16375597215128-1920.jpg"},{"group_id":14,"term_taxonomy_id":34156,"type":"category","sport_slug":"sports","order_id":14,"href":null,"slug":"health-and-fitness","name":"Health and Fitness","menu_name":"Health & Fitness","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/89960-16375672774165-1920.jpg"},{"group_id":14,"term_taxonomy_id":16634,"type":"category","sport_slug":"sports","order_id":15,"href":null,"slug":"esports","name":"Esports & Gaming","menu_name":"Gaming","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/229ce-16375657316164-1920.jpg"},{"group_id":14,"term_taxonomy_id":54413,"type":"category","sport_slug":"esports","order_id":16,"href":null,"slug":"minecraft","name":"Minecraft","menu_name":"Minecraft","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/a38ec-16375658445734-1920.jpg"},{"group_id":14,"term_taxonomy_id":27,"type":"category","sport_slug":"sports","order_id":17,"href":null,"slug":"f1","name":"Formula 1","menu_name":"F1","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/editor\/2021\/11\/8f957-16375618038913-1920.jpg"},{"group_id":14,"term_taxonomy_id":418,"type":"category","sport_slug":"sports","order_id":18,"href":null,"slug":"motorsports","name":"Motorsports","menu_name":"Motorsports","parent_location":"OTHERS","image_url":"https:\/\/static.sportskeeda.com\/logo\/motorsports.png"},{"group_id":14,"term_taxonomy_id":53617,"type":"category","sport_slug":"sports","order_id":19,"href":null,"slug":"bos","name":"BOS - Business of Sports","menu_name":"BOS","parent_location":"OTHERS","image_url":""},{"group_id":14,"term_taxonomy_id":45311,"type":"category","sport_slug":"sports","order_id":20,"href":null,"slug":"fantasy-cricket-mantra","name":"Dream11 Prediction Cricket","menu_name":"Fantasy Cricket","parent_location":"OTHERS","image_url":""}];
var locationGroupMap = {"AD":13,"AE":8,"AF":2,"AG":13,"AI":13,"AL":13,"AM":13,"AO":11,"AP":10,"AQ":13,"AR":13,"AS":9,"AT":13,"AU":6,"AW":13,"AX":13,"AZ":13,"BA":13,"BB":13,"BD":2,"BE":13,"BF":11,"BG":13,"BH":8,"BI":11,"BJ":11,"BL":13,"BM":13,"BN":10,"BO":13,"BQ":13,"BR":13,"BS":13,"BT":2,"BW":11,"BY":13,"BZ":13,"CA":4,"CC":6,"CD":11,"CF":11,"CG":11,"CH":13,"CI":11,"CK":9,"CL":13,"CM":11,"CN":10,"CO":13,"CR":13,"CU":13,"CV":11,"CW":13,"CX":6,"CY":8,"CZ":13,"DE":13,"DJ":11,"DK":13,"DM":13,"DO":13,"DZ":8,"EC":13,"EE":13,"EG":8,"EH":8,"ER":11,"ES":13,"ET":11,"EU":13,"FI":13,"FJ":9,"FK":3,"FM":9,"FO":13,"FR":13,"GA":11,"GB":3,"GD":13,"GE":13,"GF":13,"GG":13,"GH":11,"GI":13,"GL":13,"GM":11,"GN":11,"GP":13,"GQ":11,"GR":13,"GS":9,"GT":13,"GU":9,"GW":11,"GY":13,"HK":10,"HN":13,"HR":13,"HT":13,"HU":13,"ID":10,"IE":12,"IL":8,"IM":13,"IN":2,"IO":3,"IQ":8,"IR":10,"IS":13,"IT":13,"JE":13,"JM":13,"JO":8,"JP":10,"KE":11,"KG":13,"KH":10,"KI":9,"KM":11,"KN":13,"KP":10,"KR":10,"KW":8,"KY":13,"KZ":13,"LA":10,"LB":8,"LC":13,"LI":13,"LK":2,"LR":11,"LS":11,"LT":13,"LU":13,"LV":13,"LY":8,"MA":8,"MC":13,"MD":13,"ME":13,"MF":13,"MG":11,"MH":9,"MK":13,"ML":11,"MM":10,"MN":10,"MO":10,"MP":1,"MQ":13,"MR":11,"MS":13,"MT":13,"MU":11,"MV":10,"MW":11,"MX":13,"MY":10,"MZ":11,"NA":11,"NC":9,"NE":11,"NF":9,"NG":11,"NI":13,"NL":13,"NO":13,"NP":2,"NR":9,"NU":9,"NZ":9,"OM":8,"OTHERS":14,"PA":13,"PE":13,"PF":9,"PG":6,"PH":10,"PK":2,"PL":13,"PM":3,"PN":9,"PR":13,"PS":8,"PT":13,"PW":9,"PY":13,"QA":8,"RE":11,"RO":13,"RS":13,"RU":13,"RW":11,"SA":8,"SB":9,"SC":11,"SD":11,"SE":13,"SG":5,"SH":11,"SI":13,"SJ":13,"SK":13,"SL":11,"SM":13,"SN":11,"SO":11,"SR":13,"SS":11,"ST":11,"SV":13,"SX":13,"SY":8,"SZ":11,"TC":13,"TD":11,"TF":13,"TG":11,"TH":10,"TJ":13,"TK":9,"TL":11,"TM":13,"TN":8,"TO":9,"TR":8,"TT":13,"TV":9,"TW":10,"TZ":11,"UA":13,"UG":11,"UM":1,"US":1,"UY":13,"UZ":13,"VA":13,"VC":13,"VE":13,"VG":13,"VI":13,"VN":10,"VU":9,"WF":9,"WS":9,"YE":8,"YT":11,"ZA":7,"ZM":11,"ZW":11};
var activeTopNavItem = {"slug":"wwe","label":"WWE","href":"\/wwe"};
function generateGeoBasedMenu() {
var countryGroupId = locationGroupMap[userCountry];
var menuItems = [];
if (activeTopNavItem && activeTopNavItem.slug) {
menuItems.push({
active: true,
href: activeTopNavItem.href,
label: activeTopNavItem.label
});
}
for (var i = 0; i < menuJson.length; i++) {
var group = menuJson[i];
if (group["slug"] == activeTopNavItem.slug) {
continue;
}
if (group["group_id"] != countryGroupId) {
continue;
}
if (!["category", "event", "post_tag"].includes(group["type"]) && !group["href"]) {
continue;
}
var url = group["slug"];
if (group["type"] == "event") {
url = ["go", url].join("/");
} else if (group["type"] == "post_tag") {
url = [group["sport_slug"], url].join("/");
} else if (group["href"]) {
url = group["href"];
}
if (!$group["href"]) {
url = "/" + url;
}
var menuItem = {
href: url,
label: group["menu_name"]
}
menuItems.push(menuItem);
}
return menuItems;
}
function generateOneMenuItem(input) {
return '<li class="$$CLASS$$"><a href="$$HREF$$" data-sequence="$$SEQUENCE$$">$$LABEL$$</a></li>'
.replace("$$CLASS$$", input.active ? "active" : "")
.replace("$$HREF$$", input.href)
.replace("$$LABEL$$", input.label)
.replace("$$SEQUENCE$$", input.sequence);
}
function renderGeoBasedMenu(menuItems) {
var topNumberOfItems = Number("7") || 7;
var topLevelItems = menuItems.slice(0, topNumberOfItems);
var nestedLevelItems = menuItems.slice(topNumberOfItems);
var topLevelItemsDom = topLevelItems.map(function(menuItem, i) {
return generateOneMenuItem({
href: menuItem.href,
label: menuItem.label,
active: menuItem.active,
sequence: i + 1
});
});
var nestedLevelItemsDom = nestedLevelItems.map(function(menuItem, i) {
return generateOneMenuItem({
href: menuItem.href,
label: menuItem.label,
sequence: topNumberOfItems + i + 1
});
});
if (nestedLevelItems.length) {
moreItemsList.innerHTML = nestedLevelItemsDom.join("");
} else {
moreItemsList.innerHTML = "";
addClass(moreItemsContainer, "hidden");
}
topLevelItemsList.innerHTML = topLevelItemsDom.join("") + moreItemsContainer.outerHTML;
removeClass(topLevelItemsList, "hidden");
}
try {
renderGeoBasedMenu(generateGeoBasedMenu());
} catch (err) {
removeClass(topLevelItemsList, "hidden");
}
})();
(function() {
var topNavContainer = $(".top-navigation");
if (!topNavContainer) return;
function onTopNavItemClicked(e) {
var navItemClicked = e.target.closest("a");
trackGAEvent("TOP_NAV_MENU_ITEM_CLICK", {
destination_url: navItemClicked.getAttribute("href"),
destination_label: navItemClicked.innerText,
sequence: navItemClicked.dataset["sequence"]
})
}
function initAnalyticsEventsTrackers() {
var topNavItems = topNavContainer.querySelectorAll("ul li a");
topNavItems.forEach(function(navItem) {
navItem.addEventListener("click", onTopNavItemClicked);
});
trackImpressionGAEventWhenInViewport({
element: topNavContainer,
identifier: "page_top_nav_menu",
eventName: "TOP_NAV_MENU_IMPRESSION"
});
}
window.addEventListener("DOMContentLoaded", function() {
initAnalyticsEventsTrackers();
});
})();
</script>
</div>
</div>
<div class="cta-island">
<div id="keeda-notifications-container" title="Notifications">
<div class="cta-button">
<div class="icon keeda-notification-icon" id="kn-bell-icon"></div>
</div>
<div id="kn-bell-count"></div>
<div id="kn-pointer" style="display: none;"></div>
<div id="kn-content-container" style="display: none;">
<div class="kn-notification-header">
Notifications
</div>
<div class="kn-card-container">
</div>
<div class="kn-notification-footer">

</div>
</div>
<template id="kn-card">
<div class="kn-card-wrapper" data-notification-id>
<span class="kn-image-container">
<img class="kn-card-pic" />
</span>
<span class="kn-info-container">
<a class="kn-card-a"></a>
<div class="kn-card-date"></div>
</span>
</div>
</template>
</div>
<div class="cta-button" onclick="onHeaderSearchButtonClicked()" title="Search">
<div class="icon keeda-search-icon"></div>
</div>
<div class="cta-button" title="Writers Home">
<a href="/creator" aria-label="writers home">
<div class="icon keeda-pencil-icon"></div>
</a>
</div>
</div>
</div>
</div>
<div class="right">
<div id="keeda-profile-container">
<div class="logged-out hidden">
<a class="login-cta" href="#">Log in</a>
</div>
<div class="toggle hidden">
<style>
.popup .profile-intro {
border-bottom: 1px solid #E9E9E9;
padding: 20px;
display: flex;
}
#user-profile #profile-link {
color: #666666;
text-decoration: underline;
}
.profile-actions .action-img {
margin-right: 10px;
vertical-align: middle;
width: auto;
}
.popup .profile-actions {
height: auto;
padding: 15px 20px;
font-weight: 500;
max-height: 450px;
overflow-y: scroll;
overflow-x: hidden;
}
.profile-actions::-webkit-scrollbar {
-webkit-appearance: none;
width: 7px;
}
.profile-actions::-webkit-scrollbar-thumb {
border-radius: 4px;
background-color: rgba(0,0,0,.5);
box-shadow: 0 0 1px rgba(255,255,255,.5);
}
.profile-actions ul {
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 5px 0;
color: #999999;
font-size: 16px;
}
.profile-actions ul li {
padding: 8px 0;
flex: 50%;
font-size: 16px;
}
.profile-actions li a {
display: block;
width: 100%;
text-decoration: none;
color: #999999;
}
.profile-actions span {
font-size: 16px;
}
.profile-pic-div #profile-pic {
border-radius: 50%;
}
.logout-action .logout-btn {
display: block;
width: 100%;
color: #999999 !important;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
background-color: transparent;
}
.logout-action:hover .logout-btn {
transform: scale(1.01);
color: #D32F2F !important;
}
.popup .logout-action {
padding: 5px;
color: #999999;
text-align: center;
vertical-align: middle;
border-top: 1px solid #E9E9E9;
border-bottom: 1px solid #E9E9E9;
margin: 0 15px 15px 15px;
font-weight: 500;
}
#profile-menu-popup {
width: 410px !important;
height: auto;
border-radius: 6px;
right: 0;
top: 45px;
background: #FFFFFF;
box-sizing: border-box;
box-shadow: -1px 6px 12px rgba(0, 0, 0, 0.1);
z-index: 10000;
overflow: hidden;
position: absolute;
border: 1px solid #E9E9E9;
cursor: initial;
}
.profile-intro #user-name {
display: block;
font-size: 16px;
font-weight: 700;
margin-left: 0;
}
.profile-intro #user-status {
display: block;
font-size: 14px;
font-weight: 500;
color: #D32F2F;
}
.profile-intro #user-profile {
display: block;
font-size: 14px;
font-weight: 400;
}
.profile-pic-div {
flex: 0.2;
}
.profile-info-div {
flex: 0.8; padding: 0 10px;
}
.popup .profile-actions {
height: auto;
}
.profile-actions li:hover {
color: #D32F2F !important;
transform: scale(1.01);
}
.profile-actions li:hover a {
color: #D32F2F !important;
}
.popup .logout-action {
font-size: 16px;
}
</style>
<div id="profile-menu-popup" class="popup hidden">
<div class="profile-intro">
<div class="profile-pic-div" onclick="uploadPic();"><a href="/edit-profile"><img id="profile-pic" alt="default-profile-pic" width="68" height="68" src="//staticg.sportskeeda.com/skm/assets/profile-pic-upload.svg" loading="lazy" /></a></div>
<div class="profile-info-div">
<span id="user-name"></span>
<span id="user-status"></span>
<span id="user-profile" onclick="manageProfile();"><a id="profile-link">Manage your profile</a></span>
</div>
</div>
<div class="profile-actions"></div>
<div class="logout-action">
<button class="logout-btn" onclick="logout()">Logout</button>
</div>
</div>
<script>
function logout() {
window.location = "https://a-login.sportskeeda.com/en/logout?next=" + window.location.origin + window.location.pathname + window.location.search;
}
function manageProfile() {
gtag('event', 'MangeProfileClicked');
}
function uploadPic() {
gtag('event', 'ProfilePictureClicked');
}
document.addEventListener("click", function(event) {
// If user either clicks outside the popup
if (!event.target.closest("#profile-menu-popup") && !event.target.classList.contains("toggle")) {
addClass($("#profile-menu-popup"), "hidden");
}
}, false
)
</script>
</div>
</div>
</div>
</div>
</header>
<script>
(function() {
var container = $("header.header--top-head");
function initAnalyticsEvents() {
var brandCTA = container.querySelector(".brand a.brand-cta");
if (brandCTA) {
brandCTA.addEventListener("click", function(e) {
var clickedItem = e.target.closest("a");
trackGAEvent("BRAND_LOGO_CLICK", {
destination_url: clickedItem.getAttribute("href")
});
})
}
trackImpressionGAEventWhenInViewport({
element: container,
identifier: "page_top_header",
eventName: "TOP_HEADER_IMPRESSION"
});
}
window.addEventListener("DOMContentLoaded", function() {
if (!container) return;
initAnalyticsEvents();
});
})();
function onHeaderSearchButtonClicked() {
trackGAEvent("SEARCH_BUTTON_CLICK", {
"position": "header",
});
window.location = "/find";
}
</script>
</section>
<section class="primary-nav">
<style>
:root {
--primaryNavHeight: 42px;
}
.primary-navigation {
width: 100%;
height: var(--primaryNavHeight);
display: flex;
background: #080A3C;
color: #fff;
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.07);
padding: 0 18px;
}
.primary-navigation .nav-items {
position: relative;
display: flex;
align-items: center;
gap: 20px;
}
.primary-navigation .nav-items .secondary-navigation {
cursor: pointer;
display: flex;
position: relative;
}
.primary-navigation .nav-items .separator {
position: relative;
width: 5px;
height: var(--primaryNavHeight);
}
.primary-navigation .nav-items .separator::after,
.primary-navigation .nav-items .separator::before {
content: "";
width: 1px;
height: calc(50% + 1px);
background-color: #999;
position: absolute;
left: 0;
}
.primary-navigation .nav-items .separator::before {
top: 0;
transform: rotate(-20deg);
}
.primary-navigation .nav-items .separator::after {
bottom: 0;
transform: rotate(20deg);
}
.primary-navigation .nav-items .primary-nav-items {
display: flex;
flex: 1;
overflow: hidden;
overflow-x: auto;
-ms-overflow-style: none;
scrollbar-width: none;
}
.primary-navigation .primary-nav-items::-webkit-scrollbar {
display: none;
}
.primary-navigation .nav-group {
display: flex;
gap: 5px;
align-items: center;
position: relative;
}
.primary-navigation .nav-group .active-item {
color: #e9e9e9;
font-weight: 600;
font-size: 13px;
line-height: 18px;
}
.primary-navigation .primary-nav-items .overlay-icon {
position: relative;
left: 12px;
margin-left: -12px;
}
@media screen and (max-width: 768px) {
.primary-navigation .nav-group .active-item {
font-size: 12px;
padding: 9px 0;
}
}
.primary-navigation .nav-group .secondary-nav-items-indicator {
cursor: pointer;
display: block;
width: 11px;
height: 7px;
background-image: url("//staticg.sportskeeda.com/skm/assets/ic-chevron-top--e9e9e9.svg");
background-size: cover;
background-repeat: no-repeat;
transition: all ease 0.5s;
transform: rotate(180deg);
}
.primary-navigation .secondary-navigation:hover .secondary-nav-items-indicator {
transition: all ease 0.5s;
transform: rotate(0deg);
}
.primary-navigation .secondary-nav-items {
z-index: 1010;
position: absolute;
left: 0px;
top: 20px;
display: flex;
background: #FFFFFF;
border: 1px solid #dfdfdf;
box-shadow: -1px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 8px;
transition: all ease 200ms;
transform: translateY(20px);
opacity: 0;
visibility: hidden;
}
.primary-navigation .secondary-navigation:hover .secondary-nav-items {
transform: translateY(0px);
opacity: 1;
visibility: visible;
}
.primary-navigation .secondary-nav-items ul {
width: 100%;
margin: 0;
padding: 12px;
display: grid;
grid-template-rows: repeat(6, 1fr);
grid-auto-flow: column;
grid-row-gap: 10px;
}
.primary-navigation .secondary-nav-items ul li {
position: relative;
display: flex;
align-items: center;
}
.primary-navigation .secondary-nav-items ul li a {
text-decoration: none;
white-space: nowrap;
display: flex;
width: 100%;
align-items: center;
padding: 7px 15px;
color: #474747;
font-weight: 600;
font-size: 13px;
line-height: 18px;
}
.primary-navigation .secondary-nav-items ul li a:hover {
color: #d32f2f;
background-color: #f5f5f5;
}
.primary-navigation .secondary-nav-items ul li.active a {
color: #d32f2f;
}
.primary-navigation .primary-nav-items ul {
padding: 0;
margin: 0;
display: flex;
align-items: center;
gap: 20px;
}
.primary-navigation .primary-nav-items ul li {
position: relative;
width: 100%;
display: flex;
padding: 0 10px;
margin-left: -10px;
margin-right: -10px;
}
.primary-navigation .primary-nav-items ul li a {
text-decoration: none;
white-space: nowrap;
border-bottom: 4px solid transparent;
color: #E9E9E9;
font-weight: 600;
line-height: 18px;
padding: 10px 3px;
font-size: 13px;
}
.primary-navigation .primary-nav-items ul li a:hover {
color: #fff;
}
.primary-navigation .primary-nav-items ul li.active a {
color: #fff;
border-bottom-color: #d32f2f;
}
.primary-navigation .primary-nav-items ul li.inactive a {
color: rgba(255, 255, 255, 0.4);
}
.primary-navigation .primary-nav-items .more-items {
display: none;
}
.primary-navigation .primary-more-nav-items {
position: relative;
}
.primary-navigation .primary-more-nav-items .more-items-trigger {
cursor: pointer;
display: flex;
gap: 3px;
align-items: center;
border-bottom: 4px solid transparent;
}
.primary-navigation .primary-more-nav-items.active .more-items-trigger {
border-bottom-color: #d32f2f;
}
.primary-navigation .primary-more-nav-items .more-items-trigger--text {
cursor: pointer;
white-space: nowrap;
color: #E9E9E9;
font-weight: 600;
line-height: 18px;
padding: 10px 3px;
font-size: 13px;
}
.primary-navigation .primary-more-nav-items .more-items-trigger img {
display: block;
width: 11px;
height: 7px;
object-fit: cover;
filter: brightness(0) saturate(100%) invert(99%) sepia(7%) saturate(154%) hue-rotate(228deg) brightness(114%) contrast(83%);
transform: rotate(180deg);
transition: all ease 200ms;
}
.primary-navigation .primary-more-nav-items:hover .more-items-trigger img {
transform: rotate(0deg);
}
.primary-navigation .primary-more-nav-items .more-nav-menu-wrapper {
z-index: 1010;
position: absolute;
right: 0;
top: 43px;
display: flex;
background: #FFFFFF;
border: 1px solid #dfdfdf;
box-shadow: -1px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 8px;
transition: all ease 200ms;
transform: translateY(20px);
opacity: 0;
visibility: hidden;
}
.primary-navigation .primary-more-nav-items:hover .more-nav-menu-wrapper {
transform: translateY(0px);
opacity: 1;
visibility: visible;
}
.primary-navigation .primary-more-nav-items ul.more-nav-menu {
width: 100%;
margin: 0;
padding: 12px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-auto-flow: row;
grid-row-gap: 10px;
}
.primary-navigation .primary-more-nav-items ul.more-nav-menu li {
position: relative;
display: flex;
align-items: center;
}
.primary-navigation .primary-more-nav-items ul.more-nav-menu li a {
text-decoration: none;
white-space: nowrap;
display: flex;
width: 100%;
align-items: center;
padding: 7px 15px;
color: #474747;
font-weight: 600;
font-size: 13px;
line-height: 18px;
}
.primary-navigation .primary-more-nav-items ul.more-nav-menu li a:hover {
color: #d32f2f;
background-color: #f5f5f5;
}
.primary-navigation .primary-more-nav-items ul.more-nav-menu li.active a {
color: #d32f2f;
}
</style>
<div class="primary-navigation">
<div class="wrapper-container">
<div class="nav-items">
<div class="secondary-navigation">
<div class="nav-group">
<div class="active-item">WWE Crown Jewel 2023</div>
<div class="secondary-nav-items-indicator"></div>
</div>
<div class="secondary-nav-items">
<ul>
<li>
<a href="/wwe" data-sequence="1">WWE Home</a>
</li>
<li>
<a href="https://www.sportskeeda.com/go/wrestlemania" data-sequence="2">WWE Night of Champions 2023</a>
</li>
<li>
<a href="https://www.sportskeeda.com/go/battleground" data-sequence="3">WWE NXT Battleground 2023</a>
</li>
<li>
<a href="https://www.sportskeeda.com/player/seth-rollins" data-sequence="4">Seth Rollins</a>
</li>
<li>
<a href="https://www.sportskeeda.com/player/roman-reigns" data-sequence="5">Roman Reigns</a>
</li>
<li>
<a href="https://www.sportskeeda.com/player/cody-rhodes" data-sequence="6">Cody Rhodes</a>
</li>
<li>
<a href="https://www.sportskeeda.com/go/raw" data-sequence="7">RAW</a>
</li>
<li>
<a href="https://www.sportskeeda.com/aew" data-sequence="8">AEW</a>
</li>
<li>
<a href="https://www.sportskeeda.com/wwe/wwe-roster" data-sequence="9">Roster</a>
</li>
<li>
<a href="https://www.sportskeeda.com/go/smackdown" data-sequence="10">SmackDown</a>
</li>
<li>
<a href="https://www.sportskeeda.com/wwe/wwe-results" data-sequence="11">Results</a>
</li>
<li>
<a href="https://www.sportskeeda.com/newsletters" data-sequence="12">Newsletters</a>
</li>
<li class="active">
<a href="https://www.sportskeeda.com/go/wwe-crown-jewel" data-sequence="13">WWE Crown Jewel 2022</a>
</li>
<li>
<a href="https://www.sportskeeda.com/wwe/wwe-champions" data-sequence="14">Champions</a>
</li>
<li>
<a href="https://www.sportskeeda.com/wwe/wwe-ppv-calendar" data-sequence="15">PPV Schedule</a>
</li>
<li>
<a href="https://www.sportskeeda.com/wwe/wwe-quiz" data-sequence="16">WWE Quiz</a>
</li>
</ul>
</div>
</div>
<div class="separator"></div>
<div class="primary-nav-items">
<ul>
<li class="active">
<a href="/go/wwe-crown-jewel" data-sequence="1">Home</a>
</li>
</ul>
</div>
<div class="primary-more-nav-items hidden">
<div class="more-items-trigger">
<div class="more-items-trigger--text">More</div>
<img src="//staticg.sportskeeda.com/skm/assets/ic-chevron-top--e9e9e9.svg" width="11" height="7" alt="chevron-down" />
</div>
<div class="more-nav-menu-wrapper">
<ul class="more-nav-menu"></ul>
</div>
</div>
</div>
</div>
</div>
<script>
(function() {
var container = $(".primary-navigation");
var primaryNavContainer = $(".primary-nav-items");
var primaryNavItems = primaryNavContainer.querySelectorAll("li");
var secondaryNavContainer = $(".secondary-nav-items");
var secondaryNavItems = (secondaryNavContainer && secondaryNavContainer.querySelectorAll("ul li")) || [];
function onPrimaryNavItemClicked(e) {
var navItemClicked = e.target.closest("a");
trackGAEvent("PRIMARY_NAV_MENU_ITEM_CLICK", {
destination_url: navItemClicked.getAttribute("href"),
destination_label: navItemClicked.innerText,
sequence: navItemClicked.dataset["sequence"]
});
}
function onSecondaryNavItemClicked(e) {
var navItemClicked = e.target.closest("a");
trackGAEvent("SECONDARY_NAV_MENU_ITEM_CLICK", {
destination_url: navItemClicked.getAttribute("href"),
destination_label: navItemClicked.innerText,
sequence: navItemClicked.dataset["sequence"]
});
}
function initAnalyticsEventsTrackers() {
primaryNavItems.forEach(function(navItem) {
navItem.addEventListener("click", onPrimaryNavItemClicked);
});
secondaryNavItems.forEach(function(navItem) {
navItem.addEventListener("click", onSecondaryNavItemClicked);
});
trackImpressionGAEventWhenInViewport({
element: primaryNavContainer,
identifier: "page_primary_nav_menu",
eventName: "PRIMARY_NAV_MENU_IMPRESSION"
});
}
function scrollPrimaryNavigation() {
var xPosition = 0;
var paddingGap = -30;
var found = false;
for (var i = 1; i < primaryNavItems.length; i++) {
var previousItem = primaryNavItems[i - 1];
var currentItem = primaryNavItems[i];
xPosition += previousItem.scrollWidth + paddingGap;
xPosition = Math.max(xPosition, 0);
if (hasClass(currentItem, "active")) {
found = true;
break;
}
}
if (!found) {
xPosition = 0;
}
primaryNavContainer.scrollBy({
behavior: "smooth",
top: 0,
left: xPosition
});
}
window.addEventListener("DOMContentLoaded", function() {
initAnalyticsEventsTrackers();
scrollPrimaryNavigation();
function onMouseEnter(e) {
primaryNavItems.forEach(function(navItem) {
addClass(navItem, "inactive");
});
removeClass(e.target, "inactive");
}
function onMouseLeave(e) {
primaryNavContainer.querySelectorAll("li.inactive").forEach(function(navItem) {
removeClass(navItem, "inactive");
});
}
primaryNavItems.forEach(function(navItem) {
navItem.addEventListener("mouseenter", onMouseEnter);
navItem.addEventListener("mouseleave", onMouseLeave);
});
});
(function() {
if (!container) return;
if (!primaryNavContainer) return;
if (!primaryNavItems || !primaryNavItems.length) return;
var moreNavItemsContainer = container.querySelector(".primary-more-nav-items");
if (!moreNavItemsContainer) return;
var moreNavItemsMenu = moreNavItemsContainer.querySelector(".more-nav-menu");
if (!moreNavItemsMenu) return;
function initMoreNavItems() {
addClass(moreNavItemsContainer, "hidden");
removeClass(moreNavItemsContainer, "active");
moreNavItemsMenu.innerHTML = "";
var thresholdRightOffset = Math.ceil(primaryNavContainer.getBoundingClientRect().width - 62);
var itemsMoved = false;
var widthsConsumed = 0;
primaryNavItems.forEach(function(navItem, i) {
removeClass(navItem, "hidden");
widthsConsumed = widthsConsumed + Math.ceil(navItem.getBoundingClientRect().width);
if (widthsConsumed >= thresholdRightOffset) {
var clonedNavItem = navItem.cloneNode(true);
clonedNavItem.addEventListener("click", onPrimaryNavItemClicked);
moreNavItemsMenu.appendChild(clonedNavItem);
if (hasClass(navItem, "active")) {
addClass(moreNavItemsContainer, "active");
}
itemsMoved = true;
addClass(navItem, "hidden");
}
});
if (itemsMoved) {
removeClass(moreNavItemsContainer, "hidden");
}
}
window.addEventListener("resize", initMoreNavItems);
initMoreNavItems();
})();
})();
</script>
</section>
<section class="breadcrumb-section">
<style>
.breadcrumb-container {
display: flex;
width: 100%;
padding: 5px 18px;
background-color: #fff;
}
.breadcrumb-container .breadcrumb-list {
overflow-x: auto;
position: relative;
width: 100%;
margin: 0;
padding: 0;
display: flex;
gap: 8px;
flex-wrap: nowrap;
align-items: center;
}
.breadcrumb-list::-webkit-scrollbar {
height: 0px;
width: 0px;
}
.breadcrumb-list li {
display: flex;
gap: 8px;
align-items: center;
}
.breadcrumb-list li::after {
content: "";
display: block;
width: 4px;
height: 7px;
background-image: url("//staticg.sportskeeda.com/skm/assets/ic_breadcrumb_chevron-right.svg");
background-size: cover;
background-repeat: no-repeat;
}
.breadcrumb-list li:last-child:after {
display: none;
}
.breadcrumb-list li:hover {
opacity: 0.7;
}
.breadcrumb-list li a,
.breadcrumb-list li span {
display: flex;
text-decoration: none;
white-space: nowrap;
color: #999999;
font-weight: 400;
font-size: 12px;
line-height: 18px;
}
.breadcrumb-list li a {
cursor: pointer;
}
.breadcrumb-list li img {
display: block;
width: 12px;
height: 10px;
position: relative;
top: -1px;
}
@media screen and (max-width: 768px) {
.breadcrumb-container {
padding-left: 16px;
padding-right: 16px;
}
.breadcrumb-list li a,
.breadcrumb-list li span {
font-size: 10px;
line-height: 15px;
}
}
</style>
<div class="breadcrumb-container">
<div class="wrapper-container">
<ul class="breadcrumb-list">
<li>
<a href="/">
<img width="12" height="10" alt="home icon" src="//staticg.sportskeeda.com/skm/assets/ic_breadcrumb_home.svg" />
</a>
</li>
<li>
<a href="/wwe">WWE</a>
</li>
<li>
<span>WWE Crown Jewel 2023</span>
</li>
</ul>
</div>
</div>
<script>
(function() {
var container = $(".breadcrumb-container");
var items = container.querySelectorAll("ul.breadcrumb-list li a");
function initAnalyticsEvents() {
items.forEach(function(breadcrumb) {
breadcrumb.addEventListener("click", function(e) {
var clickedItem = e.target.closest("a");
trackGAEvent("BREADCRUMB_ITEM_CLICK", {
destination_url: clickedItem.getAttribute("href"),
destination_label: clickedItem.innerText
});
})
});
}
window.addEventListener("DOMContentLoaded", function() {
initAnalyticsEvents();
});
})();
</script>
</section>
<section class="hero-section">
<style>
.hero-container {
width: 100%;
position: relative;
display: flex;
min-height: 130px;
margin-bottom: 15px;
}
.hero-container .wrapper-container {
display: flex;
}
</style>
<div class="hero-container">
<div class="wrapper-container">
<style>
.breadcrumb-section {
width: 100%;
z-index: 99;
position: absolute;
left: 0;
}
.breadcrumb-container {
padding: 4px 18px;
background: transparent
}
.breadcrumb-list li a,
.breadcrumb-list li span {
color: #E9E9E9;
}
.breadcrumb-list li img,
.breadcrumb-list li::after {
filter: brightness(0) saturate(100%) invert(96%) sepia(3%) saturate(767%) hue-rotate(196deg) brightness(115%) contrast(83%);
}
.hero-container {
padding: 0 16px;
padding-top: 26px;
background: radial-gradient(74.2% 1829.54% at 75.03% 50%, #1C116A 0%, #0A004A 100%);
box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.05);
border-bottom: 3px solid #D32F2F;
}
.hero-container .wrapper-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
}
.hero-container .hero-content {
width: 100%;
display: flex;
gap: 10px;
justify-content: space-between;
}
.hero-container .hero-content.has-banner {
}
.hero-container .hero-content .left {
display: flex;
flex-direction: column;
flex: 1;
width: 100%;
justify-content: center;
padding: 30px 0 40px;
}
.hero-container .hero-content .right {
display: flex;
flex-direction: column;
width: 640px;
}
.hero-container .hero-content .hero-img {
display: flex;
align-items: flex-end;
justify-content: flex-end;
width: 100%;
height: 100%;
}
.hero-container .hero-content .hero-img img {
display: block;
width: auto;
max-width: 100%;
height: 260px;
object-fit: cover;
}
.hero-container .hero-content.has-countdown .hero-img img {
}
.hero-container .hero-content .hero-h1-container {
position: relative;
display: flex;
}
.hero-container .hero-content .hero-h1-container .hero-h1 {
position: relative;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 0 !important;
color: #fff;
font-weight: 600;
font-size: 36px;
line-height: 44px;
}
.hero-container .hero-content .hash-tagline {
color: #fff;
margin-top: 16px;
font-size: 20px;
line-height: 30px;
}
.hero-container .hero-content .hero-countdown-container {
max-width: 210px;
margin-top: 14px;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer {
position: relative;
border: 1px solid #FFFFFF;
border-radius: 40px;
border-radius: 48px;
padding: 5px 10px;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values {
display: flex;
gap: 15px;
align-items: center;
justify-content: center;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values .hero-countdown-timer-component {
position: relative;
display: flex;
gap: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 30px;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values .hero-countdown-timer-component::after {
content: ":";
color: #fff;
font-weight: 600;
font-size: 22px;
line-height: 27px;
position: absolute;
top: 0;
left: 35px;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values .hero-countdown-timer-component:last-child::after {
content: "";
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values .hero-countdown-timer-component .hero-countdown-timer-component--value {
display: flex;
gap: 5px;
color: #fff;
font-weight: 600;
font-size: 22px;
line-height: 27px;
}
.hero-container .hero-content .hero-countdown-container .hero-countdown-timer-values .hero-countdown-timer-component .hero-countdown-timer-component--unit {
color: #fff;
font-weight: 600;
font-size: 12px;
line-height: 15px;
}
body.us-masters-t10 .hero-container {
background: radial-gradient(2455.23% 131.01% at 0.94% 14.26%, #501E97 0%, #813AC6 100%);
}
</style>
<div class="hero-content ">
<div class="left">
<div class="hero-h1-container">
<h1 class="hero-h1">WWE Crown Jewel 2023</h1>
</div>
<div class="hash-tagline">4 Nov 2023</div>
</div>
<div class="right">
<div class="hero-img">
</div>
</div>
</div>
</div>
</div>
<script>
(function() {
var heroContainer = $(".hero-container");
window.addEventListener("DOMContentLoaded", function() {
trackImpressionGAEventWhenInViewport({
element: heroContainer,
identifier: "page_primary_hero",
eventName: "HERO_UNIT_IMPRESSION"
});
});
})();
</script>
</section>
<section class="wrapper-container">
<div class="fragment-container">
<style>
:root {
--panelXSpacingHeader: 20px;
--panelYSpacingHeader: 10px;
--panelXSpacingBody: 20px;
--panelYSpacingBody: 16px;
--panelXSpacingFooter: 20px;
--panelYSpacingFooter: 16px;
}
.panel {
--borderColor: #E9E9E9;
--xSpacingHeader: var(--panelXSpacingHeader);
--ySpacingHeader: var(--panelYSpacingHeader);
--xSpacingBody: var(--panelXSpacingBody);
--ySpacingBody: var(--panelYSpacingBody);
--xSpacingFooter: var(--panelXSpacingFooter);
--ySpacingFooter: var(--panelYSpacingFooter);
width: 100%;
background: #FFFFFF;
border: 1px solid var(--borderColor);
overflow: clip;
}
.panel.transparent {
background: transparent;
}
.panel.rounded {
border-radius: 12px;
}
.panel.with-shadow {
box-shadow: 0px 4px 4px 0px #E9F2FA;
}
.panel.no-border {
border: none;
}
.panel.transparent-d {
background: transparent;
}
.panel.rounded-d {
border-radius: 12px;
}
.panel.with-shadow-d {
box-shadow: 0px 4px 4px 0px #E9F2FA;
}
.panel.no-border-d {
border: none;
}
.panel-header {
position: relative;
width: 100%;
padding: var(--ySpacingHeader) var(--xSpacingHeader);
border-bottom: 1px solid var(--borderColor);
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
}
.panel.fluid .panel-header {
border-bottom: 0;
padding-bottom: 0;
}
.panel-header.column {
flex-direction: column;
}
.panel-header>.panel-heading {
width: 100%;
margin: 0;
padding: 0;
color: #474747;
font-weight: 600;
font-size: 16px;
line-height: 24px;
}
.panel-header a {
display: flex;
gap: 5px;
align-items: center;
cursor: pointer;
text-decoration: none;
white-space: nowrap;
color: #0B65F0;
font-size: 14px;
line-height: 21px;
}
.panel-header a.view-more-cta::after {
content: "";
display: block;
width: 6px;
height: 11px;
background-image: url("//staticg.sportskeeda.com/skm/assets/ic_breadcrumb_chevron-right--0B65F0.svg");
background-size: cover;
background-repeat: no-repeat;
}
.panel .panel-body {
padding: var(--ySpacingBody) var(--xSpacingBody);
}
.panel .panel-body.no-padding {
--xSpacingBody: 0;
--ySpacingBody: 0;
}
.panel .panel-header.no-padding {
--xSpacingHeader: 0;
--ySpacingHeader: 0;
}
.panel .panel-body.no-h-padding {
--xSpacingBody: 0;
}
.panel .panel-header.no-h-padding {
--xSpacingHeader: 0;
}
.panel .panel-body.no-v-padding {
--ySpacingBody: 0;
}
.panel .panel-header.no-v-padding {
--ySpacingHeader: 0;
}
.panel .panel-body.no-padding-d {
--xSpacingBody: 0;
--ySpacingBody: 0;
}
.panel .panel-header.no-padding-d {
--xSpacingHeader: 0;
--ySpacingHeader: 0;
}
.panel .panel-body.no-h-padding-d {
--xSpacingBody: 0;
}
.panel .panel-header.no-h-padding-d {
--xSpacingHeader: 0;
}
.panel .panel-body.no-v-padding-d {
--ySpacingBody: 0;
}
.panel .panel-header.no-v-padding-d {
--ySpacingHeader: 0;
}
.panel .panel-footer {
position: relative;
width: 100%;
padding: 0 var(--xSpacingFooter) var(--ySpacingFooter);
}
.panel .panel-body.no-padding+.panel-footer {
--ySpacingFooter: 12px;
padding-top: var(--ySpacingFooter);
}
.panel .panel-cta-button {
cursor: pointer;
width: 100%;
color: #474747;
text-decoration: none;
text-align: center;
display: block;
background-color: #fff;
border: 1px solid #e2e2e2;
border-radius: 2px;
font-size: 16px;
font-weight: 500;
line-height: 18px;
padding: 10px;
}
.panel .panel-cta-button:hover {
border-color: #474747;
}
.panel .panel-cta-link {
width: 100%;
display: flex;
gap: 5px;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
white-space: nowrap;
color: #0B65F0;
font-weight: 600;
font-size: 14px;
line-height: 21px;
}
.panel .panel-cta-link::after {
content: "";
display: block;
width: 6px;
height: 11px;
background-image: url("//staticg.sportskeeda.com/skm/assets/ic_breadcrumb_chevron-right--0B65F0.svg");
background-size: cover;
background-repeat: no-repeat;
}
@media screen and (max-width: 768px) {
.panel {
--panelXSpacingHeader: 16px;
--panelYSpacingHeader: 16px;
--panelXSpacingBody: 16px;
--panelYSpacingBody: 16px;
--panelXSpacingFooter: 16px;
--panelYSpacingFooter: 16px;
--borderColor: transparent;
border: none;
}
.panel.transparent-m {
background: transparent;
}
.panel.rounded-m {
border-radius: 12px;
}
.panel.with-shadow-m {
box-shadow: 0px 4px 4px 0px #E9F2FA;
}
.panel.no-border-m {
border: none;
}
.panel .panel-header+.panel-body {
padding-top: 0;
}
.panel .panel-body.no-padding-m {
--xSpacingBody: 0px;
--ySpacingBody: 0px;
}
.panel .panel-header.no-padding-m {
--xSpacingHeader: 0px;
--ySpacingHeader: 0px;
}
.panel .panel-body.no-h-padding-m {
--xSpacingBody: 0px;
}
.panel .panel-header.no-h-padding-m {
--xSpacingHeader: 0px;
}
.panel .panel-body.no-v-padding-m {
--ySpacingBody: 0px;
}
.panel .panel-header.no-v-padding-m {
--ySpacingHeader: 0px;
}
.panel .panel-header.text-sm-m>.panel-heading {
font-size: 14px;
line-height: 21px;
}
}
</style>
<style>
.hidden-view {
visibility: hidden;
}
.slider-container {
--controlSize: 72px;
--controlPositionOffset: -60px;
--iconPositionOffset: -15px;
--iconScale: 1.0;
position: relative;
width: 100%;
display: flex;
gap: 16px;
flex-direction: column;
}
.slider-container .slider-filters {
display: flex;
gap: 8px;
}
.slider-container .slider-filters .slider-filter-switcher {
cursor: pointer;
display: flex;
padding: 8px 12px;
border: 1px solid #E9E9E9;
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.07);
border-radius: 28px;
background: #F5F5F5;
color: #474747;
font-size: 12px;
line-height: 17px;
}
.slider-container .slider-filters .slider-filter-switcher.active {
background: #D32F2F;
color: #fff;
}
.slider-container .slider-control {
position: absolute;
top: 50%;
transform: translateY(-50%);
z-index: 999;
}
.slider-container .slider-control button.slider-control-btn {
cursor: pointer;
background-color: #fff;
border: 1px solid #dfdfdf;
box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.05);
width: var(--controlSize);
height: var(--controlSize);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
}
.slider-container .slider-control button.slider-control-btn:hover {
background-color: #F5F7FD;
}
.slider-container .slider-control button.slider-control-btn img {
background: none;
width: 13px;
height: 19px;
object-fit: cover;
display: block;
position: relative;
}
.slider-container .slider-control.slider-control--left {
left: var(--controlPositionOffset);
}
.slider-container .slider-control.slider-control--left button.slider-control-btn img {
right: var(--iconPositionOffset);
transform: scale(var(--iconScale)) rotate(180deg);
}
.slider-container .slider-control.slider-control--right {
right: var(--controlPositionOffset);
}
.slider-container .slider-control.slider-control--right button.slider-control-btn img {
left: var(--iconPositionOffset);
transform: scale(var(--iconScale));
}
@media (max-width: 768px) {
.slider-container .slider-control {
display: none;
}
}
.slider-container.m {
--controlSize: 48px;
--controlPositionOffset: -50px;
--iconPositionOffset: -12px;
--iconScale: 0.65;
}
.slider-container.s {
--controlSize: 36px;
--controlPositionOffset: -36px;
--iconPositionOffset: -4px;
--iconScale: 0.5;
}
.slider-container .slider-items {
width: 100%;
display: flex;
gap: 12px;
overflow: hidden;
overflow-x: auto;
-ms-overflow-style: none;
scrollbar-width: none;
}
.slider-container .slider-items::-webkit-scrollbar {
display: none;
}
.slider-items .slider-item {
position: relative;
display: block;
}
.slider-items .slider-item .item-cta {
z-index: 99;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
}
</style>
<script>
function KeedaCarousalControlsHelper(input) {
var self = this;
this.target = input.target;
this.whenCarouselInViewport = input.whenCarouselInViewport;
this.whenCarouselNotInViewport = input.whenCarouselNotInViewport;
this.whenFistItemInViewport = input.whenFistItemInViewport;
this.whenFistItemNotInViewport = input.whenFistItemNotInViewport;
this.whenLastItemInViewport = input.whenLastItemInViewport;
this.whenLastItemNotInViewport = input.whenLastItemNotInViewport;
this.options = input.intersectionObserverOptions || {
threshold: 1
};
}
KeedaCarousalControlsHelper.prototype.observeTarget = function() {
var self = this;
var firstItem = this.target.firstElementChild;
var lastItem = this.target.lastElementChild;
var allChildren = this.target.children;
var firstItem, lastItem;
for (var i = 0; i < allChildren.length; i++) {
if (!allChildren[i].classList.contains("hidden")) {
firstItem = allChildren[i];
break;
}
}
for (var i = allChildren.length - 1; i >= 0; i--) {
if (!allChildren[i].classList.contains("hidden")) {
lastItem = allChildren[i];
break;
}
}
this.firstItemObserver = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
self.whenFistItemInViewport(entry);
} else {
self.whenFistItemNotInViewport(entry);
}
})
}, this.options);
this.lastItemObserver = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
self.whenLastItemInViewport(entry);
} else {
self.whenLastItemNotInViewport(entry);
}
})
}, this.options);
firstItem && this.firstItemObserver.observe(firstItem);
lastItem && this.lastItemObserver.observe(lastItem);
if (typeof self.whenCarouselInViewport == "function" && typeof self.whenCarouselNotInViewport == "function") {
this.carouselObserver = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
self.whenCarouselInViewport(entry);
} else {
self.whenCarouselNotInViewport(entry);
}
})
}, {
threshold: 1
});
this.carouselObserver.observe(this.target);
}
return this;
}
KeedaCarousalControlsHelper.prototype.unobserveTarget = function() {
if (this.carouselObserver) {
this.carouselObserver.disconnect();
}
if (this.firstItemObserver) {
this.firstItemObserver.disconnect();
}
if (this.lastItemObserver) {
this.lastItemObserver.disconnect();
}
return this;
}
KeedaCarousalControlsHelper.prototype.reset = function() {
return this.unobserveTarget().observeTarget();
}
</script>
<script>
(function() {
var SCROLL_WIDTH = 450;
var SLIDER_HELPERS = [];
function resetScroll(sliderItems) {
sliderItems.scrollTo({
behavior: "smooth",
top: 0,
left: 0
});
}
function onLeftControlClicked(sliderItems) {
return function() {
sliderItems.scrollBy({
behavior: "smooth",
top: 0,
left: -SCROLL_WIDTH
});
};
}
function onRightControlClicked(sliderItems) {
return function() {
sliderItems.scrollBy({
behavior: "smooth",
top: 0,
left: SCROLL_WIDTH
});
};
}
function onSliderScroll(e) {
if (typeof lazyLoadAll == "function") {
lazyLoadAll();
}
}
var debouncedSliderScroll = debounce(onSliderScroll, 250);
function onSliderItemCtaClicked(e) {
e.stopImmediatePropagation();
var clickedItem = e.target.closest("a");
if (!clickedItem) return;
var destinationUrl = clickedItem.getAttribute("href");
if (!destinationUrl) return;
var analyticsLabel = clickedItem.dataset["analyticsLabel"];
if (!analyticsLabel) return;
var eventName = [analyticsLabel, "CLICK"].join("_");
trackGAEvent(eventName, {
destination_url: destinationUrl,
destination_label: clickedItem.innerText,
sequence: clickedItem.dataset["sequence"],
type: clickedItem.dataset["type"]
});
}
function initControls(slider) {
var sliderItemsContainer = slider.querySelector(".slider-items");
if (!sliderItemsContainer) return;
var sliderItem = sliderItemsContainer.querySelectorAll(".slider-item");
if (!sliderItem.length) return;
sliderItem.forEach(function(feedItem) {
feedItem.addEventListener("click", onSliderItemCtaClicked);
});
var leftScrollControl = slider.querySelector(".slider-control.slider-control--left");
if (leftScrollControl) {
var leftScrollControlButton = leftScrollControl.querySelector("button.slider-control-btn");
leftScrollControlButton.addEventListener("click", onLeftControlClicked(sliderItemsContainer));
}
var rightScrollControl = slider.querySelector(".slider-control.slider-control--right");
if (rightScrollControl) {
var rightScrollControlButton = rightScrollControl.querySelector("button.slider-control-btn");
rightScrollControlButton.addEventListener("click", onRightControlClicked(sliderItemsContainer));
}
var helper = new KeedaCarousalControlsHelper({
target: sliderItemsContainer,
whenCarouselInViewport: function() {
removeClass(leftScrollControl, "hidden-view");
removeClass(rightScrollControl, "hidden-view");
},
whenCarouselNotInViewport: function() {
addClass(leftScrollControl, "hidden-view");
addClass(rightScrollControl, "hidden-view");
},
whenFistItemInViewport: function(entry) {
addClass(leftScrollControl, "hidden");
},
whenFistItemNotInViewport: function(entry) {
removeClass(leftScrollControl, "hidden");
},
whenLastItemInViewport: function(entry) {
addClass(rightScrollControl, "hidden");
},
whenLastItemNotInViewport: function(entry) {
removeClass(rightScrollControl, "hidden");
}
});
helper.observeTarget();
return helper;
}
function onFilterClick(e) {
var filter = e.target.closest(".slider-filter-switcher");
if (!filter) return;
var filtersContainer = filter.closest(".slider-filters");
if (!filtersContainer) return;
var sliderContainer = filtersContainer.closest(".slider-container");
if (!sliderContainer) return;
var itemsContainer = sliderContainer.querySelector(".slider-items");
if (!itemsContainer) return;
var activeFilter = filtersContainer.querySelector(".slider-filter-switcher.active");
if (activeFilter) {
removeClass(activeFilter, "active");
}
addClass(filter, "active");
resetFilters(sliderContainer);
resetSliderHelper(sliderContainer);
resetScroll(itemsContainer);
if (typeof lazyLoadAll == "function") {
lazyLoadAll();
}
}
function initFilters(slider) {
var filtersContainer = slider.querySelector(".slider-filters");
if (!filtersContainer) return;
filtersContainer.querySelectorAll(".slider-filter-switcher").forEach(function(filter) {
filter.addEventListener("click", onFilterClick);
});
}
function resetFilters(slider) {
var itemsContainer = slider.querySelector(".slider-items");
if (!itemsContainer) return;
var items = itemsContainer.querySelectorAll(".slider-item");
if (!items.length) return;
var filtersContainer = slider.querySelector(".slider-filters");
if (!filtersContainer) return;
var activeFilter = filtersContainer.querySelector(".slider-filter-switcher.active");
if (!activeFilter) return;
var filterFor = activeFilter.dataset["filterFor"];
items.forEach(function(sliderItem) {
var type = sliderItem.dataset["type"];
if (!filterFor) {
removeClass(sliderItem, "hidden");
} else {
if (type == filterFor) {
removeClass(sliderItem, "hidden");
} else {
addClass(sliderItem, "hidden");
}
}
});
}
function initScroller(slider) {
var container = slider.querySelector(".slider-items");
if (!container) return;
var items = container.querySelectorAll(".slider-item");
if (!items.length) return;
container.addEventListener("scroll", debouncedSliderScroll, { passive: true });
var withAutoScroll = slider.dataset["withAutoScroll"];
var withSmoothAutoScroll = slider.dataset["withSmoothAutoScroll"];
if (!withAutoScroll && !withSmoothAutoScroll) return;
var xPosition = 0;
var paddingGap = 10;
var found = false;
for (var i = 1; i < items.length; i++) {
var previousItem = items[i - 1];
var currentItem = items[i];
xPosition += previousItem.scrollWidth + paddingGap;
xPosition = Math.max(xPosition, 0);
if (hasClass(currentItem.children[0], "active")) {
found = true;
xPosition = currentItem.offsetLeft - ((container.getBoundingClientRect().width - currentItem
.getBoundingClientRect().width) / 2);
break;
}
}
if (!found) {
xPosition = 0;
}
var scrollInput = {
top: 0,
left: xPosition
};
if (withSmoothAutoScroll) {
scrollInput["behavior"] = "smooth";
}
container.scrollBy(scrollInput);
}
function resetScroller(slider, options) {
var container = slider.querySelector(".slider-items");
if (!container) return;
var items = container.querySelectorAll(".slider-item");
if (!items.length) return;
var activeItem;
for (var i = 0; i < items.length; i++) {
var currentItem = items[i];
if (hasClass(currentItem, "active") || hasClass(currentItem.children[0], "active")) {
activeItem = currentItem;
break;
}
}
if (!activeItem) return;
var containerMiddle = Math.floor(container.clientWidth / 2);
var activeItemMiddle = Math.floor(activeItem.clientWidth / 2);
var xPosition = activeItem.offsetLeft + activeItemMiddle - containerMiddle;
var scrollOption = {
top: 0,
left: xPosition,
}
if (options.withSmoothScroll) {
scrollOption["behavior"] = "smooth";
}
window.requestAnimationFrame(function() {
container.scroll(scrollOption);
});
}
function appendItem(sliderContainer, itemToAppend, attributes) {
if (!sliderContainer) return;
if (typeof sliderContainer.appendChild != "function") return;
var sliderItems = sliderContainer.querySelector(".slider-items");
if (!sliderItems) return;
if (!itemToAppend) return;
var sliderItem = document.createElement("div");
sliderItem.classList.add("slider-item");
sliderItem.appendChild(itemToAppend);
for (var key in attributes) {
sliderItem.setAttribute(key, attributes[key]);
}
sliderItems.appendChild(sliderItem);
resetFilters(sliderContainer);
resetSliderHelper(sliderContainer);
}
function resetSliderHelper(slider) {
var itemsContainer = slider.querySelector(".slider-items");
if (!itemsContainer) return;
var matchingHelper = SLIDER_HELPERS.find(function(helper) {
return helper.target == itemsContainer;
});
if (!matchingHelper) return;
matchingHelper.reset();
}
function initSlider(slider) {
initFilters(slider);
initScroller(slider);
var helper = initControls(slider);
if (helper) {
SLIDER_HELPERS.push(helper);
}
}
var initCalled = false;
function init() {
if (initCalled) return;
initCalled = true;
$all(".slider-container").forEach(initSlider);
window.addEventListener("custom:sk:horizontalSlider:scrollToActiveItem", function(e) {
var params = e.detail;
var sliderContainer = params.sliderContainer;
if (!sliderContainer) return;
resetScroller(sliderContainer, {
withSmoothScroll: !!params.withSmoothScroll
});
});
window.addEventListener("custom:sk:horizontalSlider:appendItem", function(e) {
var params = e.detail;
var sliderContainer = params.sliderContainer;
if (!sliderContainer) return;
var itemToAppend = params.itemToAppend;
if (!itemToAppend) return;
appendItem(sliderContainer, itemToAppend, params.attributes || {});
});
window.addEventListener("custom:sk:horizontalSlider:resetHelper", function(e) {
var params = e.detail;
var sliderContainer = params.sliderContainer;
if (!sliderContainer) return;
resetSliderHelper(sliderContainer);
});
}
window.addEventListener("DOMContentLoaded", init);
if (domContentLoaded) {
init();
}
})();
</script>
<style>
.section-separator:has(+ .sk-widget.fluid) {
border-color: transparent;
}
.sk-widget.fluid+.section-separator {
border-color: transparent;
}
</style>
<style>
.sport-feed-item-primary {
padding: 16px 20px 0px;
}
.sports-feed-item-primary-element {
display: block;
position: relative;
height: 186px;
}
.sports-feed-item-primary-element .feed-item-cta {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
cursor: pointer;
z-index: 1;
opacity: 0;
}
.sports-feed-item-primary-element img {
width: 60%;
height: 100%;
object-fit: cover;
border-radius: 8px;
object-position: top;
margin: 0 0 0 auto;
display: block;
}
.sports-feed-item-primary-element .sports-feed-item-element-meta {
display: flex;
flex-direction: column;
gap: 8px;
position: absolute;
bottom: 0;
width: 100%;
height: 100%;
justify-content: space-between;
padding: 20px;
background: linear-gradient(272.1deg, rgba(32, 37, 64, 0) 27.55%, rgba(32, 37, 64, 0.99) 56.61%, #02032E 99.26%);
border-radius: 8px;
}
.sports-primary-title {
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #FFFFFF;
width: 50%;
margin-top: 7px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
}
.sports-feed-item-element-meta .sports-feed-item-primary-modified-time {
color: #E9E9E9;
font-weight: 500;
font-size: 12px;
line-height: 20px;
}
@media (max-width: 768px) {
#carousel-feed-nba .carousel-list {
padding-bottom: 6px;
}
#carousel-feed-nba .carousel-anchors {
bottom: 21px;
}
.sports-feed-item-primary-element {
height: 245px;
}
.sport-feed-item-primary {
display: block;
width: 100%;
overflow: hidden;
position: relative;
padding: 0px;
margin-bottom: 12px;
}
.sports-feed-item-primary-element img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 8px;
object-position: center;
}
.sports-feed-item-primary-element .sports-feed-item-element-meta {
width: 100%;
height: 100%;
position: absolute;
bottom: 0;
background: linear-gradient(180deg, rgba(32, 37, 64, 0) 39.54%, rgba(32, 37, 64, 0.98) 75.58%, #202540 99.09%);
display: block;
}
.sports-primary-title {
position: absolute;
color: #FFFFFF;
left: 12px;
right: 12px;
bottom: 26px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
width: auto;
font-weight: 500;
font-size: 14.5778px;
line-height: 20px;
}
.sports-feed-item-element-meta .sports-feed-item-primary-modified-time {
position: absolute;
bottom: 4px;
left: 12px;
}
}
</style>
<style>
.sports-feed-item-secondary-element .feed-element-img {
width: 84px;
height: 80px;
border-radius: 4px;
object-fit: cover;
flex-shrink: 0;
margin: 0 !important;
display: block;
}
.feed-item-secondary {
display: inline-flex;
width: calc(50% - 32px);
flex-direction: row;
border-bottom: 1px solid #E9E9E9;
margin: 0px 0 0 20px;
position: relative;
padding: 12px 0px 12px 0px;
}
.sports-feed-item-secondary-element .feed-item-cta {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
cursor: pointer;
z-index: 1;
opacity: 0;
}
.sports-feed-item-secondary-meta .sports-item-title {
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #2D2D2D;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
.feed-item-secondary .sports-feed-item-secondary-element {
display: flex;
gap: 12px;
position: relative;
cursor: pointer;
flex: unset;
text-decoration: none;
width: 100%;
}
.feed-item-secondary .sports-feed-item-secondary-meta {
display: flex;
flex-direction: column;
gap: 3px;
}
.feed-item-secondary .share-element {
z-index: 99;
position: absolute;
right: 10px;
bottom: 0;
opacity: 0;
}
.feed-item-secondary:hover .share-element {
opacity: 1;
}
.feed-item-secondary:hover .share-element .share-icon {
display: flex;
}
.sports-feed-item-secondary-meta .share-icon {
height: 18px;
width: 18px;
border: 1px solid #D1D1D1;
border-radius: 14px;
align-items: center;
}
.sports-feed-item-secondary-meta .share-icon img {
height: 10px;
width: 9px;
min-width: unset;
margin: auto;
background: transparent;
}
.sports-feed-item-secondary-meta .share-options {
position: absolute;
right: 0px;
justify-content: flex-end;
gap: 14px;
align-items: center;
display: none;
z-index: 9999999;
background: #FFFFFF;
border: 1px solid #D1D1D1;
border-radius: 16px;
padding: 5px 10px;
animation: growDiv 0.5s cubic-bezier(0.4, 0, 1, 1);
bottom: -6px;
}
.sports-feed-item-secondary-meta .share-options img {
display: block;
max-width: 100%;
min-width: 20px !important;
height: 20px;
width: 20px;
background: transparent;
}
.feed-item-secondary:hover .sports-item-title {
color: #0B65F0;
}
.feed-item-secondary:last-child {
border-bottom: none;
}
.feed-item-secondary:nth-last-child(-n+2) {
border-bottom: none;
}
.carousel-story .live-indicator {
padding: 5px 15px;
gap: 4px;
position: absolute;
max-width: 80px;
max-height: 30px;
margin: 12px;
}
.sports-feed-item-secondary-element .live-indicator {
position: absolute;
padding: 0px 5px;
max-height: 15px;
margin: 5px;
font-size: 10px;
}
.sports-feed-item-secondary-element .blob{
margin: 5px;
height: 5px;
width: 5px;
}
.sports-feed-item-secondary-meta .sports-feed-item-secondary-modified-time {
color: #999999;
font-weight: 500;
font-size: 12px;
line-height: 20px;
}
@media (max-width: 768px) {
#carousel-feed-nba .carousel-list {
padding-bottom: 6px;
}
#carousel-feed-nba .carousel-anchors {
bottom: 21px;
}
.feed-item-secondary {
margin: 0px;
position: relative;
display: block;
width: 100%;
background-color: #ffffff;
padding: 12px 0px;
border: none;
border-bottom: 1px solid #E9E9E9;
}
.sports-feed-item-secondary-element .feed-element-img {
border-radius: 4px;
object-fit: cover;
}
.feed-item-secondary .sports-feed-item-secondary-meta {
gap: 4px;
}
.sports-feed-item-secondary-meta .sports-item-title {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #2D2D2D;
}
.feed-item-secondary:hover .sports-item-title {
color: #2D2D2D;
}
.feed-item-secondary:hover .share-element .share-icon {
display: none;
}
.sports-feed-item-element-meta {
width: 100%;
height: 100%;
position: absolute;
bottom: 0;
background: linear-gradient(180deg, rgba(32, 37, 64, 0) 39.54%, rgba(32, 37, 64, 0.98) 65.58%, #202540 99.09%);
display: block;
}
.feed-item-secondary:first-child {
border-top: none;
padding-top: 18px;
}
}
</style>
<script>
function showEventShareOptions(event) {
var shareParent = event.target.parentNode;
var shareOptionsDiv = shareParent.querySelector(".share-options")
shareOptionsDiv.style.display = "flex";
}
function hideEventShareOptions(event) {
var shareParent = event.target.parentNode;
var shareDiv = shareParent.querySelector(".share-icon")
event.target.style.display = "none";
}
function onFeedItemClicked(categoryName, destinationUrl, index) {
trackGAEvent("FEED_STORY_CLICK", {
destination_url: destinationUrl,
sequence: index
});
}
(function() {
function onFeedItemCTAClicked(e) {
var target = e.target.closest("a.feed-item-cta");
if (!target) return;
var destinationUrl = target.getAttribute("href");
var sequence = target.dataset["sequence"];
var section = target.dataset["section"];
trackGAEvent("FEED_STORY_CLICK", {
destination_url: destinationUrl,
sequence: sequence,
section: section
});
}
function init() {
$all(".feed-item-cta").forEach(function(cta) {
cta.addEventListener("click", onFeedItemCTAClicked);
})
}
window.addEventListener("DOMContentLoaded", function() {
init();
})
})();
</script>
<style>
.sports-feed-item-primary-element .sports-primary-title {
font-weight: 600;
}
@media screen and (max-width: 768px) {
.pinned-stories .sport-feed-item-primary {
width: calc(100% + 32px);
margin-left: -16px;
margin-right: -16px;
margin-bottom: 0;
}
.pinned-stories .sports-feed-item-primary-element {
height: 265px;
}
.pinned-stories .sports-feed-item-primary-element img {
width: 100%;
border-radius: 0;
}
.pinned-stories .sports-feed-item-primary-element .sports-feed-item-element-meta {
border-radius: 0;
}
}
.feed-items {
width: 100%;
}
@media (max-width: 768px) {
.feed-items .feed-item-secondary:nth-last-child(-n+2) {
border-bottom: 1px solid #E9E9E9;
}
.feed-items.linear .sport-feed-item-primary {
border-bottom: 1px solid #E9E9E9;
padding-top: 16px;
padding-bottom: 16px;
margin-bottom: 4px;
}
.feed-items.linear .feed-item-secondary:first-child,
.feed-items.linear .sport-feed-item-primary:first-child {
padding-top: 0;
}
.feed-items.linear .feed-item-secondary:last-child,
.feed-items.linear .sport-feed-item-primary:last-child {
padding-bottom: 0;
border-bottom-color: transparent;
}
.feed-items.linear .feed-item-secondary:last-child {
border-bottom: none;
}
}
</style>
<style>
.score-carousel-container {
margin-top: 5px;
margin-bottom: 20px;
}
.score-carousel-container #keeda_cricket_widget,
.score-carousel-container #keeda_kabaddi_widget,
.score-carousel-container #keeda_football_widget {
margin-top: 0;
margin-bottom: 0;
padding-top: 0;
padding-bottom: 0;
}
.score-carousel-container #keeda_cricket_widget .keeda_widget,
.score-carousel-container #keeda_kabaddi_widget .keeda_widget,
.score-carousel-container #keeda_football_widget .keeda_widget {
height: auto;
}
.score-carousel-container #keeda_cricket_widget .keeda_widget_match_listing,
.score-carousel-container #keeda_kabaddi_widget .keeda_widget_match_listing,
.score-carousel-container #keeda_football_widget .keeda_widget_match_listing {
min-height: auto;
height: auto;
position: relative;
}
.score-carousel-container #keeda_cricket_widget .keeda_widget_match_listing {
min-height: 172px;
}
.score-carousel-container #keeda_cricket_widget .keeda_drop_down_container {
align-items: center;
}
.score-carousel-container #keeda_cricket_widget .keeda_carousel_all_scores a {
display: inline-flex;
gap: 5px;
align-items: center;
color: #0B65F0;
}
.score-carousel-container #keeda_cricket_widget .keeda_carousel_all_scores img {
top: 0;
width: 6px;
height: 11px;
}
@media (max-width: 768px) {
.score-carousel-container {
margin-top: 0;
margin-bottom: 16px;
}
.score-carousel-container #keeda_cricket_widget .keeda_widget_match_listing,
.score-carousel-container #keeda_kabaddi_widget .keeda_widget_match_listing,
.score-carousel-container #keeda_football_widget .keeda_widget_match_listing {
padding-top: 10px;
}
.score-carousel-container #keeda_football_widget {
padding-top: 16px;
}
.score-carousel-container #keeda_kabaddi_widget {
padding-left: 16px;
padding-right: 16px;
}
}
.faq-container .faq-answer {
padding: 12px 20px;
}
.page-rating-section {
margin-bottom: 15px;
}
</style>
<main class="event-home">
<section class="layout-wrapper">
<div class="content-container">
<div class="right">
<section class="sk-widget ">
<style>
.latest-popular-news-container {
display: flex;
position: relative;
}
.latest-popular-news-container .controls-container {
position: relative;
width: 100%;
display: flex;
background: #FFFFFF;
border: 1px solid #E9E9E9;
box-shadow: 1px 1px 4px rgb(0 0 0 / 7%);
border-radius: 28px;
margin-bottom: 16px;
padding: 1px;
}
.latest-popular-news-container .controls-container .news-switcher {
width: 100%;
cursor: pointer;
border: none;
text-align: center;
padding: 8px 12px;
border-radius: 28px;
background: #FFFFFF;
color: #474747;
}
.latest-popular-news-container .controls-container .news-switcher * {
margin: 0;
padding: 0;
font-weight: 600;
font-size: 14px;
line-height: 21px;
}
.latest-popular-news-container .controls-container .news-switcher.active {
background: #D32F2F;
color: #fff;
}
.latest-popular-news-container .content {
position: relative;
display: flex;
flex-direction: column;
}
.latest-popular-news-container .content .news-items {
display: flex;
gap: 10px;
flex-direction: column;
}
.latest-popular-news-container .content .news-items .news-item {
width: 100%;
text-decoration: none;
display: flex;
gap: 12px;
min-height: 54px;
}
.latest-popular-news-container .content .news-items .news-item .news-sequence {
min-width: 15px;
text-align: center;
color: #D32F2E;
font-size: 24px;
line-height: 33px;
}
.latest-popular-news-container .content .news-items .news-item .news-content {
width: 100%;
padding-bottom: 12px;
border-bottom: 1px solid #E9E9E9;
}
.latest-popular-news-container .content .news-items .news-item .news-title {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
font-weight: 400;
color: #2D2D2D;
font-size: 12px;
line-height: 18px;
}
.latest-popular-news-container .content .news-items .news-item:last-child .news-content {
padding-bottom: 0;
border-bottom: none;
}
.latest-popular-news-container .content .news-items .news-item .news-title:hover {
color: #0B65F0;
}
</style>
<div class="latest-popular-news-container" data-component-id="latest_popular_news_widget__wwe-crown-jewel" data-section>
<div class="panel ">
<header class="panel-header ">
<h2 class="panel-heading">Latest News</h2>
</header>
<div class="panel-body ">
<div class="content">
<div class="news-items latest_popular_news_widget__wwe-crown-jewel__news_latest">
<a href="/wwe/news-watch-john-cena-wrestles-attire-made-exotic-dancer-s-outfit-store" class="news-item" data-sequence="1" data-section>
<div class="news-sequence">1</div>
<div class="news-content">
<div class="news-title">[WATCH] John Cena wrestles in attire made from an exotic dancer's outfit store</div>
</div>
</a>
<a href="/wwe/news-john-cena-bags-first-time-ever-project-wwe-exit" class="news-item" data-sequence="2" data-section>
<div class="news-sequence">2</div>
<div class="news-content">
<div class="news-title">John Cena bags 'first-time-ever' project after WWE exit</div>
</div>
</a>
<a href="/wwe/news-he-s-just-awesome-dude-logan-paul-heaps-praise-top-raw-star-way-treated-wwe" class="news-item" data-sequence="3" data-section>
<div class="news-sequence">3</div>
<div class="news-content">
<div class="news-title">"He's just an awesome dude" - Logan Paul heaps praise on top RAW star for the way he's treated him in WWE</div>
</div>
</a>
<a href="/wwe/news-box-office-wwe-fans-want-see-logan-paul-team-fellow-champion-recent-shoutout" class="news-item" data-sequence="4" data-section>
<div class="news-sequence">4</div>
<div class="news-content">
<div class="news-title">"Box office" - WWE fans want to see Logan Paul team up with fellow champion after recent shoutout</div>
</div>
</a>
<a href="/wwe/news-la-knight-one-thing-wwe-legends-john-cena-the-undertaker-had-according-wrestling-veteran" class="news-item" data-sequence="5" data-section>
<div class="news-sequence">5</div>
<div class="news-content">
<div class="news-title">LA Knight doesn't have one thing that WWE legends John Cena and The Undertaker had, according to wrestling veteran</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
<script>
(function() {
function onSwitcherClicked(e) {
var switcherClicked = e.target.closest(".news-switcher");
var activeSwitch = e.target.closest(".controls-container").querySelector(".news-switcher.active");
if (switcherClicked == activeSwitch) return;
removeClass(activeSwitch, "active");
addClass(switcherClicked, "active");
var contentToShow = switcherClicked.dataset["target"];
var contentToHide = activeSwitch.dataset["target"];
removeClass($("." + contentToShow), "hidden");
addClass($("." + contentToHide), "hidden");
}
function onNewsItemClicked(e) {
var itemClicked = e.target.closest("a");
var destinationUrl = itemClicked.getAttribute("href");
var sequence = itemClicked.dataset["sequence"];
var section = itemClicked.dataset["section"];
trackGAEvent("LATEST_NEWS_WIDGET_STORY_CLICK", {
destination_url: destinationUrl,
sequence: sequence,
section: section
});
}
function init() {
var containers = $all(".latest-popular-news-container");
containers.forEach(function(container) {
var componentId = container.dataset["componentId"];
var section = container.dataset["section"];
var newsSwitchers = container.querySelectorAll(".news-switcher");
var newsItems = container.querySelectorAll(".news-item");
newsSwitchers.forEach(function(switcher) {
switcher.addEventListener("click", onSwitcherClicked);
});
newsItems.forEach(function(newsItem) {
newsItem.addEventListener("click", onNewsItemClicked);
});
trackImpressionGAEventWhenInViewport({
element: container,
identifier: "widget_latest_popular_news__" + componentId,
eventName: "WIDGET_LATEST_POPULAR_NEWS_IMPRESSION",
eventParams: {
componentId: componentId,
section: section
}
});
});
}
window.addEventListener("DOMContentLoaded", function() {
init();
});
})();
</script>
</section>
<div class="section-separator "></div>
<section class="sk-widget ">
<style>
.newsletter-ui {
overflow: hidden !important;
border-radius: 10px;
border: 1px solid #999;
}
.newsletter-form-group {
flex-direction: row;
display: flex;
margin: 0 20px;
height: 40px;
border-radius: 47px;
}
.newsletter-form-group input {
border: 1px solid #fff;
border-radius: 47px;
padding: 6px 12px;
border: 1px solid #E9E9E9;
background: #FFF;
width: 100%;
}
.newsletter-form-group button {
color: #fff;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 700;
text-transform: uppercase;
background: #00C85D;
border: 1px solid #007B39;
border-radius: 47px;
cursor: pointer;
width: 107px;
margin-left: -35px;
padding: 12px 14px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 3px solid rgba(0, 123, 57, 1);
}
.newsletter-form-group button:disabled {
opacity: 0.5;
cursor: not-allowed;
}
.newsletter-success-ui {
padding: 28px 0 20px;
border-radius: 10px;
}
.newsletter-success-ui h5 {
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; 
margin-bottom: 8px;
}
.newsletter-success-ui .verify-text {
text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.12px;
}
.newsletter-ui span.highlight {
color: #d32f2f;
}
.newsletter-success-image {
background: url("//staticg.sportskeeda.com/skm/assets/email.gif") no-repeat center;
background-size: contain;
height: 98px;
width: 98px;
margin: auto; 
}
.newsletter-success-banner {
text-align: center;
}
.terms-and-conditions {
color: #999;
text-align: center;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 160%; 
padding-top: 10px;
padding-bottom: 10px;
}
.terms-and-conditions a {
color: #999;
}
.newsletter-banner {
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 140px;
}
.newsletter-banner.banner-wwe-press {
background-image:url("//staticg.sportskeeda.com/newsletter/press-banner-wwe.png?w=800");
}
.newsletter-banner.banner-exclusive-wwe {
background-image: url("//staticg.sportskeeda.com/newsletter/banner-exclusive-wwe.svg?w=800");
}
.newsletter-ui.banner-wwe-press {
background: linear-gradient(110deg, #FFD5DC 0%, #FFF7EC 35.6%, #EFFFF6 68.05%, #E4F6FF 100.5%);
}
.newsletter-ui.banner-wwe-exclusive {
background: #020001;
}
.banner-wwe-press .div-text {
color: #2D2D2D;
}
.banner-wwe-press .verify-text {
color: #474747;
}
.banner-wwe-exclusive .div-text, 
.banner-wwe-exclusive .verify-text {
color: #fff;
}
.div-text {
padding-top: 5px;
}
.verify-text {
padding-top: 8px;
}
.newsletter-box {
padding-bottom: 4px;
border-radius: 11px;
} 
.newsletter-box.press {
background: linear-gradient(90deg, #D77CCC -4.72%, #94C4DC 33.35%, #7DDBE8 68.07%, #74C1ED 102.78%);
}
.newsletter-box.exclusive {
background-color: #020001;
}
</style>
<div class="newsletter-box hidden">
<div class="newsletter-ui">
<div class="newsletter-form">
<div class="newsletter-banner">
</div>
<form class="newsletter-form-group">
<input type="email" required placeholder="Enter your email" name="email">
<button type="submit">Subscribe</button>
</form>
<div class="terms-and-conditions">
<label for="terms-input">
By subscribing, you agree to our
<a href="https://www.sportskeeda.com/terms-of-use" target="_blank" alt="Terms of Service">Terms</a>
&
<a href="https://www.sportskeeda.com/privacy-policy" target="_blank" alt="Privacy Policy">Privacy Policy</a>
</label>
</div>
</div>
<div class="newsletter-success-ui hidden">
<div class="newsletter-success-banner">
<div class="newsletter-success-image"></div>
<div>Almost finished...</div>
<div>
Please verify your email ID by clicking <br> on the link we just sent you!
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript">
(function() {
var IS_USER_LOGGED_IN = !!getCookie('fw_user_slug');
var newsletterContainer = document.querySelector(".newsletter-box");
var newsletterBanner = newsletterContainer.querySelector(".newsletter-banner");
var newsletterUI = newsletterContainer.querySelector(".newsletter-ui");
var newsletterSuccessUI = newsletterContainer.querySelector(".newsletter-success-ui")
var newsletterSuccessBanner = newsletterContainer.querySelector(".newsletter-success-banner");
var divText = newsletterSuccessUI.querySelector(":nth-child(2)");
var verifyText = newsletterSuccessUI.querySelector(":nth-child(3)");
var randomNum = Math.floor(Math.random() * 10) + 1;
var backgroundImgUrl;
var selectedBannerImage;
if (randomNum % 2 == 1) {
addClass(newsletterBanner, 'banner-wwe-press')
addClass(newsletterContainer, 'press')
selectedBannerImage = 'banner-wwe-press';
} else {
addClass(newsletterBanner, 'banner-exclusive-wwe')
addClass(newsletterContainer, 'exclusive')
selectedBannerImage = 'banner-wwe-exclusive';
}
var newsletterForm = newsletterContainer.querySelector(".newsletter-form");
if (newsletterForm) {
newsletterForm.onsubmit = onNewsLetterSubmit;
}
if (newsletterUI && newsletterSuccessBanner && divText && verifyText) {
addClass(divText, 'div-text');
addClass(verifyText, 'verify-text');
addClass(newsletterUI, selectedBannerImage);
}
function onNewsLetterSubmit(e) {
e.preventDefault();
var formData = new FormData(e.target);
var subscribeTo = "WWE News Round-Up Subscriber List";
var submitButton = newsletterForm.querySelector("button");
if (submitButton) {
submitButton.setAttribute("disabled", "disabled");
}
var userEmail = formData.get("email");
var userCountry = getCookie("country_code");
if (!userEmail) {
alert("Please enter your email");
return;
}
// storing newsletter email in localStorage
localStorage.setItem("newsletter_email", userEmail);
var apiURL = "https://a-login.sportskeeda.com/newsletter/subscribe";
var payload = {
email: userEmail,
listName: subscribeTo,
}
if (userCountry) {
payload["data"] = {
"country" : userCountry
};
}
pureJSAjaxPost(apiURL, payload, function(res) {}, function(err) {
console.error(err);
}, true);
localStorage.setItem(getNewsLetterKeyPrefix() + "_subscribed", "true");
showNewsletterSuccessUI();
trackNewsletterSubmitEvent();
if (!IS_USER_LOGGED_IN) {
trackGAEvent("Passed_NonLoggedIn_Email", {
"email_src": "WWE_Newsletter"
});
}
}
function getNewsLetterKeyPrefix() {
return "newsletter_desktop_" + SPORT_SLUG;
}
function trackNewsletterSubmitEvent() {
trackGAEvent("Popup_Subscriptions_WWE_News_Round_Up", {
"banner_img": selectedBannerImage,
});
}
function showNewsletterSuccessUI() {
addClass(newsletterForm, "hidden");
removeClass(newsletterSuccessUI, "hidden");
}
function autoFillNewsletterEmail() {
var email = getCookie("fw_email");
var emailInput = newsletterForm.querySelector("input");
if (email && emailInput) {
emailInput.value = decodeURIComponent(email);
return;
}
}
autoFillNewsletterEmail();
window.addEventListener("DOMContentLoaded", function() {
var keyPrefix = getNewsLetterKeyPrefix();
// No local storage support
if (!window.localStorage) {
return;
}
// remove hidden if user is not subscribed
if (!localStorage.getItem(getNewsLetterKeyPrefix() + "_subscribed")) {
removeClass(newsletterContainer, "hidden");
}
trackImpressionGAEventWhenInViewport({
element: newsletterUI,
identifier: "sidebar_newsletter_" + SPORT_SLUG,
eventName: "Popup_Count_WWE_News_Round_Up",
eventParams: {
"banner_img": selectedBannerImage,
}
});
});
})();
</script>
</section>
<div class="section-separator "></div>
</div>
<div class="left">
<section class="primary-feed-stories">
<div class="panel">
<div class="panel-body no-padding-d">
<div class="feed-items">
<div class="sport-feed-item-primary">
<div class="sports-feed-item-primary-element">
<a class="feed-item-cta" href="/wwe/news-rey-mysterio-breaks-silence-dominik-mysterio-s-actions-wwe-hall-fame-speech" data-sequence="1" data-section>Rey Mysterio breaks silence on Dominik Mysterio&#039;s actions during his WWE Hall of Fame speech</a>
<img width="334" height="200" alt="Rey Mysterio breaks silence on Dominik Mysterio&#039;s actions during his WWE Hall of Fame speech" data-lazy="https://staticg.sportskeeda.com/editor/2023/12/9edac-17039462489433-1920.jpg?w=668" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-element-meta">
<div class="sports-primary-title">Rey Mysterio breaks silence on Dominik Mysterio's actions during his WWE Hall of Fame speech</div>
<div class="sports-feed-item-primary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/rumor-potential-reason-wwe-cutting-live-shows-c-d-counties-cities" data-sequence="2" data-section>WWE could be making a major change with UFC in the mix soon - Reports</a>
<img class="feed-element-img" width="82" height="83" alt="WWE could be making a major change with UFC in the mix soon - Reports" data-lazy="https://staticg.sportskeeda.com/editor/2023/12/d3e41-17019609310728-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">WWE could be making a major change with UFC in the mix soon - Reports</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-wwe-pulls-plug-36-year-tradition" data-sequence="3" data-section>WWE pulls the plug on 36-year tradition</a>
<img class="feed-element-img" width="82" height="83" alt="WWE pulls the plug on 36-year tradition" data-lazy="https://staticg.sportskeeda.com/editor/2023/12/d9c44-17018705737958-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">WWE pulls the plug on 36-year tradition</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/how-long-will-john-cena-take-recover-bicep-injury-exploring-potential-wwe-return-date" data-sequence="4" data-section>How long will John Cena take to recover from his bicep injury? Exploring the potential WWE return date</a>
<img class="feed-element-img" width="82" height="83" alt="How long will John Cena take to recover from his bicep injury? Exploring the potential WWE return date" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/a1ea4-17008330557369-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">How long will John Cena take to recover from his bicep injury? Exploring the potential WWE return date</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-john-cena-s-special-wwe-talent-had-lot-say-29-year-old-star-botched-viral-moment-crown-jewel" data-sequence="5" data-section>John Cena&#039;s special WWE talent &quot;had a lot to say&quot; to 29-year-old star after botched viral moment from Crown Jewel</a>
<img class="feed-element-img" width="82" height="83" alt="John Cena&#039;s special WWE talent &quot;had a lot to say&quot; to 29-year-old star after botched viral moment from Crown Jewel" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/1d947-17006734562572-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">John Cena's special WWE talent "had a lot to say" to 29-year-old star after botched viral moment from Crown Jewel</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div class="section-separator"></div>
<section class="feed-stories">
<div class="panel">
<div class="panel-body no-padding-d">
<div class="feed-items">
<div class="sport-feed-item-primary">
<div class="sports-feed-item-primary-element">
<a class="feed-item-cta" href="/wwe/59-year-old-wcw-legend-disappointed-wwe-drew-mcintyre-s-booking-analyzing-comments" data-sequence="6" data-section>59-year-old WCW legend disappointed with WWE for Drew McIntyre&#039;s booking? Analyzing his comments</a>
<img width="334" height="200" alt="59-year-old WCW legend disappointed with WWE for Drew McIntyre&#039;s booking? Analyzing his comments" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/8bff3-17000653917366-1920.jpg?w=668" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-element-meta">
<div class="sports-primary-title">59-year-old WCW legend disappointed with WWE for Drew McIntyre's booking? Analyzing his comments</div>
<div class="sports-feed-item-primary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/triple-h-embarrass-logan-paul-breaking-one-important-rule-champion-massive-swerve-explored" data-sequence="7" data-section>Triple H to embarrass Logan Paul for breaking one important rule as champion? Massive swerve explored</a>
<img class="feed-element-img" width="82" height="83" alt="Triple H to embarrass Logan Paul for breaking one important rule as champion? Massive swerve explored" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/8c67d-16999066021218-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">Triple H to embarrass Logan Paul for breaking one important rule as champion? Massive swerve explored</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/will-the-elders-the-bloodline-send-roman-reigns-another-blessing-wwe-crown-jewel-setback-examining-prospect" data-sequence="8" data-section>Will The Elders in The Bloodline send Roman Reigns another &#039;blessing&#039; after WWE Crown Jewel setback? Examining the prospect</a>
<img class="feed-element-img" width="82" height="83" alt="Will The Elders in The Bloodline send Roman Reigns another &#039;blessing&#039; after WWE Crown Jewel setback? Examining the prospect" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/f3c9d-16997582449912-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">Will The Elders in The Bloodline send Roman Reigns another 'blessing' after WWE Crown Jewel setback? Examining the prospect </div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-wrestling-veteran-reveals-john-cena-s-impact-wwe-recent-short-stint-company" data-sequence="9" data-section>Wrestling veteran reveals John Cena&#039;s impact on WWE during his recent short stint with the company</a>
<img class="feed-element-img" width="82" height="83" alt="Wrestling veteran reveals John Cena&#039;s impact on WWE during his recent short stint with the company" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/eb19d-16996344902539-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">Wrestling veteran reveals John Cena's impact on WWE during his recent short stint with the company</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-rey-mysterio-soon-betrayed-close-wwe-associate-thinks-veteran" data-sequence="10" data-section>Rey Mysterio could soon be betrayed by close WWE associate, thinks veteran</a>
<img class="feed-element-img" width="82" height="83" alt="Rey Mysterio could soon be betrayed by close WWE associate, thinks veteran" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/502d6-16996316724907-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">Rey Mysterio could soon be betrayed by close WWE associate, thinks veteran</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-john-cena-gets-praised-unselfishly-agreeing-lose-former-champion" data-sequence="11" data-section>John Cena gets praised for unselfishly agreeing to lose to a former champion</a>
<img class="feed-element-img" width="82" height="83" alt="John Cena gets praised for unselfishly agreeing to lose to a former champion" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/a16b5-16996272715389-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">John Cena gets praised for unselfishly agreeing to lose to a former champion</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
<div class="feed-item-secondary">
<div class="sports-feed-item-secondary-element">
<a class="feed-item-cta" href="/wwe/news-watch-cody-rhodes-dominik-mysterio-s-unseen-backstage-reactions-logan-paul-s-us-title-win" data-sequence="12" data-section>[WATCH] Cody Rhodes and Dominik Mysterio&#039;s unseen backstage reactions after Logan Paul&#039;s US title win</a>
<img class="feed-element-img" width="82" height="83" alt="[WATCH] Cody Rhodes and Dominik Mysterio&#039;s unseen backstage reactions after Logan Paul&#039;s US title win" data-lazy="https://staticg.sportskeeda.com/editor/2023/11/b1315-16996181917181-1920.jpg?h=166" src="data:image/svg+xml;charset=utf-8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='100' style='fill:rgb(128, 128, 128);'/></svg>" />
<div class="sports-feed-item-secondary-meta">
<div class="sports-item-title">[WATCH] Cody Rhodes and Dominik Mysterio's unseen backstage reactions after Logan Paul's US title win</div>
<div class="sports-feed-item-secondary-modified-time"></div>
</div>
</div>
</div>
</div>
</div>
<footer class="panel-footer">
<a class="panel-cta-button view-more-cta" href="/go/wwe-crown-jewel/news" data-section="news">
<span>More WWE Crown Jewel 2023 News</span>
</a>
</footer>
</div>
</section>
<div class="section-separator"></div>
</div>
</div>
</section>
<section class="division">
<div class="content-container">
<div class="left">
<section class="page-info">
<div class="panel">
<header class="panel-header">
<h2 class="panel-heading">About WWE Crown Jewel 2023</h2>
</header>
<div class="panel-body">
<style>
.page-seo-content {
position: relative;
overflow: hidden;
padding-bottom: 40px;
}
.page-seo-content .content-overlay-area {
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 80px;
z-index: 0;
}
.page-seo-content .content-overlay-area .content-overlay {
background: linear-gradient(180deg, rgba(255, 255, 255, 0.49) 0%, #FFFFFF 56.93%);
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
z-index: 1;
}
.page-seo-content .view-toggle-container {
height: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
}
.page-seo-content .view-toggle-container.expanded {
justify-content: flex-end;
}
.page-seo-content .view-toggle-container .view-toggle-content-btn {
cursor: pointer;
position: relative;
z-index: 2;
display: flex;
gap: 8px;
align-items: center;
justify-content: space-between;
padding: 4px 10px;
background-color: #fff;
border: 1px solid #666666;
border-radius: 28px;
}
.page-seo-content .view-toggle-container .view-toggle-content-btn span {
color: #666666;
font-size: 12px;
line-height: 18px;
}
.page-seo-content .view-toggle-container .view-toggle-content-btn img {
width: 6px;
height: 10px;
transform: rotate(90deg);
background-color: transparent;
}
.page-seo-content .view-toggle-container.expanded .view-toggle-content-btn img {
transform: rotate(-90deg);
}
.page-seo-content .cms-content {
overflow: hidden;
height: 100%;
}
.page-seo-content .cms-content.collapsed {
max-height: 210px;
}
.page-seo-content .cms-content p {
margin: 0;
padding: 0;
color: #2D2D2D;
font-weight: 400;
font-size: 16px;
line-height: 32px;
}
.page-seo-content .cms-content pt h2 {
margin: 10px 0 0 0;
font-weight: 600;
font-size: 20px;
line-height: 30px;
}
.page-seo-content .cms-content ul {
margin-left: 20px;
}
.page-seo-content .cms-content li > p {
display: inline;
}
.page-seo-content .cms-content ul+p {
margin-left: 20px;
}
.page-seo-content .cms-content li {
margin: 0;
padding: 0;
color: #2D2D2D;
font-weight: 400;
font-size: 16px;
line-height: 32px;
list-style-type: disc;
list-style-position: inside;
}
.page-seo-content .cms-content .toc {
width: 60%;
background: #F5F7FD !important;
}
.page-seo-content .cms-content .toc .accordion-title {
background: #EAECF0 !important;
font-weight: 600;
font-size: 15px;
}
.page-seo-content .cms-content .toc.active>.accordion-title::after {
top: 6px;
}
.page-seo-content .cms-content .toc-content {
font-size: 14px;
}
.page-seo-content .cms-content .toc-content li {
word-wrap: break-word;
}
.page-seo-content .cms-content .toc-content li a:hover {
color: #0b65f0 !important;
}
.page-seo-content .cms-content .toc-content li a {
color: #2D2D2D !important;
text-decoration: none;
}
.page-seo-content .cms-content .toc-content li:before {
color: #666666;
}
.page-seo-content .cms-content .toc-info--holder {
margin: 14px 0;
}
.page-seo-content .cms-content .toc-info--holder ol {
counter-reset: my-counter;
padding-left: 0;
}
.page-seo-content .cms-content .toc-info--holder li {
display: block;
padding-left: 0;
}
.page-seo-content .cms-content .toc-info--holder li:before {
content: counters(my-counter, ".") ". ";
counter-increment: my-counter;
display: inline;
margin-right: 4px;
vertical-align: top;
text-align: right;
white-space: nowrap;
width: 1.2em;
}
.page-seo-content .cms-content .toc-info--holder ol {
counter-reset: my-counter;
padding-left: 12px;
}
.page-seo-content .cms-content .toc-info--holder li a {
display: inline-block;
width: 90%;
}
.page-seo-content .cms-content .accordion-wrapper {
clear: both;
display: block;
position: relative;
background: #FFFFFF;
border: 1px solid #e9e9e9;
margin-bottom: 16px;
}
.page-seo-content .cms-content .accordion-wrapper .accordion-title {
padding: 8px 20px;
font-weight: 600;
font-size: 15px;
line-height: 22px;
color: #474747;
margin: 0 !important;
background: #F5F7FD;
position: relative;
width: 100%;
cursor: pointer;
}
.page-seo-content .cms-content .accordion-wrapper .accordion-title::after {
content: "";
display: block;
position: absolute;
top: 8px;
right: 16px;
background: url("//staticg.sportskeeda.com/skm/assets/menu/arrow-down.svg") no-repeat;
width: 24px;
height: 24px;
transition: all 0.3s ease-in;
background-size: cover;
transform: rotate(180deg);
}
.page-seo-content .cms-content .accordion-wrapper.active .accordion-title::after {
transform: rotate(0deg);
bottom: 6px;
}
.page-seo-content .cms-content .accordion-wrapper .accordion-content {
padding: 0 16px 8px;
display: none;
}
.page-seo-content .cms-content .accordion-wrapper.active .accordion-content {
display: block;
}
.page-seo-content .cms-content .toc-info--holder li:before {
content: counters(my-counter, ".") ". ";
counter-increment: my-counter;
}
.page-seo-content .cms-content .toc-info--holder li:before {
content: counters(my-counter, ".") ". ";
counter-increment: my-counter;
display: inline;
margin-right: 4px;
vertical-align: top;
}
.page-seo-content .cms-content .title-toc {
font-size: 1.5em;
font-weight: bold;
}
@media all and (max-width: 768px) {
.page-seo-content .cms-content .toc {
width: 100%;
}
.page-seo-content .cms-content .toc .accordion-title {
height: 33px;
padding: 7px 0 7px 16px !important;
}
.page-seo-content .cms-content .toc-content li {
word-wrap: break-word;
margin-top: 8px;
}
.page-seo-content .cms-content .toc .accordion-title::after {
top: 5px;
}
.page-seo-content .cms-content .accordion-wrapper {
margin-bottom: 0;
}
.page-seo-content .cms-content .accordion-wrapper>h2 {
padding: 12px 16px;
font-weight: 500;
font-size: 17px;
line-height: 1.5;
padding-right: 44px;
-webkit-tap-highlight-color: transparent;
}
.page-seo-content .cms-content .accordion-wrapper .accordion-title::after {
top: 5px;
right: 12px;
}
.page-seo-content .cms-content p {
font-size: 14px;
line-height: 22px;
}
.page-seo-content .cms-content h2 {
font-weight: 600;
font-size: 16px;
line-height: 24px;
}
.page-seo-content .cms-content .title-toc {
font-weight: 600;
font-size: 16px;
line-height: 24px;
}
.page-seo-content .cms-content li {
font-size: 14px;
line-height: 22px;
}
}
</style>
<div class="page-seo-content">
<div class="cms-content collapsed">
<figure class="image" contenteditable="false"><noscript><img class="sk-app-thumbnail" alt="" src="https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg"></noscript><img class="lazy-img" width="912" height="513" data-img="https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg" data-srcset="https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=190 190w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=720 720w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=840 840w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=1045 1045w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=1200 1200w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=1460 1460w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=1600 1600w, https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg 1920w" alt data-img-low="https://staticg.sportskeeda.com/editor/2023/11/51609-16989056034997-1920.jpg?w=840" src="data:image/svg+xml,&lt;svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20912%20513%22&gt;&lt;/svg&gt;"><figcaption></figcaption></figure><p>WWE Crown Jewel is a professional wrestling event produced by <a href="/wwe" target="_blank">WWE</a> (World Wrestling Entertainment). Currently, four Crown Jewel events have taken place, all in Riyadh, Saudi Arabia. The events are a part of WWE's 10-year deal with Saudi Arabia, in support of Saudi Vision 2030. Apart from Crown Jewel, Super Showdown and Greatest Royal Rumble are the other events under WWE's partnership with Saudi Arabia.</p><p><br></p><p>The latest Crown Jewel took place on November 4, 2023 in Mohammad Abdu Arena in Riyadh, Saudi Arabia.</p><p><br></p><h2 id="wwe-crown-jewel-0">Crown Jewel History</h2><p><br></p><p>It was in 2018 when WWE entered into a long-term relationship with the Saudi Arabia Ministry of Support in Saudi Vision 2030. The first event was held by the name <em>The Greatest Royal Rumble </em>in April 2018. However, the PPV was held only one time. The next event in Saudi was held on November 2, 2018, by the name <em>Crown Jewel </em>and has been held on the spot since then. The first-ever Crown Jewel saw a WWE World Cup tournament and a tag team match between D-Generation X and <a href="/team/the-brothers-of-destruction" target="_blank" rel="noopener noreferrer">The Brothers of Destruction</a>. </p><p><br></p><p>The Crown Jewel returned in 2019, becoming the first Saudi PPV to take place twice. It always takes place in early November. WWE couldn't visit Saudi in November 2020 due to the COVID-19 pandemic and thus, the event did not take place that year. It returned in 2021, followed by 2022. While all Crown Jewel events have been held in Riyadh, the first four events were all held in different Stadiums. They took place in King Saud Stadium, King Fahd Stadium, Mohammad Abdu Stadium and Mrsool Park. The fifth edition, i.e, 2023 edition marked event's return to Mohammad Abdu Stadium and took place on November 4, 2023.</p><p><br></p><h2 id="wwe-crown-jewel-1">Crown Jewel 2023 Results</h2><figure class="image" contenteditable="false"><noscript><img class="sk-app-thumbnail" alt="" src="https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg"></noscript><img class="lazy-img" width="0" height="0" data-img="https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg" data-srcset="https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=190 190w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=720 720w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=840 840w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=1045 1045w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=1200 1200w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=1460 1460w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=1600 1600w, https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg 1920w" alt data-img-low="https://staticg.sportskeeda.com/editor/2023/11/c5a72-16989054046366-1920.jpg?w=840" src="data:image/svg+xml,&lt;svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%200%200%22&gt;&lt;/svg&gt;"><figcaption>Image Courtesy - The official WWE poster for Roman Reigns vs LA Knight</figcaption></figure><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%; text-align: center;"><strong>Stipulation</strong></td><td style="width: 25.0424%; text-align: center;"><strong>Match</strong></td><td style="width: 25.0424%; text-align: center;"><strong>Winner</strong></td></tr><tr><td style="width: 50%;">Sami Zayn vs. JD McDonagh</td><td style="width: 25.0424%;">Dark Match</td><td style="width: 25.0424%;">Sami Zayn</td></tr><tr><td style="width: 50%;">Rhea Ripley (c) vs. Nia Jax vs. Shayna Baszler vs. Zoey Stark vs. Raquel Rodriguez </td><td style="width: 25.0424%;">Fatal Five Way match for Women's World Championship</td><td style="width: 25.0424%;">Rhea Ripley (c)</td></tr><tr><td style="width: 50%;">Seth "Freakin" Rollins (c) vs. Drew McIntyre </td><td style="width: 25.0424%;">World Heavyweight Championship Match</td><td style="width: 25.0424%;">Seth 'Freakin' Rollins (c)</td></tr><tr><td style="width: 50%;">Roman Reigns (c) vs. LA Knight</td><td style="width: 25.0424%;">Undisputed WWE Universal Championship Match</td><td style="width: 25.0424%;">Roman Reigns (c)</td></tr><tr><td style="width: 50%;">Rey Mysterio (c) vs. Logan Paul</td><td style="width: 25.0424%;">WWE United States Championship Match</td><td style="width: 25.0424%;">Logan Paul</td></tr><tr><td style="width: 50%;">Cody Rhodes vs. Damian Priest</td><td style="width: 25.0424%;">Singles Match</td><td style="width: 25.0424%;">Cody Rhodes</td></tr><tr><td style="width: 50%;">Iyo Sky (c) vs. Bianca Belair</td><td style="width: 25.0424%;">WWE Women's Championship Match</td><td style="width: 25.0424%;">Iyo Sky (c)</td></tr><tr><td style="width: 50%;">John Cena vs. Solo Sikoa</td><td style="width: 25.0424%;">Singles Match</td><td style="width: 25.0424%;">Solo Sikoa</td></tr></tbody></table><p><br></p><h3 id="wwe-crown-jewel-9">Sami Zayn vs. JD McDonagh</h3><p><br></p><p>Judgment Day has been feuding against the likes of Cody Rhodes, Sami Zayn, Jey Uso, and Kevin Owens for many months now. Zayn and Owens also lost their WWE Tag Team Titles to The Judgment Day. The frustration of the good guys became evident on the group and on their accomplice JD McDonagh. Rhodes and Uso started fighting The Judgment Day separately while Kevin Owens was drafted to SmackDown, leaving Zayn alone in the ring. He wanted to fight the group alone and got a dark match against its accomplice JD McDonagh at <em>Crown Jewel. </em></p><p><br></p><h3 id="wwe-crown-jewel-10">Fatal-Five Way match for Women's World Championship</h3><p>On the September 11 episode of SmackDown, <a href="/player/rhea-ripley" target="_blank" rel="noopener noreferrer">Rhea Ripley</a> defended her Women's World Title against Raquel Rodriguez. On the night, <a href="/player/nia-jax" target="_blank" rel="noopener noreferrer">Nia Jax</a> made her surprise return to the company and attacked Rodriguez, allowing Ripley to pick up the win. After the match, she also attacked the champion Ripley. Next week, she interfered in a match involving <a href="/player/shayna-baszler" target="_blank" rel="noopener noreferrer">Shayna Baszler</a> and <a href="/player/zoey-stark" target="_blank" rel="noopener noreferrer">Zoey Stark</a>. All these tensions started brawls between Ripley, Jax, Baszler, and Rodriguez. </p><p><br></p><p>Jax and Rodriguez squared off on October 9 RAW, but the match was ruled out after interferences from Ripley and Baszler. A brawl ensued, followed by another brawl the next week which also involved Zoey Stark. On October 16, 2023 episode of RAW, the General Manager <a href="/player/adam-pearce" target="_blank" rel="noopener noreferrer">Adam Pearce</a> announced that Ripley would have to defend her Women's World Championship at Crown Jewel against every woman she has been brawling with for the past weeks.</p><p><br></p><h3 id="wwe-crown-jewel-11">Seth 'Freakin' Rollins (c) vs. Drew McIntyre - World Heavyweight Championship</h3><p><br></p><p>Seth Rollins became the Inaugural World Heavyweight Champion at <em>Night of Champions </em>in Saudi Arabia. He returns to Saudi Arabia at Crown Jewel for the first time since winning the title. On the October 9 episode of RAW, he was celebrating a successful title defense against <a href="/player/shinsuke-nakamura" target="_blank" rel="noopener noreferrer">Shinsuke Nakamura</a> at <em>Fastlane </em>which was cut short due to an interruption by Drew McIntyre who demanded a title match. Rollins accepted and was ready to fight on RAW but McIntyre stated that he did not want to face a tired Rollins. Instead, the two healed superstars will take on each other at <em>Crown Jewel 2023. </em></p><p><br></p><h3 id="wwe-crown-jewel-12">Roman Reigns (c) vs. LA Knight - Undisputed WWE Universal Champion</h3><p><br></p><p>Roman Reigns defeated his cousin Jey Uso at SummerSlam and went on a vacation right thereafter. In the meanwhile, LA Knight and John Cena became good friends, where Cena supported Knight at <em>Fastlane </em>and the two teamed at <em>Payback </em>to defeat The Bloodline (Jimmy Uso and Solo Sikoa). Reigns returned to SmackDown on the October 13 episode, where he interrupted Cena and offered him to leave the ring voluntarily. </p><p><br></p><p>Cena said that he acknowledged Reigns and was not there to challenge him for the gold. However, he introduced someone who was worthy enough to challenge Reigns and it was LA Knight who came out. The Megastar defeated Solo Sikoa in the main event of SmackDown and had a brawl with Reigns afterward. On October 20, a match between the two was officiated for Crown Jewel.</p><p><br></p><h3 id="wwe-crown-jewel-13">Rey Mysterio (c) vs. Logan Paul - United States Championship Match</h3><p><br></p><p>After winning a boxing match at <em>The Prime Card </em>on October 14, 2023, Logan Paul challenged the WWE United States Champion Rey Mysterio for the title. Mysterio asked Paul to meet him any Friday on SmackDown. Paul made his appearance on the October 20 episode of SmackDown and reminded everyone that he had already defeated Mysterio at WrestleMania 38. Mysterio then accepted Paul's title challenge and a match was set up at Crown Jewel.</p><p><br></p><h3 id="wwe-crown-jewel-14">Cody Rhodes vs. Damian Priest</h3><p><br></p><p>Cody Rhodes, alongside the likes of Sami Zayn, Kevin Owens, and Jey Uso has been fighting against Judgment Day for many months. At <em>Fastlane, </em>Rhodes and Uso defeated Finn Balor and Damian Priest to become the new Undisputed WWE Tag Team Champions but lost the belt in just two weeks. On the October 23 episode of RAW, The Judgment Day celebrated their title victory and Rhodes interrupted the proceedings. He challenged Damian Priest to a match, which he accepted for WWE Crown Jewel. </p><p><br></p><h3 id="wwe-crown-jewel-15">Iyo Sky (c) vs. Bianca Belair</h3><p><br></p><p>Bianca Belair won the WWE Women's Championship at <em>SummerSlam 2023 </em>but her celebrations did not last long as Ms. Money in the Bank crashed the party by cashing in her briefcase right after. Few days later, Iyo Sky and her friend Bayley injured Belair and sent her out of the programming. On the October 20 episode of SmackDown, Sky retained her title against Charlotte Flair, following which Belair made her return after two months and got a title match at Crown Jewel.</p><p><br></p><h3 id="wwe-crown-jewel-16">John Cena vs. Solo Sikoa</h3><p><br></p><p>Ever since The Bloodline has formed, John Cena has been in a dispute with the group. While he failed to beat Roman Reigns for the title in 2021, Cena did not give up and returned in 2023 to end The Bloodline's dominance. Building up to Crown Jewel, he acknowledged Reigns as one of the greatest champions of all time and introduced LA Knight as his contender. Cena's continued interferences in the matters of Bloodline was not welcomed by the members and a match between Cena and Solo Sikoa was made official for Crown Jewel. </p><p><br></p><h2 id="wwe-crown-jewel-2">WWE Crown Jewel 2023 Date and Time </h2><p><br></p><p>The 2023 edition of Crown Jewel will take place live from the Mohammad Abdu Arena in Riyadh, Saudi Arabia. It will be held on the 4th of November and will follow the new trend of WWE organizing Premium Live Events on Saturdays. </p><p><br></p><p>The possible start timings of the event in various countries could be as follows:</p><ul><li>12 PM - United States, Eastern</li><li>9 AM - United Stats, Pacific</li><li>5 PM - United Kingdom</li><li>10:30 PM - India</li><li>8 PM - Saudi Arabia (AST)</li><li>2 AM, 28 May - Japan</li></ul><p><br></p><p><strong>Also Read: </strong><a href="/wwe/wwe-ppv-calendar">What is the Next WWE Pay-per-view?</a></p><p><br></p><h2 id="wwe-crown-jewel-3">WWE Crown Jewel 2023 Stadium: Mohammad Abdu Arena, Riyadh</h2><p><br></p><p>Mohammad Abdu Arena or <em>Artist of the Arabs Mohammad Abdu Stage </em>is a multipurpose arena in the state of Riyadh, Saudi Arabia. It is named after Saudi singer Mohammad Abdu Othman. It was opened in October 2019, and the second edition of Crown Jewel was held there on October 31 that year. The stadium has a total seating capacity of around 22000 fans. </p><p><br></p><h2 id="wwe-crown-jewel-4">Where to watch WWE Crown Jewel 2023?</h2><p><br></p><figure class="image" contenteditable="false"><noscript><img class="sk-app-thumbnail" alt="" src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/07/PeacockTV.jpg"></noscript><img class="lazy-img" width="1070" height="602" data-img="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/07/PeacockTV.jpg" alt data-img-low="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/07/PeacockTV.jpg" src="data:image/svg+xml,&lt;svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201070%20602%22&gt;&lt;/svg&gt;"><figcaption>Image courtesy - The official Peacock.com</figcaption></figure><p><br><br></p><p><br>For the fans of WWE in the USA any PPV event is not available on the WWE Network as the service has stopped in the country since 2021. As Crown Jewel is also a Premium Live event, WWE Network is not a choice for viewers in the USA. Fans can tune in to Peacock TV to stream the superstars taking on each other in Crown Jewel. </p><p><br></p><p>Elsewhere, the event has been streaming on PPV and on WWE Network since 2015 and will continue to do so. So, fans can watch Crown Jewel 2023 via WWE Network in most countries. Crown Jewel 2023 is the first edition in the event's chronology to stream on Binge in Australia. Indian fans can stream the event on Sony Sports Network or on the SonyLIV app.</p><p><br></p><h2 id="wwe-crown-jewel-7">WWE Crown Jewel 2022 Results</h2><p>Here is the match card of this year's Crown Jewel pay-per-view:</p><p><br></p><table><tbody><tr><td data-row="row-fx8f"><strong>Stipulations </strong></td><td data-row="row-fx8f"><strong>Results</strong></td></tr><tr><td data-row="row-7pv7">Undisputed WWE Universal Championship Match</td><td data-row="row-7pv7">Roman Reigns (c) defeated Logan Paul</td></tr><tr><td>Singles Match</td><td>Brock Lesnar defeated Bobby Lashley</td></tr><tr><td>Six-Man Tag Team Match</td><td>The Judgement Day defeated The O.C</td></tr><tr><td>Singles Match</td><td>Braun Strowman defeated Omos</td></tr><tr><td>Steel Cage Match</td><td>Drew McIntyre defeated Karrion Kross</td></tr><tr><td>Last Man Standing Match for RAW Women's Championship</td><td>Bianca Belair (c) defeated Bayley</td></tr><tr><td>Women's Tag Team Championship Match</td><td>Damage Control (c) defeated Alexa Bliss and Asuka</td></tr><tr><td>Undisputed Tag Team Championship Match</td><td>The Usos (c) defeated The Brawling Brutes</td></tr></tbody></table><p><br></p><h2 id="wwe-crown-jewel-8">Past Crown Jewel Events</h2><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 32.1353%; text-align: center;"><strong>Date</strong></td><td style="width: 32.1353%; text-align: center;"><strong>Venue</strong></td><td style="width: 32.1379%; text-align: center;"><strong>Main Event</strong></td></tr><tr><td style="width: 32.1353%;">November 2, 2018 </td><td style="width: 32.1353%;">King Saud University Stadium </td><td style="width: 32.1379%;">D-Generation X (Shawn Michaels and Triple H) vs. the Brothers of Destruction (Kane and The Undertaker) </td></tr><tr><td style="width: 32.1353%;">October 31, 2019 </td><td style="width: 32.1353%;">King Fahd International Stadium </td><td style="width: 32.1379%;">Seth Rollins (c) vs. "The Fiend" Bray Wyatt - Falls Count Anywhere match</td></tr><tr><td style="width: 32.1353%;">October 21, 2021 </td><td style="width: 32.1353%;">Mohammed Abdu Arena </td><td style="width: 32.1379%;">Roman Reigns (c) vs. Brock Lesnar</td></tr><tr><td style="width: 32.1353%;">November 5, 2022 </td><td style="width: 32.1353%;">Mrsool Park </td><td style="width: 32.1379%;">Roman Reigns (c) vs. Logan Paul</td></tr><tr><td style="width: 32.1353%;">November 4, 2023 </td><td style="width: 32.1353%;">Mohammed Abdu Arena </td><td style="width: 32.1379%;"><em>To be announced</em></td></tr></tbody></table><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>
</div>
<div class="content-overlay-area">
<div class="content-overlay "></div>
<div class="view-toggle-container ">
<button class="view-toggle-content-btn">
<span>Read <span class="view-toggle-text">More</span></span>
<img width="6" height="10" loading="lazy" alt="chevron-icon" src="//staticg.sportskeeda.com/skm/assets/live-blog/arrow-icon.svg" />
</button>
</div>
</div>
</div>
<script>
(function() {
var shouldCollapseContent = "false";
var nextToggleState = shouldCollapseContent ? "more" : "less";
var container = $(".page-seo-content");
var contentContainer = container.querySelector(".cms-content");
var contentOverlay = container.querySelector(".content-overlay");
var toggleContainer = container.querySelector(".view-toggle-container");
var toggleButton = container.querySelector(".view-toggle-content-btn");
var toggleButtonText = toggleButton.querySelector(".view-toggle-text");
function toggleContentHeight() {
if (nextToggleState == "more") {
removeClass(contentContainer, "collapsed");
nextToggleState = "less";
addClass(toggleContainer, "expanded");
toggleButtonText.innerText = "Less";
addClass(contentOverlay, "hidden");
} else {
addClass(contentContainer, "collapsed");
nextToggleState = "more";
removeClass(toggleContainer, "expanded");
toggleButtonText.innerText = "More";
removeClass(contentOverlay, "hidden");
}
}
window.addEventListener("DOMContentLoaded", function() {
if (!contentContainer) return;
toggleButton.addEventListener("click", toggleContentHeight);
trackImpressionGAEventWhenInViewport({
element: contentContainer,
identifier: "widget_page_seo_content",
eventName: "TAX_SEO_CONTENT_IMPRESSION"
});
});
})();
</script>
</div>
</div>
</section>
<div class="section-separator"></div>
<section class="faq-section">
<div class="panel">
<header class="panel-header">
<h2 class="panel-heading">FAQs</h2>
</header>
<div class="panel-body no-padding-d">
<style>
.faq-container {
margin: 17px 19px;
display: flex;
flex-direction: column;
gap: 12px;
}
.faq-container .faq {
border: 1px solid #E9E9E9;
border-radius: 4px;
}
.faq-container .faq-question {
display: flex;
gap: 10px;
justify-content: space-between;
text-align: center;
align-items: center;
}
.faq-container .faq-question {
background: #FFFFFF;
color: #2D2D2D;
cursor: pointer;
padding: 18px;
width: 100%;
border: none;
text-align: left;
outline: none;
font-weight: 600;
font-size: 16px;
line-height: 19.2px;
border-bottom: 1px solid #E9E9E9;
}
.faq-container .faq-answer {
padding-top: 8px;
display: none;
overflow: hidden;
color: #666666;
background: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: left;
}
.faq-container .faq-answer p {
font-weight: 400;
font-size: 16px !important;
line-height: 24px;
color: #666666;
padding: 8px 20px 12px;
}
.faq-container .faq-question span {
font-size: 30px;
line-height: 120%;
}
@media (max-width: 768px) {
.faq-container {
margin: 0;
}
.faq-container .faq-question {
font-weight: 600;
font-size: 12px;
line-height: 150%;
}
.faq-container .faq-answer {
font-weight: 400;
font-size: 12px;
line-height: 150%;
}
.faq-container .faq-answer p {
font-weight: 400;
font-size: 12px !important;
line-height: 18px;
color: #666666
}
.faq-container .faq-question span {
font-size: 24px;
line-height: 120%;
}
}
</style>
<div class="faq-container">
<div class="faq">
<button type="button" class="faq-question">
When is Crown Jewel 2023?
<span class="question-open hidden"> - </span>
<span class="question-close"> + </span>
</button>
<div class="faq-answer">
<p>Crown Jewel will take place on Saturday, November 4, 2023.</p>
</div>
</div>
<div class="faq">
<button type="button" class="faq-question">
Where is Crown Jewel 2023?
<span class="question-open hidden"> - </span>
<span class="question-close"> + </span>
</button>
<div class="faq-answer">
<p>Crown Jewel 2023 will take place live from Mohammad Abdu Arena in Riyadh, Saudi Arabia.</p>
</div>
</div>
<div class="faq">
<button type="button" class="faq-question">
Will Roman Reigns compete at Crown Jewel?
<span class="question-open hidden"> - </span>
<span class="question-close"> + </span>
</button>
<div class="faq-answer">
<p>Roman Reigns defended his Undisputed WWE Universal Championship against LA Knight at Crown Jewel.</p>
</div>
</div>
<div class="faq">
<button type="button" class="faq-question">
Will John Cena compete at Crown Jewel?
<span class="question-open hidden"> - </span>
<span class="question-close"> + </span>
</button>
<div class="faq-answer">
<p>John Cena lost to Solo Sikoa at Crown Jewel 2023.</p>
</div>
</div>
<div class="faq">
<button type="button" class="faq-question">
How many WWE Crown Jewels are there?
<span class="question-open hidden"> - </span>
<span class="question-close"> + </span>
</button>
<div class="faq-answer">
<p>The 2023 edition of Crown Jewel will be the fifth in Event's history after 2018, 2019, 2021 and 2022.</p>
</div>
</div>
</div>
<script>
(function() {
var questions = $all(".faq-container .faq-question");
for (var i = 0; i < questions.length; i++) {
questions[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.display === "block") {
content.style.display = "none";
} else {
content.style.display = "block";
}
for (var j = 0; j < this.childNodes.length; j++) {
if (this.childNodes[j].tagName && this.childNodes[j].tagName.toLowerCase() === "span") {
this.childNodes[j].classList.toggle("hidden");
}
}
});
}
})();
</script>
</div>
</div>
</section>
<div class="section-separator"></div>
<section class="page-meta-info-section">
<style>
.page-meta-info {
display: flex;
gap: 6px;
align-items: center;
justify-content: center;
margin: 20px 0 10px;
}
.page-meta-info div {
text-align: left;
color: #666666;
font-weight: 400;
font-size: 16px;
line-height: 14px;
}
@media screen and (max-width: 768px) {
.page-meta-info {
margin: 10px 16px;
}
.page-meta-info div {
font-size: 12px;
}
}
</style>
<div class="page-meta-info">
<div class="meta-author">By <a href="/profile/sportskeeda" class="sk-red-color">SK Desk</a></div>
<div class="meta-separator"> &#8226;</div>
<div class="meta-modified-date">
Last Modified Nov 5, 2023 01:49 IST
</div>
</div>
</section>
</div>
</div>
</section>
</main>
<script>
/*
* Date Format 1.2.3
* (c) 2007-2009 Steven Levithan <stevenlevithan.com>
* MIT license
*
* Includes enhancements by Scott Trenda <scott.trenda.net>
* and Kris Kowal <cixar.com/~kris.kowal/>
*
* Accepts a date, a mask, or a date and a mask.
* Returns a formatted version of the given date.
* The date defaults to the current date/time.
* The mask defaults to dateFormat.masks.default.
*/
(function() {
var dateFormat = function () {
var	token = /d{1,4}|D{3,4}|m{1,4}|M{3,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
timezoneClip = /[^-+\dA-Z]/g,
pad = function (val, len) {
val = String(val);
len = len || 2;
while (val.length < len) val = "0" + val;
return val;
};
// Regexes and supporting functions are cached through closure
return function (date, mask, utc) {
var dF = dateFormat;
// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
mask = date;
date = undefined;
}
// Passing date through Date applies Date.parse, if necessary
date = date ? new Date(date) : new Date;
if (isNaN(date)) throw SyntaxError("invalid date");
mask = String(dF.masks[mask] || mask || dF.masks["default"]);
// Allow setting the utc argument via the mask
if (mask.slice(0, 4) == "UTC:") {
mask = mask.slice(4);
utc = true;
}
var	_ = utc ? "getUTC" : "get",
d = date[_ + "Date"](),
D = date[_ + "Day"](),
m = date[_ + "Month"](),
y = date[_ + "FullYear"](),
H = date[_ + "Hours"](),
M = date[_ + "Minutes"](),
s = date[_ + "Seconds"](),
L = date[_ + "Milliseconds"](),
o = utc ? 0 : date.getTimezoneOffset(),
flags = {
d:    d,
dd:   pad(d),
ddd:  dF.i18n.dayNames[D],
DDD:  (dF.i18n.dayNames[D]).toUpperCase(),
dddd: dF.i18n.dayNames[D + 7],
DDDD: (dF.i18n.dayNames[D + 7]).toUpperCase(),
m:    m + 1,
mm:   pad(m + 1),
mmm:  dF.i18n.monthNames[m],
MMM:  (dF.i18n.monthNames[m]).toUpperCase(),
mmmm: dF.i18n.monthNames[m + 12],
MMMM: (dF.i18n.monthNames[m + 12]).toUpperCase(),
yy:   String(y).slice(2),
yyyy: y,
h:    H % 12 || 12,
hh:   pad(H % 12 || 12),
H:    H,
HH:   pad(H),
M:    M,
MM:   pad(M),
s:    s,
ss:   pad(s),
l:    pad(L, 3),
L:    pad(L > 99 ? Math.round(L / 10) : L),
t:    H < 12 ? "a"  : "p",
tt:   H < 12 ? "am" : "pm",
T:    H < 12 ? "A"  : "P",
TT:   H < 12 ? "AM" : "PM",
Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
};
return mask.replace(token, function ($0) {
return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
});
};
}();
// Some common format strings
dateFormat.masks = {
"default":      "ddd mmm dd yyyy HH:MM:ss",
shortDate:      "m/d/yy",
mediumDate:     "mmm d, yyyy",
longDate:       "mmmm d, yyyy",
fullDate:       "dddd, mmmm d, yyyy",
shortTime:      "h:MM TT",
mediumTime:     "h:MM:ss TT",
longTime:       "h:MM:ss TT Z",
isoDate:        "yyyy-mm-dd",
isoTime:        "HH:MM:ss",
isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
// Internationalization strings
dateFormat.i18n = {
dayNames: [
"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
],
monthNames: [
"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
};
// For convenience...
Date.prototype.format = function (mask, utc) {
return dateFormat(this, mask, utc);
};
})();
</script>
<script>
(function() {
var carouselContainer = "";
var carouselItemSelector = "";
if ($id("keeda_cricket_widget")) {
carouselContainer = $id("keeda_cricket_widget");
carouselItemSelector = ".keeda_cricket_single_match";
} else if ($id("keeda_football_widget")) {
carouselContainer = $id("keeda_football_widget");
carouselItemSelector = ".keeda_football_single_match";
} else if ($id("keeda_kabaddi_widget")) {
carouselContainer = $id("keeda_kabaddi_widget");
carouselItemSelector = ".keeda_cricket_single_match";
}
if (!carouselItemSelector) {
return;
}
var allScoreCarouselItems = $all(carouselItemSelector);
function init() {
allScoreCarouselItems.forEach(function(item) {
item.addEventListener("click", function(e) {
var closestAnchor = e.target.closest("a");
if (closestAnchor) {
var destinationUrl = closestAnchor.getAttribute("href");
trackGAEvent("SCORE_CAROUSEL_ITEM_CLICK", {
destination_url: destinationUrl
});
}
})
});
trackImpressionGAEventWhenInViewport({
element: carouselContainer,
identifier: "widget_sport_carousel",
eventName: "SCORE_CAROUSEL_IMPRESSION"
});
}
window.addEventListener("DOMContentLoaded", function() {
init();
});
})();
(function() {
var allViewMoreCtas = $all(".view-more-cta");
allViewMoreCtas.forEach(function(cta) {
cta.addEventListener("click", function(e) {
var clickedItem = e.target.closest("a.view-more-cta");
var section = clickedItem.dataset["section"];
var destinationUrl = clickedItem.getAttribute("href");
trackGAEvent("VIEW_MORE_CTA_CLICK", {
section: section,
destination_url: destinationUrl
});
})
});
})();
(function() {
var utcToLocalTimeCandidates = $all(".convert-utc-to-local");
function getFormattedDate(dateInstance, format) {
if (format && typeof Date.prototype.format == "function") {
return dateInstance.format(format);
}
return dateInstance.toLocaleDateString();
}
function init() {
utcToLocalTimeCandidates.forEach(function(dateItem) {
try {
var utcDateTime = dateItem.dataset["utcDateTime"];
var format = dateItem.dataset["format"];
var withUserFriendlyDay = dateItem.dataset["userFriendlyDay"] == "true";
if (utcDateTime) {
var localDate = new Date(utcDateTime);
var dateText = "";
if (withUserFriendlyDay) {
var toDateFormat = function(date) {
return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
}
var localDateFormatted = toDateFormat(localDate);
var today = new Date();
if (toDateFormat(today) == localDateFormatted) {
dateText = "Today";
} else {
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
if (toDateFormat(tomorrow) == localDateFormatted) {
dateText = "Tomorrow";
} else {
dateText = getFormattedDate(localDate, format);
}
}
} else {
dateText = getFormattedDate(localDate, format);
}
dateItem.innerText = dateText;
}
} catch (err) {
console.error(err);
}
});
}
init();
})();
function NTernary(args) {
for (var i = 0; i < args.length; i++) {
if (args[i]) {
return args[i];
}
}
return false;
}
(function() {
var imageURLCache = {};
function loadImageIfExists(url, imgParams) {
var assetURL = [url, imgParams].join("");
return new Promise(function(resolve, reject) {
var img = new Image();
img.src = assetURL;
img.onload = function() {
resolve(img);
};
img.onerror = function() {
resolve(false);
}
});
}
async function initImg(imgElement) {
var fallbacks = imgElement.dataset["imgFallbacks"];
if (!fallbacks) return;
var imgParams = imgElement.dataset["imgParams"];
var urlsToTry = fallbacks.split("|:|:|");
for await (var url of urlsToTry) {
var urlWithParams = [url, imgParams].join("");
var cachedURL = imageURLCache[urlWithParams];
if (cachedURL) {
imgElement.setAttribute("src", cachedURL);
break;
}
var imageTag = await loadImageIfExists(url, imgParams);
if (imageTag) {
var attributes = imgElement.getAttributeNames();
for (var i = 0; i < attributes.length; i++) {
if (attributes[i] == "src") {
continue;
}
imageTag.setAttribute(attributes[i], imgElement.getAttribute(attributes[i]));
}
imageTag.removeAttribute("data-img-fallbacks");
imgElement.replaceWith(imageTag);
imageURLCache[urlWithParams] = imageTag.getAttribute("src");
break;
}
}
}
function init() {
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (!entry.isIntersecting) return;
if (!entry.target) return;
removeClass(entry.target, "img-with-fallbacks");
observer.unobserve(entry.target);
initImg(entry.target);
});
}, {
threshold: 1,
rootMargin: "25% 0px 25% 0px",
});
$all(".img-with-fallbacks").forEach(function(imgElement) {
observer.observe(imgElement);
});
}
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("custom:sk:utils:lazyLoadAssetImages", init);
})();
(function() {
var playerBasePath = "//staticg.sportskeeda.com/skm/assets/player-images";
var teamBasePath = "//staticg.sportskeeda.com/skm/assets/team-logos";
function generatePathResolver(taxType, assetBasePath) {
return function(taxSlug, categorySlug, fallbackURLs, params) {
var urlsToTry = fallbackURLs.filter(Boolean);
var shouldUseAssetImage = false;
if (taxSlug) {
if (taxType == "player") {
if (["nfl"].includes(categorySlug)) {
shouldUseAssetImage = true;
}
} else if (taxType == "team") {
shouldUseAssetImage = true;
}
if (shouldUseAssetImage) {
urlsToTry.unshift([assetBasePath, categorySlug, [taxSlug, "png"].join(".")].join("/"));
}
}
urlsToTry = urlsToTry.map(function(url) {
if (params) {
url = url + params;
}
return url;
});
return urlsToTry.join("|:|:|");
}
}
window.generatePlayerAssetImage = generatePathResolver("player", playerBasePath);
window.generateTeamAssetImage = generatePathResolver("team", teamBasePath);
})();
</script>
<div class="sk-ads-taboola-container sk-ads-taboola-eventpage">
<script>
var taboolaScriptLoaded = false;
window._taboola = window._taboola || [];
_taboola.push({ article: 'auto' });
(function() {
var userCountry = getCookie("country_code");
var IS_GDPR_APPLICABLE = getCookie(COOKIE_GDPR) == "true";
if (!["IN"].includes(userCountry)) {
if (window.performance && typeof window.performance.mark == 'function') {
window.performance.mark('tbl_ic');
}
var scriptInput = {
src: "https://cdn.taboola.com/libtrc/sportskeedaindia/loader.js",
loadWithDefer: true,
onUserInteraction: true,
attributes: [{
key: "id",
value: "tb_loader_script"
}]
};
function loadTaboolaScript() {
if (!taboolaScriptLoaded) {
taboolaScriptLoaded = true;
asyncScriptLoader(scriptInput);
}
}
loadTaboolaScript();
}
})();
</script>
<style>
#taboola-below-article-thumbnails {
padding: 0;
margin: 0;
}
</style>
<div id="taboola-below-article-thumbnails"></div>
<script>
_taboola.push({
mode: "thumbnails-a",
container: "taboola-below-article-thumbnails",
placement: "Below Article Thumbnails",
target_type: "mix"
});
</script>
</div>
<script>
window._taboola = window._taboola || [];
_taboola.push({ flush: true });
</script>
</div>
</section>
</div>

<div id="div-gpt-ad-1423053234910-0" style="width:1px; height:1px;">
<script type="text/javascript">
if(typeof displayAdSlot !== 'undefined') {
displayAdSlot('div-gpt-ad-1423053234910-0');
}
</script>
</div>
<section class="footer-section">
<style>
#footer-empty-div {
display: none;
}
.footer-container {
background: #080A3C;
clear: both;
}
.footer {
font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif;
height: fit-content;
background: #080A3C;
padding: 10px 0px;
flex-direction: row;
flex-wrap: wrap;
margin: 0 auto;
width: 1110px;
display: flex;
justify-content: space-between;
}
.quick-links-container {
border-top: 1px solid #242658;
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-weight: 400;
color: #FFF;
font-size: 14px;
justify-content: flex-start;
height: 50%;
padding-top: 12px;
}
.quick-link {
width: calc(100%/2);
padding-bottom: 25px;
text-decoration: none !important;
color: unset !important;
}
.footer-right {
width: 360px;
justify-content: center;
}
.social-media-links {
display: flex;
flex-direction: row;
gap: 16px;
flex-wrap: wrap;
width: 360px;
justify-content: flex-start;
padding-top: 10px;
padding-bottom: 10px;
}
.social-media-links img {
width: 32px !important;
height: 32px; !important;
}
.download-app .heading {
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
margin: 12px 0;
}
.download-app .app-links {
border-top: 1px solid #242658;
padding: 12px 0;
display: flex;
gap: 12px;
flex-direction: row;
flex-wrap: wrap;
}
.app-links img {
height: 32px !important;
width: 109px !important;
}
.terms-conditions {
color: #999999;
font-weight: 400;
font-size: 12px;
line-height: 140%;
padding: 14px 0;
}
.terms-conditions a {
color: #D32F2F !important;
}
.copyright-footer {
display: flex;
align-items: center;
justify-content: center;
height: 40px;
color: #ffffff;
background: #2D2D2D;
font-size: 12px;
font-weight: 400;
}
.download-app{
padding-top: 5px;
}
.trending-topics-container {
font-weight: 400;
color: #FFF;
font-size: 12px;
height: 50%;
width: 65%;
}
.trending-topics-holder {
border-top: 1px solid #242658;
padding-top: 12px;
display: flex;
flex-wrap: wrap;
}
.footer .heading {
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
margin: 12px 0;
}
.footer-bullet{
color: rgb(60, 255, 0);
width: calc(100%/3);
padding-bottom: 25px;
display: flex;
gap: 3px;
align-items: center;
padding-right: 20px;
font-weight: 900;
}
.footer-bullet .trending-topic{
font-weight: 400;
}
.trending-topic {
text-decoration: none !important;
color: white !important;
line-height: 18px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
}
</style>
<div class="footer-container">
<div class="footer">
<div class="trending-topics-container">
<div class="heading">Trending Topics</div>
<div class="trending-topics-holder">
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/florida-state-football-transfer-portal-tracker-2023-24-list-seminoles-players-who-ve-entered-transfer-portal">FSU Transfer Portal</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/live/ipl-auction-2024-live-updates-sold-players-list-csk-dc-kkr-mi-pbks-rr-rcb-srh-gt-lsg-19-dec">IPL Auction 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/mock-draft-simulator">Mock Draft Simulator</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/schedule">NFL Schedule 2023</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/lucknow-super-giants-team-players-list-squad">LSG Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/royal-challengers-bangalore-team-players-list-squad">RCB Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/kolkata-knight-riders-team-players-list-squad">KKR Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/sunrisers-hyderabad-team-players-list-squad">SRH Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/punjab-kings-team-players-list-squad">PBKS 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/mumbai-indians-team-players-list-squad">MI Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/gujarat-titans-team-players-list-squad">GT Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/csk-team-2020-players-list">CSK Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/delhi-capitals-team-players-list-squad">DC Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/cricket/rajasthan-royals-team-players-list-squad">RR Squad 2024</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/mmo/wow-classic-2024-roadmap-revealed-cataclysm-release-window-new-raids-self-found-mode">WOW Classic Roadmap</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/college-football-bowl-projections-2023-24-can-caleb-williams-usc-eye-national-championship-week-12-loss">Bowl Projection</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/is-oregon-bowl-eligible-ducks-playoff-chances-2023-explored">Ole Miss Bowl</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/deion-sanders-colorado-contract-how-much-coach-prime-make-buffaloes-salary-bonuses">Coach Prime Contract</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/news-denver-broncos-schedule-2023-dates-time-tv-schedule-opponents">Broncos Schedule</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/nfl-wordle-player-guessing-game">NFL Wordle</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/pop-culture/aquaman-lost-kingdom-review-a-rutted-plot-dazzling-visual-effects-character-dynamics">Aquaman 2 Review</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/fantasy-football-trade-analyzer">Trade Analyzer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/is-deion-sanders-coaching-son-exploring-coach-prime-s-football-stint-cfb-world">Deion Sanders Sons</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/who-should-i-start">Start/Sit Optimizer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/nfl-dfs-lineup-optimizer">DFS Lineup Optimizer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/go/icc-odi-world-cup/most-runs">Most Runs CWC 2023</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/pop-culture/the-young-restless-spoilers-major-plot-developments-next-week-november-13-november-17">Y&R Spoilers</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/esports/news-all-epic-games-store-holiday-2023-free-games-claim">Epic Games Free Game</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/gaming-tech/how-easily-recover-tiktok-account">Recover Tiktok Ac</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/esports/nba-2k24-season-3-patch-notes-all-major-changes-updates">NBA 2K24 Patch Notes</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/esports/steam-winter-sale-2023-end-date-time-best-deals">Steam Winter Sale</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/fantasy-football">Fantasy Football</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/pop-culture/rick-morty-season-7-episode-7-release-date-time-watch">Rick and Morty </a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/baseball/news-mlb-free-agency-tracker">2023 MLB Free Agency</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/gaming-tech/best-meta-quest-vr-black-friday-deals">Black Friday deals</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/news-byu-football-transfer-portal-tracker-2023-24-list-cougars-players-who-ve-entered-transfer-portal">BYU Transfer Portal</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/news-colorado-football-transfer-portal-tracker-2023-24-list-buff-players-who-ve-entered-transfer-portal">Colorado Transfer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/news-alabama-crimson-tide-transfer-portal-tracker-2023-24-list-players-who-ve-entered-transfer-portal">Alabama Transfer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/news-oregon-transfer-portal-tracker-2023-24-list-ducks-players-who-ve-entered-transfer-portal">Oregon Transfer</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/news-texas-longhorns-transfer-portal-tracker-2023-24-list-players-who-ve-entered-transfer-portal">Texas TransferPortal</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/georgia-football-transfer-portal-tracker-2023-24-list-bulldogs-players-who-ve-entered-transfer-portal">UGA Transfer Portal</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/college-football/michigan-national-championship-parade-2024-details-date-time-location">Michigan Parade</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/nfl/nfl-playoff-predictor">Playoff Predictor</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/roblox-news/roblox-game-codes-list">Roblox Game Codes</a></span>
<span class="footer-bullet">&#8226; <a class="trending-topic" href="https://www.sportskeeda.com/roblox-news/blox-fruits-codes">Blox Fruits Codes</a></span>
</div>
</div>
<div class="footer-right">
<div class="important-links">
<div class="heading">Important Links</div>
<div class="quick-links-container">
<a class="quick-link" href="/about-us">About Us</a>
<a class="quick-link" href="/register-as-an-affiliate">Affiliate Program</a>
<a class="quick-link" href="/editorialteam">Editoral Standards</a>
<a class="quick-link" href="/careers">Careers</a>
<a class="quick-link" href="/fact-check">Fact Check</a>
<a class="quick-link" href="/contact-us">Contact Us</a>
<a class="quick-link" href="/policies">Policies</a>
<a class="quick-link" href="/ad-portal">Advertise With Us</a>
</div>
</div>
<div class="social-media-links">
<a aria-label="SK Facebook Page" href="https://www.facebook.com/Sportskeeda/"><img src="//staticg.sportskeeda.com/skm/assets/footer/facebook.svg" loading="lazy" height="32" width="32" alt="facebook icon"></a>
<a aria-label="SK Twitter Page" href="https://twitter.com/Sportskeeda"><img src="//staticg.sportskeeda.com/skm/assets/footer/twitter.svg" loading="lazy" height="32" width="32" alt="twitter icon"></a>
<a aria-label="SK Google News Page" href="https://news.google.com/publications/CAAqBggKMKSlJzCz-QU?hl=en-IN&gl=IN&ceid=IN%3Aen"><img src="//staticg.sportskeeda.com/skm/assets/footer/google-publication.svg" loading="lazy" height="32" width="32" alt="google publication icon"></a>
<a aria-label="SK Snapchat Page" href="https://www.snapchat.com/p/30182bc7-f41c-4620-b974-a8952717421b/375173924925440"><img src="//staticg.sportskeeda.com/skm/assets/footer/snapchat.svg" loading="lazy" height="32" width="32" alt="snapchat icon"></a>
<a aria-label="SK Youtube Page" href="https://www.youtube.com/channel/UC2D3QFry7EPoy2ELTCSaJ7Q"><img src="//staticg.sportskeeda.com/skm/assets/footer/youtube.svg" loading="lazy" height="32" width="32" alt="youtube icon"></a>
<a aria-label="SK Instagram Page" href="https://www.instagram.com/sportskeeda/?hl=en"><img src="//staticg.sportskeeda.com/skm/assets/footer/instagram.svg" loading="lazy" height="32" width="32" alt="instagram icon"></a>
</div>
<div class="download-app">
<div class="heading">Download App</div>
<div class="app-links">
<a aria-label="SK Google PlayStore Link" href="https://play.google.com/store/apps/details?id=cricket.live.line&referrer=utm_source%3Dwebsite%26utm_medium%3Dskweb"><img src="//staticg.sportskeeda.com/skm/assets/playstore-icon.png" loading="lazy" height="32" width="109" alt="playstore icon"></a>
<a aria-label="SK Apple Store Link" href="https://apps.apple.com/in/app/sportskeeda-wwe-cricket/id1462625228"><img src="//staticg.sportskeeda.com/skm/assets/appstore-icon.png" loading="lazy" height="32" width="109" alt="appstore icon"></a>
</div>
</div>
<div class="terms-conditions">
Sportskeeda's <a href="/terms-of-use">Terms</a> and <a href="/privacy-policy">Privacy Policy</a>
</div>
</div>
</div>
<div class="copyright-footer">
Copyright @ 2024 Sportskeeda
</div>
</div>
</section>
<section class="bottom-fragments-container">
</section>

<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZMZ8RP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

<div class="keeda_modal" style="display: none;" onclick="modalPopup.dismissPopup(event)">
<div class="keeda_modal_content modal_small">
<div class="keeda_modal_header">
<span class="keeda_modal_header_text"></span>
<div class="actions">
<span class="keeda_modal_header_secondary_action"></span>
<span class="keeda_modal_close" onclick="modalPopup.close()">&times;</span>
</div>
</div>
<div class="keeda_modal_content_text">
</div>
</div>
</div>
<script defer src="/js/production/side-menu-bundle-ebade1a047.js"></script>
<link rel="stylesheet" href="/css/production/side-menu-bundle-bfa3fde985.css" media="print" onload="this.media='all'">
<div class="mobile-overlay">
</div>
<div class="mobile-overlay-profile-menu">
</div>
<div class="keeda-side-menu Eventpage hidden" id="keeda-side-menu">
<div class="favorites-select-overlay">
</div>
<section class="favorites-search">
<div class="search-container">
<label for="search-input" class="title">🔍 Search</label>
<input id="search-input" onfocusout="triggerSidebarSearchFocusOutGAEvent(this)" onfocus="onSideMenuSearchFocus()" onkeyup="onSearchTrack(this)" class="keeda-search-input" type="text" placeholder="Event, Team, Player, Sport" />
<div class="search-dismiss">
</div>
</div>
<div class="search-results">
</div>
<div class="no-result-message hidden">
No Results Found
</div>
</section>
<template id="favorites-choice-block">
<div class="favorites-choice-block">
<a class="favorites-choice-name"></a>
</div>
</template>
<a id="app-download-hamburger" class="sidebar-app-download" href="https://play.google.com/store/apps/details?id=cricket.live.line&referrer=utm_source%3Dwebsite%26utm_medium%3Dskweb" onclick="gtag('event', 'click', { 'event_label': 'side-menu', 'event_category': 'app-download', 'transport_type': 'beacon'})">
<img src="//staticg.sportskeeda.com/assets/app/app-download-anim.gif?h=44" width="50" height="50" alt="App download animated image" loading="lazy">
<span class="span" style>Get the free App now</span>
</a>
<a id="advertise-sk-hamburger" class="sidebar-app-download hidden" href="https://www.sportskeeda.com/ad-portal/us" onclick="gtag('event', 'click', { 'event_label': 'side-menu', 'event_category': 'advertise-on-sk', 'transport_type': 'beacon'})">
<img src="//staticg.sportskeeda.com/assets/loud_speaker.svg" width="50" height="50" alt="Advertise on sk animated image" loading="lazy">
<span class="span" style>Advertise On SK</span>
</a>
<div class="sidebar-separator"></div>
<section class="popular active ">
<div class="fav-header popular">
<span class="title">🔥 Popular</span>
</div>
<div class="list">
</div>
</section>
<div class="sidebar-separator "></div>
<section class="global-menu collapsed ">
<div class="fav-header" id="sport-expansion-container">
<div class="title nav-expand" id="sport-expander"><span class="title">🏃🏻‍♀️ Sports (30+)</span></div>
</div>
<div class="list" id="deepSportMenuHolder">
</div>
</section>
<section class="favorite-choices ">
<div class="list">
</div>
</section>
<div class="sidebar-separator"></div>
<section class="links active">
<div class="fav-header links">
<span class="title">🔗 LINKS</span>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="About Us" href="/about-us">About Us</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Write For US" href="/creator/getting-started">Write For Us</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Sportskeeda Policies" href="/policies">Policies</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Sportskeeda Grievance Redressal Page" href="/grievance-redressal">Grievance Redressal</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Editorial Standards" href="/editorialteam">Editorial Standards</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Journalism Awards" href="/writer-awards">Journalism Awards</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Fact Check" href="/fact-check">Fact Check</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Sportskeeda Affiliate Program" href="/register-as-an-affiliate">Affiliate Program</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Sportskeeda Careers Page" href="/careers" target="_blank" rel="noopener noreferrer">Careers</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Sportskeeda CSR Page" href="/csr" target="_blank" rel="noopener noreferrer">CSR</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Privacy Policy" href="/privacy-policy">Privacy Policy</a>
</div>
<div class="favorites-choice-block">
<a class="favorites-choice-name" title="Contact Sportskeeda" href="/contact">Contact Us</a>
</div>
</section>
<div class="sidebar-separator"></div>
<section class="links active lang-section">
<div class="fav-header language links" onclick="toggleLangContainer()">
<span class="title">Edition: </span>
</div>
<div class="lang-container">
<div class="language-choice-block language-choice-name en">
<a title="English" href="https://www.sportskeeda.com">English</a>
</div>
<div class="language-choice-block language-choice-name hi">
<a title="हिन्दी" href="https://hindi.sportskeeda.com">हिन्दी</a>
</div>
</div>
<div id="adDebugger" onclick="loadAdDebugConsole()"></div>
</section>
<div class="padder">
</div>
</div>
<template id="favorites-block">
<div class="favorite-block">
<a class="favorite-link"></a>
<span class="favorite-name"></span>
<span class="favorite-remove"></span>
</div>
</template>
<script>
var countryCodeCookie = getCookie("country_code");
if (countryCodeCookie == "US" || countryCodeCookie == "CA") {
removeClass($("#advertise-sk-hamburger"), "hidden");
addClass($("#app-download-hamburger"), "hidden");
}
function onSideMenuSearchFocus() {
trackGAEvent("SEARCH_BUTTON_CLICK", {
"position": "hamburger",
});
}
function onSideMenuSearchValueChanged(input) {
trackGAEvent("SEARCH_ACTION", {
"position": "hamburger",
"query": input.value,
});
}
const onSearchTrack = debounce(function (input) {
onSideMenuSearchValueChanged(input);
}, 500);
</script>
<script defer src="/js/production/profile-widget-bundle-ce82a800a5.js"></script>
<script defer src="/js/production/user-notifications/notifications-bundle-716808c7d0.js"></script>
<link rel="stylesheet" href="/css/production/user-notifications/notifications-bundle-279f21bbb5.css" media="print" onload="this.media='all'">
<script defer src="/js/production/affiliate-bundle_4f8da0.js"></script>
<script defer src="/js/production/track-taxonomy-read-bundle_b2f53d.js"></script>
<script>
(function() {
function initLazyLoadImages() {
if (typeof lazyLoadAll == "function") {
lazyLoadAll();
}
var imagesToLazyLoad = $all("img.lazy-img");
imagesToLazyLoad.forEach(function(image) {
if (isScrolledIntoView(image)) {
lazyLoadImage(image);
}
});
}
function lazyLoadImage(image) {
if (!!image.dataset.srcset) {
image.setAttribute("srcset", image.dataset.srcset)
}
var img = image.dataset["img"] || image.dataset["imgLow"];
image.src = img;
removeClass(image, "lazy-img");
}
window.addEventListener("DOMContentLoaded", function() {
setTimeout(function() {
initLazyLoadImages();
}, 500);
document.addEventListener("scroll", initLazyLoadImages, { passive: true });
document.addEventListener("mousemove", initLazyLoadImages, { passive: true });
document.addEventListener("touchmove", initLazyLoadImages, { passive: true });
$all(".feed-carousel-container .feed-carousel").forEach(function(carousel) {
carousel.addEventListener("scroll", initLazyLoadImages, { passive: true });
carousel.addEventListener("mousemove", initLazyLoadImages, { passive: true });
carousel.addEventListener("touchmove", initLazyLoadImages, { passive: true });
});
});
})();
</script>
<script>
(function() {
var body = $("body");
var hasTopHeader = $("section.top-header.masthead");
if (hasTopHeader) {
addClass(body, "has-top-header");
}
var hasPrimaryNav = $("section.primary-nav");
if (hasPrimaryNav) {
addClass(body, "has-primary-nav");
}
})();
</script>
<style>
#credential_picker_container {
z-index: 99999 !important;
}
</style>
<script>
(function() {
var userCountry = getCookie("country_code");
var currentUserId = getCookie("fw_ID");
var pageType = "Eventpage";
var categorySlug = "wwe";
var allowedCategories = ["wwe","baseball","golf","tennis","mma","basketball","nfl","pop-culture","anime","esports"];
var googleScriptLoaded = false;
function loadGoogleAccountsScript() {
if (googleScriptLoaded) return;
googleScriptLoaded = true;
asyncScriptLoader({
src: "https://accounts.google.com/gsi/client",
loadWithDefer: true,
}).then(function() {
showGoogleLoginPrompt();
});
}
function showGoogleLoginPrompt() {
if (!google) return;
if (!google.accounts) return;
google.accounts.id.initialize({
client_id: "339348349975-lktt0ju2fota1bu04vb1trc99lch78cq.apps.googleusercontent.com",
cancel_on_tap_outside: false,
callback: onLoginSuccess,
prompt_parent_id: "root",
itp_support: true
});
google.accounts.id.prompt(onPopupDisplayed);
}
function onPopupDisplayed(oneTapPromptResponse) {
if (oneTapPromptResponse.isNotDisplayed()) {
var reason = oneTapPromptResponse.getNotDisplayedReason();
onLoginPopupNotShown({
"response_type": "not_displayed",
"reason": reason
});
} else if (oneTapPromptResponse.isSkippedMoment()) {
var reason = oneTapPromptResponse.getSkippedReason();
onLoginPopupNotShown({
"response_type": "skipped",
"reason": reason
});
} else if (oneTapPromptResponse.isDismissedMoment()) {
var reason = oneTapPromptResponse.getDismissedReason();
if (reason != "credential_returned") {
onLoginPopupNotShown({
"response_type": "dismissed",
"reason": reason
});
}
} else if (oneTapPromptResponse.isDisplayed()) {
trackGAEvent("GOOGLE_ONE_TAP_LOGIN_IMPRESSION");
}
}
function onLoginPopupNotShown(params) {
var eventParams = params || {};
console.info("Google One Tap Login Not shown because of -> ", params.reason);
trackGAEvent("GOOGLE_ONE_TAP_NOT_SHOWN", eventParams);
}
function onLoginSuccess(response) {
trackGAEvent("GOOGLE_ONE_TAP_LOGIN_CLICK", {
"login_select_by": response.select_by
});
window.location = "https://a-login.sportskeeda.com" + "/login/google-one-tap?user-details=" + response.credential + "&after-login=" + window.encodeURIComponent(window.location.href) + "&need-auth-status=1";
}
function init() {
if (currentUserId) return;
document.addEventListener("scroll", loadGoogleAccountsScript, { once: true, passive: true });
document.addEventListener("mousemove", loadGoogleAccountsScript, { once: true, passive: true });
document.addEventListener("touchmove", loadGoogleAccountsScript, { once: true, passive: true });
}
window.addEventListener("DOMContentLoaded", function() {
if (pageType == "Homepage") return;
if (userCountry == "US") {
init();
return;
}
if (allowedCategories.includes(categorySlug)) {
init();
}
});
})();
</script>
<script defer="true">
window.keedaPushQueue = window.keedaPushQueue || [];
function keedaPushDelegate(...args) {
window.keedaPushQueue.push(args);
}
(() => {
const userCountry = getCookie("country_code");
const currentPageUrl = window.location.href;
const currentPageType = String(pageType).toLowerCase();
const supportedCategories = [
"cricket",
"wwe",
"impact-wrestling",
"aew",
"nfl",
"college-football",
"basketball",
"baseball",
"mma",
"tennis",
"pop-culture",
"nascar",
"golf",
"esports",
"football",
"us-soccer",
"anime",
"minecraft",
"fortnite",
];
let shouldAllow = false;
if (currentPageUrl.includes("/admin/notification-center")) {
shouldAllow = true;
} else if (currentPageType) {
shouldAllow = true;
}
if (!shouldAllow) {
return;
}
if (!"serviceWorker" in navigator) {
return;
}
if (!"BroadcastChannel" in window) {
return;
}
function doLog(...args) {
console.info("[Keeda Push Notifications FE]", ...args);
}
asyncScriptLoader({
src: "/js/production/web-notifications/sdk/firebase/v2-1cdb218446.js",
onUserInteraction: true,
attributes: [{
key: "type",
value: "module"
}]
});
(() => {
function addToSubscriptionList(list, prefix, value) {
if (!value) return list;
value = String(value).replaceAll("-", "_").toLowerCase();
const groupId = [prefix, value].join("_");
list.add(groupId);
return list;
}
try {
async function setupPushNotifications() {
const serviceWorkerVersion = "2023090703";
const swRegistration = await navigator.serviceWorker.register(
"/service-workers/firebase-v2?v=" + serviceWorkerVersion, {
scope: "/",
}
);
return {
vapidPublicKey: "BO0OLN9vT_j4T2ZRBcdtvO1rXKVtbDXWf7IQxQ9-dil9N0SQ0P24z-61qNyerPXO1FKqfsoVnt0Lw1zNZeOpY8Q",
firebaseConfig: {
apiKey: "AIzaSyBmpENQ8856OgqdHoJZYk789EoJApazCsg",
authDomain: "sportskeeda-web.firebaseapp.com",
projectId: "sportskeeda-web",
storageBucket: "sportskeeda-web.appspot.com",
messagingSenderId: "951141378975",
appId: "1:951141378975:web:b8594dbe895e44b1b92baa",
measurementId: "G-2FZC4KL8CV",
},
swRegistration,
debug: "",
namespace: "v2:"
};
}
function getPotentialSubscriptionsForCurrentPage() {
let groups = new Set();
if (currentPageType == "livecricket" || currentPageType == "cricketmatchpreview") {
groups = addToSubscriptionList(groups, "group", "cricket");
}
if (currentPageType == "sportspage") {
supportedCategories.forEach(function(category) {
const pageKey = "/" + category;
if (currentPageUrl.includes(pageKey)) {
groups = addToSubscriptionList(groups, "group", category);
}
});
}
if (currentPageType == "articlepage") {
supportedCategories.forEach(function(category) {
const pageKey = "/" + category + "/";
if (currentPageUrl.includes(pageKey)) {
groups = addToSubscriptionList(groups, "group", category);
}
});
}
if (groups.size > 0) {
if (userCountry) {
groups = addToSubscriptionList(groups, "geo", userCountry);
}
}
return Array.from(groups);
}
keedaPushDelegate("setup", setupPushNotifications, () => {
const potentialGroupsToSubscribeTo = getPotentialSubscriptionsForCurrentPage();
if (potentialGroupsToSubscribeTo.length) {
keedaPushDelegate("init", () => true);
keedaPushDelegate("onReady", () => {
keedaPushDelegate("subscribe", () => potentialGroupsToSubscribeTo);
}, (err) => {
console.log("Could not initialize push notification SDK", err);
});
}
}, (err) => {
console.error("Could not finish setup of keeda push", err);
});
} catch (err) {
console.log("Could not initialize keeda push", err);
}
})();
})();
</script>
</body>
</html>
