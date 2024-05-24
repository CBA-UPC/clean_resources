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
f.ensureModuleRegistered("fbevents.plugins.inferredevents",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),a;!(d=(a=g.next()).done);d=!0){c.push(a.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&g["return"]&&g["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};function i(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function j(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function k(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.identity",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function i(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.cookie",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.automaticmatchingforpartnerintegrations",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.prohibitedsources",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.unwanteddata",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.iabpcmaebridge",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b==="object"||typeof b==="function")?b:a}function i(a,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.browserproperties",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.clienthint",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.privacysandbox",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.lastexternalreferrer",function(){
return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});
f.ensureModuleRegistered("fbevents.plugins.cookiedeprecationlabel",function(){
return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("675944114126721", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { config.set("675944114126721", "inferredEvents", {"buttonSelector":null,"disableRestrictedData":false});
fbq.loadPlugin("inferredevents");
fbq.loadPlugin("identity");
instance.optIn("675944114126721", "InferredEvents", true);
fbq.loadPlugin("iwlbootstrapper");
instance.optIn("675944114126721", "IWLBootstrapper", true);
fbq.loadPlugin("cookie");
instance.optIn("675944114126721", "FirstPartyCookies", true);
fbq.loadPlugin("inferredevents");
instance.optIn("675944114126721", "InferredEvents", true);
fbq.loadPlugin("automaticmatchingforpartnerintegrations");
instance.optIn("675944114126721", "AutomaticMatchingForPartnerIntegrations", true);
config.set(null, "batching", {"batchWaitTimeMs":501,"maxBatchSize":10});
config.set(null, "microdata", {"waitTimeMs":500});
config.set("675944114126721", "prohibitedSources", {"prohibitedSources":[]});
fbq.loadPlugin("prohibitedsources");
instance.optIn("675944114126721", "ProhibitedSources", true);
config.set("675944114126721", "unwantedData", {"blacklisted_keys":{"PageView":{"cd":[],"url":["voters_phone"]}},"sensitive_keys":{}});
fbq.loadPlugin("unwanteddata");
instance.optIn("675944114126721", "UnwantedData", true);
config.set("675944114126721", "IABPCMAEBridge", {"enableAutoEventId":false});
fbq.loadPlugin("iabpcmaebridge");
instance.optIn("675944114126721", "IABPCMAEBridge", true);
config.set("675944114126721", "browserProperties", {"delayInMs":200,"enableEventSuppression":true,"enableBackupTimeout":true});
fbq.loadPlugin("browserproperties");
instance.optIn("675944114126721", "BrowserProperties", true);
config.set("675944114126721", "clientHint", {"delayInMs":200,"disableBackupTimeout":false});
fbq.loadPlugin("clienthint");
instance.optIn("675944114126721", "ClientHint", true);
fbq.loadPlugin("privacysandbox");
instance.optIn("675944114126721", "PrivacySandbox", true);
fbq.loadPlugin("lastexternalreferrer");
instance.optIn("675944114126721", "LastExternalReferrer", true);
fbq.loadPlugin("cookiedeprecationlabel");
instance.optIn("675944114126721", "CookieDeprecationLabel", true);instance.configLoaded("675944114126721"); }});dth:290px;height:193px}.a-image.-size-300 picture img{background-size:15%}.a-image.-size-400{width:408px}.a-image.-size-400 picture{width:408px;height:272px}.a-image.-size-400 picture img{background-size:15%}.a-image.-size-500{width:526px}.a-image.-size-500 picture{width:526px;height:351px}.a-image.-size-500 picture img{background-size:15%}.a-image.-size-600{width:644px}.a-image.-size-600 picture{width:644px;height:429px}.a-image.-size-600 picture img{background-size:15%}.a-image.-size-700{width:762px}.a-image.-size-700 picture{width:762px;height:508px}.a-image.-size-700 picture img{background-size:15%}.a-image.-size-800{width:880px}.a-image.-size-800 picture{width:880px;height:587px}.a-image.-size-800 picture img{background-size:15%}}:root{--color-accent: #dc1a21}body.path_root_100791,body.path_root_178851{--color-accent: #0071bb}.grid--r{display:flex;flex-wrap:wrap;margin-left:-1.7rem;margin-right:-1.7rem}.grid--c-1{flex:1 0 8.3333333333%;max-width:8.3333333333%}.grid--c-2{flex:1 0 16.6666666667%;max-width:16.6666666667%}.grid--c-3{flex:1 0 25%;max-width:25%}.grid--c-4{flex:1 0 33.3333333333%;max-width:33.3333333333%}.grid--c-5{flex:1 0 41.6666666667%;max-width:41.6666666667%}.grid--c-6{flex:1 0 50%;max-width:50%}.grid--c-7{flex:1 0 58.3333333333%;max-width:58.3333333333%}.grid--c-8{flex:1 0 66.6666666667%;max-width:66.6666666667%}.grid--c-9{flex:1 0 75%;max-width:75%}.grid--c-10{flex:1 0 83.3333333333%;max-width:83.3333333333%}.grid--c-11{flex:1 0 91.6666666667%;max-width:91.6666666667%}.grid--c-12{flex:1 0 100%;max-width:100%}[class*=grid--c-]{padding-left:1.7rem;padding-right:1.7rem}.grid--bordered .grid--c{border-right:1px solid rgba(0,0,0,.1)}.grid--bordered .grid--c:last-child{border-right:0}@font-face{font-family:"Austin News Deck Web";font-style:normal;font-weight:600;src:url("https://static.im-g.pl/wyborcza2020/fonts/AustinNewsDeck-Bold-Web.woff2") format("woff2");font-display:swap;font-stretch:normal}@font-face{font-family:"Austin News Deck Web";font-style:normal;font-weight:400;src:url("https://static.im-g.pl/wyborcza2020/fonts/AustinNewsDeck-Medium-Web.woff2") format("woff2");font-display:swap;font-stretch:normal}@font-face{font-family:"Austin News Deck Web";font-style:italic;font-weight:300;src:url("https://static.im-g.pl/wyborcza2020/fonts/AustinNewsDeck-Italic-Web.woff2") format("woff2");font-display:swap;font-stretch:normal}@font-face{font-family:"Austin News Deck Web";font-style:normal;font-weight:200;src:url("https://static.im-g.pl/wyborcza2020/fonts/AustinNewsDeck-Light-Web.woff2") format("woff2");font-display:swap;font-stretch:normal}.font-head-900{font:700 2.23em/1.096 Austin News Deck Web, Times New Roman, serif;letter-spacing:-0.5px}.font-head-900--white{color:#fff}.font-head-900--white-on-red-bg{background:#dc1a21}.font-head-900--white-on-black-bg{background:#000}.font-head-900--white-on-red-bg,.font-head-900--white-on-black-bg{color:#fff;position:relative;left:-0.43rem;display:inline;padding:0 .43rem .43rem;line-height:1.149;-webkit-box-decoration-break:clone;box-decoration-break:clone}.font-head-800{font:300 2.23em/1.3 Austin News Deck Web, Times New Roman, serif}.font-head-700{font:500 1.49em/1.135 Austin News Deck Web, Times New Roman, serif}.font-head-500{font:500 1.28em/1.49rem Austin News Deck Web, Times New Roman, serif}.font-head-300{font:500 0.96em/1.15 Austin News Deck Web, Times New Roman, serif;letter-spacing:-0.2px}.font-head-100{font:400 0.8em/1.3 Austin News Deck Web, Times New Roman, serif}.font-title-900{font:300 3.19em/1.1 Austin News Deck Web, Times New Roman, serif}.font-title-700{font:500 2.23em/1.1 Austin News Deck Web, Times New Roman, serif}.font-title-600{font:300 2.23em/1.2 Montserrat, Verdana, sans-serif}.font-head-section-500{font:300 1.7em/1.1 Montserrat, Verdana, sans-serif}.font-head-section-100{font:300 1.28em/1.1 Montserrat, Verdana, sans-serif}.font-number-big{font:700 5.31em/1.1 Austin News Deck Web, Times New Roman, serif}.font-category{font:600 0.64em/1 Montserrat, Verdana, sans-serif;display:inline-block;color:#dc1a21;color:var(--color-accent);text-transform:uppercase;padding:6px 0}.font-category--white{color:#fff}.font-author{font:600 0.64em/1 Montserrat, Verdana, sans-serif;color:#8b8b8b;text-transform:uppercase}.font-author--white{color:#fff}.font-author-opinion{font:300 0.85em/1.25 Montserrat, Verdana, sans-serif;text-transform:capitalize}.font-button{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif}.font-hp-lead{font:400 0.85em/1.24 Georgia, serif;color:#484848}.font-hp-lead--white{color:#fff}.font-lead{font:500 1.28em/1.5 Austin News Deck Web, Times New Roman, serif}.font-text{font:400 1.12em/1.65 Georgia, serif}.font-caption{font:400 0.64em/1.33 Georgia, serif;color:#8b8b8b}.font-caption--white{color:#fff}.font-caption--red-point,.font-caption--white-point{position:relative;display:inline-block;width:4px;height:4px;margin-right:.43rem;bottom:2px}.font-caption--red-point::before,.font-caption--white-point::before{position:absolute;content:"";top:4px;left:0;width:4px;height:4px;border-radius:50%;transform:translateY(50%)}.font-caption--red-point::before{background:#dc1a21}.font-caption--white-point::before{background:#fff}.font-quotation-500{font:400 1.7em/1.3 Austin News Deck Web, Times New Roman, serif}*,html,body,div,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,a,img,q,s,strong,sub,sup,b,u,i,center,dl,dt,dd,ol,ul,li,form,label,table,tbody,tfoot,thead,tr,th,td,article,aside,figure,figcaption,footer,header,menu,nav,section,summary,audio,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}*,*::before,*::after{box-sizing:border-box}a{text-decoration:none;color:inherit;cursor:pointer}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::before,blockquote::after,q::before,q::after{content:none}table{border-collapse:collapse;border-spacing:0}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none}html{scroll-behavior:smooth}[hidden]{display:none}.btn{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #d0d0d0;border-radius:3px;color:#000;background-color:#fff;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn:hover{background-color:#000;color:#fff}.btn--accent{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #ab95bc;border-radius:3px;color:#ab95bc;background-color:#fff;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--accent:hover{background-color:#ab95bc;color:#fff}.btn--red{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #dc1a21;border-radius:3px;color:#dc1a21;background-color:#fff;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--red:hover{background-color:#dc1a21;color:#fff}.btn--filled{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #000;border-radius:3px;color:#fff;background-color:#000;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--filled:hover{background-color:#fff;color:#000}.btn--filled:hover{background-color:#dc1a21;border-color:#dc1a21;color:#fff}.btn--ghost{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #d0d0d0;border-radius:3px;color:#000;background-color:transparent;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--ghost:hover{background-color:#000;color:transparent}.btn--ghost:hover{background-color:#000;border-color:#000;color:#fff}.btn--accent-filled{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #ab95bc;border-radius:3px;color:#fff;background-color:#ab95bc;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--accent-filled:hover{background-color:#fff;color:#ab95bc}.btn--accent-filled:hover{background-color:#000;border-color:#000;color:#fff}.btn--red-filled{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #dc1a21;border-radius:3px;color:#fff;background-color:#dc1a21;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s}.btn--red-filled:hover{background-color:#fff;color:#dc1a21}.btn--red-filled:hover{background-color:#000;border-color:#000;color:#fff}.btn--radius{border-radius:1.01rem}.btn--img{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;align-items:center;text-transform:uppercase;grid-gap:.48rem;gap:.48rem}.btn--img:hover{text-decoration:underline}.btn--img>img,.btn--img>svg{width:1.22rem;height:1.22rem;stroke:#15181b;fill:none}.btn--clear{font:600 0.64rem/1.1 Montserrat, Verdana, sans-serif;display:inline-flex;align-items:center;justify-content:center;height:2.02rem;padding:0 1.06rem;border:1px solid #000;border-radius:3px;color:#000;background-color:#fff;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background-color .25s,color .25s,border-color .25s;border:none}.btn--clear:hover{background-color:#000;color:#fff}.btn--clear:hover{background-color:#fff;color:#dc1a21;border:none}.btn--accent:disabled,.btn--red:disabled,.btn--filled:disabled,.btn--accent-filled:disabled,.btn--red-filled:disabled{pointer-events:none;background-color:#e5e5e5;border-color:#e5e5e5;color:#fff}.img--hover{position:relative}.img--hover::after{position:absolute;top:0;right:0;bottom:0;left:0;display:block;content:"";background-color:#000;opacity:0;transition:opacity .25s;pointer-events:none;z-index:1}.img--hover:hover::after{opacity:.3}.img--fluid{position:relative;display:block;overflow:hidden;width:100%;background-color:#f0efec}.img--fluid::before{padding-bottom:66.666%;content:"";display:block}.img--fluid>img{position:absolute;top:0;left:50%;display:block;height:100%;transform:translateX(-50%)}.img--round{border-radius:50%}.img--round::before{padding-bottom:100%}.img--round::after{border-radius:inherit}.img--square::before{padding-bottom:100%}.img [data-src],.img [data-src-mobile]{visibility:hidden}.m-{margin:.43rem !important}.mt-{margin-top:.43rem !important}.mr-{margin-right:.43rem !important}.mb-{margin-bottom:.43rem !important}.ml-{margin-left:.43rem !important}.mv-{margin-top:.43rem !important;margin-bottom:.43rem !important}.mh-{margin-left:.43rem !important;margin-right:.43rem !important}.m{margin:.85rem !important}.mt{margin-top:.85rem !important}.mr{margin-right:.85rem !important}.mb{margin-bottom:.85rem !important}.ml{margin-left:.85rem !important}.mv{margin-top:.85rem !important;margin-bottom:.85rem !important}.mh{margin-left:.85rem !important;margin-right:.85rem !important}.m\+{margin:1.28rem !important}.mt\+{margin-top:1.28rem !important}.mr\+{margin-right:1.28rem !important}.mb\+{margin-bottom:1.28rem !important}.ml\+{margin-left:1.28rem !important}.mv\+{margin-top:1.28rem !important;margin-bottom:1.28rem !important}.mh\+{margin-left:1.28rem !important;margin-right:1.28rem !important}.m\+\+{margin:1.7rem !important}.mt\+\+{margin-top:1.7rem !important}.mr\+\+{margin-right:1.7rem !important}.mb\+\+{margin-bottom:1.7rem !important}.ml\+\+{margin-left:1.7rem !important}.mv\+\+{margin-top:1.7rem !important;margin-bottom:1.7rem !important}.mh\+\+{margin-left:1.7rem !important;margin-right:1.7rem !important}.m\+\+\+{margin:2.55rem !important}.mt\+\+\+{margin-top:2.55rem !important}.mr\+\+\+{margin-right:2.55rem !important}.mb\+\+\+{margin-bottom:2.55rem !important}.ml\+\+\+{margin-left:2.55rem !important}.mv\+\+\+{margin-top:2.55rem !important;margin-bottom:2.55rem !important}.mh\+\+\+{margin-left:2.55rem !important;margin-right:2.55rem !important}.p-{padding:.43rem !important}.pt-{padding-top:.43rem !important}.pr-{padding-right:.43rem !important}.pb-{padding-bottom:.43rem !important}.pl-{padding-left:.43rem !important}.pv-{padding-top:.43rem !important;padding-bottom:.43rem !important}.ph-{padding-left:.43rem !important;padding-right:.43rem !important}.p{padding:.85rem !important}.pt{padding-top:.85rem !important}.pr{padding-right:.85rem !important}.pb{padding-bottom:.85rem !important}.pl{padding-left:.85rem !important}.pv{padding-top:.85rem !important;padding-bottom:.85rem !important}.ph{padding-left:.85rem !important;padding-right:.85rem !important}.p\+{padding:1.28rem !important}.pt\+{padding-top:1.28rem !important}.pr\+{padding-right:1.28rem !important}.pb\+{padding-bottom:1.28rem !important}.pl\+{padding-left:1.28rem !important}.pv\+{padding-top:1.28rem !important;padding-bottom:1.28rem !important}.ph\+{padding-left:1.28rem !important;padding-right:1.28rem !important}.p\+\+{padding:1.7rem !important}.pt\+\+{padding-top:1.7rem !important}.pr\+\+{padding-right:1.7rem !important}.pb\+\+{padding-bottom:1.7rem !important}.pl\+\+{padding-left:1.7rem !important}.pv\+\+{padding-top:1.7rem !important;padding-bottom:1.7rem !important}.ph\+\+{padding-left:1.7rem !important;padding-right:1.7rem !important}.p\+\+\+{padding:2.55rem !important}.pt\+\+\+{padding-top:2.55rem !important}.pr\+\+\+{padding-right:2.55rem !important}.pb\+\+\+{padding-bottom:2.55rem !important}.pl\+\+\+{padding-left:2.55rem !important}.pv\+\+\+{padding-top:2.55rem !important;padding-bottom:2.55rem !important}.ph\+\+\+{padding-left:2.55rem !important;padding-right:2.55rem !important}.d-flex{display:flex !important}.d-block{display:block !important}.d-none{display:none !important}.d-hidden{visibility:hidden;display:block;width:0;height:0;float:left}.lb{border-bottom:1px solid rgba(0,0,0,.1)}.lb\+{border-bottom:1px solid #484848}.lb\+\+{border-bottom:4px solid #000}.lb3{position:relative;padding-bottom:8px;border-bottom:1px solid #484848}.lb3::after{position:absolute;left:0;right:0;bottom:4px;height:4px;display:block;border-top:1px solid #484848;box-sizing:content-box;content:"";border-bottom:1px solid #484848}.l{border:1px solid rgba(0,0,0,.1)}.section-header{font:300 1.7em/1.1 Montserrat, Verdana, sans-serif;position:relative;padding-bottom:1.28rem;color:#000;text-align:center}.section-header::after{position:absolute;right:0;bottom:0;left:0;width:100%;display:block;border-bottom:4px solid #000;content:""}.section-header>a{border-bottom:1px solid transparent}.section-header>a:hover{border-bottom-color:currentColor}.section-header--mobile{margin-right:-20px;margin-left:-20px}.box-divider{position:relative}.box-divider:after{position:absolute;display:block;content:"";width:1px;top:5.74rem;bottom:2.13rem;left:0;background-color:#e5e5e5}
@-webkit-keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}html{font-size:16px;min-width:1220px;width:100%}@media(min-width: 1440px){html{font-size:18.8235294118px}}body,.safari_mobile,.safari{position:relative;margin:0;font-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}.container{margin-left:auto;margin-right:auto;padding-left:1.7rem;padding-right:1.7rem;max-width:75.24rem;width:100%;background-color:#fff;position:relative;z-index:0}.container-bkg{background-color:#f0efec;position:relative;z-index:1}.container-bkg .container{background-color:#f0efec}.header-sticky{position:-webkit-sticky;position:sticky;top:0;transform:translateZ(0);z-index:400}.wyborcza-player{position:relative;display:block;width:100%;height:0;padding-bottom:56.25%;background:#000}[data-mc-placeholder-id]:not(.is-initialized){display:none}
@-webkit-keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.cap-navigation{background-color:#fff}.cap-navigation--level1{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;justify-content:center}.cap-navigation--level1-item{margin:0 .4em;position:relative;z-index:0}.cap-navigation--level1-item::before{background-color:var(--color-accent);bottom:0;content:"";height:2px;left:50%;position:absolute;transition:left .2s ease,width .2s ease;width:0}.cap-navigation--level1-item:hover::before,.cap-navigation--level1-item.active::before{left:0;width:100%}.cap-navigation--level1-link{align-items:center;color:#000;cursor:pointer;display:flex;font:500 0.64em/24px Montserrat, Verdana, sans-serif;padding:1em 0;text-transform:uppercase}.cap-navigation--level1-link>svg{height:24px;margin-right:.43rem;width:24px}.cap-navigation--level2{display:flex;flex-wrap:wrap;justify-content:center;max-height:0;overflow:hidden;padding:0 .85rem;transition:max-height .3s ease,padding .3s ease}.cap-navigation--level2.active{max-height:9em;padding:.85rem}.cap-navigation--level2-item{margin:.2em .6em;position:relative;z-index:0}.cap-navigation--level2-item::before{background-color:#000;bottom:0;content:"";height:2px;left:50%;position:absolute;transition:left .2s ease,width .2s ease;width:0}.cap-navigation--level2-item:hover::before,.cap-navigation--level2-item.active::before{left:0;width:100%}.cap-navigation--level2-link{color:#000;cursor:pointer;display:block;font:400 0.96em/1.1 Austin News Deck Web, Times New Roman, serif;padding:.4em 0}#wyborczaHat{display:none}.cap{background-color:#fff;position:relative}.cap--progress-bar-outer{background-color:#e5e5e5;bottom:-4px;display:none;left:0;height:4px;pointer-events:none;position:absolute;width:100%}body[data-type="7"] .cap--small .cap--progress-bar-outer{display:block}.cap--progress-bar-inner{background-color:#dc1a21;height:100%;transform:translate3d(0, 0, 0);transition:width 50ms;width:0}.cap--small{box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.cap--container{border-bottom:1px solid #000;display:flex}body[data-type="0"] .cap--container{border-bottom-width:4px}body .cap--small .cap--container{border-bottom-width:0}.cap--left{align-items:center;display:flex;height:50px;width:29%}.cap--center{flex-grow:1}.cap--right{align-items:center;display:flex;height:50px;justify-content:flex-end;width:29%}.cap--reader-link{align-items:center;color:#484848;display:flex;height:50px;font:400 0.8em/1.1 Georgia, serif;margin-left:30px}@media(min-width: 1440px){.cap--reader-link{margin-left:40px}}.cap--reader-link>img{margin-right:.43rem}.cap--user-action{display:none;margin-right:30px}.cap--small .cap--user-action:not(:empty){display:block}.cap .cap-message-container{will-change:opacity,max-height,min-height;overflow:hidden;height:1px;max-height:15.94rem;min-height:2.87rem;transition:max-height 1s ease-in,min-height 1s ease-in}.cap .cap-message-container .cap-message{overflow:hidden;height:100%}.cap .cap-message-container.cap-message-container--hide{max-height:0rem;min-height:0rem;transition:max-height 1s ease-out,min-height 1s ease-out}.cap-hamburger{display:flex;height:50px;position:relative}.cap-hamburger--icon{align-items:center;background-color:transparent;color:#000;cursor:pointer;display:flex}.cap-hamburger--icon:focus{outline:none}.cap-hamburger--icon>svg{height:24px;width:24px}.cap-hamburger--menu{left:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .2s ease,top .2s ease;top:25px;z-index:1}.active>.cap-hamburger--menu{opacity:1;pointer-events:all;top:45px}.cap-hamburger--menu-level1{background-color:#fff;border:1px solid rgba(0,0,0,.1);box-shadow:0 4px 8px 0 rgba(0,0,0,.1);display:block;padding:.43rem 20px;width:300px}.cap-hamburger--menu-level1-item:nth-child(n+2){border-top:1px solid rgba(0,0,0,.1)}.cap-hamburger--menu-level1-link,.cap-hamburger--menu-level1-more{position:relative;z-index:0;color:#000;cursor:pointer;display:block;font:500 0.74em/1.4 Montserrat, Verdana, sans-serif;padding:.43rem 0}.cap-hamburger--menu-level1-link::before,.cap-hamburger--menu-level1-more::before{background-color:rgba(0,0,0,.1);bottom:0;content:"";left:50%;opacity:.5;position:absolute;top:0;transition:left .3s ease,opacity .3s ease,width .3s ease;width:0;z-index:-1}.active>.cap-hamburger--menu-level1-link::before,.active>.cap-hamburger--menu-level1-more::before{opacity:1}.active>.cap-hamburger--menu-level1-link::before,.cap-hamburger--menu-level1-link:hover::before,.active>.cap-hamburger--menu-level1-more::before,.cap-hamburger--menu-level1-more:hover::before{left:-20px;width:calc(100% + 40px)}.cap-hamburger--menu-level1-more{padding-right:30px;position:relative}.cap-hamburger--menu-level1-more::after{border-right:1px solid #000;border-top:1px solid #000;content:"";display:block;height:10px;pointer-events:none;position:absolute;right:10px;top:calc(50% - 5px);transform:rotate(45deg);width:10px}.cap-hamburger--menu-level2{background-color:#fff;border:1px solid rgba(0,0,0,.1);border-left:none;bottom:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.1);grid-column-gap:40px;-moz-column-gap:40px;column-gap:40px;display:block;left:280px;opacity:0;padding:.43rem 20px;pointer-events:none;position:absolute;top:0;transition:left .2s ease,opacity .2s ease;z-index:-1}.cap-hamburger--menu-level2.columns-2{-moz-columns:2;columns:2}.active>.cap-hamburger--menu-level2{left:300px;opacity:1;pointer-events:all}.cap-hamburger--menu-level2-link{position:relative;z-index:0;color:#484848;cursor:pointer;display:flex;font:500 0.74em/1.3 Montserrat, Verdana, sans-serif;padding:.43rem 0;width:180px}.cap-hamburger--menu-level2-link::before{background-color:rgba(0,0,0,.1);bottom:0;content:"";left:50%;opacity:.5;position:absolute;top:0;transition:left .3s ease,opacity .3s ease,width .3s ease;width:0;z-index:-1}.active>.cap-hamburger--menu-level2-link::before{opacity:1}.active>.cap-hamburger--menu-level2-link::before,.cap-hamburger--menu-level2-link:hover::before{left:-20px;width:calc(100% + 40px)}.cap-message{align-items:center;display:flex;justify-content:center;background:#fff}.cap-message__content{align-items:center;background:#f7f6f5;display:flex;justify-content:center;padding:.43rem;width:100%;height:100%}.cap-message__content>*{margin:0 .43rem}.cap-message-container{min-height:30px}.cap-message-container-large{min-height:54px}.cap-message--yellow{background-color:#fffa97}.cap-message--orange{background-color:#ffa156}.cap-message:empty,.cap--small>.cap-message{display:none}.cap-vignette{align-items:center;display:flex;flex-direction:column;height:120px;justify-content:center;overflow:hidden;transition:height .3s ease}.cap-vignette--logo-large,.cap-vignette--logo-image{display:block;height:50px}.cap-vignette--logo-small{display:none}.cap-vignette--text-large{color:#15181b;display:block;font:400 1.49em/1.1 Austin News Deck Web, Times New Roman, serif;text-transform:uppercase}.cap-vignette--text-small{color:#15181b;display:block;font:400 0.64em/1.1 Austin News Deck Web, Times New Roman, serif;text-transform:uppercase}.cap--small .cap-vignette{flex-direction:row;height:50px}.cap--small .cap-vignette--logo-large,.cap--small .cap-vignette--logo-image{height:30px}.cap--small .cap-vignette--text-large{border-left:1px solid #000;font-size:1.17em;line-height:30px;height:30px;margin-left:.43rem;padding-left:.43rem}.cap--small .cap-vignette--text-small{display:none}.double-logo{display:flex;justify-content:center;align-items:center}.double-logo__first,.double-logo__second{flex:0 1 auto;align-self:center}.double-logo__second{position:relative;margin-left:32px;height:66px;width:238px;display:flex;align-items:center;justify-content:flex-start}.double-logo__second picture{display:flex;width:100%;height:100%}.double-logo__second img{display:block;max-height:100%;max-width:100%}.double-logo__second ::before{position:absolute;top:10px;left:-16px;content:"";display:block;width:1px;height:46px;background-color:#000}.cap--small .double-logo__second{position:relative;margin-left:32px;width:107px;height:30px;display:flex;align-items:center;justify-content:flex-start}.cap--small .double-logo__second img{display:block;max-width:100%;max-height:100%}.cap--small .double-logo__second ::before{top:0px;height:30px}.cap-account{display:flex;height:50px;position:relative}.cap-account--icon{align-items:center;background-color:transparent;color:#484848;cursor:pointer;display:flex;font:400 0.8em/1.1 Georgia, serif}.cap-account--icon:focus{outline:none}.cap-account--icon::after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #484848;content:"";height:0;margin-left:.43rem;width:0}.cap-account--icon>svg{height:32px;margin-left:.43rem;width:32px}.cap-account--menu{opacity:0;pointer-events:none;position:absolute;right:0;transition:opacity .2s ease,top .2s ease;top:25px;z-index:1}.active>.cap-account--menu{opacity:1;pointer-events:all;top:45px}.cap-account--menu-level1{background-color:#fff;border:1px solid rgba(0,0,0,.1);box-shadow:0 4px 8px 0 rgba(0,0,0,.1);display:block;padding:.43rem 20px;width:300px}.cap-account--menu-level1-line{border-top:1px solid rgba(0,0,0,.1);margin:.43rem 0}.cap-account--menu-level1-link{position:relative;z-index:0;color:#000;cursor:pointer;display:block;font:500 0.74em/1.4 Montserrat, Verdana, sans-serif;padding:.43rem 0}.cap-account--menu-level1-link::before{left:50%;width:0;background-color:rgba(0,0,0,.1);bottom:0;content:"";opacity:.5;position:absolute;transition:left .3s ease,opacity .3s ease,width .3s ease;top:0;z-index:-1}.active>.cap-account--menu-level1-link::before{opacity:1}.active>.cap-account--menu-level1-link::before,.cap-account--menu-level1-link:hover::before{left:-20px;width:calc(100% + 40px)}.cap-account--menu-level1-chip{font:600 0.64rem/0.85rem Montserrat, Verdana, sans-serif;display:inline-block;margin-left:.32rem;bottom:.05rem}.cap-account--menu-level1-chip[data-chip]{position:relative}.cap-account--menu-level1-chip[data-chip]::before{content:attr(data-chip);background-color:#8b8b8b;border-radius:9px;color:#fff;display:flex;justify-content:center;align-items:center;padding:0 4px;min-width:18px;height:18px}.cap-search{display:flex;height:50px;margin-left:30px;position:relative}@media(min-width: 1440px){.cap-search{margin-left:40px}}.cap-search--icon{align-items:center;background-color:transparent;color:#000;cursor:pointer;display:flex;position:relative;z-index:5}.cap-search--icon:focus{outline:none}.cap-search--icon>svg{height:24px;width:24px}.cap-search--menu{background-color:#fff;border:1px solid #fff;left:-20px;opacity:0;overflow:hidden;padding:3px 20px;pointer-events:none;position:absolute;top:3px;transition:border-color .2s ease,opacity .2s ease;width:340px;z-index:4}@media(min-width: 1440px){.cap-search--menu{width:360px}}.cap-search.active .cap-search--menu{opacity:1;pointer-events:all}.cap-search.border .cap-search--menu{border-color:rgba(0,0,0,.1);box-shadow:0 4px 8px 0 rgba(0,0,0,.1)}.cap-search--menu-form{display:block;padding:0 1.7rem 2px;position:relative}.cap-search--menu-form::after{background-color:#000;bottom:0;content:"";display:block;height:2px;left:50%;position:absolute;transition:left .2s ease,width .2s ease;width:0}.cap-search.active .cap-search--menu-form::after{left:0;width:100%}.cap-search--menu-form-input{background-color:#fff;color:#484848;font:300 0.74em/24px Montserrat, Verdana, sans-serif;padding:7px 0;width:100%}.cap-search--menu-form-input:focus{outline:none}.cap-search--menu-close{align-items:center;background-color:transparent;cursor:pointer;display:flex;opacity:0;position:absolute;right:10px;top:9px;transition:opacity .2s ease,right .2s ease;z-index:5}.cap-search.active .cap-search--menu-close{opacity:1;right:20px}.cap-search--menu-close:focus{outline:none}.cap-search--menu-close>svg{height:24px;width:24px}.cap-search--list{display:none;margin:.43rem 0}.cap-search.border .cap-search--list{display:block}.cap-search--list-item-link{position:relative;z-index:0;color:#484848;cursor:pointer;display:block;font:500 0.74em/18px Montserrat, Verdana, sans-serif;padding:.43rem 1.7rem}.cap-search--list-item-link::before{background-color:rgba(0,0,0,.1);bottom:0;content:"";left:50%;opacity:.5;position:absolute;top:0;transition:left .3s ease,opacity .3s ease,width .3s ease;width:0;z-index:-1}.active>.cap-search--list-item-link::before{opacity:1}.active>.cap-search--list-item-link::before,.cap-search--list-item-link:hover::before{left:-20px;width:calc(100% + 40px)}.cap-search--list-item-link span{font-weight:300}.cap-search--more{display:none;margin:0 0 10px;text-align:center}.cap-search.border .cap-search--more{display:block}
@-webkit-keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-1__item{padding-top:0;padding-bottom:0}.main-topic-1__item:nth-child(2){border-right:1px solid #484848;border-left:1px solid #484848}.main-topic-2__item:first-child{border-right:5px solid #fff}.main-topic-2__item:nth-child(2){border-right:5px solid #fff;border-left:5px solid #fff}.main-topic-2__item:nth-child(3){border-left:5px solid #fff}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-3__item-big .main-topic-3__text-wrapper,.main-topic-3__item-big .main-topic-3__lead{width:auto}.grid--c-br-dark{border-right:1px solid #484848}.main-topic-3__item-big--empty .main-topic-3__placeholder.with-margin .placeholder{margin-left:1.7rem;margin-right:1.7rem}.main-topic-4__item-big{border-right:5px solid #fff}.main-topic-4__item-big .main-topic__with-photo .main-topic-4__text-wrapper,.main-topic-4__item-big .main-topic__with-photo .main-topic-4__lead{width:16.55rem}.main-topic-4__item{border-left:5px solid #fff}.main-topic-4__lead{width:33rem}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}#main-topic-5{height:100%;min-height:28.7rem}.main-topic-5__left{border-right:1px solid #484848}.main-topic-5__item-big .main-topic-5__text-wrapper{position:relative}.main-topic-5__item-big .main-topic-5__lead,.main-topic-5__item-big .lb{width:13.65rem}.main-topic-5__item-big .main-topic-5__photoholder{position:absolute;top:0;right:0;display:block}.main-topic-5__item-big .main-topic-5__photoholder .photoholder__object--normal{display:block;margin-left:auto}.main-topic-5__item-big .lb{display:block;border-bottom-color:#e5e5e5}.main-topic-5__item-opinion .main-topic__with-photo{width:13.65rem}.main-topic-5__item-opinion .main-topic-5__title{width:9.45rem}.main-topic-5__item .main-topic-5__title{margin-top:.215rem}.main-topic-6__item-big .main-topic__with-photo .main-topic-6__text-wrapper,.main-topic-6__item-big .main-topic__with-photo .main-topic-6__lead{width:auto}.main-topic-6__item .main-topic-6__title{width:17.4rem}.main-topic-6__item .author-component{margin-bottom:.85rem}.main-topic-6__item:not(:last-of-type){border-bottom:1px solid #e5e5e5}.main-topic-6__item:last-of-type{position:relative;padding-bottom:8px;border-bottom:1px solid #e5e5e5}.main-topic-6__item:last-of-type::after{position:absolute;left:0;right:0;bottom:4px;height:4px;display:block;border-top:1px solid #e5e5e5;box-sizing:content-box;content:"";border-bottom:1px solid #e5e5e5}.main-topic-7__text-wrapper{width:auto}.main-topic-8{min-height:430px}.main-topic-8__item-big .main-topic__with-photo{position:relative}.main-topic-8__item-big .main-topic__with-photo .main-topic-8__text-wrapper{width:35.06rem}.main-topic-8__item-big .main-topic-8__photoholder{position:absolute;top:0;right:0;display:block}.main-topic-8__item{width:35.06rem;position:relative;padding-bottom:8px;border-bottom:1px solid #e5e5e5}.main-topic-8__item::after{position:absolute;left:0;right:0;bottom:4px;height:4px;display:block;border-top:1px solid #e5e5e5;box-sizing:content-box;content:"";border-bottom:1px solid #e5e5e5}.main-topic-8__item .main-topic__with-photo{width:35.06rem}.main-topic-8__item .main-topic-8__text-wrapper{width:100%}.main-topic-9__lead{width:21.7rem}.main-topic-10__text-wrapper{width:44.65rem}.main-topic-10__lead{width:21.7rem}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-11-container{position:relative;padding-bottom:0}.main-topic-11-container .lb{width:17rem}.main-topic-11-container .main-topic-11 .live-teaser-wrapper{display:inline-block;width:17.53rem;margin-bottom:.85rem}.main-topic-11-container .main-topic-11__text-wrapper,.main-topic-11-container .main-topic-11__lead{width:17.53rem}.main-topic-11-container .main-topic-11__photoholder{float:right;position:relative}.main-topic-11-container .main-topic-11__photoholder.with-z-index{z-index:10}.main-topic-11-container .main-topic-11__item-big{position:relative}.main-topic-11-container .main-topic-11__item-big .main-topic__with-photo{display:block}.main-topic-11-container .main-topic-11__item-big .main-topic__with-photo .main-topic-11__photoholder--small{display:block;float:right}.main-topic-11-container .main-topic-11__item-big .main-topic__with-photo .main-topic-11__photoholder--small .photoholder__object--small{height:350px !important}.main-topic-11-container .main-topic-11__item-big .main-topic__with-photo--position{position:relative;width:100%}.main-topic-11-container .main-topic-11__item-big .main-topic__with-photo--position.with-z-index{z-index:1}.main-topic-11-container .main-topic-11__item--narrow{width:17.53rem;float:left}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-12 .main-topic-6__item.video .youtube-embed{position:relative;display:block;width:100%;padding-bottom:56.56%}.main-topic-12 .main-topic-6__item.video .youtube-embed iframe{position:absolute;top:0;right:0;bottom:0;left:0}.main-topic-12 .main-topic-6__item:last-of-type.video{border-bottom:0;padding-bottom:0}.main-topic-12 .main-topic-6__item:last-of-type.video::after{display:none}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-13__items-four-line{position:relative}.main-topic-13__items-four-line__item{position:relative;border-right:1px solid #e5e5e5}.main-topic-13__items-four-line__item:last-child{border-right:0}.main-topic-13__items-four-line::before{position:absolute;top:0;left:1.7rem;right:1.7rem;width:auto;height:1px;background-color:#484848;content:""}.main-topic-13 .main-topic-6__item.video .youtube-embed{position:relative;display:block;width:100%;padding-bottom:56.56%}.main-topic-13 .main-topic-6__item.video .youtube-embed iframe{position:absolute;top:0;right:0;bottom:0;left:0}.main-topic-13 .main-topic-6__item:last-of-type.video{border-bottom:0;padding-bottom:0}.main-topic-13 .main-topic-6__item:last-of-type.video::after{display:none}.main-topic__background{background-color:#f0efec;position:relative;padding:2.13rem 0}.main-topic__background--red{background-color:#dc1a21}.main-topic__container{margin-left:auto;margin-right:auto;padding-left:1.7rem;padding-right:1.7rem;max-width:75.24rem;width:100%}.main-topic__container [class*=font-head] a:hover,.main-topic__container [class*=-lead] a:hover,.main-topic__container [class*=_lead] a:hover{border-bottom:1.5px solid #15181b}.main-topic__container .item__label{display:flex}.main-topic__container .item__label .document-label{align-self:center}.main-topic__container .font-head-300{font-weight:400}.main-topic__container .font-head-700{font-weight:400;letter-spacing:-0.02rem}.main-topic__container .author-component .ac__headline{margin-top:.43rem}.main-topic__container .a-image picture img{-o-object-fit:cover;object-fit:cover}.main-topic__container .a-image.svg picture img{-o-object-fit:contain;object-fit:contain}.main-topic__container [class*="--white-on-red-bg"],.main-topic__container [class*="--white-on-black-bg"]{line-height:1.199}.main-topic__container [class*="--white-on-red-bg"] a:hover,.main-topic__container [class*="--white-on-black-bg"] a:hover{border-bottom:1.5px solid #fff}.main-topic__container [class*=__category] a:hover{color:#15181b}.main-topic__container .document-label--with-link{padding:0}.main-topic__container .document-label--with-link a{display:block;padding:6px 7px 6px 8px}.main-topic__container .document-label--with-link:hover{background-color:#000}.main-topic__with-photo{display:flex;justify-content:space-between}.main-topic__author{margin-top:.85rem}.main-topic-locale .main-topic-8__item-big .main-topic-8__photoholder{display:block;position:static}.main-topic-locale .main-topic-8__item-big .font-head-900--white-on-black-bg{display:block}.main-topic-locale .main-topic-8__item-big .font-head-900--white-on-red-bg{display:block}
@-webkit-keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{opacity:0}}.main-topic-locale{background:#f0efec}.main-topic-locale-wrapper{background:#f0efec;display:grid;grid-template-columns:46.75rem 1fr;grid-gap:3.4rem;gap:3.4rem}.main-topic-locale-important{grid-template-columns:35.06rem 1fr;grid-gap:2.55rem;gap:2.55rem}.main-topic-locale-important-bn .main-topic-locale-headline,.main-topic-locale-important-mourning .main-topic-locale-headline{line-height:2.55rem;display:inline;background:#000;color:#fff;padding:0 .43rem .43rem;position:relative;-webkit-box-decoration-break:clone;box-decoration-break:clone}.main-topic-locale-important-bn .main-topic-locale-headline a:hover,.main-topic-locale-important-mourning .main-topic-locale-headline a:hover{border-bottom:none}.main-topic-locale-important-bn .main-topic-locale-tag,.main-topic-locale-important-mourning .main-topic-locale-tag{margin-top:1.17rem}.main-topic-locale-important-bn .main-topic-locale-headline{background:#dc1a21}.main-topic-locale-column:last-child{position:relative}.main-topic-locale-column:last-child::before{content:"";position:absolute;left:-1.7rem;top:0;bottom:0;border-left:1px solid #484848}.main-topic-locale-headline{font:700 2.23rem/2.44rem Austin News Deck Web, Times New Roman, serif;letter-spacing:-0.03rem;margin-bottom:1.28rem}.main-topic-locale-headline a{border-bottom:1px solid transparent}.main-topic-locale-headline a:hover{border-bottom-color:currentColor}.main-topic-locale-first-wrapper{display:grid;grid-template-columns:1fr 27.94rem;grid-gap:1.28rem;gap:1.28rem}.main-topic-locale-lead{font:400 0.85rem/1.06rem Georgia, serif;color:#484848;margin-bottom:.85rem}.main-topic-locale-lead a{border-bottom:1px solid transparent}.main-topic-locale-lead a:hover{border-bottom-color:currentColor}.main-topic-locale-tag{line-height:1.28rem;height:1.28rem;margin-bottom:.85rem}.main-topic-locale-tag a{font:600 0.64rem/0.64rem Montserrat, Verdana, sans-serif;color:var(--color-accent);text-transform:uppercase}.main-topic-locale-tag a:hover{color:#15181b}.main-topic-locale-author{min-height:1.28rem;line-height:1.28rem}.main-topic-locale-author span{font:600 0.64rem/0.64rem Montserrat, Verdana, sans-serif;color:#8b8b8b;text-transform:uppercase}.main-topic-locale-image-wrapper{width:3.4rem;height:3.4rem;display:block}.main-topic-locale-image-wrapper img{background-color:#f7f6f5;background-image:url('data:image/svg+xml;utf8,<svg fill="%23e5e5e5" fill-rule="even-odd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 15.8"><path d="M0 0h19.5v15.8H0V0Zm1 1v13.8h17.5V1H1Zm1.31 10.18v2.24h14.88V8.55l-4.31-4.63-5.31 5.7-1.91-2.04-3.36 3.6Zm2.02-5.02a2.02 2.02 0 1 0-.002-4.042A2.02 2.02 0 0 0 4.33 6.16Z" /></svg>');background-position:center center;background-repeat:no-repeat;background-size:40%;text-indent:-9999em;display:block;width:3.4rem;height:3.4rem;-o-object-fit:cover;object-fit:cover}.main-topic-locale-image-wrapper.author-photo{height:4.52rem}.main-topic-locale-image-wrapper.author-photo img{height:4.52rem}.main-topic-locale-image-wrapper.author-sketch:hover{transition:opacity .25s;filter:drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))}.main-topic-locale-image-wrapper.author-sketch:hover.img--hover:hover::after{opacity:0}.main-topic-locale-image-wrapper.author-single::after{border-radius:50%}.main-topic-locale-item-wrapper{padding-bottom:.64rem;border-bottom:1px solid #e5e5e5;margin-bottom:.85rem;display:flex;grid-gap:.85rem;gap:.85rem;position:relative;justify-content:space-between}.main-topic-locale-item-wrapper:last-child{margin-bottom:0;padding-bottom:1.01rem}.main-topic-locale-item-wrapper:last-child::after{content:"";position:absolute;bottom:3px;border-top:1px solid #e5e5e5;width:100%;left:0}.main-topic-locale-item-wrapper:last-child::before{content:"";position:absolute;bottom:7px;border-top:1px solid #e5e5e5;width:100%;left:0}.main-topic-locale-item-content .main-topic-locale-lead{font:400 0.96rem/1.06rem Austin News Deck Web, Times New Roman, serif;color:#000;margin-bottom:.43rem;letter-spacing:-0.02rem}.main-topic-locale-item-content .main-topic-locale-tag{margin-bottom:0}.main-topic-locale-item-content .main-topic-locale-author{margin-bottom:.43rem}.main-topic-locale-item-content .main-topic-locale-author span{text-transform:none;font:300 0.85rem/1.06rem Montserrat, Verdana, sans-serif;letter-spacing:-0.01rem;color:#000}
</style>
    


<link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/cap/preload.ed3c79ad9987babe78fe.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/loaders/preload.2073f460c6abec7bdb1f.css" as="style" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/loaders/preload.c2e676dc3a20e6927462.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/read-later/preload.13942b2c51bd2f59b8a2.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/lazy-images/preload.73884e56d8e4d87690b1.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/ads/preload.3fcc29c2ebb55a8b52f2.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/biz-local/preload.d20e315ef9df0ee2fc12.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/metering/preload.7c62039b95a34cb805d3.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/obituary/preload.9e744340a3b1cc8ae7ab.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/hp/preload.09a789811e6fa30350fc.js" as="script" charset="UTF-8"/><link rel="preload" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/padlock-icon/preload.ddb0f3eb2d929c5a7e9f.js" as="script" charset="UTF-8"/><link rel="stylesheet" type="text/css" href="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/hp/main.b8d57a6a019a22965372.css"/>



<!-- headAssetsModule v1.1 -->

<!--24282370, [ null ], aggregatorModule-->

    <script>
    (function() {
        var frame = window;
        var cmpFrame;
        var cmpCallbacks = {};
        while (frame) {
            try {
                if (frame.frames['__tcfapiLocator']) {
                    cmpFrame = frame;
                    break;
                }
            } catch (ignore) {}
            if (frame === window.top) {
                break;
            }
            frame = frame.parent;
        }

        function postMessageHandler(event) {
            var msgIsString = typeof event.data === 'string';
            var json = {};

            try {
                if (msgIsString) {
                    json = JSON.parse(event.data);
                } else {
                    json = event.data;
                }
            } catch (ignore) {}

            var payload = json.__tcfapiCall;

            if (payload) {
                window.__tcfapi(
                    payload.command,
                    payload.version,

                    function(retValue, success) {
                        var returnMsg = {
                            __tcfapiReturn: {
                                returnValue: retValue,
                                success: success,
                                callId: payload.callId
                            }
                        };
                        if (msgIsString) {
                            returnMsg = JSON.stringify(returnMsg);
                        }
                        event.source.postMessage(returnMsg, '*');
                    },
                    payload.parameter
                );
            }
        }
        window.addEventListener('message', postMessageHandler, false);
    }());
</script>

<script type="text/javascript">
    var dfpParams = dfpParams || {
        slots: {}
    };
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var putBanDFPInViewObject = putBanDFPInViewObject || function() {}
</script>

<style>
        .adviewDFPBanner:not(.DFP-000-MAINBOARD, .DFP-087-ADBOARD-B, .DFP-001-TOPBOARD, .DFP-042-FOOTBOARD, .DFP-087-ADBOARD-A, .DFP-201-PREMIUMBOARD, .activeBan, [id^="DFP-003-RECTANGLE"]) {
            display: none !important;
        }
    </style>

    <link rel="preconnect" href="https://securepubads.g.doubleclick.net" crossorigin>
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" class="optanon-category-C0004" type="text/plain"></script>
        <script type="text/javascript">

        if (!window.AG) {
            window.AG = {};
            window.AG.rodoAccepted = -1;
        }

        dfpParams.prefix = '/75224259/AGORA-IN/Lokalne/zielonagora/hp';
        dfpParams.jsp = 30;
        dfpParams.dir = 'zielonagora';
        dfpParams.dx = '35166';
        dfpParams.ppvid = window.site_details.ppvid || '';
        dfpParams.slots = dfpParams.slots || {};
        dfpParams.video = dfpParams.video || {};

        
            dfpParams.slots['000-MAINBOARD'] = { id: '000-MAINBOARD', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/000-MAINBOARD&adUnitCode=000-MAINBOARD&adUnitSize=[[728,90],[750,100],[750,200],[750,300],[940,300]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[728,90],[750,100],[750,200],[750,300],[940,300]], autoLoad: false, autoLoadMargin: 200, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/000-MAINBOARD' };
        
            dfpParams.slots['087-ADBOARD-B'] = { id: '087-ADBOARD-B', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/087-ADBOARD-B&adUnitCode=087-ADBOARD-B&adUnitSize=[[728,90],[750,100],[750,200],[750,300]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[728,90],[750,100],[750,200],[750,300]], autoLoad: true, autoLoadMargin: 300, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/087-ADBOARD-B' };
        
            dfpParams.slots['001-TOPBOARD'] = { id: '001-TOPBOARD', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/001-TOPBOARD&adUnitCode=001-TOPBOARD&adUnitSize=[[728,90],[750,100],[750,200],[750,300],[940,300],[970,250],[1170,300],[1170,600]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[728,90],[750,100],[750,200],[750,300],[940,300],[970,250],[1170,300],[1170,600]], autoLoad: false, autoLoadMargin: 5, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/001-TOPBOARD' };
        
            dfpParams.slots['042-FOOTBOARD'] = { id: '042-FOOTBOARD', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/042-FOOTBOARD&adUnitCode=042-FOOTBOARD&adUnitSize=[[728,90],[750,100],[750,200],[750,300],[940,300],[970,250]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[728,90],[750,100],[750,200],[750,300],[940,300],[970,250]], autoLoad: true, autoLoadMargin: 20, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/042-FOOTBOARD' };
        
            dfpParams.slots['087-ADBOARD-A'] = { id: '087-ADBOARD-A', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/087-ADBOARD-A&adUnitCode=087-ADBOARD-A&adUnitSize=[[728,90],[750,100],[750,200],[750,300],[940,300]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[728,90],[750,100],[750,200],[750,300],[940,300]], autoLoad: false, autoLoadMargin: 200, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/087-ADBOARD-A' };
        
            dfpParams.slots['201-PREMIUMBOARD'] = { id: '201-PREMIUMBOARD', url: "fif.htm?adUnit=/75224259/AGORA-IN/Lokalne/zielonagora/hp/201-PREMIUMBOARD&adUnitCode=201-PREMIUMBOARD&adUnitSize=[[1,1]]&dx=35166&dir=zielonagora&jsp=30&subscription=false", sizes: [[1,1]], autoLoad: false, autoLoadMargin: 0, outOfPage: false, adUnit: '/75224259/AGORA-IN/Lokalne/zielonagora/hp/201-PREMIUMBOARD' };
        
                dfpParams.video.preroll = '//pubads.g.doubleclick.net/gampad/ads?sz=400x300|640x480&iu=/75224259/AGORA-IN/Lokalne/zielonagora/hp/090-PREROLL&cust_params=pos%3D090-PREROLL%26dx%3D35166%26jsp%3D30%26dir%3Dzielonagora%26kw%3D[brandsafe]%2C[player_type]%26dystrybutor%3D[distributor_id]%26passback_id%3D[passback_id]%26domena%3D[adview_hostname]%26cb%3D[cb]%26adid%3D[adid]%26temp%3D[temp]%26subscription%3Dfalse&url=[locationhref]&description_url=[locationhref]&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&correlator=[timestamp]';
            
                dfpParams.video.audio = '//pubads.g.doubleclick.net/gampad/ads?sz=1x1&iu=/75224259/AGORA-IN/Lokalne/zielonagora/hp/090-PREROLL&cust_params=pos%3D090-PREROLL%26dx%3D35166%26jsp%3D30%26dir%3Dzielonagora%26kw%3D[brandsafe]%2C[player_type]%2Caudio%26dystrybutor%3D[distributor_id]%26passback_id%3D[passback_id]%26domena%3D[adview_hostname]%26cb%3D[cb]%26subscription%3Dfalse&url=[locationhref]&description_url=[locationhref]&impl=s&gdfp_req=1&env=instream&output=vast&ad_type=audio&unviewed_position_start=1&correlator=[timestamp]';
            // [HB] PREBID CORE HEADER - PROD

// BIG data
BigData = {
    notify: function (eventName) {
        var event = BigData.createEvent(eventName);
        BigData.fireEvent(event);
    },
    createEvent: function (eventName) {
        var event;
        if (document.createEvent) {
            event = document.createEvent("HTMLEvents");
            event.initEvent(eventName, true, true);
        } else {
            event = document.createEventObject();
            event.eventType = eventName;
        }
        event.eventName = eventName;
        return event;
    },
    fireEvent: function (event) {
        if (document.createEvent) {
            document.dispatchEvent(event);
        } else {
            document.fireEvent("on" + event.eventType, event);
        }
    }
};
</script>

<script type='text/javascript'>
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];
  window.ybConfiguration = window.ybConfiguration || {};
  window.ybConfiguration = Object.assign({}, window.ybConfiguration, { integrationMethod: 'open_tag', smartRefreshDisabled: false });
  (function (y, i, e, L, D) {
    y.Yieldbird = y.Yieldbird || {};
    y.Yieldbird.cmd = y.Yieldbird.cmd || [];
    i.cmd.push(function () { i.pubads().disableInitialLoad(); });
    L = e.createElement('script');
    L.async = true;
    L.src = '//cdn.qwtag.com/016dd206-b0cd-4e28-95ce-eb946557da76/qw.js';
    D = e.getElementsByTagName('script')[0];
    (D.parentNode || e.head).insertBefore(L, D);
  })(window, window.googletag, document);
</script></script>

    <script>
                !function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).AdviewAdsTag=e()}(function(){return function o(i,r,a){function d(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return d(i[t][1][e]||e)},n,n.exports,o,i,r,a)}return r[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)d(a[e]);return d}({1:[function(e,t,n){"use strict";n.__esModule=!0;var o={ab:function(){return.1<=Math.random()?"b":"a"+Math.floor(10*Math.random())},dc:function(){return o.dool?"d":"c"+Math.floor(20*Math.random())},dool:.1<=Math.random(),ff:String(Math.round(Math.random()))};n.default=o},{}],2:[function(e,t,n){"use strict";n.__esModule=!0;n.default=function(){var e=window.document.body,t=(window.screeningADFP=!0,document.querySelector('[id^="adsMidboardDivId_"]')),n=document.querySelector(".index_body");t&&(t.style.cssText="background: transparent !important",t.classList.add("screeningADFP_Midboard"),t.previousElementSibling.classList.add("before_midboard_screening"),e.classList.add("screeningADFP_Midboard"),n)&&(n.style.width="fit-content",n.style.margin="0 auto",t=document.querySelector("#page-top"),e=document.querySelector("#page"),t||e)&&(e.style.width=t.offsetWidth+"px",e.style.margin="0 auto")}},{}],3:[function(e,t,n){"use strict";n.__esModule=!0;n.default=["001-TOPBOARD","011-MIDBOARD","011-MIDBOARD-MOBI","003-RECTANGLE","000-MAINBOARD","042-FOOTBOARD","087-ADBOARD-A","071-WINIETA","004-PAYPER","007-CONTENTBOARD","021-IMK","059-BUTTON","078-STYLBOARD","044-BIZBOARD","035-RECTANGLE-BTF","067-RECTANGLE-BTF","101-TOPBOARD-MOBI","104-RECTANGLE-MOBI","107-MAINBOARD-MOBI","150-BIZBOARD-MOBI","151-FUNBOARD-MOBI","152-STYLBOARD-MOBI","153-MOTOBOARD-MOBI","150-ADBOARD-A-MOBI","150-ADBOARD-B-MOBI","150-ADBOARD-C-MOBI","150-ADBOARD-D-MOBI","108-FOOTBOARD-MOBI","000-SPORTBOARD","076-MAINBUTTON","111-BIZBUTTON","076-MAINBUTTON","116-SPORTBUTTON","000-MAINBOX","099-BOMBKA-MOBI","099-BOMBKA","011-MIDBOARD-1","011-MIDBOARD-2","011-MIDBOARD-3","011-MIDBOARD-4","011-MIDBOARD-5","011-MIDBOARD-6","011-MIDBOARD-7","011-MIDBOARD-8","011-MIDBOARD-9","011-MIDBOARD-1-MOBI","011-MIDBOARD-2-MOBI","011-MIDBOARD-3-MOBI","011-MIDBOARD-4-MOBI","011-MIDBOARD-5-MOBI","011-MIDBOARD-6-MOBI","011-MIDBOARD-7-MOBI","011-MIDBOARD-8-MOBI","011-MIDBOARD-9-MOBI","011-MIDBOARD-10","011-MIDBOARD-11","011-MIDBOARD-12","011-MIDBOARD-13","011-MIDBOARD-14","011-MIDBOARD-15","011-MIDBOARD-16","011-MIDBOARD-17","011-MIDBOARD-18","011-MIDBOARD-19","011-MIDBOARD-10-MOBI","011-MIDBOARD-11-MOBI","011-MIDBOARD-12-MOBI","011-MIDBOARD-13-MOBI","011-MIDBOARD-14-MOBI","011-MIDBOARD-15-MOBI","011-MIDBOARD-16-MOBI","011-MIDBOARD-17-MOBI","011-MIDBOARD-18-MOBI","011-MIDBOARD-19-MOBI","011-MIDBOARD-20","011-MIDBOARD-21","011-MIDBOARD-22","011-MIDBOARD-23","011-MIDBOARD-24","011-MIDBOARD-25","011-MIDBOARD-26","011-MIDBOARD-27","011-MIDBOARD-28","011-MIDBOARD-29","011-MIDBOARD-20-MOBI","011-MIDBOARD-21-MOBI","011-MIDBOARD-22-MOBI","011-MIDBOARD-23-MOBI","011-MIDBOARD-24-MOBI","011-MIDBOARD-25-MOBI","011-MIDBOARD-26-MOBI","011-MIDBOARD-27-MOBI","011-MIDBOARD-28-MOBI","011-MIDBOARD-29-MOBI"]},{}],4:[function(e,t,n){"use strict";n.__esModule=!0,n.default={get:function(e){return("; "+document.cookie).split("; "+e+"=").pop().split(";").shift()},set:function(e,t){var n="https:"==window.location.protocol,o=(new Date).getFullYear()+1;window.document.cookie=e+"="+t+"; expires=Fri, 19 Jun "+o+" 20:47:11 UTC; path=/"+(n?";Secure;SameSite=None":"")}}},{}],5:[function(e,t,n){"use strict";n.__esModule=!0;n.default=function(e){var t,n,o=window.AdviewAdsTag||window.adviewSPA,i=String(e.slot.getAdUnitPath().split("/").pop()),r=e,a=i;a={active:!r.isEmpty,slot:a,height:r.size?r.size[1]:"fluid",width:r.size?r.size[0]:"fluid",divId:r.slot.getSlotElementId()},r=new CustomEvent("adviewDfpSlotRenderEnd",{detail:a}),window.document.dispatchEvent(r),e.isEmpty||(r=(a="gazeta.pl_YBrecovery"===i)?function(e){e=document.getElementById(e).parentElement;return e&&e.classList.contains("yb_recovery")?e:null}(e.slot.getSlotElementId()):function(e,t){e=(window.AdviewAdsTag||window.adviewSPA).putBanSlotsOnSite.includes(e)||window.adviewSPA?e:"adUnit-"+t,t=window.document.querySelector("#"+e);return t||console.warn("AdsContainer ("+e+") not exists"),t}(e.slot.getSlotElementId(),i))&&(e=function(e,t){e=e.size[0];return e=1==e&&(t=t.querySelector("iframe"))?t.width:e}(e,r),n=e,(t=r).classList.add("activeBan"),t.classList.add("adviewDFPBanner"),n&&(t.style.marginLeft="auto",t.style.marginRight="auto",10<n)&&(t.style.minWidth=n+"px",t.style.maxWidth=n+"px"),o.arrayLabels.includes(i)||a)&&(t=e,(o=(n=r).querySelector(".banLabel"))||((o=document.createElement("span")).className="banLabel",o.innerHTML="REKLAMA",n.insertBefore(o,n.children[0])),o.style.display="block",t)&&(o.style.maxWidth=t+"px",o.style.marginLeft="auto",o.style.marginRight="auto")}},{}],6:[function(e,t,n){"use strict";n.__esModule=!0,n.putBanSlotsOnSite=n.autoLoadSlot=n.arrayLabels=n.DFPTargeting=n.kwTargeting=n.adUnitClone=n.videoUrlParams=n._YB=n.slotRenderEnded=void 0;var o=e(5),o=(n.slotRenderEnded=o.default,e(10)),i=e(11),r=e(1),r=(n._YB=r.default,e(3)),r=(n.arrayLabels=r.default,e(8)),r=(n.videoUrlParams=r.default,e(7)),a=(n.kwTargeting=[],n.DFPTargeting=[],[]),d=(n.autoLoadSlot=a,[]);n.putBanSlotsOnSite=[],window.putBanDFPInViewObject=i.default,window.putBanDFP=o.default,window.addEventListener("message",r.default),window.document.addEventListener("DOMContentLoaded",function(){a.forEach(function(e){var e=window.dfpParams.slots[e],t=e.id,n=e.sizes,e=e.autoLoadMargin;-1==d.indexOf(t)&&(i.default({slot:t,divId:"adUnit-"+t,margin:e,unitSize:n}),d.push(t))})});n.adUnitClone=function(e){return console.warn("Function adUnitClone has been deprecated and should be no longer used!"),e}},{1:1,10:10,11:11,3:3,5:5,7:7,8:8}],7:[function(e,t,n){"use strict";n.__esModule=!0;function o(e){"string"==typeof e.data&&-1!=e.data.indexOf("Adview MCGP:")&&("Adview MCGP: third party is not supported"==e.data?i.default.set("AdviewMCGP","first"):i.default.set("AdviewMCGP","third"),window.removeEventListener("message",o,!1))}var i=e(4);n.default=o},{4:4}],8:[function(e,t,n){"use strict";n.__esModule=!0;var i=e(1);n.default=function(){var e=window.AdviewAdsTag.DFPTargeting,n="",o="%2C[tryb_audio]";return e.forEach(function(e){var t=e.split("|");-1!=e.indexOf("kw")&&-1==o.indexOf(t[1])?o+="%2C"+t[1]:n+="%26"+t[0]+"%3D"+t[1]}),n=(n+="%26yb_ab%3D"+i.default.ab())+("%26yb_ff%3D"+i.default.ff),window.contentCategories&&window.contentCategories.length&&(window.contentCategories=window.contentCategories.map(function(e){return e.replace("&","%2526")}),n+="%26contentCategories%3D"+window.contentCategories.join("%2C")),window.customCategories&&window.customCategories.length&&(window.customCategories=window.customCategories.map(function(e){return e.replace("&","%2526")}),n+="%26customCategories%3D"+window.customCategories.join("%2C")),window.activeSubscription&&(n+="%26subscription%3Dtrue"),o+n}},{1:1}],9:[function(e,t,n){"use strict";n.__esModule=!0,n.prebidMarginGenerator=void 0,n.prebidMarginGenerator=function(e){var t,n,o,i,r;if(e)return t=(i=e.testPrebidMargin).start,n=i.end,o=i.step,i=i.percentOfChoice,e=e.prebidMargin,i<100*Math.random()?e:(i=t,e=n,r=o,(e=Array(Math.ceil((e-i)/r)+1).fill(i).map(function(e,t){return e+t*r}))[Math.floor(Math.random()*e.length)])}},{}],10:[function(e,t,n){"use strict";n.__esModule=!0;var e=e(1),g=window._YB||e.default;n.default=function(s,u,e,l){var t,n,c=["fif"];if(s&&(t="string"==typeof s?s:s.slot,n=1,null!=(o=window.slotsFif)&&o.length?((i=o.find(function(e){return e.slotName===t}))&&(n=i.slotNumber+1),i={slotName:t,slotNumber:n},(o=o.filter(function(e){return e.slotName!==t})).push(i),window.slotsFif=o):window.slotsFif=[{slotName:t,slotNumber:n}],c.push("fif"+n)),l&&(Array.isArray(l)?l.forEach(function(e){return c.push(e.trim())}):"string"==typeof l&&l.split(",").forEach(function(e){return c.push(e.trim())})),c=c.filter(function(e,t){return c.indexOf(e)==t}),s&&"string"==typeof s){var f,o,D,i=window.dfpParams.slots[s];if(!i)return console.warn("dfpParams slot: "+s+" not exists");document.querySelector("#"+u)&&(f=i.adUnit,o=i.sizes,D=e||o,googletag.cmd.push(function(){var e=null!=(e=window.pbjs)&&e.getAdserverTargeting?window.pbjs.getAdserverTargeting():null,t=e&&(null==(t=e[u])?void 0:t.hb_adid)||"",n=e&&(null==(n=e[u])?void 0:n.hb_bidder)||"",o=e&&(null==(o=e[u])?void 0:o.hb_pb)||"",i=e&&(null==(i=e[u])?void 0:i.hb_size)||"",r=e&&(null==(r=e[u])?void 0:r.hb_format)||"",e=e&&(null==(e=e[u])?void 0:e.hb_source)||"",a=l||"",d=googletag.defineSlot(f,D,u).setTargeting("pos",s).setTargeting("yb_ab",g.ab()).setTargeting("yb_dc",g.dc()).setTargeting("hb_adid",t).setTargeting("hb_bidder",n).setTargeting("hb_pb",o).setTargeting("hb_size",i).setTargeting("hb_format",r).setTargeting("hb_source",e).setTargeting("ppvid",window.dfpParams.ppvid).addService(googletag.pubads());googletag.pubads().getTargetingKeys().forEach(function(e){var t=googletag.pubads().getTargeting(e);"kw"==e&&c.forEach(function(e){return t.push(e)}),d.setTargeting(e,t)}),googletag.display(u),window.AdviewAdsTag.putBanSlotsOnSite.push(u),googletag.pubads().refresh([d]),"011-MIDBOARD"!==s&&"011-MIDBOARD-MOBI"!==s||window.sendDataOceanEvent(880,{sd_ppvid:window.dfpParams.ppvid,adUnit:f,kw:a,adsContainerId:u})}))}}},{1:1}],11:[function(e,t,n){"use strict";n.__esModule=!0;var O=e(2),w=e(10),B=e(12),I=e(9);n.default=function(e){var o,i,r,t,a,n,d,s,u,l,c,f,D,g,M;return e?(o=e.divId,i=e.slot,n=e.kw,r=void 0===n?[]:n,n=e.margin,t=e.unitSize,e=n,a=window.location.hostname,i?o?(n=document.querySelector("#"+o))?window.dfpParams.slots?(Array.isArray(window.marginAutoLoadTest)&&window.marginAutoLoadTest.length&&(f=window.marginAutoLoadTest.find(function(e){return e.slotName===i}),d=Object.values(window.dfpParams.slots).find(function(e){return e.id===i}),s=window.top.slotList||[],f)&&d&&d.autoLoad&&(u=f.testMargins,f=f.testGroup,s.length?(l=s.find(function(){return d.id===i}),c=s.find(function(e){return e.slotTest}),l&&c&&(e=l.slotMargin,r.push("margin_autoload_"+e))):Math.random()<=f/100?(c=s,e=u[B.getRandomIndexFromArray(u)],r.push("margin_autoload_"+e),c.push({slotName:i,slotMargin:e,slotTest:!0}),window.top.slotList=c):(s.push({slotName:i,slotMargin:e,slotTest:!1}),window.top.slotList=s)),f=null==(l=window.adUnitsConfiguration)?void 0:l.find(function(e){return e.code===i}),D="www.gazeta.pl"!==a&&"m.gazeta.pl"!==a?I.prebidMarginGenerator(f):null==f?void 0:f.prebidMargin,g=new IntersectionObserver(function(e){var t,n;e[0].isIntersecting&&D&&("www.gazeta.pl"!==a&&"m.gazeta.pl"!==a&&r.push("margin_prebid_"+D),window.autoHeaderBidding&&window.autoHeaderBidding(i,o),"011-MIDBOARD"!==i||window.screeningADFP||(-1!=(t=window.document.querySelector("html")).className.indexOf("adform-wallpaper")?O.default():n=setInterval(function(){-1!=t.className.indexOf("adform-wallpaper")&&(O.default(),clearInterval(n))},500)),g)&&g.disconnect()},{rootMargin:(D||600)+"px"}),"wyborcza.pl"!==a&&g.observe(n),void(M=new IntersectionObserver(function(e){e[0].isIntersecting&&(w.default(i,o,t,r),M)&&M.disconnect()},{rootMargin:(e||300)+"px"})).observe(n)):console.warn("dfpParams.slots is empty"):console.warn("DIV ID: "+o+" not exists"):console.warn("divId is empty"):console.warn("Slot ID is empty")):console.warn("Object is required = {\n        slot: string,\n        divId: string,\n        margin?: number,\n        unitSize?: number[][],\n        kw?: string[],\n        slotNumber?: number\n    }")}},{10:10,12:12,2:2,9:9}],12:[function(e,t,n){"use strict";n.__esModule=!0,n.getRandomIndexFromArray=void 0,n.getRandomIndexFromArray=function(e){var t;if(e.length)return(t=Math.floor(Math.random()*e.length))===e.length&&n.getRandomIndexFromArray(e),t},n.default=n.getRandomIndexFromArray},{}]},{},[6])(6)});
/*
*  Date: 24-10-2023 08:23
*
*/</script>
            <style type="text/css">.banLabel,ins[data-anchor-shown]::after{text-transform:uppercase;margin-top:6px;font:normal 10px Arial,sans-serif;padding-bottom:2px;text-align:left;color:#999}iframe[name="__cmpLocator"]{display:none!important}ins[data-anchor-shown]::after{content:"Reklama";position:absolute;top:-20px;left:65px}html[lang=uk] ins[data-anchor-shown]::after{content:"\0440 \0435 \043A \043B \0430 \043C \0430 "}body.screeningLabel-001-TOPBOARD .DFP-001-TOPBOARD .banLabel{max-width:none!important}body.rwd.screeningADFP .DFP-001-TOPBOARD{padding:15px 0}body.screeningADFP .back-to-top span,body.screeningADFP .ppg__close--small,body.screeningADFP .ppg__fab-circle,body.screeningADFP a,body.screeningADFP a *,body.screeningADFP area{cursor:pointer!important}body.screeningADFP_Midboard div[id^=adsMidboardDivId_]:not(.screeningADFP_Midboard){min-width:1242px!important}body.screeningADFP_Midboard div[id=adUnit-042-FOOTBOARD] .banLabel,body.screeningADFP_Midboard div[id^=adsMidboardDivId_]:not(.screeningADFP_Midboard) .banLabel{margin-top:0;padding-top:6px}body.winieta #page-top:not(.fixed){position:relative}body.winieta #page-top:not(.fixed) #pageHead .imgw img{position:absolute;top:0;left:0;z-index:2}body.winieta #page-top:not(.fixed) #pageHead.hasBanner{min-height:90px}#pageHead.hasBanner .banLabel{position:absolute;top:20px;right:-40px;padding:3px 5px;margin:0;transform:rotate(-90deg);background:#fff}body.dfp-forum #pageHead.hasBanner .banLabel{right:-36px}body.dfp-forum.winieta{width:auto!important}#pageHead.hasBanner .column.col1{display:inline-block;position:relative;z-index:2;height:100%}body.dfp-gazetawyborcza #pageHead.hasBanner .c0{top:40px;position:absolute}</style><script class="optanon-category-C0004" type="text/plain" src="https://mrb.upapi.net/org?o=4829226047897600&upapi=true"></script><script>
                if(AdviewAdsTag && AdviewAdsTag.kwTargeting && typeof AdviewAdsTag.kwTargeting === 'object'){
                    AdviewAdsTag.kwTargeting.push("dfp10");
                }
            </script>
            <!-- Using DFP provider 1.0 -->
        <script type="text/javascript">
        
                        var dfp_slot_000_mainboard;
                    
                        var dfp_slot_001_topboard;
                    
                        var dfp_slot_087_adboard_a;
                    
                        var dfp_slot_201_premiumboard;
                    

        googletag.cmd.push(function() {
        
                            dfp_slot_000_mainboard = googletag.defineSlot('/75224259/AGORA-IN/Lokalne/zielonagora/hp/000-MAINBOARD', [[728,90],[750,100],[750,200],[750,300],[940,300]], 'div-gpt-ad-000-MAINBOARD-0').setTargeting('pos', ['000-MAINBOARD']).setCollapseEmptyDiv(true,true).addService(googletag.pubads());
                        
                            dfp_slot_001_topboard = googletag.defineSlot('/75224259/AGORA-IN/Lokalne/zielonagora/hp/001-TOPBOARD', [[728,90],[750,100],[750,200],[750,300],[940,300],[970,250],[1170,300],[1170,600]], 'div-gpt-ad-001-TOPBOARD-0').setTargeting('pos', ['001-TOPBOARD']).setCollapseEmptyDiv(true,true).addService(googletag.pubads());
                        
                            dfp_slot_087_adboard_a = googletag.defineSlot('/75224259/AGORA-IN/Lokalne/zielonagora/hp/087-ADBOARD-A', [[728,90],[750,100],[750,200],[750,300],[940,300]], 'div-gpt-ad-087-ADBOARD-A-0').setTargeting('pos', ['087-ADBOARD-A']).setCollapseEmptyDiv(true,true).addService(googletag.pubads());
                        
                            dfp_slot_201_premiumboard = googletag.defineSlot('/75224259/AGORA-IN/Lokalne/zielonagora/hp/201-PREMIUMBOARD', [[1,1]], 'div-gpt-ad-201-PREMIUMBOARD-0').setTargeting('pos', ['201-PREMIUMBOARD']).setCollapseEmptyDiv(true,true).addService(googletag.pubads());
                        

            if (typeof window.gExVariation != 'undefined') {
                AdviewAdsTag.kwTargeting.push('testyab_'+gExVariation);
                AdviewAdsTag.DFPTargeting.push('kw|testyab_'+gExVariation);
            }

            if (window.gazeta_pl && gazeta_pl.abTestsGroup) {
                googletag.pubads().setTargeting('test', [''+ gazeta_pl.abTestsGroup ]);
                AdviewAdsTag.DFPTargeting.push('test|'+gazeta_pl.abTestsGroup);
            }

            

            googletag.pubads().setTargeting('cb', [''+window.AG.rodoAccepted]);

            googletag.pubads().setTargeting('contentCategories', window.contentCategories || []);
            googletag.pubads().setTargeting('customCategories', window.customCategories || []);
            googletag.pubads().setTargeting('domena', 'zielonagora.wyborcza.pl');
            AdviewAdsTag.DFPTargeting.push('domena|zielonagora.wyborcza.pl');

            googletag.pubads().setTargeting('yb_ff', AdviewAdsTag._YB.ff);
            
                    googletag.pubads().setTargeting('yb_ab', AdviewAdsTag._YB.ab());
                
            googletag.pubads().setTargeting('yb_dc', AdviewAdsTag._YB.dc());
            googletag.pubads().setTargeting('ppvid', window.site_details.ppvid);

            
                googletag.pubads().setTargeting('dx','35166');
                
                googletag.pubads().setTargeting('dir','zielonagora');
                
                googletag.pubads().setTargeting('jsp','30');
                
                googletag.pubads().setTargeting('subscription','false');
                
                    var dfpCookieEnabled = navigator.cookieEnabled ? '1' : '0';
                    googletag.pubads().setTargeting('cookie', dfpCookieEnabled);
                    AdviewAdsTag.DFPTargeting.push('cookie|' + dfpCookieEnabled);
                

            const emptySlots = [];
            const slots = [
                window.dfp_slot_019_toplayer,
                window.dfp_slot_019_toplayer_mobi,
                window.dfp_slot_201_premiumboard,
                window.dfp_slot_201_premiumboard_mobi
            ];

            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                AdviewAdsTag.slotRenderEnded(event);
                if (event.isEmpty && event.slot === (window.dfp_slot_019_toplayer || window.dfp_slot_019_toplayer_mobi) && window.interstitialSlot) {
                    googletag.pubads().refresh([interstitialSlot]);
                }
                if(event.isEmpty && event.slot && slots.includes(event.slot) && window.anchorSlot) {
                    emptySlots.push(event.slot);
                }
            });

            
                const videoUrlParams = window.AdviewAdsTag.videoUrlParams()
                
                    if(dfpParams && dfpParams.video && dfpParams.video.preroll && typeof dfpParams.video.preroll === 'string'){
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('%26dystrybutor', videoUrlParams + '%26dystrybutor');
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[adview_hostname]', escape('zielonagora.wyborcza.pl'));
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[cb]', window.AG.rodoAccepted);
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[locationhref]', escape(window.location.href));
                        dfpParams.video.midroll = dfpParams.video.preroll.replace('090-PREROLL&', '090-MIDROLL&');
                    }
                    
                        if (dfpParams && dfpParams.video && dfpParams.video.audio && typeof dfpParams.video.audio === 'string') {
                            dfpParams.video.audio = dfpParams.video.audio.replace('%26dystrybutor', videoUrlParams + '%26dystrybutor');
                            dfpParams.video.audio = dfpParams.video.audio.replace('[adview_hostname]', escape('zielonagora.wyborcza.pl'));
                            dfpParams.video.audio = dfpParams.video.audio.replace('[cb]', window.AG.rodoAccepted);
                            dfpParams.video.audio = dfpParams.video.audio.replace('[locationhref]', escape(window.location.href));
                        }
                    

            googletag.pubads().setTargeting('kw', AdviewAdsTag.kwTargeting);
            //googletag.pubads().setTargeting('prebid_set', ['s2']);

            
            googletag.pubads().enableSingleRequest();
            
            googletag.pubads().disableInitialLoad();

            googletag.enableServices();

            
                    function runAnchor() {
                        if(window.anchorSlot) {
                            setTimeout(() => {
                                const isPremiumboardDefined = Boolean(window.dfp_slot_201_premiumboard || window.dfp_slot_201_premiumboard_mobi);
                                const isPremiumboardEmpty = emptySlots.includes(window.dfp_slot_201_premiumboard || window.dfp_slot_201_premiumboard_mobi);
                                const isToplayerDefined = Boolean(window.dfp_slot_019_toplayer || window.dfp_slot_019_toplayer_mobi)
                                const isToplayerEmpty = emptySlots.includes(window.dfp_slot_019_toplayer || window.dfp_slot_019_toplayer_mobi);

                                const isBothSlotsEmpty = isPremiumboardEmpty && isToplayerEmpty;
                                const isPremiumboardEmptyOnly = isPremiumboardEmpty && !isToplayerDefined;
                                const isToplayerEmptyOnly = isToplayerEmpty && !isPremiumboardDefined;

                                if(emptySlots.length > 0 && (isBothSlotsEmpty || isPremiumboardEmptyOnly || isToplayerEmptyOnly)) {
                                    const interval = setInterval(checkFixedElement, 1000);

                                    if(checkFixedElement()) {
                                        googletag.pubads().refresh([anchorSlot]);
                                    }

                                    function checkFixedElement() {
                                        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                                        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                                        const elements = document.elementsFromPoint(viewportWidth - 40, viewportHeight - 40);

                                        const noElementAtBottom = elements.every(el => {
                                            const position = window.getComputedStyle(el).getPropertyValue('position');
                                            if(['fixed', 'sticky'].includes(position) && !el.closest('.adviewDFPBanner') && !el.id.includes('ANCHOR')) {
                                                return false;
                                            }
                                            return true;
                                        });

                                        if(!noElementAtBottom) {
                                            googletag.destroySlots([anchorSlot]);
                                            clearInterval(interval);
                                        }

                                        return noElementAtBottom;
                                    }
                                }
                            }, 1000);
                        }
                    }

                    runAnchor();
                
                console.log('Google refresh');
                googletag.pubads().refresh([
                    
                            dfp_slot_000_mainboard,
                        
                            dfp_slot_001_topboard,
                        
                            dfp_slot_087_adboard_a,
                        
                            dfp_slot_201_premiumboard,
                        
                ]);
            
        });
    </script>


<!--24282360, [ /tpl/ads/prod/dfpHeader-2.1.jsp ], dfpBanersHeaderBean-->


</head>

<body data-type="0" data-pagetype="hp" data-xx="" data-dx="35166" data-device="desktop" data-os="WINDOWS_NT"  class="path_35166 path_root_35166 path_zielonagora firefox Gecko firefox_45 WINDOWS_NT 6.1">
<!-- pattern#ms - HP - app38:tomcat-wyborcza: - 30 - 3800122 - s3800000_P20_wyb_HP_2020_desk.jsp - LegoIndex v0.1 -->

<!-- poczatek kontentu -->

<!--24282352, [ null ], aggregatorModule-->



<script type="text/javascript">
    //<![CDATA[
        try {
            var domain_marketing_params = {
                counter: null,
                disable: false,
                differentiateDomainMarketing: 's25',
                salesProductId: '2d51640c-7173-40ca-b1c0-72a7d41205d6',
                source: '',
                tags: [],
                clsarticle: '',
                marketingDomainRequestParams: '',
                isActive: 'false',
                validPeriod: '',
                subnetCompany: '',
                partnerCompany: '',
                freeActivation: 'unknown',
                agreementState: 'false',
                loginChannel: '',
                dmcampaign: '',
                hardPaywall: false,
                recoveryMethod: '',
                rodo22: false,
                operatingSystem: 'Windows',
                adaptivePaywallRuleId: '',
                paywallType: '',
                browser: 'Firefox',
                browserVersion: '45.0',
                fullContentVisibleForUser: true,
                contentCategories: [],
                hashedEmail: ''
            };
        } catch (e) { };
    //]]>
</script>

<script>
    customDataLayer = window.customDataLayer || {};
    customDataLayer.customer = customDataLayer.customer || {};
    customDataLayer.customer.state = 'anonymous';
    customDataLayer.customer.validPeriod = '';
    document.cookie = 'customDataLayer_customer=' + encodeURIComponent(JSON.stringify(customDataLayer.customer)) + '; domain=wyborcza.pl; path=/';
</script>

<script type="text/javascript">
    try {
        window.DataOcean = window.DataOcean || {};
        window.DataOcean.userEventCache = window.DataOcean.userEventCache || [];
        var sendDataOceanEvent = function (eventId, attributes) {
            var dataOceanEvent = {e: eventId, a: attributes};
            window.DataOcean.userEventCache.push(dataOceanEvent);
        };
        var domain_marketing = Object.assign({}, domain_marketing_params);
        domain_marketing.tags = JSON.stringify(domain_marketing.tags);
        domain_marketing.contentCategories = JSON.stringify(domain_marketing.contentCategories);
        domain_marketing.marketingDomainRequestParams = {};
        delete domain_marketing.marketingDomainRequestParams.email;
        domain_marketing.marketingDomainRequestParams = JSON.stringify(domain_marketing.marketingDomainRequestParams);
        sendDataOceanEvent(812, domain_marketing);
    } catch (e) { };
</script>

<script>
    domain_marketing.templateIds = '[PLDM_ART_HAT_SCROLL, PLDM_ART_HAT, 17632437, 17632443]';
</script>

<!-- domain-marketing-module v1.10 -->

<!--24282309, [ /fix/modules/wyborcza/portal/domainMarketingModule.jsp ], domainMarketingModule-->



<div class="header-sticky">
    <div class="premiumboard-wrapper" >
        


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-201-PREMIUMBOARD" class="adviewDFPBanner DFP-201-PREMIUMBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-201-PREMIUMBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['201-PREMIUMBOARD'] && dfpParams.slots['201-PREMIUMBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('201-PREMIUMBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('201-PREMIUMBOARD');
                } else if (!dfpParams.slots['201-PREMIUMBOARD']) {
                    if ('201-PREMIUMBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-201-PREMIUMBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-201-PREMIUMBOARD-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282394, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->

    </div>
    

















<script>
    var wyborcza_pl = wyborcza_pl || {};

    wyborcza_pl.userInfo = {
        loggedIn: false,
        loggedInSoft: false,
        email: "",
        channel: "",
        nick: "",
        nickConfirmationPending: false,
        userProfileBigData: {}
    };
</script>





    
        
            
                <div class="cap">
                    









    



    <div class="cap-message-container cap-message-container-large">
        <div class="cap-message  cap-message--hide" data-mc-placeholder-id="PLDM_ART_HAT">
            
                

                

                
                    <div class="cap-message__content">
                        <a class="font-button" data-cta="1sqbl-5basic" data-cta-category="czapeczka napis" href="https://prenumerata.wyborcza.pl/lp2/0,181539,8ddd7d4b-e431-49f8-a15e-4e910ab6ad26.html?cta=1sqbl-5basic">
                            Wybierz prenumerat�, by czyta� to, co Ci� ciekawi
                        </a>

                        <a class="btn--filled" data-cta="1sqbl-2an-5basic" data-cta-category="czapeczka przycisk" href="https://prenumerata.wyborcza.pl/lp2/0,181539,8ddd7d4b-e431-49f8-a15e-4e910ab6ad26.html?cta=1sqbl-5basic">
                            Sprawd� ofert�
                        </a>
                    </div>
                
            
        </div>
    </div>



                    <div class="container">
                        <div class="cap--container">
                            <div class="cap--left">
                                





<!-- customAlias1:  -->
<!-- customAlias2:  -->

<div class="cap-hamburger">
    <button class="cap-hamburger--icon" title="Menu">
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.02h24v1.5H0zM0 12.02h24v1.5H0zM0 20.02h24v1.5H0z" fill="currentColor" fill-rule="evenodd" />
        </svg>
    </button>

    <div class="cap-hamburger--menu">
        

        
            
            
                <ul class="cap-hamburger--menu-level1">
                    <li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://wyborcza.pl/0,0.html#main-menu">
Wyborcza.pl
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<span class="cap-hamburger--menu-level1-more">
Prenumerata cyfrowa
</span>
<ul class="cap-hamburger--menu-level2 columns-1">
<li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/marketing-proxy/template/link/LP_REDIRECT?cta=5navhpwyb#main-menu">
Czytelnicy indywidualni
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://prenumerata.wyborcza.pl/lp2/0,181472,11565a07-10bb-45b1-bfa5-54a1e419f2e2.html#main-menu">
Dla student�w
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/0,172451.html#main-menu">
Firmy i instytucje
</a>
</li>
</ul>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://czytnik.wyborcza.pl/">
Dzisiejsza Gazeta Wyborcza (e-wydanie)
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<span class="cap-hamburger--menu-level1-more">
Magazyny
</span>
<ul class="cap-hamburger--menu-level2 columns-1">
<li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/alehistoria/0,0.html#main-menu">
Ale Historia
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/duzyformat/0,0.html#main-menu">
Du�y Format
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/0,90535.html#main-menu">
Wyborcza TV i VOD
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/magazyn/0,0.html#main-menu">
Wolna Sobota
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/ksiazki/0,0.html#main-menu">
Magazyn Ksi��ki
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/0,175991.html#main-menu">
S��wka. Magazyn o j�zyku
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wyborcza.pl/0,160795.html#main-menu">
Wyborcza Classic
</a>
</li>
</ul>
</li><!-- UZREditor --><!--26526637,aliasOf--><!-- htmEOF -->
                    <li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://wyborcza.biz/biznes/0,0.html#main-menu">
Wyborcza.biz
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<span class="cap-hamburger--menu-level1-more">
Serwisy lokalne
</span>
<ul class="cap-hamburger--menu-level2 columns-2">
<li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://bialystok.wyborcza.pl/bialystok/0,0.html#main-menu">
Bia�ystok
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://bielskobiala.wyborcza.pl/bielskobiala/0,0.html#main-menu">
Bielsko-Bia�a
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://bydgoszcz.wyborcza.pl/bydgoszcz/0,0.html#main-menu">
Bydgoszcz
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://czestochowa.wyborcza.pl/czestochowa/0,0.html#main-menu">
Cz�stochowa
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://elblag.wyborcza.pl/elblag/0,0.html#main-menu">
Elbl�g
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://gliwice.wyborcza.pl/gliwice/0,0.html#main-menu">
Gliwice
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://gorzow.wyborcza.pl/gorzow/0,0.html#main-menu">
Gorz�w Wielkopolski
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://kalisz.wyborcza.pl/kalisz/0,0.html#main-menu">
Kalisz
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://katowice.wyborcza.pl/katowice/0,0.html#main-menu">
Katowice
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://kielce.wyborcza.pl/kielce/0,0.html#main-menu">
Kielce
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://koszalin.wyborcza.pl/koszalin/0,0.html#main-menu">
Koszalin
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://krakow.wyborcza.pl/krakow/0,0.html#main-menu">
Krak�w
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://lublin.wyborcza.pl/lublin/0,0.html#main-menu">
Lublin
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://lodz.wyborcza.pl/lodz/0,0.html#main-menu">
��d�
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://olsztyn.wyborcza.pl/olsztyn/0,0.html#main-menu">
Olsztyn
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://opole.wyborcza.pl/opole/0,0.html#main-menu">
Opole
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://plock.wyborcza.pl/plock/0,0.html#main-menu">
P�ock
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://poznan.wyborcza.pl/poznan/0,0.html#main-menu">
Pozna�
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://radom.wyborcza.pl/radom/0,0.html#main-menu">
Radom
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://rybnik.wyborcza.pl/rybnik/0,0.html#main-menu">
Rybnik
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://rzeszow.wyborcza.pl/rzeszow/0,0.html#main-menu">
Rzesz�w
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://sosnowiec.wyborcza.pl/sosnowiec/0,0.html#main-menu">
Sosnowiec
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://szczecin.wyborcza.pl/szczecin/0,0.html#main-menu">
Szczecin
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://torun.wyborcza.pl/torun/0,0.html#main-menu">
Toru�
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://trojmiasto.wyborcza.pl/trojmiasto/0,0.html#main-menu">
Tr�jmiasto
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://walbrzych.wyborcza.pl/walbrzych/0,0.html#main-menu">
Wa�brzych
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://warszawa.wyborcza.pl/warszawa/0,0.html#main-menu">
Warszawa
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://wroclaw.wyborcza.pl/wroclaw/0,0.html#main-menu">
Wroc�aw
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://zakopane.wyborcza.pl/zakopane/0,0.html#main-menu">
Zakopane
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,0.html#main-menu">
Zielona G�ra
</a>
</li>
</ul>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://wyborcza.biz/biznes/0,177150.html#main-menu">
Wyborcza.tech
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,0.html#main-menu">
Wysokie Obcasy
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://wyborcza.pl/0,173236.html#main-menu">
News from Poland
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://wyborcza.pl/0,87647.html#main-menu">
Witamy w Polsce
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://biqdata.wyborcza.pl/biqdata/0,0.html#main-menu">
BIQdata
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://magazyn-kuchnia.pl/magazyn-kuchnia/0,0.html#main-menu">
Magazyn Kuchnia
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://classic.wyborcza.pl/archiwumGW/0,0.html#main-menu">
Archiwum
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://www.tokfm.pl/Tokfm/0,0.html#main-menu">
TOK FM
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level1-link" data-to-reload href="https://www.gazeta.pl/0,0.html#main-menu">
Gazeta.pl
</a>
</li>
<li class="cap-hamburger--menu-level1-item">
<span class="cap-hamburger--menu-level1-more">
Inne serwisy
</span>
<ul class="cap-hamburger--menu-level2 columns-1">
<li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://next.gazeta.pl/next/0,0.html#main-menu">
Next
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://www.edziecko.pl/edziecko/0,0.html#main-menu">
Dziecko
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://zdrowie.gazeta.pl/Zdrowie/0,0.html#main-menu">
Zdrowie
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://pogoda.gazeta.pl/#main-menu">
Pogoda
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://www.sport.pl/sport-hp/0,0.html#main-menu">
Sport
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://podroze.gazeta.pl/podroze/0,0.html#main-menu">
Podr�e
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://forum.gazeta.pl/forum/0,0.html#main-menu">
Forum
</a>
</li><li class="cap-hamburger--menu-level2-item">
<a id="LinkArea:main-menu" class="cap-hamburger--menu-level2-link" href="https://avanti24.pl/#main-menu">
Avanti24
</a>
</li>
</ul>
</li><!-- UZREditor --><!--26526934,aliasOf--><!-- htmEOF -->
                </ul>
            
        
    </div>
</div>

                                


<div class="cap-search">
    <button class="cap-search--icon" type="button" title="Szukaj">
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.768 21.336l-5.265-5.265a7.6 7.6 0 10-1.12 1.12l5.265 5.265a.792.792 0 001.12-1.12zM4.585 11.29a6.021 6.021 0 016.016-6.016 6.021 6.021 0 016.016 6.016 6.021 6.021 0 01-6.016 6.016 6.021 6.021 0 01-6.016-6.016z" fill="currentColor" fill-rule="evenodd" />
        </svg>
    </button>

    <div class="cap-search--menu">
        <form class="cap-search--menu-form">
            <input class="cap-search--menu-form-input" placeholder="Szukaj">
        </form>

        <button class="cap-search--menu-close" title="Anuluj">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/>
            </svg>
        </button>

        <ul class="cap-search--list"></ul>

        <div class="cap-search--more">
            <a class="btn cap-search--more-btn" href="">Szukaj</a>
        </div>
    </div>
</div>


                                <a class="cap--reader-link" href="https://czytnik.wyborcza.pl">
                                    <img alt="" src="https://static.im-g.pl/wyborcza2020/reader-icon.jpg">
                                    Dzisiejsza gazeta (e-wydanie)
                                </a>
                            </div>

                            <div class="cap--center">
                                
                                    
                                        <h1 class="cap-vignette">
                                            




    
    
        <a id="LinkArea:logo_gora" class="cap-vignette--logo-small" href="https://wyborcza.pl/0,0.html#logo_gora" title="wyborcza.pl"></a>
<a id="LinkArea:logo_gora" class="cap-vignette--logo-large" data-to-reload href="https://wyborcza.pl/0,0.html#logo_gora" title="wyborcza.pl">
<img class="cap-vignette--logo-image" src="https://static.im-g.pl/wyborcza2020/wyborcza_pl-new.svg" alt="wyborcza.pl">
</a>
<a id="LinkArea:logo_dzial" class="cap-vignette--text-large" data-to-reload href="https://zielonagora.wyborcza.pl/zielonagora/0,0.html#logo_dzial" title="Zielona G�ra">Zielona G�ra</a><!-- UZREditor --><!-- htmEOF -->
<!--28466703, [ /htm/28466/j28466703.htm ], null-->

    



                                        </h1>
                                    
                                    
                                
                            </div>

                            <div class="cap--right">
                                <div class="cap--user-action" data-mc-placeholder-id="PLDM_ART_HAT_SCROLL"></div>

                                



<div class="cap-account">

    
        
            <a class="cap-account--icon" href="https://login.wyborcza.pl">
                
                    <span>Zaloguj si�</span>
                

                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" transform="translate(.015 1)">
                        <circle stroke="#15181B" cx="15.985" cy="15" r="15"/>
                        <path d="M24.422 23a.562.562 0 01-.562-.562v-1.275c0-.797-.54-1.49-1.315-1.684l-3.808-.951c-.574-.144-.974-.643-1.072-1.336a.613.613 0 01-.006-.084l.007-.656c0-.023.002-.047.005-.07a3.865 3.865 0 01.968-2.03c1.363-1.493 1.363-2.64 1.363-4.09 0-2.278-1.77-4.095-4.027-4.136-2.237.041-4.005 1.858-4.005 4.135 0 1.452 0 2.598 1.362 4.091.537.588.882 1.355.947 2.104l.009.7c0 .02 0 .04-.003.061-.068.663-.47 1.165-1.05 1.31l-3.81.952a1.734 1.734 0 00-1.315 1.684v1.275a.562.562 0 11-1.125 0v-1.275c0-1.315.89-2.455 2.167-2.775l3.808-.952c.146-.036.19-.22.202-.307l-.007-.62c-.042-.464-.28-.99-.654-1.4-1.657-1.815-1.657-3.288-1.657-4.849 0-2.896 2.254-5.207 5.13-5.26 2.898.053 5.152 2.364 5.152 5.26 0 1.56 0 3.034-1.656 4.85a2.77 2.77 0 00-.68 1.39l-.005.571c.02.109.078.329.224.365l3.81.952a2.857 2.857 0 012.166 2.775v1.275a.562.562 0 01-.563.562z" fill="#15181B" fill-rule="nonzero"/>
                    </g>
                </svg>
            </a>
        

        
    

</div>

                            </div>
                        </div>
                    </div>
                    
                        <div class="cap--progress-bar-outer"><div class="cap--progress-bar-inner"></div></div>
                    
                </div>
            

            
        
    
    

<!-- squidCapBean v2.2 -->

<!--24282368, [ /fix/modules/wyborcza2020/cap/cap.jsp ], squidCapBean-->

</div>





    
        







<div class="cap-navigation">
    <div class="container">
        <ul class="cap-navigation--level1">

            
            
            

            
                <li class="cap-navigation--level1-item">
                    <a id="LinkArea:nav-menu" class="cap-navigation--level1-link" href="https://wyborcza.pl/0,0.html#nav-menu" title="Wyborcza.pl">
                        <svg class="cap-navigation--back"><use xlink:href="#arrow"></use></svg>
                        Wyborcza.pl
                    </a>
                </li>
            

            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Wiadomo�ci"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,35182.html#nav-menu"
                        >
                            
                            Wiadomo�ci 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Po�ar sk�adowiska w Przylepie"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Po%BFar+sk%B3adowiska+w+Zielonej+G%F3rze#nav-menu"
                        >
                            
                            Po�ar sk�adowiska w Przylepie 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Inwestycje"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,88455.html#nav-menu"
                        >
                            
                            Inwestycje 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Classic"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,163885.html#nav-menu"
                        >
                            
                            Classic 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Zdrowie"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0%2c173571%2c25685920.html#nav-menu"
                        >
                            
                            Zdrowie 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Magazyn Lubuski"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,90220.html#nav-menu"
                        >
                            
                            Magazyn Lubuski 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Ekologia"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=ekologia#nav-menu"
                        >
                            
                            Ekologia 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Kontakt"
                            href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,25703784,napisz-zadzwon-do-gazety.html#nav-menu"
                        >
                            
                            Kontakt 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Innowacyjne Lubuskie"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Innowacyjne+Lubuskie#nav-menu"
                        >
                            
                            Innowacyjne Lubuskie 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Prenumerata"
                            href="https://wyborcza.pl/marketing-proxy/template/link/LP_REDIRECT?cta=5navlokaleprenumerata#nav-menu"
                        >
                            
                            Prenumerata 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        data-id="121838"
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Miasta"
                            
                        >
                            
                            Miasta 
                        </a>
                    </li>
                
            
                
                    <li
                        class="cap-navigation--level1-item "
                        
                    >
                        
                        <a
                            id="LinkArea:nav-menu"
                            class="cap-navigation--level1-link" title="Wakacje w Lubuskiem"
                            href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Wakacje%20w%20Lubuskiem&amp;fbclid=IwAR3AsNhvB5vMKVc24BWwDJqpegekjJHK5G-wZ7fDMKZM7pEdF4ldhlMmGhg#S.tag-K.C-B.1-L.5.redlink#nav-menu"
                        >
                            
                            Wakacje w Lubuskiem 
                        </a>
                    </li>
                
            
        </ul>

        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
                <ul class="cap-navigation--level2" data-id="121838">
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://bialystok.wyborcza.pl/bialystok/0,0.html#nav-menu" title="Bia�ystok">
                                Bia�ystok 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://bielskobiala.wyborcza.pl/bielskobiala/0,0.html#nav-menu" title="Bielsko-Bia�a">
                                Bielsko-Bia�a 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://bydgoszcz.wyborcza.pl/bydgoszcz/0,0.html#nav-menu" title="Bydgoszcz">
                                Bydgoszcz 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://czestochowa.wyborcza.pl/czestochowa/0,0.html#nav-menu" title="Cz�stochowa">
                                Cz�stochowa 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://elblag.wyborcza.pl/elblag/0,0.html#nav-menu" title="Elbl�g">
                                Elbl�g 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://gliwice.wyborcza.pl/gazetagliwice/0,0.html#nav-menu" title="Gliwice">
                                Gliwice 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://gorzow.wyborcza.pl/gorzow/0,0.html#nav-menu" title="Gorz�w Wlkp.">
                                Gorz�w Wlkp. 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://kalisz.wyborcza.pl/kalisz/0,0.html?_gl=1*1lwzj7j*_gcl_aw*R0NMLjE2MzQxMTA4NDAuQ2p3S0NBandoNXFMQmhBTEVpd0Fpb29kczlyNEFBVE0xbG5NX1JrRUZuOFpGMGlTY1VWV0phbms4RXZZZGRFM1ozZzBKU3FjMUVMN1Job0NzOVFRQXZEX0J3RQ..&amp;_ga=2.244461190.2029145694.1635894720-2035969516.1575891026&amp;_gac=1.194634463.1634110840.CjwKCAjwh5qLBhALEiwAioods9r4AATM1lnM_RkEFn8ZF0iScUVWJank8EvYddE3Z3g0JSqc1EL7RhoCs9QQAvD_BwE#TRNavSST#nav-menu" title="Kalisz">
                                Kalisz 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://katowice.wyborcza.pl/katowice/0,0.html#nav-menu" title="Katowice">
                                Katowice 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://kielce.wyborcza.pl/kielce/0,0.html#nav-menu" title="Kielce">
                                Kielce 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://koszalin.wyborcza.pl/koszalin/0,0.html?utm_source=Google&amp;utm_medium=cpc&amp;utm_campaign=koszalin_serwis&amp;utm_term=ogolny&amp;utm_content=MM_P_SL&amp;gclid=CjwKCAjwn6GGBhADEiwAruUcKlRP0gQNlYod0mzyd0Jp2cagGsQluhKpOl58f_M8nx-LbDA1nvrvORoC3SEQAvD_BwE#nav-menu" title="Koszalin">
                                Koszalin  
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://krakow.wyborcza.pl/krakow/0,0.html#nav-menu" title="Krak�w">
                                Krak�w 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://lublin.wyborcza.pl/lublin/0,0.html#nav-menu" title="Lublin">
                                Lublin 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://lodz.wyborcza.pl/lodz/0,0.html#nav-menu" title="��d�">
                                ��d� 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://olsztyn.wyborcza.pl/olsztyn/0,0.html#nav-menu" title="Olsztyn">
                                Olsztyn 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://opole.wyborcza.pl/opole/0,0.html#nav-menu" title="Opole">
                                Opole 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://plock.wyborcza.pl/plock/0,0.html#nav-menu" title="P�ock">
                                P�ock 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://poznan.wyborcza.pl/poznan/0,0.html#nav-menu" title="Pozna�">
                                Pozna� 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://radom.wyborcza.pl/radom/0,0.html#nav-menu" title="Radom">
                                Radom 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://rybnik.wyborcza.pl/rybnik/0,0.html#nav-menu" title="Rybnik">
                                Rybnik 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://rzeszow.wyborcza.pl/rzeszow/0,0.html#nav-menu" title="Rzesz�w">
                                Rzesz�w 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://sosnowiec.wyborcza.pl/gazetasosnowiec/0,0.html#nav-menu" title="Sosnowiec">
                                Sosnowiec 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://szczecin.wyborcza.pl/szczecin/0,0.html#nav-menu" title="Szczecin">
                                Szczecin 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://torun.wyborcza.pl/torun/0,0.html#nav-menu" title="Toru�">
                                Toru� 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://trojmiasto.wyborcza.pl/trojmiasto/0,0.html#nav-menu" title="Tr�jmiasto">
                                Tr�jmiasto 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://walbrzych.wyborcza.pl/walbrzych/0,0.html#nav-menu" title="Wa�brzych">
                                Wa�brzych 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://warszawa.wyborcza.pl/warszawa/0,0.html#nav-menu" title="Warszawa">
                                Warszawa 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://wroclaw.wyborcza.pl/wroclaw/0,0.html#nav-menu" title="Wroc�aw">
                                Wroc�aw 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://zakopane.wyborcza.pl/zakopane/0,0.html?utm_source=Google&amp;utm_medium=CPC&amp;utm_campaign=Search&amp;utm_term=serwis_zakopane&amp;utm_content=MM_P_SL&amp;gclid=CjwKCAjwn6GGBhADEiwAruUcKqIePwOWQbqBWFzRmvbSdGUb-YhA45tj4Nw4f-_7Fiy2kw7nD_jy_RoChU4QAvD_BwE#nav-menu" title="Zakopane">
                                Zakopane 
                            </a>
                        </li>
                    
                        <li class="cap-navigation--level2-item ">
                            
                            <a id="LinkArea:nav-menu" class="cap-navigation--level2-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,0.html#nav-menu" title="Zielona G�ra">
                                Zielona G�ra 
                            </a>
                        </li>
                    
                </ul>
            
        
            
        
    </div>
</div>

    

    


<!-- squidNavigationBean v1.0 -->

<!--410405854, [ /fix/modules/wyborcza2020/navigation.jsp ], squidNavigationModule-->


    <!-- nietypowe nawigacje -->
    <div class="container column-61" data-position="61,4">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>

    <!-- przydatne linki -->
    <div class="container column-58" data-position="58,6">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>

    <div class="column-1" data-position="1,1-2">
        <!-- SUPER MT -->
        
        <!-- MT -->
        <div class="main-topic__background">
<div class="main-topic-locale">
<div class="container main-topic-locale-wrapper">
<div class="main-topic-locale-column">
<h2 class="main-topic-locale-headline">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655819,skazenie-w-zielonej-gorze-platforma-chce-by-miastem-rzadzil.html" title="Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz">Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz</a>
</h2>
<div class="main-topic-locale-first-wrapper">
<div>
<p class="main-topic-locale-tag">
<a id="LinkArea:MT" href="//zielonagora.wyborcza.pl/0,116486.html?tag=Po%BFar+sk%B3adowiska+w+Zielonej+G%F3rze" title="Po�ar sk�adowiska w Zielonej G�rze">Po�ar sk�adowiska w Zielonej G�rze</a>
</p>
<p class="main-topic-locale-lead">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655819,skazenie-w-zielonej-gorze-platforma-chce-by-miastem-rzadzil.html" title="Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz">Prezydent Zielonej G�ry ok�amywa� ludzi, �e jest bezpieczne, a teraz nie potrafi sobie poradzi� z usuni�ciem trucizn, a ska�enie wzrasta - m�wi pos�anka El�bieta Polak. Platforma Obywatelska chce by miastem zacz�� rz�dzi� komisarz. - Prezydent jest nieudolny, dzia�a na szkod� obywateli - dodaje pose� Waldemar S�ugocki.</a>
</p>
<div class="main-topic-locale-author">
<span>Maja Sa�wacka</span>
</div>
</div>
<figure class="a-image -size-500 img--hover">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655819,skazenie-w-zielonej-gorze-platforma-chce-by-miastem-rzadzil.html" title="Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz">
<picture>
<img
srcset="
https://bi.im-g.pl/im/d3/9d/1c/z30006227NWC.jpg?r=538,
https://bi.im-g.pl/im/d3/9d/1c/z30006227NWCR.jpg?r=538 2x
"
src="https://bi.im-g.pl/im/d3/9d/1c/z30006227NWC.jpg?r=538"
alt="Po�ar w Przylepie"
/>
</picture>
</a>
</figure>
</div>
</div><div class="main-topic-locale-column">
<div class="main-topic-locale-item-wrapper">
<div class="main-topic-locale-item-content">
<h2 class="main-topic-locale-lead">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30641421,po-wystawia-marcina-pabierowskiego-kim-jest-kandydat-na-prezydenta.html" title="Kim jest Marcin Pabierowski, kandydat PO na prezydenta Zielonej G�ry? [SYLWETKA]">Kim jest Marcin Pabierowski, kandydat PO na prezydenta Zielonej G�ry? [SYLWETKA]</a>
</h2>
<p class="main-topic-locale-tag">
<a id="LinkArea:MT" href="//zielonagora.wyborcza.pl/0,116486.html?tag=wybory" title="wybory">wybory</a>
</p>
</div>
</div>
<div class="main-topic-locale-item-wrapper">
<div class="main-topic-locale-item-content">
<h2 class="main-topic-locale-lead">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30642860,upamietnimy-wiezniarki-z-obozu-fal-grunberg-i-w-sobote-przejdziemy.html#S.TD_zielona_gora-K.C-B.4-L.1.zw" title="Upami�tnimy wi�niarki z obozu w Gr�nbergu. W sobot� przejdziemy w marszu pami�ci">Upami�tnimy wi�niarki z obozu w Gr�nbergu. W sobot� przejdziemy w marszu pami�ci</a>
</h2>
<p class="main-topic-locale-tag">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=marsz+%B6mierci#S.tag-K.C-B.1-L.2.redlink" title="Marsz �mierci">Marsz �mierci</a>
</p>
</div>
</div>
<div class="main-topic-locale-item-wrapper">
<div class="main-topic-locale-item-content">
<h2 class="main-topic-locale-lead">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30638675,leca-glowy-w-radiu-zachod-propagandysci-odchodza-to-koniec.html" title="Lec� g�owy w Radiu Zach�d. &quot;Propagandy�ci odchodz�, to koniec talibanu&quot;">Lec� g�owy w Radiu Zach�d. &quot;Propagandy�ci odchodz�, to koniec talibanu&quot;</a>
</h2>
<p class="main-topic-locale-tag">
<a id="LinkArea:MT" href="//zielonagora.wyborcza.pl/0,116486.html?tag=media+publiczne" title="media publiczne">media publiczne</a>
</p>
</div>
</div>
<div class="main-topic-locale-item-wrapper">
<div class="main-topic-locale-item-content">
<h2 class="main-topic-locale-lead">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30652661,nie-zyje-antonina-grzegorzewska-pierwsza-kobieta-prezydent.html#S.TD_zielona_gora-K.C-B.2-L.1.zw" title="Nie �yje Antonina Grzegorzewska, pierwsza kobieta prezydent Zielonej G�ry">Nie �yje Antonina Grzegorzewska, pierwsza kobieta prezydent Zielonej G�ry</a>
</h2>
<p class="main-topic-locale-tag">
<a id="LinkArea:MT" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=po%BFegnanie#S.tag-K.C-B.1-L.2.redlink" title="Po�egnanie">Po�egnanie</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div><!-- UZREditor --><!-- htmEOF -->
<!--28316743, [ /htm/28316/j28316743.htm ], null-->

    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-001-TOPBOARD" class="adviewDFPBanner DFP-001-TOPBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-001-TOPBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['001-TOPBOARD'] && dfpParams.slots['001-TOPBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('001-TOPBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('001-TOPBOARD');
                } else if (!dfpParams.slots['001-TOPBOARD']) {
                    if ('001-TOPBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-001-TOPBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-001-TOPBOARD-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282361, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <!-- najnowsze -->
    <div class="container column-2" data-position="2,2">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>

    <div class="container">
        <div class="grid--r">
            <div class="grid--c-8">
                <div class="column-3" data-position="3,2">
                    <!-- tematy dnia -->
                    <div class="locale-topics-of-the-day">
<h3 class="locale-topics-of-the-day-header">
Tematy dnia w Zielonej G�rze
</h3>
<div class="locale-topics-of-the-day-articles layout-1-2-3-4">
<div class="variant-0"
data-bd-viewability="1"
data-bd-viewability-id="TD_zielona_gora"
data-bd-viewability-href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657596,hortiterapia-leczy.html#S.TD_zielona_gora-K.C-B.1-L.1.zw">
<h4 class="article-title">
<a id="LinkArea:TD_zielona_gora" class="article-title-link" title="Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657596,hortiterapia-leczy.html#S.TD_zielona_gora-K.C-B.1-L.1.zw">Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w</a>
</h4>
<div class="variant-0-content">
<div class="variant-0-content-lead">
<p class="tag-container">
<a id="LinkArea:TD_zielona_gora" class="index--tag" href="//zielonagora.wyborcza.pl/0,116486.html?tag=zdrowie#S.TD_zielona_gora-K.C-B.1-L.1.redlink" title="zdrowie">zdrowie</a>
</p>
<p class="ltd-lead-container">
<a id="LinkArea:TD_zielona_gora" class="ltd-lead-container-text" title="Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657596,hortiterapia-leczy.html#S.TD_zielona_gora-K.C-B.1-L.1.zw">Kiedy� mama dawa�a li�cie babki na skaleczone kolano albo p�uka�a pokrzyw� i skrzypem w�osy. Suplementy witaminowe mo�na bardzo �atwo zast�pi� odpowiedni� diet�, du�� ilo�ci� warzyw, owoc�w i kasz. Zdecydowanie mniej cukru, bia�ej m�ki i laktozy. Ro�lin leczniczych jest wok� nas mn�stwo i warto wr�ci� do dawnych m�dro�ci - m�wi Beata Tokarz, kt�ra prowadzi rozchwytywane ostatnio warsztaty z zio�olecznictwa i hortiterapii.</a>
</p>
<div class="ltd-author">

<div class="ltd-author-name">
<span>red</span>
</div>
</div>
</div>
<div class="variant-0-content-img">
<figure class="a-image -size-500 img--hover">
<a id="LinkArea:TD_zielona_gora" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657596,hortiterapia-leczy.html#S.TD_zielona_gora-K.C-B.1-L.1.duzy" title="Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w">
<picture>
<img
srcset="
https://bi.im-g.pl/im/6f/3c/1d/z30657647NWC.jpg?r=387,
https://bi.im-g.pl/im/6f/3c/1d/z30657647NWCR.jpg?r=387 2x
"
src="https://bi.im-g.pl/im/6f/3c/1d/z30657647NWC.jpg?r=387"
alt="Beata Tokarz prowadzi warsztaty dla dzieci i doros�ych, zak�ada ogr�dki warzywne przy przedszkolach, zajmuje si� hortiterapi�."
loading="lazy"
/>
</picture>
</a>
</figure>
</div>
</div>
</div>
<div class="variant-1-item_1"
data-bd-viewability="1"
data-bd-viewability-id="TD_zielona_gora"
data-bd-viewability-href="https://gorzow.wyborcza.pl/gorzow/7,36844,30655652,mozna-juz-skladac-wnioski-o-swiadczenie-wychowawcze-800-plus.html#S.TD_zielona_gora-K.C-B.2-L.1.zw">
<h4 class="article-title">
<a id="LinkArea:TD_zielona_gora" class="article-title-link" title="800 plus na nowy okres? Mo�na ju� sk�ada� wnioski" href="https://gorzow.wyborcza.pl/gorzow/7,36844,30655652,mozna-juz-skladac-wnioski-o-swiadczenie-wychowawcze-800-plus.html#S.TD_zielona_gora-K.C-B.2-L.1.zw">800 plus na nowy okres? Mo�na ju� sk�ada� wnioski</a>
</h4>
<div class="variant-1-item_1-content">
<div class="variant-1-item_1-content-lead">
<p class="tag-container">
<a id="LinkArea:TD_zielona_gora" class="index--tag" href="//gorzow.wyborcza.pl/0,121076.html?tag=wniosek+o+800+plus#S.TD_zielona_gora-K.C-B.2-L.1.redlink" title="wniosek o 800 plus">wniosek o 800 plus</a>
</p>
<p class="ltd-lead-container">
<a id="LinkArea:TD_zielona_gora" class="ltd-lead-container-text" title="800 plus na nowy okres? Mo�na ju� sk�ada� wnioski" href="https://gorzow.wyborcza.pl/gorzow/7,36844,30655652,mozna-juz-skladac-wnioski-o-swiadczenie-wychowawcze-800-plus.html#S.TD_zielona_gora-K.C-B.2-L.1.zw">Od 1 lutego Zak�ad Ubezpiecze� Spo�ecznych zacz�� przyjmowa� wnioski o �wiadczenie wychowawcze 800 plus na nowy okres, kt�ry rozpocznie si� 1 czerwca 2024 r. i potrwa do 31 maja 2025 r.</a>
</p>
<div class="ltd-author">
<span class="ltd-author-name">
iki
</span>
</div>
</div>
<div class="variant-1-item_1-content-img">
<figure class="a-image -size-300 img--hover">
<a id="LinkArea:TD_zielona_gora" href="https://gorzow.wyborcza.pl/gorzow/7,36844,30655652,mozna-juz-skladac-wnioski-o-swiadczenie-wychowawcze-800-plus.html#S.TD_zielona_gora-K.C-B.2-L.1.duzy" title="800 plus na nowy okres? Mo�na ju� sk�ada� wnioski">
<picture>
<img
srcset="
https://bi.im-g.pl/im/4d/35/1d/z30629453K.jpg?r=297,
https://bi.im-g.pl/im/4d/35/1d/z30629453KR.jpg?r=297 2x
"
src="https://bi.im-g.pl/im/4d/35/1d/z30629453K.jpg?r=297"
alt="800 plus: do kiedy z�o�y� wniosek, aby nie straci� pieni�dzy? (zdj. ilustracyjne)"
loading="lazy"
/>
</picture>
</a>
</figure>
</div>
</div>
</div>
<div class="variant-1-item_2"
data-bd-viewability="1"
data-bd-viewability-id="TD_zielona_gora"
data-bd-viewability-href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30649872,gorski-gra-ukraincami-by-atakowac-pabierowskiego-kandydat.html#S.TD_zielona_gora-K.C-B.2-L.2.zw">
<div class="variant-1-item_2-content">
<div class="variant-1-item_2-content-text">
<h4 class="article-title">
<a id="LinkArea:TD_zielona_gora" class="article-title-link" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30649872,gorski-gra-ukraincami-by-atakowac-pabierowskiego-kandydat.html#S.TD_zielona_gora-K.C-B.2-L.2.zw" title="G�rski gra Ukrai�cami, by atakowa� Pabierowskiego. Kandydat PO na prezydenta: Podszywa si� pode mnie w internecie, sprawa jest w s�dzie">G�rski gra Ukrai�cami, by atakowa� Pabierowskiego. Kandydat PO na prezydenta: Podszywa si� pode mnie w internecie, sprawa jest w s�dzie</a>
</h4>
<p class="tag-container">
<a id="LinkArea:TD_zielona_gora" class="index--tag" href="//zielonagora.wyborcza.pl/0,116486.html?tag=wybory+samorz%B1dowe+2024#S.TD_zielona_gora-K.C-B.2-L.2.redlink" title="Wybory">Wybory</a>
</p>
</div>
<div class="variant-1-item_2-content-img">
<figure class="a-image -size-200 img--hover">
<a id="LinkArea:TD_zielona_gora" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30649872,gorski-gra-ukraincami-by-atakowac-pabierowskiego-kandydat.html#S.TD_zielona_gora-K.C-B.2-L.2.maly" title="G�rski gra Ukrai�cami, by atakowa� Pabierowskiego. Kandydat PO na prezydenta: Podszywa si� pode mnie w internecie, sprawa jest w s�dzie">
<picture>
<img
srcset="
https://bi.im-g.pl/im/ab/39/1d/z30643627NWA.jpg?r=755,
https://bi.im-g.pl/im/ab/39/1d/z30643627NWAR.jpg?r=755 2x
"
src="https://bi.im-g.pl/im/ab/39/1d/z30643627NWA.jpg?r=755"
alt="Marcin Pabierowski"
loading="lazy"
/>
</picture>
</a>
</figure>
</div>
</div>
</div>
<div class="variant-2"
data-bd-viewability="1"
data-bd-viewability-id="TD_zielona_gora"
data-bd-viewability-href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30648402,nowe-okregi-wyborcze-w-wyscigu-do-ratusza-kto-na-tym-straci.html#S.TD_zielona_gora-K.C-B.3-L.1.zw">
<div class="variant-2-lead">
<h4 class="article-title">
<a id="LinkArea:TD_zielona_gora" class="article-title-link" title="Nowe okr�gi wyborcze w wy�cigu do ratusza. Kto na tym straci?" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30648402,nowe-okregi-wyborcze-w-wyscigu-do-ratusza-kto-na-tym-straci.html#S.TD_zielona_gora-K.C-B.3-L.1.zw">Nowe okr�gi wyborcze w wy�cigu do ratusza. Kto na tym straci?</a>
</h4>
<p class="tag-container">
<a id="LinkArea:TD_zielona_gora" class="index--tag" href="//zielonagora.wyborcza.pl/0,116486.html?tag=wybory+samorz%B1dowe#S.TD_zielona_gora-K.C-B.3-L.1.redlink" title="wybory samorz�dowe">wybory samorz�dowe</a>
</p>
<p class="ltd-lead-container">
<a id="LinkArea:TD_zielona_gora" class="ltd-lead-container-text" title="Nowe okr�gi wyborcze w wy�cigu do ratusza. Kto na tym straci?" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30648402,nowe-okregi-wyborcze-w-wyscigu-do-ratusza-kto-na-tym-straci.html#S.TD_zielona_gora-K.C-B.3-L.1.zw">J�drzychowianie zostali podzieleni na p�, Raculka zag�osuje ze star�wk�, inaczej ni� Pomorskie, by�e wsie nie zag�osuj� razem. To tylko kilka zmian, kt�re nast�pi�y po wyznaczeniu nowych wyborczych okr�g�w.</a>
</p>
<div class="ltd-author">
<span class="ltd-author-name">
Maja Sa�wacka
</span>
</div>
</div>
<div class="variant-2-img">
<figure class="a-image -size-300 img--hover">
<a id="LinkArea:TD_zielona_gora" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30648402,nowe-okregi-wyborcze-w-wyscigu-do-ratusza-kto-na-tym-straci.html#S.TD_zielona_gora-K.C-B.3-L.1.duzy" title="Nowe okr�gi wyborcze w wy�cigu do ratusza. Kto na tym straci?">
<picture>
<img
srcset="
https://bi.im-g.pl/im/3d/e6/1c/z30304317K.jpg,
https://bi.im-g.pl/im/3d/e6/1c/z30304317KR.jpg 2x
"
src="https://bi.im-g.pl/im/3d/e6/1c/z30304317K.jpg"
alt=""
loading="lazy"
/>
</picture>
</a>
</figure>
</div>
</div>
<div class="variant-3 with-border"
data-bd-viewability="1"
data-bd-viewability-id="TD_zielona_gora"
data-bd-viewability-href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html#S.TD_zielona_gora-K.C-B.4-L.1.zw">
<h4 class="article-title">
<a id="LinkArea:TD_zielona_gora" class="article-title-link" title="Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &quot;To a� 65 hektar�w&quot;" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html#S.TD_zielona_gora-K.C-B.4-L.1.zw">Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &quot;To a� 65 hektar�w&quot;</a>
</h4>
<div class="variant-0-content">
<div class="variant-0-content-lead">
<p class="tag-container">
<a id="LinkArea:TD_zielona_gora" class="index--tag" href="//zielonagora.wyborcza.pl/0,116486.html?tag=Po%BFar+sk%B3adowiska+w+Zielonej+G%F3rze#S.TD_zielona_gora-K.C-B.4-L.1.redlink" title="Po�ar sk�adowiska w Zielonej G�rze">Po�ar sk�adowiska w Zielonej G�rze</a>
</p>
<p class="ltd-lead-container">
<a id="LinkArea:TD_zielona_gora" class="ltd-lead-container-text" title="Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &quot;To a� 65 hektar�w&quot;" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html#S.TD_zielona_gora-K.C-B.4-L.1.zw">Utylizacja pogorzeliska z truj�cymi substancjami w Przylepie stan�a. Ekstremalnie niebezpieczne zwi�zki przedostaj� si� do �rodowiska. - Trzeba liczy� je w tonach - twierdzi prokuratura. - Wed�ug bieg�ego ska�ony teren obejmuje 65 ha - m�wi Ewa Antonowicz, rzeczniczka prokuratury okr�gowej. PO chce, by do miasta wszed� komisarz.</a>
</p>
<div class="ltd-author">

<div class="ltd-author-name">
<span>Maja Sa�wacka</span>
</div>
</div>
</div>
<div class="variant-0-content-img">
<figure class="a-image -size-500 img--hover">
<a id="LinkArea:TD_zielona_gora" href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html#S.TD_zielona_gora-K.C-B.4-L.1.duzy" title="Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &quot;To a� 65 hektar�w&quot;">
<picture>
<img
srcset="
https://bi.im-g.pl/im/35/9c/1c/z29999669NWC.jpg?r=608,
https://bi.im-g.pl/im/35/9c/1c/z29999669NWCR.jpg?r=608 2x
"
src="https://bi.im-g.pl/im/35/9c/1c/z29999669NWC.jpg?r=608"
alt="Po�ar w Przylepie"
loading="lazy"
/>
</picture>
</a>
</figure>
</div>
</div>
</div>
<div data-recommendations-variant="1-2-3-4" data-recommendations-template="variantTD" data-recommendations-widget-id="245" data-recommendations-linkarea="TD_zielona_gora"></div>
</div>
</div><!-- UZREditor --><!-- htmEOF -->
<!--28761922, [ /htm/28761/j28761922.htm ], null-->

                </div>
            </div>
            <div class="grid--c-4 box-divider">
                <div class="col--splint column-4" data-position="4,2-14">
                    <!-- wideo -->
                    <section class="hp-video">
<h3 class="index--header index--header-underline mb+">
<a id="LinkArea:wideo" href="https://wyborcza.pl/0,82983.html#S.wideo-K.P-B.1-L.1.dzial" title="Strefa ogl�dania i czytania">
Strefa ogl�dania i czytania
</a>
</h3>
<div
class="wyborcza-player"
data-xx="22584443"
data-series="true"
data-autoplay="true"
data-mute="true"
data-share="false"
data-bd-viewability="1"
data-bd-viewability-id="wideo"
data-bd-viewability-href="https://wyborcza.pl/0,82983.html#S.wideo-K.P-B.1-L.1.wideo"
></div>
</section><!-- UZREditor --><!-- htmEOF -->
<!--27831835, [ /htm/27831/j27831835.htm ], null-->

                    <!-- editors pick xx 28869170 -->
                    
                        <div class="editor-container desktop-hp">
<header class="editor-header pt+">
<figure class="a-image a-image--photo">
<div class="author-photo">
<picture>
<img
src="https://bi.im-g.pl/im/c9/22/1d/z30548425IA.jpg"
loading="lazy"
style="border-radius: 50%;"
/>
</picture>
</div>
</figure>
<span class="editor--section-headline index--header ml">
Ma�gorzata Bujara poleca
</span>
</header>
<div class="editor">
<ul class="editor--list">
<li
class="editor--list-item"
data-bd-viewability="1"
data-bd-viewability-id="editors_pick_hp"
data-bd-viewability-href="https://wyborcza.pl/7,75398,30656436,nie-tylko-sprzedaz-lotosu-oto-lista-afer-z-udzialem-obajtka.html#S.editors_pick_hp-K.P-B.1-L.1.maly"
>
<div class="editor--content">
<a id="LinkArea:editors_pick_hp" class="editor--section" href="https://wyborcza.pl/0,75398.html#S.editors_pick_hp-K.P-B.1-L.1.redlink" title="Kraj">Kraj</a>
<h3 class="editor--headline font-head-500">
<a id="LinkArea:editors_pick_hp" class="index--s-headline-link" href="https://wyborcza.pl/7,75398,30656436,nie-tylko-sprzedaz-lotosu-oto-lista-afer-z-udzialem-obajtka.html#S.editors_pick_hp-K.P-B.1-L.1.zw" title="Nie tylko sprzeda� Lotosu. Oto lista afer z udzia�em Obajtka, �egnaj�cego si� prezesa Orlenu">Nie tylko sprzeda� Lotosu. Oto lista afer z udzia�em Obajtka, �egnaj�cego si� prezesa Orlenu</a>
</h3>
</div>
<figure class="a-image img--hover -size-200">
<a id="LinkArea:editors_pick_hp" href="https://wyborcza.pl/7,75398,30656436,nie-tylko-sprzedaz-lotosu-oto-lista-afer-z-udzialem-obajtka.html#S.editors_pick_hp-K.P-B.1-L.1.maly" title="Nie tylko sprzeda� Lotosu. Oto lista afer z udzia�em Obajtka, �egnaj�cego si� prezesa Orlenu">
<picture>
<img
srcset="
https://bi.im-g.pl/im/96/3c/1d/z30657686NWA.jpg,
https://bi.im-g.pl/im/96/3c/1d/z30657686NWAR.jpg 2x
"
src="https://bi.im-g.pl/im/96/3c/1d/z30657686NWA.jpg"
alt="Prezes Polskiego Koncernu Naftowego Orlen Daniel Obajtek podczas konferencji prasowej w sprawie realizacji Strategii ORLEN2030, 1 lutego 2024 r."
/>
</picture>
</a>
</figure>
</li>
<li
class="editor--list-item"
data-bd-viewability="1"
data-bd-viewability-id="editors_pick_hp"
data-bd-viewability-href="https://warszawa.wyborcza.pl/warszawa/7,54420,30655064,dusili-skuli-w-kajdanki-spryskali-gazem-brutalna-interwencja.html#S.editors_pick_hp-K.P-B.1-L.2.maly"
>
<div class="editor--content">
<a id="LinkArea:editors_pick_hp" class="editor--section" href="//warszawa.wyborcza.pl/0,112418.html?tag=Tylko+na+Wyborcza.pl#S.editors_pick_hp-K.P-B.1-L.2.redlink" title="Tylko na Wyborcza.pl">Tylko na Wyborcza.pl</a>
<h3 class="editor--headline font-head-500">
<a id="LinkArea:editors_pick_hp" class="index--s-headline-link" href="https://warszawa.wyborcza.pl/warszawa/7,54420,30655064,dusili-skuli-w-kajdanki-spryskali-gazem-brutalna-interwencja.html#S.editors_pick_hp-K.P-B.1-L.2.zw" title="&quot;Spryskali mnie gazem, dusili, wrzucili do baga�nika&quot;. Tak policjanci legitymowali nastolatka w Warszawie">&quot;Spryskali mnie gazem, dusili, wrzucili do baga�nika&quot;. Tak policjanci legitymowali nastolatka w Warszawie</a>
</h3>
</div>
</li>
<li
class="editor--list-item"
data-bd-viewability="1"
data-bd-viewability-id="editors_pick_hp"
data-bd-viewability-href="https://wyborcza.pl/TylkoZdrowie/7,137474,30657464,pala-cole-i-sernik-dzieci-wciagniete-w-chinskie-jednorazowe.html#S.editors_pick_hp-K.P-B.1-L.3.maly"
>
<div class="editor--content">
<a id="LinkArea:editors_pick_hp" class="editor--section" href="//wyborcza.pl//0,128956.html?tag=e-papieros#S.editors_pick_hp-K.P-B.1-L.3.redlink" title="e-papieros">e-papieros</a>
<h3 class="editor--headline font-head-500">
<a id="LinkArea:editors_pick_hp" class="index--s-headline-link" href="https://wyborcza.pl/TylkoZdrowie/7,137474,30657464,pala-cole-i-sernik-dzieci-wciagniete-w-chinskie-jednorazowe.html#S.editors_pick_hp-K.P-B.1-L.3.zw" title="Pal� col�, sernik i koktajl z jednoro�ca. Dzieci wci�gni�te w smakowe e-papierosy">Pal� col�, sernik i koktajl z jednoro�ca. Dzieci wci�gni�te w smakowe e-papierosy</a>
</h3>
</div>
</li>
</ul>
</div>
</div><!-- UZREditor --><!-- htmEOF -->
                    
                    
                    <!-- opinie -->
                    



<div class="index--s variant_hp variant_hp-large ">
    
        <h3 class="index--header index--header-underline">
            <a id="LinkArea:prawa1"
                href="https://zielonagora.wyborcza.pl/zielonagora/0,35162.html"
                title="Sport">Sport
            </a>
        </h3>
    
    <ul class="index--s-list ">
        
            <li class="index--s-list-item"
                
                >
                <div class="index--content">
                    <h4 class="index--s-headline font-head-500">
                        <a id="LinkArea:prawa1"
                            href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30632851,zastal-blizej-utrzymania-w-arcywaznym-meczu-wygrywa-z-sokolem.html"
                            title="Zastal bli�ej utrzymania! W arcywa�nym meczu wygrywa z Soko�em �a�cut 86:84 [ZDJ�CIA]"
                            class="index--s-headline-link font-head-500">
                            Zastal bli�ej utrzymania! W arcywa�nym meczu wygrywa z Soko�em �a�cut 86:84 [ZDJ�CIA]
                        </a>
                    </h4>
                    <p>
                        <a id="LinkArea:prawa1"
                            href="https://wyborcza.pl/0,116486.html?tag=Enea+Zastal+BC+Zielona+G%F3ra" title="Enea Zastal BC Zielona G�ra" class="index--tag">
                            Enea Zastal BC Zielona G�ra
                        </a>
                    </p>
                </div>
                
                    
                        
                        
                            
                                
                                
                                    <figure class="a-image -size-200 -hover mt-">
                                        
                                        
                                        <a id="LinkArea:prawa1"
                                            href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30632851,zastal-blizej-utrzymania-w-arcywaznym-meczu-wygrywa-z-sokolem.html"
                                            title="Zastal bli�ej utrzymania! W arcywa�nym meczu wygrywa z Soko�em �a�cut 86:84 [ZDJ�CIA]">
                                            <picture>
                                                <img
                                                    srcset="https://bi.im-g.pl/im/e2/36/1d/z30632674K.jpg, https://bi.im-g.pl/im/e2/36/1d/z30632674KR.jpg 2x"
                                                    src="https://bi.im-g.pl/im/e2/36/1d/z30632674K.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </picture>
                                        </a>
                                    </figure>
                                
                            
                        
                    
                
            </li>
        
            <li class="index--s-list-item"
                
                >
                <div class="index--content">
                    <h4 class="index--s-headline ">
                        <a id="LinkArea:prawa1"
                            href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30615322,lechia-i-czarne-koszule-graly-pod-balonem-a-kiedy-zaswieca.html"
                            title="Lechia i Czarne Koszule gra�y pod balonem. A kiedy za�wiec� jupitery na zielonog�rskim Do�ku?"
                            class="index--s-headline-link ">
                            Lechia i Czarne Koszule gra�y pod balonem. A kiedy za�wiec� jupitery na zielonog�rskim Do�ku?
                        </a>
                    </h4>
                    <p>
                        <a id="LinkArea:prawa1"
                            href="https://wyborcza.pl/0,116486.html?tag=pi%B3ka+no%BFna" title="pi�ka no�na" class="index--tag">
                            pi�ka no�na
                        </a>
                    </p>
                </div>
                
            </li>
        
            <li class="index--s-list-item"
                
                >
                <div class="index--content">
                    <h4 class="index--s-headline ">
                        <a id="LinkArea:prawa1"
                            href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30613908,enea-zastal-przed-najwazniejszym-meczem-w-sezonie-klub-kibica.html"
                            title="Enea Zastal przed najwa�niejszym meczem w sezonie. Klub kibica: Nie mo�e was zabrakn��"
                            class="index--s-headline-link ">
                            Enea Zastal przed najwa�niejszym meczem w sezonie. Klub kibica: Nie mo�e was zabrakn��
                        </a>
                    </h4>
                    <p>
                        <a id="LinkArea:prawa1"
                            href="https://wyborcza.pl/0,116486.html?tag=koszyk%F3wka" title="koszyk�wka" class="index--tag">
                            koszyk�wka
                        </a>
                    </p>
                </div>
                
            </li>
        
    </ul>
    
        
            <div class="index--s-more">
                <a id="LinkArea:prawa1"
                    class="btn btn--clear"
                    href="https://zielonagora.wyborcza.pl/zielonagora/0,35162.html"
                    title="wi�cej">
                    wi�cej
                </a>
            </div>
        
    
</div>

<!--28443809, [ /fix/modules/wyborcza2020/universalIndexHp.jsp ], HPIndexWithTaggerModule-->

                    <!-- swiat -->
                    
                    <!-- lena -->
                    
                    
                        <!-- ze schowka -->
                        <div class="read-later--placeholder-aside"></div>
                    
                    




    
        
        
        
        <section class="index--s variant_hp col-margin ">
            <h3 class="index--header index--s-header">
                
                    
                        <a id="LinkArea:recommendation"
                            href="https://wyborcza.pl/0,95891.html"
                            title="">
                            
                        </a>
                    
                    
                
            </h3>
            <ul class="index--s-list">
                
                
                    
                        <li
                            class="index--list-item"
                            data-bd-viewability="1"
                            data-bd-viewability-id="recommendation"
                            data-bd-viewability-href="https://olsztyn.wyborcza.pl/olsztyn/7,108801,30621797,olsztyn-na-ferie-naturalnie-i-aktywnie.html?do_w=249&do_v=788&do_st=PP&do_sid=549&do_a=549">
                            <div class="index--content">
                                <h4 class="index--s-headline">
                                    <a id="LinkArea:recommendation"
                                        class="index--s-headline-link"
                                        href="https://olsztyn.wyborcza.pl/olsztyn/7,108801,30621797,olsztyn-na-ferie-naturalnie-i-aktywnie.html?do_w=249&do_v=788&do_st=PP&do_sid=549&do_a=549"
                                        title="Olsztyn na ferie: naturalnie i aktywnie">
                                            Olsztyn na ferie: naturalnie i aktywnie
                                    </a>
                                </h4>
                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    
                                    
                                
                            </div>
                            
                        </li>
                    
                
                    
                        <li
                            class="index--list-item"
                            data-bd-viewability="1"
                            data-bd-viewability-id="recommendation"
                            data-bd-viewability-href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,171094,30650839,w-walentynki-przypomnij-bliskiej-kobiecie-o-jej-sile.html?do_w=249&do_v=788&do_st=PP&do_sid=549&do_a=549">
                            <div class="index--content">
                                <h4 class="index--s-headline">
                                    <a id="LinkArea:recommendation"
                                        class="index--s-headline-link"
                                        href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,171094,30650839,w-walentynki-przypomnij-bliskiej-kobiecie-o-jej-sile.html?do_w=249&do_v=788&do_st=PP&do_sid=549&do_a=549"
                                        title="W Walentynki przypomnij bliskiej kobiecie o jej sile">
                                            W Walentynki przypomnij bliskiej kobiecie o jej sile
                                    </a>
                                </h4>
                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    
                                    
                                
                            </div>
                            
                        </li>
                    
                
                    
                
                    
                
            </ul>
        </section>
    
    


<!-- recommendationsArticle v1.2 -->

<!--28418015, [ /fix/modules/wyborcza2020/recommendationsArticle.jsp ], BigDataWidgetRecommendationModule-->

                    
                    
                    <div class="col--splint-grow-1">
                        


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-003-RECTANGLE" class="adviewDFPBanner DFP-003-RECTANGLE">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-003-RECTANGLE-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['003-RECTANGLE'] && dfpParams.slots['003-RECTANGLE'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('003-RECTANGLE');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('003-RECTANGLE');
                } else if (!dfpParams.slots['003-RECTANGLE']) {
                    if ('003-RECTANGLE'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-003-RECTANGLE');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-003-RECTANGLE-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282310, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->

                    </div>
                </div>
            </div>
        </div>
        <div class="grid--r">
            <div class="grid--c-8">
                <div class="column-3" data-position="3,4">
                    
                </div>
                <div class="column-3" data-position="3,6">
                    
                </div>
            </div>
        </div>
        <div class="container column-6" data-position="6,2">
            <div class="grid--r">
                <div class="grid--c-12">
                    
                </div>
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-000-MAINBOARD" class="adviewDFPBanner DFP-000-MAINBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-000-MAINBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['000-MAINBOARD'] && dfpParams.slots['000-MAINBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('000-MAINBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('000-MAINBOARD');
                } else if (!dfpParams.slots['000-MAINBOARD']) {
                    if ('000-MAINBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-000-MAINBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-000-MAINBOARD-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282362, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <div class="container">
        <div class="grid--r">
            <div class="grid--c-9">
                <div class="column-7" data-position="7,2-4">
                    <!-- wiadomosci -->
                    
                    
                </div>
            </div>
            <div class="grid--c-3">
                <div class="column-8" data-position="8,2-6">
                    <!-- news from Poland -->
                    
                    <!-- listy do redakcji -->
                    
                    
                </div>
            </div>
        </div>
    </div>

    <div class="container column-9" data-position="9,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                




    <section class="index--s variant_on">
        <h3 class="index--header index--s-header">
            
                
                    <a id="LinkArea:wiadomosci"
                        href="https://zielonagora.wyborcza.pl/zielonagora/0,35182.html"
                        title="Wiadomo�ci">
                        Wiadomo�ci
                    </a>
                

                
            
        </h3>

        <div class="index--s-grid">
            <ul class="index--s-list">
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item -large-image "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-500"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30658412,moskwa-klamala-ze-w-przylepie-jest-bezpiecznie-pisza-do-bodnara.html"
                                    title="Minister Moskwa k�ama�a, �e w Przylepie jest bezpiecznie? Pisz� do ministra Bodnara, by zabezpieczy� dokumenty"
                                >
                                    Minister Moskwa k�ama�a, �e w Przylepie jest bezpiecznie? Pisz� do ministra Bodnara, by zabezpieczy� dokumenty
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://zielonagora.wyborcza.pl/zielonagora/0,35182.html"
                                            title="Wiadomo�ci z Zielonej G�ry">
                                            Wiadomo�ci z Zielonej G�ry
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            
                                
                                
                                
                            

                            

                            <figure class="a-image -hover -size-300">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30658412,moskwa-klamala-ze-w-przylepie-jest-bezpiecznie-pisza-do-bodnara.html"
                                    title="Minister Moskwa k�ama�a, �e w Przylepie jest bezpiecznie? Pisz� do ministra Bodnara, by zabezpieczy� dokumenty"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/94/3d/1d/z30658708K,Joanna-Liddane--Janusz-Rewers--Elzbieta-Pola--Dari.jpg, https://bi.im-g.pl/im/94/3d/1d/z30658708KR,Joanna-Liddane--Janusz-Rewers--Elzbieta-Pola--Dari.jpg 2x"
                                            src="https://bi.im-g.pl/im/94/3d/1d/z30658708K,Joanna-Liddane--Janusz-Rewers--Elzbieta-Pola--Dari.jpg"
                                            alt="Joanna Liddane, Janusz Rewers, El�bieta Pola, Dariusz Legutowski i Marcin Pabierowski."
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://gorzow.wyborcza.pl/gorzow/7,36844,30655652,mozna-juz-skladac-wnioski-o-swiadczenie-wychowawcze-800-plus.html"
                                    title="Mo�na ju� sk�ada� wnioski o �wiadczenie wychowawcze 800 plus na nowy okres"
                                >
                                    Mo�na ju� sk�ada� wnioski o �wiadczenie wychowawcze 800 plus na nowy okres
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,121076.html?tag=wniosek+o+800+plus"
                                            title="wniosek o 800 plus">
                                            wniosek o 800 plus
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  -small-image"
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://szczecin.wyborcza.pl/szczecin/7,34939,30658169,niemieccy-rolnicy-i-przedsiebiorcy-zablokuja-na-caly-piatek.html"
                                    title="Niemieccy rolnicy i przedsi�biorcy zablokuj� na ca�y pi�tek transgraniczn� tras� i przej�cie graniczne ko�o Szczecina"
                                >
                                    Niemieccy rolnicy i przedsi�biorcy zablokuj� na ca�y pi�tek transgraniczn� tras� i przej�cie graniczne ko�o Szczecina
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,113203.html?tag=granica+polsko-niemiecka"
                                            title="granica polsko-niemiecka">
                                            granica polsko-niemiecka
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            

                            
                                
                                
                                
                            

                            <figure class="a-image -hover -size-200">
                                <a id="LinkArea:wiadomosci"
                                    href="https://szczecin.wyborcza.pl/szczecin/7,34939,30658169,niemieccy-rolnicy-i-przedsiebiorcy-zablokuja-na-caly-piatek.html"
                                    title="Niemieccy rolnicy i przedsi�biorcy zablokuj� na ca�y pi�tek transgraniczn� tras� i przej�cie graniczne ko�o Szczecina"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/3c/34/19/z26427964NWA,Polsko-niemiecka-granica-w-Lubieszynie-kolo-Szczec.jpg, https://bi.im-g.pl/im/3c/34/19/z26427964NWAR,Polsko-niemiecka-granica-w-Lubieszynie-kolo-Szczec.jpg 2x"
                                            src="https://bi.im-g.pl/im/3c/34/19/z26427964NWA,Polsko-niemiecka-granica-w-Lubieszynie-kolo-Szczec.jpg"
                                            alt="Polsko-niemiecka granica w Lubieszynie ko�o Szczecina"
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    
                        </ul>
                        <ul class="index--s-list">
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657596,hortiterapia-leczy.html"
                                    title="Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w"
                                >
                                    Hortiterapia brzmi dziwnie? A potrafi �wietnie leczy� pacjent�w
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=zdrowie"
                                            title="zdrowie">
                                            zdrowie
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  -small-image"
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657215,mzk-testuje-9-metrowe-elektryczne-solarisy-kubicki-chcemy.html"
                                    title="MZK testuje 9-metrowe elektryczne solarisy. Kubicki: Chcemy, by autobusy wje�d�a�y na Chmieln�"
                                >
                                    MZK testuje 9-metrowe elektryczne solarisy. Kubicki: Chcemy, by autobusy wje�d�a�y na Chmieln�
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=MZK+Zielona+G%F3ra"
                                            title="MZK Zielona G�ra">
                                            MZK Zielona G�ra
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            

                            
                                
                                
                                
                            

                            <figure class="a-image -hover -size-200">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30657215,mzk-testuje-9-metrowe-elektryczne-solarisy-kubicki-chcemy.html"
                                    title="MZK testuje 9-metrowe elektryczne solarisy. Kubicki: Chcemy, by autobusy wje�d�a�y na Chmieln�"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/4d/3c/1d/z30657357NWA,9-metrowy-solaris.jpg, https://bi.im-g.pl/im/4d/3c/1d/z30657357NWAR,9-metrowy-solaris.jpg 2x"
                                            src="https://bi.im-g.pl/im/4d/3c/1d/z30657357NWA,9-metrowy-solaris.jpg"
                                            alt="9-metrowy solaris"
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655819,skazenie-w-zielonej-gorze-platforma-chce-by-miastem-rzadzil.html"
                                    title="Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz"
                                >
                                    Ro�nie ska�enie po po�arze trucizn w Przylepie. Platforma chce, by miastem rz�dzi� komisarz
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=Po%BFar+sk%B3adowiska+w+Zielonej+G%F3rze"
                                            title="Po�ar sk�adowiska w Zielonej G�rze">
                                            Po�ar sk�adowiska w Zielonej G�rze
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  -small-image"
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655996,tajemnica-nagrobku-w-parku-tysiaclecia-oczom-odlegly-sercu.html"
                                    title="Tajemnica nagrobku w parku Tysi�clecia. &#034;Oczom odleg�y, sercu na wieki bliski&#034;"
                                >
                                    Tajemnica nagrobku w parku Tysi�clecia. &#034;Oczom odleg�y, sercu na wieki bliski&#034;
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://zielonagora.wyborcza.pl/zielonagora/0,35182.html"
                                            title="Wiadomo�ci z Zielonej G�ry">
                                            Wiadomo�ci z Zielonej G�ry
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            

                            
                                
                                
                                
                            

                            <figure class="a-image -hover -size-200">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655996,tajemnica-nagrobku-w-parku-tysiaclecia-oczom-odlegly-sercu.html"
                                    title="Tajemnica nagrobku w parku Tysi�clecia. &#034;Oczom odleg�y, sercu na wieki bliski&#034;"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/f8/3c/1d/z30655992NWA,Zielona-Gora--Park-Tysiaclecia--styczen-2024-r--Ob.jpg, https://bi.im-g.pl/im/f8/3c/1d/z30655992NWAR,Zielona-Gora--Park-Tysiaclecia--styczen-2024-r--Ob.jpg 2x"
                                            src="https://bi.im-g.pl/im/f8/3c/1d/z30655992NWA,Zielona-Gora--Park-Tysiaclecia--styczen-2024-r--Ob.jpg"
                                            alt="Zielona G�ra, Park Tysi�clecia, stycze� 2024 r. Obok nagrobka Paula Mischke stan�a tabliczka informacyjna."
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    
                        </ul>
                        <ul class="index--s-list">
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30655110,lubuscy-zolnierze-z-miedzyrzecza-jada-na-goraca-granice-w-libanie.html"
                                    title="Lubuscy �o�nierze z Mi�dzyrzecza jad� na gor�c� granic� w Libanie"
                                >
                                    Lubuscy �o�nierze z Mi�dzyrzecza jad� na gor�c� granic� w Libanie
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://zielonagora.wyborcza.pl/zielonagora/0,35182.html"
                                            title="Wiadomo�ci z Zielonej G�ry">
                                            Wiadomo�ci z Zielonej G�ry
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30654683,lubuski-psl-przejmuje-rolnicza-agencje-jest-juz-nowy-dyrektor.html"
                                    title="Lubuskie PSL przejmuje agencj� rolnicz�. Jest ju� nowy dyrektor ARiMR"
                                >
                                    Lubuskie PSL przejmuje agencj� rolnicz�. Jest ju� nowy dyrektor ARiMR
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=wybory"
                                            title="wybory">
                                            wybory
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item -large-image "
                        
                            data-recommendations-template="variantON"
                            data-recommendations-widget-id=""
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-500"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30654548,przewrot-w-lubuskim-starostwie-pis-traci-wladze-w-mateczniku.html"
                                    title="Przewr�t w lubuskim starostwie. PiS traci w�adz� w mateczniku wojewody Dajczaka"
                                >
                                    Przewr�t w lubuskim starostwie. PiS traci w�adz� w mateczniku wojewody Dajczaka
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=wybory"
                                            title="wybory">
                                            wybory
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            
                                
                                
                                
                            

                            

                            <figure class="a-image -hover -size-300">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30654548,przewrot-w-lubuskim-starostwie-pis-traci-wladze-w-mateczniku.html"
                                    title="Przewr�t w lubuskim starostwie. PiS traci w�adz� w mateczniku wojewody Dajczaka"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/88/da/13/z20818568K,Wizyta-prezydenta-Andrzeja-Dudy-w-Strzelcach-Kraje.jpg, https://bi.im-g.pl/im/88/da/13/z20818568KR,Wizyta-prezydenta-Andrzeja-Dudy-w-Strzelcach-Kraje.jpg 2x"
                                            src="https://bi.im-g.pl/im/88/da/13/z20818568K,Wizyta-prezydenta-Andrzeja-Dudy-w-Strzelcach-Kraje.jpg"
                                            alt="Wizyta prezydenta Andrzeja Dudy w Strzelcach Kraje�skich. Wmurowanie kamienia w�gielnego pod rozbudow� podstaw�wki i spotkanie z mieszka�cami na rynku"
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30654075,wreczono-kolejne-stypendia-naukowe-tworcze-i-artystyczne-przez.html"
                                    title="Wr�czono kolejne stypendia naukowe, tw�rcze i artystyczne. Przez 20 lat dosta�o je ponad 400 uczni�w"
                                >
                                    Wr�czono kolejne stypendia naukowe, tw�rcze i artystyczne. Przez 20 lat dosta�o je ponad 400 uczni�w
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=stypendia"
                                            title="stypendia">
                                            stypendia
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    
                        </ul>
                        <ul class="index--s-list">
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  -small-image"
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30653824,radni-zgodzili-sie-by-studenci-za-darmo-jezdzili-autobusami.html"
                                    title="Radni zgodzili si� na darmowe bilety MZK dla student�w. Teraz konsultacje ze zwi�zkami zawodowymi"
                                >
                                    Radni zgodzili si� na darmowe bilety MZK dla student�w. Teraz konsultacje ze zwi�zkami zawodowymi
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=MZK+Zielona+G%F3ra"
                                            title="MZK Zielona G�ra">
                                            MZK Zielona G�ra
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            

                            
                                
                                
                                
                            

                            <figure class="a-image -hover -size-200">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30653824,radni-zgodzili-sie-by-studenci-za-darmo-jezdzili-autobusami.html"
                                    title="Radni zgodzili si� na darmowe bilety MZK dla student�w. Teraz konsultacje ze zwi�zkami zawodowymi"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/74/7d/1b/z28827508NWA.jpg, https://bi.im-g.pl/im/74/7d/1b/z28827508NWAR.jpg 2x"
                                            src="https://bi.im-g.pl/im/74/7d/1b/z28827508NWA.jpg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30653568,33-latek-okradl-zielonogorski-market-rzucil-sie-z-piesciami.html"
                                    title="33-latek okrad� zielonog�rski market, rzuci� si� z pi�ciami na ochroniarza. Grozi mu 15 lat wi�zienia"
                                >
                                    33-latek okrad� zielonog�rski market, rzuci� si� z pi�ciami na ochroniarza. Grozi mu 15 lat wi�zienia
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=kradzie%BF+w+markecie"
                                            title="kradzie� w markecie">
                                            kradzie� w markecie
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  -small-image"
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html"
                                    title="Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &#034;To a� 65 hektar�w&#034;"
                                >
                                    Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &#034;To a� 65 hektar�w&#034;
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=Po%BFar+sk%B3adowiska+w+Zielonej+G%F3rze"
                                            title="Po�ar sk�adowiska w Zielonej G�rze">
                                            Po�ar sk�adowiska w Zielonej G�rze
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                            

                            

                            

                            
                                
                                
                                
                            

                            <figure class="a-image -hover -size-200">
                                <a id="LinkArea:wiadomosci"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30651392,pozar-w-przylepie-utylizacja-stanela-skazenie-rosnie-prokuratura.html"
                                    title="Po�ar w Przylepie. Utylizacja stan�a, ska�enie ro�nie. Prokuratura: &#034;To a� 65 hektar�w&#034;"
                                >
                                    <picture>
                                        <img
                                            srcset="https://bi.im-g.pl/im/35/9c/1c/z29999669NWA.jpg, https://bi.im-g.pl/im/35/9c/1c/z29999669NWAR.jpg 2x"
                                            src="https://bi.im-g.pl/im/35/9c/1c/z29999669NWA.jpg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            </figure>
                        
                    </li>
                
                    

                    

                    
                    

                    <li
                        class="index--s-list-item  "
                        
                    >
                        <div class="index--s-content">
                            <h4 class="index--s-headline">
                                <a id="LinkArea:wiadomosci"
                                    class="index--s-headline-link -font-300"
                                    href="https://zielonagora.wyborcza.pl/zielonagora/7,35182,30652661,nie-zyje-antonina-grzegorzewska-pierwsza-kobieta-prezydent.html"
                                    title="Nie �yje Antonina Grzegorzewska, pierwsza kobieta prezydent Zielonej G�ry"
                                >
                                    Nie �yje Antonina Grzegorzewska, pierwsza kobieta prezydent Zielonej G�ry
                                </a>
                            </h4>

                            <p class="index--tags">
                                
                                    

                                    
                                        <a id="LinkArea:wiadomosci"
                                            class="index--tag"
                                            href="https://wyborcza.pl/0,116486.html?tag=Antonina+Grzegorzewska"
                                            title="Antonina Grzegorzewska">
                                            Antonina Grzegorzewska
                                        </a>
                                    
                                
                            </p>
                        </div>

                        
                    </li>
                
            </ul>
        </div>
    </section>


<!--28573778, [ /fix/modules/wyborcza2020/indexLocal.jsp ], HPIndexWithTaggerModule-->

                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-087-ADBOARD-A" class="adviewDFPBanner DFP-087-ADBOARD-A">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-087-ADBOARD-A-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['087-ADBOARD-A'] && dfpParams.slots['087-ADBOARD-A'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('087-ADBOARD-A');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('087-ADBOARD-A');
                } else if (!dfpParams.slots['087-ADBOARD-A']) {
                    if ('087-ADBOARD-A'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-087-ADBOARD-A');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-087-ADBOARD-A-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282363, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <!-- Lokal -->
    <div class="container column-10" data-position="10,2">
        <div class="grid--r">
            <div class="grid--c-12">
                <section class="index--s variant_mp separatorDisabled bigHeader">
<h3 class="index--header index--s-header">
Serwisy specjalne
</h3>
<ul class="index--s-list">
<li class="index--s-list-item">
<div class="index--content">
<figure class="a-image -hover -size-300">
<a id="LinkArea:special" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=szpital+w+Zielonej+G%F3rze#S.tag-K.C-B.1-L.5.redlink" title="Szpital w Zielonej G�rze ma europejskiej klasy lekarzy">
<picture>
<img srcset="https://bi.im-g.pl/im/a1/5c/1b/z28691361NWD.jpg?r=3, https://bi.im-g.pl/im/a1/5c/1b/z28691361NWDR.jpg?r=3 2x"
src="https://bi.im-g.pl/im/a1/5c/1b/z28691361NWD.jpg?r=3"
alt="Szpital Uniwersytecki. Operacja zespo�u dr Dawida Murawy"
loading="lazy"/>
</picture>
</a>
</figure>
<p >
<a id="LinkArea:special" class="index--tag index--tag-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=szpital+w+Zielonej+G%F3rze#S.tag-K.C-B.1-L.5.redlink" title="Szpital w Zielonej G�rze">
Szpital w Zielonej G�rze
</a>
</p>
<h4 class="index--s-headline">
<a id="LinkArea:special" class="index--s-headline-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=szpital+w+Zielonej+G%F3rze#S.tag-K.C-B.1-L.5.redlink" title="Szpital w Zielonej G�rze ma europejskiej klasy lekarzy">
Szpital w Zielonej G�rze ma europejskiej klasy lekarzy
</a>
</h4>
</div>
</li><li class="index--s-list-item">
<div class="index--content">
<figure class="a-image -hover -size-300">
<a id="LinkArea:special" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Wakacje%20w%20Lubuskiem&amp;fbclid=IwAR3AsNhvB5vMKVc24BWwDJqpegekjJHK5G-wZ7fDMKZM7pEdF4ldhlMmGhg#S.tag-K.C-B.1-L.5.redlink#nav-menu" title="Lubuskie jeziora, na kt�rych wiej� dobre wiatry dla �eglarzy">
<picture>
<img srcset="https://bi.im-g.pl/im/bb/5b/1b/z28685499NWD.jpg, https://bi.im-g.pl/im/bb/5b/1b/z28685499NWDR.jpg 2x"
src="https://bi.im-g.pl/im/bb/5b/1b/z28685499NWD.jpg"
alt="Jezioro w Lubniweicach"
loading="lazy"/>
</picture>
</a>
</figure>
<p >
<a id="LinkArea:special" class="index--tag index--tag-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Wakacje%20w%20Lubuskiem&amp;fbclid=IwAR3AsNhvB5vMKVc24BWwDJqpegekjJHK5G-wZ7fDMKZM7pEdF4ldhlMmGhg#S.tag-K.C-B.1-L.5.redlink#nav-menu" title="Wakacje 2023">
Wakacje 2023
</a>
</p>
<h4 class="index--s-headline">
<a id="LinkArea:special" class="index--s-headline-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Wakacje%20w%20Lubuskiem&amp;fbclid=IwAR3AsNhvB5vMKVc24BWwDJqpegekjJHK5G-wZ7fDMKZM7pEdF4ldhlMmGhg#S.tag-K.C-B.1-L.5.redlink#nav-menu" title="Lubuskie jeziora, na kt�rych wiej� dobre wiatry dla �eglarzy">
Lubuskie jeziora, na kt�rych wiej� dobre wiatry dla �eglarzy
</a>
</h4>
</div>
</li><li class="index--s-list-item">
<div class="index--content">
<figure class="a-image -hover -size-300">
<a id="LinkArea:special" href="https://poznan.wyborcza.pl/poznan/7,36001,29822278,zanzibar-jordania-dubaj-na-wakacje-z-poznania-mozna-leciec.html" title="Zanzibar, Jordania, Dubaj. Na wakacje z Poznania mo�na lecie� przez ca�y rok. I to w bardzo atrakcyjne miejsca">
<picture>
<img srcset="https://bi.im-g.pl/im/41/70/1c/z29822273NWD.jpg?r=3, https://bi.im-g.pl/im/41/70/1c/z29822273NWDR.jpg?r=3 2x"
src="https://bi.im-g.pl/im/41/70/1c/z29822273NWD.jpg?r=3"
alt="Petra w Jordanii - obiekt z listy �wiatowego dziedzictwa UNESCO. Do stolicy Jordanii Ammanu mo�na dolecie� z lotniska Pozna� �awica."
loading="lazy"/>
</picture>
</a>
</figure>
<p >
<a id="LinkArea:special" class="index--tag index--tag-link" href="//poznan.wyborcza.pl/0,113459.html?tag=Lotnisko+%A3awica" title="Lotnisko �awica">
Lotnisko �awica
</a>
</p>
<h4 class="index--s-headline">
<a id="LinkArea:special" class="index--s-headline-link" href="https://poznan.wyborcza.pl/poznan/7,36001,29822278,zanzibar-jordania-dubaj-na-wakacje-z-poznania-mozna-leciec.html" title="Zanzibar, Jordania, Dubaj. Na wakacje z Poznania mo�na lecie� przez ca�y rok. I to w bardzo atrakcyjne miejsca">
Zanzibar, Jordania, Dubaj. Na wakacje z Poznania mo�na lecie� przez ca�y rok. I to w bardzo atrakcyjne miejsca
</a>
</h4>
</div>
</li><li class="index--s-list-item">
<div class="index--content">
<figure class="a-image -hover -size-300">
<a id="LinkArea:special" href="https://gorzow.wyborcza.pl/gorzow/0,173570,25685823.html" title="Szpital w Gorzowie leczy na �wiatowym poziomie">
<picture>
<img srcset="https://bi.im-g.pl/im/44/56/1b/z28664644NWD.jpg?r=1, https://bi.im-g.pl/im/44/56/1b/z28664644NWDR.jpg?r=1 2x"
src="https://bi.im-g.pl/im/44/56/1b/z28664644NWD.jpg?r=1"
alt="Szpital w Gorzowie leczy na �wiatowym poziomie"
loading="lazy"/>
</picture>
</a>
</figure>
<p >
<a id="LinkArea:special" class="index--tag index--tag-link" href="https://gorzow.wyborcza.pl/gorzow/0,173570,25685823.html" title="Lubuskie zdrowie">
Lubuskie zdrowie
</a>
</p>
<h4 class="index--s-headline">
<a id="LinkArea:special" class="index--s-headline-link" href="https://gorzow.wyborcza.pl/gorzow/0,173570,25685823.html" title="Szpital w Gorzowie leczy na �wiatowym poziomie">
Szpital w Gorzowie leczy na �wiatowym poziomie
</a>
</h4>
</div>
</li>
</ul>
</section><!-- UZREditor --><!-- htmEOF -->
<!--28324317, [ /htm/28324/j28324317.htm ], null-->

            </div>
        </div>
    </div>

    <div class="container" id="lokale">
        
            
            
                <!-- brak cookie lokalu, localeSectionName cookie==null -->
                <div class="column-10" data-position="10,4-6">
                    <div class="grid--r">
                        <div class="grid--c-12">
                            <div class="column-10" data-position="10,4">
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        
    </div>
    <div class="container column-10" data-position="10,8">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-087-ADBOARD-B" class="adviewDFPBanner DFP-087-ADBOARD-B">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-087-ADBOARD-B-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['087-ADBOARD-B'] && dfpParams.slots['087-ADBOARD-B'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('087-ADBOARD-B');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('087-ADBOARD-B');
                } else if (!dfpParams.slots['087-ADBOARD-B']) {
                    if ('087-ADBOARD-B'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-087-ADBOARD-B');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-087-ADBOARD-B-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282364, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <!-- Gospodarka -->
    <div class="container column-11" data-position="11,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                




    
        
        <section class="index--s variant_mp separatorDisabled  bigHeader ">
            <h3 class="index--header index--s-header">
                
                    
                    
                        Materia�y promocyjne
                    
                
            </h3>
            <ul class="index--s-list">
                
                
                    
                        <li class="index--s-list-item"
                            
                            >
                            <div class="index--content">
                                
                                    <figure class="a-image -hover -size-300">
                                        <a id="LinkArea:polecamy"
                                            href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,161873,30650657,klika-slow-o-milosci-czyli-nowa-kolekcja-manifest-od-marki.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                            title="Kilka s��w o mi�o�ci, czyli nowa kolekcja Manifest od marki YES">
                                            <picture>
                                                
                                                    

                                                    
                                                        <img
                                                            srcset="
                                                                https://bi.im-g.pl/im/39/3b/1d/z30650681K.jpg,
                                                                https://bi.im-g.pl/im/39/3b/1d/z30650681KR.jpg 2x
                                                            "
                                                            src="https://bi.im-g.pl/im/39/3b/1d/z30650681K.jpg"
                                                            alt="Kilka s��w o mi�o�ci, czyli nowa kolekcja Manifest od marki YES"
                                                            loading="lazy"
                                                        />
                                                    
                                                
                                            </picture>
                                        </a>
                                    </figure>
                                

                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    

                                    
                                

                                <h4 class="index--s-headline">
                                    <a
                                        id="LinkArea:polecamy"
                                        class="index--s-headline-link"
                                        href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,161873,30650657,klika-slow-o-milosci-czyli-nowa-kolekcja-manifest-od-marki.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                        title="Kilka s��w o mi�o�ci, czyli nowa kolekcja Manifest od marki YES"
                                    >
                                        Kilka s��w o mi�o�ci, czyli nowa kolekcja Manifest od marki YES
                                    </a>
                                </h4>
                            </div>
                        </li>
                    
                
                    
                        <li class="index--s-list-item"
                            
                            >
                            <div class="index--content">
                                
                                    <figure class="a-image -hover -size-300">
                                        <a id="LinkArea:polecamy"
                                            href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,161873,30652153,kolekcja-amour.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                            title="Kolekcja Amour">
                                            <picture>
                                                
                                                    

                                                    
                                                        <img
                                                            srcset="
                                                                https://bi.im-g.pl/im/a4/3b/1d/z30652324K.jpg,
                                                                https://bi.im-g.pl/im/a4/3b/1d/z30652324KR.jpg 2x
                                                            "
                                                            src="https://bi.im-g.pl/im/a4/3b/1d/z30652324K.jpg"
                                                            alt="Kolekcja Amour"
                                                            loading="lazy"
                                                        />
                                                    
                                                
                                            </picture>
                                        </a>
                                    </figure>
                                

                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    

                                    
                                

                                <h4 class="index--s-headline">
                                    <a
                                        id="LinkArea:polecamy"
                                        class="index--s-headline-link"
                                        href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,161873,30652153,kolekcja-amour.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                        title="Kolekcja Amour"
                                    >
                                        Kolekcja Amour
                                    </a>
                                </h4>
                            </div>
                        </li>
                    
                
                    
                        <li class="index--s-list-item"
                            
                            >
                            <div class="index--content">
                                
                                    <figure class="a-image -hover -size-300">
                                        <a id="LinkArea:polecamy"
                                            href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,171094,30650839,w-walentynki-przypomnij-bliskiej-kobiecie-o-jej-sile.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                            title="W Walentynki przypomnij bliskiej kobiecie o jej sile">
                                            <picture>
                                                
                                                    

                                                    
                                                        <img
                                                            srcset="
                                                                https://bi.im-g.pl/im/eb/3b/1d/z30650859K.jpg,
                                                                https://bi.im-g.pl/im/eb/3b/1d/z30650859KR.jpg 2x
                                                            "
                                                            src="https://bi.im-g.pl/im/eb/3b/1d/z30650859K.jpg"
                                                            alt="W Walentynki przypomnij bliskiej kobiecie o jej sile"
                                                            loading="lazy"
                                                        />
                                                    
                                                
                                            </picture>
                                        </a>
                                    </figure>
                                

                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    

                                    
                                

                                <h4 class="index--s-headline">
                                    <a
                                        id="LinkArea:polecamy"
                                        class="index--s-headline-link"
                                        href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,171094,30650839,w-walentynki-przypomnij-bliskiej-kobiecie-o-jej-sile.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                        title="W Walentynki przypomnij bliskiej kobiecie o jej sile"
                                    >
                                        W Walentynki przypomnij bliskiej kobiecie o jej sile
                                    </a>
                                </h4>
                            </div>
                        </li>
                    
                
                    
                        <li class="index--s-list-item"
                            
                            >
                            <div class="index--content">
                                
                                    <figure class="a-image -hover -size-300">
                                        <a id="LinkArea:polecamy"
                                            href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,157369,30607222,pour-over-perfekcyjna-przyjemnosc-z-picia-kawy-w-domu.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                            title="Pour over. Perfekcyjna przyjemno�� z picia kawy w domu / Pour over - czym jest kawa przelewowa i jak j� zaparzy�?">
                                            <picture>
                                                
                                                    

                                                    
                                                        <img
                                                            srcset="
                                                                https://bi.im-g.pl/im/05/30/1d/z30607877K.jpg,
                                                                https://bi.im-g.pl/im/05/30/1d/z30607877KR.jpg 2x
                                                            "
                                                            src="https://bi.im-g.pl/im/05/30/1d/z30607877K.jpg"
                                                            alt="Pour over. Perfekcyjna przyjemno�� z picia kawy w domu / Pour over - czym jest kawa przelewowa i jak j� zaparzy�?"
                                                            loading="lazy"
                                                        />
                                                    
                                                
                                            </picture>
                                        </a>
                                    </figure>
                                

                                
                                    
                                        
                                            
                                                <p class="index--tag index--tag-business">
                                                    Materia� promocyjny
                                                </p>
                                            
                                            
                                            
                                            
                                        
                                    

                                    
                                

                                <h4 class="index--s-headline">
                                    <a
                                        id="LinkArea:polecamy"
                                        class="index--s-headline-link"
                                        href="https://www.wysokieobcasy.pl/wysokie-obcasy/7,157369,30607222,pour-over-perfekcyjna-przyjemnosc-z-picia-kawy-w-domu.html?do_w=244&do_v=651&do_st=PP&do_sid=624&do_a=624"
                                        title="Pour over. Perfekcyjna przyjemno�� z picia kawy w domu / Pour over - czym jest kawa przelewowa i jak j� zaparzy�?"
                                    >
                                        Pour over. Perfekcyjna przyjemno�� z picia kawy w domu / Pour over - czym jest kawa przelewowa i jak j� zaparzy�?
                                    </a>
                                </h4>
                            </div>
                        </li>
                    
                
            </ul>
        </section>
    

    


<!-- recommendationsPartners v1.2 -->

<!--28375007, [ /fix/modules/wyborcza2020/recommendationsPartners.jsp ], BigDataWidgetRecommendationModule-->

                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-087-ADBOARD-C" class="adviewDFPBanner DFP-087-ADBOARD-C">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-087-ADBOARD-C-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['087-ADBOARD-C'] && dfpParams.slots['087-ADBOARD-C'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('087-ADBOARD-C');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('087-ADBOARD-C');
                } else if (!dfpParams.slots['087-ADBOARD-C']) {
                    if ('087-ADBOARD-C'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-087-ADBOARD-C');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-087-ADBOARD-C-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282365, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <!-- magazyny -->
    <div class="container column-12" data-position="12,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-087-ADBOARD-D" class="adviewDFPBanner DFP-087-ADBOARD-D">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-087-ADBOARD-D-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['087-ADBOARD-D'] && dfpParams.slots['087-ADBOARD-D'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('087-ADBOARD-D');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('087-ADBOARD-D');
                } else if (!dfpParams.slots['087-ADBOARD-D']) {
                    if ('087-ADBOARD-D'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-087-ADBOARD-D');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-087-ADBOARD-D-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282366, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <!-- ostatnia strona internetu, materialy partnerow-->
    <div class="container column-13" data-position="13,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                
                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-087-ADBOARD-E" class="adviewDFPBanner DFP-087-ADBOARD-E">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-087-ADBOARD-E-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['087-ADBOARD-E'] && dfpParams.slots['087-ADBOARD-E'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('087-ADBOARD-E');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('087-ADBOARD-E');
                } else if (!dfpParams.slots['087-ADBOARD-E']) {
                    if ('087-ADBOARD-E'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-087-ADBOARD-E');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-087-ADBOARD-E-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282390, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <div class="container column-14" data-position="14,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                
                
            </div>
        </div>
    </div>

    <!-- Adboard-F -->

    <div class="container column-15" data-position="15,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                
                
            </div>
        </div>
    </div>

    <!-- ADS -->
    


    
    
        <!-- #wrap /tpl/ads/prod/dfpSlot.jsp -->
        




    <div id="adUnit-042-FOOTBOARD" class="adviewDFPBanner DFP-042-FOOTBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-042-FOOTBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['042-FOOTBOARD'] && dfpParams.slots['042-FOOTBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('042-FOOTBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('042-FOOTBOARD');
                } else if (!dfpParams.slots['042-FOOTBOARD']) {
                    if ('042-FOOTBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-042-FOOTBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-042-FOOTBOARD-0'); });
                }
            </script>
        </div>
    </div>



<!-- v2.2.2 -->
    


<!--24282391, [ /fix/modules/wyborcza/dfpSlot.jsp ], dfpBanersSlotBean-->


    <div class="container column-16" data-position="16,2-4">
        <div class="grid--r">
            <div class="grid--c-12">
                <div class="mod_obituary_premium">
<div class="node_head">
<h3>
<a title="Nekrologi" href="https://nekrologi.wyborcza.pl/0,0.html">Nekrologi</a>
</h3>
<a class="link" href="https://wyborcza.pl/nekrologi/0,107423,8021919.html">+ nadaj nekrolog</a>
</div>
<div class="node_body">
<div class="slider slider_nekrologi">
<div class="node_prev">
<div class="prev">
<a href="#"></a>
</div>
</div>
<div class="node_entries clearfix">
<div class="node_inner_entries">
<ul><li><h5>
<a title="Rodzinie i Bliskim Zmar&#322;ej Pani Danuty Krojcig" class="with-icon" href="https://nekrologi.wyborcza.pl/0,11,,571375,Danuta-Krojcig-kondolencje.html">Rodzinie i Bliskim Zmar&#322;ej Pani Danuty Krojcig</a>
</h5>
<span>sk&#322;adamy wyrazy szczerego wsp&oacute;&#322;czucia</span>
<p>Marcin Jab&#322;o&#324;ski Marsza&#322;ek Wojew&oacute;dztwa Lubuskiego, Wac&#322;aw Maciuszonek Przewodnicz&#261;cy Sejmiku</p>
<a class="more" href="https://nekrologi.wyborcza.pl/0,11,,571375,Danuta-Krojcig-kondolencje.html">wi&#281;cej &raquo;</a></li></ul>
</div>
</div>
<div class="node_next">
<div class="next">
<a href="#"></a>
</div>
</div>
</div>
</div>
</div>

<!--8452933, [ /htm/8452/j8452933.htm ], null-->

                
            </div>
        </div>
    </div>


    <div class="container column-61" data-position="61,2">
        <div class="grid--r">
            <div class="grid--c-12">
                
            </div>
        </div>
    </div>
    <div class="container column-61" data-position="61,10-12">
        <div class="grid--r">
            <div class="grid--c-12">
                <div class="roach" data-bd-viewability-id="wazne" data-bd-viewability="1">
<h3 class="roach--header">Tematy wa�ne dla Zielonej G�ry</h3>
<input class="roach--control-input" role="button" type="checkbox" id="roach-control-28527225" checked>
<label class="roach--control" for="roach-control-28527225" data-opened="zwi�" data-closed="rozwi�" href="#roach"></label>
<div class="roach--toggle">
<section class="roach--section">
<header class="roach--section-header">Komunikacja</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=kolej#S.wazne-K.C-B.1-L.1.zw" title="Kolej w Lubuskiem">Kolej w Lubuskiem</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Droga+S3#S.wazne-K.C-B.1-L.2.zw" title="Droga S3">Droga S3</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=MZK+Zielona+G%F3ra#S.wazne-K.C-B.1-L.3.zw" title="MZK Zielona G�ra">MZK Zielona G�ra</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=rowery#S.wazne-K.C-B.1-L.4.zw" title="Rowery po lubusku">Rowery po lubusku</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=autostrada+A2#S.wazne-K.C-B.1-L.5.zw" title="Autostrada A2">Autostrada A2</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=autostrada+A+18#S.wazne-K.C-B.1-L.6.zw" title="Autostrada A18">Autostrada A18</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=remonty#S.wazne-K.C-B.1-L.7.zw" title="Remonty">Remonty</a></li></ul>
</section>
<section class="roach--section">
<header class="roach--section-header">Inwestycje lubuskie</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=inwestycje#S.wazne-K.C-B.2-L.1.zw" title="Inwestycje">Inwestycje</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Lubuskie+Innowacje#S.wazne-K.C-B.2-L.2.zw" title="Innowacje">Innowacje</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=gospodarka#S.wazne-K.C-B.2-L.3.zw" title="Gospodarka">Gospodarka</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=nowe+technologie#S.wazne-K.C-B.2-L.4.zw" title="Nowe technologie">Nowe technologie</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Mosty#S.wazne-K.C-B.2-L.5.zw" title="Mosty w Lubuskiem">Mosty w Lubuskiem</a></li></ul>
</section>
<section class="roach--section">
<header class="roach--section-header">Szko�y i uczelnie</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Uniwersytet+Zielonog%F3rski#S.wazne-K.C-B.3-L.1.zw" title="Uniwersytet Zielonog�rski">Uniwersytet Zielonog�rski</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=licea#S.wazne-K.C-B.3-L.2.zw" title="Licea">Licea</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=o%B6wiata#S.wazne-K.C-B.3-L.3.zw" title="O�wiata">O�wiata</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=technika#S.wazne-K.C-B.3-L.4.zw" title="Technika">Technika</a></li></ul>
</section>
<section class="roach--section">
<header class="roach--section-header">Kultura</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Muzeum+w+Zielonej+G%F3rze#S.wazne-K.C-B.4-L.1.zw" title="Muzeum w Zielonej G�rze">Muzeum w Zielonej G�rze</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Teatr+Lubuski#S.wazne-K.C-B.4-L.2.zw" title="Teatr Lubuski">Teatr Lubuski</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=Filharmonia+Zielonog%F3rska#S.wazne-K.C-B.4-L.3.zw" title="Filharmonia Zielonog�rska">Filharmonia Zielonog�rska</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=BWA+Zielona+G%F3ra#S.wazne-K.C-B.4-L.4.zw" title="Galeria BWA">Galeria BWA</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://zielonagora.wyborcza.pl/zielonagora/0,116486.html?tag=architektura#S.wazne-K.C-B.4-L.5.zw" title="Architektura">Architektura</a></li></ul>
</section>
</div>
</div><!-- UZREditor --><!-- htmEOF -->
<!--28527225, [ /htm/28527/j28527225.htm ], null-->

                <div class="roach" data-bd-viewability-id="wazne" data-bd-viewability="1">
<h3 class="roach--header">Warto przeczyta�</h3>
<input class="roach--control-input" role="button" type="checkbox" id="roach-control-28534422" checked>
<label class="roach--control" for="roach-control-28534422" data-opened="zwi�" data-closed="rozwi�" href="#roach"></label>
<div class="roach--toggle">
<section class="roach--section">
<header class="roach--section-header">Magazyn Kuchnia</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,29190720,kolorowa-tarta-z-suszonymi-pomidorami-i-pieczonymi-warzywami.html#S.wazne-K.C-B.1-L.1.zw" title="Tarta z suszonymi pomidorami">Tarta z suszonymi pomidorami</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,29095233,pumpkin-spice-latte.html#S.wazne-K.C-B.1-L.2.zw" title="Pumpkin Spice Latte">Pumpkin Spice Latte</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,29190813,krem-z-burakow-z-nuta-mandarynki.html#S.wazne-K.C-B.1-L.3.zw" title="Krem z burak�w z nut� mandarynki">Krem z burak�w z nut� mandarynki</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,123892,15582141,przepis-na-najlepsze-kotlety-mielone-bez-udziwnien-i-zbytecznych.html#S.wazne-K.C-B.1-L.4.zw" title="Najlepsze kotlety mielone">Najlepsze kotlety mielone</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,29196366,francuska-zupa-cebulowa-z-grzankami.html#S.wazne-K.C-B.1-L.5.zw" title="Francuska zupa cebulowa z grzankami">Francuska zupa cebulowa z grzankami</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,29196306,pieczony-kalafior-w-stylu-srodziemnomorskim-z-oliwkami-kaparami.html#S.wazne-K.C-B.1-L.6.zw" title="Pieczony kalafior">Pieczony kalafior</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/7,137782,26759406,makaron-w-15-minut-przepisy-na-proste-szybkie-i-zdrowe-dania.html#S.wazne-K.C-B.1-L.7.zw" title="Szybki przepis na makaron">Szybki przepis na makaron</a></li></ul>
</section>
<section class="roach--section">
<header class="roach--section-header">Magazyny</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/0,128956.html?tag=ksi%B1%BFki#S.wazne-K.C-B.2-L.1.zw" title="Ciekawe ksi��ki">Ciekawe ksi��ki</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/0,128956.html?tag=serial#S.wazne-K.C-B.2-L.2.zw" title="Najlepsze seriale">Najlepsze seriale</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/0,128956.html?tag=Netflix#S.wazne-K.C-B.2-L.3.zw" title="Co ogl�da� na Netflix?">Co ogl�da� na Netflix?</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/0,128956.html?tag=quiz#S.wazne-K.C-B.2-L.4.zw" title="Quizy wiedzy">Quizy wiedzy</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/magazyn/0,0.html#S.wazne-K.C-B.2-L.5.zw" title="Wolna sobota">Wolna sobota</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/duzyformat/0,0.html#S.wazne-K.C-B.2-L.6.zw" title="Reporta�e">Reporta�e</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://wyborcza.pl/TylkoZdrowie/0,0.html#S.wazne-K.C-B.2-L.7.zw" title="Tylko Zdrowie">Tylko Zdrowie</a></li></ul>
</section>
<section class="roach--section">
<header class="roach--section-header">Licytacje, przetargi</header>
<ul class="roach--section-list">
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/ogloszenia/kategoria-przetargi/1?sortowanie=data-malejaco#S.wazne-K.C-B.3-L.1.zw" title="Przetargi">Przetargi</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/ogloszenia/kategoria-nieruchomosci/1?sortowanie=data-malejaco#S.wazne-K.C-B.3-L.2.zw" title="Nieruchomo�ci">Nieruchomo�ci</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/ogloszenia/kategoria-syndycy-i-komornicy/podkategoria-licytacje_komornicze/1?sortowanie=data-malejaco#S.wazne-K.C-B.3-L.3.zw" title="Licytacje komornicze">Licytacje komornicze</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/ogloszenia/kategoria-urzedy-i-sady/1?sortowanie=data-malejaco#S.wazne-K.C-B.3-L.4.zw" title="Komunikaty">Komunikaty</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/ogloszenia/kategoria-praca-szkolenia/1?sortowanie=data-malejaco#S.wazne-K.C-B.3-L.5.zw" title="Og�oszenia o prac�">Og�oszenia o prac�</a></li>
<li class="roach--section-list-item"><a id="LinkArea:wazne" class="roach--section-link" href="https://www.komunikaty.pl/artykuly/kategoria-Poradnik_przedsiebiorcy/1#S.wazne-K.C-B.3-L.6.zw" title="Poradnik przedsi�biorcy">Poradnik przedsi�biorcy</a></li></ul>
</section>
</div>
</div><!-- UZREditor --><!-- htmEOF -->
<!--28534422, [ /htm/28534/j28534422.htm ], null-->

            </div>
        </div>
    </div>

<div class="column-61" data-position="61,14">
    <!-- stopka -->
    




<div class="container">
    <section class="footer-vignette">
        <div class="cap-vignette">
            <a id="LinkArea:logo_dol" class="cap-vignette--logo-large" data-to-reload href="https://wyborcza.pl/0,0.html#logo_dol" title="wyborcza.pl">
                <img class="cap-vignette--logo-image" src="https://static.im-g.pl/wyborcza2020/wyborcza_pl-new.svg" alt="wyborcza.pl">
            </a>
        </div>
    </section>

    <input class="footer-navi--checkbox" id="footer-navi--checkbox" type="checkbox">

    <section class="footer-navi">
        <div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-0" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-0">Wyborcza.pl</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75398.html#S.stopka_gora-K.C-B.1-L.1.zw" title="Kraj" >Kraj</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75399.html#S.stopka_gora-K.C-B.1-L.2.zw" title="�wiat" >�wiat</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,173236.html#S.stopka_gora-K.C-B.1-L.3.zw" title="News from Poland" >News from Poland</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75968.html#S.stopka_gora-K.C-B.1-L.4.zw" title="Opinie" >Opinie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75400.html#S.stopka_gora-K.C-B.1-L.5.zw" title="Nauka" >Nauka</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,177851.html#S.stopka_gora-K.C-B.1-L.6.zw" title="Klimat i �rodowisko" >Klimat i �rodowisko</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75410.html#S.stopka_gora-K.C-B.1-L.7.zw" title="Kultura" >Kultura</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,154903.html#S.stopka_gora-K.C-B.1-L.8.zw" title="Sport" >Sport</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,82983.html#S.stopka_gora-K.C-B.1-L.9.zw" title="Strefa czytania i ogl�dania" >Strefa czytania i ogl�dania</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,87647.html#S.stopka_gora-K.C-B.1-L.10.zw" title="Witamy w Polsce" >Witamy w Polsce</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,160795.html#S.stopka_gora-K.C-B.1-L.11.zw" title="Wyborcza Classic" >Wyborcza Classic</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-1" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-1">Wyborcza.biz</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,149543.html#S.stopka_gora-K.C-B.2-L.1.zw" title="Aktualno�ci" >Aktualno�ci</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,177150.html#S.stopka_gora-K.C-B.2-L.2.zw" title="Technologie" >Technologie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,156481.html#S.stopka_gora-K.C-B.2-L.3.zw" title="Motoryzacja i podr�e" >Motoryzacja i podr�e</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,159911.html#S.stopka_gora-K.C-B.2-L.4.zw" title="Praca" >Praca</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,179190.html#S.stopka_gora-K.C-B.2-L.5.zw" title="Energetyka" >Energetyka</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,182270.html#S.stopka_gora-K.C-B.2-L.6.zw" title="M�j Biznes" >M�j Biznes</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147880.html#S.stopka_gora-K.C-B.2-L.7.zw" title="ZUS i emerytury" >ZUS i emerytury</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147582.html#S.stopka_gora-K.C-B.2-L.8.zw" title="Finanse i podatki" >Finanse i podatki</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147758.html#S.stopka_gora-K.C-B.2-L.9.zw" title="Nieruchomo�ci" >Nieruchomo�ci</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-2" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-2">Serwisy lokalne</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bialystok.wyborcza.pl/bialystok/0,0.html#S.stopka_gora-K.C-B.3-L.1.zw" title="Bia�ystok" >Bia�ystok</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bielskobiala.wyborcza.pl/bielskobiala/0,0.html#S.stopka_gora-K.C-B.3-L.2.zw" title="Bielsko-Bia�a" >Bielsko-Bia�a</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bydgoszcz.wyborcza.pl/bydgoszcz/0,0.html#S.stopka_gora-K.C-B.3-L.3.zw" title="Bydgoszcz" >Bydgoszcz</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://czestochowa.wyborcza.pl/czestochowa/0,0.html#S.stopka_gora-K.C-B.3-L.4.zw" title="Cz�stochowa" >Cz�stochowa</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://elblag.wyborcza.pl/elblag/0,0.html#S.stopka_gora-K.C-B.3-L.5.zw" title="Elbl�g" >Elbl�g</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://gliwice.wyborcza.pl/gliwice/0,0.html#S.stopka_gora-K.C-B.3-L.6.zw" title="Gliwice" >Gliwice</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://gorzow.wyborcza.pl/gorzow/0,0.html#S.stopka_gora-K.C-B.3-L.7.zw" title="Gorz�w Wlkp." >Gorz�w Wlkp.</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://kalisz.wyborcza.pl/kalisz/0,0.html#S.stopka_gora-K.C-B.3-L.8.zw" title="Kalisz" >Kalisz</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://katowice.wyborcza.pl/katowice/0,0.html#S.stopka_gora-K.C-B.3-L.9.zw" title="Katowice" >Katowice</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://kielce.wyborcza.pl/kielce/0,0.html#S.stopka_gora-K.C-B.3-L.10.zw" title="Kielce" >Kielce</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://koszalin.wyborcza.pl/koszalin/0,0.html#S.stopka_gora-K.C-B.3-L.11.zw" title="Koszalin" >Koszalin</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://krakow.wyborcza.pl/krakow/0,0.html#S.stopka_gora-K.C-B.3-L.12.zw" title="Krak�w" >Krak�w</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://lublin.wyborcza.pl/lublin/0,0.html#S.stopka_gora-K.C-B.3-L.13.zw" title="Lublin" >Lublin</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://lodz.wyborcza.pl/lodz/0,0.html#S.s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   




<div class="container">
    <section class="footer-vignette">
        <div class="cap-vignette">
            <a id="LinkArea:logo_dol" class="cap-vignette--logo-large" data-to-reload href="https://wyborcza.pl/0,0.html#logo_dol" title="wyborcza.pl">
                <img class="cap-vignette--logo-image" src="https://static.im-g.pl/wyborcza2020/wyborcza_pl-new.svg" alt="wyborcza.pl">
            </a>
        </div>
    </section>

    <input class="footer-navi--checkbox" id="footer-navi--checkbox" type="checkbox">

    <section class="footer-navi">
        <div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-0" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-0">Wyborcza.pl</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75398.html#S.stopka_gora-K.C-B.1-L.1.zw" title="Kraj" >Kraj</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75399.html#S.stopka_gora-K.C-B.1-L.2.zw" title="�wiat" >�wiat</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,173236.html#S.stopka_gora-K.C-B.1-L.3.zw" title="News from Poland" >News from Poland</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75968.html#S.stopka_gora-K.C-B.1-L.4.zw" title="Opinie" >Opinie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75400.html#S.stopka_gora-K.C-B.1-L.5.zw" title="Nauka" >Nauka</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,177851.html#S.stopka_gora-K.C-B.1-L.6.zw" title="Klimat i �rodowisko" >Klimat i �rodowisko</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,75410.html#S.stopka_gora-K.C-B.1-L.7.zw" title="Kultura" >Kultura</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,154903.html#S.stopka_gora-K.C-B.1-L.8.zw" title="Sport" >Sport</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,82983.html#S.stopka_gora-K.C-B.1-L.9.zw" title="Strefa czytania i ogl�dania" >Strefa czytania i ogl�dania</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,87647.html#S.stopka_gora-K.C-B.1-L.10.zw" title="Witamy w Polsce" >Witamy w Polsce</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,160795.html#S.stopka_gora-K.C-B.1-L.11.zw" title="Wyborcza Classic" >Wyborcza Classic</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-1" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-1">Wyborcza.biz</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,149543.html#S.stopka_gora-K.C-B.2-L.1.zw" title="Aktualno�ci" >Aktualno�ci</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,177150.html#S.stopka_gora-K.C-B.2-L.2.zw" title="Technologie" >Technologie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,156481.html#S.stopka_gora-K.C-B.2-L.3.zw" title="Motoryzacja i podr�e" >Motoryzacja i podr�e</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,159911.html#S.stopka_gora-K.C-B.2-L.4.zw" title="Praca" >Praca</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,179190.html#S.stopka_gora-K.C-B.2-L.5.zw" title="Energetyka" >Energetyka</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,182270.html#S.stopka_gora-K.C-B.2-L.6.zw" title="M�j Biznes" >M�j Biznes</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147880.html#S.stopka_gora-K.C-B.2-L.7.zw" title="ZUS i emerytury" >ZUS i emerytury</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147582.html#S.stopka_gora-K.C-B.2-L.8.zw" title="Finanse i podatki" >Finanse i podatki</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.biz/biznes/0,147758.html#S.stopka_gora-K.C-B.2-L.9.zw" title="Nieruchomo�ci" >Nieruchomo�ci</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-2" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-2">Serwisy lokalne</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bialystok.wyborcza.pl/bialystok/0,0.html#S.stopka_gora-K.C-B.3-L.1.zw" title="Bia�ystok" >Bia�ystok</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bielskobiala.wyborcza.pl/bielskobiala/0,0.html#S.stopka_gora-K.C-B.3-L.2.zw" title="Bielsko-Bia�a" >Bielsko-Bia�a</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://bydgoszcz.wyborcza.pl/bydgoszcz/0,0.html#S.stopka_gora-K.C-B.3-L.3.zw" title="Bydgoszcz" >Bydgoszcz</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://czestochowa.wyborcza.pl/czestochowa/0,0.html#S.stopka_gora-K.C-B.3-L.4.zw" title="Cz�stochowa" >Cz�stochowa</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://elblag.wyborcza.pl/elblag/0,0.html#S.stopka_gora-K.C-B.3-L.5.zw" title="Elbl�g" >Elbl�g</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://gliwice.wyborcza.pl/gliwice/0,0.html#S.stopka_gora-K.C-B.3-L.6.zw" title="Gliwice" >Gliwice</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://gorzow.wyborcza.pl/gorzow/0,0.html#S.stopka_gora-K.C-B.3-L.7.zw" title="Gorz�w Wlkp." >Gorz�w Wlkp.</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://kalisz.wyborcza.pl/kalisz/0,0.html#S.stopka_gora-K.C-B.3-L.8.zw" title="Kalisz" >Kalisz</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://katowice.wyborcza.pl/katowice/0,0.html#S.stopka_gora-K.C-B.3-L.9.zw" title="Katowice" >Katowice</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://kielce.wyborcza.pl/kielce/0,0.html#S.stopka_gora-K.C-B.3-L.10.zw" title="Kielce" >Kielce</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://koszalin.wyborcza.pl/koszalin/0,0.html#S.stopka_gora-K.C-B.3-L.11.zw" title="Koszalin" >Koszalin</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://krakow.wyborcza.pl/krakow/0,0.html#S.stopka_gora-K.C-B.3-L.12.zw" title="Krak�w" >Krak�w</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://lublin.wyborcza.pl/lublin/0,0.html#S.stopka_gora-K.C-B.3-L.13.zw" title="Lublin" >Lublin</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://lodz.wyborcza.pl/lodz/0,0.html#S.stopka_gora-K.C-B.3-L.14.zw" title="��d�" >��d�</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://olsztyn.wyborcza.pl/olsztyn/0,0.html#S.stopka_gora-K.C-B.3-L.15.zw" title="Olsztyn" >Olsztyn</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://opole.wyborcza.pl/opole/0,0.html#S.stopka_gora-K.C-B.3-L.16.zw" title="Opole" >Opole</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://plock.wyborcza.pl/plock/0,0.html#S.stopka_gora-K.C-B.3-L.17.zw" title="P�ock" >P�ock</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://poznan.wyborcza.pl/poznan/0,0.html#S.stopka_gora-K.C-B.3-L.18.zw" title="Pozna�" >Pozna�</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://radom.wyborcza.pl/radom/0,0.html#S.stopka_gora-K.C-B.3-L.19.zw" title="Radom" >Radom</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://rzeszow.wyborcza.pl/rzeszow/0,0.html#S.stopka_gora-K.C-B.3-L.20.zw" title="Rzesz�w" >Rzesz�w</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://rybnik.wyborcza.pl/rybnik/0,0.html#S.stopka_gora-K.C-B.3-L.21.zw" title="Rybnik" >Rybnik</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://sosnowiec.wyborcza.pl/sosnowiec/0,0.html#S.stopka_gora-K.C-B.3-L.22.zw" title="Sosnowiec" >Sosnowiec</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://szczecin.wyborcza.pl/szczecin/0,0.html#S.stopka_gora-K.C-B.3-L.23.zw" title="Szczecin" >Szczecin</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://torun.wyborcza.pl/torun/0,0.html#S.stopka_gora-K.C-B.3-L.24.zw" title="Toru�" >Toru�</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://trojmiasto.wyborcza.pl/trojmiasto/0,0.html#S.stopka_gora-K.C-B.3-L.25.zw" title="Tr�jmiasto" >Tr�jmiasto</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://walbrzych.wyborcza.pl/walbrzych/0,0.html#S.stopka_gora-K.C-B.3-L.26.zw" title="Wa�brzych" >Wa�brzych</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://warszawa.wyborcza.pl/warszawa/0,0.html#S.stopka_gora-K.C-B.3-L.27.zw" title="Warszawa" >Warszawa</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wroclaw.wyborcza.pl/wroclaw/0,0.html#S.stopka_gora-K.C-B.3-L.28.zw" title="Wroc�aw" >Wroc�aw</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://zakopane.wyborcza.pl/zakopane/0,0.html#S.stopka_gora-K.C-B.3-L.29.zw" title="Zakopane" >Zakopane</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://zielonagora.wyborcza.pl/zielonagora/0,0.html#S.stopka_gora-K.C-B.3-L.30.zw" title="Zielona G�ra" >Zielona G�ra</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-3" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-3">Wysokieobcasy.pl</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,114757.html#S.stopka_gora-K.C-B.4-L.1.zw" title="Najnowsze" >Najnowsze</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,100865.html#S.stopka_gora-K.C-B.4-L.2.zw" title="G�osy Kobiet" >G�osy Kobiet</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/zyclepiej/0,0.html#S.stopka_gora-K.C-B.4-L.3.zw" title="�y� Lepiej. Psychologia Codziennie" >�y� Lepiej. Psychologia Codziennie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,66725.html#S.stopka_gora-K.C-B.4-L.4.zw" title="Wasze listy" >Wasze listy</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,53662.html#S.stopka_gora-K.C-B.4-L.5.zw" title="Portrety Kobiet" >Portrety Kobiet</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,166173.html#S.stopka_gora-K.C-B.4-L.6.zw" title="Nowy Numer" >Nowy Numer</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,173910.html#S.stopka_gora-K.C-B.4-L.7.zw" title="By� rodzicem" >By� rodzicem</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,100961.html#S.stopka_gora-K.C-B.4-L.8.zw" title="Zdrowie" >Zdrowie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,171094.html#S.stopka_gora-K.C-B.4-L.9.zw" title="Uroda" >Uroda</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,53667.html#S.stopka_gora-K.C-B.4-L.10.zw" title="Kuchnia" >Kuchnia</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.wysokieobcasy.pl/wysokie-obcasy/0,158669.html#S.stopka_gora-K.C-B.4-L.11.zw" title="Praca" >Praca</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<input class="footer-navi--checkbox" id="footer-navi--checkbox-4" type="checkbox">
<label class="footer-navi--heading" for="footer-navi--checkbox-4">Magazyny</label>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/duzyformat/0,0.html#S.stopka_gora-K.C-B.5-L.1.zw" title="Du�y Format" >Du�y Format</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/magazyn/0,0.html#S.stopka_gora-K.C-B.5-L.2.zw" title="Wolna Sobota" >Wolna Sobota</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/alehistoria/0,0.html#S.stopka_gora-K.C-B.5-L.3.zw" title="Ale Historia" >Ale Historia</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/TylkoZdrowie/0,0.html#S.stopka_gora-K.C-B.5-L.4.zw" title="Tylko zdrowie" >Tylko zdrowie</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/0,90535.html#S.stopka_gora-K.C-B.5-L.5.zw" title="Wyborcza TV i VOD" >Wyborcza TV i VOD</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://wyborcza.pl/ksiazki/0,0.html#S.stopka_gora-K.C-B.5-L.6.zw" title="Ksi��ki" >Ksi��ki</a>
</li>
</ul>
</div>
<div class="footer-navi--col">
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://biqdata.wyborcza.pl/#S.stopka_gora-K.C-B.6-L.1.zw" title="BIQdata.pl" >BIQdata.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://classic.wyborcza.pl/archiwumGW/0,0.html#S.stopka_gora-K.C-B.6-L.2.zw" title="Archiwum" >Archiwum</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="http://www.komunikaty.pl#S.stopka_gora-K.C-B.6-L.3.zw" title="Komunikaty.pl" >Komunikaty.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://odeszli.pl/#S.stopka_gora-K.C-B.6-L.4.zw" title="Odeszli.pl" >Odeszli.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://magazyn-kuchnia.pl/magazyn-kuchnia/0,0.html#S.stopka_gora-K.C-B.6-L.5.zw" title="Magazyn Kuchnia" >Magazyn Kuchnia</a>
</li>
</ul>
<div class="footer-navi--subheading">Serwisy partnerskie</div>
<ul class="footer-navi--list">
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="http://gazeta.pl#S.stopka_gora-K.C-B.7-L.1.zw" title="Gazeta.pl" >Gazeta.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="https://www.tokfm.pl/Tokfm/0,0.html#S.stopka_gora-K.C-B.7-L.2.zw" title="TOK.fm" >TOK.fm</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="http://sport.pl#S.stopka_gora-K.C-B.7-L.3.zw" title="Sport.pl" >Sport.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="http://publio.pl#S.stopka_gora-K.C-B.7-L.4.zw" title="Publio.pl" >Publio.pl</a>
</li>
<li class="footer-navi--item">
<a id="LinkArea:stopka_gora" class="footer-navi--link" href="http://kulturalnysklep.pl#S.stopka_gora-K.C-B.7-L.5.zw" title="Kulturalnysklep.pl" >Kulturalnysklep.pl</a>
</li>
</ul>
</div>
</section>
<div class="footer-navi--more">
<label class="btn footer-navi--more-button" for="footer-navi--checkbox">
Wi�cej
</label>
</div>
<div class="footer-navi--less">
<label class="btn footer-navi--more-button" for="footer-navi--checkbox">
Mniej
</label>
</div>
<section class="footer-social">
<ul class="footer-social--col">
<li class="footer-social--item">
<a id="LinkArea:stopka_gora" class="btn--red-filled" title="Kup prenumerat�" href="https://wyborcza.pl/prenumeratastopka#S.stopka_gora-K.C-B.8-L.1.zw">
Kup prenumerat�
</a>
</li>
<li class="footer-social--item">
<a id="LinkArea:stopka_gora" class="btn--img" href="https://wyborcza.pl/napisz-do-nas/0,0.html#S.stopka_gora-K.C-B.8-L.2.zw" title="Napisz do redakcji">
<svg><use xlink:href="#envelope"></use></svg>
Napisz do redakcji
</a>
</li>
</ul>
<ul class="footer-social--col app-btns">
<li class="footer-social--item">
<a id="LinkArea:stopka_gora" href="https://play.google.com/store/apps/details?id=pl.wyborcza.android.google&amp;hl=pl#S.stopka_gora-K.C-B.8-L.3.zw" title="Aplikacja wyborcza.pl" >
<svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
<g fill-rule="nonzero" fill="none">
<path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.3-5-5-5z" fill="#000"/>
<path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-2-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-2-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zM93 24.5c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3.1-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.1 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2.1-3.9-4.1-3.9zm0 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1 0 1.1-.8 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.8-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.1 1.2-1.1 2-2.2 2zm10.6-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#000"/>
<path d="M10.4 7.5c-.3.3-.5.8-.5 1.4V31c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L10.4 7.5z" fill="#00D3FF"/>
<path d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="#FFB500"/>
<path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="#F73448"/>
<path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="#00F076"/>
<path d="M47.9 8.8c0 .6-.2 1.1-.5 1.4-.5.5-1.1.7-2 .7h-.6v2.5h-1V7c.5-.1 1.1-.1 1.7-.1.8 0 1.5.2 1.9.5.3.3.5.8.5 1.4zm-1.1.1c0-.4-.1-.7-.4-.9-.2-.2-.6-.3-1-.3-.3 0-.5 0-.7.1v2.3c.1 0 .4.1.6.1.5 0 .8-.1 1.1-.3.3-.2.4-.6.4-1zM53.7 11c0 .7-.2 1.3-.6 1.8-.4.5-1 .7-1.7.7s-1.2-.2-1.7-.7c-.4-.5-.6-1-.6-1.7s.2-1.3.6-1.8c.4-.5 1-.7 1.7-.7s1.2.2 1.7.7c.4.5.6 1 .6 1.7zm-1.1.1c0-.4-.1-.8-.3-1.1-.2-.4-.5-.6-.9-.6s-.7.2-1 .6c-.2.3-.3.7-.3 1.1 0 .4.1.8.3 1.1.2.4.5.6 1 .6.4 0 .7-.2.9-.6.2-.3.3-.7.3-1.1zM59.8 11c0 .8-.2 1.4-.7 1.9-.4.4-.9.6-1.4.6-.7 0-1.2-.3-1.5-.8l-.1.7h-.9V6.6h1v2.9c.3-.5.8-.8 1.5-.8.6 0 1 .2 1.4.7.5.3.7.9.7 1.6zm-1.1.1c0-.5-.1-.8-.3-1.1-.2-.3-.5-.5-.9-.5-.3 0-.5.1-.7.3-.2.2-.3.4-.4.7v1.1c0 .3.1.6.3.8.2.2.5.3.8.3.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.2zM62.5 7.3c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2s-.3-.1-.4-.2c-.1-.1-.2-.3-.2-.5s.1-.3.2-.4c.1-.1.3-.2.5-.2s.3.1.5.2c0 .1.1.2.1.4zm-.1 6.1h-1V8.7h1v4.7zM68.1 10.9v.5H65c0 .5.2.8.5 1.1.3.2.6.3 1 .3.5 0 .9-.1 1.3-.2l.2.7c-.4.2-1 .3-1.6.3-.7 0-1.3-.2-1.7-.6-.4-.4-.6-1-.6-1.7s.2-1.3.6-1.8c.4-.5 1-.8 1.6-.8.7 0 1.2.3 1.5.8.2.3.3.8.3 1.4zm-1-.3c0-.3-.1-.6-.2-.8-.2-.3-.5-.4-.8-.4-.3 0-.6.1-.8.4-.2.2-.3.5-.3.8h2.1zM72.1 9.7h-.3c-.4 0-.7.1-.9.4-.2.2-.3.6-.3.9v2.5h-1V8.8h.9v.9c.1-.3.3-.6.5-.7.2-.2.5-.3.8-.3h.3v1zM76.8 13.4H73v-.6l1.9-2.5c.1-.2.3-.4.6-.8h-2.3v-.8h3.6v.6L75 11.7c-.2.3-.4.5-.6.8h2.5l-.1.9zM84.8 13.4H81v-.6l1.9-2.5c.1-.2.3-.4.6-.8h-2.3v-.8h3.6v.6L83 11.7c-.2.3-.4.5-.6.8h2.5l-.1.9z" fill="#000"/>
</g>
</svg>
</a>
</li>
<li class="footer-social--item">
<a id="LinkArea:stopka_gora" href="https://itunes.apple.com/pl/app/gazeta-wyborcza/id530078918#S.stopka_gora-K.C-B.8-L.4.zw" title="Aplikacja wyborcza.pl" >
<svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
<g fill="#000" fill-rule="nonzero">
<path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.3-5-5-5z"/>
<path d="M28.997 19.89a5.146 5.146 0 012.45-4.318 5.268 5.268 0 00-4.15-2.244c-1.746-.183-3.44 1.045-4.33 1.045-.906 0-2.276-1.027-3.752-.996a5.527 5.527 0 00-4.65 2.836c-2.012 3.482-.512 8.6 1.415 11.414.963 1.378 2.09 2.918 3.564 2.863 1.442-.06 1.981-.92 3.722-.92 1.725 0 2.23.92 3.734.886 1.548-.025 2.523-1.385 3.453-2.776a11.4 11.4 0 001.58-3.216 4.973 4.973 0 01-3.036-4.575zM26.156 11.477a5.067 5.067 0 001.16-3.63 5.155 5.155 0 00-3.336 1.726 4.821 4.821 0 00-1.19 3.495 4.263 4.263 0 003.366-1.591z"/>
<path d="M50.302 27.14h-4.734l-1.136 3.356h-2.005l4.483-12.418h2.083l4.484 12.418h-2.04l-1.135-3.356zm-4.243-1.549h3.752l-1.85-5.447h-.052l-1.85 5.447zM63.16 25.97c0 2.813-1.507 4.62-3.78 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.858V21.443h1.799v1.505h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.812 1.816 3.812 4.622zm-1.911 0c0-1.833-.947-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.956 3.046 2.375 3.046 1.446 0 2.393-1.197 2.393-3.046zM73.125 25.97c0 2.813-1.507 4.62-3.78 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.858V21.443h1.799v1.505h.034a3.212 3.212 0 012.883-1.6c2.297 0 3.813 1.816 3.813 4.622zm-1.911 0c0-1.833-.947-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.446 0 2.393-1.197 2.393-3.046zM79.71 27.036c.137 1.232 1.333 2.04 2.968 2.04 1.567 0 2.694-.808 2.694-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.518-3.614 2.625 0 4.424 1.472 4.484 3.614H85.26c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.859 0 .877.654 1.394 2.255 1.79l1.368.335c2.548.603 3.605 1.626 3.605 3.443 0 2.323-1.85 3.778-4.793 3.778-2.753 0-4.613-1.42-4.733-3.667h1.902zM91.346 19.3v2.143h1.722v1.471h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.003.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.471h1.316V19.3h1.867zM94.064 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.639-4.295 4.639-2.633 0-4.294-1.783-4.294-4.64zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.401 1.163-2.401 3.108 0 1.962.895 3.106 2.4 3.106 1.507 0 2.402-1.144 2.402-3.106zM104.185 21.443h1.773v1.54H106a2.16 2.16 0 012.177-1.635c.214-.001.428.022.637.07v1.737a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858v-9.053zM117.383 27.837c-.25 1.644-1.85 2.772-3.898 2.772-2.634 0-4.269-1.765-4.269-4.596 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273h1.765zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z"/>
<path d="M47.867 8.808c0 .602-.178 1.083-.533 1.445-.459.472-1.129.708-2.008.708a2.9 2.9 0 01-.602-.048v2.532h-1.048V6.994a9.703 9.703 0 011.711-.136c.83 0 1.455.178 1.877.534.402.349.603.821.603 1.416zm-1.048.048c0-.382-.122-.674-.366-.878-.245-.204-.586-.306-1.023-.306-.29 0-.525.02-.705.058v2.348c.147.039.351.058.608.058.463 0 .827-.113 1.091-.339.264-.226.395-.54.395-.941zM53.727 11.048c0 .725-.207 1.319-.621 1.785-.434.479-1.009.718-1.727.718-.692 0-1.243-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794.424-.465.994-.698 1.712-.698.692 0 1.248.229 1.669.688.399.446.601 1.022.601 1.726zm-1.087.035c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .714-.191.94-.574.194-.318.291-.694.291-1.128zM59.769 11.02c0 .795-.22 1.429-.659 1.901-.388.42-.863.631-1.426.631-.673 0-1.168-.278-1.484-.834h-.02l-.058.728h-.893c.025-.381.038-.805.038-1.271V6.567h1.048v2.852h.02c.311-.524.812-.786 1.504-.786a1.72 1.72 0 011.392.655c.358.437.538 1.014.538 1.732zm-1.067.038c0-.459-.104-.834-.311-1.125a1.076 1.076 0 00-.922-.476c-.259 0-.491.084-.698.252a1.225 1.225 0 00-.417.669 1.43 1.43 0 00-.039.33v.824c0 .324.108.602.325.834.217.232.486.349.81.349.395 0 .702-.148.922-.446.22-.296.33-.7.33-1.211zM62.485 7.324a.603.603 0 01-.184.456.661.661 0 01-.476.175.611.611 0 01-.621-.63c0-.181.062-.33.185-.446a.638.638 0 01.456-.175.64.64 0 01.456.175.582.582 0 01.184.445zm-.116 6.12h-1.048V8.73h1.048v4.714zM68.111 10.864c0 .188-.014.346-.039.475H64.93c.013.466.164.821.455 1.067.266.22.608.33 1.028.33.466 0 .89-.074 1.271-.223l.164.728c-.446.194-.973.291-1.581.291-.73 0-1.305-.215-1.722-.645-.417-.43-.625-1.007-.625-1.731 0-.711.193-1.303.582-1.775.407-.504.956-.756 1.648-.756.679 0 1.193.252 1.542.756.28.4.419.895.419 1.483zm-1-.271a1.427 1.427 0 00-.203-.805c-.182-.291-.459-.437-.834-.437a.997.997 0 00-.835.427 1.577 1.577 0 00-.31.815h2.182zM72.126 9.652a1.74 1.74 0 00-.33-.029c-.368 0-.652.139-.854.417-.174.246-.262.556-.262.931v2.474h-1.048l.01-3.23c0-.543-.013-1.038-.038-1.484h.911l.039.902h.029c.109-.311.284-.56.523-.747.233-.168.485-.252.757-.252.097 0 .185.006.262.019v.999h.001zM76.83 13.444h-3.841v-.611l1.882-2.473c.116-.155.329-.411.64-.767v-.019h-2.338V8.73h3.608v.65l-1.843 2.435c-.207.265-.42.521-.64.766v.02h2.531v.843h.001zM87.365 8.73l-1.475 4.714h-.96l-.611-2.047a15.32 15.32 0 01-.379-1.523h-.019a11.15 11.15 0 01-.379 1.523l-.649 2.047h-.971L80.536 8.73h1.077l.533 2.241c.129.53.235 1.035.32 1.513h.019c.078-.394.207-.896.389-1.503l.669-2.25h.854l.641 2.202c.155.537.281 1.054.378 1.552h.029c.071-.485.178-1.002.32-1.552l.572-2.202h1.028V8.73z"/>
</g>
</svg>
</a>
</li>
</ul><!-- UZREditor --><!-- htmEOF -->
        <!-- 27188558 - stopka - czesc gorna -->

        <ul class="footer-social--col">
<li class="footer-social--item">
<a id="LinkArea:spolecznosc" href="https://facebook.com/wroclawwyborcza#S.spolecznosc-K.C-B.1-L.1.zw"  title="facebook" class="facebook">
<svg class="footer-social--item-icon footer-social--item-icon-facebook" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.466 5.477H14.39c-.364 0-.77.493-.77 1.154v2.292h3.846v3.267H13.62V22H9.99v-9.81H6.696V8.923h3.292V7c0-2.757 1.855-5 4.4-5h3.077v3.477z" fill="transparent" stroke="currentColor" stroke-width="1.2"/>
</svg>
</a>
</li></li>
<li class="footer-social--item">
<a id="LinkArea:spolecznosc" href="https://twitter.com/wyborczawroclaw#S.spolecznosc-K.C-B.1-L.2.zw"  title="twitter" class="twitter">
<svg class="footer-social--item-icon footer-social--item-icon-twitter" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.712 10.622 20.413 3h-1.587l-5.819 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21l-7.288-10.378Zm-2.175 2.473-.712-.996-5.665-7.93H7.6l4.571 6.4.712.996 5.943 8.318h-2.439l-4.85-6.787Z" fill="currentcolor" stroke-width="1.2"/>
</svg>
</a>
</li></li>
<li class="footer-social--item">
<a id="LinkArea:spolecznosc" href="https://www.instagram.com/gazeta_wyborcza_wroclaw/#S.spolecznosc-K.C-B.1-L.3.zw"  title="instagram" class="instagram">
<svg class="footer-social--item-icon footer-social--item-icon-instagram" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.29 2.04c-2.704 0-3.043.011-4.105.06-1.06.048-1.783.216-2.417.462a4.88 4.88 0 00-1.763 1.149 4.881 4.881 0 00-1.149 1.763c-.246.634-.414 1.358-.463 2.417-.048 1.063-.06 1.402-.06 4.106 0 2.704.012 3.043.06 4.105.049 1.06.217 1.784.463 2.417a4.88 4.88 0 001.149 1.764 4.881 4.881 0 001.763 1.148c.634.247 1.357.415 2.417.463 1.062.049 1.401.06 4.106.06 2.704 0 3.043-.011 4.105-.06 1.06-.048 1.784-.216 2.417-.463a4.88 4.88 0 001.764-1.148 4.88 4.88 0 001.148-1.764c.246-.633.415-1.357.463-2.417.049-1.062.06-1.4.06-4.105 0-2.704-.011-3.043-.06-4.106-.048-1.06-.217-1.783-.463-2.417a4.881 4.881 0 00-1.148-1.763 4.88 4.88 0 00-1.764-1.149c-.633-.246-1.357-.414-2.417-.463-1.062-.048-1.401-.06-4.105-.06m0 1.795c2.658 0 2.973.01 4.023.058.971.044 1.498.206 1.85.343.464.18.796.396 1.144.744.349.349.564.68.745 1.145.136.351.299.878.343 1.85.048 1.05.058 1.364.058 4.023s-.01 2.974-.058 4.023c-.044.971-.207 1.499-.343 1.85-.18.464-.396.796-.745 1.144-.348.349-.68.565-1.145.745-.35.136-.878.299-1.849.343-1.05.048-1.364.058-4.023.058-2.66 0-2.974-.01-4.024-.058-.97-.044-1.498-.207-1.849-.343a3.085 3.085 0 01-1.145-.745 3.085 3.085 0 01-.745-1.145c-.136-.35-.298-.878-.343-1.849-.047-1.05-.058-1.364-.058-4.023s.01-2.974.058-4.024c.045-.97.207-1.498.343-1.849.181-.464.397-.796.745-1.145.349-.348.68-.564 1.145-.744.351-.137.878-.299 1.849-.343 1.05-.048 1.365-.058 4.024-.058" fill="currentColor"/>
<path d="M12.29 15.316a3.32 3.32 0 110-6.638 3.32 3.32 0 010 6.638m0-8.432a5.113 5.113 0 100 10.226 5.113 5.113 0 000-10.226M18.8 6.682a1.195 1.195 0 11-2.389 0 1.195 1.195 0 012.39 0" fill="currentColor"/>
</svg>
</a>
</li></li>
<li class="footer-social--item">
<a id="LinkArea:spolecznosc" href="https://www.linkedin.com/company/gazeta-wyborcza#S.spolecznosc-K.C-B.1-L.4.zw"  title="linkedin" class="linkedin">
<svg class="footer-social--item-icon footer-social--item-icon-linkedin" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.04918 22H3.31148V8.07242H7.04918V22ZM5.18033 6.46695C3.97679 6.46695 3 5.4667 3 4.23348C3 3.00025 3.97679 2 5.18033 2C6.38387 2 7.36066 3.00025 7.36066 4.23348C7.36066 5.4667 6.38511 6.46695 5.18033 6.46695ZM22 22H18.2623V14.9045C18.2623 10.6402 13.2787 10.963 13.2787 14.9045V22H9.54098V8.07242H13.2787V10.3072C15.018 7.03292 22 6.79109 22 13.4421V22Z" stroke="#15181B"/>
</svg>
</a>
</li></li>
<li class="footer-social--item">
<a id="LinkArea:spolecznosc" class="btn--filled" href="https://wyborcza.pl/0,166389.html?fromnlt=stopka&amp;refnlt=https://wyborcza.pl#S.spolecznosc-K.C-B.1-L.4.zw" title="Newsletter">Newsletter</a>
</li>
</ul><!-- UZREditor --><!--28477185,aliasOf--><!-- htmEOF -->
        <!-- 27188907 - stopka - spolecznosc -->
    </section>

    <section class="footer-menu">
        <ul class="footer-menu--list">
            <li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/centrumpomocygw/7,134956,23413995,polityka-prywatnosci.html#S.stopka_dol-K.C-B.1-L.2.zw" title="Prywatno��" >Prywatno��</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/centrumpomocygw/7,134956,29793595,ogolne-zasady-udzielania-licencji-na-materialy-redakcyjne-agory.html#S.stopka_dol-K.C-B.1-L.3.zw" title="Licencje/Kontent" >Licencje/Kontent</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/reklama/0,0.html#S.stopka_dol-K.C-B.1-L.4.zw" title="Reklama" >Reklama</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/multimedia/o-nas/#S.stopka_dol-K.C-B.1-L.5.zw" title="O nas" >O nas</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/centrumpomocygw/0,134959.html#S.stopka_dol-K.C-B.1-L.6.zw" title="Kontakt" >Kontakt</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/centrumpomocygw/0,134958.html#S.stopka_dol-K.C-B.1-L.7.zw" title="Zg�o� b��d" rel="nofollow">Zg�o� b��d</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wyborcza.pl/centrumpomocygw/7,134956,23448405,regulamin-serwisu-wyborcza-pl.html#S.stopka_dol-K.C-B.1-L.8.zw" title="Regulamin" >Regulamin</a>
</li>
<li class="footer-menu--item">
<a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://pomoc.wyborcza.pl/?cta=footernw#S.stopka_dol-K.C-B.1-L.9.zw" title="Pomoc" >Pomoc</a>
</li><!-- UZREditor --><!-- htmEOF -->
            <!-- 27188620 - stopka - czesc dolna -->

            <li class="footer-menu--item">
                <a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://wroclaw.wyborcza.pl/wroclaw/3660000,0.html#S.stopka_dol-K.C-B.1-L.10.zw" title="Wszystkie artyku�y">Wszystkie artyku�y</a>
            </li>

            <li class="footer-menu--item">
                <a id="LinkArea:stopka_dol" class="footer-menu--link" href="#S.stopka_dol-K.C-B.1-L.11.zw" title="Zgody" onclick="OneTrust.ToggleInfoDisplay(); return false;">Zgody</a>
            </li>
        </ul>

        <p class="footer-menu--copy">
            <a id="LinkArea:stopka_dol" class="footer-menu--link" href="https://www.agora.pl/#S.stopka_dol-K.C-B.1-L.1.zw" title="Agora SA">Copyright &copy; Agora SA</a>
        </p>
    </section>
</div>
<div data-screening-end></div>

<div data-mc-placeholder-id="17632437" data-mc-placeholder-swimmer="true"></div>

    <div data-mc-placeholder-id="17632443" data-mc-placeholder-ddbox="true"></div>


<!-- footerModule v2.4 -->

<!--28477181, [ /fix/modules/wyborcza2020/footer.jsp ], wyborczaFooterModule-->

</div>









<div style="display:none;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1039774788/?label=R48iCKa07QEQxOjm7wM&amp;guid=ON&amp;script=0"/>
</div>


<!-- remarketingModule -->





<!-- webPushWorkerModule info:
webPushDomain: wroclaw.wyborcza.pl
-->


    
    
        <!-- content -->
        <script type="text/plain" src="https://static.im-g.pl/wpc/frontend/web-push-worker-599/dist/firebase-messaging.0.4.7.js" class="optanon-category-C0003"></script>
    
    


<!-- webPushWorkerModule v1.0 -->





    <script class="optanon-category-C0002" type='text/plain' data-consent-status="">
        var _sf_async_config = _sf_async_config || {};
        var consentStatus = document.currentScript.dataset.consentStatus;

        _sf_async_config.sections = '/wroclaw';
        _sf_async_config.authors = '';
        var _cbq = window._cbq = (window._cbq || []);
        _cbq.push(['_acct', 'anon']);

        (function() {
            function loadChartbeat() {
                window._sf_endpt = (new Date()).getTime();
                var e = document.createElement('script');
                e.setAttribute('language', 'javascript');
                e.setAttribute('type', 'text/javascript');
                e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_video.js');
                document.body.appendChild(e);
            }
            if (consentStatus !== '1' && document.readyState === 'complete') {
                loadChartbeat();
            } else {
                window.addEventListener('load', loadChartbeat);
            }
        })();
    </script>



<!-- chartbeatModule v1.3 -->



    <img src="https://pubads.g.doubleclick.net/activity;dc_iu=/75224259/DFPAudiencePixel;ord=1;dc_seg=692406053?" width=1 height=1 border=0  style="position:absolute; bottom:0;"/>

<!-- singleViewModule -->





<!-- bodyAssetsModule info:
awdDevice: desktop,
pagePatternType: hp,
dist: dist,
spriteName: wyborcza,
customScripts: 
-->

<script type="text/javascript" src="//static.im-g.pl/wpc/frontend/portal-core-79/dist/desktop/hp/main.44f8b30218caa34069ab.js" charset="UTF-8"></script>

<svg id="svgIcons" class="d-hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol fill-rule="evenodd" viewBox="0 0 24 24" id="arrow"><path d="M2.117 12l7.527 6.235L9 19l-9-7.521L9 4l.645.764L2.116 11H24v1H2.117z" /></symbol><symbol viewBox="0 0 32 32" id="avatar"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M-520-165h1920v3474H-520z" /><g transform="translate(.015 1)"><circle stroke="#15181B" cx="15.985" cy="15" r="15" /><path d="M24.422 23a.562.562 0 01-.562-.562v-1.275c0-.797-.54-1.49-1.315-1.684l-3.808-.951c-.574-.144-.974-.643-1.072-1.336a.613.613 0 01-.006-.084l.007-.656a.55.55 0 01.005-.07 3.865 3.865 0 01.968-2.03c1.363-1.493 1.363-2.64 1.363-4.09 0-2.278-1.77-4.095-4.027-4.136-2.237.041-4.005 1.858-4.005 4.135 0 1.452 0 2.598 1.362 4.091.537.588.882 1.355.947 2.104l.009.7c0 .02 0 .04-.003.061-.068.663-.47 1.165-1.05 1.31l-3.81.952a1.734 1.734 0 00-1.315 1.684v1.275a.562.562 0 11-1.125 0v-1.275c0-1.315.89-2.455 2.167-2.775l3.808-.952c.146-.036.19-.22.202-.307l-.007-.62c-.042-.464-.28-.99-.654-1.4-1.657-1.815-1.657-3.288-1.657-4.849 0-2.896 2.254-5.207 5.13-5.26 2.898.053 5.152 2.364 5.152 5.26 0 1.56 0 3.034-1.656 4.85a2.77 2.77 0 00-.68 1.39l-.005.571c.02.109.078.329.224.365l3.81.952a2.857 2.857 0 012.166 2.775v1.275a.562.562 0 01-.563.562z" fill="#15181B" fill-rule="nonzero" /></g></g></symbol><symbol viewBox="0 0 9.2 6.8" id="checkmark"><path d="M3.2 6.8L0 3.6l1.1-1 2.2 2.2L8.1 0l1.1 1.1z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol viewBox="0 0 15 10" id="chevron"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9.5L0 2 1.05.95 7.5 7.4 13.95.95 15 2 7.5 9.5z" /></symbol><symbol viewBox="0 0 24 24" id="cross"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><g stroke="#15181B" stroke-width="1.5"><path d="M4 20L20 4M4 4l16 16" /></g></g></symbol><symbol viewBox="0 0 33 23" id="envelope"><path d="M30.752 0H2.248C1.007.001 0 1.031 0 2.302v18.396c.001 1.27 1.007 2.3 2.248 2.302h28.504C31.993 22.999 33 21.969 33 20.698V2.302c-.001-1.27-1.007-2.3-2.248-2.302zm.925 20.725L21.24 12.57 31.68 2.404v18.294c0 .01-.002.018-.003.027zM1.32 20.698V2.404L11.76 12.57 1.323 20.725l-.003-.027zm11.409-7.185l2.244 2.185c.855.834 2.199.834 3.054 0l2.244-2.185 10.411 8.135H2.318l10.41-8.135zM30.752 1.352c.03 0 .056.006.084.008L17.118 14.718a.88.88 0 01-1.236 0L2.164 1.36c.028-.002.055-.008.084-.008h28.504z" fill="#000" fill-rule="nonzero" /></symbol><symbol viewBox="0 0 24 24" id="facebook"><g fill="none" fill-rule="evenodd"><path d="M0 24.333h24v-1H0z" fill="#E5E5E5" /><path d="M17.466 5.477H14.39c-.364 0-.77.493-.77 1.154v2.292h3.846v3.267H13.62V22H9.99v-9.81H6.696V8.923h3.292V7c0-2.757 1.855-5 4.4-5h3.077v3.477z" stroke="#000" stroke-width="1.2" /><path d="M0 .667h24v-1H0z" fill="#E5E5E5" /></g></symbol><symbol viewBox="0 0 24 24" id="instagram"><g fill="none" fill-rule="evenodd"><path d="M0 24.333h24v-1H0z" fill="#E5E5E5" /><g fill="#000"><path d="M12.29 2.04c-2.704 0-3.043.011-4.105.06-1.06.048-1.783.216-2.417.462a4.88 4.88 0 00-1.763 1.149 4.881 4.881 0 00-1.149 1.763c-.246.634-.414 1.358-.463 2.417-.048 1.063-.06 1.402-.06 4.106 0 2.704.012 3.043.06 4.105.049 1.06.217 1.784.463 2.417a4.88 4.88 0 001.149 1.764 4.881 4.881 0 001.763 1.148c.634.247 1.357.415 2.417.463 1.062.049 1.401.06 4.106.06 2.704 0 3.043-.011 4.105-.06 1.06-.048 1.784-.216 2.417-.463a4.88 4.88 0 001.764-1.148 4.88 4.88 0 001.148-1.764c.246-.633.415-1.357.463-2.417.049-1.062.06-1.4.06-4.105 0-2.704-.011-3.043-.06-4.106-.048-1.06-.217-1.783-.463-2.417a4.881 4.881 0 00-1.148-1.763 4.88 4.88 0 00-1.764-1.149c-.633-.246-1.357-.414-2.417-.463-1.062-.048-1.401-.06-4.105-.06m0 1.795c2.658 0 2.973.01 4.023.058.971.044 1.498.206 1.85.343.464.18.796.396 1.144.744.349.349.564.68.745 1.145.136.351.299.878.343 1.85.048 1.05.058 1.364.058 4.023s-.01 2.974-.058 4.023c-.044.971-.207 1.499-.343 1.85a3.07 3.07 0 01-.745 1.144c-.348.349-.68.565-1.145.745-.35.136-.878.299-1.849.343-1.05.048-1.364.058-4.023.058-2.66 0-2.974-.01-4.024-.058-.97-.044-1.498-.207-1.849-.343a3.085 3.085 0 01-1.145-.745 3.085 3.085 0 01-.745-1.145c-.136-.35-.298-.878-.343-1.849-.047-1.05-.058-1.364-.058-4.023s.01-2.974.058-4.024c.045-.97.207-1.498.343-1.849.181-.464.397-.796.745-1.145.349-.348.68-.564 1.145-.744.351-.137.878-.299 1.849-.343 1.05-.048 1.365-.058 4.024-.058" /><path d="M12.29 15.316a3.32 3.32 0 110-6.638 3.32 3.32 0 010 6.638m0-8.432a5.113 5.113 0 100 10.226 5.113 5.113 0 000-10.226m6.51-.202a1.195 1.195 0 11-2.389 0 1.195 1.195 0 012.39 0" /></g><path d="M0 .667h24v-1H0z" fill="#E5E5E5" /></g></symbol><symbol viewBox="0 0 32 32" id="loupe"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M-1230-358H690v4140h-1920z" /><g opacity=".77"><path fill="#FFF" d="M0 0h32v32H0z" /><path d="M29.024 27.531l-7.02-7.02a10.132 10.132 0 10-1.493 1.493l7.02 7.02a1.056 1.056 0 101.493-1.493zM6.114 14.135c0-4.425 3.596-8.021 8.02-8.021 4.425 0 8.022 3.596 8.022 8.02 0 4.425-3.597 8.022-8.021 8.022-4.425 0-8.021-3.597-8.021-8.021z" fill="#000" fill-rule="nonzero" /></g></g></symbol><symbol viewBox="0 0 24 24" id="mail"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M3.268 4h17.464C21.427 4 22 4.586 22 5.298V17.94c0 .712-.573 1.298-1.268 1.298H3.268C2.573 19.238 2 18.652 2 17.94V5.298C2 4.586 2.573 4 3.268 4zm-.246 2.051l7.076 5.317a3.194 3.194 0 003.804 0l7.076-5.317v-.753c0-.126-.123-.251-.246-.251H3.268c-.123 0-.246.125-.246.25v.754zM20.978 7.35l-6.463 4.856a4.156 4.156 0 01-5.03 0L3.022 7.35v10.59c0 .126.123.252.246.252h17.464c.123 0 .246-.126.246-.252V7.35z" stroke="#15181B" stroke-width=".3" fill="#15181B" fill-rule="nonzero" /></g></symbol><symbol viewBox="0 -1.1 50 25" id="padlock"><path d="M49.122 8.114h-26.8a11.4 11.4 0 100 6.579H36.49v4.644a.877.877 0 00.877.877h7.895a.877.877 0 00.877-.877v-4.644h2.983a.877.877 0 00.877-.877V8.991a.877.877 0 00-.877-.877zm-37.719 8.552a5.263 5.263 0 115.263-5.263 5.263 5.263 0 01-5.263 5.263z" /></symbol><symbol viewBox="0 0 28 24" id="photo"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v24H0z" /><g fill="#FFF" fill-rule="nonzero"><path d="M16.71 0c.338 0 .677.149.93.404l.102.115 2.193 2.984 6.42.065c.88.152 1.532.85 1.633 1.743l.012.17v16.54c0 .552-.226 1.038-.58 1.395a1.924 1.924 0 01-1.217.577l-.17.007H1.612a1.53 1.53 0 01-1.014-.372l-.115-.114a1.505 1.505 0 01-.476-.978L0 22.378V5.514c0-.52.194-1.006.548-1.363a1.924 1.924 0 011.217-.576l.17-.007h6.097L10.194.55a1.3 1.3 0 01.926-.544L11.258 0h5.452zM16.4 1.9h-4.837L9.008 5.468H1.935c-.012 0-.014-.001-.022.006l-.014.015L1.9 22.1h24.145l.027-.024a.09.09 0 00.026-.037l.002-.017.001-16.478a.197.197 0 00-.009-.058l-.013-.022-7.112-.071L16.401 1.9z" /><path d="M14 6c3.839 0 7 3.124 7 7s-3.161 7-7 7-7-3.124-7-7 3.161-7 7-7zm0 1.9A5.11 5.11 0 008.9 13a5.11 5.11 0 005.1 5.1 5.11 5.11 0 005.1-5.1A5.11 5.11 0 0014 7.9z" /></g></g></symbol><symbol viewBox="0 0 16 16" id="reply"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M2.463 14c.15.002.29-.076.364-.204a6.303 6.303 0 015.379-3.056v2.445a.418.418 0 00.707.29l4.965-4.89a.404.404 0 000-.578l-4.965-4.89a.418.418 0 00-.707.29v2.49C4.666 6.343 2.01 9.306 2 12.821c.001.273.019.545.054.815a.41.41 0 00.327.35l.082.013z" fill="#8B8B8B" /></g></symbol><symbol viewBox="0 0 23 23" id="sbook"><path d="M12.59 18.49a3.45 3.45 0 00-2.49.03L4.25 21V2.92c0-.7.58-1.28 1.29-1.28h11.89c.7 0 1.28.58 1.28 1.28V21z" /></symbol><symbol viewBox="0 0 24 24" id="twitter"><g fill="none" fill-rule="evenodd"><path d="M0 24.333h24v-1H0z" fill="#E5E5E5" /><path d="M23.099 5.13a9.09 9.09 0 01-2.61.716 4.558 4.558 0 001.998-2.514c-.878.52-1.85.9-2.885 1.103a4.544 4.544 0 00-7.743 4.144 12.899 12.899 0 01-9.367-4.747 4.524 4.524 0 00-.615 2.284c0 1.577.802 2.967 2.021 3.782A4.526 4.526 0 011.84 9.33v.057a4.547 4.547 0 003.645 4.456 4.54 4.54 0 01-2.052.078 4.549 4.549 0 004.245 3.155A9.115 9.115 0 01.95 18.958 12.856 12.856 0 007.916 21c8.358 0 12.929-6.925 12.929-12.93 0-.196-.004-.392-.013-.587a9.226 9.226 0 002.267-2.352" stroke="#000" stroke-width="1.2" /><path d="M0 .667h24v-1H0z" fill="#E5E5E5" /></g></symbol><symbol viewBox="0 0 28 24" id="video"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v24H0z" /><path d="M5.918 0c.337.008.667.101.96.273l16.754 10.053c.582.35.94.987.94 1.675 0 .688-.358 1.325-.94 1.675h.02L6.876 23.74a1.893 1.893 0 01-1.917 0A1.954 1.954 0 014 22.054V1.948C4 .872 4.859 0 5.918 0zm-.012 1.891c-.01.009-.02.028-.02.057v20.104l.008.038.022.025L18.53 14.55l4.13-2.489c.014-.008.027-.031.027-.06 0-.029-.013-.052-.024-.058L5.906 1.89z" fill="#FFF" fill-rule="nonzero" /></g></symbol></defs></svg>



<!-- bodyAssetsModule v1.4 -->

<!--24282353, [ null ], aggregatorModule-->


    <script type="text/javascript" src="https://bis.gazeta.pl/info/mapa2.js"></script>
    <!-- gemiusHeatMap -->
</body>
</html>