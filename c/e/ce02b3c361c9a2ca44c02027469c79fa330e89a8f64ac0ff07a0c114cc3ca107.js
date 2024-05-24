(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+qE3":function(t,e,r){"use strict";var o="object"==typeof Reflect?Reflect:null,y=o&&"function"==typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};var n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)},i=Number.isNaN||function(t){return t!=t};function p(){p.init.call(this)}t.exports=p,t.exports.once=function(a,y){return new Promise(function(t,e){function r(t){a.removeListener(y,o),e(t)}function o(){"function"==typeof a.removeListener&&a.removeListener("error",r),t([].slice.call(arguments))}var n,i,p;v(a,y,o,{once:!0}),"error"!==y&&(i=r,p={once:!0},"function"==typeof(n=a).on&&v(n,"error",i,p))})},(p.EventEmitter=p).prototype._events=void 0,p.prototype._eventsCount=0,p.prototype._maxListeners=void 0;var a=10;function s(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?p.defaultMaxListeners:t._maxListeners}function f(t,e,r,o){var n,i;return s(r),void 0===(n=t._events)?(n=t._events=Object.create(null),t._eventsCount=0):(void 0!==n.newListener&&(t.emit("newListener",e,r.listener||r),n=t._events),i=n[e]),void 0===i?(i=n[e]=r,++t._eventsCount):("function"==typeof i?i=n[e]=o?[r,i]:[i,r]:o?i.unshift(r):i.push(r),0<(n=u(t))&&i.length>n&&!i.warned&&(i.warned=!0,(o=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit")).name="MaxListenersExceededWarning",o.emitter=t,o.type=e,o.count=i.length,console&&console.warn)),t}function c(t,e,r){t={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},e=function(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(t);return e.listener=r,t.wrapFn=e}function l(t,e,r){t=t._events;if(void 0===t)return[];t=t[e];{if(void 0===t)return[];if("function"==typeof t)return r?[t.listener||t]:[t];if(r){for(var o=t,n=new Array(o.length),i=0;i<n.length;++i)n[i]=o[i].listener||o[i];return n}return d(t,t.length)}}function h(t){var e=this._events;if(void 0!==e){e=e[t];if("function"==typeof e)return 1;if(void 0!==e)return e.length}return 0}function d(t,e){for(var r=new Array(e),o=0;o<e;++o)r[o]=t[o];return r}function v(r,o,n,i){if("function"==typeof r.on)i.once?r.once(o,n):r.on(o,n);else{if("function"!=typeof r.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r);r.addEventListener(o,function t(e){i.once&&r.removeEventListener(o,t),n(e)})}}Object.defineProperty(p,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),p.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},p.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},p.prototype.getMaxListeners=function(){return u(this)},p.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var o="error"===t,n=this._events;if(void 0!==n)o=o&&void 0===n.error;else if(!o)return!1;if(o){if((i=0<e.length?e[0]:i)instanceof Error)throw i;o=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw o.context=i,o}var i=n[t];if(void 0===i)return!1;if("function"==typeof i)y(i,this,e);else for(var p=i.length,a=d(i,p),r=0;r<p;++r)y(a[r],this,e);return!0},p.prototype.on=p.prototype.addListener=function(t,e){return f(this,t,e,!1)},p.prototype.prependListener=function(t,e){return f(this,t,e,!0)},p.prototype.once=function(t,e){return s(e),this.on(t,c(this,t,e)),this},p.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,c(this,t,e)),this},p.prototype.off=p.prototype.removeListener=function(t,e){var r,o,n,i,p;if(s(e),void 0===(o=this._events))return this;if(void 0===(r=o[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete o[t],o.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(n=-1,i=r.length-1;0<=i;i--)if(r[i]===e||r[i].listener===e){p=r[i].listener,n=i;break}if(n<0)return this;if(0===n)r.shift();else{for(var a=r,y=n;y+1<a.length;y++)a[y]=a[y+1];a.pop()}1===r.length&&(o[t]=r[0]),void 0!==o.removeListener&&this.emit("removeListener",t,p||e)}return this},p.prototype.removeAllListeners=function(t){var e,r=this._events;if(void 0===r)return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){for(var o,n=Object.keys(r),i=0;i<n.length;++i)"removeListener"!==(o=n[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;0<=i;i--)this.removeListener(t,e[i]);return this},p.prototype.listeners=function(t){return l(this,t,!0)},p.prototype.rawListeners=function(t){return l(this,t,!1)},p.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):h.call(t,e)},p.prototype.listenerCount=h,p.prototype.eventNames=function(){return 0<this._eventsCount?n(this._events):[]}},AM7I:function(t,e,r){"use strict";var o,c=SyntaxError,n=Function,l=TypeError,i=function(t){try{return n('"use strict"; return ('+t+").constructor;")()}catch(t){}},h=Object.getOwnPropertyDescriptor;if(h)try{h({},"")}catch(t){h=null}function p(){throw new l}var a=h?function(){try{return p}catch(t){try{return h(arguments,"callee").get}catch(t){return p}}}():p,y=r("UVaH")(),s=r("CjYj")(),u=Object.getPrototypeOf||(s?function(t){return t.__proto__}:null),d={},s="undefined"!=typeof Uint8Array&&u?u(Uint8Array):o,v={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":y&&u?u([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":y&&u?u(u([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&y&&u?u((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&y&&u?u((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":y&&u?u(""[Symbol.iterator]()):o,"%Symbol%":y?Symbol:o,"%SyntaxError%":c,"%ThrowTypeError%":a,"%TypedArray%":s,"%TypeError%":l,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet};if(u)try{null.error}catch(t){y=u(u(t));v["%Error.prototype%"]=y}function g(t){var e,r;return"%AsyncFunction%"===t?e=i("async function () {}"):"%GeneratorFunction%"===t?e=i("function* () {}"):"%AsyncGeneratorFunction%"===t?e=i("async function* () {}"):"%AsyncGenerator%"===t?(r=g("%AsyncGeneratorFunction%"))&&(e=r.prototype):"%AsyncIteratorPrototype%"===t&&(r=g("%AsyncGenerator%"))&&u&&(e=u(r.prototype)),v[t]=e}var m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},a=r("D3zA"),A=r("lnE3"),b=a.call(Function.call,Array.prototype.concat),P=a.call(Function.apply,Array.prototype.splice),w=a.call(Function.call,String.prototype.replace),E=a.call(Function.call,String.prototype.slice),O=a.call(Function.call,RegExp.prototype.exec),S=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_=/\\(\\)?/g;t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new l("intrinsic name must be a non-empty string");if(1<arguments.length&&"boolean"!=typeof e)throw new l('"allowMissing" argument must be a boolean');if(null===O(/^%?[^%]*%?$/,t))throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=function(t){var e=E(t,0,1),r=E(t,-1);if("%"===e&&"%"!==r)throw new c("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new c("invalid intrinsic syntax, expected opening `%`");var n=[];return w(t,S,function(t,e,r,o){n[n.length]=r?w(o,_,"$1"):e||t}),n}(t),o=0<r.length?r[0]:"",n=function(t,e){var r,o=t;if(A(m,o)&&(o="%"+(r=m[o])[0]+"%"),A(v,o)){var n=v[o];if(void 0!==(n=n===d?g(o):n)||e)return{alias:r,name:o,value:n};throw new l("intrinsic "+t+" exists, but is not available. Please file an issue!")}throw new c("intrinsic "+t+" does not exist!")}("%"+o+"%",e),i=(n.name,n.value),p=!1,n=n.alias;n&&(o=n[0],P(r,b([0,1],n)));for(var a=1,y=!0;a<r.length;a+=1){var s=r[a],u=E(s,0,1),f=E(s,-1);if(('"'===u||"'"===u||"`"===u||'"'===f||"'"===f||"`"===f)&&u!==f)throw new c("property names with quotes must have matching quotes");if("constructor"!==s&&y||(p=!0),A(v,u="%"+(o+="."+s)+"%"))i=v[u];else if(null!=i){if(!(s in i)){if(e)return;throw new l("base intrinsic for "+t+" exists, but the property is not available.")}i=h&&a+1>=r.length?(y=!!(f=h(i,s)))&&"get"in f&&!("originalValue"in f.get)?f.get:i[s]:(y=A(i,s),i[s]),y&&!p&&(v[u]=i)}}return i}},CjYj:function(t,e,r){"use strict";var o={foo:{}},n=Object;t.exports=function(){return{__proto__:o}.foo===o.foo&&!({__proto__:null}instanceof n)}},D3zA:function(t,e,r){"use strict";r=r("aI7X");t.exports=Function.prototype.bind||r},FpZJ:function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;r=Object.getOwnPropertySymbols(t);if(1!==r.length||r[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){r=Object.getOwnPropertyDescriptor(t,e);if(42!==r.value||!0!==r.enumerable)return!1}return!0}},JPgR:function(t,e,r){var o,n=r("lJCZ"),i=r("skmB"),p=t.exports;for(o in n)n.hasOwnProperty(o)&&(p[o]=n[o]);function a(t){if((t="string"==typeof t?i.parse(t):t).protocol||(t.protocol="https:"),"https:"!==t.protocol)throw new Error('Protocol "'+t.protocol+'" not supported. Expected "https:"');return t}p.request=function(t,e){return t=a(t),n.request.call(this,t,e)},p.get=function(t,e){return t=a(t),n.get.call(this,t,e)}},Kqna:function(t,e,r){"use strict";r=r("AM7I")("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(t){r=null}t.exports=r},UVaH:function(t,e,r){"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=r("FpZJ");t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))}},ZLCw:function(t,e,r){"use strict";function o(){if(n)try{return n({},"a",{value:1}),!0}catch(t){return!1}return!1}var n=r("AM7I")("%Object.defineProperty%",!0);o.hasArrayLengthDefineBug=function(){if(!o())return null;try{return 1!==n([],"length",{value:1}).length}catch(t){return!0}},t.exports=o},aI7X:function(t,e,r){"use strict";function y(t,e){for(var r=[],o=0;o<t.length;o+=1)r[o]=t[o];for(var n=0;n<e.length;n+=1)r[n+t.length]=e[n];return r}var s=Object.prototype.toString,u=Math.max;t.exports=function(e){var r=this;if("function"!=typeof r||"[object Function]"!==s.apply(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var o,t,n=function(t,e){for(var r=[],o=e||0,n=0;o<t.length;o+=1,n+=1)r[n]=t[o];return r}(arguments,1),i=u(0,r.length-n.length),p=[],a=0;a<i;a++)p[a]="$"+a;return o=Function("binder","return function ("+function(t,e){for(var r="",o=0;o<t.length;o+=1)r+=t[o],o+1<t.length&&(r+=e);return r}(p,",")+"){ return binder.apply(this,arguments); }")(function(){var t;return this instanceof o?(t=r.apply(this,y(n,arguments)),Object(t)===t?t:this):r.apply(e,y(n,arguments))}),r.prototype&&((t=function(){}).prototype=r.prototype,o.prototype=new t,t.prototype=null),o}},lnE3:function(t,e,r){"use strict";var o=Function.prototype.call,n=Object.prototype.hasOwnProperty,r=r("D3zA");t.exports=r.call(o,n)}}]);HVqaWEtc2hpcGYzNDktbxRlYm9va2luZy1yaWxpZjA0NDUtbwAAAAA=);
  src: url(data:application/font-woff;base64,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); }

