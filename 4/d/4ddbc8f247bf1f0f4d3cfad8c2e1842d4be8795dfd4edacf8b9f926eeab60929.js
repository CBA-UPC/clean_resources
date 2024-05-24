!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Oauth",[],e):"object"==typeof exports?exports.Oauth=e():t.Oauth=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=13)}([function(t,e,n){var o=n(8),r="object"==typeof self&&self&&self.Object===Object&&self;t.exports=o||r||Function("return this")()},function(t,e,n){function o(t){return null==t?void 0===t?a:u:s&&s in Object(t)?i(t):c(t)}var r=n(7),i=n(24),c=n(25),u="[object Null]",a="[object Undefined]",s=r?r.toStringTag:void 0;t.exports=o},function(t,e,n){function o(t,e){var n=i(t,e);return r(n)?n:void 0}var r=n(23),i=n(28);t.exports=o},function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},function(t){function e(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}var n=Object.prototype;t.exports=e},function(t){function e(t,e){return function(n){return t(e(n))}}t.exports=e},function(t,e,n){function o(t){if(!i(t))return!1;var e=r(t);return e==u||e==a||e==c||e==s}var r=n(1),i=n(9),c="[object AsyncFunction]",u="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";t.exports=o},function(t,e,n){t.exports=n(0).Symbol},function(t){t.exports="object"==typeof global&&global&&global.Object===Object&&global},function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},function(t){function e(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var n=Function.prototype,o=n.toString;t.exports=e},function(t){function e(t){return"number"==typeof t&&t>-1&&t%1==0&&n>=t}var n=9007199254740991;t.exports=e},function(t){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),r=n.n(o),i=n(16),c=n.n(i),u=n(17),a=n.n(u),s=n(18),f=(n.n(s),n(43)),l=n.n(f),p=n(44),d=n.n(p),b=n(46),y=n(47),j=["callbacks"],v="".concat(y.a,"/oauth-js-sdk/index.html"),h=function t(){var e=this;c()(this,t),a()(this,"init",function(t){var n=t.callbacks,o=void 0===n?{}:n,i=r()(t,j),c=o.onLoad,u=o.onLoginSuccess,a=o.onSignupSuccess,s=o.onError,f=o.onUserActivity;e.onError=s;e.onIframeLoad=c,e.onLoginSuccess=u,e.onSignupSuccess=a,e.onUserActivity=f,i.hostname=window.location.origin,e.initializeIframe(i),e.mountIframe()}),a()(this,"throwError",function(t){throw"function"==typeof e.onError&&e.onError(t),t}),a()(this,"isComponentConfigInvalid",function(t){var e={};if(t){var n=t.login,o=t.signup,r=t.forgetPassword;if(void 0!==n&&!0!==n&&(!d()(n)||!n.email&&!n.mobile&&1!=n.QR&&1!=n.QR.primary))return e.login="Login is mandatory and at least one among email, mobile and QR should be true. If QR only then primary cannot be false";if(void 0!==o&&!l()(o)&&!d()(o))return e.signup="If signup is set, it should be either boolean or object";if(void 0!==r&&!l()(r)&&!d()(r))return e.forgetPassword="If forgetPassword is set, it should be either boolean or object"}return e}),a()(this,"checkClientDetailsExists",function(t){return!!(t.clientId&&t.responseType&&t.redirectUri&&t.scope)}),a()(this,"logout",function(){}),a()(this,"debug",function(){}),a()(this,"ensureMounted",function(){if(!document.getElementById("oauth-iframe"))throw new UnmountedError("init needs to be called first")}),a()(this,"receiveMessage",function(t){if(t&&t.data&&t.data.type)switch(t.data.type){case b.a:e.handleIframeLoaded();break;case b.c:e.handleLoginSuccess(t.data.value);break;case b.d:e.handleSignupSuccess(t.data.value);break;case b.e:e.handleUserActivity(t.data.value)}}),a()(this,"handleUserActivity",function(t){"function"==typeof e.onUserActivity&&e.onUserActivity(t)}),a()(this,"handleIframeLoaded",function(){"function"==typeof e.onIframeLoad&&e.onIframeLoad()}),a()(this,"handleLoginSuccess",function(t){"function"==typeof e.onLoginSuccess&&e.onLoginSuccess(t)}),a()(this,"handleSignupSuccess",function(t){"function"==typeof e.onSignupSuccess&&e.onSignupSuccess(t)}),a()(this,"initializeIframe",function(t){var n=document.getElementById("oauth-iframe");n||(n=document.createElement("iframe"),n.id="oauth-iframe",n.setAttribute("style","width: 570px;height: 610px;border-style:none;box-shadow:0 0 15px 6px #eee"),n.crossorigin="anonymous"),n.src=v,n.onload=function(){e.iframe.contentWindow.postMessage({type:b.b,value:{config:t}},"*")},e.iframe=n}),a()(this,"mountIframe",function(){if(!document.getElementById("oauth-iframe")){var t=document.createElement("div");t.id="oauth-iframe-cont",t.style="z-index: ".concat(Number.MAX_SAFE_INTEGER,"; display: flex; justify-content: center;"),t.appendChild(e.iframe),document.body.appendChild(t)}window.addEventListener("message",e.receiveMessage,!1)}),this.onIframeLoad=null,this.onLoginSuccess=null,this.onSignupSuccess=null,this.iframe=null,this.onUserActivity=null};e.default=function(){var t=window.Oauth||{},e=t._beforeLoadConfig,n=new h,o={};return o.init=n.init,void 0!==e?o.init.apply(o,e):o.init.bind(o,e),o}()},function(t,e,n){function o(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;c.length>o;o++)n=c[o],0>e.indexOf(n)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var r=n(15);t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},function(t){function e(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;i.length>o;o++)n=i[o],0>e.indexOf(n)&&(r[n]=t[n]);return r}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},function(t){function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},function(t){function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){function o(t){if(null==t)return!0;if(a(t)&&(u(t)||"string"==typeof t||"function"==typeof t.splice||s(t)||l(t)||c(t)))return!t.length;var e=i(t);if(e==p||e==d)return!t.size;if(f(t))return!r(t).length;for(var n in t)if(y.call(t,n))return!1;return!0}var r=n(19),i=n(21),c=n(33),u=n(35),a=n(36),s=n(37),f=n(4),l=n(39),p="[object Map]",d="[object Set]",b=Object.prototype,y=b.hasOwnProperty;t.exports=o},function(t,e,n){function o(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}var r=n(4),i=n(20),c=Object.prototype,u=c.hasOwnProperty;t.exports=o},function(t,e,n){t.exports=n(5)(Object.keys,Object)},function(t,e,n){var o=n(22),r=n(29),i=n(30),c=n(31),u=n(32),a=n(1),s=n(10),f=s(o),l=s(r),p=s(i),d=s(c),b=s(u),y=a;(o&&"[object DataView]"!=y(new o(new ArrayBuffer(1)))||r&&"[object Map]"!=y(new r)||i&&"[object Promise]"!=y(i.resolve())||c&&"[object Set]"!=y(new c)||u&&"[object WeakMap]"!=y(new u))&&(y=function(t){var e=a(t),n="[object Object]"==e?t.constructor:void 0,o=n?s(n):"";if(o)switch(o){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case d:return"[object Set]";case b:return"[object WeakMap]"}return e}),t.exports=y},function(t,e,n){t.exports=n(2)(n(0),"DataView")},function(t,e,n){function o(t){return!(!c(t)||i(t))&&(r(t)?b:s).test(u(t))}var r=n(6),i=n(26),c=n(9),u=n(10),a=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,d=l.hasOwnProperty,b=RegExp("^"+p.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=o},function(t,e,n){function o(t){var e=c.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(t){}var r=u.call(t);return o&&(e?t[a]=n:delete t[a]),r}var r=n(7),i=Object.prototype,c=i.hasOwnProperty,u=i.toString,a=r?r.toStringTag:void 0;t.exports=o},function(t){function e(t){return o.call(t)}var n=Object.prototype,o=n.toString;t.exports=e},function(t,e,n){function o(t){return!!i&&i in t}var r=n(27),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=o},function(t,e,n){t.exports=n(0)["__core-js_shared__"]},function(t){function e(t,e){return null==t?void 0:t[e]}t.exports=e},function(t,e,n){t.exports=n(2)(n(0),"Map")},function(t,e,n){t.exports=n(2)(n(0),"Promise")},function(t,e,n){t.exports=n(2)(n(0),"Set")},function(t,e,n){t.exports=n(2)(n(0),"WeakMap")},function(t,e,n){var o=n(34),r=n(3),i=Object.prototype,c=i.hasOwnProperty,u=i.propertyIsEnumerable;t.exports=o(function(){return arguments}())?o:function(t){return r(t)&&c.call(t,"callee")&&!u.call(t,"callee")}},function(t,e,n){function o(t){return i(t)&&r(t)==c}var r=n(1),i=n(3),c="[object Arguments]";t.exports=o},function(t){t.exports=Array.isArray},function(t,e,n){function o(t){return null!=t&&i(t.length)&&!r(t)}var r=n(6),i=n(11);t.exports=o},function(t,e,n){(function(t){var o=n(0),r=n(38),i="object"==typeof e&&e&&!e.nodeType&&e,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=c&&c.exports===i,a=u?o.Buffer:void 0;t.exports=(a?a.isBuffer:void 0)||r}).call(e,n(12)(t))},function(t){function e(){return!1}t.exports=e},function(t,e,n){var o=n(40),r=n(41),i=n(42),c=i&&i.isTypedArray;t.exports=c?r(c):o},function(t,e,n){function o(t){return c(t)&&i(t.length)&&!!u[r(t)]}var r=n(1),i=n(11),c=n(3),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=o},function(t){function e(t){return function(e){return t(e)}}t.exports=e},function(t,e,n){(function(t){var o=n(8),r="object"==typeof e&&e&&!e.nodeType&&e,i=r&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===r,u=c&&o.process;t.exports=function(){try{var t=i&&i.require&&i.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}()}).call(e,n(12)(t))},function(t,e,n){function o(t){return!0===t||!1===t||i(t)&&r(t)==c}var r=n(1),i=n(3),c="[object Boolean]";t.exports=o},function(t,e,n){function o(t){if(!c(t)||r(t)!=u)return!1;var e=i(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==p}var r=n(1),i=n(45),c=n(3),u="[object Object]",a=Function.prototype,s=Object.prototype,f=a.toString,l=s.hasOwnProperty,p=f.call(Object);t.exports=o},function(t,e,n){t.exports=n(5)(Object.getPrototypeOf,Object)},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return u});var o="INIT_IFRAME",r="IFRAME_LOADED",i="LOGIN_SUCCESSFUL",c="SIGNUP_SUCCESSFUL",u="USER_ACTIVITY"},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o;o="https://accounts.paytm.com"}]).default});our receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.","default\u0004Failed to redeem the access.":"Failed to redeem the access.","default\u0004Automatically renew my subscription when the time comes.":"Automatically renew my subscription when the time comes.","default\u0004[%% header %%]":"[%% header %%]","default\u0004Waiting for publisher response...":"Waiting for publisher response...","default\u0004Your access is confirmed!":"Your access is confirmed!","default\u0004Hello,":"Hello,","default\u0004Use this information for paying via ATM or online banking system":"Use this information for paying via ATM or online banking system","default\u0004You just got access to ":"You just got access to ","checkout.publisher\u0004Cards":"Cards","default\u0004Redemption is allowed from <b>{0}</b> to <b>{1}</b>Ø":"Redemption is allowed from <b>{0}</b> to <b>{1}</b>Ø","default\u0004Gift details:":"Gift details:","default\u0004uBlock Origin":"uBlock Origin","default\u0004Choose from any one of our options below.":"Choose from any one of our options below.","default\u0004Generate Boleto":"Generate Boleto","default\u0004Feel free to re-try later":"Feel free to re-try later","default\u0004We support":"We support","default\u0004Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to visit the home page.":"Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to visit the home page.","default\u0004Back":"Back","default\u0004Purchases":"Purchases","default\u0004Close":"Close","default\u0004Purchase":"Purchase","default\u0004You now have access to <span class=\"bold resource-name\">{{app.name}} - {{voucher.resource.name}}</span>":"You now have access to <span class=\"bold resource-name\">{{app.name}} - {{voucher.resource.name}}</span>","default\u0004This information has been sent to <strong>{{bill.email}}</strong>":"This information has been sent to <strong>{{bill.email}}</strong>","default\u0004for {{getSelectedTerm().firstPeriod}}":"for {{getSelectedTerm().firstPeriod}}","default\u0004Welcome, {{user.email}}":"Welcome, {{user.email}}","default\u0004Use your Dwolla account to pay for your purchases and take the protection of Amazon with you":"Use your Dwolla account to pay for your purchases and take the protection of Amazon with you","default\u0004See all payment options":"See all payment options","default\u0004We're going to redirect you to iDeal<br>so you can complete your purchase":"We're going to redirect you to iDeal<br>so you can complete your purchase","default\u0004This email is being sent to <a href=\"mailto:{{user_email}}\">{{user_email}}</a>. If you did not register this account, please disregard this email. If you have any questions or encounter any problems, please send an email to <a href=\"mailto:{{support_email}}\">{{support_email}}</a>.":"This email is being sent to <a href=\"mailto:{{user_email}}\">{{user_email}}</a>. If you did not register this account, please disregard this email. If you have any questions or encounter any problems, please send an email to <a href=\"mailto:{{support_email}}\">{{support_email}}</a>.","default\u0004Incl. {{getVatLabel()}}":"Incl. {{getVatLabel()}}","default\u0004For a company":"For a company","default\u0004Recipient name":"Recipient name","default\u0004AdBlock Plus":"AdBlock Plus","checkout.publisher\u0004Submit":"Submit","default\u0004Checkout with {{app.name}}":"Checkout with {{app.name}}","default\u0004When payment is complete, you will receive an e-mail notifying you of your access":"When payment is complete, you will receive an e-mail notifying you of your access","default\u0004AdBlock":"AdBlock","default\u0004Print now":"Print now","default\u0004Select a country or region":"Select a country or region","default\u0004Remember my direct debit account for future payments":"Remember my direct debit account for future payments","default\u0004Show details":"Show details","default\u0004Having an issue?":"Having an issue?","default\u0004Complete Purchase":"Complete Purchase","default\u0004Instantly with Apple Pay":"Instantly with Apple Pay","default\u0004It seems that your credentials are not valid":"It seems that your credentials are not valid","default\u0004Select your billing country":"Select your billing country","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                  take up to 24 hours.":"You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                  take up to 24 hours.","default\u0004Cancel":"Cancel","default\u0004Complete":"Complete","default\u0004Please contact your administrator if you believe this is an error.":"Please contact your administrator if you believe this is an error.","default\u0004Click <b>Enabled on this site</b> until the text reads <b>Disabled on this site</b>.":"Click <b>Enabled on this site</b> until the text reads <b>Disabled on this site</b>.","default\u0004Your access was successfully verified!":"Your access was successfully verified!","default\u0004Resend via email":"Resend via email","default\u0004Citizenship card":"Citizenship card","default\u0004Add a card":"Add a card","default\u0004Go back to previous step":"Go back to previous step","default\u0004Identification by the mobile line":"Identification by the mobile line","default\u0004Thanks, {{business_name}}":"Thanks, {{business_name}}","default\u0004We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link: ":"We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link: ","default\u0004You just purchased":"You just purchased","default\u0004Payment source":"Payment source","default\u0004Please log in first.":"Please log in first.","default\u0004Get help!":"Get help!","default\u0004Site Licensing integration error.":"Site Licensing integration error.","default\u0004Please, log in first":"Please, log in first","default\u0004Subscription plan line up":"Subscription plan line up","default\u0004Thank you for registering an account with {{business_name}}. For your protection, please verify your email address by <a href=\"{{email_confirmation_url}}\" target=\"_blank\">clicking here</a> or by copying this URL into your browser:":"Thank you for registering an account with {{business_name}}. For your protection, please verify your email address by <a href=\"{{email_confirmation_url}}\" target=\"_blank\">clicking here</a> or by copying this URL into your browser:","default\u0004Invalid CVV: it must be 4 digits for American Express or 3 digits for other cards":"Invalid CVV: it must be 4 digits for American Express or 3 digits for other cards","default\u0004Your PayPal accounts":"Your PayPal accounts","default\u0004Redemption is allowed before <b>{0}</b>":"Redemption is allowed before <b>{0}</b>","default\u0004Subscribe":"Subscribe","default\u0004Company Name":"Company Name","default\u0004Where to pay from?":"Where to pay from?","default\u0004Click <b>Done</b> below to close this window and refresh the page.":"Click <b>Done</b> below to close this window and refresh the page.","default\u0004It looks like you have already redeemed your access!":"It looks like you have already redeemed your access!","default\u0004Remember for future payments":"Remember for future payments","default\u0004City":"City","default\u0004Choose":"Choose","default\u0004Reset password instructions has been sent to":"Reset password instructions has been sent to","checkout.publisher\u0004Expires":"Expires","default\u0004[%% callToAction2Copy %%]":"[%% callToAction2Copy %%]","default\u0004An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>":"An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>","default\u0004Unfortunately, your gift has been revoked":"Unfortunately, your gift has been revoked","default\u0004Because you are checking out in our sandbox environment, we will simulate\n                the payment process for easy testing.  Click the complete button below\n                to simulate a purchase.":"Because you are checking out in our sandbox environment, we will simulate\n                the payment process for easy testing.  Click the complete button below\n                to simulate a purchase.","default\u0004Use your <strong>PayPal account</strong> to pay for your purchases and take the protection of Braintree with you":"Use your <strong>PayPal account</strong> to pay for your purchases and take the protection of Braintree with you","default\u0004Add a new card":"Add a new card","default\u0004Your credit and debit cards":"Your credit and debit cards","default\u0004Later:":"Later:","default\u0004Cardholder":"Cardholder","default\u0004Thanks for your purchase!":"Thanks for your purchase!","default\u0004/ {{terms[0].firstPeriod}}":"/ {{terms[0].firstPeriod}}","default\u0004Manage":"Manage","default\u0004Register":"Register","default\u0004[%% success-subheader %%]":"[%% success-subheader %%]","default\u0004Switch to Another Resource? You can always come back.":"Switch to Another Resource? You can always come back.","default\u0004Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.","default\u0004Your payment verified. Click on the button below to proceed.":"Your payment verified. Click on the button below to proceed.","default\u0004You are about to get this trial.":"You are about to get this trial.","default\u0004email":"email","checkout.publisher\u0004Manage":"Manage","default\u0004Forgot password":"Forgot password","default\u0004Multibanco":"Multibanco","default\u0004You must be logged in to proceed.":"You must be logged in to proceed.","default\u0004Your gift for {{resource_name}} has been revoked":"Your gift for {{resource_name}} has been revoked","default\u0004Continue to PayPal":"Continue to PayPal","default\u0004Process...":"Process...","default\u0004for you and up to {0} others.":"for you and up to {0} others.","default\u0004until canceled":"until canceled","default\u0004Click on the button below to proceed further without any charges.":"Click on the button below to proceed further without any charges.","default\u0004You may check the status of your access by going to \"My account\" and clicking on the \"Bills\" tab. ":"You may check the status of your access by going to \"My account\" and clicking on the \"Bills\" tab. ","default\u0004Add a new direct debit account":"Add a new direct debit account","default\u0004Birth certificate":"Birth certificate","default\u0004Duration":"Duration","default\u0004Access terms":"Access terms","default\u0004When payment is done you receive e-mail with the access":"When payment is done you receive e-mail with the access","default\u0004ending in":"ending in","default\u0004Save":"Save","default\u0004Expiration":"Expiration","default\u0004Couldn't save credit card":"Couldn't save credit card","default\u0004This contract is not currently active! Please contact your administrator if you believe this is an error.":"This contract is not currently active! Please contact your administrator if you believe this is an error.","default\u0004(US zip 5-digit only)":"(US zip 5-digit only)","default\u0004Card number":"Card number","default\u0004Login":"Login","default\u0004Forgot password?":"Forgot password?","default\u0004[%% cta-text %%]":"[%% cta-text %%]","checkout.publisher\u0004Couldn't submit issue":"Couldn't submit issue","default\u0004Birth date":"Birth date","default\u0004Entity:":"Entity:","checkout.publisher\u0004Payment source":"Payment source","default\u0004Enter voucher code":"Enter voucher code","default\u0004Present the barcode at the checkout counter":"Present the barcode at the checkout counter","default\u0004Please remember, subscriptions paid for in cash are not eligible for refunds":"Please remember, subscriptions paid for in cash are not eligible for refunds","default\u0004Total":"Total","default\u0004for you and up to {{input.sharedAccounts.length}} others.":"for you and up to {{input.sharedAccounts.length}} others.","default\u0004This information has been sent to <strong>{{input.receipt.multibanco.email}}</strong>":"This information has been sent to <strong>{{input.receipt.multibanco.email}}</strong>","default\u0004Unexpected redemption result: {1}":"Unexpected redemption result: {1}","default\u0004Foreign identification document":"Foreign identification document","default\u0004Street 1":"Street 1","default\u0004Street 2":"Street 2","default\u0004Your ELV accounts":"Your ELV accounts","default\u0004/ {{terms[1].firstPeriod}}":"/ {{terms[1].firstPeriod}}","default\u0004After clicking \"Generate Boleto\" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.":"After clicking \"Generate Boleto\" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.","default\u0004Buy with":"Buy with","default\u0004Dwolla PIN":"Dwolla PIN","default\u0004Return to saved cards":"Return to saved cards","default\u0004This email is being sent to {{user_email}}. If you did not attempt a login recently, please disregard this email. If you have any questions or encounter any problems, please send an email to {{support_email}}.":"This email is being sent to {{user_email}}. If you did not attempt a login recently, please disregard this email. If you have any questions or encounter any problems, please send an email to {{support_email}}.","default\u0004Enter promo code":"Enter promo code","default\u0004Here is your transaction information":"Here is your transaction information","default\u0004Your iDeal accounts":"Your iDeal accounts","default\u0004/ {{terms[2].firstPeriod}}":"/ {{terms[2].firstPeriod}}","default\u0004You are about to be charged <b>{{input.chargeDisplayAmount}}</b>.":"You are about to be charged <b>{{input.chargeDisplayAmount}}</b>.","default\u0004You are about to be charged <b>{{input.confirmated.amount}}</b>, plus <b>{{ input.canadianTaxes[0].name}} {{ input.canadianTaxes[0].amount}}</b> ":"You are about to be charged <b>{{input.confirmated.amount}}</b>, plus <b>{{ input.canadianTaxes[0].name}} {{ input.canadianTaxes[0].amount}}</b> ","default\u0004Add a new credit or debit card":"Add a new credit or debit card","default\u0004Logout":"Logout","default\u0004To learn even more about {{business_name}}, check out our <a href=\"{{business_url}}\" style=\"color: #0085D7; text-decoration: none;\">website</a>!":"To learn even more about {{business_name}}, check out our <a href=\"{{business_url}}\" style=\"color: #0085D7; text-decoration: none;\">website</a>!","default\u0004State/Provinces":"State/Provinces","default\u0004You have been invited":"You have been invited","default\u0004MM":"MM","default\u0004This verification email will expire in {{verification_code_expiration_period}}, so please confirm your email address at your earliest convenience. Should the verification link expire prior to confirming your email address, you will need to register again for security purposes.":"This verification email will expire in {{verification_code_expiration_period}}, so please confirm your email address at your earliest convenience. Should the verification link expire prior to confirming your email address, you will need to register again for security purposes.","default\u0004Steps to disable adblocker":"Steps to disable adblocker","default\u0004Please choose another payment method.":"Please choose another payment method.","default\u0004Library":"Library","default\u0004Enter promo code to purchase":"Enter promo code to purchase","default\u0004You are about to receive <b>{{voucherResource()}}</b> by code \"{{redeemCode()}}\"":"You are about to receive <b>{{voucherResource()}}</b> by code \"{{redeemCode()}}\"","default\u0004Check notification in your MBWAY mobile app for more informaion":"Check notification in your MBWAY mobile app for more informaion","default\u0004Your new credit card":"Your new credit card","default\u0004Select a payment method":"Select a payment method","default\u0004Free":"Free","default\u0004Subscribe now":"Subscribe now","default\u0004Please wait while your request is being processed...":"Please wait while your request is being processed...","default\u0004Thanks for your registration!":"Thanks for your registration!","default\u0004Print the generated Boleto ticket.":"Print the generated Boleto ticket.","default\u0004Passport":"Passport","default\u0004Easypay":"Easypay","default\u0004An error has occurred":"An error has occurred","default\u0004Redeem your voucher":"Redeem your voucher","default\u0004You're all set":"You're all set","checkout.publisher\u0004Get help with your content":"Get help with your content","default\u0004Bring it to a participating store (<a href=\"https://www.openpay.mx/tiendas-de-conveniencia.html\" target=\"_blank\">click here</a> for a list of participating stores)":"Bring it to a participating store (<a href=\"https://www.openpay.mx/tiendas-de-conveniencia.html\" target=\"_blank\">click here</a> for a list of participating stores)","default\u0004minimum":"minimum","default\u0004Please cancel your current subscription via My Account if you would like to redeem your access through {0}.":"Please cancel your current subscription via My Account if you would like to redeem your access through {0}.","default\u0004Tax":"Tax","default\u0004/ {{ term.firstPeriod }}":"/ {{ term.firstPeriod }}","default\u0004Show me":"Show me","default\u0004Print the barcode":"Print the barcode","default\u0004Invalid card number":"Invalid card number","checkout.publisher\u0004Access terms":"Access terms","checkout.publisher\u0004Help":"Help","default\u0004I reside in the same country as my billing address":"I reside in the same country as my billing address","default\u0004Thanks! Notification has been sent":"Thanks! Notification has been sent","default\u0004The email that you registered with is not included in the list of users eligible to access this license.":"The email that you registered with is not included in the list of users eligible to access this license.","default\u0004Instructions to redeem it have been sent to {{ giftEmailParams.recipientEmail }}":"Instructions to redeem it have been sent to {{ giftEmailParams.recipientEmail }}","default\u0004Country":"Country","default\u0004<t>Email confirmation</t>":"<t>Email confirmation</t>","default\u0004Apply":"Apply","default\u0004[%% no-input-warning-message-text %%]":"[%% no-input-warning-message-text %%]","default\u0004Enter Your Subscription Address":"Enter Your Subscription Address","default\u0004Log in to your account":"Log in to your account","default\u0004Pick the subscription that's right for you":"Pick the subscription that's right for you","default\u0004for {{term.firstPeriod}}":"for {{term.firstPeriod}}","default\u0004Looks like you already have access!":"Looks like you already have access!","default\u0004Identity Card":"Identity Card","default\u0004Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.","default\u0004Search...":"Search...","default\u0004Pick a subscription that's right for you.":"Pick a subscription that's right for you.","default\u0004Couldn't submit comment":"Couldn't submit comment","checkout.publisher\u0004Library":"Library","default\u0004We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link:":"We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link:","default\u0004Error contacting Amazon Payment Services.":"Error contacting Amazon Payment Services.","default\u0004Add a personal message":"Add a personal message","default\u0004Next":"Next","checkout.publisher\u0004Get help!":"Get help!","default\u0004Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.","default\u0004Set as default":"Set as default","default\u0004{{term.firstPeriod}} for {{term.firstRealPrice}}":"{{term.firstPeriod}} for {{term.firstRealPrice}}","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                    take up to 24 hours.":"You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                    take up to 24 hours.","default\u0004Your {{verifiedPromoCode.discount}} off promo code\n            is valid only for\n\n            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.":"Your {{verifiedPromoCode.discount}} off promo code\n            is valid only for\n\n            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.","default\u0004Select a contract":"Select a contract","default\u0004Started on":"Started on","default\u0004PayPal":"PayPal","default\u0004Recipient email":"Recipient email","default\u0004Please enter your email address":"Please enter your email address","default\u0004Pay for your subscription with credit card or cash.":"Pay for your subscription with credit card or cash.","default\u0004[%% input-box-text %%]":"[%% input-box-text %%]","default\u0004or":"or","default\u0004Billing country":"Billing country","default\u0004\n            <span ng-if=\"isChargingTerm(selectedTerm)\">\n                Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span> </span> has been charged.\n            </span>\n            An email confirmation has been sent to <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>\n        ":"\n            <span ng-if=\"isChargingTerm(selectedTerm)\">\n                Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span> </span> has been charged.\n            </span>\n            An email confirmation has been sent to <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>\n        ","default\u0004Add new PayPal account":"Add new PayPal account","default\u0004All prices Incl.":"All prices Incl.","default\u0004Choose a specific term":"Choose a specific term","default\u0004Enter the code of your voucher":"Enter the code of your voucher","default\u0004Use your Amazon Payments account to pay for your purchases and take the protection of Amazon with you.":"Use your Amazon Payments account to pay for your purchases and take the protection of Amazon with you.","checkout.publisher\u0004All inquiries":"All inquiries","default\u0004Feel free to re-try other credentials":"Feel free to re-try other credentials","default\u0004Check notification in your MBWAY mobile app":"Check notification in your MBWAY mobile app","default\u0004Check notification in your MBWAY mobile app for more information":"Check notification in your MBWAY mobile app for more information","default\u0004[%% subheader %%]":"[%% subheader %%]","default\u0004I reside in same country as my billing address":"I reside in same country as my billing address","default\u0004Thanks":"Thanks","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours":"You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours","default\u0004Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.":"Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.","default\u0004<t>Welcome to {{sys_business_name}}!</t>":"<t>Welcome to {{sys_business_name}}!</t>","default\u0004\n        <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n        for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.\n    ":"\n        <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n        for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.\n    ","default\u0004Continue to Bitcoin":"Continue to Bitcoin","default\u0004<span ng-if=\"isChargingTerm(selectedTerm)\">Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span></span> has been charged.</span> An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>":"<span ng-if=\"isChargingTerm(selectedTerm)\">Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span></span> has been charged.</span> An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>","default\u0004Already have an account?":"Already have an account?","default\u0004Last Name":"Last Name","default\u0004Barcode example":"Barcode example","default\u0004Add a direct debit account":"Add a direct debit account","default\u0004Cards":"Cards","default\u0004Hide details":"Hide details","default\u0004Identification type":"Identification type","default\u0004Reference:":"Reference:","default\u0004You are about to be charged <b>{{input.confirmated.chargeAmount}}</b>.":"You are about to be charged <b>{{input.confirmated.chargeAmount}}</b>.","default\u0004Simply <button class=\"unbutton pn-boilerplate__link\" type=\"button\" ng-click=\"register()\">register</button> to determine your eligibility to redeem this access.":"Simply <button class=\"unbutton pn-boilerplate__link\" type=\"button\" ng-click=\"register()\">register</button> to determine your eligibility to redeem this access.","checkout.publisher\u0004Create an inquiry here, and we'll make sure your questions get answered ASAP.":"Create an inquiry here, and we'll make sure your questions get answered ASAP.","default\u0004Promo code":"Promo code","default\u0004<span style=\"color: #0085D7;\">{{business_name}}</span>":"<span style=\"color: #0085D7;\">{{business_name}}</span>","default\u0004Submit":"Submit","default\u0004Incl. {{getVatLabel()}} {{ interval.tax }}":"Incl. {{getVatLabel()}} {{ interval.tax }}","default\u0004Loading":"Loading","default\u0004Choose from one of the options below":"Choose from one of the options below","default\u0004Email":"Email","default\u0004Apply this payment method to all active subscriptions":"Apply this payment method to all active subscriptions","default\u0004Proceed to contract":"Proceed to contract","default\u0004Help":"Help","default\u0004Get help with your content":"Get help with your content","default\u0004Foreign citizenship card":"Foreign citizenship card","default\u0004Failed to load contracts.":"Failed to load contracts.","default\u0004uBlock":"uBlock","default\u0004Initiate payment within 3 hours after clicking on \"Generate Boleto\" before it expires.":"Initiate payment within 3 hours after clicking on \"Generate Boleto\" before it expires.","default\u0004Thanks! The transaction has been confirmed":"Thanks! The transaction has been confirmed","default\u0004Your document will be sent in a few minutes. Check your mail soon.":"Your document will be sent in a few minutes. Check your mail soon.","default\u0004\n    <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n    for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.":"\n    <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n    for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.","default\u0004First Name":"First Name","default\u0004for new consumer only":"for new consumer only","default\u0004Add new ELV account":"Add new ELV account","default\u0004We want to welcome you to the ranks of our avid readers here at {{sys_business_name}}.":"We want to welcome you to the ranks of our avid readers here at {{sys_business_name}}.","default\u0004Your Apple Pay cards":"Your Apple Pay cards","default\u0004Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to return to the home page.":"Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to return to the home page."}</script>
<script id="translation-static" type="text/javascript" src="/ng/common/i18n/platform-translation-map_en_US.js?version=16.101.0" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.4.1/jquery-migrate.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-cookies.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-sanitize.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-touch.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-dynamic-locale/0.1.27/tmhDynamicLocale.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui-ieshiv.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js" ></script>
<script type="text/javascript" src="/_sam/H4sIAAAAAAAA_03IUQ7CIAwA0AsNKkQnZ9gllg0aZEJLKI3X98_49_LgU1LGCanIhPjC-GadpnHSinAJRJXJzZxKqaJ9bpt4vo-uu3EhrG593EJYoJZT4KCs9RjGWW-9h-IC_a5yPCruSEZlAcoQuTUm6GSkFyIcf7SXfAEAUacolwAAAA?compressed=true&v=16.101.0" ></script>



