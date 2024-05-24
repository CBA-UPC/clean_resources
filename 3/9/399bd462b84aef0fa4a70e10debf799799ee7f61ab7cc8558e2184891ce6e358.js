/*
* Snowplow - The world's most powerful web analytics platform
*
* @version     19.20.0
*
* Minimum supported browsers:
* - Firefox 27
* - Chrome 32
* - IE 9
* - Safari 8
*/

!function(){"use strict";function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=[];e>r;r++)n[r]=t[r];return n}function _createForOfIteratorHelperLoose(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}for(var t=function fixupTitle(t){if(!v(t)){t=t.text||"";var e=document.getElementsByTagName("title");e&&void 0!==e[0]&&(t=e[0].text)}return t},e=function fixupDomain(t){var e=t.length;return"."===t.charAt(--e)&&(t=t.slice(0,e)),"*."===t.slice(0,2)&&(t=t.slice(1)),t},r=function getReferrer(t){var e="",r=a("referrer",window.location.href)||a("referer",window.location.href);if(r)return r;if(t)return t;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(t){e=""}}return""===e&&(e=document.referrer),e},n=function addEventListener(t,e,r,n){return t.addEventListener?(t.addEventListener(e,r,n),!0):t.attachEvent?t.attachEvent("on"+e,r):(t["on"+e]=r,!0)},o=function cookie(t,e,r,n,i,o,a){return void 0===o&&(o="None"),void 0===a&&(a=!0),arguments.length>1?document.cookie=t+"="+encodeURIComponent(e)+(r?"; expires="+new Date(+new Date+1e3*r).toUTCString():"")+(n?"; path="+n:"")+(i?"; domain="+i:"")+"; SameSite="+(o||"None")+(a?"; Secure":""):decodeURIComponent((("; "+document.cookie).split("; "+t+"=")[1]||"").split(";")[0])},a=function fromQuerystring(t,e){var r=RegExp("^[^#]*[?&]"+t+"=([^&#]*)").exec(e);return r?decodeURIComponent(r[1].replace(/\+/g," ")):null},s=function warn(t){void 0!==window.console&&window.console.warn("Snowplow: "+t)},u=function attemptWriteLocalStorage(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}},l=function findRootDomain(){for(var t="_sp_root_domain_test_"+(new Date).getTime(),e="_test_value_"+(new Date).getTime(),r=window.location.hostname.split("."),n=r.length-1;n>=0;){var i=r.slice(n,r.length).join(".");if(o(t,e,0,"/",i),o(t)===e){d(t,i);for(var a=m("_sp_root_domain_test_"),s=0;s<a.length;s++)d(a[s],i);return i}n-=1}return window.location.hostname},h=function isValueInArray(t,e){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1},d=function deleteCookie(t,e){o(t,"",-1,"/",e)},m=function getCookiesWithPrefix(t){for(var e=document.cookie.split("; "),r=[],n=0;n<e.length;n++)e[n].substring(0,t.length)===t&&r.push(e[n]);return r},g=function fixupUrl(t,e,r){switch(t){case"translate.googleusercontent.com":""===r&&(r=e),t=function getHostName(t){var e=/^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:\/#]+)/.exec(t);return e?e[1]:t}(e=function getParameter(t,e){var r=/^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(t);return a(e,r[1])}(e,"u"))}return[t,e,r]},p=function isFunction(t){return"function"==typeof t},v=function isString(t){return"string"==typeof t},y=atob("YXZpYXNhbGVz"),S=atob("dnNlcG9rYS5ydQ=="),w=atob("YXZpYXNhbGVzLnJ1"),b=atob("c3AuYXZpYXNhbGVzLnJ1"),A=atob("c3AuYXZpYXNhbGVzLmNvbQ=="),k=atob("YXZzcGxvdy5jb20="),T=atob("c3Aud2F5YXdheS5pbw=="),x=atob("YmV0YS5hdmlhc2FsZXM="),C=atob("YmV0YS5hdnNwbG93LmNvbQ=="),P=function getCollectorUrl(t){return function getApiHost(t,e){void 0===e&&(e=!1);var r=function getBrand(){try{return document.documentElement.dataset.brand}catch(t){return"AS"}}();if("AS"!==r)return"WA"===r?T:A;try{return e||t.match(x)?C:t.match(y)||t===S?t.match(w)?b:A:k}catch(t){return A}}(window.location.host,t)},_=Symbol(),D=Symbol(),O=Symbol(),E=Symbol(),I=function(){function InQueueManager(t,e,r,n,i){this.TrackerConstructor=t,this.version=e,this.mutSnowplowState=r,this.asyncQueue=n,this.functionName=i,this.trackerDictionary={},this.windowAlias=window;for(var o=0;o<n.length;o++)this[D](n[o])}var t=InQueueManager.prototype;return t[_]=function(t){var e=this,r=[];if(t&&0!==t.length)for(var n,i=_createForOfIteratorHelperLoose(t);!(n=i()).done;){var o=n.value;this.trackerDictionary.hasOwnProperty(o)?r.push(this.trackerDictionary[o]):s('Warning: Tracker namespace "'+o+'" not configured')}else r=Object.keys(this.trackerDictionary).map(function(t){return e.trackerDictionary[t]});return 0===r.length&&s("Warning: No tracker configured"),r},t[O]=function(t,e,r){r=r||{},this.trackerDictionary.hasOwnProperty(t)?s("Tracker namespace "+t+" already exists."):(this.trackerDictionary[t]=new this.TrackerConstructor(this.functionName,t,this.version,this.mutSnowplowState,r),this.trackerDictionary[t].setCollectorUrl(e))},t[E]=function(t){var e=t.split(":");return[e[0],e.length>1?e[1].split(";"):[]]},t[D]=function(){var t,e,r,n,i,o,a,s;for(t=0;t<arguments.length;t+=1)if(n=arguments[t],i=[].shift.call(n),p(i))i.apply(this.trackerDictionary,n);else if(r=(o=this[E](i))[0],a=o[1],"newTracker"!==r)if("create"!==r)for(s=this[_](a),e=0;e<s.length;e++)s[e][r].apply(s[e],n);else{var u=n[0],c=u.project_name,l=u.auto_page_view,h=u.encodeBase64,f=u.contexts,d=u.beacon,m=u.debug;if(this[O]("sp",P(m),{discoverRootDomain:!0,beacon:void 0===d||d,appId:c,encodeBase64:h,respectDoNotTrack:!1,contexts:Object.assign({},{webPage:!0,performanceTiming:!1,gaCookies:!1,geolocation:!1},f)}),!0===l)for(s=this[_](a),e=0;e<s.length;e++)s[e].trackPageView.apply(s[e],{})}else this[O](n[0],n[1],n[2])},t.push=function push(){this[D].apply(this,arguments)},InQueueManager}(),L=function(){function BrowserFeatureDetector(t,e,r,n){this.windowAlias=t,this.navigatorAlias=e,this.screenAlias=r,this.documentAlias=n}var t=BrowserFeatureDetector.prototype;return t.hasSessionStorage=function hasSessionStorage(){try{return!!this.windowAlias.sessionStorage}catch(t){return!0}},t.hasLocalStorage=function hasLocalStorage(){try{return!!this.windowAlias.localStorage}catch(t){return!0}},t.localStorageAccessible=function localStorageAccessible(){if(!this.hasLocalStorage())return!1;try{return this.windowAlias.localStorage.setItem("spt","spt"),this.windowAlias.localStorage.removeItem("spt"),!0}catch(t){return!1}},t.hasCookies=function hasCookies(t){var e=t||"testcookie";return void 0===this.navigatorAlias.cookieEnabled?(o(e,"1"),"1"===o(e)?"1":"0"):this.navigatorAlias.cookieEnabled?"1":"0"},t.detectSignature=function detectSignature(t){var e=[this.navigatorAlias.userAgent,[this.screenAlias.height,this.screenAlias.width,this.screenAlias.colorDepth].join("x"),(new Date).getTimezoneOffset(),this.hasSessionStorage(),this.hasLocalStorage()],r=[];if(this.navigatorAlias.plugins)for(var n=0;n<this.navigatorAlias.plugins.length;n++)if(this.navigatorAlias.plugins[n]){for(var i=[],o=0;o<this.navigatorAlias.plugins[n].length;o++)i.push([this.navigatorAlias.plugins[n][o].type,this.navigatorAlias.plugins[n][o].suffixes]);r.push([this.navigatorAlias.plugins[n].name+"::"+this.navigatorAlias.plugins[n].description,i.join("~")])}return function murmurhash(t,e){var r,n,i,o,a,s,u,c;for(r=3&t.length,n=t.length-r,i=e,a=3432918353,s=461845907,c=0;n>c;)u=255&t.charCodeAt(c)|(255&t.charCodeAt(++c))<<8|(255&t.charCodeAt(++c))<<16|(255&t.charCodeAt(++c))<<24,++c,i=27492+(65535&(o=5*(65535&(i=(i^=u=(65535&(u=(u=(65535&u)*a+(((u>>>16)*a&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(u=0,r){case 3:u^=(255&t.charCodeAt(c+2))<<1;case 2:u^=(255&t.charCodeAt(c+1))<<8;case 1:i^=u=(65535&(u=(u=(65535&(u^=255&t.charCodeAt(c)))*a+(((u>>>16)*a&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0}(e.join("###")+"###"+r.sort().join(";"),t)},t.detectTimezone=function detectTimezone(){var t=this.windowAlias.Intl,e=this.windowAlias.moment,r=this.windowAlias.jstz;if(t&&t.DateTimeFormat()&&t.DateTimeFormat().resolvedOptions()){var n=t.DateTimeFormat().resolvedOptions().timeZone;if(n&&(n.indexOf("/")>-1||"UTC"===n)&&0!==n.indexOf("Etc"))return n}if(e&&e.tz&&p(e.tz.guess))return e.tz.guess();if(r&&p(r.determine)){var i=r.determine();if(i)return i.name()}return"Unknown/Unknown"},t.detectViewport=function detectViewport(){var t=this.windowAlias,e="inner";"innerWidth"in this.windowAlias||(e="client",t=this.documentAlias.documentElement||this.documentAlias.body);var r=t[e+"Width"],n=t[e+"Height"];return 0>r||0>n?null:r+"x"+n},t.detectDocumentSize=function detectDocumentSize(){var t=this.documentAlias.documentElement,e=this.documentAlias.body,r=e?Math.max(e.offsetHeight,e.scrollHeight):0,n=Math.max(t.clientWidth,t.offsetWidth,t.scrollWidth),i=Math.max(t.clientHeight,t.offsetHeight,t.scrollHeight,r);return isNaN(n)||isNaN(i)?"":n+"x"+i},t.detectBrowserFeatures=function detectBrowserFeatures(t,e){var r={};return r.res=this.screenAlias.width+"x"+this.screenAlias.height,r.cd=this.screenAlias.colorDepth,t&&(r.cookie=this.hasCookies(e)),r},BrowserFeatureDetector}(),U=createCommonjsModule(function(t){var e,r;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],o=0;4>o;o++)8*n+6*o>8*t.length?r.push("="):r.push(e.charAt(i>>>6*(3-o)&63));return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(n))>>>6-2*i);return r}},t.exports=r}),N={utf8:{stringToBytes:function(t){return N.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(N.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}},Q=N,z=createCommonjsModule(function(t){var e,r,n,i;e=U,r=Q.utf8,n=Q.bin,(i=function(t,i){var o=e.wordsToBytes(function(t){t.constructor==String&&(t=r.stringToBytes(t));var n=e.bytesToWords(t),i=8*t.length,o=[],a=1732584193,s=-271733879,u=-1732584194,c=271733878,l=-1009589776;n[i>>5]|=128<<24-i%32,n[15+(i+64>>>9<<4)]=i;for(var h=0;h<n.length;h+=16){for(var f=a,d=s,m=u,g=c,p=l,v=0;80>v;v++){if(16>v)o[v]=n[h+v];else{var y=o[v-3]^o[v-8]^o[v-14]^o[v-16];o[v]=y<<1|y>>>31}var S=(a<<5|a>>>27)+l+(o[v]>>>0)+(20>v?1518500249+(s&u|~s&c):40>v?1859775393+(s^u^c):60>v?(s&u|s&c|u&c)-1894007588:(s^u^c)-899497514);l=c,c=u,u=s<<30|s>>>2,s=a,a=S}a+=f,s+=d,u+=m,c+=g,l+=p}return[a,s,u,c,l]}(t));return i&&i.asBytes?o:i&&i.asString?n.bytesToString(o):e.bytesToHex(o)})._blocksize=16,i._digestsize=20,t.exports=i}),V=Symbol(),R=Symbol(),B=Symbol(),M=Symbol(),H=Symbol(),F=Symbol(),G=function(){function OutQueueManager(t,e,r,n,i,o,a,s){if(this.detector=new L(window,navigator,screen,document),this.functionName=t,this.namespace=e,this.mutSnowplowState=r,this.useLocalStorage=n,this.bufferSize=a,this.maxPostBytes=s,this.executingQueue=!1,this.configCollectorUrl=null,this.outQueue=null,this.usePost=o&&window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,this.useBeacon=i&&navigator&&navigator.sendBeacon,this.path="/a/j",a=this.detector.localStorageAccessible()&&n&&o&&a||1,this.queueName=["snowplowOutQueue",t,e,o?"post2":"get"].join("_"),this.useLocalStorage)try{this.outQueue=JSON.parse(localStorage.getItem(this.queueName))}catch(t){}Array.isArray(this.outQueue)||(this.outQueue=[]),this.mutSnowplowState.outQueues.push(this.outQueue),o&&a>1&&this.mutSnowplowState.bufferFlushers.push(function(){this.executingQueue||this.executeQueue()})}var t=OutQueueManager.prototype;return t[V]=function(t){var e="?",r={co:!0,cx:!0},n=!0;for(var i in t)t.hasOwnProperty(i)&&!r.hasOwnProperty(i)&&(n?n=!1:e+="&",e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i]));for(var o in r)t.hasOwnProperty(o)&&r.hasOwnProperty(o)&&(e+="&"+o+"="+encodeURIComponent(t[o]));return e},t[R]=function(t){var e=function mapValues(t,e){return Object.entries(t).reduce(function(t,r){var n=r[0],i=r[1];return t[n]=e(i),t},{})}(t,function(t){return t.toString()});return{evt:e,bytes:this[B](JSON.stringify(e))}},t[B]=function(t){for(var e=0,r=0;r<t.length;r++){var n=t.charCodeAt(r);n>127?n>2047?55296>n||n>57343?e+=65535>n?3:4:(e+=4,r++):e+=2:e+=1}return e},t[M]=function(t){var e=new XMLHttpRequest;return e.open("POST",t,!0),e.withCredentials=!0,e.setRequestHeader("Content-Type","application/json; charset=UTF-8"),e},t[H]=function(t){return JSON.stringify({schema:"iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",data:t})},t[F]=function(t){var e=(new Date).getTime().toString();return t.map(function(t){return t.stm=e}),t},t.enqueueRequest=function enqueueRequest(t,e){if(this.configCollectorUrl=""+e+this.path,this.usePost||this.useBeacon){var r=this[R](t);if(r.bytes>=this.maxPostBytes)return s("Event of size "+r.bytes+" is too long - the maximum size is "+this.maxPostBytes),void this[M](this.configCollectorUrl).send(this[H](this[F]([r.evt])));this.outQueue.push(r)}else this.outQueue.push(this[V](t));var n=!1;this.useLocalStorage&&(n=u(this.queueName,JSON.stringify(this.outQueue))),this.executingQueue||n&&this.outQueue.length<this.bufferSize||this.executeQueue()},t.executeQueue=function executeQueue(){var t=this,e=function onPostSuccess(e){t.outQueue=t.outQueue.slice(e),t.useLocalStorage&&u(t.queueName,JSON.stringify(t.outQueue)),t.executeQueue()};if(this.outQueue=this.outQueue.filter(function(t){return t}),1>this.outQueue.length)this.executingQueue=!1;else{if(!v(this.configCollectorUrl))throw"No Snowplow collector configured, cannot track";this.executingQueue=!0;var r=this.outQueue[0];if(this.usePost||this.useBeacon){var n=this[M](this.configCollectorUrl),i=setTimeout(function(){n.abort(),t.executingQueue=!1},5e3),o=function chooseHowManyToExecute(e){for(var r=0,n=0;r<e.length&&(n+=e[r].bytes)<t.maxPostBytes;)r+=1;return r}(this.outQueue);n.onreadystatechange=function(){4===n.readyState&&n.status>=200&&400>n.status?(e(o),clearTimeout(i)):4!==n.readyState||400>n.status||(clearTimeout(i),t.executingQueue=!1)};var a=this.outQueue.slice(0,o).map(function(t){return t.evt});if(a.length>0&&this.useBeacon){var c=this[H](this[F](a));try{navigator.sendBeacon(this.configCollectorUrl,c),e(o)}catch(t){s(t),n.send(c)}}}else{var l=document.createElement("img",{height:1,width:1});l.onload=function(){t.outQueue.shift(),t.useLocalStorage&&u(t.queueName,JSON.stringify(t.outQueue)),t.executeQueue()},l.onerror=function(){return t.executingQueue=!1},l.src=this.configCollectorUrl+r.replace("?","?stm="+(new Date).getTime()+"&")}}},OutQueueManager}(),q=createCommonjsModule(function(t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var r=new Uint8Array(16);t.exports=function whatwgRNG(){return e(r),r}}else{var n=Array(16);t.exports=function mathRNG(){for(var t,e=0;16>e;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}}),Y=[],X=0;256>X;++X)Y[X]=(X+256).toString(16).substr(1);var J,W,Z=function v4(t,e,r){var n=e&&r||0;"string"==typeof t&&(e="binary"===t?Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||q)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var o=0;16>o;++o)e[n+o]=i[o];return e||function bytesToUuid(t,e){var r=e||0,n=Y;return""+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]}(i)},$=function isNonEmptyJson(t){if(void 0===t||!K(t))return!1;for(var e in t)if(t.hasOwnProperty(e))return!0;return!1},K=function isJson(t){return null!=t&&(t.constructor==={}.constructor||t.constructor===[].constructor)},tt=function payloadBuilder(t){var e={},r=function c(t,r){null!=r&&""!==r&&(e[t]=r)};return{add:r,addDict:function addDict(t){for(var e in t)t.hasOwnProperty(e)&&"string"==typeof e&&"string"==typeof t[e]&&r(e,t[e])},addJson:function addJson(e,n,i){if($(i)){var o=JSON.stringify(i);t?r(e,btoa(encodeURIComponent(o))):r(n,o)}},build:function build(){return e}}},et=function get(t,e,r){return(e=Array.isArray(e)?e:e.split(".")).reduce(function(t,e){return t&&t[e]?t[e]:r},t)},rt=function has(t,e){return!!et(t,e)},nt=function isEqual(t,e){if(t===e)return!0;var r=Array.isArray,n=Object.keys,i={}.hasOwnProperty;if(t&&e&&"object"==typeof t&&"object"==typeof e){var o,a,s,u=r(t),c=r(e);if(u&&c){if((a=t.length)!=e.length)return!1;for(o=a;0!=o--;)if(!isEqual(t[o],e[o]))return!1;return!0}if(u!=c)return!1;var l=t instanceof Date,h=e instanceof Date;if(l!=h)return!1;if(l&&h)return t.getTime()==e.getTime();var f=t instanceof RegExp,d=e instanceof RegExp;if(f!=d)return!1;if(f&&d)return t.toString()==e.toString();var m=n(t);if((a=m.length)!==n(e).length)return!1;for(o=a;0!=o--;)if(!i.call(e,m[o]))return!1;for(o=a;0!=o--;)if(!isEqual(t[s=m[o]],e[s]))return!1;return!0}return t!=t&&e!=e},it=function isObject(t){var e=typeof t;return null!=e&&("object"==e||"function"==e)},ot=function validateVendor(t){var e=t.split(".");return!(!e||1>=e.length)&&function validateVendorParts(t){if("*"===t[0]||"*"===t[1])return!1;if(t.slice(2).length>0){for(var e,r=!1,n=_createForOfIteratorHelperLoose(t.slice(2));!(e=n()).done;)if("*"===e.value)r=!0;else if(r)return!1;return!0}return 2==t.length}(e)},at=function getRuleParts(t){var e=/^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(t);return null!==e&&ot(e[1])?e.slice(1,6):void 0},st=function isValidRule(t){var e=at(t);if(e){var r=e[0];return 5===e.length&&ot(r)}return!1},ut=function isValidRuleSetArg(t){return function isStringArray(t){return Array.isArray(t)&&t.every(function(t){return"string"==typeof t})}(t)?t.every(function(t){return st(t)}):!("string"!=typeof t)&&st(t)},ct=function isSelfDescribingJson(t){return!!($(t)&&"schema"in t&&"data"in t)&&"string"==typeof t.schema&&"object"==typeof t.data},lt=function isContextGenerator(t){return"function"==typeof t&&1>=t.length},ht=function isContextFilter(t){return"function"==typeof t&&1>=t.length},ft=function isContextPrimitive(t){return lt(t)||ct(t)},dt=function isFilterProvider(t){return!(!Array.isArray(t)||2!==t.length)&&(Array.isArray(t[1])?ht(t[0])&&t[1].every(ft):ht(t[0])&&ft(t[1]))},mt=function isRuleSetProvider(t){return!(!Array.isArray(t)||2!==t.length)&&!!function isRuleSet(t){var e=0;if(function isPlainObject(t){return!!it(t)&&"function"==typeof t.constructor&&!!it(t.constructor.prototype)&&t.constructor.prototype.hasOwnProperty("isPrototypeOf")}(t)){if(rt(t,"accept")){if(!ut(t.accept))return!1;e+=1}if(rt(t,"reject")){if(!ut(t.reject))return!1;e+=1}return e>0&&2>=e}return!1}(t[0])&&(Array.isArray(t[1])?t[1].every(ft):ft(t[1]))},gt=function isConditionalContextProvider(t){return dt(t)||mt(t)},pt=function matchSchemaAgainstRule(t,e){if(!st(t))return!1;var r=at(t),n=function getSchemaParts(t){var e=/^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(t);return null===e?void 0:e.slice(1,6)}(e);if(r&&n){if(!vt(r[0],n[0]))return!1;for(var i=1;5>i;i++)if(!yt(r[i],n[i]))return!1;return!0}return!1},vt=function matchVendor(t,e){var r=e.split("."),n=t.split(".");if(r&&n){if(r.length!==n.length)return!1;for(var i=0;i<n.length;i++)if(!yt(r[i],n[i]))return!1;return!0}return!1},yt=function matchPart(t,e){return t&&e&&"*"===t||t===e},St=function normalizeToArray(t){return Array.isArray(t)?t:[t]},wt=function generatePrimitives(t,e,r,n){var i,o=St(t).map(function(t){return function f(t){var i=bt(t,e,r,n);if(i&&0!==i.length)return i}(t)}).filter(Boolean);return(i=[]).concat.apply(i,o)},bt=function evaluatePrimitive(t,e,r,n){if(ct(t))return[t];if(lt(t)){var i=function buildGenerator(t,e,r,n){var i;try{return i=t({event:e,eventType:r,eventSchema:n}),ct(i)?i:Array.isArray(i)&&i.every(ct)?i:void 0}catch(t){i=void 0}return i}(t,e,r,n);if(ct(i))return[i];if(Array.isArray(i))return i}},At=function trackerCore(t,r){void 0===t&&(t=!0);var n={},o=function contextModule(){var t=[],e=[],r=function c(r){var n=function getUsefulSchema(t){return"string"==typeof et(t,"ue_px.data.schema")?et(t,"ue_px.data.schema"):"string"==typeof et(t,"ue_pr.data.schema")?et(t,"ue_pr.data.schema"):"string"==typeof et(t,"schema")?et(t,"schema"):""}(r),i=function getEventType(t){return et(t,"e","")}(r),o=[],a=wt(t,r,i,n);o.push.apply(o,a);var s=function generateConditionals(t,e,r,n){var i,o=St(t).map(function(t){return function f(t){var i=function evaluateProvider(t,e,r,n){if(dt(t)){var i=t[0],o=!1;try{o=i({event:e,eventType:r,eventSchema:n})}catch(t){o=!1}if(!0===o)return wt(t[1],e,r,n)}else if(mt(t)&&function matchSchemaAgainstRuleSet(t,e){var r=0,n=0,i=et(t,"accept");Array.isArray(i)?t.accept.some(function(t){return pt(t,e)})&&n++:"string"==typeof i&&pt(i,e)&&n++;var o=et(t,"reject");return Array.isArray(o)?t.reject.some(function(t){return pt(t,e)})&&r++:"string"==typeof o&&pt(o,e)&&r++,!(0>=n||0!==r)||!(0===n&&r>0)&&!1}(t[0],n))return wt(t[1],e,r,n);return[]}(t,e,r,n);if(i&&0!==i.length)return i}(t)}).filter(Boolean);return(i=[]).concat.apply(i,o)}(e,r,i,n);return o.push.apply(o,s),o};return{addGlobalContexts:function addGlobalContexts(r){for(var n,i=[],o=[],a=_createForOfIteratorHelperLoose(r);!(n=a()).done;){var s=n.value;gt(s)?i.push(s):ft(s)&&o.push(s)}t=t.concat(o),e=e.concat(i)},clearGlobalContexts:function clearGlobalContexts(){e=[],t=[]},removeGlobalContexts:function removeGlobalContexts(r){for(var n,i=function _loop(){var r=n.value;gt(r)?e=e.filter(function(t){return!nt(t,r)}):ft(r)&&(t=t.filter(function(t){return!nt(t,r)}))},o=_createForOfIteratorHelperLoose(r);!(n=o()).done;)i()},getApplicableContexts:function getApplicableContexts(t){var e=t.build();if(function isEventJson(t){return!!($(t)&&"e"in t)&&"string"==typeof t.e}(e)){var n=function getDecodedEvent(t){var e=Object.assign({},t);try{rt(e,"ue_px")&&(e.ue_px=JSON.parse(atob(et(e,["ue_px"]))))}catch(t){}return e}(e);return r(n)}return[]}}}(),a=function e(t){return o.getApplicableContexts(t)},s=function f(t,e){n[t]=e},u=function h(t,e){var r=a(t),n=[];return e&&e.length&&n.push.apply(n,e),r&&r.length&&n.push.apply(n,r),n},c=function i(t,e,o){t.addDict(n),t.add("eid",Z());var a=function getTimestamp(t){return null==t?{type:"dtm",value:(new Date).getTime()}:"number"==typeof t?{type:"dtm",value:t}:"ttm"===t.type?{type:"ttm",value:t.value}:{type:"dtm",value:t.value||(new Date).getTime()}}(o);t.add(a.type,a.value.toString());var i=u(t,e),s=function g(t){if(t&&t.length)return{schema:"contexts",data:t}}(i);return void 0!==s&&t.addJson("cx","co",s),"function"==typeof r&&r(t),t},l=function j(e,r,n){var i=tt(t);return i.add("e","ue"),i.addJson("ue_px","ue_pr",{schema:"iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",data:e}),c(i,r,n)};return{setBase64Encoding:function setBase64Encoding(e){return t=e},addPayloadPair:s,addPayloadDict:function addPayloadDict(t){for(var e in t)"string"==typeof e&&t.hasOwnProperty(e)&&"string"==typeof t[e]&&(n[e]=t[e])},resetPayloadPairs:function resetPayloadPairs(t){n=K(t)?t:{}},setTrackerVersion:function setTrackerVersion(t){return s("tv",t)},setTrackerNamespace:function setTrackerNamespace(t){return s("tna",t)},setAppId:function setAppId(t){return s("aid",t)},setPlatform:function setPlatform(t){return s("p",t)},setUserId:function setUserId(t){return s("uid",t)},setViewport:function setViewport(t,e){return s("vp",t+"x"+e)},setColorDepth:function setColorDepth(t){return s("cd",""+t)},setTimezone:function setTimezone(t){return s("tz",t)},trackUnstructEvent:l,trackSelfDescribingEvent:l,trackPageView:function trackPageView(e,r,n,i,o){var a=tt(t);return a.add("e","pv"),a.add("url",e),a.add("page",r),a.add("refr",n),c(a,i,o)},trackPagePing:function trackPagePing(e,r,n,i,o,a,s,u,l){var h=tt(t);return h.add("e","pp"),h.add("url",e),h.add("page",r),h.add("refr",n),h.add("pp_mix",i.toString()),h.add("pp_max",o.toString()),h.add("pp_miy",a.toString()),h.add("pp_may",s.toString()),c(h,u,l)},trackStructEvent:function trackStructEvent(e,r,n,i,o,a,s){var u=tt(t);return u.add("e","se"),u.add("se_ca",e),u.add("se_ac",r),u.add("se_la",n),u.add("se_pr",i),u.add("se_va",null==o?void 0:o.toString()),c(u,a,s)},addGlobalContexts:function addGlobalContexts(t){return o.addGlobalContexts(t)},clearGlobalContexts:function clearGlobalContexts(){return o.clearGlobalContexts()},removeGlobalContexts:function removeGlobalContexts(t){return o.removeGlobalContexts(t)}}},kt={encodeBase64:!0,cookieDomain:null,cookieName:"_sp_",cookieSameSite:"None",cookieSecure:!0,appId:"",platform:"web",respectDoNotTrack:!1,userFingerprint:!0,userFingerprintSeed:123412414,pageUnloadTimer:500,forceSecureTracker:!1,forceUnsecureTracker:!1,useLocalStorage:!0,useCookies:!0,sessionCookieTimeout:1800,contexts:{},post:!1,beacon:!0,bufferSize:1,crossDomainLinker:!1,maxPostBytes:4e4,discoverRootDomain:!0,cookieLifetime:63072e3,stateStorageStrategy:"cookieAndLocalStorage"},Tt=function(){function ConfigManager(t){this._config=t}return function _createClass(t,e,r){e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1})}(ConfigManager,[{key:"config",get:function get(){return Object.assign({},kt,this._config)}}]),ConfigManager}(),xt=Symbol(),Ct=Symbol(),Pt=Symbol(),_t=Symbol(),Dt=Symbol(),Ot=Symbol(),Et=Symbol(),It=Symbol(),Lt=Symbol(),Ut=Symbol(),Nt=Symbol(),Qt=Symbol(),zt=Symbol(),Vt=Symbol(),jt=Symbol(),Rt=Symbol(),Bt=Symbol(),Mt=Symbol(),Ht=Symbol(),Ft=Symbol(),Gt=Symbol(),qt=Symbol(),Yt=Symbol(),Xt=Symbol(),Jt=Symbol(),Wt=Symbol(),Zt=Symbol(),$t=Symbol(),Kt=Symbol(),te=Symbol(),ee=Symbol(),re=Symbol(),ne=Symbol(),ie=Symbol(),oe=new L(window,navigator,screen,document),ae=document,se=window,ue=navigator,ce=Symbol(),le=Symbol(),he=function(){function JavascriptTracker(t,n,i,o,a){var s=this,u=this;this.ConfigManager=new Tt(a||{}),this[le]=this.ConfigManager.config,this.mutSnowplowState=o,this[ce]={get locationArray(){return g(ae.domain,se.location.href,r())},get domainAlias(){return e(this.locationArray[0])},locationHrefAlias:"",referrerUrl:"",pagePingInterval:20,customReferrer:"",requestMethod:"GET",collectorUrl:"",customUrl:"",lastDocumentTitle:"",lastConfigTitle:"",activityTrackingEnabled:!1,minimumVisitTime:0,heartBeatTimer:0,discardHashTag:!1,cookiePath:"/",get dnt(){return ue.doNotTrack||ue.msDoNotTrack||se.doNotTrack},get doNotTrack(){return le.respectDoNotTrack&&("yes"===this.dnt||"1"===this.dnt||!0===this.dnt)},optOutCookie:!1,countPreRendered:!1,get documentCharset(){return ae.characterSet||ae.charset},get forceSecureTracker(){return u[le].forceSecureTracker},get forceUnsecureTracker(){return!u.forceSecureTracker&&u[le].forceUnsecureTracker},get browserLanguage(){return ue.userLanguage||ue.language},get browserFeatures(){return oe.detectBrowserFeatures("cookie"===u[le].stateStorageStrategy||"cookieAndLocalStorage"===u[le].stateStorageStrategy,u[Ot]("testcookie"))},get userFingerprint(){return!1===le.userFingerprint?"":oe.detectSignature(le.userFingerprintSeed)},trackerId:t+"_"+n,activityTrackingInstalled:!1,lastActivityTime:null,lastEventTime:(new Date).getTime(),minXOffset:0,maxXOffset:0,minYOffset:0,maxYOffset:0,hash:z,domainHash:null,domainUserId:null,memorizedSessionId:1,businessUserId:null,geolocationContextAdded:!1,commonContexts:[],preservePageViewId:!1,pageViewSent:!1},this.core=At(!0,function(t){s[Gt](t),s[Dt](t,s[le].pageUnloadTimer)}),this.outQueueManager=new G(t,n,o,"localStorage"===this[le].stateStorageStrategy||"cookieAndLocalStorage"===le.stateStorageStrategy,this[le].beacon,this[le].post,this[le].bufferSize,this[le].maxPostBytes),this[le].discoverRootDomain&&(this[le].cookieDomain=l()),this[le].contexts.gaCookies&&this[ce].commonContexts.push(this[Kt]()),this[le].contexts.geolocation&&this[$t](),this.core.setBase64Encoding(this[le].encodeBase64),this.core.setTrackerVersion(i),this.core.setTrackerNamespace(n),this.core.setAppId(this[le].appId),this.core.setPlatform(this[le].platform),this.core.setTimezone(oe.detectTimezone()),this.core.addPayloadPair("lang",this[ce].browserLanguage),this.core.addPayloadPair("cs",this[ce].documentCharset);var c=this[ce].browserFeatures;Object.keys(c).forEach(function(t){"res"!==t&&"cd"!==t&&"cookie"!==t||s.core.addPayloadPair(t,c[t])}),this[ce].locationHrefAlias=this[ce].locationArray[1],this[ce].referrerUrl=this[ce].locationArray[2],this[It](),this[Ht](),this[le].crossDomainLinker&&this[Pt](this[le].crossDomainLinker)}var i=JavascriptTracker.prototype;return i[xt]=function(){var t=this[ce].locationHrefAlias;this[ce].locationArray[1]!==t&&(this[ce].ReferrerUrl=r(t)),this[ce].locationHrefAlias=this[ce].locationArray[1]},i[Ct]=function(t){var e=(new Date).getTime();t.target.href&&(t.target.href=function decorateQuerystring(t,e,r){var n=e+"="+r,i=t.split("#"),o=i[0].split("?"),a=o.shift(),s=o.join("?");if(s){for(var u=!0,c=s.split("&"),l=0;l<c.length;l++)if(c[l].substr(0,e.length+1)===e+"="){u=!1,c[l]=n,s=c.join("&");break}u&&(s=n+"&"+s)}else s=n;return i[0]=a+"?"+s,i.join("#")}(t.target.href,"_sp",this[ce].domainUserId+"."+e))},i[Pt]=function(t){for(var e,r=this,i=_createForOfIteratorHelperLoose(ae.links);!(e=i()).done;){var o=e.value;!o.spDecorationEnabled&&t(o)&&(n(o,"click",function(t){return r[Ct](t)},!0),n(o,"mousedown",function(t){return r[Ct](t)},!0),o.spDecorationEnabled=!0)}},i[_t]=function(t){return this[ce].discardHashTag?t.replace(/#.*/,""):t},i[Dt]=function(t,e){var r,n=new Date;r=!!this[ce].optOutCookie&&!!o(this[ce].optOutCookie),this[ce].doNotTrack||r||(this.outQueueManager.enqueueRequest(t.build(),this[le].collectorUrl),this.mutSnowplowState.expireDateTime=n.getTime()+e)},i[Ot]=function(t){return""+this[le].cookieName+t+"."+this[ce].domainHash},i[Et]=function(t){var e=this[Ot](t);return"localStorage"===this[le].stateStorageStrategy?function attemptGetLocalStorage(t){try{return localStorage.getItem(t)}catch(t){}}(e):"cookie"==this[le].stateStorageStrategy||"cookieAndLocalStorage"==this[le].stateStorageStrategy?o(e):void 0},i[It]=function(){this[xt](),this[ce].domainHash=this[ce].hash((this[le].cookieDomain||this[ce].domainAlias)+(this[ce].cookiePath||"/")).slice(0,4)},i[Lt]=function(){this[ce].lastActivityTime=(new Date).getTime()},i[Ut]=function(){this[Vt](),this[Lt]()},i[Nt]=function(){var t=ae.compatMode&&"BackCompat"!==ae.compatMode?ae.documentElement:ae.body;return[t.scrollLeft||se.pageXOffset,t.scrollTop||se.pageYOffset]},i[Qt]=function(){var t=this[Nt](),e=t[0],r=t[1];this[ce].minXOffset=e,this[ce].maxXOffset=e,this[ce].minYOffset=r,this[ce].maxYOffset=r},i[Vt]=function(){var t=this[Nt](),e=t[0],r=t[1];e<this[ce].minXOffset?this[ce].minXOffset=e:e>this[ce].maxXOffset&&(this[ce].maxXOffset=e),r<this[ce].minYOffset?this[ce].minYOffset=r:r>this[ce].maxYOffset&&(this[ce].maxYOffset=r)},i[zt]=function(t){var e=Math.round(t);if(!isNaN(e))return e},i[jt]=function(){var t=this[Ot]("ses");this[Bt](t,"*",this[le].sessionCookieTimeout)},i[Rt]=function(t,e,r,n,i,o){var a=this[Ot]("id"),s=t+"."+e+"."+r+"."+n+"."+i+"."+o;this[Bt](a,s,this[le].cookieLifetime)},i[Bt]=function(t,e,r){"localStorage"==this[le].stateStorageStrategy?u(t,e):"cookie"!=this[le].stateStorageStrategy&&"cookieAndLocalStorage"!=this[le].stateStorageStrategy||o(t,e,r,this[ce].cookiePath,this[le].cookieDomain)},i[Mt]=function(){return Z()},i[Ht]=function(){var t="none"!=this[le].stateStorageStrategy&&!!this[Et]("ses"),e=this[Ft]();e[1]?this[ce].domainUserId=e[1]:(this[ce].domainUserId=this[Mt](),e[1]=this[ce].domainUserId),this[ce].memorizedSessionId=e[6],t||(e[3]++,this[ce].memorizedSessionId=Z(),e[6]=this[ce].memorizedSessionId,e[5]=e[4]),"none"!=this[le].stateStorageStrategy&&(this[jt](),e[4]=Math.round((new Date).getTime()/1e3),e.shift(),this[Rt].apply(this,e))},i[Ft]=function(){if("none"==this[le].stateStorageStrategy)return[];var t,e=Math.round((new Date).getTime()/1e3),r=this[Et]("id");return r?(t=r.split(".")).unshift("0"):t=["1",this[ce].domainUserId,e,0,e,""],t[6]||(t[6]=Z()),t},i[Gt]=function(t){var e,r=Math.round((new Date).getTime()/1e3),n=this[Ot]("id"),i=this[Ot]("ses"),a=this[Et]("ses"),s=this[Ft](),c=s[0],l=s[1],h=s[2],f=s[3],d=s[4],m=s[5],g=s[6];e=!!this[ce].optOutCookie&&!!o(this[ce].optOutCookie),!this[ce].doNotTrack&&!e||"none"==this[le].stateStorageStrategy?("0"===c?(this[ce].memorizedSessionId=g,a||"none"==this[le].stateStorageStrategy||(f++,m=d,this[ce].memorizedSessionId=Z()),this[ce].memorizedVisitCount=f):(new Date).getTime()-this[ce].lastEventTime>1e3*this[le].sessionCookieTimeout&&(this[ce].memorizedSessionId=Z(),this[ce].memorizedVisitCount++),t.add("vp",oe.detectViewport()),t.add("ds",oe.detectDocumentSize()),t.add("vid",this[ce].memorizedVisitCount),t.add("sid",this[ce].memorizedSessionId),t.add("duid",l),t.add("fp",this[ce].userFingerprint),t.add("uid",this[ce].businessUserId),this[xt](),t.add("refr",this[_t](this[ce].customReferrer||this[ce].referrerUrl)),t.add("url",this[_t](this[ce].customReferrer||this[ce].locationHrefAlias)),"none"!=this[le].stateStorageStrategy&&(this[Rt](l,h,this[ce].memorizedVisitCount,r,m,this[ce].memorizedSessionId),this[jt]()),this[ce].lastEventTime=(new Date).getTime()):"localStorage"==this[le].stateStorageStrategy?(u(n,""),u(i,"")):"cookie"!=this[le].stateStorageStrategy&&"cookieAndLocalStorage"!=this[le].stateStorageStrategy||(o(n,"",-1,this[ce].cookiePath,this[le].cookieDomain,this[le].cookieSameSite,this[le].cookieSecure),o(i,"",-1,this[ce].cookiePath,this[le].cookieDomain,this[le].cookieSameSite,this[le].cookieSecure))},i[qt]=function(t){return this[ce].forceSecureTracker?"https://"+t:this[ce].forceUnsecureTracker?"http://"+t:("https:"===ae.location.protocol?"https":"http")+"://"+t},i[Yt]=function(t){t=t&&Object.entries(t).length>0?{schema:"event",data:t.constructor===Array?t[0]:t}:void 0;var e=this[ce].commonContexts.concat(t||[]);if(this[le].contexts.webPage&&e.push(this[Wt]()),this[le].contexts.performanceTiming){var r=this[Zt]();r&&e.push(r)}for(var n=0,i=["marker","mamka_auid","auid"];i.length>n;n++){var a=i[n],s=o(a);""!==s&&e.push({schema:a,data:{id:s}})}return e},i[Xt]=function(){this[ce].preservePageViewId&&null!=this.mutSnowplowState.pageViewId||(this.mutSnowplowState.pageViewId=Z())},i[Jt]=function(){return null==this.mutSnowplowState.pageViewId&&(this.mutSnowplowState.pageViewId=Z()),this.mutSnowplowState.pageViewId},i[Wt]=function(){return{schema:"webPage",data:{id:this[Jt]()}}},i[Zt]=function(){var t=["navigationStart","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd","unloadEventStart","unloadEventEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd","msFirstPaint","chromeFirstPaint","requestEnd","proxyStart","proxyEnd"],e=se.performance||se.mozPerformance||se.msPerformance||se.webkitPerformance;if(e){var r={};for(var n in e.timing)h(n,t)&&null!==e.timing[n]&&(r[n]=e.timing[n]);return delete r.requestEnd,se.chrome&&se.chrome.loadTimes&&"number"==typeof se.chrome.loadTimes().firstPaintTime&&(r.chromeFirstPaint=Math.round(1e3*se.chrome.loadTimes().firstPaintTime)),{schema:"PerformanceTiming",data:r}}},i[$t]=function(){var t=this;!this[ce].geolocationContextAdded&&ue.geolocation&&ue.geolocation.getCurrentPosition&&(this[ce].geolocationContextAdded=!0,ue.geolocation.getCurrentPosition(function(e){var r=e.coords,n={schema:"geolocation",data:{latitude:r.latitude,longitude:r.longitude,latitudeLongitudeAccuracy:r.accuracy,altitude:r.altitude,altitudeAccuracy:r.altitudeAccuracy,bearing:r.heading,speed:r.speed,timestamp:Math.round(e.timestamp)}};t[ce].commonContexts.push(n)}))},i[Kt]=function(){var t={};return["__utma","__utmb","__utmc","__utmv","__utmz","_ga"].forEach(function(e){var r=o(e);r&&(t[e]=r)}),{schema:"gaCookies",data:t}},i[te]=function(t,e){return(t||[]).concat(e?e():[])},i[ee]=function(e,r,i,o){var a=this;this[xt](),this[ce].pageViewSent&&this[Xt](),this[ce].pageViewSent=!0,this[ce].lastDocumentTitle=ae.title,this[ce].lastConfigTitle=e;var s=t(this[ce].lastConfigTitle||this[ce].lastDocumentTitle);this.core.trackPageView(this[_t](this[ce].customUrl||this[ce].locationHrefAlias),s,this[_t](this[ce].customReferrer||this[ce].referrerUrl),this[Yt](this[te](r,i)),o);var u=new Date;if(this[ce].activityTrackingEnabled&&!this[ce].activityTrackingInstalled){this[ce].activityTrackingInstalled=!0;var c={update:function update(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=!1,e=Object.defineProperty({},"passive",{get:function get(){return t=!0}}),r=function noop(){};window.addEventListener("testPassiveEventSupport",r,e),window.removeEventListener("testPassiveEventSupport",r,e),c.hasSupport=t}}};c.update();var l="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";!{}.hasOwnProperty.call(c,"hasSupport")?n(ae,l,function(){return a[Lt]}):n(ae,l,function(){},{passive:!0}),this[Qt](),n(ae,"click",function(){return a[Lt]}),n(ae,"mouseup",function(){return a[Lt]}),n(ae,"mousedown",function(){return a[Lt]}),n(ae,"mousemove",function(){return a[Lt]}),n(se,"scroll",function(){return a[Ut]}),n(ae,"keypress",function(){return a[Lt]}),n(ae,"keydown",function(){return a[Lt]}),n(ae,"keyup",function(){return a[Lt]}),n(se,"resize",function(){return a[Lt]}),n(se,"focus",function(){return a[Lt]}),n(se,"blur",function(){return a[Lt]}),this[ce].lastActivityTime=u.getTime(),clearInterval(this[ce].pagePingInterval),this[ce].pagePingInterval=setInterval(function(){var t=new Date;a[ce].lastActivityTime+a[le].heartBeatTimer>t.getTime()&&a[ce].minimumVisitTime<t.getTime()&&a[re](a[te](r,i))},this[le].heartBeatTimer)}},i[re]=function(e){this[xt]();var r=ae.title;r!==this[ce].lastDocumentTitle&&(this[ce].lastDocumentTitle=r,this[ce].lastConfigTitle=null),this.core.trackPagePing(this[_t](this[ce].customUrl||this[ce].locationHrefAlias),t(this[ce].lastConfigTitle||this[ce].lastDocumentTitle),this[_t](this[ce].customReferrer||this[ce].referrerUrl),this[zt](this[ce].minXOffset),this[zt](this[ce].maxXOffset),this[zt](this[ce].minYOffset),this[zt](this[ce].maxYOffset),this[Yt](e)),this[Qt]()},i[ne]=function(t,e){return""!==t?t+e.charAt(0).toUpperCase()+e.slice(1):e},i[ie]=function(t){var e,r,i,o=["","webkit","ms","moz"];if(!this[ce].countPreRendered)for(r=0;o.length>r;r++){if(i=o[r],ae[this[ne](i,"hidden")]){"prerender"===ae[this[ne](i,"visibilityState")]&&(e=!0);break}if(!1===ae[this[ne](i,"hidden")])break}e?n(ae,i+"visibilitychange",function eventHandler(){ae.removeEventListener(i+"visibilitychange",eventHandler,!1),t()}):t()},i.discardHashTag=function discardHashTag(t){this[ce].discardHashTag=t},i.crossDomainLinker=function crossDomainLinker(t){this[Pt](t)},i.setUserId=function setUserId(t){this[ce].businessUserId=t},i.setCollectorUrl=function setCollectorUrl(t){this[le].collectorUrl=this[qt](t)},i.trackPageView=function trackPageView(t,e,r,n){var i=this;this[ie](function(){i[ee](t,e,r,n)})},i.send_page_view=function send_page_view(t,e){var r=this;this[ie](function(){r[ee](void 0,[t],e,null)})},i.get_params=function get_params(t){s("get_params is deprecated!")},i.trackStructEvent=function trackStructEvent(t,e,r,n,i,o,a){var s=this;this[ie](function(){s.core.trackStructEvent(t,e,r,n,i,s[Yt](o),a)})},i.send_event=function send_event(t){var e,r,n,i=this,o=t.meta;if(t.name.includes("--")){var a=t.name.split("--");e=a[0],n=a[1],r=a[2]}else e=r=t.name;this[ie](function(){i.core.trackStructEvent(e,r,n,null,null,i[Yt](o),null)})},i.trackUnstructEvent=function trackUnstructEvent(t,e,r){var n=this;this[ie](function(){n.core.trackSelfDescribingEvent(t,n[Yt](e),r)})},i.preservePageViewId=function preservePageViewId(){this[ce].preservePageViewId=!0},JavascriptTracker}(),fe=function SnowplowTracker(t,e){var r=this;this.documentAlias=document,this.windowAlias=window,this.version="js-19.20.0",this.mutSnowplowState={outQueues:[],bufferFlushers:[],expireDateTime:null,hasLoaded:!1,registeredOnLoadHandlers:[],pageViewId:null};var i=function loadHandler(){var t;if(!r.mutSnowplowState.hasLoaded)for(r.mutSnowplowState.hasLoaded=!0,t=0;t<r.mutSnowplowState.registeredOnLoadHandlers.length;t++)r.mutSnowplowState.registeredOnLoadHandlers[t]();return!0};return n(this.windowAlias,"beforeunload",function beforeUnloadHandler(){var t;if(r.mutSnowplowState.bufferFlushers.forEach(function(t){t()}),r.mutSnowplowState.expireDateTime)do{if(t=new Date,0===r.mutSnowplowState.outQueues.filter(function(t){return t.length>0}).length)break}while(t.getTime()<r.mutSnowplowState.expireDateTime)},!1),function addReadyListener(){var t;r.documentAlias.addEventListener?n(r.documentAlias,"DOMContentLoaded",function ready(){this.documentAlias&&this.documentAlias.removeEventListener&&(this.documentAlias.removeEventListener("DOMContentLoaded",ready,!1),i())}):r.documentAlias.attachEvent&&(r.documentAlias.attachEvent("onreadystatechange",function ready(){"complete"===this.documentAlias.readyState&&(this.documentAlias.detachEvent("onreadystatechange",ready),i())}),r.documentAlias.documentElement.doScroll&&r.windowAlias===r.windowAlias.top&&function ready(){if(!this.mutSnowplowState.hasLoaded){try{this.documentAlias.documentElement.doScroll("left")}catch(t){return void setTimeout(ready,0)}i()}}()),/WebKit/.test(navigator.userAgent)&&(t=setInterval(function(){(r.mutSnowplowState.hasLoaded||/loaded|complete/.test(r.documentAlias.readyState))&&(clearInterval(t),i())},10)),n(r.windowAlias,"load",i,!1)}(),new I(he,this.version,this.mutSnowplowState,t,e)},de=window;de.GSN&&de.GSN.length>0?(J=de.GSN.shift(),(W=de[J]).q=new fe(W.q,J)):(de._snaq=de._snaq||[],de._snaq=new fe(de._snaq,"_snaq"))}();
//# sourceMappingURL=sp.js.map
earch)}),[r]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(ot,{children:[s.map((s=>(0,V.jsx)(ot.Item,{children:(0,V.jsx)(Qe,{country:s,onClick:a,hasRuTrace:e,isActive:$e(t,s)})},s.iata))),(0,V.jsx)(ot.Item,{children:(0,V.jsx)(at,{type:et.Custom,onClick:i})})]}),!Ee()(t)&&(0,V.jsx)(nt,{onClick:o})]})};var ir=s(80191),lr=s(13209),nr="s__N6m3kc3UFb8U0GcTgKtD";const cr=()=>{const{suggestedCountries:e,possibleCountries:t,searchedCountries:s,activeCountry:r,onTemporaryCountryChanged:a,searchValue:o,onChangeSearchValue:i,onAnotherCountryRedirect:l}=(0,ar.useUnit)({searchValue:Os.$searchValue,activeCountry:Os.$activeCountry,suggestedCountries:Os.$suggestedCountries,possibleCountries:Os.$possibleCountries,searchedCountries:Os.$searchedCountries,onChangeSearchValue:Bs.searchValueChanged,onTemporaryCountryChanged:Bs.temporaryCountryChanged,onAnotherCountryRedirect:Bs.anotherCountryRedirected});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:"s__DVRQWcoKvPsOri2O_ePm",children:(0,V.jsx)(lr.M,{value:o,onChange:i})}),(0,V.jsx)("div",{className:"s__tWrPPN0vYNwR8h1xwfik",children:o?(0,V.jsxs)(ot,{children:[s.map((e=>(0,V.jsx)(ot.Item,{className:nr,children:(0,V.jsx)(dt,{country:e,onClick:a,isActive:$e(r,e)})},e.iata))),(0,V.jsx)(ot.Item,{children:(0,V.jsx)(at,{onClick:l})})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ot,{children:e.map((e=>(0,V.jsx)(ot.Item,{className:nr,children:(0,V.jsx)(dt,{country:e,onClick:a,isActive:$e(r,e)})},e.iata)))}),(0,V.jsx)(ir.i,{className:"s__lxHlKOQ7eHYsHAirMJD9"}),(0,V.jsxs)(ot,{children:[t.map((e=>(0,V.jsx)(ot.Item,{className:nr,children:(0,V.jsx)(dt,{country:e,onClick:a,isActive:$e(r,e)})},e.iata))),(0,V.jsx)(ot.Item,{children:(0,V.jsx)(at,{onClick:l})})]})]})})]})};var ur={popup:"s__OpkU0gWENywzW4hzknCG",step_suggestions:"s__C9RopclJ_L3aflwRenyT",step_search:"s__sMPgrVb8c_y4KHxWqOLM"};const dr={MarketChangeOfferPopupContainer:()=>{const{isServer:e,isPopupVisible:t,title:s,subtitle:r,activeStep:a,onChangeStep:o}=(0,ar.useUnit)({isServer:T.y.outputs.$isServer,isPopupVisible:Os.$isPopupVisible,title:Os.$popupTitle,subtitle:Os.$popupSubtitle,activeStep:Os.$activeStep,onChangeStep:Bs.activeStepChanged}),i=(0,O.useMemo)((()=>{switch(a){case m.Suggestions:return(0,V.jsx)(or,{});case m.Search:return(0,V.jsx)(cr,{});default:return null}}),[a]);return e?null:(0,V.jsx)(K,{className:$()(ur.popup,ur[`step_${a}`]),step:a,visible:t,headerSlot:(0,V.jsx)(K.Header,{step:a,title:s,subtitle:r,onChangeStep:o}),children:i})}},pr=(0,r.G6)({importMetaUrl:"file:///home/jenkins/agent/workspace/selene/client/src/product/usercom/services/market_change_offer/index.ts",lifecycle:{start:Mt},api:{inputs:Bs,outputs:Os,containers:dr}}),{containers:{MarketChangeOfferPopupContainer:hr}}=pr,vr=()=>(0,V.jsx)(hr,{})},23109:function(e,t,s){var r={"./AC.svg":[25761,41165],"./AD.svg":[69466,48921],"./AE.svg":[68885,69061],"./AF.svg":[28822,18461],"./AG.svg":[44996,86200],"./AI.svg":[83211,78656],"./AL.svg":[11410,7864],"./AM.svg":[7103,41344],"./AO.svg":[77865,83166],"./AQ.svg":[19937,35218],"./AR.svg":[65657,62569],"./AS.svg":[45164,10960],"./AT.svg":[21029,20103],"./AU.svg":[31196,11889],"./AW.svg":[34626,72717],"./AX.svg":[5116,14234],"./AZ.svg":[1150,76924],"./BA.svg":[71648,89900],"./BB.svg":[27426,13853],"./BD.svg":[79283,18898],"./BE.svg":[417,63987],"./BF.svg":[15445,90411],"./BG.svg":[52891,20654],"./BH.svg":[19127,91076],"./BI.svg":[88034,8280],"./BJ.svg":[60840,37806],"./BL.svg":[99272,37783],"./BM.svg":[20858,49590],"./BN.svg":[72844,17251],"./BO.svg":[85163,20022],"./BQ.svg":[82903,4847],"./BR.svg":[15119,52566],"./BS.svg":[62694,21362],"./BT.svg":[6209,38839],"./BV.svg":[17760,56833],"./BW.svg":[41676,87542],"./BY.svg":[47866,27804],"./BZ.svg":[40988,45686],"./CA.svg":[95343,13220],"./CC.svg":[96179,79894],"./CD.svg":[69318,59047],"./CF.svg":[53873,19120],"./CG.svg":[30120,62716],"./CH.svg":[82950,97779],"./CI.svg":[49252,37961],"./CK.svg":[97705,69332],"./CL.svg":[55568,75337],"./CM.svg":[81563,24641],"./CN.svg":[22726,14292],"./CO.svg":[36951,26777],"./CR.svg":[32745,68011],"./CU.svg":[23202,11454],"./CV.svg":[12152,96042],"./CW.svg":[85245,77645],"./CX.svg":[72792,1934],"./CY.svg":[34954,67532],"./CZ.svg":[97808,7070],"./DE.svg":[96779,39849],"./DJ.svg":[88001,2978],"./DK.svg":[93268,24603],"./DM.svg":[26200,11449],"./DO.svg":[93592,84756],"./DZ.svg":[43500,39424],"./EC.svg":[15359,49787],"./EE.svg":[71920,9111],"./EG.svg":[51088,7064],"./EH.svg":[23756,16635],"./ER.svg":[67810,59016],"./ES.svg":[61719,17440],"./ET.svg":[36595,48481],"./EU.svg":[84735,15866],"./FI.svg":[15394,48721],"./FJ.svg":[85047,68521],"./FK.svg":[68967,6240],"./FM.svg":[27315,66704],"./FO.svg":[32154,9609],"./FR.svg":[73027,69124],"./GA.svg":[3840,96472],"./GB.svg":[21261,23242],"./GD.svg":[25465,20986],"./GE.svg":[33272,84156],"./GF.svg":[3959,96791],"./GG.svg":[25745,37066],"./GH.svg":[21380,67842],"./GI.svg":[29381,44523],"./GL.svg":[47701,75414],"./GM.svg":[4749,46868],"./GN.svg":[9427,56943],"./GP.svg":[75564,76820],"./GQ.svg":[83755,97544],"./GR.svg":[46095,84332],"./GS.svg":[54777,85412],"./GT.svg":[49723,48694],"./GU.svg":[15348,80441],"./GW.svg":[3102,51179],"./GY.svg":[18378,80720],"./HK.svg":[29029,37691],"./HM.svg":[48809,87791],"./HN.svg":[1070,88409],"./HR.svg":[38466,80308],"./HT.svg":[60143,59763],"./HU.svg":[42527,12294],"./ID.svg":[15883,14839],"./IE.svg":[82795,98213],"./IL.svg":[41193,95752],"./IM.svg":[61889,84610],"./IN.svg":[89517,32416],"./IO.svg":[13743,32056],"./IQ.svg":[46697,32769],"./IR.svg":[43626,60490],"./IS.svg":[26837,71214],"./IT.svg":[75281,99508],"./JE.svg":[70055,78953],"./JM.svg":[92609,95709],"./JO.svg":[85273,22737],"./JP.svg":[21691,59863],"./KE.svg":[5764,25510],"./KG.svg":[91438,6437],"./KH.svg":[45893,17484],"./KI.svg":[25038,81665],"./KM.svg":[35647,60127],"./KN.svg":[50462,13422],"./KP.svg":[63227,39850],"./KR.svg":[57813,39456],"./KW.svg":[14033,82558],"./KY.svg":[20334,99757],"./KZ.svg":[30965,92243],"./LA.svg":[79829,47036],"./LB.svg":[72649,61673],"./LC.svg":[78692,13482],"./LI.svg":[89883,20774],"./LK.svg":[88904,16544],"./LR.svg":[8157,35587],"./LS.svg":[58757,83799],"./LT.svg":[92485,90069],"./LU.svg":[43483,35848],"./LV.svg":[79584,36600],"./LY.svg":[33405,99786],"./MA.svg":[73604,16962],"./MC.svg":[29687,95436],"./MD.svg":[22982,69986],"./ME.svg":[19278,83553],"./MF.svg":[70037,73855],"./MG.svg":[30010,13522],"./MH.svg":[79398,15545],"./MK.svg":[77339,91473],"./ML.svg":[50153,70289],"./MM.svg":[2461,91046],"./MN.svg":[60499,71478],"./MO.svg":[82775,9008],"./MP.svg":[9828,45350],"./MQ.svg":[39333,55769],"./MR.svg":[68397,24392],"./MS.svg":[15875,60197],"./MT.svg":[31958,16214],"./MU.svg":[90902,62133],"./MV.svg":[6120,18308],"./MW.svg":[45929,58382],"./MX.svg":[12102,51633],"./MY.svg":[72317,56793],"./MZ.svg":[57779,7683],"./NA.svg":[96091,55127],"./NC.svg":[81578,71660],"./NE.svg":[97687,31470],"./NF.svg":[54685,20035],"./NG.svg":[43165,70081],"./NI.svg":[61561,57292],"./NL.svg":[12880,89313],"./NO.svg":[80754,11959],"./NP.svg":[69982,43642],"./NR.svg":[77198,63836],"./NU.svg":[94731,97928],"./NZ.svg":[75934,43549],"./OM.svg":[98627,4974],"./PA.svg":[26114,90361],"./PE.svg":[72780,852],"./PF.svg":[97511,81097],"./PG.svg":[47689,46290],"./PH.svg":[65901,64769],"./PK.svg":[69748,98194],"./PL.svg":[8065,69051],"./PM.svg":[23093,37201],"./PN.svg":[39825,39234],"./PR.svg":[70334,50413],"./PS.svg":[75364,45516],"./PT.svg":[70378,65780],"./PW.svg":[14435,74361],"./PY.svg":[47698,51175],"./QA.svg":[90776,59624],"./RE.svg":[88157,61097],"./RO.svg":[64586,54565],"./RS.svg":[78829,82069],"./RU.svg":[28182,43138],"./RW.svg":[47024,23554],"./SA.svg":[99566,80075],"./SB.svg":[59033,57525],"./SC.svg":[63754,29051],"./SD.svg":[97381,23534],"./SE.svg":[86278,90137],"./SG.svg":[41583,90594],"./SH.svg":[1241,59580],"./SI.svg":[10096,64740],"./SJ.svg":[61462,82815],"./SK.svg":[99346,90748],"./SL.svg":[70024,45940],"./SM.svg":[37324,18284],"./SN.svg":[81865,26714],"./SO.svg":[12647,72469],"./SR.svg":[72637,59466],"./SS.svg":[9037,65394],"./ST.svg":[3525,93375],"./SV.svg":[23828,83978],"./SX.svg":[66396,63308],"./SY.svg":[61237,33751],"./SZ.svg":[39948,19131],"./TA.svg":[27994,76693],"./TC.svg":[16724,30520],"./TD.svg":[97139,78626],"./TF.svg":[88133,98007],"./TG.svg":[8603,84890],"./TH.svg":[66694,10277],"./TJ.svg":[2979,18884],"./TK.svg":[99837,51968],"./TL.svg":[43474,53557],"./TM.svg":[7890,99398],"./TN.svg":[10321,20160],"./TO.svg":[79109,97481],"./TR.svg":[72919,28639],"./TT.svg":[66354,11380],"./TV.svg":[19533,24142],"./TW.svg":[87603,78665],"./TZ.svg":[5580,15666],"./UA.svg":[49694,92053],"./UG.svg":[35350,65397],"./UM.svg":[87749,69602],"./US.svg":[78905,76634],"./UY.svg":[69252,72437],"./UZ.svg":[52357,38644],"./VA.svg":[60450,78492],"./VC.svg":[17370,19188],"./VE.svg":[59382,8889],"./VG.svg":[92398,2547],"./VI.svg":[49920,74993],"./VN.svg":[21448,78681],"./VU.svg":[83373,74319],"./WF.svg":[36118,61742],"./WS.svg":[46610,45298],"./XK.svg":[82107,59940],"./YE.svg":[39301,15450],"./YT.svg":[40634,6950],"./ZA.svg":[72561,96734],"./ZM.svg":[56335,52357],"./ZW.svg":[16024,21244]};function a(e){if(!s.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return s.e(t[1]).then((function(){return s.t(a,17)}))}a.keys=function(){return Object.keys(r)},a.id=23109,e.exports=a},24262:function(e,t,s){"use strict";function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}s.d(t,{Z:function(){return r}})},80760:function(e,t,s){var r=s(89881);e.exports=function(e,t){var s=[];return r(e,(function(e,r,a){t(e,r,a)&&s.push(e)})),s}},47556:function(e,t,s){var r=s(88668),a=s(47443),o=s(1196),i=s(29932),l=s(7518),n=s(74757),c=Math.min;e.exports=function(e,t,s){for(var u=s?o:a,d=e[0].length,p=e.length,h=p,v=Array(p),g=1/0,f=[];h--;){var m=e[h];h&&t&&(m=i(m,l(t))),g=c(m.length,g),v[h]=!s&&(t||d>=120&&m.length>=120)?new r(h&&m):void 0}m=e[0];var C=-1,x=v[0];e:for(;++C<d&&f.length<g;){var y=m[C],k=t?t(y):y;if(y=s||0!==y?y:0,!(x?n(x,k):u(f,k,s))){for(h=p;--h;){var S=v[h];if(!(S?n(S,k):u(e[h],k,s)))continue e}x&&x.push(k),f.push(y)}}return f}},82689:function(e,t,s){var r=s(29932),a=s(97786),o=s(67206),i=s(69199),l=s(71131),n=s(7518),c=s(85022),u=s(6557),d=s(1469);e.exports=function(e,t,s){t=t.length?r(t,(function(e){return d(e)?function(t){return a(t,1===e.length?e[0]:e)}:e})):[u];var p=-1;t=r(t,n(o));var h=i(e,(function(e,s,a){return{criteria:r(t,(function(t){return t(e)})),index:++p,value:e}}));return l(h,(function(e,t){return c(e,t,s)}))}},25970:function(e,t,s){var r=s(63012),a=s(79095);e.exports=function(e,t){return r(e,t,(function(t,s){return a(e,s)}))}},14259:function(e){e.exports=function(e,t,s){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(s=s>a?a:s)<0&&(s+=a),a=t>s?0:s-t>>>0,t>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+t];return o}},5076:function(e,t,s){var r=s(89881);e.exports=function(e,t){var s;return r(e,(function(e,r,a){return!(s=t(e,r,a))})),!!s}},71131:function(e){e.exports=function(e,t){var s=e.length;for(e.sort(t);s--;)e[s]=e[s].value;return e}},47415:function(e,t,s){var r=s(29932);e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},24387:function(e,t,s){var r=s(29246);e.exports=function(e){return r(e)?e:[]}},26393:function(e,t,s){var r=s(33448);e.exports=function(e,t){if(e!==t){var s=void 0!==e,a=null===e,o=e==e,i=r(e),l=void 0!==t,n=null===t,c=t==t,u=r(t);if(!n&&!u&&!i&&e>t||i&&l&&c&&!n&&!u||a&&l&&c||!s&&c||!o)return 1;if(!a&&!i&&!u&&e<t||u&&s&&o&&!a&&!i||n&&s&&o||!l&&o||!c)return-1}return 0}},85022:function(e,t,s){var r=s(26393);e.exports=function(e,t,s){for(var a=-1,o=e.criteria,i=t.criteria,l=o.length,n=s.length;++a<l;){var c=r(o[a],i[a]);if(c)return a>=n?c:c*("desc"==s[a]?-1:1)}return e.index-t.index}},67740:function(e,t,s){var r=s(67206),a=s(98612),o=s(3674);e.exports=function(e){return function(t,s,i){var l=Object(t);if(!a(t)){var n=r(s,3);t=o(t),s=function(e){return n(l[e],e,l)}}var c=e(t,s,i);return c>-1?l[n?t[c]:c]:void 0}}},23468:function(e,t,s){var r=s(7548),a=s(99021),o=s(66833),i=s(97658),l=s(1469),n=s(86528);e.exports=function(e){return a((function(t){var s=t.length,a=s,c=r.prototype.thru;for(e&&t.reverse();a--;){var u=t[a];if("function"!=typeof u)throw new TypeError("Expected a function");if(c&&!d&&"wrapper"==i(u))var d=new r([],!0)}for(a=d?a:s;++a<s;){u=t[a];var p=i(u),h="wrapper"==p?o(u):void 0;d=h&&n(h[0])&&424==h[1]&&!h[4].length&&1==h[9]?d[i(h[0])].apply(d,h[3]):1==u.length&&n(u)?d[p]():d.thru(u)}return function(){var e=arguments,r=e[0];if(d&&1==e.length&&l(r))return d.plant(r).value();for(var a=0,o=s?t[a].apply(this,e):r;++a<s;)o=t[a].call(this,o);return o}}))}},16612:function(e,t,s){var r=s(77813),a=s(98612),o=s(65776),i=s(13218);e.exports=function(e,t,s){if(!i(s))return!1;var l=typeof t;return!!("number"==l?a(s)&&o(t,s.length):"string"==l&&t in s)&&r(s[t],e)}},70735:function(e,t,s){var r=s(20731),a=s(21078),o=s(67206),i=s(5976),l=s(29246),n=s(10928),c=i((function(e,t){var s=n(t);return l(s)&&(s=void 0),l(e)?r(e,a(t,1,l,!0),o(s,2)):[]}));e.exports=c},63105:function(e,t,s){var r=s(34963),a=s(80760),o=s(67206),i=s(1469);e.exports=function(e,t){return(i(e)?r:a)(e,o(t,3))}},13311:function(e,t,s){var r=s(67740)(s(30998));e.exports=r},30998:function(e,t,s){var r=s(41848),a=s(67206),o=s(40554),i=Math.max;e.exports=function(e,t,s){var l=null==e?0:e.length;if(!l)return-1;var n=null==s?0:o(s);return n<0&&(n=i(l+n,0)),r(e,a(t,3),n)}},59242:function(e,t,s){var r=s(23468)();e.exports=r},67425:function(e,t,s){e.exports=s(26094)},95864:function(e,t,s){var r=s(92822)("differenceBy",s(70735));r.placeholder=s(69306),e.exports=r},40104:function(e,t,s){var r=s(92822)("filter",s(63105));r.placeholder=s(69306),e.exports=r},84063:function(e,t,s){var r=s(92822)("find",s(13311));r.placeholder=s(69306),e.exports=r},8816:function(e,t,s){var r=s(92822)("flow",s(59242));r.placeholder=s(69306),e.exports=r},74423:function(e,t,s){var r=s(92822)("get",s(27361));r.placeholder=s(69306),e.exports=r},26094:function(e,t,s){var r=s(92822)("includes",s(64721));r.placeholder=s(69306),e.exports=r},15886:function(e,t,s){var r=s(92822)("intersection",s(25325));r.placeholder=s(69306),e.exports=r},76187:function(e,t,s){var r=s(92822)("intersectionWith",s(33856));r.placeholder=s(69306),e.exports=r},98980:function(e,t,s){var r=s(92822)("keys",s(3674),s(69087));r.placeholder=s(69306),e.exports=r},4588:function(e,t,s){var r=s(92822)("pick",s(78718));r.placeholder=s(69306),e.exports=r},46898:function(e,t,s){e.exports=s(8816)},39104:function(e,t,s){var r=s(92822)("slice",s(12571));r.placeholder=s(69306),e.exports=r},73918:function(e,t,s){var r=s(92822)("some",s(59704));r.placeholder=s(69306),e.exports=r},66415:function(e,t,s){var r=s(92822)("sortBy",s(89734));r.placeholder=s(69306),e.exports=r},42583:function(e,t,s){var r=s(92822)("toLower",s(7334),s(69087));r.placeholder=s(69306),e.exports=r},77184:function(e,t,s){var r=s(92822)("toUpper",s(51941),s(69087));r.placeholder=s(69306),e.exports=r},86805:function(e,t,s){var r=s(92822)("unionWith",s(2883));r.placeholder=s(69306),e.exports=r},64721:function(e,t,s){var r=s(42118),a=s(98612),o=s(47037),i=s(40554),l=s(52628),n=Math.max;e.exports=function(e,t,s,c){e=a(e)?e:l(e),s=s&&!c?i(s):0;var u=e.length;return s<0&&(s=n(u+s,0)),o(e)?s<=u&&e.indexOf(t,s)>-1:!!u&&r(e,t,s)>-1}},25325:function(e,t,s){var r=s(29932),a=s(47556),o=s(5976),i=s(24387),l=o((function(e){var t=r(e,i);return t.length&&t[0]===e[0]?a(t):[]}));e.exports=l},33856:function(e,t,s){var r=s(29932),a=s(47556),o=s(5976),i=s(24387),l=s(10928),n=o((function(e){var t=l(e),s=r(e,i);return(t="function"==typeof t?t:void 0)&&s.pop(),s.length&&s[0]===e[0]?a(s,void 0,t):[]}));e.exports=n},47037:function(e,t,s){var r=s(44239),a=s(1469),o=s(37005);e.exports=function(e){return"string"==typeof e||!a(e)&&o(e)&&"[object String]"==r(e)}},10928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},78718:function(e,t,s){var r=s(25970),a=s(99021)((function(e,t){return null==e?{}:r(e,t)}));e.exports=a},12571:function(e,t,s){var r=s(14259),a=s(16612),o=s(40554);e.exports=function(e,t,s){var i=null==e?0:e.length;return i?(s&&"number"!=typeof s&&a(e,t,s)?(t=0,s=i):(t=null==t?0:o(t),s=void 0===s?i:o(s)),r(e,t,s)):[]}},59704:function(e,t,s){var r=s(82908),a=s(67206),o=s(5076),i=s(1469),l=s(16612);e.exports=function(e,t,s){var n=i(e)?r:o;return s&&l(e,t,s)&&(t=void 0),n(e,a(t,3))}},89734:function(e,t,s){var r=s(21078),a=s(82689),o=s(5976),i=s(16612),l=o((function(e,t){if(null==e)return[];var s=t.length;return s>1&&i(e,t[0],t[1])?t=[]:s>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),a(e,r(t,1),[])}));e.exports=l},7334:function(e,t,s){var r=s(79833);e.exports=function(e){return r(e).toLowerCase()}},51941:function(e,t,s){var r=s(79833);e.exports=function(e){return r(e).toUpperCase()}},2883:function(e,t,s){var r=s(21078),a=s(5976),o=s(45652),i=s(29246),l=s(10928),n=a((function(e){var t=l(e);return t="function"==typeof t?t:void 0,o(r(e,1,i,!0),void 0,t)}));e.exports=n},52628:function(e,t,s){var r=s(47415),a=s(3674);e.exports=function(e){return null==e?[]:r(e,a(e))}},36740:function(e,t,s){"use strict";s.d(t,{T:function(){return i}});var r=s(85893),a=s(67294);const o=({className:e,...t},s)=>(0,r.jsxs)("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:e,"data-test-id":"icon",ref:s,style:{display:"inline-block"},...t,children:[(0,r.jsx)("path",{d:"M43 23.998a18.996 18.996 0 0 1-21.292 18.863A19.002 19.002 0 0 1 5.554 19.448 18.998 18.998 0 0 1 20.21 5.385c.126-.02.26-.052.386-.073a17.78 17.78 0 0 1 2.476-.291c.301-.01.614-.021.926-.021.312 0 .614.01.916.02.27.011.551.032.822.054.53.052 1.061.108 1.571.208.51.1 1.04.197 1.55.332a19.017 19.017 0 0 1 13.8 14.847c.01.052.02.115.031.167.011.052.02.113.03.165.184 1.059.279 2.13.282 3.205Z",fill:"#253D99"}),(0,r.jsx)("path",{d:"M43 24a19.002 19.002 0 0 1-31.021 14.713A19 19 0 0 1 24 5a18.993 18.993 0 0 1 18.693 15.633c.205 1.111.308 2.238.307 3.368Z",fill:"url(#EmojiGlobe__a)"}),(0,r.jsx)("path",{d:"M25.52 40.442v-.953l.364-.381v-.725l.488-.515v-.812l.456-.477v-1.197l.49-.516v-1.932l-.694-.73h-.814l-.63-.662v-.804L24 29.497v-.591l.413-.434v-.79l.96-1.01v-.604l-.472-.497v-.493l.204-.215h.554l.294-.309h.328l.527-.554h.385l.328.345h.536l.384.404h1.827l1.248 1.312h1.247l.719.756v.862h.893l.601.632h1.142l.882.926v.8l-1.383 1.454v1.169l-1.131 1.19h-.873l-1.036 1.09v.468l-1.44 1.515h-.82l-.622.654h-.91l-.561.59v.411l-.511.537h-.51l-.25.264-.356.373v.606l.267.281V41h-.943l-.401-.558Z",fill:"url(#EmojiGlobe__b)"}),(0,r.jsx)("path",{d:"M25.52 40.442v-.953l.363-.381v-.725l.49-.515v-.812l.455-.479v-1.195l.49-.516v-1.932l-.694-.73h-.814l-.63-.662v-.804L24 29.497v-.591l.414-.434v-.79l.96-1.01v-.604l-.473-.497v-.493l.204-.215h.554l.294-.309h.329l.527-.554h.384l.328.344h.536l.385.405h1.826l1.249 1.312h1.246l.72.756v.862h.893l.601.631h1.142l.881.927v.8l-1.382 1.454v1.169l-1.132 1.19h-.872l-1.037 1.09v.468l-1.44 1.515h-.819l-.622.654h-.91l-.562.59v.411l-.51.537h-.511l-.251.264-.355.373v.606l.268.281V41h-.944l-.401-.558Z",fill:"url(#EmojiGlobe__c)"}),(0,r.jsx)("path",{d:"M31.632 12.24h-.551l-.411-.426v-.61l-.498-.49h-.908l-.584-.588v-.413l-.378-.381h-.572l-.357.36h-.422l-.293-.295h-.66l-.345-.348h-.865l-.27.283v.348l.324.326v.589l-.378.38v.818l-.27.272h-.358l-.378-.381v-.49l-.27-.262h-.432l-.347-.359h-.464l-.422-.435h-.584l-.487-.48v-.226l.552-.556h.9l.433-.435h.338l.291.282h.338l.183.196h.217l.27-.282v-.301l-.27-.272v-.4l.216-.206V7.11l.162-.163h.465l.303.305v.262l.443.446v.227l.314.315h.444l.615.556h.4l.292-.284h.314l.378-.38v-.51l-.237-.241h-.451l-.394-.401h-.735l-.616-.621h-.731l-.281-.295h-.444v-.453l.378-.381.45-.47c-.314-.01-.637-.021-.951-.021-.314 0-.65.011-.963.022-.47.138-.946.251-1.428.34l.37.367v.239l.119.12v.37l.225.261.259.25h.368l.225.228v.345l-.12.12h-.337l-.238-.251h-.302l-.326-.34v-.343l-.237-.239v-.218l-.183-.185-.03.185h-.404l-.183.185.357.36v.522l-.52.513h-1.712l-.645-.649h-1.06l-.518.534h-1.482l-.249-.262a19.024 19.024 0 0 0-3.06 2.004v.752l.432.446v.425l-.378.381v.594l-.337.326v.454l.303.305v.534l-.573.566v.447L11 15.12v.97l.42.424v.72l.52.523v.936l.444.447v.577l.692.697v.751l.627.632.26-.261v-.34l-.358-.36v-.6l-.465-.468v-.212l-.225-.227v-.424l-.25-.262v-.348l.174-.186h.13l.238.24v.327l.13.13v.35l.313.314v.284l.338.34v.24l.518.523h.378v.34l.326.326v.567l.4.402h.53l.442.447h.54l.24.25h1.07l.205-.207h.378l.292.283v.392l.337.35h1.417l.324.326.185.185h.237l.225.226v.34l.249.262h.14l.325.327h.389l.314.326h.45l.239-.25v-.49l-.326-.328h-.464l-.238-.226h-.418l-.26-.25V23.9l.39-.392v-.447l-.314-.316h-1.406l-.249-.262v-.326l.225-.227h.249l.27-.272v-.662l-.184-.186-.096.186h-.293l-.225-.227h-.4l-.27.284v.359l-.28.283v.282l-.304.295h-1.081l-.303-.294h-.207v-.454l-.4-.403v-.305l-.302-.305v-.435l.4-.404v-.414l.324-.326h.412l.399-.403h.962l.26-.251h.39l.323.328h.692l.303-.317h.444l.237.25h.433v.371l.303.305v.468l.465.469h.508l.346-.34v-.545l-.357-.359h-.237l-.357-.349v-.653l.313-.305h.562l.703-.708h.337l.271-.272v-.763l.822-.816h.302l.498-.5v-.447l.324-.317h.746l.41.403h.676l.443-.446v-.226l-.41-.414h-.627l-.38-.382h-.45l-.248-.24v-.326l.216-.226h.758l.347.348h.788l.378.382v.402l.356.349h.866l.497-.5v-.296l-.368-.367Zm-7.09 1.799-.313.316h-.422l-.172-.174v-.12l-.164-.174v-.186l-.186-.188-.057.161-.135-.136v-.119l-.186-.188-.048.188h.105l-.13.13-.357.36v.642l-.4.414h-.368l-.225-.227v-.49l.368-.37v-.227l-.248-.25h-.292l-.338.328h-.4l-.281-.284v-.34l.373-.362h.465l1.027.01.216.22h.65l.356.359h.714l.45.453-.001.254Z",fill:"url(#EmojiGlobe__d)"}),(0,r.jsx)("path",{d:"M27.612 20.41H26.5l-.244-.41h-.248L26 21.219l.45.753h1.005V22h.212l.333-.56v-.383l-.388-.648Z",fill:"url(#EmojiGlobe__e)"}),(0,r.jsx)("path",{d:"M25.73 20.579h-.443l-.255-.247h-.615L24.073 20H22.5l-.308.297v.29l-.192.04.192.187h.592l.224-.217h.533l.213.206h.355l.118-.114h.273l.223.216v.228l-.345.334v.278l.264.255h.409l.277-.27v-.34h.325l.347-.336v-.215l-.27-.26Z",fill:"url(#EmojiGlobe__f)"}),(0,r.jsx)("path",{d:"m22 20.298.323-.298h1.653l.361.333h.646l.268.247h.466l.283.26v.215l-.366.336h-.34v.34l-.293.269h-.428l-.277-.255v-.277l.363-.335v-.227l-.236-.218h-.285l-.125.116h-.372l-.224-.208h-.56l-.235.218H22v-.516Z",fill:"url(#EmojiGlobe__g)"}),(0,r.jsx)("path",{d:"M31.63 11.44h-.551l-.41-.388v-.556l-.498-.447h-.908l-.584-.537v-.38l-.377-.347h-.574l-.357.328h-.422l-.291-.268h-.66l-.346-.319h-.864l-.27.26v.318l.325.298v.537l-.38.348v.746l-.27.248h-.356l-.378-.348v-.448l-.27-.238h-.433l-.345-.328h-.465l-.422-.398h-.584l-.486-.438v-.207l.552-.507h.9l.431-.398h.338l.292.259h.338l.183.179h.216l.27-.26v-.268l-.278-.25v-.367l.216-.19v-.317l.162-.149h.466l.303.278v.24l.443.406v.207l.312.289h.444l.616.507h.4l.292-.259h.314l.378-.348v-.465l-.238-.219h-.443l-.39-.368h-.735l-.615-.566h-.736l-.28-.269h-.444v-.414l.379-.349.28-.268c-.194-.01-.4-.01-.594-.01-.86-.003-1.72.05-2.572.16l.367.338v.218l.12.11v.337l.225.24.26.228h.367l.225.207v.317l-.117.11h-.337l-.239-.23h-.302l-.324-.31v-.316l-.238-.219v-.199h-.616l-.183.17.356.328v.477l-.518.467h-1.716l-.649-.587h-1.058l-.52.487h-1.48l-.249-.238a19.16 19.16 0 0 0-3.063 1.83v.686l.432.408v.387l-.378.348v.537l-.337.298v.414l.302.28v.486l-.572.517v.408l-.412.378v.884l.422.388V16l.518.477v.856l.444.408v.526l.691.637v.686l.628.576.259-.238v-.31l-.357-.328v-.557l-.464-.428v-.189l-.225-.206v-.389l-.249-.238v-.318l.173-.169h.137l.239.219v.299l.13.119v.317l.313.289v.259l.338.31v.218l.52.477h.373v.31l.324.3v.517l.4.369h.53l.443.407h.54l.238.229h1.07l.205-.19h.38l.29.26v.357l.338.318h1.416l.324.299.183.169h.239l.225.207v.31l.248.238h.143l.325.298h.389l.313.299h.45l.238-.229v-.448l-.324-.298h-.465l-.238-.207h-.421l-.26-.228v-.507l.39-.358v-.408l-.315-.288h-1.406l-.25-.243v-.298l.224-.207h.25l.27-.248v-.597h-.573l-.226-.207h-.395l-.27.259v.328l-.282.258v.259l-.302.269h-1.081l-.303-.27h-.205v-.413l-.4-.368v-.279l-.303-.278v-.405l.4-.368v-.378l.325-.298h.41l.4-.368h.963l.257-.233h.39l.326.298h.687l.302-.288h.444l.237.23h.432v.336l.303.279v.428l.465.427h.508l.346-.31v-.498l-.357-.328h-.238l-.357-.317v-.597l.314-.279h.563l.702-.645h.337l.27-.249v-.696l.821-.746h.304l.496-.458v-.407l.325-.288h.746l.41.367h.675l.439-.398v-.207l-.41-.378h-.628l-.378-.347h-.45l-.249-.218v-.3l.216-.207h.768l.346.32h.787l.378.347v.368l.357.318h.865l.497-.457v-.274l-.37-.33Zm-7.087 1.64-.317.29h-.422l-.172-.16v-.11l-.163-.158v-.17h-.216l-.162-.149v-.109h-.13l-.13.12-.356.327v.587l-.4.378h-.367l-.225-.207v-.447l.367-.338v-.207l-.248-.23h-.291l-.338.3h-.4l-.282-.259v-.31l.368-.328h.465l1.027.01.216.199h.649l.356.328h.713l.45.414.008.23Z",fill:"url(#EmojiGlobe__h)"}),(0,r.jsx)("path",{d:"M31.63 11.44h-.551l-.41-.388v-.556l-.498-.447h-.908l-.584-.537v-.38l-.377-.347h-.574l-.357.328h-.422l-.291-.268h-.66l-.346-.319h-.864l-.27.26v.318l.325.298v.537l-.38.348v.746l-.27.248h-.356l-.378-.348v-.448l-.27-.238h-.433l-.345-.328h-.465l-.422-.398h-.584l-.486-.438v-.207l.552-.507h.9l.431-.398h.338l.292.259h.338l.183.179h.216l.27-.26v-.268l-.278-.25v-.367l.216-.19v-.317l.162-.149h.466l.303.278v.24l.443.406v.207l.312.289h.444l.616.507h.4l.292-.259h.314l.378-.348v-.465l-.238-.219h-.443l-.39-.368h-.735l-.615-.566h-.736l-.28-.269h-.444v-.414l.379-.349.28-.268c-.194-.01-.4-.01-.594-.01-.86-.003-1.72.05-2.572.16l.367.338v.218l.12.11v.337l.225.24.26.228h.367l.225.207v.317l-.117.11h-.337l-.239-.23h-.302l-.324-.31v-.316l-.238-.219v-.199h-.616l-.183.17.356.328v.477l-.518.467h-1.716l-.649-.587h-1.058l-.52.487h-1.48l-.249-.238a19.16 19.16 0 0 0-3.063 1.83v.686l.432.408v.387l-.378.348v.537l-.337.298v.414l.302.28v.486l-.572.517v.408l-.412.378v.884l.422.388V16l.518.477v.856l.444.408v.526l.691.637v.686l.628.576.259-.238v-.31l-.357-.328v-.557l-.464-.428v-.189l-.225-.206v-.389l-.249-.238v-.318l.173-.169h.137l.239.219v.299l.13.119v.317l.313.289v.259l.338.31v.218l.52.477h.373v.31l.324.3v.517l.4.369h.53l.443.407h.54l.238.229h1.07l.205-.19h.38l.29.26v.357l.338.318h1.416l.324.299.183.169h.239l.225.207v.31l.248.238h.143l.325.298h.389l.313.299h.45l.238-.229v-.448l-.324-.298h-.465l-.238-.207h-.421l-.26-.228v-.507l.39-.358v-.408l-.315-.288h-1.406l-.25-.243v-.298l.224-.207h.25l.27-.248v-.597h-.573l-.226-.207h-.395l-.27.259v.328l-.282.258v.259l-.302.269h-1.081l-.303-.27h-.205v-.413l-.4-.368v-.279l-.303-.278v-.405l.4-.368v-.378l.325-.298h.41l.4-.368h.963l.257-.233h.39l.326.298h.687l.302-.288h.444l.237.23h.432v.336l.303.279v.428l.465.427h.508l.346-.31v-.498l-.357-.328h-.238l-.357-.317v-.597l.314-.279h.563l.702-.645h.337l.27-.249v-.696l.821-.746h.304l.496-.458v-.407l.325-.288h.746l.41.367h.675l.439-.398v-.207l-.41-.378h-.628l-.378-.347h-.45l-.249-.218v-.3l.216-.207h.768l.346.32h.787l.378.347v.368l.357.318h.865l.497-.457v-.274l-.37-.33Zm-7.087 1.64-.317.29h-.422l-.172-.16v-.11l-.163-.158v-.17h-.216l-.162-.149v-.109h-.13l-.13.12-.356.327v.587l-.4.378h-.367l-.225-.207v-.447l.367-.338v-.207l-.248-.23h-.291l-.338.3h-.4l-.282-.259v-.31l.368-.328h.465l1.027.01.216.199h.649l.356.328h.713l.45.414.008.23Z",fill:"url(#EmojiGlobe__i)"}),(0,r.jsx)("path",{d:"M31.63 11.44h-.551l-.41-.388v-.556l-.498-.447h-.908l-.584-.537v-.38l-.377-.347h-.574l-.357.328h-.422l-.291-.268h-.66l-.346-.319h-.864l-.27.26v.318l.325.298v.537l-.38.348v.746l-.27.248h-.356l-.378-.348v-.448l-.27-.238h-.433l-.345-.328h-.465l-.422-.398h-.584l-.486-.438v-.207l.552-.507h.9l.431-.398h.338l.292.259h.338l.183.179h.216l.27-.26v-.268l-.278-.25v-.367l.216-.19v-.317l.162-.149h.466l.303.278v.24l.443.406v.207l.312.289h.444l.616.507h.4l.292-.259h.314l.378-.348v-.465l-.238-.219h-.443l-.39-.368h-.735l-.615-.566h-.736l-.28-.269h-.444v-.414l.379-.349.28-.268c-.194-.01-.4-.01-.594-.01-.86-.003-1.72.05-2.572.16l.367.338v.218l.12.11v.337l.225.24.26.228h.367l.225.207v.317l-.117.11h-.337l-.239-.23h-.302l-.324-.31v-.316l-.238-.219v-.199h-.616l-.183.17.356.328v.477l-.518.467h-1.716l-.649-.587h-1.058l-.52.487h-1.48l-.249-.238a19.16 19.16 0 0 0-3.063 1.83v.686l.432.408v.387l-.378.348v.537l-.337.298v.414l.302.28v.486l-.572.517v.408l-.412.378v.884l.422.388V16l.518.477v.856l.444.408v.526l.691.637v.686l.628.576.259-.238v-.31l-.357-.328v-.557l-.464-.428v-.189l-.225-.206v-.389l-.249-.238v-.318l.173-.169h.137l.239.219v.299l.13.119v.317l.313.289v.259l.338.31v.218l.52.477h.373v.31l.324.3v.517l.4.369h.53l.443.407h.54l.238.229h1.07l.205-.19h.38l.29.26v.357l.338.318h1.416l.324.299.183.169h.239l.225.207v.31l.248.238h.143l.325.298h.389l.313.299h.45l.238-.229v-.448l-.324-.298h-.465l-.238-.207h-.421l-.26-.228v-.507l.39-.358v-.408l-.315-.288h-1.406l-.25-.243v-.298l.224-.207h.25l.27-.248v-.597h-.573l-.226-.207h-.395l-.27.259v.328l-.282.258v.259l-.302.269h-1.081l-.303-.27h-.205v-.413l-.4-.368v-.279l-.303-.278v-.405l.4-.368v-.378l.325-.298h.41l.4-.368h.963l.257-.233h.39l.326.298h.687l.302-.288h.444l.237.23h.432v.336l.303.279v.428l.465.427h.508l.346-.31v-.498l-.357-.328h-.238l-.357-.317v-.597l.314-.279h.563l.702-.645h.337l.27-.249v-.696l.821-.746h.304l.496-.458v-.407l.325-.288h.746l.41.367h.675l.439-.398v-.207l-.41-.378h-.628l-.378-.347h-.45l-.249-.218v-.3l.216-.207h.768l.346.32h.787l.378.347v.368l.357.318h.865l.497-.457v-.274l-.37-.33Zm-7.087 1.64-.317.29h-.422l-.172-.16v-.11l-.163-.158v-.17h-.216l-.162-.149v-.109h-.13l-.13.12-.356.327v.587l-.4.378h-.367l-.225-.207v-.447l.367-.338v-.207l-.248-.23h-.291l-.338.3h-.4l-.282-.259v-.31l.368-.328h.465l1.027.01.216.199h.649l.356.328h.713l.45.414.008.23Z",fill:"url(#EmojiGlobe__j)"}),(0,r.jsx)("path",{d:"M27.612 20.407H26.5L26.255 20h-.248L26 21.219l.45.753h1.005V22h.21l.335-.56v-.383l-.388-.65Z",fill:"url(#EmojiGlobe__k)"}),(0,r.jsx)("path",{opacity:.5,d:"M43 24a19.001 19.001 0 0 1-37.025 6.01A19.002 19.002 0 0 1 20.21 5.38 18.666 18.666 0 0 1 24 5a18.992 18.992 0 0 1 18.694 15.633c.204 1.111.306 2.238.306 3.368Z",fill:"url(#EmojiGlobe__l)"}),(0,r.jsx)("path",{opacity:.5,d:"M43 24a19.001 19.001 0 0 1-37.025 6.01A19.002 19.002 0 0 1 20.21 5.38 18.666 18.666 0 0 1 24 5a18.992 18.992 0 0 1 18.694 15.633c.204 1.111.306 2.238.306 3.368Z",fill:"url(#EmojiGlobe__m)"}),(0,r.jsx)("path",{opacity:.2,d:"M43 24a19.001 19.001 0 0 1-37.025 6.01A19.002 19.002 0 0 1 20.21 5.38 18.666 18.666 0 0 1 24 5a18.992 18.992 0 0 1 18.694 15.633c.204 1.111.306 2.238.306 3.368Z",fill:"url(#EmojiGlobe__n)"}),(0,r.jsx)("path",{opacity:.5,d:"M43 24a19.001 19.001 0 0 1-37.025 6.01A19.002 19.002 0 0 1 20.21 5.38 18.666 18.666 0 0 1 24 5a18.992 18.992 0 0 1 18.694 15.633c.204 1.111.306 2.238.306 3.368Z",fill:"url(#EmojiGlobe__o)"}),(0,r.jsx)("path",{opacity:.5,d:"M43 24a19.001 19.001 0 0 1-37.025 6.01A19.002 19.002 0 0 1 20.21 5.38 18.666 18.666 0 0 1 24 5a18.992 18.992 0 0 1 18.694 15.633c.204 1.111.306 2.238.306 3.368Z",fill:"url(#EmojiGlobe__p)"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__a",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(23.3211 0 0 23.322 20.474 20.79)",children:[(0,r.jsx)("stop",{stopColor:"#55A1DB"}),(0,r.jsx)("stop",{offset:.575,stopColor:"#2D5BC4"}),(0,r.jsx)("stop",{offset:.696,stopColor:"#294CAF"}),(0,r.jsx)("stop",{offset:.802,stopColor:"#253D99"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__b",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(14.4337 0 0 15.1735 24.155 24.58)",children:[(0,r.jsx)("stop",{stopColor:"#89C421"}),(0,r.jsx)("stop",{offset:1,stopColor:"#639925"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__c",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(12.8246 0 0 13.4809 26.08 24.793)",children:[(0,r.jsx)("stop",{stopColor:"#8DE019"}),(0,r.jsx)("stop",{offset:.105,stopColor:"#92E01B"}),(0,r.jsx)("stop",{offset:.228,stopColor:"#A0E122"}),(0,r.jsx)("stop",{offset:.359,stopColor:"#B7E22D"}),(0,r.jsx)("stop",{offset:.495,stopColor:"#D8E43D"}),(0,r.jsx)("stop",{offset:.536,stopColor:"#E3E542"}),(0,r.jsx)("stop",{offset:.922,stopColor:"#E7982B"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__d",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(397.799 331.256) scale(389.886)",children:[(0,r.jsx)("stop",{stopColor:"#89C421"}),(0,r.jsx)("stop",{offset:1,stopColor:"#639925"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__e",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(62.838 51.072) scale(37.132)",children:[(0,r.jsx)("stop",{stopColor:"#89C421"}),(0,r.jsx)("stop",{offset:1,stopColor:"#639925"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__f",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(74.264 0 0 37.132 95.676 51.072)",children:[(0,r.jsx)("stop",{stopColor:"#89C421"}),(0,r.jsx)("stop",{offset:1,stopColor:"#639925"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__g",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(12.3551 0 0 11.389 17.723 15.817)",children:[(0,r.jsx)("stop",{stopColor:"#CF0"}),(0,r.jsx)("stop",{offset:.564,stopColor:"#A6E520"}),(0,r.jsx)("stop",{offset:1,stopColor:"#8DE019"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__h",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(20.351 0 0 18.7205 25.904 8.936)",children:[(0,r.jsx)("stop",{stopColor:"#8DE019"}),(0,r.jsx)("stop",{offset:.454,stopColor:"#B6D81A"}),(0,r.jsx)("stop",{offset:1,stopColor:"#EDCE1C"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__i",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(10.4297 0 0 9.59411 12.29 17.885)",children:[(0,r.jsx)("stop",{stopColor:"#FDE169"}),(0,r.jsx)("stop",{offset:1,stopColor:"#FDE169",stopOpacity:0})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__j",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(8.94938 0 0 8.23239 28.986 5.636)",children:[(0,r.jsx)("stop",{offset:.006,stopColor:"#F0B335"}),(0,r.jsx)("stop",{offset:1,stopColor:"#EFAF30",stopOpacity:0})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__k",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(14.1688 0 0 23.7637 15.692 9.549)",children:[(0,r.jsx)("stop",{stopColor:"#CF0"}),(0,r.jsx)("stop",{offset:.564,stopColor:"#A6E520"}),(0,r.jsx)("stop",{offset:1,stopColor:"#8DE019"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__l",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(37.7011 0 0 37.7028 10.916 10.451)",children:[(0,r.jsx)("stop",{offset:.513,stopColor:"#485463",stopOpacity:0}),(0,r.jsx)("stop",{offset:.833,stopColor:"#293648",stopOpacity:.714}),(0,r.jsx)("stop",{offset:1,stopColor:"#1D2A3D"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__m",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(37.7011 0 0 37.7028 9.455 12.909)",children:[(0,r.jsx)("stop",{offset:.806,stopColor:"#485463",stopOpacity:0}),(0,r.jsx)("stop",{offset:.842,stopColor:"#384555",stopOpacity:.363}),(0,r.jsx)("stop",{offset:.887,stopColor:"#293648",stopOpacity:.715}),(0,r.jsx)("stop",{offset:.931,stopColor:"#202D40",stopOpacity:.928}),(0,r.jsx)("stop",{offset:.972,stopColor:"#1D2A3D"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__n",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(34.0367 0 0 34.0382 32.17 40.295)",children:[(0,r.jsx)("stop",{offset:.752,stopColor:"#fff",stopOpacity:0}),(0,r.jsx)("stop",{offset:.774,stopColor:"#fff",stopOpacity:.031}),(0,r.jsx)("stop",{offset:.806,stopColor:"#fff",stopOpacity:.117}),(0,r.jsx)("stop",{offset:.847,stopColor:"#fff",stopOpacity:.257}),(0,r.jsx)("stop",{offset:.893,stopColor:"#fff",stopOpacity:.452}),(0,r.jsx)("stop",{offset:.945,stopColor:"#fff",stopOpacity:.701}),(0,r.jsx)("stop",{offset:1,stopColor:"#fff"})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__o",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(19.0736 0 0 19.0745 19.409 20.25)",children:[(0,r.jsx)("stop",{stopColor:"#fff",stopOpacity:.8}),(0,r.jsx)("stop",{offset:.103,stopColor:"#fff",stopOpacity:.716}),(0,r.jsx)("stop",{offset:.317,stopColor:"#fff",stopOpacity:.5}),(0,r.jsx)("stop",{offset:.622,stopColor:"#fff",stopOpacity:.157}),(0,r.jsx)("stop",{offset:.753,stopColor:"#fff",stopOpacity:0})]}),(0,r.jsxs)("radialGradient",{id:"EmojiGlobe__p",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(37.7011 0 0 37.7028 15.008 29.548)",children:[(0,r.jsx)("stop",{offset:.613,stopColor:"#485463",stopOpacity:0}),(0,r.jsx)("stop",{offset:.629,stopColor:"#465261",stopOpacity:.05}),(0,r.jsx)("stop",{offset:.874,stopColor:"#283547",stopOpacity:.736}),(0,r.jsx)("stop",{offset:1,stopColor:"#1D2A3D"})]})]})]}),i=(0,a.memo)((0,a.forwardRef)(o));i.displayName="EmojiGlobe"},80871:function(e,t,s){"use strict";s.d(t,{i:function(){return i}});var r=s(85893),a=s(67294);const o=({className:e,...t},s)=>(0,r.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:e,"data-test-id":"icon",ref:s,style:{display:"inline-block"},...t,children:(0,r.jsx)("path",{d:"M9.929 14a.885.885 0 0 0 .643-.266l5.09-4.985c.225-.227.331-.46.338-.746 0-.286-.106-.525-.338-.745l-5.09-4.992A.896.896 0 0 0 9.93 2 .923.923 0 0 0 9 2.925c0 .253.106.493.292.679l4.512 4.4-4.512 4.392a.961.961 0 0 0-.292.679c0 .512.411.925.929.925Z"})}),i=(0,a.memo)((0,a.forwardRef)(o));i.displayName="Icon16ControlsDisclosure"},97675:function(e,t,s){"use strict";s.d(t,{d:function(){return i}});var r=s(85893),a=s(67294);const o=({className:e,...t},s)=>(0,r.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:e,"data-test-id":"icon",ref:s,style:{display:"inline-block"},...t,children:[(0,r.jsx)("path",{d:"M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3H3Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 10v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6H3Zm12 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z"})]}),i=(0,a.memo)((0,a.forwardRef)(o));i.displayName="Icon24CommonCard"},69430:function(e,t,s){"use strict";s.d(t,{C:function(){return i}});var r=s(85893),a=s(67294);const o=({className:e,...t},s)=>(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:e,"data-test-id":"icon",ref:s,style:{display:"inline-block"},...t,children:(0,r.jsx)("path",{d:"M18.72 18H5.28C4.483 18 4 17.569 4 16.936c0-.776.672-1.483 1.331-2.177.089-.093.177-.185.263-.278.568-.607.712-1.856.78-2.868.06-3.378.924-5.71 3.18-6.554C9.876 3.915 10.749 3 12.004 3c1.247 0 2.129.915 2.442 2.059 2.264.844 3.12 3.176 3.188 6.554.06 1.012.212 2.26.772 2.868l.235.247c.673.703 1.359 1.42 1.359 2.208 0 .633-.475 1.064-1.28 1.064ZM12 21c-1.672 0-2.882-.91-3-2h6c-.128 1.09-1.338 2-3 2Z"})}),i=(0,a.memo)((0,a.forwardRef)(o));i.displayName="Icon24ControlsBell"},66028:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(85893),a=s(67294);const o=({className:e,...t},s)=>(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:e,"data-test-id":"icon",ref:s,style:{display:"inline-block"},...t,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14.122 14.105-.653.462a5.376 5.376 0 0 1-3.118.996C7.394 15.563 5 13.164 5 10.28 5 7.4 7.394 5 10.351 5s5.351 2.399 5.351 5.281a5.209 5.209 0 0 1-1.096 3.194l-.484.63Zm6.572 5.058-4.502-4.47a7.208 7.208 0 0 0 1.51-4.412C17.702 6.276 14.395 3 10.351 3 6.307 3 3 6.276 3 10.281c0 4.006 3.307 7.282 7.351 7.282a7.375 7.375 0 0 0 4.273-1.364l4.531 4.488c.21.209.488.313.784.313.621 0 1.061-.473 1.061-1.08 0-.284-.096-.549-.306-.757Z"})}),i=(0,a.memo)((0,a.forwardRef)(o));i.displayName="Icon24ControlsSearch"},13209:function(e,t,s){"use strict";s.d(t,{M:function(){return u}});var r=s(85893),a=s(47166),o=s(28225),i=s(5393),l=s(66028),n=s(67294);const c=a.bind({wrapper:"s__wxWhlvL1vtDq7uJuVNFt",input:"s__L0gvaAIls54kLKmrzFdF","search-icon":"s__VlKAyrvfwT5L4TxZIfVU","button-container":"s__pHCjwkfMXMU4XoBmxdEt"}),u=e=>{const{t:t}=(0,o.useTranslation)("uiKit"),{className:s,innerClassname:a,placeholder:u=t("search_input.search"),forwardedRef:d,id:p,value:h,title:v,showClearButton:g=!0,onChange:f,...m}=e,{inputRef:C,onInputChange:x,onInputClear:y}=(e=>{const{onChange:t,forwardedRef:s,onClear:r}=e,a=(0,n.useRef)(null),o=s||a,i=(0,n.useCallback)((e=>{t&&t(e.target.value)}),[t]),l=(0,n.useCallback)((()=>{r?r():t&&t(""),o.current?.focus()}),[t,r,o]);return{inputRef:o,onInputChange:i,onInputClear:l}})(e);return(0,r.jsxs)("span",{className:c("wrapper",s),"data-test-id":"search-input",children:[(0,r.jsx)("div",{className:c("search-icon"),children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)("input",{...m,id:p,value:h,ref:C,placeholder:u,onChange:x,className:c("input",a)}),g&&h&&(0,r.jsx)("div",{className:c("button-container"),children:(0,r.jsx)(i.P,{size:"small",onClick:y})})]})}},45594:function(e,t,s){"use strict";s.d(t,{W:function(){return n}});var r=s(85893),a=s(67294),o=s(94184),i=s(28225),l=JSON.parse('["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","EU","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"]');const n=(0,a.memo)((({countryCode:e,className:t})=>{const{t:n}=(0,i.useTranslation)("uiKit"),c=function(e){const[t,r]=(0,a.useState)(null),o=e.toUpperCase(),i=(0,a.useCallback)((async()=>{const e=await s(23109)(`./${o}.svg`);r(e.default)}),[o]);return(0,a.useEffect)((()=>{var e;e=o,l.indexOf(e)>=0&&i()}),[i,o]),t}(e);return c?(0,r.jsx)("img",{src:c,alt:n("flag.description",{country:e}),className:o("s__XRs7wLF06BTwI6fxqhPA",t)}):null}));n.displayName="Flag"}}]);
//# sourceMappingURL=https://private-static.prod.k8s.int.avs.io/selene-source-maps/market_change_offer.1d19ed9555fefd8a3d31.min.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               nt_tips":"Полезные и актуальные советы","responsiveness":"Отзывчивость и желание помочь","solution_speed":"Скорость решения","unclear_explanation":"Не всё понятно объяснили","want_do_less":"Хочу меньше делать самостоятельно"},"your_variant":"Ваш вариант"},"service_currency":{"currencies":{"aud":"Австралийский доллар","azn":"Азербайджанский манат","brl":"Бразильский реал","byn":"Белорусский рубль","cad":"Канадский доллар","chf":"Швейцарский франк","cny":"Китайский юань","eur":"Евро","gbp":"Фунт стерлингов","gel":"Грузинский лари","idr":"Индонезийская рупия","ils":"Новый израильский шекель","inr":"Индийская рупия","kes":"Кенийский шиллинг","kgs":"Кыргызский сом","kpw":"Северокорейская вона","krw":"Южнокорейская вона","kzt":"Казахстанский тенге","mdl":"Молдавский лей","myr":"Малайзийский ринггит","pln":"Польский злотый","ron":"Румынский лей","rub":"Российский рубль","thb":"Тайский бат","tjs":"Таджикский сомони","try":"Турецкая лира","twd":"Новый тайваньский доллар","tzs":"Танзанийский шиллинг","uah":"Украинская гривна","usd":"Американский доллар","uzs":"Узбекский сум","vnd":"Вьетнамский донг","zar":"Южноафриканский рэнд"},"currenciesPrepositional":{"aud":"Австралийских долларах","azn":"Азербайджанских манатах","brl":"Бразильских реалов","byn":"Белорусских рублях","cad":"Канадских долларах","chf":"Швейцарских франках","cny":"Китайских юанях","eur":"Евро","gbp":"Фунтах стерлингов","gel":"Грузинских лари","idr":"Индонезийских рупиях","ils":"Новых израильских шекелях","inr":"Индийских рупиях","kes":"Кенийских шиллингах","kgs":"Кыргызских сомах","kpw":"Северокорейских вонах","krw":"Южнокорейских вонах","kzt":"Казахстанских тенге","mdl":"Молдавских лей","myr":"Малайзийских ринггитах","pln":"Польских злотых","ron":"Румынских лей","rub":"Российских рублях","thb":"Тайских батах","tjs":"Таджикских сомони","try":"Турецких лирах","twd":"Новых тайваньских долларах","tzs":"Танзанийских шиллингах","uah":"Украинских гривнах","usd":"Американских долларах","uzs":"Узбекских сумах","vnd":"Вьетнамских донгах","zar":"Южноафриканских рэндах"},"currencyChangeConfirm":{"cancel":"Отмена","confirm":"Обновить","description":"Изменения вступят в силу после обновления результатов","title":"Обновите поиск"}},"service_direct_flights":{"button":{"rollUp":"Свернуть","showAll":"Показать все"},"title":"Прямые рейсы"},"service_dynamic_filters":{"popup":{"done":"Готово","reset":"Сбросить","submit":"Показать результаты"},"range":{"number":{"tag":"{{from}} – {{to}}"},"price":{"tag":"От {{from}} до {{to}}"}}},"service_email_subscription_form":{"error":{"common":"Что-то пошло не так. Попробуйте ещё раз","incorrectEmail":"Похоже, почта написана неверно"}},"service_explore":{"filters":{"direct":{"label":"Без пересадок"},"open":{"label":"Только открытые"},"withBaggage":{"label":"Только с багажом"},"withoutVisaTransfers":{"label":"Без пересадок с визой"}}},"service_explore_direct_flights":{"back":"Обратно","chooseDays":"Выбрать даты","everyDayFlights":"Летают каждый день","hideAirlines":"Скрыть","info":"Выберите даты поездки, чтобы узнать, остались ли билеты на нужный рейс","noDirectFlights":"Нет прямых рейсов","noDirectFlightsStub":"На направление <b>{{ origin }} — {{ destination }}</b> нет прямых рейсов туда и обратно","noDirectionDirectFlightsStub":"На направление <b>{{ origin }} — {{ destination }}</b> нет прямых рейсов {{ emptyDirection }}, но есть прямые {{ fullDirection }}. <a>Проверить</a>","showMoreAirlines":"Ещё {{ count }} [[{{ count }}|авиакомпания|авиакомпании|авиакомпаний]]","there":"Туда","totalFlights":"{{ flights }} [[{{ flights }}|рейс|рейса|рейсов]] в день"},"service_explore_tabbar":{"business":"Для бизнеса","business_compact":"Бизнес","guides":"Короче","hotels":"Отели","profile":"Профиль","subscription":"Подписки","tickets":"Авиабилеты"},"service_faq":{"loginSubtitle":"Доступ к поддержке и подпискам на цены","loginTitle":"Войдите в профиль","snackbarContent":"Скопировали техническую информацию"},"service_feedback_form":{"attachments":{"messages":{"added":"[[{{count}}|Фаил|Файлы|Файлы|Файлы]] {{files}} [[{{count}}|прикреплён|прикреплены|прикреплены|прикреплены]]","removed":"Файл {{fileName}} откреплён","sizeExceeded":"Размер файлов слишком большой. \n Максимум — 20мб на все файлы"}},"request":{"failed":"Что-то пошло не так. Проверьте интернет и попробуйте ёще раз"},"subject":"Вопрос с сайта {{name}}","validationErrors":{"email":{"invalid":"Похоже, почта написана неверно","required":"Оставьте почту, чтобы связаться c поддержкой"},"name":{"required":"Без имени отправить запрос не получится"},"question":{"required":"Расскажите о проблеме — так мы быстрее во всём разберёмся"}}},"service_filters":{"agents":{"searchPlaceholder":"Название агентства","title":"Агентства"},"airlines":{"searchPlaceholder":"Авиакомпания, код ИАТА","title":"Авиакомпании"},"airports":{"sameArrivalDeparture":"Вылет и прилёт в тот же аэропорт","title":"Аэропорты {{place}}"},"alliances":{"title":"Альянсы"},"baggage":{"baggageIncluded":"Багаж включён","title":"Багаж"},"convenience":{"title":"Если комфорт важнее","withoutAirportChange":{"title":"Без смены аэропорта"},"withoutNightTransfers":{"title":"Без ночных пересадок"},"withoutRestrictions":{"dialog":{"buttonText":"Хорошо","text":"Это значит, что на пересадке у туристов с паспортом РФ не должно быть проблем. Но правила въезда иногда меняются — лучше самостоятельно проверить их перед вылетом","title":"Покажем билеты, которые подходят туристам из России"},"title":"Без пересадок в странах, закрытых для туристов"},"withoutVirtualInterlines":{"title":"Без раздельных бронирований"},"withoutVirtualInterlinesRebranding":{"title":"Без повторной регистрации"},"withoutVisa":{"dialog":{"buttonText":"Хорошо","text":"Мы покажем рейсы с безвизовыми пересадками, но правила въезда могут поменяться — проверьте их самостоятельно перед поездкой","title":"Лучше перепроверить визовые требования перед полётом"},"title":"Без пересадок с визой"}},"departureArrivalTime":{"arrival":"Прибытие","arrivalDate":"Дата прибытия","departure":"Отправление","roundTripSegmentPrefix":"Обратно","segmentPrefix":"Вылет"},"groups":{"airlines":{"chipTitle":"Авиакомпании","popupTitle":"Авиакомпании"},"airports":{"chipTitle":"Аэропорты","popupTitle":"Аэропорты"},"baggage":{"chipTitle":"Багаж","popupTitle":"Багаж"},"modal":{"button":{"notFound":"Нет подходящих билетов","pricePrefix":"от","show":"Показать билеты"},"reset":"Сбросить","submit":"Готово"},"more":{"chipTitle":"Ещё","popupTitle":"Ещё фильтры"},"relaxDialog":{"resetButton":"Сбросить фильтры","returnButton":"Вернуться","subTitle":"Ослабьте фильтры или сбросьте их","title":"Подходящих билетов нет"},"time":{"chipTitle":"Время","popupTitle":"Время"},"transfers":{"chipTitle":"Пересадки","popupTitle":"Пересадки"}},"noFlights":"Нет рейсов","paymentMethods":{"title":"Способы оплаты","types":{"applepay":"Apple Pay","bank":"Через банк","card":"По карте","cash":"Наличными","contact":"Контакт","cyberplat":"КиберПлат","elexnet":"Элекснет","euroset":"Евросеть","exp":"Курьером","googlepay":"Google Pay","internetbank":"Интернет-банк","monetaru":"Moneta.ru","moneywall":"Moneywall","paylate":"Paylate","paypal":"PayPal","qiwi":"Qiwi кошелёк","revoplus":"Ревоплюс","samsungpay":"Samsung Pay","svyaznoy":"Связной","terminal":"В терминале","unionpay":"China UnionPay","uzcard":"Uzcard","web_money":"WebMoney","yandex_money":"Яндекс.Деньги"}},"price":{"title":"Стоимость","total":"Всего","upTo":"До <price />"},"savedFiltersTooltip":"Перенесли фильтры из вашего предыдущего поиска {{origin}} – {{destination}}","sorting":{"title":"Сортировка"},"transfersAirports":{"searchPlaceholder":"Аэропорт, город, страна, код ИАТА","title":"Аэропорты пересадок"},"transfersCount":{"nonZero":"{{stopsCount}} [[{{stopsCount}}|пересадка|пересадки|пересадок]]","title":"Пересадки","zero":"Без пересадок"},"transfersDuration":{"fromTo":"От {{min}}ч до {{max}}ч","title":"Длительность пересадок","upTo":"До {{max}}ч"},"tripDuration":{"description":"Всего","tag":"До {{duration}}ч","title":"Время в пути"},"withoutInterlines":{"dialog":{"buttonText":"Хорошо","text":"Скроем билеты, где участвуют несколько авиакомпаний"},"title":"Только одна авиакомпания в билете"},"withoutLowcosts":{"title":"Без лоукостеров"}},"service_guides":{"openMap":"Показать на карте","pinImageAlt":"Изображение для {{ place }}","placesListCount":"Список мест ({{ count }})","placesOnMap":"Места на карте","placesOnMobileMap":"Ещё места на карте","showMore":"Показать ещё"},"service_guides_login_dialog":{"subtitle":"Чтобы получить доступ ко всем местам. Если у вас пока нет профиля, его можно создать — это быстро и легко","title":"Войдите в профиль"},"service_hotel":{"expiredDialogDescription":"Цены на номера иногда меняются в течение дня. Обновите поиск, чтобы увидеть точные цены","goBack":"Назад","hotelsSearch":"Новый поиск","urlCopied":"Ссылка скопирована"},"service_hotels_map":{"emptyResultsNotification":"В этом районе подходящих отелей нет, попробуйте поискать поблизости"},"service_hotels_search":{"errorNotificationMessage":"Не получилось загрузить. Проверьте интернет и попробуйте ещё раз"},"service_hotels_search_expiring":{"description":"Номера иногда заканчиваются, а цены — меняются. Обновите поиск, чтобы увидеть только актуальную информацию"},"service_hotels_search_page":{"cityNamePlaceholder":"Ищем отели…","goBack":"Назад","hotelsList":"Список отелей","hotelsSearch":"Поиск отелей","pageSwitcher":{"list":"Списком","map":"На карте"}},"service_in_modal_purchase":{"screenTitle":{"auth":"Авторизация","payment":"Оплата","threeDs":"Подтверждение оплаты"}},"service_market_change_offer":{"popup":{"subtitle":{"withForeignTrace":"Мы настроим под неё поиск билетов","withRuTrace":"Мы настроим поиск билетов под доступные в ней способы оплаты"},"title":"Выберите страну"},"redirect":{"fallback":"Мы настроили поиск для выбранной вами страны. Её можно изменить в профиле","message":"Мы настроили поиск для {{country}}. Страну можно изменить в профиле"}},"service_more_landing":{"buyAsGift":{"pricePerYear":"за <price /> в год","pricePerYearWithDiscount":"за <originalPrice/> <price/> в год"},"dialogEntry":{"typing":"печатает"},"generalError":{"message":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение и обновите страницу или попробуйте позже","retry":"Обновить","title":"Что-то пошло не так"},"notification":{"buttonLabel":"Купить полную версию","message":"Пробный период закончился. Накопленный кэшбэк можно увидеть в полной версии"}},"service_no_auth_purchase":{"activation":{"description":"Почти готово! Войдите, чтобы начать пользоваться <bold>$subscription_name:</bold>","title":"Нужно активировать"},"authorized":{"button":"Сменить аккаунт","loggedVia":"Вы вошли через"},"socials":{"apple":"Apple","facebook":"Фейсбук","google":"Google","mail_ru":"Mail.ru","ok":"Одноклассники","twitter":"Твиттер","vk":"ВКонтакте","yandex":"Яндекс"},"unauthorized":{"button":"Авторизоваться","title":"Какой аккаунт будет премиальным?"}},"service_order_actions":{"failedToPrint":"При печати заказа произошла ошибка","failedToSendTicket":"При отправке заказа произошла ошибка","ticketSuccesfullySend":"Отправили заказ на {{email}}","tooltip":{"download":"Скачать","print":"Распечатать","sendEmail":"Получить заказ на почту {{email}}"}},"service_order_details":{"detailedPricing":{"expandedTitle":"Стоимость","subtitle":"За билеты, доп. багаж и все платные услуги"},"passengersCount":"{{count}} [[{{count}}|пассажир|пассажира|пассажиров]]"},"service_payment_methods":{"save":"Запомнили ваш выбор","saveAndUpdate":"Запомнили ваш выбор. В билетах теперь показываем какой картой можно платить "},"service_pinned_segments":{"description":{"link":"Отменить выбор и показать все билеты","text":"Показаны билеты только с выбранными вылетами."},"notification":{"button":"Сбросить","description":"Показаны билеты только с [[{{count}}|выбранным перелётом|выбранными перелётами|выбранными перелётами]]: {{route}}"},"title":{"multipleSegments":"Выбрано {{segmentsAmount}} [[{{segmentsAmount}}|вылет|вылета|вылетов]]","singleSegment":"Вылет в {{cityName}} {{formattedDate}}"}},"service_premium_autorenew_cancellation":{"button":"На главную $application_name","failure":{"description":"Убедитесь, что вы вошли в нужный аккаунт. Если всё верно, зайдите в письмо позже и попробуйте отменить ещё раз","title":"Не смогли отменить автопродление"},"processing":"Отмена автопродления","success":{"description":"Хорошая новость: кэшбэк можно вывести, даже когда подписка закончится. Плохая: если вы не вернётесь, мы будем скучать","title":"Вы отменили автоматическое продление"}},"service_premium_entry_points":{"cashbackPromo":{"buttonLabel":"Как получить","description":"На отели, трансфер и развлечения","title":"Мой кэшбэк"},"premiumExpiredNotification":{"actionText":"Что, уже?!","text":"Ваш год с Ещё - всё"}},"service_premium_faq":{"conditionsLink":"<a>Условия использования сервиса</a> <name>$subscription_name</name>","defaultModalTitle":"Вопросы и ответы"},"service_premium_google_pay":{"button":"Купить с <icon /> Pay"},"service_premium_offers":{"offersSelectionTitle":"$subscription_name"},"service_premium_payment":{"conditionsAgreement":"Нажимая на кнопку, вы соглашаетесь <1>с длинным юридическим текстом</1>, в котором все подробно описано","successScreen":{"close":"Начать пользоваться","default":{"description":"И с этой секунды вам доступен кэшбэк от партнёров, секретный контент и круглосуточная поддержка от наших тревел-консультантов","title":"Ура! Теперь у вас есть<br />$subscription_name"},"trial":{"description":"И с этой секунды вам доступен кэшбэк от партнёров, секретный контент и возможность задать нашим тревел-консультантам один вопрос","title":"Ура! Теперь у вас есть<br />{{ daysAmount }} [[{{ daysAmount }}|день|дня|дней]] на то, чтобы<br /> распробовать $subscription_name_short"}},"summary":{"finalPrice":"К оплате","offerDiscount":"Скидка на первый год","promocodeDiscount":"Скидка по промокоду","subscriptionCaption":"Следующее списание {{date}}, отменить его можно в любой момент","tooltipText":"Скидка дествует на первое списание, далее — {{price}} в год. <rules>Правила акции</rules>","yearSubscription":"Стоимость за год","yearSubscriptionDefault":"оплата за один год"}},"service_premium_paywall":{"subscriptionExpired":{"fallbackPaywall":{"description":"Чтобы получить доступ к кэшбэку, подборкам крутейших локаций и советам от местных ещё на год","primaryButton":"Купить $subscription_name_short","title":"Продлите подписку на $subscription_name"}}},"service_premium_promocode":{"continueUsingOriginalPrice":{"title":"Продолжить за <price/>"},"freePromocode":{"promocode":"По промокоду {{promocode}}","resetPromocode":"Отменить промокод","title":"Ура! Кое-кто получил $subscription_name на год совершенно бесплатно"},"paymentError":{"cancel":"Ввести другой промокод","description":"Возможно, в него закралась ошибка или он устарел.\nПопробуйте ввести другой или купите $subscription_name_short <bold>без промокода за <price /></bold>","resume":{"subTitle":"За <price />","title":"Купить без промокода"},"title":"Промокод не сработал"},"verifiedPromocodeTitle":"Промокод {{promocode}}"},"service_premium_three_ds":{"changeCardCaption":"Если вы не смогли ввести код, попробуйте <button>оплатить другой картой</button>","passwordRequirementTitle":"Введите код для завершения оплаты ","supportFooterMessage":{"AS":"Если с оплатой что-то не так, напишите нам на <email>help@aviasales.ru</email> — поможем со всем разобраться","WA":"Если с оплатой что-то не так, напишите нам на <email>support@wayaway.io</email> — поможем со всем разобраться"}},"service_premium_trial":{"lastChanceModal":{"cancelButtonText":"Всё-таки отменяю списание","continueButtonText":"Уговорили, я остаюсь","description":"Пробная версия $subscription_name_short доступна до <date/>.<br /> А потом вжух — и магия исчезнет.","features":["Без кэшбэка на тревел-услуги, который магическим образом превращается в настоящие деньги","Без тревел-консультантов, которые знают больше, чем Google","Без рекомендаций от местных и прогулок по тайным маршрутам"],"title":"Жизнь не будет прежней"},"payment":{"buy":"Купить $subscription_name_short","buyFull":"Купить полную версию","offerCardPrimaryText":{"AS":"<price/> за год","WA":"меньше чем <price/> в месяц"},"offerCardSecondaryText":"стоимость за год: <price/>"},"segmentedControl":{"full":"Полная версия","trial":"Пробный период"},"storekitModal":{"button":"Хорошо","steps":["Зайдите в раздел настроек Apple ID","Перейдите в раздел «Подписки»","Найдите подписку на $subscription_name","Нажмите кнопку «Renew»"],"title":"Купить полную версию можно в настройках телефона на iOS"},"trialExpiredInformer":{"buttonText":"Купить полную версию","howItWorksText":"Как это работает?"},"trial_cashback_withdraw":{"description":{"default":{"AS":"Чтобы отправить деньги себе, оформите годовую подписку на $subscription_name_short за <price/>","WA":"Чтобы отправить деньги себе на счёт, оформите годовую подписку на сервис $subscription_name за <price/>"},"trialEnded":{"cashbackConfirmed":{"AS":"Вы накопили кэшбэк, но пробный период уже закончился. Чтобы отправить деньги себе, оформите годовую подписку на $subscription_name_short за <price/>","WA":"Вы накопили кэшбэк, но пробный период уже закончился. Чтобы отправить деньги себе, оформите годовую подписку на сервис $subscription_name за <price/>"},"cashbackNotConfirmed":{"AS":"Чтобы снова получить доступ к кэшбэку и круглосуточной поддержке, оформите годовую подписку на $subscription_name_short за <price/>","WA":"Чтобы снова получить доступ к кэшбэку и круглосуточной поддержке, оформите годовую подписку на $subscription_name за <price/>"}}},"title":{"default":"Вывести кэшбэк можно только в полной версии","trialEnded":{"cashbackConfirmed":"<price/> можно вывести в полной версии $subscription_name_short","cashbackNotConfirmed":"Пробный период закончился"}}},"withdraw_promo_banner":{"description":{"cashbackConfirmed":"Ваш кэшбэк ждёт встречи с вами","cashbackNotConfirmed":"Как отправить их себе"},"title":{"cashbackConfirmed":"Вывести <balance/>","cashbackNotConfirmed":"<balance/> кэшбэка в пути"}}},"service_premium_ui":{"customLoginFormTitle":{"default":"Какой аккаунт будет премиальным?","expired":"Авторизуйтесь, чтобы отменить автопродление","freeTier":"Авторизуйтесь, чтобы получать кэшбэк"}},"service_price_chart":{"backToDateSelection":"Вернуться к выбору даты","exactPrice":"за {{ price }}","priceChart":"График цен","priceChartWithControl":"График цен <control></control>","selectButtonText":{"knownPrice":"Посмотреть билеты на {{ date }}","unknownPrice":"Выбрать {{ date }}"},"skipDepartDate":"Пропустить выбор даты «туда»","skipReturnDate":"Пропустить выбор даты «обратно»"},"service_purchase_form":{"emailForm":{"placeholder":"Почта","requiredError":"Без почты никак :(","title":"Нам нужна ваша почта, чтобы прислать электронный чек","wrongFormatError":"Не похоже на почту"},"nextBillCanBeCancelled":"Следующее списание {{date}}, отменить его можно в любой момент","promoCode":{"activeTitle":"Промокод","caption":{"default":"Скидка по промокоду не суммируется с другими скидками","trial":"Промокод действует на оплату полной версии Ещё и не суммируется с другими скидками. Деньги спишутся {{date}}"},"defaultTitle":"У меня есть промокод","submit":"Применить","vierifiedTitle":"Промокод {{promocode}}"},"promoCodeError":{"expired":"Промокод утратил свою силу","failed":"Не удалось применить промокод","notExist":"Такого промокода нет :(","required":"Введите промокод"},"summary":{"finalPrice":"К оплате","offerDiscount":"Скидка на первый год","promocodeDiscount":"Скидка по промокоду","subscriptionCaption":"Следующее списание {{date}}, отменить его можно в любой момент","tooltipText":"Скидка дествует на первое списание, далее — <price /> в год. <rules>Правила акции</rules>","trialDescription":"Мы спишем <currentPrice/> и сразу вернём его обратно. {{date}} с карты спишется <nextPrice/> за полный доступ к сервису. Отменить платёж можно в любой момент","yearSubscription":"Стоимость за год","yearSubscriptionDefault":"оплата за один год"},"tou":"Нажимая на кнопку, вы соглашаетесь <1>с длинным юридическим текстом</1>, в котором все подробно описано"},"service_renew_error":{"closeButton":"Закрыть","tryAnotherCard":"Попробовать другую карту"},"service_saved_filters":{"filtersAppliedText":"Перенесли фильтры из вашего предыдущего поиска, но их можно сбросить или изменить","resetButtonText":"Сбросить"},"service_screen_i_am_in_city":{"chooseDifferentPlaces":"Чтобы найти билеты, выберите разные города вылета и прилёта"},"service_search_results":{"errorInformers":{"noTickets":{"text":"Одно из двух: либо в этот аэропорт пока никто не летает, либо на ваши даты билеты пока не продают — ещё рано","title":"Ничего не нашлось"},"offline":{"text":"Проверьте подключение или перезагрузите страницу. Возможно, дело в устройстве — если под рукой есть другое, попробуйте зайти через него","title":"Похоже, с интернетом неполадки"}}},"service_serp_direct_flights":{"transportType":{"boat":"Судно (паром)","bus":"Автобус","helicopter":"Вертолет","train":"Поезд"},"unavailableDialog":{"cancelButton":"Отмена","description":"Не все рейсы можно объединить в один авиабилет. Проверьте, подойдёт ли вам такой вариант","submitButton":"Продолжить","title":"Чтобы выбрать такое время вылета, мы выберем другое время возвращения"},"unavailableDialogByType":{"fareKey":{"cancelButton":"Отмена","description":"Если вы хотите улететь именно этим рейсом, тариф автоматически поменяется на доступный. Убедитесь, что он вам подходит, или выберите другое время вылета","submitButton":"Изменить тариф","title":"На это время есть билет только с другим тарифом"},"time":{"cancelButton":"Отмена","description":"Не все рейсы можно объединить в один авиабилет. Проверьте, подойдёт ли вам такой вариант","submitButton":"Продолжить","title":"Чтобы выбрать такое время вылета, мы выберем другое время возвращения"},"timeAndFareKey":{"cancelButton":"Отмена","description":"Некоторые рейсы нельзя купить в одном билете. Если вы хотите улететь именно этим рейсом, тариф и время второго перелёта автоматически поменяются на доступные","submitButton":"Изменить","title":"Время второго перелёта и тариф изменятся"}}},"service_sorting":{"order":{"arrival_time":"Время прибытия","best":"Сначала рекомендуемые","cheapest":"Сначала дешёвые","departure_time":"Время вылета","popularity":"Популярность","rating":"Рейтинг","transfer_duration":"Длительность пересадок","trip_duration":"Длительность поездки"},"sortingInResults":{"modal":{"submit":"Применить","title":"Показать билеты"},"order":{"arrival_time":"С ранним прибытием","best_scoring":"Подходящие","cheapest":"Самые дешёвые","departure_time":"Ранние рейсы","popularity":"Самые популярные","rating":"С высоким рейтингом","transfer_duration":"С короткими пересадками","trip_duration":"Короткие рейсы"},"title":{"beggining":"Сначала","order":{"arrival_time":"с ранним прибытием","best_scoring":"подходящие","cheapest":"самые дешёвые","departure_time":"ранние рейсы","popularity":"самые популярные","rating":"с высоким рейтингом","transfer_duration":"с короткими пересадками","trip_duration":"короткие рейсы"}}}},"service_ticket_deeplink":{"priceDiffSnackbar":{"sameFare":{"cheaperTicketMessage":"Ого, билет теперь дешевле на {{priceDiff}}","moreExpensiveTicketMessage":"Ой, билет успел подорожать на {{priceDiff}}"}},"soldOutDialog":{"button":"Посмотреть все билеты","description":"Этого билета за <price /> уже нет, но наверняка найдутся другие подходящие варианты","title":"Эти места раскупили"}},"service_ticket_flight_info":{"fares":{"baggage":{"available":"Багаж включён","canBeAdded":"Багаж оплачивается отдельно","default":"Багаж","notAvailable":"Без багажа","withWeight":"Багаж {{count}}×{{weight}}"},"cardOption":{"base":"Базовый","full":"С багажом, обменом и возвратом","withBaggage":"С багажом","withBaggageAndChange":"С багажом и обменом","withBaggageAndReturn":"С багажом и возвратом","withChange":"С обменом","withChangeAndReturn":"С обменом и возвратом","withReturn":"С возвратом"},"cardText":{"baggageCanBeAdded":"Багаж можно докупить позже — когда будете оформлять билет или регистрироваться на рейс"},"change":{"available":"Обмен","default":"Обмен","notAvailable":"Без обмена","partiallyAvailable":"Обмен платный"},"changeFareButton":{"baggage":"багаж","change":"обмен","minimal":{"multiple":"Хочу {{firstOptions}} или {{lastOption}}","singular":"Хочу {{option}}","upgrade":"Улучшить тариф"},"nonMinimal":"Выбрать другой тариф","return":"возврат"},"chipsOption":{"baggage":"С багажом","change":"С обменом","return":"С возвратом"},"errorTitle":"Не получилось загрузить тариф","fareOptionButton":"Выбрать","handbags":{"available":"Ручная кладь включена","default":"Ручная кладь","notAvailable":"Без ручной клади","withWeight":"Ручная кладь {{count}}×{{weight}}"},"notFound":"Предложения с такими условиями не нашлись","proposals":{"base":"Все предложения","full":"Все предложения c багажом, обменом и возвратом","withBaggage":"Все предложения c багажом","withBaggageAndChange":"Все предложения c багажом и обменом","withBaggageAndReturn":"Все предложения c багажом и возвратом","withChange":"Все предложения c обменом","withChangeAndReturn":"Все предложения c обменом и возвратом","withReturn":"Все предложения c возвратом"},"return":{"available":"Возврат","default":"Возврат","notAvailable":"Без возврата","partiallyAvailable":"Возврат платный"}}},"service_ticket_product_banner":{"texts":{"azerbaijan":{"text":"<bold>Есть вопрос?</bold> Можете позвонить нам 24/7{{phone}}"}}},"service_tickets":{"fares":{"baggage":{"available":"Багаж включён","canBeAdded":"Багаж оплачивается отдельно","default":"Багаж","notAvailable":"Без багажа","withWeight":"Багаж {{count}}×{{weight}}"},"handbags":{"available":"Ручная кладь включена","default":"Ручная кладь","notAvailable":"Без ручной клади","withWeight":"Ручная кладь {{count}}×{{weight}}"},"title":{"base":"Базовый","full":"С багажом, обменом и возвратом","withBaggage":"С багажом","withBaggageAndChange":"С багажом и обменом","withBaggageAndReturn":"С багажом и возвратом","withChange":"С обменом","withChangeAndReturn":"С обменом и возвратом","withReturn":"С возвратом"}},"ticketPreview":{"informers":{"ad":"Реклама","adWithDomain":"Реклама {{domain}}","baggage":{"allPassengers":{"couldAddBaggage":"{{price}} c багажом на каждого человека","couldAddBaggageWithWeight":"{{price}} c багажом {{count}}×{{weight}} / чел.","hasBaggage":"C багажом на каждого человека","hasBaggageWithWeight":"C багажом {{count}}×{{weight}} / чел.","hasNoBaggage":"Без багажа","hasUnknownBaggage":"Без багажа"},"singlePassenger":{"couldAddBaggage":"{{price}} c багажом","couldAddBaggageWithWeight":"{{price}} c багажом {{count}}×{{weight}}","hasBaggage":"C багажом","hasBaggageWithWeight":"C багажом {{count}}×{{weight}}","hasNoBaggage":"Без багажа","hasUnknownBaggage":"Без багажа"}},"charter":"Чартер","handbags":{"allPassengers":{"handbagsIncluded":"С ручной кладью","handbagsIncludedWithWeight":"С ручной кладью {{count}}×{{weight}} / чел.","handbagsIsEmpty":"Личная вещь на человека","handbagsIsUnknown":"Ручная кладь неизвестна"},"singlePassenger":{"handbagsIncluded":"С ручной кладью","handbagsIncludedWithWeight":"С ручной кладью {{count}}×{{weight}}","handbagsIsEmpty":"Личная вещь на человека","handbagsIsUnknown":"Ручная кладь неизвестна"}},"seatsAvailable":"[[{{count}}|Остался|Осталось|Осталось]] {{count}} [[{{count}}|билет|билета|билетов]] по этой цене","ticketForbidden":"Не подходит туристам","uncertainLayover":"Проверьте, разрешены ли пересадки"}}},"service_transfer_modal":{"airport_change":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без смены аэропорта» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"l1":"вас ждут затраты на проезд между аэропортами;","l2":"придётся получать и сдавать багаж;","l3":"есть риск застрять в пробке и не успеть на свой рейс.","p1":"Это не сложно, но есть нюансы:","title":"Пересадка со сменой аэропорта в {{place}}"},"charter":{"countryConditions":{"india":"если вы влетаете в Индию чартерным рейсом, вылететь обратно можно только чартером той же авиакомпании;","thailand":"если вы влетаете в Таиланд чартерным рейсом, вылететь обратно можно только чартером той же авиакомпании. Но если вы собираетесь пробыть в стране больше 60 дней, назад нужно улететь регулярным рейсом, независимо от того, как вы въехали в Таиланд;"},"l1":"билеты пришлют накануне вылета, а номер заказа — сразу после оплаты;","l2":"их продают туроператоры, а не авиакомпании, поэтому выходит дешевле;","l3":"правила онлайн-регистрации и провоза животных могут отличаться от обычных рейсов;","l4":"иногда чартерные места бывают даже на регулярных рейсах — их выкупают турагентства.","p1":"У таких билетов время рейса и аэропорт вылета могут изменить за 1-2 дня до вылета. Вот все детали:","title":"Билет на чартер"},"different_carriers":{"l1":"вас встретит персонал и бортпроводники авиакомпании {{operatingCarrierName}};","l2":"удобства и питание по стандартам авиакомпании {{ operatingCarrierName }}.","p1":"Места на этот рейс продают сразу две авиакомпании — {{marketingCarrierName}} и {{operatingCarrierName}}. Фактический полёт выполняет {{operatingCarrierName}}, поэтому:","p2":"Если вы часто летаете авиакомпанией {{marketingCarrierName}}, то у нас хорошая новость — здесь применяется их программа лояльности.","title":"Полёт на борту авиакомпании {{operatingCarrierName}}"},"long_layover":{"p1":"У вас {{duration}}.","p2":"Вы будете налегке — багаж сам окажется на следующем рейсе.","title":"Возможность погулять в {{place}}"},"overnight_layover":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без ночных пересадок» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"p1":"Придётся тратить деньги на отель или спать на лавочке. К тому же некоторые аэропорты закрываются на ночь.","title":"Ночная пересадка в {{place}}"},"recheck_baggage":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без повторной регистрации багажа» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"p1":"При пересадке в {{place}} придётся получить багаж и зарегистрировать его снова.","p2":"Если у вас только ручная кладь, то повторно регистрировать её не нужно.","title":"Повторная регистрация багажа в {{place}}"},"restrictions_layover_conditions":{"caption":"Чтобы совершить пересадку, надо подготовиться.","defaultSuggestions":{"caption":"Чтобы совершить пересадку, надо выяснить:","items":["Нужен ли ПЦР‑тест и какой свежести","Как долго можно находиться в аэропорту","Нет ли дополнительных ограничений или требований (например, определённый тип масок)"],"placeSuggestion":"Самый надёжный способ – задать эти вопросы в форме обращения на сайте посольства {{country}} в РФ или авиакомпании.","title":"Уточните требования для пересадки в {{place}}"},"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без пересадок с ковидными требованиями» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"title":"Пересадка с ковидными требованиями в {{place}}"},"short_layover":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без коротких пересадок» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"ваш багаж может не успеть «пересесть» вместе с вами и прилететь позже;","li2":"вы можете не успеть на следующий рейс, если предыдущий задержится.","p1":"Всего {{duration}} — придётся торопиться. Какие риски вас ожидают:","title":"Короткая пересадка в {{place}}"},"short_with_interline_layover":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без коротких пересадок» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"если вы с багажом, то надо успеть его получить и сдать снова;","li2":"непредсказуемые очереди на пограничном контроле;","li3":"некоторые терминалы находятся на большом расстоянии друг от друга;","li4":"вы можете не успеть на следующий рейс, если предыдущий задержится.","p1":"Всего {{duration}} — придётся торопиться. Какие риски вас ожидают:","title":"Короткая пересадка в {{place}}"},"virtual_interline_domestic":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без раздельных бронирований» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"на следующий рейс нужно регистрироваться в аэропорту пересадки, а если летите с багажом, придётся его забрать и снова сдать;","li2":"правила обмена и возврата для каждого билета скорее всего отличаются.","p1":"Билет состоит из нескольких отдельных бронирований. Иногда такой вариант дешевле, но есть нюансы:","title":"Раздельное бронирование"},"virtual_interline_domestic_rebranding":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без повторных регистраций» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"на следующий рейс нужно регистрироваться в аэропорту пересадки, а если летите с багажом, придётся его забрать и снова сдать;","li2":"правила обмена и возврата для каждого билета скорее всего отличаются.","p1":"Билет состоит из нескольких отдельных бронирований. Иногда такой вариант дешевле, но есть нюансы:","title":"Повторная регистрация"},"virtual_interline_international":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без раздельных бронирований» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"пересадка равноценна въезду в страну с прохождением паспортного контроля — если нужна виза, её обязательно потребуют;","li2":"если в страну не пускают туристов, у вас могут возникнуть проблемы на пересадке;","li3":"если по прибытии в страну обязателен карантин, лучше выяснить, возможен ли трансфер;","li4":"на следующий рейс нужно регистрироваться в аэропорту пересадки, а если летите с багажом, придётся его забрать и снова сдать;","li5":"правила обмена и возврата для каждого билета скорее всего отличаются.","p1":"Билет состоит из нескольких отдельных бронирований. Иногда такой вариант дешевле, но есть нюансы:","title":"Раздельное бронирование"},"virtual_interline_international_rebranding":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без повторных регистраций» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"li1":"пересадка равноценна въезду в страну с прохождением паспортного контроля — если нужна виза, её обязательно потребуют;","li2":"если в страну не пускают туристов, у вас могут возникнуть проблемы на пересадке;","li3":"если по прибытии в страну обязателен карантин, лучше выяснить, возможен ли трансфер;","li4":"на следующий рейс нужно регистрироваться в аэропорту пересадки, а если летите с багажом, придётся его забрать и снова сдать;","li5":"правила обмена и возврата для каждого билета скорее всего отличаются.","p1":"Билет состоит из нескольких отдельных бронирований. Иногда такой вариант дешевле, но есть нюансы:","title":"Повторная регистрация"},"visa_required":{"footer":{"buttonText":"Применить фильтр","content":"Примените фильтр «Без пересадок с визой» — самый дешёвый будет стоить <0/>","title":"Если комфорт важнее"},"p1":"В некоторых аэропортах нет транзитной зоны. Это значит, что пересадка равноценна въезду в страну, и вам точно понадобится виза.","title":"Пересадка с визой","titleWithPlace":"Пересадка с визой в {{place}}"}},"service_travel_map_cities":{"recently_watched_badge":"Вы смотрели"},"service_travel_restrictions":{"conditions":"Условия","countryClosed":"Закрыто для туристов","countryClosedUntilDate":"до {{ openingDate }}","countryOpen":"Открыто для туристов","countryOpenFromDate":"с {{ openingDate }}","countryOpenNotDirect":"Пересадка","countryOpenNotDirectQuarantine":"Пересадка, карантин","countryOpenQuarantine":"Карантин по прибытии","countryOpenShort":"Открыто"},"service_usercom_auth":{"containers":{"loginForm":{"subscriptionCheckboxText":"Я согласен получать рассылку от $application_name с коммерческими предложениями"},"loginPopup":{"subtitle":"Доступ к поддержке и подпискам на цены","title":"Войдите в профиль"}}},"service_usercom_instructions":{"additionSupportMessage":{"clicked":"Нажато","foundPartners":"Найденные гейты","searchInput":"Строка поиска","showedScreen":"Показан экран"},"contactForm":{"errors":{"emailNotValid":"Похоже, почта написана неверно","noComment":"Расскажите о проблеме — так мы быстрее во всём разберёмся","noEmail":"Оставьте почту, чтобы связаться с поддержкой"},"noData":"Нет данных"},"footer":{"privacyPolicy":"Политика конфиденциальности","termsOfUse":"Правила использования"},"instructions":"Инструкции","notify":{"commonError":"Что-то пошло не так. Попробуйте ещё раз или проверьте подключение к интернету","supportFormSended":"Получили ваше обращение, скоро ответим"},"support":"Поддержка"},"service_usercom_passengers":{"buttons":{"cancel":"Отмена","clear":"Очистить форму","delete":"Удалить","deleteDocument":"Удалить документ","save":"Сохранить"},"common":{"birthDate":"Дата рождения","citizenship":"Гражданство","document":"Документ","documentNumber":"Номер документа","documentType":"Тип документа","expired":"Срок истёк","expires":"Срок действия","expiring":"Истекает срок","firstName":"Имя","lastName":"Фамилия","newDocument":"Новый документ"},"datesFormat":{"ru":"дд.мм.гггг"},"deleteModal":{"description":"Вы уверены?","title":"Удалить документ?"},"documents":{"birthCertificate":"Свид. о рождении","nationalPassport":"Паспорт","russianExternal":"Загранпаспорт","russianInternal":"Паспорт РФ","unknownDocument":"Документ"},"documentsData":{"birthCertificate":"Данные свидетельства о рождении","nationalPassport":"Данные паспорта","russianExternal":"Данные загранпаспорта","russianInternal":"Данные паспорта РФ","unknownDocument":"Данные документа"},"errors":{"invalidDate":"Некорректная дата","required":"Обязательное поле"},"gender":{"female":"Женский","male":"Мужской"},"privacy":"Сохраняя документ, вы соглашаетесь с <0>Лицензионным соглашением</0> и <1>Политикой конфиденциальности</1>"},"service_usercom_premium":{"containers":{"priority_support":{"alert":{"pinned":"{{ socialChannel }} закреплен как основной способ связи с поддержкой"},"banner":{"connected":{"caption":"Пишите нам когда угодно — мы на связи 24/7","title":"Тревел-консультанты"},"notConnected":{"caption":"Знаем о путешествиях всё и отвечаем на ваши вопросы 24/7","title":"Ваши тревел-консультанты"}},"buttons":{"cancel":"Отмена","connect":"Привязать","contactSupport":"Написать в поддержку","hasQuestion":"Есть вопрос","ok":"Понятно","pinChannel":"Закрепить в профиле","pinnedChannel":"Закреплен в профиле","tryAgain":"Попробовать ещё раз","write":"Написать","writeIn":"Написать в"},"connectionError":{"common":{"description":"Вы запретили доступ, либо произошла <br/>какая-то другая ошибка","title":"Не смогли привязать аккаунт"},"occupiedSocial":{"description":"Если у вас нет возможности привязать другой аккаунт {{ socialName }} — обратитесь в нашу поддержку","title":"Этот аккаунт {{ socialName }} привязан <br/>к другому профилю"}},"modal":{"AS":{"description":"Мы знаем, где лучший кофе в Стамбуле или как дешевле всего добраться из Питера в Ереван — привяжите к $subscription_name_short мессенджер и пишите нам в любое время"},"WA":{"description":"Мы знаем, где лучший кофе в Чикаго и как дёшево улететь из Бостона в LA — просто привяжите свой аккаунт в Facebook и пишите нам в любое время"},"title":"Тревел-консультанты","yourAccount":"Ваш аккаунт"},"socials":{"facebook":"Facebook","telegram":"Телеграм","vk":"ВКонтакте"}},"promo_block":{"button":"Хочу","randomCaptions":{"1":"Путешествия ещё лучше и дешевле","2":"Кэшбэк, советы и секретные места","3":"Личный помощник в путешествиях"},"title":"$subscription_name"}}},"service_usercom_private_subscription_button":{"desktop":{"text":{"alreadySubscribed":"Вы следите за ценой","subscribe":"Следить за ценой","unsubscribe":"Удалить подписку"},"tooltip":"Сообщим, когда минимальная цена на направление изменится"},"mobile":{"button":{"create":"Создать"},"text":{"subscribe":"Подписка на цену","unsubscribe":"Удалить подписку"}}},"service_usercom_private_subscription_notifications":{"error":{"create":{"message":"Не получилось создать подписку. Попробуйте ещё раз через пару минут"},"remove":{"message":"Не получилось удалить подписку. Попробуйте ещё раз через пару минут"}},"success":{"remove":{"actionButtonLabel":"Вернуть","message":{"default":"Подписка удалена","direction":"Подписка на точные даты удалена","directionFlex":"Удалили подписку с соседними датами","flexible":"Удалили подписку на месяцы","ticket":"Удалили подписку на билет без багажа","ticketBaggage":"Удалили подписку на билет с багажом"}},"removeOutdated":{"message":"Устаревшие подписки удалены"}}},"service_usercom_subscriptions":{"card":{"deleteSubscription":"Удалить","flexibility":"±1 день","oneWay":"Только туда","ticket":"Билет","tripDuration":"На {{ min }} — {{ max }} дней","viewTicket":"Посмотреть"},"cardInfo":{"adultsCount":"{{ count }} [[{{ count }}|взрослый|взрослых|взрослых]]","baggage":"Багаж","layovers":"Пересадки","noLayovers":"Без пересадок","passengers":"Пассажиры","passengersCount":"{{ count }} [[{{ count }}|пассажир|пассажира|пассажиров]]","pricePerOne":"(цена за 1)","tripClass":"Класс","withBaggage":"С багажом","withoutBaggage":"Без багажа"},"months":"мес","notification":{"firstTimeCreated":{"action":"Настроить","message":{"all":"Пришлём письмо и пуш, когда цена изменится. Уведомления можно настроить в профиле","email":"Пришлём письмо, когда цена изменится. Уведомления можно настроить в профиле","push":"Пришлём пуш, когда цена изменится. Уведомления можно настроить в профиле"}},"ticketSubscriptionCreated":{"children":{"action":"Почему?","additionalMessage":". Оставили только взрослых, без детей"},"message":"Подписка на билет создана{{additional}}"}},"popup":{"children":{"action":"Понятно","description":"Так легче следить за ценой — уведомлений будет намного больше","title":"Подписку можно создать только для взрослых"}},"price":{"lookingFor":"Ищем цену","noTickets":"Билеты не нашлись"}},"service_usercom_user_account_navigation":{"menu":{"documents":"Документы","history":"История","more":"$subscription_name_short","myCashback":"Мой кэшбэк","notifications":"Уведомления","orders":"Мои заказы","plus":"$subscription_name_short","premium":"$subscription_name_short","promos":"Конкурсы","purchase":"Покупки","settings":"Настройки","subscriptions":"Подписки"},"title":"Личный кабинет","windowTitle":"{{route}} — Личный кабинет $application_name"},"util_b2b_use_form_values":{"badInput":"Заполнено некорректно","customError":"","patternMismatch":"Не соответствует формату","rangeOverflow":"","rangeUnderflow":"","stepMismatch":"","tooLong":"Слишком много символов","tooShort":"Слишком мало символов","typeMismatch":"Не соответствует формату","valid":"Заполнено некорректно","valueMissing":"Обязательно для заполнения"},"widget_autosearch_results":{"buttonTitle":"Посмотреть все билеты"},"widget_business_stub":{"fixForm":"Выберите точные даты поездки, чтобы узнать цены на бизнес, премиум или комфорт класс","fixFormButtonText":"Выбрать даты","fixFormOnlyBusiness":"Выберите точные даты поездки, чтобы узнать цены на бизнес класс","submitForm":"Начните поиск, чтобы узнать цены на бизнес, премиум или комфорт класс","submitFormButtonText":"Начать поиск","submitFormOnlyBusiness":"Начните поиск, чтобы узнать цены на бизнес класс"},"widget_calendar_page_header":{"text":"Цены на авиабилеты, обнаруженные посетителями за последние 48 часов","title":"Календарь низких цен"},"widget_cities":{"closed":"Закрыто","emptyDatesError":{"buttonText":"Обновить","firstParagraph":"Скорее всего, что-то с интернетом.","secondParagraph":"Проверьте подключение и попробуйте зайти ещё разок. А мы пока посмотрим, не сломалось ли у нас чего","title":"Ничего не загрузилось"},"emptyState":{"chooseDestination":{"buttonText":"Выбрать направление","description":"Выберите конкретный город или аэропорт, и мы найдём все подходящие билеты на нужные вам даты","title":"Ничего не нашли на эти даты"}},"getPrice":"Узнать цену","opened":"Открыто","pickCity":"Для поиска билетов выберите конкретный город","priceFrom":"от {{ price }}","showAllCities":"Ещё {{totalCities}} [[{{totalCities}}|город|города|городов]]","showAllCitiesHeader":"Ещё","showAllCitiesShort":"Ещё {{totalCities}}","showRoundedCities":"Ещё 100+ городов","showRoundedCitiesShort":"Ещё 100+","title":"Города"},"widget_city_guide_promo_banner":{"label_subtitle":"Путеводители без лишних<br/>слов и скучных фактов","label_text":"Короче о городах","static_promo_text":"путеводители без воды"},"widget_faq_content":{"allArticles":"Все статьи","articleFeedbackDesc":"<bold>Мы не ответим на это сообщение</bold><regular>, но используем его, чтобы сделать статью лучше.\nЕсли хотите связаться с нами, заполните <a_link>форму обратной связи</a_link></regular>","articleFeedbackDidArticleHelp":"Вам помогла наша статья?","articleFeedbackError":"Не смогли отправить форму, попробуйте ещё раз","articleFeedbackNo":"Нет","articleFeedbackPlaceholder":"Как мы можем улучшить статью?","articleFeedbackSend":"Отправить","articleFeedbackSubject":"Вопрос с сайта {{ application }}","articleFeedbackSubmittedText":"Мы постараемся сделать статью лучше\nс помощью ваших комментариев","articleFeedbackThanks":"Спасибо!","articleFeedbackYes":"Да","partnersAdditionalInfo":"Дополнительная информация","partnersChat":"Онлайн-чат","partnersDescription":"Введите название авиакомпании или агентства, чтобы увидеть контакты для связи","partnersEmail":"Написать письмо","partnersFeedback":"Написать в поддержку","partnersInputPlaceholder":"Название продавца (есть в билете или в СМС о списании денег)","partnersPhone":"Позвонить{{ note }}","partnersPhoneSocials":"Написать в {{ socials }}","partnersTitle":"Как связаться с продавцом билета"},"widget_faq_main":{"articleFeedbackSubject":"Вопрос с сайта {{ application }}","articleFeedbackTitle":"Главная страница","emergencyBlockTitle":"Срочное","goToSection":"Быстрый переход к разделу","heroDescription":"Здесь мы собрали ответы на самые важные и популярные вопросы, связанные с авиаперелётами.","howCanWeHelp":"Как мы можем помочь?","staticSections":{"instructions":"Инструкции","techData":"Тех. информация"}},"widget_flight_info":{"header":"Рейс {{flightName}}"},"widget_footer":{"app_qr":{"popup":{"help":"Наведите камеру телефона на код","title":"Приложение $application_name"},"text":"Там супербыстрый поиск и легче следить за ценами на билеты","title":"В приложении удобнее"}},"widget_form":{"aviaTab":"Авиабилеты","hotelsTab":"Отели"},"widget_gdpr":{"acceptAllButton":"Принять всё","acceptButton":"Хорошо","cancel":"Отмена","ccpa":{"acceptButton":"ОК","cookiePreferences":"Настройки файлов cookie","doNotTransferPersonalData":"Не передавать мои персональные данные","doNotTransferPersonalDataDesc":"Поставьте галочку напротив, чтобы отказаться от передачи ваших персональных данных для любых целей, кроме целей целей предоставления вам соответствующего функционала сервиса. Совершая такой отказ, вы также отказываетесь от передачи ваших данных в целях кросс-контекстной поведенческой рекламы.","essentialCookies":"Обязательные файлы cookie","essentialCookiesDesc":"Минимальный необходимый набор файлов cookie, использование которых обязательно для поддержания работоспособности $application_name и основного функционала сайта.","generalPrivacyPreferences":"Общие настройки персональных данных","legal":"См. <pd>Политику обработки ПД</pd> и <cookie>Политику Cookie</cookie>, чтобы узнать больше о наших практиках обработки ПД и соответствующих правах пользователей.\n","marketingCookies":"Маркетинговые файлы cookie","marketingCookiesDesc":"Данные, собираемые этими файлами cookie, позволяют $application_name и нашим партнерам (например, Google или Facebook) демонстрировать более релевантные для вас коммерческие предложения (рекламу). Уберите галочку напротив, чтобы отказаться от передачи ваших данных в целях кросс-контекстной поведенческой рекламы.","notification":"Мы собираем, обрабатываем и передаем ваши персональные данные (“ПД”). См. <pd>Политику обработки ПД</pd> и <cookie>Политику Cookie</cookie>, чтобы получить информацию о правилах обработки, правах пользователей и о том, как отказаться от передачи данных","restrictSensitiveData":"Ограничить использование чувствительных персональных данных","restrictSensitiveDataDesc":"Если вы предоставляете нам чувствительные персональные данные, то такие данные обрабатываются нами исключительно для целей предоставления вам соответствующего функционала сервиса.","technicalCookies":"Технические файлы cookie","technicalCookiesDesc":"Обрабатывая cookie-файлы этого типа мы анализируем взаимодействие пользователя с сайтом, для целей последующей персонализации функционала и улучшения качества сервиса."},"essentialCookies":"Обязательные","essentialCookiesDesc":"Это cookie и аналогичные технологии, без которых невозможно использовать сервис $application_name.","manageCookies":"Управление данными","marketingCookies":"Рекламные","marketingCookiesDesc":"Необходимы для показа персонализированной рекламы, в том числе из рекламных сетей, на основе интересов и поведения на сайте.","moreInformation":"Больше информации о файлах cookie и их использовании на сайте в <lnk>Политике конфиденциальности</lnk>","notificationCookieSettings":"Узнайте подробнее и управляйте собственными предпочтениями","notificationLink":"Узнайте подробнее","notificationText":"Мы используем cookie и аналогичные технологии.","submit":"Сохранить","technicalCookies":"Функциональные","technicalCookiesDesc":"Помогают персонализировать взаимодействие с сервисом, запоминают выбор пользователя и предоставляют дополнительную аналитику использования $application_name."},"widget_guides_app_banner":{"ageMarker":"0+","continueInBrowser":"Продолжить в браузере","inApp":"В приложении<br/>удобнее","open":"Открыть"},"widget_guides_feed":{"feedError":{"button":"Обновить","description":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение или попробуйте позже","title":"Что-то пошло не так"},"hotels":{"priceForPeriod":"за 1 ночь","priceFrom":"от"},"iAmInCity":{"emptyState":{"action":"Выбрать другой город","description":"Чтобы найти билеты, выберите разные города вылета и прилёта"}}},"widget_guides_product_purchase":{"networkError":{"button":"Обновить","subtitle":"Скорее всего, что-то с интернетом. Проверьте подключение и попробуйте зайти ещё разок","title":"Ничего не загрузилось"},"promocode":{"apply":"Применить","discountInfo":"Скидка по промокоду не суммируется с другими скидками","emptyPromocodeError":"Введите промокод","promocode":"Промокод"},"purchaseResultScreen":{"defaultErrorSubtitle":"Мы знаем о ошибке и уже бежим исправлять. Попробуйте обновить страницу или зайти позже","defaultErrorTitle":"Ничего не загрузилось"},"purchaseScreen":{"paymentTitle":"Выбор оплаты"},"screenTitle":"Открыть подборку"},"widget_guides_promo":{"buttonText":"Показать {{count}} [[{{count}}|город|города|городов]]","description":"Мы нашли идеальные города для отдыха и попросили местных рассказать, куда там сходить и чем заняться","heading":{"title":"Куда поехать в отпуск"},"noDataText":"Показать города"},"widget_hot_tickets":{"findTickets":"Найти билеты","flightDirection":"Авиабилет {{ origin }} — {{ destination }}","oldPrice":"Старая цена","widgetHeading":"Дешевые билеты из {{ place }} куда угодно"},"widget_hotels":{"allHotelsTextButton":"Ещё отели","blockTitle":"Отели","landingTextButton":"Как получить кэшбэк","priceForPeriod":"за 1 ночь","priceFrom":"от"},"widget_hotels_redirect_page":{"error":{"action":"Перезагрузить","content":"Одно из двух: либо проблемы с интернетом, либо технические неполадки. Проверьте подключение и попробуйте зайти ещё разок","title":"Не получилось загрузить {{gateName}}"},"loadingText":"Переходим на экран бронирования"},"widget_how_to_get":{"directTicketsSchedule":{"directFlightsAllWeekExceptOneDay":"Прямые всю неделю, кроме <b>{{ day }}</b>","directFlightsAllWeekExceptTwoDays":"Прямые все дни, кроме <b>{{ firstDay }}</b> и <b>{{ secondDay }}</b>","directFlightsEveryDay":"Прямые каждый день","noDirectFlights":"Нет прямых рейсов","onlyBackDirectFlights":"Прямые только обратно","onlyDirectFlights":"Прямые рейсы: <b>{{ days }}</b>","title":"Расписание прямых рейсов"},"noPrices":"Выберите даты поездки, чтобы увидеть цены на билеты","premiumPromo":"Получите кэшбэк на билеты","title":"Как добраться"},"widget_init_loader":{"adults":"{{count}} [[{{count}}|взрослый|взрослых|взрослых]]","airlineName":"Авиакомпания {{airlineName}}","children":"{{count}} [[{{count}}|ребёнок|ребёнка|детей]]","gateName":"Агентство {{gateName}}","infants":"{{count}} [[{{count}}|младенец|младенца|младенцев]]","partner":"Партнёр","text":"{{gate}} выписывает билеты и принимает оплату, а мы ускоряем процесс и экономим ваше время","title":"Быстрое оформление билета на $application_name: проверяем цену...","titles":["Загружаем страницу бронирования","Можете пока паспорт подготовить","Ой, и про карту не забудьте!","Банковскую карту, не контурную","Эх, быстрая покупка оказалась чуть медленнее обычного","Разработчик Коля уже шуршит, скоро всё загрузится"]},"widget_main_content":{"blog":{"psgr":{"action":"Читать","text":"Как спланировать идеальную поездку? Рассказываем"},"wa_blog":{"action":"Проверить","text":"Советы и истории о путешествиях по США и за рубежом"}},"chooseDestination":{"buttonText":"Вернуться в начало","description":"Вот вам милый котик!","heading":"Долистали до конца?"},"cityPoiCollection":{"buttonText":"Улететь {{cityName}}","buttonTextWithPrice":"Найти билеты от <price></price>","title":"Что насчёт {{cityName}}?"},"cityPois":{"buttonText":"Улететь {{cityName}}","buttonTextWithPrice":"<span>{{cityName}}</span> от <price></price>"},"cityVideo":{"buttonText":"{{cityName}} от {{price}}"},"hotTickets":{"asDescription":"Скоро разберут!","description":"Ещё и с кэшбэком!","title":"Горячие билеты"},"more":{"asMore":"Авиасейлс Ещё","benefits":{"cashbackAviaV2":"Кэшбэк <icon></icon> на билеты,","cashbackRestV2":"отели и другие сервисы <icon></icon>","cashbackV1":"Кэшбэк <icon></icon> в рублях","guides":"<icon></icon> Нескучные аудиогиды","locals":"Советы <icon></icon> от местных","supportV1":"Тревел-консультанты <icon></icon>","supportV2":"<icon></icon> Тревел-консультанты"},"expiredSubscription":{"premiumDescription":"Ещё. Год. Кэшбэка","premiumTitle":"Три главных слова","profileLink":"Отличная идея"},"openLandingButton":"Как это работает?","premiumDescriptionV1":"кэшбэк в рублях, подборки крутых локаций от местных и тревел-консультации 24/7","premiumDescriptionV2":"кэшбэк на билеты, отели и другие сервисы, советы от местных и тревел-консультации 24/7","premiumTitle":"У вас уже есть","profileLink":"Фантастика","whatsThis":"Что это?"},"myCashback":{"logged":{"button":"Получить кэшбэк","text":"За отели, трансфер, аренду машин и даже аттракционы — бесплатно","title":"Вернём до 8%"},"unlogged":{"button":"Хочу экономить","text":"Вернем вам до 8% за отели, аренду машин и многое другое — просто перейдите по кнопке, авторизируйтесь и начните копить","title":"Подключите бесплатный кэшбэк от $application_name"}},"nationalParkPoi":{"title":"{{parkName}}, национальный парк"},"nationalParksCollection":{"title":"Национальные парки"},"plus":{"myPlus":"Мой plus","noPremiumDescription":"И выводите его на свой PayPal счёт в любое время с помощью WayAway Plus","noPremiumTitle":"Получайте кэшбэк до 5% на авиабилеты","openLandingButton":"За кэшбэком","premiumDescription":"А значит, вы можете получать кэшбэк на билеты и отели, круглосуточно задавать вопросы тревел-экспертам и гулять по интересным местам из наших подборок","premiumTitle":"У вас уже есть $subscription_name_short","profileLink":"Перейти в $subscription_name_short","waPlus":"wayaway plus"},"poiCompilation":{"buttonText":"Показать все места","minPrice":"от <price></price>","promoButtonText":"Ну мааам"},"popularDestinations":{"buttonText":"Все направления","description":"из {{cityName}}","minPrice":"от <price></price>","modalTitle":"Популярные направления","title":"Популярные направления"},"priceMapBanner":{"description":"Так легче найти самый дешёвый билет","open":"Открыть","priceMap":"Карта цен"},"promoKoroche":{"buttonText":"Куда сходить?","description":"Знаем тут все классные места и покажем их вам"},"weekends":{"buttonText":"Выбрать город","description":"Билеты для тех кто не хочет на дачу: удобный вылет и короткие пересадки","title":"Куда улететь на выходные"}},"widget_navbar":{"blog":"Журнал ПСЖР","business":"Для бизнеса","calendar":"Календарь низких цен","currency":"Валюта","darkTheme":"Включить тёмную тему","hot":"Спецпредложения","language":"Язык","lightTheme":"Включить светлую тему","login":"Войти","logout":"Выйти","map":"Карта низких цен","mapWithAnywhere":"Куда угодно","profile":"Профиль","services":"Сервисы","settings":"Настройки","subscription":"Подписки и рассылка","support":"Поддержка","top":"100 лучших билетов","userPhotoAlt":"Фото пользователя"},"widget_nearby_airports":{"heading":"Ближайшие аэропорты","pickAirport":"Выберите ближайший аэропорт, чтобы скорее сюда добраться"},"widget_overhead_promo":{"youAreRipe":{"content":"Созрели для первого полёта?"}},"widget_package_tours":{"allToursLink":"Посмотреть все пакетные туры","allToursLinkMobile":"Ещё","blockDescription":"Готовая поездка, в которую входит отель, перелёт и трансфер","cardImageDescription":"Изображение для {{ name }}","heading":"Пакетные туры {{ place }}","headingMobile":"Пакетные туры","periodCaption":"{{ date }} на {{ count }} [[{{ count }}|ночь|ночи|ночей]]","pricePeopleAmount":"за {{ count }} [[{{ count }}|человека|человек]]","priceTitle":"от <formattedPrice></formattedPrice>","ratingCaption":"{{ rating }} [[{{ rating }}|звезда|звезды|звёзд]] из 5"},"widget_premium_management":{"autoRenew":{"activeTitle":"Автопродление","activeUntil":"Подписка активна до {{date}}","cancelButton":"Отменить","emptyDataActiveUntil":"Действует до {{date}}","emptyDataTitle":"Подписка активна","inactiveTitle":"Автопродление отменено","nextPaymentPrice":"Следующее списание <strong><price /></strong>","payMethodTitle":"Способ оплаты","resumeButton":"Возобновить","subTitle":"{{subscriptionDuration}} за <price />","subscribeError":"Нам не удалось возобновить автопродление. Попробуйте ещё раз позже","subscriptionSuccessfulyRenewed":"Доступ к $subscription_name возобновлён","title":"Оплата","unsubscribeError":"Нам не удалось отменить автопродление. Попробуйте ещё раз позже"},"autoRenewCancel":{"cancelButton":"Не нужно отменять","cashbackAvailability":"Вы сможете пользоваться $subscription_name до <date />. Вывести накопленный кэшбэк можно даже после того, как подписка закончится","confirmButton":"Хочу отменить сейчас","description":"За 7 дней до конца подписки мы напомним вам про автопродление. И если вы точно решите его отменить, у вас будет на это ещё целая неделя","popupTitle":"Отмена автопродления","title":"Хотите отменить автоматическое продление сейчас?"},"cashback":{"allOperations":"Все","balance":"На балансе:","butMoreCashbackSoon":"Но скоро будет <price />","cashbackBy":"Кэшбэк от {{partnerName}}","cashbackOperationPrice":"{{symbol}}<price /> <rate />","commission":"Это итоговая сумма с учётом комиссии <price />","currentBalance":"Кэшбэк: <balance />","currentBalanceEmpty":"Кэшбэка ещё нет","currentBalanceMobile":"Баланс: <balance />","done":"Зачислен","doneOperations":"Завершённые","emptyMessage":"У вас пока нет операций с кэшбэком.<br />Самое время это исправить","estimate":"Кэшбэк должен подтвердиться до {{date}}","goToCashbackButton":"Пойти за кэшбэком","hideOffersButton":"Меньше предложений","howItWorksButton":"Как это работает?","howItWorksModalTitle":"Как работает кэшбэк?","makeOrder":"Заказать","makeOrderWithPrice":"Заказать за <price />","moreCashbackSoon":"Скоро будет ещё <price />","moreOffersButton":"Ещё {{amount}} предложений","offersTitle":"Офферы","operationDetails":"№ {{number}} на сумму <price />","operationsHistoryButton":"История операций","operationsHistoryTitle":"История операций","pcrCashback":"<text><price /></text> вернётся кэшбэком","pcrOfferAttention":"ПЦР-тест можно сделать при наличии оплаченного авиабилета:","pending":"В ожидании","pendingBalanceMobile":"В ожидании: <balance />","pendingCashbackEmpty":"Пока ничего нет","pendingOperations":"В ожидании","rejected":"Отклонён","rejectedOperations":"Отклонённые","stillQuestionsTitle":"Остались вопросы?","supportButton":"Написать вопрос в поддержку","withdrawButton":"Вывести деньги"},"co2Block":{"detailsButton":"Подробнее","howItWorksButton":"Как это работает","paidAmount":"{{amount}} [[{{amount}}|тонна|тонны|тонн]] CO₂","title":"Гасим углеродный след","unpaidButton":"Узнать больше"},"co2Compensation":{"amountInputPlaceholder":"0 ₽","clarification":"Теперь воздух станет чище — всё благодаря вам","description":"Помочь планете","descriptionCaption":"погасить углеродный след","enterAmountCompensation":{"AS":"Перевести на доброе дело:","WA":"Потратить на экологию:"},"fullBalanceToCO2Button":"Всё на зелёное!","howItWorksLink":"Как это работает?","plusCo2BarDescription":"<price /> уйдут на погашение углеродного следа","popupDescription":{"AS":"Восполнить ресурсы планеты, направив кэшбэк Алтайскому лесному проекту. <button>Как это работает?</button>","WA":"Отправьте часть кэшбэка в Sustainable Travel International, чтобы леса стали гуще, а воздух — чище. <button>Как это работает?</button>"},"popupTitle":"Гасим углеродный след","submitButton":{"AS":"Добро!","WA":"Компенсировать CO₂"},"title":"Погасить углеродный след","tooltipInfo":"Чтобы погасить {{amount}} [[{{amount}}|тонну|тонны|тонн]] CO₂, нужно <price />. В примерах мы посчитали след для 1 пассажира"},"co2Success":{"message":{"AS":"Вы компенсировали целых <weight>{{userAmount}} [[{{userAmount}}|тонну|тонны|тонн]]</weight> CO₂. Мы удвоили сумму вашего пожертвования, а значит вместе мы компенсировали <doubledWeight>{{commonAmount}} [[{{commonAmount}}|тонну|тонны|тонн]]</doubledWeight>!","WA":"Мы удвоили сумму вашего доната, и это значит, что вы компенсировали не <weight>{{userAmount}} [[{{userAmount}}|тонну|тонны|тонн]]</weight> углекислого газа, а в два раза больше —  <doubledWeight>{{commonAmount}} [[{{commonAmount}}|тонну|тонны|тонн]]</doubledWeight>!"},"messageTitle":"Ваша помощь в 2 раза ощутимее","submitButton":{"AS":"Ура!","WA":"Вау!"},"title":{"AS":"Денежка ушла","WA":"Уже проверяем ваш запрос на перевод"},"withdrawDates":{"AS":"Обычно перевод занимает не больше трёх дней","WA":"Проверка данных займёт один рабочий день, a перевод — не больше {{daysAmount}} дней. Так что деньги дойдут не позже {{date}}"}},"errors":{"required":"Нет данных — нет денег","requiredCardNumber":"Нет карты — нет денег","requiredPhoneNumber":"Нет телефона — нет денег","wrongCardNumber":"Неверный номер карты","wrongData":"Неверные данные","wrongPhoneNumber":"Неверный номер телефона"},"faq":{"profileFaqTitle":"Вопросы и ответы"},"filters":{"allOperations":"Все операции","allStatuses":"Все статусы","cancelled":"Отклонен","cashback":"Кэшбэк","done":"Готово","emptyMessage":"По такому запросу ничего нет","payout":"Вывод денег","pending":"В ожидании","resetFilters":"Сбросить фильтры","total":"{{total}} [[{{total}}|операция|операции|операций]]"},"filtersError":{"description":"Произошла ошибка. Попробуйте ещё раз или сбросьте фильтры","resetFiltersBtn":"Сбросить фильтры","title":"Не удалось применить фильтр","tryAgainBtn":"Попробовать ещё раз"},"fromToPercents":"{{min}}%-{{max}}%","fromToPrices":"{{minPrice}}-{{maxPrice}}","generalError":{"description":"Мы знаем о ошибке и уже бежим исправлять. Попробуйте обновить страницу или зайти позже","title":"Что-то пошло не так"},"giftYear":{"submitButton":"Класс","text":"5 человек купили сервис по вашей ссылке, и это очень круто. Дарим вам ещё 365 дней доступа к кэшбэку, советам от тревел‑консультантов и секретным рекомендациям — как и обещали","title":"Вы получили год $subscription_name_short в подарок!"},"mainFaqTitle":"Вопросы и ответы","myCashback":"Мой кэшбэк","networkError":{"description":"Мы не дождались ответа от сервера. Возможно, у вас пропал интернет. Проверьте подключенииe попробуйте ещё раз или зайдите позже","retry":"Попробовать ещё раз","title":"Ошибка сети"},"offer":{"avgWaitingTimeTitle":"Когда обычно начисляется кэшбэк","callToActionButtonCaption":"Кэшбэк <rate />","cashbackAmount":"Кэшбэк <rate />","maxWaitingTimeTitle":"Максимальное время ожидания кэшбэка"},"payout":{"cardTitle":"Вывод денег","co2CompensationTitle":"Погашение CO₂","co2OperationDetails":"№ {{number}}, {{details}}","estimate":"Заказ должен подтвердиться до {{date}}","operationDetails":"№ {{number}} на {{details}}","payoutPrice":"-<price />","paypalCommissionMessage":" PayPal снимает за каждый перевод около <a><price/> комиссии</a>. Если у вас кошелёк не в USD, PayPal также снимет комиссию за конвертацию. ","paypalSuccessButtonLabel":"Буду ждать","paypalSuccessDescription":"Проверка данных займёт один рабочий день, а перевод — не больше {{maxDays}} дней.<lineBreak/>Так что деньги дойдут не позже {{maxDate}}","paypalSuccessTitle":"Уже проверяем ваш запрос на перевод","paypalWithdrawTitle":"Отправьте деньги на свой аккаунт в PayPal","withdrawModalTitle":"Вывод кэшбэка","withdrawModalTitleWithBalance":"Вывод кэшбэка: <balance />"},"referralPopup":{"copyLabel":"Скопировать ссылку","linkWasCopied":"Ссылка скопирована","shareLabel":"Поделиться"},"saloEdition":{"category":"Авиабилеты","offerSubTitle":"кэшбэк на авиабилеты для котлег","offerTitle":"Salo"},"scrollFetchError":{"description":"Мы знаем об ошибке и уже бежим исправлять. Попробуйте обновить страницу или зайти позже","title":"Не удалось загрузить операции"},"upToPercent":"до {{value}}%","upToPrice":"до {{price}}","validationErrors":{"firstTwoDigits":"Первые две цифры должны быть 40","minDigitsLength":"Должно быть {{length}} [[{{length}}|цифра|цифры|цифр]]","required":"Обязательное поле","useLatin":"Используйте латиницу"},"walks":{"available":"Ищите в приложении $application_name","description":"Знакомьтесь с городом правильно: аудиогиды без душных фактов из Википедии, а с историями от местных и городскими байками","mainTitle":"Прогулки по городу с озвучкой от «Кубик в кубе»"},"withdrawalError":{"description":"Возможно вы уже вывели его с другого устройства. Проверьте <operationsHistoryButton>историю операций</operationsHistoryButton> или <supportButton>напишите в поддержку.</supportButton> А ещё вы можете заработать новый кэшбэк","earnCashbackButton":"Пойти за кэшбэком","title":"У вас нет кэшбэка"},"withdrawingMoney":{"accountNumber":{"titleBlured":"Номер счёта","titleFocused":"Номер счёта: 20 цифр, первые две — 40"},"balance":"Баланс: <sum></sum>","bankName":{"titleBlured":"Название банка","titleFocused":"Название банка — как в реквизитах"},"bik":{"caption":"Убедитесь, что правильно ввели БИК банка","titleBlured":"БИК банка","titleFocused":"БИК банка — 9 цифр"},"byCardAccount":"По реквизитам банка","byCardNumber":"По номеру банковской карты","byFastPaymentsSystem":"По номеру телефона (система быстрых платежей)","byTinkoff":"По номеру договора Тинькофф","cardHolder":"Имя владельца","cardNumber":"Номер карты","commission":"С комиссией <price /> {{description}}","commissionFree":"Без комиссии","commissionMinFixed":"С комиссией {{price}} ({{percent}}%, мин. {{minFixed}})","corrAccountNumber":{"titleBlured":"Корр.счёт","titleFocused":"Корр.счёт — 20 цифр"},"disabledSubmitButton":"Вывести","fullName":{"placeholder":"Фамилия Имя Отчество","title":"ФИО получателя"},"moneyGone":"Денежка ушла","needMoreMoneyForCashback":"Не хватает ещё <price /> кэшбэка для вывода","newDataDesktop":"+ Добавить новые реквизиты","newDataMobile":"+ Добавить новый","paypalInputTitle":"Телефон или почта","phoneNumber":"Номер телефона","savePaymentData":"Сохранить данные, чтобы ускорить вывод в следующий раз","savedDataDesktop":"Сохранённые данные","savedDataMobile":"Сохранённые","selectNewDataMobile":"Добавить новый","selectSavedDataMobile":"Сохранённые","selectWithdrawMethod":"Выберите способ вывода","submitButton":"Вывести <amount/>","submitButtonForDisabledTab":"Вывести кэшбэк","submitMoneyGone":"Тоси-боси","tinkoffAgreementNumber":"Номер договора","tinkoffAgreementNumberFocused":"Номер договора — 10 цифр","title":"Вывод кэшбэка: <cashback><cashback/>","whenMoneyComeToUser":"Обычно перевод занимает не больше {{maxDays}} [[{{maxDays}}|дня|дней|дней]], <br /> деньги придут на счёт до {{date}}","whereToTransfer":"Куда переводим деньги?","withCommissionFastPayment":"Через систему быстрых платежей с комиссией  <0 /> <1 />","withdrawMinAmountMessage":"Вы можете вывести не меньше <amount/>","withdrawalClarification":"Обычно перевод занимает не больше {{maxDays}} [[{{maxDays}}|дня|дней|дней]], деньги придут на счёт до {{date}}","withdrawalClarificationCommission":"Это итоговая сумма с учётом комиссии.","withdrawalTerms":"Деньги придут на счёт не позже {{maxDate}}, обычно перевод занимает не больше {{maxDays}} [[{{ maxDays }}|дня|дней|дней]]","writeCardNumber":"0000 0000 0000 0000"}},"widget_premium_marketing_pay":{"applePayButton":"Купить с   <applePayIcon /> Pay","emailForm":{"placeholder":"Почта","requiredError":"Без почты никак :(","title":"Нам нужна ваша почта, чтобы прислать электронный чек","wrongFormatError":"Не похоже на почту"},"generalError":{"message":"Мы знаем о ошибке и уже бежим исправлять. Попробуйте обновить страницу или зайти позже","title":"Что-то пошло не так"},"nextBillDateCaption":"Следующее списание {{date}}, отменить его можно в любой момент","promocode":{"activeTitle":"Промокод","caption":"Скидка по промокоду не суммируется с другими скидками","defaultTitle":"У меня есть промокод","submit":"Применить","verifiedTitle":"Промокод {{promocode}}"},"promocodeError":{"cancel":"Применить другой промокод","continue":"Продолжить без промокода","expired":"Промокод утратил свою силу","failed":"Не удалось применить промокод","message":"Промокод больше недействителен. Скорее всего время его действия истекло.<br/>Вы можете попробовать ввести другой промокод или продолжить покупку без него за {{price}}","notExist":"Такого промокода не существует :(","required":"Вы не ввели промокод","title":"Не удалось применить промокод"}},"widget_premium_pay":{"cancellableSubscriptionCaption":"Следующее списание {{date}}, отменить его можно в любой момент","emailForm":{"placeholder":"Почта","requiredError":"Без почты никак :(","title":"Нам нужна ваша почта, чтобы прислать электронный чек","wrongFormatError":"Не похоже на почту"},"promoCode":{"activeTitle":"Промокод","defaultTitle":"У меня есть промокод","submit":"Применить","vierifiedTitle":"Промокод {{promocode}}"},"promoCodeError":{"expired":"Промокод утратил свою силу","failed":"Не удалось применить промокод","notExist":"Такого промокода не существует :(","required":"Вы не ввели промокод"},"screenTitle":{"authorization":"Авторизация","payment":"Оплата","three_ds":"Подтверждение оплаты"}},"widget_premium_payment_status":{"somethingWrong":{"message":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение и обновите страницу или попробуйте позже","retry":"Обновить","title":"Что-то пошло не так"}},"widget_premium_promo":{"aboutPremiumFeatures":{"title":"Кэшбэк, поддержка и гайды"},"travel":{"description":"Путешествия ещё кайфовее","title":"$subscription_name"}},"widget_price_alert_subscription":{"button":{"back":"Назад","configure":"Перенастроить","createAnotherOne":"Создать ещё одну подписку","noNeed":"Не надо","pickDate":"Выбрать дату","subscribe":"Подписаться"},"calendar":{"withoutReturn":"Обратный билет не нужен"},"childrenTooltip":"Подписки с детьми обновляются реже. Чтобы быстрее узнавать об изменении цены, оставьте только взрослых","childrenTooltipWithDroppedChildren":"Подписку можно создать только для взрослых. Так легче следить за ценой — уведомлений будет намного больше","error":{"emailInvalid":"Не похоже на почту","emptyDestinationCity":"Укажите город прибытия","emptyDuration":"Выберите даты","emptyEmail":"Укажите почту","emptyOriginCity":"Укажите город отправления","sameDirection":"Укажите разные города"},"filters":{"datesFlexDay":"Даты ±1 день","directFlightsOnly":"Только прямые рейсы","withLuggage":"С багажом"},"options":{"chooseDays":"Выбрать даты","datesFlexDay":"±1 день","directFlightsOnly":"Прямые","modalHeader":{"durationShort":"Когда","filters":"Выбрать фильтры","flexRange":"На сколько?","passengers":"Пассажиры","return":"Дата возвращения"},"passengerWithCount":"{{count}} [[{{count}}|пассажир|пассажира|пассажиров]]","range":"На {{min}}–{{max}} [[{{max}}|день|дня|дней]]","rangeSingle":"На {{max}} [[{{max}}|день|дня|дней]]","returnEmpty":"Обратно","withLuggage":"С багажом","withoutFilters":"Без фильтров"},"passengers":{"age":{"adults":"Взрослые","children":"Дети"},"description":{"adults":"Старше 12 лет","children":"От 2 до 12 лет"},"flexReminder":"Подписку на гибкие даты можно создать только для 1 взрослого"},"placeholder":{"destination":"Куда","email":"Почта","origin":"Откуда"},"policy":"Авторизуясь, вы соглашаетесь с <0>правилами сервиса</0> и <1>обработки персональных данных</1>.","screen":{"error":{"failed":{"description":{"firstTry":"Попробуйте ещё раз, вводить повторно ничего не придётся","multipleRetries":"Похоже, у нас перегружены серверы. Попробуйте ещё раз через пару минут."},"title":"Подписка не создана"}},"form":{"title":"Подписка на цену"},"login":{"title":"Войдите в профиль, чтобы следить за изменением цен"},"success":{"already_exists":{"description":"Управление подписками доступно в <lnk>разделе подписок</lnk>\nна сайте и в приложении","title":"Такая подписка уже есть"},"created":{"description":"Управление подписками доступно в <lnk>разделе подписок</lnk>\nна сайте и в приложении","title":"Подписка оформлена!"},"without_email_activation":{"description":"Перейдите по ссылке из письма, чтобы начать получать уведомления","title":"Подписка оформлена, осталось подтвердить почту"}},"warning":{"email_already_busy":{"description":"Вы ввели почту, которая привязана к другому профилю. Изменить почту можно в <lnk>настройках профиля</lnk>","title":"Подписка создана на почту {{email}}"}}},"tripDuration":{"durationHeader":"Продолжительность","months":"{{value}} [[{{value}}|месяц|месяца|месяцев]]","priceSwitcher":"Показывать цены в одну сторону","range":{"from":"От {{value}} [[{{value}}|дня|дней|дней]]","to":"До {{value}} [[{{value}}|дня|дней|дней]]"},"ready":"Готово","tabs":{"fixedDates":"Выбрать точные даты","flexDates":"Выбрать гибкие даты"},"titles":{"departure":"Выберите дату отправления","return":"Выберите дату возвращения"}}},"widget_price_chart_button":{"title":"Показать график цен","tooltip":"Сможете наглядно сравнить цены на разные даты"},"widget_price_map":{"checkPrice":"Узнать цену","chooseOrigin":"Выбрать","countryClosed":"Закрыто","countryListSort":"Все страны","countryListSortByOpennes":"сначала открытые","countryListSortByPrice":"по цене","countryOpen":"Открыто","directions":"{{ count }} [[{{ count }}|направление|направления|направлений]]","emptyDatesError":{"buttonText":"Обновить","firstParagraph":"Скорее всего, что-то с интернетом.","secondParagraph":"Проверьте подключение и попробуйте зайти ещё разок. А мы пока посмотрим, не сломалось ли у нас чего","title":"Ничего не загрузилось"},"emptyState":{"chooseDestination":{"buttonText":"Выбрать направление","description":"Выберите конкретный город или аэропорт, и мы найдём все подходящие билеты на нужные вам даты","title":"Ничего не нашли на эти даты"}},"goToAllCountries":"Все страны","listView":"Список","mapView":"Карта","noOriginWarning":"Выберите город вылета, чтобы увидеть карту","noPriceButton":"Изменить город вылета","noPriceText":"Попробуйте поискать рейсы из чуть более крупного города неподалёку, и подходящие билеты наверняка найдутся","noPriceTitle":"Похоже, из этого города мало куда можно улететь","noPricesWarning":"Ничего не нашли. Попробуйте изменить даты или город вылета","showWholeWorld":"Показать весь мир"},"widget_price_map_promo":{"anywhere":"Куда угодно","followLink":"Посмотреть","title":"Куда можно полететь?"},"widget_prices":{"allPrices":"Все предложения","allTickets":"Показать все билеты","badge":{"afternoonEvening":"Туда днём, обратно вечером","afternoonMorning":"Туда днём, обратно утром","cheapest":"Самый дешёвый","cheapestConvenient":"Самый дешёвый удобный","cheapestDirect":"Самый дешёвый прямой","eveningAfternoon":"Туда вечером, обратно днём","eveningMorning":"Туда вечером, обратно утром","fullDays2":"2 полных дня","fullDays3":"3 полных дня","fullDays4":"4 полных дня","morningAfternoon":"Туда утром, обратно днём","nextWeekend":"Следующие выходные","thisWeekend":"Эти выходные"},"bestPrices":"Лучшие цены","departureDay":{"allDays":"Все дни","departureOn":"Вылет в: {{ days }}","label":"День вылета","ok":"OK"},"economy":"эконом","emptyState":{"chooseExactDates":{"buttonText":"Выбрать точные даты","title":"Билетов на выходные нет. Выберите точные даты и поищите ещё разок — наверняка найдутся варианты"},"chooseOtherDates":{"buttonText":"Выбрать другие даты","title":"На выбранные даты билетов нет, но можно вылететь на день раньше или вернуться днём позже"},"fillDates":{"buttonText":"Выбрать точные даты","title":"Билетов на плавающие даты нет. Поменяйте их на точные даты и поищите ещё разок — наверняка найдутся варианты"},"startSearch":{"buttonText":"Начать поиск","title":"Не получилось загрузить билеты автоматически. Начните поиск, чтобы увидеть все подходящие варианты"}},"foundAt":"Найдено {{ at }} назад","loadingAllPrices":"Загружаем все предложения","noResults":"По вашим фильтрам ничего не найдено","passengers":"{{ count }} [[{{ count }}|пассажир|пассажира|пассажиров]]","select":"Выбрать","suitableTickets":"Подходящие билеты","weekends":{"description":"Нашли билеты с удобным вылетом туда и обратно, чтобы вы отдохнули подольше и всё-всё успели","emptyState":{"extraDatesTitle":"Нашли билеты на соседние даты"},"extraDatesTitle":"Билеты на соседние даты","sortOptions":{"departureDate":"По дате вылета","popupTitle":"Сортировка","price":"По цене"},"title":"Билеты на выходные"}},"widget_product_hunt_badge":{"promoText":"<bold>$subscription_name</bold> <br />за <bold>$44.99</bold> <stroke>$99.99</stroke> <br />вместе с промокодом"},"widget_profile_email_alerts":{"mail_confirmed_expired":{"button_main":"Хорошо","description":"Ссылка в письме устарела. Прислали ещё одно письмо на почту","title":"Не смогли подтвердить почту"},"mail_confirmed_failed":{"button_main":"Хорошо","description":"Мы прислали ещё одно письмо на почту, перейдите по ссылке в нём","title":"Не смогли подтвердить почту"},"mail_confirmed_success":{"button_main":"Хорошо","description":"Теперь мы будем присылать письма на почту {{ email }}","title":"Почта подтверждена"},"snackbar":{"commonError":"Что-то пошло не так. Попробуйте ещё раз","subscription_deleted_failed":"Подписка удалена","unsubscribe_marketing_failed":"Вы отписались от рассылок","unsubscribe_marketing_success":"Продолжим присылать письма про тревел","unsubscribe_premium_failed":"Вы отписались от новостей про $subscription_name_short","unsubscribe_premium_success":"Продолжим присылать письма с новостями про $subscription_name_short"},"subscription_deleted_failed":{"button_main":"Удалить подписку","button_secondary":"Закрыть","description":"Что-то пошло не так. Попробуйте ещё раз через несколько минут","title":"Не смогли удалить подписку"},"subscription_deleted_success":{"button_main":"Закрыть","description":"И больше не будем присылать вам уведомления об изменениях цены на билеты {{ city }}","easter_egg":"Вы чево наделали...","title":"Удалили подписку"},"unsubscribe_marketing_failed":{"button_main":"Попробовать ещё раз","button_secondary":"Закрыть","description":"Что-то пошло не так. Попробуйте ещё раз через несколько минут","title":"Не смогли отписать вас от рассылок"},"unsubscribe_marketing_success":{"button_main":"Закрыть","button_secondary":"Вернуть","description":"Мы больше не будем присылать письма про тревел","title":"Эх. Вы отписались от рассылок"},"unsubscribe_premium_failed":{"button_main":"Попробовать ещё раз","button_secondary":"Закрыть","description":"Что-то пошло не так. Попробуйте ещё раз через несколько минут","title":"Не смогли отписать вас от новостей про $subscription_name_short"},"unsubscribe_premium_success":{"button_main":"Закрыть","button_secondary":"Вернуть","description":"Мы больше не будем присылать письма с новыми прогулками и партнёрами","title":"Вы отписались от новостей про $subscription_name_short"}},"widget_search_expired":{"description":"Цены на билеты меняются около 10 раз в день. Обновите поиск, чтобы увидеть точные цены"},"widget_search_results":{"paging":{"buttonTitle":"Показать ещё {{ticketsCount}} [[{{ticketsCount}}|билет|билета|билетов]]","expiredButtonTitle":{"primary":"Обновить поиск","secondary":"Цены могли устареть"}}},"widget_seo_city_city_general_info":{"averageDuration":"Среднее время перелёта","averagePrice":"Средняя стоимость на авиабилеты","directFlightsAmount":"Количество рейсов в неделю","distance":"Расстояние","ealiestDeparture":"Самый ранний вылет из города","everyDay":"Ежедневно","latestDeparture":"Самый поздний вылет из города","lowestPrice":"Самая низкая цена","timeZoneDiff":"Текущая разница во времени","title":"Общая информация о перелёте {{originName}} – {{destinationName}} ({{originIata}} — {{destinationIata}})"},"widget_seo_city_city_tickets":{"chooseDates":"Выбрать даты","description":"Самый простой способ оказаться в месте назначения — прямой перелёт. Прямые рейсы из {{originName}} {{destinationName}} выполняют следующие авиакомпании:","everyDay":"ежедневно","price":"от {{price}}","title":"Расписание прямых рейсов из {{originName}} {{destinationName}}"},"widget_seo_from_city_airlines":{"actions":{"collapse":"Свернуть","expand":"ещё {{count}}"},"description":"Все авиакомпании, летающие по прямым маршрутам из {{cityName}}:","title":"Авиакомпании, летающие из {{cityName}}"},"widget_seo_from_city_seo_text":{"actions":{"less":"Скрыть текст","more":"Читать дальше"},"advice":"$application_name советует купить авиабилеты из {{cityName}} заранее, чтобы вы могли выбирать условия перелёта, ориентируясь на свои пожелания и финансовые возможности.","description":"$application_name сравнивает цены на авиабилеты из {{cityName}} в 2500 городов по 728 авиакомпаниям и сотням мировых тревелсайтов. Мы находим самые дешёвые билеты на самолёт из {{cityName}} без наценки и комиссии.","directAirlines":"Прямые рейсы из {{cityName}} выполняются {{directAirlinesCount}} [[{{directAirlinesCount}}|авиакомпанией|авиакомпаниями|авиакомпаниями]]. Больше всего рейсов выполняет авиакомпания {{topDirectAirline}}. Прямые рейсы из {{cityName}} {{countryName}} выполняют авиакомпании: {{directAirlines, list}}.","nonDirectAirlines":"Рейсы с пересадкой, как правило, дешевле. Такими рейсами летают {{nonDirectAirlines, list}}.","popularDirections":{"itemWithPrice":"{{fromCityName}} — {{toCityName}}: <strong>{{price}}</strong>","itemWithoutPrice":"{{fromCityName}} — {{toCityName}}","toMarketCountry":{"title":"Популярные направления из {{cityName}} {{marketCountryName}}:"},"toOtherCountries":{"title":"Популярные направления из {{cityName}} в другие страны:"}},"priceChange":"В зависимости от количества дней, оставшихся до вылета, цена билета на самолёт из {{cityName}} может измениться более чем на {{priceChangeChanceInPercent}}%.","season":"Чаще всего билеты из {{cityName}} берут на {{popularMonths, list}}. Низким сезоном для покупки билетов считается {{unpopularMonths, list}}.","title":"Дешёвые авиабилеты из {{cityName}}"},"widget_seo_who_we_are":{"actions":{"expand":"Читать полностью"},"description":{"other":"$application_name — лучший поисковик авиабилетов. Мы сравниваем все доступные варианты перелётов по вашему запросу, а потом направляем вас для покупки на официальные сайты авиакомпаний и агентств.","russia":"$application_name — крупнейший в России сервис по поиску и покупке авиабилетов. Здесь можно найти рейсы 728 авиакомпаний и улететь в 220 стран. А ещё у нас есть отели, нескучные путеводители и подборки дешёвых билетов прямо из вашего города."},"footer":"Стоимость авиабилета, которую вы видите на $application_name — финальная. Мы убрали все скрытые услуги и галочки.","onboarding":{"title":"Ответы на популярные вопросы:"},"title":{"other":"Мы не продаём авиабилеты, а помогаем найти самые дешёвые. Бесплатно.","russia":"Помогаем сравнить билеты и купить самый дешёвый"}},"widget_side_filters":{"loading":"Загружаем фильтры"},"widget_tours":{"allToursLink":"Посмотреть все авторские туры","allToursLinkMobile":"Ещё","card":{"datesAmount":"и ещё {{ count }} [[{{ count }}|дата|даты|дат]]","imageDescription":"Изображение для {{ name }}","pricePeriod":"<formattedPrice></formattedPrice> за {{ count }} [[{{ count }}|день|дня|дней]]"},"heading":"Туры-приключения","promoBlock":{"cta":"Узнать подробнее","description":"Это полностью спланированное путешествие в небольшой группе единомышленников: такая поездка получается дешевле, безопаснее и интереснее, чем самостоятельная","descriptionMobile":"Полностью спланированное путешествие в небольшой группе единомышленников"},"promoBlockModal":{"expert":{"description":"Тревел-эксперт уже обо всём позаботился: составил интересную программу, продумал все детали. Он знает самые топовые маршруты и свои «фишечки» каждого места, так что вы сможете узнать местность совсем с другой стороны. Каждая поездка уникальна и подстраивается под сезон и под желания группы","title":"Вы доверяете организацию своего путешествия профессионалам"},"flight":{"title":"Вам остаётся только добраться до места старта, организаторы не оплачивают перелёт из вашего города"},"group":{"description":"Даже если вы индивидуальный путешественник, вам будет комфортно в небольшой группе единомышленников. Некоторые из них уже в первые дни поездки начинают общаться и продолжают ездить вместе","title":"Уютная группа единомышленников (1-25 человек)"},"stay":{"description":"По умолчанию в стоимость каждого тура включена программа и проживание. Что ещё включено в стоимость отдельного тура, можно узнать в его описании в разделе «Что включено»","title":"В стоимость включено всё для комфортного отдыха"},"title":"Что такое туры-приключения"}},"widget_transfers":{"allItems":"Смотреть все тарифы","allItemsMobile":"Все тарифы","allItemsModal":{"additionalOptionChildSeat":"Детские кресла","additionalOptionStop":"Остановка по пути","additionalOptionWait":"Дополнительный час ожидания","additionalOptionWater":"Питьевая вода","additionalOptionsDescription":"Всё, что нужно, можно добавить на следующем шаге","benefitsCancel":"Бесплатная отмена за 24 часа","benefitsWait":"15 минут ожидания включены в стоимость","benefitsWaitAirport":"Час ожидания включён в стоимость","title":"Выбор трансфера"},"badges":{"distance":"~ {{ distance }} км","duration":"~ {{ formattedTime }} в пути","meet":"Встретят с табличкой","shortCancel":"Бесплатная отмена за 5 часов","shortCancelMobile":"Бесплатная отмена за 5 ч"},"card":{"imageDescription":"Изображение для категории автомобилей {{ name }}","luggageAmount":" {{ count }} [[{{ count }}|багаж|багажа|багажей]]","peopleAmount":" {{ count }} [[{{ count }}|человек|человека|человек]]","price":"от <formattedPrice></formattedPrice>"},"errorState":{"description":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение или попробуйте позже","title":"Что-то пошло не так"},"heading":"Трансфер до отеля","searchField":{"emptyMessage":"Введите город, район, аэропорт или вокзал","errorMessage":"Выберите город, район, аэропорт или вокзал. Точный адрес можно ввести на следующем шаге.","fromTitle":"Откуда: город / район / аэропорт / вокзал","notFoundOptionText":"Не нашли такого направления","toTitle":"Куда: город / район / аэропорт / вокзал"}},"widget_travel_map":{"backToPlacesList":"Список","errorState":{"description":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение или попробуйте позже","reload":"Перезагрузить","title":"Что-то пошло не так"},"heading":"Карта {{ place }}","hotels":{"book":"Забронировать","priceForPeriod":"за 1 ночь","priceFrom":"от"},"linkCopied":"Сохранили ссылку на место","modal":{"allLayersFilterTitle":"Все места","backToDistrict":"Назад к району","imageAuthorInfo":"<emoji>📷</emoji> Фото <ref>{{authorName}}</ref>","layersTitle":"Места на карте","mobileSwitchToList":"Список ({{ amount }})","placesTitle":"Список мест","seeAllPlaces":"Ещё"},"paywallModal":{"AS":{"button":"Как их увидеть","title":"Ещё больше классных локаций, бережно выбранных для вас местными"},"WA":{"button":"Как их увидеть","title":"Откройте больше невероятных мест, бережно и с любовью отобранных для вас местными"}},"pinImageAlt":"Изображение для {{ place }}","unavailableContentAlert":"Этот контент недоступен","wrongMapParamsAlertButton":"Ок"},"widget_travel_map_cities":{"description":"Узнайте город за минуту. Подскажем, где жить, куда сходить и что посмотреть","guide_main":{"description":"Путеводители без лишних слов и скучных фактов","heading":"Короче"},"heading":"Короче о городах","promo_description":"Местные рассказывают, где в их городах лучше всего отдыхать, куда ходить и что смотреть","promo_heading":"Куда поехать в отпуск","search_title":"Куда отправимся?"},"widget_travel_map_entrypoint":{"backToPlacesList":"Список","errorState":{"description":"Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение или попробуйте позже","reload":"Обновить","title":"Что-то пошло не так"},"heading":"Карта {{ place }}","instagram":"Инстаграм","more":"Ещё","neighborhoodsMapTitle":"Районы","popular":"Известное"},"widget_travel_map_promo":{"subtitle":"Узнайте город за минуту","title":"Короче о городах"},"widget_travel_restrictions":{"additionalRequirements":"Дополнительные требования","closedCountryRule1":"гражданство или ВНЖ;","closedCountryRule2":"рабочая, студенческая или другая долгосрочная виза;","closedCountryRule3":"документы, подтверждающие лечение в этой стране;","closedCountryRule4":"дипломатический статус;","closedCountryWarning":"Условия для туристов и пассажиров, приезжающих с другими целями, часто различаются. Уточняйте правила на сайте консульства или министерства иностранных дел той страны, куда вы летите, если у вас есть:","covidCertificate":"Тест на COVID-19","covidCertificateAfter":"Тест на COVID-19 после прилета","covidCertificateBefore":"Тест на COVID-19 до прилета","covidInsurance":"Страховка от COVID-19","entryRules":"Правила въезда","feedback":{"close":"Закрыть","confirm":"Добро","description":"Расскажите, если вы заметили неточность в тексте об ограничениях. Мы не сможем вам ответить, но обязательно проверим всю информацию и внесём изменения.","errorDescription":"Мы уже знаем о проблеме и направили все силы на её устранение.","errorTitle":"Что-то пошло не так","imageDescription":"Кабанчик с сердечком","placeholder":"Ваше сообщение","reportText":"Сообщить о неточности","requiredError":"Обязательное поле","submit":"Отправить","success":"Вопросик на контроле","thanks":"Спасибо!","title":"Напишите нам"},"internalRestrictions":"Ограничения внутри страны","internalRules":"Правила внутри страны","masks":"Ношение масок","noQuarantineOnEntry":"Карантин не требуется","notRequired":"Не требуется","premiumPromo":{"common":"Тревел-консультанты $subscription_name помогут выбрать идеальный билет и спланировать поездку","covidInsurance":"Страховка будет на 15% дешевле с кэшбэком от $subscription_name"},"quarantineOnEntry":"Карантин по прибытии","required":"Требуется","restaurants":"Рестораны и бары","restaurantsClosed":"Работают с ограничениями","restaurantsOpen":"Работают в обычном режиме","updateInformation":"Информация обновляется в течение рабочего дня после поступления официальных новостей","vaccination":"Вакцина от COVID-19","visa":"Виза в страну","visaOnArrival":"Требуется по прибытии","visaSchengen":"Требуется Шенгенская виза"},"widget_usedesk_dialog":{"button":"Пожалуйста","description":"Спасибо, мы пометили ваш вопрос как «решённый»","title":"Вопрос решён"},"widget_user_account_documents":{"titles":{"documentsList":"Сохранённые"}},"widget_user_account_notifications":{"captions":{"marketing":"Статьи, скидки, распродажи и конкурсы","more":"Всё про кэшбэк-партнёров и тревел‑консультации","myCashback":"Новые кэшбэк-сервисы"},"emailAlert":{"button":{"noEmail":"Указать почту","notActive":"Перейти"},"captions":{"noEmail":"Настроить получение писем не получится, если мы не узнаем вашу почту","notActive":"Пока вы не подтвердите новую почту, мы присылаем письма на {{ activeEmail }}"},"titles":{"noEmail":"Укажите почту","notActive":"Подтвердите почту"}},"mailingType":{"email":"Письма на почту","mob_push":"Уведомления в приложении"},"mailingTypeCaptions":{"mob_push":"Войдите в профиль в приложении $application_name таким же способом, что и на сайте"},"titles":{"marketing":"Новостная рассылка","more":"Новости про $subscription_name_short","price_alert":"Подписки на изменение цен","travel_restriction":"Подписки на границы"}},"widget_user_account_settings":{"caption":{"regional":"Нужны для отображения подходящих билетов и правил въезда в страну"},"common":{"cancel":"Отмена","citizenship":"Гражданство","close":"Закрыть","country":"Страна","currency":"Валюта","email":"Почта","loggedVia":"Вы вошли через","logout":"Выйти из профиля","name":"Имя","nothingFound":"Ничего не найдено","ok":"Хорошо","origin":"Город проживания","socials":{"apple":"Apple","facebook":"Фейсбук","google":"Google","line":"Line","mail_ru":"Mail.ru","ok":"Одноклассники","twitter":"Твиттер","vk":"ВКонтакте","wechat":"WeChat","yandex":"Яндекс"},"startTypingCityName":"Начните вводить название города"},"delete":{"error":{"message":"Не получилось удалить профиль. Возможно, пропал интернет, или у нас что-то сломалось. Проверьте подключение или попробуйте позже"},"hasMoreSubscription":{"message":{"cashback":"Если у вас есть накопленный кэшбэк, его нельзя будет вывести или перенести в другой профиль","more":"Перенести сервис в другой профиль, вывести кэшбэк или вернуть деньги за подписку не получится","plus":"Его нельзя будет вывести себе на карту или перенести в другой профиль"},"title":{"cashback":"Вы потеряете доступ к кэшбэку","more":"Вы потеряете доступ к $subscription_name","plus":"Вы потеряете доступ к $subscription_name"}},"hasPaidContent":{"message":"Перенести их на другой профиль или вернуть деньги после удаления не получится","title":"Вы потеряете доступ к купленным местам и прогулкам"},"header":"Удаление профиля","listItems":{"passengers":"Сохранённые данные пассажиров","purchasedContent":"Купленный контент","searchHistory":"История поисков","subscriptions":"Подписки на цену"},"listTitle":"Вместе с профилем пропадут:","snackbar":{"message":"Профиль пользователя удалён"},"submit":"Удалить профиль","title":"Удалённый профиль нельзя восстановить"},"email":{"activatedInAnotherAccount":"Эта почта подтверждена в другом профиле","activatedInAnotherAccountCaption":"Укажите другую почту или перезайдите с помощью социальной сети, к которой привязана введённая почта","needActivate":"Мы отправили вам на почту письмо для активации","noEmail":"Укажите почту, чтобы получать на неё уведомления о снижении цен","notActivated":"Почта не подтверждена. Мы отправили вам на почту письмо для активации","notValid":"Похоже, почта написана неверно","sendAgain":"Отправить повторно","sendToOldEmail":"До подтверждения новой почты присылаем письма на {{ email }}","tooltip":"Присылаем письма на эту почту"},"informers":{"content":{"citizenship":{"forManyCountries":"Доступно для {{countriesList}} и {{countryName}}","forOneCountry":"Доступно для {{countryName}}"},"region":"Указывайте ту страну, в которой вы проживаете большую часть времени"},"title":{"citizenship":"Гражданство нужно для показа ограничений на въезд в другие страны","region":"Страна влияет на поиск билетов"}},"paymentOptions":{"placeholder":"Способ оплаты","ru_card":"Российская карта","ru_card|ww_card":"Российская и зарубежная карты","ww_card":"Зарубежная карта"},"priceDisplay":{"avia":{"options":{"forAll":"Цены за всех пассажиров","forOne":"Цены за 1 пассажира"},"title":"Авиабилеты"},"hotels":{"options":{"forAll":"Цены за все ночи","forOne":"Цены за 1 ночь"},"title":"Отели"}},"privacy":{"data":{"deleteProfile":"Удалить профиль","manageCookies":"Настроить передачу данных","personalData":"Настройки персональных данных","reportWithMyData":{"creating":{"description":"Отправим на почту {{ activeEmail }} в течение 2 дней","title":"Создаём отчёт..."},"default":"Отчёт с моими данными"},"title":"Данные"},"documents":{"cookiesPolicy":"Политика файлов cookie","licenseAgreement":"Лицензионное соглашение","offer":"Оферта","paidContent":"Условия продукта «Короче»","privacyPolicy":"Политика конфиденциальности","title":"Документы"},"emails":{"government":"Для государственных служащих: <email>legal@aviasales.com</email>","personalData":"Для вопросов по использованию персональных данных: <email>legal@aviasales.com</email>"}},"report":{"content":"Мы пришлём файл со сведениями о вашем профиле на почту {{ activeEmail }}. Вы можете изменить её в <lnk>личных данных</lnk>","header":"Отчёт с моими данными","snackbar":{"actionButtonLabel":"Указать почту","message":"Укажите почту, чтобы мы могли прислать сведения о вашем профиле"},"submit":"Прислать отчёт"},"snackbar":{"successMessage":"Изменения сохранены","warningMessage":"Что-то пошло не так. Изменения не сохранены"},"title":{"personalData":"Личные данные","priceDisplay":"Отображение цен","privacy":"Конфиденциальность","regional":"Региональные"}},"widget_user_account_subscriptions":{"common":{"createNewSubscription":"Создать новую","title":"Подписки","tryAgainLater":"Попробуйте ещё раз через пару минут"},"emptyState":{"createNewSubscription":"Создать подписку","createSubscriptionFromSearch":"Создать {{count}} [[{{count}}|подписку|подписки|подписок]]","description":"Пришлём уведомление, когда цена изменится. Подпишитесь во время поиска билетов или создайте подписку с нуля","header":"Поймаем самую низкую цену","login":"Войти в профиль","pax":"чел"},"errorState":{"title":"Подписки не загрузились"},"notification_channel_state":{"channel":{"all":"Пуши и письма","email":"Только письма","none":"Не присылаем","push":"Только пуши"},"notification":{"inactive_email":"Подтвердите почту, чтобы получать новости по подпискам в письмах","no_email":"Укажите почту, чтобы получать новости по подпискам в письмах"},"title":"Уведомления"},"outdatedHeader":{"deleteAll":"Удалить все","subtitle":"Хранятся 30 дней","title":"Устаревшие"},"snackbar":{"error":{"create":{"message":"Не получилось создать подписку. Попробуйте ещё раз через пару минут"},"remove":{"message":"Не получилось удалить подписку. Попробуйте ещё раз через пару минут"}},"success":{"removed":{"actionButtonLabel":"Вернуть","message":{"default":"Подписка удалена","direction":"Подписка на точные даты удалена","directionFlex":"Удалили подписку с соседними датами","flexible":"Удалили подписку на месяцы","ticket":"Удалили подписку на билет без багажа","ticketBaggage":"Удалили подписку на билет с багажом"}},"removedOutdated":{"message":"Устаревшие подписки удалены"}}}},"widget_usercom_login_popup":{"subtitle":"Чтобы обращаться в поддержку и следить за ценами на нужные билеты","title":"Войдите в профиль"},"widget_usercom_profile_layout":{"indexPage":{"buttons":{"login":"Войти в профиль","logout":"Выйти из профиля"}},"loginForm":{"subtitle":{"desktop":"Доступ к поддержке и подпискам на цены","mobile":"Чтобы обращаться в поддержку и следить за ценами на нужные билеты"},"title":{"desktop":"Ваш профиль","mobile":"Войдите в профиль"}},"pageNotFound":{"description":"Похоже, вы допустили опечатку, набирая адрес, или воспользовались неисправной ссылкой. Чтобы найти нужные авиабилеты, воспользуйтесь формой поиска на главной странице.","title":"Такой страницы у нас нет"},"profile":"Профиль"},"widget_weekends":{"emptyState":{"chooseDestination":{"buttonText":"Выбрать","description":"Выберите город или страну прилёта, чтобы увидеть цены на билеты"},"emptyPrices":{"buttonText":"Изменить город вылета","description":"Попробуйте поискать рейсы из чуть более крупного города неподалёку, и подходящие билеты наверняка найдутся","title":"Похоже, из этого города мало куда можно улететь"},"networkError":{"buttonText":"Обновить","description":"Скорее всего, что-то с интернетом.<br/> Проверьте подключение и попробуйте зайти ещё разок. А мы пока посмотрим, не сломалось ли у нас чего","title":"Ничего не загрузилось"}},"pickCity":"Для поиска билетов выберите конкретный город","priceFrom":"от {{price}}","subtitle":"Билеты для тех кто не хочет на дачу: удобный вылет и короткие пересадки","title":"Куда улететь на выходные","tripDuration":"{{duration}} в пути"}},"-4icimb":{"skeletons":{"yyyyMd":"dd.MM.y G","GyMMMEd":"E, d MMM y 'г'. G","GyMMMd":"d MMM y 'г'. G","MMMEd":"ccc, d MMM","MMMMd":"d MMMM","yyyyMMMM":"LLLL y 'г'. G","MMM":"LLL","Hm":"HH:mm","MMMd":"d MMM","hm":"h:mm a"},"dateFields":{"minuteNarrow":{"displayName":"мин"},"minuteShort":{"displayName":"мин."},"dayShort":{"displayName":"дн."},"hourShort":{"displayName":"ч"}},"unitFields":{"long":{"mass-metric-ton":{"unitPattern-count-one":"{0} тонна","unitPattern-count-few":"{0} тонны","unitPattern-count-many":"{0} тонн","unitPattern-count-other":"{0} тонны"}}},"dateFnsLocale":{"code":"ru","formatLong":{},"localize":{},"match":{},"options":{"weekStartsOn":1,"firstWeekContainsDate":1}},"locale":"ru-RU"},"486fbi":"/routes/ufa/evn","k1vd4f":"/routes/ufa/evn","vjbyzi":"","-vhv1is":"/routes/ufa/evn","vblab|ff.page.$stale":false,"fx7sjn":{},"-5on7mp":null,"-xvztsu":null,"ygf129|-bv1hi3":false,"$flags":{"usc-exp-marketChangeOfferForeigners":{"enabled":true,"payload":{"currencies":["byn","azn","kzt","kgs","tjs","uzs","usd","eur"],"markets":["by","az","kg","kz","tj","uz","ge"]}},"ex-feat-flexCalendarConfig":{"config":{"flexibleDates":true,"onlyPopularDestinations":true,"tripPeriod":true,"weekends":true},"enabled":true},"wb-feat-faqEmergencyBlock":{"items":[]},"ex-exp-webTabbar":{"enabled":true,"place":"form"},"guides-feat-paidContentWeb":{"enabled":true},"usc-feat-availablePaymentMethods":{"methods":["ru_card","ru_card|ww_card"]},"serp-feat-ad":{"enabled":true,"placements":{"bottom":{"mobile":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4716212"}},{"bidder":"myTarget","params":{"placementId":"1408815"}},{"bidder":"mediasniper","params":{"placementId":"850004"}},{"bidder":"buzzoola","params":{"placementId":"1254105"}},{"bidder":"sape","params":{"placementId":"862367"}}],"sizes":[[320,50],[320,100]]},"ownerId":327101,"params":{"p1":"cyrcj","p2":"ilvj","puid1":""},"type":"adFox"}],"visible":true}},"directionscreen":{"desktop":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4496149"}},{"bidder":"myTarget","params":{"placementId":"1025660"}},{"bidder":"buzzoola","params":{"placementId":"1246242"}},{"bidder":"mediasniper","params":{"placementId":"850002"}},{"bidder":"sape","params":{"placementId":"849188"}}],"sizes":[[728,90],[800,90]]},"ownerId":327101,"params":{"p1":"csmuh","p2":"hmxk","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4506915"}},{"bidder":"myTarget","params":{"placementId":"1431605"}},{"bidder":"buzzoola","params":{"placementId":"1246243"}},{"bidder":"mediasniper","params":{"placementId":"850003"}},{"bidder":"sape","params":{"placementId":"849189"}}],"sizes":[[320,50],[320,100]]},"ownerId":327101,"params":{"p1":"ctjgx","p2":"hoxp","puid1":""},"type":"adFox"}],"visible":true}},"main_marketing":{"android":{"slots":[{"ownerId":327101,"params":{"adUnitID":"R-M-1699566-4"},"type":"adFox"}],"visible":true},"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"cxxkd","p2":"ihrl","puid1":""},"type":"adFox"}],"visible":true},"ios":{"slots":[{"ownerId":327101,"params":{"adUnitID":"R-M-1699415-4"},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cxxki","p2":"ihro","puid1":""},"type":"adFox"}],"visible":true}},"main_marketing_ab":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"cykza","p2":"ikrc","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cykzb","p2":"ikrd","puid1":""},"type":"adFox"}],"visible":true}},"skyscraper":{"desktop":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4489418"}},{"bidder":"myTarget","params":{"placementId":"997846"}},{"bidder":"buzzoola","params":{"placementId":"1246244"}},{"bidder":"mediasniper","params":{"placementId":"850001"}},{"bidder":"sape","params":{"placementId":"849187"}}],"sizes":[[160,600]]},"ownerId":327101,"params":{"p1":"cwffi","p2":"hxhq","puid1":""},"type":"adFox"}],"visible":true}},"third":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"ctdyz","p2":"honk","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cwkkv","p2":"hybx","puid1":""},"type":"adFox"}],"visible":true}},"top":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"ctbnp","p2":"hoia","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"ctcbd","p2":"hoib","puid1":""},"type":"adFox"}],"visible":true}}}},"serp-exp-nativeSharing":{"enabled":true},"avs-feat-ticketShow":{"delay":1000},"usc-feat-faqFeedbackForm":{"enabled":true},"avs-exp-downgradedGates":{"enabled":true,"gatesId":[227,218,243],"isSortTicketsConsideringDowngrade":false},"serp-feat-ticketSharingMethods":{"list":["whatsapp","telegram"]},"serp-exp-aa3":false,"serp-exp-hotelsMainAdPlacement":{"enabled":true},"ex-exp-flexibleCalendar":"treatment","serp-exp-hotelsMapResultsSync":{"enabled":true,"infiniteScrollEnabled":false},"mon-feat-dsWebAsBanner":{"enabled":true},"guides-feat-CTAButtonsWeb":{"enabled":true},"asb-feat-selene-migration":{"analytics":"on","contacts":"off","logger":"on"},"serp-exp-travelRestrictions":true,"avs-exp-foreignCards":{"defaultUsedPaymentOptions":[],"directions":[["INT","INT"]],"enabled":true,"informerSuspensionSearchCount":10,"informerSuspensionTime":2592000,"informerText":{"en":"Want us to show you tickets you can buy using non-Russian cards?","ru":"Показать билеты, которые можно оплатить зарубежной картой?"},"placements":["autosearch","results"]},"serp-exp-bletProposalsModal":{"enabled":true},"ex-feat-nationalParksAutocomplete":true,"avs-feat-subscription":true,"prem-feat-hide-apple-google-pay":"hide","avs-feat-appLinks":{"android":{"host":"https://app.appsflyer.com/ru.aviasales","params":{"c":"homepage","pid":"avaisales"}},"ios":{"host":"https://app.appsflyer.com/id498958864","params":{"c":"homepage","pid":"avaisales"}}},"avs-feat-ad":{"enabled":true,"placements":{"bottom":{"mobile":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4716212"}},{"bidder":"myTarget","params":{"placementId":"1408815"}},{"bidder":"mediasniper","params":{"placementId":"850004"}},{"bidder":"buzzoola","params":{"placementId":"1254105"}},{"bidder":"sape","params":{"placementId":"862367"}}],"sizes":[[320,50],[320,100]]},"ownerId":327101,"params":{"p1":"cyrcj","p2":"ilvj","puid1":""},"type":"adFox"}],"visible":true}},"directionscreen":{"desktop":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4496149"}},{"bidder":"myTarget","params":{"placementId":"1025660"}},{"bidder":"buzzoola","params":{"placementId":"1246242"}},{"bidder":"mediasniper","params":{"placementId":"850002"}},{"bidder":"sape","params":{"placementId":"849188"}}],"sizes":[[728,90],[800,90]]},"ownerId":327101,"params":{"p1":"csmuh","p2":"hmxk","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4506915"}},{"bidder":"myTarget","params":{"placementId":"1431605"}},{"bidder":"buzzoola","params":{"placementId":"1246243"}},{"bidder":"mediasniper","params":{"placementId":"850003"}},{"bidder":"sape","params":{"placementId":"849189"}}],"sizes":[[320,50],[320,100]]},"ownerId":327101,"params":{"p1":"ctjgx","p2":"hoxp","puid1":""},"type":"adFox"}],"visible":true}},"hotels_main_first":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"dabwh","p2":"ihrl","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"dabwj","p2":"ihro","puid1":""},"type":"adFox"}],"visible":true}},"hotels_main_second":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"dabwi","p2":"ihrl","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"dabwk","p2":"ihro","puid1":""},"type":"adFox"}],"visible":true}},"main_marketing":{"android":{"slots":[{"ownerId":327101,"params":{"adUnitID":"R-M-1699566-4"},"type":"adFox"}],"visible":true},"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"cxxkd","p2":"ihrl","puid1":""},"type":"adFox"}],"visible":true},"ios":{"slots":[{"ownerId":327101,"params":{"adUnitID":"R-M-1699415-4"},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cxxki","p2":"ihro","puid1":""},"type":"adFox"}],"visible":true}},"main_marketing_ab":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"cykza","p2":"ikrc","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cykzb","p2":"ikrd","puid1":""},"type":"adFox"}],"visible":true}},"skyscraper":{"desktop":{"slots":[{"adUnit":{"bids":[{"bidder":"betweenDigital","params":{"placementId":"4489418"}},{"bidder":"myTarget","params":{"placementId":"997846"}},{"bidder":"buzzoola","params":{"placementId":"1246244"}},{"bidder":"mediasniper","params":{"placementId":"850001"}},{"bidder":"sape","params":{"placementId":"849187"}}],"sizes":[[160,600]]},"ownerId":327101,"params":{"p1":"cqyym","p2":"gsxe","puid1":""},"type":"adFox"}],"visible":true}},"third":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"ctdyz","p2":"honk","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"cwkkv","p2":"hybx","puid1":""},"type":"adFox"}],"visible":true}},"top":{"desktop":{"slots":[{"ownerId":327101,"params":{"p1":"ctbnp","p2":"hoia","puid1":""},"type":"adFox"}],"visible":true},"mobile":{"slots":[{"ownerId":327101,"params":{"p1":"ctcbd","p2":"hoib","puid1":""},"type":"adFox"}],"visible":true}}}},"serp-exp-softFilters":true,"usc-exp-showSupportLinkNavbar":{"enabled":true},"avs-feat-userProfile":true,"usc-exp-priceAlertSubscriptionOnExplore":"treatment","serp-exp-aa2":true,"guides-feat-buttonAboveForm":{"enabled":true},"serp-feat-hotelsResults":{"activateMapOnStart":true,"mapRequestDebounce":1000,"pageSize":20,"pollingInterval":2000,"pollingTimeout":60000,"viewedBadgeEnabled":true},"avs-feat-mainAdSenseBanner":{"content":[{"data-size":"320x50,1024x768:990x90,1024x768:970x90,800x600:728x90,600x420:468x60,320x568:320x50","data-slot":"/68258039/990x90_content_AS","data-zoneid":"926726","id":"div-gpt-ad-1501739862776-0"}],"main":[{"data-fallback":"div-gpt-ad-1506423747252-0","data-size":"1024x768:990x90,1024x768:970x90,800x600:728x90,600x420:468x60,320x568:320x50","data-slot":"/68258039/990х90-ASnew","data-zoneid":"{\"970x90\":\"926726\", \"728x90\":\"1164711\", \"468x60\":\"1250731\", \"320x50\":\"1266155\"}","id":"div-gpt-ad-1477979940582-0"},{"data-fallback":"div-gpt-ad-1507278418331-0","data-size":"1024x768:990x90,1024x768:970x90,800x600:728x90,600x420:468x60,320x568:320x50","data-slot":"/68258039/990х90-ASnew_s2","id":"div-gpt-ad-1506423747252-0"},{"data-size":"1024x768:990x90,1024x768:970x90,800x600:728x90,600x420:468x60,320x568:320x50","data-slot":"/68258039/990х90-ASnew_s3","id":"div-gpt-ad-1507278418331-0"}]},"avs-exp-comparisonWidget":true,"avs-exp-directTicketsScheduleV3":{"enabled":true},"guides-exp-feed":{"enabled":true},"serp-exp-pinFlight":true,"serp-exp-disableSeatsAmenitiesFlightInfo":{"enabled":true},"asb-feat-my-orders":true,"avs-feat-mediaAlphaPlacementsIds":false,"avs-feat-openSearch":true,"serp-exp-faresV2":{"enabled":true},"avs-feat-topMenu":true,"usc-feat-usedeskDialog":true,"usc-feat-newFaqApi":{"enabled":false},"ex-feat-weekendsConfig":{"config":{"autocompleteEntryPointEnabled":true,"mainEntryPointEnabled":true},"enabled":true},"usc-feat-faqInstructions":{"enabled":true},"avs-feat-tripClasses":{"tripClasses":[{"code":"Y","name":"Economy"},{"code":"W","name":"PremiumEconomy"},{"code":"C","name":"Business"},{"code":"F","name":"FirstClass"}]},"avs-feat-loginMethods":{"methods":["google","vk","mail_ru","yandex","apple","ok","facebook"]},"b2b-feat-menuBusinessSection":{"enabled":true},"usc-exp-menuSupportSection":{"enabled":true},"guides-exp-trapHeader":"expanded_top","serp-exp-ticketProductBanner":{"businessToolsUrl":"https://b2b.aviasales.ru/?utm_source=b2c&utm_medium=ticket&utm_campaign=b2c_integration&referer=b2c-ticket","enabled":true,"signInUrl":"https://b2b.aviasales.ru/panel/search?utm_source=b2c&utm_medium=ticket&utm_campaign=b2c_integration&referer=b2c-ticket","signUpUrl":"https://b2b.aviasales.ru/signup?utm_source=b2c&utm_medium=ticket&utm_campaign=b2c_integration&referer=b2c-ticket"},"serp-exp-hotelsResults":{"experimentState":"native.test"},"ex-feat-exploreFilters":{"enabled":true},"usc-exp-marketChangeOfferWidget":{"enabled":true,"payload":{"popup_expire_days":30}},"avs-feat-linksAboveForm":{"business":"https://aviasales.ru/b2b?utm_source=b2c"},"b2b-feat-tabbarButton":{"enabled":true,"link":"https://b2b.aviasales.ru/?utm_source=b2c&utm_medium=button"},"avs-exp-aa":true,"serp-feat-aviaCashback":{"enabled":true,"informerPlacements":["autosearch","results","ticket","bottomDrawer","proposals"],"informerSuspensionTime":432000},"ex-feat-mainContent":{"enabled":true},"prem-feat-showPremium":{"bookingHotelDetail":false,"bottomNavigationTab":false,"directionHotels":false,"explorePromo":false,"exploreWalks":false,"hotelsDestinationPremiumPromo":false,"hotelsMainPageRedesign":false,"hotelsTab":false,"myCashbackTooltip":true,"onboarding":false,"onboardingMorePromo":false,"profile":false,"somethingMore":false,"trapCategory":false,"travelRestrictionsInsurance":false,"travelRestrictionsPCR":false,"travelRestrictionsPromo":false,"travelRestrictionsSupport":false},"avs-feat-topMenuLinks":{"blog":"https://www.aviasales.ru/psgr?utm_source=aviasales.ru&utm_medium=morda&utm_campaign=blog&utm_content=psgr"},"ex-feat-directFlightsSchedule":{"enabled":true},"avs-feat-userAccountRoutes":{"routes":["settings","notifications","orders","subscriptions","documents","more"]},"mon-feat-dsWebAsBottomBanner":{"enabled":true},"usc-feat-showPriceDisplaySetting":false,"usc-feat-showSpecialToasts":true,"avs-feat-mediaAlpha":true,"usc-exp-emailSubscriptionForm":"footer_form","usc-exp-ssrInstructions":{"enabled":false},"prem-exp-newMarketsMain":{"explorePromo":false,"profile":false},"ex-exp-directionScreenWithTickets":{"enabled":false},"ex-feat-exploreFlow":{"enabled":true},"serp-exp-baggageUpsale":true,"usc-setting-showSupport":{"email":true,"email_faq_index":false},"serp-exp-scoring":true,"ex-feat-priceMap":true,"ex-feat-travelRestrictionsWidget":{"enabled":true},"serp-exp-modalDirectFlights":{"enabled":false},"serp-exp-ticketPreviewV3":{"baggageInformersVisible":true,"compareButtonEnabled":false,"compareButtonVisible":false,"enabled":true,"handbagsInformersVisible":false,"oldDesktopPreviewEnabled":true,"shareButtonEnabled":true,"shareButtonVisible":true,"subscribeButtonEnabled":true,"subscribeButtonVisible":true},"serp-exp-hotels":{"enabled":true,"entry_points":{"explore_direction_hotels":false,"explore_trip_hotels":false,"flights_results_banner":false,"hotellook":{"gate_ids":[],"screen":"off"},"hotels_search_results":false,"trap_hotels":true},"hotel_screen_reviews_enabled":true,"hotel_screen_search_form_enabled":true,"is_map_enabled":true,"search_form_max_interval":45},"serp-exp-hotelsResultsSearchForm":{"enabled":false}},"yul9py|ff.nearestPlases.$stale":false,"syisld":"d1d7503d8d2161c738a770e5f2ee6837","-t5835i":true,"ze2idb":[],"-rn9mbk":"rub","-8l21wi":"Российский рубль","-lsi0kf":"Российский рубль","ga2v6o":true}</script>

<script>self.__PAGE_ID__ = "N0GwuLlwk7OCE-vv9D9ZHlyTaA5TpbOg60BBDGKVfNY-SXpX_6MzMQ==";self.__GENERATED_AT__ = 1706777353031;</script>

<script id="__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[20704,4517,39420,99225,77634,72959,17575,29112,40209,58262,60224,26393,9434,20540,95628,87097,57388,63024,32506,49042,25743,95270,52367,8884,30393,950,44146,58690,29935,91661,16458,62726,75073,92546,49809,37294,41054,73504,56406,47532,50573,24081,53702,93175,23593,23182,92472,18470,79348,73289,57966,86680]</script><script id="__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["third_party_scripts","gdpr","forms_integration","market_change_offer","login_popup","navbar","footer","form"]}</script>

<script async data-chunk="main" src="https://static.aviasales.com/selene-static/entrypoint/runtime.e0be0d5029ee42348877.min.js"></script>

<script async data-chunk="main" src="https://static.aviasales.com/selene-static/entrypoint/framework.203d74193c57238dd001.min.js"></script>

<script async data-chunk="main" src="https://static.aviasales.com/selene-static/entrypoint/main.90eae4e088b859b692b8.min.js"></script>

<script async data-chunk="seleneMicrofrontend" src="https://static.aviasales.com/selene-static/entrypoint/selene_microfrontend.079c87ea504252ac811d.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/platform-beea4929e0137d843ebab1f05cb5d2fb7ab1a44f.a51e9e4b87d1160c6057.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/platform-afbecef500c042f3edf45622d568e480c0ae4270.bf04d74a221353156fc7.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/platform-2106df6093fea0c874aca766dcd26f86bea95bab.bf76667d29efaf32a590.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/platform-a62d64bba81a8471be2e2610732d4b13f9418961.9994faad6880ecdf0045.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/platform-cfd36d3ed1f29da547dee7094b939b18cdfb11c6.30e2aa9ad17f9fdfadb3.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/shared-7c66d2b2aafa5c62b293afcaa2bf32b89c672405.f89599fd08094d52bc68.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/shared-cfd36d3ed1f29da547dee7094b939b18cdfb11c6.35cb9123efffa883c5c0.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/shared-22db2ea78fb187a7a93fe7408e2a93fe7fae1cf9.731892ca6b6cf4dbf5a0.min.js"></script>

<script async data-chunk="third_party_scripts" src="https://static.aviasales.com/selene-static/entrypoint/third_party_scripts.a24b237b5822fcc26dc1.min.js"></script>

<script async data-chunk="gdpr" src="https://static.aviasales.com/selene-static/entrypoint/gdpr.8e61ff45f4f8bd6a67a4.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/lib-b329bc7a.0355f89865f82459a60d.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-be76634982a68250287cb8ba452dbed9bf37892e.3126a9325cc99caf6973.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-51293e1e58d3fe5650366e09e99a12a2f7b3765a.d461a34eebeb139eea6c.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-272ca6ba778c5de4e22ea2c2114d23c6516337a8.669315cda037a09c5dc2.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-dd6774a77dbe8403d8a3eee518085db056c69171.0691e89eb4257ce50452.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-f9c3a95928f53402f1513daf8e7ca7413fb4d8b2.d5df5e211a16bdbc422f.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-ae4d0bb8a9fdeca5f0e057842948a3065d511dda.5d4cd0e03fc3d6ed7d4b.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-22b0eb698bbea711bfbaae1c861d1d13ddd11adb.0e5fd8e8ff2f9c5468fa.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-25bec0b783b1a9fa0daf253792febb64f3f9fddf.66b6982df44cf2a6f2e0.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/platform-007d1c914bce0d7ad3e9fca96df47d4437b417be.7f99eb8992552e32b9dc.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-51293e1e58d3fe5650366e09e99a12a2f7b3765a.9a8791a601ee61cb8ed3.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-90d75dd10e03ed366cf2c5e414978f76a79ad806.a08d13b5fc49610f3892.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-0011d29ad4c1a9e4e6d44b2e21e6e7bdbbb21607.67715962232333f6b524.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-2c0f35ab0a0dbd61210fe68627108c8353c32564.5fe05278bb8bdfe02b38.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-359ffb19503bd17035248bc060d5fb0842bda659.4f0269813200e4306851.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-f1ac745456238694293d633362f2598eb0ff18cc.6944014f0156cb1c5ceb.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-6c3e49cb412b54f59592fd7624ee17621067580e.d40c70ed71196a027bb7.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-714f38598611dc0001af144d66af5a04d4495eea.e4214abf853d636b9a4a.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-88d20d77e6ec7708b84c11c749db7fbf1382b97e.24e4520624753781bb47.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-ae4d0bb8a9fdeca5f0e057842948a3065d511dda.b08e042c3342942f41a4.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-0e70652f5022cde3a151339dbbcfb1be0de386fd.a7fe9d5b56964a8df96c.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-5046d162080dc79b4cb98d85e95b12ef4a9f80d5.2c9f2bb44cdc00dd3f2a.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-97b32c1a81f6d9a481b44124c8936743333d52ed.bfdbe0cf00248410e2f9.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-c31a0726d4b6977246d700d588b07f09fb1e1b38.e351548a89193bf2e2ee.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-3fe6135309853f0007eb4c2a45c852ff629cf060.39cb62e28e52c6386b7d.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-7a182a983b2c10e2aa1141a4458160d2047f7ea1.a3a9aed3d3ba93f80150.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-c90a6bd4f759b465c0939fea436a85daf1d9e394.26801e8e579be8548614.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-9219641135111539ddac965eb7b62a1575e80f40.06228c969d592a4e8b53.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-0a4457ecc739fbbbaf791fce55e04dbbc1897a01.4d2f3be0226505792187.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/shared-4b2782bcfb50ff8cba33c6b95b7d43ace1490606.ba16fb3dcef8eb7997e8.min.js"></script>

<script async data-chunk="forms_integration" src="https://static.aviasales.com/selene-static/entrypoint/forms_integration.6c04fa0338566c20416d.min.js"></script>

<script async data-chunk="market_change_offer" src="https://static.aviasales.com/selene-static/entrypoint/platform-c0f3994236d5ffb55049e23f8f45c732bdcc627f.9422f541a0d707a923a2.min.js"></script>

<script async data-chunk="market_change_offer" src="https://static.aviasales.com/selene-static/entrypoint/platform-dd86e779e8033540718950b2cb7c1d920d953ac1.82bdb3f1bb33d9f01620.min.js"></script>

<script async data-chunk="market_change_offer" src="https://static.aviasales.com/selene-static/entrypoint/shared-c43d916eb9a004c785bffd780d96c0559e85a302.10797d9a57d3dc5450c5.min.js"></script>

<script async data-chunk="market_change_offer" src="https://static.aviasales.com/selene-static/entrypoint/market_change_offer.1d19ed9555fefd8a3d31.min.js"></script>

<script async data-chunk="login_popup" src="https://static.aviasales.com/selene-static/entrypoint/login_popup.786dbf70b2deca3a0915.min.js"></script>

<script async data-chunk="navbar" src="https://static.aviasales.com/selene-static/entrypoint/shared-c870da587b226e685133d38af87a1082f463fe16.ef3923fb3a34a75ab3ee.min.js"></script>

<script async data-chunk="navbar" src="https://static.aviasales.com/selene-static/entrypoint/navbar.031a4e7da7a9df8ace3e.min.js"></script>

<script async data-chunk="footer" src="https://static.aviasales.com/selene-static/entrypoint/footer.fbb8f09a7112eff95c2a.min.js"></script>

<script async data-chunk="form" src="https://static.aviasales.com/selene-static/entrypoint/platform-172a55dc30e15744fd66c3c0dd63bd2d65f7f2e2.4bd1c671166a220579e7.min.js"></script>

<script async data-chunk="form" src="https://static.aviasales.com/selene-static/entrypoint/shared-fb5621854384044213789682dd4b85185f2c8e3e.dcd8902cca04a4dc6d19.min.js"></script>

<script async data-chunk="form" src="https://static.aviasales.com/selene-static/entrypoint/form.9be18ed1daaa812d4009.min.js"></script>

<link data-chunk="main" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/main.8298f6b0196c88f4fb52.css">

<link data-chunk="third_party_scripts" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/third_party_scripts.491ea89943bc4e66b209.css">

<link data-chunk="gdpr" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/gdpr.491ea89943bc4e66b209.css">

<link data-chunk="forms_integration" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/platform-dd6774a77dbe8403d8a3eee518085db056c69171.4e165c2f9ce90d4c056c.css">

<link data-chunk="forms_integration" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/shared-2a25a996cd5b536492e12ce33f055a98e6d1812a.0a06b2b746f48472fa02.css">

<link data-chunk="forms_integration" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/shared-5046d162080dc79b4cb98d85e95b12ef4a9f80d5.babb48a628bc7488ca70.css">

<link data-chunk="forms_integration" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/shared-4b2782bcfb50ff8cba33c6b95b7d43ace1490606.6ef18fd55d22b52da1f8.css">

<link data-chunk="forms_integration" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/forms_integration.5a1e2eb91da9867c0338.css">

<link data-chunk="market_change_offer" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/market_change_offer.d46a85ff238fa2ae5f81.css">

<link data-chunk="login_popup" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/login_popup.674b409fed412832bca6.css">

<link data-chunk="navbar" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/navbar.2113f481be9c49487149.css">

<link data-chunk="footer" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/footer.a4b255a9fd2569c45c0a.css">

<link data-chunk="form" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/platform-172a55dc30e15744fd66c3c0dd63bd2d65f7f2e2.065a45f93fdd551596eb.css">

<link data-chunk="form" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/shared-fb5621854384044213789682dd4b85185f2c8e3e.effa74a7fb3f349c3375.css">

<link data-chunk="form" rel="stylesheet" href="https://static.aviasales.com/selene-static/entrypoint/form.b237324666d576390491.css">










<script>document.addEventListener("DOMContentLoaded", function () { window.documentContentLoaded = true; });</script>

<link href="https://static.aviasales.com/helios-assets/css_variables.a6a4cc6778b83fb95c82a.css" media="all" rel="stylesheet">
<link href="https://static.aviasales.com/helios-assets/app_entry.59e5f61a102ac4e88450a.css" media="all" rel="stylesheet">
<link href="https://static.aviasales.com/helios-assets/6163.d84b9e1ea49c4b2f513ea.css" media="all" rel="stylesheet">
<link href="https://static.aviasales.com/helios-assets/1805.a1f66f414fa294da771fa.css" media="all" rel="stylesheet">
<link href="https://static.aviasales.com/helios-assets/index_entry.49ae3a4bb7d860f5d969a.css" media="all" rel="stylesheet">
<link href="https://static.aviasales.com/helios-assets/old_browser_notification_entry.26b058876eac622c078ba.css" media="all" rel="stylesheet">





<link href="https://www.aviasales.ru/routes/ufa/evn" rel="canonical">

<link href="https://www.aviasales.ru/routes/ufa/evn" hreflang="x-default" rel="alternate">
<link href="https://www.aviasales.by/routes/ufa/evn" hreflang="ru-BY" rel="alternate">
<link href="https://www.aviasales.kz/routes/ufa/evn" hreflang="ru-KZ" rel="alternate">
<link href="https://www.aviasales.kz/kk/routes/ufa/evn" hreflang="kk-KZ" rel="alternate">
<link href="https://www.aviasales.us/routes/ufa/evn" hreflang="ru-UZ" rel="alternate">
<link href="https://www.aviasales.ru/routes/ufa/evn" hreflang="ru-RU" rel="alternate">


<script type="application/ld+json">{"url":"https://www.aviasales.ru","sameAs":["https://www.facebook.com/aviasales.ru/","https://www.twitter.com/aviasales","https://www.vk.com/aviasalesru"],"name":"Aviasales.ru","logo":"https://static.aviasales.com/helios-assets/meta/logo_151.png","@type":"Organization","@context":"https://schema.org"}</script>
<meta content="049ffcc6b9" name="verify-admitad">
<script>document.addEventListener("DOMContentLoaded", function () { window.documentContentLoaded = true; });</script>

<script>
window.initTheme && window.initTheme()</script>
<div data-selene-widget="navbar"><div class="s__lLQduNM4ruiwYQZFOoID"><div class="s__SPFggv0LyHGTAkWzF0K3"><a class="s__IfjHnfURFBTIihipyW2z" href="/"><span class="s__hUp61OcxhZaQr3w4wYv9 s__sBh_0LtGspeoixytMYZg s__kyQZdK3QHkNkIMKAtKUv s__th_qVj2Jb9OfZ7IKY6QD s__NUmLvwf1WR31dqrJs__G" data-test-id="logo"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="s__X8FL6x_8Zb35hXmjNZM6 s__psAqqHQYslWoqZ8F0bLf"><path d="M12.5311 16.1143C12.2536 16.1143 12.0286 16.3393 12.0286 16.6168V16.8752L12.0292 16.8877C12.0815 17.9336 12.8705 18.981 14.2131 19.0842L14.2324 19.0857H14.4975C14.775 19.0857 15 18.8607 15 18.5832C15 18.3057 14.775 18.0807 14.4975 18.0807H14.2722C13.5005 18.013 13.0681 17.4329 13.0336 16.849V16.6168C13.0336 16.3393 12.8086 16.1143 12.5311 16.1143Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9092 7.99435C11.3118 8.10868 9.30388 10.2408 9.1735 12.8374C9.10811 14.1397 9.05712 15.3042 9.05712 16.3867C9.05712 17.3963 9.10148 18.4072 9.16051 19.5691C9.29179 22.1528 11.2964 24.2656 13.8809 24.3815C14.2723 24.3991 14.6516 24.4095 15 24.4095C15.3592 24.4095 15.7514 24.3984 16.1558 24.3798C18.7235 24.2621 20.7206 22.1741 20.8472 19.6069C20.9023 18.4892 20.9428 17.4904 20.9428 16.3867C20.9428 15.1539 20.8978 14.0166 20.838 12.7882C20.7128 10.2131 18.7142 8.11339 16.1386 7.99649C15.7403 7.97841 15.3541 7.96761 15 7.96761C14.66 7.96761 14.2906 7.97756 13.9092 7.99435ZM10.6179 13.1352C10.7164 11.156 12.2192 9.53951 14.1548 9.45032C14.4505 9.43669 14.737 9.42857 15 9.42857C15.2761 9.42857 15.5781 9.43752 15.8894 9.45239C17.8048 9.54389 19.2977 11.1301 19.3904 13.0889C19.3992 13.2756 19.4075 13.4347 19.415 13.5789C19.4405 14.0679 19.4571 14.3883 19.4571 15.0525C19.4571 15.7077 19.4389 16.0806 19.4116 16.6414C19.4072 16.7315 19.4025 16.8265 19.3977 16.9283C19.3049 18.8795 17.8136 20.4545 15.9056 20.5468C15.5886 20.5622 15.2809 20.5714 15 20.5714C14.7293 20.5714 14.4337 20.5628 14.1288 20.5485C12.2051 20.4579 10.7055 18.8594 10.6077 16.8923C10.6013 16.7639 10.5952 16.6464 10.5896 16.5362L10.5895 16.5354C10.5615 15.9939 10.5429 15.6327 10.5429 15.0525C10.5429 14.4951 10.5601 14.1891 10.5862 13.7243C10.5958 13.5555 10.6064 13.3656 10.6179 13.1352Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.62428 2H21.3757C24.1744 2 24.8978 2.2904 25.5967 2.66419C26.3512 3.06772 26.9323 3.64878 27.3358 4.40331C27.7096 5.10225 28 5.82557 28 8.62428V9.06506C28 9.26773 27.8375 9.43274 27.635 9.44132C27.5727 9.44396 27.5097 9.44697 27.4462 9.45032C25.7525 9.53951 24.4376 11.156 24.3514 13.1352C24.3414 13.3641 24.3321 13.5533 24.3238 13.7214L24.3237 13.7234L24.3237 13.7243C24.3008 14.1891 24.2857 14.4951 24.2857 15.0525C24.2857 15.6327 24.3021 15.9941 24.3265 16.5355C24.3315 16.6459 24.3369 16.7637 24.3425 16.8923C24.428 18.8594 25.7401 20.4579 27.4235 20.5485C27.4946 20.5523 27.5653 20.5557 27.635 20.5587C27.8375 20.5673 28 20.7323 28 20.9349V21.3757C28 24.1744 27.7096 24.8978 27.3358 25.5967C26.9323 26.3512 26.3512 26.9323 25.5967 27.3358C24.8978 27.7096 24.1744 28 21.3757 28H8.62428C5.82558 28 5.10225 27.7096 4.40331 27.3358C3.64878 26.9323 3.06772 26.3512 2.66419 25.5967C2.2904 24.8978 2 24.1744 2 21.3757V20.9349C2 20.7323 2.16248 20.5673 2.36497 20.5587C2.44457 20.5553 2.52526 20.5513 2.60664 20.5468C4.27615 20.4545 5.5811 18.8795 5.66225 16.9283C5.66641 16.8281 5.67041 16.7345 5.67421 16.6457L5.6744 16.6412C5.69836 16.0804 5.71429 15.7077 5.71429 15.0525C5.71429 14.3883 5.69968 14.0676 5.67741 13.5787C5.67084 13.4344 5.6636 13.2756 5.65587 13.0889C5.5748 11.1301 4.2685 9.54389 2.5925 9.45239C2.51591 9.44821 2.43996 9.4445 2.36497 9.44132C2.16249 9.43274 2 9.26773 2 9.06506V8.62428C2 5.82557 2.2904 5.10225 2.66419 4.40331C3.06772 3.64878 3.64878 3.06772 4.40331 2.66419C5.10225 2.2904 5.82558 2 8.62428 2ZM13.8526 6.70793C10.5459 6.85349 8.04891 9.55953 7.88757 12.7728C7.82218 14.0751 7.76957 15.2684 7.76957 16.3866C7.76957 17.4317 7.8155 18.4709 7.87462 19.6344C8.03747 22.8395 10.5355 25.5204 13.8233 25.6678C14.2279 25.6859 14.6273 25.6971 15 25.6971C15.3844 25.6971 15.7971 25.6852 16.2149 25.6661C19.4788 25.5163 21.9757 22.8667 22.1333 19.6702C22.1887 18.5465 22.2305 17.5226 22.2305 16.3866C22.2305 15.1223 22.1842 13.9604 22.1242 12.7256C21.9685 9.52397 19.4727 6.85882 16.1971 6.71015C15.7855 6.69147 15.379 6.67995 15 6.67995C14.6362 6.67995 14.2471 6.69057 13.8526 6.70793Z" fill="currentColor"></path></svg></span></a><div class="s__SKBRiPStTr0nOc948Nxu s__hkTh0DLykjmRRDDxQCMg"><ul class="s__xS1dg8kDmDEsMz6vPC6D s__lrhG0jI1mDQfpZp8Oej_"><li class="s__mfigXqoOZ3XJbBXBbbZU s__JZCq3JC0ThxZLmBOZayL"><a class="s__gliJeBMTvyJMWoL2AY41" href="/" data-test-id="tab-avia"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Авиабилеты</div></a></li><li class="s__mfigXqoOZ3XJbBXBbbZU s__nOfmoPLt0T6F7tFHKA35"><a class="s__gliJeBMTvyJMWoL2AY41" href="/#hotel" data-test-id="tab-hotel"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Отели</div></a></li><li class="s__mfigXqoOZ3XJbBXBbbZU s__KaAUY2NQJ1XNM_WrE97H"><a class="s__gliJeBMTvyJMWoL2AY41" href="https://aviasales.ru/b2b?utm_source=b2c&amp;utm_medium=button" target="_blank" rel="nofollow noreferrer" data-test-id="form_tabs_outer_link"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Для бизнеса</div><svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.789 3a.789.789 0 1 0 0 1.577H9l1.29-.11-7.056 7.169a.8.8 0 1 0 1.13 1.13l7.19-7.305L11.424 7v4.211a.789.789 0 1 0 1.577 0V3.79A.789.789 0 0 0 12.211 3H4.79Z"></path></svg></a></li></ul></div><div class="s__Yu52zF8XmTg7QCjJRiP3"><div class="s__iKd6gFDx2CzzW4Q61Ba0"><div class="s__EV1p5ZE5yZ7zL3O7li9n"><span><button class="s__To9mtJ4hfX3P2uQY3VJ2" type="button" data-test-id="profile-button"><div class="s__mZ06KRzJGUfCcDdIHtul"><svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path d="M8 7.832c1.57 0 2.88-1.295 2.88-2.953A2.883 2.883 0 0 0 8 2C6.443 2 5.12 3.282 5.127 4.887 5.127 6.537 6.43 7.832 8 7.832ZM3.62 14h8.76c1.21 0 1.62-.363 1.62-.99 0-1.691-2.335-4.016-6-4.016-3.672 0-6 2.325-6 4.015 0 .628.41.99 1.62.99Z"></path></svg></div><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d s__sdlP7jk_Fm_fzDkPWFGQ" data-test-id="text">Профиль</div></button></span></div></div><div class="s__iKd6gFDx2CzzW4Q61Ba0"><a class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d s__YwPM0Df769YDfsxJAubT" target="_blank" href="/faq?opened_from=header" data-test-id="text"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path d="M12.063 17.63a.984.984 0 0 0 .72-.308.997.997 0 0 0 .306-.728c0-.281-.103-.52-.308-.72a1.009 1.009 0 0 0-.726-.297c-.28 0-.52.1-.72.297-.199.198-.299.441-.299.728 0 .276.101.517.302.72a.982.982 0 0 0 .725.307ZM12.001 22a9.756 9.756 0 0 1-3.897-.782 10.085 10.085 0 0 1-3.179-2.143 10.085 10.085 0 0 1-2.143-3.18A9.76 9.76 0 0 1 2 11.998c0-1.389.26-2.689.782-3.901a9.962 9.962 0 0 1 2.141-3.17 10.24 10.24 0 0 1 3.178-2.138A9.705 9.705 0 0 1 12.002 2c1.39 0 2.69.262 3.904.787a10.107 10.107 0 0 1 3.17 2.135c.9.9 1.612 1.957 2.137 3.172A9.748 9.748 0 0 1 22 12a9.694 9.694 0 0 1-.788 3.9 10.193 10.193 0 0 1-2.138 3.172c-.9.904-1.958 1.618-3.172 2.142a9.735 9.735 0 0 1-3.9.786Zm.032-14.118c.431 0 .811.134 1.14.404.33.27.495.61.495 1.02 0 .388-.115.728-.344 1.02-.229.294-.488.56-.778.8-.37.314-.694.663-.972 1.045a2.116 2.116 0 0 0-.417 1.274c0 .2.077.36.231.48.155.121.335.181.54.181a.76.76 0 0 0 .555-.22 1.24 1.24 0 0 0 .32-.537c.056-.31.178-.592.364-.843.186-.25.409-.478.669-.68.39-.317.708-.697.956-1.142.249-.444.373-.914.373-1.41 0-.821-.297-1.513-.891-2.074a2.974 2.974 0 0 0-2.115-.843c-.606 0-1.18.128-1.723.383a3.598 3.598 0 0 0-1.362 1.109.925.925 0 0 0-.164.587.668.668 0 0 0 .277.515c.21.137.43.18.66.127a.974.974 0 0 0 .566-.372c.187-.251.423-.452.707-.6.284-.15.589-.224.913-.224Z"></path></svg><span class="s__u0CEXhbJ3pJx5xVFKAfS">Поддержка</span></a></div><div class="s__iKd6gFDx2CzzW4Q61Ba0 undefined"><div class="s__EV1p5ZE5yZ7zL3O7li9n"><button class="s__RSKC3cGxBSRB6WRCiPzC" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-16c-.025 0-.17.01-.42.292-.248.28-.518.744-.765 1.402-.195.52-.363 1.128-.496 1.806h3.362c-.133-.678-.301-1.286-.496-1.806-.247-.658-.517-1.121-.766-1.402C12.17 5.01 12.025 5 12 5Zm-3.058.992A13.93 13.93 0 0 0 8.286 8.5h-2.35a7.03 7.03 0 0 1 3.149-2.866c-.05.117-.097.237-.143.358ZM8.05 10.5H5.161a7.026 7.026 0 0 0 0 3h2.89a22.209 22.209 0 0 1 0-3Zm.236 5h-2.35a7.027 7.027 0 0 0 3.148 2.866 10.953 10.953 0 0 1-.42-1.199 15.35 15.35 0 0 1-.378-1.667Zm2.033 0h3.362c-.133.678-.301 1.286-.496 1.806-.247.658-.517 1.121-.766 1.402-.25.282-.394.292-.419.292-.03 0-.225-.019-.543-.444-.307-.41-.616-1.064-.871-1.946-.1-.344-.19-.716-.267-1.11Zm3.626-2h-3.89a20.15 20.15 0 0 1 0-3h3.89a20.127 20.127 0 0 1 0 3Zm1.769 2c-.16.927-.381 1.775-.656 2.508-.046.121-.093.24-.143.358a7.03 7.03 0 0 0 3.149-2.866h-2.35Zm3.125-2h-2.89a22.163 22.163 0 0 0 0-3h2.89a7.026 7.026 0 0 1 0 3Zm-3.924-7.866A7.03 7.03 0 0 1 18.064 8.5h-2.35a13.925 13.925 0 0 0-.656-2.508 9.56 9.56 0 0 0-.143-.358Z"></path></svg></button></div></div><div class="s__iKd6gFDx2CzzW4Q61Ba0 undefined"><div class="s__EV1p5ZE5yZ7zL3O7li9n"><button class="s__YlNPz3wu9X6GcpqSC9fj" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.23a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.23Zm5.385 0a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23Zm6.384 1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23ZM5 12.617a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.23Zm6.385 1a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1h1.23a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23Zm4.384-1a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23ZM6 19a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1h1.23a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1H6Zm4.385-1a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23Zm6.384 1a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23Z"></path></svg></button></div></div></div></div></div></div>
<div data-selene-widget="login_popup"></div>
<div data-selene-widget="market_change_offer"></div>
<div data-selene-widget="forms_integration"></div>
<div data-selene-widget="gdpr"></div>
<div data-selene-widget="third_party_scripts"></div>










<div class="header --blue" data-fire-scroll="header" data-goal-category="head" data-reduced-page-header="" data-role="header">




<div class="header__form --solo-header  --show-form-header" data-react-props="{&quot;currency&quot;:&quot;rub&quot;,&quot;hotel&quot;:{&quot;action&quot;:&quot;https://hotels.aviasales.ru/hotels&quot;,&quot;callToAction&quot;:&quot;Забронируйте идеальный номер по выгодной цене&quot;,&quot;mainTitle&quot;:&quot;Удобный поиск отелей&quot;},&quot;activeForm&quot;:&quot;avia&quot;,&quot;availableTabs&quot;:[&quot;avia&quot;,&quot;hotel&quot;],&quot;avia&quot;:{&quot;action&quot;:&quot;/search&quot;,&quot;HTMLTitle&quot;:&quot;&lt;h1 class=\&quot;header__title\&quot;&gt;Авиабилеты из Уфы в Ереван от 3&amp;#8239;705&lt;span class=\&quot;currency-font --rub\&quot;&gt;₽&lt;/span&gt;&lt;/h1&gt;&quot;,&quot;callToAction&quot;:&quot;Укажите даты, чтобы найти билеты:&quot;,&quot;insurancePopup&quot;:false,&quot;mainTitle&quot;:&quot;Авиабилеты из Уфы в Ереван от 3&amp;#8239;705&lt;span class=\&quot;currency-font --rub\&quot;&gt;₽&lt;/span&gt;&quot;},&quot;brandName&quot;:&quot;авиасейлс&quot;,&quot;mainTitleTag&quot;:&quot;h1&quot;,&quot;multiway&quot;:{&quot;action&quot;:&quot;/search&quot;,&quot;callToAction&quot;:&quot;Укажите даты, чтобы найти билеты:&quot;,&quot;mainTitle&quot;:&quot;Авиабилеты из Уфы в Ереван от 3&amp;#8239;705&lt;span class=\&quot;currency-font --rub\&quot;&gt;₽&lt;/span&gt;&quot;},&quot;showHeader&quot;:true}" data-tabs="form_tabs" is="forms_set">

<div class="web-app">
<div class="web-app__page-header-wrap">

<div class="page-header">
<div class="page-header__form-set">
<div class="page-header__titles">
<div><h1 class="header__title">Авиабилеты из Уфы в Ереван от 3&#8239;705<span class="currency-font --rub">₽</span></h1></div>
<strong class="header__title-form">Укажите даты, чтобы найти билеты:</strong>
</div></div></div></div>
</div></div>

<div class="selene-form">
<div data-selene-widget="form"><div class="s__FKt_57Z3lbn26yIqnsch"><div class="s__POufPj1C_k_Fu65TDuPk"><div class="s__axUNR8b_2gLsRlKwbw7k"><ul class="s__xS1dg8kDmDEsMz6vPC6D"><li class="s__mfigXqoOZ3XJbBXBbbZU s__JZCq3JC0ThxZLmBOZayL"><a class="s__gliJeBMTvyJMWoL2AY41" href="/" data-test-id="tab-avia"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Авиабилеты</div></a></li><li class="s__mfigXqoOZ3XJbBXBbbZU s__nOfmoPLt0T6F7tFHKA35"><a class="s__gliJeBMTvyJMWoL2AY41" href="/#hotel" data-test-id="tab-hotel"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Отели</div></a></li><li class="s__mfigXqoOZ3XJbBXBbbZU s__KaAUY2NQJ1XNM_WrE97H"><a class="s__gliJeBMTvyJMWoL2AY41" href="https://aviasales.ru/b2b?utm_source=b2c&amp;utm_medium=button" target="_blank" rel="nofollow noreferrer" data-test-id="form_tabs_outer_link"><div class="s__VWGMQkNvXAk6vfgXhnEX s__ShYzKW_6zESUNc6duu4d" data-test-id="text">Для бизнеса</div><svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.789 3a.789.789 0 1 0 0 1.577H9l1.29-.11-7.056 7.169a.8.8 0 1 0 1.13 1.13l7.19-7.305L11.424 7v4.211a.789.789 0 1 0 1.577 0V3.79A.789.789 0 0 0 12.211 3H4.79Z"></path></svg></a></li></ul></div><div class="s__2W1TIdRruf9CVqbw3qnh"><form class="s__DWMnirAs3sL6CCSxUuS9" data-test-id="avia-form"><span class="s__kuRvgtvIyGARw9Uy_oIZ"><div data-test-id="origin-autocomplete" class="s__IwBVpRef_1GpuUeZuKUL s__AQ4OedS8Gooq9GAsep8w" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="avia_form_origin-label"><div class="s__EV1p5ZE5yZ7zL3O7li9n"><span class="s__wpFcxp_qAyVj00fYC_Mm s__I_UKw7tKKBKz9jStrghD" data-test-id="form-input"><input aria-autocomplete="list" aria-labelledby="avia_form_origin-label" autoComplete="off" tabindex="0" id="avia_form_origin-input" placeholder="Откуда" class="s__hC7iNZewgvf8fGTsGplA s__n9EimsKcoimG2V6o0kus s__UaXug5EzRLeYsUGa9bJ1" data-test-id="origin-input" value=""/><label class="s__j7kCtiyeP8K0YFMD0ryG s__l2kHHSNU3xVPgDjzOooJ s__eeBPWze1YzhdViiEXkmX" for="avia_form_origin-input" data-test-id="text">Откуда</label></span></div></div><div data-test-id="destination-autocomplete" class="s__IwBVpRef_1GpuUeZuKUL s__dBAB6FOOSoqaYxSn1f9w" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="avia_form_destination-label"><div class="s__EV1p5ZE5yZ7zL3O7li9n"><span class="s__wpFcxp_qAyVj00fYC_Mm s__y0KFm2r0XAZUAEo1nbj2" data-test-id="form-input"><input aria-autocomplete="list" aria-labelledby="avia_form_destination-label" autoComplete="off" tabindex="0" id="avia_form_destination-input" placeholder="Куда" class="s__hC7iNZewgvf8fGTsGplA s__n9EimsKcoimG2V6o0kus s__UaXug5EzRLeYsUGa9bJ1 s__pbIJ79VEU4wqMNj75yFL" data-test-id="destination-input" value=""/><label class="s__j7kCtiyeP8K0YFMD0ryG s__l2kHHSNU3xVPgDjzOooJ s__eeBPWze1YzhdViiEXkmX" for="avia_form_destination-input" data-test-id="text">Куда</label></span></div></div></span><div class="s__EV1p5ZE5yZ7zL3O7li9n s__mtImpdxqmb3FtpyrTsgk s__kGy7Tb3xVjEevcmv8PDu"><div class="s__QH4N4LXn12T3MaGvIuls"><button class="s__iUCZVK_7pftNPmX5zeoS s__IwBVpRef_1GpuUeZuKUL s__QOH8_RMDyCm4BxeyrqOt s__OIqaFwbhkZg2cIA5d0zJ" tabindex="0" type="button" data-test-id="start-date-field"><div class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ s__x4KgSIG987qu2AxBtn9k" data-test-id="start-date-value">Когда</div><label class="s__j7kCtiyeP8K0YFMD0ryG s__l2kHHSNU3xVPgDjzOooJ s__aKqylq1xoDpv767yljgQ" data-test-id="text">Когда</label><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="s__aYIkQKG8t3OdyT50QbGZ" data-test-id="departure-calendar-icon" style="display:inline-block"><path d="M11 11H7v4h4v-4Zm5-9v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2Zm3 18H5V9h14v11Z"></path></svg></button><button class="s__iUCZVK_7pftNPmX5zeoS s__IwBVpRef_1GpuUeZuKUL s__qO2qUuaHHBMsAgKGqoWL s__OIqaFwbhkZg2cIA5d0zJ" tabindex="0" type="button" data-test-id="end-date-field"><div class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ s__x4KgSIG987qu2AxBtn9k" data-test-id="end-date-value">Обратно</div><label class="s__j7kCtiyeP8K0YFMD0ryG s__l2kHHSNU3xVPgDjzOooJ s__aKqylq1xoDpv767yljgQ" data-test-id="text">Обратно</label></button></div></div><div class="s__EV1p5ZE5yZ7zL3O7li9n s__GjfjABBy3lBBfRWvt3ms s__MBFP5gzzPEDRABiyJXw9"><button class="s__Gte0Mt6xKAMZFWQHRIc8 s__IwBVpRef_1GpuUeZuKUL s__BygstPtmhyan3RfsYhcJ" type="button" data-test-id="passengers-field" tabindex="0"><span class="s__j7kCtiyeP8K0YFMD0ryG s__l2kHHSNU3xVPgDjzOooJ s__ZLKEwBloTc0GIBjoSLHO" data-test-id="text">Пассажиры и класс</span><div class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ s__CBMawXuUnYBkLbYmqfWP" data-test-id="passenger-numbers">1 пассажир</div><div class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ s___3SCxdT54RzEeR7R1bSu" data-test-id="trip-class">Эконом</div></button></div><div class="s__Yzjov8gtTIwlOo3oK8L3"><button type="button" class="s__cQ6neS4ccCunOu9Ydn0k s__tkvB9amX28GXeWxPcrad s__eEClvAD7BnPrQbwBW5zC s__p0epgEYgBbKyjc8MfJPw s__VtKkhjd_g3s0MVyvRx1g" data-test-id="form-submit"><div class="s__wr9OcknDPAtMpjta7a24 s__pWd6FeazwBmNIpomSjsp s__YQHxt19vOcGsOro8j0pF" data-test-id="text">Найти билеты</div></button></div><footer class="s__zkDBW0A58etY7O4aa8fm"><div class="s__T4fHUqwmIqKNnTw3xLTZ" data-test-id="avia-footer"><button class="s__ya3MCvejjABbdOSw8Ub_" data-test-id="switch-to-multiwayform" type="button"><svg class="s__t3_ZR28TjIAhVJmQLb9w" width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.698 11.131l-3.482-6.813a2.5 2.5 0 1 0-3.391.038L3.29 11.127A2.5 2.5 0 1 0 4.95 14h7.1a2.5 2.5 0 1 0 1.648-2.869zM8.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm12 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-1.647-3.38L9.45 4.812a2.493 2.493 0 0 1-1.77.05l-3.573 6.722c.424.356.729.851.843 1.415h7.1c.11-.546.4-1.027.803-1.38z" fill-rule="evenodd"></path></svg><div class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ" data-test-id="text">Составить сложный маршрут</div></button><label class="s__RO_by48latLvgCTPtFcg s__h_BbYohujeU6CmLw3YiM s__xITh20Kiox8RYAfIvdfq" data-test-id="checkbox"><input type="checkbox" data-test-id="booking-checkbox" checked=""/><span class="s__BGUqp9s2kxbNEnDjdIYc"><svg class="s__XM8ZO5vgPE3EvHQrwWsZ" width="15" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M13.88 1.951l-8 8a1.14 1.14 0 01-1.616 0L.835 6.523a1.142 1.142 0 111.616-1.616l2.62 2.62L12.265.335a1.142 1.142 0 111.616 1.616z" fill="currentColor"></path></svg></span><span class="s__ta_SSbfNo_PsQ7Rdf70_ s__wz46TWgrOGMneOhk9MFQ s__R81Hd9qjhKmXLV5Q63RQ" data-test-id="no-cashback-label">Открыть Ostrovok.ru в новой вкладке</span></label></div></footer></form></div></div></div></div></div>

</div>

<div class="page__container clearfix" data-role="subscribe_widget_wrapper" data-goal-category="city_city">
  <div class="page__content" is="scroll_notifier">
    <div class="breadcrumbs --align-left">
      <ul class="breadcrumbs__list" vocab="https://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">

          <a href="/" title="Дешёвые авиабилеты" property="item" typeof="WebPage">
            <span property="name">
Дешёвые авиабилеты
            </span>
          </a>
          <meta property="position" content="1">
        </li>
        <li property="itemListElement" typeof="ListItem">

          <a href="/countries/rossiya" title="Россия" property="item" typeof="WebPage">
            <span property="name">
Россия
            </span>
          </a>
          <meta property="position" content="2">
        </li>
        <li property="itemListElement" typeof="ListItem">

          <a href="/cities/ufa-ufa" title="Уфа" property="item" typeof="WebPage">
            <span property="name">
Уфа
            </span>
          </a>
          <meta property="position" content="3">
        </li>
        <li property="itemListElement" typeof="ListItem">

          <span property="name">
Уфа – Ереван
          </span>
          <meta property="position" content="4">
        </li>
      </ul>
    </div>







<div class="page__part" id="seo_text-menu-part">
<h2>Самые дешёвые авиабилеты Уфа – Ереван (UFA — EVN)</h2>

    <div is="readmore" data-readmore-link="readmore__link" data-readmore-open="Читать дальше" data-readmore-close="Скрыть текст"
      <p>

Авиасейлс найдет для вас самые дешевые авиабилеты Уфа – Ереван, сравнив стоимость авиабилета в Ереван в 45 агентствах, 5 системах бронирования и 728 авиакомпаниях. Где именно купить билеты на самолет Уфа – Ереван – выбор за вами.

      </p>

        <p>
          <strong>
Направление Уфа – Ереван пользуется наибольшей популярностью в июне, июле и августе.
          </strong>
В этот период средняя стоимость авиабилетов составляет
15&nbsp;801<span class="currency-font --rub">₽</span>
          .
        </p>


        <p>
В низкий сезон — в январе, феврале и марте
цена на авиабилеты падает в среднем до
          <strong>
20&nbsp;062<span class="currency-font --rub">₽</span>
          </strong>
          .
        </p>


<strong>Прямой рейс из Уфы в Ереван</strong>
        <p>
Самый простой способ оказаться в месте назначения — прямой перелёт. Прямые рейсы из Уфы в Ереван выполняют авиакомпании:
          <ul>


              <li>
Азимут (

1
день
в неделю, рейс 

A4821)
              </li>


              <li>
Ред Вингс (

1
день
в неделю, рейс 

WZ4673)
              </li>


              <li>
Ширак Авиа (

1
день
в неделю, рейс 

5G101)
              </li>

          </ul>
        </p>


Ереван обслуживает 1 аэропорт:
Звартноц.


По направлению Уфа – Ереван: прямые рейсы выполняют
          <ul>


              <li>
Ширак Авиа, Азимут, Ред Вингс из Уфа в Звартноц
              </li>

          </ul>








<strong>Перелёт с пересадкой из Уфы в Ереван</strong>

  <p>

Альтернативный вариант билета на самолёт Уфа – Ереван (туда и обратно) — перелёт с пересадкой.

Его стоимость — от <strong>20&#8239;062<span class="currency-font --rub">₽</span></strong>

до <strong>20&#8239;062<span class="currency-font --rub">₽</span></strong>

    .
  </p>



  <p>
    <strong>
Самые низкие цены на перелёт с пересадками предлагает авиакомпания Азимут с пересадкой в Минеральных Водах.
Цена билета — от 7&#8239;550<span class="currency-font --rub">₽</span>.
    </strong>
  </p>



  <p>
Рейс Уфа – Ереван с пересадкой позволит сделать путешествие ещё интереснее. Стыковка может осуществляться в:
  </p>
  <ul>

      <li>
Минеральных Водах
(рейс A46058 Азимут)
      </li>

  </ul>
  <p>
Это отличный шанс познакомиться с этими городами, ведь время пересадки обычно составляет не менее 6 часов.
  </p>




        <p>
          <strong>

Необходимо учесть, что в зависимости от количества дней, оставшихся до вылета, цена билета на самолёт Уфа – Ереван может измениться более чем на 101%.

          </strong>
        </p>

      <p>
Авиасейлс советует купить авиабилеты из Уфа – Ереван заранее, чтобы вы могли выбирать условия перелёта, ориентируясь на свои пожелания и финансовые возможности.
      </p>
    </div>


    <div class="see-also">
      <p>
Смотрите также:
      </p>
      <ul>

          <li>

            <a href="/routes/evn/ufa" title="Авиабилеты из Еревана в Уфу">
Авиабилеты из Еревана в Уфу
            </a>
          </li>


          <li>

            <a href="/routes/ufa-ufa" title="Авиабилеты из Уфы">
Авиабилеты из Уфы
            </a>
          </li>

      </ul>
    </div>

</div>





  <div id="common_info-menu-part">
<strong>Общая информация о перелёте Уфа – Ереван</strong>
    <ul>



        <li>
Расстояние между Уфой и Ереваном составляет: 1129 миль (1816 километров)
        </li>


        <li>
Среднее время перелёта из Уфы в Ереван: 3ч 15мин
        </li>


        <li>
Частота перелётов из Уфы в Ереван:

4 раза в неделю

        </li>

    </ul>
  </div>


<div id="video_banner-menu-part">
  <script>
    (function (a, b, c, d, e, f, g, h) {
        g = b.createElement(c);
        g.src = d;
        g.type = "application/javascript";
        g.async = !0;

        h = b.getElementsByTagName(c)[0];
        h.parentNode.insertBefore(g, h);

        a[f] = [];
        a[e] = function () {
            a[f].push(Array.prototype.slice.apply(arguments));
        }
    }) (window, document, "script", (document.location.protocol === "https:" ? "https:" : "http:") + "//cdn01.nativeroll.tv/js/seedr-player.min.js", "SeedrPlayer", "seedrInit");

    SeedrPlayer({
        container: '#video_banner-menu-part',
        gid: "5dbac1c85f366eda108b456b",
        onError: function (e) { console.log(e); }
    });
  </script>
</div>





  <div id="month_prices-menu-part">
    <div class="page__part --prices-table">
<h2>Стоимость билетов на самолёт Уфа – Ереван по месяцам *</h2>

      <div class="data-table --prices">
        <table>
          <thead>
            <tr>
              <th>
Месяц
              </th>
              <th>
В одну сторону
              </th>
              <th>
Туда и обратно
              </th>
            </tr>
          </thead>

          <tbody>

              <tr>
                <td>
Январь 2024
                </td>

                <td class="data-table__price">


07.01.2024

                  <form action="/search/UFA0701EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

5&nbsp;927<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




08.01 - 17.01.2024

                  <form action="/search/UFA0801EVN17011" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

24&nbsp;874<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Февраль 2024
                </td>

                <td class="data-table__price">


11.02.2024

                  <form action="/search/UFA1102EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

3&nbsp;705<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




01.02 - 23.02.2024

                  <form action="/search/UFA0102EVN23021" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

16&nbsp;027<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Март 2024
                </td>

                <td class="data-table__price">


23.03.2024

                  <form action="/search/UFA2303EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

7&nbsp;445<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




23.03 - 30.03.2024

                  <form action="/search/UFA2303EVN30031" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

17&nbsp;075<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Апрель 2024
                </td>

                <td class="data-table__price">


27.04.2024

                  <form action="/search/UFA2704EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

7&nbsp;445<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




06.04 - 20.04.2024

                  <form action="/search/UFA0604EVN20041" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

20&nbsp;627<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Май 2024
                </td>

                <td class="data-table__price">


11.05.2024

                  <form action="/search/UFA1105EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

5&nbsp;990<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




18.05 - 25.05.2024

                  <form action="/search/UFA1805EVN25051" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

15&nbsp;777<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Июнь 2024
                </td>

                <td class="data-table__price">


01.06.2024

                  <form action="/search/UFA0106EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

5&nbsp;990<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




01.06 - 15.06.2024

                  <form action="/search/UFA0106EVN15061" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

14&nbsp;322<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Июль 2024
                </td>

                <td class="data-table__price">


06.07.2024

                  <form action="/search/UFA0607EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

6&nbsp;211<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




06.07 - 20.07.2024

                  <form action="/search/UFA0607EVN20071" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

14&nbsp;322<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Август 2024
                </td>

                <td class="data-table__price">


03.08.2024

                  <form action="/search/UFA0308EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

6&nbsp;216<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




17.08 - 22.08.2024

                  <form action="/search/UFA1708EVN22081" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

17&nbsp;529<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Сентябрь 2024
                </td>

                <td class="data-table__price">


07.09.2024

                  <form action="/search/UFA0709EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

6&nbsp;027<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




01.09 - 08.09.2024

                  <form action="/search/UFA0109EVN08091" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

проверить

                    </button>
                  </form>
                </td>
              </tr>

              <tr>
                <td>
Октябрь 2024
                </td>

                <td class="data-table__price">


26.10.2024

                  <form action="/search/UFA2610EVN1" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_ow_price_redirect">

7&nbsp;550<span class="currency-font --rub">₽</span>

                    </button>
                  </form>
                </td>

                <td class="data-table__price">




01.10 - 08.10.2024

                  <form action="/search/UFA0110EVN08101" style="display: inline" data-action="search">
                    <button class="link" type="submit" data-goal="month_rt_price_redirect">

проверить

                    </button>
                  </form>
                </td>
              </tr>

          </tbody>
        </table>
        <p class="data-table__note">
          <noindex>
          </noindex>
          *
Цены, найденные пользователями за последние 48 часов, не являются офертой.
        </p>
      </div>
    </div>





  <div class="paragraph" itemscope itemtype="https://schema.org/Product">
    <span itemprop="description">
      <meta itemprop="name" content="Авиабилеты из Уфы в Ереван">
      <strong>
Самый дешевый авиабилет из Уфы в Ереван, найденный нашими пользователями за последние 48 часов:
      </strong>
    </span>

    <span>
билет


от авиакомпании Азимут


с вылетом 03.02.2024 и стоимостью

      <strong itemscope itemprop="offers" itemtype="https://schema.org/AggregateOffer">
        <span itemprop="lowPrice" content="3705">
          <meta itemprop="priceCurrency" content="rub">
3&nbsp;705 рублей.
        </span>
      </strong>
    </span>

    <form action="/search/UFA0302EVN1" data-action="search" style="display: inline">
      <button class="link" type="submit">
Найти этот билет
      </button>
    </form>
  </div>






  <div class="paragraph">
    <span>
      <strong>
Самый быстрый авиабилет из Уфы в Ереван:
      </strong>
    </span>

    <span>
билет


от авиакомпании Азимут


с ближайшим вылетом 03.02.2024

 и длительностью полёта <strong>3ч 10мин</strong>.

    </span>

    <form action="/search/UFA0302EVN1" data-action="search" style="display: inline">
      <button class="link" type="submit">
Найти этот билет
      </button>
    </form>
  </div>

  </div>



  <div id="airlines-menu-part">

  <div class="page__part">
<strong>Авиакомпании, летающие из Уфы в Ереван</strong>
    <div class="list-of-items">


      <ul is="readmore" data-readmore-link="readmore__link" data-readmore-open="+ ещё -8" data-readmore-close="Свернуть" data-readmore-reduced-amount="11" data-copy-element="y">

          <li itemprop="brand" itemtype="http://schema.org/Organization">
            <span itemprop="name">

              <a href="" title="Авиакомпания Азимут" target="_blank">
Азимут
              </a>
            </span>
          </li>

          <li itemprop="brand" itemtype="http://schema.org/Organization">
            <span itemprop="name">

              <a href="" title="Авиакомпания Ред Вингс" target="_blank">
Ред Вингс
              </a>
            </span>
          </li>

          <li itemprop="brand" itemtype="http://schema.org/Organization">
            <span itemprop="name">

              <a href="" title="Авиакомпания Ширак Авиа" target="_blank">
Ширак Авиа
              </a>
            </span>
          </li>

      </ul>
    </div>
  </div>

  </div>




  <div id="direct_flights-menu-part" data-explore-locator="seo_city_city_direct_flights">
    <div class="page__part">
<h2>Прямые рейсы Уфа – Ереван, расписание самолетов</h2>


      <div class="data-table --flight-direct">
        <table>
          <thead>
            <tr>
              <th>
                <span>
Рейс
                </span>
              </th>
              <th>
                <span>
Вылет
                </span>
              </th>
              <th>
                <span>
В пути
                </span>
              </th>
              <th>
                <span>
Прибытие
                </span>
              </th>
              <th>
                <span>
Дни вылета
                </span>
              </th>
            </tr>
          </thead>

          <tbody>

              <tr class="hidden-link">
                <td>
                  <span>
Ред Вингс
                  </span>
                  (

WZ4673

                  )
                </td>
                <td>
14:00
                </td>
                <td>
3ч 20мин
                </td>
                <td>
16:20
                </td>
                <td>
                  <div class="hidden-link__replacement">
пт
                  </div>
                  <div class="hidden-link__link">
                    <form action="/search/UFA0102EVN1" data-action="search">
                      <button class="data-table__search" type="submit">
Найти билет
                      </button>
                    </form>
                  </div>
                </td>
              </tr>

              <tr class="hidden-link">
                <td>
                  <span>
Азимут
                  </span>
                  (

A44021

                  )
                </td>
                <td>
06:50
                </td>
                <td>
3ч 10мин
                </td>
                <td>
09:00
                </td>
                <td>
                  <div class="hidden-link__replacement">
сб
                  </div>
                  <div class="hidden-link__link">
                    <form action="/search/UFA0102EVN1" data-action="search">
                      <button class="data-table__search" type="submit">
Найти билет
                      </button>
                    </form>
                  </div>
                </td>
              </tr>

              <tr class="hidden-link">
                <td>
                  <span>
Ширак Авиа
                  </span>
                  (

5G101

                  )
                </td>
                <td>
00:10
                </td>
                <td>
3ч 15мин
                </td>
                <td>
02:25
                </td>
                <td>
                  <div class="hidden-link__replacement">
вс
                  </div>
                  <div class="hidden-link__link">
                    <form action="/search/UFA0102EVN1" data-action="search">
                      <button class="data-table__search" type="submit">
Найти билет
                      </button>
                    </form>
                  </div>
                </td>
              </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>




  <div id="airports-menu-part">
    <div class="page__part">
<strong>Аэропорты, обслуживающие направление Уфа – Ереван</strong>

        <div class="list-of-items">
          <p>
<strong>Аэропорты Уфы</strong>, из которых выполняются рейсы в Ереван:
          </p>
          <ul>

              <li>



                  <a href="/airports/ufa" title="Аэропорт Уфа">
Уфа (UFA)
                  </a>

              </li>

          </ul>
        </div>


        <div class="list-of-items">
          <p>
<strong>Аэропорты Еревана</strong>, принимающие рейсы из Уфы:
          </p>
          <ul>

              <li>



                  <a href="/airports/zvartnots-international" title="Аэропорт Звартноц">
Звартноц (EVN)
                  </a>

              </li>

          </ul>
        </div>

    </div>
  </div>






  <div id="top_directions-menu-part">
    <div class="page__part">
<h3>Самые популярные на Авиасейлс</h3>
<h3>Авиабилеты из Уфы</h3>
      <div class="list-of-items --wide-prices">
        <ul>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/MOW" title="Авиабилеты Уфа — Москва">
Уфа – Москва
              </a>

                <span class="list-of-items__price">
от 2&nbsp;574<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/LED" title="Авиабилеты Уфа — Санкт-Петербург">
Уфа – Санкт-Петербург
              </a>

                <span class="list-of-items__price">
от 3&nbsp;170<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/AER" title="Авиабилеты Уфа — Сочи">
Уфа – Сочи
              </a>

                <span class="list-of-items__price">
от 3&nbsp;574<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/MRV" title="Авиабилеты Уфа — Минеральные Воды">
Уфа – Минеральные Воды
              </a>

                <span class="list-of-items__price">
от 3&nbsp;010<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/BAK" title="Авиабилеты Уфа — Баку">
Уфа – Баку
              </a>

                <span class="list-of-items__price">
от 7&nbsp;264<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/MCX" title="Авиабилеты Уфа — Махачкала">
Уфа – Махачкала
              </a>

                <span class="list-of-items__price">
от 4&nbsp;026<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/TAS" title="Авиабилеты Уфа — Ташкент">
Уфа – Ташкент
              </a>

                <span class="list-of-items__price">
от 5&nbsp;120<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/EVN" title="Авиабилеты Уфа — Ереван">
Уфа – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;690<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/NUX" title="Авиабилеты Уфа — Новый Уренгой">
Уфа – Новый Уренгой
              </a>

                <span class="list-of-items__price">
от 6&nbsp;270<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/DYU" title="Авиабилеты Уфа — Душанбе">
Уфа – Душанбе
              </a>

                <span class="list-of-items__price">
от 8&nbsp;610<span class="currency-font --rub">₽</span>
                </span>

            </li>

        </ul>
      </div>
<h3>Перелёты в Ереван</h3>
      <div class="list-of-items --wide-prices">
        <ul>

            <li>


              <a class="list-of-items__link" href="/routes/MOW/EVN" title="Авиабилеты Москва — Ереван">
Москва – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;477<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/AER/EVN" title="Авиабилеты Сочи — Ереван">
Сочи – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;590<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/MRV/EVN" title="Авиабилеты Минеральные Воды — Ереван">
Минеральные Воды – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;590<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/LED/EVN" title="Авиабилеты Санкт-Петербург — Ереван">
Санкт-Петербург – Ереван
              </a>

                <span class="list-of-items__price">
от 6&nbsp;364<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/SVX/EVN" title="Авиабилеты Екатеринбург — Ереван">
Екатеринбург – Ереван
              </a>

                <span class="list-of-items__price">
от 5&nbsp;562<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/UFA/EVN" title="Авиабилеты Уфа — Ереван">
Уфа – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;690<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/OVB/EVN" title="Авиабилеты Новосибирск — Ереван">
Новосибирск – Ереван
              </a>

                <span class="list-of-items__price">
от 10&nbsp;493<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/KUF/EVN" title="Авиабилеты Самара — Ереван">
Самара – Ереван
              </a>

                <span class="list-of-items__price">
от 6&nbsp;908<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/ROM/EVN" title="Авиабилеты Рим — Ереван">
Рим – Ереван
              </a>

                <span class="list-of-items__price">
от 3&nbsp;594<span class="currency-font --rub">₽</span>
                </span>

            </li>

            <li>


              <a class="list-of-items__link" href="/routes/RTW/EVN" title="Авиабилеты Саратов — Ереван">
Саратов – Ереван
              </a>

                <span class="list-of-items__price">
от 6&nbsp;326<span class="currency-font --rub">₽</span>
                </span>

            </li>

        </ul>
      </div>
    </div>
  </div>


  </div>

  <div class="page__extra">
    <nav class="page-part-menu" is="page_part_menu">
      <div class="page-part-menu__title">
Навигация по странице:
      </div>
      <ul data-link="scroll_link">

          <li>
            <a href="#common_info-menu-part" data-goal="navigation_common_info" title=Общая информация о перелётах>
Общая информация о перелётах
            </a>
          </li>

          <li>
            <a href="#month_prices-menu-part" data-goal="navigation_month_prices" title=Цены на авиабилеты>
Цены на авиабилеты
            </a>
          </li>

          <li>
            <a href="#airlines-menu-part" data-goal="navigation_airlines" title=Авиакомпании>
Авиакомпании
            </a>
          </li>

          <li>
            <a href="#direct_flights-menu-part" data-goal="navigation_direct_flights" title=Прямые рейсы>
Прямые рейсы
            </a>
          </li>

          <li>
            <a href="#airports-menu-part" data-goal="navigation_airports" title=Аэропорты>
Аэропорты
            </a>
          </li>

          <li>
            <a href="#top_directions-menu-part" data-goal="navigation_top_directions" title=Популярные направления>
Популярные направления
            </a>
          </li>


          <li>
            <a href="#graphs-menu-part">
Статистика по перелётам
            </a>
          </li>

      </ul>
    </nav>

    <div class="adsense-banners --right-column" id="div-gpt-ad-1462346769977-0" data-slot="/68258039/300x250_rightcolumn" data-size="300x250" data-fallback="div-gpt-ad-1505744189188-0">
    </div>

    <div class="adsense-banners --right-column" id="div-gpt-ad-1505744189188-0" data-slot="/68258039/300x250-rightcolumn_s2" data-size="300x250">
    </div>

<div class="social-widgets__tabs"  data-link="routes/social_tabs">
    <div class="social-widgets__tab">
        <input type="radio" id="social-widgets__tab-1" name="tab-group-1" checked>
        <label for="social-widgets__tab-1" class="social-widgets__vk">
            VKontakte
        </label>

        <div class="social-widgets__content">
            <div id="vk_groups"></div>
        </div>
    </div>
</div>

<script>
    (function() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=1469970979895783";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');

        var vk = document.createElement('script');
        vk.async = true;
        vk.type = 'text/javascript';
        vk.src = '//vk.com/js/api/openapi.js?101';
        vk.onload = function() {
            try {
                VK.Widgets.Group("vk_groups", {mode: 0, width: "260", height: "365", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 1239834);
            } catch (_e) {}
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vk, s);
    })();
</script>

      <div class="adsense-banners --right-column" id="div-gpt-ad-1502455167363-0" data-slot="/68258039/AS_300x250_content_rightcolumn2" data-size="300x50,300x240,300x100,300x250,300x75">
      </div>

  </div>
</div>

  <div id="graphs-menu-part">
<div class="statistics-graph" is="statistics_graph">
<div class="page__container --no-top-margin">
<div class="page__content">
<h3>Статистическая информация по перелётам из Уфы в Ереван</h3>










<div class="statistics-graph__wrap">

<input checked class="statistics-graph__control" id="month_prices" name="statistics_graphics" type="radio">
<div class="statistics-graph__item">
<h4>Динамика стоимости авиабилетов из Уфы в Ереван по месяцам</h4>
<p class="statistics-graph__item-description">Стоимость перелёта всегда зависит от времени путешествия. График позволит сравнить цены на авиабилеты из Уфы в Ереван, проследить динамику изменения их стоимости и найти оптимальное предложение.</p>

<img alt="Динамика стоимости авиабилетов из Уфы в Ереван по месяцам" class="statistics-graph__image" src="https://generator.aviasales.ru/charts/chart_prices_by_months_UFA_EVN_with_return.png" title="Динамика стоимости авиабилетов из Уфы в Ереван по месяцам">
<p>
Статистика поможет определить сезон низких цен.
 
Например, в декабре цены в среднем достигают
 
20&nbsp;095 рублей
, 
 
а в мае стоимость билетов опускается в среднем до уровня 
 
10&nbsp;858 рублей
. 
 
Планируйте свою поездку прямо сейчас!</p></div>

<input class="statistics-graph__control" id="search_by_months" name="statistics_graphics" type="radio">
<div class="statistics-graph__item">
<h4>Динамика поиска авиабилетов из Уфы в Ереван по месяцам</h4>


<p class="statistics-graph__item-description">Пользователи Авиасейлс в день совершают сотни тысяч поисков на нашем сайте. Мы анализируем эту информацию и составляем графики, чтобы вам было проще спланировать свои путешествия.</p>

<img alt="Динамика поиска авиабилетов из Уфы в Ереван по месяцам" class="statistics-graph__image" src="https://generator.aviasales.ru/charts/chart_searches_by_months_UFA_EVN_with_return.png" title="Динамика поиска авиабилетов из Уфы в Ереван по месяцам">
<p>
В период высокого спроса рекомендуется приобретать авиабилеты из Уфы в Ереван заранее.
 
Например, число поисковых запросов в апреле достигает максимума в 2166
 
запросов
, 
 
а в феврале их количество снижается до 38 от максимума.</p></div>

<input class="statistics-graph__control" id="price_before_flight" name="statistics_graphics" type="radio">
<div class="statistics-graph__item">
<h4>Динамика цен в зависимости от количества оставшихся дней до вылета из Уфы в Ереван</h4>
<p class="statistics-graph__item-description">Что выгоднее: покупать авиабилеты заранее, избегая всеобщего ажиотажа, или ближе к дате вылета воспользоваться «горячим» предложением? График поможет вам определить лучшее время для приобретения авиабилетов.</p>

<img alt="Динамика цен в зависимости от количества оставшихся дней до вылета из Уфы в Ереван" class="statistics-graph__image" src="https://generator.aviasales.ru/charts/chart_prices_by_early_booking_UFA_EVN_with_return.png" title="Динамика цен в зависимости от количества оставшихся дней до вылета из Уфы в Ереван">
<p>
Посмотрите, как менялась цена на авиабилеты из Уфы в Ереван в зависимости от времени покупки.
 
С начала продаж их стоимость меняется в среднем на 101%.
 
Минимальная цена по направлению из Уфы в Ереван —
 

за 48
 
дней
 
до вылета
, 
 
примерно
 
8&nbsp;887 рублей
. 
Максимальная цена по направлению из Уфы в Ереван —
 

в день вылета
, 
 
примерно
 
30&nbsp;414 рублей
. 
В большинстве случаев раннее бронирование помогает сэкономить, воспользуйтесь этим!</p></div>

<input class="statistics-graph__control" id="week_day" name="statistics_graphics" type="radio">
<div class="statistics-graph__item">
<h4>Динамика цен билетов на самолёт из Уфы в Ереван в зависимости от дня недели</h4>
<p class="statistics-graph__item-description">Стоимость авиабилетов из Уфы в Ереван не представляет собой фиксированную и постоянную сумму. Она зависит от множества факторов, в том числе и от дня вылета. Динамика изменений видна на графике.</p>

<img alt="Динамика цен билетов на самолёт из Уфы в Ереван в зависимости от дня недели" class="statistics-graph__image" src="https://generator.aviasales.ru/charts/chart_prices_by_weekday_UFA_EVN_with_return.png" title="Динамика цен билетов на самолёт из Уфы в Ереван в зависимости от дня недели">
<p>
По статистике, самый доступный вариант рейсов из Уфы в Ереван — по четвергам,
 
их средняя стоимость —
 
16&nbsp;519 рублей
. 
 
Наиболее дорогие рейсы — по вторникам, их средняя стоимость —
 
20&nbsp;994 рубля
. 
 
Стоит учесть, что вылеты в предпраздничные дни, как правило, дороже.
 
Мы надеемся, что эти данные помогут вам наиболее эффективно планировать свои путешествия.</p></div>

</div>
<ul class="statistics-graph__small-controls">

<li class="statistics-graph__small-controls-item active" data-control="graph_tab_item">
<label class="statistics-graph__small-controls-circle" for="month_prices"></label></li>

<li class="statistics-graph__small-controls-item " data-control="graph_tab_item">
<label class="statistics-graph__small-controls-circle" for="search_by_months"></label></li>

<li class="statistics-graph__small-controls-item " data-control="graph_tab_item">
<label class="statistics-graph__small-controls-circle" for="price_before_flight"></label></li>

<li class="statistics-graph__small-controls-item " data-control="graph_tab_item">
<label class="statistics-graph__small-controls-circle" for="week_day"></label></li>

</ul></div>
<div class="statistics-graph__tabs-wrap">
<strong>Выберите тип графика:</strong>
<ul class="statistics-graph__tabs">

<li class="statistics-graph__tabs-item active" data-control="graph_tab_item">
<label class="statistics-graph__tabs-label" data-goal="graph_month_prices" for="month_prices">Стоимость по месяцам</label></li>

<li class="statistics-graph__tabs-item " data-control="graph_tab_item">
<label class="statistics-graph__tabs-label" data-goal="graph_search_by_months" for="search_by_months">Поиски по месяцам</label></li>

<li class="statistics-graph__tabs-item " data-control="graph_tab_item">
<label class="statistics-graph__tabs-label" data-goal="graph_price_before_flight" for="price_before_flight">Цена и дни до вылета</label></li>

<li class="statistics-graph__tabs-item " data-control="graph_tab_item">
<label class="statistics-graph__tabs-label" data-goal="graph_week_day" for="week_day">Цена и дни недели</label></li>

</ul></div></div></div>

  </div>


<div class="footer" data-goal-category="footer">
<div class="footer__inner">
<div class="footer__links footer__side-spaces">
<div class="accordion">
<div class="accordion__tab">
<input id="countries" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="countries">Страны</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Страны</div>

<ul class="footer__list">



<li><a href="/countries/rossiya" title="Авиабилеты в Россию">Россия</a></li>


<li><a href="/countries/tailand" title="Авиабилеты в Таиланд">Таиланд</a></li>


<li><a href="/countries/chernogoriya" title="Авиабилеты в Черногорию">Черногория</a></li>


<li><a href="/countries/kipr" title="Авиабилеты в Кипр">Кипр</a></li>


<li><a href="/countries/bolgariya" title="Авиабилеты в Болгарию">Болгария</a></li>


<li><a href="/countries/gruziya" title="Авиабилеты в Грузию">Грузия</a></li>
<li class="footer__all"><a data-goal="all_countries" href="/countries">Все&nbsp;страны</a></li></ul></nav></div></div>
<div class="accordion__tab">
<input id="cities" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="cities">Города</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Города</div>

<ul class="footer__list">



<li><a href="/cities/moskva-mow" title="Авиабилеты в Москву">Москва</a></li>


<li><a href="/cities/sankt-peterburg-led" title="Авиабилеты в Санкт-Петербург">Санкт-Петербург</a></li>


<li><a href="/cities/adler-aer" title="Авиабилеты в Адлер">Адлер</a></li>


<li><a href="/cities/ekaterinburg-svx" title="Авиабилеты в Екатеринбург">Екатеринбург</a></li>


<li><a href="/cities/london-lon" title="Авиабилеты в Лондон">Лондон</a></li>
<li class="footer__all"><a data-goal="all_cities" href="/cities">Все&nbsp;города</a></li></ul></nav></div></div>
<div class="accordion__tab">
<input id="airlines" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="airlines">Авиакомпании</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Авиакомпании</div>
<ul class="footer__list">
<li><a href="/airlines/aeroflot" title="Спецпредложения авиакомпании Аэрофлот">Аэрофлот</a></li>
<li><a href="/airlines/air-france" title="Спецпредложения авиакомпании Air France">Air&nbsp;France</a></li>
<li><a href="/airlines/alitalia" title="Спецпредложения авиакомпании Alitalia">Alitalia</a></li>
<li><a href="/airlines/airbaltic" title="Спецпредложения авиакомпании Air Baltic">Air&nbsp;Baltic</a></li>
<li><a href="/airlines/emirates" title="Спецпредложения авиакомпании Emirates">Emirates</a></li>
<li><a href="/airlines/klm" title="Спецпредложения авиакомпании KLM">KLM</a></li>
<li class="footer__all"><a href="/airlines">Все&nbsp;авиакомпании</a></li></ul></nav></div></div>
<div class="accordion__tab">
<input id="airports" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="airports">Аэропорты</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Аэропорты</div>
<ul class="footer__list">
<li><a data-goal="airport" href="/airports/sheremetevo" title="Аэропорт Шереметьево Москва, Россия">Шереметьево</a></li>
<li><a data-goal="airport" href="/airports/kurumoch" title="Аэропорт Курумоч Самара, Россия">Курумоч</a></li>
<li><a data-goal="airport" href="/airports/domodedovo" title="Аэропорт Домодедово Москва, Россия">Домодедово</a></li>
<li><a data-goal="airport" href="/airports/tolmachevo" title="Аэропорт Толмачево Новосибирск, Россия">Толмачево</a></li>
<li><a data-goal="airport" href="/airports/vladivostok" title="Аэропорт Владивосток Владивосток, Россия">Владивосток</a></li>
<li><a data-goal="airport" href="/airports/aeroport-gamburga" title="Аэропорт Гамбурга Гамбург, Германия">Гамбург</a></li>
<li class="footer__all"><a href="/airports">Все&nbsp;аэропорты</a></li></ul></nav></div></div>
<div class="accordion__tab">
<input id="services" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="services">Сервисы</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Сервисы</div>
<ul class="footer__list">
<li><a href="/map" title="Куда угодно">Куда угодно</a></li>
<li><a href="https://www.aviasales.ru/psgr?utm_source=aviasales.ru&utm_medium=podval&utm_campaign=blog&utm_content=psgr" target="_blank" title="Журнал ПСЖР">Журнал ПСЖР</a></li>
<li><a href="/faq" id="faq-footer-service-link" title="Поддержка">Поддержка</a></li></ul></nav></div></div>
<div class="accordion__tab">
<input id="directions" name="footer-links" type="checkbox"/>
<label class="accordion__label" for="directions">Направления</label>
<div class="accordion__tab-inner">
<nav>
<div class="footer__title">Направления</div>
<ul class="footer__list">
<li><a data-goal="route" href="/routes/mow/aer" title="Авиабилеты из Москвы в Сочи">Москва – Сочи</a></li>
<li><a data-goal="route" href="/routes/mow/tiv" title="Авиабилеты из Москвы в Тиват">Москва – Тиват</a></li>
<li><a data-goal="route" href="/routes/mow/mrv" title="Авиабилеты из Москвы в Минеральные Воды">Москва – Минеральные Воды</a></li>
<li><a data-goal="route" href="/routes/led/mow" title="Авиабилеты из Санкт-Петербурга в Москву">Санкт-Петербург – Москва</a></li>
<li><a data-goal="route" href="/routes/mow/bkk" title="Авиабилеты из Москвы в Бангкок">Москва – Бангкок</a></li></ul></nav></div></div></div></div></div>
<div data-selene-widget="footer"><div class="s__ydpnzVToIhtbW_vbmC9V"><form class="s__V2Z40wRO7A3GItctjQx8"><div class="s__O2EJ5XXa3G6KaPbcpnaA"><div class="s__MiuilNmA99Hd9x9TuxoC"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon" style="display:inline-block" height="64" width="64"><path d="M23.25 5.25H.75v13.5h22.5V5.25z" fill="url(#EmojiLoveLetter__a)"></path><path d="M12 7.5.75 18.75h22.5L12 7.5Z" fill="#99A8AE"></path><path d="M12 7.95.75 18.75h22.5L12 7.95Z" fill="url(#EmojiLoveLetter__b)"></path><path d="M11.505 14.686.75 5.25h22.5l-10.756 9.436a.75.75 0 0 1-.99 0z" fill="#99A8AE"></path><path d="M11.517 14.295.75 5.25h22.5l-10.768 9.045a.75.75 0 0 1-.965 0z" fill="url(#EmojiLoveLetter__c)"></path><path d="M11.517 14.295.75 5.25h22.5l-10.768 9.045a.75.75 0 0 1-.965 0z" fill="url(#EmojiLoveLetter__d)"></path><path d="M12 9.085c-1.294-2.136-4.875-1.302-4.875 1.38 0 1.8 1.651 3.003 4.875 5.66 3.223-2.657 4.875-3.86 4.875-5.66 0-2.682-3.582-3.516-4.875-1.38z" fill="url(#EmojiLoveLetter__e)"></path><defs><linearGradient id="EmojiLoveLetter__a" x1="12" x2="12" y1="18.75" y2="5.25" gradientUnits="userSpaceOnUse"><stop stop-color="#E6EBED" offset="0"></stop><stop stop-color="#DBE2E5" offset="0.512"></stop><stop stop-color="#CCD5D9" offset="1"></stop></linearGradient><linearGradient id="EmojiLoveLetter__b" x1="12" x2="12" y1="18.75" y2="7.95" gradientUnits="userSpaceOnUse"><stop stop-color="#E6EBED" offset="0"></stop><stop stop-color="#E3E9EB" offset="0.26"></stop><stop stop-color="#DAE1E4" offset="0.454"></stop><stop stop-color="#CFD8DD" offset="0.576"></stop></linearGradient><linearGradient id="EmojiLoveLetter__c" x1="12" x2="12" y1="14.153" y2="-19.352" gradientUnits="userSpaceOnUse"><stop stop-color="#B9C2C7" offset="0"></stop><stop stop-color="#C2CACF" offset="0.046"></stop><stop stop-color="#DCE2E5" offset="0.203"></stop><stop stop-color="#E6EBED" offset="0.297"></stop></linearGradient><linearGradient id="EmojiLoveLetter__d" x1="12" x2="12" y1="14.47" y2="5.25" gradientUnits="userSpaceOnUse"><stop stop-color="#E6EBED" offset="0"></stop><stop stop-color="#E3E9EC" offset="0.582"></stop><stop stop-color="#DAE3E8" offset="1"></stop></linearGradient><linearGradient id="EmojiLoveLetter__e" x1="12" x2="12" y1="16.124" y2="7.875" gradientUnits="userSpaceOnUse"><stop stop-color="#DB0100" offset="0"></stop><stop stop-color="#F31317" offset="0.584"></stop><stop stop-color="#FF1C23" offset="1"></stop></linearGradient></defs></svg></div><div class="s__GO0VzBTmG_AEdG0SXjNd"><div class="s__ixUjxUtcERG12KjGvkJ2 s__wz46TWgrOGMneOhk9MFQ" data-test-id="text">Знаем, как сэкономить на отдыхе, ловить скидки и летать без визы. И вам расскажем</div></div></div><hr class="s__Pj3UANrboxahdh0xLQ9b s__ZXmZ2Je5zy2QhVvcDfud s__YqyjIRucv0s5fP5eE2Re"/><div class="s__qFeixQoeUdKHsZCVvlcb"><div class="s__sKkvfJDIxRicM2rUUvFJ"><div class="s__uiOXOPACxZ4ldhBvncbO"><div class="s__DBaOd0e5YuTWXl9ZYY27"><div class="s__vzA4WYMVyhefe7BeGDbT" data-test-id="input-container"><div class="s__brVoVJPQwenUHfGanmqK" data-size="medium"><input id="email_subscription_form_widget_input" class="s__g8p5IdIGgUOnC7W9evHw" placeholder="На какую почту слать письма" data-size="medium" data-test-id="input" value=""/></div></div></div><div class="s__rOXQVqjcwcMZTg1HYuER"><button disabled="" type="submit" class="s__cQ6neS4ccCunOu9Ydn0k s__wqbt14S1NbrCdowsvgrb s__eEClvAD7BnPrQbwBW5zC s__qWEfgHVyuCgdrl8BWi8o" data-test-id="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="s___FFCgVdbY8oojID6HQVE" data-test-id="icon" style="display:inline-block"><path d="M9.828 18.356a1 1 0 0 1-1.37 0L2.775 13.01a1 1 0 0 1 0-1.457l.555-.523a1 1 0 0 1 1.37 0l4.443 4.167 10.155-9.551a1 1 0 0 1 1.373.002l.56.53a1 1 0 0 1-.003 1.455l-11.4 10.722Z"></path></svg></button></div></div></div></div></form><button class="s__ah9ShjLmxhtKfy6Fx66g"><div class="s__CzcQC1c2JdbpfSL4aOak"><span class="s__ixUjxUtcERG12KjGvkJ2 s__z_5eqZFur2v46j8XWbAg s__FAMQsOxT1VVnht2d43nx" data-test-id="text">В приложении удобнее</span><span class="s__SEseVRJI74LKH0_AGK1T s__xjysp1u5bYkOnjeY9MiA s__yThIubmHyhoaALzGa6oD" data-test-id="text">Там супербыстрый поиск и легче следить за ценами на билеты</span></div><div class="s__rnbDhIV3it6rSU6OnypQ s__WM67anrs2qjfVHDXDNW_ s__aXHIyM47HvGNpErdh6LK" style="--image_width:88;--image_height:88"><img src="https://static.aviasales.com/selene-static/entrypoint/362c6e9b48474c4cfb80.png" class="s__u970sMSen6mw5vizRoPD s__IfTcK9HkqMS6SVk5wCFs s___upxsVkNisXgoGZIqsEJ" loading="lazy" alt=""/></div><div class="s__rnbDhIV3it6rSU6OnypQ s__WM67anrs2qjfVHDXDNW_ s__ehH2t7nx0bMDHpcDh49s" style="--image_width:88;--image_height:88"><img src="https://static.aviasales.com/selene-static/entrypoint/72a1087f131b98cd05b8.png" class="s__u970sMSen6mw5vizRoPD s__IfTcK9HkqMS6SVk5wCFs s___upxsVkNisXgoGZIqsEJ" loading="lazy" alt=""/></div></button></div></div>
<div class="footer__bottom">
<div class="footer__inner">
<div class="footer__side-spaces">
<ul class="footer__links-list --social">
  <li>
    <a class="footer__social-link vk" data-goal="vk_group_link" href="https://vk.com/aviasalesru" rel="nofollow"
       target="_blank" title="Авиасейлс ВКонтакте">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/vk.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/vk_hover.svg">
      ВКонтакте
    </a>
  </li>
  <li>
    <a class="footer__social-link tg" data-goal="tg_group_link" href="https://t.me/aviasales" rel="nofollow"
       target="_blank" title="Авиасейлс в Telegram">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/telegram.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/telegram_hover.svg">
      Telegram
    </a>
  </li>
  <li>
    <a class="footer__social-link tw" data-goal="tw_group_link" href="https://twitter.com/aviasales" rel="nofollow"
       target="_blank" title="Авиасейлс в Twitter">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/twi.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/twi_hover.svg">
      Twitter
    </a>
  </li>
  <li>
    <a class="footer__social-link tk" data-goal="tk_group_link" href="https://www.tiktok.com/@aviasales" rel="nofollow"
       target="_blank" title="Авиасейлс в TikTok">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/tiktok.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/tiktok_hover.svg">
      TikTok
    </a>
  </li>
  <li>
    <a class="footer__social-link dz" data-goal="dz_group_link" href="https://dzen.ru/aviasales" rel="nofollow"
       target="_blank" title="Авиасейлс в Дзен">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/dzen.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/dzen_hover.svg">
      Дзен
    </a>
  </li>
  <li>
    <a class="footer__social-link vb" data-goal="vb_group_link" href="https://invite.viber.com/?g2=AQAtX3IQDoKIAkjNZmzOMFaqi9OHuUKPrggGpt4kfnukhlsf0gueU8hnc6dLdcqt" rel="nofollow"
       target="_blank" title="Авиасейлс в Viber">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/viber.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/viber_hover.svg">
      Viber
    </a>
  </li>
  <li>
    <a class="footer__social-link yt" data-goal="yt_group_link" href="https://www.youtube.com/aviasales" rel="nofollow"
       target="_blank" title="Авиасейлс в YouTube">
      <img class="--default-image" src="https://static.aviasales.com/helios-assets/footer/youtube.svg">
      <img class="--hover-image" src="https://static.aviasales.com/helios-assets/footer/youtube_hover.svg">
      YouTube
    </a>
  </li>
</ul>


<ul class="footer__links-list --about" data-goal-category="footer_links">

<li><a data-goal="about" href="/about" rel="nofollow">О нас</a></li>
<li><a href="/affiliateprogram" rel="nofollow">Партнёрская программа</a></li>
<li><a data-goal="advertising" href="/advertising" rel="nofollow">Реклама</a></li>
<li><a data-goal="press" href="https://newsroom.aviasales.ru" rel="nofollow">Пресс-центр</a></li>

<li><a data-goal="vacancies" href="/about/work" rel="nofollow">Вакансии</a></li>
<li><a href="/faq" id="faq-footer-link">Поддержка</a></li>
<li><a href="/terms-of-use" rel="nofollow">Правила</a></li>
<li><a data-goal="privacy" href="/privacy" rel="nofollow">Политика конфиденциальности</a></li>

<li><a href="/offer" rel="nofollow">Оферта</a></li></ul>

<div class="footer__copy">© 2007–2024, Авиасейлс — дешевые авиабилеты</div></div></div></div>
<div class="footer__additional-links">
<ul class="footer__additional-links-list">







<a class="footer__additional-links-item --country" data-goal="aviasales_uz" data-markerable="true" href="https://www.aviasales.uz/routes/ufa/evn">
<span class="footer__additional-links-icon">UZ</span>
<span class="footer__additional-links-label">Авиабилеты Узбекистан</span></a>





<a class="footer__additional-links-item --country" data-goal="aviasales_kz" data-markerable="true" href="https://www.aviasales.kz/routes/ufa/evn">
<span class="footer__additional-links-icon">KZ</span>
<span class="footer__additional-links-label">Авиабилеты Казахстан</span></a>





<a class="footer__additional-links-item --country" data-goal="aviasales_by" data-markerable="true" href="https://www.aviasales.by/routes/ufa/evn">
<span class="footer__additional-links-icon">BY</span>
<span class="footer__additional-links-label">Авиабилеты Беларусь</span></a>

<a class="footer__additional-links-item --hl" data-goal="hotels" data-markerable="true" href="https://hotels.aviasales.ru/">
<span class="footer__additional-links-icon"></span>
<span class="footer__additional-links-label">Поиск и бронирование отелей</span></a>
<a class="footer__additional-links-item --wl" data-goal="white_label" data-markerable="true" href="https://www.travelpayouts.com/promo/whitelabel/?utm_source=aviasales" rel="nofollow">
<span class="footer__additional-links-icon"></span>
<span class="footer__additional-links-label">White Label Авиабилеты</span></a></ul></div>

</div>


<div class="hidden" data-page-search-params="{&quot;destination&quot;:{&quot;cityIata&quot;:&quot;EVN&quot;,&quot;iata&quot;:&quot;EVN&quot;,&quot;type&quot;:&quot;city&quot;,&quot;name&quot;:&quot;Ереван&quot;},&quot;origin&quot;:{&quot;cityIata&quot;:&quot;UFA&quot;,&quot;iata&quot;:&quot;UFA&quot;,&quot;type&quot;:&quot;city&quot;,&quot;name&quot;:&quot;Уфа&quot;}}"></div>
<!--DO NOTHING-->









<script defer src="https://static.aviasales.com/helios-assets/i18n/ru.30dfb3f4fcb1b32bfa6e.js"></script>

<script defer src="https://static.aviasales.com/helios-assets/helios/1070.2bed56befa8de8a06477a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/8798.35c7ea9c892640d4c1c1a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/219.67c405ade54175b7455da.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/rollbar_config_entry.a547502e336d474acedaa.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/runtime.helios.b2732eeac67d82928de2a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/rollbar_config.f78c923f1022ccfe9f52a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/rollbar_entry.44a1037de17709641027a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/rollbar_sdk.699957cd9e61d25ab69ea.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/wds.ac37dc5299a542b21eefa.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/css_variables.e1b004a12b789e20cb70a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/3000.9925e4cbd801f2716c15a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/2207.4e60932ebf3aaabf1bf6a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/4876.daa93ad7a0ea83ced2fda.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/8235.96937804ae182d44d3aba.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/5007.d7bd6783aa78fcadcb36a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/1337.77037e25abf6111a33d1a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/app_entry.a12b0e9e90deafd3f75fa.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/app.e931f7e0e840eb552b47a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/7495.8d193cd8340deff58744a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/6163.2e3d3275419ace5731e9a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/1805.eeed19116a80199e12a8a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/5108.9730e2da622a84b4df35a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/index_entry.5f33ad0c159def8c0a36a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/index.2ee02c95b859f77f6219a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/old_browser_notification_entry.f42ae6fe83b20f91f8b7a.min.js"></script>
<script defer src="https://static.aviasales.com/helios-assets/helios/old-browser-notification.838093c38fcbb4e30531a.min.js"></script></head></html>
