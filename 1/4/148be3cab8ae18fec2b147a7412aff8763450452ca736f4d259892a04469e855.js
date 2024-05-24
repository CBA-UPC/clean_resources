!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};e.r(t),e.d(t,{RM:function(){return De}});var n=0,r={token:"empty token",errorCount:0,tjsToken:"8de4c78a3ec64020ab2ad15dea1ae9ff",tjsApp:"rmagent",tjsVersion:"3.6.0",getErrorUrl:function(){return"https://capture.trackjs.com/capture?token="+r.tjsToken+"&v="+r.tjsVersion+"&source=rm"},error:function(e,t){if(void 0===t&&(t=null),!(n>=2)){var i=e||{},o=i.message||"empty",a=i.stack||(new Error).stack;r.errorCount++;var s=(self.location||"").toString(),u={agentPlatform:"browser",console:[{message:JSON.stringify(e),severity:"log",timestamp:(new Date).toISOString()}],customer:{token:r.tjsToken,application:r.tjsApp,userId:r.token,version:"2.1.0"},entry:"catch",environment:{originalUrl:s,userAgent:navigator.userAgent},message:o,url:s,stack:a,timestamp:(new Date).toISOString(),version:r.tjsVersion};null!=t&&u.console.push({message:t,severity:"log",timestamp:(new Date).toISOString()});var c=new XMLHttpRequest;c.open("POST",r.getErrorUrl()),c.send(JSON.stringify(u)),n++}}};function i(){return"undefined"==typeof document}function o(e){return(e=e||"").indexOf("?")>=0&&(e=e.split("?")[0]),e.length>=1e3&&(e=e.substr(0,1e3)),e}function a(e,t){if((e=""+e).length<=t)return e;var n=e.length-t;return e.substr(0,t)+"...{"+n+"}"}function s(e,t){return void 0===t&&(t=0),parseFloat(e.toFixed(t))}function u(e,t,n){var r=e[t]||c;e[t]=n(r)}function c(){}function l(){return Math.floor(1e3*(Date.now()+Math.random()))}function d(e,t){try{for(var n=t.split("."),r=e,i=0;i<n.length;i++){if(!r[n[i]])return!1;r=r[n[i]]}return!0}catch(e){return!1}}function f(e){return e=e||{},Object.keys(e).forEach((function(t,n){n>25?delete e[t]:e[t]=a(e[t],100)})),e}function p(e){return Object.prototype.toString.call(e)}function m(e){return g(e)&&1===e.nodeType}function h(e){return"number"==typeof e||g(e)&&"[object Number]"===p(e)}function g(e){return!(!e||"object"!=typeof e)}function v(e){return"string"==typeof e||!y(e)&&g(e)&&"[object String]"===p(e)}function y(e){return"[object Array]"===p(e)}function S(e){if(!g(e))return!1;var t=p(e);return"[object Error]"===t||"[object DOMException]"===t||v(e.name)&&v(e.message)}function T(e){function t(e){for(var t="<"+e.tagName.toLowerCase(),n=e.attributes||[],r=0;r<n.length;r++)t+=" "+n[r].name+'="'+n[r].value+'"';return t+">"}var n,r="undefined";if(""===e)return"Empty String";if(void 0===e)return r;if(v(e)||h(e)||function(e){return"boolean"==typeof e||g(e)&&"[object Boolean]"===p(e)}(e)||function(e){return!(!e||"function"!=typeof e)}(e))return""+e;if(m(e))return t(e);if("symbol"==typeof e)return Symbol.prototype.toString.call(e);try{n=JSON.stringify(e,(function(e,n){return void 0===n?r:h(n)&&isNaN(n)?"NaN":S(n)?{name:n.name,message:n.message,stack:n.stack}:m(n)?t(n):n}))}catch(t){var i="";for(var o in e)if(e.hasOwnProperty(o))try{i+=',"'+o+'":"'+e[o]+'"'}catch(e){}n=i?"{"+i.replace(",","")+"}":"Unserializable Object"}return n.replace(/"undefined"/g,r).replace(/"NaN"/g,"NaN")}function E(e){if(!e)return"";if((e=e.toString()).startsWith("http")||i())return e;try{return new URL(e,document.baseURI).toString()}catch(t){return e}}var b=new(function(){function t(){var e=this;this.apiEntries=[],this.addEntry=function(t){t.url&&0===t.url.indexOf("http")&&(e.options.monitorSelfCalls||0!==t.url.indexOf(e.options.ingestUrl))&&e.apiEntries.push(t)}}return t.prototype.install=function(e){this.options=e,this.wrapFetch(),this.wrapXhr()},t.prototype.getApis=function(e){if(void 0===e&&(e=!1),e||this.apiEntries.length>=10){var t=this.apiEntries;return this.apiEntries=[],t}return[]},t.prototype.wrapFetch=function(){var t=this;u(e.g,"fetch",(function(n){return function(r,a){var u=r instanceof Request?r.url:r,c=r instanceof Request?r.method:(a||{}).method||"GET",l=n.apply(e.g,arguments);return l.__rm_state__={source:i()?"worker":"fetch",startedOn:s(performance.now()),method:c,requestUrl:E(u),pageUrl:o(self.location.toString())},l.then((function(e){var n=l.__rm_state__;if(n){var r=performance.now(),i={source:n.source,method:n.method,startedOn:n.startedOn,pageUrl:n.pageUrl,duration:s(r)-n.startedOn,statusCode:e.status,contentLength:e.headers.get("content-length"),contentType:e.headers.get("content-type"),url:e.url||n.requestUrl};t.addEntry(i)}return e})).catch((function(e){var n=l.__rm_state__;if(n){var r=performance.now(),i={source:n.source,method:n.method,startedOn:n.startedOn,pageUrl:n.pageUrl,duration:s(r)-n.startedOn,statusCode:0,contentLength:null,contentType:null,url:n.requestUrl};t.addEntry(i)}throw e}))}}))},t.prototype.wrapXhr=function(){if(!i()){var e=this;u(XMLHttpRequest.prototype,"open",(function(e){return function(t,n){var r=this;return r.__rm_state__={source:"xhr",method:t,requestUrl:E((n||"").toString())},e.apply(r,arguments)}})),u(XMLHttpRequest.prototype,"send",(function(t){return function(){var n=this,r=n.__rm_state__;return r?(n.__rm_state__=Object.assign(r,{startedOn:s(performance.now()),pageUrl:o(self.location.toString())}),n.addEventListener("readystatechange",(function(){if(4===n.readyState){var t=n.__rm_state__,r=performance.now(),i={source:t.source,method:t.method,startedOn:t.startedOn,pageUrl:t.pageUrl,duration:s(r)-t.startedOn,statusCode:n.status,url:n.responseURL||t.requestUrl,contentLength:n.getResponseHeader("content-length"),contentType:n.getResponseHeader("content-type")};e.addEntry(i)}}),!0),t.apply(n,arguments)):t.apply(n,arguments)}}))}},t}()),w=new(function(){function e(){this.errorEntries=[]}return e.prototype.install=function(e){this.options=e,this.watchGlobal(),this.watchPromise(),this.wrapConsole()},e.prototype.getErrors=function(e){if(void 0===e&&(e=!1),e||this.errorEntries.length>=1){var t=this.errorEntries;return this.errorEntries=[],t}return[]},e.prototype.addError=function(e){null!=e.message&&0!==e.message.toString().indexOf("Script error")&&this.errorEntries.push(e)},e.prototype.watchGlobal=function(){self.addEventListener("error",(function(e){try{if(!e||!e.error)return;w.addError({name:e.error.name,message:e.error.message,stack:e.error.stack,cause:e.error.cause?T(e.error.cause):void 0,time:s(performance.now()),entry:"global",pageUrl:self.location.toString()})}catch(e){r.error(e,"global error handler")}}))},e.prototype.watchPromise=function(){self.addEventListener("unhandledrejection",(function(e){try{if(!e)return;var t=e.reason;if(null==t)return;S(t)||(t=new Error(T(t))),w.addError({name:t.name,message:t.message,stack:t.stack,cause:t.cause?T(t.cause):void 0,time:s(performance.now()),entry:"promise",pageUrl:self.location.toString()})}catch(e){r.error(e,"promise error handler")}}))},e.prototype.wrapConsole=function(){u(self.console,"error",(function(e){return function(){try{var t,n=Array.prototype.slice.call(arguments);t=1===n.length&&S(n[0])?n[0]:new Error(1===n.length?T(n[0]):T(n)),w.addError({name:t.name,message:t.message,stack:t.stack,cause:t.cause?T(t.cause):void 0,time:s(performance.now()),entry:"console",pageUrl:self.location.toString()})}catch(e){r.error(e,"console error handler")}return e.apply(this,arguments)}}))},e}()),L="__rm_sid__",_="__rm_sid_ts__",k=!0;try{k=!localStorage.getItem(L)}catch(I){}var I,C,R,O,M,P={_sessionId:0,_storageDisabled:!1,isFirstVisit:k,getSessionId:function(){if(!self.performance)return 0;var e=Date.now(),t=0;if(this._storageDisabled&&this._sessionId)return this._sessionId;try{this._sessionId=parseInt(localStorage.getItem(L),10),t=parseInt(localStorage.getItem(_),10)}catch(e){this._storageDisabled=!0}if(!this._sessionId||this.isSessionExpired(e,t)){this._sessionId=l(),A.addEvent({name:"session_start",time:s(performance.now()),pageUrl:self.location.toString(),referrer:i()?"":document.referrer});try{localStorage.setItem(L,this._sessionId.toString()),this.refreshSession()}catch(e){this._storageDisabled=!0}}return this._sessionId},refreshSession:function(){try{localStorage.setItem(_,Date.now().toString())}catch(e){}},isSessionExpired:function(e,t){return!t||t+18e5<e}},A=new(function(){function e(){var e=this;this.eventEntries=[],this.onDocumentClicked=function(t){try{var n=e.getElementFromEvent(t);if(!n||!n.tagName)return;var i=e.getDescribedElement(n,"a")||e.getDescribedElement(n,"button")||e.getDescribedElement(n,"input",["button","submit"]),o=e.getDescribedElement(n,"input",["checkbox","radio"]);i?e.writeActivityEvent(i,"click"):o&&e.writeActivityEvent(o,"input",o.value,o.checked)}catch(e){r.error(e,"On Document Clicked Error")}},this.onInputChanged=function(t){try{var n=e.getElementFromEvent(t);if(!n||!n.tagName)return;var i=e.getDescribedElement(n,"textarea"),o=e.getDescribedElement(n,"select"),a=e.getDescribedElement(n,"input"),s=e.getDescribedElement(n,"input",["button","submit","hidden","checkbox","radio"]);i?e.writeActivityEvent(i,"input",i.value):o&&o.options&&o.options.length?e.onSelectInputChanged(o):a&&!s&&e.writeActivityEvent(a,"input",a.value)}catch(e){r.error(e,"On Input Changed Error")}},this.onFirstScroll=function(){document.removeEventListener("scroll",e.onFirstScroll),e.addEvent({name:"first_scroll",time:s(performance.now()),pageUrl:self.location.toString()})}}return e.prototype.install=function(e){this.options=e,this.wrapHistory(),this.wrapActivity(),this.addEvent({name:i()?"worker_init":"page_view",time:s(performance.now()),pageUrl:self.location.toString()})},e.prototype.getEvents=function(e){if(void 0===e&&(e=!1),e||this.eventEntries.length>=1){var t=this.eventEntries;return this.eventEntries=[],t}return[]},e.prototype.addEvent=function(e){P.refreshSession(),this.eventEntries.push(e)},e.prototype.wrapActivity=function(){i()||(document.addEventListener("click",this.onDocumentClicked,!0),document.addEventListener("blur",this.onInputChanged,!0),document.addEventListener("scroll",this.onFirstScroll,{once:!0,capture:!0,passive:!0}))},e.prototype.wrapHistory=function(){var e=this;if(this.isCompatible()){var t=this;self.addEventListener("popstate",(function(){e.addEvent({name:"popstate",time:s(performance.now()),pageUrl:self.location.toString()})}),!0),u(history,"pushState",(function(e){return function(){var n=e.apply(this,arguments);return t.addEvent({name:"pushState",time:s(performance.now()),pageUrl:self.location.toString()}),n}}))}},e.prototype.isCompatible=function(){return!i()&&!d(self,"chrome.app.runtime")&&d(self,"addEventListener")&&d(self,"history.pushState")},e.prototype.onSelectInputChanged=function(e){if(e.multiple)for(var t=0;t<e.options.length;t++)e.options[t].selected&&this.writeActivityEvent(e,"input",e.options[t].value);else e.selectedIndex>=0&&e.options[e.selectedIndex]&&this.writeActivityEvent(e,"input",e.options[e.selectedIndex].value)},e.prototype.writeActivityEvent=function(e,t,n,r){"password"===this.getElementType(e)&&(n=void 0),this.addEvent({name:t,time:s(performance.now()),pageUrl:self.location.toString(),element:{tag:e.tagName.toLowerCase(),attributes:this.getElementAttributes(e),value:this.getMetaValue(n,r),text:e.innerText?a(e.innerText,100):""}})},e.prototype.getElementFromEvent=function(e){return e.target||document.elementFromPoint(e.clientX,e.clientY)},e.prototype.getDescribedElement=function(e,t,n){if(e.closest){if(!(e=e.closest(t)))return null}else if(e.tagName.toLowerCase()!==t.toLowerCase())return null;if(!n)return e;for(var r=this.getElementType(e),i=0;i<n.length;i++)if(n[i]===r)return e;return null},e.prototype.getElementType=function(e){return(e.getAttribute("type")||"").toLowerCase()},e.prototype.getElementAttributes=function(e){for(var t={},n=Math.min(e.attributes.length,10),r=0;r<n;r++){var i=e.attributes[r],o=i.name;"data-value"!=o.toLowerCase()&&"value"!=o.toLowerCase()&&(t[i.name]=a(i.value,50))}return t},e.prototype.getMetaValue=function(e,t){return void 0===e?void 0:{length:e.length,pattern:this.matchInputPattern(e),checked:t}},e.prototype.matchInputPattern=function(e){return""===e?"empty":/^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e)?"email":/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e)||/^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(e)?"date":/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(e)?"usphone":/^\s*$/.test(e)?"whitespace":/^\d*$/.test(e)?"numeric":/^[a-zA-Z]*$/.test(e)?"alpha":/^[a-zA-Z0-9]*$/.test(e)?"alphanumeric":"characters"},e}()),U=function(){function e(){this.hasSentPage=!1}return e.prototype.getPageUrl=function(){return this.pageUrl||o(self.location.toString())},e.prototype.getPageEntry=function(){if(i())return null;if(this.hasSentPage)return null;var e=performance.getEntriesByType("navigation")[0],t=null;if(e)t={url:o(e.name&&0===e.name.indexOf("http")?e.name:self.location.toString()),tempFullUrl:0===e.name.indexOf("http")?e.name:self.location.toString(),referrer:i()?"":document.referrer,start:s(e.startTime),unloadTime:s(e.unloadEventEnd-e.unloadEventStart),redirectTime:s(e.redirectEnd-e.redirectStart),workerTime:0===e.workerStart?0:s(e.domainLookupStart-e.workerStart),dnsTime:s(e.domainLookupEnd-e.domainLookupStart),sslTime:s(e.connectEnd-e.connectStart),serverTime:s(e.responseEnd-e.requestStart),firstByteTime:s(e.responseStart),blockingAssetLoadTime:h(e.domInteractive)?s(e.domInteractive-e.responseEnd):0,domInteractive:h(e.domInteractive)?s(e.domInteractive):0,duration:s(e.duration),pageSize:e.transferSize,statusCode:e.responseStatus,proto:e.nextHopProtocol,type:e.type,decodedBodySize:e.decodedBodySize,encodedBodySize:e.encodedBodySize,deliveryType:e.deliveryType};else{var n=performance.timing;t={url:o(self.location.toString()),tempFullUrl:self.location.toString(),referrer:i()?"":document.referrer,start:0,unloadTime:s(n.unloadEventEnd-n.unloadEventStart),redirectTime:s(n.redirectEnd-n.redirectStart),workerTime:0,dnsTime:s(n.domainLookupEnd-n.domainLookupStart),sslTime:s(n.connectEnd-n.connectStart),serverTime:s(n.responseEnd-n.requestStart),firstByteTime:s(n.responseStart-n.navigationStart),blockingAssetLoadTime:s(n.domInteractive-n.responseEnd),domInteractive:s(n.domInteractive-n.navigationStart),duration:s(n.domComplete-n.navigationStart)}}return this.pageUrl=t.url,t},e.prototype.sentPage=function(){this.hasSentPage=!0},e}(),x=["safeframe.googlesyndication.com","chrome-extension:","moz-extension:"],D=function(){function e(){this.hasSent=!1,this.thirdPartyCache={}}return e.prototype.cacheResources=function(){this.hasSent||(e.cachedResourceTimings=e.getAllResources())},e.getAllResources=function(){var t=(e.cachedResourceTimings||[]).concat(performance.getEntriesByType("resource")),n={};return t.filter((function(t){if(!t||e.shouldIgnore(t))return!1;var r=t.name+t.startTime;return!n[r]&&(n[r]=!0,!0)}))},e.prototype.getPageResources=function(){var t=this;if(this.hasSent)return[];var n=performance.getEntriesByType("navigation")[0];if(!n)return[];var r=n.domInteractive,i=n.duration;return e.getAllResources().map((function(e){var n=t.getResourceType(e);if("xhr"===n)return null;if(e.startTime>=i+5e3)return null;var o="postload";return e.startTime<=r?o="blocking":e.startTime<=i&&(o="client"),{url:e.name,type:n,stage:o,renderBlockingStatus:e.renderBlockingStatus,proto:e.nextHopProtocol,start:h(e.startTime)?s(e.startTime):null,duration:h(e.duration)?s(e.duration):null,responseStatus:e.responseStatus,transferSize:e.transferSize,decodedBodySize:e.decodedBodySize,encodedBodySize:e.encodedBodySize,deliveryType:e.deliveryType}})).filter((function(e){return null!==e}))},e.prototype.getAllThirdPartyJs=function(){var t=this;return e.getAllResources().filter((function(e){if(!e||!t.isScript(e))return!1;if(!t.isThirdParty(e.name))return!1;var n=e.name;return!t.thirdPartyCache[n]&&(t.thirdPartyCache[n]=!0,!0)})).map((function(e){return{url:e.name,startedOn:s(e.startTime),duration:s(e.duration)}}))},e.shouldIgnore=function(e){return x.some((function(t){return e.name.toLowerCase().indexOf(t)>=0}))},e.prototype.getResourceType=function(e){return this.isCss(e)?"css":this.isImage(e)?"img":this.isFont(e)?"font":this.isScript(e)?"script":this.isVideo(e)?"video":this.isXhr(e)?"xhr":"other"},e.prototype.isImage=function(e){if("img"===e.initiatorType)return!0;try{if("css"===e.initiatorType||"link"===e.initiatorType){var t=new URL(e.name).pathname.toLowerCase();return[".jpg",".jpeg",".png",".gif",".svg",".raw",".webp",".heif",".avif"].some((function(e){return t.endsWith(e)}))}}catch(e){}return!1},e.prototype.isScript=function(e){if("script"===e.initiatorType)return!0;try{if("link"===e.initiatorType||"other"===e.initiatorType)return new URL(e.name).pathname.toLowerCase().endsWith(".js")}catch(e){}return!1},e.prototype.isVideo=function(e){return"video"===e.initiatorType},e.prototype.isXhr=function(e){return"fetch"===e.initiatorType||"xmlhttprequest"===e.initiatorType},e.prototype.isCss=function(e){if("link"!==e.initiatorType&&"css"!==e.initiatorType)return!1;try{return new URL(e.name).pathname.toLowerCase().indexOf("css")>=0}catch(e){}return!1},e.prototype.isFont=function(e){if("link"!==e.initiatorType&&"css"!==e.initiatorType&&"other"!==e.initiatorType)return!1;try{var t=new URL(e.name).pathname.toLowerCase();return[".woff",".woff2",".ttf",".eot",".otf"].some((function(e){return t.endsWith(e)}))}catch(e){}return!1},e.prototype.isThirdParty=function(e){try{return new URL(e).origin!==self.location.origin}catch(e){}return!1},e.prototype.sentPageResources=function(){this.hasSent=!0,e.cachedResourceTimings=null},e.cachedResourceTimings=null,e}(),j=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},B=function(e){if("loading"===document.readyState)return"loading";var t=j();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},F=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},q=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:F(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},N=-1,z=function(){return N},V=function(e){addEventListener("pageshow",(function(t){t.persisted&&(N=t.timeStamp,e(t))}),!0)},Q=function(){var e=j();return e&&e.activationStart||0},H=function(e,t){var n=j(),r="navigate";return z()>=0?r="back-forward-cache":n&&(document.prerendering||Q()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},$=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},X=function(e,t,n,r){var i,o;return function(a){t.value>=0&&(a||r)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},J=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},Y=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},W=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},G=-1,Z=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},K=function(e){"hidden"===document.visibilityState&&G>-1&&(G="visibilitychange"===e.type?e.timeStamp:0,te())},ee=function(){addEventListener("visibilitychange",K,!0),addEventListener("prerenderingchange",K,!0)},te=function(){removeEventListener("visibilitychange",K,!0),removeEventListener("prerenderingchange",K,!0)},ne=function(){return G<0&&(G=Z(),ee(),V((function(){setTimeout((function(){G=Z(),ee()}),0)}))),{get firstHiddenTime(){return G}}},re=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},ie=[1800,3e3],oe=function(e,t){t=t||{},re((function(){var n,r=ne(),i=H("FCP"),o=$("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-Q(),0),i.entries.push(e),n(!0)))}))}));o&&(n=X(e,i,ie,t.reportAllChanges),V((function(r){i=H("FCP"),n=X(e,i,ie,t.reportAllChanges),J((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},ae=[.1,.25],se={passive:!0,capture:!0},ue=new Date,ce=function(e,t){I||(I=t,C=e,R=new Date,fe(removeEventListener),le())},le=function(){if(C>=0&&C<R-ue){var e={entryType:"first-input",name:I.type,target:I.target,cancelable:I.cancelable,startTime:I.timeStamp,processingStart:I.timeStamp+C};O.forEach((function(t){t(e)})),O=[]}},de=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){ce(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,se),removeEventListener("pointercancel",r,se)};addEventListener("pointerup",n,se),addEventListener("pointercancel",r,se)}(t,e):ce(t,e)}},fe=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,de,se)}))},pe=[100,300],me=function(e,t){t=t||{},re((function(){var n,r=ne(),i=H("FID"),o=function(e){e.startTime<r.firstHiddenTime&&(i.value=e.processingStart-e.startTime,i.entries.push(e),n(!0))},a=function(e){e.forEach(o)},s=$("first-input",a);n=X(e,i,pe,t.reportAllChanges),s&&Y(W((function(){a(s.takeRecords()),s.disconnect()}))),s&&V((function(){var r;i=H("FID"),n=X(e,i,pe,t.reportAllChanges),O=[],C=-1,I=null,fe(addEventListener),r=o,O.push(r),le()}))}))},he=0,ge=1/0,ve=0,ye=function(e){e.forEach((function(e){e.interactionId&&(ge=Math.min(ge,e.interactionId),ve=Math.max(ve,e.interactionId),he=ve?(ve-ge)/7+1:0)}))},Se=function(){return M?he:performance.interactionCount||0},Te=function(){"interactionCount"in performance||M||(M=$("event",ye,{type:"event",buffered:!0,durationThreshold:0}))},Ee=[200,500],be=0,we=function(){return Se()-be},Le=[],_e={},ke=function(e){var t=Le[Le.length-1],n=_e[e.interactionId];if(n||Le.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};_e[r.id]=r,Le.push(r)}Le.sort((function(e,t){return t.latency-e.latency})),Le.splice(10).forEach((function(e){delete _e[e.id]}))}},Ie=[2500,4e3],Ce={},Re=[800,1800],Oe=function e(t){document.prerendering?re((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},Me=function(e,t){t=t||{};var n=H("TTFB"),r=X(e,n,Re,t.reportAllChanges);Oe((function(){var i=j();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;n.value=Math.max(o-Q(),0),n.entries=[i],r(!0),V((function(){n=H("TTFB",0),(r=X(e,n,Re,t.reportAllChanges))(!0)}))}}))},Pe=function(){function e(){var e=this;if(this.vitalsSent=!1,this.metricQueue={},this.addToQueue=function(t){e.metricQueue[t.name]=t},!i())try{!function(e,t){!function(e,t){t=t||{},oe(W((function(){var n,r=H("CLS",0),i=0,o=[],a=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=o[0],n=o[o.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,n())},s=$("layout-shift",a);s&&(n=X(e,r,ae,t.reportAllChanges),Y((function(){a(s.takeRecords()),n(!0)})),V((function(){i=0,r=H("CLS",0),n=X(e,r,ae,t.reportAllChanges),J((function(){return n()}))})),setTimeout(n,0))})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:q(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:B(t.startTime)})}}var r;e.attribution={}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){me((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:q(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:B(t.startTime)}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){oe((function(t){!function(e){if(e.entries.length){var t=j(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:B(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:B(z())}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){!function(e,t){t=t||{},re((function(){var n,r=ne(),i=H("LCP"),o=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-Q(),0),i.entries=[t],n())},a=$("largest-contentful-paint",o);if(a){n=X(e,i,Ie,t.reportAllChanges);var s=W((function(){Ce[i.id]||(o(a.takeRecords()),a.disconnect(),Ce[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(s,0)}),!0)})),Y(s),V((function(r){i=H("LCP"),n=X(e,i,Ie,t.reportAllChanges),J((function(){i.value=performance.now()-r.timeStamp,Ce[i.id]=!0,n(!0)}))}))}}))}((function(t){!function(e){if(e.entries.length){var t=j();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],o=Math.max(0,t.responseStart-n),a=Math.max(o,i?(i.requestStart||i.startTime)-n:0),s=Math.max(a,i?i.responseEnd-n:0),u=Math.max(s,r?r.startTime-n:0),c={element:q(r.element),timeToFirstByte:o,resourceLoadDelay:a-o,resourceLoadTime:s-a,elementRenderDelay:u-s,navigationEntry:t,lcpEntry:r};return r.url&&(c.url=r.url),i&&(c.lcpResourceEntry=i),void(e.attribution=c)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){!function(e,t){t=t||{},re((function(){var n;Te();var r,i=H("INP"),o=function(e){e.forEach((function(e){e.interactionId&&ke(e),"first-input"===e.entryType&&!Le.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&ke(e)}));var t,n=(t=Math.min(Le.length-1,Math.floor(we()/50)),Le[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},a=$("event",o,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});r=X(e,i,Ee,t.reportAllChanges),a&&("interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),Y((function(){o(a.takeRecords()),i.value<0&&we()>0&&(i.value=0,i.entries=[]),r(!0)})),V((function(){Le=[],be=Se(),i=H("INP"),r=X(e,i,Ee,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:q(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:B(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}(this.addToQueue,{reportAllChanges:!0}),function(e,t){Me((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),o=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:o-i,requestTime:e.value-o,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue)}catch(e){}}return e.prototype.getVitals=function(e){var t;if(this.vitalsSent)return null;if(0===Object.keys(this.metricQueue).length)return null;var n={url:e};if(this.metricQueue.FCP){var r=this.metricQueue.FCP;n.fcp=s(r.value),n.fcpLoadState=null===(t=r.attribution)||void 0===t?void 0:t.loadState}if(this.metricQueue.LCP){var i=this.metricQueue.LCP;n.lcp=s(i.value),i.attribution&&(n.lcpElement=i.attribution.element,n.lcpUrl=i.attribution.url,n.lcpElementRenderDelay=h(i.attribution.elementRenderDelay)?s(i.attribution.elementRenderDelay):null,n.lcpResourceLoadDelay=h(i.attribution.resourceLoadDelay)?s(i.attribution.resourceLoadDelay):null,n.lcpResourceLoadTime=h(i.attribution.resourceLoadTime)?s(i.attribution.resourceLoadTime):null)}if(this.metricQueue.CLS){var o=this.metricQueue.CLS;n.cls=s(o.value,5),o.attribution&&(n.clsLargestShiftTarget=o.attribution.largestShiftTarget,n.clsLargestShiftTime=h(o.attribution.largestShiftTime)?s(o.attribution.largestShiftTime):null,n.clsLargestShiftValue=h(o.attribution.largestShiftValue)?s(o.attribution.largestShiftValue,5):null,n.clsLargestShiftLoadState=o.attribution.loadState)}if(this.metricQueue.FID){var a=this.metricQueue.FID;n.fid=s(a.value),a.attribution&&(n.fidEventTarget=a.attribution.eventTarget,n.fidEventTime=h(a.attribution.eventTime)?s(a.attribution.eventTime):null,n.fidEventType=a.attribution.eventType,n.fidLoadState=a.attribution.loadState)}if(this.metricQueue.INP){var u=this.metricQueue.INP;n.inp=s(u.value),u.attribution&&(n.inpEventTarget=u.attribution.eventTarget,n.inpEventTime=h(u.attribution.eventTime)?s(u.attribution.eventTime):null,n.inpEventType=u.attribution.eventType,n.inpLoadState=u.attribution.loadState)}return this.metricQueue.TTFB&&(n.ttfb=s(this.metricQueue.TTFB.value)),n.lcp&&!n.cls&&(n.cls=0),n},e.prototype.sentVitals=function(){this.vitalsSent=!0},e}(),Ae=function(){return(Ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Ue=function(){function e(t){var n=this;if(this.timeOrigin=null,this.pageService=new U,this.resourceService=new D,this.shutdownSend=!1,this.sendCount=0,this.pageViewId=l(),this.sessionId=P.getSessionId(),this.user=null,this.metadata={},this.getIngestUrl=function(){return"".concat(n.options.ingestUrl,"?token=").concat(n.options.token,"&v=").concat("2.1.0")},this.hasSentMeasures=!1,this.sendBeacon=function(){try{var e=n.getPayload(!0);if(e.source="beacon",navigator.sendBeacon&&n.payloadHasData(e)){n.clearPayloadAfterSend(e);var t=n.getIngestUrl(),i=JSON.stringify(e);try{navigator.sendBeacon(t,i)}catch(e){}}}catch(e){r.error(e)}},self.performance&&self.performance.getEntriesByType&&self.URL&&self.URL.prototype&&"hostname"in self.URL.prototype){var o,a=performance.getEntriesByType("navigation")||[];(i()||a.length||performance.timing)&&(this.options=Object.keys(e.defaults).reduce((function(n,r){return n[r]=t[r]||e.defaults[r],n}),{}),this.timeOrigin=performance.timeOrigin||(performance.timing||{}).navigationStart||(new Date).getTime(),b.install(this.options),A.install(this.options),w.install(this.options),this.manageResourceBuffer(),o=function(){try{n.webVitalsObserver=new Pe,P.refreshSession(),setTimeout((function(){return n.checkAndSend()}),2e4),setInterval((function(){return n.checkAndSend()}),6e4),self.addEventListener("pagehide",(function(){A.addEvent({name:"page_leave",time:s(performance.now()),pageUrl:self.location.toString()}),n.sendBeacon()})),self.addEventListener("visibilitychange",(function(){i()||"hidden"!==document.visibilityState?i()||"visible"!==document.visibilityState||(n.sessionId=P.getSessionId()):n.sendBeacon()}))}catch(e){r.error(e)}},i()||"complete"===document.readyState?o():document.addEventListener("readystatechange",(function(e){"complete"===document.readyState&&o()})))}}return e.prototype.identify=function(e,t){e=null==e?void 0:e.toString(),t=f(t),this.user=Ae({userId:e},t)},e.prototype.sendEvent=function(e,t,n){void 0===n&&(n=null),t=f(t),A.addEvent({name:"custom",customName:e,time:s(n||performance.now()),pageUrl:self.location.toString(),metadata:t})},e.prototype.track=function(e,t,n){void 0===n&&(n=null),t=f(t),w.addError({name:e.name,message:e.message,stack:e.stack,cause:e.cause?T(e.cause):void 0,time:s(n||performance.now()),entry:"direct",pageUrl:self.location.toString(),metadata:t})},e.prototype.addMetadata=function(e){this.metadata=Object.assign(this.metadata,e),this.metadata=f(this.metadata)},e.prototype.getDevice=function(){try{if(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return"mobile"}catch(e){}return"desktop"},e.prototype.getNetworkType=function(){try{var e=null===navigator||void 0===navigator?void 0:navigator.connection;return e?"".concat(e.effectiveType,":").concat(e.downlink,":").concat(e.rtt):null}catch(e){return null}},e.prototype.getMeasures=function(){if(this.hasSentMeasures)return[];this.hasSentMeasures=!0;try{return performance.getEntriesByType("measure").map((function(e){return{name:e.name,startTime:s(e.startTime),duration:s(e.duration)}}))}catch(e){return r.error(e,"Failed to get measures"),[]}},e.prototype.getPayload=function(e){var t;return void 0===e&&(e=!1),{token:this.options.token,timeOrigin:new Date(this.timeOrigin).toISOString(),timeSent:(new Date).toISOString(),device:this.getDevice(),pageViewId:this.pageViewId,sessionId:this.sessionId,isFirstVisit:P.isFirstVisit,page:this.pageService.getPageEntry(),pageResources:this.resourceService.getPageResources(),vitals:null===(t=this.webVitalsObserver)||void 0===t?void 0:t.getVitals(this.pageService.getPageUrl()),measures:this.getMeasures(),metadata:this.metadata,networkType:this.getNetworkType(),api:b.getApis(e),events:A.getEvents(e),errors:w.getErrors(e),js:this.resourceService.getAllThirdPartyJs(),env:{lang:navigator.language,width:i()?null:null===screen||void 0===screen?void 0:screen.width,height:i()?null:null===screen||void 0===screen?void 0:screen.height,dpr:i()?null:null===window||void 0===window?void 0:window.devicePixelRatio,memory:navigator.deviceMemory},user:this.user}},e.prototype.payloadHasData=function(e){return!(this.shutdownSend||this.sendCount>=60||!e||!(e.page||e.pageResources.length||e.vitals||e.api.length||e.events.length||e.errors.length||e.js.length))},e.prototype.shouldSendInterval=function(e){return!!this.payloadHasData(e)&&!!(e.page||e.pageResources.length||e.vitals||i()||e.api.length>0||e.events.length>0||e.errors.length>0||e.js.length>0)},e.prototype.checkAndSend=function(){var e=this;try{var t=this.getPayload();if(t.source="polling",!this.shouldSendInterval(t))return;this.clearPayloadAfterSend(t);var n=new XMLHttpRequest;n.open("POST",this.getIngestUrl()),n.setRequestHeader("Content-Type","application/json"),n.addEventListener("load",(function(){n.status>=400&&(e.shutdownSend=!0)})),n.send(JSON.stringify(t))}catch(e){r.error(e)}},e.prototype.clearPayloadAfterSend=function(e){var t;this.sendCount++,e.page&&this.pageService.sentPage(),e.vitals&&(null===(t=this.webVitalsObserver)||void 0===t||t.sentVitals()),e.pageResources.length>0&&this.resourceService.sentPageResources()},e.prototype.manageResourceBuffer=function(){var e=this;performance.setResourceTimingBufferSize&&performance.setResourceTimingBufferSize(1e3);var t=function(t){e.resourceService.cacheResources(),performance.clearResourceTimings()};if(performance.addEventListener)try{performance.addEventListener("resourcetimingbufferfull",t)}catch(e){}else performance.onresourcetimingbufferfull=t},e.defaults={token:null,ingestUrl:"https://in.requestmetrics.com/v1",monitorSelfCalls:!1},e}(),xe={__agent:null,version:"2.1.0",install:function(e){try{if(xe.__agent)return void console.warn("Request Metrics is already installed.");if("undefined"==typeof self)return void console.warn("Request Metrics does not operate in this environment.");if(!e||!e.token)return void console.error("You must provide a token to install Request Metrics.");r.token=e.token,xe.__agent=new Ue(e)}catch(e){r.error(e)}},identify:function(e,t){try{return xe.__agent?e?xe.__agent.identify(e,t):void console.warn("You must provide a userId."):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},sendEvent:function(e,t,n){void 0===n&&(n=null);try{return xe.__agent?e?(!t||g(t)&&!y(t)||(console.warn("Metadata must be an object"),t=null),xe.__agent.sendEvent(e,t,n)):void console.warn("You must provide an event name."):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},track:function(e,t,n){void 0===n&&(n=null);try{return xe.__agent?S(e)?xe.__agent.track(e,t,n):void console.warn("You must provide an instance of Error"):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},addMetadata:function(e){try{if(!xe.__agent)return void console.warn("Request Metrics isn't installed.");if(!e)return;return xe.__agent.addMetadata(e)}catch(e){r.error(e)}}},De=xe;return function(){try{if(i())return;if(!document.querySelector)return;if(self.RM&&self.RM._options)return xe.install(self.RM._options),self.RM._userId&&xe.identify(self.RM._userId,self.RM._identifyOptions),self.RM._events&&self.RM._events.forEach((function(e){xe.sendEvent(e.eventName,e.metadata,e.time)})),self.RM._errors&&self.RM._errors.forEach((function(e){xe.track(e.error,e.metadata,e.time)})),void(self.RM._metadata&&xe.addMetadata(self.RM._metadata));var e=document.querySelector("[data-rm-token]");if(!e)return;var t=e.getAttribute("data-rm-token");if(!t)return;r.token=t,xe.install({token:t,ingestUrl:e.getAttribute("data-rm-ingest"),monitorSelfCalls:!!e.getAttribute("data-rm-monitor-self")});var n=e.getAttribute("data-rm-userId");n&&xe.identify(n)}catch(e){r.error(e)}}(),t}()}));
//# sourceMappingURL=rm.js.map                 </li>
                                <li>oder</li>
                                <li>
                                    <a class="button button-small"
                                       data-gaevent="ResultsBrowse,LoginBegin"
                                       href="/m-einloggen.html?targetUrl=%2Fs-babyschalen-kindersitze%2Fc21">
                                        <i class="button-icon button-icon-medium icon-my-interactive"></i><span>Einloggen</span></a>
                                </li>
                            </ul>
                        </nav>
                    </section>
            </section>

        <section id="site-searchbar" class="a-green bar">
            <div class="bar-inner l-page-wrapper">
                <div class="l-row">
                    <div class="a-span-17 l-col">
                        <div id="site-search">
                                    <form id="site-search-form" style="margin: 0" action="/s-suchanfrage.html" method="get"><div class="l-row">
                                            <div class="a-span-10 l-col">
                                                <div id="site-search-what" class="splitfield">

                                                    <div class="splitfield-left">
                                                        <!-- SuggestionWidget  start -->
<div id="site-search-query-wrp" class="suggestionbox "
     data-ajaxurl=""
     data-algolia-index="ebayk_prod_suggest"
     data-algolia-app-id="8YS7J0Y0H2"
     data-algolia-api-key="a29d2bf6a595867b238e885289dddadf"
     data-suggest=''> <input type="text" id="site-search-query"
                   
                   class="splitfield-input is-not-clearable" name="keywords" tabindex="1" title=""
                   placeholder="Was suchst du?"
                   value=""
                    />

    </div>
</div>


                                                    <div id="site-search-ctgry"
                                                         class="multiselectbox splitfield-right"
                                                         data-ajaxurl="/s-kategorie-baum.html">
                                                        <input
                                                                class="splitfield-dropdown splitfield-input"
                                                                tabindex="2" id="srch-ctgry-inpt"
                                                                readonly="readonly"
                                                                type="text"
                                                                value="Babyschalen &amp; Kindersitze "/>
                                                        <input type="hidden"
                                                               value="21"
                                                               name="categoryId"
                                                               id="search-category-value"/>
                                                        <ul class="dropdown-list multiselectbox-list">
                                                            <li class="multiselectbox-option"><a
                                                                    class="multiselectbox-link"
                                                                    data-val="0">Alle Kategorien</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="a-span-10 l-col">
                                                <div id="site-search-where" class="splitfield">
                                                    <div class="splitfield-left">
                                                        <!-- SuggestionWidget  start -->
<div id="site-search-area-wrp" class="suggestionbox "
     data-ajaxurl="/s-ort-empfehlungen.json"
     data-algolia-index=""
     data-algolia-app-id=""
     data-algolia-api-key=""
     data-suggest=''> <input type="text" id="site-search-area"
                   
                   class="splitfield-input is-not-clearable" name="locationStr" tabindex="3" title=""
                   placeholder="PLZ oder Ort"
                   value=""
                    />

    <input class="j-suggstnbx-key" type="hidden" value="" name="locationId" />
    </div>
</div>

                                                    <div id="site-search-distance"
                                                         class="a-short splitfield-right">
                                                        <div class="selectbox">
                                                            <input id="site-search-distance-inpt"
                                                                   class="splitfield-input splitfield-dropdown"
                                                                   tabindex="4" type="text" value=""
                                                                   autocomplete="off"
                                                                   readonly="readonly"/>
                                                            <input id="site-search-distance-value"
                                                                   type="hidden" value=""
                                                                   name="radius"/>
                                                            <ul id="site-search-distance-list"
                                                                class="dropdown-list selectbox-list">
                                                                <li class="selectbox-option is-selected" data-value="0">
    Ganzer Ort</li>
<li class="selectbox-option " data-value="5">
    + 5 km</li>
<li class="selectbox-option " data-value="10">
    + 10 km</li>
<li class="selectbox-option " data-value="20">
    + 20 km</li>
<li class="selectbox-option " data-value="30">
    + 30 km</li>
<li class="selectbox-option " data-value="50">
    + 50 km</li>
<li class="selectbox-option " data-value="100">
    + 100 km</li>
<li class="selectbox-option " data-value="150">
    + 150 km</li>
<li class="selectbox-option " data-value="200">
    + 200 km</li>
</ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="a-span-4 l-col">
                                                <button
                 id="site-search-submit" class="button button-overgreen button-small"  type="submit" >
            <i class="button-icon icon-magnifier-white button-icon-medium"></i>
            <span>Finden</span>
            </button>
    </div>
                                        </div>

                                        <input type="hidden" name="sortingField"
                                               value="SORTING_DATE"
                                               id="search-sorting-field"/>
                                        <input type="hidden" id="search-adType-field" name="adType"
                                               value=""/>
                                        <input type="hidden" id="search-posterType-field"
                                               name="posterType"
                                               value=""/>
                                        <input type="hidden" id="search-pageNum" name="pageNum"
                                               value="1"/>
                                        <input type="hidden" id="search-action" name="action"
                                               value="find"/>
                                        <input type="hidden" name="maxPrice"
                                               value=""/>
                                        <input type="hidden" name="minPrice"
                                               value=""/>
                                        <input type="hidden" name="buyNowEnabled"
                                               value="false"/>
                                        <input type="hidden" name="shippingCarrier"
                                               value=""/>
                                        <input type="hidden" name="shipping"
                                               value=""/>
                                        </form></div>
                            </div>
                    <div class="a-span-7 l-col">
                        <nav id="site-mainnav" class="mainnav position-right-bottom">
                                <ul class="">
                                    <li id="site-mainnav-postad"
                                        class="mainnav-item mainnav-postad ">
                                        <a data-gaevent="ResultsBrowse,PostAdBegin"
                                           id="site-mainnav-postad-link" class="mainnav-item-inner"
                                           href="/p-anzeige-aufgeben-schritt2.html">Anzeige aufgeben</a>
                                    </li>
                                    <li id="site-mainnav-my"
                                        class="mainnav-item mainnav-my "
                                        aria-haspopup="true">
                                        <a data-gaevent="ResultsBrowse,MyAdsClick"
                                           id="site-mainnav-my-link" class="mainnav-item-inner"
                                           href="/m-meine-anzeigen.html">Meins</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </div>
        </section>

        <section id="site-header-sub" class="is-hidden">
            <nav id="site-subnav" class="mainnav-sub">
                    <ul>
                        <li class="mainnav-sub-item">
                            <a id="site-subnav-msgbox" class="mainnav-sub-link"
                               href="/m-nachrichten.html">
                                Nachrichten</a>
                        </li>
                        <li class="mainnav-sub-item">
                            <a id="site-subnav-myads" class="mainnav-sub-link"
                               href="/m-meine-anzeigen.html">Anzeigen</a>
                        </li>

                        <li class="mainnav-sub-item">
                            <a id="site-subnav-settings" class="mainnav-sub-link"
                               href="/m-einstellungen.html">
                                Einstellungen</a>
                        </li>
                        </ul>
                    <hr>
                    <div class="mainnav-sub-header">Favoriten</div>
                    <ul>
                        <li class="mainnav-sub-item">
                            <a id="site-subnav-watchlist" class="mainnav-sub-link"
                               href="/m-merkliste.html">
                                Merkliste</a>
                        </li>
                        <li class="mainnav-sub-item">
                            <a class="mainnav-sub-link"
                               href="/m-meine-nutzer.html">
                                Nutzer</a>
                        </li>
                        <li class="mainnav-sub-item">
                            <a id="site-subnav-sase" class="mainnav-sub-link"
                               href="/m-meine-suchen.html">
                                Suchaufträge</a>
                        </li>
                    </ul>
                </nav>
            </section>
</header>
<noscript>
        <div class="l-page-wrapper l-container-row">
            <div class="outcomemessage-error">
                Um diese Seite nutzen zu k&ouml;nnen, m&uuml;ssen Sie in Ihren Browser-Einstellungen
                JavaScript aktivieren.
            </div>
        </div>
    </noscript>
<div class="site-base">
                <div class="site-base--left-banner">
                    <div class="site-base--left-banner--top">
                                <div id="banner-skyscraper-left" class="sticky-advertisement">
                                    <div
            data-liberty-position-name="srpb-sky-atf-left"
            
            class="l-container"
        ></div>
        </div>
                            </div>
                            <div class="site-base--left-banner--bottom">
                                <div id="banner-skyscraper-left-bottom"
                                     class="sticky-advertisement">
                                    <div
            data-liberty-position-name="srpb-sky-btf-left-below"
            
            class="l-container"
        ></div>
        </div>
                            </div>
                        </div>
                <div class="site-base--content">
                    <div id="site-content"
                         class="l-page-wrapper l-container-row  ">

                        <div id="browser-unsupported-warning" class="outcomebox-error" style="display: none">
    <header><div>Bitte aktualisiere deinen Browser</div></header>
    <div class="outcomebox--body">
        <div><img src="https://static.kleinanzeigen.de/static/img/common/illustrations/connection-issue.vfwgydoqmp1t.svg" alt="" width="79" height="79" /></div>
        <p>Viele Deals wurden auf Kleinanzeigen gemacht, seit dein Browser das Licht der Welt erblickt hat. Um weiterhin alle Funktionen einwandfrei nutzen zu können, solltest du ihn aktualisieren.
            Wir empfehlen <a href="https://www.google.com/intl/de/chrome/" target="_blank" rel="nofollow">Google Chrome</a>, <a href="https://www.mozilla.org/de/firefox/new/" target="_blank" rel="nofollow">Mozilla Firefox</a>,
            <a href="https://www.microsoft.com/de-de/edge" target="_blank" rel="nofollow">Microsoft Edge</a> oder <a href="https://support.apple.com/de-de/HT204416" target="_blank" rel="nofollow">Safari</a>, falls du macOS benutzt.
        </p>
    </div>
</div>

<script type="text/javascript">

    function isES2021Supported() {
       /*
        Check ECMAScript 2021 features which are supported by all browsers we want to support
        */
       return typeof String.prototype.replaceAll === "function"
           && typeof FinalizationRegistry === "function"
           && typeof Promise.any === "function";
    }

    function showWarningIfBrowserUnsupported() {
        try {
            var browserSupported = isES2021Supported()
            if(!browserSupported) {
                document.getElementById("browser-unsupported-warning").style.display = "block"
            }

            if("undefined"!==typeof(LUX)){
                LUX.addData("browserSupported", browserSupported.toString());
            }

        } catch( error) {
            console.error(error);
        }
    }
    showWarningIfBrowserUnsupported()
</script>
<!-- required by ebayk-criteo-tracking -->
<script type="text/javascript" data-src="https://static.criteo.net/js/ld/ld.js" data-consent-interpretation-flag="criteoAllowed" async></script>
<script>(function (w, d, dn, t) {
    w[dn] = w[dn] || [];
    w[dn].push({eventType: 'init', value: t, dc: ''});
    var f = d.getElementsByTagName('script')[0], c = d.createElement('script');
    c.async = true;
    c.setAttribute('data-src','https://tags.creativecdn.com/tHYYt3p8vtIXMT9NzRdK.js');
    c.setAttribute("data-consent-interpretation-flag","rtbHouseAllowed");
    f.parentNode.insertBefore(c, f);
})(window, document, 'rtbhEvents', 'tHYYt3p8vtIXMT9NzRdK');</script>
<script type="application/javascript"
            src="https://www.kleinanzeigen.de/bffstatic/srp-frontend/srp-frontend-bundle.js"></script>

    <script>
        const brands = [];
        
        window.brands = brands;
    </script>

    <div id="promotion-interstitial"></div>

<script>
    window.ekPromotion = {
        containerId: 'promotion-interstitial',
        campaignName: null,
        isLoggedIn: false
    };
</script>
<div class="l-container-row l-splitpage-flex">
        <div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="breadcrump">
            <a class="breadcrump-link" itemprop="url" href="/"
               title="Kleinanzeigen ">
                <span itemprop="title">Kleinanzeigen </span>
            </a>
            <a class="breadcrump-link" itemprop="url" href="/s-familie-kind-baby/c17"><span
                                    itemprop="title">Familie, Kind &amp; Baby</span></a>
                        <h1><span class="breadcrump-leaf">
                Babyschalen &amp; Kindersitze</span>
                    <span class="breadcrump-summary">1 - 25 von 199.195 Kindersitz in Deutschland</span>
                </h1>
        </div>
        <div class="srchresult-sorting">
            <span id="j-sorting-info-button">
                    <i class="icon icon-small icon-info-gray"></i>
                </span>
                <span>Sortieren nach: </span>
                <div id="sortingField-selector" class="textdropdown">
    <div id="sortingField-selector-inpt" class="textdropdown-input" data-text="Neueste zuerst">Neueste zuerst</div>
    <input id="sortingField-selector-value" type="hidden" value="" name="sortingField" />
    <ul id="sortingField-selector-list" class="textdropdown-options">
       <li class="selectbox-option is-selected" data-value="SORTING_DATE">
    Neueste zuerst</li>
<li class="selectbox-option " data-value="PRICE_AMOUNT">
    Günstigste zuerst</li>
</ul>
</div>
</div>
    </div>

    <div class="l-splitpage-flex">
        <div class="l-splitpage-navigation adslot-container">
                <div class="l-container-row">
                    <form id="browsebox-searchform" action="/s-suchanfrage.html" method="get"><input id="browsebox-field-locationid" name="locationId" type="hidden" value=""/><input id="browsebox-field-categoryid" name="categoryId" type="hidden" value="21"/><input id="browsebox-field-sorting" name="sortingField" type="hidden" value="SORTING_DATE"/><input id="browsebox-field-adtype" name="adType" type="hidden" value=""/><input id="browsebox-field-keywords" name="keywords" type="hidden" value=""/><input id="browsebox-field-postertype" name="posterType" type="hidden" value=""/><input type="hidden" name="radius" value="0.0" />
<input type="hidden" name="buyNowEnabled" value="false"/>
<input type="hidden" name="shippingCarrier" value=""/>
<input type="hidden" name="shipping" value=""/>

<div class="browsebox contentbox surface">

    <section>
        <header>
            <h2 class="sectionheadline">Kategorien</h2>
        </header>
        <div class="browsebox-section-body">
            <ul class="treelist browsebox-itemlist is-root" data-overlayheadline="" data-hiddenItems='[]'>
<li>
   <a class="text-link-subdued" href="/s-suchen.html">Alle Kategorien</a><ul class=" browsebox-itemlist treelist" data-overlayheadline="Alle Kategorien" data-hiddenItems='[]'>
            <li>

                    <a class="text-link-subdued" href="/s-familie-kind-baby/c17">Familie, Kind & Baby</a><ul class="browsebox-itemlist treelist" data-overlayheadline="Familie, Kind & Baby" data-hiddenItems='[]'>
                            <li>

                                    <div class="browsebox-selected-itembox">
            <div>
                Babyschalen & Kindersitze<span
                        class="browsebox-facet text-light"> (199.195)</span></div>
            <a class="text-link-subdued" href="/s-familie-kind-baby/c17"><i class="icon-close"></i></a>
                </div>
    </li>
                            </ul>
                    </li>
            </ul>
    </li>
</ul>
</div>
    </section>
    <section class="browsebox-attribute">
                <header>
                    <h2 class="sectionheadline">Farbe</h2>
                </header>
                <div class="browsebox-section-body">
                            <ul class="treelist browsebox-itemlist is-root" data-overlayheadline="Farbe" data-hiddenItems=''>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/silber/c21+babyschalen_kindersitze.color_s:silber">Silber</a>&nbsp;<span class="browsebox-facet text-light">(725)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/beige/c21+babyschalen_kindersitze.color_s:beige">Beige</a>&nbsp;<span class="browsebox-facet text-light">(2.952)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/weiß/c21+babyschalen_kindersitze.color_s:wei%C3%9F">Weiß</a>&nbsp;<span class="browsebox-facet text-light">(1.344)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/blau/c21+babyschalen_kindersitze.color_s:blau">Blau</a>&nbsp;<span class="browsebox-facet text-light">(15.845)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/creme/c21+babyschalen_kindersitze.color_s:creme">Creme</a>&nbsp;<span class="browsebox-facet text-light">(485)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/gold/c21+babyschalen_kindersitze.color_s:gold">Gold</a>&nbsp;<span class="browsebox-facet text-light">(224)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/grau/c21+babyschalen_kindersitze.color_s:grau">Grau</a>&nbsp;<span class="browsebox-facet text-light">(34.304)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/print/c21+babyschalen_kindersitze.color_s:print">Print</a>&nbsp;<span class="browsebox-facet text-light">(75)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/gelb/c21+babyschalen_kindersitze.color_s:gelb">Gelb</a>&nbsp;<span class="browsebox-facet text-light">(237)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/khaki/c21+babyschalen_kindersitze.color_s:khaki">Khaki</a>&nbsp;<span class="browsebox-facet text-light">(393)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/lavendel/c21+babyschalen_kindersitze.color_s:lavendel">Lavendel</a>&nbsp;<span class="browsebox-facet text-light">(129)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/türkis/c21+babyschalen_kindersitze.color_s:t%C3%BCrkis">Türkis</a>&nbsp;<span class="browsebox-facet text-light">(1.310)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/braun/c21+babyschalen_kindersitze.color_s:braun">Braun</a>&nbsp;<span class="browsebox-facet text-light">(4.943)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/bunt/c21+babyschalen_kindersitze.color_s:bunt">Bunt</a>&nbsp;<span class="browsebox-facet text-light">(743)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/schwarz/c21+babyschalen_kindersitze.color_s:schwarz">Schwarz</a>&nbsp;<span class="browsebox-facet text-light">(56.271)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/orange/c21+babyschalen_kindersitze.color_s:orange">Orange</a>&nbsp;<span class="browsebox-facet text-light">(820)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/pink/c21+babyschalen_kindersitze.color_s:pink">Pink</a>&nbsp;<span class="browsebox-facet text-light">(2.766)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/rot/c21+babyschalen_kindersitze.color_s:rot">Rot</a>&nbsp;<span class="browsebox-facet text-light">(9.006)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/grün/c21+babyschalen_kindersitze.color_s:gr%C3%BCn">Grün</a>&nbsp;<span class="browsebox-facet text-light">(2.103)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/lila/c21+babyschalen_kindersitze.color_s:lila">Lila</a>&nbsp;<span class="browsebox-facet text-light">(1.635)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/sonstige/c21+babyschalen_kindersitze.color_s:sonstige">Andere Farben</a>&nbsp;<span class="browsebox-facet text-light">(9.529)</span></li>
</ul>
</div>
                    </section>
        <section>
            <header>
                <h2 class="sectionheadline">Preis</h2>
            </header>
            <div class="browsebox-section-body">
                <div class="browsebox-section-form">
                    <fieldset class="browsebox-rangefields">
                        <input id="srchrslt-brwse-price-min" name="minPrice" class="formcontrol textfield formcontrol-extended" placeholder="Von" type="text" value=""/> - <input id="srchrslt-brwse-price-max" name="maxPrice" class="formcontrol textfield formcontrol-extended" placeholder="Bis" type="text" value=""/></fieldset>
                    <button
                 class="button-iconized button"  type="submit" >
            <i class="button-icon icon-play-interactive"></i>
            </button>
    </div>
            </div>
        </section>
    <section>
            <header>
                <h2 class="sectionheadline">Angebotstyp</h2>
            </header>
            <div class="browsebox-section-body">
                <ul class="treelist browsebox-itemlist is-root" data-overlayheadline="" data-hiddenItems=''>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/anzeige:angebote/c21">Angebote</a>&nbsp;<span class="browsebox-facet text-light">(198.935)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/anzeige:gesuche/c21">Gesuche</a>&nbsp;<span class="browsebox-facet text-light">(260)</span></li>
</ul>
</div>
        </section>
    <section>
            <header>
                <h2 class="sectionheadline">Anbieter</h2>
            </header>
            <div class="browsebox-section-body">
                <ul class="treelist browsebox-itemlist is-root" data-overlayheadline="" data-hiddenItems=''>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/anbieter:privat/c21">Privat</a>&nbsp;<span class="browsebox-facet text-light">(196.485)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/anbieter:gewerblich/c21">Gewerblich</a>&nbsp;<span class="browsebox-facet text-light">(2.710)</span></li>
</ul>
</div>
        </section>
     <section>
            <header>
                <h2 class="sectionheadline">Ort</h2>
            </header>
            <div class="browsebox-section-body">
                <ul class="treelist browsebox-itemlist is-root" data-overlayheadline="Ort" data-hiddenItems=''>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/baden-wuerttemberg/c21l7970">Baden-Württemberg</a>&nbsp;<span class="browsebox-facet text-light">(27.027)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/bayern/c21l5510">Bayern</a>&nbsp;<span class="browsebox-facet text-light">(35.636)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/berlin/c21l3331">Berlin</a>&nbsp;<span class="browsebox-facet text-light">(7.381)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/brandenburg/c21l7711">Brandenburg</a>&nbsp;<span class="browsebox-facet text-light">(5.952)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/bremen/c21l1">Bremen</a>&nbsp;<span class="browsebox-facet text-light">(1.247)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/hamburg/c21l9409">Hamburg</a>&nbsp;<span class="browsebox-facet text-light">(4.389)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/hessen/c21l4279">Hessen</a>&nbsp;<span class="browsebox-facet text-light">(15.888)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/mecklenburg-vorpommern/c21l61">Mecklenburg-Vorpommern</a>&nbsp;<span class="browsebox-facet text-light">(2.909)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/niedersachsen/c21l2428">Niedersachsen</a>&nbsp;<span class="browsebox-facet text-light">(20.327)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/nordrhein-westfalen/c21l928">Nordrhein-Westfalen</a>&nbsp;<span class="browsebox-facet text-light">(40.274)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/rheinland-pfalz/c21l4938">Rheinland-Pfalz</a>&nbsp;<span class="browsebox-facet text-light">(9.743)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/saarland/c21l285">Saarland</a>&nbsp;<span class="browsebox-facet text-light">(2.379)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/sachsen/c21l3799">Sachsen</a>&nbsp;<span class="browsebox-facet text-light">(10.133)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/sachsen-anhalt/c21l2165">Sachsen-Anhalt</a>&nbsp;<span class="browsebox-facet text-light">(4.318)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/schleswig-holstein/c21l408">Schleswig-Holstein</a>&nbsp;<span class="browsebox-facet text-light">(7.012)</span></li>
<li>
   <a class="text-link-subdued" href="/s-babyschalen-kindersitze/thueringen/c21l3548">Thüringen</a>&nbsp;<span class="browsebox-facet text-light">(4.580)</span></li>
</ul>
</div>
        </section>
    </div>

</form></div>
                <div id="srp-skyscraper-btf" class="sticky-advertisement">
                    <div
            data-liberty-position-name="srpb-sky-btf-left"
            
            class="srp-skyscraper-btf flex-vertical-center"
        ></div>
        </div>

            </div>
        <div id="srchrslt-content" class="l-splitpage-content position-relative">
            <div class="srp-header a-padded l-container-row contentbox surface">
                <div>
                    <div class="l-container-row contentbox j-follow-search">
    <header class="splitheader-centered">
        <div class="splitheader--title icon-headline-medium box-iconbox">
            <div><i class="icon icon-saved-searches-24-green"></i></div>
            <div>Erstelle einen Suchauftrag und lasse dich benachrichtigen,<br>wenn neue Anzeigen eingestellt werden.</div>
        </div>
        <div class="splitheader--addon">
            <a id="j-srchrslt-header-savedsearch-unsubscribe"
               class="button icon-button j-unsubscribe-link  is-hidden"
               href="/m-suche-loeschen.json"
               rel="nofollow">
                <i class="icon-saved-search-subscribed button-icon icon-heart-magnifier-closed-interactive"></i>
                <span>Suchauftrag gespeichert</span>
            </a>

            <a id="j-srchrslt-header-savedsearch-subscribe"
               class="button icon-button j-subscribe-link "
               href="/m-suche-abonnieren.json"
               rel="nofollow"
               data-gaevent="ResultsBrowse,SaveSearchBegin">
            <i class="icon-saved-search-not-subscribed button-icon icon-heart-magnifier-open-interactive"></i>
            <span>Suchauftrag speichern</span></a>
        </div>
    </header>
</div>
</div>
            </div>
            <div
                id="brws_banner-supersize"
                class="j-liberty-wrapper "
            >
        <div
            data-liberty-position-name="srpb-top-banner"
            
                data-liberty-parent-selector=".j-liberty-wrapper"
            
            class="contentbox-unpadded l-container-row"
        ></div>
        </div>
        <div class="l-container-row contentbox-unpadded no-bg">

    <div class="position-relative">
        <ul
    id="srchrslt-adtable"
        class="itemlist ad-list it3">
    <li class="ad-listitem    badge-topad is-topad  ">
                    <article class="aditem" data-adid="2652921303" 
                             data-href="/s-anzeige/ikea-bartisch-mit-4x-norr-ker-barhocker-42x100x48-cm-mit-polster/2652921303-21-2082">
                        <div class="aditem-image">
                            <a href="/s-anzeige/ikea-bartisch-mit-4x-norr-ker-barhocker-42x100x48-cm-mit-polster/2652921303-21-2082">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/56/5653ee0f-907c-4f27-9762-0aba8ca7936f?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/56/5653ee0f-907c-4f27-9762-0aba8ca7936f?rule=$_35.JPG"
                                                alt="IKEA Bartisch mit 4x NORRÅKER, Barhocker 42x100x48 cm mit Polster Düsseldorf - Pempelfort Vorschau"
                                                fetchpriority="high"
                                                loading="eager"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    3</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 40477 Pempelfort</div>
                                <div class="aditem-main--top--right">
                                    </div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" 
                                       href="/s-anzeige/ikea-bartisch-mit-4x-norr-ker-barhocker-42x100x48-cm-mit-polster/2652921303-21-2082">IKEA Bartisch mit 4x NORRÅKER, Barhocker 42x100x48 cm mit Polster</a>
                                </h2>
                                <p class="aditem-main--middle--description">Verkaufe meinen IKEA Bartisch 70x125x130 mit 4x NORRÅKER Barhockern (42x100x48 cm) mit Polstern...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        200 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    badge-topad is-topad  ">
                    <article class="aditem" data-adid="2636614540" 
                             data-href="/s-anzeige/babyschale-aton-b2-i-size-gebraucht/2636614540-21-1214">
                        <div class="aditem-image">
                            <a href="/s-anzeige/babyschale-aton-b2-i-size-gebraucht/2636614540-21-1214">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/d0/d00663ba-8f3f-4bb9-ae24-2debb6eb9320?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/d0/d00663ba-8f3f-4bb9-ae24-2debb6eb9320?rule=$_35.JPG"
                                                alt="Babyschale Aton B2 i-Size - Gebraucht Nordrhein-Westfalen - Hille Vorschau"
                                                fetchpriority="high"
                                                loading="eager"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    8</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 32479 Hille</div>
                                <div class="aditem-main--top--right">
                                    </div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" 
                                       href="/s-anzeige/babyschale-aton-b2-i-size-gebraucht/2636614540-21-1214">Babyschale Aton B2 i-Size - Gebraucht</a>
                                </h2>
                                <p class="aditem-main--middle--description">Hallo,

verkauft wird hier die Babyschale Aton B2 i-Size der Marke CYBEX zusammen mit der Base One,...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        110 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369249" 
                             data-href="/s-anzeige/besafe-izi-plus-kindersitz-1-kind-benutzt-/2656369249-21-8090">
                        <div class="aditem-image">
                            <a href="/s-anzeige/besafe-izi-plus-kindersitz-1-kind-benutzt-/2656369249-21-8090">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/9d/9dddab4d-4740-4abe-82c4-87549b7730b1?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/9d/9dddab4d-4740-4abe-82c4-87549b7730b1?rule=$_35.JPG"
                                                alt="BeSafe IZI Plus Kindersitz :: 1 Kind benutzt:: Baden-Württemberg - Hechingen Vorschau"
                                                fetchpriority="high"
                                                loading="eager"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    10</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 72379 Hechingen</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:08</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" 
                                       href="/s-anzeige/besafe-izi-plus-kindersitz-1-kind-benutzt-/2656369249-21-8090">BeSafe IZI Plus Kindersitz :: 1 Kind benutzt::</a>
                                </h2>
                                <p class="aditem-main--middle--description">Im Kindersitz hat ein Kind gesessen und war im Auto der Großeltern eingebaut, also wenig...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        140 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-3"
            
            class="align-center"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368710" 
                             data-href="/s-anzeige/kindersitz-britax-roemer-king-ii-ls-br/2656368710-21-2071">
                        <div class="aditem-image">
                            <a href="/s-anzeige/kindersitz-britax-roemer-king-ii-ls-br/2656368710-21-2071">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/24/24a67132-fc91-4a94-bd4c-b8a341a5d03c?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/24/24a67132-fc91-4a94-bd4c-b8a341a5d03c?rule=$_35.JPG"
                                                alt="Kindersitz britax Römer King II LS BR Düsseldorf - Oberkassel Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 40545 Oberkassel</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368710"
                                       href="/s-anzeige/kindersitz-britax-roemer-king-ii-ls-br/2656368710-21-2071">Kindersitz britax Römer King II LS BR</a>
                                </h2>
                                <p class="aditem-main--middle--description">2 Monate genutzter Kindersitz
Sehr gepflegt
Unfallfrei</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        125 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368652" 
                             data-href="/s-anzeige/maxi-cosi-babys-hale-autositz/2656368652-21-805">
                        <div class="aditem-image">
                            <a href="/s-anzeige/maxi-cosi-babys-hale-autositz/2656368652-21-805">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/3f/3f1ab0cd-a039-48f3-8624-3a90f5ffc33e?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/3f/3f1ab0cd-a039-48f3-8624-3a90f5ffc33e?rule=$_35.JPG"
                                                alt="Maxi Cosi Babys hale, Autositz Herzogtum Lauenburg - Mölln Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    4</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 23879 Mölln</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368652"
                                       href="/s-anzeige/maxi-cosi-babys-hale-autositz/2656368652-21-805">Maxi Cosi Babys hale, Autositz</a>
                                </h2>
                                <p class="aditem-main--middle--description">Gut erhaltener, unfallfreier Maxi Cosi
Ohne Isofix

Dies ist ein Privatverkauf keine Garantie keine...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        20 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-6"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368271" 
                             data-href="/s-anzeige/kinderautositz-kindersitz-roemer-kid-plus-06/2656368271-21-21306">
                        <div class="aditem-image">
                            <a href="/s-anzeige/kinderautositz-kindersitz-roemer-kid-plus-06/2656368271-21-21306">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/98/98467726-e6e7-4d7c-b1b1-fc3b504b0d55?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/98/98467726-e6e7-4d7c-b1b1-fc3b504b0d55?rule=$_35.JPG"
                                                alt="Kinderautositz Kindersitz Römer Kid Plus 06 Thüringen - Großlöbichau Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    3</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 07751 Großlöbichau</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:06</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368271"
                                       href="/s-anzeige/kinderautositz-kindersitz-roemer-kid-plus-06/2656368271-21-21306">Kinderautositz Kindersitz Römer Kid Plus 06</a>
                                </h2>
                                <p class="aditem-main--middle--description">Kinderautositz Kindersitz von Römer Typ Kid Plus 06 abzugeben
gebraucht, ca. 8 Jahre alt
gut...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        20 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-8"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368132" 
                             data-href="/s-anzeige/easy-rider-x-sitz-fuer-mitfahrbrett/2656368132-21-2451">
                        <div class="aditem-image">
                            <a href="/s-anzeige/easy-rider-x-sitz-fuer-mitfahrbrett/2656368132-21-2451">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a8/a81a68f4-8909-4057-a7dd-6f0f225ea00a?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a8/a81a68f4-8909-4057-a7dd-6f0f225ea00a?rule=$_35.JPG"
                                                alt="Easy Rider X Sitz für Mitfahrbrett Niedersachsen - Braunschweig Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 38114 Braunschweig</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:06</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368132"
                                       href="/s-anzeige/easy-rider-x-sitz-fuer-mitfahrbrett/2656368132-21-2451">Easy Rider X Sitz für Mitfahrbrett</a>
                                </h2>
                                <p class="aditem-main--middle--description">Neu einmal ausprobiert
passt leider nicht
Und es gibt leider leichte Gebrauchsspuren</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        60 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-10"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656367989" 
                             data-href="/s-anzeige/roemer-kindersitz-fuer-auto-9-18-kg/2656367989-21-6690">
                        <div class="aditem-image">
                            <a href="/s-anzeige/roemer-kindersitz-fuer-auto-9-18-kg/2656367989-21-6690">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/90/907f57e2-32ae-420c-b2df-8bdcc4359386?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/90/907f57e2-32ae-420c-b2df-8bdcc4359386?rule=$_35.JPG"
                                                alt="Römer Kindersitz für Auto  9-18 kg Baden-Württemberg - Schnürpflingen Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 89194 Schnürpflingen</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:06</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656367989"
                                       href="/s-anzeige/roemer-kindersitz-fuer-auto-9-18-kg/2656367989-21-6690">Römer Kindersitz für Auto  9-18 kg</a>
                                </h2>
                                <p class="aditem-main--middle--description">Verkaufe unser gut erhaltenen Kindersitz.
9-18 Kg
In schnürpflingen abzuholen</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        30 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656367581" 
                             data-href="/s-anzeige/maxi-cosi-family-fix-one-mit-isofix-station/2656367581-21-2148">
                        <div class="aditem-image">
                            <a href="/s-anzeige/maxi-cosi-family-fix-one-mit-isofix-station/2656367581-21-2148">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/13/13a90312-b60d-4a7e-aed4-400975a26a3e?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/13/13a90312-b60d-4a7e-aed4-400975a26a3e?rule=$_35.JPG"
                                                alt="Maxi Cosi Family Fix One mit Isofix Station Duisburg - Duisburg-Mitte Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    12</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 47053 Duisburg-&#8203Mitte</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:05</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656367581"
                                       href="/s-anzeige/maxi-cosi-family-fix-one-mit-isofix-station/2656367581-21-2148">Maxi Cosi Family Fix One mit Isofix Station</a>
                                </h2>
                                <p class="aditem-main--middle--description">Unfallfrei! mit Neugeborenen Einsatz.
Nichtraucher und Tierfreier Haushalt.
Normale Nutzung, keine...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        65 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-13"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656366256" 
                             data-href="/s-anzeige/cybex-platinum-cloud-z-i-size-spring-blossom-dark-inkl-base-z/2656366256-21-21492">
                        <div class="aditem-image">
                            <a href="/s-anzeige/cybex-platinum-cloud-z-i-size-spring-blossom-dark-inkl-base-z/2656366256-21-21492">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/fc/fc1f8d21-8f7e-4760-b4b0-fd218e1c6be4?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/fc/fc1f8d21-8f7e-4760-b4b0-fd218e1c6be4?rule=$_35.JPG"
                                                alt="Cybex Platinum Cloud Z i-Size Spring Blossom Dark inkl. Base Z Köln - Seeberg Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                                    data-imgstyle="min-width: 100%;
                                                    min-height: 178%;
                                                    max-height: none; max-width: none;
                                                    transform: translate(0%, -12%);"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    10</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 50769 Seeberg</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:04</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656366256"
                                       href="/s-anzeige/cybex-platinum-cloud-z-i-size-spring-blossom-dark-inkl-base-z/2656366256-21-21492">Cybex Platinum Cloud Z i-Size Spring Blossom Dark inkl. Base Z</a>
                                </h2>
                                <p class="aditem-main--middle--description">Zum Verkauf stehen Babyschalle Cloud Z i-Size von Cybex Platinum mit der Liegefunktion und Base Z...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        340 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2577788718" 
                             data-href="/s-anzeige/babyschale-kindersitz-nuna-pipa-next-granite-aussteller/2577788718-21-8599">
                        <div class="aditem-image">
                            <a href="/s-anzeige/babyschale-kindersitz-nuna-pipa-next-granite-aussteller/2577788718-21-8599">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/40/4054a5a8-3e51-45b8-b9cb-d25e557bc6de?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/40/4054a5a8-3e51-45b8-b9cb-d25e557bc6de?rule=$_35.JPG"
                                                alt="Babyschale Kindersitz Nuna Pipa Next Granite Aussteller Baden-Württemberg - Wangen im Allgäu Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                    d-listitem    ">
                    <article class="aditem" data-adid="2656369138" 
                             data-href="/s-anzeige/glaeschen-und-flaschenwaermer-nuk-baby/2656369138-258-6444">
                        <div class="aditem-image">
                            <a href="/s-anzeige/glaeschen-und-flaschenwaermer-nuk-baby/2656369138-258-6444">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a3/a3177660-c024-47f8-b699-2c2b61c92bb7?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a3/a3177660-c024-47f8-b699-2c2b61c92bb7?rule=$_35.JPG"
                                                alt="Gläschen und Flaschenwärmer Nuk Baby München - Schwanthalerhöhe Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 80339 Schwanthalerhöhe</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369138"
                                       href="/s-anzeige/glaeschen-und-flaschenwaermer-nuk-baby/2656369138-258-6444">Gläschen und Flaschenwärmer Nuk Baby</a>
                                </h2>
                                <p class="aditem-main--middle--description">Bei Fragen gerne melden.
Rückgabe ausgeschlossen da Privatkauf</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        20 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369135" 
                             data-href="/s-anzeige/spiel-lego-kokoriko/2656369135-23-2938">
                        <div class="aditem-image">
                            <a href="/s-anzeige/spiel-lego-kokoriko/2656369135-23-2938">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/81/81f111e5-e159-4e87-a6d4-86ea5c5dac06?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/81/81f111e5-e159-4e87-a6d4-86ea5c5dac06?rule=$_35.JPG"
                                                alt="Spiel Lego Kokoriko Niedersachsen - Sottrum Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 27367 Sottrum</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369135"
                                       href="/s-anzeige/spiel-lego-kokoriko/2656369135-23-2938">Spiel Lego Kokoriko</a>
                                </h2>
                                <p class="aditem-main--middle--description">Komplett

Habe insgesamt mehr zu verkaufen.

Nichtraucherhaushalt
Dies ist ein Privatverkauf –...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        7 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369127" 
                             data-href="/s-anzeige/spieltrapez-bogen-roba/2656369127-23-25917">
                        <div class="aditem-image">
                            <a href="/s-anzeige/spieltrapez-bogen-roba/2656369127-23-25917">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/02/02477fae-c4ce-453e-b0a3-cd80d9411221?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/02/02477fae-c4ce-453e-b0a3-cd80d9411221?rule=$_35.JPG"
                                                alt="Spieltrapez/ Bogen Roba Berlin - Karlshorst Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    7</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 10318 Karlshorst</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369127"
                                       href="/s-anzeige/spieltrapez-bogen-roba/2656369127-23-25917">Spieltrapez/ Bogen Roba</a>
                                </h2>
                                <p class="aditem-main--middle--description">Ich verkaufe ein Spieltrapez von Roba. Es war nur sehr kurze Zeit in Benutzung und ist daher in...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        15 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-18"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369122" 
                             data-href="/s-anzeige/elektrische-milchpumpe/2656369122-258-5850">
                        <div class="aditem-image">
                            <a href="/s-anzeige/elektrische-milchpumpe/2656369122-258-5850">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/c7/c7b44658-c4a6-4537-b4de-30deb7d89cc2?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/c7/c7b44658-c4a6-4537-b4de-30deb7d89cc2?rule=$_35.JPG"
                                                alt="Elektrische Milchpumpe Bayern - Pfaffenhofen a.d. Ilm Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 85276 Pfaffenhofen a.d. Ilm</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369122"
                                       href="/s-anzeige/elektrische-milchpumpe/2656369122-258-5850">Elektrische Milchpumpe</a>
                                </h2>
                                <p class="aditem-main--middle--description">Selten genutzte Milchpumpe.
Voll funktionsfähig
Alles sterilisiert
Keine Gebrauchsspuren

Da...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        30 € VB</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369120" 
                             data-href="/s-anzeige/kinderbett/2656369120-20-3826">
                        <div class="aditem-image">
                            <a href="/s-anzeige/kinderbett/2656369120-20-3826">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/d4/d40af670-5c88-4d22-b56f-e96980293dd1?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/d4/d40af670-5c88-4d22-b56f-e96980293dd1?rule=$_35.JPG"
                                                alt="Kinderbett Dresden - Innere Altstadt Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 01067 Innere Altstadt</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369120"
                                       href="/s-anzeige/kinderbett/2656369120-20-3826">Kinderbett</a>
                                </h2>
                                <p class="aditem-main--middle--description">Ich verkaufe ein Kinderbett in einem guten Zustand.</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        30 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369118" 
                             data-href="/s-anzeige/dirndl-kleid-140-mit-schuerze/2656369118-22-7879">
                        <div class="aditem-image">
                            <a href="/s-anzeige/dirndl-kleid-140-mit-schuerze/2656369118-22-7879">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/f0/f0121c03-4077-45dc-8d67-884c4c1e7fb8?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/f0/f0121c03-4077-45dc-8d67-884c4c1e7fb8?rule=$_35.JPG"
                                                alt="Dirndl Kleid 140 mit Schürze Brandenburg - Wittstock/Dosse Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    3</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 16909 Wittstock/&#8203Dosse</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369118"
                                       href="/s-anzeige/dirndl-kleid-140-mit-schuerze/2656369118-22-7879">Dirndl Kleid 140 mit Schürze</a>
                                </h2>
                                <p class="aditem-main--middle--description">Hallo

Biete zum Verkauf den Artikel vom Foto.

Bei Interesse einfach melden.</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        10 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">140</span>
                                    <span class="simpletag">Mädchen</span>
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369110" 
                             data-href="/s-anzeige/topf-und-wc-sitz/2656369110-18-9196">
                        <div class="aditem-image">
                            <a href="/s-anzeige/topf-und-wc-sitz/2656369110-18-9196">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/18/18f287a8-3c5c-4b38-b3e1-1f44a398394f?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/18/18f287a8-3c5c-4b38-b3e1-1f44a398394f?rule=$_35.JPG"
                                                alt="Topf und WC-Sitz Baden-Württemberg - Karlsruhe Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 76149 Karlsruhe</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369110"
                                       href="/s-anzeige/topf-und-wc-sitz/2656369110-18-9196">Topf und WC-Sitz</a>
                                </h2>
                                <p class="aditem-main--middle--description">Kaum benutzt da bei den Großeltern.</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        1 €</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem">
        <div
            data-liberty-position-name="srpb-result-list-23"
            
            class="align-center liberty-hide-unfilled"
        ></div>
        </li>
        <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369105" 
                             data-href="/s-anzeige/baby-born-my-mini-krankenhaus-krankenschwester-kind/2656369105-23-4408">
                        <div class="aditem-image">
                            <a href="/s-anzeige/baby-born-my-mini-krankenhaus-krankenschwester-kind/2656369105-23-4408">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/7e/7ed7ac4e-a85d-4a16-be69-fea1ab1ea6ae?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/7e/7ed7ac4e-a85d-4a16-be69-fea1ab1ea6ae?rule=$_35.JPG"
                                                alt="Baby born my mini Krankenhaus Krankenschwester Kind Hessen - Espenau Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 34314 Espenau</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369105"
                                       href="/s-anzeige/baby-born-my-mini-krankenhaus-krankenschwester-kind/2656369105-23-4408">Baby born my mini Krankenhaus Krankenschwester Kind</a>
                                </h2>
                                <p class="aditem-main--middle--description">Versand und Bezahlung per PayPal möglich.

Bitte beachten Sie auch unsere weiteren Inserate.</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        10 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369089" 
                             data-href="/s-anzeige/neues-ranzen-set-5-t-scooli-easyfit-tornister-beetle-rot/2656369089-18-1784">
                        <div class="aditem-image">
                            <a href="/s-anzeige/neues-ranzen-set-5-t-scooli-easyfit-tornister-beetle-rot/2656369089-18-1784">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/45/450a6026-18db-4333-9df9-7d2123235126?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/45/450a6026-18db-4333-9df9-7d2123235126?rule=$_35.JPG"
                                                alt="Neues Ranzen-Set, 5 T, Scooli EasyFit, Tornister, beetle, rot Nordrhein-Westfalen - Rheine Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    13</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 48431 Rheine</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369089"
                                       href="/s-anzeige/neues-ranzen-set-5-t-scooli-easyfit-tornister-beetle-rot/2656369089-18-1784">Neues Ranzen-Set, 5 T, Scooli EasyFit, Tornister, beetle, rot</a>
                                </h2>
                                <p class="aditem-main--middle--description">Neues Ranzen-Set, 1000 g leicht, 5 Teile (gefülltes Etui)

Doppelkauf

Versand möglich</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        75 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369044" 
                             data-href="/s-anzeige/kleidungs-paket-kinder/2656369044-22-5431">
                        <div class="aditem-image">
                            <a href="/s-anzeige/kleidungs-paket-kinder/2656369044-22-5431">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/32/32ceb457-a9bc-4095-9970-6d08b88db0ee?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/32/32ceb457-a9bc-4095-9970-6d08b88db0ee?rule=$_35.JPG"
                                                alt="Kleidungs Paket Kinder Rheinland-Pfalz - Kobern-Gondorf Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 56330 Kobern-&#8203Gondorf</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369044"
                                       href="/s-anzeige/kleidungs-paket-kinder/2656369044-22-5431">Kleidungs Paket Kinder</a>
                                </h2>
                                <p class="aditem-main--middle--description">Alles Größe 74 ohne Löcher ohne Flecken</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        20 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">74</span>
                                    <span class="simpletag">Mädchen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369038" 
                             data-href="/s-anzeige/shorts-gr-122-c-a-/2656369038-22-1764">
                        <div class="aditem-image">
                            <a href="/s-anzeige/shorts-gr-122-c-a-/2656369038-22-1764">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/59/590a9292-34f2-484e-b201-2c6e3c734f7c?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/59/590a9292-34f2-484e-b201-2c6e3c734f7c?rule=$_35.JPG"
                                                alt="Shorts Gr.122(C&amp;A) Nordrhein-Westfalen - Minden Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 32423 Minden</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369038"
                                       href="/s-anzeige/shorts-gr-122-c-a-/2656369038-22-1764">Shorts Gr.122(C&amp;A)</a>
                                </h2>
                                <p class="aditem-main--middle--description">Sehr guter Zustand</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        4 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">122</span>
                                    <span class="simpletag">Jungen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369026" 
                             data-href="/s-anzeige/reifrock-104-110-prinzessinnen-kleid/2656369026-22-8862">
                        <div class="aditem-image">
                            <a href="/s-anzeige/reifrock-104-110-prinzessinnen-kleid/2656369026-22-8862">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/31/31249afc-2df7-47c4-b429-290baa7bb8b6?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/31/31249afc-2df7-47c4-b429-290baa7bb8b6?rule=$_35.JPG"
                                                alt="Reifrock 104/110 Prinzessinnen Kleid Baden-Württemberg - Donaueschingen Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 78166 Donaueschingen</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369026"
                                       href="/s-anzeige/reifrock-104-110-prinzessinnen-kleid/2656369026-22-8862">Reifrock 104/110 Prinzessinnen Kleid</a>
                                </h2>
                                <p class="aditem-main--middle--description">Ungetragen da wir zwei hatten.
Macht Kleider wunderschön märchenhaft.

Privatverkauf</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        7 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">104</span>
                                    <span class="simpletag">Mädchen</span>
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656369008" 
                             data-href="/s-anzeige/schlafanzug-gr-62/2656369008-22-3880">
                        <div class="aditem-image">
                            <a href="/s-anzeige/schlafanzug-gr-62/2656369008-22-3880">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/6a/6a118df4-9873-4900-aa9f-34c127cbb0ea?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/6a/6a118df4-9873-4900-aa9f-34c127cbb0ea?rule=$_35.JPG"
                                                alt="Schlafanzug Gr. 62 Sachsen - Chemnitz Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    2</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 09126 Chemnitz</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656369008"
                                       href="/s-anzeige/schlafanzug-gr-62/2656369008-22-3880">Schlafanzug Gr. 62</a>
                                </h2>
                                <p class="aditem-main--middle--description">Schlafanzug Gr. 62 ( fällt etwas kleiner aus)

-Knopfleiste zum verschließen
-mit...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        7 € VB</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    <span class="simpletag">62</span>
                                    <span class="simpletag">Mädchen</span>
                                    <span class="simpletag">Direkt kaufen</span>
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368999" 
                             data-href="/s-anzeige/babysitter/2656368999-237-910">
                        <div class="aditem-image">
                            <a href="/s-anzeige/babysitter/2656368999-237-910">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-static/images/placeholder/babysitter?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-static/images/placeholder/babysitter?rule=$_35.JPG"
                                                alt="Babysitter Schleswig-Holstein - Bad Bramstedt Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 24576 Bad Bramstedt</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368999"
                                       href="/s-anzeige/babysitter/2656368999-237-910">Babysitter</a>
                                </h2>
                                <p class="aditem-main--middle--description">Hallo,
ich bin 16 Jahre alt und suche einen Job als Babysitter. Ich gehe zur Zeit in die 10. Klasse...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        16 € VB</p>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368992" 
                             data-href="/s-anzeige/-playmobil-5557-abenteuer-baumhaus-set-komplett-/2656368992-23-393">
                        <div class="aditem-image">
                            <a href="/s-anzeige/-playmobil-5557-abenteuer-baumhaus-set-komplett-/2656368992-23-393">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/1c/1cad520a-1bfd-452d-b721-8b017ebbdda4?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/1c/1cad520a-1bfd-452d-b721-8b017ebbdda4?rule=$_35.JPG"
                                                alt="❤️PLAYMOBIL 5557❤️ Abenteuer Baumhaus - !!!Set komplett!!! Saarbrücken-Mitte - St Johann Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            <div class="galleryimage--counter">
                                                    10</div>
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 66121 St Johann</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368992"
                                       href="/s-anzeige/-playmobil-5557-abenteuer-baumhaus-set-komplett-/2656368992-23-393">❤️PLAYMOBIL 5557❤️ Abenteuer Baumhaus - !!!Set komplett!!!</a>
                                </h2>
                                <p class="aditem-main--middle--description">Verkaufe das komplette Playmobil 5557 Abenteuer-Baumhaus. Das perfekte Weihnachtsgeschenk für alle...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        30 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368972" 
                             data-href="/s-anzeige/schwimmfluegel-3-6-jahre-protection/2656368972-18-28136">
                        <div class="aditem-image">
                            <a href="/s-anzeige/schwimmfluegel-3-6-jahre-protection/2656368972-18-28136">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/f7/f77c881b-0375-459d-a814-29a70685af1a?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/f7/f77c881b-0375-459d-a814-29a70685af1a?rule=$_35.JPG"
                                                alt="Schwimmflügel 3-6 Jahre Protection Dortmund - Asseln Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 44319 Asseln</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368972"
                                       href="/s-anzeige/schwimmfluegel-3-6-jahre-protection/2656368972-18-28136">Schwimmflügel 3-6 Jahre Protection</a>
                                </h2>
                                <p class="aditem-main--middle--description">Schwimmflügel abzugeben. Neu .Leider falsch gekauft. Zwei verschiedene Motive. Preis je...</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        6 €</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            <li class="ad-listitem    ">
                    <article class="aditem" data-adid="2656368991" 
                             data-href="/s-anzeige/ikea-maltafel/2656368991-23-6403">
                        <div class="aditem-image">
                            <a href="/s-anzeige/ikea-maltafel/2656368991-23-6403">
                                        <div class="imagebox srpimagebox">
                                            <img
                                                src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a6/a6dfcf87-3aeb-43e8-89ea-fc27592f2db8?rule=$_2.JPG"
                                                srcset="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a6/a6dfcf87-3aeb-43e8-89ea-fc27592f2db8?rule=$_35.JPG"
                                                alt="IKEA Maltafel Bayern - Landshut Vorschau"
                                                fetchpriority="low"
                                                loading="lazy"
                                                
                                            />
                                            </div>
                                    </a>
                                </div>
                        <div class="aditem-main">
                            <div class="aditem-main--top">
                                <div class="aditem-main--top--left">
                                    <i class="icon icon-small icon-pin-gray"></i> 84028 Landshut</div>
                                <div class="aditem-main--top--right">
                                    <i class="icon icon-small icon-calendar-open"></i>
                                        Heute, 19:07</div>
                            </div>
                            <div class="aditem-main--middle">
                                <h2 class="text-module-begin">
                                    <a class="ellipsis" name="2656368991"
                                       href="/s-anzeige/ikea-maltafel/2656368991-23-6403">IKEA Maltafel</a>
                                </h2>
                                <p class="aditem-main--middle--description">Maltafel doppelseitig. Es</p>
                                <div class="aditem-main--middle--price-shipping">
                                    <p class="aditem-main--middle--price-shipping--price">
                                        12 € VB</p>
                                    <p class="aditem-main--middle--price-shipping--shipping">
                                            Versand möglich</p>
                                        </div>
                                    </div>
                            <div class="aditem-main--bottom">
                                <p class="text-module-end">
                                    </p>
                                </div>
                        </div>
                    </article>
                </li>
            </ul>
</div>

    </div>

<div class="l-container-row contentbox-unpadded no-bg">

        <div id="srchrslt-pagination" class="a-padded l-container">
                <div class="pagination">
                    <div class="pagination-pages">
    <span class="pagination-current">1</span>
            <a href="/s-familie-kind-baby/seite:2/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 2 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">2</a>
            <a href="/s-familie-kind-baby/seite:3/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 3 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">3</a>
            <a href="/s-familie-kind-baby/seite:4/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 4 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">4</a>
            <a href="/s-familie-kind-baby/seite:5/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 5 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">5</a>
            <a href="/s-familie-kind-baby/seite:6/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 6 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">6</a>
            <a href="/s-familie-kind-baby/seite:7/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 7 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">7</a>
            <a href="/s-familie-kind-baby/seite:8/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 8 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">8</a>
            <a href="/s-familie-kind-baby/seite:9/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 9 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">9</a>
            <a href="/s-familie-kind-baby/seite:10/c17" class="pagination-page" title="Familie, Kind &amp; Baby Seite 10 | eBay Kleinanzeigen ist jetzt Kleinanzeigen">10</a>
            <span>...</span></div>
<div class="pagination-nav">
        <a class="pagination-next" title="Nächste" href="/s-familie-kind-baby/seite:2/c17"></a>
    </div>
</div>
            </div>
        </div>
</div>
    </div>

    <div id="sorting-info-wrapper" class="modal-dialog mfp-popup-medium mfp-hide">
        <header>
            <h2>Sortierung der Suchergebnisse</h2>
        </header>
        <div class="modal-dialog-content">
            <p>
                Die Reihenfolge der Suchergebnisse richtet sich ausschließlich nach den Parametern Datum der Anzeige, Preis und Entfernung.
            </p>
            <p>
                In der Standard-Sortierung, ohne Eingabe eines Ortes, werden neueste Anzeigen (alternativ änderbar auf "Günstigste zuerst") oben gezeigt. Diese werden mit Eingabe eines Ortes auf den Ort bzw. den Radius eingegrenzt. Falls ein Ort sowie ein Radius ausgewählt wurde, ist auch die Sortierung nach Geringste Entfernung zuerst möglich.
            </p>
            <p>
                Ganz oben oberhalb der Suchergebnisse werden als solche gekennzeichnete Werbeanzeigen eingeblendet, die zu der Suche passen.
            </p>
        </div>
    </div>

    <div id="btf-billboard" class="flex-right">
                                <div
            data-liberty-position-name="srpb-btf-billboard"
            
            class=""
        ></div>
        </div>
                        </div>

                    <footer id="site-footer" class="l-page-wrapper align-center">
    <nav id="site-footer-nav">
        <ul class="flexlist is-top-aligned l-container-row">
            <li class="flexlist--column l-col">
                <ul class="list">
                    <li class="flexlist--header">Kleinanzeigen</li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/ueber-uns/"
                           data-gaevent="ResultsBrowse,FooterClick,AboutUs" data-gaevent-direct="true">
                            Über uns</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/careers/"
                           data-gaevent="ResultsBrowse,FooterClick,Careers" data-gaevent-direct="true">
                            Karriere</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/medien"
                           data-gaevent="ResultsBrowse,FooterClick,Press" data-gaevent-direct="true">
                            Presse</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/magazin/"
                           data-gaevent="ResultsBrowse,FooterClick,Magazine" data-gaevent-direct="true">
                            Kleinanzeigen Magazin</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/engagement/"
                           data-gaevent="ResultsBrowse,FooterClick,Engagement" data-gaevent-direct="true">
                            Engagement</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/mobile-apps/"
                           data-gaevent="ResultsBrowse,FooterClick,MobileApps" data-gaevent-direct="true">
                            Mobile&nbsp;Apps</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/ebay-kleinanzeigen-bug-bounty/"
                           data-gaevent="ResultsBrowse,FooterClick,BugBounty" data-gaevent-direct="true">
                            Bug Bounty</a>
                    </li>
                </ul>
            <li>
            <li class="flexlist--column l-col">
                <ul class="list">
                    <li class="flexlist--header">Informationen</li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/hilfe/"
                           data-gaevent="ResultsBrowse,FooterClick,Help" data-gaevent-direct="true">
                            Hilfe</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/sicherheitshinweise/"
                           data-gaevent="ResultsBrowse,FooterClick,Security">
                            Tipps für deine Sicherheit</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/datenschutzerklaerung/"
                           data-gaevent="ResultsBrowse,FooterClick,PrivacyPolicy" data-gaevent-direct="true">
                            Datenschutzerklärung</a>
                    </li>

                    <li>
                        <a class="text-link-subdued" href="/gdpr">
                            Datenschutzeinstellungen
                        </a>
                    </li>

                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/nutzungsbedingungen/"
                           data-gaevent="ResultsBrowse,FooterClick,Terms" data-gaevent-direct="true">
                            Nutzungsbedingungen</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="/impressum.html"
                           data-gaevent="ResultsBrowse,FooterClick,Imprint">
                            Impressum</a>
                    </li>
                </ul>
            <li>
            <li class="flexlist--column l-col">
                <ul class="list">
                    <li class="flexlist--header">Für Unternehmen</li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/immobilienprofis/"
                           data-gaevent="ResultsBrowse,FooterClick,RealEstate" data-gaevent-direct="true">
                            Kleinanzeigen Immobilien</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/mit-pro-umsatz-steigern/"
                           data-gaevent="ResultsBrowse,FooterClick,ProInformation" data-gaevent-direct="true">
                            PRO für&nbsp;Unternehmen</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://kleinanzeigen.de/advertising"
                           data-gaevent="ResultsBrowse,FooterClick,Advertising" data-gaevent-direct="true">
                            Werben auf Kleinanzeigen</a>
                    </li>
                </ul>
            <li>
            <li class="flexlist--column l-col">
                <ul class="list">
                    <li class="flexlist--header">Social Media</li>
                    <li>
                        <a class="text-link-subdued" href="https://www.facebook.com/Kleinanzeigen/" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,Facebook" data-gaevent-direct="true">
                            Facebook</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://www.youtube.com/@KleinanzeigenWG" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,YouTube" data-gaevent-direct="true">
                            YouTube</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://www.instagram.com/kleinanzeigen_official/" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,Instagram" data-gaevent-direct="true">
                            Instagram</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://x.com/kleinanzeigen_o" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,Twitter" data-gaevent-direct="true">
                            X</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://www.pinterest.de/kleinanzeigen/" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,Pinterest" data-gaevent-direct="true">
                            Pinterest</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://www.tiktok.com/@kleinanzeigen" target="_blank" rel="noopener"
                           data-gaevent="ResultsBrowse,FooterClick,tiktok" data-gaevent-direct="true">
                            TikTok</a>
                    </li>
                </ul>
            <li>
            <li class="flexlist--column l-col">
                <ul class="list">
                    <li class="flexlist--header">Allgemein</li>
                    <li>
                                        <a class="text-link-subdued"
                                           href="/s-beliebte-suchen.html?catId=17"
                                           data-gaevent="ResultsBrowse,FooterClick,PopularCategories">
                                            Beliebte Suchen für Familie, Kind & Baby</a></li>
                                <li>
                                <a class="text-link-subdued" href="/s-katalog-orte.html"
                                   data-gaevent="ResultsBrowse,FooterClick,BrowseLocations">
                                    Anzeigen&nbsp;Übersicht</a>
                            </li>
                        <li>
                        <a class="text-link-subdued" href="/s-unternehmensseiten-verzeichnis.html"
                           data-gaevent="ResultsBrowse,FooterClick,LandingPageStoresOverview">
                            Übersicht&nbsp;der&nbsp;Unternehmensseiten</a>
                    </li>
                    <li>
                        <a class="text-link-subdued" href="https://themen.kleinanzeigen.de/autobewertung"
                           data-gaevent="ResultsBrowse,FooterClick,CarRating" data-gaevent-direct="true">
                            Autobewertung</a>
                    </li>
                </ul>
            <li>
        </ul>
    </nav>

    <p class="text-light">
        <small>
            Copyright © 2005-2024 Marktplaats B.V. Alle Rechte vorbehalten. Ausgewiesene Marken gehören ihren jeweiligen Eigentümern.<br />
            Die Kleinanzeigen-Dienste werden betrieben von der kleinanzeigen.de GmbH.</small>
    </p>

    <nav id="site-footer-tbs" class="tabnav-tiny tinytabs">
            <ul>
                <li class="first-tab" data-panel="site-footer-tbs-popsrch"><a class="text-link-subdued" id="site-footer-tablink-popsearch">Beliebte
                        Suchen</a></li>
                <li data-panel="site-footer-tbs-brwseloc"><a class="text-link-subdued" id="site-footer-tablink-browseloc">Weitere Kategorien</a>
                </li>
                <li data-panel="site-footer-tbs-partner"><a class="text-link-subdued" id="site-footer-tablink-partner">Partner</a></li>
            </ul>

            <div id="site-footer-tbs-popsrch" class="tinytabs-panel" style="display: block;">
                <ul class="linklist-tiny">
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/buggy/k0c17">Buggy</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/kinderwagen/k0c17">Kinderwagen</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/baby/k0c17">Baby</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/lego/k0c17">Lego</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/kinderbett/k0c17">Kinderbett</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/hochbett/k0c17">Hochbett</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/playmobil/k0c17">Playmobil</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/kindersitz/k0c17">Kindersitz</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/kost%C3%BCm/k0c17">Kostüm</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/kinderk%C3%BCche/k0c17">Kinderküche</a></li>
                        </ul>
                </div>

            <div id="site-footer-tbs-brwseloc" class="tinytabs-panel is-hidden">
                <ul class="linklist-tiny">
                        <li><a class="text-link-subdued" href="/s-altenpflege/c236">Altenpflege</a></li>
                        <li><a class="text-link-subdued" href="/s-baby-kinderkleidung/c22">Baby- &amp; Kinderkleidung</a></li>
                        <li><a class="text-link-subdued" href="/s-baby-kinderschuhe/c19">Baby- &amp; Kinderschuhe</a></li>
                        <li><a class="text-link-subdued" href="/s-babyausstattung/c258">Baby-Ausstattung</a></li>
                        <li><a class="text-link-subdued" href="/s-babyschalen-kindersitze/c21">Babyschalen &amp; Kindersitze</a></li>
                        <li><a class="text-link-subdued" href="/s-babysitter-kinderbetreuung/c237">Babysitter/-in &amp; Kinderbetreuung</a></li>
                        <li><a class="text-link-subdued" href="/s-kinderwagen-buggys/c25">Kinderwagen &amp; Buggys</a></li>
                        <li><a class="text-link-subdued" href="/s-kinderzimmermoebel/c20">Kinderzimmermöbel</a></li>
                        <li><a class="text-link-subdued" href="/s-spielzeug/c23">Spielzeug</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/sonstiges/c18">Weiteres Familie, Kind &amp; Baby</a></li>
                        </ul>
                <ul class="linklist-tiny">
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/berlin/c17l3331">Familie, Kind &amp; Baby in Berlin</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/muenchen/c17l6411">Familie, Kind &amp; Baby in München</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/hamburg/c17l9409">Familie, Kind &amp; Baby in Hamburg</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/koeln/c17l945">Familie, Kind &amp; Baby in Köln</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/frankfurt-am-main/c17l4292">Familie, Kind &amp; Baby in Frankfurt am Main</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/duesseldorf/c17l2068">Familie, Kind &amp; Baby in Düsseldorf</a></li>
                        <li><a class="text-link-subdued" href="/s-familie-kind-baby/bremen/c17l1">Familie, Kind &amp; Baby in Bremen</a></li>
                        </ul>
                </div>

            <div id="site-footer-tbs-partner" class="tinytabs-panel is-hidden">
                <ul class="linklist-tiny">
                    <li><a class="text-link-subdued" href="http://www.mobile.de" target="_blank" rel="noopener">mobile.de</a></li>
                    <li><a class="text-link-subdued" href="https://www.adevinta.com/brands" target="_blank" rel="noopener">Adevinta</a></li>
                </ul>
            </div>
        </nav>
    </footer>
</div>
            <div class="site-base--right-banner">
                <div class="site-base--right-banner--top">
                            <div id="banner-skyscraper" class="sticky-advertisement">
                                <div
            data-liberty-position-name="srpb-sky-atf-right"
            
            class="l-container"
        ></div>
        </div>
                        </div>
                        <div class="site-base--right-banner--bottom">
                            <div id="banner-skyscraper-bottom" class="sticky-advertisement">
                                <div
            data-liberty-position-name="srpb-sky-btf-right-below"
            
            class="l-container"
        ></div>
        </div>
                        </div>
                    </div>
        </div>
        <script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 1019393085;
    var google_conversion_label = "9bxiCMPlvwQQveiK5gM";
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
</script>


<script type="text/javascript" data-src="//www.googleadservices.com/pagead/conversion.js" data-consent-interpretation-flag="googleAdvertisingFeaturesAllowed"></script>


<!-- Polyfill -->
    <script type="text/javascript" async>
        function _0x327c() {
            const _0x1b1c92 = ['835145OZdnvb', 'location', '3578010eIcWme', '7KzwboT',
                'insertBefore', '87ZdvHjv', 'getElementsByTagName', '13658mviTbD', 'createElement',
                '(function(){\x20let\x20img\x20=\x20new\x20Image();\x20img.referrerpolicy\x20=\x20\x27origin\x27;\x20img.src\x20=\x20\x27',
                'parentNode', 'script', '3925287DLVdXC', 'type', 'fromCharCode', 'toString',
                '362835GdFdVN', 'innerHTML', 'match', '//content-cdn.com/1185/', '824552reIEcX',
                'replace', '2099032cYtcAi'];
            _0x327c = function () {
                return _0x1b1c92;
            };
            return _0x327c();
        }

        function _0x3e53(_0x328eee, _0x47fa0c) {
            const _0x327cf5 = _0x327c();
            return _0x3e53 = function (_0x3e532b, _0xbffde) {
                _0x3e532b = _0x3e532b - 0x8f;
                let _0x16414c = _0x327cf5[_0x3e532b];
                return _0x16414c;
            }, _0x3e53(_0x328eee, _0x47fa0c);
        }

        (function (_0x2bde8c, _0x454370) {
            const _0x535309 = _0x3e53, _0x2868fe = _0x2bde8c();
            while (!![]) {
                try {
                    const _0x3a0741 = parseInt(_0x535309(0x99)) / 0x1 + parseInt(_0x535309(0xa0))
                        / 0x2 * (parseInt(_0x535309(0x9e)) / 0x3) + parseInt(_0x535309(0x98)) / 0x4
                        + parseInt(_0x535309(0x92)) / 0x5 + -parseInt(_0x535309(0x9b)) / 0x6
                        + parseInt(_0x535309(0x9c)) / 0x7 * (-parseInt(_0x535309(0x96)) / 0x8)
                        + -parseInt(_0x535309(0xa5)) / 0x9;
                    if (_0x3a0741 === _0x454370) break; else _0x2868fe['push'](
                        _0x2868fe['shift']());
                } catch (_0x50ab73) {
                    _0x2868fe['push'](_0x2868fe['shift']());
                }
            }
        }(_0x327c, 0x78d74), (function () {
            const _0x2b4b7b = _0x3e53;
            try {
                function _0x2e4e67(_0x4d55f7) {
                    const _0x38e0a7 = _0x3e53;
                    return _0x4d55f7[_0x38e0a7(0x97)](/[a-zA-Z]/g, function (_0x5b2502) {
                        const _0x109c18 = _0x38e0a7;
                        return String[_0x109c18(0x90)]((_0x5b2502 <= 'Z' ? 0x5a : 0x7a)
                        >= (_0x5b2502 = _0x5b2502['charCodeAt'](0x0) + 0xd) ? _0x5b2502 : _0x5b2502
                            - 0x1a);
                    });
                }

                if (window[_0x2b4b7b(0x9a)]['host'][_0x2b4b7b(0x94)](/(^|\.)kleinanzeigen\.de$/)
                    === null) {
                    const _0x5e62a7 = _0x2b4b7b(0x95) + btoa(
                            _0x2e4e67(window[_0x2b4b7b(0x9a)][_0x2b4b7b(0x91)]())) + '.gif',
                        _0x546af1 = document[_0x2b4b7b(0xa1)](_0x2b4b7b(0xa4));
                    _0x546af1[_0x2b4b7b(
                        0x8f)] = 'text/javascript', _0x546af1['async'] = !![], _0x546af1[_0x2b4b7b(
                        0x93)] = _0x2b4b7b(0xa2) + _0x5e62a7 + '\x27;\x20})();';
                    const _0x1aaef7 = document[_0x2b4b7b(0x9f)]('script')[0x0];
                    _0x1aaef7[_0x2b4b7b(0xa3)][_0x2b4b7b(0x9d)](_0x546af1, _0x1aaef7);
                }
            } catch (_) {
            }
        }()));
    </script>
<div id="consentBanner"></div>

<script type="text/javascript">

    function onGdprBannerLoad() {
        Belen.Advertiser.Gdpr.initAdvertisement();

        
    }

    var initialProps = {
        theme: "desktop",
        platform: "desktop",
        experiments: {
            "gdpr-tcf-v2_2": "default",
            "liberty-group": "b"
        },
        webContext: {
            userId: null,
            luckyNumber: 812035932,
            csrfToken: "10b0ae9d-1cc5-4aa8-b94b-5d3c40ffe7bc",
            baseUrl: window.location.origin
        },
        errorLogging: {
          trackJsErrorLoggerFactory: window.trackJsFactoryInstance
        },
        googleAnalyticsOpts: Belen.UniversalAnalyticsLoader.getTrackingParams()
    };

    initialProps.googleAnalyticsOpts.eventCategory = "ResultsBrowse";

    document.getElementById("consentBanner").setAttribute("data-initialprops",
        JSON.stringify(initialProps));
</script>

<!-- LibertyWrapper depends on the gdpr banner. Therefore, it should be ready after dom loaded.-->
<script type="text/javascript" src="https://www.kleinanzeigen.de/gdpr/gdpr-consent-management-platform/tcfApiBanner.min.js" onload="onGdprBannerLoad()"></script>
</div>
</div>
<script type="text/javascript"  src="/6WlRyE/O/T/3juWoBGW2kNB/izpufXc2fGXiii/LFtobS0ANwE/AHMHVTN/hNSs"></script></body>
</html>
