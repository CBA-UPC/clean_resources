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
f.ensureModuleRegistered("SignalsFBEvents.plugins.jsonld_microdata",function(){
return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsPlugin");e.exports=new a(function(a,b){})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.jsonld_microdata");f.registerPlugin&&f.registerPlugin("fbevents.plugins.jsonld_microdata",e.exports);
f.ensureModuleRegistered("fbevents.plugins.jsonld_microdata",function(){
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
f.ensureModuleRegistered("SignalsFBEvents.plugins.microdata",function(){
return function(g,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},c=f.getFbeventsModules("SignalsFBEventsLogging"),d=f.getFbeventsModules("SignalsFBEventsPlugin"),h=f.getFbeventsModules("SignalsFBEventsQE"),i=f.getFbeventsModules("SignalsFBEventsShared"),j=i.signalsGetValueFromHTMLElement,k=i.unicodeSafeTruncate;i=f.getFbeventsModules("SignalsFBEventsUtils");var l=i.each,m=i.filter,n=i.some,o=i.keys,p=i.FBSet;i=f.getFbeventsModules("SignalsFBEventsEvents");var q=i.fired,r=i.getCustomParameters;i=f.getFbeventsModules("SignalsFBEventsLogging");var s=i.logError,t=f.getFbeventsModules("sha256_with_dependencies_new"),u=f.getFbeventsModules("SignalsFBEventsConfigStore"),v=null,w=null,x=null,y=500,z=12e4,A=["og:image"],B=[{property:"image",type:"Product"}];function C(a){return m(A,function(b){return b===a})[0]!=null}function D(a,b){return m(B,function(c){return(a==="https://schema.org/"+c.type||a==="http://schema.org/"+c.type)&&c.property===b})[0]!=null}function aa(){var a=b.querySelectorAll("[itemscope]"),c=[],d=new p();for(var e=0;e<a.length;e++)d.add(a[e]);e=null;var f=null;for(var g=a.length-1;g>=0;g--){var h=a[g],i=h.getAttribute("itemtype");if(typeof i!=="string"||i==="")continue;var k={},l=h.querySelectorAll("[itemprop]");for(var m=0;m<l.length;m++){var n=l[m];if(!d.has(n)){d.add(n);var o=n.getAttribute("itemprop");if(typeof o==="string"&&o!==""){n=j(n);if(n!=null){var q=k[o];q!=null&&D(i,o)?Array.isArray(q)?k[o].push(n):k[o]=[q,n]:(w==null&&(o==="productID"?e=n:o==="sku"&&(f=n)),x==null&&o==="url"&&(x=n),k[o]=n)}}}}c.unshift({schema:{dimensions:{h:h.clientHeight,w:h.clientWidth},properties:k,subscopes:[],type:i},scope:h})}e!=null?w=e:f!=null&&(w=f);q=[];o=[];for(n=0;n<c.length;n++){m=c[n];l=m.scope;k=m.schema;for(i=o.length-1;i>=0;i--)if(o[i].scope.contains(l)){o[i].schema.subscopes.push(k);break}else o.pop();o.length===0&&q.push(k);o.push({schema:k,scope:l})}return q}function E(){var a=[],d=b.querySelectorAll('script[type="application/ld+json"]'),e=0;for(var f=0;f<d.length;f++){var g=d[f];g=g.innerText;if(g!=null&&g!=="")try{e+=g.length;if(e>z)return[];var h=JSON.parse(g.replace(/[\n\r\t]+/g," "));w==null&&(h["@id"]!=null?w=h["@id"]:h.productID!=null?w=h.productID:h.sku!=null&&(w=h.sku));x==null&&h.url!=null&&(x=h.url);x==null&&h.offers!=null&&Array.isArray(h.offers)&&h.offers.length>0&&l(h.offers,function(a){x==null&&a.url!=null&&(x=a.url)});a.push(h)}catch(a){c.logUserError({jsonLd:g,type:"INVALID_JSON_LD"})}}return a}function F(){var a=new p(["og","product","music","video","article","book","profile","website","twitter"]),c={},d=null,e=null,f=b.querySelectorAll("meta[property]");for(var g=0;g<f.length;g++){var h=f[g],i=h.getAttribute("property");h=h.getAttribute("content");if(typeof i==="string"&&i.indexOf(":")!==-1&&typeof h==="string"&&a.has(i.split(":")[0])){h=k(h,y);var j=c[i];j!=null&&C(i)?Array.isArray(j)?c[i].push(h):c[i]=[j,h]:(w==null&&(i==="product:retailer_item_id"&&(d=h),i==="product:sku"&&(e=h)),x==null&&i==="og:url"&&(x=h),c[i]=h)}}d!=null?w=d:e!=null&&(w=e);return c||void 0}var G={description:!0,keywords:!0};function H(){var a=b.querySelector("title");a={title:k(a&&a.innerText,y)};var c=b.querySelectorAll("meta[name]");for(var d=0;d<c.length;d++){var e=c[d],f=e.getAttribute("name");e=e.getAttribute("content");typeof f==="string"&&typeof e==="string"&&(G[f]&&(a["meta:"+f]=k(e,y)))}return a}function I(b){var c=b.id,d=b.includeJsonLd;d=d===void 0?!1:d;var e=b.instance;b=b.onlyHash;b=b===void 0?!1:b;var f={};try{f=F()}catch(a){var i="[Microdata OpenGraph]";a!=null&&a.message!=null&&(i+=": "+a.message);s(new Error(i))}i=[];try{i=d?E():[]}catch(a){var j="[Microdata JSON LD]";a!=null&&a.message!=null&&(j+=": "+a.message);s(new Error(j))}j={title:""};try{j=H()}catch(a){var k="[Microdata Metadata]";a!=null&&a.message!=null&&(k+=": "+a.message);s(new Error(k))}k=[];try{k=aa()}catch(a){var l="[Microdata Schema]";a!=null&&a.message!=null&&(l+=": "+a.message);s(new Error(l))}l=h.get("logDataLayer");l=l&&l.isInExperimentGroup;l=l===!0?g.dataLayer||[]:[];if(k.length>0||i.length>0||o(f).length>0||o(j).length>1||j.title!==""||l.length&&l.length>0){l={DataLayer:l,Meta:j,OpenGraph:f,"Schema.org":k};d&&(l=a({},l,{"JSON-LD":i}));v=t(JSON.stringify(l));v!=null&&(v=v.substring(0,24));if(b)return v;e.trackSingleSystem("automatic",c,"Microdata",l);return v}}e.exports=new d(function(a,b){a=g.performance!=null&&g.performance.timing!=null&&g.performance.timing.loadEventEnd!=null?g.performance.timing.loadEventEnd:Date.now();a!==0?a:Date.now();var c={};r.listen(function(a,c){if(b.disableAutoConfig)return{};if(c!=="PageView"&&c!=="Microdata")return{};c=n(b.getOptedInPixels("Microdata"),function(b){return b.id===a.id});if(!c)return{};c=u.get(a.id,"microdata");if(c!=null&&c.enablePageHash===!0){if(v==null){c=n(b.getOptedInPixels("MicrodataJsonLd"),function(b){return b.id===a.id});v=I({id:a.id,includeJsonLd:c,instance:b,onlyHash:!0})}if(v!=null)return{hmd:v,pid:w,pl:x}}return{}});q.listen(function(a,d){if(b.disableAutoConfig)return;var e=d.get("id");if(e==null||typeof e!=="string"||Object.prototype.hasOwnProperty.call(c,e))return;a=n(b.getOptedInPixels("Microdata"),function(a){return a.id===e});if(a){d=n(b.getOptedInPixels("MicrodataJsonLd"),function(a){return a.id===e});c[e]=!0;a=u.get(e,"microdata");if(a!=null&&a.disableMicrodataEvent===!0)return;try{I({id:e,includeJsonLd:d,instance:b,onlyHash:!1})}catch(b){a="[Microdata]";b!=null&&b.message!=null&&(a+=": "+b.message);s(new Error(a))}}})})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.microdata");f.registerPlugin&&f.registerPlugin("fbevents.plugins.microdata",e.exports);
f.ensureModuleRegistered("fbevents.plugins.microdata",function(){
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
fbq.registerPlugin("702433553219748", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { config.set("702433553219748", "inferredEvents", {"buttonSelector":null,"disableRestrictedData":false});
fbq.loadPlugin("inferredevents");
fbq.loadPlugin("identity");
instance.optIn("702433553219748", "InferredEvents", true);
fbq.loadPlugin("jsonld_microdata");
instance.optIn("702433553219748", "MicrodataJsonLd", true);
fbq.loadPlugin("iwlbootstrapper");
instance.optIn("702433553219748", "IWLBootstrapper", true);
fbq.loadPlugin("cookie");
instance.optIn("702433553219748", "FirstPartyCookies", true);
fbq.loadPlugin("inferredevents");
instance.optIn("702433553219748", "InferredEvents", true);
config.set("702433553219748", "microdata", {"waitTimeMs":1,"disableMicrodataEvent":false,"enablePageHash":true});
fbq.loadPlugin("microdata");
instance.optIn("702433553219748", "Microdata", true);
fbq.loadPlugin("automaticmatchingforpartnerintegrations");
instance.optIn("702433553219748", "AutomaticMatchingForPartnerIntegrations", true);
config.set(null, "batching", {"batchWaitTimeMs":501,"maxBatchSize":10});
config.set(null, "microdata", {"waitTimeMs":500});
config.set("702433553219748", "prohibitedSources", {"prohibitedSources":[{"domain":"87cf85aebb3aebff10d79f8a02fdbc8e803e500210e1f821e757420dc00838f1"}]});
fbq.loadPlugin("prohibitedsources");
instance.optIn("702433553219748", "ProhibitedSources", true);
config.set("702433553219748", "unwantedData", {"blacklisted_keys":{"CompleteRegistration":{"cd":[],"url":["mi_first_name"]},"PageView":{"cd":[],"url":["firstName"]},"ViewContent":{"cd":[],"url":["lng","mi_first_name"]}},"sensitive_keys":{}});
fbq.loadPlugin("unwanteddata");
instance.optIn("702433553219748", "UnwantedData", true);
config.set("702433553219748", "IABPCMAEBridge", {"enableAutoEventId":false});
fbq.loadPlugin("iabpcmaebridge");
instance.optIn("702433553219748", "IABPCMAEBridge", true);
config.set("702433553219748", "browserProperties", {"delayInMs":200,"enableEventSuppression":true,"enableBackupTimeout":true});
fbq.loadPlugin("browserproperties");
instance.optIn("702433553219748", "BrowserProperties", true);
config.set("702433553219748", "clientHint", {"delayInMs":200,"disableBackupTimeout":false});
fbq.loadPlugin("clienthint");
instance.optIn("702433553219748", "ClientHint", true);
fbq.loadPlugin("privacysandbox");
instance.optIn("702433553219748", "PrivacySandbox", true);
fbq.loadPlugin("lastexternalreferrer");
instance.optIn("702433553219748", "LastExternalReferrer", true);
fbq.loadPlugin("cookiedeprecationlabel");
instance.optIn("702433553219748", "CookieDeprecationLabel", true);instance.configLoaded("702433553219748"); }});.4-1-2-2.6-1.9c-3.7,0.1-7.3,0.1-10.9,0c-1.5-0.1-2.1,0.5-2.6,2c-2.6,7.4-5.2,14.8-7.9,22.3
                        c-0.2,0.4-0.4,0.9-0.7,1.4h-24.4c0.9-2.7,1.7-5.2,2.7-7.8c6.5-18.5,13-37,19.5-55.5c1.7-5,3.6-10,5.3-15.1c0.4-1.1,0.9-1.5,2-1.5
                        c18.6,0.1,37.2,0,55.7,0.1c2.3,0.1,4.7,0.4,6.9,1.2c6,2,8.5,6.5,7.2,13.7c-1.5,8.6-4.6,17-8.6,25.2c-3.4,7-9.2,10.8-16.6,11.8
                        C674.7,68.1,674.1,68.2,673.3,68.4z M647.3,34.3L641,52.4c0.3,0.2,0.4,0.3,0.5,0.3c7.8,0,15.6,0.1,23.4-0.1c2.3,0,4.3-1.2,5.2-3.5
                        c1.3-3.3,2.6-6.6,3.5-9.9s0.1-4.8-3.2-4.9C662.9,34.2,655.2,34.3,647.3,34.3z"/>
                    <path fill="#FFF" d="M453.8,73.1c-2.7,7.7-5.4,15.2-8.1,22.8h-24.6c2.6-7.4,5.2-14.7,7.8-22.1c6.6-18.7,13.1-37.3,19.7-56
                        c0.5-1.4,1-1.8,2.5-1.8c17.9,0.1,35.9,0,53.8,0.1c2.4,0,4.7,0.3,7.1,0.8c6.7,1.4,10.2,6.6,8.8,13.9c-0.8,4.4-2.3,8.7-3.8,13
                        c-2,5.6-3.9,11.2-6.4,16.7c-3.4,7.5-9.6,11.7-17.4,12.1c-9.1,0.5-18,0.3-27,0.4C461.9,73.2,457.9,73.1,453.8,73.1z M460.1,54.8
                        c0.3,0.1,0.7,0.2,1.1,0.2c7.4,0,14.8,0,22.3,0c2.5,0,4.7-0.9,5.8-3.4c1.6-4.1,3.1-8.2,4.3-12.4c0.7-2.4-0.3-3.6-2.7-3.9
                        c-1-0.1-2.1-0.2-3.1-0.2c-5.2,0-10.5,0-15.7,0c-4.9,0-4.9,0-6.6,4.9c-0.1,0.2-0.2,0.4-0.2,0.6C463.4,45.4,461.8,50.1,460.1,54.8
                        L460.1,54.8z"/>
                    <path fill="#FFF" d="M99,114.1c-8-0.1-16-0.1-22.2-0.1H58.2H10.4c0,0,2.4-7,3.1-9c1-2.8,2-5.6,3-8.5c2.5-6.9,5-14.1,7.6-21.2
                        c3.3-8.8,9.7-14.2,18.9-15.9c5.8-1.1,11.7-1.9,17.5-2.6h0.1c1.7-0.2,3.4-0.4,5.1-0.7c6-0.8,12-1.6,17.8-2.3l6.8-0.9
                        c3-0.4,5-2,6.1-4.9c0.2-0.5,0.4-1.1,0.7-1.7c0.5-1.3,1-2.6,1.4-3.8c0.2-0.6,0.3-1.4,0.3-1.9s-0.1-1.1-1-1.7
                        c-0.7-0.5-1.2-0.6-1.8-0.7c-1-0.2-1.8-0.2-2.9-0.2c-3.4,0-16.5,0-19.5,0c-2.8,0-4.2,0.3-5.2,1c-1,0.8-1.8,2-2.8,4.7
                        c-0.9,2.5-1.4,3.3-2.1,3.9c-0.8,0.5-1.7,0.6-4.1,0.6H35.5l0.1-0.3c0.2-0.7,0.4-1.4,0.7-2c0.5-1.5,0.9-2.8,1.4-4.2
                        c0.4-1.1,0.9-2.3,1.3-3.5c1.3-3.4,2.6-6.9,4.3-10.2c3.4-6.6,9.1-10.5,16.9-11.6c2.9-0.4,5.9-0.6,8.8-0.7c8.4-0.1,15.4-0.1,22.4-0.1
                        c7.6,0,14.5,0.1,20.8,0.1c3.3,0,6.7,0.4,9.9,1.3c6,1.6,9,6,8.6,12.4c-0.2,2.9-0.8,6.1-1.9,9.9c-1.4,4.7-3.1,9.5-4.8,14.1l-0.4,1
                        c-4.1,11.5-10.5,16.9-22.1,18.8c-7.1,1.1-14.2,2.1-21.2,2.9c-2.6,0.3-5.6,0.7-8.4,1.1c-2.1,0.3-4.3,0.5-6.3,0.8l-0.2,0.1
                        c-2.7,0.3-5.7,0.7-8.6,1.1c-4,0.5-5.3,1.7-6.9,5.7c-0.2,0.5-0.4,0.9-0.5,1.5L48.2,90h61.4l-0.7,2c-0.3,1-0.7,1.9-1,2.8
                        c-0.5,1.5-1.1,3.1-1.6,4.6l-0.1,0.2c-1.5,4.1-3,8.3-4.4,12.4C101.4,113.6,100.7,114.1,99,114.1L99,114.1z"/>
                    <path fill="#5FBF24" d="M200.1,134.9L297.3,41H263l-5,12.8h-27.9l13.8-37.9h104.9l-7.6,21.3l-103,97.7H200.1z"/>
                    <path fill="#FFF" d="M735.8,96h-24.6c6.8-19.3,13.5-38.5,20.4-58h-25.7c0.9-2.6,5.7-15.9,7.1-20.3c0.4-1.2,0.9-1.6,2.2-1.6
                        c24.3,0.1,48.6,0.1,72.9,0.1c0.4,0,0.9,0.1,1.5,0.2c-0.9,2.6-5.6,15.8-7,20c-0.4,1.4-1.1,1.6-2.3,1.6c-7.4-0.1-14.7,0-22.1-0.1
                        c-1.4,0-2.1,0.4-2.6,1.9C749.9,55.8,736.7,93.2,735.8,96z"/>
                </svg>
            </a>
        
</div>

        <div class="user-nav" data-react-container="user-nav"></div>
        



<div class="nav-bar__menu menu" role="navigation">
    <a href="#" data-js="menu__hamburger" aria-label="Dropdown Menu"><b class="icon-hamburger2 menu__hamburger"> </b></a>
    <div class="nav-bar__container nav-bar__container--hidden">
        <ul class="menu__list network">
            
                        <li class="menu__list-item hoverable">
                            <a data-js="slidedown" href="https://247sports.com/college/football/recruiting/" title="National Signing Day -- College Football Recruiting">
                                    <span class="icon-football menu__icon"></span>
                                
                                <span class="menu__name">FB Rec</span>
                                <b class="icon-caret-down"></b>
                            </a>
                            <div class="nav-flyout shift-left">
                                
                                <ul class="nav-flyout__list">
                                    
                                        <li><a href="https://247sports.com/college/football/recruiting/" title="College Football Recruiting">FB Recruiting Home</a></li>
                                    
                                    <li><a href="https://247sports.com/Page/national-signing-day-college-football-recruiting-100134/Headlines/" title="Football News Feed">News Feed</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/CompositeTeamRankings/">Team Rankings</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/Commits/">Commitments</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/Decommits/">Decommitments</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/ScheduledCommits/">Scheduled Commits</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/RecruitRankings/?InstitutionGroup=HighSchool" title="Top247Sports">Player Rankings</a></li>
                                </ul>
                                <ul class="nav-flyout__list">
                                    <li><a href="https://247sports.com/Season/2024-Football/Recruits/" title="Player Database">Player Search</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Football/CurrentTargetPredictions/" title=" Crystal Ball">Crystal Ball</a></li>
                                    
                                        <li><a href="https://247sports.com/Season/2024-Football/CompositeCoachRankings/" title="Recruiter Rankings">Recruiter Rankings</a></li>
                                    
                                    <li><a href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_calculator" title="Football Class Calculator">Class Calculator</a></li>
                                    
                                        <li><a href="https://247sports.com/Sport/Football/AllTimeRecruitRankings/" title="All Time Recruit Rankings">All Time Top Recruits</a></li>
                                    
                                    <li><a href="https://247sports.com/season/2024-football/transferportal/" title="Transfer Portal">Transfer Portal</a></li>

                                </ul>
                            </div>
                        </li>
                    
                        <li class="menu__list-item hoverable">
                            <a data-js="slidedown" href="https://247sports.com/college/basketball/recruiting/">
                                    <span class="icon-basketball menu__icon"></span>
                                
                                <span class="menu__name">BK Rec</span>
                                <b class="icon-caret-down"></b>
                            </a>
                            <div class="nav-flyout shift-left">
                                
                                <ul class="nav-flyout__list">
                                    
                                        <li><a href="https://247sports.com/college/basketball/recruiting/" title="College Basketball Recruiting">BK Recruiting Home</a></li>
                                    
                                    <li><a href="https://247sports.com/Page/247sports-bk-rec-106730/Headlines/" title="Basketball News Feed">News Feed</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/CompositeTeamRankings/">Team Rankings</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/Commits/">Commitments</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/Decommits/">Decommitments</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/ScheduledCommits/">Scheduled Commits</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/RecruitRankings/?InstitutionGroup=HighSchool" title="Top247Sports">Player Rankings</a></li>
                                </ul>
                                <ul class="nav-flyout__list">
                                    <li><a href="https://247sports.com/Season/2024-Basketball/Recruits/" title="Player Database">Player Search</a></li>
                                    <li><a href="https://247sports.com/Season/2024-Basketball/CurrentTargetPredictions/" title=" Crystal Ball">Crystal Ball</a></li>
                                    
                                    <li><a href="https://247sports.com/Season/2024-Basketball/?View=Interests#tabs_calculator" title="Basketball Class Calculator">Class Calculator</a></li>
                                    
                                    <li><a href="https://247sports.com/season/2024-basketball/transferportal/" title="Transfer Portal">Transfer Portal</a></li>

                                </ul>
                            </div>
                        </li>
                    

                <li class="menu__list-item hoverable">
                    <a data-js="slidedown" href="https://247sports.com/college/transfer-portal/" title="Transfer Portal">
                        <span class="icon-swap menu__icon"></span>
                        <span class="menu__name">Transfer Portal</span>
                        <b class="icon-caret-down"></b>
                    </a>
                    <div class="nav-flyout">
                        <ul class="nav-flyout__list" data-slot="MenuComponent">
                            <li><a href="https://247sports.com/college/transfer-portal/" title="Transfer Portal">Transfer Portal Home</a></li>
                            <li><a href="https://247sports.com/season/2024-football/transferportaltop/">Top FB Transfers</a></li>
                            <li><a href="https://247sports.com/season/2024-football/transferportal/">Latest FB Transfers</a></li>
                            <li><a href="https://247sports.com/season/2024-football/transferportalpositionranking/">By Position FB Transfers</a></li>
                            <li><a href="https://247sports.com/Season/2024-Football/TransferTeamRankings/">Team FB Transfer Rankings</a></li>
                        </ul>
                        <ul class="nav-flyout__list" data-slot="MenuComponent">
                            <li><a href="//247sports.com/college/transfer-portal/Institution/Transfer-Portal-28797/Feeds/">Transfer Portal News</a></li>
                            <li><a href="https://247sports.com/season/2024-basketball/transferportaltop/">Top BK Transfers</a></li>
                            <li><a href="https://247sports.com/season/2024-basketball/transferportal/">Latest BK Transfers</a></li>
                            <li><a href="https://247sports.com/season/2024-basketball/transferportalpositionranking/">By Position BK Transfers</a></li>
                            <li><a href="https://247sports.com/Season/2024-Basketball/TransferTeamRankings/">Team BK Transfer Rankings</a></li>
                        </ul>
                    </div>
                </li>

                <li class="menu__list-item hoverable">
                    <a href="#" data-js="slidedown">
                        <span class="icon-football menu__icon"></span>
                        <span class="menu__name">NCAA FB</span>
                        <b class="icon-caret-down"></b>
                    </a>
                    
                    <div class="nav-flyout">
                        <ul class="nav-flyout__list">
                            <li><a href="https://247sports.com/League/NCAA-FB/Teams/" title="NCAAF Teams">Teams</a></li>
                            <li><a href="https://247sports.com/Page/college-sports-news-and-recruiting-100021/Feeds/" title="College Football News Feed">News Feed</a></li>
                            <li><a href="https://www.cbssports.com/college-football/scoreboard/" target="_blank">Scores</a></li>
                            <li><a href="https://247sports.com/League/NCAA-FB/Schedule/">Schedules</a></li>
                            <li><a href="https://247sports.com/Season/2023-Football/CollegeTeamTalentComposite/">College Team Talent</a></li>
                            <li><a href="https://www.sportsline.com/college-football/picks/" target="_blank">Expert Picks</a></li>
                            <li><a href="https://247sports.com/League/NFL/DraftPicks/" title="2024 NFL Draft">2024 NFL Draft</a></li>
                        </ul>
                        <ul class="nav-flyout__list">
                            <li><a href="https://247sports.com/League/NCAA-FB/AP_Rankings/">Polls</a></li>
                            <li><a href="https://www.cbssports.com/college-football/stats/player/" target="_blank">Player Leaders</a></li>
                            <li><a href="https://www.cbssports.com/college-football/stats/team/" target="_blank">Team Leaders</a></li>
                            <li><a href="https://247sports.com/Video/?Type=cbs&amp;Sport=Football" title=" CBS Videos">Videos</a></li>
                            <li>
                                <a href="https://prf.hn/click/camref:1101liUFf/ar:247Sports/destination:https://www.stubhub.com/ncaa-football-tickets/grouping/122/" class="stubhub-tracker" data-stubhub-element="247Sports Menu Navigation" target="_blank" rel="nofollow">StubHub</a>
                            </li>
                            <li><a href="https://www.sportsline.com/college-football/odds/" target="_blank">Odds</a></li>
                        </ul>
                    </div>
                </li>
                <li class="menu__list-item hoverable">
                    <a href="#" data-js="slidedown">
                        <span class="icon-basketball menu__icon"></span>
                        <span class="menu__name">NCAA BK</span>
                        <b class="icon-caret-down"></b>
                    </a>
                    
                    <div class="nav-flyout">
                        <ul class="nav-flyout__list">
                            <li><a href="https://247sports.com/League/NCAA-BK/Teams/" title="NCAAB Teams">Teams</a></li>
                            <li><a href="https://247sports.com/Page/college-sports-news-and-recruiting-100021/Feeds/" title="247Sports News Feed">News Feed</a></li>
                            <li><a href="https://www.cbssports.com/college-basketball/scoreboard/" target="_blank">Scores</a></li>
                            <li><a href="https://247sports.com/League/NCAA-BK/Schedule/">Schedules</a></li>
                            <li><a href="https://247sports.com/League/NCAA-BK/AP_Rankings/">Polls</a></li>
                        </ul>
                        <ul class="nav-flyout__list">
                            <li><a href="https://www.cbssports.com/college-basketball/stats/player/" target="_blank">Player Leaders</a></li>
                            <li><a href="https://www.cbssports.com/college-basketball/stats/team/" target="_blank">Team Leaders</a></li>
                            <li>
                                <a href="https://prf.hn/click/camref:1101liUFf/ar:247Sports/destination:https://www.stubhub.com/ncaa-basketball-tickets/grouping/333/" class="stubhub-tracker" data-stubhub-element="247Sports Menu Navigation" target="_blank" rel="nofollow">StubHub</a>
                            </li>
                            <li><a href="https://www.cbssports.com/nba/draft/" target="_blank">NBA Draft</a></li>
                            <li><a href="https://www.sportsline.com/college-basketball/odds/" target="_blank">Odds</a></li>
                            <li><a href="https://www.cbssports.com/womens-college-basketball/ncaa-tournament/" target="_blank">NCAA WBK</a></li>
                        </ul>
                    </div>
                </li>

                <li class="menu__list-item hoverable">
                    <a data-js="slidedown" href="https://247sports.com/Site/?View=Community">
                        <span class="icon-list menu__icon"></span>
                        <span class="menu__name">Community</span>
                        <b class="icon-caret-down"></b>
                    </a>
                    <div class="nav-flyout">
                        <ul class="nav-flyout__list">
                            <li>
                                <a href="https://247sports.com/board/college-football-recruiting-message-board-30/" title="247Sports Blue Board">FB/Recruiting Blue Board</a>
                            </li>
                            <li>
                                <a href="https://247sports.com/board/college-basketball-recruiting-message-board-59409/" title="247Sports Green Board">BK/Recruiting Green Board</a>
                            </li>
                            <li>
                                <a href="https://247sports.com/board/247sports-feedback-forums-1196809/" title="247Sports Forums Feedback">Forums Feedback</a>
                            </li>
                        </ul>
                    </div>
                </li>
            
                <li class="menu__list-item hoverable">
                    <a href="#" data-js="slidedown" aria-label="More Options">
                        <span class="menu__icon menu__icon--ellipsis">
                            <span class="icon-circle"></span><span class="icon-circle"></span><span class="icon-circle"></span>
                        </span>
                        <span class="menu__name menu__name--more">More</span>
                    </a>
                    <div class="nav-flyout shift-left">
                        <ul class="nav-flyout__list">
                            
                                <li><a href="//247sports.com/UserSubscription/New/?promo=JOIN" id="vip-membership-link">VIP Membership</a></li>
                                <li><a href="//247sports.com/podcast/">Podcast</a></li>
                                <li><a href="//247sports.com/distribution/signup/">Newsletter</a></li>
                                <li><a href="//247sports.com/my/settings/alerts/">Text Alerts</a></li>
                                <li><a href="//247sports.com/247sportslive/late-kick-with-josh-pate/">Shows</a></li>
                                
                                <li><a href="https://help.247sports.com/s/" title="Help Center">Help Center</a></li>
                            
                        </ul>
                    </div>
                </li>
            
                <li class="menu__list-item tickets menu__list-item--tickets">
                    <a href="https://www.stubhub.com/?gcid=chAFF-_-geoUS-_-genAllTix-_-dt170502-_-cmpHeaderteams-_-part247Sports" target="_blank" class="stubhub-tracker" data-stubhub-element="247Sports Mobile Nav" rel="nofollow">
                        <span class="icon-ticket menu__icon"></span>
                        <span class="menu__name">StubHub</span>
                    </a>
                </li>
            
                <li class="menu__list-item store menu__list-item--store">
                    <a href="https://fanatics.ncw6.net/oeR27b" target="_blank" rel="nofollow" data-js="sportsline-fanshop">
                        <span class="icon-cart menu__icon"></span>
                        <span class="menu__name">Shop</span>
                    </a>
                </li>
            
            <li class="menu__list-item hoverable watch-button">
                <a href="#" data-js="slidedown" aria-label="Watch">
                    <svg height="16" width="16" viewBox="0 0 32 32">
                        <title>Play</title>
                        <path fill='#FFF' d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>
                    </svg>
                    <span class="menu__name menu__name--more watch-span">Watch</span>
                </a>
                <div class="nav-flyout">
                    <ul class="nav-flyout__list">
                        <li><a href="//247sports.com/247sportslive/late-kick-with-josh-pate/">Late Kick With Josh Pate</a></li>
                        <li><a href="//247sports.com/247sportslive/college-football-recruiting-show/">College FB Recruiting Show</a></li>
                        <li><a href="https://www.youtube.com/channel/UCLzocFrP98gfI5W2LD7Ux-w" target="_blank" title="YouTube">YouTube</a></li>
                        <li><a href="https://www.cbssports.com/live/" target="_blank" title="CBSSports HQ">CBSSports HQ</a></li>
                        <li><a href="https://www.paramountplus.com/" target="_blank" title="Paramount+ Essentials">Paramount+ Essentials</a></li>
                    </ul>
                </div>
            </li>

            
            <li data-react="betting-link" class="hidden mobile menu__list-item bet menu__list-item--bet"></li>
        </ul>

        
        <div class="nav-bar--searchform">
            <div data-react-container="mobileSearch" data-recruits="https://247sports.com/Season/2024-Football/Recruits/"></div>
        </div>
    </div>
</div>
<script type="text/javascript">
    document.getElementById("vip-membership-link").onclick = function() {
        if (typeof om !== 'undefined') {
            const brand = tfsMobile ? 'mweb' : 'desktop';
            om.trackAction('navigation interaction', {
                'moduleName': 'global nav',
                'moduleLocation': "vip membership",
                'siteHier': 'sports|' + tfsPageArena + '|' + tfsPageType,
                'siteSection': 'sports|' + tfsPageArena + '|||' + tfsPageType + '|',
                'pageName': location.pathname,
                'moduleAction': 'click',
                'brandPlatformId': '247sports_site_' + brand,
                '_siteId': tfsPageArena + '|' + $tfs.CurrentSite.Key + '|' + $tfs.CurrentSite.Name
            });
        }
    };
</script>

        <div class="nav-bar__search search">
            <div data-react-container="searchLink" data-url="/Site?View=Search" data-recruits="https://247sports.com/Season/2024-Football/Recruits/"></div>
        </div>
</header>

            <section class="clearfix main" id="page-content">
                
    <script>
        if ($tfs.User.Status.toLowerCase().indexOf('pastdue') > -1 && $tfs.User.IsComped !== "True") {
            document.write('<div class="nt_warning">Your account needs attention. Please <a href="' + $tfs.CurrentSite.DefaultUrl + '/my/settings/plans/">update your billing information</a> to ensure continued VIP access.</div>');
        }
    </script>

    

<div class="main-div clearfix">
    


<div id="announcement"></div>
<section class="rankings-page">
    <header class="rankings-page__header">
        <h1 class="rankings-page__heading">
            

2024 Recruit Football Team Rankings

            <span class="last-updated">
                Last updated on 02/02/24 at 1:01 PM CST
                <a class="tltp_click tltp_bm info_icn" title="Team Ranking Explanation">
                    <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                        <path d="M22 11A11 11 0 1 1 11 0a11 11 0 0 1 11 11zM8.86 9.58a1.75 1.75 0 0 1 .84-.23c.22 0 .33.09.33.28a1.56 1.56 0 0 1-.13.58q-2.77 6.85-2.77 8.61a1.05 1.05 0 0 0 .38.86 1.57 1.57 0 0 0 1 .31 4.44 4.44 0 0 0 1.9-.51 23.29 23.29 0 0 0 2.47-1.62l-.72-.54c-1.62 1.17-1.2.85-1.81 1-.09 0-.19 0-.28-.13a.46.46 0 0 1-.13-.33q0-1 2-6a21.43 21.43 0 0 0 1.19-3.47.61.61 0 0 0-.31-.54 1.71 1.71 0 0 0-.91-.2 7.32 7.32 0 0 0-2.59.66A7 7 0 0 0 7.46 9.6l.27.73a9 9 0 0 1 1.13-.75zm3.89-7.45a1.35 1.35 0 0 0-.54 1.08 1 1 0 0 0 .37.78 1.42 1.42 0 0 0 .92.3 1.92 1.92 0 0 0 1.27-.47 1.4 1.4 0 0 0 .56-1.09A.9.9 0 0 0 15 2a1.49 1.49 0 0 0-1-.31 1.92 1.92 0 0 0-1.25.44z"/>
                    </svg>
                </a>
                <div class="flyout_cmp tooltip rankingexplanation_blk">
                    <ul>
                        <li><b>The Formula</b></li>
                        <li>
                            <img height="50" src="https://s3media.247sports.com/Content/Img/team-ranking-explanation.gif" title="Team Ranking Explanation" alt="Team Ranking Explanation" />
                        </li>
                        <li>
                            where <span>c</span> is a specific team's total number of commits and <span>R<sub>n</sub></span> is the 247Sports Composite Rating of the nth-best commit times 100.
                        </li>
                        <li><b>Explanation</b></li>
                        <li>
                            In order to create the most comprehensive Team Recruiting Ranking without any notion of bias, 247Sports Team Recruiting Ranking is solely based on the 247Sports Composite Rating.
                        </li>
                        <li>
                            Each recruit is weighted in the rankings according to a <a href="http://en.wikipedia.org/wiki/Normal_distribution" target="blank">Gaussian distribution formula</a> (a bell curve), where a team's best recruit is worth the most points. You can think of a team's point score as being the sum of ratings of all the team's commits where the best recruit is worth 100% of his rating value, the second best recruit is worth nearly 100% of his rating value, down to the last recruit who is worth a small fraction of his rating value. This formula ensures that all commits contribute at least some value to the team's score without heavily rewarding teams that have several more commitments than others.
                        </li>
                        <li>
                            Readers familiar with the Gaussian distribution formula will note that we use a varying value for <span>&sigma;</span> based on the standard deviation for the total number of commits between schools for the given sport. This <a href="http://en.wikipedia.org/wiki/Standard_deviation" target="blank">standard deviation</a> creates a bell curve with an inflection point near the average number of players recruited per team.
                        </li>
                        <li>
                            Below is a graphical representation of how our formula works. You can see that the area under the curve gets smaller both as the rating for a commit decreases and as the number of total commits for a school increases. The y-axis in this graph represents the percentage weight of the score that gets applied to an overall team ranking.
                        </li>
                        <li>
                            <img src="https://s3media.247sports.com/Content/Img/team_rankings.gif" />
                        </li>
                    </ul>
                </div>
            </span>
        </h1>

        
            <div class="rankings-page__header-nav">
                

<div class="rankings-page__nav-block">
    <a class="yr_plldwn tltp_click tltp_bm" href="/Season/2024-Football/CompositeTeamRankings">2024 <span class="icon-caret-down" aria-hidden="true"></span></a>
    <div class="flyout_cmp year tooltip">
        <ul>
            
                    <li><a href="/Season/2027-Football/CompositeTeamRankings">2027</a></li>
                
                    <li><a href="/Season/2026-Football/CompositeTeamRankings">2026</a></li>
                
                    <li><a href="/Season/2025-Football/CompositeTeamRankings">2025</a></li>
                
                    <li><a href="/Season/2024-Football/CompositeTeamRankings">2024</a></li>
                
                    <li><a href="/Season/2023-Football/CompositeTeamRankings">2023</a></li>
                
                    <li><a href="/Season/2022-Football/CompositeTeamRankings">2022</a></li>
                
                    <li><a href="/Season/2021-Football/CompositeTeamRankings">2021</a></li>
                
                    <li><a href="/Season/2020-Football/CompositeTeamRankings">2020</a></li>
                
                    <li><a href="/Season/2019-Football/CompositeTeamRankings">2019</a></li>
                
                    <li><a href="/Season/2018-Football/CompositeTeamRankings">2018</a></li>
                
                    <li><a href="/Season/2017-Football/CompositeTeamRankings">2017</a></li>
                
                    <li><a href="/Season/2016-Football/CompositeTeamRankings">2016</a></li>
                
                    <li><a href="/Season/2015-Football/CompositeTeamRankings">2015</a></li>
                
                    <li><a href="/Season/2014-Football/CompositeTeamRankings">2014</a></li>
                
                    <li><a href="/Season/2013-Football/CompositeTeamRankings">2013</a></li>
                
                    <li><a href="/Season/2012-Football/CompositeTeamRankings">2012</a></li>
                
                    <li><a href="/Season/2011-Football/CompositeTeamRankings">2011</a></li>
                
                    <li><a href="/Season/2010-Football/CompositeTeamRankings">2010</a></li>
                
                    <li><a href="/Season/2009-Football/CompositeTeamRankings">2009</a></li>
                
                    <li><a href="/Season/2008-Football/CompositeTeamRankings">2008</a></li>
                
                    <li><a href="/Season/2007-Football/CompositeTeamRankings">2007</a></li>
                
                    <li><a href="/Season/2006-Football/CompositeTeamRankings">2006</a></li>
                
                    <li><a href="/Season/2005-Football/CompositeTeamRankings">2005</a></li>
                
                    <li><a href="/Season/2004-Football/CompositeTeamRankings">2004</a></li>
                
                    <li><a href="/Season/2003-Football/CompositeTeamRankings">2003</a></li>
                
                    <li><a href="/Season/2002-Football/CompositeTeamRankings">2002</a></li>
                
                    <li><a href="/Season/2001-Football/CompositeTeamRankings">2001</a></li>
                
                    <li><a href="/Season/2000-Football/CompositeTeamRankings">2000</a></li>
                
                    <li><a href="/Season/1999-Football/CompositeTeamRankings">1999</a></li>
                
        </ul>
    </div>

    
        <a class="yr_plldwn tltp_click tltp_bm" href="/Season/2024-Football/CompositeTeamRankings">Football <span class="icon-caret-down" aria-hidden="true"></span></a>
        
            <div class="tooltip flyout_cmp sport">
                <ul>
                    <li><a href="/Season/2024-Football/CompositeTeamRankings">Football</a></li>
                    <li><a href="/Season/2024-Basketball/CompositeTeamRankings">Basketball</a></li>
                </ul>
            </div>
        
            <a class="yr_plldwn tltp_click tltp_bm" href="/Season/2024-Football/CompositeTeamRankings">Recruit <span class="icon-caret-down" aria-hidden="true"></span></a>
            
                <div class="tooltip flyout_cmp ranktype">
                    <ul>
                        <li><a href="/Season/2024-Football/CompositeTeamRankings/">Recruit</a></li>
                        <li><a href="/Season/2024-Football/OverallTeamRankings/">Overall</a></li>
                        <li><a href="/Season/2024-Football/TransferTeamRankings/">Transfer</a></li>
                    </ul>
                </div>
            
</div>

<div class="rankings-page__nav-block rankings-page__nav-block--second">

    
        <a href="/Season/2024-Football?View=Interests#tabs_calculator" title="Football Class Calculator">Class Calculator</a>
    
        <a class="embed-link" href="/Season/2024-Football/CompositeTeamRankings/ConfigureEmbed">
            <svg enable-background="new 0 0 500 500" height="24" id="Layer_1" version="1.1" viewBox="125 125 250 250" width="30" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><title>Embed</title><g><g><polygon fill="#677A86" points="195.568,185.811 142.681,250.173 195.568,314.534 208.077,293.962 172.44,250.173      208.077,206.384    "></polygon><polygon fill="#677A86" points="228.707,313 251.922,313 288.816,187 265.6,187"></polygon><polygon fill="#677A86" points="303.876,185.81 291.37,206.384 327.005,250.173 291.37,293.961 303.876,314.535 356.765,250.173"></polygon></g></g></svg>
        </a>
    
</div>

            </div>
        
    </header>

    <section class="rankings-page__body">
        <div class="rankings-page__main">
            <p class="rankings-page__tagline">
                
                    The Chase for the Recruiting Champion powered by <b>247Sports Composite</b>
                
            </p>

            
<div class="rankings-page__conference-bar ">
    
        <ul class="rankings-page__conference-list">
            <li class="power-five current">
                <a href="/Season/2024-Football/CompositeTeamRankings">ALL</a>
            </li>

            <li class="power-five ">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=ACC">ACC</a>
            </li>

            <li class="power-five ">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=Big-12">Big-12</a>
            </li>

            <li class="power-five ">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=Big-Ten">Big-Ten</a>
            </li>

            <li class="power-five ">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=Pac-12">Pac-12</a>
            </li>

            <li class="power-five ">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=SEC">SEC</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=AAC">AAC</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=C-USA">C-USA</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=IND">Ind.</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=MAC">MAC</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=M-West">M-West</a>
            </li>

            <li class="">
                <a href="/Season/2024-Football/CompositeTeamRankings?Conference=SBC">SBC</a>
            </li>
        </ul>
    
</div>


            <ul class="rankings-page__list" data-js="rankings-list">
                <li class="list-header">
                    <b class="rank">Rank</b>
                    <b class="team">Team</b>
                    <b class="total"><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=Total">Total</a></b>
                    <ul>
                        <li class="five"><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=FiveStars">5-stars</a></li>
                        <li class="four"><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=FourStars">4-stars</a></li>
                        <li class="three"><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=ThreeStars">3-stars</a></li>
                    </ul>
                    <b class="avg"><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=Avg">Avg</a></b>
                    <b class=""><a href="/Season/2024-football-20241/CompositeTeamRankings?OrderBy=Points">Points</a></b>
                </li>

                
    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    1
                    
                </div>

                
                    <div class="other">1</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Georgia" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Georgia" /><noscript><img alt="Georgia" src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Georgia" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/georgia/Season/2024-Football/Commits/">Georgia
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/georgia/Season/2024-Football/Commits/">28 Commits
                    </a>
            </div>

            <div class="avg">
                93.60
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    5
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    19
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        4
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/georgia/Season/2024-Football/Commits/">317.04
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    2
                    
                </div>

                
                    <div class="other">2</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Alabama" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Alabama" /><noscript><img alt="Alabama" src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Alabama" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/alabama/Season/2024-Football/Commits/">Alabama
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/alabama/Season/2024-Football/Commits/">28 Commits
                    </a>
            </div>

            <div class="avg">
                93.12
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    5
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    17
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        6
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/alabama/Season/2024-Football/Commits/">310.73
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    3
                    
                </div>

                
                    <div class="other">4</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Miami" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Miami" /><noscript><img alt="Miami" src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Miami" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/miami/Season/2024-Football/Commits/">Miami
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/miami/Season/2024-Football/Commits/">27 Commits
                    </a>
            </div>

            <div class="avg">
                90.97
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    3
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    11
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        13
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/miami/Season/2024-Football/Commits/">291.03
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    4
                    
                </div>

                
                    <div class="other">7</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Ohio State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/330/917/8917330.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Ohio State" /><noscript><img alt="Ohio State" src="https://s3media.247sports.com/Uploads/Assets/330/917/8917330.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Ohio State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/ohio-state/Season/2024-Football/Commits/">Ohio State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/ohio-state/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                92.73
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    4
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    14
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        3
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/ohio-state/Season/2024-Football/Commits/">288.94
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    5
                    
                </div>

                
                    <div class="other">3</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Oregon" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/446/649/4649446.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Oregon" /><noscript><img alt="Oregon" src="https://s3media.247sports.com/Uploads/Assets/446/649/4649446.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Oregon" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/oregon/Season/2024-Football/Commits/">Oregon
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/oregon/Season/2024-Football/Commits/">26 Commits
                    </a>
            </div>

            <div class="avg">
                91.94
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    21
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        5
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/oregon/Season/2024-Football/Commits/">287.13
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    6
                    
                </div>

                
                    <div class="other">8</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Texas" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/487/456/8456487.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Texas" /><noscript><img alt="Texas" src="https://s3media.247sports.com/Uploads/Assets/487/456/8456487.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Texas" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/texas/Season/2024-Football/Commits/">Texas
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/texas/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                92.37
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    4
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    15
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        3
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/texas/Season/2024-Football/Commits/">286.85
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    7
                    
                </div>

                
                    <div class="other">5</div>
                
            </div>

            <div class="team-image-block">
                <img alt="LSU" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="LSU" /><noscript><img alt="LSU" src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="LSU" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/lsu/Season/2024-Football/Commits/">LSU
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/lsu/Season/2024-Football/Commits/">29 Commits
                    </a>
            </div>

            <div class="avg">
                90.81
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    19
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        9
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/lsu/Season/2024-Football/Commits/">278.73
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    8
                    
                </div>

                
                    <div class="other">6</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Auburn" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Auburn" /><noscript><img alt="Auburn" src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Auburn" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/auburn/Season/2024-Football/Commits/">Auburn
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/auburn/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                91.86
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    14
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        6
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/auburn/Season/2024-Football/Commits/">276.61
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    9
                    
                </div>

                
                    <div class="other">9</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Oklahoma" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/285/648/4648285.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Oklahoma" /><noscript><img alt="Oklahoma" src="https://s3media.247sports.com/Uploads/Assets/285/648/4648285.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Oklahoma" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/oklahoma/Season/2024-Football/Commits/">Oklahoma
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/oklahoma/Season/2024-Football/Commits/">28 Commits
                    </a>
            </div>

            <div class="avg">
                90.82
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    18
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        9
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/oklahoma/Season/2024-Football/Commits/">275.70
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    10
                    
                </div>

                
                    <div class="other">10</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Notre Dame" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/207/648/4648207.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Notre Dame" /><noscript><img alt="Notre Dame" src="https://s3media.247sports.com/Uploads/Assets/207/648/4648207.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Notre Dame" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/notre-dame/Season/2024-Football/Commits/">Notre Dame
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/notre-dame/Season/2024-Football/Commits/">23 Commits
                    </a>
            </div>

            <div class="avg">
                91.43
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    16
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        7
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/notre-dame/Season/2024-Football/Commits/">275.15
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    11
                    
                </div>

                
                    <div class="other">15</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Clemson" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/565/682/4682565.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Clemson" /><noscript><img alt="Clemson" src="https://s3media.247sports.com/Uploads/Assets/565/682/4682565.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Clemson" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/clemson/Season/2024-Football/Commits/">Clemson
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/clemson/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                90.61
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    2
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    11
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        9
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/clemson/Season/2024-Football/Commits/">272.01
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    12
                    
                </div>

                
                    <div class="other">16</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Florida State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/191/522/11522191.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Florida State" /><noscript><img alt="Florida State" src="https://s3media.247sports.com/Uploads/Assets/191/522/11522191.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Florida State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/florida-state/Season/2024-Football/Commits/">Florida State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/florida-state/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                90.87
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    15
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        7
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/florida-state/Season/2024-Football/Commits/">268.90
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    13
                    
                </div>

                
                    <div class="other">11</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Tennessee" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/630/649/4649630.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Tennessee" /><noscript><img alt="Tennessee" src="https://s3media.247sports.com/Uploads/Assets/630/649/4649630.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Tennessee" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/tennessee/Season/2024-Football/Commits/">Tennessee
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/tennessee/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                91.13
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    2
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    11
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        8
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/tennessee/Season/2024-Football/Commits/">267.20
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    14
                    
                </div>

                
                    <div class="other">12</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Penn State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/328/648/4648328.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Penn State" /><noscript><img alt="Penn State" src="https://s3media.247sports.com/Uploads/Assets/328/648/4648328.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Penn State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/penn-state/Season/2024-Football/Commits/">Penn State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/penn-state/Season/2024-Football/Commits/">25 Commits
                    </a>
            </div>

            <div class="avg">
                90.61
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    16
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        9
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/penn-state/Season/2024-Football/Commits/">265.79
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    15
                    
                </div>

                
                    <div class="other">14</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Florida" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/863/84/11084863.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Florida" /><noscript><img alt="Florida" src="https://s3media.247sports.com/Uploads/Assets/863/84/11084863.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Florida" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/florida/Season/2024-Football/Commits/">Florida
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/florida/Season/2024-Football/Commits/">19 Commits
                    </a>
            </div>

            <div class="avg">
                91.48
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    2
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    11
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        6
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/florida/Season/2024-Football/Commits/">265.50
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    16
                    
                </div>

                
                    <div class="other">13</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Michigan" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/794/510/10510794.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Michigan" /><noscript><img alt="Michigan" src="https://s3media.247sports.com/Uploads/Assets/794/510/10510794.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Michigan" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/michigan/Season/2024-Football/Commits/">Michigan
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/michigan/Season/2024-Football/Commits/">27 Commits
                    </a>
            </div>

            <div class="avg">
                90.30
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    18
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        9
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/michigan/Season/2024-Football/Commits/">263.01
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    17
                    
                </div>

                
                    <div class="other">17</div>
                
            </div>

            <div class="team-image-block">
                <img alt="USC" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/624/114/8114624.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="USC" /><noscript><img alt="USC" src="https://s3media.247sports.com/Uploads/Assets/624/114/8114624.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="USC" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/usc/Season/2024-Football/Commits/">USC
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/usc/Season/2024-Football/Commits/">20 Commits
                    </a>
            </div>

            <div class="avg">
                90.43
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    13
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        7
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/usc/Season/2024-Football/Commits/">250.89
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    18
                    
                </div>

                
                    <div class="other">20</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Nebraska" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/814/84/11084814.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Nebraska" /><noscript><img alt="Nebraska" src="https://s3media.247sports.com/Uploads/Assets/814/84/11084814.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Nebraska" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/nebraska/Season/2024-Football/Commits/">Nebraska
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/nebraska/Season/2024-Football/Commits/">29 Commits
                    </a>
            </div>

            <div class="avg">
                88.26
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    7
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/nebraska/Season/2024-Football/Commits/">246.52
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    19
                    
                </div>

                
                    <div class="other">18</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Missouri" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/515/682/4682515.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Missouri" /><noscript><img alt="Missouri" src="https://s3media.247sports.com/Uploads/Assets/515/682/4682515.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Missouri" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/missouri/Season/2024-Football/Commits/">Missouri
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/missouri/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                89.24
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    7
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        13
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/missouri/Season/2024-Football/Commits/">240.77
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    20
                    
                </div>

                
                    <div class="other">21</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Ole Miss" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/425/456/8456425.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Ole Miss" /><noscript><img alt="Ole Miss" src="https://s3media.247sports.com/Uploads/Assets/425/456/8456425.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Ole Miss" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/ole-miss/Season/2024-Football/Commits/">Ole Miss
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/ole-miss/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                89.45
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    11
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        10
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/ole-miss/Season/2024-Football/Commits/">240.02
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    21
                    
                </div>

                
                    <div class="other">22</div>
                
            </div>

            <div class="team-image-block">
                <img alt="South Carolina" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/627/649/4649627.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="South Carolina" /><noscript><img alt="South Carolina" src="https://s3media.247sports.com/Uploads/Assets/627/649/4649627.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="South Carolina" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/south-carolina/Season/2024-Football/Commits/">South Carolina
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/south-carolina/Season/2024-Football/Commits/">16 Commits
                    </a>
            </div>

            <div class="avg">
                90.75
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="gold">
                    2
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    9
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        5
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/south-carolina/Season/2024-Football/Commits/">239.88
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    22
                    
                </div>

                
                    <div class="other">23</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Texas A&amp;M" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/634/649/4649634.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Texas A&amp;M" /><noscript><img alt="Texas A&amp;M" src="https://s3media.247sports.com/Uploads/Assets/634/649/4649634.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Texas A&amp;M" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/texas-am/Season/2024-Football/Commits/">Texas A&M
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/texas-am/Season/2024-Football/Commits/">16 Commits
                    </a>
            </div>

            <div class="avg">
                91.41
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    14
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        1
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/texas-am/Season/2024-Football/Commits/">239.75
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    23
                    
                </div>

                
                    <div class="other">19</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Wisconsin" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/332/648/4648332.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Wisconsin" /><noscript><img alt="Wisconsin" src="https://s3media.247sports.com/Uploads/Assets/332/648/4648332.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Wisconsin" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/wisconsin/Season/2024-Football/Commits/">Wisconsin
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/wisconsin/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                89.30
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    10
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        12
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/wisconsin/Season/2024-Football/Commits/">239.10
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    24
                    
                </div>

                
                    <div class="other">25</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Texas Tech" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/293/648/4648293.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Texas Tech" /><noscript><img alt="Texas Tech" src="https://s3media.247sports.com/Uploads/Assets/293/648/4648293.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Texas Tech" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/texas-tech/Season/2024-Football/Commits/">Texas Tech
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/texas-tech/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                89.12
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div class="silver">
                    1
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    5
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        15
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/texas-tech/Season/2024-Football/Commits/">235.93
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    25
                    
                </div>

                
                    <div class="other">24</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Kentucky" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/962/698/9698962.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Kentucky" /><noscript><img alt="Kentucky" src="https://s3media.247sports.com/Uploads/Assets/962/698/9698962.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Kentucky" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/kentucky/Season/2024-Football/Commits/">Kentucky
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/kentucky/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                88.73
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    7
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        14
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/kentucky/Season/2024-Football/Commits/">232.00
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    26
                    
                </div>

                
                    <div class="other">27</div>
                
            </div>

            <div class="team-image-block">
                <img alt="North Carolina" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/602/120/8120602.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="North Carolina" /><noscript><img alt="North Carolina" src="https://s3media.247sports.com/Uploads/Assets/602/120/8120602.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="North Carolina" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/north-carolina/Season/2024-Football/Commits/">North Carolina
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/north-carolina/Season/2024-Football/Commits/">27 Commits
                    </a>
            </div>

            <div class="avg">
                87.86
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    6
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/north-carolina/Season/2024-Football/Commits/">229.02
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    27
                    
                </div>

                
                    <div class="other">26</div>
                
            </div>

            <div class="team-image-block">
                <img alt="NC State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/728/975/7975728.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="NC State" /><noscript><img alt="NC State" src="https://s3media.247sports.com/Uploads/Assets/728/975/7975728.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="NC State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/north-carolina-state/Season/2024-Football/Commits/">NC State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/north-carolina-state/Season/2024-Football/Commits/">24 Commits
                    </a>
            </div>

            <div class="avg">
                87.63
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    5
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        19
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/north-carolina-state/Season/2024-Football/Commits/">224.34
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    28
                    
                </div>

                
                    <div class="other">31</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Mississippi State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/96/903/11903096.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Mississippi State" /><noscript><img alt="Mississippi State" src="https://s3media.247sports.com/Uploads/Assets/96/903/11903096.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Mississippi State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/mississippi-state/Season/2024-Football/Commits/">Mississippi State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/mississippi-state/Season/2024-Football/Commits/">24 Commits
                    </a>
            </div>

            <div class="avg">
                87.95
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    7
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        14
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/mississippi-state/Season/2024-Football/Commits/">220.41
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    29
                    
                </div>

                
                    <div class="other">30</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Arkansas" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/672/698/9698672.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Arkansas" /><noscript><img alt="Arkansas" src="https://s3media.247sports.com/Uploads/Assets/672/698/9698672.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Arkansas" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/arkansas/Season/2024-Football/Commits/">Arkansas
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/arkansas/Season/2024-Football/Commits/">17 Commits
                    </a>
            </div>

            <div class="avg">
                88.95
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    7
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        10
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/arkansas/Season/2024-Football/Commits/">219.86
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    30
                    
                </div>

                
                    <div class="other">34</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Purdue" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/329/648/4648329.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Purdue" /><noscript><img alt="Purdue" src="https://s3media.247sports.com/Uploads/Assets/329/648/4648329.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Purdue" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/purdue/Season/2024-Football/Commits/">Purdue
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/purdue/Season/2024-Football/Commits/">25 Commits
                    </a>
            </div>

            <div class="avg">
                87.01
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    4
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/purdue/Season/2024-Football/Commits/">216.03
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    31
                    
                </div>

                
                    <div class="other">28</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Iowa" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/539/682/4682539.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Iowa" /><noscript><img alt="Iowa" src="https://s3media.247sports.com/Uploads/Assets/539/682/4682539.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Iowa" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/iowa/Season/2024-Football/Commits/">Iowa
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/iowa/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                87.61
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    6
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        15
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/iowa/Season/2024-Football/Commits/">215.07
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    32
                    
                </div>

                
                    <div class="other">42</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Stanford" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/954/472/8472954.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Stanford" /><noscript><img alt="Stanford" src="https://s3media.247sports.com/Uploads/Assets/954/472/8472954.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Stanford" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/stanford/Season/2024-Football/Commits/">Stanford
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/stanford/Season/2024-Football/Commits/">23 Commits
                    </a>
            </div>

            <div class="avg">
                87.03
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    3
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        20
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/stanford/Season/2024-Football/Commits/">213.36
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    33
                    
                </div>

                
                    <div class="other">37</div>
                
            </div>

            <div class="team-image-block">
                <img alt="UCF" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/320/734/11734320.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="UCF" /><noscript><img alt="UCF" src="https://s3media.247sports.com/Uploads/Assets/320/734/11734320.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="UCF" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/central-florida/Season/2024-Football/Commits/">UCF
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/central-florida/Season/2024-Football/Commits/">18 Commits
                    </a>
            </div>

            <div class="avg">
                88.21
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="gold">
                    8
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        10
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/central-florida/Season/2024-Football/Commits/">213.09
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    34
                    
                </div>

                
                    <div class="other">33</div>
                
            </div>

            <div class="team-image-block">
                <img alt="TCU" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/291/648/4648291.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="TCU" /><noscript><img alt="TCU" src="https://s3media.247sports.com/Uploads/Assets/291/648/4648291.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="TCU" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/tcu/Season/2024-Football/Commits/">TCU
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/tcu/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                87.02
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    4
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        16
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/tcu/Season/2024-Football/Commits/">213.02
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    35
                    
                </div>

                
                    <div class="other">32</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Georgia Tech" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/197/648/4648197.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Georgia Tech" /><noscript><img alt="Georgia Tech" src="https://s3media.247sports.com/Uploads/Assets/197/648/4648197.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Georgia Tech" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/georgia-tech/Season/2024-Football/Commits/">Georgia Tech
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/georgia-tech/Season/2024-Football/Commits/">24 Commits
                    </a>
            </div>

            <div class="avg">
                87.21
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    3
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/georgia-tech/Season/2024-Football/Commits/">212.70
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    36
                    
                </div>

                
                    <div class="other">29</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Minnesota" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/324/648/4648324.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Minnesota" /><noscript><img alt="Minnesota" src="https://s3media.247sports.com/Uploads/Assets/324/648/4648324.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Minnesota" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/minnesota/Season/2024-Football/Commits/">Minnesota
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/minnesota/Season/2024-Football/Commits/">20 Commits
                    </a>
            </div>

            <div class="avg">
                87.70
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    3
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        16
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/minnesota/Season/2024-Football/Commits/">211.41
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    37
                    
                </div>

                
                    <div class="other">41</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Washington" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/263/975/7975263.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Washington" /><noscript><img alt="Washington" src="https://s3media.247sports.com/Uploads/Assets/263/975/7975263.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Washington" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/washington/Season/2024-Football/Commits/">Washington
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/washington/Season/2024-Football/Commits/">17 Commits
                    </a>
            </div>

            <div class="avg">
                88.25
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    5
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        12
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/washington/Season/2024-Football/Commits/">210.96
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    38
                    
                </div>

                
                    <div class="other">36</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Rutgers" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/724/682/4682724.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Rutgers" /><noscript><img alt="Rutgers" src="https://s3media.247sports.com/Uploads/Assets/724/682/4682724.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Rutgers" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/rutgers/Season/2024-Football/Commits/">Rutgers
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/rutgers/Season/2024-Football/Commits/">24 Commits
                    </a>
            </div>

            <div class="avg">
                86.87
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    4
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        20
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/rutgers/Season/2024-Football/Commits/">210.18
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    39
                    
                </div>

                
                    <div class="other">38</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Syracuse" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/977/144/8144977.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Syracuse" /><noscript><img alt="Syracuse" src="https://s3media.247sports.com/Uploads/Assets/977/144/8144977.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Syracuse" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/syracuse/Season/2024-Football/Commits/">Syracuse
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/syracuse/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                87.00
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    4
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        16
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/syracuse/Season/2024-Football/Commits/">208.47
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    40
                    
                </div>

                
                    <div class="other">45</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Maryland" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/920/639/9639920.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Maryland" /><noscript><img alt="Maryland" src="https://s3media.247sports.com/Uploads/Assets/920/639/9639920.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Maryland" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/maryland/Season/2024-Football/Commits/">Maryland
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/maryland/Season/2024-Football/Commits/">23 Commits
                    </a>
            </div>

            <div class="avg">
                86.76
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    3
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        20
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/maryland/Season/2024-Football/Commits/">208.41
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    41
                    
                </div>

                
                    <div class="other">40</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Vanderbilt" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/756/81/11081756.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Vanderbilt" /><noscript><img alt="Vanderbilt" src="https://s3media.247sports.com/Uploads/Assets/756/81/11081756.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Vanderbilt" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/vanderbilt/Season/2024-Football/Commits/">Vanderbilt
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/vanderbilt/Season/2024-Football/Commits/">20 Commits
                    </a>
            </div>

            <div class="avg">
                87.00
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    2
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        18
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/vanderbilt/Season/2024-Football/Commits/">204.81
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    42
                    
                </div>

                
                    <div class="other">44</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Pittsburgh" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/109/167/9167109.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Pittsburgh" /><noscript><img alt="Pittsburgh" src="https://s3media.247sports.com/Uploads/Assets/109/167/9167109.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Pittsburgh" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/pittsburgh/Season/2024-Football/Commits/">Pittsburgh
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/pittsburgh/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                86.93
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    2
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        19
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/pittsburgh/Season/2024-Football/Commits/">204.10
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    43
                    
                </div>

                
                    <div class="other">43</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Kansas" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/283/648/4648283.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Kansas" /><noscript><img alt="Kansas" src="https://s3media.247sports.com/Uploads/Assets/283/648/4648283.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Kansas" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/kansas/Season/2024-Football/Commits/">Kansas
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/kansas/Season/2024-Football/Commits/">17 Commits
                    </a>
            </div>

            <div class="avg">
                87.49
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    3
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        14
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/kansas/Season/2024-Football/Commits/">202.17
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    44
                    
                </div>

                
                    <div class="other">54</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Virginia Tech" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/212/648/4648212.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Virginia Tech" /><noscript><img alt="Virginia Tech" src="https://s3media.247sports.com/Uploads/Assets/212/648/4648212.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Virginia Tech" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/virginia-tech/Season/2024-Football/Commits/">Virginia Tech
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/virginia-tech/Season/2024-Football/Commits/">16 Commits
                    </a>
            </div>

            <div class="avg">
                88.11
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div class="silver">
                    4
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        12
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/virginia-tech/Season/2024-Football/Commits/">202.13
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    45
                    
                </div>

                
                    <div class="other">48</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Illinois" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/916/698/9698916.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Illinois" /><noscript><img alt="Illinois" src="https://s3media.247sports.com/Uploads/Assets/916/698/9698916.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Illinois" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/illinois/Season/2024-Football/Commits/">Illinois
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/illinois/Season/2024-Football/Commits/">19 Commits
                    </a>
            </div>

            <div class="avg">
                86.83
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    2
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        17
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/illinois/Season/2024-Football/Commits/">200.84
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    46
                    
                </div>

                
                    <div class="other">35</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Michigan State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/240/483/8483240.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Michigan State" /><noscript><img alt="Michigan State" src="https://s3media.247sports.com/Uploads/Assets/240/483/8483240.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Michigan State" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/michigan-state/Season/2024-Football/Commits/">Michigan State
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/michigan-state/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                86.27
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    1
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        20
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/michigan-state/Season/2024-Football/Commits/">200.02
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    47
                    
                </div>

                
                    <div class="other">39</div>
                
            </div>

            <div class="team-image-block">
                <img alt="West Virginia" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/295/648/4648295.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="West Virginia" /><noscript><img alt="West Virginia" src="https://s3media.247sports.com/Uploads/Assets/295/648/4648295.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="West Virginia" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/west-virginia/Season/2024-Football/Commits/">West Virginia
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/west-virginia/Season/2024-Football/Commits/">22 Commits
                    </a>
            </div>

            <div class="avg">
                86.48
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    1
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/west-virginia/Season/2024-Football/Commits/">199.72
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    48
                    
                </div>

                
                    <div class="other">55</div>
                
            </div>

            <div class="team-image-block">
                <img alt="USF" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/246/648/4648246.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="USF" /><noscript><img alt="USF" src="https://s3media.247sports.com/Uploads/Assets/246/648/4648246.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="USF" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/south-florida/Season/2024-Football/Commits/">USF
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/south-florida/Season/2024-Football/Commits/">27 Commits
                    </a>
            </div>

            <div class="avg">
                85.38
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    1
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        26
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/south-florida/Season/2024-Football/Commits/">196.81
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    49
                    
                </div>

                
                    <div class="other">46</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Brigham Young" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/528/682/4682528.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Brigham Young" /><noscript><img alt="Brigham Young" src="https://s3media.247sports.com/Uploads/Assets/528/682/4682528.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Brigham Young" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/byu/Season/2024-Football/Commits/">Brigham Young
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/byu/Season/2024-Football/Commits/">24 Commits
                    </a>
            </div>

            <div class="avg">
                85.47
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    2
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        22
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/byu/Season/2024-Football/Commits/">196.58
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__list-item">
        <div class="wrapper">
            <div class="rank-column">
                <div class="primary">
                    50
                    
                </div>

                
                    <div class="other">49</div>
                
            </div>

            <div class="team-image-block">
                <img alt="Wake Forest" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/304/457/9457304.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Wake Forest" /><noscript><img alt="Wake Forest" src="https://s3media.247sports.com/Uploads/Assets/304/457/9457304.png?fit=bounds&amp;crop=50:50,offset-y0.50&amp;width=50&amp;height=50&amp;fit=crop" title="Wake Forest" /></noscript>
            </div>

            <div class="team">
                <a class="rankings-page__name-link" href="https://247sports.com/college/wake-forest/Season/2024-Football/Commits/">Wake Forest
                    </a>
            </div>

            <div class="total">
                <a href="https://247sports.com/college/wake-forest/Season/2024-Football/Commits/">21 Commits
                    </a>
            </div>

            <div class="avg">
                86.22
            </div>

            <ul class="star-commits-list">
                <li>
                    <h2>5-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>4-Star</h2>
                    
                        <div>
                    0
                    </div>
                </li>

                <li>
                    <h2>3-Star</h2>
                    <div>
                        21
                    </div>
                </li>
            </ul>

            <div class="points">
                <a class="number" href="https://247sports.com/college/wake-forest/Season/2024-Football/Commits/">196.48
                    </a>
            </div>
        </div>

        <div data-react-container="player-ranking-flyout"></div>
    </li>

    <li class="rankings-page__showmore showmore_blk">
        <a data-js="showmore" href="https://247sports.com/Season/2024-Football/CompositeTeamRankings/?ViewPath=~%2FViews%2FSkyNet%2FInstitutionRanking%2F_SimpleSetForSeason.ascx&amp;Page=2">Load More</a>
    </li>

            </ul>

        </div>

        <aside class="rankings-page__sidebar">
            

            <div class="team-rankings-video"><div class="embedVideo"></div></div>

            <div id="mpu_plus_top" data-ad="mpu_plus_top" class="dfp_ad"></div>

            <form action="https://247sports.com/Season/2024-Football/Recruits/" autocomplete="off" class="recruit-search-form profile-sidebar__comp" method="Get">
    <section class="home-comp recruit-search-form">
        <header class="comp-hdr recruit-search-form__header">
            <h2 class="recruit-search-form__heading">Recruit Search</h2>
            <a class="tltp_click tltp_bm" href="https://247sports.com/Season/2024-Football/Recruits/">Football <span class="icon-caret-down" aria-hidden="true"></span>
            </a>

<div class="tooltip flyout_cmp sport">
    <ul>
        
                <li><a href="https://247sports.com/Season/2024-Football/Recruits/">Football</a></li>
            
                <li><a href="https://247sports.com/Season/2024-Basketball/Recruits/">Basketball</a></li>
            
                <li><a href="https://247sports.com/Season/2024-Baseball/Recruits/">Baseball</a></li>
            
                <li><a href="https://247sports.com/Season/2024-Softball/Recruits/">Softball</a></li>
            
                <li><a href="https://247sports.com/Season/2024-Women&#39;s%20Basketball/Recruits/">Women's Basketball</a></li>
            
    </ul>
</div>
<a class="tltp_click tltp_bm" href="https://247sports.com/Season/2024-Football/Recruits/">2024 <span class="icon-caret-down" aria-hidden="true"></span>
            </a>

<div class="flyout_cmp year tooltip">
    <ul>
        
                <li><a href="https://247sports.com/Season/2028-Football/Recruits/">2028</a></li>
            
                <li><a href="https://247sports.com/Season/2027-Football/Recruits/">2027</a></li>
            
                <li><a href="https://247sports.com/Season/2026-Football/Recruits/">2026</a></li>
            
                <li><a href="https://247sports.com/Season/2025-Football/Recruits/">2025</a></li>
            
                <li><a href="https://247sports.com/Season/2024-Football/Recruits/">2024</a></li>
            
                <li><a href="https://247sports.com/Season/2023-Football/Recruits/">2023</a></li>
            
                <li><a href="https://247sports.com/Season/2022-Football/Recruits/">2022</a></li>
            
                <li><a href="https://247sports.com/Season/2021-Football/Recruits/">2021</a></li>
            
                <li><a href="https://247sports.com/Season/2020-Football/Recruits/">2020</a></li>
            
                <li><a href="https://247sports.com/Season/2019-Football/Recruits/">2019</a></li>
            
                <li><a href="https://247sports.com/Season/2018-Football/Recruits/">2018</a></li>
            
                <li><a href="https://247sports.com/Season/2017-Football/Recruits/">2017</a></li>
            
                <li><a href="https://247sports.com/Season/2016-Football/Recruits/">2016</a></li>
            
                <li><a href="https://247sports.com/Season/2015-Football/Recruits/">2015</a></li>
            
                <li><a href="https://247sports.com/Season/2014-Football/Recruits/">2014</a></li>
            
                <li><a href="https://247sports.com/Season/2013-Football/Recruits/">2013</a></li>
            
                <li><a href="https://247sports.com/Season/2012-Football/Recruits/">2012</a></li>
            
                <li><a href="https://247sports.com/Season/2011-Football/Recruits/">2011</a></li>
            
                <li><a href="https://247sports.com/Season/2010-Football/Recruits/">2010</a></li>
            
                <li><a href="https://247sports.com/Season/2009-Football/Recruits/">2009</a></li>
            
                <li><a href="https://247sports.com/Season/2008-Football/Recruits/">2008</a></li>
            
                <li><a href="https://247sports.com/Season/2007-Football/Recruits/">2007</a></li>
            
                <li><a href="https://247sports.com/Season/2006-Football/Recruits/">2006</a></li>
            
                <li><a href="https://247sports.com/Season/2005-Football/Recruits/">2005</a></li>
            
                <li><a href="https://247sports.com/Season/2004-Football/Recruits/">2004</a></li>
            
                <li><a href="https://247sports.com/Season/2003-Football/Recruits/">2003</a></li>
            
                <li><a href="https://247sports.com/Season/2002-Football/Recruits/">2002</a></li>
            
                <li><a href="https://247sports.com/Season/2001-Football/Recruits/">2001</a></li>
            
                <li><a href="https://247sports.com/Season/2000-Football/Recruits/">2000</a></li>
            
                <li><a href="https://247sports.com/Season/1999-Football/Recruits/">1999</a></li>
            
    </ul>
</div>

        </header>

        <section class="recruit-search-form__body">
            <fieldset class="recruit-search-form__fieldset">
                <input class="recruit-search-form__search-input placeholder" aria-label="Recruit Search" name="DefaultName" placeholder="Enter first, last, or full name" type="search">
                <input class="recruit-search-form__submit-button" type="submit" value="Search">
            </fieldset>

            <ul class="recruit-search-form__list">
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__interest-type-link" href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_targets">Targets</a>
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__interest-type-link" href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_offers">Offers</a>
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__interest-type-link" href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_visits">Visits</a>
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__interest-type-link" href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_commits">Commits</a>
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__interest-type-link" href="https://247sports.com/Season/2024-Football/?View=Interests#tabs_decommits">Decommits</a>
                    </li>
                
            </ul>

            <ul class="recruit-search-form__list">
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=QB">QB</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=BACK">BACK</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=REC">REC</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=O-LINE">O-LINE</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=D-LINE">D-LINE</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=LB">LB</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=DB">DB</a>
                        
                    </li>
                
                    <li class="recruit-search-form__list-item">
                        <a class="recruit-search-form__position-link" href="https://247sports.com/Season/2024-Football/Recruits/?Position.PositionGroup=OTH">OTH</a>
                        
                    </li>
                
            </ul>
        </section>
    </section>
</form>

<section class="recruit-list">
    <header>
        <h2>2024 Player Rankings</h2>
    </header>

    <ul>
        
            <li>
                <ul class="player">
                    <li>1</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/118/210/12210118.jpg"><img alt="Jeremiah Smith" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/118/210/12210118.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Jeremiah Smith" width="20" /><noscript><img alt="Jeremiah Smith" height="20" src="https://s3media.247sports.com/Uploads/Assets/118/210/12210118.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Jeremiah Smith" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Jeremiah-Smith-46114094">Jeremiah Smith</a></li>
                    <li>WR</li>
                    <li>
                        
                                <span>
                                    <img alt="Ohio State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/330/917/8917330.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Ohio State" width="25" /><noscript><img alt="Ohio State" height="25" src="https://s3media.247sports.com/Uploads/Assets/330/917/8917330.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Ohio State" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>2</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/322/206/12206322.jpg"><img alt="Ellis Robinson IV" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/322/206/12206322.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Ellis Robinson IV" width="20" /><noscript><img alt="Ellis Robinson IV" height="20" src="https://s3media.247sports.com/Uploads/Assets/322/206/12206322.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Ellis Robinson IV" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Ellis-Robinson-IV-46111860">Ellis Robinson IV</a></li>
                    <li>CB</li>
                    <li>
                        
                                <span>
                                    <img alt="Georgia" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Georgia" width="25" /><noscript><img alt="Georgia" height="25" src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Georgia" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>3</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/273/204/12204273.jpg"><img alt="Cam Coleman" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/273/204/12204273.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Cam Coleman" width="20" /><noscript><img alt="Cam Coleman" height="20" src="https://s3media.247sports.com/Uploads/Assets/273/204/12204273.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Cam Coleman" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Cam-Coleman-46115877">Cam Coleman</a></li>
                    <li>WR</li>
                    <li>
                        
                                <span>
                                    <img alt="Auburn" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Auburn" width="25" /><noscript><img alt="Auburn" height="25" src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Auburn" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>4</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/97/206/12206097.jpg"><img alt="Ryan Williams" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/97/206/12206097.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Ryan Williams" width="20" /><noscript><img alt="Ryan Williams" height="20" src="https://s3media.247sports.com/Uploads/Assets/97/206/12206097.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Ryan Williams" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Ryan-Williams-46127941">Ryan Williams</a></li>
                    <li>WR</li>
                    <li>
                        
                                <span>
                                    <img alt="Alabama" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Alabama" width="25" /><noscript><img alt="Alabama" height="25" src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Alabama" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>5</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/937/211/12211937.jpg"><img alt="Justin Williams" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/937/211/12211937.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Justin Williams" width="20" /><noscript><img alt="Justin Williams" height="20" src="https://s3media.247sports.com/Uploads/Assets/937/211/12211937.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Justin Williams" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Justin-Williams-46113777">Justin Williams</a></li>
                    <li>LB</li>
                    <li>
                        
                                <span>
                                    <img alt="Georgia" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Georgia" width="25" /><noscript><img alt="Georgia" height="25" src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Georgia" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>6</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/633/811/11811633.JPG"><img alt="Julian Sayin" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/633/811/11811633.JPG?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Julian Sayin" width="20" /><noscript><img alt="Julian Sayin" height="20" src="https://s3media.247sports.com/Uploads/Assets/633/811/11811633.JPG?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Julian Sayin" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Julian-Sayin-46102486">Julian Sayin</a></li>
                    <li>QB</li>
                    <li>
                        
                                <span>
                                    <img alt="Alabama" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Alabama" width="25" /><noscript><img alt="Alabama" height="25" src="https://s3media.247sports.com/Uploads/Assets/592/649/4649592.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Alabama" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>7</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/320/204/12204320.jpg"><img alt="DJ Lagway" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/320/204/12204320.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="DJ Lagway" width="20" /><noscript><img alt="DJ Lagway" height="20" src="https://s3media.247sports.com/Uploads/Assets/320/204/12204320.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="DJ Lagway" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/DJ-Lagway-46111820">DJ Lagway</a></li>
                    <li>QB</li>
                    <li>
                        
                                <span>
                                    <img alt="Florida" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/863/84/11084863.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Florida" width="25" /><noscript><img alt="Florida" height="25" src="https://s3media.247sports.com/Uploads/Assets/863/84/11084863.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Florida" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>8</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/362/204/12204362.jpg"><img alt="Williams Nwaneri" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/362/204/12204362.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Williams Nwaneri" width="20" /><noscript><img alt="Williams Nwaneri" height="20" src="https://s3media.247sports.com/Uploads/Assets/362/204/12204362.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Williams Nwaneri" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Williams-Nwaneri-46125725">Williams Nwaneri</a></li>
                    <li>DL</li>
                    <li>
                        
                                <span>
                                    <img alt="Missouri" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/515/682/4682515.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Missouri" width="25" /><noscript><img alt="Missouri" height="25" src="https://s3media.247sports.com/Uploads/Assets/515/682/4682515.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Missouri" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>9</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/287/244/12244287.jpg"><img alt="David Stone" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/287/244/12244287.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="David Stone" width="20" /><noscript><img alt="David Stone" height="20" src="https://s3media.247sports.com/Uploads/Assets/287/244/12244287.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="David Stone" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/David-Stone-46113378">David Stone</a></li>
                    <li>DL</li>
                    <li>
                        
                                <span>
                                    <img alt="Oklahoma" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/285/648/4648285.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Oklahoma" width="25" /><noscript><img alt="Oklahoma" height="25" src="https://s3media.247sports.com/Uploads/Assets/285/648/4648285.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Oklahoma" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>10</li>
                    <li class="main-photo">
                        <a href="https://s3media.247sports.com/Uploads/Assets/991/209/12209991.jpg"><img alt="Justin Scott" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/991/209/12209991.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="20" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Justin Scott" width="20" /><noscript><img alt="Justin Scott" height="20" src="https://s3media.247sports.com/Uploads/Assets/991/209/12209991.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Justin Scott" width="20" /></noscript>
                        </a>
                    </li>
                    <li><a href="//247sports.com/Player/Justin-Scott-46125615">Justin Scott</a></li>
                    <li>DL</li>
                    <li>
                        
                                <span>
                                    <img alt="Miami" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Miami" width="25" /><noscript><img alt="Miami" height="25" src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Miami" width="25" /></noscript>
                                </span>
                            
                    </li>
                </ul>
            </li>
        
    </ul>

    <footer>
        <a href="//247sports.com/Season/2024-Football/CompositeRecruitRankings?InstitutionGroup=HighSchool">Full List</a>
    </footer>
</section>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPageElement",
        "name": "2024 247Sports Composite Player Rankings",
        "description": "247Sports' Top 10 2024 Player Rankings",
        "about": [
            {
                "@type": "ItemList",
                "itemListElement": [
                    
                        {
                            "@type": "Person",
                            "name": "Jeremiah Smith",
                            "sameAs": "https://247sports.com/Player/Jeremiah-Smith-46114094"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Ellis Robinson IV",
                            "sameAs": "https://247sports.com/Player/Ellis-Robinson-IV-46111860"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Cam Coleman",
                            "sameAs": "https://247sports.com/Player/Cam-Coleman-46115877"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Ryan Williams",
                            "sameAs": "https://247sports.com/Player/Ryan-Williams-46127941"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Justin Williams",
                            "sameAs": "https://247sports.com/Player/Justin-Williams-46113777"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Julian Sayin",
                            "sameAs": "https://247sports.com/Player/Julian-Sayin-46102486"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "DJ Lagway",
                            "sameAs": "https://247sports.com/Player/DJ-Lagway-46111820"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Williams Nwaneri",
                            "sameAs": "https://247sports.com/Player/Williams-Nwaneri-46125725"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "David Stone",
                            "sameAs": "https://247sports.com/Player/David-Stone-46113378"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Justin Scott",
                            "sameAs": "https://247sports.com/Player/Justin-Scott-46125615"
                        }
                    
                ]
            }
        ]
    }
</script>

            <div id="mpu_middle" data-ad="mpu_middle" class="dfp_ad"></div>

            
<section class="recruit-list coach-list">
    <header>
        <h2>2024 Recruiter Rankings</h2>
    </header>

    <ul>
        
            <li>
                <ul class="player">
                    <li>1</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/666/956/4_7956666.jpg"><img alt="Fran Brown" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/666/956/7956666.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Fran Brown" width="25" /><noscript><img alt="Fran Brown" height="25" src="https://s3media.247sports.com/Uploads/Assets/666/956/7956666.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Fran Brown" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Fran-Brown-1577">Fran Brown</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/syracuse/Season/2024-Football/Commits/"><img alt="Syracuse" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/977/144/8144977.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Syracuse" width="25" /><noscript><img alt="Syracuse" height="25" src="https://s3media.247sports.com/Uploads/Assets/977/144/8144977.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Syracuse" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>2</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/118/854/4_11854118.JPG"><img alt="Holmon Wiggins" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/118/854/11854118.JPG?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Holmon Wiggins" width="25" /><noscript><img alt="Holmon Wiggins" height="25" src="https://s3media.247sports.com/Uploads/Assets/118/854/11854118.JPG?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Holmon Wiggins" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Holmon-Wiggins-1468">Holmon Wiggins</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/texas-am/Season/2024-Football/Commits/"><img alt="Texas A&amp;M" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/634/649/4649634.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Texas A&amp;M" width="25" /><noscript><img alt="Texas A&amp;M" height="25" src="https://s3media.247sports.com/Uploads/Assets/634/649/4649634.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Texas A&amp;M" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>3</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/100/756/4_11756100.jpg"><img alt="Jason Taylor" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/100/756/11756100.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Jason Taylor" width="25" /><noscript><img alt="Jason Taylor" height="25" src="https://s3media.247sports.com/Uploads/Assets/100/756/11756100.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Jason Taylor" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Jason-Taylor-5061">Jason Taylor</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/miami/Season/2024-Football/Commits/"><img alt="Miami" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Miami" width="25" /><noscript><img alt="Miami" height="25" src="https://s3media.247sports.com/Uploads/Assets/201/648/4648201.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Miami" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>4</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/538/872/4_872538.jpg"><img alt="Frank Wilson" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/538/872/872538.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Frank Wilson" width="25" /><noscript><img alt="Frank Wilson" height="25" src="https://s3media.247sports.com/Uploads/Assets/538/872/872538.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Frank Wilson" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Frank-Wilson-257">Frank Wilson</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/lsu/Season/2024-Football/Commits/"><img alt="LSU" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="LSU" width="25" /><noscript><img alt="LSU" height="25" src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="LSU" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>5</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/668/566/4_11566668.jpeg"><img alt="Marcus Davis" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/668/566/11566668.jpeg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Marcus Davis" width="25" /><noscript><img alt="Marcus Davis" height="25" src="https://s3media.247sports.com/Uploads/Assets/668/566/11566668.jpeg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Marcus Davis" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Marcus-Davis-4996">Marcus Davis</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/auburn/Season/2024-Football/Commits/"><img alt="Auburn" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Auburn" width="25" /><noscript><img alt="Auburn" height="25" src="https://s3media.247sports.com/Uploads/Assets/597/649/4649597.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Auburn" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>6</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/753/693/4_3693753.jpg"><img alt="Al Washington" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/753/693/3693753.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Al Washington" width="25" /><noscript><img alt="Al Washington" height="25" src="https://s3media.247sports.com/Uploads/Assets/753/693/3693753.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Al Washington" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Al-Washington-1764">Al Washington</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/notre-dame/Season/2024-Football/Commits/"><img alt="Notre Dame" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/207/648/4648207.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Notre Dame" width="25" /><noscript><img alt="Notre Dame" height="25" src="https://s3media.247sports.com/Uploads/Assets/207/648/4648207.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Notre Dame" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>7</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/158/54/4_9054158.jpg"><img alt="Tray Scott" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/158/54/9054158.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Tray Scott" width="25" /><noscript><img alt="Tray Scott" height="25" src="https://s3media.247sports.com/Uploads/Assets/158/54/9054158.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Tray Scott" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Tray-Scott-3657">Tray Scott</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/georgia/Season/2024-Football/Commits/"><img alt="Georgia" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Georgia" width="25" /><noscript><img alt="Georgia" height="25" src="https://s3media.247sports.com/Uploads/Assets/605/649/4649605.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Georgia" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>8</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/889/229/4_12229889.jpg"><img alt="Donovan Raiola" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/889/229/12229889.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Donovan Raiola" width="25" /><noscript><img alt="Donovan Raiola" height="25" src="https://s3media.247sports.com/Uploads/Assets/889/229/12229889.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Donovan Raiola" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Donovan-Raiola-4853">Donovan Raiola</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/nebraska/Season/2024-Football/Commits/"><img alt="Nebraska" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/814/84/11084814.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Nebraska" width="25" /><noscript><img alt="Nebraska" height="25" src="https://s3media.247sports.com/Uploads/Assets/814/84/11084814.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Nebraska" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>9</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/414/174/4_8174414.jpg"><img alt="Phil Trautwein" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/414/174/8174414.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Phil Trautwein" width="25" /><noscript><img alt="Phil Trautwein" height="25" src="https://s3media.247sports.com/Uploads/Assets/414/174/8174414.jpg?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Phil Trautwein" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Phil-Trautwein-4068">Phil Trautwein</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/penn-state/Season/2024-Football/Commits/"><img alt="Penn State" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/328/648/4648328.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Penn State" width="25" /><noscript><img alt="Penn State" height="25" src="https://s3media.247sports.com/Uploads/Assets/328/648/4648328.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Penn State" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
            <li>
                <ul class="player">
                    <li>10</li>
                    <li class="main-photo">
                        <a class="fancybox" href="https://s3media.247sports.com/Uploads/Assets/89/922/4_11922089.png"><img alt="Joe Sloan" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/89/922/11922089.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="Joe Sloan" width="25" /><noscript><img alt="Joe Sloan" height="25" src="https://s3media.247sports.com/Uploads/Assets/89/922/11922089.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="Joe Sloan" width="25" /></noscript>
                        </a>
                    </li>
                    <li><a href="/Coach/Joe-Sloan-1992">Joe Sloan</a></li>
                    <li class="coach-team">
                        <a href="https://247sports.com/college/lsu/Season/2024-Football/Commits/"><img alt="LSU" class="jsonly" data-src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" height="25" src="https://s3media.247sports.com/Content/Img/1x1.gif" title="LSU" width="25" /><noscript><img alt="LSU" height="25" src="https://s3media.247sports.com/Uploads/Assets/869/32/8032869.png?fit=bounds&amp;crop=25:25,offset-y0.50&amp;width=25&amp;height=25" title="LSU" width="25" /></noscript>
                        </a>
                    </li>
                </ul>
            </li>
        
    </ul>

    <footer>
        <a href="/Season/2024-Football/CompositeCoachRankings">Full List</a>
    </footer>
</section>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPageElement",
        "name": "2024 247Sports Composite Recruiter Rankings",
        "description": "247Sports' Top 10 2024 Recruiter Rankings",
        "about": [
            {
                "@type": "ItemList",
                "itemListElement": [
                    
                        {
                            "@type": "Person",
                            "name": "Fran Brown",
                            "sameAs": "https://247sports.com/Coach/Fran-Brown-1577"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Holmon Wiggins",
                            "sameAs": "https://247sports.com/Coach/Holmon-Wiggins-1468"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Jason Taylor",
                            "sameAs": "https://247sports.com/Coach/Jason-Taylor-5061"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Frank Wilson",
                            "sameAs": "https://247sports.com/Coach/Frank-Wilson-257"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Marcus Davis",
                            "sameAs": "https://247sports.com/Coach/Marcus-Davis-4996"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Al Washington",
                            "sameAs": "https://247sports.com/Coach/Al-Washington-1764"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Tray Scott",
                            "sameAs": "https://247sports.com/Coach/Tray-Scott-3657"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Donovan Raiola",
                            "sameAs": "https://247sports.com/Coach/Donovan-Raiola-4853"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Phil Trautwein",
                            "sameAs": "https://247sports.com/Coach/Phil-Trautwein-4068"
                        },
                    
                        {
                            "@type": "Person",
                            "name": "Joe Sloan",
                            "sameAs": "https://247sports.com/Coach/Joe-Sloan-1992"
                        }
                    
                ]
            }
        ]
    }
</script>

            <section class="rankings-page__about">
                <header class="comp-hdr">
                    <h1>About</h1>
                </header>
                <div>
                    <h2>247Sports Composite</h2>
                    <p>The 247Sports Composite is a proprietary algorithm that compiles rankings and ratings listed in the public domain by the major media recruiting services, creating the industry's most comprehensive and unbiased prospect and team rankings...<a href="https://247sports.com/Article/247Rating-Explanation-81574">More Info</a></p>
                </div>
                <div>
                    <h2>247Sports Recruiting</h2>
                    <p>Powered by innovative technology products, 247Sports employs a staff of more than 50 full time recruiting reporters and evaluators that rank and compile data on the nation's elite high school recruits...<a href="https://247sports.com/Article/247Rating-Explanation-81574">More Info</a></p>
                </div>
            </section>

            <div class="rankings-page__team-legend">
                <ul>
                    <li>
                        <b>5-Stars</b>
                        <div class="gold">
                            2+ commits
                        </div>
                        <div class="silver">
                            1 commit
                        </div>
                    </li>

                    <li>
                        <b>4-Stars</b>
                        <div class="gold">
                            7+ commits
                        </div>
                        <div class="silver">
                            3 - 6 commits
                        </div>
                    </li>
                </ul>
            </div>

            <div id="mpu_bottom" data-ad="mpu_bottom" class="dfp_ad"></div>
            <div id="gambling_partner_flex_rail" data-ad="gambling_partner_flex_rail" class="dfp_ad"></div>
        </aside>
    </section>
</section>

<script>
    var swapAviaPlayer = function() {
        var embedVideo = document.querySelector('div.embedVideo');

        if (embedVideo) {
            var pathObject = {
                siteKey: '33',
                className: 'tp-siderail-video',
                ap: true,
                fv: 0,
                ws: false
            };

            var pathData = btoa(JSON.stringify(pathObject));

            var aviaIframe = document.createElement('iframe');
            aviaIframe.src = `/embed/video/${pathData}/`;
            aviaIframe.loading = 'eager';
            aviaIframe.allow = 'fullscreen';
            aviaIframe.name = '247SportsVideoPlayer';
            aviaIframe.referrerpolicy = 'strict-origin-when-cross-origin';
            aviaIframe.width = '300'
            aviaIframe.height = '170';
            aviaIframe.className = 'embedVideo';
            embedVideo.replaceWith(aviaIframe);
        }
    }

    document.addEventListener('DOMContentLoaded', swapAviaPlayer);
</script>
<script>
    var detectScroll = function() {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scroll > 0) {
            document.querySelector('.team-rankings-video').classList.add('fixed');
        } else {
            document.querySelector('.team-rankings-video').classList.remove('fixed');
        }
    }

    document.addEventListener('scroll', detectScroll);
</script>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "
            2024
            Football Recruiting Composite Team Rankings
            
        ",
        "description" : "A list of 247Sports' Team Rankings. In order to create the most comprehensive Team Recruiting Ranking without any notion of bias, 247Sports Team Recruiting Ranking is solely based on the 247Sports Composite Rating.",
        "author": [
            {
                "@type": "Organization",
                "name": "247Sports",
                "brand": [
                    {
                        "@type": "Brand",
                        "name": "247Sports
                            
                                Composite Team Rankings
                            
                        "
                    }
                ]
            }
        ],
        "about" : [
            {
                "@type": "ItemList",
                "itemListElement": [
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Georgia",
                            "description": "Composite Rank of 1",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Athens, Georgia"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Alabama",
                            "description": "Composite Rank of 2",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Tuscaloosa, Alabama"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Miami",
                            "description": "Composite Rank of 3",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Coral Gables, Florida"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Ohio State",
                            "description": "Composite Rank of 4",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Columbus, Ohio"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Oregon",
                            "description": "Composite Rank of 5",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Eugene, Oregon"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Texas",
                            "description": "Composite Rank of 6",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Austin, Texas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "LSU",
                            "description": "Composite Rank of 7",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Baton Rouge, Louisiana"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Auburn",
                            "description": "Composite Rank of 8",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Auburn, Alabama"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Oklahoma",
                            "description": "Composite Rank of 9",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Norman, Oklahoma"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Notre Dame",
                            "description": "Composite Rank of 10",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "South Bend, Indiana"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Clemson",
                            "description": "Composite Rank of 11",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Clemson, South Carolina"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Florida State",
                            "description": "Composite Rank of 12",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Tallahassee, Florida"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Tennessee",
                            "description": "Composite Rank of 13",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Knoxville, Tennessee"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Penn State",
                            "description": "Composite Rank of 14",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "University Park, Pennsylvania"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Florida",
                            "description": "Composite Rank of 15",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Gainesville, Florida"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Michigan",
                            "description": "Composite Rank of 16",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Ann Arbor, Michigan"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "USC",
                            "description": "Composite Rank of 17",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Los Angeles, California"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Nebraska",
                            "description": "Composite Rank of 18",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Lincoln, Nebraska"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Missouri",
                            "description": "Composite Rank of 19",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Columbia, Missouri"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Ole Miss",
                            "description": "Composite Rank of 20",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Oxford, Mississippi"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "South Carolina",
                            "description": "Composite Rank of 21",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Columbia, South Carolina"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Texas A&M",
                            "description": "Composite Rank of 22",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "College Station, Texas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Wisconsin",
                            "description": "Composite Rank of 23",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Madison, Wisconsin"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Texas Tech",
                            "description": "Composite Rank of 24",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Lubbock, Texas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Kentucky",
                            "description": "Composite Rank of 25",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Lexington, Kentucky"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "North Carolina",
                            "description": "Composite Rank of 26",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Chapel Hill, North Carolina"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "NC State",
                            "description": "Composite Rank of 27",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Raleigh, North Carolina"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Mississippi State",
                            "description": "Composite Rank of 28",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Starkville, Mississippi"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Arkansas",
                            "description": "Composite Rank of 29",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Fayetteville, Arkansas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Purdue",
                            "description": "Composite Rank of 30",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "West Lafayette, Indiana"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Iowa",
                            "description": "Composite Rank of 31",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Iowa City, Iowa"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Stanford",
                            "description": "Composite Rank of 32",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Stanford, California"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "UCF",
                            "description": "Composite Rank of 33",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Orlando, Florida"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "TCU",
                            "description": "Composite Rank of 34",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Fort Worth, Texas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Georgia Tech",
                            "description": "Composite Rank of 35",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Atlanta, Georgia"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Minnesota",
                            "description": "Composite Rank of 36",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Minneapolis, Minnesota"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Washington",
                            "description": "Composite Rank of 37",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "SEATTLE, Washington"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Rutgers",
                            "description": "Composite Rank of 38",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Piscataway, New Jersey"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Syracuse",
                            "description": "Composite Rank of 39",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Syracuse, New York"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Maryland",
                            "description": "Composite Rank of 40",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "College Park, Maryland"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Vanderbilt",
                            "description": "Composite Rank of 41",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Nashville, Tennessee"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Pittsburgh",
                            "description": "Composite Rank of 42",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Pittsburgh, Pennsylvania"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Kansas",
                            "description": "Composite Rank of 43",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Lawrence, Kansas"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Virginia Tech",
                            "description": "Composite Rank of 44",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Blacksburg, Virginia"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Illinois",
                            "description": "Composite Rank of 45",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Champaign, Illinois"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Michigan State",
                            "description": "Composite Rank of 46",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "East Lansing, Michigan"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "West Virginia",
                            "description": "Composite Rank of 47",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Morgantown, West Virginia"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "USF",
                            "description": "Composite Rank of 48",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Tampa, Florida"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Brigham Young",
                            "description": "Composite Rank of 49",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Provo, Utah"
                                }
                            ]
                        },
                    
                        {
                            "@type": "SportsTeam",
                            "name": "Wake Forest",
                            "description": "Composite Rank of 50",
                            
                            "url": "https://247sports.com/Season/2024-Football/Commits/",
                            "location": [
                                {
                                    "@type": "Place",
                                    "name": "Winston Salem, North Carolina"
                                }
                            ]
                        }
                    
                ]
            }
        ]
    }