.vsw_body_wrapper .vsw_iconfont, .vsw_body_wrapper .vsw_tit_more_arr, .vsw_body_wrapper .vsw_tit_arr {
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "vsw_iconfont" !important; }

.vsw_body_wrapper .vsw_icon_location::after {
  content: '\ed05'; }

.vsw_body_wrapper .vsw_icon_scenic::after {
  content: '\e3bf'; }

.vsw_body_wrapper .vsw_icon_play::after {
  content: '\e978'; }

.vsw_body_wrapper .vsw_icon_hotel::after {
  content: '\e959'; }

.vsw_body_wrapper .vsw_icon_search::after {
  content: '\e3be'; }

.vsw_body_wrapper .vsw_icon_like::after {
  content: '\ea01'; }

.vsw_body_wrapper .vsw_icon_fun::after {
  content: '\e96e'; }

.vsw_body_wrapper .vsw_icon_ship::after {
  content: '\f349'; }

.vsw_body_wrapper .vsw_icon_hot::after {
  content: '\e321'; }

.vsw_body_wrapper .vsw_icon_person::after {
  content: '\e506'; }

.vsw_body_wrapper .vsw_icon_visa::after {
  content: '\e1b0'; }

.vsw_body_wrapper .vsw_icon_insure::after {
  content: '\e040'; }

