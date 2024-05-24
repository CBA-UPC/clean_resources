/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a},h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}(),i=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),a;!(d=(a=g.next()).done);d=!0){c.push(a.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&g["return"]&&g["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function j(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function k(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function l(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("signalsFBEventsCollapseUserData",function(){
return function(f,g,h,i){var j={exports:{}};j.exports;(function(){"use strict";var a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};function b(b,c){if(b==null)return null;var d=Object.keys(b).some(function(a){return Object.prototype.hasOwnProperty.call(c,a)&&b[a]!==c[a]});return d?null:a({},b,c)}j.exports=b})();return j.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsExtractEventPayload",function(){
return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsEvents"),b=a.getIWLParameters,c=f.getFbeventsModules("signalsFBEventsExtractFromInputs"),d=f.getFbeventsModules("signalsFBEventsExtractPageFeatures");function e(a){var e=a.button,f=a.buttonFeatures,g=a.buttonText,i=a.form,j=a.pixel;a=a.shouldExtractUserData;var k=a&&i==null;i=c({button:e,containerElement:k?h:i,shouldExtractUserData:a});a=d();var l=i.formFieldFeatures;i=i.userData;f={buttonFeatures:f,buttonText:g,formFeatures:k?[]:l,pageFeatures:a,parameters:b.trigger({pixel:j,target:e})[0]};return[f,i]}k.exports=e})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsExtractFormFieldFeatures",function(){
return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsPixelPIIUtils"),b=a.extractPIIFields;function c(a,c){var d={id:a.id,name:a.name,tag:a.tagName.toLowerCase()},e={};(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&a.placeholder!==""&&(d.placeholder=a.placeholder);if(d.tag==="input"){d.inputType=a.getAttribute("type");if(c&&(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)){c=b(d,a);c!=null&&(e=c)}}a instanceof HTMLButtonElement===!1&&a.value===""&&(d.valueMeaning="empty");return[d,e]}k.exports=c})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsExtractFromInputs",function(){
return function(g,h,j,k){var l={exports:{}};l.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsFeatureCounter"),b=f.getFbeventsModules("signalsFBEventsCollapseUserData"),c=f.getFbeventsModules("signalsFBEventsExtractFormFieldFeatures"),d=15,e="input,textarea,select,button";function g(f){var g=f.button,h=f.containerElement;f=f.shouldExtractUserData;var j=new a(),k=[],l={};if(h==null)return{formFieldFeatures:k,userData:l};h=h.querySelectorAll(e);for(var m=0;m<h.length;m++){var n=h[m];if(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement||n instanceof HTMLButtonElement){var o=""+n.tagName+(n.type===void 0?"":n.type);o=j.incrementAndGet(o);if(o>d||n===g)continue;o=c(n,f&&l!=null);n=i(o,2);o=n[0];n=n[1];o!=null&&k.push(o);l=b(l,n)}}return{formFieldFeatures:k,userData:l}}l.exports=g})();return l.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsExtractPageFeatures",function(){
return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsShared"),b=a.unicodeSafeTruncate,c=500;function d(){var a=h.querySelector("title");a=b(a&&a.text,c);return{title:a}}k.exports=d})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEventsFeatureCounter",function(){
return function(f,g,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=function(){function a(){l(this,a),this._features={}}h(a,[{key:"incrementAndGet",value:function(a){this._features[a]==null&&(this._features[a]=0);this._features[a]++;return this._features[a]}}]);return a}();k.exports=a})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsMakeSafeString",function(){
return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},b=f.getFbeventsModules("SignalsFBEventsUtils"),c=b.each,d=/[^\s\"]/,e=/[^\s:+\"]/;function g(b,c,f){if(f==null)return d.test(c)?c==="@"?null:{start:b,userOrDomain:"user"}:null;if(c==="@")return f.userOrDomain==="domain"?null:a({},f,{userOrDomain:"domain"});if(c===".")return f.userOrDomain==="domain"&&f.lastDotIndex===b-1?null:a({},f,{lastDotIndex:b});return f.userOrDomain==="domain"&&e.test(c)===!1||f.userOrDomain==="user"&&d.test(c)===!1?f.lastDotIndex===b-1?null:a({},f,{end:b-1}):f}function h(a,b){return a.userOrDomain==="domain"&&a.lastDotIndex!=null&&a.lastDotIndex!==b-1&&a.start!=null&&a.end!=null&&a.end!==a.lastDotIndex}function i(a){var b=null,d=a;a=[];for(var e=0;e<d.length;e++)b=g(e,d[e],b),b!=null&&(h(b,d.length)?a.push(b):e===d.length-1&&(b.end=e,h(b,d.length)&&a.push(b)),b.end!=null&&(b=null));c(a.reverse(),function(a){var b=a.start;a=a.end;if(a==null)return;d=d.slice(0,b)+"@"+d.slice(a+1)});return d}var j=/[\d]+(\.[\d]+)?/g;function l(a){a=a;while(/\d\.\d/.test(a))a=a.replace(j,"0");a=a.replace(j,"0");return a}function m(a){return{safe:l(i(a))}}k.exports=m})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEventsThrottler",function(){
return function(f,g,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=1e3,b=function(){function b(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a;l(this,b);this._lastArgs=null;this._lastTime=0;this._rateMS=c}h(b,[{key:"_passesThrottleImpl",value:function(){var a=this._lastArgs;if(a==null)return!0;var b=Date.now(),c=b-this._lastTime;if(c>=this._rateMS)return!0;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];if(a.length!==e.length)return!0;for(var g=0;g<e.length;g++)if(e[g]!==a[g])return!0;return!1}},{key:"passesThrottle",value:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=this._passesThrottleImpl.apply(this,b);this._lastTime=Date.now();this._lastArgs=b;return d}}]);return b}();k.exports=b})();return k.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.inferredevents",function(){
return function(g,h,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsConfigStore"),b=f.getFbeventsModules("SignalsFBEventsEvents"),c=b.fired,d=b.piiAutomatched,m=b.piiConflicting,n=b.extractPii;b=f.getFbeventsModules("SignalsFBEventsShared");var o=b.signalsConvertNodeToHTMLElement,p=b.signalsExtractForm,q=b.signalsIsIWLElement,r=b.signalsExtractButtonFeatures,s=b.signalsGetTruncatedButtonText,t=b.signalsGetWrappingButton;b=f.getFbeventsModules("SignalsFBEventsPlugin");var u=f.getFbeventsModules("SignalsFBEventsThrottler"),v=f.getFbeventsModules("SignalsFBEventsUtils"),w=f.getFbeventsModules("signalsFBEventsExtractEventPayload"),x=f.getFbeventsModules("signalsFBEventsMakeSafe"),y=f.getFbeventsModules("signalsFBEventsMakeSafeString"),z=v.each,A=v.keys;v.some;var B=f.getFbeventsModules("signalsFBEventsExtractFromInputs"),C=new u(),D=100;function E(a,b){return b!=null&&b.buttonSelector==="extended"}function F(b,c,e,f){b=f!=null?f:a.get(c.id,"automaticMatching");if(A(e).length>0&&b!=null){f=b.selectedMatchKeys;for(b in e)f.indexOf(b)>=0&&(c.userDataFormFields[b]=e[b]);d.trigger(c)}}function G(b){return function(c){if(b.disableAutoConfig)return;var d=c.target instanceof Node?o(c.target):null;if(d!=null){if(q(d))return;if(!C.passesThrottle(d))return;c=b.getOptedInPixels("InferredEvents");z(c,function(c){var e=a.get(c.id,"inferredEvents"),f=!1;e!=null&&e.disableRestrictedData!=null&&(f=e.disableRestrictedData);e=E(c.id,e);e=t(d,e);if(e==null)return;var g=b.optIns.isOptedIn(c.id,"AutomaticMatching"),h=p(e),j=r(e,h),k=y(s(e)).safe;if(k!=null&&k.length>D)return;g=g;e=w({button:e,buttonFeatures:j,buttonText:k,form:h,pixel:c,shouldExtractUserData:g});j=i(e,2);k=j[0];h=j[1];f&&(k={});h==null&&m.trigger(c);g&&h!=null&&F(b,c,h);if(f&&(c.userDataFormFields==null||A(c.userDataFormFields).length===0))return;b.trackSingleSystem("automatic",c,"SubscribedButtonClick",k)})}}}function H(a,b,c,d,e){if(a.disableAutoConfig)return;var f=a.optIns.isOptedIn(b.id,"InferredEvents");if(!f)return;f=a.optIns.isOptedIn(b.id,"AutomaticMatching");if(!f)return;f=c==null;d=B({button:d,containerElement:f?h:c,shouldExtractUserData:!0});f=d.userData;f==null?m.trigger(b):F(a,b,f,e)}v=function(a){k(b,a);function b(){var a,c,d;l(this,b);var e;for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return d=(e=(c=j(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),c),c.extractPII=H,e),j(c,d)}return b}(b);e.exports=new v(function(a,b){c.listenOnce(function(){var a=x(G(b));h.addEventListener?h.addEventListener("click",a,{capture:!0,once:!1,passive:!0}):g.attachEvent("onclick",a)}),n.listen(function(a,c,d){return H(b,a,c,d)})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.inferredevents");f.registerPlugin&&f.registerPlugin("fbevents.plugins.inferredevents",e.exports);
f.ensureModuleRegistered("fbevents.plugins.inferredevents",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),a;!(d=(a=g.next()).done);d=!0){c.push(a.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&g["return"]&&g["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};function i(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function j(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function k(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.identity",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function i(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("signalsFBEventsIsHostFacebook",function(){
return function(f,g,h,i){var e={exports:{}};e.exports;(function(){"use strict";e.exports=function(a){if(typeof a!=="string")return!1;a=a.match(/^(.*\.)*(facebook\.com|internalfb\.com|workplace\.com|instagram\.com|oculus\.com|novi\.com)\.?$/i);return a!==null}})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsShouldNotDropCookie",function(){
return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("signalsFBEventsIsHostFacebook"),b="FirstPartyCookies";e.exports=function(c,d){return g.location.protocol.substring(0,"http".length)!=="http"||a(g.location.hostname)||d.disableFirstPartyCookies||d.getOptedInPixels(b).indexOf(c)===-1}})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.cookie",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var c=f.getFbeventsModules("SignalsFBEventsEvents"),d=c.getCustomParameters,j=c.getClickIDFromBrowserProperties;f.getFbeventsModules("SignalsFBEventsPixelCookie");c=f.getFbeventsModules("SignalsFBEventsPlugin");var k=f.getFbeventsModules("SignalsFBEventsURLUtil"),l=k.getURLParameter,m=f.getFbeventsModules("signalsFBEventsShouldNotDropCookie");k=f.getFbeventsModules("SignalsPixelCookieUtils");var n=k.readPackedCookie,o=k.writeNewCookie,p=k.writeExistingCookie,q=k.CLICK_ID_PARAMETER,r=k.CLICKTHROUGH_COOKIE_NAME,s=k.CLICKTHROUGH_COOKIE_PARAM,t=k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_NAME,u=k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_PARAM,v=2147483647;function w(){return""+Math.round(v*Math.random())}function x(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a.location.href,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=l(c,q);e===null&&(e=l(b.referrer,q));e===null&&(e=d);if(e!=null&&e.length>500)return null;var f=n(r);if(e!=null){if(!f)return o(r,e);f.maybeUpdatePayload(e);return p(r,f)}else if(f)return p(r,f);return null}function y(){var a=n(t);if(a){p(t,a);return a}a=w();return o(t,a)}k=function(a){i(b,a);function b(){var a,c,d;g(this,b);var e;for(var f=arguments.length,i=Array(f),j=0;j<f;j++)i[j]=arguments[j];return d=(e=(c=h(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(i))),c),c.dropOrRefreshClickIDCookie=x,c.dropOrRefreshDomainScopedBrowserIDCookie=y,e),h(c,d)}return b}(c);e.exports=new k(function(b,c){var e=null;j.listen(function(a){e=a});function b(){d.listen(function(b){if(m(b,c))return{};b={};var d=x(a.location.href,e);d&&(b[s]=d.pack());d=y();d&&(b[u]=d.pack());return b})}b()})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.cookie");f.registerPlugin&&f.registerPlugin("fbevents.plugins.cookie",e.exports);
f.ensureModuleRegistered("fbevents.plugins.cookie",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBevents.plugins.automaticmatchingforpartnerintegrations",function(){
return function(g,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},b=f.getFbeventsModules("SignalsFBEventsConfigStore"),c=f.getFbeventsModules("SignalsFBEventsEvents"),d=c.configLoaded,h=c.piiAutomatched;c=f.getFbeventsModules("SignalsFBEventsPlugin");var i=f.getFbeventsModules("SignalsFBEventsUtils"),j=i.idx,k=i.isEmptyObject;i.keys;var l=i.reduce;i=f.getFbeventsModules("SignalsPixelPIIUtils");var m=i.getNormalizedPIIValue;function n(){return j(g,function(a){return a.Shopify.checkout})!=null}var o={ct:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.city})},em:function(){return j(g,function(a){return a.Shopify.checkout.email})},fn:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.first_name})},ln:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.last_name})},ph:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.phone})},st:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.province_code})},zp:function(){return j(g,function(a){return a.Shopify.checkout.billing_address.zip})}};function p(a){return!n()?null:l(a,function(a,b){var c=o[b];c=c!=null?c():null;c=c!=null&&c!==""?m(b,c):null;c!=null&&(a[b]=c);return a},{})}e.exports=new c(function(c,e){d.listen(function(c){if(c==null)return;var d=e.optIns.isOptedIn(c,"AutomaticMatching"),f=e.optIns.isOptedIn(c,"AutomaticMatchingForPartnerIntegrations");d=d&&f;if(!d)return;f=e.getPixel(c);if(f==null)return;d=b.get(f.id,"automaticMatching");if(d==null)return;c=p(d.selectedMatchKeys);if(c==null||k(c))return;f.userDataFormFields=a({},f.userDataFormFields,c);h.trigger(f)})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBevents.plugins.automaticmatchingforpartnerintegrations");f.registerPlugin&&f.registerPlugin("fbevents.plugins.automaticmatchingforpartnerintegrations",e.exports);
f.ensureModuleRegistered("fbevents.plugins.automaticmatchingforpartnerintegrations",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.prohibitedsources",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var b=f.getFbeventsModules("SignalsFBEventsConfigStore"),c=f.getFbeventsModules("SignalsFBEventsEvents"),d=c.configLoaded,g=f.getFbeventsModules("SignalsFBEventsLogging");c=f.getFbeventsModules("SignalsFBEventsPlugin");var h=f.getFbeventsModules("SignalsFBEventsUtils"),i=h.filter,j=f.getFbeventsModules("sha256_with_dependencies_new");e.exports=new c(function(c,e){d.listen(function(c){var d=e.optIns.isOptedIn(c,"ProhibitedSources");if(!d)return;d=e.getPixel(c);if(d==null)return;var f=b.get(d.id,"prohibitedSources");if(f==null)return;f=i(f.prohibitedSources,function(b){return b.domain!=null&&b.domain===j(a.location.hostname)}).length>0;f&&(e.locks.lock("prohibited_sources_"+c),g.consoleWarn("[fbpixel] "+d.id+" is unavailable. Go to Events Manager to learn more"))})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.prohibitedsources");f.registerPlugin&&f.registerPlugin("fbevents.plugins.prohibitedsources",e.exports);
f.ensureModuleRegistered("fbevents.plugins.prohibitedsources",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.unwanteddata",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsEvents");a.configLoaded;var b=a.validateCustomParameters,c=a.validateUrlParameters,d=f.getFbeventsModules("SignalsFBEventsConfigStore"),g=f.getFbeventsModules("SignalsFBEventsLogging");a=f.getFbeventsModules("SignalsFBEventsPlugin");var h=f.getFbeventsModules("SignalsFBEventsUtils"),i=f.getFbeventsModules("sha256_with_dependencies_new");h.each;var j=h.map,k=!1;f.getFbeventsModules("SignalsParamList");e.exports=new a(function(a,e){b.listen(function(b,c,f){if(b==null)return;a.performanceMark("fbevents:start:unwantedDataProcessing",b.id);var h=e.optIns.isOptedIn(b.id,"UnwantedData");if(!h)return;h=e.optIns.isOptedIn(b.id,"ProtectedDataMode");var k=d.get(b.id,"unwantedData");if(k==null)return;var l=!1,m=[],n=[],o={};if(k.blacklisted_keys!=null){var p=k.blacklisted_keys[f];if(p!=null){p=p.cd;j(p,function(a){Object.prototype.hasOwnProperty.call(c,a)&&(l=!0,m.push(a),delete c[a])})}}if(k.sensitive_keys!=null){p=k.sensitive_keys[f];if(p!=null){var q=p.cd;Object.keys(c).forEach(function(a){j(q,function(b){i(a)===b&&(l=!0,n.push(b),delete c[a])})})}}o.unwantedParams=m;o.restrictedParams=n;l&&!h&&(g.logUserError({type:"UNWANTED_CUSTOM_DATA"}),c._filteredParams=o);a.performanceMark("fbevents:end:unwantedDataProcessing",b.id)});function h(a,b,c,d,e){var f=new URLSearchParams(b.search),g=[],h=[];b={};if(c.blacklisted_keys!=null){var l=c.blacklisted_keys[d];if(l!=null){l=l.url;j(l,function(a){f.has(a)&&(k=!0,g.push(a),f.set(a,"_removed_"))})}}if(c.sensitive_keys!=null){l=c.sensitive_keys[d];if(l!=null){var m=l.url;f.forEach(function(a,b){j(m,function(a){i(b)===a&&(k=!0,h.push(a),f.set(b,"_removed_"))})})}}b.unwantedParams=g;b.restrictedParams=h;if(k){e||(a.append("up_url",g.join(",")),a.append("rp_url",h.join(",")),f.set("_filteredParams",JSON.stringify(b)));return f.toString()}return""}c.listen(function(b,c,f,i){if(b==null)return;a.performanceMark("fbevents:start:validateUrlProcessing",b.id);var j=e.optIns.isOptedIn(b.id,"UnwantedData");if(!j)return;j=e.optIns.isOptedIn(b.id,"ProtectedDataMode");var l=d.get(b.id,"unwantedData");if(l==null)return;if(Object.prototype.hasOwnProperty.call(c,"dl")&&c.dl.length>0){var m=new URL(c.dl),n=h(i,m,l,f,j);k&&n.length>0&&(m.search=n,c.dl=m.toString())}if(Object.prototype.hasOwnProperty.call(c,"rl")&&c.rl.length>0){n=new URL(c.rl);m=h(i,n,l,f,j);k&&m.length>0&&(n.search=m,c.rl=n.toString())}k&&g.logUserError({type:"UNWANTED_URL_DATA"});a.performanceMark("fbevents:end:validateUrlProcessing",b.id)})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.unwanteddata");f.registerPlugin&&f.registerPlugin("fbevents.plugins.unwanteddata",e.exports);
f.ensureModuleRegistered("fbevents.plugins.unwanteddata",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.iabpcmaebridge",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var c=f.getFbeventsModules("SignalsFBEventsEvents"),d=c.fired,g=c.setEventId,h=c.getCustomParameters;c=f.getFbeventsModules("SignalsFBEventsPlugin");f.getFbeventsModules("SignalsParamList");var i=f.getFbeventsModules("signalsFBEventsGetIsIosInAppBrowser"),j=f.getFbeventsModules("SignalsFBEventsConfigStore"),k=f.getFbeventsModules("sha256_with_dependencies_new");function l(a){return(typeof a==="string"||a instanceof String)&&a.toUpperCase()==="LDU"}function m(a){try{if(a==null||typeof a!=="string")return null;else{var b=JSON.parse(a);if(b.conversionBit!=null&&typeof b.conversionBit==="number"&&b.priority!=null&&typeof b.priority==="number"&&b.etldOne!=null&&typeof b.etldOne==="string")return a;else return JSON.stringify({conversionBit:-1,priority:-1,etldOne:""})}}catch(a){return null}}function n(a){if(a==null)return!1;a=j.get(a,"IABPCMAEBridge");return a==null||a.enableAutoEventId==null||!a.enableAutoEventId?!1:!0}e.exports=new c(function(c,e){if(!i())return;h.listen(function(a,b){return!n(a.id)?{}:{iab:1}});g.listen(function(b,c){if(!n(b))return;b=a.location.origin+"_"+Date.now()+"_"+Math.random();b=k(b);var d=c.get("eid");if(d!=null&&d!==""||b==null)return;c.append("apcm_eid","1");d="pcm_plugin-set_"+b;c.append("eid",d)});d.listen(function(c,d){c=d.get("id");var e=d.get("ev"),f={},g=d.get("dpo"),h=d.get("dpoco"),i=d.get("dpost"),j=d.get("coo"),k=d.get("es");d.get("eid");var n=m(d.get("aem")),o=!1;(j==="false"||j==="true")&&(f.coo=j);k!==null&&(f.es=k);b!==null&&b.referrer!==null&&(f.referrer_link=b.referrer);if(l(g))if(h==="1"&&i==="1000")return;else h==="0"&&i==="0"&&(o=!0);var p={id:c,ev:e,dpo:o,aem:n!=null?n:""};d.each(function(a,b){if(a){var c=a.match(/^cd\[(.+)\]$/);c?f[c[1]]=b:a in p||(p[a]=b)}});p.cd=JSON.stringify(f);j={pcmPixelPostMessageEvent:p};a.postMessage(j,"*")})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.iabpcmaebridge");f.registerPlugin&&f.registerPlugin("fbevents.plugins.iabpcmaebridge",e.exports);
f.ensureModuleRegistered("fbevents.plugins.iabpcmaebridge",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function i(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEventsBrowserPropertiesTypedef",function(){
return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsTyped");a.coerce;a=a.Typed;a=a.objectWithFields({open:a.func()});e.exports={XMLHttpRequestPrototypeTypedef:a}})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("signalsFBEventsGetIsAndroidIAW",function(){
return function(f,g,h,i){var e={exports:{}};e.exports;(function(){"use strict";var a=f.navigator;a=a.userAgent;var b=a.indexOf("Android")>=0,c=a.indexOf("FB_IAB")>=0,d=a.indexOf("Instagram")>=0,g=0;a=a.match(/(FBAV|Instagram)[/\s](\d+)/);if(a!=null){a=a[0].match(/(\d+)/);a!=null&&(g=parseInt(a[0],10))}function h(a,e){var f=b&&(c||d);if(!f)return!1;if(c&&a!=null)return a<=g;return d&&e!=null?e<=g:f}e.exports=h})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.browserproperties",function(){
return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsSendEventEvent"),b=f.getFbeventsModules("SignalsFBEventsEvents"),c=b.configLoaded;b=f.getFbeventsModules("SignalsFBEventsEvents");var d=b.getClickIDFromBrowserProperties,i=f.getFbeventsModules("signalsFBEventsGetIsAndroidIAW");b=f.getFbeventsModules("SignalsFBEventsLogging");var j=b.logError;b=f.getFbeventsModules("SignalsFBEventsPlugin");var k=f.getFbeventsModules("signalsFBEventsSendEvent"),l=f.getFbeventsModules("signalsFBEventsShouldNotDropCookie"),m=f.getFbeventsModules("SignalsFBEventsURLUtil"),n=m.getURLParameter,o=f.getFbeventsModules("SignalsParamList");m=f.getFbeventsModules("SignalsFBEventsBrowserPropertiesTypedef");var p=m.XMLHttpRequestPrototypeTypedef;m=f.getFbeventsModules("SignalsFBEventsTyped");var q=m.coerce;m=f.getFbeventsModules("SignalsPixelCookieUtils");var r=m.CLICK_ID_PARAMETER,s=m.CLICKTHROUGH_COOKIE_PARAM;m=f.getFbeventsModules("SignalsFBEvents.plugins.cookie");var t=m.dropOrRefreshClickIDCookie,u=!0;function v(a,b,c){u=!1;while(c.length>0){var d=c.shift(),e=d.id;if(e!=null&&b!=null){e=a.getPixel(e.toString());if(e!=null&&!l(e,a)){e=d.customParams||new o();var f=e.get(s);if(f==null||f===""){f=t(g.location.href,b);f!=null&&(e.append(s,f.pack()),d.customParams=e)}}}k(d)}}e.exports=new b(function(b,e){if(n(g.location.href,r)!=null)return;if(n(h.referrer,r)!=null)return;if(typeof Promise==="undefined"||Promise.toString().indexOf("[native code]")===-1)return;b=g.webkit!=null&&g.webkit.messageHandlers!=null&&g.webkit.messageHandlers.browserProperties!=null;var k=i(397,264)&&typeof g.XMLHttpRequest!=="undefined";if(!b&&!k)return;var l=[],m=200,o=null,s=null;c.listen(function(a){a=e.getPixel(a);if(a==null)return;a=e.pluginConfig.get(a.id,"browserProperties");var b=a!=null&&a.delayInMs!=null?a.delayInMs:m;a=a!=null&&a.enableBackupTimeout!=null?a.enableBackupTimeout:!0;a&&s===null&&(s=g.setTimeout(function(){v(e,o,l)},b))});a.listen(function(a){if(!u)return!1;var b=a.id;if(b==null)return!1;b=e.pluginConfig.get(b.toString(),"browserProperties");if(b==null)return!1;if(b.enableEventSuppression==null||!b.enableEventSuppression)return!1;l.push(a);return!0});var t=function(a){a!=null&&a!==""?(o=a,d.trigger(a),u||j(new Error("[EBP Error] timeout"))):j(new Error("[EBP Error]456:Unexpected empty clickID!")),v(e,o,l)};if(b){b=g.webkit.messageHandlers.browserProperties.postMessage("clickID");b.then(function(a){return t(a)})["catch"](function(a){a.message="[EBP Error]"+a.message,j(a)})}if(k){var w=new g.XMLHttpRequest();w.onloadend=function(){w.readyState===w.DONE&&w.status>=200&&w.status<300?t(w.responseText):j(new Error("[EBP Error], status="+w.status+", responseText="+w.responseText))};try{b=q(XMLHttpRequest.prototype,p);b!=null&&(b.open.toString().includes("native code")||j(new Error("[EBP Error] XMLHttpRequest.prototype.open is overridden ")))}catch(a){}w.open("GET","properties://browser/clickID");w.send()}})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.browserproperties");f.registerPlugin&&f.registerPlugin("fbevents.plugins.browserproperties",e.exports);
f.ensureModuleRegistered("fbevents.plugins.browserproperties",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEventsClientHintTypedef",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsTyped");a.coerce;a=a.Typed;var b=a.objectWithFields({brands:a.array(),platform:a.allowNull(a.string()),getHighEntropyValues:a.func()});a=a.objectWithFields({model:a.allowNull(a.string()),platformVersion:a.allowNull(a.string()),fullVersionList:a.array()});e.exports={userAgentDataTypedef:b,highEntropyResultTypedef:a}})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEventsGetIsAndroidChrome",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("signalsFBEventsGetIsChrome");function b(a){return a===void 0?!1:a.platform==="Android"&&a.brands.map(function(a){return a.brand}).join(", ").includes("Chrome")}function c(a){return a.includes("Chrome")&&a.includes("Android")}function d(b){b=b.indexOf("Android")>=0;var c=a();return b&&c}e.exports={checkIsAndroidChromeWithClientHint:b,checkIsAndroidChromeWithUAString:c,checkIsAndroidChrome:d}})();return e.exports}(a,b,c,d)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.clienthint",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var b=f.getFbeventsModules("SignalsFBEventsEvents");b.fired;b=f.getFbeventsModules("SignalsFBEventsPlugin");var c=f.getFbeventsModules("SignalsParamList"),d=f.getFbeventsModules("signalsFBEventsSendEvent"),g=f.getFbeventsModules("SignalsFBEventsEvents"),h=g.configLoaded,i=f.getFbeventsModules("SignalsFBEventsSendEventEvent");g=f.getFbeventsModules("SignalsFBEventsLogging");var j=g.logError;g=f.getFbeventsModules("SignalsFBEventsTyped");var k=g.coerce;g.Typed;g=f.getFbeventsModules("SignalsFBEventsClientHintTypedef");var l=g.userAgentDataTypedef,m=g.highEntropyResultTypedef;g=f.getFbeventsModules("SignalsFBEventsGetIsAndroidChrome");var n=g.checkIsAndroidChrome,o="chmd",p="chpv",q="chfv",r=[o,p,q],s=[],t=200,u=new Map(),v=null,w=!0;function x(b,e,a){w=!1;while(a.length>0){b=a.shift();var f=b.customParams||new c(),g=!0,h=!1,i=void 0;try{for(var j=r[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),k;!(g=(k=j.next()).done);g=!0){k=k.value;f.get(k)==null&&f.append(k,e.get(k))}}catch(a){h=!0,i=a}finally{try{!g&&j["return"]&&j["return"]()}finally{if(h)throw i}}b.customParams=f;d(b)}}e.exports=new b(function(b,d){b=k(a.navigator.userAgentData,l);if(b==null){a.navigator.userAgentData!=null&&j(new Error("[ClientHint Error] UserAgentData coerce error"));return}else if(!n(a.navigator.userAgent))return;a.navigator.userAgentData.getHighEntropyValues(["model","platformVersion","fullVersionList"]).then(function(a){a=k(a,m);if(a==null){j(new Error("[ClientHint Error] getHighEntropyValues returned null from Android Chrome source"));return}u.set(o,String(a.model));u.set(p,String(a.platformVersion));var b=void 0,c=void 0,e=!0,f=!1,g=void 0;try{for(var h=a.fullVersionList[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),a;!(e=(a=h.next()).done);e=!0)c=a.value,c.brand.includes("Chrome")&&(b=c.version)}catch(a){f=!0,g=a}finally{try{!e&&h["return"]&&h["return"]()}finally{if(f)throw g}}u.set(q,String(b));x(d,u,s)})["catch"](function(a){a.message="[ClientHint Error]"+a.message,j(a)});h.listen(function(b){b=d.getPixel(b);if(b==null)return;b=d.pluginConfig.get(b.id,"clientHint");var c=b!=null&&b.delayInMs!=null?b.delayInMs:t;b=b!=null&&b.disableBackupTimeout!=null?b.disableBackupTimeout:!1;v===null&&!b&&(v=a.setTimeout(function(){x(d,u,s)},c))});i.listen(function(a){if(!w){var b=a.customParams||new c(),e=!0,f=!1,g=void 0;try{for(var h=r[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),i;!(e=(i=h.next()).done);e=!0){i=i.value;b.get(i)==null&&b.append(i,u.get(i))}}catch(a){f=!0,g=a}finally{try{!e&&h["return"]&&h["return"]()}finally{if(f)throw g}}a.customParams=b;return!1}i=a.id;if(i==null)return!1;e=d.pluginConfig.get(i.toString(),"clientHint");if(e==null)return!1;s.push(a);return!0})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.clienthint");f.registerPlugin&&f.registerPlugin("fbevents.plugins.clienthint",e.exports);
f.ensureModuleRegistered("fbevents.plugins.clienthint",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.privacysandbox",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("signalsFBEventsGetIsChrome");f.getFbeventsModules("SignalsParamList");var c=f.getFbeventsModules("SignalsFBEventsNetworkConfig"),d=c.GPS_ENDPOINT,g=f.getFbeventsModules("signalsFBEventsSendGET"),h=f.getFbeventsModules("SignalsFBEventsFiredEvent");c=f.getFbeventsModules("SignalsFBEventsPlugin");e.exports=new c(function(c,e){if(!a())return;if(b.featurePolicy==null||!b.featurePolicy.allowsFeature("attribution-reporting"))return;h.listen(function(a,b){a=b.get("id");if(a==null)return;a=e.optIns.isOptedIn(a,"PrivacySandbox");if(!a)return;g(b,{ignoreRequestLengthCheck:!0,attributionReporting:!0,url:d})})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.privacysandbox");f.registerPlugin&&f.registerPlugin("fbevents.plugins.privacysandbox",e.exports);
f.ensureModuleRegistered("fbevents.plugins.privacysandbox",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.lastexternalreferrer",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var c=f.getFbeventsModules("SignalsFBEventsGetValidUrl"),d=f.getFbeventsModules("SignalsFBEventsEvents"),g=d.getCustomParameters;d=f.getFbeventsModules("SignalsFBEventsPlugin");var h=f.getFbeventsModules("signalsFBEventsGetIsAndroidIAW"),i=f.getFbeventsModules("signalsFBEventsGetIsIosInAppBrowser"),j=f.getFbeventsModules("SignalsFBEventsLogging"),k=j.logError;j=f.getFbeventsModules("SignalsFBEventsTyped");var l=j.coerce;j=j.Typed;var m=j.objectWithFields({setItem:j.func(),getItem:j.func()});e.exports=new d(function(d,e){var j=h()&&typeof a.XMLHttpRequest!=="undefined",n=i(),o=null;try{o=l(a.localStorage,m)}catch(a){return}if(j||n||o==null)return;j="facebook.com";n="instagram.com";o="lastExternalReferrer";var p="lastExternalReferrerTime";function d(a,b){return a==b||a.endsWith(".".concat(b))}function e(b,c){a.localStorage.setItem(b,c)}function q(b){return a.localStorage.getItem(b)}function r(b){a.localStorage.removeItem(b)}try{var s=q(p);s!=null&&(new Date().getTime()-Number(s))/(1e3*60*60*24)>90&&(r(p),r(o));s=!1;r="";var t=c(b.referrer);t!=null&&(r=t.hostname);if(r=="")e(o,"empty"),s=!0;else{t=String(a.location.hostname);r!==t&&(d(r,j)?e(o,"fb"):d(r,n)?e(o,"ig"):e(o,"other"),s=!0)}s&&e(p,new Date().getTime());var u=q(o);u!=null&&(u!="empty"&&u!="fb"&&u!="ig"&&(u="other"));g.listen(function(a){return{ler:u}})}catch(a){a.message="[LastExternalReferrer Error]"+a.message,k(a)}})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.lastexternalreferrer");f.registerPlugin&&f.registerPlugin("fbevents.plugins.lastexternalreferrer",e.exports);
f.ensureModuleRegistered("fbevents.plugins.lastexternalreferrer",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("SignalsFBEvents.plugins.cookiedeprecationlabel",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var b=f.getFbeventsModules("SignalsFBEventsEvents"),c=b.getCustomParameters;b=f.getFbeventsModules("SignalsFBEventsPlugin");var d=f.getFbeventsModules("SignalsParamList"),g=f.getFbeventsModules("SignalsFBEventsLogging"),h=g.logError,i=f.getFbeventsModules("SignalsFBEventsSendEventEvent"),j=f.getFbeventsModules("signalsFBEventsSendEvent");g=f.getFbeventsModules("SignalsFBEventsEvents");var k=g.configLoaded,l=f.getFbeventsModules("signalsFBEventsGetIsChrome"),m=f.getFbeventsModules("SignalsFBEventsGetIsAndroidChrome"),n="cdl",o=200,p=[],q=!0,r="",s=null;function t(c,b,a){q=!1;while(a.length>0){c=a.shift();var e=c.customParams||new d();e.get(n)==null&&e.append(n,b);c.customParams=e;j(c)}}e.exports=new b(function(b,e){if(!l())return;b=a.navigator.cookieDeprecationLabel;if(b==null){c.listen(function(a){return{cdl:"API_unavailable"}});return}m.checkIsAndroidChrome(a.navigator.userAgent)?(r="fetching_label",b.getValue().then(function(a){r=String(a)})["catch"](function(a){a.message="[CookieDeprecationLabel Error]"+String(a.message),h(a)}),c.listen(function(a){return{cdl:r}})):(b.getValue().then(function(a){r=String(a),t(e,r,p)})["catch"](function(a){a.message="[CookieDeprecationLabel Error]"+String(a.message),h(a)}),k.listen(function(b){b=e.getPixel(b);if(b==null)return;b=e.pluginConfig.get(b.id,"cookieDeprecationLabel");var c=b!=null&&b.delayInMs!=null?b.delayInMs:o;b=b!=null&&b.disableBackupTimeout!=null?b.disableBackupTimeout:!1;!b&&s===null&&(s=a.setTimeout(function(){t(e,r,p)},c))}),i.listen(function(a){if(!q){var b=a.customParams||new d();b.get(n)==null&&b.append(n,r);a.customParams=b;return!1}b=a.id;if(b==null)return!1;p.push(a);return!0}))})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.cookiedeprecationlabel");f.registerPlugin&&f.registerPlugin("fbevents.plugins.cookiedeprecationlabel",e.exports);
f.ensureModuleRegistered("fbevents.plugins.cookiedeprecationlabel",function(){
return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("260030771280344", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { config.set("260030771280344", "inferredEvents", {"buttonSelector":null,"disableRestrictedData":false});
fbq.loadPlugin("inferredevents");
fbq.loadPlugin("identity");
instance.optIn("260030771280344", "InferredEvents", true);
config.set("260030771280344", "automaticMatching", {"selectedMatchKeys":["em","fn","ln","ph","ge","zp","ct","st"]});
fbq.loadPlugin("inferredevents");
fbq.loadPlugin("identity");
instance.optIn("260030771280344", "AutomaticMatching", true);
fbq.loadPlugin("iwlbootstrapper");
instance.optIn("260030771280344", "IWLBootstrapper", true);
fbq.loadPlugin("cookie");
instance.optIn("260030771280344", "FirstPartyCookies", true);
fbq.loadPlugin("inferredevents");
instance.optIn("260030771280344", "InferredEvents", true);
fbq.loadPlugin("automaticmatchingforpartnerintegrations");
instance.optIn("260030771280344", "AutomaticMatchingForPartnerIntegrations", true);
config.set(null, "batching", {"batchWaitTimeMs":501,"maxBatchSize":10});
config.set(null, "microdata", {"waitTimeMs":500});
config.set("260030771280344", "prohibitedSources", {"prohibitedSources":[]});
fbq.loadPlugin("prohibitedsources");
instance.optIn("260030771280344", "ProhibitedSources", true);
config.set("260030771280344", "unwantedData", {"blacklisted_keys":{},"sensitive_keys":{}});
fbq.loadPlugin("unwanteddata");
instance.optIn("260030771280344", "UnwantedData", true);
config.set("260030771280344", "IABPCMAEBridge", {"enableAutoEventId":false});
fbq.loadPlugin("iabpcmaebridge");
instance.optIn("260030771280344", "IABPCMAEBridge", true);
config.set("260030771280344", "browserProperties", {"delayInMs":200,"enableEventSuppression":true,"enableBackupTimeout":true});
fbq.loadPlugin("browserproperties");
instance.optIn("260030771280344", "BrowserProperties", true);
config.set("260030771280344", "clientHint", {"delayInMs":200,"disableBackupTimeout":false});
fbq.loadPlugin("clienthint");
instance.optIn("260030771280344", "ClientHint", true);
fbq.loadPlugin("privacysandbox");
instance.optIn("260030771280344", "PrivacySandbox", true);
fbq.loadPlugin("lastexternalreferrer");
instance.optIn("260030771280344", "LastExternalReferrer", true);
fbq.loadPlugin("cookiedeprecationlabel");
instance.optIn("260030771280344", "CookieDeprecationLabel", true);instance.configLoaded("260030771280344"); }});a-label="Barrie" data-mparticletitle="Barrie">Barrie</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://calgary.ctvnews.ca/video" title="Calgary" aria-label="Calgary" data-mparticletitle="Calgary">Calgary</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/video?binId=1.811512" title="Entertainment" aria-label="Entertainment" data-mparticletitle="Entertainment">Entertainment</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://Edmonton.ctvnews.ca/video" title="Edmonton" aria-label="Edmonton" data-mparticletitle="Edmonton">Edmonton</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Kitchener.ctvnews.ca/video" title="Kitchener" aria-label="Kitchener" data-mparticletitle="Kitchener">Kitchener</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://London.ctvnews.ca/video" title="London" aria-label="London" data-mparticletitle="London">London</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Montreal.ctvnews.ca/video" title="Montreal" aria-label="Montreal" data-mparticletitle="Montreal">Montreal</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://northernontario.ctvnews.ca/video" title="Northern Ontario" aria-label="Northern Ontario" data-mparticletitle="Northern Ontario">Northern Ontario</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://Ottawa.ctvnews.ca/video" title="Ottawa" aria-label="Ottawa" data-mparticletitle="Ottawa">Ottawa</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Regina.ctvnews.ca/video" title="Regina" aria-label="Regina" data-mparticletitle="Regina">Regina</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Saskatoon.ctvnews.ca/video" title="Saskatoon" aria-label="Saskatoon" data-mparticletitle="Saskatoon">Saskatoon</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Toronto.ctvnews.ca/video" title="Toronto" aria-label="Toronto" data-mparticletitle="Toronto">Toronto</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://bc.ctvnews.ca/video" title="Vancouver" aria-label="Vancouver" data-mparticletitle="Vancouver">Vancouver</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://vancouverisland.ctvnews.ca/video" title="Vancouver Island" aria-label="Vancouver Island" data-mparticletitle="Vancouver Island">Vancouver Island</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Windsor.ctvnews.ca/video" title="Windsor" aria-label="Windsor" data-mparticletitle="Windsor">Windsor</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://Winnipeg.ctvnews.ca/video" title="Winnipeg" aria-label="Winnipeg" data-mparticletitle="Winnipeg">Winnipeg</a></li>
                            </ul>
                        </li>
                    
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>SHOWS</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-national-news" title="CTV National News" aria-label="CTV National News" data-mparticletitle="CTV National News">CTV National News</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://ctvnews.ca/power-play" title="Power Play" aria-label="Power Play" data-mparticletitle="Power Play">Power Play</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/qp" title="Question Period" aria-label="Question Period" data-mparticletitle="Question Period">Question Period</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/w5" title="W5" aria-label="W5" data-mparticletitle="W5">W5</a></li>
                            </ul>
                        </li>
                    
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>LIVE</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/live" title="CTV News LIVE" aria-label="CTV News LIVE" data-mparticletitle="CTV News LIVE">CTV News LIVE</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/app" title="CTV News App" aria-label="CTV News App" data-mparticletitle="CTV News App">CTV News App</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-help" title="Video Help" aria-label="Video Help" data-mparticletitle="Video Help">Video Help</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/voice" title="Voice Assistant Help" aria-label="Voice Assistant Help" data-mparticletitle="Voice Assistant Help">Voice Assistant Help</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            
                <li role="menuitem">
                    
                    <button id="navItem-2" aria-haspopup="true" class="c-nav__anchor--1 icon--chevron--down c-nav__menu--button" aria-expanded="false">LOCAL</button>
                    <ul class="c-nav__level c-nav--closed" data-subnav="2" aria-hidden="true" aria-expanded="false">
                        <li>
                            
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://atlantic.ctvnews.ca/" title="Atlantic" aria-label="Atlantic" data-mparticletitle="Atlantic">Atlantic</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://barrie.ctvnews.ca/" title="Barrie" aria-label="Barrie" data-mparticletitle="Barrie">Barrie</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://calgary.ctvnews.ca/" title="Calgary" aria-label="Calgary" data-mparticletitle="Calgary">Calgary</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://edmonton.ctvnews.ca/" title="Edmonton" aria-label="Edmonton" data-mparticletitle="Edmonton">Edmonton</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://kitchener.ctvnews.ca/guelph" title="Guelph" aria-label="Guelph" data-mparticletitle="Guelph">Guelph</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://ottawa.ctvnews.ca/kingston" title="Kingston" aria-label="Kingston" data-mparticletitle="Kingston">Kingston</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://kitchener.ctvnews.ca/" title="Kitchener" aria-label="Kitchener" data-mparticletitle="Kitchener">Kitchener</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://calgary.ctvnews.ca/lethbridge" title="Lethbridge" aria-label="Lethbridge" data-mparticletitle="Lethbridge">Lethbridge</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://london.ctvnews.ca/" title="London" aria-label="London" data-mparticletitle="London">London</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://montreal.ctvnews.ca/" title="Montreal" aria-label="Montreal" data-mparticletitle="Montreal">Montreal</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://vancouverisland.ctvnews.ca/nanaimo" title="Nanaimo" aria-label="Nanaimo" data-mparticletitle="Nanaimo">Nanaimo</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/canada/newfoundland-and-labrador" title="Newfoundland and Labrador" aria-label="Newfoundland and Labrador" data-mparticletitle="Newfoundland and Labrador">Newfoundland and Labrador</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://northernontario.ctvnews.ca/" title="Northern Ontario" aria-label="Northern Ontario" data-mparticletitle="Northern Ontario">Northern Ontario</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://ottawa.ctvnews.ca/" title="Ottawa" aria-label="Ottawa" data-mparticletitle="Ottawa">Ottawa</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://ottawa.ctvnews.ca/pembroke" title="Pembroke" aria-label="Pembroke" data-mparticletitle="Pembroke">Pembroke</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://saskatoon.ctvnews.ca/prince-albert" title="Prince Albert" aria-label="Prince Albert" data-mparticletitle="Prince Albert">Prince Albert</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://edmonton.ctvnews.ca/red-deer" title="Red Deer" aria-label="Red Deer" data-mparticletitle="Red Deer">Red Deer</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://regina.ctvnews.ca/" title="Regina" aria-label="Regina" data-mparticletitle="Regina">Regina</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://saskatoon.ctvnews.ca/" title="Saskatoon" aria-label="Saskatoon" data-mparticletitle="Saskatoon">Saskatoon</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://northernontario.ctvnews.ca/sault-ste-marie" title="Sault Ste. Marie" aria-label="Sault Ste. Marie" data-mparticletitle="Sault Ste. Marie">Sault Ste. Marie</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://toronto.ctvnews.ca/" title="Toronto" aria-label="Toronto" data-mparticletitle="Toronto">Toronto</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://bc.ctvnews.ca/" title="Vancouver" aria-label="Vancouver" data-mparticletitle="Vancouver">Vancouver</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://vancouverisland.ctvnews.ca/" title="Vancouver Island" aria-label="Vancouver Island" data-mparticletitle="Vancouver Island">Vancouver Island</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://windsor.ctvnews.ca/" title="Windsor" aria-label="Windsor" data-mparticletitle="Windsor">Windsor</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://winnipeg.ctvnews.ca/" title="Winnipeg" aria-label="Winnipeg" data-mparticletitle="Winnipeg">Winnipeg</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            
                <li role="menuitem">
                    
                    <button id="navItem-3" aria-haspopup="true" class="c-nav__anchor--1 icon--chevron--down c-nav__menu--button" aria-expanded="false">SHOWS</button>
                    <ul class="c-nav__level c-nav--closed" data-subnav="2" aria-hidden="true" aria-expanded="false">
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>News Programs</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-national-news" title="CTV National News" aria-label="CTV National News" data-mparticletitle="CTV National News">CTV National News</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/qp/" title="QP" aria-label="QP" data-mparticletitle="QP">QP</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/w5/" title="W5" aria-label="W5" data-mparticletitle="W5">W5</a></li>
                            </ul>
                        </li>
                    
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>CTV News Channel</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/power-play" title="Power Play" aria-label="Power Play" data-mparticletitle="Power Play">Power Play</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel" title="The Debate" aria-label="The Debate" data-mparticletitle="The Debate">The Debate</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel" title="This Hour" aria-label="This Hour" data-mparticletitle="This Hour">This Hour</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel" title="Top 3 Tonight" aria-label="Top 3 Tonight" data-mparticletitle="Top 3 Tonight">Top 3 Tonight</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            
                <li role="menuitem">
                    
                    <button id="navItem-4" aria-haspopup="true" class="c-nav__anchor--1 icon--chevron--down c-nav__menu--button" aria-expanded="false">ABOUT</button>
                    <ul class="c-nav__level c-nav--closed" data-subnav="2" aria-hidden="true" aria-expanded="false">
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>SECTIONS</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/editorial-standards-and-policies" title="Editorial Standards and Policies" aria-label="Editorial Standards and Policies" data-mparticletitle="Editorial Standards and Policies">Editorial Standards and Policies</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/search-results" title="Search CTV News" aria-label="Search CTV News" data-mparticletitle="Search CTV News">Search CTV News</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.bellmedia.ca/about-bellmedia/" title="About Bell Media" aria-label="About Bell Media" data-mparticletitle="About Bell Media">About Bell Media</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/app" title="CTV News App" aria-label="CTV News App" data-mparticletitle="CTV News App">CTV News App</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/stox" title="CTV News Stox" aria-label="CTV News Stox" data-mparticletitle="CTV News Stox">CTV News Stox</a></li>
                            
                                
                                <li data-empty="true"><div></div></li><li data-empty="true"><div></div></li>
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel" title="CTV News Channel" aria-label="CTV News Channel" data-mparticletitle="CTV News Channel">CTV News Channel</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel/schedule" title="What&#39;s On CTV News Channel" aria-label="What&#39;s On CTV News Channel" data-mparticletitle="What&#39;s On CTV News Channel">What's On CTV News Channel</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctv.ca/on-air?tab=schedule" title="CTV Schedule" aria-label="CTV Schedule" data-mparticletitle="CTV Schedule">CTV Schedule</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/podcasts" title="Podcasts" aria-label="Podcasts" data-mparticletitle="Podcasts">Podcasts</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/social" title="Social" aria-label="Social" data-mparticletitle="Social">Social</a></li>
                            </ul>
                        </li>
                    
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>Bios</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/more/ctv-national-news-team" title="CTV National News Team" aria-label="CTV National News Team" data-mparticletitle="CTV National News Team">CTV National News Team</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/more/ctvnews-ca-team" title="CTV News Digital Team" aria-label="CTV News Digital Team" data-mparticletitle="CTV News Digital Team">CTV News Digital Team</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/ctv-news-channel" title="CTV News Channel " aria-label="CTV News Channel " data-mparticletitle="CTV News Channel ">CTV News Channel </a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/w5/w5-team" title="W5 Team" aria-label="W5 Team" data-mparticletitle="W5 Team">W5 Team</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            
                <li role="menuitem">
                    
                    <button id="navItem-5" aria-haspopup="true" class="c-nav__anchor--1 icon--chevron--down c-nav__menu--button" aria-expanded="false">Shopping Trends</button>
                    <ul class="c-nav__level c-nav--closed" data-subnav="2" aria-hidden="true" aria-expanded="false">
                        <li>
                            <div class="c-nav__level__subsection">
                                <h3>Sections</h3>
                            </div>
                            <ul class="c-nav__level" data-subnav="3">
                                <li data-empty="true"><div></div></li>
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/shopping/gifts.html" title="Gifts" aria-label="Gifts" data-mparticletitle="Gifts">Gifts</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/shopping/tech.html" title="Tech" aria-label="Tech" data-mparticletitle="Tech">Tech</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/shopping/fashion.html" title="Fashion" aria-label="Fashion" data-mparticletitle="Fashion">Fashion</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/shopping/beauty.html" title="Beauty" aria-label="Beauty" data-mparticletitle="Beauty">Beauty</a></li>
                            
                                
                                
                                <li><a class="c-nav__anchor--2" href="https://www.ctvnews.ca/shopping/health-fitness.html" title="Health &amp; Fitness" aria-label="Health &amp; Fitness" data-mparticletitle="Health &amp; Fitness">Health &amp; Fitness</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="c-search__desktop" role="search" style="margin-top: 0px; margin-left:0px;">
    <div class="c-search__bar">
        <form action="https://www.ctvnews.ca/search-results/search-ctv-news-7.137" method="get">
            <div class="c-search__bar--form active">
                <label class="c-search__bar--hidden" for="search_bar_7_137">Search CTVNews.ca</label>
                <input id="search_bar_7_137" placeholder="Search CTVNews.ca" type="text" name="q" value=""/>
                <button class="c-search__bar--submit " type="submit"><span class="hideText">Search</span></button>
            </div>
        </form>
    </div>
    
    

</div>
    </div>


    

</div>
<div class="seoheadertag aem-GridColumn aem-GridColumn--default--12">
    
    
</div>
<div class="alert-banner aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
  <alert-banner xml-url="https://www.ctvnews.ca/rss/feeds-tve-ctv-news/ctvnews-ca-banners-1.5084348" public-url="https://www.ctvnews.ca"/>
  
    


</div>
<div class="responsivegrid aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="articlefragment contentfragment aem-GridColumn aem-GridColumn--default--12"><main id="main">
    
        <div class="sraAdvert advert aem-GridColumn--default--9 aem-GridColumn">
            
                    <sra-advert class="sraAdvert" ad-site="/5479/ctv.ctvnews/business/stories" title-position="top" type="leaderBoard" google-tag-environment="prod" permutive-timeout="0" size="[[728,90],[970,90],[970,250]]" magnite-enable="true">
                    </sra-advert>
            
        </div>
        <div class="c-articlefragment">
            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phonelandscape--12 aem-Grid--tablet--12 aem-Grid--tabletlandscape--12 aem-Grid--phone--12">
                <div class="aem-GridColumn
                aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0
                aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--phonelandscape--0
                aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0
                aem-GridColumn--tabletlandscape--9 aem-GridColumn--offset--tabletlandscape--0
                aem-GridColumn--default--8 aem-GridColumn--offset--default--0
                aem-GridColumn--abovedefault--9 aem-GridColumn--offset--abovedefault--0">
                    <div class="breadcrumb aem-GridColumn--default--9 aem-GridColumn">
                        <div class="c-breadcrumb" aria-label="Breadcrumb">
                            <div class="c-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList">
                                <div class="c-breadcrumb__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">

                                    
                                    
                                    	
                                    
                                    

                                    <a href="https://www.ctvnews.ca/business/" class="c-breadcrumb__item__link" itemprop="item">
                                        <span itemprop="name">Business</span>
                                    </a>
                                    <meta itemprop="position" content="1"/>
                                </div>
                                
                                    
<div>
      
          <li class="c-breadcrumb__type">
            <tool-tip label="News" tooltiptext="Based on facts, either observed and verified firsthand by the reporter, or reported and verified from knowledgeable sources."></tool-tip>
          </li>
      
</div>

    


                                
                            </div>
                        </div>
                    </div>
                    <div class="aem-GridColumn--default--9 aem-GridColumn">
                        
<div class="c-title">
    <h1 class="c-title__text">Home staging companies forced to adapt as sellers pull back in slow housing market</h1>
</div>

    

                    </div>
                    <div class="aem-GridColumn--default--9 aem-GridColumn">
                        
  
    
  

    <div class="c-heroMedia">
      <div class="c-heroMedia__wrapper">
        
        
          
            <section aria-label="Video">
              
    
        
        <div id="articlefragment--1767065249" class="cmp-articlefragment"></div>
        <jasper-player-container ad-zones="business" ad-zone-default="business" ad-site="ctv.ctvnews" video-axis-base-url="https://capi.9c9media.com" video-axis-dest-code="ctvnews_web" jasper-player-url="https://lib.jasperplayer.com/9.0.0/jasper.umd.production.min.js" jasper-player-environment="production" playback-language="EN" channel="CTVNews" brand="CTV_NEWS" poster-image="/content/dam/ctvnews/en/images/2024/1/24/ctv-national-news--boc-holds-key-rate-1-6741347-1706156540127.jpg" axis-ids="[{&#34;duration&#34;:&#34;127&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/ctv-national-news--boc-holds-key-rate-1-6741347-1706156540127.jpg&#34;,&#34;title&#34;:&#34;CTV National News: BoC holds key rate&#34;,&#34;axisId&#34;:&#34;2853971&#34;},{&#34;duration&#34;:&#34;527&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/power-play--boc-holds-key-rate-at-5-per-cent-1-6740894-1706139611888.jpg&#34;,&#34;title&#34;:&#34;Power Play: BoC holds key rate at 5 per cent  &#34;,&#34;axisId&#34;:&#34;2853758&#34;},{&#34;duration&#34;:&#34;870&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/boc-s-tiff-macklem-discusses-interest-rate-hold-1-6740083-1706112908184.jpg&#34;,&#34;title&#34;:&#34;BoC&#39;s Tiff Macklem discusses interest rate hold&#34;,&#34;axisId&#34;:&#34;2853459&#34;},{&#34;duration&#34;:&#34;149&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/boc-maintains-five-per-cent-interest-rate-1-6739962-1706108487258.jpg&#34;,&#34;title&#34;:&#34;BoC maintains five per cent interest rate&#34;,&#34;axisId&#34;:&#34;2853405&#34;},{&#34;duration&#34;:&#34;161&#34;,&#34;thumbnail&#34;:&#34;/content/dam/cp24/en/images/2023/10/25/bank-of-canada-1-6615899-1698225473697.jpg&#34;,&#34;title&#34;:&#34;BoC rates: Here&#39;s what went into the decision&#34;,&#34;axisId&#34;:&#34;2853722&#34;},{&#34;duration&#34;:&#34;149&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/sophie--real-estate-agent-1-6740739-1706137185630.jpg&#34;,&#34;title&#34;:&#34;Sales and showings picking up: real estate agent &#34;,&#34;axisId&#34;:&#34;2853720&#34;},{&#34;duration&#34;:&#34;265&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/how-does-the-boc-s-rate-decision-affect-housing--1-6740147-1706115572038.jpg&#34;,&#34;title&#34;:&#34;How does the BoC&#39;s rate decision affect housing?&#34;,&#34;axisId&#34;:&#34;2853520&#34;},{&#34;duration&#34;:&#34;303&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/24/should-canadians-expect-a-rate-drop-in-2024--1-6739991-1706109679393.jpg&#34;,&#34;title&#34;:&#34;Should Canadians expect a rate drop in 2024?&#34;,&#34;axisId&#34;:&#34;2853417&#34;},{&#34;duration&#34;:&#34;160&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2023/9/29/will-bank-of-canada-stop-rate-hikes--1-6582913-1695997026243.jpg&#34;,&#34;title&#34;:&#34;Will Bank of Canada stop rate hikes? &#34;,&#34;axisId&#34;:&#34;2777043&#34;},{&#34;duration&#34;:&#34;271&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2023/9/29/canada-in--rounding-error-recession---economist-1-6583272-1696008884141.jpg&#34;,&#34;title&#34;:&#34;Canada in &#39;rounding error recession&#39;: economist &#34;,&#34;axisId&#34;:&#34;2776969&#34;},{&#34;duration&#34;:&#34;226&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2023/9/28/canada-s-economy-will-recover-next-year--deloitte-1-6581291-1695910387335.jpg&#34;,&#34;title&#34;:&#34;Canada&#39;s economy will recover next year: Deloitte &#34;,&#34;axisId&#34;:&#34;2776294&#34;},{&#34;duration&#34;:&#34;330&#34;,&#34;thumbnail&#34;:&#34;/content/dam/ctvnews/en/images/2023/9/28/reaction-to-deloitte-canada-report-1-6581795-1695930052852.jpg&#34;,&#34;title&#34;:&#34;Reaction to Deloitte Canada report&#34;,&#34;axisId&#34;:&#34;2776555&#34;}]" show-description="false" brand-logo="/content/dam/ctvnews/en/images/logos/CTVNewsLogo_desktop.png" brand-logo-alt="CTVNews.ca" base-url="https://account.bellmedia.ca" fallback-url="https://account.ctvnews.ca/sso" service="ctvnews" cookie-domain="ctvnews.ca" use-capi-thumbnails="false" jasper-player-autoplay-strategy="always" jasper-brand-style="#005fff" cast-application-id="18BEF01D"></jasper-player-container>
    
    
  


            </section>
          
      </div>
    </div>
  
  
  


                    </div>
                    <div class="bodyContainer aem-Grid aem-Grid--9 aem-Grid--default--9 aem-Grid--phonelandscape--12 aem-Grid--tablet--12 aem-Grid--tabletlandscape--9 aem-Grid--phone--12">
                        <div class="responsivegrid aem-GridColumn
                aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0
                aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--phonelandscape--0
                aem-GridColumn--tablet--10 aem-GridColumn--offset--tablet--0
                aem-GridColumn--tabletlandscape--8 aem-GridColumn--offset--tabletlandscape--1
                aem-GridColumn--default--8 aem-GridColumn--offset--default--1
                aem-GridColumn--abovedefault--2 aem-GridColumn--offset--abovedefault--0">
                            <div class="aem-Grid aem-Grid--default--8 aem-Grid--abovedefault--9 aem-Grid--tabletlandscape--8 aem-Grid--tablet--10 aem-Grid--phonelandscape--12 aem-Grid--phone--12 ">
                                <section aria-label="Article metadata">
                                    <div class="byline aem-GridColumn--offset--tabletlandscape--0 aem-GridColumn--phonelandscape--none aem-GridColumn--tabletlandscape--8 aem-GridColumn--tabletlandscape--none aem-GridColumn--phone--12 aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--offset--phonelandscape--0 aem-GridColumn--phonelandscape--12 aem-GridColumn--default--8 aem-GridColumn--abovedefault--9">
                                        <bio-content byline="Sammy Hudes" content='[{&#34;firstName&#34;:&#34;The Canadian&#34;,&#34;lastName&#34;:&#34;Press&#34;,&#34;bioUrl&#34;:&#34;https://www.ctvnews.ca/the-canadian-press-1.4652320&#34;,&#34;polopolyID&#34;:&#34;1.4652320&#34;,&#34;jobTitle&#34;:&#34;Staff&#34;}]'></bio-content>
                                    </div>
                                    <div class="articlepublishupdatedate aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--tabletlandscape--0 aem-GridColumn--tabletlandscape--5 aem-GridColumn--default--none aem-GridColumn--tablet--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--tabletlandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phonelandscape--0 aem-GridColumn--default--4 aem-GridColumn--abovedefault--9">
                                        

    <article-publish-update-date display-label display-timezone display-date-published display-date-updated format="fallback" locale="en" fallback-published-date="Jan. 28, 2024 8:57 a.m. EST" fallback-updated-date="Jan. 28, 2024 8:57 a.m. EST" published-date="Sun Jan 28 08:57:00 EST 2024" updated-date="Sun Jan 28 08:57:33 EST 2024"></article-publish-update-date>




                                    </div>
                                </section>
                                

                                <section class="sharetools aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--tabletlandscape--0 aem-GridColumn--tablet--4 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--tabletlandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phonelandscape--0 aem-GridColumn--tabletlandscape--3 aem-GridColumn--default--4 aem-GridColumn--abovedefault--9" aria-label="Share">
                                    <div class="c-flyout__shareText">
                                        Share
                                    </div>
                                    <div class="viafoura">
                                        <div class="vf-widget vf-share-bar-default" data-widget="sharebar" data-button-view="false" data-show-labels="false" data-show-counters="false" data-show-total="false" data-share-current-page-url="true">
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="responsivegrid aem-GridColumn
                aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0
                aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--phonelandscape--0
                aem-GridColumn--tablet--10 aem-GridColumn--offset--tablet--0
                aem-GridColumn--tabletlandscape--8 aem-GridColumn--offset--tabletlandscape--1
                aem-GridColumn--default--8 aem-GridColumn--offset--default--1
                aem-GridColumn--abovedefault--7 aem-GridColumn--offset--abovedefault--0">
                            <div class="aem-Grid aem-Grid--default--7 aem-Grid--tabletlandscape--8 aem-Grid--tablet--10 aem-Grid--phonelandscape--12 aem-Grid--phone--12 ">
                                <div class="bodyText responsivegrid aem-GridColumn--offset--tabletlandscape--0 aem-GridColumn--tabletlandscape--8 aem-GridColumn--default--none aem-GridColumn--tabletlandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--12">
                                    <div class="aem-Grid aem-Grid--default--7 aem-Grid--tabletlandscape--8 aem-Grid--phone--12 ">
                                        <div class="text aem-GridColumn--tabletlandscape--8 aem-GridColumn--tablet--10 aem-GridColumn--phone--12 aem-GridColumn--phonelandscape--12 aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--abovedefault--7">
                                            
                                                
<div class="c-text">
     
     <span class="placeline">TORONTO - </span>
     
    <p>
	One walk through a home tells Rachael Stafford what adjustments are needed to pique the interest of potential buyers.</p>
<p>
	For Stafford, the founder and creative director of organizing and staging company Order in the House, changes can range from decluttering rooms to services like painting and repairs, or even bringing in furniture rentals.</p>
<ul>
	<li>
		<strong><a href="https://www.ctvnews.ca/business">Top business headlines, all in one place</a></strong></li>
</ul>
<ul>
	<li>
		<strong><a href="https://www.ctvnews.ca/business/real-estate">Top real estate headlines, all in one place</a></strong></li>
</ul>
<p>
	It's a service valued by homeowners, she said, especially in a hot market where sellers look to gain any advantage that can help drive up the price of their property.</p>
<p>
	But as home sales throughout much of Canada have turned sluggish, home staging services have taken a hit as sellers rethink the cost of a thorough revamp, Stafford said.</p>
<p>
	&quot;We're still supplementing with some (furniture) rentals where rooms really need it,&quot; she said. &quot;But I find that sellers are more so trying to scale back a little bit on the rentals, concerned about the initial investment and the ongoing monthly fees should the property not sell quickly.&quot;</p>
<p>
	Stafford, who is based in the Toronto area, said companies like hers have had to adapting this high interest rate environment after a years-long housing boom. When interest rates were low coming out of the pandemic, &quot;realtors and homeowners were willing to put in that extra money and go that extra mile because they knew they were getting the 1/8return on investment 3/8 on it,&quot; she said.</p>
<p>
	But now, many clients are either relying more on Order in the House's decluttering and home organizing service or simply tidying up themselves based on advice received from the initial consultation.</p>
<p>
	&quot;We have a warehouse where we store our staging accessories. It's obviously very tough to be incurring those monthly storage fees when staging is not busy,&quot; Stafford said.</p>
<p>
	&quot;I think people forget staging appears to be a very glamorous industry, but there are a lot of moving parts behind the scenes. Thankfully, our organizing services help compensate for the slower trends in the staging market.&quot;</p>
<p>
	According to a study by the Real Estate Staging Association, 45 per cent of staged homes in both Canada and the U.S. sold for more than the seller's listing price from January to September of last year. That was down from 63 per cent in both 2021 and 2022.</p>
<p>
	The Canadian Real Estate Association reported earlier this month that the number of newly listed homes fell 5.1 per cent on a month-over-month basis in December. It noted that Canadian housing markets have remained quiet since the Bank of Canada's interest rate hikes last summer.</p>
<p>
	Cailey Heaps, president of the Heaps Estrin Real Estate Team in Toronto, said that with the region's home sales at a 20-year low, staging companies are &quot;far more available than they used to be.&quot;</p>
<p>
	She said the biggest shift in client behaviour that she's noticed has been sellers choosing not to maintain the staging in their homes for the duration of the listing.</p>
<p>
	&quot;They might stage for the first month and then if it doesn't sell, they remove the staging ... and go back to living with the way they had the house, but rely on the photos from when it was staged,&quot; Heaps said.</p>
<p>
	She added that if she suspects a listing is going to take longer to sell based on factors such as geography and price point, she will recommend clients invest in a more &quot;conservative&quot; amount of staging that can go the distance.</p>
<p>
	&quot;So suggesting, 'OK, let's stage the main floor, the primary bedroom, but we can leave the kids' bedrooms in the basement,&quot;'Heaps said.</p>
<p>
	Home stagers have had to be more creative to account for the longer listing periods and added flexibility sellers need in the current market, said Katie Walker, principal designer at Katie Walker Interiors. She said the slower market hasn't affected the volume of business for her Greater Toronto staging company, &quot;but it has changed the way that things are done.&quot;</p>
<p>
	In addition to traditional staging, where physical furniture is rented to place in the home, her company offers the option of virtual staging, which saves both money and heavy lifting.</p>
<p>
	Designers are able to blend 3D models of furniture into photos of the seller's home and digitally remove some of the existing furniture. Walker said the option is becoming more popular, especially as part of a hybrid staging process that still includes physical remodelling of high-priority rooms.</p>
<p>
	&quot;What we're seeing is obviously longer days on market, so it's affecting the way the homeowner will treat the transaction. Instead of saying they'll get a hotel for a week and incur that cost, they'll be living in the property,&quot; said Walker.</p>
<p>
	&quot;In the old days, back in COVID, I would have said, 'Remove that desk so we can make this space look larger.' Now I'm hearing more of, 'Well, I have to live here for the 45 days that this is going to be on market so let's make that work.&quot;'</p>
<p>
	With forecasts of a potential rebound in the housing market this year as the Bank of Canada looks to begin cutting its key interest rate, Stafford said she's hopeful the staging industry will see a similar bump. She said even minor touch-ups by a professional can go a long way.</p>
<p>
	&quot;You really want your home to show at its best, particularly in the photos for the MLS listings,&quot; she said.</p>
<p>
	&quot;Buyers ... are browsing photos (and)listings online before they're even willing to reach out to the sellers' realtor to book a showing. So if that house doesn't show at its best, sellers are really missing an opportunity.&quot;</p>
<p>
	<em>This report by The Canadian Press was first published Jan. 28, 2024.</em></p>

</div>

    

                                            
                                            
                                                <related-images content='[{&#34;imageUrl&#34;:&#34;/content/dam/ctvnews/en/images/2024/1/28/real-estate-sign-1-6745527-1706450255972.jpg&#34;,&#34;description&#34;:&#34;A sold sign sits in front of a house in Toronto on Tuesday July 12, 2022. THE CANADIAN PRESS/Cole Burston&#34;}]' title="RELATED IMAGES">
                                                </related-images>
                                            

                                            <!-- viafoura liveblog-->
                                            <div class="c-tags">
                                                
                                                
                                            </div><!-- END viafoura liveblog-->

                                            <div>
                                                
                                                
                                                
                                                    <div class="c-bottom__container">
                                                        <bottom-bar content='[{&#34;icon&#34;:&#34;e96f&#34;,&#34;urlArticleInclude&#34;:&#34;true&#34;,&#34;label&#34;:&#34;Report an error&#34;,&#34;url&#34;:&#34;https://www.ctvnews.ca/report-an-error-1.1162498&#34;},{&#34;icon&#34;:&#34;e9bc&#34;,&#34;urlArticleInclude&#34;:&#34;false&#34;,&#34;label&#34;:&#34;Editorial standards &amp; policies&#34;,&#34;url&#34;:&#34;https://www.ctvnews.ca/editorial-standards-and-policies&#34;},{&#34;icon&#34;:&#34;e9bd&#34;,&#34;urlArticleInclude&#34;:&#34;false&#34;,&#34;label&#34;:&#34;Why you can trust CTV News&#34;,&#34;url&#34;:&#34;https://www.ctvnews.ca/editorial-standards-and-policies#anchor12&#34;}]'></bottom-bar>
                                                    </div>
                                                
                                            </div>
                                                <div class="sraAdvert advert aem-GridColumn--default--9 aem-GridColumn">
                                                    
                                                        <sra-advert class="sraAdvert" ad-site="/5479/ctv.ctvnews/business/stories" title-position="hidden" type="slimCut" google-tag-environment="prod" permutive-timeout="0" size="[[30,1]]" mobile-size="[[30,1]]" magnite-enable="true">
                                                        </sra-advert>
                                                    
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        <related-articles title="RELATED STORIES" relatedlinkstitle="RELATED LINKS" specialpromos='{}'></related-articles>
                    
                </div>
                <div class="aem-GridColumn right-column
                aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0
                aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--phonelandscape--0
                aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0
                aem-GridColumn--tabletlandscape--12 aem-GridColumn--offset--tabletlandscape--0
                aem-GridColumn--default--4 aem-GridColumn--offset--default--0
                aem-GridColumn--abovedefault--3 aem-GridColumn--offset--abovedefault--0">
                    <!-- RIGHT RAIL AD PLACEHOLDER -->
                    <div class="c-advert-disabled c-advert-rail sraAdvert advert aem-GridColumn--default--9 aem-GridColumn">
                        
                                <sra-advert class="sraAdvert" ad-site="/5479/ctv.ctvnews/business/stories" title-position="top" type="sectionPage" google-tag-environment="prod" permutive-timeout="0" size="[[300,250],[300,600],[300,1050],[&#39;fluid&#39;]]" mobile-size="[[300,250],[300,600],[300,1050],[&#39;fluid&#39;]]" sticky="disabled" magnite-enable="true">
                                </sra-advert>
                        
                    </div>
                    <div class="c-experiencefragment--wrapper">
                        
    
    <div id="articlefragment--1767065249" class="cmp-articlefragment">
      
    

    </div>
  
                    </div>
                </div>
                <div class="aem-GridColumn
                aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0
                aem-GridColumn--phonelandscape--12 aem-GridColumn--offset--phonelandscape--0
                aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0
                aem-GridColumn--tabletlandscape--12 aem-GridColumn--offset--tabletlandscape--0
                aem-GridColumn--default--12 aem-GridColumn--offset--default--0
                aem-GridColumn--abovedefault--12 aem-GridColumn--offset--abovedefault--0">
                
    <div class="c-experiencefragment c-experiencefragment--"><div class="xfpage page basicpage"><!-- SDI include (path: /content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content.content.nocache.html, resourceType: bmdaem-domains/news/components/structure/xfpage) -->


    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--tabletlandscape--12 ">
    
    <div class="articleVideoSlider aem-GridColumn aem-GridColumn--default--12">
    <div role="list">
        <div id="articleVideoSlider-2073269297" class="cmp-articleVideoSlider">
            <article-video-slider list-title="Top Videos" v-bind:article-list="[{&#34;videoTitle&#34;:&#34;71-year-old allegedly tries to kill husband over postcard&#34;,&#34;videoUrl&#34;:&#34;/video/c2858579-71-year-old-allegedly-tries-to-kill-husband&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6751151.1706791779!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Video shows shots being fired at Ont. luxury car dealership&#34;,&#34;videoUrl&#34;:&#34;/video/c2858552-ctv-national-news--combating-extortion-schemes&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750976.1706757660!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;WARNING: Video shows attack on NYPD officers&#34;,&#34;videoUrl&#34;:&#34;/video/c2858530-video-shows-attack-on-nypd-officers&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750983.1706757993!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Pemberton, B.C. under state of emergency amid flood warnings&#34;,&#34;videoUrl&#34;:&#34;/video/c2858556-ctv-national-news--extreme-flooding-in-b-c-?playlistId\u003d1.6749431&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6751015.1706761698!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Ont. coyote attack victim describes harrowing moments&#34;,&#34;videoUrl&#34;:&#34;/video/c2858379-mississauga-man-describes-moment-coyote-attacked&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6467201.1706487792!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;A Mississauga man is thankful he and his dog are safe after a coyote slammed into him trying to attack his four-year-old Jindo.&#34;},{&#34;videoTitle&#34;:&#34;Freeze on food prices across Canada could come to an end&#34;,&#34;videoUrl&#34;:&#34;/video/c2858307-freeze-on-food-prices-could-come-to-an-end?playlistId\u003d1.6604639&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6678810.1702013476!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Should solar eclipses cancel classes? Move prompts debate&#34;,&#34;videoUrl&#34;:&#34;/video/c2858388-should-solar-eclipse-cancel-classes-in-toronto-&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750745.1706747178!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Mark Holland gives impassioned defence of Liberal record&#34;,&#34;videoUrl&#34;:&#34;/video/c2857982-holland-gives-impassioned-defence-of-liberals&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750102.1706727374!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;}]" content-type="videos"></article-video-slider>
        </div>
    </div>


    




</div>
<div class="htmlcomponent aem-GridColumn aem-GridColumn--default--12">

<div class="c-htmlComponent">
    <html-component embed-id="Space" html-input="&lt;br&gt;"></html-component>
</div>

    

</div>
<div class="list c-list_single_image_mosaic aem-GridColumn--offset--tabletlandscape--0 aem-GridColumn--default--none aem-GridColumn--tabletlandscape--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0 aem-GridColumn--tabletlandscape--12">
    <div id="list--1424691638" class="cmp-list">
        
    
        
            <section aria-label="CTVNews.ca Top Stories">
                
                
                    <h2 class="c-list__title">CTVNews.ca Top Stories</h2>
                

                
                
                    
                        <div class="c-list c-list-row c-list--Columns">
                            
    
        <div class="c-list-col">
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date=" Thu Feb 01 07:56:53 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date=" Thu Feb 01 07:56:53 EST 2024"></span>
                    <a href="https://ottawa.ctvnews.ca/minor-earthquake-rattles-ontario-quebec-border-near-cornwall-ont-1.6751156" class="c-list__item__link">Minor earthquake rattles Ontario-Quebec border near Cornwall, Ont.</a>
                </h3>
                    <p class="c-list__item__description">Earthquakes Canada reported a magnitude 3.7 earthquake occurred at 7:37 a.m. in Quebec, southeast of Valleyfield Quebec and east of Cornwall.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date="Thu Feb 01 07:56:53 EST 2024"></p>
            </div>

        </div>
    </article>

    
    
        </div>
    

                        
                            
    
        <div class="c-list-col">
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date=" Thu Feb 01 07:38:38 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date=" Thu Feb 01 07:38:38 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/unrwa-says-it-may-be-forced-to-shut-down-by-the-end-of-february-as-countries-pull-support-1.6751137" class="c-list__item__link">UNRWA says it may be forced to shut down by the end of February as countries pull support</a>
                </h3>
                    <p class="c-list__item__description">The aid group that has been working to help the 2.3 million Palestinians facing what the United Nations has deemed a humanitarian crisis in Gaza may ‘be forced’ to shut down operations by the end of February due to numerous countries pulling their support.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date="Thu Feb 01 07:38:38 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date=" Thu Feb 01 06:18:57 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date=" Thu Feb 01 06:18:57 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/mother-2-girls-in-a-hospital-after-corrosive-substance-attack-in-london-1.6751076" class="c-list__item__link">Mother, 2 girls in a hospital after &#39;corrosive substance&#39; attack in London</a>
                </h3>
                    <p class="c-list__item__description">A woman and her two young daughters were in a hospital on Thursday being treated for injuries after a man threw a corrosive substance at them in south London. Officers received reports that a man pushed a 3-year-old girl to the ground and threw an alkaline substance at her, her 8-year-old sister and their 31-year-old mother.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date="Thu Feb 01 06:18:57 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 16:44:57 EST 2024" data-published-date=" Wed Jan 31 16:44:57 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 16:44:57 EST 2024" data-published-date=" Wed Jan 31 16:44:57 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/health/he-thought-it-was-the-flu-says-widow-of-man-who-died-of-strep-a-1.6750343" class="c-list__item__link">&#39;He thought it was the flu,&#39; says widow of man who died of strep A</a>
                </h3>
                    <p class="c-list__item__description">A New Brunswick widow is urging Canadians with symptoms of strep A to get tested or go to the hospital so that other families don’t have to deal with a loss like hers did.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 16:44:57 EST 2024" data-published-date="Wed Jan 31 16:44:57 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:16:57 EST 2024" data-published-date=" Wed Jan 31 18:23:08 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:16:57 EST 2024" data-published-date=" Wed Jan 31 18:23:08 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/woman-sentenced-6-years-in-prison-for-us-6m-online-romance-scam-1.6750550" class="c-list__item__link">Woman sentenced 6 years in prison for US$6M online romance scam</a>
                </h3>
                    <p class="c-list__item__description">Nelly Idowu, 39, is one of four defendants sentenced for the two-year scheme that defrauded dozens of victims out of millions of dollars.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:16:57 EST 2024" data-published-date="Wed Jan 31 18:23:08 EST 2024"></p>
            </div>

        </div>
    </article>

    
    
        </div>
    

                        
                            
    
        <div class="c-list-col">
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date=" Thu Feb 01 06:16:06 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date=" Thu Feb 01 06:16:06 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/business/real-estate-receiverships-on-the-rise-as-projects-stall-1.6751074" class="c-list__item__link">Real estate receiverships on the rise as projects stall</a>
                </h3>
                    <p class="c-list__item__description">From one of Canada’s tallest condo towers to bare tracts of land, residential development projects across the country are increasingly being pushed into receivership.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date="Thu Feb 01 06:16:06 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 17:41:28 EST 2024" data-published-date=" Wed Jan 31 14:01:36 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 17:41:28 EST 2024" data-published-date=" Wed Jan 31 14:01:36 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/canada/here-are-the-5-canadian-cities-with-the-fewest-low-cost-rental-units-report-1.6750054" class="c-list__item__link">Here are the 5 Canadian cities with the fewest low-cost rental units: report</a>
                </h3>
                    <p class="c-list__item__description">Rental vacancy rates are the lowest in the country leaving renters in some Canadians cities priced out. Here are the least affordable places to rent.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 17:41:28 EST 2024" data-published-date="Wed Jan 31 14:01:36 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date=" Thu Feb 01 08:04:46 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date=" Thu Feb 01 08:04:46 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/sports/players-facing-sex-assault-charges-casts-shadow-over-nhl-all-star-weekend-festivities-1.6751162" class="c-list__item__link">Players facing sex assault charges casts shadow over NHL all-star weekend festivities</a>
                </h3>
                    <p class="c-list__item__description">The NHL all-star weekend festivities are set to begin today in Toronto under a cloud, with members of Canada&#39;s 2018 world junior team facing charges over an alleged sexual assault.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date="Thu Feb 01 08:04:46 EST 2024"></p>
            </div>

        </div>
    </article>

    
    

                        
                            
    
    
        
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 05:34:41 EST 2024" data-published-date=" Thu Feb 01 05:34:41 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 05:34:41 EST 2024" data-published-date=" Thu Feb 01 05:34:41 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/israel-and-lebanon-are-prepping-for-a-war-neither-wants-but-many-fear-it-s-becoming-inevitable-1.6751053" class="c-list__item__link">Israel and Lebanon are prepping for a war neither wants, but many fear it&#39;s becoming inevitable</a>
                </h3>
                    <p class="c-list__item__description">The prospect of a full-scale war between Israel and Lebanon’s Hezbollah militia terrifies people on both sides of the border, but some see it as an inevitable fallout from Israel’s ongoing war against Hamas in Gaza.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 05:34:41 EST 2024" data-published-date="Thu Feb 01 05:34:41 EST 2024"></p>
            </div>

        </div>
    </article>

    
    
        </div>
    

                        </div>

                    
                    
                
            </section>
        
        

        

        
    

    </div>





</div>
<div class="articleVideoSlider aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
    <div role="list">
        <div id="articleVideoSlider-2073269248" class="cmp-articleVideoSlider">
            <article-video-slider list-title="Must Watch" v-bind:article-list="[{&#34;videoTitle&#34;:&#34;Inside the incredible search for Amelia Earhart\u0027s lost plane&#34;,&#34;videoUrl&#34;:&#34;/video/c2858586-inside-the-search-for-amelia-earhart?playlistId\u003d1.6749366&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6751195.1706794200!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Suspected jewelry thieves crash truck into Ont. mall&#34;,&#34;videoUrl&#34;:&#34;/video/c2858328-truck-rams-into-mall&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750484.1706740623!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Video shows 11-year-old\u0027s attempted abduction in Arizona&#34;,&#34;videoUrl&#34;:&#34;/video/c2857904-video-shows-attempted-abduction-in-arizona&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6749977.1706723010!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Elmo asked how we were doing, and so many people replied&#34;,&#34;videoUrl&#34;:&#34;/video/c2858411-tweet-from-elmo-prompts-celebrity-replies&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6750753.1706747474!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;WARNING: Hockey brawl leaves B.C. goalie seriously injured&#34;,&#34;videoUrl&#34;:&#34;/video/c2857620-content-warning--hockey-player-injured-in-brawl&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6749315.1706718263!/httpImage/image.png_gen/derivatives/landscape_800/image.png&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;Burglar pretends to be delivery driver before home break-in&#34;,&#34;videoUrl&#34;:&#34;/video/c2857504-waterloo-break-in-caught-on-camera&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6748993.1706658395!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;},{&#34;videoTitle&#34;:&#34;WATCH: Church goes up in flames in New Glasgow, N.S.&#34;,&#34;videoUrl&#34;:&#34;/video/c2857431-n-s--police-investigating-new-glasgow-church-fire&#34;,&#34;videoThumbnail&#34;:&#34;https://www.ctvnews.ca/polopoly_fs/1.6748794.1706653510!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg&#34;,&#34;videoDesc&#34;:&#34;&#34;}]" content-type="videos"></article-video-slider>
        </div>
    </div>


    




</div>
<div class="most-popular aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
    <div id="most-popular--1107077957" class="cmp-most-popular">
        <most-popular v-bind:article-list="null" content-type="article" list-title="MOST Read" most-watched-url="https://recodata.shared-svc.bellmedia.ca/api/recommendation/v2/mostPopular/articles?sites=ctvnews&amp;pageNumber=1&amp;pageSize=100" list-type="chartbeat">
        </most-popular>



        
    

    </div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--phonelandscape--12 aem-Grid--default--12 ">
    
    <div class="list c-list-more-stories aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--default--6 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-580972730" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Canada">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/canada" class="c-list__title__link">Canada</a> </h2>
                
                
                

                <ul class="c-list c-list--2Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.1285989.1465549723!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date=" Thu Feb 01 07:56:53 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date=" Thu Feb 01 07:56:53 EST 2024"></span>
                    <a href="https://ottawa.ctvnews.ca/minor-earthquake-rattles-ontario-quebec-border-near-cornwall-ont-1.6751156" class="c-list__item__link">Minor earthquake rattles Ontario-Quebec border near Cornwall, Ont.</a>
                </h3>
                    <p class="c-list__item__description">Earthquakes Canada reported a magnitude 3.7 earthquake occurred at 7:37 a.m. in Quebec, southeast of Valleyfield Quebec and east of Cornwall.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:55:58 EST 2024" data-published-date="Thu Feb 01 07:56:53 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6750506.1706741231!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 22:51:17 EST 2024" data-published-date=" Wed Jan 31 17:48:53 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 22:51:17 EST 2024" data-published-date=" Wed Jan 31 17:48:53 EST 2024"></span>
                    <a href="https://edmonton.ctvnews.ca/alberta-to-require-parental-consent-for-name-pronoun-changes-at-school-1.6750498" class="c-list__item__link">Alberta to require parental consent for name, pronoun changes at school</a>
                </h3>
                    <p class="c-list__item__description">Premier Danielle Smith has announced a raft of changes affecting transgender Albertans, including requiring parental consent for students 15 and under who want to change their names or pronouns at school.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 22:51:17 EST 2024" data-published-date="Wed Jan 31 17:48:53 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 18:08:59 EST 2024" data-published-date=" Wed Jan 31 13:03:50 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 18:08:59 EST 2024" data-published-date=" Wed Jan 31 13:03:50 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/canada/here-s-how-canada-s-new-foreign-student-visa-cap-could-affect-rents-1.6749982" class="c-list__item__link">Here&#39;s how Canada&#39;s new foreign student visa cap could affect rents</a>
                </h3>
                    <p class="c-list__item__description">Canada&#39;s new limit on visas for international students will cool the high demand for rental units and slow the rate of rent hikes, but it won&#39;t necessarily be a big factor in solving the country&#39;s housing affordability crisis, observers say.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 18:08:59 EST 2024" data-published-date="Wed Jan 31 13:03:50 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 20:53:05 EST 2024" data-published-date=" Wed Jan 31 20:53:05 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 20:53:05 EST 2024" data-published-date=" Wed Jan 31 20:53:05 EST 2024"></span>
                    <a href="https://bc.ctvnews.ca/regulator-searches-home-of-b-c-childbirth-activist-with-history-of-unauthorized-midwifery-1.6750865" class="c-list__item__link">Regulator searches home of B.C. &#39;childbirth activist&#39; with history of unauthorized midwifery</a>
                </h3>
                    <p class="c-list__item__description">The B.C. College of Nurses and Midwives is investigating reports that a self-described &#34;childbirth activist&#34; from Vancouver Island has been offering unauthorized midwifery services, in violation of a decades-old court order.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 20:53:05 EST 2024" data-published-date="Wed Jan 31 20:53:05 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date=" Wed Jan 31 20:42:03 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date=" Wed Jan 31 20:42:03 EST 2024"></span>
                    <a href="https://vancouverisland.ctvnews.ca/pushing-the-envelope-collaboration-between-uvic-and-bombardier-looking-to-make-jet-aviation-more-sustainable-1.6750853" class="c-list__item__link">&#39;Pushing the envelope&#39;: Collaboration between UVic and Bombardier looking to make jet aviation more sustainable</a>
                </h3>
                    <p class="c-list__item__description">The design of an experimental flight test vehicle at the University of Victoria’s Centre for Aerospace Research in North Saanich is looking to change the face of business jet aviation around the world.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date="Wed Jan 31 20:42:03 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 19:39:48 EST 2024" data-published-date=" Wed Jan 31 18:15:48 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 19:39:48 EST 2024" data-published-date=" Wed Jan 31 18:15:48 EST 2024"></span>
                    <a href="https://saskatoon.ctvnews.ca/james-smith-inquest-asks-police-to-prioritize-warrants-for-repeat-domestic-violence-offenders-1.6750554" class="c-list__item__link">James Smith inquest asks police to prioritize warrants for repeat domestic violence offenders</a>
                </h3>
                    <p class="c-list__item__description">The jury from the inquest into one of Canada’s most brutal mass killings suggested changes to release conditions, prison programming and police practices it says could help prevent future violence.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 19:39:48 EST 2024" data-published-date="Wed Jan 31 18:15:48 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>
<div class="list c-list-more-stories aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--default--6 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-1329847258" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="World">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/world" class="c-list__title__link">World</a> </h2>
                
                
                

                <ul class="c-list c-list--2Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751071.1706785100!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 05:59:27 EST 2024" data-published-date=" Thu Feb 01 05:59:27 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 05:59:27 EST 2024" data-published-date=" Thu Feb 01 05:59:27 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/pakistani-troops-kill-22-insurgents-in-southwest-after-co-ordinated-attacks-over-iran-strikes-1.6751055" class="c-list__item__link">Pakistani troops kill 22 insurgents in southwest after co-ordinated attacks over Iran strikes</a>
                </h3>
                    <p class="c-list__item__description">Pakistani security forces killed 22 insurgents this week in an operation against Baloch separatists, who had launched attacks with suicide bombers and gunmen in retaliation for Pakistani strikes on insurgent hideouts in Iran in January, officials said Thursday.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 05:59:27 EST 2024" data-published-date="Thu Feb 01 05:59:27 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6750412.1706738939!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:17:43 EST 2024" data-published-date=" Wed Jan 31 17:10:23 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:17:43 EST 2024" data-published-date=" Wed Jan 31 17:10:23 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/trump-wins-final-delegate-out-of-new-hampshire-1.6750396" class="c-list__item__link">Trump wins final delegate out of New Hampshire</a>
                </h3>
                    <p class="c-list__item__description">Former President Donald Trump has won the last remaining unresolved delegate from New Hampshire, giving him a 13-9 delegate advantage in the Granite State over former UN Ambassador Nikki Haley.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:17:43 EST 2024" data-published-date="Wed Jan 31 17:10:23 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date=" Thu Feb 01 07:38:38 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date=" Thu Feb 01 07:38:38 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/unrwa-says-it-may-be-forced-to-shut-down-by-the-end-of-february-as-countries-pull-support-1.6751137" class="c-list__item__link">UNRWA says it may be forced to shut down by the end of February as countries pull support</a>
                </h3>
                    <p class="c-list__item__description">The aid group that has been working to help the 2.3 million Palestinians facing what the United Nations has deemed a humanitarian crisis in Gaza may ‘be forced’ to shut down operations by the end of February due to numerous countries pulling their support.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:38:38 EST 2024" data-published-date="Thu Feb 01 07:38:38 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date=" Thu Feb 01 06:18:57 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date=" Thu Feb 01 06:18:57 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/mother-2-girls-in-a-hospital-after-corrosive-substance-attack-in-london-1.6751076" class="c-list__item__link">Mother, 2 girls in a hospital after &#39;corrosive substance&#39; attack in London</a>
                </h3>
                    <p class="c-list__item__description">A woman and her two young daughters were in a hospital on Thursday being treated for injuries after a man threw a corrosive substance at them in south London. Officers received reports that a man pushed a 3-year-old girl to the ground and threw an alkaline substance at her, her 8-year-old sister and their 31-year-old mother.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 06:18:57 EST 2024" data-published-date="Thu Feb 01 06:18:57 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:56:20 EST 2024" data-published-date=" Thu Feb 01 07:56:20 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:56:20 EST 2024" data-published-date=" Thu Feb 01 07:56:20 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/thousands-from-russia-friendly-party-join-anti-government-protest-in-moldova-s-capital-1.6751149" class="c-list__item__link">Thousands from Russia-friendly party join anti-government protest in Moldova&#39;s capital</a>
                </h3>
                    <p class="c-list__item__description">Several thousand people from a Russia-friendly party protested in front of Moldova&#39;s parliament building on Thursday to demand the resignation of the pro-Western government.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:56:20 EST 2024" data-published-date="Thu Feb 01 07:56:20 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:26:50 EST 2024" data-published-date=" Thu Feb 01 07:26:50 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:26:50 EST 2024" data-published-date=" Thu Feb 01 07:26:50 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/world/explosion-strikes-near-vessel-in-the-red-sea-off-yemen-as-houthi-rebel-attacks-continue-1.6751128" class="c-list__item__link">Explosion strikes near vessel in the Red Sea off Yemen as Houthi rebel attacks continue</a>
                </h3>
                    <p class="c-list__item__description">Yemen&#39;s Houthi rebels fired two ballistic missiles Thursday at a Liberian-flagged container ship in the Red Sea, a U.S. defence official said, the latest attack by the rebels as America launches airstrikes targeting them.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:26:50 EST 2024" data-published-date="Thu Feb 01 07:26:50 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 ">
    
    <div class="responsivegrid aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--6 aem-Grid--phonelandscape--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--6 ">
    
    <div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-1433566752" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Politics">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/politics" class="c-list__title__link">Politics</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751106.1706788231!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 06:52:10 EST 2024" data-published-date=" Thu Feb 01 06:52:10 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 06:52:10 EST 2024" data-published-date=" Thu Feb 01 06:52:10 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/politics/csis-director-to-testify-about-transparency-at-foreign-interference-inquiry-1.6751086" class="c-list__item__link">CSIS director to testify about transparency at foreign interference inquiry</a>
                </h3>
                    <p class="c-list__item__description">A commission of inquiry into foreign interference will hear from national security officials today as it looks for ways to be transparent about a highly sensitive subject.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 06:52:10 EST 2024" data-published-date="Thu Feb 01 06:52:10 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 17:40:10 EST 2024" data-published-date=" Wed Jan 31 13:47:04 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 17:40:10 EST 2024" data-published-date=" Wed Jan 31 13:47:04 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/canada/poilievre-s-party-raised-35m-in-2023-trudeau-s-liberals-raised-15m-1.6750075" class="c-list__item__link">Poilievre&#39;s party raised $35M in 2023, Trudeau&#39;s Liberals raised $15M</a>
                </h3>
                    <p class="c-list__item__description">Pierre Poilievre&#39;s Conservatives are touting a record-setting fundraising year — his first full calendar year at the helm of the party — while Prime Minister Justin Trudeau&#39;s Liberals raised less than half of that in donations from Canadians.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 17:40:10 EST 2024" data-published-date="Wed Jan 31 13:47:04 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 20:11:56 EST 2024" data-published-date=" Wed Jan 31 16:20:25 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 20:11:56 EST 2024" data-published-date=" Wed Jan 31 16:20:25 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/politics/feds-pledge-362-million-to-provinces-cities-to-temporarily-house-asylum-seekers-1.6750321" class="c-list__item__link">Feds pledge $362 million to provinces, cities to temporarily house asylum seekers</a>
                </h3>
                    <p class="c-list__item__description">The federal government is pledging a $362.4-million top-up to its interim housing assistance program for asylum seekers. Immigration Minister Marc Miller made the announcement Wednesday, citing what he called the need to provide support that reflects the impact of asylum claims across the country.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 20:11:56 EST 2024" data-published-date="Wed Jan 31 16:20:25 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>
<div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-56219784" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Health">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/health" class="c-list__title__link">Health</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.5951340.1655470567!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 08:15:44 EST 2024" data-published-date=" Wed Jan 31 08:15:44 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 08:15:44 EST 2024" data-published-date=" Wed Jan 31 08:15:44 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/health/china-reports-death-of-woman-from-combined-h3n2-h10n5-bird-flu-1.6749524" class="c-list__item__link">China reports death of woman from combined H3N2, H10N5 bird flu</a>
                </h3>
                    <p class="c-list__item__description">China on Wednesday reported the death of a woman due to an infection of combined H3N2 and H10N5 strains of bird flu after a cross-species transmission, but said the risk of human-to-human transmission is low.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 08:15:44 EST 2024" data-published-date="Wed Jan 31 08:15:44 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 15:23:51 EST 2024" data-published-date=" Wed Jan 31 15:23:51 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 15:23:51 EST 2024" data-published-date=" Wed Jan 31 15:23:51 EST 2024"></span>
                    <a href="https://atlantic.ctvnews.ca/more/if-the-patient-couldn-t-pay-we-wouldn-t-turn-them-away-n-b-s-only-abortion-clinic-closing-1.6750244" class="c-list__item__link">&#39;If the patient couldn&#39;t pay, we wouldn&#39;t turn them away&#39;: N.B.&#39;s only abortion clinic closing</a>
                </h3>
                    <p class="c-list__item__description">After years of ups and downs, New Brunswick’s only clinic that provides procedural abortions outside of a hospital setting is closing.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 15:23:51 EST 2024" data-published-date="Wed Jan 31 15:23:51 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 14:57:43 EST 2024" data-published-date=" Wed Jan 31 14:57:43 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 14:57:43 EST 2024" data-published-date=" Wed Jan 31 14:57:43 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/health/elmo-asked-people-online-how-they-were-doing-he-got-an-earful-1.6750161" class="c-list__item__link">Elmo asked people online how they were doing. He got an earful</a>
                </h3>
                    <p class="c-list__item__description">When Elmo posted a kind-hearted check-in this week on X, formally known as Twitter, he may have assumed he’d be shielded by these social mores. But he comes from &#39;Sesame Street,&#39; which is no place for lies.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 14:57:43 EST 2024" data-published-date="Wed Jan 31 14:57:43 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--6 aem-Grid--phonelandscape--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--6 ">
    
    <div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list--947941130" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Sci-Tech">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/sci-tech" class="c-list__title__link">Sci-Tech</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751121.1706789358!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:10:27 EST 2024" data-published-date=" Thu Feb 01 07:10:27 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:10:27 EST 2024" data-published-date=" Thu Feb 01 07:10:27 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/sci-tech/musk-wants-tesla-investors-to-vote-on-switching-the-carmaker-s-corporate-registration-to-texas-1.6751120" class="c-list__item__link">Musk wants Tesla investors to vote on switching the carmaker&#39;s corporate registration to Texas</a>
                </h3>
                    <p class="c-list__item__description">Elon Musk wants Tesla investors to decide on moving the company&#39;s corporate listing to Texas after a Delaware court decided he shouldn&#39;t get a multibillion-dollar pay package.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:10:27 EST 2024" data-published-date="Thu Feb 01 07:10:27 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date=" Wed Jan 31 20:42:03 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date=" Wed Jan 31 20:42:03 EST 2024"></span>
                    <a href="https://vancouverisland.ctvnews.ca/pushing-the-envelope-collaboration-between-uvic-and-bombardier-looking-to-make-jet-aviation-more-sustainable-1.6750853" class="c-list__item__link">&#39;Pushing the envelope&#39;: Collaboration between UVic and Bombardier looking to make jet aviation more sustainable</a>
                </h3>
                    <p class="c-list__item__description">The design of an experimental flight test vehicle at the University of Victoria’s Centre for Aerospace Research in North Saanich is looking to change the face of business jet aviation around the world.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 20:42:03 EST 2024" data-published-date="Wed Jan 31 20:42:03 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 12:44:37 EST 2024" data-published-date=" Wed Jan 31 11:05:40 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 12:44:37 EST 2024" data-published-date=" Wed Jan 31 11:05:40 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/sci-tech/a-grainy-sonar-image-reignites-excitement-and-skepticism-over-earhart-s-final-flight-1.6749784" class="c-list__item__link">A grainy sonar image reignites excitement and skepticism over Earhart&#39;s final flight</a>
                </h3>
                    <p class="c-list__item__description">A grainy sonar image recorded by a private pilot has reinvigorated interest in one of the past century’s most alluring mysteries: What happened to Amelia Earhart when her plane vanished during her flight around the world in 1937?</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 12:44:37 EST 2024" data-published-date="Wed Jan 31 11:05:40 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>
<div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-2056961848" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Entertainment">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/entertainment" class="c-list__title__link">Entertainment</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751173.1706792853!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:08:50 EST 2024" data-published-date=" Thu Feb 01 08:08:50 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:08:50 EST 2024" data-published-date=" Thu Feb 01 08:08:50 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/entertainment/pearl-jam-throws-listening-party-for-new-album-that-eddie-vedder-calls-our-best-work-1.6751169" class="c-list__item__link">Pearl Jam throws listening party for new album that Eddie Vedder calls &#39;our best work&#39;</a>
                </h3>
                    <p class="c-list__item__description">Pearl Jam blasted out their forthcoming album to a few hundred family, friends, industry insiders and reporters Wednesday, and the tracks showed they are doing anything but mellowing with age.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:08:50 EST 2024" data-published-date="Thu Feb 01 08:08:50 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 21:12:29 EST 2024" data-published-date=" Wed Jan 31 21:12:29 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 21:12:29 EST 2024" data-published-date=" Wed Jan 31 21:12:29 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/entertainment/margot-robbie-says-she-doesn-t-feel-sad-about-being-omitted-from-best-actress-oscar-race-1.6750900" class="c-list__item__link">Margot Robbie says she doesn’t &#39;feel sad&#39; about being omitted from best actress Oscar race</a>
                </h3>
                    <p class="c-list__item__description">Margot Robbie is finally sharing her thoughts on how this year’s Oscar nominations panned out, which resulted in widespread disappointment after the “Barbie” star did not earn a nod in the lead actress category.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 21:12:29 EST 2024" data-published-date="Wed Jan 31 21:12:29 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 21:36:27 EST 2024" data-published-date=" Wed Jan 31 21:36:27 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 21:36:27 EST 2024" data-published-date=" Wed Jan 31 21:36:27 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/entertainment/how-taylor-swift-and-travis-kelce-became-the-focus-of-baseless-political-conspiracy-theories-1.6750916" class="c-list__item__link">How Taylor Swift and Travis Kelce became the focus of baseless political conspiracy theories</a>
                </h3>
                    <p class="c-list__item__description">The budding love story featuring music superstar Taylor Swift and Kansas City Chiefs tight end Travis Kelce took an unexpected turn into the world of political conspiracy theories this week after the team advanced to the Super Bowl.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 21:36:27 EST 2024" data-published-date="Wed Jan 31 21:36:27 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--6 aem-Grid--phonelandscape--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--6 ">
    
    <div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list--919924886" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Business">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/business" class="c-list__title__link">Business</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751075.1706786086!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date=" Thu Feb 01 06:16:06 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date=" Thu Feb 01 06:16:06 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/business/real-estate-receiverships-on-the-rise-as-projects-stall-1.6751074" class="c-list__item__link">Real estate receiverships on the rise as projects stall</a>
                </h3>
                    <p class="c-list__item__description">From one of Canada’s tallest condo towers to bare tracts of land, residential development projects across the country are increasingly being pushed into receivership.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 06:16:06 EST 2024" data-published-date="Thu Feb 01 06:16:06 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:35:03 EST 2024" data-published-date=" Thu Feb 01 07:35:03 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:35:03 EST 2024" data-published-date=" Thu Feb 01 07:35:03 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/business/canada-goose-reports-130-6m-q3-profit-revenue-up-6-from-year-earlier-1.6751136" class="c-list__item__link">Canada Goose reports $130.6M Q3 profit, revenue up 6% from year earlier</a>
                </h3>
                    <p class="c-list__item__description">Canada Goose Holdings Inc. reported $130.6 million in net income attributable to shareholders for its third-quarter as its revenue rose six per cent compared with a year ago. The luxury parka maker says the profit amounted to $1.29 per diluted share for the quarter ended Dec. 31.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:35:03 EST 2024" data-published-date="Thu Feb 01 07:35:03 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 18:22:56 EST 2024" data-published-date=" Wed Jan 31 18:22:56 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 18:22:56 EST 2024" data-published-date=" Wed Jan 31 18:22:56 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/business/a-court-rejected-elon-musk-s-us-55-8b-pay-package-what-is-he-worth-to-tesla-1.6750570" class="c-list__item__link">A court rejected Elon Musk&#39;s US$55.8B pay package. What is he worth to Tesla?</a>
                </h3>
                    <p class="c-list__item__description">Even when compared with other CEOs, who routinely get paid roughly 200 times more than their typical employees, Elon Musk&#39;s pay package was eye-opening.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 18:22:56 EST 2024" data-published-date="Wed Jan 31 18:22:56 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>
<div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-1997695442" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Lifestyle">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/lifestyle" class="c-list__title__link">Lifestyle</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6749511.1706705123!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 07:48:21 EST 2024" data-published-date=" Wed Jan 31 07:48:21 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 07:48:21 EST 2024" data-published-date=" Wed Jan 31 07:48:21 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/lifestyle/groundhog-day-s-biggest-star-is-phil-but-the-holiday-s-deep-roots-extend-well-beyond-punxsutawney-1.6749505" class="c-list__item__link">Groundhog Day&#39;s biggest star is Phil, but the holiday&#39;s deep roots extend well beyond Punxsutawney</a>
                </h3>
                    <p class="c-list__item__description">The spotlight will be on Gobbler&#39;s Knob in western Pennsylvania early Friday morning, when handlers of a groundhog named Punxsutawney Phil will announce whether he saw his own shadow and predicts six more weeks of winter or an early spring.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 07:48:21 EST 2024" data-published-date="Wed Jan 31 07:48:21 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Tue Jan 30 22:34:58 EST 2024" data-published-date=" Tue Jan 30 17:06:27 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Tue Jan 30 22:34:58 EST 2024" data-published-date=" Tue Jan 30 17:06:27 EST 2024"></span>
                    <a href="https://winnipeg.ctvnews.ca/really-overwhelming-winnipeg-woman-wins-5m-on-lotto-6-49-1.6748724" class="c-list__item__link">&#39;Really overwhelming&#39;: Winnipeg woman wins $5M on Lotto 6/49</a>
                </h3>
                    <p class="c-list__item__description">A Winnipeg woman has five million reasons to be happy.</p>
            
            <p class="c-list__item__date" data-last-modified="Tue Jan 30 22:34:58 EST 2024" data-published-date="Tue Jan 30 17:06:27 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Mon Jan 29 20:36:01 EST 2024" data-published-date=" Mon Jan 29 12:33:09 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Mon Jan 29 20:36:01 EST 2024" data-published-date=" Mon Jan 29 12:33:09 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/lifestyle/they-fell-in-love-on-vacation-but-went-their-separate-ways-four-years-later-she-sent-him-an-email-remember-me-1.6746649" class="c-list__item__link">They fell in love on vacation but went their separate ways. Four years later, she sent him an email: &#39;Remember me?&#39;</a>
                </h3>
                    <p class="c-list__item__description">Gabriella Vagnoli and Dan Watling bonded in Scotland in 2002, but lost touch not long after. Four years later, Gabriella’s name popped up in Dan’s email inbox.</p>
            
            <p class="c-list__item__date" data-last-modified="Mon Jan 29 20:36:01 EST 2024" data-published-date="Mon Jan 29 12:33:09 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--6 aem-Grid--phonelandscape--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--6 ">
    
    <div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-1657615164" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Sports">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/sports" class="c-list__title__link">Sports</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6751171.1706792574!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date=" Thu Feb 01 08:04:46 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date=" Thu Feb 01 08:04:46 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/sports/players-facing-sex-assault-charges-casts-shadow-over-nhl-all-star-weekend-festivities-1.6751162" class="c-list__item__link">Players facing sex assault charges casts shadow over NHL all-star weekend festivities</a>
                </h3>
                    <p class="c-list__item__description">The NHL all-star weekend festivities are set to begin today in Toronto under a cloud, with members of Canada&#39;s 2018 world junior team facing charges over an alleged sexual assault.</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 08:17:06 EST 2024" data-published-date="Thu Feb 01 08:04:46 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Thu Feb 01 07:18:59 EST 2024" data-published-date=" Thu Feb 01 07:18:59 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Thu Feb 01 07:18:59 EST 2024" data-published-date=" Thu Feb 01 07:18:59 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/sports/reports-f1-great-lewis-hamilton-linked-with-shock-move-from-mercedes-to-ferrari-in-2025-1.6751124" class="c-list__item__link">Reports: F1 great Lewis Hamilton linked with shock move from Mercedes to Ferrari in 2025</a>
                </h3>
                    <p class="c-list__item__description">Seven-time Formula One champion Lewis Hamilton has been linked with a shock move from Mercedes to Ferrari next year, according to reports on Thursday. Sky Sports News said Hamilton would leave Mercedes after the 2024 season and replace Carlos Sainz Jr. at Ferrari</p>
            
            <p class="c-list__item__date" data-last-modified="Thu Feb 01 07:18:59 EST 2024" data-published-date="Thu Feb 01 07:18:59 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 21:28:09 EST 2024" data-published-date=" Wed Jan 31 21:16:21 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 21:28:09 EST 2024" data-published-date=" Wed Jan 31 21:16:21 EST 2024"></span>
                    <a href="https://calgary.ctvnews.ca/flames-all-star-elias-lindholm-departs-in-trade-to-canucks-1.6750896" class="c-list__item__link">Flames all-star Elias Lindholm departs in trade to Canucks</a>
                </h3>
                    <p class="c-list__item__description">The Calgary Flames traded all-star Elias Lindholm to the Vancouver Canucks on Wednesday night.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 21:28:09 EST 2024" data-published-date="Wed Jan 31 21:16:21 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>
<div class="list c-list-more-stories aem-GridColumn--default--none aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--phonelandscape--6 aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--phonelandscape--0">
    <div id="list-716589362" class="cmp-list">
        
            <section class="c-list--horizontal" aria-label="Autos">
                
                    <h2 class="c-list__title"><a href="https://www.ctvnews.ca/autos" class="c-list__title__link">Autos</a> </h2>
                
                
                

                <ul class="c-list c-list--1Columns">
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        <div class="c-list__image">
                            <picture>
                                <source media="(min-width: 900px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_940/image.jpg"/>
                                <source media="(min-width: 400px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"/>
                                <source media="(max-width: 399px)" srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-srcset="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"/>
                                <img src="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_135/image.jpg" data-src="https://www.ctvnews.ca/polopoly_fs/1.6750726.1706746853!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg" alt=""/>
                            </picture>
                            <div class="c-list__gradient__horizontal" aria-hidden="true"></div>
                            <div class="c-list__gradient__vertical" aria-hidden="true"></div>
                            
                        </div>
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 19:30:54 EST 2024" data-published-date=" Wed Jan 31 19:30:54 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 19:30:54 EST 2024" data-published-date=" Wed Jan 31 19:30:54 EST 2024"></span>
                    <a href="https://kitchener.ctvnews.ca/dozens-of-drivers-facing-hefty-repair-bills-after-filling-up-at-guelph-ont-gas-station-1.6750634" class="c-list__item__link">Dozens of drivers facing hefty repair bills after filling up at Guelph, Ont. gas station</a>
                </h3>
                    <p class="c-list__item__description">A quick stop at the pumps turned into a headache – and a hefty repair bill – for some drivers in Guelph, Ont.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 19:30:54 EST 2024" data-published-date="Wed Jan 31 19:30:54 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Wed Jan 31 05:51:59 EST 2024" data-published-date=" Tue Jan 30 19:00:21 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Wed Jan 31 05:51:59 EST 2024" data-published-date=" Tue Jan 30 19:00:21 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/autos/more-than-1-000-tesla-vehicles-recalled-in-canada-over-rear-view-camera-glitch-1.6749014" class="c-list__item__link">More than 1,000 Tesla vehicles recalled in Canada over rear-view camera glitch</a>
                </h3>
                    <p class="c-list__item__description">Tesla issued a recall for more than 1,000 of its vehicles in Canada due to a glitch that can cause the rear-view camera system to malfunction and not display properly.</p>
            
            <p class="c-list__item__date" data-last-modified="Wed Jan 31 05:51:59 EST 2024" data-published-date="Tue Jan 30 19:00:21 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                
                    <li class="c-list__item">
    
    
    <article class="c-mosaic-item">
        <div class="c-list__item__block">


            

            

                 <!--thumbnail container -->
                    <div x-cq-linkchecker="valid" class="c-list__item__image">
                        
                        
                        
                    </div>
                

                    <!--   Text container     -->
            <div class="c-list__item__text">
                    
                    <span class="c-list__item__status c-list__tag c-list__tag-lead-story" data-last-modified="Tue Jan 30 15:31:44 EST 2024" data-published-date=" Tue Jan 30 11:11:10 EST 2024"></span>
                <h3 class="c-list__item__title">
                    
                    <span class="c-list__item__status c-list__tag-more-story-and-mosaic" data-last-modified="Tue Jan 30 15:31:44 EST 2024" data-published-date=" Tue Jan 30 11:11:10 EST 2024"></span>
                    <a href="https://www.ctvnews.ca/canada/do-not-drive-toyota-and-gm-recall-8-300-vehicles-in-canada-over-air-bag-inflators-1.6748118" class="c-list__item__link">&#39;Do not drive&#39;: Toyota and GM recall 8,300 vehicles in Canada over air bag inflators</a>
                </h3>
                    <p class="c-list__item__description">Toyota and GM are telling the owners of approximately 8,300 vehicles in Canada to stop driving them because their Takata air bag inflators may explode.</p>
            
            <p class="c-list__item__date" data-last-modified="Tue Jan 30 15:31:44 EST 2024" data-published-date="Tue Jan 30 11:11:10 EST 2024"></p>
            </div>

        </div>
    </article>
</li>
                </ul>
            </section>
        
    
        
        

        

        
    

    </div>





</div>

    
</div>
</div>

    
</div>
</div>
<div class="ctvshop-widget aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">


<div class="ctvshop-widget-wrapper">     
    <div class="ctvshop-widget-wrapper__bgEffect"></div>
    <h2 class="section-heading">
        
            <a href="https://www.ctvnews.ca/shopping.html">Shopping Trends</a>
        
        
       
    </h2>
    <div class="section-subTitle"><p>The Shopping Trends team is independent of the journalists at CTV News. We may earn a commission when you use our links to shop. <b><a href="https://www.ctvnews.ca/shopping/about-us.html" title="About the Shopping trends team">Read about us.</a></b></p>
</div>
    <div class="section-container">
        <div>
            
                <div class="section-content">
                    <ul class="c-list">
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/beauty/best-eye-creams-canada.html">
                                        
                                            <div class="c-list__item__image">
                                                <picture>
                                                    <img srcset="https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/eye-creams.png/jcr:content/renditions/cq5dam.web.360.360.04zp1.jpeg 360w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/eye-creams.png/jcr:content/renditions/cq5dam.web.480.480.04zp1.jpeg 480w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/eye-creams.png/jcr:content/renditions/cq5dam.web.1080.1080.04zp1.jpeg 1080w" onerror="this.onerror=null;this.srcset='/content/dam/common/images/placeholder.png';" class="section-image"/>
                                                </picture>
                                            </div>
                                            <div class="c-list__item__text__section__title">
                                                <h3>
                                                    Editor&#39;s Picks 
                                                </h3>
                                            </div>
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">If You Want Your Dark Circles To Disappear,  Add At Least One Of These Eye Creams To Your Cart</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/fashion/best-mens-dress-shirts-canada.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">8 Of The Best Men&#39;s Dress Shirts You Can Get Online Right Now</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/tech/useful-tech-gadgets.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">If You Want To Make Your Life A Bit Easier, Check Out These Little Tech Gadgets</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                    </ul>
                    
                </div>
            
        </div>
    
        <div>
            
                <div class="section-content">
                    <ul class="c-list">
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/health-fitness/best-gym-bags-canada.html">
                                        
                                            <div class="c-list__item__image">
                                                <picture>
                                                    <img srcset="https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/gym-bags.png/jcr:content/renditions/cq5dam.web.360.360.vxnj_.jpeg 360w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/gym-bags.png/jcr:content/renditions/cq5dam.web.480.480.vxnj_.jpeg 480w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/gym-bags.png/jcr:content/renditions/cq5dam.web.1080.1080.vxnj_.jpeg 1080w" onerror="this.onerror=null;this.srcset='/content/dam/common/images/placeholder.png';" class="section-image"/>
                                                </picture>
                                            </div>
                                            <div class="c-list__item__text__section__title">
                                                <h3>
                                                    Health &amp; Fitness
                                                </h3>
                                            </div>
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">7 Gym Bags That&#39;ll Actually Fit All Your Stuff</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/health-fitness/best-rowing-machines-canada.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">Our Guide to the Best Rowing Machines in Canada in 2024 (And Where to Get Them)</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/health-fitness/best-fitness-trackers-canada.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">Our Guide to the Best Fitness Trackers in Canada in 2024 (And Where to Get Them)</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </ul>
                    
                </div>
            
        </div>
    
        <div>
            
                <div class="section-content">
                    <ul class="c-list">
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/gifts/valentines-day-gifts-under-25.html">
                                        
                                            <div class="c-list__item__image">
                                                <picture>
                                                    <img srcset="https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/valentines-4-.png/jcr:content/renditions/cq5dam.web.360.360.3fgi1.jpeg 360w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/valentines-4-.png/jcr:content/renditions/cq5dam.web.480.480.3fgi1.jpeg 480w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/30/valentines-4-.png/jcr:content/renditions/cq5dam.web.1080.1080.3fgi1.jpeg 1080w" onerror="this.onerror=null;this.srcset='/content/dam/common/images/placeholder.png';" class="section-image"/>
                                                </picture>
                                            </div>
                                            <div class="c-list__item__text__section__title">
                                                <h3>
                                                    Gifts
                                                </h3>
                                            </div>
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">21 Of The Best Valentine&#39;s Day Gifts And Add-Ons You Can Find Under $25</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/gifts/valentines-gifts-under-50.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">21 Of The Best Valentine&#39;s Day Gifts You Can Get Under $50</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/gifts/best-galentines-gifts.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">14 Gifts To Grab For Your Best Galentines </h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </ul>
                    
                </div>
            
        </div>
    
        <div>
            
                <div class="section-content">
                    <ul class="c-list">
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/home/bathroom-products-canada.html">
                                        
                                            <div class="c-list__item__image">
                                                <picture>
                                                    <img srcset="https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/bathroom-products.png/jcr:content/renditions/cq5dam.web.360.360.kmrg_.jpeg 360w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/bathroom-products.png/jcr:content/renditions/cq5dam.web.480.480.kmrg_.jpeg 480w,
                                                                 https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2024/01/29/bathroom-products.png/jcr:content/renditions/cq5dam.web.1080.1080.kmrg_.jpeg 1080w" onerror="this.onerror=null;this.srcset='/content/dam/common/images/placeholder.png';" class="section-image"/>
                                                </picture>
                                            </div>
                                            <div class="c-list__item__text__section__title">
                                                <h3>
                                                    Home
                                                </h3>
                                            </div>
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">22 Practical Bathroom Products You Won&#39;t Regret Ordering </h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/home/winter-home-products.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">10 Products That’ll Help You Deal With Snow, Ice, And The Worst Parts of Winter</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        <li class="c-list__item">
                            <article class="c-mosaic-item">
                                <div class="c-list__item__block">
                                    <a href="https://www.ctvnews.ca/shopping/articles/home/useful-practical-products-amazon-canada.html">
                                        
                                        <div class="c-list__item__text">
                                            <h3 class="c-list__item__title article-title">21 Useful Amazon Canada Products That&#39;ll Solve Little Problems In Your Life</h3>
                                        </div>
                                            
                                        </a> 
                                </div>
                            </article>
                            
                        </li>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </ul>
                    
                </div>
            
        </div>
    </div>
</div>


  
</div>
<div class="responsivegrid aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">


<div class="aem-Grid aem-Grid--12 aem-Grid--phonelandscape--12 aem-Grid--tablet--12 aem-Grid--default--12 ">
    
    <div class="sectionheader title c-sectionheader-border-top aem-GridColumn aem-GridColumn--default--12">
<div id="sectionheader-c6b647373b" class="cmp-title">
    <h2 class="cmp-title__text">Stay Connected</h2>
</div>

    

</div>
<div class="teaser aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
<div class="c-teaser">
    <div class="c-teaser__content">
        
    

        
    

        
    

    </div>
    
    <div class="c-teaser__image">
    <div data-cmp-is="image" data-cmp-src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_copy_copy_cop_1623448575.coreimg{.width}.png/1674673134399/ctv-news-newsletter-promo.png" data-asset="/content/dam/ctvnews/en/images/2021/02/26/CTV News newsletter Promo.png" data-asset-id="8510f66d-71ad-407b-b1f3-57809ff71394" data-show-placeholder="properties.teaserHideImageMobile" data-show="false" class="c-image" itemscope itemtype="http://schema.org/ImageObject">
        <a class="c-image__link" href="https://www.ctvnews.ca/newsletters" data-cmp-hook-image="link">
            
                
                <img src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_copy_copy_cop_1623448575.coreimg.png/1674673134399/ctv-news-newsletter-promo.png" class="c-image__image" itemprop="contentUrl" data-cmp-hook-image="image"/>
                
            
        </a>
        
    </div>
    
    



</div>

</div>

    

</div>
<div class="teaser aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
<div class="c-teaser">
    <div class="c-teaser__content">
        
    

        
    

        
    

    </div>
    
    <div class="c-teaser__image">
    <div data-cmp-is="image" data-cmp-src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_copy_copy_cop.coreimg{.width}.png/1623045332722/ctv-news--voice-promo.png" data-asset="/content/dam/ctvnews/en/images/2021/02/26/CTV News  voice Promo.png" data-asset-id="f8101da2-a5a9-4970-be3c-c340825750c3" data-show-placeholder="properties.teaserHideImageMobile" data-show="false" class="c-image" itemscope itemtype="http://schema.org/ImageObject">
        <a class="c-image__link" href="https://www.ctvnews.ca/voice" data-cmp-hook-image="link">
            
                
                <img src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_copy_copy_cop.coreimg.png/1623045332722/ctv-news--voice-promo.png" class="c-image__image" itemprop="contentUrl" data-cmp-hook-image="image"/>
                
            
        </a>
        
    </div>
    
    



</div>

</div>

    

</div>
<div class="teaser aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
<div class="c-teaser">
    <div class="c-teaser__content">
        
    

        
    

        
    

    </div>
    
    <div class="c-teaser__image">
    <div data-cmp-is="image" data-cmp-src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_1461279347_co_1805837268.coreimg{.width}.png/1650379707643/ctv-news-app-promo.png" data-asset="/content/dam/ctvnews/en/images/2021/02/26/CTV News App Promo.png" data-asset-id="8a48302c-440c-4739-a2a3-e3c4ab075fae" data-show-placeholder="properties.teaserHideImageMobile" data-show="false" class="c-image" itemscope itemtype="http://schema.org/ImageObject">
        <a class="c-image__link" href="https://www.ctvnews.ca/app" data-cmp-hook-image="link">
            
                
                <img src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_1461279347_co_1805837268.coreimg.png/1650379707643/ctv-news-app-promo.png" class="c-image__image" itemprop="contentUrl" data-cmp-hook-image="image"/>
                
            
        </a>
        
    </div>
    
    



</div>

</div>

    

</div>
<div class="teaser aem-GridColumn--offset--tablet--0 aem-GridColumn--phonelandscape--none aem-GridColumn--default--none aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--phonelandscape--12 aem-GridColumn--tablet--6 aem-GridColumn--default--3 aem-GridColumn--offset--default--0 aem-GridColumn--offset--phonelandscape--0">
<div class="c-teaser">
    <div class="c-teaser__content">
        
    

        
    

        
    

    </div>
    
    <div class="c-teaser__image">
    <div data-cmp-is="image" data-cmp-src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_1461279347_co.coreimg{.width}.png/1694111838876/ctvnews-social-logos-1.png" data-asset="/content/dam/ctvnews/en/images/2023/7/31/CTVNews_Social_Logos_1.png" data-asset-id="8f5efa18-5bf5-40ac-b4c1-4026cf0327ad" data-show-placeholder="properties.teaserHideImageMobile" data-show="false" class="c-image" itemscope itemtype="http://schema.org/ImageObject">
        <a class="c-image__link" href="https://www.ctvnews.ca/social" data-cmp-hook-image="link">
            
                
                <img src="/content/experience-fragments/ctv_news/national/business/business-boa/master/_jcr_content/root/responsivegrid_78099/teaser_1461279347_co.coreimg.png/1694111838876/ctvnews-social-logos-1.png" class="c-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="Follow CTV News"/>
                
            
        </a>
        
    </div>
    
    



</div>

</div>

    

</div>

    
</div>
</div>

    
</div>

</div></div>
</div>
    <div id="articlefragment--1767065249" class="cmp-articlefragment">
      
    

    </div>
  
                </div>
            </div>
        </div>
    
</main>
</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12"><!-- SDI include (path: /conf/bmdaem-domains/news/settings/wcm/templates/article-news/structure/_jcr_content/root/footer/experiencefragment.nocache.html/bmdaem-domains/news/components/content/commons/experiencefragment, resourceType: bmdaem-domains/news/components/content/commons/experiencefragment) -->

    <div class="c-experiencefragment c-experiencefragment--experience-fragment-footer"><!-- SDI include (path: /content/experience-fragments/ctv_news/experience-fragment-footer/experience-fragment-footer/master/_jcr_content.content.nocache.html/bmdaem-domains/news/components/content/commons/experiencefragment, resourceType: bmdaem-domains/news/components/structure/xfpage) -->


    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="quick-article-footer aem-GridColumn aem-GridColumn--default--12">





<footer class="bm-footer">
    <div class="bm-footer__wrapper">
            <ul class="bm-footer__wrapper__firstColumn" role="navigation" aria-label="CTV News Footer Links">
                <li><a href="https://www.ctvnews.ca/search-results" title="Search CTV News">Search CTV News</a></li>
                <li><a href="https://www.bellmedia.ca/sales/digital/ctv-news-channel/" title="Advertise on CTVNews.ca">Advertise on CTVNews.ca</a></li>
                <li><a href="https://www.bellmedia.ca/sales/political-ads-registry/" title="Political Ads Registry">Political Ads Registry</a></li>
                <li><a href="https://jobs.bce.ca/bell/go/Media/3537600/" title="About CTV Careers">About CTV Careers</a></li>
                <li><a href="https://www.ctvnews.ca/stox" title="CTV News Stox">CTV News Stox</a></li>
                <li><a href="https://www.bellmedia.ca/the-lede/" title="Press Room">Press Room</a></li>
                <li><a href="https://www.ctvnews.ca/editorial-standards-and-policies" title="Editorial Standards &amp; Policies">Editorial Standards &amp; Policies</a></li>
                <li><a href="https://www.ctvnews.ca/contact" title="Contact Us">Contact Us</a></li>
                
                <li class="bm-footer__wrapper__videoLinks">
                    
                    <a href="https://www.ctvnews.ca/app" title="CTV News App">CTV News App</a>
                    <a href="https://www.ctvnews.ca/faq" title="Video Help">Video Help</a>
                    <a href="https://www.bce.ca/Accessibility_services?brand=CTVNEWS" title="Accessibility">Accessibility</a>
                    <a href="https://ctvnews.ca/shopping.html" title="https://ctvnews.ca/shopping.html">Shopping Trends</a>
                </li>
                <li class="bm-footer__wrapper__subscribeButton">
                    <hr class="divider"/>
                    <div class="newsletter">
                        Stay up to date on the latest, breaking news
                    </div>
                    <div class="button">
                        <a class="cmp-button" href="https://www.ctvnews.ca/newsletters" title="Subscribe to newsletter">
                            Subscribe to newsletter
                        </a>
                    </div>
                </li>
            </ul>
            <ul class="bm-footer__wrapper__secColumn" role="navigation" aria-label="CTV News Programs">
                <h2 class="title">CTV News Programs</h2>
                <li><a href="https://www.ctvnews.ca/ctv-national-news" title="CTV National News">CTV National News</a></li>
                <li><a href="https://www.ctvnews.ca/power-play" title="Power Play">Power Play</a></li>
                <li><a href="https://www.ctvnews.ca/w5/" title="W5">W5</a></li>
                <li><a href="https://www.ctvnews.ca/qp/" title="CTV Question Period">CTV Question Period</a></li>
                <li><a href="https://www.ctvnews.ca/ctv-news-channel" title=" CTV News Channel"> CTV News Channel</a></li>
            </ul>
        <ul class="bm-footer__wrapper__thirdColumn" role="navigation" aria-label="Local News">
            <h2 class="title">Local News</h2>
            <li><a href="https://atlantic.ctvnews.ca/" title="Atlantic">Atlantic</a></li>
            <li><a href="https://barrie.ctvnews.ca/" title="Barrie">Barrie</a></li>
            <li><a href="https://calgary.ctvnews.ca/" title="Calgary">Calgary</a></li>
            <li><a href="https://edmonton.ctvnews.ca/" title="Edmonton">Edmonton</a></li>
            <li><a href="https://kitchener.ctvnews.ca/guelph" title="Guelph">Guelph</a></li>
            <li><a href="https://kitchener.ctvnews.ca/" title="Kitchener">Kitchener</a></li>
            <li><a href="https://calgary.ctvnews.ca/lethbridge" title="Lethbridge">Lethbridge</a></li>
            <li><a href="https://london.ctvnews.ca/" title="London">London</a></li>
            <li><a href="https://montreal.ctvnews.ca/" title="Montreal">Montreal</a></li>
            <li><a href="https://northernontario.ctvnews.ca/" title="Northern Ontario">Northern Ontario</a></li>
            <li><a href="https://ottawa.ctvnews.ca/" title="Ottawa">Ottawa</a></li>
            <li><a href="https://saskatoon.ctvnews.ca/prince-albert" title="Prince Albert">Prince Albert</a></li>
            <li><a href="https://edmonton.ctvnews.ca/red-deer" title="Red Deer">Red Deer</a></li>
            <li><a href="https://regina.ctvnews.ca/" title="Regina">Regina</a></li>
            <li><a href="https://saskatoon.ctvnews.ca/" title="Saskatoon">Saskatoon</a></li>
            <li><a href="https://toronto.ctvnews.ca/" title="Toronto">Toronto</a></li>
            <li><a href="https://bc.ctvnews.ca/" title="Vancouver">Vancouver</a></li>
            <li><a href="https://vancouverisland.ctvnews.ca/" title="Vancouver Island">Vancouver Island</a></li>
            <li><a href="https://windsor.ctvnews.ca/" title="Windsor">Windsor</a></li>
            <li><a href="https://winnipeg.ctvnews.ca/" title="Winnipeg">Winnipeg</a></li>
            <li><a href="https://regina.ctvnews.ca/yorkton" title="Yorkton">Yorkton</a></li>
        </ul>
    </div>
    <div class="bm-footer__copyright">
        <p class="c-quickArticle__footer__copyright">©&nbsp;2024 <a href="https://www.bellmedia.ca/" class="c-quickArticle__footer__logo__link" target="_self" title="Bell Media">
<img class="c-quickArticle__footer_logo" data-src="/content/dam/common/logos/bellmedia/BellMedia.svg" alt="Bell Media logo"/>
</a> All rights reserved. Use of this Website assumes acceptance of <a href="https://www.bellmedia.ca/bell-media-website-terms-conditions/" title="Terms &amp; Conditions">Terms &amp; Conditions</a> and <a href="https://support.bell.ca/Billing-and-Accounts/Security_and_privacy/How_does_Bell_respect_my_privacy" title="Privacy Policy">Privacy Policy</a></p>
    </div>

    <script>
        var _comscore = _comscore || [];
        _comscore.push({ c1: "2", c2: "3005664" });

        (function() {
            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
            s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            el.parentNode.insertBefore(s, el);
        })();
    </script>
</footer>
</div>
<div class="htmlcomponent aem-GridColumn aem-GridColumn--default--12">

<div class="c-htmlComponent">
    <html-component embed-id="SN-2422-Update-News-Webviews-share-buttons
SN-2394 Don&#39;t miss videos styling broken for mobile breakpoint
" html-input="&lt;style&gt;
.c-flyout__link-facebook, .c-flyout__count,.c-flyout__bar {display:none!important;}
.c-flyout__ul {display: inline-flex!important;}
.c-flyout__img-twitter {width: 20px; height: 20px;}
.c-flyout .c-flyout__link-twitter a .c-flyout__img-twitter {padding-top: 4px;}
.c-flyout .c-flyout__link-twitter a img {height:20px; width:20px;}


.bio-link-follow .twitter {display: inline-block;width:20px;height:20px;top:2px;position: relative;}
.c-flyout .c-flyout__link-twitter a img {width:20px; height:20px;}
/* SN-2394  Start */
@media (max-width: 767px){ .c-list-videos-grid .c-list__item__title { float: none; } }
/* SN-2394  End */

.c-list-image-left .c-list__image img {
    width: 100%;
}

/*start: Patch Nov 30 2023*/
@media (max-width: 768px){
   .c-video-player-vod .c-video-player-vod-rotator .c-video-player-vod-rotator__rotatorlineup .c-jasper-video-lineup::before {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    width: 100vw;
    left: initial;
}
.c-video-player-vod .c-video-player-vod-rotator .c-video-player-vod-rotator__rotatorlineup .c-jasper-video-lineup {
    width: 100%;
    margin-left: 0;
}
}
@media (max-width: 576px){
    .c-video-player-vod__wrapper .c-jasperPlayerContainer .c-jasperPlayer div[class*=jasper-player-root__float--]:first-child {
        top: 1% !important;
        left: 2% !important;
    }
  
}
/*end: Patch Nov 30 2023*/
&lt;/style&gt;

&lt;script&gt;
/*start: SN-3064*/
document.addEventListener(&quot;vue-loaded&quot;, function () {
	if(window.location.host  === 'www.cftktv.com' || window.location.host  === 'www.cjdctv.com'){
    		document.querySelectorAll('a[href*=&quot;/video/c&quot;]').forEach((link) =&gt; {
       			 link.href =  link.href.split('/c')[0] + '#clipId=' + link.href.split('/c')[1].split('-')[0]
    		}) 	}
});
/*end: SN-3064*/
&lt;/script&gt;"></html-component>
</div>

    

</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
    <div class="c-experiencefragment c-experiencefragment--bce-modal"><!-- SDI include (path: /content/experience-fragments/ctv_news/bce-modal/master/_jcr_content.content.nocache.html/bmdaem-domains/news/components/content/commons/experiencefragment, resourceType: bmdaem-domains/news/components/structure/xfpage) -->


    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="dialogmodal aem-GridColumn aem-GridColumn--default--12">
    
    
<link rel="stylesheet" href="/etc.clientlibs/bmdaem/news-sports-commons/components/content/dialogmodal/clientlibs/editor.min.2faa66bc284530da88dc18506ae83987.css" type="text/css">



    
        <dialog-modal form-anchor="Accessibility" form-class="bce" list-items="[
  {
    &#34;type&#34;: &#34;image&#34;,
    &#34;highlight&#34;: &#34;false&#34;,
    &#34;imagePath&#34;: &#34;/content/dam/common/logos/bce/blue.png&#34;,
    &#34;imageAltText&#34;: &#34;BCE Logo&#34;
  },
  {
    &#34;type&#34;: &#34;text&#34;,
    &#34;highlight&#34;: &#34;false&#34;,
    &#34;value&#34;: &#34;\u003cp\u003eYou are now being redirected to the BCE.ca website (Bell Canada Enterprises), where you can view our Accessibility plan, and submit your feedback using our Accessibility webform.\u003c/p\u003e\r\n&#34;
  },
  {
    &#34;type&#34;: &#34;button&#34;,
    &#34;highlight&#34;: &#34;false&#34;,
    &#34;buttonLabel&#34;: &#34;Go Now&#34;,
    &#34;buttonStyle&#34;: &#34;style-blue-primary&#34;,
    &#34;buttonLink&#34;: &#34;https://www.bce.ca/Accessibility_services?brand\u003dCTVNEWS&#34;,
    &#34;buttonGroup&#34;: &#34;true&#34;
  },
  {
    &#34;type&#34;: &#34;button&#34;,
    &#34;highlight&#34;: &#34;false&#34;,
    &#34;buttonLabel&#34;: &#34;Cancel&#34;,
    &#34;buttonStyle&#34;: &#34;style-blue-secondary&#34;,
    &#34;buttonLink&#34;: &#34;close&#34;,
    &#34;buttonGroup&#34;: &#34;true&#34;
  }
]"></dialog-modal>
    

</div>

    
</div>

</div></div>
    <div id="experiencefragment-40234107" class="cmp-experiencefragment">
      
    

    </div>
  </div>

    
</div>

</div></div>
    <div id="experiencefragment-582575140" class="cmp-experiencefragment">
      
    

    </div>
  </div>

    
</div>
</div>

    
</div>
</div>


    
    
    
<!-- customfooterlibs.html start -->


<!-- COMPONENTS USED BY BRAND -->

    
<script src="/etc.clientlibs/bmdaem-domains/news/clientlibs/clientlib-brands/ctvnews/dependencies.min.d41d8cd98f00b204e9800998ecf8427e.js"></script>




<!-- DOMAIN -->

    
<script src="/etc.clientlibs/bmdaem-domains/news/clientlibs/clientlib-dependencies.min.d41d8cd98f00b204e9800998ecf8427e.js"></script>
<script src="/etc.clientlibs/bmdaem/commons/clientlibs/clientlib-site.min.10b12665507a56b57a006d8cc508d8fd.js"></script>
<script src="/etc.clientlibs/bmdaem-domains/news/clientlibs/clientlib-news-site.min.e132ac96caabf681281dca2fcd5d9300.js"></script>




<!-- BRAND -->

    
<script src="/etc.clientlibs/bmdaem-domains/news/clientlibs/clientlib-brands/ctvnews/site.min.7c8a6bc0ea2c91a876641a6550be047b.js"></script>




<!-- True Anthem -->


    <script type="text/javascript" src="https://tru.am/scripts/custom/ctvnews.js"></script>


    <!-- Chartbeat -->
    
        <script type='application/javascript'>
            (function() {
                /** CONFIGURATION START **/
                var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
                _sf_async_config.sections = "business";
                _sf_async_config.authors = "The Canadian Press";
                /** CONFIGURATION END **/
                function loadChartbeat() {
                    var e = document.createElement('script');
                    var n = document.getElementsByTagName('script')[0];
                    e.type = 'application/javascript';
                    e.async = true;
                    e.src = '//static.chartbeat.com/js/chartbeat_video.js';
                    n.parentNode.insertBefore(e, n);
                }
                loadChartbeat();
            })();
        </script>
    

<script type="text/javascript">
    const config = {
        rootMargin: "25px",
        threshold: 1.0
    };

    let preloadImage = (element) => {
        if(element.dataset && element.dataset.src) {
            element.src = element.dataset.src;
        }
        if(element.dataset && element.dataset.srcset) {
            element.srcset = element.dataset.srcset
        }
    }
    let onIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        });
    }

    const images = document.querySelectorAll('source, img');
    if (!('IntersectionObserver' in window)) {
        Array.from(images).forEach(image => preloadImage(image));
    }
    else {
        observer = new IntersectionObserver(onIntersection, config);
        images.forEach(image => {
            observer.observe(image);
        });
    }

</script>
<script async="" src="//cdn.viafoura.net/entry/index.js" type="text/javascript"></script>

    
    
        <script type="text/javascript">
            window.digitalData = {
                page: {
                    siteName: "ctvnews",
                    productName: "ctvnews",
                    contentType: "story",
                    siteSection: "national",
                    subsection1: "business",
                    subsection2: "story",
                    subsection3: "",
                    platform: "web"
                },
                article: {
                    title: "Home staging companies forced to adapt as sellers pull back in slow housing market",
                    author: "The Canadian Press",
                    id: "1.6745526",
                    source: ""
                }
            }
            document.dispatchEvent(new CustomEvent('digitalDataLoaded'));
            _satellite.pageBottom();
        </script>
    




<!-- customfooterlibs.html end -->

    

    


    



</body>
</html>