</head>

<body style="background-color:transparent" id="ng-app">

<script>
    var TPConfig = {
        PATH: "https://buy.tinypass.com"
    };

    
var TPParam = {"CONDE_RESET_PASSWORD":"/checkout/conde/resetPassword","PAYWAY_APPLE_PAY_AUTH":"/checkout/offer/paywayApplePayAuth","CONFIRMATION":"/checkout/payment/confirmation","NETBANKING_RECURRING_FLOW_ENABLED":true,"CUSTOM_PRICE_INIT":"/checkout/payment/customPriceInit","RESTORE_CHECKOUT_OBJECTS":"/checkout/offer/restoreCheckoutObjects","LOGIN_PASSWORDLESS_USER":"/checkout/user/loginPasswordlessUser","INIT_PURCHASE":"/checkout/offer/initPurchase","APPLY_NEW_PRICE":"/checkout/payment/applyNewPrice","BILLING_ADDRESS_APPLY":"/checkout/bilingAddress/applyUserBillingAddress","PROCESS_PURCHASE":"/checkout/offer/processPurchase","LOG_THREE_D_SECURE_INFO":"/checkout/offer/threeDSecureInfoLog","LOGIN":"/checkout/user/loginShow","GET_TERM_CHANGE_3DS_CONFIRMATION":"/checkout/offer/getTermChangeThreeDSecureConfirmation","COMPLETE_PURCHASE":"/checkout/offer/completePurchase","PROMO_CODE_VERIFY":"/checkout/payment/promoCodeVerify","PAYWAY_APPLE_PAY_VOID":"/checkout/offer/paywayApplePayVoid","KLARNA_INIT_URL":"/checkout/offer/initKlarna","TERM_CHANGE_COMPLETE_3DS":"/checkout/offer/termChangeCompleteThreeDSecure","PAYWAY_API_URL":"https://paywayws.net/PaywayWS/","BRAINTREE_APPLE_PAY_CLIENT":"/checkout/offer/brainTreeApplePayClient","params":{"parentOuterHeight":"972","logType":"offerShow","browserId":"ls2oe840i3yewhrx","userProvider":"piano_id","widget":"offer","pianoIdUrl":"https://id.tinypass.com/id/","templateId":"OTIAULVTU65U","parentDualScreenLeft":"0","experienceActionId":"showOfferMXL4S0J8YZLG99","customVariables":"{}","experienceId":"EXOSB4K3W3YI","templateVariantId":"OTVK2C1J72EOJ","hasLoginRequiredCallback":"true","gaAccount":"UA-10158580-10","showCloseButton":"true","pianoIdStage":"","displayMode":"modal","url":"https://frontline.thehindu.com/current-issue/","initMode":"context","parentDualScreenTop":"0","parentWidth":"1280","userToken":"","requestUserAuthForLinkedTerm":"true","checkoutFlowId":"CF0RZAEDCSAK","parentHeight":"887","iframeId":"offer-0-DtY07","hideCompletedFields":"true","_qh":"9e20903d06","width":"1280","offerId":"OF7JYA1CIHZ7","formNameByTermId":"{}","customCookies":"{}","aid":"7JJs2o4rpu","initTime":"7172"},"GEO_COUNTRY_TAX_SUPPORT":null,"GEO_COUNTRY_POSTAL_CODE":"08034","TERM_CHANGE":"/checkout/offer/termChange","EXPERIAN_IS_STRICT":true,"GEO_COUNTRY_CODE":"ES","ADDRESS_LIST":"/checkout/payment/addressList","RECAPTCHA_SITE_KEY":"6LfIeRMUAAAAAALhNbNCg1hfkVOjl9o_S24b1OPo","GET_REDEMPTION_RESULT":"/checkout/offer/getRedemptionResult","TRANSLATION_CONFIG":{"isStatic":false,"isEnabled":true,"templateContext":"default","version":"16.101.0","loadTranslationUrl":"/checkout/general/loadTranslationMap?aid=7JJs2o4rpu&version=1597776570000","initialLocaleId":"en_US","systemDefaultLocale":"en_US","languages":[{"locale":"en_US","label":"English (United States)","localized":"English (United States)","isDefault":true,"isEnabled":true,"rtl":false}]},"GET_OFFER":"/checkout/offer/getOffer","APPLY_DEFAULT_PAYMENT_METHOD":"/checkout/offer/applyDefaultPaymentMethod","COUNTRIES_AND_REGIONS":"/checkout/bilingAddress/getCountriesAndRegions","CONDE_LOGIN":"/checkout/conde/login","GET_BRAINTREE_NONCE":"/checkout/offer/getBrainTreeNonce","VALIDATE_CONSENTS":"/checkout/offer/validateConsents","VERIFY_FRAUD_PREVENTION":"/checkout/offer/verifyFraudPrevention","CHECK_COMPLETE":"/checkout/offer/checkPaymentComplete","APPLE_PAY_PROCESS_PAYMENT_DATA_URL":"/checkout/offer/applePayProcessPaymentData","EXTERNAL_VERIFICATION":"/checkout/payment/externalVerification","EXPERIAN_FORMAT":"/checkout/experian/experianFormat","AVALARA_ADDRESS_VERIFY":"/checkout/avalara/avalaraAddressVerify","GET_ACCESS":"/checkout/offer/getAccess","CYBER_SOURCE_TOKENIZE_CARD_URL":"https://api.cybersource.com/flex/v1/tokens/","SHARED_SUBSCRIPTION_GRANT_ACCESS_ACCOUNTS":"/checkout/subscription/grantAccessSharedAccounts","GET_USER_RESOURCES":"/checkout/offer/getUserResources","SAVE_GIFT_PARAMS":"/checkout/offer/saveGiftEmailParams","APPLE_PAY_PAYMENT_SESSION_URL":"/checkout/offer/applePayPaymentSession","INIT_FRAUD_PREVENTION":"/checkout/offer/initFraudPrevention","LOAD_PAYULATAM_UI_MODELS":"/checkout/offer/loadPayULatamUiModels","PAYMENTS_OS_TOKENIZE_CARD_URL":"https://api.paymentsos.com/tokens","EXPERIAN_SEARCH":"/checkout/experian/experianSearch","GET_FRAUD_PREVENTION_CONFIG":"/checkout/offer/getFraudPreventionConfig","CREATE_ORDER":"/checkout/offer/createOrder","LOAD_TERM_COUNTRIES":"/checkout/offer/obiLoadTermCountries","GET_SUBSCRIPTION_INFO":"/checkout/subscription/getSubscriptionInfo","APPLY_REDEMPTION_CODE":"/checkout/offer/applyRedemptionCode","TRACK_SHOW":"/checkout/offer/trackShow","LINKED_TERM_MANUAL_CHECKOUT_TRACKING":false,"CHECK_PURCHASE":"/checkout/offer/checkPaymentProcess","STRIPE_APPLE_PAY_INIT":"/checkout/offer/stripeApplePayInit","CHANGE_TERM":"/checkout/offer/obiChangeTerm","VOUCHER_SHIPPING_ADDRESS":"/checkout/payment/voucherShippingAddress","BILL_PAYMENTS_RESEND_BILL_URL":"/checkout/offer/billPaymentsResendBill","performanceMetrics":{},"TRACK_VIEW":"/checkout/offer/trackView","SAVE_CHECKOUT_PARAMS":"/checkout/user/saveCheckoutParams","PROCESS_PASSWORDLESS_USER":"/checkout/offer/processPasswordlessUser","PROMO_CODE_REVERT":"/checkout/payment/promoCodeRevert","FULL_REDIRECT_3DS_ENABLED":true,"CONDE_REGISTER":"/checkout/conde/register","REDEEM_REDEMPTION_CODE":"/checkout/offer/redeemRedemptionCode","PROMO_CODE_IS_ANON":"/checkout/payment/promoCodeIsAnon","ADDRESS_COLLECT":"/checkout/payment/addressCollection","APPLY_TAX_ACTION":"/checkout/offer/applyTax","SHARED_SUBSCRIPTION_VALIDATE_ACCOUNT":"/checkout/subscription/validateSharedAccount","GET_TERM_CHANGE_CONFIRMATION":"/checkout/offer/getTermChangeConfirmation","SHARED_ACCOUNT_CODE_VALIDATE":"/checkout/subscription/sharedAccountCodeValidate","CHECK_NAMES_AND_BILLING_ADDRESS":"/checkout/bilingAddress/checkNamesAndBillingAddress","config":{"checkoutCfInRegister":true,"passwordlessCaptchaEnabled":false,"allowTinypassAccountsLogin":false,"hasTermForNewCustomerBillingPlan":false,"userResources":[],"isSingleStepEnabled":false,"captcha2SiteKey":"6LfIeRMUAAAAAALhNbNCg1hfkVOjl9o_S24b1OPo","redemptionEnabled":true,"isTaxZipCodeHidden":false,"taxSupports":["custom.vat"],"terms":[{"termId":"TMFEKKGZ1JL3","name":"Frontline_digital_1year_USD39.99","description":"","type":"payment","resource":{"name":"Frontline Digital","description":"Access to the Frontline Digital Resource","rid":"FL","url":null,"imageUrl":null},"displayLine":"$39.99 per year","billingPlanTable":[{"date":"Today","period":"year","shortPeriod":"/yr","originalPrice":"","billingPeriod":"1 year","priceChargedStr":"$39.99","priceValue":39.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"$39.99 per year","duration":"yearly until canceled","billingInfo":"$39.99 per year","isFree":"false","pricelessBillingPre":"","price":"$39.99","priceAndTax":39.99,"pricelessBillingPost":" per year","currency":"USD","originalPriceValue":null,"totalBilling":"$39.99 per year"}],"chargeDisplayAmount":"$39.99","chargeAmount":39.99,"chargeAmountInMinorUnit":3999,"taxAmount":"$0.00","hstAmount":"$0.00","qstAmount":"$0.00","pstAmount":"$0.00","gstAmount":"$0.00","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"$39.99","totalAmount":"$39.99","termLevelTaxProductCategory":"","chargeCurrency":"USD","chargeCurrencySymbol":"$","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"$39.99","firstRealPriceWithTax":"$39.99","oneOffPaymentMethods":[{"id":70,"name":"Credit Card","identifier":"pay_u_india_cc_v2","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":70,"name":"Credit Card","identifier":"pay_u_india_cc_v2","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 year","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":39.99,"verificationAmountWithTax":39.99,"allowPromoCodes":true,"withNewCustomerBillingPlan":false}],"isDoubleOptInEnabled":false,"isEnableGoogleAnalytics":true,"originalTerms":[{"termId":"TMFEKKGZ1JL3","name":"Frontline_digital_1year_USD39.99","description":"","type":"payment","resource":{"name":"Frontline Digital","description":"Access to the Frontline Digital Resource","rid":"FL","url":null,"imageUrl":null},"displayLine":"$39.99 per year","billingPlanTable":[{"date":"Today","period":"year","shortPeriod":"/yr","originalPrice":"","billingPeriod":"1 year","priceChargedStr":"$39.99","priceValue":39.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"$39.99 per year","duration":"yearly until canceled","billingInfo":"$39.99 per year","isFree":"false","pricelessBillingPre":"","price":"$39.99","priceAndTax":39.99,"pricelessBillingPost":" per year","currency":"USD","originalPriceValue":null,"totalBilling":"$39.99 per year"}],"chargeDisplayAmount":"$39.99","chargeAmount":39.99,"chargeAmountInMinorUnit":3999,"taxAmount":"$0.00","hstAmount":"$0.00","qstAmount":"$0.00","pstAmount":"$0.00","gstAmount":"$0.00","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"$39.99","totalAmount":"$39.99","termLevelTaxProductCategory":"","chargeCurrency":"USD","chargeCurrencySymbol":"$","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"$39.99","firstRealPriceWithTax":"$39.99","oneOffPaymentMethods":[{"id":70,"name":"Credit Card","identifier":"pay_u_india_cc_v2","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":70,"name":"Credit Card","identifier":"pay_u_india_cc_v2","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 year","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":39.99,"verificationAmountWithTax":39.99,"allowPromoCodes":true,"withNewCustomerBillingPlan":false}],"useMock":false,"isPromoCodeApplyWithoutUserEnabled":false,"isAutoDetectEmailEnabled":false,"offerTemplateId":"OTIAULVTU65U","app":{"name":"Frontline","image1":"/ml/cropped_7JJs2o4rpu_1_s6muac.png","aid":"7JJs2o4rpu","useTinypassAccounts":false,"userProvider":"piano_id","businessUrl":"https://frontline.thehindu.com/","canInitCheckoutWithAnon":true},"settings":{"requiresValidUser":true},"checkoutFlowType":"PURCHASE","isNewCustomer":true,"templateVersionPubId":"TVXS05Y1XVDW","checkoutAuthenticationInSeparateState":true,"isPasswordlessCheckoutEnabled":true,"templatePubId":"dgMD4bzenTCy58I1YKoT","templateCategory":"OFFER","checkoutFlowId":"CF0RZAEDCSAK","hasTax":false,"additionalTerms":[],"consoleError":"","consents":[],"isConfirmStepEnabled":true,"offerId":"OF7JYA1CIHZ7","templateVersion":1,"user":{"uid":"anon","email":null,"displayName":null,"valid":false,"firstName":null,"lastName":null,"confirmed":false},"offerTemplateVariantId":"OTVK2C1J72EOJ","isRedemption":false},"GET_TAX_COUNTRIES":"/checkout/offer/getTaxCountries"};
</script>

<!-- next-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/next-button-component.html"
        xmlns="http://www.w3.org/1999/html">
    <div class="next-button-wrapper">
        <a href="javascript:void(0)" class="button next">{{title}}</a>
    </div>
</script>

<!-- previous-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/previous-button-component.html"
        xmlns="http://www.w3.org/1999/html">
    <div class="previous-button-wrapper" ng-show="hasPreviousState()">
        <a href="javascript:void(0)" class="button back"></a>
    </div>
</script>

<!-- close-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/close-button-component.html">
    <div class="close-button-wrapper">
        <a href="javascript:void(0)" class="button big">{{title}}</a>
    </div>
</script>

<!-- complete-purchase-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/complete-purchase-button-component.html">
    <div>
        <a href="javascript:void(0)" class="button complete-purchase"
            ng-class="{'disabled': isDisabled}"
        >{{title}}</a>
    </div>
</script>

<!--  goto-confirmation-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/goto-confirmation-component.html">
    <div>
        <a href="javascript:void(0)" class="button goto-confirmation">{{title}}</a>
    </div>
</script>

<!-- error-list-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/error-list-component.html">
    <div class="message-block" ng-show="hasErrors()">
        <div class="icon-attention"></div>

        <ol class="errors">
            <li ng-repeat="error in errors" ng-class="{'one-error': hasOneError()}">
                {{error.fieldTitle}}
                {{error.message}}
            </li>
        </ol>
        <div class="btn-close" ng-click="reset()"></div>
    </div>
</script>

<!-- account-header-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/account-header-component.html">
    <div class="account-popup-header">
        <div previous-button></div>
        <div class="account-popup-language-toggle" ng-if="!noLanguage">
            <language-selector></language-selector>
        </div>

        <boilerplate-close-button></boilerplate-close-button>
        <div class="account-group" desktop="">
            <div class="account-data" ng-if="isUserValid()">
                <div class="account-mail">{{user.email}}</div>
                <div class="account-name">
                    <span ng-show="user.displayName !== user.email">
                        {{ user.displayName }}
                        <span ng-if="allowLogout()">
                            &#8212;
                        </span>
                    </span>
                    <span ng-show="user.displayName === user.email && (user.firstName || user.lastName)">
                        {{ user.firstName }} {{ user.lastName }}
                        <span ng-if="allowLogout()">
                             &#8212;
                        </span>
                    </span>
                    <span ng-click="logout()" ng-show="allowLogout()" class="link"><t>Logout</t></span>
                </div>
            </div>
            <div class="account-data" ng-if="!isUserValid() && ( allowLogin() || !allowInvalidUser())">
                <div class="account-text account-login" ng-if="allowLogin()">
                    <span>
                        <t>Already have an account?</t>
                        <a ng-click="login()"><t>Log in</t></a>
                    </span>
                </div>
                <div class="account-name" ng-if="!allowInvalidUser() && !allowLogin()">
                    <span>
                        <t>You should be already logged in</t>
                    </span>
                </div>
            </div>
        </div>
        <div class="account-group" mobile="">
            <div>
                <div class="account-data">
                    <div class="account-name account-mail-only">{{user.email}}<span ng-show="allowLogout()">  &#8212; <span class="link"
                                                                                                                            ng-click="logout()"><t>Logout</t></span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/purchase-receipt-component.html">
<div class="text-left pad-3 w-25">
    <p class="title spacing">Payment Confirmation</p>
</div>
<img class="small-logo" src="https://www.thehindu.com/static/content/images/20210120151613/Group67.png">
<div class="text-left">
      <p>
      <span class="note">Thank you for subscribing to </span>
        
        {{selectedTerm.resource.name | tc:'resource.name'}}<span ng-hide="input.sharedAccounts.length > 0">.</span>
     </p>

  <span ng-show="input.sharedAccounts.length > 0"><t context="checkout.platform" arg0="{{input.sharedAccounts.length}}">for you and up to {0} others.</t></span>
   <hr class="mt-2 mb-2">
</div>
<div class="bg-blue-shade">
           <div class="text-left pad-1">
        <p ng-repeat="interval in selectedTerm.billingPlanTable">
           <span ng-if="isChargingTerm(selectedTerm) && !selectedTerm.forceAutoRenew ">Your {{getSelectedPaymentMethodName()}} <span ng-if="isApplePayPaymentMethod()"> account</span>has been charged {{input.chargeDisplayAmount}}. You will get
             access for <span ng-bind-html="interval.billingPeriod"></span></span>
          <span ng-if="isChargingTerm(selectedTerm) && selectedTerm.forceAutoRenew">Your {{getSelectedPaymentMethodName()}} <span ng-if="isApplePayPaymentMethod()"> account</span>has been charged {{input.chargeDisplayAmount}}. You will get
             access till <span ng-bind-html="interval.duration"></span></span>
        </p>
        <p class="note">
             An email confirmation and your invoice has been sent to {{user.email}}
       </p>
</div>
</div>
    <div ng-show="input.sharedAccounts.length > 0">
        <t context="checkout.platform">You can modify your shared subscription membership at any time.</t>
    </div>
<!--<div class="bottom-fixed">
<div>
        <button type="submit" class="btn-secondary full-width mt-2 mb-2 w-85">
            Personalize my subscription
        </button>
</div>
<div class="bg-blue-shade pad-1 pad-4 bottom-full-width-2">
             <button class="btn-primary full-width mt-1 btn-width mb-1" actionClose>
              Start reading
            </button>
</div>
</div>-->
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/registration-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your registration!</t>
    </h1>

    <span>
       <t>You just got access to</t>
    </span>

    <span class="bold resource-name">{{selectedTerm.resource.name | tc:'resource.name'}}.</span>
    <br/>

    <span><t>An email confirmation has been sent to
            <a class="mail" href="javascript:void(0);">{{user.email}}</a></t></span>
</script>


<script type="text/ng-template" id="/widget/checkout/component/partials/external-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Your access was successfully verified!</t>
    </h1>

    <span>
        <t>You just got access to</t>
        <span class="bold"> {{selectedTerm.resource.name | tc:'resource.name'}}.</span>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-redemption-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>You now have access to <span class="bold resource-name">{{app.name}} - {{voucher.resource.name}}</span></t>
        <span ng-show="input.sharedAccounts.length > 0">
            <t>for you and up to {{input.sharedAccounts.length}} others.</t>
        </span>
        <div ng-show="input.sharedAccounts.length > 0">
            <t context="checkout.platform">You can modify your shared subscription membership at any time.</t>
        </div>
    </h1>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/gift-purchase-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your purchase!</t>
    </h1>

    <span ng-show="isChargingTerm(selectedTerm)">
        <t>You just purchased</t>
    </span>

    <span ng-show="!isChargingTerm(selectedTerm)">
       <t>You just got access to</t>
    </span>

    <t>
        <span class="bold resource-name">{{selectedTerm.resource.name | tc:'resource.name'}}</span>
        for
    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.
    </t>
    <br/>
    <t>Instructions to redeem it have been sent to {{ giftEmailParams.recipientEmail }}</t>
    <br/>
    <span>
        <t>
            <span ng-if="isChargingTerm(selectedTerm)">
                Your <span class="bold payment-method">{{getSelectedPaymentMethodName()}}<span ng-if="isApplePayPaymentMethod()"> account</span> </span> has been charged.
            </span>
            An email confirmation has been sent to <a class="mail" href="javascript:void(0);">{{user.email}}</a>
        </t>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-cash-receipt-component.html">
    <div class="openpay-cash-receipt">
        <p class="openpay-cash-receipt-success-message"><t>Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.</t></p>
        <h4><t>Please remember, subscriptions paid for in cash are not eligible for refunds.</t></h4>
        <h5 class="openpay-cash-payment-subtitle"><t>Instructions</t></h5>
        <ol class="openpay-cash-payment-instructions-list">
            <li><t>Print the barcode</t></li>
            <li><t>Bring it to a participating store (<a href="https://www.openpay.mx/tiendas-de-conveniencia.html" target="_blank">click here</a> for a list of participating stores)</t></li>
            <li><t>Present the barcode at the checkout counter</t></li>
            <li><t>Pay for your subscription in cash</t></li>
            <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours</t></li>
        </ol>
        <p class="openpay-cash-payment-instructions-paragraph"><t>You may check the status of your access by going to 'My Account' and clicking on the 'Bills' tab.</t></p>
        <div class="openpay-cash-payment-barcode">
            <img ng-src="{{input.receipt.paymentMethod.barcodeUrl}}" alt="">
            <div class="openpay-cash-payment-barcode-code">{{input.receipt.paymentMethod.reference}}</div>
        </div>
        <div openpay-bill-controls bill-url="{{input.receipt.billUrl}}" bill-id="{{input.receipt.billId}}"></div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-multibanco-receipt-component.html">
    <div class="easypay-multibanco-receipt">
        <div class="notification-wrapper">
            <t>This information has been sent to <strong>{{input.receipt.multibanco.email}}</strong></t>
        </div>
        <div class="logos-wrapper">
            <div class="multibanco-logo"></div>
            <div class="delimiter"></div>
            <div class="easypay-logo"></div>
        </div>
        <h2 class="receipt-title"><t>Here is your transaction information</t></h2>
        <ul class="transaction-information-list">
            <li>
                <strong><t>Entity:</t></strong> <span id="multibancoEntity">{{input.receipt.multibanco.entity}}</span>
            </li>
            <li>
                <strong><t>Reference:</t></strong> <span id="multibancoReference">{{input.receipt.multibanco.reference}}</span>
            </li>
            <li>
                <strong><t>Value:</t></strong> <span id="multibancoChargeAmount">{{input.receipt.multibanco.chargeAmount}}</span>
            </li>
        </ul>

        <div class="warning-wrapper">
            <strong><t>Instructions</t></strong>
            <ol>
                <li>
                    <t>Use this information for paying via ATM or online banking system</t>
                </li>
                <li>
                    <t>When payment is complete, you will receive an e-mail notifying you of your access</t>
                </li>
            </ol>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-mbway-receipt-component.html">
    <div class="easypay-mbway-receipt">
        <div class="logos-wrapper">
            <div class="mbway-logo"></div>
            <div class="delimiter"></div>
            <div class="easypay-logo"></div>
        </div>
        <div class="content">
            <h1 class="you-already-have-access">
                <strong><t>Thanks! Notification has been sent</t></strong>
            </h1>
            <t>Check notification in your MBWAY mobile app for more informaion</t>
        </div>
    </div>
</script>


<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-direct-debit-receipt-component.html">
    <div class="easypay-direct-debit-receipt">

        <div class="easypay-direct-debit-receipt__header">
            <div class="table-cell table-cell--centered table-cell--delimiter-right">
                <div class="direct-debit-logo"></div>
            </div>
            <div class="table-cell table-cell--delimiter"></div>
            <div class="table-cell table-cell--centered">
                <div class="easypay-logo"></div>
            </div>
        </div>

        <div class="easypay-direct-debit-receipt__body">
            <div class="done-icon"></div>
            <div class="receipt-title"><t>Thanks! The transaction has been confirmed</t></div>
            <span>You will receive an e-mail confirmation in 3 days.</span>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-boleto-receipt-component.html">
    <div class="easypay-boleto-receipt">
      <div class="easypay-boleto-receipt__success-message"><t>Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.</t></div>

      <div class="easypay-boleto-receipt__refund">
        <t>Please remember, subscriptions paid for in cash are not eligible for refunds.</t>
      </div>

      <div class="easypay-boleto-receipt__highlighted-area easypay-boleto-receipt__highlighted-area--instructions">
          <div class="easypay-boleto-receipt__instructions-title"><t>Instructions</t></div>

          <ol class="easypay-boleto-receipt__instructions">
              <li><t>After clicking "Generate Boleto" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.</t></li>
              <li><t>Initiate payment within 3 hours after clicking on "Generate Boleto" before it expires.</t></li>
              <li><t>Print the generated Boleto ticket.</t></li>
              <li><t>Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.</t></li>
              <li><t>Pay for your subscription with credit card or cash.</t></li>
              <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may
                  take up to 24 hours.</t></li>
          </ol>

          <t>You may check the status of your access by going to "My account" and clicking on the "Bills" tab. </t>
      </div>

      <!--Controls-->
      <div easypay-bill-controls bill-url="{{input.receipt.billUrl}}" open-bill-title="{{'Generate Boleto' | t}}"></div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/onet-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your purchase!</t>
    </h1><br />
    <t>We are processing your payment. You will be notified by email upon confirmation.</t>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/boilerplate-login-dropdown.html">
    <div class="pn-boilerplate-login">
        <div ng-if="!isUserValid()"
             class="pn-boilerplate-login__action">
            <button type="button"
                    ng-click="login()"
                    class="pn-boilerplate-login__button login">
                <svg class="pn-boilerplate-login__icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H1V1h14v14H1v-2h12V3zM6 9H1V7h5V4.586L9.414 8 6 11.414V9z" fill="#0F0F15"/>
                </svg>
            </button>
        </div>
        <div ng-if="isUserValid()"
             class="pn-boilerplate-login__action"
             ng-class="{'pn-boilerplate-login__action--active': isDropdownOpen}">
            <button type="button"
                    ng-click="logoutToggle(); $event.stopPropagation()"
                    class="pn-boilerplate-login__button logout-dropdown">
                <svg class="pn-boilerplate-login__icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a3 3 0 11-6 0 3 3 0 016 0zm.518 3.552a5 5 0 10-7.037 0A6 6 0 001 15h2a4 4 0 014-4h2a4 4 0 014 4h2a6 6 0 00-3.482-5.448z"/>
                </svg>
            </button>
            <ul ng-if="isDropdownOpen" ng-click="$event.stopPropagation()" class="pn-boilerplate-login__dropdown">
                <li class="pn-boilerplate-login__dropdown-item">
                    <button class="pn-boilerplate-login__dropdown-button username">
                        <svg class="pn-boilerplate-login__dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a3 3 0 11-6 0 3 3 0 016 0zm.518 3.552a5 5 0 10-7.037 0A6 6 0 001 15h2a4 4 0 014-4h2a4 4 0 014 4h2a6 6 0 00-3.482-5.448z" fill="#0F0F15"/>
                        </svg>
                        <span class="pn-boilerplate-login__dropdown-title">
                            {{ displayUserName(user) }}
                        </span>
                    </button>
                </li>
                <li class="pn-boilerplate-login__dropdown-item">
                    <button ng-click="logout(); logoutToggle()" class="pn-boilerplate-login__dropdown-button logout">
                        <svg class="pn-boilerplate-login__dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1H7v7h2V1zM1 8a7 7 0 014-6.326V4a5 5 0 106 0V1.674A7 7 0 111 8z" fill="#0F0F15"/>
                        </svg>
                        <span class="pn-boilerplate-login__dropdown-title">
                            Logout
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/inbaf-receipt-component.html">
  <h1 class="you-already-have-access">
    <t>Thank you for subscribing to Frontline!<br/></t><br/><br/>
    <t>The invoice will be sent to <strong>{{input.receipt.invoiceEmail || user.email}}</strong></t>
  </h1><br/>
  <t>You will have to manually pay for that invoice before next renewal date. Keep in mind that processing the payment usually takes a
    couple of days. Consider paying few days ahead in order to not interrupt your access.
  </t>
<p style="display:none;" id="term_id">
  {{selectedTerm.termId}}
  </p>
<p style="display:none;" id="email_id">
  {{user.email}}
  </p>
<p style="display:none;" id="payment_id">
  {{input.receipt.paymentId}}
  </p>
<p style="display:none;" id="termConversionId">
  {{input.receipt.termConversionId}}
  </p>
 <div custom-script>
 
  setTimeout(function(){
     window.parent.postMessage(
                            {
                            event_id: 'invoice_option_1',
                            data: {
                            termid: document.getElementById("term_id").innerText.trim(),
   							email: document.getElementById("email_id").innerText.trim(),
   							paymentId: document.getElementById("payment_id").innerText.trim(),
   							termConversionId: document.getElementById("termConversionId").innerText.trim(),
                            name:"invoice_option_1"
                            }
                            },"*"
                            );
    }, 200);
  </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/inbas-receipt-component.html">
  <h1 class="you-already-have-access">
    <t>Thank you for subscribing to Frontline!<br/></t><br/><br/>
    <t>The invoice will be sent to <strong>{{input.receipt.invoiceEmail || user.email}}</strong></t>
  </h1><br/>
  <t>You will have to manually pay for that invoice before next renewal date. Keep in mind that processing the payment usually takes a
    couple of days. Consider paying few days ahead in order to not interrupt your access.
  </t>
</script>

<!-- paypal-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/paypal-form-component.html">
    <div ng-show="isPaymentMethod(PAYPAL)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>
            <div class="payment-system-condition paypal-login">
                <t>Click to button below to pay with your <strong>PayPal</strong> account.</t>
            </div>

            <div consents-list></div>

            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- paypal-through-braintree-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/paypal-through-braintree-form-component.html">
    <div ng-show="isPaymentMethod(PAYPAL_BT)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>

            <div class="paypalbt-payment-form">
                <div ng-show="!isLoggedIn() && !stored.length"><t>Please, log in first</t></div>
                <div ng-show="isLoggedIn() || stored.length"><t>Your PayPal accounts</t></div>

                <table class="payment-method-paypalbt">

                    <tr class="payment-method-paypalbt-row existing-upi" ng-repeat="method in stored" ng-class="{'selected' : $parent.model.selectedUpiId === method.id}">
                        <td class="payment-method-paypalbt-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="model.selectedUpiId"/>
                        </td>
                        <td class="payment-method-paypalbt-cell">
                            {{method.source}}
                        </td>
                    </tr>

                    <tr class="payment-method-paypalbt-row" ng-class="{'selected' : model.selectedUpiId === 0, 'add-new-account': !isLoggedIn()}">
                        <td class="payment-method-paypalbt-cell"  ng-if="(stored.length > 0) && isLoggedIn()">
                            <input type="radio" name="stored_method" value="0" ng-model="model.selectedUpiId"/>
                        </td>
                        <td class="payment-method-paypalbt-cell" ng-attr-colspan="{{!isLoggedIn() ? '2' : '1'}}">
                            <div ng-show="isContainerVisible()" id="paypal-bt-button"></div>
                            <div class="add-new-account-msg" ng-show="!isLoggedIn() && stored.length"><t>Add new PayPal account</t></div>
                            <div class="add-new-account-msg" ng-show="!isLoggedIn() && !stored.length"><t>Use your <strong>PayPal account</strong> to pay for your purchases and take the protection of Braintree with you</t></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div  ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- apple-pay-through-braintree-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/apple-pay-through-braintree-form-component.html">
    <div ng-show="isApplePayBtShown()">
        <div ng-if="isPasswordlessCheckout() && !isPaymentState()">
            <button ng-click="openPasswordLessApplePay()" class="apple-pay-button" ng-class="{'apple-pay-button--disabled' : !isApplePayBtEnabled}" data-e2e="applePayBTBtn">
                <span ng-show="!zeroTerm">
                    <span><t>Buy with</t></span>
                    <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
                    </svg>
                </span>
                <span ng-show="zeroTerm"><t>Complete</t></span>
            </button>
        </div>
        <div ng-if="!isPasswordlessCheckout() || isPaymentState()" class="apple-pay-bt-form row">
            <div class="payment-system-condition row">
                <div ng-if="stored.length">
                    <span class="paypal-express-checkout-title">
                        <h4><t>Your Apple Pay cards</t></h4>
                    </span>
                    <table class="payment-method-paypal-express-checkout">
                        <tr class="payment-method-paypal-express-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : selectedPaymentMethod.id === upi.id}">
                            <td class="payment-method-paypal-express-checkout-cell">
                                <input type="radio" id="{{upi.id}}" name="stored_method" ng-change="changePaymentMethod(upi)" ng-model="selectedPaymentMethod.id" ng-value="upi.id"  />
                            </td>
                            <td class="payment-method-paypal-express-checkout-cell">
                                <div class="overflow-hidden">
                                    <label for="{{upi.id}}">
                                        {{upi.source}}
                                        <div ng-if="upi.isNew">
                                            <span class="float-left"><t>Your new credit card</t></span>
                                            <button ng-click="cancelNewAccount()" class="paypal-express-checkout-cancel-button"><t>Cancel</t></button>
                                        </div>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-show="!isPaymentAuthorized()">
                    <div class="add-new-account-msg w385"><t>Add Apple Pay as a payment account to pay for your purchases and take the protection of Braintree with you</t></div>
                    <a ng-click="openApplePayWindow()" class="button big applepay-add-new-card" href="javascript:void(0)" ng-class="{'disabled': isApplePayBtEnabled !== true}">&nbsp;</a>
                </div>
                <div ng-show="isPaymentAuthorized()"><t>Your payment verified. Click on the button below to proceed.</t></div>
            </div>
        </div>
        <div ng-if="canContinue()" ng-transclude></div>
    </div>
</script>

<!-- dwolla-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/dwolla-form-component.html">
    <div ng-show="isPaymentMethod(DWOLLA)">

        <div class="dwolla-payment-form row">
            <div id="dwolla_login" ng-show="!dwolla.sources.length && dwolla.loginUrl">
                <div class="dwolla-login overflow-hidden mb20">

                    <div class="add-credit-card-wrapper"><t>Please log in first.</t></div>
                    <div class="payment-system-login-widget">
                        <div id="dwolla_login_button" class="login-dwolla-button" title="Login with Dwolla"></div>
                    </div>
                    <div class="payment-system-brief-section">
                        <t>Use your Dwolla account to pay for your purchases and take the protection of Amazon with you</t>
                    </div>

                </div>
            </div>
            <div id="dwolla_wallet" ng-show="dwolla.sources.length">
                <div class="dwolla-wallet">
                    <div class="add-credit-card-wrapper">
                        <label for="dwolla_source"><t>Where to pay from?</t></label>
                    </div>
                    <table class="table-form-inline dwolla-table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <select id="dwolla_source"
                                        ng-model="dwolla.source"
                                        ng-options="source.name for source in dwolla.sources"
                                        ng-change="dwolla.pin = dwolla.source.pin"
                                        ng-required
                                        >
                                </select>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input id="dwolla_pin" class="flat" type="password" ng-required ng-model="dwolla.pin" placeholder="{{'Dwolla PIN' | t}}"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <div ng-if="!dwolla.isRecurring">

                                <label>
                                    <input id="dwolla_store_pin" type="checkbox" ng-required ng-model="dwolla.storePin"/>
                                    <t>Remember my PIN for future purchase</t>
                                </label>

                            <!--<label for="dwolla_store_pin">Remember my PIN for future purchase</label>-->
                            <!--<input id="dwolla_store_pin" type="checkbox" ng-required ng-model="dwolla.storePin"/>-->
                        </div>
                        <div ng-if="dwolla.isRecurring">
                            <t>Your PIN will be stored for recurring payments</t>
                            <input type="hidden" ng-required ng-model="dwolla.storePin" value="true"/>
                        </div>
                    </div>
                </div>
                <div ng-transclude></div>
            </div>
        </div>
    </div>
</script>


<!-- amazon-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/amazon-form-component.html">
    <div ng-show="isPaymentMethod(AMAZON)">
        <div class="amazon-payment-form row">
            <div id="amazon_wallet">
                <div id="loading" class="amazon-loading" ng-show="amazon.loading && !amazon.techError">
                    <div class="add-credit-card-wrapper"><t>Please wait while your request is being processed...</t></div>

                    <div id="progress_bar"></div>
                </div>
                <div id="tech_error_message" class="amazon-tech-error-message" ng-show="amazon.techError">
                    <h3><t>Error contacting Amazon Payment Services.</t></h3>

                    <p><t>Please choose another payment method.</t></p>
                </div>
                <div id="login_container" class="payment-system-condition amazon-login overflow-hidden" ng-show="!amazon.loggedIn && !amazon.techError && !amazon.loading">

                    <div id="button_section">
                        <div class="add-credit-card-wrapper"><t>Please log in first.</t></div>

                        <div id="login_widget" class="payment-system-login-widget">
                        </div>
                    </div>
                    <div id="brief_section" class="payment-system-brief-section">
                        <t>Use your Amazon Payments account to pay for your purchases and take the protection of Amazon with you.</t>
                    </div>

                </div>
                <div id="wallet_container" ng-show="amazon.loggedIn && !amazon.techError && !amazon.loading">
                    <div class="amazon-wallet">
                        <div id="wallet" class="mb20">
                            <div id='wallet_widget'></div>
                        </div>

                        <div id='consent_widget' ng-show="amazon.isRecurring"></div>
                    </div>
                    <div ng-transclude></div>
                </div>
            </div>

        </div>
    </div>
</script>

<!-- coinbase-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/coinbase-form-component.html">
    <div ng-show="isPaymentMethod(COINBASE)">

        <div class="coinbase-payment-form row">
            <div class="payment-system-condition coinbase-login">
                <t>Click to button below to pay with your <strong>Coinbase</strong> account.</t>
            </div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- mock-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/mock-form-component.html">
    <div ng-show="isPaymentMethodSelected() && isMockUsed()">

        <div class="mock-payment-form row">
            <div class="payment-system-condition">
                <t>Because you are checking out in our sandbox environment, we will simulate
                the payment process for easy testing.  Click the complete button below
                to simulate a purchase.</t>
            </div>
        </div>
        <div class="mock-payment-form row">
            <div class="payment-system-condition">
                <input type="checkbox" ng-model="mock.asyncProcessing"/> Emulate asynchronous processing
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>

<!-- zero-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/zero-form-component.html">
    <div ng-show="isPaymentMethod(ZERO)">
        <div class="zero-payment-form row">
            <div class="payment-system-condition row">
                <t>Click on the button below to proceed further without any charges.</t>
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>

<!-- pass-through-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/pass-through-form-component.html">
    <div class="pass-through-payment-form row">
        <div class="payment-system-condition row">
            <t>Click on the button below to proceed further without any charges.</t>
        </div>
    </div>
    <div ng-transclude></div>
</script>

<!-- worldpay-rxml-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-rxml-form-component.html">
    <div ng-show="isSupportedWorldpayCcMethod()">
        <div class="worldpay-payment-form row">
            <div class="errors"></div>

            <div class="worldpay-accounts">
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_PAYPAL)"><t>Your PayPal accounts</t></span>
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_IDEAL)"><t>Your iDeal accounts</t></span>
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_ELV)"><t>Your ELV accounts</t></span>

                <table class="worldpay-accounts-list worldpay-accounts-list-paypalideal" ng-if="upis.length">
                    <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                        <td class="worldpay-accounts-list-cell cell-checkbox-paypal">
                            <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                        </td>
                        <td class="worldpay-accounts-list-cell cell-logo-paypal">
                            <div class="payment-method-{{upi.identifier}}"></div>
                        </td>
                        <td class="worldpay-accounts-list-cell cell-exp-paypal">
                            <t>Expires</t> {{upi.expire}}
                        </td>
                    </tr>
                </table>

                <div ng-if="isPaymentMethod(WORLDPAY_PAYPAL) && upis.length === 0">
                    <div class="pm-login-button paypal-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_ELV) && upis.length === 0">
                    <div class="pm-login-button elv-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>Add new ELV account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_IDEAL) && upis.length === 0">
                    <div class="pm-login-button ideal-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>We're going to redirect you to iDeal<br>so you can complete your purchase</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_PAYPAL) && upis.length > 0">
                    <div class="pm-login-button paypal-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_ELV) && upis.length > 0">
                    <div class="pm-login-button elv-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>Add new ELV account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_IDEAL) && upis.length > 0">
                    <div class="pm-login-button ideal-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>We're going to redirect you to iDeal<br>so you can complete your purchase</t></div>
                </div>

                <div class="worldpay-remember-account">
                    <div class="custom-checkbox">
                        <input type="checkbox" id="savecc" ng-model="worldpay.saveCreditCard" ng-click="saveCC()"/>
                        <label for="savecc"><t>Remember for future payments</t></label>
                    </div>
                </div>
            </div>

            <div consents-list></div>
        </div>
        <div ng-if="(canContinue() && upis.length > 0) || isPreviewMod()" ng-transclude></div>
    </div>
</script>

<!-- worldpay-hpp-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-hpp-form-component.html">
    <div ng-show="isPaymentMethod(WORLDPAY_HPP)">

        <div class="row" ng-show="!showUpis">
            <div class="worldpay-accounts">
                <div class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="showCreditCards()" ng-show="!showUpis && upis.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                </div>
            </div>
        </div>

        <div id="worldpay_hpp_placeholder" ng-show="!showUpis && !canContinue()"></div>

        <div class="row">
            <div desktop class="worldpay-payment-form">
                <div class="errors"></div>

                <div class="worldpay-accounts">

                    <div class="add-credit-card-wrapper">
                        <span ng-if="showUpis"><t>Your credit and debit cards</t></span>
                        <a href="javascript:void(0)" class="add-credit-card" ng-show="upis.length > 0 && showUpis" ng-click="addNewCard(initArgs)">
                            + <t>Add a new card</t>
                        </a>
                    </div>

                    <table class="worldpay-accounts-list worldpay-accounts-list-cc" ng-if="showUpis">
                        <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                            <td class="worldpay-accounts-list-cell cell-checkbox">
                                <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-upiid">
                                <div class="credit-card-{{upi.shortName}}"></div>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-type">
                                {{upi.type}}
                            </td>
                            <td class="worldpay-accounts-list-cell cell-ending">
                                <t>ending in</t> {{upi.ending_in}}
                            </td>
                            <td class="worldpay-accounts-list-cell cell-exp">
                                <t>Expires</t> {{upi.expires}}
                            </td>
                        </tr>
                    </table>

                    <div ng-show="!showUpis" class="worldpay-remember-account">
                        <div class="custom-checkbox">
                            <input type="checkbox" id="savecc-wp" ng-model="worldPayHpp.saveCreditCard" ng-click="saveCCHpp()"/>
                            <label for="savecc-wp"><t>Remember my card for future payments</t></label>
                        </div>
                    </div>
                </div>
            </div>

            <div mobile class="worldpay-payment-form">
                <div class="errors"></div>

                <div class="worldpay-accounts">

                    <div class="add-credit-card-wrapper">
                        <div ng-if="showUpis"><t>Your credit and debit cards</t></div>
                        <a href="javascript:void(0)" ng-show="upis.length > 0 && showUpis" ng-click="addNewCard(initArgs)">
                            + <t>Add a new card</t>
                        </a>
                    </div>

                    <table class="worldpay-accounts-list worldpay-accounts-list-cc" ng-if="showUpis">
                        <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                            <td class="worldpay-accounts-list-cell cell-checkbox">
                                <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-upiid">
                                <div class="credit-card-{{upi.shortName}}"></div>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-ending">
                                *{{upi.ending_in}}
                            </td>
                        </tr>
                    </table>

                    <div ng-show="!showUpis" class="worldpay-remember-account">
                        <div class="custom-checkbox">
                            <input type="checkbox" id="savecc-wp-m" ng-model="worldPayHpp.saveCreditCard" ng-click="saveCCHpp()"/>
                            <label for="savecc-wp-m"><t>Remember my card for future payments</t></label>
                        </div>
                    </div>

                    <div ng-show="!showUpis && upis.length > 0" class="worldpay-accounts-action">
                        <a ng-click="showCreditCards()" class="button"><t>Return to saved cards</t></a>
                    </div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue() || isPreviewMod()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- worldpay-cc-token-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-token-form-component.html">
    <div ng-show="isPaymentMethod(WORLDPAY_CC_TOKEN)">

        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4><t>Your credit and debit cards</t></h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        + <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored" ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t> {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>

                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <label class="icon cardholder"></label>

                                    <div class="input ml10">
                                        <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"
                                               required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault" id="remember-my-card" />
                                <label for="remember-my-card"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault" ng-value="true"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-worldpay-cc-token" />
                            <label for="default-payment-method-worldpay-cc-token"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>

            <div consents-list></div>

            <div ng-transclude></div>
        </div>

    </div>
</script>

<!-- spreedly-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/spreedly-form-component.html">

    <div ng-show="isSupportedSpreedlyCcMethod()">
        <div class="row">

            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>

                </div>
                <form class="new-card-form" name="ccForm" role="form" id="spreedly-new-cc-form" method="POST" target="spr_post_frame">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <label class="icon cardholder"></label>

                                    <div class="input">
                                        <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <div id="spreedly-protected-cc-num-placeholder" style="height: 40px;"></div>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <div id="spreedly-protected-ccv-placeholder" style="height: 40px;"></div>
                                    </div>
                                </div>
                            </td>
                            <td ng-if="!isPaymentMethod(SPREEDLY_PAYU_LATAM)" class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat spreedly-input-template" type="text" name="postal_code" placeholder="{{'Postal code' | t}}"
                                               ng-model="input.zipCode"
                                               required/>
                                        <input type="text" class="flat spreedly-input-color-template hidden">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <div ng-if="isPaymentMethod(SPREEDLY_PAYU_LATAM)">
                        <!-- additional spreedly fields -->
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon email"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="email" maxlength="255" placeholder="{{'Email' | t}}" ng-model="credit_card.email"/>
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon phone"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="phoneNumber" maxlength="20" placeholder="{{'Phone' | t}}" ng-model="credit_card.phone_number"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon passport"></label>

                                        <div class="custom-select">
                                            <select class="custom-select__select"
                                                    name="dniType"
                                                    required
                                                    ng-model="credit_card.dniType"
                                                    ng-options="item.name for item in dniTypes track by item.code">
                                                <option disabled value="">{{ 'Identification type' | t}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon number"></label>

                                        <input class="flat spreedly-input-template" required maxlength="20" type="text" name="dniNumber" placeholder="{{'Identification number' | t}}" ng-model="credit_card.dniNumber"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon country"></label>

                                        <div class="custom-select">
                                            <select class="custom-select__select"
                                                    id="country"
                                                    required
                                                    name="country"
                                                    ng-model="credit_card.country"
                                                    ng-options="country.countryName for country in countryList track by country.countryCode">
                                                <option disabled value="">{{ 'Country' | t }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                                <td class="field-card field-card--half" ng-if="initiated">
                                    <div tp-datepicker options="birthDateCalendarOptions" from-date="credit_card.birthDate" to-date="credit_card.birthDate">
                                        <div class="field-wrapper widget-calendar">
                                            <label class="icon bday"></label>
                                            <input required type="date" class="flat spreedly-input-template" name="birthDate" readonly="true" onfocus="this.blur()" placeholder="{{'Birth date' | t}}" ng-model="credit_card.birthDate" date-format="MMM dd, yyyy" autocomplete="off"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon map-pin"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="state" maxlength="40"  placeholder="{{'State' | t}}" ng-model="credit_card.state"/>
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon city"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="city" maxlength="50" placeholder="{{'City' | t}}" ng-model="credit_card.city"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card">
                                    <div class="field-wrapper">
                                        <label class="left-margin"></label>

                                        <input class="flat spreedly-input-template"  required type="text" name="address1" maxlength="100" placeholder="{{'Street 1' | t}}" ng-model="credit_card.address1"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card">
                                    <div class="field-wrapper">
                                        <label class="left-margin"></label>

                                        <input class="flat spreedly-input-template" type="text" name="address2" maxlength="100" placeholder="{{'Street 2' | t}}" ng-model="credit_card.address2"/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <input type="hidden" name="userAgent" id="userAgent" maxlength="1024"/>
                    </div>

                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="cc.store_in_vault" id="remember-my-card-spreedly"/>
                                <label for="remember-my-card-spreedly"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="cc.store_in_vault" ng-value="true"/>
                        </span>
                        <div class="custom-checkbox" ng-if="cc.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-spreedly" />
                            <label for="default-payment-method-spreedly"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                    <input type="hidden" name="payment_method_token" id="payment_method_token" />
                    <input type="hidden" name="cc_masked_number" id="cc_masked_number"/>
                    <input type="hidden" name="cc_type_name" id="cc_type_name"/>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- edgil-payway-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/edgil-payway-provider-form-component.html">
    <div class="edgil-payway-wrapper new-card-form" ng-show="isPaymentMethod(EDGIL_PAYWAY)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>
                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>
                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_month" required/>
                                        <div class="date-slash">/</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat" type="text" name="postal_code" placeholder="{{'Postal code' | t}}"
                                               ng-model="input.zipCode" required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault" id="rermber-my-card1"/>
                                <label for="rermber-my-card1">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-edgil-payway" />
                            <label for="default-payment-method-edgil-payway"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- paypal-express-checkout-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/paypal-express-checkout-provider-form-component.html">
    <div ng-show="isPaymentMethod(PAYPAL_EXPRESS_CHECKOUT)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>
            <div class="paypal-express-checkout-payment-form">
                <div ng-if="paypalFromRedirectLoading">
                    <t>Loading your PayPal account, please wait</t>...
                </div>
                <div ng-hide="paypalFromRedirectLoading">
                    <div ng-if="stored.length">
                        <span class="paypal-express-checkout-title"><t>Your PayPal accounts</t></span>
                        <table class="payment-method-paypal-express-checkout">
                            <tr class="payment-method-paypal-express-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                                <td class="payment-method-paypal-express-checkout-cell">
                                    <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                                </td>
                                <td class="payment-method-paypal-express-checkout-cell" ng-if="!upi.isNew">
                                    {{upi.number}}
                                </td>
                                <td class="payment-method-paypal-express-checkout-cell" ng-if="upi.isNew">
                                    <div class="paypal-express-checkout-loggedin">
                                        <span class="paypal-express-checkout-name"><t>PayPal</t></span>
                                        <span class="paypal-express-checkout-email">{{upi.number}}</span>
                                        <button ng-click="cancelNewAccount()" class="paypal-express-checkout-cancel-button"><t>Cancel</t></button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div ng-if="!data.newUpi">
                        <div class="pm-login-button paypal-login-button" ng-click="addNewAccount()"></div>
                        <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                    </div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- eigen-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/eigen-provider-form-component.html">
    <div class="eigen-wrapper new-card-form" ng-show="isPaymentMethod(EIGEN)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <label class="icon cardholder"></label>

                                    <div class="input">
                                        <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>
                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>
                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_month" required/>
                                        <div class="date-slash">/</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat" type="text" name="postal_code" placeholder="{{'Postal code' | t}}"
                                               ng-model="input.zipCode" required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <span>
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault" ng-value="true"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-eigen" />
                            <label for="default-payment-method-eigen"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>

            <div consents-list></div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-cash-form-component.html">
    <div ng-if="isPaymentMethod(OPENPAY_CASH)">
        <div class="openpay-cash-payment-form row">
            <h4><t>Please remember, subscriptions paid for in cash are not eligible for refunds</t></h4>
            <h5 class="openpay-cash-payment-subtitle"><t>Instructions</t></h5>
            <ol class="openpay-cash-payment-instructions-list">
                <li><t>Print the barcode</t></li>
                <li><t>Bring it to a participating store (<a href="https://www.openpay.mx/tiendas-de-conveniencia.html" target="_blank">click here</a> for a list of participating stores)</t></li>
                <li><t>Present the barcode at the checkout counter</t></li>
                <li><t>Pay for your subscription in cash</t></li>
                <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours</t></li>
            </ol>
            <p class="openpay-cash-payment-instructions-paragraph"><t>You may check the status of your access by going to 'My Account' and clicking on the 'Bills' tab.</t></p>
            <div class="openpay-cash-payment-barcode-example">
                <span class="openpay-cash-payment-barcode-example-text"><t>Barcode example</t></span>
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-bill-controls.html">
    <div class="openpay-cash-receipt-links">
        <a class="button big" id="openpay-download-bill" ng-click="downloadBill(billUrl)" href="javascript:void(0);"><t>Print now</t></a>
        <a class="button big" id="openpay-resend-bill" ng-click="resendBill(billId)" href="javascript:void(0);"><t>Resend via email</t></a>
    </div>
    <div class="openpay-cash-receipt-resend-message" ng-if="isBillResent">
        <t>Your document will be sent in a few minutes. Check your mail soon.</t>
    </div>
</script>

<!-- payment-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/payment-form-component.html">

    <div ng-show="!isSelectedTermLocked()">
        <div ng-show="isPaymentMethodRequired()">
            <div billing-country></div>

            <div ng-show="canSelectPaymentMethod()">
                <div desktop>
                    <div payment-method-selector-component></div>
                </div>
                <div mobile>
                   <h4 ng-hide="isPaymentMethodSelected()" style="padding: 20px 20px 0;">
                            <t>Select a payment method</t>
                        </h4>
                    <div payment-method-selector-component ng-hide="isPaymentMethodSelected()"></div>
                </div>
            </div>

            <div ng-show="isPaymentMethodSelected()">

                <div mobile>
                    <div class="back-to-payment-methods"
                         ng-show="isPaymentMethodSelected() && canSelectPaymentMethod()"
                         ng-click="resetPaymentSelection()">
                        <h4>
                            <t>Select a payment method</t>
                        </h4>
                    </div>
                </div>

                <new-flow-components-c-h ng-if="hasNewFlow()"
                                         payment-source="flags.selectedPaymentMethod.id"></new-flow-components-c-h>

                <div class="new-card-form" ng-show="!hasNewFlow()">
                    <div ng-if="isPaymentMethod(CREDIT_CARD)">
                        <div cc-form-component>
                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>

                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(PAYPAL)">
                        <div paypal-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Continue to PayPal' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Continue to PayPal' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DWOLLA)">
                        <div dwolla-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(AMAZON)">
                        <div amazon-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(COINBASE)">
                        <div coinbase-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Continue to Bitcoin' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Continue to Bitcoin' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethodSelected() && isMockUsed()">
                        <div mock-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="hidden" ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(PAYPAL_BT)">
                        <div paypal-through-braintree-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()"
                                     class="complete-purchase-button paypal-throught-braintree" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()"
                                     class="complete-purchase-button paypal-throught-braintree" complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(APPLE_PAY_BT)">
                        <div apple-pay-through-braintree-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isSupportedWorldpayCcMethod()">
                        <div worldpay-rxml-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" complete-purchase-button
                                     title="Complete Purchase"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(WORLDPAY_HPP)">
                        <div worldpay-hpp-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" complete-purchase-button
                                     title="Complete Purchase"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(WORLDPAY_CC_TOKEN)">
                        <div worldpay-token-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isSupportedSpreedlyCcMethod()">
                        <div spreedly-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EDGIL_PAYWAY)">
                        <div edgil-payway-provider-form-component>
                            <div consents-list></div>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(PAYPAL_EXPRESS_CHECKOUT)">
                        <div paypal-express-checkout-provider-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EIGEN)">
                        <div eigen-provider-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OPENPAY_CASH)">
                        <div openpay-cash-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_MULTIBANCO)">
                        <div easypay-multibanco-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_MBWAY)">
                        <div easypay-mbway-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_DIRECT_DEBIT)">
                        <div easypay-direct-debit-provider-form-component is-valid="$isEasyPayDDValid">
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}" is-disabled="!$isEasyPayDDValid"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_BOLETO)">
                        <div easypay-boleto-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Next' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Next' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(KLARNA)">
                        <div klarna-form-component>
                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Next' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Next' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OBI)">
                        <div obi-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OBI_PAYPAL)">
                        <div obi-paypal-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DATATRANS)">
                        <div datatrans-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DATATRANS_POSTFINANCE)">
                        <div datatrans-postfinance-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div ng-if="isPaymentMethod(ZERO)">
                    <div zero-form-component>

                        <div consents-list></div>
                        <div class="footer-modal">
                            <div class="complete-purchase-button" complete-purchase-button
                                 title="{{'Complete' | t}}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div ng-show="!isPaymentMethodRequired()">
            <div pass-through-form-component>

                <div consents-list></div>
                <div class="footer-modal">
                    <div class="complete-purchase-button" complete-purchase-button
                         title="{{'Complete Purchase' | t}}"></div>
                </div>
            </div>
        </div>

    </div>

