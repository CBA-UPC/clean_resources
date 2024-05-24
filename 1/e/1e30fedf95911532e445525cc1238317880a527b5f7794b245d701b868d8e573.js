var SplunkSessionRecorder=function(){"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function __rest$1(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;var _globalThis="object"===("undefined"==typeof globalThis?"undefined":_typeof(globalThis))?globalThis:"object"===("undefined"==typeof self?"undefined":_typeof(self))?self:"object"===("undefined"==typeof window?"undefined":_typeof(window))?window:"object"===("undefined"==typeof global?"undefined":_typeof(global))?global:{},VERSION$1="1.6.0",re=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;function _makeCompatibilityCheck(e){var t=new Set([e]),r=new Set,n=e.match(re);if(!n)return function(){return!1};var o=+n[1],i=+n[2],a=+n[3];if(null!=n[4])return function(t){return t===e};function s(e){return r.add(e),!1}function u(e){return t.add(e),!0}return function(e){if(t.has(e))return!0;if(r.has(e))return!1;var n=e.match(re);if(!n)return s(e);var l=+n[1],c=+n[2],f=+n[3];return null!=n[4]||o!==l?s(e):0===o?i===c&&a<=f?u(e):s(e):i<=c?u(e):s(e)}}var isCompatible=_makeCompatibilityCheck(VERSION$1),major=VERSION$1.split(".")[0],GLOBAL_OPENTELEMETRY_API_KEY=Symbol.for("opentelemetry.js.api."+major),_global=_globalThis;function registerGlobal(e,t,r,n){var o;void 0===n&&(n=!1);var i=_global[GLOBAL_OPENTELEMETRY_API_KEY]=null!==(o=_global[GLOBAL_OPENTELEMETRY_API_KEY])&&void 0!==o?o:{version:VERSION$1};if(!n&&i[e]){var a=new Error("@opentelemetry/api: Attempted duplicate registration of API: "+e);return r.error(a.stack||a.message),!1}if(i.version!==VERSION$1){a=new Error("@opentelemetry/api: Registration of version v"+i.version+" for "+e+" does not match previously registered API v"+VERSION$1);return r.error(a.stack||a.message),!1}return i[e]=t,r.debug("@opentelemetry/api: Registered a global for "+e+" v"+VERSION$1+"."),!0}function getGlobal(e){var t,r,n=null===(t=_global[GLOBAL_OPENTELEMETRY_API_KEY])||void 0===t?void 0:t.version;if(n&&isCompatible(n))return null===(r=_global[GLOBAL_OPENTELEMETRY_API_KEY])||void 0===r?void 0:r[e]}function unregisterGlobal(e,t){t.debug("@opentelemetry/api: Unregistering a global for "+e+" v"+VERSION$1+".");var r=_global[GLOBAL_OPENTELEMETRY_API_KEY];r&&delete r[e]}var __read$4=window&&window.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},__spreadArray$4=window&&window.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},DiagComponentLogger=function(){function e(e){this._namespace=e.namespace||"DiagComponentLogger"}return e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return logProxy("debug",this._namespace,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return logProxy("error",this._namespace,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return logProxy("info",this._namespace,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return logProxy("warn",this._namespace,e)},e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return logProxy("verbose",this._namespace,e)},e}(),DiagLogLevel;function logProxy(e,t,r){var n=getGlobal("diag");if(n)return r.unshift(t),n[e].apply(n,__spreadArray$4([],__read$4(r),!1))}function createLogLevelDiagLogger(e,t){function r(r,n){var o=t[r];return"function"==typeof o&&e>=n?o.bind(t):function(){}}return e<DiagLogLevel.NONE?e=DiagLogLevel.NONE:e>DiagLogLevel.ALL&&(e=DiagLogLevel.ALL),t=t||{},{error:r("error",DiagLogLevel.ERROR),warn:r("warn",DiagLogLevel.WARN),info:r("info",DiagLogLevel.INFO),debug:r("debug",DiagLogLevel.DEBUG),verbose:r("verbose",DiagLogLevel.VERBOSE)}}!function(e){e[e.NONE=0]="NONE",e[e.ERROR=30]="ERROR",e[e.WARN=50]="WARN",e[e.INFO=60]="INFO",e[e.DEBUG=70]="DEBUG",e[e.VERBOSE=80]="VERBOSE",e[e.ALL=9999]="ALL"}(DiagLogLevel||(DiagLogLevel={}));var __read$3=window&&window.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},__spreadArray$3=window&&window.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},API_NAME$2="diag",DiagAPI=function(){function e(){function e(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=getGlobal("diag");if(n)return n[e].apply(n,__spreadArray$3([],__read$3(t),!1))}}var t=this;t.setLogger=function(e,r){var n,o,i;if(void 0===r&&(r={logLevel:DiagLogLevel.INFO}),e===t){var a=new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return t.error(null!==(n=a.stack)&&void 0!==n?n:a.message),!1}"number"==typeof r&&(r={logLevel:r});var s=getGlobal("diag"),u=createLogLevelDiagLogger(null!==(o=r.logLevel)&&void 0!==o?o:DiagLogLevel.INFO,e);if(s&&!r.suppressOverrideMessage){var l=null!==(i=(new Error).stack)&&void 0!==i?i:"<failed to generate stacktrace>";s.warn("Current logger will be overwritten from "+l),u.warn("Current logger will overwrite one already registered from "+l)}return registerGlobal("diag",u,t,!0)},t.disable=function(){unregisterGlobal(API_NAME$2,t)},t.createComponentLogger=function(e){return new DiagComponentLogger(e)},t.verbose=e("verbose"),t.debug=e("debug"),t.info=e("info"),t.warn=e("warn"),t.error=e("error")}return e.instance=function(){return this._instance||(this._instance=new e),this._instance},e}();function createContextKey(e){return Symbol.for(e)}var BaseContext=function e(t){var r=this;r._currentContext=t?new Map(t):new Map,r.getValue=function(e){return r._currentContext.get(e)},r.setValue=function(t,n){var o=new e(r._currentContext);return o._currentContext.set(t,n),o},r.deleteValue=function(t){var n=new e(r._currentContext);return n._currentContext.delete(t),n}},ROOT_CONTEXT=new BaseContext,__read$2=window&&window.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},__spreadArray$2=window&&window.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},NoopContextManager=function(){function e(){}return e.prototype.active=function(){return ROOT_CONTEXT},e.prototype.with=function(e,t,r){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];return t.call.apply(t,__spreadArray$2([r],__read$2(n),!1))},e.prototype.bind=function(e,t){return t},e.prototype.enable=function(){return this},e.prototype.disable=function(){return this},e}(),__read$1=window&&window.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},__spreadArray$1=window&&window.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},API_NAME$1="context",NOOP_CONTEXT_MANAGER=new NoopContextManager,ContextAPI=function(){function e(){}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalContextManager=function(e){return registerGlobal(API_NAME$1,e,DiagAPI.instance())},e.prototype.active=function(){return this._getContextManager().active()},e.prototype.with=function(e,t,r){for(var n,o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];return(n=this._getContextManager()).with.apply(n,__spreadArray$1([e,t,r],__read$1(o),!1))},e.prototype.bind=function(e,t){return this._getContextManager().bind(e,t)},e.prototype._getContextManager=function(){return getGlobal(API_NAME$1)||NOOP_CONTEXT_MANAGER},e.prototype.disable=function(){this._getContextManager().disable(),unregisterGlobal(API_NAME$1,DiagAPI.instance())},e}(),TraceFlags;!function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(TraceFlags||(TraceFlags={}));var INVALID_SPANID="0000000000000000",INVALID_TRACEID="00000000000000000000000000000000",INVALID_SPAN_CONTEXT={traceId:INVALID_TRACEID,spanId:INVALID_SPANID,traceFlags:TraceFlags.NONE},NonRecordingSpan=function(){function e(e){void 0===e&&(e=INVALID_SPAN_CONTEXT),this._spanContext=e}return e.prototype.spanContext=function(){return this._spanContext},e.prototype.setAttribute=function(e,t){return this},e.prototype.setAttributes=function(e){return this},e.prototype.addEvent=function(e,t){return this},e.prototype.setStatus=function(e){return this},e.prototype.updateName=function(e){return this},e.prototype.end=function(e){},e.prototype.isRecording=function(){return!1},e.prototype.recordException=function(e,t){},e}(),SPAN_KEY=createContextKey("OpenTelemetry Context Key SPAN");function getSpan(e){return e.getValue(SPAN_KEY)||void 0}function getActiveSpan(){return getSpan(ContextAPI.getInstance().active())}function setSpan(e,t){return e.setValue(SPAN_KEY,t)}function deleteSpan(e){return e.deleteValue(SPAN_KEY)}function setSpanContext(e,t){return setSpan(e,new NonRecordingSpan(t))}function getSpanContext(e){var t;return null===(t=getSpan(e))||void 0===t?void 0:t.spanContext()}var VALID_TRACEID_REGEX=/^([0-9a-f]{32})$/i,VALID_SPANID_REGEX=/^[0-9a-f]{16}$/i;function isValidTraceId(e){return VALID_TRACEID_REGEX.test(e)&&e!==INVALID_TRACEID}function isValidSpanId(e){return VALID_SPANID_REGEX.test(e)&&e!==INVALID_SPANID}function isSpanContextValid(e){return isValidTraceId(e.traceId)&&isValidSpanId(e.spanId)}function wrapSpanContext(e){return new NonRecordingSpan(e)}var contextApi=ContextAPI.getInstance(),NoopTracer=function(){function e(){}return e.prototype.startSpan=function(e,t,r){if(void 0===r&&(r=contextApi.active()),Boolean(null==t?void 0:t.root))return new NonRecordingSpan;var n=r&&getSpanContext(r);return isSpanContext(n)&&isSpanContextValid(n)?new NonRecordingSpan(n):new NonRecordingSpan},e.prototype.startActiveSpan=function(e,t,r,n){var o,i,a;if(!(arguments.length<2)){2===arguments.length?a=t:3===arguments.length?(o=t,a=r):(o=t,i=r,a=n);var s=null!=i?i:contextApi.active(),u=this.startSpan(e,o,s),l=setSpan(s,u);return contextApi.with(l,a,void 0,u)}},e}();function isSpanContext(e){return"object"===_typeof(e)&&"string"==typeof e.spanId&&"string"==typeof e.traceId&&"number"==typeof e.traceFlags}var NOOP_TRACER=new NoopTracer,ProxyTracer=function(){function e(e,t,r,n){this._provider=e,this.name=t,this.version=r,this.options=n}return e.prototype.startSpan=function(e,t,r){return this._getTracer().startSpan(e,t,r)},e.prototype.startActiveSpan=function(e,t,r,n){var o=this._getTracer();return Reflect.apply(o.startActiveSpan,o,arguments)},e.prototype._getTracer=function(){if(this._delegate)return this._delegate;var e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):NOOP_TRACER},e}(),NoopTracerProvider=function(){function e(){}return e.prototype.getTracer=function(e,t,r){return new NoopTracer},e}(),NOOP_TRACER_PROVIDER=new NoopTracerProvider,ProxyTracerProvider=function(){function e(){}return e.prototype.getTracer=function(e,t,r){var n;return null!==(n=this.getDelegateTracer(e,t,r))&&void 0!==n?n:new ProxyTracer(this,e,t,r)},e.prototype.getDelegate=function(){var e;return null!==(e=this._delegate)&&void 0!==e?e:NOOP_TRACER_PROVIDER},e.prototype.setDelegate=function(e){this._delegate=e},e.prototype.getDelegateTracer=function(e,t,r){var n;return null===(n=this._delegate)||void 0===n?void 0:n.getTracer(e,t,r)},e}(),context=ContextAPI.getInstance(),API_NAME="trace",TraceAPI=function(){function e(){this._proxyTracerProvider=new ProxyTracerProvider,this.wrapSpanContext=wrapSpanContext,this.isSpanContextValid=isSpanContextValid,this.deleteSpan=deleteSpan,this.getSpan=getSpan,this.getActiveSpan=getActiveSpan,this.getSpanContext=getSpanContext,this.setSpan=setSpan,this.setSpanContext=setSpanContext}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalTracerProvider=function(e){var t=registerGlobal(API_NAME,this._proxyTracerProvider,DiagAPI.instance());return t&&this._proxyTracerProvider.setDelegate(e),t},e.prototype.getTracerProvider=function(){return getGlobal(API_NAME)||this._proxyTracerProvider},e.prototype.getTracer=function(e,t){return this.getTracerProvider().getTracer(e,t)},e.prototype.disable=function(){unregisterGlobal(API_NAME,DiagAPI.instance()),this._proxyTracerProvider=new ProxyTracerProvider},e}(),trace=TraceAPI.getInstance(),_assign=function(){return _assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_assign.apply(this,arguments)},NodeType;function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function __spreadArray(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function isElement(e){return e.nodeType===e.ELEMENT_NODE}function isShadowRoot(e){var t,r=null===(t=e)||void 0===t?void 0:t.host;return Boolean(r&&r.shadowRoot&&r.shadowRoot===e)}function maskInputValue(e){var t=e.maskInputOptions,r=e.tagName,n=e.type,o=e.value,i=e.maskInputFn,a=o||"";return(t[r.toLowerCase()]||t[n])&&(a=i?i(a):"*".repeat(a.length)),a}!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(NodeType||(NodeType={}));var ORIGINAL_ATTRIBUTE_NAME="__rrweb_original__";function is2DCanvasBlank(e){var t=e.getContext("2d");if(!t)return!0;for(var r=0;r<e.width;r+=50)for(var n=0;n<e.height;n+=50){var o=t.getImageData,i=ORIGINAL_ATTRIBUTE_NAME in o?o[ORIGINAL_ATTRIBUTE_NAME]:o;if(new Uint32Array(i.call(t,r,n,Math.min(50,e.width-r),Math.min(50,e.height-n)).data.buffer).some((function(e){return 0!==e})))return!1}return!0}var _id=1,tagNameRegex=new RegExp("[^a-z0-9-_:]"),IGNORED_NODE=-2,canvasService,canvasCtx;function genId(){return _id++}function getValidTagName(e){if(e instanceof HTMLFormElement)return"form";var t=e.tagName.toLowerCase().trim();return tagNameRegex.test(t)?"div":t}function getCssRulesString(e){try{var t=e.rules||e.cssRules;return t?Array.from(t).map(getCssRuleString).join(""):null}catch(e){return null}}function getCssRuleString(e){var t=e.cssText;if(isCSSImportRule(e))try{t=getCssRulesString(e.styleSheet)||t}catch(e){}return t}function isCSSImportRule(e){return"styleSheet"in e}function stringifyStyleSheet(e){return e.cssRules?Array.from(e.cssRules).map((function(e){return e.cssText||""})).join(""):""}function extractOrigin(e){return(e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0]).split("?")[0]}var URL_IN_CSS_REF=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,RELATIVE_PATH=/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,DATA_URI=/^(data:)([^,]*),(.*)/i;function absoluteToStylesheet(e,t){return(e||"").replace(URL_IN_CSS_REF,(function(e,r,n,o,i,a){var s=n||i||a,u=r||o||"";if(!s)return e;if(!RELATIVE_PATH.test(s))return"url("+u+s+u+")";if(DATA_URI.test(s))return"url("+u+s+u+")";if("/"===s[0])return"url("+u+(extractOrigin(t)+s)+u+")";var l=t.split("/"),c=s.split("/");l.pop();for(var f=0,p=c;f<p.length;f++){var d=p[f];"."!==d&&(".."===d?l.pop():l.push(d))}return"url("+u+l.join("/")+u+")"}))}var SRCSET_NOT_SPACES=/^[^ \t\n\r\u000c]+/,SRCSET_COMMAS_OR_SPACES=/^[, \t\n\r\u000c]+/,EventType,IncrementalSource,MouseInteractions,CanvasContext,MediaInteractions,ReplayerEvents;function getAbsoluteSrcsetString(e,t){if(""===t.trim())return t;var r=0;function n(e){var n,o=e.exec(t.substring(r));return o?(n=o[0],r+=n.length,n):""}for(var o=[];n(SRCSET_COMMAS_OR_SPACES),!(r>=t.length);){var i=n(SRCSET_NOT_SPACES);if(","===i.slice(-1))i=absoluteToDoc(e,i.substring(0,i.length-1)),o.push(i);else{var a="";i=absoluteToDoc(e,i);for(var s=!1;;){var u=t.charAt(r);if(""===u){o.push((i+a).trim());break}if(s)")"===u&&(s=!1);else{if(","===u){r+=1,o.push((i+a).trim());break}"("===u&&(s=!0)}a+=u,r+=1}}}return o.join(", ")}function absoluteToDoc(e,t){if(!t||""===t.trim())return t;var r=e.createElement("a");return r.href=t,r.href}function isSVGElement(e){return Boolean("svg"===e.tagName||e.ownerSVGElement)}function getHref(){var e=document.createElement("a");return e.href="",e.href}function transformAttribute(e,t,r,n){return"src"===r||"href"===r&&n||"xlink:href"===r&&n&&"#"!==n[0]?absoluteToDoc(e,n):"background"!==r||!n||"table"!==t&&"td"!==t&&"th"!==t?"srcset"===r&&n?getAbsoluteSrcsetString(e,n):"style"===r&&n?absoluteToStylesheet(n,getHref()):"object"===t&&"data"===r&&n?absoluteToDoc(e,n):n:absoluteToDoc(e,n)}function _isBlockedElement(e,t,r){if("string"==typeof t){if(e.classList.contains(t))return!0}else for(var n=0;n<e.classList.length;n++){var o=e.classList[n];if(t.test(o))return!0}return!!r&&e.matches(r)}function needMaskingText(e,t,r){if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){if("string"==typeof t){if(e.classList.contains(t))return!0}else for(var n=0;n<e.classList.length;n++){var o=e.classList[n];if(t.test(o))return!0}return!(!r||!e.matches(r))||needMaskingText(e.parentNode,t,r)}return e.nodeType,e.TEXT_NODE,needMaskingText(e.parentNode,t,r)}function onceIframeLoaded(e,t,r){var n=e.contentWindow;if(n){var o,i=!1;try{o=n.document.readyState}catch(e){return}if("complete"===o){var a="about:blank";n.location.href===a&&e.src!==a&&""!==e.src?e.addEventListener("load",t):setTimeout(t,0)}else{var s=setTimeout((function(){i||(t(),i=!0)}),r);e.addEventListener("load",(function(){clearTimeout(s),i=!0,t()}))}}}function serializeNode(e,t){var r,n,o=t.doc,i=t.blockClass,a=t.blockSelector,s=t.maskTextClass,u=t.maskTextSelector,l=t.inlineStylesheet,c=t.maskInputOptions,f=void 0===c?{}:c,p=t.maskTextFn,d=t.maskInputFn,h=t.dataURLOptions,v=void 0===h?{}:h,y=t.inlineImages,m=t.recordCanvas,g=t.keepIframeSrcFn;if(o.__sn){var b=o.__sn.id;n=1===b?void 0:b}switch(e.nodeType){case e.DOCUMENT_NODE:return"CSS1Compat"!==e.compatMode?{type:NodeType.Document,childNodes:[],compatMode:e.compatMode,rootId:n}:{type:NodeType.Document,childNodes:[],rootId:n};case e.DOCUMENT_TYPE_NODE:return{type:NodeType.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:n};case e.ELEMENT_NODE:for(var _=_isBlockedElement(e,i,a),S=getValidTagName(e),w={},E=0,O=Array.from(e.attributes);E<O.length;E++){var R=O[E],T=R.name,A=R.value;w[T]=transformAttribute(o,S,T,A)}if("link"===S&&l){var I=Array.from(o.styleSheets).find((function(t){return t.href===e.href})),k=null;I&&(k=getCssRulesString(I)),k&&(delete w.rel,delete w.href,w._cssText=absoluteToStylesheet(k,I.href))}if("style"===S&&e.sheet&&!(e.innerText||e.textContent||"").trim().length)(k=getCssRulesString(e.sheet))&&(w._cssText=absoluteToStylesheet(k,getHref()));if("input"===S||"textarea"===S||"select"===S){A=e.value;"radio"!==w.type&&"checkbox"!==w.type&&"submit"!==w.type&&"button"!==w.type&&A?w.value=maskInputValue({type:w.type,tagName:S,value:A,maskInputOptions:f,maskInputFn:d}):e.checked&&(w.checked=e.checked)}if("option"===S&&(e.selected&&!f.select?w.selected=!0:delete w.selected),"canvas"===S&&m)if("2d"===e.__context)is2DCanvasBlank(e)||(w.rr_dataURL=e.toDataURL(v.type,v.quality));else if(!("__context"in e)){var C=e.toDataURL(v.type,v.quality),N=document.createElement("canvas");N.width=e.width,N.height=e.height,C!==N.toDataURL(v.type,v.quality)&&(w.rr_dataURL=C)}if("img"===S&&y){canvasService||(canvasService=o.createElement("canvas"),canvasCtx=canvasService.getContext("2d"));var x=e,M=x.crossOrigin;x.crossOrigin="anonymous";var L=function(){try{canvasService.width=x.naturalWidth,canvasService.height=x.naturalHeight,canvasCtx.drawImage(x,0,0),w.rr_dataURL=canvasService.toDataURL(v.type,v.quality)}catch(e){console.warn("Cannot inline img src="+x.currentSrc+"! Error: "+e)}M?w.crossOrigin=M:delete w.crossOrigin};x.complete&&0!==x.naturalWidth?L():x.onload=L}if("audio"!==S&&"video"!==S||(w.rr_mediaState=e.paused?"paused":"played",w.rr_mediaCurrentTime=e.currentTime),e.scrollLeft&&(w.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(w.rr_scrollTop=e.scrollTop),_){var D=e.getBoundingClientRect(),j=D.width,P=D.height;w={class:w.class,rr_width:j+"px",rr_height:P+"px"}}return"iframe"!==S||g(w.src)||(e.contentDocument||(w.rr_src=w.src),delete w.src),{type:NodeType.Element,tagName:S,attributes:w,childNodes:[],isSVG:isSVGElement(e)||void 0,needBlock:_,rootId:n};case e.TEXT_NODE:var B=e.parentNode&&e.parentNode.tagName,$=e.textContent,q="STYLE"===B||void 0,F="SCRIPT"===B||void 0;if(q&&$){try{e.nextSibling||e.previousSibling||(null===(r=e.parentNode.sheet)||void 0===r?void 0:r.cssRules)&&($=stringifyStyleSheet(e.parentNode.sheet))}catch(t){console.warn("Cannot get CSS styles from text's parentNode. Error: "+t,e)}$=absoluteToStylesheet($,getHref())}return F&&($="SCRIPT_PLACEHOLDER"),!q&&!F&&needMaskingText(e,s,u)&&$&&($=p?p($):$.replace(/[\S]/g,"*")),{type:NodeType.Text,textContent:$||"",isStyle:q,rootId:n};case e.CDATA_SECTION_NODE:return{type:NodeType.CDATA,textContent:"",rootId:n};case e.COMMENT_NODE:return{type:NodeType.Comment,textContent:e.textContent||"",rootId:n};default:return!1}}function lowerIfExists(e){return void 0===e?"":e.toLowerCase()}function slimDOMExcluded(e,t){if(t.comment&&e.type===NodeType.Comment)return!0;if(e.type===NodeType.Element){if(t.script&&("script"===e.tagName||"link"===e.tagName&&"preload"===e.attributes.rel&&"script"===e.attributes.as||"link"===e.tagName&&"prefetch"===e.attributes.rel&&"string"==typeof e.attributes.href&&e.attributes.href.endsWith(".js")))return!0;if(t.headFavicon&&("link"===e.tagName&&"shortcut icon"===e.attributes.rel||"meta"===e.tagName&&(lowerIfExists(e.attributes.name).match(/^msapplication-tile(image|color)$/)||"application-name"===lowerIfExists(e.attributes.name)||"icon"===lowerIfExists(e.attributes.rel)||"apple-touch-icon"===lowerIfExists(e.attributes.rel)||"shortcut icon"===lowerIfExists(e.attributes.rel))))return!0;if("meta"===e.tagName){if(t.headMetaDescKeywords&&lowerIfExists(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(lowerIfExists(e.attributes.property).match(/^(og|twitter|fb):/)||lowerIfExists(e.attributes.name).match(/^(og|twitter):/)||"pinterest"===lowerIfExists(e.attributes.name)))return!0;if(t.headMetaRobots&&("robots"===lowerIfExists(e.attributes.name)||"googlebot"===lowerIfExists(e.attributes.name)||"bingbot"===lowerIfExists(e.attributes.name)))return!0;if(t.headMetaHttpEquiv&&void 0!==e.attributes["http-equiv"])return!0;if(t.headMetaAuthorship&&("author"===lowerIfExists(e.attributes.name)||"generator"===lowerIfExists(e.attributes.name)||"framework"===lowerIfExists(e.attributes.name)||"publisher"===lowerIfExists(e.attributes.name)||"progid"===lowerIfExists(e.attributes.name)||lowerIfExists(e.attributes.property).match(/^article:/)||lowerIfExists(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&("google-site-verification"===lowerIfExists(e.attributes.name)||"yandex-verification"===lowerIfExists(e.attributes.name)||"csrf-token"===lowerIfExists(e.attributes.name)||"p:domain_verify"===lowerIfExists(e.attributes.name)||"verify-v1"===lowerIfExists(e.attributes.name)||"verification"===lowerIfExists(e.attributes.name)||"shopify-checkout-api-token"===lowerIfExists(e.attributes.name)))return!0}}return!1}function serializeNodeWithId(e,t){var r,n=t.doc,o=t.map,i=t.blockClass,a=t.blockSelector,s=t.maskTextClass,u=t.maskTextSelector,l=t.skipChild,c=void 0!==l&&l,f=t.inlineStylesheet,p=void 0===f||f,d=t.maskInputOptions,h=void 0===d?{}:d,v=t.maskTextFn,y=t.maskInputFn,m=t.slimDOMOptions,g=t.dataURLOptions,b=void 0===g?{}:g,_=t.inlineImages,S=void 0!==_&&_,w=t.recordCanvas,E=void 0!==w&&w,O=t.onSerialize,R=t.onIframeLoad,T=t.iframeLoadTimeout,A=void 0===T?5e3:T,I=t.keepIframeSrcFn,k=void 0===I?function(){return!1}:I,C=t.preserveWhiteSpace,N=void 0===C||C,x=serializeNode(e,{doc:n,blockClass:i,blockSelector:a,maskTextClass:s,maskTextSelector:u,inlineStylesheet:p,maskInputOptions:h,maskTextFn:v,maskInputFn:y,dataURLOptions:b,inlineImages:S,recordCanvas:E,keepIframeSrcFn:k});if(!x)return console.warn(e,"not serialized"),null;r="__sn"in e?e.__sn.id:slimDOMExcluded(x,m)||!N&&x.type===NodeType.Text&&!x.isStyle&&!x.textContent.replace(/^\s+|\s+$/gm,"").length?IGNORED_NODE:genId();var M=Object.assign(x,{id:r});if(e.__sn=M,r===IGNORED_NODE)return null;o[r]=e,O&&O(e);var L=!c;if(M.type===NodeType.Element&&(L=L&&!M.needBlock,delete M.needBlock,e.shadowRoot&&(M.isShadowHost=!0)),(M.type===NodeType.Document||M.type===NodeType.Element)&&L){m.headWhitespace&&x.type===NodeType.Element&&"head"===x.tagName&&(N=!1);for(var D={doc:n,map:o,blockClass:i,blockSelector:a,maskTextClass:s,maskTextSelector:u,skipChild:c,inlineStylesheet:p,maskInputOptions:h,maskTextFn:v,maskInputFn:y,slimDOMOptions:m,dataURLOptions:b,inlineImages:S,recordCanvas:E,preserveWhiteSpace:N,onSerialize:O,onIframeLoad:R,iframeLoadTimeout:A,keepIframeSrcFn:k},j=0,P=Array.from(e.childNodes);j<P.length;j++){(q=serializeNodeWithId(P[j],D))&&M.childNodes.push(q)}if(isElement(e)&&e.shadowRoot)for(var B=0,$=Array.from(e.shadowRoot.childNodes);B<$.length;B++){var q;(q=serializeNodeWithId($[B],D))&&(q.isShadow=!0,M.childNodes.push(q))}}return e.parentNode&&isShadowRoot(e.parentNode)&&(M.isShadow=!0),M.type===NodeType.Element&&"iframe"===M.tagName&&onceIframeLoaded(e,(function(){var t=e.contentDocument;if(t&&R){var r=serializeNodeWithId(t,{doc:t,map:o,blockClass:i,blockSelector:a,maskTextClass:s,maskTextSelector:u,skipChild:!1,inlineStylesheet:p,maskInputOptions:h,maskTextFn:v,maskInputFn:y,slimDOMOptions:m,dataURLOptions:b,inlineImages:S,recordCanvas:E,preserveWhiteSpace:N,onSerialize:O,onIframeLoad:R,iframeLoadTimeout:A,keepIframeSrcFn:k});r&&R(e,r)}}),A),M}function snapshot(e,t){var r=t||{},n=r.blockClass,o=void 0===n?"rr-block":n,i=r.blockSelector,a=void 0===i?null:i,s=r.maskTextClass,u=void 0===s?"rr-mask":s,l=r.maskTextSelector,c=void 0===l?null:l,f=r.inlineStylesheet,p=void 0===f||f,d=r.inlineImages,h=void 0!==d&&d,v=r.recordCanvas,y=void 0!==v&&v,m=r.maskAllInputs,g=void 0!==m&&m,b=r.maskTextFn,_=r.maskInputFn,S=r.slimDOM,w=void 0!==S&&S,E=r.dataURLOptions,O=r.preserveWhiteSpace,R=r.onSerialize,T=r.onIframeLoad,A=r.iframeLoadTimeout,I=r.keepIframeSrcFn,k={};return[serializeNodeWithId(e,{doc:e,map:k,blockClass:o,blockSelector:a,maskTextClass:u,maskTextSelector:c,skipChild:!1,inlineStylesheet:p,maskInputOptions:!0===g?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:!1===g?{password:!0}:g,maskTextFn:b,maskInputFn:_,slimDOMOptions:!0===w||"all"===w?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:"all"===w,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:!1===w?{}:w,dataURLOptions:E,inlineImages:h,recordCanvas:y,preserveWhiteSpace:O,onSerialize:R,onIframeLoad:T,iframeLoadTimeout:A,keepIframeSrcFn:void 0===I?function(){return!1}:I}),k]}function on(e,t,r){void 0===r&&(r=document);var n={capture:!0,passive:!0};return r.addEventListener(e,t,n),function(){return r.removeEventListener(e,t,n)}}function createMirror(){return{map:{},getId:function(e){return e&&e.__sn?e.__sn.id:-1},getNode:function(e){return this.map[e]||null},removeNodeFromMap:function(e){var t=this,r=e.__sn&&e.__sn.id;delete this.map[r],e.childNodes&&e.childNodes.forEach((function(e){return t.removeNodeFromMap(e)}))},has:function(e){return this.map.hasOwnProperty(e)},reset:function(){this.map={}}}}!function(e){e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin"}(EventType||(EventType={})),function(e){e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration"}(IncrementalSource||(IncrementalSource={})),function(e){e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel"}(MouseInteractions||(MouseInteractions={})),function(e){e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2"}(CanvasContext||(CanvasContext={})),function(e){e[e.Play=0]="Play",e[e.Pause=1]="Pause",e[e.Seeked=2]="Seeked",e[e.VolumeChange=3]="VolumeChange"}(MediaInteractions||(MediaInteractions={})),function(e){e.Start="start",e.Pause="pause",e.Resume="resume",e.Resize="resize",e.Finish="finish",e.FullsnapshotRebuilded="fullsnapshot-rebuilded",e.LoadStylesheetStart="load-stylesheet-start",e.LoadStylesheetEnd="load-stylesheet-end",e.SkipStart="skip-start",e.SkipEnd="skip-end",e.MouseInteraction="mouse-interaction",e.EventCast="event-cast",e.CustomEvent="custom-event",e.Flush="flush",e.StateChange="state-change",e.PlayBack="play-back"}(ReplayerEvents||(ReplayerEvents={}));var DEPARTED_MIRROR_ACCESS_WARNING="Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",_mirror={map:{},getId:function(){return console.error(DEPARTED_MIRROR_ACCESS_WARNING),-1},getNode:function(){return console.error(DEPARTED_MIRROR_ACCESS_WARNING),null},removeNodeFromMap:function(){console.error(DEPARTED_MIRROR_ACCESS_WARNING)},has:function(){return console.error(DEPARTED_MIRROR_ACCESS_WARNING),!1},reset:function(){console.error(DEPARTED_MIRROR_ACCESS_WARNING)}};function throttle(e,t,r){void 0===r&&(r={});var n=null,o=0;return function(i){var a=Date.now();o||!1!==r.leading||(o=a);var s=t-(a-o),u=this,l=arguments;s<=0||s>t?(n&&(clearTimeout(n),n=null),o=a,e.apply(u,l)):n||!1===r.trailing||(n=setTimeout((function(){o=!1===r.leading?0:Date.now(),n=null,e.apply(u,l)}),s))}}function hookSetter(e,t,r,n,o){void 0===o&&(o=window);var i=o.Object.getOwnPropertyDescriptor(e,t);return o.Object.defineProperty(e,t,n?r:{set:function(e){var t=this;setTimeout((function(){r.set.call(t,e)}),0),i&&i.set&&i.set.call(this,e)}}),function(){return hookSetter(e,t,i||{},!0)}}function patch(e,t,r){try{if(!(t in e))return function(){};var n=e[t],o=r(n);return"function"==typeof o&&(o.prototype=o.prototype||{},Object.defineProperties(o,{__rrweb_original__:{enumerable:!1,value:n}})),e[t]=o,function(){e[t]=n}}catch(e){return function(){}}}function getWindowHeight(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function getWindowWidth(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function isBlocked(e,t){if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){var r=!1;if("string"==typeof t){if(void 0!==e.closest)return null!==e.closest("."+t);r=e.classList.contains(t)}else e.classList.forEach((function(e){t.test(e)&&(r=!0)}));return r||isBlocked(e.parentNode,t)}return e.nodeType,e.TEXT_NODE,isBlocked(e.parentNode,t)}function isIgnored(e){return"__sn"in e&&e.__sn.id===IGNORED_NODE}function isAncestorRemoved(e,t){if(isShadowRoot(e))return!1;var r=t.getId(e);return!t.has(r)||(!e.parentNode||e.parentNode.nodeType!==e.DOCUMENT_NODE)&&(!e.parentNode||isAncestorRemoved(e.parentNode,t))}function isTouchEvent(e){return Boolean(e.changedTouches)}function polyfill(e){void 0===e&&(e=window),"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=function(e){if(!(0 in arguments))throw new TypeError("1 argument is required");do{if(this===e)return!0}while(e=e&&e.parentNode);return!1})}function isIframeINode(e){return"__sn"in e&&(e.__sn.type===NodeType.Element&&"iframe"===e.__sn.tagName)}function hasShadowRoot(e){return Boolean(null==e?void 0:e.shadowRoot)}function isNodeInLinkedList(e){return"__ln"in e}"undefined"!=typeof window&&window.Proxy&&window.Reflect&&(_mirror=new Proxy(_mirror,{get:function(e,t,r){return"map"===t&&console.error(DEPARTED_MIRROR_ACCESS_WARNING),Reflect.get(e,t,r)}}));var DoubleLinkedList=function(){function e(){this.length=0,this.head=null}return e.prototype.get=function(e){if(e>=this.length)throw new Error("Position outside of list range");for(var t=this.head,r=0;r<e;r++)t=(null==t?void 0:t.next)||null;return t},e.prototype.addNode=function(e){var t={value:e,previous:null,next:null};if(e.__ln=t,e.previousSibling&&isNodeInLinkedList(e.previousSibling)){var r=e.previousSibling.__ln.next;t.next=r,t.previous=e.previousSibling.__ln,e.previousSibling.__ln.next=t,r&&(r.previous=t)}else if(e.nextSibling&&isNodeInLinkedList(e.nextSibling)&&e.nextSibling.__ln.previous){r=e.nextSibling.__ln.previous;t.previous=r,t.next=e.nextSibling.__ln,e.nextSibling.__ln.previous=t,r&&(r.next=t)}else this.head&&(this.head.previous=t),t.next=this.head,this.head=t;this.length++},e.prototype.removeNode=function(e){var t=e.__ln;this.head&&(t.previous?(t.previous.next=t.next,t.next&&(t.next.previous=t.previous)):(this.head=t.next,this.head&&(this.head.previous=null)),e.__ln&&delete e.__ln,this.length--)},e}(),moveKey=function(e,t){return"".concat(e,"@").concat(t)};function isINode(e){return"__sn"in e}var MutationBuffer=function(){function e(){var e=this;this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=function(t){t.forEach(e.processMutation),e.emit()},this.emit=function(){var t,r,n,o;if(!e.frozen&&!e.locked){for(var i=[],a=new DoubleLinkedList,s=function(t){for(var r=t,n=IGNORED_NODE;n===IGNORED_NODE;)n=(r=r&&r.nextSibling)&&e.mirror.getId(r);return n},u=function(t){for(var r,n,o,u,l,c=t.getRootNode?null===(r=t.getRootNode())||void 0===r?void 0:r.host:null,f=c;null===(o=null===(n=null==f?void 0:f.getRootNode)||void 0===n?void 0:n.call(f))||void 0===o?void 0:o.host;)f=(null===(l=null===(u=null==f?void 0:f.getRootNode)||void 0===u?void 0:u.call(f))||void 0===l?void 0:l.host)||null;var p=!(e.doc.contains(t)||null!==f&&e.doc.contains(f));if(t.parentNode&&!p){var d=isShadowRoot(t.parentNode)?e.mirror.getId(c):e.mirror.getId(t.parentNode),h=s(t);if(-1===d||-1===h)return a.addNode(t);var v=serializeNodeWithId(t,{doc:e.doc,map:e.mirror.map,blockClass:e.blockClass,blockSelector:e.blockSelector,maskTextClass:e.maskTextClass,maskTextSelector:e.maskTextSelector,skipChild:!0,inlineStylesheet:e.inlineStylesheet,maskInputOptions:e.maskInputOptions,maskTextFn:e.maskTextFn,maskInputFn:e.maskInputFn,slimDOMOptions:e.slimDOMOptions,recordCanvas:e.recordCanvas,inlineImages:e.inlineImages,onSerialize:function(r){isIframeINode(r)&&e.iframeManager.addIframe(r),hasShadowRoot(t)&&e.shadowDomManager.addShadowRoot(t.shadowRoot,document)},onIframeLoad:function(t,r){e.iframeManager.attachIframe(t,r),e.shadowDomManager.observeAttachShadow(t)}});v&&i.push({parentId:d,nextId:h,node:v})}};e.mapRemoves.length;)e.mirror.removeNodeFromMap(e.mapRemoves.shift());try{for(var l=__values(e.movedSet),c=l.next();!c.done;c=l.next()){var f=c.value;isParentRemoved(e.removes,f,e.mirror)&&!e.movedSet.has(f.parentNode)||u(f)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}try{for(var p=__values(e.addedSet),d=p.next();!d.done;d=p.next()){f=d.value;isAncestorInSet(e.droppedSet,f)||isParentRemoved(e.removes,f,e.mirror)?isAncestorInSet(e.movedSet,f)?u(f):e.droppedSet.add(f):u(f)}}catch(e){n={error:e}}finally{try{d&&!d.done&&(o=p.return)&&o.call(p)}finally{if(n)throw n.error}}for(var h=null;a.length;){var v=null;if(h){var y=e.mirror.getId(h.value.parentNode),m=s(h.value);-1!==y&&-1!==m&&(v=h)}if(!v)for(var g=a.length-1;g>=0;g--){var b=a.get(g);if(b){y=e.mirror.getId(b.value.parentNode),m=s(b.value);if(-1!==y&&-1!==m){v=b;break}}}if(!v){for(;a.head;)a.removeNode(a.head.value);break}h=v.previous,a.removeNode(v.value),u(v.value)}var _={texts:e.texts.map((function(t){return{id:e.mirror.getId(t.node),value:t.value}})).filter((function(t){return e.mirror.has(t.id)})),attributes:e.attributes.map((function(t){return{id:e.mirror.getId(t.node),attributes:t.attributes}})).filter((function(t){return e.mirror.has(t.id)})),removes:e.removes,adds:i};(_.texts.length||_.attributes.length||_.removes.length||_.adds.length)&&(e.texts=[],e.attributes=[],e.removes=[],e.addedSet=new Set,e.movedSet=new Set,e.droppedSet=new Set,e.movedMap={},e.mutationCb(_))}},this.processMutation=function(t){var r,n,o,i;if(!isIgnored(t.target))switch(t.type){case"characterData":var a=t.target.textContent;isBlocked(t.target,e.blockClass)||a===t.oldValue||e.texts.push({value:needMaskingText(t.target,e.maskTextClass,e.maskTextSelector)&&a?e.maskTextFn?e.maskTextFn(a):a.replace(/[\S]/g,"*"):a,node:t.target});break;case"attributes":var s=t.target;a=t.target.getAttribute(t.attributeName);if("value"===t.attributeName&&(a=maskInputValue({maskInputOptions:e.maskInputOptions,tagName:t.target.tagName,type:t.target.getAttribute("type"),value:a,maskInputFn:e.maskInputFn})),isBlocked(t.target,e.blockClass)||a===t.oldValue)return;var u=e.attributes.find((function(e){return e.node===t.target}));if(u||(u={node:t.target,attributes:{}},e.attributes.push(u)),"style"===t.attributeName){var l=e.doc.createElement("span");t.oldValue&&l.setAttribute("style",t.oldValue),void 0!==u.attributes.style&&null!==u.attributes.style||(u.attributes.style={});var c=u.attributes.style;try{for(var f=__values(Array.from(s.style)),p=f.next();!p.done;p=f.next()){var d=p.value,h=s.style.getPropertyValue(d),v=s.style.getPropertyPriority(d);h===l.style.getPropertyValue(d)&&v===l.style.getPropertyPriority(d)||(c[d]=""===v?h:[h,v])}}catch(e){r={error:e}}finally{try{p&&!p.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}try{for(var y=__values(Array.from(l.style)),m=y.next();!m.done;m=y.next()){d=m.value;""===s.style.getPropertyValue(d)&&(c[d]=!1)}}catch(e){o={error:e}}finally{try{m&&!m.done&&(i=y.return)&&i.call(y)}finally{if(o)throw o.error}}}else u.attributes[t.attributeName]=transformAttribute(e.doc,t.target.tagName,t.attributeName,a);break;case"childList":t.addedNodes.forEach((function(r){return e.genAdds(r,t.target)})),t.removedNodes.forEach((function(r){var n=e.mirror.getId(r),o=isShadowRoot(t.target)?e.mirror.getId(t.target.host):e.mirror.getId(t.target);isBlocked(t.target,e.blockClass)||isIgnored(r)||(e.addedSet.has(r)?(deepDelete(e.addedSet,r),e.droppedSet.add(r)):e.addedSet.has(t.target)&&-1===n||isAncestorRemoved(t.target,e.mirror)||(e.movedSet.has(r)&&e.movedMap[moveKey(n,o)]?deepDelete(e.movedSet,r):e.removes.push({parentId:o,id:n,isShadow:!!isShadowRoot(t.target)||void 0})),e.mapRemoves.push(r))}))}},this.genAdds=function(t,r){if(!r||!isBlocked(r,e.blockClass)){if(isINode(t)){if(isIgnored(t))return;e.movedSet.add(t);var n=null;r&&isINode(r)&&(n=r.__sn.id),n&&(e.movedMap[moveKey(t.__sn.id,n)]=!0)}else e.addedSet.add(t),e.droppedSet.delete(t);isBlocked(t,e.blockClass)||t.childNodes.forEach((function(t){return e.genAdds(t)}))}}}return e.prototype.init=function(e){var t=this;["mutationCb","blockClass","blockSelector","maskTextClass","maskTextSelector","inlineStylesheet","maskInputOptions","maskTextFn","maskInputFn","recordCanvas","inlineImages","slimDOMOptions","doc","mirror","iframeManager","shadowDomManager","canvasManager"].forEach((function(r){t[r]=e[r]}))},e.prototype.freeze=function(){this.frozen=!0,this.canvasManager.freeze()},e.prototype.unfreeze=function(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()},e.prototype.isFrozen=function(){return this.frozen},e.prototype.lock=function(){this.locked=!0,this.canvasManager.lock()},e.prototype.unlock=function(){this.locked=!1,this.canvasManager.unlock(),this.emit()},e.prototype.reset=function(){this.shadowDomManager.reset(),this.canvasManager.reset()},e}();function deepDelete(e,t){e.delete(t),t.childNodes.forEach((function(t){return deepDelete(e,t)}))}function isParentRemoved(e,t,r){var n=t.parentNode;if(!n)return!1;var o=r.getId(n);return!!e.some((function(e){return e.id===o}))||isParentRemoved(e,n,r)}function isAncestorInSet(e,t){var r=t.parentNode;return!!r&&(!!e.has(r)||isAncestorInSet(e,r))}var MutationBuffer$1=MutationBuffer,mutationBuffers=[],isCSSGroupingRuleSupported="undefined"!=typeof CSSGroupingRule,isCSSMediaRuleSupported="undefined"!=typeof CSSMediaRule,isCSSSupportsRuleSupported="undefined"!=typeof CSSSupportsRule,isCSSConditionRuleSupported="undefined"!=typeof CSSConditionRule;function getEventTarget(e){try{if("composedPath"in e){var t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0];return e.target}catch(t){return e.target}}function initMutationObserver(e,t){var r,n,o=new MutationBuffer$1;mutationBuffers.push(o),o.init(e);var i=window.MutationObserver||window.__rrMutationObserver,a=null===(n=null===(r=null===window||void 0===window?void 0:window.Zone)||void 0===r?void 0:r.__symbol__)||void 0===n?void 0:n.call(r,"MutationObserver");a&&window[a]&&(i=window[a]);var s=new i(o.processMutations.bind(o));return s.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),s}function initMoveObserver(e){var t=e.mousemoveCb,r=e.sampling,n=e.doc,o=e.mirror;if(!1===r.mousemove)return function(){};var i,a="number"==typeof r.mousemove?r.mousemove:50,s="number"==typeof r.mousemoveCallback?r.mousemoveCallback:500,u=[],l=throttle((function(e){var r=Date.now()-i;t(u.map((function(e){return e.timeOffset-=r,e})),e),u=[],i=null}),s),c=throttle((function(e){var t=getEventTarget(e),r=isTouchEvent(e)?e.changedTouches[0]:e,n=r.clientX,a=r.clientY;i||(i=Date.now()),u.push({x:n,y:a,id:o.getId(t),timeOffset:Date.now()-i}),l("undefined"!=typeof DragEvent&&e instanceof DragEvent?IncrementalSource.Drag:e instanceof MouseEvent?IncrementalSource.MouseMove:IncrementalSource.TouchMove)}),a,{trailing:!1}),f=[on("mousemove",c,n),on("touchmove",c,n),on("drag",c,n)];return function(){f.forEach((function(e){return e()}))}}function initMouseInteractionObserver(e){var t=e.mouseInteractionCb,r=e.doc,n=e.mirror,o=e.blockClass,i=e.sampling;if(!1===i.mouseInteraction)return function(){};var a=!0===i.mouseInteraction||void 0===i.mouseInteraction?{}:i.mouseInteraction,s=[];return Object.keys(MouseInteractions).filter((function(e){return Number.isNaN(Number(e))&&!e.endsWith("_Departed")&&!1!==a[e]})).forEach((function(e){var i=e.toLowerCase(),a=function(e){return function(r){var i=getEventTarget(r);if(!isBlocked(i,o)){var a=isTouchEvent(r)?r.changedTouches[0]:r;if(a){var s=n.getId(i),u=a.clientX,l=a.clientY;t({type:MouseInteractions[e],id:s,x:u,y:l})}}}}(e);s.push(on(i,a,r))})),function(){s.forEach((function(e){return e()}))}}function initScrollObserver(e){var t=e.scrollCb,r=e.doc,n=e.mirror,o=e.blockClass;return on("scroll",throttle((function(e){var i=getEventTarget(e);if(i&&!isBlocked(i,o)){var a=n.getId(i);if(i===r){var s=r.scrollingElement||r.documentElement;t({id:a,x:s.scrollLeft,y:s.scrollTop})}else t({id:a,x:i.scrollLeft,y:i.scrollTop})}}),e.sampling.scroll||100),r)}function initViewportResizeObserver(e){var t=e.viewportResizeCb,r=-1,n=-1;return on("resize",throttle((function(){var e=getWindowHeight(),o=getWindowWidth();r===e&&n===o||(t({width:Number(o),height:Number(e)}),r=e,n=o)}),200),window)}function wrapEventWithUserTriggeredFlag(e,t){var r=_assign({},e);return t||delete r.userTriggered,r}var INPUT_TAGS=["INPUT","TEXTAREA","SELECT"],lastInputValueMap=new WeakMap;function initInputObserver(e){var t=e.inputCb,r=e.doc,n=e.mirror,o=e.blockClass,i=e.ignoreClass,a=e.maskInputOptions,s=e.maskInputFn,u=e.sampling,l=e.userTriggeredOnInput;function c(e){var t=getEventTarget(e),n=e.isTrusted;if(t&&"OPTION"===t.tagName&&(t=t.parentElement),t&&t.tagName&&!(INPUT_TAGS.indexOf(t.tagName)<0)&&!isBlocked(t,o)){var u=t.type;if(!t.classList.contains(i)){var c=t.value,p=!1;"radio"===u||"checkbox"===u?p=t.checked:(a[t.tagName.toLowerCase()]||a[u])&&(c=maskInputValue({maskInputOptions:a,tagName:t.tagName,type:u,value:c,maskInputFn:s})),f(t,wrapEventWithUserTriggeredFlag({text:c,isChecked:p,userTriggered:n},l));var d=t.name;"radio"===u&&d&&p&&r.querySelectorAll('input[type="radio"][name="'.concat(d,'"]')).forEach((function(e){e!==t&&f(e,wrapEventWithUserTriggeredFlag({text:e.value,isChecked:!p,userTriggered:!1},l))}))}}}function f(e,r){var o=lastInputValueMap.get(e);if(!o||o.text!==r.text||o.isChecked!==r.isChecked){lastInputValueMap.set(e,r);var i=n.getId(e);t(_assign(_assign({},r),{id:i}))}}var p=("last"===u.input?["change"]:["input","change"]).map((function(e){return on(e,c,r)})),d=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"),h=[[HTMLInputElement.prototype,"value"],[HTMLInputElement.prototype,"checked"],[HTMLSelectElement.prototype,"value"],[HTMLTextAreaElement.prototype,"value"],[HTMLSelectElement.prototype,"selectedIndex"],[HTMLOptionElement.prototype,"selected"]];return d&&d.set&&p.push.apply(p,__spreadArray([],__read(h.map((function(e){return hookSetter(e[0],e[1],{set:function(){c({target:this})}})}))),!1)),function(){p.forEach((function(e){return e()}))}}function getNestedCSSRulePositions(e){return function(e,t){if(isCSSGroupingRuleSupported&&e.parentRule instanceof CSSGroupingRule||isCSSMediaRuleSupported&&e.parentRule instanceof CSSMediaRule||isCSSSupportsRuleSupported&&e.parentRule instanceof CSSSupportsRule||isCSSConditionRuleSupported&&e.parentRule instanceof CSSConditionRule){var r=Array.from(e.parentRule.cssRules).indexOf(e);t.unshift(r)}else{r=Array.from(e.parentStyleSheet.cssRules).indexOf(e);t.unshift(r)}return t}(e,[])}function initStyleSheetObserver(e,t){var r=e.styleSheetRuleCb,n=e.mirror,o=t.win,i=o.CSSStyleSheet.prototype.insertRule;o.CSSStyleSheet.prototype.insertRule=function(e,t){var o=n.getId(this.ownerNode);return-1!==o&&r({id:o,adds:[{rule:e,index:t}]}),i.apply(this,arguments)};var a=o.CSSStyleSheet.prototype.deleteRule;o.CSSStyleSheet.prototype.deleteRule=function(e){var t=n.getId(this.ownerNode);return-1!==t&&r({id:t,removes:[{index:e}]}),a.apply(this,arguments)};var s={};isCSSGroupingRuleSupported?s.CSSGroupingRule=o.CSSGroupingRule:(isCSSMediaRuleSupported&&(s.CSSMediaRule=o.CSSMediaRule),isCSSConditionRuleSupported&&(s.CSSConditionRule=o.CSSConditionRule),isCSSSupportsRuleSupported&&(s.CSSSupportsRule=o.CSSSupportsRule));var u={};return Object.entries(s).forEach((function(e){var t=__read(e,2),o=t[0],i=t[1];u[o]={insertRule:i.prototype.insertRule,deleteRule:i.prototype.deleteRule},i.prototype.insertRule=function(e,t){var i=n.getId(this.parentStyleSheet.ownerNode);return-1!==i&&r({id:i,adds:[{rule:e,index:__spreadArray(__spreadArray([],__read(getNestedCSSRulePositions(this)),!1),[t||0],!1)}]}),u[o].insertRule.apply(this,arguments)},i.prototype.deleteRule=function(e){var t=n.getId(this.parentStyleSheet.ownerNode);return-1!==t&&r({id:t,removes:[{index:__spreadArray(__spreadArray([],__read(getNestedCSSRulePositions(this)),!1),[e],!1)}]}),u[o].deleteRule.apply(this,arguments)}})),function(){o.CSSStyleSheet.prototype.insertRule=i,o.CSSStyleSheet.prototype.deleteRule=a,Object.entries(s).forEach((function(e){var t=__read(e,2),r=t[0],n=t[1];n.prototype.insertRule=u[r].insertRule,n.prototype.deleteRule=u[r].deleteRule}))}}function initStyleDeclarationObserver(e,t){var r=e.styleDeclarationCb,n=e.mirror,o=t.win,i=o.CSSStyleDeclaration.prototype.setProperty;o.CSSStyleDeclaration.prototype.setProperty=function(e,t,o){var a,s,u=n.getId(null===(s=null===(a=this.parentRule)||void 0===a?void 0:a.parentStyleSheet)||void 0===s?void 0:s.ownerNode);return-1!==u&&r({id:u,set:{property:e,value:t,priority:o},index:getNestedCSSRulePositions(this.parentRule)}),i.apply(this,arguments)};var a=o.CSSStyleDeclaration.prototype.removeProperty;return o.CSSStyleDeclaration.prototype.removeProperty=function(e){var t,o,i=n.getId(null===(o=null===(t=this.parentRule)||void 0===t?void 0:t.parentStyleSheet)||void 0===o?void 0:o.ownerNode);return-1!==i&&r({id:i,remove:{property:e},index:getNestedCSSRulePositions(this.parentRule)}),a.apply(this,arguments)},function(){o.CSSStyleDeclaration.prototype.setProperty=i,o.CSSStyleDeclaration.prototype.removeProperty=a}}function initMediaInteractionObserver(e){var t=e.mediaInteractionCb,r=e.blockClass,n=e.mirror,o=e.sampling,i=function(e){return throttle((function(o){var i=getEventTarget(o);if(i&&!isBlocked(i,r)){var a=i,s=a.currentTime,u=a.volume,l=a.muted;t({type:e,id:n.getId(i),currentTime:s,volume:u,muted:l})}}),o.media||500)},a=[on("play",i(0)),on("pause",i(1)),on("seeked",i(2)),on("volumechange",i(3))];return function(){a.forEach((function(e){return e()}))}}function initFontObserver(e){var t=e.fontCb,r=e.doc,n=r.defaultView;if(!n)return function(){};var o=[],i=new WeakMap,a=n.FontFace;n.FontFace=function(e,t,r){var n=new a(e,t,r);return i.set(n,{family:e,buffer:"string"!=typeof t,descriptors:r,fontSource:"string"==typeof t?t:JSON.stringify(Array.from(new Uint8Array(t)))}),n};var s=patch(r.fonts,"add",(function(e){return function(r){return setTimeout((function(){var e=i.get(r);e&&(t(e),i.delete(r))}),0),e.apply(this,[r])}}));return o.push((function(){n.FontFace=a})),o.push(s),function(){o.forEach((function(e){return e()}))}}function mergeHooks(e,t){var r=e.mutationCb,n=e.mousemoveCb,o=e.mouseInteractionCb,i=e.scrollCb,a=e.viewportResizeCb,s=e.inputCb,u=e.mediaInteractionCb,l=e.styleSheetRuleCb,c=e.styleDeclarationCb,f=e.canvasMutationCb,p=e.fontCb;e.mutationCb=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.mutation&&t.mutation.apply(t,__spreadArray([],__read(e),!1)),r.apply(void 0,__spreadArray([],__read(e),!1))},e.mousemoveCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.mousemove&&t.mousemove.apply(t,__spreadArray([],__read(e),!1)),n.apply(void 0,__spreadArray([],__read(e),!1))},e.mouseInteractionCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.mouseInteraction&&t.mouseInteraction.apply(t,__spreadArray([],__read(e),!1)),o.apply(void 0,__spreadArray([],__read(e),!1))},e.scrollCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.scroll&&t.scroll.apply(t,__spreadArray([],__read(e),!1)),i.apply(void 0,__spreadArray([],__read(e),!1))},e.viewportResizeCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.viewportResize&&t.viewportResize.apply(t,__spreadArray([],__read(e),!1)),a.apply(void 0,__spreadArray([],__read(e),!1))},e.inputCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.input&&t.input.apply(t,__spreadArray([],__read(e),!1)),s.apply(void 0,__spreadArray([],__read(e),!1))},e.mediaInteractionCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.mediaInteaction&&t.mediaInteaction.apply(t,__spreadArray([],__read(e),!1)),u.apply(void 0,__spreadArray([],__read(e),!1))},e.styleSheetRuleCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.styleSheetRule&&t.styleSheetRule.apply(t,__spreadArray([],__read(e),!1)),l.apply(void 0,__spreadArray([],__read(e),!1))},e.styleDeclarationCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.styleDeclaration&&t.styleDeclaration.apply(t,__spreadArray([],__read(e),!1)),c.apply(void 0,__spreadArray([],__read(e),!1))},e.canvasMutationCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.canvasMutation&&t.canvasMutation.apply(t,__spreadArray([],__read(e),!1)),f.apply(void 0,__spreadArray([],__read(e),!1))},e.fontCb=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t.font&&t.font.apply(t,__spreadArray([],__read(e),!1)),p.apply(void 0,__spreadArray([],__read(e),!1))}}function initObservers(e,t){var r,n;void 0===t&&(t={});var o=e.doc.defaultView;if(!o)return function(){};mergeHooks(e,t);var i=initMutationObserver(e,e.doc),a=initMoveObserver(e),s=initMouseInteractionObserver(e),u=initScrollObserver(e),l=initViewportResizeObserver(e),c=initInputObserver(e),f=initMediaInteractionObserver(e),p=initStyleSheetObserver(e,{win:o}),d=initStyleDeclarationObserver(e,{win:o}),h=e.collectFonts?initFontObserver(e):function(){},v=[];try{for(var y=__values(e.plugins),m=y.next();!m.done;m=y.next()){var g=m.value;v.push(g.observer(g.callback,o,g.options))}}catch(e){r={error:e}}finally{try{m&&!m.done&&(n=y.return)&&n.call(y)}finally{if(r)throw r.error}}return function(){mutationBuffers.forEach((function(e){return e.reset()})),i.disconnect(),a(),s(),u(),l(),c(),f(),p(),d(),h(),v.forEach((function(e){return e()}))}}var IframeManager=function(){function e(e){this.iframes=new WeakMap,this.mutationCb=e.mutationCb}return e.prototype.addIframe=function(e){this.iframes.set(e,!0)},e.prototype.addLoadListener=function(e){this.loadListener=e},e.prototype.attachIframe=function(e,t){var r;this.mutationCb({adds:[{parentId:e.__sn.id,nextId:null,node:t}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),null===(r=this.loadListener)||void 0===r||r.call(this,e)},e}(),ShadowDomManager=function(){function e(e){this.restorePatches=[],this.mutationCb=e.mutationCb,this.scrollCb=e.scrollCb,this.bypassOptions=e.bypassOptions,this.mirror=e.mirror;var t=this;this.restorePatches.push(patch(HTMLElement.prototype,"attachShadow",(function(e){return function(){var r=e.apply(this,arguments);return this.shadowRoot&&t.addShadowRoot(this.shadowRoot,this.ownerDocument),r}})))}return e.prototype.addShadowRoot=function(e,t){initMutationObserver(_assign(_assign({},this.bypassOptions),{doc:t,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this}),e),initScrollObserver(_assign(_assign({},this.bypassOptions),{scrollCb:this.scrollCb,doc:e,mirror:this.mirror}))},e.prototype.observeAttachShadow=function(e){if(e.contentWindow){var t=this;this.restorePatches.push(patch(e.contentWindow.HTMLElement.prototype,"attachShadow",(function(r){return function(){var n=r.apply(this,arguments);return this.shadowRoot&&t.addShadowRoot(this.shadowRoot,e.contentDocument),n}})))}},e.prototype.reset=function(){this.restorePatches.forEach((function(e){return e()}))},e}();function initCanvas2DMutationObserver(e,t,r,n){var o,i,a=[],s=Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype),u=function(n){try{if("function"!=typeof t.CanvasRenderingContext2D.prototype[n])return"continue";var o=patch(t.CanvasRenderingContext2D.prototype,n,(function(t){return function(){for(var o=this,i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return isBlocked(this.canvas,r)||setTimeout((function(){var t=__spreadArray([],__read(i),!1);if("drawImage"===n&&t[0]&&t[0]instanceof HTMLCanvasElement){var r=t[0],a=r.getContext("2d"),s=null==a?void 0:a.getImageData(0,0,r.width,r.height),u=null==s?void 0:s.data;t[0]=JSON.stringify(u)}e(o.canvas,{type:CanvasContext["2D"],property:n,args:t})}),0),t.apply(this,i)}}));a.push(o)}catch(r){var i=hookSetter(t.CanvasRenderingContext2D.prototype,n,{set:function(t){e(this.canvas,{type:CanvasContext["2D"],property:n,args:[t],setter:!0})}});a.push(i)}};try{for(var l=__values(s),c=l.next();!c.done;c=l.next()){u(c.value)}}catch(e){o={error:e}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(o)throw o.error}}return function(){a.forEach((function(e){return e()}))}}function initCanvasContextObserver(e,t){var r=[];try{var n=patch(e.HTMLCanvasElement.prototype,"getContext",(function(e){return function(r){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return isBlocked(this,t)||"__context"in this||(this.__context=r),e.apply(this,__spreadArray([r],__read(n),!1))}}));r.push(n)}catch(e){console.error("failed to patch HTMLCanvasElement.prototype.getContext")}return function(){r.forEach((function(e){return e()}))}}for(var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i$1=0;i$1<chars.length;i$1++)lookup[chars.charCodeAt(i$1)]=i$1;var encode=function(e){var t,r=new Uint8Array(e),n=r.length,o="";for(t=0;t<n;t+=3)o+=chars[r[t]>>2],o+=chars[(3&r[t])<<4|r[t+1]>>4],o+=chars[(15&r[t+1])<<2|r[t+2]>>6],o+=chars[63&r[t+2]];return n%3==2?o=o.substring(0,o.length-1)+"=":n%3==1&&(o=o.substring(0,o.length-2)+"=="),o},webGLVarMap=new Map;function variableListFor(e,t){var r=webGLVarMap.get(e);return r||(r=new Map,webGLVarMap.set(e,r)),r.has(t)||r.set(t,[]),r.get(t)}var saveWebGLVar=function(e,t,r){if(e&&(isInstanceOfWebGLObject(e,t)||"object"===_typeof(e))){var n=variableListFor(r,e.constructor.name),o=n.indexOf(e);return-1===o&&(o=n.length,n.push(e)),o}};function serializeArg(e,t,r){return e instanceof Array?e.map((function(e){return serializeArg(e,t,r)})):null===e?e:e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray?{rr_type:e.constructor.name,args:[Object.values(e)]}:e instanceof ArrayBuffer?{rr_type:e.constructor.name,base64:encode(e)}:e instanceof DataView?{rr_type:e.constructor.name,args:[serializeArg(e.buffer,t,r),e.byteOffset,e.byteLength]}:e instanceof HTMLImageElement?{rr_type:e.constructor.name,src:e.src}:e instanceof ImageData?{rr_type:e.constructor.name,args:[serializeArg(e.data,t,r),e.width,e.height]}:isInstanceOfWebGLObject(e,t)||"object"===_typeof(e)?{rr_type:e.constructor.name,index:saveWebGLVar(e,t,r)}:e}var serializeArgs=function(e,t,r){return __spreadArray([],__read(e),!1).map((function(e){return serializeArg(e,t,r)}))},isInstanceOfWebGLObject=function(e,t){var r=["WebGLActiveInfo","WebGLBuffer","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArrayObject","WebGLVertexArrayObjectOES"].filter((function(e){return"function"==typeof t[e]}));return Boolean(r.find((function(r){return e instanceof t[r]})))};function patchGLPrototype(e,t,r,n,o,i){var a,s,u=[],l=Object.getOwnPropertyNames(e),c=function(a){try{if("function"!=typeof e[a])return"continue";var s=patch(e,a,(function(s){return function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];var c=s.apply(this,u);if(saveWebGLVar(c,i,e),!isBlocked(this.canvas,n)){o.getId(this.canvas);var f=serializeArgs(__spreadArray([],__read(u),!1),i,e),p={type:t,property:a,args:f};r(this.canvas,p)}return c}}));u.push(s)}catch(n){var l=hookSetter(e,a,{set:function(e){r(this.canvas,{type:t,property:a,args:[e],setter:!0})}});u.push(l)}};try{for(var f=__values(l),p=f.next();!p.done;p=f.next()){c(p.value)}}catch(e){a={error:e}}finally{try{p&&!p.done&&(s=f.return)&&s.call(f)}finally{if(a)throw a.error}}return u}function initCanvasWebGLMutationObserver(e,t,r,n){var o=[];return o.push.apply(o,__spreadArray([],__read(patchGLPrototype(t.WebGLRenderingContext.prototype,CanvasContext.WebGL,e,r,n,t)),!1)),void 0!==t.WebGL2RenderingContext&&o.push.apply(o,__spreadArray([],__read(patchGLPrototype(t.WebGL2RenderingContext.prototype,CanvasContext.WebGL2,e,r,n,t)),!1)),function(){o.forEach((function(e){return e()}))}}var CanvasManager=function(){function e(e){this.pendingCanvasMutations=new Map,this.rafStamps={latestId:0,invokeId:null},this.frozen=!1,this.locked=!1,this.processMutation=function(e,t){!(this.rafStamps.invokeId&&this.rafStamps.latestId!==this.rafStamps.invokeId)&&this.rafStamps.invokeId||(this.rafStamps.invokeId=this.rafStamps.latestId),this.pendingCanvasMutations.has(e)||this.pendingCanvasMutations.set(e,[]),this.pendingCanvasMutations.get(e).push(t)},this.mutationCb=e.mutationCb,this.mirror=e.mirror,!0===e.recordCanvas&&this.initCanvasMutationObserver(e.win,e.blockClass)}return e.prototype.reset=function(){this.pendingCanvasMutations.clear(),this.resetObservers&&this.resetObservers()},e.prototype.freeze=function(){this.frozen=!0},e.prototype.unfreeze=function(){this.frozen=!1},e.prototype.lock=function(){this.locked=!0},e.prototype.unlock=function(){this.locked=!1},e.prototype.initCanvasMutationObserver=function(e,t){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();var r=initCanvasContextObserver(e,t),n=initCanvas2DMutationObserver(this.processMutation.bind(this),e,t,this.mirror),o=initCanvasWebGLMutationObserver(this.processMutation.bind(this),e,t,this.mirror);this.resetObservers=function(){r(),n(),o()}},e.prototype.startPendingCanvasMutationFlusher=function(){var e=this;requestAnimationFrame((function(){return e.flushPendingCanvasMutations()}))},e.prototype.startRAFTimestamping=function(){var e=this;requestAnimationFrame((function t(r){e.rafStamps.latestId=r,requestAnimationFrame(t)}))},e.prototype.flushPendingCanvasMutations=function(){var e=this;this.pendingCanvasMutations.forEach((function(t,r){var n=e.mirror.getId(r);e.flushPendingCanvasMutationFor(r,n)})),requestAnimationFrame((function(){return e.flushPendingCanvasMutations()}))},e.prototype.flushPendingCanvasMutationFor=function(e,t){if(!this.frozen&&!this.locked){var r=this.pendingCanvasMutations.get(e);if(r&&-1!==t){var n=r.map((function(e){return e.type,__rest(e,["type"])})),o=r[0].type;this.mutationCb({id:t,type:o,commands:n}),this.pendingCanvasMutations.delete(e)}}},e}(),wrappedEmit,takeFullSnapshot;function wrapEvent(e){return _assign(_assign({},e),{timestamp:Date.now()})}var mirror=createMirror();function record(e){void 0===e&&(e={});var t=e.emit,r=e.checkoutEveryNms,n=e.checkoutEveryNth,o=e.blockClass,i=void 0===o?"rr-block":o,a=e.blockSelector,s=void 0===a?null:a,u=e.ignoreClass,l=void 0===u?"rr-ignore":u,c=e.maskTextClass,f=void 0===c?"rr-mask":c,p=e.maskTextSelector,d=void 0===p?null:p,h=e.inlineStylesheet,v=void 0===h||h,y=e.maskAllInputs,m=e.maskInputOptions,g=e.slimDOMOptions,b=e.maskInputFn,_=e.maskTextFn,S=e.hooks,w=e.packFn,E=e.sampling,O=void 0===E?{}:E,R=e.mousemoveWait,T=e.recordCanvas,A=void 0!==T&&T,I=e.userTriggeredOnInput,k=void 0!==I&&I,C=e.collectFonts,N=void 0!==C&&C,x=e.inlineImages,M=void 0!==x&&x,L=e.plugins,D=e.keepIframeSrcFn,j=void 0===D?function(){return!1}:D;if(!t)throw new Error("emit function is required");void 0!==R&&void 0===O.mousemove&&(O.mousemove=R);var P,B=!0===y?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:void 0!==m?m:{password:!0},$=!0===g||"all"===g?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:"all"===g,headMetaDescKeywords:"all"===g}:g||{};polyfill();var q=0;wrappedEmit=function(e,o){var i;if(!(null===(i=mutationBuffers[0])||void 0===i?void 0:i.isFrozen())||e.type===EventType.FullSnapshot||e.type===EventType.IncrementalSnapshot&&e.data.source===IncrementalSource.Mutation||mutationBuffers.forEach((function(e){return e.unfreeze()})),t(function(e){var t,r;try{for(var n=__values(L||[]),o=n.next();!o.done;o=n.next()){var i=o.value;i.eventProcessor&&(e=i.eventProcessor(e))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return w&&(e=w(e)),e}(e),o),e.type===EventType.FullSnapshot)P=e,q=0;else if(e.type===EventType.IncrementalSnapshot){if(e.data.source===IncrementalSource.Mutation&&e.data.isAttachIframe)return;q++;var a=n&&q>=n,s=r&&e.timestamp-P.timestamp>r;(a||s)&&takeFullSnapshot(!0)}};var F=function(e){wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.Mutation},e)}))},V=function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.Scroll},e)}))},U=function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.CanvasMutation},e)}))},W=new IframeManager({mutationCb:F}),G=new CanvasManager({recordCanvas:A,mutationCb:U,win:window,blockClass:i,mirror:mirror}),z=new ShadowDomManager({mutationCb:F,scrollCb:V,bypassOptions:{blockClass:i,blockSelector:s,maskTextClass:f,maskTextSelector:d,inlineStylesheet:v,maskInputOptions:B,maskTextFn:_,maskInputFn:b,recordCanvas:A,inlineImages:M,sampling:O,slimDOMOptions:$,iframeManager:W,canvasManager:G},mirror:mirror});takeFullSnapshot=function(e){var t,r,n,o;void 0===e&&(e=!1),wrappedEmit(wrapEvent({type:EventType.Meta,data:{href:window.location.href,width:getWindowWidth(),height:getWindowHeight()}}),e),mutationBuffers.forEach((function(e){return e.lock()}));var a=__read(snapshot(document,{blockClass:i,blockSelector:s,maskTextClass:f,maskTextSelector:d,inlineStylesheet:v,maskAllInputs:B,maskTextFn:_,slimDOM:$,recordCanvas:A,inlineImages:M,onSerialize:function(e){isIframeINode(e)&&W.addIframe(e),hasShadowRoot(e)&&z.addShadowRoot(e.shadowRoot,document)},onIframeLoad:function(e,t){W.attachIframe(e,t),z.observeAttachShadow(e)},keepIframeSrcFn:j}),2),u=a[0],l=a[1];if(!u)return console.warn("Failed to snapshot the document");mirror.map=l,wrappedEmit(wrapEvent({type:EventType.FullSnapshot,data:{node:u,initialOffset:{left:void 0!==window.pageXOffset?window.pageXOffset:(null===document||void 0===document?void 0:document.documentElement.scrollLeft)||(null===(r=null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.scrollLeft)||(null===document||void 0===document?void 0:document.body.scrollLeft)||0,top:void 0!==window.pageYOffset?window.pageYOffset:(null===document||void 0===document?void 0:document.documentElement.scrollTop)||(null===(o=null===(n=null===document||void 0===document?void 0:document.body)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.scrollTop)||(null===document||void 0===document?void 0:document.body.scrollTop)||0}}})),mutationBuffers.forEach((function(e){return e.unlock()}))};try{var H=[];H.push(on("DOMContentLoaded",(function(){wrappedEmit(wrapEvent({type:EventType.DomContentLoaded,data:{}}))})));var J=function(e){var t;return initObservers({mutationCb:F,mousemoveCb:function(e,t){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:{source:t,positions:e}}))},mouseInteractionCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.MouseInteraction},e)}))},scrollCb:V,viewportResizeCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.ViewportResize},e)}))},inputCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.Input},e)}))},mediaInteractionCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.MediaInteraction},e)}))},styleSheetRuleCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.StyleSheetRule},e)}))},styleDeclarationCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.StyleDeclaration},e)}))},canvasMutationCb:U,fontCb:function(e){return wrappedEmit(wrapEvent({type:EventType.IncrementalSnapshot,data:_assign({source:IncrementalSource.Font},e)}))},blockClass:i,ignoreClass:l,maskTextClass:f,maskTextSelector:d,maskInputOptions:B,inlineStylesheet:v,sampling:O,recordCanvas:A,inlineImages:M,userTriggeredOnInput:k,collectFonts:N,doc:e,maskInputFn:b,maskTextFn:_,blockSelector:s,slimDOMOptions:$,mirror:mirror,iframeManager:W,shadowDomManager:z,canvasManager:G,plugins:(null===(t=null==L?void 0:L.filter((function(e){return e.observer})))||void 0===t?void 0:t.map((function(e){return{observer:e.observer,options:e.options,callback:function(t){return wrappedEmit(wrapEvent({type:EventType.Plugin,data:{plugin:e.name,payload:t}}))}}})))||[]},S)};W.addLoadListener((function(e){H.push(J(e.contentDocument))}));var Y=function(){takeFullSnapshot(),H.push(J(document))};return"interactive"===document.readyState||"complete"===document.readyState?Y():H.push(on("load",(function(){wrappedEmit(wrapEvent({type:EventType.Load,data:{}})),Y()}),window)),function(){H.forEach((function(e){return e()}))}}catch(e){console.warn(e)}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}record.addCustomEvent=function(e,t){if(!wrappedEmit)throw new Error("please add custom event after start recording");wrappedEmit(wrapEvent({type:EventType.Custom,data:{tag:e,payload:t}}))},record.freezePage=function(){mutationBuffers.forEach((function(e){return e.freeze()}))},record.takeFullSnapshot=function(e){if(!takeFullSnapshot)throw new Error("please take full snapshot after start recording");takeFullSnapshot(e)},record.mirror=mirror;var u8=Uint8Array,u16=Uint16Array,i32=Int32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(e,t){for(var r=new u16(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];var o=new i32(r[30]);for(n=1;n<30;++n)for(var i=r[n];i<r[n+1];++i)o[i]=i-r[n]<<5|n;return{b:r,r:o}},_a=freb(fleb,2),fl=_a.b,revfl=_a.r;fl[28]=258,revfl[258]=28;for(var _b=freb(fdeb,0),revfd=_b.r,rev=new u16(32768),i=0;i<32768;++i){var x=(43690&i)>>1|(21845&i)<<1;x=(52428&x)>>2|(13107&x)<<2,x=(61680&x)>>4|(3855&x)<<4,rev[i]=((65280&x)>>8|(255&x)<<8)>>1}for(var hMap=function(e,t,r){for(var n=e.length,o=0,i=new u16(t);o<n;++o)e[o]&&++i[e[o]-1];var a,s=new u16(t);for(o=1;o<t;++o)s[o]=s[o-1]+i[o-1]<<1;if(r){a=new u16(1<<t);var u=15-t;for(o=0;o<n;++o)if(e[o])for(var l=o<<4|e[o],c=t-e[o],f=s[e[o]-1]++<<c,p=f|(1<<c)-1;f<=p;++f)a[rev[f]>>u]=l}else for(a=new u16(n),o=0;o<n;++o)e[o]&&(a[o]=rev[s[e[o]-1]++]>>15-e[o]);return a},flt=new u8(288),i=0;i<144;++i)flt[i]=8;for(var i=144;i<256;++i)flt[i]=9;for(var i=256;i<280;++i)flt[i]=7;for(var i=280;i<288;++i)flt[i]=8;for(var fdt=new u8(32),i=0;i<32;++i)fdt[i]=5;var flm=hMap(flt,9,0),fdm=hMap(fdt,5,0),shft=function(e){return(e+7)/8|0},slc=function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var n=new u8(r-t);return n.set(e.subarray(t,r)),n},wbits=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},wbits16=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},hTree=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,i=r.slice();if(!o)return{t:et,l:0};if(1==o){var a=new u8(r[0].s+1);return a[r[0].s]=1,{t:a,l:1}}r.sort((function(e,t){return e.f-t.f})),r.push({s:-1,f:25001});var s=r[0],u=r[1],l=0,c=1,f=2;for(r[0]={s:-1,f:s.f+u.f,l:s,r:u};c!=o-1;)s=r[r[l].f<r[f].f?l++:f++],u=r[l!=c&&r[l].f<r[f].f?l++:f++],r[c++]={s:-1,f:s.f+u.f,l:s,r:u};var p=i[0].s;for(n=1;n<o;++n)i[n].s>p&&(p=i[n].s);var d=new u16(p+1),h=ln(r[c-1],d,0);if(h>t){n=0;var v=0,y=h-t,m=1<<y;for(i.sort((function(e,t){return d[t.s]-d[e.s]||e.f-t.f}));n<o;++n){var g=i[n].s;if(!(d[g]>t))break;v+=m-(1<<h-d[g]),d[g]=t}for(v>>=y;v>0;){var b=i[n].s;d[b]<t?v-=1<<t-d[b]++-1:++n}for(;n>=0&&v;--n){var _=i[n].s;d[_]==t&&(--d[_],++v)}h=t}return{t:new u8(d),l:h}},ln=function e(t,r,n){return-1==t.s?Math.max(e(t.l,r,n+1),e(t.r,r,n+1)):r[t.s]=n},lc=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new u16(++t),n=0,o=e[0],i=1,a=function(e){r[n++]=e},s=1;s<=t;++s)if(e[s]==o&&s!=t)++i;else{if(!o&&i>2){for(;i>138;i-=138)a(32754);i>2&&(a(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(a(o),--i;i>6;i-=6)a(8304);i>2&&(a(i-3<<5|8208),i=0)}for(;i--;)a(o);i=1,o=e[s]}return{c:r.subarray(0,n),n:t}},clen=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},wfblk=function(e,t,r){var n=r.length,o=shft(t+2);e[o]=255&n,e[o+1]=n>>8,e[o+2]=255^e[o],e[o+3]=255^e[o+1];for(var i=0;i<n;++i)e[o+i+4]=r[i];return 8*(o+4+n)},wblk=function(e,t,r,n,o,i,a,s,u,l,c){wbits(t,c++,r),++o[256];for(var f=hTree(o,15),p=f.t,d=f.l,h=hTree(i,15),v=h.t,y=h.l,m=lc(p),g=m.c,b=m.n,_=lc(v),S=_.c,w=_.n,E=new u16(19),O=0;O<g.length;++O)++E[31&g[O]];for(O=0;O<S.length;++O)++E[31&S[O]];for(var R=hTree(E,7),T=R.t,A=R.l,I=19;I>4&&!T[clim[I-1]];--I);var k,C,N,x,M=l+5<<3,L=clen(o,flt)+clen(i,fdt)+a,D=clen(o,p)+clen(i,v)+a+14+3*I+clen(E,T)+2*E[16]+3*E[17]+7*E[18];if(u>=0&&M<=L&&M<=D)return wfblk(t,c,e.subarray(u,u+l));if(wbits(t,c,1+(D<L)),c+=2,D<L){k=hMap(p,d,0),C=p,N=hMap(v,y,0),x=v;var j=hMap(T,A,0);wbits(t,c,b-257),wbits(t,c+5,w-1),wbits(t,c+10,I-4),c+=14;for(O=0;O<I;++O)wbits(t,c+3*O,T[clim[O]]);c+=3*I;for(var P=[g,S],B=0;B<2;++B){var $=P[B];for(O=0;O<$.length;++O){var q=31&$[O];wbits(t,c,j[q]),c+=T[q],q>15&&(wbits(t,c,$[O]>>5&127),c+=$[O]>>12)}}}else k=flm,C=flt,N=fdm,x=fdt;for(O=0;O<s;++O){var F=n[O];if(F>255){wbits16(t,c,k[(q=F>>18&31)+257]),c+=C[q+257],q>7&&(wbits(t,c,F>>23&31),c+=fleb[q]);var V=31&F;wbits16(t,c,N[V]),c+=x[V],V>3&&(wbits16(t,c,F>>5&8191),c+=fdeb[V])}else wbits16(t,c,k[F]),c+=C[F]}return wbits16(t,c,k[256]),c+C[256]},deo=new i32([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),et=new u8(0),dflt=function(e,t,r,n,o,i){var a=i.z||e.length,s=new u8(n+a+5*(1+Math.ceil(a/7e3))+o),u=s.subarray(n,s.length-o),l=i.l,c=7&(i.r||0);if(t){c&&(u[0]=i.r>>3);for(var f=deo[t-1],p=f>>13,d=8191&f,h=(1<<r)-1,v=i.p||new u16(32768),y=i.h||new u16(h+1),m=Math.ceil(r/3),g=2*m,b=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<g)&h},_=new i32(25e3),S=new u16(288),w=new u16(32),E=0,O=0,R=i.i||0,T=0,A=i.w||0,I=0;R+2<a;++R){var k=b(R),C=32767&R,N=y[k];if(v[C]=N,y[k]=C,A<=R){var x=a-R;if((E>7e3||T>24576)&&(x>423||!l)){c=wblk(e,u,0,_,S,w,O,T,I,R-I,c),T=E=O=0,I=R;for(var M=0;M<286;++M)S[M]=0;for(M=0;M<30;++M)w[M]=0}var L=2,D=0,j=d,P=C-N&32767;if(x>2&&k==b(R-P))for(var B=Math.min(p,x)-1,$=Math.min(32767,R),q=Math.min(258,x);P<=$&&--j&&C!=N;){if(e[R+L]==e[R+L-P]){for(var F=0;F<q&&e[R+F]==e[R+F-P];++F);if(F>L){if(L=F,D=P,F>B)break;var V=Math.min(P,F-2),U=0;for(M=0;M<V;++M){var W=R-P+M&32767,G=W-v[W]&32767;G>U&&(U=G,N=W)}}}P+=(C=N)-(N=v[C])&32767}if(D){_[T++]=268435456|revfl[L]<<18|revfd[D];var z=31&revfl[L],H=31&revfd[D];O+=fleb[z]+fdeb[H],++S[257+z],++w[H],A=R+L,++E}else _[T++]=e[R],++S[e[R]]}}for(R=Math.max(R,A);R<a;++R)_[T++]=e[R],++S[e[R]];c=wblk(e,u,l,_,S,w,O,T,I,R-I,c),l||(i.r=7&c|u[c/8|0]<<3,c-=7,i.h=y,i.p=v,i.i=R,i.w=A)}else{for(R=i.w||0;R<a+l;R+=65535){var J=R+65535;J>=a&&(u[c/8|0]=l,J=a),c=wfblk(u,c+1,e.subarray(R,J))}i.i=a}return slc(s,0,n+shft(c)+o)},crct=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var r=t,n=9;--n;)r=(1&r&&-306674912)^r>>>1;e[t]=r}return e}(),crc=function(){var e=-1;return{p:function(t){for(var r=e,n=0;n<t.length;++n)r=crct[255&r^t[n]]^r>>>8;e=r},d:function(){return~e}}},dopt=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var i=t.dictionary.subarray(-32768),a=new u8(i.length+e.length);a.set(i),a.set(e,i.length),e=a,o.w=i.length}return dflt(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,r,n,o)},wbytes=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},gzh=function(e,t){var r=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&wbytes(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),r){e[3]=8;for(var n=0;n<=r.length;++n)e[n+10]=r.charCodeAt(n)}},gzhl=function(e){return 10+(e.filename?e.filename.length+1:0)};function gzipSync(e,t){t||(t={});var r=crc(),n=e.length;r.p(e);var o=dopt(e,t,gzhl(t),8),i=o.length;return gzh(o,t),wbytes(o,i-8,r.d()),wbytes(o,i-4,n),o}var td="undefined"!=typeof TextDecoder&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch(e){}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},indexLight={exports:{}},indexMinimal={},minimal={},aspromise=asPromise$1;function asPromise$1(e,t){for(var r=new Array(arguments.length-1),n=0,o=2,i=!0;o<arguments.length;)r[n++]=arguments[o++];return new Promise((function(o,a){r[n]=function(e){if(i)if(i=!1,e)a(e);else{for(var t=new Array(arguments.length-1),r=0;r<t.length;)t[r++]=arguments[r];o.apply(null,t)}};try{e.apply(t||null,r)}catch(e){i&&(i=!1,a(e))}}))}var base64$1={};!function(e){var t=e;t.length=function(e){var t=e.length;if(!t)return 0;for(var r=0;--t%4>1&&"="===e.charAt(t);)++r;return Math.ceil(3*e.length)/4-r};for(var r=new Array(64),n=new Array(123),o=0;o<64;)n[r[o]=o<26?o+65:o<52?o+71:o<62?o-4:o-59|43]=o++;t.encode=function(e,t,n){for(var o,i=null,a=[],s=0,u=0;t<n;){var l=e[t++];switch(u){case 0:a[s++]=r[l>>2],o=(3&l)<<4,u=1;break;case 1:a[s++]=r[o|l>>4],o=(15&l)<<2,u=2;break;case 2:a[s++]=r[o|l>>6],a[s++]=r[63&l],u=0}s>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,a)),s=0)}return u&&(a[s++]=r[o],a[s++]=61,1===u&&(a[s++]=61)),i?(s&&i.push(String.fromCharCode.apply(String,a.slice(0,s))),i.join("")):String.fromCharCode.apply(String,a.slice(0,s))};var i="invalid encoding";t.decode=function(e,t,r){for(var o,a=r,s=0,u=0;u<e.length;){var l=e.charCodeAt(u++);if(61===l&&s>1)break;if(void 0===(l=n[l]))throw Error(i);switch(s){case 0:o=l,s=1;break;case 1:t[r++]=o<<2|(48&l)>>4,o=l,s=2;break;case 2:t[r++]=(15&o)<<4|(60&l)>>2,o=l,s=3;break;case 3:t[r++]=(3&o)<<6|l,s=0}}if(1===s)throw Error(i);return r-a},t.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}}(base64$1);var eventemitter=EventEmitter;function EventEmitter(){this._listeners={}}EventEmitter.prototype.on=function(e,t,r){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:r||this}),this},EventEmitter.prototype.off=function(e,t){if(void 0===e)this._listeners={};else if(void 0===t)this._listeners[e]=[];else for(var r=this._listeners[e],n=0;n<r.length;)r[n].fn===t?r.splice(n,1):++n;return this},EventEmitter.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var r=[],n=1;n<arguments.length;)r.push(arguments[n++]);for(n=0;n<t.length;)t[n].fn.apply(t[n++].ctx,r)}return this};var float=factory(factory);function factory(e){return"undefined"!=typeof Float32Array?function(){var t=new Float32Array([-0]),r=new Uint8Array(t.buffer),n=128===r[3];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3]}function i(e,n,o){t[0]=e,n[o]=r[3],n[o+1]=r[2],n[o+2]=r[1],n[o+3]=r[0]}function a(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],t[0]}function s(e,n){return r[3]=e[n],r[2]=e[n+1],r[1]=e[n+2],r[0]=e[n+3],t[0]}e.writeFloatLE=n?o:i,e.writeFloatBE=n?i:o,e.readFloatLE=n?a:s,e.readFloatBE=n?s:a}():function(){function t(e,t,r,n){var o=t<0?1:0;if(o&&(t=-t),0===t)e(1/t>0?0:2147483648,r,n);else if(isNaN(t))e(2143289344,r,n);else if(t>34028234663852886e22)e((o<<31|2139095040)>>>0,r,n);else if(t<11754943508222875e-54)e((o<<31|Math.round(t/1401298464324817e-60))>>>0,r,n);else{var i=Math.floor(Math.log(t)/Math.LN2);e((o<<31|i+127<<23|8388607&Math.round(t*Math.pow(2,-i)*8388608))>>>0,r,n)}}function r(e,t,r){var n=e(t,r),o=2*(n>>31)+1,i=n>>>23&255,a=8388607&n;return 255===i?a?NaN:o*(1/0):0===i?1401298464324817e-60*o*a:o*Math.pow(2,i-150)*(a+8388608)}e.writeFloatLE=t.bind(null,writeUintLE),e.writeFloatBE=t.bind(null,writeUintBE),e.readFloatLE=r.bind(null,readUintLE),e.readFloatBE=r.bind(null,readUintBE)}(),"undefined"!=typeof Float64Array?function(){var t=new Float64Array([-0]),r=new Uint8Array(t.buffer),n=128===r[7];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3],n[o+4]=r[4],n[o+5]=r[5],n[o+6]=r[6],n[o+7]=r[7]}function i(e,n,o){t[0]=e,n[o]=r[7],n[o+1]=r[6],n[o+2]=r[5],n[o+3]=r[4],n[o+4]=r[3],n[o+5]=r[2],n[o+6]=r[1],n[o+7]=r[0]}function a(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],r[4]=e[n+4],r[5]=e[n+5],r[6]=e[n+6],r[7]=e[n+7],t[0]}function s(e,n){return r[7]=e[n],r[6]=e[n+1],r[5]=e[n+2],r[4]=e[n+3],r[3]=e[n+4],r[2]=e[n+5],r[1]=e[n+6],r[0]=e[n+7],t[0]}e.writeDoubleLE=n?o:i,e.writeDoubleBE=n?i:o,e.readDoubleLE=n?a:s,e.readDoubleBE=n?s:a}():function(){function t(e,t,r,n,o,i){var a=n<0?1:0;if(a&&(n=-n),0===n)e(0,o,i+t),e(1/n>0?0:2147483648,o,i+r);else if(isNaN(n))e(0,o,i+t),e(2146959360,o,i+r);else if(n>17976931348623157e292)e(0,o,i+t),e((a<<31|2146435072)>>>0,o,i+r);else{var s;if(n<22250738585072014e-324)e((s=n/5e-324)>>>0,o,i+t),e((a<<31|s/4294967296)>>>0,o,i+r);else{var u=Math.floor(Math.log(n)/Math.LN2);1024===u&&(u=1023),e(4503599627370496*(s=n*Math.pow(2,-u))>>>0,o,i+t),e((a<<31|u+1023<<20|1048576*s&1048575)>>>0,o,i+r)}}}function r(e,t,r,n,o){var i=e(n,o+t),a=e(n,o+r),s=2*(a>>31)+1,u=a>>>20&2047,l=4294967296*(1048575&a)+i;return 2047===u?l?NaN:s*(1/0):0===u?5e-324*s*l:s*Math.pow(2,u-1075)*(l+4503599627370496)}e.writeDoubleLE=t.bind(null,writeUintLE,0,4),e.writeDoubleBE=t.bind(null,writeUintBE,4,0),e.readDoubleLE=r.bind(null,readUintLE,0,4),e.readDoubleBE=r.bind(null,readUintBE,4,0)}(),e}function writeUintLE(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}function writeUintBE(e,t,r){t[r]=e>>>24,t[r+1]=e>>>16&255,t[r+2]=e>>>8&255,t[r+3]=255&e}function readUintLE(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function readUintBE(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}var inquire_1=inquire$1;function inquire$1(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}var utf8$2={};!function(e){var t=e;t.length=function(e){for(var t=0,r=0,n=0;n<e.length;++n)(r=e.charCodeAt(n))<128?t+=1:r<2048?t+=2:55296==(64512&r)&&56320==(64512&e.charCodeAt(n+1))?(++n,t+=4):t+=3;return t},t.read=function(e,t,r){if(r-t<1)return"";for(var n,o=null,i=[],a=0;t<r;)(n=e[t++])<128?i[a++]=n:n>191&&n<224?i[a++]=(31&n)<<6|63&e[t++]:n>239&&n<365?(n=((7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,i[a++]=55296+(n>>10),i[a++]=56320+(1023&n)):i[a++]=(15&n)<<12|(63&e[t++])<<6|63&e[t++],a>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),a=0);return o?(a&&o.push(String.fromCharCode.apply(String,i.slice(0,a))),o.join("")):String.fromCharCode.apply(String,i.slice(0,a))},t.write=function(e,t,r){for(var n,o,i=r,a=0;a<e.length;++a)(n=e.charCodeAt(a))<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&56320==(64512&(o=e.charCodeAt(a+1)))?(n=65536+((1023&n)<<10)+(1023&o),++a,t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128);return r-i}}(utf8$2);var pool_1=pool,longbits,hasRequiredLongbits,hasRequiredMinimal;function pool(e,t,r){var n=r||8192,o=n>>>1,i=null,a=n;return function(r){if(r<1||r>o)return e(r);a+r>n&&(i=e(n),a=0);var s=t.call(i,a,a+=r);return 7&a&&(a=1+(7|a)),s}}function requireLongbits(){if(hasRequiredLongbits)return longbits;hasRequiredLongbits=1,longbits=t;var e=requireMinimal();function t(e,t){this.lo=e>>>0,this.hi=t>>>0}var r=t.zero=new t(0,0);r.toNumber=function(){return 0},r.zzEncode=r.zzDecode=function(){return this},r.length=function(){return 1};var n=t.zeroHash="\0\0\0\0\0\0\0\0";t.fromNumber=function(e){if(0===e)return r;var n=e<0;n&&(e=-e);var o=e>>>0,i=(e-o)/4294967296>>>0;return n&&(i=~i>>>0,o=~o>>>0,++o>4294967295&&(o=0,++i>4294967295&&(i=0))),new t(o,i)},t.from=function(n){if("number"==typeof n)return t.fromNumber(n);if(e.isString(n)){if(!e.Long)return t.fromNumber(parseInt(n,10));n=e.Long.fromString(n)}return n.low||n.high?new t(n.low>>>0,n.high>>>0):r},t.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=1+~this.lo>>>0,r=~this.hi>>>0;return t||(r=r+1>>>0),-(t+4294967296*r)}return this.lo+4294967296*this.hi},t.prototype.toLong=function(t){return e.Long?new e.Long(0|this.lo,0|this.hi,Boolean(t)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(t)}};var o=String.prototype.charCodeAt;return t.fromHash=function(e){return e===n?r:new t((o.call(e,0)|o.call(e,1)<<8|o.call(e,2)<<16|o.call(e,3)<<24)>>>0,(o.call(e,4)|o.call(e,5)<<8|o.call(e,6)<<16|o.call(e,7)<<24)>>>0)},t.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},t.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},t.prototype.zzDecode=function(){var e=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},t.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return 0===r?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:r<128?9:10},longbits}function requireMinimal(){return hasRequiredMinimal||(hasRequiredMinimal=1,function(e){var t=e;function r(e,t,r){for(var n=Object.keys(t),o=0;o<n.length;++o)void 0!==e[n[o]]&&r||(e[n[o]]=t[n[o]]);return e}function n(e){function t(e,n){if(!(this instanceof t))return new t(e,n);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),n&&r(this,n)}return t.prototype=Object.create(Error.prototype,{constructor:{value:t,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return e},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),t}t.asPromise=aspromise,t.base64=base64$1,t.EventEmitter=eventemitter,t.float=float,t.inquire=inquire_1,t.utf8=utf8$2,t.pool=pool_1,t.LongBits=requireLongbits(),t.isNode=Boolean(void 0!==commonjsGlobal&&commonjsGlobal&&commonjsGlobal.process&&commonjsGlobal.process.versions&&commonjsGlobal.process.versions.node),t.global=t.isNode&&commonjsGlobal||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||commonjsGlobal,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.isString=function(e){return"string"==typeof e||e instanceof String},t.isObject=function(e){return e&&"object"===_typeof(e)},t.isset=t.isSet=function(e,t){var r=e[t];return!(null==r||!e.hasOwnProperty(t))&&("object"!==_typeof(r)||(Array.isArray(r)?r.length:Object.keys(r).length)>0)},t.Buffer=function(){try{var e=t.inquire("buffer").Buffer;return e.prototype.utf8Write?e:null}catch(e){return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(e){return"number"==typeof e?t.Buffer?t._Buffer_allocUnsafe(e):new t.Array(e):t.Buffer?t._Buffer_from(e):"undefined"==typeof Uint8Array?e:new Uint8Array(e)},t.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(e){return e?t.LongBits.from(e).toHash():t.LongBits.zeroHash},t.longFromHash=function(e,r){var n=t.LongBits.fromHash(e);return t.Long?t.Long.fromBits(n.lo,n.hi,r):n.toNumber(Boolean(r))},t.merge=r,t.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)},t.newError=n,t.ProtocolError=n("ProtocolError"),t.oneOfGetter=function(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=1;return function(){for(var e=Object.keys(this),r=e.length-1;r>-1;--r)if(1===t[e[r]]&&void 0!==this[e[r]]&&null!==this[e[r]])return e[r]}},t.oneOfSetter=function(e){return function(t){for(var r=0;r<e.length;++r)e[r]!==t&&delete this[e[r]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var e=t.Buffer;e?(t._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,r){return new e(t,r)},t._Buffer_allocUnsafe=e.allocUnsafe||function(t){return new e(t)}):t._Buffer_from=t._Buffer_allocUnsafe=null}}(minimal)),minimal}var writer=Writer$1,util$6=requireMinimal(),BufferWriter$1,LongBits$1=util$6.LongBits,base64=util$6.base64,utf8$1=util$6.utf8;function Op(e,t,r){this.fn=e,this.len=t,this.next=void 0,this.val=r}function noop(){}function State(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states}function Writer$1(){this.len=0,this.head=new Op(noop,0,0),this.tail=this.head,this.states=null}var create$1=function(){return util$6.Buffer?function(){return(Writer$1.create=function(){return new BufferWriter$1})()}:function(){return new Writer$1}};function writeByte(e,t,r){t[r]=255&e}function writeVarint32(e,t,r){for(;e>127;)t[r++]=127&e|128,e>>>=7;t[r]=e}function VarintOp(e,t){this.len=e,this.next=void 0,this.val=t}function writeVarint64(e,t,r){for(;e.hi;)t[r++]=127&e.lo|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[r++]=127&e.lo|128,e.lo=e.lo>>>7;t[r++]=e.lo}function writeFixed32(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}Writer$1.create=create$1(),Writer$1.alloc=function(e){return new util$6.Array(e)},util$6.Array!==Array&&(Writer$1.alloc=util$6.pool(Writer$1.alloc,util$6.Array.prototype.subarray)),Writer$1.prototype._push=function(e,t,r){return this.tail=this.tail.next=new Op(e,t,r),this.len+=t,this},VarintOp.prototype=Object.create(Op.prototype),VarintOp.prototype.fn=writeVarint32,Writer$1.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new VarintOp((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this},Writer$1.prototype.int32=function(e){return e<0?this._push(writeVarint64,10,LongBits$1.fromNumber(e)):this.uint32(e)},Writer$1.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)},Writer$1.prototype.uint64=function(e){var t=LongBits$1.from(e);return this._push(writeVarint64,t.length(),t)},Writer$1.prototype.int64=Writer$1.prototype.uint64,Writer$1.prototype.sint64=function(e){var t=LongBits$1.from(e).zzEncode();return this._push(writeVarint64,t.length(),t)},Writer$1.prototype.bool=function(e){return this._push(writeByte,1,e?1:0)},Writer$1.prototype.fixed32=function(e){return this._push(writeFixed32,4,e>>>0)},Writer$1.prototype.sfixed32=Writer$1.prototype.fixed32,Writer$1.prototype.fixed64=function(e){var t=LongBits$1.from(e);return this._push(writeFixed32,4,t.lo)._push(writeFixed32,4,t.hi)},Writer$1.prototype.sfixed64=Writer$1.prototype.fixed64,Writer$1.prototype.float=function(e){return this._push(util$6.float.writeFloatLE,4,e)},Writer$1.prototype.double=function(e){return this._push(util$6.float.writeDoubleLE,8,e)};var writeBytes=util$6.Array.prototype.set?function(e,t,r){t.set(e,r)}:function(e,t,r){for(var n=0;n<e.length;++n)t[r+n]=e[n]};Writer$1.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(writeByte,1,0);if(util$6.isString(e)){var r=Writer$1.alloc(t=base64.length(e));base64.decode(e,r,0),e=r}return this.uint32(t)._push(writeBytes,t,e)},Writer$1.prototype.string=function(e){var t=utf8$1.length(e);return t?this.uint32(t)._push(utf8$1.write,t,e):this._push(writeByte,1,0)},Writer$1.prototype.fork=function(){return this.states=new State(this),this.head=this.tail=new Op(noop,0,0),this.len=0,this},Writer$1.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new Op(noop,0,0),this.len=0),this},Writer$1.prototype.ldelim=function(){var e=this.head,t=this.tail,r=this.len;return this.reset().uint32(r),r&&(this.tail.next=e.next,this.tail=t,this.len+=r),this},Writer$1.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),r=0;e;)e.fn(e.val,t,r),r+=e.len,e=e.next;return t},Writer$1._configure=function(e){BufferWriter$1=e,Writer$1.create=create$1(),BufferWriter$1._configure()};var writer_buffer=BufferWriter,Writer=writer;(BufferWriter.prototype=Object.create(Writer.prototype)).constructor=BufferWriter;var util$5=requireMinimal();function BufferWriter(){Writer.call(this)}function writeStringBuffer(e,t,r){e.length<40?util$5.utf8.write(e,t,r):t.utf8Write?t.utf8Write(e,r):t.write(e,r)}BufferWriter._configure=function(){BufferWriter.alloc=util$5._Buffer_allocUnsafe,BufferWriter.writeBytesBuffer=util$5.Buffer&&util$5.Buffer.prototype instanceof Uint8Array&&"set"===util$5.Buffer.prototype.set.name?function(e,t,r){t.set(e,r)}:function(e,t,r){if(e.copy)e.copy(t,r,0,e.length);else for(var n=0;n<e.length;)t[r++]=e[n++]}},BufferWriter.prototype.bytes=function(e){util$5.isString(e)&&(e=util$5._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(BufferWriter.writeBytesBuffer,t,e),this},BufferWriter.prototype.string=function(e){var t=util$5.Buffer.byteLength(e);return this.uint32(t),t&&this._push(writeStringBuffer,t,e),this},BufferWriter._configure();var reader=Reader$1,util$4=requireMinimal(),BufferReader$1,LongBits=util$4.LongBits,utf8=util$4.utf8;function indexOutOfRange(e,t){return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)}function Reader$1(e){this.buf=e,this.pos=0,this.len=e.length}var create_array="undefined"!=typeof Uint8Array?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new Reader$1(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new Reader$1(e);throw Error("illegal buffer")},create=function(){return util$4.Buffer?function(e){return(Reader$1.create=function(e){return util$4.Buffer.isBuffer(e)?new BufferReader$1(e):create_array(e)})(e)}:create_array},value;function readLongVarint(){var e=new LongBits(0,0),t=0;if(!(this.len-this.pos>4)){for(;t<3;++t){if(this.pos>=this.len)throw indexOutOfRange(this);if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(127&this.buf[this.pos++])<<7*t)>>>0,e}for(;t<4;++t)if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(127&this.buf[this.pos])<<28)>>>0,e.hi=(e.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return e;if(t=0,this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw indexOutOfRange(this);if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}throw Error("invalid varint encoding")}function readFixed32_end(e,t){return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}function readFixed64(){if(this.pos+8>this.len)throw indexOutOfRange(this,8);return new LongBits(readFixed32_end(this.buf,this.pos+=4),readFixed32_end(this.buf,this.pos+=4))}Reader$1.create=create(),Reader$1.prototype._slice=util$4.Array.prototype.subarray||util$4.Array.prototype.slice,Reader$1.prototype.uint32=(value=4294967295,function(){if(value=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return value;if(value=(value|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return value;if(value=(value|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return value;if(value=(value|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return value;if(value=(value|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return value;if((this.pos+=5)>this.len)throw this.pos=this.len,indexOutOfRange(this,10);return value}),Reader$1.prototype.int32=function(){return 0|this.uint32()},Reader$1.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(1&e)|0},Reader$1.prototype.bool=function(){return 0!==this.uint32()},Reader$1.prototype.fixed32=function(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);return readFixed32_end(this.buf,this.pos+=4)},Reader$1.prototype.sfixed32=function(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);return 0|readFixed32_end(this.buf,this.pos+=4)},Reader$1.prototype.float=function(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);var e=util$4.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e},Reader$1.prototype.double=function(){if(this.pos+8>this.len)throw indexOutOfRange(this,4);var e=util$4.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e},Reader$1.prototype.bytes=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw indexOutOfRange(this,e);return this.pos+=e,Array.isArray(this.buf)?this.buf.slice(t,r):t===r?new this.buf.constructor(0):this._slice.call(this.buf,t,r)},Reader$1.prototype.string=function(){var e=this.bytes();return utf8.read(e,0,e.length)},Reader$1.prototype.skip=function(e){if("number"==typeof e){if(this.pos+e>this.len)throw indexOutOfRange(this,e);this.pos+=e}else do{if(this.pos>=this.len)throw indexOutOfRange(this)}while(128&this.buf[this.pos++]);return this},Reader$1.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(e=7&this.uint32());)this.skipType(e);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+e+" at offset "+this.pos)}return this},Reader$1._configure=function(e){BufferReader$1=e,Reader$1.create=create(),BufferReader$1._configure();var t=util$4.Long?"toLong":"toNumber";util$4.merge(Reader$1.prototype,{int64:function(){return readLongVarint.call(this)[t](!1)},uint64:function(){return readLongVarint.call(this)[t](!0)},sint64:function(){return readLongVarint.call(this).zzDecode()[t](!1)},fixed64:function(){return readFixed64.call(this)[t](!0)},sfixed64:function(){return readFixed64.call(this)[t](!1)}})};var reader_buffer=BufferReader,Reader=reader;(BufferReader.prototype=Object.create(Reader.prototype)).constructor=BufferReader;var util$3=requireMinimal();function BufferReader(e){Reader.call(this,e)}BufferReader._configure=function(){util$3.Buffer&&(BufferReader.prototype._slice=util$3.Buffer.prototype.slice)},BufferReader.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))},BufferReader._configure();var rpc={},service$1=Service,util$2=requireMinimal(),exports;function Service(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");util$2.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r)}(Service.prototype=Object.create(util$2.EventEmitter.prototype)).constructor=Service,Service.prototype.rpcCall=function e(t,r,n,o,i){if(!o)throw TypeError("request must be specified");var a=this;if(!i)return util$2.asPromise(e,a,t,r,n,o);if(a.rpcImpl)try{return a.rpcImpl(t,r[a.requestDelimited?"encodeDelimited":"encode"](o).finish(),(function(e,r){if(e)return a.emit("error",e,t),i(e);if(null!==r){if(!(r instanceof n))try{r=n[a.responseDelimited?"decodeDelimited":"decode"](r)}catch(e){return a.emit("error",e,t),i(e)}return a.emit("data",r,t),i(null,r)}a.end(!0)}))}catch(e){return a.emit("error",e,t),void setTimeout((function(){i(e)}),0)}else setTimeout((function(){i(Error("already ended"))}),0)},Service.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this},exports=rpc,exports.Service=service$1;var roots={};!function(e){var t=e;function r(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}t.build="minimal",t.Writer=writer,t.BufferWriter=writer_buffer,t.Reader=reader,t.BufferReader=reader_buffer,t.util=requireMinimal(),t.rpc=rpc,t.roots=roots,t.configure=r,r()}(indexMinimal);var util$1={exports:{}},codegen_1=codegen;function codegen(e,t){"string"==typeof e&&(t=e,e=void 0);var r=[];function n(e){if("string"!=typeof e){var t=o();if(codegen.verbose&&console.log("codegen: "+t),t="return "+t,e){for(var i=Object.keys(e),a=new Array(i.length+1),s=new Array(i.length),u=0;u<i.length;)a[u]=i[u],s[u]=e[i[u++]];return a[u]=t,Function.apply(null,a).apply(null,s)}return Function(t)()}for(var l=new Array(arguments.length-1),c=0;c<l.length;)l[c]=arguments[++c];if(c=0,e=e.replace(/%([%dfijs])/g,(function(e,t){var r=l[c++];switch(t){case"d":case"f":return String(Number(r));case"i":return String(Math.floor(r));case"j":return JSON.stringify(r);case"s":return String(r)}return"%"})),c!==l.length)throw Error("parameter count mismatch");return r.push(e),n}function o(n){return"function "+(n||t||"")+"("+(e&&e.join(",")||"")+"){\n  "+r.join("\n  ")+"\n}"}return n.toString=o,n}codegen.verbose=!1;var fetch_1=fetch$1,asPromise=aspromise,inquire=inquire_1,fs=inquire("fs");function fetch$1(e,t,r){return"function"==typeof t?(r=t,t={}):t||(t={}),r?!t.xhr&&fs&&fs.readFile?fs.readFile(e,(function(n,o){return n&&"undefined"!=typeof XMLHttpRequest?fetch$1.xhr(e,t,r):n?r(n):r(null,t.binary?o:o.toString("utf8"))})):fetch$1.xhr(e,t,r):asPromise(fetch$1,this,e,t)}fetch$1.xhr=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(0!==n.status&&200!==n.status)return r(Error("status "+n.status));if(t.binary){var e=n.response;if(!e){e=[];for(var o=0;o<n.responseText.length;++o)e.push(255&n.responseText.charCodeAt(o))}return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(e):e)}return r(null,n.responseText)}},t.binary&&("overrideMimeType"in n&&n.overrideMimeType("text/plain; charset=x-user-defined"),n.responseType="arraybuffer"),n.open("GET",e),n.send()};var path={};!function(e){var t=e,r=t.isAbsolute=function(e){return/^(?:\/|\w+:)/.test(e)},n=t.normalize=function(e){var t=(e=e.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=r(e),o="";n&&(o=t.shift()+"/");for(var i=0;i<t.length;)".."===t[i]?i>0&&".."!==t[i-1]?t.splice(--i,2):n?t.splice(i,1):++i:"."===t[i]?t.splice(i,1):++i;return o+t.join("/")};t.resolve=function(e,t,o){return o||(t=n(t)),r(t)?t:(o||(e=n(e)),(e=e.replace(/(?:\/|^)[^/]+$/,"")).length?n(e+"/"+t):t)}}(path);var types={},hasRequiredTypes,field,hasRequiredField,oneof,hasRequiredOneof,namespace,hasRequiredNamespace,mapfield,hasRequiredMapfield,method,hasRequiredMethod,service,hasRequiredService;function requireTypes(){return hasRequiredTypes||(hasRequiredTypes=1,function(e){var t=e,r=requireUtil(),n=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function o(e,t){var r=0,o={};for(t|=0;r<e.length;)o[n[r+t]]=e[r++];return o}t.basic=o([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),t.defaults=o([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",r.emptyArray,null]),t.long=o([0,0,0,1,1],7),t.mapKey=o([0,0,0,5,5,0,0,0,1,1,0,2],2),t.packed=o([1,5,0,0,0,5,5,0,0,0,1,1,0])}(types)),types}function requireField(){if(hasRequiredField)return field;hasRequiredField=1,field=a;var e=requireObject();((a.prototype=Object.create(e.prototype)).constructor=a).className="Field";var t,r=require_enum(),n=requireTypes(),o=requireUtil(),i=/^required|optional|repeated$/;function a(t,r,a,s,u,l,c){if(o.isObject(s)?(c=u,l=s,s=u=void 0):o.isObject(u)&&(c=l,l=u,u=void 0),e.call(this,t,l),!o.isInteger(r)||r<0)throw TypeError("id must be a non-negative integer");if(!o.isString(a))throw TypeError("type must be a string");if(void 0!==s&&!i.test(s=s.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(void 0!==u&&!o.isString(u))throw TypeError("extend must be a string");"proto3_optional"===s&&(s="optional"),this.rule=s&&"optional"!==s?s:void 0,this.type=a,this.id=r,this.extend=u||void 0,this.required="required"===s,this.optional=!this.required,this.repeated="repeated"===s,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!o.Long&&void 0!==n.long[a],this.bytes="bytes"===a,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this._packed=null,this.comment=c}return a.fromJSON=function(e,t){return new a(e,t.id,t.type,t.rule,t.extend,t.options,t.comment)},Object.defineProperty(a.prototype,"packed",{get:function(){return null===this._packed&&(this._packed=!1!==this.getOption("packed")),this._packed}}),a.prototype.setOption=function(t,r,n){return"packed"===t&&(this._packed=null),e.prototype.setOption.call(this,t,r,n)},a.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return o.toObject(["rule","optional"!==this.rule&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:void 0])},a.prototype.resolve=function(){if(this.resolved)return this;if(void 0===(this.typeDefault=n.defaults[this.type])?(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof t?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof r&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(!0!==this.options.packed&&(void 0===this.options.packed||!this.resolvedType||this.resolvedType instanceof r)||delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long)this.typeDefault=o.Long.fromNumber(this.typeDefault,"u"===this.type.charAt(0)),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&"string"==typeof this.typeDefault){var i;o.base64.test(this.typeDefault)?o.base64.decode(this.typeDefault,i=o.newBuffer(o.base64.length(this.typeDefault)),0):o.utf8.write(this.typeDefault,i=o.newBuffer(o.utf8.length(this.typeDefault)),0),this.typeDefault=i}return this.map?this.defaultValue=o.emptyObject:this.repeated?this.defaultValue=o.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof t&&(this.parent.ctor.prototype[this.name]=this.defaultValue),e.prototype.resolve.call(this)},a.d=function(e,t,r,n){return"function"==typeof t?t=o.decorateType(t).name:t&&"object"===_typeof(t)&&(t=o.decorateEnum(t).name),function(i,s){o.decorateType(i.constructor).add(new a(s,e,t,r,{default:n}))}},a._configure=function(e){t=e},field}function requireOneof(){if(hasRequiredOneof)return oneof;hasRequiredOneof=1,oneof=n;var e=requireObject();((n.prototype=Object.create(e.prototype)).constructor=n).className="OneOf";var t=requireField(),r=requireUtil();function n(t,r,n,o){if(Array.isArray(r)||(n=r,r=void 0),e.call(this,t,n),void 0!==r&&!Array.isArray(r))throw TypeError("fieldNames must be an Array");this.oneof=r||[],this.fieldsArray=[],this.comment=o}function o(e){if(e.parent)for(var t=0;t<e.fieldsArray.length;++t)e.fieldsArray[t].parent||e.parent.add(e.fieldsArray[t])}return n.fromJSON=function(e,t){return new n(e,t.oneof,t.options,t.comment)},n.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return r.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:void 0])},n.prototype.add=function(e){if(!(e instanceof t))throw TypeError("field must be a Field");return e.parent&&e.parent!==this.parent&&e.parent.remove(e),this.oneof.push(e.name),this.fieldsArray.push(e),e.partOf=this,o(this),this},n.prototype.remove=function(e){if(!(e instanceof t))throw TypeError("field must be a Field");var r=this.fieldsArray.indexOf(e);if(r<0)throw Error(e+" is not a member of "+this);return this.fieldsArray.splice(r,1),(r=this.oneof.indexOf(e.name))>-1&&this.oneof.splice(r,1),e.partOf=null,this},n.prototype.onAdd=function(t){e.prototype.onAdd.call(this,t);for(var r=0;r<this.oneof.length;++r){var n=t.get(this.oneof[r]);n&&!n.partOf&&(n.partOf=this,this.fieldsArray.push(n))}o(this)},n.prototype.onRemove=function(t){for(var r,n=0;n<this.fieldsArray.length;++n)(r=this.fieldsArray[n]).parent&&r.parent.remove(r);e.prototype.onRemove.call(this,t)},n.d=function(){for(var e=new Array(arguments.length),t=0;t<arguments.length;)e[t]=arguments[t++];return function(t,o){r.decorateType(t.constructor).add(new n(o,e)),Object.defineProperty(t,o,{get:r.oneOfGetter(e),set:r.oneOfSetter(e)})}},oneof}function requireNamespace(){if(hasRequiredNamespace)return namespace;hasRequiredNamespace=1,namespace=u;var e=requireObject();((u.prototype=Object.create(e.prototype)).constructor=u).className="Namespace";var t,r,n,o=requireField(),i=requireUtil(),a=requireOneof();function s(e,t){if(e&&e.length){for(var r={},n=0;n<e.length;++n)r[e[n].name]=e[n].toJSON(t);return r}}function u(t,r){e.call(this,t,r),this.nested=void 0,this._nestedArray=null}function l(e){return e._nestedArray=null,e}return u.fromJSON=function(e,t){return new u(e,t.options).addJSON(t.nested)},u.arrayToJSON=s,u.isReservedId=function(e,t){if(e)for(var r=0;r<e.length;++r)if("string"!=typeof e[r]&&e[r][0]<=t&&e[r][1]>t)return!0;return!1},u.isReservedName=function(e,t){if(e)for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1},Object.defineProperty(u.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=i.toArray(this.nested))}}),u.prototype.toJSON=function(e){return i.toObject(["options",this.options,"nested",s(this.nestedArray,e)])},u.prototype.addJSON=function(e){if(e)for(var i,a=Object.keys(e),s=0;s<a.length;++s)i=e[a[s]],this.add((void 0!==i.fields?t.fromJSON:void 0!==i.values?n.fromJSON:void 0!==i.methods?r.fromJSON:void 0!==i.id?o.fromJSON:u.fromJSON)(a[s],i));return this},u.prototype.get=function(e){return this.nested&&this.nested[e]||null},u.prototype.getEnum=function(e){if(this.nested&&this.nested[e]instanceof n)return this.nested[e].values;throw Error("no such enum: "+e)},u.prototype.add=function(e){if(!(e instanceof o&&void 0!==e.extend||e instanceof t||e instanceof a||e instanceof n||e instanceof r||e instanceof u))throw TypeError("object must be a valid nested object");if(this.nested){var i=this.get(e.name);if(i){if(!(i instanceof u&&e instanceof u)||i instanceof t||i instanceof r)throw Error("duplicate name '"+e.name+"' in "+this);for(var s=i.nestedArray,c=0;c<s.length;++c)e.add(s[c]);this.remove(i),this.nested||(this.nested={}),e.setOptions(i.options,!0)}}else this.nested={};return this.nested[e.name]=e,e.onAdd(this),l(this)},u.prototype.remove=function(t){if(!(t instanceof e))throw TypeError("object must be a ReflectionObject");if(t.parent!==this)throw Error(t+" is not a member of "+this);return delete this.nested[t.name],Object.keys(this.nested).length||(this.nested=void 0),t.onRemove(this),l(this)},u.prototype.define=function(e,t){if(i.isString(e))e=e.split(".");else if(!Array.isArray(e))throw TypeError("illegal path");if(e&&e.length&&""===e[0])throw Error("path must be relative");for(var r=this;e.length>0;){var n=e.shift();if(r.nested&&r.nested[n]){if(!((r=r.nested[n])instanceof u))throw Error("path conflicts with non-namespace objects")}else r.add(r=new u(n))}return t&&r.addJSON(t),r},u.prototype.resolveAll=function(){for(var e=this.nestedArray,t=0;t<e.length;)e[t]instanceof u?e[t++].resolveAll():e[t++].resolve();return this.resolve()},u.prototype.lookup=function(e,t,r){if("boolean"==typeof t?(r=t,t=void 0):t&&!Array.isArray(t)&&(t=[t]),i.isString(e)&&e.length){if("."===e)return this.root;e=e.split(".")}else if(!e.length)return this;if(""===e[0])return this.root.lookup(e.slice(1),t);var n=this.get(e[0]);if(n){if(1===e.length){if(!t||t.indexOf(n.constructor)>-1)return n}else if(n instanceof u&&(n=n.lookup(e.slice(1),t,!0)))return n}else for(var o=0;o<this.nestedArray.length;++o)if(this._nestedArray[o]instanceof u&&(n=this._nestedArray[o].lookup(e,t,!0)))return n;return null===this.parent||r?null:this.parent.lookup(e,t)},u.prototype.lookupType=function(e){var r=this.lookup(e,[t]);if(!r)throw Error("no such type: "+e);return r},u.prototype.lookupEnum=function(e){var t=this.lookup(e,[n]);if(!t)throw Error("no such Enum '"+e+"' in "+this);return t},u.prototype.lookupTypeOrEnum=function(e){var r=this.lookup(e,[t,n]);if(!r)throw Error("no such Type or Enum '"+e+"' in "+this);return r},u.prototype.lookupService=function(e){var t=this.lookup(e,[r]);if(!t)throw Error("no such Service '"+e+"' in "+this);return t},u._configure=function(e,o,i){t=e,r=o,n=i},namespace}function requireMapfield(){if(hasRequiredMapfield)return mapfield;hasRequiredMapfield=1,mapfield=n;var e=requireField();((n.prototype=Object.create(e.prototype)).constructor=n).className="MapField";var t=requireTypes(),r=requireUtil();function n(t,n,o,i,a,s){if(e.call(this,t,n,i,void 0,void 0,a,s),!r.isString(o))throw TypeError("keyType must be a string");this.keyType=o,this.resolvedKeyType=null,this.map=!0}return n.fromJSON=function(e,t){return new n(e,t.id,t.keyType,t.type,t.options,t.comment)},n.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return r.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:void 0])},n.prototype.resolve=function(){if(this.resolved)return this;if(void 0===t.mapKey[this.keyType])throw Error("invalid key type: "+this.keyType);return e.prototype.resolve.call(this)},n.d=function(e,t,o){return"function"==typeof o?o=r.decorateType(o).name:o&&"object"===_typeof(o)&&(o=r.decorateEnum(o).name),function(i,a){r.decorateType(i.constructor).add(new n(a,e,t,o))}},mapfield}function requireMethod(){if(hasRequiredMethod)return method;hasRequiredMethod=1,method=r;var e=requireObject();((r.prototype=Object.create(e.prototype)).constructor=r).className="Method";var t=requireUtil();function r(r,n,o,i,a,s,u,l,c){if(t.isObject(a)?(u=a,a=s=void 0):t.isObject(s)&&(u=s,s=void 0),void 0!==n&&!t.isString(n))throw TypeError("type must be a string");if(!t.isString(o))throw TypeError("requestType must be a string");if(!t.isString(i))throw TypeError("responseType must be a string");e.call(this,r,u),this.type=n||"rpc",this.requestType=o,this.requestStream=!!a||void 0,this.responseType=i,this.responseStream=!!s||void 0,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=l,this.parsedOptions=c}return r.fromJSON=function(e,t){return new r(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment,t.parsedOptions)},r.prototype.toJSON=function(e){var r=!!e&&Boolean(e.keepComments);return t.toObject(["type","rpc"!==this.type&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",r?this.comment:void 0,"parsedOptions",this.parsedOptions])},r.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),e.prototype.resolve.call(this))},method}function requireService(){if(hasRequiredService)return service;hasRequiredService=1,service=o;var e=requireNamespace();((o.prototype=Object.create(e.prototype)).constructor=o).className="Service";var t=requireMethod(),r=requireUtil(),n=rpc;function o(t,r){e.call(this,t,r),this.methods={},this._methodsArray=null}function i(e){return e._methodsArray=null,e}return o.fromJSON=function(e,r){var n=new o(e,r.options);if(r.methods)for(var i=Object.keys(r.methods),a=0;a<i.length;++a)n.add(t.fromJSON(i[a],r.methods[i[a]]));return r.nested&&n.addJSON(r.nested),n.comment=r.comment,n},o.prototype.toJSON=function(t){var n=e.prototype.toJSON.call(this,t),o=!!t&&Boolean(t.keepComments);return r.toObject(["options",n&&n.options||void 0,"methods",e.arrayToJSON(this.methodsArray,t)||{},"nested",n&&n.nested||void 0,"comment",o?this.comment:void 0])},Object.defineProperty(o.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=r.toArray(this.methods))}}),o.prototype.get=function(t){return this.methods[t]||e.prototype.get.call(this,t)},o.prototype.resolveAll=function(){for(var t=this.methodsArray,r=0;r<t.length;++r)t[r].resolve();return e.prototype.resolve.call(this)},o.prototype.add=function(r){if(this.get(r.name))throw Error("duplicate name '"+r.name+"' in "+this);return r instanceof t?(this.methods[r.name]=r,r.parent=this,i(this)):e.prototype.add.call(this,r)},o.prototype.remove=function(r){if(r instanceof t){if(this.methods[r.name]!==r)throw Error(r+" is not a member of "+this);return delete this.methods[r.name],r.parent=null,i(this)}return e.prototype.remove.call(this,r)},o.prototype.create=function(e,t,o){for(var i,a=new n.Service(e,t,o),s=0;s<this.methodsArray.length;++s){var u=r.lcFirst((i=this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g,"");a[u]=r.codegen(["r","c"],r.isReserved(u)?u+"_":u)("return this.rpcCall(m,q,s,r,c)")({m:i,q:i.resolvedRequestType.ctor,s:i.resolvedResponseType.ctor})}return a},service}var message=Message,util=requireMinimal(),decoder_1,hasRequiredDecoder,verifier_1,hasRequiredVerifier;function Message(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)this[t[r]]=e[t[r]]}function requireDecoder(){if(hasRequiredDecoder)return decoder_1;hasRequiredDecoder=1,decoder_1=function(o){var i=r.codegen(["r","l"],o.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(o.fieldsArray.filter((function(e){return e.map})).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");o.group&&i("if((t&7)===4)")("break");i("switch(t>>>3){");for(var a=0;a<o.fieldsArray.length;++a){var s=o._fieldsArray[a].resolve(),u=s.resolvedType instanceof e?"int32":s.type,l="m"+r.safeProp(s.name);i("case %i: {",s.id),s.map?(i("if(%s===util.emptyObject)",l)("%s={}",l)("var c2 = r.uint32()+r.pos"),void 0!==t.defaults[s.keyType]?i("k=%j",t.defaults[s.keyType]):i("k=null"),void 0!==t.defaults[u]?i("value=%j",t.defaults[u]):i("value=null"),i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",s.keyType)("case 2:"),void 0===t.basic[u]?i("value=types[%i].decode(r,r.uint32())",a):i("value=r.%s()",u),i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),void 0!==t.long[s.keyType]?i('%s[typeof k==="object"?util.longToHash(k):k]=value',l):i("%s[k]=value",l)):s.repeated?(i("if(!(%s&&%s.length))",l,l)("%s=[]",l),void 0!==t.packed[u]&&i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",l,u)("}else"),void 0===t.basic[u]?i(s.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",l,a):i("%s.push(r.%s())",l,u)):void 0===t.basic[u]?i(s.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",l,a):i("%s=r.%s()",l,u),i("break")("}")}for(i("default:")("r.skipType(t&7)")("break")("}")("}"),a=0;a<o._fieldsArray.length;++a){var c=o._fieldsArray[a];c.required&&i("if(!m.hasOwnProperty(%j))",c.name)("throw util.ProtocolError(%j,{instance:m})",n(c))}return i("return m")};var e=require_enum(),t=requireTypes(),r=requireUtil();function n(e){return"missing required '"+e.name+"'"}return decoder_1}function requireVerifier(){if(hasRequiredVerifier)return verifier_1;hasRequiredVerifier=1,verifier_1=function(e){var i=t.codegen(["m"],e.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),a=e.oneofsArray,s={};a.length&&i("var p={}");for(var u=0;u<e.fieldsArray.length;++u){var l=e._fieldsArray[u].resolve(),c="m"+t.safeProp(l.name);if(l.optional&&i("if(%s!=null&&m.hasOwnProperty(%j)){",c,l.name),l.map)i("if(!util.isObject(%s))",c)("return%j",r(l,"object"))("var k=Object.keys(%s)",c)("for(var i=0;i<k.length;++i){"),o(i,l,"k[i]"),n(i,l,u,c+"[k[i]]")("}");else if(l.repeated)i("if(!Array.isArray(%s))",c)("return%j",r(l,"array"))("for(var i=0;i<%s.length;++i){",c),n(i,l,u,c+"[i]")("}");else{if(l.partOf){var f=t.safeProp(l.partOf.name);1===s[l.partOf.name]&&i("if(p%s===1)",f)("return%j",l.partOf.name+": multiple values"),s[l.partOf.name]=1,i("p%s=1",f)}n(i,l,u,c)}l.optional&&i("}")}return i("return null")};var e=require_enum(),t=requireUtil();function r(e,t){return e.name+": "+t+(e.repeated&&"array"!==t?"[]":e.map&&"object"!==t?"{k:"+e.keyType+"}":"")+" expected"}function n(t,n,o,i){if(n.resolvedType)if(n.resolvedType instanceof e){t("switch(%s){",i)("default:")("return%j",r(n,"enum value"));for(var a=Object.keys(n.resolvedType.values),s=0;s<a.length;++s)t("case %i:",n.resolvedType.values[a[s]]);t("break")("}")}else t("{")("var e=types[%i].verify(%s);",o,i)("if(e)")("return%j+e",n.name+".")("}");else switch(n.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.isInteger(%s))",i)("return%j",r(n,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",i,i,i,i)("return%j",r(n,"integer|Long"));break;case"float":case"double":t('if(typeof %s!=="number")',i)("return%j",r(n,"number"));break;case"bool":t('if(typeof %s!=="boolean")',i)("return%j",r(n,"boolean"));break;case"string":t("if(!util.isString(%s))",i)("return%j",r(n,"string"));break;case"bytes":t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',i,i,i)("return%j",r(n,"buffer"))}return t}function o(e,t,n){switch(t.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":e("if(!util.key32Re.test(%s))",n)("return%j",r(t,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":e("if(!util.key64Re.test(%s))",n)("return%j",r(t,"integer|Long key"));break;case"bool":e("if(!util.key2Re.test(%s))",n)("return%j",r(t,"boolean key"))}return e}return verifier_1}Message.create=function(e){return this.$type.create(e)},Message.encode=function(e,t){return this.$type.encode(e,t)},Message.encodeDelimited=function(e,t){return this.$type.encodeDelimited(e,t)},Message.decode=function(e){return this.$type.decode(e)},Message.decodeDelimited=function(e){return this.$type.decodeDelimited(e)},Message.verify=function(e){return this.$type.verify(e)},Message.fromObject=function(e){return this.$type.fromObject(e)},Message.toObject=function(e,t){return this.$type.toObject(e,t)},Message.prototype.toJSON=function(){return this.$type.toObject(this,util.toJSONOptions)};var converter={},hasRequiredConverter;function requireConverter(){return hasRequiredConverter||(hasRequiredConverter=1,function(e){var t=e,r=require_enum(),n=requireUtil();function o(e,t,n,o){var i=!1;if(t.resolvedType)if(t.resolvedType instanceof r){e("switch(d%s){",o);for(var a=t.resolvedType.values,s=Object.keys(a),u=0;u<s.length;++u)a[s[u]]!==t.typeDefault||i||(e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}',o,o,o),t.repeated||e("break"),i=!0),e("case%j:",s[u])("case %i:",a[s[u]])("m%s=%j",o,a[s[u]])("break");e("}")}else e('if(typeof d%s!=="object")',o)("throw TypeError(%j)",t.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",o,n,o);else{var l=!1;switch(t.type){case"double":case"float":e("m%s=Number(d%s)",o,o);break;case"uint32":case"fixed32":e("m%s=d%s>>>0",o,o);break;case"int32":case"sint32":case"sfixed32":e("m%s=d%s|0",o,o);break;case"uint64":l=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",o,o,l)('else if(typeof d%s==="string")',o)("m%s=parseInt(d%s,10)",o,o)('else if(typeof d%s==="number")',o)("m%s=d%s",o,o)('else if(typeof d%s==="object")',o)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",o,o,o,l?"true":"");break;case"bytes":e('if(typeof d%s==="string")',o)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",o,o,o)("else if(d%s.length >= 0)",o)("m%s=d%s",o,o);break;case"string":e("m%s=String(d%s)",o,o);break;case"bool":e("m%s=Boolean(d%s)",o,o)}}return e}function i(e,t,n,o){if(t.resolvedType)t.resolvedType instanceof r?e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",o,n,o,o,n,o,o):e("d%s=types[%i].toObject(m%s,o)",o,n,o);else{var i=!1;switch(t.type){case"double":case"float":e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",o,o,o,o);break;case"uint64":i=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":e('if(typeof m%s==="number")',o)("d%s=o.longs===String?String(m%s):m%s",o,o,o)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",o,o,o,o,i?"true":"",o);break;case"bytes":e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",o,o,o,o,o);break;default:e("d%s=m%s",o,o)}}return e}t.fromObject=function(e){var t=e.fieldsArray,i=n.codegen(["d"],e.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!t.length)return i("return new this.ctor");i("var m=new this.ctor");for(var a=0;a<t.length;++a){var s=t[a].resolve(),u=n.safeProp(s.name);s.map?(i("if(d%s){",u)('if(typeof d%s!=="object")',u)("throw TypeError(%j)",s.fullName+": object expected")("m%s={}",u)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",u),o(i,s,a,u+"[ks[i]]")("}")("}")):s.repeated?(i("if(d%s){",u)("if(!Array.isArray(d%s))",u)("throw TypeError(%j)",s.fullName+": array expected")("m%s=[]",u)("for(var i=0;i<d%s.length;++i){",u),o(i,s,a,u+"[i]")("}")("}")):(s.resolvedType instanceof r||i("if(d%s!=null){",u),o(i,s,a,u),s.resolvedType instanceof r||i("}"))}return i("return m")},t.toObject=function(e){var t=e.fieldsArray.slice().sort(n.compareFieldsById);if(!t.length)return n.codegen()("return {}");for(var o=n.codegen(["m","o"],e.name+"$toObject")("if(!o)")("o={}")("var d={}"),a=[],s=[],u=[],l=0;l<t.length;++l)t[l].partOf||(t[l].resolve().repeated?a:t[l].map?s:u).push(t[l]);if(a.length){for(o("if(o.arrays||o.defaults){"),l=0;l<a.length;++l)o("d%s=[]",n.safeProp(a[l].name));o("}")}if(s.length){for(o("if(o.objects||o.defaults){"),l=0;l<s.length;++l)o("d%s={}",n.safeProp(s[l].name));o("}")}if(u.length){for(o("if(o.defaults){"),l=0;l<u.length;++l){var c=u[l],f=n.safeProp(c.name);if(c.resolvedType instanceof r)o("d%s=o.enums===String?%j:%j",f,c.resolvedType.valuesById[c.typeDefault],c.typeDefault);else if(c.long)o("if(util.Long){")("var n=new util.Long(%i,%i,%j)",c.typeDefault.low,c.typeDefault.high,c.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",f)("}else")("d%s=o.longs===String?%j:%i",f,c.typeDefault.toString(),c.typeDefault.toNumber());else if(c.bytes){var p="["+Array.prototype.slice.call(c.typeDefault).join(",")+"]";o("if(o.bytes===String)d%s=%j",f,String.fromCharCode.apply(String,c.typeDefault))("else{")("d%s=%s",f,p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",f,f)("}")}else o("d%s=%j",f,c.typeDefault)}o("}")}var d=!1;for(l=0;l<t.length;++l){c=t[l];var h=e._fieldsArray.indexOf(c);f=n.safeProp(c.name);c.map?(d||(d=!0,o("var ks2")),o("if(m%s&&(ks2=Object.keys(m%s)).length){",f,f)("d%s={}",f)("for(var j=0;j<ks2.length;++j){"),i(o,c,h,f+"[ks2[j]]")("}")):c.repeated?(o("if(m%s&&m%s.length){",f,f)("d%s=[]",f)("for(var j=0;j<m%s.length;++j){",f),i(o,c,h,f+"[j]")("}")):(o("if(m%s!=null&&m.hasOwnProperty(%j)){",f,c.name),i(o,c,h,f),c.partOf&&o("if(o.oneofs)")("d%s=%j",n.safeProp(c.partOf.name),c.name)),o("}")}return o("return d")}}(converter)),converter}var wrappers={},type,hasRequiredType,root,hasRequiredRoot,hasRequiredUtil,object,hasRequiredObject,_enum,hasRequired_enum,encoder_1,hasRequiredEncoder;function requireType(){if(hasRequiredType)return type;hasRequiredType=1,type=v;var e=requireNamespace();((v.prototype=Object.create(e.prototype)).constructor=v).className="Type";var t=require_enum(),r=requireOneof(),n=requireField(),o=requireMapfield(),i=requireService(),a=message,s=reader,u=writer,l=requireUtil(),c=requireEncoder(),f=requireDecoder(),p=requireVerifier(),d=requireConverter(),h=wrappers;function v(t,r){e.call(this,t,r),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null}function y(e){return e._fieldsById=e._fieldsArray=e._oneofsArray=null,delete e.encode,delete e.decode,delete e.verify,e}return Object.defineProperties(v.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var e=Object.keys(this.fields),t=0;t<e.length;++t){var r=this.fields[e[t]],n=r.id;if(this._fieldsById[n])throw Error("duplicate id "+n+" in "+this);this._fieldsById[n]=r}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=l.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=l.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=v.generateConstructor(this)())},set:function(e){var t=e.prototype;t instanceof a||((e.prototype=new a).constructor=e,l.merge(e.prototype,t)),e.$type=e.prototype.$type=this,l.merge(e,a,!0),this._ctor=e;for(var r=0;r<this.fieldsArray.length;++r)this._fieldsArray[r].resolve();var n={};for(r=0;r<this.oneofsArray.length;++r)n[this._oneofsArray[r].resolve().name]={get:l.oneOfGetter(this._oneofsArray[r].oneof),set:l.oneOfSetter(this._oneofsArray[r].oneof)};r&&Object.defineProperties(e.prototype,n)}}}),v.generateConstructor=function(e){for(var t,r=l.codegen(["p"],e.name),n=0;n<e.fieldsArray.length;++n)(t=e._fieldsArray[n]).map?r("this%s={}",l.safeProp(t.name)):t.repeated&&r("this%s=[]",l.safeProp(t.name));return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},v.fromJSON=function(a,s){var u=new v(a,s.options);u.extensions=s.extensions,u.reserved=s.reserved;for(var l=Object.keys(s.fields),c=0;c<l.length;++c)u.add((void 0!==s.fields[l[c]].keyType?o.fromJSON:n.fromJSON)(l[c],s.fields[l[c]]));if(s.oneofs)for(l=Object.keys(s.oneofs),c=0;c<l.length;++c)u.add(r.fromJSON(l[c],s.oneofs[l[c]]));if(s.nested)for(l=Object.keys(s.nested),c=0;c<l.length;++c){var f=s.nested[l[c]];u.add((void 0!==f.id?n.fromJSON:void 0!==f.fields?v.fromJSON:void 0!==f.values?t.fromJSON:void 0!==f.methods?i.fromJSON:e.fromJSON)(l[c],f))}return s.extensions&&s.extensions.length&&(u.extensions=s.extensions),s.reserved&&s.reserved.length&&(u.reserved=s.reserved),s.group&&(u.group=!0),s.comment&&(u.comment=s.comment),u},v.prototype.toJSON=function(t){var r=e.prototype.toJSON.call(this,t),n=!!t&&Boolean(t.keepComments);return l.toObject(["options",r&&r.options||void 0,"oneofs",e.arrayToJSON(this.oneofsArray,t),"fields",e.arrayToJSON(this.fieldsArray.filter((function(e){return!e.declaringField})),t)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"nested",r&&r.nested||void 0,"comment",n?this.comment:void 0])},v.prototype.resolveAll=function(){for(var t=this.fieldsArray,r=0;r<t.length;)t[r++].resolve();var n=this.oneofsArray;for(r=0;r<n.length;)n[r++].resolve();return e.prototype.resolveAll.call(this)},v.prototype.get=function(e){return this.fields[e]||this.oneofs&&this.oneofs[e]||this.nested&&this.nested[e]||null},v.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);if(t instanceof n&&void 0===t.extend){if(this._fieldsById?this._fieldsById[t.id]:this.fieldsById[t.id])throw Error("duplicate id "+t.id+" in "+this);if(this.isReservedId(t.id))throw Error("id "+t.id+" is reserved in "+this);if(this.isReservedName(t.name))throw Error("name '"+t.name+"' is reserved in "+this);return t.parent&&t.parent.remove(t),this.fields[t.name]=t,t.message=this,t.onAdd(this),y(this)}return t instanceof r?(this.oneofs||(this.oneofs={}),this.oneofs[t.name]=t,t.onAdd(this),y(this)):e.prototype.add.call(this,t)},v.prototype.remove=function(t){if(t instanceof n&&void 0===t.extend){if(!this.fields||this.fields[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.fields[t.name],t.parent=null,t.onRemove(this),y(this)}if(t instanceof r){if(!this.oneofs||this.oneofs[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.oneofs[t.name],t.parent=null,t.onRemove(this),y(this)}return e.prototype.remove.call(this,t)},v.prototype.isReservedId=function(t){return e.isReservedId(this.reserved,t)},v.prototype.isReservedName=function(t){return e.isReservedName(this.reserved,t)},v.prototype.create=function(e){return new this.ctor(e)},v.prototype.setup=function(){for(var e=this.fullName,t=[],r=0;r<this.fieldsArray.length;++r)t.push(this._fieldsArray[r].resolve().resolvedType);this.encode=c(this)({Writer:u,types:t,util:l}),this.decode=f(this)({Reader:s,types:t,util:l}),this.verify=p(this)({types:t,util:l}),this.fromObject=d.fromObject(this)({types:t,util:l}),this.toObject=d.toObject(this)({types:t,util:l});var n=h[e];if(n){var o=Object.create(this);o.fromObject=this.fromObject,this.fromObject=n.fromObject.bind(o),o.toObject=this.toObject,this.toObject=n.toObject.bind(o)}return this},v.prototype.encode=function(e,t){return this.setup().encode(e,t)},v.prototype.encodeDelimited=function(e,t){return this.encode(e,t&&t.len?t.fork():t).ldelim()},v.prototype.decode=function(e,t){return this.setup().decode(e,t)},v.prototype.decodeDelimited=function(e){return e instanceof s||(e=s.create(e)),this.decode(e,e.uint32())},v.prototype.verify=function(e){return this.setup().verify(e)},v.prototype.fromObject=function(e){return this.setup().fromObject(e)},v.prototype.toObject=function(e,t){return this.setup().toObject(e,t)},v.d=function(e){return function(t){l.decorateType(t,e)}},type}function requireRoot(){if(hasRequiredRoot)return root;hasRequiredRoot=1,root=u;var e=requireNamespace();((u.prototype=Object.create(e.prototype)).constructor=u).className="Root";var t,r,n,o=requireField(),i=require_enum(),a=requireOneof(),s=requireUtil();function u(t){e.call(this,"",t),this.deferred=[],this.files=[]}function l(){}u.fromJSON=function(e,t){return t||(t=new u),e.options&&t.setOptions(e.options),t.addJSON(e.nested)},u.prototype.resolvePath=s.path.resolve,u.prototype.fetch=s.fetch,u.prototype.load=function e(t,o,i){"function"==typeof o&&(i=o,o=void 0);var a=this;if(!i)return s.asPromise(e,a,t,o);var u=i===l;function c(e,t){if(i){var r=i;if(i=null,u)throw e;r(e,t)}}function f(e){var t=e.lastIndexOf("google/protobuf/");if(t>-1){var r=e.substring(t);if(r in n)return r}return null}function p(e,t){try{if(s.isString(t)&&"{"===t.charAt(0)&&(t=JSON.parse(t)),s.isString(t)){r.filename=e;var n,i=r(t,a,o),l=0;if(i.imports)for(;l<i.imports.length;++l)(n=f(i.imports[l])||a.resolvePath(e,i.imports[l]))&&d(n);if(i.weakImports)for(l=0;l<i.weakImports.length;++l)(n=f(i.weakImports[l])||a.resolvePath(e,i.weakImports[l]))&&d(n,!0)}else a.setOptions(t.options).addJSON(t.nested)}catch(e){c(e)}u||h||c(null,a)}function d(e,t){if(e=f(e)||e,!(a.files.indexOf(e)>-1))if(a.files.push(e),e in n)u?p(e,n[e]):(++h,setTimeout((function(){--h,p(e,n[e])})));else if(u){var r;try{r=s.fs.readFileSync(e).toString("utf8")}catch(e){return void(t||c(e))}p(e,r)}else++h,a.fetch(e,(function(r,n){--h,i&&(r?t?h||c(null,a):c(r):p(e,n))}))}var h=0;s.isString(t)&&(t=[t]);for(var v,y=0;y<t.length;++y)(v=a.resolvePath("",t[y]))&&d(v);if(u)return a;h||c(null,a)},u.prototype.loadSync=function(e,t){if(!s.isNode)throw Error("not supported");return this.load(e,t,l)},u.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map((function(e){return"'extend "+e.extend+"' in "+e.parent.fullName})).join(", "));return e.prototype.resolveAll.call(this)};var c=/^[A-Z]/;function f(e,t){var r=t.parent.lookup(t.extend);if(r){var n=new o(t.fullName,t.id,t.type,t.rule,void 0,t.options);return r.get(n.name)||(n.declaringField=t,t.extensionField=n,r.add(n)),!0}return!1}return u.prototype._handleAdd=function(e){if(e instanceof o)void 0===e.extend||e.extensionField||f(0,e)||this.deferred.push(e);else if(e instanceof i)c.test(e.name)&&(e.parent[e.name]=e.values);else if(!(e instanceof a)){if(e instanceof t)for(var r=0;r<this.deferred.length;)f(0,this.deferred[r])?this.deferred.splice(r,1):++r;for(var n=0;n<e.nestedArray.length;++n)this._handleAdd(e._nestedArray[n]);c.test(e.name)&&(e.parent[e.name]=e)}},u.prototype._handleRemove=function(t){if(t instanceof o){if(void 0!==t.extend)if(t.extensionField)t.extensionField.parent.remove(t.extensionField),t.extensionField=null;else{var r=this.deferred.indexOf(t);r>-1&&this.deferred.splice(r,1)}}else if(t instanceof i)c.test(t.name)&&delete t.parent[t.name];else if(t instanceof e){for(var n=0;n<t.nestedArray.length;++n)this._handleRemove(t._nestedArray[n]);c.test(t.name)&&delete t.parent[t.name]}},u._configure=function(e,o,i){t=e,r=o,n=i},root}function requireUtil(){if(hasRequiredUtil)return util$1.exports;hasRequiredUtil=1;var e,t,r=util$1.exports=requireMinimal(),n=roots;r.codegen=codegen_1,r.fetch=fetch_1,r.path=path,r.fs=r.inquire("fs"),r.toArray=function(e){if(e){for(var t=Object.keys(e),r=new Array(t.length),n=0;n<t.length;)r[n]=e[t[n++]];return r}return[]},r.toObject=function(e){for(var t={},r=0;r<e.length;){var n=e[r++],o=e[r++];void 0!==o&&(t[n]=o)}return t};var o=/\\/g,i=/"/g;r.isReserved=function(e){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)},r.safeProp=function(e){return!/^[$\w_]+$/.test(e)||r.isReserved(e)?'["'+e.replace(o,"\\\\").replace(i,'\\"')+'"]':"."+e},r.ucFirst=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};var a=/_([a-z])/g;r.camelCase=function(e){return e.substring(0,1)+e.substring(1).replace(a,(function(e,t){return t.toUpperCase()}))},r.compareFieldsById=function(e,t){return e.id-t.id},r.decorateType=function(t,n){if(t.$type)return n&&t.$type.name!==n&&(r.decorateRoot.remove(t.$type),t.$type.name=n,r.decorateRoot.add(t.$type)),t.$type;e||(e=requireType());var o=new e(n||t.name);return r.decorateRoot.add(o),o.ctor=t,Object.defineProperty(t,"$type",{value:o,enumerable:!1}),Object.defineProperty(t.prototype,"$type",{value:o,enumerable:!1}),o};var s=0;return r.decorateEnum=function(e){if(e.$type)return e.$type;t||(t=require_enum());var n=new t("Enum"+s++,e);return r.decorateRoot.add(n),Object.defineProperty(e,"$type",{value:n,enumerable:!1}),n},r.setProperty=function(e,t,r){if("object"!==_typeof(e))throw TypeError("dst must be an object");if(!t)throw TypeError("path must be specified");return function e(t,r,n){var o=r.shift();if("__proto__"===o||"prototype"===o)return t;if(r.length>0)t[o]=e(t[o]||{},r,n);else{var i=t[o];i&&(n=[].concat(i).concat(n)),t[o]=n}return t}(e,t=t.split("."),r)},Object.defineProperty(r,"decorateRoot",{get:function(){return n.decorated||(n.decorated=new(requireRoot()))}}),util$1.exports}function requireObject(){if(hasRequiredObject)return object;hasRequiredObject=1,object=r,r.className="ReflectionObject";var e,t=requireUtil();function r(e,r){if(!t.isString(e))throw TypeError("name must be a string");if(r&&!t.isObject(r))throw TypeError("options must be an object");this.options=r,this.parsedOptions=null,this.name=e,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}return Object.defineProperties(r.prototype,{root:{get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}},fullName:{get:function(){for(var e=[this.name],t=this.parent;t;)e.unshift(t.name),t=t.parent;return e.join(".")}}}),r.prototype.toJSON=function(){throw Error()},r.prototype.onAdd=function(t){this.parent&&this.parent!==t&&this.parent.remove(this),this.parent=t,this.resolved=!1;var r=t.root;r instanceof e&&r._handleAdd(this)},r.prototype.onRemove=function(t){var r=t.root;r instanceof e&&r._handleRemove(this),this.parent=null,this.resolved=!1},r.prototype.resolve=function(){return this.resolved||this.root instanceof e&&(this.resolved=!0),this},r.prototype.getOption=function(e){if(this.options)return this.options[e]},r.prototype.setOption=function(e,t,r){return r&&this.options&&void 0!==this.options[e]||((this.options||(this.options={}))[e]=t),this},r.prototype.setParsedOption=function(e,r,n){this.parsedOptions||(this.parsedOptions=[]);var o=this.parsedOptions;if(n){var i=o.find((function(t){return Object.prototype.hasOwnProperty.call(t,e)}));if(i){var a=i[e];t.setProperty(a,n,r)}else(i={})[e]=t.setProperty({},n,r),o.push(i)}else{var s={};s[e]=r,o.push(s)}return this},r.prototype.setOptions=function(e,t){if(e)for(var r=Object.keys(e),n=0;n<r.length;++n)this.setOption(r[n],e[r[n]],t);return this},r.prototype.toString=function(){var e=this.constructor.className,t=this.fullName;return t.length?e+" "+t:e},r._configure=function(t){e=t},object}function require_enum(){if(hasRequired_enum)return _enum;hasRequired_enum=1,_enum=n;var e=requireObject();((n.prototype=Object.create(e.prototype)).constructor=n).className="Enum";var t=requireNamespace(),r=requireUtil();function n(t,r,n,o,i,a){if(e.call(this,t,n),r&&"object"!==_typeof(r))throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=o,this.comments=i||{},this.valuesOptions=a,this.reserved=void 0,r)for(var s=Object.keys(r),u=0;u<s.length;++u)"number"==typeof r[s[u]]&&(this.valuesById[this.values[s[u]]=r[s[u]]]=s[u])}return n.fromJSON=function(e,t){var r=new n(e,t.values,t.options,t.comment,t.comments);return r.reserved=t.reserved,r},n.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return r.toObject(["options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"comment",t?this.comment:void 0,"comments",t?this.comments:void 0])},n.prototype.add=function(e,t,n,o){if(!r.isString(e))throw TypeError("name must be a string");if(!r.isInteger(t))throw TypeError("id must be an integer");if(void 0!==this.values[e])throw Error("duplicate name '"+e+"' in "+this);if(this.isReservedId(t))throw Error("id "+t+" is reserved in "+this);if(this.isReservedName(e))throw Error("name '"+e+"' is reserved in "+this);if(void 0!==this.valuesById[t]){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+t+" in "+this);this.values[e]=t}else this.valuesById[this.values[e]=t]=e;return o&&(void 0===this.valuesOptions&&(this.valuesOptions={}),this.valuesOptions[e]=o||null),this.comments[e]=n||null,this},n.prototype.remove=function(e){if(!r.isString(e))throw TypeError("name must be a string");var t=this.values[e];if(null==t)throw Error("name '"+e+"' does not exist in "+this);return delete this.valuesById[t],delete this.values[e],delete this.comments[e],this.valuesOptions&&delete this.valuesOptions[e],this},n.prototype.isReservedId=function(e){return t.isReservedId(this.reserved,e)},n.prototype.isReservedName=function(e){return t.isReservedName(this.reserved,e)},_enum}function requireEncoder(){if(hasRequiredEncoder)return encoder_1;hasRequiredEncoder=1,encoder_1=function(o){for(var i,a=r.codegen(["m","w"],o.name+"$encode")("if(!w)")("w=Writer.create()"),s=o.fieldsArray.slice().sort(r.compareFieldsById),u=0;u<s.length;++u){var l=s[u].resolve(),c=o._fieldsArray.indexOf(l),f=l.resolvedType instanceof e?"int32":l.type,p=t.basic[f];i="m"+r.safeProp(l.name),l.map?(a("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",i,l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(l.id<<3|2)>>>0,8|t.mapKey[l.keyType],l.keyType),void 0===p?a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",c,i):a(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|p,f,i),a("}")("}")):l.repeated?(a("if(%s!=null&&%s.length){",i,i),l.packed&&void 0!==t.packed[f]?a("w.uint32(%i).fork()",(l.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",i)("w.%s(%s[i])",f,i)("w.ldelim()"):(a("for(var i=0;i<%s.length;++i)",i),void 0===p?n(a,l,c,i+"[i]"):a("w.uint32(%i).%s(%s[i])",(l.id<<3|p)>>>0,f,i)),a("}")):(l.optional&&a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",i,l.name),void 0===p?n(a,l,c,i):a("w.uint32(%i).%s(%s)",(l.id<<3|p)>>>0,f,i))}return a("return w")};var e=require_enum(),t=requireTypes(),r=requireUtil();function n(e,t,r,n){return t.resolvedType.group?e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",r,n,(t.id<<3|3)>>>0,(t.id<<3|4)>>>0):e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",r,n,(t.id<<3|2)>>>0)}return encoder_1}!function(e){var t=message;e[".google.protobuf.Any"]={fromObject:function(e){if(e&&e["@type"]){var t=e["@type"].substring(e["@type"].lastIndexOf("/")+1),r=this.lookup(t);if(r){var n="."===e["@type"].charAt(0)?e["@type"].slice(1):e["@type"];return-1===n.indexOf("/")&&(n="/"+n),this.create({type_url:n,value:r.encode(r.fromObject(e)).finish()})}}return this.fromObject(e)},toObject:function(e,r){var n="",o="";if(r&&r.json&&e.type_url&&e.value){o=e.type_url.substring(e.type_url.lastIndexOf("/")+1),n=e.type_url.substring(0,e.type_url.lastIndexOf("/")+1);var i=this.lookup(o);i&&(e=i.decode(e.value))}if(!(e instanceof this.ctor)&&e instanceof t){var a=e.$type.toObject(e,r);return""===n&&(n="type.googleapis.com/"),o=n+("."===e.$type.fullName[0]?e.$type.fullName.slice(1):e.$type.fullName),a["@type"]=o,a}return this.toObject(e,r)}}}(wrappers);var protobuf=indexLight.exports=indexMinimal;function load(e,t,r){return"function"==typeof t?(r=t,t=new protobuf.Root):t||(t=new protobuf.Root),t.load(e,r)}function loadSync(e,t){return t||(t=new protobuf.Root),t.loadSync(e)}protobuf.build="light",protobuf.load=load,protobuf.loadSync=loadSync,protobuf.encoder=requireEncoder(),protobuf.decoder=requireDecoder(),protobuf.verifier=requireVerifier(),protobuf.converter=requireConverter(),protobuf.ReflectionObject=requireObject(),protobuf.Namespace=requireNamespace(),protobuf.Root=requireRoot(),protobuf.Enum=require_enum(),protobuf.Type=requireType(),protobuf.Field=requireField(),protobuf.OneOf=requireOneof(),protobuf.MapField=requireMapfield(),protobuf.Service=requireService(),protobuf.Method=requireMethod(),protobuf.Message=message,protobuf.wrappers=wrappers,protobuf.types=requireTypes(),protobuf.util=requireUtil(),protobuf.ReflectionObject._configure(protobuf.Root),protobuf.Namespace._configure(protobuf.Type,protobuf.Service,protobuf.Enum),protobuf.Root._configure(protobuf.Type),protobuf.Field._configure(protobuf.Type);var indexLightExports=indexLight.exports,light=indexLightExports,$root=(light.roots.default||(light.roots.default=new light.Root)).addJSON({opentelemetry:{nested:{proto:{nested:{common:{nested:{v1:{options:{csharp_namespace:"OpenTelemetry.Proto.Common.V1",java_multiple_files:!0,java_package:"io.opentelemetry.proto.common.v1",java_outer_classname:"CommonProto",go_package:"go.opentelemetry.io/proto/otlp/common/v1"},nested:{AnyValue:{oneofs:{value:{oneof:["stringValue","boolValue","intValue","doubleValue","arrayValue","kvlistValue","bytesValue"]}},fields:{stringValue:{type:"string",id:1},boolValue:{type:"bool",id:2},intValue:{type:"int64",id:3},doubleValue:{type:"double",id:4},arrayValue:{type:"ArrayValue",id:5},kvlistValue:{type:"KeyValueList",id:6},bytesValue:{type:"bytes",id:7}}},ArrayValue:{fields:{values:{rule:"repeated",type:"AnyValue",id:1}}},KeyValueList:{fields:{values:{rule:"repeated",type:"KeyValue",id:1}}},KeyValue:{fields:{key:{type:"string",id:1},value:{type:"AnyValue",id:2}}},InstrumentationScope:{fields:{name:{type:"string",id:1},version:{type:"string",id:2},attributes:{rule:"repeated",type:"KeyValue",id:3},droppedAttributesCount:{type:"uint32",id:4}}}}}}},resource:{nested:{v1:{options:{csharp_namespace:"OpenTelemetry.Proto.Resource.V1",java_multiple_files:!0,java_package:"io.opentelemetry.proto.resource.v1",java_outer_classname:"ResourceProto",go_package:"go.opentelemetry.io/proto/otlp/resource/v1"},nested:{Resource:{fields:{attributes:{rule:"repeated",type:"opentelemetry.proto.common.v1.KeyValue",id:1},droppedAttributesCount:{type:"uint32",id:2}}}}}}},logs:{nested:{v1:{options:{csharp_namespace:"OpenTelemetry.Proto.Logs.V1",java_multiple_files:!0,java_package:"io.opentelemetry.proto.logs.v1",java_outer_classname:"LogsProto",go_package:"go.opentelemetry.io/proto/otlp/logs/v1"},nested:{LogsData:{fields:{resourceLogs:{rule:"repeated",type:"ResourceLogs",id:1}}},ResourceLogs:{fields:{resource:{type:"opentelemetry.proto.resource.v1.Resource",id:1},scopeLogs:{rule:"repeated",type:"ScopeLogs",id:2},schemaUrl:{type:"string",id:3}},reserved:[[1e3,1e3]]},ScopeLogs:{fields:{scope:{type:"opentelemetry.proto.common.v1.InstrumentationScope",id:1},logRecords:{rule:"repeated",type:"LogRecord",id:2},schemaUrl:{type:"string",id:3}}},SeverityNumber:{values:{SEVERITY_NUMBER_UNSPECIFIED:0,SEVERITY_NUMBER_TRACE:1,SEVERITY_NUMBER_TRACE2:2,SEVERITY_NUMBER_TRACE3:3,SEVERITY_NUMBER_TRACE4:4,SEVERITY_NUMBER_DEBUG:5,SEVERITY_NUMBER_DEBUG2:6,SEVERITY_NUMBER_DEBUG3:7,SEVERITY_NUMBER_DEBUG4:8,SEVERITY_NUMBER_INFO:9,SEVERITY_NUMBER_INFO2:10,SEVERITY_NUMBER_INFO3:11,SEVERITY_NUMBER_INFO4:12,SEVERITY_NUMBER_WARN:13,SEVERITY_NUMBER_WARN2:14,SEVERITY_NUMBER_WARN3:15,SEVERITY_NUMBER_WARN4:16,SEVERITY_NUMBER_ERROR:17,SEVERITY_NUMBER_ERROR2:18,SEVERITY_NUMBER_ERROR3:19,SEVERITY_NUMBER_ERROR4:20,SEVERITY_NUMBER_FATAL:21,SEVERITY_NUMBER_FATAL2:22,SEVERITY_NUMBER_FATAL3:23,SEVERITY_NUMBER_FATAL4:24}},LogRecordFlags:{values:{LOG_RECORD_FLAG_UNSPECIFIED:0,LOG_RECORD_FLAG_TRACE_FLAGS_MASK:255}},LogRecord:{fields:{timeUnixNano:{type:"fixed64",id:1},observedTimeUnixNano:{type:"fixed64",id:11},severityNumber:{type:"SeverityNumber",id:2},severityText:{type:"string",id:3},body:{type:"opentelemetry.proto.common.v1.AnyValue",id:5},attributes:{rule:"repeated",type:"opentelemetry.proto.common.v1.KeyValue",id:6},droppedAttributesCount:{type:"uint32",id:7},flags:{type:"fixed32",id:8},traceId:{type:"bytes",id:9},spanId:{type:"bytes",id:10}},reserved:[[4,4]]}}}}}}}}}}),VERSION="0.16.5",defaultHeaders={"Content-Type":"application/x-protobuf","Content-Encoding":"gzip"},LogsData=$root.lookupType("opentelemetry.proto.logs.v1.LogsData");function isArray(e){return Array.isArray(e)}function isObject(e){return!!e&&"object"===_typeof(e)&&!isArray(e)}function convertToAnyValue(e){return isObject(e)?{kvlistValue:{values:Object.entries(e).map((function(e){var t=_slicedToArray(e,2);return{key:t[0],value:convertToAnyValue(t[1])}}))}}:isArray(e)?{arrayValue:{values:e.map((function(e){return convertToAnyValue(e)}))}}:"string"==typeof e?{stringValue:e}:"number"==typeof e?{doubleValue:e}:"boolean"==typeof e?{boolValue:e}:{}}var OTLPLogExporter=function(){function e(t){_classCallCheck(this,e),this.config=t}return _createClass(e,[{key:"constructLogData",value:function(e){var t;return{resourceLogs:[{resource:{attributes:convertToAnyValue((null===(t=this.config.resource)||void 0===t?void 0:t.attributes)||{}).kvlistValue.values},scopeLogs:[{scope:{name:"splunk.rr-web",version:VERSION},logRecords:e.map((function(e){return{body:convertToAnyValue(e.body),timeUnixNano:e.timeUnixNano,attributes:convertToAnyValue(e.attributes||{}).kvlistValue.values}}))}]}]}}},{key:"export",value:function(e){if(0!==e.length){var t=this.constructLogData(e);this.config.debug&&console.log("otlp request",t);var r=gzipSync(LogsData.encode(t).finish()),n=this.config.headers?Object.assign({},defaultHeaders,this.config.headers):defaultHeaders;fetch(this.config.beaconUrl,{method:"POST",body:r,headers:n}).catch((function(){}))}}}]),e}(),SUPPRESS_TRACING_KEY=createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");function suppressTracing(e){return e.setValue(SUPPRESS_TRACING_KEY,!0)}var BatchLogProcessor=function(){function e(t,r){var n=this;_classCallCheck(this,e),this.logs=[],this.scheduledDelayMillis=(null==r?void 0:r.scheduledDelayMillis)||5e3,this.exporter=t,window.addEventListener("unload",(function(){n._flushAll()}))}return _createClass(e,[{key:"onLog",value:function(e){var t=this;this.logs.push(e),void 0===this.timeout&&(this.timeout=setTimeout((function(){t.timeout=void 0,t._flushAll()}),this.scheduledDelayMillis))}},{key:"_flushAll",value:function(){var e=this;this.lastBatchSent=Date.now(),context.with(suppressTracing(context.active()),(function(){var t=e.logs.splice(0,e.logs.length);e.exporter.export(t)}))}}]),e}();function convert(e,t,r){return{body:e,timeUnixNano:t,attributes:r}}function migrateConfigOption(e,t,r){t in e&&!(r in e)&&(e[r]=e[t])}function migrateConfig(e){return migrateConfigOption(e,"beaconUrl","beaconEndpoint"),migrateConfigOption(e,"rumAuth","rumAccessToken"),e}var MAX_RECORDING_LENGTH=1446e4,MAX_CHUNK_SIZE=972800,encoder=new TextEncoder,decoder=new TextDecoder,inited=!1,tracer,lastKnownSession,sessionStartTime=0,paused=!1,eventCounter=1,logCounter=1,SplunkRumRecorder={get inited(){return Boolean(inited)},init:function(e){if(!inited)if("undefined"!=typeof window){var t=trace.getTracerProvider();if(t&&"getDelegate"in t&&(t=t.getDelegate()),null==t?void 0:t.resource){var r=t.resource;migrateConfig(e);var n=e.apiToken,o=e.beaconEndpoint,i=e.debug,a=e.realm,s=e.rumAccessToken,u=__rest$1(e,["apiToken","beaconEndpoint","debug","realm","rumAccessToken"]),l=(tracer=trace.getTracer("splunk.rr-web",VERSION)).startSpan("record init");if(l.isRecording()){l.end();var c=o;if(a&&(c?console.warn("Splunk Session Recorder: Realm value ignored (beaconEndpoint has been specified)"):c="https://rum-ingest.".concat(a,".signalfx.com/v1/rumreplay")),c){var f={};n&&(f["X-SF-Token"]=n),s&&(c+="?auth=".concat(s));var p=new OTLPLogExporter({beaconUrl:c,debug:i,headers:f,resource:r}),d=new BatchLogProcessor(p,{});lastKnownSession=r.attributes["splunk.rumSessionId"],sessionStartTime=Date.now(),inited=record(Object.assign(Object.assign({maskAllInputs:!0,maskTextSelector:"*"},u),{emit:function(e){if(!paused){if(r.attributes["splunk.rumSessionId"]!==lastKnownSession){if(document.hidden)return;lastKnownSession=r.attributes["splunk.rumSessionId"],sessionStartTime=Date.now(),eventCounter=1,logCounter=1,record.takeFullSnapshot()}if(!(e.timestamp>sessionStartTime+MAX_RECORDING_LENGTH))for(var t=e.timestamp,n=eventCounter++,o=encoder.encode(JSON.stringify(e)),a=Math.ceil(o.byteLength/MAX_CHUNK_SIZE),s=0;s<a;s++){var u=s*MAX_CHUNK_SIZE,l=(s+1)*MAX_CHUNK_SIZE,c=convert(decoder.decode(o.slice(u,l)),t,{"rr-web.offset":logCounter++,"rr-web.event":n,"rr-web.chunk":s+1,"rr-web.total-chunks":a});i&&console.log(c),d.onLog(c)}}}}))}else console.error("Session recorder could not determine `exportUrl`, please ensure that `realm` or `beaconEndpoint` is specified and try again")}}else console.error("Splunk OTEL Web must be inited before recorder.")}else console.error("Session recorder can't be ran in non-browser environments")},resume:function(){if(inited){var e=paused;paused=!1,e||(record.takeFullSnapshot(),tracer.startSpan("record resume").end())}},stop:function(){inited&&(paused&&tracer.startSpan("record stop").end(),paused=!0)},deinit:function(){inited&&(inited(),inited=!1)}};return SplunkRumRecorder}();
//# sourceMappingURL=splunk-otel-web-session-recorder.js.map
mponent parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition  eyebrowExists ">
          

<div class="brow ">テクノロジー</div>

<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/aws-monitoring.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									AWS
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/microsoft-azure-monitoring.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Azure
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/gcp-monitoring.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									GCP
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/kubernetes-monitoring.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Kubernetes
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/opentelemetry.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									OpenTelemetry
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/sap.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									SAP
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
				</div>
							
				<div class="subNavSection-item-list">
					
					<div><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition  eyebrowExists ">
          

<div class="brow ">業種別 </div>

<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/aerospace-defense.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									航空宇宙および防衛
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/energy-and-utilities.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									エネルギーとユーティリティ設備
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/financial-services.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									金融サービス
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/healthcare.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									医療
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/higher-education.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									大学・研究機関
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/solutions/industries/public-sector.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									行政・公共機関
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
				</div>
			
		</div>

		<!-- start of bottom container within right container-->
		<div class="bottomContainerSection">
			<div class="bottomContainerSection-item">
							
				<div class="bottomContainerSection-item-list">
				
							<div class="splunk-button base-component parbase section">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-darkGray none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/solutions.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false">
    <span class="custom-analytics-class customAnalytics-">全てのソリューションを見る</span>
  </a>

  
  
  


    
   
    
        

    

</div>


						
				</div>
							
				<div class="bottomContainerSection-item-list">
				
							

						
				</div>
							
				<div class="bottomContainerSection-item-list">
				
							

						
				</div>
			
			</div>
		</div>
	</div>


<!-- start of standalone container -->





        
        
        
 
    
   
    
        

    


				</div>
			
		
    

     
     


    
   
    
        

    


   
     
        

    


    
    
    
    




     
	
     
          
           

	
	

	

		 
	    
	    
	     
		
		
		

         
        

		 
		
		
			
				<div class="navSecondaryLevel navSecondaryLevel-2 sectionName-splunkが選ばれる理由">
					
   
     
        

    


    
    
    

    


  
    
        
     	
        
        
          
          
<!-- start of left container -->

	<div class="featuredSection  splunk-color splunk2-background-gray">
		<div class="featuredSection-item">
			
				<div class="featuredSection-list">
					
						<div class="featuredSection-listWrapper "><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  
    
      
      
        <div class="featureListV2Mobile feature-listitem primaryLayout iconAlignTop">
          



<div class="featureContentMobile feature-content" data-ctalink="/ja_jp/about-us/why-splunk.html" data-ctatarget="_self">
    <div class="featureContentMobile-icon list-wrapper">
        <img class="listIcon splunk-image splunk-image-smallicon" src="/content/dam/splunk2/en_us/icons/standard/network-data.svg" alt="global" loading="eager"/>
    </div>
    <div class="featureContentMobile-linkWrapper content-wrapper">
        <a href="/ja_jp/about-us/why-splunk.html" class="featureContentMobile-link header ga-cta  featured-content-hotspot" data-track-analytics="true">
            <div class="featureContentMobile-linkHeader feature-content-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray">Splunkが選ばれる理由</div>
            <div class="featureContentMobile-linkDescription list-description">組織のあらゆる問題解決、意思決定、ビジネス戦略にデータを活用 </div>
        </a>
        
    </div>
</div>

        </div>
      
    
    
  

  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
					
				</div>

			
		</div>
		<!-- start of bottom container within left container-->
		
	</div>


<!-- start of right container -->

	


<!-- start of standalone container -->





        
        
        
 
    
   
    
        

    


   
     
        

    


    
    
    

    


  
    
        
     	
        
        
          
          
<!-- start of left container -->

	


<!-- start of right container -->

	<div class="subNavSection splunk-color splunk2-background-white">
		<div class="subNavSection-item">
							
				<div class="subNavSection-item-list">
					
					<div class="subnav__layout-container"><div class="responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition   ">
          



<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/customers.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									お客様事例
								</div>
							
							
							
						</div>
						<div class="desc">世界の組織がSplunkを信頼する理由</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/partners.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									パートナー
								</div>
							
							
							
						</div>
						<div class="desc">強力なパートナーエコシステムによって価値実現を加速</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/en_us/perspectives.html" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunkによる視点
								</div>
							
							
							
						</div>
						<div class="desc">リーダーによる、リーダーのためのセキュリティとテクノロジーに関するインサイトを手に入れる</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>

    
</div>
</div>
</div>
				</div>
							
				<div class="subNavSection-item-list">
					
					<div class="subnav__layout-container"><div class="responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition   ">
          



<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/about-splunk.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									企業情報
								</div>
							
							
							
						</div>
						
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/careers/diversity.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									ダイバーシティ
								</div>
							
							
							
						</div>
						<div class="desc">お客様やコミュニティの変化に対応するためのSplunkの取り組みをご紹介します</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>

    
</div>
</div>
</div>
				</div>
			
		</div>

		<!-- start of bottom container within right container-->
		
	</div>


<!-- start of standalone container -->





        
        
        
 
    
   
    
        

    


				</div>
			
		
    

     
     


    
   
    
        

    


   
     
        

    


    
    
    
    




     
	
     
          
           

	
	

	

		 
	    
	    
	     
		
		
		

         
        

		 
		
		
			
				<div class="navSecondaryLevel navSecondaryLevel-3 sectionName-リソース資料">
					
   
     
        

    


    
    
    

    


  
    
        
     	
        
        
          
          
<!-- start of left container -->

	<div class="featuredSection  splunk-color splunk2-background-gray">
		<div class="featuredSection-item">
			
				<div class="featuredSection-list">
					
						<div class="featuredSection-listWrapper "><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  
    
      
      
        <div class="featureListV2Mobile feature-listitem primaryLayout iconAlignTop">
          



<div class="featureContentMobile feature-content" data-ctalink="/ja_jp/resources.html" data-ctatarget="_self">
    <div class="featureContentMobile-icon list-wrapper">
        <img class="listIcon splunk-image splunk-image-smallericon" src="/content/dam/splunk2/en_us/images/icon-library/navigation/header-resources.svg" alt="リソースセンター" loading="eager"/>
    </div>
    <div class="featureContentMobile-linkWrapper content-wrapper">
        <a href="/ja_jp/resources.html" class="featureContentMobile-link header ga-cta  featured-content-hotspot" data-track-analytics="true">
            <div class="featureContentMobile-linkHeader feature-content-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray">リソースセンター</div>
            <div class="featureContentMobile-linkDescription list-description">E-book、ホワイトペーパーのダウンロード、ウェビナー</div>
        </a>
        
    </div>
</div>

        </div>
      
    
    
  

  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
					
				</div>

			
				<div class="featuredSection-list">
					
						<div class="featuredSection-listWrapper "><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  
    
      
      
        <div class="featureListV2Mobile feature-listitem primaryLayout iconAlignTop">
          
<div class="brow"><br /></div>


<div class="featureContentMobile feature-content" data-ctalink="/ja_jp/about-us/events.html" data-ctatarget="_self">
    <div class="featureContentMobile-icon list-wrapper">
        <img class="listIcon splunk-image splunk-image-smallericon" src="/content/dam/splunk2/en_us/images/icon-library/navigation/header-events.svg" alt="イベント" loading="eager"/>
    </div>
    <div class="featureContentMobile-linkWrapper content-wrapper">
        <a href="/ja_jp/about-us/events.html" class="featureContentMobile-link header ga-cta  featured-content-hotspot" data-track-analytics="true">
            <div class="featureContentMobile-linkHeader feature-content-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray">イベント</div>
            <div class="featureContentMobile-linkDescription list-description">各地で開催されるイベントをチェック</div>
        </a>
        
    </div>
</div>

        </div>
      
    
    
  

  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
					
				</div>

			
				<div class="featuredSection-list">
					
						<div class="featuredSection-listWrapper "><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  
    
      
      
        <div class="featureListV2Mobile feature-listitem primaryLayout iconAlignTop">
          
<div class="brow"><br /></div>


<div class="featureContentMobile feature-content" data-ctalink="https://www.splunk.com/ja_jp/blog" data-ctatarget="_self">
    <div class="featureContentMobile-icon list-wrapper">
        <img class="listIcon splunk-image splunk-image-smallericon" src="/content/dam/splunk2/en_us/images/icon-library/navigation/header-blogs.svg" alt="ブログ" loading="eager"/>
    </div>
    <div class="featureContentMobile-linkWrapper content-wrapper">
        <a href="https://www.splunk.com/ja_jp/blog" class="featureContentMobile-link header ga-cta  featured-content-hotspot" data-track-analytics="true">
            <div class="featureContentMobile-linkHeader feature-content-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray">日本語ブログ</div>
            <div class="featureContentMobile-linkDescription list-description">最新情報や製品に関するTips等</div>
        </a>
        
    </div>
</div>

        </div>
      
    
    
  

  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
					
				</div>

			
		</div>
		<!-- start of bottom container within left container-->
		
	</div>


<!-- start of right container -->

	


<!-- start of standalone container -->





        
        
        
 
    
   
    
        

    


   
     
        

    


    
    
    

    


  
    
        
     	
        
        
          
          
<!-- start of left container -->

	


<!-- start of right container -->

	<div class="subNavSection splunk-color splunk2-background-white">
		<div class="subNavSection-item">
							
				<div class="subNavSection-item-list">
					
					<div><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition  eyebrowExists ">
          

<div class="brow ">導入</div>

<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://lantern.splunk.com/" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunk Lantern (英語）
								</div>
							
							
							
						</div>
						<div class="desc">Splunkエキスパートによる実用的でわかりやすいガイダンス</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/customer-success.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									カスタマーサクセス
								</div>
							
							
							
						</div>
						<div class="desc">理想的なデータ活用環境の構築</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/get-started.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunkのご利用にあたり
								</div>
							
							
							
						</div>
						<div class="desc">Splunkの使い方を紹介</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/data-insider.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									データ活用最新テクノロジー
								</div>
							
							
							
						</div>
						<div class="desc">さまざまな革新的テクノロジーの基本情報をご紹介</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
				</div>
							
				<div class="subNavSection-item-list">
					
					<div><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition  eyebrowExists ">
          

<div class="brow ">活用</div>

<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/training.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunkのトレーニングと認定
								</div>
							
							
							
						</div>
						<div class="desc">認定を取得してSplunkエキスパートになる</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://docs.splunk.com/Documentation" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									ドキュメント  (英語）
								</div>
							
							
							
						</div>
						<div class="desc">Splunkの使い方に関するQAやガイダンスを検索</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://usergroups.splunk.com/" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									ユーザーグループ
								</div>
							
							
							
						</div>
						<div class="desc">Splunkユーザーとの交流</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/en_us/community.html" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									コミュニティ (英語）
								</div>
							
							
							
						</div>
						<div class="desc">新しい発見や知識の共有 </div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/en_us/surge.html" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									SURGe (英語）
								</div>
							
							
							
						</div>
						<div class="desc">セキュリティに関するタイムリーな調査やガイダンス</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
				</div>
							
				<div class="subNavSection-item-list">
					
					<div><div class="list-item base-component parbase">
   
     
        

    


    
    
    
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition  eyebrowExists ">
          

<div class="brow ">拡張と最適化</div>

<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/customer-success/support-programs.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									カスタマーサポート
								</div>
							
							
							
						</div>
						<div class="desc">必要なサポートが簡単に受けられます</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://splunkbase.splunk.com/" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunkbase
								</div>
							
							
							
						</div>
						<div class="desc">1000以上のSplunk Appとアドオン</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://dev.splunk.com/" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunk Dev
								</div>
							
							
							
						</div>
						<div class="desc">独自のSplunk Appを開発</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/customer-success.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunkサービス
								</div>
							
							
							
						</div>
						<div class="desc">Splunkへの投資を最大限に活用</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    
   
    
        

    

</div>
</div>
				</div>
			
		</div>

		<!-- start of bottom container within right container-->
		
	</div>


<!-- start of standalone container -->





        
        
        
 
    
   
    
        

    


				</div>
			
		
    

     
     


    
   
    
        

    


                                    
   
     
        

    


    
    
    
    




     
	
     
          
           

	
	

	

		 
	    
	    
	     
		
		
		

         
        

		 
		
		
			
				<div class="navSecondaryLevel navSecondaryLevel-99 sectionName-サポート">
					
   
     
        

    


    
    
    

    


  
    
        
     	
        
        
          
          
<!-- start of left container -->

	


<!-- start of right container -->

	


<!-- start of standalone container -->
<div class="subnav__standalone splunk-color splunk2-background-white">
	<div class="subnav__standalone-item">
		<div class="subnav__standalone-item-list">
			
			<div><div class="list-item base-component parbase">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-none desktop-spacer-bottom-margin-none
      mobile-spacer-top-margin-none mobile-spacer-bottom-margin-none
       
      
      
       
       default speakerDetail-spacer">
        
    



      

      
              
              

  

  
    
      
      
        <div class="v2MobileVersion feature-listitem leftIconPosition   ">
          



<div class="mobileChosen feature-content secondary-header ">
    
	
		
	
</div>

<div class="content-body headerTest ">
    <div class="list__items  ">
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://splunk.my.site.com/customer/s" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									サポートポータル
								</div>
							
							
							
						</div>
						<div class="desc">ケースチケットを送信する</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://community.splunk.com/t5/tag/japanese/tg-p/category-id/en-us" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									Splunk Answers
								</div>
							
							
							
						</div>
						<div class="desc">Splunkエキスパートに質問する</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/ja_jp/customer-success/support-programs.html" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									サポートプログラム
								</div>
							
							
							
						</div>
						<div class="desc">サポートプログラムを見る</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="/en_us/products/system-status.html" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									システムステータス
								</div>
							
							
							
						</div>
						<div class="desc">ステータスの詳細を確認する</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://www.splunk.com/ja_jp/about-splunk/contact-us.html#customer-support" target="_self" data-track-analytics="true" class="ga-cta  list-detail-hotspot">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									お問い合わせ
								</div>
							
							
							
						</div>
						<div class="desc">カスタマーサポートに問い合わせる</div>
					
						</a>
					
				</div>
			</div>
	    
			<div class="list-element">
				
				<div class="list-details">
					
						<a href="https://advisory.splunk.com/" target="_blank" data-track-analytics="true" class="ga-cta  list-detail-hotspot" rel="noopener">
					
						<div class="list-header splunk2-h5 sub_h5"> <!--sub_h5 class will act as subsitute for h5 WWW-19201-->
							
								<div class="list-detail-hotspot-cta splunk-btn sp-btn-borderless sp-btn-darkGray list-cta">
									製品のセキュリティ更新 (英語）
								</div>
							
							
							
						</div>
						<div class="desc">データを安全に保つ</div>
					
						</a>
					
				</div>
			</div>
	    
	</div>
	
</div>

        </div>
      
    
    
  

  
  
  
  
  
      
      

    </div>
    
    
   
    
        

    

</div>
</div>
			
		</div>

	</div>
</div>




        
        
        
 
    
   
    
        

    


				</div>
			
		
    

     
     


    
   
    
        

    


                                   
                                   <div class="navSecondaryLevel navSecondaryLevel-100 sectionName-account">
                                        
                                            <div class="loggedout-user-link">
                                                
                                                <a rel="nofollow" id="loginId" data-track-analytics="true" href="https://www.splunk.com/saml/login?module=nav" target="_self" class="topnav">ログイン</a>
                                                
                                            </div>
                                        
                                            <div class="loggedout-user-link">
                                                
                                                
                                                <a id="signId" data-track-analytics="true" href="https://www.splunk.com/ja_jp/sign-up.html" target="_self" class="topnav">登録</a>
                                            </div>
                                        
                                            <div class="loggedin-user-link hidden">
                                                
                                                <a rel="nofollow" id="mydashboard" data-track-analytics="true" href="https://www.splunk.com/en_us/my-dashboard.html" target="_self" class="topnav">マイダッシュボード</a>
                                                
                                            </div>
                                        
                                            <div class="loggedin-user-link hidden">
                                                
                                                <a id="authenticated" data-track-analytics="true" href="https://login.splunk.com/page/sso_redirect?type=rainmakr&responsive=1&r=apex%2FRMEC_InstancePage" target="_self" class="topnav" rel="noopener">インスタンス</a>
                                                
                                            </div>
                                        
                                            <div class="loggedin-user-link hidden">
                                                <a rel="noopener" id="logout" data-track-analytics="true" target="_self" href="javascript:clearSessionStorage();deleteCookies('https://www.splunk.com/api/bin/sso/logout?module=sso_logout');" class="topnav">ログアウト</a>
                                                
                                                
                                            </div>
                                        
                                        <div class="product-links-container loggedin-user-link hidden">
			                            	<div class="product-links-header">PRODUCT LOGINS</div>
					                        <ul id="products" class="product-links">
					                            <li class="product-link">
					                                <a data-track-analytics="true" href="https://login.signalfx.com/" target="_self" class="topnav" rel="noopener">Splunk Observability Cloud</a>
					                                   
					                            </li>
					                        
					                            <li class="product-link">
					                                <a data-track-analytics="true" href="https://auth.scs.splunk.com/?amp&_gl=1*k6olpv*_ga_5EPM2P39FV*MTY4NDg3MjYzMS4xNzIuMS4xNjg0ODc0OTUzLjYwLjAuMA.." target="_self" class="topnav" rel="noopener">Splunk Cloud Services</a>
					                                   
					                            </li>
					                        
					                            <li class="product-link">
					                                <a data-track-analytics="true" href="https://portal.victorops.com/membership/#/" target="_blank" class="topnav" rel="noopener">Splunk On-Call</a>
					                                   
					                            </li>
					                        
					                            <li class="product-link">
					                                <a data-track-analytics="true" href="https://monitoring.rigor.com/" target="_blank" class="topnav" rel="noopener">Splunk Synthetic Monitoring</a>
					                                   
					                            </li>
					                        
					                            <li class="product-link">
					                                <a data-track-analytics="true" href="https://optimization.rigor.com/" target="_blank" class="topnav" rel="noopener">Splunk Web Optimization</a>
					                                   
					                            </li>
					                        </ul>
			                        	</div>
                                   </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </nav>
        </div>
        

        
    
    
    
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/global-nav/header/v2/header/clientlibs.09a25e9c8ffb15510936a6176485041b.js"></script>




   
</div>
	
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <!-- Lucid Search Bar Implementation -->
<script type="text/javascript">
    const customThemeFix = `
      .sui-search-button__label {
        white-space: nowrap;
      }
      #sui-search-box__input-wrapper .sui-search-box__text-input, .sui-search-box__text-input {
        padding: 14px 10px;
      }      
    `;    

    const barGetConfig = () => {
        return {
        customTheme: customThemeFix,
        env: "prod",
        suiLanguage: "ja",
        searchLanguage: "ja",
        showSearchButton: true,
        searchBarRedirectUrl: "/ja_jp/search.html",
        analyticsConfig: {
            applicationName: "SplunkCom"
        }
      };
    };
        
    const mobileBarGetConfig = () => {
        return {
        customTheme: customThemeFix,
        env: "prod",
        suiLanguage: "ja",
        searchLanguage: "ja",
        showSearchButton: true,
        searchBarRedirectUrl: "/ja_jp/search.html",
        analyticsConfig: {
            applicationName: "SplunkCom"
        }
      };
    };
    
    function renderSplunkSearchBarComponent() {
        const desktopContainer = document.querySelector(".splunk-header-v2 .search-container .input-group");
        const desktopBar = document.createElement("wplt-search-bar-web-component");
    
        const beforeMobileContainer = document.querySelector(".splunk-header-v2 .splunk-navbar .navbar-nav.navbar-right .search-icon-conatiner .input-group");
        const beforeMobileBar = document.createElement("wplt-search-bar-web-component");  
    
        const mobileContainer = document.querySelector(".splunk-header-v2-mobile .splunk-search-wrapper .splunk-search-form-wrapper");
        const mobileBar = document.createElement("wplt-search-bar-web-component");  
    
        desktopBar.config = barGetConfig();
        desktopContainer.replaceChildren(desktopBar);
    
        beforeMobileBar.config = barGetConfig();
        beforeMobileContainer.replaceChildren(beforeMobileBar);
    
        mobileBar.config = mobileBarGetConfig();
        mobileContainer.replaceChildren(mobileBar);
    }
</script>
    
<!--Splunk search bar web component CDN-->
<script defer onload="renderSplunkSearchBarComponent()" src="https://d38eume8qu1hmc.cloudfront.net/1.1.31/searchBar.js" type="text/javascript"></script>
    
<style>
    .splunk-header-v2 .splunk-navbar .navbar-right .input-group {
        width: 100%;
        padding: 0 15px;
    }
    .search-icon.mobile-search-container .icon-expanded-search-icon, 
    .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container .search {
        display: none;
    }
    .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container .input-form {
        display: block;
    }
    .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container {
        margin-left: 15px;
        margin-right: 15px;
    }
    .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container .input-form .input-group .sui-search-box__text-input:focus {
        border: 1px solid #363C44;
    }
    .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container .input-form .input-group {
      position: relative;
      top: -40px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      .splunk-header-v2 .splunk-navbar .nav>li.mega-menu-nav.search-icon-conatiner {
        position: static;  
      }
      .splunk-header-v2 .splunk-navbar .nav>li.mega-menu-nav .dropdown-menu {
        left: 0;
        width: 100%;
      }
    }
    @media (max-width: 767px) {
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .search-section .splunk-search-wrapper .splunk-search-form-wrapper wplt-search-bar-web-component {
        width: 100%;
      }
    }    
    @media (max-width: 360px) {
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .account-and-backNavigation .account-items .loggedOutUserWrapper {
        padding-left: 16px;
      }
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .account-and-backNavigation a#loginId {
        padding-left: 15px;
        padding-right: 15px;
      }
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .account-and-backNavigation a#signId {
        padding-left: 10px;
        padding-right: 10px;
      }
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .langLinks .mobile-languageDD .language-nav {
        padding: 0 15px 0 15px;
      }
      .global-header-v2-wrapper .splunk-header-v2-mobile .bottom-links .search-icon-container {
        margin-left: -5px;
        margin-right: 15px;    
      }
      .header.base-component .global-header-v2-wrapper .splunk-header-v2-mobile nav.nav-wrapper .header-body .menu-header .top-links .search-section .splunk-search-wrapper .splunk-search-form-wrapper {
        padding-right: 15px;
      }
    }    
</style>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <!-- global header v2 patches for non-English locales -->
<style>
.bottom-nav.navbar-right .flyoutWrapper {
  right: inherit !important;
  left: inherit !important;
}
</style>
<script>
(()=>{
    const GlobalHeaderMobile = (() => {
        // Here we initialize the variables
        var mobileHeaderRoot = null;
        var destinationSendToBottom = null;
        const movingSectionList = [];
        const rootElement = document.querySelector('html');

        const init = (elementRoot = null) => {
            // Here we look for the mobile version of the global nav
            mobileHeaderRoot = elementRoot;

            // here we check if the mobile version is running is it does then we start all
            if (mobileHeaderRoot !== null) startProcessing();
        };

        const startProcessing = async () => {
            await findAndMoveElementsSetToBottom();
            return true;
        }

        const findAndMoveElementsSetToBottom = async () => {
            await findDestinationForelementsToMove();
            await findElementsToMove();
            await processElementsAndMoveToBottom();
            
            return true;
        };

        const findElementsToMove = async () => {
            const movingSectionListElements = document.querySelectorAll('.featuredSection .featuredSection-list .hideSendBottomMobileListItem .items__sendToBottom');
            if (movingSectionListElements === null) throw new Error('Weird we got an error looking for elements to move to the bottom...');

            movingSectionListElements.forEach((elementToMove) => {

                const sectionElementsToMove = {
                    'originalElement': elementToMove,
                    'elementObject': getRootOfElementToMove(elementToMove),
                    'parentElement': lookForParentElement(elementToMove),
                    'parentFeaturedSectionElement': getParentFeaturedSection(elementToMove)
                }

                sectionElementsToMove.destinationToMove = lookforDestinationElement(sectionElementsToMove.parentElement)

                movingSectionList.push(sectionElementsToMove);
            });

            return true;
        };

        const getRootOfElementToMove = (childElement = null) => {
            if (childElement === null) throw new Error('child element is missing from the getRootOfElementToMove function...');

            const secondaryLevelParentElement = childElement.closest('.list-item');

            if (secondaryLevelParentElement === null) throw new Error(`couldn't find the root of the element to move...`);
            return secondaryLevelParentElement;
        };

        const lookForParentElement = (childElement = null) => {
            if (childElement === null) throw new Error('child element is missing from the lookForParentElement function...');

            const secondaryLevelParentElement = childElement.closest('.navSecondaryLevel');

            if (secondaryLevelParentElement !== null) return secondaryLevelParentElement;
        };

        const getParentFeaturedSection = (childElement = null) => {
            if (childElement === null) throw new Error('child element is missing from the getParentFeaturedSection function...');

            const FeaturedParentElement = childElement.closest('.featuredSection-list');

            if (FeaturedParentElement !== null) return FeaturedParentElement;
        };

        const lookforDestinationElement = (parentElement = '') => {
            if (parentElement === null) throw new Error('child element is missing from the lookForParentElement function...');

            const destinationToMoveElement = parentElement.querySelector('.subNavSection');

            if (destinationToMoveElement === null) throw new Error(`Something went wrong... can't find destination to move some elements`);
            return destinationToMoveElement;
        };

        const findDestinationForelementsToMove = async () => {
            destinationSendToBottom = document.querySelector('.step-menu-container-secondLevel');
            if (destinationSendToBottom === null) throw new Error(`Couldn't find any destination element to move the elements...`);
            return true;
        };

        const processElementsAndMoveToBottom = async () => {
            if (movingSectionList.length === 0) return true;

            movingSectionList.forEach((elementToMove) => {
                const element = document.createElement('div');
                element.classList.add('subNavSection-item');
                element.classList.add('additional-item-section');

                const elementWrapper = document.createElement('div');
                elementWrapper.classList.add('subNavSection-item-list');

                const emptyWrapper = document.createElement('div');

                emptyWrapper.appendChild(elementToMove.elementObject);
                elementWrapper.appendChild(emptyWrapper);
                element.appendChild(elementWrapper);

                elementToMove.destinationToMove.appendChild(element);
                elementToMove.parentFeaturedSectionElement.remove();
            });
        };

        return {init};
    })();

    window.addEventListener('load', ()=>{
        const mobileHeaderElementLocales = document.querySelector('.global-header-v2-wrapper .splunk-header-v2-mobile');
        if (mobileHeaderElementLocales !== null) {
            mobileHeaderElementLocales.GlobalHeaderMobile = GlobalHeaderMobile;
            mobileHeaderElementLocales.GlobalHeaderMobile.init(mobileHeaderElementLocales);
        }
    });
})();
</script>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    <div class="hideMyHTMLComp">Global nav V2 patch, remove after adding the mobile languages fix in the codebase (S7 or S8)</div>
	    <style>
/* This section is for adding comments in plain html components for future reference */

    /*#region utility styles */
  /* In some cases the html comp will automatically add <p> tags without any content, and it's difficult to remove, 
    I made a workaround adding a div and then hiding it so we don't get that extra pixels */
    .hideMyHTMLComp {
        display: none;
    }

    /* Now I made an Override for 'authoring' mode so we can use this placeholder div to add some description related
    to the function of thecode in this comp */
    .cq-Editable-dom .hideMyHTMLComp {
        display: block;
        font-size: 14px;
        color: grey;
    }

    /*#endregion utility styles */
</style>
<script>
let languageLinksGroup = document.querySelectorAll('.global-header-V3 .splunk-header-v2-mobile .mblNav-dropdown .nav-item .topnav.nav-link');
            languageLinksGroup.forEach((languageLink) => {
                languageLink.addEventListener('mousedown', (event) => {
                    event.preventDefault();
                });
            });
</script>
<style>
.global-header-V3 .splunk-header-v2-mobile .step-menu-container-secondLevel .navSecondaryLevel.navSecondaryLevel-2 .subNavSection .subNavSection-item {
    gap: 0px !important;
}

.global-header-V3 .splunk-header-v2-mobile .step-menu-container-secondLevel .navSecondaryLevel.navSecondaryLevel-2 .subNavSection .subNavSection-item .subNavSection-item-list:first-child .list-item .v2MobileVersion .list__items {
    padding-bottom: 0 !important;
}

.global-header-V3 .splunk-header-v2-mobile .step-menu-container-secondLevel .navSecondaryLevel.navSecondaryLevel-2 .subNavSection .subNavSection-item .subNavSection-item-list:not(:first-child) .list-item .v2MobileVersion .list__items {
    padding-top: 0 !important;
}
.global-header-V3 .splunk-header-v2-mobile .step-menu-container-secondLevel .navSecondaryLevel.navSecondaryLevel-2 .subNavSection .subNavSection-item .subNavSection-item-list:not(:first-child) .list-item .v2MobileVersion .list__items  .list-element {

}
</style>
	 </section>



    
   
    
        

    

</div>

    
</div>
</div>

    
</div>

</div></div>

	
	



    
   
    
        

    

</div>
<div class="root responsivegrid container">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <style>
.splunk-superModal.modal{margin-top:0}.splunk-superModal.modal .modal-dialog{width:100vw;max-width:100vw}.splunk-superModal.modal .modal-dialog .modal-content{border-radius:0}.splunk-superModal.modal .modal-dialog .modal-content .modal-header{padding:20px;min-height:60px;border-bottom:none}.splunk-superModal.modal .modal-dialog .modal-content .modal-header .modal-close{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABDCAYAAAAoCNNNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV3SURBVHgB5ZvNbhpXFIDPuYMaY4PNvIBDn8BkV6mqileVqkqxn8DkCepl+iPFltLEuziqZEvtokStvI0rVZW6MmlaqbuSJwj2CwwYGpwW5vScwRDAYIaZOzMw/qRkwPx47udz7z33DyECLKuZBWhlO8+Qr1gFsKud54mKaSYrEDIIAWNZ9TwozKFSHwNhjn9j1t0nscxyKmTbL8CmsmmmSxAggYjoFN7YQIQtQMyADggqfLMlu916FoQUbSIsizIqcfE5EW1rK/w4WApBexfaS8emiVXQgG8RoQoYRqIEobiSTu6CT3yJkCqARuIH9/U+IC4jxFxOFcEjnkRIFKDRZAG4ATMEEhTtNux66XWmFmFZjRwaxvPIo2AcEh1tWJ9WhprmzeeNf7fQUCczK0Hge8MEvLZqb7an+ZhrEbX62wc2tYuhN4geQYVPavXmA9fvd/MmkUBg78AcwgXccdOrTBQxzxK6uJFxrQjr/B/ODtVziAEKjcJy6r1n414fK0IGRmjQ3/PSJkyGqtTCO+N6k7GNJRpwEh8JAmakTJIDjXp1pAhpF2a6i/QKl0klRvckV6qGUyW4H4YYQ9BaN9ODI9grEYEJjEXjeB0IiStRMSDCOm8U2FcO4k/eqvOcSR8DIhAM15nYvDMcFT0R3DbkY9lAjmcgKt5FhLILcMPojwpHhNNTKLUFGqnVqvDHy99BF/JdZ2enoJl8N6/oRITRzoNmPvrwA/js009g7/E34Je9xw+d75J/2lHNgnOR/xANrdEgrK6uOte9Rw99yRAJe48uP0+gHR6u35XrZRuhv8s8OPyeZdx2HnuV0S9BvuuXX38D/XTKrpzeAvSPKVZvd27cq4xREuQ79YMZq9HIKVDBJVBeZYQn4ZK2ykvVyEKATCsjdAmMMnBNcWOxBgHjVkYUEgTbtk0VRPswikkyopIgIKg1rNbfWGHJEM5OT518oJsc3f/ya5B+MSoJHajKIpoB9M7XMyyjSzQSOkQiQhAZkn1KKi6srGTg5Z9/RSJBmGqlSydHRz/2JAjy+OjoJ4gKJfUDQma4YfSbgepAkQ01CJFRvYOfDFQLvHDMeYSyICTGdZF+03G/ENCpImq/ghCYlCdEK4OqCkh2rwWL22QpMhkEZQVIFQiQaTPGSGQou4TONqDERSDthJ+0eVQGev+LryAIqLVgqsvteSXQjN+xQ3iRIZtZseos+Vm15g4q0LqmkUknnavftHk4MjgTBp2QTU/NlcXthPNMORGhVcTB4XfOzLOEtJ+0uRsZhwffstQsaMewi3LpLQKz6RO+5OFGQeVMevGOPOqNNThEfoYbBhE+7T7uRUSn92i+DnNuIlIQKplU8v3u015ESMtJ9jtDcYfIHthPNTgMtxf2oxiNhg5HAyRUsf9HAyI6UaF873SfdXjEvWsmBzeVjdxVF+seZKht6DJyhooScC+eVYSqZMD6qFdGipCwiWMVIbxaJbqMnbM0Vxb2ecIiNr2IlMVMLe6Pe33iXuw4tBdE9MJcXsxf956Js9g8RN3sHD2cU5DvPZ2ceNLI1TGFTtb59mTuth6yBFq6tW7i5JOArtY1nPyidYtbWzqGuYGO3UoQXC/wiAweqW3ystjM9yYE9q7cq1sJgrdTfufNgjORQ7O2L5PzBMBNM50swZR4PvdpNZtZ+M/eQdS7LdE7XBVSyXvTREE//k8CyykfpZ5EFR3SNXKjuOMlCvrRdzb8XPYr0jZi8DtwBF0CumgT0cWqN/M8vCuwkLv6J3mkDQCeR8BjXQK6aBfRjyMFaIOrTd5rpPBf/hXfZUkKD6mFstc2YBKBiujHIspA4yLH0ZJhMTlQHC004nwVr0w7q28KyrC0VAmq4MP8D2eCr6+FU2jRAAAAAElFTkSuQmCC);width:66px;height:66px;text-indent:999999999px;display:block}.splunk-superModal.modal .modal-dialog .modal-content .modal-header .splunk-superModal-title{font-size:20px;font-weight:700;color:#0c1724;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:20px}.splunk-superModal.modal .modal-dialog .modal-content .modal-header button.close{font-size:30px;color:#000;opacity:0.7;outline:none;border:none;background-color:transparent;padding:0.5rem 1rem;margin:-1rem -1rem -1rem auto}.splunk-superModal.modal .modal-dialog .modal-content .modal-header button.close:hover{color:#000;opacity:1}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section{position:relative}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section>.row{display:block}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section img{max-width:100%}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section[data-vimeo-initialized]{padding-bottom:56%}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section[data-vimeo-initialized] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .container{width:100%!important}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .row>.video.parbase.section .splunk-video-inline .vidyard_player{max-width:none}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .row>.video.parbase.section .splunk-video-inline.vidyard-player-embed{width:100%;margin:auto;display:block}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .row>.column.section{width:100%!important;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .row>div:not(.video),.splunk-superModal.modal .modal-dialog .modal-content .modal-body .extended-section .row>span:not(.vidyard_player){margin-top:20px}.splunk-superModal.modal .modal-dialog .modal-content .modal-footer{border-top:0;min-height:40px}.modal-wrapper .video.parbase{display:block}html:not(.safari) .splunk-superModal.fade-scale .modal-dialog,html:not(.safari) .splunk-superModal.fade-scale .modal-dialog .modal-content,html:not(.safari) .splunk-superModal.fade-scale .modal-dialog .modal-content .modal-body,html:not(.safari) .splunk-superModal.fade-scale .modal-dialog .modal-content .modal-footer,html:not(.safari) .splunk-superModal.fade-scale .modal-dialog .modal-content .modal-header{opacity:0}html:not(.safari) .splunk-superModal.fade-scale.in{background-color:hsla(0,0%,100%,0.94902);-webkit-animation:reveal-content;animation:reveal-content;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}html:not(.safari) .splunk-superModal.fade-scale.in .modal-dialog{opacity:1}html:not(.safari) .splunk-superModal.fade-scale.in .modal-dialog .modal-content{background-color:transparent;-webkit-animation:reveal-modal;animation:reveal-modal;-webkit-animation-delay:.2;animation-delay:.2;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}html:not(.safari) .splunk-superModal.fade-scale.in .modal-dialog .modal-content .modal-body,html:not(.safari) .splunk-superModal.fade-scale.in .modal-dialog .modal-content .modal-footer,html:not(.safari) .splunk-superModal.fade-scale.in .modal-dialog .modal-content .modal-header{-webkit-animation:reveal-content;animation:reveal-content;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:linear;animation-timing-function:linear}@media (max-width:768px){.splunk-superModal.modal{padding:0}.splunk-superModal.modal .modal-dialog{width:100vw;min-width:100vw;max-width:100vw;margin:0}.splunk-superModal.modal .modal-dialog .modal-content{height:100vh;overflow:hidden;overflow-y:auto}.splunk-superModal.modal .modal-dialog .modal-content .modal-header{position:sticky;top:0;left:0;width:100%;background-color:#fff;padding-left:30px;z-index:1}.splunk-superModal.modal .modal-dialog .modal-content .modal-header .splunk-superModal-title{padding-right:30px}}@-webkit-keyframes reveal-modal{0%{opacity:0;-webkit-transform:scale(0.1);transform:scale(0.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes reveal-modal{0%{opacity:0;-webkit-transform:scale(0.1);transform:scale(0.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reveal-content{0%{opacity:0}to{opacity:1}}@keyframes reveal-content{0%{opacity:0}to{opacity:1}}.vidyard-player-container,.vidyard_player{display:block;position:relative;z-index:1}.vidyard-player-container:-webkit-full-screen,.vidyard_player:-webkit-full-screen{width:100%;height:100%}.vidyard-player-container:-moz-full-screen,.vidyard-player-container:-ms-fullscreen,.vidyard-player-container:-webkit-full-screen,.vidyard-player-container:fullscreen,.vidyard_player:-moz-full-screen,.vidyard_player:-ms-fullscreen,.vidyard_player:-webkit-full-screen,.vidyard_player:fullscreen{width:100%;height:100%}.vidyard-player-container .yardvideo-container,.vidyard_player .yardvideo-container{position:absolute;z-index:5000;width:100%;top:0px;left:0;color:#fff;padding:10px 20px;text-shadow:1px 1px rgba(0,0,0,0.4);font-weight:700;text-align:left}.vidyard-player-container .yardvideo-container .yardvideo-description,.vidyard_player .yardvideo-container .yardvideo-description{font-size:12px;margin-top:15px;max-height:3em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.splunk-video{background-color:transparent;position:relative}.splunk-video:before{content:" ";display:block;position:absolute;top:0;pointer-events:none;right:0;bottom:0;left:0;background-color:transparent;z-index:1;-webkit-transition:background-color .5s ease;transition:background-color .5s ease}.splunk-video .btn-icon-play{color:#fff;font-size:80px;position:absolute;top:50%;display:block;z-index:5;margin-top:-40px;left:50%;margin-left:-40px;border-radius:50%;width:80px;min-width:80px;height:80px;padding:21.17px 20.21px 21.17px 30.81px}.splunk-video .btn-icon-play img{width:26.99px;height:35.66px;display:inline-block}.splunk-video .customPlayVideo{background-color:transparent;bottom:15px;left:15px;width:18.5%;padding:0;position:absolute;z-index:2;border:none}.splunk-video img{z-index:3;margin-bottom:0!important;width:100%}.splunk-video a:hover{text-decoration:none}.splunk-video-image-container{cursor:pointer}.splunk-video-image-container.image-container{position:relative;float:left}.splunk-video-image-container.image-container .glyphicon{color:#fff;font-size:80px;position:absolute;top:50%;display:block;z-index:5;margin-top:-40px;left:50%;margin-left:-40px}.splunk-video-image-container.image-container .glyphicon-play-circle:before,.splunk-video-image-container.image-container a.glyphicon-play-circle:hover{text-decoration:none}.splunk-video-image-container.image-container .customPlayVideo{bottom:15px;left:15px;width:18.5%;max-width:200px;position:absolute;z-index:2}.splunk-video-image-container.image-container .customPlayVideo:before{content:"";display:block;margin-top:100%}.splunk-video-image-container.image-container:before{content:" ";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:transparent;z-index:1;-webkit-transition:background-color .5s ease;transition:background-color .5s ease}.splunk-video-image-container.image-container:hover:before{background-color:rgba(0,0,0,0.5)}.splunk-video-image-container.image-container img{margin-bottom:0!important}.splunk-video-image-container .splunk-video,.splunk-video-image-container .splunk-video:hover:before{background-color:transparent}.splunk-video-image-container .splunk-video-image-modal:hover{cursor:pointer}.splunk-video-inline .innerContainer{position:relative;display:block;width:100%!important;height:0;padding:56.25% 0 0}.splunk-video-inline .vidyard_player{position:absolute;top:0;left:0;width:100%;height:100%;max-width:750px;max-height:480px}.splunk-video-inline .vidyard_player>span{width:100%!important;height:100%!important;margin:0 auto!important}.splunk-video-image-container .button-wrapper,.splunk-video .button-wrapper{opacity:.8;-webkit-transition:opacity easy-in-out 0.3s;transition:opacity easy-in-out 0.3s}.splunk-video-image-container .button-wrapper .button-background,.splunk-video .button-wrapper .button-background{fill:#fff}.splunk-video-image-container .button-wrapper .button-foreground,.splunk-video .button-wrapper .button-foreground{fill:#000}.splunk-video-image-container:hover .button-wrapper,.splunk-video:hover .button-wrapper{opacity:1}.video-container video{width:100%}.video-frame .title{padding:18px 0 8px}.video-frame .desc{padding-bottom:18px}.video-frame .desc p{margin-bottom:20px}.video-frame .splunk-btn.sp-btn-solid.sp-btn-anchor.sp-btn-icon.sp-btn-icon-play:after,.video-frame .splunk-btn.sp-btn-solid.sp-btn-borderless.sp-btn-icon.sp-btn-icon-play:after{content:none}.vidyard__customModal{margin:0 0 20px}.vidyard__customModal__wrapper{position:relative;cursor:pointer}.vidyard__customModal__wrapper__thumbnail{width:100%;background-color:#000;height:auto}@media (max-width:767px){.vidyard__customModal__wrapper__thumbnail{min-height:auto}}.vidyard__customModal__wrapper__thumbnail .video-thumbnail{width:100%;height:100%}@media (min-width:768px){.vidyard__customModal__wrapper__thumbnail .video-thumbnail{max-height:100%}}.vidyard__customModal__wrapper__thumbnail .video-thumbnail.desktop{display:none}@media (min-width:768px){.vidyard__customModal__wrapper__thumbnail .video-thumbnail.desktop{display:block}}.vidyard__customModal__wrapper__thumbnail .video-thumbnail.mobile{display:block}@media (min-width:768px){.vidyard__customModal__wrapper__thumbnail .video-thumbnail.mobile{display:none}}.vidyard__customModal__wrapper__thumbnail .vidyard-player-embed--wrapper{display:none}.vidyard__customModal__wrapper__thumbnail .vidyard-player-container,.vidyard__customModal__wrapper__thumbnail iframe{max-height:100%}.vidyard__customModal__wrapper__thumbnail.showVideo .video-thumbnail{display:none}.vidyard__customModal__wrapper__thumbnail.showVideo .vidyard-player-embed--wrapper{display:block}.vidyard__customModal__wrapper__playIcon{position:absolute;display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;width:64px;min-width:64px;height:64px;bottom:16px;left:16px;cursor:pointer}.vidyard__customModal__wrapper__playIcon img{width:100%;height:100%}@media (min-width:768px){.vidyard__customModal__wrapper__playIcon{min-width:80px;height:80px}}.vidyard__customModal__wrapper__playIcon.iconCenterNone{display:none}.vidyard__customModal__wrapper__playIcon.iconCenter{margin-bottom:16px;position:relative!important;bottom:0!important;left:0!important;width:80px;min-width:80px;height:80px}@media (min-width:768px){.vidyard__customModal__wrapper__playIcon.iconCenter{margin-bottom:24px}}@media (max-width:768px){.vidyard__customModal__wrapper__playIcon.iconCenter{width:48px;min-width:48px;height:48px}}.vidyard__customModal__content{margin-top:16px;padding:0 8px;position:relative;line-height:0px}.vidyard__customModal__content .contentHeader{color:#0c1724;font-size:16px;line-height:17.6px;font-weight:700;text-decoration:none}.vidyard__customModal__content .contentHeader.title-cta:hover{text-decoration:underline}.vidyard__customModal__content .contentDescription{color:#656c76;font-size:15px;line-height:140%;margin-top:16px}.vidyard__customModal__content:before{content:"";width:2px;height:100%;background-image:-webkit-gradient(linear,right top,left top,color-stop(8.86%,#f99d1c),color-stop(9.29%,#f99c1c),color-stop(21.83%,#f4781f),color-stop(32.04%,#f16221),color-stop(38.58%,#f05a22),color-stop(66.64%,#ee1d62),color-stop(79.43%,#ed0080));background-image:linear-gradient(270deg,#f99d1c 8.86%,#f99c1c 9.29%,#f4781f 21.83%,#f16221 32.04%,#f05a22 38.58%,#ee1d62 66.64%,#ed0080 79.43%);background-size:cover;position:absolute;top:0;left:0}.vidyard__customModal.contentCenter{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vidyard__customModal.contentCenter .video-thumbnail{opacity:0.7}.vidyard__customModal.contentCenter .vidyard__customModal__content{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0 32px;margin:0}@media (min-width:768px){.vidyard__customModal.contentCenter .vidyard__customModal__content{width:100%;padding:0px 160px}}.vidyard__customModal.contentCenter .vidyard__customModal__content:before{content:"";background-image:none}.vidyard__customModal.contentCenter .vidyard__customModal__content .contentHeader{font-size:27px;line-height:110%;margin-bottom:8px}@media (min-width:768px){.vidyard__customModal.contentCenter .vidyard__customModal__content .contentHeader{margin-bottom:16px;font-size:30px}}.vidyard__customModal.contentCenter .vidyard__customModal__content .contentDescription{font-size:16px;line-height:140%;margin-top:0px!important}@media (min-width:768px){.vidyard__customModal.contentCenter .vidyard__customModal__content .contentDescription{font-size:18px}}.vidyard__customModal.contentCenter .vidyard__customModal__content .contentDescription,.vidyard__customModal.contentCenter .vidyard__customModal__content .contentHeader{color:#fff;text-align:center}.vidyard__customModal.contentCenter .vidyard__customModal__wrapper .video-thumbnail{height:auto}@media (min-width:768px){.vidyard__customModal.contentCenter .vidyard__customModal__wrapper .video-thumbnail{height:auto}}@media (max-width:768px){.vidyard__customModal.contentCenter .vidyard__customModal__wrapper.noTitle.noDescription .vidyard__customModal__wrapper__playIcon{top:50%}}.vidyard__customModal.contentCenter .vidyard__customModal__content.noDescription .contentHeader,.vidyard__customModal.contentCenter .vidyard__customModal__content.noTitle.noDescription .vidyard__customModal__wrapper__playIcon{margin-bottom:0px}.vidyard__customModal.vidyardInline .showVideo+.vidyard__customModal__wrapper__playIcon{display:none}.modal-content{border:none}.aem-GridColumn--default--2 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--3 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-2 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-3 .vidyard__customModal__wrapper__playIcon{width:28px;height:28px;min-width:28px}.aem-GridColumn--default--4 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--5 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-4 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-5 .vidyard__customModal__wrapper__playIcon{width:48px;height:48px;min-width:48px}.aem-GridColumn--default--6 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--7 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--8 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--9 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-6 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-7 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-8 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-9 .vidyard__customModal__wrapper__playIcon{width:64px;height:64px;min-width:64px}.aem-GridColumn--default--10px .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--11 .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-10px .vidyard__customModal__wrapper__playIcon,.flex-item.col-md-11 .vidyard__customModal__wrapper__playIcon{width:80px;height:80px;min-width:80px}.aem-GridColumn--default--8 .vidyard__customModal.contentCenter .vidyard__customModal__content,.aem-GridColumn--default--9 .vidyard__customModal.contentCenter .vidyard__customModal__content{width:100%;padding:0px 80px}.aem-GridColumn--default--4 .vidyard__customModal.contentCenter .vidyard__customModal__content,.aem-GridColumn--default--5 .vidyard__customModal.contentCenter .vidyard__customModal__content,.aem-GridColumn--default--6 .vidyard__customModal.contentCenter .vidyard__customModal__content,.aem-GridColumn--default--7 .vidyard__customModal.contentCenter .vidyard__customModal__content{width:100%;padding:0px 32px}.aem-GridColumn--default--2 .vidyard__customModal__wrapper__playIcon,.aem-GridColumn--default--3 .vidyard__customModal__wrapper__playIcon{bottom:8px;left:8px}.aem-GridColumn--default--2 .vidyard__customModal.contentCenter .vidyard__customModal__content,.aem-GridColumn--default--3 .vidyard__customModal.contentCenter .vidyard__customModal__content{width:100%;padding:0px 32px}#splunk-new-modal .aem-Grid:first-child .vidyard__customModal{margin-top:0}#splunk-new-modal .video.base-component.parbase .cq-placeholder{height:auto}#splunk-new-modal .video.base-component.parbase .container{margin:0}#splunk-new-modal .vidyard-custom-video{margin:0 -15px}#splunk-new-modal .vidyard-custom-video .vidyard__customModal__content{margin:1pc 40px 0}#splunk-new-modal .vidyard-custom-video .contentCenter .vidyard__customModal__content{margin:0}
</style> 
   
 
<style>


@media (min-width: 768px)
.desktop-spacer-top-margin-lg {    margin-top: 80px !important;
}

@media (max-width: 767px){
.mobile-spacer-top-margin-lg {   margin-top: 110px  !important;
}
</style>

	 </section>



    
   
    
        

    

</div>
<div class="pushdown-banner base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    

  
    
    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/pushdown-banner/v1/pushdown-banner/clientlibs.5d02c9d725648b950e28e55f0d8a9e0d.css" type="text/css">



  
<section id="pushdown-banner" class="pushdown-banner-v2 short col-4-6 splunk2-background splunk-gray-darker ">
  <div class="pushDownBanner-backgroundImageSection">
    
    
  </div>
  <div class="pushDownBanner-closeSection">
    <button type="button" class="close-pushdown-banner" aria-label="Close">
      <div aria-hidden="true" class="buttonIcon">
        <div class="buttonIcon-crossLine left"></div>
        <div class="buttonIcon-crossLine right"></div>
      </div>
    </button>
  </div>
  <div class="pushDownBanner-container">
    <div class="pushDownBanner-copySection">
      <span class="copyDesktop"><span style="color: rgb(255,255,255);">新設！21のトレーニングコースを日本語で提供しました</span></span>
      <span class="copyMobile"><span style="color: rgb(255,255,255);">新設！21のトレーニングコースを日本語で提供しました</span></span>
    </div>
    <div class="pushDownBanner-ctaButton">
        
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-hollow sp-btn-white none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/training.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">詳細はこちら</span>
  </a>

  
  
  


    
   
    
        

    


    </div>
  </div>

  
</section>

  
    
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/pushdown-banner/v1/pushdown-banner/clientlibs.6a8d8f6fbff343a92dadb4390db17a3a.js"></script>




    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-lg desktop-spacer-bottom-margin-none
      mobile-spacer-top-margin-lg mobile-spacer-bottom-margin-none
       
      
      
       
       default speakerDetail-spacer">
        
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <div class="we-splunk mobile-spacer-top-margin-lg desktop-spacer-top-margin-lg"> 
    <div class="hero-banner"> 
     <div id="animation_container_hero"> 
      <canvas id="canvas_hero"></canvas> 
      <div id="dom_overlay_container_hero"> 
      </div> 
     </div> 
     <div class="container"> 
      <div class="row"> 
       <div class="col-sm-10"> 
        <div class="row"> 
         <div class="col-sm-8 content-wrap"> 
          <div class="title"> 
           <h1 class="title__main splunk2-h1">企業のレジリエンスを向上 </h1> 
           <p class="hp-hero-p">セキュリティとオブザーバビリティの統合プラットフォーム </p> 
          </div>  
 <a class="splunk-btn multiline sp-btn-solid sp-btn-solid sp-btn-white sp-btn-icon sp-btn-icon-play splunk-videyardVideo-button splunk-btn-video open-yardvideo-modal splunkCTA" href="#" data-toggle="modal" data-video-title="Splunkのパーパス" data-contentid="ee9uFZRsF6KDtuP4nYqxN4" data-autoplay="0" data-target="#yardvideo-modal-ee9uFZRsF6KDtuP4nYqxN4" data-optimized="true" data-track-analytics="true">
                      <span>ビデオを見る</span>
                      </a> 
         </div> 
         <div class="col-sm-5 img-container"> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 
    </div> 
   </div> 
   <style>
 .plain-html{pointer-events:none}.hero-banner .content-wrap>a{pointer-events:initial}a:not([data-track-analytics=true]){pointer-events:none}.root.container{max-width:100%}.hero-banner #animation{top:-140px;right:0}.hero-banner{position:relative;padding-bottom:130px}.hero-banner:after{content:'';position:absolute;background:url('/content/dam/images/we_splunk/hp-hero-bg-mobile.png');background-repeat:no-repeat;background-size:cover;width:100%;height:125%;right:-11px;top:-107px;z-index:-1;background-position:revert;display:none}.hero-banner .splunk-btn.sp-btn-solid.sp-btn-white.sp-btn-icon:after{color:#fff}.hero-banner .splunk-btn.sp-btn-icon{background:#ed0090;color:#fff}.hero-banner .splunk-btn.sp-btn-icon:hover{background:#e8339b;color:#fff}.hero-banner .splunk-btn.sp-btn-icon:focus{background:#e8339b;color:#fff}@media screen and (max-width:767px){.hero-banner{padding-bottom:15px}.hero-banner #animation{display:none!important}.hero-banner:after{display:block}.hero-banner:before{display:none}}@media screen and (max-width:820px){.hero-banner .col-sm-10{margin-top:-55px}}@media screen and (max-width:1200px){.hero-banner{padding-bottom:30px}}.hero-banner:before{content:'';position:absolute;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;left:0;top:-140px}@media screen and (max-width:595px){.hero-banner:before{background-size:contain;} .hero-banner:after{height: 100%;}}@media screen and (max-width:767px){.hero-banner .content-wrap{width:100%;flex:100%;max-width:100%}}.hero-banner .title{margin-bottom:35px}.hero-banner .title h1{font-size:55px;line-height:1.1;font-family:splunk_data_sans,Helvetica,Arial,sans-serif!important}@media screen and (max-width:480px){.hero-banner .title h1{font-size:45px;text-transform:capitalize}}@media screen and (max-width:480px){.hero-banner .title p{font-size:18px}}@media screen and (max-width:767px){.hero-banner .img-container{width:100%}}.hero-banner .img-container img{width:638px;margin-top:-10px;position:relative;right:-60px}@media screen and (max-width:767px){.hero-banner .img-container img{width:100%;margin-top:30px;right:auto}}
 
  #animation_container_hero{
         position: absolute;
         height: 100% !important;
       width: 100% !important;
       right: 0;
       top: -120px;
     }
      #dom_overlay_container_hero{
       height: 100% !important;
       width: 100% !important;
     }
     #canvas_hero{
         width: 100% !important;
     }
     @media screen and (min-width: 1601px) {
         #animation_container_hero{
             width: 1440px !important;
         }
     }
     @media screen and (max-width: 1024px){
         #canvas_hero{
             height: 100% !important;
         }
     }
 @media screen and (max-width: 767px){
         #animation_container_hero, #canvas_hero{
             display: none !important;
         }
     }
 .hero-banner .splunk-btn.sp-btn-icon {
     background: #ed0090 !important;
     color: #fff !important;
 }
 </style> 
   <script type="text/javascript" src="/etc.clientlibs/splunk/core/clientlibs/clientlib-videoClientlib.e3396284d39e8bd3f7e6fba52ef1d034.js" defer></script>  
	 </section>



    </div>
    
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <div class="we-splunk" style="display: none;">
  <section class="col-four-grid parbase aem-GridColumn aem-GridColumn--default--12">
    <div class="container">
      <div class="col-sm-3 col-xs-6 col-grid heineken">
        <a href="https://www.splunk.com/en_us/customers/success-stories/heineken.html" class="col-1">Monthly messages sent between apps with captured log files and analytics</a> 
        <div class="content">
          <h2><span>25</span>M</h2>
          <p>Monthly messages sent between apps with captured log files and analytics<span></span></p>
        </div>
        <div class="img-wrap"> 
          <img data-src="/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-logo.png" class="lazyload" alt="Heineken"> 
        </div>
      </div>
      <div class="col-sm-3 col-xs-6 col-grid mclaren">
        <a href="https://www.splunk.com/en_us/customers/success-stories/mclaren-racing.html" class="col-2">Sensors per F1 race car providing analyzed data</a> 
        <div class="content">
          <h2><span>300</span>+</h2>
          <p>Sensors per F1 race car providing analyzed data<span></span></p>
        </div>
        <div class="img-wrap"> 
          <img data-src="/content/dam/splunk2/en_us/images/customers/mclaren/logo-mclaren-r3.png" class="lazyload" alt="McLaren"> 
        </div>
      </div>
      <div class="col-sm-3 col-xs-6 col-grid honda">
        <a href="https://www.splunk.com/en_us/customers/success-stories/honda.html" class="col-3">Faster mean time to repair</a> 
        <div class="content">
          <h2><span>70</span>%</h2>
          <p>Faster mean time to repair<span></span></p>
        </div>
        <div class="img-wrap"> 
          <img data-src="/content/dam/splunk2/en_us/images/customers/honda/h-logo-honda.png" class="lazyload" alt="honda"> 
        </div>
      </div>
      <div class="col-sm-3 col-xs-6 col-grid carrefour">
        <a href="https://www.splunk.com/en_us/customers/success-stories/carrefour.html" class="col-4">Faster response time to security events</a> 
        <div class="content">
          <h2><span>3</span>x</h2>
          <p>Faster response time to security events<span></span></p>
        </div>
        <div class="img-wrap"> 
          <img data-src="/content/dam/splunk2/en_us/images/customers/carrefour/h-logo-carrefour.png" class="lazyload" alt="Carrefour"> 
        </div>
      </div>
    </div>
  </section>
</div>
<style>
  @media screen and (min-width: 1024px){
  .col-four-grid .col-grid{display: grid;}
  }
  .col-four-grid .container{display:flex;flex-wrap:wrap}.col-four-grid{margin-top:-10px;padding-bottom:8px}@media screen and (max-width:767px){.col-four-grid{margin-top:auto;padding-bottom:30px}}@media screen and (max-width:595px){.col-four-grid{padding:15px 0}.col-four-grid .container{padding: 0;}}.col-four-grid .img-wrap{max-width:130px}.col-four-grid .img-wrap img{width:100%;height:100%;object-fit:contain}.col-four-grid .col-grid{position:relative}@media screen and (min-width:992px) and (max-width:1199px){.col-four-grid .col-grid{display:flex;flex-wrap:wrap}}.col-four-grid .col-grid:hover .content>p{text-decoration:underline}.col-four-grid .col-grid a{position:absolute;width:100%;height:100%;left:0;top:0;z-index:2;opacity:0;max-width:100%;pointer-events:initial}@media screen and (max-width:767px){.col-four-grid .col-grid{padding-bottom:20px;position:relative;min-height:195px;width:50%;flex:50%;max-width:50%}.col-four-grid .col-grid:after{content:'';position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#d5dce5;display:none}}.col-four-grid .col-grid h2{margin-bottom:0;font-weight:700}.col-four-grid .col-grid h2 span{font-size:55px;font-weight:700;color:#000;line-height:1;font-family:splunk_data_sans,Helvetica,sans-serif}@media screen and (max-width:480px){.col-four-grid .col-grid h2 span{font-size:35px}}.col-four-grid .col-grid p{font-size:15px;max-width:245px;padding-bottom:25px;padding-top:10px;color:#363c44;position:relative;font-weight:400}.col-four-grid .col-grid p span{position:relative;vertical-align:middle}.col-four-grid .col-grid p span:after{content:"";position:absolute;transition:all .3s ease-in-out;right:-8px;top:51%;background-repeat:no-repeat;background-size:100%;width:4px;height:1px;transform:translateY(-3px) rotate(45deg);background-color:#363c44}.col-four-grid .col-grid p span:before{content:"";position:absolute;transition:all .3s ease-in-out;right:-8px;top:51%;background-repeat:no-repeat;background-size:100%;width:4px;height:1px;transform:translateY(0) rotate(-45deg);background-color:#363c44}.col-four-grid .col-grid .content{position:relative}.col-four-grid .col-grid .content:before{content:'';position:absolute;left:-18px;top:0;height:calc(100% - 30px);width:1px;background-color:#d5dce5}@media screen and (max-width:767px){.col-four-grid .col-grid .content:before{display:block;height:calc(100% + 38px)}}.col-four-grid .col-grid:last-child .content:after{display:none}@media screen and (max-width:767px){.col-four-grid .col-grid:nth-child(odd) .content:before{display:none} .col-four-grid .col-grid{display:flex; flex-wrap: wrap;}}
</style>
	 </section>



    
   
    
        

    

</div>
<div class="container responsivegrid aem-GridColumn aem-GridColumn--default--12">

    



   
     
        

    


    
    <div class="desktop-spacer-top-margin-lg desktop-spacer-bottom-margin-lg
         mobile-spacer-top-margin-md mobile-spacer-bottom-margin-md
          
          
           splunk-gray-light default">
        
	
		
    
    

    <!-- Standard Variation - Starts -->
    
        
            
            
            
            
            
            

            
            <div id="container-e6b0b7eee1" style="min-height: 0px; background-color:none;
				--defaultAnimation:- s;
				--mobileanimation:-  s;
				  margin-top:px;
    			  margin-bottom:px;z-index:" data-getoverlayvalue="0" class="publishMode-enabled   splunk-container splunk-container__bg splunk2-background none overlay-container   border-splunk-gray-light gutters    splunk-fixedWidth-container  " data-hide-image-on-mobile="false">

                <!-- Left Image -->
                
                <!-- Right Image -->
                

                <!-- If Backgroundtype is Video - Starts -->
                
                <!-- If Backgroundtype is Video - ends -->

                <div class="splunk-container__main-content
		    			 
						 
						 container-fluid">
                    <!--Main header -->
                    <div class="container-fluid  " style="text-align:center;">
                        
                    </div>

                    
	
	
	
		


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <style>
    .whySplunkSection {
        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        width: 100vw;

        margin-left: -15px;
        margin-right: -15px;
        pointer-events: all;
    }

    .whySplunk-header {
        position: relative;
        display: block;

        grid-column-start: 1;
        grid-column-end: 2;

        margin-left: 15px;
        margin-right: 15px;
    }

    .whySplunk-header-leftColumn {}

    .whySplunk-header-leftColumn h2 {
        position: relative;

        margin: 0;
        padding: 0;

        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 110%;

        color: #000000;
    }

    .whySplunk-header-leftColumn p {
        position: relative; 

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;

        margin: 0;
        padding: 0;
        padding-top: 17px;

        color: #000000;
    }

    .whySplunk-header-rightColumn {
        position: relative;
        display: block;
        padding-top: 17px;
    }

    .whySplunk-body {
        position: relative;
        display: block;

        grid-column-start: 1;
        grid-column-end: 2;
    }

    .whySplunk-body-textSection {
        position: relative;
        display: block;

        padding-left: 15px;
        padding-right: 15px;
        padding-top: 37px;
    }

    .whySplunk-textContainer {
        position: relative;
        display: block;
        margin-top: 23px;
    }

    .whySplunk-textContainer:first-child {
        margin-top: 0;
    }

    .whySplunk-textContainer .textTitle {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 110%;

        color: #000000;
    }

    .whySplunk-textContainer .textBody {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;

        color: #000000;
        padding-top: 10px;
    }

    .whySplunk-body-imageSection {
        position: relative;
        padding-top: 58px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: flex-start;
    }

    .whySplunk-backgroundImage {
        position: relative;
        display: flex;
        width: 100%;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        z-index: 1;
    }

    .whySplunk-backgroundImage img {
        position: relative;
        display: block;
        width: min(978px, 100%);
        height: initial;
        aspect-ratio: 169 / 75;

        transform: translateY(55px);
    }

    .whySplunk-foregroundImage {
        position: relative;
        display: flex;
        width: 100%;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        z-index: 2;
    }


    /* Desktop Version */
    @media (min-width: 768px) {
        .whySplunkSection {
            margin: 0 auto;
            padding-left: 15px;
            padding-right: 15px;
        }

        .whySplunk-header {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: min-content;
            gap: 30px;

            margin-left: 0;
            margin-right: 0;
        }

        .whySplunk-header-leftColumn {
            display: grid;

            grid-column-start: 1;
            grid-column-end: 9;
            grid-row-start: 1;
            grid-row-end: 2;
        }
        .whySplunk-header-leftColumn h2 {
            font-size: 40px;
        }
        .whySplunk-header-leftColumn p {}

        .whySplunk-header-rightColumn {
            display: grid;
            grid-column-start: 10;
            grid-column-end: 13;
            grid-row-start: 1;
            grid-row-end: 2;

            padding-top: 0;
            align-self: flex-end;
            justify-self: flex-end;
        }

        .whySplunk-body {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: min-content;
            gap: 30px;

            margin-left: 0;
            margin-right: 0;
        }

        .whySplunk-body-textSection {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;

            padding-left: 0;
            padding-right: 0;
            padding-top: 48px;
        }
        .whySplunk-textContainer {
            margin-top: 30px;
        }
        .whySplunk-textContainer .textTitle {
            font-size: 21px;
        }
        .whySplunk-textContainer .textBody {
            font-size: 18px;
            padding-top: 11px;
        }


        .whySplunk-body-imageSection {
            grid-column-start: 4;
            grid-column-end: 13;
            grid-row-start: 1;
            grid-row-end: 2;

            padding-top: 48px;
        }
        .whySplunk-backgroundImage {}

        .whySplunk-backgroundImage img {
            width: min(68vw, 978px);
        }

        .whySplunk-foregroundImage {}
        .whySplunk-foregroundImage img {
            height: min(38.2vw, 550px);
            width: auto;
        }
    }

    @media (min-width: 768px) { .whySplunkSection { max-width: 720px; } }
    @media (min-width: 992px) { .whySplunkSection { max-width: 960px; } }
    @media (min-width: 1200px) { .whySplunkSection { max-width: 1140px; } }

    .whySplunk-foregroundImage-wrapper {
        position: relative;
        display: grid;

        grid-template-columns: min-content;
        grid-template-rows: max-content;
    }

    .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-laptop {
        position: relative;
        display: flex;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        z-index: 1;

        align-self: flex-start;
        justify-self: flex-start;
    }

    .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-laptop img {
        position: relative;
        display: block;

        width: initial;
        height: max(199px, 51vw);
        aspect-ratio: 337 / 199;
    }

    .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-mobilephone {
        position: relative;
        display: flex;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        z-index: 2;

        align-self: end;
        justify-self: end;
    }

    .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-mobilephone img {
        position: relative;
        display: block;
        
        width: initial;
        height: max(35.6vw, 139px);
        aspect-ratio: 70 / 139;
    }

    @media (min-width: 768px) {
        .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-laptop img {
            height: min(405px, 28.11vw);
            aspect-ratio: 229 / 135;
            margin-right: 50px;
            margin-bottom: 10px;
        }

        .whySplunk-foregroundImage-wrapper .whySplunk-foregroundImage-mobilephone img {
            height: min(303px, 21.05vw);
            aspect-ratio: 1 / 2;
        }
    }

</style>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <!-- 
    var ee = {
        'onePlusOne': ()=>{return (Math.ceil((.2 + .1) * 10/3) + 1)}, 
        'description': "0.2+0.1 =0.3, 0.3+10 = 3, 3/1 = 1, Ceiling of 1 = 1, 1+1 = 2 HOWEVER Javascript has a Decimal rounding bug so (.2 + .1) = 0.30000000000000004"
    } 
-->
<section class="whySplunkSection">
    <section class="whySplunk-header">
        <section class="whySplunk-header-leftColumn">
            <h2>デジタルシステムのセキュリティ、可用性、パフォーマンスを維持</h2>
            <p>脅威を防ぎ、ダウンタイムを抑制し、問題をすばやく解決する。組織のレジリエンス強化の鍵を握るSplunkならすべて可能です。</p>
        </section>
        <section class="whySplunk-header-rightColumn">
            <div class="splunk-button">
                <a class="splunk-btn multiline sp-btn-hollow sp-btn-pink ga-cta standalone" href="https://www.splunk.com/ja_jp/about-us/why-splunk.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" alt="Splunkが選ばれる理由を探る">
                    <span class="ga-cta ">Splunkが選ばれる理由を探る</span>
                </a>
            </div>
        </section>
    </section>
    <section class="whySplunk-body">
        <section class="whySplunk-body-imageSection">
            <div class="whySplunk-backgroundImage">
                <img src="/content/dam/splunk2/en_us/images/homepage/data-vis-bg.png" alt="">
            </div>
            <div class="whySplunk-foregroundImage" id="whySplunk-foregroundImage2">
                <div class="whySplunk-foregroundImage-wrapper">
                    <div class="whySplunk-foregroundImage-laptop">
                        <img src="/content/dam/splunk2/en_us/images/homepage/hp-why-splunk-dash-laptop.png" alt="ダッシュボード">
                    </div>
                    <div class="whySplunk-foregroundImage-mobilephone">
                        <img src="/content/dam/splunk2/en_us/images/homepage/hp-why-splunk-dash-mobile.png" alt="ダッシュボード">
                    </div>
                </div>
            </div>
        </section>
        <section class="whySplunk-body-textSection">
            <div class="whySplunk-textContainer">
                <div class="textTitle">大規模なインシデントを防止</div>
                <div class="textBody">重大なリスクや脅威が、大規模なインシデントに発展する前に問題を検出します。</div>
            </div>
            <div class="whySplunk-textContainer">
                <div class="textTitle">影響を最小化</div>
                <div class="textBody">重要なサービスを迅速に復旧して障害や侵害の影響を最小限に抑えます。
                </div>
            </div>
            <div class="whySplunk-textContainer">
                <div class="textTitle">トランスフォーメーションを加速</div>
                <div class="textBody">環境を可視化して変化にすばやく適応することによりセキュリティ、コンプライアンス、信頼性を維持します。</div>
            </div>
        </section>
    </section>
</section>
	 </section>



    
   
    
        

    

</div>

    
</div>

	

                    

                    <!-- Main Header end  -->
                </div>
            </div>
        
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    </div>


   
    
        

    




</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-sm desktop-spacer-bottom-margin-md
      mobile-spacer-top-margin-none mobile-spacer-bottom-margin-md
       
      
      
       
      splunk-gray-light default speakerDetail-spacer">
        
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <div class="we-splunk"> 
   <section class="we-customer-quote-grid parbase aem-GridColumn aem-GridColumn--default--12"> 
    <div class="container"> 
     <div class="intro-with-btn"> 
      <div class="intro"> 
       <h2>世界中の主要な企業から高い信頼を獲得</h2> 
       <p>さまざまなお客様がSplunkに信頼を寄せる理由があります。</p> 
      </div> 
      <div class="btn-wrapper"> <a href="https://www.splunk.com/ja_jp/customers.html" class="new-btn-transparent ">すべてのお客様事例を見る</a> 
      </div> 
     </div> 
    </div> 
   </section> 
  </div> 
  <style>
@media screen and (min-width:768px) and (max-width:991px){.we-customer-quote-grid{padding:15px 0 45px}}@media screen and (min-width:768px) and (max-width:991px){.we-customer-quote-grid{padding:15px 0}}@media screen and (max-width:1399px){.we-customer-quote-grid .we-right-triangle{width:150px}}@media screen and (min-width:992px) and (max-width:1200px){.we-customer-quote-grid .we-right-triangle{top:-320px}}@media screen and (max-width:767px){.we-customer-quote-grid{padding-bottom:20px}}@media screen and (max-width:480px){.we-customer-quote-grid{padding-bottom:30px;padding-top:0}.we-customer-quote-grid .we-right-triangle{top:-130px;width:75px}}.we-customer-quote-grid .intro-with-btn{padding:0;display:flex;align-items:flex-end;justify-content:space-between}@media screen and (max-width:1399px){.we-customer-quote-grid .intro-with-btn{padding:0 0}}@media screen and (max-width:1199px){.we-customer-quote-grid .intro-with-btn{display:inherit}}.we-customer-quote-grid .intro-with-btn .intro{padding-right:36px;max-width:816px}@media screen and (max-width:991px){.we-customer-quote-grid .intro-with-btn .intro{width:100%;padding-right:0}}.we-customer-quote-grid .intro-with-btn span{font-size:14px;color:#656c76}@media screen and (max-width:767px){.we-customer-quote-grid .intro-with-btn span{font-size:12px}}.we-customer-quote-grid .intro-with-btn .btn-wrapper{display:flex;justify-content:flex-end;align-items:center}@media screen and (max-width:1199px){.we-customer-quote-grid .intro-with-btn .btn-wrapper{justify-content:flex-start}}@media screen and (max-width:991px){.we-customer-quote-grid .intro-with-btn .btn-wrapper{width:100%;margin-top:10px}}.we-customer-quote-grid .intro-with-btn h2{margin-bottom:18px}@media screen and (max-width:767px){.we-customer-quote-grid .intro-with-btn h2{margin-bottom:10px}}.we-customer-quote-grid .intro-with-btn p{color:#363c44}.new-btn-transparent:hover{text-decoration:none;background:#ed0080;color:#fff}.we-customer-quote-grid h2{font-size:40px;font-weight:700;line-height:1.2}@media screen and (max-width:768px){h2{font-size:36px}}.we-customer-quote-grid{position:relative}.we-right-triangle{position:absolute;right:0;top:30px;z-index:-1;width:200px;height:500px;overflow:hidden;top:-250px;left:auto;right:0;transform:scaleX(-1)}.we-customer-quote-grid .we-right-triangle:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-image:url('/content/dam/images/we_splunk/left-triangle.svg');transition:left 1s ease-in-out}img{height:100%;width:100%}


</style>  
 

	 </section>



    </div>
    
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <style>
.align-content-md-stretch, .customer-quote__carousel{
    max-width: 1140px;
    margin: 0 auto;
}
@media screen and(min-width: 768px) and (max-width: 1080px){
 .customer-quote__carousel{
max-width: calc(100% - 80px);
    margin: 0 40px;
}
     
}
</style> 
   
 

	 </section>



    
   
    
        

    

</div>
<div class="carousel-container base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    




     

         
        

		  
        
      		
    
    <div class="customer-quote__carousel carousel-analytics">
        
            <div class="customer-quote base-component parbase">
   
     
        

    


    
    
    
    

     

	<div class="customer-quote customer-quote-wrapper splunk-top-border splunk-gradient">
    <div class="customer-quote__left col-md-7 col-sm-12  " style="background: none;" data-href="/content/dam/splunk2/ja_jp/images/customers/toyota-systems/toyota-systems-customer-logo.png" data-tab-img-alt="トヨタ">
        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/toyota-systems/toyota-systems-customer-quote-thumb-bkgd.jpg" alt="トヨタグループのサービス品質向上に貢献するSplunk" class="customer-quote__left-bg desktop"/>  

        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/toyota-systems/toyota-systems-customer-quote-thumb-bkgd.jpg" alt="トヨタグループのサービス品質向上に貢献するSplunk" class="customer-quote__left-bg mobile"/>

            <div class="customer-quote__left-content">   
            	 
            	<div class="splunk2-eyebrow">お客様事例</div>

            	 
            	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/toyota-systems/toyota-systems-customer-quote-thumb-logo.png" alt="トヨタ" class="customer-quote__left-logo"/>

            	 
            	<div class="splunk2-h3">トヨタグループのサービス品質向上に貢献するSplunk</div>  

            	 
            	

            	<div class="customer-quote__left-content-actions">
                	
    				<div class="left-parsys parsys">




</div>

            	</div>
            </div>        
         </div> 
         
          
		 <div class="customer-quote__right col-md-5 col-sm-12">
			 
			<div class="splunk-quotes contentfragment splunk-blockquote">
    
     


   
     
        

    
 


    


    
    
        
        
    

    
    
	 

	<div>
		<blockquote>
			<p>残業時間を減らすことでメンバーのモチベーション向上にも貢献しており、職場の雰囲気もよくなっています。</p>

		</blockquote>
		
		
	
		
		
		<span class="author-description">株式会社トヨタシステムズ <br />カスタマーサービスシステム部 <br />部長<br /></span>
	
		
		<span class="author">田中 孝蔵氏</span>
		
	</div>




   
    
        

    


    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/splunk-quotes/v1/splunk-quotes/clientlibs.ef2393cca66bf9ac9db17ec6d9162a90.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/splunk-quotes/v1/splunk-quotes/clientlibs.aaaad3a1c240ad38c5aa80547bd8c5b2.js"></script>


</div>


    		
   			 <div class="right-parsys parsys">




    
    
    <div class="splunk-button base-component parbase">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/customers/success-stories/toyota.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">お客様事例を読む</span>
  </a>

  
  
  


    
   
    
        

    

</div>


</div>

         </div>    
    </div>    





    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/customer-quote/v1/customer-quote/clientlibs.c845ef48964fe4127f5c239c7e229ad1.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/customer-quote/v1/customer-quote/clientlibs.653e774851778ef7365343eba9dd8d38.js"></script>



    
   
    
        

    

</div>

        
            <div class="customer-quote base-component parbase">
   
     
        

    


    
    
    
    

     

	<div class="customer-quote customer-quote-wrapper splunk-top-border splunk-gradient">
    <div class="customer-quote__left col-md-7 col-sm-12  " style="background: none;" data-href="/content/dam/splunk2/en_us/images/customers/tokyo-stock-exchange/tokyo-stock-exchange-customer-thumb-logo.png" data-tab-img-alt="JPX">
        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/tse-synthetic-monitoring/tse-jp-customer-quote-thumb-bkgd.jpg" alt="東京証券取引所：Splunkの外形監視ソリューションでIT運用全体を高度化" class="customer-quote__left-bg desktop"/>  

        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/tse-synthetic-monitoring/tse-jp-customer-quote-thumb-bkgd.jpg" alt="東京証券取引所：Splunkの外形監視ソリューションでIT運用全体を高度化" class="customer-quote__left-bg mobile"/>

            <div class="customer-quote__left-content">   
            	 
            	<div class="splunk2-eyebrow">お客様事例</div>

            	 
            	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/tse-synthetic-monitoring/tse-jp-customer-quote-thumb-logo.png" alt="東京証券取引所" class="customer-quote__left-logo"/>

            	 
            	<div class="splunk2-h3">東京証券取引所：Splunkの外形監視ソリューションでIT運用全体を高度化</div>  

            	 
            	

            	<div class="customer-quote__left-content-actions">
                	
    				<div class="left-parsys parsys">




</div>

            	</div>
            </div>        
         </div> 
         
          
		 <div class="customer-quote__right col-md-5 col-sm-12">
			 
			<div class="splunk-quotes contentfragment splunk-blockquote">
    
     


   
     
        

    
 


    


    
    
        
        
    

    
    
	 

	<div>
		<blockquote>
			<p>これまでレスポンスの速度まで見ることができませんでしたが、“Splunk Synthetic Monitoring”によってパフォーマンスから各システムの評価がよりきめ細かに見えるようになりました</p>

		</blockquote>
		
		
	
		
		
		<span class="author-description">東京証券取引所<br /> IT 開発部<br /> 情報システム担当<br /></span>
	
		
		<span class="author">落合 虎之介 氏</span>
		
	</div>




   
    
        

    


    


</div>


    		
   			 <div class="right-parsys parsys">




    
    
    <div class="splunk-button base-component parbase">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/customers/success-stories/tse-synthetic-monitoring.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">お客様事例を読む</span>
  </a>

  
  
  


    
   
    
        

    

</div>


</div>

         </div>    
    </div>    





    



    
   
    
        

    

</div>

        
            <div class="customer-quote base-component parbase">
   
     
        

    


    
    
    
    

     

	<div class="customer-quote customer-quote-wrapper splunk-top-border splunk-gradient">
    <div class="customer-quote__left col-md-7 col-sm-12  " style="background: none;" data-href="/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-logo.png" data-tab-img-alt="heineken logo">
        	 
        	<img loading="lazy" src="/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-highlight-thumb-image.jpg" alt="Heineken社：商品、プロセス、カスタマーエクスペリエンスの品質を向上" class="customer-quote__left-bg desktop"/>  

        	 
        	<img loading="lazy" src="/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-highlight-thumb-image.jpg" alt="Heineken社：商品、プロセス、カスタマーエクスペリエンスの品質を向上" class="customer-quote__left-bg mobile"/>

            <div class="customer-quote__left-content">   
            	 
            	<div class="splunk2-eyebrow">お客様事例</div>

            	 
            	<img loading="lazy" src="/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-quote-thumb-logo.png" alt="heineken logo" class="customer-quote__left-logo"/>

            	 
            	<div class="splunk2-h3">Heineken社：商品、プロセス、カスタマーエクスペリエンスの品質を向上</div>  

            	 
            	

            	<div class="customer-quote__left-content-actions">
                	
    				<div class="left-parsys parsys">




</div>

            	</div>
            </div>        
         </div> 
         
          
		 <div class="customer-quote__right col-md-5 col-sm-12">
			 
			<div class="splunk-quotes contentfragment splunk-blockquote">
    
     


   
     
        

    
 


    


    
    
        
        
    

    
    
	 

	<div>
		<blockquote>
			<p>Splunk Cloud Platformがすべての生データ(月2,500万件に及ぶメッセージ)を透明性の高い実用的なインサイトに変えてくれるので、Heinekenの全チームがそれを活用して運用の問題を解決し、パフォーマンスを向上させています</p>

		</blockquote>
		
		
	
		
		
		<span class="author-description">Heineken社デジタルインテグレーション担当グローバルプロダクトオーナー</span>
	
		
		<span class="author">Guus Groeneweg氏</span>
		
	</div>




   
    
        

    


    


</div>


    		
   			 <div class="right-parsys parsys">




    
    
    <div class="splunk-button base-component parbase">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/customers/success-stories/heineken.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false">
    <span class="custom-analytics-class customAnalytics-">お客様事例を読む</span>
  </a>

  
  
  


    
   
    
        

    

</div>


</div>

         </div>    
    </div>    





    



    
   
    
        

    

</div>

        
            <div class="customer-quote base-component parbase">
   
     
        

    


    
    
    
    

     

	<div class="customer-quote customer-quote-wrapper splunk-top-border splunk-gradient">
    <div class="customer-quote__left col-md-7 col-sm-12  " style="background: none;" data-href="/content/dam/splunk2/ja_jp/images/customers/cainz/cainz-logo.jpg" data-tab-img-alt="株式会社カインズ">
        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/cainz/cainz-12c-card-desktop.jpg" alt="株式会社カインズ" class="customer-quote__left-bg desktop"/>  

        	 
        	<img loading="lazy" src="/content/dam/splunk2/ja_jp/images/customers/cainz/cainz-12c-card-desktop.jpg" alt="株式会社カインズ" class="customer-quote__left-bg mobile"/>

            <div class="customer-quote__left-content">   
            	 
            	<div class="splunk2-eyebrow">お客様事例</div>

            	 
            	<img loading="lazy" src="/content/dam/splunk2/en_us/images/customers/cainz/cainz-customer-quote-thumb-logo.png" alt="株式会社カインズ" class="customer-quote__left-logo"/>

            	 
            	<div class="splunk2-h3">Splunk Observability CloudをECサイトの監視ツールとして採用した株式会社カインズ</div>  

            	 
            	

            	<div class="customer-quote__left-content-actions">
                	
    				<div class="left-parsys parsys">




</div>

            	</div>
            </div>        
         </div> 
         
          
		 <div class="customer-quote__right col-md-5 col-sm-12">
			 
			<div class="splunk-quotes contentfragment splunk-blockquote">
    
     


   
     
        

    
 


    


    
    
        
        
    

    
    
	 

	<div>
		<blockquote>
			<p>Splunkがあるからこそ状況がすぐに把握でき、迅速な改善活動につながりました。メンバーにもこの危機感が素早く共有できるようになったことも大きなメリット</p>

		</blockquote>
		
		
	
		
		
		<span class="author-description">株式会社カインズ<br />デジタル戦略本部 デジタルソリューション <br />プロダクト開発部 部長<br /></span>
	
		
		<span class="author">菅 武彦 氏</span>
		
	</div>




   
    
        

    


    


</div>


    		
   			 <div class="right-parsys parsys">




    
    
    <div class="splunk-button base-component parbase">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/customers/success-stories/cainz.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">お客様事例を読む</span>
  </a>

  
  
  


    
   
    
        

    

</div>


</div>

         </div>    
    </div>    





    



    
   
    
        

    

</div>

        
    </div>
    <style type="text/css">
        .aem-AuthorLayer-Edit .slick-track {
            width: 100% !important;
            transform: inherit !important;
        }
        .aem-AuthorLayer-Edit .slick-slide.slick-active {
            display: block !important;
        }
        .aem-AuthorLayer-Edit .slick-slide {
            display: none !important;
        }
    </style>






    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-lg desktop-spacer-bottom-margin-lg
      mobile-spacer-top-margin-none mobile-spacer-bottom-margin-none
       
      
      
       
       default speakerDetail-spacer">
        
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <div class="we-splunk"> 
   <section class="promotional-cta parbase aem-GridColumn aem-GridColumn--default--12"> 
    <div class="container"> 
     <div class="column-wrapper"> <a href="/ja_jp/form/splunk-named-a-leader-in-siem.html" class="prom-cta">レポートを読む</a> 
      <div class="img-wrap"> 
       <img data-src="/content/dam/splunk2/en_us/images/resources/hat-trick/seim-hat-trick-web-banner-graphic.jpg" class="lazyload" alt="SIEMハットトリック"> 
      </div> 
      <div class="text-wrapper"> 
  <div> 
        <h4 class="splunk2-h4">Splunkがハットトリックを達成</h4> <p class="splunk-body">3つのアナリストレポートにおいてSIEMのリーダーに認定</p>
       </div> <span class="link-text ">レポートを読む ›</span> 
      </div> 
     </div> 
    </div> 
   </section> 
  </div> 
  <style>
   .promotional-cta{padding:40px 0}@media screen and (min-width:767px) and (max-width:991px){.promotional-cta{padding:25px 0}}@media screen and (max-width:767px){.promotional-cta{padding:20px 0 30px}}.promotional-cta .column-wrapper{position:relative;border-radius:2px;box-shadow:0 6px 12px 0 rgba(0,0,0,.05),0 0 25px 8px rgba(0,0,0,.08);background-color:#fff;width:100%;display:flex;min-height:150px;transition:all .3s linear}@media screen and (max-width:767px){.promotional-cta .column-wrapper{height:auto;flex-wrap:wrap;justify-content:center;text-align:center}}@media screen and (max-width:595px){.promotional-cta .column-wrapper{text-align:left;justify-content:inherit}}.promotional-cta .column-wrapper:hover{transform:scale(1.03)}.promotional-cta .column-wrapper:hover .text-wrapper span::after{opacity:1;visibility:visible}.promotional-cta .column-wrapper a{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:2;opacity:0;pointer-events:initial}.promotional-cta .column-wrapper .img-wrap{height:150px;width:266px}@media screen and (max-width:767px){.promotional-cta .column-wrapper .img-wrap{width:100%}}.promotional-cta .column-wrapper .img-wrap img{height:100%;object-fit:contain}.promotional-cta .column-wrapper .text-wrapper{width:calc(100% - 266px);padding:20px 40px;display:inline-flex;justify-content:space-between;align-items:center}@media screen and (max-width:1199px){.promotional-cta .column-wrapper .text-wrapper{padding:20px 28px}}@media screen and (max-width:767px){.promotional-cta .column-wrapper .text-wrapper{width:100%;flex-wrap:wrap;justify-content:space-between}}@media screen and (max-width:595px){.promotional-cta .column-wrapper .text-wrapper{padding:20px}}.promotional-cta .column-wrapper .text-wrapper h3{max-width:540px;margin:0;font-size:30px;line-height:1.1;font-weight:700}@media screen and (min-width:992px) and (max-width:1199px){.promotional-cta .column-wrapper .text-wrapper h3{max-width:500px}}@media screen and (max-width:991px){.promotional-cta .column-wrapper .text-wrapper h3{font-size:25px;max-width:255px}}@media screen and (max-width:767px){.promotional-cta .column-wrapper .text-wrapper h3{max-width:100%;text-align:left}}@media screen and (max-width:595px){.promotional-cta .column-wrapper .text-wrapper h3{font-size:20px}}.promotional-cta .link-text{font-size:15px;font-weight:700;font-style:normal;line-height:1;letter-spacing:.2px;text-align:left;color:#ed0080;display:inline-block;vertical-align:top;position:relative;margin-top:10px;padding-bottom:3px}
   .promotional-cta .column-wrapper:hover .text-wrapper .link-text{
   text-decoration: none!important;
       color: #e20082;
       outline: none;
       background-size: 100% 1px;}
   .promotional-cta .column-wrapper .text-wrapper .link-text{
       display: inline;
      white-space: nowrap;
       background-image: -webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor));
       background-image: linear-gradient(currentColor,currentColor);
       background-position: 0% 100%;
       background-repeat: no-repeat;
       background-size: 0% 1px;
       transition: background-size .3s;}
  
   </style>  
 

	 </section>



    </div>
    
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-sm desktop-spacer-bottom-margin-none
      mobile-spacer-top-margin-none mobile-spacer-bottom-margin-none
       
      
      
       
       default speakerDetail-spacer">
        
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	     
  <div class="we-splunk"> 
    <section class="infographic-cta parbase aem-GridColumn aem-GridColumn--default--12"> 
     <div class="container"> 
      <div class="intro-with-btn"> 
       <div class="intro"> 
        <h2>セキュリティとオブザーバビリティの統合プラットフォーム</h2> 
        <p>大規模な環境でも可視化を可能にし、アクションにつなげます。</p> 
       </div> 
       <div class="btn-wrapper"> <a href="/ja_jp/products.html" class="new-btn-transparent ">製品の概要を見る</a> 
       </div> 
      </div>
    </div> 
   </section> 
  </div> 
  <style>

 .infographic-cta #canvas, .infographic-cta #animation_container,
                        .infographic-cta  #dom_overlay_container{
                            height: 100% !important;
                            width: 100% !important;
                        }
 h2{
line-height: 1.2;}
@media screen and (min-width: 595px) and (max-width: 767px) {
     .infographic-cta {
         padding: 25px 0;
    }
}
 .infographic-cta .intro-with-btn {
     font-size: 0;
     margin-bottom: 30px;
}
 @media screen and (min-width: 1399px) {
     .infographic-cta .intro-with-btn {
         padding: 0 17px;
    }
}
 .infographic-cta .intro-with-btn .intro {
     display: inline-block;
     width: 77%;
     vertical-align: bottom;
     padding-right: 36px;
}
 @media screen and (min-width: 992px) and (max-width: 1199px) {
     .infographic-cta .intro-with-btn .intro {
         width: 73%;
    }
}
 @media screen and (max-width: 991px) {
     .infographic-cta .intro-with-btn .intro {
         width: 100%;
         padding-right: 0px;
    }
}
 .infographic-cta .intro-with-btn .intro span {
     font-size: 14px;
     font-weight: 500;
     line-height: 1;
     color: #363c44;
     text-transform: uppercase;
      font-famliy: splunk_data_sans,Helvetica,sans-serif;
}
 @media screen and (max-width: 595px) {
     .infographic-cta .intro-with-btn .intro span {
         font-size: 12px;
    }
}
 .infographic-cta .intro-with-btn .intro p {
     max-width: 657px;
     color: #363c44;
}
 .infographic-cta .intro-with-btn .btn-wrapper {
     display: inline-block;
     vertical-align: bottom;
     width: 23%;
}
 @media screen and (min-width: 992px) and (max-width: 1199px) {
     .infographic-cta .intro-with-btn .btn-wrapper {
         width: 27%;
    }
}
 @media screen and (max-width: 991px) {
     .infographic-cta .intro-with-btn .btn-wrapper {
         width: 100%;
         margin-top: 10px;
    }
}
 
.new-btn-transparent {
     vertical-align: top;
     font-size: 14px;
     font-family: 'Mulish', sans-serif;
     font-weight: bold;
     letter-spacing: 0.3px;
     color: #fff;
     display: inline-block;
     position: relative;
     border: 1px solid #ed0080;
     overflow: hidden;
     margin-top: 10px;
     background: transparent;
     color: #ed0080;
     line-height: 1.4;
     padding: 10px 21px;
     border-radius: 35px;
     transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
     margin-right: 5px;
pointer-events: initial;
}

.new-btn-transparent:hover{
    background: #ed0080;
    color: #ffffff;
 
}

 
.infographic-cta .content-outer{
  display: flex;
flex-wrap: wrap;
pointer-events: initial;
}


.infographic-cta .content-outer img{
    height: auto;
    width: 100%;
}


 

.infographic-cta h2{
 font-size: 40px;
font-famlily: splunk_data_sans,Helvetica,sans-serif;
font-weight: 700;
}
.infographic-cta a{
text-decoration: none;
}
.infographic-cta .link-text{
color: #E20083;}
@media screen and (max-width: 768px){
.infographic-cta h2{
 font-size: 36px;
}
}
.infographic-cta{
position: relative;}
.we-left-triangle{
position: absolute;
    left: 0;
    top: 30px;
    z-index: -1;
    width: 200px;
    height: 500px;
    overflow: hidden;
}

.infographic-cta .we-left-triangle:after{
  content: "";
    position: absolute;
    left: 0px;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/content/dam/images/we_splunk/left-triangle.svg');
    transition: left 1s ease-in-out;
}
 @media screen and (max-width: 595px) {
    .infographic-cta .we-left-triangle:after {
        display: none;
    }
}

.infographic-cta  .slider{
  position:relative;
  width: 100%;
  overflow:hidden;

  display: none;
}

.infographic-cta  .slider ul{
  position:relative;
  width:100%;
  margin:0;
  padding:0;
  display:inline-block;
  list-style:none;
  min-height: 130px;
}


.infographic-cta  .slider ul li{
  position:relative;
  float: left;
  display:inline-block;
  margin:0;
  padding:0;
  text-align:center;
  min-height: 130px;
  max-width: 315px;
  overflow: hidden;

display: none;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

}
.infographic-cta  .slider ul li:before{
display: none;}
.infographic-cta  .slider ul li.active{
 display: inline-block;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.infographic-cta  .control{
  position: absolute;
  z-index: 999;
  display: block;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.08);
}

.infographic-cta .prev{
  left:0px;
}

.infographic-cta  .next{
  right:0px;
}
.infographic-cta  .nav-wrap{
    position: absolute;
    top: 10px;
    right: 5px;
    width: 81px;
    height: 35px;
    z-index: 99;
    background: #fff;
}

.infographic-cta  .slider ul li h4,p {
  text-align: left;
}
.infographic-cta  .slider ul li h4{
    max-width: calc(100% - 130px);
}
.infographic-cta  .slider ul li p{
    margin-top: 10px;
    width: 100%;
    max-width: calc(100% - 20px);
}
.infographic-cta  .slider ul li a{
    text-align: left;
    display: block;
}
.infographic-cta  .slider .nav-wrap a img{
    height: 15px;
    width: 10px;
    top: 10px;
    left: 12px;
    position: absolute;
}
.infographic-cta  .slider .nav-wrap a.next img{
    transform: rotate(180deg);
    left: 14px
}

   

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
     
     
     
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
    .infographic-cta .we-left-triangle{
    display: none;
  }
    
     }
@media screen and (max-width: 767px){
    .infographic-cta .slider{
        display: block;
        border-style: solid;
        border-width: 4px;
        border-image-source: linear-gradient(90deg,#f99d1c 9%,#f99c1c 0,#f4781f 22%,#f16221 32%,#f05a22 38%,#ee1d62 65%,#ed0080 76%);
        border-image-slice: 1;
        background-color: hsla(0,0%,100%,.5);
        padding: 15px;
        width: 100%;
        max-width: 345px !important;
        min-height: 130px;
pointer-events: initial;
margin: 20px auto;
    }
  .infographic-cta .we-left-triangle{
    display: none;
  }
   
}
@-webkit-keyframes fadeIn {
  from {
  opacity: 0;
  }

  to {
  opacity: 1;
  }
}
@keyframes fadeIn {
  from {
  opacity: 0;
  }

to {
  opacity: 1;
  }
}
</style> 
  <script>
var currentIndex = 0,
items = $('.slider ul li'),
itemAmt = items.length;

function cycleItems() {
var item = $('.slider ul li').eq(currentIndex);
items.hide().removeClass('active');;
item.css('display','inline-block').addClass('active');
}

var autoSlide = setInterval(function() {
currentIndex += 1;
if (currentIndex > itemAmt - 1) {
  currentIndex = 0;
}

}, 2500);

$('.next').click(function(e) {
e.preventDefault();
clearInterval(autoSlide);
currentIndex += 1;
if (currentIndex > itemAmt - 1) {
  currentIndex = 0;
}
cycleItems();
});

$('.prev').click(function(e) {
e.preventDefault();
clearInterval(autoSlide);
currentIndex -= 1;
if (currentIndex < 0) {
  currentIndex = itemAmt - 1;
}
cycleItems();
});

$('.infographic-cta .slider ul li.security a').on('click',function(){
  window.dataLayer.push({
                                            event: "linkClick",
                                            eventInfo: {
                                                category: "All clicks on CTA Button",
                                                clickUrl: "https://www.splunk.com/ja_jp",
                                                component: "PlainHtml_Security_Overview",
                                                componentName: "plain-html",
                                                container: "infographic-cta",
                                                destinationUrl: "https://www.splunk.com/en_us/products/enterprise-security.html",
                                                modernization: !0,
                                            },
                                        });
});


$('.infographic-cta .slider ul li.observability a').on('click',function(){
  window.dataLayer.push({
                                            event: "linkClick",
                                            eventInfo: {
                                                category: "All clicks on CTA Button",
                                                clickUrl: "https://www.splunk.com/ja_jp",
                                                component: "PlainHtml_Observability_Overview",
                                                componentName: "plain-html",
                                                container: "infographic-cta",
                                                destinationUrl: "https://www.splunk.com/en_us/observability.html",
                                                modernization: !0,
                                            },
                                        });
             
});

$('.infographic-cta .slider ul li.community a').on('click',function(){
   window.dataLayer.push({
                                            event: "linkClick",
                                            eventInfo: {
                                                category: "All clicks on CTA Button",
                                                clickUrl: "https://www.splunk.com/ja_jp",
                                                component: "PlainHtml_Splunkbase",
                                                componentName: "plain-html",
                                                container: "infographic-cta",
                                                destinationUrl: "https://splunkbase.splunk.com/",
                                                modernization: !0,
                                            },
                                        });
             
});

$('.infographic-cta .slider ul li.custom a').on('click',function(){
   window.dataLayer.push({
                                            event: "linkClick",
                                            eventInfo: {
                                                category: "All clicks on CTA Button",
                                                clickUrl: "https://www.splunk.com/ja_jp",
                                                component: "PlainHtml_Start_Creating",
                                                componentName: "plain-html",
                                                container: "infographic-cta",
                                                destinationUrl: "https://dev.splunk.com/",
                                                modernization: !0,
                                            },
                                        });
             
});

$('.infographic-cta .slider ul li.the-splunk a').on('click',function(){
  window.dataLayer.push({
                                            event: "linkClick",
                                            eventInfo: {
                                                category: "All clicks on CTA Button",
                                                clickUrl: "https://www.splunk.com/ja_jp",
                                                component: "PlainHtml_Splunk_platform_Overview",
                                                componentName: "plain-html",
                                                container: "infographic-cta",
                                                destinationUrl: "https://www.splunk.com/en_us/products/splunk-cloud-platform.html",
                                                modernization: !0,
                                            },
                                        });
             
});
 </script> 
	 </section>



    </div>
    
    
   
    
        

    

</div>
<div class="flex-container base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    <a id="marketecture-image" class="page-anchor"></a>
    
    
    






<div class="splunk-flex-container
	splunk2-background
	none
	
	 border-color-splunk-gray-light
	
	
	
	
	
	
	
	
	
	
     " style="
		--defaultAnimation:- s;
		--mobileanimation:- s;
		margin-top:px; margin-bottom:px;">
	
	<div style="min-height: 0px" class="d-flex flex-wrap flex-row    
			align-items-start align-content-start
			justify-content-center
			align-items-md-start
			align-content-md-start
			justify-content-md-center avoidMobileFitContent">
		



    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-1 col-md-12 order-md-1">
	    	<div class="plain-html base-component parbase">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <style>
    @media (min-width: 768px) {
        #marketecture-image + .splunk-flex-container .splunk-picture-wrapper {
            position: relative;
            display: block;
            text-align: center;
        }

        #marketecture-image + .splunk-flex-container .splunk-picture-wrapper .splunk-image {
            position: relative;
            max-width: 1140px;

            margin-right: auto;
            margin-left: auto;
            width: auto;
        }
    }

    @media (min-width: 768px) {
        #marketecture-image + .splunk-flex-container .splunk-picture-wrapper .splunk-image {
            max-width: 750px;
        }
    }
    @media (min-width: 992px) {
        #marketecture-image + .splunk-flex-container .splunk-picture-wrapper .splunk-image {
            max-width: 970px;
        }
    }
    @media (min-width: 1200px) {
        #marketecture-image + .splunk-flex-container .splunk-picture-wrapper .splunk-image {
            max-width: 1170px;
        }
    }
</style>
	 </section>



    
   
    
        

    

</div>

		</div>
	

    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-1  order-md-1">
	    	<div class="text-image base-component parbase">
   
     
        

    


    
    
    
    

       

	<div class="splunk-tni-wrapper">
		
    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/text-image/v1/text-image/clientlibs.ad74bf04bf19d9b07501d2913991d33c.css" type="text/css">



		<div class="tni tni--image-top  unwrap-text">

			

			
			<div class="tni__image splunk-image splunk-image-fullwidth " style="min-width: splunk-image-fullwidth;max-width: splunk-image-fullwidth;">
				
				
					
						
						<picture class="splunk-picture-wrapper   center-center">
						
						<source srcset="/content/dam/splunk2/ja_jp/images/homepage/hp-marketecture-mobile.png" media="(max-width: 767px)"/>
						
						<img src="/content/dam/splunk2/ja_jp/images/homepage/hp-marketecture.png" class="splunk-image splunk-image-fullwidth " alt="The Splunk platform provides unified solutions for security and observability on a unified platform, powered by Splunk AI" loading="lazy"/>
								<figcaption></figcaption>
						</picture>
				
				
			</div>

			<!-- Text authored -->
			
				
			
		</div>
		
    
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/text-image/v1/text-image/clientlibs.f950d2a4d0e557ebbef6ae521de96ebc.js"></script>



	</div>


    
   
    
        

    

</div>

		</div>
	


	</div>
</div>

    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/flex-container/v1/flex-container/clientlibs.feae5435dea5fdfa5e632f36c72725c3.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/flex-container/v1/flex-container/clientlibs.8cd842f1696c0e47bd4255bdcd6f1d62.js"></script>



    
   
    
        

    

</div>
<div class="flex-container base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    <a id=" platform" class="page-anchor"></a>
    <div class="desktop-spacer-top-margin-sm desktop-spacer-bottom-margin-none
      mobile-spacer-top-margin-lg mobile-spacer-bottom-margin-none
       
      
      
       
      splunk-gray-light default speakerDetail-spacer">
        
    






<div class="splunk-flex-container
	splunk2-background
	none
	
	 border-color-splunk-gray-light
	
	
	
	
	
	
	
	
	
	
     " style="
		--defaultAnimation:- s;
		--mobileanimation:- s;
		margin-top:px; margin-bottom:px;">
	
	<div style="min-height: 0px" class="d-flex flex-wrap flex-row    
			align-items-stretch align-content-stretch
			justify-content-start
			align-items-md-center
			align-content-md-stretch
			justify-content-md-start ">
		



    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-1 col-md-12 order-md-1">
	    	<div class="container responsivegrid">

    



   
     
        

    


    
    
        
	
		
    
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="text-image base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    <div class="desktop-spacer-top-margin-none desktop-spacer-bottom-margin-md
      mobile-spacer-top-margin-none mobile-spacer-bottom-margin-md
       
      
      
       
       default speakerDetail-spacer">
        
    

       

	<div class="splunk-tni-wrapper">
		
    



		<div class="tni   unwrap-text">

			

			
			

			<!-- Text authored -->
			
				<div class="tni__desc rte-container ">
					
					<!-- Below content for description will come from RTE -->
					<span class=" tabContent">
						<h2><span class="splunk2-h2">お客様の成功を支援する強固なネットワーク</span></h2>

					</span>
					<!-- Above content for description will come from RTE -->
					
					
				</div>
			
		</div>
		
    



	</div>


    </div>
    
    
   
    
        

    

</div>

    
</div>


    <!-- Standard Variation - Starts -->
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    


   
    
        

    




</div>

		</div>
	

    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-2 col-md-4 order-md-2">
	    	<div class="container responsivegrid">

    



   
     
        

    


    
    
        
	
		
    
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="splunk-data-outcomes base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    




    
	<div class="data-outcomes section">
    	<div class="dataOutcomes">
        	<div class="dataOutcomes__wrapper">
            	  
        		 
      					
	
    <div class="dataOutcomes__stats align-left">
    	
        <div class="dataOutcomes__stats__itemContainer">
			<div class="dataOutcomes__stats__item">
            	<div class="dataOutcomes__stats__item__number splunk2-h2 splunk-black splunk2-color">2,200社以上</div>
            	<div class="dataOutcomes__stats__item__subCopy body-small">Splunkを最大限に活用できるよう、さまざまな業界のパートナーがお客様を支援します。</div>
        	</div>

             
            

        </div>
    </div>    

            </div>
        </div>
    </div>


  
    

    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/splunk-data-outcomes/v1/splunk-data-outcomes/clientlibs.d2f530b092dd0812fa74c99ad2bf7bc2.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/splunk-data-outcomes/v1/splunk-data-outcomes/clientlibs.95df477f447e360524dd6a42c5435af1.js"></script>



    
   
    
        

    

</div>
<div class="splunk-button base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/partners.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">パートナーを探す</span>
  </a>

  
  
  


    
   
    
        

    

</div>

    
</div>


    <!-- Standard Variation - Starts -->
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    


   
    
        

    




</div>

		</div>
	

    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-3 col-md-4 order-md-3">
	    	<div class="container responsivegrid">

    



   
     
        

    


    
    
        
	
		
    
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="splunk-data-outcomes base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    




    
	<div class="data-outcomes section">
    	<div class="dataOutcomes">
        	<div class="dataOutcomes__wrapper">
            	  
        		 
      					
	
    <div class="dataOutcomes__stats align-left">
    	
        <div class="dataOutcomes__stats__itemContainer">
			<div class="dataOutcomes__stats__item">
            	<div class="dataOutcomes__stats__item__number splunk2-h2 splunk-black splunk2-color">13,000人以上</div>
            	<div class="dataOutcomes__stats__item__subCopy body-small">コミュニティに参加しているメンバーが、お客様の質問に答え、アイデアを共有し、問題を解決します。</div>
        	</div>

             
            

        </div>
    </div>    

            </div>
        </div>
    </div>


  
    

    



    
   
    
        

    

</div>
<div class="splunk-button base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="https://community.splunk.com/t5/tag/japanese/tg-p/category-id/en-us" data-track-analytics="true" target="_blank" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" rel="noopener">
    <span class="custom-analytics-class customAnalytics-">コミュニティに参加する</span>
  </a>

  
  
  


    
   
    
        

    

</div>

    
</div>


    <!-- Standard Variation - Starts -->
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    


   
    
        

    




</div>

		</div>
	

    
    
    
	
	    <div class="flex-item flex-fill   w-100 order-4 col-md-4 order-md-4">
	    	<div class="container responsivegrid">

    



   
     
        

    


    
    
        
	
		
    
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="splunk-data-outcomes base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    




    
	<div class="data-outcomes section">
    	<div class="dataOutcomes">
        	<div class="dataOutcomes__wrapper">
            	  
        		 
      					
	
    <div class="dataOutcomes__stats align-left">
    	
        <div class="dataOutcomes__stats__itemContainer">
			<div class="dataOutcomes__stats__item">
            	<div class="dataOutcomes__stats__item__number splunk2-h2 splunk-black splunk2-color">1,800人以上</div>
            	<div class="dataOutcomes__stats__item__subCopy body-small">Splunkのエキスパートが、お客様のニーズに応じて設計、導入、拡張をサポートします。</div>
        	</div>

             
            

        </div>
    </div>    

            </div>
        </div>
    </div>


  
    

    



    
   
    
        

    

</div>
<div class="splunk-button base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


  
    
  
  <a class="splunk-btn multiline 
   
  
	 
   sp-btn-borderless sp-btn-pink none ga-cta custom-analytics-class customAnalytics-
	  
	  standalone style
	      " href="/ja_jp/customer-success.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false" data-urlmobile-behavior="_self">
    <span class="custom-analytics-class customAnalytics-">エキスパートのアドバイスを得る</span>
  </a>

  
  
  


    
   
    
        

    

</div>

    
</div>


    <!-- Standard Variation - Starts -->
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    


   
    
        

    




</div>

		</div>
	


	</div>
</div>

    



    </div>
    
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    <div></div>
	     
  <style>
.data-outcomes .dataOutcomes {
  position: relative;
  padding: 0;
}
@media (min-width: 1200px) {
  .splunk-flex-container .flex-item .container {
    width: auto;
  }
}
@media (max-width: 767px) {
  .splunk-flex-container .flex-item, .splunk-flex-container .flex-item .container {
    padding-left: 0px;
    padding-right: 0px;
  }
  .data-outcomes .dataOutcomes {
    margin: 0;
  }  
}
</style> 
   
 

	 </section>



    
   
    
        

    

</div>
<div class="container responsivegrid aem-GridColumn aem-GridColumn--default--12">

    



   
     
        

    


    
    
        
	
		
    
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <style>
    .enderSection {
        position: relative;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: min-content min-content;

        border-style: solid;
        border-width: 4px;
        border-image-source: linear-gradient(to right, #f99d1c 9%, #f99c1c 9%, #f4781f 22%, #f16221 32%, #f05a22 38%, #ee1d62 65%, #ed0080 76%);
        border-image-slice: 1;
        background-color: rgba(255, 255, 255, .5);

        margin-top: 80px;
        margin-bottom: 60px;

        pointer-events: all;
    }

    .enderSection-left-wrapper {
        display: grid;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .enderSection-left-wrapper .headingSection {
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 110%;

        color: #0C1724;

        margin-top: 29px;
        padding-left: 34px;
        padding-right: 34px;
    }
    .enderSection-left-wrapper .subheadingSection {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        
        color: #0C1724;

        margin-top: 10px;
        padding-left: 34px;
        padding-right: 34px;
    }

    .enderSection-left-wrapper .buttonsSection {
        margin-top: 21px;

        display: flex;
        flex-direction: row;
        justify-content: start;
        padding-left: 34px;
        padding-right: 34px;
        flex-wrap:wrap;
        gap:22px;
    }
    .enderSection-left-wrapper .buttonsSection .leftCTAWrapper {
    }
    .enderSection-left-wrapper .buttonsSection .rightCTAWrapper {}

    .enderSection-right-wrapper {
        display: grid;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 2;
        grid-row-end: 3;

        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        margin-top: 40px;
    }

    .enderSection-right-wrapper .circleGradientSection {
        display: none;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .enderSection-right-wrapper .circleGradientSection .gradient-element {
        width: 425px;
        height: 425px;
        background: linear-gradient(270deg, #F99D1C 9.65%, #F99C1C 10.1%, #F4781F 23.36%, #F16221 34.25%, #F05A22 41.18%, #EE1D62 69.98%, #ED0080 82.38%);
        transform: translateY(70px) matrix(-1, 0, 0, 1, 0, 0);
        border-radius: 50%;
    }

    .enderSection-right-wrapper .computerSection {
        position: relative;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        justify-self: end;
        align-self: end;

        z-index: 0;
    }

    .enderSection-right-wrapper .computerSection .background-computer {
        position: relative;

        display: block;
        height: 225px;
        width: auto;
        min-width: 10px;
        transform: translateX(20px);
    }

    .enderSection-right-wrapper .smilingDudeSection {
        position: relative;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        justify-self: start;
        align-self: end;

        z-index: 1;
    }

    .enderSection-right-wrapper .smilingDudeSection .laughingDude {
        position: relative;

        display: block;
        height: 235px;
        width: auto;
    }

    @media (min-width: 787px) {
        .enderSection {
            width: 100%;
            padding-right: 0px;
            padding-left: 0px;
            margin-right: auto;
            margin-left: auto;
          
            grid-template-rows: min-content;
            margin-top: 80px;
            margin-bottom: 60px;
        }

        .enderSection-left-wrapper {
            display: flex;
            grid-column-start: 1;
            grid-column-end: 6;
            grid-row-start: 1;
            grid-row-end: 2;

            justify-content: center;
            align-items: start;
            flex-direction: column;
        }

        .enderSection-left-wrapper .headingSection {
            font-size: 40px;
            margin-top: 0;
        }
        .enderSection-left-wrapper .subheadingSection {
            margin-top: 22px;
            font-size: 18px;
        }
        .enderSection-left-wrapper .buttonsSection {
            margin-top: 41px;
            padding-left: 34px;
            padding-right: 34px;
            gap:22px;
            justify-content: space-around;
            flex-wrap: nowrap;
        }
        .enderSection-left-wrapper .buttonsSection .leftCTAWrapper {
            margin-bottom: 0;
        }
        .enderSection-left-wrapper .buttonsSection .rightCTAWrapper {}

        .enderSection-right-wrapper {
            display: grid;
            grid-column-start: 6;
            grid-column-end: 13;
            grid-row-start: 1;
            grid-row-end: 2;

            margin-top: 0;
        }

        .enderSection-right-wrapper .circleGradientSection {
            display: grid;
            overflow: hidden;
            align-items: end;
            justify-items: end;
        }

        .enderSection-right-wrapper .circleGradientSection .gradient-element {
            margin-top: -50px;
        }

        .enderSection-right-wrapper .computerSection {
            justify-self: unset;
            align-self: unset;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            align-items: end;
            justify-items: end;
        }

        .enderSection-right-wrapper .computerSection .background-computer {
            height: 336px;

            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;

            display: grid;
            transform: translateX(50px);
        }

        .enderSection-right-wrapper .smilingDudeSection {
            justify-self: unset;
            align-self: unset;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            align-items: end;
            justify-items: start;
        }

        .enderSection-right-wrapper .smilingDudeSection .laughingDude {
            height: 326px;
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;

            display: grid;
            transform: translateX(80px);
        }
    }

    /* container fixes to comply with bootstrap widths */
    @media (min-width: 576px) {
        .enderSection {
            max-width: 510px;
          }
    }

    @media (min-width: 768px) {
        .enderSection {
            max-width: 690px;
        }
    }

    @media (min-width: 992px) {
        .enderSection {
            max-width: 930px;
        }
    }
    @media (min-width: 1200px) {
        .enderSection {
            max-width: 1110px;
          }
    }
    
</style>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <div class="enderSection">
    <div class="enderSection-left-wrapper">
        <div class="headingSection">不測の事態への備えはできていますか？</div>
        <div class="subheadingSection">組織のレジリエンス強化を始めましょう。</div>
        <div class="buttonsSection">
            <div class="leftCTAWrapper">
                <a id="enderFreeTrial" class="splunk-btn multiline sp-btn-solid sp-btn-pink none ga-cta standalone style" href="/ja_jp/download.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false">
                    <span class="ga-cta ">無料トライアル版</span>
                </a>
            </div>
            <div class="rightCTAWrapper">
                <a id="enderContactSales" class="splunk-btn multiline sp-btn-hollow sp-btn-pink none ga-cta standalone style" href="/ja_jp/talk-to-sales.html" data-track-analytics="true" target="_self" data-target="#" data-is-back-button="false" data-modalcontent-bookmarkable="false">
                    <span class="ga-cta ">営業へのお問い合わせ</span>
                </a>
            </div>
        </div>
    </div>
    <div class="enderSection-right-wrapper">
        <div class="circleGradientSection">
            <div class="gradient-element"></div>
        </div>
        <div class="computerSection">
            <img class="background-computer" src="/content/dam/images/we_splunk/computer.png" alt="computer" loading="lazy"> 
        </div>
        <div class="smilingDudeSection">
            <img class="laughingDude" alt='laughing person' src="/content/dam/splunk2/en_us/images/homepage/hp-ender-person.png" loading="lazy"/>
        </div>
    </div>
</div>
	 </section>



    
   
    
        

    

</div>

    
</div>


    <!-- Standard Variation - Starts -->
    
    <!-- Standard Variation - Starts -->

    <!-- Newsroom Variation - Starts -->
    
    <!-- Newsroom Variation - Ends -->

    <!-- Accordion Variation - Starts -->
    
    <!-- Accordion Variation - Ends -->

    <!-- Cap Cards Variation - Starts -->
    
    <!-- Cap Cards Variation - Enda -->

    <!-- Animation Variation - Starts -->
    
    <!-- Animation Variation - Ends -->
    <!-- Cloud Variation - Starts -->
    
    <!-- Cloud Variation - Ends -->

	

    


   
    
        

    




</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    <div></div>
	    <style>
    a.banner-policy-link{
    pointer-events:auto;
    }
    @media (max-width: 991px) {
    .we-splunk .container{
    max-width: calc(100% - 40px)!important ;
    margin: 0 20px !important;
    }
    }
    @media (max-width: 767px) {
    .we-splunk .container{
    max-width: calc(100% - 20px)!important ;
    margin: 0 10px !important;
    }
    }
    @media (max-width: 991px) {
    .flex-container, .carousel-container{
    max-width: calc(100% - 40px)!important ;
    margin: 0 20px !important;
    }
    }
    .async-hide {opacity: 1 !important;} 
  </style>
  <script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date; h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')}; (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c; })(window,document.documentElement,'async-hide','dataLayer',4000, {'GTM-N4QZZ4H':true});</script> 
  <script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-399680-1', 'auto', {allowLinker: true}); ga('require', 'GTM-N4QZZ4H'); </script> 
  <script type="text/javascript" src="/content/dam/images/we_splunk/canvas/js/canvas.js" defer></script> 
  <script type="text/javascript" src="/content/dam/images/we_splunk/new-canvas/jp_homepage.js" defer></script> 
  <script type="text/javascript" src="/content/dam/images/we_splunk/canvas/js/homepage_hero_banner_1.js?v1" defer></script> 
  <script type="text/javascript" src="/content/dam/images/we_splunk/benefits.js?v1" defer></script> 
  <style>
    .async-hide {opacity: 1 !important;} 
  </style>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <style>
/* normalizing subhead colors */

.whySplunk-header-leftColumn h2,
.whySplunk-header-leftColumn p,
.we-customer-quote-grid .intro-with-btn h2,
.we-customer-quote-grid .intro-with-btn p,
.infographic-cta h2,
.infographic-cta .intro-with-btn .intro p {
    color: #0C1724 !important;
}
</style>
<script>
const headerRoot = document.querySelector('.root.responsivegrid.container .responsivegrid');
if (headerRoot !== null) headerRoot.id = 'splunk-main-content';
</script>
	 </section>



    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <!--Analytics Code ja_jp-->
<!-- Last update May 10 2023 -->

<script>
  (function ($) {
    const homepageAnalitycsLocaleCode = 'ja_jp';

    // Hero Banner button CTA
    $('.hero-banner .splunk-btn').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "See How Splunk Can Help",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_see-how-splunk-can-help_content-wrap",
          componentName: "Content Wrap",
          container: "plainHTML",
          destinationUrl: "#yardvideo-modal-oduGmwCiyzuZWvzL64GRFq",
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'See How Splunk Can Help',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: '#yardvideo-modal-oduGmwCiyzuZWvzL64GRFq',
        link_position: 'plainHTML'
      });
    });

    //in-page promo banner
    $('.promotional-cta .column-wrapper a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Show Me",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_show-me_column-wrapper",
          componentName: "column_wrapper",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/form/splunk-named-a-leader-in-siem.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Show Me',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/form/splunk-named-a-leader-in-siem.html`,
        link_position: 'plainHTML'
      });
    });

    // in-page promo banner (legacy gartner) 
    $('.promotional-cta3 .column-wrapper a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "View 2022 Gartner Magic Quadrant for SIEM Report",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_get-report_column-wrapper",
          componentName: "column_wrapper",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/form/gartner-siem-magic-quadrant.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        'link_text': 'View 2022 Gartner Magic Quadrant for SIEM Report',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/form/gartner-siem-magic-quadrant.html`,
        link_position: 'plainHTML'
      });
    });

    // Marketecture Header CTA button
    $('.infographic-cta .intro-with-btn .btn-wrapper a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Go to product Overview",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_go-to-product-overview_btn-wrapper",
          componentName: "btn-wrapper",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/products.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Go to product Overview',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/products.html`,
        link_position: 'plainHTML'
      });
    });

    // Why Splunk Section
    $('.whySplunkSection .splunk-button a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Explore Why Splunk",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_explore-why-splunk_splunk-button",
          componentName: "splunk-button",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/about-us/why-splunk.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Explore Why Splunk',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/about-us/why-splunk.html`,
        link_position: 'plainHTML'
      });
    });

    // I think this one is deprecated
    $('.card-insights .btn-wrap a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Explore Why Splunk",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "CardInsights_explore-why-splunk_btn-wrap",
          componentName: "btn-wrap",
          container: "CardInsights",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/about-us/why-splunk.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Explore Why Splunk',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/about-us/why-splunk.html`,
        link_position: 'CardInsights'
      });
    });

    // Carousel Header Button CTA
    $('.we-customer-quote-grid .btn-wrapper a').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "View All Customer Stories",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_view-all-customer-stories_btn-wrapper",
          componentName: "btn-wrapper",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'View All Customer Stories',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers.html`,
        link_position: 'plainHTML'
      });
    });

    // Carousel all buttons click handler
    $('.carousel-container .customer-quote a.splunk-btn').on('click', function () {
      let index = $('.customer-quote__carousel ul li.slick-active').index();
      if (index == 0) {
        window.dataLayer.push({
          event: "linkClick_hp",
          eventInfo: {
            category: "All clicks on CTA Button",
            eventLabel: "Read The Story-toyota-systems",
            clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            component: "CarouselContainer_read-the-story_splunk-button",
            componentName: "splunk-button ",
            container: "CarouselContainer",
            destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/toyota.html`,
            modernization: !0,
          },
        });
        //GA4 DataLayer Push
        window.dataLayer.push({
          event: 'link_click_hp',
          link_text: 'Read The Story-toyota-systems',
          link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/toyota.html`,
          link_position: 'CarouselContainer'
        });
        window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'cta-click',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "Read The Story-toyota-systems",
            link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/toyota.html`
        });
      } else if (index == 1) {
        window.dataLayer.push({
          event: "linkClick_hp",
          eventInfo: {
            category: "All clicks on CTA Button",
            eventLabel: "Read The Story-tokyo-stock-exchange",
            clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            component: "CarouselContainer_read-the-story_splunk-button",
            componentName: "splunk-button",
            container: "CarouselContainer",
            destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/tse-synthetic-monitoring.html`,
            modernization: !0,
          },
        });

        //GA4 DataLayer Push
        window.dataLayer.push({
          event: 'link_click_hp',
          link_text: 'Read The Story-tokyo-stock-exchange',
          link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/tse-synthetic-monitoring.html`,
          link_position: 'CarouselContainer'
        });

        window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'cta-click',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "Read The Story-tokyo-stock-exchange",
            link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/tse-synthetic-monitoring.html`
        });
      } else if (index == 2) {
        window.dataLayer.push({
          event: "linkClick_hp",
          eventInfo: {
            category: "All clicks on CTA Button",
            eventLabel: "Read The Story-Heineken",
            clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            component: "CarouselContainer_read-the-story_splunk-button",
            componentName: "splunk-button",
            container: "CarouselContainer",
            destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/heineken.html`,
            modernization: !0,
          },
        });

        //GA4 DataLayer Push
        window.dataLayer.push({
          event: 'link_click_hp',
          link_text: 'Read The Story-Heineken',
          link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/heineken.html`,
          link_position: 'CarouselContainer'
        });

        window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'cta-click',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "Read The Story-Heineken",
            link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/heineken.html`
        });
      } else if (index == 3) {
        window.dataLayer.push({
          event: "linkClick_hp",
          eventInfo: {
            category: "All clicks on CTA Button",
            eventLabel: "Read The Story-cainz",
            clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            component: "CarouselContainer_read-the-story_splunk-button",
            componentName: "splunk-button",
            container: "CarouselContainer",
            destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cainz.html`,
            modernization: !0,
          },
        });

        //GA4 DataLayer Push
        window.dataLayer.push({
          event: 'link_click_hp',
          link_text: 'Read The Story-cainz',
          link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cainz.html`,
          link_position: 'CarouselContainer'
        });
        
        window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'cta-click',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "Read The Story-cainz",
            link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cainz.html`
        });
      }
    });

    // Carousel bottom images clicks (the logos from the bottom of the carousel)
    $(document).on('click', '.customer-quote__carousel ul li #dots_0 img', function () {
    //   window.dataLayer.push({
    //     event: "linkClick_hp",
    //     eventInfo: {
    //       category: "All clicks on CTA Button",
    //       eventLabel: "toyota-systems",
    //       clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //       component: "CarouselContainer_toyota-systems_slick-dots",
    //       componentName: "slick-dots ",
    //       container: "CarouselContainer",
    //       destinationUrl: "toyota-systems",
    //       modernization: !0,
    //     },
    //   });

    //   window.dataLayer.push({
    //     event: 'link_click_hp',
    //     link_text: 'Read The Story-toyota-systems',
    //     link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //     link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/toyota.html`,
    //     link_position: 'CarouselContainer'
    //   });
          window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'slick dots',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "toyota-systems",
            link_url: ""
          });
    });
    $(document).on('click', '.customer-quote__carousel ul li #dots_1 img', function () {

    //   window.dataLayer.push({
    //     event: "linkClick_hp",
    //     eventInfo: {
    //       category: "All clicks on CTA Button",
    //       eventLabel: "tokyo-stock-exchange",
    //       clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //       component: "CarouselContainer_tokyo-stock-exchange_slick-dots",
    //       componentName: "slick-dots",
    //       container: "CarouselContainer",
    //       destinationUrl: "tokyo-stock-exchange",
    //       modernization: !0,
    //     },
    //   });
    //   //GA4 DataLayer Push
    //   window.dataLayer.push({
    //     event: 'link_click_hp',
    //     link_text: 'Read The Story-tokyo-stock-exchange',
    //     link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //     link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/tse-synthetic-monitoring.html`,
    //     link_position: 'CarouselContainer'
    //   });
          window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'slick dots',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "tokyo-stock-exchange",
            link_url: ""
          });
    });
    $(document).on('click', '.customer-quote__carousel ul li #dots_2 img', function () {
    //   window.dataLayer.push({
    //     event: "linkClick_hp",
    //     eventInfo: {
    //       category: "All clicks on CTA Button",
    //       eventLabel: "heineken",
    //       clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //       component: "CarouselContainer_heineken_slick-dots",
    //       componentName: "slick-dots ",
    //       container: "CarouselContainer",
    //       destinationUrl: "heineken",
    //       modernization: !0,
    //     },
    //   });

    //   window.dataLayer.push({
    //     event: 'link_click_hp',
    //     link_text: 'Read The Story-heineken',
    //     link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //     link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/heineken.html`,
    //     link_position: 'CarouselContainer'
    //   });
          window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'slick dots',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "heineken",
            link_url: ""
          });
    });
    $(document).on('click', '.customer-quote__carousel ul li #dots_3 img', function () {
    //   window.dataLayer.push({
    //     event: "linkClick_hp",
    //     eventInfo: {
    //       category: "All clicks on CTA Button",
    //       eventLabel: "cainz",
    //       clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //       component: "CarouselContainer_cainz_slick-dots",
    //       componentName: "slick-dots",
    //       container: "CarouselContainer",
    //       destinationUrl: "cainz",
    //       modernization: !0,
    //     },
    //   });

    //   window.dataLayer.push({
    //     event: 'link_click_hp',
    //     link_text: 'Read The Story-cainz',
    //     link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
    //     link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cainz.html`,
    //     link_position: 'CarouselContainer'
    //   });
          window.dataLayer.push({
            event: "carousel_click",
            carousel_name: "Customer Carousel",
            event_action: 'slick dots',
            link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
            link_text: "cainz",
            link_url: ""
          });
    });

    // Carousel bottom click links (addendum)
    /* $(document).on('click', '#dots_1, #dots_2, #dots_3, #dots_0', function () {
      window.dataLayer.push({
        event: "carousel_click",
        carousel_name: "Customer Carousel",
        event_action: 'slick dots',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_text: "",
        link_url: ""
      });
    }); */

    // Carousel buttons 'next' and 'previous' buttons
    $(document).on('click', '.customer-quote__carousel .carousel-next', function () {
      /* let index = $('.customer-quote__carousel ul li.slick-active').index();
      if (index == 2) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Next-calpoly",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-next_slick-button",
                  componentName: "slick-button ",
                  container: "CarouselContainer",
                  destinationUrl: "calpoly",
                  modernization: !0,
              },
          });
          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-CalPoly',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cal-poly.html`,
              link_position: 'CarouselContainer'
          });
      } else if (index == 1) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel rappi",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-next_slick-button",
                  componentName: "slick-button ",
                  container: "CarouselContainer",
                  destinationUrl: "rappi",
                  modernization: !0,
              },
          });

          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-rappi',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `https://${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/rappi.html`,
              link_position: 'CarouselContainer'
          });
      } else if (index == 0) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Next-manpower",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-next_slick-button",
                  componentName: "slick-button",
                  container: "CarouselContainer",
                  destinationUrl: "manpower",
                  modernization: !0,
              },
          });
          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-manpower',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/manpowergroup.html`,
              link_position: 'CarouselContainer'
          });
      } else if (index == 3) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Next-carrefour",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-next_slick-button",
                  componentName: "slick-button",
                  container: "CarouselContainer",
                  destinationUrl: "carrefour",
                  modernization: !0,
              },
          });
          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-carrefour',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/carrefour.html`,
              link_position: 'CarouselContainer'
          });
      } */

      /* window.dataLayer.push({
          event: "carousel_click",
          eventInfo: {
              category: "All clicks on CTA Button",
              eventLabel: "Carousel Next",
              clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              component: "CarouselContainer_carousel-next_slick-button",
              componentName: "slick-button",
              container: "CarouselContainer",
              destinationUrl: "",
              modernization: !0,
          },
      }); */

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: "carousel_click",
        carousel_name: "Customer Carousel",
        event_action: 'next slide',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_text: "next",
        link_url: ""
      });
    });
    $(document).on('click', '.customer-quote__carousel .carousel-prev', function () {
      /*let index = $('.customer-quote__carousel ul li.slick-active').index();
      if (index == 0) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Prev-manpower",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-prev_slick-button",
                  componentName: "slick-button ",
                  container: "CarouselContainer",
                  destinationUrl: "manpower",
                  modernization: !0,
              },
          });

          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-manpower',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/manpowergroup.html`,
              link_position: 'CarouselContainer'
          });
      } else if (index == 1) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Prev-rappi",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-prev_slick-button",
                  componentName: "slick-button ",
                  container: "CarouselContainer",
                  destinationUrl: "rappi",
                  modernization: !0,
              },
          });
          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-rappi',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/rappi.html`,
              link_position: 'CarouselContainer'
          });
      } else if (index == 2) {
          window.dataLayer.push({
              event: "linkClick_hp",
              eventInfo: {
                  category: "All clicks on CTA Button",
                  eventLabel: "Carousel Prev-calpoly",
                  clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
                  component: "CarouselContainer_carousel-prev_slick-button",
                  componentName: "slick-button",
                  container: "CarouselContainer",
                  destinationUrl: "calpoly",
                  modernization: !0,
              },
          });
          //GA4 DataLayer Push
          window.dataLayer.push({
              event: 'link_click_hp',
              link_text: 'Read The Story-CalPoly',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customers/success-stories/cal-poly.html`,
              link_position: 'CarouselContainer'
          });
      } 

      $(document).on('click', '.carousel-prev', function () {
          window.dataLayer.push({
              event: "carousel_click",
              carousel_name: "Customer Carousel",
              event_action: 'prev slide',
              link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              link_text: "",
              link_url: ""

          })
      });*/

      /* window.dataLayer.push({
          event: "carousel_click",
          eventInfo: {
              category: "All clicks on CTA Button",
              eventLabel: "Carousel Prev",
              clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
              component: "CarouselContainer_carousel-prev_slick-button",
              componentName: "slick-button",
              container: "CarouselContainer",
              destinationUrl: "",
              modernization: !0,
          },
      }); */

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: "carousel_click",
        carousel_name: "Customer Carousel",
        event_action: 'prev slide',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_text: "previous",
        link_url: ""
      });
    });

    // Three link section (Robust network to...)
    $('.flex-container .flex-item.order-2 a.splunk-btn').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Find a partner",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "FlexContainer_find-a-partner_splunk-button",
          componentName: "splunk-button",
          container: "FlexContainer",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/partners.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Find a partner',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/partners.html`,
        link_position: 'FlexContainer'
      });
    });
    $('.flex-container .flex-item.order-3 a.splunk-btn').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Join the community",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "FlexContainer_join-the-community_splunk-button",
          componentName: "splunk-button",
          container: "FlexContainer",
          destinationUrl: "https://community.splunk.com/t5/Community/ct-p/en-us",
          modernization: !0,
        },
      });
      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Join the community',
        link_domain: 'community.splunk.com',
        link_url: 'community.splunk.com/t5/Community/ct-p/en-us',
        link_position: 'FlexContainer'
      });
    });
    $('.flex-container .flex-item.order-4 a.splunk-btn').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Get Pro Guidance",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "FlexContainer_get-pro-guidance_splunk-button",
          componentName: "splunk-button",
          container: "FlexContainer",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customer-success.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Get Pro Guidance',
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/customer-success.html`,
        link_position: 'FlexContainer'
      });
    });

    // Old Ender Section Analitycs (probably not in use anymore)
    $('.footer-cta .text-grid .new-btn-default').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Free trial",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "FooterCta_free-trial_text-grid",
          componentName: "text-grid ",
          container: "FooterCta",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/download.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Free trial',
        link_domain: '${window.location.hostname}/',
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/download.html`,
        link_position: 'FooterCta'
      });
    });
    $('.footer-cta .text-grid .new-btn-transparent').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Contact sales",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_contact-sales_text-grid",
          componentName: "text-grid",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/talk-to-sales.html?expertCode=sales`,
          modernization: !0,
        },
      });
      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Contact sales',
        link_domain: '${window.location.hostname}/',
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/talk-to-sales.html?expertCode=sales`,
        link_position: 'plainHTML'
      });
    });

    // Push down banner section
    $('#pushdown-banner .splunk-button .splunk-btn.splunkResilienceCTA').addClass('no-analytics');
    $('#pushdown-banner .splunk-button .splunk-btn.splunkResilienceCTA').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Text",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "PushDownBanner_register-now_splunk-button",
          componentName: "splunk-button",
          container: "PushDownBanner",
          destinationUrl: "conf.splunk.com/",
          eventLabel: "Register Now",
          modernization: true
        }
      });

      window.dataLayer.push({
        event: "link_click_hp",
        link_domain: window.location.host,
        link_position: "PushDownBanner",
        link_url: "conf.splunk.com/",
        link_text: "Register Now"
      })

    });
    $('#pushdown-banner .close-pushdown-banner').on('click', function () {
      //UA
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Close",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "PushDownBanner_close_CloseButton",
          componentName: "splunk-button",
          container: "PushDownBanner",
          destinationUrl: "Close",
          modernization: true
        }
      });
      //GA4
      window.dataLayer.push({
        event: "link_click_hp",
        link_domain: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
        link_position: "PushDownBanner",
        link_url: "Close",
        link_text: "Close"
      })
    });

    // Ender Section Analitycs
    $('#enderFreeTrial').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Free trial",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_free-trial_splunk-button",
          componentName: "splunk-button",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/download.html`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Free trial',
        link_domain: `${window.location.hostname}/`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/download.html`,
        link_position: 'plainHTML',
      });
    });
    $('#enderContactSales').on('click', function () {
      window.dataLayer.push({
        event: "linkClick_hp",
        eventInfo: {
          category: "All clicks on CTA Button",
          eventLabel: "Contact sales",
          clickUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}`,
          component: "plainHTML_contact-sales_splunk-button",
          componentName: "splunk-button",
          container: "plainHTML",
          destinationUrl: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/talk-to-sales.html?expertCode=sales`,
          modernization: !0,
        },
      });

      //GA4 DataLayer Push
      window.dataLayer.push({
        event: 'link_click_hp',
        link_text: 'Contact sales',
        link_domain: `${window.location.hostname}/`,
        link_url: `${window.location.hostname}/${homepageAnalitycsLocaleCode}/talk-to-sales.html?expertCode=sales`,
        link_position: 'plainHTML',
      });
    });

  })(jQuery);

</script>

	 </section>



    
   
    
        

    

</div>

    
</div>
</div>

    
</div>
</div>
<div class="globalcomponent-enabler-footer globalcomponent-enabler base-component parbase">
   
     
        

    


    
    
    
    





	
	
		
		<div class="xfpage page basicpage">
<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="footer base-component parbase aem-GridColumn aem-GridColumn--default--12"><!-- SDI include (path: /content/experience-fragments/splunkcom/ja_jp/footer/global-nav-footer/global-footer/_jcr_content/root/responsivegrid/footer.esi.html, resourceType: splunk-www/components/content/global-nav/footer) -->

   
     
        

    


    
    
    
    
 

    	
    	

<div class="global-footer-wrapper">
    <div class="global-footer-v2">
        <div class="container">
        
        <!-- List Items Starts here -->
            <div class="row row-no-gutters">
            	
					<div class="offset-md-1 col-md-2">
	                 


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
      
            
            

  

  

  
    
    
    <div class="footer-listitem">
        <div class="header-accordion" data-track-analytics="true">会社概要<span class="splunk-icon icon-chevron-down"></span></div>
        
        <div class="header"> 会社概要</div>
        <ul class="list-elements" aria-expanded="false">
            
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/about-splunk.html" target="_self">
                           Splunkについて
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/careers.html" target="_self">
                           採用情報
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/en_us/global-impact.html" target="_blank">
                           Splunk Global Impact
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/en_us/about-splunk/leadership.html" target="_blank">
                           経営陣（英語）
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://www.splunk.com/ja_jp/newsroom/press-releases.html" target="_self">
                           プレスリリース
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/partners.html" target="_self">
                           パートナー
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/en_us/legal/splunk-policy-positions.html" target="_blank">
                           Splunk Policy Positions
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/en_us/about-splunk/splunk-data-security-and-privacy.html" target="_self">
                           Splunk Protects
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/en_us/about-splunk/splunk-ventures-funding.html" target="_blank">
                           Splunk Ventures
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://www.splunk.com/ja_jp/about-us/why-splunk.html" target="_self">
                           Splunkがお客様に選ばれる理由・メリット
                        </a>
                        
						
                    </li>
                
            
        </ul>
    </div>

  
  
  
  
  
      

    
   
    
        

    

</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>

    
</div>

	                </div>
	              
					<div class=" col-md-2">
	                 


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

	                </div>
	              
					<div class=" col-md-2">
	                 


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
      
            
            

  

  

  
    
    
    <div class="footer-listitem">
        <div class="header-accordion" data-track-analytics="true">製品<span class="splunk-icon icon-chevron-down"></span></div>
        
        <div class="header"> 製品</div>
        <ul class="list-elements" aria-expanded="false">
            
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/download.html" target="_self">
                           無料トライアル版とダウンロード
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/products/pricing.html" target="_self">
                           価格
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/products.html" target="_self">
                           全ての製品を見る
                        </a>
                        
						
                    </li>
                
            
        </ul>
    </div>

  
  
  
  
  
      

    
   
    
        

    

</div>
<div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
      
            
            

  

  

  
    
    
    <div class="footer-listitem">
        <div class="header-accordion" data-track-analytics="true">SPLUNK SITES<span class="splunk-icon icon-chevron-down"></span></div>
        
        <div class="header"> SPLUNK SITES</div>
        <ul class="list-elements" aria-expanded="false">
            
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://conf.splunk.com/" target="_blank" rel="noopener">
                           .conf
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://docs.splunk.com/Documentation" target="_blank" rel="noopener">
                           Documentation 
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://investors.splunk.com/" target="_blank" rel="noopener">
                           Investor Relations
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://www.splunk.com/ja_jp/training.html" target="_self">
                           Splunkトレーニング・認定コース
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="https://www.mypromomall.com/splunk" target="_blank" rel="noopener">
                           T-Shirt Store
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/resources/webinars.html" target="_self">
                           ウェビナー
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/resources/videos.html" target="_self">
                           ビデオ
                        </a>
                        
						
                    </li>
                
            
                
                    <li class="subheader">
                        <a class="list-CTA addCursor ga-cta " data-track-analytics="true" href="/ja_jp/resources.html" target="_self">
                           全てのリソースを見る
                        </a>
                        
						
                    </li>
                
            
        </ul>
    </div>

  
  
  
  
  
      

    
   
    
        

    

</div>

    
</div>

	                </div>
	              
					<div class=" col-md-2">
	                 


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

	                </div>
	              
					<div class=" col-md-2">
	                 


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="list-item base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    



      

      
      
            
            

  

  

  
    
    
    <div class="footer-listitem">
        <div class="header-accordion" data-track-analytics="true">お問い合わせ<span class="splunk-icon icon-chevron-down"></span></div>
        
        <div class="header"> お問い合わせ</div>
        <ul class="list-elements" aria-expanded="false">
            
            
                
                    <li class="subheader">
                        
                        
						<div class="splunk-cta-button">
							<a href="/ja_jp/about-splunk/contact-us.html" target="_self" data-track-analytics="true" class="splunk-btn ga-cta  sp-btn-borderless sp-btn-darkGray">
								営業へのお問い合わせ
							</a>
						</div>
                    </li>
                
            
                
                    <li class="subheader">
                        
                        
						<div class="splunk-cta-button">
							<a href="/ja_jp/about-splunk/contact-us.html#customer-support" target="_self" data-track-analytics="true" class="splunk-btn ga-cta  sp-btn-borderless sp-btn-darkGray">
								サポートへのお問い合わせ
							</a>
						</div>
                    </li>
                
            
        </ul>
    </div>

  
  
  
  
  
      

    
   
    
        

    

</div>
<div class="text-image base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    

       

	<div class="splunk-tni-wrapper">
		
    



		<div class="tni   unwrap-text">

			

			
			

			<!-- Text authored -->
			
				<div class="tni__desc rte-container ">
					
					<!-- Below content for description will come from RTE -->
					<span class=" tabContent">
						<div class="footer-listitem" style="margin-bottom: 0.0px;"><div class="header">SPLUNK MOBILE</div></div>
					</span>
					<!-- Above content for description will come from RTE -->
					
					
				</div>
			
		</div>
		
    



	</div>


    
   
    
        

    

</div>
<div class="text-image base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    <a id="applPlayDownloadApp" class="page-anchor"></a>
    
    
    

       

	<div class="splunk-tni-wrapper">
		
    



		<div class="tni tni--image-bottom  unwrap-text">

			

			
			<div class="tni__image splunk-image splunk-image-fullwidth " style="min-width: splunk-image-fullwidth;max-width: splunk-image-fullwidth;">
				
				
				
					
					<a data-track-analytics="true" class="img-link ga-cta " href="https://apps.apple.com/jp/app/splunk-mobile/id1420299852" target="_blank" rel="noopener">
					
						
						<picture class="splunk-picture-wrapper  eight-by-five center-center">
						
						<source srcset="/content/dam/splunk2/en_us/images/logos/download-app-store-apple.svg" media="(max-width: 767px)"/>
						
						<img src="/content/dam/splunk2/en_us/images/logos/download-app-store-apple.svg" class="splunk-image splunk-image-fullwidth " alt="Apple App StoreからSplunk Mobileをダウンロード" loading="eager"/>
								<figcaption></figcaption>
						</picture>
				</a>
				
			</div>

			<!-- Text authored -->
			
				
			
		</div>
		
    



	</div>


    
   
    
        

    

</div>
<div class="text-image base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    <a id="googlePlayDownloadApp" class="page-anchor"></a>
    <div class="desktop-spacer-top-margin-sm desktop-spacer-bottom-margin-none
      mobile-spacer-top-margin-sm mobile-spacer-bottom-margin-none
       
      
      
       
      splunk-gray-light default speakerDetail-spacer">
        
    

       

	<div class="splunk-tni-wrapper">
		
    



		<div class="tni tni--image-left  unwrap-text">

			

			
			<div class="tni__image splunk-image splunk-image-fullwidth " style="min-width: splunk-image-fullwidth;max-width: splunk-image-fullwidth;">
				
				
				
					
					<a data-track-analytics="true" class="img-link ga-cta " href="http://splk.it/android" target="_blank" rel="noopener">
					
						
						<picture class="splunk-picture-wrapper  eight-by-five center-center">
						
						<source srcset="/content/dam/splunk2/en_us/images/logos/google-play-badge-lrg.png" media="(max-width: 767px)"/>
						
						<img src="/content/dam/splunk2/en_us/images/logos/google-play-badge-lrg.png" class="splunk-image splunk-image-fullwidth " alt="Google PlayストアからSplunk Mobileをダウンロード" loading="eager"/>
								<figcaption></figcaption>
						</picture>
				</a>
				
			</div>

			<!-- Text authored -->
			
				
			
		</div>
		
    



	</div>


    </div>
    
    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    <style>
@media (max-width: 767px) {
    /* Mobile version of the images */
    .global-footer-wrapper .global-footer-v2 #applPlayDownloadApp + div img.splunk-image.d-lg-none.d-xl-none,
    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div img.splunk-image.d-lg-none.d-xl-none {
        width: 40%;
    }

    /* Desktop version of the images */
    .global-footer-wrapper .global-footer-v2 #applPlayDownloadApp + div img.splunk-image.d-none.d-xs-none.d-sm-none.d-md-none,
    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div img.splunk-image.d-none.d-xs-none.d-sm-none.d-md-none {
        display: none;
    }

    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div.desktop-spacer-top-margin-sm,
    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div.desktop-spacer-top-margin-sm {
        margin-top: 15px;
    }

}

@media (min-width: 768px) {
    /* Mobile version of the images */
    .global-footer-wrapper .global-footer-v2 #applPlayDownloadApp + div img.splunk-image.d-lg-none.d-xl-none,
    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div img.splunk-image.d-lg-none.d-xl-none {
        display: none;
    }

    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div.desktop-spacer-top-margin-sm,
    .global-footer-wrapper .global-footer-v2 #googlePlayDownloadApp + div.desktop-spacer-top-margin-sm {
        margin-top: 20px;
    }
}


.site-map-content {
 justify-content: end !important;
    margin: 0 !important; }
</style>
<script>
document.addEventListener("DOMContentLoaded", function(){
  if ($('.customer-quote__carousel').length>0) {
    $('.customer-quote__carousel').each(function(){
      $(this).find('img').each(function(){
        //let that = this;
        $(this).attr('src', $(this).data('src'))
      });
    });
  }
});
</script>
	 </section>



    
   
    
        

    

</div>

    
</div>

	                </div>
	              
            </div>
            <!-- List Items Ends here -->
            
            <div class="content-seprator top"></div>
            
            <div class="row row-no-gutters">
                <div class="col-md-10 offset-md-1">
                    <div class="base-content row row-no-gutters">
                        <div class="col-md-12 ">
                          
                            <div class="row">
                            <!-- Logo Starts here -->
                                <div class="col-md-4 d-none d-md-block">
	                                <a data-track-analytics="true" class="logo topnav bottomnav-mar19" href="https://www.splunk.com/ja_jp" target="_self">
	                                    <img class="logo-wrapper" loading="lazy" src="/content/dam/splunk2/en_us/images/icon-library/footer/crop-footer-logo-splunk.svg" alt="splunk logo"/>
	                                    <span class="sr-only">splunk logo</span>  
	                                </a>
                            	</div>
                            	 <!-- Logo Ends here -->
                            	 <!-- Social Band Starts here -->
	                            <div class="col-md-6 offset-md-2">
	                                <div class="xfpage page basicpage">
<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="socialband base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    

    




<div class="social-band-wrapper splunk2-background none ">
	
<!-- Add Class 'enable-social-share' in case social share functionality is to enabled.-->
	
	
		<div class="social-band horizantal  align-left">   
				
			<ul class="social-band__icons ">
				
					<li class="icon">
						<a data-track-analytics="true" href="https://twitter.com/splunk" title="Twitter" target="_blank" data-platform="twitter" class="twitter button-wrap" rel="noopener">
							<span class="twitter social-icon splunk-gray-darker" style="color: splunk-gray-darker"></span>
							<span class="sr-only">Twitter</span>
						</a>
					</li>
	            
					<li class="icon">
						<a data-track-analytics="true" href="https://www.facebook.com/splunkjapan" title="Facebook" target="_blank" data-platform="facebook" class="facebook button-wrap" rel="noopener">
							<span class="facebook social-icon splunk-gray-darker" style="color: splunk-gray-darker"></span>
							<span class="sr-only">Facebook</span>
						</a>
					</li>
	            
					<li class="icon">
						<a data-track-analytics="true" href="https://www.linkedin.com/company/splunk" title="Linked In" target="_blank" data-platform="linkedin" class="linkedin button-wrap" rel="noopener">
							<span class="linkedin social-icon splunk-gray-darker" style="color: splunk-gray-darker"></span>
							<span class="sr-only">Linked In</span>
						</a>
					</li>
	            
					<li class="icon">
						<a data-track-analytics="true" href="https://www.youtube.com/playlist?list=PLxkFdMSHYh3QH8uSv9bIe7DbFVo5fQJiz" title="Youtube" target="_blank" data-platform="youtube" class="youtube button-wrap" rel="noopener">
							<span class="youtube social-icon splunk-gray-darker" style="color: splunk-gray-darker"></span>
							<span class="sr-only">Youtube</span>
						</a>
					</li>
	            
					<li class="icon">
						<a data-track-analytics="true" href="https://www.instagram.com/splunk/" title="Instagram" target="_blank" data-platform="instagram" class="instagram button-wrap" rel="noopener">
							<span class="instagram social-icon splunk-gray-darker" style="color: splunk-gray-darker"></span>
							<span class="sr-only">Instagram</span>
						</a>
					</li>
	            
	            
	            
			</ul>
		</div>
	
</div>



    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/socialband/v1/socialband/clientlibs.9415eb97057078d4b131096d3024faa3.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/socialband/v1/socialband/clientlibs.37ecdaa2af772b793aab0b2c749206ee.js"></script>




    
   
    
        

    

</div>

    
</div>
</div>

    
</div>

</div></div>

	                            </div>
	                            <!-- Social Band Ends here -->
                           </div>
                        </div>
                    </div>
<!--                    <div class="content-seprator d-block d-md-none"></div>-->
                    <!-- Footer Links Starts here -->
                    <div class="site-map-content">
                       
                    </div>
                    <!-- Footer Links ends here -->
                    <!-- TradeMark Starts here -->
                    <div class="copyright-content trademark rte-container d-none d-md-block">
                        <p>© 2005 - 2024 Splunk Inc. 無断複写・転載を禁じます。<br />
</p>

                    </div>
                    <!-- TradeMark Ends here -->
                    <!-- Copyright Starts here -->
                    <span class="copyright-content rte-container">
                        <div class="site-map-content"><div class="site-map-item" style="text-align: right;"><a data-track-analytics="true" href="/en_us/legal.html" target="_blank">Legal</a></div>
<div class="site-map-item" style="text-align: right;"><a data-track-analytics="true" href="/en_us/legal/patents.html" target="_blank">特許(英語)</a></div>
<div class="site-map-item" style="text-align: right;"><a data-track-analytics="true" href="/en_us/legal/privacy-policy.html" target="_blank">プライバシー(英語)</a></div>
<div class="site-map-item" style="text-align: right;"><a data-track-analytics="true" href="/ja_jp/site-map.html" target="_self">サイトマップ</a></div>
<div class="site-map-item" style="text-align: right;"><a data-track-analytics="true" href="/en_us/legal/terms/terms-of-use.html" target="_blank">利用規約(英語)</a></div>
<div class="site-map-item" style="text-align: right;">&nbsp;</div>
</div>

                    </span>
                    <!-- Copyright Ends here -->

                    <!-- Mobile Logo Starts here -->
                    <div class="base-content d-block d-md-none">
                        <div class="">
                            <a data-track-analytics="true" class="logo topnav bottomnav-mar19" href="https://www.splunk.com/ja_jp" target="_self">
                                <img class="logo-wrapper" loading="lazy" src="/content/dam/splunk2/en_us/images/icon-library/footer/crop-footer-logo-splunk.svg" alt="splunk logo"/>
                                <span class="sr-only">splunk logo</span>
                            </a>
                        </div>
                        <!-- Logo Ends here -->
                        <!-- Mobile TradeMark Starts here -->
                        <div class="copyright-content trademark rte-container">
                            <p>© 2005 - 2024 Splunk Inc. 無断複写・転載を禁じます。<br />
</p>

                        </div>
                        <!-- Mobile TradeMark Ends here -->
                    </div>
                </div>
				</div>
            </div>
        </div>
      </div>
      
    
<link rel="stylesheet" href="/etc.clientlibs/splunk/core/components/content/global-nav/footer/v1/footer/clientlibs.3ecbf6cf18c7c1126ae6fb0258c614bf.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/splunk/core/components/content/global-nav/footer/v1/footer/clientlibs.77a571076b76f2110be516987fe62e8d.js"></script>






    
   
    
        

    

</div>
<div class="plain-html base-component parbase aem-GridColumn aem-GridColumn--default--12">
   
     
        

    


    
    
    
    


    
	
	<section class="rte-container" data-track-analytics="true">
		
	    
	    
	 </section>



    
   
    
        

    

</div>

    
</div>
</div>

    
</div>

</div></div>

	
	

    
   
    
        

    

</div>


            
		  
    

    <!-- This is to load I18n script needed for form pages -->


	
	
        
    
<script type="text/javascript" src="/etc.clientlibs/splunk/core/clientlibs/clientlib-vendors.936ba68bd7e246bb24a018db7bd60093.js"></script>
<script type="text/javascript" src="/etc.clientlibs/splunk/core/clientlibs/clientlib-dependencies.be696a2d6e22be560c281ebc21901d94.js"></script>
<script type="text/javascript" src="/etc.clientlibs/clientlibs/granite/jquery/granite/csrf.a9dcac4698709ca8e1cbc88363cf0793.js"></script>
<script type="text/javascript" src="/etc.clientlibs/splunk/core/clientlibs/clientlib-site.ea6534946364836601cae96cf86803f9.js"></script>



    
    
    
    




    
    
    	 
    	 
	<!-- OneTrust Cookies Consent Notice start -->
	<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-document-language="true" data-domain-script="9ff638b7-8097-449d-9741-7b3c526b0da7"></script>
	<script type="text/javascript">
		function OptanonWrapper() { window.dataLayer.push( { event: 'OneTrustGroupsUpdated' } ) ; }
	</script>
	<!-- OneTrust Cookies Consent Notice end -->

   	
    <!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: Splunk HP
URL of the webpage where the tag is expected to be placed: http://www.splunk.com/
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 09/10/2012
-->
<script type="text/javascript">
	var axel = Math.random() * 10000000000000;
	var doubleclick_iframe = document.createElement('iframe');
	doubleclick_iframe.setAttribute('src', "https://fls.doubleclick.net/activityi;src=3801996;type=landi397;cat=splun025;ord="+ axel);
	doubleclick_iframe.setAttribute('width', '1');
	doubleclick_iframe.setAttribute('height', '1');
	doubleclick_iframe.setAttribute('frameborder', '0');
	doubleclick_iframe.setAttribute('style', 'display:none;');
	$('body').append(doubleclick_iframe);
</script>
<noscript>
	<iframe src="https://fls.doubleclick.net/activityi;src=3801996;type=landi397;cat=splun025;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->


    

    


            

				<!-- Html file to show the page in Modal approach -->
<!-- Modal -->
<div class="splunk-new-modal modal fade-scale in" id="splunk-new-modal" tabindex="-1" role="dialog" aria-labelledby="splunk-new-modal" aria-hidden="true">
	<div class="modal-dialog modal-fullscreen" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-track-analytics="true" data-dismiss="modal" aria-label="Close">
					<span class="close-hidden-text modal-close" aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="extended-section container-fluid">
				  <!-- Section to append modal content -->
				</div>
				<div class="modal-title splunk-superModal-title" id="splunk-new-modal-title"></div>
			</div>
		</div>
	</div>
</div>
			
        
        <!-- Talk to Sales -->
        
	

        
    </body>
</html>