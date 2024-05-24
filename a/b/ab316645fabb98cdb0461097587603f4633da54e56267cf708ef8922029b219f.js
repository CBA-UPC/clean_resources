/*! For license information please see 0_9d492a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1120:function(e,t,n){var r=n(1121),o=n(1122),i=n(249),a=n(81);e.exports=function(e,t){return function(n,u){var c=a(n)?r:o,l=t?t():{};return c(n,e,i(u,2),l)}}},1121:function(e,t){e.exports=function(e,t,n,r){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(r,a,n(a),e)}return r}},1122:function(e,t,n){var r=n(963);e.exports=function(e,t,n,o){return r(e,(function(e,r,i){t(o,e,n(e),i)})),o}},1123:function(e,t,n){var r=n(165);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var i=n.length,a=t?i:-1,u=Object(n);(t?a--:++a<i)&&!1!==o(u[a],a,u););return n}}},514:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(5);function o(){return Object(r.getCurrentInstance)().proxy.$root.$router}function i(){var e=Object(r.getCurrentInstance)().proxy.$root;if(!e._$route){var t=Object(r.effectScope)(!0).run((function(){return Object(r.shallowReactive)(Object.assign({},e.$router.currentRoute))}));e._$route=t,e.$router.afterEach((function(e){Object.assign(t,e)}))}return e._$route}},541:function(e,t,n){var r=n(312),o=0;e.exports=function(e){var t=++o;return r(e)+t}},677:function(e,t,n){var r=n(189),o=n(1120),i=Object.prototype.hasOwnProperty,a=o((function(e,t,n){i.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=a},847:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return C}));var u="_",c="function",l=[];function f(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}var s="[]";var p=[],v="";function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!f(t)){if(i(t)!==c)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=function(e){for(var t,n=[];-1!==(t=e.indexOf(s));)n.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:n}}(t=t(e,n)).maskWithoutCaretTraps}var r=n.guide,o=void 0===r||r,a=n.previousConformedValue,d=void 0===a?v:a,h=n.placeholderChar,g=void 0===h?u:h,y=n.placeholder,m=void 0===y?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if(!f(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+"The placeholder character that was received is: ".concat(JSON.stringify(t),"\n\n")+"The mask that was received is: ".concat(JSON.stringify(e)));return e.map((function(e){return e instanceof RegExp?t:e})).join("")}(t,g):y,b=n.currentCaretPosition,O=n.keepCharPositions,x=!1===o&&void 0!==d,w=e.length,j=d.length,k=m.length,S=t.length,E=w-j,P=E>0,T=b+(P?-E:0),$=T+Math.abs(E);if(!0===O&&!P){for(var A=v,R=T;R<$;R++)m[R]===g&&(A+=g);e=e.slice(0,T)+A+e.slice(T,w)}for(var C=e.split(v).map((function(e,t){return{char:e,isNew:t>=T&&t<$}})),_=w-1;_>=0;_--){var N=C[_].char;if(N!==g)N===m[_>=T&&j===S?_-E:_]&&C.splice(_,1)}var M=v,V=!1;e:for(var D=0;D<k;D++){var I=m[D];if(I===g){if(C.length>0)for(;C.length>0;){var L=C.shift(),J=L.char,U=L.isNew;if(J===g&&!0!==x){M+=g;continue e}if(t[D].test(J)){if(!0===O&&!1!==U&&d!==v&&!1!==o&&P){for(var B=C.length,q=null,z=0;z<B;z++){var H=C[z];if(H.char!==g&&!1===H.isNew)break;if(H.char===g){q=z;break}}null!==q?(M+=J,C.splice(q,1)):D--}else M+=J;continue e}V=!0}!1===x&&(M+=m.substr(D,k));break}M+=I}if(x&&!1===P){for(var W=null,F=0;F<M.length;F++)m[F]===g&&(W=F);M=null!==W?M.substr(0,W+1):v}return{conformedValue:M,meta:{someCharsRejected:V}}}var h={__nextCharOptional__:!0},g={"#":/\d/,A:/[a-z]/i,N:/[a-z0-9]/i,"?":h,X:/./},y=function(e){return t=e.toString().replace(/.(\/)[gmiyus]{0,6}$/,(function(e){return e.replace("/","?/")})),n=t.lastIndexOf("/"),new RegExp(t.slice(1,n),t.slice(n+1));var t,n},m=function(e){return e instanceof RegExp?e:function(e){return new RegExp("/[".concat(function(e){return"[\\^$.|?*+()".indexOf(e)>-1?"\\".concat(e):e}(e),"]/"))}(e)};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return e.map((function(e,n,r){var o=t[e]||e,i=r[n-1],a=t[i]||i;return o===h?null:a===h?y(m(o)):o})).filter(Boolean)}var O=function(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)},x=function(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e},w=function(e){return"function"==typeof e},j=function(e){return"string"==typeof e},k=function(e){return e instanceof RegExp};function S(e,t){return Array.isArray(e)?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return b(e.map((function(e){return e instanceof RegExp?e:"string"==typeof e?e.split(""):null})).filter(Boolean).reduce((function(e,t){return e.concat(t)}),[]),t)}(e,t):w(e)?e:j(e)&&e.length>0?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return b(e.split(""),t)}(e,t):e}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return null===e||Array.isArray(e)||"object"!==i(e)?t:Object.keys(e).reduce((function(t,n){var r=e[n];return null===r||r instanceof RegExp?o(o({},t),{},a({},n,r)):t}),t)}var P=function(){var e=new Map,t={previousValue:"",mask:[]};function n(n){return e.get(n)||o({},t)}return{partiallyUpdate:function(t,r){e.set(t,o(o({},n(t)),r))},remove:function(t){e.delete(t)},get:n}}();function T(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.value,r=P.get(e),o=r.previousValue,i=r.mask,a=n!==o,u=n.length>o.length;if((t||n&&a&&u)&&i){var c=d(n,i,{guide:!1}).conformedValue;e.value=c,function(e){O(e,"input")}(e)}P.partiallyUpdate(e,{previousValue:n})}function $(e,t,n){var r=S(t,n);P.partiallyUpdate(e,{mask:r})}function A(e){return(Array.isArray(e)?e:[e]).filter((function(e){return j(e)||k(e)})).toString()}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=E(e&&e.placeholders);return{bind:function(e,n){var r=n.value;$(e=x(e),r,t),T(e)},componentUpdated:function(e,n){var r=n.value,o=n.oldValue;e=x(e);var i=w(r)||A(o)!==A(r);i&&$(e,r,t),T(e,i)},unbind:function(e){e=x(e),P.remove(e)}}}var C=R();function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=E(e&&e.placeholders);return function(e,n){if(!j(e)&&!Number.isFinite(e))return e;var r=S(n,t);return d("".concat(e),r,{guide:!1}).conformedValue}}_()},848:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},,function(e,t){"use strict";function n(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=e.length;if(e===u||e[0]===g[0]&&1===t)return g.split(u).concat([d]).concat(m.split(u));if(e===E&&k)return g.split(u).concat(["0",E,d]).concat(m.split(u));var n=e[0]===f&&C;n&&(e=e.toString().substr(1));var a=e.lastIndexOf(E),c=-1!==a,l=void 0,y=void 0,b=void 0;if(e.slice(-1*I)===m&&(e=e.slice(0,-1*I)),c&&(k||A)?(l=e.slice(e.slice(0,D)===g?D:0,a),y=r((y=e.slice(a+1,t)).replace(p,u))):l=e.slice(0,D)===g?e.slice(D):e,V&&(void 0===V?"undefined":i(V))===v){var x="."===w?"[.]":""+w,j=(l.match(new RegExp(x,"g"))||[]).length;l=l.slice(0,V+j*L)}return l=l.replace(p,u),N||(l=l.replace(/^0+(0$|[^0])/,"$1")),b=r(l=O?o(l,w):l),(c&&k||!0===A)&&(e[a-1]!==E&&b.push(h),b.push(E,h),y&&((void 0===T?"undefined":i(T))===v&&(y=y.slice(0,T)),b=b.concat(y)),!0===A&&e[a-1]===E&&b.push(d)),D>0&&(b=g.split(u).concat(b)),n&&(b.length===D&&b.push(d),b=[s].concat(b)),m.length>0&&(b=b.concat(m.split(u))),b}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.prefix,g=void 0===n?a:n,y=t.suffix,m=void 0===y?u:y,b=t.includeThousandsSeparator,O=void 0===b||b,x=t.thousandsSeparatorSymbol,w=void 0===x?c:x,j=t.allowDecimal,k=void 0!==j&&j,S=t.decimalSymbol,E=void 0===S?l:S,P=t.decimalLimit,T=void 0===P?2:P,$=t.requireDecimal,A=void 0!==$&&$,R=t.allowNegative,C=void 0!==R&&R,_=t.allowLeadingZeroes,N=void 0!==_&&_,M=t.integerLimit,V=void 0===M?null:M,D=g&&g.length||0,I=m&&m.length||0,L=w&&w.length||0;return e.instanceOf="createNumberMask",e}function r(e){return e.split(u).map((function(e){return d.test(e)?d:e}))}function o(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var a="$",u="",c=",",l=".",f="-",s=/-/,p=/\D+/g,v="number",d=/\d/,h="[]"}])},963:function(e,t,n){var r=n(254),o=n(1123)(r);e.exports=o}}]); pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input, .w-select {
  width: 100%;
  height: 38px;
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input:-moz-placeholder, .w-select:-moz-placeholder {
  color: #999;
}

.w-input::-moz-placeholder, .w-select::-moz-placeholder {
  color: #999;
  opacity: 1;
}

.w-input::-webkit-input-placeholder, .w-select::-webkit-input-placeholder {
  color: #999;
}

.w-input:focus, .w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input, textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before, .w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  width: .1px;
  height: .1px;
  opacity: 0;
  z-index: -100;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  width: auto;
  height: auto;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon, .w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before, .w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before, .w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main, .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row, .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main, .w-hidden-medium, .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  width: 28px;
  height: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  height: 500px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  margin: auto;
  position: absolute;
  top: -100%;
  bottom: -100%;
  left: -100%;
  right: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  height: 300px;
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  background: #ddd;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  height: 100%;
  white-space: nowrap;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  margin: auto;
  padding-top: 10px;
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  font-size: inherit;
  line-height: inherit;
  padding: .2em .5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px rgba(51, 51, 51, .4);
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: rgba(34, 34, 34, .4);
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  width: 1em;
  height: 1em;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .4);
  margin: 0 3px .5em;
  transition: background-color .1s, color .1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left, .w-slider-arrow-right {
  width: 80px;
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: auto;
  font-size: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left, .w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  min-width: 100%;
  background: #ddd;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, .9);
  outline: 0;
  font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop, .w-lightbox-container {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame, .w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, .4);
  padding: .5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-lightbox-control {
  width: 4em;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: all .3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  height: 2.6em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.w-lightbox-item {
  width: 10vh;
  box-sizing: content-box;
  cursor: pointer;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: .3;
}

.w-lightbox-thumbnail {
  height: 10vh;
  background: #222;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, .4);
  border-radius: 50%;
  margin-top: -20px;
  margin-left: -20px;
  animation: .8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -4px;
  right: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view, .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left, .w-lightbox-right {
    opacity: .5;
    display: block;
  }

  .w-lightbox-close {
    opacity: .8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive, .w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before, .w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol, .w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6;
}

.w-richtext figure div {
  color: rgba(0, 0, 0, 0);
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  min-width: 200px;
  background: #c8c8c8;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

body {
  color: #333;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

h1 {
  color: #1d1f20;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Nunito, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 125%;
}

h2 {
  color: #1d1f20;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Nunito, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 125%;
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 125%;
}

p {
  color: #5a5d62;
  margin-bottom: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}

figure {
  margin-bottom: 0;
}

.body {
  height: 100vh;
  background-color: #fff;
  overflow: auto;
}

.container {
  max-width: 1110px;
  flex-flow: column;
  align-content: stretch;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: block;
}

.container.overflow {
  position: relative;
  overflow: hidden;
}

.image {
  padding: 20px;
  display: block;
}

.heading {
  font-size: 40px;
  font-weight: 300;
  line-height: 125%;
}

.type-column-1 {
  padding-right: 20px;
}

.tag-title {
  color: #222;
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 5px;
  padding-left: 18px;
  font-size: 22px;
  font-weight: 500;
  line-height: 44px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}

.type-column-2 {
  padding-top: 30px;
  padding-left: 20px;
}

.tags-subhead {
  color: #ec3872;
  background-color: rgba(236, 56, 114, .1);
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 20px;
}

.example-image {
  width: 240px;
  height: 434px;
  color: rgba(34, 34, 34, 0);
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f75cf3163d33b3c7dff8c6a_All-H1-headings-example.png");
  background-position: 0 0;
  background-size: 250px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  overflow: hidden;
  box-shadow: 5px 5px 50px rgba(0, 0, 0, .3);
}

.example-image:hover {
  color: #fff;
  text-shadow: 1px 1px 10px #000;
  background-image: linear-gradient(rgba(0, 0, 0, .63), rgba(0, 0, 0, .63)), url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f75cf3163d33b3c7dff8c6a_All-H1-headings-example.png");
  background-position: 0 0, 0 0;
  background-size: auto, 250px;
}

.tag-holder {
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 10px 20px;
  transition: box-shadow .4s;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0);
}

.tag-holder:hover {
  box-shadow: 0 0 75px rgba(0, 0, 0, .07);
}

.tags-section {
  max-width: 960px;
  background-color: #fff;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: block;
  position: relative;
  box-shadow: 0 1px 75px rgba(0, 0, 0, .05);
}

.paragraph {
  color: #5a5d62;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
}

.tag-divider {
  width: 100%;
  height: 1px;
  background-color: #f3f3f5;
  margin-top: 15px;
  margin-bottom: 10px;
}

.tag-label {
  color: #aaa;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 11px;
  line-height: 11px;
}

.sub-headline {
  color: #35373b;
  font-family: Nunito, sans-serif;
  font-size: 24px;
  line-height: 150%;
}

.sub-headline.mb-3 {
  max-width: 440px;
  margin-bottom: 32px;
}

.sub-headline.small {
  color: #5a5d62;
  font-size: 18px;
}

.sub-headline.small.mb {
  margin-bottom: 32px;
}

.sub-headline.small.white {
  color: #fff;
}

.sub-headline.small.white.mb-4 {
  margin-bottom: 38px;
}

.sub-headline.small.white.mb-4.width {
  width: 100%;
  max-width: 470px;
  margin-left: auto;
  margin-right: auto;
}

.header {
  width: 100%;
  height: 770px;
  background-color: #fff;
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f902ede471073d95a09c729_5f8efb17651ee61f9e1e167f_Group%2011%402x.png");
  background-position: 467px;
  background-repeat: no-repeat;
  background-size: cover;
}

.heading-2 {
  font-family: Nunito, sans-serif;
  font-size: 40px;
  font-weight: 300;
  line-height: 125%;
}

.navbar {
  background-color: rgba(0, 0, 0, 0);
  padding-top: 16px;
  padding-bottom: 16px;
}

.header-content {
  max-width: 527px;
  margin-top: 97px;
}

.italic {
  font-style: italic;
}

.button {
  color: #fff;
  background-color: #ff7900;
  border-radius: 999px;
  padding: 16px 32px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  box-shadow: 4px 4px 4px -1px rgba(29, 31, 32, .1), 3px 3px 2px -1px rgba(29, 31, 32, .06);
}

.button:hover {
  background-color: #ff9300;
}

.button.small {
  padding: 12px 24px;
  font-size: 16px;
}

.button.small.dark, .button.dark {
  background-color: #1d1f20;
}

.button.dark:hover {
  background-color: #35373b;
}

.header-h1 {
  margin-bottom: 24px;
}

.key-benefits {
  z-index: 2;
  margin-top: -59px;
  position: relative;
}

.key-benefits-grid {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #35373b;
  border: 1px solid #1d1f20;
  border-radius: 8px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
  display: grid;
}

.key-benefits-box {
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 38px 20px;
  display: flex;
}

.key-benefits-box.border {
  border-right: 1px solid #1d1f20;
  padding-left: 18px;
  padding-right: 18px;
}

.key-benefits-box-icon {
  margin-bottom: 16px;
}

.key-benefits-box-text {
  color: #fff;
  text-align: center;
  font-family: Nunito, sans-serif;
  font-size: 20px;
  line-height: 125%;
}

.bold {
  font-weight: 700;
}

.div-block {
  background-color: #f6f7f9;
}

.solutions {
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #f6f7f9;
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f77e6b802e55796f466cce3_gradient-1.svg");
  background-position: -500px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -175px;
  padding-top: 253px;
  padding-bottom: 122px;
  position: relative;
}

.overline {
  color: #ff7900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 13px;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  line-height: 125%;
}

.solutions-content {
  max-width: 480px;
}

.solutions-box-img {
  margin-bottom: 8px;
}

.solutions-grid {
  grid-column-gap: 16px;
  grid-row-gap: 53px;
  grid-template-rows: auto minmax(auto, .25fr);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  margin-top: 42px;
  display: grid;
}

.solutions-h2, .solutions-h3 {
  margin-bottom: 8px;
}

.utility-page-wrap {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.utility-page-content {
  width: 260px;
  text-align: center;
  flex-direction: column;
  display: flex;
}

.utility-page-form {
  flex-direction: column;
  align-items: stretch;
  display: flex;
}

.key-bennefits-grey-block {
  z-index: -15;
  width: 50%;
  height: 100%;
  background-color: #f6f7f9;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.brand {
  text-align: left;
  padding: 20px 20px 20px 0;
}

.navbar-container {
  max-width: 1110px;
  flex-flow: column;
  align-content: stretch;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  display: block;
}

.community {
  background-color: #fff;
  padding-top: 90px;
  position: relative;
  overflow: hidden;
}

.community-grid {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.community-h2 {
  margin-bottom: 16px;
}

.community-grid-image {
  max-width: 489px;
}

.community-reviews {
  margin-top: 110px;
}

.community-reviews-content {
  max-width: 544px;
}

.community-reviews-grid {
  width: 100%;
  height: 100%;
  max-width: 1067px;
  grid-column-gap: 30px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: .25fr .25fr .25fr;
  grid-auto-columns: 1fr;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
  padding-left: 0;
  padding-right: 20px;
  display: grid;
  overflow: hidden;
}

.community-reviews-card {
  width: 331px;
  background-color: #fff;
  border: 1px solid #e9eaed;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  box-shadow: 11px 11px 10px -3px rgba(29, 31, 32, .1), 4px 4px 4px -2px rgba(29, 31, 32, .05);
}

.card-content {
  padding: 16px 24px;
}

.card-footer {
  background-color: #f6f7f9;
  align-items: center;
  padding: 8px 24px;
  display: flex;
}

.card-stars {
  margin-bottom: 8px;
}

.card-avatar {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}

.card-avatar-image {
  border-radius: 999px;
}

.card-comment {
  color: #5a5d62;
  line-height: 150%;
}

.card-user {
  color: #5a5d62;
  margin-bottom: 4px;
  font-weight: 700;
  line-height: 120%;
}

.card-company {
  color: #8f949b;
  font-size: 12px;
  font-weight: 400;
  line-height: 120%;
}

.comunity-logos-grid {
  width: 1930px;
  flex: none;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.community-logo-box {
  margin-right: 30px;
}

.community-logo {
  height: 56px;
}

.case-studies {
  background-color: #f6f7f9;
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f787b17d508147c2d8c24fe_gradient-2.svg");
  background-position: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 141px;
  padding-bottom: 138px;
  position: relative;
  overflow: hidden;
}

.case-studies-grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.case-studies-grid-content {
  max-width: 453px;
}

.es-box {
  width: 100%;
  max-width: 512px;
  background-color: #35373b;
  border-radius: 4px;
  padding: 0 32px 72px;
  position: relative;
  box-shadow: 0 25px 50px 12px rgba(29, 31, 32, .2);
}

.es-banner {
  color: #fff;
  text-transform: uppercase;
  background-color: #202123;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 32px;
  right: auto;
}

.es-content {
  margin-top: 24px;
}

.es-logo {
  margin-bottom: 24px;
}

.list-item {
  color: #fff;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 120%;
  display: flex;
}

.white {
  color: #f6f7f9;
  margin-bottom: 24px;
  overflow: visible;
}

.white.mb-2 {
  margin-bottom: 24px;
}

.white.mb-1 {
  margin-bottom: 16px;
}

.es-title {
  color: #fff;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
}

.mr-1 {
  margin-right: 10px;
}

.list {
  margin-top: 40px;
  margin-left: 16px;
}

.testimonials {
  padding-top: 60px;
  padding-bottom: 56px;
  display: none;
}

.testimonial-box {
  max-width: 710px;
  background-color: #fff;
  border: 1px solid #e9eaed;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  padding: 37px 51px;
  box-shadow: 18px 18px 20px -5px rgba(29, 31, 32, .1), 7px 7px 10px -5px rgba(29, 31, 32, .04);
}

.block-quote-text {
  color: #5a5d62;
  border-left: 0 rgba(0, 0, 0, 0);
  margin-bottom: auto;
  margin-right: 2px;
  padding: 0;
  font-family: Nunito, sans-serif;
  font-size: 18px;
  line-height: 145%;
}

.quote {
  color: #ff7900;
  font-size: 20px;
  font-weight: 700;
}

.block-quote {
  display: flex;
}

.testimonial-info {
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  display: flex;
}

.testimonial-user {
  align-items: center;
  display: flex;
}

.testimonial-user-avatar {
  width: 64px;
  height: 64px;
  flex: none;
  margin-right: 16px;
}

.testimonial-user-info {
  flex: none;
}

.user-avatar {
  border: 1px solid #e9eaed;
  border-radius: 999px;
}

.user-name {
  color: #5a5d62;
  text-transform: uppercase;
  margin-bottom: 4px;
  font-weight: 700;
  line-height: 120%;
}

.user-company {
  color: #8f949b;
}

.slide-nav {
  top: 291px;
}

.slider-arrow {
  width: 44px;
  height: 44px;
  background-color: #fff;
  border: 1px solid #e9eaed;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 7px 7px 15px -3px rgba(29, 31, 32, .1), 3px 3px 6px -2px rgba(29, 31, 32, .05);
}

.slider-arrow.testimonial-right {
  padding-left: 6px;
}

.testimonial-slider {
  background-color: rgba(0, 0, 0, 0);
}

.final-cta {
  z-index: 0;
  width: 100%;
  height: 301px;
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f7899d0c6adaf2d9a0896ae_shine.svg"), linear-gradient(#e5a310, #ff7900 83%);
  background-position: 0%, 0 0;
  background-repeat: no-repeat, repeat;
  background-size: contain, auto;
  padding-top: 49px;
  padding-bottom: 38px;
  position: relative;
  overflow: visible;
}

.final-cta-content {
  max-width: 669px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  background-color: #1d1f20;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
}

.footer-logo {
  align-items: center;
  display: flex;
}

.footer-logo-img {
  margin-left: 3px;
  margin-right: 4px;
}

.footer-logo-text {
  color: #bfc3c8;
  margin-top: 4px;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
}

.footer-copy {
  margin-top: 4px;
}

.text-block {
  color: #8f949b;
  font-size: 10px;
  line-height: 120%;
}

.isometric-tiles {
  z-index: -1;
  width: 100%;
  height: 324px;
  text-align: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
}

.es-slider {
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}

.hide {
  margin: 485px 117px -69px;
  display: none;
  top: 0;
  bottom: 0;
}

.es-slide-nav {
  top: 557px;
}

.gradient {
  z-index: 2;
  width: 56px;
  height: 107px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, .13) 13%, #fff 97%);
  position: absolute;
  top: auto;
  bottom: 50px;
  left: auto;
  right: 0%;
}

.community-logos-row {
  justify-content: flex-start;
  align-items: center;
  margin-top: 17px;
  margin-bottom: 86px;
  display: flex;
}

.isometric-tiles-tablet {
  display: none;
}

.rays-left {
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: auto;
}

.rays-right {
  position: absolute;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.solutions-button {
  display: none;
}

.image-2 {
  max-width: 50%;
}

.html-embed {
  width: 100%;
  margin-bottom: 40px;
  display: block;
  position: static;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.column {
  height: 100vh;
  object-fit: cover;
  background-color: #f6f7f9;
  background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f8d5fedc2a03bfbbfd7d992_gradient.png");
  background-position: 0 0;
  background-size: cover;
  display: block;
  position: fixed;
  overflow: hidden;
}

.column-2 {
  left: 33.33%;
  overflow: hidden;
}

.columns {
  position: relative;
  overflow: hidden;
}

.image-3 {
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  position: static;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.white-text-link {
  color: #fff;
}

.popup-overlay {
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, .59);
  display: inline-block;
  position: fixed;
}

.button-2 {
  color: #ff7900;
  background-color: #fff;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 0 0;
  background-size: auto;
  border: 2px solid #ff7900;
  border-radius: 20px;
  margin-right: 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.button-2:hover {
  color: #fff;
  background-color: #ff7900;
}

.div-block-2 {
  width: 100%;
  background-color: #fff;
  border-top: 3px solid #ff7900;
  border-radius: 0;
  flex-direction: row;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 20px 12px;
  display: flex;
  box-shadow: 0 0 20px -4px rgba(0, 0, 0, .24);
}

.image-4 {
  width: 120px;
  height: 120px;
}

.text-block-2 {
  color: #000;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 40px;
  font-family: Montserrat, sans-serif;
  font-size: 26px;
  font-weight: 500;
}

.popup {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 42px;
  padding-right: 42px;
  font-family: Montserrat, sans-serif;
}

.popup.sublabel {
  padding-left: 112px;
  padding-right: 112px;
  font-size: .9em;
}

.div-block-3 {
  flex: 0 auto;
  margin-top: auto;
}

.popup-overlay-2 {
  z-index: 10;
  width: auto;
  height: auto;
  object-fit: fill;
  background-color: rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: auto;
}

.inner {
  width: auto;
  height: auto;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.text-block-copy {
  color: #35373b;
  flex-direction: row;
  flex: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-right: 10px;
  font-size: 14px;
  line-height: 21px;
  display: flex;
}

.link-block {
  height: 32px;
  background-color: #fff;
  border: 2px solid #ff7900;
  border-radius: 20px;
  flex-flow: row-reverse;
  flex: 0 auto;
  justify-content: flex-end;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  display: flex;
}

.text-block-3 {
  color: #ff7900;
  background-color: rgba(255, 255, 255, 0);
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
}

.div-block-4 {
  max-width: 1066px;
  flex: 1;
  display: flex;
}

.text-block-4 {
  color: #ff7900;
  font-size: 18px;
  position: static;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.div-block-6 {
  width: 100%;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.div-block-7 {
  display: none;
}

.heading-3 {
  padding-bottom: 16px;
}

.image-10 {
  display: block;
}

.image-case-study {
  margin-bottom: 8px;
}

.top-bar {
  width: 64px;
  height: 4px;
  background-color: #ff7900;
  border-bottom-left-radius: 2px;
}

.slide, .slide-2, .slide-3 {
  margin-right: 16px;
}

@media screen and (min-width: 1920px) {
  .header {
    background-position: 772px;
    background-size: cover;
  }

  .community {
    grid-column-gap: 20px;
  }

  .community-reviews-grid {
    grid-template-rows: 1fr;
    padding-left: 0;
    padding-right: 0;
  }

  .community-reviews-card {
    box-shadow: 11px 11px 10px -3px rgba(29, 31, 32, .1), 4px 4px 4px -2px rgba(29, 31, 32, .05);
  }

  .es-box {
    box-shadow: 0 25px 50px 12px rgba(29, 31, 32, .2);
  }

  .mask {
    padding-right: 0;
  }

  .hide {
    margin: 480px 115px -68px;
    display: none;
    top: 0;
    bottom: 0;
  }

  .image-case-study {
    text-align: left;
    position: static;
  }

  .top-bar {
    width: 64px;
    height: 4px;
    background-color: #ff7900;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-bottom: 0;
    padding-right: 0;
  }

  .slide {
    margin-right: 16px;
    padding-right: 0;
  }

  .slide-2, .slide-3 {
    margin-right: 16px;
  }
}

@media screen and (max-width: 991px) {
  .container.no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .image {
    flex: 0 auto;
    order: 0;
    align-self: auto;
  }

  .sub-headline.small.white.mb-4.width {
    max-width: 484px;
    margin-left: auto;
    margin-right: auto;
  }

  .sub-headline.small.width {
    max-width: 354px;
  }

  .header {
    height: 100%;
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f8d334e24084bac974fc093_Hero%20Image.jpg");
    background-position: 350px;
    background-repeat: no-repeat;
    background-size: auto;
    padding-bottom: 154px;
  }

  .key-benefits-grid {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    align-items: stretch;
    display: grid;
  }

  .key-benefits-box {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  .key-benefits-box.border {
    border-right-style: none;
    border-right-width: 0;
    border-radius: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .key-benefits-box-text {
    text-align: left;
    flex: 0 auto;
  }

  .bold {
    text-align: left;
  }

  .solutions {
    background-color: #f6f7f9;
    background-position: -500px;
    background-size: cover;
    padding-bottom: 80px;
  }

  .solutions-grid {
    grid-column-gap: 40px;
    grid-row-gap: 50px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr;
  }

  .brand {
    padding-left: 0;
  }

  .community {
    background-position: 0 -335px;
    background-size: auto;
    padding-top: 80px;
  }

  .community-reviews {
    margin-top: 74px;
  }

  .community-reviews-grid {
    padding-left: 20px;
    overflow: hidden;
  }

  .community-reviews-card.mr-5 {
    margin-right: 50px;
  }

  .case-studies {
    background-color: #f6f7f9;
    background-position: 144px 0;
    background-size: cover;
    padding-top: 56px;
    padding-bottom: 80px;
  }

  .case-studies-grid {
    grid-column-gap: 46px;
  }

  .testimonial-slide {
    margin-right: 50px;
  }

  .slider-arrow.testimonial-right {
    right: 10px;
  }

  .slider-arrow.testimonial-left {
    left: 10px;
  }

  .final-cta {
    height: 100%;
  }

  .mask {
    object-fit: fill;
  }

  .es-slider {
    cursor: auto;
  }

  .hide {
    display: none;
  }

  .es-slide-nav {
    top: 705px;
  }

  .isometric-tiles-desktop {
    display: none;
  }

  .isometric-tiles-tablet {
    width: 100%;
    display: block;
  }

  .mask-2 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .rays-left {
    top: -12%;
    left: -13%;
  }

  .html-embed {
    margin-top: 20px;
  }

  .column {
    height: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    flex-direction: column;
    align-items: center;
    display: flex;
    position: static;
  }

  .column-2 {
    left: 0%;
  }

  .image-3 {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .div-block-2 {
    box-shadow: 0 0 19px 8px rgba(0, 0, 0, .1);
  }

  .text-block-copy {
    width: 100%;
    flex: 0 auto;
  }

  .link-block {
    align-self: center;
  }

  .div-block-4 {
    width: 100%;
    flex: 0 auto;
  }

  .text-block-4 {
    text-align: center;
  }

  .div-block-6 {
    max-width: 100%;
    background-color: #f6f7f9;
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f8d5fedc2a03bfbbfd7d992_gradient.png");
    background-position: 0 0;
    background-size: cover;
    padding-top: 50px;
    display: none;
  }

  .div-block-7 {
    background-color: #f6f7f9;
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f8d5fedc2a03bfbbfd7d992_gradient.png");
    background-position: 0 0;
    background-size: cover;
    padding-top: 40px;
    display: block;
  }

  .image-5 {
    margin-right: 30px;
    display: inline-block;
  }

  .image-6, .image-7, .image-8, .image-9 {
    margin-right: 30px;
  }

  .top-bar {
    width: 64px;
    height: 4px;
  }
}

@media screen and (max-width: 767px) {
  h2 {
    font-size: 32px;
  }

  .image {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f787b180832c085422d91bc_rays_right.svg");
    background-position: 100% 400px;
    background-size: auto;
  }

  .header-content {
    margin-top: 60px;
  }

  .key-benefits-grid {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;
  }

  .key-benefits-box {
    flex-direction: row;
  }

  .key-benefits-box.border {
    border-right: 0 rgba(0, 0, 0, 0);
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .key-benefits-box-icon {
    flex: none;
    margin-bottom: 0;
    margin-right: 10px;
  }

  .key-benefits-box-text {
    text-align: left;
  }

  .solutions {
    background-color: #f6f7f9;
    background-position: -780px;
  }

  .key-bennefits-grey-block {
    display: none;
  }

  .community {
    background-position: 0 -452px;
  }

  .community-grid {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }

  .case-studies {
    background-color: #f6f7f9;
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f787b17d508147c2d8c24fe_gradient-2.svg");
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .case-studies-grid {
    grid-column-gap: 20px;
    grid-row-gap: 60px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }

  .es-box {
    max-width: 100%;
  }

  .es-content {
    margin-right: 0;
  }

  .isometric-tiles {
    display: none;
  }

  .es-slide-nav {
    top: 606px;
  }

  .mask-2 {
    height: 400px;
  }

  .rays-left {
    left: -25%;
  }

  .rays-right {
    right: -25%;
  }

  .column {
    height: auto;
    position: relative;
  }

  .column-2 {
    left: auto;
  }

  .image-3 {
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    display: block;
    position: relative;
  }

  .text-block-copy {
    text-align: center;
  }

  .link-block {
    align-self: center;
    margin-top: 10px;
  }

  .div-block-4 {
    flex-direction: column;
    flex: 0 auto;
    align-self: center;
  }

  .div-block-6 {
    display: none;
    position: static;
  }

  .div-block-7 {
    width: 100%;
    background-color: #f6f7f9;
    padding-top: 40px;
    display: block;
  }

  .image-5, .image-6, .image-7, .image-8, .image-9 {
    margin-right: 10px;
  }

  .slide-3 {
    margin-right: 16px;
  }
}

@media screen and (max-width: 479px) {
  h1 {
    font-size: 40px;
  }

  .container {
    max-width: 100%;
  }

  .header {
    background-position: 100% 360px;
    padding-bottom: 110px;
  }

  .button.ghost {
    box-shadow: none;
    color: #ff7900;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #ff7900;
    font-size: 16px;
  }

  .key-benefits-grid {
    grid-auto-flow: row;
    padding: 20px;
  }

  .key-benefits-box {
    align-items: center;
    padding: 20px 0;
  }

  .key-benefits-box.border {
    margin-bottom: 32px;
    padding-left: 0;
    padding-right: 0;
  }

  .key-benefits-box-icon {
    flex: 0 auto;
    margin-right: 10px;
  }

  .key-benefits-box-text {
    flex: 1;
    font-size: 18px;
  }

  .solutions {
    height: 1250px;
    background-color: #f6f7f9;
    background-position: -1200px;
    background-size: cover;
    margin-top: -102px;
    padding-top: 170px;
    padding-bottom: 10px;
    overflow: hidden;
  }

  .solutions-grid {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 1fr;
  }

  .brand {
    padding-left: 0;
  }

  .community {
    background-position: 0 -640px;
  }

  .community-grid {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }

  .community-h2 {
    display: block;
  }

  .case-studies {
    width: 100%;
    background-color: #f6f7f9;
    background-image: url("https://uploads-ssl.webflow.com/5f6c64c9c624896fb078240d/5f787b17d508147c2d8c24fe_gradient-2.svg");
    background-position: -266px 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .case-studies-grid {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    display: block;
  }

  .case-studies-grid-content {
    width: 100%;
    max-width: 100%;
  }

  .es-box {
    max-width: 100%;
    margin-top: 48px;
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  .testimonials {
    padding-bottom: 0;
  }

  .testimonial-box {
    flex-direction: column;
    padding: 30px;
    display: flex;
  }

  .block-quote-text {
    font-size: 15px;
  }

  .testimonial-info {
    flex-direction: column;
  }

  .testimonial-logo {
    margin-top: 20px;
  }

  .user-company {
    font-size: 12px;
  }

  .slide-nav {
    top: 350px;
  }

  .slider-arrow.testimonial-right, .slider-arrow.testimonial-left {
    top: -70px;
  }

  .testimonial-slider {
    height: 100%;
  }

  .hide {
    display: none;
  }

  .es-slide-nav {
    top: 771px;
  }

  .mask-2 {
    height: 450px;
  }

  .rays-left {
    top: -15%;
    left: -49%;
  }

  .rays-right {
    right: -50%;
  }

  .solutions-button {
    width: 100%;
    height: 100%;
    background-color: #f6f7f9;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 30px;
    display: flex;
  }

  .column {
    height: auto;
  }

  .image-3 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .image-5, .image-6, .image-7, .image-8, .image-9 {
    margin-right: 10px;
  }

  .top-bar {
    width: 64px;
    height: 4px;
    background-color: #ff7900;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-bottom: 0;
    padding-right: 0;
  }
}

#w-node-_88da2f96-d617-5560-eb1d-2825a75dde54-fa11d559 {
  align-self: center;
  justify-self: start;
}

#w-node-f4891e63-6e78-35d9-b543-fe046ac4e178-fa11d559, #w-node-e820459e-30f3-8674-0f97-55b1afab0daa-fa11d559, #w-node-_15cc4ea3-86d9-b5fc-02b8-4b4b731c4ba3-fa11d559 {
  align-self: start;
}

#w-node-_3331be86-fb9e-5058-f21c-4c0c1986f74f-fa11d559 {
  justify-self: end;
}

@media screen and (min-width: 1920px) {
  #w-node-_3331be86-fb9e-5058-f21c-4c0c1986f74f-fa11d559 {
    justify-self: end;
  }
}

@media screen and (max-width: 991px) {
  #w-node-_88da2f96-d617-5560-eb1d-2825a75dde54-fa11d559 {
    align-self: start;
  }
}

@media screen and (max-width: 767px) {
  #w-node-_3331be86-fb9e-5058-f21c-4c0c1986f74f-fa11d559 {
    align-self: start;
    justify-self: start;
  }
}

@media screen and (max-width: 479px) {
  #w-node-_4c580ef0-99a1-d627-462b-285982c952c4-fa11d559 {
    align-self: auto;
    justify-self: auto;
  }

  #w-node-b7bbd7be-43b7-29ce-56b8-2d2479ffdd6c-fa11d559 {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }

  #w-node-_3331be86-fb9e-5058-f21c-4c0c1986f74f-fa11d559 {
    align-self: start;
    justify-self: start;
  }
}