</script>

</div>

            </section>
        </section>

        

<footer class="main-site-footer" role="contentinfo">
    <div class="logo-block">
        <a class="tfs-link" href="https://247sports.com/" aria-label="2 4 7 Sports">
            <svg class="tfs-logo_img" width="250" height="50" viewBox="0 0 888.1 150.9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#004B82" d="M164.4,113.9l8.5-24.1l-56.3-0.1l1.5-4.4c1.5-4.4,3.4-9.1,5.1-13.5c0.3-0.9,0.9-1.6,1.6-2.3
                    c24.6-19.7,46.2-33.2,68.9-52.5c0.7-0.5,1.7-1.1,2.5-1.1c1.7,0,3.8,0,6,0c9.6,0,20.6,0.1,24.3,0.1h0.5l-17.7,51.1h38.7l-22.6,22.6
                    h-24.6l-8.1,24.1H164.4z M160.3,67.2h20.2l6.3-19L160.3,67.2z"/>
                <path fill="#004B82" d="M599.4,16.5c8.5,0.5,13.2,5.2,13.2,12.9c-0.1,3.5-0.9,7.3-2.1,10.8c-4,12.1-8.3,24-12.7,36
                    c-1,2.7-2.3,5.3-3.9,7.9c-3.9,6.4-9.6,10-16.6,11.2c-2.8,0.5-5.6,0.7-8.4,0.8c-12.2,0.1-24.5,0.1-36.6,0c-3.1-0.1-6.3-0.5-9.3-1.3
                    c-6.4-1.9-9.7-7-8.7-14.1c0.5-3.5,1.5-7.2,2.7-10.8c4-11.6,8-23.1,12.3-34.7c2.2-6,5.6-11.4,11.5-15.1c4.9-3.1,10.1-3.9,15.3-3.9
                    C562.9,16,591.8,16,599.4,16.5z M566.9,75.1c0.2,0,0.4,0,0.6,0c4.5-0.2,6.6-1.5,8.1-5.8c3.2-8.6,6.2-17.1,9.1-25.8
                    c1.4-4.3,0.2-6.3-4.1-6.4c-7.2-0.2-14.4-0.2-21.7,0c-4.1,0.1-6.1,1.8-7.7,5.9c-0.6,1.6-1.2,3.2-1.7,4.9c-2.4,6.7-4.8,13.3-7.1,19.9
                    c-1.8,5.3-0.5,7.3,4.8,7.4C550.4,75.2,563.6,75.1,566.9,75.1L566.9,75.1z"/>
                <path fill="#004B82" d="M362.9,70.4c-0.5,1.9-1,3.5-1.4,5.2c-0.4,1.6,0.3,2.6,1.9,2.9c0.8,0.2,1.6,0.2,2.5,0.3c7.2,0,14.5,0,21.7,0
                    c4.2,0,5.6-1,7.1-5.2c0.5-1.4,0.9-2.7,1.3-4.1c0.5-2.5-0.1-3.4-2.5-3.6c-4.1-0.4-8.2-0.8-12.3-1.1c-7.6-0.8-15.2-1.3-22.7-2.4
                    c-8.8-1.3-12-6.8-9.3-15.9c1.6-5.5,3.5-11,5.8-16.2c4.2-9.7,9.8-13.7,19.8-13.8c15.2-0.2,30.4-0.1,45.5,0c2.1,0.1,4.2,0.4,6.2,1.1
                    c5,1.9,6.7,6,5.9,11.4c-0.5,3.5-1.8,7.2-2.8,10.8c-0.1,0.4-1,1.1-1.4,1.1c-7.4,0.1-14.7,0-22.1,0c-0.1,0-0.2-0.1-0.4-0.3
                    c0.2-0.7,0.5-1.5,0.7-2.2c0.9-3.3,0.1-4.7-3.3-4.7c-5.7-0.1-11.4,0-17.1,0c-1.3,0-2.5,0-3.8,0c-2.7,0.1-4,1-5.1,3.5
                    c-0.7,1.5-1.1,3.1-1.5,4.6c-0.5,2.1,0.2,3,2.3,3.2c7.2,0.7,14.3,1.3,21.4,2c5,0.5,10,0.9,14.9,1.8c7.5,1.5,10.5,6.3,8.4,14.1
                    c-1.9,7-4.3,13.9-7.2,20.5c-3.8,8.8-9.6,12.6-19.3,12.7c-16,0.2-32,0.1-48,0c-1.9,0-3.7-0.3-5.5-0.9c-5.9-1.9-8.2-6.6-6.6-13.5
                    c0.8-3.4,2-6.8,3.2-10.2c0.1-0.4,0.9-1,1.3-1C347.8,70.3,355.3,70.4,362.9,70.4z"/>
                <path fill="#004B82" d="M843.8,40.6c0.3-1.4,0.6-2.4,0.8-3.4c0.5-2.7-0.3-3.7-2.9-3.8c-3.4-0.1-17.5-0.1-21.1,0
                    c-3.1,0.1-4.6,1.2-5.7,4.2c-2.6,7.2-1.6,7,4.3,7.5c9.9,0.9,19.8,1.7,29.7,2.9c2.8,0.3,5.5,1.2,8,2.5c3.4,1.7,4.7,5,4.4,9.1
                    c-0.4,5.4-2.7,10.5-4.6,15.8c-1.4,3.7-2.8,7.5-4.7,11c-2.7,5-7,8-12.4,9c-2.4,0.4-4.9,0.7-7.4,0.7c-14.7,0.1-29.4,0.1-44.1,0
                    c-2.7,0-5.3-0.4-7.9-1.2c-4.9-1.5-7-5.4-6.3-10.6c0.7-4.5,2.2-9.1,3.4-13.7h24c-0.4,1.4-0.9,2.6-1.3,3.8c-0.9,2.8-0.1,4,2.7,4.3
                    c0.4,0.1,0.9,0.1,1.4,0.1c7.2,0,14.4,0,21.7,0c4.3,0,5.7-1.1,7-5.2c0.4-1.1,0.8-2.3,1.2-3.5c0.9-2.7,0.2-4-2.5-4.3
                    c-7-0.7-14-1.2-21-2c-5.7-0.7-11.6-1.1-17-2.5c-5.7-1.4-8.1-5.9-6.7-12c1.3-5.5,3.4-10.9,5.2-16.3c0.7-2,1.5-4,2.6-5.9
                    c3.4-6.5,8.8-9.9,15.7-10.6c1.6-0.2,3.3-0.3,5-0.3c13.9,0,27.7-0.1,41.6,0c2.1,0,4.1,0.3,6.1,0.7c5.6,1.3,8.5,5.1,7.8,11.1
                    c-0.5,3.8-1.8,7.7-2.8,11.6c-0.1,0.4-1,1.1-1.4,1.1C858.9,40.6,851.4,40.6,843.8,40.6z"/>
                <path fill="#004B82" d="M673.3,68.4c2.7,9.2,5.3,18.3,8,27.7h-12.7c-3.5,0-7.1-0.1-10.6,0.1c-1.3,0.1-1.7-0.4-2-1.5
                    c-1.9-7.5-4-14.8-5.9-22.3c-0.4-1.4-1-2-2.6-1.9c-3.7,0.1-7.3,0.1-10.9,0c-1.5-0.1-2.1,0.5-2.6,2c-2.6,7.4-5.2,14.8-7.9,22.3
                    c-0.2,0.4-0.4,0.9-0.7,1.4h-24.4c0.9-2.7,1.7-5.2,2.7-7.8c6.5-18.5,13-37,19.5-55.5c1.7-5,3.6-10,5.3-15.1c0.4-1.1,0.9-1.5,2-1.5
                    c18.6,0.1,37.2,0,55.7,0.1c2.3,0.1,4.7,0.4,6.9,1.2c6,2,8.5,6.5,7.2,13.7c-1.5,8.6-4.6,17-8.6,25.2c-3.4,7-9.2,10.8-16.6,11.8
                    C674.7,68.1,674.1,68.2,673.3,68.4z M647.3,34.3L641,52.4c0.3,0.2,0.4,0.3,0.5,0.3c7.8,0,15.6,0.1,23.4-0.1c2.3,0,4.3-1.2,5.2-3.5
                    c1.3-3.3,2.6-6.6,3.5-9.9s0.1-4.8-3.2-4.9C662.9,34.2,655.2,34.3,647.3,34.3z"/>
                <path fill="#004B82" d="M453.8,73.1c-2.7,7.7-5.4,15.2-8.1,22.8h-24.6c2.6-7.4,5.2-14.7,7.8-22.1c6.6-18.7,13.1-37.3,19.7-56
                    c0.5-1.4,1-1.8,2.5-1.8c17.9,0.1,35.9,0,53.8,0.1c2.4,0,4.7,0.3,7.1,0.8c6.7,1.4,10.2,6.6,8.8,13.9c-0.8,4.4-2.3,8.7-3.8,13
                    c-2,5.6-3.9,11.2-6.4,16.7c-3.4,7.5-9.6,11.7-17.4,12.1c-9.1,0.5-18,0.3-27,0.4C461.9,73.2,457.9,73.1,453.8,73.1z M460.1,54.8
                    c0.3,0.1,0.7,0.2,1.1,0.2c7.4,0,14.8,0,22.3,0c2.5,0,4.7-0.9,5.8-3.4c1.6-4.1,3.1-8.2,4.3-12.4c0.7-2.4-0.3-3.6-2.7-3.9
                    c-1-0.1-2.1-0.2-3.1-0.2c-5.2,0-10.5,0-15.7,0c-4.9,0-4.9,0-6.6,4.9c-0.1,0.2-0.2,0.4-0.2,0.6C463.4,45.4,461.8,50.1,460.1,54.8
                    L460.1,54.8z"/>
                <path fill="#004B82" d="M99,114.1c-8-0.1-16-0.1-22.2-0.1H58.2H10.4c0,0,2.4-7,3.1-9c1-2.8,2-5.6,3-8.5c2.5-6.9,5-14.1,7.6-21.2
                    c3.3-8.8,9.7-14.2,18.9-15.9c5.8-1.1,11.7-1.9,17.5-2.6h0.1c1.7-0.2,3.4-0.4,5.1-0.7c6-0.8,12-1.6,17.8-2.3l6.8-0.9
                    c3-0.4,5-2,6.1-4.9c0.2-0.5,0.4-1.1,0.7-1.7c0.5-1.3,1-2.6,1.4-3.8c0.2-0.6,0.3-1.4,0.3-1.9s-0.1-1.1-1-1.7
                    c-0.7-0.5-1.2-0.6-1.8-0.7c-1-0.2-1.8-0.2-2.9-0.2c-3.4,0-16.5,0-19.5,0c-2.8,0-4.2,0.3-5.2,1c-1,0.8-1.8,2-2.8,4.7
                    c-0.9,2.5-1.4,3.3-2.1,3.9c-0.8,0.5-1.7,0.6-4.1,0.6H35.5l0.1-0.3c0.2-0.7,0.4-1.4,0.7-2c0.5-1.5,0.9-2.8,1.4-4.2
                    c0.4-1.1,0.9-2.3,1.3-3.5c1.3-3.4,2.6-6.9,4.3-10.2c3.4-6.6,9.1-10.5,16.9-11.6c2.9-0.4,5.9-0.6,8.8-0.7c8.4-0.1,15.4-0.1,22.4-0.1
                    c7.6,0,14.5,0.1,20.8,0.1c3.3,0,6.7,0.4,9.9,1.3c6,1.6,9,6,8.6,12.4c-0.2,2.9-0.8,6.1-1.9,9.9c-1.4,4.7-3.1,9.5-4.8,14.1l-0.4,1
                    c-4.1,11.5-10.5,16.9-22.1,18.8c-7.1,1.1-14.2,2.1-21.2,2.9c-2.6,0.3-5.6,0.7-8.4,1.1c-2.1,0.3-4.3,0.5-6.3,0.8l-0.2,0.1
                    c-2.7,0.3-5.7,0.7-8.6,1.1c-4,0.5-5.3,1.7-6.9,5.7c-0.2,0.5-0.4,0.9-0.5,1.5L48.2,90h61.4l-0.7,2c-0.3,1-0.7,1.9-1,2.8
                    c-0.5,1.5-1.1,3.1-1.6,4.6l-0.1,0.2c-1.5,4.1-3,8.3-4.4,12.4C101.4,113.6,100.7,114.1,99,114.1L99,114.1z"/>
                <path fill="#5FBF24" d="M200.1,134.9L297.3,41H263l-5,12.8h-27.9l13.8-37.9h104.9l-7.6,21.3l-103,97.7H200.1z"/>
                <path fill="#004B82" d="M735.8,96h-24.6c6.8-19.3,13.5-38.5,20.4-58h-25.7c0.9-2.6,5.7-15.9,7.1-20.3c0.4-1.2,0.9-1.6,2.2-1.6
                    c24.3,0.1,48.6,0.1,72.9,0.1c0.4,0,0.9,0.1,1.5,0.2c-0.9,2.6-5.6,15.8-7,20c-0.4,1.4-1.1,1.6-2.3,1.6c-7.4-0.1-14.7,0-22.1-0.1
                    c-1.4,0-2.1,0.4-2.6,1.9C749.9,55.8,736.7,93.2,735.8,96z"/>
            </svg>
        </a>

        <a class="cbs-link" href="https://cbssports.com/" target="_blank" rel="noopener noreferrer" aria-label="C B S Sports Digital">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="326" height="24" viewBox="0 0 326 24" xmlSpace="preserve" aria-hidden="true">
                <title>CBS Sports Digital</title>
                <path d="M23.6074 12.0192C23.6074 15.288 22.4551 18.0768 20.1505 20.3808C17.846 22.6848 15.0709 23.8368 11.8205 23.8368C8.5701 23.8368 5.78542 22.6848 3.47125 20.3808C1.15708 18.0768 0 15.2928 0 12.0192C0 8.76963 1.15708 5.99523 3.47125 3.69123C5.78542 1.38723 8.5701 0.235229 11.8205 0.235229C15.0709 0.235229 17.846 1.38723 20.1505 3.69123C22.4551 5.99523 23.6074 8.76963 23.6074 12.0192ZM22.8968 12.0384C21.9702 9.99843 20.5394 8.33763 18.5998 7.06083C16.5641 5.67843 14.2979 4.98723 11.8061 4.98723C9.31429 4.98723 7.03853 5.67843 4.97402 7.06083C3.05835 8.33763 1.6372 9.99843 0.710574 12.0384C1.6372 14.0784 3.05835 15.7488 4.97402 17.0496C7.03373 18.408 9.30948 19.0896 11.8061 19.0896C14.3027 19.0896 16.5641 18.408 18.6046 17.0496C20.5394 15.7488 21.9702 14.0784 22.8968 12.0384ZM18.086 12.0192C18.086 13.7472 17.4715 15.2208 16.252 16.4448C15.0277 17.6688 13.5537 18.2784 11.8253 18.2784C10.0969 18.2784 8.62292 17.6688 7.39862 16.4448C6.17432 15.2208 5.56457 13.7472 5.56457 12.0192C5.56457 10.2912 6.17432 8.82243 7.39862 7.60803C8.62292 6.39363 10.0969 5.78883 11.8253 5.78883C13.5537 5.78883 15.0277 6.39363 16.252 7.60803C17.4715 8.82243 18.086 10.2912 18.086 12.0192Z" fill="#0049CE"/>
                <path d="M25.7103 12.0383C25.7103 5.94235 30.7372 0.916748 37.2908 0.916748C43.2346 0.916748 46.2834 5.18395 46.2834 5.18395L43.2346 8.23195C43.2346 8.23195 41.1029 5.18395 37.2908 5.18395C33.4786 5.18395 30.4347 8.23195 30.4347 12.0383C30.4347 15.8447 33.4834 18.8928 37.2908 18.8928C41.2517 18.8928 43.3883 15.8447 43.3883 15.8447L46.437 18.8928C46.437 18.8928 43.3883 23.16 37.2956 23.16C30.7372 23.16 25.7103 18.1295 25.7103 12.0383Z" fill="#0049CE"/>
                <path d="M48.1414 1.3728H57.134C61.4023 1.3728 63.9901 3.9648 63.9901 7.008C63.9901 10.3584 61.095 11.424 61.095 11.424C61.095 11.424 65.056 12.4896 65.056 16.6032C65.056 19.9536 62.3145 22.6992 57.7438 22.6992H48.1414V1.3728ZM56.8268 9.6C58.3487 9.6 59.2657 8.688 59.2657 7.4688C59.2657 6.2496 58.3535 5.3376 56.8268 5.3376H52.7121V9.6048H56.8268V9.6ZM57.4365 18.7392C59.2657 18.7392 60.3316 17.6736 60.3316 16.1472C60.3316 14.6208 59.2657 13.5552 57.4365 13.5552H52.7121V18.7344H57.4365V18.7392Z" fill="#0049CE"/>
                <path d="M65.6033 19.8048L68.6521 16.7568C68.6521 16.7568 70.4813 19.0416 73.6789 19.0416C76.1179 19.0416 77.1838 17.976 77.1838 16.6032C77.1838 12.9456 66.5156 14.6208 66.5156 7.15679C66.5156 3.80639 69.4107 0.911987 74.2887 0.911987C79.013 0.911987 81.452 3.80639 81.452 3.80639L78.4033 6.85439C78.4033 6.85439 76.8813 5.02559 74.4423 5.02559C72.1569 5.02559 71.2399 5.93759 71.2399 7.15679C71.2399 10.8144 81.9081 9.13919 81.9081 16.6032C81.9081 20.1072 78.8594 23.1552 73.8325 23.1552C68.3448 23.16 65.6033 19.8048 65.6033 19.8048Z" fill="#0049CE"/>
                <path d="M88.4617 19.8048L91.5105 16.7568C91.5105 16.7568 93.3397 19.0416 96.5373 19.0416C98.9763 19.0416 100.042 17.976 100.042 16.6032C100.042 12.9456 89.374 14.6208 89.374 7.15679C89.374 3.80639 92.2691 0.911987 97.1471 0.911987C101.871 0.911987 104.31 3.80639 104.31 3.80639L101.262 6.85439C101.262 6.85439 99.7397 5.02559 97.3007 5.02559C95.0153 5.02559 94.0983 5.93759 94.0983 7.15679C94.0983 10.8144 104.767 9.13919 104.767 16.6032C104.767 20.1072 101.718 23.1552 96.691 23.1552C91.2032 23.16 88.4617 19.8048 88.4617 19.8048Z" fill="#0049CE"/>
                <path d="M106.927 1.3728H115.92C120.49 1.3728 123.539 4.4208 123.539 8.5344C123.539 12.648 120.49 15.696 115.92 15.696H111.503V22.704H106.932V1.3728H106.927ZM115.766 11.4288C117.595 11.4288 118.815 10.2096 118.815 8.5344C118.815 6.8592 117.595 5.64 115.766 5.64H111.498V11.4288H115.766Z" fill="#0049CE"/>
                <path d="M125.032 12.0383C125.032 5.94235 130.059 0.916748 136.613 0.916748C143.166 0.916748 148.193 5.94235 148.193 12.0383C148.193 18.1343 143.166 23.16 136.613 23.16C130.059 23.16 125.032 18.1295 125.032 12.0383ZM143.469 12.0383C143.469 8.23195 140.42 5.18395 136.613 5.18395C132.805 5.18395 129.757 8.23195 129.757 12.0383C129.757 15.8447 132.805 18.8928 136.613 18.8928C140.42 18.8928 143.469 15.8447 143.469 12.0383Z" fill="#0049CE"/>
                <path d="M150.599 1.3728H160.047C164.618 1.3728 167.513 4.2672 167.513 8.5344C167.513 13.4112 163.855 14.7792 163.855 14.7792L168.272 22.6992H163.245L159.438 15.6912H155.169V22.6992H150.599V1.3728ZM159.894 11.4288C161.569 11.4288 162.789 10.2096 162.789 8.5344C162.789 6.8592 161.569 5.64 159.894 5.64H155.169V11.4288H159.894Z" fill="#0049CE"/>
                <path d="M175.133 5.64H169.035V1.3728H185.796V5.64H179.699V22.6992H175.128V5.64H175.133Z" fill="#0049CE"/>
                <path d="M186.228 19.8048L189.277 16.7568C189.277 16.7568 191.106 19.0416 194.304 19.0416C196.743 19.0416 197.809 17.976 197.809 16.6032C197.809 12.9456 187.14 14.6208 187.14 7.15679C187.14 3.80639 190.035 0.911987 194.913 0.911987C199.638 0.911987 202.077 3.80639 202.077 3.80639L199.028 6.85439C199.028 6.85439 197.506 5.02559 195.067 5.02559C192.782 5.02559 191.865 5.93759 191.865 7.15679C191.865 10.8144 202.533 9.13919 202.533 16.6032C202.533 20.1072 199.484 23.1552 194.457 23.1552C188.97 23.16 186.228 19.8048 186.228 19.8048Z" fill="#0049CE"/>
                <path d="M210.148 1.3728H217.921C224.474 1.3728 229.199 6.096 229.199 12.0384C229.199 17.9808 224.474 22.704 217.921 22.704H210.148V1.3728ZM217.921 18.4368C221.728 18.4368 224.474 15.696 224.474 12.0384C224.474 8.3808 221.733 5.64 217.921 5.64H214.718V18.4368H217.921Z" fill="#0049CE"/>
                <path d="M231.604 1.3728H236.175V22.6992H231.604V1.3728Z" fill="#0049CE"/>
                <path d="M238.58 12.0383C238.58 5.94235 243.607 0.916748 250.161 0.916748C256.105 0.916748 259.153 5.18395 259.153 5.18395L256.105 8.23195C256.105 8.23195 253.973 5.18395 250.161 5.18395C246.349 5.18395 243.305 8.23195 243.305 12.0383C243.305 15.8447 246.353 18.8927 250.161 18.8927C253.209 18.8927 254.885 17.2176 254.885 17.2176V14.6255H250.924V10.9679H259.456V19.0415C259.456 19.0415 256.253 23.1551 250.161 23.1551C243.607 23.1599 238.58 18.1295 238.58 12.0383Z" fill="#0049CE"/>
                <path d="M262.625 1.44006H267.195V22.7665H262.625V1.44006Z" fill="#0049CE"/>
                <path d="M276.476 5.64H270.378V1.3728H287.139V5.64H281.042V22.6992H276.471V5.64H276.476Z" fill="#0049CE"/>
                <path d="M294.384 1.3728H299.565L307.794 22.6992H302.916L301.087 17.8224H292.858L291.028 22.6992H286.15L294.384 1.3728ZM299.565 13.7136L297.035 6.7056H296.915L294.384 13.7136H299.565Z" fill="#0049CE"/>
                <path d="M309.729 1.3728H314.3V18.4368H324.205V22.704H309.729V1.3728Z" fill="#0049CE"/>
            </svg>
        </a>

        <a class="scout-link" href="https://247sports.com/" aria-label="Scout" target="_blank" rel="noopener noreferrer">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="108" height="36" viewBox="0 0 900 300">
                <path fill="#000" d="M145.5 8C111.3 11.9 78.9 28.6 56 54.1c-25 27.8-37.3 59.3-37.3 95.4 0 18.4 1.7 28.2 8 48 8.5 26.4 30.5 55.2 54.4 71.1 24 15.9 46.8 23.2 75.9 24.1 26.5.8 44.5-2.9 66.5-13.6 35.6-17.4 61.3-46.7 74.3-84.7 4.7-13.7 6.5-25.9 6.5-43.9 0-18.9-1.8-30.2-7.5-47-14.5-42.6-50.9-77.7-93.3-90C184.8 8.1 163 6 145.5 8zm33.9 23.1c37.4 4.9 71.9 29.7 89.8 64.5 18.3 35.6 17.2 80.1-2.9 114.9-23.6 40.8-69.6 64.5-116 59.7-38-4-69.1-22.9-89.9-54.8-23.5-35.9-25.5-82.6-5.2-121.6 11.6-22.4 30.1-40 54.3-51.9 22.3-11 43.6-14.2 69.9-10.8z"/>
                <path fill="#000" d="m147 85.7-14.5 34.6-5.5 2.5c-3 1.3-18.3 7.8-34 14.4-15.7 6.6-28.9 12.3-29.3 12.7-.4.5 3.8 2.7 9.5 5 5.7 2.4 21.3 9 34.8 14.7l24.5 10.5 4.8 11.7c12 29 24.2 57.2 24.7 57.2.3 0 7-15.5 15-34.4l14.3-34.5 34.9-14.7c19.1-8.1 34.5-15.1 34.1-15.5-.9-.8-67.1-28.9-68.1-28.9-.4 0-7.2-15.8-15.2-35-8-19.2-14.7-35-15-35-.3 0-7 15.6-15 34.7zM483.2 104.5c-13.6 3-23.8 10.8-29.7 22.8-8.1 16.7-6.5 37.6 3.9 51.8 13.7 18.6 47.5 22.8 65.1 8.1 6.3-5.3 6.3-5.4-2.5-12l-8-5.9-3.7 3.3c-9.3 8.5-23.7 7.6-32.1-2.1-6.4-7.2-9-16.6-7.3-26.1 2.1-11.4 7.8-18.5 17.4-22.1 6.9-2.5 16.4-1.1 21.7 3.3 3.4 2.9 2.3 3.3 12-4.6 3-2.4 5.7-4.6 5.9-4.7 1.1-.8-5.6-6.3-10.4-8.7-9.6-4.7-20.3-5.7-32.3-3.1zM369.1 106.1c-8.3 2.7-16.1 10.1-18 17.1-1.9 6.6-1.1 17 1.5 20.5 3.4 4.6 10.8 8.9 21.1 12.4 11.1 3.6 15 6 15.9 9.5 1.1 4.2-.4 7.2-4.6 9.4-6.9 3.5-16.2 2-22.1-3.6l-2.6-2.5-6.7 7.6-6.8 7.5 2.4 2c4.6 3.9 12.4 7 20.4 8.1 15.3 2.2 29.5-3.1 35.8-13.3 3.5-5.8 4.7-16.4 2.6-22.9-1.9-5.8-9.4-12.1-16.7-14.3-18.6-5.5-22.7-8.7-20.9-16.2.8-3 7.2-6.4 12.1-6.4 3.8 0 10 2.2 12.5 4.5 1.4 1.2 2.3.5 7.9-5.7l6.4-7-2.4-1.9c-8.2-6.4-26.1-8.6-37.8-4.8zM596 105.4c-15.8 4.3-27.6 16.1-31.6 31.6-2.2 8.9-1.5 24.3 1.5 32.3 4.4 11.2 14.9 21 27.4 25.4 8 2.8 27.1 2.5 35.7-.5 11.7-4 21.6-13.6 26.2-25.2 1.5-4 2.3-8.4 2.6-16.1.5-11.8-.9-18.6-5.6-27.2-5-9.3-17.1-18-28.3-20.6-6-1.4-22.4-1.2-27.9.3zm25.2 18.4c10.5 3.8 16.9 13.9 16.9 26.6 0 15.9-9.5 27-24.2 28.3-12 1.1-21.9-3.9-27.4-13.8-2.7-4.9-3-6.3-3-14.4 0-7.8.4-9.7 2.7-14.1 6.4-12.1 21.5-17.5 35-12.6zM698 131.7c0 14.8.5 29.9 1 33.8 2 13.5 9.2 23 20.9 27.7 8 3.1 24.2 3.2 32.1 0 10.1-4 16.3-10.8 19.4-21.2 1.3-4.4 1.6-11 1.6-36.2V105h-19v57.8l-2.8 5.2c-3.4 6.6-8.3 9.5-15.7 9.4-6-.1-11.9-3.5-15-8.6-1.9-3.1-2-5.5-2.3-33.6l-.3-30.2H698v26.7zM810 113.5v8.5h26v73h20v-73h26v-17h-72v8.5z"/>
            </svg>
        </a>
    </div>

    <ul class="footer-social-list">
        <li>
            <a class="social-link youtube" href="https://www.youtube.com/247sports/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" aria-hidden="true">
                    <title>YouTube</title>
                    <path d="M257.65,75.78h2.85c26.31,0.1,159.59,1.06,195.53,10.72c22.11,6,39.36,23.31,45.28,45.44c3.23,12.16,5.5,28.26,7.04,44.87   l0.32,3.33l0.7,8.32l0.26,3.33c2.08,29.25,2.34,56.64,2.37,62.63v2.4c-0.03,6.21-0.32,35.46-2.62,65.92l-0.26,3.36l-0.29,3.33   c-1.6,18.31-3.97,36.48-7.52,49.86c-5.91,22.14-23.16,39.46-45.28,45.44c-37.12,9.98-178.22,10.69-197.77,10.72h-4.54   c-9.89,0-50.79-0.19-93.67-1.66l-5.44-0.19l-2.78-0.13l-5.47-0.22l-5.47-0.22c-35.52-1.57-69.35-4.1-84.93-8.32   c-22.11-5.98-39.37-23.28-45.28-45.41c-3.55-13.34-5.92-31.55-7.52-49.86l-0.26-3.36l-0.26-3.33C1.04,301.06,0.17,279.33,0,257.59   v-3.94c0.06-6.88,0.32-30.66,2.05-56.9l0.22-3.3l0.1-1.66l0.26-3.33l0.7-8.32l0.32-3.33c1.54-16.61,3.81-32.74,7.04-44.87   c5.91-22.14,23.16-39.46,45.28-45.44c15.58-4.16,49.41-6.72,84.93-8.32l5.44-0.22l5.5-0.19l2.75-0.1l5.47-0.22   c30.46-0.98,60.93-1.52,91.4-1.63h6.18V75.78z M204.81,178.51V332.7l133.03-77.06L204.81,178.51z" fill="white" />
                </svg>
            </a>
        </li>
        <li>
            <a class="social-link facebook" href="https://www.facebook.com/247Sports/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Facebook</title>
                    <rect width="50" height="50" rx="25" fill="#1877F2"/>
                    <path d="M31 15H28C26.6739 15 25.4021 15.5268 24.4645 16.4645C23.5268 17.4021 23 18.6739 23 20V23H20V27H23V35H27V27H30L31 23H27V20C27 19.7348 27.1054 19.4804 27.2929 19.2929C27.4804 19.1054 27.7348 19 28 19H31V15Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </a>
        </li>
        <li>
            <a class="social-link twitterX" href="https://twitter.com/247Sports/" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1227">
                    <title>X</title>
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
                </svg>
            </a>
        </li>
        <li>
            <a class="social-link instagram" href="https://www.instagram.com/247sports/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <circle cx="25" cy="25" r="25" fill="#C32AA3"/>
                    <path d="M30 15H20C17.2386 15 15 17.2386 15 20V30C15 32.7614 17.2386 35 20 35H30C32.7614 35 35 32.7614 35 30V20C35 17.2386 32.7614 15 30 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29 24.3701C29.1234 25.2023 28.9813 26.0523 28.5938 26.7991C28.2063 27.5459 27.5932 28.1515 26.8416 28.5297C26.0901 28.908 25.2385 29.0397 24.4078 28.906C23.5771 28.7723 22.8098 28.3801 22.2149 27.7852C21.6199 27.1903 21.2277 26.4229 21.0941 25.5923C20.9604 24.7616 21.0921 23.91 21.4703 23.1584C21.8486 22.4069 22.4542 21.7938 23.201 21.4063C23.9478 21.0188 24.7978 20.8766 25.63 21.0001C26.4789 21.1259 27.2649 21.5215 27.8717 22.1284C28.4785 22.7352 28.8741 23.5211 29 24.3701Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.5 19.5H30.51" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </a>
        </li>
        <li>
            <a class="social-link tiktok" href="https://www.tiktok.com/@247sports?lang=en/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                    <title>TikTok</title>
                    <path d="M288,0h63.36c4.61,22.88,17.28,51.74,39.52,80.38C412.64,108.45,441.5,128,480,128v64c-56.1,0-98.24-26.05-128-58.53V352   c0,88.37-71.63,160-160,160S32,440.37,32,352s71.63-160,160-160v64c-53.02,0-96,42.98-96,96s42.98,96,96,96s96-42.98,96-96V0z" fill="white"/>
                </svg>
            </a>
        </li>
        <span class="internal-socials">
            <li>
                <a class="social-link podcast" href="https://247Sports.com/podcast/" aria-label="Podcasts">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <title>Podcast</title>
                        <rect width="50" height="50" rx="25" fill="#00259E"/>
                        <path d="M25 29C22.791 29 21 27.209 21 25V19C21 16.791 22.791 15 25 15C27.209 15 29 16.791 29 19V25C29 27.209 27.209 29 25 29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32 24V24.9C32 28.821 28.866 32 25 32C21.134 32 18 28.821 18 24.9V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.5 19H25.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24 22H26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.5 25.03H25.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 32V35" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 35H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </li>
            <li>
                <a class="social-link" href="//247sports.com/distribution/signup" aria-label="Newsletters">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Newsletter</title>
                        <rect width="50" height="50" rx="25" fill="#00259E"/>
                        <path d="M17.636 18.045H32.363C33.267 18.045 34 18.778 34 19.682V30.318C34 31.222 33.267 31.954 32.364 31.954H17.636C16.733 31.955 16 31.222 16 30.318V19.682C16 18.778 16.733 18.045 17.636 18.045V18.045Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.119 19.075L23.813 24.578C24.508 25.075 25.442 25.076 26.138 24.58L33.876 19.061" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </li>
            <li>
                <a class="social-link" href="//247sports.com/my/settings/alerts/" aria-label="Text Alerts">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Text Alert</title>
                        <rect width="50" height="50" rx="25" fill="#00259E"/>
                        <path d="M26.6 33H23.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 18C22.239 18 20 20.239 20 23V23.032V25.504C20 25.828 19.817 26.123 19.528 26.268L19.025 26.519C18.397 26.834 18 27.476 18 28.178C18 29.202 18.83 30.032 19.854 30.032H30.146C31.17 30.032 32 29.202 32 28.178C32 27.476 31.603 26.834 30.975 26.52L30.472 26.269C30.183 26.123 30 25.828 30 25.504V23.032V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.139 18.142C25.772 18.056 25.394 18 25 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.858 21.861C29.944 22.228 30 22.606 30 23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.1213 16.8787C32.2929 18.0502 32.2929 19.9497 31.1213 21.1213C29.9497 22.2929 28.0502 22.2929 26.8787 21.1213C25.7071 19.9497 25.7071 18.0502 26.8787 16.8787C28.0502 15.7071 29.9497 15.7071 31.1213 16.8787Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </li>
        </span>
    </ul>

    <ul class="footer-links-list">
        <li><a href="https://247sports.com/Article/About-CBT-Sports-LLC-dba-247Sports-116092" title="About 247Sports">About</a></li>
        <li><a href="https://247sports.com/Article/Customer-Support-3619" title="Contact Us">Contact Us</a></li>
        <li><a href="https://www.cbsinteractive.com/brands" title="Advertisers" target="_blank" rel="noopener noreferrer">Advertisers</a></li>
        <li><a href="https://help.247sports.com/s/" title="Help Center">Help Center</a></li>
        <li><a href="https://www.cbsinteractive.com/careers" title="Careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
        <li><a href="https://privacy.paramount.com/policy" title="Privacy Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        <li><a href="https://privacy.paramount.com/en/policy#additional-information-us-states" target="_blank" rel="noopener noreferrer" title="California Notice">California Notice</a></li>
        <li><a href="https://legalterms.cbsinteractive.com/terms-of-use" title="Terms of Use" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
        <li><a href="https://www.cbsinteractive.com/legal/cbsi/terms-of-use/247sports" target="_blank" rel="noopener noreferrer" title="Subscription Terms">Subscription Terms</a></li>
        <li><a href="/User/ToggleMobile" title="toggle mobile" data-js="togglemedium" rel="nofollow">Toggle Full/Mobile</a></li>
    </ul>
    <ul class="footer-links-list">
        <li><a class="ot-sdk-show-settings ccpa-link" title="Do Not Sell Info" target="_blank" rel="noopener noreferrer">Do Not Sell My Personal Information</a></li>
    </ul>

    <p class="footer-text">
        &copy; 2005-2024 CBS INTERACTIVE ALL RIGHTS RESERVED. CBS Sports is a registered trademark of CBS Broadcasting Inc.
    </p>
