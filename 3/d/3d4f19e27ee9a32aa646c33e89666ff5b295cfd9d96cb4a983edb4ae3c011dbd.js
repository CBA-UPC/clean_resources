(()=>{var e,t,n,r={935:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getCLS:()=>B,getFCP:()=>g,getFID:()=>S,getLCP:()=>T,getTTFB:()=>C});var r,i,o,a,s=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},l=function(e,t,n){var r;return function(i){t.value>=0&&(i||n)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},f=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},O=function(){u((function(e){var t=e.timeStamp;f=t}),!0)},m=function(){return f<0&&(f=p(),O(),d((function(){setTimeout((function(){f=p(),O()}),0)}))),{get firstHiddenTime(){return f}}},g=function(e,t){var n,r=m(),i=s("FCP"),o=function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=e.startTime,i.entries.push(e),n(!0)))},a=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],u=a?null:c("paint",o);(a||u)&&(n=l(e,i,t),a&&o(a),d((function(r){i=s("FCP"),n=l(e,i,t),requestAnimationFrame((function(){requestAnimationFrame((function(){i.value=performance.now()-r.timeStamp,n(!0)}))}))})))},v=!1,h=-1,B=function(e,t){v||(g((function(e){h=e.value})),v=!0);var n,r=function(t){h>-1&&e(t)},i=s("CLS",0),o=0,a=[],f=function(e){if(!e.hadRecentInput){var t=a[0],r=a[a.length-1];o&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,a.push(e)):(o=e.value,a=[e]),o>i.value&&(i.value=o,i.entries=a,n())}},p=c("layout-shift",f);p&&(n=l(r,i,t),u((function(){p.takeRecords().map(f),n(!0)})),d((function(){o=0,h=-1,i=s("CLS",0),n=l(r,i,t)})))},_={passive:!0,capture:!0},y=new Date,R=function(e,t){r||(r=t,i=e,o=new Date,w(removeEventListener),b())},b=function(){if(i>=0&&i<o-y){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(t){t(e)})),a=[]}},M=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){R(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,_),removeEventListener("pointercancel",r,_)};addEventListener("pointerup",n,_),addEventListener("pointercancel",r,_)}(t,e):R(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,M,_)}))},S=function(e,t){var n,o=m(),f=s("FID"),p=function(e){e.startTime<o.firstHiddenTime&&(f.value=e.processingStart-e.startTime,f.entries.push(e),n(!0))},O=c("first-input",p);n=l(e,f,t),O&&u((function(){O.takeRecords().map(p),O.disconnect()}),!0),O&&d((function(){var o;f=s("FID"),n=l(e,f,t),a=[],i=-1,r=null,w(addEventListener),o=p,a.push(o),b()}))},E={},T=function(e,t){var n,r=m(),i=s("LCP"),o=function(e){var t=e.startTime;t<r.firstHiddenTime&&(i.value=t,i.entries.push(e),n())},a=c("largest-contentful-paint",o);if(a){n=l(e,i,t);var f=function(){E[i.id]||(a.takeRecords().map(o),a.disconnect(),E[i.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,f,{once:!0,capture:!0})})),u(f,!0),d((function(r){i=s("LCP"),n=l(e,i,t),requestAnimationFrame((function(){requestAnimationFrame((function(){i.value=performance.now()-r.timeStamp,E[i.id]=!0,n(!0)}))}))}))}},C=function(e){var t,n=s("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(t){if(window){if(!t){if(window.parent===window||!document.getElementById("boomr-if-as"))return;if(window.BOOMR&&BOOMR.boomerang_frame&&BOOMR.window)try{BOOMR.boomerang_frame.document.domain!==BOOMR.window.document.domain&&(BOOMR.boomerang_frame.document.domain=BOOMR.window.document.domain)}catch(e){BOOMR.isCrossOriginError(e)||BOOMR.addError(e,"BOOMR_check_doc_domain.domainFix")}t=document.domain}if(t&&-1!==t.indexOf(".")&&window.parent){try{return void window.parent.document}catch(e){try{document.domain=t}catch(e){return}}try{return void window.parent.document}catch(e){t=t.replace(/^[\w\-]+\./,"")}e(t)}}}BOOMR_start=(new Date).getTime(),e(),function(t){var n,r,i,o,a,s,c,u=t;if(t.parent!==t&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(t=t.parent),i=t.document,t.BOOMR||(t.BOOMR={}),BOOMR=t.BOOMR,!BOOMR.version){if(BOOMR.version="2.3.2",BOOMR.window=t,BOOMR.boomerang_frame=u,BOOMR.plugins||(BOOMR.plugins={}),function(){try{void 0!==new t.CustomEvent("CustomEvent")&&(o=function(e,n){return new t.CustomEvent(e,n)})}catch(e){}try{!o&&i.createEvent&&i.createEvent("CustomEvent")&&(o=function(e,t){var n=i.createEvent("CustomEvent");return t=t||{cancelable:!1,bubbles:!1},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n})}catch(e){}!o&&i.createEventObject&&(o=function(e,t){var n=i.createEventObject();return n.type=n.propertyName=e,n.detail=t.detail,n}),o||(o=function(){})}(),a=function(e,t,n){var r=o(e,{detail:t});function a(){try{i.dispatchEvent?i.dispatchEvent(r):i.fireEvent&&i.fireEvent("onpropertychange",r)}catch(e){}}r&&(n?BOOMR.setImmediate(a):a())},void 0!==i.hidden?(s="visibilityState",c="visibilitychange"):void 0!==i.mozHidden?(s="mozVisibilityState",c="mozvisibilitychange"):void 0!==i.msHidden?(s="msVisibilityState",c="msvisibilitychange"):void 0!==i.webkitHidden&&(s="webkitVisibilityState",c="webkitvisibilitychange"),n={beacon_url:"",beacon_url_force_https:!0,beacon_urls_allowed:[],beacon_type:"AUTO",beacon_auth_key:"Authorization",beacon_auth_token:void 0,beacon_with_credentials:!1,beacon_disable_sendbeacon:!1,site_domain:t.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),user_ip:"",autorun:!0,hasSentPageLoadBeacon:!1,r:void 0,same_site_cookie:"Lax",secure_cookie:!1,forced_same_site_cookie_none:!1,events:{page_ready:[],page_unload:[],before_unload:[],dom_loaded:[],visibility_changed:[],prerender_to_visible:[],before_beacon:[],beacon_no_url:[],beacon:[],page_load_beacon:[],xhr_load:[],click:[],form_submit:[],config:[],xhr_init:[],spa_init:[],spa_navigation:[],spa_cancel:[],xhr_send:[],xhr_error:[],error:[],netinfo:[],rage_click:[]},public_events:{before_beacon:"onBeforeBoomerangBeacon",beacon:"onBoomerangBeacon",onboomerangloaded:"onBoomerangLoaded"},translate_events:{onbeacon:"beacon",onconfig:"config",onerror:"error",onxhrerror:"xhr_error"},unloadEventsCount:0,unloadEventCalled:0,listenerCallbacks:{},vars:{},singleBeaconVars:{},varPriority:{"-1":{},1:{}},errors:{},disabled_plugins:{},localStorageSupported:!1,LOCAL_STORAGE_PREFIX:"_boomr_",nativeOverwrites:[],xb_handler:function(e){return function(r){var i;r||(r=t.event),r.target?i=r.target:r.srcElement&&(i=r.srcElement),3===i.nodeType&&(i=i.parentNode),i&&i.nodeName&&"OBJECT"===i.nodeName.toUpperCase()&&"application/x-shockwave-flash"===i.type||n.fireEvent(e,i)}},clearEvents:function(){var e;for(e in this.events)this.events.hasOwnProperty(e)&&(this.events[e]=[])},clearListeners:function(){var e;for(e in n.listenerCallbacks)if(n.listenerCallbacks.hasOwnProperty(e))for(;n.listenerCallbacks[e].length;)BOOMR.utils.removeListener(n.listenerCallbacks[e][0].el,e,n.listenerCallbacks[e][0].fn);n.listenerCallbacks={}},fireEvent:function(e,t){var n,r,i,o;if(e=e.toLowerCase(),this.translate_events[e]&&(e=this.translate_events[e]),this.events.hasOwnProperty(e)){for(this.public_events.hasOwnProperty(e)&&a(this.public_events[e],t),i=this.events[e],"before_beacon"!==e&&"beacon"!==e&&BOOMR.real_sendBeacon(),o=i.length,n=0;n<o;n++)try{(r=i[n]).fn.call(r.scope,t,r.cb_data)}catch(t){BOOMR.addError(t,"fireEvent."+e+"<"+n+">")}for(n=0;n<o;n++)i[n].once&&(i.splice(n,1),o--,n--)}},spaNavigation:function(){n.onloadfired=!0},beaconUrlAllowed:function(e){if(!n.beacon_urls_allowed||0===n.beacon_urls_allowed.length)return!0;for(var t=0;t<n.beacon_urls_allowed.length;t++)if(new RegExp(n.beacon_urls_allowed[t]).exec(e))return!0;return!1},checkLocalStorageSupport:function(){var e=n.LOCAL_STORAGE_PREFIX+"clss";n.localStorageSupported=!1;try{if(!t.JSON||!t.localStorage)return;t.localStorage.setItem(e,e),n.localStorageSupported=t.localStorage.getItem(e)===e,t.localStorage.removeItem(e)}catch(e){n.localStorageSupported=!1}},onFrameUnloaded:function(){var e,t;for(BOOMR.isUnloaded=!0,e=0;e<n.nativeOverwrites.length;e++)(t=n.nativeOverwrites[e]).obj[t.functionName]=t.origFn;n.nativeOverwrites=[]}},r={t_start:BOOMR_start,t_end:void 0,url:"",config_url:null,loadedLate:!1,beaconsSent:0,isUnloaded:!1,beaconInQueue:!1,cookies:{},testedCookies:!1,constants:{BEACON_TYPE_SPAS:["spa","spa_hard"],MAX_GET_LENGTH:2e3},session:{domain:n.site_domain,ID:void 0,start:void 0,length:0,enabled:!0},utils:{hasPostMessageSupport:function(){return!(!t.postMessage||"function"!=typeof t.postMessage&&"object"!=typeof t.postMessage)},objectToString:function(e,t,n){var r,i=[];if(!e||"object"!=typeof e)return e;if(void 0===t&&(t="\n\t"),n||(n=0),BOOMR.utils.isArray(e)){for(r=0;r<e.length;r++)n>0&&null!==e[r]&&"object"==typeof e[r]?i.push(this.objectToString(e[r],t+("\n\t"===t?"\t":""),n-1)):"&"===t?i.push(encodeURIComponent(e[r])):i.push(e[r]);t=","}else for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n>0&&null!==e[r]&&"object"==typeof e[r]?i.push(encodeURIComponent(r)+"="+this.objectToString(e[r],t+("\n\t"===t?"\t":""),n-1)):"&"===t?i.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r])):i.push(r+"="+e[r]));return i.join(t)},getCookie:function(e){},getRawCookie:function(e){},setCookie:function(e,t,n){},getSubCookies:function(e){},removeCookie:function(e){},getSameSiteAttributeParts:function(){var e=n.same_site_cookie.toUpperCase();return n.forced_same_site_cookie_none&&(e="NONE"),"LAX"===e?["SameSite=Lax"]:"NONE"===e?"https:"===location.protocol&&this.isCurrentUASameSiteNoneCompatible()?["SameSite=None","Secure"]:[]:"STRICT"===e?["SameSite=Strict"]:["SameSite=Lax"]},getLocalStorage:function(e){var r,i;if(!e||!n.localStorageSupported)return null;try{if(null===(r=t.localStorage.getItem(n.LOCAL_STORAGE_PREFIX+e)))return;i=t.JSON.parse(r)}catch(e){return BOOMR.warn(e),null}return i&&"object"==typeof i.items?"number"==typeof i.expires&&BOOMR.now()>=i.expires?void this.removeLocalStorage(e):i.items:(this.removeLocalStorage(e),null)},setLocalStorage:function(e,r,i){var o,a,s;if(!e||!n.localStorageSupported||"object"!=typeof r)return!1;if(o={items:r},"number"==typeof i&&(o.expires=BOOMR.now()+1e3*i),(a=t.JSON.stringify(o)).length<5e4){try{if(t.localStorage.setItem(n.LOCAL_STORAGE_PREFIX+e,a),a===(s=t.localStorage.getItem(n.LOCAL_STORAGE_PREFIX+e)))return!0}catch(e){}BOOMR.warn("Saved storage value doesn't match what we tried to set:\n"+a+"\n"+s)}else BOOMR.warn("Storage items too large: "+a.length+" "+a);return!1},removeLocalStorage:function(e){if(!e||!n.localStorageSupported)return!1;try{return t.localStorage.removeItem(n.LOCAL_STORAGE_PREFIX+e),!0}catch(e){}return!1},cleanupURL:function(e,t){if(!e||BOOMR.utils.isArray(e))return"";if(n.strip_query_string&&(e=e.replace(/\?.*/,"?qs-redacted")),void 0!==t&&e&&e.length>t){var r=e.indexOf("?");e=-1!==r&&r<t?e.substr(0,r)+"?...":e.substr(0,t-3)+"..."}return e},hashQueryString:function(e,t){return e?e.match?(e.match(/^\/\//)&&(e=location.protocol+e),e.match(/^(https?|file):/)?(t&&(e=e.replace(/#.*/,"")),e.replace(/\?([^#]*)/,(function(e,t){return"?"+(t.length>10?BOOMR.utils.hashString(t):t)}))):(BOOMR.error("Passed in URL is invalid: "+e),"")):(BOOMR.addError("TypeError: Not a string","hashQueryString",typeof e),""):e},pluginConfig:function(e,t,n,r){var i,o=0;if(!t||!t[n])return!1;for(i=0;i<r.length;i++)void 0!==t[n][r[i]]&&(e[r[i]]=t[n][r[i]],o++);return o>0},arrayFilter:function(e,t){var n=[];if(!(this.isArray(e)||e&&"number"==typeof e.length)||"function"!=typeof t)return n;if("function"==typeof e.filter)n=e.filter(t);else for(var r,i=-1,o=e.length;++i<o;)t(r=e[i],i,e)&&(n[n.length]=r);return n},arrayFind:function(e,t){if((this.isArray(e)||e&&"number"==typeof e.length)&&"function"==typeof t){if("function"==typeof e.find)return e.find(t);for(var n,r=-1,i=e.length;++r<i;)if(t(n=e[r],r,e))return n}},isMutationObserverSupported:function(){return!(t&&t.navigator&&t.navigator.userAgent&&t.navigator.userAgent.match(/Trident.*rv[ :]*11\./))&&t&&t.MutationObserver&&"function"==typeof t.MutationObserver},addObserver:function(e,n,r,i,o,a){var s,c,u={observer:null,timer:null};if(!this.isMutationObserverSupported()||!i||!e)return null;function d(e){var t=!1;u.timer&&(clearTimeout(u.timer),u.timer=null),i&&((t=i.call(a,e,o))||(i=null)),!t&&u.observer&&(u.observer.disconnect(),u.observer=null),"number"==typeof t&&t>0&&(u.timer=setTimeout(d,t))}return s=t.MutationObserver,t.Zone&&"function"==typeof t.Zone.__symbol__&&(c=t.Zone.__symbol__("MutationObserver"))&&"string"==typeof c&&t.hasOwnProperty(c)&&"function"==typeof t[c]&&(s=t[c]),u.observer=new s(d),r&&(u.timer=setTimeout(d,u.timeout)),u.observer.observe(e,n),u},addListener:function(e,t,r,i){var o=!1;e.addEventListener?("object"==typeof i?o=i:"boolean"==typeof i&&i&&BOOMR.browser.supportsPassive()&&(o={capture:!1,passive:!0}),e.addEventListener(t,r,o)):e.attachEvent&&e.attachEvent("on"+t,r),n.listenerCallbacks[t]=n.listenerCallbacks[t]||[],n.listenerCallbacks[t].push({el:e,fn:r})},removeListener:function(e,t,r){if(e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent&&e.detachEvent("on"+t,r),n.listenerCallbacks.hasOwnProperty(t))for(var i=0;i<n.listenerCallbacks[t].length;i++)if(r===n.listenerCallbacks[t][i].fn&&e===n.listenerCallbacks[t][i].el)return void n.listenerCallbacks[t].splice(i,1)},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},inArray:function(e,t){var n;if(void 0===e||void 0===t||!t.length)return!1;for(n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},getQueryParamValue:function(e,t){var n,r,i,o;if(!e)return null;for("string"==typeof t?(n=BOOMR.window.document.createElement("a")).href=t:n="object"==typeof t&&"string"==typeof t.search?t:BOOMR.window.location,r=n.search.slice(1).split(/&/),i=0;i<r.length;i++)if(r[i]&&(o=r[i].split("=")).length&&o[0]===e)try{return o.length>1?decodeURIComponent(o.splice(1).join("=").replace(/\+/g," ")):""}catch(e){if(!e||"string"!=typeof e.name||-1===e.name.indexOf("URIError"))throw e}return null},generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},generateId:function(e){return"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".substr(0,e||40).replace(/x/g,(function(e){return"0"===(e=(Math.random()||.01).toString(36))?"0":e.substr(2,1)}))},serializeForUrl:function(e){return BOOMR.utils.Compression&&BOOMR.utils.Compression.jsUrl?BOOMR.utils.Compression.jsUrl(e):window.JSON?JSON.stringify(e):""},getMyURL:function(){var e,t=document.currentScript||document.getElementById("boomr-if-as")||document.getElementById("boomr-scr-as");if(t)return t.src;var n,r=document.getElementsByTagName("script");for(n=r.length;n--;)if("interactive"===r[n].readyState)return r[n].src;try{throw new Error}catch(t){if("stack"in t&&(e=this.arrayFilter(t.stack.split(/\n/),(function(e){return e.match(/https?:\/\//)})))&&e.length)return e[0].replace(/.*(https?:\/\/.+?)(:\d+)+\D*$/m,"$1")}return""},scroll:function(){var e=void 0!==t.pageXOffset,n="CSS1Compat"===(t.document.compatMode||""),r={x:0,y:0};return e?"function"==typeof t.pageXOffset?(r.x=t.pageXOffset(),r.y=t.pageYOffset()):(r.x=t.pageXOffset,r.y=t.pageYOffset):n?(r.x=t.document.documentElement.scrollLeft,r.y=t.document.documentElement.scrollTop):(r.x=t.document.body.scrollLeft,r.y=t.document.body.scrollTop),"number"==typeof r.sx&&(r.sx=Math.round(r.sx)),"number"==typeof r.sy&&(r.sy=Math.round(r.sy)),r},windowHeight:function(){return t.innerHeight||t.document.documentElement.clientHeight||t.document.body.clientHeight},windowWidth:function(){return t.innerWidth||t.document.documentElement.clientWidth||t.document.body.clientWidth},isNative:function(e){return!!e&&e.toString&&!e.hasOwnProperty("toString")&&/\[native code\]/.test(String(e))},overwriteNative:function(e,t,r){e&&r&&(BOOMR.boomerang_frame!==BOOMR.window&&n.nativeOverwrites.push({obj:e,functionName:t,origFn:e[t]}),e[t]=r)},isInteger:function(e){return(Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e})(e)},isObjectEmpty:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},hashString:function(e){e=encodeURIComponent(e);for(var t=2166136261,n=0;n<e.length;n++)t^=e.charCodeAt(n),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);var r=(t>>>0).toString()+e.length;return parseInt(r).toString(36)},isCurrentUASameSiteNoneCompatible:function(){return!(t&&t.navigator&&t.navigator.userAgent&&"string"==typeof t.navigator.userAgent)||this.isUASameSiteNoneCompatible(t.navigator.userAgent)},isUASameSiteNoneCompatible:function(e){var t=e.match(/(UCBrowser)\/(\d+\.\d+)\.(\d+)/);if(t){var n=parseFloat(t[2]),r=t[3];return 12.13===n?!(r<=2):!(n<12.13)}if(t=e.match(/(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/)){var i=t[2];return!(i>=51&&i<=66)}return(t=e.match(/(Macintosh;.*Mac OS X 10_14[_\d]*.*) AppleWebKit\//))?!((t=e.match(/Version\/.* Safari\//))&&null===(t=e.match(/Chrom(?:e|ium)/))||(t=e.match(/^Mozilla\/\d+(?:\.\d+)* \(Macintosh;.*Mac OS X \d+(?:_\d+)*\) AppleWebKit\/\d+(?:\.\d+)* \(KHTML, like Gecko\)$/))):!(t=e.match(/(iP.+; CPU .*OS 12(?:_\d+)*.*)/))}},browser:{results:{},supportsPassive:function(){if(void 0===BOOMR.browser.results.supportsPassive){if(BOOMR.browser.results.supportsPassive=!1,!Object.defineProperty)return!1;try{var e=Object.defineProperty({},"passive",{get:function(){BOOMR.browser.results.supportsPassive=!0}});window.addEventListener("test",null,e)}catch(e){}}return BOOMR.browser.results.supportsPassive}},init:function(r){var o,a,s=["autorun","beacon_auth_key","beacon_auth_token","beacon_with_credentials","beacon_disable_sendbeacon","beacon_url","beacon_url_force_https","beacon_type","site_domain","strip_query_string","user_ip","same_site_cookie","secure_cookie"];if(BOOMR.addVar("boomerang_init",BOOMR.now()),e(),r||(r={}),void 0!==r.log&&(this.log=r.log),this.log||(this.log=function(){}),r.primary&&n.handlers_attached)return this;for(a in void 0!==r.site_domain&&(/:/.test(r.site_domain)&&(r.site_domain=t.location.hostname.toLowerCase()),this.session.domain=r.site_domain),BOOMR.session.enabled&&void 0===BOOMR.session.ID&&(BOOMR.session.ID=BOOMR.utils.generateUUID()),BOOMR.setReferrer(BOOMR.window.document.referrer),void 0!==r.autorun&&(n.autorun=r.autorun),this.plugins)if(this.plugins.hasOwnProperty(a)){if(r[a]&&r[a].hasOwnProperty("enabled")&&!1===r[a].enabled){n.disabled_plugins[a]=1,"function"==typeof this.plugins[a].disable&&this.plugins[a].disable();continue}if(n.disabled_plugins[a]){if(!r[a]||!r[a].hasOwnProperty("enabled")||!0!==r[a].enabled)continue;"function"==typeof this.plugins[a].enable&&this.plugins[a].enable(),delete n.disabled_plugins[a]}if("function"==typeof this.plugins[a].init)try{this.plugins[a].init(r)}catch(e){BOOMR.addError(e,a+".init")}}for(o=0;o<s.length;o++)void 0!==r[s[o]]&&(n[s[o]]=r[s[o]]);return(!n.handlers_attached&&!r.wait||n.handlers_attached&&n.waiting_for_config)&&(n.onloadfired||void 0!==n.autorun&&!1===n.autorun||(BOOMR.hasBrowserOnloadFired()&&(BOOMR.loadedLate=!0),BOOMR.attach_page_ready(BOOMR.page_ready_autorun)),n.waiting_for_config=!1),n.handlers_attached||(r.wait&&(n.waiting_for_config=!0),BOOMR.attach_page_ready((function(){BOOMR.t_onload||(BOOMR.t_onload=BOOMR.now())})),BOOMR.utils.addListener(t,"DOMContentLoaded",(function(){n.fireEvent("dom_loaded")})),BOOMR.fireEvent("config",r),BOOMR.subscribe("config",(function(e){e.beacon_url&&(n.beacon_url=e.beacon_url)})),BOOMR.subscribe("spa_navigation",n.spaNavigation,null,n),function(){var e,r;for(void 0!==c&&(BOOMR.utils.addListener(i,c,(function(){n.fireEvent("visibility_changed")})),n.lastVisibilityState=BOOMR.visibilityState(),BOOMR.subscribe("visibility_changed",(function(){var e=BOOMR.visibilityState();BOOMR.lastVisibilityEvent[e]=BOOMR.now(),"prerender"===n.lastVisibilityState&&"prerender"!==e&&n.fireEvent("prerender_to_visible"),n.lastVisibilityState=e}))),BOOMR.utils.addListener(i,"mouseup",n.xb_handler("click")),e=i.getElementsByTagName("form"),r=0;r<e.length;r++)BOOMR.utils.addListener(e[r],"submit",n.xb_handler("form_submit"));t.onpagehide||null===t.onpagehide||BOOMR.utils.addListener(t,"unload",(function(){BOOMR.window=t=null})),BOOMR.boomerang_frame!==BOOMR.window&&BOOMR.utils.addListener(BOOMR.boomerang_frame,"unload",n.onFrameUnloaded)}(),n.handlers_attached=!0),this},attach_page_ready:function(e){BOOMR.hasBrowserOnloadFired()?this.setImmediate(e,null,null,BOOMR):t.onpagehide||null===t.onpagehide?BOOMR.utils.addListener(t,"pageshow",e):BOOMR.utils.addListener(t,"load",e)},page_ready_autorun:function(e){n.autorun&&BOOMR.page_ready(e,!0)},page_ready:function(e,r){var i;return r||"number"!=typeof e||(i=e,e=null),e||(e=t.event),e||(e={name:"load"}),r?"number"==typeof t.BOOMR_page_ready&&(e.timing=e.timing||{},e.timing.loadEventEnd=t.BOOMR_page_ready,BOOMR.addVar("pr",1,!0)):(e.timing=e.timing||{},i?e.timing.loadEventEnd=i:"number"==typeof t.BOOMR_page_ready?e.timing.loadEventEnd=t.BOOMR_page_ready:e.timing.loadEventEnd=BOOMR.now(),BOOMR.addVar("pr",1,!0)),n.onloadfired||(n.fireEvent("page_ready",e),n.onloadfired=!0),this},hasBrowserOnloadFired:function(){var e=BOOMR.getPerformance();return i.readyState&&"complete"===i.readyState||e&&e.timing&&e.timing.loadEventStart>0||t.BOOMR_onload>0},onloadFired:function(){return n.onloadfired},setImmediate:function(e,n,r,i){var o;o=function(){e.call(i||null,n,r||{},void 0),o=null},t.requestIdleCallback?t.requestIdleCallback(o,{timeout:1e3}):t.setImmediate?t.setImmediate(o):setTimeout(o,10)},now:Date.now||function(){return(new Date).getTime()},getPerformance:function(){try{if(BOOMR.window)return"performance"in BOOMR.window&&BOOMR.window.performance?BOOMR.window.performance:BOOMR.window.msPerformance||BOOMR.window.webkitPerformance||BOOMR.window.mozPerformance}catch(e){}},forceSameSiteCookieNone:function(){n.forced_same_site_cookie_none=!0},hrNow:function(){var e,t,n=BOOMR.getPerformance();return n&&n.now?e=n.now():(t=BOOMR.plugins.RT&&BOOMR.plugins.RT.navigationStart&&BOOMR.plugins.RT.navigationStart()||BOOMR.t_lstart||BOOMR.t_start,e=BOOMR.now()-t),e},visibilityState:void 0===s?function(){return"visible"}:function(){return i[s]},lastVisibilityEvent:{},registerEvent:function(e){return n.events.hasOwnProperty(e)||(n.events[e]=[]),this},disable:function(){n.clearEvents(),n.clearListeners()},fireEvent:function(e,t){return n.fireEvent(e,t)},subscribe:function(e,r,i,o,a){var s,c,u,d;for(e=e.toLowerCase(),n.translate_events[e]&&(e=n.translate_events[e]),n.events.hasOwnProperty(e)||(n.events[e]=[]),u=n.events[e],s=0;s<u.length;s++)if((c=u[s])&&c.fn===r&&c.cb_data===i&&c.scope===o)return this;return u.push({fn:r,cb_data:i||{},scope:o||null,once:a||!1}),"page_ready"===e&&n.onloadfired&&n.autorun&&this.setImmediate(r,null,i,o),"page_unload"!==e&&"before_unload"!==e||(n.unloadEventsCount++,u.length,d=function(e){r&&r.call(o,e||t.event,i),++n.unloadEventCalled===n.unloadEventsCount&&BOOMR.real_sendBeacon()},"page_unload"===e&&(t.onpagehide||null===t.onpagehide?BOOMR.utils.addListener(t,"pagehide",d):BOOMR.utils.addListener(t,"unload",d)),BOOMR.utils.addListener(t,"beforeunload",d)),this},addError:function(e,t,r){var i,o=BOOMR.plugins.Errors,a=window.location.href,s=window.navigator.userAgent;if(a&&""!==a&&"about:blank"!==a&&s&&!/applebot/.test(s)){if(BOOMR.error("Boomerang caught error: "+e+", src: "+t+", extra: "+r),BOOMR.window.XMLHttpRequest){var c=t,u={file:"shopify-boomerang-1.0.0.min.js",lineNumber:1,method:t};if(e.stack){if(c=e.stack.split("\n")[0],!/boomerang\/shopify/.test(c)&&/^https?/.test(c)||/@https?/.test(c))return;var d=e.stack.match(/([0-9]+):([0-9]+)/);if(d&&d.length>2&&(u.lineNumber=d[1],u.columnNumber=d[2],parseInt(u.lineNumber)>1e5))return}var l=new BOOMR.window.XMLHttpRequest;l.open("POST","https://notify.bugsnag.com/",!0),l.setRequestHeader("Content-Type","application/json"),l.setRequestHeader("Bugsnag-Api-Key","820e26e0aacd928250da3d71da3e0782"),l.setRequestHeader("Bugsnag-Payload-Version","5"),l.send(JSON.stringify({apiKey:"820e26e0aacd928250da3d71da3e0782",payloadVersion:5,notifier:{name:"Native JS XHR",version:"2.3.2",url:"-"},events:[{exceptions:[{errorClass:c,stacktrace:[u],type:"browserjs"}],app:{releaseStage:"production",version:"2.3.2",id:"shopify-boomerang-1.0.0.min.js"},metaData:{user:{shopUrl:a,userAgent:s}},unhandled:!1}]}))}o&&o.is_supported()?"string"==typeof e?o.send({message:e,extra:r,functionName:t,noStack:!0},o.VIA_APP,o.SOURCE_BOOMERANG):("string"==typeof t&&(e.functionName=t),void 0!==r&&(e.extra=r),o.send(e,o.VIA_APP,o.SOURCE_BOOMERANG)):("string"!=typeof e&&((i=String(e)).match(/^\[object/)&&(i=e.name+": "+(e.description||e.message).replace(/\r\n$/,"")),e=i),void 0!==t&&(e="["+t+":"+BOOMR.now()+"] "+e),r&&(e+=":: "+r),n.errors[e]?n.errors[e]++:n.errors[e]=1)}},isCrossOriginError:function(e){return"SecurityError"===e.name||"TypeError"===e.name&&"Permission denied"===e.message||"Error"===e.name&&e.message&&e.message.match(/^(Permission|Access is) denied/)||-2146828218===e.number},addVar:function(e,t,r){if("string"==typeof e)n.vars[e]=t,r&&(n.singleBeaconVars[e]=1);else if("object"==typeof e){var i,o=e;for(i in o)o.hasOwnProperty(i)&&(n.vars[i]=o[i],r&&(n.singleBeaconVars[i]=1))}return this},appendVar:function(e,t){var n=BOOMR.getVar(e)||"";return n&&(n+=","),BOOMR.addVar(e,n+t),this},removeVar:function(e){var t,r;if(!arguments.length)return this;for(r=1===arguments.length&&BOOMR.utils.isArray(e)?e:arguments,t=0;t<r.length;t++)n.vars.hasOwnProperty(r[t])&&delete n.vars[r[t]];return this},hasVar:function(e){return n.vars.hasOwnProperty(e)},getVar:function(e){return n.vars[e]},setVarPriority:function(e,t){return"number"!=typeof t||1!==Math.abs(t)||(n.varPriority[t][e]=1),this},setReferrer:function(e){n.r=e},requestStart:function(e){var t=BOOMR.now();return BOOMR.plugins.RT.startTimer("xhr_"+e,t),{loaded:function(n){BOOMR.responseEnd(e,t,n)}}},readyToSend:function(){var e;for(e in this.plugins)if(this.plugins.hasOwnProperty(e)){if(n.disabled_plugins[e])continue;if("function"==typeof this.plugins[e].readyToSend&&!1===this.plugins[e].readyToSend())return!1}return!0},responseEnd:function(e,t,r,i){if(t="number"==typeof t?t:BOOMR.now(),i="number"==typeof i?i:BOOMR.now(),BOOMR.readyToSend())if(BOOMR.hasSentPageLoadBeacon()||BOOMR.utils.inArray(e.initiator,BOOMR.constants.BEACON_TYPE_SPAS))if(n.beaconInQueue)BOOMR.subscribe("beacon",(function(){BOOMR.responseEnd(e,t,r,i)}),null,BOOMR,!0);else if(n.beaconInQueue=!0,"object"==typeof e){if(!e.url)return;n.fireEvent("xhr_load",e)}else BOOMR.real_sendBeacon(),BOOMR.plugins.RT.startTimer("xhr_"+e,t),n.fireEvent("xhr_load",{name:"xhr_"+e,data:r,timing:{loadEventEnd:i}});else BOOMR.subscribe("page_load_beacon",(function(){BOOMR.responseEnd(e,t,r,i)}),null,BOOMR,!0);else setTimeout((function(){BOOMR.responseEnd(e,t,r,i)}),1e3)},uninstrumentXHR:function(){},instrumentXHR:function(){},uninstrumentFetch:function(){},instrumentFetch:function(){},sendBeacon:function(e){return e&&(n.beacon_url_override=e),n.beaconQueued||(n.beaconQueued=!0,BOOMR.setImmediate(BOOMR.real_sendBeacon,null,null,BOOMR)),!0},sendBeaconWhenReady:function(e,t,r){if(n.beaconInQueue)BOOMR.subscribe("beacon",(function(){BOOMR.sendBeaconWhenReady(e,t,r)}),null,BOOMR,!0);else{for(var i in n.beaconInQueue=!0,e)e.hasOwnProperty(i)&&BOOMR.addVar(i,e[i],!0);"function"==typeof t&&void 0!==r&&t.apply(r),BOOMR.sendBeacon()}},real_sendBeacon:function(){var e,r=[],o={};if(!n.beaconQueued)return!1;for(e in n.beaconQueued=!1,this.plugins)if(this.plugins.hasOwnProperty(e)){if(n.disabled_plugins[e])continue;if(!this.plugins[e].is_complete(n.vars))return!1}if(!(window&&window.Image&&window.navigator&&BOOMR.window))return!1;var a=BOOMR.utils.inArray(n.vars.http_initiator,BOOMR.constants.BEACON_TYPE_SPAS),s=void 0===n.vars.http_initiator||a;for(e in n.vars.pgu||(n.vars.pgu=a?i.URL:i.URL.replace(/#.*/,"")),n.vars.pgu=BOOMR.utils.cleanupURL(n.vars.pgu),n.vars.url&&!a||(n.vars.url=n.vars.pgu),n.vars.pgu===n.vars.url&&delete n.vars.pgu,n.r?n.vars.referrer=BOOMR.utils.cleanupURL(n.r):delete n.vars.referrer,n.vars.boomerang_version=BOOMR.version,t!==window&&(n.vars.if=""),n.errors)n.errors.hasOwnProperty(e)&&r.push(e+(n.errors[e]>1?" (*"+n.errors[e]+")":""));for(e in r.length>0&&(n.vars.boomerang_errors=r.join("\n")),n.errors={},n.fireEvent("before_beacon",n.vars),n.vars)n.vars.hasOwnProperty(e)&&(o[e]=n.vars[e]);for(var c in BOOMR.removeVar(["qt","pgu"]),n.singleBeaconVars)n.singleBeaconVars.hasOwnProperty(c)&&BOOMR.removeVar(c);return n.singleBeaconVars={},!n.hasSentPageLoadBeacon&&s&&(n.hasSentPageLoadBeacon=!0,BOOMR.setImmediate((function(){n.fireEvent("page_load_beacon",o)}))),!BOOMR.session.rate_limited&&(n.beaconInQueue=!1,BOOMR.sendBeaconData(o),!0)},sendBeaconData:function(e){var r,i,o,a,s,c=[],u=!0;if(n.beacon_url=n.beacon_url_override||n.beacon_url,!n.beacon_url)return n.fireEvent("beacon_no_url",e),!1;if(!n.beaconUrlAllowed(n.beacon_url))return!1;if(BOOMR.utils.isObjectEmpty(e))return!1;if(n.fireEvent("beacon",e),c=this.getVarsOfPriority(e,-1),r=this.getVarsOfPriority(e,1),i=c.concat(this.getVarsOfPriority(e,0),r).join("&"),n.beacon_url_force_https&&n.beacon_url.match(/^\/\//)&&(n.beacon_url="https:"+n.beacon_url),o=n.beacon_url+(n.beacon_url.indexOf("?")>-1?"&":"?")+i,"GET"===n.beacon_type?(u=!0,o.length>BOOMR.constants.MAX_GET_LENGTH&&(window.console&&(console.warn||console.log)||function(){})("Boomerang: Warning: Beacon may not be sent via GET due to payload size > 2000 bytes")):("POST"===n.beacon_type||o.length>BOOMR.constants.MAX_GET_LENGTH)&&(u=!1),t&&t.navigator&&"function"==typeof t.navigator.sendBeacon&&BOOMR.utils.isNative(t.navigator.sendBeacon)&&"function"==typeof t.Blob&&"GET"!==n.beacon_type&&void 0===n.beacon_auth_token&&!n.beacon_disable_sendbeacon){var d=new t.Blob([i+"&sb=1"],{type:"application/x-www-form-urlencoded"});try{if(t.navigator.sendBeacon(n.beacon_url,d))return!0}catch(e){}}if(t&&t.XMLHttpRequest||(u=!0),u){try{a=new Image}catch(e){return!1}a.src=o}else{s=new(BOOMR.window.XMLHttpRequest||window.XMLHttpRequest);try{this.sendXhrPostBeacon(s,i)}catch(e){s=new BOOMR.boomerang_frame.XMLHttpRequest,this.sendXhrPostBeacon(s,i)}}return!0},hasSentPageLoadBeacon:function(){return n.hasSentPageLoadBeacon},sendXhrPostBeacon:function(e,t){e.open("POST",n.beacon_url),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),void 0!==n.beacon_auth_token&&(void 0===n.beacon_auth_key&&(n.beacon_auth_key="Authorization"),e.setRequestHeader(n.beacon_auth_key,n.beacon_auth_token)),n.beacon_with_credentials&&(e.withCredentials=!0),e.send(t)},getVarsOfPriority:function(e,t){var r,i=[],o=0!==t?n.varPriority[t]:e;for(r in o)o.hasOwnProperty(r)&&e.hasOwnProperty(r)&&(i.push(this.getUriEncodedVar(r,void 0===e[r]?"":e[r])),0!==t&&delete e[r]);return i},getUriEncodedVar:function(e,t){return null==t&&(t=""),"object"==typeof t&&(t=BOOMR.utils.serializeForUrl(t)),encodeURIComponent(e)+"="+encodeURIComponent(t)},getResourceTiming:function(e,t,n){var r,i=BOOMR.getPerformance();try{if(i&&"function"==typeof i.getEntriesByName){if(!(r=i.getEntriesByName(e))||!r.length)return;if(!("function"!=typeof n||(r=BOOMR.utils.arrayFilter(r,n))&&r.length))return;return r.length>1&&"function"==typeof t&&r.sort(t),r[r.length-1]}}catch(e){BOOMR.warn("getResourceTiming:"+e)}}},BOOMR.url){var d=BOOMR.window.document.createElement("a");d.href=BOOMR.url,r.url=d.href}else r.url=r.utils.getMyURL();var l;delete BOOMR_start,"number"==typeof BOOMR_lstart?(r.t_lstart=BOOMR_lstart,delete BOOMR_lstart):"number"==typeof BOOMR.window.BOOMR_lstart&&(r.t_lstart=BOOMR.window.BOOMR_lstart),"number"==typeof BOOMR.window.BOOMR_onload&&(r.t_onload=BOOMR.window.BOOMR_onload),"object"==typeof console&&void 0!==console.log?r.log=function(e,t,n){}:r.log=function(){},l=function(e){return function(t,n){return this.log(t,e,"boomerang"+(n?"."+n:"")),this}},r.debug=l("debug"),r.info=l("info"),r.warn=l("warn"),r.error=l("error");try{var f=r.getPerformance();f&&"function"==typeof f.now&&/\[native code\]/.test(String(f.now))&&f.timing&&f.timing.navigationStart&&(r.now=function(){return Math.round(f.now()+f.timing.navigationStart)})}catch(e){}n.checkLocalStorageSupport(),function(){var e;for(e in r)r.hasOwnProperty(e)&&(BOOMR[e]=r[e]);BOOMR.xhr_excludes||(BOOMR.xhr_excludes={})}(),a("onBoomerangLoaded",{BOOMR},!0)}}(window)})(),function(){if(BOOMR=window.BOOMR||{},"function"==typeof BOOMR.addVar){var e=BOOMR.getPerformance();BOOMR.plugins.ServerTiming={init:function(){!function(){if(e&&e.getEntriesByType){var t=e.getEntriesByType("navigation");if(t&&t.length){var n=t[0].serverTiming;if(n){var r={};n.forEach((function(e){r[e.name]=[e.duration,e.description]})),n&&n.length&&BOOMR.addVar("server_timing",JSON.stringify(r),!0)}}}}()},is_complete:function(){return!0}}}}(),function(){if(BOOMR=window.BOOMR||{},"function"==typeof BOOMR.addVar){var e=BOOMR.getPerformance(),t={isComplete:!1,isCompleteCalled:!1,addVisuallyReadyToBeacon:function(){var t=e&&e.timing&&e.timing.navigationStart?e.timing.navigationStart:BOOMR.now(),n=0;if(BOOMR.plugins.PaintTiming&&BOOMR.plugins.PaintTiming.is_supported()&&e&&e.timeOrigin){var r=BOOMR.plugins.PaintTiming.getTimingFor("largest-contentful-paint");r||(r=BOOMR.plugins.PaintTiming.getTimingFor("first-contentful-paint")),r||(r=BOOMR.plugins.PaintTiming.getTimingFor("first-paint")),r&&(n=Math.max(n,Math.round(r+e.timeOrigin)))}e&&e.timing&&e.timing.msFirstPaint&&(n=Math.max(n,e.timing.msFirstPaint)),e&&e.timing&&e.timing.domContentLoadedEventEnd&&(n=Math.max(n,e.timing.domContentLoadedEventEnd)),visuallyReady=n,visuallyReady&&BOOMR.addVar("visually_ready",visuallyReady-t,!0)}};BOOMR.plugins.VisuallyReady={init:function(e){BOOMR.subscribe("page_ready",(function(){t.addVisuallyReadyToBeacon(),t.isComplete=!0,t.isCompleteCalled&&BOOMR.sendBeacon()}))},is_complete:function(){return t.isCompleteCalled=!0,t.isComplete}}}}(),function(){BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var e={isDone:!1,isCompleteCalled:!1,longTasks:[],longTasksTime:0,timeout:null,perfObserver:null,onPerformanceObserver:function(t){var n,r;for(n=t.getEntries(),Array.prototype.push.apply(e.longTasks,n),r=0;r<n.length;r++)e.longTasksTime+=n[r].duration;clearTimeout(e.timeout),e.timeout=setTimeout(e.done,500)},done:function(){e.isDone||(e.isDone=!0,e.perfObserver.disconnect(),BOOMR.addVar("total_duration_long_tasks",e.longTasksTime,!0),BOOMR.addVar("number_long_tasks",e.longTasks.length,!0),e.isCompleteCalled&&BOOMR.sendBeacon())}};if(window.PerformanceObserver&&window.PerformanceLongTaskTiming){e.perfObserver=new window.PerformanceObserver(e.onPerformanceObserver);try{e.perfObserver.observe({entryTypes:["longtask"]})}catch(t){e.isDone=!0}}else e.isDone=!0;BOOMR.plugins.LongTask={init:function(){return e.timeout=setTimeout(e.done,500),this},is_complete:function(){return e.isCompleteCalled=!0,e.isDone}}}(),e=o(935),t={CLS:"cumulative_layout_shift_score",FID:"first_input_delay"},function(){BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var n={retries:0,isCompleteCalled:!1,isDone:!1,addToBeacon:function(e){BOOMR.addVar(t[e.name],e.value,!0)}};BOOMR.plugins.CoreWebVitals={init:function(){return e.getCLS(n.addToBeacon,!0),e.getFID(n.addToBeacon,!0),setTimeout((function(){n.isDone=!0,n.isCompleteCalled&&BOOMR.sendBeacon()}),1500),this},is_complete:function(){return n.isCompleteCalled=!0,n.isDone}}}(),function(){if(BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.PaintTiming){var e={"first-paint":"first_paint","first-contentful-paint":"first_contentful_paint","largest-contentful-paint":"largest_contentful_paint"},t={initialized:!1,complete:!1,supported:null,timingCache:{},observer:null,externalMetrics:{},done:function(n,r){var i,o,a;if(this.complete)return this;if("load"!==r&&(!n||"spa_hard"!==n.initiator))return this.complete=!0,this;if((i=BOOMR.getPerformance())&&"function"==typeof i.getEntriesByType){if((o=i.getEntriesByType("paint"))&&o.length){for(BOOMR.info("This user agent supports PaintTiming","pt"),a=0;a<o.length;a++)t.timingCache[o[a].name]=o[a].startTime,e[o[a].name]&&BOOMR.addVar(e[o[a].name],Math.floor(o[a].startTime),!0);this.complete=!0,BOOMR.sendBeacon()}}else this.complete=!0},onObserver:function(e){var n=e.getEntries();if(0!==n.length){var r=n[n.length-1],i=r.renderTime||r.loadTime;t.timingCache[r.entryType]=i,BOOMR.addVar("largest_contentful_paint",Math.floor(i),!0),t.externalMetrics.lcp=function(){return Math.floor(i)}}}};BOOMR.plugins.PaintTiming={init:function(){return this.is_supported()||(t.complete=!0,t.initialized=!0),t.complete||"hidden"!==BOOMR.visibilityState()||(BOOMR.addVar("paint_timing_hidden",1,!0),t.complete=!0),t.initialized||(BOOMR.subscribe("page_ready",t.done,"load",t),BOOMR.subscribe("xhr_load",t.done,"xhr",t),BOOMR.subscribe("before_unload",t.done,null,t),"function"==typeof BOOMR.window.PerformanceObserver&&"function"==typeof window.LargestContentfulPaint&&(t.observer=new BOOMR.window.PerformanceObserver(t.onObserver),t.observer.observe({type:"largest-contentful-paint",buffered:!0})),t.initialized=!0),this},is_complete:function(){return!0},is_enabled:function(){return t.initialized&&this.is_supported()},is_supported:function(){if(null!==t.supported)return t.supported;var e=BOOMR.getPerformance();return t.supported=e&&void 0!==window.PerformancePaintTiming&&"function"==typeof e.getEntriesByType,t.supported},getTimingFor:function(e){var n,r,i;if(t.timingCache[e])return t.timingCache[e];if(this.is_supported()&&(i=BOOMR.getPerformance())&&"function"==typeof i.getEntriesByType&&(n=i.getEntriesByType("paint"))&&n.length)for(r=0;r<n.length;r++)if(n[r].name===e)return t.timingCache[e]=n[r].startTime,t.timingCache[e]},metrics:t.externalMetrics}}}(),function(){if(BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.NavigationTiming){var e={complete:!1,fullySent:!1,sendBeacon:function(){this.complete=!0,BOOMR.sendBeacon()},xhr_done:function(t){var n;if(t&&"spa_hard"===t.initiator)e.done(t);else if(t&&"spa"===t.initiator)e.sendBeacon();else{BOOMR.window;var r,i,o={};if(t){if(t.data&&(t=t.data),(n=BOOMR.getPerformance())&&t.restiming)for(i in o={redirect_start:t.restiming.redirectStart,redirect_end:t.restiming.redirectEnd,fetch_start:t.restiming.fetchStart,domain_lookup_start:t.restiming.domainLookupStart,domain_lookup_end:t.restiming.domainLookupEnd,connect_start:t.restiming.connectStart,connect_end:t.restiming.connectEnd,request_start:t.restiming.requestStart,response_start:t.restiming.responseStart,response_end:t.restiming.responseEnd},t.restiming.secureConnectionStart&&(o.secure_connection_start=t.restiming.secureConnectionStart),o)o.hasOwnProperty(i)&&o[i]&&(o[i]+=n.timing.navigationStart,o[i]=Math.floor(o[i]));for(i in t.timing&&(r=t.timing,o.request_start||(o.request_start=r.requestStart),o.response_start||(o.response_start=r.responseStart),o.response_end||(o.response_end=r.responseEnd),o.dom_interactive=r.domInteractive,o.dom_complete=r.domComplete,o.load_event_start=r.loadEventEnd,o.load_event_end=r.loadEventEnd),o)o.hasOwnProperty(i)&&!o[i]&&delete o[i];BOOMR.addVar(o);try{e.addedVars.push.apply(e.addedVars,Object.keys(o))}catch(e){}e.sendBeacon()}}},done:function(){BOOMR.window;var n,r,i,o,a={},s=0;if(this.complete)return this;if(e.addedVars=[],n=BOOMR.getPerformance()){if("function"==typeof n.getEntriesByType&&((i=n.getEntriesByType("navigation"))&&i.length?(BOOMR.info("This user agent supports NavigationTiming2","nt"),i=i[0],s=n.timing?n.timing.navigationStart:0):i=void 0),!i&&n.timing&&(BOOMR.info("This user agent supports NavigationTiming","nt"),i=n.timing),i&&(!(a={navigation_start:n.timing?n.timing.navigationStart:0,redirect_start:t(s,i.redirectStart),redirect_end:t(s,i.redirectEnd),fetch_start:t(s,i.fetchStart),domain_lookup_start:t(s,i.domainLookupStart),domain_lookup_end:t(s,i.domainLookupEnd),connect_start:t(s,i.connectStart),connect_end:t(s,i.connectEnd),request_start:t(s,i.requestStart),response_start:t(s,i.responseStart),response_end:t(s,i.responseEnd),dom_loading:t(s,i.domLoading),dom_interactive:t(s,i.domInteractive),dom_content_loaded_event_start:t(s,i.domContentLoadedEventStart),dom_content_loaded_event_end:t(s,i.domContentLoadedEventEnd),dom_complete:t(s,i.domComplete),load_event_start:t(s,i.loadEventStart),load_event_end:t(s,i.loadEventEnd),unload_event_start:t(s,i.unloadEventStart),unload_event_end:t(s,i.unloadEventEnd)}).dom_loading&&n&&n.timing&&n.timing.domLoading&&(a.dom_loading=n.timing.domLoading),i.secureConnectionStart&&(a.secure_connection_start=t(s,i.secureConnectionStart)),i.workerStart&&(a.worker_start=t(s,i.workerStart)),(i.decodedBodySize||i.transferSize)&&(a.encoded_body_size=i.encodedBodySize,a.decoded_body_size=i.decodedBodySize,a.transfer_size=i.transferSize),i.nextHopProtocol&&(a.next_hop_protocol=i.nextHopProtocol)),n.navigation){r=0===(r=n.getEntriesByType("navigation")).length?n.navigation:r[0],a.redirect_count=r.redirectCount;var c={0:"navigate",1:"reload",2:"back_forward",225:"reserve"};a.navigation_type=c[r.type]?c[r.type]:r.type}for(o in a)a.hasOwnProperty(o)&&void 0===a[o]&&delete a[o];BOOMR.addVar(a),i&&(i.requestStart&&i.navigationStart&&i.requestStart<i.navigationStart||i.responseStart&&i.navigationStart&&i.responseStart<i.navigationStart||i.responseStart&&i.fetchStart&&i.responseStart<i.fetchStart||i.navigationStart&&i.fetchStart<i.navigationStart||i.responseEnd&&i.responseEnd>BOOMR.now()+864e5)&&(BOOMR.addVar("navigation_bad",1),e.addedVars.push("navigation_bad"));try{e.addedVars.push.apply(e.addedVars,Object.keys(a))}catch(e){}a.load_event_end>0&&(this.fullySent=!0)}e.sendBeacon()},clear:function(t){e.addedVars&&e.addedVars.length>0&&(BOOMR.removeVar(e.addedVars),e.addedVars=[]),this.complete=!(t&&t.early)&&this.fullySent},prerenderToVisible:function(){this.complete=!1,this.done()}};BOOMR.plugins.NavigationTiming={init:function(){return e.initialized||(BOOMR.subscribe("page_ready",e.done,null,e),BOOMR.subscribe("prerender_to_visible",e.prerenderToVisible,null,e),BOOMR.subscribe("xhr_load",e.xhr_done,null,e),BOOMR.subscribe("before_unload",e.done,null,e),BOOMR.subscribe("beacon",e.clear,null,e),e.initialized=!0),this},is_complete:function(){return!0}}}function t(e,t){if("number"==typeof t&&0!==t)return Math.floor((e||0)+t)}}(),function(){var e,t={type:"connection_type",effectiveType:"effective_type",saveData:"save_data"};function n(){var n;for(n in t)void 0!==e[n]&&(BOOMR.removeVar(t[n]),e[n]&&BOOMR.addVar(t[n],e[n]))}BOOMR=window.BOOMR||{},"function"==typeof BOOMR.addVar&&("object"==typeof navigator&&(e=navigator.connection||navigator.mozConnection||navigator.webkitConnection||navigator.msConnection),e&&(e.addEventListener&&e.addEventListener("change",(function(){n(),BOOMR.fireEvent("netinfo",e)})),n()))}(),function(){var e;if(BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.ResourceTiming){var t={other:0,img:1,link:2,script:3,css:4,xmlhttprequest:5,html:6,image:7,beacon:8,fetch:9,iframe:"a",subdocument:"a",body:"b",input:"c",frame:"a",object:"d",video:"e",audio:"f",source:"g",track:"h",embed:"i",eventsource:"j",navigation:6,"early-hints":"k"},n={prefetch:1,preload:2,prerender:3,stylesheet:4},r=["startTime","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd","workerStart"],i="\n";e={complete:!1,sentNavBeacon:!1,initialized:!1,supported:null,xhr_load:function(){this.complete||(this.complete=!0,BOOMR.sendBeacon())},xssBreakWords:[/(h)(ref)/gi,/(s)(rc)/gi,/(a)(ction)/gi],urlLimit:500,clearOnBeacon:!1,trimUrls:[],serverTiming:!0,monitorClearResourceTimings:!1,splitAtPath:!1,getSrcsetDimensions:!1,trackedResourceTypes:"*",done:function(){this.sentNavBeacon||(h(),this.complete=!0,this.sentNavBeacon=!0,BOOMR.sendBeacon())},onBeacon:function(t){var n=BOOMR.getPerformance();if(e.clearOnBeacon&&n){var r=n.clearResourceTimings||n.webkitClearResourceTimings;r&&"function"==typeof r&&r.call(n)}},prerenderToVisible:function(){this.sentNavBeacon=!1,this.done()}},BOOMR.plugins.ResourceTiming={init:function(t){if(BOOMR.utils.pluginConfig(e,t,"ResourceTiming",["xssBreakWords","clearOnBeacon","urlLimit","trimUrls","trackedResourceTypes","serverTiming","monitorClearResourceTimings","splitAtPath","getSrcsetDimensions"]),e.trackedResourceTypes=["script","img","css","link","early-hints"],e.initialized)return this;if(this.is_supported()){if(BOOMR.subscribe("page_ready",e.done,null,e),BOOMR.subscribe("prerender_to_visible",e.prerenderToVisible,null,e),BOOMR.subscribe("xhr_load",e.xhr_load,null,e),BOOMR.subscribe("beacon",e.onBeacon,null,e),BOOMR.subscribe("before_unload",e.done,null,e),e.monitorClearResourceTimings){var n=this;BOOMR.window.performance.clearResourceTimings=(r=BOOMR.window.performance.clearResourceTimings,function(){n.addResources(BOOMR.window.performance.getEntriesByType("resource")),r.apply(BOOMR.window.performance,arguments)})}}else e.complete=!0;var r;return e.initialized=!0,this},is_complete:function(){return!0},is_enabled:function(){return e.initialized&&this.is_supported()},is_supported:function(){if(null!==e.supported)return e.supported;var t=BOOMR.getPerformance();return e.supported=t&&"function"==typeof t.getEntriesByType&&void 0!==window.PerformanceResourceTiming,e.supported},addResources:function(t,n){if(this.is_supported()&&BOOMR.utils.isArray(t)){if(e.collectedEntries=e.collectedEntries||[],"number"==typeof n){var i=n-(BOOMR.window.performance.timeOrigin||BOOMR.window.performance.timing.navigationStart);t=BOOMR.utils.arrayFilter(t,(function(e){for(var t=0;t<r.length;t++){var n=r[t];e.hasOwnProperty(n)&&(e[n]+=i)}return!0}))}Array.prototype.push.apply(e.collectedEntries,t)}},getCompressedResourceTiming:g,getFilteredResourceTiming:O,calculateResourceTimingUnion:function(e){var t;if(!e||!e.length)return 0;e.sort((function(e,t){return e.fetchStart!==t.fetchStart?e.fetchStart-t.fetchStart:(e.responseStart||e.responseEnd)-(t.responseStart||t.responseEnd)}));var n=v(e),r=[],i=0;for(t=0;t<n.length;t++){var o=n[t];o.fetchStart<i&&(o.fetchStart=i),o.fetchStart<o.responseEnd&&(r.push(o),i=o.responseEnd)}var a=v(r),s=0;for(t=0;t<a.length;t++)s+=a[t].responseEnd-a[t].fetchStart;return s},addResourceTimingToBeacon:h,addToBeacon:B}}function o(t,n){var r,o,a,s,c,u,d,l,f={};function p(e){return function(t,n,r){var o,a;if(-1!==n.indexOf(i)){for(o=n.split(i),a=0;a<o.length-1;a++)t.push(o[a]),t.push(i);n=o.slice(-1)}return"number"==typeof e&&r<e&&(n+="/"),t.concat(n)}}for(r in t){for(o=r,a=0;a<e.xssBreakWords.length;a++)o=o.replace(e.xssBreakWords[a],"$1\n$2");if(t.hasOwnProperty(r))for(s=t[r],c=n?[(c=o.split("/"))[0]+"//",c[2]+(c.length>3?"/":"")].concat(c.slice(3).reduce(p(c.length-4),[])):o.split(""),d=f,a=0;a<c.length;a++)void 0===(l=d[u=c[a]])?d=d[u]=a===c.length-1?s:{}:"string"==typeof l?d=d[u]={"|":l}:a===c.length-1?d[u]["|"]=s:d=d[u]}return f}function a(e,t){var n,r,o,s=0,c=[];for(n in e)e.hasOwnProperty(n)&&c.push(n);for(var u=0;u<c.length;u++)"object"==typeof e[n=c[u]]&&(r=a(e[n],!1))&&(delete e[n],n===i?(n=r.name,s++):n+=r.name,e[n]=r.value),s++;return 1===s?t?((o={})[n]=e[n],o):{name:n,value:e[n]}:!!t&&e}function s(e){return"img"===e.initiatorType||"image"===e.initiatorType}function c(e,t){"number"!=typeof e&&(e=0),"number"!=typeof t&&(t=0);var n=Math.round(e||0),r=Math.round(t||0);return 0===n?0:n-r}function u(e){try{if(e.location&&e.location.href,e.document,"performance"in e&&e.performance)return!0}catch(e){}return!1}function d(e){var t=0;return u(e)&&e.performance.timing&&e.performance.timing.navigationStart&&(t=e.performance.timing.navigationStart),t}function l(t,i,o,a,c){var p,O,m,g,v,h,B,_,y,R,b,M,w=[],S={},E={};if(void 0===i&&(i=!0),void 0===o&&(o=0),void 0===a&&(a=0),a>10)return w;try{if(!u(t))return w;if(m=d(t),R=function(t,n){var r,i,o={},a=t.document,s=a.createElement("A");return r=(n=n||[0,0,0,0])[3]+(void 0!==t.pageXOffset)?t.pageXOffset:(a.documentElement||a.body.parentNode||a.body).scrollLeft,i=n[2]+(void 0!==t.pageYOffset)?t.pageYOffset:(a.documentElement||a.body.parentNode||a.body).scrollTop,["img","iframe","image"].forEach((function(t){var n,c,u,d,l,f,p,O=a.getElementsByTagName(t);for(c=0;c<O.length;c++)if((n=O[c])&&(d=n.currentSrc||n.src||"function"==typeof n.getAttribute&&n.getAttribute("src")||n.getAttribute("xlink:href"),s.href=d,(d=s.href)&&!o[d]&&((u=n.getBoundingClientRect()).height||n.offsetHeight)&&(u.width||n.offsetWidth))){if(o[d]=[u.height||n.offsetHeight,u.width||n.offsetWidth,Math.round(u.top+i),Math.round(u.left+r)],!n.naturalHeight&&!n.naturalWidth)continue;e.getSrcsetDimensions&&n.currentSrc&&(n.srcset||n.parentNode&&n.parentNode.nodeName&&"PICTURE"===n.parentNode.nodeName.toUpperCase())?(l=n.isConnected?n.ownerDocument.createElement("IMG"):new BOOMR.window.Image).src=d:l=n,f=l.naturalHeight||n.naturalHeight,p=l.naturalWidth||n.naturalWidth,!f&&!p||o[d][0]===f&&o[d][1]===p||o[d].push(f,p)}})),o}(t,c),f(b=t.document.createElement("a"),S,"script"),f(b,E,"link"),(h=t.document.getElementsByTagName("iframe"))&&h.length)for(p=0;p<h.length;p++)g=d(h[p].contentWindow),v=0,g>m&&(v=o+(g-m)),b.href=h[p].src,w=w.concat(l(h[p].contentWindow,!1,v,a+1,R[b.href]));if("function"!=typeof t.performance.getEntriesByType)return w;function T(t){return e.serverTiming&&t.serverTiming||[]}i&&((O=t.performance.getEntriesByType("navigation"))&&1===O.length?(B=O[0],w.push({name:t.location.href,startTime:0,initiatorType:"html",redirectStart:B.redirectStart,redirectEnd:B.redirectEnd,fetchStart:B.fetchStart,domainLookupStart:B.domainLookupStart,domainLookupEnd:B.domainLookupEnd,connectStart:B.connectStart,secureConnectionStart:B.secureConnectionStart,connectEnd:B.connectEnd,requestStart:B.requestStart,responseStart:B.responseStart,responseEnd:B.responseEnd,workerStart:B.workerStart,encodedBodySize:B.encodedBodySize,decodedBodySize:B.decodedBodySize,transferSize:B.transferSize,serverTiming:T(B)})):t.performance.timing&&0!==(_=t.performance.timing).navigationStart&&_.responseEnd<=_.navigationStart+36e5&&w.push({name:t.location.href,startTime:0,initiatorType:"html",redirectStart:_.redirectStart?_.redirectStart-_.navigationStart:0,redirectEnd:_.redirectEnd?_.redirectEnd-_.navigationStart:0,fetchStart:_.fetchStart?_.fetchStart-_.navigationStart:0,domainLookupStart:_.domainLookupStart?_.domainLookupStart-_.navigationStart:0,domainLookupEnd:_.domainLookupEnd?_.domainLookupEnd-_.navigationStart:0,connectStart:_.connectStart?_.connectStart-_.navigationStart:0,secureConnectionStart:_.secureConnectionStart?_.secureConnectionStart-_.navigationStart:0,connectEnd:_.connectEnd?_.connectEnd-_.navigationStart:0,requestStart:_.requestStart?_.requestStart-_.navigationStart:0,responseStart:_.responseStart?_.responseStart-_.navigationStart:0,responseEnd:_.responseEnd?_.responseEnd-_.navigationStart:0}));var C=t.performance.getEntriesByType("resource"),x=[];t===BOOMR.window&&e.collectedEntries&&(Array.prototype.push.apply(C,e.collectedEntries),e.collectedEntries=[]);var P=0;for(p=0;C&&p<C.length;p++)if(_=C[p],!(P>=10&&s(_))){y={name:_.name,initiatorType:_.initiatorType,encodedBodySize:_.encodedBodySize,decodedBodySize:_.decodedBodySize,transferSize:_.transferSize,serverTiming:T(_),visibleDimensions:R[_.name],latestTime:(M=_,M.responseEnd?M.responseEnd:M.responseStart&&M.startTime?M.responseStart+.2*(M.responseStart-M.startTime):1/0)};for(var k=0;k<r.length;k++){var L=r[k];y[L]="startTime"===L||_[L]?_[L]+o:0}if(_.hasOwnProperty("_data")&&(y._data=_._data),("script"===_.initiatorType||"link"===_.initiatorType)&&S[_.name]){var A=S[_.name];for(y.scriptAttrs=(A.async?1:0)|(A.defer?2:0);1===A.nodeType&&"BODY"!==A.nodeName;)A=A.parentNode;y.scriptAttrs|="BODY"===A.nodeName?4:0}"link"===_.initiatorType&&E[_.name]&&BOOMR.utils.arrayFind(E[_.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/),(function(e){if(e=e.toLowerCase(),n[e])return y.linkAttrs=n[e],!0})),x.push(y),s(y)&&P++}w=w.concat(x)}catch(V){return w}return w}function f(e,t,n){Array.prototype.forEach.call(e.ownerDocument.getElementsByTagName(n),(function(n){e.href=n.currentSrc||n.src||"function"==typeof n.getAttribute&&n.getAttribute("xlink:href")||n.href,e.href.match(/^https?:\/\//)&&(t[e.href]=n)}))}function p(e){return"number"==typeof e&&0!==e?e.toString(36):"string"==typeof e?e:""}function O(e,t,n){var r,i,o=l(BOOMR.window,!0,0,0),a=d(BOOMR.window);if(!o||!o.length)return{entries:[]};o.sort((function(e,t){return e.startTime-t.startTime}));var s=[];for(r=0;r<o.length;r++)if((0===(i=o[r]).name.indexOf("http:")||0===i.name.indexOf("https:"))&&!(i.name.indexOf(BOOMR.url)>-1||i.name.indexOf(BOOMR.config_url)>-1||"function"==typeof BOOMR.getBeaconURL&&BOOMR.getBeaconURL()&&i.name.indexOf(BOOMR.getBeaconURL())>-1||e&&a+i.startTime<e)){if(t&&a+i.startTime>t)break;(void 0===n||"*"===n||!n.length||i.initiatorType&&BOOMR.utils.inArray(i.initiatorType,n))&&s.push(i)}return{entries:s}}function m(t,n){var r,i,o;if(t&&n)for(r=0;r<n.length;r++)if("string"==typeof(o=n[r])){if(-1!==(i=t.indexOf(o))){t=t.substr(0,i+o.length)+"...";break}}else o instanceof RegExp&&o.test(t)&&(t=t.replace(o,"$1")+"...");return BOOMR.utils.cleanupURL(t,e.urlLimit)}function g(n,r){var i,s,u,d,l,f,g,v,h,B,_={},y={},R=O(n,r,e.trackedResourceTypes).entries;if(!R||!R.length)return{resource_timing:{}};for(i=0;i<R.length;i++){s=R[i],void 0===(u=t[s.initiatorType])&&(u=0),l=u+[c(s.startTime,0),c(s.responseEnd,s.startTime),c(s.responseStart,s.startTime),c(s.requestStart,s.startTime),c(s.connectEnd,s.startTime),c(s.secureConnectionStart,s.startTime),c(s.connectStart,s.startTime),c(s.domainLookupEnd,s.startTime),c(s.domainLookupStart,s.startTime),c(s.redirectEnd,s.startTime),c(s.redirectStart,s.startTime)].map(p).join(",").replace(/,+$/,"");var b=(v=void 0,h=void 0,B=void 0,(g=s).encodedBodySize||g.decodedBodySize||g.transferSize?(v=g.transferSize,[h=g.encodedBodySize,v?v-h:"_",(B=g.decodedBodySize)?B-h:0].map(p).join(",").replace(/,+$/,"")):"");if(""!==b&&(l+="*1"+b),s.hasOwnProperty("scriptAttrs")&&(l+="*2"+s.scriptAttrs),s.hasOwnProperty("linkAttrs")&&(l+="*4"+s.linkAttrs),s.workerStart&&"number"==typeof s.workerStart&&0!==s.workerStart&&(l+="*6"+p(c(("number"!=typeof(f=s.workerStart)&&(f=0),Math.ceil(f||0)),s.startTime))),d=m(s.name,e.trimUrls),s.hasOwnProperty("_data")){var M="";for(var w in s._data)s._data.hasOwnProperty(w)&&(M+="*5"+w+":"+s._data[w]);void 0===_[d]?_[d]=l+M:_[d]+=M}else void 0!==_[d]?_[d]+="|"+l:s.visibleDimensions?_[d]="*0"+s.visibleDimensions.map(Math.round).map(p).join(",").replace(/,+$/,"")+"|"+l:_[d]=l;s.visibleDimensions&&(y[s.latestTime]||(y[s.latestTime]=[]),y[s.latestTime].push(s.visibleDimensions))}return{resource_timing:a(o(_,e.splitAtPath),!0)}}function v(e){var t=[];if(!e||!e.length)return t;for(var n=0;n<e.length;n++){var r=e[n];n!==e.length-1&&r.fetchStart===e[n+1].fetchStart||t.push({fetchStart:r.fetchStart,responseEnd:r.responseStart||r.responseEnd})}return t}function h(e,t){var n;"undefined"!=typeof JSON&&(n=g(e,t))&&(BOOMR.info("Client supports Resource Timing API","resource_timing"),B(n))}function B(e){BOOMR.addVar("resource_timing",JSON.stringify(e.resource_timing),!0)}}(),function(){BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var e={setShopifyIdentifiers:function(){var t=BOOMR.window&&BOOMR.window.ShopifyAnalytics&&BOOMR.window.ShopifyAnalytics.lib&&BOOMR.window.ShopifyAnalytics.lib.trekkie&&BOOMR.window.ShopifyAnalytics.lib.trekkie.defaultAttributes&&BOOMR.window.ShopifyAnalytics.lib.trekkie.defaultAttributes.visitToken;if(t&&BOOMR.addVar("session_token",t),BOOMR.themeId&&BOOMR.shopId)BOOMR.addVar("theme_id",BOOMR.themeId.toString()),BOOMR.addVar("shop_id",BOOMR.shopId.toString()),BOOMR.application&&BOOMR.addVar("application",BOOMR.application.toString()),BOOMR.themeName&&BOOMR.themeVersion&&(BOOMR.addVar("theme_name",BOOMR.themeName.toString()),BOOMR.addVar("theme_version",BOOMR.themeVersion.toString())),BOOMR.renderRegion&&BOOMR.addVar("render_region",BOOMR.renderRegion.toString());else{var n={shopId:"shop_id",themeId:"theme_id",application:"application",themeName:"theme_name",themeVersion:"theme_version",renderRegion:"render_region"},r=BOOMR.url;for(var i in n)BOOMR.addVar(n[i],e.getUrlParameterValue(i,r))}},getUrlParameterValue:function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}};BOOMR.plugins.ShopifyIdentifiers={init:function(){return e.setShopifyIdentifiers(),this},is_complete:function(){return!0}}}(),n=(new Date).getTime(),function(){if(BOOMR=window.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.MonorailProducer){var e={initialized:!1,producer_url:"/.well-known/shopify/monorail/v1/produce",onBeacon:function(t){BOOMR.window||window;var r,i={schema_id:"boomerang_real_user_measurement_audit/7.1",payload:t,metadata:{event_created_at_ms:n,event_sent_at_ms:(new Date).getTime()}};if(window&&window.navigator&&"function"==typeof window.navigator.sendBeacon&&BOOMR.utils.isNative(window.navigator.sendBeacon)&&"function"==typeof window.Blob&&(!(r=window.navigator.userAgent)||-1===r.lastIndexOf("iPhone; CPU iPhone OS 12_")&&-1===r.lastIndexOf("iPad; CPU OS 12_"))){var o=new window.Blob([JSON.stringify(i)],{type:"text/plain"});try{if(window.navigator.sendBeacon(e.producer_url,o))return!0}catch(e){}}var a=new XMLHttpRequest;try{e.sendXhrPostBeacon(a,i)}catch(t){a=new BOOMR.boomerang_frame.XMLHttpRequest,e.sendXhrPostBeacon(a,i)}},sendXhrPostBeacon:function(t,n){t.open("POST",e.producer_url),t.setRequestHeader("Content-type","text/plain"),t.send(JSON.stringify(n))}};BOOMR.plugins.MonorailProducer={init:function(){return e.initialized||(BOOMR.subscribe("before_beacon",e.onBeacon,null,e),BOOMR.subscribe("config",(function(t){t.producer_url&&(e.producer_url=t.producer_url)})),e.initialized=!0),this},is_complete:function(){return!0}}}}(),BOOMR.t_end=(new Date).getTime()})();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }function y(e,t){e.on(t,(function(){this[t]=(0,m.z)()}))}this.ee.on(Dt,v),s.on(Nt,v),a.on(Nt,v),this.ee.on(Ot,b),s.on(Tt,b),a.on(Tt,b),this.ee.buffer([Dt,Ot,"xhr-resolved"],this.featureName),d.buffer([Dt],this.featureName),c.buffer(["setTimeout"+At,"clearTimeout"+Et,Dt],this.featureName),u.buffer([Dt,"new-xhr","send-xhr"+Et],this.featureName),f.buffer([St+Et,St+"-done",St+xt+Et,St+xt+At],this.featureName),l.buffer(["newURL"],this.featureName),g.buffer([Dt],this.featureName),s.buffer(["propagate",Nt,Tt,"executor-err","resolve"+Et],this.featureName),o.buffer([Dt,"no-"+Dt],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),y(f,St+Et),y(f,St+"-done"),y(a,"new-jsonp"),y(a,"jsonp-end"),y(a,"cb-start"),l.on("pushState-end",p),l.on("replaceState-end",p),window.addEventListener("hashchange",p,(0,j.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",p,(0,j.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){p(0,i>1)}),(0,j.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#e,this.importAggregator()}#e(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})(),window.NRBA=o})();
    ;NREUM.loader_config={accountID:"1691917",trustKey:"1484199",agentID:"383284444",licenseKey:"de0dec019a",applicationID:"383284444"}
    ;NREUM.info={beacon:"bam-cell.nr-data.net",errorBeacon:"bam-cell.nr-data.net",licenseKey:"de0dec019a",applicationID:"383284444",sa:1}
  </script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer', 'GTM-N98J');</script></head><body><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N98J" height="0" width="0" style="display: none; visibility: hidden" aria-hidden="true"></iframe></noscript><div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><header id="riotbar-header" class="style__Header-sc-nag7bg-0 drKulc"></header><div class="style__Main-sc-nag7bg-1 eMBbAy"><section class="style__Wrapper-sc-133zq6e-0 buKRMJ"><section class="style__Wrapper-sc-vd48si-0 style__ResponsiveWrapper-sc-vd48si-7 gTddDa iAgUEf"><div class="style__Media-sc-vd48si-1 jItwIe"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8f3858fdcff6d99a/65961c8da8ee43ea36199e21/10924_LoL_Patch_14_1_Notes_Banner.jpg" style="object-fit:cover" alt="" class="style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq"/><noscript><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8f3858fdcff6d99a/65961c8da8ee43ea36199e21/10924_LoL_Patch_14_1_Notes_Banner.jpg" style="object-fit:cover" alt="" class="style__NoScriptImg-sc-g183su-0 gXSlUo"/></noscript></div><div class="style__DetailsWrapper-sc-vd48si-2 kmffYM"><div class="style__Details-sc-vd48si-3 jytlRS"><div class="style__TitleWrapper-sc-vd48si-4 gkvanB"><h1 class="style__Title-sc-vd48si-5 kDFvhf">Patch 14.1 Notes</h1></div><div class="style__Wrapper-sc-1i05riq-0 style__ResponsiveWrapper-sc-1i05riq-8 eOsqtE fciJcp style__Meta-sc-vd48si-6 gpTKuy"><time dateTime="2024-01-09T19:00:00.000Z" class="style__Time-sc-10dp7mx-0 clCsYA style__Date-sc-1i05riq-1 jrA-DGs" data-testid="undefined:date"></time><div class="style__Info-sc-1i05riq-2 kA-dBMe"><span class="style__Author-sc-1i05riq-4 TjfWB"><span data-testid="undefined:authors-string" class="style__AuthorLabel-sc-1i05riq-5 iBlLfT">Author</span><span data-testid="undefined:authors-list" class="style__AuthorList-sc-1i05riq-6 PhmgA">Riot Riru</span></span></div><div class="style__Wrapper-sc-1wyuot3-0 kUmfSV style__ShareBar-sc-1i05riq-7 lgDPXi"><ul class="style__List-sc-1wyuot3-1 imoAWt"><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-vk"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on VK" data-testid="undefined:sharebar:button-icon-vk"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 192 113.9" style="enable-background:new 0 0 192 113.9" xml:space="preserve"><g><path class="st0" d="M187.6,7.6c1.3-4.5,0-7.6-6.3-7.6h-21c-5.4,0-7.8,2.8-9.1,6c0,0-10.6,26.1-25.8,42.8c-4.9,4.9-7,6.4-9.7,6.4
		c-1.3,0-3.3-1.5-3.3-6V7.6c0-5.4-1.5-7.6-6-7.6h-33C70.1,0,68,2.5,68,4.8c0,5.1,7.5,6.3,8.4,20.4v30.9c0,6.7-1.2,7.9-3.9,7.9
		c-7,0-24.4-26.1-34.6-56c-2.1-5.5-4-7.9-9.4-7.9h-21c-6,0-7.2,2.8-7.2,6c0,5.5,7,33.1,33.1,69.5c17.4,24.9,41.8,38.3,64,38.3
		c13.3,0,15-3,15-8.1V86.9c0-6,1.2-7.2,5.5-7.2c3.1,0,8.4,1.5,20.8,13.5c14.2,14.2,16.6,20.7,24.6,20.7h21c6,0,9-3,7.2-8.8
		c-1.9-5.8-8.7-14.4-17.7-24.6c-4.9-5.8-12.3-12-14.4-15.1c-3.1-4-2.2-5.8,0-9.3C159.4,55.9,185,19.9,187.6,7.6z"></path></g></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-fb"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Facebook" data-testid="undefined:sharebar:button-icon-fb"><svg version="1.1" id="Isolation_Mode" x="0px" y="0px" viewBox="0 0 8.86 17.16" style="enable-background:new 0 0 8.86 17.16" xml:space="preserve"><g><g><path class="st0" d="M2.62,17.16c0-0.04,0-0.26,0-0.31c0-2.51,0-5.02,0-7.52c0-0.03,0-0.06,0-0.1c-0.04,0-0.07,0-0.11,0
			c-0.8,0-1.6,0-2.4,0C0,9.24,0,9.24,0,9.13c0-0.94,0-1.88,0-2.82c0-0.09,0.03-0.11,0.11-0.11c0.8,0,1.6,0,2.4,0
			c0.03,0,0.07,0,0.11,0c0-0.03,0-0.06,0-0.09c0-0.78,0-1.56,0.01-2.34c0.01-0.63,0.13-1.24,0.4-1.81C3.4,1.2,3.99,0.64,4.78,0.32
			C5.31,0.09,5.87-0.01,6.44,0C7.09,0.01,7.75,0.04,8.4,0.06c0.12,0,0.24,0.03,0.36,0.03c0.07,0,0.09,0.03,0.09,0.1
			c0,0.39,0,0.78,0,1.17c0,0.46,0,0.92,0,1.37c0,0.08-0.02,0.1-0.1,0.1c-0.5,0-0.99-0.01-1.49,0C7.04,2.84,6.81,2.87,6.59,2.92
			c-0.43,0.09-0.68,0.37-0.76,0.8C5.79,3.88,5.77,4.06,5.77,4.23c-0.01,0.64,0,1.27,0,1.91c0,0.02,0,0.04,0,0.07
			c0.04,0,0.07,0,0.11,0c0.92,0,1.83,0,2.75,0c0.12,0,0.12,0,0.11,0.11c-0.06,0.5-0.13,1-0.2,1.5C8.49,8.24,8.44,8.66,8.39,9.08
			C8.37,9.24,8.37,9.24,8.21,9.24c-0.78,0-1.56,0-2.33,0c-0.03,0-0.07,0-0.11,0c0,0.04,0,0.08,0,0.12c0,2.48,0,4.96,0,7.44
			c0,0.06,0,0.3,0,0.36C4.72,17.16,3.67,17.16,2.62,17.16z"></path></g></g></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-tw"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Twitter" data-testid="undefined:sharebar:button-icon-tw"><svg version="1.1" id="Logo__x2014__FIXED" x="0px" y="0px" viewBox="0 0 250 203.18" style="enable-background:new 0 0 250 203.18" xml:space="preserve"><path class="st0" d="M78.62,203.18c94.34,0,145.94-78.16,145.94-145.94c0-2.22-0.05-4.43-0.15-6.63
	c10.01-7.24,18.72-16.27,25.59-26.56c-9.19,4.08-19.08,6.83-29.46,8.07c10.59-6.35,18.72-16.4,22.55-28.37
	c-9.91,5.88-20.89,10.15-32.57,12.45C201.17,6.24,187.84,0,173.09,0c-28.33,0-51.3,22.97-51.3,51.29c0,4.03,0.45,7.94,1.33,11.69
	C80.5,60.84,42.69,40.43,17.4,9.39c-4.41,7.58-6.95,16.39-6.95,25.78c0,17.8,9.06,33.5,22.82,42.69
	c-8.41-0.26-16.32-2.57-23.23-6.42c-0.01,0.21-0.01,0.43-0.01,0.65c0,24.84,17.68,45.58,41.15,50.28c-4.31,1.17-8.84,1.8-13.52,1.8
	c-3.3,0-6.52-0.33-9.64-0.93c6.53,20.38,25.46,35.21,47.92,35.62c-17.56,13.76-39.67,21.96-63.7,21.96c-4.14,0-8.22-0.24-12.24-0.71
	C22.7,194.69,49.65,203.18,78.62,203.18"></path></svg></button></li><li data-type="new-window" class="style__Item-sc-1wyuot3-2 jZtuqC icon-rd"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Reddit" data-testid="undefined:sharebar:button-icon-rd"><svg version="1.1" id="iconmonstr" x="0px" y="0px" viewBox="0 0 24 20" style="enable-background:new 0 0 24 20" xml:space="preserve"><path id="reddit-1" class="st0" d="M24,9.78c0-1.46-1.19-2.65-2.66-2.65c-0.71,0-1.36,0.29-1.84,0.75
	c-1.81-1.19-4.26-1.95-6.97-2.05l1.48-4.67l4.02,0.94c0,0.02-0.01,0.04-0.01,0.06c0,1.19,0.98,2.16,2.17,2.16
	c1.2,0,2.17-0.97,2.17-2.16C22.37,0.97,21.4,0,20.2,0c-0.92,0-1.7,0.57-2.02,1.38l-4.33-1.01c-0.19-0.05-0.38,0.06-0.44,0.25
	l-1.65,5.21c-2.84,0.03-5.41,0.8-7.3,2.02c-0.47-0.44-1.1-0.71-1.8-0.71C1.19,7.13,0,8.32,0,9.78c0,0.97,0.53,1.81,1.32,2.27
	c-0.05,0.28-0.09,0.57-0.09,0.86c0,3.91,4.81,7.09,10.72,7.09c5.91,0,10.72-3.18,10.72-7.09c0-0.27-0.03-0.54-0.08-0.81
	C23.43,11.65,24,10.78,24,9.78z M6.78,11.59c0-0.87,0.71-1.57,1.58-1.57s1.58,0.71,1.58,1.57c0,0.87-0.71,1.57-1.58,1.57
	S6.78,12.46,6.78,11.59z M15.84,16.26c-0.8,0.79-2.05,1.18-3.82,1.18c0,0-0.01,0-0.01,0c0,0-0.01,0-0.01,0
	c-1.78,0-3.03-0.39-3.82-1.18c-0.14-0.14-0.14-0.38,0-0.52c0.15-0.14,0.38-0.14,0.53,0c0.65,0.65,1.73,0.96,3.3,0.96
	c0,0,0.01,0,0.01,0c0,0,0.01,0,0.01,0c1.57,0,2.65-0.31,3.3-0.96c0.14-0.15,0.38-0.14,0.53,0C15.98,15.88,15.98,16.12,15.84,16.26z
	 M15.65,13.17c-0.87,0-1.58-0.71-1.58-1.57c0-0.87,0.71-1.57,1.58-1.57c0.87,0,1.58,0.71,1.58,1.57
	C17.23,12.46,16.52,13.17,15.65,13.17z"></path></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-line"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Line" data-testid="undefined:sharebar:button-icon-line"><svg version="1.1" id="svg7898" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsSvg="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 217 206.8" style="enable-background:new 0 0 217 206.8" xml:space="preserve"><path class="st0" d="M108.5,0C48.7,0,0,39.5,0,88c0,43.5,38.6,80,90.7,86.9c3.5,0.8,8.3,2.3,9.6,5.3c1.1,2.7,0.7,7,0.3,9.8
	c0,0-1.3,7.7-1.5,9.3c-0.5,2.7-2.2,10.7,9.4,5.8c11.6-4.9,62.5-36.8,85.2-63C209.5,125,217,107.5,217,88C217,39.5,168.3,0,108.5,0z
	 M70.2,114c0,1.2-0.9,2.1-2.1,2.1H37.7c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V66.7c0-1.2,0.9-2.1,2.1-2.1h7.6
	c1.2,0,2.1,0.9,2.1,2.1v37.5h20.7c1.2,0,2.1,1,2.1,2.2V114z M88.6,114c0,1.2-0.9,2.1-2.1,2.1h-7.6c-1.2,0-2.1-0.9-2.1-2.1V66.7
	c0-1.2,0.9-2.1,2.1-2.1h7.6c1.1,0,2.1,0.9,2.1,2.1V114z M140.7,66.7v47.1c0,1.2-0.9,2.1-2.1,2.1H131c-0.1,0-0.3-0.1-0.5-0.1h-0.1
	c-0.1,0-0.1,0-0.1,0h-0.1h-0.1c-0.1,0-0.1,0-0.1,0l-0.1-0.1c-0.2-0.1-0.4-0.3-0.5-0.5l-21.7-29.3V114c0,1.2-0.9,2.1-2.1,2.1H98
	c-1.2,0-2.1-0.9-2.1-2.1V66.9c0-1.2,0.9-2.1,2.1-2.1h7.6c0.1,0,0.1,0,0.1,0h0.1h0.1h0.1h0.1c0.1,0,0.1,0,0.1,0h0.1
	c0.1,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0l0.1,0.1c0.1,0,0.1,0,0.1,0
	l0.1,0.1l0.1,0.1c0.1,0.1,0.2,0.1,0.2,0.2l21.7,29.3V66.7c0-1.2,0.9-2.1,2.1-2.1h7.6C140,64.6,140.9,65.5,140.7,66.7z M183,74.3
	c0,1.2-0.9,2.1-2.1,2.1l-20.7,0.1v8h20.7c1.2,0,2.1,0.9,2.1,2.1v7.6c0,1.2-0.9,2.1-2.1,2.1h-20.7v8h20.7c1.2,0,2.1,0.9,2.1,2.1v7.6
	c0,1.2-0.9,2.1-2.1,2.1h-30.4c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V66.7c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6
	h30.4c1.2,0,2.1,0.9,2.1,2.1V74.3z"></path></svg></button></li><li data-type="clipboard" class="style__Item-sc-1wyuot3-2 jZtuqC icon-lk"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Copy Link" data-testid="undefined:sharebar:button-icon-lk"><svg version="1.1" id="Layer_1_copy" x="0px" y="0px" viewBox="0 0 19 19" style="enable-background:new 0 0 19 19" xml:space="preserve"><path class="st0" d="M9.02,14.32c-0.22-0.06-0.43-0.15-0.64-0.24l-1.76,1.76c-0.95,0.95-2.5,0.95-3.46,0c-0.95-0.95-0.95-2.5,0-3.46
	l3.46-3.46c0.44-0.44,1.02-0.67,1.6-0.7c0.27-0.01,0.54,0.02,0.81,0.09c0.38,0.11,0.75,0.31,1.05,0.61
	c0.21,0.21,0.35,0.46,0.47,0.71c0.07-0.06,0.15-0.11,0.21-0.17l1.6-1.6C12.2,7.63,12.02,7.4,11.81,7.2
	c-0.41-0.41-0.86-0.72-1.35-0.95C10.18,6.11,9.9,6.01,9.61,5.93C8.5,5.63,7.3,5.74,6.24,6.24c-0.4,0.19-0.78,0.44-1.12,0.74
	C5.04,7.05,4.96,7.12,4.89,7.19l-3.46,3.46c-1.91,1.91-1.91,5.01,0,6.92c1.91,1.91,5.01,1.91,6.92,0l3.28-3.28
	C10.78,14.53,9.87,14.55,9.02,14.32z"></path><path class="st0" d="M17.57,1.43c-1.91-1.91-5.01-1.91-6.92,0L7.54,4.54c0.79-0.19,1.63-0.2,2.42,0.02c0.26,0.07,0.5,0.17,0.75,0.28
	l1.67-1.67c0.95-0.95,2.5-0.95,3.46,0c0.95,0.95,0.95,2.5,0,3.46l-3.46,3.46c-0.44,0.45-1.02,0.67-1.6,0.7
	c-0.27,0.01-0.54-0.02-0.81-0.1c-0.38-0.11-0.75-0.31-1.05-0.61C8.66,9.81,8.48,9.48,8.37,9.15C8.31,9.2,8.24,9.24,8.18,9.3
	l-1.65,1.65c0.19,0.3,0.4,0.59,0.66,0.86c0.41,0.41,0.86,0.72,1.35,0.95c0.27,0.13,0.55,0.23,0.84,0.31
	c1.11,0.3,2.31,0.19,3.37-0.31c0.4-0.19,0.78-0.44,1.12-0.74c0.08-0.07,0.16-0.13,0.23-0.21l3.46-3.46
	C19.48,6.44,19.48,3.34,17.57,1.43z"></path></svg></button><span class="style__CopiedMessage-sc-1wyuot3-4 dqMlZR message">Copied to clipboard</span></li></ul></div></div></div></div></section><section class="style__Wrapper-sc-17x3yhp-0 style__ResponsiveWrapper-sc-17x3yhp-10 gLXFgp izJRkJ"><div class="style__Content-sc-17x3yhp-1 hAcEIj"><div id="patch-notes-container">
	<h2 id="patch-top"></h2>
	<blockquote class='blockquote context'>
		Welcome to the 2024 Season! Split 1 kickoff is quickly approaching, so make sure to read up on all the changes coming in 14.1 to get ready. THIS IS THE YEAR WE HIT OUR RANKED GOALS!<br>
		<br>
		This year we’re starting off strong with a big gameplay update! We’ve got Voidgrubs, Voidmites, Voidborn Monsters, three Baron Nashor forms each with their own Baron Pit, map changes to every lane and jungle, over 100 item changes (including new items), a Hwei buff, dynamic music, new in-game quests, FIST BUMPS, and a lot more!<br>
		<br>
		Ya like Jazz? Check out the <em>TFT patch notes <a href="https://www.leagueoflegends.com/en-pl/news/game-updates/teamfight-tactics-patch-14-1-notes/" target="_blank">here</a>!</em>
	</blockquote>
	<div class="context-designers">
		<span class='context-designer' style="text-align:left"><img src='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt075f593cd43ae0af/6204a31f214fe9266428cdaa/Author_Lilu.jpg'> Lilu "Riot Riru" Cabreros</span>
	</div>
	<header class='header-primary'>
		<h2 id="patch-patch-highlights">Patch Highlights</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt585dfa779edbf7ba/65989419d082f799ea261386/10924_Patch_14_1_Notes_Highlights.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt585dfa779edbf7ba/65989419d082f799ea261386/10924_Patch_14_1_Notes_Highlights.jpg"></a></span>
				<p>Dragonmancer Kassadin, Dragonmancer Rakan, Dragonmancer Fiora, Dragonmancer Vayne, and Prestige Dragonmancer Rakan will be available January 10, 2024 at 19:00 UTC.</p>
			</div>
		</div>
	</div>
	<header class='header-primary'>
		<h2 id="patch-ranked-season-2024">Ranked Season 2024</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>SPLIT 1 KICKOFF</h4>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Welcome to the 2024 Ranked Season! We’re going to be kicking off the first split of the year in this patch with ranked queues opening on January 10th. For those that missed the ranked queues closing details in the last patch notes you can read those here.<br>
					<br>
					Season 2024 Split 1 starts at 12:00:00 January 10, 2024 according to regional local time everywhere except for LA1 and NA1:
				</blockquote>
				</span>
				<ul>
					<li>LA1 starts at 9am, Jan 10 CST</li>
					<li>NA1 starts at 7am, Jan 10 PST</li>
				</ul>
				<style>
				                          table, th, td {
				                                border: 1px solid white;
				                                border-collapse: collapse;
				                                padding: 2%;
				                              }
				</style>
				<center>
					<table>
						<tbody>
							<tr>
								<th width="20%">Region</th>
								<th width="50%">Time Zone</th>
								<th width="30%">Season Start Local Time</th>
							</tr>
							<tr>
								<td>OC1</td>
								<td>Australian Eastern Daylight Time (AEDT)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>JP1</td>
								<td>Japan Standard Time (JST)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>KR1</td>
								<td>Korea Standard Time (KST)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>RU</td>
								<td>Moscow Standard Time (MSK)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>EUN1</td>
								<td>Central European Time (CET)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>TR1</td>
								<td>Turkey Time (GMT+3)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>EUW1</td>
								<td>Greenwich Mean Time (GMT)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>BR1</td>
								<td>Brasilia Standard Time (GMT-3)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>LA2</td>
								<td>Argentina Standard Time (GMT-3)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>LA1</td>
								<td>Central Standard Time (CST)</td>
								<td>Jan/10/2024 9:00:00</td>
							</tr>
							<tr>
								<td>NA1</td>
								<td>Pacific Standard Time (PST)</td>
								<td>Jan/10/2024 7:00:00</td>
							</tr>
							<tr>
								<td>PH</td>
								<td>Philippine Standard Time</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>VN</td>
								<td>Indochina Time (GMT+7)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>SG</td>
								<td>Singapore Standard Time (GMT+8)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>TH</td>
								<td>Indochina Time (GMT+7)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
							<tr>
								<td>TW</td>
								<td>Taipei Standard Time (GMT+8)</td>
								<td>Jan/10/2024 12:00:00</td>
							</tr>
						</tbody>
					</table>
				</center>
				<br>
				<span>				
				<blockquote class='blockquote context'>
					The season transition experience will be similar to what we had in the past: Ranked queues will be disabled for a couple of hours, and will be brought back as soon as 14.1 is up, and a couple of hours after that, Split 1 will be officially launched! The ranked games played during the downtime won't count towards your new season progression.<br>
					<br>
					Shard transfers will be disabled before season end, and re-enabled after all end of season rewards are granted.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>SEASON 2023: SPLIT 2 RANKED REWARDS</h4>
				<br>
				<span>				
				<blockquote class='blockquote context'>
					For those who earned it, Victorious Tryndamere will be the reward for the 2023 Split 2 season! We mentioned it in one of our recent Dev Updates but this skin will be a little delayed so you should expect him to appear on your accounts in a few patches. We wanted to make sure we had a unique skin for each split so we opted to take some time to ensure those that participated in split 2 received a different reward than split 1. We’ll add it to the notes on the patch that should happen as well, right now we’re targeting patch 14.4, and we’ll update you if anything changes there.<br>
					<br>
					As for the remaining rewards (of which you can see the details on our Ranked Rewards support article) those should be delivered onto your accounts in 14.2 and we’ve validated the results.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<header class='header-primary'>
		<h2 id="patch-void-gameplay-changes">Void Gameplay Changes</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<blockquote class='blockquote context'>
					In case you missed this one as well, we released a dev blog late last year to offer players a helping hand when it comes to learning about the Void changes coming this patch, <em>/dev: Cat Cults, Rift Mechs, and Baron’s Revamp</em> <a href="https://www.leagueoflegends.com/en-pl/news/dev/dev-cat-cults-rift-mechs-and-baron-s-revamp/" target="_blank">here</a>! If you’re interested in how we refined these changes OR if the idea of seeing 11 adorable cats combining their forces to seal Rift Herald appeals to you, give it a read!<br>
					<br>
					<em>Disclaimer: Void Event not included</em>
				</blockquote>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>VOIDGRUBS, VOIDMITES, AND THE HUNGER OF THE VOID</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt806b3277719663f0/65962adb7d6d2e61a6b8dfa7/10924_Voidgrubs_and_Voidmites.gif" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt806b3277719663f0/65962adb7d6d2e61a6b8dfa7/10924_Voidgrubs_and_Voidmites.gif"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					We’ve got some brand new residents moving into the Baron pit this season: the Voidgrubs and Voidmites. These Voidborn beasties are a new horde objective that will be taking the place of the first Rift Herald each game. Our goal with Voidgrubs was to provide tower pushing pressure in contrast to dragon buff's ramping threat, but spread it out more evenly across all lanes. We also wanted to give players gradual, persistent power throughout the entire game, as opposed to the old Shelly whose power was more instant and would sometimes simply end the laning phase. In addition, its multiple spawn nature means that mid or top laners who have pushed out their lane can sneak one without needing to commit the full time it would take to clear an entire epic objective. But let’s jump into the details!
				</blockquote>
				</span>
				<ul>
					<li>Three Voidgrubs spawn at 5 minutes into the game.</li>
					<li>Each Voidgrub will spawn 4 Voidmites every 12 seconds in combat.</li>
					<li>Voidgrubs can respawn once per game as each one has their own individual respawn timer of 4 minutes, so feel free to just take one and walk away.</li>
					<li>On death, Voidgrubs will give other nearby Voidgrubs a 25% Maximum Health + 25% Missing Health shield that decays over 10 seconds.</li>
					<li>Killing one Voidgrub grants the player and allied teammates one stack of the Hunger of the Void Buff, which causes your non-proc attacks to deal bonus true damage to structures over 4 seconds. This damage will scale with the number of Voidgrubs slain at a rate of 4 (melee) / 3 (ranged) true damage every 0.5 seconds per stack.</li>
					<li>Once your team hits 5 stacks of the buff, you will spawn 1 Voidmite to help when attacking towers (15 second cooldown). At 6 stacks the amount of Voidmites is increased to 2. Voidmites summoned by players have the same stats as a melee minion, but with 40% less health and 50% more movespeed.</li>
					<li>Voidgrubs despawn at 13:45 in-game time (or 13:55 if Voidgrubs are in combat) to make way for Rift Herald.</li>
					<li>The first Voidgrub taken per spawn group* will count as an epic takedown reward for the first one you participate in killing. For example, Cho’Gath can get one epic monster stack from the first Voidgrub he kills in the first spawn group, and then one more if he kills a Voidgrub that spawned in the second group. (*The Voidgrubs that spawn at 5 minutes are the first spawn group, and once slain the Voidgrubs that replace them are the second spawn group.)</li>
				</ul>

				<h4>VOIDGRUBS</h4>
				<ul>
					<li>Health: 250 (+250 per minute of game time)</li>
					<li>Attack Damage: 10 (+2.5 per minute of game time)</li>
					<li>Attack Speed: 0.5</li>
					<li>Armor: 0</li>
					<li>Magic Resistance: 0</li>
					<li>Movement Speed: 350</li>
					<li>Attack Range: 500 units</li>
					<li>Experience: 75 (+2% per level over 4*) (*Level is calculated as the average level of champions in the game, rounded up)</li>
					<li>Gold Given on Takedown: 20 gold to the killer + 10 gold per player (including killer)</li>
				</ul>

				<h4>VOIDMITES (WHEN SUMMONED BY VOIDGRUBS)</h4>
				<ul>
					<li>Health: 20 (+40 per minute of game time)</li>
					<li>Attack Damage: 6 (+0.5 per minute of game time)</li>
					<li>Attack Speed: 2</li>
					<li>Armor: 0</li>
					<li>Magic Resistance: 0</li>
					<li>Movement Speed: 420</li>
					<li>Attack Range: 125</li>
					<li>Experience: 0</li>
					<li>Gold Given on Takedown: 1 gold to killer</li>
				</ul>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>REVAMPED RIFT HERALD</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt381ce562dc6c125c/65962ab590dcf20295647a64/10924_Rift_Herald_Normal_View.png" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc08a72dfeafc8734/659646d014672f1ab06fa267/10924_New_Rift_Herald_v2.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Rift Herald is back and they have a brand new, Voidgrub-inspired look! But this isn’t just a surface level change, because Herald also has some changes under the hood… err, shell?
				</blockquote>
				</span>
				<ul>
					<li>If you or an allied teammate summon the Rift Herald, one player (either the user or a teammate) can right click the Herald in order to hop onto Shelly. Right clicking any direction while channeling onto Herald will allow the player to pick where Herald will start charging. While charging, players can steer the Rift Herald while she charges forward (similar to a Sion ultimate).</li>
					<li>The Rift Herald receives 1 use of Charge when summoned which is consumed as soon as a player hops onto Herald (or when Herald automatically Charges a tower unpiloted). In the event a nearby enemy tower or inhibitor is destroyed, Herald will receive an additional Charge. This Charge (and cooldown) is displayed on Rift Herald’s health bar.</li>
					<li>The Charge lasts for up to 14 seconds, starting at 150 movement speed and ramping up to 600 movement speed over 5 seconds (this is increased by 75% when charging towards an enemy tower). The charge will end upon collision with a structure or terrain, reducing the Herald’s health by 66% and ejecting the player 200 (+75% of player’s attack range) units in the opposite direction of the charge. In the event Herald’s Charge hits a live tower the ejection distance is increased to 700 (+75% of player’s attack range) units.</li>
					<li>If a player steers the Rift Herald through enemies (including champions), the enemy will receive 250 true damage and be knocked airborne.</li>
					<li>If a player steers the Rift Herald into an enemy structure a bonus 2000 (+0-750 based on average champion level) damage will be dealt to the structure, 5 (+ the number of Hunger of the Void stacks of the user) Voidmites will be spawned to attack the tower, and the player will gain a temporary shield.</li>
					<li><span class='new'>NEW</span>Rift Herald now has Baron’s Gaze which reduces damage taken from the last enemy attacked by 50%.</li>
					<li>Empowered Recall: The holder gains Empowered Recall until the Eye is used/expires &rArr; All allied champions who assisted in killing Herald gain a single completed use of Empowered Recall</li>
					<li>Sharing (Gold) is Caring: Rift Herald grants any gold it gains from turrets/turret plates to the player that summoned them (if they weren't around) &rArr; Rift Herald grants any gold it gains from turrets/turret plates to all champions who assisted in killing the Herald</li>
					<li><span class='new'>NEW</span>Auto Cast: Upon expiring, the Eye of the Herald will auto-cast with no channel time and summon Rift Herald. In the event your champion is currently dead, the Herald will spawn in your team’s fountain.</li>
				</ul>

				<p><strong>Rift Herald</strong> <em>(Note: Unchanged)</em></p>
				<ul>
					<li>Health: 7125-14250 (based on level)</li>
					<li>Attack Damage: 99.5-250 (based on level)</li>
					<li>Attack Speed: 0.4</li>
					<li>Armor: 60</li>
					<li>Magic Resistance: 50</li>
					<li>Movement Speed: 325</li>
					<li>Attack Range: 250</li>
					<li>Experience: 306-320 (based on level)</li>
					<li>Gold Given on Takedown: 100 gold to killer, 100 local gold</li>
				</ul>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>VOIDBORN SENTINEL, BRAMBLEBACK, AND…. SCUTTLER?</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd305a9b0e6f22405/65962ab3dd0067174e2073ff/10924_Void_Blue.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd305a9b0e6f22405/65962ab3dd0067174e2073ff/10924_Void_Blue.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Once Baron Nashor emerges onto the Rift at 20 minutes, the next time Blue Sentinel and Red Brambleback respawn they will rise again as Voidborn Sentinel and Voidborn Brambleback respectively with 30% more health. This transformation also comes with increased durability making them harder to take down, but fret not because this extra effort is worth it! Now, once slain, Blue and Red will grant their buffs to the entire team of the player that takes them down (excluding any allies that were dead).<br>
					<br>
					Speaking of Blue and Red, their respective buffs are also getting some changes! <em>(Note: These adjustments apply to both the base Sentinel and Brambleback as well as their Voidborn counterparts.</em>
				</blockquote>
				</span>
				<ul>
					<li>Crest of Insight (Blue Buff): 5/10/15/20 Haste <span class='change-indicator'>&rArr;</span> 10 Haste</li>
					<li>Crest of Cinders (Red Buff): 0.5/1/3/5% Max Health Regeneration (levels 1/4/6/11) <span class='change-indicator'>&rArr;</span> 0.5/1/3% Max Health Regeneration (levels 1/4/6)</li>
					<li>When the buffs become Voidborn they no longer transfer to opponents upon the owner’s death (mainly to prevent giant messes with everyone having buffs all the time)</li>
				</ul>

				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f0dc20a8e104930/659c912cb05b9eb6d8d74610/10924_Draconic_Blue_v2.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f0dc20a8e104930/659c912cb05b9eb6d8d74610/10924_Draconic_Blue_v2.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					But we also have a non-void related update for our favorite Sentinel and Brambleback! Introducing Draconic Sentinel and Brambleback, these versions appear once the Elemental Rift is locked in as the 2nd drake is slain.  Unlike their Voidborn counterparts though, no respawn is required for the buff to become Draconic!
				</blockquote>
				</span>
				<ul>
					<li>Upon death, Draconic Sentinel and Brambleback will give the champion that slayed them a version of their respective buff (buffs unchanged) and drop a duplicate of their buff at their original spawn location. Only one buff will be shareable with allies while the other must be claimed by an allied champion with a jungle item in their inventory (unchanged vs live).</li>
					<li>Starting at 20 minutes, once slain the Draconic Brambleback and Sentinel will respawn as their Voidborn counterparts.</li>
					<li>Blue/Red Buff sharing mechanics are no longer tied to Jungle item progression.</li>
				</ul>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt43519ffd8ad805e9/65962ab4b17790c805d0300f/10924_Voidborn_Scuttler.png" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte6829d8203ab556b/659646cfa8ee431769199e6f/10924_Voidborn_Scuttler_v2.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Similarly, after 20 minutes once Rift Scuttler rises again after being slain, she will be Voidborn Scuttler. When slain, Voidborn Scuttler will send out a massive Scryer’s Bloom effect, revealing all champions and wards in a large surrounding area. Similar to Scryer’s, all wards revealed this way will be reduced to 1 HP.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>BARON NASHOR</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc40bc3c2fa4bbddd/65962ab81c5d7c264b0f332a/10924_Baron_Nashor_Forms.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc40bc3c2fa4bbddd/65962ab81c5d7c264b0f332a/10924_Baron_Nashor_Forms.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Would it really be a set of Void-related changes without Baron Nashor himself? It’s been quite a while since Baron last received a visual update, let alone one with three new, terrifying forms! Introducing them from left to right, we have the All-Seeing Baron, Hunting Baron, and finally the Territorial Baron.<br>
					<br>
					The Baron dance is one as old as time, but over the years, the Baron fight has gotten somewhat stale with players hyper optimizing every aspect of it. It's also not aged well as our premier epic monster, the kind of monster that makes you say “Wow that’s an epic monster.” Our goal here is to update Baron's visuals while freshening up his fight a bit using new terrain and spells so that it takes a bit of new mastery and adaptability game to game.<br>
					<br>
					Each form of Baron Nashor will have a unique move at their disposal, so make sure to prepare accordingly!
				</blockquote>
				</span>
				<ul>
					<li><strong>Hunting Baron</strong>: Baron calls a pillar of lightning over every nearby enemy. After 0.7 seconds they begin to strike, delayed by 0.1 second per strike. These deal 15% of the target’s current health.</li>
					<li><strong>All-Seeing Baron</strong>: Baron summons rifts toward the two furthest enemies he can see within 2200 units. These last for 3 seconds and deal 150 magic damage on the first hit, and 50 damage for every subsequent hit.</li>
					<li><strong>Territorial Baron</strong>: Baron reaches out, after 1.5 seconds he grabs all enemies in a cone, pulling them 300 units and dealing 75 magic damage to them.</li>
				</ul>
				<p><strong>Baron Nashor</strong></p>
				<ul>
					<li>Health: 11400 (+180 per minute from game start)</li>
					<li>Attack Damage: 350 (+ 10 per minute from spawn) <em>(Note: AD will cap at 520)</em></li>
					<li>Attack Speed: 0.625</li>
					<li>Armor: 120</li>
					<li>Magic Resistance: 70</li>
					<li>Movement Speed: 300 lol</li>
					<li>Attack Range: 955</li>
					<li>Experience: 600 to all contributors plus 800 distributed among nearby allied teammates</li>
					<li>Gold Given on Takedown: 25 gold to killer, 300 per allied player</li>
				</ul>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>BARON TERRAIN VARIATIONS</h4>
				<br>
				<span>				
				<blockquote class='blockquote context'>
					Fighting around Baron has been essentially unchanged since Baron got his last VGU, so we thought it was time to add a little bit more interest to his fight game to game. While Baron is still a fun and interesting objective to have on the map, over time players have effectively “solved” how to take him down. And where’s the fun in that? This should help shake things up between games so now each game you’ll be challenged to think about exactly how you can take advantage of each Baron pit.
				</blockquote>
				</span>				
				<p><strong>Hunting Baron Pit</strong></p><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb3114dbf33e43c6c/65962ab7b0fbcbbd8c628440/10924_Hunting_Baron_Pit.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb3114dbf33e43c6c/65962ab7b0fbcbbd8c628440/10924_Hunting_Baron_Pit.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					This is the baseline Baron pit, but why fix what isn’t broken? His new spell in this pit punishes grouped up enemies so make sure to distance properly.
				</blockquote>
				</span>
				<p><strong>Territorial Baron Pit</strong></p><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38e480b551bfb841/65962ab8c4b620ea01fb7fc2/10924_Territorial_Baron_Pit.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38e480b551bfb841/65962ab8c4b620ea01fb7fc2/10924_Territorial_Baron_Pit.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					A <em>rifft</em> on the baseline pit, it's easier to disengage from enemies in this variation, but flanks are also faster. His new spell in this pit can punish heavy grouping to disincentivize grouping on a single side.
				</blockquote>
				</span>
				<p><strong>All-Seeing Baron Pit</strong></p><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt474f6419c12461b5/65962ab890dcf25f97647a68/10924_All_Seeing_Baron_Pit.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt474f6419c12461b5/65962ab890dcf25f97647a68/10924_All_Seeing_Baron_Pit.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					This is the most different from the pit of today, it's much riskier to access Baron from the river in this variation with new strong flank and flee angles. His new spell in this pit goes far and controls zones locking up some of the free new space that he’s made here.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<header class='header-primary'>
		<h2 id="patch-terrain-changes">Terrain Changes</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<blockquote class='blockquote context'>
					In case you missed it we released a dev blog late last year digging into these terrain changes, <em>/Dev: Season 2024 Map Changes <a href="https://www.leagueoflegends.com/en-pl/news/dev/dev-season-2024-map-changes/" target="_blank">here</a>!</em> We recommend checking out the entire thing if you’re curious about how we landed on these changes.<br>
					<br>
					We’ve got a few different goals with the map changes this season. At the highest level, our goal is to make lanes more fair across sides. Red and blue sides have very different advantages in a lane with respect to how to gank them, how fights play out, how you can posture against the brush or river, etc. These differences will still exist, but in lesser ways. For example, top lane red side won’t feel nearly so exposed when pushing up, so you don’t need to be a safer laner to exist when the champ select gods put you red side.<br>
					<br>
					The second goal of the map changes was specifically around making solo lanes a bit more protected from junglers, or roamers generally. Ganking as a primary early game output was just too strong in most cases. Each lane had a slightly different reason for their changes however. Let’s take a quick dive into those now!
				</blockquote>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>TOP SIDE</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf24d00826417d3b/65962affa8ee436cb7199e3e/10924_Top_Side_View.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf24d00826417d3b/65962affa8ee436cb7199e3e/10924_Top_Side_View.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Top lane is in a constant push and pull between players wanting more influence and output over the rest of the map in the lane, and also being substantially less influenced by the other roles, especially early on. For most players, the lane simultaneously feels entirely at the mercy of your jungler (or roaming support in higher skill levels) and also unable to do anything to win the game except with major leads.<br>
					<br>
					With these changes we’re substantially reducing the ability for other lanes to affect top in the early game, letting the 1v1 fight really shine. It’s not like the jungler won’t be able to gank at all, so still watch out. We’re also shifting top brush into a pixel in the center of the river so it’s less side-skewed and substantially more powerful when contested. It tends to be correct to ward outside of the river brush on live in many cases and while this still remains true to an extent, this brush is closer to an optimal warding position and is less potent for ganking than before.<br>
					<br>
					Also, an extension of the jungler influence on top lane was early Rift Herald. More often than not, Rift Herald was dropped in top lane (it’s closest to her lair after all), and she absolutely destroys any laning phase that might exist. What’s a tower to a crab god? Shelly regularly invalidated laning phases by destroying towers and adding giant influxes of gold to a specific laner, usually entirely at the jungler’s whim. We’ve seen that quite often both top laners are dissatisfied with lanes breaking apart this early—the behind player being put into the dumpster, and the ahead player not having any more time to play with their lead. By pushing back Rift Herald, we’re intending to substantially reduce the volatility of the late laning phase top lane experience. Dovetailing off the objective space, one of our goals with the new Voidgrubs objective is that top laners will have a lot more agency in affecting the outcome of the early top side objective than before. We’re also making the top side objective more potent for team-wide success than previously so that their early leads can matter more for the team. We’ll go more into the Voidgrubs down below, but overall we’re aiming to give top laners a lane more protected from outside influence while making their lane more important for the team’s overall chances of victory.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>MID</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta8227bd3aee86212/65962aff1c5d7c519d0f332e/10924_Mid_Lane_View.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta8227bd3aee86212/65962aff1c5d7c519d0f332e/10924_Mid_Lane_View.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Mid lane was a similar set of changes for some slightly different goals. It is the lane (on live) with by far the most access for ganking, and one thing we’ve noticed is that over the years players have learned just how unsafe the lane is for a lot of our more immobile champions without great self-peel. The Zyras and Brands and Karthuses of League have felt like the midlane was no longer able to be their home as more and more high-agency characters appeared and junglers learned just how easy it was to punish these immobile mages.<br>
					<br>
					Our main goal here was to make mid substantially safer for this class of characters at a fundamental level. Opening up midlane to be mage-forward should give us a real role for this class again. The goal is not at all to push assassins out of this lane, just make it more hospitable for immobile characters with respect to their ability to face junglers. They’re still definitely gankable, but should be a bit less so than they are currently.<br>
					<br>
					The other main change for mid was to open up roam paths that are a little bit safer. Each side will have a path players can roam along that requires putting themselves at substantially less risk to get to river or even the respective lane they’re roaming to. We’re pushing out the mid lane brush for the same reasons. Providing mid laners with about 20% more time after seeing an enemy before they can get into actionable range should give substantially less power to early ganks and much more safety to these immobile characters.<br>
					<br>
					Mid lane, at its core, is a lane that requires some amount of roaming to support junglers or side lanes. And in the current state of League, the mid laners who don’t have the agency to safely roam feel invalidated by the role. Altogether our goal here is to lower the requirements to a functional mid laner across champions so that we can support a wider roster of champions there, particularly immobile mages and their like. We are definitely not trying to push champions out of the role though and will definitely be balancing to follow up here, especially since there are surely a number of high-agency mages who will benefit a lot and be overbearing at the start.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>BOT SIDE</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt51dadeba7b61821f/65962aff1a81668149b0aa27/10924_Bot_Lane_View.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt51dadeba7b61821f/65962aff1a81668149b0aa27/10924_Bot_Lane_View.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Bot lane is getting a smaller set of changes visually, but we definitely still expect them to be quite impactful overall. Just like top lane, we’re adding parity across sides so that entrances to lane and brush positions are matched roughly equally across sides.<br>
					<br>
					These changes open up a new gank pathway through bottom red jungle and are among our riskiest changes to the map. We’re reducing gank potency elsewhere while nominally increasing it bot lane, so we’ll be watching this portion of the map very closely to ensure that it’s still reasonable and enjoyable. Red side bot lane is now particularly more vulnerable than before (as opposed to blue side) because it doesn’t have the extra distance created from Dragon pit walls to give more time for responding to action on vision or even just to slightly delay movement from river.<br>
					<br>
					This new gank pathway also doesn’t allow for as easy contesting of vision in its tri brush because of the relatively easier access from river. It’s a difficult spot on the map for us to balance and one we’ll look at closely. The center of river brush should also be more of a focal point to contest as compared to before as it has deeper river control than the old brush and is less side-skewed.<br>
					<br>
					This brush should be substantially worse for ganking red-side bot lane when unwarded, however. On live, the river brush gives near unfettered access to lane and this power is brought down to mitigate the concerns around gankability of red-side bot lane. Notably, this brush does cover access to the red tri brush from river to protect your bot lane from all but the deepest wraparound ganks.
				</blockquote>
				</span>				
			</div>
		</div>
	</div>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<h4>JUNGLE</h4><br>
				<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt42ef07884eb8f38d/65962aff71a55d4458cd41c8/10924_Jungle_View.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt42ef07884eb8f38d/65962aff71a55d4458cd41c8/10924_Jungle_View.jpg"></a></span>
				<br>
				<span>
				<blockquote class='blockquote context'>
					Finally, we adjusted the geometry in the jungle to support these lane adjustments and add a lot of new interest to Dragon and Baron fights. Access to these epic monster fights on live is relatively easy through a major choke point opposite the monster, or minor chokepoints deeper into river or the jungle further out.<br>
					<br>
					The latest adjustments aim to shift away from a single choke point and focus combat around multiple entries, as well as generally overhaul how these fights play out as this space is quite solved and players are very used to this macro. Contesting should be a little bit more equal across sides as it currently tends to advantage the team who can comfortably engage and escape from an objective.<br>
					<br>
					These adjustments as noted above also do help roaming quite a bit as there’s a safe secondary path for both teams that doesn’t involve any jungle movement. All in all, our goal is that junglers should have a harder time ganking, especially early, but shouldn’t feel like they have no more agency over the game.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<header class='header-primary'>
		<h2 id="patch-infernal-terrain-changes">Infernal Terrain Changes</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<blockquote class='blockquote context'>
					Given the terrain changes we’ve introduced in 14.1, we also need to adjust some Drakes so that they’ll play nicely with all of the new walls (or lack thereof). This includes moving a few small walls and brushes for Mountain and Ocean Drake.<br>
					<br>
					However, after we spent so much time building walls across the rift we took a step back to look at Infernal’s map changes again, which led to the following changes:
				</blockquote>
				<ul>
					<li><span class='new'>NEW</span>Infernal Cinders spawn randomly on the map in small groups, with a higher likelihood of spawning towards the losing team. Picking up a naturally spawned Infernal Cinder grants a small burst of movement speed and grants an Infernal Cinder stack.</li>
					<li><span class='new'>NEW</span>Infernal Cinder stacks grant 0.3 Ability Haste per stack. On death, up to 5 Cinders can be maintained, with some of the remainder being dropped on the ground and the rest being destroyed. Cinders dropped from player deaths do not grant the burst of movement speed upon pickup.</li>
					<li><span class='removed'>REMOVED</span>Infernal Rift will no longer destroy any walls on the Rift.</li>
				</ul>
				<br>
				<span>
				<blockquote class='blockquote context'>
					We wanted to experiment with these changes after considering player feedback about the Infernal Rift being the least interesting in terms of gameplay. Our goal is that this will help us create more interesting map states beyond just terrain changes like the current Hextech and Chemtech. That said, we’ll keep a close eye on how these changes land and how players like them.
				</blockquote>
				</span>
			</div>
		</div>
	</div>
	<header class='header-primary'>
		<h2 id="patch-champions">Champions</h2>
	</header>
	<div class='content-border'>
		<div class="patch-change-block white-stone accent-before">
			<div>
				<a class="reference-link" href="http://leagueoflegends.com/en-pl/champions/hwei/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Hwei.png"></a>
				<h3 class="change-title" id="patch-hwei"><a href="http://www.leagueoflegends.com/en-pl/champions/hwei/">Hwei</a></h3>
				<p class='summary'>Base armor increased.</p>
				<blockquote class='blockquote context'>
					As players are still learning Hwei, we’re giving him a small bump up in power, primarily for the sake of Hwei’s teammates, who are on the receiving end of a fairly low win rate. Long term, we think Hwei is probably in a very good spot or maybe a little too powerful but we’re tuning him for January, not June. We’ll continue to monitor his performance and make adjustments as needed.
				</blockquote>
				<hr class='divider'>
				<h4 class='change-detail-title'>Base Stats</h4>
				<ul>
					<li><strong>Base Armor</strong>: 18 &rArr; 21</li>
				</ul>
			</div>
		</div>
	</div>

	<div class='content-border'>
		<div class="patch-change-block white-stone accent-before">
			<div>
				<a class="reference-link" href="https://www.leagueoflegends.com/en-pl/champions/vel-koz/"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Velkoz.png"></a>
				<h3 class="change-title" id="patch-vel-koz"><a href="https://www.leagueoflegends.com/en-pl/champions/vel-koz/">Vel'Koz</a></h3>
				<p class='summary'>E quality of life adjustments.</p>
				<blockquote class='blockquote context'>
					Following up on some work from the last patch, we have a few additional quality of life buffs for Vel’Koz’s Tectonic Disruption.
				</blockquote>
				<hr class="divider">
				<h4 class="change-detail-title ability-title"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/VelkozE.png">E - Tectonic Disruption</h4>
				<ul>
					<li><strong>Projectile Travel Time</strong>: 0.55 seconds (fixed) &rArr; 0.25-0.55 seconds (based on travel distance</li>
					<li><strong>Not So Fast</strong>: Vel’Koz’s E now creates its circular ability indicator 0.25 seconds after the ability was cast instead of immediately after casting</li>
				</ul>
			</div>
		</div>
	</div>

	<header class='header-primary'>
		<h2 id="patch-jungle-damage-adjustments">Jungle Damage Adjustments</h2>
	</header>
	<div class='content-border'>
		<div class='white-stone accent-before'>
			<div>
				<blockquote class='blockquote context'>
					With the Summoner's Rift map update making ganking generally more difficult, we want to make sure that champions who relied on ganking now have a strong fallback pattern of farming jungle camps. We're adjusting the damage contribution of jungle pets in order to close the gap between very fast clears like Graves or Karthus and slower clears like... pretty much every tank. The percent bonus damage from pets does not work on epic monsters, so a new cap has been added against epic monsters that roughly matches last patch's DPS tuning, since pet DPS is increasing otherwise.<br>
					<br>
					As with all changes like this, it's hard to get a perfect read on every single possible jungler, plus the rest of the patch will certainly shake up champion power levels as well. We'll make sure to revisit these numbers if clears feel bad, but these changes should overall be a buff to mid-game clears for all the champions who were otherwise too slow to participate.
				</blockquote>
				<ul>
					<li><strong>Champion Bonus Damage to Non-Epic Monsters</strong>: 42% &rArr; 25%</li>
					<li><strong>Pet Damage per Second</strong>: 15.5 (+10% bonus AD) (+12% AP) (+20% bonus Armor) (+20% bonus Magic Resistance) (+ 3% bonus Health) true damage &rArr; 20-90 (based on level) (+10% bonus AD) (+12% AP) (+20% bonus Armor) (+20% bonus Magic Resistance) (+ 3% bonus Health) true damage</li>
					<li><span class='new'>NEW</span><strong>Pet Damage per Second Cap vs Epic Monsters</strong>: 16-40 (based on level)</li>
				</ul>
			</div>
		</div>
	</div>

<header class='header-primary'>
	<h2 id="patch-items">Items</h2>
</header>

<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				As of patch 14.1 we are officially retiring Mythic items from League. If you’re curious about why we’re removing Mythic items, I’d recommend checking out this <em>Quick Gameplay Thoughts <a href="https://www.leagueoflegends.com/en-pl/news/dev/quick-gameplay-thoughts-addressing-mythics/">here</a></em> or if you’re more interested in some of the thinking and goals behind the updated item system you can check out one of our recent dev blogs, <em>/Dev: 2024 Item Changes <a href="https://www.leagueoflegends.com/en-pl/news/dev/dev-2024-item-changes/">here</a>!</em><br>
				<br>
				To summarize, our main goal with this update is to reduce the power of items that were previously Mythic by converting them to Legendary which, while making ex-Mythic items less powerful, will allow for each champion’s unique gameplay to shine. Additionally, we want to ensure that each class is properly supported (like having Assassins items be early game skewed or giving mages better gold scaling) and to make each spell cast feel more important to players by lowering the overall amount of Haste items give.<br>
				<br>
				We’ve got a lot of item descriptions to cover below, so see you on the other side! <em>(Note: All Mythic item passives have been removed.)</em>
			</blockquote>
		</div>
	</div>
</div>

<header class='header-primary'>
	<h2 id="patch-mage-items">Mage Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The following items have been removed: Crown of the Shattered Queen, Everfrost, Leeching Leer, Demonic Embrace, and Stopwatch/Perfectly Timed Stopwatch
			</blockquote>
		</div>
	</div>
</div>

<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbebf6114bfcd4ec2/5fa1f06f1f9166620ed88bed/4633_Mage_T4_Riftmaker.png">Riftmaker</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Haunting Guise + Fiendish Codex + 800 gold</li>
				<li>80 Ability Power</li>
				<li>15 Ability Haste</li>
				<li>350 Health</li>
				<li>Void Corruption: For each second in combat with enemy champions, deal 2% bonus damage (max 10%). At maximum strength, gain 10% (melee) / 6% (ranged) Omnivamp.</li>
				<li>Void Infusion: Gain 2% of your bonus health as Ability Power.</li>
				<li>Omnivamp updated with the following: Omnivamp heals you for a percentage of damage you deal, with reduced effect (20% effectiveness) on minions and monsters. Additionally, Omnivamp heals you for the full amount with Pet or AOE damage.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7b72ba31403ef51/6598b851b6f92482b2be2ec4/10924_3118_Malignance.png">Malignance</h4>
			<ul>
				<li>Total Cost: 2800 gold</li>
				<li>Item Recipe: Lost Chapter + Fiendish Codex + 700 gold</li>
				<li>80 Ability Power</li>
				<li>20 Ability Haste</li>
				<li>600 Mana</li>
				<li>Scorn: Gain 20 Ability Haste for your Ultimate.</li>
				<li>Hatefog: Whenever you damage an enemy champion with your Ultimate, burn the ground beneath them for 3 seconds, dealing 60 (+6% AP) magic damage every second and reducing their Magic Resistance by (1 per user level) for as long as they are on the burning ground. <em>(Note: Radius increases based on damage done 250 (+2^(Damage Amount/100)) ; with a maximum radius of 550.)</em></li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt53faa0eab4a4e3d7/6598b8512f46f73f56825a1c/10924_6655_LudensCompanion.png">Luden’s Companion</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Lost Chapter + Hextech Alternator + 700 gold</li>
				<li>90 Ability Power</li>
				<li>20 Ability Haste</li>
				<li>600 Mana</li>
				<li>Load: Gain a Shot Charge every 3 seconds, up to a maximum of 6.</li>
				<li>Fire: Damaging abilities consume all Shot charges to deal an additional 40 (+ 8% AP) magic damage to the target and one additional nearby target per charge. If there are insufficient targets in range, for each remaining Shot, repeat the damage on the primary target dealing 35% of the damage.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdcfbecb5864d3304/6598b85113cde925a4201b87/10924_4646_Stormsurge.png">Stormsurge</h4>
			<ul>
				<li>Total Cost: 2900 gold</li>
				<li>Item Recipe: Hextech Alternator + Aether Wisp + 950 gold</li>
				<li>100 Ability Power</li>
				<li>10 Magic Penetration</li>
				<li>5% Movement Speed</li>
				<li>Passive - Stormraider: Dealing 35% of a champion's maximum health within 3 seconds applies Stormsurge to them and grants the user 25% movement speed for 2 seconds. 30 second cooldown.</li>
				<li>Passive - Stormsurge: After 2 seconds, Stormsurge strikes the target with lightning, dealing 120-260 (based on level) (+ 40% AP) (melee) / 90-195 (+ 30% AP) (ranged) magic damage to them. If they die to the lightning or before the lightning strikes, it detonates immediately in a large area around them and you gain 30 gold.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte3f4b4ef9eea2be3/6598b8519fa6cfd1ee289b6f/10924_3152_HextechRocketBelt.png">Hextech Rocketbelt</h4>
			<ul>
				<li>Total Cost: 2500 gold</li>
				<li>Item Recipe: Hextech Alternator + Kindlegem + 600 gold</li>
				<li>60 Ability Power</li>
				<li>300 Health</li>
				<li>15 Ability Haste</li>
				<li>Active - Supersonic: Dash in a target direction, unleashing an arc of magic missiles that deal 175 (+15% AP) magic damage. 40 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>

<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt56f750fc9a2179bb/64001807e35cc90ebcbd2657/4629_Mage_T3_CosmicDrive.png">Cosmic Drive</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Kindlegem + Aether Wisp + Fiendish Codex + 450 gold</li>
				<li>80 Ability Power</li>
				<li>250 Health</li>
				<li>25 Ability Haste</li>
				<li>5% Movement Speed</li>
				<li>Unique Passive - Spelldance: Damaging an enemy champion with an Ability grants 25-60 (based on level) movement speed.</li>
			</ul>
		</div>
	</div>
</div>

<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc657fa3e642039b3/6598b852c4b62080c0fb8ac9/10924_HauntingGuise.png">Haunting Guise</h4>
			<ul>
				<li>Total Cost: 1300 gold</li>
				<li>Item Recipe: Amplifying Tome + Ruby Crystal + 500 gold</li>
				<li>35 Ability Power</li>
				<li>200 Health</li>
				<li>Passive - Madness: For each second in combat with enemy champions, deal 2% bonus damage (up to a maximum of 6%).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc9358614a1748172/6598b8522d26121a7ee76344/10924_3145_HextechAlternator.png">Hextech Alternator</h4>
			<ul>
				<li>Total Cost: 1100 gold</li>
				<li>Item Recipe: Amplifying Tome + Amplifying Tome + 300 gold</li>
				<li>50 Ability Power</li>
				<li>Passive - Revved: Damaging a champion deals an additional 50-125 (based on level) magic damage. 40 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltae69229d0909ffa0/6598b851b17790467fd03b07/10924_6653_LiandrysTorment.png">Liandry’s Torment</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Haunting Guise + Blasting Wand + 850 gold</li>
				<li>90 Ability Power</li>
				<li>300 Health</li>
				<li>Passive - Torment: Dealing damage with abilities causes enemies to burn for 2% maximum health magic damage per second for 3 seconds.</li>
				<li>Passive - Suffering: For each second in combat with enemy champions, gain 2% bonus damage (up to a max at 6% bonus damage).</li>
				<li>Damage Cap to Monsters per Second: 100 &rArr; 50</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt17d83e14479353ef/6598b85ac4b620c0b7fb8acd/10924_HorizonFocus.png">Horizon Focus</h4>
			<ul>
				<li>Total Cost: 2700 gold</li>
				<li>Item Recipe: Hextech Alternator + Fiendish Codex + 700 gold</li>
				<li>90 Ability Power</li>
				<li>20 Ability Haste</li>
				<li>Passive - Hypershot: When you deal damage with Abilities to champions at 700 range or greater, reveal them for 6 seconds. Deal 10% increased damage to enemies revealed by Hypershot.</li>
				<li>Passive - Focus: When revealing an enemy with Hypershot, reveal all other enemy champions within 1200 range of them for 2 seconds. 30 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaaf0dfbd76875c38/6598b85a1c5d7c2bf80f3dfe/10924_SeekersArmguard.png">Seeker’s Armguard</h4>
			<ul>
				<li>Total Cost: 1600 gold</li>
				<li>Item Recipe: Amplifying Tome + Amplifying Tome + Cloth Armor + 500 gold</li>
				<li>45 Ability Power</li>
				<li>25 Armor</li>
				<li>Active - Stasis: Use one time only to become Invulnerable and Untargetable for 2.5 seconds. The user is prevented from taking any other actions during this time (transforms into Shattered Armguard on use).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blted72012cfc6736e4/6598b85a90dcf26eec6484ed/10924_3137_Cryptbloom.png">Cryptbloom</h4>
			<ul>
				<li>Total Cost: 2850 gold</li>
				<li>Item Recipe: Blighting Jewel + Fiendish Codex + 850 gold</li>
				<li>60 Ability Power</li>
				<li>10 Ability Haste</li>
				<li>30% Magic Penetration</li>
				<li>Passive - Life From Death: Whenever you get a takedown on an enemy champion within 3 seconds of damaging them, create a healing nova on their location that heals allies for 50 (+50% AP). 60 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt19b701119a5baf59/6598b85a9fa6cf5865289b73/10924_Shadowflame.png">Shadowflame</h4>
			<ul>
				<li>Total Cost: 3200 gold</li>
				<li>Item Recipe: Needlessly Large Rod + Hextech Alternator + 850 gold</li>
				<li>120 Ability Power</li>
				<li>10 Magic Penetration</li>
				<li>Passive - Cinderbloom: Magic damage and true damage critically strikes enemies below 35% health, dealing 20% increased damage (increased to 30% increased damage for damage over time and pet effects).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte5680463a192e98c/6598bdb814672fcf996fad4b/10924_AmplifyingTome.png">Amplifying Tome</h4>
			<ul>
				<li>Cost: 435 &rArr; 400 gold</li>
				<li>Ability Power: 20 &rArr; 20 (unchanged)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte462ac936cfb3684/6598b85a7d6d2ea305b8eaf1/10924_BlastingWand.png">Blasting Wand</h4>
			<ul>
				<li>Cost: 850 gold (unchanged)</li>
				<li>Ability Power: 40 &rArr; 45</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf57e3386cadd79cd/6598b85a71a55dd9e5cd4d25/10924_NeedlesslyLargeRod.png">Needlessly Large Rod</h4>
			<ul>
				<li>Cost: 1250 gold (unchanged)</li>
				<li>Ability Power: 60 &rArr; 70</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt558172f4254805ab/6598b85a1a8166418db0b529/10924_ZhonyasHourglass.png">Zhonya’s Hourglass</h4>
			<ul>
				<li>Cost: 3000 &rArr; 3250 gold</li>
				<li>Item Recipe: Needlessly Large Rod + Seeker's Armguard + 400 gold</li>
				<li>Ability Power: 80 &rArr; 120</li>
				<li>Armor: 45 &rArr; 50</li>
				<li>Ability Haste: 15 &rArr; 0</li>
				<li>Unique Passive - Stasis: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt55303f7cbca4dcf8/6598b86333550e3e25d5d9a5/10924_BansheesVeil.png">Banshee’s Veil</h4>
			<ul>
				<li>Cost: 2600 &rArr; 3100 gold</li>
				<li>Item Recipe: Needlessly Large Rod + Verdant Barrier + 50 gold</li>
				<li>Ability Power: 80 &rArr; 120</li>
				<li>Magic Resistance: 45 &rArr; 50</li>
				<li>Ability Haste: 10 &rArr; 0</li>
				<li>Passive - Annul: Grants a Spell Shield that blocks the next enemy Ability. 30 second cooldown. Cooldown is restarted when damage is taken from champions.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte5dffac56d7f3539/6598b863c11c0fe39bcf90ea/10924_VerdantBarrier.png">Verdant Barrier</h4>
			<ul>
				<li>Total Cost: 1000 &rArr; 1800 gold</li>
				<li>Item Recipe: Amplifying Tome + Amplifying Tome + Null-Magic Mantle + 550 gold</li>
				<li>Ability Power: 20 &rArr; 40</li>
				<li>Magic Resistance: 25 &rArr; 30</li>
				<li>Passive - Annul: Grants a Spell Shield that blocks the next enemy Ability. 60 second cooldown. Cooldown is restarted when damage is taken from champions.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6a60bf50dfa31157/6598be881c5d7ca16f0f3e08/10924_ArchangelsStaff.png">Archangel’s Staff</h4>
			<ul>
				<li>Total Cost: 3000 gold (unchanged)</li>
				<li>Item Recipe: Needlessly Large Rod + Kindlegem + Tear of the Goddess + 550 gold &rArr; Lost Chapter + Fiendish Codex + Tear of the Goddess + 500 gold</li>
				<li>Ability Power: 70 &rArr; 80</li>
				<li>20 Ability Haste: 10 &rArr; 20</li>
				<li>Mana 500 &rArr; 600</li>
				<li>Passive - Awe: Gain Ability Power equal to 1% bonus Mana</li>
				<li>Passive - Mana Charge: Strike a target with an Ability to consume a charge and gain 5 mana, doubled if the target is a champion. Grants a maximum of 860 mana at which point this item transforms into Seraph's Embrace. Gain a new Mana Charge every 8 seconds (maximum of 5 charges).</li>
				<li>This item transforms into Seraph’s Embrace at 360 bonus mana.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd524f3038bca3e3e/6598b863c4b620346ffb8ad1/10924_SeraphsEmbrace.png">Seraph’s Embrace</h4>
			<ul>
				<li>Ability Power: 70 &rArr; 80</li>
				<li>Ability Haste: 10 &rArr; 20</li>
				<li>Mana: 860 &rArr; 1000</li>
				<li><span class='removed'>REMOVED</span>Health: 200 &rArr; 0</li>
				<li>Passive - Awe: Gain Ability Power equal to 2% bonus Mana.</li>
				<li>Passive - Lifeline: Upon taking damage that would reduce your Health below 30%, gain a 250 (+20% current mana) shield for 3 seconds. 90 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt161bc1cd4149e642/6598b863c4b62049bbfb8ad5/10924_RabadonsDeathcap.png">Rabadon’s Deathcap</h4>
			<ul>
				<li>Total Cost: 3600 gold (unchanged)</li>
				<li>Item Recipe: Needlessly Large Rod + Needlessly Large Rod + 1100 gold (unchanged)</li>
				<li>Ability Power: 120 &rArr; 140</li>
				<li>Unique Passive - Magical Opus: Increase your Ability Power by 40% &rArr; Increase your Ability Power by 35%</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt79195dd2864030ee/6598b863254eff0879747d91/10924_Void_Staff.png">Void Staff</h4>
			<ul>
				<li>Total Cost: 2800 &rArr; 3000 gold</li>
				<li>Item Recipe: Blighting Jewel + Blasting Wand + 850 gold &rArr; Blighting Jewel + Blasting Wand + 1050 gold</li>
				<li>Ability Power: 65 &rArr; 80</li>
				<li>Magic Penetration: 40% (unchanged)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d9dee9f402b7ab0/6598b86414672f18346fad45/10924_RodofAges.png">Rod of Ages</h4>
			<ul>
				<li>Total Cost: 2800 &rArr; 2600 gold</li>
				<li>Item Recipe: Blasting Wand + Catalyst of the Aeons + Amplifying Tome + 215 gold &rArr; Blasting Wand + Catalyst of the Aeons + 550 gold</li>
				<li>Ability Power: 60 &rArr; 50</li>
				<li>Health: 400 &rArr; 350</li>
				<li>Mana: 400 &rArr; 300</li>
				<li>This item gains 20 Health, 20 Mana, and 4 Ability Power every 60 seconds up to 10 times, for a maximum of 200 Health, 200 Mana, and 40 Ability Power. Upon reaching maximum stacks, gain a level.</li>
				<li>Passive - Eternity: Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second</li>
				<li><span class='removed'>REMOVED</span>Removed: For every 200 healing or mana restored with Eternity, gain 35% bonus movement speed that decays over 3 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt01ae9f610f8efcd8/6598b8633ea3617fc65779c7/10924_CatalystofAeons.png">Catalyst of Aeons</h4>
			<ul>
				<li>Total Cost: 1300 gold</li>
				<li>Item Recipe: Ruby Crystal + Sapphire Crystal + 550 gold</li>
				<li>Health: 300 &rArr; 350</li>
				<li>Mana: 300 &rArr; 300</li>
				<li>Passive - Eternity: Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf3e47a90d41846a9/6598b876b782f0efa5586688/10924_3100_LichBane.png">Lich Bane</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 3100 gold</li>
				<li>Item Recipe: Sheen +Aether Wisp + Fiendish Codex + 550 gold &rArr; Sheen + Hextech Alternator + Aether Wisp + 150 gold</li>
				<li>Ability Power: 85 &rArr; 100</li>
				<li>Ability Haste: 15 (unchanged)</li>
				<li>Bonus Movement Speed: 8% (unchanged)</li>
				<li>Unique Passive - Spellblade: After using an Ability, your next Attack is enhanced with an additional 75% base AD (+ 50% AP) magic damage &rArr; After using an Ability, your next Attack is enhanced with an additional 100% base AD + 50% AP magic damage.</li>
				<li><span class='new'>NEW</span>Spellblade now grants 50% Attack Speed while available.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt43509e24e721b791/6598b876b782f0213c58668c/10924_NashorsTooth.png">Nashor’s Tooth</h4>
			<ul>
				<li>Total Cost: 3200 &rArr; 3000 gold</li>
				<li>Item Recipe: Recurve Bow + Blasting Wand + Fiendish Codex + 750 gold &rArr; Recurve Bow + Blasting Wand + Fiendish Codex + 550 gold</li>
				<li>Ability Power: 100 &rArr; 90</li>
				<li>Ability Haste: 15 (unchanged)</li>
				<li>Attack Speed: 50% (unchanged)</li>
				<li>Unique Passive - Icathian Bite: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1b8ca4e1b1c11670/6598b8767d6d2ea7f6b8eaf5/10924_Morellonomicon.png">Morellonomicon</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 2200 gold</li>
				<li>Item Recipe: Oblivion Orb + Hextech Alternator + Amplifying Tome + 715 gold &rArr; Oblivion Orb + Fiendish Codex + 500 gold</li>
				<li>Ability Power: 90 (unchanged)</li>
				<li><span class='new'>NEW</span>Ability Haste: 15</li>
				<li><span class='removed'>REMOVED</span>Magic Penetration: 10 &rArr; 0</li>
				<li><span class='removed'>REMOVED</span>Health: 200 &rArr; 0</li>
				<li>Unique Passive - Affliction: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-fighter-and-diver-items">Fighter and Diver Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The following items have been removed: Goredrinker, Divine Sunderer, Silvermere Dawn, and Ironspike Whip
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc2bb64413e2fd3aa/6598b877c11c0fa7b3cf90ee/10924_Hullbreaker.png">Hullbreaker</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Tunneler + Rectrix + Pickaxe + 125 gold</li>
				<li>65 Attack Damage</li>
				<li>350 Health</li>
				<li>5% Movement Speed</li>
				<li>Passive - Skipper: Every fifth basic attack against Champions and Epic Monsters deals 140% (melee) /70% (ranged) base AD (+3.5% maximum health bonus physical damage), increased to 400%/200% (+ 7% maximum health) bonus physical damage against structures.</li>
				<li>Passive - Boarding Party: Nearby allied Siege and Super Minions gain 20-135 (melee, based on level) /10-68 (ranged, based on level) bonus Armor and Magic Resistance.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd76207216ecdecea/6598b876254eff0c51747d95/10924_BladeoftheRuinedKing.png">Blade of the Ruined King</h4>
			<ul>
				<li>Total Cost: 3200 gold</li>
				<li>Item Recipe: Vampiric Scepter + Pickaxe + Recurve Bow + 725 Gold</li>
				<li>40 Attack Damage</li>
				<li>25% Attack Speed</li>
				<li>8% Lifesteal</li>
				<li>Passive: Mist's Edge: Attacks apply an additional 12% (melee) /9% (ranged) enemy current Health physical damage on-hit.</li>
				<li>Passive: Clawing Shadows: Your first basic attack against an enemy champion slows them by 30% for 1 second (15 second cooldown).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt235a829135b9281e/6598b877c4b620b84bfb8ad9/10924_3044_Phage.png">Phage</h4>
			<ul>
				<li>Total Cost: 1100 gold</li>
				<li>Item Recipe: Ruby Crystal + Longsword + 350 Gold</li>
				<li>15 Attack Damage</li>
				<li>200 Health</li>
				<li>Passive: Attacking a unit grants 20 Movement Speed for 2 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf265ab957089c100/6598b877b6f9247869be2ecc/10924_6692_Eclipse.png">Eclipse</h4>
			<ul>
				<li>Total Cost: 2800 gold</li>
				<li>Item Recipe: Pickaxe + Long Sword + Caulfield’s Warhammer + 800 gold</li>
				<li>70 Attack Damage</li>
				<li>15 Ability Haste</li>
				<li>Passive - Ever Rising Moon: Hitting a champion with 2 separate attacks or abilities within 1.5 seconds deals 8%/4% max health bonus physical damage and grants you a 160 (+40% bonus AD) (melee)/ 80 (+20% bonus AD) (ranged) shield for 2 seconds (6 second cooldown).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9cbaf93293f57ca4/6598b877b6f9241039be2ec8/10924_SpearofShojin.png">Spear of Shojin</h4>
			<ul>
				<li>Total Cost: 3100 gold</li>
				<li>Item Recipe: Pickaxe + Kindlegem + Caulfield's Warhammer + 525 Gold</li>
				<li>55 Attack Damage</li>
				<li>300 Health</li>
				<li>20 Ability Haste</li>
				<li>Passive: Your Non-Ultimate spells gain 15 Ability Haste.</li>
				<li>Passive: Spell hits grant stacks. Your spells deal 3% increased damage for each stack. (Maximum of 4 stacks)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc4c39db83a7644d0/6598b87713cde94cc2201b8b/10924_RavenousHydra.png">Ravenous Hydra</h4>
			<ul>
				<li>Total Cost: 3300 gold</li>
				<li>Item Recipe: Tiamat + Caulfield’s Warhammer + Vampiric Scepter + 200 gold</li>
				<li>70 Attack Damage</li>
				<li>20 Ability Haste</li>
				<li>10% Lifesteal</li>
				<li>Active - Ravenous Crescent: Deal 100% total Attack Damage physical damage to nearby enemies within 450 units. This damage applies Lifesteal. 10 second cooldown.</li>
				<li>Passive - Cleave: Attacks deal 40% AD (melee) / 20% AD (ranged) damage to other units within 350 units of the target hit.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt03a54bf0bf84c7cd/6598b8764135c4112656aa53/10924_3748_TitanicHydra.png">Titanic Hydra</h4>
			<ul>
				<li>Total Cost: 3300 gold</li>
				<li>Item Recipe: Tiamat + Tunneller + Ruby Crystal + 600 gold</li>
				<li>55 Attack Damage</li>
				<li>550 Health</li>
				<li>Passive - Colossus: Basic attacks deal 4 +1.5% maximum health (melee)/ 3 +1.125% maximum health (ranged) bonus physical damage on-hit to your target and 40 +3% maximum health (melee)/ 30 +2.25% maximum health (ranged) bonus physical damage to other enemies in a cone on-hit. Cleave's damage also applies to structures.</li>
				<li>Active - Crescent: On your next attack, Cleave will deal 6%(melee)/3%(ranged) maximum Health bonus physical damage to your target and 9%(melee)/4.5%(ranged) maximum Health bonus physical damage for the shockwave.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60b127c97961a397/6598b8811a81669615b0b52d/10924_Tiamat.png">Tiamat</h4>
			<ul>
				<li>Total Cost: 1200 gold</li>
				<li>Item Recipe: Long Sword + Long Sword + 550 gold</li>
				<li>20 Attack Damage</li>
				<li>Passive - Cleave: Attacks deal 40% AD (melee) / 20% AD (ranged) damage to other units within 450 units of the target hit.</li>
				<li>Active - Crescent: Deal 80% physical damage to nearby enemies within 450 units. 10 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt72f15f8b4b684c1e/6598b881c4b6204ac8fb8add/10924_3051_Hearthbound_Axe.png">Hearthbound Axe</h4>
			<ul>
				<li>Total Cost: 1200 gold</li>
				<li>Item Recipe: Dagger + Longsword + Dagger + 250 gold</li>
				<li>25% Attack Speed</li>
				<li>20 Attack Damage</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt87f36f495bcf1212/6598b88190dcf2c1af6484f1/10924_6631_StrideBreaker.png">Stridebreaker</h4>
			<ul>
				<li>Total Cost: 3100 gold</li>
				<li>Item Recipe: Phage + Pickaxe + Dagger + 825 gold</li>
				<li>50 Attack Damage</li>
				<li>20% Attack Speed</li>
				<li>400 Health</li>
				<li>Active - Breaking Shockwave: Slow nearby enemies by 30% and gain 30% bonus Movement Speed per champion hit that decays over 3 seconds. Can move while casting (15 second cooldown).</li>
				<li>Passive - Temper: Dealing physical damage grants 20 bonus Move Speed for 2 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfa377673d4755477/6598b881a8ee436feb19aa55/10924_3073_ExperimentalHexplate.png">Experimental Hexplate</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Tunneler + Noonquiver + 600 gold</li>
				<li>55 Attack Damage</li>
				<li>20% Attack Speed</li>
				<li>300 Health</li>
				<li>Passive: Gain 30 ultimate ability haste.</li>
				<li>Passive: After casting your ultimate, gain 35% attack speed and 15% bonus movement speed for 7 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta6e80c59e1cd8b05/6598b881254eff6685747d99/10924_6610_SunderedSky.png">Sundered Sky</h4>
			<ul>
				<li>Total Cost: 3100 gold</li>
				<li>Item Recipe: Tunneler + Caulfield’s Warhammer + 900 gold</li>
				<li>55 Attack Damage</li>
				<li>300 Health</li>
				<li>15 Ability Haste</li>
				<li>Passive - Lightshield Strike: The first attack against a champion will critically strike and heal for 140% base AD (+6% of missing health).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39091d22c0ce0270/6598b88ab0fbcb042c628ed4/10924_2012_Tunneler.png">Tunneler</h4>
			<ul>
				<li>Total Cost: 1100 gold</li>
				<li>Item Recipe: Long Sword + Ruby Crystal + 350 gold</li>
				<li>15 Attack Damage</li>
				<li>250 Health</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt16533ec0de476ac5/6598b88b71a55da767cd4d29/10924_2019_SteelSigil.png">Steel Sigil</h4>
			<ul>
				<li>Total Cost: 1200 gold</li>
				<li>Item Recipe: Longsword + Cloth Armor + 550 gold</li>
				<li>15 Attack Damage</li>
				<li>30 Armor</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7e76a127087eba1f/6598b88b71a55d248dcd4d2d/10924_3091_WitsEnd.png">Wit’s End</h4>
			<ul>
				<li>Total Cost: 3200 &rArr; 2800 gold</li>
				<li>Item Recipe: Hearthbound Axe + Null-Magic Mantle + Recurve Bow + 950 gold &rArr; Recurve Bow + Negatron Cloak + Dagger + 900 gold</li>
				<li>Attack Speed: 40% &rArr; 55%</li>
				<li>Magic Resist: 40 &rArr; 50</li>
				<li><span class='removed'>REMOVED</span>Attack Damage: 40 &rArr; 0</li>
				<li><span class='new'>NEW</span>Tenacity: 0 &rArr; 20%</li>
				<li>Passive - Fray: Attacks apply 15-80 (based on level) bonus magic damage on-hit and grant the user 20 bonus movement speed for 2 seconds &rArr; Attacks apply 15-80 (based on level) bonus magic damage on-hit</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt868031170a41f935/6598b88bbe5d266dab65aab9/10924_3078_TrinityForce.png">Trinity Force</h4>
			<ul>
				<li>Total Cost: 3333 gold (unchanged)</li>
				<li>Item Recipe: Sheen + Hearthbound Axe + + Kindlegem + 733 gold &rArr; Sheen + Phage + Hearthbound Axe + 33 gold</li>
				<li>Attack Damage: 40 &rArr; 45</li>
				<li>Health: 300 (unchanged)
				<li>Attack Speed: 33% (unchanged)</li>
				<li>Ability Haste: 20 (unchanged)</li>
				<li>Passive - Spellblade: After using an Ability, your next Attack is enhanced with additional 200% base AD physical damage on-hit (1.5 (begins after using the empowered attack) second cooldown).</li>
				<li><span class='new'>NEW</span>Passive - Quicken: Attacking a unit grants 20 Move Speed for 2 seconds.</li>
				<li><span class='removed'>REMOVED</span>Passive - Threefold Strikes: Removed</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5b37208b7f5d349b/6598b88b13cde920f8201b8f/10924_3071_BlackCleaver.png">Black Cleaver</h4>
			<ul>
				<li>Total Cost: 3100 &rArr; 3000 gold</li>
				<li>Item Recipe: Phage + Kindlegem + Long Sword + 850 Gold &rArr; Phage + Kindlegem + Long Sword + 750 Gold</li>
				<li>Health: 400 (unchanged)</li>
				<li>Attack Damage: 50 &rArr; 55</li>
				<li>Ability Haste: 30 &rArr; 20</li>
				<li>Passive - Carve: Dealing physical damage to an enemy champion reduces their armor by 5%, stacking up to 6 times. &rArr; Dealing physical damage to an enemy champion reduces their armor by 4%, stacking up to 6 times.</li>
				<li>Passive - Rage: Attacking a unit grants 20 Move Speed for 2 seconds. <em>(Note: there is no longer a movement speed correlation between Rage and the number of Carve stacks acquired.)</em></li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8780176a6fd713d2/6598b88c7d6d2e45cab8eaf9/10924_3052_SteraksGage.png">Sterak’s Gage</h4>
			<ul>
				<li>Total Cost: 3000 gold (unchanged)</li>
				<li>Item Recipe: Pickaxe + Phage + Ruby Crystal + 625 gold &rArr; Pickaxe+ Tunneler + Ruby Crystal + 625 gold</li>
				<li>Health: 450 &rArr; 400</li>
				<li><span class='new'>NEW</span>Tenacity: 20%</li>
				<li>Passive: Gain bonus Attack Damage equal to 50% base Attack Damage (unchanged)</li>
				<li>Passive: Upon taking damage that would reduce you below 30% health, gain a 80% Bonus Health shield, decaying over 4.5 seconds and gain 25% size and 30% tenacity for 8 seconds &rArr; Upon taking damage that would reduce you below 30% health, gain a 80% Bonus Health shield, decaying over 4.5 seconds and gain 10% size for 8 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-tank-and-support-tank-items">Tank and Support Tank Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The following items have been removed: Turbo Chemtank, Radiant Virtue, Gargoyle’s Stoneplate, Aegis of the Legion, Evenshroud, Radiant Virtue, and Lifewell Pendant
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt18e8d00a2ee69d83/6598b89433550e6a5ed5d9a9/10924_6664_HollowRadiance.png">Hollow Radiance</h4>
			<ul>
				<li>Total Cost: 2800 gold</li>
				<li>Item Recipe: Bami's Cinder + Spectre's Cowl + 550 gold</li>
				<li>600 Health</li>
				<li>40 Magic Resistance</li>
				<li>100% Base Health Regeneration</li>
				<li>Passive - Immolate: Taking or dealing damage causes you to begin dealing 10 (+1.75% bonus health) magic damage per second to nearby enemies (increased by 25% against minions) for 3 seconds. Taking or dealing damage refreshes the duration of this effect.</li>
				<li>Passive - Desolate: Killing an enemy (non-ward, non-structure) deals 20 (+3.5% bonus health) magic damage in an area around them.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0ea87797f24144e/6598b88c90dcf20e6e6484f5/10924_2502_UnendingDespair.png">Unending Despair</h4>
			<ul>
				<li>Total Cost: 2800 gold</li>
				<li>Item Recipe: Chain Vest + Kindlegem + Ruby Crystal + 800 gold</li>
				<li>400 Health</li>
				<li>55 Armor</li>
				<li>10 Ability Haste</li>
				<li>Passive - Anguish: While in combat with champions, every 7 seconds, deal 30-50 (based on level) (+3% bonus health) magic damage to nearby enemy champions within 650 units, healing for 250% of the damage dealt.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt90434f1c8fc3405d/6598b88b9fa6cf90f6289b77/10924_2504_KaenicRookern.png">Kaenic Rookern</h4>
			<ul>
				<li>Total Cost: 2900 gold</li>
				<li>Item Recipe: Spectre's Cowl + Negatron Cloak + 750 gold</li>
				<li>400 Health</li>
				<li>80 Magic Resistance</li>
				<li>150% Base Health Regeneration</li>
				<li>Passive - Magebane: After not taking damage from champions for 12 seconds, gain a magic shield for 20% of your maximum health.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltacf13441476402a6/636c6feb173c53758cc79113/111522_Patch_12_22_Notes_Heartsteel.png">Heartsteel</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Giant's Belt + Crystalline Bracer + Ruby Crystal + 900 gold</li>
				<li>800 Health</li>
				<li>200% Base Health Regeneration</li>
				<li>Passive - Colossal Consumption: Charge up a powerful attack against a champion over 3 seconds while within 700 range of them. The charged attack deals 100 (+10% of health from Items) bonus physical damage, and grants you 12% of that value as permanent maximum health. 30 second cooldown per target.</li>
				<li>Passive - Goliath: For each 100 maximum health, gain 3% increased size, up to 30%.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8a7bc8dc207abd3c/6598b88ca8ee43562219aa59/10924_3002_Trailblazer.png">Trailblazer (formerly known as Go Fast with Friends)</h4>
			<ul>
				<li>Total Cost: 2400 gold</li>
				<li>Item Recipe: Winged Moonplate + Chain Vest + 700 gold</li>
				<li>250 Health</li>
				<li>40 Armor</li>
				<li>5% Bonus Movement Speed</li>
				<li>Passive - Lead the Way: While moving, build up to 20 bonus Move Speed. At maximum stacks, leave a trail that raises allied champions' movespeed by 15% of your Movement Speed. Your next Attack discharges built up Move Speed; for Melee champions at top speed, the Attack also Slows the target by 50% for 1 second.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9b2671745fb77509/6598b88bb177907819d03b0b/10924_3050_ZekesConvergence.png">Zeke’s Convergence</h4>
			<ul>
				<li>Total Cost: 2200 gold</li>
				<li>Item Recipe: Kindlegem + Glacial Shroud + 500 gold</li>
				<li>200 Health</li>
				<li>250 Mana</li>
				<li>30 Armor</li>
				<li>20 Ability Haste</li>
				<li>Passive - Convergence: When you cast your Ultimate, gain an ice storm around yourself for 5 seconds. The storm deals 50 magic damage per second and slows enemies inside for 30%. (45 second cooldown)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltac5fb97756a7e469/6598b894bb2e10255c0121ad/10924_LocketoftheSolari.png">Locket of the Iron Solari</h4>
			<ul>
				<li>Total Cost: 2200 gold</li>
				<li>Item Recipe: Lifewell Pendant + Null-Magic Mantle + 800g &rArr; Kindlegem + Cloth Armor + Null-Magic Mantle + 650 gold</li>
				<li>200 Health</li>
				<li>30 Magic Resistance</li>
				<li>30 Armor</li>
				<li>Ability Haste: 20 &rArr; 10</li>
				<li>Active - Devotion: Grant nearby allies a 200 - 360 (ally level scaling) Shield, decaying over 2.5 seconds (90 second cooldown).</li>
				<li><span class='removed'>REMOVED</span>Passive - Consecrate: Passively grant nearby allies armor and magic resistance</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt05a923033c95da57/6598b894c3fb273c9819eeb3/10924_3083_Warmogs.png">Warmog’s Armor</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 3100 gold</li>
				<li>Item Recipe: Giant's Belt + Crystalline Bracer + Kindlegem + 500 gold &rArr; Giant's Belt + Crystalline Bracer + Winged Moonplate + 600 gold</li>
				<li>Health: 800 &rArr; 750</li>
				<li>Base Health Regeneration: 200% (unchanged)</li>
				<li><span class='new'>NEW</span>Movement Speed: 5%</li>
				<li><span class='removed'>REMOVED</span>Ability Haste: 10 &rArr; 0</li>
				<li>Passive - Warmog's Heart: If you have at least 1100 bonus health, restore health per second if damage hasn't been taken within 6 seconds (3 seconds for non-Champions) &rArr; If you have at least 1300 bonus health, restore health per second and gain 10% Movement Speed if damage hasn't been taken within 6 seconds (3 seconds for non-Champions)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte7d57bc022de7d07/636c6feb9445c550cc51a9f8/111522_Patch_12_22_Notes_Jak_Sho.png">Jak’Sho the Protean</h4>
			<ul>
				<li>Total Cost: 3200 gold</li>
				<li>Item Recipe: Aegis of the Legion + Kindlegem + Ruby Crystal + 800 gold &rArr; Chain Vest + Negatron Cloak + Ruby Crystal + 1100 gold</li>
				<li>Health: 400 &rArr; 300</li>
				<li>Armor: 30 &rArr; 50</li>
				<li>Magic Resistance: 30 &rArr; 50</li>
				<li><span class='removed'>REMOVED</span>Ability Haste: 20 &rArr; 0</li>
				<li>Passive - Voidborn Resilience: For each second in champion combat, gain a stack, up to a maximum of 5 stacks. At maximum stacks become empowered, increasing your bonus resists by 30% until end of combat.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0dbedac55ad2633a/6598b894a2c41f3876db231f/10924_3742_DeadmansPlate.png">Dead Man’s Plate</h4>
			<ul>
				<li>Total Cost: 2900 gold (unchanged)</li>
				<li>Item Recipe: Winged Moonplate + Chain Vest + Ruby Crystal + 1100 gold (unchanged)</li>
				<li>Health: 300 (unchanged)</li>
				<li>Armor: 45 (unchanged)</li>
				<li>Movement Speed: 5% (unchanged)</li>
				<li>Passive - Shipwrecker: While moving, build up to 40 bonus Move Speed. Your next Attack discharges built up Move Speed to deal up to 40 (+100% base AD) bonus physical damage. At maximum stacks, the target is also slowed by 50% &rArr; While moving, build up to 40 bonus Move Speed. Your next Attack discharges built up Move Speed to deal up to 40 (+100% base AD) bonus physical damage</li>
				<li><span class='new'>NEW</span>Passive - Unsinkable: The strength of movement slowing effects on you is reduced by 25%.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4745403753883a4f/6598b894be5d26e64c65aabd/10924_3143_RanduinsOmen.png">Randuin’s Omen</h4>
			<ul>
				<li>Total Cost: 2700 gold (unchanged)</li>
				<li>Item Recipe: Warden's Mail + Giant's Belt + 800 gold (unchanged)</li>
				<li>Health: 400 (unchanged)</li>
				<li>Armor: 60 &rArr; 55</li>
				<li>Passive - Rock Solid: Every first incoming instance of post-mitigation basic attack damage is reduced by 5 (+3.5 per 1000 maximum health), maximum 20% reduction per attack. (unchanged)</li>
				<li>Passive - Critical Resilience: Critical Strikes deal 25% less damage to you &rArr; Critical Strikes deal 30% less damage to you.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltca4ec4bec364eca3/6598b89dd082f7389f2613c1/10924_4401_ForceOfNature.png">Force of Nature</h4>
			<ul>
				<li>Total Cost: 2800 gold (unchanged)</li>
				<li>Item Recipe: Negatron Cloak + Winged Moonplate + Ruby Crystal + 700 gold (unchanged)</li>
				<li>Health: 400 (unchanged)</li>
				<li>Magic Resistance: 60 &rArr; 55</li>
				<li>Movement Speed: 5% (unchanged)</li>
				<li>Passive - Absorb: Taking magic damage from enemy Champions grants a stack of Steadfast (up to a maximum of 8) for 7 seconds. Enemy Immobilizing effects grant an additional 2 stacks. One spell can add a new stack of Steadfast every 1 second.</li>
				<li>Dissipate: While at 8 stacks of Steadfast, gain 70 Magic Resist and 10% increased Movement Speed.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8ce99daeb16e3720/6598b89db782f01015586690/10924_FrostfireGauntlet.png">Iceborn Gauntlet</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 2600 gold</li>
				<li>Item Recipe: Sheen + Kindlegem + Chain Vest + 700 gold &rArr; Sheen + Ruby Crystal + Chain Vest + 600 gold</li>
				<li>Health: 400 &rArr; 300</li>
				<li>Armor: 50 (unchanged)</li>
				<li>Ability Haste: 20 &rArr; 15</li>
				<li>Passive - Spellblade: After using an ability, your next attack is enhanced with an additional 100% base Attack Damage physical damage and creates a frost field for 2.5 seconds. Enemies that move across the field are also Slowed by 15% (+4% per 1000 health) [melee] / 10% (+2% per 1000 health) [ranged]. Your primary target is slowed for double the amount and has their damage against you reduced by 10% for 2.5 seconds (1.5 (begins after using the empowered attack) second cooldown) &rArr; After using an ability, your next attack is enhanced with an additional 100% base Attack Damage physical damage and creates a frost field for 2 seconds. Enemies that move across the field are also Slowed by 20% (+ 4% per 1000 health) [melee] / 10% (+ 2% per 1000 health) [ranged]</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt53bef88a981400fb/6598b89dbb2e1021600121b1/10924_WintersApproach.png">Winter’s Approach / Fimbulwinter</h4>
			<ul>
				<li>Total Cost: 2600 &rArr; 2400 gold</li>
				<li>All other stats unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9533657a70c6aaf2/6598b89dbe5d26c28465aac1/10924_3068_SunfireAegis.png">Sunfire Aegis</h4>
			<ul>
				<li>Total Cost: 2700 gold (unchanged)</li>
				<li>Item Recipe: Bami's Cinder + Chain Vest + 900 gold (unchanged)</li>
				<li>Health: 500 &rArr; 450</li>
				<li>Armor: 50 (unchanged)</li>
				<li>Unique Passive - Immolate: Taking or dealing damage causes you to begin dealing 15 (+ 1.75% bonus health) magic damage per second to nearby enemies (increased by 25% against minions) for 3 seconds. Taking or dealing damage refreshes the duration of this effect. Damaging champions or epic jungle monsters with this effect adds a stack, increasing subsequent Immolate damage by 10% for 5 seconds, stacking up to 6 times for a total 60% increase &rArr; Taking or dealing damage causes you to begin dealing 12 (+ 1.75% bonus health) magic damage per second to nearby enemies (increased by 25% against minions) for 3 seconds. Taking or dealing damage refreshes the duration of this effect. Damaging champions or epic jungle monsters with this effect adds a stack, increasing subsequent Immolate damage by 10% for 5 seconds, stacking up to 6 times for a total 60% increase</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt669235c20215fda3/6598b89d1a81662e75b0b531/10924_3109_KnightsVow.png">Knight’s Vow</h4>
			<ul>
				<li>Total Cost: 2200 gold (unchanged)</li>
				<li>Item Recipe: Lifewell Pendant + Crystalline Bracer + 350 gold &rArr; Kindlegem + Chain Vest + 600 gold</li>
				<li>Health: 350 &rArr; 300</li>
				<li>Armor: 25 &rArr; 45</li>
				<li>Ability Haste: 15 (unchanged)</li>
				<li><span class='removed'>REMOVED</span>Base Health Regeneration: 125% &rArr; 0</li>
				<li>Passive/Active: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteefc5ab58c07dc07/6598b89db0fbcb440b628ed8/10924_3110_FrozenHeart.png">Frozen Heart</h4>
			<ul>
				<li>Total Cost: 2700 &rArr; 2300</li>
				<li>Item Recipe: Warden’s Mail + Glacial Buckler + 400 gold</li>
				<li>Armor: 90 &rArr; 70</li>
				<li>Ability Haste: 20 (unchanged)</li>
				<li>Mana: 400 (unchanged)</li>
				<li>Unique Passive - Rock Solid and Winter’s Caress: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-assassin-items">Assassin Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				In previous Seasons AD Assassins tended to purchase one or two Lethality items before pivoting into other options in the AD system, particularly fighter items. We believe Assassins are at their best when they're highly lethal but highly fragile anti-carry, and when they have fighter builds they tend to not be satisfying their own fantasies on top of being more frustrating and harder to deal with for enemies.<br>
				<br>
				Our goals with these changes are to remove some of the more potent defensive tools assassins were accessing (like Duskblade or Eclipse) and open them up to stronger snowballing through the Assassin system with the lethality purchases. We've also removed their ability to stack Black Cleaver and Last Whisper items so that Assassins don't end up as premium killers of bruisers and reasonably effective against tanks as we believe armor should be an effective purchase into Assassins.
			</blockquote>
			<ul>
				<li>Lethality has been adjusted to be 1 Armor Penetration per 1 point of Lethality rather than 0.6-1 Armor Penetration per Lethality based on level</li>
				<li>The following items have been removed: Duskblade of Draktharr and Prowler’s Claw</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4fe00551ea753cc5/6598b89db05b9e1152d73f1c/10924_6699_VoltaicCyclosword.png">Voltaic Cyclosword</h4>
			<ul>
				<li>Total Cost: 2900 gold</li>
				<li>Item Recipe: The Brutalizer + Kircheis Shard + 863 gold</li>
				<li>55 Attack Damage</li>
				<li>18 Lethality</li>
				<li>15 Ability Haste</li>
				<li>Passive - Energized: Moving and Attacking will generate an Energized Attack. Dashes and Stealth stack Energized 75% faster.</li>
				<li>Passive - Firmament: Your Energized Attack applies 100 bonus physical damage and Slows enemies for 99% for 0.75 seconds (20% for ranged users).</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt12d6ac4bb324ff9b/6598b89c254eff354a747d9d/10924_6698_ProfaneHydra.png">Profane Hydra</h4>
			<ul>
				<li>Total Cost: 3400 gold</li>
				<li>Item Recipe: Tiamat + The Brutalizer + 813 gold</li>
				<li>60 Attack Damage</li>
				<li>18 Lethality</li>
				<li>20 Ability Haste</li>
				<li>Active - Heretical Slash: Deal 80% total Attack Damage physical damage to nearby enemies. This damage increases to 120% total Attack Damage physical damage to enemies below 30% health.</li>
				<li>Passive - Cleave: Attacks deal 40% AD (melee) / 20% AD (ranged) damage to other units within 450 units of the target hit.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b4d2ecd5466133b/6598b8a77d6d2e10dfb8eafd/10924_6697_Hubris.png">Hubris</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Serrated Dirk + Caulfield's Warhammer + 900 gold</li>
				<li>60 Attack Damage</li>
				<li>18 Lethality</li>
				<li>15 Ability Haste</li>
				<li>Passive - Ego: When you kill an enemy champion you are granted a statue of yourself, if you already have a statue this statue upgrades.</li>
				<li>Passive - Eminence: When a champion that you have damaged within the last 3 seconds dies, gain 10 (+1 per rank of Statue) Attack Damage for 60 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670a6f263599c463/6598b8a70543c564978f36a9/10924_6690_Opportunity.png">Opportunity</h4>
			<ul>
				<li>Total Cost: 2700 gold</li>
				<li>Item Recipe: Serrated Dirk + Rectrix + 800 gold</li>
				<li>55 Attack Damage</li>
				<li>18 Lethality</li>
				<li>5% Movement Speed</li>
				<li>Passive - Preparation: After being out of combat with Champions for 8 seconds gain 5-10 Lethality (based on level). This Lethality lasts for 3 seconds after dealing damage to champions.</li>
				<li>Passive - Extraction: If a champion dies within 3 seconds of damaging them, gain 150 decaying movement speed for 1.5 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt92df44e8a9f66e6c/6598b8a733550e7d0fd5d9ad/10924_6701_Rectrix.png">Rectrix</h4>
			<ul>
				<li>Total Cost: 900 gold</li>
				<li>Item Recipe: Long Sword + 550 gold</li>
				<li>20 Attack Damage</li>
				<li>4% Movement Speed</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2a0958c5c6f3d26b/6598b8a7bb2e1065660121b5/10924_2020_TheBrutalizer.png">The Brutalizer</h4>
			<ul>
				<li>Total Cost: 1337 gold</li>
				<li>Item Recipe: Glowing Mote + Pickaxe + 212 gold</li>
				<li>25 Attack Damage</li>
				<li>10 Ability Haste</li>
				<li>8 Lethality</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt320f73e237551c57/6598b8a7dc7662abd87ebfe7/10924_6694_SeryldasGrudge.png">Serylda’s Grudge</h4>
			<ul>
				<li>Total Cost: 3200 gold</li>
				<li>Item Recipe: Brutalizer + Last Whisper + 413 gold</li>
				<li>45 Attack Damage</li>
				<li>15 Lethality</li>
				<li>15 Ability Haste</li>
				<li>Passive - Rancor: Gain 20 (+11% of Lethality) Armor Penetration</li>
				<li>Passive - Bitter Cold: Damaging abilities slow enemies with 50% or less of their maximum health by 30% for 1 second</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf9ac4d522e04d01/6598b8a8dd0067dbe6207f3a/10924_3134_SerratedDirk.png">Serrated Dirk</h4>
			<ul>
				<li>Total Cost: 1100 &rArr; 1000</li>
				<li>Item Recipe: Long Sword + Long Sword + 400 gold &rArr; Long Sword + Long Sword + 300g</li>
				<li>Attack Damage: 30 &rArr; 25</li>
				<li>Unique Passive - Gouge: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7ba210f65b38d976/6598b8a8be5d26ec1465aac5/10924_3142_YoumuusGhostblade.png">Youmuu’s Ghostblade</h4>
			<ul>
				<li>Total Cost: 3100 &rArr; 2700 gold</li>
				<li>Item Recipe: Serrated Dirk + Caulfield's Warhammer + 900 gold &rArr; Serrated Dirk + Rectrix + 1100 gold</li>
				<li>Attack Damage: 60 (unchanged)</li>
				<li>Lethality: 18 (unchanged)</li>
				<li><span class='removed'>REMOVED</span>Ability Haste: 15 &rArr; 0</li>
				<li>Active - Wraith Step: Gain 25% movement speed and ghosting for 6 seconds &rArr; Gain 20% movement speed and ghosting for 6 seconds</li>
				<li>Passive - Haunt: Gain 40 Move Speed while out of combat <em>(Note: the Spectral Shard mechanic has been removed</em></li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5c2a78a741d870e1/6598b8a8c11c0f2f52cf90f2/10924_AxiomArc.png">Axiom Arc</h4>
			<ul>
				<li>Total Cost: 3000 (unchanged)</li>
				<li>Item Recipe: Serrated Dirk + Caulfield's Warhammer + 800 gold &rArr; The Brutalizer + Caulfield's Warhammer + 563g</li>
				<li>Attack Damage: 55 (unchanged)</li>
				<li>Lethality: 18 (unchanged)</li>
				<li>Ability Haste: 25 (unchanged)</li>
				<li>Passive - Flux: Whenever a Champion dies within 3 seconds of you having damaged them, refund 10 (+0.4% per 1 Lethality) of your Ultimate Ability's total cooldown &rArr; Whenever a Champion dies within 3 seconds of you having damaged them, refund 10 (+30% Lethality) of your Ultimate Ability's total cooldown</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltedb66653dff081c0/6598b8a713cde92b81201b93/10924_Umbral_Glaive.png">Umbral Glaive</h4>
			<ul>
				<li>Total Cost: 2300 &rArr; 2600</li>
				<li>Item Recipe: Serrated Dirk + Long Sword + Long Sword + 500 gold &rArr; Serrated Dirk + Caulfield's Warhammer + 500 gold</li>
				<li>Attack Damage: 50 (unchanged)</li>
				<li>Lethality: 13 &rArr; 15</li>
				<li>Ability Haste: 15 (unchanged)</li>
				<li>Passive - Blackout: When spotted by an enemy Ward, reveal traps and disable Wards around you for 8 seconds (50 second cooldown). Attacks do 2 (melee)/ 1 (ranged) damage to Wards &rArr; When spotted by an enemy Ward, reveal traps and disable Wards around you for 8 seconds (50 second cooldown). Attacks do 3 (melee)/ 2 (ranged) damage to Wards</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1ce0a122d17cc385/6598b8b114672f58506fad49/10924_6695_SerpentsFang.png">Serpent’s Fang</h4>
			<ul>
				<li>Total Cost: 2600 &rArr; 2500</li>
				<li>Item Recipe: Serrated Dirk + Pickaxe + 625 gold &rArr; Serrated Dirk + Pickaxe + 525 gold</li>
				<li>Attack Damage: 55 (unchanged)</li>
				<li>Lethality: 15 (unchanged)</li>
				<li>Ability Haste: 15 (unchanged)</li>
				<li>Unique Passive - Shield Reaver: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-marksmen-items">Marksmen Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The following items have been removed: Rageknife and Galeforce
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt713d9ff56a96f805/6598b8b171a55d83c7cd4d31/10924_3302_Terminus.png">Terminus</h4>
			<ul>
				<li>Total Cost: 3000 gold</li>
				<li>Item Recipe: Recurve + B.F. Sword + Dagger + 700 gold</li>
				<li>40 Attack Damage</li>
				<li>30% Attack Speed</li>
				<li>Passive - Shadow: Attacks apply 30 magic damage on-hit.</li>
				<li>Passive - Juxtaposition: Alternate between Light and Dark on-hits each attack. Light attacks grant 3-5 armor and magic resist (up to 15-25) for 5 seconds. Dark attacks grant 6% armor penetration and magic penetration (up to 30%) for 5 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc6b4fc91333c6963/6598b8b12f46f73c7f825a20/10924_3124_GuinsoosRageblade.png">Guinsoo’s Rageblade</h4>
			<ul>
				<li>Total Cost: 3200 &rArr; 3000 gold</li>
				<li>Item Recipe: Rageknife + Pickaxe + Amplifying Tome + 690 gold &rArr; Amplifying Tome + Hearthbound Axe + Long Sword + 1050 gold</li>
				<li>Attack Damage: 30 (unchanged)</li>
				<li>Ability Power: 30 (unchanged)</li>
				<li>Attack Speed: 25% (unchanged)</li>
				<li>Passive - Wrath: Attacks deal 30 bonus magic damage on-hit. You convert every 1% critical strike chance into 1.5 additional bonus magic damage on-hit, capped at 100% critical strike chance, for a maximum of 180 bonus magic damage on-hit. This damage is affected by Critical strike modifiers &rArr; Attacks deal 30 bonus magic damage on-hit. Critical Strike conversion removed.</li>
				<li>Passive - Seething Strike: Basic attacks grant 8% Attack Speed, stacking up to 4 times for a maximum of 32% Attack Speed. While fully stacked, every third Attack applies your On-Hit effects twice. <em>(Note: Phantom Hit’s synergy with Kraken Slayer has been reintroduced.)</em></li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltae8e419260c7d093/6598b8b1bb2e10693c0121b9/10924_3031_InfinityEdge.png">Infinity Edge</h4>
			<ul>
				<li>Total Cost: 3400 &rArr; 3300 gold</li>
				<li>Item Recipe: B.F. Sword + Pickaxe + Cloak of Agility + 625 gold &rArr; B.F. Sword + Pickaxe + Cloak of Agility + 525 gold</li>
				<li>Critical Strike Damage: 45% &rArr; 40%</li>
				<li>Attack Damage: 65 (unchanged)</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8c85d2149bc302af/6598b8b9d082f77bfb2613c5/10924_6675_NavoriQuickblades.png">Navori Quickblades</h4>
			<ul>
				<li>Total Cost: 3400 &rArr; 3300 gold</li>
				<li>Item Recipe: B.F. Sword + Caulfield's Warhammer + Cloak of Agility + 400 gold &rArr; Pickaxe + Caulfield’s Warhammer + Cloak of Agility + 725 gold</li>
				<li>Attack Damage: 65 &rArr; 60</li>
				<li>Ability Haste: 15%</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Unique Passive - Transcendence: Your attacks reduce your non-ultimate ability cooldowns by 15% of their remaining cooldown &rArr; Your attacks reduce your non-ultimate ability cooldowns by 12% of their remaining cooldown</li>
				<li>Passive - Impermanence: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt92b5a39bcb2fab16/6598b8b9b782f092ad586694/10924_3026_GuardianAngel.png">Guardian Angel</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 3200 gold</li>
				<li>Item Recipe: B.F. Sword + Chain Vest + Stopwatch + 150 gold &rArr; B.F. Sword + Steel Sigil + 950 gold</li>
				<li>Armor: 40 &rArr; 45</li>
				<li>Attack Damage: 45 &rArr; 55 Attack</li>
				<li>Passive - Rebirth: Upon taking lethal damage, restore 50% of base health and restore 30% of maximum mana. 300 second cooldown &rArr; Upon taking lethal damage, restores 50% of base health and 100% of maximum mana after 4 seconds of stasis. 300 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5d69976de393c93b/6598b8b9b6f9245f6fbe2ed0/10924_6673_ImmortalShieldbow.png">Immortal Shieldbow</h4>
			<ul>
				<li>Total Cost: 3000 gold (unchanged)</li>
				<li>Item Recipe: Pickaxe + Cloak of Agility + Vampiric Scepter + 625 gold (unchanged)</li>
				<li>Attack Damage: 50 (unchanged)</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Lifesteal: 10% &rArr; 12%</li>
				<li>Passive - Lifeline: Upon taking damage that would reduce you below 30% health, gain a 290 - 500 health shield for 3 seconds &rArr; Upon taking damage that would reduce you below 30% health, gain a 320-530 health shield for 3 seconds. Attack speed bonus upon triggering Lifeline has been removed.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8eb9cc43dcb097a/6598b8b94dad15495ce56c13/10924_6672_KrakenSlayer.png">Kraken Slayer</h4>
			<ul>
				<li>Total Cost: 3000 gold (unchanged)</li>
				<li>Item Recipe: Noonquiver + Cloak of Agility + Recurve Bow + 400 gold (unchanged)</li>
				<li>Attack Damage: 40 (unchanged)</li>
				<li>Attack Speed: 30% &rArr; 35%</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Passive - Bring it Down: Unchanged <em>(Note: Kraken Slayer’s interaction with Guinsoo’s Rageblade’s Phantom Hits passive is being reintroduced)</em></li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6dcf9de56ecfe2cd/6598b8b9c4b6207b22fb8ae1/10924_LordDominiksRegards.png">Lord Dominik’s Regards</h4>
			<ul>
				<li>Total Cost: 3000 gold (unchanged)</li>
				<li>Item Recipe: Last Whisper + Cloak of Agility + 950 gold (unchanged)</li>
				<li>Attack Damage: 35 &rArr; 40</li>
				<li>Armor Penetration: 30% (unchanged)</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Passive - Giant Slayer: Deal up to 22% bonus damage against enemy champions with greater maximum health than you. Maximum damage increase reached when health difference is greater than 2500 &rArr; Deal up to 15% bonus physical damage to champions with greater maximum health than you. Maximum damage increase reached when health difference is greater than 2000</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt49743a0ffc403add/6598b8ba1c5d7ccafd0f3e02/10924_3046_PhantomDancer.png">Phantom Dancer</h4>
			<ul>
				<li>Total Cost: 2800 gold (unchanged)</li>
				<li>Item Recipe: Hearthbound Axe + Zeal + 600 gold &rArr; Hearthbound Axe + Cloak of Agility + 1000 gold</li>
				<li>Attack Damage: 20 (unchanged)</li>
				<li>Attack Speed: 35% &rArr; 30%</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Movement Speed: 7% &rArr; 10%</li>
				<li>Unique Passive - Spectral Waltz: Basic attacks on-attack grant ghosting, 7% bonus movement speed, and a stack of Spectral Waltz for 3 seconds, up to 4 stacks. While at 4 stacks, gain 30% bonus attack speed. &rArr; Attacks grant Ghosting and a stack of 7% Attack Speed up to 5 stacks (Maximum 35% Attack Speed) for 3 seconds</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcf4c10859391bcaf/6598b8ba13cde9ebe5201b97/10924_3094_RapidFirecannon.png">Rapid Firecannon</h4>
			<ul>
				<li>Total Cost: 3000 (unchanged)</li>
				<li>Item Recipe: Long Sword + Zeal + Kircheis Shard + 850 gold (unchanged)</li>
				<li>30 Attack Damage (unchanged)</li>
				<li>Attack Speed: 15% &rArr; 20%</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Movement Speed: 7% (unchanged)</li>
				<li>Passives - Energized & Sharpshooter: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf2da72c22036efa/645c1281803f1777f4a39398/3087_Statikk_Shiv.SRT13_10.png">Statikk Shiv</h4>
			<ul>
				<li>Total Cost: 3000 (unchanged)</li>
				<li>Item Recipe: Noonquiver + Cloak of Agility + Kircheis Shard + 400 gold (unchanged)</li>
				<li>Attack Damage: 50 (unchanged)</li>
				<li>Attack Speed: 30% (unchanged)</li>
				<li>Critical Strike Change: 20% (unchanged)</li>
				<li>Passive - Energized: Moving and attacking will generate an energized attack.</li>
				<li>Passive - Electroshock: Your Energized Attack fires chain lightning that deals 100 - 180 (based on level) (+15% AP) bonus magic damage, increased to 150 against minions. Hits 6/9/12 targets. &rArr; Your Energized Attack fires a chain lightning that deals 100-180 (based on level) magic damage hitting up to 6 targets. Hits 6 targets.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltddda8559ffc922da/6598c7b1b05b9e1e3fd73f24/10924_Stormrazor.jpg">Stormrazor</h4>
			<ul>
				<li>Total Cost: 3000 &rArr; 3100 gold</li>
				<li>Item Recipe: Noonquiver + Cloak of Agility + Kircheis Shard + 450 gold &rArr; Noonquiver + Cloak of Agility + Kircheis Shard + 500 gold</li>
				<li>Attack Damage: 55 &rArr; 60</li>
				<li>Attack Speed: 15% (unchanged)</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Passives - Energized and Bolt: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt46b28b759f691ff6/5fa1f09283a0a3620dd3d130/6676_Marksman_T3_TheCollector.png">The Collector</h4>
			<ul>
				<li>Total Cost: 3000 (unchanged)</li>
				<li>Item Recipe: Serrated Dirk + Pickaxe + Cloak of Agility + 425 gold &rArr; Serrated Dirk + Pickaxe + Cloak of Agility + 525 gold</li>
				<li>Attack Damage: 55 &rArr; 60</li>
				<li>Lethality: 18 &rArr; 16</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Passive - Death and Taxes: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbced126d45a36121/6598b8bab782f07283586698/10924_EssenceReaver.png">Essence Reaver</h4>
			<ul>
				<li>Total Cost: 2900 &rArr; 3000 gold</li>
				<li>Item Recipe: Sheen + Caulfield’s Warhammer + Cloak of Agility + 300 gold</li>
				<li>Attack Damage: 55 (unchanged)</li>
				<li>Ability Haste: 20 (unchanged)</li>
				<li>Critical Strike Chance: 20% (unchanged)</li>
				<li>Passive - Spellblade: Unchanged</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-support-items-and-quests">Support Items and Quests</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				With the 2024 season, we saw a great opportunity to transform the Support Quest Item system. The old support items didn't bring a lot of customization or flavor to your builds. And despite being objectively powerful, they weren’t satisfying as some champions or play styles were underserved. Enter a universal support item that branches into five. Now, with the choice of five distinct passives to choose from, support items will be able to cover a broader range of champions and playstyles. Additionally, these changes should also help your upgrade moment <strong>feel</strong> more engaging and powerful.<br>
				<br>
				These upgrades were designed to be powerful, as they’re typically acquired around the time you finish your first item. This one and a half item power spike was actually designed to create a period of time within the early to mid game where supports can have their biggest power spikes and influence the game most meaningfully. Going forward, this will allow us to better define when supports have satisfying power in the game and, ultimately, help inform how we’re balancing that power.<br>
				<br>
				The following items have been removed: Relic Shield, Targon’s Buckler, Steel Shoulderguards, Runesteel Spaulders, Spellthief’s Edge, Frostfang, Spectral Sickle, and Harrowing Crescent.
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd1cb7543b6ea9ddd/6598b8ba90dcf2fe6f6484f9/10924_3865_WorldAtlas.png">World Atlas</h4>
			<ul>
				<li>Total Cost: 400 gold</li>
				<li>30 Health</li>
				<li>25% Mana Regeneration</li>
				<li>25% Health Regeneration</li>
				<li>3 gold per 10 seconds</li>
				<li>Support Quest: Earn 500 gold from this item to transform it into Runic Compass and gain the ability to hold wards.</li>
				<li>Gold Generation: Gain a charge every 18 seconds, up to 3 charges. While nearby an ally champion, consume a charge to earn gold via the following methods: 1) Damaging abilities and attacks against champions or structures grant 30 (melee) / 28 (ranged) gold and 2) killing a minion by any means grants you 20 gold and the nearest allied champion the same amount of gold they would have received had they killed the minion.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt81236077745ec705/6598b8c32d261216bee76348/10924_3866_RunicCompass.png">Runic Compass</h4>
			<ul>
				<li>Total Cost: Upgraded from World Atlas at 500 gold.</li>
				<li>100 Health</li>
				<li>50% Mana Regeneration</li>
				<li>50% Health Regeneration</li>
				<li>5 gold per 10 seconds</li>
				<li>Support Quest: Earn 1000 gold from this item to transform it into Runic Compass and gain the ability to hold wards.</li>
				<li>Gold Generation: Gain a charge every 18 seconds, up to 3 charges. While nearby an ally champion, consume a charge to earn gold via the following methods:</li>
				<li>Damaging abilities and attacks against champions or structures grant 34 (melee) / 32 (ranged) gold.</li>
				<li>Killing a minion by any means grants you 28 gold and the nearest allied champion the same amount of gold they would have received had they killed the minion.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt913fba0b562dcf29/6598b8c3be5d26867165aac9/10924_3867_BountyofWorlds.png">Bounty of Worlds</h4>
			<ul>
				<li>Total Cost: Upgraded from Runic Compass at 1000 gold.</li>
				<li>100 Health</li>
				<li>50% Mana Regeneration</li>
				<li>50% Health Regeneration</li>
				<li>5 gold per 10 seconds</li>
				<li>You may notice Bounty of Worlds is almost exactly the same item as Runic Compass. Well you noticed right. Bounty of Worlds is an in-between state that allows the item to upgrade into any of the five support item upgrades! Once upgraded it served its purpose. Thank you Bounty of Worlds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title">All Upgraded Item Forms</h4>
			<ul>
				<li>As a note, all upgraded items will share the same stats with the differentiator being the upgrades mentioned below.</li>
				<li>200 Health</li>
				<li>75% Mana Regeneration</li>
				<li>75% Health Regeneration</li>
				<li>5 gold per 10 seconds</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8e253187cc2e6c5e/6598b8c2dd006783fb207f3e/10924_3869_CelestialOpposition.png">Celestial Opposition</h4>
			<ul>
				<li>Passive - Blessing of the Mountain: Become Blessed to reduce incoming champion damage by 35% (melee) / 25% (ranged), lingering for 2 seconds after taking damage from a champion. When the shield breaks, unleash a shockwave around you that slows nearby enemies by 50% for 1.5 seconds. Effect refreshes after leaving combat for 20 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0844d0982577f123/6598b8c2c3fb27a1f619eeb7/10924_3876_SolsticeSleigh.png">Solstice Sleigh</h4>
			<ul>
				<li>Passive: Slowing or Immobilizing an enemy champion grants you and a nearby ally with the lowest amount of health 120 bonus health and 90 movement speed for 4 seconds. 20 second cooldown.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb788f0d498325ddc/6598b8c2bb2e104da30121bd/10924_3877_Bloodsong.png">Bloodsong</h4>
			<ul>
				<li>Passive - Spellblade: After using an ability, your next attack is enhanced with an additional 150% base AD damage on-hit (1.5 second cooldown). If the target is a champion, apply Expose Weakness, increasing the damage they take by 12% (melee) / 8% (ranged) for 6 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt823e575a34384433/6598b8c39fa6cf0c8d289b7b/10924_3870_DreamMaker.png">Dream Maker</h4>
			<ul>
				<li>Passive - Dream Maker: Gain a Blue Dream Bubble and a Purple Dream Bubble every 8 seconds. Healing and Shielding another ally blows both Dream Bubbles to them and empowers them for 3 seconds. Blue Bubble reduces 140 incoming damage on the next hit and Purple Bubble grants 90 bonus magic damage on the next hit.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4561acb4d5b959fb/6598b8c3bb2e10d3460121c1/10924_3871_ZazzaksRealmspike.png">Zaz’Zak’s Realmspike</h4>
			<ul>
				<li>Passive - Void Explosion: Dealing ability damage to a champion causes an explosion at their current location that damages the target and nearby enemies, dealing 50 (+3% maximum health) magic damage, capped at 300 against monsters. 9-6 second cooldown (based on level).</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-enchanter-items">Enchanter Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The following items have been removed: Chemtech Putrifier and Chalice of Harmony.
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte7342f288a673aed/6598b8c271a55d20a7cd4d35/10924_2022_GlowingMote.png">Glowing Mote</h4>
			<ul>
				<li>Total Cost: 250 gold</li>
				<li>5 Ability Haste</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbcbbf58eec3054fa/6598b8cdb05b9e96f9d73f20/10924_6621_Dawncore.png">Dawncore</h4>
			<ul>
				<li>Total Cost: 2700 gold</li>
				<li>Item Recipe: Bandleglass Mirror + Bandleglass Mirror + 700 gold</li>
				<li>40 Ability Power</li>
				<li>20 Ability Haste</li>
				<li>150% Mana Regeneration</li>
				<li>Passive - Dawncore: Gain 3% Heal and Shield Power and 5 Ability Power per 100% Base Mana Regeneration.</li>
				<li>Passive - Summoner Spell Haste: Gain 18 Summoner Spell Haste.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcb944b12465031a1/6598b8cd4135c4b91556aa57/10924_EchoesofHelia.png">Echoes of Helia</h4>
			<ul>
				<li>Total Cost: 2300 &rArr; 2200 gold</li>
				<li>Item Recipe: Chalice of Blessings + Bandleglass Mirror + 400 gold &rArr; Kindlegem + Bandleglass Mirror + 400 gold</li>
				<li>200 Health (unchanged)</li>
				<li>125% Mana Regeneration (unchanged)</li>
				<li>Ability Power: 30 &rArr; 40</li>
				<li>Ability Haste: 15 &rArr; 20</li>
				<li>Passive - Soul Siphon: Damaging a champion grants a Soul Shard, up to 2. Healing or Shielding an ally consumes all Soul Shards and restores 20 - 80 per health per Shard and deals 30 - 180 magic damage per Shard to the enemy. &rArr; Damaging a champion grants a Soul Shard, up to a maximum of 3. Healing or Shielding an ally consumes all Soul Shards and restores 20 Health and deals 55 magic damage per Shard to the nearest enemy champion.</li>
				<li>Passive - Dissonance removed.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2a8242b1049ba3bb/6598b8cddd006796f3207f42/10924_3744_StaffOfFlowingWater.png">Staff of Flowing Water</h4>
			<ul>
				<li>Total Cost: 2100 &rArr; 2300 gold</li>
				<li>Item Recipe: Aether Wisp + Forbidden Idol + 450 gold &rArr; Fiendish Codex + Forbidden Idol + 600 gold</li>
				<li>Ability Power: 35 &rArr; 40</li>
				<li>Mana Regeneration: 75% &rArr; 125%</li>
				<li>15 Ability Haste</li>
				<li>8% Heal and Shield Power (unchanged)</li>
				<li>5% Movement Speed removed</li>
				<li>Passive - Rapids: Healing or Shielding allied champions (excluding the user) grants you and them 30 - 45 ability power and 20 ability haste for 4 seconds. &rArr; Healing or Shielding allied champions (excluding the user) grants the user and allied champion 30 Ability Power and 10% bonus Movement Speed over 3 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt535cdb23fb671707/659c6aeb13cde99e1820234b/10924_3504_ArdentCenser.png">Ardent Censer</h4>
			<ul>
				<li>Total Cost: 2100 &rArr; 2300 gold</li>
				<li>Item Recipe: Aether Wisp + Forbidden Idol + 450 gold &rArr; Aether Wisp + Forbidden Idol + 650 gold</li>
				<li>Ability Power: 35 &rArr; 50</li>
				<li>Mana Regeneration: 75% &rArr; 125%</li>
				<li>15 Ability Haste</li>
				<li>8% Heal and Shield Power (unchanged)</li>
				<li>Bonus Movement Speed: 5% &rArr; 8%</li>
				<li>Passive - Sanctify: Healing or Shielding allied champions (excluding the user) grants you and them 20% bonus Attack Speed and 15 bonus magic damage for 4 seconds. &rArr; Healing or Shielding allied champions (excluding the user) grants you and them 25% bonus Attack Speed and 20 bonus magic damage for 4 seconds.</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-starting-items">Starting Items</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8622ba0ae1857627/6598b8cdd082f7e20c2613c9/10924_1055_DoransBlade.png">Doran’s Blade</h4>
			<ul>
				<li><span class='new'>NEW</span>Lifesteal: 3.5%</li>
				<li><span class='removed'>REMOVED</span>Omnivamp: 2.5% &rArr; 0</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7f16c96729e6ab18/6598b8cd2f46f70ca4825a24/10924_1056_DoransRing.png">Doran’s Ring</h4>
			<ul>
				<li>Unique Passive - Drain: Restore 1 mana per second, increased to 1.5 if you’ve damaged an enemy champion in the last 10 seconds (gain 45% of this value as health instead if you cannot gain mana) &rArr; Restore 1.25 mana per second (gain 45% of this value as health instead if you cannot gain mana)</li>
			</ul>
		</div>
	</div>
</div>

<header class='header-primary'>
	<h2 id="patch-ornn-item-upgrades">Ornn Item Upgrades</h2>
</header>

<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<br>
			<span>
			<blockquote class='blockquote context'>
				The move away from Mythic items also means new Ornn items! Since there are no longer Mythic items to default to, Ornn will now default to upgrading Legendary items based on their slot, prioritizing slot 1 followed by slot 2 and so on (aka from top left to bottom right) until an eligible item is detected. The following items are now eligible for upgrades:
			</blockquote>
			<ul>
				<li>Luden’s Companion &rArr; Force of Arms: +25 Ability Power, +350 Mana, +10 Ability Haste</li>
				<li>Liandry’s Torment &rArr; Liandry’s Lament: +20 Ability Power, +250 Health</li>
				<li>Rod of Ages &rArr; Infinite Convergence: +20 Ability Power, +200 Health, +250 Mana</li>
				<li>Hextech Rocketbelt &rArr; Upgraded Aeropack: +25 Ability Power,</li>
				<li>Riftmaker &rArr; Icathia’s Curse: +20 Ability Power, +150 Health, +5 Ability Haste</li>
				<li>Rabadon’s Deathcap &rArr; Rabadon’s Deathcrown: +50 Ability Power</li>
				<li>Malignance &rArr; Enmity of the Masses: +30 Ability Power+ 200 Mana, + 10 Ability Haste</li>
				<li>Youmuu’s Ghostblade &rArr; Youmuu’s Wake: +15 Attack Damage, + 8 Lethality</li>
				<li>Voltaic Cyclosword &rArr; Swordnado: +15 Attack Damage, +9 Lethality, +5 Ability Haste</li>
				<li>Hubris &rArr; Ataraxia: +15 Attack Damage, +9 Lethality, +5 Ability Haste</li>
				<li>Opportunity &rArr; Certainty: +15 Attack Damage, +9 Lethality, +3% Movement Speed</li>
				<li>Heartsteel &rArr; Leviathan: +250 Health, +100% Health Regeneration</li>
				<li>Iceborn Gauntlet &rArr; Frozen Fist: +100 Health, +10 Armor, +10 Ability Haste</li>
				<li>Jak’Sho the Protean &rArr; The Unspoken Parasite: +150 Health, +10 Armor, +10 Magic Resistance</li>
				<li>Locket of the Iron Solari &rArr; Reliquary of the Golden Dawn: +150 Health, +10 Armor, +10 Magic Resistance, +10 Ability Haste</li>
				<li>Unending Despair &rArr; Hope Adrift: +200 Health, +10 Armor, +10 Ability Haste</li>
				<li>Echoes of Helia &rArr; Cry of the Shrieking City: +20 Ability Power, +100 Health, +5 Ability Haste, +50% Mana Regeneration</li>
				<li>Moonstone Renewer &rArr; Starcaster: +20 Ability Power, +50 Health, +5 Ability Haste, +75% Mana Regeneration</li>
				<li>Shurelya’s Battlesong &rArr; Shurelya’s Requiem: +15 Ability Power, +10 Ability Haste, +2% Movement Speed, +75% Mana Regeneration</li>
				<li>Dawncore &rArr; Daybreak: +20 Ability Power, +10 Ability Haste, +75% Mana Regeneration</li>
				<li>Eclipse &rArr; Syzygy: +20 Attack Damage, +10 Ability Haste</li>
				<li>Stridebreaker &rArr; Dreamshatter: +15 Attack Damage, +10% Attack Speed, +75 Health</li>
				<li>Trinity Force &rArr; Infinity Force: +10 Attack Damage, +10% Attack Speed, +100 Health, +5% Ability Haste</li>
				<li>Experimental Hexplate &rArr; T.U.R.B.O: +10 Attack Damage, +10% Attack Speed, +150 Health</li>
				<li>Black Cleaver &rArr; Obsidian Cleaver: +10 Attack Damage, 200 Health, 5 Ability Haste</li>
				<li>Spear of Shojin &rArr; Shojin’s Resolve: +10 Attack Damage, 200 Health, 5 Ability Haste</li>
				<li>Sundered Sky &rArr; Heavensfall: +10 Attack Damage, +200 Health, +5 Ability Haste</li>
				<li>Guinsoo’s Rageblade &rArr; Seething Sorrow: +10 Attack Damage, +20 Ability Power, +10% Attack Speed</li>
				<li>Infinity Edge &rArr; Edge of Finality: +30 Attack Damage</li>
				<li>Stormrazor &rArr; Eye of the Storm: +20 Attack Damage, +10% Attack Speed</li>
				<li>Krakenslayer &rArr; Wyrmfallen Sacrifice: +20 Attack Damage, +10% Attack Speed</li>
				<li>Nashor’s Tooth &rArr; The Baron’s Grit: +30 Ability Power, +10% Attack Speed, +5 Ability Haste</li>
			</ul>
			</span>
		</div>
	</div>
</div>


<header class='header-primary'>
	<h2 id="patch-runes">Runes</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				The Perfect Timing Rune has been removed and replaced with Triple Tonic.
			</blockquote>
			<h4 class="change-detail-title ability-title"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt071cbf91cda2406d/6598c9c24dad157e90e56c1c/10924_Rune_TripleTonic.png">Triple Tonic</h4>
			<ul>
				<li>At level 3, gain an Elixir of Avarice.</li>
				<li><strong>Elixir of Avarice</strong>: On use, gain 5 true damage on-hit against minions for 60 seconds. At the end of this effect, gain 40 gold.</li>
				<li>At level 6, gain an Elixir of Force.</li>
				<li><strong>Elixir of Force</strong>: On use, gain 20 Adaptive Force for 60 seconds.</li>
				<li>At level 9, gain an Elixir of Skill.</li>
				<li><strong>Elixir of Skill</strong>: On use, gain a skill point. <em>(Note: This does not grant a level or modify the rules around adding skill points into abilities)</em></li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-tower-adjustments-">Tower Adjustments</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				Towers have been on the more fragile end for a while now, but with the addition of more tower damage coming from Voidgrubs, we thought it was time to give them a bit more durability. We want towers to feel like something that you can actually protect and reduce how easy it is for some teams to immediately win by blasting through three towers. We're also adjusting the backdoor bonus (reduced damage to towers when there are no nearby allied minions) to be more potent as it was often being ignored by champions later into the game. Now it will also apply to true damage rather than entirely nullifying it so that it's consistent across damage types.
			</blockquote>
			<ul>
				<li>Inner Tower Health: 3600 &rArr; 4000</li>
				<li>Inhibitor Tower Health: 3300 &rArr; 3500</li>
				<li>Nexus Tower Health: 2700 &rArr; 3000</li>
				<li>Backdoor Bonus: Now reduces True Damage to towers rather than nullifying it entirely</li>
				<li>Backdoor Damage Reduction Amount: 66.666% &rArr; 80%</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-ranked-changes">Ranked Changes</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				Alongside the launch of the new season we’ll also be making some behind-the-scenes changes that should help improve the overall ranked experience.
			</blockquote>
			<ul>
				<li><strong>Narrowing Emerald Tier</strong>: While overall we believe the new Emerald tier is accomplishing our goal of spreading out the ladder, the range of skill levels within Emerald is currently a bit too wide, so we’re going to be making Emerald a bit smaller. This, among other changes, should also help to correct instances of players Emerald rank and above receiving more LP per loss than LP per win.</li>
				<li><strong>Visible Rank Differences</strong>: While promoting ranks was made easier in 2023, there weren’t any adjustments to demotions, which led to some players having much higher visible ranks than their actual MMR. To correct this, demoting has been made a little easier to help avoid situations where a player could have a visible rank of Platinum, but actually have a Silver MMR. Additionally, we’ve also made adjustments to matchmaking so that the range of visible ranks within a lobby are tighter.</li>
				<li><strong>Modified LP Gains</strong>: The LP gain increase to +/-25 per game we introduced last year has done a good job of helping players move up or down a division within a session, which we’re currently pretty happy with. That said, We’ve learned that this amount of LP isn’t sustainable in tiers Emerald and above where breadth of skill is higher. Due to this, LP gains at Emerald Tier and above have been decreased to roughly +/- 20 per game.</li>
				<li><span class='new'>NEW</span><strong>New Player Placements</strong>: We’ve updated how new players are placed in Ranked which should place them closer to their appropriate skill level.</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-fist-bumps">Fist Bumps</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte782b290661b67ec/65963771b1779067e4d03021/10924_5_Baron_Fistbump.gif" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte782b290661b67ec/65963771b1779067e4d03021/10924_5_Baron_Fistbump.gif"></a></span>
			<blockquote class='blockquote context'>
				Fist bumps. That’s right, Riot Games (whose logo is a fist bump) added an interactive fist bump into League of Legends for you to celebrate all the hype moments in game. All you need to do is activate the emote, wait for another team member to use the emote and then BOOM. Fist bump achieved. Queue the fireworks. <em>(Note: the default keybind for this is [U])</em><br>
				<br>
				The fist bump emote will only be visible to allied teammates and, in the incredibly embarrassing event that a teammate does not fist bump you back, your fist bump can transform into a thumbs up.
			</blockquote>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-dynamic-music">Dynamic Music</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				It’s been nearly 10 years since the last update of music for Summoner’s Rift (way back in 2015). And while we already have a music system that’s working, we wanted to find a way to level it up even more! With the addition of all of the new and updated Void creatures coming this season, we felt like there was a real opportunity to use music to enhance the feeling of taking these objectives. Cue Dynamic Music!<br>
				<br>
				This new Dynamic Music system can be broken down into 3 components:
			</blockquote>
			<ul>
				<li>Locational Music</li>
				<li>Contextual Music</li>
				<li>Situational Music</li>
			</ul>
			<hr class='divider'>
			<h4>LOCATIONAL MUSIC: CHANGES WITH YOUR LOCATION</h4>
			<br>
			<span>			
			<blockquote class='blockquote context'>
				We’re introducing musical “zones” into Summoner’s Rift. In other words, we play different music for different locations within the map as you enter them. Right now, it’s only the top side river (including the Baron pit) that has unique music, but make sure to go check it out!
			</blockquote>
			</span>
			<hr class='divider'>
			<h4>CONTEXTUAL MUSIC: CHANGES WITH GAME STATE</h4>
			<br>
			<span>				
			<blockquote class='blockquote context'>
				Some of you might know that Summoner’s Rift’s base music evolves over time with the state of the game. The music gradually gets more complex and exciting as towers and inhibitors get taken down. So when we zone out the top side river, we also want it to have its own evolution within the zone as well.<br>
				<br>
				Music will evolve as new objectives spawn with there being a total of 4 evolution states:
			</blockquote>
			</span>
			<ul>
				<li>Neutral (nothing has spawned)</li>
				<li>Voidgrubs</li>
				<li>Rift Herald</li>
				<li>Baron Nashor</li>
			</ul>
			<br>
			<span>				
			<blockquote class='blockquote context'>
				Each of the monsters introduce their different personalities and stakes to the river—so naturally they each get their own unique music as well!
			</blockquote>
			</span>
			<hr class='divider'>						
			<h4>SITUATIONAL MUSIC: CHANGES WITH YOUR ACTIONS</h4>
			<br>
			<span>			
			<blockquote class='blockquote context'>
				What if there was a way the music could react to what you, the player, are doing? The first place that feels like a natural tie-in is the idea of “raid boss music,”so why not add some music for these void objectives when you’re fighting them? This resulted in three unique pieces of music for when you are fighting Grubbies, Rift Herald, and Baron.<br>
				<br>
				We hope that these changes make the map feel more alive and make each little corner of the map feel lived in and more interesting. We’re very excited for the launch of Dynamic Music for Summoner’s Rift and to see how you all like it!
			</blockquote>
			</span>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-in-game-quests">In-Game Quests</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				From champions with sunglasses taking 1 less damage from Leona’s passive, to Rift Herald dance parties, hidden surprises are no stranger to League. In this patch, we’re introducing some additional in-game quests for a few champions to help bring their vibrant stories and personalities to life on the Rift! Read below for information on the quests, how to activate them, and the rewards you’ll get if you're able to win!
			</blockquote>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>GOLDEN RATIO</h4>
			<ul>
				<li><strong>Champions</strong>: Hwei and Jhin</li>
				<li><strong>Quest Information</strong>: Jhin or Hwei must be the first to kill the other using their ultimate ability, proving death or despair as the more powerful art.</li>
				<li><strong>Quest Activation Conditions</strong>: 1) Hwei and Jhin must be on opposing teams 2) Hwei and Jhin must both be at least level 12</li>
				<li><strong>Quest Rewards</strong>: If Jhin wins he turns Hwei into his virtuosic magnum opus, earning him 4.444 Lethality. If Hwei wins, his visions of pain, and peace, and art deepen, earning him 3.33% Magic Penetration</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>FISHING IN THE LAVENDER SEA</h4>
			<ul>
				<li><strong>Champions</strong>: Bel’Veth and Jax</li>
				<li><strong>Quest Information</strong>: Will Bel’Veth’s grand ambitions come to life, or will Jax be able to protect his fishing spot? Jax and Bel’Veth compete over Baron Nashor, with the first to slay him emerging victorious.</li>
				<li><strong>Quest Activation Conditions</strong>: 1) Bel’Veth and Jax must be on opposing teams 2) Rift Herald must have been taken prior to Baron</li>
				<li><strong>Quest Rewards</strong>: If he wins, Jax receives 5 stacks of Bel’Veth’s Passive, Death in Lavender which grants 0.28%-1% Attack Speed (based on level) per stack, and 5 more stacks each time he scores a takedown on Bel’Veth. Should Bel’Veth prevail, killing Jax will drop a Void Coral that grants Bel’Veth her extended, empowered true form</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>BAD BLOOD</h4>
			<ul>
				<li><strong>Champions</strong>: Nasus and Renekton</li>
				<li><strong>Quest Information</strong>: Can Nasus stop Renekton’s rage and protect Shurima, or will Renekton’s wrath consume everything? Be the first the kill the other while your ultimate ability is active to come out on top</li>
				<li><strong>Quest Activation Conditions</strong>: 1) Renekton and Nasus must be on opposing teams, 2) both Nasus and Renekton must be level 11</li>
				<li><strong>Quest Rewards</strong>: The winner of Bad Blood will become 10% larger while in their increased ultimate size and its duration is extended by 10%, while the loser’s increased ultimate size will become 10% smaller</li>
			</ul>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>BATTLE OF SPIRIT AND SHADOW</h4>
			<ul>
				<li><strong>Champions</strong>: Shen and Zed</li>
				<li><strong>Quest Information</strong>: Can Shen stand against Zed’s shadows, or will the might of the dark prove too strong to overcome? Shen will win this quest if he takes down Zed before Zed kills two of Shen’s nearby allies (kill or assists will count). Zed will prevail if he kills two of Shen’s nearby allies without being taken down by Shen.</li>
				<li><strong>Quest Activation Conditions</strong>: 1) Shen and Zed must be on opposing teams 2) Shen and Zed must both be level 11</li>
				<li><strong>Quest Rewards</strong>: If Shen defeats Zed, the shield from his Ki Barrier will become 30% stronger. If Zed wins, his passive ability, Contempt for the Weak, will deal an additional 2% of the target’s maximum health</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-aram">ARAM</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				Due to the large amount of changes coming in this patch we won’t be making any changes to ARAM in 14.1, but we will be closely monitoring champion performance with the update and plan to implement follow up balance changes in the upcoming patch.
			</blockquote>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-progression">Progression</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>SEASON START CAREER STAT RESET</h4>
			<br>
			<span>
			<blockquote class='blockquote context'>
				Due to the start of the new Ranked 2024 Season, Split 1 career stats will be reset.
			</blockquote>
			</span>
			<hr class='divider'>
			<h4>SEASONAL CHALLENGES: 2024 SPLIT 1</h4>
			<br>
			<span>			
			<blockquote class='blockquote context'>
				Seasonal Challenges are going to be released alongside each ranked split in the 2024 season! There will be three sets of Challenges, each with a new unique title earnable at the Master rank. The Split 1 title will be <strong>Voidborn</strong> and the new Challenges are as follows:
			</blockquote>
			</span>
			<ul>
				<li>Legendary Arms: 2024 Split 1 - Win Games with Legendary Items</li>
				<li>Support Subsidy: 2024 Split 1 - Fully complete your support quest in 14 minutes</li>
				<li>Crab Wrangler: 2024 Split 1 - Take both of the first Scuttle Crab spawns</li>
				<li>The Brush Has Eyes: 2024 Split 1 - End the game with 20% more vision score than your role opponent</li>
				<li>All Random All Champs: 2024 Split 1 - Earn an S- grade on different champions</li>
				<li>Wurm Fishing: 2024 Split 1 - Take down Barons</li>
				<li>Right Under Their Noses: 2024 Split 1 - Recall while unseen by an enemy champion</li>
				<li>Always On Time: 2024 Split 1 - Kill Epic Monsters within 30 seconds of spawn</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-game-spectator-changes">Game Spectator Changes</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<blockquote class='blockquote context'>
				What better way to ring in the new season than watching your friends start their climbs? In this patch we’re introducing a few changes to League’s spectator system to help modernize it for players. Fun fact, the 3 minute spectator delay was originally tied to ward timers, which are now 2 minutes 30 seconds. Can you guess what the new delay is? Anyway, now you’ll be able to spectate with 30 seconds less delay on Summoner’s Rift games and YOU CAN NOW SPECTATE ARENA AND TFT GAMES.
			</blockquote>
			<ul>
				<li><strong>Summoner’s Rift Spectator Delay</strong>: 3 minutes &rArr; 2 minutes 30 seconds</li>
				<li><strong>ARAM Spectator Delay</strong>: 3 minutes &rArr; 60 seconds</li>
				<li><span class='new'>NEW</span><strong>Teamfight Tactics Spectator Delay</strong>: 60 seconds</li>
				<li><span class='new'>NEW</span><strong>Arena Spectator Delay</strong>: 60 seconds</li>
				<li><strong>Spectatable Game Time</strong>: Spectators can view up to the last 5 minutes of gameplay prior to when they started spectating (may differ by region) &rArr; After clicking spectate, spectators will need to wait an amount of time equivalent to the delay before loading in, at which point they will be able to view the game time from when they pressed spectate onwards. The ability to view earlier gameplay prior to spectating has been removed, but don’t worry, you can still find footage of the full game using the replay feature.</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-mythic-shop">Mythic Shop</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<h4>UPCOMING ROTATIONS</h4>
			<br>
			<span>			
			<blockquote class='blockquote context'>
				In order to kick 2024 off right we’re sharing out the next several rotations for the Mythic Shop! Our goal here is to help you all plan out Mythic Essence acquisition and spending, so we’ll start out with a rolling list of approximately the next 3 months. This will include both the previously released Prestige and Mythic (aka Hextech) skins, but we’ll be leaving new Prestige skins and Seasonal Mythic skin reveals as their own surprise. As we near the end of the list, we’ll refresh it with the next three months of rotations unless we find that a different cadence is working better for the community.<br>
				<br>
				The current rotation schedule continues on with the next rotation in patch 14.2. Starting from there, these are the upcoming skins in the next few patches:
			</blockquote>
			</span>
			<p><strong>Coming in Patch 14.2</strong></p>
			<ul>
				<li>Prestige Empyrean K’Sante</li>
				<li>Prestige PROJECT: Zed</li>
				<li>Prestige Pulsefire Thresh</li>
				<li>Prestige Conqueror Jax</li>
			</ul>
			<p><strong>Coming in Patch 14.4</strong></p>
			<ul>
				<li>Prestige Mythmaker Sivir</li>
				<li>Prestige K/DA Ahri</li>
				<li>Prestige Battle Academia Leona</li>
				<li>Prestige Star Guardian Neeko</li>
			</ul>
			<p><strong>Coming in Patch 14.6</strong></p>
			<ul>
				<li>Prestige PsyOps Ezreal</li>
				<li>Prestige Winterblessed Warwick</li>
				<li>Prestige Dragonmancer Volibear</li>
				<li>Prestige Space Groove Nami</li>
				<li>Dark Star Cho’Gath</li>
				<li>Hextech Renekton</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-qol-changes-and-bugfixes">QoL Changes & Bugfixes</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<p><strong>QoL Changes</strong></p>
			<ul>
				<li>Trinket wards have been updated to display the same visual effects as control wards when placing them. This is intended to further clarify the range that wards cover, especially with the terrain changes releasing this patch.</li>
				<li>Qiyana R knockback duration has been increased slightly to reduce chances of R knockback not overlapping with wall stun.</li>
				<li>Neeko R knockup will no longer move enemies outside of the stun range.</li>
				<li>Shaco’s R clone will now mirror spell animations and recall visuals.</li>
				<li>The amount of time required for Jarvan IV to reactivate his ultimate to lower the walls has been reduced from 1 to 0.75 seconds.</li>
				<li>Sylas’ passive attacks are now single target for primary targets for the purposes of other systems. For example, this will let him proc Press the Attack or kill Yorick Ghouls while his passive is available.</li>
				<li>Fixed a bug that caused Dark Harvest and Heartsteel to reveal Neeko when she's disguised.</li>
			</ul>
			<p><strong>Bugfixes</strong></p>
			<ul>
				<li>Mordekaiser R will no longer bring Akali Shroud with her through dimensions.</li>
				<li>Qiyana’s W &gt; Q fast buffer no longer sends her Q towards the 0,0,0 map coordinate.</li>
				<li>Shaco’s R Clone will spawn with the same mana as Shaco and copy jungle mana regeneration (if he is a jungler)</li>
				<li>Kog’Maw’s W no longer cancels his auto attacks when the W buff ends.</li>
				<li>Fixed a bug that caused Fizz’s R water VFX to not show for the Fizz player.</li>
				<li>Fixed a bug that caused Hwei’s EW to expire before reaching a moving target.</li>
				<li>Fixed a bug that caused Neeko’s W to scale with ultimate ability haste.</li>
				<li>Fixed a bug that caused Hwei to cast a different ability from the same subject if his previous cast was interrupted by an item usage.</li>
				<li>Fixed a bug that sometimes caused Hecarim’s E to critically strike with 0% critical strike chance.</li>
				<li>Fixed a bug that caused Hwei’s subjects to go on cooldown after certain rapid button press combinations.</li>
				<li>Fixed a bug that sometimes caused Hwei to cast a different spell than the one he input while move casting.</li>
				<li>Fixed a bug that caused Viego’s R to be replaced with Hwei’s R upon possessing him.</li>
				<li>Fixed a bug that caused Janna’s allies to be able to receive bonus movement speed from her passive while Janna is dead.</li>
				<li>Fixed a bug that caused Spear of Shojin’s passive to apply to Ultimate abilities.</li>
			</ul>
			<p><strong>Cosmetic Bugfixes</strong></p>
			<ul>
				<li>Bewitching Fiora’s Duelist Dance (P) indicator visibility has been updated and aligns with her Base indicator visibility.</li>
				<li>Faerie Court Fiora’s Duelist Dance (P) indicator visibility has been updated and aligns with her Base indicator visibility.</li>
				<li>Lunar Beast Fiora’s Duelist Dance (P) indicator visibility has been updated and aligns with her Base indicator visibility.</li>
				<li>Prestige Lunar Beast Fiora’s Duelist Dance (P) indicator visibility has been updated and aligns with her Base indicator visibility.</li>
			</ul>
		</div>
	</div>