</script>


<!-- cc-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/cc-form-component.html">

    <div>

        <div class="row">

            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                       ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr
                            class="payment-method-card-row"
                            ng-repeat="method in cc.stored"
                            ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="method.id === cc.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="method.id === cc.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="3">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                       ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>

                <form class="new-card-form" name="ccForm" role="form">
                    <div ng-show="isBraintreeV3() === true">
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card-number">
                                    <div class="field-wrapper">
                                        <label class="icon card"></label>
                                        <div class="input">
                                            <div id="card-number" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-expiry-month">
                                    <div class="field-wrapper">
                                        <label class="icon expiry"></label>
                                        <div class="input">
                                            <div id="expiration-date" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-cvv">
                                    <div class="field-wrapper">
                                        <label class="icon password"></label>
                                        <div class="input">
                                            <div id="cvv" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-postal-code">
                                    <div class="field-wrapper">
                                        <label class="icon cc-field__icon--zip-code"></label>
                                        <div class="input">
                                            <div id="postal-code" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <table ng-show="isBraintreeV3() !== true" class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month"
                                               placeholder="{{'MM' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year"
                                               placeholder="{{'YY' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}"
                                               maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">


                                    <div class="input ml10">
                                        <input class="flat" type="text" name="postal_code"
                                               placeholder="{{'Postal code' | t}}" ng-model="input.zipCode"
                                               required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card"/>
                                <label for="rermber-my-card"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                   ng-value="true"/>
                        </span>
                        <div class="custom-checkbox apply-this-method" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                                   id="default-payment-method-credit-card"/>
                            <label for="default-payment-method-credit-card">
                                <t>Apply this payment method to all active subscriptions</t>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>

</script>


<!-- payment-method-selector-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/payment-method-selector-component.html">
    <div desktop class="select-payment-options">
        <h4>
            <t>Select a payment method</t>
        </h4>
    </div>
    <div class="payment-options-wrapper">
        <ul class="payment-options {{selectedPaymentMethod.identifier}}">
            <li ng-repeat="pm in paymentMethods">
                <a external-event="paymentselect" external-event-paymentmethod="{{pm.identifier}}"
                        ng-click="selectPaymentMethod(pm)"
                        ng-class="{'payment-method-selected': pm.selected}"
                        class="button pay select-payment {{pm.identifier}}"
                        ng-checked="isPaymentMethod(pm.id)"
                        onclick="setTimeout(function(){if(!angular.element('#view-state2').scope().selectedTerm.forceAutoRenew) {var auto_renew = document.getElementById('auto_renew'); auto_renew.click(); auto_renew.style.visibility = 'hidden'; document.getElementsByClassName('auto-renew-purchase-label')[0].style.visibility = 'hidden';} }, 1000);">
                   
                </a>
            </li>
        </ul>
    </div>
</script>