</footer>
<div class="hidden" data-value="89" id="daol"></div>

        <a class="timerlist_anc nimda" data-src="AC13CAF34E4AFDFE17F5BEB2A3BB21715D07302EED1F858A963ADCDF702A69049D078A72811711B6CED8FB827569FBABEE711B319828585952A059E67278D32870F92CDD983FC3BFD806B35362C815CB" href="#" id="timerlistload">Timer List</a>
        <section name="timerlist" data-react-component="timerlist"></section>

        <script src="https://assets.247sports.com/site/minify.js?type=javascript&amp;v=1527&amp;files=/scripts/skynet/shared/aws-sdk-2.176.0.min.js,/scripts/skynet/shared/jquery-1.7.2.min.js,/scripts/skynet/shared/jquery-ui-1.8.1.min.js,/scripts/skynet/shared/jquery.scroll.min.js,/scripts/skynet/shared/jquery.linkify.js,/scripts/skynet/shared/jquery.form.js,/scripts/skynet/shared/jquery.file.js,/scripts/skynet/shared/jquery.fancybox.js,/scripts/skynet/shared/jquery.tokeninput.js,/scripts/skynet/shared/jquery.json.min.js,/scripts/skynet/shared/jquery.timepicker.js,/scripts/skynet/shared/modernizer.js,/scripts/skynet/shared/global.js,/scripts/skynet/shared/skybox.js,/scripts/skynet/shared/site.js,/scripts/skynet/user/register.js,/scripts/skynet/bundle/menu.bundle.js,/scripts/skynet/bundle/menusearch.bundle.js,/scripts/skynet/bundle/config.bundle.js,/scripts/skynet/bundle/timerlist.bundle.js" type="text/javascript"></script><script src="https://assets.247sports.com/scripts/skynet/bundle/vendor.bundle.js?v=1527" type="text/javascript"></script><script src="https://assets.247sports.com/scripts/skynet/bundle/react.bundle.js?v=1527" type="text/javascript"></script><script src="https://assets.247sports.com/scripts/skynet/bundle/polyfills.bundle.js?v=1527" type="text/javascript"></script><script src="https://assets.247sports.com/site/minify.js?type=javascript&amp;v=1527&amp;files=/scripts/skynet/bundle/teamranking.bundle.js,/scripts/skynet/bundle/announcementbar.bundle.js" type="text/javascript"></script>