.vsw_body_wrapper .vsw_icon_search_2::after {
  content: '\e92a'; }

.vsw_body_wrapper .vsw_icon_project::after {
  content: '\f048'; }

.vsw_body_wrapper .vsw_icon_tickets::after {
  content: '\f021'; }

.vsw_body_wrapper .vsw_icon_clear::after {
  content: '\ed1f'; }

.vsw_body_wrapper .vsw_icon_pattern::after {
  content: '\e65b'; }

.vsw_body_wrapper .vsw_icon_calendar::after {
  content: '\f0445'; }

.vsw_body {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF; }

.vsw_mod_list {
  overflow-y: auto;
  background-color: #FFFFFF;
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1; }

.vsw_body_wrapper .vsw_flex_box {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.vsw_body_wrapper .vsw_two_line {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  word-break: break-word;
  overflow: hidden; }

.vsw_body_wrapper .vsw_bg_white {
  position: relative;
  background: none; }

.vsw_body_wrapper .vsw_bg_white::after {
  position: fixed;
  z-index: -2;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  content: '';
  background-color: #FFFFFF; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_sight_card_content .vsw_tit_row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.vsw_body_wrapper .vsw_sight_card_content .vsw_tit_tip_right {
  -ms-flex-negative: 0;
      flex-shrink: 0; }

.vsw_body_wrapper .vsw_sight_card_content .vsw_tit_row_left {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex; }
  .vsw_body_wrapper .vsw_sight_card_content .vsw_tit_row_left .vsw_tit_text {
    -webkit-box-flex: 0;
       -moz-box-flex: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
    -ms-flex-negative: 1;
        flex-shrink: 1;
    -ms-flex-preferred-size: unset;
        flex-basis: unset; }
  .vsw_body_wrapper .vsw_sight_card_content .vsw_tit_row_left .sight_card_tips_right {
    -ms-flex-negative: 0;
        flex-shrink: 0;
    font-size: 14px;
    line-height: 20px;
    margin-left: 4px;
    font-weight: 700;
    color: #333333; }

.vsw_body_wrapper .vsw_body_fixed {
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translateZ(0);
          transform: translateZ(0); }

.vsw_body_wrapper .vsw_search_bar {
  position: relative;
  height: 44px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  background-color: #FFFFFF;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 6px 12px; }
  .vsw_body_wrapper .vsw_search_bar::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: #EEEEEE;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
    -webkit-transform-origin: 0 bottom;
            transform-origin: 0 bottom; }

.vsw_body_wrapper .vsw_search_input_box {
  position: relative;
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 32px;
  border-radius: 16px;
  background-color: #F4F4F4;
  padding: 0 12px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.vsw_body_wrapper .vsw_search_input {
  height: 32px;
  font-size: 14px;
  padding-right: 20px; }

.vsw_body_wrapper .vsw_search_btn {
  font-size: 15px;
  line-height: 19px;
  color: #333333;
  margin-left: 12px; }

.vsw_body_wrapper .vsw_search_input {
  width: 100%; }

.vsw_body_wrapper .vsw_search_icon_wrap {
  margin-right: 6px;
  margin-top: 1px; }
  .vsw_body_wrapper .vsw_search_icon_wrap .vsw_iconfont, .vsw_body_wrapper .vsw_search_icon_wrap .vsw_tit_more_arr, .vsw_body_wrapper .vsw_search_icon_wrap .vsw_tit_arr {
    color: #999999;
    font-size: 16px;
    line-height: 16px; }

.vsw_body_wrapper .vsw_search_clear_btn {
  position: absolute;
  top: 0;
  right: 2px;
  width: 32px;
  height: 32px;
  text-align: center;
  padding-top: 8px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box; }
  .vsw_body_wrapper .vsw_search_clear_btn .vsw_icon_clear {
    color: #CCCCCC;
    font-size: 16px;
    line-height: 16px; }

.vsw_body_wrapper .one_line_bottom {
  position: absolute;
  left: 12px;
  bottom: 0;
  width: 200%;
  height: 1px;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: #eee;
  z-index: 2; }

.vsw_body_wrapper .vsw_mod {
  background: #FFFFFF;
  position: relative; }

.vsw_body_wrapper .vsw_blue_txt {
  color: #0086F6; }

.vsw_body_wrapper .vsw_tit_sight_score {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #999;
  font-size: 12px;
  line-height: 17px; }
  .vsw_body_wrapper .vsw_tit_sight_score .vsw_sight_left {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap; }
    .vsw_body_wrapper .vsw_tit_sight_score .vsw_sight_left_left {
      -ms-flex-negative: 0;
          flex-shrink: 0; }
    .vsw_body_wrapper .vsw_tit_sight_score .vsw_sight_left_center {
      display: -webkit-box;
      display: box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      word-break: break-word;
      overflow: hidden; }
    .vsw_body_wrapper .vsw_tit_sight_score .vsw_sight_left_right {
      -ms-flex-negative: 0;
          flex-shrink: 0; }
  .vsw_body_wrapper .vsw_tit_sight_score .vsw_sight_right {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
        flex-shrink: 0;
    -webkit-box-align: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
  .vsw_body_wrapper .vsw_tit_sight_score .vsw_tit_tip_line {
    width: 1px;
    height: 9px;
    margin: 0 4px;
    position: relative;
    background-color: #999;
    display: inline-block; }

.vsw_body_wrapper .vsw_tit_item {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 12px 12px;
  position: relative; }
  .vsw_body_wrapper .vsw_tit_item.pro_item {
    padding: 8px 12px 10px; }
  .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_tit_text {
    font-weight: 700; }
  .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_tit_row {
    -webkit-box-align: start;
       -moz-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start; }
  .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_tit_tip_right {
    line-height: 18px; }
  .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_new_icon {
    position: relative;
    width: 18px;
    height: 18px;
    -ms-flex-item-align: start;
        align-self: flex-start;
    margin-top: 1px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
    .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_new_icon .vsw_icon_img {
      width: 17px;
      height: 17px; }
  .vsw_body_wrapper .vsw_tit_item.pro_card .vsw_tit_tip_left.one_line {
    width: 100%;
    margin-top: 4px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-box-flex: 1;
       -moz-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    -ms-flex-negative: 1;
        flex-shrink: 1; }

.vsw_body_wrapper .vsw_tit_icon_wrap {
  width: 16px;
  height: 16px;
  margin-top: 1px;
  margin-right: 8px;
  -ms-flex-item-align: start;
      align-self: flex-start; }
  .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_iconfont, .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_tit_more_arr, .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_tit_arr {
    font-size: 16px;
    line-height: 16px;
    color: #CCCCCC;
    vertical-align: top; }
    .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_iconfont::after, .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_tit_more_arr::after, .vsw_body_wrapper .vsw_tit_icon_wrap .vsw_tit_arr::after {
      vertical-align: top; }

.vsw_body_wrapper .vsw_tit_icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: #eee;
  vertical-align: top; }

.vsw_body_wrapper .vsw_tit_content {
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1; }

.vsw_body_wrapper .vsw_tit_row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .vsw_body_wrapper .vsw_tit_row_title {
    -webkit-box-flex: 1;
       -moz-box-flex: 1;
        -ms-flex: 1;
            flex: 1; }

.vsw_body_wrapper .vsw_tit_row_left {
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  line-height: 18px; }

.vsw_body_wrapper .vsw_tit_row_right {
  font-size: 0;
  line-height: 18px; }

.vsw_body_wrapper .vsw_tit_tag_wrap {
  -webkit-box-flex: 0;
     -moz-box-flex: 0;
      -ms-flex: 0;
          flex: 0;
  margin-left: 12px;
  white-space: nowrap;
  font-size: 0;
  text-align: right; }

.vsw_body_wrapper .vsw_tit_tag {
  font-size: 11px;
  line-height: normal;
  padding: 1px 4px;
  background-color: #F6F8FA;
  color: #333333;
  display: inline-block;
  border-radius: 2px; }
  .vsw_body_wrapper .vsw_tit_tag + .vsw_tit_tag {
    margin-left: 4px; }

.vsw_body_wrapper .vsw_tit_more_text {
  font-size: 12px;
  line-height: 18px;
  color: #999999;
  display: inline-block;
  vertical-align: top; }

.vsw_body_wrapper .vsw_tit_more_arr {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: top;
  margin-top: 3px; }
  .vsw_body_wrapper .vsw_tit_more_arr::after {
    content: '\e944';
    font-size: 12px;
    line-height: 12px;
    color: #999999;
    vertical-align: top; }

.vsw_body_wrapper .vsw_text_blue {
  color: #0086F6; }

.vsw_body_wrapper .vsw_tit_text {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #333333;
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1; }
  .vsw_body_wrapper .vsw_tit_text .vsw_text_blue {
    font-weight: 700;
    color: #0086F6; }
  .vsw_body_wrapper .vsw_tit_text.two_line {
    white-space: normal;
    max-height: 40px;
    overflow: hidden;
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    word-break: break-word;
    overflow: hidden; }
  .vsw_body_wrapper .vsw_tit_text.one_line {
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    word-break: break-word;
    overflow: hidden; }

.vsw_body_wrapper .vsw_tit_sub_row {
  font-size: 0;
  margin-top: 4px; }

.vsw_body_wrapper .vsw_tit_sub {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  font-weight: normal;
  color: #999999;
  font-size: 12px;
  line-height: 17px;
  margin-top: 4px; }
  .vsw_body_wrapper .vsw_tit_sub .vsw_tit_tip_line {
    width: 1px;
    height: 9px;
    margin: 0 4px;
    position: relative;
    background-color: #999;
    display: inline-block; }

.vsw_body_wrapper .vsw_tit_tip_row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
     -moz-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: 4px; }
  .vsw_body_wrapper .vsw_tit_tip_row.tickets {
    margin-top: 8px; }

.vsw_body_wrapper .vsw_tit_tip_left {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
  font-size: 0; }
  .vsw_body_wrapper .vsw_tit_tip_left .vsw_tit_tip_score {
    font-size: 12px;
    line-height: 17px;
    color: #999;
    display: inline-block; }
  .vsw_body_wrapper .vsw_tit_tip_left .vsw_tit_tip_line {
    display: inline-block;
    height: 17px;
    width: 1px; }

.vsw_body_wrapper .vsw_tit_tip_right {
  margin-left: 4px;
  white-space: nowrap;
  margin-top: -2px;
  margin-bottom: -2px;
  font-size: 16px;
  line-height: 17px;
  min-width: 54px;
  text-align: right; }
  .vsw_body_wrapper .vsw_tit_tip_right .pro_card_arr_right {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 2px;
    margin-right: -4px;
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/arr.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 1px; }

.vsw_body_wrapper .vsw_tit_tip_text {
  font-size: 12px;
  line-height: 15px;
  color: #999999; }

.vsw_body_wrapper .vsw_tit_tip_divider {
  font-size: 12px;
  line-height: 15px;
  color: #999999;
  display: inline-block;
  margin: 0 4px; }

.vsw_body_wrapper .vsw_price_text {
  font-size: 13px;
  line-height: 17px;
  color: #FF6600;
  font-weight: 700;
  display: inline-block;
  vertical-align: baseline; }

.vsw_body_wrapper .vsw_price_text_grey {
  font-size: 12px;
  line-height: 17px;
  color: #666666;
  display: inline-block;
  vertical-align: baseline; }

.vsw_body_wrapper .vsw_price_currency {
  font-size: 13px;
  line-height: 17px;
  color: #FF6600;
  display: inline-block;
  vertical-align: baseline; }

.vsw_body_wrapper .vsw_price_tip {
  font-size: 11px;
  line-height: 17px;
  color: #666666;
  display: inline-block;
  vertical-align: baseline; }

.vsw_body_wrapper .vsw_tag_row {
  padding-left: 35px;
  padding-right: 12px; }

.vsw_body_wrapper .vsw_tag_wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 10px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: -4px;
  margin-bottom: -4px;
  margin-left: -4px;
  margin-right: -4px; }

.vsw_body_wrapper .vsw_tag_item_wrap {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin: 4px 0;
  width: 33.33%; }
  .vsw_body_wrapper .vsw_tag_item_wrap.width_2 {
    width: 50%; }

.vsw_body_wrapper .vsw_tag_item {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 4px 8px;
  background-color: #F6F8FA;
  border-radius: 4px;
  margin: 0 4px;
  height: 100%;
  min-height: 35px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box; }
  .vsw_body_wrapper .vsw_tag_item .tag_text {
    max-width: 100%;
    font-size: 13px;
    line-height: 19px;
    color: #333333;
    text-align: center; }
  .vsw_body_wrapper .vsw_tag_item .tag_tip {
    font-size: 11px;
    line-height: 12px;
    color: #666666;
    margin-top: 2px;
    margin-bottom: 2px;
    text-align: center; }

.vsw_body_wrapper .vsw_tag_item .tag_text {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis; }
  .vsw_body_wrapper .vsw_tag_item .tag_text.two_line {
    white-space: normal;
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    word-break: break-word;
    overflow: hidden; }

.vsw_body_wrapper .vsw_tit_arr {
  width: auto;
  height: 16px;
  margin-left: 12px;
  -ms-flex-negative: 0;
      flex-shrink: 0; }
  .vsw_body_wrapper .vsw_tit_arr::after {
    content: '\e944';
    font-size: 16px;
    line-height: 16px;
    color: #999999; }

.vsw_body_wrapper .vsw_pro_tag {
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: normal;
  border-radius: 2px;
  padding: 0 4px;
  margin-right: 4px;
  -ms-flex-negative: 0;
      flex-shrink: 0; }
  .vsw_body_wrapper .vsw_pro_tag.tag_enjoy {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #4A4A4A), to(#898989));
    background-image: linear-gradient(to right, #4A4A4A 0, #898989 100%);
    color: #F5E4CA; }
  .vsw_body_wrapper .vsw_pro_tag.tag_self_owned {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #0086F6), to(#2698F7));
    background-image: linear-gradient(to right, #0086F6 0, #2698F7 100%);
    color: #FFFFFF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_smart_choice {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #D0B082), to(#E7CFA8));
    background-image: linear-gradient(to right, #D0B082 0, #E7CFA8 100%);
    color: #FFFFFF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_favor {
    background-color: #F6F8FA;
    color: #99AECA;
    position: relative; }
    .vsw_body_wrapper .vsw_pro_tag.tag_favor::after {
      content: "";
      width: 200%;
      height: 200%;
      border: 1px solid #99AECA;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      border-radius: 4px; }
  .vsw_body_wrapper .vsw_pro_tag.tag_group_travel {
    background-color: #FFEFEF;
    color: #FF6462; }
  .vsw_body_wrapper .vsw_pro_tag.tag_diy_tour {
    background-color: rgba(18, 165, 255, 0.1);
    color: #12A5FF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_half_diy_tour {
    background-color: #FFF7E5;
    color: #FFB300; }
  .vsw_body_wrapper .vsw_pro_tag.tag_insure {
    background-color: #EFF3EF;
    color: #5F8C62; }
  .vsw_body_wrapper .vsw_pro_tag.tag_guide {
    background-color: #F1F0FF;
    color: #776DFF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_golf {
    background-color: #EFF9E5;
    color: #65C700; }
  .vsw_body_wrapper .vsw_pro_tag.tag_train {
    background-color: #F3EEF8;
    color: #895BBD; }
  .vsw_body_wrapper .vsw_pro_tag.tag_traffic {
    background-color: #ECF1FD;
    color: #2D7CF8; }
  .vsw_body_wrapper .vsw_pro_tag.tag_hotel_scenic {
    background-color: #FCF5EA;
    color: #E29C36; }
  .vsw_body_wrapper .vsw_pro_tag.tag_ticket {
    background-color: #FFF1E5;
    color: #FF7300; }
  .vsw_body_wrapper .vsw_pro_tag.tag_visa {
    background-color: #F8EDFF;
    color: #C669FF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_private_group {
    background-color: #FFF2F8;
    color: #FF84BC; }
  .vsw_body_wrapper .vsw_pro_tag.tag_fun {
    background-color: rgba(0, 180, 213, 0.1);
    color: #00B4D5; }
  .vsw_body_wrapper .vsw_pro_tag.tag_one_day {
    background-color: #E5F2FB;
    color: #0081E0; }
  .vsw_body_wrapper .vsw_pro_tag.tag_ship {
    background-color: #E5FAF8;
    color: #00D4BB; }
  .vsw_body_wrapper .vsw_pro_tag.tag_youxue {
    background-color: #E5F9EC;
    color: #00C548; }
  .vsw_body_wrapper .vsw_pro_tag.tag_wifi {
    background-color: #E6FBF4;
    color: #00DB8C; }
  .vsw_body_wrapper .vsw_pro_tag.tag_self_drive {
    background-color: #F0F2FF;
    color: #6986FF; }
  .vsw_body_wrapper .vsw_pro_tag.tag_act_play {
    background-color: #E7F8F6;
    color: #10BDAC; }
  .vsw_body_wrapper .vsw_pro_tag.tag_car_use {
    background-color: #EDF0FF;
    color: #546FFF; }

.vsw_body_wrapper .vsw_empty {
  padding: 90px 12px 80px; }

.vsw_body_wrapper .vsw_empty_img {
  width: 170px;
  height: 170px;
  margin: 0 auto;
  background-size: 100% auto;
  background-repeat: no-repeat; }
  .vsw_body_wrapper .vsw_empty_img.img_no_network {
    background-image: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/no_network.png"); }
  .vsw_body_wrapper .vsw_empty_img.img_no_result {
    background-image: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/no_result.png"); }

.vsw_body_wrapper .vsw_empty_text {
  text-align: center;
  font-size: 17px;
  line-height: 21px;
  margin-top: 12px;
  color: #333333;
  font-weight: 700; }

.vsw_body_wrapper .vsw_empty_tip {
  text-align: center;
  font-size: 13px;
  line-height: 19px;
  color: #666666;
  margin-top: 6px; }

.vsw_body_wrapper .vsw_loading {
  padding-top: 160px;
  padding-bottom: 160px; }

.vsw_body_wrapper .vsw_poi_left {
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-size: 14px;
  line-height: 20px; }
  .vsw_body_wrapper .vsw_poi_left.one_line {
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    word-break: break-word;
    overflow: hidden; }
  .vsw_body_wrapper .vsw_poi_left.vsw_suggestion {
    -webkit-box-flex: 0;
       -moz-box-flex: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
    -ms-flex-negative: 1;
        flex-shrink: 1;
    -ms-flex-preferred-size: unset;
        flex-basis: unset; }
  .vsw_body_wrapper .vsw_poi_left .vsw_upper_text {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-left: 8px; }

.vsw_body_wrapper .vsw_poi_text_right {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  color: #999;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  margin-left: 12px;
  margin-right: -4px; }
  .vsw_body_wrapper .vsw_poi_text_right .vsw_tit_arr {
    margin-left: 0;
    width: 12px;
    height: 12px;
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/arr.png") no-repeat;
    background-size: 100% 100%; }
    .vsw_body_wrapper .vsw_poi_text_right .vsw_tit_arr::after {
      content: '';
      display: none; }

.vsw_body_wrapper .vsw_new_icon {
  width: 17px;
  height: 17px;
  margin-right: 8px;
  margin-top: -1px; }
  .vsw_body_wrapper .vsw_new_icon.vsw_sight_card_icon {
    -ms-flex-item-align: start;
        align-self: flex-start;
    margin-top: 1px; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img {
    width: 100%;
    height: 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_location {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/location.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_sight {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/sight.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_hot {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/hot.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_search {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/search.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_hotel {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/hotel.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_visa {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/visa.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_person {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/person.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_play {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/play.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_info {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/info.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_diy_tour {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_diy_tour.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_guide {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/guide.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_fun {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_fun.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_golf {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_golf.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_group_travel {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_group_travel.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_guide_line {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_guide_line.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_guide_special {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_guide_special.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_guide_walk {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_guide_walk.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_guide {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_guide.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_hotel_scenic {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_hotel_scenic.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_insure {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_insure.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_one_day {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_one_day.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_photo {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_photo.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_private_group {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_private_group.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_self_drive {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_self_drive.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_ship {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_ship.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_ticket {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_ticket.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_traffic {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_traffic.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_train {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_train.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_visa {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_visa.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_ship {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/ship.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_time {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/time.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .vsw_icon_img_travel_type {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/travel_type.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_guide_order {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_guide_order.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_wifi {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_wifi.png") no-repeat;
    background-size: 100% 100%; }
  .vsw_body_wrapper .vsw_new_icon .pro_youxue {
    background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/icon_png_2/pro_youxue.png") no-repeat;
    background-size: 100% 100%; }

.vsw_body_wrapper .vsw_guide_item {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .vsw_body_wrapper .vsw_guide_item.item_m_top {
    margin-top: 12px; }
  .vsw_body_wrapper .vsw_guide_item_img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 8px;
    background-color: #F6F8FA;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -ms-flex-negative: 0;
        flex-shrink: 0; }
  .vsw_body_wrapper .vsw_guide_item_infos {
    height: 60px;
    -webkit-box-flex: 1;
       -moz-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin-right: 15px; }
    .vsw_body_wrapper .vsw_guide_item_infos_title {
      font-size: 15px;
      line-height: 20px;
      font-weight: 500;
      display: -webkit-box;
      display: box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      word-break: break-word;
      overflow: hidden; }
    .vsw_body_wrapper .vsw_guide_item_infos_txt, .vsw_body_wrapper .vsw_guide_item_infos_sub {
      font-size: 11px;
      line-height: 12px;
      margin-top: 8px;
      display: -webkit-box;
      display: box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      word-break: break-word;
      overflow: hidden; }
    .vsw_body_wrapper .vsw_guide_item_infos_sub {
      color: #666666; }
    .vsw_body_wrapper .vsw_guide_item_infos_txt {
      color: #333333; }
  .vsw_body_wrapper .vsw_guide_item_btn {
    -ms-flex-negative: 0;
        flex-shrink: 0;
    font-size: 13px;
    line-height: 1;
    color: #0086f6;
    height: 30px;
    width: 62px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
    -webkit-box-pack: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
    .vsw_body_wrapper .vsw_guide_item_btn::after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 200%;
      height: 200%;
      border: 1px solid #2698f7;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
      -moz-box-sizing: border-box;
           box-sizing: border-box;
      -webkit-box-sizing: border-box;
      border-radius: 8px; }

.vsw_pc_scroll_box {
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #FFFFFF;
  border-radius: 4px;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1); }
  .vsw_pc_scroll_box::-webkit-scrollbar {
    width: 16px; }
  .vsw_pc_scroll_box::-webkit-scrollbar-thumb {
    background: #E7E8EC;
    border-radius: 8px;
    border: 4px solid white; }
  .vsw_pc_scroll_box::-webkit-scrollbar-track-piece {
    background-color: #FFFFFF; }

.vsw_pc_search_bar {
  height: 42px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #FF6600;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex; }

.vsw_body_wrapper .vsw_pc_search_left {
  -webkit-box-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1; }

.vsw_body_wrapper .vsw_pc_search_input {
  height: 40px;
  font-size: 16px;
  color: #333333;
  padding-left: 12px;
  padding-right: 12px; }

.vsw_body_wrapper .vsw_pc_search_btn {
  min-width: 120px;
  background-color: #FF6600;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer; }
  .vsw_body_wrapper .vsw_pc_search_btn .search_text {
    font-size: 16px;
    line-height: 40px; }
  .vsw_body_wrapper .vsw_pc_search_btn .vsw_iconfont, .vsw_body_wrapper .vsw_pc_search_btn .vsw_tit_more_arr, .vsw_body_wrapper .vsw_pc_search_btn .vsw_tit_arr {
    margin-right: 6px;
    margin-top: 1px; }

.vsw_body_wrapper .vsw_tit_item_right {
  margin-left: 16px;
  min-width: 60px;
  text-align: right; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_sub {
  line-height: 18px; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_score, .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_line, .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_score {
  display: inline-block; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tag_item {
  cursor: pointer; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tag_item .tag_text {
    font-size: 14px;
    line-height: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 18px; }
    .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tag_item .tag_text.two_line {
      white-space: normal;
      max-height: 36px; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tag_item .tag_tip {
    font-size: 12px;
    line-height: 16px; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_item.with_hover:hover {
  cursor: pointer;
  background-color: #F4F9FF; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row_right:hover {
  cursor: pointer; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_pro_tag {
  padding: 0 4px 1px;
  padding: 1px 4px 2px\0; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_pro_tag.tag_favor::after {
  content: "";
  width: 100%;
  height: 100%;
  border: 1px solid #99AECA;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 2px;
  -webkit-transform: scale(1);
          transform: scale(1); }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_row {
  display: block;
  overflow: hidden; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_row .vsw_tit_tip_right {
    float: right; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_tip_row .vsw_tit_tip_left {
    float: left; }

.vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row {
  display: block;
  overflow: hidden; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row.project_row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row .vsw_tit_row_left {
    overflow: hidden; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row .vsw_tit_row_right {
    float: right; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row .vsw_tit_tag_wrap {
    float: right; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row .vsw_tit_tag {
    cursor: pointer;
    line-height: 16px\0; }
  .vsw_body_wrapper .vsw_mod_pc.vsw_mod .vsw_tit_row.suggestion_row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex; }

.vsw_body_wrapper .vsw_loading_img {
  width: 40px;
  height: 40px;
  background: url("https://pic.c-ctrip.com/VacationH5Pic/vacation_search/loading.png") no-repeat;
  background-size: 100% auto;
  margin: 0 auto;
  display: none;
  display: block\0; }

.vsw_body_wrapper .vsw_loading_svg {
  display: block;
  display: none\0; }