<!-- pay-what-you-want-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/pay-what-you-want-form-component.html">
    <!--
    Available methods:
        isCustomPrice() - checks if widget is available for selected term
    Available variables (read-only):
         minPriceBase - Minimal allowed amount in base currency.
         maxPriceBase - Maximum allowed amount in base currency.
         currencyBase - Base currency.
         minPrice - Minimum allowed amount in the choosed currency.
         maxPrice - Maximum allowed amount in the choosed currency.
         currency - Choosed currency.
         currencyRate - Rate between choosed and base currency.
         amountBase - Calculated amount in base currency.
         customAmount - Entered amount in the choosed currency.
         loading - Determines if the component is loading initial data.
         validating - Flag determine if the component is in validating state, that means it waits for the server respond.
         validated - Whether amount is already validated, by default it's valid, 'cause the server passes us the correct value.
         validationError - If the amount isn't validated then it contains the last error message.
         applied - Whether this price was applied.
     - ng-model vars
        customAmount
    -->

    <div ng-show="isCustomPrice()" class="custom-price">
            <span>
                <span>
                    <span class="custom-amount-edit custom-amount-edit-input">
                        <input id="custom-price-amount-input"
                               name="custom-amount"
                               ng-change="startValidating()"
                               type="text"
                               ng-model="customAmount"
                               placeholder="{{minPrice}} {{'minimum' | t}}"
                               error-message="field-error"><span class="currency-name">{{currency}}</span>
                    </span>
                    <div class="custom-amount-info">
                        <div>
                            <span class="billing_period"><t>for {{getSelectedTerm().firstPeriod}}</t></span>
                            <span ng-if="getSelectedTerm().isSubscription" class="until"><t>until canceled</t></span>
                        </div>
                    </div>

                    <span ng-show="validating">
                        <!--TODO GIF SPINNER-->
                        </span>
                </span>
            </span>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/billing-country-component.html">
    <div ng-if="isBillingCountryEnabled()" class="billing-country-form">
        <div ng-if="isEuBillingCountryLabel()">
            <h4>
                <t>Country of residence</t>
            </h4>
        </div>
        <div ng-if="isUsBillingCountryLabel()">
            <h4>
                <t>Select your billing country</t>
            </h4>
        </div>

        <div class="billing-country billing">
            <div class="billing-country-group">
                <div
                        class="tp-dropdown__select"
                        tp-country-selector
                        selector-options="selectorOptions"
                        selector-label="{{'Select a country or region' | t}}"
                        dropdown-styles="{width: 320, zIndex: 1004}">
                </div>
            </div>

            <div class="billing-country-group" ng-if="billingConfig.requiredZipCode">
                <input
                        type="text"
                        class=""
                        ng-model='billingConfig.zipCode'
                        ng-change="onZipCodeChanged()"
                        placeholder="{{'Postal code' | t}}">
            </div>
        </div>

        <div ng-if="billingConfig.needResidence">
            <div class="custom-checkbox">
                <input type="checkbox" ng-model="billingConfig.sameResidence" id="same-residence"
                       ng-change="onChangeSameResidence()"/>
                <label for="same-residence">
                    <t>I reside in the same country as my billing address</t>
                </label>
            </div>

            <div ng-if="!billingConfig.sameResidence">
                <div>
                    <h4>
                        <t>Select your billing country</t>
                    </h4>
                </div>

                <div class="billing-country residence">
                    <div class="billing-country-group">
                        <div
                                class="tp-dropdown__select"
                                tp-country-selector
                                selector-options="residenceOptions"
                                selector-label="{{'Select a country or region' | t}}"
                                dropdown-styles="{width: 320, zIndex: 1004}">
                        </div>
                    </div>
                    <div class="billing-country-group" ng-if="billingConfig.residenceRequireZipCode">
                        <input
                                type="text"
                                class=""
                                ng-model='billingConfig.zipCode'
                                ng-change="onZipCodeChanged()"
                                placeholder="{{'Postal code' | t}}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/select-selector.html">
    <div class="tp-dropdown__container">
        <ul class="tp-dropdown__list">
            <li class="tp-dropdown__item tp-dropdown__item_control tp-dropdown__tail tp-dropdown__tail_position_bottom tp-dropdown__tail_position_left tp-dropdown__tail_theme_white">
                <input type="text" class="input-full-width search-query light-blue"
                       ng-change="update()"
                       ng-model="searchItemModel"
                       placeholder="{{'Search...' | t}}">
            </li>
            <li class="tp-dropdown__item tp-dropdown__item_divider"></li>
            <li>
                <div class="tp-dropdown__scrollable-list tp-dropdown__scrollable-list_medium" style="overflow: auto">
                    <div class="tp-dropdown__item" dynamic-html="countryListHtml">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/country-selector.html">
    <span class="ellipsis tp-dropdown__select_auto_width tp-dropdown__item-color blue">
        <span ng-show="selectorOptions.selectorModel.label === '' ">{{selectorLabel}}</span>
        <span ng-show="selectorOptions.selectorModel.label !== '' ">{{selectorOptions.selectorModel.label}}</span>
    </span>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/calling-code-selector.html">
    <span class="ellipsis tp-dropdown__select_auto_width tp-dropdown__item-color">
        <span ng-show="selectorOptions.selectorModel.label === '' || selectorOptions.selectorModel.label === undefined "
              class="placeholder">{{selectorLabel}}</span>
        <span ng-show="selectorOptions.selectorModel.label !== '' ">
            <div class="country-icon country-icon-{{selectorOptions.selectorModel.item.countryCode.toLowerCase()}}"></div> (+{{selectorOptions.selectorModel.item.callingCode}})
        </span>
    </span>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-login.html">
    <div ng-if="!isSingleStepEnabled()" data-e2e="passwordless-login-form">
        <div class="pane"></div>
        <div class="passwordless-login-form">
            <p class="passwordless-login-form-lead">
                <t>Login</t>
            </p>

            <p class="sub-lead">
                <t>Enter your email address</t>
            </p>

            <p class="passwordless-input-group ">
                <input ng-model="data.email"
                       type="text"
                       autofocus
                       class="passwordless-input without-outline"
                       ng-class="{empty: !data.email.length}"
                       data-e2e="email-input"
                       ng-enter="loginUser()"
                >
                <span class="passwordless-placeholder"><i class="icon icon-email"></i><t>email</t></span>
                <span ng-if="data.error" class="error-message" data-e2e="error-message">{{data.error}}</span>
            </p>
            <div ng-if="passwordlessCaptchaEnabled">
                <div class="re-captcha login re-captcha--centered"
                     re-captcha
                     key="{{ recaptchaKey }}"
                     on-resolve="onCaptchaResolve(response)"
                     on-ready="onCaptchaReady(id)"
                     show-reset-button="true"
                >
                </div>
            </div>
            <p>
                <button class="btn prime"
                        ng-click="loginUser()"
                        data-e2e="next-btn"
                        ng-disabled="!data.email.length"
                >
                    <t>Next</t>
                </button>
            </p>
        </div>
    </div>
    <div ng-if="isSingleStepEnabled()"
         data-e2e="passwordless-login-form"
         class="passwordless-login-single-step-form"
    >
        <h4>
            <t>Please enter your email address</t>
        </h4>
        <table class="table-form-inline passwordless-login-single-step-form-email">
            <tr>
                <td>
                    <div class="field-wrapper">
                        <label for="passwordless-login-single-step-form-email" class="icon email"></label>
                        <div class="input">
                            <input ng-model="data.email"
                                   type="text"
                                   class="passwordless-login-single-step-form-input flat"
                                   ng-class="{empty: !data.email.length}"
                                   data-e2e="email-input"
                                   placeholder="{{ 'Email' | t }}"
                                   id="passwordless-login-single-step-form-email">
                        </div>
                    </div>
                    <div ng-if="passwordlessCaptchaEnabled">
                        <div class="re-captcha login"
                             re-captcha
                             key="{{ recaptchaKey }}"
                             on-resolve="onCaptchaResolve(response)"
                             on-ready="onCaptchaReady(id)">
                        </div>
                    </div>

                </td>
            </tr>
        </table>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-single-step-captcha.html">
    <div ng-if="isCaptchaVerificationRequired()" data-e2e="passwordless-single-step-captcha" class="passwordless-single-step-captcha">
        <div class="re-captcha login"
             re-captcha
             key="{{ recaptchaKey }}"
             on-resolve="onCaptchaResolve(response)"
             on-ready="onCaptchaReady(id)">
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/canadian-taxes.html">
    <div class="canadian-taxes" ng-if="input.canadianTaxes.length ">
        <div ng-repeat="canadianTax in input.canadianTaxes" class="tax {{canadianTax.name}}">
            <div class="name">{{ canadianTax.name }}</div>
            <div class="amount"><b>{{ canadianTax.amount }}</b></div>
        </div>
        <div class="tax total">
            <div class="name">
                <t>Total</t>
            </div>
            <div class="amount"><b>{{input.confirmated.taxAmount}}</b></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/canadian-taxes-hint.html">
    <span class="taxes-info-tooltip"
          ng-if="billingConfig.countryCode === 'CA' && isVatCanadaEnabled(interval) && interval.tax">
        <span class="icon-info-dark"></span>
        <span class="taxes-info-tooltip-body">
            <span ng-if="interval.hstRate">HST {{ interval.hstAmount }} </span>
            <span ng-if="interval.pstRate && interval.hstRate">&nbsp;+&nbsp;</span>
            <span ng-if="interval.pstRate">PST {{ interval.pstAmount }} </span>
            <span ng-if="interval.qstRate && (interval.hstRate||interval.pstRate)">&nbsp;+&nbsp;</span>
            <span ng-if="interval.qstRate">QST {{ interval.qstAmount }} </span>
            <span ng-if="interval.gstRate && (interval.hstRate||interval.pstRate ||interval.qstRate)">&nbsp;+&nbsp;</span>
            <span ng-if="interval.gstRate">GST {{ interval.gstAmount }} </span>
        </span>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-login.html">
    <div ng-if="!isSingleStepEnabled()" data-e2e="passwordless-login-form">
        <div class="pane"></div>
        <div class="passwordless-login-form">
            <p class="passwordless-login-form-lead">
                <t>Login</t>
            </p>

            <p class="sub-lead">
                <t>Enter your email address</t>
            </p>

            <p class="passwordless-input-group ">
                <input ng-model="data.email"
                       type="text"
                       autofocus
                       class="passwordless-input without-outline"
                       ng-class="{empty: !data.email.length}"
                       data-e2e="email-input"
                       ng-enter="loginUser()"
                >
                <span class="passwordless-placeholder"><i class="icon icon-email"></i><t>email</t></span>
                <span ng-if="data.error" class="error-message" data-e2e="error-message">{{data.error}}</span>
            </p>
            <div ng-if="passwordlessCaptchaEnabled">
                <div class="re-captcha login re-captcha--centered"
                     re-captcha
                     key="{{ recaptchaKey }}"
                     on-resolve="onCaptchaResolve(response)"
                     on-ready="onCaptchaReady(id)"
                     show-reset-button="true"
                >
                </div>
            </div>
            <p>
                <button class="btn prime"
                        ng-click="loginUser()"
                        data-e2e="next-btn"
                        ng-disabled="!data.email.length"
                >
                    <t>Next</t>
                </button>
            </p>
        </div>
    </div>
    <div ng-if="isSingleStepEnabled()"
         data-e2e="passwordless-login-form"
         class="passwordless-login-single-step-form"
    >
        <h4>
            <t>Please enter your email address</t>
        </h4>
        <table class="table-form-inline passwordless-login-single-step-form-email">
            <tr>
                <td>
                    <div class="field-wrapper">
                        <label for="passwordless-login-single-step-form-email" class="icon email"></label>
                        <div class="input">
                            <input ng-model="data.email"
                                   type="text"
                                   class="passwordless-login-single-step-form-input flat"
                                   ng-class="{empty: !data.email.length}"
                                   data-e2e="email-input"
                                   placeholder="{{ 'Email' | t }}"
                                   id="passwordless-login-single-step-form-email">
                        </div>
                    </div>
                    <div ng-if="passwordlessCaptchaEnabled">
                        <div class="re-captcha login"
                             re-captcha
                             key="{{ recaptchaKey }}"
                             on-resolve="onCaptchaResolve(response)"
                             on-ready="onCaptchaReady(id)">
                        </div>
                    </div>

                </td>
            </tr>
        </table>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-single-step-captcha.html">
    <div ng-if="isCaptchaVerificationRequired()" data-e2e="passwordless-single-step-captcha"
         class="passwordless-single-step-captcha">
        <div class="re-captcha login"
             re-captcha
             key="{{ recaptchaKey }}"
             on-resolve="onCaptchaResolve(response)"
             on-ready="onCaptchaReady(id)">
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/obi-form-component.html">
  <div ng-if="isPaymentMethod(OBI)">
    <div class="obi-payment-form row">

      <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
        <div class="add-credit-card-wrapper">
          <h4>
            <t>Your credit and debit cards</t>
          </h4>
          <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
             ng-show="cc.stored.length > 0">
            +
            <t>Add a card</t>
          </a>
        </div>
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
            </td>
            <td class="payment-method-card-cell">
              <div class="credit-card-{{method.identifier}}"></div>
            </td>
            <td class="payment-method-card-cell">
              <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-expiration">
              <t>Expires in</t>
              {{method.expire_month}}/{{method.expire_year}}
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-default-payment">
              <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
              <button ng-hide="method.id === cc.defaultPaymentMethodId"
                      ng-click="setAsDefaultPaymentMethod(method)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>

      <div mobile class="cc_stored_cards" ng-show="cc.initiated">
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew !== true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                     ng-click="$parent.cc.payWithNew = false"/>
            </td>
            <td class="payment-method-card-cell">
              <div class="credit-card-{{method.identifier}}"></div>
            </td>
            <td class="payment-method-card-cell">
              <div>*{{method.ending_in}}</div>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-default-payment">
              <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
              <button ng-hide="method.id === cc.defaultPaymentMethodId"
                      ng-click="setAsDefaultPaymentMethod(method)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
          <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
            </td>
            <td class="payment-method-card-cell" colspan="2">
              <t>Add a new card</t>
            </td>
          </tr>
        </table>
      </div>

      <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
        <div desktop class="go-back-to-cards-wrapper">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
             ng-show="cc.stored.length > 0">
            <t>Return to saved cards</t>
          </a>
          <h4>
            <t>Add a new credit or debit card</t>
          </h4>
        </div>
        <div class="new-card-form">
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card-number">
                <div class="field-wrapper">
                  <label class="icon card"></label>
                  <div id="obi-number" class="obick-card-number input"></div>
                </div>
              </td>
              <td class="field-card-expiry-month">
                <div class="field-wrapper">
                  <label class="icon expiry"></label>
                  <div class="input whitespace-nowrap">
                    <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                           maxlength="2" ng-model="credit_card.expire_month" required/>
                    <div class="date-slash">/</div>
                    <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                           maxlength="2" ng-model="credit_card.expire_year" required/>
                  </div>
                </div>
              </td>
              <td class="field-card-cvv">
                <div class="field-wrapper">
                  <label class="icon password"></label>
                  <div id="obi-cvv" class="obick-cvv input"></div>
                </div>
              </td>
              <td class="field-card-postal-code">
                <div class="field-wrapper">
                  <div class="input ml10">
                    <input class="flat" type="text" name="cardZipCode" required
                           placeholder="{{'Postal code' | t}}" ng-model="credit_card.cardZipCode"/>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon cardholder"></label>
                  <input class="flat" required type="text" name="first-name" maxlength="255"
                         placeholder="{{'First name' | t}}" ng-model="credit_card.first_name"/>
                </div>
              </td>

              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon cardholder"></label>
                  <input class="flat" required type="text" name="last-name" maxlength="255"
                         placeholder="{{'Last name' | t}}" ng-model="credit_card.last_name"/>
                </div>
              </td>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon email"></label>
                  <input class="flat" required type="text" name="email" maxlength="255"
                         placeholder="{{'Email' | t}}" ng-model="credit_card.email"/>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card field-card--half">
                <div class="billing-country">
                  <div class="billing-country-group">
                    <div>
                      <div class="tp-dropdown__select"
                           tp-country-selector
                           selector-options="countrySelectorOptions"
                           default-country="defaultCountryCode"
                           click-on-select="selectCountry"
                           selector-label="{{'Select a country or region' | t}}"
                           dropdown-styles="{width: 320, zIndex: 1004}">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="field-card field-card--half">
                <div ng-if="!hasStates()" class="field-wrapper">
                  <label class="icon map-pin"></label>
                  <input class="flat" required type="text" name="state" maxlength="40"
                         placeholder="{{'State' | tc:'checkout.platform'}}" ng-model="state.billingData.stateCode"/>
                </div>
                <div ng-if="hasStates()" class="billing-country">
                  <div class="billing-country-group">
                    <div>
                      <div class="tp-dropdown__select"
                           tp-state-selector
                           selector-options="stateSelectorOptions"
                           click-on-select="selectState"
                           selector-label="{{'Select a state' | tc:'checkout.platform'}}"
                           dropdown-styles="{width: 320, zIndex: 1004}">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card field-card--half">
                <div class="field-wrapper">
                  <label class="icon city"></label>
                  <input class="flat" required type="text" name="city" maxlength="50"
                         placeholder="{{'City' | t}}" ng-model="credit_card.city"/>
                </div>
              </td>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class=" icon road"></label>
                  <input class="flat" required type="text" name="address1" maxlength="100"
                         placeholder="{{'Street' | tc:'checkout.platform'}}" ng-model="credit_card.address1"/>
                </div>
              </td>

            </tr>
          </table>
          <div class="payment-system-condition">
            <span ng-if="!isSubscription()">
              <div class="custom-checkbox">
                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                       id="remember-my-card-obi"/>
                <label for="remember-my-card-obi">
                  <t>Remember my card for future payments</t>
                </label>
              </div>
            </span>
            <span ng-if="isSubscription()">
              <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
            </span>
            <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
              <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-obi" />
              <label for="default-payment-method-obi"><t>Apply this payment method to all active subscriptions</t></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div consents-list></div>
    <div ng-transclude></div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/datatrans-form-component.html">
    <div class="datatrans new-card-form" ng-show="isPaymentMethod(DATATRANS)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button">
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <div>
                        <t>Add a new credit or debit card</t>
                    </div>
                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>
                                    <div id="datatrans-card-number" class="datatrans-card-number input"></div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>
                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_month" required/>
                                        <div class="date-slash">/</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>
                                    <div id="datatrans-cvv" class="datatrans-cvv input"></div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat" type="text" name="cardZipCode" required
                                               placeholder="{{'ZIP / Postal code' | tc:'checkout.platform'}}" ng-model="credit_card.cardZipCode"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card-datatrans"/>
                                <label for="remember-my-card-datatrans">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-datatrans" />
                            <label for="default-payment-method-datatrans"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>

            <div ng-transclude></div>
        </div>
        <div id="datatrans-input-cardnumber-cvv-common-style">
            font-family: "Graphik Web Regular", Helvetica, Arial, sans-serif;
            font-size: 16px;
            font-weight: normal;
            box-sizing: border-box;
            color: #333;
            background-color: #ffffff;
            transition: border linear 0.1s, box-shadow linear 0.1s;
            width: 100%;
            height: 40px;
        </div>
        <div id="datatrans-input-cardnumber-cvv-error-style">border: 1px solid #f00</div>
    </div>
</script>
<!-- klarna-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/klarna-provider-form-component.html">
  <div ng-if="isPaymentMethod(KLARNA)">
    <div class="klarna-provider">
      <div class="errors"></div>
      <div class="klarna-payment-form" ng-class="{'klarna-payment-form--only': isTheOnlyPaymentMethod() && !isBillingCountryEnabled()}">

        <!--Country selector-->
        <div ng-hide="isBillingCountryEnabled()"
             class="billing-country">
          <div class="billing-country-group">
            <div class="heading-4">
              <t>Select your billing country</t>:
            </div>
            <div>
              <div
                class="tp-dropdown__select"
                tp-country-selector
                data-e2e="countrySelectorByKlarna"
                selector-options="countrySelectorOptions"
                default-country="defaultCountryCode"
                selector-label="{{'Select a country or region' | t}}"
                dropdown-styles="{width: 320, zIndex: 1004}">
              </div>
            </div>
          </div>
        </div>

        <div class="klarna-payment-buttons">
          <div class="klarna-button-wrapper" ng-repeat="paymentMethod in paymentMethods()">
            <button id="paymentMethod-{{paymentMethod.identifier}}"
                    class="klarna-button klarna-button--{{paymentMethod.identifier}}"
                    ng-class="{'klarna-button--selected': state.billingData.selectedPaymentMethod === paymentMethod.identifier}"
                    ng-click="selectPaymentMethod(paymentMethod.identifier)">
              <span class="klarna-button-payment-name
                           klarna-button-payment-name--{{paymentMethod.identifier}}
                           heading-4">{{paymentMethod.name}}</span>
            </button>
          </div>
        </div>

        <div ng-show="paymentMethods().length > 0">
          <div class="klarna-iframe-container" id="klarna_container"></div>
        </div>

      </div>
      <div ng-transclude></div>
    </div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/datatrans-postfinance-form-component.html">
    <div ng-show="isPaymentMethod(DATATRANS_POSTFINANCE)">
        <div class="postfinance-payment-form row">
            <div class="errors"></div>
            <div class="postfinance-checkout-payment-form">
                <div ng-if="stored.length">
                    <span class="postfinance-checkout-title"><t context="checkout.platform">Your Postfinance cards</t></span>
                    <table class="payment-method-postfinance-checkout">
                        <tr class="payment-method-postfinance-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                            <td class="payment-method-postfinance-checkout-cell">
                                <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                            </td>
                            <td class="payment-method-postfinance-checkout-cell" ng-if="!upi.isNew">
                                {{upi.number}}
                            </td>
                            <td class="payment-method-postfinance-checkout-cell" ng-if="upi.isNew">
                                <div class="postfinance-checkout-loggedin">
                                    <span class="postfinance-checkout-payerInfo">{{upi.payerInfo}}</span>
                                    <button ng-click="cancelNewAccount()" class="postfinance-checkout-cancel-button"><t>Cancel</t></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-if="!data.newUpi">
                    <div class="pm-login-button postfinance-login-button" ng-click="startWithNewAccount()"></div>
                    <div class="add-new-account-msg"><t context="checkout.platform">Add new PostFinance card</t></div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>

    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-bill-controls.html">
  <div class="easypay-cash-receipt-links">
    <a class="button big" id="easypay-open-bill" href="{{billUrl}}" target="_blank">{{openBillTitle}}</a>
  </div>
</script><!-- easypay-direct-debit-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-direct-debit-provider-form-component.html">
  <div ng-show="isPaymentMethod(EASYPAY_DIRECT_DEBIT)">
    <div class="easypay-payment-form row">
      <div class="errors"></div>
      <div class="easypay-direct-debit-payment-form">
        <div ng-if="stored.length">
          <span class="easypay-direct-debit-title"><t>Your Direct Debit agreements</t></span>
          <table class="payment-method-easypay-direct-debit">
            <tr class="payment-method-easypay-direct-debit-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
              <td class="payment-method-easypay-direct-debit-cell">
                <input type="radio" id="radio-{{upi.token.slice(-4)}}" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
              </td>
              <td class="payment-method-easypay-direct-debit-cell" ng-if="!upi.isNew">
                <label for="radio-{{upi.token.slice(-4)}}"><t>Agreement *</t>{{upi.token.slice(-4)}}</label>
              </td>
              <td class="payment-method-easypay-direct-debit-cell" ng-if="upi.isNew">
                <label class="inline-label" for="radio-{{upi.token.slice(-4)}}">
                  <div class="easypay-direct-debit-loggedin">
                    <span class="easypay-direct-debit-agreement"><t><b>New</b> agreement *</t>{{upi.token.slice(-4)}}</span>
                  </div>
                </label>
                <button ng-click="cancelNewAccount()" class="easypay-direct-debit-cancel-button" id="cancel-direct-debit-account"><t>Cancel</t></button>
              </td>
            </tr>
          </table>
        </div>

        <div ng-if="!data.newUpi">
          <div class="table-cell table-cell--centered">
            <a id="add-direct-debit-account" class="button big add-account" ng-click="addNewAccount()"><t>Create agreement</t></a>
          </div>
          <div class="table-cell table-cell--centered">
            <t>You will be redirected to EasyPay website, go back to finish purchase.</t>
          </div>
        </div>
      </div>

      <div consents-list></div>

      <div ng-transclude></div>
    </div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-boleto-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_BOLETO)">
    <div ng-transclude></div>
  </div>
</script><script type="text/ng-template" id="/widget/checkout/component/partials/easypay-mbway-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_MBWAY)">
    <div class="easypay-mbway-payment-form row">
      <h4 class="payment-form-title">
        <t>Associates your customer's debit or credit card to a mobile number using just an app, enabling them to go shopping and pay instantly.</t>
      </h4>
      <div class="phone-information-wrapper">
        <div class="phone-information-cell calling-cell">
          <div
            id="phone-country"
            class="tp-dropdown__select"
            tp-calling-code-selector
            click-on-select="onCallingCodeSelect"
            selector-options="selectorOptions"
            selector-label="{{'Country code' | t}}"
            dropdown-classes="'no-triangle'"
            dropdown-styles="{width: 320, zIndex: 1004, left: 40}">
          </div>
        </div>
        <div class="phone-information-cell phone-input-cell">
          <input class="default-input phone-number-input" type="text" id="phone-number" placeholder="{{'Phone number' | t}}" ng-model="phone.number"/>
        </div>
      </div>
      <div class="app-notification-info"><t>We will send you notification in your MBWAY mobile app</t></div>
    </div>
    <div ng-transclude></div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-multibanco-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_MULTIBANCO)">
    <div class="easypay-multibanco-payment-form row">
      <h4 class="payment-form-title">
        <t>The most commonly used Portuguese payment system. Highly recommended for every business selling to Portugal.</t>
      </h4>
      <div class="warning-wrapper">
        <strong><t>Instructions</t></strong>
        <ol>
          <li>
            <t>Use this information for paying via ATM or online banking system</t>
          </li>
          <li>
            <t>When payment is complete, you will receive an e-mail notifying you of your access</t>
          </li>
        </ol>
      </div>
    </div>
    <div ng-transclude></div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/obi-paypal-form-component.html">
    <div ng-show="isPaymentMethod(OBI_PAYPAL)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>
            <div class="obi-paypal-payment-form">
                <div ng-if="stored.length">
                    <span class="obi-paypal-title"><t>Your PayPal accounts</t></span>
                    <table class="payment-method-obi-paypal">
                        <tr class="payment-method-obi-paypal-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                            <td class="payment-method-obi-paypal-cell">
                                <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                            </td>
                            <td class="payment-method-obi-paypal-cell" ng-if="!upi.isNew">
                                {{upi.paypalEmail}}
                            </td>
                            <td class="payment-method-obi-paypal-cell" ng-if="upi.isNew">
                                <div class="obi-paypal-loggedin">
                                    <span class="obi-paypal-name"><t>PayPal</t></span>
                                    <span class="obi-paypal-email">{{upi.paypalEmail}}</span>
                                    <button ng-click="cancelNewAccount()" class="obi-paypal-cancel-button"><t>Cancel</t></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-if="!data.newUpi" >
                    <div>
                        <h4>
                            <t>Select country to add new account</t>
                        </h4>
                    </div>
                    <div class="billing-country" id="obi-paypal-country-selector">
                        <div class="billing-country-group">
                            <div>
                                <div class="tp-dropdown__select"
                                     tp-country-selector
                                     selector-options="countrySelectorOptions"
                                     default-country="defaultCountryCode"
                                     click-on-select="selectCountry"
                                     selector-label="{{'Select a country or region' | t}}"
                                     dropdown-styles="{width: 320, zIndex: 1004}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pm-login-button paypal-login-button" ng-class="{ 'obi-disabled': data.selectedCountry === null }" ng-click="addNewAccount()"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/frontend/providers/common/credit-card-expire.html">
    <div class="cc-field-outer-wrap" data-e2e="cc_expire">
        <div class="cc-field-outer-wrap__left-placeholder">
            <t>Expiration</t>
        </div>
        <div class="cc-field-outer-wrap__field cc-field cc-field--expire" ng-class="{'cc-field--not-valid': !valid}">
            <label class="cc-field__icon cc-field__icon--expiration" ng-class="{'cc-field__icon--readonly': readonly}"></label>
            <div class="cc-field__input-wrap">
                <input type="text"
                       ng-class="{'cc-field__input--readonly': readonly}"
                       name="expire"
                       class="cc-field__input flat fs-block"
                       ng-model="text"
                       placeholder="{{ 'MM/YY' | t }}"
                       format-expiry-date
                       format-year="2"
                       ng-change="onChange(text)"
                       ng-readonly="readonly"
                       ng-required="required"
                       ng-disabled="disabled"
                />
            </div>
        </div>
    </div>
</script>


<script type="text/ng-template" id="/frontend/providers/common/credit-card-text-input.html">
    <div class="cc-field-outer-wrap">
        <div class="cc-field-outer-wrap__left-placeholder">
            {{ placeholder }}
        </div>
        <div class="cc-field-outer-wrap__field cc-field" ng-class="getFieldClass()">
            <label ng-if="icon || iconClass" class="cc-field__icon" ng-class="getIconClass()"></label>
            <div class="cc-field__input-wrap" ng-class="{'cc-field__input-wrap--no-icon': !(icon || iconClass)}">
                <input type="text"
                       class="cc-field__input flat {{className}} fs-block"
                       ng-class="{'cc-field__input--readonly': readonly}"
                       ng-model="text"
                       placeholder="{{ placeholder }}"
                       maxlength="{{ maxlength }}"
                       ng-readonly="readonly"
                       ng-required="required"
                       ng-disabled="disabled"
                       ng-change="onChange()"
                />
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-number.html">
    <cc-text-input placeholder="'Card number' | t"
                   ng-model="text"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   icon="'card'"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   data-e2e="cc_number"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-cvv.html">
    <cc-text-input
            ng-readonly="readonly"
            ng-required="required"
            ng-disabled="disabled"
            placeholder="'CVV' | t"
            ng-model="text"
            icon="'cvv'"
            maxlength="5"
            class="cc-field-wrap fs-block"
            class-name="className"
            on-change="onChange"
            name="name"
            data-e2e="cc_cvv"
            valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-postal-code.html">
    <cc-text-input placeholder="'Postal code' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon="'zip-code'"
                   data-e2e="cc_zip"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-holder.html">
    <cc-text-input placeholder="'Card holder' | t"
                   ng-model="text"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   icon="'card-holder'"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   data-e2e="cc_holder"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-email.html">
    <cc-text-input placeholder="'Email' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon=""
                   data-e2e="cc_email"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-phone-number.html">
    <cc-text-input placeholder="'Phone number' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon=""
                   data-e2e="cc_phone"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/components/applepaystripe/checkout/component.shtml">
<div ng-if="isPasswordlessApplePayUsed">
    <button type="button"
            class="apple-pay-button"
            ng-click="initiatePasswordlessPurchase()"
            ng-class="{'apple-pay-button--disabled': !isStripeApplePayEnabled}"
    >
        <t>Buy with</t>
        <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
        </svg>
    </button>