<!-- analytics/_simplecomponent.ascx -->


<script type="text/plain" class="optanon-category-2">
    // TODO: move this to an external file and have all instances use it.
    // TODO: move tealium at the same time
    // TODO: get all data standardized

    var arena = typeof(tfsPageArena) != 'undefined' ? tfsPageArena : null;
    var pageType = typeof(tfsPageType) != 'undefined' ? tfsPageType : null;
    var site = typeof(tfsPageSite) != 'undefined' ? tfsPageSite : null;
    var author = null;
    var authorName = null;
    var contentType = null;
    var vip = null;

    var articleType = 'boardpost';

    if (typeof firstArticleJson !== 'undefined') {
        articleType = firstArticleJson.typeString;
    }

    if (typeof($tfs.Content) != 'undefined') {
        author = $tfs.Content.Author;
        authorName = $tfs.Content.AuthorName;
        contentType = articleType;
        vip = $tfs.Content.VIP && $tfs.Content.VIP !== 'False' ? '1' : '0';
    }

    //quantcast
    var _qevents = _qevents || [];
    (function () {
        var elem = document.createElement('script');
        elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
        elem.async = true;
        elem.type = "text/javascript";
        elem.onload = function(){
            // attach the asynchronous pixel handler
            __qc.async = function(){
                __qc.qpixelsent = [];
                _qevents.push({
                    qacct: __qc.qopts.qacct
                });
                __qc.firepixels();
            }
        };
        var scpt = document.getElementsByTagName('script')[0];
        scpt.parentNode.insertBefore(elem, scpt);
    })();
    _qevents.push({ qacct: "p-4bFzyj4g9rit2", uid: "' + $tfs.User.Key + '" });
