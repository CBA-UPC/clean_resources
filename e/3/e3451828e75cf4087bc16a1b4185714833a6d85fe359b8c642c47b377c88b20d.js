/*! For license information please see webpush-production.js.LICENSE.txt */
!window,(function(){return [function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var r=n(14),i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=a=s=c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFEHAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:encodeString:decodeString:decodeStringToByteArray:init_:,u=ar f=)
ar h=Error),p=)
ar g=/\{\$([^}]+)}/g
ar y=var m=)
var _=)
function w(){}.CONSTANTS=i,t.Deferred=f,t.ErrorFactory=p,t.FirebaseError=h,t.Sha1=m,t.assert=o,t.assertionError=a,t.async=t.base64=c,t.base64Decode=u,t.base64Encode=t.contains=t.createSubscribe=t.decode=y,t.deepCopy=t.deepExtend=l,t.errorPrefix=S,t.getUA=d,t.isAdmin=t.isBrowser=t.isBrowserExtension=t.isElectron=function(){return d().indexOf("Electron/")>=0},t.isEmpty=t.isIE=t.isMobileCordova=t.isNode=t.isNodeSdk=t.isReactNative=t.isUWP=t.isValidFormat=t.isValidTimestamp=t.issuedAtTime=t.jsonEval=b,t.map=t.querystring=t.querystringDecode=t.safeGet=t.stringLength=t.stringToByteArray=t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(S(e,t,r)+"must be a valid function.")},t.validateContextObject=t.validateNamespace=).call(this,n(13))},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o=n(12),a=n(3),s=n(6),c=n(16),u=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r),l=new a.ErrorFactory("app","Firebase",u),f="@firebase/app",d=((i={})[f]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),h=new c.Logger("@firebase/app"),p=)
p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc")
var v=function e(){var t=function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:app:i,registerVersion:apps:null,SDK_VERSION:"7.8.1",INTERNAL:{registerComponent:c,removeApp:components:n,useAsService:}
turn(r.default=r,Object.defineProperty(r,"apps",{get:),i.App=e,r)}(p)
return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),g=function(){eturn e.prototype.getPlatformInfoString=e}()
if(a.isBrowser()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ")
var b=self.firebase.SDK_VERSION
b&&b.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var y=v.initializeApp
v.initializeApp=var m=v
!m),t.default=m,t.firebase=m},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(15),i=n(3),o=),a=function(){eturn e.prototype.get=e.prototype.getImmediate=e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=e.prototype.clearInstance=e.prototype.delete=e.prototype.isComponentSet=e.prototype.getOrInitializeService=e.prototype.normalizeInstanceIdentifier=e}()
var s=)
t.Component=o,t.ComponentContainer=s,t.Provider=a},function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return f})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return m})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return x}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]))
return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function m(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function x(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return f})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return m})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return x}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]))
return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function m(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
unction(e,t,n){"use strict"
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}n.r(t),n.d(t,"LogLevel",(function(){return i})),n.d(t,"Logger",(function(){return c})),n.d(t,"setLogLevel",(function(){return u}))
var i,o=[]
!i||(i={}))
var a=i.INFO,s=c=)
,function(e,t,n){"use strict"
n.r(t)
var r=n(8),i=n.n(r),o=n(0),a=n.n(o),s=n(1),c=n.n(s),u=n(4),l=n.n(u),f=n(6)
var d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function h(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function p(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function v(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var b,y=n(3),m=n(2),_=((b={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',b["not-registered"]="Firebase Installation is not registered.",b["installation-not-found"]="Firebase Installation not found.",b["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',b["app-offline"]="Could not process request. Application offline.",b["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",b),w=new y.ErrorFactory("installations","Installations",_)
unction x(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}ion T(e,t){var n=t.fid
return h(this,void 0,void 0,(function(){var t,r,i,o,a,s
return p(this,()}))}r A=/^[cdef][\w-]{21}$/
r N=new Map
r R=null
r K,V="firebase-installations-store",U=null
tion J(e){return h(this,void 0,void 0,(function(){var t,n,r
return p(this,(function(i){switch(i.label){case 0:return[4,G(e,(function(n){var r=n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(w.create("app-offline"))
return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=e,r)
return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:$(e)}:{installationEntry:t}}(e,r)
return t=i.registrationPromise,i.installationEntry}))]
case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}ction Z(e,t){var n=e.appConfig,r=e.platformLoggerProvider
return h(this,void 0,void 0,(function(){var e,i,o,a,s,c,u
return p(this,()}))}function Q(e,t){return void 0===t&&(t=!1),h(this,void 0,void 0,(function(){var n,r,i
return p(this,(function(o){switch(o.label){case 0:return[4,G(e.appConfig,(function(r){if(!te(r))throw w.create("not-registered")
var i=r.authToken
if(!t&&i))return r
if(1===i.requestStatus)return n=e,t),r
if(!navigator.onLine)throw w.create("app-offline")
var o=r)
return n=e,o),o}))]
case 1:return r=o.sent(),n?[4,n]:[3,3]
case 2:return i=o.sent(),[3,4]
case 3:i=r.authToken,o.label=4
case 4:return[2,i]}}))}))}function ee(e){return G(e,(function(e){if(!te(e))throw w.create("not-registered")
var t,n=e.authToken
return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?d(d({},e),{authToken:{requestStatus:0}}):e}))}tion oe(e){return w.create("missing-app-config-values",{valueName:e})}(K=l.a).INTERNAL.registerComponent(new f.Component("installations",(,"PUBLIC")),K.registerVersion("@firebase/installations","0.4.2")
var ae,se=de=((ae={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',ae["only-available-in-window"]="This method is available in a Window context.",ae["only-available-in-sw"]="This method is available in a service worker context.",ae["permission-default"]="The notification permission was not granted and dismissed instead.",ae["permission-blocked"]="The notification permission was not granted and blocked instead.",ae["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",ae["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",ae["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",ae["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",ae["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",ae["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",ae["token-update-no-token"]="FCM returned no token when updating the user to push.",ae["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",ae["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",ae["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",ae["invalid-vapid-key"]="The public VAPID key must be a string.",ae["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",ae),he=new y.ErrorFactory("messaging","Messaging",de)
nction ge(e){return ce(this,void 0,void 0,(function(){var t,n,r=this
return ue(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2]
case 1:if(t=i.sent(),!t.map(().includes("fcm_token_details_db"))return[2,null]
i.label=2
case 2:return n=null,[4,Object(m.openDb)("fcm_token_details_db",5,(function(t){return ce(r,void 0,void 0,(function(){var r,i,o,a
return ue(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2]
case 1:return i=s.sent(),[4,r.clear()]
case 2:if(s.sent(),!i)return[2]
if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2]
n={token:o.fcmToken,createTime:(a=o.createTime,null!=a?a:Date.now()),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:ve(o.vapidKey)}}}else 3===t.oldVersion?n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ve(o.auth),p256dh:ve(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ve(o.vapidKey)}}:4===t.oldVersion&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ve(o.auth),p256dh:ve(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ve(o.vapidKey)}})
return[2]}}))}))}))]
case 3:return i.sent().close(),[4,Object(m.deleteDb)("fcm_token_details_db")]
case 4:return i.sent(),[4,Object(m.deleteDb)("fcm_vapid_details_db")]
case 5:return i.sent(),[4,Object(m.deleteDb)("undefined")]
case 6:return i.sent(),[2,be(n)?n:null]}}))}))}ar ye=null
unction _e(e){return ce(this,void 0,void 0,(function(){var t,n,r
return ue(this,()}))}function we(e,t){return ce(this,void 0,void 0,(function(){var n,r,i
return ue(this,()}))}function Se(e){return ce(this,void 0,void 0,(function(){var t,n,r
return ue(this,()}))}ar ke="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4"

function Ae(e,t,n){return ce(this,void 0,void 0,(function(){var r,i,o,a
return ue(this,()}))}unction Le(e,t,n){return ce(this,void 0,void 0,(function(){var r,i,o
return ue(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,Ie(t,e)]
case 1:return r=a.sent(),i=se({token:r,createTime:Date.now()},e),[4,we(t,i)]
case 2:return a.sent(),[2,r]
case 3:return o=a.sent(),[4,je(t,n)]
case 4:throw a.sent(),o
case 5:return[2]}}))}))}unction Be(e,t){return ce(this,void 0,void 0,()}Pe||(Pe={}))
var Re=function(){eturn Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=e.prototype.deleteToken=e.prototype.requestPermission=e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw he.create("use-vapid-key-after-get-token")
if("string"!=typeof e||0===e.length)throw he.create("invalid-vapid-key")
this.vapidKey=e},e.prototype.useServiceWorker=e.prototype.onMessage=e.prototype.setBackgroundMessageHandler=function(){throw he.create("only-available-in-sw")},e.prototype.onTokenRefresh=e.prototype.getServiceWorkerRegistration=function(){return ce(this,void 0,void 0,(function(){var e,t
return ue(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4]
n.label=1
case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})]
case 2:return e.swRegistration=n.sent(),[3,4]
case 3:throw t=n.sent(),he.create("failed-service-worker-registration",{browserErrorMessage:t.message})
case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=e.prototype.logEvent=function(e,t){return ce(this,void 0,void 0,(function(){var n
return ue(this,()}))},e}()
var Fe=function(){eturn Object.defineProperty(e.prototype,"app",{get:enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=e.prototype.getToken=function(){var e,t,n
return ce(this,void 0,void 0,(function(){var r
return ue(this,(function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,_e(this.firebaseDependencies)]
case 1:r=i.sent(),this.vapidKey=null!=(n=null===(t=null===(e=r)||void 0===e?void 0:e.subscriptionOptions)||void 0===t?void 0:t.vapidKey)?n:ke,i.label=2
case 2:return[2,Ae(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=e.prototype.requestPermission=function(){throw he.create("only-available-in-window")},e.prototype.usePublicVapidKey=e.prototype.useServiceWorker=function(){throw he.create("only-available-in-window")},e.prototype.onMessage=function(){throw he.create("only-available-in-window")},e.prototype.onTokenRefresh=e.prototype.onPush=function(e){return ce(this,void 0,void 0,(function(){var t,n,r
return ue(this,(function(i){switch(i.label){case 0:return(t=e))?[4,Ve()]:[2]
case 1:return n=i.sent())?[2,Ke(n,t)]:(r=function(e){var t
if(!e||"object"!=typeof e.notification)return
var n=se({},e.notification)
return n.data=se(se({},e.notification.data),((t={}).FCM_MSG=e,t)),n}(t))?[4,We(r)]:[3,3]
case 2:return i.sent(),[3,5]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5]
case 4:i.sent(),i.label=5
case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n,r
return ce(this,void 0,void 0,(function(){var i
return ue(this,(function(o){switch(o.label){case 0:return e.newSubscription?[3,2]:[4,je(this.firebaseDependencies,self.registration)]
case 1:return o.sent(),[2]
case 2:return[4,_e(this.firebaseDependencies)]
case 3:return i=o.sent(),[4,je(this.firebaseDependencies,self.registration)]
case 4:return o.sent(),[4,Ae(this.firebaseDependencies,self.registration,(r=null===(n=null===(t=i)||void 0===t?void 0:t.subscriptionOptions)||void 0===n?void 0:n.vapidKey,null!=r?r:ke))]
case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n
return ce(this,void 0,void 0,(function(){var r,i,o,a
return ue(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=r))?[4,ze(i)]:[2]):[2]
case 1:return(o=s.sent())?[3,4]:[4,self.clients.openWindow(i)]
case 2:return o=s.sent(),[4,(c=3e3,new Promise(())]
case 3:return s.sent(),[3,6]
case 4:return[4,o.focus()]
case 5:o=s.sent(),s.label=6
case 6:return o?(a=Ue(Pe.NOTIFICATION_CLICKED,r),[2,o.postMessage(a)]):[2]}var c}))}))},e}()
function ze(e){return ce(this,void 0,void 0,()}function Ke(e,t){var n,r,i=Ue(Pe.PUSH_RECEIVED,t)
try{for(var o=le(e),a=o.next();!a.done;a=o.next()){a.value.postMessage(i)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}nction We(e){var t,n=null!=(t=e.title)?t:"",r=e.actions,i=Notification.maxActions
return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}var qe={isSupported:He}
.a.INTERNAL.registerComponent(new f.Component("messaging",(,"PUBLIC").setServiceProps(qe))
var Ge=function(){eturn c()(e,[{key:"getId",value:,{key:"isValid",value:]),e}(),Je=function e(t,n){a()(this,e),this.expire=(new Date).getTime()+1e3*n,this.item=t},$e=function(){function e(t){a()(this,e),this.cachePrefix="pushDelivery.cache.",this.dbConfig=t.app.database,this.localStorageConfiguration=t.app.localStorage}return c()(e,[{key:"storeItemLocalStorage",value:,{key:"getItemLocalStorage",value:,{key:"removeItemLocalStorage",value:,{key:"init",value:function(){if(window.indexedDB){var e=indexedDB.open(this.dbConfig.notificationDB,this.dbConfig.version),t=this.dbConfig,n=this
e.onupgradeneeded=function(e){(n.db=e.target.result,e.oldVersion<1)&&n.db.createObjectStore(t.notificationTable,{autoIncrement:!0}).createIndex("date","date",{unique:!1})},e.onsuccess=e.onerror=function(e){throw console.log("error opening database:",e.target.errorCode),new Error("Unable to open database")},this.migrateLegacyDeviceInformation()}else console.log("Your browser doesn't IndexedDB.")}},{key:"migrateLegacyDeviceInformation",value:function(){null===window.localStorage.getItem(this.localStorageConfiguration.deviceStorageKey)&&"function"==typeof this.localStorageConfiguration.migration&&this.localStorageConfiguration.migration(this.localStorageConfiguration)}},{key:"save",value:function(e){var t=this.db.transaction([this.dbConfig.notificationTable],"readwrite"),n=t.objectStore(this.dbConfig.notificationTable)
t.onerror=n.add(e)}},{key:"getAllEntries",value:function(){var e=this.db.transaction([this.dbConfig.notificationTable],"readonly").objectStore(this.dbConfig.notificationTable).index("date"),t=this
return new Promise((function(n,r){var i=t.dbConfig.notificationMaxResults,o=[],a=e.openCursor(null,"prev")
a.onsuccess=function(e){var t=e.target.result
t&&o.length<=i?(o.push(t.value),t.continue()):n(o)},a.onerror=r}))}},{key:"addCache",value:function(e,t,n){sessionStorage.setItem(this.cachePrefix+e,JSON.stringify(new Je(t,n)))}},{key:"getCache",value:function(e){var t=sessionStorage.getItem(this.cachePrefix+e)
if(t){var n=JSON.parse(t)
if(n.expire>(new Date).getTime())return n.item}return null}},{key:"removeCache",value:]),e}()
function Ye(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n]
t[i]instanceof Object&&Object.assign(t[i],Ye(e[i],t[i]))}return Object.assign(e||{},t),e}function Xe(e){var t=[],n=!0,r=!1,i=void 0
try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value
if(s.sourceId){var c=!0,u=!1,l=void 0
try{for(var f,d=s.groups[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var h=f.value
h.sourceId.startsWith("browser_")&&t.push(h)}}catch(e){u=!0,l=e}finally{try{c||null==d.return||d.return()}finally{if(u)throw l}}}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function Ze(e,t){document.getElementById(e)&&(t||(t="block"),document.getElementById(e).style.display=t)}function Qe(e){document.getElementById(e)&&(document.getElementById(e).style.display="none")}var et={globalScope:!0,app:{database:{notificationDB:"ethinking-notification",notificationTable:"notification",version:1,notificationMaxResults:50},localStorage:{deviceStorageKey:"pushDelivery.device"}},ui:{color:"#ffffff",icon:"blank.gif",translations:{de:{settings:{label_subscribed:"Sie sind für Benachrichtigungen angemeldet.",label_blocked:"Bitte Benachrichtigungen im Browser erlauben",label_subscribe:"Für Benachrichtigungen anmelden"},sidebar:{message_list_empty:"Keine Benachrichtigungen vorhanden.",tab_notification:"Meldungen",tab_settings:"Meine Themen",label_language:"Sprache wählen:",label_description:"Sie erhalten Benachrichtigungen für:",label_tag_selection:"Themenbereich wählen",button_unsubscribe:"Von allen Benachrichtigungen abmelden",button_save:"Speichern",button_close:"Schliessen"},askForPermissionsDialog:{label_description:"Möchten Sie künftig direkt per Browser-Benachrichtigung über die wichtigsten Nachrichten informiert werden?",button_confirm:"Ja",button_deny:"Nein"},howToUnblockDialog:{image:{chrome:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-chrome-german.gif",firefox:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-FF-german.gif"},label_title:"Blockierung jetzt aufheben",label_description:"So können Sie die Blockierung schnell und einfach aufheben. Danach laden Sie die Seite bitte neu."},confirm:{label_text:"Sind Sie sich sicher?"},tagGroupLabels:{browser_german:"Deutsch",browser_italian:"Italienisch",browser_french:"Französisch"}},fr:{settings:{label_subscribed:"Vous avez activé les notifications",label_blocked:"Merci d'autoriser les notifications du navigateur",label_subscribe:"Activer les notifications"},sidebar:{message_list_empty:"Aucune notification disponible.",tab_notification:"Notifications",tab_settings:"Paramètres",label_language:"Sélectionner la langue",label_description:"",label_tag_selection:"Sélectionner un thème",button_unsubscribe:"Se désabonner de toutes les notifications",button_save:"Sauvegarder",button_close:"Fermer"},askForPermissionsDialog:{label_description:"À l'avenir, souhaitez-vous être informé des principales actualités par notification de votre navigateur?",button_confirm:"Oui",button_deny:"Non"},howToUnblockDialog:{image:{chrome:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-chrome-french.gif",firefox:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-FF-french.gif"},label_title:"Débloquer maintenant",label_description:"Voici comment annuler rapidement et facilement le blocage. Rafraîchir ensuite la page."},confirm:{label_text:"Êtes-vous sûr?"},tagGroupLabels:{browser_german:"Allemand",browser_italian:"Italien",browser_french:"Français"}},it:{settings:{label_subscribed:"Avete attivato le notifiche",label_blocked:"Autorizzare le notifiche sul browser",label_subscribe:"Attivare le notifiche"},sidebar:{message_list_empty:"Nessuna notifica disponibile.",tab_notification:"Notifiche",tab_settings:"Impostazioni",label_language:"Selezionare la lingua",label_description:"",label_tag_selection:"Selezionare un tema",button_unsubscribe:"Annullare l'abbonamento a tutte le notifiche",button_save:"Salvare",button_close:"Chiudere"},askForPermissionsDialog:{label_description:"In futuro, volete essere informati delle principali novità attraverso le notifiche sul vostro browser?",button_confirm:"Sì",button_deny:"No"},howToUnblockDialog:{image:{chrome:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-chrome-italian.gif",firefox:"https://push.delivery.ethinking.de/ethinking/gifs/unblock-FF-italian.gif"},label_title:"Sbloccare ora",label_description:"Ecco come annullare il blocco rapidamente e facilmente. Aggiorna la pagina."},confirm:{label_text:"È sicuro?"},tagGroupLabels:{browser_german:"Tedesco",browser_italian:"Italiano",browser_french:"Francese"}},en:{button_close:"Close",sidebar_tab_settings:"Settings"},defaultLanguage:"de"},template:{modal:{logo:"https://showcase-ez.ethinking.de/bundles/ezplatformpushconnector/img/push-delivery-logo.jpg"},bell:{image:"https://push.delivery.ethinking.de/bluewin/images/bluewin-wheel.svg"}}}},tt=function(){function e(t){a()(this,e),this.config=Ye(et,t),this.apiConfig=this.config.app.api,this.headers={Authorization:this.getAuthorization(),"Content-Type":"application/json"}}return c()(e,[{kthis.apiConfig.accessToken}},{key:"postData",value:function(e,t){try{return fetch(this.apiConfig.baseUrl+t,{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){if(e.ok)ret(){return e.clone().text()}))
throw new Error("Error on endpoint:"+t)}))}catch(e){console.log("Error on endpoint:"+t,e)}}},{key:"getTags",value:function(){return this.postData({appId:this.apiConfig.id,platformId:this.apiConfig.platformId},"tags")}},{key:"getSubscribedTags",value:function(e){return this.postData({appId:this.apiConfig.id,platformId:this.apiConfig.platformId,deviceId:e.id},"list")}},{key:"subscribe",value:function(e,t){return this.postData({tagId:t,appId:this.apiConfig.id,appVersion:"webclient-3.0",platformId:this.apiConfig.platformId,deviceId:e.getId()},"reg")}},{key:"unsubscribe",value:function(e,t){return this.postData({tagId:t,appId:this.apiConfig.id,platformId:this.apiConfig.platformId,deviceId:e.getId()},"ureg")}}]),e}(),nt=function(){function e(t){a()(this,e),this.config=Ye(et,t),this.validateConfig(t),this.storageService=new $e(t),this.pushDeliveryClient=new tt(t),!0===t.globalScope&&(window.pushDelivery=this)}return c()(e,[{keon(e){this.handlePayload=e}},{key:"init",value:function(){var e=this
this.storageService.init(),this.initFirebase(),this.initServiceWorker((function(){"granted"!==Notification.permission||e.getDevice().getId()||e.retrievee.subscribeToDefaultTags()}))})),"denied"!==Notification.permission&&"default"!==Notification.permission||this.getDevice().getId()&&this.getSubscribedTags().then((function(t){e.unsubscribeFrom(t),e.storageService.removeItemLocalStorage(e.config.app.localStorage.deviceStorageKey)}))}},{key:"initFirebase",value:function(){l.a.initializeApp({messagingSenderId:this.config.app.firebase.messageSenderId,projectId:this.config.app.firebase.projectId,apiKey:this.config.app.firebase.apiKey,appId:this.config.app.firebase.appId}),this.messaging=l.a.messaging()}},{key:"initServiceWorker",value:function(e){var t=this,n=this
navigator.serviceWorker.register(this.config.app.firebang.useServiceWorker(n),e()})),this.messaging.onTokenRefresh((function(e){t.getSubscribedTags().then((function(e){t.unsubscribeFrom(e),t.retrieveunction(){t.subscribeTo(e)}))}))})),this.messaging.onMessage((function(e){var r=e.data.title,i=n.config.app.client.defaultUrl
try{e.data.url&&(i=e.data.url),e.data.title||(r=" "),t.handlePayload&&t.handlePayload(e)
var o={date:new Date(Date.now()),text:e.data.message||e.data.body,url:i,title:r}
n.storageService.save(o)}catch(e){console.log("failed",e)}}))}},{key:"retrieveAndStoreDeviceToken",value:function(){var e=this
return this.messaging.getToken().then((function(t){var n=new Ge
n.id=t,e.storageService.storeItemLocalStorage(e.config.app.localStorage.deviceStorageKey,n)})).catch((function(e){console.log("failed!",e)}))}},{key:"isSupportedBrowser",value:function(){return/Edge/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)?(console.warn("Browser not supported"),!1):!(!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Firefox"))&&("serviceWorker"in navigator||(console.warn("Service worker not supported"),!1))}},{key:"getDevice",value:function(){var e=this.storageService.getItemLocalStorage(this.config.app.localStorage.deviceStorageKey)
return new Ge(e?e.id:null)}},{key:"subscribeToDefaultTags",value:function(){var e=this
return this.getDefaultSubscriptionTags().then((function(t){ret((funr on defaultSubscribe:",e)}))}},{key:"getDefaultSubscriptionTags",value:function(){var e=this
if(this.config.app.client.defaultSubscribedTags){if("function"==typeof this.config.app.client.defaultSubscribedTags)t.defaultSubscribedTags(t)}))
if(Array.isArray(this.config.app.client.defaultSubscribedTags))return Promise.resolve(this.config.app.client.defaultSubscribedTags)
if(this.config.app.client.defaultSubscribedTags)return Promise.resolve([this.config.app.client.defaultSubscribedTags])}return Promise.resolve([])}},{key:"getSubscribedTags",value:function(){var e=this
if(this.getDevice().id){var t=this.storageService.getCache("subscribedTags")
return t?Promise.resolve(t):this.pushDeliveryClient.getSubscribedTags(this.getDevice()).then((function(t){return e.storageService.addCache("subscribedTags",t,3600),t}))}throw new Error("Device is not initialized. Unable to retrieve the subscribe tags")}},{key:"subscribeTo",value:function(e){if(this.getDevice().id)return this.storageService.removeCache("subscribedTags"),this.pushDeliveryClient.subscribe(this.getDevice(),e)
throw new Error("Device is not initialized. Unable to subscribe to tag")}},{key:"unsubscribeFrom",value:function(e){if(this.getDevice().id)return this.storageService.removeCache("subscribedTags"),this.pushDeliveryClient.unsubscribe(this.getDevice(),e)
throw new Error("Device is not initialized. Unable to unsubscribe from tag"ageService.getAllEntries()}},{key:"getTags",value:function(){var e=this,t=this.storageService.getCache("tags")
return t?Promise.resolve(t):this.pushDeliveryClient.getTags(this.getDevice()).then((function(t){return e.storageService.addCache("tags",t,3600),t}))}},{key:"subscribeToTagSourceID",value:function(e){var t=this
return new Promise((function(n,r){t.fromTagSourceIDToTagID(e).then((function(e){return t.subscribeTo(e).then((function(){n()}))}))}))}},{key:"fromTagSourceIDToTagID",value:function(e){var t=this
return new Promise((function(n,r){if("string"==typeof e)t.getTags().then((function(t){var r=Xe(t),o=[],a=!0,s=!1,c=void 0
try{for(var u,l=r[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var f=u.value
o.push.apply(o,i()(f.tags))}}catch(e){s=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw c}}var d=o.filter((function(t){return t.sourceId===e}))[0].id
n(d)}))
else console.log("tagSourceID not valid"),r()}))}},{key:"validateConfig",value:function(e){if(!(e.app&&e.app.api.id&&e.app.api.baseUrl&&e.app.firebase))throw new Error("Push.delivery configuration is not valid!")}},{key:"debug",value:function(){var e=this
return this.getSubscribedTags().then((function(t){var n="PushDeliveryDebug\n-----------------\nDevice:   "+e.getDevice().id+"\n\nSubscribedTags:"+JSON.stringify(t)
e.getTags().then((function(e){var t=n+"\n\nTags:"+JSON.stringify(e)
console.log(t)}))})),""}}]),e}(),rt=n(5),it=n.n(rt),ot=n(7),at=n.n(ot),st=function(){function e(t){a()(this,e),this.config=t,this.defaultLanguage="en",this.config.ui.translations.defaultLanguage&&(this.defaultLanguage=this.config.ui.translations.defaultLanguage)}return c()(e,[{key:"getLabel",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var i=this.config.ui.translations[e]
if(void 0===i&&(i=this.config.ui.translations[this.defaultLanguage]),i){for(var o=1;o<arguments.length;o++){if(!i[arguments[o]])return""
i=i[arguments[o]]}return i}return""}},{key:"getTagLabel",value:function(e,t){return this.config.ui.tagLabels[e][t.name]}},{key:"getTagGroupLabel",value:function(e,t){return this.config.ui.tagGroupLabels[e][t.name]}}]),e}(),ct=function(){function e(t){a()(this,e),this.config=Ye(et,t),this.translationService=new st(this.config),this.language=document.documentElement.lang,this.labels=this.translationService.getLabel(this.language,"askForPermissionsDialog"),this.questionText=this.labels.label_description,this.trueButtonText=this.labels.button_confirm,this.falseButtonText=this.labels.button_deny,this.logoSRC=this.config.ui.template.modal.logo,this.confirmDialog=void 0,this.trueButton=void 0,this.falseButton=void 0,this.parent=document.body,this._createDialog(),this._appendDialog()}return c()(e,[{key:"_createDialog",value:function(){this.confirmDialog=document.createElement("div"),this.confirmDialog.classList.add("pushdelivery","pushdelivery__modal")
var e=document.createElement("div")
e.classList.add("pushdelivery__modalbody"),this.confirmDialog.appendChild(e)
var t=document.createElement("div")
t.classList.add("pushdelivery__modalbody__picture"),e.appendChild(t)
var n=document.createElement("img")
n.src=this.logoSRC,t.appendChild(n)
var r=document.createElement("div")
r.classList.add("pushdelivery__modalbody__content"),e.appendChild(r)
var i=document.createElement("p")
i.textContent=this.questionText,i.classList.add("pushdelivery__modalbody__text"),r.appendChild(i)
var o=document.createElement("div")
o.classList.add("pushdelivery__modalfooter"),this.confirmDialog.appendChild(o)
var a=document.createElement("div")
a.classList.add("pushdelivery__modalfooter__confirm-buttons"),o.appendChild(a),this.falseButton=document.createElement("button"),this.falseButton.classList.add("pushdelivery__modalfooter__deny"),this.falseButton.type="button",this.falseButton.textContent=this.falseButtonText,a.appendChild(this.falseButton),this.trueButton=document.createElement("button"),this.trueButton.classList.add("pushdelivery__modalfooter__allow"),this.trueButton.type="button",this.trueButton.textContent=this.trueButtonText,a.appendChild(this.trueButton)}},{key:"_appendDialog",value:function(){this.parent.appendChild(this.confirmDialog)}},{key:"_destroy",value:function(){this.parent.removeChild(this.confirmDialog)}},{key:"confirm",value:function(){var e=this
return new Promise((function(t,n){(!e.confirmDialog||!e.trueButton||!e.falseButton)&&n("Something went wrong upon modal creation"),Ze(e.confirmDialog),e.trueButton.addEventListener("click",(function(){t(!0),e._destroy()})),e.falseButtoction(){t(!1),e._destroy()}))}))}}]),e}(),ut=function(){function e(t){a()(this,e),this.config=Ye(et,t),this.translationService=new st(this.config),this.language=document.documentElement.lang,this.browser=function(){var e,t=navigator.userAgent
return t.indexOf("Chrome")>-1?e="chrome":t.indexOf("Firefox")>-1?e="firefox":t.indexOf("Safari")>-1&&(e="safari"),e}(),this.translations=this.translationService.getLabel(this.language,"howToUnblockDialog"),this.howtoRemoveDeniedPermisionDialogId="pushDeliveryRemoveDeniedPermission",this.title=this.translations.label_title,this.description=this.translations.label_description,this.logoSRC=this.config.ui.template.modal.logo,this.unblockSRC=this.translations.image[this.browser],this.deniedDialog=void 0,this.closeDiv=void 0,this.parent=document.body,this._createDialog(),this._appendDialog()}return c()(e,[{key:"_createDialog",value:function(){var e=this
this.deniedDialog=document.createElement("div"),this.deniedDialog.classList.add("pushdelivery__denied"),this.deniedDialog.style="display:none",this.deniedDialog.setAttribute("id",this.howtoRemoveDeniedPermisionDialogId)
var t=document.createElement("div")
t.classList.add("pushdelivery__modalbody"),this.deniedDialog.appendChild(t)
var n=document.createElement("div")
n.classList.add("pushdelivery__modalbody__picture"),t.appendChild(n)
var r=document.createElement("img")
r.src=this.logoSRC,n.appendChild(r)
var i=document.createElement("div")
i.classList.add("pushdelivery__modalbody__content"),t.appendChild(i)
var o=document.createElement("H3"),a=document.createTextNode(this.title)
o.appendChild(a),o.classList.add("pushdelivery__modalbody__title"),i.appendChild(o)
var s=document.createElement("p")
s.textContent=this.description,s.classList.add("pushdelivery__modalbody__text"),i.appendChild(s)
var c=document.createElement("div")
c.classList.add("pushdelivery__image"),i.appendChild(c)
var u=document.createElement("img")
u.src=this.unblockSRC,c.appendChild(u),this.closeDiv=document.createElement("div"),this.closeDiv.classList.add("pushdelivery__denied__close"),this.closeDiv.id="pushdelivery__denied--modal-close",this.closeDiv.addEventListener("click",(function(){Qe(e.howtoRemoveDeniedPermisionDialogId)})),t.appendChild(this.closeDiv)}},{key:"_appendDialog",value:function(){this.parent.appendChild(this.deniedDialveChild(this.deniedDiaveDeniedPermisionDialogId)}}]),e}(),lt=function(){function e(t){a()(this,e),this.pushDelivery=new nt(t),this.mergedConfig=Ye(et,t),this.config=function(e){var t=e,n=t.app.client.defaultSubscribedion(e){return Number(e)||e}))
return t.app.client.defaultSubscribedTags=n,t}(this.mergedConfig),this.translationService=new st(this.config),this.settingsButtonId="pushDeliverySettingsButton",this.sidebarId="pushDeliverySidebar",this.pushDeliverySettingsLabelId="pushDeliverySettingsButtonLabel",this.archivePanelId="pushDeliverySettingsPanelArchive",this.settingsPanelId="pushDeliverySettingsPanelSettings",this.showArchiveButtonId="pushDeliverySettingsButtonArchive",this.showSettingsButtonId="pushDeliverySettingsButtonSettings",this.language=document.documentElement.lang,!0===t.globalScope&&(window.pushDeliveryUI=this)}var t,n
return c()(e,[{key:"init",value:function(){var e=this
this.pushDelivery.setPayloadHandler((function(t){var n=t.data.title,r=e.pushDelivery.config.app.client.defaultUrl
try{t.data.url&&(r=t.data.url),t.data.title||(n=" ")
var i={body:t.data.message||t.data.body,silent:!0,icon:t.data.icon,data:t.data,title:n,url:r,date:new Date}
e.showOnSiteNotification(i)}catch(e){console.log("failed",e)}})),this.pushDelivery.init(),this.deniedDialog=new ut(this.config),"bluewin"===this.config.app.client.defaultSubscribedTags[0]&&this.bluewinTags(),this.config.app.client.autosubscribe?this.onLoadInit(this.config):(this.createSettingsButton(this.config),this.createSidebarPanel(),this.updateButtonLabel(),Ze(this.settingsButtonId,"flex"))}},{key:"bluewinTags",value:function(){var e=this
this.pushDelivery.getTags().then((function(t){var n=function(e){var t
switch(document.documentElement.lang){case"it":t="italian"
break
case"fr":t="french"
break
defaultn(e){return e.sourceId===t})),r=[],i=!0,o=!1,a=void 0
try{for(var s,c=function(){veId.startsWith("browser_")})),t=[]
e.forEach((function(e){e.tags.forEach((function(e){(e.sourceId.includes("breakingnews")||e.sourceId.includes("sports")||e.sourceId.includes("bigstories"))&ion(e){return r.push(e.id)}))},u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)c()}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}return r}(t)
e.config.app.client.defaultSubscribedTags=n}))}},{key:"updateButtonLabel",value:function(){var e=this,t=this.getPushNotificationPermission(),n=document.getElementById(this.pushDeliverySettingsLabelId),r=document.documentElement.lang
switch(t){case"default":n.textContent=this.translationService.getLabel(r,"settings","label_subscribe")
break
case"denied":n.textContent=this.translationService.getLabel(r,"settings","label_blocked")
break
case"granted":this.pushDelivery.getDevice().id?this.pushDelivery.getSubscribedTags().then((function(t){0===t.length?n.textContent=e.translationService.getLabel(r,"settings","label_subscribe"):n.textContent=e.translationService.getLabel(r,"settings","label_subscribed")})):n.textContent=this.translationService.getLabel(r,"settings","label_subscribe")}}},{key:"whichSidebarPanelRender",value:function(e,t){switch(t){case"pushDeliverySettingsPanelArchive":document.getElementById(e.showArchiveButtonId).className="pushdelivery__tab__msg active",document.getElementById(e.showSettingsButtonId).className="pushdelivery__tab__settings"
break
case"pushDeliverySettingsPanelSettings":document.getElementById(e.showArchiveButtonId).className="pushdelivery__tab__msg",document.getElementById(e.showSettingsButtonId).className="pushdelivery__tab__settings active"}}},{key:"createSettingsButton",value:function(e){var t=this,n=document.createElement("div")
n.setAttribute("id",this.settingsButtonId),n.classList.add("pushdelivery__bell")
var r=this.translationService.getLabel(this.language,"settings"),i=this.config.ui.color||"transparent",o=this.config.ui.template.bell.image||"",a=this.pushDeliverySettingsLabelId
n.innerHTML='\n\t\t\t\t<div class="pushdelivery__bell__button" style="background-image: url(\''.concat(o,"'); background-color: ").concat(i,';"></div>\n\t\t\t\t<div class="pushdelivery__bell__info" id="bell_info">\n\t\t\t\t<div class="pushdelivery__bell__info--triangle"></div>\n\t\t\t\t<div id="').concat(a,'" class="pushdelivery__bell__info--text">').concat(r.label_subscribe,"</div>\n\t\t\t\t</div>\n\t\t\t\t"),t.settingsButtonHandler(e)})),document.body.appendChild(n)}},{key:"createSidebarPanel",value:function(){var e=document.createElement("div")
e.classList.add("pushdelivery__sidebar"),e.setAttribute("id",this.sidebarId)
var t=this.translationService.getLabel(this.language,"sidebar")
e.innerHTML='\n            <div class="pushdelivery__tab__close" id="pushdelivery__sidebar--close">'.concat(t.button_close,' X</div>\n            <ul class="pushdelivery__sidebar__navigation">\n                <li id="').concat(this.showArchiveButtonId,'" class="pushdelivery__tab__msg active">').concat(t.tab_notification,'</li>\n                <li id="').concat(this.showSettingsButtonId,'" class="pushdelivery__tab__settings"> ').concat(t.tab_settings,'</li>\n            </ul>\n            <ul id="').concat(this.archivePanelId,'" class="pushdelivery__sidebarmessages"></ul>\n            <div id="').concat(this.settingsPanelId,'" class="pushdelivery__sidebarsettings"></div>\n        '),document.body.appendChild(e)
var n,r=this
return document.getElementById(this.showArchiveButtonId).addEventListener("click",(function(){Qe(r.settingsPanelId),Ze(r.archivePanelId),this.className="pushdelivery__tab__msg active",document.getElementById(r.showSettingsButtonId).className="pushdelivery__tab__settings"})),document.getElementById(this.showSettingsButtonId).addEventListener("click",(function(){Ze(r.settingsPanelId),Qe(r.archivePanelId),this.className="pushdelivery__tab__settings active",document.getElementById(r.showArchiveButtonId).className="pushdelivery__tab__msg"})),document.getElementById("pushdelivery__sidebar--close").addEventListener("click",(n=this,function(){Qe(n.sidebarId)})),Qe(this.settingsPanelId),this.createSubscriptionView()}},{key:"createSubscriptionView",value:function(){var e=this
return this.pushDelivery.getTags().then((function(t){if(!e.config.app.client.autosubscribe){var n=Xe(t)
e.renderTagGroups(n)}}))}},{key:"renderTagGroups",value:function(e){var t="",n=this,r=!0,i=this.translationService.getLabel(this.language,"tagGroupLabels")
e.forEach((function(e){var n=i[e.sourceId]
void 0===n&&(n="Sprache")
var o='<li class="'.concat(r?"active":"",'" data-group-id="').concat(e.id,'">').concat(n,"</li>")
t+=o,r=!1}))
var o=document.createElement("div")
o.className="pushdelivery__sidebarsettings_language"
var a=document.createElement("div")
void 0!==this.translationService.getLabel(this.language,"sidebar","label_language")?a.textContent=this.translationService.getLabel(this.language,"sidebar","label_language"):a.textContent="Sprache"
var s=document.createElement("ul")
s.innerHTML=t,o.appendChild(a),o.appendChild(s)
var c=document.createElement("h3")
c.className="pushdelivery__sidebarsettings__title",c.textContent=this.translationService.getLabel(this.language,"sidebar","label_tag_selection")
var u=document.createElement("ul")
u.className="pushdelivery__sidebarsettings__list",r=!0,e.forEach((function(e){if(e.tags){var t=n.renderTagsForGroup(e,r),i=!0,o=!1,a=void 0
try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value
u.appendChild(l)}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}r=!1}}))
var l=document.createElement("div"),f=document.createElement("button")
f.className="pushdelivery__sidebarsettings__cancel",f.textContent=this.translationService.getLabel(this.language,"sidebar","button_unsubscribe"),n.cancelAllSubscriptions()})),l.appendChild(f)
var d=document.getElementById(this.settingsPanelId)
d.innerHTML="",d.appendChild(o),d.appendChild(c),d.appendChild(u),d.appendChild(l),this.appendGroupSelectionListeners(),this.appendTagSelectionListeners(this.pushDelivery)}},{key:"appendGroupSelectionListeners",value:function(){var e=document.getElementById(this.settingsPanelId).querySelectorAll("li[data-group-id]")
e.forEach((function(t){t.addEventListener("click",(function(){var t=!0,n=!1,r=void 0
try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.className=""}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}this.className="active"
var a=this.getAttribute("data-group-id")
document.querySelectorAll("li[data-parent-group-id]").forEach((function(e){e.getAttribute("data-parent-group-id")===a?e.style="display:list-item":e.style="display:none"}))}))}))}},{key:"appendTagSelectionListeners",value:function(e){document.getElementById(this.settingsPanelId).querySelectorAll("input[data-tag-id]").forEach((function(t){t.addEventListener("click",(function(){var t=this.getAttribute("data-tag-id")
this.checked?e.subscribeTo(t):e.unsubscribeFrom(t)}))}))}},{key:"updateSubscribedTagSelection",value:function(e){var t=document.querySelectorAll("input[data-tag-id]"),n=!0,r=!1,i=void 0
try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){o.value.checked=!1}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}t.forEach((function(t){var n=parseInt(t.getAttribute){e.id===n&&(t.checked=!0)}))}))}},{key:"renderTagsForGroup",value:function(e,t){var n=[]
return e.tags.forEach((function(r){var i=document.createElement("li")
i.setAttribute("data-parent-group-id",e.id),i.setAttribute("data-tag-id",r.id),i.style=t?"display: list-item":"display: none",i.innerHTML='\n\t\t        <label class="check-label" for="'.concat(r.id,'">\n\t\t            <input type="checkbox" id="').concat(r.id,'" data-tag-id="').concat(r.id,'" name="').concat(r.name,'">\n\t\t            ').concat(r.name,"\n\t\t        </label>\n            \t"),n.push(i)})),n}},{key:"showOnSiteNotification",value:function(e){var t=document.createElement("div")
t.classList.add("pushdelivery","pushdelivery__notification"),t.setAttribute("id","pushdelivery__notification--modal"),e.url=e.url||window.location.href,e.title=e.title||"Push Nachricht",t.innerHTML='\n  <div class="pushdelivery__notification--icon">\n  <a href="'.concat(e.url,'">\n  <img src="').concat(e.icon,'" width="100%" height="100%" alt="Firmen Icon"></div>\n  <div class="pushdelivery__notification--content">\n  <div class="pushdelivery__notification--title">').concat(e.title,'</div>\n  <div class="pushdelivery__notification--text">').concat(e.body,'</div>\n  <li class="pushdelivery__notification--date">').concat(e.date.toLocaleString("de-DE",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),"</li>\n  </a>\n  </div>\n  "),document.body.appendChild(t)
var n=document.getElementById("pushdelivery__notification--modal")
setTimeout((function(){n.remove()}),5e3)}},{key:"renderArchiveView",value:function(){var e=this
this.pushDelivery.getArchive().then((function(t){var n=document.getElementById(e.archivePanelId)
if(n.innerHTML="",0===t.length)n.innerHTML='<li class="no-notifications">'.concat(e.translationService.getLabel(e.language,"sidebar","message_list_empty"),"</li>")
else{var r=!0,i=!1,o=void 0
try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value
n.innerHTML+='<li class="pushdelivery__archive_notification"><a href="'.concat(c.url,'" tet="_blank">\n                            <strong>').concat(c.title,'</strong>\n                            <p class="notification-text">').concat(c.text,'</p>\n                            <p class="notification-date">').concat(c.date.toLocaleString("de-DE",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),"</p></a></li>")}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}))}},{key:"cancelAllSubscriptions",value:function(){var e=this
this.confirmUnsubscribeWindow()&&(this.pushDelivery.getSubscribedTags().then((function(t){e.pushDelivery.unsubscribeFrom(t.map((function(e){return e.id}))).then((function(){e.updateButtonLabel()}))})),Qe(this.sidebarId))}},{key:"confirmUnsubscribeWindow",value:function(){var e=this.translationService.getLabel(this.language,"confirm")
return window.confirm(e.label_text)}},{key:"getPushNorn Notification.permission}},{key:"checkNotificationPermissions",value:(n=at()(it.a.mark((function e(t){var n=this
return it.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=at()(it.a.mark((function e(t,r){var i,o
return it.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("default"!==(i=n.getPushNotificationPermission())){e.next=9
break}return o=new ct(n.config),e.next=5,o.confirm()
case 5:e.sent&&n.requestUserPermission().then((function(){t()})),e.next=10
break
case 9:"denied"===i?(n.deniedDialog.display(),t()):"granted"===i&&t()
case 10:case"end":returrn e.apply(this,arguments)}}()))
case 1:case"endrn n.apply(this,arguments)})},{key:"requestUserPermission",value:(t=at()(it.a.mark((function e(){var t=this
return it.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Notification.requestPermission().then((function(e){if("permission"in Notification||(Notification.permission=e),"granted"===Notification.permission)return new Promise((function(e,n){t.pushDelivery.getDevice().getId()?e():t.pushDelivery.retrieveken().then((function(){e()}))}))})))
case 1:case"endrn t.apply(this,arguments)})},{key:"showSidebarArchive",value:function(e){Qe(this.settingsPanelId),this.updateSubscribedTagSelection(e),this.renderArchiveView(),Ze(this.archivePanelId),this.whichSidebarPanelRender(this,this.archivePanelId),Ze(this.sidebarId)}},{key:"showSidebarSettings",value:function(e){Qe(this.archivePanelId),this.updateSubscribedTagSelection(e),this.renderArchiveView(),Ze(this.settingsPanelId),this.whichSidebarPanelRender(this,this.settingsPanelId),Ze(this.sidebarId)}},{key:"onLoadInit",value:function(e){var t=this
this.checkNotify.subscribeToDefaultTags()}))}},{key:"settingsButtonHandler",value:function(e){var t=this
this.checkNotificationPermissions(e).then((function(){return t.pushDelivery.getSubscribedTags().then((function(e){0===e.length?t.pushDelivery.subscribeToDefaultTags().then((function(e){t.showSidebarArchive(e)})):t.showSidebarArchive(e)}))}))}}]),e}()
n(18)
window.PushDelivery=nt,window.PushDeliveryUI=lt}])}))