</div>
<header class='header-primary'>
	<h2 id="patch-upcoming-skins-and-chromas">Upcoming Skins & Chromas</h2>
</header>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<p>The following skins will be released in this patch:</p>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7b19325775e172ee/659792334135c4ffc556a538/10924_Dragonmancer_Kassadin_Splash.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7b19325775e172ee/659792334135c4ffc556a538/10924_Dragonmancer_Kassadin_Splash.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7b19325775e172ee/659792334135c4ffc556a538/10924_Dragonmancer_Kassadin_Splash.jpg" target="_blank">Dragonmancer Kassadin</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltae609323b270d11d/65979233dd006739ba207a5e/10924_Dragonmancer_Rakan_Splash.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltae609323b270d11d/65979233dd006739ba207a5e/10924_Dragonmancer_Rakan_Splash.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltae609323b270d11d/65979233dd006739ba207a5e/10924_Dragonmancer_Rakan_Splash.jpg" target="_blank">Dragonmancer Rakan</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdda090149e3ea3c8/659792334135c44fa656a534/10924_Dragonmancer_Fiora_Splash.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdda090149e3ea3c8/659792334135c44fa656a534/10924_Dragonmancer_Fiora_Splash.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdda090149e3ea3c8/659792334135c44fa656a534/10924_Dragonmancer_Fiora_Splash.jpg" target="_blank">Dragonmancer Fiora</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6cdaefaab8f9845c/65979233b0fbcb085e628a2e/10924_Dragonmancer_Vayne_Splash.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6cdaefaab8f9845c/65979233b0fbcb085e628a2e/10924_Dragonmancer_Vayne_Splash.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6cdaefaab8f9845c/65979233b0fbcb085e628a2e/10924_Dragonmancer_Vayne_Splash.jpg" target="_blank">Dragonmancer Vayne</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte8739bc1f7399e81/65979233b782f0796058611f/10924_Prestige_Dragonmancer_Rakan_Splash.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte8739bc1f7399e81/65979233b782f0796058611f/10924_Prestige_Dragonmancer_Rakan_Splash.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte8739bc1f7399e81/65979233b782f0796058611f/10924_Prestige_Dragonmancer_Rakan_Splash.jpg" target="_blank">Prestige Dragonmancer Rakan</a></h4>
				</div>
			</div>
		</div>
	</div>