</script>


<!-- Ad Block Checker -->
<script src="https://assets.247sports.com/Scripts/SkyNet/Shared/ads.js"></script>

<!-- Can only run in the us -->
<script defer src="https://assets.247sports.com/scripts/skynet/shared/heatmap.js"></script>

<script>
    //newsletter
    var updateNewsletter = function () {
        if ($tfs.Guest.EmailSubscriptions == null) {
            $tfs.Guest.EmailSubscriptions = [];
        }
        if ($tfs.User.Status != "Guest") {
            $tfs.Guest.EmailSubscriptions = $tfs.User.EmailSubscriptions;
            $tfs.Guest.Newsletter = $tfs.User.Newsletter;
        }

        if ($tfs.Guest.Newsletter == "Unsubscribed") {
            var hasSubscribed = false;
            for (newsletter in $tfs.CurrentSite.EmailSubscriptions) {
                if ($tfs.Guest.EmailSubscriptions.indexOf($tfs.CurrentSite.EmailSubscriptions[newsletter]) > -1) {
                    hasSubscribed = true;
                    break;
                }
            }

            if (hasSubscribed) {
                $tfs.Guest.Newsletter = "Subscribed";
            }
        }

        if ($(location).attr('pathname').toLowerCase() === '/distribution/signup') {
            $tfs.Guest.Newsletter = "OptedOut";
        }
    };

    // Adblock check
    if (window.canRunAds === undefined){
        $tfs.User.AdBlock = true;
        document.body.setAttribute('data-adblock', "true");
    }
