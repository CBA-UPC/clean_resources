/**
 * InvocaJS Version: 4.30.5
 * Updated: 12/18/2023
 *
 * The information and software code below,
 * located at http://solutions.invocacdn.com/js/invoca-4.30.5.min.js,
 * are confidential and are the sole property of Invoca.
 * Your application or use of this information in any way is subject to
 * Invoca's Terms of Service, which are located at
 * http://www.invoca.com/terms-of-service/. In accordance with those terms, your
 * use of this information and code may be terminated by Invoca at any time
 * for any reason.  The rights granted to you under those terms are expressly
 * non-exclusive. You may not sell, assign, sublicense, or otherwise transfer or
 * agree to transfer all or any portion of those rights without Invoca's
 * prior written consent.  You agree not to copy, republish, frame, download,
 * transmit, modify, rent, lease, loan, sell, assign, distribute, license,
 * sublicense, reverse engineer, or create derivative works based on the
 * information and/or software code on this page except as expressly authorized
 * in Invoca's Terms of Service.  Your use and continued use of this
 * information and/or code constitute your acceptance of Invoca's Terms of Service.
 *
 * Copyright (c) 2023 Invoca (r)
 */

this.Invoca=function(){"use strict";var Invoca=window.Invoca||{};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_defineProperty(e,t,n[t])}))}return e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}Invoca.doubleLoad=!!window.Invoca,Invoca.PNAPI={version:"4.30.5",environment:"production",exceptionsApiKey:"",loaded:!1,shouldReRunAfterTimeout:!0,config:{},PHONE_NUMBER_SEPARATOR_REGEX:"([^0-9a-zA-Z]){0,3}",INVOCA_ID_PARAM_NAME:"invoca_id"},Invoca._PoolParams={},Invoca.Tools={},Invoca.Integrations={DEFAULT_WAIT_TIME:1e3},Invoca._DOM=Invoca._DOM||{SCRIPT_TAG_REVISION_PARAM_ATTR:"data-invoca-revision-param-name",SCRIPT_TAG_ID_ATTR:"data-invoca-tag-id"},Invoca._Refresh=Invoca._Refresh||{defaultWaitTimeSeconds:50,averageWaitTimeSeconds:null,active:!0,firstRun:!0},Invoca.location=window.location.href,Invoca.search=window.location.search,Invoca.referrer=document.referrer,Invoca.domain=document.domain,Invoca.userAgent=navigator.userAgent,Invoca.now=function(){return(new Date).getTime()},Invoca.log=function(e,t){"undefined"!=typeof console&&(t&&void 0!==console.error?console.error(e):Invoca.PNAPI.currentPageSettings.debugMode&&void 0!==console.log&&console.log(e))};var find=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null},Metrics=function(){function e(t){var n=this,r=t.initialLoad;_classCallCheck(this,e),_defineProperty(this,"tracker",{collect:function(e,t,r){var a=[e,t||Date.now()];!r||r.requireRoundTrip?n.readRoundTripData(e)||n.roundTripData.push(a):n.nextRequestData.push(a)},reportableData:function(){var e=n.isComplete()&&n.roundTripDataIsWanted;return n.nextRequestData.concat(e?n.roundTripData:[])},resetRequestData:function(){n.nextRequestData=[]},readRoundTripData:this.readRoundTripData.bind(this),readNextRequestData:this.readNextRequestData.bind(this),isComplete:this.isComplete.bind(this)}),_defineProperty(this,"noop",{collect:function(){},reportableData:function(){return[]},resetRequestData:function(){},readRoundTripData:function(){},readNextRequestData:function(){},isComplete:function(){}}),this.initialLoad=r,this.roundTripDataHasBeenSent=!1,this.roundTripDataIsWanted=!0,this.nextRequestData=[]}return _createClass(e,[{key:"readRoundTripData",value:function(e){return this._read(e,this.roundTripData)}},{key:"readNextRequestData",value:function(e){return this._read(e,this.nextRequestData)}},{key:"newRun",value:function(){return this.nextRequestData=[],this.roundTripData?this.noop:(this.roundTripData=[["initialLoad",this.initialLoad]],this.tracker)}},{key:"isComplete",value:function(){return!this.roundTripDataHasBeenSent&&!!this.readRoundTripData("endMapNumberRequest")}},{key:"_read",value:function(e,t){var n=find(t,(function(t){return t[0]===e}));if(n)return n[1]}}]),e}(),metricsInstance=new Metrics({initialLoad:Date.now()}),escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,(function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function str(e,t){var n,r,a,o,i,c=gap,s=t[e];switch(s&&"object"===_typeof(s)&&s.constructor&&s.constructor!==Array&&s.constructor!==Object&&"function"==typeof s.toJSON&&(s=s.toJSON(e)),"function"==typeof rep&&(s=rep.call(t,e,s)),_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(s)){for(o=s.length,n=0;n<o;n+=1)i[n]=str(n,s)||"null";return a=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+c+"]":"["+i.join(",")+"]",gap=c,a}if(rep&&"object"===_typeof(rep))for(o=rep.length,n=0;n<o;n+=1)"string"==typeof rep[n]&&(a=str(r=rep[n],s))&&i.push(quote(r)+(gap?": ":":")+a);else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a=str(r,s))&&i.push(quote(r)+(gap?": ":":")+a);return a=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+c+"}":"{"+i.join(",")+"}",gap=c,a}}function stringifyJSON(e,t,n){var r;if("number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);rep=t;var a=_typeof(t);if(t&&"function"!==a&&("object"!==a||"number"!==a.length))throw new Error("stringifyJSON");return str("",{"":e})}var extend=function(){for(var e=arguments[0],t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)r&&n.hasOwnProperty(r)&&void 0!==n[r]&&(e[r]=n[r])}return e};Invoca.PNAPI.extend=extend;var forEach=function(e,t){var n;if(e.constructor===Array)for(n=0;n<e.length;n++)t(e[n],n);else if(e.constructor===Object){var r=Invoca.PNAPI.getKeys(e);for(n=0;n<r.length;n++)t(r[n],e[r[n]],n)}else for(n=0;n<e.length;n++)t(e[n],n)};Invoca.PNAPI.forEach=forEach;var reduce=function(e,t,n){if(void 0===n)throw new Error("Invoca.PNAPI.reduce requires an initialValue");return function(e,t){if(null===this)throw new TypeError("Invoca.PNAPI.reduce called on null or undefined object");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=Object(this),r=n.length>>>0,a=0,o=t;for(;a<r;)a in n&&(o=e(o,n[a],a,n)),a++;return o}.call(e,t,n)};Invoca.PNAPI.reduce=reduce;var getKeys=(hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable("toString"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length,function(e){if("object"!==_typeof(e)&&("function"!=typeof e||null===e))throw new TypeError("Invoca.PNAPI.getKeys called on non-object");var t,n,r=[];for(t in e)hasOwnProperty.call(e,t)&&r.push(t);if(hasDontEnumBug)for(n=0;n<dontEnumsLength;n++)hasOwnProperty.call(e,dontEnums[n])&&r.push(dontEnums[n]);return r}),hasOwnProperty,hasDontEnumBug,dontEnums,dontEnumsLength;Invoca.PNAPI.getKeys=getKeys,Invoca.PNAPI.getValues=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Invoca.PNAPI.getKeys(e).map((function(t){return e[t]}))},Invoca.PNAPI.escapeRegex=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}&;#]/g,"\\$&")};var formatTime=function(e){var t=function(e){return("0"+e).slice(-2)};return"".concat(t(e.getHours()),":").concat(t(e.getMinutes()),":").concat(t(e.getSeconds()))};function sortData(e){var t={};return Object.keys(e).sort().forEach((function(n){void 0!==e[n]&&null!==e[n]&&(t[n]=e[n])})),t}function hasNewData(e,t){var n=sortData(t);return stringifyJSON(sortData(e))!==stringifyJSON(n)}function nodeContains(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1}var messagesObject={};function messages(){return messagesObject}function addToClientMessages(e,t){messagesObject[e]=t}function resetClientMessageValue(e){delete messagesObject[e]}function stringifyObjectValues(e){var t={};return forEach(e,(function(e,n){t[e]=n&&"object"===_typeof(n)?stringifyJSON(n):n})),t}Invoca.ClientInfo=Invoca.ClientInfo||function(){function e(){return{url:Invoca.location,referrer:Invoca.referrer}}return{getAll:function(){return Invoca.PNAPI.extend({},e(),Invoca.ClientInfo._disableDeviceDetails?{}:{cores:t(),platform:n(),screenWidth:Invoca.screenWidth||window.screen&&window.screen.width,screenHeight:Invoca.screenHeight||window.screen&&window.screen.height,language:Invoca.language||window.navigator&&(window.navigator.userLanguage||window.navigator.language)})},getPageInfo:e};function t(){return Invoca.navigatorHardwareConcurrency||navigator.hardwareConcurrency}function n(){return Invoca.navigatorPlatform||navigator.platform}}();var requestArgs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Invoca.PNAPI,r=n.version,a=n.currentPageSettings.networkId;return extend({},{network_id:a,js_version:r,tag_id:Invoca.Client.getTagId(),request_data_shared_params:stringifyJSON(stringifyObjectValues(e||{})),client_messages:stringifyJSON(messages()),client_info:stringifyJSON(Invoca.ClientInfo.getAll())},t)};function removeUndefinedValues(e){var t=getKeys(e);return reduce(t,(function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}var ALLOWED_VERSIONS=["2014-09-01"];function requestUrl(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Invoca.PNAPI.currentPageSettings,r=n.networkId,a=n.forceHttps,o=n.dataSilo,i=a?"https:":window.location.protocol,c=document.createElement("a");Invoca.PNAPI.config.URL&&(c.href=Invoca.PNAPI.config.URL),Invoca.PNAPI.config.customHost&&(Invoca.PNAPI.config.customHost=Invoca.PNAPI.config.customHost.replace(/^(https?:)?\/\//,"")),Invoca.PNAPI.config.customPath&&(Invoca.PNAPI.config.customPath=Invoca.PNAPI.config.customPath.replace(/^([^/].*)/,"/$1"));var s=e?"":c.pathname.replace(/^\/$/,""),u=Invoca.PNAPI.config.customHost||c.host||getDefaultHost(o),l=Invoca.PNAPI.config.customPath||s||getDefaultPath(e),d="".concat(i,"//").concat(u).concat(l);return t&&(d=(d=d.replace(/\.jsonp$/i,"_debug.jsonp")).replace(/\.json$/i,"_debug.json")),d=d.replace(/VERSION_KEY/,ALLOWED_VERSIONS[0]).replace(/PARTITION/,(parseInt(r)||0)%16).replace(/NETWORK_ID/,r)}function getDefaultHost(e){return e&&"us"!==e?"pnapi.".concat(e,".invoca.net"):"pnapi.invoca.net"}function getDefaultPath(e){return e?"/NETWORK_ID/na.jsonp":"/PARTITION/api/VERSION_KEY/map_number.jsonp"}var logData=[],logHistory={warningCount:0},MAX_WARNINGS_TO_LOG=100,clearLog=function(){for(var e in logData.length=0,logHistory)delete logHistory[e];logHistory.warningCount=0};Invoca.PNAPI.clearLog=clearLog,Invoca.PNAPI.display=function(){return console.log("\n"),console.log("InvocaJS ".concat(Invoca.PNAPI.version," Logs:")),console.log("-----------------------"),forEach(logData,(function(e){var t="log";if(e.constructor===Object){var n,r=[];e.type&&(t=e.type),e.time&&r.push("".concat(formatTime(e.time),":")),r.push(e.message);var a=logHistory[e.message];a&&a>1&&r.push("(".concat(a," times)")),(n=console)[t].apply(n,r)}else console[t](e)})),console.log("-----------------------"),null};var log=function(e){var t;"undefined"!=typeof console&&void 0!==console.log&&((null===(t=Invoca.PNAPI.currentPageSettings)||void 0===t?void 0:t.debugMode)&&console.log("Invoca ".concat(Invoca.PNAPI.version,":"),e));logData.push({message:e,type:"log",time:new Date})};Invoca.PNAPI.log=function(e){warn("Invoca.PNAPI.log is deprecated and will be removed in a future version. Please use console.log instead."),log(e)};var logOnce=function(e){logHistory[e]?logHistory[e]+=1:(logHistory[e]=1,log(e))};Invoca.PNAPI.logOnce=logOnce;var warn=function(e){"undefined"!=typeof console&&void 0!==console.warn&&(logHistory.warningCount>=MAX_WARNINGS_TO_LOG&&!logHistory.warningCountReached?(logHistory.warningCountReached=!0,console.warn("Invoca: max warnings have been reached. Use 'Invoca.PNAPI.display()' to view full debug logging.")):logHistory.warningCount<MAX_WARNINGS_TO_LOG&&console.warn("Invoca ".concat(Invoca.PNAPI.version,":"),e),logHistory.warningCount++),logData.push({message:e,type:"warn",time:new Date})};function jsonArgsThatExist(e,t){var n=e.requestData,r=e.requestDataSharedParams,a=Invoca.PNAPI.currentPageSettings.destinationSettings,o=t.reportableData(),i=requestArgs(r,{request_data:stringifyJSON(n),destination_settings:a?stringifyJSON(a):void 0,metrics:o.length>0?stringifyJSON(o):void 0});return t.isComplete()&&(metricsInstance.roundTripDataHasBeenSent=!0),resetClientMessageValue("allDataReset"),removeUndefinedValues(i)}function onResponse(e,t,n){log("Invoca.PNAPI.requestPromoNumbers onResponse triggered. Response data below:"),log(e),n.resetRequestData();var r=t.batchId||(new Date).getTime(),a=find(e,(function(e){return"settings"===e.type}));metricsInstance.roundTripDataIsWanted=(a||{}).metrics,t.context?t.onComplete.apply(t.context,[r,e]):t.onComplete(r,e)}function requestPromoNumbers(e,t){var n=Invoca.PNAPI.currentPageSettings.ssa;if("function"==typeof e.onComplete)if(Invoca.PNAPI.currentPageSettings.networkId){var r=requestUrl(n),a=jsonArgsThatExist(e,t);Invoca.PNAPI.requestWithData(r,a,n,t,(function(n){return onResponse(n,e,t)}))}else Invoca.log("ERROR: networkId must be set before calling Invoca.PNAPI.requestPromoNumbers",!0);else Invoca.log("Invoca.PNAPI.requestPromoNumbers: onComplete callback is required",!0)}Invoca.PNAPI.warn=function(e){warn("Invoca.PNAPI.warn is deprecated and will be removed in a future version. Please use console.warn instead."),warn(e)},Invoca.PNAPI=extend({},Invoca.PNAPI,{ALLOWED_VERSIONS:ALLOWED_VERSIONS,requestPromoNumbers:requestPromoNumbers}),Invoca.PNAPI.pendingRequests=Invoca.PNAPI.pendingRequests||[];var addRequest=function(e){find(Invoca.PNAPI.pendingRequests,(function(t){return t===e}))||Invoca.PNAPI.pendingRequests.push(e)},removeRequest=function(e){Invoca.PNAPI.pendingRequests=Invoca.PNAPI.pendingRequests.filter((function(t){return t!==e}))},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function walk(e,t){var n,r,a=e[t];if(a&&"object"===_typeof(a))for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(void 0!==(r=walk(a,n))?a[n]=r:delete a[n]);return reviver.call(e,t,a)}function parseJSON(text,reviver){var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,(function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("parseJSON")}function encodeUrlParams(e,t){var n=-1===e.search(/\?/)?"?":"&";for(var r in t)t.hasOwnProperty(r)&&(n+=encodeURIComponent(r)+"="+encodeURIComponent(t[r])+"&");return Object.keys(t).length?e+n:e}Invoca.JSON={parse:parseJSON,stringify:stringifyJSON},Invoca.JSON.requestWithData=function(e,t,n,r,a){var o=encodeUrlParams(e,t);if(n){addRequest(o);var i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.onload=function(){if(200===this.status)try{var e=JSON.parse(this.responseText);removeRequest(o),r&&r.collect("jsonRequestSucceeded","counter",{requireRoundTrip:!1}),a(e)}catch(e){c()}else c()},i.onerror=c,i.open("POST",o),i.send()}else Invoca.log("Invoca.JSON.requestWithData: JSON request with SSA disabled is not allowed",!0);function c(){var t="jsonRequestFailed."+(i.status?i.status:"unknown");r&&r.collect(t,"counter",{requireRoundTrip:!1}),warn("Request to "+e+" failed. Unable to replace numbers.")}},Invoca.JSONP=Invoca.JSONP||{},Invoca.JSONP.counter=0,Invoca.JSONP.requestWithData=function(e,t,n,r){var a="json_rr"+ ++Invoca.JSONP.counter;t.jsoncallback=a;var o=encodeUrlParams(e,t);return n&&addRequest(o),window[a]=function(e){removeRequest(o),r(e);try{delete window[a]}catch(e){}window[a]=null},Invoca.PNAPI.loadScript(o,(function(){this&&this.parentNode&&this.parentNode.removeChild(this)}),(function(){warn("Request to "+e+" failed. Unable to replace numbers.")})),a};var readAttribute=function(e,t){return e&&"object"===_typeof(e)&&e.getAttribute?e.getAttribute(t):null},cachedRootDomain;function readCookie(e){try{for(var t=document.cookie.split("; "),n=t.length-1;n>=0;n--){var r=t[n],a=r.indexOf("=");if(r.substring(0,a)===e)return r.substring(a+1)}return null}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.Tools.readCookie")}}function writeCookie(e,t,n,r){try{var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var o="expires="+a.toUTCString(),i="domain="+(r||"");document.cookie=e+"="+t+"; "+o+"; path=/; "+i}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"writeCookie")}}function rootDomain(){if(void 0!==cachedRootDomain)return cachedRootDomain;for(var e=Invoca.domain.split("."),t=null,n="",r=e.length-1;r>=0;r--)try{if(writeCookie(n=".".concat(e[r]).concat(n),"1",1,n),readCookie(n)){t=n;break}}catch(e){}finally{n&&writeCookie(n,"",-1,n)}return cachedRootDomain=t}function setCookie(e,t,n){writeCookie(e,t,n,rootDomain())}function removeCookie(e){var t=Invoca.domain.split(".");if(t.length<=2)setCookie(e,"",-1);else for(var n=0;n<t.length-1;n++){writeCookie(e,"",-1,t.slice(n,t.length).join("."))}}var REVISION_COOKIE_NAME="invoca_revision",REVISION_PARAM_NAME="invoca_rev",tagId=null,revision=null,loaded=!1,getTagId=function(){return tagId},getRevision=function(){return revision},getLoaded=function(){return loaded},setLoaded=function(e){return loaded=e};function fetchRevision(){var e=_findInvocaScriptTag();if(tagId=window.InvocaTagId||readAttribute(e,Invoca._DOM.SCRIPT_TAG_ID_ATTR),revision=Invoca.Tools.readUrl(REVISION_PARAM_NAME)||_getExistingRevision(),tagId){var t=buildRevisionUrl(tagId,revision);Invoca.PNAPI.loadScript(t,_handleSuccess,_handleError)}else e&&warn("Client <script> tag misconfigured, ensure attributes are correct")}function clearRevision(){revision=null,removeCookie(REVISION_COOKIE_NAME)}function buildRevisionUrl(e,t){var n=window.InvocaCDNUrl||"//solutions.invocacdn.com";return"".concat(n,"/js/networks/").concat(e,"/tag-").concat(t,".js")}function _findInvocaScriptTag(){var e,t=document.getElementsByTagName("script");return Invoca.PNAPI.forEach(t,(function(t){readAttribute(t,Invoca._DOM.SCRIPT_TAG_ID_ATTR)&&(e=t)})),e}function _getExistingRevision(){var e=readCookie(REVISION_COOKIE_NAME);return"null"!==e&&e?(warn("You are testing revision ".concat(e)),e):"live"}function _handleSuccess(){loaded=!0,log("Successfully loaded revision ".concat(revision)),_updateCachedRevision(revision)}function _handleError(){warn('Revision "'.concat(revision,'" not found, proceeding with live version'));var e=buildRevisionUrl(tagId,revision="live");Invoca.PNAPI.loadScript(e,_handleSuccess,(function(){warn("Invoca: Client <script> tag misconfigured, could not load live tag")}))}function _updateCachedRevision(e){setCookie(REVISION_COOKIE_NAME,e,"live"===e?-1:60/1440)}var DEFAULT_COUNTRY="US",country=DEFAULT_COUNTRY,setCountry=function(e){return country=e||DEFAULT_COUNTRY},defaultSettings={active:!0,autoRun:!0,autoSwap:!1,campaignIdOverrideParam:null,cookieDays:1,cookieNames:[],country:DEFAULT_COUNTRY,debugMode:!1,destinationAsId:!1,defaultCampaignId:null,disableUrlParams:[],doNotSwap:[],integrations:[],onCompleteOverride:null,poolParams:null,requiredParams:{},refresh:!0,ssa:void 0,telLinkOnly:!1,updatePoolParams:!0,useLocalStorage:!1,waitForData:[]};Invoca.PNAPI.defaultPageSettings=defaultSettings;var networkIdsToReportCustomCodeExceptions=["1","871","1593"];function shouldNotifyOnCustomCodeException(e){return!!networkIdsToReportCustomCodeExceptions.filter((function(t){return e.toString()===t}))[0]}function checkLocalStorage(){try{return window.localStorage}catch(e){return warn("Invoca: Local Storage is not accessible."),null}}function flatten(e){return[].concat.apply([],e)}function includes(e,t){if(!e||!Array.isArray(e))throw new TypeError("Supplied list is not an array. You must supply a valid array to search in.");return e.some((function(e){return e===t}))}var excludedNetworkIdList=["-1","874","992","1088","1487","1566","1593","1649","1682","1725","1755","1767","1820","1856","1862","1876","1879","1884","344","936","1171","1473","1485","1521","1572","1639","1645","1719","1720","1768","548","1077","1249","1387","1414","1498","1604","1686","1688","1742","1761","1794","1799","1864","1878","1894"];function areNetworkClientSideParamsEnforced(e){return!!e&&!includes(excludedNetworkIdList,e.toString())}var MAX_COOKIE_DAYS=36500,INVOCA_ID_PARAM_NAME=Invoca.PNAPI.INVOCA_ID_PARAM_NAME,localStorageEnabled,canaryMode=!1,ready=!1,memoryCache=null,allowedClientSideParamNames,dynamicNumbersMemoryCache=new Set;function defaultValues(e){return{ttl:ttl(),session:e||{},config:{ce:!0,fv:!0}}}function loadPersistedDataIntoMemory(){if(memoryCache)resetCacheIfExpired(memoryCache);else{var e=readCookie("invoca_session"),t=checkLocalStorage()&&window.localStorage.getItem("Invoca"),n=e||t;if(n){var r=parseCachedData(n);resetCacheIfExpired(r)||(memoryCache=r)}else memoryCache=defaultValues()}}function write(e){memoryCache=parseCachedData(e),localStorageEnabled?localStorage.setItem("Invoca",e):setCookie("invoca_session",e,MAX_COOKIE_DAYS)}function ttl(){var e=new Date,t=(Invoca.PNAPI.currentPageSettings||defaultSettings).cookieDays;return e.setDate(e.getDate()+t),e.toJSON()}function prepareJSON(e){var t=e.config||{},n=stringifyJSON({ttl:ttl(),session:allowedSessionData(e.session||{}),config:existingValues(Object.keys(t),t)});return"base64"===Invoca.PNAPI.currentPageSettings.cacheEncoding?window.btoa?window.btoa(n):"":window.encodeURIComponent(n)}function existingValues(e,t){return reduce(e,(function(e,n){var r=t[n];return null!=r&&(e[n]=r),e}),{})}function allowedSessionData(e){return existingValues(allowedParamsAreEnforced()?allowedClientSideParamNames||["invoca_id"]:Object.keys(e),e)}function parseBase64(e){try{return parseJSON(window.atob(e))}catch(t){return parseJSON(window.decodeURIComponent(e))}}function parseURIEncoded(e){try{return parseJSON(window.decodeURIComponent(e))}catch(t){return parseJSON(window.atob(e))}}function parseCachedData(e){var t=Invoca.PNAPI.currentPageSettings.cacheEncoding;try{return"base64"===t?parseBase64(e):parseURIEncoded(e)}catch(e){return{}}}function resetCacheIfExpired(e){var t=new Date;if(e.ttl&&t>new Date(e.ttl)){var n=(e.session||{}).invoca_id;return resetAllData(),initialize(),n&&set("session",INVOCA_ID_PARAM_NAME,n),log("TTL expired so session was cleared"),!0}}function existingCookieIsValid(){var e=parseCachedData(readCookie("invoca_session"));return"object"===_typeof(e)&&(null==e?void 0:e.session)&&(null==e?void 0:e.config)}function initializeLocalStorage(){if(!localStorage.getItem("Invoca")){var e=defaultValues(),t=prepareJSON(e);memoryCache=e,localStorage.setItem("Invoca",t)}}function initializeCookieStorage(){if(!existingCookieIsValid()){var e=defaultValues(),t=prepareJSON(e);memoryCache=e,setCookie("invoca_session",t,MAX_COOKIE_DAYS)}}function allowedParamsAreSet(){return allowedClientSideParamNames&&allowedClientSideParamNames.constructor===Array}function allowedParamsAreEnforced(){try{var e=!!Invoca.PNAPI.currentPageSettings.ssa,t=Invoca.PNAPI.currentPageSettings.networkId;return e&&areNetworkClientSideParamsEnforced(t)||allowedParamsAreSet()}catch(e){return warn("allowedParamsAreEnforced() called too soon (Invoca.PNAPI.currentPageSettings doesn't exist yet). Params are not being enforced."),!1}}function buildDynamicNumberCacheKey(e){return"INVOCA_DYNAMIC_NUMBER"+e}function initialize(){var e;if(ready)return!0;(localStorageEnabled=(null===(e=Invoca.PNAPI.currentPageSettings)||void 0===e?void 0:e.useLocalStorage)&&checkLocalStorage())?initializeLocalStorage():initializeCookieStorage(),ready=!0}function get(e){return loadPersistedDataIntoMemory(),e?memoryCache[e]||{}:memoryCache}function set(e,t,n){if(ready){var r=get(),a=void 0!==r[e];void 0===n?r[e]=t:(a||(r[e]={}),r[e][t]=n),write(prepareJSON(r))}else initialize()}function refreshCache(){memoryCache=null,loadPersistedDataIntoMemory()}function saveEntireCache(e){var t=e.sessionParams,n=void 0===t?{}:t,r=e.configParams,a=void 0===r?{}:r;ready||initialize();var o=get();o.session=n,o.config=extend({},o.config,a),write(prepareJSON(o))}function resetAllData(){removeCookie("invoca_session"),checkLocalStorage()&&window.localStorage.removeItem&&localStorage.removeItem("Invoca"),memoryCache=null,ready=!1,addToClientMessages("allDataReset",!0)}function allowedClientSideParams(){var e=flatten([].slice.call(arguments));e.push("invoca_id"),allowedClientSideParamNames=e}function resetAllowedClientSideParams(){allowedClientSideParamNames=void 0}function firstVisit(){return!!get("config").fv}var setCanaryMode=function(e){return canaryMode=e},getCanaryMode=function(){return canaryMode};function paramIsInAllowedList(e){return!allowedParamsAreEnforced()||(allowedParamsAreSet()?allowedClientSideParamNames.indexOf(e)>-1:"invoca_id"===e)}function cacheDynamicNumber(e){e&&(localStorageEnabled?localStorage.setItem(buildDynamicNumberCacheKey(e),"true"):dynamicNumbersMemoryCache.add(e))}function isDynamicNumberCached(e){return!!e&&(localStorageEnabled?!!localStorage.getItem(buildDynamicNumberCacheKey(e)):dynamicNumbersMemoryCache.has(e))}function getDynamicNumbersMemoryCache(){return dynamicNumbersMemoryCache}function clearDynamicNumbersMemoryCache(){dynamicNumbersMemoryCache=new Set}var Cache=Object.freeze({__proto__:null,ttl:ttl,initialize:initialize,get:get,set:set,refreshCache:refreshCache,saveEntireCache:saveEntireCache,resetAllData:resetAllData,allowedClientSideParams:allowedClientSideParams,resetAllowedClientSideParams:resetAllowedClientSideParams,firstVisit:firstVisit,setCanaryMode:setCanaryMode,getCanaryMode:getCanaryMode,paramIsInAllowedList:paramIsInAllowedList,cacheDynamicNumber:cacheDynamicNumber,isDynamicNumberCached:isDynamicNumberCached,getDynamicNumbersMemoryCache:getDynamicNumbersMemoryCache,clearDynamicNumbersMemoryCache:clearDynamicNumbersMemoryCache}),includedNetworkIdList=["-1","1989","457"];function useBase64EncodedCache(e){return!!e&&includes(includedNetworkIdList,e.toString())}function startFromWizard(e){var t=Invoca.PNAPI.extend({},defaultSettings,onlyAvailableKeys(e)),n=t.cookieDays,r=t.useLocalStorage,a={};useBase64EncodedCache(t.networkId)&&(a={cacheEncoding:"base64"}),Invoca.PNAPI.currentPageSettings=_objectSpread({cookieDays:n,useLocalStorage:r},a);var o={cacheWasReset:resetCacheOn(e.resetCacheOn||[]),poolParams:Invoca.PNAPI.extend({},e.poolParams,defaultPoolParams(e))},i=getCustomizedIntegrationSettings(Invoca.PNAPI.extend({},e,o));Invoca.PNAPI.integration(Invoca.PNAPI.extend({},i,a))}function getCustomizedIntegrationSettings(e){var t,n=Invoca.PNAPI.extend({},defaultSettings,onlyAvailableKeys(e));if(Invoca.Client.customCode){var r,a=Invoca.PNAPI.extend({},n);try{if((r=Invoca.Client.customCode(a))&&r.poolParams&&n.poolParams){var o=Invoca.PNAPI.extend({},n.poolParams,r.poolParams);r.poolParams=o}}catch(e){shouldNotifyOnCustomCodeException(a.networkId)?Invoca.ExceptionHandling.notify(e,"Invoca.Client.customCode"):warn("Custom code block failed: "+e.message)}t=r&&Invoca.PNAPI.extend({},n,onlyAvailableKeys(r))||n}else t=n;return t}function onlyAvailableKeys(e){var t={};return["active","autoRun","autoSwap","cacheWasReset","campaignIdOverrideParam","cookieNames","cookieDays","country","dataSilo","destinationAsId","destinationSettings","defaultCampaignId","defaultDestinationName","destinationParam","disableUrlParams","doNotSwap","forceHttps","onPhoneNumberFound","integrations","maxWaitFor","networkId","numberToReplace","numberSelector","onComplete","onCompleteOverride","poolParams","requiredParams","reRunAfter","resetCacheOn","ssa","telLinkOnly","useLocalStorage","waitForData"].forEach((function(n){t[n]=e[n]})),t}function resetCacheOn(e){var t=Invoca.Tools.getQueryStringsHash(),n=Invoca.PNAPI.getKeys(t),r=!1;return Invoca.PNAPI.forEach(e,(function(e){Invoca.Tools.contains(n,e)&&(Invoca.Tools.resetAllData(),r=!0)})),r}function buildMediumSource(e){if(e){if(Invoca.Tools.readUrl("gclid"))return["paid search","google.com"];var t=Invoca.Tools.parseDomainFromFullUrl(Invoca.referrer).slice(1);return Invoca.Tools.parseReferrer({"google.com":["organic","google.com"],"bing.com":["organic","bing.com"],"yahoo.com":["organic","yahoo.com"],"duckduckgo.com":["organic","duckduckgo.com"],"":["direct","direct"]},["referral",t],null,"topLevelDomain")}return[]}function defaultPoolParams(e){var t=e.organicSources;if(firstVisit()){var n=_slicedToArray(buildMediumSource(t),2),r=n[0],a=n[1];return{utm_medium:Invoca.Tools.readUrl("utm_medium")||r,utm_source:Invoca.Tools.readUrl("utm_source")||a}}return{utm_medium:Invoca.Tools.readInvocaData("utm_medium",Invoca.Tools.readUrl("utm_medium"))||void 0,utm_source:Invoca.Tools.readInvocaData("utm_source",Invoca.Tools.readUrl("utm_source"))||void 0}}function parseCustomDataField(e,t,n,r){return parseFromAttributionModel(t,dataValueFromSourceType(n,r,e),e)}function dataValueFromSourceType(e,t,n){switch(e){case"URLParam":return Invoca.Tools.readUrl(t||n);case"Cookie":return readCookie(t);case"JavascriptDataLayer":return evalDataSourceName(t);default:return log("Custom data field has an invalid dataSourceType: ".concat(e)),null}}function parseFromAttributionModel(e,t,n){switch(e){case"First":return Invoca.Tools.readInvocaData(n,t);case"Last":case"Unique":return lastOrUnique(t,n);case"Multi":return t;default:return log("Custom data field ".concat(n," has an invalid attribution model: ").concat(e)),null}}function evalDataSourceName(dataSourceName){try{var _dataSourceResult=eval("(".concat(dataSourceName,")"));return"function"==typeof _dataSourceResult?_dataSourceResult.call():_dataSourceResult}catch(e){log("Error evaluating supplied data source: ".concat(e.toString()))}}function lastOrUnique(e,t){return e||Invoca.Tools.readInvocaData(t)}Invoca.Client=Invoca.Client||{start:fetchRevision,startFromWizard:startFromWizard,clearRevision:clearRevision,buildRevisionUrl:buildRevisionUrl,getRevisionUrl:function(){return buildRevisionUrl(getTagId(),getRevision())},getRevisionId:getRevision,getTagId:getTagId,doneLoading:function(){return setLoaded(!0)},isLoaded:getLoaded,parseCustomDataField:parseCustomDataField};var isVanity=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/[A-Z]/i.test(e)},CHAR_TO_NUMBER_MAP={a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,q:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9,z:9},convertToDigits=function(e){return e.split("").map((function(e){return CHAR_TO_NUMBER_MAP[e.toLowerCase()]||e})).join("")},MIN_LENGTH_FOR_NSN=2,MAX_LENGTH_FOR_NSN=17,MAX_LENGTH_COUNTRY_CODE=3,VALID_DIGITS="0-9０-９٠-٩۰-۹",DASHES="-‐-―−ー－",SLASHES="／/",DOTS="．.",WHITESPACE="  ­​⁠　",BRACKETS="()（）［］\\[\\]",TILDES="~⁓∼～",VALID_PUNCTUATION=""+DASHES+SLASHES+DOTS+WHITESPACE+BRACKETS+TILDES,PLUS_CHARS="+＋";function matchesEntirely(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return new RegExp("^(?:"+t+")$").test(e)}function mergeArrays(e,t){var n=e.slice(),r=t,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var c=i;e.indexOf(c)<0&&n.push(c)}return n.sort((function(e,t){return e-t}))}function _classCallCheck$1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ParseError=function e(t){_classCallCheck$1(this,e),this.name=this.constructor.name,this.message=t,this.stack=new Error(t).stack};ParseError.prototype=Object.create(Error.prototype),ParseError.prototype.constructor=ParseError;var semverCompare=function(e,t){for(var n=e.split("."),r=t.split("."),a=0;a<3;a++){var o=Number(n[a]),i=Number(r[a]);if(o>i)return 1;if(i>o)return-1;if(!isNaN(o)&&isNaN(i))return 1;if(isNaN(o)&&!isNaN(i))return-1}return 0},_typeof$1="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},_createClass$1=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck$2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var V3="1.2.0",DEFAULT_EXT_PREFIX=" ext. ",Metadata=function(){function e(t){_classCallCheck$2(this,e),validateMetadata(t),this.metadata=t,this.v1=!t.version,this.v2=void 0!==t.version&&-1===semverCompare(t.version,V3),this.v3=void 0!==t.version}return _createClass$1(e,[{key:"hasCountry",value:function(e){return void 0!==this.metadata.countries[e]}},{key:"country",value:function(e){if(!e)return this._country=void 0,this.country_metadata=void 0,this;if(!this.hasCountry(e))throw new Error("Unknown country: "+e);return this._country=e,this.country_metadata=this.metadata.countries[e],this}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]]}},{key:"countryCallingCode",value:function(){return this.country_metadata[0]}},{key:"IDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.country_metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.country_metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.country_metadata[1]:this.country_metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.country_metadata[this.v2?2:3]}},{key:"_getFormats",value:function(e){return e[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var e=this,t=this._getFormats(this.country_metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return t.map((function(t){return new Format(t,e)}))}},{key:"nationalPrefix",value:function(){return this.country_metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(e){return e[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.country_metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"nationalPrefixForParsing",value:function(){return this.country_metadata[this.v1?5:this.v2?6:7]||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.country_metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.country_metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormatting",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.country_metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.country_metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return(!this.types()||0!==this.types().length)&&!!this.types()}},{key:"type",value:function(e){if(this.hasTypes()&&getType(this.types(),e))return new Type(getType(this.types(),e),this)}},{key:"ext",value:function(){return this.v1||this.v2?DEFAULT_EXT_PREFIX:this.country_metadata[13]||DEFAULT_EXT_PREFIX}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(e){var t=this.countryCallingCodes()[e][0];this.hasCountry(t)&&this.country(t)}},{key:"selectedCountry",value:function(){return this._country}}]),e}(),Format=function(){function e(t,n){_classCallCheck$2(this,e),this._format=t,this.metadata=n}return _createClass$1(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormatting",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormatting()}},{key:"nationalPrefixIsMandatoryWhenFormatting",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormatting()}},{key:"usesNationalPrefix",value:function(){return this.nationalPrefixFormattingRule()&&"$1"!==this.nationalPrefixFormattingRule()&&/\d/.test(this.nationalPrefixFormattingRule().replace("$1",""))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),Type=function(){function e(t,n){_classCallCheck$2(this,e),this.type=t,this.metadata=n}return _createClass$1(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function getType(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function validateMetadata(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!is_object(e)||!is_object(e.countries)||!is_object(e.country_calling_codes)&&!is_object(e.country_phone_code_to_countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got "+(is_object(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+type_of(e)+": "+e)+".")}var is_object=function(e){return"object"===(void 0===e?"undefined":_typeof$1(e))},type_of=function(e){return void 0===e?"undefined":_typeof$1(e)};function getCountryCallingCode(e,t){if((t=new Metadata(t)).hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: "+e)}function isSupportedCountry(e,t){return void 0!==t.countries[e]}var RFC3966_EXTN_PREFIX=";ext=",CAPTURING_EXTN_DIGITS="(["+VALID_DIGITS+"]{1,7})";function create_extension_pattern(e){var t="xｘ#＃~～";switch(e){case"parsing":t=",;"+t}return RFC3966_EXTN_PREFIX+CAPTURING_EXTN_DIGITS+"|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|["+t+"]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*"+CAPTURING_EXTN_DIGITS+"#?|[- ]+(["+VALID_DIGITS+"]{1,5})#"}var EXTN_PATTERNS_FOR_PARSING=create_extension_pattern("parsing"),EXTN_PATTERNS_FOR_MATCHING=create_extension_pattern("matching"),EXTN_PATTERN=new RegExp("(?:"+EXTN_PATTERNS_FOR_PARSING+")$","i");function extractExtension(e){var t=e.search(EXTN_PATTERN);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(EXTN_PATTERN),a=1;a<r.length;){if(null!=r[a]&&r[a].length>0)return{number:n,ext:r[a]};a++}}var MIN_LENGTH_PHONE_NUMBER_PATTERN="["+VALID_DIGITS+"]{"+MIN_LENGTH_FOR_NSN+"}",VALID_PHONE_NUMBER="["+PLUS_CHARS+"]{0,1}(?:["+VALID_PUNCTUATION+"]*["+VALID_DIGITS+"]){3,}["+VALID_PUNCTUATION+VALID_DIGITS+"]*",VALID_PHONE_NUMBER_PATTERN=new RegExp("^"+MIN_LENGTH_PHONE_NUMBER_PATTERN+"$|^"+VALID_PHONE_NUMBER+"(?:"+EXTN_PATTERNS_FOR_PARSING+")?$","i");function isViablePhoneNumber(e){return e.length>=MIN_LENGTH_FOR_NSN&&VALID_PHONE_NUMBER_PATTERN.test(e)}var DIGITS={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function parseDigit(e){return DIGITS[e]}function parseDigits(e){var t="",n=e.split(""),r=Array.isArray(n),a=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var i=parseDigit(o);i&&(t+=i)}return t}function parseIncompletePhoneNumber(e){var t="",n=e.split(""),r=Array.isArray(n),a=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}t+=parsePhoneNumberCharacter(o,t)||""}return t}function parsePhoneNumberCharacter(e,t){if("+"===e){if(t)return;return"+"}return parseDigit(e)}var NON_FIXED_LINE_PHONE_TYPES=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function getNumberType(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(e.country){if(!(n=new Metadata(n)).hasCountry(e.country))throw new Error("Unknown country: "+e.country);var r=t.v2?e.nationalNumber:e.phone;if(n.country(e.country),matchesEntirely(r,n.nationalNumberPattern())){if(is_of_type(r,"FIXED_LINE",n))return n.type("MOBILE")&&""===n.type("MOBILE").pattern()?"FIXED_LINE_OR_MOBILE":n.type("MOBILE")?is_of_type(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE":"FIXED_LINE_OR_MOBILE";var a=NON_FIXED_LINE_PHONE_TYPES,o=Array.isArray(a),i=0;for(a=o?a:a[Symbol.iterator]();;){var c;if(o){if(i>=a.length)break;c=a[i++]}else{if((i=a.next()).done)break;c=i.value}var s=c;if(is_of_type(r,s,n))return s}}}}function is_of_type(e,t,n){return!(!(t=n.type(t))||!t.pattern())&&(!(t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0)&&matchesEntirely(e,t.pattern()))}function checkNumberLengthForType(e,t,n){var r=n.type(t),a=r&&r.possibleLengths()||n.possibleLengths();if("FIXED_LINE_OR_MOBILE"===t){if(!n.type("FIXED_LINE"))return checkNumberLengthForType(e,"MOBILE",n);var o=n.type("MOBILE");o&&(a=mergeArrays(a,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var i=e.length,c=a[0];return c===i?"IS_POSSIBLE":c>i?"TOO_SHORT":a[a.length-1]<i?"TOO_LONG":a.indexOf(i,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function isPossibleNumber(e,t,n){if(void 0===t&&(t={}),n=new Metadata(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.chooseCountryByCountryCallingCode(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: "+e.country);n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.chooseCountryByCountryCallingCode(e.countryCallingCode)}}if(!n.possibleLengths())throw new Error("Metadata too old");return is_possible_number(e.phone||e.nationalNumber,void 0,n)}function is_possible_number(e,t,n){switch(checkNumberLengthForType(e,void 0,n)){case"IS_POSSIBLE":return!0;default:return!1}}var CAPTURING_DIGIT_PATTERN=new RegExp("(["+VALID_DIGITS+"])"),SINGLE_IDD_PREFIX=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function getIDDPrefix(e,t){var n=new Metadata(t);return n.country(e),SINGLE_IDD_PREFIX.test(n.IDDPrefix())?n.IDDPrefix():n.defaultIDDPrefix()}function stripIDDPrefix(e,t,n){if(t){var r=new Metadata(n);r.country(t);var a=new RegExp(r.IDDPrefix());if(0===e.search(a)){var o=(e=e.slice(e.match(a)[0].length)).match(CAPTURING_DIGIT_PATTERN);if(!(o&&null!=o[1]&&o[1].length>0&&"0"===o[1]))return e}}}var _slicedToArray$1=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function parseRFC3966(e){var t=void 0,n=void 0,r=(e=e.replace(/^tel:/,"tel=")).split(";"),a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var c=i.split("="),s=_slicedToArray$1(c,2),u=s[0],l=s[1];switch(u){case"tel":t=l;break;case"ext":n=l;break;case"phone-context":"+"===l[0]&&(t=l+t)}}if(!isViablePhoneNumber(t))return{};var d={number:t};return n&&(d.ext=n),d}function formatRFC3966(e){var t=e.number,n=e.ext;if(!t)return"";if("+"!==t[0])throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:"+t+(n?";ext="+n:"")}function isValidNumber(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(n=new Metadata(n),!e.country)return!1;if(!n.hasCountry(e.country))throw new Error("Unknown country: "+e.country);if(n.country(e.country),n.hasTypes())return void 0!==getNumberType(e,t,n.metadata);var r=t.v2?e.nationalNumber:e.phone;return matchesEntirely(r,n.nationalNumberPattern())}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},defaultOptions={formatExtension:function(e,t,n){return""+e+n.ext()+t}};function formatNumber$1(e,t,n,r){if(n=n?_extends({},defaultOptions,n):defaultOptions,r=new Metadata(r),e.country){if(!r.hasCountry(e.country))throw new Error("Unknown country: "+e.country);r.country(e.country)}else{if(!e.countryCallingCode)return e.phone||"";r.chooseCountryByCountryCallingCode(e.countryCallingCode)}var a=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone;switch(t){case"NATIONAL":return o?addExtension(format_national_number(o,"NATIONAL",r),e.ext,r,n.formatExtension):"";case"INTERNATIONAL":return o?addExtension("+"+a+" "+format_national_number(o,"INTERNATIONAL",r),e.ext,r,n.formatExtension):"+"+a;case"E.164":return"+"+a+o;case"RFC3966":return formatRFC3966({number:"+"+a+o,ext:e.ext});case"IDD":if(!n.fromCountry)return;var i=getIDDPrefix(n.fromCountry,r.metadata);if(!i)return;if(n.humanReadable){var c=a&&formatIDDSameCountryCallingCodeNumber(o,r.countryCallingCode(),n.fromCountry,r);return addExtension(c||i+" "+a+" "+format_national_number(o,"INTERNATIONAL",r),e.ext,r,n.formatExtension)}return""+i+a+o;default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'+t+'"')}}var FIRST_GROUP_PATTERN=/(\$\d)/;function format_national_number_using_format(e,t,n,r,a){var o=e.replace(new RegExp(t.pattern()),n?t.internationalFormat():!t.nationalPrefixFormattingRule()||t.nationalPrefixIsOptionalWhenFormatting()&&!r?t.format():t.format().replace(FIRST_GROUP_PATTERN,t.nationalPrefixFormattingRule()));return n?changeInternationalFormatStyle(o):o}function format_national_number(e,t,n){var r=choose_format_for_number(n.formats(),e);return r?format_national_number_using_format(e,r,"INTERNATIONAL"===t,!0):e}function choose_format_for_number(e,t){var n=e,r=Array.isArray(n),a=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var i=o;if(i.leadingDigitsPatterns().length>0){var c=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(0!==t.search(c))continue}if(matchesEntirely(t,i.pattern()))return i}}function changeInternationalFormatStyle(e){return e.replace(new RegExp("["+VALID_PUNCTUATION+"]+","g")," ").trim()}function addExtension(e,t,n,r){return t?r(e,t,n):e}function formatIDDSameCountryCallingCodeNumber(e,t,n,r){var a=new Metadata(r.metadata);if(a.country(n),t===a.countryCallingCode())return"1"===t?t+" "+format_national_number(e,"NATIONAL",r):format_national_number(e,"NATIONAL",r)}var _extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass$2=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck$3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var PhoneNumber=function(){function e(t,n,r){if(_classCallCheck$3(this,e),!t)throw new TypeError("`countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(isCountryCode(t)){this.country=t;var a=new Metadata(r);a.country(t),t=a.countryCallingCode()}this.countryCallingCode=t,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return _createClass$2(e,[{key:"isPossible",value:function(){return isPossibleNumber(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return isValidNumber(this,{v2:!0},this.metadata)}},{key:"getType",value:function(){return getNumberType(this,{v2:!0},this.metadata)}},{key:"format",value:function(e,t){return formatNumber$1(this,e,t?_extends$1({},t,{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(e){return this.format("NATIONAL",e)}},{key:"formatInternational",value:function(e){return this.format("INTERNATIONAL",e)}},{key:"getURI",value:function(e){return this.format("RFC3966",e)}}]),e}(),isCountryCode=function(e){return/^[A-Z]{2}$/.test(e)},MAX_INPUT_STRING_LENGTH=250,PHONE_NUMBER_START_PATTERN=new RegExp("["+PLUS_CHARS+VALID_DIGITS+"]"),AFTER_PHONE_NUMBER_END_PATTERN=new RegExp("[^"+VALID_DIGITS+"]+$");function parse(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(n=new Metadata(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry)){if(t.v2)throw new ParseError("INVALID_COUNTRY");throw new Error("Unknown country: "+t.defaultCountry)}var r=parse_input(e,t.v2),a=r.number,o=r.ext;if(!a){if(t.v2)throw new ParseError("NOT_A_NUMBER");return{}}var i=parse_phone_number(a,t.defaultCountry,n),c=i.country,s=i.national_number,u=i.countryCallingCode,l=i.carrierCode;if(!n.selectedCountry()){if(t.v2)throw new ParseError("INVALID_COUNTRY");return{}}if(s.length<MIN_LENGTH_FOR_NSN){if(t.v2)throw new ParseError("TOO_SHORT");return{}}if(s.length>MAX_LENGTH_FOR_NSN){if(t.v2)throw new ParseError("TOO_LONG");return{}}if(t.v2){var d=new PhoneNumber(u,s,n.metadata);return c&&(d.country=c),l&&(d.carrierCode=l),o&&(d.ext=o),d}var f=!(!c||!matchesEntirely(s,n.nationalNumberPattern()));return t.extended?{country:c,countryCallingCode:u,carrierCode:l,valid:f,possible:!!f||!0===t.extended&&n.possibleLengths()&&is_possible_number(s,void 0!==u,n),phone:s,ext:o}:f?result(c,s,o):{}}function extract_formatted_phone_number(e,t){if(e)if(e.length>MAX_INPUT_STRING_LENGTH){if(t)throw new ParseError("TOO_LONG")}else{var n=e.search(PHONE_NUMBER_START_PATTERN);if(!(n<0))return e.slice(n).replace(AFTER_PHONE_NUMBER_END_PATTERN,"")}}function strip_national_prefix_and_carrier_code(e,t){if(!e||!t.nationalPrefixForParsing())return{number:e};var n=new RegExp("^(?:"+t.nationalPrefixForParsing()+")"),r=n.exec(e);if(!r)return{number:e};var a=void 0,o=r.length-1;a=t.nationalPrefixTransformRule()&&r[o]?e.replace(n,t.nationalPrefixTransformRule()):e.slice(r[0].length);var i=void 0;return o>0&&(i=r[1]),{number:a,carrierCode:i}}function find_country_code(e,t,n){var r=n.countryCallingCodes()[e];return 1===r.length?r[0]:_find_country_code(r,t,n.metadata)}function _find_country_code(e,t,n){n=new Metadata(n);var r=e,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var c=i;if(n.country(c),n.leadingDigits()){if(t&&0===t.search(n.leadingDigits()))return c}else if(getNumberType({phone:t,country:c},void 0,n.metadata))return c}}function parse_input(e,t){if(e&&0===e.indexOf("tel:"))return parseRFC3966(e);var n=extract_formatted_phone_number(e,t);if(!n||!isViablePhoneNumber(n))return{};var r=extractExtension(n);return r.ext?r:{number:n}}function result(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function parse_phone_number(e,t,n){var r=extractCountryCallingCode(e,t,n.metadata),a=r.countryCallingCode,o=r.number;if(!o)return{countryCallingCode:a};var i=void 0;if(a)n.chooseCountryByCountryCallingCode(a);else{if(!t)return{};n.country(t),i=t,a=getCountryCallingCode(t,n.metadata)}var c=parse_national_number(o,n),s=c.national_number,u=c.carrier_code,l=find_country_code(a,s,n);return l&&(i=l,n.country(i)),{country:i,countryCallingCode:a,national_number:s,carrierCode:u}}function parse_national_number(e,t){var n=parseIncompletePhoneNumber(e),r=void 0,a=strip_national_prefix_and_carrier_code(n,t),o=a.number,i=a.carrierCode;if(t.possibleLengths())switch(checkNumberLengthForType(o,void 0,t)){case"TOO_SHORT":case"INVALID_LENGTH":break;default:n=o,r=i}else matchesEntirely(n,t.nationalNumberPattern())&&!matchesEntirely(o,t.nationalNumberPattern())||(n=o,r=i);return{national_number:n,carrier_code:r}}function extractCountryCallingCode(e,t,n){if(!(e=parseIncompletePhoneNumber(e)))return{};if("+"!==e[0]){var r=stripIDDPrefix(e,t,n);if(!r||r===e)return{number:e};e="+"+r}if("0"===e[1])return{};n=new Metadata(n);for(var a=2;a-1<=MAX_LENGTH_COUNTRY_CODE&&a<=e.length;){var o=e.slice(1,a);if(n.countryCallingCodes()[o])return{countryCallingCode:o,number:e.slice(a)};a++}return{}}var _extends$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function parsePhoneNumber(e,t,n){return parse(e,_extends$2({},t,{v2:!0}),n)}var _typeof$2="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},_extends$3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_slicedToArray$2=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function normalizeArguments(e){var t=Array.prototype.slice.call(e),n=_slicedToArray$2(t,4),r=n[0],a=n[1],o=n[2],i=n[3],c=void 0,s=void 0,u=void 0;if("string"!=typeof r)throw new TypeError("A text for parsing must be a string.");if(c=r,a&&"string"!=typeof a){if(!isObject(a))throw new Error("Invalid second argument: "+a);o?(s=a,u=o):u=a}else i?(s=o,u=i):(s=void 0,u=o),a&&(s=_extends$3({defaultCountry:a},s));return{text:c,options:s,metadata:u}}var isObject=function(e){return"object"===(void 0===e?"undefined":_typeof$2(e))},_extends$4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function parsePhoneNumberFromString(e,t,n){t&&t.defaultCountry&&!isSupportedCountry(t.defaultCountry,n)&&(t=_extends$4({},t,{defaultCountry:void 0}));try{return parsePhoneNumber(e,t,n)}catch(e){if(!(e instanceof ParseError))throw e}}function parsePhoneNumberFromString$1(){var e=normalizeArguments(arguments),t=e.text,n=e.options,r=e.metadata;return parsePhoneNumberFromString(t,n,r)}var version="1.7.15",country_calling_codes={1:["US"],44:["GB"],52:["MX"],55:["BR"],61:["AU"]},countries={AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,0,"0011"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,0,0," x"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1"]},metadata={version:version,country_calling_codes:country_calling_codes,countries:countries},parseNumber=function(e){return parsePhoneNumberFromString$1(isVanity(e)?convertToDigits(e):e,country,metadata)};function limit(e,t){if(e<0||t<=0||t<e)throw new TypeError;return"{"+e+","+t+"}"}function trimAfterFirstMatch(e,t){var n=t.search(e);return n>=0?t.slice(0,n):t}function startsWith(e,t){return 0===e.indexOf(t)}function endsWith(e,t){return e.indexOf(t,e.length-t.length)===e.length-t.length}var _pZ="   ᠎ - \u2028\u2029  　",pZ="["+_pZ+"]",PZ="[^"+_pZ+"]",_pN="0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９",_pNd="0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９",pNd="["+_pNd+"]",_pL="A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",pL="["+_pL+"]",pL_regexp=new RegExp(pL),_pSc="$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦",pSc="["+_pSc+"]",pSc_regexp=new RegExp(pSc),_pMn="̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦",pMn="["+_pMn+"]",pMn_regexp=new RegExp(pMn),_InBasic_Latin="\0-",_InLatin_1_Supplement="-ÿ",_InLatin_Extended_A="Ā-ſ",_InLatin_Extended_Additional="Ḁ-ỿ",_InLatin_Extended_B="ƀ-ɏ",_InCombining_Diacritical_Marks="̀-ͯ",latinLetterRegexp=new RegExp("["+_InBasic_Latin+_InLatin_1_Supplement+_InLatin_Extended_A+_InLatin_Extended_Additional+_InLatin_Extended_B+_InCombining_Diacritical_Marks+"]");function isLatinLetter(e){return!(!pL_regexp.test(e)&&!pMn_regexp.test(e))&&latinLetterRegexp.test(e)}function isInvalidPunctuationSymbol(e){return"%"===e||pSc_regexp.test(e)}var Leniency={POSSIBLE:function(e,t,n){return!0},VALID:function(e,t,n){return!(!isValidNumber(e,void 0,n)||!containsOnlyValidXChars(e,t.toString()))},STRICT_GROUPING:function(e,t,n){var r=t.toString();return!(!isValidNumber(e,void 0,n)||!containsOnlyValidXChars(e,r)||containsMoreThanOneSlashInNationalNumber(e,r)||!isNationalPrefixPresentIfRequired(e))&&checkNumberGroupingIsValid(e,t,n,allNumberGroupsRemainGrouped)},EXACT_GROUPING:function(e,t,n){var r=t.toString();return!(!isValidNumber(e,void 0,n)||!containsOnlyValidXChars(e,r)||containsMoreThanOneSlashInNationalNumber(e,r)||!isNationalPrefixPresentIfRequired(e))&&checkNumberGroupingIsValid(e,t,n,allNumberGroupsAreExactlyPresent)}};function containsOnlyValidXChars(e,t,n){for(var r=0;r<t.length-1;r++){var a=t.charAt(r);if("x"===a||"X"===a){var o=t.charAt(r+1);if("x"===o||"X"===o){if(r++,util.isNumberMatch(e,t.substring(r))!=MatchType.NSN_MATCH)return!1}else if(parseDigits(t.substring(r))!==e.ext)return!1}}return!0}function isNationalPrefixPresentIfRequired(e,t){if("FROM_DEFAULT_COUNTRY"!=e.getCountryCodeSource())return!0;var n=util.getRegionCodeForCountryCode(e.getCountryCode()),r=util.getMetadataForRegion(n);if(null==r)return!0;var a=util.getNationalSignificantNumber(e),o=util.chooseFormattingPatternForNumber(r.numberFormats(),a);if(o&&o.getNationalPrefixFormattingRule().length>0){if(o.getNationalPrefixOptionalWhenFormatting())return!0;if(PhoneNumberUtil.formattingRuleHasFirstGroupOnly(o.getNationalPrefixFormattingRule()))return!0;var i=PhoneNumberUtil.normalizeDigitsOnly(e.getRawInput());return util.maybeStripNationalPrefixAndCarrierCode(i,r,null)}return!0}function containsMoreThanOneSlashInNationalNumber(e,t){var n=t.indexOf("/");if(n<0)return!1;var r=t.indexOf("/",n+1);return!(r<0)&&(!(e.getCountryCodeSource()===CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN||e.getCountryCodeSource()===CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN)||PhoneNumberUtil.normalizeDigitsOnly(t.substring(0,n))!==String(e.getCountryCode())||t.slice(r+1).indexOf("/")>=0)}function checkNumberGroupingIsValid(e,t,n,r){var a=normalizeDigits(t,!0),o=getNationalNumberGroups(n,e,null);if(r(n,e,a,o))return!0;var i=MetadataManager.getAlternateFormatsForCountry(e.getCountryCode());if(i){var c=i.numberFormats(),s=Array.isArray(c),u=0;for(c=s?c:c[Symbol.iterator]();;){var l;if(s){if(u>=c.length)break;l=c[u++]}else{if((u=c.next()).done)break;l=u.value}if(r(n,e,a,o=getNationalNumberGroups(n,e,l)))return!0}}return!1}function getNationalNumberGroups(e,t,n){if(n){var r=util.getNationalSignificantNumber(t);return util.formatNsnUsingPattern(r,n,"RFC3966",e).split("-")}var a=formatNumber(t,"RFC3966",e),o=a.indexOf(";");o<0&&(o=a.length);var i=a.indexOf("-")+1;return a.slice(i,o).split("-")}function allNumberGroupsAreExactlyPresent(e,t,n,r){var a=n.split(NON_DIGITS_PATTERN),o=t.hasExtension()?a.length-2:a.length-1;if(1==a.length||a[o].contains(util.getNationalSignificantNumber(t)))return!0;for(var i=r.length-1;i>0&&o>=0;){if(a[o]!==r[i])return!1;i--,o--}return o>=0&&endsWith(a[o],r[0])}function allNumberGroupsRemainGrouped(e,t,n,r){var a=0;if(t.getCountryCodeSource()!==CountryCodeSource.FROM_DEFAULT_COUNTRY){var o=String(t.getCountryCode());a=n.indexOf(o)+o.length()}for(var i=0;i<r.length;i++){if((a=n.indexOf(r[i],a))<0)return!1;if(a+=r[i].length(),0==i&&a<n.length()){var c=util.getRegionCodeForCountryCode(t.getCountryCode());if(null!=util.getNddPrefixForRegion(c,!0)&&Character.isDigit(n.charAt(a))){var s=util.getNationalSignificantNumber(t);return startsWith(n.slice(a-r[i].length),s)}}}return n.slice(a).contains(t.getExtension())}var SECOND_NUMBER_START_PATTERN=/[\\/] *x/;function parsePreCandidate(e){return trimAfterFirstMatch(SECOND_NUMBER_START_PATTERN,e)}var SLASH_SEPARATED_DATES=/(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,TIME_STAMPS=/[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/,TIME_STAMPS_SUFFIX_LEADING=/^:[0-5]\d/;function isValidPreCandidate(e,t,n){if(SLASH_SEPARATED_DATES.test(e))return!1;if(TIME_STAMPS.test(e)){var r=n.slice(t+e.length);if(TIME_STAMPS_SUFFIX_LEADING.test(r))return!1}return!0}var OPENING_PARENS="(\\[（［",CLOSING_PARENS=")\\]）］",NON_PARENS="[^"+OPENING_PARENS+CLOSING_PARENS+"]",LEAD_CLASS="["+OPENING_PARENS+PLUS_CHARS+"]",LEAD_CLASS_LEADING=new RegExp("^"+LEAD_CLASS),BRACKET_PAIR_LIMIT=limit(0,3),MATCHING_BRACKETS_ENTIRE=new RegExp("^(?:["+OPENING_PARENS+"])?(?:"+NON_PARENS+"+["+CLOSING_PARENS+"])?"+NON_PARENS+"+(?:["+OPENING_PARENS+"]"+NON_PARENS+"+["+CLOSING_PARENS+"])"+BRACKET_PAIR_LIMIT+NON_PARENS+"*$"),PUB_PAGES=/\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;function isValidCandidate(e,t,n,r){if(MATCHING_BRACKETS_ENTIRE.test(e)&&!PUB_PAGES.test(e)){if("POSSIBLE"!==r){if(t>0&&!LEAD_CLASS_LEADING.test(e)){var a=n[t-1];if(isInvalidPunctuationSymbol(a)||isLatinLetter(a))return!1}var o=t+e.length;if(o<n.length){var i=n[o];if(isInvalidPunctuationSymbol(i)||isLatinLetter(i))return!1}}return!0}}var _extends$5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass$3=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck$4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var INNER_MATCHES=["\\/+(.*)/","(\\([^(]*)","(?:"+pZ+"-|-"+pZ+")"+pZ+"*(.+)","[‒-―－]"+pZ+"*(.+)","\\.+"+pZ+"*([^.]+)",pZ+"+("+PZ+"+)"],leadLimit=limit(0,2),punctuationLimit=limit(0,4),digitBlockLimit=MAX_LENGTH_FOR_NSN+MAX_LENGTH_COUNTRY_CODE,blockLimit=limit(0,digitBlockLimit),punctuation="["+VALID_PUNCTUATION+"]"+punctuationLimit,digitSequence=pNd+limit(1,digitBlockLimit),PATTERN="(?:"+LEAD_CLASS+punctuation+")"+leadLimit+digitSequence+"(?:"+punctuation+digitSequence+")"+blockLimit+"(?:"+EXTN_PATTERNS_FOR_MATCHING+")?",UNWANTED_END_CHAR_PATTERN=new RegExp("[^"+_pN+_pL+"#]+$"),MAX_SAFE_INTEGER=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,PhoneNumberMatcher=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];if(_classCallCheck$4(this,e),this.state="NOT_READY",this.searchIndex=0,!(n=_extends$5({},n,{defaultCountry:n.defaultCountry&&isSupportedCountry(n.defaultCountry,r)?n.defaultCountry:void 0,leniency:n.leniency||n.extended?"POSSIBLE":"VALID",maxTries:n.maxTries||MAX_SAFE_INTEGER})).leniency)throw new TypeError("`Leniency` not supplied");if(n.maxTries<0)throw new TypeError("`maxTries` not supplied");if(this.text=t,this.options=n,this.metadata=r,this.leniency=Leniency[n.leniency],!this.leniency)throw new TypeError("Unknown leniency: "+n.leniency+".");this.maxTries=n.maxTries,this.PATTERN=new RegExp(PATTERN,"ig")}return _createClass$3(e,[{key:"find",value:function(){for(var e=void 0;this.maxTries>0&&null!==(e=this.PATTERN.exec(this.text));){var t=e[0],n=e.index;if(isValidPreCandidate(t=parsePreCandidate(t),n,this.text)){var r=this.parseAndVerify(t,n,this.text)||this.extractInnerMatch(t,n,this.text);if(r){if(this.options.v2){var a=new PhoneNumber(r.country,r.phone,this.metadata);return r.ext&&(a.ext=r.ext),{startsAt:r.startsAt,endsAt:r.endsAt,number:a}}return r}}this.maxTries--}}},{key:"extractInnerMatch",value:function(e,t,n){var r=INNER_MATCHES,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}for(var c=!0,s=void 0,u=new RegExp(i,"g");null!==(s=u.exec(e))&&this.maxTries>0;){if(c){var l=trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN,e.slice(0,s.index)),d=this.parseAndVerify(l,t,n);if(d)return d;this.maxTries--,c=!1}var f=trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN,s[1]),v=this.parseAndVerify(f,t+s.index,n);if(v)return v;this.maxTries--}}}},{key:"parseAndVerify",value:function(e,t,n){if(isValidCandidate(e,t,n,this.options.leniency)){var r=parse(e,{extended:!0,defaultCountry:this.options.defaultCountry},this.metadata);if(r.possible&&this.leniency(r,e,this.metadata)){var a={startsAt:t,endsAt:t+e.length,country:r.country,phone:r.phone};return r.ext&&(a.ext=r.ext),a}}}},{key:"hasNext",value:function(){return"NOT_READY"===this.state&&(this.lastMatch=this.find(),this.lastMatch?this.state="READY":this.state="DONE"),"READY"===this.state}},{key:"next",value:function(){if(!this.hasNext())throw new Error("No next element");var e=this.lastMatch;return this.lastMatch=null,this.state="NOT_READY",e}}]),e}();function findNumbers(e,t,n){for(var r=new PhoneNumberMatcher(e,t,n),a=[];r.hasNext();)a.push(r.next());return a}function findNumbers$1(){var e=normalizeArguments(arguments),t=e.text,n=e.options,r=e.metadata;return findNumbers(t,n,r)}var findNumbers$2=function(e){return findNumbers$1(e,country,{v2:!0},metadata)},isTelNode=function(e){var t=readAttribute(e,"href");return!("a"!==e.nodeName.toLowerCase()||!t||0!==t.search(/^tel:/))},EXCLUDED_NODES=["script","textarea","map","style","object","input","video","audio","img","canvas","br","hr","noscript"],IGNORED_DOM_EXCEPTIONS=[/A security problem occurred/i],acceptNode=function(e){return EXCLUDED_NODES.indexOf(e.nodeName.toLowerCase())>-1?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT};acceptNode.acceptNode=acceptNode;var shouldProcessException=function(e){return!IGNORED_DOM_EXCEPTIONS.some((function(t){return t.test(e.message)}))},traverse=function(e){for(var t=e.root,n=e.nodeEvents,r=void 0===n?{}:n,a=e.onComplete,o=void 0===a?function(){}:a,i=e.exceptionHandler,c=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,acceptNode,!1),s=c.currentNode;s;){var u=r[s.nodeName.toLowerCase()];if(u)try{var l=u(s);l instanceof Node&&(c.currentNode=l)}catch(e){shouldProcessException(e)&&i.notify(e)}s=c.nextNode()}o()},lookForExactMatches=function(e,t){return reduce(t,(function(e,t){var n=e.matches,r=e.content;if(r.indexOf(t)>-1){var a=parseNumber(t);return{matches:n.concat({original:t,phoneNumber:a}),content:r.replace(new RegExp(t,"g"),"")}}return{matches:n,content:r}}),{matches:[],content:e})},lookForAllPhoneNumbers=function(e){return findNumbers$2(e).map((function(t){var n=t.number,r=t.startsAt,a=t.endsAt;return{original:e.substring(r,a),phoneNumber:n}}))},search=function(e,t,n){var r=lookForExactMatches(e,n),a=r.matches,o=r.content,i=lookForAllPhoneNumbers(o);return a.concat(i).map((function(e){var n=e.original,r=e.phoneNumber;return{node:t,type:"a"===t.nodeName.toLowerCase()?"a":"text",original:n,match:n,phoneNumber:r}}))},NumberFinder={searchIn:function(e,t){var n=t.numbersToReplace,r=void 0===n?[]:n,a=t.exceptionHandler,o=e.innerHTML,i=r.filter((function(e){return o.indexOf(e)>-1})),c=[];return traverse({root:e,nodeEvents:{a:function(e){isTelNode(e)&&(c=c.concat(search(readAttribute(e,"href"),e,i)))},"#text":function(e){c=c.concat(search(e.textContent,e,i))}},exceptionHandler:a}),c}};function normalizeValue(e){return e?decodeURIComponent(e.replace(/\+/g,"%20")):null}var getQueryStringsHash=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search;if(Invoca.searchParams)return Invoca.searchParams;var t=e.slice(1).split("&"),n=reduce(t,(function(e,t){var n=_slicedToArray(t.split("="),2),r=n[0],a=n[1];return r&&(e[r.toLowerCase()]=normalizeValue(a)),e}),{});return Invoca.searchParams=n,n};function readUrl(e){return e&&getQueryStringsHash()[e.toLowerCase()]||null}function overrideExists(){var e=get("config"),t=e.ciop||e.campaignIdOverrideParam;return t?readUrl(t):null}function existingCache(){return get("session")||{}}function returnDataIfExists(e,t){var n=overrideExists(),r=existingCache();return n?t:r[e]||t}function readInvocaData(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return paramIsInAllowedList(e)?returnDataIfExists(e,t):(getCanaryMode(),t)}function loadScript(e,t,n){var r=document.createElement("script"),a=document.querySelector("script");(r.type="text/javascript",r.src=e,r.readyState?r.onreadystatechange=function(){if("loaded"===r.readyState||"complete"===r.readyState){r.onreadystatechange=null;var e=0,a=setInterval((function(){Invoca.Client.isLoaded()?(clearInterval(a),t()):++e>40&&(clearInterval(a),n())}),50)}}:(r.onload=t,r.onerror=n),a)?a.parentNode.appendChild(r):warn("You must have at least 1 <script> tag on your webpage")}Invoca.PNAPI.loadScript=loadScript;var generateRandomId=function(e){if(!cryptoUuidSupported())return e.collect("crypto_not_supported","counter",{requireRoundTrip:!1}),randomUuid();try{return cryptoUuid()}catch(t){return e.collect("crypto_raised","counter",{requireRoundTrip:!1}),randomUuid()}},cryptoUuidSupported=function(){try{return cryptoSupported()&&uintArraySupported()&&stringPaddingSupported()}catch(e){return!1}},cryptoSupported=function(){return void 0!==window.crypto&&void 0!==window.crypto.getRandomValues},uintArraySupported=function(){return"undefined"!=typeof Uint16Array&&void 0!==new Uint16Array(8)},stringPaddingSupported=function(){return void 0!==String.prototype.padStart},cryptoUuid=function(){var e=crypto.getRandomValues(new Uint16Array(8)),t=0;return"00-0-4-1-000".replace(/[^-]/g,(function(n){return(e[t++]+65536*n>>n).toString(16).padStart(4,"0")}))},randomUuid=function(){return"00-0-4-1-000".replace(/[^-]/g,(function(e){return fourDigitPad((65536*(Math.random()+~~e)>>e).toString(16))}))},fourDigitPad=function(e){var t="0000";if(e.length<t.length){for(var n=[],r=t.length-e.length,a=0;a<t.length;a++)if(a<r)n=n.concat(t[a]);else{var o=a-r;n=n.concat(e[o])}return n.join("")}return e.length>t.length?e.slice(0,4):e};function generateUniqueId(e){var t=generateRandomId(e);return"i-".concat(t)}var DEFAULT_WAIT_FOR_TIMEOUT=1e3;function getWaitForData(e,t){var n,r=0,a={},o={},i=waitForDataWithIntegrations(),c=_maxWaitForTimeout(i,50),s=i.map(validWaitForDataConfigs).filter((function(e){return e}));function u(){s.forEach((function(e){return queryWaitForDataConfig(e,a,o)}))}e.collect("startWaitForData"),s.length?0===c?(u(),finish(t,a,o,n,e,s)):function i(){r<=c&&anyMissingConfigValues(s,a)?(u(),r+=50,n=setTimeout(i,50)):finish(t,a,o,n,e,s)}():finish(t,a,o,n,e,s)}function maxWaitTime(){return _maxWaitForTimeout(waitForDataWithIntegrations(),50)}function validWaitForDataConfigs(e){return"function"==typeof e.on&&e.paramName?e:("function"!=typeof e.on&&warn("'on' callback in waitForData: ".concat(stringifyJSON(e)," is not a function")),e.paramName||warn("Must specify a paramName in waitForData: ".concat(stringifyJSON(e))),null)}function queryWaitForDataConfig(e,t,n){var r=e.paramName,a=e.on;if(!t[r])try{var o=a();o&&(t[r]=o)}catch(e){n[r]=e.message}return[t,n]}function waitForDataWithIntegrations(){var e=Invoca.PNAPI.currentPageSettings,t=e.waitForData,n=e.integrations,r=new Invoca.Integrations.config(n);return t.concat(r.asWaitForData())}function anyMissingConfigValues(e,t){return e.length!==Object.keys(t).length}function finish(e,t,n,r,a,o){r&&clearTimeout(r),a.collect("endWaitForData"),logErrors(n);var i=Invoca._PoolParams.readInvocaSessionData(a),c=reduce(o,(function(e,n){var r=n.paramName,a=n.fallbackValue;return e[r]=_valueOrFallback(a,t[r]),e}),{}),s=Invoca.PNAPI.currentPageSettings.poolParams,u=extend({},i,c,s);set("session",u),Invoca.PNAPI.logOnce("Params were captured and saved."),e(u)}function logErrors(e){Object.keys(e).forEach((function(t){return warn("".concat(e[t],' prevented "').concat(t,'" from being captured'))}))}function _valueOrFallback(e,t){var n=void 0===e?"not_found":"function"==typeof e?e():e;return t||n}function _maxWaitForTimeout(e,t){var n=Invoca.PNAPI.currentPageSettings.maxWaitFor,r=_isValue(n)?n:DEFAULT_WAIT_FOR_TIMEOUT,a=Math.max.apply(null,e.map((function(e){return _configTimeout(e,r)})));return Math.max(0,Math.ceil(a/t))*t}function _configTimeout(e,t){return _isValue(e.timeout)?e.timeout:t}function _isValue(e){return null!=e&&!isNaN(e)}var INVOCA_ID_PARAM_NAME$1=Invoca.PNAPI.INVOCA_ID_PARAM_NAME;function getParams(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=getQueryStrings(),n=getCookies(),r=e.queryWaitForDataOnce?queryWaitForDataOnce():{},a=e.metrics,o=getInvocaId(a),i=Invoca.PNAPI.currentPageSettings.poolParams;return extend({},t,n,r,i,o)}function getInvocaId(e){var t=get("session")[INVOCA_ID_PARAM_NAME$1]||getInvocaIdFromLocalStorage();return _defineProperty({},INVOCA_ID_PARAM_NAME$1,t||generateUniqueId(e))}function getInvocaIdFromLocalStorage(){var e=checkLocalStorage()&&window.localStorage.getItem(INVOCA_ID_PARAM_NAME$1);if(e)return e}function getQueryStrings(){if(!0===Invoca.PNAPI.currentPageSettings.disableUrlParams)return{};var e=getQueryStringsHash()||{},t=Invoca.PNAPI.currentPageSettings.disableUrlParams;return reduce(getKeys(e),(function(n,r){return-1===t.indexOf(r)&&(n[r]=e[r]),n}),{})}function getCookies(){var e={},t=Invoca.PNAPI.currentPageSettings.cookieNames||[];return Invoca.PNAPI.forEach(t,(function(t){var n=readCookie(t);n&&(e[t]=n)})),e}function queryWaitForDataOnce(){var e=waitForDataWithIntegrations(),t=reduce(e,(function(e,t){var n=_slicedToArray(e,2);return queryWaitForDataConfig(t,n[0],n[1])}),[{},{}]),n=_slicedToArray(t,2),r=n[0];n[1];return r}var validateArgs=function(e,t,n){if(!e)throw new Error("invocaId was missing");if(!t&&!n)throw new Error("Either tagId or networkId are required")},getAttribution=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.invocaId||getInvocaId().invoca_id,n=e.tagId||Invoca.Client.getTagId(),r=e.networkId||Invoca.PNAPI.currentPageSettings.networkId;validateArgs(t,n,r);var a=requestUrl(!0,!0),o={invoca_id:t,tag_id:n,network_id:r},i=[];for(var c in o)o.hasOwnProperty(c)&&i.push("".concat(c,"=").concat(encodeURIComponent(o[c])));return loadScript("".concat(a,"?").concat(i.join("&"))),"Loading attribution for ".concat(stringifyJSON(o))};Invoca.Tools.parseReferrer=function(e,t,n,r){try{if(r=r||"contains",n&&"string"==typeof n)n=n||Invoca.referrer;else{if(n)throw new Error("Invoca.Tools.parseReferrer: objectToParse must be a string");n=Invoca.referrer}if(t||(warn("Invoca.PNAPI.parseReferrer: No defaultValue passed, returning null if no match found."),t=null),0===Invoca.PNAPI.getKeys(e).length)return t;if(""===Invoca.referrer&&e[""])return e[""];var a,o,i=Invoca.PNAPI.getKeys(e),c=n,s={contains:function(t,n){if(Invoca.Tools.contains(n,t))return e[t]},topLevelDomain:function(t,n){if(Invoca.Tools.parseDomainFromFullUrl(n).slice(1)===t)return e[t]},subDomain:function(t,n){if(Invoca.Tools.getFullDomain(n)===t&&""!==t)return e[t]}};for(var u in i)if(a=i[u],o=s[r](a,c))return o;return t}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.Tools.parseReferrer")}},Invoca.Tools.getFullDomain=function(e){var t=new RegExp("^https?://","g");e.match(t)||(e="http://"+e);var n=document.createElement("a");return n.href=e,n.hostname.replace("www.","")},Invoca.Tools.contains=function(e,t){try{return e.indexOf(t)>-1}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.Tools.contains")}},Invoca.Tools.parseDomainFromFullUrl=function(e){function t(e){return 4===e.split(".").length&&e.match(/\..*(\.([a-zA-Z]{2,3})){2}/g)}var n=function(e){return"."+(e=(e=(e=(e=(e=(e=e.split("?")[0].replace(new RegExp(/^\s+/),"")).replace(new RegExp(/\s+$/),"")).replace(new RegExp(/\\/g),"/")).replace(new RegExp(/^http:\/\/|^https:\/\/|^ftp:\/\//i),"")).replace(new RegExp(/^www\./i),"")).replace(new RegExp(/\/(.*)/),""))}(e);return function(e){return e.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))?e=e.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),""):e.match(new RegExp(/\.[a-z]{2,4}$/i))&&(e=e.replace(new RegExp(/\.[a-z]{2,4}$/i),"")),!!e.match(new RegExp(/\./g))&&e}(n)?function(e){var n=e.split("."),r=n.length-3,a=n.length-1,o="";if(3===n.length&&""===n[0]||t(e))return e;for(;n[a-1]&&a>=r&&!t(o="."+n[a]+o);)a--;return function(e){var n,r=e.split(".");if(!t(e)&&r.length>=4){var a=r.length-1;n="."+r[a-1]+"."+r[a]}return n||null}(o)||o}(n):n},Invoca.Tools.deviceType=function(){try{return window.screen.width<766&&/Android|webOS|iPhone|BlackBerry|IEMobile/i.test(Invoca.userAgent)?"mobile":window.screen.width>766&&/Android|webOS|iPad/i.test(Invoca.userAgent)?"tablet":window.screen.width>766?"desktop":"unknown"}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.Tools.deviceType")}},Invoca.Tools.isMobile=function(){try{var e=Invoca.Tools.deviceType();return"desktop"!==e&&"unknown"!==e}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.Tools.isMobile")}},Invoca.Tools.waitFor=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,a=0,o=10;function i(){var c=e();a++,c?t(c):a*o>=r?t(n):setTimeout(i,o)}i()},Invoca.Tools.resetAllData=function(){Invoca.Tools.parseDomainFromFullUrl(Invoca.domain)!==rootDomain()&&writeCookie("invoca_session","",-1,Invoca.Tools.parseDomainFromFullUrl(Invoca.domain)),resetAllData()};var fieldForType={a:"tel",text:"text"};function find$1(e){var t=[],n=e?e.split(","):[];return Invoca.PNAPI.forEach(n,(function(e){var n=getElements(e.replace(" ",""));Invoca.PNAPI.forEach(n,(function(e){e&&t.push(e)}))})),t}function getElements(e){var t=!1,n="",r=function(){try{return document.querySelectorAll(e)}catch(e){t=!0,n=e.message}}()||[];return!r.length&&logFindResults(e,n,t),r}function logFindResults(e,t,n){n?warn('numberSelector "'.concat(e,'" is unsupported and therefore no DOM elements were found. ').concat(t?"\nBrowser error: "+t+"\n\n":"","Please check the documentation on supported formats for numberSelector.")):Invoca.PNAPI.logOnce('numberSelector "'.concat(e,'" found no DOM elements on the page.'))}Invoca.Tools.getAllNumbers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{us:!0,uk:!1},t=e.us,n=e.uk,r=NumberFinder.searchIn(document.documentElement,{exceptionHandler:Invoca.ExceptionHandling}),a={US:t,GB:n};return Invoca.PNAPI.reduce(r,(function(e,t){var n=t.original,r=t.type,o=t.phoneNumber,i=e[fieldForType[r]];return a[o.country]&&i.indexOf(n)<0&&(i.push(n),e.total+=1),e}),{total:0,text:[],tel:[]})},Invoca.Tools.trueDomain=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Invoca.domain;return warn("Invoca.Tools.trueDomain is deprecated, please use Invoca.Tools.parseDomainFromFullUrl instead and pass in the domain or full URL to parse."),Invoca.Tools.parseDomainFromFullUrl(e)},Invoca.Tools.allowedClientSideParams=allowedClientSideParams,Invoca.Tools._resetAllowedClientSideParams=resetAllowedClientSideParams,Invoca.Tools.readInvocaData=readInvocaData,Invoca.Tools.rootDomain=rootDomain,Invoca.Tools.readUrl=readUrl,Invoca.Tools.readCookie=readCookie,Invoca.Tools.setCookie=setCookie,Invoca.Tools.removeCookie=removeCookie,Invoca.Tools.getQueryStringsHash=getQueryStringsHash,Invoca.PNAPI.debugAttribution=getAttribution,Invoca._DOM.find=find$1,function(e,t){e=e||"docReady",t=t||window;var n=[],r=!1,a=!1;function o(){if(!r){r=!0;for(var e=0;e<n.length;e++)n[e].fn.call(window,n[e].ctx);n=[]}}function i(){"complete"===document.readyState&&o()}t[e]=function(e,t){r?setTimeout((function(){e(t)}),1):(n.push({fn:e,ctx:t}),"complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(o,1):a||(document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):(document.attachEvent("onreadystatechange",i),window.attachEvent("onload",o)),a=!0))}}("ready",Invoca.PNAPI);var addEvent=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on".concat(t),n):Invoca.PNAPI.logOnce("Can't set event listeners")},mapping;function cacheInvocaIdFromResponse(e){if("object"===_typeof(e)&&e.invocaId){var t=Invoca.PNAPI.INVOCA_ID_PARAM_NAME,n=e.invocaId;set("session",t,n),checkLocalStorage()&&localStorage.setItem(t,n)}}Invoca._Refresh.updateOnBlur=function(){addEvent(window,"blur",(function(){log("Lost focus, pausing number refresh."),Invoca._Refresh.timer&&(clearTimeout(Invoca._Refresh.timer),Invoca._Refresh.timer=null)})),addEvent(window,"focus",(function(){log("Regained focus, refreshing numbers."),Invoca.PNAPI.refresh()}))},Invoca._Refresh.getAverageTimeFromResponse=function(e){var t,n=[],r=null;return Invoca.PNAPI.forEach(e,(function(e){e.lifetimeInSeconds&&n.push(e.lifetimeInSeconds)})),n&&n.length>0&&(t=Math.min.apply(Math,n),r=Math.max.apply(Math,[t-10,15])),r},Invoca._Refresh.start=function(e){Invoca._Refresh.firstRun&&(Invoca._Refresh.updateOnBlur(),Invoca._Refresh.firstRun=!1),Invoca._Refresh.lowestWaitTimeSeconds=Invoca._Refresh.getAverageTimeFromResponse(e),Invoca._Refresh.waitTime=1e3*(Invoca._Refresh.lowestWaitTimeSeconds||Invoca._Refresh.defaultWaitTimeSeconds),Invoca._Refresh.timer||(Invoca._Refresh.timer=setTimeout((function(){log("Refreshing phone numbers"),Invoca._Refresh.timer=null,Invoca.PNAPI.refresh()}),Invoca._Refresh.waitTime))},Invoca.PNAPI.onInvocaResponse=(mapping=null,function(e,t){(mapping=t)&&"object"===_typeof(mapping)&&mapping[0]&&cacheInvocaIdFromResponse(_slicedToArray(mapping,1)[0]),Invoca.PNAPI.fireCallbacks(mapping),Invoca.PNAPI.currentPageSettings.refresh&&Invoca._Refresh.start(mapping)}),Invoca.PNAPI.fireCallbacks=function(e){if("function"==typeof Invoca.PNAPI.currentPageSettings.onComplete)try{Invoca.PNAPI.currentPageSettings.onComplete(e)}catch(e){Invoca.ExceptionHandling.notifyAndThrow(e,"Invoca.PNAPI.currentPageSettings.onComplete")}};var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e){var t={exports:{}};return e(t,t.exports),t.exports}var honeybadger=createCommonjsModule((function(e){!function(t,n){var r={};!function(){var e=document.getElementsByTagName("script"),t=e[e.length-1];if(t)for(var n,a=t.attributes,o=0,i=a.length;o<i;o++)/data-(\w+)$/.test(a[o].nodeName)&&("false"===(n=a[o].nodeValue)&&(n=!1),r[RegExp.$1]=n)}();var a=function(){var e=function(){var e,t,n="0.5.5",r={name:"honeybadger.js",url:"https://github.com/honeybadger-io/honeybadger-js",version:n,language:"javascript"},a=!1,o=!1;function i(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function c(t){return!!e&&(e.name===t.name&&(e.message===t.message&&e.stack===t.stack))}function s(e,t){var n=e.message;for(var r in t)if(n.match(t[r]))return!0;return!1}function u(){var e={};return e.HTTP_USER_AGENT=navigator.userAgent,document.referrer.match(/\S/)&&(e.HTTP_REFERER=document.referrer),e}function l(e){if("object"===_typeof(e)){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join(";")}}function d(e){return e.stacktrace||e.stack||void 0}function f(e){var t,n=10;if(e&&(t=d(e)))return{stack:t,generator:void 0};try{throw new Error("")}catch(e){if(t=d(e))return{stack:t,generator:"throw"}}t=["<call-stack>"];for(var r=arguments.callee;r&&t.length<n;){/function(?:\s+([\w$]+))+\s*\(/.test(r.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>");try{r=r.caller}catch(e){break}}return{stack:t.join("\n"),generator:"walk"}}function v(e,t){var n,r;for(n=0,r=e.length;n<r;n++)if(!1===(0,e[n])(t))return!0;return!1}return function(g){var m=[],p=[],h={context:{},beforeNotifyHandlers:[],errorsSent:0};if("object"===_typeof(g))for(var I in g)h[I]=g[I];function y(){var e=window.console;if(e){var t=Array.prototype.slice.call(arguments);t.unshift("[Honeybadger]"),e.log.apply(e,t)}}function _(){if(P("debug"))return y.apply(this,arguments)}function P(e,t){var n=h[e];return void 0===n&&(n=h[e.toLowerCase()]),"false"===n&&(n=!1),void 0!==n?n:t}function N(){return"http"+(P("ssl",!0)?"s":"")+"://"+P("host","api.honeybadger.io")}function b(e){return!/function|symbol/.test(_typeof(e))&&("object"!==_typeof(e)||void 0!==e.hasOwnProperty)}function A(e,t,n){var r,a,o,i;if(o=[],n||(n=0),n>=P("max_depth",8))return encodeURIComponent(t)+"=[MAX DEPTH REACHED]";for(r in e)i=e[r],e.hasOwnProperty(r)&&null!=r&&null!=i&&(b(i)||(i=Object.prototype.toString.call(i)),a=t?t+"["+r+"]":r,o.push("object"===_typeof(i)?A(i,a,n+1):encodeURIComponent(a)+"="+encodeURIComponent(i)));return o.join("&")}function C(e){if(P("disabled",!1))return!1;if(x())return!1;try{var t=new(window.XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");return t.open("GET",e,P("async",!0)),t.send(),void D()}catch(e){y("Error encountered during XHR request (will retry): "+e)}(new Image).src=e}function E(n){e=t=null;var r=P("apiKey",P("api_key"));return r?(C(N()+"/v1/notices/js.gif?"+A({notice:n})+"&api_key="+r+"&t="+(new Date).getTime()),!0):(y("Unable to send error report: no API key has been configured."),!1)}function S(n,o){if(n||(n={}),"[object Error]"===Object.prototype.toString.call(n)){var f=n;n=i(n,{name:f.name,message:f.message,stack:d(f)})}if("object"!==_typeof(n)){var g=String(n);n={message:g}}if(c(n))return!1;if(t&&a&&E(t),0===function(){var e,t;for(e in t=[],n)({}).hasOwnProperty.call(n,e)&&t.push(e);return t}().length)return!1;if(o&&(n=i(n,o)),s(n,P("ignorePatterns")))return!1;if(v(h.beforeNotifyHandlers,n))return!1;var m=u();"string"==typeof n.cookies?m.HTTP_COOKIE=n.cookies:"object"===_typeof(n.cookies)&&(m.HTTP_COOKIE=l(n.cookies));var I={notifier:r,error:{class:n.name||"Error",message:n.message,backtrace:n.stack,generator:n.generator,fingerprint:n.fingerprint},request:{url:n.url||document.URL,component:n.component||P("component"),action:n.action||P("action"),context:i(h.context,n.context),cgi_data:m,params:n.params},server:{project_root:n.projectRoot||n.project_root||P("projectRoot",P("project_root",window.location.protocol+"//"+window.location.host)),environment_name:n.environment||P("environment"),revision:n.revision||P("revision")}};return t=I,e=n,a?(_("Deferring notice.",n,I),window.setTimeout((function(){c(n)&&E(I)}))):(_("Queuing notice.",n,I),p.push(I)),n}function w(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}var T=!0;if(window.atob||(T=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(T=!1)}catch(e){}function R(e,t){try{return"function"!=typeof e?e:w(e)?(e.___hb||(e.___hb=function(){var n=P("onerror",!0);if(!(T&&(n||t)||t&&!n))return e.apply(this,arguments);try{return e.apply(this,arguments)}catch(e){throw S(e),e}}),e.___hb.___hb=e.___hb,e.___hb):e}catch(t){return e}}h.notify=function(e,t,n){if(e||(e={}),"[object Error]"===Object.prototype.toString.call(e)){var r=e;e=i(e,{name:r.name,message:r.message,stack:d(r)})}"object"!==_typeof(e)&&(e={message:String(e)});t&&"object"!==_typeof(t)&&(t={name:String(t)});return t&&(e=i(e,t)),"object"===_typeof(n)&&(e=i(e,n)),S(e,f(e))},h.wrap=function(e){return R(e,!0)},h.setContext=function(e){return"object"===_typeof(e)&&(h.context=i(h.context,e)),h},h.resetContext=function(e){return"object"===_typeof(e)?h.context=i({},e):h.context={},h},h.configure=function(e){for(var t in e)h[t]=e[t];return h},h.beforeNotify=function(e){return h.beforeNotifyHandlers.push(e),h};var O=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};function D(){return h.errorsSent++}function x(){var e=P("maxErrors");return e&&h.errorsSent>=e}for(var I in h.reset=function(){for(var e in h.context={},h.beforeNotifyHandlers=[],h)-1==O.call(m,e)&&(h[e]=void 0);return h.resetMaxErrors(),h},h.resetMaxErrors=function(){return h.errorsSent=0},h.getVersion=function(){return n},h.addInstrumentationToBuiltins=function(){function t(e,t,n){if(!o&&e&&t&&n){var r=e[t];e[t]=n(r)}}var n=function(e){return function(t,n){if("function"==typeof t){var r=Array.prototype.slice.call(arguments,2);return t=R(t),e((function(){t.apply(null,r)}),n)}return e(t,n)}};t(window,"setTimeout",n),t(window,"setInterval",n),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,(function(e){var n=window[e]&&window[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(t(n,"addEventListener",(function(e){return function(t,n,r,a){try{n&&null!=n.handleEvent&&(n.handleEvent=R(n.handleEvent))}catch(e){y(e)}return e.call(this,t,R(n),r,a)}})),t(n,"removeEventListener",(function(e){return function(t,n,r,a){return e.call(this,t,n,r,a),e.call(this,t,R(n),r,a)}})))})),t(window,"onerror",(function(t){function n(t,n,r,a,o){if(_("window.onerror callback invoked.",arguments),!e&&P("onerror",!0))if(0===r&&/Script error\.?/.test(t))y("Ignoring cross-domain script error. Use CORS to enable tracking of these types of errors.",arguments);else{var i=[t,"\n    at ? (",n||"unknown",":",r||0,":",a||0,")"].join("");if(o){var c={stack:d(o)};return c.stack||(c={stack:i}),void S(o,c)}S({name:"window.onerror",message:t,stack:i})}}return function(e,r,a,o,i){return n(e,r,a,o,i),"function"==typeof t&&t.apply(this,arguments)}})),o=!0},h)m.push(I);if(_("Initializing honeybadger.js "+n),/complete|interactive|loaded/.test(document.readyState))a=!0,_("honeybadger.js "+n+" ready");else{_("Installing ready handler");var k=function(){var e;for(a=!0,_("honeybadger.js "+n+" ready");e=p.pop();)E(e)};document.addEventListener?document.addEventListener("DOMContentLoaded",k,!0):window.attachEvent("onload",k)}return h}}(),t=e(r);return t.factory=e,t};e.exports?e.exports=a():t.Honeybadger=a()}("undefined"!=typeof self?self:commonjsGlobal)}));function shouldSendToHoneybadger(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1===e.search("customer-code")}function requiredParamsAreMet(e,t,n){return!shouldCheckRequiredParams(e,t,n)||checkParams(n)}function shouldCheckRequiredParams(e,t,n){var r=n&&getKeys(n).length>0;return!e&&t&&r}function checkParams(e){var t=getQueryStringsHash();return getKeys(e).some((function(n){var r=e[n],a=t[n.toLowerCase()];return a&&r&&("*"===r||a===r)}))}function requirementsNeeded(){var e=get("config"),t=void 0===e.rn?e.requirementsNeeded:e.rn;return void 0===t||t}function checkRequiredParams(e,t){var n=e.requiredParams,r=t.skipRequiredParamsCheck,a=requiredParamsAreMet(void 0!==r&&r,requirementsNeeded(),n);return a||Invoca.PNAPI.logOnce("requiredParams were not satisfied"),a}Invoca.ExceptionHandling={IGNORE_PATTERNS:[/_isMatchingDomain is not defined/i],Honeybadger:honeybadger,initialize:function(){function e(e){try{e.context=function(e){var t={},n=["invoca-js"];e.stack.match(/Invoca.PNAPI.fireCallbacks/)&&(n.push("customer-code","callback"),t.onComplete=Invoca.Client._settings.onComplete&&Invoca.Client._settings.onComplete.toString().substr(0,1e3));return t.tags=n.join(", "),t}(e)}catch(t){e.context={message:"Error in beforeNotify callback"}}return shouldSendToHoneybadger(e.context.tags)}function t(){try{if(Invoca.Client.getTagId()&&"production"===Invoca.PNAPI.environment){var e=_slicedToArray(Invoca.Client.getTagId().split("/"),2),t=e[0],n=e[1];return"https://www.invoca.net/networks/".concat(t,"/js_tags/ui/tag/").concat(n)}}catch(e){return"error generating URL"}}honeybadger.configure({disabled:!Invoca.PNAPI.exceptionsApiKey,apiKey:Invoca.PNAPI.exceptionsApiKey,revision:Invoca.PNAPI.version,environment:Invoca.PNAPI.environment,ignorePatterns:Invoca.ExceptionHandling.IGNORE_PATTERNS,onerror:!1,maxErrors:5,async:!0,debug:!1}),honeybadger.beforeNotify(e),honeybadger.setContext({tag_id:Invoca.Client.getTagId(),revision_id:Invoca.Client.getRevisionId(),network_id:Invoca.Client._settings&&Invoca.Client._settings.networkId,invoca_tag_url:t()})},notify:function(e,t){warn(e);var n=t?"".concat(t,": ").concat(e.name):void 0;honeybadger.notify(e,n)},notifyAndThrow:function(e,t){throw this.notify(e,t),e}},Invoca._PoolParams.readInvocaSessionData=function(e){var t=get("session"),n="object"==typeof t&&Invoca.PNAPI.getKeys(t).length>0,r=null;return Invoca.PNAPI.currentPageSettings.savePoolParams&&(Invoca.PNAPI.currentPageSettings.updatePoolParams=!1),n?(r=t,Invoca.PNAPI.currentPageSettings.updatePoolParams&&(r=Invoca.PNAPI.extend({},r,Invoca.PNAPI.currentPageSettings.poolParams))):r=Invoca._PoolParams.getParams({metrics:e}),r},Invoca._PoolParams.getWaitForData=getWaitForData,Invoca._PoolParams.getParams=getParams,Invoca.PNAPI.checkRequiredParams=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return checkRequiredParams(Invoca.PNAPI.currentPageSettings,e)};var USER_AGENT_PATTERNS=[/AdsBot-Google/i,/Bingbot/i,/BingPreview/i,/Googlebot/i,/Pulsepoint XT3 web scraper/i,/YandexBot/i,/Jooblebot/i,/PingdomPageSpeed/i,/Baidu/i,/proximic/i],RunDetector=function(){function e(t,n){var r=n.userAgent,a=n.PPCPNIsValid,o=void 0===a?function(){return!1}:a,i=n.requiredParamsOptions,c=void 0===i?{}:i;_classCallCheck(this,e),this.settings=t,this.userAgent=r,this.PPCPNIsValid=o,this.requiredParamsOptions=c,this.unmetConditions=[]}return _createClass(e,[{key:"shouldRun",value:function(){if(this.unmetConditions=[],this.userAgentIsAllowed())return this.checkConditions(),this.conditionsAreMet();log("Aborted because this User-Agent is banned")}},{key:"warnUnmetConditions",value:function(){this.conditionsAreMet()||this.tagIsPaused()||warn("Could not run because ".concat(this.unmetConditions.join(" and ")))}},{key:"checkConditions",value:function(){this.settings?(this.networkIdIsPresent(),this.canFindPhoneNumbers(),this.requiredParamsAreMet()):this.unmetConditions.push("settings have not been initialized")}},{key:"conditionsAreMet",value:function(){return 0===this.unmetConditions.length}},{key:"userAgentIsAllowed",value:function(){var e=this;return!USER_AGENT_PATTERNS.some((function(t){return t.test(e.userAgent)}))}},{key:"tagIsActive",value:function(){if(!1!==this.settings.active)return!0;this.unmetConditions.push("tag is paused")}},{key:"tagIsPaused",value:function(){return this.settings&&!this.tagIsActive()}},{key:"networkIdIsPresent",value:function(){if(this.settings.networkId)return!0;this.unmetConditions.push("networkId was not set")}},{key:"canFindPhoneNumbers",value:function(){var e=this.settings,t=e.numberSelector,n=e.numberToReplace,r=e.autoSwap;if(t||n||r)return!0;this.unmetConditions.push("numberSelector, numberToReplace, or autoSwap were not found")}},{key:"requiredParamsAreMet",value:function(){if(this.PPCPNIsValid()||checkRequiredParams(this.settings,this.requiredParamsOptions))return!0;this.unmetConditions.push("requiredParams were not met and there was no PPCPN")}}]),e}(),ssaNetworkIdList=["-1","548","1169","1244","1528","1627","1735","393","585","748","1170","1182","1395","1626","1639"];function isNetworkSSADisabled(e){return!!e&&includes(ssaNetworkIdList,e.toString())}function readOverridesFromURL(){var e={},t=readUrl("invoca_debug");return"true"===t?e.debugMode=!0:"false"===t&&(e.debugMode=!1),readUrl("invoca_hold")&&(warn('Aborted run because "invoca_hold" was found in the URL.\nCall Invoca.PNAPI.run() to run.'),e.holdRun=!0),e}function normalizeNumberToReplaceSetting(e){var t=e.numberToReplace;if(!t)return{numberToReplace:t};var n="string"==typeof t?t.split(","):t,r=Array.isArray(n)?n:getKeys(n);return{numberToReplace:reduce(r,(function(e,t){return e[t.toString().trim()]=n[t]||null,e}),{})}}function normalizeDestinationSettings(e){var t=e.destinationSettings,n=e.destinationParam;return"object"===_typeof(t)?{destinationSettings:t}:{destinationSettings:{paramName:n}}}var finalizeSettings=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={ssa:!isNetworkSSADisabled(e.networkId)},n=extend({},defaultSettings,t,e,normalizeNumberToReplaceSetting(e),normalizeDestinationSettings(e),readOverridesFromURL());return n};function PPCPNFromQueryString(){return Invoca.Tools.getQueryStringsHash().ppcpn}function PPCPNFromCache(){return get().ppcpn}function PPCPNIsValid(e){return e&&e.toString().replace(/\D/g,"").length<=11}function getPPCPN(){return PPCPNFromQueryString()||PPCPNFromCache()}function PPCPNIsPresent(){return PPCPNIsValid(getPPCPN())}function parseNumberIfRecognized(e,t){var n=parseNumber(e);return n?n.number:(t&&warn(t),null)}var find$2=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return flatten(e.map((function(e){return NumberFinder.searchIn(e,{numbersToReplace:t,exceptionHandler:Invoca.ExceptionHandling})})))},filter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAll,r=void 0!==n&&n,a=t.types,o=void 0===a?["a","text"]:a,i=t.allowed,c=void 0===i?[]:i,s=t.excluded,u=void 0===s?[]:s;return e.filter((function(e){var t=e.type,n=e.phoneNumber;return o.indexOf(t)>-1&&u.indexOf(n.number)<0&&(r||c.indexOf(n.number)>-1)}))};function parseAndCacheLatestOverride(e){var t=readUrl(e),n=get("config").ciov||get("config").campaignIdOverrideValue;if(e)return t&&(set("config","ciop",e),set("config","ciov",t)),t||n}var constructDestinationCampaignIDFor=function(e){return e.phoneNumber.nationalNumber},parseCampaignFromDOM=function(e,t,n){var r=e.node;return reduce(t,(function(e,t){return e||nodeContains(t,r)&&readAttribute(t,n)}),null)},associate=function(e,t){var n=t.overrideCampaignID,r=t.destinationAsID,a=t.campaignMapping,o=void 0===a?{}:a,i=t.numberSelectorNodes,c=t.DOMCampaignAttribute,s=t.defaultCampaignID;return reduce(e,(function(e,t){var a=t.campaignID||n||r&&constructDestinationCampaignIDFor(t)||o[t.phoneNumber.number]||parseCampaignFromDOM(t,i,c)||s;return a&&e.push(_objectSpread({},t,{campaignID:a})),e}),[])},numbersToReplaceFromPreviousPlacements=function(e,t){return reduce(t||[],(function(t,n){return find(e,(function(e){return e===n.phoneNumber.number}))&&n.invocaNumber?t.concat(n.invocaNumber.number):t}),[])},CAMPAIGN_ID_ATTRIBUTE="data-invoca-campaign-id",collectPlacements=function(e){var t=e.autoSwap,n=e.numberToReplace,r=void 0===n?{}:n,a=e.doNotSwap,o=void 0===a?[]:a,i=e.numberSelector,c=e.telLinkOnly,s=e.campaignIdOverrideParam,u=e.destinationAsId,l=e.defaultCampaignId,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=getKeys(r),v=f.filter(isVanity),g=i?find$1(i):[],m=g.length>0?g:[document.documentElement],p=find$2(m,v),h=f.map((function(e){return parseNumberIfRecognized(e,"Skipping ".concat(e," in numbers to replace because it is not a valid phone number in our supported regions."))})).filter((function(e){return e})),I=numbersToReplaceFromPreviousPlacements(h,d),y=h.concat(I),_=o.map((function(e){return parseNumberIfRecognized(e,"Skipping ".concat(e," in do not swap list because it is not a valid phone number in our supported regions."))})).filter((function(e){return e})),P=["a"];!c&&P.push("text");var N=filter(p,{allowAll:t||g.length,allowed:y,types:P,excluded:_,numberSelectorNodes:g}),b=reduce(f,(function(e,t){var n=parseNumberIfRecognized(t);return n&&(e[n]=r[t]),e}),{}),A=parseAndCacheLatestOverride(s);return associate(N,{overrideCampaignID:A,destinationAsID:u,campaignMapping:b,numberSelectorNodes:g,DOMCampaignAttribute:CAMPAIGN_ID_ATTRIBUTE,defaultCampaignID:l})};function buildRequest(e,t,n){var r,a=e.phoneNumber,o=e.campaignID,i=a.number;return _objectSpread({request_id:t?i:o,advertiser_campaign_id_from_network:o},t?{params:(r={},_defineProperty(r,t,i),_defineProperty(r,"invoca_detected_destination",i),r)}:{},n?{destination_name:n}:{})}var build=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.destinationParam,r=t.defaultDestinationName,a=t.onPhoneNumberFound,o=void 0===a?function(e,t){return t}:a;return reduce(e,(function(e,t){var a=buildRequest(t,n,r),i=o(t.node,a);if(!1===i)return e;var c="object"===_typeof(i)&&i.request_id?i:a;return e.concat({placement:t,request:c})}),[])},group=function(e){return reduce(e,(function(e,t){var n=t.request;return e[n.request_id]=n,e}),{})};function saveAttribution(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Invoca.PNAPI.currentPageSettings.ssa,r=get("config"),a=r.ce;if(n||a){var o=requestUrl(!0),i=requestArgs(e);resetClientMessageValue("allDataReset");var c=removeUndefinedValues(i);Invoca.PNAPI.requestWithData(o,c,!0,t,(function(e){"object"===_typeof(e)&&(cacheInvocaIdFromResponse(e),Invoca.PNAPI.fireCallbacks([e]))}))}}function serverSideAttributionCanary(e,t,n,r,a){var o=Invoca.PNAPI.currentPageSettings.networkId,i=Invoca.PNAPI.version,c=requestUrl(!0),s={invoca_id:a},u=stringifyJSON(stringifyObjectValues(extend(t,s))),l=extend(e||{},s),d=removeUndefinedValues({network_id:o,js_version:i,tag_id:Invoca.Client.getTagId(),request_data_shared_params:u,request_data:stringifyJSON(n),client_info:stringifyJSON(Invoca.ClientInfo.getPageInfo()),client_messages:r,canary:!0,acg:stringifyJSON(stringifyObjectValues({request_data_shared_params:stringifyObjectValues(l),request_data:n}))});Invoca.PNAPI.requestWithData(c,d,!0,null,(function(){}))}function setCanaryEligibility(){void 0===get("config").ce&&set("config","ce",!getInvocaId().invoca_id)}function canarySharedParams(){setCanaryMode(!0);var e={},t={};try{var n=waitForDataWithIntegrations();e=getParams({queryWaitForDataOnce:!0}),t=reduce(n,(function(e,t){var n=t.paramName,r=t.fallbackValue;return e[n]=r,e}),{})}catch(e){}finally{setCanaryMode(!1)}return extend({},t,e||{})}function parseNumberFromRequest(e){return e.params&&e.params.invoca_detected_destination?e.params.invoca_detected_destination:e.request_id}function filterValidNumbers(e){return e&&e.length?e.filter((function(e){var t=parseNumberFromRequest(e);return!t||!isDynamicNumberCached(t)})):e}var request=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=group(e),i=Invoca.PNAPI.getValues(o),c=filterValidNumbers(i),s=!Invoca.PNAPI.currentPageSettings.ssa,u=hasNewData(a,t);if(c.length||PPCPNIsPresent()){if(r.collect("startMapNumberRequest"),s){setCanaryEligibility();var l=get("config"),d=l.ce,f=l.cf,v=l.bf;if(d&&"r"!==f&&!0!==v){var g=getInvocaId(),m=g.invoca_id;serverSideAttributionCanary(t,canarySharedParams(),c,t.mapNumberClientMessages,m)}else"a"===f&&set("config","cf",null)}Invoca.PNAPI.requestPromoNumbers({requestData:c,requestDataSharedParams:t,onComplete:n},r)}else u?saveAttribution(t,r):log("No replaceable numbers found, and no new data to update.")},ANCESTOR_LIMIT=10,closestTelLink=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ANCESTOR_LIMIT,n=e,r=0;r<t&&n;){if(isTelNode(n))return n;n=n.parentNode,r++}return null},parseCountryCode=function(e,t){var n=t.countryCallingCode;return e.substring(0,n.length)===n?n:""},parseNationalTrunkPrefix=function(e,t,n){var r=n.nationalNumber;return e.replace(t,"").replace(r,"")};function mirror(e,t){return reduce(e.split(""),(function(e,n){var r=e.number,a=e.index;return/[A-Za-z0-9]/.test(n)?{number:r.concat(t[a]||""),index:a+1}:{number:r.concat(n),index:a}}),{index:0,number:""}).number}var mirrorFormat=function(e,t){var n=e.original,r=e.phoneNumber;if(r.country===t.country){var a=convertToDigits(n).replace(/[^0-9]/gi,""),o=parseCountryCode(a,r);if(isVanity(n))return t.formatNational();var i=parseNationalTrunkPrefix(a,o,r);return mirror(n,"".concat(o).concat(i).concat(t.nationalNumber))}return t.formatInternational()},hasStaticNumber=function(e){return e&&e.vlData},readAndCacheStaticNumber=function(e){var t=_slicedToArray(e,1)[0];if(hasStaticNumber(t)){var n=t.nationalNumber,r=t.vlData;return set("session",Invoca.PNAPI.extend({},get("session"),{ppcpn:n,vlData:encodeURIComponent(stringifyJSON(r))})),t}};function replaceTel(e,t){var n=e.node,r=readAttribute(n,"href"),a=t.getURI();return n.setAttribute("href",a),"Replaced tel link ".concat(r," with ").concat(a)}function replaceText(e,t){var n=e.node,r=e.match,a=mirrorFormat(e,t),o=n.nodeValue.replace(r,a);n.nodeValue=o;var i=["Replaced ".concat(r," with ").concat(a)];e.match=a;var c=closestTelLink(n);return c&&(replaceTel({node:c},t),i.push("and tel link(s) updated")),i.join(", ")}var replacementFunctions={a:replaceTel,text:replaceText},replace=function(e,t,n){var r=n.onCompleteOverride;return function(n,a){if(t.collect("endMapNumberRequest"),r)r(n,a);else{var o=readAndCacheStaticNumber(a),i=reduce(a,(function(e,t){return e[t.requestId]=t,e}),{});e.map((function(e){var t=e.placement,n=e.request,r=o||i[n.request_id]||{},a=r.status,c=r.countryCode,s=r.nationalNumber;if("success"===a&&c&&s){var u=parseNumber("+".concat(c).concat(s));t.invocaNumber=u,u&&u.number&&cacheDynamicNumber(u.number);var l=replacementFunctions[t.type](t,u);Invoca.PNAPI.logOnce(l)}})),t.collect("endNumberReplacement")}Invoca.PNAPI.onInvocaResponse(n,a)}},requestAndReplaceNumbers=function(e,t,n,r,a){var o=r.destinationSettings,i=void 0===o?{}:o,c=r.defaultDestinationName,s=r.onPhoneNumberFound,u=r.onCompleteOverride,l=i.paramName,d=build(e,{destinationParam:l,defaultDestinationName:c,onPhoneNumberFound:s}),f=replace(d,n,{onCompleteOverride:u});return"function"==typeof t?t(n,(function(e){request(d,e,f,n,a)})):request(d,t,f,n,a),d},groupBy=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return reduce(e,(function(e,n){var r=t(n);return e[r]=e[r]||[],e[r].push(n),e}),{})},mergePlacements=function(e,t){var n=groupBy(t,(function(e){return e.invocaNumber&&e.invocaNumber.number}));return reduce(e,(function(e,t){var r=n[t.phoneNumber.number];if(r){var a=find(r,(function(e){return e.node===t.node}));a&&e.push(a)}else e.push(t);return e}),[])},Runner=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;_classCallCheck(this,e),this.settings=t,this._prevPlacements=r,this.metrics=n}return _createClass(e,[{key:"refresh",value:function(e,t){return this.requestAndSwap(e,t)}},{key:"requestAndSwap",value:function(e,t){return requestAndReplaceNumbers(this.placements,e,this.metrics,this.settings,t)}},{key:"placements",get:function(){if(!this._placements){this.metrics.collect("startCollectPlacements");var e=collectPlacements(this.settings,this._prevPlacements);this.metrics.collect("endCollectPlacements"),this._placements=this._prevPlacements?mergePlacements(e,this._prevPlacements):e}return this._placements}}]),e}(),lifecycle_es5=createCommonjsModule((function(e,t){
/*! lifecycle.es5.js v0.1.1 */
e.exports=function(){var e=void 0;try{new EventTarget,e=!1}catch(t){e=!1}var t="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+_typeof(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=_typeof(t)&&"function"!=typeof t?e:t},i=function(){function e(){n(this,e),this._registry={}}return r(e,[{key:"addEventListener",value:function(e,t){this._getRegistry(e).push(t)}},{key:"removeEventListener",value:function(e,t){var n=this._getRegistry(e),r=n.indexOf(t);r>-1&&n.splice(r,1)}},{key:"dispatchEvent",value:function(e){return e.target=this,Object.freeze(e),this._getRegistry(e.type).forEach((function(t){return t(e)})),!0}},{key:"_getRegistry",value:function(e){return this._registry[e]=this._registry[e]||[]}}]),e}(),c=e?EventTarget:i,s=e?Event:function e(t){n(this,e),this.type=t},u=function(e){function t(e,r){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.newState=r.newState,a.oldState=r.oldState,a.originalEvent=r.originalEvent,a}return a(t,s),t}(),l="active",d="passive",f="hidden",v="frozen",g="terminated",m="object"===("undefined"==typeof safari?"undefined":t(safari))&&safari.pushNotification,p=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],h=function(e){return e.preventDefault(),e.returnValue="Are you sure?"},I=[[l,d,f,g],[l,d,f,v],[f,d,l],[v,f],[v,l],[v,d]].map((function(e){return e.reduce((function(e,t,n){return e[t]=n,e}),{})})),y=function(){return document.visibilityState===f?f:document.hasFocus()?l:d};return new(function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),r=y();return e._state=r,e._unsavedChanges=[],e._handleEvents=e._handleEvents.bind(e),p.forEach((function(t){return addEventListener(t,e._handleEvents,!0)})),m&&addEventListener("beforeunload",(function(t){e._safariBeforeUnloadTimeout=setTimeout((function(){t.defaultPrevented||t.returnValue.length>0||e._dispatchChangesIfNeeded(t,f)}),0)})),e}return a(t,c),r(t,[{key:"addUnsavedChanges",value:function(e){!this._unsavedChanges.indexOf(e)>-1&&(0===this._unsavedChanges.length&&addEventListener("beforeunload",h),this._unsavedChanges.push(e))}},{key:"removeUnsavedChanges",value:function(e){var t=this._unsavedChanges.indexOf(e);t>-1&&(this._unsavedChanges.splice(t,1),0===this._unsavedChanges.length&&removeEventListener("beforeunload",h))}},{key:"_dispatchChangesIfNeeded",value:function(e,t){if(t!==this._state)for(var n=function(e,t){for(var n,r=0;n=I[r];++r){var a=n[e],o=n[t];if(a>=0&&o>=0&&o>a)return Object.keys(n).slice(a,o+1)}return[]}(this._state,t),r=0;r<n.length-1;++r){var a=n[r],o=n[r+1];this._state=o,this.dispatchEvent(new u("statechange",{oldState:a,newState:o,originalEvent:e}))}}},{key:"_handleEvents",value:function(e){switch(m&&clearTimeout(this._safariBeforeUnloadTimeout),e.type){case"pageshow":case"resume":this._dispatchChangesIfNeeded(e,y());break;case"focus":this._dispatchChangesIfNeeded(e,l);break;case"blur":this._state===l&&this._dispatchChangesIfNeeded(e,y());break;case"pagehide":case"unload":this._dispatchChangesIfNeeded(e,e.persisted?v:g);break;case"visibilitychange":this._state!==v&&this._state!==g&&this._dispatchChangesIfNeeded(e,y());break;case"freeze":this._dispatchChangesIfNeeded(e,v)}}},{key:"state",get:function(){return this._state}},{key:"pageWasDiscarded",get:function(){return document.wasDiscarded||!1}}]),t}())}()})),fireBeaconRequests=function(e){if("hidden"===e.newState){var t=Invoca.PNAPI.pendingRequests;if(t.length>0)if(set("config","ba",!0),void 0!==navigator.sendBeacon){var n=encodeURIComponent(e.originalEvent.type),r="&beaconStateChangeEvent=".concat(n);forEach(t,(function(e){var t="&"===e.slice(-1)?"":"&";navigator.sendBeacon(e+t+"beaconRequest=true"+r)})),Invoca.PNAPI.pendingRequests=[]}else set("config","bf",!0)}},initializeBeacon=function(){try{lifecycle_es5.addEventListener("statechange",fireBeaconRequests)}catch(e){warn("Cannot add the beacon listener: ".concat(e.message))}},ALLOWED_FORMATS=["jsonp","json"],DEFAULT_FORMAT="jsonp";function requestFormat(e){try{var t=e.split(".").slice(-1)[0].split("?")[0];if(ALLOWED_FORMATS.indexOf(t)>=0)return t;throw new Error("Unrecognized request format")}catch(e){Invoca.log("Invoca.PNAPI.requestFormat: invalid request format specified.",!0)}return DEFAULT_FORMAT}var hasNotAlreadyRun=!0,runner,OPTIMIZELY_REQUIRED_PARAMS;function handlePageReady(){try{if(Invoca.PNAPI.currentPageSettings.holdRun)return;if(Invoca.PNAPI.currentPageSettings.autoRun)Invoca.PNAPI.run();else{var e=saveInitialSession(metricsInstance.noop);saveAttribution(e),Invoca._PoolParams.getWaitForData(metricsInstance.noop,(function(t){hasNewData(e,t)&&saveAttribution(t)}))}}catch(e){e.message="Failed to handle page ready: ".concat(e.message),Invoca.ExceptionHandling.notify(e)}}function saveInitialSession(e,t){var n=Invoca._PoolParams.getParams({queryWaitForDataOnce:!0,metrics:e});if(firstVisit()){var r=get("config");saveEntireCache({sessionParams:n,configParams:Invoca.PNAPI.extend({},r,{rn:t,fv:!1})})}return n}function collectBase64Metrics(e){get("config").ab||window.atob&&window.btoa||(e.collect("base64NotSupported","counter",{requireRoundTrip:!1}),set("config","ab",!0))}function collectBeaconMetrics(e){var t=get("config"),n=t.ba,r=t.bf,a=t.br;void 0!==navigator.sendBeacon?e.collect("beaconSupported","counter",{requireRoundTrip:!1}):e.collect("beaconNotSupported","counter",{requireRoundTrip:!1}),!a&&n&&(r?e.collect("beaconFailure","counter",{requireRoundTrip:!1}):e.collect("beaconSuccess","counter",{requireRoundTrip:!1}),set("config","br",!0))}function checkForDoubleLoad(e){Invoca.doubleLoad&&(e.collect("doubleLoad","counter",{requireRoundTrip:!1}),warn("InvocaJS has already been loaded! Please check for double load."))}function determineWaitTime(e){var t=e.reRunAfter;return e.ssa?t>maxWaitTime()?t:maxWaitTime():t}return Invoca.runner&&(runner=Invoca.runner),Invoca.PNAPI.integration=function(e){Invoca.Client._settings=Invoca.PNAPI.extend({},e),Invoca.PNAPI.currentPageSettings=finalizeSettings(e),setCountry(Invoca.PNAPI.currentPageSettings.country),Invoca.Client.doneLoading(),Invoca.ExceptionHandling.initialize(),initialize(),initializeBeacon(),Invoca.PNAPI.ready(handlePageReady)},Invoca.PNAPI.resetRun=function(){hasNotAlreadyRun=!0,runner=void 0},Invoca.PNAPI.run=function(e){var t=metricsInstance.newRun();checkForDoubleLoad(t),t.collect("startRun");var n=new RunDetector(Invoca.PNAPI.currentPageSettings,{userAgent:Invoca.userAgent,PPCPNIsValid:PPCPNIsPresent,requiredParamsOptions:e});if(!n.shouldRun())return n.warnUnmetConditions(),!1;try{runner=new Runner(Invoca.PNAPI.currentPageSettings,t,runner&&runner.placements);var r=determineWaitTime(Invoca.PNAPI.currentPageSettings),a=saveInitialSession(t,!1);if(collectBase64Metrics(t),collectBeaconMetrics(t),r>0&&hasNotAlreadyRun)runner.requestAndSwap(a,{}),setTimeout((function(){return runner.refresh(Invoca._PoolParams.getWaitForData,a)}),r);else{var o=maxWaitTime()>0;o&&saveAttribution(a);var i=hasNotAlreadyRun&&!o?{}:a;runner.requestAndSwap(Invoca._PoolParams.getWaitForData,i)}return hasNotAlreadyRun=!1,Invoca.runner=runner,runner}catch(e){Invoca.ExceptionHandling.notify(e,"Invoca.PNAPI.run")}},Invoca.PNAPI.requestWithData=function(e,t,n,r,a){return"json"===requestFormat(e)?Invoca.JSON.requestWithData(e,t,n,r,a):Invoca.JSONP.requestWithData(e,t,n,a)},Invoca.PNAPI.refresh=function(){refreshCache();var e=new RunDetector(Invoca.PNAPI.currentPageSettings,{userAgent:Invoca.userAgent,PPCPNIsValid:PPCPNIsPresent});if(!e.shouldRun())return e.warnUnmetConditions(),!1;runner&&runner.refresh(Invoca._PoolParams.getWaitForData)},Invoca.PNAPI.placements=function(){return runner&&runner.placements},Invoca.Integrations.config=function(e){return new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.config=t,this.integrationNames=Object.keys(this.config)}return _createClass(e,[{key:"asWaitForData",value:function(){return this.integrationNames.map(this._buildConfigsArray.bind(this)).filter((function(e){return e}))}},{key:"_buildConfigsArray",value:function(e){var t=Invoca.Integrations[e],n=this.config[e];if(t){var r=[new t(n).config,n].filter((function(e){return e&&e.constructor===Object&&Object.keys(e).length}));return Invoca.PNAPI.extend.apply(null,r)}return warn('Integration named "'.concat(e,'" is not a supported integration')),null}}]),e}())(e)},Invoca.Integrations.adobeAnalytics=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),t.username?this.config=Invoca.PNAPI.extend({paramName:"mcid",on:this.on.bind(this),timeout:Invoca.Integrations.DEFAULT_WAIT_TIME},t):warn("AdobeAnalytics: Username is required in ".concat(stringifyJSON(t)))}return _createClass(e,[{key:"on",value:function(){if(void 0!==window.Visitor&&window.Visitor.getInstance){var e=window.Visitor.getInstance("".concat(this.config.username));if(e)return e.getMarketingCloudVisitorID()}}}]),e}(),Invoca.Integrations.adobeAnalyticsLegacy=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.config=Invoca.PNAPI.extend({paramName:"s_vi",on:this.on.bind(this),timeout:Invoca.Integrations.DEFAULT_WAIT_TIME},t)}return _createClass(e,[{key:"on",value:function(){var e=readCookie("s_vi"),t=null;if(e){var n=e.split("|");t=(n[1]&&n[1].split("[CE]")||[null])[0]}return t}}]),e}(),Invoca.Integrations.googleAnalytics=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.config=Invoca.PNAPI.extend({paramName:"g_cid",on:this.on.bind(this),timeout:Invoca.Integrations.DEFAULT_WAIT_TIME},t)}return _createClass(e,[{key:"on",value:function(){if(void 0!==window.ga&&"function"==typeof window.ga.getAll){var e=window.ga.getAll()[0];if(e)return e.get("clientId")}}}]),e}(),Invoca.Integrations.hubspot=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.config=Invoca.PNAPI.extend({paramName:"hubspotutk",on:this.on.bind(this),timeout:Invoca.Integrations.DEFAULT_WAIT_TIME},t)}return _createClass(e,[{key:"on",value:function(){return readCookie("hubspotutk")}}]),e}(),Invoca.Integrations.optimizely=(OPTIMIZELY_REQUIRED_PARAMS=["goalName","goalId","goalValue"],function(){function e(t){_classCallCheck(this,e);var n=this._checkForMissingParams(t);0===n.length?(this.config=Invoca.PNAPI.extend({paramName:"goal_url",on:this.on.bind(this),timeout:Invoca.Integrations.DEFAULT_WAIT_TIME},t),this.userConfig=t):warn("Optimizely: Required params ".concat(stringifyJSON(n)," were not found in ").concat(stringifyJSON(t)))}return _createClass(e,[{key:"on",value:function(){if(window.optimizely)try{return this._setupCredentials(),this.generateConversionUrl()}catch(e){warn("Optimizely: Unexpected error occured: ".concat(e.message))}}},{key:"generateConversionUrl",value:function(){var e=decodeURIComponent(this.userConfig.goalName)===this.userConfig.goalName?encodeURIComponent(this.userConfig.goalName):this.userConfig.goalName,t="http://".concat(window.optimizely.getProjectId(),".log.optimizely.com/event?"),n={a:window.optimizely.getAccountId(),n:e,u:this._getUserId()+this._getVariationsInParameters()+this._getSegmentsInParameters(),g:this.userConfig.goalId,v:this.userConfig.goalValue};return t+Object.keys(n).map((function(e){return void 0!==n[e]&&"".concat(e,"=").concat(n[e])})).filter((function(e){return e})).join("&")}},{key:"_getVariationsInParameters",value:function(){var e="";for(var t in window.optimizely.variationIdsMap)e+="&x"+t+"="+window.optimizely.variationIdsMap[t].join("_");return e}},{key:"_getSegmentsInParameters",value:function(){var e="";for(var t in window.optimizely.data.visitor.segments)e+="&s"+t+"="+window.optimizely.data.visitor.segments[t];return e}},{key:"_getUserId",value:function(){return readCookie("optimizelyEndUserId")}},{key:"_setupCredentials",value:function(){this.authenticated||(window.optimizely.push({type:"integration",OAuthClientId:"5406430409"}),this.authenticated=!0)}},{key:"_checkForMissingParams",value:function(e){var t=OPTIMIZELY_REQUIRED_PARAMS;return e?t.filter((function(t){return void 0===e[t]})):t}}]),e}()),fetchRevision(),Invoca.Metrics=metricsInstance,Invoca._Cache=Cache,Invoca}();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      s" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_studio_mac_bundle_multiple_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_studio_mac_bundle_multiple_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <div class="multiple-download-container">
            
              <h3 class="hide-from-toc" id="dynamic_data.setvar.dialog_download_message" data-text="                 Select the version of Android Studio that’s right for your Mac:               " tabindex="-1">
                Select the version of Android Studio that’s right for your Mac:
              </h3>
            
            <h4 class="hide-from-toc" id="dynamic_data.setvar.dialog_product_name" data-text="               Android Studio Hedgehog | 2023.1.1 Patch 1             " tabindex="-1">
              Android Studio Hedgehog | 2023.1.1 Patch 1
            </h4>
            <div class="multiple-download-options">
              <div class="multiple-download-option">
                <button class="button button-disabled">
                  Mac with Intel chip
                </button>
                <a
                   class="button button-primary devsite-dialog-close gc-analytics-event"
                   data-action="download"
                   data-category="studio_mac_bundle_download_manual_select"
                   href="https://redirector.gvt1.com/edgedl/android/studio/install/2023.1.1.27/android-studio-2023.1.1.27-mac.dmg"
                   id="agree-button__studio_mac_bundle_download_manual_select"
                >
                  Mac with Intel chip
                </a>
                
                  <p><em>android-studio-2023.1.1.27-mac.dmg</em></p>
                
              </div>
              <div class="multiple-download-option">
                <button class="button button-disabled">
                  Mac with Apple chip
                </button>
                <a
                   class="button devsite-dialog-close gc-analytics-event"
                   data-action="download"
                   data-category="studio_mac_arm_bundle_download_manual_select"
                   href="https://redirector.gvt1.com/edgedl/android/studio/install/2023.1.1.27/android-studio-2023.1.1.27-mac_arm.dmg"
                   id="agree-button__studio_mac_arm_bundle_download_manual_select"
                >
                  Mac with Apple chip
                </a>
                
                  <p><em>android-studio-2023.1.1.27-mac_arm.dmg</em></p>
                
              </div>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</div>
 <devsite-badge-awarder badge="https://developers.google.com/profile/badges/activity/android/install-android-studio" target="agree-button__studio_mac_bundle_download_manual_select" type="click"></devsite-badge-awarder> <devsite-badge-awarder badge="https://developers.google.com/profile/badges/activity/android/install-android-studio" target="agree-button__studio_mac_arm_bundle_download_manual_select" type="click"></devsite-badge-awarder>

    

<div id="studio_win_bundle_download"
    class="devsite-dialog dac-download-dialog">
  <div class="devsite-dialog-contents">
    <h2 class="hide-from-toc" id="descargar-dynamic_data.setvar.dialog_product_name" data-text="Descargar Android Studio Hedgehog | 2023.1.1 Patch 1" tabindex="-1">Descargar Android Studio Hedgehog | 2023.1.1 Patch 1</h2>
    <p>Antes de iniciar la descarga, debes aceptar los siguientes términos y condiciones.</p>
    <div class="dialog-content-stretch sdk-terms"><h2 class="hide-from-toc" id="términos-y-condiciones" data-text="Términos y Condiciones" tabindex="-1">Términos y Condiciones</h2>

    Este es el Acuerdo de Licencia del Kit para Desarrollo de Software de Android

<h3 class="hide-from-toc" data-text="1. Introducción" id="1.-introduction" tabindex="-1">1. Introducción</h3>
1.1 Se le otorga licencia para el Kit de Desarrollo de Software de Android (al que se hace referencia en el Contrato de Licencia como "SDK" y que incluye específicamente los archivos de sistema de Android, las API incorporadas y los complementos de las API de Google) sujeto a las condiciones del Contrato de Licencia. El Contrato de Licencia constituye un acuerdo legalmente vinculante entre usted y Google en relación con el uso que usted haga del SDK.

1.2 "Android" significa la pila de software de Android para dispositivos, tal como se ofrece en el proyecto de código abierto de Android, disponible en la siguiente URL: https://source.android.com/, y sus actualizaciones ocasionales.

1.3 Una "implementación compatible" hace referencia a cualquier dispositivo Android que (i) cumpla con el documento de Definición de Compatibilidad de Android, que está disponible en el sitio web de compatibilidad de Android (https://source.android.com/compatibility) y puede actualizarse de manera periódica; y que (ii) supere satisfactoriamente el Conjunto de Pruebas de Compatibilidad de Android (CTS).

1.4 "Google" se refiere a Google LLC, una corporación organizada según las leyes del estado de Delaware, EE.UU., que opera bajos las leyes de Estados Unidos y cuya ubicación principal se encuentra en 1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.


<h3 class="hide-from-toc" data-text="2. Aceptación de este Contrato de Licencia" id="2.-accepting-this-license-agreement" tabindex="-1">2. Aceptación de este Contrato de Licencia</h3>
2.1 Para usar el SDK, primero debe aceptar este Contrato de Licencia. Si no lo hace, no podrá usar el SDK.

2.2 Al hacer clic para aceptar o usar este SDK, acepta los términos del Contrato de Licencia.

2.3 Usted no podrá usar el SDK ni aceptar el Contrato de Licencia si tiene prohibido recibir el SDK conforme a las leyes de los Estados Unidos o de otros países, incluido el país en el que resida o desde el cual usará el SDK.

2.4 Si acepta quedar vinculado por este Contrato de Licencia en nombre de su empleador o de otra entidad, usted manifiesta y garantiza que posee la capacidad legal absoluta para vincular a su empleador o entidad correspondiente a este Contrato de Licencia. Si no posee la autoridad requerida, no podrá aceptar el Contrato de Licencia ni usar el SDK en representación de su empleador o de otra entidad.


<h3 class="hide-from-toc" data-text="3. Licencia del SDK de Google" id="3.-sdk-license-from-google" tabindex="-1">3. Licencia del SDK de Google</h3>
3.1 Sujeto a las condiciones del Contrato de Licencia, Google le otorga una licencia limitada, mundial, libre de derechos de autor, no asignable, no exclusiva y no susceptible de someterse a otras licencias para usar el SDK con el único fin de desarrollar aplicaciones para implementaciones compatibles de Android.

3.2 No podrá usar este SDK a fin de desarrollar aplicaciones para otras plataformas (incluidas las implementaciones no compatibles de Android) o para desarrollar otro SDK. Si lo desea, podrá desarrollar aplicaciones para otras plataformas, incluidas las implementaciones no compatibles de Android, siempre y cuando no lo haga con este SDK.

3.3 Usted acepta que Google o terceros poseen el derecho legal, la propiedad y el interés totales relacionados con el SDK, incluidos los Derechos de Propiedad Intelectual que este tenga. "Derechos de Propiedad Intelectual" hace referencia a todos los derechos otorgados por las leyes de patentes, las leyes de derechos de autor, las leyes de secreto comercial, las leyes de marca comercial y cualquier otro derecho de propiedad. Google se reserva todos los derechos que no se le otorguen a usted expresamente.

3.4 No podrá usar el SDK para ningún fin que no esté permitido expresamente en este Contrato de Licencia.  Salvo en la medida en que lo exijan las licencias aplicables de terceros, no podrá copiar (excepto con fines de copia de seguridad), modificar, adaptar, redistribuir, descompilar ni desmontar el SDK ni ninguna de sus partes. Tampoco podrá aplicar ingeniería inversa ni crear obras derivadas de este.

3.5 El uso, la reproducción y la distribución de componentes del SDK con licencia de software de código abierto se rigen exclusivamente por los términos de la licencia de ese software de código abierto y no por el Contrato de Licencia.

3.6 Usted acepta que la forma y la naturaleza del SDK que proporciona Google pueden cambiar sin previo aviso, y que sus futuras versiones pueden ser incompatibles con las aplicaciones desarrolladas en versiones anteriores. Acepta que Google, a su entera discreción y sin previo aviso, puede dejar de brindarles a usted o a los usuarios en general (de forma permanente o temporal) el SDK (o cualquiera de sus funciones).

3.7 Nada de lo expresado en el Contrato de Licencia le otorga el derecho de usar alguno de los nombres comerciales, marcas comerciales, marcas de servicio, logotipos, nombres de dominio ni otras características distintivas de marca de Google.

3.8 Usted acepta que no eliminará, disimulará ni alterará ninguno de los avisos de derechos de propiedad (incluidos avisos de marca comercial y derechos de autor) que pudieran anexarse o incluirse en el SDK.


<h3 class="hide-from-toc" data-text="4. Uso del SDK por su parte" id="4.-use-of-the-sdk-by-you" tabindex="-1">4. Uso del SDK por su parte</h3>
4.1 Google acepta que mediante el Contrato de Licencia no obtendrá ningún derecho, título ni interés de parte de usted (o sus proveedores de licencias) con respecto a cualquier aplicación de software que usted desarrolle usando el SDK, incluidos los derechos de propiedad intelectual que existan en esas aplicaciones.

4.2 Usted acepta usar el SDK y desarrollar las aplicaciones únicamente conforme a lo permitido por (a) el Contrato de Licencia y (b) las leyes, regulaciones o prácticas o pautas generalmente aceptadas aplicables en las jurisdicciones correspondientes (incluidas las leyes sobre la exportación de datos o software hacia y desde los Estados Unidos u otros países correspondientes).

4.3 Usted acepta que, si usa el SDK para desarrollar aplicaciones para usuarios del público en general, protegerá la privacidad y los derechos legales de esos usuarios. Si los usuarios le proporcionan sus nombres de usuario, contraseñas y otra información personal o de acceso, debe comunicarles que la información estará disponible para su aplicación, y debe proporcionar un aviso de privacidad con validez legal y protección para esos usuarios. Si en su aplicación se almacena información sensible o personal proporcionada por los usuarios, deberá hacerse de forma segura. Si el usuario le proporciona a su aplicación información de la Cuenta de Google, su aplicación solo podrá usarla para acceder a la Cuenta de Google del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya brindado.

4.4 Usted acepta que no participará en ninguna actividad con el SDK, incluido el desarrollo o la distribución de una aplicación, que interfiera, interrumpa, dañe o acceda sin autorización a los servidores, las redes u otras propiedades o servicios de un tercero, incluidos, sin limitaciones, Google o cualquier proveedor de comunicaciones móviles.

4.5 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) de los datos, el contenido o los recursos que cree, transmita o muestre a través de Android o aplicaciones para Android, y de las consecuencias de sus acciones (incluidos los daños o las pérdidas que Google pudiera sufrir) al hacerlo.

4.6 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) por incumplimientos de sus obligaciones conforme al Contrato de Licencia, contratos de terceros o Condiciones de Servicio aplicables, o bien leyes o normas aplicables, y por las consecuencias (incluidos los daños o las pérdidas que Google o cualquier tercero pudieran sufrir) debido a dicho incumplimiento.


<h3 class="hide-from-toc" data-text="5. Sus credenciales de desarrollador" id="5.-your-developer-credentials" tabindex="-1">5. Sus credenciales de desarrollador</h3>
5.1 Usted acepta que es responsable de mantener la confidencialidad de toda credencial de desarrollador que Google pudiera otorgarle o que pudiera escoger usted mismo, y que será el único responsable de todas las aplicaciones que se desarrollen con sus credenciales de desarrollador.


<h3 class="hide-from-toc" data-text="6. Información y privacidad" id="6.-privacy-and-information" tabindex="-1">6. Información y privacidad</h3>
6.1 A fin de poder innovar y mejorar de forma continua el SDK, Google podría recopilar ciertas estadísticas de uso del software, lo que incluye, entre otros, un identificador único, la dirección IP asociada, el número de versión del software e información sobre las herramientas o los servicios del SDK que se usan y el modo en que estos se usan. Antes de recopilar esta información, el SDK se lo notificará y le solicitará su permiso. Sin su permiso, no se recopilará la información.

6.2 Los datos recopilados se examinan en conjunto para mejorar el SDK y se mantienen de acuerdo con la Política de Privacidad de Google, que se encuentra en la siguiente URL: https://policies.google.com/privacy.

6.3 Es posible que se compartan conjuntos de datos anónimos y agregados con los socios de Google para mejorar el SDK.

<h3 class="hide-from-toc" data-text="7. Aplicaciones de terceros" id="7.-third-party-applications" tabindex="-1">7. Aplicaciones de terceros</h3>
7.1 Si usa el SDK para ejecutar aplicaciones desarrolladas por un tercero o que acceden a datos, contenido o recursos proporcionados por un tercero, usted acepta que Google no es responsable por dichas aplicaciones, datos, contenido o recursos. Usted comprende que los datos, el contenido o los recursos a los que podría acceder a través de esas aplicaciones de terceros son exclusiva responsabilidad de la persona que los origina, y que Google no se responsabiliza por las pérdidas o los daños que usted pudiera experimentar como resultado del uso de cualquiera de tales aplicaciones, datos, contenido o recursos de terceros, o del acceso a estos.

7.2 Usted debe saber que los datos, el contenido y los recursos que le presentan a través de esa aplicación de un tercero pueden estar protegidos por derechos de propiedad intelectual que les pertenecen a sus proveedores (o a otras personas o empresas en representación de estos). No puede modificar, alquilar, arrendar, prestar, vender, distribuir ni crear trabajos derivados basados en estos datos, contenido o recursos (en su totalidad o en parte), a menos que los propietarios le hayan otorgado permiso específicamente para hacerlo.

7.3 Usted reconoce que el uso de dichos datos, contenido, recursos o aplicaciones de terceros puede estar sujeto a condiciones separadas entre usted y el tercero correspondiente. En ese caso, el Contrato de Licencia no afecta su relación legal con estos terceros.


<h3 class="hide-from-toc" data-text="8. Uso de las API de Android" id="8.-using-android-apis" tabindex="-1">8. Uso de las API de Android</h3>
8.1 API de datos de Google

8.1.1 Si usted usa una API para recuperar datos de Google, usted reconoce que los datos pueden estar protegidos por derechos de propiedad intelectual que le pertenecen a Google o a las partes que proporcionan los datos (o a otras personas o empresas en su nombre). El uso que realice de cualquiera de esas API puede estar sujeto a Condiciones de Servicio adicionales. No puede modificar, alquilar, arrendar, prestar, vender ni distribuir estos datos, ni crear obras derivadas sobre la base de ellos (en su totalidad o en parte), a menos que las Condiciones del Servicio correspondientes lo permitan.

8.1.2 Si usa una API para recuperar datos de un usuario de Google, usted reconoce y acepta que solo recuperará datos con el consentimiento explícito del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya otorgado. Si usa la API de Android Recognition Service (que se encuentra en <a href="https://developer.android.com/reference/android/speech/RecognitionService?hl=es-419">https://developer.android.com/reference/android/speech/RecognitionService</a>) y sus actualizaciones periódicas, reconoce que el uso de la API está sujeto al Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos y que se encuentra en la siguiente URL: <a href="https://privacy.google.com/businesses/gdprprocessorterms/?hl=es-419">https://privacy.google.com/businesses/gdprprocessorterms/</a>, según se actualice de manera periódica. Si hace clic en "Aceptar", acepta los términos del Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos.



<h3 class="hide-from-toc" data-text="9. Rescisión de este Contrato de Licencia" id="9.-terminating-this-license-agreement" tabindex="-1">9. Rescisión de este Contrato de Licencia</h3>
9.1 El Contrato de Licencia continuará vigente hasta que lo rescinda usted o Google, tal como se indica a continuación.

9.2 Si desea resolver el Contrato de Licencia, puede hacerlo interrumpiendo el uso del SDK y de las credenciales de desarrollador pertinentes.

9.3 En los siguientes casos, Google podrá resolver el Contrato de Licencia en cualquier momento:
(A) Usted no cumplió con alguna disposición del Contrato de Licencia.
(B) La ley exige que Google lo haga.
(C) El socio con el que Google le ofreció algunas partes del SDK (como las API) resolvió su relación con Google o dejó de proporcionarle a usted determinadas partes del SDK.
(D) Google decide dejar de proporcionar el SDK o determinadas partes del SDK a usuarios del país en el que usted reside o desde el que usa el servicio; o el aprovisionamiento del SDK o determinados servicios del SDK que Google le brinda ya no son comercialmente viables, según Google.

9.4 Cuando el Contrato de Licencia finalice, no se verán afectados por este cese los derechos, las obligaciones ni las responsabilidades legales de los que usted y Google se hayan beneficiado, a los que hayan estado sujetos (o que se hayan acumulado con el paso del tiempo durante la vigencia del Contrato de Licencia) o cuya duración se extienda indefinidamente, y las disposiciones del párrafo 14.7 se continuarán aplicando a esos derechos, estas obligaciones y estas responsabilidades de forma indefinida.


<h3 class="hide-from-toc" data-text="10. RENUNCIA DE GARANTÍAS" id="10.-disclaimer-of-warranties" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_studio_win_bundle_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_studio_win_bundle_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <button class="button button-disabled">
            <span class="lang-float">Descargar Android Studio Hedgehog | 2023.1.1 Patch 1
                  para Windows
            </span>
          </button>
          <a class="button button-primary
               devsite-dialog-close gc-analytics-event"
               data-category="studio_win_bundle_download" data-action="download"
              
               href="https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.27/android-studio-2023.1.1.27-windows.zip"
               id="agree-button__studio_win_bundle_download"
            >Descargar Android Studio Hedgehog | 2023.1.1 Patch 1
             para
              Windows
            
          </a>
          
            <p><em>android-studio-2023.1.1.27-windows.zip</em></p>
          
        
      </div>
    </div>
  </div>
</div>
 <devsite-badge-awarder badge="https://developers.google.com/profile/badges/activity/android/install-android-studio" target="agree-button__studio_win_bundle_download" type="click"></devsite-badge-awarder>
    

<div id="studio_win_notools_exe_download"
    class="devsite-dialog dac-download-dialog">
  <div class="devsite-dialog-contents">
    <h2 class="hide-from-toc" id="descargar-dynamic_data.setvar.dialog_product_name" data-text="Descargar Android Studio Hedgehog | 2023.1.1 Patch 1" tabindex="-1">Descargar Android Studio Hedgehog | 2023.1.1 Patch 1</h2>
    <p>Antes de iniciar la descarga, debes aceptar los siguientes términos y condiciones.</p>
    <div class="dialog-content-stretch sdk-terms"><h2 class="hide-from-toc" id="términos-y-condiciones" data-text="Términos y Condiciones" tabindex="-1">Términos y Condiciones</h2>

    Este es el Acuerdo de Licencia del Kit para Desarrollo de Software de Android

<h3 class="hide-from-toc" data-text="1. Introducción" id="1.-introduction" tabindex="-1">1. Introducción</h3>
1.1 Se le otorga licencia para el Kit de Desarrollo de Software de Android (al que se hace referencia en el Contrato de Licencia como "SDK" y que incluye específicamente los archivos de sistema de Android, las API incorporadas y los complementos de las API de Google) sujeto a las condiciones del Contrato de Licencia. El Contrato de Licencia constituye un acuerdo legalmente vinculante entre usted y Google en relación con el uso que usted haga del SDK.

1.2 "Android" significa la pila de software de Android para dispositivos, tal como se ofrece en el proyecto de código abierto de Android, disponible en la siguiente URL: https://source.android.com/, y sus actualizaciones ocasionales.

1.3 Una "implementación compatible" hace referencia a cualquier dispositivo Android que (i) cumpla con el documento de Definición de Compatibilidad de Android, que está disponible en el sitio web de compatibilidad de Android (https://source.android.com/compatibility) y puede actualizarse de manera periódica; y que (ii) supere satisfactoriamente el Conjunto de Pruebas de Compatibilidad de Android (CTS).

1.4 "Google" se refiere a Google LLC, una corporación organizada según las leyes del estado de Delaware, EE.UU., que opera bajos las leyes de Estados Unidos y cuya ubicación principal se encuentra en 1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.


<h3 class="hide-from-toc" data-text="2. Aceptación de este Contrato de Licencia" id="2.-accepting-this-license-agreement" tabindex="-1">2. Aceptación de este Contrato de Licencia</h3>
2.1 Para usar el SDK, primero debe aceptar este Contrato de Licencia. Si no lo hace, no podrá usar el SDK.

2.2 Al hacer clic para aceptar o usar este SDK, acepta los términos del Contrato de Licencia.

2.3 Usted no podrá usar el SDK ni aceptar el Contrato de Licencia si tiene prohibido recibir el SDK conforme a las leyes de los Estados Unidos o de otros países, incluido el país en el que resida o desde el cual usará el SDK.

2.4 Si acepta quedar vinculado por este Contrato de Licencia en nombre de su empleador o de otra entidad, usted manifiesta y garantiza que posee la capacidad legal absoluta para vincular a su empleador o entidad correspondiente a este Contrato de Licencia. Si no posee la autoridad requerida, no podrá aceptar el Contrato de Licencia ni usar el SDK en representación de su empleador o de otra entidad.


<h3 class="hide-from-toc" data-text="3. Licencia del SDK de Google" id="3.-sdk-license-from-google" tabindex="-1">3. Licencia del SDK de Google</h3>
3.1 Sujeto a las condiciones del Contrato de Licencia, Google le otorga una licencia limitada, mundial, libre de derechos de autor, no asignable, no exclusiva y no susceptible de someterse a otras licencias para usar el SDK con el único fin de desarrollar aplicaciones para implementaciones compatibles de Android.

3.2 No podrá usar este SDK a fin de desarrollar aplicaciones para otras plataformas (incluidas las implementaciones no compatibles de Android) o para desarrollar otro SDK. Si lo desea, podrá desarrollar aplicaciones para otras plataformas, incluidas las implementaciones no compatibles de Android, siempre y cuando no lo haga con este SDK.

3.3 Usted acepta que Google o terceros poseen el derecho legal, la propiedad y el interés totales relacionados con el SDK, incluidos los Derechos de Propiedad Intelectual que este tenga. "Derechos de Propiedad Intelectual" hace referencia a todos los derechos otorgados por las leyes de patentes, las leyes de derechos de autor, las leyes de secreto comercial, las leyes de marca comercial y cualquier otro derecho de propiedad. Google se reserva todos los derechos que no se le otorguen a usted expresamente.

3.4 No podrá usar el SDK para ningún fin que no esté permitido expresamente en este Contrato de Licencia.  Salvo en la medida en que lo exijan las licencias aplicables de terceros, no podrá copiar (excepto con fines de copia de seguridad), modificar, adaptar, redistribuir, descompilar ni desmontar el SDK ni ninguna de sus partes. Tampoco podrá aplicar ingeniería inversa ni crear obras derivadas de este.

3.5 El uso, la reproducción y la distribución de componentes del SDK con licencia de software de código abierto se rigen exclusivamente por los términos de la licencia de ese software de código abierto y no por el Contrato de Licencia.

3.6 Usted acepta que la forma y la naturaleza del SDK que proporciona Google pueden cambiar sin previo aviso, y que sus futuras versiones pueden ser incompatibles con las aplicaciones desarrolladas en versiones anteriores. Acepta que Google, a su entera discreción y sin previo aviso, puede dejar de brindarles a usted o a los usuarios en general (de forma permanente o temporal) el SDK (o cualquiera de sus funciones).

3.7 Nada de lo expresado en el Contrato de Licencia le otorga el derecho de usar alguno de los nombres comerciales, marcas comerciales, marcas de servicio, logotipos, nombres de dominio ni otras características distintivas de marca de Google.

3.8 Usted acepta que no eliminará, disimulará ni alterará ninguno de los avisos de derechos de propiedad (incluidos avisos de marca comercial y derechos de autor) que pudieran anexarse o incluirse en el SDK.


<h3 class="hide-from-toc" data-text="4. Uso del SDK por su parte" id="4.-use-of-the-sdk-by-you" tabindex="-1">4. Uso del SDK por su parte</h3>
4.1 Google acepta que mediante el Contrato de Licencia no obtendrá ningún derecho, título ni interés de parte de usted (o sus proveedores de licencias) con respecto a cualquier aplicación de software que usted desarrolle usando el SDK, incluidos los derechos de propiedad intelectual que existan en esas aplicaciones.

4.2 Usted acepta usar el SDK y desarrollar las aplicaciones únicamente conforme a lo permitido por (a) el Contrato de Licencia y (b) las leyes, regulaciones o prácticas o pautas generalmente aceptadas aplicables en las jurisdicciones correspondientes (incluidas las leyes sobre la exportación de datos o software hacia y desde los Estados Unidos u otros países correspondientes).

4.3 Usted acepta que, si usa el SDK para desarrollar aplicaciones para usuarios del público en general, protegerá la privacidad y los derechos legales de esos usuarios. Si los usuarios le proporcionan sus nombres de usuario, contraseñas y otra información personal o de acceso, debe comunicarles que la información estará disponible para su aplicación, y debe proporcionar un aviso de privacidad con validez legal y protección para esos usuarios. Si en su aplicación se almacena información sensible o personal proporcionada por los usuarios, deberá hacerse de forma segura. Si el usuario le proporciona a su aplicación información de la Cuenta de Google, su aplicación solo podrá usarla para acceder a la Cuenta de Google del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya brindado.

4.4 Usted acepta que no participará en ninguna actividad con el SDK, incluido el desarrollo o la distribución de una aplicación, que interfiera, interrumpa, dañe o acceda sin autorización a los servidores, las redes u otras propiedades o servicios de un tercero, incluidos, sin limitaciones, Google o cualquier proveedor de comunicaciones móviles.

4.5 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) de los datos, el contenido o los recursos que cree, transmita o muestre a través de Android o aplicaciones para Android, y de las consecuencias de sus acciones (incluidos los daños o las pérdidas que Google pudiera sufrir) al hacerlo.

4.6 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) por incumplimientos de sus obligaciones conforme al Contrato de Licencia, contratos de terceros o Condiciones de Servicio aplicables, o bien leyes o normas aplicables, y por las consecuencias (incluidos los daños o las pérdidas que Google o cualquier tercero pudieran sufrir) debido a dicho incumplimiento.


<h3 class="hide-from-toc" data-text="5. Sus credenciales de desarrollador" id="5.-your-developer-credentials" tabindex="-1">5. Sus credenciales de desarrollador</h3>
5.1 Usted acepta que es responsable de mantener la confidencialidad de toda credencial de desarrollador que Google pudiera otorgarle o que pudiera escoger usted mismo, y que será el único responsable de todas las aplicaciones que se desarrollen con sus credenciales de desarrollador.


<h3 class="hide-from-toc" data-text="6. Información y privacidad" id="6.-privacy-and-information" tabindex="-1">6. Información y privacidad</h3>
6.1 A fin de poder innovar y mejorar de forma continua el SDK, Google podría recopilar ciertas estadísticas de uso del software, lo que incluye, entre otros, un identificador único, la dirección IP asociada, el número de versión del software e información sobre las herramientas o los servicios del SDK que se usan y el modo en que estos se usan. Antes de recopilar esta información, el SDK se lo notificará y le solicitará su permiso. Sin su permiso, no se recopilará la información.

6.2 Los datos recopilados se examinan en conjunto para mejorar el SDK y se mantienen de acuerdo con la Política de Privacidad de Google, que se encuentra en la siguiente URL: https://policies.google.com/privacy.

6.3 Es posible que se compartan conjuntos de datos anónimos y agregados con los socios de Google para mejorar el SDK.

<h3 class="hide-from-toc" data-text="7. Aplicaciones de terceros" id="7.-third-party-applications" tabindex="-1">7. Aplicaciones de terceros</h3>
7.1 Si usa el SDK para ejecutar aplicaciones desarrolladas por un tercero o que acceden a datos, contenido o recursos proporcionados por un tercero, usted acepta que Google no es responsable por dichas aplicaciones, datos, contenido o recursos. Usted comprende que los datos, el contenido o los recursos a los que podría acceder a través de esas aplicaciones de terceros son exclusiva responsabilidad de la persona que los origina, y que Google no se responsabiliza por las pérdidas o los daños que usted pudiera experimentar como resultado del uso de cualquiera de tales aplicaciones, datos, contenido o recursos de terceros, o del acceso a estos.

7.2 Usted debe saber que los datos, el contenido y los recursos que le presentan a través de esa aplicación de un tercero pueden estar protegidos por derechos de propiedad intelectual que les pertenecen a sus proveedores (o a otras personas o empresas en representación de estos). No puede modificar, alquilar, arrendar, prestar, vender, distribuir ni crear trabajos derivados basados en estos datos, contenido o recursos (en su totalidad o en parte), a menos que los propietarios le hayan otorgado permiso específicamente para hacerlo.

7.3 Usted reconoce que el uso de dichos datos, contenido, recursos o aplicaciones de terceros puede estar sujeto a condiciones separadas entre usted y el tercero correspondiente. En ese caso, el Contrato de Licencia no afecta su relación legal con estos terceros.


<h3 class="hide-from-toc" data-text="8. Uso de las API de Android" id="8.-using-android-apis" tabindex="-1">8. Uso de las API de Android</h3>
8.1 API de datos de Google

8.1.1 Si usted usa una API para recuperar datos de Google, usted reconoce que los datos pueden estar protegidos por derechos de propiedad intelectual que le pertenecen a Google o a las partes que proporcionan los datos (o a otras personas o empresas en su nombre). El uso que realice de cualquiera de esas API puede estar sujeto a Condiciones de Servicio adicionales. No puede modificar, alquilar, arrendar, prestar, vender ni distribuir estos datos, ni crear obras derivadas sobre la base de ellos (en su totalidad o en parte), a menos que las Condiciones del Servicio correspondientes lo permitan.

8.1.2 Si usa una API para recuperar datos de un usuario de Google, usted reconoce y acepta que solo recuperará datos con el consentimiento explícito del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya otorgado. Si usa la API de Android Recognition Service (que se encuentra en <a href="https://developer.android.com/reference/android/speech/RecognitionService?hl=es-419">https://developer.android.com/reference/android/speech/RecognitionService</a>) y sus actualizaciones periódicas, reconoce que el uso de la API está sujeto al Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos y que se encuentra en la siguiente URL: <a href="https://privacy.google.com/businesses/gdprprocessorterms/?hl=es-419">https://privacy.google.com/businesses/gdprprocessorterms/</a>, según se actualice de manera periódica. Si hace clic en "Aceptar", acepta los términos del Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos.



<h3 class="hide-from-toc" data-text="9. Rescisión de este Contrato de Licencia" id="9.-terminating-this-license-agreement" tabindex="-1">9. Rescisión de este Contrato de Licencia</h3>
9.1 El Contrato de Licencia continuará vigente hasta que lo rescinda usted o Google, tal como se indica a continuación.

9.2 Si desea resolver el Contrato de Licencia, puede hacerlo interrumpiendo el uso del SDK y de las credenciales de desarrollador pertinentes.

9.3 En los siguientes casos, Google podrá resolver el Contrato de Licencia en cualquier momento:
(A) Usted no cumplió con alguna disposición del Contrato de Licencia.
(B) La ley exige que Google lo haga.
(C) El socio con el que Google le ofreció algunas partes del SDK (como las API) resolvió su relación con Google o dejó de proporcionarle a usted determinadas partes del SDK.
(D) Google decide dejar de proporcionar el SDK o determinadas partes del SDK a usuarios del país en el que usted reside o desde el que usa el servicio; o el aprovisionamiento del SDK o determinados servicios del SDK que Google le brinda ya no son comercialmente viables, según Google.

9.4 Cuando el Contrato de Licencia finalice, no se verán afectados por este cese los derechos, las obligaciones ni las responsabilidades legales de los que usted y Google se hayan beneficiado, a los que hayan estado sujetos (o que se hayan acumulado con el paso del tiempo durante la vigencia del Contrato de Licencia) o cuya duración se extienda indefinidamente, y las disposiciones del párrafo 14.7 se continuarán aplicando a esos derechos, estas obligaciones y estas responsabilidades de forma indefinida.


<h3 class="hide-from-toc" data-text="10. RENUNCIA DE GARANTÍAS" id="10.-disclaimer-of-warranties" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_studio_win_notools_exe_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_studio_win_notools_exe_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <button class="button button-disabled">
            <span class="lang-float">Descargar Android Studio Hedgehog | 2023.1.1 Patch 1
                  para Windows
            </span>
          </button>
          <a class="button button-primary
               devsite-dialog-close gc-analytics-event"
               data-category="studio_win_notools_exe_download" data-action="download"
              
               href="https://redirector.gvt1.com/edgedl/android/studio/install/2023.1.1.27/android-studio-2023.1.1.27-windows.exe"
               id="agree-button__studio_win_notools_exe_download"
            >Descargar Android Studio Hedgehog | 2023.1.1 Patch 1
             para
              Windows
            
          </a>
          
            <p><em>android-studio-2023.1.1.27-windows.exe</em></p>
          
        
      </div>
    </div>
  </div>
</div>
 <devsite-badge-awarder badge="https://developers.google.com/profile/badges/activity/android/install-android-studio" target="agree-button__studio_win_notools_exe_download" type="click"></devsite-badge-awarder>
 
    

<div id="sdk_linux_download"
    class="devsite-dialog dac-download-dialog">
  <div class="devsite-dialog-contents">
    <h2 class="hide-from-toc" id="descargar-dynamic_data.setvar.dialog_product_name" data-text="Descargar Android Command Line Tools" tabindex="-1">Descargar Android Command Line Tools</h2>
    <p>Antes de iniciar la descarga, debes aceptar los siguientes términos y condiciones.</p>
    <div class="dialog-content-stretch sdk-terms"><h2 class="hide-from-toc" id="términos-y-condiciones" data-text="Términos y Condiciones" tabindex="-1">Términos y Condiciones</h2>

    Este es el Acuerdo de Licencia del Kit para Desarrollo de Software de Android

<h3 class="hide-from-toc" data-text="1. Introducción" id="1.-introduction" tabindex="-1">1. Introducción</h3>
1.1 Se le otorga licencia para el Kit de Desarrollo de Software de Android (al que se hace referencia en el Contrato de Licencia como "SDK" y que incluye específicamente los archivos de sistema de Android, las API incorporadas y los complementos de las API de Google) sujeto a las condiciones del Contrato de Licencia. El Contrato de Licencia constituye un acuerdo legalmente vinculante entre usted y Google en relación con el uso que usted haga del SDK.

1.2 "Android" significa la pila de software de Android para dispositivos, tal como se ofrece en el proyecto de código abierto de Android, disponible en la siguiente URL: https://source.android.com/, y sus actualizaciones ocasionales.

1.3 Una "implementación compatible" hace referencia a cualquier dispositivo Android que (i) cumpla con el documento de Definición de Compatibilidad de Android, que está disponible en el sitio web de compatibilidad de Android (https://source.android.com/compatibility) y puede actualizarse de manera periódica; y que (ii) supere satisfactoriamente el Conjunto de Pruebas de Compatibilidad de Android (CTS).

1.4 "Google" se refiere a Google LLC, una corporación organizada según las leyes del estado de Delaware, EE.UU., que opera bajos las leyes de Estados Unidos y cuya ubicación principal se encuentra en 1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.


<h3 class="hide-from-toc" data-text="2. Aceptación de este Contrato de Licencia" id="2.-accepting-this-license-agreement" tabindex="-1">2. Aceptación de este Contrato de Licencia</h3>
2.1 Para usar el SDK, primero debe aceptar este Contrato de Licencia. Si no lo hace, no podrá usar el SDK.

2.2 Al hacer clic para aceptar o usar este SDK, acepta los términos del Contrato de Licencia.

2.3 Usted no podrá usar el SDK ni aceptar el Contrato de Licencia si tiene prohibido recibir el SDK conforme a las leyes de los Estados Unidos o de otros países, incluido el país en el que resida o desde el cual usará el SDK.

2.4 Si acepta quedar vinculado por este Contrato de Licencia en nombre de su empleador o de otra entidad, usted manifiesta y garantiza que posee la capacidad legal absoluta para vincular a su empleador o entidad correspondiente a este Contrato de Licencia. Si no posee la autoridad requerida, no podrá aceptar el Contrato de Licencia ni usar el SDK en representación de su empleador o de otra entidad.


<h3 class="hide-from-toc" data-text="3. Licencia del SDK de Google" id="3.-sdk-license-from-google" tabindex="-1">3. Licencia del SDK de Google</h3>
3.1 Sujeto a las condiciones del Contrato de Licencia, Google le otorga una licencia limitada, mundial, libre de derechos de autor, no asignable, no exclusiva y no susceptible de someterse a otras licencias para usar el SDK con el único fin de desarrollar aplicaciones para implementaciones compatibles de Android.

3.2 No podrá usar este SDK a fin de desarrollar aplicaciones para otras plataformas (incluidas las implementaciones no compatibles de Android) o para desarrollar otro SDK. Si lo desea, podrá desarrollar aplicaciones para otras plataformas, incluidas las implementaciones no compatibles de Android, siempre y cuando no lo haga con este SDK.

3.3 Usted acepta que Google o terceros poseen el derecho legal, la propiedad y el interés totales relacionados con el SDK, incluidos los Derechos de Propiedad Intelectual que este tenga. "Derechos de Propiedad Intelectual" hace referencia a todos los derechos otorgados por las leyes de patentes, las leyes de derechos de autor, las leyes de secreto comercial, las leyes de marca comercial y cualquier otro derecho de propiedad. Google se reserva todos los derechos que no se le otorguen a usted expresamente.

3.4 No podrá usar el SDK para ningún fin que no esté permitido expresamente en este Contrato de Licencia.  Salvo en la medida en que lo exijan las licencias aplicables de terceros, no podrá copiar (excepto con fines de copia de seguridad), modificar, adaptar, redistribuir, descompilar ni desmontar el SDK ni ninguna de sus partes. Tampoco podrá aplicar ingeniería inversa ni crear obras derivadas de este.

3.5 El uso, la reproducción y la distribución de componentes del SDK con licencia de software de código abierto se rigen exclusivamente por los términos de la licencia de ese software de código abierto y no por el Contrato de Licencia.

3.6 Usted acepta que la forma y la naturaleza del SDK que proporciona Google pueden cambiar sin previo aviso, y que sus futuras versiones pueden ser incompatibles con las aplicaciones desarrolladas en versiones anteriores. Acepta que Google, a su entera discreción y sin previo aviso, puede dejar de brindarles a usted o a los usuarios en general (de forma permanente o temporal) el SDK (o cualquiera de sus funciones).

3.7 Nada de lo expresado en el Contrato de Licencia le otorga el derecho de usar alguno de los nombres comerciales, marcas comerciales, marcas de servicio, logotipos, nombres de dominio ni otras características distintivas de marca de Google.

3.8 Usted acepta que no eliminará, disimulará ni alterará ninguno de los avisos de derechos de propiedad (incluidos avisos de marca comercial y derechos de autor) que pudieran anexarse o incluirse en el SDK.


<h3 class="hide-from-toc" data-text="4. Uso del SDK por su parte" id="4.-use-of-the-sdk-by-you" tabindex="-1">4. Uso del SDK por su parte</h3>
4.1 Google acepta que mediante el Contrato de Licencia no obtendrá ningún derecho, título ni interés de parte de usted (o sus proveedores de licencias) con respecto a cualquier aplicación de software que usted desarrolle usando el SDK, incluidos los derechos de propiedad intelectual que existan en esas aplicaciones.

4.2 Usted acepta usar el SDK y desarrollar las aplicaciones únicamente conforme a lo permitido por (a) el Contrato de Licencia y (b) las leyes, regulaciones o prácticas o pautas generalmente aceptadas aplicables en las jurisdicciones correspondientes (incluidas las leyes sobre la exportación de datos o software hacia y desde los Estados Unidos u otros países correspondientes).

4.3 Usted acepta que, si usa el SDK para desarrollar aplicaciones para usuarios del público en general, protegerá la privacidad y los derechos legales de esos usuarios. Si los usuarios le proporcionan sus nombres de usuario, contraseñas y otra información personal o de acceso, debe comunicarles que la información estará disponible para su aplicación, y debe proporcionar un aviso de privacidad con validez legal y protección para esos usuarios. Si en su aplicación se almacena información sensible o personal proporcionada por los usuarios, deberá hacerse de forma segura. Si el usuario le proporciona a su aplicación información de la Cuenta de Google, su aplicación solo podrá usarla para acceder a la Cuenta de Google del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya brindado.

4.4 Usted acepta que no participará en ninguna actividad con el SDK, incluido el desarrollo o la distribución de una aplicación, que interfiera, interrumpa, dañe o acceda sin autorización a los servidores, las redes u otras propiedades o servicios de un tercero, incluidos, sin limitaciones, Google o cualquier proveedor de comunicaciones móviles.

4.5 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) de los datos, el contenido o los recursos que cree, transmita o muestre a través de Android o aplicaciones para Android, y de las consecuencias de sus acciones (incluidos los daños o las pérdidas que Google pudiera sufrir) al hacerlo.

4.6 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) por incumplimientos de sus obligaciones conforme al Contrato de Licencia, contratos de terceros o Condiciones de Servicio aplicables, o bien leyes o normas aplicables, y por las consecuencias (incluidos los daños o las pérdidas que Google o cualquier tercero pudieran sufrir) debido a dicho incumplimiento.


<h3 class="hide-from-toc" data-text="5. Sus credenciales de desarrollador" id="5.-your-developer-credentials" tabindex="-1">5. Sus credenciales de desarrollador</h3>
5.1 Usted acepta que es responsable de mantener la confidencialidad de toda credencial de desarrollador que Google pudiera otorgarle o que pudiera escoger usted mismo, y que será el único responsable de todas las aplicaciones que se desarrollen con sus credenciales de desarrollador.


<h3 class="hide-from-toc" data-text="6. Información y privacidad" id="6.-privacy-and-information" tabindex="-1">6. Información y privacidad</h3>
6.1 A fin de poder innovar y mejorar de forma continua el SDK, Google podría recopilar ciertas estadísticas de uso del software, lo que incluye, entre otros, un identificador único, la dirección IP asociada, el número de versión del software e información sobre las herramientas o los servicios del SDK que se usan y el modo en que estos se usan. Antes de recopilar esta información, el SDK se lo notificará y le solicitará su permiso. Sin su permiso, no se recopilará la información.

6.2 Los datos recopilados se examinan en conjunto para mejorar el SDK y se mantienen de acuerdo con la Política de Privacidad de Google, que se encuentra en la siguiente URL: https://policies.google.com/privacy.

6.3 Es posible que se compartan conjuntos de datos anónimos y agregados con los socios de Google para mejorar el SDK.

<h3 class="hide-from-toc" data-text="7. Aplicaciones de terceros" id="7.-third-party-applications" tabindex="-1">7. Aplicaciones de terceros</h3>
7.1 Si usa el SDK para ejecutar aplicaciones desarrolladas por un tercero o que acceden a datos, contenido o recursos proporcionados por un tercero, usted acepta que Google no es responsable por dichas aplicaciones, datos, contenido o recursos. Usted comprende que los datos, el contenido o los recursos a los que podría acceder a través de esas aplicaciones de terceros son exclusiva responsabilidad de la persona que los origina, y que Google no se responsabiliza por las pérdidas o los daños que usted pudiera experimentar como resultado del uso de cualquiera de tales aplicaciones, datos, contenido o recursos de terceros, o del acceso a estos.

7.2 Usted debe saber que los datos, el contenido y los recursos que le presentan a través de esa aplicación de un tercero pueden estar protegidos por derechos de propiedad intelectual que les pertenecen a sus proveedores (o a otras personas o empresas en representación de estos). No puede modificar, alquilar, arrendar, prestar, vender, distribuir ni crear trabajos derivados basados en estos datos, contenido o recursos (en su totalidad o en parte), a menos que los propietarios le hayan otorgado permiso específicamente para hacerlo.

7.3 Usted reconoce que el uso de dichos datos, contenido, recursos o aplicaciones de terceros puede estar sujeto a condiciones separadas entre usted y el tercero correspondiente. En ese caso, el Contrato de Licencia no afecta su relación legal con estos terceros.


<h3 class="hide-from-toc" data-text="8. Uso de las API de Android" id="8.-using-android-apis" tabindex="-1">8. Uso de las API de Android</h3>
8.1 API de datos de Google

8.1.1 Si usted usa una API para recuperar datos de Google, usted reconoce que los datos pueden estar protegidos por derechos de propiedad intelectual que le pertenecen a Google o a las partes que proporcionan los datos (o a otras personas o empresas en su nombre). El uso que realice de cualquiera de esas API puede estar sujeto a Condiciones de Servicio adicionales. No puede modificar, alquilar, arrendar, prestar, vender ni distribuir estos datos, ni crear obras derivadas sobre la base de ellos (en su totalidad o en parte), a menos que las Condiciones del Servicio correspondientes lo permitan.

8.1.2 Si usa una API para recuperar datos de un usuario de Google, usted reconoce y acepta que solo recuperará datos con el consentimiento explícito del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya otorgado. Si usa la API de Android Recognition Service (que se encuentra en <a href="https://developer.android.com/reference/android/speech/RecognitionService?hl=es-419">https://developer.android.com/reference/android/speech/RecognitionService</a>) y sus actualizaciones periódicas, reconoce que el uso de la API está sujeto al Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos y que se encuentra en la siguiente URL: <a href="https://privacy.google.com/businesses/gdprprocessorterms/?hl=es-419">https://privacy.google.com/businesses/gdprprocessorterms/</a>, según se actualice de manera periódica. Si hace clic en "Aceptar", acepta los términos del Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos.



<h3 class="hide-from-toc" data-text="9. Rescisión de este Contrato de Licencia" id="9.-terminating-this-license-agreement" tabindex="-1">9. Rescisión de este Contrato de Licencia</h3>
9.1 El Contrato de Licencia continuará vigente hasta que lo rescinda usted o Google, tal como se indica a continuación.

9.2 Si desea resolver el Contrato de Licencia, puede hacerlo interrumpiendo el uso del SDK y de las credenciales de desarrollador pertinentes.

9.3 En los siguientes casos, Google podrá resolver el Contrato de Licencia en cualquier momento:
(A) Usted no cumplió con alguna disposición del Contrato de Licencia.
(B) La ley exige que Google lo haga.
(C) El socio con el que Google le ofreció algunas partes del SDK (como las API) resolvió su relación con Google o dejó de proporcionarle a usted determinadas partes del SDK.
(D) Google decide dejar de proporcionar el SDK o determinadas partes del SDK a usuarios del país en el que usted reside o desde el que usa el servicio; o el aprovisionamiento del SDK o determinados servicios del SDK que Google le brinda ya no son comercialmente viables, según Google.

9.4 Cuando el Contrato de Licencia finalice, no se verán afectados por este cese los derechos, las obligaciones ni las responsabilidades legales de los que usted y Google se hayan beneficiado, a los que hayan estado sujetos (o que se hayan acumulado con el paso del tiempo durante la vigencia del Contrato de Licencia) o cuya duración se extienda indefinidamente, y las disposiciones del párrafo 14.7 se continuarán aplicando a esos derechos, estas obligaciones y estas responsabilidades de forma indefinida.


<h3 class="hide-from-toc" data-text="10. RENUNCIA DE GARANTÍAS" id="10.-disclaimer-of-warranties" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_sdk_linux_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_sdk_linux_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <button class="button button-disabled">
            <span class="lang-float">Descargar Android Command Line Tools
                  para Linux
            </span>
          </button>
          <a class="button button-primary
               devsite-dialog-close gc-analytics-event"
               data-category="sdk_linux_download" data-action="download"
              
               href="https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip?hl=es-419"
               id="agree-button__sdk_linux_download"
            >Descargar Android Command Line Tools
             para
              Linux
            
          </a>
          
            <p><em>commandlinetools-linux-11076708_latest.zip</em></p>
          
        
      </div>
    </div>
  </div>
</div>

    

<div id="sdk_mac_download"
    class="devsite-dialog dac-download-dialog">
  <div class="devsite-dialog-contents">
    <h2 class="hide-from-toc" id="descargar-dynamic_data.setvar.dialog_product_name" data-text="Descargar Android Command Line Tools" tabindex="-1">Descargar Android Command Line Tools</h2>
    <p>Antes de iniciar la descarga, debes aceptar los siguientes términos y condiciones.</p>
    <div class="dialog-content-stretch sdk-terms"><h2 class="hide-from-toc" id="términos-y-condiciones" data-text="Términos y Condiciones" tabindex="-1">Términos y Condiciones</h2>

    Este es el Acuerdo de Licencia del Kit para Desarrollo de Software de Android

<h3 class="hide-from-toc" data-text="1. Introducción" id="1.-introduction" tabindex="-1">1. Introducción</h3>
1.1 Se le otorga licencia para el Kit de Desarrollo de Software de Android (al que se hace referencia en el Contrato de Licencia como "SDK" y que incluye específicamente los archivos de sistema de Android, las API incorporadas y los complementos de las API de Google) sujeto a las condiciones del Contrato de Licencia. El Contrato de Licencia constituye un acuerdo legalmente vinculante entre usted y Google en relación con el uso que usted haga del SDK.

1.2 "Android" significa la pila de software de Android para dispositivos, tal como se ofrece en el proyecto de código abierto de Android, disponible en la siguiente URL: https://source.android.com/, y sus actualizaciones ocasionales.

1.3 Una "implementación compatible" hace referencia a cualquier dispositivo Android que (i) cumpla con el documento de Definición de Compatibilidad de Android, que está disponible en el sitio web de compatibilidad de Android (https://source.android.com/compatibility) y puede actualizarse de manera periódica; y que (ii) supere satisfactoriamente el Conjunto de Pruebas de Compatibilidad de Android (CTS).

1.4 "Google" se refiere a Google LLC, una corporación organizada según las leyes del estado de Delaware, EE.UU., que opera bajos las leyes de Estados Unidos y cuya ubicación principal se encuentra en 1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.


<h3 class="hide-from-toc" data-text="2. Aceptación de este Contrato de Licencia" id="2.-accepting-this-license-agreement" tabindex="-1">2. Aceptación de este Contrato de Licencia</h3>
2.1 Para usar el SDK, primero debe aceptar este Contrato de Licencia. Si no lo hace, no podrá usar el SDK.

2.2 Al hacer clic para aceptar o usar este SDK, acepta los términos del Contrato de Licencia.

2.3 Usted no podrá usar el SDK ni aceptar el Contrato de Licencia si tiene prohibido recibir el SDK conforme a las leyes de los Estados Unidos o de otros países, incluido el país en el que resida o desde el cual usará el SDK.

2.4 Si acepta quedar vinculado por este Contrato de Licencia en nombre de su empleador o de otra entidad, usted manifiesta y garantiza que posee la capacidad legal absoluta para vincular a su empleador o entidad correspondiente a este Contrato de Licencia. Si no posee la autoridad requerida, no podrá aceptar el Contrato de Licencia ni usar el SDK en representación de su empleador o de otra entidad.


<h3 class="hide-from-toc" data-text="3. Licencia del SDK de Google" id="3.-sdk-license-from-google" tabindex="-1">3. Licencia del SDK de Google</h3>
3.1 Sujeto a las condiciones del Contrato de Licencia, Google le otorga una licencia limitada, mundial, libre de derechos de autor, no asignable, no exclusiva y no susceptible de someterse a otras licencias para usar el SDK con el único fin de desarrollar aplicaciones para implementaciones compatibles de Android.

3.2 No podrá usar este SDK a fin de desarrollar aplicaciones para otras plataformas (incluidas las implementaciones no compatibles de Android) o para desarrollar otro SDK. Si lo desea, podrá desarrollar aplicaciones para otras plataformas, incluidas las implementaciones no compatibles de Android, siempre y cuando no lo haga con este SDK.

3.3 Usted acepta que Google o terceros poseen el derecho legal, la propiedad y el interés totales relacionados con el SDK, incluidos los Derechos de Propiedad Intelectual que este tenga. "Derechos de Propiedad Intelectual" hace referencia a todos los derechos otorgados por las leyes de patentes, las leyes de derechos de autor, las leyes de secreto comercial, las leyes de marca comercial y cualquier otro derecho de propiedad. Google se reserva todos los derechos que no se le otorguen a usted expresamente.

3.4 No podrá usar el SDK para ningún fin que no esté permitido expresamente en este Contrato de Licencia.  Salvo en la medida en que lo exijan las licencias aplicables de terceros, no podrá copiar (excepto con fines de copia de seguridad), modificar, adaptar, redistribuir, descompilar ni desmontar el SDK ni ninguna de sus partes. Tampoco podrá aplicar ingeniería inversa ni crear obras derivadas de este.

3.5 El uso, la reproducción y la distribución de componentes del SDK con licencia de software de código abierto se rigen exclusivamente por los términos de la licencia de ese software de código abierto y no por el Contrato de Licencia.

3.6 Usted acepta que la forma y la naturaleza del SDK que proporciona Google pueden cambiar sin previo aviso, y que sus futuras versiones pueden ser incompatibles con las aplicaciones desarrolladas en versiones anteriores. Acepta que Google, a su entera discreción y sin previo aviso, puede dejar de brindarles a usted o a los usuarios en general (de forma permanente o temporal) el SDK (o cualquiera de sus funciones).

3.7 Nada de lo expresado en el Contrato de Licencia le otorga el derecho de usar alguno de los nombres comerciales, marcas comerciales, marcas de servicio, logotipos, nombres de dominio ni otras características distintivas de marca de Google.

3.8 Usted acepta que no eliminará, disimulará ni alterará ninguno de los avisos de derechos de propiedad (incluidos avisos de marca comercial y derechos de autor) que pudieran anexarse o incluirse en el SDK.


<h3 class="hide-from-toc" data-text="4. Uso del SDK por su parte" id="4.-use-of-the-sdk-by-you" tabindex="-1">4. Uso del SDK por su parte</h3>
4.1 Google acepta que mediante el Contrato de Licencia no obtendrá ningún derecho, título ni interés de parte de usted (o sus proveedores de licencias) con respecto a cualquier aplicación de software que usted desarrolle usando el SDK, incluidos los derechos de propiedad intelectual que existan en esas aplicaciones.

4.2 Usted acepta usar el SDK y desarrollar las aplicaciones únicamente conforme a lo permitido por (a) el Contrato de Licencia y (b) las leyes, regulaciones o prácticas o pautas generalmente aceptadas aplicables en las jurisdicciones correspondientes (incluidas las leyes sobre la exportación de datos o software hacia y desde los Estados Unidos u otros países correspondientes).

4.3 Usted acepta que, si usa el SDK para desarrollar aplicaciones para usuarios del público en general, protegerá la privacidad y los derechos legales de esos usuarios. Si los usuarios le proporcionan sus nombres de usuario, contraseñas y otra información personal o de acceso, debe comunicarles que la información estará disponible para su aplicación, y debe proporcionar un aviso de privacidad con validez legal y protección para esos usuarios. Si en su aplicación se almacena información sensible o personal proporcionada por los usuarios, deberá hacerse de forma segura. Si el usuario le proporciona a su aplicación información de la Cuenta de Google, su aplicación solo podrá usarla para acceder a la Cuenta de Google del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya brindado.

4.4 Usted acepta que no participará en ninguna actividad con el SDK, incluido el desarrollo o la distribución de una aplicación, que interfiera, interrumpa, dañe o acceda sin autorización a los servidores, las redes u otras propiedades o servicios de un tercero, incluidos, sin limitaciones, Google o cualquier proveedor de comunicaciones móviles.

4.5 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) de los datos, el contenido o los recursos que cree, transmita o muestre a través de Android o aplicaciones para Android, y de las consecuencias de sus acciones (incluidos los daños o las pérdidas que Google pudiera sufrir) al hacerlo.

4.6 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) por incumplimientos de sus obligaciones conforme al Contrato de Licencia, contratos de terceros o Condiciones de Servicio aplicables, o bien leyes o normas aplicables, y por las consecuencias (incluidos los daños o las pérdidas que Google o cualquier tercero pudieran sufrir) debido a dicho incumplimiento.


<h3 class="hide-from-toc" data-text="5. Sus credenciales de desarrollador" id="5.-your-developer-credentials" tabindex="-1">5. Sus credenciales de desarrollador</h3>
5.1 Usted acepta que es responsable de mantener la confidencialidad de toda credencial de desarrollador que Google pudiera otorgarle o que pudiera escoger usted mismo, y que será el único responsable de todas las aplicaciones que se desarrollen con sus credenciales de desarrollador.


<h3 class="hide-from-toc" data-text="6. Información y privacidad" id="6.-privacy-and-information" tabindex="-1">6. Información y privacidad</h3>
6.1 A fin de poder innovar y mejorar de forma continua el SDK, Google podría recopilar ciertas estadísticas de uso del software, lo que incluye, entre otros, un identificador único, la dirección IP asociada, el número de versión del software e información sobre las herramientas o los servicios del SDK que se usan y el modo en que estos se usan. Antes de recopilar esta información, el SDK se lo notificará y le solicitará su permiso. Sin su permiso, no se recopilará la información.

6.2 Los datos recopilados se examinan en conjunto para mejorar el SDK y se mantienen de acuerdo con la Política de Privacidad de Google, que se encuentra en la siguiente URL: https://policies.google.com/privacy.

6.3 Es posible que se compartan conjuntos de datos anónimos y agregados con los socios de Google para mejorar el SDK.

<h3 class="hide-from-toc" data-text="7. Aplicaciones de terceros" id="7.-third-party-applications" tabindex="-1">7. Aplicaciones de terceros</h3>
7.1 Si usa el SDK para ejecutar aplicaciones desarrolladas por un tercero o que acceden a datos, contenido o recursos proporcionados por un tercero, usted acepta que Google no es responsable por dichas aplicaciones, datos, contenido o recursos. Usted comprende que los datos, el contenido o los recursos a los que podría acceder a través de esas aplicaciones de terceros son exclusiva responsabilidad de la persona que los origina, y que Google no se responsabiliza por las pérdidas o los daños que usted pudiera experimentar como resultado del uso de cualquiera de tales aplicaciones, datos, contenido o recursos de terceros, o del acceso a estos.

7.2 Usted debe saber que los datos, el contenido y los recursos que le presentan a través de esa aplicación de un tercero pueden estar protegidos por derechos de propiedad intelectual que les pertenecen a sus proveedores (o a otras personas o empresas en representación de estos). No puede modificar, alquilar, arrendar, prestar, vender, distribuir ni crear trabajos derivados basados en estos datos, contenido o recursos (en su totalidad o en parte), a menos que los propietarios le hayan otorgado permiso específicamente para hacerlo.

7.3 Usted reconoce que el uso de dichos datos, contenido, recursos o aplicaciones de terceros puede estar sujeto a condiciones separadas entre usted y el tercero correspondiente. En ese caso, el Contrato de Licencia no afecta su relación legal con estos terceros.


<h3 class="hide-from-toc" data-text="8. Uso de las API de Android" id="8.-using-android-apis" tabindex="-1">8. Uso de las API de Android</h3>
8.1 API de datos de Google

8.1.1 Si usted usa una API para recuperar datos de Google, usted reconoce que los datos pueden estar protegidos por derechos de propiedad intelectual que le pertenecen a Google o a las partes que proporcionan los datos (o a otras personas o empresas en su nombre). El uso que realice de cualquiera de esas API puede estar sujeto a Condiciones de Servicio adicionales. No puede modificar, alquilar, arrendar, prestar, vender ni distribuir estos datos, ni crear obras derivadas sobre la base de ellos (en su totalidad o en parte), a menos que las Condiciones del Servicio correspondientes lo permitan.

8.1.2 Si usa una API para recuperar datos de un usuario de Google, usted reconoce y acepta que solo recuperará datos con el consentimiento explícito del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya otorgado. Si usa la API de Android Recognition Service (que se encuentra en <a href="https://developer.android.com/reference/android/speech/RecognitionService?hl=es-419">https://developer.android.com/reference/android/speech/RecognitionService</a>) y sus actualizaciones periódicas, reconoce que el uso de la API está sujeto al Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos y que se encuentra en la siguiente URL: <a href="https://privacy.google.com/businesses/gdprprocessorterms/?hl=es-419">https://privacy.google.com/businesses/gdprprocessorterms/</a>, según se actualice de manera periódica. Si hace clic en "Aceptar", acepta los términos del Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos.



<h3 class="hide-from-toc" data-text="9. Rescisión de este Contrato de Licencia" id="9.-terminating-this-license-agreement" tabindex="-1">9. Rescisión de este Contrato de Licencia</h3>
9.1 El Contrato de Licencia continuará vigente hasta que lo rescinda usted o Google, tal como se indica a continuación.

9.2 Si desea resolver el Contrato de Licencia, puede hacerlo interrumpiendo el uso del SDK y de las credenciales de desarrollador pertinentes.

9.3 En los siguientes casos, Google podrá resolver el Contrato de Licencia en cualquier momento:
(A) Usted no cumplió con alguna disposición del Contrato de Licencia.
(B) La ley exige que Google lo haga.
(C) El socio con el que Google le ofreció algunas partes del SDK (como las API) resolvió su relación con Google o dejó de proporcionarle a usted determinadas partes del SDK.
(D) Google decide dejar de proporcionar el SDK o determinadas partes del SDK a usuarios del país en el que usted reside o desde el que usa el servicio; o el aprovisionamiento del SDK o determinados servicios del SDK que Google le brinda ya no son comercialmente viables, según Google.

9.4 Cuando el Contrato de Licencia finalice, no se verán afectados por este cese los derechos, las obligaciones ni las responsabilidades legales de los que usted y Google se hayan beneficiado, a los que hayan estado sujetos (o que se hayan acumulado con el paso del tiempo durante la vigencia del Contrato de Licencia) o cuya duración se extienda indefinidamente, y las disposiciones del párrafo 14.7 se continuarán aplicando a esos derechos, estas obligaciones y estas responsabilidades de forma indefinida.


<h3 class="hide-from-toc" data-text="10. RENUNCIA DE GARANTÍAS" id="10.-disclaimer-of-warranties" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_sdk_mac_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_sdk_mac_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <button class="button button-disabled">
            <span class="lang-float">Descargar Android Command Line Tools
                  para Mac
            </span>
          </button>
          <a class="button button-primary
               devsite-dialog-close gc-analytics-event"
               data-category="sdk_mac_download" data-action="download"
              
               href="https://dl.google.com/android/repository/commandlinetools-mac-11076708_latest.zip?hl=es-419"
               id="agree-button__sdk_mac_download"
            >Descargar Android Command Line Tools
             para
              Mac
            
          </a>
          
            <p><em>commandlinetools-mac-11076708_latest.zip</em></p>
          
        
      </div>
    </div>
  </div>
</div>

    

<div id="sdk_win_download"
    class="devsite-dialog dac-download-dialog">
  <div class="devsite-dialog-contents">
    <h2 class="hide-from-toc" id="descargar-dynamic_data.setvar.dialog_product_name" data-text="Descargar Android Command Line Tools" tabindex="-1">Descargar Android Command Line Tools</h2>
    <p>Antes de iniciar la descarga, debes aceptar los siguientes términos y condiciones.</p>
    <div class="dialog-content-stretch sdk-terms"><h2 class="hide-from-toc" id="términos-y-condiciones" data-text="Términos y Condiciones" tabindex="-1">Términos y Condiciones</h2>

    Este es el Acuerdo de Licencia del Kit para Desarrollo de Software de Android

<h3 class="hide-from-toc" data-text="1. Introducción" id="1.-introduction" tabindex="-1">1. Introducción</h3>
1.1 Se le otorga licencia para el Kit de Desarrollo de Software de Android (al que se hace referencia en el Contrato de Licencia como "SDK" y que incluye específicamente los archivos de sistema de Android, las API incorporadas y los complementos de las API de Google) sujeto a las condiciones del Contrato de Licencia. El Contrato de Licencia constituye un acuerdo legalmente vinculante entre usted y Google en relación con el uso que usted haga del SDK.

1.2 "Android" significa la pila de software de Android para dispositivos, tal como se ofrece en el proyecto de código abierto de Android, disponible en la siguiente URL: https://source.android.com/, y sus actualizaciones ocasionales.

1.3 Una "implementación compatible" hace referencia a cualquier dispositivo Android que (i) cumpla con el documento de Definición de Compatibilidad de Android, que está disponible en el sitio web de compatibilidad de Android (https://source.android.com/compatibility) y puede actualizarse de manera periódica; y que (ii) supere satisfactoriamente el Conjunto de Pruebas de Compatibilidad de Android (CTS).

1.4 "Google" se refiere a Google LLC, una corporación organizada según las leyes del estado de Delaware, EE.UU., que opera bajos las leyes de Estados Unidos y cuya ubicación principal se encuentra en 1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.


<h3 class="hide-from-toc" data-text="2. Aceptación de este Contrato de Licencia" id="2.-accepting-this-license-agreement" tabindex="-1">2. Aceptación de este Contrato de Licencia</h3>
2.1 Para usar el SDK, primero debe aceptar este Contrato de Licencia. Si no lo hace, no podrá usar el SDK.

2.2 Al hacer clic para aceptar o usar este SDK, acepta los términos del Contrato de Licencia.

2.3 Usted no podrá usar el SDK ni aceptar el Contrato de Licencia si tiene prohibido recibir el SDK conforme a las leyes de los Estados Unidos o de otros países, incluido el país en el que resida o desde el cual usará el SDK.

2.4 Si acepta quedar vinculado por este Contrato de Licencia en nombre de su empleador o de otra entidad, usted manifiesta y garantiza que posee la capacidad legal absoluta para vincular a su empleador o entidad correspondiente a este Contrato de Licencia. Si no posee la autoridad requerida, no podrá aceptar el Contrato de Licencia ni usar el SDK en representación de su empleador o de otra entidad.


<h3 class="hide-from-toc" data-text="3. Licencia del SDK de Google" id="3.-sdk-license-from-google" tabindex="-1">3. Licencia del SDK de Google</h3>
3.1 Sujeto a las condiciones del Contrato de Licencia, Google le otorga una licencia limitada, mundial, libre de derechos de autor, no asignable, no exclusiva y no susceptible de someterse a otras licencias para usar el SDK con el único fin de desarrollar aplicaciones para implementaciones compatibles de Android.

3.2 No podrá usar este SDK a fin de desarrollar aplicaciones para otras plataformas (incluidas las implementaciones no compatibles de Android) o para desarrollar otro SDK. Si lo desea, podrá desarrollar aplicaciones para otras plataformas, incluidas las implementaciones no compatibles de Android, siempre y cuando no lo haga con este SDK.

3.3 Usted acepta que Google o terceros poseen el derecho legal, la propiedad y el interés totales relacionados con el SDK, incluidos los Derechos de Propiedad Intelectual que este tenga. "Derechos de Propiedad Intelectual" hace referencia a todos los derechos otorgados por las leyes de patentes, las leyes de derechos de autor, las leyes de secreto comercial, las leyes de marca comercial y cualquier otro derecho de propiedad. Google se reserva todos los derechos que no se le otorguen a usted expresamente.

3.4 No podrá usar el SDK para ningún fin que no esté permitido expresamente en este Contrato de Licencia.  Salvo en la medida en que lo exijan las licencias aplicables de terceros, no podrá copiar (excepto con fines de copia de seguridad), modificar, adaptar, redistribuir, descompilar ni desmontar el SDK ni ninguna de sus partes. Tampoco podrá aplicar ingeniería inversa ni crear obras derivadas de este.

3.5 El uso, la reproducción y la distribución de componentes del SDK con licencia de software de código abierto se rigen exclusivamente por los términos de la licencia de ese software de código abierto y no por el Contrato de Licencia.

3.6 Usted acepta que la forma y la naturaleza del SDK que proporciona Google pueden cambiar sin previo aviso, y que sus futuras versiones pueden ser incompatibles con las aplicaciones desarrolladas en versiones anteriores. Acepta que Google, a su entera discreción y sin previo aviso, puede dejar de brindarles a usted o a los usuarios en general (de forma permanente o temporal) el SDK (o cualquiera de sus funciones).

3.7 Nada de lo expresado en el Contrato de Licencia le otorga el derecho de usar alguno de los nombres comerciales, marcas comerciales, marcas de servicio, logotipos, nombres de dominio ni otras características distintivas de marca de Google.

3.8 Usted acepta que no eliminará, disimulará ni alterará ninguno de los avisos de derechos de propiedad (incluidos avisos de marca comercial y derechos de autor) que pudieran anexarse o incluirse en el SDK.


<h3 class="hide-from-toc" data-text="4. Uso del SDK por su parte" id="4.-use-of-the-sdk-by-you" tabindex="-1">4. Uso del SDK por su parte</h3>
4.1 Google acepta que mediante el Contrato de Licencia no obtendrá ningún derecho, título ni interés de parte de usted (o sus proveedores de licencias) con respecto a cualquier aplicación de software que usted desarrolle usando el SDK, incluidos los derechos de propiedad intelectual que existan en esas aplicaciones.

4.2 Usted acepta usar el SDK y desarrollar las aplicaciones únicamente conforme a lo permitido por (a) el Contrato de Licencia y (b) las leyes, regulaciones o prácticas o pautas generalmente aceptadas aplicables en las jurisdicciones correspondientes (incluidas las leyes sobre la exportación de datos o software hacia y desde los Estados Unidos u otros países correspondientes).

4.3 Usted acepta que, si usa el SDK para desarrollar aplicaciones para usuarios del público en general, protegerá la privacidad y los derechos legales de esos usuarios. Si los usuarios le proporcionan sus nombres de usuario, contraseñas y otra información personal o de acceso, debe comunicarles que la información estará disponible para su aplicación, y debe proporcionar un aviso de privacidad con validez legal y protección para esos usuarios. Si en su aplicación se almacena información sensible o personal proporcionada por los usuarios, deberá hacerse de forma segura. Si el usuario le proporciona a su aplicación información de la Cuenta de Google, su aplicación solo podrá usarla para acceder a la Cuenta de Google del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya brindado.

4.4 Usted acepta que no participará en ninguna actividad con el SDK, incluido el desarrollo o la distribución de una aplicación, que interfiera, interrumpa, dañe o acceda sin autorización a los servidores, las redes u otras propiedades o servicios de un tercero, incluidos, sin limitaciones, Google o cualquier proveedor de comunicaciones móviles.

4.5 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) de los datos, el contenido o los recursos que cree, transmita o muestre a través de Android o aplicaciones para Android, y de las consecuencias de sus acciones (incluidos los daños o las pérdidas que Google pudiera sufrir) al hacerlo.

4.6 Usted acepta que es el único responsable (y que Google no asume responsabilidades con respecto a usted ni a terceros) por incumplimientos de sus obligaciones conforme al Contrato de Licencia, contratos de terceros o Condiciones de Servicio aplicables, o bien leyes o normas aplicables, y por las consecuencias (incluidos los daños o las pérdidas que Google o cualquier tercero pudieran sufrir) debido a dicho incumplimiento.


<h3 class="hide-from-toc" data-text="5. Sus credenciales de desarrollador" id="5.-your-developer-credentials" tabindex="-1">5. Sus credenciales de desarrollador</h3>
5.1 Usted acepta que es responsable de mantener la confidencialidad de toda credencial de desarrollador que Google pudiera otorgarle o que pudiera escoger usted mismo, y que será el único responsable de todas las aplicaciones que se desarrollen con sus credenciales de desarrollador.


<h3 class="hide-from-toc" data-text="6. Información y privacidad" id="6.-privacy-and-information" tabindex="-1">6. Información y privacidad</h3>
6.1 A fin de poder innovar y mejorar de forma continua el SDK, Google podría recopilar ciertas estadísticas de uso del software, lo que incluye, entre otros, un identificador único, la dirección IP asociada, el número de versión del software e información sobre las herramientas o los servicios del SDK que se usan y el modo en que estos se usan. Antes de recopilar esta información, el SDK se lo notificará y le solicitará su permiso. Sin su permiso, no se recopilará la información.

6.2 Los datos recopilados se examinan en conjunto para mejorar el SDK y se mantienen de acuerdo con la Política de Privacidad de Google, que se encuentra en la siguiente URL: https://policies.google.com/privacy.

6.3 Es posible que se compartan conjuntos de datos anónimos y agregados con los socios de Google para mejorar el SDK.

<h3 class="hide-from-toc" data-text="7. Aplicaciones de terceros" id="7.-third-party-applications" tabindex="-1">7. Aplicaciones de terceros</h3>
7.1 Si usa el SDK para ejecutar aplicaciones desarrolladas por un tercero o que acceden a datos, contenido o recursos proporcionados por un tercero, usted acepta que Google no es responsable por dichas aplicaciones, datos, contenido o recursos. Usted comprende que los datos, el contenido o los recursos a los que podría acceder a través de esas aplicaciones de terceros son exclusiva responsabilidad de la persona que los origina, y que Google no se responsabiliza por las pérdidas o los daños que usted pudiera experimentar como resultado del uso de cualquiera de tales aplicaciones, datos, contenido o recursos de terceros, o del acceso a estos.

7.2 Usted debe saber que los datos, el contenido y los recursos que le presentan a través de esa aplicación de un tercero pueden estar protegidos por derechos de propiedad intelectual que les pertenecen a sus proveedores (o a otras personas o empresas en representación de estos). No puede modificar, alquilar, arrendar, prestar, vender, distribuir ni crear trabajos derivados basados en estos datos, contenido o recursos (en su totalidad o en parte), a menos que los propietarios le hayan otorgado permiso específicamente para hacerlo.

7.3 Usted reconoce que el uso de dichos datos, contenido, recursos o aplicaciones de terceros puede estar sujeto a condiciones separadas entre usted y el tercero correspondiente. En ese caso, el Contrato de Licencia no afecta su relación legal con estos terceros.


<h3 class="hide-from-toc" data-text="8. Uso de las API de Android" id="8.-using-android-apis" tabindex="-1">8. Uso de las API de Android</h3>
8.1 API de datos de Google

8.1.1 Si usted usa una API para recuperar datos de Google, usted reconoce que los datos pueden estar protegidos por derechos de propiedad intelectual que le pertenecen a Google o a las partes que proporcionan los datos (o a otras personas o empresas en su nombre). El uso que realice de cualquiera de esas API puede estar sujeto a Condiciones de Servicio adicionales. No puede modificar, alquilar, arrendar, prestar, vender ni distribuir estos datos, ni crear obras derivadas sobre la base de ellos (en su totalidad o en parte), a menos que las Condiciones del Servicio correspondientes lo permitan.

8.1.2 Si usa una API para recuperar datos de un usuario de Google, usted reconoce y acepta que solo recuperará datos con el consentimiento explícito del usuario únicamente cuando este le haya otorgado permiso y con los propósitos para los cuales se lo haya otorgado. Si usa la API de Android Recognition Service (que se encuentra en <a href="https://developer.android.com/reference/android/speech/RecognitionService?hl=es-419">https://developer.android.com/reference/android/speech/RecognitionService</a>) y sus actualizaciones periódicas, reconoce que el uso de la API está sujeto al Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos y que se encuentra en la siguiente URL: <a href="https://privacy.google.com/businesses/gdprprocessorterms/?hl=es-419">https://privacy.google.com/businesses/gdprprocessorterms/</a>, según se actualice de manera periódica. Si hace clic en "Aceptar", acepta los términos del Anexo de Procesamiento de Datos para Productos en el que Google es un Procesador de Datos.



<h3 class="hide-from-toc" data-text="9. Rescisión de este Contrato de Licencia" id="9.-terminating-this-license-agreement" tabindex="-1">9. Rescisión de este Contrato de Licencia</h3>
9.1 El Contrato de Licencia continuará vigente hasta que lo rescinda usted o Google, tal como se indica a continuación.

9.2 Si desea resolver el Contrato de Licencia, puede hacerlo interrumpiendo el uso del SDK y de las credenciales de desarrollador pertinentes.

9.3 En los siguientes casos, Google podrá resolver el Contrato de Licencia en cualquier momento:
(A) Usted no cumplió con alguna disposición del Contrato de Licencia.
(B) La ley exige que Google lo haga.
(C) El socio con el que Google le ofreció algunas partes del SDK (como las API) resolvió su relación con Google o dejó de proporcionarle a usted determinadas partes del SDK.
(D) Google decide dejar de proporcionar el SDK o determinadas partes del SDK a usuarios del país en el que usted reside o desde el que usa el servicio; o el aprovisionamiento del SDK o determinados servicios del SDK que Google le brinda ya no son comercialmente viables, según Google.

9.4 Cuando el Contrato de Licencia finalice, no se verán afectados por este cese los derechos, las obligaciones ni las responsabilidades legales de los que usted y Google se hayan beneficiado, a los que hayan estado sujetos (o que se hayan acumulado con el paso del tiempo durante la vigencia del Contrato de Licencia) o cuya duración se extienda indefinidamente, y las disposiciones del párrafo 14.7 se continuarán aplicando a esos derechos, estas obligaciones y estas responsabilidades de forma indefinida.


<h3 class="hide-from-toc" data-text="10. RENUNCIA DE GARANTÍAS" id="10.-disclaimer-of-warranties" tabindex="-1">10. RENUNCIA DE GARANTÍAS</h3>
10.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE UTILIZA EL SDK BAJO SU PROPIO RIESGO Y QUE EL SDK SE PROPORCIONA "TAL CUAL" Y "SEGÚN ESTÉ DISPONIBLE" SIN GARANTÍA DE NINGÚN TIPO DE GOOGLE.

10.2 EL USO QUE USTED REALICE DEL SDK Y DE TODO MATERIAL DESCARGADO U OBTENIDO DE OTRA MANERA MEDIANTE EL USO DEL SDK ES A SU ENTERO RIESGO Y DISCRECIÓN, Y USTED ES EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUDIERA SUFRIR SU SISTEMA INFORMÁTICO U OTRO DISPOSITIVO, O POR LA PÉRDIDA DE DATOS COMO CONSECUENCIA DE TAL USO.

10.3 GOOGLE TAMBIÉN DENIEGA EXPRESAMENTE TODAS LAS GARANTÍAS Y CONDICIONES DE CUALQUIER TIPO, EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO VIOLACIÓN.


<h3 class="hide-from-toc" data-text="11. LIMITACIÓN DE RESPONSABILIDADES" id="11.-limitation-of-liability" tabindex="-1">11. LIMITACIÓN DE RESPONSABILIDADES</h3>
11.1 USTED COMPRENDE Y ACEPTA EXPRESAMENTE QUE GOOGLE, SUS SUBSIDIARIAS Y AFILIADAS, Y SUS PROVEEDORES DE LICENCIAS NO SE RESPONSABILIZARÁN ANTE USTED BAJO NINGUNA TEORÍA DE RESPONSABILIDAD POR DAÑOS DIRECTOS, INDIRECTOS, IMPREVISTOS, ESPECIALES, DERIVADOS O EJEMPLARES EN LOS QUE PUEDA INCURRIR, INCLUIDA CUALQUIER PÉRDIDA DE DATOS, INDEPENDIENTEMENTE DE QUE SE HAYA ADVERTIDO O NO A GOOGLE O A SUS REPRESENTANTES DE LA POSIBILIDAD DE QUE SE PRODUZCAN DICHAS PÉRDIDAS.


<h3 class="hide-from-toc" data-text="12. Indemnización" id="12.-indemnification" tabindex="-1">12. Indemnización</h3>
12.1 Hasta el grado máximo que permita la ley, usted acepta defender, indemnizar y eximir de responsabilidad a Google, sus afiliados y sus respectivos directores, funcionarios, empleados y agentes de cualquier reclamo, acción, juicio o proceso judicial, así como también de toda pérdida, responsabilidad, daño, costo y gasto (incluidos honorarios legales razonables) que surjan o se acumulen a partir (a) de su uso del SDK, (b) de cualquier aplicación que usted desarrolle en el SDK que constituya una infracción de cualquier derecho de autor, marca comercial, secreto comercial, imagen comercial, patente u otro derecho de propiedad intelectual de cualquier persona, o la difamación a cualquier persona o la infracción de sus derechos de publicidad o privacidad, y (c) de cualquier incumplimiento de su parte con respecto al Acuerdo de licencia.


<h3 class="hide-from-toc" data-text="13. Cambios en el Contrato de Licencia" id="13.-changes-to-the-license-agreement" tabindex="-1">13. Cambios en el Contrato de Licencia</h3>
13.1 Google puede realizar cambios al contrato de licencia a medida que distribuye nuevas versiones del SDK. Cuando se realicen estos cambios, Google emitirá una nueva versión del contrato de licencia, que estará disponible en el sitio web donde se comercialice el SDK.


<h3 class="hide-from-toc" data-text="14. Condiciones legales generales" id="14.-general-legal-terms" tabindex="-1">14. Condiciones legales generales</h3>
14.1 El Contrato de Licencia representa en su totalidad el contrato legal entre usted y Google, regula el uso que haga del SDK (se excluye cualquier servicio que Google pueda proporcionarle conforme a un contrato por escrito independiente) y reemplaza por completo cualquier contrato anterior entre usted y Google en relación con el SDK.

14.2 Usted acepta que, si Google no ejerce ni impone un derecho o solución legal especificado en el Contrato de Licencia (o del que Google sea beneficiario conforme a cualquier ley aplicable), esto no se considerará como una renuncia a los derechos de Google y se entenderá que Google seguirá siendo beneficiario de esos derechos o soluciones legales.

14.3 Si un tribunal que tenga jurisdicción para decidir sobre este asunto dictamina que alguna disposición de este Contrato de Licencia no es válida, se quitará esa disposición sin afectar al resto del Contrato de Licencia. Las disposiciones restantes del Contrato de Licencia continuarán siendo válidas y aplicables.

14.4 Reconoce y acepta que cada uno de los miembros del grupo de empresas de las que Google es la casa matriz serán beneficiarios terceros del Contrato de Licencia y que esas otras empresas tendrán derecho a imponer directamente cualquier disposición del Contrato de Licencia que les confiera un beneficio (o que tengan derechos a su favor) y que podrán ampararse en ella. Además de lo mencionado, nadie más ni ninguna empresa serán beneficiarios terceros del Contrato de Licencia.

14.5 RESTRICCIONES SOBRE LA EXPORTACIÓN. EL SDK ESTÁ SUJETO A LAS LEYES Y NORMATIVAS DE EXPORTACIÓN DE ESTADOS UNIDOS. USTED DEBE CUMPLIR CON TODAS LAS LEYES Y NORMATIVAS INTERNACIONALES Y NACIONALES DE EXPORTACIÓN QUE SE APLICAN AL SDK. ESTAS LEYES INCLUYEN RESTRICCIONES SOBRE LOS DESTINOS, LOS USUARIOS FINALES Y LA FINALIDAD.

14.6 Ni usted ni Google podrán asignar ni transferir los derechos que se otorgan en el Contrato de Licencia sin la aprobación previa por escrito de la otra parte. Ni usted ni Google podrán delegar sus responsabilidades u obligaciones del Contrato de Licencia sin la aprobación previa por escrito de la otra parte.

14.7 El Contrato de Licencia y la relación con Google que surge del Contrato de Licencia se regirán por las leyes del estado de California, independientemente de su conflicto con las disposiciones legales. Usted y Google aceptan someterse a la jurisdicción exclusiva de los tribunales ubicados en el condado de Santa Clara, California, para que resuelvan todo problema legal que surja de este Contrato de Licencia o esté relacionado con él. No obstante, usted acepta que Google aún podrá solicitar recursos judiciales (o una clase equivalente de compensación legal urgente) en cualquier jurisdicción.


<em>27 de julio de 2021</em>
  

    </div>
    <div>
      <input id="agree_sdk_win_download" class="agreebox" type="checkbox" name="agree" value="1" />
      <label id="agreeLabel" for="agree_sdk_win_download">He leído y acepto los términos y condiciones anteriores</label>
      <div class="buttons">
        
          <button class="button button-disabled">
            <span class="lang-float">Descargar Android Command Line Tools
                  para Windows
            </span>
          </button>
          <a class="button button-primary
               devsite-dialog-close gc-analytics-event"
               data-category="sdk_win_download" data-action="download"
              
               href="https://dl.google.com/android/repository/commandlinetools-win-11076708_latest.zip?hl=es-419"
               id="agree-button__sdk_win_download"
            >Descargar Android Command Line Tools
             para
              Windows
            
          </a>
          
            <p><em>commandlinetools-win-11076708_latest.zip</em></p>
          
        
      </div>
    </div>
  </div>
</div>


  
  

</div>
        
        </div>
      

    
    </div>
  </section>

  

  
    <devsite-hats-survey class="nocontent"
      hats-id="onAFgYxTD0kxBYCLVTd0Z41p75CM"
      listnr-id="5207477"></devsite-hats-survey>
  
</div>

  

  

  
  
</article>



<devsite-notification
>
</devsite-notification>


  
<div class="devsite-content-data">
  <template class="devsite-thumb-rating-down-categories">
  [{
      "type": "thumb-down",
      "id": "missingTheInformationINeed",
      "label":"Falta la información que necesito"
    },{
      "type": "thumb-down",
      "id": "tooComplicatedTooManySteps",
      "label":"Muy complicado o demasiados pasos"
    },{
      "type": "thumb-down",
      "id": "outOfDate",
      "label":"Desactualizado"
    },{
      "type": "thumb-down",
      "id": "translationIssue",
      "label":"Problema de traducción"
    },{
      "type": "thumb-down",
      "id": "samplesCodeIssue",
      "label":"Problema con las muestras o los códigos"
    },{
      "type": "thumb-down",
      "id": "otherDown",
      "label":"Otro"
    }]
  </template>
  <template class="devsite-thumb-rating-up-categories">
  [{
      "type": "thumb-up",
      "id": "easyToUnderstand",
      "label":"Fácil de comprender"
    },{
      "type": "thumb-up",
      "id": "solvedMyProblem",
      "label":"Resolvió mi problema"
    },{
      "type": "thumb-up",
      "id": "otherUp",
      "label":"Otro"
    }]
  </template>
  
</div>
            
          </devsite-content>
        </main>
        <devsite-footer-promos class="devsite-footer">
          
            

<nav class="devsite-footer-promos nocontent" aria-label="Promociones">
  <ul class="devsite-footer-promos-list">
    
    <li class="devsite-footer-promo">
      <a href="//x.com/AndroidDev"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         data-label="Footer X Promo"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="https://developer.android.com/_static/android/images/logo-x.svg?hl=es-419"
                 loading="lazy"
                 alt="X">
          
        
        X
      </a>
      <div class="devsite-footer-promo-description">Sigue a @AndroidDev en X</div>
    </li>
    
    <li class="devsite-footer-promo">
      <a href="//www.youtube.com/user/androiddevelopers?hl=es-419"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         data-label="Footer YouTube Promo"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="//www.gstatic.com/images/icons/material/product/2x/youtube_48dp.png"
                 loading="lazy"
                 alt="YouTube">
          
        
        YouTube
      </a>
      <div class="devsite-footer-promo-description">Busca Android Developers en YouTube</div>
    </li>
    
    <li class="devsite-footer-promo">
      <a href="//www.linkedin.com/showcase/androiddev"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         data-label="Footer LinkedIn Promo"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="https://developer.android.com/_static/android/images/logo-linkedin.svg?hl=es-419"
                 loading="lazy"
                 alt="LinkedIn">
          
        
        LinkedIn
      </a>
      <div class="devsite-footer-promo-description">Conectarse con la comunidad de desarrolladores de Android en LinkedIn</div>
    </li>
    
  </ul>
</nav>

          
        </devsite-footer-promos>
        <devsite-footer-linkboxes class="devsite-footer">
          
            
<nav class="devsite-footer-linkboxes nocontent" aria-label="Vínculos a pie de página">
  
  <ul class="devsite-footer-linkboxes-list">
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Más Android</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//www.android.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Android
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//www.android.com/enterprise/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Android para empresas
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//www.android.com/security-center/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Seguridad
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//source.android.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Código abierto
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/news"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
          
            Noticias
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//android-developers.googleblog.com/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 6)"
            >
            
          
            Blog
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/podcasts"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 7)"
            >
            
              
              
            
          
            Podcasts
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Descubre</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/games"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Videojuegos
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/ml"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Aprendizaje automático
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/privacy"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Privacidad
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/training/connectivity/5g"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
              
              
            
          
            5G
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Dispositivos Android</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/large-screens"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Pantallas grandes
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/wear"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Wear OS
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/chrome-os"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Dispositivos ChromeOS
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/cars"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Android para vehículos
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/things"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
          
            Android Things
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/tv"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 6)"
            >
            
              
              
            
          
            Android TV
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Versiones</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/13"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Android 13
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/12"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Android 12
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/11"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Android 11
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/10"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Android 10
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/pie"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
          
            Pie
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/oreo"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 6)"
            >
            
          
            Oreo
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/about/versions/nougat"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 7)"
            >
            
              
              
            
          
            Nougat
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Documentación y descargas</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/studio/intro"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Guía de Android Studio
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/guide"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Guías para desarrolladores
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/reference"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Referencia de API
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/studio"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Descargar Studio
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/ndk"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
              
              
            
          
            NDK de Android
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Asistencia</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//issuetracker.google.com/issues/new?component=190923&amp;template=841312"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Informar sobre un error en la plataforma
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//issuetracker.google.com/issues/new?component=192697"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Informar sobre un error en la documentación
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//support.google.com/googleplay/android-developer"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Google Play support
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://g.co/userresearch/androiddeveloperfooter"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
              
              
            
          
            Participar en los estudios de investigación
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
  </ul>
  
</nav>
          
        </devsite-footer-linkboxes>
        <devsite-footer-utility class="devsite-footer">
          
            

<div class="devsite-footer-utility nocontent">
  
  
  <nav class="devsite-footer-sites" aria-label="Otros sitios web de Google Developers">
    <a href="https://developers.google.com/?hl=es-419"
       class="devsite-footer-sites-logo-link gc-analytics-event"
       data-category="Site-Wide Custom Events"
       data-label="Footer Google Developers Link">
      <picture>
        <source srcset="https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android/images/lockup-google-for-developers-dark-theme.svg"
                media="(prefers-color-scheme: none)"
                class="devsite-dark-theme"
                loading="lazy"
                alt="Google Developers">
        <img class="devsite-footer-sites-logo"
             src="https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android/images/lockup-google-for-developers.svg"
             loading="lazy"
             alt="Google Developers">
      </picture>
    </a>
    <ul class="devsite-footer-sites-list">
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.android.com?hl=es-419"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Android Link"
         
         >
          Android
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.chrome.com/home?hl=es-419"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Chrome Link"
         
         >
          Chrome
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//firebase.google.com?hl=es-419"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Firebase Link"
         
         >
          Firebase
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//cloud.google.com?hl=es-419"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Google Cloud Platform Link"
         
         >
          Google Cloud Platform
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//developers.google.com/products/?hl=es-419"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer All products Link"
         
         >
          Todos los productos
        </a>
      </li>
      
    </ul>
  </nav>
  

  
  <nav class="devsite-footer-utility-links" aria-label="Vínculos de utilidad">
    
    <ul class="devsite-footer-utility-list">
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//policies.google.com/privacy?hl=es-419"
           data-category="Site-Wide Custom Events"
           data-label="Footer Privacy link"
         >
          Privacidad
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="https://developer.android.com/license?hl=es-419"
           data-category="Site-Wide Custom Events"
           data-label="Footer License link"
         >
          Licencia
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="https://developer.android.com/distribute/marketing-tools/brand-guidelines?hl=es-419"
           data-category="Site-Wide Custom Events"
           data-label="Footer Brand guidelines link"
         >
          Lineamientos de marca
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 devsite-footer-utility-button">
        
        <span class="devsite-footer-utility-description">Recibe noticias y sugerencias por correo electrónico</span>
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="https://developer.android.com/updates?hl=es-419"
           data-category="Site-Wide Custom Events"
           data-label="Footer Subscribe link"
         >
          Suscribirse
        </a>
        
      </li>
      
    </ul>
    
    
<devsite-language-selector>
  <ul role="presentation">
    
    
    <li role="presentation">
      <a role="menuitem" lang="en"
        >English</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es_419"
        >Español – América Latina</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="id"
        >Indonesia</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="it"
        >Italiano</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pt_br"
        >Português – Brasil</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="tr"
        >Türkçe</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ar"
        >العربيّة</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_cn"
        >中文 – 简体</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_tw"
        >中文 – 繁體</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ja"
        >日本語</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ko"
        >한국어</a>
    </li>
    
  </ul>
</devsite-language-selector>

  </nav>
</div>
          
        </devsite-footer-utility>
        <devsite-panel></devsite-panel>
        
      </section></section>
    <devsite-sitemask></devsite-sitemask>
    <devsite-snackbar
    
        type="cookie-notification"
        data-cookie-notice="2"
    
    >
</devsite-snackbar>
    <devsite-tooltip ></devsite-tooltip>
    <devsite-heading-link></devsite-heading-link>
    <devsite-analytics analytics-iframe>
      
        <script type="application/json" analytics>[{&#34;dimensions&#34;: {&#34;dimension5&#34;: &#34;es-419&#34;, &#34;dimension6&#34;: &#34;es-419&#34;, &#34;dimension1&#34;: &#34;Signed out&#34;, &#34;dimension4&#34;: &#34;Android\u00a0Studio&#34;, &#34;dimension3&#34;: false, &#34;dimension11&#34;: true}, &#34;gaid&#34;: &#34;UA-5831155-1&#34;, &#34;metrics&#34;: {&#34;ratings_count&#34;: &#34;metric2&#34;, &#34;ratings_value&#34;: &#34;metric1&#34;}, &#34;purpose&#34;: 0}]</script>
<script type="application/json" tag-management>{&#34;ga4&#34;: [], &#34;ga4p&#34;: [], &#34;gtm&#34;: [&#34;GTM-KMSWPCJ&#34;], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;True&#34;, &#34;requested&#34;: &#34;es-419&#34;, &#34;served&#34;: &#34;es-419&#34;}, &#34;pageType&#34;: &#34;article&#34;, &#34;projectName&#34;: &#34;Android\u00a0Studio&#34;, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;android&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}}</script>
      
    </devsite-analytics>
    
      <devsite-badger></devsite-badger>
    
    
<android-fully-clickable
    target="
        .android-case-study .devsite-landing-row-item,
        .android-grouped-resources .devsite-landing-row-item,
        .android-grouped-resources-primary .devsite-landing-row-item,
        .android-grouped-resources-secondary .devsite-landing-row-item,
        .android-illustrated-resources-index .devsite-landing-row-item,
        .android-illustrated-resources-primary .devsite-landing-row-item,
        .android-illustrated-resources-secondary .devsite-landing-row-item,
        .android-illustrated-resources-secondary-small .devsite-landing-row-item,
        .android-illustrated-resources-tertiary .devsite-landing-row-item,
        .android-illustrated-resources-tertiary-small .devsite-landing-row-item,
        .android-promo .devsite-landing-row-item,
        .android-quick-link,
        .android-samples .devsite-card-wrapper,
        .fully-clickable"
    watch=".android-samples, devsite-content"></android-fully-clickable>
    <script nonce="lAu9AYpjU7XEyvWZNj2HbSDk6nR1pg">
  
  (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
    t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
    E.parentNode.insertBefore(t,E);})(window, document, 'script',
    'https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android/js/app_loader.js', '[3,"es_419",null,"/js/devsite_app_module.js","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android","https://android-dot-devsite-v2-prod.appspot.com",1,null,["/_pwa/android/manifest.json","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android/images/rebrand/favicon.svg","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/android/images/rebrand/lockup.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500,600,700|Google+Sans+Text:400,400italic,500,500italic,600,600italic,700,700italic|Roboto+Mono:400,500,700&display=swap"],1,null,[1,6,8,12,14,17,21,25,40,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,111,112,113,115,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,144,147,148,149,150,151,152,154,155,156,157,158,159,161,163,164,165,168,169,170,172,173,179,180,182,183,186,190,191,193,196],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","developer.android.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ_7QMeLCRY20bh_SXdAYqy70KY",null,null,null,["Search__enable_suggestions_from_borg","BookNav__enable_tenant_cache_key","BookNav__enable_collapsible_book_nav","Cloud__enable_free_trial_server_call","Profiles__enable_profile_collections","Profiles__enable_profile_communities","MiscFeatureFlags__developers_footer_image","ContentExcellence__enable_googler_button","Profiles__enable_public_developer_profiles","MiscFeatureFlags__enable_keyword_inheritance","Search__enable_faceted_search","ContentExcellence__enable_verified_date","Significatio__enable_experiment_id_caching","Cloud__enable_cloudx_ping","Cloud__enable_cloud_facet_chat","Cloud__enable_cloud_shell","OpenInReplit__enable_replit","Profiles__enable_release_notes_notifications","Significatio__enable_by_tenant","Profiles__enable_page_saving","Search__enable_page_map","Localization__enable_locale_redirects","Profiles__enable_profile_notifications_ui","MiscFeatureFlags__enable_firebase_utm","Cloud__enable_cloud_dlp_service","Profiles__enable_awarding_url","MiscFeatureFlags__enable_explain_this_code","MiscFeatureFlags__developers_footer_dark_image","Rebranding__enable_rebranding","Cloud__enable_cloudx_experiment_ids","Profiles__require_profile_eligibility_for_signin","Badges__enable_hide_badges","Cloud__enable_cloud_shell_fte_user_flow","MiscFeatureFlags__content_publisher_push_queue","Profiles__enable_inferred_interests","Profiles__enable_developer_profiles_callout","Profiles__enable_developer_profiles_dashboard_recommendations","BookNav__enable_book_nav_filtering","MiscFeatureFlags__enable_project_variables","Concierge__enable_pushui","Experiments__reqs_query_experiments","AuthorPageInsights__enable_author_page_insights","Search__enable_dynamic_content_confidential_banner","SignIn__enable_auto_signin_oauth","Badges__enable_drag_and_drop_badges"],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT_kCVE","https://developerscontentserving-pa.googleapis.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.googleapis.com",2,2]')
  
</script>
    <devsite-a11y-announce></devsite-a11y-announce>
  </body>
</html>