</div>
<div class='content-border'>
	<div class='white-stone accent-before'>
		<div>
			<p>The following chromas will be released this patch:</p>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8542f19c9a5f6260/6597922a2f46f71d97825569/10924_Dragonmancer_Kassadin_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8542f19c9a5f6260/6597922a2f46f71d97825569/10924_Dragonmancer_Kassadin_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8542f19c9a5f6260/6597922a2f46f71d97825569/10924_Dragonmancer_Kassadin_Chromas.jpg" target="_blank">Dragonmancer Kassadin</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd1b370e66ddb0f94/6597922a1a8166671eb0b002/10924_Dragonmancer_Rakan_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd1b370e66ddb0f94/6597922a1a8166671eb0b002/10924_Dragonmancer_Rakan_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd1b370e66ddb0f94/6597922a1a8166671eb0b002/10924_Dragonmancer_Rakan_Chromas.jpg" target="_blank">Dragonmancer Rakan</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2198473cfdca75f6/6597922b71a55d4fe3cd483f/10924_Dragonmancer_Fiora_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2198473cfdca75f6/6597922b71a55d4fe3cd483f/10924_Dragonmancer_Fiora_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2198473cfdca75f6/6597922b71a55d4fe3cd483f/10924_Dragonmancer_Fiora_Chromas.jpg" target="_blank">Dragonmancer Fiora</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt392aee06db191b5e/6597922ab782f0f66058611b/10924_Dragonmancer_Vayne_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt392aee06db191b5e/6597922ab782f0f66058611b/10924_Dragonmancer_Vayne_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt392aee06db191b5e/6597922ab782f0f66058611b/10924_Dragonmancer_Vayne_Chromas.jpg" target="_blank">Dragonmancer Vayne</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta4ee74a2af3a9674/6597922a4135c4f30a56a530/10924_Premium_Corki_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta4ee74a2af3a9674/6597922a4135c4f30a56a530/10924_Premium_Corki_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta4ee74a2af3a9674/6597922a4135c4f30a56a530/10924_Premium_Corki_Chromas.jpg" target="_blank">Dragonwing Corki</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdf7323c1d7f82c32/6597922ab05b9e72e9d73a62/10924_Premium_Talon_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdf7323c1d7f82c32/6597922ab05b9e72e9d73a62/10924_Premium_Talon_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdf7323c1d7f82c32/6597922ab05b9e72e9d73a62/10924_Premium_Talon_Chromas.jpg" target="_blank">Dragonblade Talon</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8a112769c730c346/6597922b13cde9e632201684/10924_Premium_Dragon_Fist_LeeSin_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8a112769c730c346/6597922b13cde9e632201684/10924_Premium_Dragon_Fist_LeeSin_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8a112769c730c346/6597922b13cde9e632201684/10924_Premium_Dragon_Fist_LeeSin_Chromas.jpg" target="_blank">Dragon Fist Lee Sin</a></h4>
				</div>
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07d12a9d3dd37273/6597922a9fa6cf1a932896a8/10924_Premium_Jade_Dragon_Wukong_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07d12a9d3dd37273/6597922a9fa6cf1a932896a8/10924_Premium_Jade_Dragon_Wukong_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07d12a9d3dd37273/6597922a9fa6cf1a932896a8/10924_Premium_Jade_Dragon_Wukong_Chromas.jpg" target="_blank">Jade Dragon Wukong</a></h4>
				</div>
			</div>
			<div class="gs-container default-2-col">
				<div class="skin-box">
					<span class="content-border"><a class="skins cboxElement" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad92e5522d49881c/6597922ac4b620dca1fb8623/10924_Premium_Guqin_Sona_Chromas.jpg" target="_blank"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad92e5522d49881c/6597922ac4b620dca1fb8623/10924_Premium_Guqin_Sona_Chromas.jpg"></a></span>
					<h4 class="skin-title"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad92e5522d49881c/6597922ac4b620dca1fb8623/10924_Premium_Guqin_Sona_Chromas.jpg" target="_blank">Guqin Sona</a></h4>
				</div>
			</div>
		</div>
	</div>