</script>

<script>
    //Start of tealium tag manager setup
    if (document.cookie.indexOf('247_geo') == -1) {
        if (window.heatmap) {
            var countryCode = 'US';
        } else {
            var countryCode = 'not-US';
        }
        var date = new Date;
        date.setFullYear(date.getFullYear() + 1);
        $247Global.setCookie('247_geo', countryCode, date);
    }

    if (typeof(tfsMobile) != 'undefined' && tfsMobile) {
        var device = 'mobile';
        var brand = 'mweb';
    } else {
        var device = 'desktop';
        var brand = 'desktop';
    }
    
        var rsid = 'cbsi247sportssite';
    
    if (typeof(tfsPageArena) != 'undefined') {
        var utag_data = {
            siteDeviceType: 'responsiveWeb|' + device,
            siteRsids: rsid + ', cbsicbsiall',
            sitePrimaryRsid: '' + rsid,
            brandPlatformId: '247sports_site_' + brand,
            siteType: 'responsive web|||' + device,
            siteHier: 'sports|' + tfsPageArena + '|' + tfsPageType,
            siteSection: 'sports|' + tfsPageArena + '|||' + tfsPageType + '|' + (typeof tfsSubPageType != 'undefined' ? tfsSubPageType : ""),
            pageTitle: '' + location.pathname,
            pageType: '' + tfsPageType,
            userStatus: ($tfs.User.Status.toLowerCase() == 'guest' ? 'anon' : $tfs.User.Status.replace(/\+/g, '_').toLowerCase()),
            pageViewGuid: surround.vguid,
            userType: ($tfs.User.Status.toLowerCase() == 'guest' ? 'anon' : 'registered'),
            userState: ($tfs.User.Activated.toLowerCase() == 'verified' ? 'authenticated' : 'not authenticated')
        };
    } else {
        var utag_data = {};
    }

    if(utag_data){
        utag_data.isAvia = true;
    } else{
        window.utag_data = {isAvia: true}
    }

    if ( $247Global.readCookie('247_geo') != false) {
        utag_data.siteEdition = $247Global.readCookie('247_geo');
    }

    if (typeof(tfsNoPageView) != 'undefined') {
        utag_data._noViewTrack = true;
    }

    var primaryName = '';
    var articleType = 'boardpost';
    
    if (typeof firstArticleJson !== 'undefined') {
        primaryName = firstArticleJson.author.author;
        articleType = firstArticleJson.typeString;
    }

    if (typeof($tfs.Content) != 'undefined') {
        utag_data._articleTitle = '' + $tfs.Content.Title;
        utag_data._authorList = '' + $tfs.Content.Author;
        utag_data._authorPrimaryName = '' + primaryName;
        utag_data.articlePubDate = $('.article-cnt.is-active') ? ''+$('.article-cnt.is-active').find('[data-published]').data('published') : '';
        utag_data.contentOrigin	= 'ugc';
        utag_data._articleId = '' + $tfs.Content.Key;
        utag_data._articleType = articleType;
        utag_data.isAutomated = false;

        if (typeof(tfsContentTags) != 'undefined') {
            var tagsA = ['ncaafbsecpow', 'ncaafbarmypow', 'ncaafbtraditions', 'ncaafbpowerrankings', 'luckhappens', 'ncaafbwhiparound', 'ncaafbweekendrecap', 'fubotv'];
            var tagsB = tfsContentTags.toLowerCase().split(',');
            var tagsC = [];

            for (var i = 0; i < tagsA.length; i++) {
                var currentTag = tagsA[i];
                if (tagsB.indexOf(currentTag) > -1) {
                    tagsC.push(currentTag);
                }
            }
            if (tagsC.length) {
                utag_data.trackingTags = tagsC;
            }

            if (tagsB.indexOf('audiencedevelopment') > -1) {
                utag_data.articleProducer = 'audience-acquisition';
            }
        }
    }

    //New javascript is way better.
    if (typeof purchaseFlow !== 'undefined') {
        if (typeof purchaseFlow.purchaseProduct !== 'undefined') {
            utag_data.purchaseProduct = purchaseFlow.purchaseProduct;
        }
        if (typeof purchaseFlow.purchaseProductName !== 'undefined') {
            utag_data.purchaseProductName = purchaseFlow.purchaseProductName;
        }
        if (typeof purchaseFlow.purchaseQuantity !== 'undefined') {
            utag_data.purchaseQuantity = purchaseFlow.purchaseQuantity;
        }
        if (typeof purchaseFlow.purchasePrice !== 'undefined') {
            utag_data.purchasePrice = purchaseFlow.purchasePrice;
        }
        if (typeof purchaseFlow.purchaseOrderId !== 'undefined') {
            utag_data.purchaseOrderId = purchaseFlow.purchaseOrderId;
        }
        if (typeof purchaseFlow.eventPurchaseStart !== 'undefined') {
            utag_data.eventPurchaseStart = purchaseFlow.eventPurchaseStart;
        }
        if (typeof purchaseFlow.eventPurchaseSuccess !== 'undefined') {
            utag_data.eventPurchaseSuccess = purchaseFlow.eventPurchaseSuccess;
        }
    }


    if (typeof tfsPageSite !== 'undefined' && typeof tfsPageArena !== 'undefined') {
        utag_data.teamName = tfsPageSite;
        utag_data.teamId = $tfs.CurrentSite.Key;
        utag_data.teamArena = tfsPageArena;
    }
    if ($tfs.User.Status != 'Guest') {
        utag_data.userId = ''+$tfs.User.Key;
    }


</script>

<script>
    // Call to load tealium
    
        var env = 'prod';
    
        (function(a,b,c,d){
            a='//tags.tiqcdn.com/utag/cbsi/247sportssite/' + env + '/utag.js';
            b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.defer=true;
            a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
        })();
</script>

<!-- Calling Score Strip -->
<script type="text/plain" class="optanon-category-5" async src="https://sportsfly.cbsistatic.com/bundles/sportsmediajs/js-build/common/iframe-embed-saag.js?v=1"></script>

<!-- Third Party Scripts loaded by CMP -->
<script defer src="https://platform.twitter.com/widgets.js" type="text/plain" class="optanon-category-5"></script>
<script defer src="https://platform.instagram.com/en_US/embeds.js" type="text/plain" class="optanon-category-5"></script>
</body>
</html>
