var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.backchanger=function(){ASCDP.adS.loadModules(["moveSky","getScrollTop","getWinHeight","calcY","delCSS","setCSS"],function(){var r,t,s,a=ASCDP.adS,o=ASCDP.pageSet,l=a.getScrollTop(),d=a.getWinHeight(),S=0-d;a.activeWP="",a.observeArr=a.observeArr.filter(function(e,r){return a.observeArr.indexOf(e)===r});for(let e=0;e<a.observeArr.length;e++)a.adElts[a.observeArr[e]]?t=a.adElts[a.observeArr[e]].posY:(r=document.querySelector(a.observeArr[e]))?t=a.calcY(r,r.offsetTop)-d:a.observeArr.splice(e--,1),t<=l+d&&S<=t&&!a.observeArr[e].match("skyleft")&&(S=t,a.activeWP=a.observeArr[e]);if(a.activeWP&&o.stickySky&&a.adElts[a.activeWP]&&(a.adElts[a.activeWP].dynSky||-1<a.activeWP.indexOf("sky"))&&(a.moveSky(a.adElts[a.activeWP]),a.adElts.skyleft&&a.adElts.skyleft.hasAd&&a.moveSky(a.adElts.skyleft),a.adElts.skyleft_rlSlot&&a.adElts.skyleft_rlSlot.hasAd&&a.moveSky(a.adElts.skyleft_rlSlot)),a.oldWP!==a.activeWP){for(var e in a.setCSS(o.pageCSS),a.adElts)a.adElts.hasOwnProperty(e)&&a.adElts[e].xtraCSS&&!a.observeArr.toString().match(e)&&a.addCSS(a.adElts[e].xtraCSS);a.oldWP=a.activeWP;for(let e=a.observeArr.length-1;0<=e;e--)a.observeArr[e].match("skyleft")||(t=0===e?0:a.adElts[a.observeArr[e]]?a.adElts[a.observeArr[e]].posY:a.calcY(document.querySelector(a.observeArr[e]),document.querySelector(a.observeArr[e]).offsetTop)-d,s="div[id^='"+a.observeArr[e]+"_i"+a.adElts[a.observeArr[e]].insertionId+"_'], #"+a.observeArr[e]+" * {visibility:hidden!important;overflow:hidden!important;}",a.delCSS(s),l+d-t<0?"takeover"!==a.adElts[a.observeArr[e]].tempName&&a.addCSS(s):a.activeWP===a.observeArr[e]&&a.adElts[a.observeArr[e]]?(a.addCSS(a.adElts[a.activeWP].xtraCSS),a.adElts[a.observeArr[e]].BGU&&a.addCSS(o.cursorCSS+"#"+a.activeWP+"_rlWr{cursor:pointer;}")):0<l+d-t&&"takeover"!==a.adElts[a.observeArr[e]].tempName&&a.addCSS(s))}})};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         e.exports,t(n,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},27424:function(e,t,n){var r=n(85372),o=n(68872),i=n(86116),a=n(12218);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},1753:function(e,t,n){var r=n(73808);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(63405),o=n(79498),i=n(86116),a=n(42281);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},95036:function(e,t,n){var r=n(18698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},64062:function(e,t,n){var r=n(18698).default,o=n(95036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},18698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},86116:function(e,t,n){var r=n(73897);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},33496:function(e,t,n){var r=n(73808),o=n(6015),i=n(46035),a=n(3515);function u(t){var n="function"===typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!i(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,u(t)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},15861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,l,"next",e)}function l(e){r(a,o,i,u,l,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},45987:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(63366);function o(e,t){if(null==e)return{};var n,o,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},63366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},74165:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(71002);function o(){o=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(I){c=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.creat