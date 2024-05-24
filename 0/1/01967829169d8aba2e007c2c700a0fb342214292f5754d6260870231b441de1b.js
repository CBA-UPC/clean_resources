/*! For license information please see utils.js.LICENSE.txt */
!function(){"use strict";var t={d:o:r:,e={};t.r(e),t.d(e,{run:function(){return xt},runGroup:function(){return At}});var n={};t.r(n),t.d(n,{getScroller:function(){return zt},lock:function(){return Jt},unlock:function(){return Rt}});var r={};t.r(r),t.d(r,{reInitChildren:function(){return de}});var o={};t.r(o),t.d(o,{down:function(){return me},up:function(){return ye}});var i={};t.r(i),t.d(i,{elVisibleHeight:function(){return Ae},elements:function(){return je},height:function(){return xe},width:function(){return Ee}});var a={};t.r(a),t.d(a,{clear:function(){return ze},get:function(){return He},put:function(){return Ne},remove:function(){return qe}});var c={};t.r(c),t.d(c,{clear:function(){return We},get:function(){return Re},put:function(){return Je},remove:function(){return Ue}});var u={};t.r(u),t.d(u,{get:function(){return Be},remove:function(){return Ye},set:function(){return Xe}});var l={};function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}tion v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(n&&e){if(27===t.keyCode)return e.focus(),void r();if(9===t.keyCode){var o=g(n),i=o[0],a=o[o.length-1];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())}}else console.error("You need to pass a container and trigger node to focusLoop.")}.r(l),t.d(l,{animate:function(){return e},applyBrowserClasses:function(){return Ht},arrayEquals:function(){return k},arrayToInt:function(){return P},aspectRatioToPadding:function(){return L},bodyLock:function(){return n},browsers:function(){return Nt},checkNotificationPromise:function(){return De},clipboard:function(){return Ut},consoleError:function(){return x},consoleInfo:function(){return A},consoleLog:function(){return T},consoleWarn:function(){return C},convertElements:function(){return d},cookieStorage:function(){return u},debounce:function(){return Te},deepMerge:function(){return W},delay:function(){return Y},delegate:function(){return _e},dragHorizontal:function(){return Bt},escapeHtml:function(){return $},escapeScripts:function(){return K},filterObject:function(){return B},findNestedObject:function(){return X},focusLoop:function(){return v},getChildren:function(){return Xt},getClosest:function(){return Yt},getConfig:function(){return G},getCoords:function(){return $t},getFocusable:function(){return g},getHiddenHeight:function(){return Kt},getNode:function(){return Vt},getNodes:function(){return Gt},hasClassFromArray:function(){return Qt},hasScrollbar:function(){return Zt},insertAfter:function(){return te},insertBefore:function(){return ee},isEmptyObject:function(){return V},isExternalLink:function(){return ne},isFileLink:function(){return re},isFormDirty:function(){return oe},isFunction:function(){return N},isImageLink:function(){return ie},isJestTest:function(){return E},isJson:function(){return Q},isObject:function(){return Z},isRtl:function(){return ae},localStorage:function(){return a},matchesOrContainedInSelectors:function(){return ce},mimicFn:function(){return ft},objectAssign:function(){return dt},objectToAttributes:function(){return mt},objectToFormData:function(){return pt},openNewTab:function(){return ue},parseUrl:function(){return gt},popup:function(){return le},queryToJson:function(){return St},ready:function(){return Ie},removeClassThatContains:function(){return se},resize:function(){return Me},saferHtml:function(){return vt},sessionStorage:function(){return c},setAttributes:function(){return h},shouldLoadChunk:function(){return fe},simpleBar:function(){return r},slide:function(){return o},slugify:function(){return ht},spacerClasses:function(){return Se},speak:function(){return j},sprintf:function(){return bt},trigger:function(){return Wt},uniqueId:function(){return jt},updateQueryVar:function(){return Et},viewport:function(){return i},visible:function(){return p},vsprintf:);var m={containers:[]},y={previousMessage:""},b=w=,O,Sunction x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.console&&!E()&&console.error(t)}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.console&&!E()&&console.info(t)}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.console&&!E()&&console.log(t)}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.console&&!E()&&console.warn(t)var Par I="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103,M,Don U(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.arrayMerge(n),n.isMergeableObject=n.isMergeableObject||F,n.cloneUnlessOtherwiseSpecified=H;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n)(t,e,n):H(e,n)}U.all;var W=U,Bnt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ot,it,at,ct,ut=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),lt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),st;function ft(t,e){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).ignoreNonConfigurable,o=void 0!==r&&r,i=t.name,a(Reflect.ownKeys(e));try{for(a.s();!(n=a.n()).done;){var c=n.value;ot(t,e,c,o)}}catch(t){a.e(t)}finally{a.f()}return at(t,e),st(t,e,i),tvar ptfunction vt(t){for(var e=t[0],n=1;n<arguments.length;n++)e+=String(arguments[n]).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e+=t[n];return ear yt={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function bt(t){return(t),arguments)var Ot=Object.create(null),Star xt,At,Tt=/(android)/i.test(window.navigator.userAgent),Ct=!!window.chrome,kt="undefined"!=typeof InstallTrigger,Pt=document.documentMode||!1,Lt=!Pt&&!!window.StyleMedia,_t=!!window.navigator.userAgent.match(/(iPod|iPhone|iPad)/i),It=!!window.navigator.userAgent.match(/(iPod|iPhone)/i),Mt=!!window.opera||window.navigator.userAgent.indexOf(" OPR/")>=0,Dt=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||!Ct&&!Mt&&"undefined"!==window.webkitAudioContext,Ft=window.navigator.platformar qt=0,zt,Jt,Rtme=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.offsetHeight,i=Kt(t),a=null;t.style.maxHeight="0",ve(e),he(e);var c;setTimeout((function(){pe[e].down=window.requestAnimationFrame(c)}),25)},ye=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.offsetHeight,i=null;t.style.maxHeight="".concat(o,"px"),ve(e),he(e);var a;setTimeout(),25)}ar Oevar je,Ee=function(){var t=je(),e=t.docElem,n=t.win,r=e.clientWidth,o=n.innerWidth;return r<o?o:r},xe,Aevar Ce=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var ke=Element.prototype;ke.matches=ke.matchesSelector||ke.mozMatchesSelector||ke.msMatchesSelector||ke.oMatchesSelector||ke.webkitMatchesSelectorar _efunction Me(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?window.removeEventListener("resize",Te(t,{wait:e})):window.addEventListener("resize",Te(t,{wait:e}))var Fe,Ne=function(t,e){window.localStorage.setItem(t,e)},He=function(t){return window.localStorage.getItem(t)},qe=function(t){return window.localStorage.removeItem(t)},ze=function(){window.localStorage.clear()},Je,Re=function(t){return window.sessionStorage.getItem(t)},Ue,We,Be,Xe,Ye;window.gform=window.gform||{},window.gform.utils=window.gform.utils||{},Fe=window.gform.utils,Object.entries(l).forEach())}();
//# sourceMappingURL=utils.js.map