</div>
<div ng-if="!isPasswordlessApplePayUsed" class="stripe-applepay-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="initiatePurchase()" class="button big stripe-applepay-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isStripeApplePayEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/checkout/component.shtml">
<div class="gocardlessdd new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your direct debit accounts</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a direct debit account</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-no-indents">

                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.nickname | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">

                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new direct debit account</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to direct debit accounts</t>
                </a>
                <h4>
                    <t>Add a new direct debit account</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <button ng-click="create()" class="gocardless-pay"><t>Pay with GOCARDLESS</t></button>

                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my direct debit account for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/checkout/component.shtml">
<div class="onet-payway-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!iPayEnabled && !cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires</t> <t>N/A</t>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="!iPayEnabled && cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="!iPayEnabled && cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card-onet1"/>
                                <label for="rermber-my-card-onet1">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card-onet2" disabled/>
                            <label for="rermber-my-card-onet2">
                                <t>Remember my card for future payments</t>
                            </label>
                        </div>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-onet" />
                        <label for="default-payment-method-onet"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>

        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            class-name="'payu-card-number'"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'">
        </cc-expire-component>
        <input type="hidden" class="payu-card-expm" value="{{credit_card.expire.month}}">
        <input type="hidden" class="payu-card-expy" value="{{credit_card.expire.year}}">
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         class-name="'payu-card-cvv'"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersourcetms/checkout/component.shtml">
<div class="cybersourcetms-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-cybersourcetms"/>
                                <label for="rermber-my-card1-cybersourcetms">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-cybersourcetms"/>
                        <label for="default-payment-method-cybersourcetms">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersourcetms/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number cybersourcetms-microform-container"
         id="cybersourcetms-card-number-container">

    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv cybersourcetms-microform-container"
         id="cybersourcetms-cvv-container">
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/checkout/component.shtml">
<div class="payu-india-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-india-cc"/>
                                <label for="rermber-my-card1-payu-india-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-india-cc"/>
                        <label for="default-payment-method-payu-india-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
       
            <div class="complete-purchase-button" complete-purchase-button
                 title="Pay Now {{input.chargeDisplayAmount.replace('INR','₹ ')}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>
<script type="text/ng-template" id="/frontend/providers/components/payuindiaccv2/checkout/component.shtml"> 
<div class="payu-india-cc-v2-wrapper new-card-form">
  <div class="row">
    <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated"> 
      <div desktop class="go-back-to-cards-wrapper">
        <h4> <t>Add a new credit or debit card</t> </h4>
  </div> 
      <form class="new-card-form" name="ccForm" role="form"> 
        <dynamic-base-inputs-component name="providerName" credit-card="credit_card"></dynamic-base-inputs-component> 
        <div class="payment-system-condition"> 
          <span ng-if="!isSubscription()">
            <div class="custom-checkbox"> 
              <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault" id="rermber-my-card-india-cc-v2"/> 
              <label for="rermber-my-card-india-cc-v2"> <t>Remember my card for future payments</t> </label> 
  			</div> 
  		</span> 
          <span ng-if="isSubscription()"> 
            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/> 
  		 </span> 
  		</div> 
  </form>
  </div> 
    <div consents-list></div>
    <div class="footer-modal"> 
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()"> 
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew" id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew"> 
          <t>Automatically renew my subscription when the time comes.</t>
  		</label> 
  		</div> 
      
      <div class="complete-purchase-button" complete-purchase-button title="Pay Now {{input.chargeDisplayAmount.replace('INR','₹ ')}}"></div> 
  </div> </div> </div> </script>
<script type="text/ng-template" id="/frontend/providers/components/payuindiaccv2/common/baseTemplate.shtml"> 
<div class="cc-fields-layout"> 
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value" on-change="credit_card.holder.onChangeCallback" ng-disabled="credit_card.holder.disabled" ng-required="credit_card.holder.required" ng-readonly="credit_card.holder.readonly" maxlength="credit_card.holder.maxlength" valid="credit_card.holder.valid" name="'holder'"> </credit-card-holder>
  </div> 
  <div class="cc-fields-layout__field cc-fields-layout__card-number">
    <credit-card-number ng-model="credit_card.num.value" on-change="credit_card.num.onChangeCallback" ng-disabled="credit_card.num.disabled" ng-required="credit_card.num.required" ng-readonly="credit_card.num.readonly" maxlength="credit_card.num.maxlength" valid="credit_card.num.valid" name="'num'"> </credit-card-number>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__expire"> 
    <cc-expire-component ng-model="credit_card.expire.value" on-change="credit_card.expire.onChangeCallback" ng-disabled="credit_card.expire.disabled" ng-required="credit_card.expire.required" ng-readonly="credit_card.expire.readonly" maxlength="credit_card.expire.maxlength" valid="credit_card.expire.valid" name="'expire'" on-change="onChangeCallback"> </cc-expire-component> 
  </div> 
  <div class="cc-fields-layout__field cc-fields-layout__cvv"> 
    <credit-card-cvv ng-model="credit_card.cvv.value" on-change="credit_card.cvv.onChangeCallback" ng-disabled="credit_card.cvv.disabled" ng-required="credit_card.cvv.required" ng-readonly="credit_card.cvv.readonly" maxlength="credit_card.cvv.maxlength" valid="credit_card.cvv.valid" name="'cvv'"> </credit-card-cvv> 
  </div> 
  <div class="cc-fields-layout__custom-field">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t" ng-model="credit_card.phone.value" on-change="credit_card.phone.onChangeCallback" ng-disabled="credit_card.phone.disabled" ng-required="credit_card.phone.required" ng-readonly="credit_card.phone.readonly" maxlength="credit_card.phone.maxlength" valid="credit_card.phone.valid" validation-rule="'numeric'" name="'phone'">
  </cc-phone-number-component> </div> </div> </div> </script>
<script type="text/ng-template" id="/frontend/providers/components/payuindiaupi/checkout/component.shtml">
<div class="payu-india-upi-wrapper new-card-form">
<div class="row">
<div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
<div desktop class="go-back-to-cards-wrapper">
<h4>
<t>Enter your UPI Id</t>
</h4>
</div>
<form class="new-card-form" name="ccForm" role="form">
<dynamic-base-inputs-component name="providerName"
credit-card="credit_card"></dynamic-base-inputs-component>
<div class="payment-system-condition"/>
</form>
</div>
<div consents-list></div>
<div class="footer-modal">

<div class="complete-purchase-button"
complete-purchase-button
title="Pay Now {{input.chargeDisplayAmount.replace('INR','₹ ')}}"></div>
</div>
</div>
</div>
</script>
<script type="text/ng-template" id="/frontend/providers/components/payuindiaupi/common/baseTemplate.shtml">
<div class="cc-field-outer-wrap">
<div class="cc-field-outer-wrap__field cc-field">
<label class="cc-field__icon ng-scope
vpa-field__icon--bank-account"></label>
<input id="payu-upi-vpa" type="text"
class="cc-field__input flat fs-block"
placeholder="name@upi"
/>
</div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindianb/checkout/component.shtml">
  <div class="payu-india-netbanking-wrapper new-card-form">
    <div class="row">
      <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
        <div class="add-credit-card-wrapper">
          <h4>
            <t>Your bank accounts</t>
          </h4>
          <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
             ng-show="cc.stored.length > 0">
            +
            <t>Add a bank account</t>
          </a>
        </div>
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}"
                     ng-model="$parent.cc.selectedUpiId"/>
            </td>
            <td class="payment-method-card-cell">
              <div>{{method.type | tc:"checkout.platform"}}</div>
            </td>
            <td class="payment-method-card-cell">
              <div>*{{method.ending_in}} - <t>transaction max amount</t> {{method.txMaxAmount}}</div>
            </td>
          </tr>
        </table>
      </div>

      <div mobile class="cc_stored_cards" ng-show="cc.initiated">
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}"
                     ng-model="$parent.cc.selectedUpiId"
                     ng-click="$parent.cc.payWithNew = false"/>
            </td>
            <td class="payment-method-card-cell">
              <div class="credit-card-{{method.identifier}}"></div>
            </td>
          </tr>
          <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
            </td>
            <td class="payment-method-card-cell" colspan="2">
              <t>Add a new bank account</t>
            </td>
          </tr>
        </table>
      </div>

      <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
        <div desktop class="go-back-to-cards-wrapper">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
             ng-show="cc.stored.length > 0">
            <t>Return to saved bank accounts</t>
          </a>
          <h4>
            <t>Payment details</t>
          </h4>
        </div>
        <form class="new-card-form" name="ccForm" role="form">
          <div class="controls">
            <div class="cc-field-outer-wrap netbanking-field">
              <div class="cc-field-outer-wrap__field cc-field">
                <label class="cc-field__icon cc-field__icon--bank"></label>
                <select id="payu-nb-code"
                        class="cc-fields-layout__select-field"
                        ng-model="cc.bankCode"
                        ng-options="o.name for o in bankCodes track by o.code"
                        required>
                  <option value="" disabled selected style="display: none;">{{'Bank' | t}}</option>
                </select>
              </div>
            </div>
            <div class="cc-field-outer-wrap netbanking-field">
              <div class="cc-field-outer-wrap__field cc-field">
                <label class="cc-field__icon cc-field__icon--identification-type"></label>
                <select id="payu-nb-type"
                        ng-model="cc.accType"
                        class="cc-fields-layout__select-field"
                        required>
                  <option value="" disabled selected>{{'Account type' | t}}</option>
                  <option value="SAVINGS">{{'Savings' | t}}</option>
                  <option value="CURRENT">{{'Current' | t}}</option>
                </select>
              </div>
            </div>
            <div class="cc-field-outer-wrap netbanking-field">
              <div class="cc-field-outer-wrap__field cc-field">
                <label class="cc-field__icon cc-field__icon--client"></label>
                <input id="payu-nb-acc-name" type="text"
                       class="custom-input-style cc-field__input flat fs-block"
                       ng-model="cc.accName"
                       placeholder="Account name"/>
              </div>
            </div>
            <div class="cc-field-outer-wrap netbanking-field">
              <div class="cc-field-outer-wrap__field cc-field">
                <label class="cc-field__icon cc-field__icon--national-id"></label>
                <input id="payu-nb-acc-number" type="text"
                       class="custom-input-style cc-field__input flat fs-block"
                       ng-model="cc.accNumber"
                       placeholder="Account number"/>
              </div>
            </div>
            <div class="cc-field-outer-wrap netbanking-field">
              <div class="cc-fields-layout__field cc-field cc-fields-layout__phone-number">
                <label class="cc-field__icon cc-field__icon--phone-number"></label>
                <input id="payu-nb-phone-number" type="text"
                       class="netbanking-phone-number-input cc-field__input flat fs-block"
                       ng-model="cc.phone"
                       placeholder="Phone number"/>
              </div>
            </div>
          </div>
          <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card1-payu-india-nb"/>
                            <label for="rermber-my-card1-payu-india-nb">
                                <t>Remember my bank account for future payments</t>
                            </label>
                        </div>
                    </span>
            <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
            <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
              <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                     id="default-payment-method-payu-india-nb"/>
              <label for="default-payment-method-payu-india-nb">
                <t>Apply this payment method to all active subscriptions</t>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div consents-list></div>
      <div class="footer-modal">
        <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
          <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                 id="auto_renew"/>
          <label class="auto-renew-purchase-label" for="auto_renew">
            <t>Automatically renew my subscription when the time comes.</t>
          </label>
        </div>
        <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
             title="Pay Now {{input.chargeDisplayAmount.replace('INR','₹ ')}}"></div>
        <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="Pay Now {{input.chargeDisplayAmount.replace('INR','₹ ')}}"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/ng-template" id="/frontend/providers/components/stripe/checkout/component.shtml">
<div id="stripe-input-style" class="stripe-input-style">
{
    "elements": {
        "fonts": [
            {
                "family": "graphik",
                "src": "url(/fonts/Graphik-Regular-Web.woff2) format('woff2')"
            }
        ]
    },
    "cardNumber": {
        "style": {
            "base": {
                "fontSize": "13px"
            },
        "invalid": {
            "color": "black"
            }
        },
        "placeholder": "Card number"
    },
    "cardCvc": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "CVV"
    },
    "cardExpiry": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "MM/YY"
    },
    "postalCode": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "Postal code"
    }
}
</div>
<div class="stripe-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>

                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my card for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/stripe/common/baseTemplate.shtml">
<div class="cc-fields-layout" ng-init="callbackOnFormInit()">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <div class="cc-field-wrap">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.num.showLabel === true" class="control-label"><t>Card number</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--num">
                    <label class="cc-field__icon cc-field__icon--card"></label>
                    <div id="stripe-card-number-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <div class="cc-field-wrap">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.expire.showLabel === true" class="control-label"><t>Expiration</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--expire">
                    <label class="cc-field__icon cc-field__icon--expiration"></label>
                    <div id="stripe-card-expiry-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <div class="cc-field-wrap">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.cvv.showLabel === true" class="control-label"><t>CVV</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--cvv">
                    <label class="cc-field__icon ng-scope cc-field__icon--cvv"></label>
                    <div id="stripe-card-cvc-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <div class="cc-field-wrap">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.postal_code.showLabel === true" class="control-label"><t>Postal code</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--postal_code">
                    <label class="cc-field__icon ng-scope cc-field__icon--zip-code"></label>
                    <div id="stripe-postal-code-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/paymentez/checkout/component.shtml">
<div class="paymentez-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-paymentez"/>
                                <label for="rermber-my-card1-paymentez">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-paymentez"/>
                        <label for="default-payment-method-paymentez">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/paymentez/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gmo/checkout/component.shtml">
<div class="gmo-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0 && !singleCardPerUser">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-gmo"/>
                                <label for="rermber-my-card1-gmo">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-gmo"/>
                        <label for="default-payment-method-gmo">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/gmo/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/checkout/component.shtml">
<div class="applepay-ss-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePaySsEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/checkout/component.shtml">
<div class="bancard-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">

                <div class="bancard-new-card-form">
                    <div ng-if="!cc.newCardInitiated">
                        <dynamic-base-inputs-component name="providerName"
                                                       credit-card="credit_card">
                        </dynamic-base-inputs-component>
                        <button
                                ng-click="createNewCard()"
                                class="bancard-new-card-create-button"
                                data-e2e="bancard_new_card_button"
                        ><t>Add card</t></button>
                    </div>
                    <div ng-show="cc.newCardRegistering" id="bancard-new-card-container" style="height: 350px;"></div>
                    <div ng-if="cc.registeredCard">
                        <t>Your card: </t>
                        {{cc.registeredCard.number}}
                    </div>
                </div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card1-bancard"/>
                                <label for="remember-my-card1-bancard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-bancard"/>
                        <label for="default-payment-method-bancard">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__email">
        <cc-email-component ng-model="credit_card.email.value"
                            on-change="credit_card.email.onChangeCallback"
                            ng-disabled="credit_card.email.disabled"
                            ng-required="credit_card.email.required"
                            ng-readonly="credit_card.email.readonly"
                            maxlength="credit_card.email.maxlength"
                            valid="credit_card.email.valid"
                            name="'email'">
        </cc-email-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
        <cc-phone-number-component ng-model="credit_card.phone_number.value"
                             on-change="credit_card.phone_number.onChangeCallback"
                             ng-disabled="credit_card.phone_number.disabled"
                             ng-required="credit_card.phone_number.required"
                             ng-readonly="credit_card.phone_number.readonly"
                             maxlength="credit_card.phone_number.maxlength"
                             valid="credit_card.phone_number.valid"
                             name="'phone_number'"
                             on-change="onChangeCallback">
        </cc-phone-number-component>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersource/checkout/component.shtml">
<div class="cybersource-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName" credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-cybersource"/>
                                <label for="rermber-my-card1-cybersource">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-cybersource" />
                        <label for="default-payment-method-cybersource"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersource/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/wirecard/checkout/component.shtml">
<div class="wirecard-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <div id="seamless-form-target" style="height: 400px;"></div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-wirecard"/>
                                <label for="rermber-my-card1-wirecard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-wirecard" />
                        <label for="default-payment-method-wirecard"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayway/checkout/component.shtml">
<div ng-if="isPasswordlessApplePayUsed">
    <button type="button"
            class="apple-pay-button"
            ng-click="openPasswordLessApplePay()"
            ng-class="{'apple-pay-button--disabled': !isApplePayPwEnabled}"
    >
        <t>Buy with</t>
        <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
        </svg>
    </button>
</div>
<div ng-if="!isPasswordlessApplePayUsed" class="applepay-ss-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePayPwEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>
<!-- for Invoice Option 1 -->
<script type="text/ng-template" id="/frontend/providers/components/inbaf/checkout/component.shtml">
  <div class="inbaf-wrapper new-card-form">
    <div class="row">
      <div class="cc_stored_cards" ng-show="data.stored.length > 0">
        <table class="payment-method-card">
          <tr class="payment-method-card-row" ng-repeat="method in data.stored"
              ng-class="{'selected' : $parent.data.selectedUpiId == method.id}">
            <td class="inbaf-table-cell">
              <label class="inbaf-table-cell-label">
                <t context="checkout.platform">{{method.description}}</t>
              </label>
            </td>
            <td class="inbaf-table-cell inbaf-text-right">
              <div class="payment-method-card-default-payment"
                   ng-show="method.id === data.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="method.id === data.defaultPaymentMethodId"
                      ng-click="setAsDefault(method)"
                      type="button"
                      class="set-as-default-button">
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="cc_new_card" ng-show="data.stored.length <= 0">
        <div class="row inbaf-invoice-for">
          <div class="inbaf-warning-icon">
          </div>
          <div class="inbaf-invoice-for-text">
            <t context="checkout.platform">Your Invoice will be sent to your account email after <b>Complete purchase</b>.</t>
          </div>
        </div>
        <div class="payment-system-condition">
          <span ng-if="!isSubscription()">
            <div class="custom-checkbox">
              <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault" id="remember-my-email-inbaf"/>
              <label for="remember-my-email-inbaf">
                  <t>Remember my email for future invoices</t>
              </label>
            </div>
          </span>
          <span ng-if="isSubscription()">
            <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
          </span>
          <div class="custom-checkbox" ng-if="data.store_in_vault">
            <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-inbaf"/>
            <label for="default-payment-method-inbaf">
              <t>Apply this payment method to all active subscriptions</t>
            </label>
          </div>
        </div>
      </div>
      <div consents-list></div>
      <div class="footer-modal">
        <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="{{'Pay Now' | t}}"></div>
        <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="{{'Pay Now' | t}}"></div>
      </div>
    </div>
  </div>
</script>


<!-- for Invoice Option 2 -->
<script type="text/ng-template" id="/frontend/providers/components/inbas/checkout/component.shtml">
  <div class="inbas-wrapper new-card-form">
    <div class="row">
      <div class="cc_stored_cards" ng-show="data.stored.length > 0">
        <table class="payment-method-card">
          <tr class="payment-method-card-row" ng-repeat="method in data.stored"
              ng-class="{'selected' : $parent.data.selectedUpiId == method.id}">
            <td class="inbas-table-cell">
              <label class="inbas-table-cell-label">
                <t context="checkout.platform">{{method.description}}</t>
              </label>
            </td>
            <td class="inbas-table-cell inbas-text-right">
              <div class="payment-method-card-default-payment"
                   ng-show="method.id === data.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="method.id === data.defaultPaymentMethodId"
                      ng-click="setAsDefault(method)"
                      type="button"
                      class="set-as-default-button">
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="cc_new_card" ng-show="data.stored.length <= 0">
        <div class="row inbas-invoice-for">
          <div class="inbas-warning-icon">
          </div>
          <div class="inbas-invoice-for-text">
            <t context="checkout.platform">Your Invoice will be sent to your account email after <b>Complete purchase</b>.</t>
          </div>
        </div>
        <div class="payment-system-condition">
          <span ng-if="!isSubscription()">
            <div class="custom-checkbox">
              <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault" id="remember-my-email-inbas"/>
              <label for="remember-my-email-inbas">
                  <t>Remember my email for future invoices</t>
              </label>
            </div>
          </span>
          <span ng-if="isSubscription()">
            <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
          </span>
          <div class="custom-checkbox" ng-if="data.store_in_vault">
            <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-inbas"/>
            <label for="default-payment-method-inbas">
              <t>Apply this payment method to all active subscriptions</t>
            </label>
          </div>
        </div>
      </div>
      <div consents-list></div>
      <div class="footer-modal">
        <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="{{'Pay Now' | t}}"></div>
        <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="{{'Pay Now' | t}}"></div>
      </div>
    </div>
  </div>
</script><!-- consent-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consents-list.html">

    <div class="consents">
        <div ng-repeat="item in consents | orderBy:'sortOrder' track by $index" class="consent">
            <div class="custom-checkbox">
                <input ng-model="item.checked" type="checkbox" id="consent-item-{{item.fieldId}}">
                <label ng-bind-html="item.displayText | tc:'consent.text'" for="consent-item-{{item.fieldId}}"></label>
            </div>
        </div>
    </div>

</script>

<!-- consent-box -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consent-box.html">

    <div ng-if="consent" class="consents">
        <div class="custom-checkbox">
            <input ng-model="consent.checked" type="checkbox" id="consent-item-{{consent.fieldId}}">
            <label ng-bind-html="consent.displayText | tc:'consent.text'" for="consent-item-{{consent.fieldId}}"></label>
        </div>
    </div>

</script>

<!-- gift-email-params-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/gift-form-component.html">

    <div class="gift-header">
        <h1>
            <t>Give the gift of</t>
            {{selectedTerm.resource.name | tc:'resource.name'}}
        </h1>
    </div>

    <div class="gift-form">
        <form name="giftForm">
            <div gift-input-time class="gift-row"></div>
            <div gift-input-email class="gift-row"></div>
            <div gift-input-name class="gift-row"></div>
            <div gift-input-message class="gift-row"></div>
        </form>
    </div>

    <div class="gift-footer">
        <div class="access-buttons">
            <a class="button big fixed gray" ng-click="cancel()" title="{{ 'Cancel' | t }}"><t>Cancel</t></a>
            <a class="button big fixed" ng-click="save()" data-e2e="next-button" title="{{ 'Next' | t }}"><t>Next</t></a>
        </div>
    </div>

</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-time.html">
    <label>
        <t>Send</t>
    </label>
    <div class="gift-input sides">
        <span class="left-side">
            <label class="radio-label">
                <input name="send" id="send-now" type="radio" ng-model="form.sendType" value="now"/>
                <span class="text-wrap"><t>Now</t></span>
            </label>
        </span>
        <span class="right-side">
            <label class="radio-label">
                <input name="send" id="send-later" type="radio" ng-model="form.sendType" value="later"/>
                <span class="text-wrap"><t>Later:</t></span>
            </label>
            <div tp-datepicker options="optionsDatepicker" from-date="form.sendTime" to-date="form.sendTime" disable="inputDisabled()">
                <i class="icon-calendar"></i>
                <input type="date" class="gift-send-date" ng-model="form.sendTime" ng-disabled="inputDisabled()" date-format="{{dateFormat}}" placeholder="{{datePlaceholder}}"/>
            </div>
        </span>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-name.html">
    <label for="recipientName">
        <t>Recipient name</t>
    </label>
    <div class="gift-input">
        <input id="recipientName" class="regular-border" data-e2e="recipient-name" ng-model="form.recipientName" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-email.html">
    <label for="recipientEmail">
        <t>Recipient email</t>
    </label>
    <div class="gift-input">
        <input id="recipientEmail" class="regular-border" data-e2e="recipient-email" ng-model="form.recipientEmail" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-message.html">
    <label for="message">
        <t>Add a personal message</t>
    </label>
    <div class="gift-input">
        <textarea id="message" ng-model="form.message" data-e2e="gift-message" rows="4"></textarea>
    </div>
</script>
<!-- redemption-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-component.html">
    <div account-header-component></div>

    <div class="redemption-header">
        <h1>
            <t>Redeem your voucher</t>
        </h1>
    </div>

    <div redemption-code-and-info></div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-code.html">
    <div class="redemption-form">
        <form>
            <div>
                <p class="redeem-code-description">
                    <t>Enter the code of your voucher</t>
                </p>
                <div redeem-code-input></div>
            </div>
        </form>
    </div>
    <div class="redemption-footer">
        <div class="access-button">
            <a class="button big fixed gray" ng-click="cancel()"><t>Cancel</t></a>
            <a class="button big fixed" ng-click="applyCode()"><t>Next</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-info.html">
    <div class="redemption-form">
        <div>
            <p>
                <t>You are about to receive <b>{{voucherResource()}}</b> by code "{{redeemCode()}}"</t>
            </p>
            <div class="redemption-info">
                <table>
                    <tr>
                        <th><t>Starting</t></th>
                        <th><t>Duration</t></th>
                        <th><t>Expires</t></th>
                        <th><t>Billing</t></th>
                    </tr>
                    <tr>
                        <td>
                            {{voucherStarting()}}
                        </td>
                        <td>{{voucherDuration()}}</td>
                        <td>{{voucherExpires()}}</td>
                        <td><b><t>Free</t></b></td>
                    </tr>
                </table>
            </div>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() === null">
                <t arg0="{{voucherRedemptionStartDate()}}">Redemption is allowed after <b>{0}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionStartDate()}}" arg1="{{voucherRedemptionEndDate()}}">Redemption is allowed from <b>{0}</b> to <b>{1}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() === null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionEndDate()}}">Redemption is allowed before <b>{0}</b></t>
            </p>
        </div>
    </div>

    <div ng-if="isSingleStepEnabled()" auth-component></div>

    <div class="redemption-footer">
        <div class="access-button">
            <a class="button big fixed gray" ng-click="cancel()"><t>Cancel</t></a>
            <a ng-if="voucherRedemptionAllowed() === true" class="button big fixed" ng-click="redeem()"><t>Redeem</t></a>
            <a ng-if="voucherRedemptionAllowed() !== true" class="button big fixed disabled"><t>Redeem</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redeem-code-input.html">
    <div class="redeem-code-input-wrapper">
        <input type="text"
               id="redeem-code-input"
               ng-model="form.redeemCode"
               on-enter="applyCode()"
               placeholder="{{'Enter voucher code' | t}}"
               ng-class="{'invalid': redeemCodeIsInvalid()}"
        />
        <span ng-show="redeemCodeIsInvalid()" class="redeem-code-input-error">
            {{redeemCodeErrorMessage()}}
        </span>
    </div>
</script>
<!-- term-selector-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/term-selector-component.html">
 <div desktop  class="default-temp" ng-repeat="term in terms">
  <div class="option"  ng-class-even="'option-new'"  >
   <div class="flex-container">
      <div class="flex-item">
         <p class="primary weight font-2" ng-class-even="'primary-new'">{{term.name | tc:'term.name'}}</p>
         <p class="small small-sm small-md" ng-class-even="'small-new'">
           {{term.firstRealPrice.replace('INR','₹')}}
         </p>
      </div>
      <div class="flex-item align-right">
          <button class="btn-primary" ng-class-even="'btn-yellow'"
                            type="button"
                            ng-click="startCheckout(term.termId)"
                            external-event="offer-subscribe-{{ $index }}">
                        <span ng-show="isPayableTerm(term)">
                            <span class="price">
                                <span ng-if="term.hasFreeTrial">
                                    <t>Free</t>
                                </span>
                                <span ng-if="!term.hasFreeTrial">
                                   Subscribe
                                </span>
                            </span>
                        </span>
                        <span ng-hide="isPayableTerm(term)" class="non-payment">
                            <t>Subscribe</t>
                        </span>
                    </button>
                 </div>
             </div>
          </div>
    </div>
 <div mobile   class="default-temp" ng-repeat="term in terms">
  <div class="option"  ng-class-even="'option-new'"  >
   <div class="flex-container">
      <div class="flex-item">
         <p class="primary weight font-2" ng-class-even="'primary-new'">{{term.name | tc:'term.name'}}</p>
         <p class="small small-sm small-md" ng-class-even="'small-new'">
           {{term.firstRealPrice.replace('INR','₹')}}
         </p>
      </div>
      <div class="flex-item align-right">
          <button class="btn-primary" ng-class-even="'btn-yellow'"
                            type="button"
                            ng-click="startCheckout(term.termId)"
                            external-event="offer-subscribe-{{ $index }}">
                        <span ng-show="isPayableTerm(term)">
                            <span class="price">
                                <span ng-if="term.hasFreeTrial">
                                    <t>Free</t>
                                </span>
                                <span ng-if="!term.hasFreeTrial">
                                   Subscribe
                                </span>
                            </span>
                        </span>
                        <span ng-hide="isPayableTerm(term)" class="non-payment">
                            <t>Subscribe</t>
                        </span>
                    </button>
                    </div>
                </div>
          </div>
        </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/auth-component.html"
        xmlns="http://www.w3.org/1999/html">
    <auth-custom-login>
        <auth-state name="login">
            <h1>
                <t>Login</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-login button" ng-click="doLogin()">
                <t>Login</t>
            </a>
            <a class="auth-goto-register" ng-click="gotoRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-forgot-password" ng-click="gotoForgotPassword()">
                <t>Forgot password?</t>
            </a>
        </auth-state>
        <auth-state name="register">
            <h1>
                <t>Register</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-register button" ng-click="doRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPassword">
            <h1>
                <t>Forgot password</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
            </form>
            <a class="auth-forgot-password button" ng-click="doForgotPassword()">
                <t>Send</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPasswordHasSent">
            <h1>
                <t>Reset password instructions has been sent to</t>
                <span class="auth-email">{{ input.email }}</span>
            </h1>
            <a class="auth-goto-login" ng-click="gotoLogin()"><t>Login</t></a>
        </auth-state>
    </auth-custom-login>