</div></div><aside class="style__NavWrapper-sc-17x3yhp-3 Felei"><nav class="style__Nav-sc-17x3yhp-4 fPAryE"><h4 class="style__Title-sc-17x3yhp-2 dTDPMo">Patch 14.1 Notes</h4><a selected="" class="style__NavItem-sc-17x3yhp-6 dizALk"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Patch Highlights</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Ranked Season 2024</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Void Gameplay Changes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Terrain Changes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Infernal Terrain Changes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Champions</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Jungle Damage Adjustments</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Mage Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Fighter and Diver Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Tank and Support Tank Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Assassin Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Marksmen Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Support Items and Quests</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Enchanter Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Starting Items</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Ornn Item Upgrades</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Runes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Tower Adjustments</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Ranked Changes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Fist Bumps</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Dynamic Music</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">In-Game Quests</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">ARAM</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Progression</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Game Spectator Changes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Mythic Shop</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">QoL Changes &amp; Bugfixes</span></a><a class="style__NavItem-sc-17x3yhp-6 hjPvPX"><div class="style__Anchor-sc-17x3yhp-5 iZGKbJ"></div><span class="style__NavText-sc-17x3yhp-7 BnCKY">Upcoming Skins &amp; Chromas</span></a></nav></aside><button class="style__BackToTop-sc-17x3yhp-9 ggDLRd"><svg class="style__BackToTopArrow-sc-17x3yhp-8 gQmRFS" viewBox="0 0 100 100"><path d="M53.47,96.53A3.47,3.47,0,1,1,50,93.06,3.47,3.47,0,0,1,53.47,96.53Z"></path><path d="M46.53,73.76V13.29l-23,23-4.91-4.91L50,0,81.38,31.38l-4.91,4.91-23-23V73.76Z"></path></svg></button></section><div class="style__Wrapper-sc-1ponprt-0 SOavl patch-notes"><div class="style__TagWrapper-sc-1ponprt-1 hnxaUJ"><h1 class="style__TagsTitle-sc-1ponprt-2 cfEHMT">Tags<!-- -->:</h1><button class="style__Tag-sc-1ponprt-3 fXHbIJ"><a href="/en-pl/news/tags/patch-notes/">Patch Notes</a></button></div></div><div class="style__Wrapper-sc-mghyta-1 loIzTM" data-testid="share"><div class="style__Before-sc-mghyta-3 htnkSK"><hr class="style__Line-sc-mghyta-2 gloFrY"/><label data-testid="share:title" class="style__BeforeLabel-sc-mghyta-4 cJsYNr">Share this article</label><hr class="style__Line-sc-mghyta-2 gloFrY"/></div><div class="style__Wrapper-sc-1wyuot3-0 kUmfSV style__ShareBar-sc-mghyta-0 iWNlWf"><ul class="style__List-sc-1wyuot3-1 imoAWt"><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-vk"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on VK" data-testid="share:button-icon-vk"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 192 113.9" style="enable-background:new 0 0 192 113.9" xml:space="preserve"><g><path class="st0" d="M187.6,7.6c1.3-4.5,0-7.6-6.3-7.6h-21c-5.4,0-7.8,2.8-9.1,6c0,0-10.6,26.1-25.8,42.8c-4.9,4.9-7,6.4-9.7,6.4
		c-1.3,0-3.3-1.5-3.3-6V7.6c0-5.4-1.5-7.6-6-7.6h-33C70.1,0,68,2.5,68,4.8c0,5.1,7.5,6.3,8.4,20.4v30.9c0,6.7-1.2,7.9-3.9,7.9
		c-7,0-24.4-26.1-34.6-56c-2.1-5.5-4-7.9-9.4-7.9h-21c-6,0-7.2,2.8-7.2,6c0,5.5,7,33.1,33.1,69.5c17.4,24.9,41.8,38.3,64,38.3
		c13.3,0,15-3,15-8.1V86.9c0-6,1.2-7.2,5.5-7.2c3.1,0,8.4,1.5,20.8,13.5c14.2,14.2,16.6,20.7,24.6,20.7h21c6,0,9-3,7.2-8.8
		c-1.9-5.8-8.7-14.4-17.7-24.6c-4.9-5.8-12.3-12-14.4-15.1c-3.1-4-2.2-5.8,0-9.3C159.4,55.9,185,19.9,187.6,7.6z"></path></g></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-fb"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Facebook" data-testid="share:button-icon-fb"><svg version="1.1" id="Isolation_Mode" x="0px" y="0px" viewBox="0 0 8.86 17.16" style="enable-background:new 0 0 8.86 17.16" xml:space="preserve"><g><g><path class="st0" d="M2.62,17.16c0-0.04,0-0.26,0-0.31c0-2.51,0-5.02,0-7.52c0-0.03,0-0.06,0-0.1c-0.04,0-0.07,0-0.11,0
			c-0.8,0-1.6,0-2.4,0C0,9.24,0,9.24,0,9.13c0-0.94,0-1.88,0-2.82c0-0.09,0.03-0.11,0.11-0.11c0.8,0,1.6,0,2.4,0
			c0.03,0,0.07,0,0.11,0c0-0.03,0-0.06,0-0.09c0-0.78,0-1.56,0.01-2.34c0.01-0.63,0.13-1.24,0.4-1.81C3.4,1.2,3.99,0.64,4.78,0.32
			C5.31,0.09,5.87-0.01,6.44,0C7.09,0.01,7.75,0.04,8.4,0.06c0.12,0,0.24,0.03,0.36,0.03c0.07,0,0.09,0.03,0.09,0.1
			c0,0.39,0,0.78,0,1.17c0,0.46,0,0.92,0,1.37c0,0.08-0.02,0.1-0.1,0.1c-0.5,0-0.99-0.01-1.49,0C7.04,2.84,6.81,2.87,6.59,2.92
			c-0.43,0.09-0.68,0.37-0.76,0.8C5.79,3.88,5.77,4.06,5.77,4.23c-0.01,0.64,0,1.27,0,1.91c0,0.02,0,0.04,0,0.07
			c0.04,0,0.07,0,0.11,0c0.92,0,1.83,0,2.75,0c0.12,0,0.12,0,0.11,0.11c-0.06,0.5-0.13,1-0.2,1.5C8.49,8.24,8.44,8.66,8.39,9.08
			C8.37,9.24,8.37,9.24,8.21,9.24c-0.78,0-1.56,0-2.33,0c-0.03,0-0.07,0-0.11,0c0,0.04,0,0.08,0,0.12c0,2.48,0,4.96,0,7.44
			c0,0.06,0,0.3,0,0.36C4.72,17.16,3.67,17.16,2.62,17.16z"></path></g></g></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-tw"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Twitter" data-testid="share:button-icon-tw"><svg version="1.1" id="Logo__x2014__FIXED" x="0px" y="0px" viewBox="0 0 250 203.18" style="enable-background:new 0 0 250 203.18" xml:space="preserve"><path class="st0" d="M78.62,203.18c94.34,0,145.94-78.16,145.94-145.94c0-2.22-0.05-4.43-0.15-6.63
	c10.01-7.24,18.72-16.27,25.59-26.56c-9.19,4.08-19.08,6.83-29.46,8.07c10.59-6.35,18.72-16.4,22.55-28.37
	c-9.91,5.88-20.89,10.15-32.57,12.45C201.17,6.24,187.84,0,173.09,0c-28.33,0-51.3,22.97-51.3,51.29c0,4.03,0.45,7.94,1.33,11.69
	C80.5,60.84,42.69,40.43,17.4,9.39c-4.41,7.58-6.95,16.39-6.95,25.78c0,17.8,9.06,33.5,22.82,42.69
	c-8.41-0.26-16.32-2.57-23.23-6.42c-0.01,0.21-0.01,0.43-0.01,0.65c0,24.84,17.68,45.58,41.15,50.28c-4.31,1.17-8.84,1.8-13.52,1.8
	c-3.3,0-6.52-0.33-9.64-0.93c6.53,20.38,25.46,35.21,47.92,35.62c-17.56,13.76-39.67,21.96-63.7,21.96c-4.14,0-8.22-0.24-12.24-0.71
	C22.7,194.69,49.65,203.18,78.62,203.18"></path></svg></button></li><li data-type="new-window" class="style__Item-sc-1wyuot3-2 jZtuqC icon-rd"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Reddit" data-testid="share:button-icon-rd"><svg version="1.1" id="iconmonstr" x="0px" y="0px" viewBox="0 0 24 20" style="enable-background:new 0 0 24 20" xml:space="preserve"><path id="reddit-1" class="st0" d="M24,9.78c0-1.46-1.19-2.65-2.66-2.65c-0.71,0-1.36,0.29-1.84,0.75
	c-1.81-1.19-4.26-1.95-6.97-2.05l1.48-4.67l4.02,0.94c0,0.02-0.01,0.04-0.01,0.06c0,1.19,0.98,2.16,2.17,2.16
	c1.2,0,2.17-0.97,2.17-2.16C22.37,0.97,21.4,0,20.2,0c-0.92,0-1.7,0.57-2.02,1.38l-4.33-1.01c-0.19-0.05-0.38,0.06-0.44,0.25
	l-1.65,5.21c-2.84,0.03-5.41,0.8-7.3,2.02c-0.47-0.44-1.1-0.71-1.8-0.71C1.19,7.13,0,8.32,0,9.78c0,0.97,0.53,1.81,1.32,2.27
	c-0.05,0.28-0.09,0.57-0.09,0.86c0,3.91,4.81,7.09,10.72,7.09c5.91,0,10.72-3.18,10.72-7.09c0-0.27-0.03-0.54-0.08-0.81
	C23.43,11.65,24,10.78,24,9.78z M6.78,11.59c0-0.87,0.71-1.57,1.58-1.57s1.58,0.71,1.58,1.57c0,0.87-0.71,1.57-1.58,1.57
	S6.78,12.46,6.78,11.59z M15.84,16.26c-0.8,0.79-2.05,1.18-3.82,1.18c0,0-0.01,0-0.01,0c0,0-0.01,0-0.01,0
	c-1.78,0-3.03-0.39-3.82-1.18c-0.14-0.14-0.14-0.38,0-0.52c0.15-0.14,0.38-0.14,0.53,0c0.65,0.65,1.73,0.96,3.3,0.96
	c0,0,0.01,0,0.01,0c0,0,0.01,0,0.01,0c1.57,0,2.65-0.31,3.3-0.96c0.14-0.15,0.38-0.14,0.53,0C15.98,15.88,15.98,16.12,15.84,16.26z
	 M15.65,13.17c-0.87,0-1.58-0.71-1.58-1.57c0-0.87,0.71-1.57,1.58-1.57c0.87,0,1.58,0.71,1.58,1.57
	C17.23,12.46,16.52,13.17,15.65,13.17z"></path></svg></button></li><li data-type="popup" class="style__Item-sc-1wyuot3-2 jZtuqC icon-line"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Share on Line" data-testid="share:button-icon-line"><svg version="1.1" id="svg7898" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsSvg="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 217 206.8" style="enable-background:new 0 0 217 206.8" xml:space="preserve"><path class="st0" d="M108.5,0C48.7,0,0,39.5,0,88c0,43.5,38.6,80,90.7,86.9c3.5,0.8,8.3,2.3,9.6,5.3c1.1,2.7,0.7,7,0.3,9.8
	c0,0-1.3,7.7-1.5,9.3c-0.5,2.7-2.2,10.7,9.4,5.8c11.6-4.9,62.5-36.8,85.2-63C209.5,125,217,107.5,217,88C217,39.5,168.3,0,108.5,0z
	 M70.2,114c0,1.2-0.9,2.1-2.1,2.1H37.7c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V66.7c0-1.2,0.9-2.1,2.1-2.1h7.6
	c1.2,0,2.1,0.9,2.1,2.1v37.5h20.7c1.2,0,2.1,1,2.1,2.2V114z M88.6,114c0,1.2-0.9,2.1-2.1,2.1h-7.6c-1.2,0-2.1-0.9-2.1-2.1V66.7
	c0-1.2,0.9-2.1,2.1-2.1h7.6c1.1,0,2.1,0.9,2.1,2.1V114z M140.7,66.7v47.1c0,1.2-0.9,2.1-2.1,2.1H131c-0.1,0-0.3-0.1-0.5-0.1h-0.1
	c-0.1,0-0.1,0-0.1,0h-0.1h-0.1c-0.1,0-0.1,0-0.1,0l-0.1-0.1c-0.2-0.1-0.4-0.3-0.5-0.5l-21.7-29.3V114c0,1.2-0.9,2.1-2.1,2.1H98
	c-1.2,0-2.1-0.9-2.1-2.1V66.9c0-1.2,0.9-2.1,2.1-2.1h7.6c0.1,0,0.1,0,0.1,0h0.1h0.1h0.1h0.1c0.1,0,0.1,0,0.1,0h0.1
	c0.1,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0l0.1,0.1c0.1,0,0.1,0,0.1,0
	l0.1,0.1l0.1,0.1c0.1,0.1,0.2,0.1,0.2,0.2l21.7,29.3V66.7c0-1.2,0.9-2.1,2.1-2.1h7.6C140,64.6,140.9,65.5,140.7,66.7z M183,74.3
	c0,1.2-0.9,2.1-2.1,2.1l-20.7,0.1v8h20.7c1.2,0,2.1,0.9,2.1,2.1v7.6c0,1.2-0.9,2.1-2.1,2.1h-20.7v8h20.7c1.2,0,2.1,0.9,2.1,2.1v7.6
	c0,1.2-0.9,2.1-2.1,2.1h-30.4c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V66.7c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6
	h30.4c1.2,0,2.1,0.9,2.1,2.1V74.3z"></path></svg></button></li><li data-type="clipboard" class="style__Item-sc-1wyuot3-2 jZtuqC icon-lk"><button class="style__Button-sc-1wyuot3-3 cVVUUm button" aria-label="Copy Link" data-testid="share:button-icon-lk"><svg version="1.1" id="Layer_1_copy" x="0px" y="0px" viewBox="0 0 19 19" style="enable-background:new 0 0 19 19" xml:space="preserve"><path class="st0" d="M9.02,14.32c-0.22-0.06-0.43-0.15-0.64-0.24l-1.76,1.76c-0.95,0.95-2.5,0.95-3.46,0c-0.95-0.95-0.95-2.5,0-3.46
	l3.46-3.46c0.44-0.44,1.02-0.67,1.6-0.7c0.27-0.01,0.54,0.02,0.81,0.09c0.38,0.11,0.75,0.31,1.05,0.61
	c0.21,0.21,0.35,0.46,0.47,0.71c0.07-0.06,0.15-0.11,0.21-0.17l1.6-1.6C12.2,7.63,12.02,7.4,11.81,7.2
	c-0.41-0.41-0.86-0.72-1.35-0.95C10.18,6.11,9.9,6.01,9.61,5.93C8.5,5.63,7.3,5.74,6.24,6.24c-0.4,0.19-0.78,0.44-1.12,0.74
	C5.04,7.05,4.96,7.12,4.89,7.19l-3.46,3.46c-1.91,1.91-1.91,5.01,0,6.92c1.91,1.91,5.01,1.91,6.92,0l3.28-3.28
	C10.78,14.53,9.87,14.55,9.02,14.32z"></path><path class="st0" d="M17.57,1.43c-1.91-1.91-5.01-1.91-6.92,0L7.54,4.54c0.79-0.19,1.63-0.2,2.42,0.02c0.26,0.07,0.5,0.17,0.75,0.28
	l1.67-1.67c0.95-0.95,2.5-0.95,3.46,0c0.95,0.95,0.95,2.5,0,3.46l-3.46,3.46c-0.44,0.45-1.02,0.67-1.6,0.7
	c-0.27,0.01-0.54-0.02-0.81-0.1c-0.38-0.11-0.75-0.31-1.05-0.61C8.66,9.81,8.48,9.48,8.37,9.15C8.31,9.2,8.24,9.24,8.18,9.3
	l-1.65,1.65c0.19,0.3,0.4,0.59,0.66,0.86c0.41,0.41,0.86,0.72,1.35,0.95c0.27,0.13,0.55,0.23,0.84,0.31
	c1.11,0.3,2.31,0.19,3.37-0.31c0.4-0.19,0.78-0.44,1.12-0.74c0.08-0.07,0.16-0.13,0.23-0.21l3.46-3.46
	C19.48,6.44,19.48,3.34,17.57,1.43z"></path></svg></button><span class="style__CopiedMessage-sc-1wyuot3-4 fMzXlm message">Copied to clipboard</span></li></ul></div><div class="style__After-sc-mghyta-5 jyAgfl"><hr class="style__Line-sc-mghyta-2 gloFrY"/></div><div class="style__HorizontalLine-sc-mghyta-6 gpSzpa"></div><svg class="style__BottomHex-sc-mghyta-7 snKxM" version="1.1" id="Layer_1_copy_3" x="0px" y="0px" viewBox="0 0 11.48 16.45" style="enable-background:new 0 0 11.48 16.45" xml:space="preserve"><rect x="2.2" y="2.19" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.3714 5.7332)" class="st0" width="7.07" height="7.07"></rect><rect x="3.97" y="6.46" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.1392 6.4654)" class="st0" width="3.54" height="3.54"></rect><polyline class="st0" points="2.23,9.23 0.73,10.73 5.73,15.73 10.73,10.73 9.23,9.23 "></polyline></svg></div></section><footer id="riotbar-footer"></footer></div></div><div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div></div><script id="gatsby-script-loader">/*<![CDATA[*/window.pagePath="/en-pl/news/game-updates/patch-14-1-notes/";/*]]>*/</script><!-- slice-start id="_gatsby-scripts-1" -->
          <script
            id="gatsby-chunk-mapping"
          >
            window.___chunkMapping="{\"polyfill\":[\"/polyfill-73ac175bc5d001ccc1b3.js\"],\"app\":[\"/app-743b078192e9a3baa564.js\"],\"component---src-contentstack-content-types-articles-templates-default-index-tsx\":[],\"component---src-contentstack-content-types-articles-templates-patch-notes-index-tsx\":[\"/component---src-contentstack-content-types-articles-templates-patch-notes-index-tsx-d23a4a275b2de94ae04a.js\"],\"component---src-contentstack-content-types-categories-templates-default-index-tsx\":[\"/component---src-contentstack-content-types-categories-templates-default-index-tsx-1eea740af7501abf71e5.js\"],\"component---src-contentstack-content-types-champions-templates-default-index-tsx\":[\"/component---src-contentstack-content-types-champions-templates-default-index-tsx-44958299846a5074b8b4.js\"],\"component---src-contentstack-content-types-landing-pages-templates-default-index-tsx\":[\"/component---src-contentstack-content-types-landing-pages-templates-default-index-tsx-4ee05e9b40b84d80fcd8.js\"],\"component---src-contentstack-content-types-pages-templates-default-index-tsx\":[\"/component---src-contentstack-content-types-pages-templates-default-index-tsx-d20da1a59b05efa21b32.js\"],\"component---src-contentstack-content-types-tags-templates-default-index-tsx\":[\"/component---src-contentstack-content-types-tags-templates-default-index-tsx-69e3fa61147bea9d8783.js\"],\"component---src-gatsby-blank-tsx\":[\"/component---src-gatsby-blank-tsx-9a394186eb0e4833f318.js\"],\"component---src-pages-404-tsx\":[\"/component---src-pages-404-tsx-ec7a27831167c0799248.js\"]}";
          </script>
        <script>window.___webpackCompilationHash="2462a182d0ef7f60b603";</script><script src="/webpack-runtime-9a92e588257105d5fbb2.js" nomodule></script><script src="/polyfill-73ac175bc5d001ccc1b3.js" nomodule></script><script src="/webpack-runtime-9a92e588257105d5fbb2.js" async></script><script src="/framework-b46e673be238f2b2d9ed.js" async></script><script src="/app-743b078192e9a3baa564.js" async></script><!-- slice-end id="_gatsby-scripts-1" --></body></html>