</script>
<!-- promo-code-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-component.html">
    <div ng-if="isPromoCodeAvailable() " animate-locked-promo-code>
        <div class="promo-code-component"
             ng-class="{'promo-code-unlocked': isSelectedTermLocked()}"
             ng-if="!isPromoCodeValid()">
            <div class="promo-code-eclipse">
                <div class="promo-code-lock"></div>
            </div>
            <div class="promo-code-description">
                <p class="promo-code-description-enter">
                    <t>Enter promo code to purchase</t>
                    <br/>
                    {{selectedTerm.resource.name | tc:'resource.name'}}
                </p>

                <p class="promo-code-description-error">
                    <t>Sorry, your promo code was not valid!</t>
                    <br/>
                    <span class="resource-name">
                        <t>Try another code to purchase</t> {{selectedTerm.resource.name | tc:'resource.name'}}
                    </span>
                </p>
            </div>
           <p>
               <t>Apply coupon code</t>
              <span class="desc small">&nbsp;If you have any</span>
          </p>
            <table ng-if="!isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                <tr>
                    <td>
                        <div class="field-wrapper">
                            <div class="input">
                                <input
                                    id="promo-code-input"
                                    data-e2e="promoCodeInput"
                                    class="flat promo-code-input"
                                    type="text"
                                    autocomplete="off"
                                    ng-model="input.promoCode"
                                    name="promocode"
                                    on-enter="apply()"
                                    placeholder=""
                                    error-message="field-error"/>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <table ng-if="isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                <tr>
                    <td>
                        <div class="field-wrapper">
                            <div class="input">
                                <input
                                  id="promo-code-input-locked"
                                  class="flat promo-code-input"
                                  data-e2e="promoCodeInput"
                                  type="text"
                                  autocomplete="off"
                                  ng-model="input.promoCode"
                                  name="promocode"
                                  on-enter="apply()"
                                  placeholder=""
                                  ng-click="inputClick()" />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
           <a class="button promo-code-apply" ng-click="apply()">
                <t>Apply</t>
            </a>
        </div>
          <div class="promo-code-component verified" ng-if="isPromoCodeValid()">
              <t>Coupon code<span class="desc small">&nbsp;Applied</span><span><img src="https://www.thehindu.com/static/content/images/20210120151613/Applied.png" class="applied"></span>
              </t>
            <!--<div class="promo-code-revert" data-e2e="promoCodeRevert" ng-click="revert()"></div>-->
          <div class="flex-container pad-0">
               <div class="flex-item">
                     <p class="note small small-sm">{{input.promoCode }}</p>
                     <!--<p class="note small small-sm">Promotion code {{verifiedPromoCode.discount}} upto {{verifiedPromoCode.discount}}</p>-->
               </div>
               <div class="flex-item">
                <a class="primary" ng-click="revert()">Remove</a>
             </div>
        </div>
      </div>
    </div>
</script>

<!-- promo code another term dialog -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-another-term-dialog.html">
    <div class="modal-header"></div>
    <div class="modal-content">
        <p>
            <t>Your {{verifiedPromoCode.discount}} off promo code
            is valid only for

            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.</t>
            <t>Switch to Another Resource? You can always come back.</t>
        </p>
    </div>
    <div class="action-panel">
        <a href="javascript:void(0)" class="button show-another-promocode" ng-click="selectTerm()"><t>Show me</t></a>
        <a href="javascript:void(0)" class="button gray" ng-click="close()"><t>Cancel</t></a>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-component.html">
  <div account-header-component></div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === true">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item list-item--bullet"
            data-e2e="terms"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You are about to upgrade from <b>{0}</b> to <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            data-e2e="billing-plan"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.billingPlan}}" arg1="{{upgradeInformation.billingDate | date:'mediumDate'}}">Your subscription for <b>{0}</b> will begin <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            ng-if="upgradeInformation.address"
            data-e2e="address"
        >
          <span class="item-text">
              <t>The delivery address for the new subscription is:</t>
              <div>{{upgradeInformation.address.firstName}} {{upgradeInformation.address.lastName}} {{upgradeInformation.address.companyName}} {{upgradeInformation.address.phone}}</div>
              <div>{{upgradeInformation.address.line1}} {{upgradeInformation.address.line2}}</div>
              <div>{{upgradeInformation.address.countryName}} {{upgradeInformation.address.regionName}} {{upgradeInformation.address.postal}}</div>
          </span>
        </li>
      </ul>
    </div>
    <div class="upgrade-container__additional-information">
      <span class="upgrade-title additional-information-title">
        <t>Additional upgrade information</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item"
            data-e2e="payment-method"
        >
          <span class="item-text">
            <t>Payment method: </t>
            <span ng-show="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentType}}" arg1="{{upgradeInformation.accountNumber.slice(-4)}}"><b>{0} *{1}</b></t>
            </span>
            <span ng-hide="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentMethodName}}"><b>{0}</b></t>
            </span>
            <span ng-if="upgradeInformation.expireMonth && upgradeInformation.expireYear">
              <t arg0="{{upgradeInformation.expireMonth}}" arg1="{{upgradeInformation.expireYear}}"> expires in <b>{0}/{1}</b></t>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === false">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
    </div>
    <ul class="subscription-changes-list">
      <li class="list-item" data-e2e="upgrade-unavailable-text">
        <span class="item-text">
          <t>This upgrade is unavailable. Please close this window to choose a new option.</t>
        </span>
      </li>
    </ul>
  </div>

  <div class="upgrade-complete-footer">
    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === true">
      <a class="button big fixed--middle gray"
         ng-click="cancel()"
         data-e2e="cancel"
         title="{{ 'Cancel' | t }}"
      >
        <t>Cancel</t>
      </a>
      <a class="button big fixed--middle confirmation-button"
         ng-click="authenticate()"
         data-e2e="authenticate"
         title="{{ 'Authenticate' | t }}"
      >
        <t>Authenticate</t>
      </a>
    </div>

    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === false">
      <a class="button big fixed--middle confirmation-button"
         ng-click="cancel()"
         data-e2e="close"
         title="{{ 'Close' | t }}"
      >
        <t>Close</t>
      </a>
    </div>
  </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-receipt-component.html">
  <div class="upgrade-purchase-receipt">
    <h1 class="you-already-have-access">
      <t>Thank you!</t>
    </h1>

    <div data-e2e="details">
      <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You just confirmed the upgrade from {0} to {1}.</t>
    </div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/already-has-access-component.html">

    <div account-header-component></div>

    <div class="already-has-access-component">
        <div class="content">
            <h1 class="you-already-have-access">
                <t>Looks like you already have access!</t>
            </h1>

            <div>
                {{paymentName | tc:'term.name'}}

                    <span ng-repeat="paymentDetail in paymentDetails">
                        {{paymentDetail}}
                    </span>

            </div>
            <div>
                <t>Started on</t>
                {{started | date :'shortDate'}}
            </div>
        </div>
    </div>
    <div class="access-footer">
        <div class="access-footer-content">
            {{title}}
            <div ng-show="canBeRenewed" class="access-button">
                <a ng-click="startRenewal()" href="javascript:void(0)" class="button big renew"><t>Renew now</t></a>
            </div>
            <div class="access-button">
                <div close-button title="{{'Close'|t}}"></div>
            </div>
        </div>
    </div>
</script><script type="text/ng-template" id="/widget/checkout/component/partials/confirmation-component.html"
        xmlns="http://www.w3.org/1999/html">
    <div account-header-component></div>

    <div class="row account-head">
        <div class="account-head-contentcol" ng-class="'no-logo'">
            <div class="account-head-content">
                <h1>{{selectedTerm.resource.name}}</h1>

                <div class="term-details">
                    <div ng-if="isPayableTerm(selectedTerm)" ng-switch="getPayableTermType()">
                        <div ng-switch-when="PAYABLE">
                            <div ng-switch="getTaxType()">
                                <div ng-switch-when="MANY_RATE_CA">
                                    <span class="has-free-trial"><t>You are about to be charged <b>{{input.confirmated.amount.replace('INR','₹ ')}}</b>, plus taxes</t></span>
                                    <div canadian-taxes></div>
                                </div>
                                <div ng-switch-when="ONE_RATE_CA">
                                    <span class="has-free-trial"><t>You are about to be charged <b>{{input.confirmated.amount.replace('INR','₹ ')}}</b>, plus <b>{{ input.canadianTaxes[0].name}} {{ input.canadianTaxes[0].amount.replace('INR','₹ ')}}</b> </t></span>
                                </div>
                                <div ng-switch-default="">
                                    <span class="has-free-trial"><t>You are about to be charged <b>{{input.confirmated.chargeAmount.replace('INR','₹ ').replace('INR','₹ ')}}</b>.</t></span>
                                </div>
                            </div>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_FIXED">
                            <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_SUBSCRIPTION">
                        <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                        <span class="subscription-has-free-trial" ng-show="selectedTerm.isSubscription && selectedTerm.hasFreeTrial">
                            <span ng-if="isAuthorizationSupportedByPaymentMethod()">
                                <t>You have to proceed to the payment provider page and confirm the payment for the
                                {{selectedTerm.firstRealPriceWithTax}} to allow us to renew your subscription when time will come. You'll not
                                be actually charged.</t>
                            </span>

                            <span ng-if="!isAuthorizationSupportedByPaymentMethod()" ng-switch="getFreeTrialType()">
                                <span ng-switch-when="FREE_TRIAL_TERM_PROMO" id="free-trial-term-promo-message">
                                    <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                                <span ng-switch-when="FREE_TRIAL_TERM" id="free-trial-term-message">
                                    <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                                <span ng-switch-when="FREE_TRIAL_PROMO" id="free-trial-promo-message">
                                    <t>Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                            </span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div desktop ng-if="isPayWhatYouWantTerm() !== true">
                <table class="tariff-plan">
                    <thead>
                    <tr ng-if="!isTaxColumnVisible()">
                        <th class="tariff-plan-title starting-title">
                            <t>Starting</t>
                        </th>
                        <th class="tariff-plan-title duration-title">
                            <t>Duration</t>
                        </th>
                        <th class="tariff-plan-title billing-title">
                            <t>Total Amount</t>
                        </th>
                        <th class="tariff-plan-title vat-title">&nbsp;</th>
                    </tr>
                    <tr ng-if="isTaxColumnVisible()">
                        <th class="tariff-plan-title">
                            <t>Starting</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Duration</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Price</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Tax</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Total Amount</t>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="tariff-plan-row" ng-repeat="interval in input.confirmated.billingPlan">

                        <td class="tariff-plan-cell">
                            <span ng-bind-html="interval.date"></span>
                        </td>
                      <td class="tariff-plan-cell"  ng-if="!selectedTerm.forceAutoRenew">
                            {{interval.billingPeriod}}
                        </td>
                      <td class="tariff-plan-cell"  ng-if="selectedTerm.forceAutoRenew">
                            {{interval.duration}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.price}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.tax.replace('INR','₹ ')}}
                            <span canadian-hint="" ></span>
                        </td>
                        <td ng-if="!hasTax()" class="tariff-plan-cell" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                           <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="hasTax()" class="tariff-plan-cell" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                            <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="isVatColumnVisible()" class="tariff-plan-cell vat-amount">
                            <div>
                                <t>Incl. {{getVatLabel()}} {{ interval.tax.replace('INR','₹ ') }}</t>
                            </div>
                        </td>
                    </tr>
                    <tr ng-if="isVatColumnAvailable()" class="incl-vat-row">
                        <td colspan="2">&nbsp;</td>
                        <td colspan="2">
                            <t>All prices Incl.</t> <span class="link" ng-click="toggleVatColumn()">{{getVatLabel()}}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div mobile ng-if="isPayWhatYouWantTerm() !== true" ng-repeat="interval in input.confirmated.billingPlan">
                <table class="tariff-plan">
                    <tbody>
                      <tr>
                                <th class="tariff-plan-mobile-title"><t>Starting</t></th>
                                <td class="tariff-plan-mobile-value"><span ng-bind-html="interval.date"></span></td>
                     </tr>
                      <tr>
                                <th class="tariff-plan-mobile-title"><t>Duration</t></th>
                                <td class="tariff-plan-mobile-value" ng-if="!selectedTerm.forceAutoRenew"><span> {{interval.billingPeriod}}</span></td>
                               <td class="tariff-plan-mobile-value" ng-if="selectedTerm.forceAutoRenew"><span> {{interval.duration}}</span></td>
                            </tr>
                      <tr>
                                <th class="tariff-plan-mobile-title"><t>Total Amount</t></th>
                                <td class="tariff-plan-mobile-value">
                                    <div ng-if="!hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                    <div ng-if="hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr ng-if="isVatColumnAvailable() && interval.tax">
                                <th class="tariff-plan-mobile-title"><t>Incl. {{getVatLabel()}}</t></th>
                                <td class="tariff-plan-mobile-value tariff-plan-mobile-value-dimmed"><span ng-bind-html="interval.tax.replace('INR','₹ ')"></span></td>
                            </tr>
                      </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="footer-modal">
        <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
            <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew" id="auto_renew" readonly/>
            <label class="auto-renew-purchase-label" for="auto_renew"><t>Automatically renew my subscription when the time comes.</t></label>
        </div>
        <div class="complete-purchase-button" complete-purchase-button title="{{'Complete Purchase' | t}}"></div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/external-verification-component.html">

        <div ng-if="isAuthFormShow()" auth-component></div>

        <h1 ng-if="!rejected() && !failed()" class="header-title-information">
            {{externalApiTitle()}}
        </h1>

        <div ng-if="rejected()">
            <div class="external-errors">
                <div class="icon-attention"></div>
                <ol class="external-errors__list">
                    <li class="external-errors__list-item" ng-repeat="message in errorMessages() track by $index">{{message}}</li>
                </ol>
            </div>

            <ul class="external-descriptions">
                <li class="external-descriptions__item">
                    <t>It seems that your credentials are not valid</t>
                </li>
                <li class="external-descriptions__item">
                    <t>Feel free to re-try other credentials</t>
                </li>
            </ul>
        </div>

        <div ng-if="failed()">
            <div class="external-errors">
                <div class="icon-attention"></div>
                <ol class="external-errors__list">
                    <li class="external-errors__list-item" ng-repeat="message in errorMessages() track by $index">{{message}}</li>
                </ol>
            </div>

            <ul class="external-descriptions">
                <li class="external-descriptions__item">
                    <t>There seems to be a network problem</t>
                </li>
                <li class="external-descriptions__item">
                    <t>Feel free to re-try later</t>
                </li>
            </ul>
        </div>

        <div external-api-fieldset selected="activeItem">
            <div external-api-fieldset-list class="selectable-radio-list">
                <div external-api-fieldset-exists>
                    <label class="selectable-list-item">
                        <input type="radio" ng-model="$ctrl.selected" ng-value="$item" class="selectable-list-radiobutton">
                        <div class="selectable-list-title">{{$item.infoModel.line1}}</div>
                        <div class="selectable-list-note">{{$item.infoModel.line2}}</div>
                    </label>
                </div>
                <div external-api-fieldset-new>
                    <label class="selectable-list-item">
                        <input type="radio" ng-model="$ctrl.selected" ng-value="$item" class="selectable-list-radiobutton">
                        <div class="selectable-list-title-single">{{externalApiVerifyNew()}}</div>
                    </label>
                </div>
            </div>
            <div external-api-fieldset-form ng-class="{'validated': validated}">
                <div external-api-fieldset-field class="shake-element" >
                    <label for="{{$field.fieldName}}" external-api-fieldset-hint="$field.description">
                        {{$field.fieldTitle}}
                        <span ng-if="$field.fieldName === 'zipCode' && $ctrl.showNoteByCountryCode($ctrl.country.countryCode)">
                            <t>(US zip 5-digit only)</t>
                        </span>
                    </label>
                    <div external-api-fieldset-input="$field"></div>
                </div>
            </div>
        </div>

        <div class="access-footer vanilla2">
            <div class="access-footer-content">
                <div class="access-button">
                    <div class="ng-isolate-scope" title="{{externalApiApplyButtonName()}}">
                        <a href="javascript:void(0)" class="button access-check-apply" ng-click="check()">
                            <span ng-if="!rejected() && !failed()">{{externalApiApplyButtonName()}}</span>
                            <span ng-if="rejected() || failed()"><t>Try again</t></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-list.html">
    <div ng-transclude ng-if="$ctrl.savedForms.length"></div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-form.html">
    <form name="externalVerificationForm" ng-if="!$ctrl.savedForms.length || $ctrl.selected === $ctrl.newItem">
        <div ng-transclude class="floating-table"
             ng-class="{'center': $ctrl.countVisibleFields === 1, 'grayed': $ctrl.savedForms.length}">
        </div>
    </form>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-field.html">
    <div ng-repeat="$field in $ctrl.fields track by $field.fieldName" class="fieldset" ng-class="'field-' + $field.fieldName">
        <div ng-if="!$field.hidden" inject class="floating-table-cell"></div>
        <input ng-if="$field.hidden" type="hidden" ng-model="$field.value">
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-field-input.html">
    <div class="field-wrapper">
        <div class="input">
            <input type="text" id="{{$field.fieldName}}" class="flat"
                   ng-model="$item[$field.fieldName]"
                   ng-required="$field.mandatory"/>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-field-country.html">
    <select ng-options="country.countryName for country in $ctrl.countries track by country.countryName"
            ng-model="$ctrl.country" id="{{$field.fieldName}}" ng-required="$field.mandatory">
    </select>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-field-region.html">
    <region-select input-class="flat" wrapper-input-class="field-wrapper" input-id="{{$field.fieldName}}"
                   region="$ctrl.region"
                   country="$ctrl.country"
                   countries="$ctrl.countries">
    </region-select>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/external-api-fieldset-hint.html">
    <span class="hint" ng-if="text">
        <span class="hint-text">{{text}}</span>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/print-address-component.html">

    <h1 class="header-title-information">
        <t>Enter Your Subscription Address</t>
    </h1>

    <div class="selectable-radio-list">
        <label ng-repeat="item in savedForms() track by $index" class="selectable-list-item" ng-class="{'current': item.pubId === model.activeItem.pubId}">
            <input type="radio" ng-model="model.activeItem" ng-value="item" class="selectable-list-radiobutton">
            <div class="selectable-list-title">{{item.infoModel.line1}}</div>
            <div class="selectable-list-note">{{item.infoModel.line2}}</div>
        </label>
        <label class="selectable-list-item" ng-class="{'current': 'add_new' === model.activeItem}">
            <input type="radio" ng-model="model.activeItem" ng-value="'add_new'" id="add_new" class="selectable-list-radiobutton">
            <div class="selectable-list-title-single"><t>New address</t></div>
        </label>
    </div>

    <div ng-show="model.activeItem === 'add_new'">
        <form name="printAddressForm" class="print-address-form" ng-class="{'validated': validated}">
            <div class="floating-table" ng-class="{'grayed': model.activeItem === 'add_new'}">

                <div class="floating-table-cell field-country">
                    <div class="shake-element">
                        <label for="country">
                            <t>Country</t>
                        </label>
                        <div>
                            <select id="country"
                                    required
                                    ng-model="model.country"
                                    ng-options="country.countryName for country in countryList() track by country.countryName">
                            </select>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-firstName">
                    <div class="shake-element">
                        <label for="firstName">
                            <t>First Name</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="firstName" class="flat" ng-model="form.firstName" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-lastName">
                    <div class="shake-element">
                        <label for="lastName">
                            <t>Last Name</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="lastName" class="flat" ng-model="form.lastName" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-address1">
                    <div class="shake-element">
                        <label for="address1">
                            <t>Address 1</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="address1" class="flat" ng-model="form.address1" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-address2">
                    <div class="shake-element">
                        <label for="address2">
                            <t>Address 2</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="address2" class="flat" ng-model="form.address2" type="text"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-city">
                    <div class="shake-element">
                        <label for="city">
                            <t>City</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="city" class="flat" ng-model="form.city" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-region">
                    <div class="shake-element">
                        <label for="region">
                            <t>State/Provinces</t>
                        </label>
                        <div>
                            <region-select input-class="flat" wrapper-input-class="field-wrapper"
                                           id="region"
                                           region="model.region"
                                           country="model.country"
                                           countries="countryList()">
                            </region-select>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-zipCode">
                    <div class="shake-element">
                        <label for="zipCode">
                            <t>Postal Code</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="zipCode" class="flat" ng-model="form.zipCode" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-table-cell field-phone">
                    <div class="shake-element">
                        <label for="phone">
                            <t>Phone</t>
                        </label>
                        <div class="field-wrapper">
                            <div class="input">
                                <input id="phone" class="flat" ng-model="form.phone" type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="access-footer vanilla2">
        <div class="access-footer-content">
            <div class="access-button">
                <div title="{{ 'Save' | t }}">
                    <a class="button access-check-apply" ng-click="save()"><t>Save</t></a>
                </div>
            </div>
            <div class="access-button">
                <div class="close-button-wrapper" close-button="" title="{{ 'Close' | t }}">
                    <a class="button cancel"><t>Close</t></a>
                </div>
            </div>
        </div>
    </div>

</script>
<!-- bank-secure-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/bank-secure-component.html">
    <div no-language class="account-popup-header">
        <div class="previous-button-wrapper" ng-click="gotoPreviousState()">
            <a href="javascript:void(0)" class="button back"></a>
        </div>
    </div>

    <div id="bank-secure-container" class="bank-secure-container align-content-center-flex" style="height: 400px">
        <div id="bank-secure-loader" class="bank-secure-loader">
            <div class="loader-overlay"></div>
        </div>
        <div id="container-with-buttons" class="error-occurred-wrapper">
            <div class="onet-buttons-container align-content-center-flex">
                <a ng-click="gotoPreviousState()" class="button complete-purchase" style="margin-right: 10px;">
                    <t>Go back to previous step</t>
                </a>
                <t>or</t>
                <div class="complete-purchase-button" complete-purchase-button
                     title="{{'Try again' | tc:'checkout.platform'}}"
                     style="margin-left: 10px;"></div>
            </div>
        </div>
    </div>
</script>
<!-- shared-subscription-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/shared-subscription-component.html">
    <div account-header-component></div>

    <div class="ss__body">
        <h1 class="ss__h1"><t context="checkout.platform">Input the emails of the shared accounts below</t></h1>

        <div class="ss__subheading"><t context="checkout.platform">You can also specify accounts any time via <span class="ss__subheading--black">My Account</span></t></div>

        <div class="" ng-show="storage.users.length > 0">
            <div class="ss__border--top ss__border--bottom ss__indent" ng-class="{'ss__editable__row--last': (storage.users.length === (storage.editableUserIndex+1)) && (storage.users.length === ($index+1)) && isEditingFormShown()}" ng-repeat="user in storage.users">
                <div class="ss__user-info-wrapper ss__row" ng-show="storage.user.email !== user.email">
                    <div class="ss__flex-row--left-column">
                        {{user.email}}
                        <span ng-if="user.completeName.length">
                            -
                            <span class="ss__color--grey">{{user.completeName}}</span>
                        </span>
                    </div>
                    <div class="ss__flex-row--right-column">
                        <button type="button" class="ss__row-button ss__row-button--delete" ng-click="deleteUser(user)" ng-disabled="storage.showForm === true"><t context="checkout.platform">Delete user</t></button>
                        <button type="button" class="ss__row-button ss__row-button--edit" ng-click="editUser(user, $index)" ng-disabled="storage.showForm === true"><t context="checkout.platform">Edit</t></button>
                    </div>
                </div>
                <div ng-if="storage.user.email === user.email">
                    <div shared-subscription-form-component storage="storage"></div>
                </div>
            </div>
        </div>

        <div class="ss__single-form" ng-if="!isUsersExists() || (isEditingFormShown() && !isEditingUser())" shared-subscription-form-component storage="storage"></div>
        <div class="user-control" ng-class="{'no-user-control': isEditingFormShown() && storage.sharedAccountsLimit > 0 && isUsersExists()}">
            <div ng-if="!isUsersExists()"><t context="checkout.platform" arg0="{{storage.sharedAccountsLimit}}">You can add up to {0} shared accounts</t></div>
            <button class="ss__add-shared-account" ng-show="canAddUser()" ng-click="addUser()"><t context="checkout.platform">Add shared account <span class="ss__add-shared-account--limit">({{storage.sharedAccountsLimit}} more)</span></t></button>
            <span class="ss__color--grey" ng-show="storage.sharedAccountsLimit === 0"><t context="checkout.platform">You have reached your shared accounts limit</t></span>
        </div>

    </div>
    <div class="footer-modal ss-footer-modal">
        <a ng-show="!isUsersExists() && !isFormDirty()" ng-click="skip()" class="button complete-purchase ss-complete-purchase">
            <t context="checkout.platform">Skip</t>
        </a>
        <a ng-show="isUsersExists() || (!isUsersExists() && isFormDirty())" ng-click="next()" class="button complete-purchase ss-complete-purchase" ng-class="{'disabled': isFormDirty() || isEditingFormShown() }">
            <t context="checkout.platform">Next</t>
        </a>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/shared-subscription-form-component.html">
    <form name="manageSharedUserForm" class="ss__form">
        <div class="ss__row">
            <div class="ss__row-right-column">
                <button type="button" class="ss__row-button ss__row-button--cancel" ng-disabled="storage.users.length === 0" ng-click="cancelEditingUser()"><t context="checkout.platform">Cancel</t></button>
                <button type="button" class="ss__row-button ss__row-button--apply" ng-disabled="storage.isFormDirty !== true" ng-click="validateUser()"><t context="checkout.platform">Apply</t></button>
            </div>
            <div class="ss__row-left-column">
                <input type="text"
                       id="ss-user-email"
                       class="ss__row-input regular-border"
                       name="email"
                       ng-model="user.email"
                       ng-keydown="onKeyDown($event)"
                       ng-change="checkIsFormValid()"
                       placeholder="{{'Email...' | tc:'checkout.platform'}}"
                       autocomplete="off"
                       auto-focus
                       required />
            </div>
        </div>
        <div class="ss__row">
            <div class="ss__row-left-column">
                <div class="ss__row-left-column__first-half">
                    <input type="text"
                           class="ss__row-input regular-border"
                           ng-model="user.firstName"
                           name="firstName"
                           ng-keydown="onKeyDown($event)"
                           ng-change="checkIsFormValid()"
                           placeholder="{{'First name (Optional)...' | tc:'checkout.platform'}}"
                           autocomplete="no-autocomplete" />
                </div>
                <div class="ss__row-right-column__second-half">
                    <input type="text"
                           class="ss__row-input regular-border"
                           ng-model="user.lastName"
                           name="lastName"
                           ng-keydown="onKeyDown($event)"
                           ng-change="checkIsFormValid()"
                           placeholder="{{'Last name (Optional)...' | tc:'checkout.platform'}}"
                           autocomplete="no-autocomplete" />
                </div>
            </div>
        </div>
    </form>
</script>

<!-- redeem-shared-subscription-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/redeem-shared-subscription-component.html">
    <div account-header-component></div>

        <div ng-if="loaded === true">
            <div ng-if="hasNoErrors === true">
                <div ng-if="isUserLoggedIn === true">
                    <div ng-if="isRedeemedEmailMatches === true">
                        <div class="receipt">
                            <div class="content purchase">
                                <h1 class="you-already-have-access">
                                    <t context="checkout.platform">Subscription successfully activated!</t>
                                </h1>

                                <t context="checkout.platform" arg0="{{parentEmail}}">You have successfully joined {0} subscription! Click <a href="{{businessUrl}}" target="_blank">here</a> to visit our homepage.</t>
                            </div>
                        </div>
                        <div class="redeem-ss-footer-modal redeem-ss-footer-modal--receipt">
                            <button ng-click="close()" class="button redeem-ss-button"><t context="checkout.platform">Close</t></button>
                        </div>
                    </div>
                    <div ng-if="isRedeemedEmailMatches === false">
                        <div class="receipt">
                            <div class="content purchase">
                                <h1 class="you-already-have-access">
                                    <t context="checkout.platform">Thanks for your registration!</t>
                                </h1>

                                <t context="checkout.platform">This email address has not been named on a shared subscription. Please verify that you registered with the same email that your invitation was sent to. You can modify your email in <span class="black">My Account</span> at any time.</t>
                            </div>
                        </div>
                        <div class="redeem-ss-footer-modal redeem-ss-footer-modal--receipt">
                            <button ng-click="close()" class="button redeem-ss-button"><t context="checkout.platform">Close</t></button>
                        </div>
                    </div>
                </div>
                <div ng-if="isUserLoggedIn === false">
                    <div class="redeem-ss-body">
                        <h1 class="redeem-ss-heading">
                            <t context="checkout.platform">Your access is just moments away</t>
                        </h1>
                        <div class="hint ss-hint mb4"><t context="checkout.platform">Please verify that you registered with the same email that your invitation was sent to.</t></div>
                        <div class="hint ss-hint"><t context="checkout.platform">After that please click on <span class="black">Redeem</span> to continue.</t></div>
                    </div>
                    <div class="redeem-ss-footer-modal">
                        <button ng-click="close()" class="button redeem-ss-button redeem-ss-button--gray"><t context="checkout.platform">Cancel</t></button>
                        <button ng-click="register()" class="button redeem-ss-button"><t context="checkout.platform">Redeem</t></button>
                    </div>
                </div>
            </div>
            <div ng-if="hasNoErrors === false">
                <div class="redeem-ss-body">
                    <h1 class="redeem-ss-heading">
                        <t context="checkout.platform">Something went wrong</t>
                    </h1>
                    <div class="hint ss-hint">{{errorMessage}}</div>
                </div>
                <div class="redeem-ss-footer-modal">
                    <button ng-click="close()" class="button redeem-ss-button"><t context="checkout.platform">Close</t></button>
                </div>
            </div>
        </div>
        <div ng-if="loaded === false">
            <div class="redeem-ss-body">
                <t context="checkout.platform">Loading...</t>
            </div>
            <div class="redeem-ss-footer-modal">
                <button ng-click="close()" class="button redeem-ss-button"><t context="checkout.platform">Close</t></button>
            </div>
        </div>

</script>
<!-- reactivate-subscription-components -->
<script type="text/ng-template" id="/widget/checkout/component/partials/reactivate-subscription-component.html">
  <div account-header-component></div>

  <div class="reactivate-subscription-header">
    <h1>
      <t>Renew your subscription</t>
    </h1>
  </div>

  <div class="subscription-details">
    <div ng-if="isSubscriptionFound()">
      <p ng-show="canRenew()">
        <t arg0="{{getTermName()}}">You are about to receive <b>{0}</b> access</t>
      </p>

      <p ng-hide="canRenew()"
         ng-switch
         on="getStatus()"
      >
        <span ng-switch-when="END">
          <t arg0="{{getTermName()}}">The <b>{0}</b> subscription won't renew due to a status change.</t>
          <t arg0="{{getTermName()}}">Please go to the <b>{0}</b> offer page to repurchase.</t>
        </span>
        <span ng-switch-when="C">
          <t arg0="{{getTermName()}}">The <b>{0}</b> subscription has been cancelled and can not be renewed.</t>
          <t arg0="{{getTermName()}}">Please go to the <b>{0}</b> offer page to repurchase.</t>
        </span>
        <span ng-switch-when="UPGRD">
          <t arg0="{{getTermName()}}">The <b>{0}</b> subscription has changed due to an upgrade and can not be renewed.</t>
          <t arg0="{{getTermName()}}">Please go to the <b>{0}</b> offer page to repurchase.</t>
        </span>
        <span ng-switch-when="E">
          <t arg0="{{getTermName()}}">Sorry, you can't renew the <b>{0}</b> subscription because it is in expired status. You can close this window and buy something else.</t>
        </span>
        <span ng-switch-when="EWE">
          <t arg0="{{getTermName()}}">Sorry, you can't renew the <b>{0}</b> subscription because it is in expired status. You can close this window and buy something else.</t>
        </span>
        <span ng-switch-default>
          <t arg0="{{getTermName()}}">The <b>{0}</b> subscription can not be renewed.</t>
          <t arg0="{{getTermName()}}">Please go to the <b>{0}</b> offer page to repurchase.</t>
        </span>
      </p>

      <div class="subscription-info">
        <table>
          <tr>
            <th>
              <t>Name</t>
            </th>
            <th>
              <t>Status</t>
            </th>
            <th ng-if="canShowDetails()">
              <t>Renewal date</t>
            </th>
            <th ng-if="canShowDetails() && getGrace()">
              <t>Grace status</t>
            </th>
            <th ng-if="canShowDetails()">
              <t>Billing</t>
            </th>
          </tr>
          <tr>
            <td>{{getTermName()}}</td>
            <td>
              <div ng-if="getStatus() === 'A'"><t>Active</t></div>
              <div ng-if="getStatus() === 'C'"><t>Cancelled</t></div>
              <div ng-if="getStatus() === 'EWE'"><t>Expired with error</t></div>
              <div ng-if="getStatus() === 'FAR'"><t>Fail with error</t></div>
              <div ng-if="getStatus() === 'E'"><t>Expired</t></div>
              <div ng-if="getStatus() === 'END'"><t>Won't renew</t></div>
              <div ng-if="getStatus() === 'UPGRD'"><t>Upgraded</t></div>
            </td>
            <td ng-if="canShowDetails()">
              <t>{{getSubscriptionFieldByName('renewalDate') | date:'mediumDate'}}</t>
            </td>
            <td ng-if="canShowDetails() && getGrace()">
              <t arg0="{{getGrace()}}">Ends in {0} days</t>
            </td>
            <td ng-if="canShowDetails()">{{getSubscriptionFieldByName('billing')}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div ng-if="isSubscriptionNotFound()">
      <p>
        <t>We are unable to locate your subscription. Please go to the offer page to repurchase.</t>
      </p>
    </div>
  </div>

  <div class="reactivate-subscription-footer">
    <div class="access-button"
         ng-show="canRenew()">
      <a class="button big fixed--middle cancel-button"
         ng-click="cancel()"
      >
        <t>Cancel</t>
      </a>
      <a class="button big fixed--middle confirmation-button"
         ng-click="renew()"
      >
        <t>Authenticate</t>
      </a>
    </div>
    <div class="access_button"
         ng-hide="canRenew()"
    >
      <a class="button big fixed--middle confirmation-button"
         ng-click="cancel()"
      >
        <t>Close</t>
      </a>
    </div>
  </div>
</script>


<!-- Start main controller -->
<div id="checkout-container" style="">
    <div checkout width="740" height="100" ng-cloak>
        <div id="default-error-screen" ng-show="terminalError">
            <div class="error-screen">
    <div class="account-popup-header" ng-if="isUserValid()">
        <div class="account-group">
            <boilerplate-close-button></boilerplate-close-button>
            <div class="button pict"></div>
            <div class="account-data">
                <div ng-if="user.displayName" class="account-name">{{user.displayName}}</div>
                <div ng-if="user.email" class="account-mail">{{user.email}}</div>
            </div>
        </div>
    </div>
    <div class="row">
        <language-selector></language-selector>
        <div class="error-notification-icon"></div>
        <div class="content">
            <h1 ng-show="terminalErrorHeading">{{terminalErrorHeading}}</h1>
            <h1 ng-show="!terminalErrorHeading"><t>An error has occurred</t></h1>


            <p class="ng-hide" ng-show="terminalError">
                {{terminalError}}
            </p>
        </div>
    </div>
</div>

        </div>

        <div ng-show="!terminalError">

            <div view="state1">
    <div account-header-component></div>

    <div class="row account-head">
        <div class="business-logo" ng-show="selectedTerm.resource.imageUrl">
            <img class="logo-img" ng-src="{{selectedTerm.resource.imageUrl}}">
        </div>
        <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
            <div class="account-head-content">
                <h2>
                    <t>Checkout with {{app.name}}</t>
                </h2>

                <p>
                    <t>Choose from any one of our options below.</t>
                </p>
            </div>
            <div class="clr"></div>
        </div>
    </div>

    <div>
        <div term-selector-component></div>
    </div>
</div>

<div view="state2">
    <div account-header-component></div>
    <div class="text-left pad-2 w-25">
         <p class="title spacing">Review</p>
    </div>
  <div class="content">
    <div class="bg-blue">
            <div class="flex-container">
              <div class="flex-item">
                <p>{{selectedTerm.resource.name | tc:'resource.name'}}</p>
                <p class="small small-sm-2">
                  Includes unlimited access to {{selectedTerm.resource.name | tc:'resource.name'}} and
                  other premium subscriber only features.
                </p>
              </div>
              <div class="flex-item">
                <div class="business-logo" ng-show="{{selectedTerm.resource.imageUrl}}">
                    <img class="logo2" ng-src="{{selectedTerm.resource.imageUrl}}"/>
                   </div>
              </div>
            </div>

           <!--<p class="ml-1 accordion" id="more">
                 More info<span><img src="https://www.thehindu.com/static/content/images/20210120151613/Vector.png" id="arrow" class="arrow rotate-image-back"></span>
          </p>
            <div id="content" class="collapsible small none">
              <ul>
                <li>The Hindu Web, Apps &amp; ePaper</li>
                <li>The Hindu BusinessLine Web, Apps &amp; ePaper</li>
                <li>Frontline Web</li>
                <li>Sportstar Web</li>
                <li>Crossword Web</li>
              </ul>
            </div>-->
          </div>
  </div>
    <div class="row account-head">
        <!--<div class="business-logo" ng-show="app.image1">
            <img class="logo-img" ng-src="{{app.image1}}"/>
        </div>-->
        <!--<div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">-->
            <!--<div class="account-head-content">
                <!-- <h1>{{selectedTerm.resource.name | tc:'resource.name'}}</h1>

                <div class="term-details">
                    <div ng-if="isPayableTerm(selectedTerm)" ng-switch="getPayableTermType()">
                        <div ng-switch-when="PAYABLE">
                            <span class="has-free-trial"><t>You are about to be charged <b>{{input.chargeDisplayAmount}}</b>.</t></span>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_FIXED">
                            <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_SUBSCRIPTION">
                            <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                            <span class="subscription-has-free-trial"
                                  ng-show="selectedTerm.isSubscription && selectedTerm.hasFreeTrial">
                            <span ng-if="isAuthorizationSupportedByPaymentMethod()">
                                <t>You have to proceed to the payment provider page and confirm the payment for the
                                {{selectedTerm.firstRealPriceWithTax}} to allow us to renew your subscription when time will come. You'll not
                                be actually charged.</t>
                            </span>

                            <span ng-if="!isAuthorizationSupportedByPaymentMethod()" ng-switch="getFreeTrialType()">
                                <span ng-switch-when="FREE_TRIAL_TERM_PROMO" id="free-trial-term-promo-message">
                                    <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                                <span ng-switch-when="FREE_TRIAL_TERM" id="free-trial-term-message">
                                    <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                                <span ng-switch-when="FREE_TRIAL_PROMO" id="free-trial-promo-message">
                                    <t>Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                </span>
                            </span>
                        </span>

                        </div>
                    </div>
                </div>
            </div> -->
<div class="plan-details">
               <p>Plan details</p>
            <div class="pay-what-you-want" ng-if="isPayWhatYouWantTerm()">
                <span pay-what-you-want-form-component></span>
            </div>
            <div desktop ng-if="isPayWhatYouWantTerm() !== true && isPayableTerm(selectedTerm)">
              
                <table class="tariff-plan">
                    <thead>
                    <tr ng-if="!isTaxColumnVisible()">
                        <th class="tariff-plan-title starting-title">
                            <t>Starting</t>
                        </th>
                        <th class="tariff-plan-title duration-title">
                            <t>Duration</t>
                        </th>
      
                        <th class="tariff-plan-title billing-title">
                            <t>Total Amount</t>
                        </th>

                        <th class="tariff-plan-title vat-title">&nbsp;</th>
                    </tr>
                    <tr ng-if="isTaxColumnVisible()">
                        <th class="tariff-plan-title">
                            <t>Starting</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Duration</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Price</t>
                        </th>
                        <th class="tariff-plan-title">
                            <t>Tax</t>
                        </th>
                       <th class="tariff-plan-title">
                            <t>Total Amount</t>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="tariff-plan-row" ng-repeat="interval in selectedTerm.billingPlanTable" ng-if="selectedTerm.forceAutoRenew">
                        <td class="tariff-plan-cell" data-e2e="period-start">
                            <span ng-bind-html="interval.date"></span>
                        </td>
                        <td class="tariff-plan-cell" data-e2e="period-end" ng-if="!selectedTerm.forceAutoRenew">
                            {{interval.billingPeriod}}
                        </td>
                      <td class="tariff-plan-cell" data-e2e="period-end" ng-if="selectedTerm.forceAutoRenew">
                            {{interval.duration}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.price}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.tax}}
                            <span canadian-hint=""></span>
                        </td>
                       
                        <td ng-if="!hasTax()" class="tariff-plan-cell" data-e2e="period-price" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                           <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="hasTax()" class="tariff-plan-cell" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                           <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="isVatColumnVisible()" class="tariff-plan-cell vat-amount">
                            <div>
                                <t>Incl. {{getVatLabel()}} {{ interval.tax.replace('INR','₹ ') }}</t>
                            </div>
                        </td>

                    </tr>
                    <tr class="tariff-plan-row" ng-repeat="interval in selectedTerm.billingPlanTable | limitTo : 1" ng-if="!selectedTerm.forceAutoRenew">
                        <td class="tariff-plan-cell" data-e2e="period-start">
                            <span ng-bind-html="interval.date"></span>
                        </td>
                        <td class="tariff-plan-cell" data-e2e="period-end" ng-if="!selectedTerm.forceAutoRenew">
                            {{interval.billingPeriod}}
                        </td>
                      <td class="tariff-plan-cell" data-e2e="period-end" ng-if="selectedTerm.forceAutoRenew">
                            {{interval.duration}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.price}}
                        </td>
                        <td class="tariff-plan-cell" ng-if="isTaxColumnVisible()">
                            {{interval.tax}}
                            <span canadian-hint=""></span>
                        </td>
                       
                        <td ng-if="!hasTax()" class="tariff-plan-cell" data-e2e="period-price" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                           <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="hasTax()" class="tariff-plan-cell" ng-switch
                            on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                           <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                        </td>
                        <td ng-if="isVatColumnVisible()" class="tariff-plan-cell vat-amount">
                            <div>
                                <t>Incl. {{getVatLabel()}} {{ interval.tax.replace('INR','₹ ') }}</t>
                            </div>
                        </td>
                    </tr>
                    <tr ng-if="isVatColumnAvailable()" class="incl-vat-row">
                        <td colspan="2">&nbsp;</td>
                        <td colspan="2">
                            <t>All prices Incl.</t>
                            <span class="link" ng-click="toggleVatColumn()">{{getVatLabel()}}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div mobile ng-if="isPayWhatYouWantTerm() !== true && isPayableTerm(selectedTerm)">
                <div ng-repeat="interval in selectedTerm.billingPlanTable" class="tariff-plan-mobile-wrapper" ng-if="selectedTerm.forceAutoRenew">
                    <table class="tariff-plan-mobile">
                        <tbody>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Starting</t></th>
                                <td class="tariff-plan-mobile-value"><span ng-bind-html="interval.date"></span></td>
                            </tr>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Duration</t></th>
                                <td class="tariff-plan-mobile-value" ng-if="!selectedTerm.forceAutoRenew"><span ng-bind-html="interval.billingPeriod"></span></td>
                               <td class="tariff-plan-mobile-value" ng-if="selectedTerm.forceAutoRenew"><span ng-bind-html="interval.duration"></span></td>
                            </tr>
                            <tr ng-if="isTaxColumnVisible()">
                                <th class="tariff-plan-mobile-title"><t>Price</t></th>
                                <td class="tariff-plan-mobile-value"><span ng-bind-html="interval.price"></span></td>
                            </tr>
                            <tr ng-if="isTaxColumnVisible()">
                                <th class="tariff-plan-mobile-title"><t>Tax</t></th>
                                <td class="tariff-plan-mobile-value">
                                    {{interval.tax.replace('INR','₹ ')}}
                                    <span canadian-hint=""></span>
                                </td>
                            </tr>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Total Amount</t></th>
                                <td class="tariff-plan-mobile-value">
                                    <div ng-if="!hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                    <div ng-if="hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr ng-if="isVatColumnAvailable() && interval.tax">
                                <th class="tariff-plan-mobile-title"><t>Incl. {{getVatLabel()}}</t></th>
                                <td class="tariff-plan-mobile-value tariff-plan-mobile-value-dimmed"><span ng-bind-html="interval.tax.replace('INR','₹ ')"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div ng-repeat="interval in selectedTerm.billingPlanTable| limitTo : 1" ng-if="!selectedTerm.forceAutoRenew" class="tariff-plan-mobile-wrapper">
                    <table class="tariff-plan-mobile">
                        <tbody>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Starting</t></th>
                                <td class="tariff-plan-mobile-value"><span ng-bind-html="interval.date"></span></td>
                            </tr>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Duration</t></th>
                                <td class="tariff-plan-mobile-value" ng-if="!selectedTerm.forceAutoRenew"><span ng-bind-html="interval.billingPeriod"></span></td>
                               <td class="tariff-plan-mobile-value" ng-if="selectedTerm.forceAutoRenew"><span ng-bind-html="interval.duration"></span></td>
                            </tr>
                            <tr ng-if="isTaxColumnVisible()">
                                <th class="tariff-plan-mobile-title"><t>Price</t></th>
                                <td class="tariff-plan-mobile-value"><span ng-bind-html="interval.price"></span></td>
                            </tr>
                            <tr ng-if="isTaxColumnVisible()">
                                <th class="tariff-plan-mobile-title"><t>Tax</t></th>
                                <td class="tariff-plan-mobile-value">
                                    {{interval.tax.replace('INR','₹ ')}}
                                    <span canadian-hint=""></span>
                                </td>
                            </tr>
                            <tr>
                                <th class="tariff-plan-mobile-title"><t>Total Amount</t></th>
                                <td class="tariff-plan-mobile-value">
                                    <div ng-if="!hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</span>
                               <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.price.replace('INR','₹ ')}}</div>
                          <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                    <div ng-if="hasTax()" ng-switch
                                        on="interval.originalPrice !== null && interval.originalPrice.length > 0">
                                    <div ng-switch-when="true">
                                <span class="original-price">{{interval.originalPrice.replace('INR','₹ ')}}</span>
                                <span class="new-price" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</span>
                                <span class="new-price" ng-if="selectedTerm.forceAutoRenew">{{interval.totalBilling.replace('INR','₹ ')}}</span>
                            </div>
                            <div ng-switch-default="" ng-if="!selectedTerm.forceAutoRenew">{{interval.currency.replace('INR','₹ ')}} {{interval.priceValue + interval.taxValue |  number:2}}</div>
                            <div ng-switch-default="" ng-if="selectedTerm.forceAutoRenew" >{{interval.totalBilling.replace('INR','₹ ')}}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr ng-if="isVatColumnAvailable() && interval.tax">
                                <th class="tariff-plan-mobile-title"><t>Incl. {{getVatLabel()}}</t></th>
                                <td class="tariff-plan-mobile-value tariff-plan-mobile-value-dimmed"><span ng-bind-html="interval.tax.replace('INR','₹ ')"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
    <!--</div>-->
    <div auth-component></div>
    <div promo-code-component></div>
    <div payment-form-component></div>

</div>

<!-- Receipt Screen -->
<div view="alreadyHasAccess">
    <div already-has-access-component></div>
</div>

<div view="auth">
    <div account-header-component></div>
    <div auth-component></div>
</div>

<div view="lockedPromoCode">
    <div account-header-component></div>
    <div promo-code-component></div>
</div>

<div view="externalVerification">
    <div account-header-component></div>
    <div external-verification-component></div>
</div>

<div view="printAddress">
    <div account-header-component></div>
    <div print-address-component></div>
</div>

<div view="confirmation">
    <div confirmation-component></div>
</div>

<div view="giftParams">
    <div account-header-component></div>
    <div gift-form-component></div>
</div>

<div view="redemption">
    <div redemption-component></div>
</div>

<div view="user-non-confirmed">
    <div account-header-component></div>
    <div email-confirmation-required></div>
</div>

<div view="bankSecure">
    <div bank-secure-component></div>
</div>

<div view="sharedSubscription">
    <div shared-subscription-component></div>
</div>

<div view="redeemSharedSubscription">
    <div redeem-shared-subscription-component></div>
</div>

<div view="continueThreeDSPurchase">
    <div continue-three-d-s-purchase-component></div>
</div>



            <div view="offer">
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto:400,500,700&amp;subset=cyrillic" rel="stylesheet">

<div class="pn-boilerplate pn-boilerplate--offer-list pn-offer-list">
    <div class="pn-offer-list__body">
      <ul class="pn-offer-list__list list">
            <li class="pn-offer-list__item">
                <div class="bg-blue-2">
            <div class="flex-container col">
              <div class="flex-item text-left">
                <div class="title-bg-2">
                     <img src="https://assetsfl.thehindu.com/theme/images/FLRX/f-circle-red.svg" class="pn-boilerplate__close-icon">
                     <span>Get full access to our archives since 1984</span>
                </div>
                <p class="sub-title p3 sm-mb-1 mb-1">
                   
                  <br>
                   Get <span style="color:#B7080D">Frontline subscription</span> to continue with honest journalism subscription</small>
                </p>
             </div>
              <div  class="flex-item text-right">
                <button class="basic-btn" showScreen="register" ng-click="startCheckout(term.termId)"
                        external-event="offer-subscribe-{{ $index }}">
                  SUBSCRIBE NOW at $39.99/Year
                </button>
                <p class="already-subscribe" ng-if="!isUserValid()">Already a subscriber? <a ng-click="login()" external-event="login"> Log in</a> </p>
                <a class="seeallplans" href="https://frontline.thehindu.com/online-subscription/?utm_source=frontline_website&utm_medium=Subscribe_button">See All Plans</a>
              </div>
              
            </div>
            
          </div>
            </li>
        </ul> 
      
    </div>
</div>
<div custom-script>
  jQuery(document).on("click","#more",function() {
    jQuery("#more").toggleClass("rotate-img-180");
       jQuery("#more").toggleClass("rotate-img-back");
   jQuery("#content").toggleClass("none");
       
    });

  setTimeout(function(){ 
myFunction(document.getElementById("highlightnum").innerText);}, 100);
function myFunction(number) {
    const english_ordinal_rules = new Intl.PluralRules("en", {
        type: "ordinal"
    });
    const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    }
    const suffix = suffixes[english_ordinal_rules.select(number)];
    document.getElementById("highlightnum").innerHTML = number + <sup>suffix</sup>
}
</div>
            </div>

           <div view="receipt">
                <div ng-if="!isApplePayPaymentMethod()" account-header-component no-language></div>

<div class="receipt" ng-if="!isApplePayPaymentMethod()">
    <div class="row">
        <div class="success"></div>
        <div class="content" ng-switch="getReceiptType()" ng-class="getReceiptType().toLowerCase()">
            <div ng-switch-when="OpenpayCash">
                <div openpay-cash-receipt></div>
            </div>
            <div ng-switch-when="EasypayMultibanco">
                <div easypay-multibanco-receipt></div>
            </div>
            <div ng-switch-when="EasypayMbway">
                <div easypay-mbway-receipt></div>
            </div>
            <div ng-switch-when="EasypayDirectDebit">
                <div easypay-direct-debit-receipt></div>
            </div>
            <div ng-switch-when="EasypayBoleto">
                <div easypay-boleto-receipt></div>
            </div>
            <div ng-switch-when="Onet">
                <div onet-receipt></div>
            </div>
            <div ng-switch-when="GiftPurchase">
                <div gift-purchase-receipt></div>
            </div>
            <div ng-switch-when="GiftRedemption">
                <div gift-redemption-receipt></div>
            </div>
           <div ng-switch-when="Inbaf">
              <div inbaf-receipt></div>
            </div>
            <div ng-switch-when="Inbas">
              <div inbas-receipt></div>
            </div>
            <div ng-switch-when="External">
                <div external-receipt></div>
            </div>
            <div ng-switch-when="Registration">
                <div registration-receipt></div>
            </div>
            <div ng-switch-default="">
                <div purchase-receipt></div>
            </div>
        </div>
        <div class="access-footer" ng-if="getReceiptTemplateConfig().footer">
            <div class="access-footer-content">
                <div class="access-button">
                    <div close-button title="{{'Close'|t}}"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div>
    <div auto-close-apple-pay-receipt
         class="apple-pay-receipt-animation-container"
         ng-if="isApplePayPaymentMethod()"
         data-e2e="applePayReceipt"
    >

        <style>
            #checkout-container {
                background-color: rgba(255, 255, 255, 0);
            }
        </style>

        <div class="receipt apple-pay-receipt"
             id="apple-pay-receipt"
        >
            <div class="apple-pay-receipt__image check-sign">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g class="in">
                        <path class="circle" fill-rule="evenodd" clip-rule="evenodd"
                              d="M41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1C18.9086 1 1 18.9086 1 41C1 63.0914 18.9086 81 41 81Z"
                              stroke="#0F0F15" stroke-opacity="0.2"/>
                        <path class="check" d="M23.6609,45.0422 L34.4281,55.4047 L62.5515,27.4297" stroke="#0F0F15"
                              stroke-width="3"/>
                    </g>
                    <g class="out">
                        <path class="circle" fill-rule="evenodd" clip-rule="evenodd"
                              d="M41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1C18.9086 1 1 18.9086 1 41C1 63.0914 18.9086 81 41 81Z"
                              stroke="#0F0F15" stroke-opacity="0.2"/>
                        <path class="check" d="M23.6609,45.0422 L34.4281,55.4047 L62.5515,27.4297" stroke="#0F0F15"
                              stroke-width="3"/>
                    </g>
                </svg>
            </div>

            <h2 class="apple-pay-receipt__title">
                <t>You're all set</t>
            </h2>
            <p class="apple-pay-receipt__description">
                <t>A confirmation has been sent to <span class="apple-pay-receipt__mark">{{user.email}}</span></t>
            </p>
            <button ng-hide="isMobileUserAgent()"
                    class="unbutton apple-pay-button apple-pay-receipt__close apple-pay-button--disabled"
            >
                <t>Close</t>
            </button>
        </div>
    </div>
</div>

           </div>

            <div class='clearfix'></div>
        </div>

    </div>
</div>

<style type="text/css" tp-style="checkout-custom-style">
    /* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v22/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
body {
  font-family: "Inter", sans-serif;
  font-weight: 500;
} 
input:focus { font-size: 16px!important;touch-action: none;}
input{font-size: 16px!important;touch-action: none;}
.pad-2 {
    padding: 10px 20px;
}
.text-left {
    text-align: left;
}
.w-25 {
    width: 25%;
}
.title {
    font-size: 1.5rem;
    line-height: 2rem;
   color:#000;
}
p.title:first-child {
    margin-top: 0;
    margin-bottom: 0;
}
.bg-blue {
    background: #2d5f86;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    text-align: left;
}
.content {
    max-height: 65%;
    overflow: auto;
    padding: 0rem 1rem;
}
.small {
    font-size: 0.8rem;
    line-height: 1.3rem;
}
#more {
    cursor: pointer;
    font-size: 1rem;
}
.note {
    color: #4f4f4f;
}
.none {
    display: none;
}
.collapsible {
    padding: 0;
    margin: 0;
    transition: all 2s;
}
.arrow {
    width: 0.8rem;
    margin-left: 0.7rem;
}
ul {
    list-style-image: url(https://www.thehindu.com/static/content/images/20210120151613/bullettick.png);
	padding-left: 32px;
}
.bg-blue p:first-child {
    margin-top: 0;
    font-size: 1rem;
    
}
.desc {
    color: #828282;
}

.btn-secondary {
  width: 7rem;
  height: 2.8rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 4px;
  color: #153c59;
  border: 1px solid #153c59;
  cursor: pointer;
  font-size: 0.9rem;
}
.sub {
  width: 20rem;
  height: 2.8rem;
  padding: 0.5rem 1rem;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
}
.promo-code-component a.button.promo-code-apply {
    line-height: 40px;
    font-size: 16px;
    font-weight: 500;
    min-width: 120px;
    margin-top: 16px;
}
.promo-code-component a.button, a.button:visited {
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    line-height: 30px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 700;
    border: 0 none;
    border-radius: 4px;
    box-sizing: border-box;
    border-collapse: separate;
    background-color: #fff;
    margin-right: 10px;
    padding: 0 18px;
    transition: opacity .25s ease 0s,background .25s ease 0s;
    color: #153c59;
    border: 1px solid #153c59;
}
.promo-code-component a.button:hover{
background-color:#ffffff;
}
.promo-code-component a.button:focus{
border:1px solid #000;
}
.applied{
  width: 0.8rem;
  margin-left: 0.3rem;
}
.mb-2 {
    margin-bottom: 2rem;
}
.pad-0 {
    padding: 0;
}
.bg-blue .flex-container {
  padding:1px;
}
.flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
  padding:1px 1rem;
}
.promo-code-component .flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
    padding:0;
}
.flex-item {
    margin: 0.5rem 0.5rem 0 0;
    text-align: left;
}
.primary {
    color: #153c59;
}
.promo-code-component.verified {
    display: block;
    padding-top: 30px;
}
.bg-blue-shade {
    background: #f6f7fc;
}
.btn-primary {
    width: 7rem;
    height: 2.8rem;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    color: #ffffff;
    border-radius: 4px;
    background: #153c59;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
}
.account-popup-header {
    height: 40px;
}
.account-data {
    margin-top: 10px;
}
.payment-options .button.pay.pay_u_india_cc {
background-image: url("https://creatives.thehindu.com/cards.svg");
background-size: 100px;
}
.payment-options .button.pay.pay_u_india_cc_v2 {
background-image: url("https://creatives.thehindu.com/cards.svg");
background-size: 100px;
}
.payment-options .button.pay.pay_u_india_upi{
background-image: url("https://creatives.thehindu.com/upi.svg");
background-size: 100px;
}
.payment-options .button.pay.pay_u_india_nb{
background-image: url("https://creatives.thehindu.com/netbanking.svg");
     background-size: 100px;
}
.payment-options .button.pay {
    border: 1px solid #e5e5e5;
    height: 100px;
    width: 80%;
}
.payment-options .button.pay::after{
right: 20%;
}
@media (max-width: 600px){
.payment-options {
    display: flex;
    padding: 0 40px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.payment-options li {
    padding: 5px;
    height: 100px;
    flex-grow: 1;
    width: 33%;
    margin-bottom: 10px;
}
.payment-options .button.pay {
    width: 100%;
}
.payment-options .button.pay::after{
right: 0;
}
.payment-options li {
    border: none !important;
}
  .select-payment-options {
    margin-top: 10px; 
}
  .billing-country {
    margin-bottom: 0;
}
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
.bottom-fixed {
    position: absolute;
    bottom: 5rem;
    width: 90%;
    text-align: center;
    margin: 0;
}
}

.text-left {
    text-align: left;
}
.small-logo {
    width: 2rem;
    position: absolute;
    top: 4rem;
    right: 4rem;
}
.pad-3{
    padding: 0.5rem 0rem;
}
.receipt p {
    color: #000;
}
.receipt .content a {
    font-weight: 500;
    color: #153c59;
}
.ml-1{
  margin-left: 1rem;
}
.mb-2 {
    margin-bottom: 2rem;
}
.mt-2 {
    margin-top: 2rem;
}
hr {
    margin-bottom: 1rem;
    border-top: 1px solid #e0e0e0;
}
.receipt p.note {
    color: #4f4f4f;
}
.pad-1 {
    padding: 1rem;
}
.logo2{
  width: 6rem;
}
.account-head {
    padding: 10px 20px 0;
}
.promo-code-component {
    float: none;
    width: 100%;
    padding-top: 0px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
}
.flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
    padding: 1px 1rem;
}
.flex-item {
    margin: 0.5rem 0.5rem 0 0.5rem;
    text-align: left;
}
.weight {
    font-weight: 600;
}
.primary {
    color: #153c59 !important;
}
.default-temp .small {
    font-size: 0.9rem;
   color:#000000 !important;
}
.btn-primary {
    margin-bottom: 1rem;
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    background: #153c59;
    border-radius: 4px;
    border: 1px solid #153c59;
    color: #ffffff !important;
    cursor: pointer;
    font-size: 0.9rem;
}
.option {
    background: #f6f7fc;
    border: 1px solid #2d5f86;
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 1rem;
    margin: 1rem;
}
.option-new {
  background: #2d5f86;
  border: 1px solid #2d5f86;
  box-sizing: border-box;
  border-radius: 5px;
  line-height: 1rem;
  margin: 1rem;
}
.primary-new{
  color:#ffffff !important;
}
.default-temp .small-new{
color:#ffffff !important;
}
.btn-yellow {
    margin-bottom: 1rem;
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    background: #f7cf38;
    border-radius: 4px;
    color: #000000 !important;
    border: 1px solid #f7cf38;
    cursor: pointer;
    font-size: 0.9rem;
}
.text-white{
color:#ffffff !important;
}
@media (max-width: 564px) {
    .option {
    background: #f6f7fc;
    border: 1px solid #2d5f86;
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 1rem;
    margin: 1rem;
}
  .option-new {
    background: #2d5f86;
    border: 1px solid #2d5f86;
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 1rem;
    margin: 1rem;
}
  .bg-blue .flex-container {
  padding:1px;
}
}
.payment-options .button.pay.inbaf{
    background-image: url("https://creatives.thehindu.com/upinew.svg");
    width: 100%;
}
.inbaf-warning-icon{
      background-repeat: no-repeat;
}

.inbaf .payment-method-title {
    display: none;
}
</style>

<style  type="text/css" tp-style="offer-custom-style">
    @import url("https://fonts.googleapis.com/css2?family=Faustina:wght@300;400;500;600;700;800&display=swap");

/* scaffolding */ 
.pn-offer-list__list{
margin-top:0 !important;
} 
a.primary.weight {
    color: #000000;
}
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}

.unbutton {
    margin: 0;
    padding: 0;
    color: inherit;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
    outline: 0;
    border: 0;
}

.list {
    margin: 0;
    padding: 0;
    list-style: none;
}

h1,
h2,
h3 {
    margin: 0;
    font-weight: normal;
}

p {
    margin: 0;
}

img,
svg {
    display: block;
    max-width: 100%;
    height: auto;
}

svg {
    margin: 0 auto;
}

b {
    display: block;
    font-weight: normal;
}

i {
    font-style: normal;
}

a,
button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

/* general style */

.pn-boilerplate {
    width: 100%;
    font-family: 'Faustina', serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: rgba(50, 50, 50, 0.8);
    -webkit-font-smoothing: antialiased;
    text-align: center;
    background: #f1f1f1;
}

.pn-boilerplate__header {
  background-color:;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: auto;
    z-index: 9;
}

.pn-boilerplate__close {
    width: 63px;
    height: 100%;
    margin-left: auto;
    border-left: 1px solid rgba(50, 50, 50, 0.08);
    cursor: pointer;
}

.pn-boilerplate__close-icon {
    display: inline-block;
    vertical-align: middle;
    fill-opacity: 1;
    -webkit-transition: fill-opacity 0.1s linear;
    transition: fill-opacity 1s linear;
    float: left;
    right: 0;
    height:50px;
	width:50px;
    margin-right:15px;
}

.pn-boilerplate__close:hover .pn-boilerplate__close-icon,
.pn-boilerplate__close:focus .pn-boilerplate__close-icon {
    fill-opacity: 1;
}

.pn-boilerplate__button {
    min-width: 204px;
    padding: 13px 18px 11px;
    font-family: 'Faustina', serif;
    font-size: 11px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.14em;
    color: ;
    text-transform: uppercase;
    background-color: ;
    cursor: pointer;
}

.pn-boilerplate__button::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 9px;
    margin-left: 0;
    background-image: url('data:image/svg+xml,%3Csvg width=\'12\' height=\'9\' viewBox=\'0 0 12 9\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7.5 0l-.7.7L10.1 4H0v1h10.1L6.8 8.3l.7.7 4.3-4.3.2-.2-.2-.2L7.5 0z\' fill=\'rgb(255, 255, 255)\'/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
}

.pn-boilerplate__button:hover::after,
.pn-boilerplate__button:focus::after {
    width: 12px;
    margin-left: 13px;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

@media (max-width: 564px) {
    .pn-boilerplate {
        width: 100%;
    }
}

@media (max-width: 480px) {

    .pn-boilerplate__button {
        width: 100%;
    }
}

/* offer list */

.pn-offer-list {

}

.pn-offer-list__body {
    padding: 0;
}

.pn-offer-list__pic {
    margin: 0 auto 42px;
}

.pn-offer-list__accent {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 32px;
    color: ;
}

.pn-offer-list__text {
    color: #323232;
}

.pn-offer-list__text--subheader {
    color: ;
}

.pn-offer-list__text--description {
    color: ;
}

.pn-offer-list__list {
    margin-top: 50px;
    text-align: left;
}

.pn-offer-list__item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    padding: 0;
    background-color: ;
}

.pn-offer-list__item:last-of-type {
    margin-bottom: 0;
}

.pn-offer-list__duration {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-width: 60px;
    height: auto;
    margin-left: 0;
    margin-right: 20px;
}

.pn-offer-list__period {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    left: 0;
    margin: auto;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    z-index: 2;
}

.pn-offer-list__period-number {
    display: block;
    margin-bottom: 2px;
    font-size: 20px;
    line-height: 24px;
}

.pn-offer-list__period-name {
    display: block;
    font-family: 'Faustina', serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.14em;
}

.pn-offer-list__icon {}

.pn-offer-list__description {
    margin-right: 30px;
    flex: 1;
}

.pn-offer-list__name {
    font-size: 18px;
    line-height: 24px;
    color: ;
}

.pn-offer-list__subscribe {
    margin-left: auto;
}

/* offer list: responsive */

@media (max-width: 600px) {
  .pn-boilerplate__header{
  height:auto;
  }
  .ul {
    font-size: 12px;
    line-height: 16px;
    font-weight: 200;
    opacity: 0.7;
}
  .ul li {
    line-height: 15px;
    font-size: 12px;
    
    opacity: 0.7;
    
}
  .pn-boilerplate__close{
  width:25px;
  }
    .pn-offer-list__item {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding:0;
    text-align: center;
    }

    .pn-offer-list__icon {
        margin-right: 0;
        margin-bottom: 36px;
    }

    .pn-offer-list__description {
        margin-right: 0;
    }

    .pn-offer-list__name {
        margin-bottom: 7px;
    }

    .pn-offer-list__subscribe {
        margin-top: 55px;
        margin-left: 0;
    }
}

.pn-boilerplate__header-controls {
    padding-left: 20px;
    height: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 90px;
}

.pn-boilerplate__language-selector .language-label {
    height: auto;
    font-size: 14px;
    line-height: 17px;
    color: #323232;
}

.pn-boilerplate__account + .pn-boilerplate__close {
    margin-left: 0;
}

.pn-boilerplate__account {
    max-width: 250px;
    display: inline-block;
    margin-left: auto;
    height: 100%;
}

.pn-boilerplate-account__action {
    max-width: 60px;
}

.pn-boilerplate-account__btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
    background: transparent;
    border: 0;
    border-left: 1px solid rgba(50, 50, 50, 0.08);
    outline: none;
}

.pn-boilerplate-account__btn svg {
    -webkit-transition: fill-opacity 0.1s linear;
    transition: fill-opacity 0.1s linear;
}

.pn-boilerplate-account__btn:hover svg,
.pn-boilerplate-account__btn:focus svg {
    fill-opacity: 0.8;
}

.pn-boilerplate-account__btn.logout {
    padding-right: 5px;
}
html {
  font-family: 'Faustina', serif;
  height: 100vh;
  text-align: left;
  font-weight: 500;
  line-height: 1.4rem;
  font-size: 62.5%;
  color: #333333;
}
a {
  text-decoration: none;
  text-align: center;
}
hr {
  margin-bottom: 2rem;
  border-top: 1px solid #e0e0e0;
  margin-left: 1rem;
  margin-right: 1rem;
}
.hr1 {
  margin: 0;
  border: 1px solid #5789b0;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  overflow-y: hidden;
}
.overlay-bg {
  background: rgba(0, 0, 0, 0.7);
}
.overlay-bg-1 {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -3.39%,
    #ffffff 16.04%
  );
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
.popup {
  margin: auto;
  padding: 0;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  position: relative;
  box-shadow: 0px -1px 14px rgba(0, 0, 0, 0.25);
  top: 50%;
}
.popup-2 {
  margin: auto;
  padding: 0;
  background: #fff;
  border-radius: 5px;
  width: 60%;
  position: relative;
  box-shadow: 0px -1px 14px rgba(0, 0, 0, 0.25);
  top: 50%;
}
.blue-border {
  border: 2px solid #000000;
}
.middle {
  transform: translateY(-50%);
}
.bottom {
  bottom: 0;
  top: unset;
}
.popup .close {
  position: absolute;
  top: 1.4rem;
  right: 1.3rem;
  font-size: 2rem;
  text-decoration: none;
  color: #ffffff;
}
.popup-2 .close {
  position: absolute;
  top: 1.4rem;
  right: 1.3rem;
  font-size: 2rem;
  text-decoration: none;
  color: #ffffff;
}
.popup .content {
  max-height: 74%;
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
}
.popup-2 .content {
  max-height: 74%;
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
}
p {
  font-size: 1.2rem;
  line-height: 1.6rem;
}
.p1 {
  font-size: 1.4rem;
  line-height: 2rem;
}
.btn-highlight {
  width: max-content;
  padding: 1rem 2rem;
  box-sizing: border-box;
  color: #000000;
  border-radius: 4px;
  background: #FFCC00;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  z-index:101;
}
.btn-primary {
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  color: #ffffff;
  border-radius: 4px;
  background: #153c59;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
}
.btn-secondary {
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  border-radius: 4px;
  color: #153c59;
  border: 1px solid #153c59;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  background: white;
}
.flex-end {
  align-items: flex-end !important;
}
.btn-tertiary {
  width: 20rem;
  padding: 1rem 2rem;
  box-sizing: border-box;
  border-radius: 4px;
  color: #333333;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  background: #f6f7fc;
  position: relative;
}
.title-bg {
  background-color: #000000;
  font-family: 'Faustina', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  color: #ffffff;
  padding: 1.5rem;
}
.title-bg-2 {
  font-family: 'Faustina', serif;
  font-style: normal;
  font-size: 2.8rem;
  font-weight:bold;
  color: #000000;
  padding: 2rem 0rem 1rem;
  text-align:left;
}
.title-bg-2 span {
  display:block;
  padding-top:10px;
}
.flex-container {
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.flex-item {
  margin: 0 0;
}
.flex-2 {
  flex: 2;
}
.flex-3 {
  flex: 3;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
  
}
.text-right {
  text-align: right;
  padding-top:10px;
}
.highlight {
  color: #f7cf38;
  font-family: 'Faustina', serif;
  font-weight: 700;
  font-size: 2.2rem;
}
.bg-blue-shade {
  background-color: #f6f7fc;
  border-radius: 0 0 4px 4px;
}
.mr-1 {
  margin-right: 1rem;
}
.bg-blue {
  background-color: #000000;
  padding: 2rem;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Faustina', serif;
  font-size: 3rem;
}
.bg-blue-2 {
  padding: 0rem 2rem 1rem;
  color: #000000;
  margin: auto;
  width: 100%;
}
.flex-start {
  justify-content: flex-start;
}
.flex-center {
  justify-content: center;
}
.primary {
  color: #000000;
}
.sub-blue {
  color: #000000;
  font-weight: 400;
}
.position {
  top: 20%;
}
.note {
  color: #828282;
}
.bottom {
  position: absolute;
  margin-bottom: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-right {
  position: absolute;
  bottom: 4%;
  right: 3%;
  width: 40%;
  top: unset;
}
.arrow {
  width: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
}
.arrow-center {
  width: 2rem;
  position: absolute;
  top: -1rem;
  left: 48.3%;
  cursor: pointer;
}
.white-arrow {
  width: 0.8rem;
  margin-left: 0.5rem;
  cursor: pointer;
}
.white-arrow-2 {
  width: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
}
.vl {
  border-left: 1px solid #e0e0e0;
  height: 6rem;
  position: absolute;
  left: 49.5%;
}
.more {
  width: 1.3rem;
  cursor: pointer;
}
.float-right {
  float: right;
}
.title {
  font-family: 'Faustina', serif;
  font-size: 1.6rem;
  font-weight: 700;
}
.title-2 {
  font-family: 'Faustina', serif;
  font-weight: 700;
  font-size: 1.4rem;
}
.title-3 {
  font-family: 'Faustina', serif;
  font-weight: 700;
  font-size: 1.8rem;
}
.w-40 {
  width: 40%;
}
.w-60 {
  width: 60%;
}
.w-100 {
  width: 100%;
}
.weight {
  font-weight: 600;
}
.weight-700 {
  font-weight: 700;
}
.desc {
  color: #4f4f4f;
}
.desc-2 {
  color: #828282;
}
.btn-img {
  width: 14rem;
}
.btn-icon {
  width: 3rem;
  position: absolute;
  bottom: 0.9rem;
  left: 0;
}
.google {
  height: 4.5rem;
}
.rotate-img-180 {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  transition: all 200ms;
}
.rotate-img-back {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  transition: all 200ms;
}
.rotate-img-right {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(270deg);
  transition: all 200ms;
}
.none {
  display: none;
}
.ul {
  list-style-image: url("https://www.thehindu.com/static/content/images/20210317061049/tickYellow.png");
  text-align: left;
  position: relative;
  font-size: 12px;
  line-height: 16px;
  padding: 0;
  margin-left: 1rem;
  margin-top: 0;
}
.ul li{
  line-height: 16px;
}
.ul-2 {
  list-style-image: url("https://www.thehindu.com/static/content/images/20210317061049/tickYellow.png");
  text-align: left;
  position: relative;
  font-size: 1.2rem;
  line-height: 2.4rem;
  padding: 0;
  margin-left: 2rem;
  margin-top: 1rem;
  font-weight: normal;
}
.footer {
  font-size: 0.9rem;
  padding: 0 1rem;
}
.next {
  width: 0.5rem;
}
.justify-center {
  justify-content: center;
}
.insta {
  width: 2rem;
  bottom: 0.7rem;
  left: 0.5rem;
}
.text-white {
  color: #ffffff;
}
.fit-content {
  width: fit-content;
}
.weight-400 {
  font-weight: 400;
}
.gray-1 {
  color: #333333;
}
.yellow {
  width: 12%;
  border-top: 5px solid #f7cf38;
  margin: auto;
  margin-bottom: 2rem;
}
.p-1 {
  padding: 1rem;
}
.p-0 {
  padding-bottom: 0 !important;
}
.m-0 {
  margin: 0;
}
.mb-0 {
  margin-bottom: 0;
}
.editor {
  width: 8rem;
}
.sub-title {
  font-size: 1.75rem;
  font-weight:normal;
  padding-left:65px;
  padding-top:5px;
}
.price {
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.cost-1 {
  color: #141414;
  font-weight: 800;
  font-size: 1.6rem;
}
.cost-2 {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.6rem;
}
.offer {
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.6;
}
.offer-2 {
  font-size: 1.3rem;
  font-weight: 600;
}
.offer-3 {
  font-size: 1.3rem;
  font-weight: 400;
}
.link {
  font-size: 1.2rem;
}
.space-around {
  justify-content: space-around;
}
.w-90 {
  width: 90%;
  margin: auto;
  margin-bottom: 1rem;
}
.flex-6 {
  flex: 6;
}
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
/*radio buttons*/
.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #000000;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.back {
  width: 2rem;
  float: left;
  margin-left: 1rem;
  cursor: pointer;
}
.pay {
  width: 21rem;
}
.card-1 {
  background: #f6f7fc;
  border: 1px solid #0c5b9f;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 1rem;
  width: 33%;
}
.card-2 {
  background: #000000;
  border: 1px solid #0c5b9f;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 1rem;
  color: #ffffff;
  width: 33%;
}
.content-1 {
  display: block;
}
.inline{
  display: inline !important;
}
.content-2 {
  display: none;
}
.list {
  left: 15%;
  transform: translateX((-25%));
}
.size {
  font-size: 1.4rem;
}
.text {
  margin-top: 1rem;
}
.my-1-desktop {
  margin: 1rem 0;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.normal {
  font-weight: normal;
}
.pad-0 {
  padding: 0;
}
.pad-1{
  padding: 0 1rem;
}
.ml-1 {
  margin-left: 1rem;
}
.mt-4 {
  margin-top: 4rem;
}
.opacity {
  opacity: 0.6;
}
.opacity-2 {
  opacity: 0.5;
}
.popular {
  color: #5279aa;
  font-weight: bold;
}
@media (max-width: 1024px) {
  .ul {
    font-weight: 200;
  }
  .popup {
    margin: auto;
    padding: 0;
    background: #fff;
    border-radius: 5px;
    width: 50%;
    position: relative;
    box-shadow: 0px -1px 14px rgba(0, 0, 0, 0.25);
    top: 50%;
  }
  .popup-2 {
    margin: auto;
    padding: 0;
    background: #fff;
    border-radius: 5px;
    width: 70%;
    position: relative;
    box-shadow: 0px -1px 14px rgba(0, 0, 0, 0.25);
    top: 50%;
  }
  .blue-border {
    border: 2px solid #000000;
  }
  .middle {
    transform: translateY(-50%);
  }
  .bottom {
    bottom: 0;
    top: unset;
  }
  .popup .close {
    position: absolute;
    top: 1.4rem;
    right: 1.3rem;
    font-size: 2rem;
    text-decoration: none;
    color: #ffffff;
  }
  .popup-2 .close {
    position: absolute;
    top: 1.4rem;
    right: 1.3rem;
    font-size: 2rem;
    text-decoration: none;
    color: #ffffff;
  }
  .popup .content {
    max-height: 74%;
    padding: 1rem 1.5rem;
    padding-bottom: 1.5rem;
  }
  .popup-2 .content {
    max-height: 74%;
    padding: 1rem 1.5rem;
    padding-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  .p1 {
    font-size: 1.4rem;
    line-height: 2rem;
  }
  .btn-highlight {
    width: max-content;
    padding: 1rem 2rem;
    box-sizing: border-box;
    color: #333333;
    border-radius: 4px;
    background: #FFCC00;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .btn-primary {
    width: 100%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    color: #ffffff;
    border-radius: 4px;
    background: #153c59;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .btn-secondary {
    width: 100%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-radius: 4px;
    color: #153c59;
    border: 1px solid #153c59;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    background: white;
  }
  .flex-end {
    align-items: flex-end !important;
  }
  .btn-tertiary {
    width: 20rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-radius: 4px;
    color: #333333;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    background: #f6f7fc;
    position: relative;
  }
  .title-bg {
    background-color: #000000;
    font-family: 'Faustina', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    color: #ffffff;
    padding: 1.5rem;
  }
  .title-bg-2 {
    font-family: 'Faustina', serif;
    font-style: normal;
    font-size: 2.8rem;
    font-weight:bold;
    color: #000000;
    padding: 2rem 0rem 1rem;
  }
  .flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  .flex-item {
    margin: 0 0;
  }
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .highlight {
    color: #f7cf38;
    font-family: 'Faustina', serif;
    font-weight: 700;
    font-size: 2.2rem;
  }
  .bg-blue-shade {
    background-color: #f6f7fc;
    border-radius: 0 0 4px 4px;
  }
  .mr-1 {
    margin-right: 1rem;
  }
  .bg-blue {
    background-color: #000000;
    padding: 2rem;
    border-radius: 4px;
    color: #ffffff;
    font-family: 'Faustina', serif;
    font-size: 3rem;
  }
  .bg-blue-2 {
    padding: 0rem 2rem 1.5rem;
    color: #000000;
    margin: auto;
  }
  .flex-start {
    justify-content: flex-start;
  }
  .flex-center {
    justify-content: center;
  }
  .primary {
    color: #000000;
  }
  .sub-blue {
    color: #000000;
    font-weight: 400;
  }
  .position {
    top: 20%;
  }
  .note {
    color: #828282;
  }
  .bottom {
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .bottom-right {
    position: absolute;
    bottom: 4%;
    right: 3%;
    width: 40%;
    top: unset;
  }
  .arrow {
    width: 2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    cursor: pointer;
  }
  .arrow-center {
    width: 2rem;
    position: absolute;
    top: -1rem;
    left: 48.3%;
    cursor: pointer;
  }
  .white-arrow {
    width: 0.8rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  .white-arrow-2 {
    width: 1rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  .vl {
    border-left: 1px solid #e0e0e0;
    height: 6rem;
    position: absolute;
    left: 49.5%;
  }
  .more {
    width: 1.3rem;
    cursor: pointer;
  }
  .float-right {
    float: right;
  }
  .title {
    font-family: 'Faustina', serif;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .title-2 {
    font-family: 'Faustina', serif;
    font-weight: 700;
    font-size: 1.4rem;
  }
  .title-3 {
    font-family: 'Faustina', serif;
    font-weight: 700;
    font-size: 1.8rem;
  }
  .w-40 {
    width: 40%;
  }
  .w-60 {
    width: 60%;
  }
  .w-100 {
    width: 100%;
  }
  .weight {
    font-weight: 600;
  }
  .weight-700 {
    font-weight: 700;
  }
  .desc {
    color: #4f4f4f;
  }
  .btn-img {
    width: 14rem;
  }
  .btn-icon {
    width: 3rem;
    position: absolute;
    bottom: 0.9rem;
    left: 0;
  }
  .google {
    height: 4.5rem;
  }
  .rotate-img-180 {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    transition: all 200ms;
  }
  .rotate-img-back {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    transition: all 200ms;
  }
  .rotate-img-right {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(270deg);
    transition: all 200ms;
  }
  .none {
    display: none;
  }
  .ul {
    list-style-image: url("https://www.thehindu.com/static/content/images/20210317061049/tickYellow.png");
    text-align: left;
    position: relative;
    font-size: 12px;
    line-height: 2.4rem;
    padding: 0;
    margin-left: 2rem;
    margin-top: 0;
  }
  .ul li {
    line-height: 16px;
}
  .ul-2 {
    list-style-image: url("https://www.thehindu.com/static/content/images/20210317061049/tickYellow.png");
    text-align: left;
    position: relative;
    font-size: 1.2rem;
    line-height: 2.4rem;
    padding: 0;
    margin-left: 2rem;
    margin-top: 1rem;
    font-weight: normal;
  }
  .footer {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
  .next {
    width: 0.5rem;
  }
  .justify-center {
    justify-content: center;
  }
  .insta {
    width: 2rem;
    bottom: 0.7rem;
    left: 0.5rem;
  }
  .text-white {
    color: #ffffff;
  }
  .fit-content {
    width: fit-content;
  }
  .weight-400 {
    font-weight: 400;
  }
  .gray-1 {
    color: #333333;
  }
  .yellow {
    width: 12%;
    border-top: 5px solid #f7cf38;
    margin: auto;
  }
  .p-1 {
    padding: 1rem;
  }
  .p-0 {
    padding-bottom: 0 !important;
  }
  .m-0 {
    margin: 0;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .editor {
    width: 8rem;
  }
  .sub-title {
    font-size: 1.75rem;
    font-weight: normal;
    line-height: 20px;
    padding-left: 65px;
    padding-top:5px;
  }
  .price {
    font-size: 1.5rem;
    line-height: 15px;
  }
  .cost-1 {
    color: #141414;
    font-weight: 800;
    font-size: 1.6rem;
  }
  .cost-2 {
    color: #ffffff;
    font-weight: 800;
    font-size: 1.6rem;
  }
  .offer {
    font-size: 1.3rem;
    font-weight: 400;
    opacity: 0.6;
  }
  .offer-2 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .offer-3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  .link {
    font-size: 1.2rem;
  }
  .space-around {
    justify-content: space-around;
  }
  .w-90 {
    width: 90%;
    margin: auto;
    margin-bottom: 1rem;
  }
  .flex-6 {
    flex: 6;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  /*radio buttons*/
  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #000000;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  .back {
    width: 2rem;
    float: left;
    margin-left: 1rem;
    cursor: pointer;
  }
  .pay {
    width: 21rem;
  }
  .card-1 {
    background: #f6f7fc;
    border: 1px solid #0c5b9f;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;
    width: 33%;
  }
  .card-2 {
    background: #000000;
    border: 1px solid #0c5b9f;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;
    color: #ffffff;
    width: 33%;
  }
  .content-1 {
    display: block;
  }
  .content-2 {
    display: none;
  }
  .list {
    left: 15%;
    transform: translateX((-25%));
  }
  .size {
    font-size: 1.4rem;
  }
  .text {
    margin-top: 1rem;
  }
  .my-1-desktop {
    margin: 1rem 0;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px){
  .popup-1 {
    width: 95% !important;
  }
  .popup {
    width: 100%;
  }
  .popup-2 {
    width: 100%;
  }
  .title-bg {
    font-size: 5rem;
    padding: 5rem 2rem;
  }
  p {
    font-size: 13px;
    line-height: 15px;
  }
  .name {
    font-size: 3.8rem !important;
  }
  .job {
    font-size: 3rem;
  }
  .editor {
    width: 18rem;
  }
  .popup .close {
    font-size: 5rem;
    top: 5rem;
    right: 2rem;
  }
  .popup-2 .close {
    font-size: 5rem;
    top: 5rem;
    right: 2rem;
  }
  .popup .content {
    padding: 1rem 2.5rem;
    padding-bottom: 2.5rem;
  }
  .content-sm {
    padding: 1rem 6rem;
    padding-bottom: 2.5rem;
  }
  .editor-block {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start !important;
  }
  .btn-highlight,
  .btn-secondary,
  .btn-tertiary,
  .btn-primary {
    width: 100%;
    font-size: 12px;
    padding: 10px;
  }
  .flex-unset {
    flex: none;
    margin: auto;
    width: 100%;
  }
  .position {
    top: 70%;
    width: 75%;
  }
  .bg-blue {
    font-size: 5rem;
    padding: 4rem;
  }
  .sub-title {
    font-size: 3.5rem;
  }
  .p1 {
    font-size: 2.5rem;
  }
  .my-1 {
    margin: 1rem 0;
  }
  .content-1 {
    display: none;
  }
  .content-2 {
    display: block;
  }
  .title-sm {
    background: #000000;
    font-size: 3rem;
    color: #ffffff;
    padding: 4rem;
    text-align: center;
    font-weight: 400;
  }
  .title-sm-2 {
    font-size: 3.5rem;
    padding: 4rem;
    font-weight: 400;
    background: #f6f7fc;
    line-height: 4.5rem;
    position: relative;
  }
  .sub-title-sm {
    font-size: 4rem;
    text-align: center;
    font-weight: 700;
    font-family: 'Faustina', serif;
  }
  .p2 {
    font-size: 3.5rem;
    text-align: center;
    font-weight: 600;
    font-family: 'Faustina', serif;
  }
  .p3 {
    font-size: 16px;
    line-height: 18px;
    padding: 0;
 }
  .small {
    font-size: 3rem;
    font-weight: 300;
  }
  .link {
    font-weight: 600;
    margin: 3rem;
  }
  .arrow {
    width: 6rem;
    top: 6rem;
    right: 3rem;
  }
  .btn-img {
    width: 30rem;
  }
  .google {
    height: 9.3rem;
  }
  .sm-center {
    text-align: center;
  }
  .btns {
    justify-content: space-evenly;
    margin-bottom: 5rem;
  }
  .btn-grp {
    flex-direction: column;
    margin-bottom: 3rem;
  }
  .btn-grp .flex-item {
    width: 80%;
    padding-right: 15px;
    margin-bottom: 2rem;
  }
  .btn-icon {
    width: 8rem;
    position: absolute;
    bottom: 2rem;
    left: 0;
  }
  .insta {
    width: 5rem;
    left: 2rem;
  }
  .title-bg-2 {
    font-size: 24px;
    color: #000000;
    padding: 1.5rem 0rem 1rem;
    text-align: left;
    line-height: normal;
  }
  .bg-blue-2{
    padding: 0rem 2rem 2rem;
  }
  .highlight-sm {
    color: #ffffff;
    font-family: 'Faustina', serif;
    font-size: 17px;
  }
  .highlight-2 {
    font-size: 3.5rem;
  }
  .bottom-right {
    width: 70%;
  }
  .title-2 {
    font-size: 4.5rem;
    line-height:6.5rem;
  }
  .title-2-sm {
    font-size: 4.5rem;
    line-height:6.5rem;
  }
  .next {
    width: 1.5rem;
  }
  .arrow-2 {
    top: 4rem;
  }
  .arrow-center {
    width: 6rem;
    top: -3rem;
    left: 47%;
  }
  .top {
    top: 0;
    bottom: unset;
  }
  .w-60 {
    width: 100%;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-4 {
    margin-top: 4rem;
  }
  .p4 {
    font-size: 13px;
  }
  .p5 {
    font-size: 13px;
  }
  .more {
    width: 3.3rem;
    cursor: pointer;
  }
  .ul {
    font-size: 3rem;
    line-height: 4.5rem;
    font-weight: 200;
  }
  .m-auto {
    margin: auto;
  }
  .pad-2 {
    padding: 1rem;
  }
  .vl {
    height: 65%;
    left: 50%;
  }
  .mr--5 {
    margin-right: -5rem;
  }
  .mt--5 {
    margin-top: -5rem;
  }
  .text-center {
    text-align: center;
  }
  .bottom-sm {
    transform: translateY(-100%);
    top: 100%;
  }
  .white-arrow-2 {
    width: 3rem;
  }
  .ul-sm {
    list-style-image: url("./assets/tickBlue.png");
    left: unset;
    line-height: 5rem;
    margin-left: 4rem;
  }
  .ul-sm li{
    line-height: 8rem;
  }
  .light-sm {
    font-weight: 500;
  }
  .card-container {
    flex-direction: column;
  }
  #card1 {
    order: 2;
  }
  #card3 {
    order: 3;
  }
  .popup-12 {
    overflow: auto;
    transform: unset;
    height: 100%;
  }
  .card-1,
  .card-2 {
    width: 100%;
    text-align: left;
    padding: 2rem;
    margin-top: 3rem;
  }
  .title-3 {
    font-size: 3.5rem;
    margin-left: -3rem;
  }
  .back {
    width: 5rem;
    margin-left: 3rem;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 75px;
    height: 40px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 4px;
    bottom: 6px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(38px);
    -ms-transform: translateX(38px);
    transform: translateX(38px);
  }
  .card-title {
    font-size: 4rem;
    line-height: 3.5rem;
    margin: 2rem 0;
  }
  .card-price {
    font-size: 3.5rem;
    line-height: 8.5rem;
    margin: 2rem 0;
  }
  .discount {
    font-size: 3rem;
    line-height: 2.5rem;
    margin: 4rem 0;
    font-weight: 400;
    opacity: 0.6;
  }
  .float-right {
    float: right;
  }
  .btn-pad {
    padding: 3rem 5rem;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .footer-container {
    flex-direction: column-reverse;
  }
  .pay {
    width: 70rem;
    margin-bottom: 5rem;
  }
  .white-arrow {
    width: 3rem;
  }
  .sm-mt-5 {
    margin-top: 8rem;
  }
  .sm-mt-1 {
    margin-top: 1rem;
  }
  .sm-mb-1 {
    margin-bottom: 1rem;
  }
  .font-size{
    font-size: 3.5rem !important;
  }
  #sm-list li{
    line-height: 5rem;
  }
}
.sub-title .subscribenow{
    color: #000000;
    border-bottom: 1px solid #B7080D;
}
.sub-title .subscribenow:hover{
    color: #B7080D;
    border-bottom: 1px solid transparent;
}
.btn-highlight a{
  color: #000000;
}
@media (max-width: 564px) {
    .flex-container {
		display: contents;
	}
	.btn-highlight{
	  width: 200px;
       float: left;
	}
}



/* Basic Buttons starts */
.basic-btn {
    height: 40px;
    border-radius: 3px;
    border: none;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    color: #ffffff;
    padding: 0 7px 0 23px;
    background: #B7080D;
    margin: 0;
    position: relative;
    transition: all 0.3s;
    display: block;
    width: max-content;
  }
  .basic-btn span {
    font-family: inherit;
    position: relative;
    top: 1px;
  }
  .basic-btn:focus {
    box-shadow: none;
    outline: none;
  }
  .basic-btn:after {
    content: "→";
    position: relative;
    opacity: 0;
    top: -1px;
    right: 20%;
    transition: 0.3s;
  }
  .basic-btn:hover {
    padding-right: 17px;
    padding-left: 13px;
    color: #ffffff;
    text-decoration: none;
    outline: none;
  }
  .basic-btn:hover::after {
    opacity: 1;
    right: -5px;
  }
  .basic-btn .left-icon {
    position: relative;
    margin-right: 5px;
    top: -2px;
  }
  
  
  @media screen and (max-width: 570px) {
    .basic-btn {
      height: 36px;
      margin-bottom: 5px;
      font-size: 13px;
    }
    .basic-btn .left-icon {
      width: 20px;
      height: auto;
    }
  }
  @media screen and (max-width: 1000px) and (min-width: 571px) {
    
  }
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .basic-btn {
        width: 100%;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 3px;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        font-size: 18px;
        color: #000000;
        padding: 0 20px;
        background: none;
        margin: 15px auto 0;
        position: relative;
        transition: all 0.3s;
      }
      .basic-btn span {
        font-family: inherit;
      }
      .basic-btn:focus {
        box-shadow: none;
        outline: none;
      }
      .basic-btn:after {
        content: "→";
        position: relative;
        opacity: 0;
        top: 3px;
        right: 20%;
        transition: 0.3s;
      }
      .basic-btn:hover {
        padding-right: 60px;
        padding-left: 30px;
        color: #000000;
        text-decoration: none;
        outline: none;
      }
      .basic-btn:hover::after {
        opacity: 1;
        top: 3px;
        right: -8px;
      }
      .basic-btn .left-icon {
        position: relative;
        margin-right: 5px;
        top: -2px;
      }
    }
  }
  /* Basic Button ends */
.seeallplans{
  color:#B7080D;
  display: block;
  text-decoration: underline;
}
</style>

<style  type="text/css" tp-style="state1-custom-style">
    
</style>

<style  type="text/css" tp-style="receipt-custom-style">
    
</style>

<style  type="text/css" tp-style="alreadyHasAccess-custom-style">
    
</style>






</body>



</html>
